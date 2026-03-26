!function(ee, u) {
    (Common.Page = this).setupOnce = function() {
        if (Common.trace("Page -> setupOnce"),
        Common.setLoadedInit(!1),
        ee(u, document, "html,body").scrollTop(0),
        ee("html,body").animate({
            scrollTop: 0
        }, "1"),
        Common.trace("PAGE is -> " + Common.pageName),
        settings.init(),
        "top" == Common.pageName)
            topPage.resizePosition(),
            topPage.init(),
            topPage.showContent();
        else {
            switch (Common.pageName) {
            case "news":
                newsPage.init();
                break;
            case "staffcast":
                staffcastPage.init();
                break;
            case "guideline":
                guidelinePage.init();
                break;
            case "introduction":
                introductionPage.init();
                break;
            case "character":
                characterPage.init(),
                characterPage.showContent();
                break;
            case "system":
                systemPage.init();
                break;
            case "event":
                eventPage.init();
                break;
            case "music":
                musicPage.init();
                break;
            case "404":
                notFoundPage.init(),
                notFoundPage.showContent();
                break;
            case "contact":
                contactPage.init();
                break;
            case "single":
                singlePage.init()
            }
            settings.showContent()
        }
    }
    ,
    this.yt = {
        player: null,
        is_player_ready: !1,
        player_state: 0,
        tag: null,
        firstScriptTag: null,
        is_player_active: !1,
        movieId: null,
        setYT: function() {
            Common.trace("Page -> setYT"),
            yt.tag = document.createElement("script"),
            yt.tag.src = "//www.youtube.com/player_api",
            yt.firstScriptTag = document.getElementsByTagName("script")[0],
            yt.firstScriptTag.parentNode.insertBefore(yt.tag, yt.firstScriptTag);
            u.onYouTubeIframeAPIReady = function() {
                Common.trace("Page -> onYouTubeIframeAPIReady"),
                yt.movieId = ee(".movie__frame").attr("data-id"),
                Common.trace("movie -> " + yt.movieId),
                yt.player = new YT.Player("ytPlayer",{
                    width: 1280,
                    height: 720,
                    videoId: yt.movieId,
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        loop: 1,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        start: 0,
                        mute: 1
                    },
                    events: {
                        onReady: yt.onPlayerReady,
                        onStateChange: yt.onPlayerStateChange
                    }
                })
            }
        },
        onPlayerReady: function(e) {
            Common.trace("Page -> onPlayerReady"),
            yt.player = e.target,
            yt.is_player_ready = !0,
            yt.player.mute(),
            yt.player.playVideo(),
            topPage.resizePosition(),
            Common.trace(yt.isCurrentMovie),
            yt.isCurrentMovie
        },
        onPlayerStateChange: function(e) {
            switch (Common.trace("status change -> " + e.data),
            yt.player_state = e.data,
            e.data) {
            case -1:
                break;
            case 0:
                yt.is_player_active || (yt.player.seekTo(0),
                yt.player.mute(),
                yt.player.playVideo())
            }
        }
    },
    this.settings = {
        IS_TRANSIT: !1,
        init: function() {
            if (Common.trace("settings -> init()"),
            "#transit" === location.hash && (settings.IS_TRANSIT = !0),
            ee(".header__ham a").on("click", function(e) {
                e.preventDefault(),
                settings.initMenu()
            }),
            ee(".header__menu__list a").on("click", function(e) {
                ee(this).hasClass("ancor") && settings.initMenu()
            }),
            "pc" == Common.LAYOUT_MODE) {
                let c = ee(".header__menu__list li").length;
                ee(".header__menu__list a").hover(function() {
                    var e = Number(ee(this).parent("li").attr("data-num"));
                    gsap.to(ee(this).parent("li"), 1, {
                        y: 0,
                        rotate: 0,
                        ease: "circ.out"
                    });
                    for (var t = 1; t < e; t++) {
                        var o = ".header__menu__list li:nth-child(" + t + ")"
                          , a = 45 + 5 * (e - t)
                          , n = settings.initRandRange(-5, 5);
                        gsap.to(o, 1, {
                            y: -a,
                            rotate: n,
                            ease: "circ.out"
                        })
                    }
                    for (var i = e + 1; i <= c; i++) {
                        var s = ".header__menu__list li:nth-child(" + i + ")"
                          , r = 45 + 5 * (i - e)
                          , l = settings.initRandRange(-5, 5);
                        gsap.to(s, 1, {
                            y: r,
                            rotate: l,
                            ease: "circ.out"
                        })
                    }
                }, function() {}),
                ee(".header__menu__list").hover(function() {}, function() {
                    gsap.to(".header__menu__list li", 1, {
                        y: 0,
                        ease: "circ.out"
                    })
                })
            }
        },
        IS_MENU_SHOWING: !1,
        initMenu: function() {
            settings.IS_MENU_SHOWING || (settings.IS_MENU_SHOWING = !0,
            ee("#header").hasClass("is--open") ? (ee("#header").removeClass("is--open"),
            ee(".header__menu__list").addClass("event--none"),
            settings.startScroll(),
            gsap.to(".header__menu", .4, {
                opacity: 0,
                ease: "power2.out",
                onComplete: function() {
                    ee(".header__menu__list").removeClass("event--none"),
                    ee(".header__menu").removeAttr("style").hide(),
                    gsap.to(".header__bg", .4, {
                        scaleX: 0,
                        skewX: 20,
                        ease: "circ.inOut",
                        onComplete: function() {
                            settings.IS_MENU_SHOWING = !1
                        }
                    })
                }
            })) : (ee("#header").addClass("is--open"),
            settings.stopScroll(),
            gsap.fromTo(".header__bg", .6, {
                scaleX: 0,
                skewX: 20
            }, {
                scaleX: 1,
                skewX: 0,
                ease: "circ.inOut",
                onComplete: function() {
                    ee(".header__menu").show(),
                    ee(".header__menu__list").addClass("event--none"),
                    Common.setSuffleText(".header__menu__title", 800);
                    for (var e = ee(".header__menu__items p").length, t = 1; t <= e; t++) {
                        var o = ".header__menu__items p:nth-child(" + t + ")"
                          , a = Math.floor(5 * Math.random()) / 10 + .3;
                        gsap.fromTo(o, .6, {
                            opacity: 0,
                            y: 50
                        }, {
                            delay: a,
                            opacity: 1,
                            y: 0,
                            ease: "circ.out"
                        })
                    }
                    for (var n = ee(".header__menu__list li").length, i = 1; i <= n; i++) {
                        var s = ".header__menu__list li:nth-child(" + i + ")"
                          , r = settings.initRandRange(-300, 300)
                          , l = settings.initRandRange(-100, 100)
                          , c = settings.initRandRange(-20, 20)
                          , m = Math.floor(3 * Math.random()) / 10;
                        gsap.fromTo(s, .2, {
                            opacity: 0
                        }, {
                            delay: m,
                            opacity: 1,
                            ease: "circ.out"
                        }),
                        gsap.fromTo(s, 1, {
                            x: r,
                            y: l,
                            rotate: c
                        }, {
                            delay: m,
                            x: 0,
                            y: 0,
                            rotate: 0,
                            ease: "circ.out"
                        })
                    }
                    gsap.fromTo(".header__menu__logo, .header__menu__text", .4, {
                        opacity: 0,
                        y: 30
                    }, {
                        delay: .8,
                        opacity: 1,
                        y: 0,
                        ease: "circ.out",
                        onComplete: function() {
                            ee(".header__menu__list").removeClass("event--none"),
                            settings.IS_MENU_SHOWING = !1
                        }
                    })
                }
            })))
        },
        initRandRange: function(e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e)
        },
        showItems: function() {
            for (var e = ee(".items p").length, t = 1; t <= e; t++) {
                var o = ".items p:nth-child(" + t + ")"
                  , a = 1 + Math.floor(5 * Math.random()) / 10;
                gsap.fromTo(o, .6, {
                    opacity: 0,
                    y: 50
                }, {
                    delay: a,
                    opacity: 1,
                    y: 0,
                    ease: "circ.out"
                })
            }
        },
        hidePage: function(e) {
            Common.trace("Common hidePage");
            var t = e;
            function o() {
                u.location = t.attr("href")
            }
            "_blank" != t.attr("target") && (Common.$blind.show(),
            "pc" == Common.LAYOUT_MODE ? (gsap.fromTo(Common.$blind.find(".bg--3"), .6, {
                scaleX: 0
            }, {
                delay: 0,
                scaleX: 1,
                ease: "power3.inOut"
            }),
            gsap.fromTo(Common.$blind.find(".bg--2"), .6, {
                scaleX: 0
            }, {
                delay: .05,
                scaleX: 1,
                ease: "power3.inOut"
            }),
            gsap.fromTo(Common.$blind.find(".bg--1"), .6, {
                scaleX: 0
            }, {
                delay: .1,
                scaleX: 1,
                ease: "power3.inOut",
                onComplete: o
            })) : (gsap.fromTo(Common.$blind.find(".bg--3"), .6, {
                scaleY: 0
            }, {
                delay: 0,
                scaleY: 1,
                ease: "power3.inOut"
            }),
            gsap.fromTo(Common.$blind.find(".bg--2"), .6, {
                scaleY: 0
            }, {
                delay: .1,
                scaleY: 1,
                ease: "power3.inOut"
            }),
            gsap.fromTo(Common.$blind.find(".bg--1"), .6, {
                scaleY: 0
            }, {
                delay: .2,
                scaleY: 1,
                ease: "power3.inOut",
                onComplete: o
            })))
        },
        showContent: function() {
            var e;
            function t() {
                Common.$blind.removeAttr("style").hide(),
                0 < ee(".headline").length && (ee(".title--name").show(),
                Common.setSuffleText(".title--name", 800),
                ee(".headline__text, .headline__icon").show(),
                gsap.fromTo(".headline__text, .headline__icon", .4, {
                    opacity: 0,
                    y: 10
                }, {
                    delay: .8,
                    opacity: 1,
                    y: 0,
                    ease: "circ.out"
                }))
            }
            Common.trace("settings -> showContent()"),
            ee(".title--name").text(ee(".title--spacer").text()).hide(),
            ee(".headline__text, .headline__icon").hide(),
            Common.$body.css({
                overflow: "visible"
            }),
            ee(u, document, "html,body").scrollTop(0),
            ee("html,body").animate({
                scrollTop: 0
            }, "1"),
            "pc" == Common.LAYOUT_MODE && settings.setSmoothScroll(),
            settings.IS_TRANSIT ? (location.hash.substr(1),
            history.replaceState("", document.title, u.location.pathname),
            t()) : (e = .6,
            "pc" == Common.LAYOUT_MODE ? (gsap.fromTo(Common.$blind.find(".bg--1"), e, {
                scaleX: 1
            }, {
                delay: 0,
                scaleX: 0,
                ease: "power3.inOut"
            }),
            gsap.fromTo(Common.$blind.find(".bg--2"), e, {
                scaleX: 1
            }, {
                delay: .05,
                scaleX: 0,
                ease: "power3.inOut"
            }),
            gsap.fromTo(Common.$blind.find(".bg--3"), e, {
                scaleX: 1
            }, {
                delay: .1,
                scaleX: 0,
                ease: "power3.inOut",
                onComplete: t
            })) : (gsap.fromTo(Common.$blind.find(".bg--1"), e, {
                scaleY: 1
            }, {
                delay: 0,
                scaleY: 0,
                ease: "power3.inOut"
            }),
            gsap.fromTo(Common.$blind.find(".bg--2"), e, {
                scaleY: 1
            }, {
                delay: .05,
                scaleY: 0,
                ease: "power3.inOut"
            }),
            gsap.fromTo(Common.$blind.find(".bg--3"), e, {
                scaleY: 1
            }, {
                delay: .1,
                scaleY: 0,
                ease: "power3.inOut",
                onComplete: t
            })))
        },
        resizePosition: function() {
            if ("character" == Common.pageName && "pc" == Common.LAYOUT_MODE) {
                let e = (Common.Window.width / 1920).toFixed(3);
                1 <= e && (e = 1),
                ee("#detailDevice").css({
                    scale: e,
                    x: "-50%"
                })
            }
        },
        scrollEvents: function() {
            var e = ee("#footer").offset().top;
            Common.ScrollEvent.scroll_btm >= e ? ee(".footer__frame, .header__sideNav").addClass("is--limit") : ee(".footer__frame, .header__sideNav").removeClass("is--limit")
        },
        stopScrollHandle: function(e) {
            e.preventDefault()
        },
        stopScroll: function() {
            document.addEventListener("touchmove", settings.stopScrollHandle, {
                passive: !1
            }),
            document.addEventListener("mousewheel", settings.stopScrollHandle, {
                passive: !1
            })
        },
        startScroll: function() {
            document.removeEventListener("touchmove", settings.stopScrollHandle, {
                passive: !1
            }),
            document.removeEventListener("mousewheel", settings.stopScrollHandle, {
                passive: !1
            })
        },
        setEffectObjects: function(e, t, o, a) {
            var n, i, s, r = e, e = t, l = Number(o), c = Number(a);
            switch (e) {
            case "fade":
                s = r,
                gsap.fromTo(s, c, {
                    opacity: 0,
                    y: 0
                }, {
                    delay: l,
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    onComplete: function() {
                        ee(s).removeAttr("style"),
                        s = null
                    }
                });
                break;
            case "slideFade":
                i = r,
                gsap.fromTo(i, c, {
                    opacity: 0,
                    y: 100
                }, {
                    delay: l,
                    opacity: 1,
                    y: 0,
                    ease: "circ.out",
                    onComplete: function() {
                        ee(i).removeAttr("style"),
                        i = null
                    }
                });
                break;
            case "rotationSlide":
                n = r,
                y = l,
                m = c,
                p = settings.initRandRange(-400, 400),
                d = settings.initRandRange(-100, 100),
                g = settings.initRandRange(-10, 10),
                m = Number(m),
                gsap.fromTo(n, m / 2, {
                    opacity: 0
                }, {
                    delay: y,
                    opacity: 1,
                    ease: "power2.out"
                }),
                gsap.fromTo(n, m, {
                    x: p,
                    y: d,
                    rotate: g
                }, {
                    delay: y,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    ease: "circ.out",
                    onComplete: function() {
                        ee(n).removeAttr("style"),
                        n = null
                    }
                });
                break;
            case "shuffle":
                var m = r
                  , p = c;
                p = 1e3 * Number(c),
                ee(m).removeAttr("style"),
                Common.setSuffleText(m, p);
                break;
            case "newsList":
                for (var d = r, Y = ee(".news__content__list li").length, U = (ee(d).removeAttr("style"),
                "pc" == Common.LAYOUT_MODE ? 0 : .5), _ = 1; _ <= Y; _++) {
                    let e = ".news__content__list li:nth-child(" + _ + ")"
                      , t = ee(e).find(".list--date")
                      , o = ee(e).find(".list--date i");
                    t.css({
                        opacity: 0
                    }),
                    gsap.fromTo(e, .4, {
                        opacity: 0
                    }, {
                        delay: U + .1 * _,
                        opacity: 1,
                        ease: "power2.out",
                        onComplete: function() {
                            t.removeAttr("style"),
                            Common.setSuffleText(o, 2e3)
                        }
                    })
                }
                for (var I = ee(".news__content__items p").length, u = 1; u <= I; u++) {
                    var W = ee(".news__content__items p:nth-child(" + u + ")");
                    gsap.fromTo(W, 1, {
                        opacity: 0,
                        y: 100
                    }, {
                        delay: 1 + .1 * u,
                        opacity: 1,
                        y: 0,
                        ease: "circ.out"
                    })
                }
                break;
            case "introContent":
                {
                    var g = r;
                    let e = ee(g).find(".introduction__content .content--title"), t, o, a = ee(g).find(".introduction__content .content--items p").length;
                    o = "pc" == Common.LAYOUT_MODE ? (t = ee(g).find(".introduction__content .pc--only .block--wrap"),
                    ee(g).find(".introduction__content .pc--only .block--cover")) : (t = ee(g).find(".introduction__content .sp--only .block--wrap"),
                    ee(g).find(".introduction__content .sp--only .block--cover"));
                    ee(g).removeAttr("style"),
                    ee(".introduction__content").removeAttr("style"),
                    gsap.fromTo(e, .6, {
                        opacity: 0,
                        y: 100
                    }, {
                        delay: 0,
                        opacity: 1,
                        y: 0,
                        ease: "circ.out"
                    }),
                    gsap.fromTo(t, .6, {
                        scaleX: 0
                    }, {
                        delay: .6,
                        scaleX: 1,
                        ease: "circ.inOut",
                        onComplete: function() {
                            t.removeAttr("style"),
                            gsap.fromTo(o, .6, {
                                scaleX: 1
                            }, {
                                delay: 0,
                                scaleX: 0,
                                y: 0,
                                ease: "circ.inOut"
                            })
                        }
                    });
                    for (var f = 1; f <= a; f++) {
                        var h = ee(".introduction__content .content--items p:nth-child(" + f + ")");
                        "pc" != Common.LAYOUT_MODE && h.hasClass("exclude--sp") || gsap.fromTo(h, 1, {
                            opacity: 0,
                            y: 100
                        }, {
                            delay: 1 + .15 * f,
                            opacity: 1,
                            y: 0,
                            ease: "circ.out"
                        })
                    }
                }
                break;
            case "introPlane":
                {
                    var y = r;
                    let e = ee(y).find(".introduction__plane .plane--wrapper"), t, o, a;
                    a = "pc" == Common.LAYOUT_MODE ? (t = ee(y).find(".introduction__plane .plane--items p").length,
                    1.6) : (t = ee(y).find(".introduction__plane .plane--wrapper li").length,
                    0);
                    ee(y).removeAttr("style"),
                    ee(".introduction__plane .plane--wrapper, .introduction__plane .plane--items").removeAttr("style"),
                    gsap.fromTo(e, 1.6, {
                        opacity: 0,
                        x: 500
                    }, {
                        delay: 0,
                        opacity: 1,
                        x: 0,
                        ease: "circ.out"
                    });
                    for (var C = 1; C <= t; C++)
                        o = "pc" == Common.LAYOUT_MODE ? ee(".introduction__plane .plane--items p:nth-child(" + C + ")") : ee(".introduction__plane .plane--wrapper li:nth-of-type(" + C + ")"),
                        gsap.fromTo(o, 1, {
                            opacity: 0,
                            y: 100
                        }, {
                            delay: a + .2 * C,
                            opacity: 1,
                            y: 0,
                            ease: "circ.out"
                        })
                }
                break;
            case "members":
                var v = r
                  , T = (Common.trace("SHOW MEMBERS"),
                ee(v).find(".members__items"))
                  , X = T.find("p").length;
                ee(v).removeAttr("style"),
                ee(".members__block.is--current, .members__nav, .members__items").removeAttr("style"),
                gsap.fromTo(".members__block.is--current", .6, {
                    opacity: 0,
                    y: 50
                }, {
                    delay: .5,
                    opacity: 1,
                    y: 0,
                    ease: "power3.out"
                }),
                gsap.fromTo(".members__nav", .6, {
                    opacity: 0,
                    y: 50
                }, {
                    delay: .5,
                    opacity: 1,
                    y: 0,
                    ease: "power3.out"
                });
                for (var w = 1; w <= X; w++) {
                    var H = T.find("p:nth-child(" + w + ")");
                    gsap.fromTo(H, 1, {
                        opacity: 0,
                        y: 100
                    }, {
                        delay: 1 + .2 * w,
                        opacity: 1,
                        y: 0,
                        ease: "circ.out"
                    })
                }
                break;
            case "movie":
                var v = r
                  , b = ee(v).find(".movie__cover")
                  , O = ee(v).find(".movie__tickets")
                  , S = ee(v).find(".movie__items")
                  , k = ee(v).find(".movie__frame")
                  , z = O.find("p").length
                  , B = S.find("p").length;
                ee(v).removeAttr("style"),
                ee(".movie__tickets, .movie__cover, .movie__frame, .movie__items").removeAttr("style");
                for (var x = 1; x <= z; x++) {
                    var E = O.find("p:nth-child(" + x + ") span")
                      , F = "pc" == Common.LAYOUT_MODE ? settings.initRandRange(-20, 20) : 0
                      , G = "pc" == Common.LAYOUT_MODE ? settings.initRandRange(-500, 500) : 0
                      , $ = settings.initRandRange(-300, 300);
                    gsap.fromTo(E, .2, {
                        opacity: 0
                    }, {
                        delay: .1 * x,
                        opacity: 1,
                        ease: "power2.out"
                    }),
                    gsap.fromTo(E, 1, {
                        x: G,
                        y: $,
                        rotate: F
                    }, {
                        delay: .1 * x,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        ease: "circ.out"
                    })
                }
                gsap.fromTo(b, .6, {
                    opacity: 0
                }, {
                    delay: 1,
                    opacity: 1,
                    ease: "power2.out"
                });
                for (var A = 1; A <= B; A++) {
                    var j = S.find("p:nth-child(" + A + ")");
                    gsap.fromTo(j, 1, {
                        opacity: 0,
                        y: 100
                    }, {
                        delay: 1 + .2 * A,
                        opacity: 1,
                        y: 0,
                        ease: "circ.out"
                    })
                }
                gsap.fromTo(k, .6, {
                    opacity: 0
                }, {
                    delay: 1,
                    opacity: 1,
                    ease: "power2.out"
                });
                break;
            case "link":
                var b = r
                  , P = ee(b).find(".link__list")
                  , M = ee(b).find(".link__items")
                  , K = P.find("p").length
                  , V = M.find("p").length;
                ee(b).removeAttr("style"),
                ee(".link__list, .link__items").removeAttr("style");
                for (var D = 1; D <= K; D++) {
                    var L = P.find("p:nth-child(" + D + ")")
                      , q = settings.initRandRange(-20, 20)
                      , Q = settings.initRandRange(-300, 300)
                      , J = settings.initRandRange(-50, 50);
                    gsap.fromTo(L, .2, {
                        opacity: 0
                    }, {
                        delay: .1 * D,
                        opacity: 1,
                        ease: "power2.out"
                    }),
                    gsap.fromTo(L, 1, {
                        x: Q,
                        y: J,
                        rotate: q
                    }, {
                        delay: .1 * D,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        ease: "circ.out"
                    })
                }
                for (var R = 1; R <= V; R++) {
                    var Z = M.find("p:nth-child(" + R + ")");
                    gsap.fromTo(Z, 1, {
                        opacity: 0,
                        y: 100
                    }, {
                        delay: 1 + .2 * R,
                        opacity: 1,
                        y: 0,
                        ease: "circ.out"
                    })
                }
                break;
            case "introPageContent":
                {
                    k = r;
                    var N = l;
                    let e = ee(k).find(".content--head")
                      , t = ee(k).find(".block--wrap")
                      , o = ee(k).find(".block--cover");
                    ee(k).removeAttr("style"),
                    gsap.fromTo(e, .6, {
                        opacity: 0,
                        y: 100
                    }, {
                        delay: N,
                        opacity: 1,
                        y: 0,
                        ease: "circ.out"
                    }),
                    gsap.fromTo(t, .6, {
                        scaleX: 0
                    }, {
                        delay: N + .6,
                        scaleX: 1,
                        ease: "circ.inOut",
                        onComplete: function() {
                            t.removeAttr("style"),
                            gsap.fromTo(o, .6, {
                                scaleX: 1
                            }, {
                                delay: 0,
                                scaleX: 0,
                                y: 0,
                                ease: "circ.inOut"
                            })
                        }
                    })
                }
            }
        },
        setSmoothScroll: function() {
            const o = new Lenis;
            requestAnimationFrame(function e(t) {
                o.raf(t),
                requestAnimationFrame(e)
            })
        }
    },
    this.topPage = {
        v: null,
        IS_SKIP: !1,
        init: function() {
            Common.trace("TOP -> init()"),
            ee(".introduction__content").css({
                opacity: 0
            }),
            ee(".introduction__plane .plane--wrapper, .introduction__plane .plane--items").css({
                opacity: 0
            }),
            ee(".character__tickets, .character__cover, .character__vacant, .character__items").css({
                opacity: 0
            }),
            ee(".members__block.is--current, .members__nav, .members__items").css({
                opacity: 0
            }),
            ee(".movie__tickets, .movie__cover, .movie__vacant, .movie__items").css({
                opacity: 0
            }),
            ee(".link__list, .link__items").css({
                opacity: 0
            }),
            "pc" == Common.LAYOUT_MODE ? ee(".header__ham").addClass("is--show") : ee(".header__ham").addClass("is--show color--black"),
            Common.ScrollEvent.setParallaxObjects();
            let t = ".visual__board__icons"
              , e = ee(t).find("p")
              , o = e.innerWidth();
            for (var a = 0; a < 2; a++)
                e.clone(!0, !0).appendTo(t);
            !function e() {
                gsap.fromTo(t, 25, {
                    x: 0
                }, {
                    x: -o,
                    ease: "none",
                    onComplete: function() {
                        ee(t).removeAttr("style"),
                        e()
                    }
                })
            }();
            let n = ".introduction__headline .headline--title"
              , i = ee(n).find("span")
              , s = i.innerWidth();
            i.clone(!1, !1).appendTo(n),
            function e() {
                gsap.fromTo(n, 20, {
                    x: 0
                }, {
                    x: -s,
                    ease: "none",
                    onComplete: function() {
                        ee(n).removeAttr("style"),
                        e()
                    }
                })
            }();
            let r = ee(".link__textTop span"), l = ee(".link__textBottom span"), c, m = r.innerWidth(), p = l.innerWidth();
            "sp" == Common.LAYOUT_MODE && (c = ee(".link__textBottomSp span"));
            for (var d = 0; d < 4; d++)
                r.clone(!1, !1).appendTo(".link__textTop"),
                l.clone(!1, !1).appendTo(".link__textBottom"),
                "sp" == Common.LAYOUT_MODE && c.clone(!1, !1).appendTo(".link__textBottomSp");
            !function e() {
                gsap.fromTo(".link__textTop", 10, {
                    x: -m
                }, {
                    x: 0,
                    ease: "none"
                }),
                gsap.fromTo(".link__textBottom", 10, {
                    x: 0
                }, {
                    x: -p,
                    ease: "none",
                    onComplete: function() {
                        ee(".link__textTop, .link__textBottom").removeAttr("style"),
                        "sp" == Common.LAYOUT_MODE && ee(".link__textBottomSp").removeAttr("style"),
                        e()
                    }
                }),
                "sp" == Common.LAYOUT_MODE && gsap.fromTo(".link__textBottomSp", 10, {
                    x: -m
                }, {
                    x: 0,
                    ease: "none"
                })
            }();
            const _ = new Date;
            var u = _.getFullYear() + "." + (_.getMonth() + 1).toString().padStart(2, "0") + "." + _.getDate().toString().padStart(2, "0") + " (" + ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][_.getDay()] + ")";
            Common.trace("TODAY -> " + u),
            ee(".visual__board__icons .icons--today").html(u);
            {
                let e = new XMLHttpRequest;
                e.onreadystatechange = function() {
                    if (4 == e.readyState && 200 == e.status) {
                        var o = JSON.parse(e.responseText);
                        o.length;
                        {
                            let l = o, e = (!function e() {
                                var t = new Date
                                  , o = t.getHours()
                                  , t = t.getMinutes()
                                  , a = o.toString().padStart(2, "0")
                                  , t = t.toString().padStart(2, "0");
                                Common.trace("GET TIME -> " + a + ":" + t),
                                ee(".icons--gettime__hours").html(a),
                                ee(".icons--gettime__minutes").html(t);
                                let n = Number(l[0].timeSeries[2].areas[0].temps[0]), i = Number(l[0].timeSeries[2].areas[0].temps[1]), s = ((i - n) / 12).toFixed(1), r;
                                0 <= o && o < 13 ? r = (n + s * o).toFixed(1) : 13 <= o && o < 23 && (r = (i - s * (o - 12)).toFixed(1)),
                                Common.trace("GET HIGH & LOW TEMP -> " + i + " - " + n),
                                Common.trace("GET CURRENT TEMP -> " + r + " | HOUR TEMP -> " + s),
                                ee(".visual__board__icons .icons--temp i").html(r),
                                gsap.to(".icons--gettime", 10, {
                                    opacity: 1,
                                    ease: "none",
                                    onComplete: e
                                })
                            }(),
                            Number(l[0].timeSeries[0].areas[0].weatherCodes[0])), t;
                            Common.trace("GET WEATHER CODE -> " + e),
                            t = 100 <= e && e < 200 ? "☀" : 200 <= e && e < 300 ? "☁" : 300 <= e && e < 400 ? "☂" : 400 <= e && e < 500 ? "☃" : "☀",
                            ee(".visual__board__icons .icons--weather").html(t)
                        }
                    }
                }
                ,
                u = "/hama.json?q=" + _.getTime(),
                Common.trace("JSON PATH -> " + u),
                e.open("GET", u, !1),
                e.send(null)
            }
            let g, f, h, y;
            function C() {
                g = ".members__block.is--current",
                h = !1,
                "0" === ee(g).attr("data-count") ? (f = ee(g).find("li").length,
                y = ee(g).find("ul").html(),
                ee(y).appendTo(g + " ul"),
                ee(g).attr("data-count", "1")) : f = ee(g).find("li").length / 2
            }
            function v() {
                var e = f + 1
                  , e = (Common.trace("CENTER NUMBER -> " + e),
                h = !1,
                ee(g).find("li").removeAttr("style").removeClass("pos--nextleft pos--left pos--center pos--right pos--nextright"),
                ee(g + " li:nth-of-type(" + (e - 2) + ")").addClass("pos--nextleft"),
                ee(g + " li:nth-of-type(" + (e - 1) + ")").addClass("pos--left"),
                ee(g + " li:nth-of-type(" + e + ")").addClass("pos--center"),
                ee(g + " li:nth-of-type(" + (e + 1) + ")").addClass("pos--right"),
                ee(g + " li:nth-of-type(" + (e + 2) + ")").addClass("pos--nextright"),
                ee(g).find(".pos--center").attr("data-num"));
                ee(g).find(".members__block__paging span").removeClass("is--current"),
                ee(g).find(".members__block__paging span:nth-of-type(" + e + ")").addClass("is--current")
            }
            C(),
            v(),
            ee(".members__block__next, .members__block__prev").on("click", function(s) {
                if (s.preventDefault(),
                !h) {
                    h = !0,
                    Common.autoScroll("#members", .6, 0, 0, "easeInOutQuart");
                    let e = ee(this).parents(".members__block")
                      , t = e.find(".pos--left")
                      , o = e.find(".pos--center")
                      , a = e.find(".pos--right")
                      , n = e.find(".pos--nextleft")
                      , i = e.find(".pos--nextright");
                    var r, l;
                    "next" == ee(this).attr("data-dir") ? (s = "pc" == Common.LAYOUT_MODE ? "-110%" : "-200%",
                    r = "pc" == Common.LAYOUT_MODE ? "-55%" : "-105%",
                    Common.LAYOUT_MODE,
                    l = "pc" == Common.LAYOUT_MODE ? "55%" : "105%",
                    gsap.to(t, .8, {
                        marginLeft: s,
                        scale: .6,
                        ease: "power3.inOut"
                    }),
                    gsap.to(t.find("span"), .5, {
                        rotate: -8,
                        ease: "power2.inOut"
                    }),
                    gsap.to(t.find("span"), .3, {
                        delay: .5,
                        rotate: 0,
                        ease: "power2.out"
                    }),
                    gsap.to(o, .8, {
                        marginLeft: r,
                        scale: .8,
                        ease: "power3.inOut"
                    }),
                    gsap.to(o.find("span"), .5, {
                        rotate: -8,
                        ease: "power2.inOut"
                    }),
                    gsap.to(o.find("span"), .3, {
                        delay: .5,
                        rotate: 0,
                        ease: "power2.out"
                    }),
                    gsap.to(a, .8, {
                        marginLeft: "0%",
                        scale: 1,
                        ease: "power3.inOut"
                    }),
                    gsap.to(a.find("span"), .5, {
                        rotate: -8,
                        ease: "power2.inOut"
                    }),
                    gsap.to(a.find("span"), .3, {
                        delay: .5,
                        rotate: 0,
                        ease: "power2.out"
                    }),
                    gsap.to(i.find("span"), .5, {
                        rotate: -8,
                        ease: "power2.inOut"
                    }),
                    gsap.to(i.find("span"), .3, {
                        delay: .5,
                        rotate: 0,
                        ease: "power2.out"
                    }),
                    gsap.to(i, .8, {
                        marginLeft: l,
                        scale: .8,
                        ease: "power3.inOut",
                        onComplete: function() {
                            e.find("ul").append(e.find("li:first-of-type")),
                            v()
                        }
                    })) : (Common.LAYOUT_MODE,
                    s = "pc" == Common.LAYOUT_MODE ? "55%" : "105%",
                    r = "pc" == Common.LAYOUT_MODE ? "110%" : "200%",
                    l = "pc" == Common.LAYOUT_MODE ? "-55%" : "-105%",
                    gsap.to(t, .8, {
                        marginLeft: "0%",
                        scale: 1,
                        ease: "power3.inOut"
                    }),
                    gsap.to(t.find("span"), .5, {
                        rotate: 8,
                        ease: "power2.inOut"
                    }),
                    gsap.to(t.find("span"), .3, {
                        delay: .5,
                        rotate: 0,
                        ease: "power2.out"
                    }),
                    gsap.to(o, .8, {
                        marginLeft: s,
                        scale: .8,
                        ease: "power3.inOut"
                    }),
                    gsap.to(o.find("span"), .5, {
                        rotate: 8,
                        ease: "power2.inOut"
                    }),
                    gsap.to(o.find("span"), .3, {
                        delay: .5,
                        rotate: 0,
                        ease: "power2.out"
                    }),
                    gsap.to(a, .8, {
                        marginLeft: r,
                        scale: .6,
                        ease: "power3.inOut"
                    }),
                    gsap.to(a.find("span"), .5, {
                        rotate: 8,
                        ease: "power2.inOut"
                    }),
                    gsap.to(a.find("span"), .3, {
                        delay: .5,
                        rotate: 0,
                        ease: "power2.out"
                    }),
                    gsap.to(n.find("span"), .5, {
                        rotate: 8,
                        ease: "power2.inOut"
                    }),
                    gsap.to(n.find("span"), .3, {
                        delay: .5,
                        rotate: 0,
                        ease: "power2.out"
                    }),
                    gsap.to(n, .8, {
                        marginLeft: l,
                        scale: .8,
                        ease: "power3.inOut",
                        onComplete: function() {
                            e.find("ul").prepend(e.find("li:last-of-type")),
                            v()
                        }
                    }))
                }
            }),
            ee(".members__nav a").on("click", function(t) {
                if (t.preventDefault(),
                !h) {
                    h = !0,
                    Common.autoScroll("#members", .6, 0, 0, "easeInOutQuart"),
                    ee(".members__nav li").removeClass("is--current"),
                    ee(this).parent("li").addClass("is--current");
                    let e = "." + ee(this).attr("href").substr(1);
                    t = ee(this).attr("data-color");
                    gsap.to(".members__bg", .6, {
                        backgroundColor: t,
                        ease: "power2.inOut"
                    }),
                    gsap.to(g, .6, {
                        y: 50,
                        opacity: 0,
                        ease: "power2.inOut",
                        onComplete: function() {
                            ee(g).removeAttr("style").removeClass("is--current"),
                            Common.trace("TARGET TEAM -> " + e),
                            ee(e).addClass("is--current"),
                            C(),
                            v(),
                            gsap.fromTo(e, .6, {
                                opacity: 0,
                                y: 50
                            }, {
                                y: 0,
                                opacity: 1,
                                ease: "power2.inOut"
                            })
                        }
                    })
                }
            });
            u = ee(".movie__frame").attr("data-id") + "?autoplay=1";
            ee(".movie__frame .modal--movie").attr("data-id", u),
            yt.setYT()
        },
        setIntroScrollTrigger: function() {
            var e = document.querySelector(".introduction__inner")
              , t = (document.querySelector(".plane--wrapper"),
            gsap.utils.toArray(".plane--window"))
              , o = ee(".plane--window").width() * ee(".plane--window").length + (Number(ee(".window--1").css("margin-left").slice(0, -2)) + (Number(ee(".window--2").css("margin-left").slice(0, -2)) + Number(ee(".window--2").css("margin-right").slice(0, -2))) + (Number(ee(".window--3").css("margin-left").slice(0, -2)) + Number(ee(".window--3").css("margin-right").slice(0, -2))) + Number(ee(".window--4").css("margin-right").slice(0, -2)))
              , a = "pc" == Common.LAYOUT_MODE ? -130 : -119;
            ee(".plane--wrapper").css({
                width: o
            }),
            Common.trace("INTRO WRAP WIDTH: " + o),
            gsap.to(t, {
                xPercent: a * (t.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: e,
                    pin: !0,
                    scrub: 0,
                    start: "top top",
                    end: "+=" + o,
                    anticipatePin: 1,
                    invalidateOnRefresh: !0
                }
            })
        },
        showContent: function() {
            Common.trace("TOP -> showContent()"),
            Common.$blind.hide(),
            Common.$body.css({
                overflow: "visible"
            }),
            ee(u, document, "html,body").scrollTop(0),
            ee("html,body").animate({
                scrollTop: 0
            }, "1"),
            settings.stopScroll(),
            Common.trace("COOKIE ->" + ee.cookie("loading")),
            1 != ee.cookie("loading") ? (topPage.IS_SKIP = !1,
            (e = new Date).setTime(e.getTime() + 36e5),
            ee.cookie("loading", "1", {
                path: "/",
                expires: e
            })) : topPage.IS_SKIP = !0,
            Common.trace("IS SKIP -> " + topPage.IS_SKIP);
            var e = Common.URL_QUERY.debug;
            function o() {
                Common.trace("FINISHED COUNT DOWN");
                ee(".cassette--leftGear, .cassette--rightGear").removeClass("is--animate"),
                gsap.to(".loader__cassette .cassette--bg", 1, {
                    delay: 0,
                    fill: "#323232",
                    ease: "power2.out"
                }),
                gsap.to(".loader__cassette .cassette--leftGear, .loader__cassette .cassette--rightGear", 1, {
                    delay: 0,
                    fill: "#323232",
                    ease: "power2.out"
                }),
                gsap.to(".loader__cassette .cassette--line", 1, {
                    delay: 0,
                    fill: "#C8FF46",
                    ease: "power2.out"
                });
                var e = "pc" == Common.LAYOUT_MODE ? 30 : 10
                  , t = (ee(".loader__finished").show(),
                gsap.fromTo(".loader__timer", .5, {
                    y: 0
                }, {
                    delay: 0,
                    y: -e,
                    opacity: 0,
                    ease: "circ.out"
                }),
                gsap.fromTo(".loader__finished", .5, {
                    y: e,
                    opacity: 0
                }, {
                    delay: 0,
                    y: 0,
                    opacity: 1,
                    ease: "circ.out"
                }),
                ee(".loader__items").length);
                ee(".loader__items").show();
                for (var o = 1; o <= t; o++) {
                    var a = ".loader__items.items--" + o
                      , n = settings.initRandRange(1, 5) / 10
                      , i = settings.initRandRange(-50, 50);
                    gsap.fromTo(a, .6, {
                        y: 50,
                        opacity: 0,
                        rotate: i
                    }, {
                        delay: 0 + n,
                        y: 0,
                        opacity: 1,
                        rotate: 0,
                        ease: "back.out(2)"
                    })
                }
                var s = ee(".loader__lines").length;
                ee(".loader__lines").show();
                for (var r = 1; r <= s; r++) {
                    var l = ".loader__lines.lines--" + r
                      , c = settings.initRandRange(1, 5) / 10;
                    gsap.fromTo(l, .4, {
                        scale: 0,
                        opacity: 0
                    }, {
                        delay: 0 + c,
                        scale: 1,
                        opacity: 1,
                        ease: "back.out(3)"
                    })
                }
                setTimeout(function() {
                    topPage.initFinishedLoading()
                }, 1200)
            }
            Common.trace("DEBUG -> " + e),
            e && (topPage.IS_SKIP = !1),
            topPage.IS_SKIP ? (ee(".loader__inner").remove(),
            topPage.initFinishedLoading()) : (ee(".loader__items, .loader__lines").hide(),
            gsap.fromTo(".loader__cassette", .6, {
                opacity: 0,
                y: 30
            }, {
                delay: .5,
                opacity: 1,
                y: 0,
                ease: "circ.out"
            }),
            gsap.fromTo(".loader__timer", .6, {
                opacity: 0,
                y: 30
            }, {
                delay: .6,
                opacity: 1,
                y: 0,
                ease: "circ.out"
            }),
            gsap.fromTo(".loader__bar", .6, {
                opacity: 0,
                y: 30
            }, {
                delay: .7,
                opacity: 1,
                y: 0,
                ease: "circ.out"
            }),
            gsap.fromTo(".loader__icons", .6, {
                opacity: 0,
                y: 30
            }, {
                delay: .8,
                opacity: 1,
                y: 0,
                ease: "circ.out",
                onComplete: function() {
                    Common.trace("START COUNT DOWN");
                    const t = {
                        count: 18
                    };
                    ee(".cassette--leftGear, .cassette--rightGear").addClass("is--animate"),
                    gsap.to(t, 1, {
                        delay: 0,
                        count: 0,
                        ease: "none",
                        onUpdate: function() {
                            var e = Math.floor(t.count).toString().padStart(2, "0");
                            ee(".loader__timer .timer--num span").text(e)
                        }
                    }),
                    gsap.to(".loader__bar span", 1, {
                        delay: 0,
                        scaleX: 1,
                        y: 0,
                        ease: "none",
                        onComplete: o
                    })
                }
            }))
        },
        initFinishedLoading: function() {
            "pc" == Common.LAYOUT_MODE ? (gsap.to("#loader .loader__content", 1.2, {
                delay: 0,
                width: 0,
                ease: "power3.inOut"
            }),
            gsap.to("#loader .bg--2", 1.2, {
                delay: .1,
                scaleX: 0,
                ease: "power3.inOut"
            }),
            gsap.to("#loader .bg--1", 1.2, {
                delay: .2,
                scaleX: 0,
                ease: "power3.inOut",
                onComplete: topPage.finishedLoading
            })) : (gsap.to("#loader .loader__content", 1.2, {
                delay: 0,
                height: 0,
                ease: "power3.inOut"
            }),
            gsap.to("#loader .bg--2", 1.2, {
                delay: .1,
                scaleY: 0,
                ease: "power3.inOut"
            }),
            gsap.to("#loader .bg--1", 1.2, {
                delay: .2,
                scaleY: 0,
                ease: "power3.inOut",
                onComplete: topPage.finishedLoading
            })),
            ("pc" == Common.LAYOUT_MODE ? ee(".header__sideNav, .visual__title, .visual__logo, .visual__board") : ee(".visual__title .sp--only, .visual__logo")).hide(),
            topPage.setIntroScrollTrigger(),
            settings.startScroll(),
            "pc" == Common.LAYOUT_MODE && settings.setSmoothScroll(),
            gsap.fromTo(".visual__main__wrapper", 1.2, {
                scale: 1.2
            }, {
                delay: .2,
                scale: 1,
                ease: "circ.out",
                onComplete: function() {
                    topPage.loopVisualSettings()
                }
            })
        },
        finishedLoading: function() {
            Common.trace("TOP -> finishedLoading()"),
            0 < ee("#loader").length && ee("#loader").remove(),
            ("pc" == Common.LAYOUT_MODE ? ee(".header__sideNav, .visual__title, .visual__logo, .visual__board") : ee(".visual__title .sp--only, .visual__logo")).show(),
            "pc" == Common.LAYOUT_MODE && Common.setSuffleText(".header__sideNav a", 800),
            "pc" == Common.LAYOUT_MODE ? Common.setSuffleText(".visual__title .pc--only", 800) : Common.setSuffleText(".visual__title .sp--only", 800);
            var e = settings.initRandRange(-30, 30);
            gsap.fromTo(".visual__logo", .3, {
                opacity: 0
            }, {
                opacity: 1,
                ease: "power2.out"
            }),
            gsap.fromTo(".visual__logo", 1, {
                rotate: e
            }, {
                rotate: 0,
                ease: "elastic.out(1, 0.3)",
                onComplete: function() {
                    ee(".visual__logo").removeAttr("style")
                }
            }),
            "pc" == Common.LAYOUT_MODE && gsap.fromTo(".visual__board", .8, {
                y: 68
            }, {
                y: 0,
                ease: "circ.out"
            })
        },
        loopVisualSettings: function() {
            Common.trace("TOP -> loopVisualSettings()");
            let e = 4, t, a, n, o, i, s;
            function r(e) {
                ee(".visual__board__controller").hasClass("is--hidden") || (ee(".visual__board__controller").addClass("is--hidden"),
                e = e,
                o = Number(ee(a + " .is--current").attr("id").substr(6)),
                i = "next" === e ? o < n ? o + 1 : 1 : 1 < o ? o - 1 : n,
                s = ee(a + " #visual" + i),
                ee(s).addClass("is--next"),
                l(),
                "pc" == Common.LAYOUT_MODE ? ee(".header__sideNav, .visual__title, .header__ham").removeClass("color--black").removeClass("color--white").addClass("color--" + ee(s).attr("data-color")) : 1 === i ? gsap.fromTo(".visual__logo", .4, {
                    opacity: 1
                }, {
                    opacity: 0,
                    ease: "power2.out",
                    onComplete: function() {
                        ee(".visual__logo").removeClass("is--sub"),
                        gsap.fromTo(".visual__logo", .4, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: "power2.out"
                        })
                    }
                }) : 2 === i && gsap.fromTo(".visual__logo", .4, {
                    opacity: 1
                }, {
                    opacity: 0,
                    ease: "power2.out",
                    onComplete: function() {
                        ee(".visual__logo").addClass("is--sub"),
                        gsap.fromTo(".visual__logo", .4, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: "power2.out"
                        })
                    }
                }),
                gsap.fromTo(s, 1.2, {
                    scale: 1.1,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    ease: "circ.out",
                    onComplete: function() {
                        ee(a + " p").removeClass("is--current"),
                        ee(s).removeClass("is--next").addClass("is--current").removeAttr("style"),
                        l(),
                        c(),
                        ee(".visual__board__controller").removeClass("is--hidden")
                    }
                }))
            }
            function l() {
                let e, t, o = Number(ee(a + " .is--current").attr("id").substr(6));
                t = o <= 1 ? (e = o + 1,
                n) : (e = 1 < o && o < n ? o + 1 : 1,
                o - 1),
                ee(".visual__board__controller .controller--prev a").attr("data-num", t),
                ee(".visual__board__controller .controller--next a").attr("data-num", e)
            }
            function c() {
                t = setTimeout(function() {
                    r("next")
                }, 1e3 * e)
            }
            a = "pc" == Common.LAYOUT_MODE ? "#visualPC" : "#visualSP",
            n = ee(a + " p").length,
            l(),
            c(),
            ee(".visual__board__controller a").on("click", function(e) {
                e.preventDefault();
                e = ee(this).attr("data-type");
                clearTimeout(t),
                r(e)
            })
        },
        resizePosition: function() {
            0 < ee("#loader").length && ee("#loader .loader__inner").css({
                width: Common.Window.width,
                height: Common.Window.height
            });
            var e = ee("#news").innerHeight();
            let t;
            t = e >= Common.Window.height ? e - Common.Window.height : 0,
            ee("#news").css({
                top: -t
            }),
            "sp" == Common.LAYOUT_MODE && ee("#visual").css({
                height: Common.Window.height
            })
        },
        scrollEvents: function() {
            Common.ScrollEvent.scroll_top >= ee("#visual").innerHeight() ? ee(".pagetop--icon, .backtotop--button").addClass("is--show") : ee(".pagetop--icon, .backtotop--button").removeClass("is--show");
            var e = ee("#visual").innerHeight()
              , t = ee("#news").innerHeight()
              , o = ee("#introduction").innerHeight() + ee(".introduction").innerHeight()
              , a = ee("#members").innerHeight()
              , n = ee("#movie").innerHeight()
              , i = (ee("#link").innerHeight(),
            Math.floor(e / 2))
              , s = e + t + o + a
              , s = ((!(Common.ScrollEvent.scroll_top >= i) || (ee(".section--title").addClass("is--show"),
            Common.ScrollEvent.scroll_top >= s)) && ee(".section--title").removeClass("is--show"),
            Common.ScrollEvent.scroll_top >= i && Common.ScrollEvent.scroll_top < e + t / 2 ? (ee(".section--title span").text("NEWS").removeClass().addClass("color--black"),
            ee(".header__ham").removeClass("color--black"),
            ee(".pagetop--icon").removeClass("color--black").addClass("color--white"),
            "news" != ee(".section--title").attr("data-title") && (Common.setSuffleText(".section--title span", 800),
            ee(".section--title").attr("data-title", "news"))) : Common.ScrollEvent.scroll_top >= e + t / 2 && Common.ScrollEvent.scroll_top < e + t + o - Math.floor(Common.Window.height / 2) ? (ee(".section--title span").text("INTRODUCTION").removeClass().addClass("color--black"),
            ee(".header__ham").addClass("color--black"),
            ee(".pagetop--icon").removeClass("color--white").addClass("color--black"),
            "introduction" != ee(".section--title").attr("data-title") && (Common.setSuffleText(".section--title span", 800),
            ee(".section--title").attr("data-title", "introduction"))) : Common.ScrollEvent.scroll_top >= e + t + o - Math.floor(Common.Window.height / 2) && Common.ScrollEvent.scroll_top < e + t + o + a - Math.floor(Common.Window.height / 2) ? (ee(".section--title span").text("CHARACTER").removeClass().addClass("color--black"),
            ee(".header__ham").addClass("color--black"),
            ee(".pagetop--icon").removeClass("color--white").addClass("color--black"),
            "character" != ee(".section--title").attr("data-title") && (Common.setSuffleText(".section--title span", 800),
            ee(".section--title").attr("data-title", "character"))) : Common.ScrollEvent.scroll_top >= e + t + o + a - Math.floor(Common.Window.height / 2) && Common.ScrollEvent.scroll_top < e + t + o + a + n - Math.floor(Common.Window.height / 2) ? (ee(".section--title span").text("MOVIE").removeClass().addClass("color--white"),
            ee(".header__ham").removeClass("color--black"),
            ee(".pagetop--icon").removeClass("color--black").addClass("color--white"),
            "movie" != ee(".section--title").attr("data-title") && (Common.setSuffleText(".section--title span", 800),
            ee(".section--title").attr("data-title", "movie"))) : Common.ScrollEvent.scroll_top >= e + t + o + a + n - Math.floor(Common.Window.height / 2) && (ee(".header__ham").addClass("color--black"),
            ee(".pagetop--icon").removeClass("color--white").addClass("color--black")),
            ee(".introduction").offset().top)
              , i = ee(".introduction__content").offset().top
              , e = ee("#members").offset().top;
            Common.ScrollEvent.scroll_top >= s && Common.ScrollEvent.scroll_top < e && (ee(".introduction").hasClass("is--show") || (ee(".introduction").addClass("is--show"),
            "pc" == Common.LAYOUT_MODE ? (settings.setEffectObjects(".introduction", "introContent", 0, 0),
            settings.setEffectObjects(".introduction", "introPlane", 0, 0),
            Common.trace("INTRO CONTENT & PLANE SHOW")) : (settings.setEffectObjects(".introduction", "introPlane", 0, 0),
            Common.trace("INTRO PLANE SHOW"))),
            "sp" == Common.LAYOUT_MODE) && Common.ScrollEvent.scroll_top >= i - Math.floor(Common.Window.height / 2) && (ee(".introduction__content").hasClass("is--show") || (ee(".introduction__content").addClass("is--show"),
            Common.trace("INTRO CONTENT SHOW"),
            settings.setEffectObjects(".introduction", "introContent", 0, 0)))
        }
    },
    this.newsPage = {
        init: function() {
            Common.trace("newsPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".pagetop--icon").addClass("color--white"),
            settings.showItems()
        }
    },
    this.staffcastPage = {
        init: function() {
            Common.trace("staffcastPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".pagetop--icon").addClass("color--white"),
            settings.showItems()
        }
    },
    this.guidelinePage = {
        init: function() {
            Common.trace("guidelinePage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".pagetop--icon").addClass("color--white"),
            settings.showItems()
        }
    },
    this.introductionPage = {
        init: function() {
            Common.trace("introductionPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".pagetop--icon").addClass("color--black");
            let t = ".detail__plane"
              , e = ee(".plane--wrapper")
              , o = e.innerWidth()
              , a = "pc" == Common.LAYOUT_MODE ? 20 : 15;
            e.clone(!1, !1).appendTo(t),
            function e() {
                gsap.fromTo(t, a, {
                    x: 0
                }, {
                    x: -o,
                    ease: "none",
                    onComplete: function() {
                        ee(t).removeAttr("style"),
                        e()
                    }
                })
            }(),
            Common.ScrollEvent.setParallaxObjects(),
            settings.showItems()
        }
    },
    this.characterPage = {
        init: function() {
            Common.trace("characterPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".pagetop--icon, .header__ham, .header__sideNav").addClass("color--black"),
            Common.ScrollEvent.setParallaxObjects(),
            ee(".device--prof span").clone(!0, !1).appendTo(".device--prof p"),
            ee(".device--prof span:nth-of-type(1)").css({
                opacity: .2
            }),
            ee(".device--prof span:nth-of-type(2)").css({
                opacity: .8
            }),
            "pc" == Common.LAYOUT_MODE && ee(".localnav").hide(),
            ee(".items").hide(),
            ee(".name__team, .name__member").hide(),
            ee(".device--prof span, .device--visual p, .device--card, .detail__device__inner, .device--prev, .device--next").hide();
            var a = ee(".detail").attr("data-team")
              , e = (ee(".hamanav__list .list--" + a).addClass("is--current"),
            ee(".localnav--" + a).addClass("is--current"),
            ee(".container").attr("data-class").substr(8));
            ee(".localnav .localnav--" + e).addClass("is--current"),
            ee(".link__list, .link__items").css({
                opacity: 0
            });
            let t = ee(".link__textTop span"), o = ee(".link__textBottom span"), n, i = t.innerWidth(), s = o.innerWidth();
            "sp" == Common.LAYOUT_MODE && (n = ee(".link__textBottomSp span"));
            for (var r = 0; r < 4; r++)
                t.clone(!1, !1).appendTo(".link__textTop"),
                o.clone(!1, !1).appendTo(".link__textBottom"),
                "sp" == Common.LAYOUT_MODE && n.clone(!1, !1).appendTo(".link__textBottomSp");
            !function e() {
                gsap.fromTo(".link__textTop", 10, {
                    x: -i
                }, {
                    x: 0,
                    ease: "none"
                }),
                gsap.fromTo(".link__textBottom", 10, {
                    x: 0
                }, {
                    x: -s,
                    ease: "none",
                    onComplete: function() {
                        ee(".link__textTop, .link__textBottom").removeAttr("style"),
                        "sp" == Common.LAYOUT_MODE && ee(".link__textBottomSp").removeAttr("style"),
                        e()
                    }
                }),
                "sp" == Common.LAYOUT_MODE && gsap.fromTo(".link__textBottomSp", 10, {
                    x: -i
                }, {
                    x: 0,
                    ease: "none"
                })
            }();
            let l = !1;
            ee(".device--button__zoom a").on("click", function(e) {
                e.preventDefault(),
                ee(".zoom--bg, .zoom").show(),
                gsap.fromTo(".zoom--bg", .6, {
                    scaleX: 0,
                    skewX: 20
                }, {
                    scaleX: 1,
                    skewX: 0,
                    ease: "circ.inOut"
                }),
                gsap.fromTo(".zoom__visual", .3, {
                    opacity: 0,
                    y: 20
                }, {
                    delay: .6,
                    opacity: 1,
                    y: 0,
                    ease: "power3.Out",
                    onComplete: function() {
                        l = !0
                    }
                })
            }),
            ee(".zoom").on("click", function(e) {
                e.preventDefault(),
                l && (gsap.to(".zoom__visual", .2, {
                    opacity: 0,
                    ease: "power3.Out"
                }),
                gsap.to(".zoom--bg", .4, {
                    delay: .2,
                    scaleX: 0,
                    skewX: 20,
                    ease: "circ.inOut",
                    onComplete: function() {
                        ee(".zoom__visual").removeAttr("style"),
                        ee(".zoom--bg, .zoom").removeAttr("style").hide(),
                        l = !1
                    }
                }))
            }),
            ee(".link--character").on("click", function(e) {
                e.preventDefault();
                let t = ee(this).attr("href");
                gsap.to(".detail, .name, .localnav, .hamanav,.items", .2, {
                    opacity: 0,
                    ease: "power3.Out",
                    onComplete: function() {
                        u.location = t
                    }
                })
            });
            var c, e = !1, m = !1, p = "";
            function d() {
                c.stop(),
                ee(".device--button__voice").removeClass("is--playing"),
                m = !1
            }
            if (e = !!buzz.isSupported,
            Common.trace("sound bool: ", e),
            ee(".device--button__voice a").on("click", function(e) {
                var t;
                e.preventDefault(),
                m ? d() : (e = ee(this),
                p = "/shared/sound/" + e.attr("href").substr(1),
                e = p,
                t = 80,
                m && d(),
                m || ((c = new buzz.sound(e,{
                    formats: ["mp3"],
                    loop: !1
                })).setVolume(t),
                c.play(),
                c.bind("timeupdate", function() {
                    buzz.toTimer(this.getTime());
                    var e = c.getTime()
                      , t = c.getDuration()
                      , o = buzz.toPercent(e, t, 2);
                    Common.trace(e + " / " + t + " -> " + o),
                    100 <= o && d()
                }),
                ee(".device--button__voice").addClass("is--playing")),
                m = !0)
            }),
            "pc" != Common.LAYOUT_MODE) {
                let i = a, e, t, o, s = !1;
                function _() {
                    "r1ze" == i ? (e = "R1ze",
                    t = "CONDUCTORS",
                    o = "Day2") : "day2" == i ? (e = "Day2",
                    t = "R1ze",
                    o = "Ev3ns") : "ev3ns" == i ? (e = "Ev3ns",
                    t = "Day2",
                    o = "L4mps") : "l4mps" == i ? (e = "L4mps",
                    t = "Ev3ns",
                    o = "CONDUCTORS") : "conductors" == i && (e = "CONDUCTORS",
                    t = "L4mps",
                    o = "R1ze"),
                    ee(".localnav__head .head--team span").html(e),
                    Common.setSuffleText(".localnav__head .head--team span", 600),
                    ee(".localnav__pager .pager--prev a").attr("data-team", t),
                    ee(".localnav__pager .pager--next a").attr("data-team", o),
                    ee("#localnavBg").removeClass().addClass("color--" + i)
                }
                ee(".localnav__pager a").on("click", function(e) {
                    if (e.preventDefault(),
                    !s) {
                        s = !0;
                        let e = ee(this).attr("data-dir"), t = ee(this).attr("data-team"), o = ".localnav--" + t.toLowerCase(), a, n;
                        n = "back" == e ? (a = "100%",
                        "-100%") : (a = "-100%",
                        "100%"),
                        i = t.toLowerCase(),
                        _(),
                        gsap.to(".localnav__block ul.is--current", .6, {
                            x: a,
                            ease: "circ.inOut"
                        }),
                        gsap.fromTo(o, .6, {
                            display: "flex",
                            x: n
                        }, {
                            x: 0,
                            ease: "circ.inOut",
                            onComplete: function() {
                                ee(".localnav__block ul").removeAttr("style").removeClass("is--current"),
                                ee(o).addClass("is--current"),
                                s = !1
                            }
                        })
                    }
                }),
                _()
            }
        },
        showContent: function() {
            Common.trace("characterPage -> showContent()");
            let e = .6
              , t = "pc" == Common.LAYOUT_MODE ? settings.initRandRange(-50, 50) : settings.initRandRange(-50, 150)
              , o = "pc" == Common.LAYOUT_MODE ? settings.initRandRange(-10, 10) : settings.initRandRange(10, 20);
            settings.IS_TRANSIT && (e = .5),
            ee(".device--visual p").show(),
            ee(".detail__device__inner").show(),
            gsap.fromTo(".detail__device__inner", 1, {
                x: 200,
                y: t,
                rotate: o,
                opacity: 0
            }, {
                delay: e,
                x: 0,
                y: 0,
                rotate: 0,
                opacity: 1,
                ease: "circ.out",
                onComplete: function() {
                    ee(".items").show(),
                    settings.showItems()
                }
            });
            var a = "pc" == Common.LAYOUT_MODE ? 80 : 2
              , n = "pc" == Common.LAYOUT_MODE ? 15 : -15;
            ee(".device--card").show(),
            gsap.fromTo(".device--card", .6, {
                x: a,
                y: n,
                opacity: 1
            }, {
                delay: e + .6,
                x: 0,
                y: 0,
                opacity: 1,
                ease: "circ.inOut",
                onComplete: function() {
                    ee(".name__team").show(),
                    Common.setSuffleText(".name__team", 1e3),
                    ee(".name__member").show();
                    var e = "pc" == Common.LAYOUT_MODE ? ".member--pc span" : ".member--sp span";
                    Common.setSuffleText(e, 1e3),
                    ee(".device--prof span").show(),
                    gsap.fromTo(".device--prof span:nth-of-type(1)", .5, {
                        width: 0
                    }, {
                        delay: 0,
                        width: "100%",
                        ease: "circ.out"
                    }),
                    gsap.fromTo(".device--prof span:nth-of-type(2)", .4, {
                        width: 0
                    }, {
                        delay: .4,
                        width: "100%",
                        ease: "circ.out"
                    }),
                    ee(".localnav").show(),
                    "pc" == Common.LAYOUT_MODE && gsap.fromTo(".localnav", .5, {
                        x: 50,
                        opacity: 0
                    }, {
                        delay: .5,
                        x: 0,
                        opacity: 1,
                        ease: "power2.out"
                    }),
                    ee(".device--prev, .device--next").show(),
                    gsap.fromTo(".device--prev", .5, {
                        x: -20,
                        opacity: 0
                    }, {
                        delay: .5,
                        x: 0,
                        opacity: 1,
                        ease: "power2.out"
                    }),
                    gsap.fromTo(".device--next", .5, {
                        x: 20,
                        opacity: 0
                    }, {
                        delay: .5,
                        x: 0,
                        opacity: 1,
                        ease: "power2.out"
                    })
                }
            })
        }
    },
    this.systemPage = {
        init: function() {
            Common.trace("systemPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".pagetop--icon, .header__sideNav").addClass("color--black"),
            ee(".header__ham").addClass("color--white"),
            Common.ScrollEvent.setParallaxObjects(),
            settings.showItems()
        }
    },
    this.eventPage = {
        init: function() {
            Common.trace("eventPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".header__ham, .pagetop--icon, .header__sideNav").addClass("color--black"),
            settings.showItems()
        }
    },
    this.musicPage = {
        init: function() {
            Common.trace("musicPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".header__ham, .pagetop--icon, .header__sideNav").addClass("color--black"),
            settings.showItems(),
            ee(".content--text blockquote").contextmenu(function(e) {
                e.preventDefault()
            })
        }
    },
    this.notFoundPage = {
        init: function() {
            Common.trace("notFoundPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".header__ham, .pagetop--icon, .header__sideNav").addClass("color--black");
            var e = Math.floor(2 * Math.random()) + 1
              , t = ".items--" + e;
            Common.trace("RANDOM -> " + e),
            ee(t).addClass("is--current")
        },
        showContent: function() {
            Common.trace("notFoundPage -> showContent()");
            var e = "pc" == Common.LAYOUT_MODE ? 50 : 0
              , t = "pc" == Common.LAYOUT_MODE ? 0 : 30;
            gsap.fromTo(".title--404", .5, {
                x: e,
                y: t,
                opacity: 0
            }, {
                delay: .6,
                x: 0,
                y: 0,
                opacity: 1,
                ease: "circ.out"
            }),
            gsap.fromTo(".title--page", .5, {
                x: e,
                y: t,
                opacity: 0
            }, {
                delay: .65,
                x: 0,
                y: 0,
                opacity: 1,
                ease: "circ.out"
            }),
            gsap.fromTo(".detail__roman", .5, {
                x: e,
                y: t,
                opacity: 0
            }, {
                delay: .7,
                x: 0,
                y: 0,
                opacity: 1,
                ease: "circ.out"
            }),
            gsap.fromTo(".detail__text", .5, {
                x: e,
                y: t,
                opacity: 0
            }, {
                delay: .75,
                x: 0,
                y: 0,
                opacity: 1,
                ease: "circ.out"
            }),
            gsap.fromTo(".detail__items.is--current", .8, {
                y: 50,
                opacity: 0
            }, {
                delay: .85,
                y: 0,
                opacity: 1,
                ease: "circ.out"
            })
        }
    },
    this.contactPage = {
        init: function() {
            Common.trace("contactPage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".header__ham, .pagetop--icon, .header__sideNav").addClass("color--black"),
            settings.showItems()
        }
    },
    this.singlePage = {
        init: function() {
            Common.trace("singlePage -> init()"),
            ee(".header__ham, .pagetop--icon, .backtotop--button").addClass("is--show"),
            ee(".header__ham, .pagetop--icon, .header__sideNav").addClass("color--black"),
            settings.showItems()
        }
    }
}(jQuery, window);
