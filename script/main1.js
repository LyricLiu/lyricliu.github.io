(function() {
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
});