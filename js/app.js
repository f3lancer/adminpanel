(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).echarts = {});
    }(void 0, (function(t) {
        "use strict";
        var m = function(t, e) {
            return (m = Object.setPrototypeOf || ({
                __proto__: []
            } instanceof Array ? function(t, e) {
                t.__proto__ = e;
            } : function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }))(t, e);
        };
        function u(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
            function n() {
                this.constructor = t;
            }
            m(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
            new n);
        }
        function v() {
            this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
        }
        var p = new function() {
            this.browser = new v, this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, 
            this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, 
            this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = "undefined" != typeof window;
        };
        "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? (p.wxa = !0, 
        p.touchEventsSupported = !0) : "undefined" == typeof document && "undefined" != typeof self ? p.worker = !0 : "undefined" == typeof navigator || 0 === navigator.userAgent.indexOf("Node.js") ? (p.node = !0, 
        p.svgSupported = !0) : (et = navigator.userAgent, ae = (Wt = p).browser, at = et.match(/Firefox\/([\d.]+)/), 
        L = et.match(/MSIE\s([\d.]+)/) || et.match(/Trident\/.+?rv:(([\d.]+))/), tt = et.match(/Edge?\/([\d.]+)/), 
        et = /micromessenger/i.test(et), at && (ae.firefox = !0, ae.version = at[1]), L && (ae.ie = !0, 
        ae.version = L[1]), tt && (ae.edge = !0, ae.version = tt[1], ae.newEdge = 18 < +tt[1].split(".")[0]), 
        et && (ae.weChat = !0), Wt.svgSupported = "undefined" != typeof SVGRect, Wt.touchEventsSupported = "ontouchstart" in window && !ae.ie && !ae.edge, 
        Wt.pointerEventsSupported = "onpointerdown" in window && (ae.edge || ae.ie && 11 <= +ae.version), 
        Wt.domSupported = "undefined" != typeof document, at = document.documentElement.style, 
        Wt.transform3dSupported = (ae.ie && "transition" in at || ae.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix || "MozPerspective" in at) && !("OTransition" in at), 
        Wt.transformSupported = Wt.transform3dSupported || ae.ie && 9 <= +ae.version);
        var x = 12, w = "sans-serif", K = x + "px " + w;
        var b, S, M = function(t) {
            var e = {};
            if ("undefined" != typeof JSON) for (var n = 0; n < t.length; n++) {
                var i = String.fromCharCode(n + 32), r = (t.charCodeAt(n) - 20) / 100;
                e[i] = r;
            }
            return e;
        }("007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N"), q = {
            createCanvas: function() {
                return "undefined" != typeof document && document.createElement("canvas");
            },
            measureText: function(t, e) {
                if (b || (n = q.createCanvas(), b = n && n.getContext("2d")), b) return S !== e && (S = b.font = e || K), 
                b.measureText(t);
                t = t || "";
                var n = /(\d+)px/.exec(e = e || K), i = n && +n[1] || x, r = 0;
                if (0 <= e.indexOf("mono")) r = i * t.length; else for (var o = 0; o < t.length; o++) {
                    var a = M[t[o]];
                    r += null == a ? i : a * i;
                }
                return {
                    width: r
                };
            },
            loadImage: function(t, e, n) {
                var i = new Image;
                return i.onload = e, i.onerror = n, i.src = t, i;
            }
        };
        function T(t) {
            for (var e in q) t[e] && (q[e] = t[e]);
        }
        var C = ht([ "Function", "RegExp", "Date", "Error", "CanvasGradient", "CanvasPattern", "Image", "Canvas" ], (function(t, e) {
            return t["[object " + e + "]"] = !0, t;
        }), {}), D = ht([ "Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64" ], (function(t, e) {
            return t["[object " + e + "Array]"] = !0, t;
        }), {}), A = Object.prototype.toString, L = Array.prototype, j = L.forEach, $ = L.filter, Q = L.slice, J = L.map, tt = function() {}.constructor, et = tt ? tt.prototype : null, nt = "__proto__", it = 2311;
        function rt() {
            return it++;
        }
        function ot() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            "undefined" != typeof console && console.error.apply(console, t);
        }
        function _(t) {
            if (null == t || "object" != typeof t) return t;
            var e = t, n = A.call(t);
            if ("[object Array]" === n) {
                if (!At(t)) {
                    e = [];
                    for (var i = 0, r = t.length; i < r; i++) e[i] = _(t[i]);
                }
            } else if (D[n]) {
                if (!At(t)) {
                    var o = t.constructor;
                    if (o.from) e = o.from(t); else for (e = new o(t.length), i = 0, r = t.length; i < r; i++) e[i] = t[i];
                }
            } else if (!C[n] && !At(t) && !mt(t)) for (var a in e = {}, t) t.hasOwnProperty(a) && a !== nt && (e[a] = _(t[a]));
            return e;
        }
        function d(t, e, n) {
            if (!P(e) || !P(t)) return n ? _(e) : t;
            for (var i in e) {
                var r, o;
                e.hasOwnProperty(i) && i !== nt && (r = t[i], !P(o = e[i]) || !P(r) || V(o) || V(r) || mt(o) || mt(r) || gt(o) || gt(r) || At(o) || At(r) ? !n && i in t || (t[i] = _(e[i])) : d(r, o, n));
            }
            return t;
        }
        function O(t, e) {
            if (Object.assign) Object.assign(t, e); else for (var n in e) e.hasOwnProperty(n) && n !== nt && (t[n] = e[n]);
            return t;
        }
        function B(t, e, n) {
            for (var i = R(e), r = 0; r < i.length; r++) {
                var o = i[r];
                (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
            }
            return t;
        }
        var at = q.createCanvas;
        function I(t, e) {
            if (t) {
                if (t.indexOf) return t.indexOf(e);
                for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
            }
            return -1;
        }
        function st(t, e) {
            var n, i = t.prototype;
            function r() {}
            for (n in r.prototype = e.prototype, t.prototype = new r, i) i.hasOwnProperty(n) && (t.prototype[n] = i[n]);
            (t.prototype.constructor = t).superClass = e;
        }
        function lt(t, e, n) {
            if (t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, 
            Object.getOwnPropertyNames) for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
                var o = i[r];
                "constructor" !== o && (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
            } else B(t, e, n);
        }
        function ut(t) {
            return !!t && "string" != typeof t && "number" == typeof t.length;
        }
        function E(t, e, n) {
            if (t && e) if (t.forEach && t.forEach === j) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t); else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
        }
        function F(t, e, n) {
            if (!t) return [];
            if (!e) return Mt(t);
            if (t.map && t.map === J) return t.map(e, n);
            for (var i = [], r = 0, o = t.length; r < o; r++) i.push(e.call(n, t[r], r, t));
            return i;
        }
        function ht(t, e, n, i) {
            if (t && e) {
                for (var r = 0, o = t.length; r < o; r++) n = e.call(i, n, t[r], r, t);
                return n;
            }
        }
        function ct(t, e, n) {
            if (!t) return [];
            if (!e) return Mt(t);
            if (t.filter && t.filter === $) return t.filter(e, n);
            for (var i = [], r = 0, o = t.length; r < o; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i;
        }
        function R(t) {
            if (!t) return [];
            if (Object.keys) return Object.keys(t);
            var e, n = [];
            for (e in t) t.hasOwnProperty(e) && n.push(e);
            return n;
        }
        var pt = et && k(et.bind) ? et.call.bind(et.bind) : function(t, e) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            return function() {
                return t.apply(e, n.concat(Q.call(arguments)));
            };
        };
        function dt(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return function() {
                return t.apply(this, e.concat(Q.call(arguments)));
            };
        }
        function V(t) {
            return Array.isArray ? Array.isArray(t) : "[object Array]" === A.call(t);
        }
        function k(t) {
            return "function" == typeof t;
        }
        function H(t) {
            return "string" == typeof t;
        }
        function ft(t) {
            return "[object String]" === A.call(t);
        }
        function W(t) {
            return "number" == typeof t;
        }
        function P(t) {
            var e = typeof t;
            return "function" == e || !!t && "object" == e;
        }
        function gt(t) {
            return !!C[A.call(t)];
        }
        function yt(t) {
            return !!D[A.call(t)];
        }
        function mt(t) {
            return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument;
        }
        function vt(t) {
            return null != t.colorStops;
        }
        function _t(t) {
            return null != t.image;
        }
        function xt(t) {
            return "[object RegExp]" === A.call(t);
        }
        function wt(t) {
            return t != t;
        }
        function bt() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            for (var n = 0, i = t.length; n < i; n++) if (null != t[n]) return t[n];
        }
        function N(t, e) {
            return null != t ? t : e;
        }
        function St(t, e, n) {
            return null != t ? t : null != e ? e : n;
        }
        function Mt(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            return Q.apply(t, e);
        }
        function Tt(t) {
            var e;
            return "number" == typeof t ? [ t, t, t, t ] : 2 === (e = t.length) ? [ t[0], t[1], t[0], t[1] ] : 3 === e ? [ t[0], t[1], t[2], t[1] ] : t;
        }
        function Ct(t, e) {
            if (!t) throw new Error(e);
        }
        function It(t) {
            return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }
        var kt = "__ec_primitive__";
        function Dt(t) {
            t[kt] = !0;
        }
        function At(t) {
            return t[kt];
        }
        Ot.prototype.delete = function(t) {
            var e = this.has(t);
            return e && delete this.data[t], e;
        }, Ot.prototype.has = function(t) {
            return this.data.hasOwnProperty(t);
        }, Ot.prototype.get = function(t) {
            return this.data[t];
        }, Ot.prototype.set = function(t, e) {
            return this.data[t] = e, this;
        }, Ot.prototype.keys = function() {
            return R(this.data);
        }, Ot.prototype.forEach = function(t) {
            var e, n = this.data;
            for (e in n) n.hasOwnProperty(e) && t(n[e], e);
        };
        var Lt = Ot, Pt = "function" == typeof Map;
        function Ot() {
            this.data = {};
        }
        Nt.prototype.hasKey = function(t) {
            return this.data.has(t);
        }, Nt.prototype.get = function(t) {
            return this.data.get(t);
        }, Nt.prototype.set = function(t, e) {
            return this.data.set(t, e), e;
        }, Nt.prototype.each = function(n, i) {
            this.data.forEach((function(t, e) {
                n.call(i, t, e);
            }));
        }, Nt.prototype.keys = function() {
            var t = this.data.keys();
            return Pt ? Array.from(t) : t;
        }, Nt.prototype.removeKey = function(t) {
            this.data.delete(t);
        };
        var Rt = Nt;
        function Nt(t) {
            var n = V(t), i = (this.data = new (Pt ? Map : Lt), this);
            function e(t, e) {
                n ? i.set(t, e) : i.set(e, t);
            }
            t instanceof Nt ? t.each(e) : t && E(t, e);
        }
        function z(t) {
            return new Rt(t);
        }
        function Et(t, e) {
            for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
            var r = t.length;
            for (i = 0; i < e.length; i++) n[i + r] = e[i];
            return n;
        }
        function zt(t, e) {
            var n;
            t = Object.create ? Object.create(t) : ((n = function() {}).prototype = t, new n);
            return e && O(t, e), t;
        }
        function Bt(t) {
            t = t.style;
            t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", 
            t["-webkit-touch-callout"] = "none";
        }
        function Ft(t, e) {
            return t.hasOwnProperty(e);
        }
        function Vt() {}
        var Ht = 180 / Math.PI, Wt = Object.freeze({
            __proto__: null,
            HashMap: Rt,
            RADIAN_TO_DEGREE: Ht,
            assert: Ct,
            bind: pt,
            clone: _,
            concatArray: Et,
            createCanvas: at,
            createHashMap: z,
            createObject: zt,
            curry: dt,
            defaults: B,
            disableUserSelect: Bt,
            each: E,
            eqNaN: wt,
            extend: O,
            filter: ct,
            find: function(t, e, n) {
                if (t && e) for (var i = 0, r = t.length; i < r; i++) if (e.call(n, t[i], i, t)) return t[i];
            },
            guid: rt,
            hasOwn: Ft,
            indexOf: I,
            inherits: st,
            isArray: V,
            isArrayLike: ut,
            isBuiltInObject: gt,
            isDom: mt,
            isFunction: k,
            isGradientObject: vt,
            isImagePatternObject: _t,
            isNumber: W,
            isObject: P,
            isPrimitive: At,
            isRegExp: xt,
            isString: H,
            isStringSafe: ft,
            isTypedArray: yt,
            keys: R,
            logError: ot,
            map: F,
            merge: d,
            mergeAll: function(t, e) {
                for (var n = t[0], i = 1, r = t.length; i < r; i++) n = d(n, t[i], e);
                return n;
            },
            mixin: lt,
            noop: Vt,
            normalizeCssArray: Tt,
            reduce: ht,
            retrieve: bt,
            retrieve2: N,
            retrieve3: St,
            setAsPrimitive: Dt,
            slice: Mt,
            trim: It
        });
        function Gt(t, e) {
            return [ t = null == t ? 0 : t, e = null == e ? 0 : e ];
        }
        function Ut(t) {
            return [ t[0], t[1] ];
        }
        function Xt(t, e, n) {
            return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
        }
        function Yt(t, e, n) {
            return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
        }
        function qt(t) {
            return Math.sqrt(jt(t));
        }
        function jt(t) {
            return t[0] * t[0] + t[1] * t[1];
        }
        function Zt(t, e, n) {
            return t[0] = e[0] * n, t[1] = e[1] * n, t;
        }
        function Kt(t, e) {
            var n = qt(e);
            return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
        }
        function $t(t, e) {
            return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
        }
        var Qt = $t;
        function Jt(t, e) {
            return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
        }
        var te = Jt;
        function ee(t, e, n, i) {
            return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;
        }
        function ne(t, e, n) {
            var i = e[0];
            e = e[1];
            return t[0] = n[0] * i + n[2] * e + n[4], t[1] = n[1] * i + n[3] * e + n[5], t;
        }
        function ie(t, e, n) {
            return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
        }
        function re(t, e, n) {
            return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
        }
        function oe(t, e) {
            this.target = t, this.topTarget = e && e.topTarget;
        }
        var ae = Object.freeze({
            __proto__: null,
            add: Xt,
            applyTransform: ne,
            clone: Ut,
            copy: function(t, e) {
                return t[0] = e[0], t[1] = e[1], t;
            },
            create: Gt,
            dist: Qt,
            distSquare: te,
            distance: $t,
            distanceSquare: Jt,
            div: function(t, e, n) {
                return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
            },
            dot: function(t, e) {
                return t[0] * e[0] + t[1] * e[1];
            },
            len: qt,
            lenSquare: jt,
            length: qt,
            lengthSquare: jt,
            lerp: ee,
            max: re,
            min: ie,
            mul: function(t, e, n) {
                return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
            },
            negate: function(t, e) {
                return t[0] = -e[0], t[1] = -e[1], t;
            },
            normalize: Kt,
            scale: Zt,
            scaleAndAdd: function(t, e, n, i) {
                return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
            },
            set: function(t, e, n) {
                return t[0] = e, t[1] = n, t;
            },
            sub: Yt
        }), se = (le.prototype._dragStart = function(t) {
            for (var e = t.target; e && !e.draggable; ) e = e.parent || e.__hostTarget;
            e && ((this._draggingTarget = e).dragging = !0, this._x = t.offsetX, this._y = t.offsetY, 
            this.handler.dispatchToElement(new oe(e, t), "dragstart", t.event));
        }, le.prototype._drag = function(t) {
            var e, n, i, r, o = this._draggingTarget;
            o && (e = t.offsetX, n = t.offsetY, i = e - this._x, r = n - this._y, this._x = e, 
            this._y = n, o.drift(i, r, t), this.handler.dispatchToElement(new oe(o, t), "drag", t.event), 
            i = this.handler.findHover(e, n, o).target, r = this._dropTarget, o !== (this._dropTarget = i)) && (r && i !== r && this.handler.dispatchToElement(new oe(r, t), "dragleave", t.event), 
            i) && i !== r && this.handler.dispatchToElement(new oe(i, t), "dragenter", t.event);
        }, le.prototype._dragEnd = function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.handler.dispatchToElement(new oe(e, t), "dragend", t.event), 
            this._dropTarget && this.handler.dispatchToElement(new oe(this._dropTarget, t), "drop", t.event), 
            this._draggingTarget = null, this._dropTarget = null;
        }, le);
        function le(t) {
            (this.handler = t).on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), 
            t.on("mouseup", this._dragEnd, this);
        }
        he.prototype.on = function(t, e, n, i) {
            this._$handlers || (this._$handlers = {});
            var r = this._$handlers;
            if ("function" == typeof e && (i = n, n = e, e = null), n && t) {
                var o = this._$eventProcessor;
                null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)), r[t] || (r[t] = []);
                for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
                o = {
                    h: n,
                    query: e,
                    ctx: i || this,
                    callAtLast: n.zrEventfulCallAtLast
                }, e = r[t].length - 1, i = r[t][e];
                i && i.callAtLast ? r[t].splice(e, 0, o) : r[t].push(o);
            }
            return this;
        }, he.prototype.isSilent = function(t) {
            var e = this._$handlers;
            return !e || !e[t] || !e[t].length;
        }, he.prototype.off = function(t, e) {
            var n = this._$handlers;
            if (n) if (t) if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, o = n[t].length; r < o; r++) n[t][r].h !== e && i.push(n[t][r]);
                    n[t] = i;
                }
                n[t] && 0 === n[t].length && delete n[t];
            } else delete n[t]; else this._$handlers = {};
            return this;
        }, he.prototype.trigger = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            if (this._$handlers) {
                var i = this._$handlers[t], r = this._$eventProcessor;
                if (i) for (var o = e.length, a = i.length, s = 0; s < a; s++) {
                    var l = i[s];
                    if (!r || !r.filter || null == l.query || r.filter(t, l.query)) switch (o) {
                      case 0:
                        l.h.call(l.ctx);
                        break;

                      case 1:
                        l.h.call(l.ctx, e[0]);
                        break;

                      case 2:
                        l.h.call(l.ctx, e[0], e[1]);
                        break;

                      default:
                        l.h.apply(l.ctx, e);
                    }
                }
                r && r.afterTrigger && r.afterTrigger(t);
            }
            return this;
        }, he.prototype.triggerWithContext = function(t) {
            for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            if (this._$handlers) {
                var i = this._$handlers[t], r = this._$eventProcessor;
                if (i) for (var o = e.length, a = e[o - 1], s = i.length, l = 0; l < s; l++) {
                    var u = i[l];
                    if (!r || !r.filter || null == u.query || r.filter(t, u.query)) switch (o) {
                      case 0:
                        u.h.call(a);
                        break;

                      case 1:
                        u.h.call(a, e[0]);
                        break;

                      case 2:
                        u.h.call(a, e[0], e[1]);
                        break;

                      default:
                        u.h.apply(a, e.slice(1, o - 1));
                    }
                }
                r && r.afterTrigger && r.afterTrigger(t);
            }
            return this;
        };
        var ue = he;
        function he(t) {
            t && (this._$eventProcessor = t);
        }
        var ce = Math.log(2);
        function pe(t, e, n, i, r, o) {
            var a, s = i + "-" + r, l = t.length;
            if (o.hasOwnProperty(s)) return o[s];
            if (1 === e) return a = Math.round(Math.log((1 << l) - 1 & ~r) / ce), t[n][a];
            for (var u = i | 1 << n, h = n + 1; i & 1 << h; ) h++;
            for (var c = 0, p = 0, d = 0; p < l; p++) {
                var f = 1 << p;
                f & r || (c += (d % 2 ? -1 : 1) * t[n][p] * pe(t, e - 1, h, u, r | f, o), d++);
            }
            return o[s] = c;
        }
        function de(t, e) {
            var n = [ [ t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1] ], [ 0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1] ], [ t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3] ], [ 0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3] ], [ t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5] ], [ 0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5] ], [ t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7] ], [ 0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7] ] ], i = {}, r = pe(n, 8, 0, 0, 0, i);
            if (0 !== r) {
                for (var o = [], a = 0; a < 8; a++) for (var s = 0; s < 8; s++) null == o[s] && (o[s] = 0), 
                o[s] += ((a + s) % 2 ? -1 : 1) * pe(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i) / r * e[a];
                return function(t, e, n) {
                    var i = e * o[6] + n * o[7] + 1;
                    t[0] = (e * o[0] + n * o[1] + o[2]) / i, t[1] = (e * o[3] + n * o[4] + o[5]) / i;
                };
            }
        }
        var fe = "___zrEVENTSAVED";
        function ge(t, e, n, i, r) {
            if (e.getBoundingClientRect && p.domSupported && !ye(e)) {
                var o = e[fe] || (e[fe] = {});
                e = function(t, e, n) {
                    for (var i = n ? "invTrans" : "trans", r = e[i], o = e.srcCoords, a = [], s = [], l = !0, u = 0; u < 4; u++) {
                        var h = t[u].getBoundingClientRect(), c = 2 * u, p = h.left;
                        h = h.top;
                        a.push(p, h), l = l && o && p === o[c] && h === o[1 + c], s.push(t[u].offsetLeft, t[u].offsetTop);
                    }
                    return l && r ? r : (e.srcCoords = a, e[i] = n ? de(s, a) : de(a, s));
                }(function(t, e) {
                    var n = e.markers;
                    if (!n) {
                        n = e.markers = [];
                        for (var i = [ "left", "right" ], r = [ "top", "bottom" ], o = 0; o < 4; o++) {
                            var a = document.createElement("div"), s = o % 2, l = (o >> 1) % 2;
                            a.style.cssText = [ "position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[s] + ":0", r[l] + ":0", i[1 - s] + ":auto", r[1 - l] + ":auto", "" ].join("!important;"), 
                            t.appendChild(a), n.push(a);
                        }
                    }
                    return n;
                }(e, o), o, r);
                if (e) return e(t, n, i), 1;
            }
        }
        function ye(t) {
            return "CANVAS" === t.nodeName.toUpperCase();
        }
        var me = /([&<>"'])/g, ve = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };
        function _e(t) {
            return null == t ? "" : (t + "").replace(me, (function(t, e) {
                return ve[e];
            }));
        }
        var xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, we = [], be = p.browser.firefox && +p.browser.version.split(".")[0] < 39;
        function Se(t, e, n, i) {
            return n = n || {}, i ? Me(t, e, n) : be && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, 
            n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : Me(t, e, n), 
            n;
        }
        function Me(t, e, n) {
            if (p.domSupported && t.getBoundingClientRect) {
                var i, r = e.clientX;
                e = e.clientY;
                if (ye(t)) return i = t.getBoundingClientRect(), n.zrX = r - i.left, n.zrY = e - i.top;
                if (ge(we, t, r, e)) return n.zrX = we[0], n.zrY = we[1];
            }
            n.zrX = n.zrY = 0;
        }
        function Te(t) {
            return t || window.event;
        }
        function Ce(t, e, n) {
            var i;
            return null == (e = Te(e)).zrX && ((i = e.type) && 0 <= i.indexOf("touch") ? (i = ("touchend" !== i ? e.targetTouches : e.changedTouches)[0]) && Se(t, i, e, n) : (Se(t, e, e, n), 
            t = (t = (i = e).wheelDelta) || (n = i.deltaX, i = i.deltaY, null == n || null == i ? t : 3 * (0 !== i ? Math.abs(i) : Math.abs(n)) * (0 < i || !(i < 0) && 0 < n ? -1 : 1)), 
            e.zrDelta = t ? t / 120 : -(e.detail || 0) / 3), i = e.button, null == e.which && void 0 !== i && xe.test(e.type)) && (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), 
            e;
        }
        var Ie = function(t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
        }, ke = (De.prototype.recognize = function(t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t);
        }, De.prototype.clear = function() {
            return this._track.length = 0, this;
        }, De.prototype._doTrack = function(t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                }, o = 0, a = i.length; o < a; o++) {
                    var s = i[o], l = Se(n, s, {});
                    r.points.push([ l.zrX, l.zrY ]), r.touches.push(s);
                }
                this._track.push(r);
            }
        }, De.prototype._recognize = function(t) {
            for (var e in Le) if (Le.hasOwnProperty(e)) {
                e = Le[e](this._track, t);
                if (e) return e;
            }
        }, De);
        function De() {
            this._track = [];
        }
        function Ae(t) {
            var e = t[1][0] - t[0][0];
            t = t[1][1] - t[0][1];
            return Math.sqrt(e * e + t * t);
        }
        var Le = {
            pinch: function(t, e) {
                var n = t.length;
                if (n) {
                    var i = (t[n - 1] || {}).points;
                    n = (t[n - 2] || {}).points || i;
                    if (n && 1 < n.length && i && 1 < i.length) return n = Ae(i) / Ae(n), isFinite(n) || (n = 1), 
                    e.pinchScale = n, n = [ (i[0][0] + i[1][0]) / 2, (i[0][1] + i[1][1]) / 2 ], e.pinchX = n[0], 
                    e.pinchY = n[1], {
                        type: "pinch",
                        target: t[0].target,
                        event: e
                    };
                }
            }
        };
        function Pe() {
            return [ 1, 0, 0, 1, 0, 0 ];
        }
        function Oe(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
        }
        function Re(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], 
            t;
        }
        function Ne(t, e, n) {
            var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], o = e[0] * n[2] + e[2] * n[3], a = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4];
            n = e[1] * n[4] + e[3] * n[5] + e[5];
            return t[0] = i, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = n, t;
        }
        function Ee(t, e, n) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], 
            t;
        }
        function ze(t, e, n, i) {
            void 0 === i && (i = [ 0, 0 ]);
            var r = e[0], o = e[2], a = e[4], s = e[1], l = e[3], u = (e = e[5], Math.sin(n));
            n = Math.cos(n);
            return t[0] = r * n + s * u, t[1] = -r * u + s * n, t[2] = o * n + l * u, t[3] = -o * u + n * l, 
            t[4] = n * (a - i[0]) + u * (e - i[1]) + i[0], t[5] = n * (e - i[1]) - u * (a - i[0]) + i[1], 
            t;
        }
        function Be(t, e, n) {
            var i = n[0];
            n = n[1];
            return t[0] = e[0] * i, t[1] = e[1] * n, t[2] = e[2] * i, t[3] = e[3] * n, t[4] = e[4] * i, 
            t[5] = e[5] * n, t;
        }
        function Fe(t, e) {
            var n = e[0], i = e[2], r = e[4], o = e[1], a = e[3], s = (e = e[5], n * a - o * i);
            return s ? (t[0] = a * (s = 1 / s), t[1] = -o * s, t[2] = -i * s, t[3] = n * s, 
            t[4] = (i * e - a * r) * s, t[5] = (o * r - n * e) * s, t) : null;
        }
        var Ve = Object.freeze({
            __proto__: null,
            clone: function(t) {
                var e = Pe();
                return Re(e, t), e;
            },
            copy: Re,
            create: Pe,
            identity: Oe,
            invert: Fe,
            mul: Ne,
            rotate: ze,
            scale: Be,
            translate: Ee
        }), G = (e.prototype.copy = function(t) {
            return this.x = t.x, this.y = t.y, this;
        }, e.prototype.clone = function() {
            return new e(this.x, this.y);
        }, e.prototype.set = function(t, e) {
            return this.x = t, this.y = e, this;
        }, e.prototype.equal = function(t) {
            return t.x === this.x && t.y === this.y;
        }, e.prototype.add = function(t) {
            return this.x += t.x, this.y += t.y, this;
        }, e.prototype.scale = function(t) {
            this.x *= t, this.y *= t;
        }, e.prototype.scaleAndAdd = function(t, e) {
            this.x += t.x * e, this.y += t.y * e;
        }, e.prototype.sub = function(t) {
            return this.x -= t.x, this.y -= t.y, this;
        }, e.prototype.dot = function(t) {
            return this.x * t.x + this.y * t.y;
        }, e.prototype.len = function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }, e.prototype.lenSquare = function() {
            return this.x * this.x + this.y * this.y;
        }, e.prototype.normalize = function() {
            var t = this.len();
            return this.x /= t, this.y /= t, this;
        }, e.prototype.distance = function(t) {
            var e = this.x - t.x;
            t = this.y - t.y;
            return Math.sqrt(e * e + t * t);
        }, e.prototype.distanceSquare = function(t) {
            var e = this.x - t.x;
            t = this.y - t.y;
            return e * e + t * t;
        }, e.prototype.negate = function() {
            return this.x = -this.x, this.y = -this.y, this;
        }, e.prototype.transform = function(t) {
            var e, n;
            if (t) return e = this.x, n = this.y, this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], 
            this;
        }, e.prototype.toArray = function(t) {
            return t[0] = this.x, t[1] = this.y, t;
        }, e.prototype.fromArray = function(t) {
            this.x = t[0], this.y = t[1];
        }, e.set = function(t, e, n) {
            t.x = e, t.y = n;
        }, e.copy = function(t, e) {
            t.x = e.x, t.y = e.y;
        }, e.len = function(t) {
            return Math.sqrt(t.x * t.x + t.y * t.y);
        }, e.lenSquare = function(t) {
            return t.x * t.x + t.y * t.y;
        }, e.dot = function(t, e) {
            return t.x * e.x + t.y * e.y;
        }, e.add = function(t, e, n) {
            t.x = e.x + n.x, t.y = e.y + n.y;
        }, e.sub = function(t, e, n) {
            t.x = e.x - n.x, t.y = e.y - n.y;
        }, e.scale = function(t, e, n) {
            t.x = e.x * n, t.y = e.y * n;
        }, e.scaleAndAdd = function(t, e, n, i) {
            t.x = e.x + n.x * i, t.y = e.y + n.y * i;
        }, e.lerp = function(t, e, n, i) {
            var r = 1 - i;
            t.x = r * e.x + i * n.x, t.y = r * e.y + i * n.y;
        }, e);
        function e(t, e) {
            this.x = t || 0, this.y = e || 0;
        }
        var He = Math.min, We = Math.max, Ge = new G, Ue = new G, Xe = new G, Ye = new G, qe = new G, je = new G, U = (Ze.prototype.union = function(t) {
            var e = He(t.x, this.x), n = He(t.y, this.y);
            isFinite(this.x) && isFinite(this.width) ? this.width = We(t.x + t.width, this.x + this.width) - e : this.width = t.width, 
            isFinite(this.y) && isFinite(this.height) ? this.height = We(t.y + t.height, this.y + this.height) - n : this.height = t.height, 
            this.x = e, this.y = n;
        }, Ze.prototype.applyTransform = function(t) {
            Ze.applyTransform(this, this, t);
        }, Ze.prototype.calculateTransform = function(t) {
            var e = t.width / this.width, n = t.height / this.height, i = Pe();
            return Ee(i, i, [ -this.x, -this.y ]), Be(i, i, [ e, n ]), Ee(i, i, [ t.x, t.y ]), 
            i;
        }, Ze.prototype.intersect = function(t, e) {
            if (!t) return !1;
            t instanceof Ze || (t = Ze.create(t));
            var n, i, r, o, a, s, l, u, h = this, c = h.x, p = h.x + h.width, d = h.y, f = (h = h.y + h.height, 
            t.x), g = t.x + t.width, y = t.y, m = (t = t.y + t.height, !(p < f || g < c || h < y || t < d));
            return e && (n = 1 / 0, i = 0, r = Math.abs(p - f), o = Math.abs(g - c), a = Math.abs(h - y), 
            s = Math.abs(t - d), l = Math.min(r, o), u = Math.min(a, s), p < f || g < c ? i < l && (i = l, 
            r < o ? G.set(je, -r, 0) : G.set(je, o, 0)) : l < n && (n = l, r < o ? G.set(qe, r, 0) : G.set(qe, -o, 0)), 
            h < y || t < d ? i < u && (i = u, a < s ? G.set(je, 0, -a) : G.set(je, 0, s)) : l < n && (n = l, 
            a < s ? G.set(qe, 0, a) : G.set(qe, 0, -s))), e && G.copy(e, m ? qe : je), m;
        }, Ze.prototype.contain = function(t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
        }, Ze.prototype.clone = function() {
            return new Ze(this.x, this.y, this.width, this.height);
        }, Ze.prototype.copy = function(t) {
            Ze.copy(this, t);
        }, Ze.prototype.plain = function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }, Ze.prototype.isFinite = function() {
            return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
        }, Ze.prototype.isZero = function() {
            return 0 === this.width || 0 === this.height;
        }, Ze.create = function(t) {
            return new Ze(t.x, t.y, t.width, t.height);
        }, Ze.copy = function(t, e) {
            t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height;
        }, Ze.applyTransform = function(t, e, n) {
            var i, r, o, a;
            n ? n[1] < 1e-5 && -1e-5 < n[1] && n[2] < 1e-5 && -1e-5 < n[2] ? (i = n[0], r = n[3], 
            o = n[4], a = n[5], t.x = e.x * i + o, t.y = e.y * r + a, t.width = e.width * i, 
            t.height = e.height * r, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, 
            t.height = -t.height)) : (Ge.x = Xe.x = e.x, Ge.y = Ye.y = e.y, Ue.x = Ye.x = e.x + e.width, 
            Ue.y = Xe.y = e.y + e.height, Ge.transform(n), Ye.transform(n), Ue.transform(n), 
            Xe.transform(n), t.x = He(Ge.x, Ue.x, Xe.x, Ye.x), t.y = He(Ge.y, Ue.y, Xe.y, Ye.y), 
            o = We(Ge.x, Ue.x, Xe.x, Ye.x), a = We(Ge.y, Ue.y, Xe.y, Ye.y), t.width = o - t.x, 
            t.height = a - t.y) : t !== e && Ze.copy(t, e);
        }, Ze);
        function Ze(t, e, n, i) {
            n < 0 && (t += n, n = -n), i < 0 && (e += i, i = -i), this.x = t, this.y = e, this.width = n, 
            this.height = i;
        }
        var Ke = "silent";
        function $e() {
            Ie(this.event);
        }
        function Qe(t, e) {
            this.x = t, this.y = e;
        }
        u(sn, tn = ue), sn.prototype.dispose = function() {}, sn.prototype.setCursor = function() {};
        var Je, tn, en = sn, nn = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], rn = new U(0, 0, 0, 0), on = (u(an, Je = ue), 
        an.prototype.setHandlerProxy = function(e) {
            this.proxy && this.proxy.dispose(), e && (E(nn, (function(t) {
                e.on && e.on(t, this[t], this);
            }), this), e.handler = this), this.proxy = e;
        }, an.prototype.mousemove = function(t) {
            var e = t.zrX, n = t.zrY, i = un(this, e, n), r = this._hovered, o = r.target;
            i = (o && !o.__zr && (o = (r = this.findHover(r.x, r.y)).target), this._hovered = i ? new Qe(e, n) : this.findHover(e, n)), 
            e = i.target, n = this.proxy;
            n.setCursor && n.setCursor(e ? e.cursor : "default"), o && e !== o && this.dispatchToElement(r, "mouseout", t), 
            this.dispatchToElement(i, "mousemove", t), e && e !== o && this.dispatchToElement(i, "mouseover", t);
        }, an.prototype.mouseout = function(t) {
            var e = t.zrEventControl;
            "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), 
            "no_globalout" !== e && this.trigger("globalout", {
                type: "globalout",
                event: t
            });
        }, an.prototype.resize = function() {
            this._hovered = new Qe(0, 0);
        }, an.prototype.dispatch = function(t, e) {
            t = this[t];
            t && t.call(this, e);
        }, an.prototype.dispose = function() {
            this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
        }, an.prototype.setCursorStyle = function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t);
        }, an.prototype.dispatchToElement = function(t, e, n) {
            var i = (t = t || {}).target;
            if (!i || !i.silent) {
                for (var r = "on" + e, o = {
                    type: e,
                    event: n,
                    target: t.target,
                    topTarget: t.topTarget,
                    cancelBubble: !1,
                    offsetX: n.zrX,
                    offsetY: n.zrY,
                    gestureEvent: n.gestureEvent,
                    pinchX: n.pinchX,
                    pinchY: n.pinchY,
                    pinchScale: n.pinchScale,
                    wheelDelta: n.zrDelta,
                    zrByTouch: n.zrByTouch,
                    which: n.which,
                    stop: $e
                }; i && (i[r] && (o.cancelBubble = !!i[r].call(i, o)), i.trigger(e, o), i = i.__hostTarget || i.parent, 
                !o.cancelBubble); ) ;
                o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer((function(t) {
                    "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o);
                })));
            }
        }, an.prototype.findHover = function(t, e, n) {
            var i = this.storage.getDisplayList(), r = new Qe(t, e);
            if (ln(i, r, t, e, n), this._pointerSize && !r.target) {
                for (var o = [], a = this._pointerSize, s = a / 2, l = new U(t - s, e - s, a, a), u = i.length - 1; 0 <= u; u--) {
                    var h = i[u];
                    h === n || h.ignore || h.ignoreCoarsePointer || h.parent && h.parent.ignoreCoarsePointer || (rn.copy(h.getBoundingRect()), 
                    h.transform && rn.applyTransform(h.transform), rn.intersect(l) && o.push(h));
                }
                if (o.length) for (var c = Math.PI / 12, p = 2 * Math.PI, d = 0; d < s; d += 4) for (var f = 0; f < p; f += c) if (ln(o, r, t + d * Math.cos(f), e + d * Math.sin(f), n), 
                r.target) return r;
            }
            return r;
        }, an.prototype.processGesture = function(t, e) {
            this._gestureMgr || (this._gestureMgr = new ke);
            var n = this._gestureMgr, i = ("start" === e && n.clear(), n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom));
            "end" === e && n.clear(), i && (e = i.type, t.gestureEvent = e, (n = new Qe).target = i.target, 
            this.dispatchToElement(n, e, i.event));
        }, an);
        function an(t, e, n, i, r) {
            var o = Je.call(this) || this;
            return o._hovered = new Qe(0, 0), o.storage = t, o.painter = e, o.painterRoot = i, 
            o._pointerSize = r, n = n || new en, o.proxy = null, o.setHandlerProxy(n), o._draggingMgr = new se(o), 
            o;
        }
        function sn() {
            var t = null !== tn && tn.apply(this, arguments) || this;
            return t.handler = null, t;
        }
        function ln(t, e, n, i, r) {
            for (var o = t.length - 1; 0 <= o; o--) {
                var a = t[o], s = void 0;
                if (a !== r && !a.ignore && (s = function(t, e, n) {
                    if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
                        for (var i = t, r = void 0, o = !1; i; ) {
                            if (!(o = i.ignoreClip ? !0 : o)) {
                                var a = i.getClipPath();
                                if (a && !a.contain(e, n)) return !1;
                            }
                            i.silent && (r = !0);
                            i = i.__hostTarget || i.parent;
                        }
                        return !r || Ke;
                    }
                    return !1;
                }(a, n, i)) && (e.topTarget || (e.topTarget = a), s !== Ke)) {
                    e.target = a;
                    break;
                }
            }
        }
        function un(t, e, n) {
            t = t.painter;
            return e < 0 || e > t.getWidth() || n < 0 || n > t.getHeight();
        }
        E([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], (function(a) {
            on.prototype[a] = function(t) {
                var e, n, i = t.zrX, r = t.zrY, o = un(this, i, r);
                if ("mouseup" === a && o || (n = (e = this.findHover(i, r)).target), "mousedown" === a) this._downEl = n, 
                this._downPoint = [ t.zrX, t.zrY ], this._upEl = n; else if ("mouseup" === a) this._upEl = n; else if ("click" === a) {
                    if (this._downEl !== this._upEl || !this._downPoint || 4 < Qt(this._downPoint, [ t.zrX, t.zrY ])) return;
                    this._downPoint = null;
                }
                this.dispatchToElement(e, a, t);
            };
        }));
        var hn = 32, cn = 7;
        function pn(t, e, n, i) {
            var r = e + 1;
            if (r === n) return 1;
            if (i(t[r++], t[e]) < 0) {
                for (;r < n && i(t[r], t[r - 1]) < 0; ) r++;
                var o = t, a = e, s = r;
                for (s--; a < s; ) {
                    var l = o[a];
                    o[a++] = o[s], o[s--] = l;
                }
            } else for (;r < n && 0 <= i(t[r], t[r - 1]); ) r++;
            return r - e;
        }
        function dn(t, e, n, i, r) {
            for (i === e && i++; i < n; i++) {
                for (var o, a = t[i], s = e, l = i; s < l; ) r(a, t[o = s + l >>> 1]) < 0 ? l = o : s = 1 + o;
                var u = i - s;
                switch (u) {
                  case 3:
                    t[s + 3] = t[s + 2];

                  case 2:
                    t[s + 2] = t[s + 1];

                  case 1:
                    t[s + 1] = t[s];
                    break;

                  default:
                    for (;0 < u; ) t[s + u] = t[s + u - 1], u--;
                }
                t[s] = a;
            }
        }
        function fn(t, e, n, i, r, o) {
            var a = 0, s = 0, l = 1;
            if (0 < o(t, e[n + r])) {
                for (s = i - r; l < s && 0 < o(t, e[n + r + l]); ) (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
                s < l && (l = s), a += r, l += r;
            } else {
                for (s = r + 1; l < s && o(t, e[n + r - l]) <= 0; ) (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
                i = a, a = r - (l = s < l ? s : l), l = r - i;
            }
            for (a++; a < l; ) {
                var u = a + (l - a >>> 1);
                0 < o(t, e[n + u]) ? a = u + 1 : l = u;
            }
            return l;
        }
        function gn(t, e, n, i, r, o) {
            var a = 0, s = 0, l = 1;
            if (o(t, e[n + r]) < 0) {
                for (s = r + 1; l < s && o(t, e[n + r - l]) < 0; ) (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
                var u = a;
                a = r - (l = s < l ? s : l), l = r - u;
            } else {
                for (s = i - r; l < s && 0 <= o(t, e[n + r + l]); ) (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
                s < l && (l = s), a += r, l += r;
            }
            for (a++; a < l; ) {
                var h = a + (l - a >>> 1);
                o(t, e[n + h]) < 0 ? l = h : a = h + 1;
            }
            return l;
        }
        function yn(t, e, n, i) {
            var f, g, o, a, y, s, m, r = (i = i || t.length) - (n = n || 0);
            if (!(r < 2)) {
                var l = 0;
                if (r < hn) dn(t, n, i, n + (l = pn(t, n, i, e)), e); else {
                    f = t, g = e, y = cn, s = 0, m = [], o = [], a = [];
                    var u, h = {
                        mergeRuns: function() {
                            for (;1 < s; ) {
                                var t = s - 2;
                                if (1 <= t && a[t - 1] <= a[t] + a[t + 1] || 2 <= t && a[t - 2] <= a[t] + a[t - 1]) a[t - 1] < a[t + 1] && t--; else if (a[t] > a[t + 1]) break;
                                p(t);
                            }
                        },
                        forceMergeRuns: function() {
                            for (;1 < s; ) {
                                var t = s - 2;
                                0 < t && a[t - 1] < a[t + 1] && t--, p(t);
                            }
                        },
                        pushRun: function(t, e) {
                            o[s] = t, a[s] = e, s += 1;
                        }
                    }, c = function(t) {
                        for (var e = 0; hn <= t; ) e |= 1 & t, t >>= 1;
                        return t + e;
                    }(r);
                    do {} while ((l = pn(t, n, i, e)) < c && (dn(t, n, n + (u = c < (u = r) ? c : r), n + l, e), 
                    l = u), h.pushRun(n, l), h.mergeRuns(), n += l, 0 !== (r -= l));
                    h.forceMergeRuns();
                }
            }
            function p(t) {
                var e = o[t], n = a[t], i = o[t + 1], r = a[t + 1];
                t = (a[t] = n + r, t === s - 3 && (o[t + 1] = o[t + 2], a[t + 1] = a[t + 2]), s--, 
                gn(f[i], f, e, n, 0, g));
                e += t, 0 != (n -= t) && 0 !== (r = fn(f[e + n - 1], f, i, r, r - 1, g)) && (n <= r ? function(t, e, n, i) {
                    var r = 0;
                    for (r = 0; r < e; r++) m[r] = f[t + r];
                    var o = 0, a = n, s = t;
                    if (f[s++] = f[a++], 0 == --i) for (r = 0; r < e; r++) f[s + r] = m[o + r]; else {
                        if (1 === e) {
                            for (r = 0; r < i; r++) f[s + r] = f[a + r];
                            return f[s + i] = m[o];
                        }
                        for (var l, u, h, c = y; ;) {
                            u = l = 0, h = !1;
                            do {
                                if (g(f[a], m[o]) < 0) {
                                    if (f[s++] = f[a++], u++, (l = 0) == --i) {
                                        h = !0;
                                        break;
                                    }
                                } else if (f[s++] = m[o++], l++, u = 0, 1 == --e) {
                                    h = !0;
                                    break;
                                }
                            } while ((l | u) < c);
                            if (h) break;
                            do {
                                if (0 !== (l = gn(f[a], m, o, e, 0, g))) {
                                    for (r = 0; r < l; r++) f[s + r] = m[o + r];
                                    if (s += l, o += l, (e -= l) <= 1) {
                                        h = !0;
                                        break;
                                    }
                                }
                                if (f[s++] = f[a++], 0 == --i) {
                                    h = !0;
                                    break;
                                }
                                if (0 !== (u = fn(m[o], f, a, i, 0, g))) {
                                    for (r = 0; r < u; r++) f[s + r] = f[a + r];
                                    if (s += u, a += u, 0 == (i -= u)) {
                                        h = !0;
                                        break;
                                    }
                                }
                                if (f[s++] = m[o++], 1 == --e) {
                                    h = !0;
                                    break;
                                }
                            } while (c--, cn <= l || cn <= u);
                            if (h) break;
                            c < 0 && (c = 0), c += 2;
                        }
                        if ((y = c) < 1 && (y = 1), 1 === e) {
                            for (r = 0; r < i; r++) f[s + r] = f[a + r];
                            f[s + i] = m[o];
                        } else {
                            if (0 === e) throw new Error;
                            for (r = 0; r < e; r++) f[s + r] = m[o + r];
                        }
                    }
                } : function(t, e, n, i) {
                    var r = 0;
                    for (r = 0; r < i; r++) m[r] = f[n + r];
                    var o = t + e - 1, a = i - 1, s = n + i - 1, l = 0, u = 0;
                    if (f[s--] = f[o--], 0 == --e) for (l = s - (i - 1), r = 0; r < i; r++) f[l + r] = m[r]; else {
                        if (1 === i) {
                            for (u = 1 + (s -= e), l = 1 + (o -= e), r = e - 1; 0 <= r; r--) f[u + r] = f[l + r];
                            return f[s] = m[a];
                        }
                        for (var h = y; ;) {
                            var c = 0, p = 0, d = !1;
                            do {
                                if (g(m[a], f[o]) < 0) {
                                    if (f[s--] = f[o--], c++, (p = 0) == --e) {
                                        d = !0;
                                        break;
                                    }
                                } else if (f[s--] = m[a--], p++, c = 0, 1 == --i) {
                                    d = !0;
                                    break;
                                }
                            } while ((c | p) < h);
                            if (d) break;
                            do {
                                if (0 != (c = e - gn(m[a], f, t, e, e - 1, g))) {
                                    for (e -= c, u = 1 + (s -= c), l = 1 + (o -= c), r = c - 1; 0 <= r; r--) f[u + r] = f[l + r];
                                    if (0 === e) {
                                        d = !0;
                                        break;
                                    }
                                }
                                if (f[s--] = m[a--], 1 == --i) {
                                    d = !0;
                                    break;
                                }
                                if (0 != (p = i - fn(f[o], m, 0, i, i - 1, g))) {
                                    for (i -= p, u = 1 + (s -= p), l = 1 + (a -= p), r = 0; r < p; r++) f[u + r] = m[l + r];
                                    if (i <= 1) {
                                        d = !0;
                                        break;
                                    }
                                }
                                if (f[s--] = f[o--], 0 == --e) {
                                    d = !0;
                                    break;
                                }
                            } while (h--, cn <= c || cn <= p);
                            if (d) break;
                            h < 0 && (h = 0), h += 2;
                        }
                        if ((y = h) < 1 && (y = 1), 1 === i) {
                            for (u = 1 + (s -= e), l = 1 + (o -= e), r = e - 1; 0 <= r; r--) f[u + r] = f[l + r];
                            f[s] = m[a];
                        } else {
                            if (0 === i) throw new Error;
                            for (l = s - (i - 1), r = 0; r < i; r++) f[l + r] = m[r];
                        }
                    }
                })(e, n, i, r);
            }
        }
        var mn = 1, vn = 4, _n = !1;
        function xn() {
            _n || (_n = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
        }
        function wn(t, e) {
            return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
        }
        Sn.prototype.traverse = function(t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
        }, Sn.prototype.getDisplayList = function(t, e) {
            e = e || !1;
            var n = this._displayList;
            return !t && n.length || this.updateDisplayList(e), n;
        }, Sn.prototype.updateDisplayList = function(t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; i < r; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, yn(n, wn);
        }, Sn.prototype._updateAndAddDisplayable = function(t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.update(), t.afterUpdate();
                var i = t.getClipPath();
                if (t.ignoreClip) e = null; else if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, o = t; r; ) r.parent = o, r.updateTransform(), e.push(r), r = (o = r).getClipPath();
                }
                if (t.childrenRef) {
                    for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
                        var l = a[s];
                        t.__dirty && (l.__dirty |= mn), this._updateAndAddDisplayable(l, e, n);
                    }
                    t.__dirty = 0;
                } else {
                    i = t;
                    e && e.length ? i.__clipPaths = e : i.__clipPaths && 0 < i.__clipPaths.length && (i.__clipPaths = []), 
                    isNaN(i.z) && (xn(), i.z = 0), isNaN(i.z2) && (xn(), i.z2 = 0), isNaN(i.zlevel) && (xn(), 
                    i.zlevel = 0), this._displayList[this._displayListLen++] = i;
                }
                i = t.getDecalElement && t.getDecalElement(), i = (i && this._updateAndAddDisplayable(i, e, n), 
                t.getTextGuideLine()), i = (i && this._updateAndAddDisplayable(i, e, n), t.getTextContent());
                i && this._updateAndAddDisplayable(i, e, n);
            }
        }, Sn.prototype.addRoot = function(t) {
            t.__zr && t.__zr.storage === this || this._roots.push(t);
        }, Sn.prototype.delRoot = function(t) {
            if (t instanceof Array) for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e]); else {
                var i = I(this._roots, t);
                0 <= i && this._roots.splice(i, 1);
            }
        }, Sn.prototype.delAllRoots = function() {
            this._roots = [], this._displayList = [], this._displayListLen = 0;
        }, Sn.prototype.getRoots = function() {
            return this._roots;
        }, Sn.prototype.dispose = function() {
            this._displayList = null, this._roots = null;
        };
        var bn = Sn;
        function Sn() {
            this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = wn;
        }
        var Mn = p.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
            return setTimeout(t, 16);
        }, Tn = {
            linear: function(t) {
                return t;
            },
            quadraticIn: function(t) {
                return t * t;
            },
            quadraticOut: function(t) {
                return t * (2 - t);
            },
            quadraticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
            },
            cubicIn: function(t) {
                return t * t * t;
            },
            cubicOut: function(t) {
                return --t * t * t + 1;
            },
            cubicInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
            },
            quarticIn: function(t) {
                return t * t * t * t;
            },
            quarticOut: function(t) {
                return 1 - --t * t * t * t;
            },
            quarticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
            },
            quinticIn: function(t) {
                return t * t * t * t * t;
            },
            quinticOut: function(t) {
                return --t * t * t * t * t + 1;
            },
            quinticInOut: function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
            },
            sinusoidalIn: function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            },
            sinusoidalOut: function(t) {
                return Math.sin(t * Math.PI / 2);
            },
            sinusoidalInOut: function(t) {
                return .5 * (1 - Math.cos(Math.PI * t));
            },
            exponentialIn: function(t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1);
            },
            exponentialOut: function(t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            },
            exponentialInOut: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
            },
            circularIn: function(t) {
                return 1 - Math.sqrt(1 - t * t);
            },
            circularOut: function(t) {
                return Math.sqrt(1 - --t * t);
            },
            circularInOut: function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            },
            elasticIn: function(t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), 
                -n * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / .4));
            },
            elasticOut: function(t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), 
                n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1);
            },
            elasticInOut: function(t) {
                var e, n = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (e = !n || n < 1 ? (n = 1, .1) : .4 * Math.asin(1 / n) / (2 * Math.PI), 
                (t *= 2) < 1 ? n * Math.pow(2, 10 * --t) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * --t) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1);
            },
            backIn: function(t) {
                return t * t * (2.70158 * t - 1.70158);
            },
            backOut: function(t) {
                return --t * t * (2.70158 * t + 1.70158) + 1;
            },
            backInOut: function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((1 + e) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + e) * t + e) + 2);
            },
            bounceIn: function(t) {
                return 1 - Tn.bounceOut(1 - t);
            },
            bounceOut: function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
            },
            bounceInOut: function(t) {
                return t < .5 ? .5 * Tn.bounceIn(2 * t) : .5 * Tn.bounceOut(2 * t - 1) + .5;
            }
        }, Cn = Math.pow, In = Math.sqrt, kn = 1e-8, Dn = In(3), An = 1 / 3, Ln = Gt(), Pn = Gt(), On = Gt();
        function Rn(t) {
            return -kn < t && t < kn;
        }
        function Nn(t) {
            return kn < t || t < -kn;
        }
        function En(t, e, n, i, r) {
            var o = 1 - r;
            return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n);
        }
        function zn(t, e, n, i, r) {
            var o = 1 - r;
            return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r);
        }
        function Bn(t, e, n, i, r, o) {
            i = i + 3 * (e - n) - t, n = 3 * (n - 2 * e + t), e = 3 * (e - t), t -= r, r = n * n - 3 * i * e;
            var a, s, l = n * e - 9 * i * t, u = (t = e * e - 3 * n * t, 0);
            return Rn(r) && Rn(l) ? Rn(n) ? o[0] = 0 : 0 <= (s = -e / n) && s <= 1 && (o[u++] = s) : Rn(e = l * l - 4 * r * t) ? (a = -(t = l / r) / 2, 
            0 <= (s = -n / i + t) && s <= 1 && (o[u++] = s), 0 <= a && a <= 1 && (o[u++] = a)) : 0 < e ? (e = r * n + 1.5 * i * (-l - (t = In(e))), 
            0 <= (s = (-n - ((t = (t = r * n + 1.5 * i * (-l + t)) < 0 ? -Cn(-t, An) : Cn(t, An)) + (e = e < 0 ? -Cn(-e, An) : Cn(e, An)))) / (3 * i)) && s <= 1 && (o[u++] = s)) : (t = (2 * r * n - 3 * i * l) / (2 * In(r * r * r)), 
            e = Math.acos(t) / 3, s = (-n - 2 * (l = In(r)) * (t = Math.cos(e))) / (3 * i), 
            a = (-n + l * (t + Dn * Math.sin(e))) / (3 * i), r = (-n + l * (t - Dn * Math.sin(e))) / (3 * i), 
            0 <= s && s <= 1 && (o[u++] = s), 0 <= a && a <= 1 && (o[u++] = a), 0 <= r && r <= 1 && (o[u++] = r)), 
            u;
        }
        function Fn(t, e, n, i, r) {
            var o, a = 6 * n - 12 * e + 6 * t;
            i = 9 * e + 3 * i - 3 * t - 9 * n, n = 3 * e - 3 * t, e = 0;
            return Rn(i) ? Nn(a) && 0 <= (o = -n / a) && o <= 1 && (r[e++] = o) : Rn(t = a * a - 4 * i * n) ? r[0] = -a / (2 * i) : 0 < t && (t = (-a - (n = In(t))) / (2 * i), 
            0 <= (o = (-a + n) / (2 * i)) && o <= 1 && (r[e++] = o), 0 <= t) && t <= 1 && (r[e++] = t), 
            e;
        }
        function Vn(t, e, n, i, r, o) {
            var a = (e - t) * r + t, s = (e = (n - e) * r + e, n = (i - n) * r + n, (e - a) * r + a);
            e = (n - e) * r + e, r = (e - s) * r + s;
            o[0] = t, o[1] = a, o[2] = s, o[3] = r, o[4] = r, o[5] = e, o[6] = n, o[7] = i;
        }
        function Hn(t, e, n, i, r, o, a, s, l, u, h) {
            var c, p, d, f, g = .005, y = 1 / 0;
            Ln[0] = l, Ln[1] = u;
            for (var m = 0; m < 1; m += .05) Pn[0] = En(t, n, r, a, m), Pn[1] = En(e, i, o, s, m), 
            (d = te(Ln, Pn)) < y && (c = m, y = d);
            y = 1 / 0;
            for (var v = 0; v < 32 && !(g < 1e-4); v++) p = c + g, Pn[0] = En(t, n, r, a, f = c - g), 
            Pn[1] = En(e, i, o, s, f), d = te(Pn, Ln), 0 <= f && d < y ? (c = f, y = d) : (On[0] = En(t, n, r, a, p), 
            On[1] = En(e, i, o, s, p), f = te(On, Ln), p <= 1 && f < y ? (c = p, y = f) : g *= .5);
            return h && (h[0] = En(t, n, r, a, c), h[1] = En(e, i, o, s, c)), In(y);
        }
        function Wn(t, e, n, i) {
            var r = 1 - i;
            return r * (r * t + 2 * i * e) + i * i * n;
        }
        function Gn(t, e, n, i) {
            return 2 * ((1 - i) * (e - t) + i * (n - e));
        }
        function Un(t, e, n) {
            n = t + n - 2 * e;
            return 0 == n ? .5 : (t - e) / n;
        }
        function Xn(t, e, n, i, r) {
            var o = (e - t) * i + t;
            e = (n - e) * i + e, i = (e - o) * i + o;
            r[0] = t, r[1] = o, r[2] = i, r[3] = i, r[4] = e, r[5] = n;
        }
        function Yn(t, e, n, i, r, o, a, s, l) {
            var u, h = .005, c = 1 / 0;
            Ln[0] = a, Ln[1] = s;
            for (var p = 0; p < 1; p += .05) Pn[0] = Wn(t, n, r, p), Pn[1] = Wn(e, i, o, p), 
            (y = te(Ln, Pn)) < c && (u = p, c = y);
            c = 1 / 0;
            for (var d = 0; d < 32 && !(h < 1e-4); d++) {
                var f = u - h, g = u + h, y = (Pn[0] = Wn(t, n, r, f), Pn[1] = Wn(e, i, o, f), te(Pn, Ln));
                0 <= f && y < c ? (u = f, c = y) : (On[0] = Wn(t, n, r, g), On[1] = Wn(e, i, o, g), 
                f = te(On, Ln), g <= 1 && f < c ? (u = g, c = f) : h *= .5);
            }
            return l && (l[0] = Wn(t, n, r, u), l[1] = Wn(e, i, o, u)), In(c);
        }
        var qn = /cubic-bezier\(([0-9,\.e ]+)\)/;
        function jn(t) {
            t = t && qn.exec(t);
            if (t) {
                t = t[1].split(",");
                var e, n = +It(t[0]), i = +It(t[1]), r = +It(t[2]), o = +It(t[3]);
                if (!isNaN(n + i + r + o)) return e = [], function(t) {
                    return t <= 0 ? 0 : 1 <= t ? 1 : Bn(0, n, r, 1, t, e) && En(0, i, o, 1, e[0]);
                };
            }
        }
        Kn.prototype.step = function(t, e) {
            if (this._inited || (this._startTime = t + this._delay, this._inited = !0), !this._paused) {
                var n = this._life, i = t - this._startTime - this._pausedTime, r = i / n, o = (r < 0 && (r = 0), 
                r = Math.min(r, 1), this.easingFunc);
                o = o ? o(r) : r;
                if (this.onframe(o), 1 === r) {
                    if (!this.loop) return !0;
                    this._startTime = t - i % n, this._pausedTime = 0, this.onrestart();
                }
                return !1;
            }
            this._pausedTime += e;
        }, Kn.prototype.pause = function() {
            this._paused = !0;
        }, Kn.prototype.resume = function() {
            this._paused = !1;
        }, Kn.prototype.setEasing = function(t) {
            this.easing = t, this.easingFunc = k(t) ? t : Tn[t] || jn(t);
        };
        var Zn = Kn;
        function Kn(t) {
            this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, 
            this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, 
            this.onframe = t.onframe || Vt, this.ondestroy = t.ondestroy || Vt, this.onrestart = t.onrestart || Vt, 
            t.easing && this.setEasing(t.easing);
        }
        function $n(t) {
            this.value = t;
        }
        Jn.prototype.insert = function(t) {
            t = new $n(t);
            return this.insertEntry(t), t;
        }, Jn.prototype.insertEntry = function(t) {
            this.head ? ((this.tail.next = t).prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, 
            this._len++;
        }, Jn.prototype.remove = function(t) {
            var e = t.prev, n = t.next;
            e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, 
            this._len--;
        }, Jn.prototype.len = function() {
            return this._len;
        }, Jn.prototype.clear = function() {
            this.head = this.tail = null, this._len = 0;
        };
        var Qn = Jn;
        function Jn() {
            this._len = 0;
        }
        ei.prototype.put = function(t, e) {
            var n, i, r = this._list, o = this._map, a = null;
            return null == o[t] && (i = r.len(), n = this._lastRemovedEntry, i >= this._maxSize && 0 < i && (i = r.head, 
            r.remove(i), delete o[i.key], a = i.value, this._lastRemovedEntry = i), n ? n.value = e : n = new $n(e), 
            n.key = t, r.insertEntry(n), o[t] = n), a;
        }, ei.prototype.get = function(t) {
            t = this._map[t];
            var e = this._list;
            if (null != t) return t !== e.tail && (e.remove(t), e.insertEntry(t)), t.value;
        }, ei.prototype.clear = function() {
            this._list.clear(), this._map = {};
        }, ei.prototype.len = function() {
            return this._list.len();
        };
        var ti = ei;
        function ei(t) {
            this._list = new Qn, this._maxSize = 10, this._map = {}, this._maxSize = t;
        }
        var ni = {
            transparent: [ 0, 0, 0, 0 ],
            aliceblue: [ 240, 248, 255, 1 ],
            antiquewhite: [ 250, 235, 215, 1 ],
            aqua: [ 0, 255, 255, 1 ],
            aquamarine: [ 127, 255, 212, 1 ],
            azure: [ 240, 255, 255, 1 ],
            beige: [ 245, 245, 220, 1 ],
            bisque: [ 255, 228, 196, 1 ],
            black: [ 0, 0, 0, 1 ],
            blanchedalmond: [ 255, 235, 205, 1 ],
            blue: [ 0, 0, 255, 1 ],
            blueviolet: [ 138, 43, 226, 1 ],
            brown: [ 165, 42, 42, 1 ],
            burlywood: [ 222, 184, 135, 1 ],
            cadetblue: [ 95, 158, 160, 1 ],
            chartreuse: [ 127, 255, 0, 1 ],
            chocolate: [ 210, 105, 30, 1 ],
            coral: [ 255, 127, 80, 1 ],
            cornflowerblue: [ 100, 149, 237, 1 ],
            cornsilk: [ 255, 248, 220, 1 ],
            crimson: [ 220, 20, 60, 1 ],
            cyan: [ 0, 255, 255, 1 ],
            darkblue: [ 0, 0, 139, 1 ],
            darkcyan: [ 0, 139, 139, 1 ],
            darkgoldenrod: [ 184, 134, 11, 1 ],
            darkgray: [ 169, 169, 169, 1 ],
            darkgreen: [ 0, 100, 0, 1 ],
            darkgrey: [ 169, 169, 169, 1 ],
            darkkhaki: [ 189, 183, 107, 1 ],
            darkmagenta: [ 139, 0, 139, 1 ],
            darkolivegreen: [ 85, 107, 47, 1 ],
            darkorange: [ 255, 140, 0, 1 ],
            darkorchid: [ 153, 50, 204, 1 ],
            darkred: [ 139, 0, 0, 1 ],
            darksalmon: [ 233, 150, 122, 1 ],
            darkseagreen: [ 143, 188, 143, 1 ],
            darkslateblue: [ 72, 61, 139, 1 ],
            darkslategray: [ 47, 79, 79, 1 ],
            darkslategrey: [ 47, 79, 79, 1 ],
            darkturquoise: [ 0, 206, 209, 1 ],
            darkviolet: [ 148, 0, 211, 1 ],
            deeppink: [ 255, 20, 147, 1 ],
            deepskyblue: [ 0, 191, 255, 1 ],
            dimgray: [ 105, 105, 105, 1 ],
            dimgrey: [ 105, 105, 105, 1 ],
            dodgerblue: [ 30, 144, 255, 1 ],
            firebrick: [ 178, 34, 34, 1 ],
            floralwhite: [ 255, 250, 240, 1 ],
            forestgreen: [ 34, 139, 34, 1 ],
            fuchsia: [ 255, 0, 255, 1 ],
            gainsboro: [ 220, 220, 220, 1 ],
            ghostwhite: [ 248, 248, 255, 1 ],
            gold: [ 255, 215, 0, 1 ],
            goldenrod: [ 218, 165, 32, 1 ],
            gray: [ 128, 128, 128, 1 ],
            green: [ 0, 128, 0, 1 ],
            greenyellow: [ 173, 255, 47, 1 ],
            grey: [ 128, 128, 128, 1 ],
            honeydew: [ 240, 255, 240, 1 ],
            hotpink: [ 255, 105, 180, 1 ],
            indianred: [ 205, 92, 92, 1 ],
            indigo: [ 75, 0, 130, 1 ],
            ivory: [ 255, 255, 240, 1 ],
            khaki: [ 240, 230, 140, 1 ],
            lavender: [ 230, 230, 250, 1 ],
            lavenderblush: [ 255, 240, 245, 1 ],
            lawngreen: [ 124, 252, 0, 1 ],
            lemonchiffon: [ 255, 250, 205, 1 ],
            lightblue: [ 173, 216, 230, 1 ],
            lightcoral: [ 240, 128, 128, 1 ],
            lightcyan: [ 224, 255, 255, 1 ],
            lightgoldenrodyellow: [ 250, 250, 210, 1 ],
            lightgray: [ 211, 211, 211, 1 ],
            lightgreen: [ 144, 238, 144, 1 ],
            lightgrey: [ 211, 211, 211, 1 ],
            lightpink: [ 255, 182, 193, 1 ],
            lightsalmon: [ 255, 160, 122, 1 ],
            lightseagreen: [ 32, 178, 170, 1 ],
            lightskyblue: [ 135, 206, 250, 1 ],
            lightslategray: [ 119, 136, 153, 1 ],
            lightslategrey: [ 119, 136, 153, 1 ],
            lightsteelblue: [ 176, 196, 222, 1 ],
            lightyellow: [ 255, 255, 224, 1 ],
            lime: [ 0, 255, 0, 1 ],
            limegreen: [ 50, 205, 50, 1 ],
            linen: [ 250, 240, 230, 1 ],
            magenta: [ 255, 0, 255, 1 ],
            maroon: [ 128, 0, 0, 1 ],
            mediumaquamarine: [ 102, 205, 170, 1 ],
            mediumblue: [ 0, 0, 205, 1 ],
            mediumorchid: [ 186, 85, 211, 1 ],
            mediumpurple: [ 147, 112, 219, 1 ],
            mediumseagreen: [ 60, 179, 113, 1 ],
            mediumslateblue: [ 123, 104, 238, 1 ],
            mediumspringgreen: [ 0, 250, 154, 1 ],
            mediumturquoise: [ 72, 209, 204, 1 ],
            mediumvioletred: [ 199, 21, 133, 1 ],
            midnightblue: [ 25, 25, 112, 1 ],
            mintcream: [ 245, 255, 250, 1 ],
            mistyrose: [ 255, 228, 225, 1 ],
            moccasin: [ 255, 228, 181, 1 ],
            navajowhite: [ 255, 222, 173, 1 ],
            navy: [ 0, 0, 128, 1 ],
            oldlace: [ 253, 245, 230, 1 ],
            olive: [ 128, 128, 0, 1 ],
            olivedrab: [ 107, 142, 35, 1 ],
            orange: [ 255, 165, 0, 1 ],
            orangered: [ 255, 69, 0, 1 ],
            orchid: [ 218, 112, 214, 1 ],
            palegoldenrod: [ 238, 232, 170, 1 ],
            palegreen: [ 152, 251, 152, 1 ],
            paleturquoise: [ 175, 238, 238, 1 ],
            palevioletred: [ 219, 112, 147, 1 ],
            papayawhip: [ 255, 239, 213, 1 ],
            peachpuff: [ 255, 218, 185, 1 ],
            peru: [ 205, 133, 63, 1 ],
            pink: [ 255, 192, 203, 1 ],
            plum: [ 221, 160, 221, 1 ],
            powderblue: [ 176, 224, 230, 1 ],
            purple: [ 128, 0, 128, 1 ],
            red: [ 255, 0, 0, 1 ],
            rosybrown: [ 188, 143, 143, 1 ],
            royalblue: [ 65, 105, 225, 1 ],
            saddlebrown: [ 139, 69, 19, 1 ],
            salmon: [ 250, 128, 114, 1 ],
            sandybrown: [ 244, 164, 96, 1 ],
            seagreen: [ 46, 139, 87, 1 ],
            seashell: [ 255, 245, 238, 1 ],
            sienna: [ 160, 82, 45, 1 ],
            silver: [ 192, 192, 192, 1 ],
            skyblue: [ 135, 206, 235, 1 ],
            slateblue: [ 106, 90, 205, 1 ],
            slategray: [ 112, 128, 144, 1 ],
            slategrey: [ 112, 128, 144, 1 ],
            snow: [ 255, 250, 250, 1 ],
            springgreen: [ 0, 255, 127, 1 ],
            steelblue: [ 70, 130, 180, 1 ],
            tan: [ 210, 180, 140, 1 ],
            teal: [ 0, 128, 128, 1 ],
            thistle: [ 216, 191, 216, 1 ],
            tomato: [ 255, 99, 71, 1 ],
            turquoise: [ 64, 224, 208, 1 ],
            violet: [ 238, 130, 238, 1 ],
            wheat: [ 245, 222, 179, 1 ],
            white: [ 255, 255, 255, 1 ],
            whitesmoke: [ 245, 245, 245, 1 ],
            yellow: [ 255, 255, 0, 1 ],
            yellowgreen: [ 154, 205, 50, 1 ]
        };
        function ii(t) {
            return (t = Math.round(t)) < 0 ? 0 : 255 < t ? 255 : t;
        }
        function ri(t) {
            return t < 0 ? 0 : 1 < t ? 1 : t;
        }
        function oi(t) {
            return t.length && "%" === t.charAt(t.length - 1) ? ii(parseFloat(t) / 100 * 255) : ii(parseInt(t, 10));
        }
        function ai(t) {
            return t.length && "%" === t.charAt(t.length - 1) ? ri(parseFloat(t) / 100) : ri(parseFloat(t));
        }
        function si(t, e, n) {
            return n < 0 ? n += 1 : 1 < n && --n, 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t;
        }
        function li(t, e, n) {
            return t + (e - t) * n;
        }
        function ui(t, e, n, i, r) {
            return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
        }
        function hi(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
        }
        var ci = new ti(20), pi = null;
        function di(t, e) {
            pi && hi(pi, e), pi = ci.put(t, pi || e.slice());
        }
        function fi(t, e) {
            if (t) {
                e = e || [];
                var n = ci.get(t);
                if (n) return hi(e, n);
                n = (t += "").replace(/ /g, "").toLowerCase();
                if (n in ni) return hi(e, ni[n]), di(t, e), e;
                var i = n.length;
                if ("#" === n.charAt(0)) return 4 === i || 5 === i ? 0 <= (r = parseInt(n.slice(1, 4), 16)) && r <= 4095 ? (ui(e, (3840 & r) >> 4 | (3840 & r) >> 8, 240 & r | (240 & r) >> 4, 15 & r | (15 & r) << 4, 5 === i ? parseInt(n.slice(4), 16) / 15 : 1), 
                di(t, e), e) : void ui(e, 0, 0, 0, 1) : 7 === i || 9 === i ? 0 <= (r = parseInt(n.slice(1, 7), 16)) && r <= 16777215 ? (ui(e, (16711680 & r) >> 16, (65280 & r) >> 8, 255 & r, 9 === i ? parseInt(n.slice(7), 16) / 255 : 1), 
                di(t, e), e) : void ui(e, 0, 0, 0, 1) : void 0;
                var r = n.indexOf("("), o = n.indexOf(")");
                if (-1 !== r && o + 1 === i) {
                    i = n.substr(0, r);
                    var a = n.substr(r + 1, o - (r + 1)).split(","), s = 1;
                    switch (i) {
                      case "rgba":
                        if (4 !== a.length) return 3 === a.length ? ui(e, +a[0], +a[1], +a[2], 1) : ui(e, 0, 0, 0, 1);
                        s = ai(a.pop());

                      case "rgb":
                        return 3 <= a.length ? (ui(e, oi(a[0]), oi(a[1]), oi(a[2]), 3 === a.length ? s : ai(a[3])), 
                        di(t, e), e) : void ui(e, 0, 0, 0, 1);

                      case "hsla":
                        return 4 !== a.length ? void ui(e, 0, 0, 0, 1) : (a[3] = ai(a[3]), gi(a, e), di(t, e), 
                        e);

                      case "hsl":
                        return 3 !== a.length ? void ui(e, 0, 0, 0, 1) : (gi(a, e), di(t, e), e);

                      default:
                        return;
                    }
                }
                ui(e, 0, 0, 0, 1);
            }
        }
        function gi(t, e) {
            var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = ai(t[1]), r = ai(t[2]);
            i = r <= .5 ? r * (i + 1) : r + i - r * i, r = 2 * r - i;
            return ui(e = e || [], ii(255 * si(r, i, n + 1 / 3)), ii(255 * si(r, i, n)), ii(255 * si(r, i, n - 1 / 3)), 1), 
            4 === t.length && (e[3] = t[3]), e;
        }
        function yi(t, e) {
            var n = fi(t);
            if (n) {
                for (var i = 0; i < 3; i++) n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, 
                255 < n[i] ? n[i] = 255 : n[i] < 0 && (n[i] = 0);
                return xi(n, 4 === n.length ? "rgba" : "rgb");
            }
        }
        function mi(t, e, n) {
            var i, r, o;
            if (e && e.length && 0 <= t && t <= 1) return n = n || [], t *= e.length - 1, i = Math.floor(t), 
            o = Math.ceil(t), r = e[i], e = e[o], n[0] = ii(li(r[0], e[0], o = t - i)), n[1] = ii(li(r[1], e[1], o)), 
            n[2] = ii(li(r[2], e[2], o)), n[3] = ri(li(r[3], e[3], o)), n;
        }
        var vi = mi;
        function _i(t, e, n) {
            var i, r, o, a;
            if (e && e.length && 0 <= t && t <= 1) return t *= e.length - 1, i = Math.floor(t), 
            r = Math.ceil(t), a = fi(e[i]), e = fi(e[r]), a = xi([ ii(li(a[0], e[0], o = t - i)), ii(li(a[1], e[1], o)), ii(li(a[2], e[2], o)), ri(li(a[3], e[3], o)) ], "rgba"), 
            n ? {
                color: a,
                leftIndex: i,
                rightIndex: r,
                value: t
            } : a;
        }
        var n = _i;
        function xi(t, e) {
            var n;
            if (t && t.length) return n = t[0] + "," + t[1] + "," + t[2], "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), 
            e + "(" + n + ")";
        }
        function wi(t, e) {
            t = fi(t);
            return t ? (.299 * t[0] + .587 * t[1] + .114 * t[2]) * t[3] / 255 + (1 - t[3]) * e : 0;
        }
        var bi = new ti(100);
        function Si(t) {
            var e;
            return H(t) ? ((e = bi.get(t)) || (e = yi(t, -.1), bi.put(t, e)), e) : vt(t) ? ((e = O({}, t)).colorStops = F(t.colorStops, (function(t) {
                return {
                    offset: t.offset,
                    color: yi(t.color, -.1)
                };
            })), e) : t;
        }
        vi = Object.freeze({
            __proto__: null,
            fastLerp: mi,
            fastMapToColor: vi,
            lerp: _i,
            lift: yi,
            liftColor: Si,
            lum: wi,
            mapToColor: n,
            modifyAlpha: function(t, e) {
                if ((t = fi(t)) && null != e) return t[3] = ri(e), xi(t, "rgba");
            },
            modifyHSL: function(t, e, n, i) {
                var r = fi(t);
                if (t) return r = function(t) {
                    var e, n, i, r, o, a, s, l, u, h;
                    if (t) return h = t[0] / 255, n = t[1] / 255, i = t[2] / 255, s = Math.min(h, n, i), 
                    o = ((r = Math.max(h, n, i)) + s) / 2, 0 == (u = r - s) ? a = e = 0 : (a = o < .5 ? u / (r + s) : u / (2 - r - s), 
                    s = ((r - h) / 6 + u / 2) / u, l = ((r - n) / 6 + u / 2) / u, u = ((r - i) / 6 + u / 2) / u, 
                    h === r ? e = u - l : n === r ? e = 1 / 3 + s - u : i === r && (e = 2 / 3 + l - s), 
                    e < 0 && (e += 1), 1 < e && --e), h = [ 360 * e, a, o ], null != t[3] && h.push(t[3]), 
                    h;
                }(r), null != e && (r[0] = (t = e, (t = Math.round(t)) < 0 ? 0 : 360 < t ? 360 : t)), 
                null != n && (r[1] = ai(n)), null != i && (r[2] = ai(i)), xi(gi(r), "rgba");
            },
            parse: fi,
            random: function() {
                return xi([ Math.round(255 * Math.random()), Math.round(255 * Math.random()), Math.round(255 * Math.random()) ], "rgb");
            },
            stringify: xi,
            toHex: function(t) {
                if (t = fi(t)) return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
            }
        });
        var Mi = Math.round;
        function Ti(t) {
            var e, n;
            return t && "transparent" !== t ? "string" == typeof t && -1 < t.indexOf("rgba") && (n = fi(t)) && (t = "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")", 
            e = n[3]) : t = "none", {
                color: t,
                opacity: null == e ? 1 : e
            };
        }
        function Ci(t) {
            return t < 1e-4 && -1e-4 < t;
        }
        function Ii(t) {
            return Mi(1e3 * t) / 1e3;
        }
        function ki(t) {
            return Mi(1e4 * t) / 1e4;
        }
        var Di = {
            left: "start",
            right: "end",
            center: "middle",
            middle: "middle"
        };
        function Ai(t) {
            return t && !!t.image;
        }
        function Li(t) {
            return Ai(t) || t && !!t.svgElement;
        }
        function Pi(t) {
            return "linear" === t.type;
        }
        function Oi(t) {
            return "radial" === t.type;
        }
        function Ri(t) {
            return t && ("linear" === t.type || "radial" === t.type);
        }
        function Ni(t) {
            return "url(#" + t + ")";
        }
        function Ei(t) {
            t = t.getGlobalScale(), t = Math.max(t[0], t[1]);
            return Math.max(Math.ceil(Math.log(t) / Math.log(10)), 1);
        }
        function zi(t) {
            var e = t.x || 0, n = t.y || 0, i = (t.rotation || 0) * Ht, r = N(t.scaleX, 1), o = N(t.scaleY, 1), a = t.skewX || 0, s = (t = t.skewY || 0, 
            []);
            return (e || n) && s.push("translate(" + e + "px," + n + "px)"), i && s.push("rotate(" + i + ")"), 
            1 === r && 1 === o || s.push("scale(" + r + "," + o + ")"), (a || t) && s.push("skew(" + Mi(a * Ht) + "deg, " + Mi(t * Ht) + "deg)"), 
            s.join(" ");
        }
        var Bi = p.hasGlobalWindow && k(window.btoa) ? function(t) {
            return window.btoa(unescape(encodeURIComponent(t)));
        } : "undefined" != typeof Buffer ? function(t) {
            return Buffer.from(t).toString("base64");
        } : function(t) {
            return null;
        }, Fi = Array.prototype.slice;
        function Vi(t, e, n) {
            return (e - t) * n + t;
        }
        function Hi(t, e, n, i) {
            for (var r = e.length, o = 0; o < r; o++) t[o] = Vi(e[o], n[o], i);
            return t;
        }
        function Wi(t, e, n, i) {
            for (var r = e.length, o = 0; o < r; o++) t[o] = e[o] + n[o] * i;
            return t;
        }
        function Gi(t, e, n, i) {
            for (var r = e.length, o = r && e[0].length, a = 0; a < r; a++) {
                t[a] || (t[a] = []);
                for (var s = 0; s < o; s++) t[a][s] = e[a][s] + n[a][s] * i;
            }
            return t;
        }
        function Ui(t) {
            if (ut(t)) {
                var e = t.length;
                if (ut(t[0])) {
                    for (var n = [], i = 0; i < e; i++) n.push(Fi.call(t[i]));
                    return n;
                }
                return Fi.call(t);
            }
            return t;
        }
        function Xi(t) {
            return t[0] = Math.floor(t[0]) || 0, t[1] = Math.floor(t[1]) || 0, t[2] = Math.floor(t[2]) || 0, 
            t[3] = null == t[3] ? 1 : t[3], "rgba(" + t.join(",") + ")";
        }
        function Yi(t) {
            return 4 === t || 5 === t;
        }
        function qi(t) {
            return 1 === t || 2 === t;
        }
        var ji = [ 0, 0, 0, 0 ], Zi = (Qi.prototype.isFinished = function() {
            return this._finished;
        }, Qi.prototype.setFinished = function() {
            this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
        }, Qi.prototype.needsAnimate = function() {
            return 1 <= this.keyframes.length;
        }, Qi.prototype.getAdditiveTrack = function() {
            return this._additiveTrack;
        }, Qi.prototype.addKeyframe = function(t, e, n) {
            this._needsSort = !0;
            var i, r = this.keyframes, o = r.length, a = !1, s = 6, l = e, u = (ut(e) ? (1 == (s = i = ut((i = e) && i[0]) ? 2 : 1) && !W(e[0]) || 2 == i && !W(e[0][0])) && (a = !0) : W(e) && !wt(e) ? s = 0 : H(e) ? isNaN(+e) ? (i = fi(e)) && (l = i, 
            s = 3) : s = 0 : vt(e) && ((u = O({}, l)).colorStops = F(e.colorStops, (function(t) {
                return {
                    offset: t.offset,
                    color: fi(t.color)
                };
            })), Pi(e) ? s = 4 : Oi(e) && (s = 5), l = u), 0 === o ? this.valType = s : s === this.valType && 6 !== s || (a = !0), 
            this.discrete = this.discrete || a, {
                time: t,
                value: l,
                rawValue: e,
                percent: 0
            });
            return n && (u.easing = n, u.easingFunc = k(n) ? n : Tn[n] || jn(n)), r.push(u), 
            u;
        }, Qi.prototype.prepare = function(t, e) {
            var n = this.keyframes;
            this._needsSort && n.sort((function(t, e) {
                return t.time - e.time;
            }));
            for (var i = this.valType, r = n.length, o = n[r - 1], a = this.discrete, s = qi(i), l = Yi(i), u = 0; u < r; u++) {
                var h = n[u], c = h.value, p = o.value;
                if (h.percent = h.time / t, !a) if (s && u !== r - 1) {
                    h = void 0;
                    d = void 0;
                    f = void 0;
                    g = void 0;
                    y = void 0;
                    m = void 0;
                    v = void 0;
                    _ = void 0;
                    x = void 0;
                    h = c;
                    var d = p;
                    var f = i;
                    var g = h, y = d;
                    if (g.push && y.push) {
                        h = g.length;
                        var m = y.length;
                        if (h !== m) if (m < h) g.length = m; else for (var v = h; v < m; v++) g.push(1 === f ? y[v] : Fi.call(y[v]));
                        var _ = g[0] && g[0].length;
                        for (v = 0; v < g.length; v++) if (1 === f) isNaN(g[v]) && (g[v] = y[v]); else for (var x = 0; x < _; x++) isNaN(g[v][x]) && (g[v][x] = y[v][x]);
                    }
                } else if (l) {
                    d = void 0;
                    h = void 0;
                    w = void 0;
                    b = void 0;
                    S = void 0;
                    M = void 0;
                    T = void 0;
                    d = c.colorStops;
                    h = p.colorStops;
                    for (var w = d.length, b = h.length, S = b < w ? h : d, M = (h = Math.min(w, b), 
                    S[h - 1] || {
                        color: [ 0, 0, 0, 0 ],
                        offset: 0
                    }), T = h; T < Math.max(w, b); T++) S.push({
                        offset: M.offset,
                        color: M.color.slice()
                    });
                }
            }
            if (!a && 5 !== i && e && this.needsAnimate() && e.needsAnimate() && i === e.valType && !e._finished) {
                this._additiveTrack = e;
                var C = n[0].value;
                for (u = 0; u < r; u++) 0 === i ? n[u].additiveValue = n[u].value - C : 3 === i ? n[u].additiveValue = Wi([], n[u].value, C, -1) : qi(i) && (n[u].additiveValue = (1 === i ? Wi : Gi)([], n[u].value, C, -1));
            }
        }, Qi.prototype.step = function(t, e) {
            if (!this._finished) {
                this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                var n, i, r, o, a, s = null != this._additiveTrack, l = s ? "additiveValue" : "value", u = this.valType, h = this.keyframes, c = h.length, p = this.propName, d = 3 === u, f = this._lastFr, g = Math.min;
                if (1 === c) i = r = h[0]; else {
                    if (e < 0) n = 0; else if (e < this._lastFrP) {
                        for (n = g(f + 1, c - 1); 0 <= n && !(h[n].percent <= e); n--) ;
                        n = g(n, c - 2);
                    } else {
                        for (n = f; n < c && !(h[n].percent > e); n++) ;
                        n = g(n - 1, c - 2);
                    }
                    r = h[n + 1], i = h[n];
                }
                i && r && (this._lastFr = n, this._lastFrP = e, f = r.percent - i.percent, o = 0 == f ? 1 : g((e - i.percent) / f, 1), 
                r.easingFunc && (o = r.easingFunc(o)), g = s ? this._additiveValue : d ? ji : t[p], 
                (qi(u) || d) && (g = g || (this._additiveValue = [])), this.discrete ? t[p] = (o < 1 ? i : r).rawValue : qi(u) ? (1 === u ? Hi : function(t, e, n, i) {
                    for (var r = e.length, o = r && e[0].length, a = 0; a < r; a++) {
                        t[a] || (t[a] = []);
                        for (var s = 0; s < o; s++) t[a][s] = Vi(e[a][s], n[a][s], i);
                    }
                })(g, i[l], r[l], o) : Yi(u) ? (f = i[l], a = r[l], t[p] = {
                    type: (u = 4 === u) ? "linear" : "radial",
                    x: Vi(f.x, a.x, o),
                    y: Vi(f.y, a.y, o),
                    colorStops: F(f.colorStops, (function(t, e) {
                        e = a.colorStops[e];
                        return {
                            offset: Vi(t.offset, e.offset, o),
                            color: Xi(Hi([], t.color, e.color, o))
                        };
                    })),
                    global: a.global
                }, u ? (t[p].x2 = Vi(f.x2, a.x2, o), t[p].y2 = Vi(f.y2, a.y2, o)) : t[p].r = Vi(f.r, a.r, o)) : d ? (Hi(g, i[l], r[l], o), 
                s || (t[p] = Xi(g))) : (u = Vi(i[l], r[l], o), s ? this._additiveValue = u : t[p] = u), 
                s) && this._addToTarget(t);
            }
        }, Qi.prototype._addToTarget = function(t) {
            var e = this.valType, n = this.propName, i = this._additiveValue;
            0 === e ? t[n] = t[n] + i : 3 === e ? (fi(t[n], ji), Wi(ji, ji, i, 1), t[n] = Xi(ji)) : 1 === e ? Wi(t[n], t[n], i, 1) : 2 === e && Gi(t[n], t[n], i, 1);
        }, Qi), Ki = ($i.prototype.getMaxTime = function() {
            return this._maxTime;
        }, $i.prototype.getDelay = function() {
            return this._delay;
        }, $i.prototype.getLoop = function() {
            return this._loop;
        }, $i.prototype.getTarget = function() {
            return this._target;
        }, $i.prototype.changeTarget = function(t) {
            this._target = t;
        }, $i.prototype.when = function(t, e, n) {
            return this.whenWithKeys(t, e, R(e), n);
        }, $i.prototype.whenWithKeys = function(t, e, n, i) {
            for (var r = this._tracks, o = 0; o < n.length; o++) {
                var a = n[o];
                if (!(l = r[a])) {
                    var s, l = r[a] = new Zi(a), u = void 0, h = this._getAdditiveTrack(a);
                    if (h ? (u = (s = (s = h.keyframes)[s.length - 1]) && s.value, 3 === h.valType && (u = u && Xi(u))) : u = this._target[a], 
                    null == u) continue;
                    0 < t && l.addKeyframe(0, Ui(u), i), this._trackKeys.push(a);
                }
                l.addKeyframe(t, Ui(e[a]), i);
            }
            return this._maxTime = Math.max(this._maxTime, t), this;
        }, $i.prototype.pause = function() {
            this._clip.pause(), this._paused = !0;
        }, $i.prototype.resume = function() {
            this._clip.resume(), this._paused = !1;
        }, $i.prototype.isPaused = function() {
            return !!this._paused;
        }, $i.prototype.duration = function(t) {
            return this._maxTime = t, this._force = !0, this;
        }, $i.prototype._doneCallback = function() {
            this._setTracksFinished(), this._clip = null;
            var t = this._doneCbs;
            if (t) for (var e = t.length, n = 0; n < e; n++) t[n].call(this);
        }, $i.prototype._abortedCallback = function() {
            this._setTracksFinished();
            var t = this.animation, e = this._abortedCbs;
            if (t && t.removeClip(this._clip), this._clip = null, e) for (var n = 0; n < e.length; n++) e[n].call(this);
        }, $i.prototype._setTracksFinished = function() {
            for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++) t[e[n]].setFinished();
        }, $i.prototype._getAdditiveTrack = function(t) {
            var e, n = this._additiveAnimators;
            if (n) for (var i = 0; i < n.length; i++) {
                var r = n[i].getTrack(t);
                r && (e = r);
            }
            return e;
        }, $i.prototype.start = function(t) {
            if (!(0 < this._started)) {
                this._started = 1;
                for (var e, o = this, a = [], n = this._maxTime || 0, i = 0; i < this._trackKeys.length; i++) {
                    var r = this._trackKeys[i], s = this._tracks[r], l = (r = this._getAdditiveTrack(r), 
                    s.keyframes), u = l.length;
                    s.prepare(n, r), s.needsAnimate() && (!this._allowDiscrete && s.discrete ? ((r = l[u - 1]) && (o._target[s.propName] = r.rawValue), 
                    s.setFinished()) : a.push(s));
                }
                return a.length || this._force ? (e = new Zn({
                    life: n,
                    loop: this._loop,
                    delay: this._delay || 0,
                    onframe: function(t) {
                        o._started = 2;
                        var e = o._additiveAnimators;
                        if (e) {
                            for (var n = !1, i = 0; i < e.length; i++) if (e[i]._clip) {
                                n = !0;
                                break;
                            }
                            n || (o._additiveAnimators = null);
                        }
                        for (i = 0; i < a.length; i++) a[i].step(o._target, t);
                        var r = o._onframeCbs;
                        if (r) for (i = 0; i < r.length; i++) r[i](o._target, t);
                    },
                    ondestroy: function() {
                        o._doneCallback();
                    }
                }), this._clip = e, this.animation && this.animation.addClip(e), t && e.setEasing(t)) : this._doneCallback(), 
                this;
            }
        }, $i.prototype.stop = function(t) {
            var e;
            this._clip && (e = this._clip, t && e.onframe(1), this._abortedCallback());
        }, $i.prototype.delay = function(t) {
            return this._delay = t, this;
        }, $i.prototype.during = function(t) {
            return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), 
            this;
        }, $i.prototype.done = function(t) {
            return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
        }, $i.prototype.aborted = function(t) {
            return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), 
            this;
        }, $i.prototype.getClip = function() {
            return this._clip;
        }, $i.prototype.getTrack = function(t) {
            return this._tracks[t];
        }, $i.prototype.getTracks = function() {
            var e = this;
            return F(this._trackKeys, (function(t) {
                return e._tracks[t];
            }));
        }, $i.prototype.stopTracks = function(t, e) {
            if (!t.length || !this._clip) return !0;
            for (var n = this._tracks, i = this._trackKeys, r = 0; r < t.length; r++) {
                var o = n[t[r]];
                o && !o.isFinished() && (e ? o.step(this._target, 1) : 1 === this._started && o.step(this._target, 0), 
                o.setFinished());
            }
            var a = !0;
            for (r = 0; r < i.length; r++) if (!n[i[r]].isFinished()) {
                a = !1;
                break;
            }
            return a && this._abortedCallback(), a;
        }, $i.prototype.saveTo = function(t, e, n) {
            if (t) {
                e = e || this._trackKeys;
                for (var i = 0; i < e.length; i++) {
                    var r = e[i], o = this._tracks[r];
                    o && !o.isFinished() && (o = (o = o.keyframes)[n ? 0 : o.length - 1]) && (t[r] = Ui(o.rawValue));
                }
            }
        }, $i.prototype.__changeFinalValue = function(t, e) {
            e = e || R(t);
            for (var n = 0; n < e.length; n++) {
                var i, r = e[n], o = this._tracks[r];
                o && 1 < (i = o.keyframes).length && (i = i.pop(), o.addKeyframe(i.time, t[r]), 
                o.prepare(this._maxTime, o.getAdditiveTrack()));
            }
        }, $i);
        function $i(t, e, n, i) {
            this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, 
            this._target = t, (this._loop = e) && i ? ot("Can' use additive animation on looped animation.") : (this._additiveAnimators = i, 
            this._allowDiscrete = n);
        }
        function Qi(t) {
            this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, 
            this._lastFr = 0, this._lastFrP = 0, this.propName = t;
        }
        function Ji() {
            return (new Date).getTime();
        }
        u(nr, tr = ue), nr.prototype.addClip = function(t) {
            t.animation && this.removeClip(t), this._head ? ((this._tail.next = t).prev = this._tail, 
            t.next = null, this._tail = t) : this._head = this._tail = t, t.animation = this;
        }, nr.prototype.addAnimator = function(t) {
            t.animation = this;
            t = t.getClip();
            t && this.addClip(t);
        }, nr.prototype.removeClip = function(t) {
            var e, n;
            t.animation && (e = t.prev, n = t.next, e ? e.next = n : this._head = n, n ? n.prev = e : this._tail = e, 
            t.next = t.prev = t.animation = null);
        }, nr.prototype.removeAnimator = function(t) {
            var e = t.getClip();
            e && this.removeClip(e), t.animation = null;
        }, nr.prototype.update = function(t) {
            for (var e = Ji() - this._pausedTime, n = e - this._time, i = this._head; i; ) {
                var r = i.next;
                i = (i.step(e, n) && (i.ondestroy(), this.removeClip(i)), r);
            }
            this._time = e, t || (this.trigger("frame", n), this.stage.update && this.stage.update());
        }, nr.prototype._startLoop = function() {
            var e = this;
            this._running = !0, Mn((function t() {
                e._running && (Mn(t), !e._paused) && e.update();
            }));
        }, nr.prototype.start = function() {
            this._running || (this._time = Ji(), this._pausedTime = 0, this._startLoop());
        }, nr.prototype.stop = function() {
            this._running = !1;
        }, nr.prototype.pause = function() {
            this._paused || (this._pauseStart = Ji(), this._paused = !0);
        }, nr.prototype.resume = function() {
            this._paused && (this._pausedTime += Ji() - this._pauseStart, this._paused = !1);
        }, nr.prototype.clear = function() {
            for (var t = this._head; t; ) {
                var e = t.next;
                t.prev = t.next = t.animation = null, t = e;
            }
            this._head = this._tail = null;
        }, nr.prototype.isFinished = function() {
            return null == this._head;
        }, nr.prototype.animate = function(t, e) {
            e = e || {}, this.start();
            t = new Ki(t, e.loop);
            return this.addAnimator(t), t;
        };
        var tr, er = nr;
        function nr(t) {
            var e = tr.call(this) || this;
            return e._running = !1, e._time = 0, e._pausedTime = 0, e._pauseStart = 0, e._paused = !1, 
            e.stage = (t = t || {}).stage || {}, e;
        }
        var ir, rr = p.domSupported, or = (ir = {
            pointerdown: 1,
            pointerup: 1,
            pointermove: 1,
            pointerout: 1
        }, {
            mouse: n = [ "click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ],
            touch: [ "touchstart", "touchend", "touchmove" ],
            pointer: F(n, (function(t) {
                var e = t.replace("mouse", "pointer");
                return ir.hasOwnProperty(e) ? e : t;
            }))
        }), ar = [ "mousemove", "mouseup" ], sr = [ "pointermove", "pointerup" ], lr = !1;
        function ur(t) {
            t = t.pointerType;
            return "pen" === t || "touch" === t;
        }
        function hr(t) {
            t && (t.zrByTouch = !0);
        }
        function cr(t, e) {
            for (var n = e, i = !1; n && 9 !== n.nodeType && !(i = n.domBelongToZr || n !== e && n === t.painterRoot); ) n = n.parentNode;
            return i;
        }
        var pr = function(t, e) {
            this.stopPropagation = Vt, this.stopImmediatePropagation = Vt, this.preventDefault = Vt, 
            this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, 
            this.clientX = e.clientX, this.clientY = e.clientY;
        }, dr = {
            mousedown: function(t) {
                t = Ce(this.dom, t), this.__mayPointerCapture = [ t.zrX, t.zrY ], this.trigger("mousedown", t);
            },
            mousemove: function(t) {
                t = Ce(this.dom, t);
                var e = this.__mayPointerCapture;
                !e || t.zrX === e[0] && t.zrY === e[1] || this.__togglePointerCapture(!0), this.trigger("mousemove", t);
            },
            mouseup: function(t) {
                t = Ce(this.dom, t), this.__togglePointerCapture(!1), this.trigger("mouseup", t);
            },
            mouseout: function(t) {
                cr(this, (t = Ce(this.dom, t)).toElement || t.relatedTarget) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"), 
                this.trigger("mouseout", t));
            },
            wheel: function(t) {
                lr = !0, t = Ce(this.dom, t), this.trigger("mousewheel", t);
            },
            mousewheel: function(t) {
                lr || (t = Ce(this.dom, t), this.trigger("mousewheel", t));
            },
            touchstart: function(t) {
                hr(t = Ce(this.dom, t)), this.__lastTouchMoment = new Date, this.handler.processGesture(t, "start"), 
                dr.mousemove.call(this, t), dr.mousedown.call(this, t);
            },
            touchmove: function(t) {
                hr(t = Ce(this.dom, t)), this.handler.processGesture(t, "change"), dr.mousemove.call(this, t);
            },
            touchend: function(t) {
                hr(t = Ce(this.dom, t)), this.handler.processGesture(t, "end"), dr.mouseup.call(this, t), 
                +new Date - +this.__lastTouchMoment < 300 && dr.click.call(this, t);
            },
            pointerdown: function(t) {
                dr.mousedown.call(this, t);
            },
            pointermove: function(t) {
                ur(t) || dr.mousemove.call(this, t);
            },
            pointerup: function(t) {
                dr.mouseup.call(this, t);
            },
            pointerout: function(t) {
                ur(t) || dr.mouseout.call(this, t);
            }
        }, fr = (E([ "click", "dblclick", "contextmenu" ], (function(e) {
            dr[e] = function(t) {
                t = Ce(this.dom, t), this.trigger(e, t);
            };
        })), {
            pointermove: function(t) {
                ur(t) || fr.mousemove.call(this, t);
            },
            pointerup: function(t) {
                fr.mouseup.call(this, t);
            },
            mousemove: function(t) {
                this.trigger("mousemove", t);
            },
            mouseup: function(t) {
                var e = this.__pointerCapturing;
                this.__togglePointerCapture(!1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", 
                this.trigger("mouseout", t));
            }
        });
        function gr(i, r) {
            var o = r.domHandlers;
            p.pointerEventsSupported ? E(or.pointer, (function(e) {
                mr(r, e, (function(t) {
                    o[e].call(i, t);
                }));
            })) : (p.touchEventsSupported && E(or.touch, (function(n) {
                mr(r, n, (function(t) {
                    var e;
                    o[n].call(i, t), (e = r).touching = !0, null != e.touchTimer && (clearTimeout(e.touchTimer), 
                    e.touchTimer = null), e.touchTimer = setTimeout((function() {
                        e.touching = !1, e.touchTimer = null;
                    }), 700);
                }));
            })), E(or.mouse, (function(e) {
                mr(r, e, (function(t) {
                    t = Te(t), r.touching || o[e].call(i, t);
                }));
            })));
        }
        function yr(i, r) {
            function t(n) {
                mr(r, n, (function(t) {
                    var e;
                    t = Te(t), cr(i, t.target) || (e = t, t = Ce(i.dom, new pr(i, e), !0), r.domHandlers[n].call(i, t));
                }), {
                    capture: !0
                });
            }
            p.pointerEventsSupported ? E(sr, t) : p.touchEventsSupported || E(ar, t);
        }
        function mr(t, e, n, i) {
            t.mounted[e] = n, t.listenerOpts[e] = i, t.domTarget.addEventListener(e, n, i);
        }
        function vr(t) {
            var e, n, i, r, o, a = t.mounted;
            for (e in a) a.hasOwnProperty(e) && (n = t.domTarget, i = e, r = a[e], o = t.listenerOpts[e], 
            n.removeEventListener(i, r, o));
            t.mounted = {};
        }
        function _r(t, e) {
            this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, 
            this.domHandlers = e;
        }
        u(br, xr = ue), br.prototype.dispose = function() {
            vr(this._localHandlerScope), rr && vr(this._globalHandlerScope);
        }, br.prototype.setCursor = function(t) {
            this.dom.style && (this.dom.style.cursor = t || "default");
        }, br.prototype.__togglePointerCapture = function(t) {
            var e;
            this.__mayPointerCapture = null, rr && +this.__pointerCapturing ^ +t && (this.__pointerCapturing = t, 
            e = this._globalHandlerScope, t ? yr(this, e) : vr(e));
        };
        var xr, wr = br;
        function br(t, e) {
            var n = xr.call(this) || this;
            return n.__pointerCapturing = !1, n.dom = t, n.painterRoot = e, n._localHandlerScope = new _r(t, dr), 
            rr && (n._globalHandlerScope = new _r(document, fr)), gr(n, n._localHandlerScope), 
            n;
        }
        n = 1;
        var Sr = n = p.hasGlobalWindow ? Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1) : n, Mr = "#333", Tr = "#ccc", Cr = Oe;
        function Ir(t) {
            return 5e-5 < t || t < -5e-5;
        }
        var kr = [], Dr = [], Ar = Pe(), Lr = Math.abs, Pr = (Or.prototype.getLocalTransform = function(t) {
            return Or.getLocalTransform(this, t);
        }, Or.prototype.setPosition = function(t) {
            this.x = t[0], this.y = t[1];
        }, Or.prototype.setScale = function(t) {
            this.scaleX = t[0], this.scaleY = t[1];
        }, Or.prototype.setSkew = function(t) {
            this.skewX = t[0], this.skewY = t[1];
        }, Or.prototype.setOrigin = function(t) {
            this.originX = t[0], this.originY = t[1];
        }, Or.prototype.needLocalTransform = function() {
            return Ir(this.rotation) || Ir(this.x) || Ir(this.y) || Ir(this.scaleX - 1) || Ir(this.scaleY - 1) || Ir(this.skewX) || Ir(this.skewY);
        }, Or.prototype.updateTransform = function() {
            var t = this.parent && this.parent.transform, e = this.needLocalTransform(), n = this.transform;
            e || t ? (n = n || Pe(), e ? this.getLocalTransform(n) : Cr(n), t && (e ? Ne(n, t, n) : Re(n, t)), 
            this.transform = n, this._resolveGlobalScaleRatio(n)) : n && (Cr(n), this.invTransform = null);
        }, Or.prototype._resolveGlobalScaleRatio = function(t) {
            var e, n, i = this.globalScaleRatio;
            null != i && 1 !== i && (this.getGlobalScale(kr), n = ((kr[1] - (n = kr[1] < 0 ? -1 : 1)) * i + n) / kr[1] || 0, 
            t[0] *= i = ((kr[0] - (e = kr[0] < 0 ? -1 : 1)) * i + e) / kr[0] || 0, t[1] *= i, 
            t[2] *= n, t[3] *= n), this.invTransform = this.invTransform || Pe(), Fe(this.invTransform, t);
        }, Or.prototype.getComputedTransform = function() {
            for (var t = this, e = []; t; ) e.push(t), t = t.parent;
            for (;t = e.pop(); ) t.updateTransform();
            return this.transform;
        }, Or.prototype.setLocalTransform = function(t) {
            var e, n, i, r;
            t && (r = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], e = Math.atan2(t[1], t[0]), 
            n = Math.PI / 2 + e - Math.atan2(t[3], t[2]), i = Math.sqrt(i) * Math.cos(n), r = Math.sqrt(r), 
            this.skewX = n, this.skewY = 0, this.rotation = -e, this.x = +t[4], this.y = +t[5], 
            this.scaleX = r, this.scaleY = i, this.originX = 0, this.originY = 0);
        }, Or.prototype.decomposeTransform = function() {
            var t, e, n;
            this.transform && (e = this.parent, t = this.transform, e && e.transform && (e.invTransform = e.invTransform || Pe(), 
            Ne(Dr, e.invTransform, t), t = Dr), e = this.originX, n = this.originY, (e || n) && (Ar[4] = e, 
            Ar[5] = n, Ne(Dr, t, Ar), Dr[4] -= e, Dr[5] -= n, t = Dr), this.setLocalTransform(t));
        }, Or.prototype.getGlobalScale = function(t) {
            var e = this.transform;
            return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), 
            e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1])) : (t[0] = 1, t[1] = 1), 
            t;
        }, Or.prototype.transformCoordToLocal = function(t, e) {
            t = [ t, e ], e = this.invTransform;
            return e && ne(t, t, e), t;
        }, Or.prototype.transformCoordToGlobal = function(t, e) {
            t = [ t, e ], e = this.transform;
            return e && ne(t, t, e), t;
        }, Or.prototype.getLineScale = function() {
            var t = this.transform;
            return t && 1e-10 < Lr(t[0] - 1) && 1e-10 < Lr(t[3] - 1) ? Math.sqrt(Lr(t[0] * t[3] - t[2] * t[1])) : 1;
        }, Or.prototype.copyTransform = function(t) {
            Nr(this, t);
        }, Or.getLocalTransform = function(t, e) {
            e = e || [];
            var n = t.originX || 0, i = t.originY || 0, r = t.scaleX, o = t.scaleY, a = t.anchorX, s = t.anchorY, l = t.rotation || 0, u = t.x, h = t.y, c = t.skewX ? Math.tan(t.skewX) : 0;
            t = t.skewY ? Math.tan(-t.skewY) : 0;
            return n || i || a || s ? (e[4] = -(a = n + a) * r - c * (s = i + s) * o, e[5] = -s * o - t * a * r) : e[4] = e[5] = 0, 
            e[0] = r, e[3] = o, e[1] = t * r, e[2] = c * o, l && ze(e, e, l), e[4] += n + u, 
            e[5] += i + h, e;
        }, Or.initDefaultProps = ((n = Or.prototype).scaleX = n.scaleY = n.globalScaleRatio = 1, 
        void (n.x = n.y = n.originX = n.originY = n.skewX = n.skewY = n.rotation = n.anchorX = n.anchorY = 0)), 
        Or);
        function Or() {}
        var Rr = [ "x", "y", "originX", "originY", "anchorX", "anchorY", "rotation", "scaleX", "scaleY", "skewX", "skewY" ];
        function Nr(t, e) {
            for (var n = 0; n < Rr.length; n++) {
                var i = Rr[n];
                t[i] = e[i];
            }
        }
        var Er = {};
        function zr(t, e) {
            var n = Er[e = e || K], i = (n = n || (Er[e] = new ti(500))).get(t);
            return null == i && (i = q.measureText(t, e).width, n.put(t, i)), i;
        }
        function Br(t, e, n, i) {
            t = zr(t, e), e = Wr(e), n = Vr(0, t, n), i = Hr(0, e, i);
            return new U(n, i, t, e);
        }
        function Fr(t, e, n, i) {
            var r = ((t || "") + "").split("\n");
            if (1 === r.length) return Br(r[0], e, n, i);
            for (var o = new U(0, 0, 0, 0), a = 0; a < r.length; a++) {
                var s = Br(r[a], e, n, i);
                0 === a ? o.copy(s) : o.union(s);
            }
            return o;
        }
        function Vr(t, e, n) {
            return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
        }
        function Hr(t, e, n) {
            return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
        }
        function Wr(t) {
            return zr("国", t);
        }
        function Gr(t, e) {
            return "string" == typeof t ? 0 <= t.lastIndexOf("%") ? parseFloat(t) / 100 * e : parseFloat(t) : t;
        }
        function Ur(t, e, n) {
            var i = e.position || "inside", r = null != e.distance ? e.distance : 5, o = n.height, a = n.width, s = o / 2, l = n.x, u = n.y, h = "left", c = "top";
            if (i instanceof Array) l += Gr(i[0], n.width), u += Gr(i[1], n.height), c = h = null; else switch (i) {
              case "left":
                l -= r, u += s, h = "right", c = "middle";
                break;

              case "right":
                l += r + a, u += s, c = "middle";
                break;

              case "top":
                l += a / 2, u -= r, h = "center", c = "bottom";
                break;

              case "bottom":
                l += a / 2, u += o + r, h = "center";
                break;

              case "inside":
                l += a / 2, u += s, h = "center", c = "middle";
                break;

              case "insideLeft":
                l += r, u += s, c = "middle";
                break;

              case "insideRight":
                l += a - r, u += s, h = "right", c = "middle";
                break;

              case "insideTop":
                l += a / 2, u += r, h = "center";
                break;

              case "insideBottom":
                l += a / 2, u += o - r, h = "center", c = "bottom";
                break;

              case "insideTopLeft":
                l += r, u += r;
                break;

              case "insideTopRight":
                l += a - r, u += r, h = "right";
                break;

              case "insideBottomLeft":
                l += r, u += o - r, c = "bottom";
                break;

              case "insideBottomRight":
                l += a - r, u += o - r, h = "right", c = "bottom";
            }
            return (t = t || {}).x = l, t.y = u, t.align = h, t.verticalAlign = c, t;
        }
        var Xr, Yr = "__zr_normal__", qr = Rr.concat([ "ignore" ]), jr = ht(Rr, (function(t, e) {
            return t[e] = !0, t;
        }), {
            ignore: !1
        }), Zr = {}, Kr = new U(0, 0, 0, 0);
        n = (i.prototype._init = function(t) {
            this.attr(t);
        }, i.prototype.drift = function(t, e, n) {
            switch (this.draggable) {
              case "horizontal":
                e = 0;
                break;

              case "vertical":
                t = 0;
            }
            var i = this.transform;
            (i = i || (this.transform = [ 1, 0, 0, 1, 0, 0 ]))[4] += t, i[5] += e, this.decomposeTransform(), 
            this.markRedraw();
        }, i.prototype.beforeUpdate = function() {}, i.prototype.afterUpdate = function() {}, 
        i.prototype.update = function() {
            this.updateTransform(), this.__dirty && this.updateInnerText();
        }, i.prototype.updateInnerText = function(t) {
            var e, n, i, r, o, a, s, l, u, h, c = this._textContent;
            !c || c.ignore && !t || (this.textConfig || (this.textConfig = {}), l = (t = this.textConfig).local, 
            i = n = void 0, r = !1, (e = c.innerTransformable).parent = l ? this : null, h = !1, 
            e.copyTransform(c), null != t.position && (u = Kr, t.layoutRect ? u.copy(t.layoutRect) : u.copy(this.getBoundingRect()), 
            l || u.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(Zr, t, u) : Ur(Zr, t, u), 
            e.x = Zr.x, e.y = Zr.y, n = Zr.align, i = Zr.verticalAlign, o = t.origin) && null != t.rotation && (s = a = void 0, 
            s = "center" === o ? (a = .5 * u.width, .5 * u.height) : (a = Gr(o[0], u.width), 
            Gr(o[1], u.height)), h = !0, e.originX = -e.x + a + (l ? 0 : u.x), e.originY = -e.y + s + (l ? 0 : u.y)), 
            null != t.rotation && (e.rotation = t.rotation), (o = t.offset) && (e.x += o[0], 
            e.y += o[1], h || (e.originX = -o[0], e.originY = -o[1])), a = null == t.inside ? "string" == typeof t.position && 0 <= t.position.indexOf("inside") : t.inside, 
            s = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), h = u = l = void 0, 
            a && this.canBeInsideText() ? (l = t.insideFill, u = t.insideStroke, null != l && "auto" !== l || (l = this.getInsideTextFill()), 
            null != u && "auto" !== u || (u = this.getInsideTextStroke(l), h = !0)) : (l = t.outsideFill, 
            u = t.outsideStroke, null != l && "auto" !== l || (l = this.getOutsideFill()), null != u && "auto" !== u || (u = this.getOutsideStroke(l), 
            h = !0)), (l = l || "#000") === s.fill && u === s.stroke && h === s.autoStroke && n === s.align && i === s.verticalAlign || (r = !0, 
            s.fill = l, s.stroke = u, s.autoStroke = h, s.align = n, s.verticalAlign = i, c.setDefaultTextStyle(s)), 
            c.__dirty |= mn, r && c.dirtyStyle(!0));
        }, i.prototype.canBeInsideText = function() {
            return !0;
        }, i.prototype.getInsideTextFill = function() {
            return "#fff";
        }, i.prototype.getInsideTextStroke = function(t) {
            return "#000";
        }, i.prototype.getOutsideFill = function() {
            return this.__zr && this.__zr.isDarkMode() ? Tr : Mr;
        }, i.prototype.getOutsideStroke = function(t) {
            for (var e = this.__zr && this.__zr.getBackgroundColor(), n = "string" == typeof e && fi(e), i = (n = n || [ 255, 255, 255, 1 ])[3], r = this.__zr.isDarkMode(), o = 0; o < 3; o++) n[o] = n[o] * i + (r ? 0 : 255) * (1 - i);
            return n[3] = 1, xi(n, "rgba");
        }, i.prototype.traverse = function(t, e) {}, i.prototype.attrKV = function(t, e) {
            "textConfig" === t ? this.setTextConfig(e) : "textContent" === t ? this.setTextContent(e) : "clipPath" === t ? this.setClipPath(e) : "extra" === t ? (this.extra = this.extra || {}, 
            O(this.extra, e)) : this[t] = e;
        }, i.prototype.hide = function() {
            this.ignore = !0, this.markRedraw();
        }, i.prototype.show = function() {
            this.ignore = !1, this.markRedraw();
        }, i.prototype.attr = function(t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (P(t)) for (var n = R(t), i = 0; i < n.length; i++) {
                var r = n[i];
                this.attrKV(r, t[r]);
            }
            return this.markRedraw(), this;
        }, i.prototype.saveCurrentToNormalState = function(t) {
            this._innerSaveToNormal(t);
            for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
                var i = this.animators[n], r = i.__fromStateTransition;
                i.getLoop() || r && r !== Yr || (r = (r = i.targetName) ? e[r] : e, i.saveTo(r));
            }
        }, i.prototype._innerSaveToNormal = function(t) {
            var e = (e = this._normalState) || (this._normalState = {});
            t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, qr);
        }, i.prototype._savePrimaryToNormal = function(t, e, n) {
            for (var i = 0; i < n.length; i++) {
                var r = n[i];
                null == t[r] || r in e || (e[r] = this[r]);
            }
        }, i.prototype.hasState = function() {
            return 0 < this.currentStates.length;
        }, i.prototype.getState = function(t) {
            return this.states[t];
        }, i.prototype.ensureState = function(t) {
            var e = this.states;
            return e[t] || (e[t] = {}), e[t];
        }, i.prototype.clearStates = function(t) {
            this.useState(Yr, !1, t);
        }, i.prototype.useState = function(t, e, n, i) {
            var r = t === Yr;
            if (this.hasState() || !r) {
                var o, a = this.currentStates, s = this.stateTransition;
                if (!(0 <= I(a, t)) || !e && 1 !== a.length) {
                    if ((o = (o = this.stateProxy && !r ? this.stateProxy(t) : o) || this.states && this.states[t]) || r) return r || this.saveCurrentToNormalState(o), 
                    (a = !!(o && o.hoverLayer || i)) && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, o, this._normalState, e, !n && !this.__inHover && s && 0 < s.duration, s), 
                    i = this._textContent, s = this._textGuide, i && i.useState(t, e, n, a), s && s.useState(t, e, n, a), 
                    r ? (this.currentStates = [], this._normalState = {}) : e ? this.currentStates.push(t) : this.currentStates = [ t ], 
                    this._updateAnimationTargets(), this.markRedraw(), !a && this.__inHover && (this._toggleHoverLayerFlag(!1), 
                    this.__dirty &= ~mn), o;
                    ot("State " + t + " not exists.");
                }
            }
        }, i.prototype.useStates = function(t, e, n) {
            if (t.length) {
                var i = [], r = this.currentStates, o = t.length, a = o === r.length;
                if (a) for (var s = 0; s < o; s++) if (t[s] !== r[s]) {
                    a = !1;
                    break;
                }
                if (!a) {
                    for (s = 0; s < o; s++) {
                        var l = t[s], u = void 0;
                        (u = (u = this.stateProxy ? this.stateProxy(l, t) : u) || this.states[l]) && i.push(u);
                    }
                    var h = i[o - 1], c = (h = !!(h && h.hoverLayer || n), n = (h && this._toggleHoverLayerFlag(!0), 
                    this._mergeStates(i)), this.stateTransition);
                    n = (this.saveCurrentToNormalState(n), this._applyStateObj(t.join(","), n, this._normalState, !1, !e && !this.__inHover && c && 0 < c.duration, c), 
                    this._textContent), c = this._textGuide;
                    n && n.useStates(t, e, h), c && c.useStates(t, e, h), this._updateAnimationTargets(), 
                    this.currentStates = t.slice(), this.markRedraw(), !h && this.__inHover && (this._toggleHoverLayerFlag(!1), 
                    this.__dirty &= ~mn);
                }
            } else this.clearStates();
        }, i.prototype.isSilent = function() {
            for (var t = this.silent, e = this.parent; !t && e; ) {
                if (e.silent) {
                    t = !0;
                    break;
                }
                e = e.parent;
            }
            return t;
        }, i.prototype._updateAnimationTargets = function() {
            for (var t = 0; t < this.animators.length; t++) {
                var e = this.animators[t];
                e.targetName && e.changeTarget(this[e.targetName]);
            }
        }, i.prototype.removeState = function(t) {
            var e;
            t = I(this.currentStates, t);
            0 <= t && ((e = this.currentStates.slice()).splice(t, 1), this.useStates(e));
        }, i.prototype.replaceState = function(t, e, n) {
            var i = this.currentStates.slice(), r = (t = I(i, t), 0 <= I(i, e));
            0 <= t ? r ? i.splice(t, 1) : i[t] = e : n && !r && i.push(e), this.useStates(i);
        }, i.prototype.toggleState = function(t, e) {
            e ? this.useState(t, !0) : this.removeState(t);
        }, i.prototype._mergeStates = function(t) {
            for (var e, n = {}, i = 0; i < t.length; i++) {
                var r = t[i];
                O(n, r), r.textConfig && O(e = e || {}, r.textConfig);
            }
            return e && (n.textConfig = e), n;
        }, i.prototype._applyStateObj = function(t, e, n, i, r, o) {
            var a = !(e && i);
            e && e.textConfig ? (this.textConfig = O({}, (i ? this : n).textConfig), O(this.textConfig, e.textConfig)) : a && n.textConfig && (this.textConfig = n.textConfig);
            for (var s = {}, l = !1, u = 0; u < qr.length; u++) {
                var h = qr[u], c = r && jr[h];
                e && null != e[h] ? c ? (l = !0, s[h] = e[h]) : this[h] = e[h] : a && null != n[h] && (c ? (l = !0, 
                s[h] = n[h]) : this[h] = n[h]);
            }
            if (!r) for (u = 0; u < this.animators.length; u++) {
                var p = this.animators[u], d = p.targetName;
                p.getLoop() || p.__changeFinalValue(d ? (e || n)[d] : e || n);
            }
            l && this._transitionState(t, s, o);
        }, i.prototype._attachComponent = function(t) {
            var e;
            t.__zr && !t.__hostTarget || t !== this && ((e = this.__zr) && t.addSelfToZr(e), 
            t.__zr = e, t.__hostTarget = this);
        }, i.prototype._detachComponent = function(t) {
            t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
        }, i.prototype.getClipPath = function() {
            return this._clipPath;
        }, i.prototype.setClipPath = function(t) {
            this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), 
            this._clipPath = t, this.markRedraw();
        }, i.prototype.removeClipPath = function() {
            var t = this._clipPath;
            t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
        }, i.prototype.getTextContent = function() {
            return this._textContent;
        }, i.prototype.setTextContent = function(t) {
            var e = this._textContent;
            e !== t && (e && e !== t && this.removeTextContent(), t.innerTransformable = new Pr, 
            this._attachComponent(t), this._textContent = t, this.markRedraw());
        }, i.prototype.setTextConfig = function(t) {
            this.textConfig || (this.textConfig = {}), O(this.textConfig, t), this.markRedraw();
        }, i.prototype.removeTextConfig = function() {
            this.textConfig = null, this.markRedraw();
        }, i.prototype.removeTextContent = function() {
            var t = this._textContent;
            t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, 
            this._innerTextDefaultStyle = null, this.markRedraw());
        }, i.prototype.getTextGuideLine = function() {
            return this._textGuide;
        }, i.prototype.setTextGuideLine = function(t) {
            this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), 
            this._textGuide = t, this.markRedraw();
        }, i.prototype.removeTextGuideLine = function() {
            var t = this._textGuide;
            t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
        }, i.prototype.markRedraw = function() {
            this.__dirty |= mn;
            var t = this.__zr;
            t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
        }, i.prototype.dirty = function() {
            this.markRedraw();
        }, i.prototype._toggleHoverLayerFlag = function(t) {
            this.__inHover = t;
            var e = this._textContent, n = this._textGuide;
            e && (e.__inHover = t), n && (n.__inHover = t);
        }, i.prototype.addSelfToZr = function(t) {
            if (this.__zr !== t) {
                this.__zr = t;
                var e = this.animators;
                if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
                this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), 
                this._textGuide && this._textGuide.addSelfToZr(t);
            }
        }, i.prototype.removeSelfFromZr = function(t) {
            if (this.__zr) {
                this.__zr = null;
                var e = this.animators;
                if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
                this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), 
                this._textGuide && this._textGuide.removeSelfFromZr(t);
            }
        }, i.prototype.animate = function(t, e, n) {
            var i = t ? this[t] : this;
            i = new Ki(i, e, n);
            return t && (i.targetName = t), this.addAnimator(i, t), i;
        }, i.prototype.addAnimator = function(n, t) {
            var e = this.__zr, i = this;
            n.during((function() {
                i.updateDuringAnimation(t);
            })).done((function() {
                var t = i.animators, e = I(t, n);
                0 <= e && t.splice(e, 1);
            })), this.animators.push(n), e && e.animation.addAnimator(n), e && e.wakeUp();
        }, i.prototype.updateDuringAnimation = function(t) {
            this.markRedraw();
        }, i.prototype.stopAnimation = function(t, e) {
            for (var n = this.animators, i = n.length, r = [], o = 0; o < i; o++) {
                var a = n[o];
                t && t !== a.scope ? r.push(a) : a.stop(e);
            }
            return this.animators = r, this;
        }, i.prototype.animateTo = function(t, e, n) {
            Qr(this, t, e, n);
        }, i.prototype.animateFrom = function(t, e, n) {
            Qr(this, t, e, n, !0);
        }, i.prototype._transitionState = function(t, e, n, i) {
            for (var r = Qr(this, e, n, i), o = 0; o < r.length; o++) r[o].__fromStateTransition = t;
        }, i.prototype.getBoundingRect = function() {
            return null;
        }, i.prototype.getPaintRect = function() {
            return null;
        }, i.initDefaultProps = ((Xr = i.prototype).type = "element", Xr.name = "", Xr.ignore = Xr.silent = Xr.isGroup = Xr.draggable = Xr.dragging = Xr.ignoreClip = Xr.__inHover = !1, 
        Xr.__dirty = mn, void (Object.defineProperty && ($r("position", "_legacyPos", "x", "y"), 
        $r("scale", "_legacyScale", "scaleX", "scaleY"), $r("origin", "_legacyOrigin", "originX", "originY")))), 
        i);
        function i(t) {
            this.id = it++, this.animators = [], this.currentStates = [], this.states = {}, 
            this._init(t);
        }
        function $r(t, e, n, i) {
            function r(e, t) {
                Object.defineProperty(t, 0, {
                    get: function() {
                        return e[n];
                    },
                    set: function(t) {
                        e[n] = t;
                    }
                }), Object.defineProperty(t, 1, {
                    get: function() {
                        return e[i];
                    },
                    set: function(t) {
                        e[i] = t;
                    }
                });
            }
            Object.defineProperty(Xr, t, {
                get: function() {
                    return this[e] || r(this, this[e] = []), this[e];
                },
                set: function(t) {
                    this[n] = t[0], this[i] = t[1], this[e] = t, r(this, t);
                }
            });
        }
        function Qr(t, e, n, i, r) {
            function o() {
                u = !0, --l <= 0 && (u ? h && h() : c && c());
            }
            function a() {
                --l <= 0 && (u ? h && h() : c && c());
            }
            var s = [], l = (!function t(e, n, i, r, o, a, s, l) {
                for (var u = R(r), h = o.duration, c = o.delay, p = o.additive, d = o.setToFinal, f = !P(a), g = e.animators, y = [], m = 0; m < u.length; m++) {
                    var v = u[m], _ = r[v];
                    null != _ && null != i[v] && (f || a[v]) ? !P(_) || ut(_) || vt(_) ? y.push(v) : n ? l || (i[v] = _, 
                    e.updateDuringAnimation(n)) : t(e, v, i[v], _, o, a && a[v], s, l) : l || (i[v] = _, 
                    e.updateDuringAnimation(n), y.push(v));
                }
                var x = y.length;
                if (!p && x) for (var w = 0; w < g.length; w++) {
                    var b;
                    (S = g[w]).targetName === n && S.stopTracks(y) && (b = I(g, S), g.splice(b, 1));
                }
                if (o.force || (x = (y = ct(y, (function(t) {
                    return !eo(r[t], i[t]);
                }))).length), 0 < x || o.force && !s.length) {
                    var S, M = void 0, T = void 0, C = void 0;
                    if (l) for (T = {}, d && (M = {}), w = 0; w < x; w++) T[v = y[w]] = i[v], d ? M[v] = r[v] : i[v] = r[v]; else if (d) for (C = {}, 
                    w = 0; w < x; w++) C[v = y[w]] = Ui(i[v]), to(i, r, v);
                    (S = new Ki(i, !1, !1, p ? ct(g, (function(t) {
                        return t.targetName === n;
                    })) : null)).targetName = n, o.scope && (S.scope = o.scope), d && M && S.whenWithKeys(0, M, y), 
                    C && S.whenWithKeys(0, C, y), S.whenWithKeys(null == h ? 500 : h, l ? T : r, y).delay(c || 0), 
                    e.addAnimator(S, n), s.push(S);
                }
            }(t, "", t, e, n = n || {}, i, s, r), s.length), u = !1, h = n.done, c = n.aborted;
            l || h && h(), 0 < s.length && n.during && s[0].during((function(t, e) {
                n.during(e);
            }));
            for (var p = 0; p < s.length; p++) {
                var d = s[p];
                d.done(o), d.aborted(a), n.force && d.duration(n.duration), d.start(n.easing);
            }
            return s;
        }
        function Jr(t, e, n) {
            for (var i = 0; i < n; i++) t[i] = e[i];
        }
        function to(t, e, n) {
            if (ut(e[n])) if (ut(t[n]) || (t[n] = []), yt(e[n])) {
                var i = e[n].length;
                t[n].length !== i && (t[n] = new e[n].constructor(i), Jr(t[n], e[n], i));
            } else {
                var r = e[n], o = t[n], a = r.length;
                if (ut(r[0])) for (var s = r[0].length, l = 0; l < a; l++) o[l] ? Jr(o[l], r[l], s) : o[l] = Array.prototype.slice.call(r[l]); else Jr(o, r, a);
                o.length = r.length;
            } else t[n] = e[n];
        }
        function eo(t, e) {
            return t === e || ut(t) && ut(e) && function(t, e) {
                var n = t.length;
                if (n !== e.length) return !1;
                for (var i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
                return !0;
            }(t, e);
        }
        lt(n, ue), lt(n, Pr);
        u(ro, no = n), ro.prototype.childrenRef = function() {
            return this._children;
        }, ro.prototype.children = function() {
            return this._children.slice();
        }, ro.prototype.childAt = function(t) {
            return this._children[t];
        }, ro.prototype.childOfName = function(t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
        }, ro.prototype.childCount = function() {
            return this._children.length;
        }, ro.prototype.add = function(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), 
            this;
        }, ro.prototype.addBefore = function(t, e) {
            var n;
            return t && t !== this && t.parent !== this && e && e.parent === this && 0 <= (e = (n = this._children).indexOf(e)) && (n.splice(e, 0, t), 
            this._doAdd(t)), this;
        }, ro.prototype.replace = function(t, e) {
            t = I(this._children, t);
            return 0 <= t && this.replaceAt(e, t), this;
        }, ro.prototype.replaceAt = function(t, e) {
            var n = this._children, i = n[e];
            return t && t !== this && t.parent !== this && t !== i && (n[e] = t, i.parent = null, 
            (n = this.__zr) && i.removeSelfFromZr(n), this._doAdd(t)), this;
        }, ro.prototype._doAdd = function(t) {
            t.parent && t.parent.remove(t);
            var e = (t.parent = this).__zr;
            e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh();
        }, ro.prototype.remove = function(t) {
            var e = this.__zr, n = this._children, i = I(n, t);
            return i < 0 || (n.splice(i, 1), t.parent = null, e && t.removeSelfFromZr(e), e && e.refresh()), 
            this;
        }, ro.prototype.removeAll = function() {
            for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
                var i = t[n];
                e && i.removeSelfFromZr(e), i.parent = null;
            }
            return t.length = 0, this;
        }, ro.prototype.eachChild = function(t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i);
            }
            return this;
        }, ro.prototype.traverse = function(t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n], r = t.call(e, i);
                i.isGroup && !r && i.traverse(t, e);
            }
            return this;
        }, ro.prototype.addSelfToZr = function(t) {
            no.prototype.addSelfToZr.call(this, t);
            for (var e = 0; e < this._children.length; e++) this._children[e].addSelfToZr(t);
        }, ro.prototype.removeSelfFromZr = function(t) {
            no.prototype.removeSelfFromZr.call(this, t);
            for (var e = 0; e < this._children.length; e++) this._children[e].removeSelfFromZr(t);
        }, ro.prototype.getBoundingRect = function(t) {
            for (var e = new U(0, 0, 0, 0), n = t || this._children, i = [], r = null, o = 0; o < n.length; o++) {
                var a, s = n[o];
                s.ignore || s.invisible || (a = s.getBoundingRect(), (s = s.getLocalTransform(i)) ? (U.applyTransform(e, a, s), 
                (r = r || e.clone()).union(e)) : (r = r || a.clone()).union(a));
            }
            return r || e;
        };
        var no, io = ro;
        function ro(t) {
            var e = no.call(this) || this;
            return e.isGroup = !0, e._children = [], e.attr(t), e;
        }
        io.prototype.type = "group";
        var oo = {}, ao = {};
        uo.prototype.add = function(t) {
            !this._disposed && t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
        }, uo.prototype.remove = function(t) {
            !this._disposed && t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
        }, uo.prototype.configLayer = function(t, e) {
            this._disposed || (this.painter.configLayer && this.painter.configLayer(t, e), this.refresh());
        }, uo.prototype.setBackgroundColor = function(t) {
            this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), 
            this.refresh(), this._backgroundColor = t, this._darkMode = function(t) {
                if (t) {
                    if ("string" == typeof t) return wi(t, 1) < .4;
                    if (t.colorStops) {
                        for (var e = t.colorStops, n = 0, i = e.length, r = 0; r < i; r++) n += wi(e[r].color, 1);
                        return (n /= i) < .4;
                    }
                }
                return !1;
            }(t));
        }, uo.prototype.getBackgroundColor = function() {
            return this._backgroundColor;
        }, uo.prototype.setDarkMode = function(t) {
            this._darkMode = t;
        }, uo.prototype.isDarkMode = function() {
            return this._darkMode;
        }, uo.prototype.refreshImmediately = function(t) {
            this._disposed || (t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), 
            this._needsRefresh = !1);
        }, uo.prototype.refresh = function() {
            this._disposed || (this._needsRefresh = !0, this.animation.start());
        }, uo.prototype.flush = function() {
            this._disposed || this._flush(!1);
        }, uo.prototype._flush = function(t) {
            var e, n = Ji();
            t = (this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, 
            this.refreshHoverImmediately()), Ji());
            e ? (this._stillFrameAccum = 0, this.trigger("rendered", {
                elapsedTime: t - n
            })) : 0 < this._sleepAfterStill && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill) && this.animation.stop();
        }, uo.prototype.setSleepAfterStill = function(t) {
            this._sleepAfterStill = t;
        }, uo.prototype.wakeUp = function() {
            this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
        }, uo.prototype.refreshHover = function() {
            this._needsRefreshHover = !0;
        }, uo.prototype.refreshHoverImmediately = function() {
            this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && "canvas" === this.painter.getType() && this.painter.refreshHover());
        }, uo.prototype.resize = function(t) {
            this._disposed || (this.painter.resize((t = t || {}).width, t.height), this.handler.resize());
        }, uo.prototype.clearAnimation = function() {
            this._disposed || this.animation.clear();
        }, uo.prototype.getWidth = function() {
            if (!this._disposed) return this.painter.getWidth();
        }, uo.prototype.getHeight = function() {
            if (!this._disposed) return this.painter.getHeight();
        }, uo.prototype.setCursorStyle = function(t) {
            this._disposed || this.handler.setCursorStyle(t);
        }, uo.prototype.findHover = function(t, e) {
            if (!this._disposed) return this.handler.findHover(t, e);
        }, uo.prototype.on = function(t, e, n) {
            return this._disposed || this.handler.on(t, e, n), this;
        }, uo.prototype.off = function(t, e) {
            this._disposed || this.handler.off(t, e);
        }, uo.prototype.trigger = function(t, e) {
            this._disposed || this.handler.trigger(t, e);
        }, uo.prototype.clear = function() {
            if (!this._disposed) {
                for (var t = this.storage.getRoots(), e = 0; e < t.length; e++) t[e] instanceof io && t[e].removeSelfFromZr(this);
                this.storage.delAllRoots(), this.painter.clear();
            }
        }, uo.prototype.dispose = function() {
            var t;
            this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), 
            this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, 
            this._disposed = !0, t = this.id, delete ao[t]);
        };
        var so, lo = uo;
        function uo(t, e, n) {
            var i = this, r = (this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, 
            this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t, 
            new bn), o = n.renderer || "canvas";
            o = (oo[o] || (o = R(oo)[0]), n.useDirtyRect = null != n.useDirtyRect && n.useDirtyRect, 
            new oo[o](e, r, n, t)), e = n.ssr || o.ssrOnly;
            this.storage = r, this.painter = o;
            t = p.node || p.worker || e ? null : new wr(o.getViewportRoot(), o.root);
            var a, s = n.useCoarsePointer;
            (null == s || "auto" === s ? p.touchEventsSupported : s) && (a = N(n.pointerSize, 44)), 
            this.handler = new on(r, o, t, o.root, a), this.animation = new er({
                stage: {
                    update: e ? null : function() {
                        return i._flush(!0);
                    }
                }
            }), e || this.animation.start();
        }
        function ho(t, e) {
            t = new lo(it++, t, e);
            return ao[t.id] = t;
        }
        function co(t, e) {
            oo[t] = e;
        }
        function po(t) {
            if ("function" == typeof so) return so(t);
        }
        function fo(t) {
            so = t;
        }
        var go = Object.freeze({
            __proto__: null,
            dispose: function(t) {
                t.dispose();
            },
            disposeAll: function() {
                for (var t in ao) ao.hasOwnProperty(t) && ao[t].dispose();
                ao = {};
            },
            getElementSSRData: po,
            getInstance: function(t) {
                return ao[t];
            },
            init: ho,
            registerPainter: co,
            registerSSRDataGetter: fo,
            version: "5.5.0"
        }), yo = 20;
        function mo(t, e, n, i) {
            var r = e[0], o = (e = e[1], n[0]), a = (n = n[1], e - r), s = n - o;
            if (0 == a) return 0 == s ? o : (o + n) / 2;
            if (i) if (0 < a) {
                if (t <= r) return o;
                if (e <= t) return n;
            } else {
                if (r <= t) return o;
                if (t <= e) return n;
            } else {
                if (t === r) return o;
                if (t === e) return n;
            }
            return (t - r) / a * s + o;
        }
        function vo(t, e) {
            switch (t) {
              case "center":
              case "middle":
                t = "50%";
                break;

              case "left":
              case "top":
                t = "0%";
                break;

              case "right":
              case "bottom":
                t = "100%";
            }
            return H(t) ? t.replace(/^\s+|\s+$/g, "").match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
        }
        function _o(t, e, n) {
            return null == e && (e = 10), e = Math.min(Math.max(0, e), yo), t = (+t).toFixed(e), 
            n ? t : +t;
        }
        function xo(t) {
            if (t = +t, isNaN(t)) return 0;
            if (1e-14 < t) for (var e = 1, n = 0; n < 15; n++, e *= 10) if (Math.round(t * e) / e === t) return n;
            return wo(t);
        }
        function wo(t) {
            t = t.toString().toLowerCase();
            var e = t.indexOf("e"), n = 0 < e ? +t.slice(e + 1) : 0;
            e = 0 < e ? e : t.length, t = t.indexOf(".");
            return Math.max(0, (t < 0 ? 0 : e - 1 - t) - n);
        }
        function bo(t, e) {
            var n = Math.log, i = Math.LN10;
            t = Math.floor(n(t[1] - t[0]) / i), n = Math.round(n(Math.abs(e[1] - e[0])) / i), 
            e = Math.min(Math.max(-t + n, 0), 20);
            return isFinite(e) ? e : 20;
        }
        function So(t, e) {
            var n = ht(t, (function(t, e) {
                return t + (isNaN(e) ? 0 : e);
            }), 0);
            if (0 === n) return [];
            for (var i = Math.pow(10, e), r = (e = F(t, (function(t) {
                return (isNaN(t) ? 0 : t) / n * i * 100;
            })), 100 * i), o = F(e, (function(t) {
                return Math.floor(t);
            })), a = ht(o, (function(t, e) {
                return t + e;
            }), 0), s = F(e, (function(t, e) {
                return t - o[e];
            })); a < r; ) {
                for (var l = Number.NEGATIVE_INFINITY, u = null, h = 0, c = s.length; h < c; ++h) s[h] > l && (l = s[h], 
                u = h);
                ++o[u], s[u] = 0, ++a;
            }
            return F(o, (function(t) {
                return t / i;
            }));
        }
        function Mo(t) {
            var e = 2 * Math.PI;
            return (t % e + e) % e;
        }
        function To(t) {
            return -1e-4 < t && t < 1e-4;
        }
        var Co = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
        function Io(t) {
            var e, n;
            return t instanceof Date ? t : H(t) ? (e = Co.exec(t)) ? e[8] ? (n = +e[4] || 0, 
            "Z" !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0))) : new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, e[7] ? +e[7].substring(0, 3) : 0) : new Date(NaN) : null == t ? new Date(NaN) : new Date(Math.round(t));
        }
        function ko(t) {
            return Math.pow(10, Do(t));
        }
        function Do(t) {
            var e;
            return 0 === t ? 0 : (e = Math.floor(Math.log(t) / Math.LN10), 10 <= t / Math.pow(10, e) && e++, 
            e);
        }
        function Ao(t, e) {
            var n = Do(t), i = Math.pow(10, n), r = t / i;
            return t = (e ? r < 1.5 ? 1 : r < 2.5 ? 2 : r < 4 ? 3 : r < 7 ? 5 : 10 : r < 1 ? 1 : r < 2 ? 2 : r < 3 ? 3 : r < 5 ? 5 : 10) * i, 
            -20 <= n ? +t.toFixed(n < 0 ? -n : 0) : t;
        }
        function Lo(t) {
            var e = parseFloat(t);
            return e == t && (0 !== e || !H(t) || t.indexOf("x") <= 0) ? e : NaN;
        }
        function Po(t) {
            return !isNaN(Lo(t));
        }
        function Oo(t, e) {
            return null == t ? e : null == e ? t : t * e / function t(e, n) {
                return 0 === n ? e : t(n, e % n);
            }(t, e);
        }
        function f(t) {
            throw new Error(t);
        }
        function Ro(t, e, n) {
            return (e - t) * n + t;
        }
        var No = "series\0", Eo = "\0_ec_\0";
        function zo(t) {
            return t instanceof Array ? t : null == t ? [] : [ t ];
        }
        function Bo(t, e, n) {
            if (t) {
                t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
                for (var i = 0, r = n.length; i < r; i++) {
                    var o = n[i];
                    !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o]);
                }
            }
        }
        var Fo = [ "fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding" ];
        function Vo(t) {
            return !P(t) || V(t) || t instanceof Date ? t : t.value;
        }
        function Ho(t, n, e) {
            var a, i, r, o, s, l, u, h, c, p, d = "normalMerge" === e, f = "replaceMerge" === e, g = "replaceAll" === e, y = (t = t || [], 
            n = (n || []).slice(), z());
            e = (E(n, (function(t, e) {
                P(t) || (n[e] = null);
            })), function(t, e, n) {
                var i = [];
                if ("replaceAll" !== n) for (var r = 0; r < t.length; r++) {
                    var o = t[r];
                    o && null != o.id && e.set(o.id, r), i.push({
                        existing: "replaceMerge" === n || Yo(o) ? null : o,
                        newOption: null,
                        keyInfo: null,
                        brandNew: null
                    });
                }
                return i;
            }(t, y, e));
            return (d || f) && (u = e, h = t, c = y, E(p = n, (function(t, e) {
                var n, i, r;
                t && null != t.id && (n = Go(t.id), null != (i = c.get(n))) && (Ct(!(r = u[i]).newOption, 'Duplicated option on id "' + n + '".'), 
                r.newOption = t, r.existing = h[i], p[e] = null);
            }))), d && (s = e, E(l = n, (function(t, e) {
                if (t && null != t.name) for (var n = 0; n < s.length; n++) {
                    var i = s[n].existing;
                    if (!s[n].newOption && i && (null == i.id || null == t.id) && !Yo(t) && !Yo(i) && Wo("name", i, t)) return s[n].newOption = t, 
                    void (l[e] = null);
                }
            }))), d || f ? (r = e, o = f, E(n, (function(t) {
                if (t) {
                    for (var e, n = 0; (e = r[n]) && (e.newOption || Yo(e.existing) || e.existing && null != t.id && !Wo("id", t, e.existing)); ) n++;
                    e ? (e.newOption = t, e.brandNew = o) : r.push({
                        newOption: t,
                        brandNew: o,
                        existing: null,
                        keyInfo: null
                    }), n++;
                }
            }))) : g && (i = e, E(n, (function(t) {
                i.push({
                    newOption: t,
                    brandNew: !0,
                    existing: null,
                    keyInfo: null
                });
            }))), t = e, a = z(), E(t, (function(t) {
                var e = t.existing;
                e && a.set(e.id, t);
            })), E(t, (function(t) {
                var e = t.newOption;
                Ct(!e || null == e.id || !a.get(e.id) || a.get(e.id) === t, "id duplicates: " + (e && e.id)), 
                e && null != e.id && a.set(e.id, t), t.keyInfo || (t.keyInfo = {});
            })), E(t, (function(t, e) {
                var n = t.existing, i = t.newOption, r = t.keyInfo;
                if (P(i)) {
                    if (r.name = null != i.name ? Go(i.name) : n ? n.name : No + e, n) r.id = Go(n.id); else if (null != i.id) r.id = Go(i.id); else for (var o = 0; r.id = "\0" + r.name + "\0" + o++, 
                    a.get(r.id); ) ;
                    a.set(r.id, t);
                }
            })), e;
        }
        function Wo(t, e, n) {
            e = Uo(e[t], null), n = Uo(n[t], null);
            return null != e && null != n && e === n;
        }
        function Go(t) {
            return Uo(t, "");
        }
        function Uo(t, e) {
            return null == t ? e : H(t) ? t : W(t) || ft(t) ? t + "" : e;
        }
        function Xo(t) {
            t = t.name;
            return !(!t || !t.indexOf(No));
        }
        function Yo(t) {
            return t && null != t.id && 0 === Go(t.id).indexOf(Eo);
        }
        function qo(t, r, o) {
            E(t, (function(t) {
                var e, n, i = t.newOption;
                P(i) && (t.keyInfo.mainType = r, t.keyInfo.subType = (e = r, i, t = t.existing, 
                n = o, i.type || (t ? t.subType : n.determineSubType(e, i))));
            }));
        }
        function jo(e, t) {
            return null != t.dataIndexInside ? t.dataIndexInside : null != t.dataIndex ? V(t.dataIndex) ? F(t.dataIndex, (function(t) {
                return e.indexOfRawIndex(t);
            })) : e.indexOfRawIndex(t.dataIndex) : null != t.name ? V(t.name) ? F(t.name, (function(t) {
                return e.indexOfName(t);
            })) : e.indexOfName(t.name) : void 0;
        }
        function Zo() {
            var e = "__ec_inner_" + Ko++;
            return function(t) {
                return t[e] || (t[e] = {});
            };
        }
        var Ko = Math.round(9 * Math.random());
        function $o(n, t, i) {
            t = Qo(t, i);
            var e = t.mainTypeSpecified, r = t.queryOptionMap, o = t.others, a = i ? i.defaultMainType : null;
            return !e && a && r.set(a, {}), r.each((function(t, e) {
                t = ta(n, e, t, {
                    useDefault: a === e,
                    enableAll: !i || null == i.enableAll || i.enableAll,
                    enableNone: !i || null == i.enableNone || i.enableNone
                });
                o[e + "Models"] = t.models, o[e + "Model"] = t.models[0];
            })), o;
        }
        function Qo(t, r) {
            var e = H(t) ? ((e = {})[t + "Index"] = 0, e) : t, o = z(), a = {}, s = !1;
            return E(e, (function(t, e) {
                var n, i;
                "dataIndex" !== e && "dataIndexInside" !== e ? (n = (i = e.match(/^(\w+)(Index|Id|Name)$/) || [])[1], 
                i = (i[2] || "").toLowerCase(), !n || !i || r && r.includeMainTypes && I(r.includeMainTypes, n) < 0 || (s = s || !!n, 
                (o.get(n) || o.set(n, {}))[i] = t)) : a[e] = t;
            })), {
                mainTypeSpecified: s,
                queryOptionMap: o,
                others: a
            };
        }
        var Jo = {
            useDefault: !0,
            enableAll: !1,
            enableNone: !1
        };
        function ta(t, e, n, i) {
            i = i || Jo;
            var r = n.index, o = n.id, a = (n = n.name, {
                models: null,
                specified: null != r || null != o || null != n
            });
            return a.specified ? "none" === r || !1 === r ? (Ct(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), 
            a.models = []) : ("all" === r && (Ct(i.enableAll, '`"all"` is not a valid value on index option.'), 
            r = o = n = null), a.models = t.queryComponents({
                mainType: e,
                index: r,
                id: o,
                name: n
            })) : (r = void 0, a.models = i.useDefault && (r = t.getComponent(e)) ? [ r ] : []), 
            a;
        }
        function ea(t, e, n) {
            t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
        }
        function na(t, e, n, i, r) {
            var o = null == e || "auto" === e;
            if (null == i) return i;
            if (W(i)) return _o(p = Ro(n || 0, i, r), o ? Math.max(xo(n || 0), xo(i)) : e);
            if (H(i)) return r < 1 ? n : i;
            for (var a = [], s = n, l = i, u = Math.max(s ? s.length : 0, l.length), h = 0; h < u; ++h) {
                var c, p, d = t.getDimensionInfo(h);
                d && "ordinal" === d.type ? a[h] = (r < 1 && s ? s : l)[h] : (p = Ro(d = s && s[h] ? s[h] : 0, c = l[h], r), 
                a[h] = _o(p, o ? Math.max(xo(d), xo(c)) : e));
            }
            return a;
        }
        var ia = ".", ra = "___EC__COMPONENT__CONTAINER___", oa = "___EC__EXTENDED_CLASS___";
        function aa(t) {
            var e = {
                main: "",
                sub: ""
            };
            return t && (t = t.split(ia), e.main = t[0] || "", e.sub = t[1] || ""), e;
        }
        function sa(t) {
            (t.$constructor = t).extend = function(t) {
                var e, n, i, r = this;
                return k(i = r) && /^class\s/.test(Function.prototype.toString.call(i)) ? (u(o, n = r), 
                e = o) : st(e = function() {
                    (t.$constructor || r).apply(this, arguments);
                }, this), O(e.prototype, t), e[oa] = !0, e.extend = this.extend, e.superCall = ha, 
                e.superApply = ca, e.superClass = r, e;
                function o() {
                    return n.apply(this, arguments) || this;
                }
            };
        }
        function la(t, e) {
            t.extend = e.extend;
        }
        var ua = Math.round(10 * Math.random());
        function ha(t, e) {
            for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
            return this.superClass.prototype[e].apply(t, n);
        }
        function ca(t, e, n) {
            return this.superClass.prototype[e].apply(t, n);
        }
        function pa(t) {
            var r = {};
            t.registerClass = function(t) {
                var e, n = t.type || t.prototype.type;
                return n && (Ct(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e = n), 'componentType "' + e + '" illegal'), 
                (e = aa(t.prototype.type = n)).sub ? e.sub !== ra && ((n = r[e.main]) && n[ra] || ((n = r[e.main] = {})[ra] = !0), 
                n[e.sub] = t) : r[e.main] = t), t;
            }, t.getClass = function(t, e, n) {
                var i = r[t];
                if (i && i[ra] && (i = e ? i[e] : null), n && !i) throw new Error(e ? "Component " + t + "." + (e || "") + " is used but not imported." : t + ".type should be specified.");
                return i;
            }, t.getClassesByMainType = function(t) {
                t = aa(t);
                var n = [];
                t = r[t.main];
                return t && t[ra] ? E(t, (function(t, e) {
                    e !== ra && n.push(t);
                })) : n.push(t), n;
            }, t.hasClass = function(t) {
                t = aa(t);
                return !!r[t.main];
            }, t.getAllClassMainTypes = function() {
                var n = [];
                return E(r, (function(t, e) {
                    n.push(e);
                })), n;
            }, t.hasSubTypes = function(t) {
                t = aa(t), t = r[t.main];
                return t && t[ra];
            };
        }
        function da(a, s) {
            for (var t = 0; t < a.length; t++) a[t][1] || (a[t][1] = a[t][0]);
            return s = s || !1, function(t, e, n) {
                for (var i = {}, r = 0; r < a.length; r++) {
                    var o = a[r][1];
                    e && 0 <= I(e, o) || n && I(n, o) < 0 || null != (o = t.getShallow(o, s)) && (i[a[r][0]] = o);
                }
                return i;
            };
        }
        var fa = da([ [ "fill", "color" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "opacity" ], [ "shadowColor" ] ]), ga = (ya.prototype.getAreaStyle = function(t, e) {
            return fa(this, t, e);
        }, ya);
        function ya() {}
        var ma = new ti(50);
        function va(t, e, n, i, r) {
            return t ? "string" == typeof t ? (e && e.__zrImageSrc === t || !n || (n = {
                hostEl: n,
                cb: i,
                cbPayload: r
            }, (i = ma.get(t)) ? xa(e = i.image) || i.pending.push(n) : ((e = q.loadImage(t, _a, _a)).__zrImageSrc = t, 
            ma.put(t, e.__cachedImgObj = {
                image: e,
                pending: [ n ]
            }))), e) : t : e;
        }
        function _a() {
            var t = this.__cachedImgObj;
            this.onload = this.onerror = this.__cachedImgObj = null;
            for (var e = 0; e < t.pending.length; e++) {
                var n = t.pending[e], i = n.cb;
                i && i(this, n.cbPayload), n.hostEl.dirty();
            }
            t.pending.length = 0;
        }
        function xa(t) {
            return t && t.width && t.height;
        }
        var wa = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
        function ba(t, e, n, i, r) {
            if (!e) return "";
            var o = (t + "").split("\n");
            r = Sa(e, n, i, r);
            for (var a = 0, s = o.length; a < s; a++) o[a] = Ma(o[a], r);
            return o.join("\n");
        }
        function Sa(t, e, n, i) {
            var r = O({}, i = i || {}), o = (r.font = e, n = N(n, "..."), r.maxIterations = N(i.maxIterations, 2), 
            r.minChar = N(i.minChar, 0)), a = (r.cnCharWidth = zr("国", e), r.ascCharWidth = zr("a", e));
            r.placeholder = N(i.placeholder, "");
            for (var s = t = Math.max(0, t - 1), l = 0; l < o && a <= s; l++) s -= a;
            i = zr(n, e);
            return s < i && (n = "", i = 0), s = t - i, r.ellipsis = n, r.ellipsisWidth = i, 
            r.contentWidth = s, r.containerWidth = t, r;
        }
        function Ma(t, e) {
            var n = e.containerWidth, i = e.font, r = e.contentWidth;
            if (!n) return "";
            var o = zr(t, i);
            if (!(o <= n)) {
                for (var a = 0; ;a++) {
                    if (o <= r || a >= e.maxIterations) {
                        t += e.ellipsis;
                        break;
                    }
                    var s = 0 === a ? function(t, e, n, i) {
                        for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
                            var s = t.charCodeAt(o);
                            r += 0 <= s && s <= 127 ? n : i;
                        }
                        return o;
                    }(t, r, e.ascCharWidth, e.cnCharWidth) : 0 < o ? Math.floor(t.length * r / o) : 0;
                    o = zr(t = t.substr(0, s), i);
                }
                "" === t && (t = e.placeholder);
            }
            return t;
        }
        function Ta() {
            this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, 
            this.outerWidth = 0, this.outerHeight = 0, this.lines = [];
        }
        var Ca = function() {}, Ia = function(t) {
            this.tokens = [], t && (this.tokens = t);
        };
        function ka(t, e) {
            var n = new Ta;
            if (null != t && (t += ""), t) {
                for (var i, r = e.width, o = e.height, a = e.overflow, s = "break" !== a && "breakAll" !== a || null == r ? null : {
                    width: r,
                    accumWidth: 0,
                    breakAll: "breakAll" === a
                }, l = wa.lastIndex = 0; null != (i = wa.exec(t)); ) {
                    var u = i.index;
                    l < u && Da(n, t.substring(l, u), e, s), Da(n, i[2], e, s, i[1]), l = wa.lastIndex;
                }
                l < t.length && Da(n, t.substring(l, t.length), e, s);
                var h, c = [], p = 0, d = 0, f = e.padding, g = "truncate" === a, y = "truncate" === e.lineOverflow;
                t: for (var m = 0; m < n.lines.length; m++) {
                    for (var v = n.lines[m], _ = 0, x = 0, w = 0; w < v.tokens.length; w++) {
                        var b = (D = v.tokens[w]).styleName && e.rich[D.styleName] || {}, S = D.textPadding = b.padding, M = S ? S[1] + S[3] : 0, T = D.font = b.font || e.font, C = (D.contentHeight = Wr(T), 
                        N(b.height, D.contentHeight));
                        if (D.innerHeight = C, S && (C += S[0] + S[2]), D.height = C, D.lineHeight = St(b.lineHeight, e.lineHeight, C), 
                        D.align = b && b.align || e.align, D.verticalAlign = b && b.verticalAlign || "middle", 
                        y && null != o && p + D.lineHeight > o) {
                            0 < w ? (v.tokens = v.tokens.slice(0, w), L(v, x, _), n.lines = n.lines.slice(0, m + 1)) : n.lines = n.lines.slice(0, m);
                            break t;
                        }
                        S = b.width;
                        var I, k = null == S || "auto" === S;
                        "string" == typeof S && "%" === S.charAt(S.length - 1) ? (D.percentWidth = S, c.push(D), 
                        D.contentWidth = zr(D.text, T)) : (k && (S = (S = b.backgroundColor) && S.image) && (I = void 0, 
                        xa(S = "string" == typeof (h = S) ? (I = ma.get(h)) && I.image : h)) && (D.width = Math.max(D.width, S.width * C / S.height)), 
                        null != (I = g && null != r ? r - x : null) && I < D.width ? !k || I < M ? (D.text = "", 
                        D.width = D.contentWidth = 0) : (D.text = ba(D.text, I - M, T, e.ellipsis, {
                            minChar: e.truncateMinChar
                        }), D.width = D.contentWidth = zr(D.text, T)) : D.contentWidth = zr(D.text, T)), 
                        D.width += M, x += D.width, b && (_ = Math.max(_, D.lineHeight));
                    }
                    L(v, x, _);
                }
                for (n.outerWidth = n.width = N(r, d), n.outerHeight = n.height = N(o, p), n.contentHeight = p, 
                n.contentWidth = d, f && (n.outerWidth += f[1] + f[3], n.outerHeight += f[0] + f[2]), 
                m = 0; m < c.length; m++) {
                    var D, A = (D = c[m]).percentWidth;
                    D.width = parseInt(A, 10) / 100 * n.width;
                }
            }
            return n;
            function L(t, e, n) {
                t.width = e, t.lineHeight = n, p += n, d = Math.max(d, e);
            }
        }
        function Da(t, e, n, i, r) {
            var o, a, s = "" === e, l = r && n.rich[r] || {}, u = t.lines, h = l.font || n.font, c = !1;
            i ? (n = (t = l.padding) ? t[1] + t[3] : 0, null != l.width && "auto" !== l.width ? (t = Gr(l.width, i.width) + n, 
            0 < u.length && t + i.accumWidth > i.width && (o = e.split("\n"), c = !0), i.accumWidth = t) : (t = La(e, h, i.width, i.breakAll, i.accumWidth), 
            i.accumWidth = t.accumWidth + n, a = t.linesWidths, o = t.lines)) : o = e.split("\n");
            for (var p = 0; p < o.length; p++) {
                var d, f, g = o[p], y = new Ca;
                y.styleName = r, y.text = g, y.isLineHolder = !g && !s, "number" == typeof l.width ? y.width = l.width : y.width = a ? a[p] : zr(g, h), 
                p || c ? u.push(new Ia([ y ])) : 1 === (f = (d = (u[u.length - 1] || (u[0] = new Ia)).tokens).length) && d[0].isLineHolder ? d[0] = y : !g && f && !s || d.push(y);
            }
        }
        var Aa = ht(",&?/;] ".split(""), (function(t, e) {
            return t[e] = !0, t;
        }), {});
        function La(t, e, n, i, r) {
            for (var o, a = [], s = [], l = "", u = "", h = 0, c = 0, p = 0; p < t.length; p++) {
                var d, f, g = t.charAt(p);
                "\n" !== g ? (d = zr(g, e), f = !(i || (f = void 0, !(32 <= (f = (f = o = g).charCodeAt(0)) && f <= 591 || 880 <= f && f <= 4351 || 4608 <= f && f <= 5119 || 7680 <= f && f <= 8303)) || Aa[o]), 
                (a.length ? n < c + d : n < r + c + d) ? c ? (l || u) && (c = f ? (l || (l = u, 
                u = "", c = h = 0), a.push(l), s.push(c - h), u += g, l = "", h += d) : (u && (l += u, 
                u = "", h = 0), a.push(l), s.push(c), l = g, d)) : f ? (a.push(u), s.push(h), u = g, 
                h = d) : (a.push(g), s.push(d)) : (c += d, f ? (u += g, h += d) : (u && (l += u, 
                u = "", h = 0), l += g))) : (u && (l += u, c += h), a.push(l), s.push(c), u = l = "", 
                c = h = 0);
            }
            return a.length || l || (l = t, u = "", h = 0), u && (l += u), l && (a.push(l), 
            s.push(c)), 1 === a.length && (c += r), {
                accumWidth: c,
                lines: a,
                linesWidths: s
            };
        }
        var Pa, Oa = "__zr_style_" + Math.round(10 * Math.random()), Ra = {
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: "#000",
            opacity: 1,
            blend: "source-over"
        }, Na = {
            style: {
                shadowBlur: !0,
                shadowOffsetX: !0,
                shadowOffsetY: !0,
                shadowColor: !0,
                opacity: !0
            }
        }, Ea = (Ra[Oa] = !0, [ "z", "z2", "invisible" ]), za = [ "invisible" ], Ba = (n = (u(r, Pa = n), 
        r.prototype._init = function(t) {
            for (var e = R(t), n = 0; n < e.length; n++) {
                var i = e[n];
                "style" === i ? this.useStyle(t[i]) : Pa.prototype.attrKV.call(this, i, t[i]);
            }
            this.style || this.useStyle({});
        }, r.prototype.beforeBrush = function() {}, r.prototype.afterBrush = function() {}, 
        r.prototype.innerBeforeBrush = function() {}, r.prototype.innerAfterBrush = function() {}, 
        r.prototype.shouldBePainted = function(t, e, n, i) {
            var r, o = this.transform;
            if (this.ignore || this.invisible || 0 === this.style.opacity || this.culling && (r = this, 
            t, e, Ba.copy(r.getBoundingRect()), r.transform && Ba.applyTransform(r.transform), 
            Fa.width = t, Fa.height = e, !Ba.intersect(Fa)) || o && !o[0] && !o[3]) return !1;
            if (n && this.__clipPaths) for (var a = 0; a < this.__clipPaths.length; ++a) if (this.__clipPaths[a].isZeroArea()) return !1;
            if (i && this.parent) for (var s = this.parent; s; ) {
                if (s.ignore) return !1;
                s = s.parent;
            }
            return !0;
        }, r.prototype.contain = function(t, e) {
            return this.rectContain(t, e);
        }, r.prototype.traverse = function(t, e) {
            t.call(e, this);
        }, r.prototype.rectContain = function(t, e) {
            t = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(t[0], t[1]);
        }, r.prototype.getPaintRect = function() {
            var t, e, n, i, r, o = this._paintRect;
            return this._paintRect && !this.__dirty || (r = this.transform, t = this.getBoundingRect(), 
            e = (i = this.style).shadowBlur || 0, n = i.shadowOffsetX || 0, i = i.shadowOffsetY || 0, 
            o = this._paintRect || (this._paintRect = new U(0, 0, 0, 0)), r ? U.applyTransform(o, t, r) : o.copy(t), 
            (e || n || i) && (o.width += 2 * e + Math.abs(n), o.height += 2 * e + Math.abs(i), 
            o.x = Math.min(o.x, o.x + n - e), o.y = Math.min(o.y, o.y + i - e)), r = this.dirtyRectTolerance, 
            o.isZero()) || (o.x = Math.floor(o.x - r), o.y = Math.floor(o.y - r), o.width = Math.ceil(o.width + 1 + 2 * r), 
            o.height = Math.ceil(o.height + 1 + 2 * r)), o;
        }, r.prototype.setPrevPaintRect = function(t) {
            t ? (this._prevPaintRect = this._prevPaintRect || new U(0, 0, 0, 0), this._prevPaintRect.copy(t)) : this._prevPaintRect = null;
        }, r.prototype.getPrevPaintRect = function() {
            return this._prevPaintRect;
        }, r.prototype.animateStyle = function(t) {
            return this.animate("style", t);
        }, r.prototype.updateDuringAnimation = function(t) {
            "style" === t ? this.dirtyStyle() : this.markRedraw();
        }, r.prototype.attrKV = function(t, e) {
            "style" !== t ? Pa.prototype.attrKV.call(this, t, e) : this.style ? this.setStyle(e) : this.useStyle(e);
        }, r.prototype.setStyle = function(t, e) {
            return "string" == typeof t ? this.style[t] = e : O(this.style, t), this.dirtyStyle(), 
            this;
        }, r.prototype.dirtyStyle = function(t) {
            t || this.markRedraw(), this.__dirty |= 2, this._rect && (this._rect = null);
        }, r.prototype.dirty = function() {
            this.dirtyStyle();
        }, r.prototype.styleChanged = function() {
            return !!(2 & this.__dirty);
        }, r.prototype.styleUpdated = function() {
            this.__dirty &= -3;
        }, r.prototype.createStyle = function(t) {
            return zt(Ra, t);
        }, r.prototype.useStyle = function(t) {
            t[Oa] || (t = this.createStyle(t)), this.__inHover ? this.__hoverStyle = t : this.style = t, 
            this.dirtyStyle();
        }, r.prototype.isStyleObject = function(t) {
            return t[Oa];
        }, r.prototype._innerSaveToNormal = function(t) {
            Pa.prototype._innerSaveToNormal.call(this, t);
            var e = this._normalState;
            t.style && !e.style && (e.style = this._mergeStyle(this.createStyle(), this.style)), 
            this._savePrimaryToNormal(t, e, Ea);
        }, r.prototype._applyStateObj = function(t, e, n, i, r, o) {
            Pa.prototype._applyStateObj.call(this, t, e, n, i, r, o);
            var a, s = !(e && i);
            if (e && e.style ? r ? i ? a = e.style : (a = this._mergeStyle(this.createStyle(), n.style), 
            this._mergeStyle(a, e.style)) : (a = this._mergeStyle(this.createStyle(), (i ? this : n).style), 
            this._mergeStyle(a, e.style)) : s && (a = n.style), a) if (r) {
                var l = this.style;
                if (this.style = this.createStyle(s ? {} : l), s) for (var u = R(l), h = 0; h < u.length; h++) (p = u[h]) in a && (a[p] = a[p], 
                this.style[p] = l[p]);
                var c = R(a);
                for (h = 0; h < c.length; h++) {
                    var p = c[h];
                    this.style[p] = this.style[p];
                }
                this._transitionState(t, {
                    style: a
                }, o, this.getAnimationStyleProps());
            } else this.useStyle(a);
            var d = this.__inHover ? za : Ea;
            for (h = 0; h < d.length; h++) p = d[h], e && null != e[p] ? this[p] = e[p] : s && null != n[p] && (this[p] = n[p]);
        }, r.prototype._mergeStates = function(t) {
            for (var e, n = Pa.prototype._mergeStates.call(this, t), i = 0; i < t.length; i++) {
                var r = t[i];
                r.style && this._mergeStyle(e = e || {}, r.style);
            }
            return e && (n.style = e), n;
        }, r.prototype._mergeStyle = function(t, e) {
            return O(t, e), t;
        }, r.prototype.getAnimationStyleProps = function() {
            return Na;
        }, r.initDefaultProps = ((n = r.prototype).type = "displayable", n.invisible = !1, 
        n.z = 0, n.z2 = 0, n.zlevel = 0, n.culling = !1, n.cursor = "pointer", n.rectHover = !1, 
        n.incremental = !1, n._rect = null, n.dirtyRectTolerance = 0, void (n.__dirty = 2 | mn)), 
        r), new U(0, 0, 0, 0)), Fa = new U(0, 0, 0, 0);
        function r(t) {
            return Pa.call(this, t) || this;
        }
        var Va = Math.min, Ha = Math.max, Wa = Math.sin, Ga = Math.cos, Ua = 2 * Math.PI, Xa = Gt(), Ya = Gt(), qa = Gt();
        function ja(t, e, n, i, r, o) {
            r[0] = Va(t, n), r[1] = Va(e, i), o[0] = Ha(t, n), o[1] = Ha(e, i);
        }
        var Za = [], Ka = [];
        var X = {
            M: 1,
            L: 2,
            C: 3,
            Q: 4,
            A: 5,
            Z: 6,
            R: 7
        }, $a = [], Qa = [], Ja = [], ts = [], es = [], ns = [], is = Math.min, rs = Math.max, os = Math.cos, as = Math.sin, ss = Math.abs, ls = Math.PI, us = 2 * ls, hs = "undefined" != typeof Float32Array, cs = [];
        function ps(t) {
            return Math.round(t / ls * 1e8) / 1e8 % 2 * ls;
        }
        function ds(t, e) {
            var n = ps(t[0]), i = (n < 0 && (n += us), n - t[0]), r = t[1];
            r += i, !e && us <= r - n ? r = n + us : e && us <= n - r ? r = n - us : !e && r < n ? r = n + (us - ps(n - r)) : e && n < r && (r = n - (us - ps(r - n))), 
            t[0] = n, t[1] = r;
        }
        o.prototype.increaseVersion = function() {
            this._version++;
        }, o.prototype.getVersion = function() {
            return this._version;
        }, o.prototype.setScale = function(t, e, n) {
            0 < (n = n || 0) && (this._ux = ss(n / Sr / t) || 0, this._uy = ss(n / Sr / e) || 0);
        }, o.prototype.setDPR = function(t) {
            this.dpr = t;
        }, o.prototype.setContext = function(t) {
            this._ctx = t;
        }, o.prototype.getContext = function() {
            return this._ctx;
        }, o.prototype.beginPath = function() {
            return this._ctx && this._ctx.beginPath(), this.reset(), this;
        }, o.prototype.reset = function() {
            this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, 
            this._pathLen = 0), this._version++;
        }, o.prototype.moveTo = function(t, e) {
            return this._drawPendingPt(), this.addData(X.M, t, e), this._ctx && this._ctx.moveTo(t, e), 
            this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this;
        }, o.prototype.lineTo = function(t, e) {
            var n = ss(t - this._xi), i = ss(e - this._yi), r = n > this._ux || i > this._uy;
            return this.addData(X.L, t, e), this._ctx && r && this._ctx.lineTo(t, e), r ? (this._xi = t, 
            this._yi = e, this._pendingPtDist = 0) : (r = n * n + i * i) > this._pendingPtDist && (this._pendingPtX = t, 
            this._pendingPtY = e, this._pendingPtDist = r), this;
        }, o.prototype.bezierCurveTo = function(t, e, n, i, r, o) {
            return this._drawPendingPt(), this.addData(X.C, t, e, n, i, r, o), this._ctx && this._ctx.bezierCurveTo(t, e, n, i, r, o), 
            this._xi = r, this._yi = o, this;
        }, o.prototype.quadraticCurveTo = function(t, e, n, i) {
            return this._drawPendingPt(), this.addData(X.Q, t, e, n, i), this._ctx && this._ctx.quadraticCurveTo(t, e, n, i), 
            this._xi = n, this._yi = i, this;
        }, o.prototype.arc = function(t, e, n, i, r, o) {
            this._drawPendingPt(), cs[0] = i, cs[1] = r, ds(cs, o);
            var a = (r = cs[1]) - (i = cs[0]);
            return this.addData(X.A, t, e, n, n, i, a, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, o), 
            this._xi = os(r) * n + t, this._yi = as(r) * n + e, this;
        }, o.prototype.arcTo = function(t, e, n, i, r) {
            return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
        }, o.prototype.rect = function(t, e, n, i) {
            return this._drawPendingPt(), this._ctx && this._ctx.rect(t, e, n, i), this.addData(X.R, t, e, n, i), 
            this;
        }, o.prototype.closePath = function() {
            this._drawPendingPt(), this.addData(X.Z);
            var t = this._ctx, e = this._x0, n = this._y0;
            return t && t.closePath(), this._xi = e, this._yi = n, this;
        }, o.prototype.fill = function(t) {
            t && t.fill(), this.toStatic();
        }, o.prototype.stroke = function(t) {
            t && t.stroke(), this.toStatic();
        }, o.prototype.len = function() {
            return this._len;
        }, o.prototype.setData = function(t) {
            var e = t.length;
            this.data && this.data.length === e || !hs || (this.data = new Float32Array(e));
            for (var n = 0; n < e; n++) this.data[n] = t[n];
            this._len = e;
        }, o.prototype.appendPath = function(t) {
            for (var e = (t = t instanceof Array ? t : [ t ]).length, n = 0, i = this._len, r = 0; r < e; r++) n += t[r].len();
            for (hs && this.data instanceof Float32Array && (this.data = new Float32Array(i + n)), 
            r = 0; r < e; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
            this._len = i;
        }, o.prototype.addData = function(t, e, n, i, r, o, a, s, l) {
            if (this._saveData) {
                var u = this.data;
                this._len + arguments.length > u.length && (this._expandData(), u = this.data);
                for (var h = 0; h < arguments.length; h++) u[this._len++] = arguments[h];
            }
        }, o.prototype._drawPendingPt = function() {
            0 < this._pendingPtDist && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), 
            this._pendingPtDist = 0);
        }, o.prototype._expandData = function() {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t;
            }
        }, o.prototype.toStatic = function() {
            var t;
            this._saveData && (this._drawPendingPt(), (t = this.data) instanceof Array) && (t.length = this._len, 
            hs) && 11 < this._len && (this.data = new Float32Array(t));
        }, o.prototype.getBoundingRect = function() {
            Ja[0] = Ja[1] = es[0] = es[1] = Number.MAX_VALUE, ts[0] = ts[1] = ns[0] = ns[1] = -Number.MAX_VALUE;
            for (var t, e, n, i = this.data, r = 0, o = 0, a = 0, s = 0, l = 0; l < this._len; ) {
                var u = i[l++], h = 1 === l;
                switch (h && (a = r = i[l], s = o = i[l + 1]), u) {
                  case X.M:
                    r = a = i[l++], o = s = i[l++], es[0] = a, es[1] = s, ns[0] = a, ns[1] = s;
                    break;

                  case X.L:
                    ja(r, o, i[l], i[l + 1], es, ns), r = i[l++], o = i[l++];
                    break;

                  case X.C:
                    C = T = M = S = b = w = x = _ = v = m = y = g = f = d = p = c = void 0;
                    var c = r, p = o, d = i[l++], f = i[l++], g = i[l++], y = i[l++], m = i[l], v = i[l + 1], _ = es, x = ns, w = Fn, b = En, S = w(c, d, g, m, Za);
                    _[0] = 1 / 0, _[1] = 1 / 0, x[0] = -1 / 0, x[1] = -1 / 0;
                    for (var M = 0; M < S; M++) {
                        var T = b(c, d, g, m, Za[M]);
                        _[0] = Va(T, _[0]), x[0] = Ha(T, x[0]);
                    }
                    for (S = w(p, f, y, v, Ka), M = 0; M < S; M++) {
                        var C = b(p, f, y, v, Ka[M]);
                        _[1] = Va(C, _[1]), x[1] = Ha(C, x[1]);
                    }
                    _[0] = Va(c, _[0]), x[0] = Ha(c, x[0]), _[0] = Va(m, _[0]), x[0] = Ha(m, x[0]), 
                    _[1] = Va(p, _[1]), x[1] = Ha(p, x[1]), _[1] = Va(v, _[1]), x[1] = Ha(v, x[1]), 
                    r = i[l++], o = i[l++];
                    break;

                  case X.Q:
                    w = r, t = o, P = i[l++], k = i[l++], L = i[l], e = i[l + 1], A = es, O = ns, n = D = n = I = void 0, 
                    I = Wn, n = Ha(Va((D = Un)(w, P, L), 1), 0), D = Ha(Va(D(t, k, e), 1), 0), P = I(w, P, L, n), 
                    n = I(t, k, e, D), A[0] = Va(w, L, P), A[1] = Va(t, e, n), O[0] = Ha(w, L, P), O[1] = Ha(t, e, n), 
                    r = i[l++], o = i[l++];
                    break;

                  case X.A:
                    var I = i[l++], k = i[l++], D = i[l++], A = i[l++], L = i[l++], P = i[l++] + L, O = (l += 1, 
                    !i[l++]);
                    h && (a = os(L) * D + I, s = as(L) * A + k), function(t, e, n, i, r, o, a, s, l) {
                        var u = ie, h = re, c = Math.abs(r - o);
                        if (c % Ua < 1e-4 && 1e-4 < c) return s[0] = t - n, s[1] = e - i, l[0] = t + n, 
                        l[1] = e + i;
                        Xa[0] = Ga(r) * n + t, Xa[1] = Wa(r) * i + e, Ya[0] = Ga(o) * n + t, Ya[1] = Wa(o) * i + e, 
                        u(s, Xa, Ya), h(l, Xa, Ya), (r %= Ua) < 0 && (r += Ua), (o %= Ua) < 0 && (o += Ua), 
                        o < r && !a ? o += Ua : r < o && a && (r += Ua), a && (c = o, o = r, r = c);
                        for (var p = 0; p < o; p += Math.PI / 2) r < p && (qa[0] = Ga(p) * n + t, qa[1] = Wa(p) * i + e, 
                        u(s, qa, s), h(l, qa, l));
                    }(I, k, D, A, L, P, O, es, ns), r = os(P) * D + I, o = as(P) * A + k;
                    break;

                  case X.R:
                    ja(a = r = i[l++], s = o = i[l++], a + i[l++], s + i[l++], es, ns);
                    break;

                  case X.Z:
                    r = a, o = s;
                }
                ie(Ja, Ja, es), re(ts, ts, ns);
            }
            return 0 === l && (Ja[0] = Ja[1] = ts[0] = ts[1] = 0), new U(Ja[0], Ja[1], ts[0] - Ja[0], ts[1] - Ja[1]);
        }, o.prototype._calculateLength = function() {
            var t = this.data, e = this._len, n = this._ux, i = this._uy, r = 0, o = 0, a = 0, s = 0;
            this._pathSegLen || (this._pathSegLen = []);
            for (var l = this._pathSegLen, u = 0, h = 0, c = 0; c < e; ) {
                var p = t[c++], d = 1 === c, f = (d && (a = r = t[c], s = o = t[c + 1]), -1);
                switch (p) {
                  case X.M:
                    r = a = t[c++], o = s = t[c++];
                    break;

                  case X.L:
                    var g = t[c++], y = (_ = t[c++]) - o;
                    (ss(I = g - r) > n || ss(y) > i || c === e - 1) && (f = Math.sqrt(I * I + y * y), 
                    r = g, o = _);
                    break;

                  case X.C:
                    var m = t[c++], v = t[c++], _ = (g = t[c++], t[c++]), x = t[c++], w = t[c++];
                    f = function(t, e, n, i, r, o, a, s, l) {
                        for (var u = t, h = e, c = 0, p = 1 / l, d = 1; d <= l; d++) {
                            var f = d * p, g = En(t, n, r, a, f), y = (f = En(e, i, o, s, f), g - u), m = f - h;
                            c += Math.sqrt(y * y + m * m), u = g, h = f;
                        }
                        return c;
                    }(r, o, m, v, g, _, x, w, 10), r = x, o = w;
                    break;

                  case X.Q:
                    f = function(t, e, n, i, r, o, a) {
                        for (var s = t, l = e, u = 0, h = 1 / a, c = 1; c <= a; c++) {
                            var p = c * h, d = Wn(t, n, r, p), f = (p = Wn(e, i, o, p), d - s), g = p - l;
                            u += Math.sqrt(f * f + g * g), s = d, l = p;
                        }
                        return u;
                    }(r, o, m = t[c++], v = t[c++], g = t[c++], _ = t[c++], 10), r = g, o = _;
                    break;

                  case X.A:
                    x = t[c++], w = t[c++];
                    var b = t[c++], S = t[c++], M = t[c++], T = t[c++], C = T + M;
                    c += 1, d && (a = os(M) * b + x, s = as(M) * S + w), f = rs(b, S) * is(us, Math.abs(T)), 
                    r = os(C) * b + x, o = as(C) * S + w;
                    break;

                  case X.R:
                    a = r = t[c++], s = o = t[c++], f = 2 * t[c++] + 2 * t[c++];
                    break;

                  case X.Z:
                    var I = a - r;
                    y = s - o;
                    f = Math.sqrt(I * I + y * y), r = a, o = s;
                }
                0 <= f && (u += l[h++] = f);
            }
            return this._pathLen = u;
        }, o.prototype.rebuildPath = function(t, e) {
            var n, i, r, o, a, s, l, u, h = this.data, E = this._ux, z = this._uy, B = this._len, c = e < 1, p = 0, d = 0, f = 0;
            if (!c || (this._pathSegLen || this._calculateLength(), a = this._pathSegLen, s = e * this._pathLen)) t: for (var g = 0; g < B; ) {
                var y, m = h[g++], F = 1 === g;
                switch (F && (n = r = h[g], i = o = h[g + 1]), m !== X.L && 0 < f && (t.lineTo(l, u), 
                f = 0), m) {
                  case X.M:
                    n = r = h[g++], i = o = h[g++], t.moveTo(r, o);
                    break;

                  case X.L:
                    var v = h[g++], _ = h[g++], x = ss(v - r), w = ss(_ - o);
                    if (E < x || z < w) {
                        if (c) {
                            if (p + (y = a[d++]) > s) {
                                var b = (s - p) / y;
                                t.lineTo(r * (1 - b) + v * b, o * (1 - b) + _ * b);
                                break t;
                            }
                            p += y;
                        }
                        t.lineTo(v, _), r = v, o = _, f = 0;
                    } else {
                        x = x * x + w * w;
                        f < x && (l = v, u = _, f = x);
                    }
                    break;

                  case X.C:
                    var S = h[g++], M = h[g++], T = h[g++], C = h[g++];
                    w = h[g++], x = h[g++];
                    if (c) {
                        if (p + (y = a[d++]) > s) {
                            Vn(r, S, T, w, b = (s - p) / y, $a), Vn(o, M, C, x, b, Qa), t.bezierCurveTo($a[1], Qa[1], $a[2], Qa[2], $a[3], Qa[3]);
                            break t;
                        }
                        p += y;
                    }
                    t.bezierCurveTo(S, M, T, C, w, x), r = w, o = x;
                    break;

                  case X.Q:
                    if (S = h[g++], M = h[g++], T = h[g++], C = h[g++], c) {
                        if (p + (y = a[d++]) > s) {
                            Xn(r, S, T, b = (s - p) / y, $a), Xn(o, M, C, b, Qa), t.quadraticCurveTo($a[1], Qa[1], $a[2], Qa[2]);
                            break t;
                        }
                        p += y;
                    }
                    t.quadraticCurveTo(S, M, T, C), r = T, o = C;
                    break;

                  case X.A:
                    var I = h[g++], k = h[g++], D = h[g++], A = h[g++], L = h[g++], P = h[g++], O = h[g++], V = !h[g++], H = A < D ? D : A, R = .001 < ss(D - A), N = L + P, W = !1;
                    if (c && (p + (y = a[d++]) > s && (N = L + P * (s - p) / y, W = !0), p += y), R && t.ellipse ? t.ellipse(I, k, D, A, O, L, N, V) : t.arc(I, k, H, L, N, V), 
                    W) break t;
                    F && (n = os(L) * D + I, i = as(L) * A + k), r = os(N) * D + I, o = as(N) * A + k;
                    break;

                  case X.R:
                    n = r = h[g], i = o = h[g + 1], v = h[g++], _ = h[g++];
                    P = h[g++], R = h[g++];
                    if (c) {
                        if (p + (y = a[d++]) > s) {
                            O = s - p;
                            t.moveTo(v, _), t.lineTo(v + is(O, P), _), 0 < (O -= P) && t.lineTo(v + P, _ + is(O, R)), 
                            0 < (O -= R) && t.lineTo(v + rs(P - O, 0), _ + R), 0 < (O -= P) && t.lineTo(v, _ + rs(R - O, 0));
                            break t;
                        }
                        p += y;
                    }
                    t.rect(v, _, P, R);
                    break;

                  case X.Z:
                    if (c) {
                        if (p + (y = a[d++]) > s) {
                            t.lineTo(r * (1 - (b = (s - p) / y)) + n * b, o * (1 - b) + i * b);
                            break t;
                        }
                        p += y;
                    }
                    t.closePath(), r = n, o = i;
                }
            }
        }, o.prototype.clone = function() {
            var t = new o, e = this.data;
            return t.data = e.slice ? e.slice() : Array.prototype.slice.call(e), t._len = this._len, 
            t;
        }, o.CMD = X, o.initDefaultProps = ((Au = o.prototype)._saveData = !0, Au._ux = 0, 
        Au._uy = 0, Au._pendingPtDist = 0, void (Au._version = 0));
        var fs = o;
        function o(t) {
            this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, 
            t && (this._saveData = !1), this._saveData && (this.data = []);
        }
        function gs(t, e, n, i, r, o, a) {
            var s;
            if (0 !== r) return s = 0, !(e + r < a && i + r < a || a < e - r && a < i - r || t + r < o && n + r < o || o < t - r && o < n - r) && (t === n ? Math.abs(o - t) <= r / 2 : (o = (s = (e - i) / (t - n)) * o - a + (t * i - n * e) / (t - n)) * o / (s * s + 1) <= r / 2 * r / 2);
        }
        var ys = 2 * Math.PI;
        function ms(t) {
            return (t %= ys) < 0 && (t += ys), t;
        }
        var vs = 2 * Math.PI;
        function _s(t, e, n, i, r, o) {
            return e < o && i < o || o < e && o < i || i === e ? 0 : (n = (o = (o - e) / (i - e)) * (n - t) + t) === r ? 1 / 0 : r < n ? 1 != o && 0 != o ? i < e ? 1 : -1 : i < e ? .5 : -.5 : 0;
        }
        var xs = fs.CMD, ws = 2 * Math.PI, bs = 1e-4;
        var Ss = [ -1, -1, -1 ], Ms = [ -1, -1 ];
        function Ts(t, e, n, i, r, o, a, s, l, u) {
            if (e < u && i < u && o < u && s < u || u < e && u < i && u < o && u < s) return 0;
            var h = Bn(e, i, o, s, u, Ss);
            if (0 === h) return 0;
            for (var c, p = 0, d = -1, f = void 0, g = void 0, y = 0; y < h; y++) {
                var m = Ss[y], v = 0 === m || 1 === m ? .5 : 1;
                En(t, n, r, a, m) < l || (d < 0 && (d = Fn(e, i, o, s, Ms), Ms[1] < Ms[0] && 1 < d && (c = void 0, 
                c = Ms[0], Ms[0] = Ms[1], Ms[1] = c), f = En(e, i, o, s, Ms[0]), 1 < d) && (g = En(e, i, o, s, Ms[1])), 
                2 === d ? m < Ms[0] ? p += f < e ? v : -v : m < Ms[1] ? p += g < f ? v : -v : p += s < g ? v : -v : m < Ms[0] ? p += f < e ? v : -v : p += s < f ? v : -v);
            }
            return p;
        }
        function Cs(t, e, n, i, r, o, a, s) {
            if (e < s && i < s && o < s || s < e && s < i && s < o) return 0;
            c = Ss, h = (l = e) - 2 * (u = i) + (h = o), u = 2 * (u - l), l -= s, s = 0, Rn(h) ? Nn(u) && 0 <= (p = -l / u) && p <= 1 && (c[s++] = p) : Rn(l = u * u - 4 * h * l) ? 0 <= (p = -u / (2 * h)) && p <= 1 && (c[s++] = p) : 0 < l && (d = (-u - (l = In(l))) / (2 * h), 
            0 <= (p = (-u + l) / (2 * h)) && p <= 1 && (c[s++] = p), 0 <= d) && d <= 1 && (c[s++] = d);
            var l, u, h, c, p, d, f = s;
            if (0 === f) return 0;
            var g = Un(e, i, o);
            if (0 <= g && g <= 1) {
                for (var y = 0, m = Wn(e, i, o, g), v = 0; v < f; v++) {
                    var _ = 0 === Ss[v] || 1 === Ss[v] ? .5 : 1;
                    Wn(t, n, r, Ss[v]) < a || (Ss[v] < g ? y += m < e ? _ : -_ : y += o < m ? _ : -_);
                }
                return y;
            }
            return _ = 0 === Ss[0] || 1 === Ss[0] ? .5 : 1, Wn(t, n, r, Ss[0]) < a ? 0 : o < e ? _ : -_;
        }
        function Is(t, e, n, i, r) {
            for (var o, a = t.data, s = t.len(), l = 0, u = 0, h = 0, c = 0, p = 0, d = 0; d < s; ) {
                var f = a[d++], g = 1 === d;
                switch (f === xs.M && 1 < d && (n || (l += _s(u, h, c, p, i, r))), g && (c = u = a[d], 
                p = h = a[d + 1]), f) {
                  case xs.M:
                    u = c = a[d++], h = p = a[d++];
                    break;

                  case xs.L:
                    if (n) {
                        if (gs(u, h, a[d], a[d + 1], e, i, r)) return !0;
                    } else l += _s(u, h, a[d], a[d + 1], i, r) || 0;
                    u = a[d++], h = a[d++];
                    break;

                  case xs.C:
                    if (n) {
                        if (function(t, e, n, i, r, o, a, s, l, u, h) {
                            if (0 !== l) return !(e + l < h && i + l < h && o + l < h && s + l < h || h < e - l && h < i - l && h < o - l && h < s - l || t + l < u && n + l < u && r + l < u && a + l < u || u < t - l && u < n - l && u < r - l && u < a - l) && Hn(t, e, n, i, r, o, a, s, u, h, null) <= l / 2;
                        }(u, h, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], e, i, r)) return !0;
                    } else l += Ts(u, h, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, r) || 0;
                    u = a[d++], h = a[d++];
                    break;

                  case xs.Q:
                    if (n) {
                        if (function(t, e, n, i, r, o, a, s, l) {
                            if (0 !== a) return !(e + a < l && i + a < l && o + a < l || l < e - a && l < i - a && l < o - a || t + a < s && n + a < s && r + a < s || s < t - a && s < n - a && s < r - a) && Yn(t, e, n, i, r, o, s, l, null) <= a / 2;
                        }(u, h, a[d++], a[d++], a[d], a[d + 1], e, i, r)) return !0;
                    } else l += Cs(u, h, a[d++], a[d++], a[d], a[d + 1], i, r) || 0;
                    u = a[d++], h = a[d++];
                    break;

                  case xs.A:
                    var y = a[d++], m = a[d++], v = a[d++], _ = a[d++], x = a[d++], w = a[d++], b = (d += 1, 
                    !!(1 - a[d++])), S = Math.cos(x) * v + y, M = Math.sin(x) * _ + m, T = (g ? (c = S, 
                    p = M) : l += _s(u, h, S, M, i, r), (i - y) * _ / v + y);
                    if (n) {
                        if (function(t, e, n, i, r, o, a, s, l) {
                            if (0 !== a) return a, s -= t, l -= e, !(n < (t = Math.sqrt(s * s + l * l)) - a || t + a < n) && (Math.abs(i - r) % vs < 1e-4 || ((r = o ? (e = i, 
                            i = ms(r), ms(e)) : (i = ms(i), ms(r))) < i && (r += vs), (t = Math.atan2(l, s)) < 0 && (t += vs), 
                            i <= t && t <= r) || i <= t + vs && t + vs <= r);
                        }(y, m, _, x, x + w, b, e, T, r)) return !0;
                    } else l += function(t, e, n, i, r, o, a, s) {
                        if ((s -= e) > n || s < -n) return 0;
                        e = Math.sqrt(n * n - s * s);
                        if (Ss[0] = -e, Ss[1] = e, (n = Math.abs(i - r)) < 1e-4) return 0;
                        if (ws - 1e-4 <= n) return r = ws, h = o ? 1 : -1, a >= Ss[i = 0] + t && a <= Ss[1] + t ? h : 0;
                        r < i && (e = i, i = r, r = e), i < 0 && (i += ws, r += ws);
                        for (var l = 0, u = 0; u < 2; u++) {
                            var h, c = Ss[u];
                            a < c + t && (h = o ? 1 : -1, i <= (c = (c = Math.atan2(s, c)) < 0 ? ws + c : c) && c <= r || i <= c + ws && c + ws <= r) && (l += h = c > Math.PI / 2 && c < 1.5 * Math.PI ? -h : h);
                        }
                        return l;
                    }(y, m, _, x, x + w, b, T, r);
                    u = Math.cos(x + w) * v + y, h = Math.sin(x + w) * _ + m;
                    break;

                  case xs.R:
                    if (c = u = a[d++], p = h = a[d++], S = c + a[d++], M = p + a[d++], n) {
                        if (gs(c, p, S, p, e, i, r) || gs(S, p, S, M, e, i, r) || gs(S, M, c, M, e, i, r) || gs(c, M, c, p, e, i, r)) return !0;
                    } else l = (l += _s(S, p, S, M, i, r)) + _s(c, M, c, p, i, r);
                    break;

                  case xs.Z:
                    if (n) {
                        if (gs(u, h, c, p, e, i, r)) return !0;
                    } else l += _s(u, h, c, p, i, r);
                    u = c, h = p;
                }
            }
            return n || (t = h, o = p, Math.abs(t - o) < bs) || (l += _s(u, h, c, p, i, r) || 0), 
            0 !== l;
        }
        var ks, Ds = B({
            fill: "#000",
            stroke: null,
            strokePercent: 1,
            fillOpacity: 1,
            strokeOpacity: 1,
            lineDashOffset: 0,
            lineWidth: 1,
            lineCap: "butt",
            miterLimit: 10,
            strokeNoScale: !1,
            strokeFirst: !1
        }, Ra), As = {
            style: B({
                fill: !0,
                stroke: !0,
                strokePercent: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineDashOffset: !0,
                lineWidth: !0,
                miterLimit: !0
            }, Na.style)
        }, Ls = Rr.concat([ "invisible", "culling", "z", "z2", "zlevel", "parent" ]), Z = (u(a, ks = n), 
        a.prototype.update = function() {
            var e = this, t = (ks.prototype.update.call(this), this.style);
            if (t.decal) {
                var n, i = this._decalEl = this._decalEl || new a, r = (i.buildPath === a.prototype.buildPath && (i.buildPath = function(t) {
                    e.buildPath(t, e.shape);
                }), i.silent = !0, i.style);
                for (n in t) r[n] !== t[n] && (r[n] = t[n]);
                r.fill = t.fill ? t.decal : null, r.decal = null, r.shadowColor = null, t.strokeFirst && (r.stroke = null);
                for (var o = 0; o < Ls.length; ++o) i[Ls[o]] = this[Ls[o]];
                i.__dirty |= mn;
            } else this._decalEl && (this._decalEl = null);
        }, a.prototype.getDecalElement = function() {
            return this._decalEl;
        }, a.prototype._init = function(t) {
            var e = R(t), n = (this.shape = this.getDefaultShape(), this.getDefaultStyle());
            n && this.useStyle(n);
            for (var i = 0; i < e.length; i++) {
                var r = e[i], o = t[r];
                "style" === r ? this.style ? O(this.style, o) : this.useStyle(o) : "shape" === r ? O(this.shape, o) : ks.prototype.attrKV.call(this, r, o);
            }
            this.style || this.useStyle({});
        }, a.prototype.getDefaultStyle = function() {
            return null;
        }, a.prototype.getDefaultShape = function() {
            return {};
        }, a.prototype.canBeInsideText = function() {
            return this.hasFill();
        }, a.prototype.getInsideTextFill = function() {
            var t, e = this.style.fill;
            if ("none" !== e) {
                if (H(e)) return .5 < (t = wi(e, 0)) ? Mr : .2 < t ? "#eee" : Tr;
                if (e) return Tr;
            }
            return Mr;
        }, a.prototype.getInsideTextStroke = function(t) {
            var e = this.style.fill;
            if (H(e)) {
                var n = this.__zr;
                if (!(!n || !n.isDarkMode()) == wi(t, 0) < .4) return e;
            }
        }, a.prototype.buildPath = function(t, e, n) {}, a.prototype.pathUpdated = function() {
            this.__dirty &= ~vn;
        }, a.prototype.getUpdatedPathProxy = function(t) {
            return this.path || this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, t), 
            this.path;
        }, a.prototype.createPathProxy = function() {
            this.path = new fs(!1);
        }, a.prototype.hasStroke = function() {
            var t = this.style, e = t.stroke;
            return !(null == e || "none" === e || !(0 < t.lineWidth));
        }, a.prototype.hasFill = function() {
            var t = this.style.fill;
            return null != t && "none" !== t;
        }, a.prototype.getBoundingRect = function() {
            var t, e, n = this._rect, i = this.style, r = !n;
            return r && (t = !1, this.path || (t = !0, this.createPathProxy()), e = this.path, 
            (t || this.__dirty & vn) && (e.beginPath(), this.buildPath(e, this.shape, !1), this.pathUpdated()), 
            n = e.getBoundingRect()), this._rect = n, this.hasStroke() && this.path && 0 < this.path.len() ? (t = this._rectStroke || (this._rectStroke = n.clone()), 
            (this.__dirty || r) && (t.copy(n), e = i.strokeNoScale ? this.getLineScale() : 1, 
            r = i.lineWidth, this.hasFill() || (i = this.strokeContainThreshold, r = Math.max(r, null == i ? 4 : i)), 
            1e-10 < e) && (t.width += r / e, t.height += r / e, t.x -= r / e / 2, t.y -= r / e / 2), 
            t) : n;
        }, a.prototype.contain = function(t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                n = this.path;
                if (this.hasStroke()) {
                    i = r.lineWidth, r = r.strokeNoScale ? this.getLineScale() : 1;
                    if (1e-10 < r && (this.hasFill() || (i = Math.max(i, this.strokeContainThreshold)), 
                    Is(n, i / r, !0, t, e))) return !0;
                }
                if (this.hasFill()) return Is(n, 0, !1, t, e);
            }
            return !1;
        }, a.prototype.dirtyShape = function() {
            this.__dirty |= vn, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), 
            this.markRedraw();
        }, a.prototype.dirty = function() {
            this.dirtyStyle(), this.dirtyShape();
        }, a.prototype.animateShape = function(t) {
            return this.animate("shape", t);
        }, a.prototype.updateDuringAnimation = function(t) {
            "style" === t ? this.dirtyStyle() : "shape" === t ? this.dirtyShape() : this.markRedraw();
        }, a.prototype.attrKV = function(t, e) {
            "shape" === t ? this.setShape(e) : ks.prototype.attrKV.call(this, t, e);
        }, a.prototype.setShape = function(t, e) {
            var n = (n = this.shape) || (this.shape = {});
            return "string" == typeof t ? n[t] = e : O(n, t), this.dirtyShape(), this;
        }, a.prototype.shapeChanged = function() {
            return !!(this.__dirty & vn);
        }, a.prototype.createStyle = function(t) {
            return zt(Ds, t);
        }, a.prototype._innerSaveToNormal = function(t) {
            ks.prototype._innerSaveToNormal.call(this, t);
            var e = this._normalState;
            t.shape && !e.shape && (e.shape = O({}, this.shape));
        }, a.prototype._applyStateObj = function(t, e, n, i, r, o) {
            ks.prototype._applyStateObj.call(this, t, e, n, i, r, o);
            var a, s = !(e && i);
            if (e && e.shape ? r ? i ? a = e.shape : (a = O({}, n.shape), O(a, e.shape)) : (a = O({}, (i ? this : n).shape), 
            O(a, e.shape)) : s && (a = n.shape), a) if (r) {
                this.shape = O({}, this.shape);
                for (var l = {}, u = R(a), h = 0; h < u.length; h++) {
                    var c = u[h];
                    "object" == typeof a[c] ? this.shape[c] = a[c] : l[c] = a[c];
                }
                this._transitionState(t, {
                    shape: l
                }, o);
            } else this.shape = a, this.dirtyShape();
        }, a.prototype._mergeStates = function(t) {
            for (var e, n = ks.prototype._mergeStates.call(this, t), i = 0; i < t.length; i++) {
                var r = t[i];
                r.shape && this._mergeStyle(e = e || {}, r.shape);
            }
            return e && (n.shape = e), n;
        }, a.prototype.getAnimationStyleProps = function() {
            return As;
        }, a.prototype.isZeroArea = function() {
            return !1;
        }, a.extend = function(n) {
            u(r, i = a), r.prototype.getDefaultStyle = function() {
                return _(n.style);
            }, r.prototype.getDefaultShape = function() {
                return _(n.shape);
            };
            var i, t, e = r;
            function r(t) {
                var e = i.call(this, t) || this;
                return n.init && n.init.call(e, t), e;
            }
            for (t in n) "function" == typeof n[t] && (e.prototype[t] = n[t]);
            return e;
        }, a.initDefaultProps = ((Au = a.prototype).type = "path", Au.strokeContainThreshold = 5, 
        Au.segmentIgnoreThreshold = 0, Au.subPixelOptimize = !1, Au.autoBatch = !1, void (Au.__dirty = 2 | mn | vn)), 
        a);
        function a(t) {
            return ks.call(this, t) || this;
        }
        var Ps, Os = B({
            strokeFirst: !0,
            font: K,
            x: 0,
            y: 0,
            textAlign: "left",
            textBaseline: "top",
            miterLimit: 2
        }, Ds), Rs = (u(Ns, Ps = n), Ns.prototype.hasStroke = function() {
            var t = this.style, e = t.stroke;
            return null != e && "none" !== e && 0 < t.lineWidth;
        }, Ns.prototype.hasFill = function() {
            var t = this.style.fill;
            return null != t && "none" !== t;
        }, Ns.prototype.createStyle = function(t) {
            return zt(Os, t);
        }, Ns.prototype.setBoundingRect = function(t) {
            this._rect = t;
        }, Ns.prototype.getBoundingRect = function() {
            var t, e = this.style;
            return this._rect || (null != (t = e.text) ? t += "" : t = "", (t = Fr(t, e.font, e.textAlign, e.textBaseline)).x += e.x || 0, 
            t.y += e.y || 0, this.hasStroke() && (e = e.lineWidth, t.x -= e / 2, t.y -= e / 2, 
            t.width += e, t.height += e), this._rect = t), this._rect;
        }, Ns.initDefaultProps = void (Ns.prototype.dirtyRectTolerance = 10), Ns);
        function Ns() {
            return null !== Ps && Ps.apply(this, arguments) || this;
        }
        Rs.prototype.type = "tspan";
        var Es = B({
            x: 0,
            y: 0
        }, Ra), zs = {
            style: B({
                x: !0,
                y: !0,
                width: !0,
                height: !0,
                sx: !0,
                sy: !0,
                sWidth: !0,
                sHeight: !0
            }, Na.style)
        };
        u(Vs, Bs = n), Vs.prototype.createStyle = function(t) {
            return zt(Es, t);
        }, Vs.prototype._getSize = function(t) {
            var e, n = this.style, i = n[t];
            return null != i ? i : (i = (i = n.image) && "string" != typeof i && i.width && i.height ? n.image : this.__image) ? null == (e = n[n = "width" === t ? "height" : "width"]) ? i[t] : i[t] / i[n] * e : 0;
        }, Vs.prototype.getWidth = function() {
            return this._getSize("width");
        }, Vs.prototype.getHeight = function() {
            return this._getSize("height");
        }, Vs.prototype.getAnimationStyleProps = function() {
            return zs;
        }, Vs.prototype.getBoundingRect = function() {
            var t = this.style;
            return this._rect || (this._rect = new U(t.x || 0, t.y || 0, this.getWidth(), this.getHeight())), 
            this._rect;
        };
        var Bs, Fs = Vs;
        function Vs() {
            return null !== Bs && Bs.apply(this, arguments) || this;
        }
        Fs.prototype.type = "image";
        var Hs = Math.round;
        function Ws(t, e, n) {
            var i, r, o;
            if (e) return i = e.x1, r = e.x2, o = e.y1, e = e.y2, t.x1 = i, t.x2 = r, t.y1 = o, 
            t.y2 = e, (n = n && n.lineWidth) && (Hs(2 * i) === Hs(2 * r) && (t.x1 = t.x2 = Gs(i, n, !0)), 
            Hs(2 * o) === Hs(2 * e)) && (t.y1 = t.y2 = Gs(o, n, !0)), t;
        }
        function Gs(t, e, n) {
            var i;
            return e ? ((i = Hs(2 * t)) + Hs(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2 : t;
        }
        function Us() {
            this.x = 0, this.y = 0, this.width = 0, this.height = 0;
        }
        var Xs, Ys = {}, qs = (u(js, Xs = Z), js.prototype.getDefaultShape = function() {
            return new Us;
        }, js.prototype.buildPath = function(t, e) {
            var n, i, r, o, a, s, l, u, h, c, p, d, f, g;
            this.subPixelOptimize ? (n = (a = function(t, e, n) {
                var i, r, o;
                if (e) return i = e.x, r = e.y, o = e.width, e = e.height, t.x = i, t.y = r, t.width = o, 
                t.height = e, (n = n && n.lineWidth) && (t.x = Gs(i, n, !0), t.y = Gs(r, n, !0), 
                t.width = Math.max(Gs(i + o, n, !1) - t.x, 0 === o ? 0 : 1), t.height = Math.max(Gs(r + e, n, !1) - t.y, 0 === e ? 0 : 1)), 
                t;
            }(Ys, e, this.style)).x, i = a.y, r = a.width, o = a.height, a.r = e.r, e = a) : (n = e.x, 
            i = e.y, r = e.width, o = e.height), e.r ? (a = t, p = e.x, d = e.y, f = e.width, 
            g = e.height, e = e.r, f < 0 && (p += f, f = -f), g < 0 && (d += g, g = -g), "number" == typeof e ? s = l = u = h = e : e instanceof Array ? 1 === e.length ? s = l = u = h = e[0] : 2 === e.length ? (s = u = e[0], 
            l = h = e[1]) : 3 === e.length ? (s = e[0], l = h = e[1], u = e[2]) : (s = e[0], 
            l = e[1], u = e[2], h = e[3]) : s = l = u = h = 0, f < s + l && (s *= f / (c = s + l), 
            l *= f / c), f < u + h && (u *= f / (c = u + h), h *= f / c), g < l + u && (l *= g / (c = l + u), 
            u *= g / c), g < s + h && (s *= g / (c = s + h), h *= g / c), a.moveTo(p + s, d), 
            a.lineTo(p + f - l, d), 0 !== l && a.arc(p + f - l, d + l, l, -Math.PI / 2, 0), 
            a.lineTo(p + f, d + g - u), 0 !== u && a.arc(p + f - u, d + g - u, u, 0, Math.PI / 2), 
            a.lineTo(p + h, d + g), 0 !== h && a.arc(p + h, d + g - h, h, Math.PI / 2, Math.PI), 
            a.lineTo(p, d + s), 0 !== s && a.arc(p + s, d + s, s, Math.PI, 1.5 * Math.PI)) : t.rect(n, i, r, o);
        }, js.prototype.isZeroArea = function() {
            return !this.shape.width || !this.shape.height;
        }, js);
        function js(t) {
            return Xs.call(this, t) || this;
        }
        qs.prototype.type = "rect";
        var Zs, Ks = {
            fill: "#000"
        }, $s = {
            style: B({
                fill: !0,
                stroke: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineWidth: !0,
                fontSize: !0,
                lineHeight: !0,
                width: !0,
                height: !0,
                textShadowColor: !0,
                textShadowBlur: !0,
                textShadowOffsetX: !0,
                textShadowOffsetY: !0,
                backgroundColor: !0,
                padding: !0,
                borderColor: !0,
                borderWidth: !0,
                borderRadius: !0
            }, Na.style)
        }, Qs = (u(nl, Zs = n), nl.prototype.childrenRef = function() {
            return this._children;
        }, nl.prototype.update = function() {
            Zs.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
            for (var t = 0; t < this._children.length; t++) {
                var e = this._children[t];
                e.zlevel = this.zlevel, e.z = this.z, e.z2 = this.z2, e.culling = this.culling, 
                e.cursor = this.cursor, e.invisible = this.invisible;
            }
        }, nl.prototype.updateTransform = function() {
            var t = this.innerTransformable;
            t ? (t.updateTransform(), t.transform && (this.transform = t.transform)) : Zs.prototype.updateTransform.call(this);
        }, nl.prototype.getLocalTransform = function(t) {
            var e = this.innerTransformable;
            return e ? e.getLocalTransform(t) : Zs.prototype.getLocalTransform.call(this, t);
        }, nl.prototype.getComputedTransform = function() {
            return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), 
            Zs.prototype.getComputedTransform.call(this);
        }, nl.prototype._updateSubTexts = function() {
            var t;
            this._childCursor = 0, al(t = this.style), E(t.rich, al), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), 
            this._children.length = this._childCursor, this.styleUpdated();
        }, nl.prototype.addSelfToZr = function(t) {
            Zs.prototype.addSelfToZr.call(this, t);
            for (var e = 0; e < this._children.length; e++) this._children[e].__zr = t;
        }, nl.prototype.removeSelfFromZr = function(t) {
            Zs.prototype.removeSelfFromZr.call(this, t);
            for (var e = 0; e < this._children.length; e++) this._children[e].__zr = null;
        }, nl.prototype.getBoundingRect = function() {
            if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
                for (var t = new U(0, 0, 0, 0), e = this._children, n = [], i = null, r = 0; r < e.length; r++) {
                    var o = e[r], a = o.getBoundingRect();
                    o = o.getLocalTransform(n);
                    o ? (t.copy(a), t.applyTransform(o), (i = i || t.clone()).union(t)) : (i = i || a.clone()).union(a);
                }
                this._rect = i || t;
            }
            return this._rect;
        }, nl.prototype.setDefaultTextStyle = function(t) {
            this._defaultStyle = t || Ks;
        }, nl.prototype.setTextContent = function(t) {}, nl.prototype._mergeStyle = function(t, e) {
            var n, i;
            return e && (n = e.rich, i = t.rich || n && {}, O(t, e), n && i ? (this._mergeRich(i, n), 
            t.rich = i) : i && (t.rich = i)), t;
        }, nl.prototype._mergeRich = function(t, e) {
            for (var n = R(e), i = 0; i < n.length; i++) {
                var r = n[i];
                t[r] = t[r] || {}, O(t[r], e[r]);
            }
        }, nl.prototype.getAnimationStyleProps = function() {
            return $s;
        }, nl.prototype._getOrCreateChild = function(t) {
            var e = this._children[this._childCursor];
            return e && e instanceof t || (e = new t), (this._children[this._childCursor++] = e).__zr = this.__zr, 
            e.parent = this, e;
        }, nl.prototype._updatePlainTexts = function() {
            var t, e = this.style, n = e.font || K, i = e.padding, r = function(t, e) {
                null != t && (t += "");
                var n, i = e.overflow, r = e.padding, o = e.font, a = "truncate" === i, s = Wr(o), l = N(e.lineHeight, s), u = !!e.backgroundColor, h = "truncate" === e.lineOverflow, c = e.width, p = (i = (n = null == c || "break" !== i && "breakAll" !== i ? t ? t.split("\n") : [] : t ? La(t, e.font, c, "breakAll" === i, 0).lines : []).length * l, 
                N(e.height, i));
                if (p < i && h && (h = Math.floor(p / l), n = n.slice(0, h)), t && a && null != c) for (var d = Sa(c, o, e.ellipsis, {
                    minChar: e.truncateMinChar,
                    placeholder: e.placeholder
                }), f = 0; f < n.length; f++) n[f] = Ma(n[f], d);
                h = p;
                var g = 0;
                for (f = 0; f < n.length; f++) g = Math.max(zr(n[f], o), g);
                return null == c && (c = g), t = g, r && (h += r[0] + r[2], t += r[1] + r[3], c += r[1] + r[3]), 
                {
                    lines: n,
                    height: p,
                    outerWidth: t = u ? c : t,
                    outerHeight: h,
                    lineHeight: l,
                    calculatedLineHeight: s,
                    contentWidth: g,
                    contentHeight: i,
                    width: c
                };
            }(hl(e), e), o = cl(e), a = !!e.backgroundColor, s = r.outerHeight, l = r.outerWidth, u = r.contentWidth, h = r.lines, c = r.lineHeight, p = this._defaultStyle, d = e.x || 0, f = e.y || 0, g = e.align || p.align || "left", y = e.verticalAlign || p.verticalAlign || "top", m = d, v = Hr(f, r.contentHeight, y);
            (o || i) && (t = Vr(d, l, g), f = Hr(f, s, y), o) && this._renderBackground(e, e, t, f, l, s), 
            v += c / 2, i && (m = ul(d, g, i), "top" === y ? v += i[0] : "bottom" === y && (v -= i[2]));
            for (var _ = 0, x = (o = !1, ll(("fill" in e ? e : (o = !0, p)).fill)), w = (sl("stroke" in e ? e.stroke : a || p.autoStroke && !o ? null : (_ = 2, 
            p.stroke))), b = 0 < e.textShadowBlur, S = null != e.width && ("truncate" === e.overflow || "break" === e.overflow || "breakAll" === e.overflow), M = r.calculatedLineHeight, T = 0; T < h.length; T++) {
                var C = this._getOrCreateChild(Rs), I = C.createStyle();
                C.useStyle(I), I.text = h[T], I.x = m, I.y = v, g && (I.textAlign = g), I.textBaseline = "middle", 
                I.opacity = e.opacity, I.strokeFirst = !0, b && (I.shadowBlur = e.textShadowBlur || 0, 
                I.shadowColor = e.textShadowColor || "transparent", I.shadowOffsetX = e.textShadowOffsetX || 0, 
                I.shadowOffsetY = e.textShadowOffsetY || 0), I.stroke = w, I.fill = x, w && (I.lineWidth = e.lineWidth || _, 
                I.lineDash = e.lineDash, I.lineDashOffset = e.lineDashOffset || 0), I.font = n, 
                rl(I, e), v += c, S && C.setBoundingRect(new U(Vr(I.x, e.width, I.textAlign), Hr(I.y, M, I.textBaseline), u, M));
            }
        }, nl.prototype._updateRichTexts = function() {
            var t = this.style, e = ka(hl(t), t), n = e.width, i = e.outerWidth, r = e.outerHeight, o = t.padding, a = t.x || 0, s = t.y || 0, l = this._defaultStyle, u = t.align || l.align, h = (l = t.verticalAlign || l.verticalAlign, 
            a = Vr(a, i, u), u = Hr(s, r, l), a), c = u, p = (o && (h += o[3], c += o[0]), h + n);
            cl(t) && this._renderBackground(t, t, a, u, i, r);
            for (var d = !!t.backgroundColor, f = 0; f < e.lines.length; f++) {
                for (var g = e.lines[f], y = g.tokens, m = y.length, v = g.lineHeight, _ = g.width, x = 0, w = h, b = p, S = m - 1, M = void 0; x < m && (!(M = y[x]).align || "left" === M.align); ) this._placeToken(M, t, v, c, w, "left", d), 
                _ -= M.width, w += M.width, x++;
                for (;0 <= S && "right" === (M = y[S]).align; ) this._placeToken(M, t, v, c, b, "right", d), 
                _ -= M.width, b -= M.width, S--;
                for (w += (n - (w - h) - (p - b) - _) / 2; x <= S; ) M = y[x], this._placeToken(M, t, v, c, w + M.width / 2, "center", d), 
                w += M.width, x++;
                c += v;
            }
        }, nl.prototype._placeToken = function(t, e, n, i, r, o, a) {
            var s = e.rich[t.styleName] || {}, l = (s.text = t.text, t.verticalAlign), u = i + n / 2, h = (l = ("top" === l ? u = i + t.height / 2 : "bottom" === l && (u = i + n - t.height / 2), 
            !t.isLineHolder && cl(s) && this._renderBackground(s, e, "right" === o ? r - t.width : "center" === o ? r - t.width / 2 : r, u - t.height / 2, t.width, t.height), 
            !!s.backgroundColor), i = t.textPadding, n = (i && (r = ul(r, o, i), u -= t.height / 2 - i[0] - t.innerHeight / 2), 
            this._getOrCreateChild(Rs)), i = n.createStyle(), n.useStyle(i), this._defaultStyle), c = !1, p = 0, d = ll(("fill" in s ? s : "fill" in e ? e : (c = !0, 
            h)).fill);
            l = sl("stroke" in s ? s.stroke : "stroke" in e ? e.stroke : l || a || h.autoStroke && !c ? null : (p = 2, 
            h.stroke)), a = 0 < s.textShadowBlur || 0 < e.textShadowBlur, c = (i.text = t.text, 
            i.x = r, i.y = u, a && (i.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0, 
            i.shadowColor = s.textShadowColor || e.textShadowColor || "transparent", i.shadowOffsetX = s.textShadowOffsetX || e.textShadowOffsetX || 0, 
            i.shadowOffsetY = s.textShadowOffsetY || e.textShadowOffsetY || 0), i.textAlign = o, 
            i.textBaseline = "middle", i.font = t.font || K, i.opacity = St(s.opacity, e.opacity, 1), 
            rl(i, s), l && (i.lineWidth = St(s.lineWidth, e.lineWidth, p), i.lineDash = N(s.lineDash, e.lineDash), 
            i.lineDashOffset = e.lineDashOffset || 0, i.stroke = l), d && (i.fill = d), t.contentWidth), 
            h = t.contentHeight;
            n.setBoundingRect(new U(Vr(i.x, c, i.textAlign), Hr(i.y, h, i.textBaseline), c, h));
        }, nl.prototype._renderBackground = function(t, e, n, i, r, o) {
            var a, s, l, u, h = t.backgroundColor, c = t.borderWidth, p = t.borderColor, d = h && h.image, f = h && !d, g = t.borderRadius, y = this;
            g = ((f || t.lineHeight || c && p) && ((a = this._getOrCreateChild(qs)).useStyle(a.createStyle()), 
            a.style.fill = null, (u = a.shape).x = n, u.y = i, u.width = r, u.height = o, u.r = g, 
            a.dirtyShape()), f ? ((l = a.style).fill = h || null, l.fillOpacity = N(t.fillOpacity, 1)) : d && ((s = this._getOrCreateChild(Fs)).onload = function() {
                y.dirtyStyle();
            }, (u = s.style).image = h.image, u.x = n, u.y = i, u.width = r, u.height = o), 
            c && p && ((l = a.style).lineWidth = c, l.stroke = p, l.strokeOpacity = N(t.strokeOpacity, 1), 
            l.lineDash = t.borderDash, l.lineDashOffset = t.borderDashOffset || 0, a.strokeContainThreshold = 0, 
            a.hasFill()) && a.hasStroke() && (l.strokeFirst = !0, l.lineWidth *= 2), (a || s).style);
            g.shadowBlur = t.shadowBlur || 0, g.shadowColor = t.shadowColor || "transparent", 
            g.shadowOffsetX = t.shadowOffsetX || 0, g.shadowOffsetY = t.shadowOffsetY || 0, 
            g.opacity = St(t.opacity, e.opacity, 1);
        }, nl.makeFont = function(t) {
            var e = "";
            return (e = ol(t) ? [ t.fontStyle, t.fontWeight, il(t.fontSize), t.fontFamily || "sans-serif" ].join(" ") : e) && It(e) || t.textFont || t.font;
        }, nl), Js = {
            left: !0,
            right: 1,
            center: 1
        }, tl = {
            top: 1,
            bottom: 1,
            middle: 1
        }, el = [ "fontStyle", "fontWeight", "fontSize", "fontFamily" ];
        function nl(t) {
            var e = Zs.call(this) || this;
            return e.type = "text", e._children = [], e._defaultStyle = Ks, e.attr(t), e;
        }
        function il(t) {
            return "string" != typeof t || -1 === t.indexOf("px") && -1 === t.indexOf("rem") && -1 === t.indexOf("em") ? isNaN(+t) ? x + "px" : t + "px" : t;
        }
        function rl(t, e) {
            for (var n = 0; n < el.length; n++) {
                var i = el[n], r = e[i];
                null != r && (t[i] = r);
            }
        }
        function ol(t) {
            return null != t.fontSize || t.fontFamily || t.fontWeight;
        }
        function al(t) {
            var e;
            t && (t.font = Qs.makeFont(t), e = t.align, t.align = null == (e = "middle" === e ? "center" : e) || Js[e] ? e : "left", 
            e = t.verticalAlign, t.verticalAlign = null == (e = "center" === e ? "middle" : e) || tl[e] ? e : "top", 
            t.padding) && (t.padding = Tt(t.padding));
        }
        function sl(t, e) {
            return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
        }
        function ll(t) {
            return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
        }
        function ul(t, e, n) {
            return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
        }
        function hl(t) {
            t = t.text;
            return null != t && (t += ""), t;
        }
        function cl(t) {
            return !!(t.backgroundColor || t.lineHeight || t.borderWidth && t.borderColor);
        }
        var pl = Zo(), dl = 1, fl = {}, gl = Zo(), yl = Zo(), ml = 0, vl = 1, _l = 2, xl = [ "emphasis", "blur", "select" ], wl = [ "normal", "emphasis", "blur", "select" ], bl = "highlight", Sl = "downplay", Ml = "select", Tl = "unselect", Cl = "toggleSelect";
        function Il(t) {
            return null != t && "none" !== t;
        }
        function kl(t, e, n) {
            t.onHoverStateChange && (t.hoverState || 0) !== n && t.onHoverStateChange(e), t.hoverState = n;
        }
        function Dl(t) {
            kl(t, "emphasis", _l);
        }
        function Al(t) {
            t.hoverState === _l && kl(t, "normal", ml);
        }
        function Ll(t) {
            kl(t, "blur", vl);
        }
        function Pl(t) {
            t.hoverState === vl && kl(t, "normal", ml);
        }
        function Ol(t) {
            t.selected = !0;
        }
        function Rl(t) {
            t.selected = !1;
        }
        function Nl(t, e, n) {
            e(t, n);
        }
        function El(t, e, n) {
            Nl(t, e, n), t.isGroup && t.traverse((function(t) {
                Nl(t, e, n);
            }));
        }
        function zl(t, e) {
            switch (e) {
              case "emphasis":
                t.hoverState = _l;
                break;

              case "normal":
                t.hoverState = ml;
                break;

              case "blur":
                t.hoverState = vl;
                break;

              case "select":
                t.selected = !0;
            }
        }
        function Bl(t, e, n) {
            var i = 0 <= I(t.currentStates, e), r = t.style.opacity;
            t = i ? null : function(t, e, n, i) {
                for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
                    var s = e[a], l = r[s];
                    o[s] = null == l ? i && i[s] : l;
                }
                for (a = 0; a < t.animators.length; a++) {
                    var u = t.animators[a];
                    u.__fromStateTransition && u.__fromStateTransition.indexOf(n) < 0 && "style" === u.targetName && u.saveTo(o, e);
                }
                return o;
            }(t, [ "opacity" ], e, {
                opacity: 1
            }), e = (n = n || {}).style || {};
            return null == e.opacity && (n = O({}, n), e = O({
                opacity: i ? r : .1 * t.opacity
            }, e), n.style = e), n;
        }
        function Fl(t, e) {
            var n, i, r, o, a, s = this.states[t];
            if (this.style) {
                if ("emphasis" === t) return n = this, i = s, e = e && 0 <= I(e, "select"), a = !1, 
                n instanceof Z && (r = gl(n), o = e && r.selectFill || r.normalFill, e = e && r.selectStroke || r.normalStroke, 
                Il(o) || Il(e)) && ("inherit" === (r = (i = i || {}).style || {}).fill ? (a = !0, 
                i = O({}, i), (r = O({}, r)).fill = o) : !Il(r.fill) && Il(o) ? (a = !0, i = O({}, i), 
                (r = O({}, r)).fill = Si(o)) : !Il(r.stroke) && Il(e) && (a || (i = O({}, i), r = O({}, r)), 
                r.stroke = Si(e)), i.style = r), i && null == i.z2 && (a || (i = O({}, i)), o = n.z2EmphasisLift, 
                i.z2 = n.z2 + (null != o ? o : 10)), i;
                if ("blur" === t) return Bl(this, t, s);
                if ("select" === t) return e = this, (r = s) && null == r.z2 && (r = O({}, r), a = e.z2SelectLift, 
                r.z2 = e.z2 + (null != a ? a : 9)), r;
            }
            return s;
        }
        function Vl(t) {
            t.stateProxy = Fl;
            var e = t.getTextContent();
            t = t.getTextGuideLine();
            e && (e.stateProxy = Fl), t && (t.stateProxy = Fl);
        }
        function Hl(t, e) {
            jl(t, e) || t.__highByOuter || El(t, Dl);
        }
        function Wl(t, e) {
            jl(t, e) || t.__highByOuter || El(t, Al);
        }
        function Gl(t, e) {
            t.__highByOuter |= 1 << (e || 0), El(t, Dl);
        }
        function Ul(t, e) {
            (t.__highByOuter &= ~(1 << (e || 0))) || El(t, Al);
        }
        function Xl(t) {
            El(t, Pl);
        }
        function Yl(t) {
            El(t, Ol);
        }
        function ql(t) {
            El(t, Rl);
        }
        function jl(t, e) {
            return t.__highDownSilentOnTouch && e.zrByTouch;
        }
        function Zl(r) {
            var e = r.getModel(), o = [], a = [];
            e.eachComponent((function(t, e) {
                var n = yl(e), i = (t = "series" === t, t ? r.getViewOfSeriesModel(e) : r.getViewOfComponentModel(e));
                t || a.push(i), n.isBlured && (i.group.traverse((function(t) {
                    Pl(t);
                })), t) && o.push(e), n.isBlured = !1;
            })), E(a, (function(t) {
                t && t.toggleBlurSeries && t.toggleBlurSeries(o, !1, e);
            }));
        }
        function Kl(t, o, a, s) {
            var l, u, h, n = s.getModel();
            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = t.getItemGraphicEl(e[n]);
                    i && Xl(i);
                }
            }
            a = a || "coordinateSystem", null != t && o && "none" !== o && (l = n.getSeriesByIndex(t), 
            (u = l.coordinateSystem) && u.master && (u = u.master), h = [], n.eachSeries((function(t) {
                var e = l === t, n = t.coordinateSystem;
                if (n && n.master && (n = n.master), !("series" === a && !e || "coordinateSystem" === a && !(n && u ? n === u : e) || "series" === o && e)) {
                    if (s.getViewOfSeriesModel(t).group.traverse((function(t) {
                        t.__highByOuter && e && "self" === o || Ll(t);
                    })), ut(o)) c(t.getData(), o); else if (P(o)) for (var i = R(o), r = 0; r < i.length; r++) c(t.getData(i[r]), o[i[r]]);
                    h.push(t), yl(t).isBlured = !0;
                }
            })), n.eachComponent((function(t, e) {
                "series" !== t && (t = s.getViewOfComponentModel(e)) && t.toggleBlurSeries && t.toggleBlurSeries(h, !0, n);
            })));
        }
        function $l(t, e, n) {
            null != t && null != e && (t = n.getModel().getComponent(t, e)) && (yl(t).isBlured = !0, 
            e = n.getViewOfComponentModel(t)) && e.focusBlurEnabled && e.group.traverse((function(t) {
                Ll(t);
            }));
        }
        function Ql(t, e, n, i) {
            var r = {
                focusSelf: !1,
                dispatchers: null
            };
            if (null == t || "series" === t || null == e || null == n) return r;
            t = i.getModel().getComponent(t, e);
            if (!t) return r;
            e = i.getViewOfComponentModel(t);
            if (!e || !e.findHighDownDispatchers) return r;
            for (var o, a = e.findHighDownDispatchers(n), s = 0; s < a.length; s++) if ("self" === pl(a[s]).focus) {
                o = !0;
                break;
            }
            return {
                focusSelf: o,
                dispatchers: a
            };
        }
        function Jl(i) {
            E(i.getAllData(), (function(t) {
                var e = t.data, n = t.type;
                e.eachItemGraphicEl((function(t, e) {
                    (i.isSelected(e, n) ? Yl : ql)(t);
                }));
            }));
        }
        function tu(t, e, n) {
            ou(t, !0), El(t, Vl);
            t = pl(t), null != e ? (t.focus = e, t.blurScope = n) : t.focus && (t.focus = null);
        }
        function eu(t, e, n, i) {
            i ? ou(t, !1) : tu(t, e, n);
        }
        var nu = [ "emphasis", "blur", "select" ], iu = {
            itemStyle: "getItemStyle",
            lineStyle: "getLineStyle",
            areaStyle: "getAreaStyle"
        };
        function ru(t, e, n, i) {
            n = n || "itemStyle";
            for (var r = 0; r < nu.length; r++) {
                var o = nu[r], a = e.getModel([ o, n ]);
                t.ensureState(o).style = i ? i(a) : a[iu[n]]();
            }
        }
        function ou(t, e) {
            e = !1 === e;
            var n = t;
            t.highDownSilentOnTouch && (n.__highDownSilentOnTouch = t.highDownSilentOnTouch), 
            e && !n.__highDownDispatcher || (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !e);
        }
        function au(t) {
            return !(!t || !t.__highDownDispatcher);
        }
        function su(t) {
            t = t.type;
            return t === Ml || t === Tl || t === Cl;
        }
        function lu(t) {
            t = t.type;
            return t === bl || t === Sl;
        }
        var uu = fs.CMD, hu = [ [], [], [] ], cu = Math.sqrt, pu = Math.atan2;
        var du = Math.sqrt, fu = Math.sin, gu = Math.cos, yu = Math.PI;
        function mu(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
        }
        function vu(t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (mu(t) * mu(e));
        }
        function _u(t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(vu(t, e));
        }
        function xu(t, e, n, i, r, o, a, s, l, u, h) {
            l *= yu / 180;
            var c = gu(l) * (t - n) / 2 + fu(l) * (e - i) / 2, p = -1 * fu(l) * (t - n) / 2 + gu(l) * (e - i) / 2, d = c * c / (a * a) + p * p / (s * s);
            d = (1 < d && (a *= du(d), s *= du(d)), (r === o ? -1 : 1) * du((a * a * (s * s) - a * a * (p * p) - s * s * (c * c)) / (a * a * (p * p) + s * s * (c * c))) || 0), 
            r = d * a * p / s, d = d * -s * c / a, t = (t + n) / 2 + gu(l) * r - fu(l) * d, 
            n = (e + i) / 2 + fu(l) * r + gu(l) * d, e = _u([ 1, 0 ], [ (c - r) / a, (p - d) / s ]), 
            i = [ (c - r) / a, (p - d) / s ], c = [ (-1 * c - r) / a, (-1 * p - d) / s ], r = _u(i, c);
            vu(i, c) <= -1 && (r = yu), (r = 1 <= vu(i, c) ? 0 : r) < 0 && (p = Math.round(r / yu * 1e6) / 1e6, 
            r = 2 * yu + p % 2 * yu), h.addData(u, t, n, a, s, e, r, l, o);
        }
        var wu = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, bu = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
        u(Tu, Su = Z), Tu.prototype.applyTransform = function(t) {};
        var Su, Mu = Tu;
        function Tu() {
            return null !== Su && Su.apply(this, arguments) || this;
        }
        function Cu(t) {
            return null != t.setData;
        }
        function Iu(t, e) {
            var S = function(t) {
                var e = new fs;
                if (t) {
                    var n, i = 0, r = 0, o = i, a = r, s = fs.CMD, l = t.match(wu);
                    if (l) {
                        for (var u = 0; u < l.length; u++) {
                            for (var h = l[u], c = h.charAt(0), p = void 0, d = h.match(bu) || [], f = d.length, g = 0; g < f; g++) d[g] = parseFloat(d[g]);
                            for (var y = 0; y < f; ) {
                                var m = void 0, v = void 0, _ = void 0, x = void 0, w = void 0, b = void 0, S = void 0, M = i, T = r, C = void 0, I = void 0;
                                switch (c) {
                                  case "l":
                                    i += d[y++], r += d[y++], p = s.L, e.addData(p, i, r);
                                    break;

                                  case "L":
                                    i = d[y++], r = d[y++], p = s.L, e.addData(p, i, r);
                                    break;

                                  case "m":
                                    i += d[y++], r += d[y++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "l";
                                    break;

                                  case "M":
                                    i = d[y++], r = d[y++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "L";
                                    break;

                                  case "h":
                                    i += d[y++], p = s.L, e.addData(p, i, r);
                                    break;

                                  case "H":
                                    i = d[y++], p = s.L, e.addData(p, i, r);
                                    break;

                                  case "v":
                                    r += d[y++], p = s.L, e.addData(p, i, r);
                                    break;

                                  case "V":
                                    r = d[y++], p = s.L, e.addData(p, i, r);
                                    break;

                                  case "C":
                                    p = s.C, e.addData(p, d[y++], d[y++], d[y++], d[y++], d[y++], d[y++]), i = d[y - 2], 
                                    r = d[y - 1];
                                    break;

                                  case "c":
                                    p = s.C, e.addData(p, d[y++] + i, d[y++] + r, d[y++] + i, d[y++] + r, d[y++] + i, d[y++] + r), 
                                    i += d[y - 2], r += d[y - 1];
                                    break;

                                  case "S":
                                    m = i, v = r, C = e.len(), I = e.data, n === s.C && (m += i - I[C - 4], v += r - I[C - 3]), 
                                    p = s.C, M = d[y++], T = d[y++], i = d[y++], r = d[y++], e.addData(p, m, v, M, T, i, r);
                                    break;

                                  case "s":
                                    m = i, v = r, C = e.len(), I = e.data, n === s.C && (m += i - I[C - 4], v += r - I[C - 3]), 
                                    p = s.C, M = i + d[y++], T = r + d[y++], i += d[y++], r += d[y++], e.addData(p, m, v, M, T, i, r);
                                    break;

                                  case "Q":
                                    M = d[y++], T = d[y++], i = d[y++], r = d[y++], p = s.Q, e.addData(p, M, T, i, r);
                                    break;

                                  case "q":
                                    M = d[y++] + i, T = d[y++] + r, i += d[y++], r += d[y++], p = s.Q, e.addData(p, M, T, i, r);
                                    break;

                                  case "T":
                                    m = i, v = r, C = e.len(), I = e.data, n === s.Q && (m += i - I[C - 4], v += r - I[C - 3]), 
                                    i = d[y++], r = d[y++], p = s.Q, e.addData(p, m, v, i, r);
                                    break;

                                  case "t":
                                    m = i, v = r, C = e.len(), I = e.data, n === s.Q && (m += i - I[C - 4], v += r - I[C - 3]), 
                                    i += d[y++], r += d[y++], p = s.Q, e.addData(p, m, v, i, r);
                                    break;

                                  case "A":
                                    _ = d[y++], x = d[y++], w = d[y++], b = d[y++], S = d[y++], xu(M = i, T = r, i = d[y++], r = d[y++], b, S, _, x, w, p = s.A, e);
                                    break;

                                  case "a":
                                    _ = d[y++], x = d[y++], w = d[y++], b = d[y++], S = d[y++], xu(M = i, T = r, i += d[y++], r += d[y++], b, S, _, x, w, p = s.A, e);
                                }
                            }
                            "z" !== c && "Z" !== c || (p = s.Z, e.addData(p), i = o, r = a), n = p;
                        }
                        e.toStatic();
                    }
                }
                return e;
            }(t);
            t = O({}, e);
            return t.buildPath = function(t) {
                var e;
                Cu(t) ? (t.setData(S.data), (e = t.getContext()) && t.rebuildPath(e, 1)) : S.rebuildPath(e = t, 1);
            }, t.applyTransform = function(t) {
                var e = S, n = t;
                if (n) {
                    for (var i, r, o, a, s = e.data, l = e.len(), u = uu.M, h = uu.C, c = uu.L, p = uu.R, d = uu.A, f = uu.Q, g = 0, y = 0; g < l; ) {
                        switch (i = s[g++], y = g, r = 0, i) {
                          case u:
                          case c:
                            r = 1;
                            break;

                          case h:
                            r = 3;
                            break;

                          case f:
                            r = 2;
                            break;

                          case d:
                            var m = n[4], v = n[5], _ = cu(n[0] * n[0] + n[1] * n[1]), x = cu(n[2] * n[2] + n[3] * n[3]), w = pu(-n[1] / x, n[0] / _);
                            s[g] *= _, s[g++] += m, s[g] *= x, s[g++] += v, s[g++] *= _, s[g++] *= x, s[g++] += w, 
                            s[g++] += w, y = g += 2;
                            break;

                          case p:
                            a[0] = s[g++], a[1] = s[g++], ne(a, a, n), s[y++] = a[0], s[y++] = a[1], a[0] += s[g++], 
                            a[1] += s[g++], ne(a, a, n), s[y++] = a[0], s[y++] = a[1];
                        }
                        for (o = 0; o < r; o++) {
                            var b = hu[o];
                            b[0] = s[g++], b[1] = s[g++], ne(b, b, n), s[y++] = b[0], s[y++] = b[1];
                        }
                    }
                    e.increaseVersion();
                }
                this.dirtyShape();
            }, t;
        }
        function ku() {
            this.cx = 0, this.cy = 0, this.r = 0;
        }
        u(Lu, Du = Z), Lu.prototype.getDefaultShape = function() {
            return new ku;
        }, Lu.prototype.buildPath = function(t, e) {
            t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI);
        };
        var Du, Au = Lu;
        function Lu(t) {
            return Du.call(this, t) || this;
        }
        Au.prototype.type = "circle";
        function Pu() {
            this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
        }
        u(Nu, Ou = Z), Nu.prototype.getDefaultShape = function() {
            return new Pu;
        }, Nu.prototype.buildPath = function(t, e) {
            var n = e.cx, i = e.cy, r = e.rx, o = (e = e.ry, .5522848 * r), a = .5522848 * e;
            t.moveTo(n - r, i), t.bezierCurveTo(n - r, i - a, n - o, i - e, n, i - e), t.bezierCurveTo(n + o, i - e, n + r, i - a, n + r, i), 
            t.bezierCurveTo(n + r, i + a, n + o, i + e, n, i + e), t.bezierCurveTo(n - o, i + e, n - r, i + a, n - r, i), 
            t.closePath();
        };
        var Ou, Ru = Nu;
        function Nu(t) {
            return Ou.call(this, t) || this;
        }
        Ru.prototype.type = "ellipse";
        var Eu = Math.PI, zu = 2 * Eu, Bu = Math.sin, Fu = Math.cos, Vu = Math.acos, Hu = Math.atan2, Wu = Math.abs, Gu = Math.sqrt, Uu = Math.max, Xu = Math.min, Yu = 1e-4;
        function qu(t, e, n, i, r, o, a) {
            var s = t - n, l = e - i, u = (a = (a ? o : -o) / Gu(s * s + l * l), l = a * l, 
            a = -a * s, s = t + l, t = e + a, e = n + l, n = i + a, i = (s + e) / 2, (t + n) / 2), h = e - s, c = n - t, p = h * h + c * c, d = (o = r - o, 
            s = s * n - e * t, n = (c < 0 ? -1 : 1) * Gu(Uu(0, o * o * p - s * s)), e = (s * c - h * n) / p, 
            t = (-s * h - c * n) / p, (s * c + h * n) / p);
            s = (-s * h + c * n) / p, h = e - i, c = t - u, n = d - i, p = s - u;
            return n * n + p * p < h * h + c * c && (e = d, t = s), {
                cx: e,
                cy: t,
                x0: -l,
                y0: -a,
                x1: e * (r / o - 1),
                y1: t * (r / o - 1)
            };
        }
        function ju(t, e) {
            var n, i, r, o, a, s, l, u, h, c, p, d, f, g, y, m, v, _, x, w, b, S, M, T, C, I, k, D, A, L, P = Uu(e.r, 0), O = Uu(e.r0 || 0, 0), R = 0 < P;
            (R || 0 < O) && (R || (P = O, O = 0), P < O && (R = P, P = O, O = R), R = e.startAngle, 
            n = e.endAngle, isNaN(R) || isNaN(n) || (i = e.cx, r = e.cy, o = !!e.clockwise, 
            w = Wu(n - R), Yu < (a = zu < w && w % zu) && (w = a), Yu < P ? zu - Yu < w ? (t.moveTo(i + P * Fu(R), r + P * Bu(R)), 
            t.arc(i, r, P, R, n, !o), Yu < O && (t.moveTo(i + O * Fu(n), r + O * Bu(n)), t.arc(i, r, O, n, R, o))) : (g = f = d = p = S = b = c = h = I = C = T = M = u = l = s = a = void 0, 
            y = P * Fu(R), m = P * Bu(R), v = O * Fu(n), _ = O * Bu(n), (x = Yu < w) && ((e = e.cornerRadius) && (a = (e = function(t) {
                if (V(t)) {
                    var e = t.length;
                    if (!e) return t;
                    e = 1 === e ? [ t[0], t[0], 0, 0 ] : 2 === e ? [ t[0], t[0], t[1], t[1] ] : 3 === e ? t.concat(t[2]) : t;
                } else e = [ t, t, t, t ];
                return e;
            }(e))[0], s = e[1], l = e[2], u = e[3]), e = Wu(P - O) / 2, M = Xu(e, l), T = Xu(e, u), 
            C = Xu(e, a), I = Xu(e, s), b = h = Uu(M, T), S = c = Uu(C, I), Yu < h || Yu < c) && (p = P * Fu(n), 
            d = P * Bu(n), f = O * Fu(R), g = O * Bu(R), w < Eu) && (e = function(t, e, n, i, r, o, a, s) {
                var l = (s -= o) * (n -= t) - (a -= r) * (i -= e);
                if (!(l * l < Yu)) return [ t + (l = (a * (e - o) - s * (t - r)) / l) * n, e + l * i ];
            }(y, m, f, g, p, d, v, _)) && (M = y - e[0], T = m - e[1], C = p - e[0], I = d - e[1], 
            w = 1 / Bu(Vu((M * C + T * I) / (Gu(M * M + T * T) * Gu(C * C + I * I))) / 2), M = Gu(e[0] * e[0] + e[1] * e[1]), 
            b = Xu(h, (P - M) / (1 + w)), S = Xu(c, (O - M) / (w - 1))), x ? Yu < b ? (k = Xu(l, b), 
            D = Xu(u, b), A = qu(f, g, y, m, P, k, o), L = qu(p, d, v, _, P, D, o), t.moveTo(i + A.cx + A.x0, r + A.cy + A.y0), 
            b < h && k === D ? t.arc(i + A.cx, r + A.cy, b, Hu(A.y0, A.x0), Hu(L.y0, L.x0), !o) : (0 < k && t.arc(i + A.cx, r + A.cy, k, Hu(A.y0, A.x0), Hu(A.y1, A.x1), !o), 
            t.arc(i, r, P, Hu(A.cy + A.y1, A.cx + A.x1), Hu(L.cy + L.y1, L.cx + L.x1), !o), 
            0 < D && t.arc(i + L.cx, r + L.cy, D, Hu(L.y1, L.x1), Hu(L.y0, L.x0), !o))) : (t.moveTo(i + y, r + m), 
            t.arc(i, r, P, R, n, !o)) : t.moveTo(i + y, r + m), Yu < O && x ? Yu < S ? (k = Xu(a, S), 
            A = qu(v, _, p, d, O, -(D = Xu(s, S)), o), L = qu(y, m, f, g, O, -k, o), t.lineTo(i + A.cx + A.x0, r + A.cy + A.y0), 
            S < c && k === D ? t.arc(i + A.cx, r + A.cy, S, Hu(A.y0, A.x0), Hu(L.y0, L.x0), !o) : (0 < D && t.arc(i + A.cx, r + A.cy, D, Hu(A.y0, A.x0), Hu(A.y1, A.x1), !o), 
            t.arc(i, r, O, Hu(A.cy + A.y1, A.cx + A.x1), Hu(L.cy + L.y1, L.cx + L.x1), o), 0 < k && t.arc(i + L.cx, r + L.cy, k, Hu(L.y1, L.x1), Hu(L.y0, L.x0), !o))) : (t.lineTo(i + v, r + _), 
            t.arc(i, r, O, n, R, o)) : t.lineTo(i + v, r + _)) : t.moveTo(i, r), t.closePath()));
        }
        function Zu() {
            this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, 
            this.clockwise = !0, this.cornerRadius = 0;
        }
        u(Qu, Ku = Z), Qu.prototype.getDefaultShape = function() {
            return new Zu;
        }, Qu.prototype.buildPath = function(t, e) {
            ju(t, e);
        }, Qu.prototype.isZeroArea = function() {
            return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
        };
        var Ku, $u = Qu;
        function Qu(t) {
            return Ku.call(this, t) || this;
        }
        $u.prototype.type = "sector";
        function Ju() {
            this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
        }
        u(nh, th = Z), nh.prototype.getDefaultShape = function() {
            return new Ju;
        }, nh.prototype.buildPath = function(t, e) {
            var n = e.cx, i = e.cy, r = 2 * Math.PI;
            t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
        };
        var th, eh = nh;
        function nh(t) {
            return th.call(this, t) || this;
        }
        function ih(t, e, n) {
            var i = e.smooth, r = e.points;
            if (r && 2 <= r.length) {
                if (i) {
                    var o = function(t, e, n, i) {
                        var r, o, a = [], s = [], l = [], u = [];
                        if (i) {
                            for (var h = [ 1 / 0, 1 / 0 ], c = [ -1 / 0, -1 / 0 ], p = 0, d = t.length; p < d; p++) ie(h, h, t[p]), 
                            re(c, c, t[p]);
                            ie(h, h, i[0]), re(c, c, i[1]);
                        }
                        for (p = 0, d = t.length; p < d; p++) {
                            var f = t[p];
                            if (n) r = t[p ? p - 1 : d - 1], o = t[(p + 1) % d]; else {
                                if (0 === p || p === d - 1) {
                                    a.push(Ut(t[p]));
                                    continue;
                                }
                                r = t[p - 1], o = t[p + 1];
                            }
                            Yt(s, o, r), Zt(s, s, e);
                            var g = $t(f, r), y = $t(f, o), m = g + y;
                            m = (0 !== m && (g /= m, y /= m), Zt(l, s, -g), Zt(u, s, y), Xt([], f, l)), g = Xt([], f, u);
                            i && (re(m, m, h), ie(m, m, c), re(g, g, h), ie(g, g, c)), a.push(m), a.push(g);
                        }
                        return n && a.push(a.shift()), a;
                    }(r, i, n, e.smoothConstraint);
                    t.moveTo(r[0][0], r[0][1]);
                    for (var a = r.length, s = 0; s < (n ? a : a - 1); s++) {
                        var l = o[2 * s], u = o[2 * s + 1], h = r[(s + 1) % a];
                        t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
                    }
                } else {
                    t.moveTo(r[0][0], r[0][1]);
                    s = 1;
                    for (var c = r.length; s < c; s++) t.lineTo(r[s][0], r[s][1]);
                }
                n && t.closePath();
            }
        }
        eh.prototype.type = "ring";
        function rh() {
            this.points = null, this.smooth = 0, this.smoothConstraint = null;
        }
        u(sh, oh = Z), sh.prototype.getDefaultShape = function() {
            return new rh;
        }, sh.prototype.buildPath = function(t, e) {
            ih(t, e, !0);
        };
        var oh, ah = sh;
        function sh(t) {
            return oh.call(this, t) || this;
        }
        ah.prototype.type = "polygon";
        function lh() {
            this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
        }
        u(ch, uh = Z), ch.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, ch.prototype.getDefaultShape = function() {
            return new lh;
        }, ch.prototype.buildPath = function(t, e) {
            ih(t, e, !1);
        };
        var uh, hh = ch;
        function ch(t) {
            return uh.call(this, t) || this;
        }
        hh.prototype.type = "polyline";
        function ph() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
        }
        var dh, fh = {}, gh = (u(yh, dh = Z), yh.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, yh.prototype.getDefaultShape = function() {
            return new ph;
        }, yh.prototype.buildPath = function(t, e) {
            o = (this.subPixelOptimize ? (n = (o = Ws(fh, e, this.style)).x1, i = o.y1, r = o.x2, 
            o) : (n = e.x1, i = e.y1, r = e.x2, e)).y2;
            var n, i, r, o;
            e = e.percent;
            0 !== e && (t.moveTo(n, i), e < 1 && (r = n * (1 - e) + r * e, o = i * (1 - e) + o * e), 
            t.lineTo(r, o));
        }, yh.prototype.pointAt = function(t) {
            var e = this.shape;
            return [ e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t ];
        }, yh);
        function yh(t) {
            return dh.call(this, t) || this;
        }
        gh.prototype.type = "line";
        function mh() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, 
            this.percent = 1;
        }
        var vh = [];
        function _h(t, e, n) {
            var i = t.cpx2, r = t.cpy2;
            return null != i || null != r ? [ (n ? zn : En)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? zn : En)(t.y1, t.cpy1, t.cpy2, t.y2, e) ] : [ (n ? Gn : Wn)(t.x1, t.cpx1, t.x2, e), (n ? Gn : Wn)(t.y1, t.cpy1, t.y2, e) ];
        }
        u(bh, xh = Z), bh.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, bh.prototype.getDefaultShape = function() {
            return new mh;
        }, bh.prototype.buildPath = function(t, e) {
            var n = e.x1, i = e.y1, r = e.x2, o = e.y2, a = e.cpx1, s = e.cpy1, l = e.cpx2, u = e.cpy2;
            e = e.percent;
            0 !== e && (t.moveTo(n, i), null == l || null == u ? (e < 1 && (Xn(n, a, r, e, vh), 
            a = vh[1], r = vh[2], Xn(i, s, o, e, vh), s = vh[1], o = vh[2]), t.quadraticCurveTo(a, s, r, o)) : (e < 1 && (Vn(n, a, l, r, e, vh), 
            a = vh[1], l = vh[2], r = vh[3], Vn(i, s, u, o, e, vh), s = vh[1], u = vh[2], o = vh[3]), 
            t.bezierCurveTo(a, s, l, u, r, o)));
        }, bh.prototype.pointAt = function(t) {
            return _h(this.shape, t, !1);
        }, bh.prototype.tangentAt = function(t) {
            t = _h(this.shape, t, !0);
            return Kt(t, t);
        };
        var xh, wh = bh;
        function bh(t) {
            return xh.call(this, t) || this;
        }
        wh.prototype.type = "bezier-curve";
        function Sh() {
            this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, 
            this.clockwise = !0;
        }
        u(Ch, Mh = Z), Ch.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, Ch.prototype.getDefaultShape = function() {
            return new Sh;
        }, Ch.prototype.buildPath = function(t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = (e = e.clockwise, 
            Math.cos(o)), l = Math.sin(o);
            t.moveTo(s * r + n, l * r + i), t.arc(n, i, r, o, a, !e);
        };
        var Mh, Th = Ch;
        function Ch(t) {
            return Mh.call(this, t) || this;
        }
        Th.prototype.type = "arc";
        u(Dh, Ih = Z), Dh.prototype._updatePathDirty = function() {
            for (var t = this.shape.paths, e = this.shapeChanged(), n = 0; n < t.length; n++) e = e || t[n].shapeChanged();
            e && this.dirtyShape();
        }, Dh.prototype.beforeBrush = function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), 
            t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
        }, Dh.prototype.buildPath = function(t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0);
        }, Dh.prototype.afterBrush = function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].pathUpdated();
        }, Dh.prototype.getBoundingRect = function() {
            return this._updatePathDirty.call(this), Z.prototype.getBoundingRect.call(this);
        };
        var Ih, kh = Dh;
        function Dh() {
            var t = null !== Ih && Ih.apply(this, arguments) || this;
            return t.type = "compound", t;
        }
        Lh.prototype.addColorStop = function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            });
        };
        var Ah = Lh;
        function Lh(t) {
            this.colorStops = t || [];
        }
        u(Rh, Ph = Ah);
        var Ph, Oh = Rh;
        function Rh(t, e, n, i, r, o) {
            r = Ph.call(this, r) || this;
            return r.x = null == t ? 0 : t, r.y = null == e ? 0 : e, r.x2 = null == n ? 1 : n, 
            r.y2 = null == i ? 0 : i, r.type = "linear", r.global = o || !1, r;
        }
        u(Eh, Nh = Ah);
        var Nh;
        Ah = Eh;
        function Eh(t, e, n, i, r) {
            i = Nh.call(this, i) || this;
            return i.x = null == t ? .5 : t, i.y = null == e ? .5 : e, i.r = null == n ? .5 : n, 
            i.type = "radial", i.global = r || !1, i;
        }
        var zh = [ 0, 0 ], Bh = [ 0, 0 ], Fh = new G, Vh = new G, Hh = (Wh.prototype.fromBoundingRect = function(t, e) {
            var n = this._corners, i = this._axes, r = t.x, o = t.y, a = r + t.width;
            t = o + t.height;
            if (n[0].set(r, o), n[1].set(a, o), n[2].set(a, t), n[3].set(r, t), e) for (var s = 0; s < 4; s++) n[s].transform(e);
            for (G.sub(i[0], n[1], n[0]), G.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize(), 
            s = 0; s < 2; s++) this._origin[s] = i[s].dot(n[0]);
        }, Wh.prototype.intersect = function(t, e) {
            var n = !0, i = !e;
            return Fh.set(1 / 0, 1 / 0), Vh.set(0, 0), !this._intersectCheckOneSide(this, t, Fh, Vh, i, 1) && (n = !1, 
            i) || !this._intersectCheckOneSide(t, this, Fh, Vh, i, -1) && (n = !1, i) || i || G.copy(e, n ? Fh : Vh), 
            n;
        }, Wh.prototype._intersectCheckOneSide = function(t, e, n, i, r, o) {
            for (var a = !0, s = 0; s < 2; s++) {
                var l = this._axes[s];
                if (this._getProjMinMaxOnAxis(s, t._corners, zh), this._getProjMinMaxOnAxis(s, e._corners, Bh), 
                zh[1] < Bh[0] || Bh[1] < zh[0]) {
                    if (a = !1, r) return a;
                    var u = Math.abs(Bh[0] - zh[1]), h = Math.abs(zh[0] - Bh[1]);
                    Math.min(u, h) > i.len() && (u < h ? G.scale(i, l, -u * o) : G.scale(i, l, h * o));
                } else n && (u = Math.abs(Bh[0] - zh[1]), h = Math.abs(zh[0] - Bh[1]), Math.min(u, h) < n.len()) && (u < h ? G.scale(n, l, u * o) : G.scale(n, l, -h * o));
            }
            return a;
        }, Wh.prototype._getProjMinMaxOnAxis = function(t, e, n) {
            for (var i = this._axes[t], r = this._origin, o = e[0].dot(i) + r[t], a = o, s = o, l = 1; l < e.length; l++) {
                var u = e[l].dot(i) + r[t];
                a = Math.min(u, a), s = Math.max(u, s);
            }
            n[0] = a, n[1] = s;
        }, Wh);
        function Wh(t, e) {
            this._corners = [], this._axes = [], this._origin = [ 0, 0 ];
            for (var n = 0; n < 4; n++) this._corners[n] = new G;
            for (n = 0; n < 2; n++) this._axes[n] = new G;
            t && this.fromBoundingRect(t, e);
        }
        var Gh, Uh = [];
        n = (u(Xh, Gh = n), Xh.prototype.traverse = function(t, e) {
            t.call(e, this);
        }, Xh.prototype.useStyle = function() {
            this.style = {};
        }, Xh.prototype.getCursor = function() {
            return this._cursor;
        }, Xh.prototype.innerAfterBrush = function() {
            this._cursor = this._displayables.length;
        }, Xh.prototype.clearDisplaybles = function() {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), 
            this.notClear = !1;
        }, Xh.prototype.clearTemporalDisplayables = function() {
            this._temporaryDisplayables = [];
        }, Xh.prototype.addDisplayable = function(t, e) {
            (e ? this._temporaryDisplayables : this._displayables).push(t), this.markRedraw();
        }, Xh.prototype.addDisplayables = function(t, e) {
            e = e || !1;
            for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
        }, Xh.prototype.getDisplayables = function() {
            return this._displayables;
        }, Xh.prototype.getTemporalDisplayables = function() {
            return this._temporaryDisplayables;
        }, Xh.prototype.eachPendingDisplayable = function(t) {
            for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
            for (e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
        }, Xh.prototype.update = function() {
            this.updateTransform();
            for (var t, e = this._cursor; e < this._displayables.length; e++) (t = this._displayables[e]).parent = this, 
            t.update(), t.parent = null;
            for (e = 0; e < this._temporaryDisplayables.length; e++) (t = this._temporaryDisplayables[e]).parent = this, 
            t.update(), t.parent = null;
        }, Xh.prototype.getBoundingRect = function() {
            if (!this._rect) {
                for (var t = new U(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                    var n = this._displayables[e], i = n.getBoundingRect().clone();
                    n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Uh)), t.union(i);
                }
                this._rect = t;
            }
            return this._rect;
        }, Xh.prototype.contain = function(t, e) {
            var n = this.transformCoordToLocal(t, e);
            if (this.getBoundingRect().contain(n[0], n[1])) for (var i = 0; i < this._displayables.length; i++) if (this._displayables[i].contain(t, e)) return !0;
            return !1;
        }, Xh);
        function Xh() {
            var t = null !== Gh && Gh.apply(this, arguments) || this;
            return t.notClear = !0, t.incremental = !0, t._displayables = [], t._temporaryDisplayables = [], 
            t._cursor = 0, t;
        }
        var Yh = Zo();
        function qh(t, e, n, i, r, o, a) {
            var s, l, u, h, c, p, d = !1, f = (k(r) ? (a = o, o = r, r = null) : P(r) && (o = r.cb, 
            a = r.during, d = r.isFrom, l = r.removeOpt, r = r.dataIndex), "leave" === t), g = (f || e.stopAnimation("leave"), 
            p = t, s = r, l = f ? l || {} : null, i = (g = i) && i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null, 
            g && g.ecModel && (u = (u = g.ecModel.getUpdatePayload()) && u.animation), p = "update" === p, 
            g && g.isAnimationEnabled() ? (c = h = r = void 0, c = l ? (r = N(l.duration, 200), 
            h = N(l.easing, "cubicOut"), 0) : (r = g.getShallow(p ? "animationDurationUpdate" : "animationDuration"), 
            h = g.getShallow(p ? "animationEasingUpdate" : "animationEasing"), g.getShallow(p ? "animationDelayUpdate" : "animationDelay")), 
            k(c = u && (null != u.duration && (r = u.duration), null != u.easing && (h = u.easing), 
            null != u.delay) ? u.delay : c) && (c = c(s, i)), {
                duration: (r = k(r) ? r(s) : r) || 0,
                delay: c,
                easing: h
            }) : null);
            g && 0 < g.duration ? (p = {
                duration: g.duration,
                delay: g.delay || 0,
                easing: g.easing,
                done: o,
                force: !!o || !!a,
                setToFinal: !f,
                scope: t,
                during: a
            }, d ? e.animateFrom(n, p) : e.animateTo(n, p)) : (e.stopAnimation(), d || e.attr(n), 
            a && a(1), o && o());
        }
        function jh(t, e, n, i, r, o) {
            qh("update", t, e, n, i, r, o);
        }
        function Zh(t, e, n, i, r, o) {
            qh("enter", t, e, n, i, r, o);
        }
        function Kh(t) {
            if (!t.__zr) return 1;
            for (var e = 0; e < t.animators.length; e++) if ("leave" === t.animators[e].scope) return 1;
        }
        function $h(t, e, n, i, r, o) {
            Kh(t) || qh("leave", t, e, n, i, r, o);
        }
        function Qh(t, e, n, i) {
            t.removeTextContent(), t.removeTextGuideLine(), $h(t, {
                style: {
                    opacity: 0
                }
            }, e, n, i);
        }
        function Jh(t, e, n) {
            function i() {
                t.parent && t.parent.remove(t);
            }
            t.isGroup ? t.traverse((function(t) {
                t.isGroup || Qh(t, e, n, i);
            })) : Qh(t, e, n, i);
        }
        function tc(t) {
            Yh(t).oldStyle = t.style;
        }
        var ec = Math.max, nc = Math.min, ic = {};
        var rc = function(t, e) {
            var n, i = Iu(t, e);
            return u(r, n = Mu), r;
            function r(t) {
                t = n.call(this, t) || this;
                return t.applyTransform = i.applyTransform, t.buildPath = i.buildPath, t;
            }
        };
        function oc(t, e) {
            ic[t] = e;
        }
        function ac(t, e, n, i) {
            t = new Mu(Iu(t, e));
            return n && ("center" === i && (n = lc(n, t.getBoundingRect())), hc(t, n)), t;
        }
        function sc(t, e, n) {
            var i = new Fs({
                style: {
                    image: t,
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height
                },
                onload: function(t) {
                    "center" === n && (t = {
                        width: t.width,
                        height: t.height
                    }, i.setStyle(lc(e, t)));
                }
            });
            return i;
        }
        function lc(t, e) {
            e = e.width / e.height;
            var n = t.height * e;
            e = n <= t.width ? t.height : (n = t.width) / e;
            return {
                x: t.x + t.width / 2 - n / 2,
                y: t.y + t.height / 2 - e / 2,
                width: n,
                height: e
            };
        }
        function uc(t, e) {
            for (var n = [], i = t.length, r = 0; r < i; r++) {
                var o = t[r];
                n.push(o.getUpdatedPathProxy(!0));
            }
            return (e = new Z(e)).createPathProxy(), e.buildPath = function(t) {
                var e;
                Cu(t) && (t.appendPath(n), e = t.getContext()) && t.rebuildPath(e, 1);
            }, e;
        }
        function hc(t, e) {
            t.applyTransform && (e = t.getBoundingRect().calculateTransform(e), t.applyTransform(e));
        }
        function cc(t, e) {
            Ws(t, t, {
                lineWidth: e
            });
        }
        function pc(t) {
            return !t.isGroup;
        }
        function dc(t, e) {
            var n;
            (n = t.isGroup ? e(t) : n) || t.traverse(e);
        }
        function fc(t, e) {
            if (t) if (V(t)) for (var n = 0; n < t.length; n++) dc(t[n], e); else dc(t, e);
        }
        oc("circle", Au), oc("ellipse", Ru), oc("sector", $u), oc("ring", eh), oc("polygon", ah), 
        oc("polyline", hh), oc("rect", qs), oc("line", gh), oc("bezierCurve", wh), oc("arc", Th);
        var gc = {};
        function yc(t, e) {
            for (var n = 0; n < xl.length; n++) {
                var i = xl[n], r = e[i];
                i = t.ensureState(i);
                i.style = i.style || {}, i.style.text = r;
            }
            var o = t.currentStates.slice();
            t.clearStates(!0), t.setStyle({
                text: e.normal
            }), t.useStates(o, !0);
        }
        function mc(t, e, n) {
            for (var i, r = t.labelFetcher, o = t.labelDataIndex, a = t.labelDimIndex, s = e.normal, l = {
                normal: i = null == (i = r ? r.getFormattedLabel(o, "normal", null, a, s && s.get("formatter"), null != n ? {
                    interpolatedValue: n
                } : null) : i) ? k(t.defaultText) ? t.defaultText(o, t, n) : t.defaultText : i
            }, u = 0; u < xl.length; u++) {
                var h = xl[u], c = e[h];
                l[h] = N(r ? r.getFormattedLabel(o, h, null, a, c && c.get("formatter")) : null, i);
            }
            return l;
        }
        function vc(t, e, n, i) {
            n = n || gc;
            for (var r = t instanceof Qs, o = !1, a = 0; a < wl.length; a++) if ((p = e[wl[a]]) && p.getShallow("show")) {
                o = !0;
                break;
            }
            var s = r ? t : t.getTextContent();
            if (o) {
                r || (s || (s = new Qs, t.setTextContent(s)), t.stateProxy && (s.stateProxy = t.stateProxy));
                var l = mc(n, e), u = e.normal, h = !!u.getShallow("show"), c = xc(u, i && i.normal, n, !1, !r);
                for (c.text = l.normal, r || t.setTextConfig(wc(u, n, !1)), a = 0; a < xl.length; a++) {
                    var p, d, f, g = xl[a];
                    (p = e[g]) && (d = s.ensureState(g), (f = !!N(p.getShallow("show"), h)) != h && (d.ignore = !f), 
                    d.style = xc(p, i && i[g], n, !0, !r), d.style.text = l[g], r || (t.ensureState(g).textConfig = wc(p, n, !0)));
                }
                s.silent = !!u.getShallow("silent"), null != s.style.x && (c.x = s.style.x), null != s.style.y && (c.y = s.style.y), 
                s.ignore = !h, s.useStyle(c), s.dirty(), n.enableTextSetter && (Cc(s).setLabelText = function(t) {
                    t = mc(n, e, t);
                    yc(s, t);
                });
            } else s && (s.ignore = !0);
            t.dirty();
        }
        function _c(t, e) {
            for (var n = {
                normal: t.getModel(e = e || "label")
            }, i = 0; i < xl.length; i++) {
                var r = xl[i];
                n[r] = t.getModel([ r, e ]);
            }
            return n;
        }
        function xc(t, e, n, i, r) {
            var o, a = {}, s = a, l = t, u = n, h = i, c = r;
            u = u || gc;
            t = l.ecModel;
            var p, d = t && t.option.textStyle, f = function(t) {
                for (var e; t && t !== t.ecModel; ) {
                    var n = (t.option || gc).rich;
                    if (n) {
                        e = e || {};
                        for (var i = R(n), r = 0; r < i.length; r++) e[i[r]] = 1;
                    }
                    t = t.parentModel;
                }
                return e;
            }(l);
            if (f) for (var g in p = {}, f) f.hasOwnProperty(g) && (o = l.getModel([ "rich", g ]), 
            Tc(p[g] = {}, o, d, u, h, c, !1, !0));
            return p && (s.rich = p), (t = l.get("overflow")) && (s.overflow = t), null != (t = l.get("minMargin")) && (s.margin = t), 
            Tc(s, l, d, u, h, c, !0, !1), e && O(a, e), a;
        }
        function wc(t, e, n) {
            e = e || {};
            var i = {}, r = t.getShallow("rotate"), o = N(t.getShallow("distance"), n ? null : 5), a = t.getShallow("offset");
            return null != (n = "outside" === (n = t.getShallow("position") || (n ? null : "inside")) ? e.defaultOutsidePosition || "top" : n) && (i.position = n), 
            null != a && (i.offset = a), null != r && (r *= Math.PI / 180, i.rotation = r), 
            null != o && (i.distance = o), i.outsideFill = "inherit" === t.get("color") ? e.inheritColor || null : "auto", 
            i;
        }
        var bc = [ "fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY" ], Sc = [ "align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis" ], Mc = [ "padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY" ];
        function Tc(t, e, n, i, r, o, a, s) {
            n = !r && n || gc;
            var l = i && i.inheritColor, u = e.getShallow("color"), h = e.getShallow("textBorderColor"), c = N(e.getShallow("opacity"), n.opacity);
            u = ("inherit" !== u && "auto" !== u || (u = l || null), "inherit" !== h && "auto" !== h || (h = l || null), 
            o || (u = u || n.color, h = h || n.textBorderColor), null != u && (t.fill = u), 
            null != h && (t.stroke = h), N(e.getShallow("textBorderWidth"), n.textBorderWidth)), 
            h = (null != u && (t.lineWidth = u), N(e.getShallow("textBorderType"), n.textBorderType)), 
            u = (null != h && (t.lineDash = h), N(e.getShallow("textBorderDashOffset"), n.textBorderDashOffset));
            null != u && (t.lineDashOffset = u), null != (c = r || null != c || s ? c : i && i.defaultOpacity) && (t.opacity = c), 
            r || o || null == t.fill && i.inheritColor && (t.fill = i.inheritColor);
            for (var p = 0; p < bc.length; p++) {
                var d = bc[p];
                null != (f = N(e.getShallow(d), n[d])) && (t[d] = f);
            }
            for (p = 0; p < Sc.length; p++) d = Sc[p], null != (f = e.getShallow(d)) && (t[d] = f);
            if (null == t.verticalAlign && null != (h = e.getShallow("baseline")) && (t.verticalAlign = h), 
            !a || !i.disableBox) {
                for (p = 0; p < Mc.length; p++) {
                    var f;
                    d = Mc[p];
                    null != (f = e.getShallow(d)) && (t[d] = f);
                }
                u = e.getShallow("borderType");
                null != u && (t.borderDash = u), "auto" !== t.backgroundColor && "inherit" !== t.backgroundColor || !l || (t.backgroundColor = l), 
                "auto" !== t.borderColor && "inherit" !== t.borderColor || !l || (t.borderColor = l);
            }
        }
        var Cc = Zo();
        var Ic = [ "textStyle", "color" ], kc = [ "fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow" ], Dc = new Qs, Ac = (Lc.prototype.getTextColor = function(t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(Ic) : null);
        }, Lc.prototype.getFont = function() {
            return t = {
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, e = (e = this.ecModel) && e.getModel("textStyle"), It([ t.fontStyle || e && e.getShallow("fontStyle") || "", t.fontWeight || e && e.getShallow("fontWeight") || "", (t.fontSize || e && e.getShallow("fontSize") || 12) + "px", t.fontFamily || e && e.getShallow("fontFamily") || "sans-serif" ].join(" "));
            var t, e;
        }, Lc.prototype.getTextRect = function(t) {
            for (var e = {
                text: t,
                verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
            }, n = 0; n < kc.length; n++) e[kc[n]] = this.getShallow(kc[n]);
            return Dc.useStyle(e), Dc.update(), Dc.getBoundingRect();
        }, Lc);
        function Lc() {}
        var Pc = [ [ "lineWidth", "width" ], [ "stroke", "color" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ], [ "lineDash", "type" ], [ "lineDashOffset", "dashOffset" ], [ "lineCap", "cap" ], [ "lineJoin", "join" ], [ "miterLimit" ] ], Oc = da(Pc), Rc = (Nc.prototype.getLineStyle = function(t) {
            return Oc(this, t);
        }, Nc);
        function Nc() {}
        var Ec = [ [ "fill", "color" ], [ "stroke", "borderColor" ], [ "lineWidth", "borderWidth" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ], [ "lineDash", "borderType" ], [ "lineDashOffset", "borderDashOffset" ], [ "lineCap", "borderCap" ], [ "lineJoin", "borderJoin" ], [ "miterLimit", "borderMiterLimit" ] ], zc = da(Ec), Bc = (Fc.prototype.getItemStyle = function(t, e) {
            return zc(this, t, e);
        }, Fc);
        function Fc() {}
        Wc.prototype.init = function(t, e, n) {
            for (var i = 3; i < arguments.length; i++) i - 3, 0;
        }, Wc.prototype.mergeOption = function(t, e) {
            d(this.option, t, !0);
        }, Wc.prototype.get = function(t, e) {
            return null == t ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel);
        }, Wc.prototype.getShallow = function(t, e) {
            var n = this.option;
            n = null == n ? n : n[t];
            return null != n || e || (e = this.parentModel) && (n = e.getShallow(t)), n;
        }, Wc.prototype.getModel = function(t, e) {
            var n = null != t;
            t = n ? this.parsePath(t) : null;
            return new Wc(n ? this._doGet(t) : this.option, e = e || this.parentModel && this.parentModel.getModel(this.resolveParentPath(t)), this.ecModel);
        }, Wc.prototype.isEmpty = function() {
            return null == this.option;
        }, Wc.prototype.restoreData = function() {}, Wc.prototype.clone = function() {
            return new this.constructor(_(this.option));
        }, Wc.prototype.parsePath = function(t) {
            return "string" == typeof t ? t.split(".") : t;
        }, Wc.prototype.resolveParentPath = function(t) {
            return t;
        }, Wc.prototype.isAnimationEnabled = function() {
            if (!p.node && this.option) return null != this.option.animation ? !!this.option.animation : this.parentModel ? this.parentModel.isAnimationEnabled() : void 0;
        }, Wc.prototype._doGet = function(t, e) {
            var n = this.option;
            if (t) {
                for (var i = 0; i < t.length && (!t[i] || null != (n = n && "object" == typeof n ? n[t[i]] : null)); i++) ;
                null == n && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel));
            }
            return n;
        };
        var Vc, Hc = Wc;
        function Wc(t, e, n) {
            this.parentModel = e, this.ecModel = n, this.option = t;
        }
        sa(Hc), ip = Hc, Vc = [ "__\0is_clz", ua++ ].join("_"), ip.prototype[Vc] = !0, ip.isInstance = function(t) {
            return !(!t || !t[Vc]);
        }, lt(Hc, Rc), lt(Hc, Bc), lt(Hc, ga), lt(Hc, Ac);
        var Gc = Math.round(10 * Math.random());
        function Uc(t) {
            return [ t || "", Gc++ ].join("_");
        }
        var Xc = "ZH", Yc = "EN", qc = Yc, jc = {}, Zc = {}, Kc = p.domSupported && -1 < (document.documentElement.lang || navigator.language || navigator.browserLanguage || qc).toUpperCase().indexOf(Xc) ? Xc : qc;
        function $c(t, e) {
            t = t.toUpperCase(), Zc[t] = new Hc(e), jc[t] = e;
        }
        $c(Yc, {
            time: {
                month: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                monthAbbr: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
                dayOfWeek: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
                dayOfWeekAbbr: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
            },
            legend: {
                selector: {
                    all: "All",
                    inverse: "Inv"
                }
            },
            toolbox: {
                brush: {
                    title: {
                        rect: "Box Select",
                        polygon: "Lasso Select",
                        lineX: "Horizontally Select",
                        lineY: "Vertically Select",
                        keep: "Keep Selections",
                        clear: "Clear Selections"
                    }
                },
                dataView: {
                    title: "Data View",
                    lang: [ "Data View", "Close", "Refresh" ]
                },
                dataZoom: {
                    title: {
                        zoom: "Zoom",
                        back: "Zoom Reset"
                    }
                },
                magicType: {
                    title: {
                        line: "Switch to Line Chart",
                        bar: "Switch to Bar Chart",
                        stack: "Stack",
                        tiled: "Tile"
                    }
                },
                restore: {
                    title: "Restore"
                },
                saveAsImage: {
                    title: "Save as Image",
                    lang: [ "Right Click to Save Image" ]
                }
            },
            series: {
                typeNames: {
                    pie: "Pie chart",
                    bar: "Bar chart",
                    line: "Line chart",
                    scatter: "Scatter plot",
                    effectScatter: "Ripple scatter plot",
                    radar: "Radar chart",
                    tree: "Tree",
                    treemap: "Treemap",
                    boxplot: "Boxplot",
                    candlestick: "Candlestick",
                    k: "K line chart",
                    heatmap: "Heat map",
                    map: "Map",
                    parallel: "Parallel coordinate map",
                    lines: "Line graph",
                    graph: "Relationship graph",
                    sankey: "Sankey diagram",
                    funnel: "Funnel chart",
                    gauge: "Gauge",
                    pictorialBar: "Pictorial bar",
                    themeRiver: "Theme River Map",
                    sunburst: "Sunburst",
                    custom: "Custom chart",
                    chart: "Chart"
                }
            },
            aria: {
                general: {
                    withTitle: 'This is a chart about "{title}"',
                    withoutTitle: "This is a chart"
                },
                series: {
                    single: {
                        prefix: "",
                        withName: " with type {seriesType} named {seriesName}.",
                        withoutName: " with type {seriesType}."
                    },
                    multiple: {
                        prefix: ". It consists of {seriesCount} series count.",
                        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
                        withoutName: " The {seriesId} series is a {seriesType}.",
                        separator: {
                            middle: "",
                            end: ""
                        }
                    }
                },
                data: {
                    allData: "The data is as follows: ",
                    partialData: "The first {displayCnt} items are: ",
                    withName: "the data for {name} is {value}",
                    withoutName: "{value}",
                    separator: {
                        middle: ", ",
                        end: ". "
                    }
                }
            }
        }), $c(Xc, {
            time: {
                month: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
                monthAbbr: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
                dayOfWeek: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
                dayOfWeekAbbr: [ "日", "一", "二", "三", "四", "五", "六" ]
            },
            legend: {
                selector: {
                    all: "全选",
                    inverse: "反选"
                }
            },
            toolbox: {
                brush: {
                    title: {
                        rect: "矩形选择",
                        polygon: "圈选",
                        lineX: "横向选择",
                        lineY: "纵向选择",
                        keep: "保持选择",
                        clear: "清除选择"
                    }
                },
                dataView: {
                    title: "数据视图",
                    lang: [ "数据视图", "关闭", "刷新" ]
                },
                dataZoom: {
                    title: {
                        zoom: "区域缩放",
                        back: "区域缩放还原"
                    }
                },
                magicType: {
                    title: {
                        line: "切换为折线图",
                        bar: "切换为柱状图",
                        stack: "切换为堆叠",
                        tiled: "切换为平铺"
                    }
                },
                restore: {
                    title: "还原"
                },
                saveAsImage: {
                    title: "保存为图片",
                    lang: [ "右键另存为图片" ]
                }
            },
            series: {
                typeNames: {
                    pie: "饼图",
                    bar: "柱状图",
                    line: "折线图",
                    scatter: "散点图",
                    effectScatter: "涟漪散点图",
                    radar: "雷达图",
                    tree: "树图",
                    treemap: "矩形树图",
                    boxplot: "箱型图",
                    candlestick: "K线图",
                    k: "K线图",
                    heatmap: "热力图",
                    map: "地图",
                    parallel: "平行坐标图",
                    lines: "线图",
                    graph: "关系图",
                    sankey: "桑基图",
                    funnel: "漏斗图",
                    gauge: "仪表盘图",
                    pictorialBar: "象形柱图",
                    themeRiver: "主题河流图",
                    sunburst: "旭日图",
                    custom: "自定义图表",
                    chart: "图表"
                }
            },
            aria: {
                general: {
                    withTitle: "这是一个关于“{title}”的图表。",
                    withoutTitle: "这是一个图表，"
                },
                series: {
                    single: {
                        prefix: "",
                        withName: "图表类型是{seriesType}，表示{seriesName}。",
                        withoutName: "图表类型是{seriesType}。"
                    },
                    multiple: {
                        prefix: "它由{seriesCount}个图表系列组成。",
                        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                        withoutName: "第{seriesId}个系列是一个{seriesType}，",
                        separator: {
                            middle: "；",
                            end: "。"
                        }
                    }
                },
                data: {
                    allData: "其数据是——",
                    partialData: "其中，前{displayCnt}项是——",
                    withName: "{name}的数据是{value}",
                    withoutName: "{value}",
                    separator: {
                        middle: "，",
                        end: ""
                    }
                }
            }
        });
        var Qc = 1e3, Jc = 60 * Qc, tp = 60 * Jc, ep = 24 * tp, np = (ua = 365 * ep, {
            year: "{yyyy}",
            month: "{MMM}",
            day: "{d}",
            hour: "{HH}:{mm}",
            minute: "{HH}:{mm}",
            second: "{HH}:{mm}:{ss}",
            millisecond: "{HH}:{mm}:{ss} {SSS}",
            none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
        }), ip = "{yyyy}-{MM}-{dd}", rp = {
            year: "{yyyy}",
            month: "{yyyy}-{MM}",
            day: ip,
            hour: ip + " " + np.hour,
            minute: ip + " " + np.minute,
            second: ip + " " + np.second,
            millisecond: np.none
        }, op = [ "year", "month", "day", "hour", "minute", "second", "millisecond" ], ap = [ "year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond" ];
        function sp(t, e) {
            return "0000".substr(0, e - (t += "").length) + t;
        }
        function lp(t) {
            switch (t) {
              case "half-year":
              case "quarter":
                return "month";

              case "week":
              case "half-week":
                return "day";

              case "half-day":
              case "quarter-day":
                return "hour";

              default:
                return t;
            }
        }
        function up(t, e, n, i) {
            t = Io(t);
            var r = t[pp(n)](), o = t[dp(n)]() + 1, a = Math.floor((o - 1) / 3) + 1, s = t[fp(n)](), l = t["get" + (n ? "UTC" : "") + "Day"](), u = t[gp(n)](), h = (u - 1) % 12 + 1, c = t[yp(n)](), p = t[mp(n)](), d = (t = t[vp(n)](), 
            n = (i instanceof Hc ? i : Zc[i || Kc] || Zc[qc]).getModel("time"), i = n.get("month"), 
            n.get("monthAbbr")), f = n.get("dayOfWeek");
            n = n.get("dayOfWeekAbbr");
            return (e || "").replace(/{yyyy}/g, r + "").replace(/{yy}/g, sp(r % 100 + "", 2)).replace(/{Q}/g, a + "").replace(/{MMMM}/g, i[o - 1]).replace(/{MMM}/g, d[o - 1]).replace(/{MM}/g, sp(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, sp(s, 2)).replace(/{d}/g, s + "").replace(/{eeee}/g, f[l]).replace(/{ee}/g, n[l]).replace(/{e}/g, l + "").replace(/{HH}/g, sp(u, 2)).replace(/{H}/g, u + "").replace(/{hh}/g, sp(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, sp(c, 2)).replace(/{m}/g, c + "").replace(/{ss}/g, sp(p, 2)).replace(/{s}/g, p + "").replace(/{SSS}/g, sp(t, 3)).replace(/{S}/g, t + "");
        }
        function hp(t, e) {
            t = Io(t);
            var n = t[dp(e)]() + 1, i = t[fp(e)](), r = t[gp(e)](), o = t[yp(e)](), a = t[mp(e)]();
            t = 0 === t[vp(e)](), e = t && 0 === a, a = e && 0 === o, o = a && 0 === r, r = o && 1 === i;
            return r && 1 === n ? "year" : r ? "month" : o ? "day" : a ? "hour" : e ? "minute" : t ? "second" : "millisecond";
        }
        function cp(t, e, n) {
            var i = W(t) ? Io(t) : t;
            switch (e = e || hp(t, n)) {
              case "year":
                return i[pp(n)]();

              case "half-year":
                return 6 <= i[dp(n)]() ? 1 : 0;

              case "quarter":
                return Math.floor((i[dp(n)]() + 1) / 4);

              case "month":
                return i[dp(n)]();

              case "day":
                return i[fp(n)]();

              case "half-day":
                return i[gp(n)]() / 24;

              case "hour":
                return i[gp(n)]();

              case "minute":
                return i[yp(n)]();

              case "second":
                return i[mp(n)]();

              case "millisecond":
                return i[vp(n)]();
            }
        }
        function pp(t) {
            return t ? "getUTCFullYear" : "getFullYear";
        }
        function dp(t) {
            return t ? "getUTCMonth" : "getMonth";
        }
        function fp(t) {
            return t ? "getUTCDate" : "getDate";
        }
        function gp(t) {
            return t ? "getUTCHours" : "getHours";
        }
        function yp(t) {
            return t ? "getUTCMinutes" : "getMinutes";
        }
        function mp(t) {
            return t ? "getUTCSeconds" : "getSeconds";
        }
        function vp(t) {
            return t ? "getUTCMilliseconds" : "getMilliseconds";
        }
        function _p(t) {
            return t ? "setUTCMonth" : "setMonth";
        }
        function xp(t) {
            return t ? "setUTCDate" : "setDate";
        }
        function wp(t) {
            return t ? "setUTCHours" : "setHours";
        }
        function bp(t) {
            return t ? "setUTCMinutes" : "setMinutes";
        }
        function Sp(t) {
            return t ? "setUTCSeconds" : "setSeconds";
        }
        function Mp(t) {
            return t ? "setUTCMilliseconds" : "setMilliseconds";
        }
        function Tp(t) {
            var e;
            return Po(t) ? (e = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (1 < e.length ? "." + e[1] : "") : H(t) ? t : "-";
        }
        function Cp(t, e) {
            return "{" + t + (null == e ? "" : e) + "}";
        }
        var Ip = Tt, kp = [ "a", "b", "c", "d", "e", "f", "g" ];
        function Dp(t, e, n) {
            var i = (e = V(e) ? e : [ e ]).length;
            if (!i) return "";
            for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
                var a = kp[o];
                t = t.replace(Cp(a), Cp(a, 0));
            }
            for (var s = 0; s < i; s++) for (var l = 0; l < r.length; l++) {
                var u = e[s][r[l]];
                t = t.replace(Cp(kp[l], s), n ? _e(u) : u);
            }
            return t;
        }
        function Ap(t, e) {
            return e = e || "transparent", H(t) ? t : P(t) && t.colorStops && (t.colorStops[0] || {}).color || e;
        }
        var Lp = E, Pp = [ "left", "right", "top", "bottom", "width", "height" ], Op = [ [ "width", "left", "right" ], [ "height", "top", "bottom" ] ];
        function Rp(a, s, l, u, h) {
            var c = 0, p = 0, d = (null == u && (u = 1 / 0), null == h && (h = 1 / 0), 0);
            s.eachChild((function(t, e) {
                var n, i, r, o = t.getBoundingRect();
                e = s.childAt(e + 1), e = e && e.getBoundingRect();
                d = "horizontal" === a ? (r = o.width + (e ? -e.x + o.x : 0), (n = c + r) > u || t.newline ? (c = 0, 
                n = r, p += d + l, o.height) : Math.max(d, o.height)) : (r = o.height + (e ? -e.y + o.y : 0), 
                (i = p + r) > h || t.newline ? (c += d + l, p = 0, i = r, o.width) : Math.max(d, o.width)), 
                t.newline || (t.x = c, t.y = p, t.markRedraw(), "horizontal" === a ? c = n + l : p = i + l);
            }));
        }
        function Np(t, e, n) {
            n = Ip(n || 0);
            var i = e.width, r = e.height, o = vo(t.left, i), a = vo(t.top, r), s = (e = vo(t.right, i), 
            vo(t.bottom, r)), l = vo(t.width, i), u = vo(t.height, r), h = n[2] + n[0], c = n[1] + n[3], p = t.aspect;
            switch (isNaN(l) && (l = i - e - c - o), isNaN(u) && (u = r - s - h - a), null != p && (isNaN(l) && isNaN(u) && (i / r < p ? l = .8 * i : u = .8 * r), 
            isNaN(l) && (l = p * u), isNaN(u)) && (u = l / p), isNaN(o) && (o = i - e - l - c), 
            isNaN(a) && (a = r - s - u - h), t.left || t.right) {
              case "center":
                o = i / 2 - l / 2 - n[3];
                break;

              case "right":
                o = i - l - c;
            }
            switch (t.top || t.bottom) {
              case "middle":
              case "center":
                a = r / 2 - u / 2 - n[0];
                break;

              case "bottom":
                a = r - u - h;
            }
            o = o || 0, a = a || 0, isNaN(l) && (l = i - c - o - (e || 0)), isNaN(u) && (u = r - h - a - (s || 0));
            p = new U(o + n[3], a + n[0], l, u);
            return p.margin = n, p;
        }
        function Ep(t) {
            t = t.layoutMode || t.constructor.layoutMode;
            return P(t) ? t : t ? {
                type: t
            } : null;
        }
        function zp(l, u, t) {
            var h = t && t.ignoreSize, e = (t = (V(h) || (h = [ h, h ]), n(Op[0], 0)), n(Op[1], 1));
            function n(t, e) {
                var n = {}, i = 0, r = {}, o = 0;
                if (Lp(t, (function(t) {
                    r[t] = l[t];
                })), Lp(t, (function(t) {
                    c(u, t) && (n[t] = r[t] = u[t]), p(n, t) && i++, p(r, t) && o++;
                })), h[e]) p(u, t[1]) ? r[t[2]] = null : p(u, t[2]) && (r[t[1]] = null); else if (2 !== o && i) {
                    if (!(2 <= i)) for (var a = 0; a < t.length; a++) {
                        var s = t[a];
                        if (!c(n, s) && c(l, s)) {
                            n[s] = l[s];
                            break;
                        }
                    }
                    return n;
                }
                return r;
            }
            function c(t, e) {
                return t.hasOwnProperty(e);
            }
            function p(t, e) {
                return null != t[e] && "auto" !== t[e];
            }
            function i(t, e, n) {
                Lp(t, (function(t) {
                    e[t] = n[t];
                }));
            }
            i(Op[0], l, t), i(Op[1], l, e);
        }
        function Bp(t) {
            return e = {}, (n = t) && e && Lp(Pp, (function(t) {
                n.hasOwnProperty(t) && (e[t] = n[t]);
            })), e;
            var e, n;
        }
        dt(Rp, "vertical"), dt(Rp, "horizontal");
        var Fp, Vp, Hp, Wp, Gp = Zo(), Up = (u(Xp, Fp = Hc), Xp.prototype.init = function(t, e, n) {
            this.mergeDefaultAndTheme(t, n);
        }, Xp.prototype.mergeDefaultAndTheme = function(t, e) {
            var n = Ep(this), i = n ? Bp(t) : {};
            d(t, e.getTheme().get(this.mainType)), d(t, this.getDefaultOption()), n && zp(t, i, n);
        }, Xp.prototype.mergeOption = function(t, e) {
            d(this.option, t, !0);
            var n = Ep(this);
            n && zp(this.option, t, n);
        }, Xp.prototype.optionUpdated = function(t, e) {}, Xp.prototype.getDefaultOption = function() {
            var t = this.constructor;
            if (!(e = t) || !e[oa]) return t.defaultOption;
            var e = Gp(this);
            if (!e.defaultOption) {
                for (var n = [], i = t; i; ) {
                    var r = i.prototype.defaultOption;
                    r && n.push(r), i = i.superClass;
                }
                for (var o = {}, a = n.length - 1; 0 <= a; a--) o = d(o, n[a], !0);
                e.defaultOption = o;
            }
            return e.defaultOption;
        }, Xp.prototype.getReferringComponents = function(t, e) {
            var n = t + "Id";
            return ta(this.ecModel, t, {
                index: this.get(t + "Index", !0),
                id: this.get(n, !0)
            }, e);
        }, Xp.prototype.getBoxLayoutParams = function() {
            return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
            };
        }, Xp.prototype.getZLevelKey = function() {
            return "";
        }, Xp.prototype.setZLevel = function(t) {
            this.option.zlevel = t;
        }, Xp.protoInitialize = ((Rc = Xp.prototype).type = "component", Rc.id = "", Rc.name = "", 
        Rc.mainType = "", Rc.subType = "", void (Rc.componentIndex = 0)), Xp);
        function Xp(t, e, n) {
            t = Fp.call(this, t, e, n) || this;
            return t.uid = Uc("ec_cpt_model"), t;
        }
        function Yp(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
            }), t[e];
        }
        la(Up, Hc), pa(Up), Wp = {}, (Hp = Up).registerSubTypeDefaulter = function(t, e) {
            t = aa(t);
            Wp[t.main] = e;
        }, Hp.determineSubType = function(t, e) {
            var n, i = e.type;
            return i || (n = aa(t).main, Hp.hasSubTypes(t) && Wp[n] && (i = Wp[n](e))), i;
        }, Vp = function(t) {
            var e = [];
            return E(Up.getClassesByMainType(t), (function(t) {
                e = e.concat(t.dependencies || t.prototype.dependencies || []);
            })), e = F(e, (function(t) {
                return aa(t).main;
            })), "dataset" !== t && I(e, "dataset") <= 0 && e.unshift("dataset"), e;
        }, Up.topologicalTravel = function(t, e, n, i) {
            if (t.length) {
                c = {}, p = [], E(h = e, (function(n) {
                    var e, i, r = Yp(c, n), t = (t = r.originalDeps = Vp(n), e = h, i = [], E(t, (function(t) {
                        0 <= I(e, t) && i.push(t);
                    })), i);
                    r.entryCount = t.length, 0 === r.entryCount && p.push(n), E(t, (function(t) {
                        I(r.predecessor, t) < 0 && r.predecessor.push(t);
                        var e = Yp(c, t);
                        I(e.successor, t) < 0 && e.successor.push(n);
                    }));
                }));
                e = {
                    graph: c,
                    noEntryList: p
                };
                var r = e.graph, o = e.noEntryList, a = {};
                for (E(t, (function(t) {
                    a[t] = !0;
                })); o.length; ) {
                    var s = o.pop(), l = r[s], u = !!a[s];
                    u && (n.call(i, s, l.originalDeps.slice()), delete a[s]), E(l.successor, u ? f : d);
                }
                E(a, (function() {
                    throw new Error("");
                }));
            }
            var h, c, p;
            function d(t) {
                r[t].entryCount--, 0 === r[t].entryCount && o.push(t);
            }
            function f(t) {
                a[t] = !0, d(t);
            }
        };
        Bc = "", ga = ("undefined" != typeof navigator && (Bc = navigator.platform || ""), 
        "rgba(0, 0, 0, 0.2)");
        var qp = {
            darkMode: "auto",
            colorBy: "series",
            color: [ "#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc" ],
            gradientColor: [ "#f6efa6", "#d88273", "#bf444c" ],
            aria: {
                decal: {
                    decals: [ {
                        color: ga,
                        dashArrayX: [ 1, 0 ],
                        dashArrayY: [ 2, 5 ],
                        symbolSize: 1,
                        rotation: Math.PI / 6
                    }, {
                        color: ga,
                        symbol: "circle",
                        dashArrayX: [ [ 8, 8 ], [ 0, 8, 8, 0 ] ],
                        dashArrayY: [ 6, 0 ],
                        symbolSize: .8
                    }, {
                        color: ga,
                        dashArrayX: [ 1, 0 ],
                        dashArrayY: [ 4, 3 ],
                        rotation: -Math.PI / 4
                    }, {
                        color: ga,
                        dashArrayX: [ [ 6, 6 ], [ 0, 6, 6, 0 ] ],
                        dashArrayY: [ 6, 0 ]
                    }, {
                        color: ga,
                        dashArrayX: [ [ 1, 0 ], [ 1, 6 ] ],
                        dashArrayY: [ 1, 0, 6, 0 ],
                        rotation: Math.PI / 4
                    }, {
                        color: ga,
                        symbol: "triangle",
                        dashArrayX: [ [ 9, 9 ], [ 0, 9, 9, 0 ] ],
                        dashArrayY: [ 7, 2 ],
                        symbolSize: .75
                    } ]
                }
            },
            textStyle: {
                fontFamily: Bc.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            stateAnimation: {
                duration: 300,
                easing: "cubicOut"
            },
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut",
            animationEasingUpdate: "cubicInOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        }, jp = z([ "tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName" ]), Zp = "original", Kp = "arrayRows", $p = "objectRows", Qp = "keyedColumns", Jp = "typedArray", td = "unknown", ed = "column", nd = "row", id = {
            Must: 1,
            Might: 2,
            Not: 3
        }, rd = Zo();
        function od(n, t, e) {
            var r, i, o, a, s, l = {}, u = sd(t);
            return u && n && (o = [], a = [], t = t.ecModel, t = rd(t).datasetMap, u = u.uid + "_" + e.seriesLayoutBy, 
            E(n = n.slice(), (function(t, e) {
                t = P(t) ? t : n[e] = {
                    name: t
                };
                "ordinal" === t.type && null == r && (r = e, i = c(t)), l[t.name] = [];
            })), s = t.get(u) || t.set(u, {
                categoryWayDim: i,
                valueWayDim: 0
            }), E(n, (function(t, e) {
                var n, i = t.name;
                t = c(t);
                null == r ? (n = s.valueWayDim, h(l[i], n, t), h(a, n, t), s.valueWayDim += t) : r === e ? (h(l[i], 0, t), 
                h(o, 0, t)) : (n = s.categoryWayDim, h(l[i], n, t), h(a, n, t), s.categoryWayDim += t);
            })), o.length && (l.itemName = o), a.length) && (l.seriesName = a), l;
            function h(t, e, n) {
                for (var i = 0; i < n; i++) t.push(e + i);
            }
            function c(t) {
                t = t.dimsDef;
                return t ? t.length : 1;
            }
        }
        function ad(t, l, u) {
            var h, c, p, e = {};
            return sd(t) && (c = l.sourceFormat, p = l.dimensionsDefine, c !== $p && c !== Qp || E(p, (function(t, e) {
                "name" === (P(t) ? t.name : t) && (h = e);
            })), t = function() {
                for (var t = {}, e = {}, n = [], i = 0, r = Math.min(5, u); i < r; i++) {
                    var o = ud(l.data, c, l.seriesLayoutBy, p, l.startIndex, i), a = (n.push(o), o === id.Not);
                    if (a && null == t.v && i !== h && (t.v = i), null != t.n && t.n !== t.v && (a || n[t.n] !== id.Not) || (t.n = i), 
                    s(t) && n[t.n] !== id.Not) return t;
                    a || (o === id.Might && null == e.v && i !== h && (e.v = i), null != e.n && e.n !== e.v) || (e.n = i);
                }
                function s(t) {
                    return null != t.v && null != t.n;
                }
                return s(t) ? t : s(e) ? e : null;
            }()) && (e.value = [ t.v ], t = null != h ? h : t.n, e.itemName = [ t ], e.seriesName = [ t ]), 
            e;
        }
        function sd(t) {
            if (!t.get("data", !0)) return ta(t.ecModel, "dataset", {
                index: t.get("datasetIndex", !0),
                id: t.get("datasetId", !0)
            }, Jo).models[0];
        }
        function ld(t, e) {
            return ud(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
        }
        function ud(t, e, n, i, r, o) {
            var a, s, l;
            if (!yt(t)) {
                if (i && (P(i = i[o]) ? (s = i.name, l = i.type) : H(i) && (s = i)), null != l) return "ordinal" === l ? id.Must : id.Not;
                if (e === Kp) {
                    var u = t;
                    if (n === nd) {
                        for (var h = u[o], c = 0; c < (h || []).length && c < 5; c++) if (null != (a = m(h[r + c]))) return a;
                    } else for (c = 0; c < u.length && c < 5; c++) {
                        var p = u[r + c];
                        if (p && null != (a = m(p[o]))) return a;
                    }
                } else if (e === $p) {
                    var d = t;
                    if (!s) return id.Not;
                    for (c = 0; c < d.length && c < 5; c++) if ((g = d[c]) && null != (a = m(g[s]))) return a;
                } else if (e === Qp) {
                    if (!s) return id.Not;
                    if (!(h = t[s]) || yt(h)) return id.Not;
                    for (c = 0; c < h.length && c < 5; c++) if (null != (a = m(h[c]))) return a;
                } else if (e === Zp) {
                    var f = t;
                    for (c = 0; c < f.length && c < 5; c++) {
                        var g = f[c], y = Vo(g);
                        if (!V(y)) return id.Not;
                        if (null != (a = m(y[o]))) return a;
                    }
                }
            }
            return id.Not;
            function m(t) {
                var e = H(t);
                return null != t && isFinite(t) && "" !== t ? e ? id.Might : id.Not : e && "-" !== t ? id.Must : void 0;
            }
        }
        var hd = z();
        var cd = Zo(), pd = (Zo(), dd.prototype.getColorFromPalette = function(t, e, n) {
            var i = zo(this.get("color", !0)), r = this.get("colorLayer", !0), o = this, a = cd;
            return a = a(e = e || o), o = a.paletteIdx || 0, (e = a.paletteNameMap = a.paletteNameMap || {}).hasOwnProperty(t) ? e[t] : (r = (r = null != n && r ? function(t, e) {
                for (var n = t.length, i = 0; i < n; i++) if (t[i].length > e) return t[i];
                return t[n - 1];
            }(r, n) : i) || i) && r.length ? (n = r[o], t && (e[t] = n), a.paletteIdx = (o + 1) % r.length, 
            n) : void 0;
        }, dd.prototype.clearColorPalette = function() {
            var t, e;
            (e = cd)(t = this).paletteIdx = 0, e(t).paletteNameMap = {};
        }, dd);
        function dd() {}
        var fd, gd, yd, md, vd = "\0_ec_inner", _d = (u(s, md = Hc), s.prototype.init = function(t, e, n, i, r, o) {
            i = i || {}, this.option = null, this._theme = new Hc(i), this._locale = new Hc(r), 
            this._optionManager = o;
        }, s.prototype.setOption = function(t, e, n) {
            e = bd(e);
            this._optionManager.setOption(t, n, e), this._resetOption(null, e);
        }, s.prototype.resetOption = function(t, e) {
            return this._resetOption(t, bd(e));
        }, s.prototype._resetOption = function(t, e) {
            var n, i = !1, r = this._optionManager;
            return t && "recreate" !== t || (n = r.mountOption("recreate" === t), this.option && "recreate" !== t ? (this.restoreData(), 
            this._mergeOption(n, e)) : yd(this, n), i = !0), "timeline" !== t && "media" !== t || this.restoreData(), 
            t && "recreate" !== t && "timeline" !== t || (n = r.getTimelineOption(this)) && (i = !0, 
            this._mergeOption(n, e)), t && "recreate" !== t && "media" !== t || (n = r.getMediaOption(this)).length && E(n, (function(t) {
                i = !0, this._mergeOption(t, e);
            }), this), i;
        }, s.prototype.mergeOption = function(t) {
            this._mergeOption(t, null);
        }, s.prototype._mergeOption = function(i, t) {
            var r = this.option, h = this._componentsMap, c = this._componentsCount, n = [], o = z(), p = t && t.replaceMergeMainTypeMap;
            rd(this).datasetMap = z(), E(i, (function(t, e) {
                null != t && (Up.hasClass(e) ? e && (n.push(e), o.set(e, !0)) : r[e] = null == r[e] ? _(t) : d(r[e], t, !0));
            })), p && p.each((function(t, e) {
                Up.hasClass(e) && !o.get(e) && (n.push(e), o.set(e, !0));
            })), Up.topologicalTravel(n, Up.getAllClassMainTypes(), (function(o) {
                t = this, n = zo(i[e = o]);
                var t = (e = (e = hd.get(e)) && e(t)) ? n.concat(e) : n, e = h.get(o), n = Ho(e, t, e ? p && p.get(o) ? "replaceMerge" : "normalMerge" : "replaceAll");
                qo(n, o, Up), r[o] = null, h.set(o, null), c.set(o, 0);
                var a, s = [], l = [], u = 0;
                E(n, (function(t, e) {
                    var n = t.existing, i = t.newOption;
                    if (i) {
                        var r = Up.getClass(o, t.keyInfo.subType, !("series" === o));
                        if (!r) return;
                        if ("tooltip" === o) {
                            if (a) return;
                            a = !0;
                        }
                        n && n.constructor === r ? (n.name = t.keyInfo.name, n.mergeOption(i, this), n.optionUpdated(i, !1)) : (e = O({
                            componentIndex: e
                        }, t.keyInfo), O(n = new r(i, this, this, e), e), t.brandNew && (n.__requireNewView = !0), 
                        n.init(i, this, this), n.optionUpdated(null, !0));
                    } else n && (n.mergeOption({}, this), n.optionUpdated({}, !1));
                    n ? (s.push(n.option), l.push(n), u++) : (s.push(void 0), l.push(void 0));
                }), this), r[o] = s, h.set(o, l), c.set(o, u), "series" === o && fd(this);
            }), this), this._seriesIndices || fd(this);
        }, s.prototype.getOption = function() {
            var a = _(this.option);
            return E(a, (function(t, e) {
                if (Up.hasClass(e)) {
                    for (var n = zo(t), i = n.length, r = !1, o = i - 1; 0 <= o; o--) n[o] && !Yo(n[o]) ? r = !0 : (n[o] = null, 
                    r || i--);
                    n.length = i, a[e] = n;
                }
            })), delete a[vd], a;
        }, s.prototype.getTheme = function() {
            return this._theme;
        }, s.prototype.getLocaleModel = function() {
            return this._locale;
        }, s.prototype.setUpdatePayload = function(t) {
            this._payload = t;
        }, s.prototype.getUpdatePayload = function() {
            return this._payload;
        }, s.prototype.getComponent = function(t, e) {
            var n = this._componentsMap.get(t);
            if (n) {
                t = n[e || 0];
                if (t) return t;
                if (null == e) for (var i = 0; i < n.length; i++) if (n[i]) return n[i];
            }
        }, s.prototype.queryComponents = function(t) {
            var e, n, i, r, o, a = t.mainType;
            return a && (n = t.index, i = t.id, r = t.name, o = this._componentsMap.get(a)) && o.length ? (null != n ? (e = [], 
            E(zo(n), (function(t) {
                o[t] && e.push(o[t]);
            }))) : e = null != i ? xd("id", i, o) : null != r ? xd("name", r, o) : ct(o, (function(t) {
                return !!t;
            })), wd(e, t)) : [];
        }, s.prototype.findComponents = function(t) {
            var e, n = t.query, i = t.mainType, r = (r = i + "Index", o = i + "Id", e = i + "Name", 
            !n || null == n[r] && null == n[o] && null == n[e] ? null : {
                mainType: i,
                index: n[r],
                id: n[o],
                name: n[e]
            }), o = wd(r ? this.queryComponents(r) : ct(this._componentsMap.get(i), (function(t) {
                return !!t;
            })), t);
            return t.filter ? ct(o, t.filter) : o;
        }, s.prototype.eachComponent = function(t, e, n) {
            var i = this._componentsMap;
            if (k(t)) {
                var r = e, o = t;
                i.each((function(t, e) {
                    for (var n = 0; t && n < t.length; n++) {
                        var i = t[n];
                        i && o.call(r, e, i, i.componentIndex);
                    }
                }));
            } else for (var a = H(t) ? i.get(t) : P(t) ? this.findComponents(t) : null, s = 0; a && s < a.length; s++) {
                var l = a[s];
                l && e.call(n, l, l.componentIndex);
            }
        }, s.prototype.getSeriesByName = function(t) {
            var e = Uo(t, null);
            return ct(this._componentsMap.get("series"), (function(t) {
                return !!t && null != e && t.name === e;
            }));
        }, s.prototype.getSeriesByIndex = function(t) {
            return this._componentsMap.get("series")[t];
        }, s.prototype.getSeriesByType = function(e) {
            return ct(this._componentsMap.get("series"), (function(t) {
                return !!t && t.subType === e;
            }));
        }, s.prototype.getSeries = function() {
            return ct(this._componentsMap.get("series"), (function(t) {
                return !!t;
            }));
        }, s.prototype.getSeriesCount = function() {
            return this._componentsCount.get("series");
        }, s.prototype.eachSeries = function(n, i) {
            gd(this), E(this._seriesIndices, (function(t) {
                var e = this._componentsMap.get("series")[t];
                n.call(i, e, t);
            }), this);
        }, s.prototype.eachRawSeries = function(e, n) {
            E(this._componentsMap.get("series"), (function(t) {
                t && e.call(n, t, t.componentIndex);
            }));
        }, s.prototype.eachSeriesByType = function(n, i, r) {
            gd(this), E(this._seriesIndices, (function(t) {
                var e = this._componentsMap.get("series")[t];
                e.subType === n && i.call(r, e, t);
            }), this);
        }, s.prototype.eachRawSeriesByType = function(t, e, n) {
            return E(this.getSeriesByType(t), e, n);
        }, s.prototype.isSeriesFiltered = function(t) {
            return gd(this), null == this._seriesIndicesMap.get(t.componentIndex);
        }, s.prototype.getCurrentSeriesIndices = function() {
            return (this._seriesIndices || []).slice();
        }, s.prototype.filterSeries = function(n, i) {
            gd(this);
            var r = [];
            E(this._seriesIndices, (function(t) {
                var e = this._componentsMap.get("series")[t];
                n.call(i, e, t) && r.push(t);
            }), this), this._seriesIndices = r, this._seriesIndicesMap = z(r);
        }, s.prototype.restoreData = function(n) {
            fd(this);
            var t = this._componentsMap, i = [];
            t.each((function(t, e) {
                Up.hasClass(e) && i.push(e);
            })), Up.topologicalTravel(i, Up.getAllClassMainTypes(), (function(e) {
                E(t.get(e), (function(t) {
                    !t || "series" === e && function(t, e) {
                        var n, i;
                        if (e) return n = e.seriesIndex, i = e.seriesId, e = e.seriesName, null != n && t.componentIndex !== n || null != i && t.id !== i || null != e && t.name !== e;
                    }(t, n) || t.restoreData();
                }));
            }));
        }, s.internalField = (fd = function(t) {
            var e = t._seriesIndices = [];
            E(t._componentsMap.get("series"), (function(t) {
                t && e.push(t.componentIndex);
            })), t._seriesIndicesMap = z(e);
        }, gd = function(t) {}, void (yd = function(t, e) {
            t.option = {}, t.option[vd] = 1, t._componentsMap = z({
                series: []
            }), t._componentsCount = z();
            var n, i, r = e.aria;
            P(r) && null == r.enabled && (r.enabled = !0), n = e, r = t._theme.option, i = n.color && !n.colorLayer, 
            E(r, (function(t, e) {
                "colorLayer" === e && i || Up.hasClass(e) || ("object" == typeof t ? n[e] = n[e] ? d(n[e], t, !1) : _(t) : null == n[e] && (n[e] = t));
            })), d(e, qp, !1), t._mergeOption(e, null);
        })), s);
        function s() {
            return null !== md && md.apply(this, arguments) || this;
        }
        function xd(e, t, n) {
            var i, r;
            return V(t) ? (i = z(), E(t, (function(t) {
                null != t && null != Uo(t, null) && i.set(t, !0);
            })), ct(n, (function(t) {
                return t && i.get(t[e]);
            }))) : (r = Uo(t, null), ct(n, (function(t) {
                return t && null != r && t[e] === r;
            })));
        }
        function wd(t, e) {
            return e.hasOwnProperty("subType") ? ct(t, (function(t) {
                return t && t.subType === e.subType;
            })) : t;
        }
        function bd(t) {
            var e = z();
            return t && E(zo(t.replaceMerge), (function(t) {
                e.set(t, !0);
            })), {
                replaceMergeMainTypeMap: e
            };
        }
        lt(_d, pd);
        function Sd(e) {
            E(Md, (function(t) {
                this[t] = pt(e[t], e);
            }), this);
        }
        var Md = [ "getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isSSR", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout" ], Td = {}, Cd = (Id.prototype.create = function(n, i) {
            var r = [];
            E(Td, (function(t, e) {
                t = t.create(n, i);
                r = r.concat(t || []);
            })), this._coordinateSystems = r;
        }, Id.prototype.update = function(e, n) {
            E(this._coordinateSystems, (function(t) {
                t.update && t.update(e, n);
            }));
        }, Id.prototype.getCoordinateSystems = function() {
            return this._coordinateSystems.slice();
        }, Id.register = function(t, e) {
            Td[t] = e;
        }, Id.get = function(t) {
            return Td[t];
        }, Id);
        function Id() {
            this._coordinateSystems = [];
        }
        var kd = /^(min|max)?(.+)$/, Dd = (Ad.prototype.setOption = function(t, e, n) {
            t && (E(zo(t.series), (function(t) {
                t && t.data && yt(t.data) && Dt(t.data);
            })), E(zo(t.dataset), (function(t) {
                t && t.source && yt(t.source) && Dt(t.source);
            }))), t = _(t);
            var i, r, o, a, s, l, u, h, c, p, d = this._optionBackup;
            t = (i = e, r = !d, s = [], t = (e = t).baseOption, l = e.timeline, u = e.options, 
            h = e.media, c = !!e.media, p = !!(u || l || t && t.timeline), t ? (a = t).timeline || (a.timeline = l) : ((p || c) && (e.options = e.media = null), 
            a = e), c && V(h) && E(h, (function(t) {
                t && t.option && (t.query ? s.push(t) : o = o || t);
            })), f(a), E(u, f), E(s, (function(t) {
                return f(t.option);
            })), {
                baseOption: a,
                timelineOptions: u || [],
                mediaDefault: o,
                mediaList: s
            });
            function f(e) {
                E(i, (function(t) {
                    t(e, r);
                }));
            }
            this._newBaseOption = t.baseOption, d ? (t.timelineOptions.length && (d.timelineOptions = t.timelineOptions), 
            t.mediaList.length && (d.mediaList = t.mediaList), t.mediaDefault && (d.mediaDefault = t.mediaDefault)) : this._optionBackup = t;
        }, Ad.prototype.mountOption = function(t) {
            var e = this._optionBackup;
            return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, 
            this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], _(t ? e.baseOption : this._newBaseOption);
        }, Ad.prototype.getTimelineOption = function(t) {
            var e, n = this._timelineOptions;
            return e = n.length && (t = t.getComponent("timeline")) ? _(n[t.getCurrentIndex()]) : e;
        }, Ad.prototype.getMediaOption = function(t) {
            var e, n, i = this._api.getWidth(), r = this._api.getHeight(), o = this._mediaList, a = this._mediaDefault, s = [], l = [];
            if (o.length || a) {
                for (var u = 0, h = o.length; u < h; u++) !function(t, e, n) {
                    var i = {
                        width: e,
                        height: n,
                        aspectratio: e / n
                    }, r = !0;
                    return E(t, (function(t, e) {
                        var n;
                        e = e.match(kd);
                        e && e[1] && e[2] && (n = e[1], e = e[2].toLowerCase(), e = i[e], t, ("min" === n ? t <= e : "max" === n ? e <= t : e === t) || (r = !1));
                    })), r;
                }(o[u].query, i, r) || s.push(u);
                (s = !s.length && a ? [ -1 ] : s).length && (e = s, n = this._currentMediaIndices, 
                e.join(",") !== n.join(",")) && (l = F(s, (function(t) {
                    return _((-1 === t ? a : o[t]).option);
                }))), this._currentMediaIndices = s;
            }
            return l;
        }, Ad);
        function Ad(t) {
            this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], 
            this._api = t;
        }
        var Ld = E, Pd = P, Od = [ "areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine" ];
        function Rd(t) {
            var e = t && t.itemStyle;
            if (e) for (var n = 0, i = Od.length; n < i; n++) {
                var r = Od[n], o = e.normal, a = e.emphasis;
                o && o[r] && (t[r] = t[r] || {}, t[r].normal ? d(t[r].normal, o[r]) : t[r].normal = o[r], 
                o[r] = null), a && a[r] && (t[r] = t[r] || {}, t[r].emphasis ? d(t[r].emphasis, a[r]) : t[r].emphasis = a[r], 
                a[r] = null);
            }
        }
        function Nd(t, e, n) {
            var i, r;
            t && t[e] && (t[e].normal || t[e].emphasis) && (i = t[e].normal, r = t[e].emphasis, 
            i && (n ? (t[e].normal = t[e].emphasis = null, B(t[e], i)) : t[e] = i), r) && (t.emphasis = t.emphasis || {}, 
            (t.emphasis[e] = r).focus && (t.emphasis.focus = r.focus), r.blurScope) && (t.emphasis.blurScope = r.blurScope);
        }
        function Ed(t) {
            Nd(t, "itemStyle"), Nd(t, "lineStyle"), Nd(t, "areaStyle"), Nd(t, "label"), Nd(t, "labelLine"), 
            Nd(t, "upperLabel"), Nd(t, "edgeLabel");
        }
        function zd(t, e) {
            var n = Pd(t) && t[e], i = Pd(n) && n.textStyle;
            if (i) for (var r = 0, o = Fo.length; r < o; r++) {
                var a = Fo[r];
                i.hasOwnProperty(a) && (n[a] = i[a]);
            }
        }
        function Bd(t) {
            t && (Ed(t), zd(t, "label"), t.emphasis) && zd(t.emphasis, "label");
        }
        function Fd(t) {
            return V(t) ? t : t ? [ t ] : [];
        }
        function Vd(t) {
            return (V(t) ? t[0] : t) || {};
        }
        function Hd(e, t) {
            Ld(Fd(e.series), (function(t) {
                if (Pd(t)) if (Pd(t)) {
                    Rd(t), Ed(t), zd(t, "label"), zd(t, "upperLabel"), zd(t, "edgeLabel"), t.emphasis && (zd(t.emphasis, "label"), 
                    zd(t.emphasis, "upperLabel"), zd(t.emphasis, "edgeLabel"));
                    var e = t.markPoint, n = (e && (Rd(e), Bd(e)), t.markLine), i = (n && (Rd(n), Bd(n)), 
                    t.markArea), r = (i && Bd(i), t.data);
                    if ("graph" === t.type) {
                        r = r || t.nodes;
                        var o = t.links || t.edges;
                        if (o && !yt(o)) for (var a = 0; a < o.length; a++) Bd(o[a]);
                        E(t.categories, (function(t) {
                            Ed(t);
                        }));
                    }
                    if (r && !yt(r)) for (a = 0; a < r.length; a++) Bd(r[a]);
                    if ((e = t.markPoint) && e.data) {
                        var s = e.data;
                        for (a = 0; a < s.length; a++) Bd(s[a]);
                    }
                    if ((n = t.markLine) && n.data) {
                        var l = n.data;
                        for (a = 0; a < l.length; a++) V(l[a]) ? (Bd(l[a][0]), Bd(l[a][1])) : Bd(l[a]);
                    }
                    "gauge" === t.type ? (zd(t, "axisLabel"), zd(t, "title"), zd(t, "detail")) : "treemap" === t.type ? (Nd(t.breadcrumb, "itemStyle"), 
                    E(t.levels, (function(t) {
                        Ed(t);
                    }))) : "tree" === t.type && Ed(t.leaves);
                }
            }));
            var n = [ "xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar" ];
            t && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Ld(n, (function(t) {
                Ld(Fd(e[t]), (function(t) {
                    t && (zd(t, "axisLabel"), zd(t.axisPointer, "label"));
                }));
            })), Ld(Fd(e.parallel), (function(t) {
                t = t && t.parallelAxisDefault;
                zd(t, "axisLabel"), zd(t && t.axisPointer, "label");
            })), Ld(Fd(e.calendar), (function(t) {
                Nd(t, "itemStyle"), zd(t, "dayLabel"), zd(t, "monthLabel"), zd(t, "yearLabel");
            })), Ld(Fd(e.radar), (function(t) {
                zd(t, "name"), t.name && null == t.axisName && (t.axisName = t.name, delete t.name), 
                null != t.nameGap && null == t.axisNameGap && (t.axisNameGap = t.nameGap, delete t.nameGap);
            })), Ld(Fd(e.geo), (function(t) {
                Pd(t) && (Bd(t), Ld(Fd(t.regions), (function(t) {
                    Bd(t);
                })));
            })), Ld(Fd(e.timeline), (function(t) {
                Bd(t), Nd(t, "label"), Nd(t, "itemStyle"), Nd(t, "controlStyle", !0);
                t = t.data;
                V(t) && E(t, (function(t) {
                    P(t) && (Nd(t, "label"), Nd(t, "itemStyle"));
                }));
            })), Ld(Fd(e.toolbox), (function(t) {
                Nd(t, "iconStyle"), Ld(t.feature, (function(t) {
                    Nd(t, "iconStyle");
                }));
            })), zd(Vd(e.axisPointer), "label"), zd(Vd(e.tooltip).axisPointer, "label");
        }
        function Wd(e) {
            e && E(Gd, (function(t) {
                t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
            }));
        }
        var Gd = [ [ "x", "left" ], [ "y", "top" ], [ "x2", "right" ], [ "y2", "bottom" ] ], Ud = [ "grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline" ], Xd = [ [ "borderRadius", "barBorderRadius" ], [ "borderColor", "barBorderColor" ], [ "borderWidth", "barBorderWidth" ] ];
        function Yd(t) {
            var e = t && t.itemStyle;
            if (e) for (var n = 0; n < Xd.length; n++) {
                var i = Xd[n][1], r = Xd[n][0];
                null != e[i] && (e[r] = e[i]);
            }
        }
        function qd(t) {
            t && "edge" === t.alignTo && null != t.margin && null == t.edgeDistance && (t.edgeDistance = t.margin);
        }
        function jd(t) {
            t && t.downplay && !t.blur && (t.blur = t.downplay);
        }
        function Zd(e, t) {
            Hd(e, t), e.series = zo(e.series), E(e.series, (function(t) {
                if (P(t)) {
                    var e, n = t.type;
                    if ("line" === n) null != t.clipOverflow && (t.clip = t.clipOverflow); else if ("pie" === n || "gauge" === n) {
                        if (null != t.clockWise && (t.clockwise = t.clockWise), qd(t.label), (e = t.data) && !yt(e)) for (var i = 0; i < e.length; i++) qd(e[i]);
                        null != t.hoverOffset && (t.emphasis = t.emphasis || {}, t.emphasis.scaleSize = null) && (t.emphasis.scaleSize = t.hoverOffset);
                    } else if ("gauge" === n) {
                        var r = function(t, e) {
                            for (var n = e.split(","), i = t, r = 0; r < n.length && null != (i = i && i[n[r]]); r++) ;
                            return i;
                        }(t, "pointer.color");
                        if (null != r) {
                            var o = t;
                            var a = "itemStyle.color";
                            var s = void 0;
                            for (var l, u = a.split(","), h = o, c = 0; c < u.length - 1; c++) null == h[l = u[c]] && (h[l] = {}), 
                            h = h[l];
                            !s && null != h[u[c]] || (h[u[c]] = r);
                        }
                    } else if ("bar" === n) {
                        if (Yd(t), Yd(t.backgroundStyle), Yd(t.emphasis), (e = t.data) && !yt(e)) for (i = 0; i < e.length; i++) "object" == typeof e[i] && (Yd(e[i]), 
                        Yd(e[i] && e[i].emphasis));
                    } else "sunburst" === n ? ((a = t.highlightPolicy) && (t.emphasis = t.emphasis || {}, 
                    t.emphasis.focus || (t.emphasis.focus = a)), jd(t), function t(e, n) {
                        if (e) for (var i = 0; i < e.length; i++) n(e[i]), e[i] && t(e[i].children, n);
                    }(t.data, jd)) : "graph" === n || "sankey" === n ? (o = t) && null != o.focusNodeAdjacency && (o.emphasis = o.emphasis || {}, 
                    null == o.emphasis.focus) && (o.emphasis.focus = "adjacency") : "map" === n && (t.mapType && !t.map && (t.map = t.mapType), 
                    t.mapLocation) && B(t, t.mapLocation);
                    null != t.hoverAnimation && (t.emphasis = t.emphasis || {}, t.emphasis) && null == t.emphasis.scale && (t.emphasis.scale = t.hoverAnimation), 
                    Wd(t);
                }
            })), e.dataRange && (e.visualMap = e.dataRange), E(Ud, (function(t) {
                t = e[t];
                t && E(t = V(t) ? t : [ t ], (function(t) {
                    Wd(t);
                }));
            }));
        }
        function Kd(_) {
            E(_, (function(p, d) {
                var f = [], g = [ NaN, NaN ], t = [ p.stackResultDimension, p.stackedOverDimension ], y = p.data, m = p.isStackedByIndex, v = p.seriesModel.get("stackStrategy") || "samesign";
                y.modify(t, (function(t, e, n) {
                    var i, r, o = y.get(p.stackedDimension, n);
                    if (isNaN(o)) return g;
                    m ? r = y.getRawIndex(n) : i = y.get(p.stackedByDimension, n);
                    for (var a, s, l, u = NaN, h = d - 1; 0 <= h; h--) {
                        var c = _[h];
                        if (0 <= (r = m ? r : c.data.rawIndexOf(c.stackedByDimension, i))) {
                            c = c.data.getByRawIndex(c.stackResultDimension, r);
                            if ("all" === v || "positive" === v && 0 < c || "negative" === v && c < 0 || "samesign" === v && 0 <= o && 0 < c || "samesign" === v && o <= 0 && c < 0) {
                                a = o, s = c, l = void 0, l = Math.max(xo(a), xo(s)), a += s, o = yo < l ? a : _o(a, l), 
                                u = c;
                                break;
                            }
                        }
                    }
                    return f[0] = o, f[1] = u, f;
                }));
            }));
        }
        var $d, Qd, Jd = function(t) {
            this.data = t.data || (t.sourceFormat === Qp ? {} : []), this.sourceFormat = t.sourceFormat || td, 
            this.seriesLayoutBy = t.seriesLayoutBy || ed, this.startIndex = t.startIndex || 0, 
            this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
            var e = this.dimensionsDefine = t.dimensionsDefine;
            if (e) for (var n = 0; n < e.length; n++) {
                var i = e[n];
                null == i.type && ld(this, n) === id.Must && (i.type = "ordinal");
            }
        };
        function tf(t) {
            return t instanceof Jd;
        }
        function ef(t, e, n) {
            n = n || rf(t);
            var i = e.seriesLayoutBy, r = function(t, e, n, i, r) {
                var o, a;
                if (!t) return {
                    dimensionsDefine: of(r),
                    startIndex: a,
                    dimensionsDetectedCount: o
                };
                var s;
                e === Kp ? (s = t, "auto" === i || null == i ? af((function(t) {
                    null != t && "-" !== t && (H(t) ? null == a && (a = 1) : a = 0);
                }), n, s, 10) : a = W(i) ? i : i ? 1 : 0, r || 1 !== a || (r = [], af((function(t, e) {
                    r[e] = null != t ? t + "" : "";
                }), n, s, 1 / 0)), o = r ? r.length : n === nd ? s.length : s[0] ? s[0].length : null) : e === $p ? r = r || function(t) {
                    for (var e, n = 0; n < t.length && !(e = t[n++]); ) ;
                    if (e) return R(e);
                }(t) : e === Qp ? r || (r = [], E(t, (function(t, e) {
                    r.push(e);
                }))) : e === Zp && (i = Vo(t[0]), o = V(i) && i.length || 1);
                return {
                    startIndex: a,
                    dimensionsDefine: of(r),
                    dimensionsDetectedCount: o
                };
            }(t, n, i, e.sourceHeader, e.dimensions);
            return new Jd({
                data: t,
                sourceFormat: n,
                seriesLayoutBy: i,
                dimensionsDefine: r.dimensionsDefine,
                startIndex: r.startIndex,
                dimensionsDetectedCount: r.dimensionsDetectedCount,
                metaRawOption: _(e)
            });
        }
        function nf(t) {
            return new Jd({
                data: t,
                sourceFormat: yt(t) ? Jp : Zp
            });
        }
        function rf(t) {
            var e = td;
            if (yt(t)) e = Jp; else if (V(t)) {
                0 === t.length && (e = Kp);
                for (var n = 0, i = t.length; n < i; n++) {
                    var r = t[n];
                    if (null != r) {
                        if (V(r) || yt(r)) {
                            e = Kp;
                            break;
                        }
                        if (P(r)) {
                            e = $p;
                            break;
                        }
                    }
                }
            } else if (P(t)) for (var o in t) if (Ft(t, o) && ut(t[o])) {
                e = Qp;
                break;
            }
            return e;
        }
        function of(t) {
            var i;
            if (t) return i = z(), F(t, (function(t, e) {
                var n;
                t = {
                    name: (t = P(t) ? t : {
                        name: t
                    }).name,
                    displayName: t.displayName,
                    type: t.type
                };
                return null != t.name && (t.name += "", null == t.displayName && (t.displayName = t.name), 
                (n = i.get(t.name)) ? t.name += "-" + n.count++ : i.set(t.name, {
                    count: 1
                })), t;
            }));
        }
        function af(t, e, n, i) {
            if (e === nd) for (var r = 0; r < n.length && r < i; r++) t(n[r] ? n[r][0] : null, r); else {
                var o = n[0] || [];
                for (r = 0; r < o.length && r < i; r++) t(o[r], r);
            }
        }
        function sf(t) {
            t = t.sourceFormat;
            return t === $p || t === Qp;
        }
        pf.prototype.getSource = function() {
            return this._source;
        }, pf.prototype.count = function() {
            return 0;
        }, pf.prototype.getItem = function(t, e) {}, pf.prototype.appendData = function(t) {}, 
        pf.prototype.clean = function() {}, pf.protoInitialize = ((Ac = pf.prototype).pure = !1, 
        void (Ac.persistent = !0)), pf.internalField = (Qd = function(t, e, n) {
            var i, r = n.sourceFormat, o = n.seriesLayoutBy, a = n.startIndex;
            n = n.dimensionsDefine;
            O(t, $d[Sf(r, o)]), r === Jp ? (t.getItem = lf, t.count = hf, t.fillStorage = uf) : (i = yf(r, o), 
            t.getItem = pt(i, null, e, a, n), i = _f(r, o), t.count = pt(i, null, e, a, n));
        }, lf = function(t, e) {
            t -= this._offset, e = e || [];
            for (var n = this._data, i = this._dimSize, r = i * t, o = 0; o < i; o++) e[o] = n[r + o];
            return e;
        }, uf = function(t, e, n, i) {
            for (var r = this._data, o = this._dimSize, a = 0; a < o; a++) {
                for (var s = i[a], l = null == s[0] ? 1 / 0 : s[0], u = null == s[1] ? -1 / 0 : s[1], h = e - t, c = n[a], p = 0; p < h; p++) {
                    var d = r[p * o + a];
                    (c[t + p] = d) < l && (l = d), u < d && (u = d);
                }
                s[0] = l, s[1] = u;
            }
        }, hf = function() {
            return this._data ? this._data.length / this._dimSize : 0;
        }, (Ac = {})[Kp + "_" + ed] = {
            pure: !0,
            appendData: df
        }, Ac[Kp + "_" + nd] = {
            pure: !0,
            appendData: function() {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
            }
        }, Ac[$p] = {
            pure: !0,
            appendData: df
        }, Ac[Qp] = {
            pure: !0,
            appendData: function(t) {
                var r = this._data;
                E(t, (function(t, e) {
                    for (var n = r[e] || (r[e] = []), i = 0; i < (t || []).length; i++) n.push(t[i]);
                }));
            }
        }, Ac[Zp] = {
            appendData: df
        }, Ac[Jp] = {
            persistent: !1,
            pure: !0,
            appendData: function(t) {
                this._data = t;
            },
            clean: function() {
                this._offset += this.count(), this._data = null;
            }
        }, void ($d = Ac));
        var lf, uf, hf, cf = pf;
        function pf(t, e) {
            t = tf(t) ? t : nf(t);
            var n = (this._source = t, this._data = t.data);
            t.sourceFormat === Jp && (this._offset = 0, this._dimSize = e, this._data = n), 
            Qd(this, n, t);
        }
        function df(t) {
            for (var e = 0; e < t.length; e++) this._data.push(t[e]);
        }
        function ff(t, e, n, i) {
            return t[i];
        }
        (ip = {})[Kp + "_" + ed] = function(t, e, n, i) {
            return t[i + e];
        }, ip[Kp + "_" + nd] = function(t, e, n, i, r) {
            i += e;
            for (var o = r || [], a = t, s = 0; s < a.length; s++) {
                var l = a[s];
                o[s] = l ? l[i] : null;
            }
            return o;
        }, ip[$p] = ff, ip[Qp] = function(t, e, n, i, r) {
            for (var o = r || [], a = 0; a < n.length; a++) {
                var s = t[n[a].name];
                o[a] = s ? s[i] : null;
            }
            return o;
        }, ip[Zp] = ff;
        var gf = ip;
        function yf(t, e) {
            return gf[Sf(t, e)];
        }
        function mf(t, e, n) {
            return t.length;
        }
        (Rc = {})[Kp + "_" + ed] = function(t, e, n) {
            return Math.max(0, t.length - e);
        }, Rc[Kp + "_" + nd] = function(t, e, n) {
            t = t[0];
            return t ? Math.max(0, t.length - e) : 0;
        }, Rc[$p] = mf, Rc[Qp] = function(t, e, n) {
            t = t[n[0].name];
            return t ? t.length : 0;
        }, Rc[Zp] = mf;
        var vf = Rc;
        function _f(t, e) {
            return vf[Sf(t, e)];
        }
        function xf(t, e, n) {
            return t[e];
        }
        (ga = {})[Kp] = xf, ga[$p] = function(t, e, n) {
            return t[n];
        }, ga[Qp] = xf, ga[Zp] = function(t, e, n) {
            t = Vo(t);
            return t instanceof Array ? t[e] : t;
        }, ga[Jp] = xf;
        var wf = ga;
        function bf(t) {
            return wf[t];
        }
        function Sf(t, e) {
            return t === Kp ? t + "_" + e : t;
        }
        function Mf(t, e, n) {
            if (t) {
                var i, r;
                e = t.getRawDataItem(e);
                if (null != e) return i = (r = t.getStore()).getSource().sourceFormat, null != n ? (t = t.getDimensionIndex(n), 
                n = r.getDimensionProperty(t), bf(i)(e, t, n)) : (r = e, i === Zp ? Vo(e) : r);
            }
        }
        var Tf = /\{@(.+?)\}/g;
        Bc = (Cf.prototype.getDataParams = function(t, e) {
            var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), o = n.getName(t), a = n.getRawDataItem(t), s = n.getItemVisual(t, "style"), l = (t = s && s[n.getItemVisual(t, "drawType") || "fill"], 
            s = s && s.stroke, this.mainType), u = "series" === l;
            n = n.userOutput && n.userOutput.get();
            return {
                componentType: l,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: u ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: u ? this.id : null,
                seriesName: u ? this.name : null,
                name: o,
                dataIndex: r,
                data: a,
                dataType: e,
                value: i,
                color: t,
                borderColor: s,
                dimensionNames: n ? n.fullDimensions : null,
                encode: n ? n.encode : null,
                $vars: [ "seriesName", "name", "value" ]
            };
        }, Cf.prototype.getFormattedLabel = function(i, t, e, n, r, o) {
            t = t || "normal";
            var a = this.getData(e);
            e = this.getDataParams(i, e);
            return o && (e.value = o.interpolatedValue), null != n && V(e.value) && (e.value = e.value[n]), 
            k(r = r || a.getItemModel(i).get("normal" === t ? [ "label", "formatter" ] : [ t, "label", "formatter" ])) ? (e.status = t, 
            e.dimensionIndex = n, r(e)) : H(r) ? Dp(r, e).replace(Tf, (function(t, e) {
                var n = e.length;
                n = ("[" === e.charAt(0) && "]" === e.charAt(n - 1) && (e = +e.slice(1, n - 1)), 
                Mf(a, i, e));
                return null != (n = o && V(o.interpolatedValue) && 0 <= (e = a.getDimensionIndex(e)) ? o.interpolatedValue[e] : n) ? n + "" : "";
            })) : void 0;
        }, Cf.prototype.getRawValue = function(t, e) {
            return Mf(this.getData(e), t);
        }, Cf.prototype.formatTooltip = function(t, e, n) {}, Cf);
        function Cf() {}
        function If(t) {
            return new kf(t);
        }
        Df.prototype.perform = function(t) {
            var e, n = this._upstream, i = t && t.skip;
            this._dirty && n && ((o = this.context).data = o.outputData = n.context.outputData), 
            this.__pipeline && (this.__pipeline.currentTask = this), this._plan && !i && (e = this._plan(this.context));
            var r, o = u(this._modBy), a = this._modDataCount || 0, s = u(t && t.modBy), l = t && t.modDataCount || 0;
            function u(t) {
                return t = 1 <= t ? t : 1;
            }
            o === s && a === l || (e = "reset"), !this._dirty && "reset" !== e || (this._dirty = !1, 
            r = this._doReset(i)), this._modBy = s, this._modDataCount = l;
            o = t && t.step;
            if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, 
            this._progress) {
                var h = this._dueIndex, c = Math.min(null != o ? this._dueIndex + o : 1 / 0, this._dueEnd);
                if (!i && (r || h < c)) {
                    var p = this._progress;
                    if (V(p)) for (var d = 0; d < p.length; d++) this._doProgress(p[d], h, c, s, l); else this._doProgress(p, h, c, s, l);
                }
                this._dueIndex = c;
                a = null != this._settedOutputEnd ? this._settedOutputEnd : c;
                this._outputDueEnd = a;
            } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
            return this.unfinished();
        }, Df.prototype.dirty = function() {
            this._dirty = !0, this._onDirty && this._onDirty(this.context);
        }, Df.prototype._doProgress = function(t, e, n, i, r) {
            Ef.reset(e, n, i, r), this._callingProgress = t, this._callingProgress({
                start: e,
                end: n,
                count: n - e,
                next: Ef.next
            }, this.context);
        }, Df.prototype._doReset = function(t) {
            this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null, 
            !t && this._reset && ((e = this._reset(this.context)) && e.progress && (n = e.forceFirstProgress, 
            e = e.progress), V(e)) && !e.length && (e = null), this._progress = e, this._modBy = this._modDataCount = null;
            var e, n;
            t = this._downstream;
            return t && t.dirty(), n;
        }, Df.prototype.unfinished = function() {
            return this._progress && this._dueIndex < this._dueEnd;
        }, Df.prototype.pipe = function(t) {
            this._downstream === t && !this._dirty || ((this._downstream = t)._upstream = this, 
            t.dirty());
        }, Df.prototype.dispose = function() {
            this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), 
            this._dirty = !1, this._disposed = !0);
        }, Df.prototype.getUpstream = function() {
            return this._upstream;
        }, Df.prototype.getDownstream = function() {
            return this._downstream;
        }, Df.prototype.setOutputEnd = function(t) {
            this._outputDueEnd = this._settedOutputEnd = t;
        };
        var kf = Df;
        function Df(t) {
            this._reset = (t = t || {}).reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, 
            this._dirty = !0;
        }
        var Af, Lf, Pf, Of, Rf, Nf, Ef = Nf = {
            reset: function(t, e, n, i) {
                Lf = t, Af = e, Pf = n, Of = i, Rf = Math.ceil(Of / Pf), Nf.next = 1 < Pf && 0 < Of ? Bf : zf;
            }
        };
        function zf() {
            return Lf < Af ? Lf++ : null;
        }
        function Bf() {
            var t = Lf % Rf * Pf + Math.ceil(Lf / Rf);
            t = Af <= Lf ? null : t < Of ? t : Lf;
            return Lf++, t;
        }
        function Ff(t, e) {
            e = e && e.type;
            return "ordinal" === e ? t : null == (t = "time" !== e || W(t) || null == t || "-" === t ? t : +Io(t)) || "" === t ? NaN : +t;
        }
        var Vf = z({
            number: function(t) {
                return parseFloat(t);
            },
            time: function(t) {
                return +Io(t);
            },
            trim: function(t) {
                return H(t) ? It(t) : t;
            }
        });
        function Hf(t) {
            return Vf.get(t);
        }
        var Wf = {
            lt: function(t, e) {
                return t < e;
            },
            lte: function(t, e) {
                return t <= e;
            },
            gt: function(t, e) {
                return e < t;
            },
            gte: function(t, e) {
                return e <= t;
            }
        }, Gf = (Yf.prototype.evaluate = function(t) {
            return W(t) ? this._opFn(t, this._rvalFloat) : this._opFn(Lo(t), this._rvalFloat);
        }, Yf), Uf = (Xf.prototype.evaluate = function(t, e) {
            var n = W(t) ? t : Lo(t), i = W(e) ? e : Lo(e), r = isNaN(n), o = isNaN(i);
            return r && (n = this._incomparable), o && (i = this._incomparable), r && o && (r = H(t), 
            o = H(e), r && (n = o ? t : 0), o) && (i = r ? e : 0), n < i ? this._resultLT : i < n ? -this._resultLT : 0;
        }, Xf);
        function Xf(t, e) {
            t = "desc" === t;
            this._resultLT = t ? 1 : -1, this._incomparable = "min" === (e = null == e ? t ? "min" : "max" : e) ? -1 / 0 : 1 / 0;
        }
        function Yf(t, e) {
            W(e) || f(""), this._opFn = Wf[t], this._rvalFloat = Lo(e);
        }
        jf.prototype.evaluate = function(t) {
            var e, n = t === this._rval;
            return n || (e = typeof t) === this._rvalTypeof || "number" != e && "number" !== this._rvalTypeof || (n = Lo(t) === this._rvalFloat), 
            this._isEQ ? n : !n;
        };
        var qf = jf;
        function jf(t, e) {
            this._rval = e, this._isEQ = t, this._rvalTypeof = typeof e, this._rvalFloat = Lo(e);
        }
        Kf.prototype.getRawData = function() {
            throw new Error("not supported");
        }, Kf.prototype.getRawDataItem = function(t) {
            throw new Error("not supported");
        }, Kf.prototype.cloneRawData = function() {}, Kf.prototype.getDimensionInfo = function(t) {}, 
        Kf.prototype.cloneAllDimensionInfo = function() {}, Kf.prototype.count = function() {}, 
        Kf.prototype.retrieveValue = function(t, e) {}, Kf.prototype.retrieveValueFromItem = function(t, e) {}, 
        Kf.prototype.convertValue = Ff;
        var Zf = Kf;
        function Kf() {}
        function $f(t) {
            return ig(t.sourceFormat) || f(""), t.data;
        }
        function Qf(t) {
            var e = t.sourceFormat, n = t.data;
            if (ig(e) || f(""), e === Kp) {
                for (var i = [], r = 0, o = n.length; r < o; r++) i.push(n[r].slice());
                return i;
            }
            if (e === $p) {
                for (i = [], r = 0, o = n.length; r < o; r++) i.push(O({}, n[r]));
                return i;
            }
        }
        function Jf(t, e, n) {
            if (null != n) return W(n) || !isNaN(n) && !Ft(e, n) ? t[n] : Ft(e, n) ? e[n] : void 0;
        }
        function tg(t) {
            return _(t);
        }
        var eg = z();
        function ng(t, e) {
            var n = zo(t);
            t = n.length;
            t || f("");
            for (var i = 0, r = t; i < r; i++) e = function(t, i) {
                i.length || f(""), P(t) || f("");
                var e = t.type, d = eg.get(e);
                e = (d || f(""), F(i, (function(t) {
                    var e = t, n = (t = d, new Zf), i = e.data, r = n.sourceFormat = e.sourceFormat, o = e.startIndex, a = (e.seriesLayoutBy !== ed && f(""), 
                    []), s = {};
                    if (h = e.dimensionsDefine) E(h, (function(t, e) {
                        var n = t.name;
                        e = {
                            index: e,
                            name: n,
                            displayName: t.displayName
                        };
                        a.push(e), null != n && (Ft(s, n) && f(""), s[n] = e);
                    })); else for (var l = 0; l < e.dimensionsDetectedCount; l++) a.push({
                        index: l
                    });
                    var u = yf(r, ed), h = (t.__isBuiltIn && (n.getRawDataItem = function(t) {
                        return u(i, o, a, t);
                    }, n.getRawData = pt($f, null, e)), n.cloneRawData = pt(Qf, null, e), _f(r, ed)), c = (n.count = pt(h, null, i, o, a), 
                    bf(r)), p = (n.retrieveValue = function(t, e) {
                        t = u(i, o, a, t);
                        return p(t, e);
                    }, n.retrieveValueFromItem = function(t, e) {
                        var n;
                        return null != t && (n = a[e]) ? c(t, e, n.name) : void 0;
                    });
                    return n.getDimensionInfo = pt(Jf, null, a, s), n.cloneAllDimensionInfo = pt(tg, null, a), 
                    n;
                })));
                return F(zo(d.transform({
                    upstream: e[0],
                    upstreamList: e,
                    config: _(t.config)
                })), (function(t, e) {
                    P(t) || f(""), t.data || f(""), ig(rf(t.data)) || f("");
                    var n = i[0];
                    e = n && 0 === e && !t.dimensions ? ((e = n.startIndex) && (t.data = n.data.slice(0, e).concat(t.data)), 
                    {
                        seriesLayoutBy: ed,
                        sourceHeader: e,
                        dimensions: n.metaRawOption.dimensions
                    }) : {
                        seriesLayoutBy: ed,
                        sourceHeader: 0,
                        dimensions: t.dimensions
                    };
                    return ef(t.data, e, null);
                }));
            }(n[i], e), i !== r - 1 && (e.length = Math.max(e.length, 1));
            return e;
        }
        function ig(t) {
            return t === Kp || t === $p;
        }
        Ac = "undefined";
        var rg, og = typeof Uint32Array == Ac ? Array : Uint32Array, ag = typeof Uint16Array == Ac ? Array : Uint16Array, sg = typeof Int32Array == Ac ? Array : Int32Array, lg = (ip = typeof Float64Array == Ac ? Array : Float64Array, 
        {
            float: ip,
            int: sg,
            ordinal: Array,
            number: Array,
            time: ip
        });
        function ug(t) {
            return 65535 < t ? og : ag;
        }
        function hg() {
            return [ 1 / 0, -1 / 0 ];
        }
        function cg(t, e, n, i, r) {
            n = lg[n || "float"];
            if (r) {
                var o = t[e], a = o && o.length;
                if (a !== i) {
                    for (var s = new n(i), l = 0; l < a; l++) s[l] = o[l];
                    t[e] = s;
                }
            } else t[e] = new n(i);
        }
        l.prototype.initData = function(t, e, n) {
            this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
            var i = t.getSource(), r = this.defaultDimValueGetter = rg[i.sourceFormat];
            this._dimValueGetter = n || r, this._rawExtent = [], sf(i), this._dimensions = F(e, (function(t) {
                return {
                    type: t.type,
                    property: t.property
                };
            })), this._initDataFromProvider(0, t.count());
        }, l.prototype.getProvider = function() {
            return this._provider;
        }, l.prototype.getSource = function() {
            return this._provider.getSource();
        }, l.prototype.ensureCalculationDimension = function(t, e) {
            var n = this._calcDimNameToIdx, i = this._dimensions, r = n.get(t);
            if (null != r) {
                if (i[r].type === e) return r;
            } else r = i.length;
            return i[r] = {
                type: e
            }, n.set(t, r), this._chunks[r] = new lg[e || "float"](this._rawCount), this._rawExtent[r] = hg(), 
            r;
        }, l.prototype.collectOrdinalMeta = function(t, e) {
            var n = this._chunks[t], i = this._dimensions[t], r = this._rawExtent, o = i.ordinalOffset || 0, a = n.length;
            0 === o && (r[t] = hg());
            for (var s = r[t], l = o; l < a; l++) {
                var u = n[l] = e.parseAndCollect(n[l]);
                isNaN(u) || (s[0] = Math.min(u, s[0]), s[1] = Math.max(u, s[1]));
            }
            i.ordinalMeta = e, i.ordinalOffset = a, i.type = "ordinal";
        }, l.prototype.getOrdinalMeta = function(t) {
            return this._dimensions[t].ordinalMeta;
        }, l.prototype.getDimensionProperty = function(t) {
            t = this._dimensions[t];
            return t && t.property;
        }, l.prototype.appendData = function(t) {
            var e = this._provider, n = this.count();
            t = (e.appendData(t), e.count());
            return e.persistent || (t += n), n < t && this._initDataFromProvider(n, t, !0), 
            [ n, t ];
        }, l.prototype.appendValues = function(t, e) {
            for (var n = this._chunks, i = this._dimensions, r = i.length, o = this._rawExtent, a = this.count(), s = a + Math.max(t.length, e || 0), l = 0; l < r; l++) cg(n, l, (d = i[l]).type, s, !0);
            for (var u = [], h = a; h < s; h++) for (var c = h - a, p = 0; p < r; p++) {
                var d = i[p], f = rg.arrayRows.call(this, t[c] || u, d.property, c, p), g = (n[p][h] = f, 
                o[p]);
                f < g[0] && (g[0] = f), f > g[1] && (g[1] = f);
            }
            return {
                start: a,
                end: this._rawCount = this._count = s
            };
        }, l.prototype._initDataFromProvider = function(t, e, n) {
            for (var i = this._provider, r = this._chunks, o = this._dimensions, a = o.length, s = this._rawExtent, l = F(o, (function(t) {
                return t.property;
            })), u = 0; u < a; u++) {
                var h = o[u];
                s[u] || (s[u] = hg()), cg(r, u, h.type, e, n);
            }
            if (i.fillStorage) i.fillStorage(t, e, r, s); else for (var c = [], p = t; p < e; p++) {
                c = i.getItem(p, c);
                for (var d = 0; d < a; d++) {
                    var f = r[d], g = this._dimValueGetter(c, l[d], p, d);
                    f = (f[p] = g, s[d]);
                    g < f[0] && (f[0] = g), g > f[1] && (f[1] = g);
                }
            }
            !i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = [];
        }, l.prototype.count = function() {
            return this._count;
        }, l.prototype.get = function(t, e) {
            return 0 <= e && e < this._count && (t = this._chunks[t]) ? t[this.getRawIndex(e)] : NaN;
        }, l.prototype.getValues = function(t, e) {
            var n = [], i = [];
            if (null == e) {
                e = t, t = [];
                for (var r = 0; r < this._dimensions.length; r++) i.push(r);
            } else i = t;
            r = 0;
            for (var o = i.length; r < o; r++) n.push(this.get(i[r], e));
            return n;
        }, l.prototype.getByRawIndex = function(t, e) {
            return 0 <= e && e < this._rawCount && (t = this._chunks[t]) ? t[e] : NaN;
        }, l.prototype.getSum = function(t) {
            var e = 0;
            if (this._chunks[t]) for (var n = 0, i = this.count(); n < i; n++) {
                var r = this.get(t, n);
                isNaN(r) || (e += r);
            }
            return e;
        }, l.prototype.getMedian = function(t) {
            var e = [], n = (t = (this.each([ t ], (function(t) {
                isNaN(t) || e.push(t);
            })), e.sort((function(t, e) {
                return t - e;
            }))), this.count());
            return 0 === n ? 0 : n % 2 == 1 ? t[(n - 1) / 2] : (t[n / 2] + t[n / 2 - 1]) / 2;
        }, l.prototype.indexOfRawIndex = function(t) {
            if (!(t >= this._rawCount || t < 0)) {
                if (!this._indices) return t;
                var e = this._indices, n = e[t];
                if (null != n && n < this._count && n === t) return t;
                for (var i = 0, r = this._count - 1; i <= r; ) {
                    var o = (i + r) / 2 | 0;
                    if (e[o] < t) i = 1 + o; else {
                        if (!(e[o] > t)) return o;
                        r = o - 1;
                    }
                }
            }
            return -1;
        }, l.prototype.indicesOfNearest = function(t, e, n) {
            var i = this._chunks[t], r = [];
            if (i) {
                null == n && (n = 1 / 0);
                for (var o = 1 / 0, a = -1, s = 0, l = 0, u = this.count(); l < u; l++) {
                    var h = e - i[this.getRawIndex(l)], c = Math.abs(h);
                    c <= n && ((c < o || c === o && 0 <= h && a < 0) && (o = c, a = h, s = 0), h === a) && (r[s++] = l);
                }
                r.length = s;
            }
            return r;
        }, l.prototype.getIndices = function() {
            var t = this._indices;
            if (t) {
                var e = t.constructor, n = this._count;
                if (e === Array) for (var i = new e(n), r = 0; r < n; r++) i[r] = t[r]; else i = new e(t.buffer, 0, n);
            } else for (i = new (e = ug(this._rawCount))(this.count()), r = 0; r < i.length; r++) i[r] = r;
            return i;
        }, l.prototype.filter = function(t, e) {
            if (!this._count) return this;
            for (var n = this.clone(), i = n.count(), r = new (ug(n._rawCount))(i), o = [], a = t.length, s = 0, l = t[0], u = n._chunks, h = 0; h < i; h++) {
                var c = void 0, p = n.getRawIndex(h);
                if (0 === a) c = e(h); else if (1 === a) c = e(u[l][p], h); else {
                    for (var d = 0; d < a; d++) o[d] = u[t[d]][p];
                    o[d] = h, c = e.apply(null, o);
                }
                c && (r[s++] = p);
            }
            return s < i && (n._indices = r), n._count = s, n._extent = [], n._updateGetRawIdx(), 
            n;
        }, l.prototype.selectRange = function(t) {
            var e = this.clone(), n = e._count;
            if (!n) return this;
            var i = R(t), r = i.length;
            if (!r) return this;
            var o = e.count(), a = new (ug(e._rawCount))(o), s = 0, l = i[0], u = t[l][0], h = t[l][1], c = e._chunks;
            l = !1;
            if (!e._indices) {
                var p = 0;
                if (1 === r) {
                    for (var d = c[i[0]], f = 0; f < n; f++) ((v = d[f]) >= u && v <= h || isNaN(v)) && (a[s++] = p), 
                    p++;
                    l = !0;
                } else if (2 === r) {
                    d = c[i[0]];
                    var g = c[i[1]], y = t[i[1]][0], m = t[i[1]][1];
                    for (f = 0; f < n; f++) {
                        var v = d[f], _ = g[f];
                        (u <= v && v <= h || isNaN(v)) && (y <= _ && _ <= m || isNaN(_)) && (a[s++] = p), 
                        p++;
                    }
                    l = !0;
                }
            }
            if (!l) if (1 === r) for (f = 0; f < o; f++) {
                var x = e.getRawIndex(f);
                ((v = c[i[0]][x]) >= u && v <= h || isNaN(v)) && (a[s++] = x);
            } else for (f = 0; f < o; f++) {
                for (var w = !0, b = (x = e.getRawIndex(f), 0); b < r; b++) {
                    var S = i[b];
                    ((v = c[S][x]) < t[S][0] || v > t[S][1]) && (w = !1);
                }
                w && (a[s++] = e.getRawIndex(f));
            }
            return s < o && (e._indices = a), e._count = s, e._extent = [], e._updateGetRawIdx(), 
            e;
        }, l.prototype.map = function(t, e) {
            var n = this.clone(t);
            return this._updateDims(n, t, e), n;
        }, l.prototype.modify = function(t, e) {
            this._updateDims(this, t, e);
        }, l.prototype._updateDims = function(t, e, n) {
            for (var i = t._chunks, r = [], o = e.length, a = t.count(), s = [], l = t._rawExtent, u = 0; u < e.length; u++) l[e[u]] = hg();
            for (var h = 0; h < a; h++) {
                for (var c = t.getRawIndex(h), p = 0; p < o; p++) s[p] = i[e[p]][c];
                s[o] = h;
                var d = n && n.apply(null, s);
                if (null != d) for ("object" != typeof d && (r[0] = d, d = r), u = 0; u < d.length; u++) {
                    var f = e[u], g = d[u], y = l[f];
                    f = i[f];
                    f && (f[c] = g), g < y[0] && (y[0] = g), g > y[1] && (y[1] = g);
                }
            }
        }, l.prototype.lttbDownSample = function(t, e) {
            var n, i = this.clone([ t ], !0), r = i._chunks[t], o = this.count(), a = 0, s = Math.floor(1 / e), l = this.getRawIndex(0), u = new (ug(this._rawCount))(Math.min(2 * (Math.ceil(o / s) + 2), o));
            u[a++] = l;
            for (var h = 1; h < o - 1; h += s) {
                for (var c = Math.min(h + s, o - 1), p = Math.min(h + 2 * s, o), d = (p + c) / 2, f = 0, g = c; g < p; g++) {
                    var y = r[M = this.getRawIndex(g)];
                    isNaN(y) || (f += y);
                }
                f /= p - c;
                c = h;
                var m = Math.min(h + s, o), v = h - 1, _ = r[l], x = -1, w = c, b = -1, S = 0;
                for (g = c; g < m; g++) {
                    var M;
                    y = r[M = this.getRawIndex(g)];
                    isNaN(y) ? (S++, b < 0 && (b = M)) : (n = Math.abs((v - d) * (y - _) - (v - g) * (f - _))) > x && (x = n, 
                    w = M);
                }
                0 < S && S < m - c && (u[a++] = Math.min(b, w), w = Math.max(b, w)), l = u[a++] = w;
            }
            return u[a++] = this.getRawIndex(o - 1), i._count = a, i._indices = u, i.getRawIndex = this._getRawIdx, 
            i;
        }, l.prototype.downSample = function(t, e, n, i) {
            for (var r = this.clone([ t ], !0), o = r._chunks, a = [], s = Math.floor(1 / e), l = o[t], u = this.count(), h = r._rawExtent[t] = hg(), c = new (ug(this._rawCount))(Math.ceil(u / s)), p = 0, d = 0; d < u; d += s) {
                u - d < s && (a.length = s = u - d);
                for (var f = 0; f < s; f++) {
                    var g = this.getRawIndex(d + f);
                    a[f] = l[g];
                }
                var y = n(a), m = this.getRawIndex(Math.min(d + i(a, y) || 0, u - 1));
                (l[m] = y) < h[0] && (h[0] = y), y > h[1] && (h[1] = y), c[p++] = m;
            }
            return r._count = p, r._indices = c, r._updateGetRawIdx(), r;
        }, l.prototype.each = function(t, e) {
            if (this._count) for (var n = t.length, i = this._chunks, r = 0, o = this.count(); r < o; r++) {
                var a = this.getRawIndex(r);
                switch (n) {
                  case 0:
                    e(r);
                    break;

                  case 1:
                    e(i[t[0]][a], r);
                    break;

                  case 2:
                    e(i[t[0]][a], i[t[1]][a], r);
                    break;

                  default:
                    for (var s = 0, l = []; s < n; s++) l[s] = i[t[s]][a];
                    l[s] = r, e.apply(null, l);
                }
            }
        }, l.prototype.getDataExtent = function(t) {
            var e = this._chunks[t], n = hg();
            if (!e) return n;
            var i, r = this.count();
            if (!this._indices) return this._rawExtent[t].slice();
            if (i = this._extent[t]) return i.slice();
            for (var o = (i = n)[0], a = i[1], s = 0; s < r; s++) {
                var l = e[this.getRawIndex(s)];
                l < o && (o = l), a < l && (a = l);
            }
            return this._extent[t] = i = [ o, a ];
        }, l.prototype.getRawDataItem = function(t) {
            var e = this.getRawIndex(t);
            if (this._provider.persistent) return this._provider.getItem(e);
            for (var n = [], i = this._chunks, r = 0; r < i.length; r++) n.push(i[r][e]);
            return n;
        }, l.prototype.clone = function(t, e) {
            var n, i, r = new l, o = this._chunks, a = t && ht(t, (function(t, e) {
                return t[e] = !0, t;
            }), {});
            if (a) for (var s = 0; s < o.length; s++) r._chunks[s] = a[s] ? (n = o[s], i = void 0, 
            (i = n.constructor) === Array ? n.slice() : new i(n)) : o[s]; else r._chunks = o;
            return this._copyCommonProps(r), e || (r._indices = this._cloneIndices()), r._updateGetRawIdx(), 
            r;
        }, l.prototype._copyCommonProps = function(t) {
            t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, 
            t._dimensions = this._dimensions, t._extent = _(this._extent), t._rawExtent = _(this._rawExtent);
        }, l.prototype._cloneIndices = function() {
            if (this._indices) {
                var t = this._indices.constructor, e = void 0;
                if (t === Array) for (var n = this._indices.length, i = (e = new t(n), 0); i < n; i++) e[i] = this._indices[i]; else e = new t(this._indices);
                return e;
            }
            return null;
        }, l.prototype._getRawIdxIdentity = function(t) {
            return t;
        }, l.prototype._getRawIdx = function(t) {
            return t < this._count && 0 <= t ? this._indices[t] : -1;
        }, l.prototype._updateGetRawIdx = function() {
            this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
        }, l.internalField = void (rg = {
            arrayRows: dg,
            objectRows: function(t, e, n, i) {
                return Ff(t[e], this._dimensions[i]);
            },
            keyedColumns: dg,
            original: function(t, e, n, i) {
                t = t && (null == t.value ? t : t.value);
                return Ff(t instanceof Array ? t[i] : t, this._dimensions[i]);
            },
            typedArray: function(t, e, n, i) {
                return t[i];
            }
        });
        var pg = l;
        function l() {
            this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, 
            this._calcDimNameToIdx = z();
        }
        function dg(t, e, n, i) {
            return Ff(t[i], this._dimensions[i]);
        }
        gg.prototype.dirty = function() {
            this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
        }, gg.prototype._setLocalSource = function(t, e) {
            this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, 9e10 < this._versionSignBase && (this._versionSignBase = 0);
        }, gg.prototype._getVersionSign = function() {
            return this._sourceHost.uid + "_" + this._versionSignBase;
        }, gg.prototype.prepareSource = function() {
            this._isDirty() && (this._createSource(), this._dirty = !1);
        }, gg.prototype._createSource = function() {
            this._setLocalSource([], []);
            var t, e, n, i, r, o, a, s = this._sourceHost, l = this._getUpstreamSourceManagers(), u = !!l.length;
            mg(s) ? (i = s, r = t = o = void 0, e = u ? ((e = l[0]).prepareSource(), o = (r = e.getSource()).data, 
            t = r.sourceFormat, [ e._getVersionSign() ]) : (t = yt(o = i.get("data", !0)) ? Jp : Zp, 
            []), i = this._getSourceMetaRawOption() || {}, r = r && r.metaRawOption || {}, a = N(i.seriesLayoutBy, r.seriesLayoutBy) || null, 
            n = N(i.sourceHeader, r.sourceHeader), i = N(i.dimensions, r.dimensions), r = a !== r.seriesLayoutBy || !!n != !!r.sourceHeader || i ? [ ef(o, {
                seriesLayoutBy: a,
                sourceHeader: n,
                dimensions: i
            }, t) ] : []) : (o = s, e = u ? (r = (a = this._applyTransform(l)).sourceList, a.upstreamSignList) : (r = [ ef(o.get("source", !0), this._getSourceMetaRawOption(), null) ], 
            [])), this._setLocalSource(r, e);
        }, gg.prototype._applyTransform = function(t) {
            var e, n = this._sourceHost, i = n.get("transform", !0), r = n.get("fromTransformResult", !0), o = (null != r && 1 !== t.length && vg(""), 
            []), a = [];
            return E(t, (function(t) {
                t.prepareSource();
                var e = t.getSource(r || 0);
                null == r || e || vg(""), o.push(e), a.push(t._getVersionSign());
            })), i ? e = ng(i, o, n.componentIndex) : null != r && (e = [ new Jd({
                data: (t = o[0]).data,
                sourceFormat: t.sourceFormat,
                seriesLayoutBy: t.seriesLayoutBy,
                dimensionsDefine: _(t.dimensionsDefine),
                startIndex: t.startIndex,
                dimensionsDetectedCount: t.dimensionsDetectedCount
            }) ]), {
                sourceList: e,
                upstreamSignList: a
            };
        }, gg.prototype._isDirty = function() {
            if (this._dirty) return !0;
            for (var t = this._getUpstreamSourceManagers(), e = 0; e < t.length; e++) {
                var n = t[e];
                if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign()) return !0;
            }
        }, gg.prototype.getSource = function(t) {
            var e = this._sourceList[t = t || 0];
            return e || (e = this._getUpstreamSourceManagers())[0] && e[0].getSource(t);
        }, gg.prototype.getSharedDataStore = function(t) {
            var e = t.makeStoreSchema();
            return this._innerGetDataStore(e.dimensions, t.source, e.hash);
        }, gg.prototype._innerGetDataStore = function(t, e, n) {
            var i, r = this._storeList, o = r[0];
            r = (o = o || (r[0] = {}))[n];
            return r || (i = this._getUpstreamSourceManagers()[0], mg(this._sourceHost) && i ? r = i._innerGetDataStore(t, e, n) : (r = new pg).initData(new cf(e, t.length), t), 
            o[n] = r), r;
        }, gg.prototype._getUpstreamSourceManagers = function() {
            var t, e = this._sourceHost;
            return mg(e) ? (t = sd(e)) ? [ t.getSourceManager() ] : [] : F((t = e).get("transform", !0) || t.get("fromTransformResult", !0) ? ta(t.ecModel, "dataset", {
                index: t.get("fromDatasetIndex", !0),
                id: t.get("fromDatasetId", !0)
            }, Jo).models : [], (function(t) {
                return t.getSourceManager();
            }));
        }, gg.prototype._getSourceMetaRawOption = function() {
            var t, e, n, i = this._sourceHost;
            return mg(i) ? (t = i.get("seriesLayoutBy", !0), e = i.get("sourceHeader", !0), 
            n = i.get("dimensions", !0)) : this._getUpstreamSourceManagers().length || (t = i.get("seriesLayoutBy", !0), 
            e = i.get("sourceHeader", !0), n = i.get("dimensions", !0)), {
                seriesLayoutBy: t,
                sourceHeader: e,
                dimensions: n
            };
        };
        var fg = gg;
        function gg(t) {
            this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, 
            this._dirty = !0, this._sourceHost = t;
        }
        function yg(t) {
            t.option.transform && Dt(t.option.transform);
        }
        function mg(t) {
            return "series" === t.mainType;
        }
        function vg(t) {
            throw new Error(t);
        }
        function _g(t, e) {
            return e.type = t, e;
        }
        function xg(t) {
            var e, n, i, r, o, a, s, l, u, h, c, p = t.series, d = t.dataIndex, f = (t = t.multipleSeries, 
            p.getData()), g = f.mapDimensionsAll("defaultedTooltip"), y = g.length, m = p.getRawValue(d), v = V(m), _ = (_ = d, 
            Ap((w = p).getData().getItemVisual(_, "style")[w.visualDrawType]));
            function x(t, e) {
                e = s.getDimensionInfo(e);
                e && !1 !== e.otherDims.tooltip && (l ? c.push(_g("nameValue", {
                    markerType: "subItem",
                    markerColor: a,
                    name: e.displayName,
                    value: t,
                    valueType: e.type
                })) : (u.push(t), h.push(e.type)));
            }
            1 < y || v && !y ? (w = m, r = d, o = g, a = _, s = p.getData(), l = ht(w, (function(t, e, n) {
                n = s.getDimensionInfo(n);
                return t || n && !1 !== n.tooltip && null != n.displayName;
            }), !1), u = [], h = [], c = [], o.length ? E(o, (function(t) {
                x(Mf(s, r, t), t);
            })) : E(w, x), e = (o = {
                inlineValues: u,
                inlineValueTypes: h,
                blocks: c
            }).inlineValueTypes, n = o.blocks, i = (o = o.inlineValues)[0]) : y ? (w = f.getDimensionInfo(g[0]), 
            i = o = Mf(f, d, g[0]), e = w.type) : i = o = v ? m[0] : m;
            y = Xo(p), g = y && p.name || "";
            var w = f.getName(d);
            v = t ? g : w;
            return _g("section", {
                header: g,
                noHeader: t || !y,
                sortParam: i,
                blocks: [ _g("nameValue", {
                    markerType: "item",
                    markerColor: _,
                    name: v,
                    noName: !It(v),
                    value: o,
                    valueType: e,
                    dataIndex: d
                }) ].concat(n || [])
            });
        }
        var wg = Zo();
        function bg(t, e) {
            return t.getName(e) || t.getId(e);
        }
        u(h, Sg = Up), h.prototype.init = function(t, e, n) {
            this.seriesIndex = this.componentIndex, this.dataTask = If({
                count: Cg,
                reset: Ig
            }), this.dataTask.context = {
                model: this
            }, this.mergeDefaultAndTheme(t, n), (wg(this).sourceManager = new fg(this)).prepareSource();
            t = this.getInitialData(t, n);
            Dg(t, this), this.dataTask.context.data = t, wg(this).dataBeforeProcessed = t, Tg(this), 
            this._initSelectedMapFromData(t);
        }, h.prototype.mergeDefaultAndTheme = function(t, e) {
            var n = Ep(this), i = n ? Bp(t) : {}, r = this.subType;
            Up.hasClass(r), d(t, e.getTheme().get(this.subType)), d(t, this.getDefaultOption()), 
            Bo(t, "label", [ "show" ]), this.fillDataTextStyle(t.data), n && zp(t, i, n);
        }, h.prototype.mergeOption = function(t, e) {
            t = d(this.option, t, !0), this.fillDataTextStyle(t.data);
            var n = Ep(this);
            n = (n && zp(this.option, t, n), wg(this).sourceManager), n = (n.dirty(), n.prepareSource(), 
            this.getInitialData(t, e));
            Dg(n, this), this.dataTask.dirty(), this.dataTask.context.data = n, wg(this).dataBeforeProcessed = n, 
            Tg(this), this._initSelectedMapFromData(n);
        }, h.prototype.fillDataTextStyle = function(t) {
            if (t && !yt(t)) for (var e = [ "show" ], n = 0; n < t.length; n++) t[n] && t[n].label && Bo(t[n], "label", e);
        }, h.prototype.getInitialData = function(t, e) {}, h.prototype.appendData = function(t) {
            this.getRawData().appendData(t.data);
        }, h.prototype.getData = function(t) {
            var e = Lg(this);
            return e ? (e = e.context.data, null == t ? e : e.getLinkedData(t)) : wg(this).data;
        }, h.prototype.getAllData = function() {
            var t = this.getData();
            return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [ {
                data: t
            } ];
        }, h.prototype.setData = function(t) {
            var e, n = Lg(this);
            n && ((e = n.context).outputData = t, n !== this.dataTask) && (e.data = t), wg(this).data = t;
        }, h.prototype.getEncode = function() {
            var t = this.get("encode", !0);
            if (t) return z(t);
        }, h.prototype.getSourceManager = function() {
            return wg(this).sourceManager;
        }, h.prototype.getSource = function() {
            return this.getSourceManager().getSource();
        }, h.prototype.getRawData = function() {
            return wg(this).dataBeforeProcessed;
        }, h.prototype.getColorBy = function() {
            return this.get("colorBy") || "series";
        }, h.prototype.isColorBySeries = function() {
            return "series" === this.getColorBy();
        }, h.prototype.getBaseAxis = function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis();
        }, h.prototype.formatTooltip = function(t, e, n) {
            return xg({
                series: this,
                dataIndex: t,
                multipleSeries: e
            });
        }, h.prototype.isAnimationEnabled = function() {
            var t = this.ecModel;
            return !!(!p.node || t && t.ssr) && !!(t = (t = this.getShallow("animation")) && this.getData().count() > this.getShallow("animationThreshold") ? !1 : t);
        }, h.prototype.restoreData = function() {
            this.dataTask.dirty();
        }, h.prototype.getColorFromPalette = function(t, e, n) {
            var i = this.ecModel;
            return pd.prototype.getColorFromPalette.call(this, t, e, n) || i.getColorFromPalette(t, e, n);
        }, h.prototype.coordDimToDataDim = function(t) {
            return this.getRawData().mapDimensionsAll(t);
        }, h.prototype.getProgressive = function() {
            return this.get("progressive");
        }, h.prototype.getProgressiveThreshold = function() {
            return this.get("progressiveThreshold");
        }, h.prototype.select = function(t, e) {
            this._innerSelect(this.getData(e), t);
        }, h.prototype.unselect = function(t, e) {
            var n = this.option.selectedMap;
            if (n) {
                var i = this.option.selectedMode, r = this.getData(e);
                if ("series" === i || "all" === n) this.option.selectedMap = {}, this._selectedDataIndicesMap = {}; else for (var o = 0; o < t.length; o++) {
                    var a = bg(r, t[o]);
                    n[a] = !1, this._selectedDataIndicesMap[a] = -1;
                }
            }
        }, h.prototype.toggleSelect = function(t, e) {
            for (var n = [], i = 0; i < t.length; i++) n[0] = t[i], this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e);
        }, h.prototype.getSelectedDataIndices = function() {
            if ("all" === this.option.selectedMap) return [].slice.call(this.getData().getIndices());
            for (var t = this._selectedDataIndicesMap, e = R(t), n = [], i = 0; i < e.length; i++) {
                var r = t[e[i]];
                0 <= r && n.push(r);
            }
            return n;
        }, h.prototype.isSelected = function(t, e) {
            var n = this.option.selectedMap;
            return !!n && (e = this.getData(e), "all" === n || n[bg(e, t)]) && !e.getItemModel(t).get([ "select", "disabled" ]);
        }, h.prototype.isUniversalTransitionEnabled = function() {
            var t;
            return !!this.__universalTransitionEnabled || !!(t = this.option.universalTransition) && (!0 === t || t && t.enabled);
        }, h.prototype._innerSelect = function(t, e) {
            var n, i = this.option, r = i.selectedMode, o = e.length;
            if (r && o) if ("series" === r) i.selectedMap = "all"; else if ("multiple" === r) {
                P(i.selectedMap) || (i.selectedMap = {});
                for (var a = i.selectedMap, s = 0; s < o; s++) {
                    var l = e[s];
                    a[n = bg(t, l)] = !0, this._selectedDataIndicesMap[n] = t.getRawIndex(l);
                }
            } else "single" !== r && !0 !== r || (n = bg(t, r = e[o - 1]), i.selectedMap = ((i = {})[n] = !0, 
            i), this._selectedDataIndicesMap = ((i = {})[n] = t.getRawIndex(r), i));
        }, h.prototype._initSelectedMapFromData = function(n) {
            var i;
            this.option.selectedMap || (i = [], n.hasItemOption && n.each((function(t) {
                var e = n.getRawDataItem(t);
                e && e.selected && i.push(t);
            })), 0 < i.length && this._innerSelect(n, i));
        }, h.registerClass = function(t) {
            return Up.registerClass(t);
        }, h.protoInitialize = ((Rc = h.prototype).type = "series.__base__", Rc.seriesIndex = 0, 
        Rc.ignoreStyleOnData = !1, Rc.hasSymbolVisual = !1, Rc.defaultSymbol = "circle", 
        Rc.visualStyleAccessPath = "itemStyle", void (Rc.visualDrawType = "fill"));
        var Sg, Mg = h;
        function h() {
            var t = null !== Sg && Sg.apply(this, arguments) || this;
            return t._selectedDataIndicesMap = {}, t;
        }
        function Tg(t) {
            var e, n, i = t.name;
            Xo(t) || (t.name = (t = (e = t.getRawData()).mapDimensionsAll("seriesName"), n = [], 
            E(t, (function(t) {
                t = e.getDimensionInfo(t);
                t.displayName && n.push(t.displayName);
            })), n.join(" ") || i));
        }
        function Cg(t) {
            return t.model.getRawData().count();
        }
        function Ig(t) {
            t = t.model;
            return t.setData(t.getRawData().cloneShallow()), kg;
        }
        function kg(t, e) {
            e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
        }
        function Dg(e, n) {
            E(Et(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), (function(t) {
                e.wrapMethod(t, dt(Ag, n));
            }));
        }
        function Ag(t, e) {
            t = Lg(t);
            return t && t.setOutputEnd((e || this).count()), e;
        }
        function Lg(t) {
            var e, n = (t.ecModel || {}).scheduler;
            n = n && n.getPipeline(t.uid);
            if (n) return (n = n.currentTask) && (e = n.agentStubMap) ? e.get(t.uid) : n;
        }
        lt(Mg, Bc), lt(Mg, pd), la(Mg, Up);
        Og.prototype.init = function(t, e) {}, Og.prototype.render = function(t, e, n, i) {}, 
        Og.prototype.dispose = function(t, e) {}, Og.prototype.updateView = function(t, e, n, i) {}, 
        Og.prototype.updateLayout = function(t, e, n, i) {}, Og.prototype.updateVisual = function(t, e, n, i) {}, 
        Og.prototype.toggleBlurSeries = function(t, e, n) {}, Og.prototype.eachRendered = function(t) {
            var e = this.group;
            e && e.traverse(t);
        };
        var Pg = Og;
        function Og() {
            this.group = new io, this.uid = Uc("viewComponent");
        }
        function Rg() {
            var o = Zo();
            return function(t) {
                var e = o(t), n = (t = t.pipelineContext, !!e.large), i = !!e.progressiveRender, r = e.large = !(!t || !t.large);
                e = e.progressiveRender = !(!t || !t.progressiveRender);
                return !(n == r && i == e) && "reset";
            };
        }
        sa(Pg), pa(Pg);
        var Ng = Zo(), Eg = Rg(), zg = (Bg.prototype.init = function(t, e) {}, Bg.prototype.render = function(t, e, n, i) {}, 
        Bg.prototype.highlight = function(t, e, n, i) {
            t = t.getData(i && i.dataType);
            t && Vg(t, i, "emphasis");
        }, Bg.prototype.downplay = function(t, e, n, i) {
            t = t.getData(i && i.dataType);
            t && Vg(t, i, "normal");
        }, Bg.prototype.remove = function(t, e) {
            this.group.removeAll();
        }, Bg.prototype.dispose = function(t, e) {}, Bg.prototype.updateView = function(t, e, n, i) {
            this.render(t, e, n, i);
        }, Bg.prototype.updateLayout = function(t, e, n, i) {
            this.render(t, e, n, i);
        }, Bg.prototype.updateVisual = function(t, e, n, i) {
            this.render(t, e, n, i);
        }, Bg.prototype.eachRendered = function(t) {
            fc(this.group, t);
        }, Bg.markUpdateMethod = function(t, e) {
            Ng(t).updateMethod = e;
        }, Bg.protoInitialize = void (Bg.prototype.type = "chart"), Bg);
        function Bg() {
            this.group = new io, this.uid = Uc("viewChart"), this.renderTask = If({
                plan: Hg,
                reset: Wg
            }), this.renderTask.context = {
                view: this
            };
        }
        function Fg(t, e, n) {
            t && au(t) && ("emphasis" === e ? Gl : Ul)(t, n);
        }
        function Vg(e, t, n) {
            var i, r = jo(e, t), o = t && null != t.highlightKey ? (t = t.highlightKey, i = null == (i = fl[t]) && dl <= 32 ? fl[t] = dl++ : i) : null;
            null != r ? E(zo(r), (function(t) {
                Fg(e.getItemGraphicEl(t), n, o);
            })) : e.eachItemGraphicEl((function(t) {
                Fg(t, n, o);
            }));
        }
        function Hg(t) {
            return Eg(t.model);
        }
        function Wg(t) {
            var e = t.model, n = t.ecModel, i = t.api, r = t.payload, o = e.pipelineContext.progressiveRender, a = (t = t.view, 
            r && Ng(r).updateMethod);
            o = o ? "incrementalPrepareRender" : a && t[a] ? a : "render";
            return "render" !== o && t[o](e, n, i, r), Gg[o];
        }
        sa(zg), pa(zg);
        var Gg = {
            incrementalPrepareRender: {
                progress: function(t, e) {
                    e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
                }
            },
            render: {
                forceFirstProgress: !0,
                progress: function(t, e) {
                    e.view.render(e.model, e.ecModel, e.api, e.payload);
                }
            }
        };
        function Ug(t, r, o) {
            var a, s, l, u, h, c = 0, p = 0, d = null;
            function f() {
                p = (new Date).getTime(), d = null, t.apply(l, u || []);
            }
            r = r || 0;
            function e() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                a = (new Date).getTime(), l = this, u = t;
                var n = h || r, i = h || o;
                h = null, s = a - (i ? c : p) - n, clearTimeout(d), i ? d = setTimeout(f, n) : 0 <= s ? f() : d = setTimeout(f, -s), 
                c = a;
            }
            return e.clear = function() {
                d && (clearTimeout(d), d = null);
            }, e.debounceNextCall = function(t) {
                h = t;
            }, e;
        }
        var Xg = Zo(), Yg = {
            itemStyle: da(Ec, !0),
            lineStyle: da(Pc, !0)
        }, qg = {
            lineStyle: "stroke",
            itemStyle: "fill"
        };
        function jg(t, e) {
            return t.visualStyleMapper || Yg[e] || (console.warn("Unknown style type '" + e + "'."), 
            Yg.itemStyle);
        }
        function Zg(t, e) {
            return t.visualDrawType || qg[e] || (console.warn("Unknown style type '" + e + "'."), 
            "fill");
        }
        ga = {
            createOnAllSeries: !0,
            performRawSeries: !0,
            reset: function(r, t) {
                var e = r.getData(), n = r.visualStyleAccessPath || "itemStyle", i = r.getModel(n), o = jg(r, n)(i), a = (i = i.getShallow("decal"), 
                i && (e.setVisual("decal", i), i.dirty = !0), Zg(r, n)), s = (i = o[a], k(i) ? i : null);
                n = "auto" === o.fill || "auto" === o.stroke;
                if (o[a] && !s && !n || (i = r.getColorFromPalette(r.name, null, t.getSeriesCount()), 
                o[a] || (o[a] = i, e.setVisual("colorFromPalette", !0)), o.fill = "auto" === o.fill || k(o.fill) ? i : o.fill, 
                o.stroke = "auto" === o.stroke || k(o.stroke) ? i : o.stroke), e.setVisual("style", o), 
                e.setVisual("drawType", a), !t.isSeriesFiltered(r) && s) return e.setVisual("colorFromPalette", !1), 
                {
                    dataEach: function(t, e) {
                        var n = r.getDataParams(e), i = O({}, o);
                        i[a] = s(n), t.setItemVisual(e, "style", i);
                    }
                };
            }
        };
        var Kg = new Hc, $g = (Ac = {
            createOnAllSeries: !0,
            performRawSeries: !0,
            reset: function(t, e) {
                var i, r, o;
                if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t)) return e = t.getData(), i = t.visualStyleAccessPath || "itemStyle", 
                r = jg(t, i), o = e.getVisual("drawType"), {
                    dataEach: e.hasItemOption ? function(t, e) {
                        var n = t.getRawDataItem(e);
                        n && n[i] && (Kg.option = n[i], n = r(Kg), O(t.ensureUniqueItemVisual(e, "style"), n), 
                        Kg.option.decal && (t.setItemVisual(e, "decal", Kg.option.decal), Kg.option.decal.dirty = !0), 
                        o in n) && t.setItemVisual(e, "colorFromPalette", !1);
                    } : null
                };
            }
        }, ip = {
            performRawSeries: !0,
            overallReset: function(e) {
                var i = z();
                e.eachSeries((function(t) {
                    var e, n = t.getColorBy();
                    t.isColorBySeries() || (n = t.type + "-" + n, (e = i.get(n)) || i.set(n, e = {}), 
                    Xg(t).scope = e);
                })), e.eachSeries((function(i) {
                    var r, o, a, s, t, l;
                    i.isColorBySeries() || e.isSeriesFiltered(i) || (r = i.getRawData(), o = {}, a = i.getData(), 
                    s = Xg(i).scope, t = i.visualStyleAccessPath || "itemStyle", l = Zg(i, t), a.each((function(t) {
                        var e = a.getRawIndex(t);
                        o[e] = t;
                    })), r.each((function(t) {
                        var e, n = o[t];
                        a.getItemVisual(n, "colorFromPalette") && (n = a.ensureUniqueItemVisual(n, "style"), 
                        t = r.getName(t) || t + "", e = r.count(), n[l] = i.getColorFromPalette(t, s, e));
                    })));
                }));
            }
        }, Math.PI);
        Jg.prototype.restoreData = function(t, e) {
            t.restoreData(e), this._stageTaskMap.each((function(t) {
                t = t.overallTask;
                t && t.dirty();
            }));
        }, Jg.prototype.getPerformArgs = function(t, e) {
            var n, i;
            if (t.__pipeline) return i = (n = this._pipelineMap.get(t.__pipeline.id)).context, 
            {
                step: e = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex ? n.step : null,
                modBy: null != (t = i && i.modDataCount) ? Math.ceil(t / e) : null,
                modDataCount: t
            };
        }, Jg.prototype.getPipeline = function(t) {
            return this._pipelineMap.get(t);
        }, Jg.prototype.updateStreamModes = function(t, e) {
            var n = this._pipelineMap.get(t.uid), i = t.getData().count(), r = (e = n.progressiveEnabled && e.incrementalPrepareRender && i >= n.threshold, 
            t.get("large") && i >= t.get("largeThreshold"));
            i = "mod" === t.get("progressiveChunkMode") ? i : null;
            t.pipelineContext = n.context = {
                progressiveRender: e,
                modDataCount: i,
                large: r
            };
        }, Jg.prototype.restorePipelines = function(t) {
            var i = this, r = i._pipelineMap = z();
            t.eachSeries((function(t) {
                var e = t.getProgressive(), n = t.uid;
                r.set(n, {
                    id: n,
                    head: null,
                    tail: null,
                    threshold: t.getProgressiveThreshold(),
                    progressiveEnabled: e && !(t.preventIncremental && t.preventIncremental()),
                    blockIndex: -1,
                    step: Math.round(e || 700),
                    count: 0
                }), i._pipe(t, t.dataTask);
            }));
        }, Jg.prototype.prepareStageTasks = function() {
            var n = this._stageTaskMap, i = this.api.getModel(), r = this.api;
            E(this._allHandlers, (function(t) {
                var e = n.get(t.uid) || n.set(t.uid, {});
                Ct(!(t.reset && t.overallReset), ""), t.reset && this._createSeriesStageTask(t, e, i, r), 
                t.overallReset && this._createOverallStageTask(t, e, i, r);
            }), this);
        }, Jg.prototype.prepareView = function(t, e, n, i) {
            var r = t.renderTask, o = r.context;
            o.model = e, o.ecModel = n, o.api = i, r.__block = !t.incrementalPrepareRender, 
            this._pipe(e, r);
        }, Jg.prototype.performDataProcessorTasks = function(t, e) {
            this._performStageTasks(this._dataProcessorHandlers, t, e, {
                block: !0
            });
        }, Jg.prototype.performVisualTasks = function(t, e, n) {
            this._performStageTasks(this._visualHandlers, t, e, n);
        }, Jg.prototype._performStageTasks = function(t, s, l, u) {
            u = u || {};
            var h = !1, c = this;
            function p(t, e) {
                return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
            }
            E(t, (function(i, t) {
                var e, n, r, o, a;
                u.visualType && u.visualType !== i.visualType || (e = (n = c._stageTaskMap.get(i.uid)).seriesTaskMap, 
                (n = n.overallTask) ? ((o = n.agentStubMap).each((function(t) {
                    p(u, t) && (t.dirty(), r = !0);
                })), r && n.dirty(), c.updatePayload(n, l), a = c.getPerformArgs(n, u.block), o.each((function(t) {
                    t.perform(a);
                })), n.perform(a) && (h = !0)) : e && e.each((function(t, e) {
                    p(u, t) && t.dirty();
                    var n = c.getPerformArgs(t, u.block);
                    n.skip = !i.performRawSeries && s.isSeriesFiltered(t.context.model), c.updatePayload(t, l), 
                    t.perform(n) && (h = !0);
                })));
            })), this.unfinished = h || this.unfinished;
        }, Jg.prototype.performSeriesTasks = function(t) {
            var e;
            t.eachSeries((function(t) {
                e = t.dataTask.perform() || e;
            })), this.unfinished = e || this.unfinished;
        }, Jg.prototype.plan = function() {
            this._pipelineMap.each((function(t) {
                var e = t.tail;
                do {
                    if (e.__block) {
                        t.blockIndex = e.__idxInPipeline;
                        break;
                    }
                } while (e = e.getUpstream());
            }));
        }, Jg.prototype.updatePayload = function(t, e) {
            "remain" !== e && (t.context.payload = e);
        }, Jg.prototype._createSeriesStageTask = function(n, t, i, r) {
            var o = this, a = t.seriesTaskMap, s = t.seriesTaskMap = z(), e = (t = n.seriesType, 
            n.getTargetSeries);
            function l(t) {
                var e = t.uid;
                e = s.set(e, a && a.get(e) || If({
                    plan: ry,
                    reset: oy,
                    count: ly
                }));
                e.context = {
                    model: t,
                    ecModel: i,
                    api: r,
                    useClearVisual: n.isVisual && !n.isLayout,
                    plan: n.plan,
                    reset: n.reset,
                    scheduler: o
                }, o._pipe(t, e);
            }
            n.createOnAllSeries ? i.eachRawSeries(l) : t ? i.eachRawSeriesByType(t, l) : e && e(i, r).each(l);
        }, Jg.prototype._createOverallStageTask = function(t, e, n, i) {
            var r = this, o = e.overallTask = e.overallTask || If({
                reset: ty
            }), a = (o.context = {
                ecModel: n,
                api: i,
                overallReset: t.overallReset,
                scheduler: r
            }, o.agentStubMap), s = o.agentStubMap = z(), l = (e = t.seriesType, t.getTargetSeries), u = !0, h = !1;
            function c(t) {
                var e = t.uid;
                e = s.set(e, a && a.get(e) || (h = !0, If({
                    reset: ey,
                    onDirty: iy
                })));
                e.context = {
                    model: t,
                    overallProgress: u
                }, e.agent = o, e.__block = u, r._pipe(t, e);
            }
            Ct(!t.createOnAllSeries, ""), e ? n.eachRawSeriesByType(e, c) : l ? l(n, i).each(c) : (u = !1, 
            E(n.getSeries(), c)), h && o.dirty();
        }, Jg.prototype._pipe = function(t, e) {
            t = t.uid, t = this._pipelineMap.get(t);
            t.head || (t.head = e), t.tail && t.tail.pipe(e), (t.tail = e).__idxInPipeline = t.count++, 
            e.__pipeline = t;
        }, Jg.wrapStageHandler = function(t, e) {
            return (t = k(t) ? {
                overallReset: t,
                seriesType: function(t) {
                    uy = null;
                    try {
                        t(hy, cy);
                    } catch (t) {}
                    return uy;
                }(t)
            } : t).uid = Uc("stageHandler"), e && (t.visualType = e), t;
        };
        var Qg = Jg;
        function Jg(t, e, n, i) {
            this._stageTaskMap = z(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), 
            i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
        }
        function ty(t) {
            t.overallReset(t.ecModel, t.api, t.payload);
        }
        function ey(t) {
            return t.overallProgress && ny;
        }
        function ny() {
            this.agent.dirty(), this.getDownstream().dirty();
        }
        function iy() {
            this.agent && this.agent.dirty();
        }
        function ry(t) {
            return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
        }
        function oy(t) {
            t.useClearVisual && t.data.clearAllVisual();
            t = t.resetDefines = zo(t.reset(t.model, t.ecModel, t.api, t.payload));
            return 1 < t.length ? F(t, (function(t, e) {
                return sy(e);
            })) : ay;
        }
        var ay = sy(0);
        function sy(o) {
            return function(t, e) {
                var n = e.data, i = e.resetDefines[o];
                if (i && i.dataEach) for (var r = t.start; r < t.end; r++) i.dataEach(n, r); else i && i.progress && i.progress(t, n);
            };
        }
        function ly(t) {
            return t.data.count();
        }
        var uy, hy = {}, cy = {};
        function py(t, e) {
            for (var n in e.prototype) t[n] = Vt;
        }
        py(hy, _d), py(cy, Sd), hy.eachSeriesByType = hy.eachRawSeriesByType = function(t) {
            uy = t;
        }, hy.eachComponent = function(t) {
            "series" === t.mainType && t.subType && (uy = t.subType);
        };
        function dy() {
            return {
                axisLine: {
                    lineStyle: {
                        color: fy
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "#484753"
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: [ "rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)" ]
                    }
                },
                minorSplitLine: {
                    lineStyle: {
                        color: "#20203B"
                    }
                }
            };
        }
        Rc = [ "#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF" ], 
        Bc = {
            color: Rc,
            colorLayer: [ [ "#37A2DA", "#ffd85c", "#fd7b5f" ], [ "#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5" ], [ "#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF" ], Rc ]
        };
        var fy = "#B9B8CE", gy = (Ec = "#100C2A", Pc = [ "#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff" ], 
        Rc = {
            darkMode: !0,
            color: Pc,
            backgroundColor: Ec,
            axisPointer: {
                lineStyle: {
                    color: "#817f91"
                },
                crossStyle: {
                    color: "#817f91"
                },
                label: {
                    color: "#fff"
                }
            },
            legend: {
                textStyle: {
                    color: fy
                }
            },
            textStyle: {
                color: fy
            },
            title: {
                textStyle: {
                    color: "#EEF1FA"
                },
                subtextStyle: {
                    color: "#B9B8CE"
                }
            },
            toolbox: {
                iconStyle: {
                    borderColor: fy
                }
            },
            dataZoom: {
                borderColor: "#71708A",
                textStyle: {
                    color: fy
                },
                brushStyle: {
                    color: "rgba(135,163,206,0.3)"
                },
                handleStyle: {
                    color: "#353450",
                    borderColor: "#C5CBE3"
                },
                moveHandleStyle: {
                    color: "#B0B6C3",
                    opacity: .3
                },
                fillerColor: "rgba(135,163,206,0.2)",
                emphasis: {
                    handleStyle: {
                        borderColor: "#91B7F2",
                        color: "#4D587D"
                    },
                    moveHandleStyle: {
                        color: "#636D9A",
                        opacity: .7
                    }
                },
                dataBackground: {
                    lineStyle: {
                        color: "#71708A",
                        width: 1
                    },
                    areaStyle: {
                        color: "#71708A"
                    }
                },
                selectedDataBackground: {
                    lineStyle: {
                        color: "#87A3CE"
                    },
                    areaStyle: {
                        color: "#87A3CE"
                    }
                }
            },
            visualMap: {
                textStyle: {
                    color: fy
                }
            },
            timeline: {
                lineStyle: {
                    color: fy
                },
                label: {
                    color: fy
                },
                controlStyle: {
                    color: fy,
                    borderColor: fy
                }
            },
            calendar: {
                itemStyle: {
                    color: Ec
                },
                dayLabel: {
                    color: fy
                },
                monthLabel: {
                    color: fy
                },
                yearLabel: {
                    color: fy
                }
            },
            timeAxis: dy(),
            logAxis: dy(),
            valueAxis: dy(),
            categoryAxis: dy(),
            line: {
                symbol: "circle"
            },
            graph: {
                color: Pc
            },
            gauge: {
                title: {
                    color: fy
                },
                axisLine: {
                    lineStyle: {
                        color: [ [ 1, "rgba(207,212,219,0.2)" ] ]
                    }
                },
                axisLabel: {
                    color: fy
                },
                detail: {
                    color: "#EEF1FA"
                }
            },
            candlestick: {
                itemStyle: {
                    color: "#f64e56",
                    color0: "#54ea92",
                    borderColor: "#f64e56",
                    borderColor0: "#54ea92"
                }
            }
        }, Rc.categoryAxis.splitLine.show = !1, yy.prototype.normalizeQuery = function(t) {
            var e, a, s, l = {}, u = {}, h = {};
            return H(t) ? (e = aa(t), l.mainType = e.main || null, l.subType = e.sub || null) : (a = [ "Index", "Name", "Id" ], 
            s = {
                name: 1,
                dataIndex: 1,
                dataType: 1
            }, E(t, (function(t, e) {
                for (var n = !1, i = 0; i < a.length; i++) {
                    var r = a[i], o = e.lastIndexOf(r);
                    0 < o && o === e.length - r.length && "data" !== (o = e.slice(0, o)) && (l.mainType = o, 
                    l[r.toLowerCase()] = t, n = !0);
                }
                s.hasOwnProperty(e) && (u[e] = t, n = !0), n || (h[e] = t);
            }))), {
                cptQuery: l,
                dataQuery: u,
                otherQuery: h
            };
        }, yy.prototype.filter = function(t, e) {
            var n, i, r, o, a, s = this.eventInfo;
            return !s || (n = s.targetEl, i = s.packedEvent, r = s.model, s = s.view, !r) || !s || (o = e.cptQuery, 
            a = e.dataQuery, l(o, r, "mainType") && l(o, r, "subType") && l(o, r, "index", "componentIndex") && l(o, r, "name") && l(o, r, "id") && l(a, i, "name") && l(a, i, "dataIndex") && l(a, i, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, n, i)));
            function l(t, e, n, i) {
                return null == t[n] || e[i || n] === t[n];
            }
        }, yy.prototype.afterTrigger = function() {
            this.eventInfo = null;
        }, yy);
        function yy() {}
        var my = [ "symbol", "symbolSize", "symbolRotate", "symbolOffset" ], vy = my.concat([ "symbolKeepAspect" ]);
        Ec = {
            createOnAllSeries: !0,
            performRawSeries: !0,
            reset: function(a, t) {
                var e = a.getData();
                if (a.legendIcon && e.setVisual("legendIcon", a.legendIcon), a.hasSymbolVisual) {
                    for (var s, n = {}, l = {}, i = !1, r = 0; r < my.length; r++) {
                        var o = my[r], u = a.get(o);
                        k(u) ? (i = !0, l[o] = u) : n[o] = u;
                    }
                    if (n.symbol = n.symbol || a.defaultSymbol, e.setVisual(O({
                        legendIcon: a.legendIcon || n.symbol,
                        symbolKeepAspect: a.get("symbolKeepAspect")
                    }, n)), !t.isSeriesFiltered(a)) return s = R(l), {
                        dataEach: i ? function(t, e) {
                            for (var n = a.getRawValue(e), i = a.getDataParams(e), r = 0; r < s.length; r++) {
                                var o = s[r];
                                t.setItemVisual(e, o, l[o](n, i));
                            }
                        } : null
                    };
                }
            }
        }, Pc = {
            createOnAllSeries: !0,
            performRawSeries: !0,
            reset: function(t, e) {
                if (t.hasSymbolVisual && !e.isSeriesFiltered(t)) return {
                    dataEach: t.getData().hasItemOption ? function(t, e) {
                        for (var n = t.getItemModel(e), i = 0; i < vy.length; i++) {
                            var r = vy[i], o = n.getShallow(r, !0);
                            null != o && t.setItemVisual(e, r, o);
                        }
                    } : null
                };
            }
        };
        function _y(o, t) {
            E([ [ o + "ToggleSelect", "toggleSelect" ], [ o + "Select", "select" ], [ o + "UnSelect", "unselect" ] ], (function(r) {
                t(r[0], (function(t, e, n) {
                    var i;
                    t = O({}, t), n.dispatchAction(O(t, {
                        type: r[1],
                        seriesIndex: (n = t, i = [], e.eachComponent({
                            mainType: "series",
                            subType: o,
                            query: n
                        }, (function(t) {
                            i.push(t.seriesIndex);
                        })), i)
                    }));
                }));
            }));
        }
        function xy(t, e, s, n, l) {
            var u = t + e;
            s.isSilent(u) || n.eachComponent({
                mainType: "series",
                subType: "pie"
            }, (function(t) {
                for (var e, n, i = t.seriesIndex, r = t.option.selectedMap, o = l.selected, a = 0; a < o.length; a++) o[a].seriesIndex === i && (n = jo(e = t.getData(), l.fromActionPayload), 
                s.trigger(u, {
                    type: u,
                    seriesId: t.id,
                    name: V(n) ? e.getName(n[0]) : e.getName(n),
                    selected: H(r) ? r : O({}, r)
                }));
            }));
        }
        function wy(t, e, n) {
            for (var i; t && (!e(t) || (i = t, !n)); ) t = t.__hostTarget || t.parent;
            return i;
        }
        var by = Math.round(9 * Math.random()), Sy = "function" == typeof Object.defineProperty, My = (Ty.prototype.get = function(t) {
            return this._guard(t)[this._id];
        }, Ty.prototype.set = function(t, e) {
            t = this._guard(t);
            return Sy ? Object.defineProperty(t, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0
            }) : t[this._id] = e, this;
        }, Ty.prototype.delete = function(t) {
            return !!this.has(t) && (delete this._guard(t)[this._id], !0);
        }, Ty.prototype.has = function(t) {
            return !!this._guard(t)[this._id];
        }, Ty.prototype._guard = function(t) {
            if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
            return t;
        }, Ty);
        function Ty() {
            this._id = "__ec_inner_" + by++;
        }
        var Cy = Z.extend({
            type: "triangle",
            shape: {
                cx: 0,
                cy: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var n = e.cx, i = e.cy, r = e.width / 2;
                e = e.height / 2;
                t.moveTo(n, i - e), t.lineTo(n + r, i + e), t.lineTo(n - r, i + e), t.closePath();
            }
        }), Iy = Z.extend({
            type: "diamond",
            shape: {
                cx: 0,
                cy: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var n = e.cx, i = e.cy, r = e.width / 2;
                e = e.height / 2;
                t.moveTo(n, i - e), t.lineTo(n + r, i), t.lineTo(n, i + e), t.lineTo(n - r, i), 
                t.closePath();
            }
        }), ky = Z.extend({
            type: "pin",
            shape: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var n = e.x, i = e.y, r = e.width / 5 * 3, o = (e = Math.max(r, e.height), r = r / 2, 
                r * r / (e - r)), a = (e = i - e + r + o, Math.asin(o / r)), s = Math.cos(a) * r, l = Math.sin(a), u = Math.cos(a), h = .6 * r, c = .7 * r;
                t.moveTo(n - s, e + o), t.arc(n, e, r, Math.PI - a, 2 * Math.PI + a), t.bezierCurveTo(n + s - l * h, e + o + u * h, n, i - c, n, i), 
                t.bezierCurveTo(n, i - c, n - s + l * h, e + o + u * h, n - s, e + o), t.closePath();
            }
        }), Dy = Z.extend({
            type: "arrow",
            shape: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function(t, e) {
                var n = e.height, i = e.width, r = e.x;
                e = e.y, i = i / 3 * 2;
                t.moveTo(r, e), t.lineTo(r + i, e + n), t.lineTo(r, e + n / 4 * 3), t.lineTo(r - i, e + n), 
                t.lineTo(r, e), t.closePath();
            }
        }), Ay = {
            line: function(t, e, n, i, r) {
                r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
            },
            rect: function(t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i;
            },
            roundRect: function(t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
            },
            square: function(t, e, n, i, r) {
                n = Math.min(n, i);
                r.x = t, r.y = e, r.width = n, r.height = n;
            },
            circle: function(t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
            },
            diamond: function(t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
            },
            pin: function(t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
            },
            arrow: function(t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
            },
            triangle: function(t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
            }
        }, Ly = {}, Py = (E({
            line: gh,
            rect: qs,
            roundRect: qs,
            square: qs,
            circle: Au,
            diamond: Iy,
            pin: ky,
            arrow: Dy,
            triangle: Cy
        }, (function(t, e) {
            Ly[e] = new t;
        })), Z.extend({
            type: "symbol",
            shape: {
                symbolType: "",
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            calculateTextPosition: function(t, e, n) {
                t = Ur(t, e, n);
                var i = this.shape;
                return i && "pin" === i.symbolType && "inside" === e.position && (t.y = n.y + .4 * n.height), 
                t;
            },
            buildPath: function(t, e, n) {
                var i, r = e.symbolType;
                "none" !== r && (i = (i = Ly[r]) || Ly[r = "rect"], Ay[r](e.x, e.y, e.width, e.height, i.shape), 
                i.buildPath(t, i.shape, n));
            }
        }));
        function Oy(t, e) {
            var n;
            "image" !== this.type && (n = this.style, this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff", 
            n.lineWidth = 2) : "line" === this.shape.symbolType ? n.stroke = t : n.fill = t, 
            this.markRedraw());
        }
        function Ry(t, e, n, i, r, o, a) {
            var s = 0 === t.indexOf("empty");
            return (a = 0 === (t = s ? t.substr(5, 1).toLowerCase() + t.substr(6) : t).indexOf("image://") ? sc(t.slice(8), new U(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? ac(t.slice(7), {}, new U(e, n, i, r), a ? "center" : "cover") : new Py({
                shape: {
                    symbolType: t,
                    x: e,
                    y: n,
                    width: i,
                    height: r
                }
            })).__isEmptyBrush = s, a.setColor = Oy, o && a.setColor(o), a;
        }
        function Ny(t, e) {
            if (null != t) return [ vo((t = V(t) ? t : [ t, t ])[0], e[0]) || 0, vo(N(t[1], t[0]), e[1]) || 0 ];
        }
        function Ey(t) {
            return isFinite(t);
        }
        function zy(t, e, n) {
            for (var i, r, o, a, s, l, u, h, c, p = "radial" === e.type ? (i = t, r = e, a = (o = n).width, 
            s = o.height, l = Math.min(a, s), u = null == r.x ? .5 : r.x, h = null == r.y ? .5 : r.y, 
            c = null == r.r ? .5 : r.r, r.global || (u = u * a + o.x, h = h * s + o.y, c *= l), 
            u = Ey(u) ? u : .5, h = Ey(h) ? h : .5, c = 0 <= c && Ey(c) ? c : .5, i.createRadialGradient(u, h, 0, u, h, c)) : (r = t, 
            a = n, o = null == (s = e).x ? 0 : s.x, l = null == s.x2 ? 1 : s.x2, i = null == s.y ? 0 : s.y, 
            u = null == s.y2 ? 0 : s.y2, s.global || (o = o * a.width + a.x, l = l * a.width + a.x, 
            i = i * a.height + a.y, u = u * a.height + a.y), o = Ey(o) ? o : 0, l = Ey(l) ? l : 1, 
            i = Ey(i) ? i : 0, u = Ey(u) ? u : 0, r.createLinearGradient(o, i, l, u)), d = e.colorStops, f = 0; f < d.length; f++) p.addColorStop(d[f].offset, d[f].color);
            return p;
        }
        function By(t) {
            return parseInt(t, 10);
        }
        function Fy(t, e, n) {
            var i = [ "width", "height" ][e], r = [ "clientWidth", "clientHeight" ][e], o = [ "paddingLeft", "paddingTop" ][e];
            e = [ "paddingRight", "paddingBottom" ][e];
            return null != n[i] && "auto" !== n[i] ? parseFloat(n[i]) : (n = document.defaultView.getComputedStyle(t), 
            (t[r] || By(n[i]) || By(t.style[i])) - (By(n[o]) || 0) - (By(n[e]) || 0) | 0);
        }
        function Vy(t) {
            var e, n = t.style, i = n.lineDash && 0 < n.lineWidth && (r = n.lineDash, i = n.lineWidth, 
            r && "solid" !== r && 0 < i ? "dashed" === r ? [ 4 * i, 2 * i ] : "dotted" === r ? [ i ] : W(r) ? [ r ] : V(r) ? r : null : null), r = n.lineDashOffset;
            return i && (e = n.strokeNoScale && t.getLineScale ? t.getLineScale() : 1) && 1 !== e && (i = F(i, (function(t) {
                return t / e;
            })), r /= e), [ i, r ];
        }
        var Hy = new fs(!0);
        function Wy(t) {
            var e = t.stroke;
            return !(null == e || "none" === e || !(0 < t.lineWidth));
        }
        function Gy(t) {
            return "string" == typeof t && "none" !== t;
        }
        function Uy(t) {
            t = t.fill;
            return null != t && "none" !== t;
        }
        function Xy(t, e) {
            var n;
            null != e.fillOpacity && 1 !== e.fillOpacity ? (n = t.globalAlpha, t.globalAlpha = e.fillOpacity * e.opacity, 
            t.fill(), t.globalAlpha = n) : t.fill();
        }
        function Yy(t, e) {
            var n;
            null != e.strokeOpacity && 1 !== e.strokeOpacity ? (n = t.globalAlpha, t.globalAlpha = e.strokeOpacity * e.opacity, 
            t.stroke(), t.globalAlpha = n) : t.stroke();
        }
        function qy(t, e, n) {
            n = va(e.image, e.__image, n);
            if (xa(n)) return t = t.createPattern(n, e.repeat || "repeat"), "function" == typeof DOMMatrix && t && t.setTransform && ((n = new DOMMatrix).translateSelf(e.x || 0, e.y || 0), 
            n.rotateSelf(0, 0, (e.rotation || 0) * Ht), n.scaleSelf(e.scaleX || 1, e.scaleY || 1), 
            t.setTransform(n)), t;
        }
        var jy = [ "shadowBlur", "shadowOffsetX", "shadowOffsetY" ], Zy = [ [ "lineCap", "butt" ], [ "lineJoin", "miter" ], [ "miterLimit", 10 ] ];
        function Ky(t, e, n, i, r) {
            var o, a = !1;
            if (!i && e === (n = n || {})) return !1;
            !i && e.opacity === n.opacity || (i0(t, r), a = !0, o = Math.max(Math.min(e.opacity, 1), 0), 
            t.globalAlpha = isNaN(o) ? Ra.opacity : o), !i && e.blend === n.blend || (a || (i0(t, r), 
            a = !0), t.globalCompositeOperation = e.blend || Ra.blend);
            for (var s = 0; s < jy.length; s++) {
                var l = jy[s];
                !i && e[l] === n[l] || (a || (i0(t, r), a = !0), t[l] = t.dpr * (e[l] || 0));
            }
            return !i && e.shadowColor === n.shadowColor || (a || (i0(t, r), a = !0), t.shadowColor = e.shadowColor || Ra.shadowColor), 
            a;
        }
        function $y(t, e, n, i, r) {
            var o = r0(e, r.inHover), a = i ? null : n && r0(n, r.inHover) || {};
            if (o !== a) {
                var s = Ky(t, o, a, i, r);
                (i || o.fill !== a.fill) && (s || (i0(t, r), s = !0), Gy(o.fill)) && (t.fillStyle = o.fill), 
                (i || o.stroke !== a.stroke) && (s || (i0(t, r), s = !0), Gy(o.stroke)) && (t.strokeStyle = o.stroke), 
                !i && o.opacity === a.opacity || (s || (i0(t, r), s = !0), t.globalAlpha = null == o.opacity ? 1 : o.opacity), 
                e.hasStroke() && (n = o.lineWidth / (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1), 
                t.lineWidth !== n) && (s || (i0(t, r), s = !0), t.lineWidth = n);
                for (var l = 0; l < Zy.length; l++) {
                    var u = Zy[l], h = u[0];
                    !i && o[h] === a[h] || (s || (i0(t, r), s = !0), t[h] = o[h] || u[1]);
                }
            }
        }
        function Qy(t, e) {
            e = e.transform;
            var n = t.dpr || 1;
            e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
        }
        var Jy = 1, t0 = 2, e0 = 3, n0 = 4;
        function i0(t, e) {
            e.batchFill && t.fill(), e.batchStroke && t.stroke(), e.batchFill = "", e.batchStroke = "";
        }
        function r0(t, e) {
            return e && t.__hoverStyle || t.style;
        }
        function o0(t, e) {
            a0(t, e, {
                inHover: !1,
                viewWidth: 0,
                viewHeight: 0
            }, !0);
        }
        function a0(t, e, n, E) {
            var i = e.transform;
            if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) return e.__dirty &= ~mn, 
            e.__isRendered = !1;
            var r, o, a, s, l, u, h, c, p, d, f, g, y, m, v, _, x, w, b, S, M, T, C, I = e.__clipPaths, k = n.prevElClipPaths, D = !1, A = !1;
            if (!k || function(t, e) {
                if (t !== e && (t || e)) {
                    if (!t || !e || t.length !== e.length) return 1;
                    for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return 1;
                }
            }(I, k)) {
                if (k && k.length && (i0(t, n), t.restore(), A = D = !0, n.prevElClipPaths = null, 
                n.allClipped = !1, n.prevEl = null), I && I.length) {
                    i0(t, n), t.save();
                    var z = I, B = t;
                    k = n;
                    for (var F = !1, V = 0; V < z.length; V++) {
                        var H = z[V];
                        F = F || H.isZeroArea();
                        Qy(B, H), B.beginPath(), H.buildPath(B, H.shape), B.clip();
                    }
                    k.allClipped = F, D = !0;
                }
                n.prevElClipPaths = I;
            }
            if (n.allClipped) e.__isRendered = !1; else {
                e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
                k = n.prevEl;
                var L = (k || (A = D = !0), e instanceof Z && e.autoBatch && (I = e.style, L = Uy(I), 
                C = Wy(I), !(I.lineDash || !(+L ^ +C) || L && "string" != typeof I.fill || C && "string" != typeof I.stroke || I.strokePercent < 1 || I.strokeOpacity < 1 || I.fillOpacity < 1)));
                D = (D || (C = i, I = k.transform, C && I ? C[0] !== I[0] || C[1] !== I[1] || C[2] !== I[2] || C[3] !== I[3] || C[4] !== I[4] || C[5] !== I[5] : C || I) ? (i0(t, n), 
                Qy(t, e)) : L || i0(t, n), r0(e, n.inHover));
                if (e instanceof Z) n.lastDrawType !== Jy && (A = !0, n.lastDrawType = Jy), $y(t, e, k, A, n), 
                L && (n.batchFill || n.batchStroke) || t.beginPath(), i = t, I = e, O = L, y = Wy(a = D), 
                m = Uy(a), v = a.strokePercent, _ = v < 1, x = !I.path, I.silent && !_ || !x || I.createPathProxy(), 
                w = I.path || Hy, b = I.__dirty, O || (s = a.fill, T = a.stroke, l = m && !!s.colorStops, 
                u = y && !!T.colorStops, h = m && !!s.image, c = y && !!T.image, M = g = f = d = p = void 0, 
                (l || u) && (M = I.getBoundingRect()), l && (p = b ? zy(i, s, M) : I.__canvasFillGradient, 
                I.__canvasFillGradient = p), u && (d = b ? zy(i, T, M) : I.__canvasStrokeGradient, 
                I.__canvasStrokeGradient = d), h && (f = b || !I.__canvasFillPattern ? qy(i, s, I) : I.__canvasFillPattern, 
                I.__canvasFillPattern = f), c && (g = b || !I.__canvasStrokePattern ? qy(i, T, I) : I.__canvasStrokePattern, 
                I.__canvasStrokePattern = f), l ? i.fillStyle = p : h && (f ? i.fillStyle = f : m = !1), 
                u ? i.strokeStyle = d : c && (g ? i.strokeStyle = g : y = !1)), M = I.getGlobalScale(), 
                w.setScale(M[0], M[1], I.segmentIgnoreThreshold), i.setLineDash && a.lineDash && (S = (s = Vy(I))[0], 
                P = s[1]), T = !0, (x || b & vn) && (w.setDPR(i.dpr), _ ? w.setContext(null) : (w.setContext(i), 
                T = !1), w.reset(), I.buildPath(w, I.shape, O), w.toStatic(), I.pathUpdated()), 
                T && w.rebuildPath(i, _ ? v : 1), S && (i.setLineDash(S), i.lineDashOffset = P), 
                O || (a.strokeFirst ? (y && Yy(i, a), m && Xy(i, a)) : (m && Xy(i, a), y && Yy(i, a))), 
                S && i.setLineDash([]), L && (n.batchFill = D.fill || "", n.batchStroke = D.stroke || ""); else if (e instanceof Rs) n.lastDrawType !== e0 && (A = !0, 
                n.lastDrawType = e0), $y(t, e, k, A, n), l = t, p = e, null != (f = (h = D).text) && (f += ""), 
                f && (l.font = h.font || K, l.textAlign = h.textAlign, l.textBaseline = h.textBaseline, 
                d = u = void 0, l.setLineDash && h.lineDash && (u = (p = Vy(p))[0], d = p[1]), u && (l.setLineDash(u), 
                l.lineDashOffset = d), h.strokeFirst ? (Wy(h) && l.strokeText(f, h.x, h.y), Uy(h) && l.fillText(f, h.x, h.y)) : (Uy(h) && l.fillText(f, h.x, h.y), 
                Wy(h) && l.strokeText(f, h.x, h.y)), u) && l.setLineDash([]); else if (e instanceof Fs) n.lastDrawType !== t0 && (A = !0, 
                n.lastDrawType = t0), c = k, g = A, Ky(t, r0(e, (M = n).inHover), c && r0(c, M.inHover), g, M), 
                s = t, x = D, (I = (b = e).__image = va(x.image, b.__image, b, b.onload)) && xa(I) && (T = x.x || 0, 
                w = x.y || 0, _ = b.getWidth(), b = b.getHeight(), v = I.width / I.height, null == _ && null != b ? _ = b * v : null == b && null != _ ? b = _ / v : null == _ && null == b && (_ = I.width, 
                b = I.height), x.sWidth && x.sHeight ? (r = x.sx || 0, o = x.sy || 0, s.drawImage(I, r, o, x.sWidth, x.sHeight, T, w, _, b)) : x.sx && x.sy ? (v = _ - (r = x.sx), 
                x = b - (o = x.sy), s.drawImage(I, r, o, v, x, T, w, _, b)) : s.drawImage(I, T, w, _, b)); else if (e.getTemporalDisplayables) {
                    n.lastDrawType !== n0 && (A = !0, n.lastDrawType = n0);
                    var W = t;
                    var P = e;
                    var O = n;
                    var G = P.getDisplayables(), U = P.getTemporalDisplayables();
                    W.save();
                    var R, X, Y = {
                        prevElClipPaths: null,
                        prevEl: null,
                        allClipped: !1,
                        viewWidth: O.viewWidth,
                        viewHeight: O.viewHeight,
                        inHover: O.inHover
                    };
                    for (R = P.getCursor(), X = G.length; R < X; R++) (N = G[R]).beforeBrush && N.beforeBrush(), 
                    N.innerBeforeBrush(), a0(W, N, Y, R === X - 1), N.innerAfterBrush(), N.afterBrush && N.afterBrush(), 
                    Y.prevEl = N;
                    for (var N, q = 0, j = U.length; q < j; q++) (N = U[q]).beforeBrush && N.beforeBrush(), 
                    N.innerBeforeBrush(), a0(W, N, Y, q === j - 1), N.innerAfterBrush(), N.afterBrush && N.afterBrush(), 
                    Y.prevEl = N;
                    P.clearTemporalDisplayables(), P.notClear = !0, W.restore();
                }
                L && E && i0(t, n), e.innerAfterBrush(), e.afterBrush && e.afterBrush(), (n.prevEl = e).__dirty = 0, 
                e.__isRendered = !0;
            }
        }
        var s0 = new My, l0 = new ti(100), u0 = [ "symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight" ];
        function h0(t, e) {
            if ("none" === t) return null;
            var n = e.getDevicePixelRatio(), i = e.getZr(), r = "svg" === i.painter.type;
            e = (t.dirty && s0.delete(t), s0.get(t));
            if (e) return e;
            for (var o, a = B(t, {
                symbol: "rect",
                symbolSize: 1,
                symbolKeepAspect: !0,
                color: "rgba(0, 0, 0, 0.2)",
                backgroundColor: null,
                dashArrayX: 5,
                dashArrayY: 5,
                rotation: 0,
                maxTileWidth: 512,
                maxTileHeight: 512
            }), s = (e = ("none" === a.backgroundColor && (a.backgroundColor = null), {
                repeat: "repeat"
            }), e), l = [ n ], u = !0, h = 0; h < u0.length; ++h) {
                var c = a[u0[h]];
                if (null != c && !V(c) && !H(c) && !W(c) && "boolean" != typeof c) {
                    u = !1;
                    break;
                }
                l.push(c);
            }
            u && (o = l.join(",") + (r ? "-svg" : ""), v = l0.get(o)) && (r ? s.svgElement = v : s.image = v);
            var p, d = function t(e) {
                if (!e || 0 === e.length) return [ [ 0, 0 ] ];
                if (W(e)) return [ [ o = Math.ceil(e), o ] ];
                for (var n = !0, i = 0; i < e.length; ++i) if (!W(e[i])) {
                    n = !1;
                    break;
                }
                if (n) return t([ e ]);
                var r = [];
                for (i = 0; i < e.length; ++i) {
                    var o;
                    W(e[i]) ? (o = Math.ceil(e[i]), r.push([ o, o ])) : (o = F(e[i], (function(t) {
                        return Math.ceil(t);
                    }))).length % 2 == 1 ? r.push(o.concat(o)) : r.push(o);
                }
                return r;
            }(a.dashArrayX), f = function(t) {
                if (!t || "object" == typeof t && 0 === t.length) return [ 0, 0 ];
                if (W(t)) return [ e = Math.ceil(t), e ];
                var e = F(t, (function(t) {
                    return Math.ceil(t);
                }));
                return t.length % 2 ? e.concat(e) : e;
            }(a.dashArrayY), g = function t(e) {
                if (!e || 0 === e.length) return [ [ "rect" ] ];
                if (H(e)) return [ [ e ] ];
                for (var n = !0, i = 0; i < e.length; ++i) if (!H(e[i])) {
                    n = !1;
                    break;
                }
                if (n) return t([ e ]);
                var r = [];
                for (i = 0; i < e.length; ++i) H(e[i]) ? r.push([ e[i] ]) : r.push(e[i]);
                return r;
            }(a.symbol), y = F(d, c0), m = c0(f), v = !r && q.createCanvas(), _ = r && {
                tag: "g",
                attrs: {},
                key: "dcl",
                children: []
            }, x = function() {
                for (var t = 1, e = 0, n = y.length; e < n; ++e) t = Oo(t, y[e]);
                var i = 1;
                for (e = 0, n = g.length; e < n; ++e) i = Oo(i, g[e].length);
                t *= i;
                var r = m * y.length * g.length;
                return {
                    width: Math.max(1, Math.min(t, a.maxTileWidth)),
                    height: Math.max(1, Math.min(r, a.maxTileHeight))
                };
            }();
            v && (v.width = x.width * n, v.height = x.height * n, p = v.getContext("2d")), p && (p.clearRect(0, 0, v.width, v.height), 
            a.backgroundColor) && (p.fillStyle = a.backgroundColor, p.fillRect(0, 0, v.width, v.height));
            for (var w = 0, b = 0; b < f.length; ++b) w += f[b];
            if (!(w <= 0)) for (var S, M = -m, T = 0, C = 0, I = 0; M < x.height; ) {
                if (T % 2 == 0) {
                    for (var k = C / 2 % g.length, D = 0, A = 0, L = 0; D < 2 * x.width; ) {
                        var P, O, R, E, N, z = 0;
                        for (b = 0; b < d[I].length; ++b) z += d[I][b];
                        if (z <= 0) break;
                        A % 2 == 0 && (O = .5 * (1 - a.symbolSize), P = D + d[I][A] * O, O = M + f[T] * O, 
                        R = d[I][A] * a.symbolSize, E = f[T] * a.symbolSize, N = L / 2 % g[k].length, P, 
                        N = g[k][N], S = void 0, N = Ry(N, P * (S = r ? 1 : n), O * S, R * S, E * S, a.color, a.symbolKeepAspect), 
                        r ? (P = i.painter.renderOneToVNode(N)) && _.children.push(P) : o0(p, N)), D += d[I][A], 
                        ++L, ++A === d[I].length && (A = 0);
                    }
                    ++I === d.length && (I = 0);
                }
                M += f[T], ++C, ++T === f.length && (T = 0);
            }
            return u && l0.put(o, v || _), s.image = v, s.svgElement = _, s.svgWidth = x.width, 
            s.svgHeight = x.height, e.rotation = a.rotation, e.scaleX = e.scaleY = r ? 1 : 1 / n, 
            s0.set(t, e), t.dirty = !1, e;
        }
        function c0(t) {
            for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
            return t.length % 2 == 1 ? 2 * e : e;
        }
        var p0 = new ue, d0 = {};
        Iy = {
            PROCESSOR: {
                FILTER: 1e3,
                SERIES_FILTER: 800,
                STATISTIC: 5e3
            },
            VISUAL: {
                LAYOUT: 1e3,
                PROGRESSIVE_LAYOUT: 1100,
                GLOBAL: 2e3,
                CHART: 3e3,
                POST_CHART_LAYOUT: 4600,
                COMPONENT: 4e3,
                BRUSH: 5e3,
                CHART_ITEM: 4500,
                ARIA: 6e3,
                DECAL: 7e3
            }
        };
        var f0 = "__flagInMainProcess", g0 = "__pendingUpdate", y0 = "__needsUpdateStatus", m0 = /^[a-zA-Z0-9_]+$/, v0 = "__connectUpdateStatus";
        function _0(n) {
            return function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                if (!this.isDisposed()) return w0(this, n, t);
                this.id;
            };
        }
        function x0(n) {
            return function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return w0(this, n, t);
            };
        }
        function w0(t, e, n) {
            return n[0] = n[0] && n[0].toLowerCase(), ue.prototype[e].apply(t, n);
        }
        u(W0, V0 = ue);
        var b0, S0, M0, T0, C0, I0, k0, D0, A0, L0, P0, O0, R0, N0, E0, z0, B0, F0, V0, H0 = W0;
        ky = H0.prototype;
        function W0() {
            return null !== V0 && V0.apply(this, arguments) || this;
        }
        ky.on = x0("on"), ky.off = x0("off");
        u(c, G0 = ue), c.prototype._onframe = function() {
            if (!this._disposed) {
                F0(this);
                var t = this._scheduler;
                if (this[g0]) {
                    var e = this[g0].silent;
                    this[f0] = !0;
                    try {
                        b0(this), T0.update.call(this, null, this[g0].updateParams);
                    } catch (t) {
                        throw this[f0] = !1, this[g0] = null, t;
                    }
                    this._zr.flush(), this[f0] = !1, this[g0] = null, D0.call(this, e), A0.call(this, e);
                } else if (t.unfinished) {
                    var n = 1, i = this._model, r = this._api;
                    t.unfinished = !1;
                    do {
                        var o = +new Date;
                    } while (t.performSeriesTasks(i), t.performDataProcessorTasks(i), I0(this, i), t.performVisualTasks(i), 
                    N0(this, this._model, r, "remain", {}), 0 < (n -= +new Date - o) && t.unfinished);
                    t.unfinished || this._zr.flush();
                }
            }
        }, c.prototype.getDom = function() {
            return this._dom;
        }, c.prototype.getId = function() {
            return this.id;
        }, c.prototype.getZr = function() {
            return this._zr;
        }, c.prototype.isSSR = function() {
            return this._ssr;
        }, c.prototype.setOption = function(t, e, n) {
            if (!this[f0]) if (this._disposed) this.id; else {
                P(e) && (n = e.lazyUpdate, i = e.silent, r = e.replaceMerge, o = e.transition, e = e.notMerge), 
                this[f0] = !0, this._model && !e || (e = new Dd(this._api), a = this._theme, (s = this._model = new _d).scheduler = this._scheduler, 
                s.ssr = this._ssr, s.init(null, null, null, a, this._locale, e)), this._model.setOption(t, {
                    replaceMerge: r
                }, tm);
                var i, r, o, a, s = {
                    seriesTransition: o,
                    optionChanged: !0
                };
                if (n) this[g0] = {
                    silent: i,
                    updateParams: s
                }, this[f0] = !1, this.getZr().wakeUp(); else {
                    try {
                        b0(this), T0.update.call(this, null, s);
                    } catch (t) {
                        throw this[g0] = null, this[f0] = !1, t;
                    }
                    this._ssr || this._zr.flush(), this[g0] = null, this[f0] = !1, D0.call(this, i), 
                    A0.call(this, i);
                }
            }
        }, c.prototype.setTheme = function() {}, c.prototype.getModel = function() {
            return this._model;
        }, c.prototype.getOption = function() {
            return this._model && this._model.getOption();
        }, c.prototype.getWidth = function() {
            return this._zr.getWidth();
        }, c.prototype.getHeight = function() {
            return this._zr.getHeight();
        }, c.prototype.getDevicePixelRatio = function() {
            return this._zr.painter.dpr || p.hasGlobalWindow && window.devicePixelRatio || 1;
        }, c.prototype.getRenderedCanvas = function(t) {
            return this.renderToCanvas(t);
        }, c.prototype.renderToCanvas = function(t) {
            return this._zr.painter.getRenderedCanvas({
                backgroundColor: (t = t || {}).backgroundColor || this._model.get("backgroundColor"),
                pixelRatio: t.pixelRatio || this.getDevicePixelRatio()
            });
        }, c.prototype.renderToSVGString = function(t) {
            return this._zr.painter.renderToString({
                useViewBox: (t = t || {}).useViewBox
            });
        }, c.prototype.getSvgDataURL = function() {
            var t;
            if (p.svgSupported) return E((t = this._zr).storage.getDisplayList(), (function(t) {
                t.stopAnimation(null, !0);
            })), t.painter.toDataURL();
        }, c.prototype.getDataURL = function(t) {
            var e, n, i, r;
            if (!this._disposed) return r = (t = t || {}).excludeComponents, e = this._model, 
            n = [], i = this, E(r, (function(t) {
                e.eachComponent({
                    mainType: t
                }, (function(t) {
                    t = i._componentsMap[t.__viewId];
                    t.group.ignore || (n.push(t), t.group.ignore = !0);
                }));
            })), r = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.renderToCanvas(t).toDataURL("image/" + (t && t.type || "png")), 
            E(n, (function(t) {
                t.group.ignore = !1;
            })), r;
            this.id;
        }, c.prototype.getConnectedDataURL = function(i) {
            var r, o, a, s, l, u, h, c, p, e, t, n, d, f, g;
            if (!this._disposed) return r = "svg" === i.type, o = this.group, a = Math.min, 
            s = Math.max, om[o] ? (u = l = 1 / 0, c = h = -1 / 0, p = [], e = i && i.pixelRatio || this.getDevicePixelRatio(), 
            E(rm, (function(t, e) {
                var n;
                t.group === o && (n = r ? t.getZr().painter.getSvgDom().innerHTML : t.renderToCanvas(_(i)), 
                t = t.getDom().getBoundingClientRect(), l = a(t.left, l), u = a(t.top, u), h = s(t.right, h), 
                c = s(t.bottom, c), p.push({
                    dom: n,
                    left: t.left,
                    top: t.top
                }));
            })), t = (h *= e) - (l *= e), n = (c *= e) - (u *= e), d = q.createCanvas(), (f = ho(d, {
                renderer: r ? "svg" : "canvas"
            })).resize({
                width: t,
                height: n
            }), r ? (g = "", E(p, (function(t) {
                var e = t.left - l, n = t.top - u;
                g += '<g transform="translate(' + e + "," + n + ')">' + t.dom + "</g>";
            })), f.painter.getSvgRoot().innerHTML = g, i.connectedBackgroundColor && f.painter.setBackgroundColor(i.connectedBackgroundColor), 
            f.refreshImmediately(), f.painter.toDataURL()) : (i.connectedBackgroundColor && f.add(new qs({
                shape: {
                    x: 0,
                    y: 0,
                    width: t,
                    height: n
                },
                style: {
                    fill: i.connectedBackgroundColor
                }
            })), E(p, (function(t) {
                t = new Fs({
                    style: {
                        x: t.left * e - l,
                        y: t.top * e - u,
                        image: t.dom
                    }
                });
                f.add(t);
            })), f.refreshImmediately(), d.toDataURL("image/" + (i && i.type || "png")))) : this.getDataURL(i);
            this.id;
        }, c.prototype.convertToPixel = function(t, e) {
            return C0(this, "convertToPixel", t, e);
        }, c.prototype.convertFromPixel = function(t, e) {
            return C0(this, "convertFromPixel", t, e);
        }, c.prototype.containPixel = function(t, i) {
            var r;
            if (!this._disposed) return E($o(this._model, t), (function(t, n) {
                0 <= n.indexOf("Models") && E(t, (function(t) {
                    var e = t.coordinateSystem;
                    e && e.containPoint ? r = r || !!e.containPoint(i) : "seriesModels" === n && (e = this._chartsMap[t.__viewId]) && e.containPoint && (r = r || e.containPoint(i, t));
                }), this);
            }), this), !!r;
            this.id;
        }, c.prototype.getVisual = function(t, e) {
            t = $o(this._model, t, {
                defaultMainType: "series"
            });
            var n = t.seriesModel.getData();
            t = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;
            if (null != t) {
                var i = n, r = t, o = e;
                switch (o) {
                  case "color":
                    return i.getItemVisual(r, "style")[i.getVisual("drawType")];

                  case "opacity":
                    return i.getItemVisual(r, "style").opacity;

                  case "symbol":
                  case "symbolSize":
                  case "liftZ":
                    return i.getItemVisual(r, o);
                }
            } else {
                var a = n, s = e;
                switch (s) {
                  case "color":
                    return a.getVisual("style")[a.getVisual("drawType")];

                  case "opacity":
                    return a.getVisual("style").opacity;

                  case "symbol":
                  case "symbolSize":
                  case "liftZ":
                    return a.getVisual(s);
                }
            }
        }, c.prototype.getViewOfComponentModel = function(t) {
            return this._componentsMap[t.__viewId];
        }, c.prototype.getViewOfSeriesModel = function(t) {
            return this._chartsMap[t.__viewId];
        }, c.prototype._initEvents = function() {
            var t, n, i, s = this;
            E(K0, (function(a) {
                function t(t) {
                    var n, e, i, r = s.getModel(), o = t.target;
                    "globalout" === a ? n = {} : o && wy(o, (function(t) {
                        var e;
                        t = pl(t);
                        return t && null != t.dataIndex ? (e = t.dataModel || r.getSeriesByIndex(t.seriesIndex), 
                        n = e && e.getDataParams(t.dataIndex, t.dataType, o) || {}, 1) : t.eventData && (n = O({}, t.eventData), 
                        1);
                    }), !0), n && (e = n.componentType, i = n.componentIndex, "markLine" !== e && "markPoint" !== e && "markArea" !== e || (e = "series", 
                    i = n.seriesIndex), i = (e = e && null != i && r.getComponent(e, i)) && s["series" === e.mainType ? "_chartsMap" : "_componentsMap"][e.__viewId], 
                    n.event = t, n.type = a, s._$eventProcessor.eventInfo = {
                        targetEl: o,
                        packedEvent: n,
                        model: e,
                        view: i
                    }, s.trigger(a, n));
                }
                t.zrEventfulCallAtLast = !0, s._zr.on(a, t, s);
            })), E(Q0, (function(t, e) {
                s._messageCenter.on(e, (function(t) {
                    this.trigger(e, t);
                }), s);
            })), E([ "selectchanged" ], (function(e) {
                s._messageCenter.on(e, (function(t) {
                    this.trigger(e, t);
                }), s);
            })), t = this._messageCenter, i = (n = this)._api, t.on("selectchanged", (function(t) {
                var e = i.getModel();
                t.isFromClick ? (xy("map", "selectchanged", n, e, t), xy("pie", "selectchanged", n, e, t)) : "select" === t.fromAction ? (xy("map", "selected", n, e, t), 
                xy("pie", "selected", n, e, t)) : "unselect" === t.fromAction && (xy("map", "unselected", n, e, t), 
                xy("pie", "unselected", n, e, t));
            }));
        }, c.prototype.isDisposed = function() {
            return this._disposed;
        }, c.prototype.clear = function() {
            this._disposed ? this.id : this.setOption({
                series: []
            }, !0);
        }, c.prototype.dispose = function() {
            var t, e, n;
            this._disposed ? this.id : (this._disposed = !0, this.getDom() && ea(this.getDom(), lm, ""), 
            e = (t = this)._api, n = t._model, E(t._componentsViews, (function(t) {
                t.dispose(n, e);
            })), E(t._chartsViews, (function(t) {
                t.dispose(n, e);
            })), t._zr.dispose(), t._dom = t._model = t._chartsMap = t._componentsMap = t._chartsViews = t._componentsViews = t._scheduler = t._api = t._zr = t._throttledZrFlush = t._theme = t._coordSysMgr = t._messageCenter = null, 
            delete rm[t.id]);
        }, c.prototype.resize = function(t) {
            if (!this[f0]) if (this._disposed) this.id; else {
                this._zr.resize(t);
                var e = this._model;
                if (this._loadingFX && this._loadingFX.resize(), e) {
                    e = e.resetOption("media");
                    var n = t && t.silent;
                    this[g0] && (null == n && (n = this[g0].silent), e = !0, this[g0] = null), this[f0] = !0;
                    try {
                        e && b0(this), T0.update.call(this, {
                            type: "resize",
                            animation: O({
                                duration: 0
                            }, t && t.animation)
                        });
                    } catch (t) {
                        throw this[f0] = !1, t;
                    }
                    this[f0] = !1, D0.call(this, n), A0.call(this, n);
                }
            }
        }, c.prototype.showLoading = function(t, e) {
            this._disposed ? this.id : (P(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), 
            im[t] && (t = im[t](this._api, e), e = this._zr, this._loadingFX = t, e.add(t)));
        }, c.prototype.hideLoading = function() {
            this._disposed ? this.id : (this._loadingFX && this._zr.remove(this._loadingFX), 
            this._loadingFX = null);
        }, c.prototype.makeActionFromEvent = function(t) {
            var e = O({}, t);
            return e.type = Q0[t.type], e;
        }, c.prototype.dispatchAction = function(t, e) {
            var n;
            this._disposed ? this.id : (P(e) || (e = {
                silent: !!e
            }), $0[t.type] && this._model && (this[f0] ? this._pendingActions.push(t) : (n = e.silent, 
            k0.call(this, t, n), (t = e.flush) ? this._zr.flush() : !1 !== t && p.browser.weChat && this._throttledZrFlush(), 
            D0.call(this, n), A0.call(this, n))));
        }, c.prototype.updateLabelLayout = function() {
            p0.trigger("series:layoutlabels", this._model, this._api, {
                updatedSeries: []
            });
        }, c.prototype.appendData = function(t) {
            var e;
            this._disposed ? this.id : (e = t.seriesIndex, this.getModel().getSeriesByIndex(e).appendData(t), 
            this._scheduler.unfinished = !0, this.getZr().wakeUp());
        }, c.internalField = (b0 = function(t) {
            var e = t._scheduler;
            e.restorePipelines(t._model), e.prepareStageTasks(), S0(t, !0), S0(t, !1), e.plan();
        }, S0 = function(t, r) {
            for (var o = t._model, a = t._scheduler, s = r ? t._componentsViews : t._chartsViews, l = r ? t._componentsMap : t._chartsMap, u = t._zr, h = t._api, e = 0; e < s.length; e++) s[e].__alive = !1;
            function n(t) {
                var e, n = t.__requireNewView, i = (t.__requireNewView = !1, "_ec_" + t.id + "_" + t.type);
                n = !n && l[i];
                n || (e = aa(t.type), (n = new (r ? Pg.getClass(e.main, e.sub) : zg.getClass(e.sub))).init(o, h), 
                l[i] = n, s.push(n), u.add(n.group)), t.__viewId = n.__id = i, n.__alive = !0, n.__model = t, 
                n.group.__ecComponentInfo = {
                    mainType: t.mainType,
                    index: t.componentIndex
                }, r || a.prepareView(n, t, o, h);
            }
            for (r ? o.eachComponent((function(t, e) {
                "series" !== t && n(e);
            })) : o.eachSeries(n), e = 0; e < s.length; ) {
                var i = s[e];
                i.__alive ? e++ : (r || i.renderTask.dispose(), u.remove(i.group), i.dispose(o, h), 
                s.splice(e, 1), l[i.__id] === i && delete l[i.__id], i.__id = i.group.__ecComponentInfo = null);
            }
        }, M0 = function(p, e, d, n, t) {
            var i, f, r = p._model;
            function o(t) {
                t && t.__alive && t[e] && t[e](t.__model, r, p._api, d);
            }
            r.setUpdatePayload(d), n ? ((i = {})[n + "Id"] = d[n + "Id"], i[n + "Index"] = d[n + "Index"], 
            i[n + "Name"] = d[n + "Name"], i = {
                mainType: n,
                query: i
            }, t && (i.subType = t), null != (t = d.excludeSeriesId) && (f = z(), E(zo(t), (function(t) {
                t = Uo(t, null);
                null != t && f.set(t, !0);
            }))), r && r.eachComponent(i, (function(t) {
                if (!f || null == f.get(t.id)) if (lu(d)) if (t instanceof Mg) {
                    if (d.type === bl && !d.notBlur && !t.get([ "emphasis", "disabled" ])) {
                        var e = t, n = d, i = p._api, r = e.seriesIndex, o = e.getData(n.dataType);
                        if (o) {
                            n = (V(n = jo(o, n)) ? n[0] : n) || 0;
                            var a = o.getItemGraphicEl(n);
                            if (!a) for (var s = o.count(), l = 0; !a && l < s; ) a = o.getItemGraphicEl(l++);
                            a ? Kl(r, (n = pl(a)).focus, n.blurScope, i) : (n = e.get([ "emphasis", "focus" ]), 
                            e = e.get([ "emphasis", "blurScope" ]), null != n && Kl(r, n, e, i));
                        }
                    }
                } else n = (r = Ql(t.mainType, t.componentIndex, d.name, p._api)).focusSelf, e = r.dispatchers, 
                d.type === bl && n && !d.notBlur && $l(t.mainType, t.componentIndex, p._api), e && E(e, (function(t) {
                    (d.type === bl ? Gl : Ul)(t);
                })); else su(d) && t instanceof Mg && (i = t, u = d, p._api, su(u) && (h = u.dataType, 
                V(c = jo(i.getData(h), u)) || (c = [ c ]), i[u.type === Cl ? "toggleSelect" : u.type === Ml ? "select" : "unselect"](c, h)), 
                Jl(t), B0(p));
                var u, h, c;
            }), p), r && r.eachComponent(i, (function(t) {
                f && null != f.get(t.id) || o(p["series" === n ? "_chartsMap" : "_componentsMap"][t.__viewId]);
            }), p)) : E([].concat(p._componentsViews).concat(p._chartsViews), o);
        }, T0 = {
            prepareAndUpdate: function(t) {
                b0(this), T0.update.call(this, t, {
                    optionChanged: null != t.newOption
                });
            },
            update: function(t, e) {
                var n = this._model, i = this._api, r = this._zr, o = this._coordSysMgr, a = this._scheduler;
                n && (n.setUpdatePayload(t), a.restoreData(n, t), a.performSeriesTasks(n), o.create(n, i), 
                a.performDataProcessorTasks(n, t), I0(this, n), o.update(n, i), X0(n), a.performVisualTasks(n, t), 
                O0(this, n, i, t, e), o = n.get("backgroundColor") || "transparent", a = n.get("darkMode"), 
                r.setBackgroundColor(o), null != a && "auto" !== a && r.setDarkMode(a), p0.trigger("afterupdate", n, i));
            },
            updateTransform: function(n) {
                var i, r, o = this, a = this._model, s = this._api;
                a && (a.setUpdatePayload(n), i = [], a.eachComponent((function(t, e) {
                    "series" !== t && (t = o.getViewOfComponentModel(e)) && t.__alive && (!t.updateTransform || (e = t.updateTransform(e, a, s, n)) && e.update) && i.push(t);
                })), r = z(), a.eachSeries((function(t) {
                    var e = o._chartsMap[t.__viewId];
                    (!e.updateTransform || (e = e.updateTransform(t, a, s, n)) && e.update) && r.set(t.uid, 1);
                })), X0(a), this._scheduler.performVisualTasks(a, n, {
                    setDirty: !0,
                    dirtyMap: r
                }), N0(this, a, s, n, {}, r), p0.trigger("afterupdate", a, s));
            },
            updateView: function(t) {
                var e = this._model;
                e && (e.setUpdatePayload(t), zg.markUpdateMethod(t, "updateView"), X0(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0
                }), O0(this, e, this._api, t, {}), p0.trigger("afterupdate", e, this._api));
            },
            updateVisual: function(n) {
                var i = this, r = this._model;
                r && (r.setUpdatePayload(n), r.eachSeries((function(t) {
                    t.getData().clearAllVisual();
                })), zg.markUpdateMethod(n, "updateVisual"), X0(r), this._scheduler.performVisualTasks(r, n, {
                    visualType: "visual",
                    setDirty: !0
                }), r.eachComponent((function(t, e) {
                    "series" !== t && (t = i.getViewOfComponentModel(e)) && t.__alive && t.updateVisual(e, r, i._api, n);
                })), r.eachSeries((function(t) {
                    i._chartsMap[t.__viewId].updateVisual(t, r, i._api, n);
                })), p0.trigger("afterupdate", r, this._api));
            },
            updateLayout: function(t) {
                T0.update.call(this, t);
            }
        }, C0 = function(t, e, n, i) {
            if (t._disposed) t.id; else for (var r = t._model, o = t._coordSysMgr.getCoordinateSystems(), a = $o(r, n), s = 0; s < o.length; s++) {
                var l = o[s];
                if (l[e] && null != (l = l[e](r, a, i))) return l;
            }
        }, I0 = function(t, e) {
            var n = t._chartsMap, i = t._scheduler;
            e.eachSeries((function(t) {
                i.updateStreamModes(t, n[t.__viewId]);
            }));
        }, k0 = function(i, t) {
            var r = this, e = this.getModel(), n = i.type, o = i.escapeConnect, a = $0[n], s = a.actionInfo, l = (s.update || "update").split(":"), u = l.pop(), h = null != l[0] && aa(l[0]), c = (l = (this[f0] = !0, 
            [ i ]), !1);
            i.batch && (c = !0, l = F(i.batch, (function(t) {
                return (t = B(O({}, t), i)).batch = null, t;
            })));
            var p = [], d = su(i), f = lu(i);
            if (f && Zl(this._api), E(l, (function(t) {
                var e, n;
                (y = (y = a.action(t, r._model, r._api)) || O({}, t)).type = s.event || y.type, 
                p.push(y), f ? (e = (n = Qo(i)).queryOptionMap, n = n.mainTypeSpecified ? e.keys()[0] : "series", 
                M0(r, u, t, n), B0(r)) : d ? (M0(r, u, t, "series"), B0(r)) : h && M0(r, u, t, h.main, h.sub);
            })), "none" !== u && !f && !d && !h) try {
                this[g0] ? (b0(this), T0.update.call(this, i), this[g0] = null) : T0[u].call(this, i);
            } catch (i) {
                throw this[f0] = !1, i;
            }
            var g, y = c ? {
                type: s.event || n,
                escapeConnect: o,
                batch: p
            } : p[0];
            this[f0] = !1, t || ((l = this._messageCenter).trigger(y.type, y), d && (c = {
                type: "selectchanged",
                escapeConnect: o,
                selected: (g = [], e.eachSeries((function(n) {
                    E(n.getAllData(), (function(t) {
                        t.data;
                        t = t.type;
                        var e = n.getSelectedDataIndices();
                        0 < e.length && (e = {
                            dataIndex: e,
                            seriesIndex: n.seriesIndex
                        }, null != t && (e.dataType = t), g.push(e));
                    }));
                })), g),
                isFromClick: i.isFromClick || !1,
                fromAction: i.type,
                fromActionPayload: i
            }, l.trigger(c.type, c)));
        }, D0 = function(t) {
            for (var e = this._pendingActions; e.length; ) {
                var n = e.shift();
                k0.call(this, n, t);
            }
        }, A0 = function(t) {
            t || this.trigger("updated");
        }, L0 = function(e, n) {
            e.on("rendered", (function(t) {
                n.trigger("rendered", t), !e.animation.isFinished() || n[g0] || n._scheduler.unfinished || n._pendingActions.length || n.trigger("finished");
            }));
        }, P0 = function(t, a) {
            t.on("mouseover", (function(t) {
                var e, n, i, r, o = wy(t.target, au);
                o && (o, e = t, t = a._api, n = pl(o), i = (r = Ql(n.componentMainType, n.componentIndex, n.componentHighDownName, t)).dispatchers, 
                r = r.focusSelf, i ? (r && $l(n.componentMainType, n.componentIndex, t), E(i, (function(t) {
                    return Hl(t, e);
                }))) : (Kl(n.seriesIndex, n.focus, n.blurScope, t), "self" === n.focus && $l(n.componentMainType, n.componentIndex, t), 
                Hl(o, e)), B0(a));
            })).on("mouseout", (function(t) {
                var e, n, i = wy(t.target, au);
                i && (i, e = t, Zl(t = a._api), (n = Ql((n = pl(i)).componentMainType, n.componentIndex, n.componentHighDownName, t).dispatchers) ? E(n, (function(t) {
                    return Wl(t, e);
                })) : Wl(i, e), B0(a));
            })).on("click", (function(t) {
                var e;
                t = wy(t.target, (function(t) {
                    return null != pl(t).dataIndex;
                }), !0);
                t && (e = t.selected ? "unselect" : "select", t = pl(t), a._api.dispatchAction({
                    type: e,
                    dataType: t.dataType,
                    dataIndexInside: t.dataIndex,
                    seriesIndex: t.seriesIndex,
                    isFromClick: !0
                }));
            }));
        }, O0 = function(t, e, n, i, r) {
            var o, a, s, l, u, h, c;
            u = [], c = !(h = []), (o = e).eachComponent((function(t, e) {
                var n = e.get("zlevel") || 0, i = e.get("z") || 0, r = e.getZLevelKey();
                c = c || !!r, ("series" === t ? h : u).push({
                    zlevel: n,
                    z: i,
                    idx: e.componentIndex,
                    type: t,
                    key: r
                });
            })), c && (yn(l = u.concat(h), (function(t, e) {
                return t.zlevel === e.zlevel ? t.z - e.z : t.zlevel - e.zlevel;
            })), E(l, (function(t) {
                var e = o.getComponent(t.type, t.idx), n = t.zlevel;
                t = t.key;
                null != a && (n = Math.max(a, n)), t ? (n === a && t !== s && n++, s = t) : s && (n === a && n++, 
                s = ""), a = n, e.setZLevel(n);
            }))), R0(t, e, n, i, r), E(t._chartsViews, (function(t) {
                t.__alive = !1;
            })), N0(t, e, n, i, r), E(t._chartsViews, (function(t) {
                t.__alive || t.remove(e, n);
            }));
        }, R0 = function(t, n, i, r, e, o) {
            E(o || t._componentsViews, (function(t) {
                var e = t.__model;
                j0(0, t), t.render(e, n, i, r), q0(e, t), Z0(e, t);
            }));
        }, N0 = function(r, t, e, o, n, a) {
            var i, s, l, u, h = r._scheduler, c = (n = O(n || {}, {
                updatedSeries: t.getSeries()
            }), p0.trigger("series:beforeupdate", t, e, n), !1);
            t.eachSeries((function(t) {
                var e, n = r._chartsMap[t.__viewId], i = (n.__alive = !0, n.renderTask);
                h.updatePayload(i, o), j0(0, n), a && a.get(t.uid) && i.dirty(), i.perform(h.getPerformArgs(i)) && (c = !0), 
                n.group.silent = !!t.get("silent"), i = n, e = t.get("blendMode") || null, i.eachRendered((function(t) {
                    t.isGroup || (t.style.blend = e);
                })), Jl(t);
            })), h.unfinished = c || h.unfinished, p0.trigger("series:layoutlabels", t, e, n), 
            p0.trigger("series:transition", t, e, n), t.eachSeries((function(t) {
                var e = r._chartsMap[t.__viewId];
                q0(t, e), Z0(t, e);
            })), s = t, l = (i = r)._zr.storage, u = 0, l.traverse((function(t) {
                t.isGroup || u++;
            })), u > s.get("hoverLayerThreshold") && !p.node && !p.worker && s.eachSeries((function(t) {
                t.preventUsingHoverLayer || (t = i._chartsMap[t.__viewId]).__alive && t.eachRendered((function(t) {
                    t.states.emphasis && (t.states.emphasis.hoverLayer = !0);
                }));
            })), p0.trigger("series:afterupdate", t, e, n);
        }, B0 = function(t) {
            t[y0] = !0, t.getZr().wakeUp();
        }, F0 = function(t) {
            t[y0] && (t.getZr().storage.traverse((function(t) {
                Kh(t) || Y0(t);
            })), t[y0] = !1);
        }, E0 = function(n) {
            return u(t, e = Sd), t.prototype.getCoordinateSystems = function() {
                return n._coordSysMgr.getCoordinateSystems();
            }, t.prototype.getComponentByElement = function(t) {
                for (;t; ) {
                    var e = t.__ecComponentInfo;
                    if (null != e) return n._model.getComponent(e.mainType, e.index);
                    t = t.parent;
                }
            }, t.prototype.enterEmphasis = function(t, e) {
                Gl(t, e), B0(n);
            }, t.prototype.leaveEmphasis = function(t, e) {
                Ul(t, e), B0(n);
            }, t.prototype.enterBlur = function(t) {
                El(t, Ll), B0(n);
            }, t.prototype.leaveBlur = function(t) {
                Xl(t), B0(n);
            }, t.prototype.enterSelect = function(t) {
                Yl(t), B0(n);
            }, t.prototype.leaveSelect = function(t) {
                ql(t), B0(n);
            }, t.prototype.getModel = function() {
                return n.getModel();
            }, t.prototype.getViewOfComponentModel = function(t) {
                return n.getViewOfComponentModel(t);
            }, t.prototype.getViewOfSeriesModel = function(t) {
                return n.getViewOfSeriesModel(t);
            }, new t(n);
            function t() {
                return null !== e && e.apply(this, arguments) || this;
            }
            var e;
        }, void (z0 = function(i) {
            function r(t, e) {
                for (var n = 0; n < t.length; n++) t[n][v0] = e;
            }
            E(Q0, (function(t, e) {
                i._messageCenter.on(e, (function(t) {
                    var e, n;
                    !om[i.group] || 0 === i[v0] || t && t.escapeConnect || (e = i.makeActionFromEvent(t), 
                    n = [], E(rm, (function(t) {
                        t !== i && t.group === i.group && n.push(t);
                    })), r(n, 0), E(n, (function(t) {
                        1 !== t[v0] && t.dispatchAction(e);
                    })), r(n, 2));
                }));
            }));
        }));
        var G0, U0 = c;
        Dy = U0.prototype;
        function c(t, e, n) {
            var i = G0.call(this, new gy) || this;
            t = (i._chartsViews = [], i._chartsMap = {}, i._componentsViews = [], i._componentsMap = {}, 
            i._pendingActions = [], n = n || {}, H(e) && (e = nm[e]), i._dom = t, n.ssr && fo((function(t) {
                t = pl(t);
                var e, n = t.dataIndex;
                if (null != n) return (e = z()).set("series_index", t.seriesIndex), e.set("data_index", n), 
                t.ssrType && e.set("ssr_type", t.ssrType), e;
            })), i._zr = ho(t, {
                renderer: n.renderer || "canvas",
                devicePixelRatio: n.devicePixelRatio,
                width: n.width,
                height: n.height,
                ssr: n.ssr,
                useDirtyRect: N(n.useDirtyRect, !1),
                useCoarsePointer: N(n.useCoarsePointer, "auto"),
                pointerSize: n.pointerSize
            })), n = (i._ssr = n.ssr, i._throttledZrFlush = Ug(pt(t.flush, t), 17), (e = _(e)) && Zd(e, !0), 
            i._theme = e, i._locale = H(e = n.locale || Kc) ? (n = jc[e.toUpperCase()] || {}, 
            e === Xc || e === Yc ? _(n) : d(_(n), _(jc[qc]), !1)) : d(_(e), _(jc[qc]), !1), 
            i._coordSysMgr = new Cd, i._api = E0(i));
            function r(t, e) {
                return t.__prio - e.__prio;
            }
            return yn(em, r), yn(J0, r), i._scheduler = new Qg(i, n, J0, em), i._messageCenter = new H0, 
            i._initEvents(), i.resize = pt(i.resize, i), t.animation.on("frame", i._onframe, i), 
            L0(t, i), P0(t, i), Dt(i), i;
        }
        function X0(t) {
            t.clearColorPalette(), t.eachSeries((function(t) {
                t.clearColorPalette();
            }));
        }
        function Y0(t) {
            for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
                var r = n[i];
                "emphasis" !== r && "blur" !== r && "select" !== r && e.push(r);
            }
            t.selected && t.states.select && e.push("select"), t.hoverState === _l && t.states.emphasis ? e.push("emphasis") : t.hoverState === vl && t.states.blur && e.push("blur"), 
            t.useStates(e);
        }
        function q0(t, e) {
            var n, i;
            t.preventAutoZ || (n = t.get("z") || 0, i = t.get("zlevel") || 0, e.eachRendered((function(t) {
                return function t(e, n, i, r) {
                    var o = e.getTextContent(), a = e.getTextGuideLine();
                    if (e.isGroup) for (var s = e.childrenRef(), l = 0; l < s.length; l++) r = Math.max(t(s[l], n, i, r), r); else e.z = n, 
                    e.zlevel = i, r = Math.max(e.z2, r);
                    o && (o.z = n, o.zlevel = i, isFinite(r)) && (o.z2 = r + 2), a && (o = e.textGuideLineConfig, 
                    a.z = n, a.zlevel = i, isFinite(r)) && (a.z2 = r + (o && o.showAbove ? 1 : -1));
                    return r;
                }(t, n, i, -1 / 0), !0;
            })));
        }
        function j0(t, e) {
            e.eachRendered((function(t) {
                var e, n;
                Kh(t) || (e = t.getTextContent(), n = t.getTextGuideLine(), t.stateTransition && (t.stateTransition = null), 
                e && e.stateTransition && (e.stateTransition = null), n && n.stateTransition && (n.stateTransition = null), 
                t.hasState() ? (t.prevStates = t.currentStates, t.clearStates()) : t.prevStates && (t.prevStates = null));
            }));
        }
        function Z0(t, e) {
            var n = t.getModel("stateAnimation"), r = t.isAnimationEnabled(), o = (t = n.get("duration"), 
            0 < t ? {
                duration: t,
                delay: n.get("delay"),
                easing: n.get("easing")
            } : null);
            e.eachRendered((function(t) {
                var e, n, i;
                t.states && t.states.emphasis && (Kh(t) || (t instanceof Z && ((i = gl(n = t)).normalFill = n.style.fill, 
                i.normalStroke = n.style.stroke, n = n.states.select || {}, i.selectFill = n.style && n.style.fill || null, 
                i.selectStroke = n.style && n.style.stroke || null), t.__dirty && (i = t.prevStates) && t.useStates(i), 
                r && (t.stateTransition = o, n = t.getTextContent(), e = t.getTextGuideLine(), n && (n.stateTransition = o), 
                e) && (e.stateTransition = o), t.__dirty && Y0(t)));
            }));
        }
        Dy.on = _0("on"), Dy.off = _0("off"), Dy.one = function(i, r, t) {
            var o = this;
            this.on.call(this, i, (function t() {
                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                r && r.apply && r.apply(this, e), o.off(i, t);
            }), t);
        };
        var K0 = [ "click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu" ];
        var $0 = {}, Q0 = {}, J0 = [], tm = [], em = [], nm = {}, im = {}, rm = {}, om = {}, am = +new Date, sm = +new Date, lm = "_echarts_instance_";
        function um(t) {
            om[t] = !1;
        }
        Cy = um;
        function hm(t) {
            return rm[(e = lm, t.getAttribute ? t.getAttribute(e) : t[e])];
            var e;
        }
        function cm(t, e) {
            nm[t] = e;
        }
        function pm(t) {
            I(tm, t) < 0 && tm.push(t);
        }
        function dm(t, e) {
            bm(J0, t, e, 2e3);
        }
        function fm(t) {
            ym("afterinit", t);
        }
        function gm(t) {
            ym("afterupdate", t);
        }
        function ym(t, e) {
            p0.on(t, e);
        }
        function mm(t, e, n) {
            k(e) && (n = e, e = "");
            var i = P(t) ? t.type : [ t, t = {
                event: e
            } ][0];
            t.event = (t.event || i).toLowerCase(), e = t.event, Q0[e] || (Ct(m0.test(i) && m0.test(e)), 
            $0[i] || ($0[i] = {
                action: n,
                actionInfo: t
            }), Q0[e] = i);
        }
        function vm(t, e) {
            Cd.register(t, e);
        }
        function _m(t, e) {
            bm(em, t, e, 1e3, "layout");
        }
        function xm(t, e) {
            bm(em, t, e, 3e3, "visual");
        }
        var wm = [];
        function bm(t, e, n, i, r) {
            (k(e) || P(e)) && (n = e, e = i), 0 <= I(wm, n) || (wm.push(n), (i = Qg.wrapStageHandler(n, r)).__prio = e, 
            i.__raw = n, t.push(i));
        }
        function Sm(t, e) {
            im[t] = e;
        }
        function Mm(t, e, n) {
            var i = d0.registerMap;
            i && i(t, e, n);
        }
        function Tm(t) {
            var e = (t = _(t)).type, n = (e || f(""), e.split(":")), i = (2 !== n.length && f(""), 
            !1);
            "echarts" === n[0] && (e = n[1], i = !0), t.__isBuiltIn = i, eg.set(e, t);
        }
        xm(2e3, ga), xm(4500, Ac), xm(4500, ip), xm(2e3, Ec), xm(4500, Pc), xm(7e3, (function(e, i) {
            e.eachRawSeries((function(t) {
                var n;
                !e.isSeriesFiltered(t) && ((n = t.getData()).hasItemVisual() && n.each((function(t) {
                    var e = n.getItemVisual(t, "decal");
                    e && (n.ensureUniqueItemVisual(t, "style").decal = h0(e, i));
                })), t = n.getVisual("decal")) && (n.getVisual("style").decal = h0(t, i));
            }));
        })), pm(Zd), dm(900, (function(t) {
            var i = z();
            t.eachSeries((function(t) {
                var e, n = t.get("stack");
                n && (n = i.get(n) || i.set(n, []), (t = {
                    stackResultDimension: (e = t.getData()).getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: e.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: e.getCalculationInfo("stackedDimension"),
                    stackedByDimension: e.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: e.getCalculationInfo("isStackedByIndex"),
                    data: e,
                    seriesModel: t
                }).stackedDimension) && (t.isStackedByIndex || t.stackedByDimension) && (n.length && e.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), 
                n.push(t));
            })), i.each(Kd);
        })), Sm("default", (function(i, r) {
            B(r = r || {}, {
                text: "loading",
                textColor: "#000",
                fontSize: 12,
                fontWeight: "normal",
                fontStyle: "normal",
                fontFamily: "sans-serif",
                maskColor: "rgba(255, 255, 255, 0.8)",
                showSpinner: !0,
                color: "#5470c6",
                spinnerRadius: 10,
                lineWidth: 5,
                zlevel: 0
            });
            var t = new io, o = new qs({
                style: {
                    fill: r.maskColor
                },
                zlevel: r.zlevel,
                z: 1e4
            });
            t.add(o);
            var a, s = new Qs({
                style: {
                    text: r.text,
                    fill: r.textColor,
                    fontSize: r.fontSize,
                    fontWeight: r.fontWeight,
                    fontStyle: r.fontStyle,
                    fontFamily: r.fontFamily
                },
                zlevel: r.zlevel,
                z: 10001
            }), l = new qs({
                style: {
                    fill: "none"
                },
                textContent: s,
                textConfig: {
                    position: "right",
                    distance: 10
                },
                zlevel: r.zlevel,
                z: 10001
            });
            return t.add(l), r.showSpinner && ((a = new Th({
                shape: {
                    startAngle: -$g / 2,
                    endAngle: -$g / 2 + .1,
                    r: r.spinnerRadius
                },
                style: {
                    stroke: r.color,
                    lineCap: "round",
                    lineWidth: r.lineWidth
                },
                zlevel: r.zlevel,
                z: 10001
            })).animateShape(!0).when(1e3, {
                endAngle: 3 * $g / 2
            }).start("circularInOut"), a.animateShape(!0).when(1e3, {
                startAngle: 3 * $g / 2
            }).delay(300).start("circularInOut"), t.add(a)), t.resize = function() {
                var t = s.getBoundingRect().width, e = r.showSpinner ? r.spinnerRadius : 0, n = (t = (i.getWidth() - 2 * e - (r.showSpinner && t ? 10 : 0) - t) / 2 - (r.showSpinner && t ? 0 : 5 + t / 2) + (r.showSpinner ? 0 : t / 2) + (t ? 0 : e), 
                i.getHeight() / 2);
                r.showSpinner && a.setShape({
                    cx: t,
                    cy: n
                }), l.setShape({
                    x: t - e,
                    y: n - e,
                    width: 2 * e,
                    height: 2 * e
                }), o.setShape({
                    x: 0,
                    y: 0,
                    width: i.getWidth(),
                    height: i.getHeight()
                });
            }, t.resize(), t;
        })), mm({
            type: bl,
            event: bl,
            update: bl
        }, Vt), mm({
            type: Sl,
            event: Sl,
            update: Sl
        }, Vt), mm({
            type: Ml,
            event: Ml,
            update: Ml
        }, Vt), mm({
            type: Tl,
            event: Tl,
            update: Tl
        }, Vt), mm({
            type: Cl,
            event: Cl,
            update: Cl
        }, Vt), cm("light", Bc), cm("dark", Rc);
        function Cm(t) {
            return null == t ? 0 : t.length || 1;
        }
        function Im(t) {
            return t;
        }
        Dm.prototype.add = function(t) {
            return this._add = t, this;
        }, Dm.prototype.update = function(t) {
            return this._update = t, this;
        }, Dm.prototype.updateManyToOne = function(t) {
            return this._updateManyToOne = t, this;
        }, Dm.prototype.updateOneToMany = function(t) {
            return this._updateOneToMany = t, this;
        }, Dm.prototype.updateManyToMany = function(t) {
            return this._updateManyToMany = t, this;
        }, Dm.prototype.remove = function(t) {
            return this._remove = t, this;
        }, Dm.prototype.execute = function() {
            this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
        }, Dm.prototype._executeOneToOne = function() {
            var t = this._old, e = this._new, n = {}, i = new Array(t.length), r = new Array(e.length);
            this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, r, "_newKeyGetter");
            for (var o = 0; o < t.length; o++) {
                var a, s = i[o], l = n[s], u = Cm(l);
                1 < u ? (a = l.shift(), 1 === l.length && (n[s] = l[0]), this._update && this._update(a, o)) : 1 === u ? (n[s] = null, 
                this._update && this._update(l, o)) : this._remove && this._remove(o);
            }
            this._performRestAdd(r, n);
        }, Dm.prototype._executeMultiple = function() {
            var t = this._old, e = this._new, n = {}, i = {}, r = [], o = [];
            this._initIndexMap(t, n, r, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
            for (var a = 0; a < r.length; a++) {
                var s = r[a], l = n[s], u = i[s], h = Cm(l), c = Cm(u);
                if (1 < h && 1 === c) this._updateManyToOne && this._updateManyToOne(u, l), i[s] = null; else if (1 === h && 1 < c) this._updateOneToMany && this._updateOneToMany(u, l), 
                i[s] = null; else if (1 === h && 1 === c) this._update && this._update(u, l), i[s] = null; else if (1 < h && 1 < c) this._updateManyToMany && this._updateManyToMany(u, l), 
                i[s] = null; else if (1 < h) for (var p = 0; p < h; p++) this._remove && this._remove(l[p]); else this._remove && this._remove(l);
            }
            this._performRestAdd(o, i);
        }, Dm.prototype._performRestAdd = function(t, e) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n], r = e[i], o = Cm(r);
                if (1 < o) for (var a = 0; a < o; a++) this._add && this._add(r[a]); else 1 === o && this._add && this._add(r);
                e[i] = null;
            }
        }, Dm.prototype._initIndexMap = function(t, e, n, i) {
            for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
                var a, s, l = "_ec_" + this[i](t[o], o);
                r || (n[o] = l), e && (0 === (s = Cm(a = e[l])) ? (e[l] = o, r && n.push(l)) : 1 === s ? e[l] = [ a, o ] : a.push(o));
            }
        };
        var km = Dm;
        function Dm(t, e, n, i, r, o) {
            this._old = t, this._new = e, this._oldKeyGetter = n || Im, this._newKeyGetter = i || Im, 
            this.context = r, this._diffModeMultiple = "multiple" === o;
        }
        Lm.prototype.get = function() {
            return {
                fullDimensions: this._getFullDimensionNames(),
                encode: this._encode
            };
        }, Lm.prototype._getFullDimensionNames = function() {
            return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), 
            this._cachedDimNames;
        };
        var Am = Lm;
        function Lm(t, e) {
            this._encode = t, this._schema = e;
        }
        function Pm(o, t) {
            var e = {}, a = e.encode = {}, s = z(), l = [], u = [], h = {}, i = (E(o.dimensions, (function(t) {
                var e, n, i = o.getDimensionInfo(t), r = i.coordDim;
                r && (e = i.coordDimIndex, Om(a, r)[e] = t, i.isExtraCoord || (s.set(r, 1), "ordinal" !== (n = i.type) && "time" !== n && (l[0] = t), 
                Om(h, r)[e] = o.getDimensionIndex(i.name)), i.defaultTooltip) && u.push(t), jp.each((function(t, e) {
                    var n = Om(a, e);
                    e = i.otherDims[e];
                    null != e && !1 !== e && (n[e] = i.name);
                }));
            })), []), r = {}, n = (s.each((function(t, e) {
                var n = a[e];
                r[e] = n[0], i = i.concat(n);
            })), e.dataDimsOnCoord = i, e.dataDimIndicesOnCoord = F(i, (function(t) {
                return o.getDimensionInfo(t).storeDimIndex;
            })), e.encodeFirstDimNotExtra = r, a.label);
            n = (n && n.length && (l = n.slice()), a.tooltip);
            return n && n.length ? u = n.slice() : u.length || (u = l.slice()), a.defaultedLabel = l, 
            a.defaultedTooltip = u, e.userOutput = new Am(h, t), e;
        }
        function Om(t, e) {
            return t.hasOwnProperty(e) || (t[e] = []), t[e];
        }
        var Rm = function(t) {
            this.otherDims = {}, null != t && O(this, t);
        }, Nm = Zo(), Em = {
            float: "f",
            int: "i",
            ordinal: "o",
            number: "n",
            time: "t"
        }, zm = (Bm.prototype.isDimensionOmitted = function() {
            return this._dimOmitted;
        }, Bm.prototype._updateDimOmitted = function(t) {
            !(this._dimOmitted = t) || this._dimNameMap || (this._dimNameMap = Hm(this.source));
        }, Bm.prototype.getSourceDimensionIndex = function(t) {
            return N(this._dimNameMap.get(t), -1);
        }, Bm.prototype.getSourceDimension = function(t) {
            var e = this.source.dimensionsDefine;
            if (e) return e[t];
        }, Bm.prototype.makeStoreSchema = function() {
            for (var t = this._fullDimCount, e = sf(this.source), n = !(30 < t), i = "", r = [], o = 0, a = 0; o < t; o++) {
                var s, l = void 0, u = void 0, h = void 0, c = this.dimensions[a];
                c && c.storeDimIndex === o ? (l = e ? c.name : null, u = c.type, h = c.ordinalMeta, 
                a++) : (s = this.getSourceDimension(o)) && (l = e ? s.name : null, u = s.type), 
                r.push({
                    property: l,
                    type: u,
                    ordinalMeta: h
                }), !e || null == l || c && c.isCalculationCoord || (i += n ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l), 
                i = i + "$" + (Em[u] || "f"), h && (i += h.uid), i += "$";
            }
            var p = this.source;
            return {
                dimensions: r,
                hash: [ p.seriesLayoutBy, p.startIndex, i ].join("$$")
            };
        }, Bm.prototype.makeOutputDimensionNames = function() {
            for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
                var i = void 0, r = this.dimensions[n];
                r && r.storeDimIndex === e ? (r.isCalculationCoord || (i = r.name), n++) : (r = this.getSourceDimension(e)) && (i = r.name), 
                t.push(i);
            }
            return t;
        }, Bm.prototype.appendCalculationDimension = function(t) {
            this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
        }, Bm);
        function Bm(t) {
            this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, 
            this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
        }
        function Fm(t) {
            return t instanceof zm;
        }
        function Vm(t) {
            for (var e = z(), n = 0; n < (t || []).length; n++) {
                var i = t[n];
                i = P(i) ? i.name : i;
                null != i && null == e.get(i) && e.set(i, n);
            }
            return e;
        }
        function Hm(t) {
            var e = Nm(t);
            return e.dimNameMap || (e.dimNameMap = Vm(t.dimensionsDefine));
        }
        var Wm, Gm, Um, Xm, Ym, qm, jm, Zm = P, Km = F, $m = "undefined" == typeof Int32Array ? Array : Int32Array, Qm = [ "hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount" ], Jm = [ "_approximateExtent" ], tv = (g.prototype.getDimension = function(t) {
            var e;
            return null == (e = this._recognizeDimIndex(t)) ? t : (e = t, this._dimOmitted ? null != (t = this._dimIdxToName.get(e)) ? t : (t = this._schema.getSourceDimension(e)) ? t.name : void 0 : this.dimensions[e]);
        }, g.prototype.getDimensionIndex = function(t) {
            var e = this._recognizeDimIndex(t);
            return null != e ? e : null == t ? -1 : (e = this._getDimInfo(t)) ? e.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
        }, g.prototype._recognizeDimIndex = function(t) {
            if (W(t) || null != t && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0)) return +t;
        }, g.prototype._getStoreDimIndex = function(t) {
            return this.getDimensionIndex(t);
        }, g.prototype.getDimensionInfo = function(t) {
            return this._getDimInfo(this.getDimension(t));
        }, g.prototype._initGetDimensionInfo = function(t) {
            var e = this._dimInfos;
            this._getDimInfo = t ? function(t) {
                return e.hasOwnProperty(t) ? e[t] : void 0;
            } : function(t) {
                return e[t];
            };
        }, g.prototype.getDimensionsOnCoord = function() {
            return this._dimSummary.dataDimsOnCoord.slice();
        }, g.prototype.mapDimension = function(t, e) {
            var n = this._dimSummary;
            return null == e ? n.encodeFirstDimNotExtra[t] : (n = n.encode[t]) ? n[e] : null;
        }, g.prototype.mapDimensionsAll = function(t) {
            return (this._dimSummary.encode[t] || []).slice();
        }, g.prototype.getStore = function() {
            return this._store;
        }, g.prototype.initData = function(t, e, n) {
            var i, r, o = this;
            (i = t instanceof pg ? t : i) || (r = this.dimensions, t = tf(t) || ut(t) ? new cf(t, r.length) : t, 
            i = new pg, r = Km(r, (function(t) {
                return {
                    type: o._dimInfos[t].type,
                    property: t
                };
            })), i.initData(t, r, n)), this._store = i, this._nameList = (e || []).slice(), 
            this._idList = [], this._nameRepeatCount = {}, this._doInit(0, i.count()), this._dimSummary = Pm(this, this._schema), 
            this.userOutput = this._dimSummary.userOutput;
        }, g.prototype.appendData = function(t) {
            t = this._store.appendData(t);
            this._doInit(t[0], t[1]);
        }, g.prototype.appendValues = function(t, e) {
            t = this._store.appendValues(t, e.length);
            var n = t.start, i = t.end, r = this._shouldMakeIdFromName();
            if (this._updateOrdinalMeta(), e) for (var o = n; o < i; o++) this._nameList[o] = e[o - n], 
            r && jm(this, o);
        }, g.prototype._updateOrdinalMeta = function() {
            for (var t = this._store, e = this.dimensions, n = 0; n < e.length; n++) {
                var i = this._dimInfos[e[n]];
                i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
            }
        }, g.prototype._shouldMakeIdFromName = function() {
            var t = this._store.getProvider();
            return null == this._idDimIdx && t.getSource().sourceFormat !== Jp && !t.fillStorage;
        }, g.prototype._doInit = function(t, e) {
            if (!(e <= t)) {
                var n = this._store.getProvider(), i = (this._updateOrdinalMeta(), this._nameList), r = this._idList;
                if (n.getSource().sourceFormat === Zp && !n.pure) for (var o = [], a = t; a < e; a++) {
                    var s = n.getItem(a, o);
                    this.hasItemOption || !P(l = s) || l instanceof Array || (this.hasItemOption = !0), 
                    s && (l = s.name, null == i[a] && null != l && (i[a] = Uo(l, null)), s = s.id, null == r[a]) && null != s && (r[a] = Uo(s, null));
                }
                if (this._shouldMakeIdFromName()) for (a = t; a < e; a++) jm(this, a);
                Wm(this);
            }
            var l;
        }, g.prototype.getApproximateExtent = function(t) {
            return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
        }, g.prototype.setApproximateExtent = function(t, e) {
            e = this.getDimension(e), this._approximateExtent[e] = t.slice();
        }, g.prototype.getCalculationInfo = function(t) {
            return this._calculationInfo[t];
        }, g.prototype.setCalculationInfo = function(t, e) {
            Zm(t) ? O(this._calculationInfo, t) : this._calculationInfo[t] = e;
        }, g.prototype.getName = function(t) {
            t = this.getRawIndex(t);
            var e = this._nameList[t];
            return e = null == (e = null == e && null != this._nameDimIdx ? Um(this, this._nameDimIdx, t) : e) ? "" : e;
        }, g.prototype._getCategory = function(t, e) {
            e = this._store.get(t, e), t = this._store.getOrdinalMeta(t);
            return t ? t.categories[e] : e;
        }, g.prototype.getId = function(t) {
            return Gm(this, this.getRawIndex(t));
        }, g.prototype.count = function() {
            return this._store.count();
        }, g.prototype.get = function(t, e) {
            var n = this._store;
            t = this._dimInfos[t];
            if (t) return n.get(t.storeDimIndex, e);
        }, g.prototype.getByRawIndex = function(t, e) {
            var n = this._store;
            t = this._dimInfos[t];
            if (t) return n.getByRawIndex(t.storeDimIndex, e);
        }, g.prototype.getIndices = function() {
            return this._store.getIndices();
        }, g.prototype.getDataExtent = function(t) {
            return this._store.getDataExtent(this._getStoreDimIndex(t));
        }, g.prototype.getSum = function(t) {
            return this._store.getSum(this._getStoreDimIndex(t));
        }, g.prototype.getMedian = function(t) {
            return this._store.getMedian(this._getStoreDimIndex(t));
        }, g.prototype.getValues = function(t, e) {
            var n = this, i = this._store;
            return V(t) ? i.getValues(Km(t, (function(t) {
                return n._getStoreDimIndex(t);
            })), e) : i.getValues(t);
        }, g.prototype.hasValue = function(t) {
            for (var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length; n < i; n++) if (isNaN(this._store.get(e[n], t))) return !1;
            return !0;
        }, g.prototype.indexOfName = function(t) {
            for (var e = 0, n = this._store.count(); e < n; e++) if (this.getName(e) === t) return e;
            return -1;
        }, g.prototype.getRawIndex = function(t) {
            return this._store.getRawIndex(t);
        }, g.prototype.indexOfRawIndex = function(t) {
            return this._store.indexOfRawIndex(t);
        }, g.prototype.rawIndexOf = function(t, e) {
            t = (t && this._invertedIndicesMap[t])[e];
            return null == t || isNaN(t) ? -1 : t;
        }, g.prototype.indicesOfNearest = function(t, e, n) {
            return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
        }, g.prototype.each = function(t, e, n) {
            k(t) && (n = e, e = t, t = []);
            n = n || this, t = Km(Xm(t), this._getStoreDimIndex, this);
            this._store.each(t, n ? pt(e, n) : e);
        }, g.prototype.filterSelf = function(t, e, n) {
            k(t) && (n = e, e = t, t = []);
            n = n || this, t = Km(Xm(t), this._getStoreDimIndex, this);
            return this._store = this._store.filter(t, n ? pt(e, n) : e), this;
        }, g.prototype.selectRange = function(n) {
            var i = this, r = {};
            return E(R(n), (function(t) {
                var e = i._getStoreDimIndex(t);
                r[e] = n[t];
            })), this._store = this._store.selectRange(r), this;
        }, g.prototype.mapArray = function(t, e, n) {
            k(t) && (n = e, e = t, t = []);
            var i = [];
            return this.each(t, (function() {
                i.push(e && e.apply(this, arguments));
            }), n = n || this), i;
        }, g.prototype.map = function(t, e, n, i) {
            n = n || i || this, i = Km(Xm(t), this._getStoreDimIndex, this), t = qm(this);
            return t._store = this._store.map(i, n ? pt(e, n) : e), t;
        }, g.prototype.modify = function(t, e, n, i) {
            n = n || i || this, i = Km(Xm(t), this._getStoreDimIndex, this);
            this._store.modify(i, n ? pt(e, n) : e);
        }, g.prototype.downSample = function(t, e, n, i) {
            var r = qm(this);
            return r._store = this._store.downSample(this._getStoreDimIndex(t), e, n, i), r;
        }, g.prototype.lttbDownSample = function(t, e) {
            var n = qm(this);
            return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e), n;
        }, g.prototype.getRawDataItem = function(t) {
            return this._store.getRawDataItem(t);
        }, g.prototype.getItemModel = function(t) {
            var e = this.hostModel;
            t = this.getRawDataItem(t);
            return new Hc(t, e, e && e.ecModel);
        }, g.prototype.diff = function(e) {
            var n = this;
            return new km(e ? e.getStore().getIndices() : [], this.getStore().getIndices(), (function(t) {
                return Gm(e, t);
            }), (function(t) {
                return Gm(n, t);
            }));
        }, g.prototype.getVisual = function(t) {
            var e = this._visual;
            return e && e[t];
        }, g.prototype.setVisual = function(t, e) {
            this._visual = this._visual || {}, Zm(t) ? O(this._visual, t) : this._visual[t] = e;
        }, g.prototype.getItemVisual = function(t, e) {
            t = this._itemVisuals[t], t = t && t[e];
            return null == t ? this.getVisual(e) : t;
        }, g.prototype.hasItemVisual = function() {
            return 0 < this._itemVisuals.length;
        }, g.prototype.ensureUniqueItemVisual = function(t, e) {
            var n = this._itemVisuals, i = n[t];
            n = (i = i || (n[t] = {}))[e];
            return null == n && (V(n = this.getVisual(e)) ? n = n.slice() : Zm(n) && (n = O({}, n)), 
            i[e] = n), n;
        }, g.prototype.setItemVisual = function(t, e, n) {
            var i = this._itemVisuals[t] || {};
            this._itemVisuals[t] = i, Zm(e) ? O(i, e) : i[e] = n;
        }, g.prototype.clearAllVisual = function() {
            this._visual = {}, this._itemVisuals = [];
        }, g.prototype.setLayout = function(t, e) {
            Zm(t) ? O(this._layout, t) : this._layout[t] = e;
        }, g.prototype.getLayout = function(t) {
            return this._layout[t];
        }, g.prototype.getItemLayout = function(t) {
            return this._itemLayouts[t];
        }, g.prototype.setItemLayout = function(t, e, n) {
            this._itemLayouts[t] = n ? O(this._itemLayouts[t] || {}, e) : e;
        }, g.prototype.clearItemLayouts = function() {
            this._itemLayouts.length = 0;
        }, g.prototype.setItemGraphicEl = function(t, e) {
            var n, i, r, o, a = this.hostModel && this.hostModel.seriesIndex;
            n = a, i = this.dataType, r = t, (a = e) && ((o = pl(a)).dataIndex = r, o.dataType = i, 
            o.seriesIndex = n, o.ssrType = "chart", "group" === a.type) && a.traverse((function(t) {
                t = pl(t);
                t.seriesIndex = n, t.dataIndex = r, t.dataType = i, t.ssrType = "chart";
            })), this._graphicEls[t] = e;
        }, g.prototype.getItemGraphicEl = function(t) {
            return this._graphicEls[t];
        }, g.prototype.eachItemGraphicEl = function(n, i) {
            E(this._graphicEls, (function(t, e) {
                t && n && n.call(i, t, e);
            }));
        }, g.prototype.cloneShallow = function(t) {
            return t = t || new g(this._schema || Km(this.dimensions, this._getDimInfo, this), this.hostModel), 
            Ym(t, this), t._store = this._store, t;
        }, g.prototype.wrapMethod = function(t, e) {
            var n = this[t];
            k(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), 
            this[t] = function() {
                var t = n.apply(this, arguments);
                return e.apply(this, [ t ].concat(Mt(arguments)));
            });
        }, g.internalField = (Wm = function(a) {
            var s = a._invertedIndicesMap;
            E(s, (function(t, e) {
                var n = a._dimInfos[e], i = n.ordinalMeta, r = a._store;
                if (i) {
                    t = s[e] = new $m(i.categories.length);
                    for (var o = 0; o < t.length; o++) t[o] = -1;
                    for (o = 0; o < r.count(); o++) t[r.get(n.storeDimIndex, o)] = o;
                }
            }));
        }, Um = function(t, e, n) {
            return Uo(t._getCategory(e, n), null);
        }, Gm = function(t, e) {
            var n = t._idList[e];
            return n = null == (n = null == n && null != t._idDimIdx ? Um(t, t._idDimIdx, e) : n) ? "e\0\0" + e : n;
        }, Xm = function(t) {
            return t = V(t) ? t : null != t ? [ t ] : [];
        }, qm = function(t) {
            var e = new g(t._schema || Km(t.dimensions, t._getDimInfo, t), t.hostModel);
            return Ym(e, t), e;
        }, Ym = function(e, n) {
            E(Qm.concat(n.__wrappedMethods || []), (function(t) {
                n.hasOwnProperty(t) && (e[t] = n[t]);
            })), e.__wrappedMethods = n.__wrappedMethods, E(Jm, (function(t) {
                e[t] = _(n[t]);
            })), e._calculationInfo = O({}, n._calculationInfo);
        }, void (jm = function(t, e) {
            var n = t._nameList, i = t._idList, r = t._nameDimIdx, o = t._idDimIdx, a = n[e], s = i[e];
            null == a && null != r && (n[e] = a = Um(t, r, e)), null == s && null != o && (i[e] = s = Um(t, o, e)), 
            null == s && null != a && (s = a, 1 < (r = (n = t._nameRepeatCount)[a] = (n[a] || 0) + 1) && (s += "__ec__" + r), 
            i[e] = s);
        })), g);
        function g(t, e) {
            this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], 
            this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], 
            this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, 
            this.hasItemOption = !1, this.TRANSFERABLE_METHODS = [ "cloneShallow", "downSample", "lttbDownSample", "map" ], 
            this.CHANGABLE_METHODS = [ "filterSelf", "selectRange" ];
            var n = !(this.DOWNSAMPLE_METHODS = [ "downSample", "lttbDownSample" ]);
            Fm(t) ? (r = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (n = !0, 
            r = t);
            for (var i, r = r || [ "x", "y" ], o = {}, a = [], s = {}, l = !1, u = {}, h = 0; h < r.length; h++) {
                var c = r[h], p = (c = H(c) ? new Rm({
                    name: c
                }) : c instanceof Rm ? c : new Rm(c), c.name), d = (c.type = c.type || "float", 
                c.coordDim || (c.coordDim = p, c.coordDimIndex = 0), c.otherDims = c.otherDims || {});
                a.push(p), null != u[p] && (l = !0), (o[p] = c).createInvertedIndices && (s[p] = []), 
                0 === d.itemName && (this._nameDimIdx = h), 0 === d.itemId && (this._idDimIdx = h), 
                n && (c.storeDimIndex = h);
            }
            this.dimensions = a, this._dimInfos = o, this._initGetDimensionInfo(l), this.hostModel = e, 
            this._invertedIndicesMap = s, this._dimOmitted && (i = this._dimIdxToName = z(), 
            E(a, (function(t) {
                i.set(o[t].storeDimIndex, t);
            })));
        }
        function ev(t, e) {
            tf(t) || (t = nf(t));
            for (var n, i, r = (e = e || {}).coordDimensions || [], o = e.dimensionsDefine || t.dimensionsDefine || [], a = z(), s = [], l = (u = t, 
            n = r, p = e.dimensionsCount, i = Math.max(u.dimensionsDetectedCount || 1, n.length, o.length, p || 0), 
            E(n, (function(t) {
                P(t) && (t = t.dimsDef) && (i = Math.max(i, t.length));
            })), i), u = e.canOmitUnusedDimensions && 30 < l, h = o === t.dimensionsDefine, c = h ? Hm(t) : Vm(o), p = e.encodeDefine, d = z(p = !p && e.encodeDefaulter ? e.encodeDefaulter(t, l) : p), f = new sg(l), g = 0; g < f.length; g++) f[g] = -1;
            function y(t) {
                var e, n, i, r = f[t];
                return r < 0 ? (e = P(e = o[t]) ? e : {
                    name: e
                }, n = new Rm, null != (i = e.name) && null != c.get(i) && (n.name = n.displayName = i), 
                null != e.type && (n.type = e.type), null != e.displayName && (n.displayName = e.displayName), 
                f[t] = s.length, n.storeDimIndex = t, s.push(n), n) : s[r];
            }
            if (!u) for (g = 0; g < l; g++) y(g);
            d.each((function(t, n) {
                var i;
                t = zo(t).slice();
                1 === t.length && !H(t[0]) && t[0] < 0 ? d.set(n, !1) : (i = d.set(n, []), E(t, (function(t, e) {
                    t = H(t) ? c.get(t) : t;
                    null != t && t < l && v(y(i[e] = t), n, e);
                })));
            }));
            var m = 0;
            function v(t, e, n) {
                null != jp.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, a.set(e, !0));
            }
            E(r, (function(t) {
                H(t) ? (o = t, r = {}) : (o = (r = t).name, t = r.ordinalMeta, r.ordinalMeta = null, 
                (r = O({}, r)).ordinalMeta = t, n = r.dimsDef, i = r.otherDims, r.name = r.coordDim = r.coordDimIndex = r.dimsDef = r.otherDims = null);
                var n, i, r, o, e = d.get(o);
                if (!1 !== e) {
                    if (!(e = zo(e)).length) for (var a = 0; a < (n && n.length || 1); a++) {
                        for (;m < l && null != y(m).coordDim; ) m++;
                        m < l && e.push(m++);
                    }
                    E(e, (function(t, e) {
                        t = y(t);
                        h && null != r.type && (t.type = r.type), v(B(t, r), o, e), null == t.name && n && (P(e = n[e]) || (e = {
                            name: e
                        }), t.name = t.displayName = e.name, t.defaultTooltip = e.defaultTooltip), i && B(t.otherDims, i);
                    }));
                }
            }));
            var _ = e.generateCoord, x = null != (w = e.generateCoordCount), w = _ ? w || 1 : 0, b = _ || "value";
            function S(t) {
                null == t.name && (t.name = t.coordDim);
            }
            if (u) E(s, (function(t) {
                S(t);
            })), s.sort((function(t, e) {
                return t.storeDimIndex - e.storeDimIndex;
            })); else for (var M = 0; M < l; M++) {
                var T = y(M);
                null == T.coordDim && (T.coordDim = function(t, e, n) {
                    if (n || e.hasKey(t)) {
                        for (var i = 0; e.hasKey(t + i); ) i++;
                        t += i;
                    }
                    return e.set(t, !0), t;
                }(b, a, x), T.coordDimIndex = 0, (!_ || w <= 0) && (T.isExtraCoord = !0), w--), 
                S(T), null != T.type || ld(t, M) !== id.Must && (!T.isExtraCoord || null == T.otherDims.itemName && null == T.otherDims.seriesName) || (T.type = "ordinal");
            }
            for (var C = s, I = z(), k = 0; k < C.length; k++) {
                var D = C[k], A = D.name, L = I.get(A) || 0;
                0 < L && (D.name = A + (L - 1)), L++, I.set(A, L);
            }
            return new zm({
                source: t,
                dimensions: s,
                fullDimensionCount: l,
                dimensionOmitted: u
            });
        }
        function nv(t) {
            this.coordSysDims = [], this.axisMap = z(), this.categoryAxisMap = z(), this.coordSysName = t;
        }
        var iv = {
            cartesian2d: function(t, e, n, i) {
                var r = t.getReferringComponents("xAxis", Jo).models[0];
                t = t.getReferringComponents("yAxis", Jo).models[0];
                e.coordSysDims = [ "x", "y" ], n.set("x", r), n.set("y", t), rv(r) && (i.set("x", r), 
                e.firstCategoryDimIndex = 0), rv(t) && (i.set("y", t), null == e.firstCategoryDimIndex) && (e.firstCategoryDimIndex = 1);
            },
            singleAxis: function(t, e, n, i) {
                t = t.getReferringComponents("singleAxis", Jo).models[0];
                e.coordSysDims = [ "single" ], n.set("single", t), rv(t) && (i.set("single", t), 
                e.firstCategoryDimIndex = 0);
            },
            polar: function(t, e, n, i) {
                t = t.getReferringComponents("polar", Jo).models[0];
                var r = t.findAxisModel("radiusAxis");
                t = t.findAxisModel("angleAxis");
                e.coordSysDims = [ "radius", "angle" ], n.set("radius", r), n.set("angle", t), rv(r) && (i.set("radius", r), 
                e.firstCategoryDimIndex = 0), rv(t) && (i.set("angle", t), null == e.firstCategoryDimIndex) && (e.firstCategoryDimIndex = 1);
            },
            geo: function(t, e, n, i) {
                e.coordSysDims = [ "lng", "lat" ];
            },
            parallel: function(t, i, r, o) {
                var a = t.ecModel, s = (t = a.getComponent("parallel", t.get("parallelIndex")), 
                i.coordSysDims = t.dimensions.slice());
                E(t.parallelAxisIndex, (function(t, e) {
                    t = a.getComponent("parallelAxis", t);
                    var n = s[e];
                    r.set(n, t), rv(t) && (o.set(n, t), null == i.firstCategoryDimIndex) && (i.firstCategoryDimIndex = e);
                }));
            }
        };
        function rv(t) {
            return "category" === t.get("type");
        }
        function ov(t, e, n) {
            var i, r, o, a = (n = n || {}).byIndex, s = n.stackedCoordDimension;
            Fm(e.schema) ? (r = e.schema, i = r.dimensions, o = e.store) : i = e;
            var l, u, h, c, p, d, f = !(!t || !t.get("stack"));
            return E(i, (function(t, e) {
                H(t) && (i[e] = t = {
                    name: t
                }), f && !t.isExtraCoord && (a || l || !t.ordinalMeta || (l = t), u || "ordinal" === t.type || "time" === t.type || s && s !== t.coordDim || (u = t));
            })), !u || a || l || (a = !0), u && (h = "__\0ecstackresult_" + t.id, c = "__\0ecstackedover_" + t.id, 
            l && (l.createInvertedIndices = !0), p = u.coordDim, n = u.type, d = 0, E(i, (function(t) {
                t.coordDim === p && d++;
            })), e = {
                name: h,
                coordDim: p,
                coordDimIndex: d,
                type: n,
                isExtraCoord: !0,
                isCalculationCoord: !0,
                storeDimIndex: i.length
            }, t = {
                name: c,
                coordDim: c,
                coordDimIndex: d + 1,
                type: n,
                isExtraCoord: !0,
                isCalculationCoord: !0,
                storeDimIndex: i.length + 1
            }, r ? (o && (e.storeDimIndex = o.ensureCalculationDimension(c, n), t.storeDimIndex = o.ensureCalculationDimension(h, n)), 
            r.appendCalculationDimension(e), r.appendCalculationDimension(t)) : (i.push(e), 
            i.push(t))), {
                stackedDimension: u && u.name,
                stackedByDimension: l && l.name,
                isStackedByIndex: a,
                stackedOverDimension: c,
                stackResultDimension: h
            };
        }
        function av(t, e) {
            return !!e && e === t.getCalculationInfo("stackedDimension");
        }
        function sv(t, e) {
            return av(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
        }
        function lv(t, e, n) {
            n = n || {};
            var i, r, o, a, s, l, u = e.getSourceManager(), h = !1, c = (t = (t ? (h = !0, i = nf(t)) : h = (i = u.getSource()).sourceFormat === Zp, 
            function(t) {
                var e = t.get("coordinateSystem"), n = new nv(e);
                if (e = iv[e]) return e(t, n, n.axisMap, n.categoryAxisMap), n;
            }(e)), l = t, c = (c = e).get("coordinateSystem"), c = Cd.get(c), p = (p = l && l.coordSysDims ? F(l.coordSysDims, (function(t) {
                var e = {
                    name: t
                };
                t = l.axisMap.get(t);
                return t && (t = t.get("type"), e.type = "category" === t ? "ordinal" : "time" === t ? "time" : "float"), 
                e;
            })) : p) || c && (c.getDimensionsInfo ? c.getDimensionsInfo() : c.dimensions.slice()) || [ "x", "y" ]), p = n.useEncodeDefaulter, d = (p = k(p) ? p : p ? dt(od, c, e) : null, 
            c = {
                coordDimensions: c,
                generateCoord: n.generateCoord,
                encodeDefine: e.getEncode(),
                encodeDefaulter: p,
                canOmitUnusedDimensions: !h
            }, p = ev(i, c), c = p.dimensions, r = n.createInvertedIndices, (o = t) && E(c, (function(t, e) {
                var n = t.coordDim;
                n = o.categoryAxisMap.get(n);
                n && (null == a && (a = e), t.ordinalMeta = n.getOrdinalMeta(), r) && (t.createInvertedIndices = !0), 
                null != t.otherDims.itemName && (s = !0);
            })), s || null == a || (c[a].otherDims.itemName = 0), a);
            n = h ? null : u.getSharedDataStore(p), t = ov(e, {
                schema: p,
                store: n
            }), c = new tv(p, e), p = (c.setCalculationInfo(t), null == d || (u = i).sourceFormat !== Zp || V(Vo(function(t) {
                for (var e = 0; e < t.length && null == t[e]; ) e++;
                return t[e];
            }(u.data || []))) ? null : function(t, e, n, i) {
                return i === d ? n : this.defaultDimValueGetter(t, e, n, i);
            });
            return c.hasItemOption = !1, c.initData(h ? i : n, null, p), c;
        }
        hv.prototype.getSetting = function(t) {
            return this._setting[t];
        }, hv.prototype.unionExtent = function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
        }, hv.prototype.unionExtentFromData = function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        }, hv.prototype.getExtent = function() {
            return this._extent.slice();
        }, hv.prototype.setExtent = function(t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
        }, hv.prototype.isInExtentRange = function(t) {
            return this._extent[0] <= t && this._extent[1] >= t;
        }, hv.prototype.isBlank = function() {
            return this._isBlank;
        }, hv.prototype.setBlank = function(t) {
            this._isBlank = t;
        };
        var uv = hv;
        function hv(t) {
            this._setting = t || {}, this._extent = [ 1 / 0, -1 / 0 ];
        }
        pa(uv);
        var cv = 0, pv = (dv.createByAxisModel = function(t) {
            t = t.option;
            var e = t.data;
            e = e && F(e, fv);
            return new dv({
                categories: e,
                needCollect: !e,
                deduplication: !1 !== t.dedplication
            });
        }, dv.prototype.getOrdinal = function(t) {
            return this._getOrCreateMap().get(t);
        }, dv.prototype.parseAndCollect = function(t) {
            var e, n, i = this._needCollect;
            return H(t) || i ? (i && !this._deduplication ? (e = this.categories.length, this.categories[e] = t) : null == (e = (n = this._getOrCreateMap()).get(t)) && (i ? (e = this.categories.length, 
            this.categories[e] = t, n.set(t, e)) : e = NaN), e) : t;
        }, dv.prototype._getOrCreateMap = function() {
            return this._map || (this._map = z(this.categories));
        }, dv);
        function dv(t) {
            this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, 
            this.uid = ++cv;
        }
        function fv(t) {
            return P(t) && null != t.value ? t.value : t + "";
        }
        function gv(t) {
            return "interval" === t.type || "log" === t.type;
        }
        function yv(t, e, n, i) {
            var r = {}, o = t[1] - t[0];
            o = r.interval = Ao(o / e, !0), e = (null != n && o < n && (o = r.interval = n), 
            null != i && i < o && (o = r.interval = i), r.intervalPrecision = vv(o));
            return n = r.niceTickExtent = [ _o(Math.ceil(t[0] / o) * o, e), _o(Math.floor(t[1] / o) * o, e) ], 
            i = t, isFinite(n[0]) || (n[0] = i[0]), isFinite(n[1]) || (n[1] = i[1]), _v(n, 0, i), 
            _v(n, 1, i), n[0] > n[1] && (n[0] = n[1]), r;
        }
        function mv(t) {
            var e = Math.pow(10, Do(t));
            t /= e;
            return t ? 2 === t ? t = 3 : 3 === t ? t = 5 : t *= 2 : t = 1, _o(t * e);
        }
        function vv(t) {
            return xo(t) + 2;
        }
        function _v(t, e, n) {
            t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
        }
        function xv(t, e) {
            return t >= e[0] && t <= e[1];
        }
        function wv(t, e) {
            return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
        }
        function bv(t, e) {
            return t * (e[1] - e[0]) + e[0];
        }
        u(Tv, Sv = uv), Tv.prototype.parse = function(t) {
            return null == t ? NaN : H(t) ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
        }, Tv.prototype.contain = function(t) {
            return xv(t = this.parse(t), this._extent) && null != this._ordinalMeta.categories[t];
        }, Tv.prototype.normalize = function(t) {
            return wv(t = this._getTickNumber(this.parse(t)), this._extent);
        }, Tv.prototype.scale = function(t) {
            return t = Math.round(bv(t, this._extent)), this.getRawOrdinalNumber(t);
        }, Tv.prototype.getTicks = function() {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1]; ) t.push({
                value: n
            }), n++;
            return t;
        }, Tv.prototype.getMinorTicks = function(t) {}, Tv.prototype.setSortInfo = function(t) {
            if (null != t) {
                for (var e = t.ordinalNumbers, n = this._ordinalNumbersByTick = [], i = this._ticksByOrdinalNumber = [], r = 0, o = this._ordinalMeta.categories.length, a = Math.min(o, e.length); r < a; ++r) {
                    var s = e[r];
                    i[n[r] = s] = r;
                }
                for (var l = 0; r < o; ++r) {
                    for (;null != i[l]; ) l++;
                    n.push(l), i[l] = r;
                }
            } else this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        }, Tv.prototype._getTickNumber = function(t) {
            var e = this._ticksByOrdinalNumber;
            return e && 0 <= t && t < e.length ? e[t] : t;
        }, Tv.prototype.getRawOrdinalNumber = function(t) {
            var e = this._ordinalNumbersByTick;
            return e && 0 <= t && t < e.length ? e[t] : t;
        }, Tv.prototype.getLabel = function(t) {
            if (!this.isBlank()) return t = this.getRawOrdinalNumber(t.value), null == (t = this._ordinalMeta.categories[t]) ? "" : t + "";
        }, Tv.prototype.count = function() {
            return this._extent[1] - this._extent[0] + 1;
        }, Tv.prototype.unionExtentFromData = function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        }, Tv.prototype.isInExtentRange = function(t) {
            return t = this._getTickNumber(t), this._extent[0] <= t && this._extent[1] >= t;
        }, Tv.prototype.getOrdinalMeta = function() {
            return this._ordinalMeta;
        }, Tv.prototype.calcNiceTicks = function() {}, Tv.prototype.calcNiceExtent = function() {}, 
        Tv.type = "ordinal";
        var Sv, Mv = Tv;
        function Tv(t) {
            t = Sv.call(this, t) || this;
            var e = (t.type = "ordinal", t.getSetting("ordinalMeta"));
            return V(e = e || new pv({})) && (e = new pv({
                categories: F(e, (function(t) {
                    return P(t) ? t.value : t;
                }))
            })), t._ordinalMeta = e, t._extent = t.getSetting("extent") || [ 0, e.categories.length - 1 ], 
            t;
        }
        uv.registerClass(Mv);
        var Cv, Iv = _o, kv = (u(Dv, Cv = uv), Dv.prototype.parse = function(t) {
            return t;
        }, Dv.prototype.contain = function(t) {
            return xv(t, this._extent);
        }, Dv.prototype.normalize = function(t) {
            return wv(t, this._extent);
        }, Dv.prototype.scale = function(t) {
            return bv(t, this._extent);
        }, Dv.prototype.setExtent = function(t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
        }, Dv.prototype.unionExtent = function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), this.setExtent(e[0], e[1]);
        }, Dv.prototype.getInterval = function() {
            return this._interval;
        }, Dv.prototype.setInterval = function(t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = vv(t);
        }, Dv.prototype.getTicks = function(t) {
            var e = this._interval, n = this._extent, i = this._niceExtent, r = this._intervalPrecision, o = [];
            if (e) {
                n[0] < i[0] && o.push(t ? {
                    value: Iv(i[0] - e, r)
                } : {
                    value: n[0]
                });
                for (var a = i[0]; a <= i[1] && (o.push({
                    value: a
                }), (a = Iv(a + e, r)) !== o[o.length - 1].value); ) if (1e4 < o.length) return [];
                var s = o.length ? o[o.length - 1].value : i[1];
                n[1] > s && o.push(t ? {
                    value: Iv(s + e, r)
                } : {
                    value: n[1]
                });
            }
            return o;
        }, Dv.prototype.getMinorTicks = function(t) {
            for (var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {
                for (var o = e[r], a = e[r - 1], s = 0, l = [], u = (o.value - a.value) / t; s < t - 1; ) {
                    var h = Iv(a.value + (s + 1) * u);
                    h > i[0] && h < i[1] && l.push(h), s++;
                }
                n.push(l);
            }
            return n;
        }, Dv.prototype.getLabel = function(t, e) {
            return null == t ? "" : (null == (e = e && e.precision) ? e = xo(t.value) || 0 : "auto" === e && (e = this._intervalPrecision), 
            Tp(Iv(t.value, e, !0)));
        }, Dv.prototype.calcNiceTicks = function(t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            isFinite(r) && (r < 0 && i.reverse(), r = yv(i, t, e, n), this._intervalPrecision = r.intervalPrecision, 
            this._interval = r.interval, this._niceExtent = r.niceTickExtent);
        }, Dv.prototype.calcNiceExtent = function(t) {
            var e = this._extent, n = (e[0] === e[1] && (0 !== e[0] ? (n = Math.abs(e[0]), t.fixMax || (e[1] += n / 2), 
            e[0] -= n / 2) : e[1] = 1), e[1] - e[0]);
            n = (isFinite(n) || (e[0] = 0, e[1] = 1), this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval), 
            this._interval);
            t.fixMin || (e[0] = Iv(Math.floor(e[0] / n) * n)), t.fixMax || (e[1] = Iv(Math.ceil(e[1] / n) * n));
        }, Dv.prototype.setNiceExtent = function(t, e) {
            this._niceExtent = [ t, e ];
        }, Dv.type = "interval", Dv);
        function Dv() {
            var t = null !== Cv && Cv.apply(this, arguments) || this;
            return t.type = "interval", t._interval = 0, t._intervalPrecision = 2, t;
        }
        uv.registerClass(kv);
        var Av = "undefined" != typeof Float32Array, Lv = Av ? Float32Array : Array;
        function Pv(t) {
            return V(t) ? Av ? new Float32Array(t) : t : new Lv(t);
        }
        var Ov = "__ec_stack_";
        function Rv(t) {
            return t.get("stack") || Ov + t.seriesIndex;
        }
        function Nv(t) {
            return t.dim + t.index;
        }
        function Ev(t, e) {
            var n = [];
            return e.eachSeriesByType(t, (function(t) {
                Fv(t) && n.push(t);
            })), n;
        }
        function zv(t) {
            var a, d, l = function(t) {
                var e, l = {}, n = (E(t, (function(t) {
                    var e = t.coordinateSystem.getBaseAxis();
                    if ("time" === e.type || "value" === e.type) {
                        t = t.getData();
                        for (var n = e.dim + "_" + e.index, i = t.getDimensionIndex(t.mapDimension(e.dim)), r = t.getStore(), o = 0, a = r.count(); o < a; ++o) {
                            var s = r.get(i, o);
                            l[n] ? l[n].push(s) : l[n] = [ s ];
                        }
                    }
                })), {});
                for (e in l) if (l.hasOwnProperty(e)) {
                    var i = l[e];
                    if (i) {
                        i.sort((function(t, e) {
                            return t - e;
                        }));
                        for (var r = null, o = 1; o < i.length; ++o) {
                            var a = i[o] - i[o - 1];
                            0 < a && (r = null === r ? a : Math.min(r, a));
                        }
                        n[e] = r;
                    }
                }
                return n;
            }(t), u = [];
            return E(t, (function(t) {
                var e, n = t.coordinateSystem.getBaseAxis(), i = n.getExtent(), r = (e = "category" === n.type ? n.getBandWidth() : "value" === n.type || "time" === n.type ? (e = n.dim + "_" + n.index, 
                e = l[e], r = Math.abs(i[1] - i[0]), o = n.scale.getExtent(), o = Math.abs(o[1] - o[0]), 
                e ? r / o * e : r) : (o = t.getData(), Math.abs(i[1] - i[0]) / o.count()), vo(t.get("barWidth"), e)), o = (i = vo(t.get("barMaxWidth"), e), 
                vo(t.get("barMinWidth") || (Vv(t) ? .5 : 1), e)), a = t.get("barGap"), s = t.get("barCategoryGap");
                u.push({
                    bandWidth: e,
                    barWidth: r,
                    barMaxWidth: i,
                    barMinWidth: o,
                    barGap: a,
                    barCategoryGap: s,
                    axisKey: Nv(n),
                    stackId: Rv(t)
                });
            })), a = {}, E(u, (function(t, e) {
                var n = t.axisKey, i = t.bandWidth, r = (i = a[n] || {
                    bandWidth: i,
                    remainedWidth: i,
                    autoWidthCount: 0,
                    categoryGap: null,
                    gap: "20%",
                    stacks: {}
                }, i.stacks), o = (n = (a[n] = i, t.stackId), r[n] || i.autoWidthCount++, r[n] = r[n] || {
                    width: 0,
                    maxWidth: 0
                }, t.barWidth);
                o = (o && !r[n].width && (r[n].width = o, o = Math.min(i.remainedWidth, o), i.remainedWidth -= o), 
                t.barMaxWidth), o = (o && (r[n].maxWidth = o), t.barMinWidth), r = (o && (r[n].minWidth = o), 
                t.barGap), n = (null != r && (i.gap = r), t.barCategoryGap);
                null != n && (i.categoryGap = n);
            })), d = {}, E(a, (function(t, n) {
                d[n] = {};
                var e = t.stacks, i = t.bandWidth, r = t.categoryGap, o = (null == r && (o = R(e).length, 
                r = Math.max(35 - 4 * o, 15) + "%"), vo(r, i)), a = vo(t.gap, 1), s = t.remainedWidth, l = t.autoWidthCount, u = (s - o) / (l + (l - 1) * a);
                u = Math.max(u, 0);
                E(e, (function(t) {
                    var e, n = t.maxWidth, i = t.minWidth;
                    t.width ? (e = t.width, n && (e = Math.min(e, n)), i && (e = Math.max(e, i)), t.width = e, 
                    s -= e + a * e, l--) : (e = u, n && n < e && (e = Math.min(n, s)), (e = i && e < i ? i : e) !== u && (t.width = e, 
                    s -= e + a * e, l--));
                })), u = (s - o) / (l + (l - 1) * a), u = Math.max(u, 0);
                var h, c = 0, p = (E(e, (function(t, e) {
                    t.width || (t.width = u), c += (h = t).width * (1 + a);
                })), h && (c -= h.width * a), -c / 2);
                E(e, (function(t, e) {
                    d[n][e] = d[n][e] || {
                        bandWidth: i,
                        offset: p,
                        width: t.width
                    }, p += t.width * (1 + a);
                }));
            })), d;
        }
        function Bv(t, e) {
            t = Ev(t, e);
            var r = zv(t);
            E(t, (function(t) {
                var e = t.getData(), n = t.coordinateSystem.getBaseAxis(), i = (t = Rv(t), n = r[Nv(n)][t], 
                t = n.offset, n.width);
                e.setLayout({
                    bandWidth: n.bandWidth,
                    offset: t,
                    size: i
                });
            }));
        }
        function Fv(t) {
            return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
        }
        function Vv(t) {
            return t.pipelineContext && t.pipelineContext.large;
        }
        u(Uv, Hv = kv), Uv.prototype.getLabel = function(t) {
            var e = this.getSetting("useUTC");
            return up(t.value, rp[function(t) {
                switch (t) {
                  case "year":
                  case "month":
                    return "day";

                  case "millisecond":
                    return "millisecond";

                  default:
                    return "second";
                }
            }(lp(this._minLevelUnit))] || rp.second, e, this.getSetting("locale"));
        }, Uv.prototype.getFormattedLabel = function(t, e, n) {
            var i = this.getSetting("useUTC"), r = this.getSetting("locale"), o = null;
            if (H(n)) o = n; else if (k(n)) o = n(t.value, e, {
                level: t.level
            }); else {
                var a = O({}, np);
                if (0 < t.level) for (var s = 0; s < op.length; ++s) a[op[s]] = "{primary|" + a[op[s]] + "}";
                var l = n ? !1 === n.inherit ? n : B(n, a) : a, u = hp(t.value, i);
                if (l[u]) o = l[u]; else if (l.inherit) {
                    for (s = ap.indexOf(u) - 1; 0 <= s; --s) if (l[u]) {
                        o = l[u];
                        break;
                    }
                    o = o || a.none;
                }
                V(o) && (e = null == t.level ? 0 : 0 <= t.level ? t.level : o.length + t.level, 
                o = o[e = Math.min(e, o.length - 1)]);
            }
            return up(new Date(t.value), o, i, r);
        }, Uv.prototype.getTicks = function() {
            var t = this._interval, e = this._extent, n = [];
            return t && (n.push({
                value: e[0],
                level: 0
            }), t = this.getSetting("useUTC"), t = function(t, b, S, M) {
                var e = ap, n = 0;
                function i(t, e, n) {
                    var i, r, o = [], a = !e.length;
                    if (!function(t, e, n, i) {
                        function r(t) {
                            return cp(c, t, i) === cp(p, t, i);
                        }
                        function o() {
                            return r("year");
                        }
                        function a() {
                            return o() && r("month");
                        }
                        function s() {
                            return a() && r("day");
                        }
                        function l() {
                            return s() && r("hour");
                        }
                        function u() {
                            return l() && r("minute");
                        }
                        function h() {
                            return u() && r("second");
                        }
                        var c = Io(e), p = Io(n);
                        switch (t) {
                          case "year":
                            return o();

                          case "month":
                            return a();

                          case "day":
                            return s();

                          case "hour":
                            return l();

                          case "minute":
                            return u();

                          case "second":
                            return h();

                          case "millisecond":
                            return h() && r("millisecond");
                        }
                    }(lp(t), M[0], M[1], S)) {
                        a && (e = [ {
                            value: function(t, e, n) {
                                var i = new Date(t);
                                switch (lp(e)) {
                                  case "year":
                                  case "month":
                                    i[_p(n)](0);

                                  case "day":
                                    i[xp(n)](1);

                                  case "hour":
                                    i[wp(n)](0);

                                  case "minute":
                                    i[bp(n)](0);

                                  case "second":
                                    i[Sp(n)](0), i[Mp(n)](0);
                                }
                                return i.getTime();
                            }(new Date(M[0]), t, S)
                        }, {
                            value: M[1]
                        } ]);
                        for (var s = 0; s < e.length - 1; s++) {
                            var l = e[s].value, u = e[s + 1].value;
                            if (l !== u) {
                                var h = void 0, c = void 0, p = void 0;
                                switch (t) {
                                  case "year":
                                    h = Math.max(1, Math.round(b / ep / 365)), c = pp(S), p = S ? "setUTCFullYear" : "setFullYear";
                                    break;

                                  case "half-year":
                                  case "quarter":
                                  case "month":
                                    r = b, h = 6 < (r /= 30 * ep) ? 6 : 3 < r ? 3 : 2 < r ? 2 : 1, c = dp(S), p = _p(S);
                                    break;

                                  case "week":
                                  case "half-week":
                                  case "day":
                                    r = b, h = 16 < (r /= ep) ? 16 : 7.5 < r ? 7 : 3.5 < r ? 4 : 1.5 < r ? 2 : 1, c = fp(S), 
                                    p = xp(S);
                                    break;

                                  case "half-day":
                                  case "quarter-day":
                                  case "hour":
                                    i = b, h = 12 < (i /= tp) ? 12 : 6 < i ? 6 : 3.5 < i ? 4 : 2 < i ? 2 : 1, c = gp(S), 
                                    p = wp(S);
                                    break;

                                  case "minute":
                                    h = Xv(b, !0), c = yp(S), p = bp(S);
                                    break;

                                  case "second":
                                    h = Xv(b, !1), c = mp(S), p = Sp(S);
                                    break;

                                  case "millisecond":
                                    h = Ao(b, !0), c = vp(S), p = Mp(S);
                                }
                                w = x = _ = v = m = y = g = f = d = void 0;
                                for (var d = h, f = l, g = u, y = c, m = p, v = o, _ = new Date(f), x = f, w = _[y](); x < g && x <= M[1]; ) v.push({
                                    value: x
                                }), _[m](w += d), x = _.getTime();
                                v.push({
                                    value: x,
                                    notAdd: !0
                                }), "year" === t && 1 < n.length && 0 === s && n.unshift({
                                    value: n[0].value - h
                                });
                            }
                        }
                        for (s = 0; s < o.length; s++) n.push(o[s]);
                    }
                }
                for (var r = [], o = [], a = 0, s = 0, l = 0; l < e.length && n++ < 1e4; ++l) {
                    var u = lp(e[l]);
                    if (function(t) {
                        return t === lp(t);
                    }(e[l]) && (i(e[l], r[r.length - 1] || [], o), u !== (e[l + 1] ? lp(e[l + 1]) : null))) {
                        if (o.length) {
                            s = a, o.sort((function(t, e) {
                                return t.value - e.value;
                            }));
                            for (var h = [], c = 0; c < o.length; ++c) {
                                var p = o[c].value;
                                0 !== c && o[c - 1].value === p || (h.push(o[c]), p >= M[0] && p <= M[1] && a++);
                            }
                            u = (M[1] - M[0]) / b;
                            if (1.5 * u < a && u / 1.5 < s) break;
                            if (r.push(h), u < a || t === e[l]) break;
                        }
                        o = [];
                    }
                }
                var d = ct(F(r, (function(t) {
                    return ct(t, (function(t) {
                        return t.value >= M[0] && t.value <= M[1] && !t.notAdd;
                    }));
                })), (function(t) {
                    return 0 < t.length;
                })), f = [], g = d.length - 1;
                for (l = 0; l < d.length; ++l) for (var y = d[l], m = 0; m < y.length; ++m) f.push({
                    value: y[m].value,
                    level: g - l
                });
                f.sort((function(t, e) {
                    return t.value - e.value;
                }));
                var v = [];
                for (l = 0; l < f.length; ++l) 0 !== l && f[l].value === f[l - 1].value || v.push(f[l]);
                return v;
            }(this._minLevelUnit, this._approxInterval, t, e), (n = n.concat(t)).push({
                value: e[1],
                level: 0
            })), n;
        }, Uv.prototype.calcNiceExtent = function(t) {
            var e, n = this._extent;
            n[0] === n[1] && (n[0] -= ep, n[1] += ep), n[1] === -1 / 0 && n[0] === 1 / 0 && (e = new Date, 
            n[1] = +new Date(e.getFullYear(), e.getMonth(), e.getDate()), n[0] = n[1] - ep), 
            this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval);
        }, Uv.prototype.calcNiceTicks = function(t, e, n) {
            var i = this._extent;
            i = i[1] - i[0], i = (this._approxInterval = i / (t = t || 10), null != e && this._approxInterval < e && (this._approxInterval = e), 
            null != n && this._approxInterval > n && (this._approxInterval = n), Gv.length), 
            t = Math.min(function(t, e, n, i) {
                for (;n < i; ) {
                    var r = n + i >>> 1;
                    t[r][1] < e ? n = 1 + r : i = r;
                }
                return n;
            }(Gv, this._approxInterval, 0, i), i - 1);
            this._interval = Gv[t][1], this._minLevelUnit = Gv[Math.max(t - 1, 0)][0];
        }, Uv.prototype.parse = function(t) {
            return W(t) ? t : +Io(t);
        }, Uv.prototype.contain = function(t) {
            return xv(this.parse(t), this._extent);
        }, Uv.prototype.normalize = function(t) {
            return wv(this.parse(t), this._extent);
        }, Uv.prototype.scale = function(t) {
            return bv(t, this._extent);
        }, Uv.type = "time";
        var Hv, Wv = Uv, Gv = [ [ "second", Qc ], [ "minute", Jc ], [ "hour", tp ], [ "quarter-day", 6 * tp ], [ "half-day", 12 * tp ], [ "day", 1.2 * ep ], [ "half-week", 3.5 * ep ], [ "week", 7 * ep ], [ "month", 31 * ep ], [ "quarter", 95 * ep ], [ "half-year", ua / 2 ], [ "year", ua ] ];
        function Uv(t) {
            t = Hv.call(this, t) || this;
            return t.type = "time", t;
        }
        function Xv(t, e) {
            return 30 < (t /= e ? Jc : Qc) ? 30 : 20 < t ? 20 : 15 < t ? 15 : 10 < t ? 10 : 5 < t ? 5 : 2 < t ? 2 : 1;
        }
        uv.registerClass(Wv);
        var Yv, qv = uv.prototype, jv = kv.prototype, Zv = _o, Kv = Math.floor, $v = Math.ceil, Qv = Math.pow, Jv = Math.log, t_ = (u(e_, Yv = uv), 
        e_.prototype.getTicks = function(t) {
            var e = this._originalScale, n = this._extent, i = e.getExtent();
            return F(jv.getTicks.call(this, t), (function(t) {
                t = t.value;
                var e = _o(Qv(this.base, t));
                e = t === n[0] && this._fixMin ? n_(e, i[0]) : e;
                return {
                    value: t === n[1] && this._fixMax ? n_(e, i[1]) : e
                };
            }), this);
        }, e_.prototype.setExtent = function(t, e) {
            var n = Jv(this.base);
            t = Jv(Math.max(0, t)) / n, e = Jv(Math.max(0, e)) / n, jv.setExtent.call(this, t, e);
        }, e_.prototype.getExtent = function() {
            var t = this.base, e = qv.getExtent.call(this);
            t = (e[0] = Qv(t, e[0]), e[1] = Qv(t, e[1]), this._originalScale.getExtent());
            return this._fixMin && (e[0] = n_(e[0], t[0])), this._fixMax && (e[1] = n_(e[1], t[1])), 
            e;
        }, e_.prototype.unionExtent = function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            t[0] = Jv(t[0]) / Jv(e), t[1] = Jv(t[1]) / Jv(e), qv.unionExtent.call(this, t);
        }, e_.prototype.unionExtentFromData = function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        }, e_.prototype.calcNiceTicks = function(t) {
            t = t || 10;
            var e = this._extent, n = e[1] - e[0];
            if (!(n == 1 / 0 || n <= 0)) {
                var i = ko(n);
                for (t / n * i <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && 0 < Math.abs(i); ) i *= 10;
                t = [ _o($v(e[0] / i) * i), _o(Kv(e[1] / i) * i) ];
                this._interval = i, this._niceExtent = t;
            }
        }, e_.prototype.calcNiceExtent = function(t) {
            jv.calcNiceExtent.call(this, t), this._fixMin = t.fixMin, this._fixMax = t.fixMax;
        }, e_.prototype.parse = function(t) {
            return t;
        }, e_.prototype.contain = function(t) {
            return xv(t = Jv(t) / Jv(this.base), this._extent);
        }, e_.prototype.normalize = function(t) {
            return wv(t = Jv(t) / Jv(this.base), this._extent);
        }, e_.prototype.scale = function(t) {
            return t = bv(t, this._extent), Qv(this.base, t);
        }, e_.type = "log", e_);
        My = t_.prototype;
        function e_() {
            var t = null !== Yv && Yv.apply(this, arguments) || this;
            return t.type = "log", t.base = 10, t._originalScale = new kv, t._interval = 0, 
            t;
        }
        function n_(t, e) {
            return Zv(t, xo(e));
        }
        My.getMinorTicks = jv.getMinorTicks, My.getLabel = jv.getLabel, uv.registerClass(t_);
        r_.prototype._prepareParams = function(t, e, n) {
            n[1] < n[0] && (n = [ NaN, NaN ]), this._dataMin = n[0], this._dataMax = n[1];
            var i = this._isOrdinal = "ordinal" === t.type, r = (this._needCrossZero = "interval" === t.type && e.getNeedCrossZero && e.getNeedCrossZero(), 
            this._modelMinRaw = e.get("min", !0));
            r = (k(r) ? this._modelMinNum = s_(t, r({
                min: n[0],
                max: n[1]
            })) : "dataMin" !== r && (this._modelMinNum = s_(t, r)), this._modelMaxRaw = e.get("max", !0));
            k(r) ? this._modelMaxNum = s_(t, r({
                min: n[0],
                max: n[1]
            })) : "dataMax" !== r && (this._modelMaxNum = s_(t, r)), i ? this._axisDataLen = e.getCategories().length : "boolean" == typeof (t = V(n = e.get("boundaryGap")) ? n : [ n || 0, n || 0 ])[0] || "boolean" == typeof t[1] ? this._boundaryGapInner = [ 0, 0 ] : this._boundaryGapInner = [ Gr(t[0], 1), Gr(t[1], 1) ];
        }, r_.prototype.calculate = function() {
            var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen, r = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e), a = "dataMin" === this._modelMinRaw ? e : this._modelMinNum, s = "dataMax" === this._modelMaxRaw ? n : this._modelMaxNum, l = null != a, u = null != s;
            e = (null == a && (a = t ? i ? 0 : NaN : e - r[0] * o), null == s && (s = t ? i ? i - 1 : NaN : n + r[1] * o), 
            null != a && isFinite(a) || (a = NaN), null != s && isFinite(s) || (s = NaN), wt(a) || wt(s) || t && !i), 
            n = (this._needCrossZero && (a = 0 < a && 0 < s && !l ? 0 : a) < 0 && s < 0 && !u && (s = 0), 
            this._determinedMin), r = this._determinedMax;
            return null != n && (a = n, l = !0), null != r && (s = r, u = !0), {
                min: a,
                max: s,
                minFixed: l,
                maxFixed: u,
                isBlank: e
            };
        }, r_.prototype.modifyDataMinMax = function(t, e) {
            this[a_[t]] = e;
        }, r_.prototype.setDeterminedMinMax = function(t, e) {
            this[o_[t]] = e;
        }, r_.prototype.freeze = function() {
            this.frozen = !0;
        };
        var i_ = r_;
        function r_(t, e, n) {
            this._prepareParams(t, e, n);
        }
        var o_ = {
            min: "_determinedMin",
            max: "_determinedMax"
        }, a_ = {
            min: "_dataMin",
            max: "_dataMax"
        };
        function s_(t, e) {
            return null == e ? null : wt(e) ? NaN : t.parse(e);
        }
        function l_(t, e) {
            var n, i, r, o, a, s, l = t.type, u = (c = e, u = (h = t).getExtent(), (h.rawExtentInfo || (c = new i_(h, c, u), 
            h.rawExtentInfo = c)).calculate()), h = (t.setBlank(u.isBlank), u.min), c = u.max;
            t = e.ecModel;
            return t && "time" === l && (l = Ev("bar", t), n = !1, E(l, (function(t) {
                n = n || t.getBaseAxis() === e.axis;
            })), n) && (t = zv(l), l = h, i = c, t, s = (s = (r = e).axis.getExtent())[1] - s[0], 
            h = (t = void 0 === (t = function(t, e, n) {
                if (t && e) return null != (t = t[Nv(e)]) && null != n ? t[Rv(n)] : t;
            }(t, r.axis)) ? {
                min: l,
                max: i
            } : (o = 1 / 0, E(t, (function(t) {
                o = Math.min(t.offset, o);
            })), a = -1 / 0, E(t, (function(t) {
                a = Math.max(t.offset + t.width, a);
            })), o = Math.abs(o), a = Math.abs(a), {
                min: l -= o / (r = o + a) * (s = (t = i - l) / (1 - (o + a) / s) - t),
                max: i += a / r * s
            })).min, c = t.max), {
                extent: [ h, c ],
                fixMin: u.minFixed,
                fixMax: u.maxFixed
            };
        }
        function u_(t, e) {
            var n = l_(t, e), i = n.extent, r = e.get("splitNumber"), o = (t instanceof t_ && (t.base = e.get("logBase")), 
            t.type), a = e.get("interval");
            o = "interval" === o || "time" === o;
            t.setExtent(i[0], i[1]), t.calcNiceExtent({
                splitNumber: r,
                fixMin: n.fixMin,
                fixMax: n.fixMax,
                minInterval: o ? e.get("minInterval") : null,
                maxInterval: o ? e.get("maxInterval") : null
            }), null != a && t.setInterval && t.setInterval(a);
        }
        function h_(t, e) {
            if (e = e || t.get("type")) switch (e) {
              case "category":
                return new Mv({
                    ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
                    extent: [ 1 / 0, -1 / 0 ]
                });

              case "time":
                return new Wv({
                    locale: t.ecModel.getLocaleModel(),
                    useUTC: t.ecModel.get("useUTC")
                });

              default:
                return new (uv.getClass(e) || kv);
            }
        }
        function c_(r) {
            var o, n, e, t = r.getLabelModel().get("formatter"), a = "category" === r.type ? r.scale.getExtent()[0] : null;
            return "time" === r.scale.type ? (n = t, function(t, e) {
                return r.scale.getFormattedLabel(t, e, n);
            }) : H(t) ? (e = t, function(t) {
                t = r.scale.getLabel(t);
                return e.replace("{value}", null != t ? t : "");
            }) : k(t) ? (o = t, function(t, e) {
                return null != a && (e = t.value - a), o((i = t, "category" === (n = r).type ? n.scale.getLabel(i) : i.value), e, null != t.level ? {
                    level: t.level
                } : null);
                var n, i;
            }) : function(t) {
                return r.scale.getLabel(t);
            };
        }
        function p_(t) {
            var e, n, i, r = t.model, o = t.scale;
            if (r.get([ "axisLabel", "show" ]) && !o.isBlank()) {
                var a, s, l = o.getExtent(), u = o instanceof Mv ? o.count() : (a = o.getTicks()).length, h = t.getLabelModel(), c = c_(t), p = 1;
                40 < u && (p = Math.ceil(u / 40));
                for (var d = 0; d < u; d += p) {
                    var f = c(a ? a[d] : {
                        value: l[0] + d
                    }, d), g = (f = h.getTextRect(f), e = h.get("rotate") || 0, n = i = g = n = void 0, 
                    e = e * Math.PI / 180, n = f.width, g = f.height, i = n * Math.abs(Math.cos(e)) + Math.abs(g * Math.sin(e)), 
                    n = n * Math.abs(Math.sin(e)) + Math.abs(g * Math.cos(e)), new U(f.x, f.y, i, n));
                    s ? s.union(g) : s = g;
                }
                return s;
            }
        }
        function d_(t) {
            t = t.get("interval");
            return null == t ? "auto" : t;
        }
        function f_(t) {
            return "category" === t.type && 0 === d_(t.getLabelModel());
        }
        y_.prototype.getNeedCrossZero = function() {
            return !this.option.scale;
        }, y_.prototype.getCoordSysModel = function() {};
        var g_ = y_;
        function y_() {}
        ky = Object.freeze({
            __proto__: null,
            createDimensions: function(t, e) {
                return ev(t, e).dimensions;
            },
            createList: function(t) {
                return lv(null, t);
            },
            createScale: function(t, e) {
                var n = e;
                return (e = h_(n = e instanceof Hc ? n : new Hc(e))).setExtent(t[0], t[1]), u_(e, n), 
                e;
            },
            createSymbol: Ry,
            createTextStyle: function(t, e) {
                return xc(t, null, null, "normal" !== (e = e || {}).state);
            },
            dataStack: {
                isDimensionStacked: av,
                enableDataStack: ov,
                getStackedDimension: sv
            },
            enableHoverEmphasis: tu,
            getECData: pl,
            getLayoutRect: Np,
            mixinAxisModelCommonMethods: function(t) {
                lt(t, g_);
            }
        });
        var m_ = [], v_ = {
            registerPreprocessor: pm,
            registerProcessor: dm,
            registerPostInit: fm,
            registerPostUpdate: gm,
            registerUpdateLifecycle: ym,
            registerAction: mm,
            registerCoordinateSystem: vm,
            registerLayout: _m,
            registerVisual: xm,
            registerTransform: Tm,
            registerLoading: Sm,
            registerMap: Mm,
            registerImpl: function(t, e) {
                d0[t] = e;
            },
            PRIORITY: Iy,
            ComponentModel: Up,
            ComponentView: Pg,
            SeriesModel: Mg,
            ChartView: zg,
            registerComponentModel: function(t) {
                Up.registerClass(t);
            },
            registerComponentView: function(t) {
                Pg.registerClass(t);
            },
            registerSeriesModel: function(t) {
                Mg.registerClass(t);
            },
            registerChartView: function(t) {
                zg.registerClass(t);
            },
            registerSubTypeDefaulter: function(t, e) {
                Up.registerSubTypeDefaulter(t, e);
            },
            registerPainter: function(t, e) {
                co(t, e);
            }
        };
        function __(t) {
            V(t) ? E(t, (function(t) {
                __(t);
            })) : 0 <= I(m_, t) || (m_.push(t), (t = k(t) ? {
                install: t
            } : t).install(v_));
        }
        var x_ = 1e-8;
        function w_(t, e) {
            return Math.abs(t - e) < x_;
        }
        function b_(t, e, n) {
            var i = 0, r = t[0];
            if (r) {
                for (var o = 1; o < t.length; o++) {
                    var a = t[o];
                    i += _s(r[0], r[1], a[0], a[1], e, n), r = a;
                }
                var s = t[0];
                return w_(r[0], s[0]) && w_(r[1], s[1]) || (i += _s(r[0], r[1], s[0], s[1], e, n)), 
                0 !== i;
            }
        }
        var S_ = [];
        function M_(t, e) {
            for (var n = 0; n < t.length; n++) ne(t[n], t[n], e);
        }
        function T_(t, e, n, i) {
            for (var r = 0; r < t.length; r++) {
                var o = t[r];
                (o = i ? i.project(o) : o) && isFinite(o[0]) && isFinite(o[1]) && (ie(e, e, o), 
                re(n, n, o));
            }
        }
        C_.prototype.setCenter = function(t) {
            this._center = t;
        }, C_.prototype.getCenter = function() {
            return this._center || (this._center = this.calcCenter());
        };
        Dy = C_;
        function C_(t) {
            this.name = t;
        }
        function I_(t, e) {
            this.type = "polygon", this.exterior = t, this.interiors = e;
        }
        function k_(t) {
            this.type = "linestring", this.points = t;
        }
        u(P_, D_ = Dy), P_.prototype.calcCenter = function() {
            for (var t, e, n = this.geometries, i = 0, r = 0; r < n.length; r++) {
                var o = n[r], a = o.exterior;
                a = a && a.length;
                i < a && (t = o, i = a);
            }
            if (t) {
                for (var s = t.exterior, l = 0, u = 0, h = 0, c = s.length, p = s[c - 1][0], d = s[c - 1][1], f = 0; f < c; f++) {
                    var g = s[f][0], y = s[f][1], m = p * y - g * d;
                    l += m, u += (p + g) * m, h += (d + y) * m, p = g, d = y;
                }
                return l ? [ u / l / 3, h / l / 3, l ] : [ s[0][0] || 0, s[0][1] || 0 ];
            }
            return [ (e = this.getBoundingRect()).x + e.width / 2, e.y + e.height / 2 ];
        }, P_.prototype.getBoundingRect = function(e) {
            var n, i, t = this._rect;
            return t && !e || (n = [ 1 / 0, 1 / 0 ], i = [ -1 / 0, -1 / 0 ], E(this.geometries, (function(t) {
                "polygon" === t.type ? T_(t.exterior, n, i, e) : E(t.points, (function(t) {
                    T_(t, n, i, e);
                }));
            })), isFinite(n[0]) && isFinite(n[1]) && isFinite(i[0]) && isFinite(i[1]) || (n[0] = n[1] = i[0] = i[1] = 0), 
            t = new U(n[0], n[1], i[0] - n[0], i[1] - n[1]), e) || (this._rect = t), t;
        }, P_.prototype.contain = function(t) {
            var e = this.getBoundingRect(), n = this.geometries;
            if (e.contain(t[0], t[1])) t: for (var i = 0, r = n.length; i < r; i++) {
                var o = n[i];
                if ("polygon" === o.type) {
                    var a = o.exterior, s = o.interiors;
                    if (b_(a, t[0], t[1])) {
                        for (var l = 0; l < (s ? s.length : 0); l++) if (b_(s[l], t[0], t[1])) continue t;
                        return !0;
                    }
                }
            }
            return !1;
        }, P_.prototype.transformTo = function(t, e, n, i) {
            var r = this.getBoundingRect(), o = r.width / r.height;
            n ? i = i || n / o : n = o * i;
            o = new U(t, e, n, i);
            for (var a = r.calculateTransform(o), s = this.geometries, l = 0; l < s.length; l++) {
                var u = s[l];
                "polygon" === u.type ? (M_(u.exterior, a), E(u.interiors, (function(t) {
                    M_(t, a);
                }))) : E(u.points, (function(t) {
                    M_(t, a);
                }));
            }
            (r = this._rect).copy(o), this._center = [ r.x + r.width / 2, r.y + r.height / 2 ];
        }, P_.prototype.cloneShallow = function(t) {
            t = new P_(t = null == t ? this.name : t, this.geometries, this._center);
            return t._rect = this._rect, t.transformTo = null, t;
        };
        var D_, A_, L_ = P_;
        function P_(t, e, n) {
            t = D_.call(this, t) || this;
            return t.type = "geoJSON", t.geometries = e, t._center = n && [ n[0], n[1] ], t;
        }
        function O_(t, e) {
            t = A_.call(this, t) || this;
            return t.type = "geoSVG", t._elOnlyForCalculate = e, t;
        }
        function R_(t, e, n) {
            for (var i = 0; i < t.length; i++) t[i] = N_(t[i], e[i], n);
        }
        function N_(t, e, n) {
            for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
                var s = (s = t.charCodeAt(a) - 64) >> 1 ^ -(1 & s), l = (l = t.charCodeAt(a + 1) - 64) >> 1 ^ -(1 & l);
                r = s += r, o = l += o;
                i.push([ s / n, l / n ]);
            }
            return i;
        }
        function E_(t, o) {
            return F(ct((t = (e = t).UTF8Encoding ? (null == (r = (n = e).UTF8Scale) && (r = 1024), 
            E(n.features, (function(t) {
                var e = t.geometry, n = e.encodeOffsets, i = e.coordinates;
                if (n) switch (e.type) {
                  case "LineString":
                    e.coordinates = N_(i, n, r);
                    break;

                  case "Polygon":
                  case "MultiLineString":
                    R_(i, n, r);
                    break;

                  case "MultiPolygon":
                    E(i, (function(t, e) {
                        return R_(t, n[e], r);
                    }));
                }
            })), n.UTF8Encoding = !1, n) : e).features, (function(t) {
                return t.geometry && t.properties && 0 < t.geometry.coordinates.length;
            })), (function(t) {
                var e = t.properties, n = t.geometry, i = [];
                switch (n.type) {
                  case "Polygon":
                    var r = n.coordinates;
                    i.push(new I_(r[0], r.slice(1)));
                    break;

                  case "MultiPolygon":
                    E(n.coordinates, (function(t) {
                        t[0] && i.push(new I_(t[0], t.slice(1)));
                    }));
                    break;

                  case "LineString":
                    i.push(new k_([ n.coordinates ]));
                    break;

                  case "MultiLineString":
                    i.push(new k_(n.coordinates));
                }
                t = new L_(e[o || "name"], i, e.cp);
                return t.properties = e, t;
            }));
            var e, n, r;
        }
        u(O_, A_ = Dy), O_.prototype.calcCenter = function() {
            for (var t = this._elOnlyForCalculate, e = t.getBoundingRect(), n = (e = [ e.x + e.width / 2, e.y + e.height / 2 ], 
            Oe(S_)), i = t; i && !i.isGeoSVGGraphicRoot; ) Ne(n, i.getLocalTransform(), n), 
            i = i.parent;
            return Fe(n, n), ne(e, e, n), e;
        };
        ga = Object.freeze({
            __proto__: null,
            MAX_SAFE_INTEGER: 9007199254740991,
            asc: function(t) {
                return t.sort((function(t, e) {
                    return t - e;
                })), t;
            },
            getPercentWithPrecision: function(t, e, n) {
                return t[e] && So(t, n)[e] || 0;
            },
            getPixelPrecision: bo,
            getPrecision: xo,
            getPrecisionSafe: wo,
            isNumeric: Po,
            isRadianAroundZero: To,
            linearMap: mo,
            nice: Ao,
            numericToNumber: Lo,
            parseDate: Io,
            quantile: function(t, e) {
                e = (t.length - 1) * e + 1;
                var n = Math.floor(e), i = +t[n - 1];
                return (e -= n) ? i + e * (t[n] - i) : i;
            },
            quantity: ko,
            quantityExponent: Do,
            reformIntervals: function(t) {
                t.sort((function(t, e) {
                    return function t(e, n, i) {
                        return e.interval[i] < n.interval[i] || e.interval[i] === n.interval[i] && (e.close[i] - n.close[i] == (i ? -1 : 1) || !i && t(e, n, 1));
                    }(t, e, 0) ? -1 : 1;
                }));
                for (var e = -1 / 0, n = 1, i = 0; i < t.length; ) {
                    for (var r = t[i].interval, o = t[i].close, a = 0; a < 2; a++) r[a] <= e && (r[a] = e, 
                    o[a] = a ? 1 : 1 - n), e = r[a], n = o[a];
                    r[0] === r[1] && o[0] * o[1] != 1 ? t.splice(i, 1) : i++;
                }
                return t;
            },
            remRadian: Mo,
            round: _o
        }), Ac = Object.freeze({
            __proto__: null,
            format: up,
            parse: Io
        }), ip = Object.freeze({
            __proto__: null,
            Arc: Th,
            BezierCurve: wh,
            BoundingRect: U,
            Circle: Au,
            CompoundPath: kh,
            Ellipse: Ru,
            Group: io,
            Image: Fs,
            IncrementalDisplayable: n,
            Line: gh,
            LinearGradient: Oh,
            Polygon: ah,
            Polyline: hh,
            RadialGradient: Ah,
            Rect: qs,
            Ring: eh,
            Sector: $u,
            Text: Qs,
            clipPointsByRect: function(t, n) {
                return F(t, (function(t) {
                    var e = t[0];
                    e = ec(e, n.x), t = (e = nc(e, n.x + n.width), t[1]), t = ec(t, n.y);
                    return [ e, nc(t, n.y + n.height) ];
                }));
            },
            clipRectByRect: function(t, e) {
                var n = ec(t.x, e.x), i = nc(t.x + t.width, e.x + e.width), r = ec(t.y, e.y);
                t = nc(t.y + t.height, e.y + e.height);
                if (n <= i && r <= t) return {
                    x: n,
                    y: r,
                    width: i - n,
                    height: t - r
                };
            },
            createIcon: function(t, e, n) {
                var i = (e = O({
                    rectHover: !0
                }, e)).style = {
                    strokeNoScale: !0
                };
                if (n = n || {
                    x: -1,
                    y: -1,
                    width: 2,
                    height: 2
                }, t) return 0 === t.indexOf("image://") ? (i.image = t.slice(8), B(i, n), new Fs(e)) : ac(t.replace("path://", ""), e, n, "center");
            },
            extendPath: function(t, e) {
                return rc(t, e);
            },
            extendShape: function(t) {
                return Z.extend(t);
            },
            getShapeClass: function(t) {
                if (ic.hasOwnProperty(t)) return ic[t];
            },
            getTransform: function(t, e) {
                for (var n = Oe([]); t && t !== e; ) Ne(n, t.getLocalTransform(), n), t = t.parent;
                return n;
            },
            initProps: Zh,
            makeImage: sc,
            makePath: ac,
            mergePath: uc,
            registerShape: oc,
            resizePath: hc,
            updateProps: jh
        }), Ec = Object.freeze({
            __proto__: null,
            addCommas: Tp,
            capitalFirst: function(t) {
                return t && t.charAt(0).toUpperCase() + t.substr(1);
            },
            encodeHTML: _e,
            formatTime: function(t, e, n) {
                "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
                var i = (e = Io(e))[(n = n ? "getUTC" : "get") + "FullYear"](), r = e[n + "Month"]() + 1, o = e[n + "Date"](), a = e[n + "Hours"](), s = e[n + "Minutes"](), l = e[n + "Seconds"]();
                e = e[n + "Milliseconds"]();
                return t.replace("MM", sp(r, 2)).replace("M", r).replace("yyyy", i).replace("yy", sp(i % 100 + "", 2)).replace("dd", sp(o, 2)).replace("d", o).replace("hh", sp(a, 2)).replace("h", a).replace("mm", sp(s, 2)).replace("m", s).replace("ss", sp(l, 2)).replace("s", l).replace("SSS", sp(e, 3));
            },
            formatTpl: Dp,
            getTextRect: function(t, e, n, i, r, o, a, s) {
                return new Qs({
                    style: {
                        text: t,
                        font: e,
                        align: n,
                        verticalAlign: i,
                        padding: r,
                        rich: o,
                        overflow: a ? "truncate" : null,
                        lineHeight: s
                    }
                }).getBoundingRect();
            },
            getTooltipMarker: function(t, e) {
                var n = (t = H(t) ? {
                    color: t,
                    extraCssText: e
                } : t || {}).color, i = t.type, r = (e = t.extraCssText, t.renderMode || "html");
                return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + _e(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + _e(n) + ";" + (e || "") + '"></span>' : {
                    renderMode: r,
                    content: "{" + (t.markerId || "markerX") + "|}  ",
                    style: "subItem" === i ? {
                        width: 4,
                        height: 4,
                        borderRadius: 2,
                        backgroundColor: n
                    } : {
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: n
                    }
                } : "";
            },
            normalizeCssArray: Ip,
            toCamelCase: function(t, e) {
                return t = (t || "").toLowerCase().replace(/-(.)/g, (function(t, e) {
                    return e.toUpperCase();
                })), t = e ? t && t.charAt(0).toUpperCase() + t.slice(1) : t;
            },
            truncateText: ba
        }), Pc = Object.freeze({
            __proto__: null,
            bind: pt,
            clone: _,
            curry: dt,
            defaults: B,
            each: E,
            extend: O,
            filter: ct,
            indexOf: I,
            inherits: st,
            isArray: V,
            isFunction: k,
            isObject: P,
            isString: H,
            map: F,
            merge: d,
            reduce: ht
        });
        var z_ = Zo();
        function B_(t) {
            return "category" === t.type ? (r = (e = t).getLabelModel(), o = V_(e, r), !r.get("show") || e.scale.isBlank() ? {
                labels: [],
                labelCategoryInterval: o.labelCategoryInterval
            } : o) : (r = (n = t).scale.getTicks(), i = c_(n), {
                labels: F(r, (function(t, e) {
                    return {
                        level: t.level,
                        formattedLabel: i(t, e),
                        rawLabel: n.scale.getLabel(t),
                        tickValue: t.value
                    };
                }))
            });
            var n, i, e, r, o;
        }
        function F_(t, e) {
            var n, i, r, o, a, s;
            return "category" === t.type ? (e, o = H_(n = t, "ticks"), a = d_(e), (s = W_(o, a)) || (e.get("show") && !n.scale.isBlank() || (i = []), 
            i = k(a) ? X_(n, a, !0) : "auto" === a ? (s = V_(n, n.getLabelModel()), r = s.labelCategoryInterval, 
            F(s.labels, (function(t) {
                return t.tickValue;
            }))) : U_(n, r = a, !0), G_(o, a, {
                ticks: i,
                tickCategoryInterval: r
            }))) : {
                ticks: F(t.scale.getTicks(), (function(t) {
                    return t.value;
                }))
            };
        }
        function V_(t, e) {
            var n, i = H_(t, "labels");
            e = d_(e);
            return W_(i, e) || G_(i, e, {
                labels: k(e) ? X_(t, e) : U_(t, n = "auto" === e ? null != (t = z_(i = t).autoInterval) ? t : z_(i).autoInterval = i.calculateCategoryInterval() : e),
                labelCategoryInterval: n
            });
        }
        function H_(t, e) {
            return z_(t)[e] || (z_(t)[e] = []);
        }
        function W_(t, e) {
            for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
        }
        function G_(t, e, n) {
            return t.push({
                key: e,
                value: n
            }), n;
        }
        function U_(t, e, n) {
            var i = c_(t), r = t.scale, o = r.getExtent(), a = t.getLabelModel(), s = [], l = Math.max((e || 0) + 1, 1), u = (e = o[0], 
            r.count());
            u = (0 !== e && 1 < l && 2 < u / l && (e = Math.round(Math.ceil(e / l) * l)), f_(t)), 
            t = a.get("showMinLabel") || u, a = a.get("showMaxLabel") || u;
            t && e !== o[0] && c(o[0]);
            for (var h = e; h <= o[1]; h += l) c(h);
            function c(t) {
                var e = {
                    value: t
                };
                s.push(n ? t : {
                    formattedLabel: i(e),
                    rawLabel: r.getLabel(e),
                    tickValue: t
                });
            }
            return a && h - l !== o[1] && c(o[1]), s;
        }
        function X_(t, i, r) {
            var o = t.scale, a = c_(t), s = [];
            return E(o.getTicks(), (function(t) {
                var e = o.getLabel(t), n = t.value;
                i(t.value, e) && s.push(r ? n : {
                    formattedLabel: a(t),
                    rawLabel: e,
                    tickValue: n
                });
            })), s;
        }
        var Y_ = [ 0, 1 ];
        Bc = (q_.prototype.contain = function(t) {
            var e = this._extent, n = Math.min(e[0], e[1]);
            e = Math.max(e[0], e[1]);
            return n <= t && t <= e;
        }, q_.prototype.containData = function(t) {
            return this.scale.contain(t);
        }, q_.prototype.getExtent = function() {
            return this._extent.slice();
        }, q_.prototype.getPixelPrecision = function(t) {
            return bo(t || this.scale.getExtent(), this._extent);
        }, q_.prototype.setExtent = function(t, e) {
            var n = this._extent;
            n[0] = t, n[1] = e;
        }, q_.prototype.dataToCoord = function(t, e) {
            var n = this._extent, i = this.scale;
            return t = i.normalize(t), this.onBand && "ordinal" === i.type && j_(n = n.slice(), i.count()), 
            mo(t, Y_, n, e);
        }, q_.prototype.coordToData = function(t, e) {
            var n = this._extent, i = this.scale;
            i = (this.onBand && "ordinal" === i.type && j_(n = n.slice(), i.count()), mo(t, n, Y_, e));
            return this.scale.scale(i);
        }, q_.prototype.pointToData = function(t, e) {}, q_.prototype.getTicksCoords = function(t) {
            var e, n, i, r, o = (t = t || {}).tickModel || this.getTickModel(), a = F(F_(this, o).ticks, (function(t) {
                return {
                    coord: this.dataToCoord("ordinal" === this.scale.type ? this.scale.getRawOrdinalNumber(t) : t),
                    tickValue: t
                };
            }), this), s = this, l = a, u = (o = o.get("alignWithLabel"), t = t.clamp, l.length);
            function h(t, e) {
                return t = _o(t), e = _o(e), r ? e < t : t < e;
            }
            return s.onBand && !o && u && (o = s.getExtent(), 1 === u ? (l[0].coord = o[0], 
            e = l[1] = {
                coord: o[1]
            }) : (n = l[u - 1].tickValue - l[0].tickValue, i = (l[u - 1].coord - l[0].coord) / n, 
            E(l, (function(t) {
                t.coord -= i / 2;
            })), n = 1 + s.scale.getExtent()[1] - l[u - 1].tickValue, e = {
                coord: l[u - 1].coord + i * n
            }, l.push(e)), r = o[0] > o[1], h(l[0].coord, o[0]) && (t ? l[0].coord = o[0] : l.shift()), 
            t && h(o[0], l[0].coord) && l.unshift({
                coord: o[0]
            }), h(o[1], e.coord) && (t ? e.coord = o[1] : l.pop()), t) && h(e.coord, o[1]) && l.push({
                coord: o[1]
            }), a;
        }, q_.prototype.getMinorTicksCoords = function() {
            var t;
            return "ordinal" === this.scale.type ? [] : (t = this.model.getModel("minorTick").get("splitNumber"), 
            F(this.scale.getMinorTicks(t = 0 < t && t < 100 ? t : 5), (function(t) {
                return F(t, (function(t) {
                    return {
                        coord: this.dataToCoord(t),
                        tickValue: t
                    };
                }), this);
            }), this));
        }, q_.prototype.getViewLabels = function() {
            return B_(this).labels;
        }, q_.prototype.getLabelModel = function() {
            return this.model.getModel("axisLabel");
        }, q_.prototype.getTickModel = function() {
            return this.model.getModel("axisTick");
        }, q_.prototype.getBandWidth = function() {
            var t = this._extent, e = this.scale.getExtent();
            e = e[1] - e[0] + (this.onBand ? 1 : 0), t = (0 === e && (e = 1), Math.abs(t[1] - t[0]));
            return Math.abs(t) / e;
        }, q_.prototype.calculateCategoryInterval = function() {
            r = (n = d = this).getLabelModel();
            var t = {
                axisRotate: n.getRotate ? n.getRotate() : n.isHorizontal && !n.isHorizontal() ? 90 : 0,
                labelRotate: r.get("rotate") || 0,
                font: r.getFont()
            }, e = c_(d), n = (t.axisRotate - t.labelRotate) / 180 * Math.PI, i = (r = d.scale).getExtent(), r = r.count();
            if (i[1] - i[0] < 1) return 0;
            var o = 1;
            40 < r && (o = Math.max(1, Math.floor(r / 40)));
            for (var a = i[0], s = d.dataToCoord(a + 1) - d.dataToCoord(a), l = Math.abs(s * Math.cos(n)), u = (s = Math.abs(s * Math.sin(n)), 
            0), h = 0; a <= i[1]; a += o) {
                var c = 1.3 * (p = Fr(e({
                    value: a
                }), t.font, "center", "top")).width, p = 1.3 * p.height;
                u = Math.max(u, c, 7), h = Math.max(h, p, 7);
            }
            n = u / l, l = h / s, s = (isNaN(n) && (n = 1 / 0), isNaN(l) && (l = 1 / 0), Math.max(0, Math.floor(Math.min(n, l)))), 
            n = z_(d.model), l = d.getExtent();
            var d = n.lastAutoInterval, f = n.lastTickCount;
            return null != d && null != f && Math.abs(d - s) <= 1 && Math.abs(f - r) <= 1 && s < d && n.axisExtent0 === l[0] && n.axisExtent1 === l[1] ? s = d : (n.lastTickCount = r, 
            n.lastAutoInterval = s, n.axisExtent0 = l[0], n.axisExtent1 = l[1]), s;
        }, q_);
        function q_(t, e, n) {
            this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [ 0, 0 ];
        }
        function j_(t, e) {
            e = (t[1] - t[0]) / e / 2;
            t[0] += e, t[1] -= e;
        }
        var Z_ = 2 * Math.PI, K_ = fs.CMD, $_ = [ "top", "right", "bottom", "left" ];
        function Q_(t, e, n, i, r, o, a, s) {
            var l = r - t, u = o - e, h = (n = n - t, i = i - e, Math.sqrt(n * n + i * i));
            l = (l * (n /= h) + u * (i /= h)) / h, u = (s && (l = Math.min(Math.max(l, 0), 1)), 
            a[0] = t + (l *= h) * n), s = a[1] = e + l * i;
            return Math.sqrt((u - r) * (u - r) + (s - o) * (s - o));
        }
        function J_(t, e, n, i, r, o, a) {
            n < 0 && (t += n, n = -n), i < 0 && (e += i, i = -i);
            n = t + n, i = e + i, t = a[0] = Math.min(Math.max(r, t), n), n = a[1] = Math.min(Math.max(o, e), i);
            return Math.sqrt((t - r) * (t - r) + (n - o) * (n - o));
        }
        var t1 = [];
        function e1(t, e, n) {
            for (var i, r, o, a, s, l, u, h, c, p = 0, d = 0, f = 0, g = 0, y = 1 / 0, m = e.data, v = t.x, _ = t.y, x = 0; x < m.length; ) {
                var w = m[x++], b = (1 === x && (f = p = m[x], g = d = m[x + 1]), y);
                switch (w) {
                  case K_.M:
                    p = f = m[x++], d = g = m[x++];
                    break;

                  case K_.L:
                    b = Q_(p, d, m[x], m[x + 1], v, _, t1, !0), p = m[x++], d = m[x++];
                    break;

                  case K_.C:
                    b = Hn(p, d, m[x++], m[x++], m[x++], m[x++], m[x], m[x + 1], v, _, t1), p = m[x++], 
                    d = m[x++];
                    break;

                  case K_.Q:
                    b = Yn(p, d, m[x++], m[x++], m[x], m[x + 1], v, _, t1), p = m[x++], d = m[x++];
                    break;

                  case K_.A:
                    var S = m[x++], M = m[x++], T = m[x++], C = m[x++], I = m[x++], k = m[x++], D = (x += 1, 
                    !!(1 - m[x++])), A = Math.cos(I) * T + S, L = Math.sin(I) * C + M;
                    x <= 1 && (f = A, g = L), L = (A = I) + k, D, a = (v - (i = S)) * (o = C) / T + S, 
                    s = _, l = t1, c = h = u = void 0, a -= i, s -= r = M, u = Math.sqrt(a * a + s * s), 
                    h = (a /= u) * o + i, c = (s /= u) * o + r, b = Math.abs(A - L) % Z_ < 1e-4 || ((L = D ? (D = A, 
                    A = ms(L), ms(D)) : (A = ms(A), ms(L))) < A && (L += Z_), (D = Math.atan2(s, a)) < 0 && (D += Z_), 
                    A <= D && D <= L) || A <= D + Z_ && D + Z_ <= L ? (l[0] = h, l[1] = c, u - o) : (c = ((D = o * Math.cos(A) + i) - a) * (D - a) + ((h = o * Math.sin(A) + r) - s) * (h - s)) < (i = ((u = o * Math.cos(L) + i) - a) * (u - a) + ((A = o * Math.sin(L) + r) - s) * (A - s)) ? (l[0] = D, 
                    l[1] = h, Math.sqrt(c)) : (l[0] = u, l[1] = A, Math.sqrt(i)), p = Math.cos(I + k) * T + S, 
                    d = Math.sin(I + k) * C + M;
                    break;

                  case K_.R:
                    b = J_(f = p = m[x++], g = d = m[x++], m[x++], m[x++], v, _, t1);
                    break;

                  case K_.Z:
                    b = Q_(p, d, f, g, v, _, t1, !0), p = f, d = g;
                }
                b < y && (y = b, n.set(t1[0], t1[1]));
            }
            return y;
        }
        var n1 = new G, Y = new G, i1 = new G, r1 = new G, o1 = new G;
        function a1(t, e) {
            if (t) {
                var n = t.getTextGuideLine(), i = t.getTextContent();
                if (i && n) {
                    var r = t.textGuideLineConfig || {}, o = [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ], a = r.candidates || $_, s = i.getBoundingRect().clone(), l = (s.applyTransform(i.getComputedTransform()), 
                    1 / 0), u = r.anchor, h = t.getComputedTransform(), c = h && Fe([], h), p = e.get("length2") || 0;
                    u && i1.copy(u);
                    for (var d = 0; d < a.length; d++) {
                        x = _ = v = m = y = g = f = void 0;
                        var f = a[d], g = 0, y = s, m = n1, v = r1, _ = y.width, x = y.height;
                        switch (f) {
                          case "top":
                            m.set(y.x + _ / 2, y.y - g), v.set(0, -1);
                            break;

                          case "bottom":
                            m.set(y.x + _ / 2, y.y + x + g), v.set(0, 1);
                            break;

                          case "left":
                            m.set(y.x - g, y.y + x / 2), v.set(-1, 0);
                            break;

                          case "right":
                            m.set(y.x + _ + g, y.y + x / 2), v.set(1, 0);
                        }
                        G.scaleAndAdd(Y, n1, r1, p), Y.transform(c);
                        f = t.getBoundingRect(), f = u ? u.distance(Y) : t instanceof Z ? e1(Y, t.path, i1) : (b = i1, 
                        w = J_((w = f).x, f.y, f.width, f.height, Y.x, Y.y, t1), b.set(t1[0], t1[1]), w);
                        f < l && (l = f, Y.transform(h), i1.transform(h), i1.toArray(o[0]), Y.toArray(o[1]), 
                        n1.toArray(o[2]));
                    }
                    u1(o, e.get("minTurnAngle")), n.setShape({
                        points: o
                    });
                }
            }
            var w, b;
        }
        var s1 = [], l1 = new G;
        function u1(t, e) {
            var n, i;
            e <= 180 && 0 < e && (e = e / 180 * Math.PI, n1.fromArray(t[0]), Y.fromArray(t[1]), 
            i1.fromArray(t[2]), G.sub(r1, n1, Y), G.sub(o1, i1, Y), i = r1.len(), n = o1.len(), 
            i < .001 || n < .001 || (r1.scale(1 / i), o1.scale(1 / n), i = r1.dot(o1), Math.cos(e) < i && (n = Q_(Y.x, Y.y, i1.x, i1.y, n1.x, n1.y, s1, !1), 
            l1.fromArray(s1), l1.scaleAndAdd(o1, n / Math.tan(Math.PI - e)), i = i1.x !== Y.x ? (l1.x - Y.x) / (i1.x - Y.x) : (l1.y - Y.y) / (i1.y - Y.y), 
            isNaN(i) || (i < 0 ? G.copy(l1, Y) : 1 < i && G.copy(l1, i1), l1.toArray(t[1])))));
        }
        function h1(t, e, n, i) {
            var r = "normal" === n;
            n = r ? t : t.ensureState(n), e = (n.ignore = e, i.get("smooth")), e = (e && !0 === e && (e = .3), 
            n.shape = n.shape || {}, 0 < e && (n.shape.smooth = e), i.getModel("lineStyle").getLineStyle());
            r ? t.useStyle(e) : n.style = e;
        }
        function c1(t, e) {
            var n = e.smooth, i = e.points;
            if (i) if (t.moveTo(i[0][0], i[0][1]), 0 < n && 3 <= i.length) {
                e = Qt(i[0], i[1]);
                var r = Qt(i[1], i[2]);
                e && r ? (n = Math.min(e, r) * n, e = ee([], i[1], i[0], n / e), n = ee([], i[1], i[2], n / r), 
                r = ee([], e, n, .5), t.bezierCurveTo(e[0], e[1], e[0], e[1], r[0], r[1]), t.bezierCurveTo(n[0], n[1], n[0], n[1], i[2][0], i[2][1])) : (t.lineTo(i[1][0], i[1][1]), 
                t.lineTo(i[2][0], i[2][1]));
            } else for (var o = 1; o < i.length; o++) t.lineTo(i[o][0], i[o][1]);
        }
        function p1(t, e, n) {
            var i = t.getTextGuideLine(), r = t.getTextContent();
            if (r) {
                for (var o = e.normal, a = o.get("show"), s = r.ignore, l = 0; l < wl.length; l++) {
                    var u, h = wl[l], c = e[h], p = "normal" === h;
                    c && (u = c.get("show"), (p ? s : N(r.states[h] && r.states[h].ignore, s)) || !N(u, a) ? ((u = p ? i : i && i.states[h]) && (u.ignore = !0), 
                    i && h1(i, !0, h, c)) : (i || (i = new hh, t.setTextGuideLine(i), p || !s && a || h1(i, !0, "normal", e.normal), 
                    t.stateProxy && (i.stateProxy = t.stateProxy)), h1(i, !1, h, c)));
                }
                i && (B(i.style, n), i.style.fill = null, n = o.get("showAbove"), (t.textGuideLineConfig = t.textGuideLineConfig || {}).showAbove = n || !1, 
                i.buildPath = c1);
            } else i && t.removeTextGuideLine();
        }
        function d1(t, e) {
            for (var n = {
                normal: t.getModel(e = e || "labelLine")
            }, i = 0; i < xl.length; i++) {
                var r = xl[i];
                n[r] = t.getModel([ r, e ]);
            }
            return n;
        }
        function f1(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var i, r, o, a, s, l, u = t[n];
                u.defaultAttr.ignore || (r = (i = u.label).getComputedTransform(), o = i.getBoundingRect(), 
                a = !r || r[1] < 1e-5 && r[2] < 1e-5, l = i.style.margin || 0, (s = o.clone()).applyTransform(r), 
                s.x -= l / 2, s.y -= l / 2, s.width += l, s.height += l, l = a ? new Hh(o, r) : null, 
                e.push({
                    label: i,
                    labelLine: u.labelLine,
                    rect: s,
                    localRect: o,
                    obb: l,
                    priority: u.priority,
                    defaultAttr: u.defaultAttr,
                    layoutOption: u.computedLayoutOption,
                    axisAligned: a,
                    transform: r
                }));
            }
            return e;
        }
        function g1(s, l, u, t, e, n) {
            var h = s.length;
            if (!(h < 2)) {
                s.sort((function(t, e) {
                    return t.rect[l] - e.rect[l];
                }));
                for (var i, r = 0, o = !1, a = [], c = 0, p = 0; p < h; p++) {
                    var d = s[p], f = d.rect;
                    d = ((i = f[l] - r) < 0 && (f[l] -= i, d.label[l] -= i, o = !0), Math.max(-i, 0));
                    a.push(d), c += d, r = f[l] + f[u];
                }
                0 < c && n && w(-c / h, 0, h);
                var g, y, m = s[0], v = s[h - 1];
                return _(), g < 0 && b(-g, .8), y < 0 && b(y, .8), _(), x(g, y, 1), x(y, g, -1), 
                _(), g < 0 && S(-g), y < 0 && S(y), o;
            }
            function _() {
                g = m.rect[l] - t, y = e - v.rect[l] - v.rect[u];
            }
            function x(t, e, n) {
                t < 0 && (0 < (e = Math.min(e, -t)) ? (w(e * n, 0, h), (e += t) < 0 && b(-e * n, 1)) : b(-t * n, 1));
            }
            function w(t, e, n) {
                0 !== t && (o = !0);
                for (var i = e; i < n; i++) {
                    var r = s[i];
                    r.rect[l] += t, r.label[l] += t;
                }
            }
            function b(t, e) {
                for (var n = [], i = 0, r = 1; r < h; r++) {
                    var o = s[r - 1].rect;
                    o = Math.max(s[r].rect[l] - o[l] - o[u], 0);
                    n.push(o), i += o;
                }
                if (i) {
                    var a = Math.min(Math.abs(t) / i, e);
                    if (0 < t) for (r = 0; r < h - 1; r++) w(n[r] * a, 0, r + 1); else for (r = h - 1; 0 < r; r--) w(-n[r - 1] * a, r, h);
                }
            }
            function S(t) {
                var e = t < 0 ? -1 : 1;
                t = Math.abs(t);
                for (var n = Math.ceil(t / (h - 1)), i = 0; i < h - 1; i++) if (0 < e ? w(n, 0, i + 1) : w(-n, h - i - 1, h), 
                (t -= n) <= 0) return;
            }
        }
        function y1(t, e, n, i) {
            return g1(t, "y", "height", e, n, i);
        }
        function m1(t) {
            var e = [], n = (t.sort((function(t, e) {
                return e.priority - t.priority;
            })), new U(0, 0, 0, 0));
            function i(t) {
                var e;
                t.ignore || null == (e = t.ensureState("emphasis")).ignore && (e.ignore = !1), t.ignore = !0;
            }
            for (var r = 0; r < t.length; r++) {
                var o = t[r], a = o.axisAligned, s = o.localRect, l = o.transform, u = o.label, h = o.labelLine;
                n.copy(o.rect), n.width -= .1, n.height -= .1, n.x += .05, n.y += .05;
                for (var c = o.obb, p = !1, d = 0; d < e.length; d++) {
                    var f = e[d];
                    if (n.intersect(f.rect)) {
                        if (a && f.axisAligned) {
                            p = !0;
                            break;
                        }
                        if (f.obb || (f.obb = new Hh(f.localRect, f.transform)), (c = c || new Hh(s, l)).intersect(f.obb)) {
                            p = !0;
                            break;
                        }
                    }
                }
                p ? (i(u), h && i(h)) : (u.attr("ignore", o.defaultAttr.ignore), h && h.attr("ignore", o.defaultAttr.labelGuideIgnore), 
                e.push(o));
            }
        }
        function v1(t, e) {
            var n = t.label;
            e = e && e.getTextGuideLine();
            return {
                dataIndex: t.dataIndex,
                dataType: t.dataType,
                seriesIndex: t.seriesModel.seriesIndex,
                text: t.label.style.text,
                rect: t.hostRect,
                labelRect: t.rect,
                align: n.style.align,
                verticalAlign: n.style.verticalAlign,
                labelLinePoints: function(t) {
                    if (t) {
                        for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
                        return e;
                    }
                }(e && e.shape.points)
            };
        }
        var _1 = [ "align", "verticalAlign", "width", "height", "fontSize" ], x1 = new Pr, w1 = Zo(), b1 = Zo();
        function S1(t, e, n) {
            for (var i = 0; i < n.length; i++) {
                var r = n[i];
                null != e[r] && (t[r] = e[r]);
            }
        }
        var M1 = [ "x", "y", "rotation" ], T1 = (C1.prototype.clearLabels = function() {
            this._labelList = [], this._chartViewList = [];
        }, C1.prototype._addLabel = function(t, e, n, i, r) {
            var o = i.style, a = i.__hostTarget.textConfig || {}, s = i.getComputedTransform(), l = i.getBoundingRect().plain();
            U.applyTransform(l, l, s), s ? x1.setLocalTransform(s) : (x1.x = x1.y = x1.rotation = x1.originX = x1.originY = 0, 
            x1.scaleX = x1.scaleY = 1), x1.rotation = ms(x1.rotation);
            s = i.__hostTarget;
            var u, h = (s && (u = s.getBoundingRect().plain(), h = s.getComputedTransform(), 
            U.applyTransform(u, u, h)), u && s.getTextGuideLine());
            this._labelList.push({
                label: i,
                labelLine: h,
                seriesModel: n,
                dataIndex: t,
                dataType: e,
                layoutOption: r,
                computedLayoutOption: null,
                rect: l,
                hostRect: u,
                priority: u ? u.width * u.height : 0,
                defaultAttr: {
                    ignore: i.ignore,
                    labelGuideIgnore: h && h.ignore,
                    x: x1.x,
                    y: x1.y,
                    scaleX: x1.scaleX,
                    scaleY: x1.scaleY,
                    rotation: x1.rotation,
                    style: {
                        x: o.x,
                        y: o.y,
                        align: o.align,
                        verticalAlign: o.verticalAlign,
                        width: o.width,
                        height: o.height,
                        fontSize: o.fontSize
                    },
                    cursor: i.cursor,
                    attachedPos: a.position,
                    attachedRot: a.rotation
                }
            });
        }, C1.prototype.addLabelsOfSeries = function(t) {
            var n = this, i = (this._chartViewList.push(t), t.__model), r = i.get("labelLayout");
            (k(r) || R(r).length) && t.group.traverse((function(t) {
                if (t.ignore) return !0;
                var e = t.getTextContent();
                t = pl(t);
                e && !e.disableLabelLayout && n._addLabel(t.dataIndex, t.dataType, i, e, r);
            }));
        }, C1.prototype.updateLayoutConfig = function(t) {
            var e = t.getWidth(), n = t.getHeight();
            for (var i = 0; i < this._labelList.length; i++) {
                var r = this._labelList[i], o = r.label, a = o.__hostTarget, s = r.defaultAttr, l = void 0, u = (l = (k(r.layoutOption) ? r.layoutOption(v1(r, a)) : r.layoutOption) || {}, 
                r.computedLayoutOption = l, Math.PI / 180), h = (a && a.setTextConfig({
                    local: !1,
                    position: null != l.x || null != l.y ? null : s.attachedPos,
                    rotation: null != l.rotate ? l.rotate * u : s.attachedRot,
                    offset: [ l.dx || 0, l.dy || 0 ]
                }), !1);
                null != l.x ? (o.x = vo(l.x, e), o.setStyle("x", 0), h = !0) : (o.x = s.x, o.setStyle("x", s.style.x)), 
                null != l.y ? (o.y = vo(l.y, n), o.setStyle("y", 0), h = !0) : (o.y = s.y, o.setStyle("y", s.style.y)), 
                l.labelLinePoints && (c = a.getTextGuideLine()) && (c.setShape({
                    points: l.labelLinePoints
                }), h = !1), w1(o).needsUpdateLabelLine = h, o.rotation = null != l.rotate ? l.rotate * u : s.rotation, 
                o.scaleX = s.scaleX, o.scaleY = s.scaleY;
                for (var c, p = 0; p < _1.length; p++) {
                    var d = _1[p];
                    o.setStyle(d, (null != l[d] ? l : s.style)[d]);
                }
                l.draggable ? (o.draggable = !0, o.cursor = "move", a && (c = r.seriesModel, null != r.dataIndex && (c = r.seriesModel.getData(r.dataType).getItemModel(r.dataIndex)), 
                o.on("drag", function(t, e) {
                    return function() {
                        a1(t, e);
                    };
                }(a, c.getModel("labelLine"))))) : (o.off("drag"), o.cursor = s.cursor);
            }
        }, C1.prototype.layout = function(t) {
            var e, n = t.getWidth(), i = (t = t.getHeight(), f1(this._labelList)), r = ct(i, (function(t) {
                return "shiftX" === t.layoutOption.moveOverlap;
            })), o = ct(i, (function(t) {
                return "shiftY" === t.layoutOption.moveOverlap;
            }));
            g1(r, "x", "width", 0, n, e), y1(o, 0, t), m1(ct(i, (function(t) {
                return t.layoutOption.hideOverlap;
            })));
        }, C1.prototype.processLabelsOverall = function() {
            var a = this;
            E(this._chartViewList, (function(t) {
                var i = t.__model, r = t.ignoreLabelLineUpdate, o = i.isAnimationEnabled();
                t.group.traverse((function(t) {
                    if (t.ignore && !t.forceLabelAnimation) return !0;
                    var e = !r, n = t.getTextContent();
                    (e = !e && n ? w1(n).needsUpdateLabelLine : e) && a._updateLabelLine(t, i), o && a._animateLabels(t, i);
                }));
            }));
        }, C1.prototype._updateLabelLine = function(t, e) {
            var n = t.getTextContent(), i = pl(t), r = i.dataIndex;
            n && null != r && (e = (n = e.getData(i.dataType)).getItemModel(r), i = {}, (r = n.getItemVisual(r, "style")) && (n = n.getVisual("drawType"), 
            i.stroke = r[n]), r = e.getModel("labelLine"), p1(t, d1(e), i), a1(t, r));
        }, C1.prototype._animateLabels = function(t, e) {
            var n, i, r, o, a, s, l, u, h, c, p, d, f, g = t.getTextContent(), y = t.getTextGuideLine();
            !g || !t.forceLabelAnimation && (g.ignore || g.invisible || t.disableLabelAnimation || Kh(t)) || (d = (f = w1(g)).oldLayout, 
            n = (i = pl(t)).dataIndex, s = {
                x: g.x,
                y: g.y,
                rotation: g.rotation
            }, i = e.getData(i.dataType), d ? (g.attr(d), (t = t.prevStates) && (0 <= I(t, "select") && g.attr(f.oldLayoutSelect), 
            0 <= I(t, "emphasis")) && g.attr(f.oldLayoutEmphasis), jh(g, s, e, n)) : (g.attr(s), 
            Cc(g).valueAnimation || (t = N(g.style.opacity, 1), g.style.opacity = 0, Zh(g, {
                style: {
                    opacity: t
                }
            }, e, n))), f.oldLayout = s, g.states.select && (S1(t = f.oldLayoutSelect = {}, s, M1), 
            S1(t, g.states.select, M1)), g.states.emphasis && (S1(t = f.oldLayoutEmphasis = {}, s, M1), 
            S1(t, g.states.emphasis, M1)), o = n, a = i, l = s = e, (p = Cc(r = g)).valueAnimation && p.prevValue !== p.value && (u = p.defaultInterpolatedText, 
            h = N(p.interpolatedValue, p.prevValue), c = p.value, r.percent = 0, (null == p.prevValue ? Zh : jh)(r, {
                percent: 1
            }, s, o, null, (function(t) {
                var e = na(a, p.precision, h, c, t);
                t = (p.interpolatedValue = 1 === t ? null : e, mc({
                    labelDataIndex: o,
                    labelFetcher: l,
                    defaultText: u ? u(e) : e + ""
                }, p.statesModels, e));
                yc(r, t);
            })))), !y || y.ignore || y.invisible || (d = (f = b1(y)).oldLayout, t = {
                points: y.shape.points
            }, d ? (y.attr({
                shape: d
            }), jh(y, {
                shape: t
            }, e)) : (y.setShape(t), y.style.strokePercent = 0, Zh(y, {
                style: {
                    strokePercent: 1
                }
            }, e)), f.oldLayout = t);
        }, C1);
        function C1() {
            this._labelList = [], this._chartViewList = [];
        }
        var I1 = Zo();
        function k1(t) {
            t.registerUpdateLifecycle("series:beforeupdate", (function(t, e, n) {
                (I1(e).labelManager || (I1(e).labelManager = new T1)).clearLabels();
            })), t.registerUpdateLifecycle("series:layoutlabels", (function(t, e, n) {
                var i = I1(e).labelManager;
                n.updatedSeries.forEach((function(t) {
                    i.addLabelsOfSeries(e.getViewOfSeriesModel(t));
                })), i.updateLayoutConfig(e), i.layout(e), i.processLabelsOverall();
            }));
        }
        function D1(t, e, n) {
            var i = q.createCanvas(), r = e.getWidth(), o = (e = e.getHeight(), i.style);
            return o && (o.position = "absolute", o.left = "0", o.top = "0", o.width = r + "px", 
            o.height = e + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = e * n, 
            i;
        }
        __(k1);
        u(P1, A1 = ue), P1.prototype.getElementCount = function() {
            return this.__endIndex - this.__startIndex;
        }, P1.prototype.afterBrush = function() {
            this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex;
        }, P1.prototype.initContext = function() {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
        }, P1.prototype.setUnpainted = function() {
            this.__firstTimePaint = !0;
        }, P1.prototype.createBackBuffer = function() {
            var t = this.dpr;
            this.domBack = D1("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 
            1 !== t && this.ctxBack.scale(t, t);
        }, P1.prototype.createRepaintRects = function(t, e, n, i) {
            if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
            var r, l = [], u = this.maxRepaintRectCount, h = !1, c = new U(0, 0, 0, 0);
            function o(t) {
                if (t.isFinite() && !t.isZero()) if (0 === l.length) (e = new U(0, 0, 0, 0)).copy(t), 
                l.push(e); else {
                    for (var e, n = !1, i = 1 / 0, r = 0, o = 0; o < l.length; ++o) {
                        var a = l[o];
                        if (a.intersect(t)) {
                            var s = new U(0, 0, 0, 0);
                            s.copy(a), s.union(t), l[o] = s, n = !0;
                            break;
                        }
                        h && (c.copy(t), c.union(a), s = t.width * t.height, a = a.width * a.height, (a = c.width * c.height - s - a) < i) && (i = a, 
                        r = o);
                    }
                    h && (l[r].union(t), n = !0), n || ((e = new U(0, 0, 0, 0)).copy(t), l.push(e)), 
                    h = h || l.length >= u;
                }
            }
            for (var a, s = this.__startIndex; s < this.__endIndex; ++s) (p = t[s]) && (f = p.shouldBePainted(n, i, !0, !0), 
            (d = p.__isRendered && (p.__dirty & mn || !f) ? p.getPrevPaintRect() : null) && o(d), 
            a = f && (p.__dirty & mn || !p.__isRendered) ? p.getPaintRect() : null) && o(a);
            for (s = this.__prevStartIndex; s < this.__prevEndIndex; ++s) {
                var p, d, f = (p = e[s]) && p.shouldBePainted(n, i, !0, !0);
                !p || f && p.__zr || !p.__isRendered || (d = p.getPrevPaintRect()) && o(d);
            }
            do {
                for (r = !1, s = 0; s < l.length; ) if (l[s].isZero()) l.splice(s, 1); else {
                    for (var g = s + 1; g < l.length; ) l[s].intersect(l[g]) ? (r = !0, l[s].union(l[g]), 
                    l.splice(g, 1)) : g++;
                    s++;
                }
            } while (r);
            return this._paintRects = l;
        }, P1.prototype.debugGetPaintRects = function() {
            return (this._paintRects || []).slice();
        }, P1.prototype.resize = function(t, e) {
            var n = this.dpr, i = this.dom, r = i.style, o = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, 
            o && (o.width = t * n, o.height = e * n, 1 !== n) && this.ctxBack.scale(n, n);
        }, P1.prototype.clear = function(t, o, e) {
            var n = this.dom, a = this.ctx, i = n.width, r = n.height, s = (o = o || this.clearColor, 
            this.motionBlur && !t), l = this.lastFrameAlpha, u = this.dpr, h = this, c = (s && (this.domBack || this.createBackBuffer(), 
            this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, i / u, r / u)), 
            this.domBack);
            function p(t, e, n, i) {
                var r;
                a.clearRect(t, e, n, i), o && "transparent" !== o && (r = void 0, vt(o) ? (r = (o.global || o.__width === n && o.__height === i) && o.__canvasGradient || zy(a, o, {
                    x: 0,
                    y: 0,
                    width: n,
                    height: i
                }), o.__canvasGradient = r, o.__width = n, o.__height = i) : _t(o) && (o.scaleX = o.scaleX || u, 
                o.scaleY = o.scaleY || u, r = qy(a, o, {
                    dirty: function() {
                        h.setUnpainted(), h.painter.refresh();
                    }
                })), a.save(), a.fillStyle = r || o, a.fillRect(t, e, n, i), a.restore()), s && (a.save(), 
                a.globalAlpha = l, a.drawImage(c, t, e, n, i), a.restore());
            }
            !e || s ? p(0, 0, i, r) : e.length && E(e, (function(t) {
                p(t.x * u, t.y * u, t.width * u, t.height * u);
            }));
        };
        var A1, L1 = P1;
        function P1(t, e, n) {
            var i, r = A1.call(this) || this;
            t = (r.motionBlur = !1, r.lastFrameAlpha = .7, r.dpr = 1, r.virtual = !1, r.config = {}, 
            r.incremental = !1, r.zlevel = 0, r.maxRepaintRectCount = 5, r.__dirty = !0, r.__firstTimePaint = !0, 
            r.__used = !1, r.__drawIndex = 0, r.__startIndex = 0, r.__endIndex = 0, r.__prevStartIndex = null, 
            r.__prevEndIndex = null, n = n || Sr, "string" == typeof t ? i = D1(t, e, n) : P(t) && (t = (i = t).id), 
            r.id = t, (r.dom = i).style);
            return t && (Bt(i), i.onselectstart = function() {
                return !1;
            }, t.padding = "0", t.margin = "0", t.borderWidth = "0"), r.painter = e, r.dpr = n, 
            r;
        }
        var O1 = 314159;
        y.prototype.getType = function() {
            return "canvas";
        }, y.prototype.isSingleCanvas = function() {
            return this._singleCanvas;
        }, y.prototype.getViewportRoot = function() {
            return this._domRoot;
        }, y.prototype.getViewportRootOffset = function() {
            var t = this.getViewportRoot();
            if (t) return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            };
        }, y.prototype.refresh = function(t) {
            var e = this.storage.getDisplayList(!0), n = this._prevDisplayList, i = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, n, t, this._redrawId);
            for (var r = 0; r < i.length; r++) {
                var o, a = i[r];
                a = this._layers[a];
                !a.__builtin__ && a.refresh && (o = 0 === r ? this._backgroundColor : null, a.refresh(o));
            }
            return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this;
        }, y.prototype.refreshHover = function() {
            this._paintHoverList(this.storage.getDisplayList(!1));
        }, y.prototype._paintHoverList = function(t) {
            var e = t.length, n = this._hoverlayer;
            if (n && n.clear(), e) {
                for (var i, r = {
                    inHover: !0,
                    viewWidth: this._width,
                    viewHeight: this._height
                }, o = 0; o < e; o++) {
                    var a = t[o];
                    a.__inHover && (n = n || (this._hoverlayer = this.getLayer(1e5)), i || (i = n.ctx).save(), 
                    a0(i, a, r, o === e - 1));
                }
                i && i.restore();
            }
        }, y.prototype.getHoverLayer = function() {
            return this.getLayer(1e5);
        }, y.prototype.paintOne = function(t, e) {
            o0(t, e);
        }, y.prototype._paintList = function(t, e, n, i) {
            var r, o, a;
            this._redrawId === i && (n = n || !1, this._updateLayerStatus(t), r = (o = this._doPaintList(t, e, n)).finished, 
            o = o.needsRefreshHover, this._needsManuallyCompositing && this._compositeManually(), 
            o && this._paintHoverList(t), r ? this.eachLayer((function(t) {
                t.afterBrush && t.afterBrush();
            })) : (a = this, Mn((function() {
                a._paintList(t, e, n, i);
            }))));
        }, y.prototype._compositeManually = function() {
            var e = this.getLayer(O1).ctx, n = this._domRoot.width, i = this._domRoot.height;
            e.clearRect(0, 0, n, i), this.eachBuiltinLayer((function(t) {
                t.virtual && e.drawImage(t.dom, 0, 0, n, i);
            }));
        }, y.prototype._doPaintList = function(d, f, g) {
            for (var y = this, m = [], v = this._opts.useDirtyRect, t = 0; t < this._zlevelList.length; t++) {
                var e = this._zlevelList[t];
                e = this._layers[e];
                e.__builtin__ && e !== this._hoverlayer && (e.__dirty || g) && m.push(e);
            }
            for (var _ = !0, x = !1, w = this, n = 0; n < m.length; n++) !function(t) {
                function e(t) {
                    var e = {
                        inHover: !1,
                        allClipped: !1,
                        prevEl: null,
                        viewWidth: y._width,
                        viewHeight: y._height
                    };
                    for (i = s; i < r.__endIndex; i++) {
                        var n = d[i];
                        if (n.__inHover && (x = !0), y._doPaintEl(n, r, v, t, e, i === r.__endIndex - 1), 
                        l && 15 < Date.now() - u) break;
                    }
                    e.prevElClipPaths && o.restore();
                }
                var i, n, r = m[t], o = r.ctx, a = v && r.createRepaintRects(d, f, w._width, w._height), s = g ? r.__startIndex : r.__drawIndex, l = !g && r.incremental && Date.now, u = l && Date.now();
                t = r.zlevel === w._zlevelList[0] ? w._backgroundColor : null;
                r.__startIndex !== r.__endIndex && (s !== r.__startIndex || (n = d[s]).incremental && n.notClear && !g) || r.clear(!1, t, a), 
                -1 === s && (console.error("For some unknown reason. drawIndex is -1"), s = r.__startIndex);
                if (a) if (0 === a.length) i = r.__endIndex; else for (var h = w.dpr, c = 0; c < a.length; ++c) {
                    var p = a[c];
                    o.save(), o.beginPath(), o.rect(p.x * h, p.y * h, p.width * h, p.height * h), o.clip(), 
                    e(p), o.restore();
                } else o.save(), e(), o.restore();
                r.__drawIndex = i, r.__drawIndex < r.__endIndex && (_ = !1);
            }(n);
            return p.wxa && E(this._layers, (function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
            })), {
                finished: _,
                needsRefreshHover: x
            };
        }, y.prototype._doPaintEl = function(t, e, n, i, r, o) {
            e = e.ctx;
            n ? (n = t.getPaintRect(), (!i || n && n.intersect(i)) && (a0(e, t, r, o), t.setPrevPaintRect(n))) : a0(e, t, r, o);
        }, y.prototype.getLayer = function(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = O1);
            var n = this._layers[t];
            return n || ((n = new L1("zr_" + t, this, this.dpr)).zlevel = t, n.__builtin__ = !0, 
            this._layerConfig[t] ? d(n, this._layerConfig[t], !0) : this._layerConfig[t - .01] && d(n, this._layerConfig[t - .01], !0), 
            e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n;
        }, y.prototype.insertLayer = function(t, e) {
            var n, i = this._layers, r = this._zlevelList, o = r.length, a = this._domRoot, s = null, l = -1;
            if (!i[t] && (n = e) && (n.__builtin__ || "function" == typeof n.resize && "function" == typeof n.refresh)) {
                if (0 < o && t > r[0]) {
                    for (l = 0; l < o - 1 && !(r[l] < t && r[l + 1] > t); l++) ;
                    s = i[r[l]];
                }
                r.splice(l + 1, 0, t), (i[t] = e).virtual || (s ? (n = s.dom).nextSibling ? a.insertBefore(e.dom, n.nextSibling) : a.appendChild(e.dom) : a.firstChild ? a.insertBefore(e.dom, a.firstChild) : a.appendChild(e.dom)), 
                e.painter || (e.painter = this);
            }
        }, y.prototype.eachLayer = function(t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, this._layers[r], r);
            }
        }, y.prototype.eachBuiltinLayer = function(t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i], o = this._layers[r];
                o.__builtin__ && t.call(e, o, r);
            }
        }, y.prototype.eachOtherLayer = function(t, e) {
            for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                var r = n[i], o = this._layers[r];
                o.__builtin__ || t.call(e, o, r);
            }
        }, y.prototype.getLayers = function() {
            return this._layers;
        }, y.prototype._updateLayerStatus = function(t) {
            function e(t) {
                r && (r.__endIndex !== t && (r.__dirty = !0), r.__endIndex = t);
            }
            if (this.eachBuiltinLayer((function(t, e) {
                t.__dirty = t.__used = !1;
            })), this._singleCanvas) for (var n = 1; n < t.length; n++) if ((s = t[n]).zlevel !== t[n - 1].zlevel || s.incremental) {
                this._needsManuallyCompositing = !0;
                break;
            }
            for (var i, r = null, o = 0, a = 0; a < t.length; a++) {
                var s, l = (s = t[a]).zlevel, u = void 0;
                i !== l && (i = l, o = 0), s.incremental ? ((u = this.getLayer(l + .001, this._needsManuallyCompositing)).incremental = !0, 
                o = 1) : u = this.getLayer(l + (0 < o ? .01 : 0), this._needsManuallyCompositing), 
                u.__builtin__ || ot("ZLevel " + l + " has been used by unkown layer " + u.id), u !== r && (u.__used = !0, 
                u.__startIndex !== a && (u.__dirty = !0), u.__startIndex = a, u.incremental ? u.__drawIndex = -1 : u.__drawIndex = a, 
                e(a), r = u), s.__dirty & mn && !s.__inHover && (u.__dirty = !0, u.incremental) && u.__drawIndex < 0 && (u.__drawIndex = a);
            }
            e(a), this.eachBuiltinLayer((function(t, e) {
                !t.__used && 0 < t.getElementCount() && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), 
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            }));
        }, y.prototype.clear = function() {
            return this.eachBuiltinLayer(this._clearLayer), this;
        }, y.prototype._clearLayer = function(t) {
            t.clear();
        }, y.prototype.setBackgroundColor = function(t) {
            this._backgroundColor = t, E(this._layers, (function(t) {
                t.setUnpainted();
            }));
        }, y.prototype.configLayer = function(t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? d(n[t], e, !0) : n[t] = e;
                for (var i = 0; i < this._zlevelList.length; i++) {
                    var r = this._zlevelList[i];
                    r !== t && r !== t + .01 || d(this._layers[r], n[t], !0);
                }
            }
        }, y.prototype.delLayer = function(t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(I(n, t), 1));
        }, y.prototype.resize = function(t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot, i = (n.style.display = "none", this._opts), r = this.root;
                if (null != t && (i.width = t), null != e && (i.height = e), t = Fy(r, 0, i), e = Fy(r, 1, i), 
                n.style.display = "", this._width !== t || e !== this._height) {
                    for (var o in n.style.width = t + "px", n.style.height = e + "px", this._layers) this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
                    this.refresh(!0);
                }
                this._width = t, this._height = e;
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(O1).resize(t, e);
            }
            return this;
        }, y.prototype.clearLayer = function(t) {
            t = this._layers[t];
            t && t.clear();
        }, y.prototype.dispose = function() {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
        }, y.prototype.getRenderedCanvas = function(t) {
            if (this._singleCanvas && !this._compositeManually) return this._layers[O1].dom;
            var e = new L1("image", this, (t = t || {}).pixelRatio || this.dpr), n = (e.initContext(), 
            e.clear(!1, t.backgroundColor || this._backgroundColor), e.ctx);
            if (t.pixelRatio <= this.dpr) {
                this.refresh();
                var i = e.dom.width, r = e.dom.height;
                this.eachLayer((function(t) {
                    t.__builtin__ ? n.drawImage(t.dom, 0, 0, i, r) : t.renderToCanvas && (n.save(), 
                    t.renderToCanvas(n), n.restore());
                }));
            } else for (var o = {
                inHover: !1,
                viewWidth: this._width,
                viewHeight: this._height
            }, a = this.storage.getDisplayList(!0), s = 0, l = a.length; s < l; s++) {
                var u = a[s];
                a0(n, u, o, s === l - 1);
            }
            return e.dom;
        }, y.prototype.getWidth = function() {
            return this._width;
        }, y.prototype.getHeight = function() {
            return this._height;
        };
        var R1 = y;
        function y(t, e, n, i) {
            this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, 
            this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
            var r, o, a = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase(), s = (e = (this._opts = n = O({}, n || {}), 
            this.dpr = n.devicePixelRatio || Sr, this._singleCanvas = a, (this.root = t).style && (Bt(t), 
            t.innerHTML = ""), this.storage = e, this._zlevelList), this._prevDisplayList = [], 
            this._layers);
            a ? (r = (a = t).width, o = a.height, null != n.width && (r = n.width), null != n.height && (o = n.height), 
            this.dpr = n.devicePixelRatio || 1, a.width = r * this.dpr, a.height = o * this.dpr, 
            this._width = r, this._height = o, (r = new L1(a, this, this.dpr)).__builtin__ = !0, 
            r.initContext(), (s[O1] = r).zlevel = O1, e.push(O1), this._domRoot = t) : (this._width = Fy(t, 0, n), 
            this._height = Fy(t, 1, n), r = this._domRoot = (o = this._width, a = this._height, 
            (s = document.createElement("div")).style.cssText = [ "position:relative", "width:" + o + "px", "height:" + a + "px", "padding:0", "margin:0", "border-width:0" ].join(";") + ";", 
            s), t.appendChild(r));
        }
        u(z1, N1 = Up), z1.prototype.init = function(t, e, n) {
            N1.prototype.init.call(this, t, e, n), this._sourceManager = new fg(this), yg(this);
        }, z1.prototype.mergeOption = function(t, e) {
            N1.prototype.mergeOption.call(this, t, e), yg(this);
        }, z1.prototype.optionUpdated = function() {
            this._sourceManager.dirty();
        }, z1.prototype.getSourceManager = function() {
            return this._sourceManager;
        }, z1.type = "dataset", z1.defaultOption = {
            seriesLayoutBy: ed
        };
        var N1, E1 = z1;
        function z1() {
            var t = null !== N1 && N1.apply(this, arguments) || this;
            return t.type = "dataset", t;
        }
        u(V1, B1 = Pg), V1.type = "dataset";
        var B1, F1 = V1;
        function V1() {
            var t = null !== B1 && B1.apply(this, arguments) || this;
            return t.type = "dataset", t;
        }
        function H1(t) {
            t.registerComponentModel(E1), t.registerComponentView(F1);
        }
        __([ function(t) {
            t.registerPainter("canvas", R1);
        }, H1 ]), __(k1);
        var W1 = {
            average: function(t) {
                for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
                return 0 === n ? NaN : e / n;
            },
            sum: function(t) {
                for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
                return e;
            },
            max: function(t) {
                for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
                return isFinite(e) ? e : NaN;
            },
            min: function(t) {
                for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
                return isFinite(e) ? e : NaN;
            },
            minmax: function(t) {
                for (var e = -1 / 0, n = -1 / 0, i = 0; i < t.length; i++) {
                    var r = t[i], o = Math.abs(r);
                    e < o && (e = o, n = r);
                }
                return isFinite(n) ? n : NaN;
            },
            nearest: function(t) {
                return t[0];
            }
        }, G1 = function(t) {
            return Math.round(t.length / 2);
        };
        function U1(t) {
            return {
                seriesType: t,
                reset: function(t, e, n) {
                    var i, r = t.getData(), o = t.get("sampling"), a = t.coordinateSystem, s = r.count();
                    10 < s && "cartesian2d" === a.type && o && (i = a.getBaseAxis(), a = a.getOtherAxis(i), 
                    i = i.getExtent(), n = n.getDevicePixelRatio(), i = Math.abs(i[1] - i[0]) * (n || 1), 
                    n = Math.round(s / i), isFinite(n)) && 1 < n && ("lttb" === o && t.setData(r.lttbDownSample(r.mapDimension(a.dim), 1 / n)), 
                    s = void 0, H(o) ? s = W1[o] : k(o) && (s = o), s) && t.setData(r.downSample(r.mapDimension(a.dim), 1 / n, s, G1));
                }
            };
        }
        u(Y1, X1 = Mg), Y1.prototype.getInitialData = function(t, e) {
            return lv(null, this, {
                useEncodeDefaulter: !0
            });
        }, Y1.prototype.getMarkerPosition = function(t, p, e) {
            var d, f, n = this.coordinateSystem;
            return n && n.clampData ? (d = n.clampData(t), f = n.dataToPoint(d), e ? E(n.getAxes(), (function(t, e) {
                if ("category" === t.type && null != p) {
                    var n = t.getTicksCoords(), i = t.getTickModel().get("alignWithLabel"), r = d[e], o = "x1" === p[e] || "y1" === p[e];
                    if (o && !i && (r += 1), !(n.length < 2)) if (2 === n.length) f[e] = t.toGlobalCoord(t.getExtent()[o ? 1 : 0]); else {
                        for (var a = void 0, s = void 0, l = 1, u = 0; u < n.length; u++) {
                            var h = n[u].coord, c = u === n.length - 1 ? n[u - 1].tickValue + l : n[u].tickValue;
                            if (c === r) {
                                s = h;
                                break;
                            }
                            if (c < r) a = h; else if (null != a && r < c) {
                                s = (h + a) / 2;
                                break;
                            }
                            1 === u && (l = c - n[0].tickValue);
                        }
                        null == s && (s = (a ? n[n.length - 1] : n[0]).coord), f[e] = t.toGlobalCoord(s);
                    }
                }
            })) : (e = (t = this.getData()).getLayout("offset"), t = t.getLayout("size"), n = n.getBaseAxis().isHorizontal() ? 0 : 1, 
            f[n] += e + t / 2), f) : [ NaN, NaN ];
        }, Y1.type = "series.__base_bar__", Y1.defaultOption = {
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod"
        };
        var X1;
        Rc = Y1;
        function Y1() {
            var t = null !== X1 && X1.apply(this, arguments) || this;
            return t.type = Y1.type, t;
        }
        Mg.registerClass(Rc);
        u(Z1, q1 = Rc), Z1.prototype.getInitialData = function() {
            return lv(null, this, {
                useEncodeDefaulter: !0,
                createInvertedIndices: !!this.get("realtimeSort", !0) || null
            });
        }, Z1.prototype.getProgressive = function() {
            return !!this.get("large") && this.get("progressive");
        }, Z1.prototype.getProgressiveThreshold = function() {
            var t = this.get("progressiveThreshold"), e = this.get("largeThreshold");
            return t = t < e ? e : t;
        }, Z1.prototype.brushSelector = function(t, e, n) {
            return n.rect(e.getItemLayout(t));
        }, Z1.type = "series.bar", Z1.dependencies = [ "grid", "polar" ], Z1.defaultOption = (ua = {
            clip: !0,
            roundCap: !1,
            showBackground: !1,
            backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)",
                borderColor: null,
                borderWidth: 0,
                borderType: "solid",
                borderRadius: 0,
                shadowBlur: 0,
                shadowColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                opacity: 1
            },
            select: {
                itemStyle: {
                    borderColor: "#212121"
                }
            },
            realtimeSort: !1
        }, d(d({}, Rc.defaultOption, !0), ua, !0));
        var q1, j1 = Z1;
        function Z1() {
            var t = null !== q1 && q1.apply(this, arguments) || this;
            return t.type = Z1.type, t;
        }
        function K1(t, e, n, i, r) {
            var o = t.getArea(), a = o.x, s = o.y, l = o.width, u = (o = o.height, n.get([ "lineStyle", "width" ]) || 2), h = (a -= u / 2, 
            s -= u / 2, l += u, o += u, l = Math.ceil(l), a !== Math.floor(a) && (a = Math.floor(a), 
            l++), new qs({
                shape: {
                    x: a,
                    y: s,
                    width: l,
                    height: o
                }
            }));
            return e && (e = (u = t.getBaseAxis()).isHorizontal(), t = u.inverse, e ? (t && (h.shape.x += l), 
            h.shape.width = 0) : (t || (h.shape.y += o), h.shape.height = 0), u = k(r) ? function(t) {
                r(t, h);
            } : null, Zh(h, {
                shape: {
                    width: l,
                    height: o,
                    x: a,
                    y: s
                }
            }, n, null, i, u)), h;
        }
        function $1(t, e, n) {
            var i = t.getArea(), r = _o(i.r0, 1), o = _o(i.r, 1), a = new $u({
                shape: {
                    cx: _o(t.cx, 1),
                    cy: _o(t.cy, 1),
                    r0: r,
                    r: o,
                    startAngle: i.startAngle,
                    endAngle: i.endAngle,
                    clockwise: i.clockwise
                }
            });
            return e && ("angle" === t.getBaseAxis().dim ? a.shape.endAngle = i.startAngle : a.shape.r = r, 
            Zh(a, {
                shape: {
                    endAngle: i.endAngle,
                    r: o
                }
            }, n)), a;
        }
        function Q1() {
            this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, 
            this.clockwise = !0;
        }
        u(ex, J1 = Z), ex.prototype.getDefaultShape = function() {
            return new Q1;
        }, ex.prototype.buildPath = function(t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), a = .5 * (o - r), s = r + a, l = e.startAngle, u = e.endAngle, h = (e = e.clockwise, 
            2 * Math.PI), c = e ? u - l < h : l - u < h, p = (h = (c || (l = u - (e ? h : -h)), 
            Math.cos(l)), Math.sin(l)), d = Math.cos(u), f = Math.sin(u);
            c ? (t.moveTo(h * r + n, p * r + i), t.arc(h * s + n, p * s + i, a, -Math.PI + l, l, !e)) : t.moveTo(h * o + n, p * o + i), 
            t.arc(n, i, o, l, u, !e), t.arc(d * s + n, f * s + i, a, u - 2 * Math.PI, u - Math.PI, !e), 
            0 !== r && t.arc(n, i, r, u, l, e);
        };
        var J1, tx = ex;
        function ex(t) {
            t = J1.call(this, t) || this;
            return t.type = "sausage", t;
        }
        function nx(t, e) {
            return t.type === e;
        }
        function ix(t, e) {
            var n, i = t.mapDimensionsAll("defaultedLabel"), r = i.length;
            if (1 === r) return null != (n = Mf(t, e, i[0])) ? n + "" : null;
            if (r) {
                for (var o = [], a = 0; a < i.length; a++) o.push(Mf(t, e, i[a]));
                return o.join(" ");
            }
        }
        function rx(t, e) {
            var n = t.mapDimensionsAll("defaultedLabel");
            if (!V(e)) return e + "";
            for (var i = [], r = 0; r < n.length; r++) {
                var o = t.getDimensionIndex(n[r]);
                0 <= o && i.push(e[o]);
            }
            return i.join(" ");
        }
        function ox(t, e, n) {
            return e * Math.sin(t) * (n ? -1 : 1);
        }
        function ax(t, e, n) {
            return e * Math.cos(t) * (n ? 1 : -1);
        }
        function sx(t, e, n) {
            t = t.get("borderRadius");
            if (null == t) return n ? {
                cornerRadius: 0
            } : null;
            V(t) || (t = [ t, t, t, t ]);
            var i = Math.abs(e.r || 0 - e.r0 || 0);
            return {
                cornerRadius: F(t, (function(t) {
                    return Gr(t, i);
                }))
            };
        }
        var lx = Math.max, ux = Math.min;
        u(fx, hx = zg), fx.prototype.render = function(t, e, n, i) {
            this._model = t, this._removeOnRenderedListener(n), this._updateDrawMode(t);
            var r = t.get("coordinateSystem");
            "cartesian2d" !== r && "polar" !== r || (this._progressiveEls = null, this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n, i));
        }, fx.prototype.incrementalPrepareRender = function(t) {
            this._clear(), this._updateDrawMode(t), this._updateLargeClip(t);
        }, fx.prototype.incrementalRender = function(t, e) {
            this._progressiveEls = [], this._incrementalRenderLarge(t, e);
        }, fx.prototype.eachRendered = function(t) {
            fc(this._progressiveEls || this.group, t);
        }, fx.prototype._updateDrawMode = function(t) {
            t = t.pipelineContext.large;
            null != this._isLargeDraw && t === this._isLargeDraw || (this._isLargeDraw = t, 
            this._clear());
        }, fx.prototype._renderNormal = function(a, t, e, n) {
            var s, i, r, l = this.group, u = a.getData(), h = this._data, c = a.coordinateSystem, p = c.getBaseAxis(), d = ("cartesian2d" === c.type ? s = p.isHorizontal() : "polar" === c.type && (s = "angle" === p.dim), 
            a.isAnimationEnabled() ? a : null), f = function(t, e) {
                t = t.get("realtimeSort", !0);
                var n = e.getBaseAxis();
                if (t && "category" === n.type && "cartesian2d" === e.type) return {
                    baseAxis: n,
                    otherAxis: e.getOtherAxis(n)
                };
            }(a, c), g = (f && this._enableRealtimeSort(f, u, e), a.get("clip", !0) || f), y = (e = u, 
            r = (i = c).getArea && i.getArea(), !nx(i, "cartesian2d") || "category" === (i = i.getBaseAxis()).type && i.onBand || (e = e.getLayout("bandWidth"), 
            i.isHorizontal() ? (r.x -= e, r.width += 2 * e) : (r.y -= e, r.height += 2 * e)), 
            r), m = (l.removeClipPath(), a.get("roundCap", !0)), v = a.get("showBackground", !0), _ = a.getModel("backgroundStyle"), x = _.get("borderRadius") || 0, w = [], b = this._backgroundEls, S = n && n.isInitSort, M = n && "changeAxisOrder" === n.type;
            function T(t) {
                var e = xx[c.type](u, t), n = (n = s, new ("polar" === c.type ? $u : qs)({
                    shape: Ax(n, e, c),
                    silent: !0,
                    z2: 0
                }));
                return n.useStyle(_.getItemStyle()), "cartesian2d" === c.type ? n.setShape("r", x) : n.setShape("cornerRadius", x), 
                w[t] = n;
            }
            u.diff(h).add((function(t) {
                var e, n, i = u.getItemModel(t), r = xx[c.type](u, t, i);
                v && T(t), u.hasValue(t) && _x[c.type](r) && (e = !1, g && (e = px[c.type](y, r)), 
                n = dx[c.type](a, u, t, r, s, d, p.model, !1, m), f && (n.forceLabelAnimation = !0), 
                Sx(n, u, t, i, r, a, s, "polar" === c.type), S ? n.attr({
                    shape: r
                }) : f ? gx(f, d, n, r, t, s, !1, !1) : Zh(n, {
                    shape: r
                }, a, t), u.setItemGraphicEl(t, n), l.add(n), n.ignore = e);
            })).update((function(t, e) {
                var n, i = u.getItemModel(t), r = xx[c.type](u, t, i), o = (v && (o = void 0, 0 === b.length ? o = T(e) : ((o = b[e]).useStyle(_.getItemStyle()), 
                "cartesian2d" === c.type ? o.setShape("r", x) : o.setShape("cornerRadius", x), w[t] = o), 
                n = xx[c.type](u, t), jh(o, {
                    shape: Ax(s, n, c)
                }, d, t)), h.getItemGraphicEl(e));
                u.hasValue(t) && _x[c.type](r) ? (n = !1, g && (n = px[c.type](y, r)) && l.remove(o), 
                o ? tc(o) : o = dx[c.type](a, u, t, r, s, d, p.model, !!o, m), f && (o.forceLabelAnimation = !0), 
                M ? (e = o.getTextContent()) && null != (e = Cc(e)).prevValue && (e.prevValue = e.value) : Sx(o, u, t, i, r, a, s, "polar" === c.type), 
                S ? o.attr({
                    shape: r
                }) : f ? gx(f, d, o, r, t, s, !0, M) : jh(o, {
                    shape: r
                }, a, t, null), u.setItemGraphicEl(t, o), o.ignore = n, l.add(o)) : l.remove(o);
            })).remove((function(t) {
                var e = h.getItemGraphicEl(t);
                e && Jh(e, a, t);
            })).execute();
            var o = this._backgroundGroup || (this._backgroundGroup = new io);
            o.removeAll();
            for (var C = 0; C < w.length; ++C) o.add(w[C]);
            l.add(o), this._backgroundEls = w, this._data = u;
        }, fx.prototype._renderLarge = function(t, e, n) {
            this._clear(), kx(t, this.group), this._updateLargeClip(t);
        }, fx.prototype._incrementalRenderLarge = function(t, e) {
            this._removeBackground(), kx(e, this.group, this._progressiveEls, !0);
        }, fx.prototype._updateLargeClip = function(t) {
            var e, n, i = t.get("clip", !0) && (i = t.coordinateSystem, r = !1, t, i ? "polar" === i.type ? $1(i, r, t) : "cartesian2d" === i.type ? K1(i, r, t, e, n) : null : null), r = this.group;
            i ? r.setClipPath(i) : r.removeClipPath();
        }, fx.prototype._enableRealtimeSort = function(t, e, n) {
            var i, r, o = this;
            e.count() && (i = t.baseAxis, this._isFirstFrame ? (this._dispatchInitSort(e, t, n), 
            this._isFirstFrame = !1) : (r = function(t) {
                t = e.getItemGraphicEl(t), t = t && t.shape;
                return t && Math.abs(i.isHorizontal() ? t.height : t.width) || 0;
            }, this._onRendered = function() {
                o._updateSortWithinSameData(e, r, i, n);
            }, n.getZr().on("rendered", this._onRendered)));
        }, fx.prototype._dataSort = function(t, e, i) {
            var r = [];
            return t.each(t.mapDimension(e.dim), (function(t, e) {
                var n = i(e);
                r.push({
                    dataIndex: e,
                    mappedValue: null == n ? NaN : n,
                    ordinalNumber: t
                });
            })), r.sort((function(t, e) {
                return e.mappedValue - t.mappedValue;
            })), {
                ordinalNumbers: F(r, (function(t) {
                    return t.ordinalNumber;
                }))
            };
        }, fx.prototype._isOrderChangedWithinSameData = function(t, e, n) {
            for (var i = n.scale, r = t.mapDimension(n.dim), o = Number.MAX_VALUE, a = 0, s = i.getOrdinalMeta().categories.length; a < s; ++a) {
                var l = t.rawIndexOf(r, i.getRawOrdinalNumber(a));
                l = l < 0 ? Number.MIN_VALUE : e(t.indexOfRawIndex(l));
                if (o < l) return !0;
                o = l;
            }
            return !1;
        }, fx.prototype._isOrderDifferentInView = function(t, e) {
            for (var n = e.scale, i = (e = n.getExtent(), Math.max(0, e[0])), r = Math.min(e[1], n.getOrdinalMeta().categories.length - 1); i <= r; ++i) if (t.ordinalNumbers[i] !== n.getRawOrdinalNumber(i)) return !0;
        }, fx.prototype._updateSortWithinSameData = function(t, e, n, i) {
            this._isOrderChangedWithinSameData(t, e, n) && (t = this._dataSort(t, n, e), this._isOrderDifferentInView(t, n)) && (this._removeOnRenderedListener(i), 
            i.dispatchAction({
                type: "changeAxisOrder",
                componentType: n.dim + "Axis",
                axisId: n.index,
                sortInfo: t
            }));
        }, fx.prototype._dispatchInitSort = function(e, n, t) {
            var i = n.baseAxis, r = this._dataSort(e, i, (function(t) {
                return e.get(e.mapDimension(n.otherAxis.dim), t);
            }));
            t.dispatchAction({
                type: "changeAxisOrder",
                componentType: i.dim + "Axis",
                isInitSort: !0,
                axisId: i.index,
                sortInfo: r
            });
        }, fx.prototype.remove = function(t, e) {
            this._clear(this._model), this._removeOnRenderedListener(e);
        }, fx.prototype.dispose = function(t, e) {
            this._removeOnRenderedListener(e);
        }, fx.prototype._removeOnRenderedListener = function(t) {
            this._onRendered && (t.getZr().off("rendered", this._onRendered), this._onRendered = null);
        }, fx.prototype._clear = function(e) {
            var t = this.group, n = this._data;
            e && e.isAnimationEnabled() && n && !this._isLargeDraw ? (this._removeBackground(), 
            this._backgroundEls = [], n.eachItemGraphicEl((function(t) {
                Jh(t, e, pl(t).dataIndex);
            }))) : t.removeAll(), this._data = null, this._isFirstFrame = !0;
        }, fx.prototype._removeBackground = function() {
            this.group.remove(this._backgroundGroup), this._backgroundGroup = null;
        }, fx.type = "bar";
        var hx, cx = fx, px = {
            cartesian2d: function(t, e) {
                var n = e.width < 0 ? -1 : 1, i = e.height < 0 ? -1 : 1, r = (n < 0 && (e.x += e.width, 
                e.width = -e.width), i < 0 && (e.y += e.height, e.height = -e.height), t.x + t.width), o = t.y + t.height, a = lx(e.x, t.x), s = ux(e.x + e.width, r), l = (t = lx(e.y, t.y), 
                ux(e.y + e.height, o)), u = s < a, h = l < t;
                return e.x = u && r < a ? s : a, e.y = h && o < t ? l : t, e.width = u ? 0 : s - a, 
                e.height = h ? 0 : l - t, n < 0 && (e.x += e.width, e.width = -e.width), i < 0 && (e.y += e.height, 
                e.height = -e.height), u || h;
            },
            polar: function(t, e) {
                var n, i = e.r0 <= e.r ? 1 : -1, r = (i < 0 && (n = e.r, e.r = e.r0, e.r0 = n), 
                ux(e.r, t.r));
                t = lx(e.r0, t.r0), r = (e.r = r) - (e.r0 = t) < 0;
                return i < 0 && (n = e.r, e.r = e.r0, e.r0 = n), r;
            }
        }, dx = {
            cartesian2d: function(t, e, n, i, r, o, a, s, l) {
                i = new qs({
                    shape: O({}, i),
                    z2: 1
                });
                return i.__dataIndex = n, i.name = "item", o && (i.shape[r ? "height" : "width"] = 0), 
                i;
            },
            polar: function(t, e, n, i, r, o, a, s, l) {
                l = !r && l ? tx : $u;
                var w, b, u = new l({
                    shape: i,
                    z2: 1
                }), h = (u.name = "item", bx(r));
                return u.calculateTextPosition = (w = h, b = ({
                    isRoundCap: l === tx
                } || {}).isRoundCap, function(t, e, n) {
                    var i = e.position;
                    if (!i || i instanceof Array) return Ur(t, e, n);
                    i = w(i);
                    var r = null != e.distance ? e.distance : 5, o = this.shape, a = o.cx, s = o.cy, l = o.r, u = o.r0, h = (l + u) / 2, c = o.startAngle, p = o.endAngle, d = (c + p) / 2, f = b ? Math.abs(l - u) / 2 : 0, g = Math.cos, y = Math.sin, m = a + l * g(c), v = s + l * y(c), _ = "left", x = "top";
                    switch (i) {
                      case "startArc":
                        m = a + (u - r) * g(d), v = s + (u - r) * y(d), _ = "center", x = "top";
                        break;

                      case "insideStartArc":
                        m = a + (u + r) * g(d), v = s + (u + r) * y(d), _ = "center", x = "bottom";
                        break;

                      case "startAngle":
                        m = a + h * g(c) + ox(c, r + f, !1), v = s + h * y(c) + ax(c, r + f, !1), _ = "right", 
                        x = "middle";
                        break;

                      case "insideStartAngle":
                        m = a + h * g(c) + ox(c, f - r, !1), v = s + h * y(c) + ax(c, f - r, !1), _ = "left", 
                        x = "middle";
                        break;

                      case "middle":
                        m = a + h * g(d), v = s + h * y(d), _ = "center", x = "middle";
                        break;

                      case "endArc":
                        m = a + (l + r) * g(d), v = s + (l + r) * y(d), _ = "center", x = "bottom";
                        break;

                      case "insideEndArc":
                        m = a + (l - r) * g(d), v = s + (l - r) * y(d), _ = "center", x = "top";
                        break;

                      case "endAngle":
                        m = a + h * g(p) + ox(p, r + f, !0), v = s + h * y(p) + ax(p, r + f, !0), _ = "left", 
                        x = "middle";
                        break;

                      case "insideEndAngle":
                        m = a + h * g(p) + ox(p, f - r, !0), v = s + h * y(p) + ax(p, f - r, !0), _ = "right", 
                        x = "middle";
                        break;

                      default:
                        return Ur(t, e, n);
                    }
                    return (t = t || {}).x = m, t.y = v, t.align = _, t.verticalAlign = x, t;
                }), o && (h = {}, u.shape[l = r ? "r" : "endAngle"] = r ? i.r0 : i.startAngle, h[l] = i[l], 
                (s ? jh : Zh)(u, {
                    shape: h
                }, o)), u;
            }
        };
        function fx() {
            var t = hx.call(this) || this;
            return t.type = fx.type, t._isFirstFrame = !0, t;
        }
        function gx(t, e, n, i, r, o, a, s) {
            var l;
            o = o ? (l = {
                x: i.x,
                width: i.width
            }, {
                y: i.y,
                height: i.height
            }) : (l = {
                y: i.y,
                height: i.height
            }, {
                x: i.x,
                width: i.width
            });
            s || (a ? jh : Zh)(n, {
                shape: o
            }, e, r, null), (a ? jh : Zh)(n, {
                shape: l
            }, e ? t.baseAxis.model : null, r);
        }
        function yx(t, e) {
            for (var n = 0; n < e.length; n++) if (!isFinite(t[e[n]])) return 1;
        }
        var mx = [ "x", "y", "width", "height" ], vx = [ "cx", "cy", "r", "startAngle", "endAngle" ], _x = {
            cartesian2d: function(t) {
                return !yx(t, mx);
            },
            polar: function(t) {
                return !yx(t, vx);
            }
        }, xx = {
            cartesian2d: function(t, e, n) {
                t = t.getItemLayout(e);
                var i = n && (e = t, i = n.get([ "itemStyle", "borderColor" ])) && "none" !== i ? (i = n.get([ "itemStyle", "borderWidth" ]) || 0, 
                n = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width), e = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height), 
                Math.min(i, n, e)) : 0;
                n = 0 < t.width ? 1 : -1, e = 0 < t.height ? 1 : -1;
                return {
                    x: t.x + n * i / 2,
                    y: t.y + e * i / 2,
                    width: t.width - n * i,
                    height: t.height - e * i
                };
            },
            polar: function(t, e, n) {
                t = t.getItemLayout(e);
                return {
                    cx: t.cx,
                    cy: t.cy,
                    r0: t.r0,
                    r: t.r,
                    startAngle: t.startAngle,
                    endAngle: t.endAngle,
                    clockwise: t.clockwise
                };
            }
        };
        function bx(t) {
            return e = t ? "Arc" : "Angle", function(t) {
                switch (t) {
                  case "start":
                  case "insideStart":
                  case "end":
                  case "insideEnd":
                    return t + e;

                  default:
                    return t;
                }
            };
            var e;
        }
        function Sx(t, e, n, i, r, o, a, s) {
            var l = e.getItemVisual(n, "style"), u = (s ? o.get("roundCap") || (O(u = t.shape, sx(i.getModel("itemStyle"), u, !0)), 
            t.setShape(u)) : (u = i.get([ "itemStyle", "borderRadius" ]) || 0, t.setShape("r", u)), 
            t.useStyle(l), i.getShallow("cursor")), h = (u = (u && t.attr("cursor", u), s ? a ? r.r >= r.r0 ? "endArc" : "startArc" : r.endAngle >= r.startAngle ? "endAngle" : "startAngle" : a ? 0 <= r.height ? "bottom" : "top" : 0 <= r.width ? "right" : "left"), 
            _c(i));
            l = (vc(t, h, {
                labelFetcher: o,
                labelDataIndex: n,
                defaultText: ix(o.getData(), n),
                inheritColor: l.fill,
                defaultOpacity: l.opacity,
                defaultOutsidePosition: u
            }), t.getTextContent()), h = (s && l && (s = i.get([ "label", "position" ]), t.textConfig.inside = "middle" === s || null, 
            function(t, e, n, i) {
                if (W(i)) t.setTextConfig({
                    rotation: i
                }); else if (V(e)) t.setTextConfig({
                    rotation: 0
                }); else {
                    i = t.shape;
                    var r, o = i.clockwise ? i.startAngle : i.endAngle, a = i.clockwise ? i.endAngle : i.startAngle, s = (o + a) / 2;
                    i = n(e);
                    switch (i) {
                      case "startArc":
                      case "insideStartArc":
                      case "middle":
                      case "insideEndArc":
                      case "endArc":
                        r = s;
                        break;

                      case "startAngle":
                      case "insideStartAngle":
                        r = o;
                        break;

                      case "endAngle":
                      case "insideEndAngle":
                        r = a;
                        break;

                      default:
                        return t.setTextConfig({
                            rotation: 0
                        });
                    }
                    n = 1.5 * Math.PI - r;
                    "middle" === i && n > Math.PI / 2 && n < 1.5 * Math.PI && (n -= Math.PI), t.setTextConfig({
                        rotation: n
                    });
                }
            }(t, "outside" === s ? u : s, bx(a), i.get([ "label", "rotate" ]))), u = l, s = h, 
            a = o.getRawValue(n), l = function(t) {
                return rx(e, t);
            }, u && ((u = Cc(u)).prevValue = u.value, u.value = a, a = s.normal, u.valueAnimation = a.get("valueAnimation"), 
            u.valueAnimation) && (u.precision = a.get("precision"), u.defaultInterpolatedText = l, 
            u.statesModels = s), i.getModel([ "emphasis" ]));
            eu(t, h.get("focus"), h.get("blurScope"), h.get("disabled")), ru(t, i), null != (o = r).startAngle && null != o.endAngle && o.startAngle === o.endAngle && (t.style.fill = "none", 
            t.style.stroke = "none", E(t.states, (function(t) {
                t.style && (t.style.fill = t.style.stroke = "none");
            })));
        }
        function Mx() {}
        u(Ix, Tx = Z), Ix.prototype.getDefaultShape = function() {
            return new Mx;
        }, Ix.prototype.buildPath = function(t, e) {
            for (var n = e.points, i = this.baseDimIdx, r = 1 - this.baseDimIdx, o = [], a = [], s = this.barWidth, l = 0; l < n.length; l += 3) a[i] = s, 
            a[r] = n[l + 2], o[i] = n[l + i], o[r] = n[l + r], t.rect(o[0], o[1], a[0], a[1]);
        };
        var Tx, Cx = Ix;
        function Ix(t) {
            t = Tx.call(this, t) || this;
            return t.type = "largeBar", t;
        }
        function kx(t, e, n, i) {
            var r = t.getData(), o = r.getLayout("valueAxisHorizontal") ? 1 : 0, a = r.getLayout("largeDataIndices"), s = r.getLayout("size"), l = t.getModel("backgroundStyle"), u = r.getLayout("largeBackgroundPoints");
            l = (u && ((u = new Cx({
                shape: {
                    points: u
                },
                incremental: !!i,
                silent: !0,
                z2: 0
            })).baseDimIdx = o, u.largeDataIndices = a, u.barWidth = s, u.useStyle(l.getItemStyle()), 
            e.add(u), n) && n.push(u), new Cx({
                shape: {
                    points: r.getLayout("largePoints")
                },
                incremental: !!i,
                ignoreCoarsePointer: !0,
                z2: 1
            }));
            l.baseDimIdx = o, l.largeDataIndices = a, l.barWidth = s, e.add(l), l.useStyle(r.getVisual("style")), 
            pl(l).seriesIndex = t.seriesIndex, t.get("silent") || (l.on("mousedown", Dx), l.on("mousemove", Dx)), 
            n && n.push(l);
        }
        var Dx = Ug((function(t) {
            t = function(t, e, n) {
                for (var i = t.baseDimIdx, r = 1 - i, o = t.shape.points, a = t.largeDataIndices, s = [], l = [], u = t.barWidth, h = 0, c = o.length / 3; h < c; h++) {
                    var p = 3 * h;
                    if (l[i] = u, l[r] = o[2 + p], s[i] = o[p + i], s[r] = o[p + r], l[r] < 0 && (s[r] += l[r], 
                    l[r] = -l[r]), s[0] <= e && e <= s[0] + l[0] && s[1] <= n && n <= s[1] + l[1]) return a[h];
                }
                return -1;
            }(this, t.offsetX, t.offsetY);
            pl(this).dataIndex = 0 <= t ? t : null;
        }), 30, !1);
        function Ax(t, e, n) {
            var i, r;
            return nx(n, "cartesian2d") ? (r = e, i = n.getArea(), {
                x: (t ? r : i).x,
                y: (t ? i : r).y,
                width: (t ? r : i).width,
                height: (t ? i : r).height
            }) : (r = e, {
                cx: (i = n.getArea()).cx,
                cy: i.cy,
                r0: (t ? i : r).r0,
                r: (t ? i : r).r,
                startAngle: t ? r.startAngle : 0,
                endAngle: t ? r.endAngle : 2 * Math.PI
            });
        }
        __((function(t) {
            t.registerChartView(cx), t.registerSeriesModel(j1), t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, dt(Bv, "bar")), 
            t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, {
                seriesType: "bar",
                plan: Rg(),
                reset: function(t) {
                    var e, x, n, w, b, S, i, r, M, T, C, I, k, D, A, L;
                    if (Fv(t)) return e = t.getData(), i = (x = t.coordinateSystem).getBaseAxis(), n = x.getOtherAxis(i), 
                    w = e.getDimensionIndex(e.mapDimension(n.dim)), b = e.getDimensionIndex(e.mapDimension(i.dim)), 
                    S = t.get("showBackground", !0), i = e.mapDimension(n.dim), r = e.getCalculationInfo("stackResultDimension"), 
                    M = av(e, i) && !!e.getCalculationInfo("stackedOnSeries"), T = n.isHorizontal(), 
                    C = n.toGlobalCoord(n.dataToCoord("log" === n.type ? 1 : 0)), I = Vv(t), k = t.get("barMinHeight") || 0, 
                    D = r && e.getDimensionIndex(r), A = e.getLayout("size"), L = e.getLayout("offset"), 
                    {
                        progress: function(t, e) {
                            for (var n, i = t.count, r = I && Pv(3 * i), o = I && S && Pv(3 * i), a = I && Pv(i), s = x.master.getRect(), l = T ? s.width : s.height, u = e.getStore(), h = 0; null != (n = t.next()); ) {
                                var c, p = u.get(M ? D : w, n), d = u.get(b, n), f = C, g = void 0, y = (M && (g = +p - u.get(w, n)), 
                                void 0), m = void 0, v = void 0, _ = void 0;
                                T ? (c = x.dataToPoint([ p, d ]), y = f = M ? x.dataToPoint([ g, d ])[0] : f, m = c[1] + L, 
                                v = c[0] - f, _ = A, Math.abs(v) < k && (v = (v < 0 ? -1 : 1) * k)) : (c = x.dataToPoint([ d, p ]), 
                                M && (f = x.dataToPoint([ d, g ])[1]), y = c[0] + L, m = f, v = A, _ = c[1] - f, 
                                Math.abs(_) < k && (_ = (_ <= 0 ? -1 : 1) * k)), I ? (r[h] = y, r[h + 1] = m, r[h + 2] = T ? v : _, 
                                o && (o[h] = T ? s.x : y, o[h + 1] = T ? m : s.y, o[h + 2] = l), a[n] = n) : e.setItemLayout(n, {
                                    x: y,
                                    y: m,
                                    width: v,
                                    height: _
                                }), h += 3;
                            }
                            I && e.setLayout({
                                largePoints: r,
                                largeDataIndices: a,
                                largeBackgroundPoints: o,
                                valueAxisHorizontal: T
                            });
                        }
                    };
                }
            }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, U1("bar")), t.registerAction({
                type: "changeAxisOrder",
                event: "changeAxisOrder",
                update: "update"
            }, (function(e, t) {
                var n = e.componentType || "series";
                t.eachComponent({
                    mainType: n,
                    query: e
                }, (function(t) {
                    e.sortInfo && t.axis.setCategorySortInfo(e.sortInfo);
                }));
            }));
        }));
        u(Ox, Lx = Mg), Ox.prototype.getInitialData = function(t) {
            return lv(null, this, {
                useEncodeDefaulter: !0
            });
        }, Ox.prototype.getLegendIcon = function(t) {
            var e = new io, n = Ry("line", 0, t.itemHeight / 2, t.itemWidth, 0, t.lineStyle.stroke, !1), i = (n = (e.add(n), 
            n.setStyle(t.lineStyle), this.getData().getVisual("symbol")), this.getData().getVisual("symbolRotate")), r = (n = "none" === n ? "circle" : n, 
            .8 * t.itemHeight);
            r = Ry(n, (t.itemWidth - r) / 2, (t.itemHeight - r) / 2, r, r, t.itemStyle.fill), 
            i = (e.add(r), r.setStyle(t.itemStyle), "inherit" === t.iconRotate ? i : t.iconRotate || 0);
            return r.rotation = i * Math.PI / 180, r.setOrigin([ t.itemWidth / 2, t.itemHeight / 2 ]), 
            -1 < n.indexOf("empty") && (r.style.stroke = r.style.fill, r.style.fill = "#fff", 
            r.style.lineWidth = 2), e;
        }, Ox.type = "series.line", Ox.dependencies = [ "grid", "polar" ], Ox.defaultOption = {
            z: 3,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            clip: !0,
            label: {
                position: "top"
            },
            endLabel: {
                show: !1,
                valueAnimation: !0,
                distance: 8
            },
            lineStyle: {
                width: 2,
                type: "solid"
            },
            emphasis: {
                scale: !0
            },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0,
            universalTransition: {
                divideShape: "clone"
            },
            triggerLineEvent: !1
        };
        var Lx, Px = Ox;
        function Ox() {
            var t = null !== Lx && Lx.apply(this, arguments) || this;
            return t.type = Ox.type, t.hasSymbolVisual = !0, t;
        }
        u(Ex, Rx = io), Ex.prototype._createSymbol = function(t, e, n, i, r) {
            this.removeAll();
            r = Ry(t, -1, -1, 2, 2, null, r);
            r.attr({
                z2: 100,
                culling: !0,
                scaleX: i[0] / 2,
                scaleY: i[1] / 2
            }), r.drift = zx, this._symbolType = t, this.add(r);
        }, Ex.prototype.stopSymbolAnimation = function(t) {
            this.childAt(0).stopAnimation(null, t);
        }, Ex.prototype.getSymbolType = function() {
            return this._symbolType;
        }, Ex.prototype.getSymbolPath = function() {
            return this.childAt(0);
        }, Ex.prototype.highlight = function() {
            Gl(this.childAt(0));
        }, Ex.prototype.downplay = function() {
            Ul(this.childAt(0));
        }, Ex.prototype.setZ = function(t, e) {
            var n = this.childAt(0);
            n.zlevel = t, n.z = e;
        }, Ex.prototype.setDraggable = function(t, e) {
            var n = this.childAt(0);
            n.draggable = t, n.cursor = !e && t ? "move" : n.cursor;
        }, Ex.prototype.updateData = function(t, e, n, i) {
            this.silent = !1;
            var r, o, a, s = t.getItemVisual(e, "symbol") || "circle", l = t.hostModel, u = Ex.getSymbolSize(t, e), h = s !== this._symbolType, c = i && i.disableAnimation;
            h ? (r = t.getItemVisual(e, "symbolKeepAspect"), this._createSymbol(s, t, e, u, r)) : ((a = this.childAt(0)).silent = !1, 
            o = {
                scaleX: u[0] / 2,
                scaleY: u[1] / 2
            }, c ? a.attr(o) : jh(a, o, l, e), tc(a)), this._updateCommon(t, e, u, n, i), h && (a = this.childAt(0), 
            c || (o = {
                scaleX: this._sizeX,
                scaleY: this._sizeY,
                style: {
                    opacity: a.style.opacity
                }
            }, a.scaleX = a.scaleY = 0, a.style.opacity = 0, Zh(a, o, l, e))), c && this.childAt(0).stopAnimation("leave");
        }, Ex.prototype._updateCommon = function(e, t, n, i, r) {
            var o, a, s, l, u, h, c, p, d = this.childAt(0), f = e.hostModel, g = (i && (o = i.emphasisItemStyle, 
            s = i.blurItemStyle, a = i.selectItemStyle, l = i.focus, u = i.blurScope, c = i.labelStatesModels, 
            p = i.hoverScale, y = i.cursorStyle, h = i.emphasisDisabled), i && !e.hasItemOption || (o = (g = (i = i && i.itemModel ? i.itemModel : e.getItemModel(t)).getModel("emphasis")).getModel("itemStyle").getItemStyle(), 
            a = i.getModel([ "select", "itemStyle" ]).getItemStyle(), s = i.getModel([ "blur", "itemStyle" ]).getItemStyle(), 
            l = g.get("focus"), u = g.get("blurScope"), h = g.get("disabled"), c = _c(i), p = g.getShallow("scale"), 
            y = i.getShallow("cursor")), e.getItemVisual(t, "symbolRotate")), y = (i = (d.attr("rotation", (g || 0) * Math.PI / 180 || 0), 
            Ny(e.getItemVisual(t, "symbolOffset"), n)), g = (i && (d.x = i[0], d.y = i[1]), 
            y && d.attr("cursor", y), e.getItemVisual(t, "style")), i = g.fill, d instanceof Fs ? (y = d.style, 
            d.useStyle(O({
                image: y.image,
                x: y.x,
                y: y.y,
                width: y.width,
                height: y.height
            }, g))) : (d.__isEmptyBrush ? d.useStyle(O({}, g)) : d.useStyle(g), d.style.decal = null, 
            d.setColor(i, r && r.symbolInnerColor), d.style.strokeNoScale = !0), e.getItemVisual(t, "liftZ")), m = this._z2, v = (null != y ? null == m && (this._z2 = d.z2, 
            d.z2 += y) : null != m && (d.z2 = m, this._z2 = null), r && r.useNameLabel);
            y = (vc(d, c, {
                labelFetcher: f,
                labelDataIndex: t,
                defaultText: function(t) {
                    return v ? e.getName(t) : ix(e, t);
                },
                inheritColor: i,
                defaultOpacity: g.opacity
            }), this._sizeX = n[0] / 2, this._sizeY = n[1] / 2, d.ensureState("emphasis")), 
            m = (y.style = o, d.ensureState("select").style = a, d.ensureState("blur").style = s, 
            null == p || !0 === p ? Math.max(1.1, 3 / this._sizeY) : isFinite(p) && 0 < p ? +p : 1);
            y.scaleX = this._sizeX * m, y.scaleY = this._sizeY * m, this.setSymbolScale(1), 
            eu(this, l, u, h);
        }, Ex.prototype.setSymbolScale = function(t) {
            this.scaleX = this.scaleY = t;
        }, Ex.prototype.fadeOut = function(t, e, n) {
            var i = this.childAt(0), r = pl(this).dataIndex, o = n && n.animation;
            this.silent = i.silent = !0, n && n.fadeLabel ? (n = i.getTextContent()) && $h(n, {
                style: {
                    opacity: 0
                }
            }, e, {
                dataIndex: r,
                removeOpt: o,
                cb: function() {
                    i.removeTextContent();
                }
            }) : i.removeTextContent(), $h(i, {
                style: {
                    opacity: 0
                },
                scaleX: 0,
                scaleY: 0
            }, e, {
                dataIndex: r,
                cb: t,
                removeOpt: o
            });
        }, Ex.getSymbolSize = function(t, e) {
            return [ (t = V(t = t.getItemVisual(e, "symbolSize")) ? t : [ +t, +t ])[0] || 0, t[1] || 0 ];
        };
        var Rx, Nx = Ex;
        function Ex(t, e, n, i) {
            var r = Rx.call(this) || this;
            return r.updateData(t, e, n, i), r;
        }
        function zx(t, e) {
            this.parent.drift(t, e);
        }
        function Bx(t, e, n, i) {
            return e && !isNaN(e[0]) && !isNaN(e[1]) && (!i.isIgnore || !i.isIgnore(n)) && (!i.clipShape || i.clipShape.contain(e[0], e[1])) && "none" !== t.getItemVisual(n, "symbol");
        }
        function Fx(t) {
            return (t = null == t || P(t) ? t : {
                isIgnore: t
            }) || {};
        }
        function Vx(t) {
            t = t.hostModel;
            var e = t.getModel("emphasis");
            return {
                emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
                blurItemStyle: t.getModel([ "blur", "itemStyle" ]).getItemStyle(),
                selectItemStyle: t.getModel([ "select", "itemStyle" ]).getItemStyle(),
                focus: e.get("focus"),
                blurScope: e.get("blurScope"),
                emphasisDisabled: e.get("disabled"),
                hoverScale: e.get("scale"),
                labelStatesModels: _c(t),
                cursorStyle: t.get("cursor")
            };
        }
        Wx.prototype.updateData = function(o, a) {
            this._progressiveEls = null, a = Fx(a);
            var s = this.group, l = o.hostModel, u = this._data, h = this._SymbolCtor, c = a.disableAnimation, p = Vx(o), d = {
                disableAnimation: c
            }, f = a.getSymbolPoint || function(t) {
                return o.getItemLayout(t);
            };
            u || s.removeAll(), o.diff(u).add((function(t) {
                var e, n = f(t);
                Bx(o, n, t, a) && ((e = new h(o, t, p, d)).setPosition(n), o.setItemGraphicEl(t, e), 
                s.add(e));
            })).update((function(t, e) {
                e = u.getItemGraphicEl(e);
                var n, i, r = f(t);
                Bx(o, r, t, a) ? (n = o.getItemVisual(t, "symbol") || "circle", i = e && e.getSymbolType && e.getSymbolType(), 
                !e || i && i !== n ? (s.remove(e), (e = new h(o, t, p, d)).setPosition(r)) : (e.updateData(o, t, p, d), 
                i = {
                    x: r[0],
                    y: r[1]
                }, c ? e.attr(i) : jh(e, i, l)), s.add(e), o.setItemGraphicEl(t, e)) : s.remove(e);
            })).remove((function(t) {
                var e = u.getItemGraphicEl(t);
                e && e.fadeOut((function() {
                    s.remove(e);
                }), l);
            })).execute(), this._getSymbolPoint = f, this._data = o;
        }, Wx.prototype.updateLayout = function() {
            var n = this, t = this._data;
            t && t.eachItemGraphicEl((function(t, e) {
                e = n._getSymbolPoint(e);
                t.setPosition(e), t.markRedraw();
            }));
        }, Wx.prototype.incrementalPrepareUpdate = function(t) {
            this._seriesScope = Vx(t), this._data = null, this.group.removeAll();
        }, Wx.prototype.incrementalUpdate = function(t, e, n) {
            function i(t) {
                t.isGroup || (t.incremental = !0, t.ensureState("emphasis").hoverLayer = !0);
            }
            this._progressiveEls = [], n = Fx(n);
            for (var r = t.start; r < t.end; r++) {
                var o, a = e.getItemLayout(r);
                Bx(e, a, r, n) && ((o = new this._SymbolCtor(e, r, this._seriesScope)).traverse(i), 
                o.setPosition(a), this.group.add(o), e.setItemGraphicEl(r, o), this._progressiveEls.push(o));
            }
        }, Wx.prototype.eachRendered = function(t) {
            fc(this._progressiveEls || this.group, t);
        }, Wx.prototype.remove = function(t) {
            var e = this.group, n = this._data;
            n && t ? n.eachItemGraphicEl((function(t) {
                t.fadeOut((function() {
                    e.remove(t);
                }), n.hostModel);
            })) : e.removeAll();
        };
        var Hx = Wx;
        function Wx(t) {
            this.group = new io, this._SymbolCtor = t || Nx;
        }
        function Gx(t, e, n) {
            var i = t.getBaseAxis(), r = t.getOtherAxis(i), o = (n = (n, a = 0, o = (o = r).scale.getExtent(), 
            "start" === n ? a = o[0] : "end" === n ? a = o[1] : W(n) && !isNaN(n) ? a = n : 0 < o[0] ? a = o[0] : o[1] < 0 && (a = o[1]), 
            a), i.dim), a = r.dim, s = (i = e.mapDimension(a), r = e.mapDimension(o), "x" === a || "radius" === a ? 1 : 0), l = (t = F(t.dimensions, (function(t) {
                return e.mapDimension(t);
            })), !1), u = e.getCalculationInfo("stackResultDimension");
            return av(e, t[0]) && (l = !0, t[0] = u), av(e, t[1]) && (l = !0, t[1] = u), {
                dataDimsForPoint: t,
                valueStart: n,
                valueAxisDim: a,
                baseAxisDim: o,
                stacked: !!l,
                valueDim: i,
                baseDim: r,
                baseDataOffset: s,
                stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
            };
        }
        function Ux(t, e, n, i) {
            var r = NaN, o = (t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), 
            isNaN(r) && (r = t.valueStart), t.baseDataOffset), a = [];
            return a[o] = n.get(t.baseDim, i), a[1 - o] = r, e.dataToPoint(a);
        }
        var Xx = Math.min, Yx = Math.max;
        function qx(t, e) {
            return isNaN(t) || isNaN(e);
        }
        function jx(t, e, n, i, r, o, a, s, l) {
            for (var u, h, c, p, d = n, f = 0; f < i; f++) {
                var g = e[2 * d], y = e[2 * d + 1];
                if (r <= d || d < 0) break;
                if (qx(g, y)) {
                    if (l) {
                        d += o;
                        continue;
                    }
                    break;
                }
                if (d === n) t[0 < o ? "moveTo" : "lineTo"](g, y), c = g, p = y; else {
                    var m = g - u, v = y - h;
                    if (m * m + v * v < .5) {
                        d += o;
                        continue;
                    }
                    if (0 < a) {
                        for (var _ = d + o, x = e[2 * _], w = e[2 * _ + 1]; x === g && w === y && f < i; ) f++, 
                        d += o, x = e[2 * (_ += o)], w = e[2 * _ + 1], g = e[2 * d], y = e[2 * d + 1];
                        var b = f + 1;
                        if (l) for (;qx(x, w) && b < i; ) b++, x = e[2 * (_ += o)], w = e[2 * _ + 1];
                        m = 0, v = 0;
                        var S, M, T, C, I, k, D, A, L, P = void 0, O = void 0;
                        i <= b || qx(x, w) ? (D = g, A = y) : (m = x - u, v = w - h, S = g - u, M = x - g, 
                        T = y - h, C = w - y, k = I = void 0, O = "x" === s ? (D = g - (L = 0 < m ? 1 : -1) * (I = Math.abs(S)) * a, 
                        A = y, P = g + L * (k = Math.abs(M)) * a, y) : "y" === s ? (D = g, A = y - (L = 0 < v ? 1 : -1) * (I = Math.abs(T)) * a, 
                        P = g, y + L * (k = Math.abs(C)) * a) : (I = Math.sqrt(S * S + T * T), D = g - m * a * (1 - (S = (k = Math.sqrt(M * M + C * C)) / (k + I))), 
                        A = y - v * a * (1 - S), O = y + v * a * S, P = Xx(P = g + m * a * S, Yx(x, g)), 
                        O = Xx(O, Yx(w, y)), P = Yx(P, Xx(x, g)), A = y - (v = (O = Yx(O, Xx(w, y))) - y) * I / k, 
                        D = Xx(D = g - (m = P - g) * I / k, Yx(u, g)), A = Xx(A, Yx(h, y)), P = g + (m = g - (D = Yx(D, Xx(u, g)))) * k / I, 
                        y + (v = y - (A = Yx(A, Xx(h, y)))) * k / I)), t.bezierCurveTo(c, p, D, A, g, y), 
                        c = P, p = O;
                    } else t.lineTo(g, y);
                }
                u = g, h = y, d += o;
            }
            return f;
        }
        function Zx() {
            this.smooth = 0, this.smoothConstraint = !0;
        }
        u(Qx, Kx = Z), Qx.prototype.getDefaultStyle = function() {
            return {
                stroke: "#000",
                fill: null
            };
        }, Qx.prototype.getDefaultShape = function() {
            return new Zx;
        }, Qx.prototype.buildPath = function(t, e) {
            var n = e.points, i = 0, r = n.length / 2;
            if (e.connectNulls) {
                for (;0 < r && qx(n[2 * r - 2], n[2 * r - 1]); r--) ;
                for (;i < r && qx(n[2 * i], n[2 * i + 1]); i++) ;
            }
            for (;i < r; ) i += jx(t, n, i, r, r, 1, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
        }, Qx.prototype.getPointOn = function(t, e) {
            this.path || (this.createPathProxy(), this.buildPath(this.path, this.shape));
            for (var n, i, r = this.path.data, o = fs.CMD, a = "x" === e, s = [], l = 0; l < r.length; ) {
                var u, h = void 0, c = void 0;
                switch (r[l++]) {
                  case o.M:
                    n = r[l++], i = r[l++];
                    break;

                  case o.L:
                    var p;
                    h = r[l++], c = r[l++];
                    if ((u = a ? (t - n) / (h - n) : (t - i) / (c - i)) <= 1 && 0 <= u) return p = a ? (c - i) * u + i : (h - n) * u + n, 
                    a ? [ t, p ] : [ p, t ];
                    n = h, i = c;
                    break;

                  case o.C:
                    h = r[l++], c = r[l++];
                    var d = r[l++], f = r[l++], g = r[l++], y = r[l++], m = a ? Bn(n, h, d, g, t, s) : Bn(i, c, f, y, t, s);
                    if (0 < m) for (var v = 0; v < m; v++) {
                        var _ = s[v];
                        if (_ <= 1 && 0 <= _) return p = a ? En(i, c, f, y, _) : En(n, h, d, g, _), a ? [ t, p ] : [ p, t ];
                    }
                    n = g, i = y;
                }
            }
        };
        var Kx, $x = Qx;
        function Qx(t) {
            t = Kx.call(this, t) || this;
            return t.type = "ec-polyline", t;
        }
        u(rw, tw = Zx);
        var Jx, tw, ew = rw, nw = (u(iw, Jx = Z), iw.prototype.getDefaultShape = function() {
            return new ew;
        }, iw.prototype.buildPath = function(t, e) {
            var n = e.points, i = e.stackedOnPoints, r = 0, o = n.length / 2, a = e.smoothMonotone;
            if (e.connectNulls) {
                for (;0 < o && qx(n[2 * o - 2], n[2 * o - 1]); o--) ;
                for (;r < o && qx(n[2 * r], n[2 * r + 1]); r++) ;
            }
            for (;r < o; ) {
                var s = jx(t, n, r, o, o, 1, e.smooth, a, e.connectNulls);
                jx(t, i, r + s - 1, s, o, -1, e.stackedOnSmooth, a, e.connectNulls), r += s + 1, 
                t.closePath();
            }
        }, iw);
        function iw(t) {
            t = Jx.call(this, t) || this;
            return t.type = "ec-polygon", t;
        }
        function rw() {
            return null !== tw && tw.apply(this, arguments) || this;
        }
        function ow(t, e) {
            if (t.length === e.length) {
                for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return;
                return 1;
            }
        }
        function aw(t) {
            for (var e = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0, o = 0; o < t.length; ) {
                var a = t[o++], s = t[o++];
                isNaN(a) || (e = Math.min(a, e), i = Math.max(a, i)), isNaN(s) || (n = Math.min(s, n), 
                r = Math.max(s, r));
            }
            return [ [ e, n ], [ i, r ] ];
        }
        function sw(t, e) {
            t = aw(t);
            var n = t[0], i = (t = t[1], e = aw(e), e[0]);
            e = e[1];
            return Math.max(Math.abs(n[0] - i[0]), Math.abs(n[1] - i[1]), Math.abs(t[0] - e[0]), Math.abs(t[1] - e[1]));
        }
        function lw(t) {
            return W(t) ? t : t ? .5 : 0;
        }
        function uw(t, e, n, i) {
            e = e.getBaseAxis();
            var r = "x" === e.dim || "radius" === e.dim ? 0 : 1, o = [], a = 0, s = [], l = [], u = [], h = [];
            if (i) {
                for (a = 0; a < t.length; a += 2) isNaN(t[a]) || isNaN(t[a + 1]) || h.push(t[a], t[a + 1]);
                t = h;
            }
            for (a = 0; a < t.length - 2; a += 2) switch (u[0] = t[a + 2], u[1] = t[a + 3], 
            l[0] = t[a], l[1] = t[a + 1], o.push(l[0], l[1]), n) {
              case "end":
                s[r] = u[r], s[1 - r] = l[1 - r], o.push(s[0], s[1]);
                break;

              case "middle":
                var c = [];
                s[r] = c[r] = (l[r] + u[r]) / 2, s[1 - r] = l[1 - r], c[1 - r] = u[1 - r], o.push(s[0], s[1]), 
                o.push(c[0], c[1]);
                break;

              default:
                s[r] = l[r], s[1 - r] = u[1 - r], o.push(s[0], s[1]);
            }
            return o.push(t[a++], t[a++]), o;
        }
        function hw(t, e, n) {
            var i = t.getVisual("visualMeta");
            if (i && i.length && t.count() && "cartesian2d" === e.type) {
                for (var r, o, a = i.length - 1; 0 <= a; a--) {
                    var s = t.getDimensionInfo(i[a].dimension);
                    if ("x" === (r = s && s.coordDim) || "y" === r) {
                        o = i[a];
                        break;
                    }
                }
                if (o) {
                    var l = e.getAxis(r), u = (e = F(o.stops, (function(t) {
                        return {
                            coord: l.toGlobalCoord(l.dataToCoord(t.value)),
                            color: t.color
                        };
                    })), e.length), h = o.outerColors.slice(), c = (n = (u && e[0].coord > e[u - 1].coord && (e.reverse(), 
                    h.reverse()), function(t, e) {
                        var n, i, r = [], o = t.length;
                        function a(t, e, n) {
                            var i = t.coord;
                            return {
                                coord: n,
                                color: _i((n - i) / (e.coord - i), [ t.color, e.color ])
                            };
                        }
                        for (var s = 0; s < o; s++) {
                            var l = t[s], u = l.coord;
                            if (u < 0) n = l; else {
                                if (e < u) {
                                    i ? r.push(a(i, l, e)) : n && r.push(a(n, l, 0), a(n, l, e));
                                    break;
                                }
                                n && (r.push(a(n, l, 0)), n = null), r.push(l), i = l;
                            }
                        }
                        return r;
                    }(e, "x" === r ? n.getWidth() : n.getHeight())), n.length);
                    if (!c && u) return e[0].coord < 0 ? h[1] || e[u - 1].color : h[0] || e[0].color;
                    var p = n[0].coord - 10, d = (u = n[c - 1].coord + 10, u - p);
                    if (d < .001) return "transparent";
                    E(n, (function(t) {
                        t.offset = (t.coord - p) / d;
                    })), n.push({
                        offset: c ? n[c - 1].offset : .5,
                        color: h[1] || "transparent"
                    }), n.unshift({
                        offset: c ? n[0].offset : .5,
                        color: h[0] || "transparent"
                    });
                    e = new Oh(0, 0, 0, 0, n, !0);
                    return e[r] = p, e[r + "2"] = u, e;
                }
            }
        }
        function cw(t, e, n) {
            t = t.get("showAllSymbol");
            var i = "auto" === t;
            if (!t || i) {
                var r, o, a = n.getAxesByScale("ordinal")[0];
                if (a && (!i || !function(t, e) {
                    var n = t.getExtent(), i = Math.abs(n[1] - n[0]) / t.scale.count();
                    isNaN(i) && (i = 0);
                    for (var r = e.count(), o = Math.max(1, Math.round(r / 5)), a = 0; a < r; a += o) if (1.5 * Nx.getSymbolSize(e, a)[t.isHorizontal() ? 1 : 0] > i) return;
                    return 1;
                }(a, e))) return r = e.mapDimension(a.dim), o = {}, E(a.getViewLabels(), (function(t) {
                    t = a.scale.getRawOrdinalNumber(t.tickValue);
                    o[t] = 1;
                })), function(t) {
                    return !o.hasOwnProperty(e.get(r, t));
                };
            }
        }
        function pw(t) {
            for (var e, n, i = t.length / 2; 0 < i && (e = t[2 * i - 2], n = t[2 * i - 1], isNaN(e) || isNaN(n)); i--) ;
            return i - 1;
        }
        function dw(t, e) {
            return [ t[2 * e], t[2 * e + 1] ];
        }
        function fw(t) {
            if (t.get([ "endLabel", "show" ])) return 1;
            for (var e = 0; e < xl.length; e++) if (t.get([ xl[e], "endLabel", "show" ])) return 1;
        }
        function gw(n, i, e, t) {
            var r, o, a, s, l, u, h, c, p;
            return nx(i, "cartesian2d") ? (r = t.getModel("endLabel"), o = r.get("valueAnimation"), 
            a = t.getData(), s = {
                lastFrameIndex: 0
            }, l = fw(t) ? function(t, e) {
                n._endLabelOnDuring(t, e, a, s, o, r, i);
            } : null, u = i.getBaseAxis().isHorizontal(), h = K1(i, e, t, (function() {
                var t = n._endLabel;
                t && e && null != s.originalX && t.attr({
                    x: s.originalX,
                    y: s.originalY
                });
            }), l), t.get("clip", !0) || (c = h.shape, p = Math.max(c.width, c.height), u ? (c.y -= p, 
            c.height += 2 * p) : (c.x -= p, c.width += 2 * p)), l && l(1, h), h) : $1(i, e, t);
        }
        u(vw, yw = zg), vw.prototype.init = function() {
            var t = new io, e = new Hx;
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
        }, vw.prototype.render = function(t, e, n) {
            var i = this, r = t.coordinateSystem, o = this.group, a = t.getData(), s = t.getModel("lineStyle"), l = t.getModel("areaStyle"), u = a.getLayout("points") || [], h = "polar" === r.type, c = this._coordSys, p = this._symbolDraw, d = this._polyline, f = this._polygon, g = this._lineGroup, y = (e = !e.ssr && t.get("animation"), 
            !l.isEmpty()), m = l.get("origin"), v = Gx(r, a, m), _ = (v = y && function(t, e, n) {
                if (!n.valueDim) return [];
                for (var i = e.count(), r = Pv(2 * i), o = 0; o < i; o++) {
                    var a = Ux(n, t, e, o);
                    r[2 * o] = a[0], r[2 * o + 1] = a[1];
                }
                return r;
            }(r, a, v), t.get("showSymbol")), x = t.get("connectNulls"), w = _ && !h && cw(t, a, r), b = this._data;
            b && b.eachItemGraphicEl((function(t, e) {
                t.__temp && (o.remove(t), b.setItemGraphicEl(e, null));
            })), _ || p.remove(), o.add(g);
            function S(t) {
                i._changePolyState(t);
            }
            var M, T = !h && t.get("step"), C = (r && r.getArea && t.get("clip", !0) && (null != (M = r.getArea()).width ? (M.x -= .1, 
            M.y -= .1, M.width += .2, M.height += .2) : M.r0 && (M.r0 -= .5, M.r += .5)), this._clipShapeForSymbol = M, 
            hw(a, r, n) || a.getVisual("style")[a.getVisual("drawType")]);
            c = (d && c.type === r.type && T === this._step ? (y && !f ? f = this._newPolygon(u, v) : f && !y && (g.remove(f), 
            f = this._polygon = null), h || this._initOrUpdateEndLabel(t, r, Ap(C)), (c = g.getClipPath()) ? Zh(c, {
                shape: gw(this, r, !1, t).shape
            }, t) : g.setClipPath(gw(this, r, !0, t)), _ && p.updateData(a, {
                isIgnore: w,
                clipShape: M,
                disableAnimation: !0,
                getSymbolPoint: function(t) {
                    return [ u[2 * t], u[2 * t + 1] ];
                }
            }), ow(this._stackedOnPoints, v) && ow(this._points, u) || (e ? this._doUpdateAnimation(a, v, r, n, T, m, x) : (T && (u = uw(u, r, T, x), 
            v = v && uw(v, r, T, x)), d.setShape({
                points: u
            }), f && f.setShape({
                points: u,
                stackedOnPoints: v
            })))) : (_ && p.updateData(a, {
                isIgnore: w,
                clipShape: M,
                disableAnimation: !0,
                getSymbolPoint: function(t) {
                    return [ u[2 * t], u[2 * t + 1] ];
                }
            }), e && this._initSymbolLabelAnimation(a, r, M), T && (u = uw(u, r, T, x), v = v && uw(v, r, T, x)), 
            d = this._newPolyline(u), y ? f = this._newPolygon(u, v) : f && (g.remove(f), f = this._polygon = null), 
            h || this._initOrUpdateEndLabel(t, r, Ap(C)), g.setClipPath(gw(this, r, !0, t))), 
            t.getModel("emphasis")), n = c.get("focus"), _ = c.get("blurScope"), p = c.get("disabled"), 
            w = (d.useStyle(B(s.getLineStyle(), {
                fill: "none",
                stroke: C,
                lineJoin: "bevel"
            })), ru(d, t, "lineStyle"), 0 < d.style.lineWidth && "bolder" === t.get([ "emphasis", "lineStyle", "width" ]) && (d.getState("emphasis").style.lineWidth = +d.style.lineWidth + 1), 
            pl(d).seriesIndex = t.seriesIndex, eu(d, n, _, p), lw(t.get("smooth"))), e = t.get("smoothMonotone");
            d.setShape({
                smooth: w,
                smoothMonotone: e,
                connectNulls: x
            }), f && (M = a.getCalculationInfo("stackedOnSeries"), y = 0, f.useStyle(B(l.getAreaStyle(), {
                fill: C,
                opacity: .7,
                lineJoin: "bevel",
                decal: a.getVisual("style").decal
            })), M && (y = lw(M.get("smooth"))), f.setShape({
                smooth: w,
                stackedOnSmooth: y,
                smoothMonotone: e,
                connectNulls: x
            }), ru(f, t, "areaStyle"), pl(f).seriesIndex = t.seriesIndex, eu(f, n, _, p));
            a.eachItemGraphicEl((function(t) {
                t && (t.onHoverStateChange = S);
            })), this._polyline.onHoverStateChange = S, this._data = a, this._coordSys = r, 
            this._stackedOnPoints = v, this._points = u, this._step = T, this._valueOrigin = m, 
            t.get("triggerLineEvent") && (this.packEventData(t, d), f) && this.packEventData(t, f);
        }, vw.prototype.packEventData = function(t, e) {
            pl(e).eventData = {
                componentType: "series",
                componentSubType: "line",
                componentIndex: t.componentIndex,
                seriesIndex: t.seriesIndex,
                seriesName: t.name,
                seriesType: "line"
            };
        }, vw.prototype.highlight = function(t, e, n, i) {
            var r = t.getData(), o = jo(r, i);
            if (this._changePolyState("emphasis"), !(o instanceof Array) && null != o && 0 <= o) {
                var a = r.getLayout("points"), s = r.getItemGraphicEl(o);
                if (!s) {
                    var l = a[2 * o];
                    a = a[2 * o + 1];
                    if (isNaN(l) || isNaN(a)) return;
                    if (this._clipShapeForSymbol && !this._clipShapeForSymbol.contain(l, a)) return;
                    var u = t.get("zlevel") || 0, h = t.get("z") || 0;
                    l = ((s = new Nx(r, o)).x = l, s.y = a, s.setZ(u, h), s.getSymbolPath().getTextContent());
                    l && (l.zlevel = u, l.z = h, l.z2 = this._polyline.z2 + 1), s.__temp = !0, r.setItemGraphicEl(o, s), 
                    s.stopSymbolAnimation(!0), this.group.add(s);
                }
                s.highlight();
            } else zg.prototype.highlight.call(this, t, e, n, i);
        }, vw.prototype.downplay = function(t, e, n, i) {
            var r, o = t.getData(), a = jo(o, i);
            this._changePolyState("normal"), null != a && 0 <= a ? (r = o.getItemGraphicEl(a)) && (r.__temp ? (o.setItemGraphicEl(a, null), 
            this.group.remove(r)) : r.downplay()) : zg.prototype.downplay.call(this, t, e, n, i);
        }, vw.prototype._changePolyState = function(t) {
            var e = this._polygon;
            zl(this._polyline, t), e && zl(e, t);
        }, vw.prototype._newPolyline = function(t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new $x({
                shape: {
                    points: t
                },
                segmentIgnoreThreshold: 2,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e;
        }, vw.prototype._newPolygon = function(t, e) {
            var n = this._polygon;
            return n && this._lineGroup.remove(n), n = new nw({
                shape: {
                    points: t,
                    stackedOnPoints: e
                },
                segmentIgnoreThreshold: 2
            }), this._lineGroup.add(n), this._polygon = n;
        }, vw.prototype._initSymbolLabelAnimation = function(t, l, u) {
            var h, c, e = l.getBaseAxis(), p = e.inverse, d = (e = ("cartesian2d" === l.type ? (h = e.isHorizontal(), 
            c = !1) : "polar" === l.type && (h = "angle" === e.dim, c = !0), t.hostModel), e.get("animationDuration")), f = (k(d) && (d = d(null)), 
            e.get("animationDelay") || 0), g = k(f) ? f(null) : f;
            t.eachItemGraphicEl((function(t, e) {
                var n, i, r, o, a, s = t;
                s && (o = [ t.x, t.y ], a = i = n = void 0, u && (a = c ? (r = u, o = l.pointToCoord(o), 
                h ? (n = r.startAngle, i = r.endAngle, -o[1] / 180 * Math.PI) : (n = r.r0, i = r.r, 
                o[0])) : h ? (n = u.x, i = u.x + u.width, t.x) : (n = u.y + u.height, i = u.y, t.y)), 
                r = i === n ? 0 : (a - n) / (i - n), p && (r = 1 - r), o = k(f) ? f(e) : d * r + g, 
                a = (t = s.getSymbolPath()).getTextContent(), s.attr({
                    scaleX: 0,
                    scaleY: 0
                }), s.animateTo({
                    scaleX: 1,
                    scaleY: 1
                }, {
                    duration: 200,
                    setToFinal: !0,
                    delay: o
                }), a && a.animateFrom({
                    style: {
                        opacity: 0
                    }
                }, {
                    duration: 300,
                    delay: o
                }), t.disableLabelAnimation = !0);
            }));
        }, vw.prototype._initOrUpdateEndLabel = function(t, e, n) {
            var i, r, o, a = t.getModel("endLabel");
            fw(t) ? (i = t.getData(), r = this._polyline, (o = i.getLayout("points")) ? (this._endLabel || ((this._endLabel = new Qs({
                z2: 200
            })).ignoreClip = !0, r.setTextContent(this._endLabel), r.disableLabelAnimation = !0), 
            0 <= (o = pw(o)) && (vc(r, _c(t, "endLabel"), {
                inheritColor: n,
                labelFetcher: t,
                labelDataIndex: o,
                defaultText: function(t, e, n) {
                    return null != n ? rx(i, n) : ix(i, t);
                },
                enableTextSetter: !0
            }, (n = a, o = (t = (t = e).getBaseAxis()).isHorizontal(), t = t.inverse, a = o ? t ? "right" : "left" : "center", 
            o = o ? "middle" : t ? "top" : "bottom", {
                normal: {
                    align: n.get("align") || a,
                    verticalAlign: n.get("verticalAlign") || o
                }
            })), r.textConfig.position = null)) : (r.removeTextContent(), this._endLabel = null)) : this._endLabel && (this._polyline.removeTextContent(), 
            this._endLabel = null);
        }, vw.prototype._endLabelOnDuring = function(t, e, n, i, r, o, a) {
            var s, l, u, h, c, p, d, f, g, y, m = this._endLabel, v = this._polyline;
            m && (t < 1 && null == i.originalX && (i.originalX = m.x, i.originalY = m.y), s = n.getLayout("points"), 
            g = (l = n.hostModel).get("connectNulls"), u = o.get("precision"), o = o.get("distance") || 0, 
            c = (a = a.getBaseAxis()).isHorizontal(), a = a.inverse, e = e.shape, h = (c ? o : 0) * (a ? -1 : 1), 
            o = (c ? 0 : -o) * (a ? -1 : 1), d = void 0, 1 <= (f = (p = (c = function(t, e, n) {
                for (var i, r, o = t.length / 2, a = "x" === n ? 0 : 1, s = 0, l = -1, u = 0; u < o; u++) if (r = t[2 * u + a], 
                !isNaN(r) && !isNaN(t[2 * u + 1 - a])) {
                    if (0 !== u) {
                        if (i <= e && e <= r || e <= i && r <= e) {
                            l = u;
                            break;
                        }
                        s = u;
                    }
                    i = r;
                }
                return {
                    range: [ s, l ],
                    t: (e - i) / (r - i)
                };
            }(s, a = a ? c ? e.x : e.y + e.height : c ? e.x + e.width : e.y, e = c ? "x" : "y")).range)[1] - p[0]) ? (1 < f && !g ? (y = dw(s, p[0]), 
            m.attr({
                x: y[0] + h,
                y: y[1] + o
            }), r && (d = l.getRawValue(p[0]))) : ((y = v.getPointOn(a, e)) && m.attr({
                x: y[0] + h,
                y: y[1] + o
            }), f = l.getRawValue(p[0]), g = l.getRawValue(p[1]), r && (d = na(n, u, f, g, c.t))), 
            i.lastFrameIndex = p[0]) : (y = dw(s, v = 1 === t || 0 < i.lastFrameIndex ? p[0] : 0), 
            r && (d = l.getRawValue(v)), m.attr({
                x: y[0] + h,
                y: y[1] + o
            })), r) && "function" == typeof (a = Cc(m)).setLabelText && a.setLabelText(d);
        }, vw.prototype._doUpdateAnimation = function(t, e, n, i, r, o, a) {
            var s = this._polyline, l = this._polygon, u = t.hostModel, h = (e = function(t, e, n, i, r, o) {
                a = [], e.diff(t).add((function(t) {
                    a.push({
                        cmd: "+",
                        idx: t
                    });
                })).update((function(t, e) {
                    a.push({
                        cmd: "=",
                        idx: e,
                        idx1: t
                    });
                })).remove((function(t) {
                    a.push({
                        cmd: "-",
                        idx: t
                    });
                })).execute();
                for (var a, s = a, l = [], u = [], h = [], c = [], p = [], d = [], f = [], g = Gx(r, e, o), y = t.getLayout("points") || [], m = e.getLayout("points") || [], v = 0; v < s.length; v++) {
                    var _ = s[v], x = !0, w = void 0;
                    switch (_.cmd) {
                      case "=":
                        var b = 2 * _.idx, S = (w = 2 * _.idx1, y[b]), M = y[1 + b], T = m[w], C = m[w + 1];
                        (isNaN(S) || isNaN(M)) && (S = T, M = C), l.push(S, M), u.push(T, C), h.push(n[b], n[1 + b]), 
                        c.push(i[w], i[w + 1]), f.push(e.getRawIndex(_.idx1));
                        break;

                      case "+":
                        S = _.idx, M = g.dataDimsForPoint, T = r.dataToPoint([ e.get(M[0], S), e.get(M[1], S) ]), 
                        C = (w = 2 * S, l.push(T[0], T[1]), u.push(m[w], m[w + 1]), Ux(g, r, e, S));
                        h.push(C[0], C[1]), c.push(i[w], i[w + 1]), f.push(e.getRawIndex(S));
                        break;

                      case "-":
                        x = !1;
                    }
                    x && (p.push(_), d.push(d.length));
                }
                d.sort((function(t, e) {
                    return f[t] - f[e];
                }));
                var I = Pv(o = l.length), k = Pv(o), D = Pv(o), A = Pv(o), L = [];
                for (v = 0; v < d.length; v++) {
                    var P = d[v], O = 2 * v, R = 2 * P;
                    I[O] = l[R], I[1 + O] = l[1 + R], k[O] = u[R], k[1 + O] = u[1 + R], D[O] = h[R], 
                    D[1 + O] = h[1 + R], A[O] = c[R], A[1 + O] = c[1 + R], L[v] = p[P];
                }
                return {
                    current: I,
                    next: k,
                    stackedOnCurrent: D,
                    stackedOnNext: A,
                    status: L
                };
            }(this._data, t, this._stackedOnPoints, e, this._coordSys, this._valueOrigin), e.current), c = e.stackedOnCurrent, p = e.next, d = e.stackedOnNext;
            if (r && (h = uw(e.current, n, r, a), c = uw(e.stackedOnCurrent, n, r, a), p = uw(e.next, n, r, a), 
            d = uw(e.stackedOnNext, n, r, a)), 3e3 < sw(h, p) || l && 3e3 < sw(c, d)) s.stopAnimation(), 
            s.setShape({
                points: p
            }), l && (l.stopAnimation(), l.setShape({
                points: p,
                stackedOnPoints: d
            })); else {
                s.shape.__points = e.current, s.shape.points = h;
                n = {
                    shape: {
                        points: p
                    }
                };
                e.current !== h && (n.shape.__points = e.next), s.stopAnimation(), jh(s, n, u), 
                l && (l.setShape({
                    points: h,
                    stackedOnPoints: c
                }), l.stopAnimation(), jh(l, {
                    shape: {
                        stackedOnPoints: d
                    }
                }, u), s.shape.points !== l.shape.points) && (l.shape.points = s.shape.points);
                for (var f, g = [], y = e.status, m = 0; m < y.length; m++) "=" === y[m].cmd && (f = t.getItemGraphicEl(y[m].idx1)) && g.push({
                    el: f,
                    ptIdx: m
                });
                s.animators && s.animators.length && s.animators[0].during((function() {
                    l && l.dirtyShape();
                    for (var t = s.shape.__points, e = 0; e < g.length; e++) {
                        var n = g[e].el, i = 2 * g[e].ptIdx;
                        n.x = t[i], n.y = t[1 + i], n.markRedraw();
                    }
                }));
            }
        }, vw.prototype.remove = function(t) {
            var n = this.group, i = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl((function(t, e) {
                t.__temp && (n.remove(t), i.setItemGraphicEl(e, null));
            })), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._endLabel = this._data = null;
        }, vw.type = "line";
        var yw, mw = vw;
        function vw() {
            return null !== yw && yw.apply(this, arguments) || this;
        }
        __((function(t) {
            var i;
            t.registerChartView(mw), t.registerSeriesModel(Px), t.registerLayout((i = !0, {
                seriesType: "line",
                plan: Rg(),
                reset: function(t) {
                    var h, e, c, p, d, n = t.getData(), f = t.coordinateSystem, g = (t = t.pipelineContext, 
                    i || t.large);
                    if (f) return t = F(f.dimensions, (function(t) {
                        return n.mapDimension(t);
                    })).slice(0, 2), h = t.length, e = n.getCalculationInfo("stackResultDimension"), 
                    av(n, t[0]) && (t[0] = e), av(n, t[1]) && (t[1] = e), c = n.getStore(), p = n.getDimensionIndex(t[0]), 
                    d = n.getDimensionIndex(t[1]), h && {
                        progress: function(t, e) {
                            for (var n = t.end - t.start, i = g && Pv(n * h), r = [], o = [], a = t.start, s = 0; a < t.end; a++) {
                                var l, u = void 0;
                                u = 1 === h ? (l = c.get(p, a), f.dataToPoint(l, null, o)) : (r[0] = c.get(p, a), 
                                r[1] = c.get(d, a), f.dataToPoint(r, null, o)), g ? (i[s++] = u[0], i[s++] = u[1]) : e.setItemLayout(a, u.slice());
                            }
                            g && e.setLayout("points", i);
                        }
                    };
                }
            })), t.registerVisual({
                seriesType: "line",
                reset: function(t) {
                    var e = t.getData();
                    t = t.getModel("lineStyle").getLineStyle();
                    t && !t.stroke && (t.stroke = e.getVisual("style").fill), e.setVisual("legendLineStyle", t);
                }
            }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, U1("line"));
        }));
        var _w = 2 * Math.PI, xw = Math.PI / 180;
        function ww(t, e) {
            return Np(t.getBoxLayoutParams(), {
                width: e.getWidth(),
                height: e.getHeight()
            });
        }
        function bw(t, e) {
            var n = ww(t, e), i = t.get("center"), r = t.get("radius");
            V(r) || (r = [ 0, r ]);
            var o, a = vo(n.width, e.getWidth()), s = (e = vo(n.height, e.getHeight()), Math.min(a, e)), l = vo(r[0], s / 2);
            r = vo(r[1], s / 2), s = t.coordinateSystem;
            return s = s ? (o = (t = s.dataToPoint(i))[0] || 0, t[1] || 0) : (o = vo((i = V(i) ? i : [ i, i ])[0], a) + n.x, 
            vo(i[1], e) + n.y), {
                cx: o,
                cy: s,
                r0: l,
                r
            };
        }
        function Sw(t, e, C) {
            e.eachSeriesByType(t, (function(t) {
                var r, a = t.getData(), e = a.mapDimension("value"), n = ww(t, C), i = bw(t, C), s = i.cx, l = i.cy, u = i.r, h = i.r0, o = -t.get("startAngle") * xw, c = (i = t.get("endAngle"), 
                t.get("padAngle") * xw), p = (i = "auto" === i ? o - _w : -i * xw, t.get("minAngle") * xw + c), d = 0, f = (a.each(e, (function(t) {
                    isNaN(t) || d++;
                })), a.getSum(e)), g = Math.PI / (f || d) * 2, y = t.get("clockwise"), m = t.get("roseType"), v = t.get("stillShowZeroSum"), _ = a.getDataExtent(e), x = (_[0] = 0, 
                y ? 1 : -1), w = (t = [ o, i ], x * c / 2), b = (ds(t, !y), o = t[0], Math.abs(t[1] - o)), S = b, M = 0, T = o;
                a.setLayout({
                    viewRect: n,
                    r: u
                }), a.each(e, (function(t, e) {
                    var n, i, r, o;
                    isNaN(t) ? a.setItemLayout(e, {
                        angle: NaN,
                        startAngle: NaN,
                        endAngle: NaN,
                        clockwise: y,
                        cx: s,
                        cy: l,
                        r0: h,
                        r: m ? NaN : u
                    }) : ((n = "area" !== m ? 0 === f && v ? g : t * g : b / d) < p ? S -= n = p : M += t, 
                    i = T + x * n, o = r = 0, o = n < c ? r = T + x * n / 2 : (r = T + w, i - w), a.setItemLayout(e, {
                        angle: n,
                        startAngle: r,
                        endAngle: o,
                        clockwise: y,
                        cx: s,
                        cy: l,
                        r0: h,
                        r: m ? mo(t, _, [ h, u ]) : u
                    }), T = i);
                })), S < _w && d && (S <= .001 ? (r = b / d, a.each(e, (function(t, e) {
                    var n, i;
                    isNaN(t) || (i = t = 0, i = ((n = a.getItemLayout(e)).angle = r) < c ? t = o + x * (e + .5) * r : (t = o + x * e * r + w, 
                    o + x * (e + 1) * r - w), n.startAngle = t, n.endAngle = i);
                }))) : (g = S / M, T = o, a.each(e, (function(t, e) {
                    var n, i;
                    isNaN(t) || (i = n = 0, i = (t = (e = a.getItemLayout(e)).angle === p ? p : t * g) < c ? n = T + x * t / 2 : (n = T + w, 
                    T + x * t - w), e.startAngle = n, e.endAngle = i, T += x * t);
                }))));
            }));
        }
        var Mw = Math.PI / 180;
        function Tw(t, s, l, u, h, e, n, i, r, o) {
            if (!(t.length < 2)) {
                for (var a, c = t.length, p = 0; p < c; p++) "outer" === t[p].position && "labelLine" === t[p].labelAlignTo && (a = t[p].label.x - o, 
                t[p].linePoints[1][0] += a, t[p].label.x = o);
                if (y1(t, r, r + n)) {
                    for (var d, f, g, y, m, v = t, _ = {
                        list: [],
                        maxY: 0
                    }, x = {
                        list: [],
                        maxY: 0
                    }, w = 0; w < v.length; w++) "none" === v[w].labelAlignTo && (f = (d = v[w]).label.y > l ? x : _, 
                    (g = Math.abs(d.label.y - l)) >= f.maxY && (m = d.label.x - s - d.len2 * h, y = u + d.len, 
                    m = Math.abs(m) < y ? Math.sqrt(g * g / (1 - m * m / y / y)) : y, f.rB = m, f.maxY = g), 
                    f.list.push(d));
                    b(_), b(x);
                }
            }
            function b(t) {
                for (var e = t.rB, n = e * e, i = 0; i < t.list.length; i++) {
                    var r = t.list[i], o = Math.abs(r.label.y - l), a = u + r.len;
                    a = a * a, o = Math.sqrt((1 - Math.abs(o * o / n)) * a), a = s + (o + r.len2) * h, 
                    o = a - r.label.x;
                    Cw(r, r.targetTextWidth - o * h, !0), r.label.x = a;
                }
            }
        }
        function Cw(t, e, n) {
            var i, r, o, a, s, l, u;
            void 0 === n && (n = !1), null == t.labelStyleWidth && (s = (i = t.label).style, 
            r = t.rect, l = s.backgroundColor, u = (u = s.padding) ? u[1] + u[3] : 0, s = s.overflow, 
            e < (o = r.width + (l ? 0 : u)) || n) && (a = r.height, s && s.match("break") ? (i.setStyle("backgroundColor", null), 
            i.setStyle("width", e - u), s = i.getBoundingRect(), i.setStyle("width", Math.ceil(s.width)), 
            i.setStyle("backgroundColor", l)) : (s = e - u, l = !(e < o) && (!n || s > t.unconstrainedWidth) ? null : s, 
            i.setStyle("width", l)), u = i.getBoundingRect(), r.width = u.width, e = (i.style.margin || 0) + 2.1, 
            r.height = u.height + e, r.y -= (r.height - a) / 2);
        }
        function Iw(t) {
            return "center" === t.position;
        }
        function kw(t) {
            var S, M, T = t.getData(), C = [], I = !1, k = (t.get("minShowLabelAngle") || 0) * Mw, e = T.getLayout("viewRect"), D = T.getLayout("r"), A = e.width, L = e.x, n = e.y;
            e = e.height;
            function P(t) {
                t.ignore = !0;
            }
            if (T.each((function(t) {
                var e, n, i, r, o, a, s, l, u, h, c, p = T.getItemGraphicEl(t), d = p.shape, f = p.getTextContent(), g = p.getTextGuideLine(), y = (t = T.getItemModel(t), 
                t.getModel("label")), m = y.get("position") || t.get([ "emphasis", "label", "position" ]), v = y.get("distanceToLabelLine"), _ = y.get("alignTo"), x = vo(y.get("edgeDistance"), A), w = y.get("bleedMargin"), b = (t = t.getModel("labelLine"), 
                vo(t.get("length"), A));
                e = vo(t.get("length2"), A), Math.abs(d.endAngle - d.startAngle) < k ? (E(f.states, P), 
                f.ignore = !0, g && (E(g.states, P), g.ignore = !0)) : function(t) {
                    if (!t.ignore) return 1;
                    for (var e in t.states) if (!1 === t.states[e].ignore) return 1;
                }(f) && (c = (d.startAngle + d.endAngle) / 2, n = Math.cos(c), i = Math.sin(c), 
                S = d.cx, M = d.cy, r = "inside" === m || "inner" === m, l = "center" === m ? (o = d.cx, 
                a = d.cy, "center") : (o = (l = (r ? (d.r + d.r0) / 2 * n : d.r * n) + S) + 3 * n, 
                a = (u = (r ? (d.r + d.r0) / 2 * i : d.r * i) + M) + 3 * i, r || (s = l + n * (b + D - d.r), 
                d = u + i * (b + D - d.r), h = s + (n < 0 ? -1 : 1) * e, o = "edge" === _ ? n < 0 ? L + x : L + A - x : h + (n < 0 ? -v : v), 
                s = [ [ l, u ], [ s, a = d ], [ h, d ] ]), r ? "center" : "edge" === _ ? 0 < n ? "right" : "left" : 0 < n ? "left" : "right"), 
                u = Math.PI, h = 0, W(d = y.get("rotate")) ? h = d * (u / 180) : "center" === m ? h = 0 : "radial" === d || !0 === d ? h = n < 0 ? -c + u : -c : "tangential" === d && "outside" !== m && "outer" !== m && ((y = Math.atan2(n, i)) < 0 && (y = 2 * u + y), 
                h = (y = 0 < i ? u + y : y) - u), I = !!h, f.x = o, f.y = a, f.rotation = h, f.setStyle({
                    verticalAlign: "middle"
                }), r ? (f.setStyle({
                    align: l
                }), (c = f.states.select) && (c.x += f.x, c.y += f.y)) : ((d = f.getBoundingRect().clone()).applyTransform(f.getComputedTransform()), 
                y = (f.style.margin || 0) + 2.1, d.y -= y / 2, d.height += y, C.push({
                    label: f,
                    labelLine: g,
                    position: m,
                    len: b,
                    len2: e,
                    minTurnAngle: t.get("minTurnAngle"),
                    maxSurfaceAngle: t.get("maxSurfaceAngle"),
                    surfaceNormal: new G(n, i),
                    linePoints: s,
                    textAlign: l,
                    labelDistance: v,
                    labelAlignTo: _,
                    edgeDistance: x,
                    bleedMargin: w,
                    rect: d,
                    unconstrainedWidth: d.width,
                    labelStyleWidth: f.style.width
                })), p.setTextConfig({
                    inside: r
                }));
            })), !I && t.get("avoidLabelOverlap")) {
                for (var l, u, h, c, p, d, i = C, r = S, o = (t = M, D), a = A, s = L, f = [], g = [], y = Number.MAX_VALUE, m = -Number.MAX_VALUE, v = 0; v < i.length; v++) {
                    var _ = i[v].label;
                    Iw(i[v]) || (_.x < r ? (y = Math.min(y, _.x), f) : (m = Math.max(m, _.x), g)).push(i[v]);
                }
                for (v = 0; v < i.length; v++) !Iw(u = i[v]) && u.linePoints && null == u.labelStyleWidth && (_ = u.label, 
                h = u.linePoints, l = void 0, l = "edge" === u.labelAlignTo ? _.x < r ? h[2][0] - u.labelDistance - s - u.edgeDistance : s + a - u.edgeDistance - h[2][0] - u.labelDistance : "labelLine" === u.labelAlignTo ? _.x < r ? y - s - u.bleedMargin : s + a - m - u.bleedMargin : _.x < r ? _.x - s - u.bleedMargin : s + a - _.x - u.bleedMargin, 
                u.targetTextWidth = l, Cw(u, l));
                for (Tw(g, r, t, o, 1, 0, e, 0, n, m), Tw(f, r, t, o, -1, 0, e, 0, n, y), v = 0; v < i.length; v++) !Iw(u = i[v]) && u.linePoints && (_ = u.label, 
                h = u.linePoints, c = "edge" === u.labelAlignTo, p = (p = _.style.padding) ? p[1] + p[3] : 0, 
                p = _.style.backgroundColor ? 0 : p, p = u.rect.width + p, d = h[1][0] - h[2][0], 
                c ? _.x < r ? h[2][0] = s + u.edgeDistance + p + u.labelDistance : h[2][0] = s + a - u.edgeDistance - p - u.labelDistance : (_.x < r ? h[2][0] = _.x + u.labelDistance : h[2][0] = _.x - u.labelDistance, 
                h[1][0] = h[2][0] + d), h[1][1] = h[2][1] = _.y);
            }
            for (var x = 0; x < C.length; x++) {
                var w, b = C[x], O = b.label, R = b.labelLine, N = isNaN(O.x) || isNaN(O.y);
                O && (O.setStyle({
                    align: b.textAlign
                }), N && (E(O.states, P), O.ignore = !0), w = O.states.select) && (w.x += O.x, w.y += O.y), 
                R && (w = b.linePoints, N || !w ? (E(R.states, P), R.ignore = !0) : (u1(w, b.minTurnAngle), 
                function(t, e, n) {
                    if (n <= 180 && 0 < n) {
                        n = n / 180 * Math.PI, n1.fromArray(t[0]), Y.fromArray(t[1]), i1.fromArray(t[2]), 
                        G.sub(r1, Y, n1), G.sub(o1, i1, Y);
                        var i = r1.len(), r = o1.len();
                        if (!(i < .001 || r < .001) && (r1.scale(1 / i), o1.scale(1 / r), r1.dot(e) < Math.cos(n))) {
                            i = Q_(Y.x, Y.y, i1.x, i1.y, n1.x, n1.y, s1, !1), r = (l1.fromArray(s1), Math.PI / 2), 
                            e = r + Math.acos(o1.dot(e)) - n;
                            if (r <= e) G.copy(l1, i1); else {
                                l1.scaleAndAdd(o1, i / Math.tan(Math.PI / 2 - e));
                                n = i1.x !== Y.x ? (l1.x - Y.x) / (i1.x - Y.x) : (l1.y - Y.y) / (i1.y - Y.y);
                                if (isNaN(n)) return;
                                n < 0 ? G.copy(l1, Y) : 1 < n && G.copy(l1, i1);
                            }
                            l1.toArray(t[1]);
                        }
                    }
                }(w, b.surfaceNormal, b.maxSurfaceAngle), R.setShape({
                    points: w
                }), O.__hostTarget.textGuideLineConfig = {
                    anchor: new G(w[0][0], w[0][1])
                }));
            }
        }
        u(Rw, Aw = $u), Rw.prototype.updateData = function(t, e, n, i) {
            var r = this, o = t.hostModel, a = t.getItemModel(e), s = a.getModel("emphasis"), l = t.getItemLayout(e), u = O(sx(a.getModel("itemStyle"), l, !0), l);
            isNaN(u.startAngle) ? r.setShape(u) : (i ? (r.setShape(u), i = o.getShallow("animationType"), 
            o.ecModel.ssr ? (Zh(r, {
                scaleX: 0,
                scaleY: 0
            }, o, {
                dataIndex: e,
                isFrom: !0
            }), r.originX = u.cx, r.originY = u.cy) : "scale" === i ? (r.shape.r = l.r0, Zh(r, {
                shape: {
                    r: l.r
                }
            }, o, e)) : null != n ? (r.setShape({
                startAngle: n,
                endAngle: n
            }), Zh(r, {
                shape: {
                    startAngle: l.startAngle,
                    endAngle: l.endAngle
                }
            }, o, e)) : (r.shape.endAngle = l.startAngle, jh(r, {
                shape: {
                    endAngle: l.endAngle
                }
            }, o, e))) : (tc(r), jh(r, {
                shape: u
            }, o, e)), r.useStyle(t.getItemVisual(e, "style")), ru(r, a), i = (l.startAngle + l.endAngle) / 2, 
            n = o.get("selectedOffset"), u = Math.cos(i) * n, i = Math.sin(i) * n, (n = a.getShallow("cursor")) && r.attr("cursor", n), 
            this._updateLabel(o, t, e), r.ensureState("emphasis").shape = O({
                r: l.r + (s.get("scale") && s.get("scaleSize") || 0)
            }, sx(s.getModel("itemStyle"), l)), O(r.ensureState("select"), {
                x: u,
                y: i,
                shape: sx(a.getModel([ "select", "itemStyle" ]), l)
            }), O(r.ensureState("blur"), {
                shape: sx(a.getModel([ "blur", "itemStyle" ]), l)
            }), n = r.getTextGuideLine(), o = r.getTextContent(), n && O(n.ensureState("select"), {
                x: u,
                y: i
            }), O(o.ensureState("select"), {
                x: u,
                y: i
            }), eu(this, s.get("focus"), s.get("blurScope"), s.get("disabled")));
        }, Rw.prototype._updateLabel = function(t, e, n) {
            var i = e.getItemModel(n), r = i.getModel("labelLine"), o = e.getItemVisual(n, "style"), a = o && o.fill;
            o = o && o.opacity, e = (vc(this, _c(i), {
                labelFetcher: e.hostModel,
                labelDataIndex: n,
                inheritColor: a,
                defaultOpacity: o,
                defaultText: t.getFormattedLabel(n, "normal") || e.getName(n)
            }), this.getTextContent()), n = (this.setTextConfig({
                position: null,
                rotation: null
            }), e.attr({
                z2: 10
            }), t.get([ "label", "position" ]));
            "outside" !== n && "outer" !== n ? this.removeTextGuideLine() : (this.getTextGuideLine() || (e = new hh, 
            this.setTextGuideLine(e)), p1(this, d1(i), {
                stroke: a,
                opacity: St(r.get([ "lineStyle", "opacity" ]), o, 1)
            }));
        };
        var Dw, Aw, Lw = Rw, Pw = (u(Ow, Dw = zg), Ow.prototype.render = function(e, t, n, i) {
            var r, o = e.getData(), a = this._data, s = this.group;
            if (!a && 0 < o.count()) {
                for (var l = o.getItemLayout(0), u = 1; isNaN(l && l.startAngle) && u < o.count(); ++u) l = o.getItemLayout(u);
                l && (r = l.startAngle);
            }
            this._emptyCircleSector && s.remove(this._emptyCircleSector), 0 === o.count() && e.get("showEmptyCircle") && ((n = new $u({
                shape: bw(e, n)
            })).useStyle(e.getModel("emptyCircleStyle").getItemStyle()), this._emptyCircleSector = n, 
            s.add(n)), o.diff(a).add((function(t) {
                var e = new Lw(o, t, r);
                o.setItemGraphicEl(t, e), s.add(e);
            })).update((function(t, e) {
                e = a.getItemGraphicEl(e);
                e.updateData(o, t, r), e.off("click"), s.add(e), o.setItemGraphicEl(t, e);
            })).remove((function(t) {
                Jh(a.getItemGraphicEl(t), e, t);
            })).execute(), kw(e), "expansion" !== e.get("animationTypeUpdate") && (this._data = o);
        }, Ow.prototype.dispose = function() {}, Ow.prototype.containPoint = function(t, e) {
            var n;
            e = e.getData().getItemLayout(0);
            if (e) return n = t[0] - e.cx, t = t[1] - e.cy, (n = Math.sqrt(n * n + t * t)) <= e.r && n >= e.r0;
        }, Ow.type = "pie", Ow);
        function Ow() {
            var t = null !== Dw && Dw.apply(this, arguments) || this;
            return t.ignoreLabelLineUpdate = !0, t;
        }
        function Rw(t, e, n) {
            var i = Aw.call(this) || this, r = (i.z2 = 2, new Qs);
            return i.setTextContent(r), i.updateData(t, e, n, !0), i;
        }
        Ew.prototype.getAllNames = function() {
            var t = this._getRawData();
            return t.mapArray(t.getName);
        }, Ew.prototype.containName = function(t) {
            return 0 <= this._getRawData().indexOfName(t);
        }, Ew.prototype.indexOfName = function(t) {
            return this._getDataWithEncodedVisual().indexOfName(t);
        }, Ew.prototype.getItemVisual = function(t, e) {
            return this._getDataWithEncodedVisual().getItemVisual(t, e);
        };
        var Nw = Ew;
        function Ew(t, e) {
            this._getDataWithEncodedVisual = t, this._getRawData = e;
        }
        var zw, Bw = Zo(), Fw = (u(Vw, zw = Mg), Vw.prototype.init = function(t) {
            zw.prototype.init.apply(this, arguments), this.legendVisualProvider = new Nw(pt(this.getData, this), pt(this.getRawData, this)), 
            this._defaultLabelLine(t);
        }, Vw.prototype.mergeOption = function() {
            zw.prototype.mergeOption.apply(this, arguments);
        }, Vw.prototype.getInitialData = function() {
            return e = V(e = {
                coordDimensions: [ "value" ],
                encodeDefaulter: dt(ad, t = this)
            }) ? {
                coordDimensions: e
            } : O({
                encodeDefine: t.getEncode()
            }, e), i = t.getSource(), e = ev(i, e).dimensions, (e = new tv(e, t)).initData(i, n), 
            e;
            var t, e, n, i;
        }, Vw.prototype.getDataParams = function(t) {
            var e, n = this.getData(), i = Bw(n), r = i.seats;
            i = (r || (e = [], n.each(n.mapDimension("value"), (function(t) {
                e.push(t);
            })), r = i.seats = So(e, n.hostModel.get("percentPrecision"))), zw.prototype.getDataParams.call(this, t));
            return i.percent = r[t] || 0, i.$vars.push("percent"), i;
        }, Vw.prototype._defaultLabelLine = function(t) {
            Bo(t, "labelLine", [ "show" ]);
            var e = t.labelLine, n = t.emphasis.labelLine;
            e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show;
        }, Vw.type = "series.pie", Vw.defaultOption = {
            z: 2,
            legendHoverLink: !0,
            colorBy: "data",
            center: [ "50%", "50%" ],
            radius: [ 0, "75%" ],
            clockwise: !0,
            startAngle: 90,
            endAngle: "auto",
            padAngle: 0,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
                rotate: 0,
                show: !0,
                overflow: "truncate",
                position: "outer",
                alignTo: "none",
                edgeDistance: "25%",
                bleedMargin: 10,
                distanceToLabelLine: 5
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                minTurnAngle: 90,
                maxSurfaceAngle: 90,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            itemStyle: {
                borderWidth: 1,
                borderJoin: "round"
            },
            showEmptyCircle: !0,
            emptyCircleStyle: {
                color: "lightgray",
                opacity: 1
            },
            labelLayout: {
                hideOverlap: !0
            },
            emphasis: {
                scale: !0,
                scaleSize: 5
            },
            avoidLabelOverlap: !0,
            animationType: "expansion",
            animationDuration: 1e3,
            animationTypeUpdate: "transition",
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut"
        }, Vw);
        function Vw() {
            return null !== zw && zw.apply(this, arguments) || this;
        }
        __((function(t) {
            t.registerChartView(Pw), t.registerSeriesModel(Fw), _y("pie", t.registerAction), 
            t.registerLayout(dt(Sw, "pie")), t.registerProcessor({
                seriesType: "pie",
                reset: function(t, e) {
                    var i, r = e.findComponents({
                        mainType: "legend"
                    });
                    r && r.length && (i = t.getData()).filterSelf((function(t) {
                        for (var e = i.getName(t), n = 0; n < r.length; n++) if (!r[n].isSelected(e)) return !1;
                        return !0;
                    }));
                }
            }), t.registerProcessor({
                seriesType: "pie",
                reset: function(t, e) {
                    var n = t.getData();
                    n.filterSelf((function(t) {
                        var e = n.mapDimension("value");
                        e = n.get(e, t);
                        return !(W(e) && !isNaN(e) && e < 0);
                    }));
                }
            });
        }));
        u(Gw, Hw = Up), Gw.type = "grid", Gw.dependencies = [ "xAxis", "yAxis" ], Gw.layoutMode = "box", 
        Gw.defaultOption = {
            show: !1,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 70,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        };
        var Hw, Ww = Gw;
        function Gw() {
            return null !== Hw && Hw.apply(this, arguments) || this;
        }
        u(Yw, Uw = Up), Yw.prototype.getCoordSysModel = function() {
            return this.getReferringComponents("grid", Jo).models[0];
        }, Yw.type = "cartesian2dAxis";
        var Uw, Xw = Yw;
        function Yw() {
            return null !== Uw && Uw.apply(this, arguments) || this;
        }
        lt(Xw, g_);
        My = {
            show: !0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameRotate: null,
            nameTruncate: {
                maxWidth: null,
                ellipsis: "...",
                placeholder: "."
            },
            nameTextStyle: {},
            nameGap: 15,
            silent: !1,
            triggerEvent: !1,
            tooltip: {
                show: !1
            },
            axisPointer: {},
            axisLine: {
                show: !0,
                onZero: !0,
                onZeroAxisIndex: null,
                lineStyle: {
                    color: "#6E7079",
                    width: 1,
                    type: "solid"
                },
                symbol: [ "none", "none" ],
                symbolSize: [ 10, 15 ]
            },
            axisTick: {
                show: !0,
                inside: !1,
                length: 5,
                lineStyle: {
                    width: 1
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                showMinLabel: null,
                showMaxLabel: null,
                margin: 8,
                fontSize: 12
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: [ "#E0E6F1" ],
                    width: 1,
                    type: "solid"
                }
            },
            splitArea: {
                show: !1,
                areaStyle: {
                    color: [ "rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)" ]
                }
            }
        }, Dy = d({
            boundaryGap: !0,
            deduplication: null,
            splitLine: {
                show: !1
            },
            axisTick: {
                alignWithLabel: !1,
                interval: "auto"
            },
            axisLabel: {
                interval: "auto"
            }
        }, My), wh = d({
            boundaryGap: [ 0, 0 ],
            axisLine: {
                show: "auto"
            },
            axisTick: {
                show: "auto"
            },
            splitNumber: 5,
            minorTick: {
                show: !1,
                splitNumber: 5,
                length: 3,
                lineStyle: {}
            },
            minorSplitLine: {
                show: !1,
                lineStyle: {
                    color: "#F4F7FD",
                    width: 1
                }
            }
        }, My);
        var qw = {
            category: Dy,
            value: wh,
            time: d({
                splitNumber: 6,
                axisLabel: {
                    showMinLabel: !1,
                    showMaxLabel: !1,
                    rich: {
                        primary: {
                            fontWeight: "bold"
                        }
                    }
                },
                splitLine: {
                    show: !1
                }
            }, wh),
            log: B({
                logBase: 10
            }, wh)
        }, jw = {
            value: 1,
            category: 1,
            time: 1,
            log: 1
        };
        function Zw(o, a, s, l) {
            E(jw, (function(t, r) {
                var e, n = d(d({}, qw[r], !0), l, !0);
                n = (u(i, e = s), i.prototype.mergeDefaultAndTheme = function(t, e) {
                    var n = Ep(this), i = n ? Bp(t) : {};
                    d(t, e.getTheme().get(r + "Axis")), d(t, this.getDefaultOption()), t.type = Kw(t), 
                    n && zp(t, i, n);
                }, i.prototype.optionUpdated = function() {
                    "category" === this.option.type && (this.__ordinalMeta = pv.createByAxisModel(this));
                }, i.prototype.getCategories = function(t) {
                    var e = this.option;
                    if ("category" === e.type) return t ? e.data : this.__ordinalMeta.categories;
                }, i.prototype.getOrdinalMeta = function() {
                    return this.__ordinalMeta;
                }, i.type = a + "Axis." + r, i.defaultOption = n, i);
                function i() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.type = a + "Axis." + r, t;
                }
                o.registerComponentModel(n);
            })), o.registerSubTypeDefaulter(a + "Axis", Kw);
        }
        function Kw(t) {
            return t.type || (t.data ? "category" : "value");
        }
        function $w(t) {
            this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || "";
        }
        $w.prototype.getAxis = function(t) {
            return this._axes[t];
        }, $w.prototype.getAxes = function() {
            return F(this._dimList, (function(t) {
                return this._axes[t];
            }), this);
        }, $w.prototype.getAxesByScale = function(e) {
            return e = e.toLowerCase(), ct(this.getAxes(), (function(t) {
                return t.scale.type === e;
            }));
        }, $w.prototype.addAxis = function(t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e);
        };
        var Qw = [ "x", "y" ];
        function Jw(t) {
            return "interval" === t.type || "time" === t.type;
        }
        u(nb, tb = $w), nb.prototype.calcAffineTransform = function() {
            this._transform = this._invTransform = null;
            var t, e, n, i, r = this.getAxis("x").scale, o = this.getAxis("y").scale;
            Jw(r) && Jw(o) && (r = r.getExtent(), o = o.getExtent(), i = this.dataToPoint([ r[0], o[0] ]), 
            e = this.dataToPoint([ r[1], o[1] ]), t = r[1] - r[0], n = o[1] - o[0], t) && n && (t = (e[0] - i[0]) / t, 
            e = (e[1] - i[1]) / n, n = i[0] - r[0] * t, r = i[1] - o[0] * e, i = this._transform = [ t, 0, 0, e, n, r ], 
            this._invTransform = Fe([], i));
        }, nb.prototype.getBaseAxis = function() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
        }, nb.prototype.containPoint = function(t) {
            var e = this.getAxis("x"), n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
        }, nb.prototype.containData = function(t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
        }, nb.prototype.containZone = function(t, e) {
            t = this.dataToPoint(t), e = this.dataToPoint(e);
            var n = this.getArea();
            e = new U(t[0], t[1], e[0] - t[0], e[1] - t[1]);
            return n.intersect(e);
        }, nb.prototype.dataToPoint = function(t, e, n) {
            n = n || [];
            var i, r = t[0], o = t[1];
            return this._transform && null != r && isFinite(r) && null != o && isFinite(o) ? ne(n, t, this._transform) : (t = this.getAxis("x"), 
            i = this.getAxis("y"), n[0] = t.toGlobalCoord(t.dataToCoord(r, e)), n[1] = i.toGlobalCoord(i.dataToCoord(o, e)), 
            n);
        }, nb.prototype.clampData = function(t, e) {
            var n = this.getAxis("x").scale, i = this.getAxis("y").scale, r = n.getExtent(), o = i.getExtent();
            n = n.parse(t[0]), i = i.parse(t[1]);
            return (e = e || [])[0] = Math.min(Math.max(Math.min(r[0], r[1]), n), Math.max(r[0], r[1])), 
            e[1] = Math.min(Math.max(Math.min(o[0], o[1]), i), Math.max(o[0], o[1])), e;
        }, nb.prototype.pointToData = function(t, e) {
            var n, i, r = [];
            return this._invTransform ? ne(r, t, this._invTransform) : (n = this.getAxis("x"), 
            i = this.getAxis("y"), r[0] = n.coordToData(n.toLocalCoord(t[0]), e), r[1] = i.coordToData(i.toLocalCoord(t[1]), e), 
            r);
        }, nb.prototype.getOtherAxis = function(t) {
            return this.getAxis("x" === t.dim ? "y" : "x");
        }, nb.prototype.getArea = function(t) {
            t = t || 0;
            var e = this.getAxis("x").getGlobalExtent(), n = this.getAxis("y").getGlobalExtent(), i = Math.min(e[0], e[1]) - t, r = Math.min(n[0], n[1]) - t;
            e = Math.max(e[0], e[1]) - i + t, n = Math.max(n[0], n[1]) - r + t;
            return new U(i, r, e, n);
        };
        var tb, eb = nb;
        function nb() {
            var t = null !== tb && tb.apply(this, arguments) || this;
            return t.type = "cartesian2d", t.dimensions = Qw, t;
        }
        u(ob, ib = Bc), ob.prototype.isHorizontal = function() {
            var t = this.position;
            return "top" === t || "bottom" === t;
        }, ob.prototype.getGlobalExtent = function(t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), 
            e;
        }, ob.prototype.pointToData = function(t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
        }, ob.prototype.setCategorySortInfo = function(t) {
            if ("category" !== this.type) return !1;
            this.model.option.categorySortInfo = t, this.scale.setSortInfo(t);
        };
        var ib, rb = ob;
        function ob(t, e, n, i, r) {
            t = ib.call(this, t, e, n) || this;
            return t.index = 0, t.type = i || "value", t.position = r || "bottom", t;
        }
        function ab(t) {
            return "cartesian2d" === t.get("coordinateSystem");
        }
        function sb(i) {
            var r = {
                xAxisModel: null,
                yAxisModel: null
            };
            return E(r, (function(t, e) {
                var n = e.replace(/Model$/, "");
                n = i.getReferringComponents(n, Jo).models[0];
                r[e] = n;
            })), r;
        }
        var lb = Math.log;
        hb.prototype.getRect = function() {
            return this._rect;
        }, hb.prototype.update = function(t, e) {
            var n = this._axesMap;
            function i(t) {
                var d, e = R(t), n = e.length;
                if (n) {
                    for (var i = [], r = n - 1; 0 <= r; r--) {
                        var o = t[+e[r]], a = o.model, s = o.scale;
                        gv(s) && a.get("alignTicks") && null == a.get("interval") ? i.push(o) : (u_(s, a), 
                        gv(s) && (d = o));
                    }
                    i.length && (d || u_((d = i.pop()).scale, d.model), E(i, (function(t) {
                        var e = t.scale, n = (t = t.model, d.scale), i = kv.prototype, r = i.getTicks.call(n), o = i.getTicks.call(n, !0), a = r.length - 1, s = (n = i.getInterval.call(n), 
                        (t = l_(e, t)).extent), l = t.fixMin, u = (t = t.fixMax, "log" === e.type && (u = lb(e.base), 
                        s = [ lb(s[0]) / u, lb(s[1]) / u ]), e.setExtent(s[0], s[1]), e.calcNiceExtent({
                            splitNumber: a,
                            fixMin: l,
                            fixMax: t
                        }), i.getExtent.call(e)), h = (l && (s[0] = u[0]), t && (s[1] = u[1]), i.getInterval.call(e)), c = s[0], p = s[1];
                        if (l && t) h = (p - c) / a; else if (l) for (p = s[0] + h * a; p < s[1] && isFinite(p) && isFinite(s[1]); ) h = mv(h), 
                        p = s[0] + h * a; else if (t) for (c = s[1] - h * a; c > s[0] && isFinite(c) && isFinite(s[0]); ) h = mv(h), 
                        c = s[1] - h * a; else {
                            u = (h = e.getTicks().length - 1 > a ? mv(h) : h) * a;
                            (c = _o((p = Math.ceil(s[1] / h) * h) - u)) < 0 && 0 <= s[0] ? (c = 0, p = _o(u)) : 0 < p && s[1] <= 0 && (p = 0, 
                            c = -_o(u));
                        }
                        l = (r[0].value - o[0].value) / n, t = (r[a].value - o[a].value) / n, i.setExtent.call(e, c + h * l, p + h * t), 
                        i.setInterval.call(e, h), (l || t) && i.setNiceExtent.call(e, c + h, p - h);
                    })));
                }
            }
            this._updateScale(t, this.model), i(n.x), i(n.y);
            var r = {};
            E(n.x, (function(t) {
                pb(n, "y", t, r);
            })), E(n.y, (function(t) {
                pb(n, "x", t, r);
            })), this.resize(this.model, e);
        }, hb.prototype.resize = function(t, e, n) {
            var i = t.getBoxLayoutParams(), a = (n = !n && t.get("containLabel"), Np(i, {
                width: e.getWidth(),
                height: e.getHeight()
            })), r = (this._rect = a, this._axesList);
            function o() {
                E(r, (function(t) {
                    var e, n, i = t.isHorizontal(), r = i ? [ 0, a.width ] : [ 0, a.height ], o = t.inverse ? 1 : 0;
                    t.setExtent(r[o], r[1 - o]), r = t, e = i ? a.x : a.y, o = r.getExtent(), n = o[0] + o[1], 
                    r.toGlobalCoord = "x" === r.dim ? function(t) {
                        return t + e;
                    } : function(t) {
                        return n - t + e;
                    }, r.toLocalCoord = "x" === r.dim ? function(t) {
                        return t - e;
                    } : function(t) {
                        return n - t + e;
                    };
                }));
            }
            o(), n && (E(r, (function(t) {
                var e, n, i;
                t.model.get([ "axisLabel", "inside" ]) || (e = p_(t)) && (n = t.isHorizontal() ? "height" : "width", 
                i = t.model.get([ "axisLabel", "margin" ]), a[n] -= e[n] + i, "top" === t.position ? a.y += e.height + i : "left" === t.position && (a.x += e.width + i));
            })), o()), E(this._coordsList, (function(t) {
                t.calcAffineTransform();
            }));
        }, hb.prototype.getAxis = function(t, e) {
            t = this._axesMap[t];
            if (null != t) return t[e || 0];
        }, hb.prototype.getAxes = function() {
            return this._axesList.slice();
        }, hb.prototype.getCartesian = function(t, e) {
            if (null != t && null != e) return this._coordsMap["x" + t + "y" + e];
            P(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
            for (var n = 0, i = this._coordsList; n < i.length; n++) if (i[n].getAxis("x").index === t || i[n].getAxis("y").index === e) return i[n];
        }, hb.prototype.getCartesians = function() {
            return this._coordsList.slice();
        }, hb.prototype.convertToPixel = function(t, e, n) {
            e = this._findConvertTarget(e);
            return e.cartesian ? e.cartesian.dataToPoint(n) : e.axis ? e.axis.toGlobalCoord(e.axis.dataToCoord(n)) : null;
        }, hb.prototype.convertFromPixel = function(t, e, n) {
            e = this._findConvertTarget(e);
            return e.cartesian ? e.cartesian.pointToData(n) : e.axis ? e.axis.coordToData(e.axis.toLocalCoord(n)) : null;
        }, hb.prototype._findConvertTarget = function(t) {
            var e, n, i = t.seriesModel, r = t.xAxisModel || i && i.getReferringComponents("xAxis", Jo).models[0], o = t.yAxisModel || i && i.getReferringComponents("yAxis", Jo).models[0], a = (t = t.gridModel, 
            this._coordsList);
            return i ? I(a, e = i.coordinateSystem) < 0 && (e = null) : r && o ? e = this.getCartesian(r.componentIndex, o.componentIndex) : r ? n = this.getAxis("x", r.componentIndex) : o ? n = this.getAxis("y", o.componentIndex) : t && t.coordinateSystem === this && (e = this._coordsList[0]), 
            {
                cartesian: e,
                axis: n
            };
        }, hb.prototype.containPoint = function(t) {
            var e = this._coordsList[0];
            if (e) return e.containPoint(t);
        }, hb.prototype._initCartesian = function(o, t, e) {
            var a = this, s = this, l = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            }, u = {
                x: {},
                y: {}
            }, h = {
                x: 0,
                y: 0
            };
            function n(r) {
                return function(t, e) {
                    var n, i;
                    cb(t, o) && (n = t.get("position"), "x" === r ? "top" !== n && "bottom" !== n && (n = l.bottom ? "top" : "bottom") : "left" !== n && "right" !== n && (n = l.left ? "right" : "left"), 
                    l[n] = !0, i = "category" === (n = new rb(r, h_(t), [ 0, 0 ], t.get("type"), n)).type, 
                    n.onBand = i && t.get("boundaryGap"), n.inverse = t.get("inverse"), (t.axis = n).model = t, 
                    n.grid = s, n.index = e, s._axesList.push(n), u[r][e] = n, h[r]++);
                };
            }
            t.eachComponent("xAxis", n("x"), this), t.eachComponent("yAxis", n("y"), this), 
            h.x && h.y ? E((this._axesMap = u).x, (function(i, r) {
                E(u.y, (function(t, e) {
                    e = "x" + r + "y" + e;
                    var n = new eb(e);
                    n.master = a, n.model = o, a._coordsMap[e] = n, a._coordsList.push(n), n.addAxis(i), 
                    n.addAxis(t);
                }));
            })) : (this._axesMap = {}, this._axesList = []);
        }, hb.prototype._updateScale = function(t, i) {
            function r(e, n) {
                var i, t, r;
                E((i = e, t = n.dim, r = {}, E(i.mapDimensionsAll(t), (function(t) {
                    r[sv(i, t)] = !0;
                })), R(r)), (function(t) {
                    n.scale.unionExtentFromData(e, t);
                }));
            }
            E(this._axesList, (function(t) {
                var e;
                t.scale.setExtent(1 / 0, -1 / 0), "category" === t.type && (e = t.model.get("categorySortInfo"), 
                t.scale.setSortInfo(e));
            })), t.eachSeries((function(t) {
                var e, n;
                ab(t) && (n = (e = sb(t)).xAxisModel, e = e.yAxisModel, cb(n, i)) && cb(e, i) && (n = this.getCartesian(n.componentIndex, e.componentIndex), 
                e = t.getData(), t = n.getAxis("x"), n = n.getAxis("y"), r(e, t), r(e, n));
            }), this);
        }, hb.prototype.getTooltipAxes = function(n) {
            var i = [], r = [];
            return E(this.getCartesians(), (function(t) {
                var e = null != n && "auto" !== n ? t.getAxis(n) : t.getBaseAxis();
                t = t.getOtherAxis(e);
                I(i, e) < 0 && i.push(e), I(r, t) < 0 && r.push(t);
            })), {
                baseAxes: i,
                otherAxes: r
            };
        }, hb.create = function(i, r) {
            var o = [];
            return i.eachComponent("grid", (function(t, e) {
                var n = new hb(t, i, r);
                n.name = "grid_" + e, n.resize(t, r, !0), t.coordinateSystem = n, o.push(n);
            })), i.eachSeries((function(t) {
                var e, n, i;
                ab(t) && (e = (n = sb(t)).xAxisModel, n = n.yAxisModel, i = e.getCoordSysModel().coordinateSystem, 
                t.coordinateSystem = i.getCartesian(e.componentIndex, n.componentIndex));
            })), o;
        }, hb.dimensions = Qw;
        var ub = hb;
        function hb(t, e, n) {
            this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, 
            this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = Qw, this._initCartesian(t, e, n), 
            this.model = t;
        }
        function cb(t, e) {
            return t.getCoordSysModel() === e;
        }
        function pb(t, e, n, i) {
            n.getAxesOnZeroOf = function() {
                return r ? [ r ] : [];
            };
            var r, o = t[e];
            t = n.model, e = t.get([ "axisLine", "onZero" ]), n = t.get([ "axisLine", "onZeroAxisIndex" ]);
            if (e) {
                if (null != n) db(o[n]) && (r = o[n]); else for (var a in o) if (o.hasOwnProperty(a) && db(o[a]) && !i[s(o[a])]) {
                    r = o[a];
                    break;
                }
                r && (i[s(r)] = !0);
            }
            function s(t) {
                return t.dim + "_" + t.index;
            }
        }
        function db(t) {
            return t && "category" !== t.type && "time" !== t.type && (e = (t = t.scale.getExtent())[0], 
            t = t[1], !(0 < e && 0 < t || e < 0 && t < 0));
            var e;
        }
        var fb = Math.PI, gb = (mb.prototype.hasBuilder = function(t) {
            return !!yb[t];
        }, mb.prototype.add = function(t) {
            yb[t](this.opt, this.axisModel, this.group, this._transformGroup);
        }, mb.prototype.getGroup = function() {
            return this.group;
        }, mb.innerTextLayout = function(t, e, n) {
            var i;
            e = Mo(e - t), t = To(e) ? (i = 0 < n ? "top" : "bottom", "center") : To(e - fb) ? (i = 0 < n ? "bottom" : "top", 
            "center") : (i = "middle", 0 < e && e < fb ? 0 < n ? "right" : "left" : 0 < n ? "left" : "right");
            return {
                rotation: e,
                textAlign: t,
                textVerticalAlign: i
            };
        }, mb.makeAxisEventDataBase = function(t) {
            var e = {
                componentType: t.mainType,
                componentIndex: t.componentIndex
            };
            return e[t.mainType + "Index"] = t.componentIndex, e;
        }, mb.isLabelSilent = function(t) {
            var e = t.get("tooltip");
            return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
        }, mb), yb = {
            axisLine: function(i, t, r, e) {
                var o, a, s, l, u, h, c, n = t.get([ "axisLine", "show" ]);
                (n = "auto" === n && i.handleAutoShown ? i.handleAutoShown("axisLine") : n) && (n = t.axis.getExtent(), 
                e = e.transform, o = [ n[0], 0 ], a = [ n[1], 0 ], s = a[0] < o[0], e && (ne(o, o, e), 
                ne(a, a, e)), l = O({
                    lineCap: "round"
                }, t.getModel([ "axisLine", "lineStyle" ]).getLineStyle()), cc((n = new gh({
                    shape: {
                        x1: o[0],
                        y1: o[1],
                        x2: a[0],
                        y2: a[1]
                    },
                    style: l,
                    strokeContainThreshold: i.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })).shape, n.style.lineWidth), n.anid = "line", r.add(n), null != (u = t.get([ "axisLine", "symbol" ]))) && (e = t.get([ "axisLine", "symbolSize" ]), 
                H(u) && (u = [ u, u ]), (H(e) || W(e)) && (e = [ e, e ]), n = Ny(t.get([ "axisLine", "symbolOffset" ]) || 0, e), 
                h = e[0], c = e[1], E([ {
                    rotate: i.rotation + Math.PI / 2,
                    offset: n[0],
                    r: 0
                }, {
                    rotate: i.rotation - Math.PI / 2,
                    offset: n[1],
                    r: Math.sqrt((o[0] - a[0]) * (o[0] - a[0]) + (o[1] - a[1]) * (o[1] - a[1]))
                } ], (function(t, e) {
                    var n;
                    "none" !== u[e] && null != u[e] && (e = Ry(u[e], -h / 2, -c / 2, h, c, l.stroke, !0), 
                    n = t.r + t.offset, e.attr({
                        rotation: t.rotate,
                        x: (t = s ? a : o)[0] + n * Math.cos(i.rotation),
                        y: t[1] - n * Math.sin(i.rotation),
                        silent: !0,
                        z2: 11
                    }), r.add(e));
                })));
            },
            axisTickLabel: function(t, e, n, i) {
                var r, o, a, s = function(t, e, n, i) {
                    var r = n.axis, o = n.getModel("axisTick"), a = o.get("show");
                    if ((a = "auto" === a && i.handleAutoShown ? i.handleAutoShown("axisTick") : a) && !r.scale.isBlank()) {
                        a = o.getModel("lineStyle"), i = i.tickDirection * o.get("length");
                        for (var s = wb(r.getTicksCoords(), e.transform, i, B(a.getLineStyle(), {
                            stroke: n.get([ "axisLine", "lineStyle", "color" ])
                        }), "ticks"), l = 0; l < s.length; l++) t.add(s[l]);
                        return s;
                    }
                }(n, i, e, t), l = function(f, g, y, m) {
                    var v = y.axis;
                    var _, x, w, t, b, S, M, T, C;
                    if (bt(m.axisLabelShow, y.get([ "axisLabel", "show" ])) && !v.scale.isBlank()) return _ = y.getModel("axisLabel"), 
                    x = _.get("margin"), w = v.getViewLabels(), t = (bt(m.labelRotate, _.get("rotate")) || 0) * fb / 180, 
                    b = gb.innerTextLayout(m.rotation, t, m.labelDirection), S = y.getCategories && y.getCategories(!0), 
                    M = [], T = gb.isLabelSilent(y), C = y.get("triggerEvent"), E(w, (function(t, e) {
                        var n = "ordinal" === v.scale.type ? v.scale.getRawOrdinalNumber(t.tickValue) : t.tickValue, i = t.formattedLabel, r = t.rawLabel, o = _, a = (o = S && S[n] && P(a = S[n]) && a.textStyle ? new Hc(a.textStyle, _, y.ecModel) : o).getTextColor() || y.get([ "axisLine", "lineStyle", "color" ]), s = v.dataToCoord(n), l = o.getShallow("align", !0) || b.textAlign, u = N(o.getShallow("alignMinLabel", !0), l), h = N(o.getShallow("alignMaxLabel", !0), l), c = o.getShallow("verticalAlign", !0) || o.getShallow("baseline", !0) || b.textVerticalAlign, p = N(o.getShallow("verticalAlignMinLabel", !0), c), d = N(o.getShallow("verticalAlignMaxLabel", !0), c);
                        s = new Qs({
                            x: s,
                            y: m.labelOffset + m.labelDirection * x,
                            rotation: b.rotation,
                            silent: T,
                            z2: 10 + (t.level || 0),
                            style: xc(o, {
                                text: i,
                                align: 0 === e ? u : e === w.length - 1 ? h : l,
                                verticalAlign: 0 === e ? p : e === w.length - 1 ? d : c,
                                fill: k(a) ? a("category" === v.type ? r : "value" === v.type ? n + "" : n, e) : a
                            })
                        });
                        s.anid = "label_" + n, C && ((t = gb.makeAxisEventDataBase(y)).targetType = "axisLabel", 
                        t.value = r, t.tickIndex = e, "category" === v.type && (t.dataIndex = n), pl(s).eventData = t), 
                        g.add(s), s.updateTransform(), M.push(s), f.add(s), s.decomposeTransform();
                    })), M;
                }(n, i, e, t), u = e, h = l, c = (f_(u.axis) || (d = u.get([ "axisLabel", "showMinLabel" ]), 
                u = u.get([ "axisLabel", "showMaxLabel" ]), s = s || [], y = (h = h || [])[0], f = h[1], 
                r = h[h.length - 1], h = h[h.length - 2], o = s[0], g = s[1], a = s[s.length - 1], 
                s = s[s.length - 2], !1 === d ? (vb(y), vb(o)) : _b(y, f) && (d ? (vb(f), vb(g)) : (vb(y), 
                vb(o))), !1 === u ? (vb(r), vb(a)) : _b(h, r) && (u ? (vb(h), vb(s)) : (vb(r), vb(a)))), 
                n), p = i, d = e, f = t.tickDirection, g = d.axis, y = d.getModel("minorTick");
                if (y.get("show") && !g.scale.isBlank()) {
                    var m = g.getMinorTicksCoords();
                    if (m.length) {
                        g = y.getModel("lineStyle");
                        for (var v = f * y.get("length"), _ = B(g.getLineStyle(), B(d.getModel("axisTick").getLineStyle(), {
                            stroke: d.get([ "axisLine", "lineStyle", "color" ])
                        })), x = 0; x < m.length; x++) for (var w = wb(m[x], p.transform, v, _, "minorticks_" + x), b = 0; b < w.length; b++) c.add(w[b]);
                    }
                }
                e.get([ "axisLabel", "hideOverlap" ]) && m1(f1(F(l, (function(t) {
                    return {
                        label: t,
                        priority: t.z2,
                        defaultAttr: {
                            ignore: t.ignore
                        }
                    };
                }))));
            },
            axisName: function(t, e, n, i) {
                var r, o, a, s, l, u, h, c, p, d, f = bt(t.axisName, e.get("name"));
                f && (h = e.get("nameLocation"), u = t.nameDirection, o = e.getModel("nameTextStyle"), 
                c = e.get("nameGap") || 0, a = (p = e.axis.getExtent())[0] > p[1] ? -1 : 1, a = [ "start" === h ? p[0] - a * c : "end" === h ? p[1] + a * c : (p[0] + p[1]) / 2, xb(h) ? t.labelOffset + u * c : 0 ], 
                null != (c = e.get("nameRotate")) && (c = c * fb / 180), xb(h) ? r = gb.innerTextLayout(t.rotation, null != c ? c : t.rotation, u) : (u = t.rotation, 
                h, p, c = Mo((c = c || 0) - u), u = p[0] > p[1], p = "start" === h && !u || "start" !== h && u, 
                h = To(c - fb / 2) ? (d = p ? "bottom" : "top", "center") : To(c - 1.5 * fb) ? (d = p ? "top" : "bottom", 
                "center") : (d = "middle", c < 1.5 * fb && fb / 2 < c ? p ? "left" : "right" : p ? "right" : "left"), 
                r = {
                    rotation: c,
                    textAlign: h,
                    textVerticalAlign: d
                }, null == (d = t.axisNameAvailableWidth) || (d = Math.abs(d / Math.sin(r.rotation)), 
                isFinite(d)) || (d = null)), u = o.getFont(), c = (p = e.get("nameTruncate", !0) || {}).ellipsis, 
                h = bt(t.nameTruncateMaxWidth, p.maxWidth, d), t = new Qs({
                    x: a[0],
                    y: a[1],
                    rotation: r.rotation,
                    silent: gb.isLabelSilent(e),
                    style: xc(o, {
                        text: f,
                        font: u,
                        overflow: "truncate",
                        width: h,
                        ellipsis: c,
                        fill: o.getTextColor() || e.get([ "axisLine", "lineStyle", "color" ]),
                        align: o.get("align") || r.textAlign,
                        verticalAlign: o.get("verticalAlign") || r.textVerticalAlign
                    }),
                    z2: 1
                }), a = (p = {
                    el: t,
                    componentModel: e,
                    itemName: f
                }).itemTooltipOption, u = p.componentModel, h = p.itemName, a = H(a) ? {
                    formatter: a
                } : a, c = u.mainType, u = u.componentIndex, (s = {
                    componentType: c,
                    name: h,
                    $vars: [ "name" ]
                })[c + "Index"] = u, (l = p.formatterParamsExtra) && E(R(l), (function(t) {
                    Ft(s, t) || (s[t] = l[t], s.$vars.push(t));
                })), (p = pl(p.el)).componentMainType = c, p.componentIndex = u, p.tooltipConfig = {
                    name: h,
                    option: B({
                        content: h,
                        formatterParams: s
                    }, a)
                }, t.__fullText = f, t.anid = "name", e.get("triggerEvent") && ((o = gb.makeAxisEventDataBase(e)).targetType = "axisName", 
                o.name = f, pl(t).eventData = o), i.add(t), t.updateTransform(), n.add(t), t.decomposeTransform());
            }
        };
        function mb(t, e) {
            this.group = new io, this.opt = e, this.axisModel = t, B(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0,
                handleAutoShown: function() {
                    return !0;
                }
            });
            t = new io({
                x: e.position[0],
                y: e.position[1],
                rotation: e.rotation
            });
            t.updateTransform(), this._transformGroup = t;
        }
        function vb(t) {
            t && (t.ignore = !0);
        }
        function _b(t, e) {
            var n, i = t && t.getBoundingRect().clone(), r = e && e.getBoundingRect().clone();
            if (i && r) return ze(n = Oe([]), n, -t.rotation), i.applyTransform(Ne([], n, t.getLocalTransform())), 
            r.applyTransform(Ne([], n, e.getLocalTransform())), i.intersect(r);
        }
        function xb(t) {
            return "middle" === t || "center" === t;
        }
        function wb(t, e, n, i, r) {
            for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
                var u = t[l].coord;
                u = (a[0] = u, s[a[1] = 0] = u, s[1] = n, e && (ne(a, a, e), ne(s, s, e)), new gh({
                    shape: {
                        x1: a[0],
                        y1: a[1],
                        x2: s[0],
                        y2: s[1]
                    },
                    style: i,
                    z2: 2,
                    autoBatch: !0,
                    silent: !0
                }));
                cc(u.shape, u.style.lineWidth), u.anid = r + "_" + t[l].tickValue, o.push(u);
            }
            return o;
        }
        function bb(t) {
            var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
            return e && e.axesInfo[t.type + "||" + t.id];
        }
        var Sb, Mb = {};
        Au = (u(Tb, Sb = Pg), Tb.prototype.render = function(t, e, n, i) {
            var r, o, a, s, l, u;
            this.axisPointerClass && (r = bb(r = t)) && (l = r.axisPointerModel, o = r.axis.scale, 
            a = l.option, u = l.get("status"), null != (s = l.get("value")) && (s = o.parse(s)), 
            l = !!l.get([ "handle", "show" ]), null == u && (a.status = l ? "show" : "hide"), 
            (u = o.getExtent().slice())[0] > u[1] && u.reverse(), (s = null == s || s > u[1] ? u[1] : s) < u[0] && (s = u[0]), 
            a.value = s, l) && (a.status = r.axis.scale.isBlank() ? "hide" : "show"), Sb.prototype.render.apply(this, arguments), 
            this._doUpdateAxisPointerClass(t, n, !0);
        }, Tb.prototype.updateAxisPointer = function(t, e, n, i) {
            this._doUpdateAxisPointerClass(t, n, !1);
        }, Tb.prototype.remove = function(t, e) {
            var n = this._axisPointer;
            n && n.remove(e);
        }, Tb.prototype.dispose = function(t, e) {
            this._disposeAxisPointer(e), Sb.prototype.dispose.apply(this, arguments);
        }, Tb.prototype._doUpdateAxisPointerClass = function(t, e, n) {
            var i, r = Tb.getAxisPointerClass(this.axisPointerClass);
            r && ((i = (i = bb(i = t)) && i.axisPointerModel) ? (this._axisPointer || (this._axisPointer = new r)).render(t, i, e, n) : this._disposeAxisPointer(e));
        }, Tb.prototype._disposeAxisPointer = function(t) {
            this._axisPointer && this._axisPointer.dispose(t), this._axisPointer = null;
        }, Tb.registerAxisPointerClass = function(t, e) {
            Mb[t] = e;
        }, Tb.getAxisPointerClass = function(t) {
            return t && Mb[t];
        }, Tb.type = "axis", Tb);
        function Tb() {
            var t = null !== Sb && Sb.apply(this, arguments) || this;
            return t.type = Tb.type, t;
        }
        var Cb = Zo();
        var Ib, kb, Db = [ "axisLine", "axisTickLabel", "axisName" ], Ab = [ "splitArea", "splitLine", "minorSplitLine" ], Lb = (Ru = (u(Rb, kb = Au), 
        Rb.prototype.render = function(i, t, e, n) {
            this.group.removeAll();
            var r, o, a, s, l, u, h, c, p, d, f, g, y, m, v, _ = this._axisGroup;
            function x(t) {
                var e = {
                    x: t.x,
                    y: t.y,
                    rotation: t.rotation
                };
                return null != t.shape && (e.shape = O({}, t.shape)), e;
            }
            this._axisGroup = new io, this.group.add(this._axisGroup), i.get("show") && (r = i.getCoordSysModel(), 
            u = i, h = h || {}, l = (l = r).coordinateSystem, c = u.axis, p = {}, d = c.getAxesOnZeroOf()[0], 
            f = c.position, g = d ? "onZero" : f, c = c.dim, l = [ (l = l.getRect()).x, l.x + l.width, l.y, l.y + l.height ], 
            y = {
                left: 0,
                right: 1,
                top: 0,
                bottom: 1,
                onZero: 2
            }, m = u.get("offset") || 0, m = "x" === c ? [ l[2] - m, l[3] + m ] : [ l[0] - m, l[1] + m ], 
            d && (v = d.toGlobalCoord(d.dataToCoord(0)), m[y.onZero] = Math.max(Math.min(v, m[1]), m[0])), 
            p.position = [ "y" === c ? m[y[g]] : l[0], "x" === c ? m[y[g]] : l[3] ], p.rotation = Math.PI / 2 * ("x" === c ? 0 : 1), 
            p.labelDirection = p.tickDirection = p.nameDirection = {
                top: -1,
                bottom: 1,
                left: -1,
                right: 1
            }[f], p.labelOffset = d ? m[y[f]] - m[y.onZero] : 0, u.get([ "axisTick", "inside" ]) && (p.tickDirection = -p.tickDirection), 
            bt(h.labelInside, u.get([ "axisLabel", "inside" ])) && (p.labelDirection = -p.labelDirection), 
            v = u.get([ "axisLabel", "rotate" ]), p.labelRotate = "top" === g ? -v : v, p.z2 = 1, 
            l = new gb(i, O({
                handleAutoShown: function(t) {
                    for (var e = r.coordinateSystem.getCartesians(), n = 0; n < e.length; n++) if (gv(e[n].getOtherAxis(i.axis).scale)) return !0;
                    return !1;
                }
            }, p)), E(Db, l.add, l), this._axisGroup.add(l.getGroup()), E(Ab, (function(t) {
                i.get([ t, "show" ]) && Lb[t](this, this._axisGroup, i, r);
            }), this), n && "changeAxisOrder" === n.type && n.isInitSort || (c = _, d = this._axisGroup, 
            o = i, c && d && (a = {}, c.traverse((function(t) {
                pc(t) && t.anid && (a[t.anid] = t);
            })), s = a, d.traverse((function(t) {
                var e, n;
                pc(t) && t.anid && (e = s[t.anid]) && (n = x(t), t.attr(x(e)), jh(t, n, o, pl(t).dataIndex));
            })))), kb.prototype.render.call(this, i, t, e, n));
        }, Rb.prototype.remove = function() {
            Cb(this).splitAreaColors = null;
        }, Rb.type = "cartesianAxis", Rb), {
            splitLine: function(t, e, n, i) {
                var r = n.axis;
                if (!r.scale.isBlank()) {
                    n = n.getModel("splitLine");
                    for (var o = n.getModel("lineStyle"), a = V(a = o.get("color")) ? a : [ a ], s = i.coordinateSystem.getRect(), l = r.isHorizontal(), u = 0, h = r.getTicksCoords({
                        tickModel: n
                    }), c = [], p = [], d = o.getLineStyle(), f = 0; f < h.length; f++) {
                        var g = r.toGlobalCoord(h[f].coord), y = (g = (l ? (c[0] = g, c[1] = s.y, p[0] = g, 
                        p[1] = s.y + s.height) : (c[0] = s.x, c[1] = g, p[0] = s.x + s.width, p[1] = g), 
                        u++ % a.length), h[f].tickValue);
                        y = new gh({
                            anid: null != y ? "line_" + h[f].tickValue : null,
                            autoBatch: !0,
                            shape: {
                                x1: c[0],
                                y1: c[1],
                                x2: p[0],
                                y2: p[1]
                            },
                            style: B({
                                stroke: a[g]
                            }, d),
                            silent: !0
                        });
                        cc(y.shape, d.lineWidth), e.add(y);
                    }
                }
            },
            minorSplitLine: function(t, e, n, i) {
                var r = n.axis, o = (n = n.getModel("minorSplitLine").getModel("lineStyle"), i.coordinateSystem.getRect()), a = r.isHorizontal(), s = r.getMinorTicksCoords();
                if (s.length) for (var l = [], u = [], h = n.getLineStyle(), c = 0; c < s.length; c++) for (var p = 0; p < s[c].length; p++) {
                    var d = r.toGlobalCoord(s[c][p].coord);
                    d = (a ? (l[0] = d, l[1] = o.y, u[0] = d, u[1] = o.y + o.height) : (l[0] = o.x, 
                    l[1] = d, u[0] = o.x + o.width, u[1] = d), new gh({
                        anid: "minor_line_" + s[c][p].tickValue,
                        autoBatch: !0,
                        shape: {
                            x1: l[0],
                            y1: l[1],
                            x2: u[0],
                            y2: u[1]
                        },
                        style: h,
                        silent: !0
                    }));
                    cc(d.shape, h.lineWidth), e.add(d);
                }
            },
            splitArea: function(t, e, n, i) {
                var r = e, o = (e = i, (i = n).axis);
                if (!o.scale.isBlank()) {
                    i = i.getModel("splitArea"), n = i.getModel("areaStyle");
                    var a = n.get("color"), s = e.coordinateSystem.getRect(), l = o.getTicksCoords({
                        tickModel: i,
                        clamp: !0
                    });
                    if (l.length) {
                        var u = a.length, h = Cb(t).splitAreaColors, c = z(), p = 0;
                        if (h) for (var d = 0; d < l.length; d++) {
                            var f = h.get(l[d].tickValue);
                            if (null != f) {
                                p = (f + (u - 1) * d) % u;
                                break;
                            }
                        }
                        var g = o.toGlobalCoord(l[0].coord), y = n.getAreaStyle();
                        for (a = V(a) ? a : [ a ], d = 1; d < l.length; d++) {
                            var m = o.toGlobalCoord(l[d].coord), v = void 0, _ = void 0, x = void 0, w = void 0;
                            g = o.isHorizontal() ? (v = g, _ = s.y, w = s.height, v + (x = m - v)) : (v = s.x, 
                            _ = g, x = s.width, _ + (w = m - _)), m = l[d - 1].tickValue;
                            null != m && c.set(m, p), r.add(new qs({
                                anid: null != m ? "area_" + m : null,
                                shape: {
                                    x: v,
                                    y: _,
                                    width: x,
                                    height: w
                                },
                                style: B({
                                    fill: a[p]
                                }, y),
                                autoBatch: !0,
                                silent: !0
                            })), p = (p + 1) % u;
                        }
                        Cb(t).splitAreaColors = c;
                    }
                }
            }
        }), Pb = (u(Ob, Ib = Ru), Ob.type = "xAxis", Ob);
        function Ob() {
            var t = null !== Ib && Ib.apply(this, arguments) || this;
            return t.type = Ob.type, t;
        }
        function Rb() {
            var t = null !== kb && kb.apply(this, arguments) || this;
            return t.type = Rb.type, t.axisPointerClass = "CartesianAxisPointer", t;
        }
        u(zb, Nb = Ru), zb.type = "yAxis";
        var Nb, Eb = zb;
        function zb() {
            var t = null !== Nb && Nb.apply(this, arguments) || this;
            return t.type = Pb.type, t;
        }
        u(Hb, Bb = Pg), Hb.prototype.render = function(t, e) {
            this.group.removeAll(), t.get("show") && this.group.add(new qs({
                shape: t.coordinateSystem.getRect(),
                style: B({
                    fill: t.get("backgroundColor")
                }, t.getItemStyle()),
                silent: !0,
                z2: -1
            }));
        }, Hb.type = "grid";
        var Bb, Fb = Hb, Vb = {
            offset: 0
        };
        function Hb() {
            var t = null !== Bb && Bb.apply(this, arguments) || this;
            return t.type = "grid", t;
        }
        __((function(t) {
            t.registerComponentView(Fb), t.registerComponentModel(Ww), t.registerCoordinateSystem("cartesian2d", ub), 
            Zw(t, "x", Xw, Vb), Zw(t, "y", Xw, Vb), t.registerComponentView(Pb), t.registerComponentView(Eb), 
            t.registerPreprocessor((function(t) {
                t.xAxis && t.yAxis && !t.grid && (t.grid = {});
            }));
        })), __(H1);
        var Wb = {
            value: "eq",
            "<": "lt",
            "<=": "lte",
            ">": "gt",
            ">=": "gte",
            "=": "eq",
            "!=": "ne",
            "<>": "ne"
        }, Gb = (tS.prototype.evaluate = function(t) {
            var e = typeof t;
            return H(e) ? this._condVal.test(t) : !!W(e) && this._condVal.test(t + "");
        }, tS), Ub = (Jb.prototype.evaluate = function() {
            return this.value;
        }, Jb), Xb = (Qb.prototype.evaluate = function() {
            for (var t = this.children, e = 0; e < t.length; e++) if (!t[e].evaluate()) return !1;
            return !0;
        }, Qb), Yb = ($b.prototype.evaluate = function() {
            for (var t = this.children, e = 0; e < t.length; e++) if (t[e].evaluate()) return !0;
            return !1;
        }, $b), qb = (Kb.prototype.evaluate = function() {
            return !this.child.evaluate();
        }, Kb), jb = (Zb.prototype.evaluate = function() {
            for (var t = !!this.valueParser, e = (0, this.getValue)(this.valueGetterParam), n = t ? this.valueParser(e) : null, i = 0; i < this.subCondList.length; i++) if (!this.subCondList[i].evaluate(t ? n : e)) return !1;
            return !0;
        }, Zb);
        function Zb() {}
        function Kb() {}
        function $b() {}
        function Qb() {}
        function Jb() {}
        function tS(t) {
            null == (this._condVal = H(t) ? new RegExp(t) : xt(t) ? t : null) && f("");
        }
        function eS(t, e) {
            var n;
            if (!0 === t || !1 === t) return (n = new Ub).value = t, n;
            if (iS(t) || f(""), t.and) return nS("and", t, e);
            if (t.or) return nS("or", t, e);
            if (t.not) n = e, iS(o = (o = t).not) || f(""), (l = new qb).child = eS(o, n), l.child || f(""); else {
                for (var i = t, r = e, o = r.prepareGetValue(i), a = [], s = R(i), l = i.parser, u = l ? Hf(l) : null, h = 0; h < s.length; h++) {
                    var c, p = s[h];
                    "parser" === p || r.valueGetterAttrMap.get(p) || (c = Ft(Wb, p) ? Wb[p] : p, p = i[p], 
                    p = u ? u(p) : p, (c = function(t, e) {
                        return "eq" === t || "ne" === t ? new qf("eq" === t, e) : Ft(Wf, t) ? new Gf(t, e) : null;
                    }(c, p) || "reg" === c && new Gb(p)) || f(""), a.push(c));
                }
                a.length || f(""), (l = new jb).valueGetterParam = o, l.valueParser = u, l.getValue = r.getValue, 
                l.subCondList = a;
            }
            return l;
        }
        function nS(t, e, n) {
            e = e[t], V(e) || f(""), e.length || f(""), t = new ("and" === t ? Xb : Yb);
            return t.children = F(e, (function(t) {
                return eS(t, n);
            })), t.children.length || f(""), t;
        }
        function iS(t) {
            return P(t) && !ut(t);
        }
        oS.prototype.evaluate = function() {
            return this._cond.evaluate();
        };
        var rS = oS;
        function oS(t, e) {
            this._cond = eS(t, e);
        }
        var aS = {
            type: "echarts:filter",
            transform: function(t) {
                for (var e, n, i = t.upstream, r = (t = t.config, n = {
                    valueGetterAttrMap: z({
                        dimension: !0
                    }),
                    prepareGetValue: function(t) {
                        var e = t.dimension;
                        t = (Ft(t, "dimension") || f(""), i.getDimensionInfo(e));
                        return t || f(""), {
                            dimIdx: t.index
                        };
                    },
                    getValue: function(t) {
                        return i.retrieveValueFromItem(e, t.dimIdx);
                    }
                }, new rS(t, n)), o = [], a = 0, s = i.count(); a < s; a++) e = i.getRawDataItem(a), 
                r.evaluate() && o.push(e);
                return {
                    data: o
                };
            }
        }, sS = {
            type: "echarts:sort",
            transform: function(t) {
                var a = t.upstream, s = (t = t.config, t = zo(t), t.length || f(""), []);
                t = (E(t, (function(t) {
                    var e = t.dimension, n = t.order, i = t.parser, r = (t = t.incomparable, e = (null == e && f(""), 
                    "asc" !== n && "desc" !== n && f(""), t && "min" !== t && "max" !== t && f(""), 
                    "asc" !== n && "desc" !== n && f(""), a.getDimensionInfo(e)), e || f(""), i ? Hf(i) : null);
                    i && !r && f(""), s.push({
                        dimIdx: e.index,
                        parser: r,
                        comparator: new Uf(n, t)
                    });
                })), a.sourceFormat);
                t !== Kp && t !== $p && f("");
                for (var e = [], n = 0, i = a.count(); n < i; n++) e.push(a.getRawDataItem(n));
                return e.sort((function(t, e) {
                    for (var n = 0; n < s.length; n++) {
                        var i = s[n], r = a.retrieveValueFromItem(t, i.dimIdx), o = a.retrieveValueFromItem(e, i.dimIdx);
                        i = (i.parser && (r = i.parser(r), o = i.parser(o)), i.comparator.evaluate(r, o));
                        if (0 !== i) return i;
                    }
                    return 0;
                })), {
                    data: e
                };
            }
        };
        __((function(t) {
            t.registerTransform(aS), t.registerTransform(sS);
        }));
        var lS = Math.sin, uS = Math.cos, hS = Math.PI, cS = 2 * Math.PI, pS = 180 / hS, dS = (fS.prototype.reset = function(t) {
            this._start = !0, this._d = [], this._str = "", this._p = Math.pow(10, t || 4);
        }, fS.prototype.moveTo = function(t, e) {
            this._add("M", t, e);
        }, fS.prototype.lineTo = function(t, e) {
            this._add("L", t, e);
        }, fS.prototype.bezierCurveTo = function(t, e, n, i, r, o) {
            this._add("C", t, e, n, i, r, o);
        }, fS.prototype.quadraticCurveTo = function(t, e, n, i) {
            this._add("Q", t, e, n, i);
        }, fS.prototype.arc = function(t, e, n, i, r, o) {
            this.ellipse(t, e, n, n, 0, i, r, o);
        }, fS.prototype.ellipse = function(t, e, n, i, r, o, a, s) {
            var l, u = a - o, h = (s = !s, Math.abs(u)), c = Ci(h - cS) || (s ? cS <= u : cS <= -u), p = (h = !!c || !Ci(h) && hS <= (0 < u ? u % cS : u % cS + cS) == !!s, 
            u = t + n * uS(o), e + i * lS(o));
            r = (this._start && this._add("M", u, p), Math.round(r * pS));
            c ? (c = 1 / this._p, this._add("A", n, i, r, 1, +s, t + n * uS(o + (l = (s ? 1 : -1) * (cS - c))), e + i * lS(o + l)), 
            .01 < c && this._add("A", n, i, r, 0, +s, u, p)) : (o = t + n * uS(a), l = e + i * lS(a), 
            this._add("A", n, i, r, +h, +s, o, l));
        }, fS.prototype.rect = function(t, e, n, i) {
            this._add("M", t, e), this._add("l", n, 0), this._add("l", 0, i), this._add("l", -n, 0), 
            this._add("Z");
        }, fS.prototype.closePath = function() {
            0 < this._d.length && this._add("Z");
        }, fS.prototype._add = function(t, e, n, i, r, o, a, s, l) {
            for (var u = [], h = this._p, c = 1; c < arguments.length; c++) {
                var p = arguments[c];
                if (isNaN(p)) return void (this._invalid = !0);
                u.push(Math.round(p * h) / h);
            }
            this._d.push(t + u.join(" ")), this._start = "Z" === t;
        }, fS.prototype.generateStr = function() {
            this._str = this._invalid ? "" : this._d.join(""), this._d = [];
        }, fS.prototype.getStr = function() {
            return this._str;
        }, fS);
        function fS() {}
        var gS = "none", yS = Math.round;
        var mS = [ "lineCap", "miterLimit", "lineJoin" ], vS = F(mS, (function(t) {
            return "stroke-" + t.toLowerCase();
        }));
        function _S(t, e, n, i) {
            var r = null == e.opacity ? 1 : e.opacity;
            if (n instanceof Fs) t("opacity", r); else if (null != (o = (o = e).fill) && o !== gS ? (t("fill", (o = Ti(e.fill)).color), 
            o = null != e.fillOpacity ? e.fillOpacity * o.opacity * r : o.opacity * r, (i || o < 1) && t("fill-opacity", o)) : t("fill", gS), 
            null != (o = (o = e).stroke) && o !== gS) {
                var o = Ti(e.stroke), a = (t("stroke", o.color), e.strokeNoScale ? n.getLineScale() : 1);
                a = a ? (e.lineWidth || 0) / a : 0, o = null != e.strokeOpacity ? e.strokeOpacity * o.opacity * r : o.opacity * r, 
                r = e.strokeFirst;
                !i && 1 == a || t("stroke-width", a), (i || r) && t("paint-order", r ? "stroke" : "fill"), 
                (i || o < 1) && t("stroke-opacity", o), e.lineDash ? (r = (a = Vy(n))[0], o = a[1], 
                r && (o = yS(o || 0), t("stroke-dasharray", r.join(",")), o || i) && t("stroke-dashoffset", o)) : i && t("stroke-dasharray", gS);
                for (var s = 0; s < mS.length; s++) {
                    var l = mS[s];
                    (i || e[l] !== Ds[l]) && (l = e[l] || Ds[l]) && t(vS[s], l);
                }
            } else i && t("stroke", gS);
        }
        var xS = "http://www.w3.org/2000/svg", wS = "http://www.w3.org/1999/xlink", bS = "http://www.w3.org/2000/xmlns/", SS = "http://www.w3.org/XML/1998/namespace", MS = "ecmeta_";
        function TS(t) {
            return document.createElementNS(xS, t);
        }
        function CS(t, e, n, i, r) {
            return {
                tag: t,
                attrs: n || {},
                children: i,
                text: r,
                key: e
            };
        }
        function IS(t, e) {
            var o = (e = e || {}).newline ? "\n" : "";
            return function t(e) {
                var n = e.children, i = e.tag, r = e.attrs;
                e = e.text;
                return function(t, e) {
                    var n = [];
                    if (e) for (var i in e) {
                        var r = e[i];
                        !1 !== r && (!0 !== r && null != r && (i += '="' + r + '"'), n.push(i));
                    }
                    return "<" + t + " " + n.join(" ") + ">";
                }(i, r) + ("style" !== i ? _e(e) : e || "") + (n ? o + F(n, t).join(o) + o : "") + "</" + i + ">";
            }(t);
        }
        function kS(t) {
            return {
                zrId: t,
                shadowCache: {},
                patternCache: {},
                gradientCache: {},
                clipPathCache: {},
                defs: {},
                cssNodes: {},
                cssAnims: {},
                cssStyleCache: {},
                cssAnimIdx: 0,
                shadowIdx: 0,
                gradientIdx: 0,
                patternIdx: 0,
                clipPathIdx: 0
            };
        }
        function DS(t, e, n, i) {
            return CS("svg", "root", {
                width: t,
                height: e,
                xmlns: xS,
                "xmlns:xlink": wS,
                version: "1.1",
                baseProfile: "full",
                viewBox: !!i && "0 0 " + t + " " + e
            }, n);
        }
        var AS = 0;
        var LS = {
            cubicIn: "0.32,0,0.67,0",
            cubicOut: "0.33,1,0.68,1",
            cubicInOut: "0.65,0,0.35,1",
            quadraticIn: "0.11,0,0.5,0",
            quadraticOut: "0.5,1,0.89,1",
            quadraticInOut: "0.45,0,0.55,1",
            quarticIn: "0.5,0,0.75,0",
            quarticOut: "0.25,1,0.5,1",
            quarticInOut: "0.76,0,0.24,1",
            quinticIn: "0.64,0,0.78,0",
            quinticOut: "0.22,1,0.36,1",
            quinticInOut: "0.83,0,0.17,1",
            sinusoidalIn: "0.12,0,0.39,0",
            sinusoidalOut: "0.61,1,0.88,1",
            sinusoidalInOut: "0.37,0,0.63,1",
            exponentialIn: "0.7,0,0.84,0",
            exponentialOut: "0.16,1,0.3,1",
            exponentialInOut: "0.87,0,0.13,1",
            circularIn: "0.55,0,1,0.45",
            circularOut: "0,0.55,0.45,1",
            circularInOut: "0.85,0,0.15,1"
        }, PS = "transform-origin";
        var OS = {
            fill: "fill",
            opacity: "opacity",
            lineWidth: "stroke-width",
            lineDashOffset: "stroke-dashoffset"
        };
        function RS(t, e) {
            var n = e.zrId + "-ani-" + e.cssAnimIdx++;
            return e.cssAnims[n] = t, n;
        }
        function NS(t) {
            return H(t) ? LS[t] ? "cubic-bezier(" + LS[t] + ")" : jn(t) ? t : "" : "";
        }
        function ES(D, A, L, P) {
            var t = D.animators, e = t.length, n = [];
            if (D instanceof kh) {
                if (r = function(t, e, u) {
                    t = t.shape.paths;
                    var h, c, p = {};
                    if (E(t, (function(t) {
                        var e = kS(u.zrId), n = (t = (e.animation = !0, ES(t, {}, e, !0), e.cssAnims), e.cssNodes), i = (e = R(t), 
                        e.length);
                        if (i) {
                            var r, o, a = t[c = e[i - 1]];
                            for (r in a) {
                                var s = a[r];
                                p[r] = p[r] || {
                                    d: ""
                                }, p[r].d += s.d || "";
                            }
                            for (o in n) {
                                var l = n[o].animation;
                                0 <= l.indexOf(c) && (h = l);
                            }
                        }
                    })), h) return e.d = !1, t = RS(p, u), h.replace(c, t);
                }(D, A, L)) n.push(r); else if (!e) return;
            } else if (!e) return;
            for (var i, r, o, a = {}, s = 0; s < e; s++) {
                var l = t[s], u = [ l.getMaxTime() / 1e3 + "s" ], h = NS(l.getClip().easing), c = l.getDelay();
                h = (u.push(h || "linear"), c && u.push(c / 1e3 + "s"), l.getLoop() && u.push("infinite"), 
                u.join(" "));
                a[h] = a[h] || [ h, [] ], a[h][1].push(l);
            }
            function p(t) {
                var e, n = t[1], i = n.length, r = {}, o = {}, a = {}, f = "animation-timing-function";
                function s(t, e, n) {
                    for (var i = t.getTracks(), r = t.getMaxTime(), o = 0; o < i.length; o++) {
                        var a = i[o];
                        if (a.needsAnimate()) {
                            var s = a.keyframes, l = a.propName;
                            if (l = n ? n(l) : l) for (var u = 0; u < s.length; u++) {
                                var h = s[u], c = Math.round(h.time / r * 100) + "%", p = NS(h.easing), d = h.rawValue;
                                (H(d) || W(d)) && (e[c] = e[c] || {}, e[c][l] = h.rawValue, p) && (e[c][f] = p);
                            }
                        }
                    }
                }
                for (var l, u = 0; u < i; u++) (v = (m = n[u]).targetName) ? "shape" === v && s(m, o) : P || s(m, r);
                for (S in r) {
                    var h = {}, c = (Nr(h, D), O(h, r[S]), zi(h)), p = r[S][f];
                    a[S] = c ? {
                        transform: c
                    } : {}, c = a[S], l = void 0, l = h.originX, h = h.originY, (l || h) && (c[PS] = l + "px " + h + "px"), 
                    p && (a[S][f] = p);
                }
                var d, g, y, m, v, _ = !0;
                for (S in o) {
                    a[S] = a[S] || {};
                    var x = !e, w = (p = o[S][f], (e = x ? new fs : e).len()), b = (e.reset(), a[S].d = (g = o[S], 
                    y = e, b = void 0, b = O({}, (d = D).shape), O(b, g), d.buildPath(y, b), (g = new dS).reset(Ei(d)), 
                    y.rebuildPath(g, 1), g.generateStr(), g.getStr()), e.len());
                    if (!x && w !== b) {
                        _ = !1;
                        break;
                    }
                    p && (a[S][f] = p);
                }
                if (!_) for (var S in a) delete a[S].d;
                if (!P) for (u = 0; u < i; u++) "style" === (v = (m = n[u]).targetName) && s(m, a, (function(t) {
                    return OS[t];
                }));
                var M, T = R(a), C = !0;
                for (u = 1; u < T.length; u++) {
                    var I = T[u - 1], k = T[u];
                    if (a[I][PS] !== a[k][PS]) {
                        C = !1;
                        break;
                    }
                    M = a[I][PS];
                }
                if (C && M) {
                    for (var S in a) a[S][PS] && delete a[S][PS];
                    A[PS] = M;
                }
                if (ct(T, (function(t) {
                    return 0 < R(a[t]).length;
                })).length) return RS(a, L) + " " + t[0] + " both";
            }
            for (i in a) (r = p(a[i])) && n.push(r);
            n.length && (o = L.zrId + "-cls-" + AS++, L.cssNodes["." + o] = {
                animation: n.join(",")
            }, A.class = o);
        }
        function zS(t, e, n, i) {
            var r = JSON.stringify(t), o = n.cssStyleCache[r];
            o || (o = n.zrId + "-cls-" + AS++, n.cssStyleCache[r] = o, n.cssNodes["." + o + (i ? ":hover" : "")] = t), 
            e.class = e.class ? e.class + " " + o : o;
        }
        var BS = Math.round;
        function FS(t) {
            return t && H(t.src);
        }
        function VS(t) {
            return t && k(t.toDataURL);
        }
        function HS(i, r, o, a) {
            _S((function(t, e) {
                var n = "fill" === t || "stroke" === t;
                n && Ri(e) ? $S(r, i, t, a) : n && Li(e) ? QS(o, i, t, a) : i[t] = n && "none" === e ? "transparent" : e;
            }), r, o, !1);
            var t = i, e = a;
            if (function(t) {
                return t && (t.shadowBlur || t.shadowOffsetX || t.shadowOffsetY);
            }(f = (u = o).style)) {
                var n = function(t) {
                    var e = t.style;
                    t = t.getGlobalScale();
                    return [ e.shadowColor, (e.shadowBlur || 0).toFixed(2), (e.shadowOffsetX || 0).toFixed(2), (e.shadowOffsetY || 0).toFixed(2), t[0], t[1] ].join(",");
                }(u), s = e.shadowCache, l = s[n];
                if (!l) {
                    var u = u.getGlobalScale(), h = u[0];
                    u = u[1];
                    if (!h || !u) return;
                    var c = f.shadowOffsetX || 0, p = f.shadowOffsetY || 0, d = f.shadowBlur, f = Ti(f.shadowColor), g = f.opacity;
                    f = f.color, d = d / 2 / h + " " + d / 2 / u;
                    l = e.zrId + "-s" + e.shadowIdx++, e.defs[l] = CS("filter", l, {
                        id: l,
                        x: "-100%",
                        y: "-100%",
                        width: "300%",
                        height: "300%"
                    }, [ CS("feDropShadow", "", {
                        dx: c / h,
                        dy: p / u,
                        stdDeviation: d,
                        "flood-color": f,
                        "flood-opacity": g
                    }) ]), s[n] = l;
                }
                t.filter = Ni(l);
            }
        }
        function WS(n, t) {
            var e = po(t);
            e && (e.each((function(t, e) {
                null != t && (n[(MS + e).toLowerCase()] = t + "");
            })), t.isSilent()) && (n[MS + "silent"] = "true");
        }
        function GS(t) {
            return Ci(t[0] - 1) && Ci(t[1]) && Ci(t[2]) && Ci(t[3] - 1);
        }
        function US(t, e, n) {
            var i;
            !e || Ci((i = e)[4]) && Ci(i[5]) && GS(e) || (i = n ? 10 : 1e4, t.transform = GS(e) ? "translate(" + BS(e[4] * i) / i + " " + BS(e[5] * i) / i + ")" : "matrix(" + Ii((n = e)[0]) + "," + Ii(n[1]) + "," + Ii(n[2]) + "," + Ii(n[3]) + "," + ki(n[4]) + "," + ki(n[5]) + ")");
        }
        function XS(t, e, n) {
            for (var i = t.points, r = [], o = 0; o < i.length; o++) r.push(BS(i[o][0] * n) / n), 
            r.push(BS(i[o][1] * n) / n);
            e.points = r.join(" ");
        }
        function YS(t) {
            return !t.smooth;
        }
        var qS, jS = {
            circle: [ (qS = F([ "cx", "cy", "r" ], (function(t) {
                return "string" == typeof t ? [ t, t ] : t;
            })), function(t, e, n) {
                for (var i = 0; i < qS.length; i++) {
                    var r = qS[i], o = t[r[0]];
                    null != o && (e[r[1]] = BS(o * n) / n);
                }
            }) ],
            polyline: [ XS, YS ],
            polygon: [ XS, YS ]
        };
        function ZS(t, e) {
            var n, i, r, o, a, s = t.style, l = t.shape, u = jS[t.type], h = {}, c = e.animation, p = "path", d = t.style.strokePercent, f = e.compress && Ei(t) || 4;
            return !u || e.willUpdate || u[1] && !u[1](l) || c && function(t) {
                for (var e = t.animators, n = 0; n < e.length; n++) if ("shape" === e[n].targetName) return 1;
            }(t) || d < 1 ? (c = !t.path || t.shapeChanged(), t.path || t.createPathProxy(), 
            n = t.path, c && (n.beginPath(), t.buildPath(n, t.shape), t.pathUpdated()), c = n.getVersion(), 
            r = (i = t).__svgPathBuilder, i.__svgPathVersion === c && r && d === i.__svgPathStrokePercent || ((r = r || (i.__svgPathBuilder = new dS)).reset(f), 
            n.rebuildPath(r, d), r.generateStr(), i.__svgPathVersion = c, i.__svgPathStrokePercent = d), 
            h.d = r.getStr()) : (p = t.type, n = Math.pow(10, f), u[0](l, h, n)), US(h, t.transform), 
            HS(h, s, t, e), WS(h, t), e.animation && ES(t, h, e), e.emphasis && (c = h, i = e, 
            (d = t).ignore || (d.isSilent() ? zS(a = {
                "pointer-events": "none"
            }, c, i, !0) : (!(f = (r = d.states.emphasis && d.states.emphasis.style ? d.states.emphasis.style : {}).fill) && (o = d.style && d.style.fill, 
            u = d.states.select && d.states.select.style && d.states.select.style.fill, u = 0 <= d.currentStates.indexOf("select") && u || o) && (f = Si(u)), 
            (o = r.lineWidth) && (o /= !r.strokeNoScale && d.transform ? d.transform[0] : 1), 
            a = {
                cursor: "pointer"
            }, f && (a.fill = f), r.stroke && (a.stroke = r.stroke), o && (a["stroke-width"] = o), 
            zS(a, c, i, !0)))), CS(p, t.id + "", h);
        }
        function KS(t, e) {
            if (t instanceof Z) return ZS(t, e);
            if (t instanceof Fs) {
                var i = e, r = (n = t).style;
                if ((o = r.image) && !H(o) && (FS(o) ? o = o.src : VS(o) && (o = o.toDataURL())), 
                o) return a = r.x || 0, s = r.y || 0, o = {
                    href: o,
                    width: r.width,
                    height: r.height
                }, a && (o.x = a), s && (o.y = s), US(o, n.transform), HS(o, r, n, i), WS(o, n), 
                i.animation && ES(n, o, i), CS("image", n.id + "", o);
            } else if (t instanceof Rs) {
                var a = t, s = e;
                if (r = a.style, null != (i = r.text) && (i += ""), i && !isNaN(r.x) && !isNaN(r.y)) {
                    var n = r.font || K, o = r.x || 0, l = (t = r.y || 0, e = Wr(n), "top" === (l = r.textBaseline) ? t += e / 2 : "bottom" === l && (t -= e / 2), 
                    t);
                    e = {
                        "dominant-baseline": "central",
                        "text-anchor": Di[r.textAlign] || r.textAlign
                    };
                    if (ol(r)) {
                        t = "";
                        var u = r.fontStyle, h = il(r.fontSize);
                        if (!parseFloat(h)) return;
                        var c = r.fontFamily || w, p = r.fontWeight;
                        t += "font-size:" + h + ";font-family:" + c + ";", u && "normal" !== u && (t += "font-style:" + u + ";"), 
                        p && "normal" !== p && (t += "font-weight:" + p + ";"), e.style = t;
                    } else e.style = "font: " + n;
                    return i.match(/\s/) && (e["xml:space"] = "preserve"), o && (e.x = o), l && (e.y = l), 
                    US(e, a.transform), HS(e, r, a, s), WS(e, a), s.animation && ES(a, e, s), CS("text", a.id + "", e, void 0, i);
                }
            }
        }
        function $S(t, e, n, i) {
            t = t[n];
            var r, o = {
                gradientUnits: t.global ? "userSpaceOnUse" : "objectBoundingBox"
            };
            if (Pi(t)) r = "linearGradient", o.x1 = t.x, o.y1 = t.y, o.x2 = t.x2, o.y2 = t.y2; else {
                if (!Oi(t)) return;
                r = "radialGradient", o.cx = N(t.x, .5), o.cy = N(t.y, .5), o.r = N(t.r, .5);
            }
            for (var a = t.colorStops, s = [], l = 0, u = a.length; l < u; ++l) {
                var h = 100 * ki(a[l].offset) + "%", c = Ti(a[l].color), p = c.color;
                c = c.opacity, h = {
                    offset: h
                };
                h["stop-color"] = p, c < 1 && (h["stop-opacity"] = c), s.push(CS("stop", l + "", h));
            }
            t = IS(CS(r, "", o, s));
            var d = i.gradientCache, f = d[t];
            f || (f = i.zrId + "-g" + i.gradientIdx++, d[t] = f, o.id = f, i.defs[f] = CS(r, f, o, s)), 
            e[n] = Ni(f);
        }
        function QS(t, e, n, i) {
            var r, o, a, s, l, u, h, c, p = t.style[n], d = t.getBoundingRect(), f = {}, g = p.repeat, y = "no-repeat" === g, m = "repeat-x" === g, v = "repeat-y" === g;
            Ai(p) ? (o = p.imageWidth, a = p.imageHeight, g = void 0, H(h = p.image) ? g = h : FS(h) ? g = h.src : VS(h) && (g = h.toDataURL()), 
            "undefined" == typeof Image ? (Ct(o, h = "Image width/height must been given explictly in svg-ssr renderer."), 
            Ct(a, h)) : null != o && null != a || (s = function(t, e) {
                var n, i;
                t && (n = t.elm, i = o || e.width, e = a || e.height, "pattern" === t.tag && (m ? (e = 1, 
                i /= d.width) : v && (i = 1, e /= d.height)), t.attrs.width = i, t.attrs.height = e, 
                n) && (n.setAttribute("width", i), n.setAttribute("height", e));
            }, (h = va(g, null, t, (function(t) {
                y || s(u, t), s(r, t);
            }))) && h.width && h.height && (o = o || h.width, a = a || h.height)), r = CS("image", "img", {
                href: g,
                width: o,
                height: a
            }), f.width = o, f.height = a) : p.svgElement && (r = _(p.svgElement), f.width = p.svgWidth, 
            f.height = p.svgHeight), r && (y ? c = l = 1 : m ? (l = 1, c = f.width / d.width) : v ? (c = 1, 
            l = f.height / d.height) : f.patternUnits = "userSpaceOnUse", null == c || isNaN(c) || (f.width = c), 
            null == l || isNaN(l) || (f.height = l), (t = zi(p)) && (f.patternTransform = t), 
            h = IS(u = CS("pattern", "", f, [ r ])), (c = (g = i.patternCache)[h]) || (c = i.zrId + "-p" + i.patternIdx++, 
            g[h] = c, f.id = c, u = i.defs[c] = CS("pattern", c, f, [ r ])), e[n] = Ni(c));
        }
        function JS(t) {
            return document.createTextNode(t);
        }
        function tM(t, e, n) {
            t.insertBefore(e, n);
        }
        function eM(t, e) {
            t.removeChild(e);
        }
        function nM(t, e) {
            t.appendChild(e);
        }
        function iM(t) {
            return t.parentNode;
        }
        function rM(t) {
            return t.nextSibling;
        }
        function oM(t, e) {
            t.textContent = e;
        }
        var aM = 58, sM = 120, lM = CS("", "");
        function uM(t) {
            return void 0 === t;
        }
        function hM(t) {
            return void 0 !== t;
        }
        function cM(t, e) {
            var n = t.key === e.key;
            return t.tag === e.tag && n;
        }
        function pM(t) {
            var e, n = t.children, i = t.tag;
            if (hM(i)) {
                var r = t.elm = TS(i);
                if (gM(lM, t), V(n)) for (e = 0; e < n.length; ++e) {
                    var o = n[e];
                    null != o && nM(r, pM(o));
                } else hM(t.text) && !P(t.text) && nM(r, JS(t.text));
            } else t.elm = JS(t.text);
            return t.elm;
        }
        function dM(t, e, n, i, r) {
            for (;i <= r; ++i) {
                var o = n[i];
                null != o && tM(t, pM(o), e);
            }
        }
        function fM(t, e, n, i) {
            for (;n <= i; ++n) {
                var r = e[n];
                null != r && (hM(r.tag) ? eM(iM(r.elm), r.elm) : eM(t, r.elm));
            }
        }
        function gM(t, e) {
            var n, i = e.elm, r = t && t.attrs || {}, o = e.attrs || {};
            if (r !== o) {
                for (n in o) {
                    var a = o[n];
                    r[n] !== a && (!0 === a ? i.setAttribute(n, "") : !1 === a ? i.removeAttribute(n) : "style" === n ? i.style.cssText = a : n.charCodeAt(0) !== sM ? i.setAttribute(n, a) : "xmlns:xlink" === n || "xmlns" === n ? i.setAttributeNS(bS, n, a) : n.charCodeAt(3) === aM ? i.setAttributeNS(SS, n, a) : n.charCodeAt(5) === aM ? i.setAttributeNS(wS, n, a) : i.setAttribute(n, a));
                }
                for (n in r) n in o || i.removeAttribute(n);
            }
        }
        function yM(t, e, n) {
            for (var i, r, o, a = 0, s = 0, l = e.length - 1, u = e[0], h = e[l], c = n.length - 1, p = n[0], d = n[c]; a <= l && s <= c; ) null == u ? u = e[++a] : null == h ? h = e[--l] : null == p ? p = n[++s] : null == d ? d = n[--c] : cM(u, p) ? (mM(u, p), 
            u = e[++a], p = n[++s]) : cM(h, d) ? (mM(h, d), h = e[--l], d = n[--c]) : cM(u, d) ? (mM(u, d), 
            tM(t, u.elm, rM(h.elm)), u = e[++a], d = n[--c]) : p = (cM(h, p) ? (mM(h, p), tM(t, h.elm, u.elm), 
            h = e[--l]) : (uM(i) && (i = function(t, e, n) {
                for (var i = {}, r = e; r <= n; ++r) {
                    var o = t[r].key;
                    void 0 !== o && (i[o] = r);
                }
                return i;
            }(e, a, l)), uM(r = i[p.key]) || (o = e[r]).tag !== p.tag ? tM(t, pM(p), u.elm) : (mM(o, p), 
            e[r] = void 0, tM(t, o.elm, u.elm))), n[++s]);
            (a <= l || s <= c) && (l < a ? dM(t, null == n[c + 1] ? null : n[c + 1].elm, n, s, c) : fM(t, e, a, l));
        }
        function mM(t, e) {
            var n = e.elm = t.elm, i = t.children, r = e.children;
            t !== e && (gM(t, e), uM(e.text) ? hM(i) && hM(r) ? i !== r && yM(n, i, r) : hM(r) ? (hM(t.text) && oM(n, ""), 
            dM(n, null, r, 0, r.length - 1)) : hM(i) ? fM(n, i, 0, i.length - 1) : hM(t.text) && oM(n, "") : t.text !== e.text && (hM(i) && fM(n, i, 0, i.length - 1), 
            oM(n, e.text)));
        }
        var vM = 0;
        function _M(t, e, n) {
            var i;
            this.type = "svg", this.refreshHover = xM(), this.configLayer = xM(), this.storage = e, 
            this._opts = n = O({}, n), this.root = t, this._id = "zr" + vM++, this._oldVNode = DS(n.width, n.height), 
            t && !n.ssr && ((e = this._viewport = document.createElement("div")).style.cssText = "position:relative;overflow:hidden", 
            i = this._svgDom = this._oldVNode.elm = TS("svg"), gM(null, this._oldVNode), e.appendChild(i), 
            t.appendChild(e)), this.resize(n.width, n.height);
        }
        function xM() {
            return function() {};
        }
        _M.prototype.getType = function() {
            return this.type;
        }, _M.prototype.getViewportRoot = function() {
            return this._viewport;
        }, _M.prototype.getViewportRootOffset = function() {
            var t = this.getViewportRoot();
            if (t) return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            };
        }, _M.prototype.getSvgDom = function() {
            return this._svgDom;
        }, _M.prototype.refresh = function() {
            var t, e, n, i, r;
            this.root && ((t = this.renderToVNode({
                willUpdate: !0
            })).attrs.style = "position:absolute;left:0;top:0;user-select:none", cM(e = this._oldVNode, n = t) ? mM(e, n) : (r = iM(i = e.elm), 
            pM(n), null !== r && (tM(r, n.elm, rM(i)), fM(r, [ e ], 0, 0))), this._oldVNode = t);
        }, _M.prototype.renderOneToVNode = function(t) {
            return KS(t, kS(this._id));
        }, _M.prototype.renderToVNode = function(t) {
            t = t || {};
            var n, r, o, a, s, e = this.storage.getDisplayList(!0), i = this._width, l = this._height, u = kS(this._id), h = (u.animation = t.animation, 
            u.willUpdate = t.willUpdate, u.compress = t.compress, u.emphasis = t.emphasis, []), c = this._bgVNode = function(t, e, n, i) {
                var r;
                n && "none" !== n && (r = CS("rect", "bg", {
                    width: t,
                    height: e,
                    x: "0",
                    y: "0"
                }), Ri(n) ? $S({
                    fill: n
                }, r.attrs, "fill", i) : Li(n) ? QS({
                    style: {
                        fill: n
                    },
                    dirty: Vt,
                    getBoundingRect: function() {
                        return {
                            width: t,
                            height: e
                        };
                    }
                }, r.attrs, "fill", i) : (i = Ti(n), n = i.color, i = i.opacity, r.attrs.fill = n, 
                i < 1 && (r.attrs["fill-opacity"] = i)));
                return r;
            }(i, l, this._backgroundColor, u);
            c = (c && h.push(c), t.compress ? null : this._mainVNode = CS("g", "main", {}, [])), 
            e = (this._paintList(e, u, c ? c.children : h), c && h.push(c), F(R(u.defs), (function(t) {
                return u.defs[t];
            })));
            return e.length && h.push(CS("defs", "defs", {}, e)), t.animation && (n = u.cssNodes, 
            r = u.cssAnims, o = (c = (c = {
                newline: !0
            }) || {}).newline ? "\n" : "", a = " {" + o, s = o + "}", c = F(R(n), (function(e) {
                return e + a + F(R(n[e]), (function(t) {
                    return t + ":" + n[e][t] + ";";
                })).join(o) + s;
            })).join(o), e = F(R(r), (function(i) {
                return "@keyframes " + i + a + F(R(r[i]), (function(n) {
                    return n + a + F(R(r[i][n]), (function(t) {
                        var e = r[i][n][t];
                        return t + ":" + (e = "d" === t ? 'path("' + e + '")' : e) + ";";
                    })).join(o) + s;
                })).join(o) + s;
            })).join(o), c = c || e ? [ "<![CDATA[", c, e, "]]>" ].join(o) : "") && (e = CS("style", "stl", {}, [], c), 
            h.push(e)), DS(i, l, h, t.useViewBox);
        }, _M.prototype.renderToString = function(t) {
            return IS(this.renderToVNode({
                animation: N((t = t || {}).cssAnimation, !0),
                emphasis: N(t.cssEmphasis, !0),
                willUpdate: !1,
                compress: !0,
                useViewBox: N(t.useViewBox, !0)
            }), {
                newline: !0
            });
        }, _M.prototype.setBackgroundColor = function(t) {
            this._backgroundColor = t;
        }, _M.prototype.getSvgRoot = function() {
            return this._mainVNode && this._mainVNode.elm;
        }, _M.prototype._paintList = function(t, e, n) {
            for (var i, r, o, a, s, l, u, h = t.length, c = [], p = 0, d = 0, f = 0; f < h; f++) {
                var g = t[f];
                if (!g.invisible) {
                    var y = g.__clipPaths, m = y && y.length || 0, v = M && M.length || 0, _ = void 0;
                    for (_ = Math.max(m - 1, v - 1); 0 <= _ && (!y || !M || y[_] !== M[_]); _--) ;
                    for (var x = v - 1; _ < x; x--) i = c[--p - 1];
                    for (var w = _ + 1; w < m; w++) {
                        var b = {}, S = (r = y[w], o = b, u = S = l = s = void 0, l = (a = e).clipPathCache, 
                        S = a.defs, (u = l[r.id]) || (s = {
                            id: u = a.zrId + "-c" + a.clipPathIdx++
                        }, S[l[r.id] = u] = CS("clipPath", u, s, [ ZS(r, a) ])), o["clip-path"] = Ni(u), 
                        CS("g", "clip-g-" + d++, b, []));
                        (i ? i.children : n).push(S), i = c[p++] = S;
                    }
                    var M = y;
                    v = KS(g, e);
                    v && (i ? i.children : n).push(v);
                }
            }
        }, _M.prototype.resize = function(t, e) {
            var n = this._opts, i = this.root, r = this._viewport;
            null != t && (n.width = t), null != e && (n.height = e), i && r && (r.style.display = "none", 
            t = Fy(i, 0, n), e = Fy(i, 1, n), r.style.display = ""), this._width === t && this._height === e || (this._width = t, 
            this._height = e, r && ((i = r.style).width = t + "px", i.height = e + "px"), Li(this._backgroundColor) ? this.refresh() : ((n = this._svgDom) && (n.setAttribute("width", t), 
            n.setAttribute("height", e)), (r = this._bgVNode && this._bgVNode.elm) && (r.setAttribute("width", t), 
            r.setAttribute("height", e))));
        }, _M.prototype.getWidth = function() {
            return this._width;
        }, _M.prototype.getHeight = function() {
            return this._height;
        }, _M.prototype.dispose = function() {
            this.root && (this.root.innerHTML = ""), this._svgDom = this._viewport = this.storage = this._oldVNode = this._bgVNode = this._mainVNode = null;
        }, _M.prototype.clear = function() {
            this._svgDom && (this._svgDom.innerHTML = null), this._oldVNode = null;
        }, _M.prototype.toDataURL = function(t) {
            var e = this.renderToString(), n = "data:image/svg+xml;";
            return t ? (e = Bi(e)) && n + "base64," + e : n + "charset=UTF-8," + encodeURIComponent(e);
        }, co("svg", _M), t.Axis = Bc, t.ChartView = zg, t.ComponentModel = Up, t.ComponentView = Pg, 
        t.List = tv, t.Model = Hc, t.PRIORITY = Iy, t.SeriesModel = Mg, t.color = vi, t.connect = function(e) {
            var t;
            return V(e) && (t = e, e = null, E(t, (function(t) {
                null != t.group && (e = t.group);
            })), e = e || "g_" + sm++, E(t, (function(t) {
                t.group = e;
            }))), om[e] = !0, e;
        }, t.dataTool = {}, t.dependencies = {
            zrender: "5.5.0"
        }, t.disConnect = Cy, t.disconnect = um, t.dispose = function(t) {
            H(t) ? t = rm[t] : t instanceof U0 || (t = hm(t)), t instanceof U0 && !t.isDisposed() && t.dispose();
        }, t.env = p, t.extendChartView = function(t) {
            return t = zg.extend(t), zg.registerClass(t), t;
        }, t.extendComponentModel = function(t) {
            return t = Up.extend(t), Up.registerClass(t), t;
        }, t.extendComponentView = function(t) {
            return t = Pg.extend(t), Pg.registerClass(t), t;
        }, t.extendSeriesModel = function(t) {
            return t = Mg.extend(t), Mg.registerClass(t), t;
        }, t.format = Ec, t.getCoordinateSystemDimensions = function(t) {
            if (t = Cd.get(t)) return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
        }, t.getInstanceByDom = hm, t.getInstanceById = function(t) {
            return rm[t];
        }, t.getMap = function(t) {
            var e = d0.getMap;
            return e && e(t);
        }, t.graphic = ip, t.helper = ky, t.init = function(t, e, n) {
            var i = !(n && n.ssr);
            if (i) {
                var r = hm(t);
                if (r) return r;
            }
            return (r = new U0(t, e, n)).id = "ec_" + am++, rm[r.id] = r, i && ea(t, lm, r.id), 
            z0(r), p0.trigger("afterinit", r), r;
        }, t.innerDrawElementOnCanvas = o0, t.matrix = Ve, t.number = ga, t.parseGeoJSON = E_, 
        t.parseGeoJson = E_, t.registerAction = mm, t.registerCoordinateSystem = vm, t.registerLayout = _m, 
        t.registerLoading = Sm, t.registerLocale = $c, t.registerMap = Mm, t.registerPostInit = fm, 
        t.registerPostUpdate = gm, t.registerPreprocessor = pm, t.registerProcessor = dm, 
        t.registerTheme = cm, t.registerTransform = Tm, t.registerUpdateLifecycle = ym, 
        t.registerVisual = xm, t.setCanvasCreator = function(t) {
            T({
                createCanvas: t
            });
        }, t.setPlatformAPI = T, t.throttle = Ug, t.time = Ac, t.use = __, t.util = Pc, 
        t.vector = ae, t.version = "5.5.0", t.zrUtil = Wt, t.zrender = go;
    }));
    const minmenu = document.querySelector(".minmenu");
    const bacgroundmenu = document.querySelector(".menu-header");
    const body = document.querySelector("body");
    if (minmenu) minmenu.addEventListener("click", (function() {
        body.classList.toggle("openmobilemenu");
    }));
    if (bacgroundmenu) bacgroundmenu.addEventListener("click", (function() {
        body.classList.toggle("openmobilemenu");
    }));
    const poapopen = document.querySelectorAll(".idc__popapon");
    const contetn = document.querySelectorAll(".idc__popapcontent");
    console.log(poapopen);
    console.log(contetn);
    for (let i = 0; i < poapopen.length; i++) poapopen[i].onclick = function() {
        for (let v = 0; v < contetn.length; v++) {
            contetn[v].classList.remove("active");
            poapopen[v].classList.remove("active");
        }
        contetn[i].classList.add("active");
        poapopen[i].classList.add("active");
    };
    window["FLS"] = true;
    isWebp();
})();