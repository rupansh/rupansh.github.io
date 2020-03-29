$(document).ready(function() {
    let overActive = false;
    let animActive = false;

    function reverseNav(injectFunc=function(){ return }) {
        animActive = true;

        return $("#nav-toggle").fadeOut("fast").promise()
               .then(_ => $(".overlay-nav").fadeOut("fast").promise())
               .then(_ => $("#mOverlay").animate({width: "0"}).css({"display": "block", "z-index": 3}).promise())
               .then(_ => $("#tCol").animate({width: "0"}).css({"background-color": "#fe53bb", "display": "block"}).promise())
               .then(_ => $("#sCol").animate({width: "0"}).css({"background-color": "#f5d300", "display": "block"}).promise())
               .then(_ => injectFunc())
               .then(_ => $("#fCol").animate({width: "0"}).css({"background-color": "#08f7fe", "display": "block"}).promise())
               .then(_ => $("body").css("overflow", "visible").promise())
               .then(_ => $(".temp").remove().promise())
               .then(_ => $("#nav-toggle").children().removeClass("fa-times").addClass("fa-bars").promise())
               .then(_ => $("#nav-toggle").fadeIn("fast").promise())
               .then(_ => { animActive = false; });
    }

    $(".navbar-brand").click(() => {
        $('html, body').animate({
            scrollTop: $("#main").offset().top}, 500, () =>  window.location.hash = "#main" );
    });

    $("#nav-toggle").click(() => {
        if (!overActive){
            $('<div class="overlay temp" id="fCol"></div>').appendTo(document.body);
            $('<div class="overlay temp" id="sCol"></div>').appendTo(document.body);
            $('<div class="overlay temp" id="tCol"></div>').appendTo(document.body);

            $("#nav-toggle").fadeOut("fast").promise()
            .then(_ => $("body").css("overflow", "hidden").promise())
            .then(_ => $("#fCol").animate({width: "100%"}).css({"background-color": "#fe53bb", "display": "block"}).promise())
            .then(_ => $("#sCol").animate({width: "100%"}).css({"background-color": "#f5d300", "display": "block"}).promise())
            .then(_ => $("#tCol").animate({width: "100%"}).css({"background-color": "#08f7fe", "display": "block"}).promise())
            .then(_ => $("#mOverlay").animate({width: "100%"}).css({"display": "block", "z-index": 3}).promise())
            .then(_ => $(".overlay-nav").fadeIn("fast").promise())
            .then(_ => $("#nav-toggle").children().removeClass("fa-bars").addClass("fa-times").promise())
            .then(_ => $("#nav-toggle").fadeIn("fast").promise());

            overActive = true;
        } else {
            reverseNav();
            overActive = false;
        }
    });

    $(".overlay li").each((_, self) => {
        $(self).children().hover(
            () => { $(self).stop().animate({width: "60%"}).css({"overflow": "visible", backgroundColor: "#09fbd3"}); }, 
            () => { $(self).stop().animate({width: "0%"}).css({"overflow": "visible", backgroundColor: "#08f7fe"}); }
        );
    });

    $(".overlay-nav li").each((_, self) => {
        $(self).click(() => {
            if (!animActive){
                reverseNav(() => $(`${$(self).children().attr("rhref")}`)[0].scrollIntoView());
                overActive = false;
            }
        });
    });
});