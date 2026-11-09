!function(r, a) {
    r(a);
    var s = (a.Common = s) || {
        DEBUG: !1,
        URL_QUERY: {},
        is_fade: !0,
        Page: null,
        Window: {
            $window: null,
            $document: null,
            width: 0,
            height: 0
        },
        defaultLayout: null,
        LAYOUT_MODE: "pc",
        user_agent: null,
        loaded_img_len: 0,
        img_len: 0,
        img_src_ary: [],
        $body: null,
        $blind: null,
        $header: null,
        timeout_timer: null,
        pageName: null,
        isLoader: !1,
        DATE: null,
        isModal: !1,
        isEndPreload: !1,
        is_modal_movie: !1,
        isHamOpen: !1,
        orientation: null,
        isScroll: !1,
        setupOnce: function() {
            s.trace("Common -> setupOnce"),
            s.$body = r("body"),
            s.$blind = r("#blind"),
            s.Window.$window = r(a),
            s.Window.$document = r(document),
            s.Window.width = s.Window.$window.innerWidth(),
            s.Window.height = s.Window.$window.innerHeight(),
            s.URL_QUERY = s.getURLQuery(),
            s.user_agent = s.setUserAgent(),
            r(a, document, "html,body").scrollTop(0),
            r("html,body").animate({
                scrollTop: 0
            }, "1"),
            "pc" == s.LAYOUT_MODE && s.$body.css({
                overflow: "hidden"
            }),
            s.pageName = r(".container").attr("id").substring(0, r(".container").attr("id").length - 5),
            orientation = a.orientation,
            s.Window.width <= 768 || !s.user_agent.Tablet && s.user_agent.Mobile && 0 === orientation ? s.LAYOUT_MODE = "sp" : s.LAYOUT_MODE = "pc",
            s.defaultLayout = s.LAYOUT_MODE,
            s.initPreLoader()
        },
        getURLQuery: function() {
            var e = location.href.split("?");
            if (e.length < 2)
                return !1;
            params = e[1].split("&");
            var o = [];
            for (i = 0; i < params.length; i++)
                neet = params[i].split("="),
                o.push(neet[0]),
                o[neet[0]] = neet[1];
            return o
        },
        initPreLoader: function() {
            s.trace("PRELOADER -> initPreLoader()"),
            this.img_len = r("img").length,
            s.trace("PRELOADER -> img len: " + this.img_len),
            s.timeout_timer = setTimeout(function() {
                s.hidePreLoader()
            }, 3e3),
            0 < this.img_len ? this.setPreLoader() : this.hidePreLoader()
        },
        setPreLoader: function() {
            var o = this;
            s.trace("PRELOADER -> setPreLoader()");
            for (var e = 0; e < this.img_len; e++) {
                var t = r("img:eq(" + e + ")").attr("src");
                o.img_src_ary.push(t)
            }
            s.trace(o.img_src_ary.length),
            r(document).smartpreload({
                images: o.img_src_ary,
                oneachimageload: function(e) {
                    o.loaded_img_len++,
                    s.onLoadUpdate()
                },
                onloadall: function() {
                    s.trace("PRELOADER :: All item is loaded."),
                    s.hidePreLoader()
                }
            })
        },
        onLoadUpdate: function() {
            var e = this;
            e.loaderd_per = Math.floor(100 / e.img_src_ary.length * e.loaded_img_len),
            String(e.loaderd_per);
            s.trace("PRELOADER :: " + e.loaderd_per + "% Loaded"),
            e.loaded_img_len == e.img_src_ary.length && s.trace("PRELOADER :: All item is loaded.")
        },
        hidePreLoader: function() {
            s.trace("PRELOADER -> hidePreLoader"),
            s.isEndPreload || (s.isEndPreload = !0,
            this.init())
        },
        reload_count: 0,
        reload_count_max: 2,
        init: function() {
            s.trace("Common -> init()"),
            clearTimeout(s.timeout_timer),
            s.timeout_timer = null,
            s.trace("COMMON PAGE -> " + s.Page),
            s.Page ? (s.Page && setTimeout(function() {
                s.trace("Common page -> " + s.Page),
                s.Page.setupOnce()
            }, 30),
            setTimeout(function() {
                s.buttonEvent(),
                s.ResizeEvent.init(),
                s.ScrollEvent.init()
            }, 500)) : setTimeout(s.init, 500)
        },
        buttonEvent: function() {
            s.trace("Common -> buttonEvent()"),
            r(".modal--inline").on("click", function(e) {
                e.preventDefault(),
                r(this).attr("data-type") && r(this).attr("data-type");
                e = r(this).attr("href"),
                e = r(e);
                r("#modal").css({
                    display: "block"
                }),
                r("#modal .modal__closeBg").css({
                    display: "block"
                }),
                s.isModal = !0,
                e.show().addClass("is__currentModal"),
                s.$body.css({
                    overflow: "hidden"
                }),
                TweenMax.fromTo("#modal", .2, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: "easeOutQuad"
                })
            }),
            r(".modal--movie").on("click", function(e) {
                e.preventDefault();
                var o = r(this).attr("href")
                  , t = '<iframe id="modalPlayer" width="100%" height="608" src="https://www.youtube-nocookie.com/embed/' + r(this).attr("data-id") + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                r("#modal").css({
                    display: "block"
                }).addClass("bg--color"),
                r("#modal .modal__closeBg").css({
                    display: "block"
                }),
                r("#modal .modal--close").css({
                    display: "none"
                }),
                r(o).css({
                    display: "block"
                }),
                TweenMax.fromTo("#modal", .3, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: "easeOutQuad",
                    onComplete: function() {
                        r(o).find(".modal__movie__details__frame").removeAttr("style"),
                        r(o).find(".modal__movie__details__frame").prepend(t),
                        r("#modal .modal--close").css({
                            display: "block"
                        }),
                        s.is_modal_movie = !0
                    }
                }),
                r(o).addClass("is__currentModal"),
                "pc" == s.LAYOUT_MODE && s.$body.css({
                    overflow: "hidden"
                }),
                s.isModal = !0
            }),
            r("#modal .modal--close, #modal .modal__closeBg").on("click", function(e) {
                e.preventDefault();
                var o, t, e = "#" + r(".is__currentModal").attr("id"), l = r(e);
                "#modalMovie" == e ? (t = l,
                r("#modal .modal__closeBg").css({
                    display: "none"
                }),
                r("#modal .modal--close").css({
                    display: "none"
                }),
                r("#modalMovie .modal__movie__details__frame").html(""),
                s.$body.css({
                    overflow: "visible"
                }),
                TweenMax.fromTo("#modal", .4, {
                    "pointer-events": "none"
                }, {
                    delay: .1,
                    opacity: 0,
                    ease: "easeOutQuad",
                    onComplete: function() {
                        document.getElementById("modal").scrollTop = 0,
                        t.removeClass("is__currentModal"),
                        t.removeAttr("style"),
                        r("#modal, #modal .modal--close").removeAttr("style"),
                        s.isModal = !1,
                        s.is_modal_movie = !1
                    }
                })) : (o = l,
                r("#modal .modal__closeBg").css({
                    display: "none"
                }),
                o.find(".modal--close").css({
                    "pointer-events": "none"
                }),
                s.$body.css({
                    overflow: "visible"
                }),
                TweenMax.to("#modal", .2, {
                    opacity: 0,
                    ease: "easeOutQuad",
                    onComplete: function() {
                        document.getElementById("modal").scrollTop = 0,
                        o.removeClass("is__currentModal"),
                        o.removeAttr("style"),
                        r("#modal").removeAttr("style"),
                        o.find(".modal--close").removeAttr("style"),
                        s.isModal = !1
                    }
                }))
            }),
            r(".ancor").on("click", function(e) {
                e.preventDefault();
                var e = r(this).attr("href")
                  , o = r(this).attr("data-offset-pc")
                  , t = r(this).attr("data-offset-sp")
                  , o = o ? "pc" == s.LAYOUT_MODE ? o : t : 0;
                s.autoScroll(e, 1.2, 0, o, "easeInOutQuart")
            }),
            r(".link--insite").on("click", function(e) {
                r(this).hasClass("content--parent") || (e.preventDefault(),
                r(this),
                s.Page.settings.hidePage(r(this)))
            })
        },
        isAutoScroll: !1,
        autoScroll: function(e, o, t, l, n) {
            var i;
            s.trace("Common -> autoScroll()"),
            s.isAutoScroll = !0,
            r(e);
            "#" != e && (e = Math.floor(r(e).offset().top),
            i = e + Number(l),
            s.trace("offset -> " + l),
            s.trace("def pos -> " + e),
            s.trace("pos -> " + i),
            setTimeout(function() {
                gsap.to(a, {
                    duration: o,
                    scrollTo: {
                        y: i,
                        autoKill: !1
                    },
                    ease: "power2.inOut"
                })
            }, 1e3 * t))
        },
        ScrollEvent: {
            scroll_top: 0,
            scroll_btm: 0,
            scroll_prev_value: 0,
            is_scroll_down: !0,
            is_set_parallax: !1,
            $groups: null,
            groups_index: 0,
            groups_max: 0,
            target_group: null,
            target_group_prev: null,
            scroll_offset_y: 0,
            fade_offset_y: 0,
            fade_offset_duration: 0,
            out_duration: 0,
            startPosV: .3,
            init: function() {
                s.trace("ScrollEvent -> init()"),
                s.ScrollEvent.scroll_top = 0,
                s.ScrollEvent.scroll_btm = s.ScrollEvent.scroll_top + s.Window.height,
                s.Window.$window.on("scroll", s.ScrollEvent.onScroll).trigger("scroll"),
                "sp" == s.LAYOUT_MODE && (s.ScrollEvent.startPosV = .1)
            },
            setParallaxObjects: function() {
                s.ScrollEvent.is_set_parallax = !0,
                "pc" == s.LAYOUT_MODE ? s.ScrollEvent.$groups = r(".is--effect") : s.ScrollEvent.$groups = r(".is--effect").not(".exclude--sp"),
                s.ScrollEvent.groups_index = 0,
                s.ScrollEvent.groups_max = s.ScrollEvent.$groups.length,
                s.ScrollEvent.target_group = r(s.ScrollEvent.$groups[0]),
                s.ScrollEvent.scroll_top = 0,
                s.ScrollEvent.scroll_btm = s.ScrollEvent.scroll_top + s.Window.height,
                s.ScrollEvent.fade_offset_y = 0,
                s.ScrollEvent.scroll_offset_y = 200,
                s.ScrollEvent.fade_offset_duration = .6,
                s.ScrollEvent.out_duration = .4,
                s.ScrollEvent.$groups.each(function(e, o) {
                    var o = r(o)
                      , t = o.attr("data-alpha");
                    o.addClass("entry-index" + String(e)),
                    o.offset().top >= s.ScrollEvent.scroll_btm - 200 && o.css({
                        opacity: t
                    })
                }),
                s.ScrollEvent.groups_index < s.ScrollEvent.groups_max && (s.ScrollEvent.target_group = r(s.ScrollEvent.$groups[s.ScrollEvent.groups_index]),
                s.Window.$window.on("scroll", s.ScrollEvent.onScroll).trigger("scroll")),
                s.trace("scroll total index: " + s.ScrollEvent.groups_max),
                s.trace(s.ScrollEvent.groups_index)
            },
            onScroll: function(e) {
                var o, t, l;
                s.ScrollEvent.scroll_prev_value = s.ScrollEvent.scroll_top,
                s.ScrollEvent.scroll_top = document.body.scrollTop || document.documentElement.scrollTop,
                s.ScrollEvent.scroll_btm = s.ScrollEvent.scroll_top + s.Window.height,
                s.ScrollEvent.scroll_prev_value < s.ScrollEvent.scroll_top ? s.ScrollEvent.is_scroll_down = !0 : s.ScrollEvent.scroll_prev_value > s.ScrollEvent.scroll_top && (s.ScrollEvent.is_scroll_down = !1),
                s.Page.settings.scrollEvents(),
                "top" === s.pageName && s.Page.topPage.scrollEvents(),
                !s.ScrollEvent.is_set_parallax || !s.ScrollEvent.is_scroll_down || s.ScrollEvent.groups_index >= s.ScrollEvent.groups_max - 1 || s.ScrollEvent.scroll_btm - s.Window.height * s.ScrollEvent.startPosV > s.ScrollEvent.target_group.offset().top && (o = r(s.ScrollEvent.target_group).attr("data-eff"),
                t = r(s.ScrollEvent.target_group).attr("data-time"),
                l = r(s.ScrollEvent.target_group).attr("data-delay"),
                s.Page.settings.setEffectObjects(s.ScrollEvent.target_group, o, l, t),
                s.ScrollEvent.groups_index < s.ScrollEvent.groups_max && (s.ScrollEvent.groups_index++,
                s.ScrollEvent.target_group = r(s.ScrollEvent.$groups[s.ScrollEvent.groups_index]),
                s.ScrollEvent.target_group_prev = r(s.ScrollEvent.$groups[s.ScrollEvent.groups_index - 1])),
                s.ScrollEvent.onScroll(e))
            }
        },
        ResizeEvent: {
            init: function() {
                s.Window.$window.on("resize", s.ResizeEvent.onResize).trigger("resize")
            },
            onResize: function(e) {
                s.Window.width = s.Window.$window.innerWidth(),
                s.Window.height = s.Window.$window.innerHeight(),
                orientation = a.orientation,
                s.Window.width <= 768 || !s.user_agent.Tablet && s.user_agent.Mobile && 0 === orientation ? s.LAYOUT_MODE = "sp" : s.LAYOUT_MODE = "pc",
                s.LAYOUT_MODE != s.defaultLayout ? (s.trace("change Device"),
                r("#blind").css({
                    display: "block",
                    opacity: 1
                }),
                s.user_agent.Firefox ? a.location.href = a.location.href : a.location.reload(!1)) : (s.Page.settings.resizePosition(),
                "top" === s.pageName && s.Page.topPage.resizePosition(),
                "sp" != s.LAYOUT_MODE && s.is_modal_movie)
            }
        },
        setSuffleText: function(e, o) {
            var t = [];
            r(e).each(function(e) {
                t[e] = new ShuffleText(this),
                t[e].duration = o,
                t[e].start()
            })
        },
        setParallax: function() {
            s.trace("Common -> setParallax");
            new Rellax(".is--parallax",{
                round: !1,
                callback: function(e) {}
            })
        },
        setUserAgent: function() {
            s.trace("Common -> setUserAgent()");
            var e = a.navigator.userAgent.toLowerCase()
              , o = a.navigator.appVersion.toLowerCase()
              , t = "unknown";
            return -1 != e.indexOf("msie") ? t = -1 != o.indexOf("msie 6.") ? "ie6" : -1 != o.indexOf("msie 7.") ? "ie7" : -1 != o.indexOf("msie 8.") ? "ie8" : -1 != o.indexOf("msie 9.") ? "ie9" : -1 != o.indexOf("msie 10.") ? "ie10" : "ie" : -1 != e.indexOf("trident/7") ? t = "ie11" : -1 != e.indexOf("chrome") ? t = "chrome" : -1 != e.indexOf("safari") ? t = "safari" : -1 != e.indexOf("opera") ? t = "opera" : -1 != e.indexOf("firefox") && (t = "firefox"),
            s.$body.addClass(t),
            -1 != e.indexOf("mobile") && s.$body.addClass("mobile"),
            -1 != e.indexOf("android") && s.$body.addClass("android"),
            t = -1 < (o = e).indexOf("trident/7") || -1 < o.indexOf("msie") && -1 == o.indexOf("opera"),
            {
                Tablet: -1 != o.indexOf("windows") && -1 != o.indexOf("touch") || -1 != o.indexOf("ipad") || -1 != o.indexOf("android") && -1 == o.indexOf("mobile") || -1 != o.indexOf("firefox") && -1 != o.indexOf("tablet") || -1 != o.indexOf("kindle") || -1 != o.indexOf("silk") || -1 != o.indexOf("playbook"),
                Mobile: -1 != o.indexOf("windows") && -1 != o.indexOf("phone") || -1 != o.indexOf("iphone") || -1 != o.indexOf("ipod") || -1 != o.indexOf("android") && -1 != o.indexOf("mobile") || -1 != o.indexOf("firefox") && -1 != o.indexOf("mobile") || -1 != o.indexOf("blackberry") || -1 != o.indexOf("ipad"),
                Android: -1 != o.indexOf("android"),
                iOS: -1 != o.indexOf("iphone") || -1 != o.indexOf("ipod"),
                IE: t,
                IE_VERSION: t ? parseInt(o.match(/((msie|MSIE)\s|rv:)([\d\.]+)/)[3]) : -1,
                Chrome: -1 < o.indexOf("chrome") && -1 == o.indexOf("edge"),
                Firefox: -1 < o.indexOf("firefox"),
                Safari: -1 < o.indexOf("safari") && -1 == o.indexOf("chrome"),
                Opera: -1 < o.indexOf("opera"),
                Edge: -1 < o.indexOf("edge")
            }
        },
        setLoadedInit: function(e) {
            s.trace("Common -> setLoadedInit()")
        },
        trace: function(e) {
            s.DEBUG && console.log("[trace]" + e)
        }
    };
    a.onpageshow = function(e) {
        s.trace("戻るボタンによる再読込: 判定"),
        e.persisted && (s.trace("戻るボタンによる再読込: リロード"),
        r("#blind").css({
            opacity: 1,
            display: "block",
            height: Math.max.apply(null, [document.body.clientHeight, document.body.scrollHeight, document.documentElement.scrollHeight, document.documentElement.clientHeight])
        }),
        a.location.reload())
    }
    ,
    s.setupOnce(),
    a.Common = s
}(jQuery, window);
