! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var n = [],
        i = e.document,
        r = n.slice,
        o = n.concat,
        s = n.push,
        a = n.indexOf,
        l = {},
        c = l.toString,
        u = l.hasOwnProperty,
        f = {},
        h = "2.2.2",
        d = function(e, t) {
            return new d.fn.init(e, t)
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        g = /^-ms-/,
        m = /-([\da-z])/gi,
        _ = function(e, t) {
            return t.toUpperCase()
        };

    function v(e) {
        var t = !!e && "length" in e && e.length,
            n = d.type(e);
        return "function" !== n && !d.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    d.fn = d.prototype = {
        jquery: h,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = d.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e) {
            return d.each(this, e)
        },
        map: function(e) {
            return this.pushStack(d.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    }, d.extend = d.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || d.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = s[t], s !== (i = e[t]) && (c && i && (d.isPlainObject(i) || (r = d.isArray(i))) ? (r ? (r = !1, o = n && d.isArray(n) ? n : []) : o = n && d.isPlainObject(n) ? n : {}, s[t] = d.extend(c, o, i)) : void 0 !== i && (s[t] = i));
        return s
    }, d.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === d.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !d.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== d.type(e) || e.nodeType || d.isWindow(e)) return !1;
            if (e.constructor && !u.call(e, "constructor") && !u.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || u.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = d.trim(e)) && (1 === e.indexOf("use strict") ? ((t = i.createElement("script")).text = e, i.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(g, "ms-").replace(m, _)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, i = 0;
            if (v(e))
                for (n = e.length; n > i && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (v(Object(e)) ? d.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : a.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; o > r; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, s = 0,
                a = [];
            if (v(e))
                for (i = e.length; i > s; s++) null != (r = t(e[s], s, n)) && a.push(r);
            else
                for (s in e) null != (r = t(e[s], s, n)) && a.push(r);
            return o.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n), d.isFunction(e) ? (i = r.call(arguments, 2), (o = function() {
                return e.apply(t || this, i.concat(r.call(arguments)))
            }).guid = e.guid = e.guid || d.guid++, o) : void 0
        },
        now: Date.now,
        support: f
    }), "function" == typeof Symbol && (d.fn[Symbol.iterator] = n[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(e) {
        var t, n, i, r, o, s, a, l, c, u, f, h, d, p, g, m, _, v, y, b = "sizzle" + 1 * new Date,
            w = e.document,
            x = 0,
            T = 0,
            C = oe(),
            S = oe(),
            E = oe(),
            P = function(e, t) {
                return e === t && (f = !0), 0
            },
            A = 1 << 31,
            O = {}.hasOwnProperty,
            k = [],
            D = k.pop,
            I = k.push,
            N = k.push,
            R = k.slice,
            L = function(e, t) {
                for (var n = 0, i = e.length; i > n; n++)
                    if (e[n] === t) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            q = "\\[" + F + "*(" + j + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + F + "*\\]",
            H = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            z = new RegExp(F + "+", "g"),
            B = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            W = new RegExp("^" + F + "*," + F + "*"),
            X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            U = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
            Y = new RegExp(H),
            Q = new RegExp("^" + j + "$"),
            G = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + H),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            V = /^(?:input|select|textarea|button)$/i,
            $ = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            ee = /'|\\/g,
            te = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
            ne = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            ie = function() {
                h()
            };
        try {
            N.apply(k = R.call(w.childNodes), w.childNodes), k[w.childNodes.length].nodeType
        } catch (e) {
            N = {
                apply: k.length ? function(e, t) {
                    I.apply(e, R.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function re(e, t, i, r) {
            var o, a, c, u, f, p, _, v, x = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return i;
            if (!r && ((t ? t.ownerDocument || t : w) !== d && h(t), t = t || d, g)) {
                if (11 !== T && (p = Z.exec(e)))
                    if (o = p[1]) {
                        if (9 === T) {
                            if (!(c = t.getElementById(o))) return i;
                            if (c.id === o) return i.push(c), i
                        } else if (x && (c = x.getElementById(o)) && y(t, c) && c.id === o) return i.push(c), i
                    } else {
                        if (p[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = p[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(o)), i
                    } if (n.qsa && !E[e + " "] && (!m || !m.test(e))) {
                    if (1 !== T) x = t, v = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(ee, "\\$&") : t.setAttribute("id", u = b), a = (_ = s(e)).length, f = Q.test(u) ? "#" + u : "[id='" + u + "']"; a--;) _[a] = f + " " + ge(_[a]);
                        v = _.join(","), x = J.test(e) && de(t.parentNode) || t
                    }
                    if (v) try {
                        return N.apply(i, x.querySelectorAll(v)), i
                    } catch (e) {} finally {
                        u === b && t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(B, "$1"), t, i, r)
        }

        function oe() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
            }
        }

        function se(e) {
            return e[b] = !0, e
        }

        function ae(e) {
            var t = d.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ue(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function fe(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function he(e) {
            return se(function(t) {
                return t = +t, se(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function de(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in n = re.support = {}, o = re.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, h = re.setDocument = function(e) {
                var t, r, s = e ? e.ownerDocument || e : w;
                return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ie, !1) : r.attachEvent && r.attachEvent("onunload", ie)), n.attributes = ae(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), n.getElementsByTagName = ae(function(e) {
                    return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
                }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ae(function(e) {
                    return p.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
                }), n.getById ? (i.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete i.find.ID, i.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                    return void 0 !== t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0
                }, _ = [], m = [], (n.qsa = K.test(d.querySelectorAll)) && (ae(function(e) {
                    p.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + b + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || m.push(".#.+[+~]")
                }), ae(function(e) {
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (n.matchesSelector = K.test(v = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ae(function(e) {
                    n.disconnectedMatch = v.call(e, "div"), v.call(e, "[s!='']:x"), _.push("!=", H)
                }), m = m.length && new RegExp(m.join("|")), _ = _.length && new RegExp(_.join("|")), t = K.test(p.compareDocumentPosition), y = t || K.test(p.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, P = t ? function(e, t) {
                    if (e === t) return f = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e === d || e.ownerDocument === w && y(w, e) ? -1 : t === d || t.ownerDocument === w && y(w, t) ? 1 : u ? L(u, e) - L(u, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return f = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!r || !o) return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : u ? L(u, e) - L(u, t) : 0;
                    if (r === o) return ce(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ce(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
                }, d) : d
            }, re.matches = function(e, t) {
                return re(e, null, null, t)
            }, re.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== d && h(e), t = t.replace(U, "='$1']"), n.matchesSelector && g && !E[t + " "] && (!_ || !_.test(t)) && (!m || !m.test(t))) try {
                    var i = v.call(e, t);
                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return re(t, d, null, [e]).length > 0
            }, re.contains = function(e, t) {
                return (e.ownerDocument || e) !== d && h(e), y(e, t)
            }, re.attr = function(e, t) {
                (e.ownerDocument || e) !== d && h(e);
                var r = i.attrHandle[t.toLowerCase()],
                    o = r && O.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, re.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, re.uniqueSort = function(e) {
                var t, i = [],
                    r = 0,
                    o = 0;
                if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(P), f) {
                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                    for (; r--;) e.splice(i[r], 1)
                }
                return u = null, e
            }, r = re.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += r(t);
                return n
            }, (i = re.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || re.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && re.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = C[e + " "];
                        return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && C(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(i) {
                            var r = re.attr(i, e);
                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(z, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, u, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                _ = a && t.nodeName.toLowerCase(),
                                v = !l && !a,
                                y = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (h = t; h = h[g];)
                                            if (a ? h.nodeName.toLowerCase() === _ : 1 === h.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [s ? m.firstChild : m.lastChild], s && v) {
                                    for (y = (d = (c = (u = (f = (h = m)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], h = d && m.childNodes[d]; h = ++d && h && h[g] || (y = d = 0) || p.pop();)
                                        if (1 === h.nodeType && ++y && h === t) {
                                            u[e] = [x, d, y];
                                            break
                                        }
                                } else if (v && (y = d = (c = (u = (f = (h = t)[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === y)
                                    for (;
                                        (h = ++d && h && h[g] || (y = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== _ : 1 !== h.nodeType) || !++y || (v && ((u = (f = h[b] || (h[b] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] = [x, y]), h !== t)););
                                return (y -= r) === i || y % i == 0 && y / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || re.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, n) {
                            for (var i, o = r(e, t), s = o.length; s--;) e[i = L(e, o[s])] = !(n[i] = o[s])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: se(function(e) {
                        var t = [],
                            n = [],
                            i = a(e.replace(B, "$1"));
                        return i[b] ? se(function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: se(function(e) {
                        return function(t) {
                            return re(e, t).length > 0
                        }
                    }),
                    contains: se(function(e) {
                        return e = e.replace(te, ne),
                            function(t) {
                                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                            }
                    }),
                    lang: se(function(e) {
                        return Q.test(e || "") || re.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === p
                    },
                    focus: function(e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    header: function(e) {
                        return $.test(e.nodeName)
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: he(function() {
                        return [0]
                    }),
                    last: he(function(e, t) {
                        return [t - 1]
                    }),
                    eq: he(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: he(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: he(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: he(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: he(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = i.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) i.pseudos[t] = ue(t);
        for (t in {
                submit: !0,
                reset: !0
            }) i.pseudos[t] = fe(t);

        function pe() {}

        function ge(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }

        function me(e, t, n) {
            var i = t.dir,
                r = n && "parentNode" === i,
                o = T++;
            return t.first ? function(t, n, o) {
                for (; t = t[i];)
                    if (1 === t.nodeType || r) return e(t, n, o)
            } : function(t, n, s) {
                var a, l, c, u = [x, o];
                if (s) {
                    for (; t = t[i];)
                        if ((1 === t.nodeType || r) && e(t, n, s)) return !0
                } else
                    for (; t = t[i];)
                        if (1 === t.nodeType || r) {
                            if ((a = (l = (c = t[b] || (t[b] = {}))[t.uniqueID] || (c[t.uniqueID] = {}))[i]) && a[0] === x && a[1] === o) return u[2] = a[2];
                            if (l[i] = u, u[2] = e(t, n, s)) return !0
                        }
            }
        }

        function _e(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, i)) return !1;
                return !0
            } : e[0]
        }

        function ve(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
            return s
        }

        function ye(e, t, n, i, r, o) {
            return i && !i[b] && (i = ye(i)), r && !r[b] && (r = ye(r, o)), se(function(o, s, a, l) {
                var c, u, f, h = [],
                    d = [],
                    p = s.length,
                    g = o || function(e, t, n) {
                        for (var i = 0, r = t.length; r > i; i++) re(e, t[i], n);
                        return n
                    }(t || "*", a.nodeType ? [a] : a, []),
                    m = !e || !o && t ? g : ve(g, h, e, a, l),
                    _ = n ? r || (o ? e : p || i) ? [] : s : m;
                if (n && n(m, _, a, l), i)
                    for (c = ve(_, d), i(c, [], a, l), u = c.length; u--;)(f = c[u]) && (_[d[u]] = !(m[d[u]] = f));
                if (o) {
                    if (r || e) {
                        if (r) {
                            for (c = [], u = _.length; u--;)(f = _[u]) && c.push(m[u] = f);
                            r(null, _ = [], c, l)
                        }
                        for (u = _.length; u--;)(f = _[u]) && (c = r ? L(o, f) : h[u]) > -1 && (o[c] = !(s[c] = f))
                    }
                } else _ = ve(_ === s ? _.splice(p, _.length) : _), r ? r(null, s, _, l) : N.apply(s, _)
            })
        }

        function be(e) {
            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = me(function(e) {
                    return e === t
                }, a, !0), f = me(function(e) {
                    return L(t, e) > -1
                }, a, !0), h = [function(e, n, i) {
                    var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                    return t = null, r
                }]; o > l; l++)
                if (n = i.relative[e[l].type]) h = [me(_e(h), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[b]) {
                        for (r = ++l; o > r && !i.relative[e[r].type]; r++);
                        return ye(l > 1 && _e(h), l > 1 && ge(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, r > l && be(e.slice(l, r)), o > r && be(e = e.slice(r)), o > r && ge(e))
                    }
                    h.push(n)
                } return _e(h)
        }

        function we(e, t) {
            var n = t.length > 0,
                r = e.length > 0,
                o = function(o, s, a, l, u) {
                    var f, p, m, _ = 0,
                        v = "0",
                        y = o && [],
                        b = [],
                        w = c,
                        T = o || r && i.find.TAG("*", u),
                        C = x += null == w ? 1 : Math.random() || .1,
                        S = T.length;
                    for (u && (c = s === d || s || u); v !== S && null != (f = T[v]); v++) {
                        if (r && f) {
                            for (p = 0, s || f.ownerDocument === d || (h(f), a = !g); m = e[p++];)
                                if (m(f, s || d, a)) {
                                    l.push(f);
                                    break
                                } u && (x = C)
                        }
                        n && ((f = !m && f) && _--, o && y.push(f))
                    }
                    if (_ += v, n && v !== _) {
                        for (p = 0; m = t[p++];) m(y, b, s, a);
                        if (o) {
                            if (_ > 0)
                                for (; v--;) y[v] || b[v] || (b[v] = D.call(l));
                            b = ve(b)
                        }
                        N.apply(l, b), u && !o && b.length > 0 && _ + t.length > 1 && re.uniqueSort(l)
                    }
                    return u && (x = C, c = w), y
                };
            return n ? se(o) : o
        }
        return pe.prototype = i.filters = i.pseudos, i.setFilters = new pe, s = re.tokenize = function(e, t) {
            var n, r, o, s, a, l, c, u = S[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = i.preFilter; a;) {
                for (s in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = X.exec(a)) && (n = r.shift(), o.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), i.filter) !(r = G[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? re.error(e) : S(e, l).slice(0)
        }, a = re.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = E[e + " "];
            if (!o) {
                for (t || (t = s(e)), n = t.length; n--;)(o = be(t[n]))[b] ? i.push(o) : r.push(o);
                (o = E(e, we(r, i))).selector = e
            }
            return o
        }, l = re.select = function(e, t, r, o) {
            var l, c, u, f, h, d = "function" == typeof e && e,
                p = !o && s(e = d.selector || e);
            if (r = r || [], 1 === p.length) {
                if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && n.getById && 9 === t.nodeType && g && i.relative[c[1].type]) {
                    if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return r;
                    d && (t = t.parentNode), e = e.slice(c.shift().value.length)
                }
                for (l = G.needsContext.test(e) ? 0 : c.length; l-- && (u = c[l], !i.relative[f = u.type]);)
                    if ((h = i.find[f]) && (o = h(u.matches[0].replace(te, ne), J.test(c[0].type) && de(t.parentNode) || t))) {
                        if (c.splice(l, 1), !(e = o.length && ge(c))) return N.apply(r, o), r;
                        break
                    }
            }
            return (d || a(e, p))(o, t, !g, r, !t || J.test(e) && de(t.parentNode) || t), r
        }, n.sortStable = b.split("").sort(P).join("") === b, n.detectDuplicates = !!f, h(), n.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("div"))
        }), ae(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ae(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || le(M, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }), re
    }(e);
    d.find = y, d.expr = y.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = y.uniqueSort, d.text = y.getText, d.isXMLDoc = y.isXML, d.contains = y.contains;
    var b = function(e, t, n) {
            for (var i = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && d(e).is(n)) break;
                    i.push(e)
                } return i
        },
        w = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        x = d.expr.match.needsContext,
        T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        C = /^.[^:#\[\.,]*$/;

    function S(e, t, n) {
        if (d.isFunction(t)) return d.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return d.grep(e, function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (C.test(t)) return d.filter(t, e, n);
            t = d.filter(t, e)
        }
        return d.grep(e, function(e) {
            return a.call(t, e) > -1 !== n
        })
    }
    d.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? d.find.matchesSelector(i, e) ? [i] : [] : d.find.matches(e, d.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, d.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if ("string" != typeof e) return this.pushStack(d(e).filter(function() {
                for (t = 0; n > t; t++)
                    if (d.contains(r[t], this)) return !0
            }));
            for (t = 0; n > t; t++) d.find(e, r[t], i);
            return (i = this.pushStack(n > 1 ? d.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], !0))
        },
        is: function(e) {
            return !!S(this, "string" == typeof e && x.test(e) ? d(e) : e || [], !1).length
        }
    });
    var E, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function(e, t, n) {
        var r, o;
        if (!e) return this;
        if (n = n || E, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof d ? t[0] : t, d.merge(this, d.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, !0)), T.test(r[1]) && d.isPlainObject(t))
                    for (r in t) d.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = i.getElementById(r[2])) && o.parentNode && (this.length = 1, this[0] = o), this.context = i, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : d.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), d.makeArray(e, this))
    }).prototype = d.fn, E = d(i);
    var A = /^(?:parents|prev(?:Until|All))/,
        O = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function k(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    d.fn.extend({
        has: function(e) {
            var t = d(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++)
                    if (d.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = x.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; r > i; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && d.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    } return this.pushStack(o.length > 1 ? d.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? a.call(d(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), d.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return b(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return b(e, "parentNode", n)
        },
        next: function(e) {
            return k(e, "nextSibling")
        },
        prev: function(e) {
            return k(e, "previousSibling")
        },
        nextAll: function(e) {
            return b(e, "nextSibling")
        },
        prevAll: function(e) {
            return b(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return b(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return b(e, "previousSibling", n)
        },
        siblings: function(e) {
            return w((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || d.merge([], e.childNodes)
        }
    }, function(e, t) {
        d.fn[e] = function(n, i) {
            var r = d.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = d.filter(i, r)), this.length > 1 && (O[e] || d.uniqueSort(r), A.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var D, I = /\S+/g;

    function N() {
        i.removeEventListener("DOMContentLoaded", N), e.removeEventListener("load", N), d.ready()
    }
    d.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return d.each(e.match(I) || [], function(e, n) {
                t[n] = !0
            }), t
        }(e) : d.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            a = -1,
            l = function() {
                for (r = e.once, i = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                        d.each(n, function(n, i) {
                            d.isFunction(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== d.type(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return d.each(arguments, function(e, t) {
                        for (var n;
                            (n = d.inArray(t, o, n)) > -1;) o.splice(n, 1), a >= n && a--
                    }), this
                },
                has: function(e) {
                    return e ? d.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, d.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return d.Deferred(function(n) {
                            d.each(t, function(t, o) {
                                var s = d.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && d.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? d.extend(e, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, d.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), e && e.call(r, r), r
        },
        when: function(e) {
            var t, n, i, o = 0,
                s = r.call(arguments),
                a = s.length,
                l = 1 !== a || e && d.isFunction(e.promise) ? a : 0,
                c = 1 === l ? e : d.Deferred(),
                u = function(e, n, i) {
                    return function(o) {
                        n[e] = this, i[e] = arguments.length > 1 ? r.call(arguments) : o, i === t ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) s[o] && d.isFunction(s[o].promise) ? s[o].promise().progress(u(o, n, t)).done(u(o, i, s)).fail(c.reject) : --l;
            return l || c.resolveWith(i, s), c.promise()
        }
    }), d.fn.ready = function(e) {
        return d.ready.promise().done(e), this
    }, d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? d.readyWait++ : d.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --d.readyWait : d.isReady) || (d.isReady = !0, !0 !== e && --d.readyWait > 0 || (D.resolveWith(i, [d]), d.fn.triggerHandler && (d(i).triggerHandler("ready"), d(i).off("ready"))))
        }
    }), d.ready.promise = function(t) {
        return D || (D = d.Deferred(), "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? e.setTimeout(d.ready) : (i.addEventListener("DOMContentLoaded", N), e.addEventListener("load", N))), D.promise(t)
    }, d.ready.promise();
    var R = function(e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === d.type(n))
                for (a in r = !0, n) R(e, t, a, n[a], !0, o, s);
            else if (void 0 !== i && (r = !0, d.isFunction(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                    return c.call(d(e), n)
                })), t))
                for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
        },
        L = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };

    function M() {
        this.expando = d.expando + M.uid++
    }
    M.uid = 1, M.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        },
        cache: function(e) {
            if (!L(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, L(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n;
            else
                for (i in t) r[i] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, d.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e);
                else {
                    d.isArray(t) ? i = t.concat(t.map(d.camelCase)) : (r = d.camelCase(t), t in o ? i = [t, r] : i = (i = r) in o ? [i] : i.match(I) || []), n = i.length;
                    for (; n--;) delete o[i[n]]
                }(void 0 === t || d.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !d.isEmptyObject(t)
        }
    };
    var F = new M,
        j = new M,
        q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        H = /[A-Z]/g;

    function z(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(H, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : q.test(n) ? d.parseJSON(n) : n)
                } catch (e) {}
                j.set(e, t, n)
            } else n = void 0;
        return n
    }
    d.extend({
        hasData: function(e) {
            return j.hasData(e) || F.hasData(e)
        },
        data: function(e, t, n) {
            return j.access(e, t, n)
        },
        removeData: function(e, t) {
            j.remove(e, t)
        },
        _data: function(e, t, n) {
            return F.access(e, t, n)
        },
        _removeData: function(e, t) {
            F.remove(e, t)
        }
    }), d.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = j.get(o), 1 === o.nodeType && !F.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && (i = d.camelCase(i.slice(5)), z(o, i, r[i])));
                    F.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                j.set(this, e)
            }) : R(this, function(t) {
                var n, i;
                if (o && void 0 === t) {
                    if (void 0 !== (n = j.get(o, e) || j.get(o, e.replace(H, "-$&").toLowerCase()))) return n;
                    if (i = d.camelCase(e), void 0 !== (n = j.get(o, i))) return n;
                    if (void 0 !== (n = z(o, i, void 0))) return n
                } else i = d.camelCase(e), this.each(function() {
                    var n = j.get(this, i);
                    j.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && j.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                j.remove(this, e)
            })
        }
    }), d.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = F.get(e, t), n && (!i || d.isArray(n) ? i = F.access(e, t, d.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = d.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = d._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() {
                d.dequeue(e, t)
            }, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return F.get(e, n) || F.access(e, n, {
                empty: d.Callbacks("once memory").add(function() {
                    F.remove(e, [t + "queue", n])
                })
            })
        }
    }), d.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? d.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = d.queue(this, e, t);
                d._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && d.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                d.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = d.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = F.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(t)
        }
    });
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$", "i"),
        X = ["Top", "Right", "Bottom", "Left"],
        U = function(e, t) {
            return e = t || e, "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
        };

    function Y(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return d.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (d.cssNumber[t] ? "" : "px"),
            u = (d.cssNumber[t] || "px" !== c && +l) && W.exec(d.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3], n = n || [], u = +l || 1;
            do {
                u /= o = o || ".5", d.style(e, t, u + c)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }
    var Q = /^(?:checkbox|radio)$/i,
        G = /<([\w:-]+)/,
        V = /^$|\/(?:java|ecma)script/i,
        $ = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function K(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], n) : n
    }

    function Z(e, t) {
        for (var n = 0, i = e.length; i > n; n++) F.set(e[n], "globalEval", !t || F.get(t[n], "globalEval"))
    }
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
    var J = /<|&#?\w+;/;

    function ee(e, t, n, i, r) {
        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), h = [], p = 0, g = e.length; g > p; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === d.type(o)) d.merge(h, o.nodeType ? [o] : o);
                else if (J.test(o)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (G.exec(o) || ["", ""])[1].toLowerCase(), l = $[a] || $._default, s.innerHTML = l[1] + d.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
            d.merge(h, s.childNodes), (s = f.firstChild).textContent = ""
        } else h.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = h[p++];)
            if (i && d.inArray(o, i) > -1) r && r.push(o);
            else if (c = d.contains(o.ownerDocument, o), s = K(f.appendChild(o), "script"), c && Z(s), n)
            for (u = 0; o = s[u++];) V.test(o.type || "") && n.push(o);
        return f
    }! function() {
        var e = i.createDocumentFragment().appendChild(i.createElement("div")),
            t = i.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), f.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var te = /^key/,
        ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ie = /^([^.]*)(?:\.(.+)|)/;

    function re() {
        return !0
    }

    function oe() {
        return !1
    }

    function se() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function ae(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ae(e, a, n, i, t[a], o);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = oe;
        else if (!r) return e;
        return 1 === o && (s = r, (r = function(e) {
            return d().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = d.guid++)), e.each(function() {
            d.event.add(this, t, r, i, n)
        })
    }
    d.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, p, g, m, _ = F.get(e);
            if (_)
                for (n.handler && (n = (o = n).handler, r = o.selector), n.guid || (n.guid = d.guid++), (l = _.events) || (l = _.events = {}), (s = _.handle) || (s = _.handle = function(t) {
                        return void 0 !== d && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(I) || [""]).length; c--;) p = m = (a = ie.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), p && (f = d.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = d.event.special[p] || {}, u = d.extend({
                    type: p,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && d.expr.match.needsContext.test(r),
                    namespace: g.join(".")
                }, o), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, g, s) || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), d.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, f, h, p, g, m, _ = F.hasData(e) && F.get(e);
            if (_ && (l = _.events)) {
                for (c = (t = (t || "").match(I) || [""]).length; c--;)
                    if (p = m = (a = ie.exec(t[c]) || [])[1], g = (a[2] || "").split(".").sort(), p) {
                        for (f = d.event.special[p] || {}, h = l[p = (i ? f.delegateType : f.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) u = h[o], !r && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(o, 1), u.selector && h.delegateCount--, f.remove && f.remove.call(e, u));
                        s && !h.length && (f.teardown && !1 !== f.teardown.call(e, g, _.handle) || d.removeEvent(e, p, _.handle), delete l[p])
                    } else
                        for (p in l) d.event.remove(e, p + t[c], n, i, !0);
                d.isEmptyObject(l) && F.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = d.event.fix(e);
            var t, n, i, o, s, a = [],
                l = r.call(arguments),
                c = (F.get(this, "events") || {})[e.type] || [],
                u = d.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (a = d.event.handlers.call(this, e, c), t = 0;
                    (o = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, n = 0;
                        (s = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(s.namespace) || (e.handleObj = s, e.data = s.data, void 0 !== (i = ((d.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (i = [], n = 0; a > n; n++) void 0 === i[r = (o = t[n]).selector + " "] && (i[r] = o.needsContext ? d(r, this).index(l) > -1 : d.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, o, s = t.button;
                return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || i).documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[d.expando]) return e;
            var t, n, r, o = e.type,
                s = e,
                a = this.fixHooks[o];
            for (a || (this.fixHooks[o] = a = ne.test(o) ? this.mouseHooks : te.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new d.Event(s), t = r.length; t--;) e[n = r[t]] = s[n];
            return e.target || (e.target = i), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== se() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === se() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return d.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, d.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, d.Event = function(e, t) {
        return this instanceof d.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : oe) : this.type = e, t && d.extend(this, t), this.timeStamp = e && e.timeStamp || d.now(), void(this[d.expando] = !0)) : new d.Event(e, t)
    }, d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: oe,
        isPropagationStopped: oe,
        isImmediatePropagationStopped: oe,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = re, e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = re, e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = re, e && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        d.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget,
                    r = e.handleObj;
                return i && (i === this || d.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), d.fn.extend({
        on: function(e, t, n, i) {
            return ae(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ae(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, d(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = oe), this.each(function() {
                d.event.remove(this, e, n, t)
            })
        }
    });
    var le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ce = /<script|<style|<link/i,
        ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fe = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function de(e, t) {
        return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ge(e) {
        var t = fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function me(e, t) {
        var n, i, r, o, s, a, l, c;
        if (1 === t.nodeType) {
            if (F.hasData(e) && (o = F.access(e), s = F.set(t, o), c = o.events))
                for (r in delete s.handle, s.events = {}, c)
                    for (n = 0, i = c[r].length; i > n; n++) d.event.add(t, r, c[r][n]);
            j.hasData(e) && (a = j.access(e), l = d.extend({}, a), j.set(t, l))
        }
    }

    function _e(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Q.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function ve(e, t, n, i) {
        t = o.apply([], t);
        var r, s, a, l, c, u, h = 0,
            p = e.length,
            g = p - 1,
            m = t[0],
            _ = d.isFunction(m);
        if (_ || p > 1 && "string" == typeof m && !f.checkClone && ue.test(m)) return e.each(function(r) {
            var o = e.eq(r);
            _ && (t[0] = m.call(this, r, o.html())), ve(o, t, n, i)
        });
        if (p && (s = (r = ee(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = s), s || i)) {
            for (l = (a = d.map(K(r, "script"), pe)).length; p > h; h++) c = r, h !== g && (c = d.clone(c, !0, !0), l && d.merge(a, K(c, "script"))), n.call(e[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument, d.map(a, ge), h = 0; l > h; h++) c = a[h], V.test(c.type || "") && !F.access(c, "globalEval") && d.contains(u, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval(c.textContent.replace(he, "")))
        }
        return e
    }

    function ye(e, t, n) {
        for (var i, r = t ? d.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || d.cleanData(K(i)), i.parentNode && (n && d.contains(i.ownerDocument, i) && Z(K(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    d.extend({
        htmlPrefilter: function(e) {
            return e.replace(le, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0),
                l = d.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
                for (s = K(a), i = 0, r = (o = K(e)).length; r > i; i++) _e(o[i], s[i]);
            if (t)
                if (n)
                    for (o = o || K(e), s = s || K(a), i = 0, r = o.length; r > i; i++) me(o[i], s[i]);
                else me(e, a);
            return (s = K(a, "script")).length > 0 && Z(s, !l && K(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, i, r = d.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (L(n)) {
                    if (t = n[F.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? d.event.remove(n, i) : d.removeEvent(n, i, t.handle);
                        n[F.expando] = void 0
                    }
                    n[j.expando] && (n[j.expando] = void 0)
                }
        }
    }), d.fn.extend({
        domManip: ve,
        detach: function(e) {
            return ye(this, e, !0)
        },
        remove: function(e) {
            return ye(this, e)
        },
        text: function(e) {
            return R(this, function(e) {
                return void 0 === e ? d.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return ve(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || de(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return ve(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = de(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return ve(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return ve(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (d.cleanData(K(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return d.clone(this, e, t)
            })
        },
        html: function(e) {
            return R(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ce.test(e) && !$[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = d.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) 1 === (t = this[n] || {}).nodeType && (d.cleanData(K(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return ve(this, arguments, function(t) {
                var n = this.parentNode;
                d.inArray(this, e) < 0 && (d.cleanData(K(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        d.fn[e] = function(e) {
            for (var n, i = [], r = d(e), o = r.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), d(r[a])[t](n), s.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var be, we = {
        HTML: "block",
        BODY: "block"
    };

    function xe(e, t) {
        var n = d(t.createElement(e)).appendTo(t.body),
            i = d.css(n[0], "display");
        return n.detach(), i
    }

    function Te(e) {
        var t = i,
            n = we[e];
        return n || ("none" !== (n = xe(e, t)) && n || ((t = (be = (be || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = xe(e, t), be.detach()), we[e] = n), n
    }
    var Ce = /^margin/,
        Se = new RegExp("^(" + B + ")(?!px)[a-z%]+$", "i"),
        Ee = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        Pe = function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o], e.style[o] = t[o];
            for (o in r = n.apply(e, i || []), t) e.style[o] = s[o];
            return r
        },
        Ae = i.documentElement;

    function Oe(e, t, n) {
        var i, r, o, s, a = e.style;
        return "" !== (s = (n = n || Ee(e)) ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || d.contains(e.ownerDocument, e) || (s = d.style(e, t)), n && !f.pixelMarginRight() && Se.test(s) && Ce.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function ke(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, n, r, o, s = i.createElement("div"),
            a = i.createElement("div");
        if (a.style) {
            function l() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Ae.appendChild(s);
                var i = e.getComputedStyle(a);
                t = "1%" !== i.top, o = "2px" === i.marginLeft, n = "4px" === i.width, a.style.marginRight = "50%", r = "4px" === i.marginRight, Ae.removeChild(s)
            }
            a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), d.extend(f, {
                pixelPosition: function() {
                    return l(), t
                },
                boxSizingReliable: function() {
                    return null == n && l(), n
                },
                pixelMarginRight: function() {
                    return null == n && l(), r
                },
                reliableMarginLeft: function() {
                    return null == n && l(), o
                },
                reliableMarginRight: function() {
                    var t, n = a.appendChild(i.createElement("div"));
                    return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Ae.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Ae.removeChild(s), a.removeChild(n), t
                }
            })
        }
    }();
    var De = /^(none|table(?!-c[ea]).+)/,
        Ie = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ne = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Re = ["Webkit", "O", "Moz", "ms"],
        Le = i.createElement("div").style;

    function Me(e) {
        if (e in Le) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Re.length; n--;)
            if ((e = Re[n] + t) in Le) return e
    }

    function Fe(e, t, n) {
        var i = W.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function je(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += d.css(e, n + X[o], !0, r)), i ? ("content" === n && (s -= d.css(e, "padding" + X[o], !0, r)), "margin" !== n && (s -= d.css(e, "border" + X[o] + "Width", !0, r))) : (s += d.css(e, "padding" + X[o], !0, r), "padding" !== n && (s += d.css(e, "border" + X[o] + "Width", !0, r)));
        return s
    }

    function qe(t, n, r) {
        var o = !0,
            s = "width" === n ? t.offsetWidth : t.offsetHeight,
            a = Ee(t),
            l = "border-box" === d.css(t, "boxSizing", !1, a);
        if (i.msFullscreenElement && e.top !== e && t.getClientRects().length && (s = Math.round(100 * t.getBoundingClientRect()[n])), 0 >= s || null == s) {
            if ((0 > (s = Oe(t, n, a)) || null == s) && (s = t.style[n]), Se.test(s)) return s;
            o = l && (f.boxSizingReliable() || s === t.style[n]), s = parseFloat(s) || 0
        }
        return s + je(t, n, r || (l ? "border" : "content"), o, a) + "px"
    }

    function He(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++)(i = e[s]).style && (o[s] = F.get(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && U(i) && (o[s] = F.access(i, "olddisplay", Te(i.nodeName)))) : (r = U(i), "none" === n && r || F.set(i, "olddisplay", r ? n : d.css(i, "display"))));
        for (s = 0; a > s; s++)(i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function ze(e, t, n, i, r) {
        return new ze.prototype.init(e, t, n, i, r)
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Oe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = d.camelCase(t),
                    l = e.style;
                return t = d.cssProps[a] || (d.cssProps[a] = Me(a) || a), s = d.cssHooks[t] || d.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t] : ("string" === (o = typeof n) && (r = W.exec(n)) && r[1] && (n = Y(e, t, r), o = "number"), void(null != n && n == n && ("number" === o && (n += r && r[3] || (d.cssNumber[a] ? "" : "px")), f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = d.camelCase(t);
            return t = d.cssProps[a] || (d.cssProps[a] = Me(a) || a), (s = d.cssHooks[t] || d.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Oe(e, t, i)), "normal" === r && t in Ne && (r = Ne[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), d.each(["height", "width"], function(e, t) {
        d.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? De.test(d.css(e, "display")) && 0 === e.offsetWidth ? Pe(e, Ie, function() {
                    return qe(e, t, i)
                }) : qe(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r, o = i && Ee(e),
                    s = i && je(e, t, i, "border-box" === d.css(e, "boxSizing", !1, o), o);
                return s && (r = W.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = d.css(e, t)), Fe(0, n, s)
            }
        }
    }), d.cssHooks.marginLeft = ke(f.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(Oe(e, "marginLeft")) || e.getBoundingClientRect().left - Pe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }), d.cssHooks.marginRight = ke(f.reliableMarginRight, function(e, t) {
        return t ? Pe(e, {
            display: "inline-block"
        }, Oe, [e, "marginRight"]) : void 0
    }), d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        d.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + X[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, Ce.test(e) || (d.cssHooks[e + t].set = Fe)
    }), d.fn.extend({
        css: function(e, t) {
            return R(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (d.isArray(t)) {
                    for (i = Ee(e), r = t.length; r > s; s++) o[t[s]] = d.css(e, t[s], !1, i);
                    return o
                }
                return void 0 !== n ? d.style(e, t, n) : d.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return He(this, !0)
        },
        hide: function() {
            return He(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                U(this) ? d(this).show() : d(this).hide()
            })
        }
    }), d.Tween = ze, ze.prototype = {
        constructor: ze,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || d.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (d.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ze.propHooks[this.prop];
            return e && e.get ? e.get(this) : ze.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ze.propHooks[this.prop];
            return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ze.propHooks._default.set(this), this
        }
    }, ze.prototype.init.prototype = ze.prototype, ze.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = d.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, ze.propHooks.scrollTop = ze.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, d.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, d.fx = ze.prototype.init, d.fx.step = {};
    var Be, We, Xe = /^(?:toggle|show|hide)$/,
        Ue = /queueHooks$/;

    function Ye() {
        return e.setTimeout(function() {
            Be = void 0
        }), Be = d.now()
    }

    function Qe(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) r["margin" + (n = X[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function Ge(e, t, n) {
        for (var i, r = (Ve.tweeners[t] || []).concat(Ve.tweeners["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, t, e)) return i
    }

    function Ve(e, t, n) {
        var i, r, o = 0,
            s = Ve.prefilters.length,
            a = d.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = Be || Ye(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; s > o; o++) c.tweens[o].run(i);
                return a.notifyWith(e, [c, i, n]), 1 > i && s ? n : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: d.extend({}, t),
                opts: d.extend(!0, {
                    specialEasing: {},
                    easing: d.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Be || Ye(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = d.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? c.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (r = t[i = d.camelCase(n)], o = e[n], d.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = d.cssHooks[i]) && "expand" in s)
                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r
            }(u, c.opts.specialEasing); s > o; o++)
            if (i = Ve.prefilters[o].call(c, e, u, c.opts)) return d.isFunction(i.stop) && (d._queueHooks(c.elem, c.opts.queue).stop = d.proxy(i.stop, i)), i;
        return d.map(u, Ge, c), d.isFunction(c.opts.start) && c.opts.start.call(e, c), d.fx.timer(d.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    d.Animation = d.extend(Ve, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return Y(n.elem, e, W.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                d.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(I);
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], Ve.tweeners[n] = Ve.tweeners[n] || [], Ve.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, r, o, s, a, l, c, u = this,
                    f = {},
                    h = e.style,
                    p = e.nodeType && U(e),
                    g = F.get(e, "fxshow");
                for (i in n.queue || (null == (a = d._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, u.always(function() {
                        u.always(function() {
                            a.unqueued--, d.queue(e, "fx").length || a.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = d.css(e, "display")) ? F.get(e, "olddisplay") || Te(e.nodeName) : c) && "none" === d.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), t)
                    if (r = t[i], Xe.exec(r)) {
                        if (delete t[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            p = !0
                        }
                        f[i] = g && g[i] || d.style(e, i)
                    } else c = void 0;
                if (d.isEmptyObject(f)) "inline" === ("none" === c ? Te(e.nodeName) : c) && (h.display = c);
                else
                    for (i in g ? "hidden" in g && (p = g.hidden) : g = F.access(e, "fxshow", {}), o && (g.hidden = !p), p ? d(e).show() : u.done(function() {
                            d(e).hide()
                        }), u.done(function() {
                            var t;
                            for (t in F.remove(e, "fxshow"), f) d.style(e, t, f[t])
                        }), f) s = Ge(p ? g[i] : 0, i, u), i in g || (g[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }],
            prefilter: function(e, t) {
                t ? Ve.prefilters.unshift(e) : Ve.prefilters.push(e)
            }
        }), d.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? d.extend({}, e) : {
                complete: n || !n && t || d.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !d.isFunction(t) && t
            };
            return i.duration = d.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                d.isFunction(i.old) && i.old.call(this), i.queue && d.dequeue(this, i.queue)
            }, i
        }, d.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(U).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = d.isEmptyObject(e),
                    o = d.speed(t, n, i),
                    s = function() {
                        var t = Ve(this, d.extend({}, e), o);
                        (r || F.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = d.timers,
                        s = F.get(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && Ue.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || d.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = F.get(this),
                        i = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = d.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, d.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), d.each(["toggle", "show", "hide"], function(e, t) {
            var n = d.fn[t];
            d.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Qe(t, !0), e, i, r)
            }
        }), d.each({
            slideDown: Qe("show"),
            slideUp: Qe("hide"),
            slideToggle: Qe("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            d.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), d.timers = [], d.fx.tick = function() {
            var e, t = 0,
                n = d.timers;
            for (Be = d.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || d.fx.stop(), Be = void 0
        }, d.fx.timer = function(e) {
            d.timers.push(e), e() ? d.fx.start() : d.timers.pop()
        }, d.fx.interval = 13, d.fx.start = function() {
            We || (We = e.setInterval(d.fx.tick, d.fx.interval))
        }, d.fx.stop = function() {
            e.clearInterval(We), We = null
        }, d.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, d.fn.delay = function(t, n) {
            return t = d.fx && d.fx.speeds[t] || t, n = n || "fx", this.queue(n, function(n, i) {
                var r = e.setTimeout(n, t);
                i.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = i.createElement("input"),
                t = i.createElement("select"),
                n = t.appendChild(i.createElement("option"));
            e.type = "checkbox", f.checkOn = "" !== e.value, f.optSelected = n.selected, t.disabled = !0, f.optDisabled = !n.disabled, (e = i.createElement("input")).value = "t", e.type = "radio", f.radioValue = "t" === e.value
        }();
    var $e, Ke = d.expr.attrHandle;
    d.fn.extend({
        attr: function(e, t) {
            return R(this, d.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                d.removeAttr(this, e)
            })
        }
    }), d.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? d.prop(e, t, n) : (1 === o && d.isXMLDoc(e) || (t = t.toLowerCase(), r = d.attrHooks[t] || (d.expr.match.bool.test(t) ? $e : void 0)), void 0 !== n ? null === n ? void d.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = d.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && d.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(I);
            if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = d.propFix[n] || n, d.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
        }
    }), $e = {
        set: function(e, t, n) {
            return !1 === t ? d.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, d.each(d.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ke[t] || d.find.attr;
        Ke[t] = function(e, t, i) {
            var r, o;
            return i || (o = Ke[t], Ke[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Ke[t] = o), r
        }
    });
    var Ze = /^(?:input|select|textarea|button)$/i,
        Je = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(e, t) {
            return R(this, d.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[d.propFix[e] || e]
            })
        }
    }), d.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && d.isXMLDoc(e) || (t = d.propFix[t] || t, r = d.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = d.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ze.test(e.nodeName) || Je.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (d.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        d.propFix[this.toLowerCase()] = this
    });
    var et = /[\t\r\n\f]/g;

    function tt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    d.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).addClass(e.call(this, t, tt(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(I) || []; n = this[l++];)
                    if (r = tt(n), i = 1 === n.nodeType && (" " + r + " ").replace(et, " ")) {
                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = d.trim(i)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (d.isFunction(e)) return this.each(function(t) {
                d(this).removeClass(e.call(this, t, tt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(I) || []; n = this[l++];)
                    if (r = tt(n), i = 1 === n.nodeType && (" " + r + " ").replace(et, " ")) {
                        for (s = 0; o = t[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = d.trim(i)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each(function(n) {
                d(this).toggleClass(e.call(this, n, tt(this), t), t)
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n)
                    for (i = 0, r = d(this), o = e.match(I) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || ((t = tt(this)) && F.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : F.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + tt(n) + " ").replace(et, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var nt = /\r/g,
        it = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = d.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, d(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : d.isArray(r) && (r = d.map(r, function(e) {
                    return null == e ? "" : e + ""
                })), (t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
            })) : r ? (t = d.valHooks[r.type] || d.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(nt, "") : null == n ? "" : n : void 0
        }
    }), d.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = d.find.attr(e, "value");
                    return null != t ? t : d.trim(d.text(e)).replace(it, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (((n = i[l]).selected || l === r) && (f.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                            if (t = d(n).val(), o) return t;
                            s.push(t)
                        } return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = d.makeArray(t), s = r.length; s--;)((i = r[s]).selected = d.inArray(d.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(e, t) {
                return d.isArray(t) ? e.checked = d.inArray(d(e).val(), t) > -1 : void 0
            }
        }, f.checkOn || (d.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var rt = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(t, n, r, o) {
            var s, a, l, c, f, h, p, g = [r || i],
                m = u.call(t, "type") ? t.type : t,
                _ = u.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = l = r = r || i, 3 !== r.nodeType && 8 !== r.nodeType && !rt.test(m + d.event.triggered) && (m.indexOf(".") > -1 && (_ = m.split("."), m = _.shift(), _.sort()), f = m.indexOf(":") < 0 && "on" + m, (t = t[d.expando] ? t : new d.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = _.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : d.makeArray(n, [t]), p = d.event.special[m] || {}, o || !p.trigger || !1 !== p.trigger.apply(r, n))) {
                if (!o && !p.noBubble && !d.isWindow(r)) {
                    for (c = p.delegateType || m, rt.test(c + m) || (a = a.parentNode); a; a = a.parentNode) g.push(a), l = a;
                    l === (r.ownerDocument || i) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (s = 0;
                    (a = g[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? c : p.bindType || m, (h = (F.get(a, "events") || {})[t.type] && F.get(a, "handle")) && h.apply(a, n), (h = f && a[f]) && h.apply && L(a) && (t.result = h.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = m, o || t.isDefaultPrevented() || p._default && !1 !== p._default.apply(g.pop(), n) || !L(r) || f && d.isFunction(r[m]) && !d.isWindow(r) && ((l = r[f]) && (r[f] = null), d.event.triggered = m, r[m](), d.event.triggered = void 0, l && (r[f] = l)), t.result
            }
        },
        simulate: function(e, t, n) {
            var i = d.extend(new d.Event, n, {
                type: e,
                isSimulated: !0
            });
            d.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
        }
    }), d.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                d.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? d.event.trigger(e, t, n, !0) : void 0
        }
    }), d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        d.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), d.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), f.focusin = "onfocusin" in e, f.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            d.event.simulate(t, e.target, d.event.fix(e))
        };
        d.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    r = F.access(i, t);
                r || i.addEventListener(e, n, !0), F.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    r = F.access(i, t) - 1;
                r ? F.access(i, t, r) : (i.removeEventListener(e, n, !0), F.remove(i, t))
            }
        }
    });
    var ot = e.location,
        st = d.now(),
        at = /\?/;
    d.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, d.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + t), n
    };
    var lt = /#.*$/,
        ct = /([?&])_=[^&]*/,
        ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ft = /^(?:GET|HEAD)$/,
        ht = /^\/\//,
        dt = {},
        pt = {},
        gt = "*/".concat("*"),
        mt = i.createElement("a");

    function _t(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
                o = t.toLowerCase().match(I) || [];
            if (d.isFunction(n))
                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function vt(e, t, n, i) {
        var r = {},
            o = e === pt;

        function s(a) {
            var l;
            return r[a] = !0, d.each(e[a] || [], function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
            }), l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function yt(e, t) {
        var n, i, r = d.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && d.extend(!0, e, i), e
    }
    mt.href = ot.href, d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ot.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ot.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": gt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? yt(yt(e, d.ajaxSettings), t) : yt(d.ajaxSettings, e)
        },
        ajaxPrefilter: _t(dt),
        ajaxTransport: _t(pt),
        ajax: function(t, n) {
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, c, u, f, h = d.ajaxSetup({}, n),
                p = h.context || h,
                g = h.context && (p.nodeType || p.jquery) ? d(p) : d.event,
                m = d.Deferred(),
                _ = d.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!a)
                                for (a = {}; t = ut.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e) v[t] = [v[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return r && r.abort(t), C(0, t), this
                    }
                };
            if (m.promise(T).complete = _.add, T.success = T.done, T.error = T.fail, h.url = ((t || h.url || ot.href) + "").replace(lt, "").replace(ht, ot.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = d.trim(h.dataType || "*").toLowerCase().match(I) || [""], null == h.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = mt.protocol + "//" + mt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = d.param(h.data, h.traditional)), vt(dt, h, n, T), 2 === w) return T;
            for (f in (u = d.event && h.global) && 0 == d.active++ && d.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !ft.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (at.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (h.url = ct.test(o) ? o.replace(ct, "$1_=" + st++) : o + (at.test(o) ? "&" : "?") + "_=" + st++)), h.ifModified && (d.lastModified[o] && T.setRequestHeader("If-Modified-Since", d.lastModified[o]), d.etag[o] && T.setRequestHeader("If-None-Match", d.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + gt + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || 2 === w)) return T.abort();
            for (f in x = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[f](h[f]);
            if (r = vt(pt, h, n, T)) {
                if (T.readyState = 1, u && g.trigger("ajaxSend", [T, h]), 2 === w) return T;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout")
                }, h.timeout));
                try {
                    w = 1, r.send(y, C)
                } catch (e) {
                    if (!(2 > w)) throw e;
                    C(-1, e)
                }
            } else C(-1, "No Transport");

            function C(t, n, i, a) {
                var c, f, y, b, x, C = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), r = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && 300 > t || 304 === t, i && (b = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            } if (l[0] in n) o = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            s || (s = r)
                        }
                        o = o || s
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
                }(h, T, i)), b = function(e, t, n, i) {
                    var r, o, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (o = u.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(s = c[l + " " + o] || c["* " + o]))
                            for (r in c)
                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                    break
                                } if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, b, T, c), c ? (h.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (d.lastModified[o] = x), (x = T.getResponseHeader("etag")) && (d.etag[o] = x)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, f = b.data, c = !(y = b.error))) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", c ? m.resolveWith(p, [f, C, T]) : m.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, u && g.trigger(c ? "ajaxSuccess" : "ajaxError", [T, h, c ? f : y]), _.fireWith(p, [T, C]), u && (g.trigger("ajaxComplete", [T, h]), --d.active || d.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return d.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return d.get(e, void 0, t, "script")
        }
    }), d.each(["get", "post"], function(e, t) {
        d[t] = function(e, n, i, r) {
            return d.isFunction(n) && (r = r || i, i = n, n = void 0), d.ajax(d.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, d.isPlainObject(e) && e))
        }
    }), d._evalUrl = function(e) {
        return d.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, d.fn.extend({
        wrapAll: function(e) {
            var t;
            return d.isFunction(e) ? this.each(function(t) {
                d(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = d(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return d.isFunction(e) ? this.each(function(t) {
                d(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = d(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = d.isFunction(e);
            return this.each(function(n) {
                d(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    }), d.expr.filters.hidden = function(e) {
        return !d.expr.filters.visible(e)
    }, d.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var bt = /%20/g,
        wt = /\[\]$/,
        xt = /\r?\n/g,
        Tt = /^(?:submit|button|image|reset|file)$/i,
        Ct = /^(?:input|select|textarea|keygen)/i;

    function St(e, t, n, i) {
        var r;
        if (d.isArray(t)) d.each(t, function(t, r) {
            n || wt.test(e) ? i(e, r) : St(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== d.type(t)) i(e, t);
        else
            for (r in t) St(e + "[" + r + "]", t[r], n, i)
    }
    d.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = d.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional), d.isArray(e) || e.jquery && !d.isPlainObject(e)) d.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) St(n, e[n], t, r);
        return i.join("&").replace(bt, "+")
    }, d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = d.prop(this, "elements");
                return e ? d.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !d(this).is(":disabled") && Ct.test(this.nodeName) && !Tt.test(e) && (this.checked || !Q.test(e))
            }).map(function(e, t) {
                var n = d(this).val();
                return null == n ? null : d.isArray(n) ? d.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(xt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(xt, "\r\n")
                }
            }).get()
        }
    }), d.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Et = {
            0: 200,
            1223: 204
        },
        Pt = d.ajaxSettings.xhr();
    f.cors = !!Pt && "withCredentials" in Pt, f.ajax = Pt = !!Pt, d.ajaxTransport(function(t) {
        var n, i;
        return f.cors || Pt && !t.crossDomain ? {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Et[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        } : void 0
    }), d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return d.globalEval(e), e
            }
        }
    }), d.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), d.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain) return {
            send: function(r, o) {
                t = d("<script>").prop({
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", n = function(e) {
                    t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), i.head.appendChild(t[0])
            },
            abort: function() {
                n && n()
            }
        }
    });
    var At = [],
        Ot = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || d.expando + "_" + st++;
            return this[e] = !0, e
        }
    }), d.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ot, "$1" + r) : !1 !== t.jsonp && (t.url += (at.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return s || d.error(r + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments
        }, i.always(function() {
            void 0 === o ? d(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, At.push(r)), s && d.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), d.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || i;
        var r = T.exec(e),
            o = !n && [];
        return r ? [t.createElement(r[1])] : (r = ee([e], t, o), o && o.length && d(o).remove(), d.merge([], r.childNodes))
    };
    var kt = d.fn.load;

    function Dt(e) {
        return d.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    d.fn.load = function(e, t, n) {
        if ("string" != typeof e && kt) return kt.apply(this, arguments);
        var i, r, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = d.trim(e.slice(a)), e = e.slice(0, a)), d.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && d.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? d("<div>").append(d.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(s, o || [e.responseText, t, e])
            })
        }), this
    }, d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        d.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), d.expr.filters.animated = function(e) {
        return d.grep(d.timers, function(t) {
            return e === t.elem
        }).length
    }, d.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, c = d.css(e, "position"),
                u = d(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), o = d.css(e, "top"), l = d.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), d.isFunction(t) && (t = t.call(e, n, d.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
        }
    }, d.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                d.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            return o ? (t = o.documentElement, d.contains(t, i) ? (r = i.getBoundingClientRect(), n = Dt(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === d.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), d.nodeName(e[0], "html") || (i = e.offset()), i.top += d.css(e[0], "borderTopWidth", !0), i.left += d.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - d.css(n, "marginTop", !0),
                    left: t.left - i.left - d.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === d.css(e, "position");) e = e.offsetParent;
                return e || Ae
            })
        }
    }), d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        d.fn[e] = function(i) {
            return R(this, function(e, i, r) {
                var o = Dt(e);
                return void 0 === r ? o ? o[t] : e[i] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r)
            }, e, i, arguments.length)
        }
    }), d.each(["top", "left"], function(e, t) {
        d.cssHooks[t] = ke(f.pixelPosition, function(e, n) {
            return n ? (n = Oe(e, t), Se.test(n) ? d(e).position()[t] + "px" : n) : void 0
        })
    }), d.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        d.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            d.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === r ? "margin" : "border");
                return R(this, function(t, n, i) {
                    var r;
                    return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? d.css(t, n, s) : d.style(t, n, i, s)
                }, t, o ? i : void 0, o, null)
            }
        })
    }), d.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }), d.fn.andSelf = d.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var It = e.jQuery,
        Nt = e.$;
    return d.noConflict = function(t) {
        return e.$ === d && (e.$ = Nt), t && e.jQuery === d && (e.jQuery = It), d
    }, t || (e.jQuery = e.$ = d), d
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t((e = e || self).bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, n) {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function r(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach(function(t) {
                var i, r, o;
                i = e, o = n[r = t], r in i ? Object.defineProperty(i, r, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : i[r] = o
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    t = t && t.hasOwnProperty("default") ? t.default : t, n = n && n.hasOwnProperty("default") ? n.default : n;
    var a = "transitionend";
    var l = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t = e.getAttribute("data-target");
            if (!t || "#" === t) {
                var n = e.getAttribute("href");
                t = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(t) ? t : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var n = t(e).css("transition-duration"),
                i = t(e).css("transition-delay"),
                r = parseFloat(n),
                o = parseFloat(i);
            return r || o ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            t(e).trigger(a)
        },
        supportsTransitionEnd: function() {
            return Boolean(a)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var i in n)
                if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i],
                        o = t[i],
                        s = o && l.isElement(o) ? "element" : (a = o, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                } var a
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function() {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    l.jQueryDetection(), t.fn.emulateTransitionEnd = function(e) {
        var n = this,
            i = !1;
        return t(this).one(l.TRANSITION_END, function() {
            i = !0
        }), setTimeout(function() {
            i || l.triggerTransitionEnd(n)
        }, e), this
    }, t.event.special[l.TRANSITION_END] = {
        bindType: a,
        delegateType: a,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var c = "alert",
        u = "bs.alert",
        f = "." + u,
        h = t.fn[c],
        d = {
            CLOSE: "close" + f,
            CLOSED: "closed" + f,
            CLICK_DATA_API: "click" + f + ".data-api"
        },
        p = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.close = function(e) {
                var t = this._element;
                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, n.dispose = function() {
                t.removeData(this._element, u), this._element = null
            }, n._getRootElement = function(e) {
                var n = l.getSelectorFromElement(e),
                    i = !1;
                return n && (i = document.querySelector(n)), i || t(e).closest(".alert")[0]
            }, n._triggerCloseEvent = function(e) {
                var n = t.Event(d.CLOSE);
                return t(e).trigger(n), n
            }, n._removeElement = function(e) {
                var n = this;
                if (t(e).removeClass("show"), t(e).hasClass("fade")) {
                    var i = l.getTransitionDurationFromElement(e);
                    t(e).one(l.TRANSITION_END, function(t) {
                        return n._destroyElement(e, t)
                    }).emulateTransitionEnd(i)
                } else this._destroyElement(e)
            }, n._destroyElement = function(e) {
                t(e).detach().trigger(d.CLOSED).remove()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(u);
                    r || (r = new e(this), i.data(u, r)), "close" === n && r[n](this)
                })
            }, e._handleDismiss = function(e) {
                return function(t) {
                    t && t.preventDefault(), e.close(this)
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), e
        }();
    t(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', p._handleDismiss(new p)), t.fn[c] = p._jQueryInterface, t.fn[c].Constructor = p, t.fn[c].noConflict = function() {
        return t.fn[c] = h, p._jQueryInterface
    };
    var g = "button",
        m = "bs.button",
        _ = "." + m,
        v = ".data-api",
        y = t.fn[g],
        b = "active",
        w = '[data-toggle^="button"]',
        x = 'input:not([type="hidden"])',
        T = ".btn",
        C = {
            CLICK_DATA_API: "click" + _ + v,
            FOCUS_BLUR_DATA_API: "focus" + _ + v + " blur" + _ + v,
            LOAD_DATA_API: "load" + _ + v
        },
        S = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.toggle = function() {
                var e = !0,
                    n = !0,
                    i = t(this._element).closest('[data-toggle="buttons"]')[0];
                if (i) {
                    var r = this._element.querySelector(x);
                    if (r) {
                        if ("radio" === r.type)
                            if (r.checked && this._element.classList.contains(b)) e = !1;
                            else {
                                var o = i.querySelector(".active");
                                o && t(o).removeClass(b)
                            }
                        else "checkbox" === r.type ? "LABEL" === this._element.tagName && r.checked === this._element.classList.contains(b) && (e = !1) : e = !1;
                        e && (r.checked = !this._element.classList.contains(b), t(r).trigger("change")), r.focus(), n = !1
                    }
                }
                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (n && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), e && t(this._element).toggleClass(b))
            }, n.dispose = function() {
                t.removeData(this._element, m), this._element = null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(m);
                    i || (i = new e(this), t(this).data(m, i)), "toggle" === n && i[n]()
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), e
        }();
    t(document).on(C.CLICK_DATA_API, w, function(e) {
        var n = e.target;
        if (t(n).hasClass("btn") || (n = t(n).closest(T)[0]), !n || n.hasAttribute("disabled") || n.classList.contains("disabled")) e.preventDefault();
        else {
            var i = n.querySelector(x);
            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
            S._jQueryInterface.call(t(n), "toggle")
        }
    }).on(C.FOCUS_BLUR_DATA_API, w, function(e) {
        var n = t(e.target).closest(T)[0];
        t(n).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), t(window).on(C.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var i = e[t],
                r = i.querySelector(x);
            r.checked || r.hasAttribute("checked") ? i.classList.add(b) : i.classList.remove(b)
        }
        for (var o = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < s; o++) {
            var a = e[o];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(b) : a.classList.remove(b)
        }
    }), t.fn[g] = S._jQueryInterface, t.fn[g].Constructor = S, t.fn[g].noConflict = function() {
        return t.fn[g] = y, S._jQueryInterface
    };
    var E = "carousel",
        P = "bs.carousel",
        A = "." + P,
        O = ".data-api",
        k = t.fn[E],
        D = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        I = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        N = "next",
        R = "prev",
        L = {
            SLIDE: "slide" + A,
            SLID: "slid" + A,
            KEYDOWN: "keydown" + A,
            MOUSEENTER: "mouseenter" + A,
            MOUSELEAVE: "mouseleave" + A,
            TOUCHSTART: "touchstart" + A,
            TOUCHMOVE: "touchmove" + A,
            TOUCHEND: "touchend" + A,
            POINTERDOWN: "pointerdown" + A,
            POINTERUP: "pointerup" + A,
            DRAG_START: "dragstart" + A,
            LOAD_DATA_API: "load" + A + O,
            CLICK_DATA_API: "click" + A + O
        },
        M = "active",
        F = ".active.carousel-item",
        j = ".carousel-indicators",
        q = {
            TOUCH: "touch",
            PEN: "pen"
        },
        H = function() {
            function e(e, t) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(j), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
            }
            var n = e.prototype;
            return n.next = function() {
                this._isSliding || this._slide(N)
            }, n.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(R)
            }, n.pause = function(e) {
                e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(e) {
                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(e) {
                var n = this;
                this._activeElement = this._element.querySelector(F);
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding) t(this._element).one(L.SLID, function() {
                        return n.to(e)
                    });
                    else {
                        if (i === e) return this.pause(), void this.cycle();
                        var r = i < e ? N : R;
                        this._slide(r, this._items[e])
                    }
            }, n.dispose = function() {
                t(this._element).off(A), t.removeData(this._element, P), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(e) {
                return e = s({}, D, {}, e), l.typeCheckConfig(E, e, I), e
            }, n._handleSwipe = function() {
                var e = Math.abs(this.touchDeltaX);
                if (!(e <= 40)) {
                    var t = e / this.touchDeltaX;
                    (this.touchDeltaX = 0) < t && this.prev(), t < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(L.KEYDOWN, function(t) {
                    return e._keydown(t)
                }), "hover" === this._config.pause && t(this._element).on(L.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(L.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var e = this;
                if (this._touchSupported) {
                    var n = function(t) {
                            e._pointerEvent && q[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                        },
                        i = function(t) {
                            e._pointerEvent && q[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function(t) {
                                return e.cycle(t)
                            }, 500 + e._config.interval))
                        };
                    t(this._element.querySelectorAll(".carousel-item img")).on(L.DRAG_START, function(e) {
                        return e.preventDefault()
                    }), this._pointerEvent ? (t(this._element).on(L.POINTERDOWN, function(e) {
                        return n(e)
                    }), t(this._element).on(L.POINTERUP, function(e) {
                        return i(e)
                    }), this._element.classList.add("pointer-event")) : (t(this._element).on(L.TOUCHSTART, function(e) {
                        return n(e)
                    }), t(this._element).on(L.TOUCHMOVE, function(t) {
                        return function(t) {
                            t.originalEvent.touches && 1 < t.originalEvent.touches.length ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                        }(t)
                    }), t(this._element).on(L.TOUCHEND, function(e) {
                        return i(e)
                    }))
                }
            }, n._keydown = function(e) {
                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                    case 37:
                        e.preventDefault(), this.prev();
                        break;
                    case 39:
                        e.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(e) {
                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
            }, n._getItemByDirection = function(e, t) {
                var n = e === N,
                    i = e === R,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                var s = (r + (e === R ? -1 : 1)) % this._items.length;
                return -1 == s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e),
                    r = this._getItemIndex(this._element.querySelector(F)),
                    o = t.Event(L.SLIDE, {
                        relatedTarget: e,
                        direction: n,
                        from: r,
                        to: i
                    });
                return t(this._element).trigger(o), o
            }, n._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                    t(n).removeClass(M);
                    var i = this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(M)
                }
            }, n._slide = function(e, n) {
                var i, r, o, s = this,
                    a = this._element.querySelector(F),
                    c = this._getItemIndex(a),
                    u = n || a && this._getItemByDirection(e, a),
                    f = this._getItemIndex(u),
                    h = Boolean(this._interval);
                if (o = e === N ? (i = "carousel-item-left", r = "carousel-item-next", "left") : (i = "carousel-item-right", r = "carousel-item-prev", "right"), u && t(u).hasClass(M)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
                    this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(u);
                    var d = t.Event(L.SLID, {
                        relatedTarget: u,
                        direction: o,
                        from: c,
                        to: f
                    });
                    if (t(this._element).hasClass("slide")) {
                        t(u).addClass(r), l.reflow(u), t(a).addClass(i), t(u).addClass(i);
                        var p = parseInt(u.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var g = l.getTransitionDurationFromElement(a);
                        t(a).one(l.TRANSITION_END, function() {
                            t(u).removeClass(i + " " + r).addClass(M), t(a).removeClass(M + " " + r + " " + i), s._isSliding = !1, setTimeout(function() {
                                return t(s._element).trigger(d)
                            }, 0)
                        }).emulateTransitionEnd(g)
                    } else t(a).removeClass(M), t(u).addClass(M), this._isSliding = !1, t(this._element).trigger(d);
                    h && this.cycle()
                }
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(P),
                        r = s({}, D, {}, t(this).data());
                    "object" == typeof n && (r = s({}, r, {}, n));
                    var o = "string" == typeof n ? n : r.slide;
                    if (i || (i = new e(this, r), t(this).data(P, i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof o) {
                        if (void 0 === i[o]) throw new TypeError('No method named "' + o + '"');
                        i[o]()
                    } else r.interval && r.ride && (i.pause(), i.cycle())
                })
            }, e._dataApiClickHandler = function(n) {
                var i = l.getSelectorFromElement(this);
                if (i) {
                    var r = t(i)[0];
                    if (r && t(r).hasClass("carousel")) {
                        var o = s({}, t(r).data(), {}, t(this).data()),
                            a = this.getAttribute("data-slide-to");
                        a && (o.interval = !1), e._jQueryInterface.call(t(r), o), a && t(r).data(P).to(a), n.preventDefault()
                    }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return D
                }
            }]), e
        }();
    t(document).on(L.CLICK_DATA_API, "[data-slide], [data-slide-to]", H._dataApiClickHandler), t(window).on(L.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), n = 0, i = e.length; n < i; n++) {
            var r = t(e[n]);
            H._jQueryInterface.call(r, r.data())
        }
    }), t.fn[E] = H._jQueryInterface, t.fn[E].Constructor = H, t.fn[E].noConflict = function() {
        return t.fn[E] = k, H._jQueryInterface
    };
    var z = "collapse",
        B = "bs.collapse",
        W = "." + B,
        X = t.fn[z],
        U = {
            toggle: !0,
            parent: ""
        },
        Y = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Q = {
            SHOW: "show" + W,
            SHOWN: "shown" + W,
            HIDE: "hide" + W,
            HIDDEN: "hidden" + W,
            CLICK_DATA_API: "click" + W + ".data-api"
        },
        G = "show",
        V = "collapse",
        $ = "collapsing",
        K = "collapsed",
        Z = '[data-toggle="collapse"]',
        J = function() {
            function e(e, t) {
                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var n = [].slice.call(document.querySelectorAll(Z)), i = 0, r = n.length; i < r; i++) {
                    var o = n[i],
                        s = l.getSelectorFromElement(o),
                        a = [].slice.call(document.querySelectorAll(s)).filter(function(t) {
                            return t === e
                        });
                    null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(o))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var n = e.prototype;
            return n.toggle = function() {
                t(this._element).hasClass(G) ? this.hide() : this.show()
            }, n.show = function() {
                var n, i, r = this;
                if (!(this._isTransitioning || t(this._element).hasClass(G) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains(V)
                    })).length && (n = null), n && (i = t(n).not(this._selector).data(B)) && i._isTransitioning))) {
                    var o = t.Event(Q.SHOW);
                    if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
                        n && (e._jQueryInterface.call(t(n).not(this._selector), "hide"), i || t(n).data(B, null));
                        var s = this._getDimension();
                        t(this._element).removeClass(V).addClass($), this._element.style[s] = 0, this._triggerArray.length && t(this._triggerArray).removeClass(K).attr("aria-expanded", !0), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            c = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, function() {
                            t(r._element).removeClass($).addClass(V).addClass(G), r._element.style[s] = "", r.setTransitioning(!1), t(r._element).trigger(Q.SHOWN)
                        }).emulateTransitionEnd(c), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, n.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(G)) {
                    var n = t.Event(Q.HIDE);
                    if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        this._element.style[i] = this._element.getBoundingClientRect()[i] + "px", l.reflow(this._element), t(this._element).addClass($).removeClass(V).removeClass(G);
                        var r = this._triggerArray.length;
                        if (0 < r)
                            for (var o = 0; o < r; o++) {
                                var s = this._triggerArray[o],
                                    a = l.getSelectorFromElement(s);
                                null !== a && (t([].slice.call(document.querySelectorAll(a))).hasClass(G) || t(s).addClass(K).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0), this._element.style[i] = "";
                        var c = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, function() {
                            e.setTransitioning(!1), t(e._element).removeClass($).addClass(V).trigger(Q.HIDDEN)
                        }).emulateTransitionEnd(c)
                    }
                }
            }, n.setTransitioning = function(e) {
                this._isTransitioning = e
            }, n.dispose = function() {
                t.removeData(this._element, B), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(e) {
                return (e = s({}, U, {}, e)).toggle = Boolean(e.toggle), l.typeCheckConfig(z, e, Y), e
            }, n._getDimension = function() {
                return t(this._element).hasClass("width") ? "width" : "height"
            }, n._getParent = function() {
                var n, i = this;
                l.isElement(this._config.parent) ? (n = this._config.parent, void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent);
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                    o = [].slice.call(n.querySelectorAll(r));
                return t(o).each(function(t, n) {
                    i._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function(e, n) {
                var i = t(e).hasClass(G);
                n.length && t(n).toggleClass(K, !i).attr("aria-expanded", i)
            }, e._getTargetFromElement = function(e) {
                var t = l.getSelectorFromElement(e);
                return t ? document.querySelector(t) : null
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(B),
                        o = s({}, U, {}, i.data(), {}, "object" == typeof n && n ? n : {});
                    if (!r && o.toggle && /show|hide/.test(n) && (o.toggle = !1), r || (r = new e(this, o), i.data(B, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return U
                }
            }]), e
        }();
    t(document).on(Q.CLICK_DATA_API, Z, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = t(this),
            i = l.getSelectorFromElement(this),
            r = [].slice.call(document.querySelectorAll(i));
        t(r).each(function() {
            var e = t(this),
                i = e.data(B) ? "toggle" : n.data();
            J._jQueryInterface.call(e, i)
        })
    }), t.fn[z] = J._jQueryInterface, t.fn[z].Constructor = J, t.fn[z].noConflict = function() {
        return t.fn[z] = X, J._jQueryInterface
    };
    var ee = "dropdown",
        te = "bs.dropdown",
        ne = "." + te,
        ie = ".data-api",
        re = t.fn[ee],
        oe = new RegExp("38|40|27"),
        se = {
            HIDE: "hide" + ne,
            HIDDEN: "hidden" + ne,
            SHOW: "show" + ne,
            SHOWN: "shown" + ne,
            CLICK: "click" + ne,
            CLICK_DATA_API: "click" + ne + ie,
            KEYDOWN_DATA_API: "keydown" + ne + ie,
            KEYUP_DATA_API: "keyup" + ne + ie
        },
        ae = "disabled",
        le = "show",
        ce = "dropdown-menu-right",
        ue = '[data-toggle="dropdown"]',
        fe = ".dropdown-menu",
        he = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        de = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        pe = function() {
            function e(e, t) {
                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var i = e.prototype;
            return i.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(ae)) {
                    var n = t(this._menu).hasClass(le);
                    e._clearMenus(), n || this.show(!0)
                }
            }, i.show = function(i) {
                if (void 0 === i && (i = !1), !(this._element.disabled || t(this._element).hasClass(ae) || t(this._menu).hasClass(le))) {
                    var r = {
                            relatedTarget: this._element
                        },
                        o = t.Event(se.SHOW, r),
                        s = e._getParentFromElement(this._element);
                    if (t(s).trigger(o), !o.isDefaultPrevented()) {
                        if (!this._inNavbar && i) {
                            if (void 0 === n) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                            var a = this._element;
                            "parent" === this._config.reference ? a = s : l.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(s).addClass("position-static"), this._popper = new n(a, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === t(s).closest(".navbar-nav").length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(le), t(s).toggleClass(le).trigger(t.Event(se.SHOWN, r))
                    }
                }
            }, i.hide = function() {
                if (!this._element.disabled && !t(this._element).hasClass(ae) && t(this._menu).hasClass(le)) {
                    var n = {
                            relatedTarget: this._element
                        },
                        i = t.Event(se.HIDE, n),
                        r = e._getParentFromElement(this._element);
                    t(r).trigger(i), i.isDefaultPrevented() || (this._popper && this._popper.destroy(), t(this._menu).toggleClass(le), t(r).toggleClass(le).trigger(t.Event(se.HIDDEN, n)))
                }
            }, i.dispose = function() {
                t.removeData(this._element, te), t(this._element).off(ne), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, i.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, i._addEventListeners = function() {
                var e = this;
                t(this._element).on(se.CLICK, function(t) {
                    t.preventDefault(), t.stopPropagation(), e.toggle()
                })
            }, i._getConfig = function(e) {
                return e = s({}, this.constructor.Default, {}, t(this._element).data(), {}, e), l.typeCheckConfig(ee, e, this.constructor.DefaultType), e
            }, i._getMenuElement = function() {
                if (!this._menu) {
                    var t = e._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(fe))
                }
                return this._menu
            }, i._getPlacement = function() {
                var e = t(this._element.parentNode),
                    n = "bottom-start";
                return e.hasClass("dropup") ? (n = "top-start", t(this._menu).hasClass(ce) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(ce) && (n = "bottom-end"), n
            }, i._detectNavbar = function() {
                return 0 < t(this._element).closest(".navbar").length
            }, i._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this._config.offset ? t.fn = function(t) {
                    return t.offsets = s({}, t.offsets, {}, e._config.offset(t.offsets, e._element) || {}), t
                } : t.offset = this._config.offset, t
            }, i._getPopperConfig = function() {
                var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (e.modifiers.applyStyle = {
                    enabled: !1
                }), s({}, e, {}, this._config.popperConfig)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(te);
                    if (i || (i = new e(this, "object" == typeof n ? n : null), t(this).data(te, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, e._clearMenus = function(n) {
                if (!n || 3 !== n.which && ("keyup" !== n.type || 9 === n.which))
                    for (var i = [].slice.call(document.querySelectorAll(ue)), r = 0, o = i.length; r < o; r++) {
                        var s = e._getParentFromElement(i[r]),
                            a = t(i[r]).data(te),
                            l = {
                                relatedTarget: i[r]
                            };
                        if (n && "click" === n.type && (l.clickEvent = n), a) {
                            var c = a._menu;
                            if (t(s).hasClass(le) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "keyup" === n.type && 9 === n.which) && t.contains(s, n.target))) {
                                var u = t.Event(se.HIDE, l);
                                t(s).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[r].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), t(c).removeClass(le), t(s).removeClass(le).trigger(t.Event(se.HIDDEN, l)))
                            }
                        }
                    }
            }, e._getParentFromElement = function(e) {
                var t, n = l.getSelectorFromElement(e);
                return n && (t = document.querySelector(n)), t || e.parentNode
            }, e._dataApiKeydownHandler = function(n) {
                if ((/input|textarea/i.test(n.target.tagName) ? !(32 === n.which || 27 !== n.which && (40 !== n.which && 38 !== n.which || t(n.target).closest(fe).length)) : oe.test(n.which)) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(ae))) {
                    var i = e._getParentFromElement(this),
                        r = t(i).hasClass(le);
                    if (r || 27 !== n.which)
                        if (r && (!r || 27 !== n.which && 32 !== n.which)) {
                            var o = [].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                                return t(e).is(":visible")
                            });
                            if (0 !== o.length) {
                                var s = o.indexOf(n.target);
                                38 === n.which && 0 < s && s--, 40 === n.which && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                            }
                        } else {
                            if (27 === n.which) {
                                var a = i.querySelector(ue);
                                t(a).trigger("focus")
                            }
                            t(this).trigger("click")
                        }
                }
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return he
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return de
                }
            }]), e
        }();
    t(document).on(se.KEYDOWN_DATA_API, ue, pe._dataApiKeydownHandler).on(se.KEYDOWN_DATA_API, fe, pe._dataApiKeydownHandler).on(se.CLICK_DATA_API + " " + se.KEYUP_DATA_API, pe._clearMenus).on(se.CLICK_DATA_API, ue, function(e) {
        e.preventDefault(), e.stopPropagation(), pe._jQueryInterface.call(t(this), "toggle")
    }).on(se.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), t.fn[ee] = pe._jQueryInterface, t.fn[ee].Constructor = pe, t.fn[ee].noConflict = function() {
        return t.fn[ee] = re, pe._jQueryInterface
    };
    var ge = "modal",
        me = "bs.modal",
        _e = "." + me,
        ve = t.fn[ge],
        ye = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        be = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        we = {
            HIDE: "hide" + _e,
            HIDE_PREVENTED: "hidePrevented" + _e,
            HIDDEN: "hidden" + _e,
            SHOW: "show" + _e,
            SHOWN: "shown" + _e,
            FOCUSIN: "focusin" + _e,
            RESIZE: "resize" + _e,
            CLICK_DISMISS: "click.dismiss" + _e,
            KEYDOWN_DISMISS: "keydown.dismiss" + _e,
            MOUSEUP_DISMISS: "mouseup.dismiss" + _e,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + _e,
            CLICK_DATA_API: "click" + _e + ".data-api"
        },
        xe = "modal-open",
        Te = "fade",
        Ce = "show",
        Se = "modal-static",
        Ee = ".modal-dialog",
        Pe = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Ae = ".sticky-top",
        Oe = function() {
            function e(e, t) {
                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Ee), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
            }
            var n = e.prototype;
            return n.toggle = function(e) {
                return this._isShown ? this.hide() : this.show(e)
            }, n.show = function(e) {
                var n = this;
                if (!this._isShown && !this._isTransitioning) {
                    t(this._element).hasClass(Te) && (this._isTransitioning = !0);
                    var i = t.Event(we.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(we.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                        return n.hide(e)
                    }), t(this._dialog).on(we.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(we.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }, n.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                    var i = t.Event(we.HIDE);
                    if (t(this._element).trigger(i), this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = t(this._element).hasClass(Te);
                        if (r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(we.FOCUSIN), t(this._element).removeClass(Ce), t(this._element).off(we.CLICK_DISMISS), t(this._dialog).off(we.MOUSEDOWN_DISMISS), r) {
                            var o = l.getTransitionDurationFromElement(this._element);
                            t(this._element).one(l.TRANSITION_END, function(e) {
                                return n._hideModal(e)
                            }).emulateTransitionEnd(o)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return t(e).off(_e)
                }), t(document).off(we.FOCUSIN), t.removeData(this._element, me), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(e) {
                return e = s({}, ye, {}, e), l.typeCheckConfig(ge, e, be), e
            }, n._triggerBackdropTransition = function() {
                var e = this;
                if ("static" === this._config.backdrop) {
                    var n = t.Event(we.HIDE_PREVENTED);
                    if (t(this._element).trigger(n), n.defaultPrevented) return;
                    this._element.classList.add(Se);
                    var i = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, function() {
                        e._element.classList.remove(Se)
                    }).emulateTransitionEnd(i), this._element.focus()
                } else this.hide()
            }, n._showElement = function(e) {
                var n = this,
                    i = t(this._element).hasClass(Te),
                    r = this._dialog ? this._dialog.querySelector(".modal-body") : null;

                function o() {
                    n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(s)
                }
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), t(this._dialog).hasClass("modal-dialog-scrollable") && r ? r.scrollTop = 0 : this._element.scrollTop = 0, i && l.reflow(this._element), t(this._element).addClass(Ce), this._config.focus && this._enforceFocus();
                var s = t.Event(we.SHOWN, {
                    relatedTarget: e
                });
                if (i) {
                    var a = l.getTransitionDurationFromElement(this._dialog);
                    t(this._dialog).one(l.TRANSITION_END, o).emulateTransitionEnd(a)
                } else o()
            }, n._enforceFocus = function() {
                var e = this;
                t(document).off(we.FOCUSIN).on(we.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(we.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && e._triggerBackdropTransition()
                }) : this._isShown || t(this._element).off(we.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(we.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(we.RESIZE)
            }, n._hideModal = function() {
                var e = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    t(document.body).removeClass(xe), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(we.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(e) {
                var n = this,
                    i = t(this._element).hasClass(Te) ? Te : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), t(this._backdrop).appendTo(document.body), t(this._element).on(we.CLICK_DISMISS, function(e) {
                            n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : e.target === e.currentTarget && n._triggerBackdropTransition()
                        }), i && l.reflow(this._backdrop), t(this._backdrop).addClass(Ce), !e) return;
                    if (!i) return void e();
                    var r = l.getTransitionDurationFromElement(this._backdrop);
                    t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(Ce);
                    var o = function() {
                        n._removeBackdrop(), e && e()
                    };
                    if (t(this._element).hasClass(Te)) {
                        var s = l.getTransitionDurationFromElement(this._backdrop);
                        t(this._backdrop).one(l.TRANSITION_END, o).emulateTransitionEnd(s)
                    } else o()
                } else e && e()
            }, n._adjustDialog = function() {
                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var e = document.body.getBoundingClientRect();
                this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    var n = [].slice.call(document.querySelectorAll(Pe)),
                        i = [].slice.call(document.querySelectorAll(Ae));
                    t(n).each(function(n, i) {
                        var r = i.style.paddingRight,
                            o = t(i).css("padding-right");
                        t(i).data("padding-right", r).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                    }), t(i).each(function(n, i) {
                        var r = i.style.marginRight,
                            o = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                    });
                    var r = document.body.style.paddingRight,
                        o = t(document.body).css("padding-right");
                    t(document.body).data("padding-right", r).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                t(document.body).addClass(xe)
            }, n._resetScrollbar = function() {
                var e = [].slice.call(document.querySelectorAll(Pe));
                t(e).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    t(n).removeData("padding-right"), n.style.paddingRight = i || ""
                });
                var n = [].slice.call(document.querySelectorAll("" + Ae));
                t(n).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var i = t(document.body).data("padding-right");
                t(document.body).removeData("padding-right"), document.body.style.paddingRight = i || ""
            }, n._getScrollbarWidth = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure", document.body.appendChild(e);
                var t = e.getBoundingClientRect().width - e.clientWidth;
                return document.body.removeChild(e), t
            }, e._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var r = t(this).data(me),
                        o = s({}, ye, {}, t(this).data(), {}, "object" == typeof n && n ? n : {});
                    if (r || (r = new e(this, o), t(this).data(me, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](i)
                    } else o.show && r.show(i)
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ye
                }
            }]), e
        }();
    t(document).on(we.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var n, i = this,
            r = l.getSelectorFromElement(this);
        r && (n = document.querySelector(r));
        var o = t(n).data(me) ? "toggle" : s({}, t(n).data(), {}, t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var a = t(n).one(we.SHOW, function(e) {
            e.isDefaultPrevented() || a.one(we.HIDDEN, function() {
                t(i).is(":visible") && i.focus()
            })
        });
        Oe._jQueryInterface.call(t(n), o, this)
    }), t.fn[ge] = Oe._jQueryInterface, t.fn[ge].Constructor = Oe, t.fn[ge].noConflict = function() {
        return t.fn[ge] = ve, Oe._jQueryInterface
    };
    var ke = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        De = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        Ie = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

    function Ne(e, t, n) {
        if (0 === e.length) return e;
        if (n && "function" == typeof n) return n(e);
        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function(e) {
                var n = o[e],
                    i = n.nodeName.toLowerCase();
                if (-1 === r.indexOf(n.nodeName.toLowerCase())) return n.parentNode.removeChild(n), "continue";
                var s = [].slice.call(n.attributes),
                    a = [].concat(t["*"] || [], t[i] || []);
                s.forEach(function(e) {
                    ! function(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === ke.indexOf(n) || Boolean(e.nodeValue.match(De) || e.nodeValue.match(Ie));
                        for (var i = t.filter(function(e) {
                                return e instanceof RegExp
                            }), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    }(e, a) && n.removeAttribute(e.nodeName)
                })
            }, a = 0, l = o.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Re = "tooltip",
        Le = "bs.tooltip",
        Me = "." + Le,
        Fe = t.fn[Re],
        je = "bs-tooltip",
        qe = new RegExp("(^|\\s)" + je + "\\S+", "g"),
        He = ["sanitize", "whiteList", "sanitizeFn"],
        ze = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Be = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        We = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Xe = "show",
        Ue = {
            HIDE: "hide" + Me,
            HIDDEN: "hidden" + Me,
            SHOW: "show" + Me,
            SHOWN: "shown" + Me,
            INSERTED: "inserted" + Me,
            CLICK: "click" + Me,
            FOCUSIN: "focusin" + Me,
            FOCUSOUT: "focusout" + Me,
            MOUSEENTER: "mouseenter" + Me,
            MOUSELEAVE: "mouseleave" + Me
        },
        Ye = "fade",
        Qe = "show",
        Ge = "hover",
        Ve = "focus",
        $e = function() {
            function e(e, t) {
                if (void 0 === n) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
            }
            var i = e.prototype;
            return i.enable = function() {
                this._isEnabled = !0
            }, i.disable = function() {
                this._isEnabled = !1
            }, i.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, i.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY,
                            i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(Qe)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, i.dispose = function() {
                clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, i.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var r = l.findShadowRoot(this.element),
                        o = t.contains(null !== r ? r : this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !o) return;
                    var s = this.getTipElement(),
                        a = l.getUID(this.constructor.NAME);
                    s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(s).addClass(Ye);
                    var c = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                        u = this._getAttachment(c);
                    this.addAttachmentClass(u);
                    var f = this._getContainer();
                    t(s).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(f), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new n(this.element, s, this._getPopperConfig(u)), t(s).addClass(Qe), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                    var h = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), "out" === n && e._leave(null, e)
                    };
                    if (t(this.tip).hasClass(Ye)) {
                        var d = l.getTransitionDurationFromElement(this.tip);
                        t(this.tip).one(l.TRANSITION_END, h).emulateTransitionEnd(d)
                    } else h()
                }
            }, i.hide = function(e) {
                function n() {
                    i._hoverState !== Xe && r.parentNode && r.parentNode.removeChild(r), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), e && e()
                }
                var i = this,
                    r = this.getTipElement(),
                    o = t.Event(this.constructor.Event.HIDE);
                if (t(this.element).trigger(o), !o.isDefaultPrevented()) {
                    if (t(r).removeClass(Qe), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger.click = !1, this._activeTrigger[Ve] = !1, this._activeTrigger[Ge] = !1, t(this.tip).hasClass(Ye)) {
                        var s = l.getTransitionDurationFromElement(r);
                        t(r).one(l.TRANSITION_END, n).emulateTransitionEnd(s)
                    } else n();
                    this._hoverState = ""
                }
            }, i.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, i.isWithContent = function() {
                return Boolean(this.getTitle())
            }, i.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(je + "-" + e)
            }, i.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var e = this.getTipElement();
                this.setElementContent(t(e.querySelectorAll(".tooltip-inner")), this.getTitle()), t(e).removeClass(Ye + " " + Qe)
            }, i.setElementContent = function(e, n) {
                "object" != typeof n || !n.nodeType && !n.jquery ? this.config.html ? (this.config.sanitize && (n = Ne(n, this.config.whiteList, this.config.sanitizeFn)), e.html(n)) : e.text(n) : this.config.html ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text())
            }, i.getTitle = function() {
                var e = this.element.getAttribute("data-original-title");
                return e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
            }, i._getPopperConfig = function(e) {
                var t = this;
                return s({}, {
                    placement: e,
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: ".arrow"
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function(e) {
                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                    },
                    onUpdate: function(e) {
                        return t._handlePopperPlacementChange(e)
                    }
                }, {}, this.config.popperConfig)
            }, i._getOffset = function() {
                var e = this,
                    t = {};
                return "function" == typeof this.config.offset ? t.fn = function(t) {
                    return t.offsets = s({}, t.offsets, {}, e.config.offset(t.offsets, e.element) || {}), t
                } : t.offset = this.config.offset, t
            }, i._getContainer = function() {
                return !1 === this.config.container ? document.body : l.isElement(this.config.container) ? t(this.config.container) : t(document).find(this.config.container)
            }, i._getAttachment = function(e) {
                return Be[e.toUpperCase()]
            }, i._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                        return e.toggle(t)
                    });
                    else if ("manual" !== n) {
                        var i = n === Ge ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                            r = n === Ge ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                }), this._hideModalHandler = function() {
                    e.element && e.hide()
                }, t(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, i._fixTitle = function() {
                var e = typeof this.element.getAttribute("data-original-title");
                !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, i._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? Ve : Ge] = !0), t(n.getTipElement()).hasClass(Qe) || n._hoverState === Xe ? n._hoverState = Xe : (clearTimeout(n._timeout), n._hoverState = Xe, n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === Xe && n.show()
                }, n.config.delay.show) : n.show())
            }, i._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? Ve : Ge] = !1), n._isWithActiveTrigger() || (clearTimeout(n._timeout), n._hoverState = "out", n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    "out" === n._hoverState && n.hide()
                }, n.config.delay.hide) : n.hide())
            }, i._isWithActiveTrigger = function() {
                for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1
            }, i._getConfig = function(e) {
                var n = t(this.element).data();
                return Object.keys(n).forEach(function(e) {
                    -1 !== He.indexOf(e) && delete n[e]
                }), "number" == typeof(e = s({}, this.constructor.Default, {}, n, {}, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), l.typeCheckConfig(Re, e, this.constructor.DefaultType), e.sanitize && (e.template = Ne(e.template, e.whiteList, e.sanitizeFn)), e
            }, i._getDelegateConfig = function() {
                var e = {};
                if (this.config)
                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                return e
            }, i._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(qe);
                null !== n && n.length && e.removeClass(n.join(""))
            }, i._handlePopperPlacementChange = function(e) {
                var t = e.instance;
                this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
            }, i._fixTransition = function() {
                var e = this.getTipElement(),
                    n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(Ye), this.config.animation = !1, this.hide(), this.show(), this.config.animation = n)
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(Le),
                        r = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new e(this, r), t(this).data(Le, i)), "string" == typeof n)) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return We
                }
            }, {
                key: "NAME",
                get: function() {
                    return Re
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Le
                }
            }, {
                key: "Event",
                get: function() {
                    return Ue
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Me
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ze
                }
            }]), e
        }();
    t.fn[Re] = $e._jQueryInterface, t.fn[Re].Constructor = $e, t.fn[Re].noConflict = function() {
        return t.fn[Re] = Fe, $e._jQueryInterface
    };
    var Ke = "popover",
        Ze = "bs.popover",
        Je = "." + Ze,
        et = t.fn[Ke],
        tt = "bs-popover",
        nt = new RegExp("(^|\\s)" + tt + "\\S+", "g"),
        it = s({}, $e.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        rt = s({}, $e.DefaultType, {
            content: "(string|element|function)"
        }),
        ot = {
            HIDE: "hide" + Je,
            HIDDEN: "hidden" + Je,
            SHOW: "show" + Je,
            SHOWN: "shown" + Je,
            INSERTED: "inserted" + Je,
            CLICK: "click" + Je,
            FOCUSIN: "focusin" + Je,
            FOCUSOUT: "focusout" + Je,
            MOUSEENTER: "mouseenter" + Je,
            MOUSELEAVE: "mouseleave" + Je
        },
        st = function(e) {
            function n() {
                return e.apply(this, arguments) || this
            }! function(e, t) {
                e.prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t
            }(n, e);
            var i = n.prototype;
            return i.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, i.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass(tt + "-" + e)
            }, i.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)), this.setElementContent(e.find(".popover-body"), n), e.removeClass("fade show")
            }, i._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, i._cleanTipClass = function() {
                var e = t(this.getTipElement()),
                    n = e.attr("class").match(nt);
                null !== n && 0 < n.length && e.removeClass(n.join(""))
            }, n._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(Ze),
                        r = "object" == typeof e ? e : null;
                    if ((i || !/dispose|hide/.test(e)) && (i || (i = new n(this, r), t(this).data(Ze, i)), "string" == typeof e)) {
                        if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }, r(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return it
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ke
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return Ze
                }
            }, {
                key: "Event",
                get: function() {
                    return ot
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return Je
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return rt
                }
            }]), n
        }($e);
    t.fn[Ke] = st._jQueryInterface, t.fn[Ke].Constructor = st, t.fn[Ke].noConflict = function() {
        return t.fn[Ke] = et, st._jQueryInterface
    };
    var at = "scrollspy",
        lt = "bs.scrollspy",
        ct = "." + lt,
        ut = t.fn[at],
        ft = {
            offset: 10,
            method: "auto",
            target: ""
        },
        ht = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        dt = {
            ACTIVATE: "activate" + ct,
            SCROLL: "scroll" + ct,
            LOAD_DATA_API: "load" + ct + ".data-api"
        },
        pt = "active",
        gt = ".nav, .list-group",
        mt = ".nav-link",
        _t = ".list-group-item",
        vt = ".dropdown-item",
        yt = "position",
        bt = function() {
            function e(e, n) {
                var i = this;
                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(n), this._selector = this._config.target + " " + mt + "," + this._config.target + " " + _t + "," + this._config.target + " " + vt, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(dt.SCROLL, function(e) {
                    return i._process(e)
                }), this.refresh(), this._process()
            }
            var n = e.prototype;
            return n.refresh = function() {
                var e = this,
                    n = this._scrollElement === this._scrollElement.window ? "offset" : yt,
                    i = "auto" === this._config.method ? n : this._config.method,
                    r = i === yt ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                    var n, o = l.getSelectorFromElement(e);
                    if (o && (n = document.querySelector(o)), n) {
                        var s = n.getBoundingClientRect();
                        if (s.width || s.height) return [t(n)[i]().top + r, o]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]), e._targets.push(t[1])
                })
            }, n.dispose = function() {
                t.removeData(this._element, lt), t(this._scrollElement).off(ct), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(e) {
                if ("string" != typeof(e = s({}, ft, {}, "object" == typeof e && e ? e : {})).target) {
                    var n = t(e.target).attr("id");
                    n || (n = l.getUID(at), t(e.target).attr("id", n)), e.target = "#" + n
                }
                return l.typeCheckConfig(at, e, ht), e
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if (this._scrollHeight !== t && this.refresh(), n <= e) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }, n._activate = function(e) {
                this._activeTarget = e, this._clear();
                var n = this._selector.split(",").map(function(t) {
                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                    }),
                    i = t([].slice.call(document.querySelectorAll(n.join(","))));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(pt), i.addClass(pt)) : (i.addClass(pt), i.parents(gt).prev(mt + ", " + _t).addClass(pt), i.parents(gt).prev(".nav-item").children(mt).addClass(pt)), t(this._scrollElement).trigger(dt.ACTIVATE, {
                    relatedTarget: e
                })
            }, n._clear = function() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(pt)
                }).forEach(function(e) {
                    return e.classList.remove(pt)
                })
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this).data(lt);
                    if (i || (i = new e(this, "object" == typeof n && n), t(this).data(lt, i)), "string" == typeof n) {
                        if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return ft
                }
            }]), e
        }();
    t(window).on(dt.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), n = e.length; n--;) {
            var i = t(e[n]);
            bt._jQueryInterface.call(i, i.data())
        }
    }), t.fn[at] = bt._jQueryInterface, t.fn[at].Constructor = bt, t.fn[at].noConflict = function() {
        return t.fn[at] = ut, bt._jQueryInterface
    };
    var wt = "bs.tab",
        xt = "." + wt,
        Tt = t.fn.tab,
        Ct = {
            HIDE: "hide" + xt,
            HIDDEN: "hidden" + xt,
            SHOW: "show" + xt,
            SHOWN: "shown" + xt,
            CLICK_DATA_API: "click" + xt + ".data-api"
        },
        St = "active",
        Et = ".active",
        Pt = "> li > .active",
        At = function() {
            function e(e) {
                this._element = e
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(St) || t(this._element).hasClass("disabled"))) {
                    var n, i, r = t(this._element).closest(".nav, .list-group")[0],
                        o = l.getSelectorFromElement(this._element);
                    if (r) {
                        var s = "UL" === r.nodeName || "OL" === r.nodeName ? Pt : Et;
                        i = (i = t.makeArray(t(r).find(s)))[i.length - 1]
                    }
                    var a = t.Event(Ct.HIDE, {
                            relatedTarget: this._element
                        }),
                        c = t.Event(Ct.SHOW, {
                            relatedTarget: i
                        });
                    if (i && t(i).trigger(a), t(this._element).trigger(c), !c.isDefaultPrevented() && !a.isDefaultPrevented()) {
                        o && (n = document.querySelector(o)), this._activate(this._element, r);
                        var u = function() {
                            var n = t.Event(Ct.HIDDEN, {
                                    relatedTarget: e._element
                                }),
                                r = t.Event(Ct.SHOWN, {
                                    relatedTarget: i
                                });
                            t(i).trigger(n), t(e._element).trigger(r)
                        };
                        n ? this._activate(n, n.parentNode, u) : u()
                    }
                }
            }, n.dispose = function() {
                t.removeData(this._element, wt), this._element = null
            }, n._activate = function(e, n, i) {
                function r() {
                    return o._transitionComplete(e, s, i)
                }
                var o = this,
                    s = (!n || "UL" !== n.nodeName && "OL" !== n.nodeName ? t(n).children(Et) : t(n).find(Pt))[0],
                    a = i && s && t(s).hasClass("fade");
                if (s && a) {
                    var c = l.getTransitionDurationFromElement(s);
                    t(s).removeClass("show").one(l.TRANSITION_END, r).emulateTransitionEnd(c)
                } else r()
            }, n._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(St);
                    var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    r && t(r).removeClass(St), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(St), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), l.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var o = t(e).closest(".dropdown")[0];
                    if (o) {
                        var s = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                        t(s).addClass(St)
                    }
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(wt);
                    if (r || (r = new e(this), i.data(wt, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n]()
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }]), e
        }();
    t(document).on(Ct.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), At._jQueryInterface.call(t(this), "show")
    }), t.fn.tab = At._jQueryInterface, t.fn.tab.Constructor = At, t.fn.tab.noConflict = function() {
        return t.fn.tab = Tt, At._jQueryInterface
    };
    var Ot = "toast",
        kt = "bs.toast",
        Dt = "." + kt,
        It = t.fn[Ot],
        Nt = {
            CLICK_DISMISS: "click.dismiss" + Dt,
            HIDE: "hide" + Dt,
            HIDDEN: "hidden" + Dt,
            SHOW: "show" + Dt,
            SHOWN: "shown" + Dt
        },
        Rt = "hide",
        Lt = "show",
        Mt = "showing",
        Ft = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        jt = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        qt = function() {
            function e(e, t) {
                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
            }
            var n = e.prototype;
            return n.show = function() {
                var e = this,
                    n = t.Event(Nt.SHOW);
                if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
                    this._config.animation && this._element.classList.add("fade");
                    var i = function() {
                        e._element.classList.remove(Mt), e._element.classList.add(Lt), t(e._element).trigger(Nt.SHOWN), e._config.autohide && (e._timeout = setTimeout(function() {
                            e.hide()
                        }, e._config.delay))
                    };
                    if (this._element.classList.remove(Rt), l.reflow(this._element), this._element.classList.add(Mt), this._config.animation) {
                        var r = l.getTransitionDurationFromElement(this._element);
                        t(this._element).one(l.TRANSITION_END, i).emulateTransitionEnd(r)
                    } else i()
                }
            }, n.hide = function() {
                if (this._element.classList.contains(Lt)) {
                    var e = t.Event(Nt.HIDE);
                    t(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                }
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Lt) && this._element.classList.remove(Lt), t(this._element).off(Nt.CLICK_DISMISS), t.removeData(this._element, kt), this._element = null, this._config = null
            }, n._getConfig = function(e) {
                return e = s({}, jt, {}, t(this._element).data(), {}, "object" == typeof e && e ? e : {}), l.typeCheckConfig(Ot, e, this.constructor.DefaultType), e
            }, n._setListeners = function() {
                var e = this;
                t(this._element).on(Nt.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                    return e.hide()
                })
            }, n._close = function() {
                function e() {
                    n._element.classList.add(Rt), t(n._element).trigger(Nt.HIDDEN)
                }
                var n = this;
                if (this._element.classList.remove(Lt), this._config.animation) {
                    var i = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, e).emulateTransitionEnd(i)
                } else e()
            }, e._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data(kt);
                    if (r || (r = new e(this, "object" == typeof n && n), i.data(kt, r)), "string" == typeof n) {
                        if (void 0 === r[n]) throw new TypeError('No method named "' + n + '"');
                        r[n](this)
                    }
                })
            }, r(e, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Ft
                }
            }, {
                key: "Default",
                get: function() {
                    return jt
                }
            }]), e
        }();
    t.fn[Ot] = qt._jQueryInterface, t.fn[Ot].Constructor = qt, t.fn[Ot].noConflict = function() {
        return t.fn[Ot] = It, qt._jQueryInterface
    }, e.Alert = p, e.Button = S, e.Carousel = H, e.Collapse = J, e.Dropdown = pe, e.Modal = Oe, e.Popover = st, e.Scrollspy = bt, e.Tab = At, e.Toast = qt, e.Tooltip = $e, e.Util = l, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e) {
    "use strict";

    function t(e) {
        return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }

    function n(e, t) {
        (i(e, t) ? o : r)(e, t)
    }
    var i, r, o;
    "classList" in document.documentElement ? (i = function(e, t) {
        return e.classList.contains(t)
    }, r = function(e, t) {
        e.classList.add(t)
    }, o = function(e, t) {
        e.classList.remove(t)
    }) : (i = function(e, n) {
        return t(n).test(e.className)
    }, r = function(e, t) {
        i(e, t) || (e.className = e.className + " " + t)
    }, o = function(e, n) {
        e.className = e.className.replace(t(n), " ")
    });
    var s = {
        hasClass: i,
        addClass: r,
        removeClass: o,
        toggleClass: n,
        has: i,
        add: r,
        remove: o,
        toggle: n
    };
    "function" == typeof define && define.amd ? define(s) : e.classie = s
}(window);
var cbpAnimatedHeader = function() {
        function e() {
            (window.pageYOffset || t.scrollTop) >= r ? classie.add(n, "cbp-af-header-shrink") : classie.remove(n, "cbp-af-header-shrink"), i = !1
        }
        var t = document.documentElement,
            n = document.querySelector(".cbp-af-header"),
            i = !1,
            r = 100;
        window.addEventListener("scroll", function(t) {
            i || (i = !0, setTimeout(e, 250))
        }, !1)
    }(),
    _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        var e, t, n, i, r, o, s, a, l, c, u, f, h, d, p, g;
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
                var i = function(e) {
                        var t, n = [],
                            i = e.length;
                        for (t = 0; t !== i; n.push(e[t++]));
                        return n
                    },
                    r = function(e, t, n) {
                        var i, r, o = e.cycle;
                        for (i in o) r = o[i], e[i] = "function" == typeof r ? r(n, t[n], t) : r[n % r.length];
                        delete e.cycle
                    },
                    o = function(e) {
                        if ("function" == typeof e) return e;
                        var t = "object" == typeof e ? e : {
                                each: e
                            },
                            n = t.ease,
                            i = t.from || 0,
                            r = t.base || 0,
                            o = {},
                            s = isNaN(i),
                            a = t.axis,
                            l = {
                                center: .5,
                                end: 1
                            } [i] || 0;
                        return function(e, c, u) {
                            var f, h, d, p, g, m, _, v, y, b = (u || t).length,
                                w = o[b];
                            if (!w) {
                                if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                    for (_ = -1 / 0; _ < (_ = u[y++].getBoundingClientRect().left) && b > y;);
                                    y--
                                }
                                for (w = o[b] = [], f = s ? Math.min(y, b) * l - .5 : i % y, h = s ? b * l / y - .5 : i / y | 0, _ = 0, v = 1 / 0, m = 0; b > m; m++) d = m % y - f, p = h - (m / y | 0), w[m] = g = a ? Math.abs("y" === a ? p : d) : Math.sqrt(d * d + p * p), g > _ && (_ = g), v > g && (v = g);
                                w.max = _ - v, w.min = v, w.v = b = t.amount || t.each * (y > b ? b : a ? "y" === a ? b / y : y : Math.max(y, b / y)) || 0, w.b = 0 > b ? r - b : r
                            }
                            return b = (w[e] - w.min) / w.max, w.b + (n ? n.getRatio(b) : b) * w.v
                        }
                    },
                    s = function(e, t, i) {
                        n.call(this, e, t, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = s.prototype.render
                    },
                    a = 1e-8,
                    l = n._internals,
                    c = l.isSelector,
                    u = l.isArray,
                    f = s.prototype = n.to({}, .1, {}),
                    h = [];
                s.version = "2.1.2", f.constructor = s, f.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = n.killTweensOf, s.getTweensOf = n.getTweensOf, s.lagSmoothing = n.lagSmoothing, s.ticker = n.ticker, s.render = n.render, s.distribute = o, f.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), n.prototype.invalidate.call(this)
                }, f.updateTo = function(e, t) {
                    var i, r = this,
                        o = r.ratio,
                        s = r.vars.immediateRender || e.immediateRender;
                    for (i in t && r._startTime < r._timeline._time && (r._startTime = r._timeline._time, r._uncache(!1), r._gc ? r._enabled(!0, !1) : r._timeline.insert(r, r._startTime - r._delay)), e) r.vars[i] = e[i];
                    if (r._initted || s)
                        if (t) r._initted = !1, s && r.render(0, !0, !0);
                        else if (r._gc && r._enabled(!0, !1), r._notifyPluginsOfEnabled && r._firstPT && n._onPluginEvent("_onDisable", r), r._time / r._duration > .998) {
                        var a = r._totalTime;
                        r.render(0, !0, !1), r._initted = !1, r.render(a, !0, !1)
                    } else if (r._initted = !1, r._init(), r._time > 0 || s)
                        for (var l, c = 1 / (1 - o), u = r._firstPT; u;) l = u.s + u.c, u.c *= c, u.s = l - u.c, u = u._next;
                    return r
                }, f.render = function(e, t, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, o, s, c, u, f, h, d, p, g = this,
                        m = g._dirty ? g.totalDuration() : g._totalDuration,
                        _ = g._time,
                        v = g._totalTime,
                        y = g._cycle,
                        b = g._duration,
                        w = g._rawPrevTime;
                    if (e >= m - a && e >= 0 ? (g._totalTime = m, g._cycle = g._repeat, g._yoyo && 0 != (1 & g._cycle) ? (g._time = 0, g.ratio = g._ease._calcEnd ? g._ease.getRatio(0) : 0) : (g._time = b, g.ratio = g._ease._calcEnd ? g._ease.getRatio(1) : 1), g._reversed || (r = !0, o = "onComplete", i = i || g._timeline.autoRemoveChildren), 0 === b && (g._initted || !g.vars.lazy || i) && (g._startTime === g._timeline._duration && (e = 0), (0 > w || 0 >= e && e >= -a || w === a && "isPause" !== g.data) && w !== e && (i = !0, w > a && (o = "onReverseComplete")), g._rawPrevTime = d = !t || e || w === e ? e : a)) : a > e ? (g._totalTime = g._time = g._cycle = 0, g.ratio = g._ease._calcEnd ? g._ease.getRatio(0) : 0, (0 !== v || 0 === b && w > 0) && (o = "onReverseComplete", r = g._reversed), e > -a ? e = 0 : 0 > e && (g._active = !1, 0 === b && (g._initted || !g.vars.lazy || i) && (w >= 0 && (i = !0), g._rawPrevTime = d = !t || e || w === e ? e : a)), g._initted || (i = !0)) : (g._totalTime = g._time = e, 0 !== g._repeat && (c = b + g._repeatDelay, g._cycle = g._totalTime / c >> 0, 0 !== g._cycle && g._cycle === g._totalTime / c && e >= v && g._cycle--, g._time = g._totalTime - g._cycle * c, g._yoyo && 0 != (1 & g._cycle) && (g._time = b - g._time, (p = g._yoyoEase || g.vars.yoyoEase) && (g._yoyoEase || (!0 !== p || g._initted ? g._yoyoEase = p = !0 === p ? g._ease : p instanceof Ease ? p : Ease.map[p] : (p = g.vars.ease, g._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, g.vars.easeParams) : Ease.map[p] || n.defaultEase : n.defaultEase)), g.ratio = p ? 1 - p.getRatio((b - g._time) / b) : 0)), g._time > b ? g._time = b : g._time < 0 && (g._time = 0)), g._easeType && !p ? (u = g._time / b, (1 === (f = g._easeType) || 3 === f && u >= .5) && (u = 1 - u), 3 === f && (u *= 2), 1 === (h = g._easePower) ? u *= u : 2 === h ? u *= u * u : 3 === h ? u *= u * u * u : 4 === h && (u *= u * u * u * u), g.ratio = 1 === f ? 1 - u : 2 === f ? u : g._time / b < .5 ? u / 2 : 1 - u / 2) : p || (g.ratio = g._ease.getRatio(g._time / b))), _ !== g._time || i || y !== g._cycle) {
                        if (!g._initted) {
                            if (g._init(), !g._initted || g._gc) return;
                            if (!i && g._firstPT && (!1 !== g.vars.lazy && g._duration || g.vars.lazy && !g._duration)) return g._time = _, g._totalTime = v, g._rawPrevTime = w, g._cycle = y, l.lazyTweens.push(g), void(g._lazy = [e, t]);
                            !g._time || r || p ? r && this._ease._calcEnd && !p && (g.ratio = g._ease.getRatio(0 === g._time ? 0 : 1)) : g.ratio = g._ease.getRatio(g._time / b)
                        }
                        for (!1 !== g._lazy && (g._lazy = !1), g._active || !g._paused && g._time !== _ && e >= 0 && (g._active = !0), 0 === v && (2 === g._initted && e > 0 && g._init(), g._startAt && (e >= 0 ? g._startAt.render(e, !0, i) : o || (o = "_dummyGS")), g.vars.onStart && (0 !== g._totalTime || 0 === b) && (t || g._callback("onStart"))), s = g._firstPT; s;) s.f ? s.t[s.p](s.c * g.ratio + s.s) : s.t[s.p] = s.c * g.ratio + s.s, s = s._next;
                        g._onUpdate && (0 > e && g._startAt && g._startTime && g._startAt.render(e, !0, i), t || (g._totalTime !== v || o) && g._callback("onUpdate")), g._cycle !== y && (t || g._gc || g.vars.onRepeat && g._callback("onRepeat")), o && (!g._gc || i) && (0 > e && g._startAt && !g._onUpdate && g._startTime && g._startAt.render(e, !0, i), r && (g._timeline.autoRemoveChildren && g._enabled(!1, !1), g._active = !1), !t && g.vars[o] && g._callback(o), 0 === b && g._rawPrevTime === a && d !== a && (g._rawPrevTime = 0))
                    } else v !== g._totalTime && g._onUpdate && (t || g._callback("onUpdate"))
                }, s.to = function(e, t, n) {
                    return new s(e, t, n)
                }, s.from = function(e, t, n) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new s(e, t, n)
                }, s.fromTo = function(e, t, n, i) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new s(e, t, i)
                }, s.staggerTo = s.allTo = function(e, t, a, l, f, d, p) {
                    var g, m, _, v, y = [],
                        b = o(a.stagger || l),
                        w = a.cycle,
                        x = (a.startAt || h).cycle;
                    for (u(e) || ("string" == typeof e && (e = n.selector(e) || e), c(e) && (e = i(e))), g = (e = e || []).length - 1, _ = 0; g >= _; _++) {
                        for (v in m = {}, a) m[v] = a[v];
                        if (w && (r(m, e, _), null != m.duration && (t = m.duration, delete m.duration)), x) {
                            for (v in x = m.startAt = {}, a.startAt) x[v] = a.startAt[v];
                            r(m.startAt, e, _)
                        }
                        m.delay = b(_, e[_], e) + (m.delay || 0), _ === g && f && (m.onComplete = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), f.apply(p || a.callbackScope || this, d || h)
                        }), y[_] = new s(e[_], t, m)
                    }
                    return y
                }, s.staggerFrom = s.allFrom = function(e, t, n, i, r, o, a) {
                    return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, s.staggerTo(e, t, n, i, r, o, a)
                }, s.staggerFromTo = s.allFromTo = function(e, t, n, i, r, o, a, l) {
                    return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, s.staggerTo(e, t, i, r, o, a, l)
                }, s.delayedCall = function(e, t, n, i, r) {
                    return new s(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: n,
                        callbackScope: i,
                        onReverseComplete: t,
                        onReverseCompleteParams: n,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(e, t) {
                    return new s(e, 0, t)
                }, s.isTweening = function(e) {
                    return n.getTweensOf(e, !0).length > 0
                };
                var d = function(e, t) {
                        for (var i = [], r = 0, o = e._first; o;) o instanceof n ? i[r++] = o : (t && (i[r++] = o), r = (i = i.concat(d(o, t))).length), o = o._next;
                        return i
                    },
                    p = s.getAllTweens = function(t) {
                        return d(e._rootTimeline, t).concat(d(e._rootFramesTimeline, t))
                    };
                s.killAll = function(e, n, i, r) {
                    null == n && (n = !0), null == i && (i = !0);
                    var o, s, a, l = p(0 != r),
                        c = l.length,
                        u = n && i && r;
                    for (a = 0; c > a; a++) s = l[a], (u || s instanceof t || (o = s.target === s.vars.onComplete) && i || n && !o) && (e ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                }, s.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var r, o, a, f, h, d = l.tweenLookup;
                        if ("string" == typeof e && (e = n.selector(e) || e), c(e) && (e = i(e)), u(e))
                            for (f = e.length; --f > -1;) s.killChildTweensOf(e[f], t);
                        else {
                            for (a in r = [], d)
                                for (o = d[a].target.parentNode; o;) o === e && (r = r.concat(d[a].tweens)), o = o.parentNode;
                            for (h = r.length, f = 0; h > f; f++) t && r[f].totalTime(r[f].totalDuration()), r[f]._enabled(!1, !1)
                        }
                    }
                };
                var g = function(e, n, i, r) {
                    n = !1 !== n, i = !1 !== i;
                    for (var o, s, a = p(r = !1 !== r), l = n && i && r, c = a.length; --c > -1;) s = a[c], (l || s instanceof t || (o = s.target === s.vars.onComplete) && i || n && !o) && s.paused(e)
                };
                return s.pauseAll = function(e, t, n) {
                    g(!0, e, t, n)
                }, s.resumeAll = function(e, t, n) {
                    g(!1, e, t, n)
                }, s.globalTimeScale = function(t) {
                    var i = e._rootTimeline,
                        r = n.ticker.time;
                    return arguments.length ? (t = t || a, i._startTime = r - (r - i._startTime) * i._timeScale / t, i = e._rootFramesTimeline, r = n.ticker.frame, i._startTime = r - (r - i._startTime) * i._timeScale / t, i._timeScale = e._rootTimeline._timeScale = t, t) : i._timeScale
                }, f.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
                }, f.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
                }, f.time = function(e, t) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var n = this._duration,
                        i = this._cycle,
                        r = i * (n + this._repeatDelay);
                    return e > n && (e = n), this.totalTime(this._yoyo && 1 & i ? n - e + r : this._repeat ? e + r : e, t)
                }, f.duration = function(t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, f.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, f.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, f.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, f.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, n) {
                var i = function(e) {
                        t.call(this, e);
                        var n, i, r = this,
                            o = r.vars;
                        for (i in r._labels = {}, r.autoRemoveChildren = !!o.autoRemoveChildren, r.smoothChildTiming = !!o.smoothChildTiming, r._sortChildren = !0, r._onUpdate = o.onUpdate, o) n = o[i], l(n) && -1 !== n.join("").indexOf("{self}") && (o[i] = r._swapSelfInParams(n));
                        l(o.tweens) && r.add(o.tweens, 0, o.align, o.stagger)
                    },
                    r = 1e-8,
                    o = n._internals,
                    s = i._internals = {},
                    a = o.isSelector,
                    l = o.isArray,
                    c = o.lazyTweens,
                    u = o.lazyRender,
                    f = _gsScope._gsDefine.globals,
                    h = function(e) {
                        var t, n = {};
                        for (t in e) n[t] = e[t];
                        return n
                    },
                    d = function(e, t, n) {
                        var i, r, o = e.cycle;
                        for (i in o) r = o[i], e[i] = "function" == typeof r ? r(n, t[n], t) : r[n % r.length];
                        delete e.cycle
                    },
                    p = s.pauseCallback = function() {},
                    g = function(e, t, n, i) {
                        var r = "immediateRender";
                        return r in t || (t[r] = !(n && !1 === n[r] || i)), t
                    },
                    m = function(e) {
                        if ("function" == typeof e) return e;
                        var t = "object" == typeof e ? e : {
                                each: e
                            },
                            n = t.ease,
                            i = t.from || 0,
                            r = t.base || 0,
                            o = {},
                            s = isNaN(i),
                            a = t.axis,
                            l = {
                                center: .5,
                                end: 1
                            } [i] || 0;
                        return function(e, c, u) {
                            var f, h, d, p, g, m, _, v, y, b = (u || t).length,
                                w = o[b];
                            if (!w) {
                                if (!(y = "auto" === t.grid ? 0 : (t.grid || [1 / 0])[0])) {
                                    for (_ = -1 / 0; _ < (_ = u[y++].getBoundingClientRect().left) && b > y;);
                                    y--
                                }
                                for (w = o[b] = [], f = s ? Math.min(y, b) * l - .5 : i % y, h = s ? b * l / y - .5 : i / y | 0, _ = 0, v = 1 / 0, m = 0; b > m; m++) d = m % y - f, p = h - (m / y | 0), w[m] = g = a ? Math.abs("y" === a ? p : d) : Math.sqrt(d * d + p * p), g > _ && (_ = g), v > g && (v = g);
                                w.max = _ - v, w.min = v, w.v = b = t.amount || t.each * (y > b ? b : a ? "y" === a ? b / y : y : Math.max(y, b / y)) || 0, w.b = 0 > b ? r - b : r
                            }
                            return b = (w[e] - w.min) / w.max, w.b + (n ? n.getRatio(b) : b) * w.v
                        }
                    },
                    _ = i.prototype = new t;
                return i.version = "2.1.2", i.distribute = m, _.constructor = i, _.kill()._gc = _._forcingPlayhead = _._hasPause = !1, _.to = function(e, t, i, r) {
                    var o = i.repeat && f.TweenMax || n;
                    return t ? this.add(new o(e, t, i), r) : this.set(e, i, r)
                }, _.from = function(e, t, i, r) {
                    return this.add((i.repeat && f.TweenMax || n).from(e, t, g(0, i)), r)
                }, _.fromTo = function(e, t, i, r, o) {
                    var s = r.repeat && f.TweenMax || n;
                    return r = g(0, r, i), t ? this.add(s.fromTo(e, t, i, r), o) : this.set(e, r, o)
                }, _.staggerTo = function(e, t, r, o, s, l, c, u) {
                    var f, p, g = new i({
                            onComplete: l,
                            onCompleteParams: c,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        _ = m(r.stagger || o),
                        v = r.startAt,
                        y = r.cycle;
                    for ("string" == typeof e && (e = n.selector(e) || e), a(e = e || []) && (e = function(e) {
                            var t, n = [],
                                i = e.length;
                            for (t = 0; t !== i; n.push(e[t++]));
                            return n
                        }(e)), p = 0; p < e.length; p++) f = h(r), v && (f.startAt = h(v), v.cycle && d(f.startAt, e, p)), y && (d(f, e, p), null != f.duration && (t = f.duration, delete f.duration)), g.to(e[p], t, f, _(p, e[p], e));
                    return this.add(g, s)
                }, _.staggerFrom = function(e, t, n, i, r, o, s, a) {
                    return n.runBackwards = !0, this.staggerTo(e, t, g(0, n), i, r, o, s, a)
                }, _.staggerFromTo = function(e, t, n, i, r, o, s, a, l) {
                    return i.startAt = n, this.staggerTo(e, t, g(0, i, n), r, o, s, a, l)
                }, _.call = function(e, t, i, r) {
                    return this.add(n.delayedCall(0, e, t, i), r)
                }, _.set = function(e, t, i) {
                    return this.add(new n(e, 0, g(0, t, null, !0)), i)
                }, i.exportRoot = function(e, t) {
                    null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
                    var r, o, s, a, l = new i(e),
                        c = l._timeline;
                    for (null == t && (t = !0), c._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = c._time, s = c._first; s;) a = s._next, t && s instanceof n && s.target === s.vars.onComplete || (0 > (o = s._startTime - s._delay) && (r = 1), l.add(s, o)), s = a;
                    return c.add(l, 0), r && l.totalDuration(), l
                }, _.add = function(r, o, s, a) {
                    var c, u, f, h, d, p, g = this;
                    if ("number" != typeof o && (o = g._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof e)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (s = s || "normal", a = a || 0, c = o, u = r.length, f = 0; u > f; f++) l(h = r[f]) && (h = new i({
                                tweens: h
                            })), g.add(h, c), "string" != typeof h && "function" != typeof h && ("sequence" === s ? c = h._startTime + h.totalDuration() / h._timeScale : "start" === s && (h._startTime -= h.delay())), c += a;
                            return g._uncache(!0)
                        }
                        if ("string" == typeof r) return g.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = n.delayedCall(0, r)
                    }
                    if (t.prototype.add.call(g, r, o), (r._time || !r._duration && r._initted) && (c = (g.rawTime() - r._startTime) * r._timeScale, (!r._duration || Math.abs(Math.max(0, Math.min(r.totalDuration(), c))) - r._totalTime > 1e-5) && r.render(c, !1, !1)), (g._gc || g._time === g._duration) && !g._paused && g._duration < g.duration())
                        for (p = (d = g).rawTime() > r._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                    return g
                }, _.remove = function(t) {
                    if (t instanceof e) {
                        this._remove(t, !1);
                        var n = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
                        return t._startTime = (t._paused ? t._pauseTime : n._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
                    }
                    if (t instanceof Array || t && t.push && l(t)) {
                        for (var i = t.length; --i > -1;) this.remove(t[i]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, _._remove = function(e, n) {
                    return t.prototype._remove.call(this, e, n), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, _.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, _.insert = _.insertMultiple = function(e, t, n, i) {
                    return this.add(e, t || 0, n, i)
                }, _.appendMultiple = function(e, t, n, i) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), n, i)
                }, _.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, _.addPause = function(e, t, i, r) {
                    var o = n.delayedCall(0, p, i, r || this);
                    return o.vars.onComplete = o.vars.onReverseComplete = t, o.data = "isPause", this._hasPause = !0, this.add(o, e)
                }, _.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, _.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, _._parseTimeOrLabel = function(t, n, i, r) {
                    var o, s;
                    if (r instanceof e && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof e && r[s].timeline === this && this.remove(r[s]);
                    if (o = "number" != typeof t || n ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof n) return this._parseTimeOrLabel(n, i && "number" == typeof t && null == this._labels[n] ? t - o : 0, i);
                    if (n = n || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = o);
                    else {
                        if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = o + n : n : this._labels[t] + n;
                        n = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : o
                    }
                    return Number(t) + n
                }, _.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
                }, _.stop = function() {
                    return this.paused(!0)
                }, _.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, _.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, _.render = function(e, t, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, o, s, a, l, f, h, d, p = this,
                        g = p._time,
                        m = p._dirty ? p.totalDuration() : p._totalDuration,
                        _ = p._startTime,
                        v = p._timeScale,
                        y = p._paused;
                    if (g !== p._time && (e += p._time - g), e >= m - r && e >= 0) p._totalTime = p._time = m, p._reversed || p._hasPausedChild() || (o = !0, a = "onComplete", l = !!p._timeline.autoRemoveChildren, 0 === p._duration && (0 >= e && e >= -r || p._rawPrevTime < 0 || p._rawPrevTime === r) && p._rawPrevTime !== e && p._first && (l = !0, p._rawPrevTime > r && (a = "onReverseComplete"))), p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : r, e = m + 1e-4;
                    else if (r > e)
                        if (p._totalTime = p._time = 0, e > -r && (e = 0), (0 !== g || 0 === p._duration && p._rawPrevTime !== r && (p._rawPrevTime > 0 || 0 > e && p._rawPrevTime >= 0)) && (a = "onReverseComplete", o = p._reversed), 0 > e) p._active = !1, p._timeline.autoRemoveChildren && p._reversed ? (l = o = !0, a = "onReverseComplete") : p._rawPrevTime >= 0 && p._first && (l = !0), p._rawPrevTime = e;
                        else {
                            if (p._rawPrevTime = p._duration || !t || e || p._rawPrevTime === e ? e : r, 0 === e && o)
                                for (i = p._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
                            e = 0, p._initted || (l = !0)
                        }
                    else {
                        if (p._hasPause && !p._forcingPlayhead && !t) {
                            if (e >= g)
                                for (i = p._first; i && i._startTime <= e && !f;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === p._rawPrevTime || (f = i), i = i._next;
                            else
                                for (i = p._last; i && i._startTime >= e && !f;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (f = i), i = i._prev;
                            f && (p._time = p._totalTime = e = f._startTime, d = p._startTime + e / p._timeScale)
                        }
                        p._totalTime = p._time = p._rawPrevTime = e
                    }
                    if (p._time !== g && p._first || n || l || f) {
                        if (p._initted || (p._initted = !0), p._active || !p._paused && p._time !== g && e > 0 && (p._active = !0), 0 === g && p.vars.onStart && (0 === p._time && p._duration || t || p._callback("onStart")), (h = p._time) >= g)
                            for (i = p._first; i && (s = i._next, h === p._time && (!p._paused || y));)(i._active || i._startTime <= h && !i._paused && !i._gc) && (f === i && (p.pause(), p._pauseTime = d), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = s;
                        else
                            for (i = p._last; i && (s = i._prev, h === p._time && (!p._paused || y));) {
                                if (i._active || i._startTime <= g && !i._paused && !i._gc) {
                                    if (f === i) {
                                        for (f = i._prev; f && f.endTime() > p._time;) f.render(f._reversed ? f.totalDuration() - (e - f._startTime) * f._timeScale : (e - f._startTime) * f._timeScale, t, n), f = f._prev;
                                        f = null, p.pause(), p._pauseTime = d
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                                }
                                i = s
                            }
                        p._onUpdate && (t || (c.length && u(), p._callback("onUpdate"))), a && (p._gc || (_ === p._startTime || v !== p._timeScale) && (0 === p._time || m >= p.totalDuration()) && (o && (c.length && u(), p._timeline.autoRemoveChildren && p._enabled(!1, !1), p._active = !1), !t && p.vars[a] && p._callback(a)))
                    }
                }, _._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof i && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, _.getChildren = function(e, t, i, r) {
                    r = r || -9999999999;
                    for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof n ? !1 !== t && (o[a++] = s) : (!1 !== i && (o[a++] = s), !1 !== e && (a = (o = o.concat(s.getChildren(!0, t, i))).length))), s = s._next;
                    return o
                }, _.getTweensOf = function(e, t) {
                    var i, r, o = this._gc,
                        s = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), r = (i = n.getTweensOf(e)).length; --r > -1;)(i[r].timeline === this || t && this._contains(i[r])) && (s[a++] = i[r]);
                    return o && this._enabled(!1, !0), s
                }, _.recent = function() {
                    return this._recent
                }, _._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, _.shiftChildren = function(e, t, n) {
                    n = n || 0;
                    for (var i, r = this._first, o = this._labels; r;) r._startTime >= n && (r._startTime += e), r = r._next;
                    if (t)
                        for (i in o) o[i] >= n && (o[i] += e);
                    return this._uncache(!0)
                }, _._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var n = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), i = n.length, r = !1; --i > -1;) n[i]._kill(e, t) && (r = !0);
                    return r
                }, _.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        n = t.length;
                    for (this._time = this._totalTime = 0; --n > -1;) t[n]._enabled(!1, !1);
                    return !1 !== e && (this._labels = {}), this._uncache(!0)
                }, _.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return e.prototype.invalidate.call(this)
                }, _._enabled = function(e, n) {
                    if (e === this._gc)
                        for (var i = this._first; i;) i._enabled(e, !0), i = i._next;
                    return t.prototype._enabled.call(this, e, n)
                }, _.totalTime = function(t, n, i) {
                    this._forcingPlayhead = !0;
                    var r = e.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, _.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, _.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, n, i = 0, r = this, o = r._last, s = 999999999999; o;) t = o._prev, o._dirty && o.totalDuration(), o._startTime > s && r._sortChildren && !o._paused && !r._calculatingDuration ? (r._calculatingDuration = 1, r.add(o, o._startTime - o._delay), r._calculatingDuration = 0) : s = o._startTime, o._startTime < 0 && !o._paused && (i -= o._startTime, r._timeline.smoothChildTiming && (r._startTime += o._startTime / r._timeScale, r._time -= o._startTime, r._totalTime -= o._startTime, r._rawPrevTime -= o._startTime), r.shiftChildren(-o._startTime, !1, -9999999999), s = 0), (n = o._startTime + o._totalDuration / o._timeScale) > i && (i = n), o = t;
                            r._duration = r._totalDuration = i, r._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
                }, _.paused = function(t) {
                    if (!1 === t && this._paused)
                        for (var n = this._first; n;) n._startTime === this._time && "isPause" === n.data && (n._rawPrevTime = 0), n = n._next;
                    return e.prototype.paused.apply(this, arguments)
                }, _.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, _.rawTime = function(e) {
                    return e && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(e) - this._startTime) * this._timeScale
                }, i
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, n) {
                var i = function(t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !!this.vars.yoyo, this._dirty = !0
                    },
                    r = 1e-8,
                    o = t._internals,
                    s = o.lazyTweens,
                    a = o.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    c = new n(null, null, 1, 0),
                    u = i.prototype = new e;
                return u.constructor = i, u.kill()._gc = !1, i.version = "2.1.2", u.invalidate = function() {
                    return this._yoyo = !!this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, u.addCallback = function(e, n, i, r) {
                    return this.add(t.delayedCall(0, e, i, r), n)
                }, u.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var n = this.getTweensOf(e, !1), i = n.length, r = this._parseTimeOrLabel(t); --i > -1;) n[i]._startTime === r && n[i]._enabled(!1, !1);
                    return this
                }, u.removePause = function(t) {
                    return this.removeCallback(e._internals.pauseCallback, t)
                }, u.tweenTo = function(e, n) {
                    n = n || {};
                    var i, r, o, s = {
                            ease: c,
                            useFrames: this.usesFrames(),
                            immediateRender: !1,
                            lazy: !1
                        },
                        a = n.repeat && l.TweenMax || t;
                    for (r in n) s[r] = n[r];
                    return s.time = this._parseTimeOrLabel(e), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, i, s), s.onStart = function() {
                        o.target.paused(!0), o.vars.time === o.target.time() || i !== o.duration() || o.isFromTo || o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale).render(o.time(), !0, !0), n.onStart && n.onStart.apply(n.onStartScope || n.callbackScope || o, n.onStartParams || [])
                    }, o
                }, u.tweenFromTo = function(e, t, n) {
                    n = n || {}, e = this._parseTimeOrLabel(e), n.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        callbackScope: this
                    }, n.immediateRender = !1 !== n.immediateRender;
                    var i = this.tweenTo(t, n);
                    return i.isFromTo = 1, i.duration(Math.abs(i.vars.time - e) / this._timeScale || .001)
                }, u.render = function(e, t, n) {
                    this._gc && this._enabled(!0, !1);
                    var i, o, l, c, u, f, h, d, p, g = this,
                        m = g._time,
                        _ = g._dirty ? g.totalDuration() : g._totalDuration,
                        v = g._duration,
                        y = g._totalTime,
                        b = g._startTime,
                        w = g._timeScale,
                        x = g._rawPrevTime,
                        T = g._paused,
                        C = g._cycle;
                    if (m !== g._time && (e += g._time - m), e >= _ - r && e >= 0) g._locked || (g._totalTime = _, g._cycle = g._repeat), g._reversed || g._hasPausedChild() || (o = !0, c = "onComplete", u = !!g._timeline.autoRemoveChildren, 0 === g._duration && (0 >= e && e >= -r || 0 > x || x === r) && x !== e && g._first && (u = !0, x > r && (c = "onReverseComplete"))), g._rawPrevTime = g._duration || !t || e || g._rawPrevTime === e ? e : r, g._yoyo && 1 & g._cycle ? g._time = e = 0 : (g._time = v, e = v + 1e-4);
                    else if (r > e)
                        if (g._locked || (g._totalTime = g._cycle = 0), g._time = 0, e > -r && (e = 0), (0 !== m || 0 === v && x !== r && (x > 0 || 0 > e && x >= 0) && !g._locked) && (c = "onReverseComplete", o = g._reversed), 0 > e) g._active = !1, g._timeline.autoRemoveChildren && g._reversed ? (u = o = !0, c = "onReverseComplete") : x >= 0 && g._first && (u = !0), g._rawPrevTime = e;
                        else {
                            if (g._rawPrevTime = v || !t || e || g._rawPrevTime === e ? e : r, 0 === e && o)
                                for (i = g._first; i && 0 === i._startTime;) i._duration || (o = !1), i = i._next;
                            e = 0, g._initted || (u = !0)
                        }
                    else if (0 === v && 0 > x && (u = !0), g._time = g._rawPrevTime = e, g._locked || (g._totalTime = e, 0 !== g._repeat && (f = v + g._repeatDelay, g._cycle = g._totalTime / f >> 0, g._cycle && g._cycle === g._totalTime / f && e >= y && g._cycle--, g._time = g._totalTime - g._cycle * f, g._yoyo && 1 & g._cycle && (g._time = v - g._time), g._time > v ? (g._time = v, e = v + 1e-4) : g._time < 0 ? g._time = e = 0 : e = g._time)), g._hasPause && !g._forcingPlayhead && !t) {
                        if ((e = g._time) >= m || g._repeat && C !== g._cycle)
                            for (i = g._first; i && i._startTime <= e && !h;) i._duration || "isPause" !== i.data || i.ratio || 0 === i._startTime && 0 === g._rawPrevTime || (h = i), i = i._next;
                        else
                            for (i = g._last; i && i._startTime >= e && !h;) i._duration || "isPause" === i.data && i._rawPrevTime > 0 && (h = i), i = i._prev;
                        h && (p = g._startTime + h._startTime / g._timeScale, h._startTime < v && (g._time = g._rawPrevTime = e = h._startTime, g._totalTime = e + g._cycle * (g._totalDuration + g._repeatDelay)))
                    }
                    if (g._cycle !== C && !g._locked) {
                        var S = g._yoyo && 0 != (1 & C),
                            E = S === (g._yoyo && 0 != (1 & g._cycle)),
                            P = g._totalTime,
                            A = g._cycle,
                            O = g._rawPrevTime,
                            k = g._time;
                        if (g._totalTime = C * v, g._cycle < C ? S = !S : g._totalTime += v, g._time = m, g._rawPrevTime = 0 === v ? x - 1e-4 : x, g._cycle = C, g._locked = !0, m = S ? 0 : v, g.render(m, t, 0 === v), t || g._gc || g.vars.onRepeat && (g._cycle = A, g._locked = !1, g._callback("onRepeat")), m !== g._time) return;
                        if (E && (g._cycle = C, g._locked = !0, m = S ? v + 1e-4 : -1e-4, g.render(m, !0, !1)), g._locked = !1, g._paused && !T) return;
                        g._time = k, g._totalTime = P, g._cycle = A, g._rawPrevTime = O
                    }
                    if (g._time !== m && g._first || n || u || h) {
                        if (g._initted || (g._initted = !0), g._active || !g._paused && g._totalTime !== y && e > 0 && (g._active = !0), 0 === y && g.vars.onStart && (0 === g._totalTime && g._totalDuration || t || g._callback("onStart")), (d = g._time) >= m)
                            for (i = g._first; i && (l = i._next, d === g._time && (!g._paused || T));)(i._active || i._startTime <= g._time && !i._paused && !i._gc) && (h === i && (g.pause(), g._pauseTime = p), i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)), i = l;
                        else
                            for (i = g._last; i && (l = i._prev, d === g._time && (!g._paused || T));) {
                                if (i._active || i._startTime <= m && !i._paused && !i._gc) {
                                    if (h === i) {
                                        for (h = i._prev; h && h.endTime() > g._time;) h.render(h._reversed ? h.totalDuration() - (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, n), h = h._prev;
                                        h = null, g.pause(), g._pauseTime = p
                                    }
                                    i._reversed ? i.render((i._dirty ? i.totalDuration() : i._totalDuration) - (e - i._startTime) * i._timeScale, t, n) : i.render((e - i._startTime) * i._timeScale, t, n)
                                }
                                i = l
                            }
                        g._onUpdate && (t || (s.length && a(), g._callback("onUpdate"))), c && (g._locked || g._gc || (b === g._startTime || w !== g._timeScale) && (0 === g._time || _ >= g.totalDuration()) && (o && (s.length && a(), g._timeline.autoRemoveChildren && g._enabled(!1, !1), g._active = !1), !t && g.vars[c] && g._callback(c)))
                    } else y !== g._totalTime && g._onUpdate && (t || g._callback("onUpdate"))
                }, u.getActive = function(e, t, n) {
                    var i, r, o = [],
                        s = this.getChildren(e || null == e, t || null == e, !!n),
                        a = 0,
                        l = s.length;
                    for (i = 0; l > i; i++)(r = s[i]).isActive() && (o[a++] = r);
                    return o
                }, u.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, n = this.getLabelsArray(),
                        i = n.length;
                    for (t = 0; i > t; t++)
                        if (n[t].time > e) return n[t].name;
                    return null
                }, u.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), n = t.length; --n > -1;)
                        if (t[n].time < e) return t[n].name;
                    return null
                }, u.getLabelsArray = function() {
                    var e, t = [],
                        n = 0;
                    for (e in this._labels) t[n++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, u.invalidate = function() {
                    return this._locked = !1, e.prototype.invalidate.call(this)
                }, u.progress = function(e, t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration() || 0
                }, u.totalProgress = function(e, t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration() || 0
                }, u.totalDuration = function(t) {
                    return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(e, t) {
                    if (!arguments.length) return this._time;
                    this._dirty && this.totalDuration();
                    var n = this._duration,
                        i = this._cycle,
                        r = i * (n + this._repeatDelay);
                    return e > n && (e = n), this.totalTime(this._yoyo && 1 & i ? n - e + r : this._repeat ? e + r : e, t)
                }, u.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, u.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + r)
                }, i
            }, !0), e = 180 / Math.PI, t = [], n = [], i = [], r = {}, o = _gsScope._gsDefine.globals, s = function(e, t, n, i) {
                n === i && (n = i - (i - t) / 1e6), e === t && (t = e + (n - e) / 1e6), this.a = e, this.b = t, this.c = n, this.d = i, this.da = i - e, this.ca = n - e, this.ba = t - e
            }, a = function(e, t, n, i) {
                var r = {
                        a: e
                    },
                    o = {},
                    s = {},
                    a = {
                        c: i
                    },
                    l = (e + t) / 2,
                    c = (t + n) / 2,
                    u = (n + i) / 2,
                    f = (l + c) / 2,
                    h = (c + u) / 2,
                    d = (h - f) / 8;
                return r.b = l + (e - l) / 4, o.b = f + d, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (f + h) / 2, s.b = h - d, a.b = u + (i - u) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
            }, l = function(e, r, o, s, l) {
                var c, u, f, h, d, p, g, m, _, v, y, b, w, x = e.length - 1,
                    T = 0,
                    C = e[0].a;
                for (c = 0; x > c; c++) u = (d = e[T]).a, f = d.d, h = e[T + 1].d, l ? (y = t[c], w = ((b = n[c]) + y) * r * .25 / (s ? .5 : i[c] || .5), m = f - ((p = f - (f - u) * (s ? .5 * r : 0 !== y ? w / y : 0)) + (((g = f + (h - f) * (s ? .5 * r : 0 !== b ? w / b : 0)) - p) * (3 * y / (y + b) + .5) / 4 || 0))) : m = f - ((p = f - (f - u) * r * .5) + (g = f + (h - f) * r * .5)) / 2, p += m, g += m, d.c = _ = p, d.b = 0 !== c ? C : C = d.a + .6 * (d.c - d.a), d.da = f - u, d.ca = _ - u, d.ba = C - u, o ? (v = a(u, C, _, f), e.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, C = g;
                (d = e[T]).b = C, d.c = C + .4 * (d.d - C), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = C - d.a, o && (v = a(d.a, C, d.c, d.d), e.splice(T, 1, v[0], v[1], v[2], v[3]))
            }, c = function(e, i, r, o) {
                var a, l, c, u, f, h, d = [];
                if (o)
                    for (l = (e = [o].concat(e)).length; --l > -1;) "string" == typeof(h = e[l][i]) && "=" === h.charAt(1) && (e[l][i] = o[i] + Number(h.charAt(0) + h.substr(2)));
                if (0 > (a = e.length - 2)) return d[0] = new s(e[0][i], 0, 0, e[0][i]), d;
                for (l = 0; a > l; l++) c = e[l][i], u = e[l + 1][i], d[l] = new s(c, 0, 0, u), r && (f = e[l + 2][i], t[l] = (t[l] || 0) + (u - c) * (u - c), n[l] = (n[l] || 0) + (f - u) * (f - u));
                return d[l] = new s(e[l][i], 0, 0, e[l + 1][i]), d
            }, u = function(e, o, s, a, u, f) {
                var h, d, p, g, m, _, v, y, b = {},
                    w = [],
                    x = f || e[0];
                for (d in u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == o && (o = 1), e[0]) w.push(d);
                if (e.length > 1) {
                    for (y = e[e.length - 1], v = !0, h = w.length; --h > -1;)
                        if (d = w[h], Math.abs(x[d] - y[d]) > .05) {
                            v = !1;
                            break
                        } v && (e = e.concat(), f && e.unshift(f), e.push(e[1]), f = e[e.length - 3])
                }
                for (t.length = n.length = i.length = 0, h = w.length; --h > -1;) d = w[h], r[d] = -1 !== u.indexOf("," + d + ","), b[d] = c(e, d, r[d], f);
                for (h = t.length; --h > -1;) t[h] = Math.sqrt(t[h]), n[h] = Math.sqrt(n[h]);
                if (!a) {
                    for (h = w.length; --h > -1;)
                        if (r[d])
                            for (_ = (p = b[w[h]]).length - 1, g = 0; _ > g; g++) m = p[g + 1].da / n[g] + p[g].da / t[g] || 0, i[g] = (i[g] || 0) + m * m;
                    for (h = i.length; --h > -1;) i[h] = Math.sqrt(i[h])
                }
                for (h = w.length, g = s ? 4 : 1; --h > -1;) p = b[d = w[h]], l(p, o, s, a, r[d]), v && (p.splice(0, g), p.splice(p.length - g, g));
                return b
            }, f = function(e, t, n) {
                var i, r, o, a, l, c, u, f, h, d, p, g = {},
                    m = "cubic" === (t = t || "soft") ? 3 : 2,
                    _ = "soft" === t,
                    v = [];
                if (_ && n && (e = [n].concat(e)), null == e || e.length < m + 1) throw "invalid Bezier data";
                for (h in e[0]) v.push(h);
                for (c = v.length; --c > -1;) {
                    for (g[h = v[c]] = l = [], d = 0, f = e.length, u = 0; f > u; u++) i = null == n ? e[u][h] : "string" == typeof(p = e[u][h]) && "=" === p.charAt(1) ? n[h] + Number(p.charAt(0) + p.substr(2)) : Number(p), _ && u > 1 && f - 1 > u && (l[d++] = (i + l[d - 2]) / 2), l[d++] = i;
                    for (f = d - m + 1, d = 0, u = 0; f > u; u += m) i = l[u], r = l[u + 1], o = l[u + 2], a = 2 === m ? 0 : l[u + 3], l[d++] = p = 3 === m ? new s(i, r, o, a) : new s(i, (2 * r + i) / 3, (2 * r + o) / 3, o);
                    l.length = d
                }
                return g
            }, h = function(e, t, n) {
                for (var i, r, o, s, a, l, c, u, f, h, d, p = 1 / n, g = e.length; --g > -1;)
                    for (o = (h = e[g]).a, s = h.d - o, a = h.c - o, l = h.b - o, i = r = 0, u = 1; n >= u; u++) i = r - (r = ((c = p * u) * c * s + 3 * (f = 1 - c) * (c * a + f * l)) * c), t[d = g * n + u - 1] = (t[d] || 0) + i * i
            }, d = function(e, t) {
                var n, i, r, o, s = [],
                    a = [],
                    l = 0,
                    c = 0,
                    u = (t = t >> 0 || 6) - 1,
                    f = [],
                    d = [];
                for (n in e) h(e[n], s, t);
                for (r = s.length, i = 0; r > i; i++) l += Math.sqrt(s[i]), d[o = i % t] = l, o === u && (c += l, f[o = i / t >> 0] = d, a[o] = c, l = 0, d = []);
                return {
                    length: c,
                    lengths: a,
                    segments: f
                }
            }, p = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function(e, t, n) {
                    this._target = e, t instanceof Array && (t = {
                        values: t
                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                    var i, r, o, s, a, l = t.values || [],
                        c = {},
                        h = l[0],
                        p = t.autoRotate || n.vars.orientToBezier;
                    for (i in this._autoRotate = p ? p instanceof Array ? p : [
                            ["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]
                        ] : null, h) this._props.push(i);
                    for (o = this._props.length; --o > -1;) i = this._props[o], this._overwriteProps.push(i), r = this._func[i] = "function" == typeof e[i], c[i] = r ? e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]() : parseFloat(e[i]), a || c[i] !== l[0][i] && (a = c);
                    if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, a) : f(l, t.type, c), this._segCount = this._beziers[i].length, this._timeRes) {
                        var g = d(this._beziers, this._timeRes);
                        this._length = g.length, this._lengths = g.lengths, this._segments = g.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                    }
                    if (p = this._autoRotate)
                        for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), o = p.length; --o > -1;) {
                            for (s = 0; 3 > s; s++) i = p[o][s], this._func[i] = "function" == typeof e[i] && e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)];
                            i = p[o][2], this._initialRotations[o] = (this._func[i] ? this._func[i].call(this._target) : this._target[i]) || 0, this._overwriteProps.push(i)
                        }
                    return this._startRatio = n.vars.runBackwards ? 1 : 0, !0
                },
                set: function(t) {
                    var n, i, r, o, s, a, l, c, u, f, h = this._segCount,
                        d = this._func,
                        p = this._target,
                        g = t !== this._startRatio;
                    if (this._timeRes) {
                        if (u = this._lengths, f = this._curSeg, t *= this._length, r = this._li, t > this._l2 && h - 1 > r) {
                            for (c = h - 1; c > r && (this._l2 = u[++r]) <= t;);
                            this._l1 = u[r - 1], this._li = r, this._curSeg = f = this._segments[r], this._s2 = f[this._s1 = this._si = 0]
                        } else if (t < this._l1 && r > 0) {
                            for (; r > 0 && (this._l1 = u[--r]) >= t;);
                            0 === r && t < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = f = this._segments[r], this._s1 = f[(this._si = f.length - 1) - 1] || 0, this._s2 = f[this._si]
                        }
                        if (n = r, t -= this._l1, r = this._si, t > this._s2 && r < f.length - 1) {
                            for (c = f.length - 1; c > r && (this._s2 = f[++r]) <= t;);
                            this._s1 = f[r - 1], this._si = r
                        } else if (t < this._s1 && r > 0) {
                            for (; r > 0 && (this._s1 = f[--r]) >= t;);
                            0 === r && t < this._s1 ? this._s1 = 0 : r++, this._s2 = f[r], this._si = r
                        }
                        a = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                    } else a = (t - (n = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0) * (1 / h)) * h;
                    for (i = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], l = (a * a * (s = this._beziers[o][n]).da + 3 * i * (a * s.ca + i * s.ba)) * a + s.a, this._mod[o] && (l = this._mod[o](l, p)), d[o] ? p[o](l) : p[o] = l;
                    if (this._autoRotate) {
                        var m, _, v, y, b, w, x, T = this._autoRotate;
                        for (r = T.length; --r > -1;) o = T[r][2], w = T[r][3] || 0, x = !0 === T[r][4] ? 1 : e, s = this._beziers[T[r][0]], m = this._beziers[T[r][1]], s && m && (s = s[n], m = m[n], _ = s.a + (s.b - s.a) * a, _ += ((y = s.b + (s.c - s.b) * a) - _) * a, y += (s.c + (s.d - s.c) * a - y) * a, v = m.a + (m.b - m.a) * a, v += ((b = m.b + (m.c - m.b) * a) - v) * a, b += (m.c + (m.d - m.c) * a - b) * a, l = g ? Math.atan2(b - v, y - _) * x + w : this._initialRotations[r], this._mod[o] && (l = this._mod[o](l, p)), d[o] ? p[o](l) : p[o] = l)
                    }
                }
            }), g = p.prototype, p.bezierThrough = u, p.cubicToQuadratic = a, p._autoCSS = !0, p.quadraticToCubic = function(e, t, n) {
                return new s(e, (2 * t + e) / 3, (2 * t + n) / 3, n)
            }, p._cssRegister = function() {
                var e = o.CSSPlugin;
                if (e) {
                    var t = e._internals,
                        n = t._parseToProxy,
                        i = t._setPluginRatio,
                        r = t.CSSPropTween;
                    t._registerComplexSpecialProp("bezier", {
                        parser: function(e, t, o, s, a, l) {
                            t instanceof Array && (t = {
                                values: t
                            }), l = new p;
                            var c, u, f, h = t.values,
                                d = h.length - 1,
                                g = [],
                                m = {};
                            if (0 > d) return a;
                            for (c = 0; d >= c; c++) f = n(e, h[c], s, a, l, d !== c), g[c] = f.end;
                            for (u in t) m[u] = t[u];
                            return m.values = g, (a = new r(e, "bezier", 0, 0, f.pt, 2)).data = f, a.plugin = l, a.setRatio = i, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (c = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != f.end.left ? [
                                ["left", "top", "rotation", c, !1]
                            ] : null != f.end.x && [
                                ["x", "y", "rotation", c, !1]
                            ]), m.autoRotate && (s._transform || s._enableTransforms(!1), f.autoRotate = s._target._gsTransform, f.proxy.rotation = f.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), l._onInitTween(f.proxy, m, s._tween), a
                        }
                    })
                }
            }, g._mod = function(e) {
                for (var t, n = this._overwriteProps, i = n.length; --i > -1;)(t = e[n[i]]) && "function" == typeof t && (this._mod[n[i]] = t)
            }, g._kill = function(e) {
                var t, n, i = this._props;
                for (t in this._beziers)
                    if (t in e)
                        for (delete this._beziers[t], delete this._func[t], n = i.length; --n > -1;) i[n] === t && i.splice(n, 1);
                if (i = this._autoRotate)
                    for (n = i.length; --n > -1;) e[i[n][2]] && i.splice(n, 1);
                return this._super._kill.call(this, e)
            }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                var n, i, r, o, s = function() {
                        e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    c = s.prototype = new e("css");
                c.constructor = s, s.version = "2.1.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, c = "px", s.suffixMap = {
                    top: c,
                    right: c,
                    bottom: c,
                    left: c,
                    width: c,
                    height: c,
                    fontSize: c,
                    padding: c,
                    margin: c,
                    perspective: c,
                    lineHeight: ""
                };
                var u, f, h, d, p, g, m, _, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    C = /opacity:([^;]*)/i,
                    S = /alpha\(opacity *=.+?\)/i,
                    E = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    A = /-([a-z])/gi,
                    O = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    k = function(e, t) {
                        return t.toUpperCase()
                    },
                    D = /(?:Left|Right|Width)/i,
                    I = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    R = /,(?=[^\)]*(?:\(|$))/gi,
                    L = /[\s,\(]/i,
                    M = Math.PI / 180,
                    F = 180 / Math.PI,
                    j = {},
                    q = {
                        style: {}
                    },
                    H = _gsScope.document || {
                        createElement: function() {
                            return q
                        }
                    },
                    z = function(e, t) {
                        return t && H.createElementNS ? H.createElementNS(t, e) : H.createElement(e)
                    },
                    B = z("div"),
                    W = z("img"),
                    X = s._internals = {
                        _specialProps: l
                    },
                    U = (_gsScope.navigator || {}).userAgent || "",
                    Y = function() {
                        var e = U.indexOf("Android"),
                            t = z("a");
                        return h = -1 !== U.indexOf("Safari") && -1 === U.indexOf("Chrome") && (-1 === e || parseFloat(U.substr(e + 8, 2)) > 3), p = h && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6, d = -1 !== U.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) && (g = parseFloat(RegExp.$1)), !!t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
                    }(),
                    Q = function(e) {
                        return T.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    G = function(e) {
                        _gsScope.console && console.log(e)
                    },
                    V = "",
                    $ = "",
                    K = function(e, t) {
                        var n, i, r = (t = t || B).style;
                        if (void 0 !== r[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), n = ["O", "Moz", "ms", "Ms", "Webkit"], i = 5; --i > -1 && void 0 === r[n[i] + e];);
                        return i >= 0 ? (V = "-" + ($ = 3 === i ? "ms" : n[i]).toLowerCase() + "-", $ + e) : null
                    },
                    Z = "undefined" != typeof window ? window : H.defaultView || {
                        getComputedStyle: function() {}
                    },
                    J = function(e) {
                        return Z.getComputedStyle(e)
                    },
                    ee = s.getStyle = function(e, t, n, i, r) {
                        var o;
                        return Y || "opacity" !== t ? (!i && e.style[t] ? o = e.style[t] : (n = n || J(e)) ? o = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(P, "-$1").toLowerCase()) : e.currentStyle && (o = e.currentStyle[t]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : Q(e)
                    },
                    te = X.convertToPixels = function(e, n, i, r, o) {
                        if ("px" === r || !r && "lineHeight" !== n) return i;
                        if ("auto" === r || !i) return 0;
                        var a, l, c, u = D.test(n),
                            f = e,
                            h = B.style,
                            d = 0 > i,
                            p = 1 === i;
                        if (d && (i = -i), p && (i *= 100), "lineHeight" !== n || r)
                            if ("%" === r && -1 !== n.indexOf("border")) a = i / 100 * (u ? e.clientWidth : e.clientHeight);
                            else {
                                if (h.cssText = "border:0 solid red;position:" + ee(e, "position") + ";line-height:0;", "%" !== r && f.appendChild && "v" !== r.charAt(0) && "rem" !== r) h[u ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                                else {
                                    if (f = e.parentNode || H.body, -1 !== ee(f, "display").indexOf("flex") && (h.position = "absolute"), l = f._gsCache, c = t.ticker.frame, l && u && l.time === c) return l.width * i / 100;
                                    h[u ? "width" : "height"] = i + r
                                }
                                f.appendChild(B), a = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]), f.removeChild(B), u && "%" === r && !1 !== s.cacheWidths && ((l = f._gsCache = f._gsCache || {}).time = c, l.width = a / i * 100), 0 !== a || o || (a = te(e, n, i, r, !0))
                            }
                        else l = J(e).lineHeight, e.style.lineHeight = i, a = parseFloat(J(e).lineHeight), e.style.lineHeight = l;
                        return p && (a /= 100), d ? -a : a
                    },
                    ne = X.calculateOffset = function(e, t, n) {
                        if ("absolute" !== ee(e, "position", n)) return 0;
                        var i = "left" === t ? "Left" : "Top",
                            r = ee(e, "margin" + i, n);
                        return e["offset" + i] - (te(e, t, parseFloat(r), r.replace(x, "")) || 0)
                    },
                    ie = function(e, t) {
                        var n, i, r, o = {};
                        if (t = t || J(e))
                            if (n = t.length)
                                for (; --n > -1;)(-1 === (r = t[n]).indexOf("-transform") || ke === r) && (o[r.replace(A, k)] = t.getPropertyValue(r));
                            else
                                for (n in t)(-1 === n.indexOf("Transform") || Oe === n) && (o[n] = t[n]);
                        else if (t = e.currentStyle || e.style)
                            for (n in t) "string" == typeof n && void 0 === o[n] && (o[n.replace(A, k)] = t[n]);
                        return Y || (o.opacity = Q(e)), i = We(e, t, !1), o.rotation = i.rotation, o.skewX = i.skewX, o.scaleX = i.scaleX, o.scaleY = i.scaleY, o.x = i.x, o.y = i.y, Ie && (o.z = i.z, o.rotationX = i.rotationX, o.rotationY = i.rotationY, o.scaleZ = i.scaleZ), o.filters && delete o.filters, o
                    },
                    re = function(e, t, n, i, r) {
                        var o, s, a, l = {},
                            c = e.style;
                        for (s in n) "cssText" !== s && "length" !== s && isNaN(s) && (t[s] !== (o = n[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof t[s] || "" === t[s].replace(w, "") ? o : 0 : ne(e, s), void 0 !== c[s] && (a = new ye(c, s, c[s], a)));
                        if (i)
                            for (s in i) "className" !== s && (l[s] = i[s]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    oe = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    se = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ae = function(e, t, n) {
                        if ("svg" === (e.nodeName + "").toLowerCase()) return (n || J(e))[t] || 0;
                        if (e.getCTM && He(e)) return e.getBBox()[t] || 0;
                        var i = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            r = oe[t],
                            o = r.length;
                        for (n = n || J(e); --o > -1;) i -= parseFloat(ee(e, "padding" + r[o], n, !0)) || 0, i -= parseFloat(ee(e, "border" + r[o] + "Width", n, !0)) || 0;
                        return i
                    },
                    le = function(e, t) {
                        if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
                        (null == e || "" === e) && (e = "0 0");
                        var n, i = e.split(" "),
                            r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                            o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                        if (i.length > 3 && !t) {
                            for (i = e.split(", ").join(",").split(","), e = [], n = 0; n < i.length; n++) e.push(le(i[n]));
                            return e.join(",")
                        }
                        return null == o ? o = "center" === r ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e = r + " " + o + (i.length > 2 ? " " + i[2] : ""), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== o.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === o.charAt(1), t.ox = parseFloat(r.replace(w, "")), t.oy = parseFloat(o.replace(w, "")), t.v = e), t || e
                    },
                    ce = function(e, t) {
                        return "function" == typeof e && (e = e(_, m)), "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
                    },
                    ue = function(e, t) {
                        "function" == typeof e && (e = e(_, m));
                        var n = "string" == typeof e && "=" === e.charAt(1);
                        return "string" == typeof e && "v" === e.charAt(e.length - 2) && (e = (n ? e.substr(0, 2) : 0) + window["inner" + ("vh" === e.substr(-2) ? "Height" : "Width")] * (parseFloat(n ? e.substr(2) : e) / 100)), null == e ? t : n ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
                    },
                    fe = function(e, t, n, i) {
                        var r, o, s, a, l;
                        return "function" == typeof e && (e = e(_, m)), null == e ? a = t : "number" == typeof e ? a = e : (r = 360, o = e.split("_"), s = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === e.indexOf("rad") ? 1 : F) - (l ? 0 : t), o.length && (i && (i[n] = t + s), -1 !== e.indexOf("short") && ((s %= r) !== s % 180 && (s = 0 > s ? s + r : s - r)), -1 !== e.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== e.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = t + s), 1e-6 > a && a > -1e-6 && (a = 0), a
                    },
                    he = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    de = function(e, t, n) {
                        return 255 * (1 > 6 * (e = 0 > e ? e + 1 : e > 1 ? e - 1 : e) ? t + (n - t) * e * 6 : .5 > e ? n : 2 > 3 * e ? t + (n - t) * (2 / 3 - e) * 6 : t) + .5 | 0
                    },
                    pe = s.parseColor = function(e, t) {
                        var n, i, r, o, s, a, l, c, u, f, h;
                        if (e)
                            if ("number" == typeof e) n = [e >> 16, e >> 8 & 255, 255 & e];
                            else {
                                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), he[e]) n = he[e];
                                else if ("#" === e.charAt(0)) 4 === e.length && (i = e.charAt(1), r = e.charAt(2), o = e.charAt(3), e = "#" + i + i + r + r + o + o), n = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                                else if ("hsl" === e.substr(0, 3))
                                    if (n = h = e.match(v), t) {
                                        if (-1 !== e.indexOf("=")) return e.match(y)
                                    } else s = Number(n[0]) % 360 / 360, a = Number(n[1]) / 100, i = 2 * (l = Number(n[2]) / 100) - (r = .5 >= l ? l * (a + 1) : l + a - l * a), n.length > 3 && (n[3] = Number(n[3])), n[0] = de(s + 1 / 3, i, r), n[1] = de(s, i, r), n[2] = de(s - 1 / 3, i, r);
                                else n = e.match(v) || he.transparent;
                                n[0] = Number(n[0]), n[1] = Number(n[1]), n[2] = Number(n[2]), n.length > 3 && (n[3] = Number(n[3]))
                            }
                        else n = he.black;
                        return t && !h && (i = n[0] / 255, r = n[1] / 255, o = n[2] / 255, l = ((c = Math.max(i, r, o)) + (u = Math.min(i, r, o))) / 2, c === u ? s = a = 0 : (f = c - u, a = l > .5 ? f / (2 - c - u) : f / (c + u), s = c === i ? (r - o) / f + (o > r ? 6 : 0) : c === r ? (o - i) / f + 2 : (i - r) / f + 4, s *= 60), n[0] = s + .5 | 0, n[1] = 100 * a + .5 | 0, n[2] = 100 * l + .5 | 0), n
                    },
                    ge = function(e, t) {
                        var n, i, r, o = e.match(me) || [],
                            s = 0,
                            a = "";
                        if (!o.length) return e;
                        for (n = 0; n < o.length; n++) i = o[n], s += (r = e.substr(s, e.indexOf(i, s) - s)).length + i.length, 3 === (i = pe(i, t)).length && i.push(1), a += r + (t ? "hsla(" + i[0] + "," + i[1] + "%," + i[2] + "%," + i[3] : "rgba(" + i.join(",")) + ")";
                        return a + e.substr(s)
                    },
                    me = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (c in he) me += "|" + c + "\\b";
                me = new RegExp(me + ")", "gi"), s.colorStringFilter = function(e) {
                    var t, n = e[0] + " " + e[1];
                    me.test(n) && (t = -1 !== n.indexOf("hsl(") || -1 !== n.indexOf("hsla("), e[0] = ge(e[0], t), e[1] = ge(e[1], t)), me.lastIndex = 0
                }, t.defaultStringFilter || (t.defaultStringFilter = s.colorStringFilter);
                var _e = function(e, t, n, i) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var r, o = t ? (e.match(me) || [""])[0] : "",
                            s = e.split(o).join("").match(b) || [],
                            a = e.substr(0, e.indexOf(s[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            c = -1 !== e.indexOf(" ") ? " " : ",",
                            u = s.length,
                            f = u > 0 ? s[0].replace(v, "") : "";
                        return u ? r = t ? function(e) {
                            var t, h, d, p;
                            if ("number" == typeof e) e += f;
                            else if (i && R.test(e)) {
                                for (p = e.replace(R, "|").split("|"), d = 0; d < p.length; d++) p[d] = r(p[d]);
                                return p.join(",")
                            }
                            if (t = (e.match(me) || [o])[0], d = (h = e.split(t).join("").match(b) || []).length, u > d--)
                                for (; ++d < u;) h[d] = n ? h[(d - 1) / 2 | 0] : s[d];
                            return a + h.join(c) + c + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, o, h;
                            if ("number" == typeof e) e += f;
                            else if (i && R.test(e)) {
                                for (o = e.replace(R, "|").split("|"), h = 0; h < o.length; h++) o[h] = r(o[h]);
                                return o.join(",")
                            }
                            if (h = (t = e.match(b) || []).length, u > h--)
                                for (; ++h < u;) t[h] = n ? t[(h - 1) / 2 | 0] : s[h];
                            return a + t.join(c) + l
                        } : function(e) {
                            return e
                        }
                    },
                    ve = function(e) {
                        return e = e.split(","),
                            function(t, n, i, r, o, s, a) {
                                var l, c = (n + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return r.parse(t, a, o, s)
                            }
                    },
                    ye = (X._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, n, i, r, o, s = this.data, a = s.proxy, l = s.firstMPT; l;) t = a[l.v], l.r ? t = l.r(t) : 1e-6 > t && t > -1e-6 && (t = 0), l.t[l.p] = t, l = l._next;
                        if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === e || 0 === e)
                            for (l = s.firstMPT, o = 1 === e ? "e" : "b"; l;) {
                                if ((n = l.t).type) {
                                    if (1 === n.type) {
                                        for (r = n.xs0 + n.s + n.xs1, i = 1; i < n.l; i++) r += n["xn" + i] + n["xs" + (i + 1)];
                                        n[o] = r
                                    }
                                } else n[o] = n.s + n.xs0;
                                l = l._next
                            }
                    }, function(e, t, n, i, r) {
                        this.t = e, this.p = t, this.v = n, this.r = r, i && (i._prev = this, this._next = i)
                    }),
                    be = (X._parseToProxy = function(e, t, n, i, r, o) {
                        var s, a, l, c, u, f = i,
                            h = {},
                            d = {},
                            p = n._transform,
                            g = j;
                        for (n._transform = null, j = t, i = u = n.parse(e, t, i, r), j = g, o && (n._transform = p, f && (f._prev = null, f._prev && (f._prev._next = null))); i && i !== f;) {
                            if (i.type <= 1 && (d[a = i.p] = i.s + i.c, h[a] = i.s, o || (c = new ye(i, "s", a, c, i.r), i.c = 0), 1 === i.type))
                                for (s = i.l; --s > 0;) l = "xn" + s, d[a = i.p + "_" + l] = i.data[l], h[a] = i[l], o || (c = new ye(i, l, a, c, i.rxp[l]));
                            i = i._next
                        }
                        return {
                            proxy: h,
                            end: d,
                            firstMPT: c,
                            pt: u
                        }
                    }, X.CSSPropTween = function(e, t, i, r, s, a, l, c, u, f, h) {
                        this.t = e, this.p = t, this.s = i, this.c = r, this.n = l || t, e instanceof be || o.push(this.n), this.r = c ? "function" == typeof c ? c : Math.round : c, this.type = a || 0, u && (this.pr = u, n = !0), this.b = void 0 === f ? i : f, this.e = void 0 === h ? i + r : h, s && (this._next = s, s._prev = this)
                    }),
                    we = function(e, t, n, i, r, o) {
                        var s = new be(e, t, n, i - n, r, -1, o);
                        return s.b = n, s.e = s.xs0 = i, s
                    },
                    xe = s.parseComplex = function(e, t, n, i, r, o, a, l, c, f) {
                        n = n || o || "", "function" == typeof i && (i = i(_, m)), a = new be(e, t, 0, 0, a, f ? 2 : 1, null, !1, l, n, i), i += "", r && me.test(i + n) && (i = [n, i], s.colorStringFilter(i), n = i[0], i = i[1]);
                        var h, d, p, g, b, w, x, T, C, S, E, P, A, O = n.split(", ").join(",").split(" "),
                            k = i.split(", ").join(",").split(" "),
                            D = O.length,
                            I = !1 !== u;
                        for ((-1 !== i.indexOf(",") || -1 !== n.indexOf(",")) && (-1 !== (i + n).indexOf("rgb") || -1 !== (i + n).indexOf("hsl") ? (O = O.join(" ").replace(R, ", ").split(" "), k = k.join(" ").replace(R, ", ").split(" ")) : (O = O.join(" ").split(",").join(", ").split(" "), k = k.join(" ").split(",").join(", ").split(" ")), D = O.length), D !== k.length && (D = (O = (o || "").split(" ")).length), a.plugin = c, a.setRatio = f, me.lastIndex = 0, h = 0; D > h; h++)
                            if (g = O[h], b = k[h] + "", (T = parseFloat(g)) || 0 === T) a.appendXtra("", T, ce(b, T), b.replace(y, ""), !(!I || -1 === b.indexOf("px")) && Math.round, !0);
                            else if (r && me.test(g)) P = ")" + ((P = b.indexOf(")") + 1) ? b.substr(P) : ""), A = -1 !== b.indexOf("hsl") && Y, S = b, g = pe(g, A), b = pe(b, A), (C = g.length + b.length > 6) && !Y && 0 === b[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(k[h]).join("transparent")) : (Y || (C = !1), A ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (C ? "hsla(" : "hsl("), g[0], ce(b[0], g[0]), ",", !1, !0).appendXtra("", g[1], ce(b[1], g[1]), "%,", !1).appendXtra("", g[2], ce(b[2], g[2]), C ? "%," : "%" + P, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (C ? "rgba(" : "rgb("), g[0], b[0] - g[0], ",", Math.round, !0).appendXtra("", g[1], b[1] - g[1], ",", Math.round).appendXtra("", g[2], b[2] - g[2], C ? "," : P, Math.round), C && (g = g.length < 4 ? 1 : g[3], a.appendXtra("", g, (b.length < 4 ? 1 : b[3]) - g, P, !1))), me.lastIndex = 0;
                        else if (w = g.match(v)) {
                            if (!(x = b.match(y)) || x.length !== w.length) return a;
                            for (p = 0, d = 0; d < w.length; d++) E = w[d], S = g.indexOf(E, p), a.appendXtra(g.substr(p, S - p), Number(E), ce(x[d], E), "", !(!I || "px" !== g.substr(S + E.length, 2)) && Math.round, 0 === d), p = S + E.length;
                            a["xs" + a.l] += g.substr(p)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
                        if (-1 !== i.indexOf("=") && a.data) {
                            for (P = a.xs0 + a.data.s, h = 1; h < a.l; h++) P += a["xs" + h] + a.data["xn" + h];
                            a.e = P + a["xs" + h]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    Te = 9;
                for ((c = be.prototype).l = c.pr = 0; --Te > 0;) c["xn" + Te] = 0, c["xs" + Te] = "";
                c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(e, t, n, i, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && (a || s["xs" + a]) ? " " + e : e || "", n || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = i || "", a > 0 ? (s.data["xn" + a] = t + n, s.rxp["xn" + a] = r, s["xn" + a] = t, s.plugin || (s.xfirst = new be(s, "xn" + a, t, n, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: t + n
                    }, s.rxp = {}, s.s = t, s.c = n, s.r = r, s)) : (s["xs" + a] += t + (i || ""), s)
                };
                var Ce = function(e, t) {
                        t = t || {}, this.p = t.prefix && K(e) || e, l[e] = l[this.p] = this, this.format = t.formatter || _e(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.allowFunc = t.allowFunc, this.pr = t.priority || 0
                    },
                    Se = X._registerComplexSpecialProp = function(e, t, n) {
                        "object" != typeof t && (t = {
                            parser: n
                        });
                        var i, r = e.split(","),
                            o = t.defaultValue;
                        for (n = n || [o], i = 0; i < r.length; i++) t.prefix = 0 === i && t.prefix, t.defaultValue = n[i] || o, new Ce(r[i], t)
                    },
                    Ee = X._registerPluginProp = function(e) {
                        if (!l[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            Se(e, {
                                parser: function(e, n, i, r, o, s, c) {
                                    var u = a.com.greensock.plugins[t];
                                    return u ? (u._cssRegister(), l[i].parse(e, n, i, r, o, s, c)) : (G("Error: " + t + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                (c = Ce.prototype).parseComplex = function(e, t, n, i, r, o) {
                    var s, a, l, c, u, f, h = this.keyword;
                    if (this.multi && (R.test(n) || R.test(t) ? (a = t.replace(R, "|").split("|"), l = n.replace(R, "|").split("|")) : h && (a = [t], l = [n])), l) {
                        for (c = l.length > a.length ? l.length : a.length, s = 0; c > s; s++) t = a[s] = a[s] || this.dflt, n = l[s] = l[s] || this.dflt, h && ((u = t.indexOf(h)) !== (f = n.indexOf(h)) && (-1 === f ? a[s] = a[s].split(h).join("") : -1 === u && (a[s] += " " + h)));
                        t = a.join(", "), n = l.join(", ")
                    }
                    return xe(e, this.p, t, n, this.clrs, this.dflt, i, this.pr, r, o)
                }, c.parse = function(e, t, n, i, o, s, a) {
                    return this.parseComplex(e.style, this.format(ee(e, this.p, r, !1, this.dflt)), this.format(t), o, s)
                }, s.registerSpecialProp = function(e, t, n) {
                    Se(e, {
                        parser: function(e, i, r, o, s, a, l) {
                            var c = new be(e, r, 0, 0, s, 2, r, !1, n);
                            return c.plugin = a, c.setRatio = t(e, i, o._tween, r), c
                        },
                        priority: n
                    })
                }, s.useSVGTransformAttr = !0;
                var Pe, Ae = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Oe = K("transform"),
                    ke = V + "transform",
                    De = K("transformOrigin"),
                    Ie = null !== K("perspective"),
                    Ne = X.Transform = function() {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = !(!1 === s.defaultForce3D || !Ie) && (s.defaultForce3D || "auto")
                    },
                    Re = _gsScope.SVGElement,
                    Le = function(e, t, n) {
                        var i, r = H.createElementNS("http://www.w3.org/2000/svg", e),
                            o = /([a-z])([A-Z])/g;
                        for (i in n) r.setAttributeNS(null, i.replace(o, "$1-$2").toLowerCase(), n[i]);
                        return t.appendChild(r), r
                    },
                    Me = H.documentElement || {},
                    Fe = function() {
                        var e, t, n, i = g || /Android/i.test(U) && !_gsScope.chrome;
                        return H.createElementNS && !i && (e = Le("svg", Me), n = (t = Le("rect", e, {
                            width: 100,
                            height: 50,
                            x: 100
                        })).getBoundingClientRect().width, t.style[De] = "50% 50%", t.style[Oe] = "scaleX(0.5)", i = n === t.getBoundingClientRect().width && !(d && Ie), Me.removeChild(e)), i
                    }(),
                    je = function(e, t, n, i, r, o) {
                        var a, l, c, u, f, h, d, p, g, m, _, v, y, b, w = e._gsTransform,
                            x = Be(e, !0);
                        w && (y = w.xOrigin, b = w.yOrigin), (!i || (a = i.split(" ")).length < 2) && (0 === (d = e.getBBox()).x && 0 === d.y && d.width + d.height === 0 && (d = {
                            x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                            y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), a = [(-1 !== (t = le(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * d.width : parseFloat(t[0])) + d.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * d.height : parseFloat(t[1])) + d.y]), n.xOrigin = u = parseFloat(a[0]), n.yOrigin = f = parseFloat(a[1]), i && x !== ze && (h = x[0], d = x[1], p = x[2], g = x[3], m = x[4], _ = x[5], (v = h * g - d * p) && (l = u * (g / v) + f * (-p / v) + (p * _ - g * m) / v, c = u * (-d / v) + f * (h / v) - (h * _ - d * m) / v, u = n.xOrigin = a[0] = l, f = n.yOrigin = a[1] = c)), w && (o && (n.xOffset = w.xOffset, n.yOffset = w.yOffset, w = n), r || !1 !== r && !1 !== s.defaultSmoothOrigin ? (l = u - y, c = f - b, w.xOffset += l * x[0] + c * x[2] - l, w.yOffset += l * x[1] + c * x[3] - c) : w.xOffset = w.yOffset = 0), o || e.setAttribute("data-svg-origin", a.join(" "))
                    },
                    qe = function(e) {
                        var t, n = z("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            i = this.parentNode,
                            r = this.nextSibling,
                            o = this.style.cssText;
                        if (Me.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                            t = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = qe
                        } catch (e) {} else this._originalGetBBox && (t = this._originalGetBBox());
                        return r ? i.insertBefore(this, r) : i.appendChild(this), Me.removeChild(n), this.style.cssText = o, t
                    },
                    He = function(e) {
                        return !(!Re || !e.getCTM || e.parentNode && !e.ownerSVGElement || ! function(e) {
                            try {
                                return e.getBBox()
                            } catch (t) {
                                return qe.call(e, !0)
                            }
                        }(e))
                    },
                    ze = [1, 0, 0, 1, 0, 0],
                    Be = function(e, t) {
                        var n, i, r, o, s, a, l, c = e._gsTransform || new Ne,
                            u = e.style;
                        if (Oe ? i = ee(e, ke, null, !0) : e.currentStyle && (i = (i = e.currentStyle.filter.match(I)) && 4 === i.length ? [i[0].substr(4), Number(i[2].substr(4)), Number(i[1].substr(4)), i[3].substr(4), c.x || 0, c.y || 0].join(",") : ""), n = !i || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, Oe && n && !e.offsetParent && (o = u.display, u.display = "block", (l = e.parentNode) && e.offsetParent || (s = 1, a = e.nextSibling, Me.appendChild(e)), n = !(i = ee(e, ke, null, !0)) || "none" === i || "matrix(1, 0, 0, 1, 0, 0)" === i, o ? u.display = o : Qe(u, "display"), s && (a ? l.insertBefore(e, a) : l ? l.appendChild(e) : Me.removeChild(e))), (c.svg || e.getCTM && He(e)) && (n && -1 !== (u[Oe] + "").indexOf("matrix") && (i = u[Oe], n = 0), r = e.getAttribute("transform"), n && r && (i = "matrix(" + (r = e.transform.baseVal.consolidate().matrix).a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", n = 0)), n) return ze;
                        for (r = (i || "").match(v) || [], Te = r.length; --Te > -1;) o = Number(r[Te]), r[Te] = (s = o - (o |= 0)) ? (1e5 * s + (0 > s ? -.5 : .5) | 0) / 1e5 + o : o;
                        return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    We = X.getTransform = function(e, n, i, r) {
                        if (e._gsTransform && i && !r) return e._gsTransform;
                        var o, a, l, c, u, f, h = i && e._gsTransform || new Ne,
                            d = h.scaleX < 0,
                            p = 2e-5,
                            g = 1e5,
                            m = Ie && (parseFloat(ee(e, De, n, !1, "0 0 0").split(" ")[2]) || h.zOrigin) || 0,
                            _ = parseFloat(s.defaultTransformPerspective) || 0;
                        if (h.svg = !(!e.getCTM || !He(e)), h.svg && (je(e, ee(e, De, n, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")), Pe = s.useSVGTransformAttr || Fe), (o = Be(e)) !== ze) {
                            if (16 === o.length) {
                                var v, y, b, w, x, T = o[0],
                                    C = o[1],
                                    S = o[2],
                                    E = o[3],
                                    P = o[4],
                                    A = o[5],
                                    O = o[6],
                                    k = o[7],
                                    D = o[8],
                                    I = o[9],
                                    N = o[10],
                                    R = o[12],
                                    L = o[13],
                                    M = o[14],
                                    j = o[11],
                                    q = Math.atan2(O, N);
                                h.zOrigin && (R = D * (M = -h.zOrigin) - o[12], L = I * M - o[13], M = N * M + h.zOrigin - o[14]), h.rotationX = q * F, q && (v = P * (w = Math.cos(-q)) + D * (x = Math.sin(-q)), y = A * w + I * x, b = O * w + N * x, D = P * -x + D * w, I = A * -x + I * w, N = O * -x + N * w, j = k * -x + j * w, P = v, A = y, O = b), q = Math.atan2(-S, N), h.rotationY = q * F, q && (y = C * (w = Math.cos(-q)) - I * (x = Math.sin(-q)), b = S * w - N * x, I = C * x + I * w, N = S * x + N * w, j = E * x + j * w, T = v = T * w - D * x, C = y, S = b), q = Math.atan2(C, T), h.rotation = q * F, q && (v = T * (w = Math.cos(q)) + C * (x = Math.sin(q)), y = P * w + A * x, b = D * w + I * x, C = C * w - T * x, A = A * w - P * x, I = I * w - D * x, T = v, P = y, D = b), h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY), q = Math.atan2(P, A), h.scaleX = (Math.sqrt(T * T + C * C + S * S) * g + .5 | 0) / g, h.scaleY = (Math.sqrt(A * A + O * O) * g + .5 | 0) / g, h.scaleZ = (Math.sqrt(D * D + I * I + N * N) * g + .5 | 0) / g, T /= h.scaleX, P /= h.scaleY, C /= h.scaleX, A /= h.scaleY, Math.abs(q) > p ? (h.skewX = q * F, P = 0, "simple" !== h.skewType && (h.scaleY *= 1 / Math.cos(q))) : h.skewX = 0, h.perspective = j ? 1 / (0 > j ? -j : j) : 0, h.x = R, h.y = L, h.z = M, h.svg && (h.x -= h.xOrigin - (h.xOrigin * T - h.yOrigin * P), h.y -= h.yOrigin - (h.yOrigin * C - h.xOrigin * A))
                            } else if (!Ie || r || !o.length || h.x !== o[4] || h.y !== o[5] || !h.rotationX && !h.rotationY) {
                                var H = o.length >= 6,
                                    z = H ? o[0] : 1,
                                    B = o[1] || 0,
                                    W = o[2] || 0,
                                    X = H ? o[3] : 1;
                                h.x = o[4] || 0, h.y = o[5] || 0, l = Math.sqrt(z * z + B * B), c = Math.sqrt(X * X + W * W), u = z || B ? Math.atan2(B, z) * F : h.rotation || 0, f = W || X ? Math.atan2(W, X) * F + u : h.skewX || 0, h.scaleX = l, h.scaleY = c, h.rotation = u, h.skewX = f, Ie && (h.rotationX = h.rotationY = h.z = 0, h.perspective = _, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * z + h.yOrigin * W), h.y -= h.yOrigin - (h.xOrigin * B + h.yOrigin * X))
                            }
                            for (a in Math.abs(h.skewX) > 90 && Math.abs(h.skewX) < 270 && (d ? (h.scaleX *= -1, h.skewX += h.rotation <= 0 ? 180 : -180, h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1, h.skewX += h.skewX <= 0 ? 180 : -180)), h.zOrigin = m, h) h[a] < p && h[a] > -p && (h[a] = 0)
                        }
                        return i && (e._gsTransform = h, h.svg && (Pe && e.style[Oe] ? t.delayedCall(.001, function() {
                            Qe(e.style, Oe)
                        }) : !Pe && e.getAttribute("transform") && t.delayedCall(.001, function() {
                            e.removeAttribute("transform")
                        }))), h
                    },
                    Xe = function(e) {
                        var t, n, i = this.data,
                            r = -i.rotation * M,
                            o = r + i.skewX * M,
                            s = 1e5,
                            a = (Math.cos(r) * i.scaleX * s | 0) / s,
                            l = (Math.sin(r) * i.scaleX * s | 0) / s,
                            c = (Math.sin(o) * -i.scaleY * s | 0) / s,
                            u = (Math.cos(o) * i.scaleY * s | 0) / s,
                            f = this.t.style,
                            h = this.t.currentStyle;
                        if (h) {
                            n = l, l = -c, c = -n, t = h.filter, f.filter = "";
                            var d, p, m = this.t.offsetWidth,
                                _ = this.t.offsetHeight,
                                v = "absolute" !== h.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                                b = i.x + m * i.xPercent / 100,
                                w = i.y + _ * i.yPercent / 100;
                            if (null != i.ox && (b += (d = (i.oxp ? m * i.ox * .01 : i.ox) - m / 2) - (d * a + (p = (i.oyp ? _ * i.oy * .01 : i.oy) - _ / 2) * l), w += p - (d * c + p * u)), v ? y += ", Dx=" + ((d = m / 2) - (d * a + (p = _ / 2) * l) + b) + ", Dy=" + (p - (d * c + p * u) + w) + ")" : y += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? f.filter = t.replace(N, y) : f.filter = y + " " + t, (0 === e || 1 === e) && 1 === a && 0 === l && 0 === c && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && f.removeAttribute("filter")), !v) {
                                var C, S, E, P = 8 > g ? 1 : -1;
                                for (d = i.ieOffsetX || 0, p = i.ieOffsetY || 0, i.ieOffsetX = Math.round((m - ((0 > a ? -a : a) * m + (0 > l ? -l : l) * _)) / 2 + b), i.ieOffsetY = Math.round((_ - ((0 > u ? -u : u) * _ + (0 > c ? -c : c) * m)) / 2 + w), Te = 0; 4 > Te; Te++) E = (n = -1 !== (C = h[S = se[Te]]).indexOf("px") ? parseFloat(C) : te(this.t, S, parseFloat(C), C.replace(x, "")) || 0) !== i[S] ? 2 > Te ? -i.ieOffsetX : -i.ieOffsetY : 2 > Te ? d - i.ieOffsetX : p - i.ieOffsetY, f[S] = (i[S] = Math.round(n - E * (0 === Te || 2 === Te ? 1 : P))) + "px"
                            }
                        }
                    },
                    Ue = X.set3DTransformRatio = X.setTransformRatio = function(e) {
                        var t, n, i, r, o, s, a, l, c, u, f, h, p, g, m, _, v, y, b, w, x, T, C, S = this.data,
                            E = this.t.style,
                            P = S.rotation,
                            A = S.rotationX,
                            O = S.rotationY,
                            k = S.scaleX,
                            D = S.scaleY,
                            I = S.scaleZ,
                            N = S.x,
                            R = S.y,
                            L = S.z,
                            F = S.svg,
                            j = S.perspective,
                            q = S.force3D,
                            H = S.skewY,
                            z = S.skewX;
                        if (H && (z += H, P += H), !((1 !== e && 0 !== e || "auto" !== q || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && q || L || j || O || A || 1 !== I) || Pe && F || !Ie) P || z || F ? (P *= M, T = z * M, C = 1e5, n = Math.cos(P) * k, o = Math.sin(P) * k, i = Math.sin(P - T) * -D, s = Math.cos(P - T) * D, T && "simple" === S.skewType && (t = Math.tan(T - H * M), i *= t = Math.sqrt(1 + t * t), s *= t, H && (t = Math.tan(H * M), n *= t = Math.sqrt(1 + t * t), o *= t)), F && (N += S.xOrigin - (S.xOrigin * n + S.yOrigin * i) + S.xOffset, R += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset, Pe && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), N += .01 * S.xPercent * m.width, R += .01 * S.yPercent * m.height), (m = 1e-6) > N && N > -m && (N = 0), m > R && R > -m && (R = 0)), b = (n * C | 0) / C + "," + (o * C | 0) / C + "," + (i * C | 0) / C + "," + (s * C | 0) / C + "," + N + "," + R + ")", F && Pe ? this.t.setAttribute("transform", "matrix(" + b) : E[Oe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : E[Oe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + k + ",0,0," + D + "," + N + "," + R + ")";
                        else {
                            if (d && ((m = 1e-4) > k && k > -m && (k = I = 2e-5), m > D && D > -m && (D = I = 2e-5), !j || S.z || S.rotationX || S.rotationY || (j = 0)), P || z) P *= M, _ = n = Math.cos(P), v = o = Math.sin(P), z && (P -= z * M, _ = Math.cos(P), v = Math.sin(P), "simple" === S.skewType && (t = Math.tan((z - H) * M), _ *= t = Math.sqrt(1 + t * t), v *= t, S.skewY && (t = Math.tan(H * M), n *= t = Math.sqrt(1 + t * t), o *= t))), i = -v, s = _;
                            else {
                                if (!(O || A || 1 !== I || j || F)) return void(E[Oe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + R + "px," + L + "px)" + (1 !== k || 1 !== D ? " scale(" + k + "," + D + ")" : ""));
                                n = s = 1, i = o = 0
                            }
                            u = 1, r = a = l = c = f = h = 0, p = j ? -1 / j : 0, g = S.zOrigin, m = 1e-6, w = ",", x = "0", (P = O * M) && (_ = Math.cos(P), l = -(v = Math.sin(P)), f = p * -v, r = n * v, a = o * v, u = _, p *= _, n *= _, o *= _), (P = A * M) && (t = i * (_ = Math.cos(P)) + r * (v = Math.sin(P)), y = s * _ + a * v, c = u * v, h = p * v, r = i * -v + r * _, a = s * -v + a * _, u *= _, p *= _, i = t, s = y), 1 !== I && (r *= I, a *= I, u *= I, p *= I), 1 !== D && (i *= D, s *= D, c *= D, h *= D), 1 !== k && (n *= k, o *= k, l *= k, f *= k), (g || F) && (g && (N += r * -g, R += a * -g, L += u * -g + g), F && (N += S.xOrigin - (S.xOrigin * n + S.yOrigin * i) + S.xOffset, R += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset), m > N && N > -m && (N = x), m > R && R > -m && (R = x), m > L && L > -m && (L = 0)), b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > n && n > -m ? x : n) + w + (m > o && o > -m ? x : o) + w + (m > l && l > -m ? x : l), b += w + (m > f && f > -m ? x : f) + w + (m > i && i > -m ? x : i) + w + (m > s && s > -m ? x : s), A || O || 1 !== I ? (b += w + (m > c && c > -m ? x : c) + w + (m > h && h > -m ? x : h) + w + (m > r && r > -m ? x : r), b += w + (m > a && a > -m ? x : a) + w + (m > u && u > -m ? x : u) + w + (m > p && p > -m ? x : p) + w) : b += ",0,0,0,0,1,0,", b += N + w + R + w + L + w + (j ? 1 + -L / j : 1) + ")", E[Oe] = b
                        }
                    };
                (c = Ne.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, Se("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(e, t, n, i, o, a, l) {
                        if (i._lastParsedTransform === l) return o;
                        i._lastParsedTransform = l;
                        var c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        c && (l.scale = c(_, e));
                        var u, f, h, d, p, g, v, y, b, w = e._gsTransform,
                            x = e.style,
                            T = Ae.length,
                            C = l,
                            S = {},
                            E = "transformOrigin",
                            P = We(e, r, !0, C.parseTransform),
                            A = C.transform && ("function" == typeof C.transform ? C.transform(_, m) : C.transform);
                        if (P.skewType = C.skewType || P.skewType || s.defaultSkewType, i._transform = P, "rotationZ" in C && (C.rotation = C.rotationZ), A && "string" == typeof A && Oe)(f = B.style)[Oe] = A, f.display = "block", f.position = "absolute", -1 !== A.indexOf("%") && (f.width = ee(e, "width"), f.height = ee(e, "height")), H.body.appendChild(B), u = We(B, null, !1), "simple" === P.skewType && (u.scaleY *= Math.cos(u.skewX * M)), P.svg && (g = P.xOrigin, v = P.yOrigin, u.x -= P.xOffset, u.y -= P.yOffset, (C.transformOrigin || C.svgOrigin) && (A = {}, je(e, le(C.transformOrigin), A, C.svgOrigin, C.smoothOrigin, !0), g = A.xOrigin, v = A.yOrigin, u.x -= A.xOffset - P.xOffset, u.y -= A.yOffset - P.yOffset), (g || v) && (y = Be(B, !0), u.x -= g - (g * y[0] + v * y[2]), u.y -= v - (g * y[1] + v * y[3]))), H.body.removeChild(B), u.perspective || (u.perspective = P.perspective), null != C.xPercent && (u.xPercent = ue(C.xPercent, P.xPercent)), null != C.yPercent && (u.yPercent = ue(C.yPercent, P.yPercent));
                        else if ("object" == typeof C) {
                            if (u = {
                                    scaleX: ue(null != C.scaleX ? C.scaleX : C.scale, P.scaleX),
                                    scaleY: ue(null != C.scaleY ? C.scaleY : C.scale, P.scaleY),
                                    scaleZ: ue(C.scaleZ, P.scaleZ),
                                    x: ue(C.x, P.x),
                                    y: ue(C.y, P.y),
                                    z: ue(C.z, P.z),
                                    xPercent: ue(C.xPercent, P.xPercent),
                                    yPercent: ue(C.yPercent, P.yPercent),
                                    perspective: ue(C.transformPerspective, P.perspective)
                                }, null != (p = C.directionalRotation))
                                if ("object" == typeof p)
                                    for (f in p) C[f] = p[f];
                                else C.rotation = p;
                            "string" == typeof C.x && -1 !== C.x.indexOf("%") && (u.x = 0, u.xPercent = ue(C.x, P.xPercent)), "string" == typeof C.y && -1 !== C.y.indexOf("%") && (u.y = 0, u.yPercent = ue(C.y, P.yPercent)), u.rotation = fe("rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : P.rotation, P.rotation, "rotation", S), Ie && (u.rotationX = fe("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", S), u.rotationY = fe("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", S)), u.skewX = fe(C.skewX, P.skewX), u.skewY = fe(C.skewY, P.skewY)
                        }
                        for (Ie && null != C.force3D && (P.force3D = C.force3D, d = !0), (h = P.force3D || P.z || P.rotationX || P.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == C.scale || (u.scaleZ = 1); --T > -1;)((A = u[b = Ae[T]] - P[b]) > 1e-6 || -1e-6 > A || null != C[b] || null != j[b]) && (d = !0, o = new be(P, b, P[b], A, o), b in S && (o.e = S[b]), o.xs0 = 0, o.plugin = a, i._overwriteProps.push(o.n));
                        return A = "function" == typeof C.transformOrigin ? C.transformOrigin(_, m) : C.transformOrigin, P.svg && (A || C.svgOrigin) && (g = P.xOffset, v = P.yOffset, je(e, le(A), u, C.svgOrigin, C.smoothOrigin), o = we(P, "xOrigin", (w ? P : u).xOrigin, u.xOrigin, o, E), o = we(P, "yOrigin", (w ? P : u).yOrigin, u.yOrigin, o, E), (g !== P.xOffset || v !== P.yOffset) && (o = we(P, "xOffset", w ? g : P.xOffset, P.xOffset, o, E), o = we(P, "yOffset", w ? v : P.yOffset, P.yOffset, o, E)), A = "0px 0px"), (A || Ie && h && P.zOrigin) && (Oe ? (d = !0, b = De, A || (A = (A = (ee(e, b, r, !1, "50% 50%") + "").split(" "))[0] + " " + A[1] + " " + P.zOrigin + "px"), A += "", (o = new be(x, b, 0, 0, o, -1, E)).b = x[b], o.plugin = a, Ie ? (f = P.zOrigin, A = A.split(" "), P.zOrigin = (A.length > 2 ? parseFloat(A[2]) : f) || 0, o.xs0 = o.e = A[0] + " " + (A[1] || "50%") + " 0px", (o = new be(P, "zOrigin", 0, 0, o, -1, o.n)).b = f, o.xs0 = o.e = P.zOrigin) : o.xs0 = o.e = A) : le(A + "", P)), d && (i._transformType = P.svg && Pe || !h && 3 !== this._transformType ? 2 : 3), c && (l.scale = c), o
                    },
                    allowFunc: !0,
                    prefix: !0
                }), Se("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), Se("clipPath", {
                    defaultValue: "inset(0px)",
                    prefix: !0,
                    multi: !0,
                    formatter: _e("inset(0px 0px 0px 0px)", !1, !0)
                }), Se("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, n, o, s, a) {
                        t = this.format(t);
                        var l, c, u, f, h, d, p, g, m, _, v, y, b, w, x, T, C = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = e.style;
                        for (m = parseFloat(e.offsetWidth), _ = parseFloat(e.offsetHeight), l = t.split(" "), c = 0; c < C.length; c++) this.p.indexOf("border") && (C[c] = K(C[c])), -1 !== (h = f = ee(e, C[c], r, !1, "0px")).indexOf(" ") && (f = h.split(" "), h = f[0], f = f[1]), d = u = l[c], p = parseFloat(h), y = h.substr((p + "").length), (b = "=" === d.charAt(1)) ? (g = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), g *= parseFloat(d), v = d.substr((g + "").length - (0 > g ? 1 : 0)) || "") : (g = parseFloat(d), v = d.substr((g + "").length)), "" === v && (v = i[n] || y), v !== y && (w = te(e, "borderLeft", p, y), x = te(e, "borderTop", p, y), "%" === v ? (h = w / m * 100 + "%", f = x / _ * 100 + "%") : "em" === v ? (h = w / (T = te(e, "borderLeft", 1, "em")) + "em", f = x / T + "em") : (h = w + "px", f = x + "px"), b && (d = parseFloat(h) + g + v, u = parseFloat(f) + g + v)), s = xe(S, C[c], h + " " + f, d + " " + u, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: _e("0px 0px 0px 0px", !1, !0)
                }), Se("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, n, i, o, s) {
                        return xe(e.style, n, this.format(ee(e, n, r, !1, "0px 0px")), this.format(t), !1, "0px", o)
                    },
                    prefix: !0,
                    formatter: _e("0px 0px", !1, !0)
                }), Se("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, n, i, o, s) {
                        var a, l, c, u, f, h, d = "background-position",
                            p = r || J(e),
                            m = this.format((p ? g ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            _ = this.format(t);
                        if (-1 !== m.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && ((h = ee(e, "backgroundImage").replace(O, "")) && "none" !== h)) {
                            for (a = m.split(" "), l = _.split(" "), W.setAttribute("src", h), c = 2; --c > -1;)(u = -1 !== (m = a[c]).indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (f = 0 === c ? e.offsetWidth - W.width : e.offsetHeight - W.height, a[c] = u ? parseFloat(m) / 100 * f + "px" : parseFloat(m) / f * 100 + "%");
                            m = a.join(" ")
                        }
                        return this.parseComplex(e.style, m, _, o, s)
                    },
                    formatter: le
                }), Se("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(e) {
                        return "co" === (e += "").substr(0, 2) ? e : le(-1 === e.indexOf(" ") ? e + " " + e : e)
                    }
                }), Se("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), Se("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), Se("transformStyle", {
                    prefix: !0
                }), Se("backfaceVisibility", {
                    prefix: !0
                }), Se("userSelect", {
                    prefix: !0
                }), Se("margin", {
                    parser: ve("marginTop,marginRight,marginBottom,marginLeft")
                }), Se("padding", {
                    parser: ve("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), Se("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, n, i, o, s) {
                        var a, l, c;
                        return 9 > g ? (l = e.currentStyle, c = 8 > g ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (a = this.format(ee(e, this.p, r, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, a, t, o, s)
                    }
                }), Se("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), Se("autoRound,strictUnits", {
                    parser: function(e, t, n, i, r) {
                        return r
                    }
                }), Se("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, n, i, o, s) {
                        var a = ee(e, "borderTopWidth", r, !1, "0px"),
                            l = this.format(t).split(" "),
                            c = l[0].replace(x, "");
                        return "px" !== c && (a = parseFloat(a) / te(e, "borderTopWidth", 1, c) + c), this.parseComplex(e.style, this.format(a + " " + ee(e, "borderTopStyle", r, !1, "solid") + " " + ee(e, "borderTopColor", r, !1, "#000")), l.join(" "), o, s)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(me) || ["#000"])[0]
                    }
                }), Se("borderWidth", {
                    parser: ve("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), Se("float,cssFloat,styleFloat", {
                    parser: function(e, t, n, i, r, o) {
                        var s = e.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new be(s, a, 0, 0, r, -1, n, !1, 0, s[a], t)
                    }
                });
                var Ye = function(e) {
                    var t, n = this.t,
                        i = n.filter || ee(this.data, "filter") || "",
                        r = this.s + this.c * e | 0;
                    100 === r && (-1 === i.indexOf("atrix(") && -1 === i.indexOf("radient(") && -1 === i.indexOf("oader(") ? (n.removeAttribute("filter"), t = !ee(this.data, "filter")) : (n.filter = i.replace(S, ""), t = !0)), t || (this.xn1 && (n.filter = i = i || "alpha(opacity=" + r + ")"), -1 === i.indexOf("pacity") ? 0 === r && this.xn1 || (n.filter = i + " alpha(opacity=" + r + ")") : n.filter = i.replace(T, "opacity=" + r))
                };
                Se("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, n, i, o, s) {
                        var a = parseFloat(ee(e, "opacity", r, !1, "1")),
                            l = e.style,
                            c = "autoAlpha" === n;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + a), c && 1 === a && "hidden" === ee(e, "visibility", r) && 0 !== t && (a = 0), Y ? o = new be(l, "opacity", a, t - a, o) : ((o = new be(l, "opacity", 100 * a, 100 * (t - a), o)).xn1 = c ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = e, o.plugin = s, o.setRatio = Ye), c && ((o = new be(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", i._overwriteProps.push(o.n), i._overwriteProps.push(n)), o
                    }
                });
                var Qe = function(e, t) {
                        t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(P, "-$1").toLowerCase())) : e.removeAttribute(t))
                    },
                    Ge = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.setAttribute("class", 0 === e ? this.b : this.e);
                            for (var t = this.data, n = this.t.style; t;) t.v ? n[t.p] = t.v : Qe(n, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                Se("className", {
                    parser: function(e, t, i, o, s, a, l) {
                        var c, u, f, h, d, p = e.getAttribute("class") || "",
                            g = e.style.cssText;
                        if ((s = o._classNamePT = new be(e, i, 0, 0, s, 2)).setRatio = Ge, s.pr = -11, n = !0, s.b = p, u = ie(e, r), f = e._gsClassPT) {
                            for (h = {}, d = f.data; d;) h[d.p] = 1, d = d._next;
                            f.setRatio(1)
                        }
                        return e._gsClassPT = s, s.e = "=" !== t.charAt(1) ? t : p.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", s.e), c = re(e, u, ie(e), l, h), e.setAttribute("class", p), s.data = c.firstMPT, e.style.cssText = g, s.xfirst = o.parse(e, c.difs, s, a)
                    }
                });
                var Ve = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, n, i, r, o, s = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) s.cssText = "", r = !0;
                        else
                            for (i = (t = this.e.split(" ").join("").split(",")).length; --i > -1;) n = t[i], l[n] && (l[n].parse === a ? r = !0 : n = "transformOrigin" === n ? De : l[n].p), Qe(s, n);
                        r && (Qe(s, Oe), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (Se("clearProps", {
                        parser: function(e, t, i, r, o) {
                            return (o = new be(e, i, 0, 0, o, 2)).setRatio = Ve, o.e = t, o.pr = -10, o.data = r._tween, n = !0, o
                        }
                    }), c = "bezier,throwProps,physicsProps,physics2D".split(","), Te = c.length; Te--;) Ee(c[Te]);
                (c = s.prototype)._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(e, t, a, c) {
                    if (!e.nodeType) return !1;
                    this._target = m = e, this._tween = a, this._vars = t, _ = c, u = t.autoRound, n = !1, i = t.suffixMap || s.suffixMap, r = J(e), o = this._overwriteProps;
                    var d, g, v, y, b, w, x, T, S, E = e.style;
                    if (f && "" === E.zIndex && (("auto" === (d = ee(e, "zIndex", r)) || "" === d) && this._addLazySet(E, "zIndex", 0)), "string" == typeof t && (y = E.cssText, d = ie(e, r), E.cssText = y + ";" + t, d = re(e, d, ie(e)).difs, !Y && C.test(t) && (d.opacity = parseFloat(RegExp.$1)), t = d, E.cssText = y), t.className ? this._firstPT = g = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = g = this.parse(e, t, null), this._transformType) {
                        for (S = 3 === this._transformType, Oe ? h && (f = !0, "" === E.zIndex && (("auto" === (x = ee(e, "zIndex", r)) || "" === x) && this._addLazySet(E, "zIndex", 0)), p && this._addLazySet(E, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : E.zoom = 1, v = g; v && v._next;) v = v._next;
                        T = new be(e, "transform", 0, 0, null, 2), this._linkCSSP(T, null, v), T.setRatio = Oe ? Ue : Xe, T.data = this._transform || We(e, r, !0), T.tween = a, T.pr = -1, o.pop()
                    }
                    if (n) {
                        for (; g;) {
                            for (w = g._next, v = y; v && v.pr > g.pr;) v = v._next;
                            (g._prev = v ? v._prev : b) ? g._prev._next = g: y = g, (g._next = v) ? v._prev = g : b = g, g = w
                        }
                        this._firstPT = y
                    }
                    return !0
                }, c.parse = function(e, t, n, o) {
                    var s, a, c, f, h, d, p, g, v, y, b = e.style;
                    for (s in t) {
                        if (d = t[s], a = l[s], "function" != typeof d || a && a.allowFunc || (d = d(_, m)), a) n = a.parse(e, d, s, this, n, o, t);
                        else {
                            if ("--" === s.substr(0, 2)) {
                                this._tween._propLookup[s] = this._addTween.call(this._tween, e.style, "setProperty", J(e).getPropertyValue(s) + "", d + "", s, !1, s);
                                continue
                            }
                            h = ee(e, s, r) + "", v = "string" == typeof d, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || v && E.test(d) ? (v || (d = ((d = pe(d)).length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), n = xe(b, s, h, d, !0, "transparent", n, 0, o)) : v && L.test(d) ? n = xe(b, s, h, d, !0, null, n, 0, o) : (p = (c = parseFloat(h)) || 0 === c ? h.substr((c + "").length) : "", ("" === h || "auto" === h) && ("width" === s || "height" === s ? (c = ae(e, s, r), p = "px") : "left" === s || "top" === s ? (c = ne(e, s, r), p = "px") : (c = "opacity" !== s ? 0 : 1, p = "")), (y = v && "=" === d.charAt(1)) ? (f = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), f *= parseFloat(d), g = d.replace(x, "")) : (f = parseFloat(d), g = v ? d.replace(x, "") : ""), "" === g && (g = s in i ? i[s] : p), d = f || 0 === f ? (y ? f + c : f) + g : t[s], p !== g && ("" !== g || "lineHeight" === s) && (f || 0 === f) && c && (c = te(e, s, c, p), "%" === g ? (c /= te(e, s, 100, "%") / 100, !0 !== t.strictUnits && (h = c + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? c /= te(e, s, 1, g) : "px" !== g && (f = te(e, s, f, g), g = "px"), y && (f || 0 === f) && (d = f + c + g)), y && (f += c), !c && 0 !== c || !f && 0 !== f ? void 0 !== b[s] && (d || d + "" != "NaN" && null != d) ? (n = new be(b, s, f || c || 0, 0, n, -1, s, !1, 0, h, d)).xs0 = "none" !== d || "display" !== s && -1 === s.indexOf("Style") ? d : h : G("invalid " + s + " tween value: " + t[s]) : (n = new be(b, s, c, f - c, n, 0, s, !1 !== u && ("px" === g || "zIndex" === s), 0, h, d)).xs0 = g)
                        }
                        o && n && !n.plugin && (n.plugin = o)
                    }
                    return n
                }, c.setRatio = function(e) {
                    var t, n, i, r = this._firstPT;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (t = r.c * e + r.s, r.r ? t = r.r(t) : 1e-6 > t && t > -1e-6 && (t = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (i = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === i) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                    r.t[r.p] = n
                                } else - 1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                                else r.t[r.p] = t + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (t = r.r(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (i = r.l, n = r.xs0 + t + r.xs1, i = 1; i < r.l; i++) n += r["xn" + i] + r["xs" + (i + 1)];
                                                r.t[r.p] = n
                                            }
                                        } else r.t[r.p] = t + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(e);
                                r = r._next
                            }
                }, c._enableTransforms = function(e) {
                    this._transform = this._transform || We(this._target, r, !0), this._transformType = this._transform.svg && Pe || !e && 3 !== this._transformType ? 2 : 3
                };
                var $e = function(e) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                c._addLazySet = function(e, t, n) {
                    var i = this._firstPT = new be(e, t, 0, 0, this._firstPT, 2);
                    i.e = n, i.setRatio = $e, i.data = this
                }, c._linkCSSP = function(e, t, n, i) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, i = !0), n ? n._next = e : i || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = n), e
                }, c._mod = function(e) {
                    for (var t = this._firstPT; t;) "function" == typeof e[t.p] && (t.r = e[t.p]), t = t._next
                }, c._kill = function(t) {
                    var n, i, r, o = t;
                    if (t.autoAlpha || t.alpha) {
                        for (i in o = {}, t) o[i] = t[i];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    for (t.className && (n = this._classNamePT) && ((r = n.xfirst) && r._prev ? this._linkCSSP(r._prev, n._next, r._prev._prev) : r === this._firstPT && (this._firstPT = n._next), n._next && this._linkCSSP(n._next, n._next._next, r._prev), this._classNamePT = null), n = this._firstPT; n;) n.plugin && n.plugin !== i && n.plugin._kill && (n.plugin._kill(t), i = n.plugin), n = n._next;
                    return e.prototype._kill.call(this, o)
                };
                var Ke = function(e, t, n) {
                    var i, r, o, s;
                    if (e.slice)
                        for (r = e.length; --r > -1;) Ke(e[r], t, n);
                    else
                        for (r = (i = e.childNodes).length; --r > -1;) s = (o = i[r]).type, o.style && (t.push(ie(o)), n && n.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Ke(o, t, n)
                };
                return s.cascadeTo = function(e, n, i) {
                    var r, o, s, a, l = t.to(e, n, i),
                        c = [l],
                        u = [],
                        f = [],
                        h = [],
                        d = t._internals.reservedProps;
                    for (e = l._targets || l.target, Ke(e, u, h), l.render(n, !0, !0), Ke(e, f), l.render(0, !0, !0), l._enabled(!0), r = h.length; --r > -1;)
                        if ((o = re(h[r], u[r], f[r])).firstMPT) {
                            for (s in o = o.difs, i) d[s] && (o[s] = i[s]);
                            for (s in a = {}, o) a[s] = u[r][s];
                            c.push(t.fromTo(h[r], n, a, o))
                        } return c
                }, e.activate([s]), s
            }, !0),
            function() {
                var e = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.7.0",
                        priority: -1,
                        API: 2,
                        init: function(e, t, n) {
                            return this._tween = n, !0
                        }
                    }),
                    t = function(e) {
                        var t = 1 > e ? Math.pow(10, (e + "").length - 2) : 1;
                        return function(n) {
                            return (Math.round(n / e) * e * t | 0) / t
                        }
                    },
                    n = function(e, t) {
                        for (; e;) e.f || e.blob || (e.m = t || Math.round), e = e._next
                    },
                    i = e.prototype;
                i._onInitAllProps = function() {
                    var e, i, r, o, s = this._tween,
                        a = s.vars.roundProps,
                        l = {},
                        c = s._propLookup.roundProps;
                    if ("object" != typeof a || a.push)
                        for ("string" == typeof a && (a = a.split(",")), r = a.length; --r > -1;) l[a[r]] = Math.round;
                    else
                        for (o in a) l[o] = t(a[o]);
                    for (o in l)
                        for (e = s._firstPT; e;) i = e._next, e.pg ? e.t._mod(l) : e.n === o && (2 === e.f && e.t ? n(e.t._firstPT, l[o]) : (this._add(e.t, o, e.s, e.c, l[o]), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[o] = c)), e = i;
                    return !1
                }, i._add = function(e, t, n, i, r) {
                    this._addTween(e, t, n, n + i, t, r || Math.round), this._overwriteProps.push(t)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(e, t, n, i) {
                    var r, o;
                    if ("function" != typeof e.setAttribute) return !1;
                    for (r in t) "function" == typeof(o = t[r]) && (o = o(i, e)), this._addTween(e, "setAttribute", e.getAttribute(r) + "", o + "", r, !1, r), this._overwriteProps.push(r);
                    return !0
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(e, t, n, i) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var r, o, s, a, l, c, u = !0 === t.useRadians ? 2 * Math.PI : 360;
                    for (r in t) "useRadians" !== r && ("function" == typeof(a = t[r]) && (a = a(i, e)), o = (c = (a + "").split("_"))[0], s = parseFloat("function" != typeof e[r] ? e[r] : e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), l = (a = this.finals[r] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0) - s, c.length && (-1 !== (o = c.join("_")).indexOf("short") && ((l %= u) !== l % (u / 2) && (l = 0 > l ? l + u : l - u)), -1 !== o.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== o.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (l > 1e-6 || -1e-6 > l) && (this._addTween(e, r, s, s + l, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                var t, n, i, r, o = _gsScope.GreenSockGlobals || _gsScope,
                    s = o.com.greensock,
                    a = 2 * Math.PI,
                    l = Math.PI / 2,
                    c = s._class,
                    u = function(t, n) {
                        var i = c("easing." + t, function() {}, !0),
                            r = i.prototype = new e;
                        return r.constructor = i, r.getRatio = n, i
                    },
                    f = e.register || function() {},
                    h = function(e, t, n, i, r) {
                        var o = c("easing." + e, {
                            easeOut: new t,
                            easeIn: new n,
                            easeInOut: new i
                        }, !0);
                        return f(o, e), o
                    },
                    d = function(e, t, n) {
                        this.t = e, this.v = t, n && (this.next = n, n.prev = this, this.c = n.v - t, this.gap = n.t - e)
                    },
                    p = function(t, n) {
                        var i = c("easing." + t, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = i.prototype = new e;
                        return r.constructor = i, r.getRatio = n, r.config = function(e) {
                            return new i(e)
                        }, i
                    },
                    g = h("Back", p("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), p("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), p("BackInOut", function(e) {
                        return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    m = c("easing.SlowMo", function(e, t, n) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === n
                    }, !0),
                    _ = m.prototype = new e;
                return _.constructor = m, _.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 === e ? 0 : 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, m.ease = new m(.7, .7), _.config = m.config = function(e, t, n) {
                    return new m(e, t, n)
                }, (_ = (t = c("easing.SteppedEase", function(e, t) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + (t ? 0 : 1), this._p3 = t ? 1 : 0
                }, !0)).prototype = new e).constructor = t, _.getRatio = function(e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), ((this._p2 * e | 0) + this._p3) * this._p1
                }, _.config = t.config = function(e, n) {
                    return new t(e, n)
                }, (_ = (n = c("easing.ExpoScaleEase", function(e, t, n) {
                    this._p1 = Math.log(t / e), this._p2 = t - e, this._p3 = e, this._ease = n
                }, !0)).prototype = new e).constructor = n, _.getRatio = function(e) {
                    return this._ease && (e = this._ease.getRatio(e)), (this._p3 * Math.exp(this._p1 * e) - this._p3) / this._p2
                }, _.config = n.config = function(e, t, i) {
                    return new n(e, t, i)
                }, (_ = (i = c("easing.RoughEase", function(t) {
                    for (var n, i, r, o, s, a, l = (t = t || {}).taper || "none", c = [], u = 0, f = 0 | (t.points || 20), h = f, p = !1 !== t.randomize, g = !0 === t.clamp, m = t.template instanceof e ? t.template : null, _ = "number" == typeof t.strength ? .4 * t.strength : .4; --h > -1;) n = p ? Math.random() : 1 / f * h, i = m ? m.getRatio(n) : n, "none" === l ? r = _ : "out" === l ? r = (o = 1 - n) * o * _ : "in" === l ? r = n * n * _ : .5 > n ? r = (o = 2 * n) * o * .5 * _ : r = (o = 2 * (1 - n)) * o * .5 * _, p ? i += Math.random() * r - .5 * r : h % 2 ? i += .5 * r : i -= .5 * r, g && (i > 1 ? i = 1 : 0 > i && (i = 0)), c[u++] = {
                        x: n,
                        y: i
                    };
                    for (c.sort(function(e, t) {
                            return e.x - t.x
                        }), a = new d(1, 1, null), h = f; --h > -1;) s = c[h], a = new d(s.x, s.y, a);
                    this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
                }, !0)).prototype = new e).constructor = i, _.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && e <= t.t;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, _.config = function(e) {
                    return new i(e)
                }, i.ease = new i, h("Bounce", u("BounceOut", function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), u("BounceIn", function(e) {
                    return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), u("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = 1 / 2.75 > (e = t ? 1 - 2 * e : 2 * e - 1) ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), h("Circ", u("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), u("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), u("CircInOut", function(e) {
                    return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), h("Elastic", (r = function(t, n, i) {
                    var r = c("easing." + t, function(e, t) {
                            this._p1 = e >= 1 ? e : 1, this._p2 = (t || i) / (1 > e ? e : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                        }, !0),
                        o = r.prototype = new e;
                    return o.constructor = r, o.getRatio = n, o.config = function(e, t) {
                        return new r(e, t)
                    }, r
                })("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                }, .3), r("ElasticIn", function(e) {
                    return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
                }, .3), r("ElasticInOut", function(e) {
                    return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
                }, .45)), h("Expo", u("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), u("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), u("ExpoInOut", function(e) {
                    return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), h("Sine", u("SineOut", function(e) {
                    return Math.sin(e * l)
                }), u("SineIn", function(e) {
                    return 1 - Math.cos(e * l)
                }), u("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), c("easing.EaseLookup", {
                    find: function(t) {
                        return e.map[t]
                    }
                }, !0), f(o.SlowMo, "SlowMo", "ease,"), f(i, "RoughEase", "ease,"), f(t, "SteppedEase", "ease,"), g
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(e, t) {
        "use strict";
        var n = {},
            i = e.document,
            r = e.GreenSockGlobals = e.GreenSockGlobals || e,
            o = r[t];
        if (o) return "undefined" != typeof module && module.exports && (module.exports = o), o;
        var s, a, l, c, u, f = function(e) {
                var t, n = e.split("."),
                    i = r;
                for (t = 0; t < n.length; t++) i[n[t]] = i = i[n[t]] || {};
                return i
            },
            h = f("com.greensock"),
            d = 1e-8,
            p = function(e) {
                var t, n = [],
                    i = e.length;
                for (t = 0; t !== i; n.push(e[t++]));
                return n
            },
            g = function() {},
            m = function() {
                var e = Object.prototype.toString,
                    t = e.call([]);
                return function(n) {
                    return null != n && (n instanceof Array || "object" == typeof n && !!n.push && e.call(n) === t)
                }
            }(),
            _ = {},
            v = function(i, o, s, a) {
                this.sc = _[i] ? _[i].sc : [], _[i] = this, this.gsClass = null, this.func = s;
                var l = [];
                this.check = function(c) {
                    for (var u, h, d, p, g = o.length, m = g; --g > -1;)(u = _[o[g]] || new v(o[g], [])).gsClass ? (l[g] = u.gsClass, m--) : c && u.sc.push(this);
                    if (0 === m && s) {
                        if (d = (h = ("com.greensock." + i).split(".")).pop(), p = f(h.join("."))[d] = this.gsClass = s.apply(s, l), a)
                            if (r[d] = n[d] = p, "undefined" != typeof module && module.exports)
                                if (i === t)
                                    for (g in module.exports = n[t] = p, n) p[g] = n[g];
                                else n[t] && (n[t][d] = p);
                        else "function" == typeof define && define.amd && define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").pop(), [], function() {
                            return p
                        });
                        for (g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }
                }, this.check(!0)
            },
            y = e._gsDefine = function(e, t, n, i) {
                return new v(e, t, n, i)
            },
            b = h._class = function(e, t, n) {
                return t = t || function() {}, y(e, [], function() {
                    return t
                }, n), t
            };
        y.globals = r;
        var w = [0, 0, 1, 1],
            x = b("easing.Ease", function(e, t, n, i) {
                this._func = e, this._type = n || 0, this._power = i || 0, this._params = t ? w.concat(t) : w
            }, !0),
            T = x.map = {},
            C = x.register = function(e, t, n, i) {
                for (var r, o, s, a, l = t.split(","), c = l.length, u = (n || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                    for (o = l[c], r = i ? b("easing." + o, null, !0) : h.easing[o] || {}, s = u.length; --s > -1;) a = u[s], T[o + "." + a] = T[a + o] = r[a] = e.getRatio ? e : e[a] || new e
            };
        for ((l = x.prototype)._calcEnd = !1, l.getRatio = function(e) {
                if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                var t = this._type,
                    n = this._power,
                    i = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                return 1 === n ? i *= i : 2 === n ? i *= i * i : 3 === n ? i *= i * i * i : 4 === n && (i *= i * i * i * i), 1 === t ? 1 - i : 2 === t ? i : .5 > e ? i / 2 : 1 - i / 2
            }, a = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --a > -1;) l = s[a] + ",Power" + a, C(new x(null, null, 1, a), l, "easeOut", !0), C(new x(null, null, 2, a), l, "easeIn" + (0 === a ? ",easeNone" : "")), C(new x(null, null, 3, a), l, "easeInOut");
        T.linear = h.easing.Linear.easeIn, T.swing = h.easing.Quad.easeInOut;
        var S = b("events.EventDispatcher", function(e) {
            this._listeners = {}, this._eventTarget = e || this
        });
        (l = S.prototype).addEventListener = function(e, t, n, i, r) {
            r = r || 0;
            var o, s, a = this._listeners[e],
                l = 0;
            for (this !== c || u || c.wake(), null == a && (this._listeners[e] = a = []), s = a.length; --s > -1;)(o = a[s]).c === t && o.s === n ? a.splice(s, 1) : 0 === l && o.pr < r && (l = s + 1);
            a.splice(l, 0, {
                c: t,
                s: n,
                up: i,
                pr: r
            })
        }, l.removeEventListener = function(e, t) {
            var n, i = this._listeners[e];
            if (i)
                for (n = i.length; --n > -1;)
                    if (i[n].c === t) return void i.splice(n, 1)
        }, l.dispatchEvent = function(e) {
            var t, n, i, r = this._listeners[e];
            if (r)
                for ((t = r.length) > 1 && (r = r.slice(0)), n = this._eventTarget; --t > -1;)(i = r[t]) && (i.up ? i.c.call(i.s || n, {
                    type: e,
                    target: n
                }) : i.c.call(i.s || n))
        };
        var E = e.requestAnimationFrame,
            P = e.cancelAnimationFrame,
            A = Date.now || function() {
                return (new Date).getTime()
            },
            O = A();
        for (a = (s = ["ms", "moz", "webkit", "o"]).length; --a > -1 && !E;) E = e[s[a] + "RequestAnimationFrame"], P = e[s[a] + "CancelAnimationFrame"] || e[s[a] + "CancelRequestAnimationFrame"];
        b("Ticker", function(e, t) {
            var n, r, o, s, a, l = this,
                f = A(),
                h = !(!1 === t || !E) && "auto",
                d = 500,
                p = 33,
                m = function(e) {
                    var t, i, c = A() - O;
                    c > d && (f += c - p), O += c, l.time = (O - f) / 1e3, t = l.time - a, (!n || t > 0 || !0 === e) && (l.frame++, a += t + (t >= s ? .004 : s - t), i = !0), !0 !== e && (o = r(m)), i && l.dispatchEvent("tick")
                };
            S.call(l), l.time = l.frame = 0, l.tick = function() {
                m(!0)
            }, l.lagSmoothing = function(e, t) {
                return arguments.length ? (d = e || 1e8, void(p = Math.min(t, d, 0))) : 1e8 > d
            }, l.sleep = function() {
                null != o && (h && P ? P(o) : clearTimeout(o), r = g, o = null, l === c && (u = !1))
            }, l.wake = function(e) {
                null !== o ? l.sleep() : e ? f += -O + (O = A()) : l.frame > 10 && (O = A() - d + 5), r = 0 === n ? g : h && E ? E : function(e) {
                    return setTimeout(e, 1e3 * (a - l.time) + 1 | 0)
                }, l === c && (u = !0), m(2)
            }, l.fps = function(e) {
                return arguments.length ? (s = 1 / ((n = e) || 60), a = this.time + s, void l.wake()) : n
            }, l.useRAF = function(e) {
                return arguments.length ? (l.sleep(), h = e, void l.fps(n)) : h
            }, l.fps(e), setTimeout(function() {
                "auto" === h && l.frame < 5 && "hidden" !== (i || {}).visibilityState && l.useRAF(!1)
            }, 1500)
        }), (l = h.Ticker.prototype = new h.events.EventDispatcher).constructor = h.Ticker;
        var k = b("core.Animation", function(e, t) {
            if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !!t.immediateRender, this.data = t.data, this._reversed = !!t.reversed, $) {
                u || c.wake();
                var n = this.vars.useFrames ? V : $;
                n.add(this, n._time), this.vars.paused && this.paused(!0)
            }
        });
        c = k.ticker = new h.Ticker, (l = k.prototype)._dirty = l._gc = l._initted = l._paused = !1, l._totalTime = l._time = 0, l._rawPrevTime = -1, l._next = l._last = l._onUpdate = l._timeline = l.timeline = null, l._paused = !1;
        var D = function() {
            u && A() - O > 2e3 && ("hidden" !== (i || {}).visibilityState || !c.lagSmoothing()) && c.wake();
            var e = setTimeout(D, 2e3);
            e.unref && e.unref()
        };
        D(), l.play = function(e, t) {
            return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
        }, l.pause = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!0)
        }, l.resume = function(e, t) {
            return null != e && this.seek(e, t), this.paused(!1)
        }, l.seek = function(e, t) {
            return this.totalTime(Number(e), !1 !== t)
        }, l.restart = function(e, t) {
            return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
        }, l.reverse = function(e, t) {
            return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }, l.render = function(e, t, n) {}, l.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, l.isActive = function() {
            var e, t = this._timeline,
                n = this._startTime;
            return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime(!0)) >= n && e < n + this.totalDuration() / this._timeScale - d
        }, l._enabled = function(e, t) {
            return u || c.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
        }, l._kill = function(e, t) {
            return this._enabled(!1, !1)
        }, l.kill = function(e, t) {
            return this._kill(e, t), this
        }, l._uncache = function(e) {
            for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
            return this
        }, l._swapSelfInParams = function(e) {
            for (var t = e.length, n = e.concat(); --t > -1;) "{self}" === e[t] && (n[t] = this);
            return n
        }, l._callback = function(e) {
            var t = this.vars,
                n = t[e],
                i = t[e + "Params"],
                r = t[e + "Scope"] || t.callbackScope || this;
            switch (i ? i.length : 0) {
                case 0:
                    n.call(r);
                    break;
                case 1:
                    n.call(r, i[0]);
                    break;
                case 2:
                    n.call(r, i[0], i[1]);
                    break;
                default:
                    n.apply(r, i)
            }
        }, l.eventCallback = function(e, t, n, i) {
            if ("on" === (e || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[e];
                null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = m(n) && -1 !== n.join("").indexOf("{self}") ? this._swapSelfInParams(n) : n, r[e + "Scope"] = i), "onUpdate" === e && (this._onUpdate = t)
            }
            return this
        }, l.delay = function(e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
        }, l.duration = function(e) {
            return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, l.totalDuration = function(e) {
            return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
        }, l.time = function(e, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
        }, l.totalTime = function(e, t, n) {
            if (u || c.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > e && !n && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var i = this._totalDuration,
                        r = this._timeline;
                    if (e > i && !n && (e = i), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? i - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (L.length && Z(), this.render(e, t, !1), L.length && Z())
            }
            return this
        }, l.progress = l.totalProgress = function(e, t) {
            var n = this.duration();
            return arguments.length ? this.totalTime(n * e, t) : n ? this._time / n : this.ratio
        }, l.startTime = function(e) {
            return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }, l.endTime = function(e) {
            return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
        }, l.timeScale = function(e) {
            if (!arguments.length) return this._timeScale;
            var t, n;
            for (e = e || d, this._timeline && this._timeline.smoothChildTiming && (n = (t = this._pauseTime) || 0 === t ? t : this._timeline.totalTime(), this._startTime = n - (n - this._startTime) * this._timeScale / e), this._timeScale = e, n = this.timeline; n && n.timeline;) n._dirty = !0, n.totalDuration(), n = n.timeline;
            return this
        }, l.reversed = function(e) {
            return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, l.paused = function(e) {
            if (!arguments.length) return this._paused;
            var t, n, i = this._timeline;
            return e != this._paused && i && (u || e || c.wake(), n = (t = i.rawTime()) - this._pauseTime, !e && i.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && (t = i.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
        };
        var I = b("core.SimpleTimeline", function(e) {
            k.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (l = I.prototype = new k).constructor = I, l.kill()._gc = !1, l._first = l._last = l._recent = null, l._sortChildren = !1, l.add = l.insert = function(e, t, n, i) {
            var r, o;
            if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = this.rawTime() - (e._timeline.rawTime() - e._pauseTime)), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), r = this._last, this._sortChildren)
                for (o = e._startTime; r && r._startTime > o;) r = r._prev;
            return r ? (e._next = r._next, r._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = r, this._recent = e, this._timeline && this._uncache(!0), this
        }, l._remove = function(e, t) {
            return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, l.render = function(e, t, n) {
            var i, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = e; r;) i = r._next, (r._active || e >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, n) : r.render((e - r._startTime) * r._timeScale, t, n)), r = i
        }, l.rawTime = function() {
            return u || c.wake(), this._totalTime
        };
        var N = b("TweenLite", function(t, n, i) {
                if (k.call(this, n, i), this.render = N.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : N.selector(t) || t;
                var r, o, s, a = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? G[N.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l], (a || t instanceof Array || t.push && m(t)) && "number" != typeof t[0])
                    for (this._targets = s = p(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++)(o = s[r]) ? "string" != typeof o ? o.length && o !== e && o[0] && (o[0] === e || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(p(o))) : (this._siblings[r] = J(o, this, !1), 1 === l && this._siblings[r].length > 1 && te(o, this, null, 1, this._siblings[r])) : "string" == typeof(o = s[r--] = N.selector(o)) && s.splice(r + 1, 1) : s.splice(r--, 1);
                else this._propLookup = {}, this._siblings = J(t, this, !1), 1 === l && this._siblings.length > 1 && te(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === n && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -d, this.render(Math.min(0, -this._delay)))
            }, !0),
            R = function(t) {
                return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
            };
        (l = N.prototype = new k).constructor = N, l.kill()._gc = !1, l.ratio = 0, l._firstPT = l._targets = l._overwrittenProps = l._startAt = null, l._notifyPluginsOfEnabled = l._lazy = !1, N.version = "2.1.2", N.defaultEase = l._ease = new x(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = c, N.autoSleep = 120, N.lagSmoothing = function(e, t) {
            c.lagSmoothing(e, t)
        }, N.selector = e.$ || e.jQuery || function(t) {
            var n = e.$ || e.jQuery;
            return n ? (N.selector = n, n(t)) : (i || (i = e.document), i ? i.querySelectorAll ? i.querySelectorAll(t) : i.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
        };
        var L = [],
            M = {},
            F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            j = /[\+-]=-?[\.\d]/,
            q = function(e) {
                for (var t, n = this._firstPT; n;) t = n.blob ? 1 === e && null != this.end ? this.end : e ? this.join("") : this.start : n.c * e + n.s, n.m ? t = n.m.call(this._tween, t, this._target || n.t, this._tween) : 1e-6 > t && t > -1e-6 && !n.blob && (t = 0), n.f ? n.fp ? n.t[n.p](n.fp, t) : n.t[n.p](t) : n.t[n.p] = t, n = n._next
            },
            H = function(e) {
                return (1e3 * e | 0) / 1e3 + ""
            },
            z = function(e, t, n, i) {
                var r, o, s, a, l, c, u, f = [],
                    h = 0,
                    d = "",
                    p = 0;
                for (f.start = e, f.end = t, e = f[0] = e + "", t = f[1] = t + "", n && (n(f), e = f[0], t = f[1]), f.length = 0, r = e.match(F) || [], o = t.match(F) || [], i && (i._next = null, i.blob = 1, f._firstPT = f._applyPT = i), l = o.length, a = 0; l > a; a++) u = o[a], d += (c = t.substr(h, t.indexOf(u, h) - h)) || !a ? c : ",", h += c.length, p ? p = (p + 1) % 5 : "rgba(" === c.substr(-5) && (p = 1), u === r[a] || r.length <= a ? d += u : (d && (f.push(d), d = ""), s = parseFloat(r[a]), f.push(s), f._firstPT = {
                    _next: f._firstPT,
                    t: f,
                    p: f.length - 1,
                    s: s,
                    c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - s) || 0,
                    f: 0,
                    m: p && 4 > p ? Math.round : H
                }), h += u.length;
                return (d += t.substr(h)) && f.push(d), f.setRatio = q, j.test(t) && (f.end = null), f
            },
            B = function(e, t, n, i, r, o, s, a, l) {
                "function" == typeof i && (i = i(l || 0, e));
                var c = typeof e[t],
                    u = "function" !== c ? "" : t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3),
                    f = "get" !== n ? n : u ? s ? e[u](s) : e[u]() : e[t],
                    h = "string" == typeof i && "=" === i.charAt(1),
                    d = {
                        t: e,
                        p: t,
                        s: f,
                        f: "function" === c,
                        pg: 0,
                        n: r || t,
                        m: o ? "function" == typeof o ? o : Math.round : 0,
                        pr: 0,
                        c: h ? parseInt(i.charAt(0) + "1", 10) * parseFloat(i.substr(2)) : parseFloat(i) - f || 0
                    };
                return ("number" != typeof f || "number" != typeof i && !h) && (s || isNaN(f) || !h && isNaN(i) || "boolean" == typeof f || "boolean" == typeof i ? (d.fp = s, d = {
                    t: z(f, h ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : i, a || N.defaultStringFilter, d),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || t,
                    pr: 0,
                    m: 0
                }) : (d.s = parseFloat(f), h || (d.c = parseFloat(i) - d.s || 0))), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
            },
            W = N._internals = {
                isArray: m,
                isSelector: R,
                lazyTweens: L,
                blobDif: z
            },
            X = N._plugins = {},
            U = W.tweenLookup = {},
            Y = 0,
            Q = W.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
            },
            G = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            V = k._rootFramesTimeline = new I,
            $ = k._rootTimeline = new I,
            K = 30,
            Z = W.lazyRender = function() {
                var e, t, n = L.length;
                for (M = {}, e = 0; n > e; e++)(t = L[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                L.length = 0
            };
        $._startTime = c.time, V._startTime = c.frame, $._active = V._active = !0, setTimeout(Z, 1), k._updateRoot = N.render = function() {
            var e, t, n;
            if (L.length && Z(), $.render((c.time - $._startTime) * $._timeScale, !1, !1), V.render((c.frame - V._startTime) * V._timeScale, !1, !1), L.length && Z(), c.frame >= K) {
                for (n in K = c.frame + (parseInt(N.autoSleep, 10) || 120), U) {
                    for (e = (t = U[n].tweens).length; --e > -1;) t[e]._gc && t.splice(e, 1);
                    0 === t.length && delete U[n]
                }
                if ((!(n = $._first) || n._paused) && N.autoSleep && !V._first && 1 === c._listeners.tick.length) {
                    for (; n && n._paused;) n = n._next;
                    n || c.sleep()
                }
            }
        }, c.addEventListener("tick", k._updateRoot);
        var J = function(e, t, n) {
                var i, r, o = e._gsTweenID;
                if (U[o || (e._gsTweenID = o = "t" + Y++)] || (U[o] = {
                        target: e,
                        tweens: []
                    }), t && ((i = U[o].tweens)[r = i.length] = t, n))
                    for (; --r > -1;) i[r] === t && i.splice(r, 1);
                return U[o].tweens
            },
            ee = function(e, t, n, i) {
                var r, o, s = e.vars.onOverwrite;
                return s && (r = s(e, t, n, i)), (s = N.onOverwrite) && (o = s(e, t, n, i)), !1 !== r && !1 !== o
            },
            te = function(e, t, n, i, r) {
                var o, s, a, l;
                if (1 === i || i >= 4) {
                    for (l = r.length, o = 0; l > o; o++)
                        if ((a = r[o]) !== t) a._gc || a._kill(null, e, t) && (s = !0);
                        else if (5 === i) break;
                    return s
                }
                var c, u = t._startTime + d,
                    f = [],
                    h = 0,
                    p = 0 === t._duration;
                for (o = r.length; --o > -1;)(a = r[o]) === t || a._gc || a._paused || (a._timeline !== t._timeline ? (c = c || ne(t, 0, p), 0 === ne(a, c, p) && (f[h++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2 * d || (f[h++] = a)));
                for (o = h; --o > -1;)
                    if (l = (a = f[o])._firstPT, 2 === i && a._kill(n, e, t) && (s = !0), 2 !== i || !a._firstPT && a._initted && l) {
                        if (2 !== i && !ee(a, t)) continue;
                        a._enabled(!1, !1) && (s = !0)
                    } return s
            },
            ne = function(e, t, n) {
                for (var i = e._timeline, r = i._timeScale, o = e._startTime; i._timeline;) {
                    if (o += i._startTime, r *= i._timeScale, i._paused) return -100;
                    i = i._timeline
                }
                return (o /= r) > t ? o - t : n && o === t || !e._initted && 2 * d > o - t ? d : (o += e.totalDuration() / e._timeScale / r) > t + d ? 0 : o - t - d
            };
        l._init = function() {
            var e, t, n, i, r, o, s = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                c = !!s.immediateRender,
                u = s.ease,
                f = this._startAt;
            if (s.startAt) {
                for (i in f && (f.render(-1, !0), f.kill()), r = {}, s.startAt) r[i] = s.startAt[i];
                if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = c && !1 !== s.lazy, r.startAt = r.delay = null, r.onUpdate = s.onUpdate, r.onUpdateParams = s.onUpdateParams, r.onUpdateScope = s.onUpdateScope || s.callbackScope || this, this._startAt = N.to(this.target || {}, 0, r), c)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== l) return
            } else if (s.runBackwards && 0 !== l)
                if (f) f.render(-1, !0), f.kill(), this._startAt = null;
                else {
                    for (i in 0 !== this._time && (c = !1), n = {}, s) Q[i] && "autoCSS" !== i || (n[i] = s[i]);
                    if (n.overwrite = 0, n.data = "isFromStart", n.lazy = c && !1 !== s.lazy, n.immediateRender = c, this._startAt = N.to(this.target, 0, n), c) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                } if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, s.easeParams) : T[u] || N.defaultEase : N.defaultEase, s.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (o = this._targets.length, e = 0; o > e; e++) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null, e) && (t = !0);
            else t = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (t && N._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (n = this._firstPT; n;) n.s += n.c, n.c = -n.c, n = n._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, l._initProps = function(t, n, i, r, o) {
            var s, a, l, c, u, f;
            if (null == t) return !1;
            for (s in M[t._gsTweenID] && Z(), this.vars.css || t.style && t !== e && t.nodeType && X.css && !1 !== this.vars.autoCSS && function(e, t) {
                    var n, i = {};
                    for (n in e) Q[n] || n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n || !(!X[n] || X[n] && X[n]._autoCSS) || (i[n] = e[n], delete e[n]);
                    e.css = i
                }(this.vars, t), this.vars)
                if (f = this.vars[s], Q[s]) f && (f instanceof Array || f.push && m(f)) && -1 !== f.join("").indexOf("{self}") && (this.vars[s] = f = this._swapSelfInParams(f, this));
                else if (X[s] && (c = new X[s])._onInitTween(t, this.vars[s], this, o)) {
                for (this._firstPT = u = {
                        _next: this._firstPT,
                        t: c,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: s,
                        pg: 1,
                        pr: c._priority,
                        m: 0
                    }, a = c._overwriteProps.length; --a > -1;) n[c._overwriteProps[a]] = this._firstPT;
                (c._priority || c._onInitAllProps) && (l = !0), (c._onDisable || c._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u)
            } else n[s] = B.call(this, t, s, "get", f, s, 0, null, this.vars.stringFilter, o);
            return r && this._kill(r, t) ? this._initProps(t, n, i, r, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && te(t, this, n, this._overwrite, i) ? (this._kill(n, t), this._initProps(t, n, i, r, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (M[t._gsTweenID] = !0), l)
        }, l.render = function(e, t, n) {
            var i, r, o, s, a = this,
                l = a._time,
                c = a._duration,
                u = a._rawPrevTime;
            if (e >= c - d && e >= 0) a._totalTime = a._time = c, a.ratio = a._ease._calcEnd ? a._ease.getRatio(1) : 1, a._reversed || (i = !0, r = "onComplete", n = n || a._timeline.autoRemoveChildren), 0 === c && (a._initted || !a.vars.lazy || n) && (a._startTime === a._timeline._duration && (e = 0), (0 > u || 0 >= e && e >= -d || u === d && "isPause" !== a.data) && u !== e && (n = !0, u > d && (r = "onReverseComplete")), a._rawPrevTime = s = !t || e || u === e ? e : d);
            else if (d > e) a._totalTime = a._time = 0, a.ratio = a._ease._calcEnd ? a._ease.getRatio(0) : 0, (0 !== l || 0 === c && u > 0) && (r = "onReverseComplete", i = a._reversed), e > -d ? e = 0 : 0 > e && (a._active = !1, 0 === c && (a._initted || !a.vars.lazy || n) && (u >= 0 && (u !== d || "isPause" !== a.data) && (n = !0), a._rawPrevTime = s = !t || e || u === e ? e : d)), (!a._initted || a._startAt && a._startAt.progress()) && (n = !0);
            else if (a._totalTime = a._time = e, a._easeType) {
                var f = e / c,
                    h = a._easeType,
                    p = a._easePower;
                (1 === h || 3 === h && f >= .5) && (f = 1 - f), 3 === h && (f *= 2), 1 === p ? f *= f : 2 === p ? f *= f * f : 3 === p ? f *= f * f * f : 4 === p && (f *= f * f * f * f), a.ratio = 1 === h ? 1 - f : 2 === h ? f : .5 > e / c ? f / 2 : 1 - f / 2
            } else a.ratio = a._ease.getRatio(e / c);
            if (a._time !== l || n) {
                if (!a._initted) {
                    if (a._init(), !a._initted || a._gc) return;
                    if (!n && a._firstPT && (!1 !== a.vars.lazy && a._duration || a.vars.lazy && !a._duration)) return a._time = a._totalTime = l, a._rawPrevTime = u, L.push(a), void(a._lazy = [e, t]);
                    a._time && !i ? a.ratio = a._ease.getRatio(a._time / c) : i && a._ease._calcEnd && (a.ratio = a._ease.getRatio(0 === a._time ? 0 : 1))
                }
                for (!1 !== a._lazy && (a._lazy = !1), a._active || !a._paused && a._time !== l && e >= 0 && (a._active = !0), 0 === l && (a._startAt && (e >= 0 ? a._startAt.render(e, !0, n) : r || (r = "_dummyGS")), a.vars.onStart && (0 !== a._time || 0 === c) && (t || a._callback("onStart"))), o = a._firstPT; o;) o.f ? o.t[o.p](o.c * a.ratio + o.s) : o.t[o.p] = o.c * a.ratio + o.s, o = o._next;
                a._onUpdate && (0 > e && a._startAt && -1e-4 !== e && a._startAt.render(e, !0, n), t || (a._time !== l || i || n) && a._callback("onUpdate")), r && (!a._gc || n) && (0 > e && a._startAt && !a._onUpdate && -1e-4 !== e && a._startAt.render(e, !0, n), i && (a._timeline.autoRemoveChildren && a._enabled(!1, !1), a._active = !1), !t && a.vars[r] && a._callback(r), 0 === c && a._rawPrevTime === d && s !== d && (a._rawPrevTime = 0))
            }
        }, l._kill = function(e, t, n) {
            if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            t = "string" != typeof t ? t || this._targets || this.target : N.selector(t) || t;
            var i, r, o, s, a, l, c, u, f, h = n && this._time && n._startTime === this._startTime && this._timeline === n._timeline,
                d = this._firstPT;
            if ((m(t) || R(t)) && "number" != typeof t[0])
                for (i = t.length; --i > -1;) this._kill(e, t[i], n) && (l = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1;)
                        if (t === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (t !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (c = e || a, u = e !== r && "all" !== r && e !== a && ("object" != typeof e || !e._tempKill), n && (N.onOverwrite || this.vars.onOverwrite)) {
                        for (o in c) a[o] && (f || (f = []), f.push(o));
                        if ((f || !e) && !ee(this, n, t, f)) return !1
                    }
                    for (o in c)(s = a[o]) && (h && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(c) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), u && (r[o] = 1);
                    !this._firstPT && this._initted && d && this._enabled(!1, !1)
                }
            }
            return l
        }, l.invalidate = function() {
            this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this);
            var e = this._time;
            return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], k.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -d, this.render(e, !1, !1 !== this.vars.lazy)), this
        }, l._enabled = function(e, t) {
            if (u || c.wake(), e && this._gc) {
                var n, i = this._targets;
                if (i)
                    for (n = i.length; --n > -1;) this._siblings[n] = J(i[n], this, !0);
                else this._siblings = J(this.target, this, !0)
            }
            return k.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
        }, N.to = function(e, t, n) {
            return new N(e, t, n)
        }, N.from = function(e, t, n) {
            return n.runBackwards = !0, n.immediateRender = 0 != n.immediateRender, new N(e, t, n)
        }, N.fromTo = function(e, t, n, i) {
            return i.startAt = n, i.immediateRender = 0 != i.immediateRender && 0 != n.immediateRender, new N(e, t, i)
        }, N.delayedCall = function(e, t, n, i, r) {
            return new N(t, 0, {
                delay: e,
                onComplete: t,
                onCompleteParams: n,
                callbackScope: i,
                onReverseComplete: t,
                onReverseCompleteParams: n,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, N.set = function(e, t) {
            return new N(e, 0, t)
        }, N.getTweensOf = function(e, t) {
            if (null == e) return [];
            var n, i, r, o;
            if (e = "string" != typeof e ? e : N.selector(e) || e, (m(e) || R(e)) && "number" != typeof e[0]) {
                for (n = e.length, i = []; --n > -1;) i = i.concat(N.getTweensOf(e[n], t));
                for (n = i.length; --n > -1;)
                    for (o = i[n], r = n; --r > -1;) o === i[r] && i.splice(n, 1)
            } else if (e._gsTweenID)
                for (n = (i = J(e).concat()).length; --n > -1;)(i[n]._gc || t && !i[n].isActive()) && i.splice(n, 1);
            return i || []
        }, N.killTweensOf = N.killDelayedCallsTo = function(e, t, n) {
            "object" == typeof t && (n = t, t = !1);
            for (var i = N.getTweensOf(e, t), r = i.length; --r > -1;) i[r]._kill(n, e)
        };
        var ie = b("plugins.TweenPlugin", function(e, t) {
            this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ie.prototype
        }, !0);
        if (l = ie.prototype, ie.version = "1.19.0", ie.API = 2, l._firstPT = null, l._addTween = B, l.setRatio = q, l._kill = function(e) {
                var t, n = this._overwriteProps,
                    i = this._firstPT;
                if (null != e[this._propName]) this._overwriteProps = [];
                else
                    for (t = n.length; --t > -1;) null != e[n[t]] && n.splice(t, 1);
                for (; i;) null != e[i.n] && (i._next && (i._next._prev = i._prev), i._prev ? (i._prev._next = i._next, i._prev = null) : this._firstPT === i && (this._firstPT = i._next)), i = i._next;
                return !1
            }, l._mod = l._roundProps = function(e) {
                for (var t, n = this._firstPT; n;)(t = e[this._propName] || null != n.n && e[n.n.split(this._propName + "_").join("")]) && "function" == typeof t && (2 === n.f ? n.t._applyPT.m = t : n.m = t), n = n._next
            }, N._onPluginEvent = function(e, t) {
                var n, i, r, o, s, a = t._firstPT;
                if ("_onInitAllProps" === e) {
                    for (; a;) {
                        for (s = a._next, i = r; i && i.pr > a.pr;) i = i._next;
                        (a._prev = i ? i._prev : o) ? a._prev._next = a: r = a, (a._next = i) ? i._prev = a : o = a, a = s
                    }
                    a = t._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[e] && a.t[e]() && (n = !0), a = a._next;
                return n
            }, ie.activate = function(e) {
                for (var t = e.length; --t > -1;) e[t].API === ie.API && (X[(new e[t])._propName] = e[t]);
                return !0
            }, y.plugin = function(e) {
                if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                var t, n = e.propName,
                    i = e.priority || 0,
                    r = e.overwriteProps,
                    o = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_mod",
                        mod: "_mod",
                        initAll: "_onInitAllProps"
                    },
                    s = b("plugins." + n.charAt(0).toUpperCase() + n.substr(1) + "Plugin", function() {
                        ie.call(this, n, i), this._overwriteProps = r || []
                    }, !0 === e.global),
                    a = s.prototype = new ie(n);
                for (t in a.constructor = s, s.API = e.API, o) "function" == typeof e[t] && (a[o[t]] = e[t]);
                return s.version = e.version, ie.activate([s]), s
            }, s = e._gsQueue) {
            for (a = 0; a < s.length; a++) s[a]();
            for (l in _) _[l].func || e.console.log("GSAP encountered missing dependency: " + l)
        }
        u = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(e, t) {
        "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.ScrollMagic = t()
    }(this, function() {
        "use strict";
        var e = function() {};
        e.version = "2.0.5", window.addEventListener("mousewheel", function() {});
        var t = "data-scrollmagic-pin-spacer";
        e.Controller = function(i) {
            var o, s, a = "REVERSE",
                l = "PAUSED",
                c = n.defaults,
                u = this,
                f = r.extend({}, c, i),
                h = [],
                d = !1,
                p = 0,
                g = l,
                m = !0,
                _ = 0,
                v = !0,
                y = function() {
                    f.refreshInterval > 0 && (s = window.setTimeout(E, f.refreshInterval))
                },
                b = function() {
                    return f.vertical ? r.get.scrollTop(f.container) : r.get.scrollLeft(f.container)
                },
                w = function() {
                    return f.vertical ? r.get.height(f.container) : r.get.width(f.container)
                },
                x = this._setScrollPos = function(e) {
                    f.vertical ? m ? window.scrollTo(r.get.scrollLeft(), e) : f.container.scrollTop = e : m ? window.scrollTo(e, r.get.scrollTop()) : f.container.scrollLeft = e
                },
                T = function() {
                    if (v && d) {
                        var e = r.type.Array(d) ? d : h.slice(0);
                        d = !1;
                        var t = p,
                            n = (p = u.scrollPos()) - t;
                        0 !== n && (g = n > 0 ? "FORWARD" : a), g === a && e.reverse(), e.forEach(function(e) {
                            e.update(!0)
                        })
                    }
                },
                C = function() {
                    o = r.rAF(T)
                },
                S = function(e) {
                    "resize" == e.type && (_ = w(), g = l), !0 !== d && (d = !0, C())
                },
                E = function() {
                    if (!m && _ != w()) {
                        var e;
                        try {
                            e = new Event("resize", {
                                bubbles: !1,
                                cancelable: !1
                            })
                        } catch (t) {
                            (e = document.createEvent("Event")).initEvent("resize", !1, !1)
                        }
                        f.container.dispatchEvent(e)
                    }
                    h.forEach(function(e) {
                        e.refresh()
                    }), y()
                };
            this._options = f;
            var P = function(e) {
                if (e.length <= 1) return e;
                var t = e.slice(0);
                return t.sort(function(e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1
                }), t
            };
            return this.addScene = function(t) {
                    if (r.type.Array(t)) t.forEach(function(e) {
                        u.addScene(e)
                    });
                    else if (t instanceof e.Scene)
                        if (t.controller() !== u) t.addTo(u);
                        else if (h.indexOf(t) < 0)
                        for (var n in h.push(t), h = P(h), t.on("shift.controller_sort", function() {
                                h = P(h)
                            }), f.globalSceneOptions) t[n] && t[n].call(t, f.globalSceneOptions[n]);
                    return u
                }, this.removeScene = function(e) {
                    if (r.type.Array(e)) e.forEach(function(e) {
                        u.removeScene(e)
                    });
                    else {
                        var t = h.indexOf(e);
                        t > -1 && (e.off("shift.controller_sort"), h.splice(t, 1), e.remove())
                    }
                    return u
                }, this.updateScene = function(t, n) {
                    return r.type.Array(t) ? t.forEach(function(e) {
                        u.updateScene(e, n)
                    }) : n ? t.update(!0) : !0 !== d && t instanceof e.Scene && (-1 == (d = d || []).indexOf(t) && d.push(t), d = P(d), C()), u
                }, this.update = function(e) {
                    return S({
                        type: "resize"
                    }), e && T(), u
                }, this.scrollTo = function(n, i) {
                    if (r.type.Number(n)) x.call(f.container, n, i);
                    else if (n instanceof e.Scene) n.controller() === u && u.scrollTo(n.scrollOffset(), i);
                    else if (r.type.Function(n)) x = n;
                    else {
                        var o = r.get.elements(n)[0];
                        if (o) {
                            for (; o.parentNode.hasAttribute(t);) o = o.parentNode;
                            var s = f.vertical ? "top" : "left",
                                a = r.get.offset(f.container),
                                l = r.get.offset(o);
                            m || (a[s] -= u.scrollPos()), u.scrollTo(l[s] - a[s], i)
                        }
                    }
                    return u
                }, this.scrollPos = function(e) {
                    return arguments.length ? (r.type.Function(e) && (b = e), u) : b.call(u)
                }, this.info = function(e) {
                    var t = {
                        size: _,
                        vertical: f.vertical,
                        scrollPos: p,
                        scrollDirection: g,
                        container: f.container,
                        isDocument: m
                    };
                    return arguments.length ? void 0 !== t[e] ? t[e] : void 0 : t
                }, this.loglevel = function() {
                    return u
                }, this.enabled = function(e) {
                    return arguments.length ? (v != e && (v = !!e, u.updateScene(h, !0)), u) : v
                }, this.destroy = function(e) {
                    window.clearTimeout(s);
                    for (var t = h.length; t--;) h[t].destroy(e);
                    return f.container.removeEventListener("resize", S), f.container.removeEventListener("scroll", S), r.cAF(o), null
                },
                function() {
                    for (var e in f) c.hasOwnProperty(e) || delete f[e];
                    if (f.container = r.get.elements(f.container)[0], !f.container) throw "ScrollMagic.Controller init failed.";
                    (m = f.container === window || f.container === document.body || !document.body.contains(f.container)) && (f.container = window), _ = w(), f.container.addEventListener("resize", S), f.container.addEventListener("scroll", S), f.refreshInterval = parseInt(f.refreshInterval) || c.refreshInterval, y()
                }(), u
        };
        var n = {
            defaults: {
                container: window,
                vertical: !0,
                globalSceneOptions: {},
                loglevel: 2,
                refreshInterval: 100
            }
        };
        e.Controller.addOption = function(e, t) {
            n.defaults[e] = t
        }, e.Controller.extend = function(t) {
            var n = this;
            e.Controller = function() {
                return n.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
            }, r.extend(e.Controller, n), e.Controller.prototype = n.prototype, e.Controller.prototype.constructor = e.Controller
        }, e.Scene = function(n) {
            var o, s, a = "BEFORE",
                l = "DURING",
                c = "AFTER",
                u = i.defaults,
                f = this,
                h = r.extend({}, u, n),
                d = a,
                p = 0,
                g = {
                    start: 0,
                    end: 0
                },
                m = 0,
                _ = !0,
                v = {};
            this.on = function(e, t) {
                return r.type.Function(t) && (e = e.trim().split(" ")).forEach(function(e) {
                    var n = e.split("."),
                        i = n[0],
                        r = n[1];
                    "*" != i && (v[i] || (v[i] = []), v[i].push({
                        namespace: r || "",
                        callback: t
                    }))
                }), f
            }, this.off = function(e, t) {
                return e ? ((e = e.trim().split(" ")).forEach(function(e) {
                    var n = e.split("."),
                        i = n[0],
                        r = n[1] || "";
                    ("*" === i ? Object.keys(v) : [i]).forEach(function(e) {
                        for (var n = v[e] || [], i = n.length; i--;) {
                            var o = n[i];
                            !o || r !== o.namespace && "*" !== r || t && t != o.callback || n.splice(i, 1)
                        }
                        n.length || delete v[e]
                    })
                }), f) : f
            }, this.trigger = function(t, n) {
                if (t) {
                    var i = t.trim().split("."),
                        r = i[0],
                        o = i[1],
                        s = v[r];
                    s && s.forEach(function(t) {
                        o && o !== t.namespace || t.callback.call(f, new e.Event(r, t.namespace, f, n))
                    })
                }
                return f
            }, f.on("change.internal", function(e) {
                "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? T() : "reverse" === e.what && f.update())
            }).on("shift.internal", function() {
                w(), f.update()
            }), this.addTo = function(t) {
                return t instanceof e.Controller && s != t && (s && s.removeScene(f), s = t, E(), x(!0), T(!0), w(), s.info("container").addEventListener("resize", C), t.addScene(f), f.trigger("add", {
                    controller: s
                }), f.update()), f
            }, this.enabled = function(e) {
                return arguments.length ? (_ != e && (_ = !!e, f.update(!0)), f) : _
            }, this.remove = function() {
                if (s) {
                    s.info("container").removeEventListener("resize", C);
                    var e = s;
                    s = void 0, e.removeScene(f), f.trigger("remove")
                }
                return f
            }, this.destroy = function(e) {
                return f.trigger("destroy", {
                    reset: e
                }), f.remove(), f.off("*.*"), null
            }, this.update = function(e) {
                if (s)
                    if (e)
                        if (s.enabled() && _) {
                            var t, n = s.info("scrollPos");
                            t = h.duration > 0 ? (n - g.start) / (g.end - g.start) : n >= g.start ? 1 : 0, f.trigger("update", {
                                startPos: g.start,
                                endPos: g.end,
                                scrollPos: n
                            }), f.progress(t)
                        } else y && d === l && O(!0);
                else s.updateScene(f, !1);
                return f
            }, this.refresh = function() {
                return x(), T(), f
            }, this.progress = function(e) {
                if (arguments.length) {
                    var t = !1,
                        n = d,
                        i = s ? s.info("scrollDirection") : "PAUSED",
                        r = h.reverse || e >= p;
                    if (0 === h.duration ? (t = p != e, d = 0 === (p = 1 > e && r ? 0 : 1) ? a : l) : 0 > e && d !== a && r ? (p = 0, d = a, t = !0) : e >= 0 && 1 > e && r ? (p = e, d = l, t = !0) : e >= 1 && d !== c ? (p = 1, d = c, t = !0) : d !== l || r || O(), t) {
                        var o = {
                                progress: p,
                                state: d,
                                scrollDirection: i
                            },
                            u = d != n,
                            g = function(e) {
                                f.trigger(e, o)
                            };
                        u && n !== l && (g("enter"), g(n === a ? "start" : "end")), g("progress"), u && d !== l && (g(d === a ? "start" : "end"), g("leave"))
                    }
                    return f
                }
                return p
            };
            var y, b, w = function() {
                    g = {
                        start: m + h.offset
                    }, s && h.triggerElement && (g.start -= s.info("size") * h.triggerHook), g.end = g.start + h.duration
                },
                x = function(e) {
                    if (o) {
                        var t = "duration";
                        P(t, o.call(f)) && !e && (f.trigger("change", {
                            what: t,
                            newval: h[t]
                        }), f.trigger("shift", {
                            reason: t
                        }))
                    }
                },
                T = function(e) {
                    var n = 0,
                        i = h.triggerElement;
                    if (s && i) {
                        for (var o = s.info(), a = r.get.offset(o.container), l = o.vertical ? "top" : "left"; i.parentNode.hasAttribute(t);) i = i.parentNode;
                        var c = r.get.offset(i);
                        o.isDocument || (a[l] -= s.scrollPos()), n = c[l] - a[l]
                    }
                    var u = n != m;
                    m = n, u && !e && f.trigger("shift", {
                        reason: "triggerElementPosition"
                    })
                },
                C = function() {
                    h.triggerHook > 0 && f.trigger("shift", {
                        reason: "containerResize"
                    })
                },
                S = r.extend(i.validate, {
                    duration: function(e) {
                        if (r.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function() {
                                return s ? s.info("size") * t : 0
                            }
                        }
                        if (r.type.Function(e)) {
                            o = e;
                            try {
                                e = parseFloat(o())
                            } catch (t) {
                                e = -1
                            }
                        }
                        if (e = parseFloat(e), !r.type.Number(e) || 0 > e) throw o ? (o = void 0, 0) : 0;
                        return e
                    }
                }),
                E = function(e) {
                    (e = arguments.length ? [e] : Object.keys(S)).forEach(function(e) {
                        var t;
                        if (S[e]) try {
                            t = S[e](h[e])
                        } catch (n) {
                            t = u[e]
                        } finally {
                            h[e] = t
                        }
                    })
                },
                P = function(e, t) {
                    var n = !1,
                        i = h[e];
                    return h[e] != t && (h[e] = t, E(e), n = i != h[e]), n
                },
                A = function(e) {
                    f[e] || (f[e] = function(t) {
                        return arguments.length ? ("duration" === e && (o = void 0), P(e, t) && (f.trigger("change", {
                            what: e,
                            newval: h[e]
                        }), i.shifts.indexOf(e) > -1 && f.trigger("shift", {
                            reason: e
                        })), f) : h[e]
                    })
                };
            this.controller = function() {
                return s
            }, this.state = function() {
                return d
            }, this.scrollOffset = function() {
                return g.start
            }, this.triggerPosition = function() {
                var e = h.offset;
                return s && (e += h.triggerElement ? m : s.info("size") * f.triggerHook()), e
            }, f.on("shift.internal", function(e) {
                var t = "duration" === e.reason;
                (d === c && t || d === l && 0 === h.duration) && O(), t && k()
            }).on("progress.internal", function() {
                O()
            }).on("add.internal", function() {
                k()
            }).on("destroy.internal", function(e) {
                f.removePin(e.reset)
            });
            var O = function(e) {
                    if (y && s) {
                        var t = s.info(),
                            n = b.spacer.firstChild;
                        if (e || d !== l) {
                            var i = {
                                    position: b.inFlow ? "relative" : "absolute",
                                    top: 0,
                                    left: 0
                                },
                                o = r.css(n, "position") != i.position;
                            b.pushFollowers ? h.duration > 0 && (d === c && 0 === parseFloat(r.css(b.spacer, "padding-top")) ? o = !0 : d === a && 0 === parseFloat(r.css(b.spacer, "padding-bottom")) && (o = !0)) : i[t.vertical ? "top" : "left"] = h.duration * p, r.css(n, i), o && k()
                        } else {
                            "fixed" != r.css(n, "position") && (r.css(n, {
                                position: "fixed"
                            }), k());
                            var u = r.get.offset(b.spacer, !0),
                                f = h.reverse || 0 === h.duration ? t.scrollPos - g.start : Math.round(p * h.duration * 10) / 10;
                            u[t.vertical ? "top" : "left"] += f, r.css(b.spacer.firstChild, {
                                top: u.top,
                                left: u.left
                            })
                        }
                    }
                },
                k = function() {
                    if (y && s && b.inFlow) {
                        var e = d === l,
                            t = s.info("vertical"),
                            n = b.spacer.firstChild,
                            i = r.isMarginCollapseType(r.css(b.spacer, "display")),
                            o = {};
                        b.relSize.width || b.relSize.autoFullWidth ? e ? r.css(y, {
                            width: r.get.width(b.spacer)
                        }) : r.css(y, {
                            width: "100%"
                        }) : (o["min-width"] = r.get.width(t ? y : n, !0, !0), o.width = e ? o["min-width"] : "auto"), b.relSize.height ? e ? r.css(y, {
                            height: r.get.height(b.spacer) - (b.pushFollowers ? h.duration : 0)
                        }) : r.css(y, {
                            height: "100%"
                        }) : (o["min-height"] = r.get.height(t ? n : y, !0, !i), o.height = e ? o["min-height"] : "auto"), b.pushFollowers && (o["padding" + (t ? "Top" : "Left")] = h.duration * p, o["padding" + (t ? "Bottom" : "Right")] = h.duration * (1 - p)), r.css(b.spacer, o)
                    }
                },
                D = function() {
                    s && y && d === l && !s.info("isDocument") && O()
                },
                I = function() {
                    s && y && d === l && ((b.relSize.width || b.relSize.autoFullWidth) && r.get.width(window) != r.get.width(b.spacer.parentNode) || b.relSize.height && r.get.height(window) != r.get.height(b.spacer.parentNode)) && k()
                },
                N = function(e) {
                    s && y && d === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)))
                };
            this.setPin = function(e, n) {
                if (n = r.extend({}, {
                        pushFollowers: !0,
                        spacerClass: "scrollmagic-pin-spacer"
                    }, n), !(e = r.get.elements(e)[0])) return f;
                if ("fixed" === r.css(e, "position")) return f;
                if (y) {
                    if (y === e) return f;
                    f.removePin()
                }
                var i = (y = e).parentNode.style.display,
                    o = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                y.parentNode.style.display = "none";
                var s = "absolute" != r.css(y, "position"),
                    a = r.css(y, o.concat(["display"])),
                    l = r.css(y, ["width", "height"]);
                y.parentNode.style.display = i, !s && n.pushFollowers && (n.pushFollowers = !1);
                var c = y.parentNode.insertBefore(document.createElement("div"), y),
                    u = r.extend(a, {
                        position: s ? "relative" : "absolute",
                        boxSizing: "content-box",
                        mozBoxSizing: "content-box",
                        webkitBoxSizing: "content-box"
                    });
                if (s || r.extend(u, r.css(y, ["width", "height"])), r.css(c, u), c.setAttribute(t, ""), r.addClass(c, n.spacerClass), b = {
                        spacer: c,
                        relSize: {
                            width: "%" === l.width.slice(-1),
                            height: "%" === l.height.slice(-1),
                            autoFullWidth: "auto" === l.width && s && r.isMarginCollapseType(a.display)
                        },
                        pushFollowers: n.pushFollowers,
                        inFlow: s
                    }, !y.___origStyle) {
                    y.___origStyle = {};
                    var h = y.style;
                    o.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach(function(e) {
                        y.___origStyle[e] = h[e] || ""
                    })
                }
                return b.relSize.width && r.css(c, {
                    width: l.width
                }), b.relSize.height && r.css(c, {
                    height: l.height
                }), c.appendChild(y), r.css(y, {
                    position: s ? "relative" : "absolute",
                    margin: "auto",
                    top: "auto",
                    left: "auto",
                    bottom: "auto",
                    right: "auto"
                }), (b.relSize.width || b.relSize.autoFullWidth) && r.css(y, {
                    boxSizing: "border-box",
                    mozBoxSizing: "border-box",
                    webkitBoxSizing: "border-box"
                }), window.addEventListener("scroll", D), window.addEventListener("resize", D), window.addEventListener("resize", I), y.addEventListener("mousewheel", N), y.addEventListener("DOMMouseScroll", N), O(), f
            }, this.removePin = function(e) {
                if (y) {
                    if (d === l && O(!0), e || !s) {
                        var n = b.spacer.firstChild;
                        if (n.hasAttribute(t)) {
                            var i = b.spacer.style;
                            margins = {}, ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach(function(e) {
                                margins[e] = i[e] || ""
                            }), r.css(n, margins)
                        }
                        b.spacer.parentNode.insertBefore(n, b.spacer), b.spacer.parentNode.removeChild(b.spacer), y.parentNode.hasAttribute(t) || (r.css(y, y.___origStyle), delete y.___origStyle)
                    }
                    window.removeEventListener("scroll", D), window.removeEventListener("resize", D), window.removeEventListener("resize", I), y.removeEventListener("mousewheel", N), y.removeEventListener("DOMMouseScroll", N), y = void 0
                }
                return f
            };
            var R, L = [];
            return f.on("destroy.internal", function(e) {
                    f.removeClassToggle(e.reset)
                }), this.setClassToggle = function(e, t) {
                    var n = r.get.elements(e);
                    return 0 !== n.length && r.type.String(t) ? (L.length > 0 && f.removeClassToggle(), R = t, L = n, f.on("enter.internal_class leave.internal_class", function(e) {
                        var t = "enter" === e.type ? r.addClass : r.removeClass;
                        L.forEach(function(e) {
                            t(e, R)
                        })
                    }), f) : f
                }, this.removeClassToggle = function(e) {
                    return e && L.forEach(function(e) {
                        r.removeClass(e, R)
                    }), f.off("start.internal_class end.internal_class"), R = void 0, L = [], f
                },
                function() {
                    for (var e in h) u.hasOwnProperty(e) || delete h[e];
                    for (var t in u) A(t);
                    E()
                }(), f
        };
        var i = {
            defaults: {
                duration: 0,
                offset: 0,
                triggerElement: void 0,
                triggerHook: .5,
                reverse: !0,
                loglevel: 2
            },
            validate: {
                offset: function(e) {
                    if (e = parseFloat(e), !r.type.Number(e)) throw 0;
                    return e
                },
                triggerElement: function(e) {
                    if (e = e || void 0) {
                        var t = r.get.elements(e)[0];
                        if (!t) throw 0;
                        e = t
                    }
                    return e
                },
                triggerHook: function(e) {
                    var t = {
                        onCenter: .5,
                        onEnter: 1,
                        onLeave: 0
                    };
                    if (r.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                    else {
                        if (!(e in t)) throw 0;
                        e = t[e]
                    }
                    return e
                },
                reverse: function(e) {
                    return !!e
                }
            },
            shifts: ["duration", "offset", "triggerHook"]
        };
        e.Scene.addOption = function(e, t, n, r) {
            e in i.defaults || (i.defaults[e] = t, i.validate[e] = n, r && i.shifts.push(e))
        }, e.Scene.extend = function(t) {
            var n = this;
            e.Scene = function() {
                return n.apply(this, arguments), this.$super = r.extend({}, this), t.apply(this, arguments) || this
            }, r.extend(e.Scene, n), e.Scene.prototype = n.prototype, e.Scene.prototype.constructor = e.Scene
        }, e.Event = function(e, t, n, i) {
            for (var r in i = i || {}) this[r] = i[r];
            return this.type = e, this.target = this.currentTarget = n, this.namespace = t || "", this.timeStamp = this.timestamp = Date.now(), this
        };
        var r = e._util = function(e) {
            var t, n = {},
                i = function(e) {
                    return parseFloat(e) || 0
                },
                r = function(t) {
                    return t.currentStyle ? t.currentStyle : e.getComputedStyle(t)
                },
                o = function(t, n, o, s) {
                    if ((n = n === document ? e : n) === e) s = !1;
                    else if (!f.DomElement(n)) return 0;
                    t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                    var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                    if (o && s) {
                        var l = r(n);
                        a += "Height" === t ? i(l.marginTop) + i(l.marginBottom) : i(l.marginLeft) + i(l.marginRight)
                    }
                    return a
                },
                s = function(e) {
                    return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function(e) {
                        return e[1].toUpperCase()
                    })
                };
            n.extend = function(e) {
                for (e = e || {}, t = 1; t < arguments.length; t++)
                    if (arguments[t])
                        for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
                return e
            }, n.isMarginCollapseType = function(e) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1
            };
            var a = 0,
                l = ["ms", "moz", "webkit", "o"],
                c = e.requestAnimationFrame,
                u = e.cancelAnimationFrame;
            for (t = 0; !c && t < l.length; ++t) c = e[l[t] + "RequestAnimationFrame"], u = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"];
            c || (c = function(t) {
                var n = (new Date).getTime(),
                    i = Math.max(0, 16 - (n - a)),
                    r = e.setTimeout(function() {
                        t(n + i)
                    }, i);
                return a = n + i, r
            }), u || (u = function(t) {
                e.clearTimeout(t)
            }), n.rAF = c.bind(e), n.cAF = u.bind(e);
            var f = n.type = function(e) {
                return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            };
            f.String = function(e) {
                return "string" === f(e)
            }, f.Function = function(e) {
                return "function" === f(e)
            }, f.Array = function(e) {
                return Array.isArray(e)
            }, f.Number = function(e) {
                return !f.Array(e) && e - parseFloat(e) + 1 >= 0
            }, f.DomElement = function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
            };
            var h = n.get = {};
            return h.elements = function(t) {
                var n = [];
                if (f.String(t)) try {
                    t = document.querySelectorAll(t)
                } catch (e) {
                    return n
                }
                if ("nodelist" === f(t) || f.Array(t))
                    for (var i = 0, r = n.length = t.length; r > i; i++) {
                        var o = t[i];
                        n[i] = f.DomElement(o) ? o : h.elements(o)
                    } else(f.DomElement(t) || t === document || t === e) && (n = [t]);
                return n
            }, h.scrollTop = function(t) {
                return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0
            }, h.scrollLeft = function(t) {
                return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0
            }, h.width = function(e, t, n) {
                return o("width", e, t, n)
            }, h.height = function(e, t, n) {
                return o("height", e, t, n)
            }, h.offset = function(e, t) {
                var n = {
                    top: 0,
                    left: 0
                };
                if (e && e.getBoundingClientRect) {
                    var i = e.getBoundingClientRect();
                    n.top = i.top, n.left = i.left, t || (n.top += h.scrollTop(), n.left += h.scrollLeft())
                }
                return n
            }, n.addClass = function(e, t) {
                t && (e.classList ? e.classList.add(t) : e.className += " " + t)
            }, n.removeClass = function(e, t) {
                t && (e.classList ? e.classList.remove(t) : e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }, n.css = function(e, t) {
                if (f.String(t)) return r(e)[s(t)];
                if (f.Array(t)) {
                    var n = {},
                        i = r(e);
                    return t.forEach(function(e) {
                        n[e] = i[s(e)]
                    }), n
                }
                for (var o in t) {
                    var a = t[o];
                    a == parseFloat(a) && (a += "px"), e.style[s(o)] = a
                }
            }, n
        }(window || {});
        return e
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic"], t) : t("object" == typeof exports ? require("scrollmagic") : e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic)
    }(this, function(e) {
        "use strict";
        var t = "0.85em",
            n = "9999",
            i = e._util,
            r = 0;
        e.Scene.extend(function() {
            var e, t = this;
            t.addIndicators = function(n) {
                if (!e) {
                    n = i.extend({}, {
                        name: "",
                        indent: 0,
                        parent: void 0,
                        colorStart: "green",
                        colorEnd: "red",
                        colorTrigger: "blue"
                    }, n), r++, e = new o(t, n), t.on("add.plugin_addIndicators", e.add), t.on("remove.plugin_addIndicators", e.remove), t.on("destroy.plugin_addIndicators", t.removeIndicators), t.controller() && e.add()
                }
                return t
            }, t.removeIndicators = function() {
                return e && (e.remove(), this.off("*.plugin_addIndicators"), e = void 0), t
            }
        }), e.Controller.addOption("addIndicators", !1), e.Controller.extend(function() {
            var t = this,
                n = t.info(),
                r = n.container,
                o = n.isDocument,
                s = n.vertical,
                a = {
                    groups: []
                };
            this._indicators = a;
            var l = function() {
                    a.updateBoundsPositions()
                },
                c = function() {
                    a.updateTriggerGroupPositions()
                };
            return r.addEventListener("resize", c), o || (window.addEventListener("resize", c), window.addEventListener("scroll", c)), r.addEventListener("resize", l), r.addEventListener("scroll", l), this._indicators.updateBoundsPositions = function(e) {
                for (var t, n, o, l = e ? [i.extend({}, e.triggerGroup, {
                        members: [e]
                    })] : a.groups, c = l.length, u = {}, f = s ? "left" : "top", h = s ? "width" : "height", d = s ? i.get.scrollLeft(r) + i.get.width(r) - 15 : i.get.scrollTop(r) + i.get.height(r) - 15; c--;)
                    for (t = (o = l[c]).members.length, n = i.get[h](o.element.firstChild); t--;) u[f] = d - n, i.css(o.members[t].bounds, u)
            }, this._indicators.updateTriggerGroupPositions = function(e) {
                for (var n, l, c, u, f = e ? [e] : a.groups, h = f.length, d = o ? document.body : r, p = o ? {
                        top: 0,
                        left: 0
                    } : i.get.offset(d, !0), g = s ? i.get.width(r) - 15 : i.get.height(r) - 15, m = s ? "width" : "height", _ = s ? "Y" : "X"; h--;) l = (n = f[h]).element, u = (c = n.triggerHook * t.info("size")) > i.get[m](l.firstChild.firstChild) ? "translate" + _ + "(-100%)" : "", i.css(l, {
                    top: p.top + (s ? c : g - n.members[0].options.indent),
                    left: p.left + (s ? g - n.members[0].options.indent : c)
                }), i.css(l.firstChild.firstChild, {
                    "-ms-transform": u,
                    "-webkit-transform": u,
                    transform: u
                })
            }, this._indicators.updateTriggerGroupLabel = function(e) {
                var t = "trigger" + (e.members.length > 1 ? "" : " " + e.members[0].options.name),
                    n = e.element.firstChild.firstChild;
                n.textContent !== t && (n.textContent = t, s && a.updateBoundsPositions())
            }, this.addScene = function(n) {
                this._options.addIndicators && n instanceof e.Scene && n.controller() === t && n.addIndicators(), this.$super.addScene.apply(this, arguments)
            }, this.destroy = function() {
                r.removeEventListener("resize", c), o || (window.removeEventListener("resize", c), window.removeEventListener("scroll", c)), r.removeEventListener("resize", l), r.removeEventListener("scroll", l), this.$super.destroy.apply(this, arguments)
            }, t
        });
        var o = function(e, t) {
                var n, o, a = this,
                    l = s.bounds(),
                    c = s.start(t.colorStart),
                    u = s.end(t.colorEnd),
                    f = t.parent && i.get.elements(t.parent)[0];
                t.name = t.name || r, c.firstChild.textContent += " " + t.name, u.textContent += " " + t.name, l.appendChild(c), l.appendChild(u), a.options = t, a.bounds = l, a.triggerGroup = void 0, this.add = function() {
                    o = e.controller(), n = o.info("vertical");
                    var t = o.info("isDocument");
                    f || (f = t ? document.body : o.info("container")), t || "static" !== i.css(f, "position") || i.css(f, {
                        position: "relative"
                    }), e.on("change.plugin_addIndicators", d), e.on("shift.plugin_addIndicators", h), y(), m(), setTimeout(function() {
                        o._indicators.updateBoundsPositions(a)
                    }, 0)
                }, this.remove = function() {
                    if (a.triggerGroup) {
                        if (e.off("change.plugin_addIndicators", d), e.off("shift.plugin_addIndicators", h), a.triggerGroup.members.length > 1) {
                            var t = a.triggerGroup;
                            t.members.splice(t.members.indexOf(a), 1), o._indicators.updateTriggerGroupLabel(t), o._indicators.updateTriggerGroupPositions(t), a.triggerGroup = void 0
                        } else v();
                        g()
                    }
                };
                var h = function() {
                        m()
                    },
                    d = function(e) {
                        "triggerHook" === e.what && y()
                    },
                    p = function() {
                        var e = o.info("vertical");
                        i.css(c.firstChild, {
                            "border-bottom-width": e ? 1 : 0,
                            "border-right-width": e ? 0 : 1,
                            bottom: e ? -1 : t.indent,
                            right: e ? t.indent : -1,
                            padding: e ? "0 8px" : "2px 4px"
                        }), i.css(u, {
                            "border-top-width": e ? 1 : 0,
                            "border-left-width": e ? 0 : 1,
                            top: e ? "100%" : "",
                            right: e ? t.indent : "",
                            bottom: e ? "" : t.indent,
                            left: e ? "" : "100%",
                            padding: e ? "0 8px" : "2px 4px"
                        }), f.appendChild(l)
                    },
                    g = function() {
                        l.parentNode.removeChild(l)
                    },
                    m = function() {
                        l.parentNode !== f && p();
                        var t = {};
                        t[n ? "top" : "left"] = e.triggerPosition(), t[n ? "height" : "width"] = e.duration(), i.css(l, t), i.css(u, {
                            display: e.duration() > 0 ? "" : "none"
                        })
                    },
                    _ = function() {
                        var r = s.trigger(t.colorTrigger),
                            l = {};
                        l[n ? "right" : "bottom"] = 0, l[n ? "border-top-width" : "border-left-width"] = 1, i.css(r.firstChild, l), i.css(r.firstChild.firstChild, {
                            padding: n ? "0 8px 3px 8px" : "3px 4px"
                        }), document.body.appendChild(r);
                        var c = {
                            triggerHook: e.triggerHook(),
                            element: r,
                            members: [a]
                        };
                        o._indicators.groups.push(c), a.triggerGroup = c, o._indicators.updateTriggerGroupLabel(c), o._indicators.updateTriggerGroupPositions(c)
                    },
                    v = function() {
                        o._indicators.groups.splice(o._indicators.groups.indexOf(a.triggerGroup), 1), a.triggerGroup.element.parentNode.removeChild(a.triggerGroup.element), a.triggerGroup = void 0
                    },
                    y = function() {
                        var t = e.triggerHook();
                        if (!(a.triggerGroup && Math.abs(a.triggerGroup.triggerHook - t) < 1e-4)) {
                            for (var n, i = o._indicators.groups, r = i.length; r--;)
                                if (n = i[r], Math.abs(n.triggerHook - t) < 1e-4) return a.triggerGroup && (1 === a.triggerGroup.members.length ? v() : (a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), o._indicators.updateTriggerGroupLabel(a.triggerGroup), o._indicators.updateTriggerGroupPositions(a.triggerGroup))), n.members.push(a), a.triggerGroup = n, void o._indicators.updateTriggerGroupLabel(n);
                            if (a.triggerGroup) {
                                if (1 === a.triggerGroup.members.length) return a.triggerGroup.triggerHook = t, void o._indicators.updateTriggerGroupPositions(a.triggerGroup);
                                a.triggerGroup.members.splice(a.triggerGroup.members.indexOf(a), 1), o._indicators.updateTriggerGroupLabel(a.triggerGroup), o._indicators.updateTriggerGroupPositions(a.triggerGroup), a.triggerGroup = void 0
                            }
                            _()
                        }
                    }
            },
            s = {
                start: function(e) {
                    var t = document.createElement("div");
                    t.textContent = "start", i.css(t, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    });
                    var n = document.createElement("div");
                    return i.css(n, {
                        position: "absolute",
                        overflow: "visible",
                        width: 0,
                        height: 0
                    }), n.appendChild(t), n
                },
                end: function(e) {
                    var t = document.createElement("div");
                    return t.textContent = "end", i.css(t, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    }), t
                },
                bounds: function() {
                    var e = document.createElement("div");
                    return i.css(e, {
                        position: "absolute",
                        overflow: "visible",
                        "white-space": "nowrap",
                        "pointer-events": "none",
                        "font-size": t
                    }), e.style.zIndex = n, e
                },
                trigger: function(e) {
                    var r = document.createElement("div");
                    r.textContent = "trigger", i.css(r, {
                        position: "relative"
                    });
                    var o = document.createElement("div");
                    i.css(o, {
                        position: "absolute",
                        overflow: "visible",
                        "border-width": 0,
                        "border-style": "solid",
                        color: e,
                        "border-color": e
                    }), o.appendChild(r);
                    var s = document.createElement("div");
                    return i.css(s, {
                        position: "fixed",
                        overflow: "visible",
                        "white-space": "nowrap",
                        "pointer-events": "none",
                        "font-size": t
                    }), s.style.zIndex = n, s.appendChild(o), s
                }
            }
    }),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["ScrollMagic", "TweenMax", "TimelineMax"], t) : "object" == typeof exports ? (require("gsap"), t(require("scrollmagic"), TweenMax, TimelineMax)) : t(e.ScrollMagic || e.jQuery && e.jQuery.ScrollMagic, e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite)
    }(this, function(e, t, n) {
        "use strict";
        var i = window.console || {},
            r = Function.prototype.bind.call(i.error || i.log || function() {}, i);
        e || r("(animation.gsap) -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."), t || r("(animation.gsap) -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."), e.Scene.addOption("tweenChanges", !1, function(e) {
            return !!e
        }), e.Scene.extend(function() {
            var e, i = this,
                r = function() {
                    i._log && (Array.prototype.splice.call(arguments, 1, 0, "(animation.gsap)", "->"), i._log.apply(this, arguments))
                };
            i.on("progress.plugin_gsap", function() {
                o()
            }), i.on("destroy.plugin_gsap", function(e) {
                i.removeTween(e.reset)
            });
            var o = function() {
                if (e) {
                    var t = i.progress(),
                        n = i.state();
                    e.repeat && -1 === e.repeat() ? "DURING" === n && e.paused() ? e.play() : "DURING" === n || e.paused() || e.pause() : t != e.progress() && (0 === i.duration() ? t > 0 ? e.play() : e.reverse() : i.tweenChanges() && e.tweenTo ? e.tweenTo(t * e.duration()) : e.progress(t).pause())
                }
            };
            i.setTween = function(s, a, l) {
                var c;
                arguments.length > 1 && (arguments.length < 3 && (l = a, a = 1), s = t.to(s, a, l));
                try {
                    (c = n ? new n({
                        smoothChildTiming: !0
                    }).add(s) : s).pause()
                } catch (e) {
                    return r(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"), i
                }
                if (e && i.removeTween(), e = c, s.repeat && -1 === s.repeat() && (e.repeat(-1), e.yoyo(s.yoyo())), i.tweenChanges() && !e.tweenTo && r(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."), e && i.controller() && i.triggerElement() && i.loglevel() >= 2) {
                    var u = t.getTweensOf(i.triggerElement()),
                        f = i.controller().info("vertical");
                    u.forEach(function(e, t) {
                        var n = e.vars.css || e.vars;
                        if (f ? void 0 !== n.top || void 0 !== n.bottom : void 0 !== n.left || void 0 !== n.right) return r(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"), !1
                    })
                }
                if (parseFloat(TweenLite.version) >= 1.14)
                    for (var h, d, p = e.getChildren ? e.getChildren(!0, !0, !1) : [e], g = function() {
                            r(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another")
                        }, m = 0; m < p.length; m++) h = p[m], d !== g && (d = h.vars.onOverwrite, h.vars.onOverwrite = function() {
                        d && d.apply(this, arguments), g.apply(this, arguments)
                    });
                return r(3, "added tween"), o(), i
            }, i.removeTween = function(t) {
                return e && (t && e.progress(0).pause(), e.kill(), e = void 0, r(3, "removed tween (reset: " + (t ? "true" : "false") + ")")), i
            }
        })
    }),
    function(e, t, n, i) {
        var r, o, s, a, l, c, u, f, h, d, p = {
                scrollSpeed: 1300,
                autoScrollSpeed: !0,
                scrollEasing: "easeInOutExpo",
                scrollingEasing: "easeInOutCirc",
                pageEndSmoothScroll: !0,
                layout: "vertical",
                offset: 0,
                highlightSelector: !1,
                clickedClass: "mPS2id-clicked",
                targetClass: "mPS2id-target",
                highlightClass: "mPS2id-highlight",
                forceSingleHighlight: !1,
                keepHighlightUntilNext: !1,
                disablePluginBelow: !1,
                clickEvents: !0,
                onStart: function() {},
                onComplete: function() {},
                defaultSelector: !1
            },
            g = {
                init: function(i) {
                    i = e.extend(!0, {}, p, i), e(n).data("mPS2id", i), o = e(n).data("mPS2id"), r = r ? r + "," + this.selector : this.selector, o.defaultSelector && ("object" == typeof e(r) && 0 !== e(r).length || (r = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id']")), o.clickEvents && e(n).undelegate(".mPS2id").delegate(r, "click.mPS2id", function(t) {
                        if (m._isDisabled.call(null)) m._removeClasses.call(null);
                        else {
                            var n = e(this),
                                i = n.attr("href"),
                                r = n.prop("href");
                            i && -1 !== i.indexOf("#/") || (m._reset.call(null), d = n.data("ps2id-offset") || 0, m._isValid.call(null, i, r) && m._findTarget.call(null, i) && (t.preventDefault(), a = "selector", l = n, m._setClasses.call(null, !0), m._scrollTo.call(null)))
                        }
                    }), e(t).unbind(".mPS2id").bind("scroll.mPS2id resize.mPS2id", function() {
                        if (m._isDisabled.call(null)) m._removeClasses.call(null);
                        else {
                            var t = e("._mPS2id-t");
                            t.each(function(n) {
                                var i = e(this),
                                    r = i.attr("id"),
                                    o = m._findHighlight.call(null, r);
                                m._setClasses.call(null, !1, i, o), n == t.length - 1 && m._extendClasses.call(null)
                            })
                        }
                    }), s = !0, m._setup.call(null)
                },
                scrollTo: function(t, n) {
                    if (m._isDisabled.call(null)) m._removeClasses.call(null);
                    else if (t && void 0 !== t) {
                        m._isInit.call(null);
                        var i = {
                            layout: o.layout,
                            offset: o.offset,
                            clicked: !1
                        };
                        n = e.extend(!0, {}, i, n), m._reset.call(null), f = n.layout, h = n.offset, t = -1 !== t.indexOf("#") ? t : "#" + t, m._isValid.call(null, t) && m._findTarget.call(null, t) && (a = "scrollTo", (l = n.clicked) && m._setClasses.call(null, !0), m._scrollTo.call(null))
                    }
                },
                destroy: function() {
                    e(t).unbind(".mPS2id"), e(n).undelegate(".mPS2id").removeData("mPS2id"), e("._mPS2id-t").removeData("mPS2id"), m._removeClasses.call(null, !0)
                }
            },
            m = {
                _isDisabled: function() {
                    var e = t,
                        i = "inner",
                        r = o.disablePluginBelow instanceof Array ? [o.disablePluginBelow[0] || 0, o.disablePluginBelow[1] || 0] : [o.disablePluginBelow || 0, 0];
                    return "innerWidth" in t || (i = "client", e = n.documentElement || n.body), e[i + "Width"] <= r[0] || e[i + "Height"] <= r[1]
                },
                _isValid: function(e, n) {
                    if (e) {
                        var i = -1 !== (n = n || e).indexOf("#/") ? n.split("#/")[0] : n.split("#")[0],
                            r = t.location.toString().split("#")[0];
                        return "#" !== e && -1 !== e.indexOf("#") && ("" === i || i === r)
                    }
                },
                _setup: function() {
                    var t = o.highlightSelector && "" !== o.highlightSelector ? o.highlightSelector : r,
                        n = 1;
                    return e(t).each(function() {
                        var i = e(this),
                            r = i.attr("href"),
                            o = i.prop("href");
                        if (m._isValid.call(null, r, o)) {
                            var s = -1 !== r.indexOf("#/") ? r.split("#/")[1] : r.split("#")[1],
                                a = e("#" + s);
                            if (a.length > 0) {
                                a.hasClass("_mPS2id-t") || a.addClass("_mPS2id-t").data("mPS2id", {
                                    i: n
                                }), i.hasClass("_mPS2id-h") || i.addClass("_mPS2id-h");
                                var l = m._findHighlight.call(null, s);
                                m._setClasses.call(null, !1, a, l), ++n == e(t).length && m._extendClasses.call(null)
                            }
                        }
                    })
                },
                _findTarget: function(t) {
                    var n = -1 !== t.indexOf("#/") ? t.split("#/")[1] : t.split("#")[1],
                        i = e("#" + n);
                    if (i.length < 1 || "fixed" === i.css("position")) {
                        if ("top" !== n) return;
                        i = e("body")
                    }
                    return c = i, f || (f = o.layout), h = m._setOffset.call(null), (u = [(i.offset().top - h[0]).toString(), (i.offset().left - h[1]).toString()])[0] = u[0] < 0 ? 0 : u[0], u[1] = u[1] < 0 ? 0 : u[1], u
                },
                _setOffset: function() {
                    var t, n, i, r;
                    switch (h || (h = o.offset ? o.offset : 0), d && (h = d), typeof h) {
                        case "object":
                        case "string":
                            (n = [(t = [h.y ? h.y : h, h.x ? h.x : h])[0] instanceof jQuery ? t[0] : e(t[0]), t[1] instanceof jQuery ? t[1] : e(t[1])])[0].length > 0 ? (i = n[0].height(), "fixed" === n[0].css("position") && (i += n[0][0].offsetTop)) : i = !isNaN(parseFloat(t[0])) && isFinite(t[0]) ? parseInt(t[0]) : 0, n[1].length > 0 ? (r = n[1].width(), "fixed" === n[1].css("position") && (r += n[1][0].offsetLeft)) : r = !isNaN(parseFloat(t[1])) && isFinite(t[1]) ? parseInt(t[1]) : 0;
                            break;
                        case "function":
                            (t = h.call(null)) instanceof Array ? (i = t[0], r = t[1]) : i = r = t;
                            break;
                        default:
                            i = r = parseInt(h)
                    }
                    return [i, r]
                },
                _findHighlight: function(n) {
                    var i = t.location.toString().split("#")[0],
                        r = e("._mPS2id-h[href='#" + n + "']"),
                        o = e("._mPS2id-h[href='" + i + "#" + n + "']"),
                        s = e("._mPS2id-h[href='#/" + n + "']"),
                        a = e("._mPS2id-h[href='" + i + "#/" + n + "']");
                    return r = r.length > 0 ? r : o, (s = s.length > 0 ? s : a).length > 0 ? s : r
                },
                _setClasses: function(t, n, i) {
                    var r = o.clickedClass,
                        s = o.targetClass,
                        a = o.highlightClass;
                    t && r && "" !== r ? (e("." + r).removeClass(r), l.addClass(r)) : n && s && "" !== s && i && a && "" !== a && (m._currentTarget.call(null, n) ? (n.addClass(s), i.addClass(a)) : (!o.keepHighlightUntilNext || e("." + a).length > 1) && (n.removeClass(s), i.removeClass(a)))
                },
                _extendClasses: function() {
                    var t = o.targetClass,
                        n = o.highlightClass,
                        i = e("." + t),
                        r = e("." + n),
                        s = t + "-first",
                        a = t + "-last",
                        l = n + "-first",
                        c = n + "-last";
                    e("._mPS2id-t").removeClass(s + " " + a), e("._mPS2id-h").removeClass(l + " " + c), o.forceSingleHighlight ? o.keepHighlightUntilNext && i.length > 1 ? (i.slice(0, 1).removeClass(t), r.slice(0, 1).removeClass(n)) : (i.slice(1).removeClass(t), r.slice(1).removeClass(n)) : (i.slice(0, 1).addClass(s).end().slice(-1).addClass(a), r.slice(0, 1).addClass(l).end().slice(-1).addClass(c))
                },
                _removeClasses: function(t) {
                    e("." + o.clickedClass).removeClass(o.clickedClass), e("." + o.targetClass).removeClass(o.targetClass + " " + o.targetClass + "-first " + o.targetClass + "-last"), e("." + o.highlightClass).removeClass(o.highlightClass + " " + o.highlightClass + "-first " + o.highlightClass + "-last"), t && (e("._mPS2id-t").removeClass("_mPS2id-t"), e("._mPS2id-h").removeClass("_mPS2id-h"))
                },
                _currentTarget: function(n) {
                    var i = o["target_" + n.data("mPS2id").i],
                        r = n[0].getBoundingClientRect();
                    if (void 0 !== i) {
                        var s = n.offset().top,
                            a = n.offset().left,
                            l = i.from ? i.from + s : s,
                            c = i.to ? i.to + s : s,
                            u = i.fromX ? i.fromX + a : a,
                            f = i.toX ? i.toX + a : a;
                        return r.top >= c && r.top <= l && r.left >= f && r.left <= u
                    }
                    var h = e(t).height(),
                        d = e(t).width(),
                        p = n.height(),
                        g = n.width(),
                        m = 1 + p / h,
                        _ = m,
                        v = p < h ? m * (h / p) : m,
                        y = 1 + g / d,
                        b = y,
                        w = g < d ? y * (d / g) : y;
                    return r.top <= h / _ && r.bottom >= h / v && r.left <= d / b && r.right >= d / w
                },
                _scrollTo: function() {
                    o.scrollSpeed = parseInt(o.scrollSpeed), u = o.pageEndSmoothScroll ? m._pageEndSmoothScroll.call(null) : u;
                    var n = e("html,body"),
                        i = o.autoScrollSpeed ? m._autoScrollSpeed.call(null) : o.scrollSpeed,
                        r = n.is(":animated") ? o.scrollingEasing : o.scrollEasing,
                        s = e(t).scrollTop(),
                        a = e(t).scrollLeft();
                    switch (f) {
                        case "horizontal":
                            a != u[1] && (m._callbacks.call(null, "onStart"), n.stop().animate({
                                scrollLeft: u[1]
                            }, i, r).promise().then(function() {
                                m._callbacks.call(null, "onComplete")
                            }));
                            break;
                        case "auto":
                            var l;
                            s == u[0] && a == u[1] || (m._callbacks.call(null, "onStart"), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/) ? n.stop().animate({
                                pageYOffset: u[0],
                                pageXOffset: u[1]
                            }, {
                                duration: i,
                                easing: r,
                                step: function(e, n) {
                                    "pageXOffset" == n.prop ? l = e : "pageYOffset" == n.prop && t.scrollTo(l, e)
                                }
                            }).promise().then(function() {
                                m._callbacks.call(null, "onComplete")
                            }) : n.stop().animate({
                                scrollTop: u[0],
                                scrollLeft: u[1]
                            }, i, r).promise().then(function() {
                                m._callbacks.call(null, "onComplete")
                            }));
                            break;
                        default:
                            s != u[0] && (m._callbacks.call(null, "onStart"), n.stop().animate({
                                scrollTop: u[0]
                            }, i, r).promise().then(function() {
                                m._callbacks.call(null, "onComplete")
                            }))
                    }
                },
                _pageEndSmoothScroll: function() {
                    var i = e(n).height(),
                        r = e(n).width(),
                        o = e(t).height(),
                        s = e(t).width();
                    return [i - u[0] < o ? i - o : u[0], r - u[1] < s ? r - s : u[1]]
                },
                _autoScrollSpeed: function() {
                    var i = e(t).scrollTop(),
                        r = e(t).scrollLeft(),
                        s = e(n).height(),
                        a = e(n).width(),
                        l = [o.scrollSpeed + o.scrollSpeed * Math.floor(Math.abs(u[0] - i) / s * 100) / 100, o.scrollSpeed + o.scrollSpeed * Math.floor(Math.abs(u[1] - r) / a * 100) / 100];
                    return Math.max.apply(Math, l)
                },
                _callbacks: function(e) {
                    if (o) switch (this.mPS2id = {
                            trigger: a,
                            clicked: l,
                            target: c,
                            scrollTo: {
                                y: u[0],
                                x: u[1]
                            }
                        }, e) {
                        case "onStart":
                            o.onStart.call(null, this.mPS2id);
                            break;
                        case "onComplete":
                            o.onComplete.call(null, this.mPS2id)
                    }
                },
                _reset: function() {
                    f = h = d = !1
                },
                _isInit: function() {
                    s || g.init.apply(this)
                },
                _easing: function() {
                    e.easing.easeInQuad = e.easing.easeInQuad || function(e, t, n, i, r) {
                        return i * (t /= r) * t + n
                    }, e.easing.easeOutQuad = e.easing.easeOutQuad || function(e, t, n, i, r) {
                        return -i * (t /= r) * (t - 2) + n
                    }, e.easing.easeInOutQuad = e.easing.easeInOutQuad || function(e, t, n, i, r) {
                        return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
                    }, e.easing.easeInCubic = e.easing.easeInCubic || function(e, t, n, i, r) {
                        return i * (t /= r) * t * t + n
                    }, e.easing.easeOutCubic = e.easing.easeOutCubic || function(e, t, n, i, r) {
                        return i * ((t = t / r - 1) * t * t + 1) + n
                    }, e.easing.easeInOutCubic = e.easing.easeInOutCubic || function(e, t, n, i, r) {
                        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
                    }, e.easing.easeInQuart = e.easing.easeInQuart || function(e, t, n, i, r) {
                        return i * (t /= r) * t * t * t + n
                    }, e.easing.easeOutQuart = e.easing.easeOutQuart || function(e, t, n, i, r) {
                        return -i * ((t = t / r - 1) * t * t * t - 1) + n
                    }, e.easing.easeInOutQuart = e.easing.easeInOutQuart || function(e, t, n, i, r) {
                        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
                    }, e.easing.easeInQuint = e.easing.easeInQuint || function(e, t, n, i, r) {
                        return i * (t /= r) * t * t * t * t + n
                    }, e.easing.easeOutQuint = e.easing.easeOutQuint || function(e, t, n, i, r) {
                        return i * ((t = t / r - 1) * t * t * t * t + 1) + n
                    }, e.easing.easeInOutQuint = e.easing.easeInOutQuint || function(e, t, n, i, r) {
                        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
                    }, e.easing.easeInExpo = e.easing.easeInExpo || function(e, t, n, i, r) {
                        return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
                    }, e.easing.easeOutExpo = e.easing.easeOutExpo || function(e, t, n, i, r) {
                        return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
                    }, e.easing.easeInOutExpo = e.easing.easeInOutExpo || function(e, t, n, i, r) {
                        return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
                    }, e.easing.easeInSine = e.easing.easeInSine || function(e, t, n, i, r) {
                        return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
                    }, e.easing.easeOutSine = e.easing.easeOutSine || function(e, t, n, i, r) {
                        return i * Math.sin(t / r * (Math.PI / 2)) + n
                    }, e.easing.easeInOutSine = e.easing.easeInOutSine || function(e, t, n, i, r) {
                        return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
                    }, e.easing.easeInCirc = e.easing.easeInCirc || function(e, t, n, i, r) {
                        return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
                    }, e.easing.easeOutCirc = e.easing.easeOutCirc || function(e, t, n, i, r) {
                        return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
                    }, e.easing.easeInOutCirc = e.easing.easeInOutCirc || function(e, t, n, i, r) {
                        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
                    }, e.easing.easeInElastic = e.easing.easeInElastic || function(e, t, n, i, r) {
                        var o = 1.70158,
                            s = 0,
                            a = i;
                        return 0 == t ? n : 1 == (t /= r) ? n + i : (s || (s = .3 * r), a < Math.abs(i) ? (a = i, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(i / a), -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) + n)
                    }, e.easing.easeOutElastic = e.easing.easeOutElastic || function(e, t, n, i, r) {
                        var o = 1.70158,
                            s = 0,
                            a = i;
                        return 0 == t ? n : 1 == (t /= r) ? n + i : (s || (s = .3 * r), a < Math.abs(i) ? (a = i, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(i / a), a * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / s) + i + n)
                    }, e.easing.easeInOutElastic = e.easing.easeInOutElastic || function(e, t, n, i, r) {
                        var o = 1.70158,
                            s = 0,
                            a = i;
                        return 0 == t ? n : 2 == (t /= r / 2) ? n + i : (s || (s = r * (.3 * 1.5)), a < Math.abs(i) ? (a = i, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(i / a), t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) * -.5 + n : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / s) * .5 + i + n)
                    }, e.easing.easeInBack = e.easing.easeInBack || function(e, t, n, i, r, o) {
                        return null == o && (o = 1.70158), i * (t /= r) * t * ((o + 1) * t - o) + n
                    }, e.easing.easeOutBack = e.easing.easeOutBack || function(e, t, n, i, r, o) {
                        return null == o && (o = 1.70158), i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
                    }, e.easing.easeInOutBack = e.easing.easeInOutBack || function(e, t, n, i, r, o) {
                        return null == o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
                    }, e.easing.easeInBounce = e.easing.easeInBounce || function(t, n, i, r, o) {
                        return r - e.easing.easeOutBounce(t, o - n, 0, r, o) + i
                    }, e.easing.easeOutBounce = e.easing.easeOutBounce || function(e, t, n, i, r) {
                        return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
                    }, e.easing.easeInOutBounce = e.easing.easeInOutBounce || function(t, n, i, r, o) {
                        return n < o / 2 ? .5 * e.easing.easeInBounce(t, 2 * n, 0, r, o) + i : .5 * e.easing.easeOutBounce(t, 2 * n - o, 0, r, o) + .5 * r + i
                    }
                }
            };
        m._easing.call(), e.fn.mPageScroll2id = function(t) {
            return g[t] ? g[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : g.init.apply(this, arguments)
        }, e.mPageScroll2id = function(t) {
            return g[t] ? g[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : g.init.apply(this, arguments)
        }, e.mPageScroll2id.defaults = p
    }(jQuery, window, document),
    function(e) {
        "use strict";

        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        var n, i, r;

        function o(e, t) {
            (n(e, t) ? r : i)(e, t)
        }
        "classList" in document.documentElement ? (n = function(e, t) {
            return e.classList.contains(t)
        }, i = function(e, t) {
            e.classList.add(t)
        }, r = function(e, t) {
            e.classList.remove(t)
        }) : (n = function(e, n) {
            return t(n).test(e.className)
        }, i = function(e, t) {
            n(e, t) || (e.className = e.className + " " + t)
        }, r = function(e, n) {
            e.className = e.className.replace(t(n), " ")
        });
        var s = {
            hasClass: n,
            addClass: i,
            removeClass: r,
            toggleClass: o,
            has: n,
            add: i,
            remove: r,
            toggle: o
        };
        "function" == typeof define && define.amd ? define(s) : e.classie = s
    }(window),
    function() {
        var e;

        function t(e) {
            classie.add(e.target.parentNode, "input-filled")
        }

        function n(e) {
            "" === e.target.value.trim() && classie.remove(e.target.parentNode, "input-filled")
        }

        function i(e) {
            classie.add(e.target.parentNode, "input-filled")
        }

        function r(e) {
            "" === e.target.value.trim() && classie.remove(e.target.parentNode, "input-filled")
        }
        String.prototype.trim || (e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, String.prototype.trim = function() {
            return this.replace(e, "")
        }), [].slice.call(document.querySelectorAll("input.form-style")).forEach(function(e) {
            "" !== e.value.trim() && classie.add(e.parentNode, "input-filled"), e.addEventListener("focus", t), e.addEventListener("blur", n)
        }), [].slice.call(document.querySelectorAll("textarea.form-style")).forEach(function(e) {
            "" !== e.value.trim() && classie.add(e.parentNode, "input-filled"), e.addEventListener("focus", i), e.addEventListener("blur", r)
        })
    }(), window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
        setTimeout(e, 1e3 / 60)
    }, Array.prototype.shuffle = function() {
        for (var e, t, n = this.length - 1; n > 0; n--) e = Math.floor(Math.random() * (n + 1)), t = this[n], this[n] = this[e], this[e] = t;
        return this
    }, Math.clamp = function(e, t, n) {
        return Math.max(t, Math.min(e, n))
    };
var mouseX, mouseY, totalPoints, dist, scale, canvas, context, surfaces, get = document.querySelector.bind(document),
    on = document.addEventListener.bind(document),
    mouseOff = -1e3,
    viscosity = 25,
    damping = .1,
    palleteNum = 0,
    palleteFirst = ["ffeaa7", "000"],
    palletes = [
        ["000", "ffeaa7"]
    ];

function Point(e, t) {
    this.x = e, this.y = t, this.ix = e, this.iy = t, this.vx = 0, this.vy = 0
}

function Surface(e) {
    this.y = e, this.resize()
}

function setPallete() {
    canvas.style.backgroundColor = "#" + palletes[palleteNum][0];
    for (var e = surfaces.length; e--;) surfaces[surfaces.length - e - 1].color = "#" + palletes[palleteNum][e + 1]
}

function nextPallete() {
    ++palleteNum >= palletes.length && (palleteNum = 0), setPallete()
}

function wobbleSuraces() {
    resizeSuraces();
    for (var e = surfaces.length; e--;) surfaces[e].wobble();
    nextPallete()
}

function drawSurfaces() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var e = surfaces.length; e--;) surfaces[e].draw()
}

function resizeSuraces() {
    scale = window.devicePixelRatio || 1, canvas.width = innerWidth * scale, canvas.height = innerHeight * scale, canvas.style.width = innerWidth + "px", canvas.style.height = innerHeight + "px", totalPoints = Math.round(Math.clamp(Math.pow(8 * Math.random(), 2), 16, innerWidth / 35)), dist = Math.clamp(innerWidth / 4, 150, 200);
    for (var e = surfaces.length; e--;) surfaces[e].resize();
    drawSurfaces()
}

function update() {
    requestAnimationFrame(update), drawSurfaces()
}

function init() {
    canvas = get("canvas"), context = canvas.getContext("2d"), canvas.ontouchmove = function(e) {
        mouseX = e.targetTouches[0].clientX * scale, mouseY = e.targetTouches[0].clientY * scale
    }, canvas.ontouchstart = function(e) {
        e.preventDefault()
    }, canvas.ontouchend = function(e) {
        wobbleSuraces(), mouseX = mouseY = mouseOff
    }, canvas.onmousemove = function(e) {
        mouseX = e.clientX * scale, mouseY = e.clientY * scale
    }, canvas.onmousedown = wobbleSuraces, canvas.onmouseleave = function() {
        mouseX = mouseY = mouseOff
    }, surfaces = [new Surface(.5)], palletes.shuffle(), palletes.unshift(palleteFirst), setPallete(0), window.onresize = resizeSuraces, resizeSuraces(), update()
}
Point.prototype.move = function() {
        var e = canvas.width / scale,
            t = canvas.height / scale;
        this.vx += (this.ix - this.x) / viscosity * e, this.vy += (this.iy - this.y) / viscosity * t;
        var n = this.x * e - mouseX / scale,
            i = this.y * t - mouseY / scale;
        if (Math.sqrt(n * n + i * i) < dist) {
            var r = Math.atan2(i, n);
            this.vx += (Math.cos(r) * viscosity - n) / viscosity, this.vy -= (Math.sin(r) * viscosity - i) / viscosity
        }
        this.vx *= 1 - damping, this.vy *= 1 - damping, this.x += this.vx / e, this.y += this.vy / t, this.y < 0 ? this.y = 0 : this.y > 1 && (this.y = 1)
    }, Surface.prototype.draw = function() {
        var e, t, n = this.points[totalPoints - 1];
        context.fillStyle = this.color, context.beginPath(), context.moveTo(n.x * canvas.width, n.y * canvas.height);
        for (var i = totalPoints - 1; i > 0; i--)(n = this.points[i]).move(), e = (n.x + this.points[i - 1].x) / 2 * canvas.width, t = (n.y + this.points[i - 1].y) / 2 * canvas.height, 1 === i ? e = canvas.width : i === totalPoints - 1 && (context.bezierCurveTo(n.x * canvas.width, n.y * canvas.height, e, t, e, t), n.x = 0), context.bezierCurveTo(n.x * canvas.width, n.y * canvas.height, e, t, e, t);
        context.lineTo(canvas.width, canvas.height), context.lineTo(0, canvas.height), context.closePath(), context.fill()
    }, Surface.prototype.resize = function() {
        this.points = [];
        for (var e = totalPoints; e--;) this.points.push(new Point(e / (totalPoints - 3), this.y))
    }, Surface.prototype.wobble = function() {
        for (var e = totalPoints - 1; e > 0; e--) this.points[e].vy += (Math.random() - .5) * dist * .6
    }, on("DOMContentLoaded", init),
    function(e) {
        "use strict";
        var t, n, i, r;
        e(document).on("scroll", function() {
            var t = e(this).scrollTop();
            e(".parallax-fade-hero").css({
                opacity: 1 - t / 300
            })
        }), e(".change-col-1").on("click", function() {
            e("body").hasClass("col-1-ch") ? e("body").removeClass("col-1-ch") : e("body").addClass("col-1-ch")
        }), e(".send-contact-message").on("click", function() {
            var t = {
                fullname: e("#contactname").val(),
                email: e("#contactemail").val(),
                message: e("#contactmessage").val()
            };
            e.post({
                url: "contact.php",
                data: t,
                success: function(t) {
                    e("#contact-message-feedback").text(t.message).removeClass().addClass(t.status)
                },
                error: function(t, n) {
                    e("#contact-message-feedback").text(n).removeClass().addClass("error")
                }
            })
        }), e(window).load(function() {
            e("body.load-anime").removeClass("load-anime"), e("body.loading").removeClass("loading")
        }), e(window).load(function() {
            e(".nav__list li a, a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
                offset: 60,
                scrollSpeed: 700,
                scrollEasing: "easeInOutCubic"
            })
        }), t = void 0, n = void 0, i = function() {
            n.addEventListener("click", function() {
                return r(t, "nav-active")
            })
        }, r = function(e, t) {
            e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
        }, t = document.querySelector("body"), n = document.querySelector(".menu-icon"), document.querySelectorAll(".nav__list-item"), i(), e(".active-nav-menu").on("click", function() {
            e("body").removeClass("nav-active")
        });
        const o = new ScrollMagic.Controller;
        ! function(e, t, n) {
            for (var i = 0; i < e.length; i++) t.call(void 0, i, e[i])
        }(document.querySelectorAll(".img-loader"), function(e, t) {
            const n = TweenMax.to(t, 2, {
                borderTopLeftRadius: "100%",
                borderTopRightRadius: "100%",
                delay: .3,
                height: 0,
                ease: Power2.easeOut
            });
            new ScrollMagic.Scene({
                triggerElement: t,
                triggerHook: .6,
                reverse: !1
            }).setTween(n).addTo(o)
        });
        var s = new ScrollMagic.Controller;
        e(".section-trigger").each(function(t) {
            var n = e(this).find(".inner"),
                i = new TimelineMax;
            i.from(n, .6, {
                y: "40px",
                opacity: 0,
                ease: Linear.easeOut
            }), new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .85,
                reverse: !1
            }).setTween(i).addTo(s)
        })
    }(jQuery);
class Demo {
    constructor() {
        this.initCursor(), this.initHovers()
    }
    initCursor() {
        const {
            Back: e
        } = window;
        this.outerCursor = document.querySelector(".circle-cursor--outer"), this.innerCursor = document.querySelector(".circle-cursor--inner"), this.outerCursorBox = this.outerCursor.getBoundingClientRect(), this.outerCursorSpeed = 0, this.easing = e.easeOut.config(1.7), this.clientX = -100, this.clientY = -100, this.showCursor = !1;
        const t = () => {
            TweenMax.set(this.innerCursor, {
                x: this.clientX,
                y: this.clientY
            }), TweenMax.set(this.outerCursor, {
                x: this.clientX - this.outerCursorBox.width / 2,
                y: this.clientY - this.outerCursorBox.height / 2
            }), setTimeout(() => {
                this.outerCursorSpeed = .2
            }, 100), this.showCursor = !0
        };
        document.addEventListener("mousemove", t), document.addEventListener("mousemove", e => {
            this.clientX = e.clientX, this.clientY = e.clientY
        });
        const n = () => {
            TweenMax.set(this.innerCursor, {
                x: this.clientX,
                y: this.clientY
            }), this.isStuck || TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
                x: this.clientX - this.outerCursorBox.width / 2,
                y: this.clientY - this.outerCursorBox.height / 2
            }), this.showCursor && document.removeEventListener("mousemove", t), requestAnimationFrame(n)
        };
        requestAnimationFrame(n)
    }
    initHovers() {
        const e = TweenMax.to(this.outerCursor, .2, {
                ease: this.easing,
                paused: !0,
                backgroundColor: "#fff"
            }),
            t = () => {
                this.outerCursorSpeed = 0, TweenMax.set(this.innerCursor, {
                    opacity: 0
                }), e.play()
            },
            n = () => {
                this.outerCursorSpeed = .2, TweenMax.set(this.innerCursor, {
                    opacity: 1
                }), e.reverse()
            };
        document.querySelectorAll(".stick-cursor").forEach(e => {
            e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", n)
        })
    }
}
const demo = new Demo;
var html = document.documentElement,
    body = document.body,
    scroller = {
        target: document.querySelector(".scroll-container"),
        ease: .09,
        endY: 0,
        y: 0,
        resizeRequest: 1,
        scrollRequest: 0
    },
    requestId = null;

function onLoad() {
    updateScroller(), window.focus(), window.addEventListener("resize", onResize), document.addEventListener("scroll", onScroll)
}

function updateScroller() {
    var e = scroller.resizeRequest > 0;
    if (e) {
        var t = scroller.target.clientHeight;
        body.style.height = t + "px", scroller.resizeRequest = 0
    }
    var n = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
    scroller.endY = n, scroller.y += (n - scroller.y) * scroller.ease, (Math.abs(n - scroller.y) < .05 || e) && (scroller.y = n, scroller.scrollRequest = 0), TweenLite.set(scroller.target, {
        y: -scroller.y
    }), requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null
}

function onScroll() {
    scroller.scrollRequest++, requestId || (requestId = requestAnimationFrame(updateScroller))
}

function onResize() {
    scroller.resizeRequest++, requestId || (requestId = requestAnimationFrame(updateScroller))
}
TweenLite.set(scroller.target, {
    rotation: .01,
    force3D: !0
}), window.addEventListener("load", onLoad);