$(window).on('load', function () {
  $(".preloader").hide();
});
$(document).ready(function() {
    new WOW().init();

    //////// search /////////////
    $(".search-btn").click(function(e) {
        e.preventDefault();
        $('.search-content').toggleClass('height-when-open');
        $('.search-btn').toggleClass('close-search');
    });

    //phone size menu onclick
    if ($(window).width() <= 991) {

        $(".menu-id").click(function(e) {
            e.preventDefault();

            $(".navgition").toggleClass("reset-left");

            $("body").toggleClass("overflow");
          

        });

        //slide down menu
        $(".menu-item-has-children").click(function(e) {
            e.preventDefault();
            $(this).find(".sub-menu ").slideToggle(400);
            $(".menu-item-has-children ").not(this).find(".sub-menu ").slideUp(400);
            if ($(window).width() <= 991) {

                $(this).toggleClass("active");
                $(".menu-item-has-children ").not(this).removeClass("active");

            }
        });
    }
 ////////////** counter  *///////////////////////////////
 var ax = 0;
 $(window).scroll(function() {
 
     var oTop = $('#counter').offset().top - window.innerHeight;
     // Md.Asaduzzaman Muhid
     if (ax == 0 && $(window).scrollTop() > oTop) {
         $('.counter-number').each(function() {
             var $this = $(this);
             jQuery({
                 Counter: 0
             }).animate({
                 Counter: $this.text()
             }, {
                 duration: 2000,
                 easing: 'swing',
                 step: function() {
                     $this.text(Math.ceil(this.Counter));
                 }
             });
         });
         ax = 1; // Md.Asaduzzaman Muhid
     }
 });
 //fixed nav
 $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var $stickyNav = $(".top-header");
    var $stickyHeader = $("header");
    var windowWidth = $(window).width();
    // Handle fixed navigation
    $stickyNav.toggleClass("fixed-nav", scroll >= 200);
    // Handle fixed header
    if (lastScroll - scroll > 0 || (lastScroll - scroll >= 0 && windowWidth <= 991)) {
        $stickyHeader.addClass("fixed-header");
        $('.search-content').removeClass('height-when-close', 1000);
    }
  
    if (scroll === 0) {
        $stickyNav.removeClass("fixed-header");
        $stickyHeader.removeClass("fixed-header");
        $('.search-content').addClass('height-when-close', 500);
        $('.search-content').removeClass('height-when-open', 500);
        $('.search-btn').removeClass('close-search');
    }
    if (lastScroll - scroll < 0){
        $stickyNav.removeClass("fixed-header");
        $stickyHeader.removeClass("fixed-header");
    }
    lastScroll = scroll;
});

var lastScroll = 0;



    //////////** fixed arrow to top**//////////
    $(".arrow-top").click(function() {
        $("html,body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
    $(this).scrollTop() >= 500 ?
        $(".arrow-top").fadeIn(300) :
        $(".arrow-top").fadeOut(300);

    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ?
            $(".arrow-top").fadeIn(300) :
            $(".arrow-top").fadeOut(300);
    });


    
    ///////// **testimonials-section** /////////

    var test = new Swiper(".testimonials-slider .swiper-container", {
        loop: true,
        autoplay: true,
        pagination: {
            el: ".testimonials-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".testimonials-slider .swiper-btn-next",
            prevEl: ".testimonials-slider .swiper-btn-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });


 ///////// **brands-slider** /////////
 var brands = new Swiper(".brands-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".brands-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".brands-slider .swiper-btn-next",
        prevEl: ".brands-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 15,
        },
        1199: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
});

   
});