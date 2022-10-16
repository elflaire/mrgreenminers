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

        /* Preloader Cancellation 
        preloaderCancellation: function () {
            $('.tm-preloader').find('.tm-button').on('click', function () {
                $(this).parent('.tm-preloader').fadeOut('slow');
            });
        },*/

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
                    slidesToShow: 5,
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

            /* Blog Slider 
            blogSlider: function () {
                $('.tm-blog-slider').slick({
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
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
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                adaptiveHeight: true,
                            }
                        }
                    ]
                });
            },*/

            /* Testimonial Slider 
            testimonialSlider: function () {
                $('.tm-testimonial-contents').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    asNavFor: '.tm-testimonial-authors',
                    autoplay: true,
                    arrows: true,
                    prevArrow: '<button class="tm-slider-arrow-prev"><i class="zmdi zmdi-long-arrow-left"></i></button>',
                    nextArrow: '<button class="tm-slider-arrow-next"><i class="zmdi zmdi-long-arrow-right"></i></button>',
                });

                $('.tm-testimonial-authors').slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: '.tm-testimonial-contents',
                    dots: false,
                    centerMode: true,
                    centerPadding: 0,
                    focusOnSelect: true,
                    autoplay: true,
                });
            },*/

            /* Slider Initializer */
            init: function () {
                mrgreenminers.sliderActivation.screenshotSlider();
                mrgreenminers.sliderActivation.teamMemberSlider();
                //mrgreenminers.sliderActivation.blogSlider();
                //mrgreenminers.sliderActivation.testimonialSlider();
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

        /* Funfact Masonry 
        funfactMasonryActive: function () {
            $('.tm-funfact-wrapper').masonry({
                itemSelector: '.tm-funfact-masonryitem',
                columnWidth: 1,
            });
        },*/

        /* Dynamic Pricebox 
        dynamicPricebox: function () {

            function activeKey() {
                $('.tm-pricebox-switchbuttons').find('button').on('click', function () {
                    $(this).addClass('is-active').siblings('button').removeClass('is-active');
                });
                return $('.tm-pricebox-switchbuttons').find('button.is-active').data('keyvalue');
            }

            function priceChanger() {
                $('.tm-pricebox-price-digit').each(function () {
                    var monthlyPrice = $(this).data('pricebox-price-monthly');
                    var yearlyPrice = $(this).data('pricebox-price-yearly');

                    if (activeKey() === 'monthly') {
                        $(this).text(monthlyPrice);
                    } else {
                        $(this).text(yearlyPrice);
                    }
                });

            }
            priceChanger();

            function textChanger() {
                $('.tm-pricebox-price-time').each(function () {
                    var monthlyText = $(this).data('monthly-text');
                    var yearlyText = $(this).data('yearly-text');

                    if (activeKey() === 'monthly') {
                        $(this).text(monthlyText);
                    } else {
                        $(this).text(yearlyText);
                    }
                });
            }
            textChanger();

            $('.tm-pricebox-switchbuttons').find('button').on('click', function () {
                priceChanger();
                textChanger();
            });

        },*/

        /* Contact Form Effect 
        contactFormEffect: function () {
            $('.tm-form-field').on('focus', 'input, textarea', function () {
                $(this).siblings('.tm-form-animatedline').css('width', '100%');
            });
            $('.tm-form-field').on('focusout', 'input, textarea', function () {
                $(this).siblings('.tm-form-animatedline').css('width', 0);
                var $this = $(this);
                if ($this.val().trim().length !== 0) {
                    $(this).siblings('.tm-form-animatedline').css('width', '100%');
                }
            });
        },*/

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

        /* Breadcrumb Padding */
        breadcrumbPadding: function () {
            if ($('.tm-header-fixed').exists()) {
                var headerHeight = $('.tm-header-fixed').innerHeight();
                $('.tm-breadcrumb').css({
                    'paddingTop': headerHeight + 'px'
                });
            }
        },

        /* Scrollspy Active */
        scrollSpyActive: function () {
            $('.tm-navigation').scrollspy({
                offset: -65,
                activeClass: 'current',
                animate: 'swing',
            });
        },

        /* Fancybox Init 
        fancyboxInit: function () {
            $('[data-fancybox]').fancybox();
        },*/

        /* Mailchimp Activation 
        ajaxMailchimp: function () {
            $('#tm-mailchimp-form').ajaxChimp({
                language: 'en',
                callback: mailChimpResponse,
                // ADD YOUR MAILCHIMP URL BELOW HERE!
                url: 'YOUR_MAILCHIMP_URL_HERE'
            });

            function mailChimpResponse(resp) {
                if (resp.result === 'success') {
                    $('.tm-mailchimp-success').html('' + resp.msg).fadeIn(900);
                    $('.tm-mailchimp-error').fadeOut(400);
                } else if (resp.result === 'error') {
                    $('.tm-mailchimp-error').html('' + resp.msg).fadeIn(900);
                }
            }
        },*/

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

        /* Blog Masonry Active 
        blogMasonryActive: function () {
            $('.blog-masonry-active').masonry({
                itemSelector: '.blog-masonry-item'
            });
        },*/

        /* Ajax Mailer 
        ajaxMailer: function () {
            // Get the form.
            var form = $('#tm-contactform');

            // Get the messages div.
            var formMessages = $('.form-messages');

            // TODO: The rest of the code will go here...

            // Set up an event listener for the contact form.
            $(form).submit(function (event) {
                // Stop the browser from submitting the form.
                event.preventDefault();

                // Serialize the form data.
                var formData = $(form).serialize();

                // Submit the form using AJAX.
                $.ajax({
                        type: 'POST',
                        url: $(form).attr('action'),
                        data: formData
                    })


                    .done(function (response) {
                        // Make sure that the formMessages div has the 'success' class.
                        $(formMessages).removeClass('error');
                        $(formMessages).addClass('success');

                        // Set the message text.
                        $(formMessages).text(response);

                        // Clear the form.
                        $('#tm-contactform input:not([type="submit"]), #tm-contactform textarea').val('');
                    })

                    .fail(function (data) {
                        // Make sure that the formMessages div has the 'error' class.
                        $(formMessages).removeClass('success');
                        $(formMessages).addClass('error');

                        // Set the message text.
                        if (data.responseText !== '') {
                            $(formMessages).text(data.responseText);
                        } else {
                            $(formMessages).text('Oops! An error occured and your message could not be sent.');
                        }
                    });
            });
        },*/

        /* Service Image Anim 
        serviceImageAnim: function () {
            setInterval(function () {
                $('.tm-service-image-1').toggleClass('is-visible');
                $('.tm-service-image-2').toggleClass('is-visible');
            }, 5000);
        },*/
		
		/* PARTICLES 
		
        canvasActivation: {
			
			  
			  
			 tsParticles1: function () {
					  $("#constellationel")
						.particles()
						.init(
						  {
							background: {
							  color: {
								//value: "#0d47a1",
							  },
							},
							fpsLimit: 120,
							interactivity: {
							  events: {
								onClick: {
								  enable: true,
								  mode: "push",
								},
								onHover: {
								  enable: true,
								  mode: "repulse",
								},
								resize: true,
							  },
							  modes: {
								push: {
								  quantity:4,
								},
								repulse: {
								  distance: 100,
								  duration: 0.4,
								},
							  },
							},
							particles: {
							  color: {
								value: "#ffffff",
							  },
							  links: {
								color: "#ffffff",
								distance: 150,
								enable: true,
								opacity: 0.1,
								width: 1,
							  },
							  collisions: {
								enable: true,
							  },
							  move: {
								direction: "none",
								enable: true,
								outModes: {
								  default: "bounce",
								},
								random: false,
								speed: 1,
								straight: false,
							  },
							  number: {
								density: {
								  enable: true,
								  area: 800,
								},
								value: 180,
							  },
							  opacity: {
								value: 0.1,
							  },
							  shape: {
								type: "circle",
							  },
							  size: {
								value: { min: 1, max: 5 },
							  },
							},
							detectRetina: true,
						  },
						  function (container) {
							// container is the particles container where you can play/pause or stop/start.
							// the container is already started, you don't need to start it manually.
						  }
						);			
			},

            // Slider Initializer 
            init: function () {
                mrgreenminers.canvasActivation.tsParticles1();
                //mrgreenminers.canvasActivation.testimonialSlider();
            }
        },*/		
		
		/* Wow Anim*/
		wowAnimInit: function () {
			new WOW().init();	
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
            mrgreenminers.breadcrumbPadding();
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