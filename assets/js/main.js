//jQuery.noConflict();
(function ($) {
    "use strict";
	
	//await loadFull(tsParticles);

    /* Custom Functions */
    jQuery.fn.exists = function () {
        return this.length > 0;
    };

    /* Preloader Activation */
    $(window).on('load', function () {
        $('.tm-preloader').delay(150).fadeOut('slow');
    });

    var smController = new ScrollMagic.Controller();

    var mrgreenminers = {
		
        /* Inline Background Image */
        dataBgImage: function () {
            $('[data-bgimage]').each(function () {
                var imageUrl = $(this).data('bgimage');
                $(this).css({
                    'background-image': 'url(' + imageUrl + ')'
                });
            });
        },

        /* Slider Activation */
        sliderActivation: {

            /* Sreenshot Slider */
            screenshotSlider: function () {
                var tmsreenshotSlider = $('.tm-screenshots-slider').slick({
                    infinite: true,
                    autoplay: false,
                    autoplaySpeed: 5000,
                    slidesToScroll: 1,
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '0',
                    focusOnSelect: true,
                    arrows: true,
                    prevArrow: '<button class="tm-slider-arrow-prev"><i class="zmdi zmdi-long-arrow-left"></i></button>',
                    nextArrow: '<button class="tm-slider-arrow-next"><i class="zmdi zmdi-long-arrow-right"></i></button>',
                    dots: false,
                    responsive: [{
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Team Slider */
            teamMemberSlider: function () {
                $('.tm-team-slider').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: '<button class="tm-slider-arrow-prev"><i class="zmdi zmdi-long-arrow-left"></i></button>',
                    nextArrow: '<button class="tm-slider-arrow-next"><i class="zmdi zmdi-long-arrow-right"></i></button>',
                    dots: false,
                    responsive: [{
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },

            /* Slider Initializer */
            init: function () {
                mrgreenminers.sliderActivation.screenshotSlider();
                mrgreenminers.sliderActivation.teamMemberSlider();
            }
        },

        /* CounterUp Activation */
        counterupActivation: function () {
            if ($('.odometer').length) {
                $(window).on('scroll', function () {
                    function winScrollPosition() {
                        var scrollPos = $(window).scrollTop(),
                            winHeight = $(window).height();
                        var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
                        return scrollPosition;
                    }
                    var elemOffset = $('.odometer').offset().top;
                    if (elemOffset < winScrollPosition()) {

                        $('.odometer').each(function () {
                            $(this).html($(this).data('count-to'));
                        });
                    }
                });
            }
        },
		
        /* Scroll To Section */
        scrollToSection: function () {
            $('.tm-heroslider-scrolldown').on('click', function (event) {
                event.preventDefault();
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 65)
                }, 1000);
            });
        },

        /* Sticky Header */
        stickyHeaderActive: function () {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() >= 1) {
                    $('.tm-sticky-header').addClass('is-sticky');
                } else {
                    $('.tm-sticky-header').removeClass('is-sticky');
                }
            });
        },

        /* Meanmenu Active */
        meanmenuActive: function () {
            $('nav.tm-navigation').meanmenu({
                meanMenuContainer: '.tm-mobilenav',
                meanScreenWidth: '991',
                meanMenuOpen: '<i class="zmdi zmdi-menu"></i>',
                meanMenuClose: '<i class="zmdi zmdi-close"></i>',
            });

            $('.tm-mobilenav nav.mean-nav li a').on('click', function (event) {
                event.preventDefault();
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 65)
                }, 1000);
            });
        },

        /* Breadcrumb Padding 
        breadcrumbPadding: function () {
            if ($('.tm-header-fixed').exists()) {
                var headerHeight = $('.tm-header-fixed').innerHeight();
                $('.tm-breadcrumb').css({
                    'paddingTop': headerHeight + 'px'
                });
            }
        },*/

        /* Scrollspy Active */
        scrollSpyActive: function () {
            $('.tm-navigation').scrollspy({
                offset: -65,
                activeClass: 'current',
                animate: 'swing',
            });
        },
		
        /* Scorll Up Implememt */
        scrollUpActive: function () {
            $('<button id="scrollUp"><i class="zmdi zmdi-chevron-up"></i></button>').appendTo('body');
            $(window).on('scroll', function () {
                var winHeight = $(this).height();
                var winScrollPos = $(this).scrollTop();
                if (winScrollPos > winHeight + 100) {
                    $('#scrollUp').addClass('is-visible');
                } else {
                    $('#scrollUp').removeClass('is-visible');
                }
            });
            $('#scrollUp').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 'slow');
                return false;
            });
        },

        /* Ease Scroll 
        easeScrollActive: function () {
            $('html').easeScroll();
        },*/

        /* Heroslider ScrollMagic */
        herosliderScrollMagic: function () {
            var winWidth = $(window).width();
            if (winWidth >= 992) {
                new ScrollMagic.Scene({
                    duration: 0,
                    offset: 0
                }).setPin('.tm-heroslider-inner', {
                    pushFollowers: false
                }).addTo(smController);

                $(window).on('scroll', function () {
                    var winScrollPos = $(this).scrollTop();
                    var opacity = 1 - (winScrollPos / 750);
                    $('.tm-heroslider-content, .tm-heroslider-mobileshow ').css({
                        'opacity': opacity,
                    });
                });
            }
        },
		
		/* Wow Anim*/
		wowAnimInit: function () {
			//new WOW().init();	
			
			var scrolled = false;
			$(window).on('scroll', function() {
				if (!scrolled) {
					scrolled = true;
					new WOW().init();
		
				}
			});			
		},		

        /* Initializer */
        init: function () {
            //mrgreenminers.preloaderCancellation();
            mrgreenminers.dataBgImage();
            mrgreenminers.sliderActivation.init();
			//mrgreenminers.canvasActivation.init();
            mrgreenminers.counterupActivation();
            //mrgreenminers.funfactMasonryActive();
            //mrgreenminers.dynamicPricebox();
            //mrgreenminers.contactFormEffect();
            mrgreenminers.scrollToSection();
            mrgreenminers.stickyHeaderActive();
            mrgreenminers.meanmenuActive();
            //mrgreenminers.breadcrumbPadding();
            mrgreenminers.scrollSpyActive();
            //mrgreenminers.fancyboxInit();
           // mrgreenminers.ajaxMailchimp();
            mrgreenminers.scrollUpActive();
            //mrgreenminers.easeScrollActive();
           	mrgreenminers.herosliderScrollMagic();
            //mrgreenminers.blogMasonryActive();
            //mrgreenminers.ajaxMailer();
           //mrgreenminers.serviceImageAnim();
			mrgreenminers.wowAnimInit();
        }
    };

    mrgreenminers.init();


})(jQuery);