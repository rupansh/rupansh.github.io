$(document).ready(function() {
    function setAvail(holder, direc) {
        if (direc == 'up') {
            holder.removeClass('avail');
        } else {
            holder.addClass('avail');
        }
    }

    $(".skill").each((_, self) => {
        $(self).waypoint(function(direction) {
            setAvail($(self), direction)
        }, {offset: "100%"})
    });

    $(".project").each((_, self) => {
        $(self).waypoint(function(direction) {
            setAvail($(self), direction)
        }, {offset: "100%"})
    });

    $("#social").waypoint(function() {
        $({imW: 160.5}).animate({imW: 321}, {
            duration: 300,
            step: (now) => {
                $("#profile-pic").css({width: `${now}px`, height: `auto`, marginTop: '0px'});
                $("#social")[0].setCircle();
            }
        });

        this.destroy()
    }, {offset: "100%"})


    $(".sicon").each((_, self) => {
        let origWidth = $(self).width();
        let origHeight = $(self).height();
        let origPos = {top: 0, left: 0};
        let saved = false;
        let origFontSz = parseInt($(self).children().css("font-size").replace("px", ""));
        $(self).hover(
            () => {
                if (!saved) {
                    // weird af, no idea why it doesn't work if saved before hover
                    origPos.left = $(self).css("left");
                    origPos.top = $(self).css("top")
                    saved = true;
                }
                $("#social").stop().animate({marginBottom: "30rem"}, {duration: 400, easing: "swing"});
                $("#profile-pic").stop().animate({width: `${321/2}px`, height: `auto`, marginTop: `${321/4}px`},
                    {duration: 400, easing: "swing"});
                $(self).stop().animate({width: `${$(self).width() + (2*25)}px`, height: `${$(self).height() + (2*25)}px`, top: `${$(self).position().top - 25}px`, left: `${$(self).position().left - 25}px`},
                    {duration: 400, easing: "swing"});
                $(self).children().stop().animate({fontSize: `${origFontSz*1.5}px`},
                    {duration: 400, easing: "swing"});
            },
            () => {
                $("#social").stop().animate({marginBottom: "15rem"}, {duration: 400, easing: "swing"});
                $("#profile-pic").stop().animate({width: `${321}px`, height: `auto`, marginTop: '0px'},
                    {duration: 400, easing: "swing"});
                $(self).stop().animate({width: `${origWidth}px`, height: `${origHeight}px`, top: origPos.top, left: origPos.left},
                    {duration: 400, easing: "swing"});
                $(self).children().stop().animate({fontSize: `${origFontSz}px`},
                    {duration: 400, easing: "swing"});
            }
        )
    });
});