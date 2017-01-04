(function() {
    $(document).ready(function() {
        $('#fullpage').fullpage({
            //events
            //onLeave: function(index, nextIndex, direction) {},
            anchors: ['firstPage', 'secondPage', 'thirdPage'],
            afterLoad: function(anchorLink, index) {
                var loadedSection = $(this);
                if (index == 1) {
                    setTimeout(function() {
                        $("#s-line1").addClass('active');
                    }, 200);
                    $("#s1 p").fadeIn(1000);
                    $("#s1 p").addClass('animated fadeInUp');
                }
                if (index == 2) {
                    $("#s2-upper-left").show();
                    $("#s2-upper-left").addClass('animated flipInX');
                    setTimeout(function() {
                        $("#s-line2").addClass('active');
                        $("#s2-bottom-right").fadeIn(1000);
                        $("#s2-bottom-right").addClass('animated fadeInUp');
                    }, 300);
                    setTimeout(function() {
                        $("#s2 h2").fadeIn(1000);
                        $("#s2-bottom-left").fadeIn(1000);
                        $("#s2-bottom-left").addClass('animated fadeInUp');
                    }, 600);
                }
                if (index == 3) {
                    $("#s3-block").addClass('active');
                    $("#s3-right-icon").show();
                    $("#s3-right-icon").addClass('animated flipInX');
                    $("#s3-gif1").show();
                    setTimeout(function() {
                        $('#s3-gif1').hide();
                        $('#s3-gif2').show();
                    }, 3000);
                    setTimeout(function() {
                        $("#s3-right-text").fadeIn(1000);
                        $("#s3-right-text").addClass('animated fadeInUp');
                        $("#s3-pic").fadeIn(1000);
                        $("#s3-pic").addClass('animated zoomIn');
                    }, 300);
                    setTimeout(function() {
                        $("#s3-left-text").fadeIn(1000);
                        $("#s3 h4").fadeIn(1000);
                        $("#s3-left-text").addClass('animated fadeInUp');
                    }, 600);
                }
            },
        });
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
    setTimeout(function() {
        $("#hello-img").hide();
        $("#hello-img1").show();
    }, 2500);
    setTimeout(function() {
        $("#begin-text").show();
        $("#begin-text").addClass('animated fadeInUp');
    }, 2000);
}());