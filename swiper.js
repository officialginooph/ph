document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper(".swiper", {
        effect: "cards",
        grabCursor: true,
        initialSlide: 3,
        speed: 500,
        rotate: true,
        mousewheel: {
            invert: false,
        },
    
        // Optional: If you have navigation buttons
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var contentData = [
        {
            title: "GINOONG",
            subtitle: "Kerby",
            description: "<b>Full Name:</b> Asley Kerby Montejo<br><b>Birthday:</b> May 30, 2005"
        },
        {
            title: "GINOONG",
            subtitle: "Guian",
            description: "<b>Full Name:</b> Myke De Guzman<br><b>Birthday:</b> June 13, 2003"
        },
        {
            title: "GINOONG",
            subtitle: "Niko",
            description: "<b>Full Name:</b> Jhon Cyrille Batallones<br><b>Birthday:</b> March 6, 2003"
        },
        {
            title: "GINOO PH",
            subtitle: "About us",
            description: "GINOO PH is a dynamic and talented group known for their electrifying performances and captivating music. Comprising passionate individuals dedicated to their craft, GINOO PH seamlessly blends vocal prowess with musical mastery, creating a unique and engaging experience for audiences worldwide."
        },
        {
            title: "GINOONG",
            subtitle: "Jeff",
            description: "<b>Full Name:</b> Jefferson Regadillo<br><b>Birthday:</b> July 8, 2004"
        },
        {
            title: "GINOONG",
            subtitle: "Eduard",
            description: "<b>Full Name:</b> John Eduard Hernandez<br><b>Birthday:</b> September 29, 2005"
        },
        {
            title: "GINOONG",
            subtitle: "Kenzy",
            description: "<b>Full Name:</b> Kenzy Moral<br><b>Birthday:</b> October 19, 2004"
        },
        {
            title: "GINOONG",
            subtitle: "Joosten",
            description: "<b>Full Name:</b> Erris Arevalo<br><b>Birthday:</b> March 9, 2003"
        }
    ];
    swiper.on('slideChange', function () {
        var activeIndex = swiper.realIndex; // Use 'realIndex' instead of 'activeIndex' for looped slides
        var slideData = contentData[activeIndex];
        updateContent(slideData);
    });
    function updateContent(data) {
        var titleElement = document.querySelector('.content-slide h2');
        var subtitleElement = document.querySelector('.content-slide h3');
        var descriptionElement = document.querySelector('.content-slide p');

        titleElement.textContent = data.title;
        subtitleElement.textContent = data.subtitle;
        descriptionElement.innerHTML = data.description;
    }

    // Initial content update
    updateContent(contentData[3]);
});


