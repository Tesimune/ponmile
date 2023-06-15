$(document).ready(function(){

    //Toggle Nav for mobile  menu
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active-nav');
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });
        // // Venobox
        // $(document).ready(function(){
        //     $('.venobox').venobox(); 
        // });

      // Venubox
    $('.venobox').venobox({
        numeratio: true,
        infinigall: true
    });
    

    var mySwiper = new Swiper('.swiper-container-one', {
        
        loop: true,
        effect: 'fade',
        autoplay: {
                delay: 8000,
                },
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        // Loder  //
      $(function () {
        $('body').addClass('loaded');
      });

     // sticky-two
     var wind_two = $(window);
     var sticky_two = $('#sticky-header-two');
     wind_two.on('scroll', function () {
        var scroll = wind_two.scrollTop();
        if (scroll < 100) {
            sticky_two.removeClass('sticky-nav');
        } else {
            sticky_two.addClass('sticky-nav');
        }
    });

    //Counter Up Jquery
    $('.counter').counterUp({
       time: 1500
   });

    // Progress Bar
    if($('.progress-line').length) {
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent+'%');
        }, {accY: 0});
    }

    $('.hero-content-box').animatedHeadline({
        animationType: 'clip'
    });

    //Accordion
    $(function() {
        $( "#faq-accordion" ).accordion({
          collapsible: true
      });
    });

    $(function() {
        $( "#faq-accordion-one" ).accordion({
          collapsible: true
      });
    });

    $(function() {
        $( "#faq-accordion-two" ).accordion({
          collapsible: true
      });
    });

    $(function() {
        $( "#faq-accordion-three" ).accordion({
          collapsible: true
      });
    });

    $(function() {
        $( "#faq-accordion-four" ).accordion({
          collapsible: true
      });
    });

    // Hero Slider Carousel Active
    $('.carousel-slider').owlCarousel({
       loop: true,
       autoplay: false,
       autoplayTimeout: 10000,
       dots: false,
       dotsEach: false,
       lazyLoad:true,
       smartSpeed: 1000,
       nav:true,
       navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 1
           },
           992: {
               items: 1
           },
           1000: {
               items: 1
           },
           1199: {
               items: 1
           },
           1920: {
               items: 1
           }
       }
   });

    //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }
    
   /*---------------------
    Nivo Slider active js
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 900000,
        pauseOnHover: false,
        controlNav: false,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });

    // Service Carousel Active
    $('.service-carousel').owlCarousel({
       loop: true,
       autoplay: true,
       autoplayTimeout: 3000,
       dots: false,
       dotsEach: false,
       lazyLoad:true,
       smartSpeed: 1000,
       nav:false,
       navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
       responsive: {
           0: {
               items: 1
           },
           481: {
               items: 1
           },
           600: {
               items: 2
           },
           768: {
               items: 2
           },
           992: {
               items: 3
           },
           1000: {
               items: 3
           },
           1199: {
               items: 3
           },
           1920: {
               items: 3
           }
       }
   });

    // Case Study Carousel Active
    $('.case-study-carousel').owlCarousel({
       loop: true,
       autoplay: true,
       autoplayTimeout: 5000,
       dots: true,
       dotsEach: false,
       lazyLoad:true,
       smartSpeed: 1000,
       nav:false,
       navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 2
           },
           992: {
               items: 4
           },
           1000: {
               items: 4
           },
           1199: {
               items: 4
           },
           1920: {
               items: 5
           }
       }
   });

    // Case Study Carousel Active
    $('.case-study-carousel-two').owlCarousel({
       loop: true,
       autoplay: true,
       autoplayTimeout: 5000,
       dots: true,
       dotsEach: true,
       lazyLoad:true,
       smartSpeed: 1000,
       nav:false,
       navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 2
           },
           992: {
               items: 3
           },
           1000: {
               items: 3
           },
           1199: {
               items: 3
           },
           1920: {
               items: 4
           }
       }
   });

     // Testimoial Carousel Active
     $('.testimonial-carousel').owlCarousel({
       loop: true,
       autoplay: true,
       autoplayTimeout: 5000,
       dots: true,
       dotsEach: false,
       lazyLoad:true,
       smartSpeed: 1000,
       nav:false,
       navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 2
           },
           992: {
               items: 3
           },
           1000: {
               items: 3
           },
           1199: {
               items: 3
           },
           1920: {
               items: 3
           }
       }
   });
     // Testimoial Carousel Active
     $('.testimonial-carousel-two').owlCarousel({
       loop: true,
       autoplay: false,
       autoplayTimeout: 5000,
       dots: true,
       dotsEach: false,
       lazyLoad:true,
       smartSpeed: 350,
       nav:false,
       navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 1
           },
           992: {
               items: 1
           },
           1000: {
               items: 1
           },
           1199: {
               items: 1
           },
           1920: {
               items: 1
           }
       }
   });
     // Blog Carousel Active
     $('.blog-carousel').owlCarousel({
       loop: false,
       autoplay: true,
       autoplayTimeout: 5000,
       dots: true,
       dotsEach: false,
       lazyLoad:true,
       smartSpeed: 350,
       nav:true,
       navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 2
           },
           992: {
               items: 3
           },
           1000: {
               items: 3
           },
           1199: {
               items: 3
           },
           1920: {
               items: 3
           }
       }
   });

    //Active brand-carousel
    $('.brand-carousel').owlCarousel({
       loop: true,
       autoplay: true,
       autoplayTimeout: 3000,
       lazyLoad:true,
       smartSpeed: 350,
       nav:false,
       dots: false,
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 4
           },
           992: {
               items: 4
           },
           1000: {
               items: 4
           },
           1199: {
               items: 4
           },
           1920: {
               items: 4
           }
       }
   }); 

    //Active brand-carousel Two
    $('.brand-carousel-two').owlCarousel({
       loop: true,
       autoplay: true,
       autoplayTimeout: 3000,
       lazyLoad:true,
       smartSpeed: 350,
       nav:false,
       dots: false,
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 4
           },
           992: {
               items: 4
           },
           1000: {
               items: 4
           },
           1199: {
               items: 4
           },
           1920: {
               items: 4
           }
       }
   }); 

    // Hero Gallery Carousel Active
    $('.gallery-carousel').owlCarousel({
       loop: true,
       autoplay: false,
       autoplayTimeout: 10000,
       dots: true,
       dotsEach: true,
       lazyLoad:true,
       smartSpeed: 1000,
       nav:false,
       navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
       responsive: {
           0: {
               items: 1
           },
           768: {
               items: 4
           },
           992: {
               items: 4
           },
           1000: {
               items: 4
           },
           1199: {
               items: 4
           },
           1920: {
               items: 4
           }
       }
   });

    /* Portfolio Isotope  */
    $('.image_load').imagesLoaded(function() {

        if ($.fn.isotope) {

            var $portfolio = $('.image_load');

            $portfolio.isotope({

                itemSelector: '.grid-item',

                filter: '*',

                resizesContainer: true,

                layoutMode: 'masonry',

                transitionDuration: '0.8s'

            });
            $('.menu-filtering li').on('click', function() {

                $('.menu-filtering li').removeClass('current_menu_item');

                $(this).addClass('current_menu_item');

                var selector = $(this).attr('data-filter');

                $portfolio.isotope({

                    filter: selector,

                });

            });

        }

    });

    // to top Jquery
    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $('#to-top').fadeIn();
        } else{
            $('#to-top').fadeOut();
        }
    });

    $("#to-top").click(function(){
        $('html , body').animate({scrollTop :0},800);
    });

    //wow Jquery
    new WOW().init();

    //Tabs
    $(function(){
        $("#tabs").tabs();
    });
});





