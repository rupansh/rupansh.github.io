$(document).ready(() => {
    // Navigation Setup
    (() => {
        let overActive = false;
        let animActive = false;

        async function reverseNav(injectFunc = async () => {}) {
            animActive = true;

            await $("#nav-toggle").fadeOut("fast").promise();
            await $(".overlay-nav").fadeOut("fast").promise();

            // "Navigation transition effect reversed"
            await $("#mOverlay").animate({ width: "0" }, duration=30, easing="linear").css({
                "display": "block",
                "z-index": 3
            }).promise();

            await $("#tCol").animate({ width: "0"}, duration=15, easing="linear").css({
                "background-color": "#fe53bb",
                "display": "block"
            }).promise();

            await $("#sCol").animate({ width: "0" }, duration=10, easing="linear").css({
                "background-color": "#f5d300",
                "display": "block"
            }).promise();

            injectFunc();

            await $("#fCol").animate({ width: "0" }, duration=5, easing="linear").css({
                "background-color": "#08f7fe",
                "display": "block"
            }).promise();

            await $("body").css("overflow", "visible").promise();
            await $(".temp").remove().promise(); // nuke temporary overlays

            await $("#nav-toggle").children().removeClass("fa-times").addClass("fa-bars").promise();
            await $("#nav-toggle").fadeIn("fast").promise();

            animActive = false;
        }

        $(".navbar-brand").click(async () => {
            await $('html, body').animate({ scrollTop: $("#main").offset().top }, duration=500,);
            window.location.hash = "#main";
        });

        $("#nav-toggle").click(async () => {
            if (!overActive) {
                // Temporary Overlays
                $('<div class="overlay temp" id="fCol"></div>').appendTo(document.body);
                $('<div class="overlay temp" id="sCol"></div>').appendTo(document.body);
                $('<div class="overlay temp" id="tCol"></div>').appendTo(document.body);

                await $("#nav-toggle").fadeOut("fast").promise();
                await $("body").css("overflow", "hidden").promise();

                // Navigation Transition Effect
                await $("#fCol").animate({ width: "100%" }, duration = 30, easing = "linear").css({
                    "background-color": "#fe53bb",
                    "display": "block"
                }).promise();

                await $("#sCol").animate({ width: "100%" }, duration = 15, easing = "linear").css({
                    "background-color": "#f5d300",
                    "display": "block"
                }).promise();

                await $("#tCol").animate({ width: "100%" }, duration = 10, easing = "linear").css({
                    "background-color": "#08f7fe",
                    "display": "block"
                }).promise();

                await $("#mOverlay").animate({ width: "100%" }, duration = 5, easing = "linear").css({
                    "display": "block",
                    "z-index": 3
                }).promise();

                await $(".overlay-nav").fadeIn("fast").promise();
                await $("#nav-toggle").children().removeClass("fa-bars").addClass("fa-times").promise(); // Change nav icon
                await $("#nav-toggle").fadeIn("fast").promise();

                overActive = true;
            } else {
                reverseNav();
                overActive = false;
            }
        });

        $(".overlay li").each((_, self) => {
            // Menu Items in Nav
            $(self).children().hover(
                () => {
                    $(self).stop().animate({ width: "60%" }).css({
                        "overflow": "visible",
                        backgroundColor: "#09fbd3"
                    });
                },
                () => {
                    $(self).stop().animate({ width: "0%" }).css({
                        "overflow": "visible",
                        backgroundColor: "#08f7fe"
                    });
                }
            );
        });

        $(".overlay-nav li").each((_, self) => {
            // Menu Item on click
            $(self).click(() => {
                if (!animActive) {
                    reverseNav(() => $(`${$(self).children().attr("rhref")}`)[0].scrollIntoView()); // Go to part of the page
                    overActive = false;
                }
            });
        });
    })();

    // Waypoints Setup
    (() => {
        function shuffleWords(holder) {
            const colorCombo = ["#08f7fe", "#09fbd3", "#fe53bb", "#fafafa"];
            const alphaNums = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let origCopy = [];

            // Randomly set each and every character along with its color of custom element
            let randText = (mindex, savecopy) => {
                $(holder).children().each(function (i) {
                    if (i > mindex) {
                        if (savecopy) {
                            origCopy[i] = $(this).text();
                        }
                        $(this).text(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
                        $(this).css("color", colorCombo[Math.floor(Math.random() * 4)]);
                    }
                });
            }

            randText(0, true)

            let time = 100;

            // Animate back to original "Welcome to my site"
            $(holder).children().each(function (i) {
                let obj = this;
                setTimeout(function () {
                    $(obj).text(origCopy[i]);
                    $(obj).css("color", "#f5d300");
                    randText(i, false);
                    if (i == origCopy.length - 1) {
                        holder.removeClass("block");
                    }
                }, time);
                time += 100;
            });
        }

        function setAvail(holder, direc) {
            if (direc == 'up') {
                holder.removeClass('avail');
            } else {
                holder.addClass('avail');
            }
        }

        $("#tran-1-txt").waypoint(() => {
            if (!$("#tran-1-txt").hasClass("block")) {
                $("#tran-1-txt").addClass("block");
                shuffleWords($("#tran-1-txt"));
            }
        }, { offset: "100%" });

        $(".skill").each((_, self) => {
            $(self).waypoint((direction) => setAvail($(self), direction), { offset: "100%" });
        });

        $(".project").each((_, self) => {
            $(self).waypoint((direction) => setAvail($(self), direction), { offset: "100%" });
        });

        $("#social").waypoint(() => {
            // Accumaltor object animated from 160.5 to 321
            $({ imW: 160.5 }).animate({ imW: 321 }, {
                duration: 300,
                step: (now) => {
                    $("#profile-pic").css({
                        width: `${now}px`,
                        height: `auto`,
                        marginTop: '0px'
                    }); // Profile pic size increased
                    $("#social")[0].setCircle(); // Social icons need recalculation once center is resized
                }
            });

            this.destroy();
        }, { offset: "100%" })
    })();

    // Social Icons Setup
    (() => {
        function setCircle() {
            let radius = 225;
            let fields = $('.sicon'),
                container = $('#social'),
                width = container.width(),
                height = container.height();
            let angle = 0,
                step = (2 * Math.PI) / fields.length;
            fields.each(function () {
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

        $(window).resize(setCircle); // resizes changes properties

        $(".sicon").each((_, self) => {
            let origWidth = $(self).width();
            let origHeight = $(self).height();
            let origPos = {
                top: 0,
                left: 0
            };
            let origPosC = $(self).position();
            let saved = false;
            let origFontSz = parseInt($(self).children().css("font-size").replace("px", ""));

            function siconInfo() {
                origWidth = $(self).width();
                origHeight = $(self).height();
                origPos = {
                    top: 0,
                    left: 0
                };
                origPosC = $(self).position();
                saved = false;
                origFontSz = parseInt($(self).children().css("font-size").replace("px", ""));
            }

            $(window).resize(siconInfo) // resize changes properties

            $(self).hover(
                () => {
                    if (!saved) {
                        // weird af, no idea why it doesn't work if saved before hover
                        origPos.left = $(self).css("left");
                        origPos.top = $(self).css("top");
                        origPosC = $(self).position();
                        saved = true;
                    }
                    $("#social").stop().animate({ marginBottom: "30rem" }, { duration: 400, easing: "swing" });

                    // Decrease Profile Size
                    $("#profile-pic").stop().animate({
                        width: `${321/2}px`,
                        height: `auto`,
                        marginTop: `${321/4}px`
                    }, { duration: 400, easing: "swing" });

                    // Increase Icon Container Size
                    $(self).stop().animate({
                        width: `${origWidth + (2*25)}px`,
                        height: `${origHeight + (2*25)}px`,
                        top: `${origPosC.top - 25}px`,
                        left: `${origPosC.left - 25}px`
                    }, { duration: 400, easing: "swing" });

                    // Increase Icon size
                    $(self).children().stop().animate({ fontSize: `${origFontSz*1.5}px` }, { duration: 400, easing: "swing" });
                },
                () => {
                    // Above but opposite

                    $("#social").stop().animate({ marginBottom: "30rem" }, { duration: 400, easing: "swing" });

                    $("#profile-pic").stop().animate({
                        width: '321px',
                        height: `auto`,
                        marginTop: '0px'
                    }, { duration: 400, easing: "swing" });

                    $(self).stop().animate({
                        width: `${origWidth}px`,
                        height: `${origHeight}px`,
                        top: origPos.top,
                        left: origPos.left
                    }, { duration: 400, easing: "swing" });

                    $(self).children().stop().animate({ fontSize: `${origFontSz}px` }, { duration: 400, easing: "swing" });
                }
            )
        });
    })();
});