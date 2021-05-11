$(".call_menu").on("click", function(){
    $(".mob_menu").addClass("nav_active");
});

$(".close_menu").on("click", function(){
    $(".mob_menu").removeClass("nav_active");
});

$(".mob_menu .sub_menu li").each(function() {
    var this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
        $(this_li).append('<span class="arrow_mob"> <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.71723 5.84084L5.35828 1.45834L0.999323 5.84084" stroke="#C4C4C4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');
    }
});

$(".arrow_mob").on("click", function(){
    $(this).toggleClass("arr_act").siblings("ul").slideToggle(200);
});

$(".mob_menu_box_title").on("click", function(){
    $(this).siblings("ul").slideToggle(200);
});