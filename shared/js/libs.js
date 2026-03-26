var t, e;
!function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && "object" == typeof module.exports ? exports = t(require("jquery")) : t(jQuery)
}(function(e) {
    e.easing.jswing = e.easing.swing;
    var n = Math.pow
      , r = Math.sqrt
      , i = Math.sin
      , s = Math.cos
      , o = Math.PI
      , a = 1.70158
      , u = 1.525 * a
      , l = 1 + a
      , c = 2 * o / 3
      , h = 2 * o / 4.5;
    function f(t) {
        var e = 7.5625
          , n = 2.75;
        return t < 1 / n ? e * t * t : t < 2 / n ? e * (t -= 1.5 / n) * t + .75 : t < 2.5 / n ? e * (t -= 2.25 / n) * t + .9375 : e * (t -= 2.625 / n) * t + .984375
    }
    e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function(t) {
            return e.easing[e.easing.def](t)
        },
        easeInQuad: function(t) {
            return t * t
        },
        easeOutQuad: function(t) {
            return 1 - (1 - t) * (1 - t)
        },
        easeInOutQuad: function(t) {
            return t < .5 ? 2 * t * t : 1 - n(-2 * t + 2, 2) / 2
        },
        easeInCubic: function(t) {
            return t * t * t
        },
        easeOutCubic: function(t) {
            return 1 - n(1 - t, 3)
        },
        easeInOutCubic: function(t) {
            return t < .5 ? 4 * t * t * t : 1 - n(-2 * t + 2, 3) / 2
        },
        easeInQuart: function(t) {
            return t * t * t * t
        },
        easeOutQuart: function(t) {
            return 1 - n(1 - t, 4)
        },
        easeInOutQuart: function(t) {
            return t < .5 ? 8 * t * t * t * t : 1 - n(-2 * t + 2, 4) / 2
        },
        easeInQuint: function(t) {
            return t * t * t * t * t
        },
        easeOutQuint: function(t) {
            return 1 - n(1 - t, 5)
        },
        easeInOutQuint: function(t) {
            return t < .5 ? 16 * t * t * t * t * t : 1 - n(-2 * t + 2, 5) / 2
        },
        easeInSine: function(t) {
            return 1 - s(t * o / 2)
        },
        easeOutSine: function(t) {
            return i(t * o / 2)
        },
        easeInOutSine: function(t) {
            return -(s(o * t) - 1) / 2
        },
        easeInExpo: function(t) {
            return 0 === t ? 0 : n(2, 10 * t - 10)
        },
        easeOutExpo: function(t) {
            return 1 === t ? 1 : 1 - n(2, -10 * t)
        },
        easeInOutExpo: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? n(2, 20 * t - 10) / 2 : (2 - n(2, -20 * t + 10)) / 2
        },
        easeInCirc: function(t) {
            return 1 - r(1 - n(t, 2))
        },
        easeOutCirc: function(t) {
            return r(1 - n(t - 1, 2))
        },
        easeInOutCirc: function(t) {
            return t < .5 ? (1 - r(1 - n(2 * t, 2))) / 2 : (r(1 - n(-2 * t + 2, 2)) + 1) / 2
        },
        easeInElastic: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : -n(2, 10 * t - 10) * i((10 * t - 10.75) * c)
        },
        easeOutElastic: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : n(2, -10 * t) * i((10 * t - .75) * c) + 1
        },
        easeInOutElastic: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : t < .5 ? -(n(2, 20 * t - 10) * i((20 * t - 11.125) * h)) / 2 : n(2, -20 * t + 10) * i((20 * t - 11.125) * h) / 2 + 1
        },
        easeInBack: function(t) {
            return l * t * t * t - a * t * t
        },
        easeOutBack: function(t) {
            return 1 + l * n(t - 1, 3) + a * n(t - 1, 2)
        },
        easeInOutBack: function(t) {
            return t < .5 ? n(2 * t, 2) * (2 * (1 + u) * t - u) / 2 : (n(2 * t - 2, 2) * ((1 + u) * (2 * t - 2) + u) + 2) / 2
        },
        easeInBounce: function(t) {
            return 1 - f(1 - t)
        },
        easeOutBounce: f,
        easeInOutBounce: function(t) {
            return t < .5 ? (1 - f(1 - 2 * t)) / 2 : (1 + f(2 * t - 1)) / 2
        }
    })
}),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(t, e, n, r, i) {
        return jQuery.easing[jQuery.easing.def](t, e, n, r, i)
    },
    easeInQuad: function(t, e, n, r, i) {
        return r * (e /= i) * e + n
    },
    easeOutQuad: function(t, e, n, r, i) {
        return -r * (e /= i) * (e - 2) + n
    },
    easeInOutQuad: function(t, e, n, r, i) {
        return (e /= i / 2) < 1 ? r / 2 * e * e + n : -r / 2 * (--e * (e - 2) - 1) + n
    },
    easeInCubic: function(t, e, n, r, i) {
        return r * (e /= i) * e * e + n
    },
    easeOutCubic: function(t, e, n, r, i) {
        return r * ((e = e / i - 1) * e * e + 1) + n
    },
    easeInOutCubic: function(t, e, n, r, i) {
        return (e /= i / 2) < 1 ? r / 2 * e * e * e + n : r / 2 * ((e -= 2) * e * e + 2) + n
    },
    easeInQuart: function(t, e, n, r, i) {
        return r * (e /= i) * e * e * e + n
    },
    easeOutQuart: function(t, e, n, r, i) {
        return -r * ((e = e / i - 1) * e * e * e - 1) + n
    },
    easeInOutQuart: function(t, e, n, r, i) {
        return (e /= i / 2) < 1 ? r / 2 * e * e * e * e + n : -r / 2 * ((e -= 2) * e * e * e - 2) + n
    },
    easeInQuint: function(t, e, n, r, i) {
        return r * (e /= i) * e * e * e * e + n
    },
    easeOutQuint: function(t, e, n, r, i) {
        return r * ((e = e / i - 1) * e * e * e * e + 1) + n
    },
    easeInOutQuint: function(t, e, n, r, i) {
        return (e /= i / 2) < 1 ? r / 2 * e * e * e * e * e + n : r / 2 * ((e -= 2) * e * e * e * e + 2) + n
    },
    easeInSine: function(t, e, n, r, i) {
        return -r * Math.cos(e / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function(t, e, n, r, i) {
        return r * Math.sin(e / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function(t, e, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * e / i) - 1) + n
    },
    easeInExpo: function(t, e, n, r, i) {
        return 0 == e ? n : r * Math.pow(2, 10 * (e / i - 1)) + n
    },
    easeOutExpo: function(t, e, n, r, i) {
        return e == i ? n + r : r * (1 - Math.pow(2, -10 * e / i)) + n
    },
    easeInOutExpo: function(t, e, n, r, i) {
        return 0 == e ? n : e == i ? n + r : (e /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + n : r / 2 * (2 - Math.pow(2, -10 * --e)) + n
    },
    easeInCirc: function(t, e, n, r, i) {
        return -r * (Math.sqrt(1 - (e /= i) * e) - 1) + n
    },
    easeOutCirc: function(t, e, n, r, i) {
        return r * Math.sqrt(1 - (e = e / i - 1) * e) + n
    },
    easeInOutCirc: function(t, e, n, r, i) {
        return (e /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + n : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n
    },
    easeInElastic: function(t, e, n, r, i) {
        var s = 1.70158
          , o = 0
          , a = r;
        return 0 == e ? n : 1 == (e /= i) ? n + r : (o = o || .3 * i,
        s = a < Math.abs(r) ? (a = r,
        o / 4) : o / (2 * Math.PI) * Math.asin(r / a),
        -(a * Math.pow(2, 10 * --e) * Math.sin((e * i - s) * (2 * Math.PI) / o)) + n)
    },
    easeOutElastic: function(t, e, n, r, i) {
        var s = 1.70158
          , o = 0
          , a = r;
        return 0 == e ? n : 1 == (e /= i) ? n + r : (o = o || .3 * i,
        s = a < Math.abs(r) ? (a = r,
        o / 4) : o / (2 * Math.PI) * Math.asin(r / a),
        a * Math.pow(2, -10 * e) * Math.sin((e * i - s) * (2 * Math.PI) / o) + r + n)
    },
    easeInOutElastic: function(t, e, n, r, i) {
        var s = 1.70158
          , o = 0
          , a = r;
        return 0 == e ? n : 2 == (e /= i / 2) ? n + r : (o = o || i * (.3 * 1.5),
        s = a < Math.abs(r) ? (a = r,
        o / 4) : o / (2 * Math.PI) * Math.asin(r / a),
        e < 1 ? a * Math.pow(2, 10 * --e) * Math.sin((e * i - s) * (2 * Math.PI) / o) * -.5 + n : a * Math.pow(2, -10 * --e) * Math.sin((e * i - s) * (2 * Math.PI) / o) * .5 + r + n)
    },
    easeInBack: function(t, e, n, r, i, s) {
        return r * (e /= i) * e * (((s = null == s ? 1.70158 : s) + 1) * e - s) + n
    },
    easeOutBack: function(t, e, n, r, i, s) {
        return r * ((e = e / i - 1) * e * (((s = null == s ? 1.70158 : s) + 1) * e + s) + 1) + n
    },
    easeInOutBack: function(t, e, n, r, i, s) {
        return null == s && (s = 1.70158),
        (e /= i / 2) < 1 ? r / 2 * (e * e * ((1 + (s *= 1.525)) * e - s)) + n : r / 2 * ((e -= 2) * e * ((1 + (s *= 1.525)) * e + s) + 2) + n
    },
    easeInBounce: function(t, e, n, r, i) {
        return r - jQuery.easing.easeOutBounce(t, i - e, 0, r, i) + n
    },
    easeOutBounce: function(t, e, n, r, i) {
        return (e /= i) < 1 / 2.75 ? r * (7.5625 * e * e) + n : e < 2 / 2.75 ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + n : e < 2.5 / 2.75 ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + n : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + n
    },
    easeInOutBounce: function(t, e, n, r, i) {
        return e < i / 2 ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, r, i) + n : .5 * jQuery.easing.easeOutBounce(t, 2 * e - i, 0, r, i) + .5 * r + n
    }
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function n(t, e) {
        t.prototype = Object.create(e.prototype),
        (t.prototype.constructor = t).__proto__ = e
    }
    function Z(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function N(t) {
        return "string" == typeof t
    }
    function h(t) {
        return "function" == typeof t
    }
    function $(t) {
        return "number" == typeof t
    }
    function s(t) {
        return void 0 === t
    }
    function k(t) {
        return "object" == typeof t
    }
    function z(t) {
        return !1 !== t
    }
    function a() {
        return "undefined" != typeof window
    }
    function J(t) {
        return h(t) || N(t)
    }
    function r(t) {
        return (Kt = Wt(t, o)) && m
    }
    function tt(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }
    function et(t, e) {
        return !e && console.warn(t)
    }
    function g(t, e) {
        return t && (o[t] = e) && Kt && (Kt[t] = e) || o
    }
    function _() {
        return 0
    }
    function nt(t) {
        var e, n, r = t[0];
        if (k(r) || h(r) || (t = [t]),
        !(e = (r._gsap || {}).harness)) {
            for (n = Be.length; n-- && !Be[n].targetTest(r); )
                ;
            e = Be[n]
        }
        for (n = t.length; n--; )
            t[n] && (t[n]._gsap || (t[n]._gsap = new Je(t[n],e))) || t.splice(n, 1);
        return t
    }
    function rt(t) {
        return t._gsap || nt(P(t))[0]._gsap
    }
    function v(t, e, n) {
        return (n = t[e]) && h(n) ? t[e]() : s(n) && t.getAttribute && t.getAttribute(e) || n
    }
    function p(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }
    function D(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function E(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }
    function it(t, e) {
        var n = e.charAt(0)
          , e = parseFloat(e.substr(2));
        return t = parseFloat(t),
        "+" === n ? t + e : "-" === n ? t - e : "*" === n ? t * e : t / e
    }
    function st() {
        var t, e, n = Ie.length, r = Ie.slice(0);
        for (De = {},
        t = Ie.length = 0; t < n; t++)
            (e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }
    function y(t, e, n, r) {
        Ie.length && !L && st(),
        t.render(e, n, r || L && e < 0 && (t._initted || t._startAt)),
        Ie.length && !L && st()
    }
    function x(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(Ee).length < 2 ? e : N(t) ? t.trim() : t
    }
    function w(t) {
        return t
    }
    function I(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }
    function b(t, e) {
        for (var n in e)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (t[n] = k(e[n]) ? b(t[n] || (t[n] = {}), e[n]) : e[n]);
        return t
    }
    function ot(t, e) {
        var n, r = {};
        for (n in t)
            n in e || (r[n] = t[n]);
        return r
    }
    function at(t) {
        var r, e = t.parent || F, n = t.keyframes ? (r = A(t.keyframes),
        function(t, e) {
            for (var n in e)
                n in t || "duration" === n && r || "ease" === n || (t[n] = e[n])
        }
        ) : I;
        if (z(t.inherit))
            for (; e; )
                n(t, e.vars.defaults),
                e = e.parent || e._dp;
        return t
    }
    function T(t, e, n, r, i) {
        void 0 === n && (n = "_first");
        var s, o = t[r = void 0 === r ? "_last" : r];
        if (i)
            for (s = e[i]; o && o[i] > s; )
                o = o._prev;
        o ? (e._next = o._next,
        o._next = e) : (e._next = t[n],
        t[n] = e),
        e._next ? e._next._prev = e : t[r] = e,
        e._prev = o,
        e.parent = e._dp = t
    }
    function S(t, e, n, r) {
        void 0 === n && (n = "_first"),
        void 0 === r && (r = "_last");
        var i = e._prev
          , s = e._next;
        i ? i._next = s : t[n] === e && (t[n] = s),
        s ? s._prev = i : t[r] === e && (t[r] = i),
        e._next = e._prev = e.parent = null
    }
    function ut(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
        t._act = 0
    }
    function M(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var n = t; n; )
                n._dirty = 1,
                n = n.parent;
        return t
    }
    function O(t, e, n, r) {
        t._startAt && (L ? t._startAt.revert(Pe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
    }
    function lt(t) {
        return t._repeat ? qt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }
    function ct(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }
    function ht(t) {
        t._end = E(t._start + (t._tDur / Math.abs(t._ts || t._rts || Y) || 0))
    }
    function ft(t, e) {
        var n = t._dp;
        n && n.smoothChildTiming && t._ts && (t._start = E(n._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
        ht(t),
        n._dirty || M(n, t))
    }
    function pt(t, e) {
        var n;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (n = ct(t.rawTime(), e),
        !e._dur || Vt(0, e.totalDuration(), n) - e._tTime > Y) && e.render(n, !0),
        M(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (n = t; n._dp; )
                    0 <= n.rawTime() && n.totalTime(n._tTime),
                    n = n._dp;
            t._zTime = -Y
        }
    }
    function C(t, e, n, r) {
        return e.parent && ut(e),
        e._start = E(($(n) ? n : n || t !== F ? l(t, n, e) : t._time) + e._delay),
        e._end = E(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
        T(t, e, "_first", "_last", t._sort ? "_start" : 0),
        jt(e) || (t._recent = e),
        r || pt(t, e),
        t._ts < 0 && ft(t, t._tTime),
        t
    }
    function dt(t, e) {
        (o.ScrollTrigger || tt("scrollTrigger", e)) && o.ScrollTrigger.create(e, t)
    }
    function mt(t, e, n, r, i) {
        return on(t, e, i),
        !t._initted || !n && t._pt && !L && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && $t !== d.frame && (Ie.push(t),
        t._lazy = [i, r])
    }
    function gt(t, e, n, r) {
        var i = t._repeat
          , e = E(e) || 0
          , s = t._tTime / t._tDur;
        return s && !r && (t._time *= e / t._dur),
        t._dur = e,
        t._tDur = i ? i < 0 ? 1e10 : E(e * (i + 1) + t._rDelay * i) : e,
        0 < s && !r && ft(t, t._tTime = t._tDur * s),
        t.parent && ht(t),
        n || M(t.parent, t),
        t
    }
    function _t(t) {
        return t instanceof V ? M(t) : gt(t, t._dur)
    }
    function vt(t, e, n) {
        var r, i, s = $(e[1]), o = (s ? 2 : 1) + (t < 2 ? 0 : 1), a = e[o];
        if (s && (a.duration = e[1]),
        a.parent = n,
        t) {
            for (r = a,
            i = n; i && !("immediateRender"in r); )
                r = i.vars.defaults || {},
                i = z(i.vars.inherit) && i.parent;
            a.immediateRender = z(r.immediateRender),
            t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
        }
        return new H(e[0],a,e[1 + o])
    }
    function yt(t, e) {
        return t || 0 === t ? e(t) : e
    }
    function X(t, e) {
        return N(t) && (e = Ce.exec(t)) ? e[1] : ""
    }
    function xt(t, e) {
        return t && k(t) && "length"in t && (!e && !t.length || t.length - 1 in t && k(t[0])) && !t.nodeType && t !== c
    }
    function wt(n) {
        return n = P(n)[0] || et("Invalid scope") || {},
        function(t) {
            var e = n.current || n.nativeElement || n;
            return P(t, e.querySelectorAll ? e : e === n ? et("Invalid scope") || Gt.createElement("div") : n)
        }
    }
    function bt(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }
    function Tt(t) {
        var p, d, m, g, _, v, y, x, w;
        return h(t) ? t : (p = k(t) ? t : {
            each: t
        },
        d = Ke(p.ease),
        m = p.from || 0,
        g = parseFloat(p.base) || 0,
        _ = {},
        t = 0 < m && m < 1,
        v = isNaN(m) || t,
        y = p.axis,
        N(w = x = m) ? x = w = {
            center: .5,
            edges: .5,
            end: 1
        }[m] || 0 : !t && v && (x = m[0],
        w = m[1]),
        function(t, e, n) {
            var r, i, s, o, a, u, l, c, h = (n || p).length, f = _[h];
            if (!f) {
                if (!(c = "auto" === p.grid ? 0 : (p.grid || [1, B])[1])) {
                    for (u = -B; u < (u = n[c++].getBoundingClientRect().left) && c < h; )
                        ;
                    c < h && c--
                }
                for (f = _[h] = [],
                r = v ? Math.min(c, h) * x - .5 : m % c,
                i = c === B ? 0 : v ? h * w / c - .5 : m / c | 0,
                l = B,
                a = u = 0; a < h; a++)
                    o = a % c - r,
                    s = i - (a / c | 0),
                    f[a] = o = y ? Math.abs("y" === y ? s : o) : ye(o * o + s * s),
                    u < o && (u = o),
                    o < l && (l = o);
                "random" === m && bt(f),
                f.max = u - l,
                f.min = l,
                f.v = h = (parseFloat(p.amount) || parseFloat(p.each) * (h < c ? h - 1 : y ? "y" === y ? h / c : c : Math.max(c, h / c)) || 0) * ("edges" === m ? -1 : 1),
                f.b = h < 0 ? g - h : g,
                f.u = X(p.amount || p.each) || 0,
                d = d && h < 0 ? Ge(d) : d
            }
            return h = (f[t] - f.min) / f.max || 0,
            E(f.b + (d ? d(h) : h) * f.v) + f.u
        }
        )
    }
    function St(n) {
        var r = Math.pow(10, ((n + "").split(".")[1] || "").length);
        return function(t) {
            var e = E(Math.round(parseFloat(t) / n) * n * r);
            return (e - e % 1) / r + ($(t) ? 0 : X(t))
        }
    }
    function Mt(u, t) {
        var l, c, e = A(u);
        return !e && k(u) && (l = e = u.radius || B,
        u.values ? (u = P(u.values),
        (c = !$(u[0])) && (l *= l)) : u = St(u.increment)),
        yt(t, e ? h(u) ? function(t) {
            return c = u(t),
            Math.abs(c - t) <= l ? c : t
        }
        : function(t) {
            for (var e, n, r = parseFloat(c ? t.x : t), i = parseFloat(c ? t.y : 0), s = B, o = 0, a = u.length; a--; )
                (e = c ? (e = u[a].x - r) * e + (n = u[a].y - i) * n : Math.abs(u[a] - r)) < s && (s = e,
                o = a);
            return o = !l || s <= l ? u[o] : t,
            c || o === t || $(t) ? o : o + X(t)
        }
        : St(u))
    }
    function Ot(t, e, n, r) {
        return yt(A(t) ? !e : !0 === n ? !!(n = 0) : !r, function() {
            return A(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
        })
    }
    function kt(e, n, t) {
        return yt(t, function(t) {
            return e[~~n(t)]
        })
    }
    function Et(t) {
        for (var e, n, r, i, s = 0, o = ""; ~(e = t.indexOf("random(", s)); )
            r = t.indexOf(")", e),
            i = "[" === t.charAt(e + 7),
            n = t.substr(e + 7, r - e - 7).match(i ? Ee : Te),
            o += t.substr(s, e - s) + Ot(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5),
            s = r + 1;
        return o + t.substr(s, t.length - s)
    }
    function Ct(t, e, n) {
        var r, i, s, o = t.labels, a = B;
        for (r in o)
            (i = o[r] - e) < 0 == !!n && i && a > (i = Math.abs(i)) && (s = r,
            a = i);
        return s
    }
    function At(t) {
        return ut(t),
        t.scrollTrigger && t.scrollTrigger.kill(!!L),
        t.progress() < 1 && j(t, "onInterrupt"),
        t
    }
    function Pt(t) {
        if (t)
            if (t = !t.name && t.default || t,
            a() || t.headless) {
                var e = t.name
                  , n = h(t)
                  , n = e && !n && t.init ? function() {
                    this._props = []
                }
                : t
                  , r = {
                    init: _,
                    render: Tn,
                    add: hn,
                    kill: Mn,
                    modifier: Sn,
                    rawVars: 0
                }
                  , i = {
                    targetTest: 0,
                    get: 0,
                    getSetter: yn,
                    aliases: {},
                    register: 0
                };
                if (He(),
                t !== n) {
                    if (q[e])
                        return;
                    I(n, I(ot(t, r), i)),
                    Wt(n.prototype, Wt(r, ot(t, i))),
                    q[n.prop = e] = n,
                    t.targetTest && (Be.push(n),
                    ze[e] = 1),
                    e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                g(e, n),
                t.register && t.register(m, n, U)
            } else
                We.push(t)
    }
    function Rt(t, e, n) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * f + .5 | 0
    }
    function zt(t, e, n) {
        var r, i, s, o, a, u, l, c = t ? $(t) ? [t >> 16, t >> 8 & f, t & f] : 0 : qe.black;
        if (!c) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            qe[t])
                c = qe[t];
            else if ("#" === t.charAt(0)) {
                if (9 === (t = t.length < 6 ? "#" + (r = t.charAt(1)) + r + (i = t.charAt(2)) + i + (s = t.charAt(3)) + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "") : t).length)
                    return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & f, c & f, parseInt(t.substr(7), 16) / 255];
                c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & f, t & f]
            } else if ("hsl" === t.substr(0, 3))
                if (c = l = t.match(Te),
                e) {
                    if (~t.indexOf("="))
                        return c = t.match(Se),
                        n && c.length < 4 && (c[3] = 1),
                        c
                } else
                    o = +c[0] % 360 / 360,
                    a = c[1] / 100,
                    r = 2 * (u = c[2] / 100) - (i = u <= .5 ? u * (a + 1) : u + a - u * a),
                    3 < c.length && (c[3] *= 1),
                    c[0] = Rt(o + 1 / 3, r, i),
                    c[1] = Rt(o, r, i),
                    c[2] = Rt(o - 1 / 3, r, i);
            else
                c = t.match(Te) || qe.transparent;
            c = c.map(Number)
        }
        return e && !l && (r = c[0] / f,
        i = c[1] / f,
        s = c[2] / f,
        u = ((t = Math.max(r, i, s)) + (e = Math.min(r, i, s))) / 2,
        t === e ? o = a = 0 : (l = t - e,
        a = .5 < u ? l / (2 - t - e) : l / (t + e),
        o = t === r ? (i - s) / l + (i < s ? 6 : 0) : t === i ? (s - r) / l + 2 : (r - i) / l + 4,
        o *= 60),
        c[0] = ~~(o + .5),
        c[1] = ~~(100 * a + .5),
        c[2] = ~~(100 * u + .5)),
        n && c.length < 4 && (c[3] = 1),
        c
    }
    function It(t) {
        var e = []
          , n = []
          , r = -1;
        return t.split(je).forEach(function(t) {
            t = t.match(Me) || [];
            e.push.apply(e, t),
            n.push(r += t.length + 1)
        }),
        e.c = n,
        e
    }
    function Dt(t, e, n) {
        var r, i, s, o, a = "", u = (t + a).match(je), l = e ? "hsla(" : "rgba(", c = 0;
        if (!u)
            return t;
        if (u = u.map(function(t) {
            return (t = zt(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        n && (s = It(t),
        (r = n.c).join(a) !== s.c.join(a)))
            for (o = (i = t.replace(je, "1").split(Me)).length - 1; c < o; c++)
                a += i[c] + (~r.indexOf(c) ? u.shift() || l + "0,0,0,0)" : (s.length ? s : u.length ? u : n).shift());
        if (!i)
            for (o = (i = t.split(je)).length - 1; c < o; c++)
                a += i[c] + u[c];
        return a + i[o]
    }
    function Lt(t) {
        var e = t.join(" ");
        if (je.lastIndex = 0,
        je.test(e))
            return e = Ve.test(e),
            t[1] = Dt(t[1], e),
            t[0] = Dt(t[0], e, It(t[1])),
            !0
    }
    function Ft(t, e) {
        for (var n, r = t._first; r; )
            r instanceof V ? Ft(r, e) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === e || (r.timeline ? Ft(r.timeline, e) : (n = r._ease,
            r._ease = r._yEase,
            r._yEase = n,
            r._yoyo = e)),
            r = r._next
    }
    function Bt(t, e, n, r) {
        var i, s = {
            easeIn: e,
            easeOut: n = void 0 === n ? function(t) {
                return 1 - e(1 - t)
            }
            : n,
            easeInOut: r = void 0 === r ? function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            }
            : r
        };
        p(t, function(t) {
            for (var e in R[t] = o[t] = s,
            R[i = t.toLowerCase()] = n,
            s)
                R[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = R[t + "." + e] = s[e]
        })
    }
    function Yt(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }
    function Nt(n, t, e) {
        function r(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * we((t - s) * o) + 1
        }
        var i = 1 <= t ? t : 1
          , s = (o = (e || (n ? .3 : .45)) / (t < 1 ? t : 1)) / ge * (Math.asin(1 / i) || 0)
          , e = "out" === n ? r : "in" === n ? function(t) {
            return 1 - r(1 - t)
        }
        : Yt(r)
          , o = ge / o;
        return e.config = function(t, e) {
            return Nt(n, t, e)
        }
        ,
        e
    }
    function Xt(e, n) {
        function r(t) {
            return t ? --t * t * ((n + 1) * t + n) + 1 : 0
        }
        void 0 === n && (n = 1.70158);
        var t = "out" === e ? r : "in" === e ? function(t) {
            return 1 - r(1 - t)
        }
        : Yt(r);
        return t.config = function(t) {
            return Xt(e, t)
        }
        ,
        t
    }
    function Wt(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    function qt(t, e) {
        return e = Math.floor(t /= e),
        t && e === t ? e - 1 : e
    }
    function jt(t) {
        return "isFromStart" === (t = t.data) || "isStart" === t
    }
    function l(t, e, n) {
        var r, i, s, o = t.labels, a = t._recent || Ne, u = t.duration() >= B ? a.endTime(!1) : t._dur;
        return N(e) && (isNaN(e) || e in o) ? (i = e.charAt(0),
        s = "%" === e.substr(-1),
        r = e.indexOf("="),
        "<" === i || ">" === i ? (0 <= r && (e = e.replace(/=/, "")),
        ("<" === i ? a._start : a.endTime(0 <= a._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (r < 0 ? a : n).totalDuration() / 100 : 1)) : r < 0 ? (e in o || (o[e] = u),
        o[e]) : (i = parseFloat(e.charAt(r - 1) + e.substr(r + 1)),
        s && n && (i = i / 100 * (A(n) ? n[0] : n).totalDuration()),
        1 < r ? l(t, e.substr(0, r - 1), n) + i : u + i)) : null == e ? u : +e
    }
    function Vt(t, e, n) {
        return n < t ? t : e < n ? e : n
    }
    function Ht(e, t, n, r, i) {
        var s = t - e
          , o = r - n;
        return yt(i, function(t) {
            return n + ((t - e) / s * o || 0)
        })
    }
    var Ut, L, u, F, c, Qt, Gt, Kt, Zt, $t, Jt, te, ee, ne, re, ie, se, oe, ae, ue, le, ce, he, fe, pe, de, W = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, me = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, B = 1e8, Y = 1 / B, ge = 2 * Math.PI, _e = ge / 4, ve = 0, ye = Math.sqrt, xe = Math.cos, we = Math.sin, be = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , A = Array.isArray, Te = /(?:-?\.?\d|\.)+/gi, Se = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Me = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Oe = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, ke = /[+-]=-?[.\d]+/, Ee = /[^,'"\[\]\s]+/gi, Ce = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, o = {}, Ae = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    }, Pe = {
        suppressEvents: !0,
        kill: !1
    }, Re = {
        suppressEvents: !0
    }, ze = {}, Ie = [], De = {}, q = {}, Le = {}, Fe = 30, Be = [], Ye = "", Ne = {
        _start: 0,
        endTime: _,
        totalDuration: _
    }, Xe = [].slice, P = function(t, e, n) {
        return u && !e && u.selector ? u.selector(t) : !N(t) || n || !Qt && He() ? A(t) ? (r = n,
        void 0 === i && (i = []),
        t.forEach(function(t) {
            return N(t) && !r || xt(t, 1) ? i.push.apply(i, P(t)) : i.push(t)
        }) || i) : xt(t) ? Xe.call(t, 0) : t ? [t] : [] : Xe.call((e || Gt).querySelectorAll(t), 0);
        var r, i
    }, j = function(t, e, n) {
        var r = t.vars
          , i = r[e]
          , s = u
          , o = t._ctx;
        if (i)
            return e = r[e + "Params"],
            r = r.callbackScope || t,
            n && Ie.length && st(),
            o && (u = o),
            t = e ? i.apply(r, e) : i.call(r),
            u = s,
            t
    }, We = [], f = 255, qe = {
        aqua: [0, f, f],
        lime: [0, f, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, f],
        navy: [0, 0, 128],
        white: [f, f, f],
        olive: [128, 128, 0],
        yellow: [f, f, 0],
        orange: [f, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [f, 0, 0],
        pink: [f, 192, 203],
        cyan: [0, f, f],
        transparent: [f, f, f, 0]
    }, je = function() {
        var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in qe)
            e += "|" + t + "\\b";
        return new RegExp(e + ")","gi")
    }(), Ve = /hsl[a]?\(/, d = (oe = Date.now,
    ae = 500,
    ue = 33,
    le = oe(),
    ce = le,
    fe = he = 1e3 / 240,
    re = {
        time: 0,
        frame: 0,
        tick: function() {
            Ze(!0)
        },
        deltaRatio: function(t) {
            return ie / (1e3 / (t || 60))
        },
        wake: function() {
            Zt && (!Qt && a() && (c = Qt = window,
            Gt = c.document || {},
            o.gsap = m,
            (c.gsapVersions || (c.gsapVersions = [])).push(m.version),
            r(Kt || c.GreenSockGlobals || !c.gsap && c || {}),
            We.forEach(Pt)),
            ne = "undefined" != typeof requestAnimationFrame && requestAnimationFrame,
            te && re.sleep(),
            ee = ne || function(t) {
                return setTimeout(t, fe - 1e3 * re.time + 1 | 0)
            }
            ,
            Jt = 1,
            Ze(2))
        },
        sleep: function() {
            (ne ? cancelAnimationFrame : clearTimeout)(te),
            Jt = 0,
            ee = _
        },
        lagSmoothing: function(t, e) {
            ae = t || 1 / 0,
            ue = Math.min(e || 33, ae)
        },
        fps: function(t) {
            he = 1e3 / (t || 240),
            fe = 1e3 * re.time + he
        },
        add: function(i, t, e) {
            var s = t ? function(t, e, n, r) {
                i(t, e, n, r),
                re.remove(s)
            }
            : i;
            return re.remove(i),
            pe[e ? "unshift" : "push"](s),
            He(),
            s
        },
        remove: function(t, e) {
            ~(e = pe.indexOf(t)) && pe.splice(e, 1) && e <= se && se--
        },
        _listeners: pe = []
    }), He = function() {
        return !Jt && d.wake()
    }, R = {}, Ue = /^[\d.\-M][\d.\-,\s]/, Qe = /["']/g, Ge = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    }, Ke = function(t, e) {
        return t && (h(t) ? t : R[t] || (s = ((t = t) + "").split("("),
        (o = R[s[0]]) && 1 < s.length && o.config ? o.config.apply(null, ~t.indexOf("{") ? [function(t) {
            for (var e, n, r, i = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, u = s.length; a < u; a++)
                n = s[a],
                e = a !== u - 1 ? n.lastIndexOf(",") : n.length,
                r = n.substr(0, e),
                i[o] = isNaN(r) ? r.replace(Qe, "").trim() : +r,
                o = n.substr(e + 1).trim();
            return i
        }(s[1])] : (n = (s = t).indexOf("(") + 1,
        r = s.indexOf(")"),
        i = s.indexOf("(", n),
        s.substring(n, ~i && i < r ? s.indexOf(")", r + 1) : r).split(",").map(x))) : R._CE && Ue.test(t) ? R._CE("", t) : o)) || e;
        var n, r, i, s, o
    };
    function Ze(t) {
        var e, n, r, i = oe() - ce, s = !0 === t;
        if ((ae < i || i < 0) && (le += i - ue),
        (0 < (i = (n = (ce += i) - le) - fe) || s) && (r = ++re.frame,
        ie = n - 1e3 * re.time,
        re.time = n /= 1e3,
        fe += i + (he <= i ? 4 : he - i),
        e = 1),
        s || (te = ee(Ze)),
        e)
            for (se = 0; se < pe.length; se++)
                pe[se](n, ie, r, t)
    }
    function $e(t) {
        return t < 1 / 2.75 ? de * t * t : t < .7272727272727273 ? de * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? de * (t -= 2.25 / 2.75) * t + .9375 : de * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    p("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var n = e < 5 ? e + 1 : e;
        Bt(t + ",Power" + (n - 1), e ? function(t) {
            return Math.pow(t, n)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, n)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        })
    }),
    R.Linear.easeNone = R.none = R.Linear.easeIn,
    Bt("Elastic", Nt("in"), Nt("out"), Nt()),
    de = 7.5625,
    Bt("Bounce", function(t) {
        return 1 - $e(1 - t)
    }, $e),
    Bt("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Bt("Circ", function(t) {
        return -(ye(1 - t * t) - 1)
    }),
    Bt("Sine", function(t) {
        return 1 === t ? 1 : 1 - xe(t * _e)
    }),
    Bt("Back", Xt("in"), Xt("out"), Xt()),
    R.SteppedEase = R.steps = o.SteppedEase = {
        config: function(t, e) {
            var n = 1 / (t = void 0 === t ? 1 : t)
              , r = t + (e ? 0 : 1)
              , i = e ? 1 : 0;
            return function(t) {
                return ((r * Vt(0, .99999999, t) | 0) + i) * n
            }
        }
    },
    me.ease = R["quad.out"],
    p("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return Ye += t + "," + t + "Params,"
    });
    var Je = function(t, e) {
        this.id = ve++,
        (t._gsap = this).target = t,
        this.harness = e,
        this.get = e ? e.get : v,
        this.set = e ? e.getSetter : yn
    }
      , tn = ((e = en.prototype).delay = function(t) {
        return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
        this._delay = t,
        this) : this._delay
    }
    ,
    e.duration = function(t) {
        return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(t) {
        return arguments.length ? (this._dirty = 0,
        gt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(t, e) {
        if (He(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (ft(this, t),
            n._dp && !n.parent && pt(n, this); n && n.parent; )
                n.parent._time !== n._start + (0 <= n._ts ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && C(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Y || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
        y(this, t, e)),
        this
    }
    ,
    e.time = function(t, e) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + lt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
    }
    ,
    e.totalProgress = function(t, e) {
        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : 0 < this.rawTime() ? 1 : 0
    }
    ,
    e.progress = function(t, e) {
        return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + lt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : 0 < this.rawTime() ? 1 : 0
    }
    ,
    e.iteration = function(t, e) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? qt(this._tTime, n) + 1 : 1
    }
    ,
    e.timeScale = function(t, e) {
        if (!arguments.length)
            return this._rts === -Y ? 0 : this._rts;
        if (this._rts === t)
            return this;
        for (var n = this.parent && this._ts ? ct(this.parent._time, this) : this._tTime, t = (this._rts = +t || 0,
        this._ts = this._ps || t === -Y ? 0 : this._rts,
        this.totalTime(Vt(-Math.abs(this._delay), this._tDur, n), !1 !== e),
        ht(this),
        this), r = t.parent; r && r.parent; )
            r._dirty = 1,
            r.totalDuration(),
            r = r.parent;
        return t
    }
    ,
    e.paused = function(t) {
        return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (He(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Y && (this._tTime -= Y)))),
        this) : this._ps
    }
    ,
    e.startTime = function(t) {
        var e;
        return arguments.length ? (this._start = t,
        !(e = this.parent || this._dp) || !e._sort && this.parent || C(e, this, t - this._delay),
        this) : this._start
    }
    ,
    e.endTime = function(t) {
        return this._start + (z(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(t) {
        var e = this.parent || this._dp;
        return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ct(e.rawTime(t), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(t) {
        var e = L;
        return L = t = void 0 === t ? Re : t,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t),
        this.totalTime(-.01, t.suppressEvents)),
        "nested" !== this.data && !1 !== t.kill && this.kill(),
        L = e,
        this
    }
    ,
    e.globalTime = function(t) {
        for (var e = this, n = arguments.length ? t : e.rawTime(); e; )
            n = e._start + n / (Math.abs(e._ts) || 1),
            e = e._dp;
        return !this.parent && this._sat ? this._sat.globalTime(t) : n
    }
    ,
    e.repeat = function(t) {
        return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
        _t(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(t) {
        var e;
        return arguments.length ? (e = this._time,
        this._rDelay = t,
        _t(this),
        e ? this.time(e) : this) : this._rDelay
    }
    ,
    e.yoyo = function(t) {
        return arguments.length ? (this._yoyo = t,
        this) : this._yoyo
    }
    ,
    e.seek = function(t, e) {
        return this.totalTime(l(this, t), z(e))
    }
    ,
    e.restart = function(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, z(e))
    }
    ,
    e.play = function(t, e) {
        return null != t && this.seek(t, e),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(t, e) {
        return null != t && this.seek(t || this.totalDuration(), e),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(t, e) {
        return null != t && this.seek(t, e),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(t) {
        return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Y : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -Y,
        this
    }
    ,
    e.isActive = function() {
        var t = this.parent || this._dp
          , e = this._start;
        return !(t && !(this._ts && this._initted && t.isActive() && (t = t.rawTime(!0)) >= e && t < this.endTime(!0) - Y))
    }
    ,
    e.eventCallback = function(t, e, n) {
        var r = this.vars;
        return 1 < arguments.length ? (e ? (r[t] = e,
        n && (r[t + "Params"] = n),
        "onUpdate" === t && (this._onUpdate = e)) : delete r[t],
        this) : r[t]
    }
    ,
    e.then = function(r) {
        var i = this;
        return new Promise(function(e) {
            function t() {
                var t = i.then;
                i.then = null,
                h(n) && (n = n(i)) && (n.then || n === i) && (i.then = t),
                e(n),
                i.then = t
            }
            var n = h(r) ? r : w;
            i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? t() : i._prom = t
        }
        )
    }
    ,
    e.kill = function() {
        At(this)
    }
    ,
    en);
    function en(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        gt(this, +t.duration, 1, 1),
        this.data = t.data,
        u && (this._ctx = u).data.push(this),
        Jt || d.wake()
    }
    I(tn.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -Y,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    n(rn, nn = tn),
    (e = rn.prototype).to = function(t, e, n) {
        return vt(0, arguments, this),
        this
    }
    ,
    e.from = function(t, e, n) {
        return vt(1, arguments, this),
        this
    }
    ,
    e.fromTo = function(t, e, n, r) {
        return vt(2, arguments, this),
        this
    }
    ,
    e.set = function(t, e, n) {
        return e.duration = 0,
        e.parent = this,
        at(e).repeatDelay || (e.repeat = 0),
        e.immediateRender = !!e.immediateRender,
        new H(t,e,l(this, n),1),
        this
    }
    ,
    e.call = function(t, e, n) {
        return C(this, H.delayedCall(0, t, e), n)
    }
    ,
    e.staggerTo = function(t, e, n, r, i, s, o) {
        return n.duration = e,
        n.stagger = n.stagger || r,
        n.onComplete = s,
        n.onCompleteParams = o,
        n.parent = this,
        new H(t,n,l(this, i)),
        this
    }
    ,
    e.staggerFrom = function(t, e, n, r, i, s, o) {
        return n.runBackwards = 1,
        at(n).immediateRender = z(n.immediateRender),
        this.staggerTo(t, e, n, r, i, s, o)
    }
    ,
    e.staggerFromTo = function(t, e, n, r, i, s, o, a) {
        return r.startAt = n,
        at(r).immediateRender = z(r.immediateRender),
        this.staggerTo(t, e, r, i, s, o, a)
    }
    ,
    e.render = function(t, e, n) {
        var r, i, s, o, a, u, l, c, h, f, p = this._time, d = this._dirty ? this.totalDuration() : this._tDur, m = this._dur, g = t <= 0 ? 0 : E(t), _ = this._zTime < 0 != t < 0 && (this._initted || !m);
        if ((g = this !== F && d < g && 0 <= t ? d : g) !== this._tTime || n || _) {
            if (p !== this._time && m && (g += this._time - p,
            t += this._time - p),
            r = g,
            c = this._start,
            a = !(l = this._ts),
            _ && (m || (p = this._zTime),
            !t && e || (this._zTime = t)),
            this._repeat) {
                if (_ = this._yoyo,
                o = m + this._rDelay,
                this._repeat < -1 && t < 0)
                    return this.totalTime(100 * o + t, e, n);
                if (r = E(g % o),
                g === d ? (s = this._repeat,
                r = m) : ((s = ~~(g / o)) && s === g / o && (r = m,
                s--),
                m < r && (r = m)),
                h = qt(this._tTime, o),
                _ && 1 & s && (r = m - r,
                f = 1),
                s !== (h = !p && this._tTime && h !== s && this._tTime - h * o - this._dur <= 0 ? s : h) && !this._lock) {
                    var v = _ && 1 & h
                      , _ = v === (_ && 1 & s)
                      , p = (v = s < h ? !v : v) ? 0 : g % m ? m : g;
                    if (this._lock = 1,
                    this.render(p || (f ? 0 : E(s * o)), e, !m)._lock = 0,
                    this._tTime = g,
                    !e && this.parent && j(this, "onRepeat"),
                    this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                    p && p !== this._time || a != !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (m = this._dur,
                    d = this._tDur,
                    _ && (this._lock = 2,
                    this.render(p = v ? m : -1e-4, !0),
                    this.vars.repeatRefresh) && !f && this.invalidate(),
                    this._lock = 0,
                    !this._ts && !a)
                        return this;
                    Ft(this, f)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, n) {
                var r;
                if (e < n)
                    for (r = t._first; r && r._start <= n; ) {
                        if ("isPause" === r.data && r._start > e)
                            return r;
                        r = r._next
                    }
                else
                    for (r = t._last; r && r._start >= n; ) {
                        if ("isPause" === r.data && r._start < e)
                            return r;
                        r = r._prev
                    }
            }(this, E(p), E(r))) && (g -= r - (r = u._start)),
            this._tTime = g,
            this._time = r,
            this._act = !l,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = t,
            p = 0),
            !p && r && !e && !s && (j(this, "onStart"),
            this._tTime !== g))
                return this;
            if (p <= r && 0 <= t)
                for (y = this._first; y; ) {
                    if (i = y._next,
                    (y._act || r >= y._start) && y._ts && u !== y) {
                        if (y.parent !== this)
                            return this.render(t, e, n);
                        if (y.render(0 < y._ts ? (r - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (r - y._start) * y._ts, e, n),
                        r !== this._time || !this._ts && !a) {
                            u = 0,
                            i && (g += this._zTime = -Y);
                            break
                        }
                    }
                    y = i
                }
            else
                for (var y = this._last, x = t < 0 ? t : r; y; ) {
                    if (i = y._prev,
                    (y._act || x <= y._end) && y._ts && u !== y) {
                        if (y.parent !== this)
                            return this.render(t, e, n);
                        if (y.render(0 < y._ts ? (x - y._start) * y._ts : (y._dirty ? y.totalDuration() : y._tDur) + (x - y._start) * y._ts, e, n || L && (y._initted || y._startAt)),
                        r !== this._time || !this._ts && !a) {
                            u = 0,
                            i && (g += this._zTime = x ? -Y : Y);
                            break
                        }
                    }
                    y = i
                }
            if (u && !e && (this.pause(),
            u.render(p <= r ? 0 : -Y)._zTime = p <= r ? 1 : -1,
            this._ts))
                return this._start = c,
                ht(this),
                this.render(t, e, n);
            this._onUpdate && !e && j(this, "onUpdate", !0),
            !(g === d && this._tTime >= this.totalDuration() || !g && p) || c !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && m || !(g === d && 0 < this._ts || !g && this._ts < 0) || ut(this, 1),
            e) || t < 0 && !p || !g && !p && d || (j(this, g === d && 0 <= t ? "onComplete" : "onReverseComplete", !0),
            !this._prom) || g < d && 0 < this.timeScale() || this._prom()
        }
        return this
    }
    ,
    e.add = function(t, e) {
        var n = this;
        if ($(e) || (e = l(this, e, t)),
        !(t instanceof tn)) {
            if (A(t))
                return t.forEach(function(t) {
                    return n.add(t, e)
                }),
                this;
            if (N(t))
                return this.addLabel(t, e);
            if (!h(t))
                return this;
            t = H.delayedCall(0, t)
        }
        return this !== t ? C(this, t, e) : this
    }
    ,
    e.getChildren = function(t, e, n, r) {
        void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === n && (n = !0),
        void 0 === r && (r = -B);
        for (var i = [], s = this._first; s; )
            s._start >= r && (s instanceof H ? e && i.push(s) : (n && i.push(s),
            t && i.push.apply(i, s.getChildren(!0, e, n)))),
            s = s._next;
        return i
    }
    ,
    e.getById = function(t) {
        for (var e = this.getChildren(1, 1, 1), n = e.length; n--; )
            if (e[n].vars.id === t)
                return e[n]
    }
    ,
    e.remove = function(t) {
        return N(t) ? this.removeLabel(t) : h(t) ? this.killTweensOf(t) : (S(this, t),
        t === this._recent && (this._recent = this._last),
        M(this))
    }
    ,
    e.totalTime = function(t, e) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = E(d.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))),
        nn.prototype.totalTime.call(this, t, e),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    e.addLabel = function(t, e) {
        return this.labels[t] = l(this, e),
        this
    }
    ,
    e.removeLabel = function(t) {
        return delete this.labels[t],
        this
    }
    ,
    e.addPause = function(t, e, n) {
        e = H.delayedCall(0, e || _, n);
        return e.data = "isPause",
        this._hasPause = 1,
        C(this, e, l(this, t))
    }
    ,
    e.removePause = function(t) {
        var e = this._first;
        for (t = l(this, t); e; )
            e._start === t && "isPause" === e.data && ut(e),
            e = e._next
    }
    ,
    e.killTweensOf = function(t, e, n) {
        for (var r = this.getTweensOf(t, n), i = r.length; i--; )
            un !== r[i] && r[i].kill(t, e);
        return this
    }
    ,
    e.getTweensOf = function(t, e) {
        for (var n, r = [], i = P(t), s = this._first, o = $(e); s; )
            s instanceof H ? function(t, e) {
                for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n; )
                    ;
                return r < n
            }(s._targets, i) && (o ? (!un || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && r.push(s) : (n = s.getTweensOf(i, e)).length && r.push.apply(r, n),
            s = s._next;
        return r
    }
    ,
    e.tweenTo = function(t, e) {
        e = e || {};
        var n, r = this, i = l(r, t), s = e.startAt, o = e.onStart, a = e.onStartParams, t = e.immediateRender, u = H.to(r, I({
            ease: e.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: i,
            overwrite: "auto",
            duration: e.duration || Math.abs((i - (s && "time"in s ? s.time : r._time)) / r.timeScale()) || Y,
            onStart: function() {
                var t;
                r.pause(),
                n || (t = e.duration || Math.abs((i - (s && "time"in s ? s.time : r._time)) / r.timeScale()),
                u._dur !== t && gt(u, t, 0, 1).render(u._time, !0, !0),
                n = 1),
                o && o.apply(u, a || [])
            }
        }, e));
        return t ? u.render(0) : u
    }
    ,
    e.tweenFromTo = function(t, e, n) {
        return this.tweenTo(e, I({
            startAt: {
                time: l(this, t)
            }
        }, n))
    }
    ,
    e.recent = function() {
        return this._recent
    }
    ,
    e.nextLabel = function(t) {
        return void 0 === t && (t = this._time),
        Ct(this, l(this, t))
    }
    ,
    e.previousLabel = function(t) {
        return void 0 === t && (t = this._time),
        Ct(this, l(this, t), 1)
    }
    ,
    e.currentLabel = function(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Y)
    }
    ,
    e.shiftChildren = function(t, e, n) {
        void 0 === n && (n = 0);
        for (var r, i = this._first, s = this.labels; i; )
            i._start >= n && (i._start += t,
            i._end += t),
            i = i._next;
        if (e)
            for (r in s)
                s[r] >= n && (s[r] += t);
        return M(this)
    }
    ,
    e.invalidate = function(t) {
        var e = this._first;
        for (this._lock = 0; e; )
            e.invalidate(t),
            e = e._next;
        return nn.prototype.invalidate.call(this, t)
    }
    ,
    e.clear = function(t) {
        void 0 === t && (t = !0);
        for (var e, n = this._first; n; )
            e = n._next,
            this.remove(n),
            n = e;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        M(this)
    }
    ,
    e.totalDuration = function(t) {
        var e, n, r, i = 0, s = this, o = s._last, a = B;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
        if (s._dirty) {
            for (r = s.parent; o; )
                e = o._prev,
                o._dirty && o.totalDuration(),
                a < (n = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1,
                C(s, o, n - o._delay, 1)._lock = 0) : a = n,
                n < 0 && o._ts && (i -= n,
                (!r && !s._dp || r && r.smoothChildTiming) && (s._start += n / s._ts,
                s._time -= n,
                s._tTime -= n),
                s.shiftChildren(-n, !1, -1 / 0),
                a = 0),
                o._end > i && o._ts && (i = o._end),
                o = e;
            gt(s, s === F && s._time > i ? s._time : i, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    rn.updateRoot = function(t) {
        if (F._ts && (y(F, ct(t, F)),
        $t = d.frame),
        d.frame >= Fe) {
            Fe += W.autoSleep || 120;
            var e = F._first;
            if ((!e || !e._ts) && W.autoSleep && d._listeners.length < 2) {
                for (; e && !e._ts; )
                    e = e._next;
                e || d.sleep()
            }
        }
    }
    ;
    var nn, V = rn;
    function rn(t, e) {
        var n;
        return (n = nn.call(this, t = void 0 === t ? {} : t) || this).labels = {},
        n.smoothChildTiming = !!t.smoothChildTiming,
        n.autoRemoveChildren = !!t.autoRemoveChildren,
        n._sort = z(t.sortChildren),
        F && C(t.parent || F, Z(n), e),
        t.reversed && n.reverse(),
        t.paused && n.paused(!0),
        t.scrollTrigger && dt(Z(n), t.scrollTrigger),
        n
    }
    function sn(t, e, n, r, i, s) {
        var o, a, u, l;
        if (q[t] && !1 !== (o = new q[t]).init(i, o.rawVars ? e[t] : function(t, e, n, r, i) {
            if (!k(t = h(t) ? an(t, i, e, n, r) : t) || t.style && t.nodeType || A(t) || be(t))
                return N(t) ? an(t, i, e, n, r) : t;
            var s, o = {};
            for (s in t)
                o[s] = an(t[s], i, e, n, r);
            return o
        }(e[t], r, i, s, n), n, r, s) && (n._pt = a = new U(n._pt,i,t,0,1,o.render,o,0,o.priority),
        n !== Xn))
            for (u = n._ptLookup[n._targets.indexOf(i)],
            l = o._props.length; l--; )
                u[o._props[l]] = a;
        return o
    }
    I(V.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    function on(t, e, n) {
        var r, i, s, o, a, u, l, c, h, f, p, d, m, g = t.vars, _ = g.ease, v = g.startAt, y = g.immediateRender, x = g.lazy, w = g.onUpdate, b = g.runBackwards, T = g.yoyoEase, S = g.keyframes, M = g.autoRevert, O = t._dur, k = t._startAt, E = t._targets, C = t.parent, A = C && "nested" === C.data ? C.vars.targets : E, P = "auto" === t._overwrite && !Ut, R = t.timeline;
        if (t._ease = Ke(_ = !R || S && _ ? _ : "none", me.ease),
        t._yEase = T ? Ge(Ke(!0 === T ? _ : T, me.ease)) : 0,
        T && t._yoyo && !t._repeat && (T = t._yEase,
        t._yEase = t._ease,
        t._ease = T),
        t._from = !R && !!g.runBackwards,
        !R || S && !g.stagger) {
            if (d = (c = E[0] ? rt(E[0]).harness : 0) && g[c.prop],
            r = ot(g, ze),
            k && (k._zTime < 0 && k.progress(1),
            e < 0 && b && y && !M ? k.render(-1, !0) : k.revert(b && O ? Pe : Ae),
            k._lazy = 0),
            v) {
                if (ut(t._startAt = H.set(E, I({
                    data: "isStart",
                    overwrite: !1,
                    parent: C,
                    immediateRender: !0,
                    lazy: !k && z(x),
                    startAt: null,
                    delay: 0,
                    onUpdate: w && function() {
                        return j(t, "onUpdate")
                    }
                    ,
                    stagger: 0
                }, v))),
                t._startAt._dp = 0,
                t._startAt._sat = t,
                e < 0 && (L || !y && !M) && t._startAt.revert(Pe),
                y && O && e <= 0 && n <= 0)
                    return void (e && (t._zTime = e))
            } else if (b && O && !k)
                if (s = I({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: (y = e ? !1 : y) && !k && z(x),
                    immediateRender: y,
                    stagger: 0,
                    parent: C
                }, r),
                d && (s[c.prop] = d),
                ut(t._startAt = H.set(E, s)),
                t._startAt._dp = 0,
                t._startAt._sat = t,
                e < 0 && (L ? t._startAt.revert(Pe) : t._startAt.render(-1, !0)),
                t._zTime = e,
                y) {
                    if (!e)
                        return
                } else
                    on(t._startAt, Y, Y);
            for (t._pt = t._ptCache = 0,
            x = O && z(x) || x && !O,
            i = 0; i < E.length; i++) {
                if (l = (a = E[i])._gsap || nt(E)[i]._gsap,
                t._ptLookup[i] = f = {},
                De[l.id] && Ie.length && st(),
                p = A === E ? i : A.indexOf(a),
                c && !1 !== (h = new c).init(a, d || r, t, p, A) && (t._pt = o = new U(t._pt,a,h.name,0,1,h.render,h,0,h.priority),
                h._props.forEach(function(t) {
                    f[t] = o
                }),
                h.priority) && (u = 1),
                !c || d)
                    for (s in r)
                        q[s] && (h = sn(s, r, t, p, a, A)) ? h.priority && (u = 1) : f[s] = o = hn.call(t, a, s, "get", r[s], p, A, 0, g.stringFilter);
                t._op && t._op[i] && t.kill(a, t._op[i]),
                P && t._pt && (un = t,
                F.killTweensOf(a, f, t.globalTime(e)),
                m = !t.parent,
                un = 0),
                t._pt && x && (De[l.id] = 1)
            }
            u && On(t),
            t._onInit && t._onInit(t)
        }
        t._onUpdate = w,
        t._initted = (!t._op || t._pt) && !m,
        S && e <= 0 && R.render(B, !0, !0)
    }
    function an(t, e, n, r, i) {
        return h(t) ? t.call(e, n, r, i) : N(t) && ~t.indexOf("random(") ? Et(t) : t
    }
    var un, ln, cn, hn = function(t, e, n, r, i, s, o, a, u, l) {
        h(r) && (r = r(i || 0, t, s));
        var c, i = t[e], s = "get" !== n ? n : h(i) ? u ? t[e.indexOf("set") || !h(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : i, n = h(i) ? u ? vn : _n : gn;
        if (!N(r) || "=" !== (r = ~r.indexOf("random(") ? Et(r) : r).charAt(1) || !(c = it(s, r) + (X(s) || 0)) && 0 !== c || (r = c),
        !l || s !== r || ln)
            return isNaN(s * r) || "" === r ? (i || e in t || tt(e, r),
            function(t, e, n, r, i, s, o) {
                var a, u, l, c, h, f = new U(this._pt,t,e,0,1,bn,null,i), p = 0, d = 0;
                for (f.b = n,
                f.e = r,
                n += "",
                (i = ~(r += "").indexOf("random(")) && (r = Et(r)),
                s && (s(s = [n, r], t, e),
                n = s[0],
                r = s[1]),
                a = n.match(Oe) || []; c = Oe.exec(r); )
                    l = c[0],
                    c = r.substring(p, c.index),
                    u ? u = (u + 1) % 5 : "rgba(" === c.substr(-5) && (u = 1),
                    l !== a[d++] && (h = parseFloat(a[d - 1]) || 0,
                    f._pt = {
                        _next: f._pt,
                        p: c || 1 === d ? c : ",",
                        s: h,
                        c: "=" === l.charAt(1) ? it(h, l) - h : parseFloat(l) - h,
                        m: u && u < 4 ? Math.round : 0
                    },
                    p = Oe.lastIndex);
                return f.c = p < r.length ? r.substring(p, r.length) : "",
                f.fp = o,
                (ke.test(r) || i) && (f.e = 0),
                this._pt = f
            }
            .call(this, t, e, s, r, n, a || W.stringFilter, u)) : (c = new U(this._pt,t,e,+s || 0,r - (s || 0),"boolean" == typeof i ? wn : xn,0,n),
            u && (c.fp = u),
            o && c.modifier(o, this, t),
            this._pt = c)
    }, fn = Ye + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", pn = {}, H = (p(fn + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return pn[t] = 1
    }),
    n(i, cn = tn),
    (e = i.prototype).render = function(t, e, n) {
        var r, i, s, o = this._time, a = this._tDur, u = this._dur, l = t < 0, c = a - Y < t && !l ? a : t < Y ? 0 : t;
        if (u) {
            if (c !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != l) {
                if (d = c,
                p = this.timeline,
                this._repeat) {
                    if (h = u + this._rDelay,
                    this._repeat < -1 && l)
                        return this.totalTime(100 * h + t, e, n);
                    if (d = E(c % h),
                    c === a ? (_ = this._repeat,
                    d = u) : ((_ = ~~(c / h)) && _ === E(c / h) && (d = u,
                    _--),
                    u < d && (d = u)),
                    (i = this._yoyo && 1 & _) && (f = this._yEase,
                    d = u - d),
                    y = qt(this._tTime, h),
                    d === o && !n && this._initted && _ === y)
                        return this._tTime = c,
                        this;
                    _ !== y && (p && this._yEase && Ft(p, i),
                    this.vars.repeatRefresh) && !i && !this._lock && this._time !== h && this._initted && (this._lock = n = 1,
                    this.render(E(h * _), !0).invalidate()._lock = 0)
                }
                if (!this._initted) {
                    if (mt(this, l ? t : d, n, e, c))
                        return this._tTime = 0,
                        this;
                    if (!(o === this._time || n && this.vars.repeatRefresh && _ !== y))
                        return this;
                    if (u !== this._dur)
                        return this.render(t, e, n)
                }
                if (this._tTime = c,
                this._time = d,
                !this._act && this._ts && (this._act = 1,
                this._lazy = 0),
                this.ratio = s = (f || this._ease)(d / u),
                this._from && (this.ratio = s = 1 - s),
                d && !o && !e && !_ && (j(this, "onStart"),
                this._tTime !== c))
                    return this;
                for (r = this._pt; r; )
                    r.r(s, r.d),
                    r = r._next;
                p && p.render(t < 0 ? t : p._dur * p._ease(d / this._dur), e, n) || this._startAt && (this._zTime = t),
                this._onUpdate && !e && (l && O(this, t, 0, n),
                j(this, "onUpdate")),
                this._repeat && _ !== y && this.vars.onRepeat && !e && this.parent && j(this, "onRepeat"),
                c !== this._tDur && c || this._tTime !== c || (l && !this._onUpdate && O(this, t, 0, !0),
                !t && u || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || ut(this, 1),
                e) || l && !o || !(c || o || i) || (j(this, c === a ? "onComplete" : "onReverseComplete", !0),
                !this._prom) || c < a && 0 < this.timeScale() || this._prom()
            }
        } else {
            var h = this;
            var f = t;
            var p = e;
            var d = n;
            var m, g, _ = h.ratio, v = f < 0 || !f && (!h._start && function t(e) {
                e = e.parent;
                return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || t(e))
            }(h) && (h._initted || !jt(h)) || (h._ts < 0 || h._dp._ts < 0) && !jt(h)) ? 0 : 1, y = h._rDelay, u = 0;
            if (y && h._repeat && (u = Vt(0, h._tDur, f),
            g = qt(u, y),
            h._yoyo && 1 & g && (v = 1 - v),
            g !== qt(h._tTime, y)) && (_ = 1 - v,
            h.vars.repeatRefresh) && h._initted && h.invalidate(),
            v !== _ || L || d || h._zTime === Y || !f && h._zTime) {
                if (h._initted || !mt(h, f, d, p, u)) {
                    for (g = h._zTime,
                    h._zTime = f || (p ? Y : 0),
                    p = p || f && !g,
                    h.ratio = v,
                    h._from && (v = 1 - v),
                    h._time = 0,
                    h._tTime = u,
                    m = h._pt; m; )
                        m.r(v, m.d),
                        m = m._next;
                    f < 0 && O(h, f, 0, !0),
                    h._onUpdate && !p && j(h, "onUpdate"),
                    u && h._repeat && !p && h.parent && j(h, "onRepeat"),
                    (f >= h._tDur || f < 0) && h.ratio === v && (v && ut(h, 1),
                    p || L || (j(h, v ? "onComplete" : "onReverseComplete", !0),
                    h._prom && h._prom()))
                }
            } else
                h._zTime || (h._zTime = f)
        }
        return this
    }
    ,
    e.targets = function() {
        return this._targets
    }
    ,
    e.invalidate = function(t) {
        return t && this.vars.runBackwards || (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(t),
        cn.prototype.invalidate.call(this, t)
    }
    ,
    e.resetTo = function(t, e, n, r, i) {
        Jt || d.wake(),
        this._ts || this.play();
        var s, o = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
        return this._initted || on(this, o),
        s = this._ease(o / this._dur),
        function(t, e, n, r, i, s, o, a) {
            var u, l, c, h, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
            if (!f)
                for (f = t._ptCache[e] = [],
                c = t._ptLookup,
                h = t._targets.length; h--; ) {
                    if ((u = c[h][e]) && u.d && u.d._pt)
                        for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
                            u = u._next;
                    if (!u)
                        return ln = 1,
                        t.vars[e] = "+=0",
                        on(t, o),
                        ln = 0,
                        !a || et(e + " not eligible for reset");
                    f.push(u)
                }
            for (h = f.length; h--; )
                (u = (l = f[h])._pt || l).s = !r && 0 !== r || i ? u.s + (r || 0) + s * u.c : r,
                u.c = n - u.s,
                l.e && (l.e = D(n) + X(l.e)),
                l.b && (l.b = u.s + X(l.b))
        }(this, t, e, n, r, s, o, i) ? this.resetTo(t, e, n, r, 1) : (ft(this, 0),
        this.parent || T(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    e.kill = function(t, e) {
        if (void 0 === e && (e = "all"),
        !(t || e && "all" !== e))
            return this._lazy = this._pt = 0,
            this.parent ? At(this) : this;
        if (this.timeline)
            f = this.timeline.totalDuration(),
            this.timeline.killTweensOf(t, e, un && !0 !== un.vars.overwrite)._first || At(this),
            this.parent && f !== this.timeline.totalDuration() && gt(this, this._dur * this.timeline._tDur / f, 0, 1);
        else {
            var n, r, i, s, o, a, u, l = this._targets, c = t ? P(t) : l, h = this._ptLookup, f = this._pt;
            if ((!e || "all" === e) && function(t, e) {
                for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n]; )
                    ;
                return n < 0
            }(l, c))
                return "all" === e && (this._pt = 0),
                At(this);
            for (n = this._op = this._op || [],
            "all" !== e && (N(e) && (o = {},
            p(e, function(t) {
                return o[t] = 1
            }),
            e = o),
            e = function(t, e) {
                var n, r, i, s, t = t[0] ? rt(t[0]).harness : 0, o = t && t.aliases;
                if (!o)
                    return e;
                for (r in n = Wt({}, e),
                o)
                    if (r in n)
                        for (i = (s = o[r].split(",")).length; i--; )
                            n[s[i]] = n[r];
                return n
            }(l, e)),
            u = l.length; u--; )
                if (~c.indexOf(l[u]))
                    for (o in r = h[u],
                    "all" === e ? (n[u] = e,
                    s = r,
                    i = {}) : (i = n[u] = n[u] || {},
                    s = e),
                    s)
                        (a = r && r[o]) && ("kill"in a.d && !0 !== a.d.kill(o) || S(this, a, "_pt"),
                        delete r[o]),
                        "all" !== i && (i[o] = 1);
            this._initted && !this._pt && f && At(this)
        }
        return this
    }
    ,
    i.to = function(t, e, n) {
        return new i(t,e,n)
    }
    ,
    i.from = function(t, e) {
        return vt(1, arguments)
    }
    ,
    i.delayedCall = function(t, e, n, r) {
        return new i(e,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: n,
            onReverseCompleteParams: n,
            callbackScope: r
        })
    }
    ,
    i.fromTo = function(t, e, n) {
        return vt(2, arguments)
    }
    ,
    i.set = function(t, e) {
        return e.duration = 0,
        e.repeatDelay || (e.repeat = 0),
        new i(t,e)
    }
    ,
    i.killTweensOf = function(t, e, n) {
        return F.killTweensOf(t, e, n)
    }
    ,
    i);
    function i(t, e, n, r) {
        var i;
        "number" == typeof e && (n.duration = e,
        e = n,
        n = null);
        var s, o, a, u, l, c, h, f, r = (i = cn.call(this, r ? e : at(e)) || this).vars, p = r.duration, d = r.delay, m = r.immediateRender, g = r.stagger, _ = r.overwrite, v = r.keyframes, y = r.defaults, x = r.scrollTrigger, w = r.yoyoEase, r = e.parent || F, b = (A(t) || be(t) ? $(t[0]) : "length"in e) ? [t] : P(t);
        if (i._targets = b.length ? nt(b) : et("GSAP target " + t + " not found. https://gsap.com", !W.nullTargetWarn) || [],
        i._ptLookup = [],
        i._overwrite = _,
        v || g || J(p) || J(d)) {
            if (e = i.vars,
            (s = i.timeline = new V({
                data: "nested",
                defaults: y || {},
                targets: r && "nested" === r.data ? r.vars.targets : b
            })).kill(),
            s.parent = s._dp = Z(i),
            s._start = 0,
            g || J(p) || J(d)) {
                if (u = b.length,
                h = g && Tt(g),
                k(g))
                    for (l in g)
                        ~fn.indexOf(l) && ((f = f || {})[l] = g[l]);
                for (o = 0; o < u; o++)
                    (a = ot(e, pn)).stagger = 0,
                    w && (a.yoyoEase = w),
                    f && Wt(a, f),
                    c = b[o],
                    a.duration = +an(p, Z(i), o, c, b),
                    a.delay = (+an(d, Z(i), o, c, b) || 0) - i._delay,
                    !g && 1 === u && a.delay && (i._delay = d = a.delay,
                    i._start += d,
                    a.delay = 0),
                    s.to(c, a, h ? h(o, c, b) : 0),
                    s._ease = R.none;
                s.duration() ? p = d = 0 : i.timeline = 0
            } else if (v) {
                at(I(s.vars.defaults, {
                    ease: "none"
                })),
                s._ease = Ke(v.ease || e.ease || "none");
                var T, S, M, O = 0;
                if (A(v))
                    v.forEach(function(t) {
                        return s.to(b, t, ">")
                    }),
                    s.duration();
                else {
                    for (l in a = {},
                    v)
                        "ease" !== l && "easeEach" !== l && function(t, n, e, r) {
                            var i, s, o = n.ease || r || "power1.inOut";
                            if (A(n))
                                s = e[t] || (e[t] = []),
                                n.forEach(function(t, e) {
                                    return s.push({
                                        t: e / (n.length - 1) * 100,
                                        v: t,
                                        e: o
                                    })
                                });
                            else
                                for (i in n)
                                    s = e[i] || (e[i] = []),
                                    "ease" !== i && s.push({
                                        t: parseFloat(t),
                                        v: n[i],
                                        e: o
                                    })
                        }(l, v[l], a, v.easeEach);
                    for (l in a)
                        for (T = a[l].sort(function(t, e) {
                            return t.t - e.t
                        }),
                        o = O = 0; o < T.length; o++)
                            (M = {
                                ease: (S = T[o]).e,
                                duration: (S.t - (o ? T[o - 1].t : 0)) / 100 * p
                            })[l] = S.v,
                            s.to(b, M, O),
                            O += M.duration;
                    s.duration() < p && s.to({}, {
                        duration: p - s.duration()
                    })
                }
            }
            p || i.duration(p = s.duration())
        } else
            i.timeline = 0;
        return !0 !== _ || Ut || (un = Z(i),
        F.killTweensOf(b),
        un = 0),
        C(r, Z(i), n),
        e.reversed && i.reverse(),
        e.paused && i.paused(!0),
        (m || !p && !v && i._start === E(r._time) && z(m) && function t(e) {
            return !e || e._ts && t(e.parent)
        }(Z(i)) && "nested" !== r.data) && (i._tTime = -Y,
        i.render(Math.max(0, -d) || 0)),
        x && dt(Z(i), x),
        i
    }
    function dn(t, e, n) {
        return t.setAttribute(e, n)
    }
    function mn(t, e, n, r) {
        r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
    }
    I(H.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    p("staggerTo,staggerFrom,staggerFromTo", function(n) {
        H[n] = function() {
            var t = new V
              , e = Xe.call(arguments, 0);
            return e.splice("staggerFromTo" === n ? 5 : 4, 0, 0),
            t[n].apply(t, e)
        }
    });
    var gn = function(t, e, n) {
        return t[e] = n
    }
      , _n = function(t, e, n) {
        return t[e](n)
    }
      , vn = function(t, e, n, r) {
        return t[e](r.fp, n)
    }
      , yn = function(t, e) {
        return h(t[e]) ? _n : s(t[e]) && t.setAttribute ? dn : gn
    }
      , xn = function(t, e) {
        return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
    }
      , wn = function(t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    }
      , bn = function(t, e) {
        var n = e._pt
          , r = "";
        if (!t && e.b)
            r = e.b;
        else if (1 === t && e.e)
            r = e.e;
        else {
            for (; n; )
                r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r,
                n = n._next;
            r += e.c
        }
        e.set(e.t, e.p, r, e)
    }
      , Tn = function(t, e) {
        for (var n = e._pt; n; )
            n.r(t, n.d),
            n = n._next
    }
      , Sn = function(t, e, n, r) {
        for (var i, s = this._pt; s; )
            i = s._next,
            s.p === r && s.modifier(t, e, n),
            s = i
    }
      , Mn = function(t) {
        for (var e, n, r = this._pt; r; )
            n = r._next,
            r.p === t && !r.op || r.op === t ? S(this, r, "_pt") : r.dep || (e = 1),
            r = n;
        return !e
    }
      , On = function(t) {
        for (var e, n, r, i, s = t._pt; s; ) {
            for (e = s._next,
            n = r; n && n.pr > s.pr; )
                n = n._next;
            (s._prev = n ? n._prev : i) ? s._prev._next = s : r = s,
            (s._next = n) ? n._prev = s : i = s,
            s = e
        }
        t._pt = r
    }
      , U = (kn.prototype.modifier = function(t, e, n) {
        this.mSet = this.mSet || this.set,
        this.set = mn,
        this.m = t,
        this.mt = n,
        this.tween = e
    }
    ,
    kn);
    function kn(t, e, n, r, i, s, o, a, u) {
        this.t = e,
        this.s = r,
        this.c = i,
        this.p = n,
        this.r = s || xn,
        this.d = o || this,
        this.set = a || gn,
        this.pr = u || 0,
        (this._next = t) && (t._prev = this)
    }
    function En(t) {
        (Pn[t] || Rn).map(function(t) {
            return t()
        })
    }
    function Cn() {
        var t = Date.now()
          , a = [];
        2 < t - zn && (En("matchMediaInit"),
        An.forEach(function(t) {
            var e, n, r, i, s = t.queries, o = t.conditions;
            for (n in s)
                (e = c.matchMedia(s[n]).matches) && (r = 1),
                e !== o[n] && (o[n] = e,
                i = 1);
            i && (t.revert(),
            r) && a.push(t)
        }),
        En("matchMediaRevert"),
        a.forEach(function(e) {
            return e.onMatch(e, function(t) {
                return e.add(null, t)
            })
        }),
        zn = t,
        En("matchMedia"))
    }
    p(Ye + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ze[t] = 1
    }),
    o.TweenMax = o.TweenLite = H,
    o.TimelineLite = o.TimelineMax = V,
    F = new V({
        sortChildren: !1,
        defaults: me,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    W.stringFilter = Lt;
    var An = []
      , Pn = {}
      , Rn = []
      , zn = 0
      , In = 0
      , Dn = ((e = Ln.prototype).add = function(t, r, i) {
        function e() {
            var t, e = u, n = s.selector;
            return e && e !== s && e.data.push(s),
            i && (s.selector = wt(i)),
            u = s,
            h(t = r.apply(s, arguments)) && s._r.push(t),
            u = e,
            s.selector = n,
            s.isReverted = !1,
            t
        }
        h(t) && (i = r,
        r = t,
        t = h);
        var s = this;
        return s.last = e,
        t === h ? e(s, function(t) {
            return s.add(null, t)
        }) : t ? s[t] = e : e
    }
    ,
    e.ignore = function(t) {
        var e = u;
        u = null,
        t(this),
        u = e
    }
    ,
    e.getTweens = function() {
        var e = [];
        return this.data.forEach(function(t) {
            return t instanceof Ln ? e.push.apply(e, t.getTweens()) : t instanceof H && !(t.parent && "nested" === t.parent.data) && e.push(t)
        }),
        e
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(e, t) {
        var n = this;
        if (e) {
            for (var r, i = n.getTweens(), s = n.data.length; s--; )
                "isFlip" === (r = n.data[s]).data && (r.revert(),
                r.getChildren(!0, !0, !1).forEach(function(t) {
                    return i.splice(i.indexOf(t), 1)
                }));
            for (i.map(function(t) {
                return {
                    g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                    t: t
                }
            }).sort(function(t, e) {
                return e.g - t.g || -1 / 0
            }).forEach(function(t) {
                return t.t.revert(e)
            }),
            s = n.data.length; s--; )
                (r = n.data[s])instanceof V ? "nested" !== r.data && (r.scrollTrigger && r.scrollTrigger.revert(),
                r.kill()) : r instanceof H || !r.revert || r.revert(e);
            n._r.forEach(function(t) {
                return t(e, n)
            }),
            n.isReverted = !0
        } else
            this.data.forEach(function(t) {
                return t.kill && t.kill()
            });
        if (this.clear(),
        t)
            for (var o = An.length; o--; )
                An[o].id === this.id && An.splice(o, 1)
    }
    ,
    e.revert = function(t) {
        this.kill(t || {})
    }
    ,
    Ln);
    function Ln(t, e) {
        this.selector = e && wt(e),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = In++,
        t && this.add(t)
    }
    (e = Bn.prototype).add = function(t, e, n) {
        k(t) || (t = {
            matches: t
        });
        var r, i, s, o = new Dn(0,n || this.scope), a = o.conditions = {};
        for (i in u && !o.selector && (o.selector = u.selector),
        this.contexts.push(o),
        e = o.add("onMatch", e),
        o.queries = t)
            "all" === i ? s = 1 : (r = c.matchMedia(t[i])) && (An.indexOf(o) < 0 && An.push(o),
            (a[i] = r.matches) && (s = 1),
            r.addListener ? r.addListener(Cn) : r.addEventListener("change", Cn));
        return s && e(o, function(t) {
            return o.add(null, t)
        }),
        this
    }
    ,
    e.revert = function(t) {
        this.kill(t || {})
    }
    ,
    e.kill = function(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }
    ;
    var Fn = Bn;
    function Bn(t) {
        this.contexts = [],
        this.scope = t,
        u && u.data.push(this)
    }
    var Yn = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            e.forEach(Pt)
        },
        timeline: function(t) {
            return new V(t)
        },
        getTweensOf: function(t, e) {
            return F.getTweensOf(t, e)
        },
        getProperty: function(r, t, e, n) {
            var i = rt((r = N(r) ? P(r)[0] : r) || {}).get
              , s = e ? w : x;
            return "native" === e && (e = ""),
            r && (t ? s((q[t] && q[t].get || i)(r, t, e, n)) : function(t, e, n) {
                return s((q[t] && q[t].get || i)(r, t, e, n))
            }
            )
        },
        quickSetter: function(n, e, r) {
            var i, s;
            if (1 < (n = P(n)).length)
                return i = n.map(function(t) {
                    return m.quickSetter(t, e, r)
                }),
                s = i.length,
                function(t) {
                    for (var e = s; e--; )
                        i[e](t)
                }
                ;
            n = n[0] || {};
            var o = q[e]
              , a = rt(n)
              , u = a.harness && (a.harness.aliases || {})[e] || e
              , l = o ? function(t) {
                var e = new o;
                Xn._pt = 0,
                e.init(n, r ? t + r : t, Xn, 0, [n]),
                e.render(1, e),
                Xn._pt && Tn(1, Xn)
            }
            : a.set(n, u);
            return o ? l : function(t) {
                return l(n, u, r ? t + r : t, a, 1)
            }
        },
        quickTo: function(t, r, e) {
            function n(t, e, n) {
                return i.resetTo(r, t, e, n)
            }
            var i = m.to(t, Wt(((t = {})[r] = "+=0.1",
            t.paused = !0,
            t), e || {}));
            return n.tween = i,
            n
        },
        isTweening: function(t) {
            return 0 < F.getTweensOf(t, !0).length
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = Ke(t.ease, me.ease)),
            b(me, t || {})
        },
        config: function(t) {
            return b(W, t || {})
        },
        registerEffect: function(t) {
            var r = t.name
              , i = t.effect
              , e = t.plugins
              , s = t.defaults
              , t = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !q[t] && !o[t] && et(r + " effect requires " + t + " plugin.")
            }),
            Le[r] = function(t, e, n) {
                return i(P(t), I(e || {}, s), n)
            }
            ,
            t && (V.prototype[r] = function(t, e, n) {
                return this.add(Le[r](t, k(e) ? e : (n = e) && {}, this), n)
            }
            )
        },
        registerEase: function(t, e) {
            R[t] = Ke(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? Ke(t, e) : R
        },
        getById: function(t) {
            return F.getById(t)
        },
        exportRoot: function(t, e) {
            var n, r, i = new V(t = void 0 === t ? {} : t);
            for (i.smoothChildTiming = z(t.smoothChildTiming),
            F.remove(i),
            i._dp = 0,
            i._time = i._tTime = F._time,
            n = F._first; n; )
                r = n._next,
                !e && !n._dur && n instanceof H && n.vars.onComplete === n._targets[0] || C(i, n, n._start - n._delay),
                n = r;
            return C(F, i, 0),
            i
        },
        context: function(t, e) {
            return t ? new Dn(t,e) : u
        },
        matchMedia: function(t) {
            return new Fn(t)
        },
        matchMediaRefresh: function() {
            return An.forEach(function(t) {
                var e, n, r = t.conditions;
                for (n in r)
                    r[n] && (r[n] = !1,
                    e = 1);
                e && t.revert()
            }) || Cn()
        },
        addEventListener: function(t, e) {
            t = Pn[t] || (Pn[t] = []);
            ~t.indexOf(e) || t.push(e)
        },
        removeEventListener: function(t, e) {
            t = Pn[t],
            e = t && t.indexOf(e);
            0 <= e && t.splice(e, 1)
        },
        utils: {
            wrap: function t(e, n, r) {
                var i = n - e;
                return A(e) ? kt(e, t(0, e.length), n) : yt(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function t(e, n, r) {
                var i = n - e
                  , s = 2 * i;
                return A(e) ? kt(e, t(0, e.length - 1), n) : yt(r, function(t) {
                    return e + (i < (t = (s + (t - e) % s) % s || 0) ? s - t : t)
                })
            },
            distribute: Tt,
            random: Ot,
            snap: Mt,
            normalize: function(t, e, n) {
                return Ht(t, e, 0, 1, n)
            },
            getUnit: X,
            clamp: function(e, n, t) {
                return yt(t, function(t) {
                    return Vt(e, n, t)
                })
            },
            splitColor: zt,
            toArray: P,
            selector: wt,
            mapRange: Ht,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function(e, n) {
                return function(t) {
                    return e(parseFloat(t)) + (n || X(t))
                }
            },
            interpolate: function t(e, n, r, i) {
                var s = isNaN(e + n) ? 0 : function(t) {
                    return (1 - t) * e + t * n
                }
                ;
                if (!s) {
                    var o, a, u, l, c, h = N(e), f = {};
                    if (!0 === r && (i = 1,
                    r = null),
                    h)
                        e = {
                            p: e
                        },
                        n = {
                            p: n
                        };
                    else if (A(e) && !A(n)) {
                        for (u = [],
                        l = e.length,
                        c = l - 2,
                        a = 1; a < l; a++)
                            u.push(t(e[a - 1], e[a]));
                        l--,
                        s = function(t) {
                            t *= l;
                            var e = Math.min(c, ~~t);
                            return u[e](t - e)
                        }
                        ,
                        r = n
                    } else
                        i || (e = Wt(A(e) ? [] : {}, e));
                    if (!u) {
                        for (o in n)
                            hn.call(f, e, o, "get", n[o]);
                        s = function(t) {
                            return Tn(t, f) || (h ? e.p : e)
                        }
                    }
                }
                return yt(r, s)
            },
            shuffle: bt
        },
        install: r,
        effects: Le,
        ticker: d,
        updateRoot: V.updateRoot,
        plugins: q,
        globalTimeline: F,
        core: {
            PropTween: U,
            globals: g,
            Tween: H,
            Timeline: V,
            Animation: tn,
            getCache: rt,
            _removeLinkedListItem: S,
            reverting: function() {
                return L
            },
            context: function(t) {
                return t && u && (u.data.push(t),
                t._ctx = u),
                u
            },
            suppressOverwrites: function(t) {
                return Ut = t
            }
        }
    };
    function Nn(t, c) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, l, e) {
                e._onInit = function(t) {
                    var e, n;
                    if (N(l) && (e = {},
                    p(l, function(t) {
                        return e[t] = 1
                    }),
                    l = e),
                    c) {
                        for (n in e = {},
                        l)
                            e[n] = c(l[n]);
                        l = e
                    }
                    var r, i, s, o = t, a = l, u = o._targets;
                    for (r in a)
                        for (i = u.length; i--; )
                            (s = (s = o._ptLookup[i][r]) && s.d) && (s._pt && (s = function(t, e) {
                                for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e; )
                                    n = n._next;
                                return n
                            }(s, r)),
                            s) && s.modifier && s.modifier(a[r], o, u[i], r)
                }
            }
        }
    }
    p("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Yn[t] = H[t]
    }),
    d.add(V.updateRoot);
    var Xn = Yn.to({}, {
        duration: 0
    })
      , m = Yn.registerPlugin({
        name: "attr",
        init: function(t, e, n, r, i) {
            var s, o, a;
            for (s in this.tween = n,
            e)
                a = t.getAttribute(s) || "",
                (o = this.add(t, "setAttribute", (a || 0) + "", e[s], r, i, 0, 0, s)).op = s,
                o.b = a,
                this._props.push(s)
        },
        render: function(t, e) {
            for (var n = e._pt; n; )
                L ? n.set(n.t, n.p, n.b, n) : n.r(t, n.d),
                n = n._next
        }
    }, {
        name: "endArray",
        init: function(t, e) {
            for (var n = e.length; n--; )
                this.add(t, n, t[n] || 0, e[n], 0, 0, 0, 0, 0, 1)
        }
    }, Nn("roundProps", St), Nn("modifiers"), Nn("snap", Mt)) || Yn;
    function Wn(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function qn(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }
    function jn(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }
    function Vn(t, e) {
        t = e.s + e.c * t;
        e.set(e.t, e.p, ~~(t + (t < 0 ? -.5 : .5)) + e.u, e)
    }
    function Hn(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }
    function Un(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }
    function Qn(t, e, n) {
        return t.style[e] = n
    }
    function Gn(t, e, n) {
        return t.style.setProperty(e, n)
    }
    function Kn(t, e, n) {
        return t._gsap[e] = n
    }
    function Zn(t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n
    }
    function $n(t, e, n, r, i) {
        t = t._gsap;
        t.scaleX = t.scaleY = n,
        t.renderTransform(i, t)
    }
    function Jn(t, e, n, r, i) {
        t = t._gsap;
        t[e] = n,
        t.renderTransform(i, t)
    }
    function tr(t, e) {
        var n = this
          , r = this.target
          , i = r.style
          , s = r._gsap;
        if (t in Vr && i) {
            if (this.tfm = this.tfm || {},
            "transform" === t)
                return $r.transform.split(",").forEach(function(t) {
                    return tr.call(n, t, e)
                });
            if (~(t = $r[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                return n.tfm[t] = ri(r, t)
            }) : this.tfm[t] = s.x ? s[t] : ri(r, t),
            t === K && (this.tfm.zOrigin = s.zOrigin),
            0 <= this.props.indexOf(G))
                return;
            s.svg && (this.svgo = r.getAttribute("data-svg-origin"),
            this.props.push(K, e, "")),
            t = G
        }
        (i || e) && this.props.push(t, e, i[t])
    }
    function er(t) {
        t.translate && (t.removeProperty("translate"),
        t.removeProperty("scale"),
        t.removeProperty("rotate"))
    }
    function nr() {
        for (var t, e = this.props, n = this.target, r = n.style, i = n._gsap, s = 0; s < e.length; s += 3)
            e[s + 1] ? n[e[s]] = e[s + 2] : e[s + 2] ? r[e[s]] = e[s + 2] : r.removeProperty("--" === e[s].substr(0, 2) ? e[s] : e[s].replace(Gr, "-$1").toLowerCase());
        if (this.tfm) {
            for (t in this.tfm)
                i[t] = this.tfm[t];
            i.svg && (i.renderTransform(),
            n.setAttribute("data-svg-origin", this.svgo || "")),
            (s = Or()) && s.isStart || r[G] || (er(r),
            i.zOrigin && r[K] && (r[K] += " " + i.zOrigin + "px",
            i.zOrigin = 0,
            i.renderTransform()),
            i.uncache = 1)
        }
    }
    function rr(t, e) {
        var n = {
            target: t,
            props: [],
            revert: nr,
            save: tr
        };
        return t._gsap || m.core.getCache(t),
        e && e.split(",").forEach(function(t) {
            return n.save(t)
        }),
        n
    }
    function ir(t, e) {
        e = wr.createElementNS ? wr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : wr.createElement(t);
        return e && e.style ? e : wr.createElement(t)
    }
    function Q(t, e, n) {
        var r = getComputedStyle(t);
        return r[e] || r.getPropertyValue(e.replace(Gr, "-$1").toLowerCase()) || r.getPropertyValue(e) || !n && Q(t, ti(e) || e, 1) || ""
    }
    function sr() {
        "undefined" != typeof window && window.document && (br = (wr = window.document).documentElement,
        Sr = ir("div") || {
            style: {}
        },
        ir("div"),
        G = ti(G),
        K = G + "Origin",
        Sr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        kr = !!ti("perspective"),
        Or = m.core.reverting,
        Tr = 1)
    }
    function or(t) {
        var e, n = ir("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, s = this.style.cssText;
        if (br.appendChild(n),
        n.appendChild(this),
        this.style.display = "block",
        t)
            try {
                e = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = or
            } catch (t) {}
        else
            this._gsapBBox && (e = this._gsapBBox());
        return r && (i ? r.insertBefore(this, i) : r.appendChild(this)),
        br.removeChild(n),
        this.style.cssText = s,
        e
    }
    function ar(t, e) {
        for (var n = e.length; n--; )
            if (t.hasAttribute(e[n]))
                return t.getAttribute(e[n])
    }
    function ur(e) {
        var n;
        try {
            n = e.getBBox()
        } catch (t) {
            n = or.call(e, !0)
        }
        return !(n = n && (n.width || n.height) || e.getBBox === or ? n : or.call(e, !0)) || n.width || n.x || n.y ? n : {
            x: +ar(e, ["x", "cx", "x1"]) || 0,
            y: +ar(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }
    function lr(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !ur(t))
    }
    function cr(t, e) {
        var n;
        e && (t = t.style,
        e in Vr && e !== K && (e = G),
        t.removeProperty ? ("ms" !== (n = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
        t.removeProperty("--" === n ? e : e.replace(Gr, "-$1").toLowerCase())) : t.removeAttribute(e))
    }
    function hr(t, e, n, r, i, s) {
        e = new U(t._pt,e,n,0,1,s ? Un : Hn);
        (t._pt = e).b = r,
        e.e = i,
        t._props.push(n)
    }
    function fr(t, e, n, r) {
        var i, s, o = parseFloat(n) || 0, a = (n + "").trim().substr((o + "").length) || "px", u = Sr.style, l = Kr.test(e), c = "svg" === t.tagName.toLowerCase(), h = (c ? "client" : "offset") + (l ? "Width" : "Height"), f = "px" === r, p = "%" === r;
        return r === a || !o || ei[r] || ei[a] ? o : ("px" === a || f || (o = fr(t, e, n, "px")),
        n = t.getCTM && lr(t),
        !p && "%" !== a || !Vr[e] && !~e.indexOf("adius") ? (u[l ? "width" : "height"] = 100 + (f ? a : r),
        c = ~e.indexOf("adius") || "em" === r && t.appendChild && !c ? t : t.parentNode,
        (s = (c = (c = n ? (t.ownerSVGElement || {}).parentNode : c) && c !== wr && c.appendChild ? c : wr.body)._gsap) && p && s.width && l && s.time === d.time && !s.uncache ? D(o / s.width * 100) : (!p || "height" !== e && "width" !== e ? (!p && "%" !== a || ni[Q(c, "display")] || (u.position = Q(t, "position")),
        c === t && (u.position = "static"),
        c.appendChild(Sr),
        i = Sr[h],
        c.removeChild(Sr),
        u.position = "absolute") : (a = t.style[e],
        t.style[e] = 100 + r,
        i = t[h],
        a ? t.style[e] = a : cr(t, e)),
        l && p && ((s = rt(c)).time = d.time,
        s.width = c[h]),
        D(f ? i * o / 100 : i && o ? 100 / i * o : 0))) : (i = n ? t.getBBox()[l ? "width" : "height"] : t[h],
        D(p ? o / i * 100 : o / 100 * i)))
    }
    function pr(t, e, n, r) {
        var i;
        n && "none" !== n || ((i = (s = ti(e, t, 1)) && Q(t, s, 1)) && i !== n ? (e = s,
        n = i) : "borderColor" === e && (n = Q(t, "borderTopColor")));
        var s, o, a, u, l, c, h, f, p, d = new U(this._pt,t.style,e,0,1,bn), m = 0, g = 0;
        if (d.b = n,
        d.e = r,
        n += "",
        "auto" == (r += "") && (l = t.style[e],
        t.style[e] = r,
        r = Q(t, e) || r,
        l ? t.style[e] = l : cr(t, e)),
        Lt(s = [n, r]),
        r = s[1],
        o = (n = s[0]).match(Me) || [],
        (r.match(Me) || []).length) {
            for (; h = Me.exec(r); )
                f = h[0],
                h = r.substring(m, h.index),
                u ? u = (u + 1) % 5 : "rgba(" !== h.substr(-5) && "hsla(" !== h.substr(-5) || (u = 1),
                f !== (l = o[g++] || "") && (a = parseFloat(l) || 0,
                p = l.substr((a + "").length),
                "=" === f.charAt(1) && (f = it(a, f) + p),
                c = parseFloat(f),
                f = f.substr((c + "").length),
                m = Me.lastIndex - f.length,
                f || (f = f || W.units[e] || p,
                m === r.length && (r += f,
                d.e += f)),
                p !== f && (a = fr(t, e, l, f) || 0),
                d._pt = {
                    _next: d._pt,
                    p: h || 1 === g ? h : ",",
                    s: a,
                    c: c - a,
                    m: u && u < 4 || "zIndex" === e ? Math.round : 0
                });
            d.c = m < r.length ? r.substring(m, r.length) : ""
        } else
            d.r = "display" === e && "none" === r ? Un : Hn;
        return ke.test(r) && (d.e = 0),
        this._pt = d
    }
    function dr(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, r, i, s = e.t, o = s.style, a = e.u, e = s._gsap;
            if ("all" === a || !0 === a)
                o.cssText = "",
                r = 1;
            else
                for (i = (a = a.split(",")).length; -1 < --i; )
                    n = a[i],
                    Vr[n] && (r = 1,
                    n = "transformOrigin" === n ? K : G),
                    cr(s, n);
            r && (cr(s, G),
            e) && (e.svg && s.removeAttribute("transform"),
            ui(s, 1),
            e.uncache = 1,
            er(o))
        }
    }
    function mr(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }
    function gr(t) {
        t = Q(t, G);
        return mr(t) ? oi : t.substr(7).match(Se).map(D)
    }
    function _r(t, e) {
        var n, r, i, s = t._gsap || rt(t), o = t.style, a = gr(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? oi : a : (a !== oi || t.offsetParent || t === br || s.svg || (r = o.display,
        o.display = "block",
        (s = t.parentNode) && t.offsetParent || (i = 1,
        n = t.nextElementSibling,
        br.appendChild(t)),
        a = gr(t),
        r ? o.display = r : cr(t, "display"),
        i && (n ? s.insertBefore(t, n) : s ? s.appendChild(t) : br.removeChild(t))),
        e && 6 < a.length ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
    }
    function vr(t, e, n, r, i, s) {
        var o, a = t._gsap, i = i || _r(t, !0), u = a.xOrigin || 0, l = a.yOrigin || 0, c = a.xOffset || 0, h = a.yOffset || 0, f = i[0], p = i[1], d = i[2], m = i[3], g = i[4], _ = i[5], v = e.split(" "), y = parseFloat(v[0]) || 0, x = parseFloat(v[1]) || 0;
        n ? i !== oi && (i = f * m - p * d) && (o = y * (-p / i) + x * (f / i) - (f * _ - p * g) / i,
        y = y * (m / i) + x * (-d / i) + (d * _ - m * g) / i,
        x = o) : (y = (i = ur(t)).x + (~v[0].indexOf("%") ? y / 100 * i.width : y),
        x = i.y + (~(v[1] || v[0]).indexOf("%") ? x / 100 * i.height : x)),
        r || !1 !== r && a.smooth ? (a.xOffset = c + ((g = y - u) * f + (_ = x - l) * d) - g,
        a.yOffset = h + (g * p + _ * m) - _) : a.xOffset = a.yOffset = 0,
        a.xOrigin = y,
        a.yOrigin = x,
        a.smooth = !!r,
        a.origin = e,
        a.originIsAbsolute = !!n,
        t.style[K] = "0px 0px",
        s && (hr(s, a, "xOrigin", u, y),
        hr(s, a, "yOrigin", l, x),
        hr(s, a, "xOffset", c, a.xOffset),
        hr(s, a, "yOffset", h, a.yOffset)),
        t.setAttribute("data-svg-origin", y + " " + x)
    }
    function yr(t, e, n) {
        var r = X(e);
        return D(parseFloat(e) + parseFloat(fr(t, "x", n + "px", r))) + r
    }
    function xr(t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }
    H.version = V.version = m.version = "3.12.5",
    Zt = 1,
    a() && He();
    var wr, br, Tr, Sr, Mr, Or, kr, e = R.Power0, Er = R.Power1, Cr = R.Power2, Ar = R.Power3, Pr = R.Power4, Rr = R.Linear, zr = R.Quad, Ir = R.Cubic, Dr = R.Quart, Lr = R.Quint, Fr = R.Strong, Br = R.Elastic, Yr = R.Back, Nr = R.SteppedEase, Xr = R.Bounce, Wr = R.Sine, qr = R.Expo, jr = R.Circ, Vr = {}, Hr = 180 / Math.PI, Ur = Math.PI / 180, Qr = Math.atan2, Gr = /([A-Z])/g, Kr = /(left|right|width|margin|padding|x)/i, Zr = /[\s,\(]\S/, $r = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, G = "transform", K = G + "Origin", Jr = "O,Moz,ms,Ms,Webkit".split(","), ti = function(t, e, n) {
        var r = (e || Sr).style
          , i = 5;
        if (t in r && !n)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Jr[i] + t in r); )
            ;
        return i < 0 ? null : (3 === i ? "ms" : 0 <= i ? Jr[i] : "") + t
    }, ei = {
        deg: 1,
        rad: 1,
        turn: 1
    }, ni = {
        grid: 1,
        flex: 1
    }, ri = function(t, e, n, r) {
        var i;
        return Tr || sr(),
        e in $r && "transform" !== e && ~(e = $r[e]).indexOf(",") && (e = e.split(",")[0]),
        Vr[e] && "transform" !== e ? (i = ui(t, r),
        i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : li(Q(t, K)) + " " + i.zOrigin + "px") : (i = t.style[e]) && "auto" !== i && !r && !~(i + "").indexOf("calc(") || (i = si[e] && si[e](t, e, n) || Q(t, e) || v(t, e) || ("opacity" === e ? 1 : 0)),
        n && !~(i + "").trim().indexOf(" ") ? fr(t, e, i, n) + n : i
    }, ii = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, si = {
        clearProps: function(t, e, n, r, i) {
            if ("isFromStart" !== i.data)
                return (e = t._pt = new U(t._pt,e,n,0,0,dr)).u = r,
                e.pr = -10,
                e.tween = i,
                t._props.push(n),
                1
        }
    }, oi = [1, 0, 0, 1, 0, 0], ai = {}, ui = function(t, e) {
        var n, r, i, s, o, a, u, l, c, h, f, p, d, m, g, _, v, y, x, w, b, T, S, M, O, k, E, C, A, P, R, z, I = t._gsap || new Je(t);
        return "x"in I && !e && !I.uncache || (k = t.style,
        E = I.scaleX < 0,
        C = "deg",
        A = getComputedStyle(t),
        P = Q(t, K) || "0",
        R = n = r = s = o = a = u = l = 0,
        z = i = 1,
        I.svg = !(!t.getCTM || !lr(t)),
        A.translate && ("none" === A.translate && "none" === A.scale && "none" === A.rotate || (k[G] = ("none" !== A.translate ? "translate3d(" + (A.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== A.rotate ? "rotate(" + A.rotate + ") " : "") + ("none" !== A.scale ? "scale(" + A.scale.split(" ").join(",") + ") " : "") + ("none" !== A[G] ? A[G] : "")),
        k.scale = k.rotate = k.translate = "none"),
        A = _r(t, I.svg),
        I.svg && (v = I.uncache ? (y = t.getBBox(),
        P = I.xOrigin - y.x + "px " + (I.yOrigin - y.y) + "px",
        "") : !e && t.getAttribute("data-svg-origin"),
        vr(t, v || P, !!v || I.originIsAbsolute, !1 !== I.smooth, A)),
        O = I.xOrigin || 0,
        S = I.yOrigin || 0,
        A !== oi && (f = A[0],
        p = A[1],
        d = A[2],
        m = A[3],
        R = g = A[4],
        n = _ = A[5],
        6 === A.length ? (z = Math.sqrt(f * f + p * p),
        i = Math.sqrt(m * m + d * d),
        s = f || p ? Qr(p, f) * Hr : 0,
        (u = d || m ? Qr(d, m) * Hr + s : 0) && (i *= Math.abs(Math.cos(u * Ur))),
        I.svg && (R -= O - (O * f + S * d),
        n -= S - (O * p + S * m))) : (O = A[6],
        S = A[7],
        w = A[8],
        b = A[9],
        T = A[10],
        M = A[11],
        R = A[12],
        n = A[13],
        r = A[14],
        o = (A = Qr(O, T)) * Hr,
        A && (v = g * (c = Math.cos(-A)) + w * (h = Math.sin(-A)),
        y = _ * c + b * h,
        x = O * c + T * h,
        w = g * -h + w * c,
        b = _ * -h + b * c,
        T = O * -h + T * c,
        M = S * -h + M * c,
        g = v,
        _ = y,
        O = x),
        a = (A = Qr(-d, T)) * Hr,
        A && (c = Math.cos(-A),
        M = m * (h = Math.sin(-A)) + M * c,
        f = v = f * c - w * h,
        p = y = p * c - b * h,
        d = x = d * c - T * h),
        s = (A = Qr(p, f)) * Hr,
        A && (v = f * (c = Math.cos(A)) + p * (h = Math.sin(A)),
        y = g * c + _ * h,
        p = p * c - f * h,
        _ = _ * c - g * h,
        f = v,
        g = y),
        o && 359.9 < Math.abs(o) + Math.abs(s) && (o = s = 0,
        a = 180 - a),
        z = D(Math.sqrt(f * f + p * p + d * d)),
        i = D(Math.sqrt(_ * _ + O * O)),
        A = Qr(g, _),
        u = 2e-4 < Math.abs(A) ? A * Hr : 0,
        l = M ? 1 / (M < 0 ? -M : M) : 0),
        I.svg) && (v = t.getAttribute("transform"),
        I.forceCSS = t.setAttribute("transform", "") || !mr(Q(t, G)),
        v) && t.setAttribute("transform", v),
        90 < Math.abs(u) && Math.abs(u) < 270 && (E ? (z *= -1,
        u += s <= 0 ? 180 : -180,
        s += s <= 0 ? 180 : -180) : (i *= -1,
        u += u <= 0 ? 180 : -180)),
        e = e || I.uncache,
        I.x = R - ((I.xPercent = R && (!e && I.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-R) ? -50 : 0))) ? t.offsetWidth * I.xPercent / 100 : 0) + "px",
        I.y = n - ((I.yPercent = n && (!e && I.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * I.yPercent / 100 : 0) + "px",
        I.z = r + "px",
        I.scaleX = D(z),
        I.scaleY = D(i),
        I.rotation = D(s) + C,
        I.rotationX = D(o) + C,
        I.rotationY = D(a) + C,
        I.skewX = u + C,
        I.skewY = 0 + C,
        I.transformPerspective = l + "px",
        (I.zOrigin = parseFloat(P.split(" ")[2]) || !e && I.zOrigin || 0) && (k[K] = li(P)),
        I.xOffset = I.yOffset = 0,
        I.force3D = W.force3D,
        I.renderTransform = I.svg ? mi : kr ? di : ci,
        I.uncache = 0),
        I
    }, li = function(t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, ci = function(t, e) {
        e.z = "0px",
        e.rotationY = e.rotationX = "0deg",
        e.force3D = 0,
        di(t, e)
    }, hi = "0deg", fi = "0px", pi = ") ", di = function(t, e) {
        var n, r, e = e || this, i = e.xPercent, s = e.yPercent, o = e.x, a = e.y, u = e.z, l = e.rotation, c = e.rotationY, h = e.rotationX, f = e.skewX, p = e.skewY, d = e.scaleX, m = e.scaleY, g = e.transformPerspective, _ = e.force3D, v = e.target, e = e.zOrigin, y = "", t = "auto" === _ && t && 1 !== t || !0 === _;
        !e || h === hi && c === hi || (_ = parseFloat(c) * Ur,
        r = Math.sin(_),
        n = Math.cos(_),
        _ = parseFloat(h) * Ur,
        o = yr(v, o, r * (r = Math.cos(_)) * -e),
        a = yr(v, a, -Math.sin(_) * -e),
        u = yr(v, u, n * r * -e + e)),
        g !== fi && (y += "perspective(" + g + pi),
        (i || s) && (y += "translate(" + i + "%, " + s + "%) "),
        !t && o === fi && a === fi && u === fi || (y += u !== fi || t ? "translate3d(" + o + ", " + a + ", " + u + ") " : "translate(" + o + ", " + a + pi),
        l !== hi && (y += "rotate(" + l + pi),
        c !== hi && (y += "rotateY(" + c + pi),
        h !== hi && (y += "rotateX(" + h + pi),
        f === hi && p === hi || (y += "skew(" + f + ", " + p + pi),
        1 === d && 1 === m || (y += "scale(" + d + ", " + m + pi),
        v.style[G] = y || "translate(0, 0)"
    }, mi = function(t, e) {
        var n, r, i, s, o, e = e || this, a = e.xPercent, u = e.yPercent, l = e.x, c = e.y, h = e.rotation, f = e.skewX, p = e.skewY, d = e.scaleX, m = e.scaleY, g = e.target, _ = e.xOrigin, v = e.yOrigin, y = e.xOffset, x = e.yOffset, e = e.forceCSS, w = parseFloat(l), b = parseFloat(c), h = parseFloat(h), f = parseFloat(f);
        (p = parseFloat(p)) && (f += p = parseFloat(p),
        h += p),
        h || f ? (h *= Ur,
        f *= Ur,
        n = Math.cos(h) * d,
        r = Math.sin(h) * d,
        i = Math.sin(h - f) * -m,
        s = Math.cos(h - f) * m,
        f && (p *= Ur,
        o = Math.tan(f - p),
        i *= o = Math.sqrt(1 + o * o),
        s *= o,
        p) && (o = Math.tan(p),
        n *= o = Math.sqrt(1 + o * o),
        r *= o),
        n = D(n),
        r = D(r),
        i = D(i),
        s = D(s)) : (n = d,
        s = m,
        r = i = 0),
        (w && !~(l + "").indexOf("px") || b && !~(c + "").indexOf("px")) && (w = fr(g, "x", l, "px"),
        b = fr(g, "y", c, "px")),
        (_ || v || y || x) && (w = D(w + _ - (_ * n + v * i) + y),
        b = D(b + v - (_ * r + v * s) + x)),
        (a || u) && (w = D(w + a / 100 * (o = g.getBBox()).width),
        b = D(b + u / 100 * o.height)),
        g.setAttribute("transform", o = "matrix(" + n + "," + r + "," + i + "," + s + "," + w + "," + b + ")"),
        e && (g.style[G] = o)
    };
    p("padding,margin,Width,Radius", function(e, n) {
        var t = "Right"
          , r = "Bottom"
          , i = "Left"
          , a = (n < 3 ? ["Top", t, r, i] : ["Top" + i, "Top" + t, r + t, r + i]).map(function(t) {
            return n < 2 ? e + t : "border" + t + e
        });
        si[1 < n ? "border" + e : e] = function(e, t, n, r, i) {
            var s, o;
            if (arguments.length < 4)
                return s = a.map(function(t) {
                    return ri(e, t, n)
                }),
                5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o;
            s = (r + "").split(" "),
            o = {},
            a.forEach(function(t, e) {
                return o[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            }),
            e.init(t, o, i)
        }
    });
    var gi, _i = {
        name: "css",
        register: sr,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, n, r, i) {
            var s, o, a, u, l, c, h, f, p, L, d, m, F, g, _, v, B, y, x, w, b, Y = this._props, T = t.style, S = n.vars.startAt;
            for (l in Tr || sr(),
            this.styles = this.styles || rr(t),
            g = this.styles.props,
            this.tween = n,
            e)
                if ("autoRound" !== l && (o = e[l],
                !q[l] || !sn(l, e, n, r, t, i)))
                    if (f = typeof o,
                    u = si[l],
                    "function" === f && (f = typeof (o = o.call(n, r, t, i))),
                    "string" === f && ~o.indexOf("random(") && (o = Et(o)),
                    u)
                        u(this, t, l, o, n) && (F = 1);
                    else if ("--" === l.substr(0, 2))
                        s = (getComputedStyle(t).getPropertyValue(l) + "").trim(),
                        o += "",
                        je.lastIndex = 0,
                        je.test(s) || (c = X(s),
                        h = X(o)),
                        h ? c !== h && (s = fr(t, l, s, h) + h) : c && (o += c),
                        this.add(T, "setProperty", s, o, r, i, 0, 0, l),
                        Y.push(l),
                        g.push(l, 0, T[l]);
                    else if ("undefined" !== f) {
                        if (S && l in S && (X((s = N(s = "function" == typeof S[l] ? S[l].call(n, r, t, i) : S[l]) && ~s.indexOf("random(") ? Et(s) : s) + "") || "auto" === s || (s += W.units[l] || X(ri(t, l)) || ""),
                        "=" !== (s + "").charAt(1)) || (s = ri(t, l)),
                        u = parseFloat(s),
                        (f = "string" === f && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)),
                        a = parseFloat(o),
                        p = (l = l in $r && ("autoAlpha" === l && (1 === u && "hidden" === ri(t, "visibility") && a && (u = 0),
                        g.push("visibility", 0, T.visibility),
                        hr(this, T, "visibility", u ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)),
                        "scale" !== l) && "transform" !== l && ~(l = $r[l]).indexOf(",") ? l.split(",")[0] : l)in Vr)
                            if (this.styles.save(l),
                            L || ((d = t._gsap).renderTransform && !e.parseTransform || ui(t, e.parseTransform),
                            m = !1 !== e.smoothOrigin && d.smooth,
                            (L = this._pt = new U(this._pt,T,G,0,1,d.renderTransform,d,0,-1)).dep = 1),
                            "scale" === l)
                                this._pt = new U(this._pt,d,"scaleY",d.scaleY,(f ? it(d.scaleY, f + a) : a) - d.scaleY || 0,Wn),
                                this._pt.u = 0,
                                Y.push("scaleY", l),
                                l += "X";
                            else {
                                if ("transformOrigin" === l) {
                                    g.push(K, 0, T[K]),
                                    b = w = x = void 0,
                                    x = (y = o).split(" "),
                                    w = x[0],
                                    b = x[1] || "50%",
                                    "top" !== w && "bottom" !== w && "left" !== b && "right" !== b || (y = w,
                                    w = b,
                                    b = y),
                                    x[0] = ii[w] || w,
                                    x[1] = ii[b] || b,
                                    o = x.join(" "),
                                    d.svg ? vr(t, o, 0, m, 0, this) : ((h = parseFloat(o.split(" ")[2]) || 0) !== d.zOrigin && hr(this, d, "zOrigin", d.zOrigin, h),
                                    hr(this, T, l, li(s), li(o)));
                                    continue
                                }
                                if ("svgOrigin" === l) {
                                    vr(t, o, 1, m, 0, this);
                                    continue
                                }
                                if (l in ai) {
                                    y = this,
                                    w = d,
                                    b = l,
                                    x = u,
                                    _ = f ? it(u, f + o) : o,
                                    B = v = R = D = void 0,
                                    D = 360,
                                    R = N(_),
                                    v = parseFloat(_) * (R && ~_.indexOf("rad") ? Hr : 1) - x,
                                    B = x + v + "deg",
                                    R && ("short" === (R = _.split("_")[1]) && (v %= D) != v % 180 && (v += v < 0 ? D : -D),
                                    "cw" === R && v < 0 ? v = (v + 36e9) % D - ~~(v / D) * D : "ccw" === R && 0 < v && (v = (v - 36e9) % D - ~~(v / D) * D)),
                                    y._pt = _ = new U(y._pt,w,b,x,v,qn),
                                    _.e = B,
                                    _.u = "deg",
                                    y._props.push(b);
                                    continue
                                }
                                if ("smoothOrigin" === l) {
                                    hr(this, d, "smooth", d.smooth, o);
                                    continue
                                }
                                if ("force3D" === l) {
                                    d[l] = o;
                                    continue
                                }
                                if ("transform" === l) {
                                    D = I = A = E = C = k = O = M = z = R = P = void 0;
                                    var M, O, k, E, C, A, P = this, R = o, z = t, I = xr({}, z._gsap), D = z.style;
                                    for (O in I.svg ? (k = z.getAttribute("transform"),
                                    z.setAttribute("transform", ""),
                                    D[G] = R,
                                    M = ui(z, 1),
                                    cr(z, G),
                                    z.setAttribute("transform", k)) : (k = getComputedStyle(z)[G],
                                    D[G] = R,
                                    M = ui(z, 1),
                                    D[G] = k),
                                    Vr)
                                        (k = I[O]) !== (C = M[O]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(O) < 0 && (E = X(k) !== (A = X(C)) ? fr(z, O, k, A) : parseFloat(k),
                                        C = parseFloat(C),
                                        P._pt = new U(P._pt,M,O,E,C - E,Wn),
                                        P._pt.u = A || 0,
                                        P._props.push(O));
                                    xr(M, I);
                                    continue
                                }
                            }
                        else
                            l in T || (l = ti(l) || l);
                        if (p || (a || 0 === a) && (u || 0 === u) && !Zr.test(o) && l in T)
                            a = a || 0,
                            (c = (s + "").substr((u + "").length)) !== (h = X(o) || (l in W.units ? W.units[l] : c)) && (u = fr(t, l, s, h)),
                            this._pt = new U(this._pt,p ? d : T,l,u,(f ? it(u, f + a) : a) - u,p || "px" !== h && "zIndex" !== l || !1 === e.autoRound ? Wn : Vn),
                            this._pt.u = h || 0,
                            c !== h && "%" !== h && (this._pt.b = s,
                            this._pt.r = jn);
                        else if (l in T)
                            pr.call(this, t, l, s, f ? f + o : o);
                        else if (l in t)
                            this.add(t, l, s || t[l], f ? f + o : o, r, i);
                        else if ("parseTransform" !== l) {
                            tt(l, o);
                            continue
                        }
                        p || (l in T ? g.push(l, 0, T[l]) : g.push(l, 1, s || t[l])),
                        Y.push(l)
                    }
            F && On(this)
        },
        render: function(t, e) {
            if (e.tween._time || !Or())
                for (var n = e._pt; n; )
                    n.r(t, n.d),
                    n = n._next;
            else
                e.styles.revert()
        },
        get: ri,
        aliases: $r,
        getSetter: function(t, e, n) {
            var r = $r[e];
            return (e = r && r.indexOf(",") < 0 ? r : e)in Vr && e !== K && (t._gsap.x || ri(t, "x")) ? n && Mr === n ? "scale" === e ? Zn : Kn : (Mr = n || {}) && ("scale" === e ? $n : Jn) : t.style && !s(t.style[e]) ? Qn : ~e.indexOf("-") ? Gn : yn(t, e)
        },
        core: {
            _removeProperty: cr,
            _getMatrix: _r
        }
    }, vi = (m.utils.checkPrefix = ti,
    m.core.getStyleSaver = rr,
    gi = p("x,y,z,scale,scaleX,scaleY,xPercent,yPercent" + "," + (vi = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        Vr[t] = 1
    }),
    p(vi, function(t) {
        W.units[t] = "deg",
        ai[t] = 1
    }),
    $r[gi[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + vi,
    p("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        t = t.split(":");
        $r[t[1]] = gi[t[0]]
    }),
    p("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        W.units[t] = "px"
    }),
    m.registerPlugin(_i),
    m.registerPlugin(_i) || m), yi = vi.core.Tween;
    t.Back = Yr,
    t.Bounce = Xr,
    t.CSSPlugin = _i,
    t.Circ = jr,
    t.Cubic = Ir,
    t.Elastic = Br,
    t.Expo = qr,
    t.Linear = Rr,
    t.Power0 = e,
    t.Power1 = Er,
    t.Power2 = Cr,
    t.Power3 = Ar,
    t.Power4 = Pr,
    t.Quad = zr,
    t.Quart = Dr,
    t.Quint = Lr,
    t.Sine = Wr,
    t.SteppedEase = Nr,
    t.Strong = Fr,
    t.TimelineLite = V,
    t.TimelineMax = V,
    t.TweenLite = H,
    t.TweenMax = yi,
    t.default = vi,
    t.gsap = vi,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r)
        }
    }
    function i() {
        return Et || "undefined" != typeof window && (Et = window.gsap) && Et.registerPlugin && Et
    }
    function ae(t, e) {
        return ~Lt.indexOf(t) && Lt[Lt.indexOf(t) + 1][e]
    }
    function Pt(t) {
        return !!~s.indexOf(t)
    }
    function Ot(t, e, n, r, i) {
        t.addEventListener(e, n, {
            passive: !1 !== r,
            capture: !!i
        })
    }
    function kt(t, e, n, r) {
        t.removeEventListener(e, n, !!r)
    }
    function Rt() {
        return xe && xe.isPressed || Dt.cache++
    }
    function o(n, r) {
        function i(t) {
            var e;
            return t || 0 === t ? (c && (Ct.history.scrollRestoration = "manual"),
            e = xe && xe.isPressed,
            t = i.v = Math.round(t) || (xe && xe.iOS ? 1 : 0),
            n(t),
            i.cacheID = Dt.cache,
            e && h("ss", t)) : (r || Dt.cache !== i.cacheID || h("ref")) && (i.cacheID = Dt.cache,
            i.v = n()),
            i.v + i.offset
        }
        return i.offset = 0,
        n && i
    }
    function It(t, e) {
        return (e && e._ctx && e._ctx.selector || Et.utils.toArray)(t)[0] || ("string" == typeof t && !1 !== Et.config().nullTargetWarn ? console.warn("Element not found:", t) : null)
    }
    function ue(e, t) {
        var n = t.s
          , t = t.sc
          , r = (Pt(e) && (e = de.scrollingElement || me),
        Dt.indexOf(e))
          , i = t === Bt.sc ? 1 : 2
          , s = (~r || (r = Dt.push(e) - 1),
        Dt[r + i] || Ot(e, "scroll", Rt),
        Dt[r + i])
          , r = s || (Dt[r + i] = o(ae(e, n), !0) || (Pt(e) ? t : o(function(t) {
            return arguments.length ? e[n] = t : e[n]
        })));
        return r.target = e,
        s || (r.smooth = "smooth" === Et.getProperty(e, "scrollBehavior")),
        r
    }
    function zt(t, e, i) {
        function s(t, e) {
            var n = Te();
            e || r < n - u ? (a = o,
            o = t,
            l = u,
            u = n) : i ? o += t : o = a + (t - a) / (n - l) * (u - l)
        }
        var o = t
          , a = t
          , u = Te()
          , l = u
          , r = e || 50
          , c = Math.max(500, 3 * r);
        return {
            update: s,
            reset: function() {
                a = o = i ? 0 : o,
                l = u = 0
            },
            getVelocity: function(t) {
                var e = l
                  , n = a
                  , r = Te();
                return !t && 0 !== t || t === o || s(t),
                u === l || c < r - l ? 0 : (o + (i ? n : -n)) / ((i ? r : u) - e) * 1e3
            }
        }
    }
    function le(t, e) {
        return e && !t._gsapAllow && t.preventDefault(),
        t.changedTouches ? t.changedTouches[0] : t
    }
    function ce(t) {
        var e = Math.max.apply(Math, t)
          , t = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(t) ? e : t
    }
    function he() {
        var t, n, e;
        (ye = Et.core.globals().ScrollTrigger) && ye.core && (t = ye.core,
        n = t.bridge || {},
        e = t._scrollers,
        t = t._proxies,
        e.push.apply(e, Dt),
        t.push.apply(t, Lt),
        Dt = e,
        Lt = t,
        h = function(t, e) {
            return n[t](e)
        }
        )
    }
    function fe(t) {
        return Et = t || i(),
        !pe && Et && "undefined" != typeof document && document.body && (Ct = window,
        me = (de = document).documentElement,
        ge = de.body,
        s = [Ct, de, me, ge],
        Et.utils.clamp,
        we = Et.core.context || function() {}
        ,
        ve = "onpointerenter"in ge ? "pointer" : "mouse",
        _e = C.isTouch = Ct.matchMedia && Ct.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in Ct || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0,
        At = C.eventTypes = ("ontouchstart"in me ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in me ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
        setTimeout(function() {
            return c = 0
        }, 500),
        he(),
        pe = 1),
        pe
    }
    var Et, pe, Ct, de, me, ge, _e, ve, ye, s, xe, At, we, a, u, l, c = 1, be = [], Dt = [], Lt = [], Te = Date.now, h = function(t, e) {
        return e
    }, f = "scrollLeft", p = "scrollTop", Ft = {
        s: f,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: o(function(t) {
            return arguments.length ? Ct.scrollTo(t, Bt.sc()) : Ct.pageXOffset || de[f] || me[f] || ge[f] || 0
        })
    }, Bt = {
        s: p,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: Ft,
        sc: o(function(t) {
            return arguments.length ? Ct.scrollTo(Ft.sc(), t) : Ct.pageYOffset || de[p] || me[p] || ge[p] || 0
        })
    }, C = (Ft.op = Bt,
    Dt.cache = 0,
    d.prototype.init = function(t) {
        pe || fe(Et) || console.warn("Please gsap.registerPlugin(Observer)"),
        ye || he();
        var i = t.tolerance
          , s = t.dragMinimum
          , e = t.type
          , o = t.target
          , n = t.lineHeight
          , r = t.debounce
          , a = t.preventDefault
          , u = t.onStop
          , L = t.onStopDelay
          , l = t.ignore
          , F = t.wheelSpeed
          , B = t.event
          , Y = t.onDragStart
          , N = t.onDragEnd
          , X = t.onDrag
          , W = t.onPress
          , q = t.onRelease
          , j = t.onRight
          , V = t.onLeft
          , H = t.onUp
          , U = t.onDown
          , Q = t.onChangeX
          , G = t.onChangeY
          , K = t.onChange
          , Z = t.onToggleX
          , $ = t.onToggleY
          , J = t.onHover
          , tt = t.onHoverEnd
          , c = t.onMove
          , et = t.ignoreCheck
          , h = t.isNormalizer
          , nt = t.onGestureStart
          , rt = t.onGestureEnd
          , it = t.onWheel
          , st = t.onEnable
          , ot = t.onDisable
          , at = t.onClick
          , f = t.scrollSpeed
          , p = t.capture
          , ut = t.allowClicks
          , lt = t.lockAxis
          , ct = t.onLockAxis;
        function ht() {
            return Mt = Te()
        }
        function d(t, e) {
            return (T.event = t) && l && ~l.indexOf(t.target) || e && St && "touch" !== t.pointerType || et && et(t, e)
        }
        function m() {
            var t = T.deltaX = ce(P)
              , e = T.deltaY = ce(R)
              , n = Math.abs(t) >= i
              , r = Math.abs(e) >= i;
            K && (n || r) && K(T, t, e, P, R),
            n && (j && 0 < T.deltaX && j(T),
            V && T.deltaX < 0 && V(T),
            Q && Q(T),
            Z && T.deltaX < 0 != S < 0 && Z(T),
            S = T.deltaX,
            P[0] = P[1] = P[2] = 0),
            r && (U && 0 < T.deltaY && U(T),
            H && T.deltaY < 0 && H(T),
            G && G(T),
            $ && T.deltaY < 0 != M < 0 && $(T),
            M = T.deltaY,
            R[0] = R[1] = R[2] = 0),
            (y || v) && (c && c(T),
            v && (X(T),
            v = !1),
            y = !1),
            w && (w = !1,
            ct) && ct(T),
            x && (it(T),
            x = !1),
            _ = 0
        }
        function ft(t, e, n) {
            P[n] += t,
            R[n] += e,
            T._vx.update(t),
            T._vy.update(e),
            r ? _ = _ || requestAnimationFrame(m) : m()
        }
        function pt(t, e) {
            lt && !b && (T.axis = b = Math.abs(t) > Math.abs(e) ? "x" : "y",
            w = !0),
            "y" !== b && (P[2] += t,
            T._vx.update(t, !0)),
            "x" !== b && (R[2] += e,
            T._vy.update(e, !0)),
            r ? _ = _ || requestAnimationFrame(m) : m()
        }
        function g(t) {
            var e, n, r, i;
            !d(t, 1) && (e = (t = le(t, a)).clientX,
            t = t.clientY,
            n = e - T.x,
            r = t - T.y,
            i = T.isDragging,
            T.x = e,
            T.y = t,
            i || Math.abs(T.startX - e) >= s || Math.abs(T.startY - t) >= s) && (X && (v = !0),
            i || (T.isDragging = !0),
            pt(n, r),
            i || Y && Y(T))
        }
        function dt(t) {
            return t.touches && 1 < t.touches.length && (T.isGesturing = !0,
            nt(t, T.isDragging))
        }
        function mt() {
            return T.isGesturing = !1,
            rt(T)
        }
        function gt(t) {
            var e;
            d(t) || (t = k(),
            e = E(),
            ft((t - bt) * f, (e - Tt) * f, 1),
            bt = t,
            Tt = e,
            u && D.restart(!0))
        }
        function _t(t) {
            var e;
            d(t) || (t = le(t, a),
            it && (x = !0),
            e = (1 === t.deltaMode ? n : 2 === t.deltaMode ? Ct.innerHeight : 1) * F,
            ft(t.deltaX * e, t.deltaY * e, 0),
            u && !h && D.restart(!0))
        }
        function vt(t) {
            var e, n, r;
            !d(t) && (e = t.clientX,
            t = t.clientY,
            n = e - T.x,
            r = t - T.y,
            T.x = e,
            T.y = t,
            y = !0,
            u && D.restart(!0),
            n || r) && pt(n, r)
        }
        function yt(t) {
            T.event = t,
            J(T)
        }
        function xt(t) {
            T.event = t,
            tt(T)
        }
        function wt(t) {
            return d(t) || le(t, a) && at(T)
        }
        this.target = o = It(o) || me,
        this.vars = t;
        var _, v, y, x, w, b, l = l && Et.utils.toArray(l), i = i || 1e-9, s = s || 0, F = F || 1, f = f || 1, e = e || "wheel,touch,pointer", r = !1 !== r, n = n || parseFloat(Ct.getComputedStyle(ge).lineHeight) || 22, T = this, S = 0, M = 0, O = t.passive || !a, k = ue(o, Ft), E = ue(o, Bt), bt = k(), Tt = E(), St = ~e.indexOf("touch") && !~e.indexOf("pointer") && "pointerdown" === At[0], C = Pt(o), A = o.ownerDocument || de, P = [0, 0, 0], R = [0, 0, 0], Mt = 0, z = T.onPress = function(t) {
            d(t, 1) || t && t.button || (T.axis = b = null,
            D.pause(),
            T.isPressed = !0,
            t = le(t),
            S = M = 0,
            T.startX = T.x = t.clientX,
            T.startY = T.y = t.clientY,
            T._vx.reset(),
            T._vy.reset(),
            Ot(h ? o : A, At[1], g, O, !0),
            T.deltaX = T.deltaY = 0,
            W && W(T))
        }
        , I = T.onRelease = function(e) {
            var t, n, r, i;
            d(e, 1) || (kt(h ? o : A, At[1], g, !0),
            t = !isNaN(T.y - T.startY),
            r = (n = T.isDragging) && (3 < Math.abs(T.x - T.startX) || 3 < Math.abs(T.y - T.startY)),
            i = le(e),
            !r && t && (T._vx.reset(),
            T._vy.reset(),
            a) && ut && Et.delayedCall(.08, function() {
                var t;
                300 < Te() - Mt && !e.defaultPrevented && (e.target.click ? e.target.click() : A.createEvent && ((t = A.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, Ct, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null),
                e.target.dispatchEvent(t)))
            }),
            T.isDragging = T.isGesturing = T.isPressed = !1,
            u && n && !h && D.restart(!0),
            N && n && N(T),
            q && q(T, r))
        }
        , D = T._dc = Et.delayedCall(L || .25, function() {
            T._vx.reset(),
            T._vy.reset(),
            D.pause(),
            u && u(T)
        }).pause();
        T.deltaX = T.deltaY = 0,
        T._vx = zt(0, 50, !0),
        T._vy = zt(0, 50, !0),
        T.scrollX = k,
        T.scrollY = E,
        T.isDragging = T.isGesturing = T.isPressed = !1,
        we(this),
        T.enable = function(t) {
            return T.isEnabled || (Ot(C ? A : o, "scroll", Rt),
            0 <= e.indexOf("scroll") && Ot(C ? A : o, "scroll", gt, O, p),
            0 <= e.indexOf("wheel") && Ot(o, "wheel", _t, O, p),
            (0 <= e.indexOf("touch") && _e || 0 <= e.indexOf("pointer")) && (Ot(o, At[0], z, O, p),
            Ot(A, At[2], I),
            Ot(A, At[3], I),
            ut && Ot(o, "click", ht, !0, !0),
            at && Ot(o, "click", wt),
            nt && Ot(A, "gesturestart", dt),
            rt && Ot(A, "gestureend", mt),
            J && Ot(o, ve + "enter", yt),
            tt && Ot(o, ve + "leave", xt),
            c) && Ot(o, ve + "move", vt),
            T.isEnabled = !0,
            t && t.type && z(t),
            st && st(T)),
            T
        }
        ,
        T.disable = function() {
            T.isEnabled && (be.filter(function(t) {
                return t !== T && Pt(t.target)
            }).length || kt(C ? A : o, "scroll", Rt),
            T.isPressed && (T._vx.reset(),
            T._vy.reset(),
            kt(h ? o : A, At[1], g, !0)),
            kt(C ? A : o, "scroll", gt, p),
            kt(o, "wheel", _t, p),
            kt(o, At[0], z, p),
            kt(A, At[2], I),
            kt(A, At[3], I),
            kt(o, "click", ht, !0),
            kt(o, "click", wt),
            kt(A, "gesturestart", dt),
            kt(A, "gestureend", mt),
            kt(o, ve + "enter", yt),
            kt(o, ve + "leave", xt),
            kt(o, ve + "move", vt),
            T.isEnabled = T.isPressed = T.isDragging = !1,
            ot) && ot(T)
        }
        ,
        T.kill = T.revert = function() {
            T.disable();
            var t = be.indexOf(T);
            0 <= t && be.splice(t, 1),
            xe === T && (xe = 0)
        }
        ,
        be.push(T),
        h && Pt(o) && (xe = T),
        T.enable(B)
    }
    ,
    a = d,
    (u = [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]) && e(a.prototype, u),
    l && e(a, l),
    d);
    function d(t) {
        this.init(t)
    }
    function Se(t, e, n) {
        var r = ee(t) && ("clamp(" === t.substr(0, 6) || -1 < t.indexOf("max"));
        return (n["_" + e + "Clamp"] = r) ? t.substr(6, t.length - 7) : t
    }
    function Me(t, e) {
        return !e || ee(t) && "clamp(" === t.substr(0, 6) ? t : "clamp(" + t + ")"
    }
    function m() {
        return en = 1
    }
    function g() {
        return en = 0
    }
    function Yt(t) {
        return t
    }
    function Oe(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }
    function _() {
        return "undefined" != typeof window
    }
    function v() {
        return Vt || _() && (Vt = window.gsap) && Vt.registerPlugin && Vt
    }
    function ke(t) {
        return !!~I.indexOf(t)
    }
    function Ee(t) {
        return ("Height" === t ? G : Ht["inner" + t]) || Qt["client" + t] || Gt["client" + t]
    }
    function Ce(t) {
        return ae(t, "getBoundingClientRect") || (ke(t) ? function() {
            return Sn.width = Ht.innerWidth,
            Sn.height = G,
            Sn
        }
        : function() {
            return Ge(t)
        }
        )
    }
    function Nt(t, e) {
        e.s;
        var n, r = e.d2, i = e.d, e = e.a;
        return Math.max(0, (n = "scroll" + r) && (e = ae(t, n)) ? e() - Ce(t)()[i] : ke(t) ? (Qt[n] || Gt[n]) - Ee(r) : t[n] - t["offset" + r])
    }
    function y(t, e) {
        for (var n = 0; n < N.length; n += 3)
            e && !~e.indexOf(N[n + 1]) || t(N[n], N[n + 1], N[n + 2])
    }
    function Xt(t) {
        return "function" == typeof t
    }
    function Ae(t) {
        return "number" == typeof t
    }
    function Pe(t) {
        return "object" == typeof t
    }
    function Re(t, e, n) {
        t && t.progress(e ? 0 : 1) && n && t.pause()
    }
    function ze(t, e) {
        var n;
        t.enabled && (n = t._ctx ? t._ctx.add(function() {
            return e(t)
        }) : e(t)) && n.totalTime && (t.callbackAnimation = n)
    }
    function Wt(t) {
        return Ht.getComputedStyle(t)
    }
    function Ie(t, e) {
        for (var n in e)
            n in t || (t[n] = e[n]);
        return t
    }
    function De(t, e) {
        e = e.d2;
        return t["offset" + e] || t["client" + e] || 0
    }
    function Le(t) {
        var e, n = [], r = t.labels, i = t.duration();
        for (e in r)
            n.push(r[e] / i);
        return n
    }
    function Fe(i) {
        var s = Vt.utils.snap(i)
          , o = Array.isArray(i) && i.slice(0).sort(function(t, e) {
            return t - e
        });
        return o ? function(t, e, n) {
            var r;
            if (void 0 === n && (n = .001),
            !e)
                return s(t);
            if (0 < e) {
                for (t -= n,
                r = 0; r < o.length; r++)
                    if (o[r] >= t)
                        return o[r];
                return o[r - 1]
            }
            for (r = o.length,
            t += n; r--; )
                if (o[r] <= t)
                    return o[r];
            return o[0]
        }
        : function(t, e, n) {
            void 0 === n && (n = .001);
            var r = s(t);
            return !e || Math.abs(r - t) < n || r - t < 0 == e < 0 ? r : s(e < 0 ? t - i : t + i)
        }
    }
    function x(e, n, t, r) {
        t.split(",").forEach(function(t) {
            return e(n, t, r)
        })
    }
    function qt(t, e, n, r, i) {
        return t.addEventListener(e, n, {
            passive: !r,
            capture: !!i
        })
    }
    function jt(t, e, n, r) {
        return t.removeEventListener(e, n, !!r)
    }
    function w(t, e, n) {
        (n = n && n.wheelHandler) && (t(e, "wheel", n),
        t(e, "touchmove", n))
    }
    function Be(t, e) {
        var n, r;
        return ee(t) && (r = ~(n = t.indexOf("=")) ? (t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0,
        ~n && (t.indexOf("%") > n && (r *= e / 100),
        t = t.substr(0, n - 1)),
        t = r + (t in et ? et[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)),
        t
    }
    function Ye(t, e, n, r, i, s, o, a) {
        var u = i.startColor
          , l = i.endColor
          , c = i.fontSize
          , h = i.indent
          , i = i.fontWeight
          , f = Ut.createElement("div")
          , p = ke(n) || "fixed" === ae(n, "pinType")
          , d = -1 !== t.indexOf("scroller")
          , n = p ? Gt : n
          , m = -1 !== t.indexOf("start")
          , u = m ? u : l
          , l = "border-color:" + u + ";font-size:" + c + ";color:" + u + ";font-weight:" + i + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return l += "position:" + ((d || a) && p ? "fixed;" : "absolute;"),
        !d && !a && p || (l += (r === Bt ? J : tt) + ":" + (s + parseFloat(h)) + "px;"),
        o && (l += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
        f._isStart = m,
        f.setAttribute("class", "gsap-marker-" + t + (e ? " marker-" + e : "")),
        f.style.cssText = l,
        f.innerText = e || 0 === e ? t + "-" + e : t,
        n.children[0] ? n.insertBefore(f, n.children[0]) : n.appendChild(f),
        f._offset = f["offset" + r.op.d2],
        R(f, 0, r, m),
        f
    }
    function b() {
        return 34 < Jt() - te && (Z = Z || requestAnimationFrame(ot))
    }
    function Ne() {
        n && n.isPressed && !(n.startX > Gt.clientWidth) || (Dt.cache++,
        n ? Z = Z || requestAnimationFrame(ot) : ot(),
        te || it("scrollStart"),
        te = Jt())
    }
    function T() {
        j = Ht.innerWidth,
        q = Ht.innerHeight
    }
    function Xe() {
        Dt.cache++,
        Kt || X || Ut.fullscreenElement || Ut.webkitFullscreenElement || W && j === Ht.innerWidth && !(Math.abs(Ht.innerHeight - q) > .25 * Ht.innerHeight) || D.restart(!0)
    }
    function We() {
        return jt(A, "scrollEnd", We) || Ke(!0)
    }
    function S(t) {
        for (var e = 0; e < r.length; e += 5)
            (!t || r[e + 4] && r[e + 4].query === t) && (r[e].style.cssText = r[e + 1],
            r[e].getBBox && r[e].setAttribute("transform", r[e + 2] || ""),
            r[e + 3].uncache = 1)
    }
    function M(t, e) {
        var n;
        for (Zt = 0; Zt < se.length; Zt++)
            !(n = se[Zt]) || e && n._ctx !== e || (t ? n.kill(1) : n.revert(!0, !0));
        K = !0,
        e && S(e),
        e || it("revert")
    }
    function O(t, e) {
        Dt.cache++,
        !e && $t || Dt.forEach(function(t) {
            return Xt(t) && t.cacheID++ && (t.rec = 0)
        }),
        ee(t) && (Ht.history.scrollRestoration = U = t)
    }
    function k() {
        Gt.appendChild(Q),
        G = !n && Q.offsetHeight || Ht.innerHeight,
        Gt.removeChild(Q)
    }
    function E(e) {
        $e(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t) {
            return t.style.display = e ? "none" : "block"
        })
    }
    function qe(t, e, n, r) {
        if (!t._gsap.swappedIn) {
            for (var i, s = at.length, o = e.style, a = t.style; s--; )
                o[i = at[s]] = n[i];
            o.position = "absolute" === n.position ? "absolute" : "relative",
            "inline" === n.display && (o.display = "inline-block"),
            a[tt] = a[J] = "auto",
            o.flexBasis = n.flexBasis || "auto",
            o.overflow = "visible",
            o.boxSizing = "border-box",
            o[fn] = De(t, Ft) + ie,
            o[pn] = De(t, Bt) + ie,
            o[ne] = a[re] = a.top = a.left = "0",
            Ze(r),
            a[fn] = a.maxWidth = n[fn],
            a[pn] = a.maxHeight = n[pn],
            a[ne] = n[ne],
            t.parentNode !== e && (t.parentNode.insertBefore(e, t),
            e.appendChild(t)),
            t._gsap.swappedIn = !0
        }
    }
    function je(t) {
        for (var e = ut.length, n = t.style, r = [], i = 0; i < e; i++)
            r.push(ut[i], n[ut[i]]);
        return r.t = t,
        r
    }
    function Ve(t, e, n, r, i, s, o, a, u, l, c, h, f, p) {
        Xt(t) && (t = t(a)),
        ee(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? Be("0" + t.substr(3), n) : 0));
        var d, m, g, _, v = f ? f.time() : 0;
        return f && f.seek(0),
        Ae(t = isNaN(t) ? t : +t) ? (f && (t = Vt.utils.mapRange(f.scrollTrigger.start, f.scrollTrigger.end, 0, h, t)),
        o && R(o, n, r, !0)) : (Xt(e) && (e = e(a)),
        m = (t || "0").split(" "),
        g = It(e, a) || Gt,
        (e = Ge(g) || {}) && (e.left || e.top) || "none" !== Wt(g).display || (d = g.style.display,
        g.style.display = "block",
        e = Ge(g),
        d ? g.style.display = d : g.style.removeProperty("display")),
        d = Be(m[0], e[r.d]),
        m = Be(m[1] || "0", n),
        t = e[r.p] - u[r.p] - l + d + i - m,
        o && R(o, m, r, n - m < 20 || o._isStart && 20 < m),
        n -= n - m),
        p && (a[p] = t || -.001,
        t < 0) && (t = 0),
        s && (e = s._isStart,
        _ = "scroll" + r.d2,
        R(s, l = t + n, r, e && 20 < l || !e && (c ? Math.max(Gt[_], Qt[_]) : s.parentNode[_]) <= l + 1),
        c) && (u = Ge(o),
        c) && (s.style[r.op.p] = u[r.op.p] - r.op.m - s._offset + ie),
        f && g && (_ = Ge(g),
        f.seek(h),
        d = Ge(g),
        f._caScrollDist = _[r.p] - d[r.p],
        t = t / f._caScrollDist * h),
        f && f.seek(v),
        f ? t : Math.round(t)
    }
    function He(t, e, n, r) {
        if (t.parentNode !== e) {
            var i, s, o = t.style;
            if (e === Gt) {
                for (i in t._stOrig = o.cssText,
                s = Wt(t))
                    +i || ct.test(i) || !s[i] || "string" != typeof o[i] || "0" === i || (o[i] = s[i]);
                o.top = n,
                o.left = r
            } else
                o.cssText = t._stOrig;
            Vt.core.getCache(t).uncache = 1,
            e.appendChild(t)
        }
    }
    function P(n, t, r) {
        var i = t
          , s = i;
        return function(t) {
            var e = Math.round(n());
            return e !== i && e !== s && 3 < Math.abs(e - i) && 3 < Math.abs(e - s) && (t = e,
            r) && r(),
            s = i,
            i = t
        }
    }
    function Ue(t, e, n) {
        var r = {};
        r[e.p] = "+=" + n,
        Vt.set(t, r)
    }
    function Qe(u, t) {
        function l(t, e, n, r, i) {
            var s = l.tween
              , o = e.onComplete
              , a = (n = n || c(),
            P(c, n, function() {
                s.kill(),
                l.tween = 0
            }));
            return i = r && i || 0,
            r = r || t - n,
            s && s.kill(),
            e[h] = t,
            e.inherit = !1,
            (e.modifiers = {})[h] = function() {
                return a(n + r * s.ratio + i * s.ratio * s.ratio)
            }
            ,
            e.onUpdate = function() {
                Dt.cache++,
                l.tween && ot()
            }
            ,
            e.onComplete = function() {
                l.tween = 0,
                o && o.call(s)
            }
            ,
            s = l.tween = Vt.to(u, e)
        }
        var c = ue(u, t)
          , h = "_scroll" + t.p2;
        return (u[h] = c).wheelHandler = function() {
            return l.tween && l.tween.kill() && (l.tween = 0)
        }
        ,
        qt(u, "wheel", c.wheelHandler),
        A.isTouch && qt(u, "touchmove", c.wheelHandler),
        l
    }
    C.version = "3.12.5",
    C.create = function(t) {
        return new C(t)
    }
    ,
    C.register = fe,
    C.getAll = function() {
        return be.slice()
    }
    ,
    C.getById = function(e) {
        return be.filter(function(t) {
            return t.vars.id === e
        })[0]
    }
    ,
    i() && Et.registerPlugin(C);
    function Ge(t, e) {
        return e = e && "matrix(1, 0, 0, 1, 0, 0)" !== Wt(t)[F] && Vt.to(t, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
        }).progress(1),
        t = t.getBoundingClientRect(),
        e && e.progress(0).kill(),
        t
    }
    function R(t, e, n, r) {
        var i = {
            display: "block"
        }
          , s = n[r ? "os2" : "p2"]
          , o = n[r ? "p2" : "os2"];
        t._isFlipped = r,
        i[n.a + "Percent"] = r ? -100 : 0,
        i[n.a] = r ? "1px" : 0,
        i["border" + s + vn] = 1,
        i["border" + o + vn] = 0,
        i[n.p] = e + "px",
        Vt.set(t, i)
    }
    function Ke(t, e) {
        !te || t || K ? (k(),
        $t = A.isRefreshing = !0,
        Dt.forEach(function(t) {
            return Xt(t) && ++t.cacheID && (t.rec = t())
        }),
        t = it("refreshInit"),
        nn && A.sort(),
        e || M(),
        Dt.forEach(function(t) {
            Xt(t) && (t.smooth && (t.target.style.scrollBehavior = "auto"),
            t(0))
        }),
        se.slice(0).forEach(function(t) {
            return t.refresh()
        }),
        K = !1,
        se.forEach(function(t) {
            var e, n;
            t._subPinOffset && t.pin && (e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
            n = t.pin[e],
            t.revert(!0, 1),
            t.adjustPinSpacing(t.pin[e] - n),
            t.refresh())
        }),
        sn = 1,
        E(!0),
        se.forEach(function(t) {
            var e = Nt(t.scroller, t._dir)
              , n = "max" === t.vars.end || t._endClamp && t.end > e
              , r = t._startClamp && t.start >= e;
            (n || r) && t.setPositions(r ? e - 1 : t.start, n ? Math.max(r ? e : t.start + 1, e) : t.end, !0)
        }),
        E(!1),
        sn = 0,
        t.forEach(function(t) {
            return t && t.render && t.render(-1)
        }),
        Dt.forEach(function(t) {
            Xt(t) && (t.smooth && requestAnimationFrame(function() {
                return t.target.style.scrollBehavior = "smooth"
            }),
            t.rec) && t(t.rec)
        }),
        O(U, 1),
        D.pause(),
        bn++,
        ot($t = 2),
        se.forEach(function(t) {
            return Xt(t.vars.onRefresh) && t.vars.onRefresh(t)
        }),
        $t = A.isRefreshing = !1,
        it("refresh")) : qt(A, "scrollEnd", We)
    }
    function Ze(t) {
        if (t) {
            var e, n, r = t.t.style, i = t.length, s = 0;
            for ((t.t._gsap || Vt.core.getCache(t.t)).uncache = 1; s < i; s += 2)
                n = t[s + 1],
                e = t[s],
                n ? r[e] = n : r[e] && r.removeProperty(e.replace(lt, "-$1").toLowerCase())
        }
    }
    var Vt, z, Ht, Ut, Qt, Gt, I, D, $e, Je, tn, L, Kt, en, F, Zt, B, Y, N, nn, rn, X, n, W, q, j, V, H, U, Q, G, K, sn, on, Z, $t, an, un, ln = 1, Jt = Date.now, $ = Jt(), te = 0, cn = 0, ee = function(t) {
        return "string" == typeof t
    }, hn = Math.abs, J = "right", tt = "bottom", fn = "width", pn = "height", dn = "Right", mn = "Left", gn = "Top", _n = "Bottom", ne = "padding", re = "margin", vn = "Width", ie = "px", yn = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    }, xn = {
        toggleActions: "play",
        anticipatePin: 0
    }, et = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    }, se = [], wn = {}, nt = {}, rt = [], it = function(t) {
        return nt[t] && nt[t].map(function(t) {
            return t()
        }) || rt
    }, r = [], bn = 0, st = 0, Tn = 1, ot = function(t) {
        if (2 === t || !$t && !K) {
            A.isUpdating = !0,
            un && un.update(0);
            var e = se.length
              , t = Jt()
              , n = 50 <= t - $
              , r = e && se[0].scroll();
            if (Tn = r < st ? -1 : 1,
            $t || (st = r),
            n && (te && !en && 200 < t - te && (te = 0,
            it("scrollEnd")),
            tn = $,
            $ = t),
            Tn < 0) {
                for (Zt = e; 0 < Zt--; )
                    se[Zt] && se[Zt].update(0, n);
                Tn = 1
            } else
                for (Zt = 0; Zt < e; Zt++)
                    se[Zt] && se[Zt].update(0, n);
            A.isUpdating = !1
        }
        Z = 0
    }, at = ["left", "top", tt, J, re + _n, re + dn, re + gn, re + mn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], ut = at.concat([fn, pn, "boxSizing", "max" + vn, "maxHeight", "position", re, ne, ne + gn, ne + dn, ne + _n, ne + mn]), lt = /([A-Z])/g, Sn = {
        left: 0,
        top: 0
    }, ct = /(webkit|moz|length|cssText|inset)/i, A = (oe.prototype.init = function(b, T) {
        var S, r, g, M, G, O, k, K, E, Z, $, J, C, tt, _, et, nt, v, A, y, rt, x, w, it, P, s, f, R, z, st, ot, p, d, i, at, ut, lt, I, D, L, ct, ht, o, ft, pt, m, dt, F, mt, gt, B, Y, N, X, W, _t, vt, yt, xt, q, wt, bt, Tt, St, Mt, j, V, H, U, t, Q, Ot, a, u, l, c, h, e, kt, Et, Ct, At, n, Pt, Rt, zt;
        this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        cn ? (p = (b = Ie(ee(b) || Ae(b) || b.nodeType ? {
            trigger: b
        } : b, xn)).onUpdate,
        d = b.toggleClass,
        i = b.id,
        at = b.onToggle,
        ut = b.onRefresh,
        lt = b.scrub,
        I = b.trigger,
        D = b.pin,
        L = b.pinSpacing,
        ct = b.invalidateOnRefresh,
        ht = b.anticipatePin,
        o = b.onScrubComplete,
        ft = b.onSnapComplete,
        pt = b.once,
        m = b.snap,
        dt = b.pinReparent,
        e = b.pinSpacer,
        F = b.containerAnimation,
        mt = b.fastScrollEnd,
        gt = b.preventOverlaps,
        B = b.horizontal || b.containerAnimation && !1 !== b.horizontal ? Ft : Bt,
        Y = !lt && 0 !== lt,
        N = It(b.scroller || Ht),
        t = Vt.core.getCache(N),
        X = ke(N),
        W = "fixed" === ("pinType"in b ? b.pinType : ae(N, "pinType") || X && "fixed"),
        _t = [b.onEnter, b.onLeave, b.onEnterBack, b.onLeaveBack],
        vt = Y && b.toggleActions.split(" "),
        yt = ("markers"in b ? b : xn).markers,
        xt = !X && parseFloat(Wt(N)["border" + B.p2 + vn]) || 0,
        q = this,
        wt = b.onRefreshInit && function() {
            return b.onRefreshInit(q)
        }
        ,
        Ct = N,
        At = X,
        Pt = (n = B).d,
        Rt = n.d2,
        zt = n.a,
        bt = (zt = ae(Ct, "getBoundingClientRect")) ? function() {
            return zt()[Pt]
        }
        : function() {
            return (At ? Ee(Rt) : Ct["client" + Rt]) || 0
        }
        ,
        n = N,
        Tt = !X || ~Lt.indexOf(n) ? Ce(n) : function() {
            return Sn
        }
        ,
        j = Mt = St = 0,
        V = ue(N, B),
        q._startClamp = q._endClamp = !1,
        q._dir = B,
        ht *= 45,
        q.scroller = N,
        q.scroll = F ? F.time.bind(F) : V,
        M = V(),
        q.vars = b,
        T = T || b.animation,
        "refreshPriority"in b && (nn = 1,
        -9999 === b.refreshPriority) && (un = q),
        t.tweenScroll = t.tweenScroll || {
            top: Qe(N, Bt),
            left: Qe(N, Ft)
        },
        q.tweenTo = S = t.tweenScroll[B.p],
        q.scrubDuration = function(t) {
            (s = Ae(t) && t) ? P ? P.duration(t) : P = Vt.to(T, {
                ease: "expo",
                totalProgress: "+=0",
                inherit: !1,
                duration: s,
                paused: !0,
                onComplete: function() {
                    return o && o(q)
                }
            }) : (P && P.progress(1).kill(),
            P = 0)
        }
        ,
        T && (T.vars.lazy = !1,
        T._initted && !q.isReverted || !1 !== T.vars.immediateRender && !1 !== b.immediateRender && T.duration() && T.render(0, !0, !0),
        q.animation = T.pause(),
        (T.scrollTrigger = q).scrubDuration(lt),
        w = 0,
        i = i || T.vars.id),
        m && (Pe(m) && !m.push || (m = {
            snapTo: m
        }),
        "scrollBehavior"in Gt.style && Vt.set(X ? [Gt, Qt] : N, {
            scrollBehavior: "auto"
        }),
        Dt.forEach(function(t) {
            return Xt(t) && t.target === (X ? Ut.scrollingElement || Qt : N) && (t.smooth = !1)
        }),
        g = Xt(m.snapTo) ? m.snapTo : "labels" === m.snapTo ? (Et = T,
        function(t) {
            return Vt.utils.snap(Le(Et), t)
        }
        ) : "labelsDirectional" === m.snapTo ? (kt = T,
        function(t, e) {
            return Fe(Le(kt))(t, e.direction)
        }
        ) : !1 !== m.directional ? function(t, e) {
            return Fe(m.snapTo)(t, Jt() - Mt < 500 ? 0 : e.direction)
        }
        : Vt.utils.snap(m.snapTo),
        f = Pe(f = m.duration || {
            min: .1,
            max: 2
        }) ? Je(f.min, f.max) : Je(f, f),
        R = Vt.delayedCall(m.delay || s / 2 || .1, function() {
            var t, e, n, r, i, s, o, a, u, l = V(), c = Jt() - Mt < 500, h = S.tween;
            !(c || Math.abs(q.getVelocity()) < 10) || h || en || St === l ? q.isActive && St !== l && R.restart(!0) : (n = (l - O) / E,
            r = T && !Y ? T.totalProgress() : n,
            c = !c && (r - it) / (Jt() - tn) * 1e3 || 0,
            i = Vt.utils.clamp(-n, 1 - n, hn(c / 2) * c / .185),
            s = n + (!1 === m.inertia ? 0 : i),
            o = m.onStart,
            a = m.onInterrupt,
            u = m.onComplete,
            Ae(t = g(s, q)) || (t = s),
            e = Math.round(O + t * E),
            l <= k && O <= l && e !== l && (h && !h._initted && h.data <= hn(e - l) || (!1 === m.inertia && (i = t - n),
            S(e, {
                duration: f(hn(.185 * Math.max(hn(s - r), hn(t - r)) / c / .05 || 0)),
                ease: m.ease || "power3",
                data: hn(e - l),
                onInterrupt: function() {
                    return R.restart(!0) && a && a(q)
                },
                onComplete: function() {
                    q.update(),
                    St = V(),
                    T && (P ? P.resetTo("totalProgress", t, T._tTime / T._tDur) : T.progress(t)),
                    w = it = T && !Y ? T.totalProgress() : q.progress,
                    ft && ft(q),
                    u && u(q)
                }
            }, l, i * E, e - l - i * E),
            o && o(q, S.tween))))
        }).pause()),
        i && (wn[i] = q),
        n = (n = (I = q.trigger = It(I || !0 !== D && D)) && I._gsap && I._gsap.stRevert) && n(q),
        D = !0 === D ? I : It(D),
        ee(d) && (d = {
            targets: I,
            className: d
        }),
        D && (!1 !== L && L !== re && (L = !(!L && D.parentNode && D.parentNode.style && "flex" === Wt(D.parentNode).display) && ne),
        q.pin = D,
        (r = Vt.core.getCache(D)).spacer ? Z = r.pinState : (e && ((e = It(e)) && !e.nodeType && (e = e.current || e.nativeElement),
        r.spacerIsNative = !!e,
        e) && (r.spacerState = je(e)),
        r.spacer = C = e || Ut.createElement("div"),
        C.classList.add("pin-spacer"),
        i && C.classList.add("pin-spacer-" + i),
        r.pinState = Z = je(D)),
        !1 !== b.force3D && Vt.set(D, {
            force3D: !0
        }),
        q.spacer = C = r.spacer,
        t = Wt(D),
        v = t[L + B.os2],
        tt = Vt.getProperty(D),
        _ = Vt.quickSetter(D, B.a, ie),
        qe(D, C, t),
        J = je(D)),
        yt && (e = Pe(yt) ? Ie(yt, yn) : yn,
        H = Ye("scroller-start", i, N, B, e, 0),
        U = Ye("scroller-end", i, N, B, e, 0, H),
        t = H["offset" + B.op.d2],
        h = It(ae(N, "content") || N),
        Q = this.markerStart = Ye("start", i, h, B, e, t, 0, F),
        Ot = this.markerEnd = Ye("end", i, h, B, e, t, 0, F),
        F && (ot = Vt.quickSetter([Q, Ot], B.a, ie)),
        W || Lt.length && !0 === ae(N, "fixedMarkers") || (e = Wt(h = X ? Gt : N).position,
        h.style.position = "absolute" === e || "fixed" === e ? e : "relative",
        Vt.set([H, U], {
            force3D: !0
        }),
        y = Vt.quickSetter(H, B.a, ie),
        x = Vt.quickSetter(U, B.a, ie))),
        F && (a = F.vars.onUpdate,
        u = F.vars.onUpdateParams,
        F.eventCallback("onUpdate", function() {
            q.update(0, 0, 1),
            a && a.apply(F, u || [])
        })),
        q.previous = function() {
            return se[se.indexOf(q) - 1]
        }
        ,
        q.next = function() {
            return se[se.indexOf(q) + 1]
        }
        ,
        q.revert = function(t, e) {
            if (!e)
                return q.kill(!0);
            var n, r, i = !1 !== t || !q.enabled, e = Kt;
            i !== q.isReverted && (i && (z = Math.max(V(), q.scroll.rec || 0),
            j = q.progress,
            st = T && T.progress()),
            Q && [Q, Ot, H, U].forEach(function(t) {
                return t.style.display = i ? "none" : "block"
            }),
            i && (Kt = q).update(i),
            !D || dt && q.isActive || (i ? (t = D,
            n = C,
            Ze(r = Z),
            (r = t._gsap).spacerIsNative ? Ze(r.spacerState) : t._gsap.swappedIn && (r = n.parentNode) && (r.insertBefore(t, n),
            r.removeChild(n)),
            t._gsap.swappedIn = !1) : qe(D, C, Wt(D), A)),
            i || q.update(i),
            Kt = e,
            q.isReverted = i)
        }
        ,
        q.refresh = function(t, e, n, r) {
            if (!Kt && q.enabled || e)
                if (D && t && te)
                    qt(oe, "scrollEnd", We);
                else {
                    !$t && wt && wt(q),
                    Kt = q,
                    S.tween && !n && (S.tween.kill(),
                    S.tween = 0),
                    P && P.pause(),
                    ct && T && T.revert({
                        kill: !1
                    }).invalidate(),
                    q.isReverted || q.revert(!0, !0),
                    q._subPinOffset = !1;
                    var i, s, o, a, u, l, c, h, e = bt(), t = Tt(), f = F ? F.duration() : Nt(N, B), p = E <= .01, d = 0, m = r || 0, g = (Pe(n) ? n : b).end, _ = b.endTrigger || I, v = Pe(n) ? n.start : b.start || (0 !== b.start && I ? D ? "0 0" : "0 100%" : 0), y = q.pinnedContainer = b.pinnedContainer && It(b.pinnedContainer, q), x = I && Math.max(0, se.indexOf(q)) || 0, w = x;
                    for (yt && Pe(n) && (c = Vt.getProperty(H, B.p),
                    h = Vt.getProperty(U, B.p)); w--; )
                        (o = se[w]).end || o.refresh(0, 1) || (Kt = q),
                        !(a = o.pin) || a !== I && a !== D && a !== y || o.isReverted || ((u = u || []).unshift(o),
                        o.revert(!0, !0)),
                        o !== se[w] && (x--,
                        w--);
                    for (v = Se(v = Xt(v) ? v(q) : v, "start", q),
                    O = Ve(v, I, e, B, V(), Q, H, q, t, xt, W, f, F, q._startClamp && "_startClamp") || (D ? -.001 : 0),
                    Xt(g) && (g = g(q)),
                    ee(g) && !g.indexOf("+=") && (~g.indexOf(" ") ? g = (ee(v) ? v.split(" ")[0] : "") + g : (d = Be(g.substr(2), e),
                    g = ee(v) ? v : (F ? Vt.utils.mapRange(0, F.duration(), F.scrollTrigger.start, F.scrollTrigger.end, O) : O) + d,
                    _ = I)),
                    g = Se(g, "end", q),
                    k = Math.max(O, Ve(g || (_ ? "100% 0" : f), _, e, B, V() + d, Ot, U, q, t, xt, W, f, F, q._endClamp && "_endClamp")) || -.001,
                    d = 0,
                    w = x; w--; )
                        (a = (o = se[w]).pin) && o.start - o._pinPush <= O && !F && 0 < o.end && (i = o.end - (q._startClamp ? Math.max(0, o.start) : o.start),
                        (a === I && o.start - o._pinPush < O || a === y) && isNaN(v) && (d += i * (1 - o.progress)),
                        a === D) && (m += i);
                    if (O += d,
                    k += d,
                    q._startClamp && (q._startClamp += d),
                    q._endClamp && !$t && (q._endClamp = k || -.001,
                    k = Math.min(k, Nt(N, B))),
                    E = k - O || (O -= .01) && .001,
                    p && (j = Vt.utils.clamp(0, 1, Vt.utils.normalize(O, k, z))),
                    q._pinPush = m,
                    Q && d && ((i = {})[B.a] = "+=" + d,
                    y && (i[B.p] = "-=" + V()),
                    Vt.set([Q, Ot], i)),
                    !D || sn && q.end >= Nt(N, B)) {
                        if (I && V() && !F)
                            for (s = I.parentNode; s && s !== Gt; )
                                s._pinOffset && (O -= s._pinOffset,
                                k -= s._pinOffset),
                                s = s.parentNode
                    } else
                        i = Wt(D),
                        n = B === Bt,
                        g = V(),
                        et = parseFloat(tt(B.a)) + m,
                        !f && 1 < k && (l = {
                            style: l = (X ? Ut.scrollingElement || Qt : N).style,
                            value: l["overflow" + B.a.toUpperCase()]
                        },
                        X) && "scroll" !== Wt(Gt)["overflow" + B.a.toUpperCase()] && (l.style["overflow" + B.a.toUpperCase()] = "scroll"),
                        qe(D, C, i),
                        J = je(D),
                        s = Ge(D, !0),
                        _ = W && ue(N, n ? Ft : Bt)(),
                        L ? ((A = [L + B.os2, E + m + ie]).t = C,
                        (w = L === ne ? De(D, B) + E + m : 0) && (A.push(B.d, w + ie),
                        "auto" !== C.style.flexBasis) && (C.style.flexBasis = w + ie),
                        Ze(A),
                        y && se.forEach(function(t) {
                            t.pin === y && !1 !== t.vars.pinSpacing && (t._subPinOffset = !0)
                        }),
                        W && V(z)) : (w = De(D, B)) && "auto" !== C.style.flexBasis && (C.style.flexBasis = w + ie),
                        W && ((e = {
                            top: s.top + (n ? g - O : _) + ie,
                            left: s.left + (n ? _ : g - O) + ie,
                            boxSizing: "border-box",
                            position: "fixed"
                        })[fn] = e.maxWidth = Math.ceil(s.width) + ie,
                        e[pn] = e.maxHeight = Math.ceil(s.height) + ie,
                        e[re] = e[re + gn] = e[re + dn] = e[re + _n] = e[re + mn] = "0",
                        e[ne] = i[ne],
                        e[ne + gn] = i[ne + gn],
                        e[ne + dn] = i[ne + dn],
                        e[ne + _n] = i[ne + _n],
                        e[ne + mn] = i[ne + mn],
                        $ = function(t, e, n) {
                            for (var r, i = [], s = t.length, o = n ? 8 : 0; o < s; o += 2)
                                r = t[o],
                                i.push(r, r in e ? e[r] : t[o + 1]);
                            return i.t = t.t,
                            i
                        }(Z, e, dt),
                        $t) && V(0),
                        T ? (t = T._initted,
                        rn(1),
                        T.render(T.duration(), !0, !0),
                        nt = tt(B.a) - et + E + m,
                        rt = 1 < Math.abs(E - nt),
                        W && rt && $.splice($.length - 2, 2),
                        T.render(0, !0, !0),
                        t || T.invalidate(!0),
                        T.parent || T.totalTime(T.totalTime()),
                        rn(0)) : nt = E,
                        l && (l.value ? l.style["overflow" + B.a.toUpperCase()] = l.value : l.style.removeProperty("overflow-" + B.a));
                    u && u.forEach(function(t) {
                        return t.revert(!1, !0)
                    }),
                    q.start = O,
                    q.end = k,
                    M = G = $t ? z : V(),
                    F || $t || (M < z && V(z),
                    q.scroll.rec = 0),
                    q.revert(!1, !0),
                    Mt = Jt(),
                    R && (St = -1,
                    R.restart(!0)),
                    Kt = 0,
                    T && Y && (T._initted || st) && T.progress() !== st && T.progress(st || 0, !0).render(T.time(), !0, !0),
                    (p || j !== q.progress || F || ct) && (T && !Y && T.totalProgress(F && O < -.001 && !j ? Vt.utils.normalize(O, k, 0) : j, !0),
                    q.progress = p || (M - O) / E === j ? 0 : j),
                    D && L && (C._pinOffset = Math.round(q.progress * nt)),
                    P && P.invalidate(),
                    isNaN(c) || (c -= Vt.getProperty(H, B.p),
                    h -= Vt.getProperty(U, B.p),
                    Ue(H, B, c),
                    Ue(Q, B, c - (r || 0)),
                    Ue(U, B, h),
                    Ue(Ot, B, h - (r || 0))),
                    p && !$t && q.update(),
                    !ut || $t || K || (K = !0,
                    ut(q),
                    K = !1)
                }
        }
        ,
        q.getVelocity = function() {
            return (V() - G) / (Jt() - tn) * 1e3 || 0
        }
        ,
        q.endAnimation = function() {
            Re(q.callbackAnimation),
            T && (P ? P.progress(1) : T.paused() ? Y || Re(T, q.direction < 0, 1) : Re(T, T.reversed()))
        }
        ,
        q.labelToScroll = function(t) {
            return T && T.labels && (O || q.refresh() || O) + T.labels[t] / T.duration() * E || 0
        }
        ,
        q.getTrailing = function(e) {
            var t = se.indexOf(q)
              , t = 0 < q.direction ? se.slice(0, t).reverse() : se.slice(t + 1);
            return (ee(e) ? t.filter(function(t) {
                return t.vars.preventOverlaps === e
            }) : t).filter(function(t) {
                return 0 < q.direction ? t.end <= O : t.start >= k
            })
        }
        ,
        q.update = function(t, e, n) {
            var r, i, s, o, a, u, l, c, h;
            (!F || n || t) && (n = !0 === $t ? z : q.scroll(),
            a = (a = t ? 0 : (n - O) / E) < 0 ? 0 : 1 < a ? 1 : a || 0,
            l = q.progress,
            e && (G = M,
            M = F ? V() : n,
            m) && (it = w,
            w = T && !Y ? T.totalProgress() : a),
            ht && D && !Kt && !ln && te && (!a && O < n + (n - G) / (Jt() - tn) * ht ? a = 1e-4 : 1 === a && k > n + (n - G) / (Jt() - tn) * ht && (a = .9999)),
            a !== l && q.enabled && (c = (e = (r = q.isActive = !!a && a < 1) != (!!l && l < 1)) || !!a != !!l,
            q.direction = l < a ? 1 : -1,
            q.progress = a,
            c && !Kt && (i = a && !l ? 0 : 1 === a ? 1 : 1 === l ? 2 : 3,
            Y) && (s = !e && "none" !== vt[i + 1] && vt[i + 1] || vt[i],
            o = T && ("complete" === s || "reset" === s || s in T)),
            gt && (e || o) && (o || lt || !T) && (Xt(gt) ? gt(q) : q.getTrailing(gt).forEach(function(t) {
                return t.endAnimation()
            })),
            Y || (!P || Kt || ln ? T && T.totalProgress(a, !(!Kt || !Mt && !t)) : (P._dp._time - P._start !== P._time && P.render(P._dp._time - P._start),
            P.resetTo ? P.resetTo("totalProgress", a, T._tTime / T._tDur) : (P.vars.totalProgress = a,
            P.invalidate().restart()))),
            D && (t && L && (C.style[L + B.os2] = v),
            W ? c && (l = !t && l < a && n < k + 1 && n + 1 >= Nt(N, B),
            dt && (t || !r && !l ? He(D, C) : (h = Ge(D, !0),
            u = n - O,
            He(D, Gt, h.top + (B === Bt ? u : 0) + ie, h.left + (B === Bt ? 0 : u) + ie))),
            Ze(r || l ? $ : J),
            rt && a < 1 && r || _(et + (1 !== a || l ? 0 : nt))) : _(Oe(et + nt * a))),
            !m || S.tween || Kt || ln || R.restart(!0),
            d && (e || pt && a && (a < 1 || !on)) && $e(d.targets).forEach(function(t) {
                return t.classList[r || pt ? "add" : "remove"](d.className)
            }),
            !p || Y || t || p(q),
            c && !Kt ? (Y && (o && ("complete" === s ? T.pause().totalProgress(1) : "reset" === s ? T.restart(!0).pause() : "restart" === s ? T.restart(!0) : T[s]()),
            p) && p(q),
            !e && on || (at && e && ze(q, at),
            _t[i] && ze(q, _t[i]),
            pt && (1 === a ? q.kill(!1, 1) : _t[i] = 0),
            e) || _t[i = 1 === a ? 1 : 3] && ze(q, _t[i]),
            mt && !r && Math.abs(q.getVelocity()) > (Ae(mt) ? mt : 2500) && (Re(q.callbackAnimation),
            P ? P.progress(1) : Re(T, "reverse" === s ? 1 : !a, 1))) : Y && p && !Kt && p(q)),
            x && (h = F ? n / F.duration() * (F._caScrollDist || 0) : n,
            y(h + (H._isFlipped ? 1 : 0)),
            x(h)),
            ot) && ot(-n / F.duration() * (F._caScrollDist || 0))
        }
        ,
        q.enable = function(t, e) {
            q.enabled || (q.enabled = !0,
            qt(N, "resize", Xe),
            X || qt(N, "scroll", Ne),
            wt && qt(oe, "refreshInit", wt),
            !1 !== t && (q.progress = j = 0,
            M = G = St = V()),
            !1 !== e && q.refresh())
        }
        ,
        q.getTween = function(t) {
            return t && S ? S.tween : P
        }
        ,
        q.setPositions = function(t, e, n, r) {
            var i, s, o;
            F && (i = F.scrollTrigger,
            s = F.duration(),
            o = i.end - i.start,
            t = i.start + o * t / s,
            e = i.start + o * e / s),
            q.refresh(!1, !1, {
                start: Me(t, n && !!q._startClamp),
                end: Me(e, n && !!q._endClamp)
            }, r),
            q.update()
        }
        ,
        q.adjustPinSpacing = function(t) {
            var e;
            A && t && (e = A.indexOf(B.d) + 1,
            A[e] = parseFloat(A[e]) + t + ie,
            A[1] = parseFloat(A[1]) + t + ie,
            Ze(A))
        }
        ,
        q.disable = function(t, e) {
            if (q.enabled && (!1 !== t && q.revert(!0, !0),
            q.enabled = q.isActive = !1,
            e || P && P.pause(),
            z = 0,
            r && (r.uncache = 1),
            wt && jt(oe, "refreshInit", wt),
            R && (R.pause(),
            S.tween) && S.tween.kill() && (S.tween = 0),
            !X)) {
                for (var n = se.length; n--; )
                    if (se[n].scroller === N && se[n] !== q)
                        return;
                jt(N, "resize", Xe),
                X || jt(N, "scroll", Ne)
            }
        }
        ,
        q.kill = function(t, e) {
            q.disable(t, e),
            P && !e && P.kill(),
            i && delete wn[i];
            var n = se.indexOf(q);
            0 <= n && se.splice(n, 1),
            n === Zt && 0 < Tn && Zt--,
            n = 0,
            se.forEach(function(t) {
                return t.scroller === q.scroller && (n = 1)
            }),
            n || $t || (q.scroll.rec = 0),
            T && (T.scrollTrigger = null,
            t && T.revert({
                kill: !1
            }),
            e || T.kill()),
            Q && [Q, Ot, H, U].forEach(function(t) {
                return t.parentNode && t.parentNode.removeChild(t)
            }),
            un === q && (un = 0),
            D && (r && (r.uncache = 1),
            n = 0,
            se.forEach(function(t) {
                return t.pin === D && n++
            }),
            n || (r.spacer = 0)),
            b.onKill && b.onKill(q)
        }
        ,
        se.push(q),
        q.enable(!1, !1),
        n && n(q),
        T && T.add && !E ? (l = q.update,
        q.update = function() {
            q.update = l,
            O || k || q.refresh()
        }
        ,
        Vt.delayedCall(.01, q.update),
        E = .01,
        O = k = 0) : q.refresh(),
        D && an !== bn && (c = an = bn,
        requestAnimationFrame(function() {
            return c === bn && Ke(!0)
        }))) : this.update = this.refresh = this.kill = Yt
    }
    ,
    oe.register = function(t) {
        return z || (Vt = t || v(),
        _() && window.document && oe.enable(),
        z = cn),
        z
    }
    ,
    oe.defaults = function(t) {
        if (t)
            for (var e in t)
                xn[e] = t[e];
        return xn
    }
    ,
    oe.disable = function(e, n) {
        cn = 0,
        se.forEach(function(t) {
            return t[n ? "kill" : "disable"](e)
        }),
        jt(Ht, "wheel", Ne),
        jt(Ut, "scroll", Ne),
        clearInterval(L),
        jt(Ut, "touchcancel", Yt),
        jt(Gt, "touchstart", Yt),
        x(jt, Ut, "pointerdown,touchstart,mousedown", m),
        x(jt, Ut, "pointerup,touchend,mouseup", g),
        D.kill(),
        y(jt);
        for (var t = 0; t < Dt.length; t += 3)
            w(jt, Dt[t], Dt[t + 1]),
            w(jt, Dt[t], Dt[t + 2])
    }
    ,
    oe.enable = function() {
        if (Ht = window,
        Ut = document,
        Qt = Ut.documentElement,
        Gt = Ut.body,
        Vt && ($e = Vt.utils.toArray,
        Je = Vt.utils.clamp,
        H = Vt.core.context || Yt,
        rn = Vt.core.suppressOverwrites || Yt,
        U = Ht.history.scrollRestoration || "auto",
        st = Ht.pageYOffset,
        Vt.core.globals("ScrollTrigger", oe),
        Gt)) {
            cn = 1,
            (Q = document.createElement("div")).style.height = "100vh",
            Q.style.position = "absolute",
            k(),
            function t() {
                return cn && requestAnimationFrame(t)
            }(),
            C.register(Vt),
            oe.isTouch = C.isTouch,
            V = C.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            W = 1 === C.isTouch,
            qt(Ht, "wheel", Ne),
            I = [Ht, Ut, Qt, Gt],
            Vt.matchMedia ? (oe.matchMedia = function(t) {
                var e, n = Vt.matchMedia();
                for (e in t)
                    n.add(e, t[e]);
                return n
            }
            ,
            Vt.addEventListener("matchMediaInit", function() {
                return M()
            }),
            Vt.addEventListener("matchMediaRevert", function() {
                return S()
            }),
            Vt.addEventListener("matchMedia", function() {
                Ke(0, 1),
                it("matchMedia")
            }),
            Vt.matchMedia("(orientation: portrait)", function() {
                return T(),
                T
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            T(),
            qt(Ut, "scroll", Ne);
            var t, e = Gt.style, n = e.borderTopStyle, r = Vt.core.Animation.prototype;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            e.borderTopStyle = "solid",
            r = Ge(Gt),
            Bt.m = Math.round(r.top + Bt.sc()) || 0,
            Ft.m = Math.round(r.left + Ft.sc()) || 0,
            n ? e.borderTopStyle = n : e.removeProperty("border-top-style"),
            L = setInterval(b, 250),
            Vt.delayedCall(.5, function() {
                return ln = 0
            }),
            qt(Ut, "touchcancel", Yt),
            qt(Gt, "touchstart", Yt),
            x(qt, Ut, "pointerdown,touchstart,mousedown", m),
            x(qt, Ut, "pointerup,touchend,mouseup", g),
            F = Vt.utils.checkPrefix("transform"),
            ut.push(F),
            z = Jt(),
            D = Vt.delayedCall(.2, Ke).pause(),
            N = [Ut, "visibilitychange", function() {
                var t = Ht.innerWidth
                  , e = Ht.innerHeight;
                Ut.hidden ? (B = t,
                Y = e) : B === t && Y === e || Xe()
            }
            , Ut, "DOMContentLoaded", Ke, Ht, "load", Ke, Ht, "resize", Xe],
            y(qt),
            se.forEach(function(t) {
                return t.enable(0, 1)
            }),
            t = 0; t < Dt.length; t += 3)
                w(jt, Dt[t], Dt[t + 1]),
                w(jt, Dt[t], Dt[t + 2])
        }
    }
    ,
    oe.config = function(t) {
        "limitCallbacks"in t && (on = !!t.limitCallbacks);
        var e = t.syncInterval;
        e && clearInterval(L) || (L = e) && setInterval(b, e),
        "ignoreMobileResize"in t && (W = 1 === oe.isTouch && t.ignoreMobileResize),
        "autoRefreshEvents"in t && (y(jt),
        y(qt, t.autoRefreshEvents || "none"),
        X = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
    }
    ,
    oe.scrollerProxy = function(t, e) {
        var t = It(t)
          , n = Dt.indexOf(t)
          , r = ke(t);
        ~n && Dt.splice(n, r ? 6 : 2),
        e && (r ? Lt.unshift(Ht, e, Gt, e, Qt, e) : Lt.unshift(t, e))
    }
    ,
    oe.clearMatchMedia = function(e) {
        se.forEach(function(t) {
            return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)
        })
    }
    ,
    oe.isInViewport = function(t, e, n) {
        t = (ee(t) ? It(t) : t).getBoundingClientRect(),
        e = t[n ? fn : pn] * e || 0;
        return n ? 0 < t.right - e && t.left + e < Ht.innerWidth : 0 < t.bottom - e && t.top + e < Ht.innerHeight
    }
    ,
    oe.positionInViewport = function(t, e, n) {
        var t = (t = ee(t) ? It(t) : t).getBoundingClientRect()
          , r = t[n ? fn : pn]
          , r = null == e ? r / 2 : e in et ? et[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
        return n ? (t.left + r) / Ht.innerWidth : (t.top + r) / Ht.innerHeight
    }
    ,
    oe.killAll = function(t) {
        se.slice(0).forEach(function(t) {
            return "ScrollSmoother" !== t.vars.id && t.kill()
        }),
        !0 !== t && (t = nt.killAll || [],
        nt = {},
        t.forEach(function(t) {
            return t()
        }))
    }
    ,
    oe);
    function oe(t, e) {
        z || oe.register(Vt) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        H(this),
        this.init(t, e)
    }
    function ht(t, e, n, r) {
        return r < e ? t(r) : e < 0 && t(0),
        r < n ? (r - e) / (n - e) : n < 0 ? e / (e - n) : 1
    }
    function ft(t, e) {
        !0 === e ? t.style.removeProperty("touch-action") : t.style.touchAction = !0 === e ? "auto" : e ? "pan-" + e + (C.isTouch ? " pinch-zoom" : "") : "none",
        t === Qt && ft(Gt, e)
    }
    function pt(t) {
        var e, n = t.event, r = t.target, t = t.axis, i = (n.changedTouches ? n.changedTouches[0] : n).target, s = i._gsap || Vt.core.getCache(i), o = Jt();
        if (!s._isScrollT || 2e3 < o - s._isScrollT) {
            for (; i && i !== Gt && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !_t[(e = Wt(i)).overflowY] && !_t[e.overflowX]); )
                i = i.parentNode;
            s._isScroll = i && i !== r && !ke(i) && (_t[(e = Wt(i)).overflowY] || _t[e.overflowX]),
            s._isScrollT = o
        }
        !s._isScroll && "x" !== t || (n.stopPropagation(),
        n._gsapAllow = !0)
    }
    function dt(t, e, n, r) {
        return C.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: r = r && pt,
            onPress: r,
            onDrag: r,
            onScroll: r,
            onEnable: function() {
                return n && qt(Ut, C.eventTypes[0], yt, !1, !0)
            },
            onDisable: function() {
                return jt(Ut, C.eventTypes[0], yt, !0)
            }
        })
    }
    function mt(t) {
        function n() {
            return l = !1
        }
        function s() {
            a = Nt(_, Bt),
            E = Je(V ? 1 : 0, a),
            d && (k = Je(0, Nt(_, Ft))),
            u = bn
        }
        function o() {
            y._gsap.y = Oe(parseFloat(y._gsap.y) + x.offset) + "px",
            y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(y._gsap.y) + ", 0, 1)",
            x.offset = x.cacheID = 0
        }
        function i() {
            s(),
            c.isActive() && c.vars.scrollY > a && (x() > a ? c.progress(1) && x(a) : c.resetTo("scrollY", a))
        }
        (t = Pe(t) ? t : {}).preventDefault = t.isNormalizer = t.allowClicks = !0,
        t.type || (t.type = "wheel,touch"),
        t.debounce = !!t.debounce,
        t.id = t.id || "normalizer";
        var r, a, u, l, c, h, f, p, d = t.normalizeScrollX, e = t.momentum, m = t.allowNestedScroll, g = t.onRelease, _ = It(t.target) || Qt, v = Vt.core.globals().ScrollSmoother, v = v && v.get(), y = V && (t.content && It(t.content) || v && !1 !== t.content && !v.smooth() && v.content()), x = ue(_, Bt), w = ue(_, Ft), b = 1, T = (C.isTouch && Ht.visualViewport ? Ht.visualViewport.scale * Ht.visualViewport.width : Ht.outerWidth) / Ht.innerWidth, S = 0, M = Xt(e) ? function() {
            return e(r)
        }
        : function() {
            return e || 2.8
        }
        , O = dt(_, t.type, !0, m), k = Yt, E = Yt;
        return y && Vt.set(y, {
            y: "+=0"
        }),
        t.ignoreCheck = function(t) {
            return V && "touchmove" === t.type && (l ? (requestAnimationFrame(n),
            e = Oe(r.deltaY / 2),
            e = E(x.v - e),
            y && e !== x.v + x.offset && (x.offset = e - x.v,
            e = Oe((parseFloat(y && y._gsap.y) || 0) - x.offset),
            y.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
            y._gsap.y = e + "px",
            x.cacheID = Dt.cache,
            ot()),
            !0) : (x.offset && o(),
            void (l = !0))) || 1.05 < b && "touchstart" !== t.type || r.isGesturing || t.touches && 1 < t.touches.length;
            var e
        }
        ,
        t.onPress = function() {
            l = !1;
            var t = b;
            b = Oe((Ht.visualViewport && Ht.visualViewport.scale || 1) / T),
            c.pause(),
            t !== b && ft(_, 1.01 < b || !d && "x"),
            h = w(),
            f = x(),
            s(),
            u = bn
        }
        ,
        t.onRelease = t.onGestureStart = function(t, e) {
            var n, r;
            x.offset && o(),
            e ? (Dt.cache++,
            e = M(),
            d && (r = (n = w()) + .05 * e * -t.velocityX / .227,
            e *= ht(w, n, r, Nt(_, Ft)),
            c.vars.scrollX = k(r)),
            r = (n = x()) + .05 * e * -t.velocityY / .227,
            e *= ht(x, n, r, Nt(_, Bt)),
            c.vars.scrollY = E(r),
            c.invalidate().duration(e).play(.01),
            (V && c.vars.scrollY >= a || a - 1 <= n) && Vt.to({}, {
                onUpdate: i,
                duration: e
            })) : p.restart(!0),
            g && g(t)
        }
        ,
        t.onWheel = function() {
            c._ts && c.pause(),
            1e3 < Jt() - S && (u = 0,
            S = Jt())
        }
        ,
        t.onChange = function(t, e, n, r, i) {
            bn !== u && s(),
            e && d && w(k(r[2] === e ? h + (t.startX - t.x) : w() + e - r[1])),
            n && (x.offset && o(),
            t = (r = i[2] === n) ? f + t.startY - t.y : x() + n - i[1],
            i = E(t),
            r && t !== i && (f += i - t),
            x(i)),
            (n || e) && ot()
        }
        ,
        t.onEnable = function() {
            ft(_, !d && "x"),
            A.addEventListener("refresh", i),
            qt(Ht, "resize", i),
            x.smooth && (x.target.style.scrollBehavior = "auto",
            x.smooth = w.smooth = !1),
            O.enable()
        }
        ,
        t.onDisable = function() {
            ft(_, !0),
            jt(Ht, "resize", i),
            A.removeEventListener("refresh", i),
            O.kill()
        }
        ,
        t.lockAxis = !1 !== t.lockAxis,
        ((r = new C(t)).iOS = V) && !x() && x(1),
        V && Vt.ticker.add(Yt),
        p = r._dc,
        c = Vt.to(r, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: d ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: P(x, x(), function() {
                    return c.pause()
                })
            },
            onUpdate: ot,
            onComplete: p.vars.onComplete
        }),
        r
    }
    A.version = "3.12.5",
    A.saveStyles = function(t) {
        return t ? $e(t).forEach(function(t) {
            var e;
            t && t.style && (0 <= (e = r.indexOf(t)) && r.splice(e, 5),
            r.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), Vt.core.getCache(t), H()))
        }) : r
    }
    ,
    A.revert = function(t, e) {
        return M(!t, e)
    }
    ,
    A.create = function(t, e) {
        return new A(t,e)
    }
    ,
    A.refresh = function(t) {
        return t ? Xe() : (z || A.register()) && Ke(!0)
    }
    ,
    A.update = function(t) {
        return ++Dt.cache && ot(!0 === t ? 2 : 0)
    }
    ,
    A.clearScrollMemory = O,
    A.maxScroll = function(t, e) {
        return Nt(t, e ? Ft : Bt)
    }
    ,
    A.getScrollFunc = function(t, e) {
        return ue(It(t), e ? Ft : Bt)
    }
    ,
    A.getById = function(t) {
        return wn[t]
    }
    ,
    A.getAll = function() {
        return se.filter(function(t) {
            return "ScrollSmoother" !== t.vars.id
        })
    }
    ,
    A.isScrolling = function() {
        return !!te
    }
    ,
    A.snapDirectional = Fe,
    A.addEventListener = function(t, e) {
        t = nt[t] || (nt[t] = []);
        ~t.indexOf(e) || t.push(e)
    }
    ,
    A.removeEventListener = function(t, e) {
        t = nt[t],
        e = t && t.indexOf(e);
        0 <= e && t.splice(e, 1)
    }
    ,
    A.batch = function(t, e) {
        var n, r = [], i = {}, s = e.interval || .016, o = e.batchMax || 1e9;
        for (n in e)
            i[n] = "on" === n.substr(0, 2) && Xt(e[n]) && "onRefreshInit" !== n ? function(t) {
                var e = []
                  , n = []
                  , r = Vt.delayedCall(s, function() {
                    t(e, n),
                    e = [],
                    n = []
                }).pause();
                return function(t) {
                    e.length || r.restart(!0),
                    e.push(t.trigger),
                    n.push(t),
                    o <= e.length && r.progress(1)
                }
            }(e[n]) : e[n];
        return Xt(o) && (o = o(),
        qt(A, "refresh", function() {
            return o = e.batchMax()
        })),
        $e(t).forEach(function(t) {
            var e = {};
            for (n in i)
                e[n] = i[n];
            e.trigger = t,
            r.push(A.create(e))
        }),
        r
    }
    ;
    var gt, _t = {
        auto: 1,
        scroll: 1
    }, vt = /(input|label|select|textarea)/i, yt = function(t) {
        var e = vt.test(t.target.tagName);
        (e || gt) && (t._gsapAllow = !0,
        gt = e)
    };
    A.sort = function(t) {
        return se.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        }
        )
    }
    ,
    A.observe = function(t) {
        return new C(t)
    }
    ,
    A.normalizeScroll = function(t) {
        var e;
        return void 0 === t ? n : !0 === t && n ? n.enable() : !1 !== t ? (e = t instanceof C ? t : mt(t),
        n && n.target === e.target && n.kill(),
        ke(e.target) && (n = e),
        e) : (n && n.kill(),
        void (n = t))
    }
    ,
    A.core = {
        _getVelocityProp: zt,
        _inputObserver: dt,
        _scrollers: Dt,
        _proxies: Lt,
        bridge: {
            ss: function() {
                te || it("scrollStart"),
                te = Jt()
            },
            ref: function() {
                return Kt
            }
        }
    },
    v() && Vt.registerPlugin(A),
    t.ScrollTrigger = A,
    t.default = A,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(t) {
    "use strict";
    function e() {
        return "undefined" != typeof window
    }
    function n() {
        return f || e() && (f = window.gsap) && f.registerPlugin && f
    }
    function a(t) {
        return "string" == typeof t
    }
    function u(t) {
        return "function" == typeof t
    }
    function d(t, e) {
        var e = "x" === e ? "Width" : "Height"
          , n = "scroll" + e
          , r = "client" + e;
        return t === m || t === i || t === o ? Math.max(i[n], o[n]) - (m["inner" + e] || i[r] || o[r]) : t[n] - t["offset" + e]
    }
    function l(t, e) {
        var n = "scroll" + ("x" === e ? "Left" : "Top");
        return t === m && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != i[n] ? i : o),
        function() {
            return t[n]
        }
    }
    function s(t, e) {
        var n, r;
        return (t = g(t)[0]) && t.getBoundingClientRect ? (t = t.getBoundingClientRect(),
        r = (n = !e || e === m || e === o) ? {
            top: i.clientTop - (m.pageYOffset || i.scrollTop || o.scrollTop || 0),
            left: i.clientLeft - (m.pageXOffset || i.scrollLeft || o.scrollLeft || 0)
        } : e.getBoundingClientRect(),
        t = {
            x: t.left - r.left,
            y: t.top - r.top
        },
        !n && e && (t.x += l(e, "x")(),
        t.y += l(e, "y")()),
        t) : console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        }
    }
    function c(t, e, n, r, i) {
        return isNaN(t) || "object" == typeof t ? a(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i : "max" === t ? d(e, n) - i : Math.min(d(e, n), s(t, e)[n] - i) : parseFloat(t) - i
    }
    function h() {
        f = n(),
        e() && f && "undefined" != typeof document && document.body && (m = window,
        o = document.body,
        i = document.documentElement,
        g = f.utils.toArray,
        f.config({
            autoKillThreshold: 7
        }),
        _ = f.config(),
        p = 1)
    }
    var f, p, m, i, o, g, _, v, r = {
        version: "3.12.5",
        name: "scrollTo",
        rawVars: 1,
        register: function(t) {
            f = t,
            h()
        },
        init: function(t, e, n, r, i) {
            p || h();
            var s = this
              , o = f.getProperty(t, "scrollSnapType");
            s.isWin = t === m,
            s.target = t,
            s.tween = n,
            e = function(t, e, n, r) {
                if ("object" != typeof (t = u(t) ? t(e, n, r) : t))
                    return a(t) && "max" !== t && "=" !== t.charAt(1) ? {
                        x: t,
                        y: t
                    } : {
                        y: t
                    };
                if (t.nodeType)
                    return {
                        y: t,
                        x: t
                    };
                var i, s = {};
                for (i in t)
                    s[i] = "onAutoKill" !== i && u(t[i]) ? t[i](e, n, r) : t[i];
                return s
            }(e, r, t, i),
            s.vars = e,
            s.autoKill = !!e.autoKill,
            s.getX = l(t, "x"),
            s.getY = l(t, "y"),
            s.x = s.xPrev = s.getX(),
            s.y = s.yPrev = s.getY(),
            v = v || f.core.globals().ScrollTrigger,
            "smooth" === f.getProperty(t, "scrollBehavior") && f.set(t, {
                scrollBehavior: "auto"
            }),
            o && "none" !== o && (s.snap = 1,
            s.snapInline = t.style.scrollSnapType,
            t.style.scrollSnapType = "none"),
            null != e.x ? (s.add(s, "x", s.x, c(e.x, t, "x", s.x, e.offsetX || 0), r, i),
            s._props.push("scrollTo_x")) : s.skipX = 1,
            null != e.y ? (s.add(s, "y", s.y, c(e.y, t, "y", s.y, e.offsetY || 0), r, i),
            s._props.push("scrollTo_y")) : s.skipY = 1
        },
        render: function(t, e) {
            for (var n, r, i, s = e._pt, o = e.target, a = e.tween, u = e.autoKill, l = e.xPrev, c = e.yPrev, h = e.isWin, f = e.snap, p = e.snapInline; s; )
                s.r(t, s.d),
                s = s._next;
            n = h || !e.skipX ? e.getX() : l,
            c = (r = h || !e.skipY ? e.getY() : c) - c,
            l = n - l,
            i = _.autoKillThreshold,
            e.x < 0 && (e.x = 0),
            e.y < 0 && (e.y = 0),
            u && (!e.skipX && (i < l || l < -i) && n < d(o, "x") && (e.skipX = 1),
            !e.skipY && (i < c || c < -i) && r < d(o, "y") && (e.skipY = 1),
            e.skipX) && e.skipY && (a.kill(),
            e.vars.onAutoKill) && e.vars.onAutoKill.apply(a, e.vars.onAutoKillParams || []),
            h ? m.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (o.scrollTop = e.y),
            e.skipX || (o.scrollLeft = e.x)),
            !f || 1 !== t && 0 !== t || (r = o.scrollTop,
            n = o.scrollLeft,
            p ? o.style.scrollSnapType = p : o.style.removeProperty("scroll-snap-type"),
            o.scrollTop = r + 1,
            o.scrollLeft = n + 1,
            o.scrollTop = r,
            o.scrollLeft = n),
            e.xPrev = e.x,
            e.yPrev = e.y,
            v && v.update()
        },
        kill: function(t) {
            var e = "scrollTo" === t
              , n = this._props.indexOf(t);
            return !e && "scrollTo_x" !== t || (this.skipX = 1),
            !e && "scrollTo_y" !== t || (this.skipY = 1),
            -1 < n && this._props.splice(n, 1),
            !this._props.length
        }
    };
    r.max = d,
    r.getOffset = s,
    r.buildGetter = l,
    n() && f.registerPlugin(r),
    t.ScrollToPlugin = r,
    t.default = r,
    "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", {
        value: !0
    }) : delete t.default
}),
function(r) {
    r.fn.extend({
        smartpreload: function(t) {
            var n = r.extend({
                images: null,
                oneachimageload: null,
                onloadall: null
            }, t);
            return this.each(function() {
                for (var t = 0, e = 0; e < n.images.length; e++)
                    r("<img/>").addClass("preloading").css("display", "none").attr("src", n.images[e]).on("load", function() {
                        t++,
                        null != n.oneachimageload && n.oneachimageload(r(this).attr("src")),
                        t == n.images.length && null != n.onloadall && n.onloadall()
                    })
            })
        }
    })
}(jQuery),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).ShuffleText = e()
}(this, function() {
    "use strict";
    function t(t) {
        this.sourceRandomCharacter = "1234567890",
        this.emptyCharacter = "",
        this.duration = 600,
        this._fps = 1 / 30,
        this._isRunning = !1,
        this._originalStr = "",
        this._originalLength = 0,
        this._timeCurrent = 0,
        this._timePast = 0,
        this._timeStart = 0,
        this._randomIndex = [],
        this._element = null,
        this._requestAnimationFrameId = 0,
        this._element = t,
        this.setText(null != (t = t.textContent) ? t : "")
    }
    return t.prototype.setText = function(t) {
        this._originalStr = t,
        this._originalLength = t.length
    }
    ,
    Object.defineProperty(t.prototype, "isRunning", {
        get: function() {
            return this._isRunning
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.start = function() {
        for (var t = this, e = (this.stop(),
        this._randomIndex = [],
        ""), n = 0; n < this._originalLength; n++) {
            var r = n / this._originalLength;
            this._randomIndex[n] = Math.random() * (1 - r) + r,
            e += this.emptyCharacter
        }
        this._timeStart = (new Date).getTime(),
        this._isRunning = !0,
        this._requestAnimationFrameId = requestAnimationFrame(function() {
            t._onInterval()
        }),
        this._element && (this._element.textContent = e)
    }
    ,
    t.prototype.stop = function() {
        this._isRunning = !1,
        cancelAnimationFrame(this._requestAnimationFrameId)
    }
    ,
    t.prototype.dispose = function() {
        cancelAnimationFrame(this._requestAnimationFrameId),
        this._isRunning = !1,
        this.duration = 0,
        this._fps = 0,
        this._originalStr = "",
        this._originalLength = 0,
        this._timeCurrent = 0,
        this._timePast = 0,
        this._timeStart = 0,
        this._randomIndex = [],
        this._element = null,
        this._requestAnimationFrameId = 0
    }
    ,
    t.prototype._onInterval = function() {
        for (var t = this, e = (this._timeCurrent = (new Date).getTime() - this._timeStart,
        this._timeCurrent / this.duration), n = "", r = 0; r < this._originalLength; r++)
            e >= this._randomIndex[r] ? n += this._originalStr.charAt(r) : e < this._randomIndex[r] / 3 ? n += this.emptyCharacter : n += this.sourceRandomCharacter.charAt(Math.floor(Math.random() * this.sourceRandomCharacter.length));
        1 < e && (n = this._originalStr,
        this._isRunning = !1),
        this._element && (this._element.textContent = n),
        this._isRunning && (this._timePast = this._timeCurrent,
        this._requestAnimationFrameId = requestAnimationFrame(function() {
            t._onInterval()
        }))
    }
    ,
    t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.Rellax = e()
}("undefined" != typeof window ? window : global, function() {
    function h(t, e) {
        var T = Object.create(h.prototype)
          , s = 0
          , S = 0
          , o = 0
          , M = 0
          , O = []
          , k = !0
          , n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
            return setTimeout(t, 1e3 / 60)
        }
          , r = null
          , i = !1;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function() {
                    i = !0
                }
            });
            window.addEventListener("testPassive", null, a),
            window.removeEventListener("testPassive", null, a)
        } catch (t) {}
        var u = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout
          , l = window.transformProp || function() {
            var t = document.createElement("div");
            if (null === t.style.transform) {
                var e, n = ["Webkit", "Moz", "ms"];
                for (e in n)
                    if (void 0 !== t.style[n[e] + "Transform"])
                        return n[e] + "Transform"
            }
            return "transform"
        }();
        if (T.options = {
            speed: -2,
            verticalSpeed: null,
            horizontalSpeed: null,
            breakpoints: [576, 768, 1201],
            center: !1,
            wrapper: null,
            relativeToWrapper: !1,
            round: !0,
            vertical: !0,
            horizontal: !1,
            verticalScrollAxis: "y",
            horizontalScrollAxis: "x",
            callback: function() {}
        },
        e && Object.keys(e).forEach(function(t) {
            T.options[t] = e[t]
        }),
        e && e.breakpoints && function() {
            if (3 === T.options.breakpoints.length && Array.isArray(T.options.breakpoints)) {
                var e, n = !0, r = !0;
                if (T.options.breakpoints.forEach(function(t) {
                    "number" != typeof t && (r = !1),
                    null !== e && t < e && (n = !1),
                    e = t
                }),
                n && r)
                    return
            }
            T.options.breakpoints = [576, 768, 1201],
            console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
        }(),
        0 < (a = "string" == typeof (t = t || ".rellax") ? document.querySelectorAll(t) : [t]).length) {
            if (T.elems = a,
            T.options.wrapper && !T.options.wrapper.nodeType) {
                if (!(a = document.querySelector(T.options.wrapper)))
                    return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                T.options.wrapper = a
            }
            function E() {
                for (var t = 0; t < O.length; t++)
                    T.elems[t].style.cssText = O[t].style;
                for (O = [],
                S = window.innerHeight,
                M = window.innerWidth,
                t = T.options.breakpoints,
                C = M < t[0] ? "xs" : M >= t[0] && M < t[1] ? "sm" : M >= t[1] && M < t[2] ? "md" : "lg",
                A(),
                t = 0; t < T.elems.length; t++) {
                    var e = void 0
                      , n = T.elems[t]
                      , r = n.getAttribute("data-rellax-percentage")
                      , i = n.getAttribute("data-rellax-speed")
                      , s = n.getAttribute("data-rellax-xs-speed")
                      , o = n.getAttribute("data-rellax-mobile-speed")
                      , a = n.getAttribute("data-rellax-tablet-speed")
                      , u = n.getAttribute("data-rellax-desktop-speed")
                      , l = n.getAttribute("data-rellax-vertical-speed")
                      , c = n.getAttribute("data-rellax-horizontal-speed")
                      , h = n.getAttribute("data-rellax-vertical-scroll-axis")
                      , f = n.getAttribute("data-rellax-horizontal-scroll-axis")
                      , p = n.getAttribute("data-rellax-zindex") || 0
                      , d = n.getAttribute("data-rellax-min")
                      , m = n.getAttribute("data-rellax-max")
                      , g = n.getAttribute("data-rellax-min-x")
                      , _ = n.getAttribute("data-rellax-max-x")
                      , v = n.getAttribute("data-rellax-min-y")
                      , y = n.getAttribute("data-rellax-max-y")
                      , x = !0
                      , w = (s || o || a || u ? e = {
                        xs: s,
                        sm: o,
                        md: a,
                        lg: u
                    } : x = !1,
                    s = T.options.wrapper ? T.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
                    T.options.relativeToWrapper && (s = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - T.options.wrapper.offsetTop),
                    T.options.vertical && (r || T.options.center) ? s : 0)
                      , b = T.options.horizontal && (r || T.options.center) ? T.options.wrapper ? T.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0
                      , s = w + n.getBoundingClientRect().top
                      , o = n.clientHeight || n.offsetHeight || n.scrollHeight
                      , a = b + n.getBoundingClientRect().left
                      , u = n.clientWidth || n.offsetWidth || n.scrollWidth
                      , w = r || (w - s + S) / (o + S)
                      , r = r || (b - a + M) / (u + M);
                    T.options.center && (w = r = .5),
                    e = x && null !== e[C] ? Number(e[C]) : i || T.options.speed,
                    l = l || T.options.verticalSpeed,
                    c = c || T.options.horizontalSpeed,
                    h = h || T.options.verticalScrollAxis,
                    f = f || T.options.horizontalScrollAxis,
                    i = P(r, w, e, l, c),
                    n = n.style.cssText,
                    x = "",
                    (r = /transform\s*:/i.exec(n)) && (x = (r = (x = n.slice(r.index)).indexOf(";")) ? " " + x.slice(11, r).replace(/\s/g, "") : " " + x.slice(11).replace(/\s/g, "")),
                    O.push({
                        baseX: i.x,
                        baseY: i.y,
                        top: s,
                        left: a,
                        height: o,
                        width: u,
                        speed: e,
                        verticalSpeed: l,
                        horizontalSpeed: c,
                        verticalScrollAxis: h,
                        horizontalScrollAxis: f,
                        style: n,
                        transform: x,
                        zindex: p,
                        min: d,
                        max: m,
                        minX: g,
                        maxX: _,
                        minY: v,
                        maxY: y
                    })
                }
                z(),
                k && (window.addEventListener("resize", E),
                k = !1,
                R())
            }
            var C, A = function() {
                var t = s
                  , e = o;
                return s = T.options.wrapper ? T.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset,
                o = T.options.wrapper ? T.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset,
                !!(t != (s = T.options.relativeToWrapper ? ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - T.options.wrapper.offsetTop : s) && T.options.vertical || e != o && T.options.horizontal)
            }, P = function(t, e, n, r, i) {
                var s = {};
                return t = 100 * (i || n) * (1 - t),
                e = 100 * (r || n) * (1 - e),
                s.x = T.options.round ? Math.round(t) : Math.round(100 * t) / 100,
                s.y = T.options.round ? Math.round(e) : Math.round(100 * e) / 100,
                s
            }, c = function() {
                window.removeEventListener("resize", c),
                window.removeEventListener("orientationchange", c),
                (T.options.wrapper || window).removeEventListener("scroll", c),
                (T.options.wrapper || document).removeEventListener("touchmove", c),
                r = n(R)
            }, R = function() {
                A() && !1 === k ? (z(),
                r = n(R)) : (r = null,
                window.addEventListener("resize", c),
                window.addEventListener("orientationchange", c),
                (T.options.wrapper || window).addEventListener("scroll", c, !!i && {
                    passive: !0
                }),
                (T.options.wrapper || document).addEventListener("touchmove", c, !!i && {
                    passive: !0
                }))
            }, z = function() {
                for (var t = 0; t < T.elems.length; t++) {
                    var e = O[t].verticalScrollAxis.toLowerCase()
                      , n = O[t].horizontalScrollAxis.toLowerCase()
                      , r = -1 != e.indexOf("x") ? s : 0
                      , e = -1 != e.indexOf("y") ? s : 0
                      , i = -1 != n.indexOf("x") ? o : 0
                      , n = -1 != n.indexOf("y") ? o : 0;
                    n = (r = P((r + i - O[t].left + M) / (O[t].width + M), (e + n - O[t].top + S) / (O[t].height + S), O[t].speed, O[t].verticalSpeed, O[t].horizontalSpeed)).y - O[t].baseY,
                    e = r.x - O[t].baseX,
                    null !== O[t].min && (T.options.vertical && !T.options.horizontal && (n = n <= O[t].min ? O[t].min : n),
                    T.options.horizontal) && !T.options.vertical && (e = e <= O[t].min ? O[t].min : e),
                    null != O[t].minY && (n = n <= O[t].minY ? O[t].minY : n),
                    null != O[t].minX && (e = e <= O[t].minX ? O[t].minX : e),
                    null !== O[t].max && (T.options.vertical && !T.options.horizontal && (n = n >= O[t].max ? O[t].max : n),
                    T.options.horizontal) && !T.options.vertical && (e = e >= O[t].max ? O[t].max : e),
                    null != O[t].maxY && (n = n >= O[t].maxY ? O[t].maxY : n),
                    null != O[t].maxX && (e = e >= O[t].maxX ? O[t].maxX : e),
                    T.elems[t].style[l] = "translate3d(" + (T.options.horizontal ? e : "0") + "px," + (T.options.vertical ? n : "0") + "px," + O[t].zindex + "px) " + O[t].transform
                }
                T.options.callback(r)
            };
            return T.destroy = function() {
                for (var t = 0; t < T.elems.length; t++)
                    T.elems[t].style.cssText = O[t].style;
                k || (window.removeEventListener("resize", E),
                k = !0),
                u(r),
                r = null
            }
            ,
            E(),
            T.refresh = E,
            T
        }
        console.warn("Rellax: The elements you're trying to select don't exist.")
    }
    return h
}),
t = this,
e = function() {
    function c(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }
    class y {
        advance(e) {
            if (this.isRunning) {
                let t = !1;
                if (this.lerp)
                    this.value = (n = this.value,
                    r = this.to,
                    i = 60 * this.lerp,
                    n = n,
                    r = r,
                    (1 - (i = 1 - Math.exp(-i * e))) * n + i * r),
                    Math.round(this.value) === this.to && (this.value = this.to,
                    t = !0);
                else {
                    this.currentTime += e;
                    const n = c(0, this.currentTime / this.duration, 1)
                      , r = (t = 1 <= n) ? 1 : this.easing(n);
                    this.value = this.from + (this.to - this.from) * r
                }
                var n, r, i;
                this.onUpdate?.(this.value, t),
                t && this.stop()
            }
        }
        stop() {
            this.isRunning = !1
        }
        fromTo(t, e, {lerp: n=.1, duration: r=1, easing: i=t => t, onStart: s, onUpdate: o}) {
            this.from = this.value = t,
            this.to = e,
            this.lerp = n,
            this.duration = r,
            this.easing = i,
            this.currentTime = 0,
            this.isRunning = !0,
            s?.(),
            this.onUpdate = o
        }
    }
    class x {
        constructor({wrapper: t, content: e, autoResize: n=!0}={}) {
            if (this.wrapper = t,
            this.content = e,
            n) {
                const t = function(n) {
                    let r;
                    return function() {
                        let t = arguments
                          , e = this;
                        clearTimeout(r),
                        r = setTimeout(function() {
                            n.apply(e, t)
                        }, 250)
                    }
                }(this.resize);
                this.wrapper !== window && (this.wrapperResizeObserver = new ResizeObserver(t),
                this.wrapperResizeObserver.observe(this.wrapper)),
                this.contentResizeObserver = new ResizeObserver(t),
                this.contentResizeObserver.observe(this.content)
            }
            this.resize()
        }
        destroy() {
            this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect()
        }
        resize = () => {
            this.onWrapperResize(),
            this.onContentResize()
        }
        ;
        onWrapperResize = () => {
            this.wrapper === window ? (this.width = window.innerWidth,
            this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth,
            this.height = this.wrapper.clientHeight)
        }
        ;
        onContentResize = () => {
            this.scrollHeight = this.content.scrollHeight,
            this.scrollWidth = this.content.scrollWidth
        }
        ;
        get limit() {
            return {
                x: this.scrollWidth - this.width,
                y: this.scrollHeight - this.height
            }
        }
    }
    class w {
        constructor() {
            this.events = {}
        }
        emit(t, ...n) {
            var r = this.events[t] || [];
            for (let t = 0, e = r.length; t < e; t++)
                r[t](...n)
        }
        on(t, e) {
            return this.events[t]?.push(e) || (this.events[t] = [e]),
            () => {
                this.events[t] = this.events[t]?.filter(t => e !== t)
            }
        }
        off(t, e) {
            this.events[t] = this.events[t]?.filter(t => e !== t)
        }
        destroy() {
            this.events = {}
        }
    }
    class b {
        constructor(t, {wheelMultiplier: e=1, touchMultiplier: n=2, normalizeWheel: r=!1}) {
            this.element = t,
            this.wheelMultiplier = e,
            this.touchMultiplier = n,
            this.normalizeWheel = r,
            this.touchStart = {
                x: null,
                y: null
            },
            this.emitter = new w,
            this.element.addEventListener("wheel", this.onWheel, {
                passive: !1
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
        on(t, e) {
            return this.emitter.on(t, e)
        }
        destroy() {
            this.emitter.destroy(),
            this.element.removeEventListener("wheel", this.onWheel, {
                passive: !1
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
                passive: !1
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: !1
            })
        }
        onTouchStart = t => {
            var {clientX: e, clientY: n} = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStart.x = e,
            this.touchStart.y = n,
            this.lastDelta = {
                x: 0,
                y: 0
            },
            this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            })
        }
        ;
        onTouchMove = t => {
            var {clientX: e, clientY: n} = t.targetTouches ? t.targetTouches[0] : t
              , r = -(e - this.touchStart.x) * this.touchMultiplier
              , i = -(n - this.touchStart.y) * this.touchMultiplier;
            this.touchStart.x = e,
            this.touchStart.y = n,
            this.lastDelta = {
                x: r,
                y: i
            },
            this.emitter.emit("scroll", {
                deltaX: r,
                deltaY: i,
                event: t
            })
        }
        ;
        onTouchEnd = t => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: t
            })
        }
        ;
        onWheel = t => {
            let {deltaX: e, deltaY: n} = t;
            this.normalizeWheel && (e = c(-100, e, 100),
            n = c(-100, n, 100)),
            e *= this.wheelMultiplier,
            n *= this.wheelMultiplier,
            this.emitter.emit("scroll", {
                deltaX: e,
                deltaY: n,
                event: t
            })
        }
    }
    return class {
        constructor({wrapper: t=window, content: e=document.documentElement, wheelEventsTarget: n=t, eventsTarget: r=n, smoothWheel: i=!0, smoothTouch: s=!1, syncTouch: o=!1, syncTouchLerp: a=.075, touchInertiaMultiplier: u=35, duration: l, easing: c=t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), lerp: h=!l && .1, infinite: f=!1, orientation: p="vertical", gestureOrientation: d="vertical", touchMultiplier: m=1, wheelMultiplier: g=1, normalizeWheel: _=!1, autoResize: v=!0}={}) {
            window.lenisVersion = "1.0.33",
            t !== document.documentElement && t !== document.body || (t = window),
            this.options = {
                wrapper: t,
                content: e,
                wheelEventsTarget: n,
                eventsTarget: r,
                smoothWheel: i,
                smoothTouch: s,
                syncTouch: o,
                syncTouchLerp: a,
                touchInertiaMultiplier: u,
                duration: l,
                easing: c,
                lerp: h,
                infinite: f,
                gestureOrientation: d,
                orientation: p,
                touchMultiplier: m,
                wheelMultiplier: g,
                normalizeWheel: _,
                autoResize: v
            },
            this.animate = new y,
            this.emitter = new w,
            this.dimensions = new x({
                wrapper: t,
                content: e,
                autoResize: v
            }),
            this.toggleClass("lenis", !0),
            this.velocity = 0,
            this.isLocked = !1,
            this.isStopped = !1,
            this.isSmooth = o || i || s,
            this.isScrolling = !1,
            this.targetScroll = this.animatedScroll = this.actualScroll,
            this.options.wrapper.addEventListener("scroll", this.onNativeScroll, {
                passive: !1
            }),
            this.virtualScroll = new b(r,{
                touchMultiplier: m,
                wheelMultiplier: g,
                normalizeWheel: _
            }),
            this.virtualScroll.on("scroll", this.onVirtualScroll)
        }
        destroy() {
            this.emitter.destroy(),
            this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, {
                passive: !1
            }),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClass("lenis", !1),
            this.toggleClass("lenis-smooth", !1),
            this.toggleClass("lenis-scrolling", !1),
            this.toggleClass("lenis-stopped", !1),
            this.toggleClass("lenis-locked", !1)
        }
        on(t, e) {
            return this.emitter.on(t, e)
        }
        off(t, e) {
            return this.emitter.off(t, e)
        }
        setScroll(t) {
            this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t
        }
        onVirtualScroll = ({deltaX: e, deltaY: n, event: r}) => {
            if (!r.ctrlKey) {
                const o = r.type.includes("touch")
                  , a = r.type.includes("wheel");
                if ((this.options.smoothTouch || this.options.syncTouch) && o && "touchstart" === r.type)
                    this.reset();
                else {
                    var i = 0 === e && 0 === n
                      , s = "vertical" === this.options.gestureOrientation && 0 === n || "horizontal" === this.options.gestureOrientation && 0 === e;
                    if (!i && !s) {
                        let t = r.composedPath();
                        if (!(t = t.slice(0, t.indexOf(this.rootElement))).find(t => t.hasAttribute?.("data-lenis-prevent") || o && t.hasAttribute?.("data-lenis-prevent-touch") || a && t.hasAttribute?.("data-lenis-prevent-wheel") || t.classList?.contains("lenis")))
                            if (this.isStopped || this.isLocked)
                                r.preventDefault();
                            else if (this.isSmooth = (this.options.smoothTouch || this.options.syncTouch) && o || this.options.smoothWheel && a,
                            this.isSmooth) {
                                r.preventDefault();
                                let t = n;
                                "both" === this.options.gestureOrientation ? t = Math.abs(n) > Math.abs(e) ? n : e : "horizontal" === this.options.gestureOrientation && (t = e);
                                i = o && this.options.syncTouch,
                                s = o && "touchend" === r.type && 5 < Math.abs(t);
                                s && (t = this.velocity * this.options.touchInertiaMultiplier),
                                this.scrollTo(this.targetScroll + t, {
                                    programmatic: !1,
                                    ...i ? {
                                        lerp: s ? this.options.syncTouchLerp : 1
                                    } : {
                                        lerp: this.options.lerp,
                                        duration: this.options.duration,
                                        easing: this.options.easing
                                    }
                                })
                            } else
                                this.isScrolling = !1,
                                this.animate.stop()
                    }
                }
            }
        }
        ;
        resize() {
            this.dimensions.resize()
        }
        emit() {
            this.emitter.emit("scroll", this)
        }
        onNativeScroll = () => {
            var t;
            this.__preventNextScrollEvent || this.isScrolling || (t = this.animatedScroll,
            this.animatedScroll = this.targetScroll = this.actualScroll,
            this.velocity = 0,
            this.direction = Math.sign(this.animatedScroll - t),
            this.emit())
        }
        ;
        reset() {
            this.isLocked = !1,
            this.isScrolling = !1,
            this.animatedScroll = this.targetScroll = this.actualScroll,
            this.velocity = 0,
            this.animate.stop()
        }
        start() {
            this.isStopped = !1,
            this.reset()
        }
        stop() {
            this.isStopped = !0,
            this.animate.stop(),
            this.reset()
        }
        raf(t) {
            var e = t - (this.time || t);
            this.time = t,
            this.animate.advance(.001 * e)
        }
        scrollTo(e, {offset: n=0, immediate: r=!1, lock: t=!1, duration: i=this.options.duration, easing: s=this.options.easing, lerp: o=!i && this.options.lerp, onComplete: a=null, force: u=!1, programmatic: l=!0}={}) {
            if (!this.isStopped && !this.isLocked || u) {
                if (["top", "left", "start"].includes(e))
                    e = 0;
                else if (["bottom", "right", "end"].includes(e))
                    e = this.limit;
                else {
                    let t;
                    if ("string" == typeof e ? t = document.querySelector(e) : e?.nodeType && (t = e),
                    t) {
                        if (this.options.wrapper !== window) {
                            const c = this.options.wrapper.getBoundingClientRect();
                            n -= this.isHorizontal ? c.left : c.top
                        }
                        const r = t.getBoundingClientRect();
                        e = (this.isHorizontal ? r.left : r.top) + this.animatedScroll
                    }
                }
                if ("number" == typeof e)
                    if (e += n,
                    e = Math.round(e),
                    this.options.infinite ? l && (this.targetScroll = this.animatedScroll = this.scroll) : e = c(0, e, this.limit),
                    r)
                        this.animatedScroll = this.targetScroll = e,
                        this.setScroll(this.scroll),
                        this.reset(),
                        a?.(this);
                    else {
                        if (!l) {
                            if (e === this.targetScroll)
                                return;
                            this.targetScroll = e
                        }
                        this.animate.fromTo(this.animatedScroll, e, {
                            duration: i,
                            easing: s,
                            lerp: o,
                            onStart: () => {
                                t && (this.isLocked = !0),
                                this.isScrolling = !0
                            }
                            ,
                            onUpdate: (t, e) => {
                                this.isScrolling = !0,
                                this.velocity = t - this.animatedScroll,
                                this.direction = Math.sign(this.velocity),
                                this.animatedScroll = t,
                                this.setScroll(this.scroll),
                                l && (this.targetScroll = t),
                                e || this.emit(),
                                e && (this.reset(),
                                this.emit(),
                                a?.(this),
                                this.__preventNextScrollEvent = !0,
                                requestAnimationFrame( () => {
                                    delete this.__preventNextScrollEvent
                                }
                                ))
                            }
                        })
                    }
            }
        }
        get rootElement() {
            return this.options.wrapper === window ? document.documentElement : this.options.wrapper
        }
        get limit() {
            return this.dimensions.limit[this.isHorizontal ? "x" : "y"]
        }
        get isHorizontal() {
            return "horizontal" === this.options.orientation
        }
        get actualScroll() {
            return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop
        }
        get scroll() {
            return this.options.infinite ? (this.animatedScroll % (t = this.limit) + t) % t : this.animatedScroll;
            var t
        }
        get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit
        }
        get isSmooth() {
            return this.__isSmooth
        }
        set isSmooth(t) {
            this.__isSmooth !== t && (this.__isSmooth = t,
            this.toggleClass("lenis-smooth", t))
        }
        get isScrolling() {
            return this.__isScrolling
        }
        set isScrolling(t) {
            this.__isScrolling !== t && (this.__isScrolling = t,
            this.toggleClass("lenis-scrolling", t))
        }
        get isStopped() {
            return this.__isStopped
        }
        set isStopped(t) {
            this.__isStopped !== t && (this.__isStopped = t,
            this.toggleClass("lenis-stopped", t))
        }
        get isLocked() {
            return this.__isLocked
        }
        set isLocked(t) {
            this.__isLocked !== t && (this.__isLocked = t,
            this.toggleClass("lenis-locked", t))
        }
        get className() {
            let t = "lenis";
            return this.isStopped && (t += " lenis-stopped"),
            this.isLocked && (t += " lenis-locked"),
            this.isScrolling && (t += " lenis-scrolling"),
            this.isSmooth && (t += " lenis-smooth"),
            t
        }
        toggleClass(t, e) {
            this.rootElement.classList.toggle(t, e),
            this.emitter.emit("className change", this)
        }
    }
}
,
"object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Lenis = e(),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(h) {
    var e = /\+/g;
    function f(t) {
        if (d.raw)
            return t;
        try {
            return decodeURIComponent(t.replace(e, " "))
        } catch (t) {}
    }
    function p(t) {
        t = f(t = 0 === t.indexOf('"') ? t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") : t);
        try {
            return d.json ? JSON.parse(t) : t
        } catch (t) {}
    }
    var d = h.cookie = function(t, e, n) {
        var r, i;
        if (void 0 !== e)
            return "number" == typeof (n = h.extend({}, d.defaults, n)).expires && (r = n.expires,
            (i = n.expires = new Date).setDate(i.getDate() + r)),
            e = d.json ? JSON.stringify(e) : String(e),
            document.cookie = [d.raw ? t : encodeURIComponent(t), "=", d.raw ? e : encodeURIComponent(e), n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("");
        for (var s = t ? void 0 : {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0, u = o.length; a < u; a++) {
            var l = o[a].split("=")
              , c = f(l.shift())
              , l = l.join("=");
            if (t && t === c) {
                s = p(l);
                break
            }
            t || void 0 === (l = p(l)) || (s[c] = l)
        }
        return s
    }
    ;
    d.defaults = {},
    h.removeCookie = function(t, e) {
        return void 0 !== h.cookie(t) && (h.cookie(t, "", h.extend({}, e, {
            expires: -1
        })),
        !0)
    }
}),
function(t, e) {
    "use strict";
    "undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : t.buzz = e()
}(this, function() {
    "use strict";
    var t = window.AudioContext || window.webkitAudioContext
      , p = {
        defaults: {
            autoplay: !1,
            crossOrigin: null,
            duration: 5e3,
            formats: [],
            loop: !1,
            placeholder: "--",
            preload: "metadata",
            volume: 80,
            webAudioApi: !1,
            document: window.document
        },
        types: {
            mp3: "audio/mpeg",
            ogg: "audio/ogg",
            wav: "audio/wav",
            aac: "audio/aac",
            m4a: "audio/x-m4a"
        },
        sounds: [],
        el: document.createElement("audio"),
        getAudioContext: function() {
            if (void 0 === this.audioCtx)
                try {
                    this.audioCtx = t ? new t : null
                } catch (t) {
                    this.audioCtx = null
                }
            return this.audioCtx
        },
        sound: function(t, e) {
            var n, a = (e = e || {}).document || p.defaults.document, r = 0, u = [], i = {}, l = p.isSupported();
            function s(t) {
                for (var e = [], n = t.length - 1, r = 0; r <= n; r++)
                    e.push({
                        start: t.start(r),
                        end: t.end(r)
                    });
                return e
            }
            function o(t) {
                return t.split(".").pop()
            }
            if (this.load = function() {
                return l && this.sound.load(),
                this
            }
            ,
            this.play = function() {
                return l && this.sound.play().catch(function() {}),
                this
            }
            ,
            this.togglePlay = function() {
                return l && (this.sound.paused ? this.sound.play().catch(function() {}) : this.sound.pause()),
                this
            }
            ,
            this.pause = function() {
                return l && this.sound.pause(),
                this
            }
            ,
            this.isPaused = function() {
                return l ? this.sound.paused : null
            }
            ,
            this.stop = function() {
                return l && (this.sound.pause(),
                this.setTime(0)),
                this
            }
            ,
            this.isEnded = function() {
                return l ? this.sound.ended : null
            }
            ,
            this.loop = function() {
                return l && (this.sound.loop = "loop",
                this.bind("ended.buzzloop", function() {
                    this.currentTime = 0,
                    this.play()
                })),
                this
            }
            ,
            this.unloop = function() {
                return l && (this.sound.removeAttribute("loop"),
                this.unbind("ended.buzzloop")),
                this
            }
            ,
            this.mute = function() {
                return l && (this.sound.muted = !0),
                this
            }
            ,
            this.unmute = function() {
                return l && (this.sound.muted = !1),
                this
            }
            ,
            this.toggleMute = function() {
                return l && (this.sound.muted = !this.sound.muted),
                this
            }
            ,
            this.isMuted = function() {
                return l ? this.sound.muted : null
            }
            ,
            this.setVolume = function(t) {
                return l && (this.volume = t = 100 < (t = t < 0 ? 0 : t) ? 100 : t,
                this.sound.volume = t / 100),
                this
            }
            ,
            this.getVolume = function() {
                return l ? this.volume : this
            }
            ,
            this.increaseVolume = function(t) {
                return this.setVolume(this.volume + (t || 1))
            }
            ,
            this.decreaseVolume = function(t) {
                return this.setVolume(this.volume - (t || 1))
            }
            ,
            this.setTime = function(t) {
                var e;
                return l && (e = !0,
                this.whenReady(function() {
                    !0 === e && (e = !1,
                    this.sound.currentTime = t)
                })),
                this
            }
            ,
            this.getTime = function() {
                var t;
                return l ? (t = Math.round(100 * this.sound.currentTime) / 100,
                isNaN(t) ? p.defaults.placeholder : t) : null
            }
            ,
            this.setPercent = function(t) {
                return l ? this.setTime(p.fromPercent(t, this.sound.duration)) : this
            }
            ,
            this.getPercent = function() {
                var t;
                return l ? (t = Math.round(p.toPercent(this.sound.currentTime, this.sound.duration)),
                isNaN(t) ? p.defaults.placeholder : t) : null
            }
            ,
            this.setSpeed = function(t) {
                return l && (this.sound.playbackRate = t),
                this
            }
            ,
            this.getSpeed = function() {
                return l ? this.sound.playbackRate : null
            }
            ,
            this.getDuration = function() {
                var t;
                return l ? (t = Math.round(100 * this.sound.duration) / 100,
                isNaN(t) ? p.defaults.placeholder : t) : null
            }
            ,
            this.getPlayed = function() {
                return l ? s(this.sound.played) : null
            }
            ,
            this.getBuffered = function() {
                return l ? s(this.sound.buffered) : null
            }
            ,
            this.getSeekable = function() {
                return l ? s(this.sound.seekable) : null
            }
            ,
            this.getErrorCode = function() {
                return l && this.sound.error ? this.sound.error.code : 0
            }
            ,
            this.getErrorMessage = function() {
                if (!l)
                    return null;
                switch (this.getErrorCode()) {
                case 1:
                    return "MEDIA_ERR_ABORTED";
                case 2:
                    return "MEDIA_ERR_NETWORK";
                case 3:
                    return "MEDIA_ERR_DECODE";
                case 4:
                    return "MEDIA_ERR_SRC_NOT_SUPPORTED";
                default:
                    return null
                }
            }
            ,
            this.getStateCode = function() {
                return l ? this.sound.readyState : null
            }
            ,
            this.getStateMessage = function() {
                if (!l)
                    return null;
                switch (this.getStateCode()) {
                case 0:
                    return "HAVE_NOTHING";
                case 1:
                    return "HAVE_METADATA";
                case 2:
                    return "HAVE_CURRENT_DATA";
                case 3:
                    return "HAVE_FUTURE_DATA";
                case 4:
                    return "HAVE_ENOUGH_DATA";
                default:
                    return null
                }
            }
            ,
            this.getNetworkStateCode = function() {
                return l ? this.sound.networkState : null
            }
            ,
            this.getNetworkStateMessage = function() {
                if (!l)
                    return null;
                switch (this.getNetworkStateCode()) {
                case 0:
                    return "NETWORK_EMPTY";
                case 1:
                    return "NETWORK_IDLE";
                case 2:
                    return "NETWORK_LOADING";
                case 3:
                    return "NETWORK_NO_SOURCE";
                default:
                    return null
                }
            }
            ,
            this.set = function(t, e) {
                return l && (this.sound[t] = e),
                this
            }
            ,
            this.get = function(t) {
                return l ? t ? this.sound[t] : this.sound : null
            }
            ,
            this.bind = function(t, e) {
                if (l) {
                    t = t.split(" ");
                    for (var n = this, r = function(t) {
                        e.call(n, t)
                    }, i = 0; i < t.length; i++) {
                        var s = t[i]
                          , o = s.split(".")[0];
                        u.push({
                            idx: s,
                            func: r
                        }),
                        this.sound.addEventListener(o, r, !0)
                    }
                }
                return this
            }
            ,
            this.unbind = function(t) {
                if (l) {
                    t = t.split(" ");
                    for (var e = 0; e < t.length; e++)
                        for (var n = t[e], r = n.split(".")[0], i = 0; i < u.length; i++) {
                            var s = u[i].idx.split(".");
                            (u[i].idx === n || s[1] && s[1] === n.replace(".", "")) && (this.sound.removeEventListener(r, u[i].func, !0),
                            u.splice(i, 1))
                        }
                }
                return this
            }
            ,
            this.bindOnce = function(t, e) {
                var n;
                return l && (n = this,
                i[r++] = !1,
                this.bind(t + "." + r, function() {
                    i[r] || (i[r] = !0,
                    e.call(n)),
                    n.unbind(t + "." + r)
                })),
                this
            }
            ,
            this.trigger = function(t, e) {
                if (l) {
                    t = t.split(" ");
                    for (var n = 0; n < t.length; n++)
                        for (var r = t[n], i = 0; i < u.length; i++) {
                            var s, o = u[i].idx.split(".");
                            (u[i].idx === r || o[0] && o[0] === r.replace(".", "")) && ((s = a.createEvent("HTMLEvents")).initEvent(o[0], !1, !0),
                            s.originalEvent = e,
                            this.sound.dispatchEvent(s))
                        }
                }
                return this
            }
            ,
            this.fadeTo = function(e, t, n) {
                var r, i, s, o;
                return l && (t = t instanceof Function ? (n = t,
                p.defaults.duration) : t || p.defaults.duration,
                r = this.volume,
                i = t / Math.abs(r - e),
                (s = this).play(),
                this.whenReady(function() {
                    !function t() {
                        clearTimeout(o),
                        o = setTimeout(function() {
                            r < e && s.volume < e ? (s.setVolume(s.volume += 1),
                            t()) : e < r && s.volume > e ? (s.setVolume(--s.volume),
                            t()) : n instanceof Function && n.apply(s)
                        }, i)
                    }()
                })),
                this
            }
            ,
            this.fadeIn = function(t, e) {
                return l ? this.setVolume(0).fadeTo(100, t, e) : this
            }
            ,
            this.fadeOut = function(t, e) {
                return l ? this.fadeTo(0, t, e) : this
            }
            ,
            this.fadeWith = function(t, e) {
                return l && (this.fadeOut(e, function() {
                    this.stop()
                }),
                t.play().fadeIn(e)),
                this
            }
            ,
            this.whenReady = function(t) {
                if (!l)
                    return null;
                var e = this;
                0 === this.sound.readyState ? this.bind("canplay.buzzwhenready", function() {
                    t.call(e)
                }) : t.call(e)
            }
            ,
            this.addSource = function(t) {
                var e = this
                  , n = a.createElement("source");
                return n.src = t,
                p.types[o(t)] && (n.type = p.types[o(t)]),
                this.sound.appendChild(n),
                n.addEventListener("error", function(t) {
                    e.trigger("sourceerror", t)
                }),
                n
            }
            ,
            l && t) {
                for (var c in p.defaults)
                    p.defaults.hasOwnProperty(c) && void 0 === e[c] && (e[c] = p.defaults[c]);
                if (this.sound = a.createElement("audio"),
                null !== e.crossOrigin && (this.sound.crossOrigin = e.crossOrigin),
                e.webAudioApi && (n = p.getAudioContext()) && (this.source = n.createMediaElementSource(this.sound),
                this.source.connect(n.destination)),
                t instanceof Array)
                    for (var h in t)
                        t.hasOwnProperty(h) && this.addSource(t[h]);
                else if (e.formats.length)
                    for (var f in e.formats)
                        e.formats.hasOwnProperty(f) && this.addSource(t + "." + e.formats[f]);
                else
                    this.addSource(t);
                e.loop && this.loop(),
                e.autoplay && (this.sound.autoplay = "autoplay"),
                !0 === e.preload ? this.sound.preload = "auto" : !1 === e.preload ? this.sound.preload = "none" : this.sound.preload = e.preload,
                this.setVolume(e.volume),
                p.sounds.push(this)
            }
        },
        group: function(r) {
            function i() {
                for (var t = s(null, arguments), e = t.shift(), n = 0; n < r.length; n++)
                    r[n][e].apply(r[n], t)
            }
            function s(t, e) {
                return t instanceof Array ? t : Array.prototype.slice.call(e)
            }
            r = s(r, arguments),
            this.getSounds = function() {
                return r
            }
            ,
            this.add = function(t) {
                t = s(t, arguments);
                for (var e = 0; e < t.length; e++)
                    r.push(t[e])
            }
            ,
            this.remove = function(t) {
                t = s(t, arguments);
                for (var e = 0; e < t.length; e++)
                    for (var n = 0; n < r.length; n++)
                        if (r[n] === t[e]) {
                            r.splice(n, 1);
                            break
                        }
            }
            ,
            this.load = function() {
                return i("load"),
                this
            }
            ,
            this.play = function() {
                return i("play"),
                this
            }
            ,
            this.togglePlay = function() {
                return i("togglePlay"),
                this
            }
            ,
            this.pause = function(t) {
                return i("pause", t),
                this
            }
            ,
            this.stop = function() {
                return i("stop"),
                this
            }
            ,
            this.mute = function() {
                return i("mute"),
                this
            }
            ,
            this.unmute = function() {
                return i("unmute"),
                this
            }
            ,
            this.toggleMute = function() {
                return i("toggleMute"),
                this
            }
            ,
            this.setVolume = function(t) {
                return i("setVolume", t),
                this
            }
            ,
            this.increaseVolume = function(t) {
                return i("increaseVolume", t),
                this
            }
            ,
            this.decreaseVolume = function(t) {
                return i("decreaseVolume", t),
                this
            }
            ,
            this.loop = function() {
                return i("loop"),
                this
            }
            ,
            this.unloop = function() {
                return i("unloop"),
                this
            }
            ,
            this.setSpeed = function(t) {
                return i("setSpeed", t),
                this
            }
            ,
            this.setTime = function(t) {
                return i("setTime", t),
                this
            }
            ,
            this.set = function(t, e) {
                return i("set", t, e),
                this
            }
            ,
            this.bind = function(t, e) {
                return i("bind", t, e),
                this
            }
            ,
            this.unbind = function(t) {
                return i("unbind", t),
                this
            }
            ,
            this.bindOnce = function(t, e) {
                return i("bindOnce", t, e),
                this
            }
            ,
            this.trigger = function(t) {
                return i("trigger", t),
                this
            }
            ,
            this.fade = function(t, e, n, r) {
                return i("fade", t, e, n, r),
                this
            }
            ,
            this.fadeIn = function(t, e) {
                return i("fadeIn", t, e),
                this
            }
            ,
            this.fadeOut = function(t, e) {
                return i("fadeOut", t, e),
                this
            }
        },
        all: function() {
            return new p.group(p.sounds)
        },
        isSupported: function() {
            return !!p.el.canPlayType
        },
        isOGGSupported: function() {
            return !!p.el.canPlayType && p.el.canPlayType('audio/ogg; codecs="vorbis"')
        },
        isWAVSupported: function() {
            return !!p.el.canPlayType && p.el.canPlayType('audio/wav; codecs="1"')
        },
        isMP3Supported: function() {
            return !!p.el.canPlayType && p.el.canPlayType("audio/mpeg;")
        },
        isAACSupported: function() {
            return !!p.el.canPlayType && (p.el.canPlayType("audio/x-m4a;") || p.el.canPlayType("audio/aac;"))
        },
        toTimer: function(t, e) {
            var n, r = Math.floor(t / 3600);
            return r = isNaN(r) ? "--" : 10 <= r ? r : "0" + r,
            n = e ? Math.floor(t / 60 % 60) : Math.floor(t / 60),
            n = isNaN(n) ? "--" : 10 <= n ? n : "0" + n,
            t = Math.floor(t % 60),
            t = isNaN(t) ? "--" : 10 <= t ? t : "0" + t,
            e ? r + ":" + n + ":" + t : n + ":" + t
        },
        fromTimer: function(t) {
            var e = t.toString().split(":");
            return e && 3 === e.length && (t = 3600 * parseInt(e[0], 10) + 60 * parseInt(e[1], 10) + parseInt(e[2], 10)),
            t = e && 2 === e.length ? 60 * parseInt(e[0], 10) + parseInt(e[1], 10) : t
        },
        toPercent: function(t, e, n) {
            n = Math.pow(10, n || 0);
            return Math.round(100 * t / e * n) / n
        },
        fromPercent: function(t, e, n) {
            n = Math.pow(10, n || 0);
            return Math.round(e / 100 * t * n) / n
        }
    };
    return p
});
