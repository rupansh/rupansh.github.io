$(document).ready(() => {
    function setupNav() {
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
    }

    function setupShuffle() {
        const colorCombo = ["#08f7fe", "#09fbd3", "#fe53bb", "#fafafa"]
        const alphaNums = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        function shuffleWords(holder){
            let origCopy = []
        
            let randText = (mindex, savecopy) => {
                $(holder).children().each(function(i) {
                        if (i > mindex){
                            if (savecopy){
                                origCopy[i] = $(this).text();
                            }
                            $(this).text(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
                            $(this).css("color", colorCombo[Math.floor(Math.random()*4)]);
                        }
                });
            }
    
            randText(0, true)
    
            let time = 100;
    
            $(holder).children().each(function(i){
                let obj = this;
                setTimeout(function() { 
                    $(obj).text(origCopy[i]);
                    $(obj).css("color", "#f5d300");
                    randText(i, false);
                    if (i == origCopy.length-1){
                        holder.removeClass("block");
                    }
                }, time);
                time += 100;
            });
        }
        
        
        $("#tran-1-txt").waypoint(function() {
            if (!$("#tran-1-txt").hasClass("block")){
                $("#tran-1-txt").addClass("block");
                shuffleWords($("#tran-1-txt"));
            }
        }, {offset: "100%"});
    }

    function waypointsSetup() {
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
    }

    function socialSetup() {
        function setCircle(){
            var radius = 225; // adjust to move out items in and out 
            var fields = $('.sicon'),
              container = $('#social'),
              width = container.width(),
              height = container.height();
            var angle = 0,
              step = (2 * Math.PI) / fields.length;
            fields.each(function() {
              var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).outerWidth() / 2);
              var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).outerHeight() / 2);
              $(this).css({
                left: x + 'px',
                top: y + 'px'
              });
              angle += step;
            });
          }
      
          setCircle();
      
          $("#social")[0].setCircle = setCircle;
      
          $(window).resize(setCircle);
    }

    setupNav();
    setupShuffle();
    waypointsSetup();
    socialSetup();
});