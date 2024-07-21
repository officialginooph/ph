var radius = 240;
var autorotate = true;
var rotatespeed = -60;
var imgwidth = 120;
var imgheight = 170;

setTimeout(function() {
    init(); // Call init function after timeout
}, 1000);

var odrag = document.getElementById('dragcontainer');
var ospin = document.getElementById('spincontainer');
var aimg = ospin.getElementsByTagName('img');

var ele = [...aimg];

ospin.style.width = imgwidth + "px";
ospin.style.height = imgheight + "px";

var ground = document.getElementById('ground');

ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delaytime = 0) {
    for (let i = 0; i < ele.length; ++i) {
        ele[i].style.transform = "rotateY(" + (i * (360 / ele.length)) + "deg) translateZ(" + radius + "px)";
        ele[i].style.transition = "transform 1s";
        ele[i].style.transitionDelay = (delaytime || (ele.length - i) / 4) + "s";
    }
}

function applytransform(obj) {
    if (ty > 180) ty = 180;
    if (ty < 0) ty = 0;

    obj.style.transform = "rotateX(" + (-ty) + "deg) rotateY(" + (tx) + "deg)";
}

function playspin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sx, sy, nx, ny, desx = 0, desy = 0, tx = 0, ty = 10;
var touchStartX, touchStartY;
var touchMoved = false;

if (autorotate) {
    var animationname = (rotatespeed > 0 ? 'spin' : 'spinrevert');

    ospin.style.animation = `${animationname} ${Math.abs(rotatespeed)}s infinite linear`;
}

// Touch events for mobile
odrag.addEventListener('touchstart', function(e) {
    if (!isInTourSection(e)) return;
    e.preventDefault();
    clearInterval(odrag.timer);

    var touch = e.touches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
});

odrag.addEventListener('touchmove', function(e) {
    if (!isInTourSection(e)) return;
    e.preventDefault();
    touchMoved = true;

    var touch = e.touches[0];
    var touchMoveX = touch.clientX;
    var touchMoveY = touch.clientY;

    desx = touchMoveX - touchStartX;
    desy = touchMoveY - touchStartY;

    tx += desx * 0.1;
    ty += desy * 0.1;

    applytransform(odrag);

    touchStartX = touchMoveX;
    touchStartY = touchMoveY;
});

odrag.addEventListener('touchend', function(e) {
    if (!isInTourSection(e)) return;
    e.preventDefault();

    if (touchMoved) {
        odrag.timer = setInterval(function() {
            desx *= 0.95;
            desy *= 0.95;
            tx += desx * 0.1;
            ty += desy * 0.1;

            applytransform(odrag);
            playspin(false);

            if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
                clearInterval(odrag.timer);
                playspin(true);
            }
        }, 17);
    }

    touchMoved = false;
});

// Function to check if touch event is within tour section
function isInTourSection(event) {
    var target = event.target || event.srcElement;
    return (target.closest('#tour') !== null);
}

// Mouse events for desktop (unchanged from your original code)

document.onmousedown = function(e) {
    if (!isInTourSection(e)) return;
    e.preventDefault();
    clearInterval(odrag.timer);

    sx = e.clientX;
    sy = e.clientY;

    document.onmousemove = function(e) {
        var nx = e.clientX;
        var ny = e.clientY;

        desx = nx - sx;
        desy = ny - sy;

        tx += desx * 0.1;
        ty += desy * 0.1;

        applytransform(odrag);

        sx = nx;
        sy = ny;
    };

    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;

        odrag.timer = setInterval(function() {
            desx *= 0.95;
            desy *= 0.95;
            tx += desx * 0.1;
            ty += desy * 0.1;

            applytransform(odrag);
            playspin(false);

            if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
                clearInterval(odrag.timer);
                playspin(true);
            }
        }, 17);
    };
};

document.onmousewheel = function(e) {
    if (!isInTourSection(e)) return;
    e.preventDefault();
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
};