$(document).ready(function(){

    $('#pie-circle-one').circleProgress({
        value: 0.69,
        size: 100,
        thickness: 10,
        fill: {
          gradient: ["#5552C1", "#5552C1"]
      }
  });
    $('#pie-circle-two').circleProgress({
        value: 0.90,
        size: 100,
        thickness: 10,
        fill: {
          gradient: ["#26C4F8", "#26C4F8"]
      }
  });
    $('#pie-circle-three').circleProgress({
        value: 0.89,
        size: 100,
        thickness: 10,
        fill: {
          gradient: ["#E6513A", "#E6513A"]
      }
  });
    $('#pie-circle-1').circleProgress({
        value: 0.90,
        size: 160,
        thickness: 10,
        fill: {
          gradient: ["#C216DB", "#C216DB"]
      }
  });
    $('#pie-circle-2').circleProgress({
        value: 0.95,
        size: 160,
        thickness: 10,
        fill: {
          gradient: ["#F76E03", "#F76E03"]
      }
  });
    $('#pie-circle-3').circleProgress({
        value: 0.80,
        size: 160,
        thickness: 10,
        fill: {
          gradient: ["#0154F6", "#0154F6"]
      }
  });
    $('#pie-circle-4').circleProgress({
        value: 0.60,
        size: 160,
        thickness: 10,
        fill: {
          gradient: ["#EE5B51", "#EE5B51"]
      }
  });

});