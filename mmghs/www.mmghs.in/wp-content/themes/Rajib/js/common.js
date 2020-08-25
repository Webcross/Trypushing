jQuery(document).ready(function($) {
    "use strict";

    $('.loading-spinner-detect').velocity("fadeOut", {
        duration: 350,
        complete: function() {
            $('body').addClass('spinning-done');
            if ( $('body').hasClass('page-is-fullscreen') ) {
                $('body').addClass('secondary-spinning');
                $('.loading-spinner-detect').velocity("fadeIn", {
                    duration: 350
                });
            }
            if ($('#heroimage').length) {
                $('body').addClass('secondary-spinning');
                $('.loading-spinner-detect').velocity("fadeIn", {
                    duration: 350
                });
            }
        }
    });

    if ($('body').hasClass('menu-is-horizontal')) {
        var stickyNavTop = 550;
        var stickyOutofSight = 300;

        var stickyNav = function(){
            var scrollTop = $(window).scrollTop();
                 
            if (scrollTop > stickyNavTop) { 
               $('body').addClass('stickymenu-active');
                if ($('body').hasClass('stickymenu-active-removing')) {
                    $('body').removeClass('stickymenu-active-removing');
                }
            } else {
                if ($('body').hasClass('stickymenu-active')) {
                    $('body').addClass('stickymenu-active-removing');
                }
            }

            if (scrollTop > stickyOutofSight) { 
               $('body').addClass('menu-outofsight');
            } else {
               $('body').removeClass('menu-outofsight');
               $('body').removeClass('stickymenu-active');
               $('body').removeClass('stickymenu-active-removing');
            }
        };

        stickyNav();

        $(window).scroll(function() {
            stickyNav();
        });
    }

    function isMobileMenuActive() {

        if( $('.responsive-menu-wrap').is(':visible') ) {
            $('body').addClass('mobile-mode-active');
        } else {
            $('body').removeClass('mobile-mode-active');
        }

    }
    isMobileMenuActive();

    $('.preloader-cover-logo').velocity("transition.slideUpOut", {
        duration: 1500
    });

    $('body').addClass('pace-done');

    if ($('body').hasClass('rightclick-block')) {
        $(window).on("contextmenu", function(b) {
            if (3 === b.which) {
                showCopyright();
                return false;
            }
        });
    }

    $(window).scroll(function(e){
        text_parallax_fade();
    });

    function text_parallax_fade(){
      var scrolled = $(window).scrollTop();
        $('.text-parallax').css('top',-(scrolled*-0.03)+'rem');
        $('.text-parallax').css('opacity',1-(scrolled*0.00095));
    }

    if ($.fn.multiscroll) {

        function fullscreenMultiscroll() {
            $('#multiscroll').multiscroll({
                verticalCentered : true,
                scrollingSpeed: 700,
                easing: 'easeInQuart',
                menu: false,
                sectionsColor: [],
                navigation: true,
                navigationPosition: 'right',
                navigationColor: '#000',
                navigationTooltips: [],
                loopBottom: false,
                loopTop: false,
                css3: true,
                paddingTop: 0,
                paddingBottom: 0,
                normalScrollElements: null,
                keyboardScrolling: true,
                touchSensitivity: 5,

                //responsive
                responsiveWidth: 1000,
                responsiveHeight: 0,
                responsiveExpand: false,

                // Custom selectors
                sectionSelector: '.ms-section',
                leftSelector: '.ms-left',
                rightSelector: '.ms-right',

                //events
                onLeave: function(index, nextIndex, direction){},
                afterLoad: function(anchorLink, index){},
                afterRender: function(){},
                afterResize: function(){},
            });
        }
        if ($('#multiscroll').length) {
            fullscreenMultiscroll();
            $('html').addClass('multislider-active');

            if ($(window).width() < 768) {
                $.fn.multiscroll.destroy();
            } else {
                $.fn.multiscroll.destroy();
                $.fn.multiscroll.build();
                $(window).resize(function() {
                    $('body,html').scrollTop( 0 );
                });
            }
        }
    }

    if ($.fn.tilt) {
        $(".has-effect-tilt .gridblock-grid-element").tilt({
            maxTilt: 20,
            perspective: 550,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            speed: 800,
            glare: false,
            scale: 1.01
        });
    }

    $(".menu-button-toggle").on( "click", function() {
        $("body").addClass('reservation-screen-on');
    });
    $(".reservation-modal-exit").on( "click", function() {
        $("body").removeClass('reservation-screen-on');
    });

    function html5videoautoplay() {

        if ($('#videocontainer').length) {
            $("#videocontainer")[0].onplay = function () {
                $('.fullscreen-video-play').hide();
            };

            $(document).on('click', '.fullscreen-video-play', function (e) {
                var video = $('#videocontainer').get(0);
                if (video.paused === false) {
                    video.pause();
                    video.muted= false;
                } else {
                    video.play();
                    video.muted= false;
                }

                return false;
            });

            $(document).on('click', '.fullscreen-video-audio', function (e) {
                var video = $('#videocontainer').get(0);
                if (video.muted === false) {
                    video.muted= true;
                } else {
                    video.muted= false;
                }

                return false;
            });
            
            $(document).on('click', '#videocontainer', function (e) {
                var video = $(this).get(0);
                if (video.paused === false) {
                    video.pause();
                } else {
                    video.play();
                }

                return false;
            });
        }
    }
    html5videoautoplay();


    // Movebackground start

    var lFollowX = 0,
        lFollowY = 0,
        lAxisx = 0,
        lAxisy = 0,
        friction = 1 / 30;

    function moveBackground() {

        lAxisx += (lFollowX - lAxisx) * friction;
        lAxisy += (lFollowY - lAxisy) * friction;

        var Axistranslate = 'translate(' + lAxisx + 'px, ' + lAxisy + 'px) scale(1.05)';

        $('.mtheme-block-em_heroimage #heroimage-background').css({
            '-webit-transform': Axistranslate,
            '-moz-transform': Axistranslate,
            'transform': Axistranslate
        });

        window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove', function(e) {
        var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
        var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
        lFollowX = (10 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
        lFollowY = (5 * lMouseY) / 100;
    });

    moveBackground();

    // Movebackground end

    displayspecificBackgrounds();
    function displayspecificBackgrounds() {

       /*
         * BG Loaded
         * 
         *
         * Copyright (c) 2014 Jonathan Catmull
         * Licensed under the MIT license.
         */
        $.fn.bgLoaded = function(custom) {

            var self = this;

        // Default plugin settings
        var defaults = {
            afterLoaded : function(){
                this.addClass('bg-loaded');
            }
        };

            // Merge default and user settings
            var settings = $.extend({}, defaults, custom);

            // Loop through element
            self.each(function(){
                var $this = $(this),
                    bgImgs = $this.css('background-image').split(', ');
                $this.data('loaded-count',0);

                $.each( bgImgs, function(key, value){
                    var img = value.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
                    if (img !== "none") {
                        $('<img/>').attr('src', img).load(function() {
                            $(this).remove(); // prevent memory leaks
                            $this.data('loaded-count',$this.data('loaded-count')+1);
                            if ($this.data('loaded-count') >= bgImgs.length) {
                                settings.afterLoaded.call($this);
                            }
                        });
                    }
                });

            });
        };

        $('.column-has-backround-image').bgLoaded();
        $('.site-back-cover').bgLoaded();
        $('#heroimage-background').bgLoaded({
          afterLoaded : function(){
           this.parent('#heroimage').addClass('bg-loaded');
          }
        });
        $('.photocard-image-container').bgLoaded();
        $('.photocard-image-container').bgLoaded({
          afterLoaded : function(){
           this.parent('.photocard-image-wrap').addClass('bg-loaded');
          }
        });
        $('.photocard-wrap-type-two').bgLoaded({
          afterLoaded : function(){
           this.parent('.photocard-image-two-wrap').addClass('bg-loaded');
          }
        });
    }

    function mtheme_findaccordions() {
        if ($('.mtheme-accordion-detect').length) {
            $('.mtheme-accordion-detect').each(function() {
                var accordionID = $(this).data('accordionid');
                var accordionActive = $(this).data('activetab');
                accordionActive = typeof accordionActive !== 'undefined' ? accordionActive : '-1';
                if (accordionActive=='-1') {
                    accordionActive='false';
                }
                $("#"+accordionID).accordion({
                    active: accordionActive,
                    heightStyle: "content",
                    animate: {
                        duration: 300,
                        easing: "easeInExpo"
                    }
                });
            });
        }
    }
    mtheme_findaccordions();


    if ( $('body').hasClass('fullscreen-particles') ) {
        (function() {
          var lastTime = 0;
          var vendors = ['ms', 'moz', 'webkit', 'o'];
          for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
              window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
              window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                         || window[vendors[x]+'CancelRequestAnimationFrame'];
          }

          if (!window.requestAnimationFrame)
              window.requestAnimationFrame = function(callback, element) {
                  var currTime = new Date().getTime();
                  var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                  var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
                    timeToCall);
                  lastTime = currTime + timeToCall;
                  return id;
              };

          if (!window.cancelAnimationFrame)
              window.cancelAnimationFrame = function(id) {
                  clearTimeout(id);
              };
        }());

        var update;
        update = function() {
        requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    }

    function animatedsvgs() {
        var svgiconsToAnimate = [];

        if ($('.has-svg-animated-icon').length) {
            $('.has-svg-animated-icon:not(.icon-animation-done)').each(function() {
                var thatsvg = $(this);
                var animatedsvgID = thatsvg.data('id');
                var animatedsvgICON = thatsvg.data('icon');
                if ( animatedsvgICON !=='' ) {
                    svgiconsToAnimate[animatedsvgID] = new Vivus(
                            animatedsvgID, {
                            type: 'delayed',
                            duration: 200,
                            file: animatedsvgICON,
                            onReady: function (vivusObj) {
                                var animatedsvgColor = thatsvg.data('iconcolor');
                                $('#'+animatedsvgID).addClass('icon-animation-ready');
                                $(thatsvg).find('svg path').css('stroke',animatedsvgColor);
                                if (isIOS || isAndroid) {
                                    svgiconsToAnimate[animatedsvgID].reset().finish();
                                }
                            }
                        });
                    svgiconsToAnimate[animatedsvgID].play(function() {
                        $('#'+animatedsvgID).removeClass('icon-animation-ready').addClass('icon-animation-done');
                    });
                }
            });
        }
    }
    animatedsvgs();

    $('.single-image-block').each(function() {
        var singleImage = $(this);
        singleImage.imagesLoaded( function() {
            singleImage.addClass('single-image-loaded');
        });
    });

    $(".social-sharing-toggle,.mobile-sharing-toggle").on( "click", function() {
        $("body").addClass('social-sharing-on');
    });
    $("#social-modal").on( "click", function() {
        $("body").removeClass('social-sharing-on');
    });

    function fullscreenYoutube() {
        if ($.fn.tubular) {
            if ($('.youtube-fullscreen-player').length) {
                var youtubeID = $('#backgroundvideo').data('id');
                var options = { videoId: youtubeID, wrapperZIndex: -1, start: 0, mute: false, repeat: true, ratio: 16/9 };
                $('#backgroundvideo').tubular(options);
            }
        }
    }
    fullscreenYoutube();


    function displaysidebarwidgets() {
        $.Velocity.RegisterEffect( 'sidebarfadeinsteps', {
            calls: [ 
              [ { opacity: [ 1, 0 ] } ]
            ]
        });
        $( '.sidebar-widget' ).velocity( 'sidebarfadeinsteps', { stagger: 200 } );
    }
    displaysidebarwidgets();

    function displayWooProducts() {
        $.Velocity.RegisterEffect( 'woofadeinsteps', {
            calls: [ 
              [ { opacity: [ 1, 0 ] } ]
            ]
        });
        $( '.woocommerce .products li' ).velocity( 'woofadeinsteps', { stagger: 100 } );
    }
    displayWooProducts();

    function swiperSlides() {
        if ($.fn.swiper) {
            if ($('.shortcode-swiper-container').length) {
                $('.shortcode-swiper-container').each(function() {
                    var swiperID = '#' + $(this).data('id');
                    var columns = $(this).data('columns');
                    var getautoplay = $(this).data('autoplay');
                    columns = typeof columns !== 'undefined' ? columns : '4';
                    getautoplay = typeof getautoplay !== 'undefined' ? getautoplay : '5000';
                    if (getautoplay=="0") {
                        getautoplay = false;
                    }
                    
                    var paginationclass = $(this).find('.swiper-pagination');
                    var swiper = new Swiper(swiperID, {
                        pagination: paginationclass,
                        paginationClickable: true,
                        loop: false,
                        autoplay: getautoplay,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        slidesPerView: columns,
                        spaceBetween: 0,
                        breakpoints: {
                            1500: {
                                slidesPerView: 3,
                                spaceBetween: 0
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0
                            },
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            },
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 0
                            }
                        }
                    });
                });
            }
        }
    }
    swiperSlides();

    function showCopyright() {
        $("#dimmer").fadeIn("normal", function() {
            $('body').addClass('dimmer-displayed');
        });
        $("#dimmer").on( "click", function() {
            $(this).fadeOut("normal", function() {
                $('body').removeClass('dimmer-displayed');
            });
        });
    }

    $('body #static_slidecaption').addClass('display-content');

    $(".modal-trigger-button").on( "click", function() {
        var modal_display = $(this).data('modalid');
        displayModal(modal_display);
    });

    function displayModal(modal_id) {
        var modal_id_display = "#" + modal_id;
        $(modal_id_display).fadeIn("fast", function() {
            // Animation complete
            $(modal_id_display).find('.md-modal').addClass('md-show');
        });
        $('body').addClass('modal-active');
        $('.modal-close-button').on( "click", function() {
            $(modal_id_display).fadeOut();
            $('body').removeClass('modal-active');
            $(modal_id_display).find('.md-modal').removeClass('md-show');
        });
    }

    var deviceAgent = navigator.userAgent.toLowerCase();
    var isIOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1;
    var curr_menu_item;
    var percent;

    function mobilecheck() {
        var check = false;
        (function(a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    function centerLogo() {
        var countMenuParents = $(".homemenu ul.sf-menu > li").length;
        if (countMenuParents != 0) {
            if (countMenuParents>1) {
                var centerChild = Math.floor(countMenuParents / 2);
            } else {
                centerChild = 1;
            }
            var center_logo = $('body.split-menu');
            if ( center_logo.length ) {
                $( ".header-logo-section" ).detach().insertAfter('.homemenu ul.sf-menu > li:nth-child('+centerChild+')');
                $( ".header-logo-section" ).wrap( '<li id="header-logo"></li>' );
            }
        }
    }
    centerLogo();

    if (isIOS || isAndroid) {
    } else {
        if ($.fn.flatpickr) {
            $('.datepicker').flatpickr({
                dateFormat: "m/d/Y",
            });
            $('.contact-datepicker').flatpickr({
                dateFormat: "Y-m-d",
            });
        }
    }

    if ($.fn.chosen) {
        $(".chosen-select").chosen();
    }

    if ($('#toggle-menu').length) {
 
        $("#toggle-menu").on( "click", function() {
            $('#toggle-menu').toggleClass('toggle-menu-open');
            $('body').toggleClass('minimal-menu-fadein sticky-menu-off');
        });

    }

    function OnePageMenuScroll() {
        // One page menu scrolls
        var thebody = $('html, body');
        var one_page_adjust = 98;
        if ( $('body').hasClass('menu-is-vertical') ) {
            var one_page_adjust = -1;
        }
        if ( $('body').hasClass('admin-bar') ) {
            var one_page_adjust = 32;
        }
        if ( $('body').hasClass('center-logo') ) {
            var one_page_adjust = 0;
        }
        if ($(".responsive-menu-wrap:visible").length) {
            var one_page_adjust = 53;
        }
        $('.homemenu .menu-item a[href*=\\#],.responsive-mobile-menu .menu-item a[href*=\\#],.rev_slider_wrapper a[href*=\\#]').on( "click", function() {
            var onepage_url = $(this).attr('href');
            var onepage_hash = '#' + onepage_url.substring(onepage_url.indexOf("#")+1);

            thebody.animate({
                scrollTop: $( onepage_hash ).offset().top - one_page_adjust
            },{
                duration: 1700,
                easing: "easeInOutExpo"
            });
            if ($('body').hasClass('menu-is-onscreen')) {
                MobileMenuAction('resized');
                SimpleMenuAction('resized');
            }
            if ($('body').hasClass('sidebar-is-onscreen')) {
                SidebarMenuAction('resized');
            }
            return false;
        });
    }
    OnePageMenuScroll();

    function MobileMenuAction(action) {

        if (action == "resized") {
            $('#mobile-toggle-menu').removeClass('mobile-toggle-menu-open');
            $('body').removeClass('body-dashboard-push-left');
            $(".responsive-mobile-menu").removeClass('menu-push-onscreen');
            $("body").removeClass('menu-is-onscreen');
        } else {
            $('#mobile-toggle-menu').toggleClass('mobile-toggle-menu-open');
            $('body').toggleClass('body-dashboard-push-left');
        }

        if ( action == "open") {
            $(".responsive-mobile-menu").fadeOut("normal", function() {
                $(".responsive-menu-overlay").fadeOut();
                $(".responsive-mobile-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        }
        
        if ( action == "close") {
            $(".responsive-mobile-menu").fadeIn("normal", function() {
                $(".responsive-menu-overlay").fadeIn();
                $(".responsive-mobile-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        }
    }

    function SimpleMenuAction(action) {

        if (action == "resized") {
            $('#minimal-toggle-menu').removeClass('mobile-toggle-menu-open');
            $('body').removeClass('body-dashboard-push-left');
            $(".simple-menu").removeClass('menu-push-onscreen');
            $("body").removeClass('menu-is-onscreen');
        } else {
            $('#minimal-toggle-menu').toggleClass('mobile-toggle-menu-open');
            $('body').toggleClass('body-dashboard-push-left');
        }

        if ( action == "open") {
            $(".simple-menu").fadeOut("normal", function() {
                $(".minimal-menu-overlay").fadeOut();
                $(".simple-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        }
        
        if ( action == "close") {
            $(".simple-menu").fadeIn("normal", function() {
                $(".minimal-menu-overlay").fadeIn();
                $(".simple-menu").toggleClass('menu-push-onscreen');
                $("body").toggleClass('menu-is-onscreen');
            });
        }
    }

    function SidebarMenuAction(action) {

        $('#sidebarinfo-toggle-menu').toggleClass('sidebar-toggle-menu-open');
        $('body').toggleClass('body-dashboard-push-left');

        if ( action == "close") {

            $('.dashboard-columns').velocity("transition.slideUpOut", {
                stagger: 120,
                duration: 800
            });

            $('.sidebarinfo-menu').velocity("fadeOut", {
                duration: 800,
                complete: function() {
                    $(".sidebarinfo-menu").toggleClass('sidebar-push-onscreen');
                    $("body").toggleClass('sidebar-is-onscreen');
                }
            });



        }

        if ( action == "open") {

            $(".sidebarinfo-menu").toggleClass('sidebar-push-onscreen');
            $("body").toggleClass('sidebar-is-onscreen');

            

            $('.sidebarinfo-menu').velocity("fadeIn", {
                complete: function() {
                    $('.dashboard-columns').velocity("transition.slideUpIn", {
                        stagger: 120,
                        duration: 800,
                        complete: function() {
                            $('.dashboard-columns').find('.lazyload-after').addClass('lazyload');
                        }
                    });
                }
            });
        }
    }

    if ($('#mobile-toggle-menu').length) {
        $("#mobile-toggle-menu").on( "click", function() {
            if ($('body').hasClass('menu-push-onscreen')) {
                MobileMenuAction('open');
            } else {
                MobileMenuAction('close');
            }
        });
        $(".responsive-menu-overlay").on( "click", function() {
            MobileMenuAction('close');
        });

    }
    if ($('#minimal-toggle-menu').length) {
        $("#minimal-toggle-menu").on( "click", function() {
            if ($('body').hasClass('menu-push-onscreen')) {
                SimpleMenuAction('open');
            } else {
                SimpleMenuAction('close');
            }
        });
        $(".minimal-menu-overlay").on( "click", function() {
            SimpleMenuAction('close');
        });
    }
    if ($('#sidebarinfo-toggle-menu').length) {
        $("#sidebarinfo-toggle-menu").on( "click", function() {
            if ($('body').hasClass('sidebar-is-onscreen')) {
                SidebarMenuAction('close');
            } else {
                SidebarMenuAction('open');
            }
        });
        $(".sidebar-menu-overlay").on( "click", function() {
            SidebarMenuAction('close');
        });
    }

    $(window).resize(function() {
        if ($('body').hasClass('menu-is-onscreen')) {
            MobileMenuAction('resized');
            SimpleMenuAction('resized');
        }
        isMobileMenuActive();
    });

    function fotoramaResizer() {
        if ($.fn.fotorama) {
            var fotorama_window_width = $(window).width();

            if ($('body').hasClass('menu-is-vertical')) {
                if (fotorama_window_width < 1025) {
                    $('#fotorama-container-wrap').addClass('fotorama-fullwidth');
                } else {
                    $('#fotorama-container-wrap').removeClass('fotorama-fullwidth');
                }
            }

            var fotorama_width = fotorama_window_width;
            var fotorama_header_height = 0;
            fotorama_header_height = $('.outer-wrap').outerHeight();

            if ($('body').hasClass('top-header-present')) {
                fotorama_header_height = fotorama_header_height + 35;
            }
            if ($('body').hasClass('admin-bar')) {
                fotorama_header_height = fotorama_header_height + 32;
            }
            if ($('body').hasClass('compact-menu')) {
                fotorama_header_height = $('.outer-wrap').outerHeight();
            }
            var fotorama_footer_height = $('.fullscreen-footer-wrap').outerHeight();
            var fotorama_outer = fotorama_header_height + fotorama_footer_height;
            var fotorama_height = $(window).height() - fotorama_outer;

            if ($('body').hasClass('fotorama-style-contain')) {
                if ($('body').hasClass('boxed-site-layout')) {
                    fotorama_width = fotorama_window_width - 100;
                    $('#fotorama-container-wrap').css('left', '50px');
                }
                if (fotorama_window_width < 1025) {
                    fotorama_header_height = $('.mobile-menu-toggle').outerHeight();
                    fotorama_outer = fotorama_header_height + fotorama_footer_height;

                    fotorama_height = $(window).height() - fotorama_outer;
                    $('#fotorama-container-wrap').css('left', '0');
                    fotorama_width = '100%';
                }
            } else {
                fotorama_height = '100%';
                fotorama_header_height = 0;
                fotorama_width = '100%';
            }

            if ($('body').hasClass('fullscreen-mode-on')) {
                fotorama_height = '100%';
                fotorama_header_height = 0;
                fotorama_width = '100%';
                $('#fotorama-container-wrap').css('left', '0');
            }

            var adminbar_adjuster = 0;
            if ($('body').hasClass('admin-bar')) {
                adminbar_adjuster = 32;
            }
            fotorama_height = $(window).height();
            if ($('body').hasClass('menu-is-horizontal')) {
                fotorama_height = $(window).height() - adminbar_adjuster;
            }
            if ($('body').hasClass('fotorama-style-contain')) {
                fotorama_height = $(window).height() - 140;
            }
            if ($('body').hasClass('menu-is-vertical')) {
                fotorama_height = $(window).height() - 20 - adminbar_adjuster;
            }
            if (fotorama_window_width < 1100) {
                fotorama_height = $(window).height() - 150;
                if ($('body').hasClass('fotorama-style-cover')) {
                    fotorama_height = $(window).height() - 65;
                }
            }
            $('.fotorama').fotorama({
                height: fotorama_height,
                width: fotorama_width
            });
        }
    }

    function fotoramaToggleHeader() {

        if ($.fn.fotorama) {
            var slide_color = $('#slideshow-data .slide-0').data('color');
            $('body').removeClass('fullscreen-slide-bright');
            $('body').removeClass('fullscreen-slide-dark');
            if ( slide_color != undefined) {
                $('body').addClass('fullscreen-slide-'+ slide_color );
            } else {
                $('body').addClass('fullscreen-slide-bright');
            }

            var proceed_change_ui = true;
            $('.fotorama')
              .on('fotorama:show', function (e, fotorama) {
                // show the current index

                var slide_color = $('#slideshow-data .slide-' + fotorama.activeIndex).data('color');
                if ( slide_color != undefined) {
                    if ( proceed_change_ui ) {
                        $('body').removeClass('fullscreen-slide-bright');
                        $('body').removeClass('fullscreen-slide-dark');
                        $('body').addClass('fullscreen-slide-'+ slide_color );
                    }
                    $('#slideshow-data li').removeClass('data-active-slide');
                    $('#slideshow-data .slide-' + fotorama.activeIndex).addClass('data-active-slide');
                }

            });
        } 
    }

    $(window).resize(function() {
        fotoramaResizer();
    });

    fotoramaResizer();
    fotoramaToggleHeader();

    // Fullscreen Toggle
    var events_toggle_element = $('.mtheme-events-carousel');
    var fullscreen_toggle_elements = $(".container-outer,#sidebarinfo-toggle-menu,.single-mtheme_photostory .portfolio-nav-wrap,.vertical-left-bar,.horizontal-bottom-bar,.vertical-right-bar,#slidecaption,#static_slidecaption,.tp-bullets,#copyright,.edit-entry,.social-toggle-wrap,.fullscreen-footer-wrap,.toggle-menu,.page-is-not-fullscreen .container-wrapper");
    var nav_switch_elements = $('.mouse-pointer-wrap,#slidecounter');
    var reverse_switch_elements = $('.page-media-background #slidecaption,.page-media-background #static_slidecaption,.page-media-background .mouse-pointer-wrap,.page-media-background #slidecounter');
    var slideshow_caption = $('#static_slidecaption,#slidecaption');

    //Sidebar toggle function
    $(".fullscreen-toggle-off").on( "click", function() {
        $('.outer-wrap').removeClass('animated');
        if ( $('body').hasClass('page-is-not-fullscreen') && $('body').hasClass('page-media-background') ) {
            var slide_color = $('#slideshow-data .data-active-slide').data('color');
            if ( slide_color != undefined) {
                $('body').removeClass('fullscreen-slide-bright');
                $('body').removeClass('fullscreen-slide-dark');
                $('body').addClass('fullscreen-slide-'+ slide_color );
            }
        }

        $('.mtheme-fullscreen-toggle').removeClass('fullscreen-toggle-off').addClass('fullscreen-toggle-on');
        $('body').removeClass('fullscreen-mode-off').addClass('fullscreen-mode-on');
        if ($('body').hasClass('has-fullscreen-eventbox')) {
            $('body').removeClass('has-fullscreen-eventbox').addClass('fullscreen-eventbox-inactive').addClass('fullscreen-eventbox-switched');
        }
        $('.mtheme-fullscreen-toggle').find('i').hide().removeClass('ion-ios-circle-filled').addClass('ion-ios-circle-outline').fadeIn('slow');

        events_toggle_element.addClass('mtheme-events-offscreen');
        fullscreen_toggle_elements.fadeOut();
        nav_switch_elements.fadeOut();
        reverse_switch_elements.fadeIn();

        fotoramaResizer();

    });

    //Sidebar toggle function
    $(".fullscreen-toggle-on").on( "click", function() {

        if ( $('body').hasClass('page-is-not-fullscreen') && $('body').hasClass('page-media-background') ) {
            $('body').removeClass('fullscreen-slide-bright');
            $('body').removeClass('fullscreen-slide-dark');
        }

        $('.mtheme-fullscreen-toggle').removeClass('fullscreen-toggle-on').addClass('fullscreen-toggle-off');
        $('body').removeClass('fullscreen-mode-on').addClass('fullscreen-mode-off');
        if ($('body').hasClass('fullscreen-eventbox-switched')) {
            $('body').addClass('has-fullscreen-eventbox').removeClass('fullscreen-eventbox-inactive').removeClass('fullscreen-eventbox-switched');
        }

        events_toggle_element.removeClass('mtheme-events-offscreen');
        fullscreen_toggle_elements.fadeIn();
        nav_switch_elements.fadeIn();
        reverse_switch_elements.fadeOut();

        $('.mtheme-fullscreen-toggle').find('i').hide().addClass('ion-ios-circle-filled').removeClass('ion-ios-circle-outline').fadeIn('slow');

        var $filterContainer = $('#gridblock-container');
        if ($.fn.isotope) {
            $filterContainer.isotope('layout');
        }
        fotoramaResizer();
    });

    // One page menu scrolls
    var thebody = $('html, body');
    var one_page_adjust = 75;
    if ($('body').hasClass('menu-is-vertical')) {
        var one_page_adjust = -1;
    }
    if ($(".responsive-menu-wrap:visible").length) {
        var one_page_adjust = 53;
    }

    $('.button-has-a-color').each(function() {
        var button_color = $(this).data('backgroundafter');
        var button_id = $(this).data('buttonid');
        $('.button-shortcode-'+button_id+' .mtheme-button:after').css('background-color',button_color);
    });

    $(".sf-menu").mouseenter(function() {
            $('body').addClass('main-menu-on');
    })
    .mouseleave(function() {
            $('body').removeClass('main-menu-on');
    });

    $('#sidebar').find('.lazyload-after').addClass('lazyload');

    $(".service-column.alignicon-top-horizontal").mouseenter(function() {
            var iconcolor = $(this).find('.service-icon').attr('data-iconcolor');
            var bgcolor = $(this).find('.service-icon').attr('data-bgcolor');
            $(this).find('.service-icon').find('.fontawesome').css('color', bgcolor);
            $(this).find('.service-icon').find('.fontawesome').css('background-color', iconcolor);
    }).mouseleave(function() {
            var iconcolor = $(this).find('.service-icon').attr('data-iconcolor');
            var bgcolor = $(this).find('.service-icon').attr('data-bgcolor');
            $(this).find('.service-icon').find('.fontawesome').css('background-color', bgcolor);
            $(this).find('.service-icon').find('.fontawesome').css('color', iconcolor);
    });

    // Hero image
    var document_height = $(window).height();
    var document_width = $(window).width();
    var heightofHeader = 86;
    if (document_width < 1100 ) {
        heightofHeader = 65;
    } else {
        heightofHeader = 86;
    }
    if ($('body').hasClass('header-type-overlay')) {
        heightofHeader = 0;
    }
    $(".fullheight-parallax").height(document_height);
    $(".page-has-full-background.page-media-top #home").css("margin-top", document_height);

    var header_height = $(".outer-wrap").outerHeight() * -1;
    if (header_height !== 0) {
        // no height
    }
    $(window).resize(function() {

        document_height = $(window).height();
        document_width = $(window).width();

        if (document_width < 1100 ) {
            heightofHeader = 65;
        } else {
            heightofHeader = 86;
            if ($('body').hasClass('header-type-overlay')) {
                heightofHeader = 0;
            }
        }
        $(".fullheight-parallax").height(document_height);
        $(".page-has-full-background.page-media-top #home").css("margin-top", document_height);
    });

    var range = 200;
    // Slideshow Hero titles
    var slidetext = $(".hero-text-wrap ul li");
    var slideIndex = -1;

    function showNextHeroText() {
        slideIndex++;
        slidetext.eq(slideIndex % slidetext.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextHeroText);
    }
    if ($(".hero-text-wrap ul").hasClass("slideshow")) {
        showNextHeroText();
    }
    $('.hero-link-to-base').on( "click", function() {
        //dashboard toggle
        var scrollelement = $(this).closest('#heroimage');
        var fromtop = scrollelement.offset().top + 20;
        if ($('body').hasClass('header-type-overlay')) {
            fromtop = fromtop - 120;
        }
        var scrolltobase = scrollelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.slideshow-scroll-indicate').on( "click", function() {
        //dashboard toggle
        var scrollelement = $('#supersized,#backgroundvideo');
        var fromtop = scrollelement.offset().top;
        var scrolltobase = scrollelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.page-has-full-background .fullpage-link-to-base').on( "click", function() {
        var scrolltobase = $(window).height();
        $('body,html').stop().animate({
            scrollTop: scrolltobase
        }, 800);
    });
    $('.hero-demo-to-base').on( "click", function() {
        //dashboard toggle
        var demoelement = $('.hero-linked-demo');
        var fromtop = demoelement.offset().top;
        var demoscrolltobase = demoelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: demoscrolltobase
        }, 800);
    });
    $('.hero-demo-to-base2').on( "click", function() {
        //dashboard toggle
        var demoelement = $('.hero-linked-demo2');
        var fromtop = demoelement.offset().top;
        var demoscrolltobase = demoelement[0].scrollHeight + fromtop;
        $('body,html').animate({
            scrollTop: demoscrolltobase
        }, 800);
    });
    // Hero image End

    if (isIOS || isAndroid) {
        $('.fullpage-block,.title-container-wrap').css('background-attachment', 'scroll');
    }
    $('.side-dashboard-toggle').on( "click", function() {
        //dashboard toggle
        $('body').toggleClass('body-dashboard-push-right');
        $('.side-dashboard-wrap').toggleClass('dashboard-push-onscreen');
    });

    if (isIOS || isAndroid) {
        $('.fullpage-block').css('background-attachment', 'scroll');
    }

    $(".ntips").tooltip({
        position: {
            my: "center bottom+40",
            at: "center bottom"
        },
        show: {
            effect: "fade",
            delay: 5
        }
    });
    $(".stips").tooltip({
        position: {
            my: "center top",
            at: "center top"
        },
        show: {
            effect: "fade",
            delay: 5
        }
    });

    // end block of search toggle

    if ($.fn.fitVids) {
        $(".fitVids").fitVids();
    }

    function superfish_menu() {
        if ($.fn.superfish) {
            $('.homemenu ul.sf-menu').superfish({
                animation: {
                    opacity: 'show'
                },
                animationOut: {
                    opacity: 'hide'
                },
                speed: 'fast',
                speedOut: 'fast',
                disableHI: true,
                delay: 100,
                autoArrows: true,
                dropShadows: true,
                onInit: function() {
                    setTimeout(function() {
                        $('body').addClass('superfish-ready');
                    }, 600 );
                },
                onHide: function() {
                },
                onShow: function() {},
                onBeforeShow: function() {},
                onBeforeHide: function() {}
            });
        }
    }
    setTimeout(function(){ superfish_menu() }, 200);

    function displayMenuItems() {
        var duration = 400;
        var easing = 'easeInOutQuad';
        $.Velocity.Redirects.menuitemlist = function (element, options, index, size) {
          $.Velocity.animate(element, { 
            opacity: [1,0]
          }, {
            delay: index*(duration/size/2),
            duration: duration,
            easing: easing,
            complete: function() {
                $('body').addClass('display-menu-done');
            }
          });
        };
        $( '.sf-menu > li > a' ).velocity('menuitemlist');
    }
    function displaySubMenuItems(openedUL) {
        var duration = 450;
        var easing = 'easeInOutQuad';
        $.Velocity.Redirects.submenuitemlist = function (element, options, index, size) {
          $.Velocity.animate(element, { 
            opacity: [1]
          }, {
            delay: index*(duration/size/4),
            duration: duration,
            easing: easing
          });
        };
        $( openedUL ).stop(true,true).find('li').velocity('submenuitemlist');
    }

    $('.support-user-options-trigger').on( "click", function() {
        $('.support-user-options-wrap').removeClass('support-monitor-active');
    });

    $(".toggle-shortcode").on( "click", function() {
        $(this).toggleClass("active").next().slideToggle("fast");
        return false;
    });

    // Faq toggle shortcode
    $(".faq-toggle-shortcode-wrap").on( "click", function() {
        $(this).toggleClass("active").find('a.faq-toggle-link').next().slideToggle("fast");
        return false;
    });
    
    $("#popularposts_list li:even,#recentposts_list li:even").addClass('even');
    $("#popularposts_list li:odd,#recentposts_list li:odd").addClass('odd');

    $(".service-column .service-item:even").addClass('service-order-even');
    $(".service-column .service-item:odd").addClass('service-order-odd');

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('body').addClass('goto-top-active');
            } else {
                $('body').removeClass('goto-top-active');
            }
        });
    });
    $('.pricing-column ul').each(function(e) {
        $(this).find('li:even').addClass('even');
        $(this).find('li:odd').addClass('odd');
    });

    // WooCommerce Codes
    // Thumnail display for secondary image

    var header_cart_toggle = $('.header-cart-toggle');
    var header_cart_off = $('.header-cart-close');

    header_cart_toggle.on( "click", function() {
        $('body').toggleClass('cart-on');
    });
    $('.header-cart-close').on( "click", function() {
        $('body').removeClass('cart-on');
    });
    $('.container-wrapper').on( "click", function() {
        $('body').removeClass('cart-on');
    });

    var woocommerce_active = $('body.woocommerce');
    if (woocommerce_active.length) {
        $('ul.products li.mtheme-hover-thumbnail').mouseenter(function() {
            var woo_secondary_thumnail = $(this).find('.mtheme-secondary-thumbnail-image').attr('src');
            if (woo_secondary_thumnail !== undefined) {
                $(this).find('.wp-post-image').removeClass('woo-thumbnail-fadeInDown').addClass('woo-thumbnail-fadeOutUp');
                $(this).find('.mtheme-secondary-thumbnail-image').removeClass('woo-thumbnail-fadeOutUp').addClass('woo-thumbnail-fadeInDown');
            }
        })
        .mouseleave(function() {
            var woo_secondary_thumnail = $(this).find('.mtheme-secondary-thumbnail-image').attr('src');
            if (woo_secondary_thumnail !== undefined) {
                $(this).find('.wp-post-image').removeClass('woo-thumbnail-fadeOutUp').addClass('woo-thumbnail-fadeInDown');
                $(this).find('.mtheme-secondary-thumbnail-image').removeClass('woo-thumbnail-fadeInDown').addClass('woo-thumbnail-fadeOutUp');
            }
        });


        var woocommerce_ordering = $(".woocommerce-page .woocommerce-ordering select");
        if ((woocommerce_ordering).length) {
            var woocommerce_ordering_curr = $(".woocommerce-ordering select option:selected").text();
            var woocommerce_ordering_to_ul = woocommerce_ordering
                .clone()
                .wrap("<div></div>")
                .parent().html()
                .replace(/select/g, "ul")
                .replace(/option/g, "li")
                .replace(/value/g, "data-value");

            $('.woocommerce-ordering')
                .prepend('<div class="mtheme-woo-order-selection-wrap"><div class="mtheme-woo-order-selected-wrap"><span class="mtheme-woo-order-selected">' + woocommerce_ordering_curr + '</span><i class="woo-sorter-dropdown ion-ios-settings"></i></div><div class="mtheme-woo-order-list">' + woocommerce_ordering_to_ul + '</div></div>');
        }

        $(function() {
            $('.mtheme-woo-order-selected-wrap').on( "click", function() {
                $('.mtheme-woo-order-list ul').slideToggle('fast');
                $('.woo-sorter-dropdown').toggleClass('ion-ios-settings-strong').toggleClass('ion-ios-close-empty');
            });
            $('.mtheme-woo-order-list ul li').on( "click", function() {
                //Set value
                var selected_option = $(this).data('value');
                $(".woocommerce-page .woocommerce-ordering select").val(selected_option).trigger('change');

                $('.mtheme-woo-order-selected').text($(this).text());
                $('.mtheme-woo-order-list').slideUp('fast');
                $(this).addClass('current');
                e.preventDefault();
            })
        });
    }

});

//
(function($) {
    "use strict";

    $(window).load(function() {
        var deviceAgent = navigator.userAgent.toLowerCase();
        var isIOS = deviceAgent.match(/(iphone|ipod|ipad)/);
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1;

    setTimeout(function() {
        $('body').addClass('preloader-done');
        $('.loading-spinner-detect').velocity("fadeOut", {
            duration: 350
        });
    }, 700 );

    setTimeout(function() {
        $('body').addClass('reveal-specific-bg');
    }, 800 );

    setTimeout(function(){ rareHeaderElements() }, 825);

    setTimeout(function() {
        $('body').addClass('reveal-single-image');
    }, 850 );

    setTimeout(function(){ revealspecificElements() }, 1000);

    function owlcarouselsInit() {
        if ($('.owl-carousel-detect').length) {
            $('.owl-carousel-detect').each(function() {
                var thisID = $(this).data('id');
                var thisAutoplay = $(this).data('autoplay');
                var thisLazyload = $(this).data('lazyload');
                var thisSmartspeed = $(this).data('smartspeed');
                var thisType = $(this).data('type');
                var thisAutoplayTimeout = $(this).data('autoplaytimeout');
                thisAutoplay = typeof thisAutoplay !== 'undefined' ? thisAutoplay : 'false';
                thisLazyload = typeof thisLazyload !== 'undefined' ? thisLazyload : 'false';
                thisSmartspeed = typeof thisSmartspeed !== 'undefined' ? thisSmartspeed : '1000';
                thisAutoplayTimeout = typeof thisAutoplayTimeout !== 'undefined' ? thisAutoplayTimeout : '5000';
                thisType = typeof thisType !== 'undefined' ? thisType : 'slideshow';
                thisID = typeof thisID !== 'undefined' ? thisID : 'false';
                if (thisType=="centercarousel") {
                     $('#'+thisID).owlCarousel({
                        responsiveClass:true,
                        responsive:{
                            0:{
                                items:1,
                                nav:true
                            },
                            600:{
                                items:1,
                                nav:true
                            },
                            1000:{
                                items:1,
                                nav:true
                            },
                            1350:{
                                items:2,
                                nav:true
                            }
                        },
                        center: true,
                        items:2,
                        loop:true,
                        margin:10,
                        stagePadding: 10,
                        autoplay: thisAutoplay,
                        autoplayTimeout: thisAutoplayTimeout,
                        lazyLoad: thisLazyload,
                        nav: true,
                        autoHeight : true,
                        navText : ["",""],
                        singleItem : true,
                        onResize : reAdjustJarallax
                    });
                }
                if (thisType=="flatcarousel") {
                     $('#'+thisID).owlCarousel({
                        responsiveClass:true,
                        responsive:{
                            0:{
                                items:1,
                                nav:true
                            },
                            600:{
                                items:1,
                                nav:true
                            },
                            1000:{
                                items:1,
                                nav:true
                            },
                            1350:{
                                items:2,
                                nav:true
                            }
                        },
                        center: true,
                        items:2,
                        loop:true,
                        margin:10,
                        stagePadding: 10,
                        smartSpeed: thisSmartspeed,
                        autoplay: thisAutoplay,
                        autoplayTimeout: thisAutoplayTimeout,
                        lazyLoad: thisLazyload,
                        nav: true,
                        autoHeight : true,
                        navText : ["",""],
                        singleItem : true,
                        onResize : reAdjustJarallax
                    });
                }
                if (thisType !== "centercarousel" || thisType !== "flatcarousel") {
                     $('#'+thisID).owlCarousel({
                        items:1,
                        loop:true,
                        autoplay: thisAutoplay,
                        smartSpeed: thisSmartspeed,
                        autoplayTimeout: thisAutoplayTimeout,
                        lazyLoad: thisLazyload,
                        nav: true,
                        autoHeight: true,
                        navText : ["",""],
                        singleItem : true,
                        onResize : reAdjustJarallax
                    });          
                }

            });
        }
    }
    owlcarouselsInit();

    function owlcarouselsWorks() {
        if ($('.owl-works-detect').length) {
            $('.owl-works-detect').each(function() {
                var thisID = $(this).data('id');
                var thisAutoplay = $(this).data('autoplay');
                var thisLazyload = $(this).data('lazyload');
                var thisPagination = $(this).data('pagination');
                var thisColumns = $(this).data('columns');
                var thisType = $(this).data('type');
                thisAutoplay = typeof thisAutoplay !== 'undefined' ? thisAutoplay : 'false';
                thisLazyload = typeof thisLazyload !== 'undefined' ? thisLazyload : 'false';
                thisPagination = typeof thisPagination !== 'undefined' ? thisPagination : 'false';
                thisColumns = typeof thisColumns !== 'undefined' ? thisColumns : '4';
                thisID = typeof thisID !== 'undefined' ? thisID : 'false';

                 $('#'+thisID).owlCarousel({
                    responsiveClass:true,
                    responsive:{
                        0:{
                            items:1,
                            nav:true
                        },
                        600:{
                            items:2,
                            nav:true
                        },
                        1200:{
                            items:2,
                            nav:true
                        },
                        1300:{
                            items:3,
                            nav:true
                        },
                        1500:{
                            items: thisColumns,
                            nav:true
                        }
                    },
                    lazyLoad: thisLazyload,
                    dots: thisPagination,
                    items: thisColumns,
                    nav : true,
                    navText : ["",""],
                    loop: true
                });

            });
        }
    }
    owlcarouselsWorks();

    function reAdjustJarallax () {
        if ($.fn.jarallax) {
            setTimeout(function() {
                $('.jarallax-parent').jarallax('clipContainer');
                $('.jarallax-parent').jarallax('coverImage');
            }, 600 );
        }
    }

    function rareHeaderElements() {
        if ($.fn.waypoint) {
            $('.proofing-header-is-animated').waypoint(function() {
                $(this).removeClass('proofing-header-is-animated').addClass('animation-action');
            }, {
                offset: '90%'
            });
        }
    }

    function revealspecificElements() {

        // reveal all items after init
        var items = $('#gridblock-container,.thumbnails-grid-container').find('.grid-animate-display-all');
        $('#gridblock-container').addClass('is-showing-items');

        var i = 0;
        $('#gridblock-container,.thumbnails-grid-container,.gridblock-metro').each(function() {
            $(this).find('.grid-animate-display-all').each(function(counter) {
                $(this)
                    .velocity({opacity:1}, 500 );
            });
        });
        var t = 0;
        $('.fotorama__nav__shaft').each(function() {
            $(this).find('.fotorama__thumb').each(function(counter) {
                $(this)
                    .delay(++i * 20 + Math.random() * 1000)
                    .velocity({opacity:1}, 500 );
            }).promise().done( function(){ $('.fotorama__nav__shaft .fotorama__thumb-border').velocity({opacity:1}, 500 ); } );
        });
        var s = 0;
        $('.swiper-wrapper').each(function() {
            $(this).find('.swiper-slide').each(function(counter) {
                $(this)
                    .delay(++s * 200)
                    .velocity({opacity:1}, 1500 );
            });
        });

    }

    function gridRotator() {
        if ($.fn.gridrotator) {
            if ($('.ri-grid').length) {
                var gridSelect = ('.ri-grid');
                var gridID = '#' + $(gridSelect).data('id');
                var gridTransition = $(gridSelect).data('transition');
                var slideshowstatus = $(gridSelect).data('slideshow');
                $( gridID ).gridrotator( {
                    rows : 2,
                    columns : 9,
                    maxStep : 4,
                    animType        : gridTransition,
                    preventClick    : false,
                    slideshow       : slideshowstatus,
                    interval        : 4000,
                    onhover     : false,
                    w1024 : {
                        rows : 2,
                        columns : 9
                    },
                    w768 : {
                        rows : 2,
                        columns : 6
                    },
                    w480 : {
                        rows : 2,
                        columns : 6
                    },
                    w320 : {
                        rows : 2,
                        columns : 6
                    },
                    w240 : {
                        rows : 2,
                        columns : 6
                    },
                });
            }
        }
    }
    gridRotator();
    })
})(jQuery);
