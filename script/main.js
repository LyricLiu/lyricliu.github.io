(function() {
    $(document).ready(function() {
        function adjust() {
            if ($(window).width() < 1440) {
                $(".begin").width($(window).width()).height($(window).height());
                var fsize = (($(window).width()) / 1440 * 1.9).toString() + 'em';
                $("#type-text").css("font-size", fsize);
                $(".p-col div").width(($(window).width() - 1) / 6).height(($(window).width() - 1) / 6);
                $(".p-col div h2").css("margin-top", ((($(window).width()) / 1440 * 70).toString() + 'px'));
                $(".p-col div h2").css("font-size", ((($(window).width()) / 1440 * 1.6).toString() + 'em'));
                $(".begin").css("left", "0");
                $("#type-text").css("width", "100%");
                $("#type-text").css("left", "9%");
                $("#p-wrap0").css("width", "100%");
                $("#p-wrap0").css("left", "0");
                $("header").css("width", "100%");
                $("header").css("left", "0");
                $("#menu-icon").css("right", "40px");
                $("#p-wrap1").css("width", "100%");
                $("#p-wrap1").css("left", "0");
                $("#p-wrap2").css("width", "100%");
                $("#p-wrap2").css("left", "0");
                $("#p-wrap3").css("width", "100%");
                $("#p-wrap3").css("left", "0");
                $("#p-wrap4").css("width", "100%");
                $("#p-wrap4").css("left", "0");
                $("#page-close").css("left", "300px");
            } else {
                $(".begin").css("left", "calc(50% - 720px)");
                if($(window).height() > 800){
                    $(".begin").css("top", "18%");
                }
                $("#type-text").css("width", "1180px");
                $("#type-text").css("left", "calc(50% - 590px)");
                $("#p-wrap0").css("width", "1440px");
                $("#p-wrap0").css("left", "calc(50% - 720px)");
                $("header").css("width", "1440px");
                $("header").css("left", "calc(50% - 720px)");
                $("#menu-icon").css("right", "calc(50% - 720px)");
                $("#p-wrap1").css("width", "1440px");
                $("#p-wrap1").css("left", "calc(50% - 720px)");
                $("#p-wrap2").css("width", "1440px");
                $("#p-wrap2").css("left", "calc(50% - 720px)");
                $("#p-wrap3").css("width", "1440px");
                $("#p-wrap3").css("left", "calc(50% - 720px)");
                $("#p-wrap4").css("width", "1440px");
                $("#p-wrap4").css("left", "calc(50% - 720px)");
                $("#page-close").css("left", "calc(50% - 420px)");
            }
        }

        window.onload = function() {
            window.onresize = adjust;
            adjust();
        }

        $.jScrollability([{
            'selector': '#s-line2',
            'start': 'parent',
            'end': 'parent',
            'fn': {
                'width': {
                    'start': 0,
                    'end': 900,
                    'unit': 'px'
                }
            }
        }, {
            'selector': '#s1-bottom',
            'start': 800,
            'trigger': true,
            'fn': function() {
                $("#s1-bottom").fadeIn(500);
            }
        }, {
            'selector': '#s2-upper-left',
            'start': 1100,
            'trigger': true,
            'fn': function() {
                $("#s2-upper-left").fadeIn(1000);
                $("#s2-upper-left").addClass('animated flipInX');
            }
        }, {
            'selector': '#s2-bottom-right',
            'start': 1300,
            'trigger': true,
            'fn': function() {
                $("#s2-bottom-right").fadeIn(1000);
                $("#s2-bottom-right").addClass('animated fadeInUp');
            }
        }, {
            'selector': '#s2-bottom-left',
            'start': 1300,
            'trigger': true,
            'fn': function() {
                setTimeout(function() {
                    $("#s2-bottom-left").fadeIn(1000);
                    $("#s2-bottom-left").addClass('animated fadeInUp');
                }, 500);
            }
        }, {
            'selector': '#s1 p',
            'start': 100,
            'trigger': true,
            'fn': function() {
                $("#s1 p").fadeIn(1000);
                $("#s1 p").addClass('animated fadeInUp');
            }
        }, {
            'selector': '#s3-line',
            'start': 1600,
            'end': 2100,
            'fn': {
                'height': {
                    'start': 0,
                    'end': 400,
                    'unit': 'px'
                }
            }
        }, {
            'selector': '#s3-block',
            'start': 2100,
            'end': 2400,
            'fn': {
                'height': {
                    'start': 0,
                    'end': 650,
                    'unit': 'px'
                }
            }
        }, {
            'selector': '#s3-gif1',
            'start': 2000,
            'trigger': true,
            'fn': function() {
                $("#s3-gif1").show();
                setTimeout(function() {
                    $('#s3-gif1').hide();
                    $('#s3-gif2').show();
                }, 3000);
            }
        }, {
            'selector': '#s3-left-icon',
            'start': 1900,
            'trigger': true,
            'fn': function() {
                $("#s3-left-icon").fadeIn(1000);
                $("#s3-left-icon").addClass('animated flipInX');
            }
        }, {
            'selector': '#s3-right-icon',
            'start': 1900,
            'trigger': true,
            'fn': function() {
                setTimeout(function() {
                    $("#s3-right-icon").fadeIn(1000);
                    $("#s3-right-icon").addClass('animated flipInX');
                }, 300);
            }
        }, {
            'selector': '#s3-left-text',
            'start': 2150,
            'trigger': true,
            'fn': function() {
                $("#s3-left-text").fadeIn(1000);
                $("#s3-left-text").addClass('animated fadeInUp');
            }
        }, {
            'selector': '#s3-right-text',
            'start': 2150,
            'trigger': true,
            'fn': function() {
                setTimeout(function() {
                    $("#s3-right-text").fadeIn(1000);
                    $("#s3-right-text").addClass('animated fadeInUp');
                }, 300);
            }
        }, {
            'selector': '#s3-pic',
            'start': 2250,
            'trigger': true,
            'fn': function() {
                $("#s3-pic").fadeIn(1000);
                $("#s3-pic").addClass('animated zoomIn');
            }
        }, {
            'selector': '#s4-line',
            'start': 2700,
            'end': 3000,
            'fn': {
                'width': {
                    'start': 0,
                    'end': 765,
                    'unit': 'px'
                }
            }
        }, {
            'selector': '#s5-line',
            'start': 3100,
            'end': 3700,
            'fn': {
                'height': {
                    'start': 0,
                    'end': 935,
                    'unit': 'px'
                }
            }
        }, {
            'selector': '#s5-left',
            'start': 3400,
            'trigger': true,
            'fn': function() {
                $("#s5-left").fadeIn(1000);
                $("#s5-left").addClass('animated flipInX');
            }
        }, {
            'selector': '#s5-right',
            'start': 3400,
            'trigger': true,
            'fn': function() {
                setTimeout(function() {
                    $("#s5-right").fadeIn(1000);
                    $("#s5-right").addClass('animated fadeInUp');
                }, 400);

            }
        }, {
            'selector': '#s6-upper',
            'start': 3800,
            'end': 4000,
            'fn': {
                'width': {
                    'start': 0,
                    'end': 274,
                    'unit': 'px'
                }
            }
        }, {
            'selector': '#s6-icon',
            'start': 4100,
            'trigger': true,
            'fn': function() {
                $("#s6-icon").fadeIn(1000);
                $("#s6-icon").addClass('animated fadeInUp');
            }
        }, {
            'selector': '#s4-right',
            'start': 2800,
            'trigger': true,
            'fn': function() {
                $("#s4-right").fadeIn(1000);
                $("#s4-right").addClass('animated fadeInUp');
            }
        }, ]);
    });

    $('#menu-icon').click(function() {
        $(this).toggleClass('open');
        $("#menu-bar").toggleClass('active');
        setTimeout(function() {
            $('#menu-mask').toggleClass('active1');
            $('#menu-bar h2').toggleClass('active2');
            $('#menu-bar div').toggleClass('active2');
        }, 200);
    });
    /*
        if($('#menu-bar').hasClass('active')){
            $(window).one("click", function() {
                $('#menu-icon').removeClass('open');
                $("#menu-bar").removeClass('active');
                setTimeout(function() {
                    $('#menu-mask').removeClass('active1');
                    $('#menu-bar h2').removeClass('active2');
                    $('#menu-bar div').removeClass('active2');
                }, 200);
            });
        }
    */

    var firstrun = true;

    function Helloclean() {
        if (firstrun == true) {
            $("#video-wrap1").hide();
            $("#video-wrap2").show();
            $("#begin2").get(0).play();
            $("#type-text").fadeOut("slow");
            $("#begin-text").fadeOut("slow");
            setTimeout(function() {
                $("#wrap").fadeOut("slow");
                $(".p-col div").delay(400).fadeIn(400);
                $(".mask1").animate({ left: "+=2400px" }, 1000, 'easeInOutCubic');
                $(".mask2").delay(200).animate({ left: "+=2400px" }, 800, 'easeInOutCubic');
            }, 1000);
            $("#p-wrap0").show();
            $("#navi-text").delay(1000).fadeIn(800);
            firstrun = false;
        }
    }

    $(window).one("click", function() {
        Helloclean();
    });

    setTimeout(function() {
        Helloclean();
    }, 5000);



    setTimeout(function() {
        $("#begin-text").show();
    }, 2500);

    //Navigation click
    //p-wrap0

    function transAnim() {
        $('#trans-anim').show();
        $("#mask10").animate({ left: "+=2800px" }, 1000, 'easeInOutCubic');
        $("#mask20").delay(200).animate({ left: "+=2800px" }, 800, 'easeInOutCubic');
        setTimeout(function() {
            $('#trans-anim').hide();
            $("#mask10").animate({ left: "-=2800px" }, 800, 'easeInOutCubic');
            $("#mask20").delay(200).animate({ left: "-=2800px" }, 600, 'easeInOutCubic');
        }, 1000);
    }

    function hideWrap0() {
        if ($('#p-wrap0').is(':visible')) {
            $(".p-col div").delay(600).fadeOut(400);
            $(".mask1").animate({ left: "-=2800px" }, 1000, 'easeInOutCubic');
            $(".mask2").delay(200).animate({ left: "-=2800px" }, 800, 'easeInOutCubic');
            setTimeout(function() {
                $("#p-wrap0").hide();
            }, 1000);
        }
    }

    function showWrap0() {
        if ($('#p-wrap0').is(':hidden')) {
            setTimeout(function() {
                $("#p-wrap0").show();
                $(".p-col div").delay(400).fadeIn(400);
                $(".mask1").animate({ left: "+=2800px" }, 1000, 'easeInOutCubic');
                $(".mask2").delay(200).animate({ left: "+=2800px" }, 800, 'easeInOutCubic');
            }, 500);

        }
    }

    function hideWrap1() {
        setTimeout(function() {
            $("#p-wrap1").fadeOut(500);
            $("#deco1").hide();
        }, 200);
        $("#navi1").removeClass('active');
    }

    function showWrap1() {
        setTimeout(function() {
            $("#p-wrap1").fadeIn(500);
            $("#deco1").fadeIn(500);
        }, 1000);
        $("#navi1").addClass('active');
    }

    function hideWrap2() {
        setTimeout(function() {
            $("#p-wrap2").fadeOut(500);
            $("#s-line1").removeClass('active');
        }, 200);
        $("#navi2").removeClass('active');
    }

    function showWrap2() {
        setTimeout(function() {
            $("#p-wrap2").fadeIn(500);
        }, 1000);
        setTimeout(function() {
            $("#s-line1").addClass('active');
        }, 1500);
        $("#navi2").addClass('active');
        /*$("#s1-bottom").hide();
        $("#s2-upper-left").hide();
        $("#s2-upper-left").removeClass('animated flipInX');
        $("#s2-bottom-right").hide();
        $("#s2-bottom-right").removeClass('animated fadeInUp');
        $("#s2-bottom-left").hide();
        $("#s2-bottom-left").removeClass('animated fadeInUp');
        $("#s1 p").hide();
        $("#s1 p").removeClass('animated fadeInUp');
        $("#s3-gif1").hide();
        $("#s3-left-icon").hide();
        $("#s3-left-icon").removeClass('animated flipInX');
        $("#s3-right-icon").hide();
        $("#s3-right-icon").removeClass('animated flipInX');
        $("#s3-left-text").hide();
        $("#s3-left-text").removeClass('animated fadeInUp');
        $("#s3-right-text").hide();
        $("#s3-right-text").removeClass('animated fadeInUp');
        $("#s3-pic").hide();
        $("#s3-pic").removeClass('animated zoomIn');*/
    }

    function hideWrap3() {
        setTimeout(function() {
            $("#p-wrap3").fadeOut(500);
        }, 200);
        $("#navi3").removeClass('active');
    }

    function showWrap3() {
        setTimeout(function() {
            $("#p-wrap3").fadeIn(500);
        }, 1000);
        $("#navi3").addClass('active');
    }

    function hideWrap4() {
        setTimeout(function() {
            $("#p-wrap4").fadeOut(500);
            $("#h-right").removeClass('animated flipInX');
        }, 200);
        $("#navi4").removeClass('active');
    }

    function showWrap4() {
        setTimeout(function() {
            $("#p-wrap4").fadeIn(500);
            $("#h-right").addClass('animated flipInX');
        }, 1000);
        $("#navi4").addClass('active');
    }

    function hideWrap5() {
        $('#p-wrap5').fadeOut(800);
        setTimeout(function() {
            $('iframe').attr("src", "");
        }, 1000);
    }

    function hideWrap6() {
        $('#p-wrap6').fadeOut(800);
        setTimeout(function() {
            $('iframe').attr("src", "");
        }, 1000);
    }


    $("#lyric-logo").click(function() {
        showWrap0();
        hideWrap1();
        hideWrap2();
        hideWrap3();
        hideWrap4();
        hideWrap5();
        hideWrap6();
    });

    $("#menu-bar1").click(function() {
        if ($('#p-wrap0').is(':hidden')) {
            transAnim();
        }
        hideWrap0();
        showWrap1();
        hideWrap2();
        hideWrap3();
        hideWrap4();
        hideWrap5();
        hideWrap6();
        $('#menu-icon').removeClass('open');
        $("#menu-bar").removeClass('active');
        setTimeout(function() {
            $('#menu-mask').removeClass('active1');
            $('#menu-bar h2').removeClass('active2');
            $('#menu-bar div').removeClass('active2');
        }, 200);
    });

    $("#menu-bar2").click(function() {
        if ($('#p-wrap0').is(':hidden')) {
            transAnim();
        }
        hideWrap0();
        hideWrap1();
        showWrap2();
        hideWrap3();
        hideWrap4();
        hideWrap5();
        hideWrap6();
        $('#menu-icon').removeClass('open');
        $("#menu-bar").removeClass('active');
        setTimeout(function() {
            $('#menu-mask').removeClass('active1');
            $('#menu-bar h2').removeClass('active2');
            $('#menu-bar div').removeClass('active2');
        }, 200);
    });

    $("#menu-bar3").click(function() {
        if ($('#p-wrap0').is(':hidden')) {
            transAnim();
        }
        hideWrap0();
        hideWrap1();
        hideWrap2();
        showWrap3();
        hideWrap4();
        hideWrap5();
        hideWrap6();
        $('#menu-icon').removeClass('open');
        $("#menu-bar").removeClass('active');
        setTimeout(function() {
            $('#menu-mask').removeClass('active1');
            $('#menu-bar h2').removeClass('active2');
            $('#menu-bar div').removeClass('active2');
        }, 200);
    });

    $("#menu-bar4").click(function() {
        if ($('#p-wrap0').is(':hidden')) {
            transAnim();
        }
        hideWrap0();
        hideWrap1();
        hideWrap2();
        hideWrap3();
        showWrap4();
        hideWrap5();
        hideWrap6();
        $('#menu-icon').removeClass('open');
        $("#menu-bar").removeClass('active');
        setTimeout(function() {
            $('#menu-mask').removeClass('active1');
            $('#menu-bar h2').removeClass('active2');
            $('#menu-bar div').removeClass('active2');
        }, 200);
    });


    $("#navi1").click(function() {
        if ($('#p-wrap0').is(':hidden')) {
            transAnim();
        }
        hideWrap0();
        showWrap1();
        hideWrap2();
        hideWrap3();
        hideWrap4();
        hideWrap5();
        hideWrap6();
    });

    $("#navi2").click(function() {
        if ($('#p-wrap0').is(':hidden')) {
            transAnim();
        }
        hideWrap0();
        hideWrap1();
        showWrap2();
        hideWrap3();
        hideWrap4();
        hideWrap5();
        hideWrap6();
    });

    $("#navi3").click(function() {
        if ($('#p-wrap0').is(':hidden')) {
            transAnim();
        }
        hideWrap0();
        hideWrap1();
        hideWrap2();
        showWrap3();
        hideWrap4();
        hideWrap5();
        hideWrap6();
    });

    $("#navi4").click(function() {
        if ($('#p-wrap0').is(':hidden')) {
            transAnim();
        }
        hideWrap0();
        hideWrap1();
        hideWrap2();
        hideWrap3();
        showWrap4();
        hideWrap5();
        hideWrap6();
    });

    /*  page content link   */

    $("#page-close").click(function() {
        transAnim();
        showWrap1();
        hideWrap5();

    });

    $("#page-close1").click(function() {
        transAnim();
        showWrap3();
        hideWrap6();

    });

    $("#halloween").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/halloween.html");
    });

    $("#flawed").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/flawed.html");
    });

    $("#tea").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/tea.html");
    });

    $("#cosmos").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/cosmos.html");
    });

    $("#glassia").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/glassia.html");
    });

    $("#memo").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/memo.html");
    });

    $("#ustay").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/ustay.html");
    });

    $("#fish").click(function() {
        window.open('http://lyricliu.com/hci_hw4');
    });

    $("#isola").click(function() {
        window.open('http://lyricliu.com/isola_web');
    });

    $("#superhero").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/superhero.html");
    });

    $("#draw").click(function() {
        hideWrap1();
        $('#p-wrap5').show();
        $('iframe').attr("src", "./pages/draw.html");
    });


    /*  home page content link   */
    $("#p1").click(function() {
        hideWrap0();
        setTimeout(function() {
            $('#p-wrap5').show();
        }, 1000);
        $('iframe').attr("src", "./pages/flawed.html");
    });

    $("#p2").click(function() {
        hideWrap0();
        setTimeout(function() {
            $('#p-wrap5').show();
        }, 1000);
        $('iframe').attr("src", "./pages/glassia.html");
    });

    $("#p3").click(function() {
        window.open('http://globalgamejam.org/2017/games/eventide');
    });

    $("#p4").click(function() {
        hideWrap0();
        setTimeout(function() {
            $('#p-wrap5').show();
        }, 1000);
        $('iframe').attr("src", "./pages/tea.html");
    });

    $("#p5").click(function() {
        hideWrap0();
        setTimeout(function() {
            $('#p-wrap5').show();
        }, 1000);
        $('iframe').attr("src", "./pages/printer.html");
    });

    $("#p6").click(function() {
        window.open('http://lyricliu.com/hci_hw4');
    });

    $("#p7").click(function() {
        hideWrap0();
        setTimeout(function() {
            $('#p-wrap5').show();
        }, 1000);
        $('iframe').attr("src", "./pages/halloween.html");
    });

    $("#p8").click(function() {
        window.open('http://lyricliu.com/isola_web');
    });

    $("#p9").click(function() {
        hideWrap0();
        setTimeout(function() {
            $('#p-wrap5').show();
        }, 1000);
        $('iframe').attr("src", "./pages/draw.html");
    });

    $("#p10").click(function() {
        hideWrap0();
        setTimeout(function() {
            $('#p-wrap5').show();
        }, 1000);
        $('iframe').attr("src", "./pages/ustay.html");
    });

    $("#p11").click(function() {
        hideWrap0();
        setTimeout(function() {
            $('#p-wrap5').show();
        }, 1000);
        $('iframe').attr("src", "./pages/cosmos.html");
    });

    /****  Day by day link  ****/
    $("#day1").click(function() {
        hideWrap3();
        setTimeout(function() {
            $('#p-wrap6').show();
        }, 1000);
        $('iframe').attr("src", "./pages/day1.html");
    });

    $("#day2").click(function() {
        hideWrap3();
        setTimeout(function() {
            $('#p-wrap6').show();
        }, 1000);
        $('iframe').attr("src", "./pages/day2.html");
    });


    jQuery.easing['easeInOutExpo'] = jQuery.easing['swing'];

    jQuery.extend(jQuery.easing, {
        def: 'easeOutQuad',
        swing: function(x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function(x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function(x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function(x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function(x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function(x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function(x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function(x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function(x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function(x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function(x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function(x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function(x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function(x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function(x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function(x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

})();