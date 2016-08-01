$(function() {

    $('.index .right-nav').find('.my-center').click(function (event) {
        var myCenterMenu = $(this).children('.my-center-menu');
        if (myCenterMenu.hasClass('display-none')) {
            myCenterMenu.removeClass('display-none').addClass('display-block');
        }
        event.stopPropagation();
    });

    $('.index .right-nav .my-center').find('.close-menu').click(function (event) {
    	var myCenterMenu = $(this).parent();
    	if(myCenterMenu.hasClass('display-block')){
    		myCenterMenu.removeClass('display-block').addClass('display-none');
    	}
    	event.stopPropagation();
    });




});
