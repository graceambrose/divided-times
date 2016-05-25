$(document).ready(function(){

  //target lis inside the primary nav
    $(document).on("click", "#primary-nav li", function(event) {
        event.preventDefault();

      //li we clicked on, anchor inside of it, href
        var contentTarget = $(this).find("a").attr("href");

        console.log(contentTarget);

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#slide-down").slideUp();
        } else {

          //make sure two tabs don't have the class of active at the same time
            $("#primary-nav li").removeClass("active");
            $(this).addClass("active");

            $(contentTarget).show().siblings().hide();

            $("#slide-down").slideDown();

        }


    });
});
