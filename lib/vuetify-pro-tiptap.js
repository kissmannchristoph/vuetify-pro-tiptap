var dg = Object.defineProperty;
var ug = (t, e, n) => e in t ? dg(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Es = (t, e, n) => ug(t, typeof e != "symbol" ? e + "" : e, n);
import { VDivider as to, VToolbar as cr, VCardText as no, VCard as dr, VSpacer as ro, VCardTitle as fg, VInput as pg, VThemeProvider as rf, VIcon as Ln, VTooltip as hg, VBtn as oo, VTextField as io, VSheet as mg, VList as sa, VMenu as Gi, VCheckbox as la, VCardSubtitle as gg, VListItemTitle as of, VListItem as sf, VFileInput as yg, VForm as lf, VTab as bg, VTabs as vg, VWindowItem as wg, VWindow as kg, VCardActions as aa, VDialog as ca } from "vuetify/components";
import { reactive as Yn, computed as z, unref as C, watch as Ht, getCurrentScope as Sg, onScopeDispose as xg, onMounted as af, nextTick as cf, getCurrentInstance as so, hasInjectionContext as Cg, inject as df, provide as Zo, shallowRef as uf, toValue as $o, watchEffect as Vn, ref as G, markRaw as ff, defineComponent as $, onBeforeUnmount as Tg, h as lo, customRef as Ag, render as bc, withDirectives as pf, openBlock as M, createBlock as _, withCtx as V, createVNode as H, createElementBlock as re, Fragment as ye, renderList as He, resolveDynamicComponent as Pr, mergeProps as Wn, createSlots as da, vShow as hf, createCommentVNode as Qe, useAttrs as Mg, onUnmounted as Eg, toRef as Og, normalizeClass as tn, createTextVNode as Rt, toDisplayString as Ae, renderSlot as Nt, normalizeProps as vc, guardReactiveProps as wc, normalizeStyle as Un, createElementVNode as _t } from "vue";
import { useTheme as ua } from "vuetify";
const cl = "en", dl = 200, Lg = dl - 80, kc = 20, Sc = 1e5, xc = 16, bo = 6, vo = 10, wo = 2, Vg = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#000000",
  "#333333",
  "#666666",
  "#999999",
  "#CCCCCC",
  "#D5D5D4",
  "#E8E8E8",
  "#EEEEEE"
], ul = "Roboto", Hg = [
  { title: "editor.default", value: ul, divider: !0, default: !0 },
  { title: "Arial", value: "Arial" },
  { title: "Arial Black", value: "Arial Black" },
  { title: "Georgia", value: "Georgia" },
  { title: "Impact", value: "Impact" },
  { title: "Helvetica", value: "Helvetica" },
  { title: "Tahoma", value: "Tahoma" },
  { title: "Times New Roman", value: "Times New Roman" },
  { title: "Verdana", value: "Verdana" },
  { title: "Courier New", value: "Courier New", divider: !0 },
  { title: "Monaco", value: "Monaco" },
  { title: "Monospace", value: "monospace" }
], Xo = "default", mf = [
  { title: "editor.default", value: Xo, default: !0 }
], Rg = [8, 10, 12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72], In = "default";
var Yo = /* @__PURE__ */ ((t) => (t[t["size-small"] = 200] = "size-small", t[t["size-medium"] = 500] = "size-medium", t["size-large"] = "100%", t))(Yo || {}), Qo = /* @__PURE__ */ ((t) => (t[t["size-small"] = 480] = "size-small", t[t["size-medium"] = 640] = "size-medium", t["size-large"] = "100%", t))(Qo || {});
const Ng = {
  image: [
    "float-left",
    "float-none",
    "float-right",
    "divider",
    "image-size-small",
    "image-size-medium",
    "image-size-large",
    "divider",
    "textAlign",
    "divider",
    "image",
    "image-aspect-ratio",
    "remove"
  ],
  text: ["bold", "italic", "underline", "strike", "divider", "color", "highlight", "textAlign", "divider", "link"],
  link: [
    "bold",
    "italic",
    "underline",
    "strike",
    "divider",
    "color",
    "highlight",
    "textAlign",
    "divider",
    "link",
    "unlink",
    "link-open"
  ],
  video: ["video-size-small", "video-size-medium", "video-size-large", "divider", "video", "remove"],
  table: ["table-add-column-before", "table-add-column-after", "table-delete-column", "divider", "table-add-row-before", "table-add-row-after", "table-delete-row", "divider", "table-merge-or-split-cells", "divider", "table-delete-table", "divider"]
}, br = Yn({
  extensions: []
});
function _g(t) {
  br.defaultLang = t.defaultLang, br.defaultFallbackLang = t.defaultFallbackLang, br.defaultMarkdownTheme = t.defaultMarkdownTheme, br.extensions = t.extensions ?? [];
}
function Zi() {
  return {
    state: br
  };
}
var gf = typeof global == "object" && global && global.Object === Object && global, Ig = typeof self == "object" && self && self.Object === Object && self, lt = gf || Ig || Function("return this")(), Ge = lt.Symbol, yf = Object.prototype, Dg = yf.hasOwnProperty, Pg = yf.toString, hr = Ge ? Ge.toStringTag : void 0;
function Bg(t) {
  var e = Dg.call(t, hr), n = t[hr];
  try {
    t[hr] = void 0;
    var r = !0;
  } catch {
  }
  var o = Pg.call(t);
  return r && (e ? t[hr] = n : delete t[hr]), o;
}
var $g = Object.prototype, zg = $g.toString;
function Fg(t) {
  return zg.call(t);
}
var jg = "[object Null]", Wg = "[object Undefined]", Cc = Ge ? Ge.toStringTag : void 0;
function Hn(t) {
  return t == null ? t === void 0 ? Wg : jg : Cc && Cc in Object(t) ? Bg(t) : Fg(t);
}
function gt(t) {
  return t != null && typeof t == "object";
}
var Ug = "[object Symbol]";
function Xi(t) {
  return typeof t == "symbol" || gt(t) && Hn(t) == Ug;
}
function fa(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; )
    o[n] = e(t[n], n, t);
  return o;
}
var rt = Array.isArray, Kg = 1 / 0, Tc = Ge ? Ge.prototype : void 0, Ac = Tc ? Tc.toString : void 0;
function bf(t) {
  if (typeof t == "string")
    return t;
  if (rt(t))
    return fa(t, bf) + "";
  if (Xi(t))
    return Ac ? Ac.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Kg ? "-0" : e;
}
var qg = /\s/;
function Jg(t) {
  for (var e = t.length; e-- && qg.test(t.charAt(e)); )
    ;
  return e;
}
var Gg = /^\s+/;
function Zg(t) {
  return t && t.slice(0, Jg(t) + 1).replace(Gg, "");
}
function yt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Mc = NaN, Xg = /^[-+]0x[0-9a-f]+$/i, Yg = /^0b[01]+$/i, Qg = /^0o[0-7]+$/i, e1 = parseInt;
function Ec(t) {
  if (typeof t == "number")
    return t;
  if (Xi(t))
    return Mc;
  if (yt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = yt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Zg(t);
  var n = Yg.test(t);
  return n || Qg.test(t) ? e1(t.slice(2), n ? 2 : 8) : Xg.test(t) ? Mc : +t;
}
function pa(t) {
  return t;
}
var t1 = "[object AsyncFunction]", n1 = "[object Function]", r1 = "[object GeneratorFunction]", o1 = "[object Proxy]";
function vf(t) {
  if (!yt(t))
    return !1;
  var e = Hn(t);
  return e == n1 || e == r1 || e == t1 || e == o1;
}
var Os = lt["__core-js_shared__"], Oc = function() {
  var t = /[^.]+$/.exec(Os && Os.keys && Os.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function i1(t) {
  return !!Oc && Oc in t;
}
var s1 = Function.prototype, l1 = s1.toString;
function Rn(t) {
  if (t != null) {
    try {
      return l1.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var a1 = /[\\^$.*+?()[\]{}|]/g, c1 = /^\[object .+?Constructor\]$/, d1 = Function.prototype, u1 = Object.prototype, f1 = d1.toString, p1 = u1.hasOwnProperty, h1 = RegExp(
  "^" + f1.call(p1).replace(a1, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function m1(t) {
  if (!yt(t) || i1(t))
    return !1;
  var e = vf(t) ? h1 : c1;
  return e.test(Rn(t));
}
function g1(t, e) {
  return t == null ? void 0 : t[e];
}
function Nn(t, e) {
  var n = g1(t, e);
  return m1(n) ? n : void 0;
}
var fl = Nn(lt, "WeakMap"), Lc = Object.create, y1 = /* @__PURE__ */ function() {
  function t() {
  }
  return function(e) {
    if (!yt(e))
      return {};
    if (Lc)
      return Lc(e);
    t.prototype = e;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function b1(t, e, n) {
  switch (n.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, n[0]);
    case 2:
      return t.call(e, n[0], n[1]);
    case 3:
      return t.call(e, n[0], n[1], n[2]);
  }
  return t.apply(e, n);
}
function v1(t, e) {
  var n = -1, r = t.length;
  for (e || (e = Array(r)); ++n < r; )
    e[n] = t[n];
  return e;
}
var w1 = 800, k1 = 16, S1 = Date.now;
function x1(t) {
  var e = 0, n = 0;
  return function() {
    var r = S1(), o = k1 - (r - n);
    if (n = r, o > 0) {
      if (++e >= w1)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function C1(t) {
  return function() {
    return t;
  };
}
var ei = function() {
  try {
    var t = Nn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), T1 = ei ? function(t, e) {
  return ei(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: C1(e),
    writable: !0
  });
} : pa, wf = x1(T1);
function A1(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
function M1(t, e, n, r) {
  for (var o = t.length, i = n + -1; ++i < o; )
    if (e(t[i], i, t))
      return i;
  return -1;
}
function E1(t) {
  return t !== t;
}
function O1(t, e, n) {
  for (var r = n - 1, o = t.length; ++r < o; )
    if (t[r] === e)
      return r;
  return -1;
}
function L1(t, e, n) {
  return e === e ? O1(t, e, n) : M1(t, E1, n);
}
function V1(t, e) {
  var n = t == null ? 0 : t.length;
  return !!n && L1(t, e, 0) > -1;
}
var H1 = 9007199254740991, R1 = /^(?:0|[1-9]\d*)$/;
function kf(t, e) {
  var n = typeof t;
  return e = e ?? H1, !!e && (n == "number" || n != "symbol" && R1.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Sf(t, e, n) {
  e == "__proto__" && ei ? ei(t, e, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[e] = n;
}
function ha(t, e) {
  return t === e || t !== t && e !== e;
}
var N1 = Object.prototype, _1 = N1.hasOwnProperty;
function xf(t, e, n) {
  var r = t[e];
  (!(_1.call(t, e) && ha(r, n)) || n === void 0 && !(e in t)) && Sf(t, e, n);
}
function ao(t, e, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, s = e.length; ++i < s; ) {
    var l = e[i], a = void 0;
    a === void 0 && (a = t[l]), o ? Sf(n, l, a) : xf(n, l, a);
  }
  return n;
}
var Vc = Math.max;
function Cf(t, e, n) {
  return e = Vc(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, o = -1, i = Vc(r.length - e, 0), s = Array(i); ++o < i; )
      s[o] = r[e + o];
    o = -1;
    for (var l = Array(e + 1); ++o < e; )
      l[o] = r[o];
    return l[e] = n(s), b1(t, this, l);
  };
}
function I1(t, e) {
  return wf(Cf(t, e, pa), t + "");
}
var D1 = 9007199254740991;
function ma(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= D1;
}
function ga(t) {
  return t != null && ma(t.length) && !vf(t);
}
var P1 = Object.prototype;
function ya(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || P1;
  return t === n;
}
function B1(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var $1 = "[object Arguments]";
function Hc(t) {
  return gt(t) && Hn(t) == $1;
}
var Tf = Object.prototype, z1 = Tf.hasOwnProperty, F1 = Tf.propertyIsEnumerable, ba = Hc(/* @__PURE__ */ function() {
  return arguments;
}()) ? Hc : function(t) {
  return gt(t) && z1.call(t, "callee") && !F1.call(t, "callee");
};
function j1() {
  return !1;
}
var Af = typeof exports == "object" && exports && !exports.nodeType && exports, Rc = Af && typeof module == "object" && module && !module.nodeType && module, W1 = Rc && Rc.exports === Af, Nc = W1 ? lt.Buffer : void 0, U1 = Nc ? Nc.isBuffer : void 0, ti = U1 || j1, K1 = "[object Arguments]", q1 = "[object Array]", J1 = "[object Boolean]", G1 = "[object Date]", Z1 = "[object Error]", X1 = "[object Function]", Y1 = "[object Map]", Q1 = "[object Number]", ey = "[object Object]", ty = "[object RegExp]", ny = "[object Set]", ry = "[object String]", oy = "[object WeakMap]", iy = "[object ArrayBuffer]", sy = "[object DataView]", ly = "[object Float32Array]", ay = "[object Float64Array]", cy = "[object Int8Array]", dy = "[object Int16Array]", uy = "[object Int32Array]", fy = "[object Uint8Array]", py = "[object Uint8ClampedArray]", hy = "[object Uint16Array]", my = "[object Uint32Array]", te = {};
te[ly] = te[ay] = te[cy] = te[dy] = te[uy] = te[fy] = te[py] = te[hy] = te[my] = !0;
te[K1] = te[q1] = te[iy] = te[J1] = te[sy] = te[G1] = te[Z1] = te[X1] = te[Y1] = te[Q1] = te[ey] = te[ty] = te[ny] = te[ry] = te[oy] = !1;
function gy(t) {
  return gt(t) && ma(t.length) && !!te[Hn(t)];
}
function Yi(t) {
  return function(e) {
    return t(e);
  };
}
var Mf = typeof exports == "object" && exports && !exports.nodeType && exports, xr = Mf && typeof module == "object" && module && !module.nodeType && module, yy = xr && xr.exports === Mf, Ls = yy && gf.process, Qn = function() {
  try {
    var t = xr && xr.require && xr.require("util").types;
    return t || Ls && Ls.binding && Ls.binding("util");
  } catch {
  }
}(), _c = Qn && Qn.isTypedArray, Ef = _c ? Yi(_c) : gy, by = Object.prototype, vy = by.hasOwnProperty;
function Of(t, e) {
  var n = rt(t), r = !n && ba(t), o = !n && !r && ti(t), i = !n && !r && !o && Ef(t), s = n || r || o || i, l = s ? B1(t.length, String) : [], a = l.length;
  for (var c in t)
    (e || vy.call(t, c)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    kf(c, a))) && l.push(c);
  return l;
}
function Lf(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var wy = Lf(Object.keys, Object), ky = Object.prototype, Sy = ky.hasOwnProperty;
function xy(t) {
  if (!ya(t))
    return wy(t);
  var e = [];
  for (var n in Object(t))
    Sy.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function Qi(t) {
  return ga(t) ? Of(t) : xy(t);
}
function Cy(t) {
  var e = [];
  if (t != null)
    for (var n in Object(t))
      e.push(n);
  return e;
}
var Ty = Object.prototype, Ay = Ty.hasOwnProperty;
function My(t) {
  if (!yt(t))
    return Cy(t);
  var e = ya(t), n = [];
  for (var r in t)
    r == "constructor" && (e || !Ay.call(t, r)) || n.push(r);
  return n;
}
function va(t) {
  return ga(t) ? Of(t, !0) : My(t);
}
var Ey = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Oy = /^\w*$/;
function wa(t, e) {
  if (rt(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Xi(t) ? !0 : Oy.test(t) || !Ey.test(t) || e != null && t in Object(e);
}
var Br = Nn(Object, "create");
function Ly() {
  this.__data__ = Br ? Br(null) : {}, this.size = 0;
}
function Vy(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Hy = "__lodash_hash_undefined__", Ry = Object.prototype, Ny = Ry.hasOwnProperty;
function _y(t) {
  var e = this.__data__;
  if (Br) {
    var n = e[t];
    return n === Hy ? void 0 : n;
  }
  return Ny.call(e, t) ? e[t] : void 0;
}
var Iy = Object.prototype, Dy = Iy.hasOwnProperty;
function Py(t) {
  var e = this.__data__;
  return Br ? e[t] !== void 0 : Dy.call(e, t);
}
var By = "__lodash_hash_undefined__";
function $y(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Br && e === void 0 ? By : e, this;
}
function Cn(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Cn.prototype.clear = Ly;
Cn.prototype.delete = Vy;
Cn.prototype.get = _y;
Cn.prototype.has = Py;
Cn.prototype.set = $y;
function zy() {
  this.__data__ = [], this.size = 0;
}
function es(t, e) {
  for (var n = t.length; n--; )
    if (ha(t[n][0], e))
      return n;
  return -1;
}
var Fy = Array.prototype, jy = Fy.splice;
function Wy(t) {
  var e = this.__data__, n = es(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : jy.call(e, n, 1), --this.size, !0;
}
function Uy(t) {
  var e = this.__data__, n = es(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Ky(t) {
  return es(this.__data__, t) > -1;
}
function qy(t, e) {
  var n = this.__data__, r = es(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function It(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
It.prototype.clear = zy;
It.prototype.delete = Wy;
It.prototype.get = Uy;
It.prototype.has = Ky;
It.prototype.set = qy;
var $r = Nn(lt, "Map");
function Jy() {
  this.size = 0, this.__data__ = {
    hash: new Cn(),
    map: new ($r || It)(),
    string: new Cn()
  };
}
function Gy(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ts(t, e) {
  var n = t.__data__;
  return Gy(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Zy(t) {
  var e = ts(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Xy(t) {
  return ts(this, t).get(t);
}
function Yy(t) {
  return ts(this, t).has(t);
}
function Qy(t, e) {
  var n = ts(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function Dt(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Dt.prototype.clear = Jy;
Dt.prototype.delete = Zy;
Dt.prototype.get = Xy;
Dt.prototype.has = Yy;
Dt.prototype.set = Qy;
var eb = "Expected a function";
function ka(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(eb);
  var n = function() {
    var r = arguments, o = e ? e.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var s = t.apply(this, r);
    return n.cache = i.set(o, s) || i, s;
  };
  return n.cache = new (ka.Cache || Dt)(), n;
}
ka.Cache = Dt;
var tb = 500;
function nb(t) {
  var e = ka(t, function(r) {
    return n.size === tb && n.clear(), r;
  }), n = e.cache;
  return e;
}
var rb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ob = /\\(\\)?/g, ib = nb(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(rb, function(n, r, o, i) {
    e.push(o ? i.replace(ob, "$1") : r || n);
  }), e;
});
function sb(t) {
  return t == null ? "" : bf(t);
}
function ns(t, e) {
  return rt(t) ? t : wa(t, e) ? [t] : ib(sb(t));
}
var lb = 1 / 0;
function co(t) {
  if (typeof t == "string" || Xi(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -lb ? "-0" : e;
}
function Sa(t, e) {
  e = ns(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[co(e[n++])];
  return n && n == r ? t : void 0;
}
function ab(t, e, n) {
  var r = t == null ? void 0 : Sa(t, e);
  return r === void 0 ? n : r;
}
function xa(t, e) {
  for (var n = -1, r = e.length, o = t.length; ++n < r; )
    t[o + n] = e[n];
  return t;
}
var Ic = Ge ? Ge.isConcatSpreadable : void 0;
function cb(t) {
  return rt(t) || ba(t) || !!(Ic && t && t[Ic]);
}
function Vf(t, e, n, r, o) {
  var i = -1, s = t.length;
  for (n || (n = cb), o || (o = []); ++i < s; ) {
    var l = t[i];
    n(l) ? xa(o, l) : r || (o[o.length] = l);
  }
  return o;
}
function db(t) {
  var e = t == null ? 0 : t.length;
  return e ? Vf(t) : [];
}
function ub(t) {
  return wf(Cf(t, void 0, db), t + "");
}
var Ca = Lf(Object.getPrototypeOf, Object), fb = "[object Object]", pb = Function.prototype, hb = Object.prototype, Hf = pb.toString, mb = hb.hasOwnProperty, gb = Hf.call(Object);
function yb(t) {
  if (!gt(t) || Hn(t) != fb)
    return !1;
  var e = Ca(t);
  if (e === null)
    return !0;
  var n = mb.call(e, "constructor") && e.constructor;
  return typeof n == "function" && n instanceof n && Hf.call(n) == gb;
}
function bb(t, e, n) {
  var r = -1, o = t.length;
  e < 0 && (e = -e > o ? 0 : o + e), n = n > o ? o : n, n < 0 && (n += o), o = e > n ? 0 : n - e >>> 0, e >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = t[r + e];
  return i;
}
function vb() {
  this.__data__ = new It(), this.size = 0;
}
function wb(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function kb(t) {
  return this.__data__.get(t);
}
function Sb(t) {
  return this.__data__.has(t);
}
var xb = 200;
function Cb(t, e) {
  var n = this.__data__;
  if (n instanceof It) {
    var r = n.__data__;
    if (!$r || r.length < xb - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Dt(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function ht(t) {
  var e = this.__data__ = new It(t);
  this.size = e.size;
}
ht.prototype.clear = vb;
ht.prototype.delete = wb;
ht.prototype.get = kb;
ht.prototype.has = Sb;
ht.prototype.set = Cb;
function Tb(t, e) {
  return t && ao(e, Qi(e), t);
}
function Ab(t, e) {
  return t && ao(e, va(e), t);
}
var Rf = typeof exports == "object" && exports && !exports.nodeType && exports, Dc = Rf && typeof module == "object" && module && !module.nodeType && module, Mb = Dc && Dc.exports === Rf, Pc = Mb ? lt.Buffer : void 0, Bc = Pc ? Pc.allocUnsafe : void 0;
function Eb(t, e) {
  if (e)
    return t.slice();
  var n = t.length, r = Bc ? Bc(n) : new t.constructor(n);
  return t.copy(r), r;
}
function Ob(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, o = 0, i = []; ++n < r; ) {
    var s = t[n];
    e(s, n, t) && (i[o++] = s);
  }
  return i;
}
function Nf() {
  return [];
}
var Lb = Object.prototype, Vb = Lb.propertyIsEnumerable, $c = Object.getOwnPropertySymbols, Ta = $c ? function(t) {
  return t == null ? [] : (t = Object(t), Ob($c(t), function(e) {
    return Vb.call(t, e);
  }));
} : Nf;
function Hb(t, e) {
  return ao(t, Ta(t), e);
}
var Rb = Object.getOwnPropertySymbols, _f = Rb ? function(t) {
  for (var e = []; t; )
    xa(e, Ta(t)), t = Ca(t);
  return e;
} : Nf;
function Nb(t, e) {
  return ao(t, _f(t), e);
}
function If(t, e, n) {
  var r = e(t);
  return rt(t) ? r : xa(r, n(t));
}
function pl(t) {
  return If(t, Qi, Ta);
}
function Df(t) {
  return If(t, va, _f);
}
var hl = Nn(lt, "DataView"), ml = Nn(lt, "Promise"), gl = Nn(lt, "Set"), zc = "[object Map]", _b = "[object Object]", Fc = "[object Promise]", jc = "[object Set]", Wc = "[object WeakMap]", Uc = "[object DataView]", Ib = Rn(hl), Db = Rn($r), Pb = Rn(ml), Bb = Rn(gl), $b = Rn(fl), Xe = Hn;
(hl && Xe(new hl(new ArrayBuffer(1))) != Uc || $r && Xe(new $r()) != zc || ml && Xe(ml.resolve()) != Fc || gl && Xe(new gl()) != jc || fl && Xe(new fl()) != Wc) && (Xe = function(t) {
  var e = Hn(t), n = e == _b ? t.constructor : void 0, r = n ? Rn(n) : "";
  if (r)
    switch (r) {
      case Ib:
        return Uc;
      case Db:
        return zc;
      case Pb:
        return Fc;
      case Bb:
        return jc;
      case $b:
        return Wc;
    }
  return e;
});
var zb = Object.prototype, Fb = zb.hasOwnProperty;
function jb(t) {
  var e = t.length, n = new t.constructor(e);
  return e && typeof t[0] == "string" && Fb.call(t, "index") && (n.index = t.index, n.input = t.input), n;
}
var ni = lt.Uint8Array;
function Aa(t) {
  var e = new t.constructor(t.byteLength);
  return new ni(e).set(new ni(t)), e;
}
function Wb(t, e) {
  var n = e ? Aa(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.byteLength);
}
var Ub = /\w*$/;
function Kb(t) {
  var e = new t.constructor(t.source, Ub.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
var Kc = Ge ? Ge.prototype : void 0, qc = Kc ? Kc.valueOf : void 0;
function qb(t) {
  return qc ? Object(qc.call(t)) : {};
}
function Jb(t, e) {
  var n = e ? Aa(t.buffer) : t.buffer;
  return new t.constructor(n, t.byteOffset, t.length);
}
var Gb = "[object Boolean]", Zb = "[object Date]", Xb = "[object Map]", Yb = "[object Number]", Qb = "[object RegExp]", e0 = "[object Set]", t0 = "[object String]", n0 = "[object Symbol]", r0 = "[object ArrayBuffer]", o0 = "[object DataView]", i0 = "[object Float32Array]", s0 = "[object Float64Array]", l0 = "[object Int8Array]", a0 = "[object Int16Array]", c0 = "[object Int32Array]", d0 = "[object Uint8Array]", u0 = "[object Uint8ClampedArray]", f0 = "[object Uint16Array]", p0 = "[object Uint32Array]";
function h0(t, e, n) {
  var r = t.constructor;
  switch (e) {
    case r0:
      return Aa(t);
    case Gb:
    case Zb:
      return new r(+t);
    case o0:
      return Wb(t, n);
    case i0:
    case s0:
    case l0:
    case a0:
    case c0:
    case d0:
    case u0:
    case f0:
    case p0:
      return Jb(t, n);
    case Xb:
      return new r();
    case Yb:
    case t0:
      return new r(t);
    case Qb:
      return Kb(t);
    case e0:
      return new r();
    case n0:
      return qb(t);
  }
}
function m0(t) {
  return typeof t.constructor == "function" && !ya(t) ? y1(Ca(t)) : {};
}
var g0 = "[object Map]";
function y0(t) {
  return gt(t) && Xe(t) == g0;
}
var Jc = Qn && Qn.isMap, b0 = Jc ? Yi(Jc) : y0, v0 = "[object Set]";
function w0(t) {
  return gt(t) && Xe(t) == v0;
}
var Gc = Qn && Qn.isSet, k0 = Gc ? Yi(Gc) : w0, S0 = 1, x0 = 2, C0 = 4, Pf = "[object Arguments]", T0 = "[object Array]", A0 = "[object Boolean]", M0 = "[object Date]", E0 = "[object Error]", Bf = "[object Function]", O0 = "[object GeneratorFunction]", L0 = "[object Map]", V0 = "[object Number]", $f = "[object Object]", H0 = "[object RegExp]", R0 = "[object Set]", N0 = "[object String]", _0 = "[object Symbol]", I0 = "[object WeakMap]", D0 = "[object ArrayBuffer]", P0 = "[object DataView]", B0 = "[object Float32Array]", $0 = "[object Float64Array]", z0 = "[object Int8Array]", F0 = "[object Int16Array]", j0 = "[object Int32Array]", W0 = "[object Uint8Array]", U0 = "[object Uint8ClampedArray]", K0 = "[object Uint16Array]", q0 = "[object Uint32Array]", Y = {};
Y[Pf] = Y[T0] = Y[D0] = Y[P0] = Y[A0] = Y[M0] = Y[B0] = Y[$0] = Y[z0] = Y[F0] = Y[j0] = Y[L0] = Y[V0] = Y[$f] = Y[H0] = Y[R0] = Y[N0] = Y[_0] = Y[W0] = Y[U0] = Y[K0] = Y[q0] = !0;
Y[E0] = Y[Bf] = Y[I0] = !1;
function zo(t, e, n, r, o, i) {
  var s, l = e & S0, a = e & x0, c = e & C0;
  if (n && (s = o ? n(t, r, o, i) : n(t)), s !== void 0)
    return s;
  if (!yt(t))
    return t;
  var d = rt(t);
  if (d) {
    if (s = jb(t), !l)
      return v1(t, s);
  } else {
    var u = Xe(t), f = u == Bf || u == O0;
    if (ti(t))
      return Eb(t, l);
    if (u == $f || u == Pf || f && !o) {
      if (s = a || f ? {} : m0(t), !l)
        return a ? Nb(t, Ab(s, t)) : Hb(t, Tb(s, t));
    } else {
      if (!Y[u])
        return o ? t : {};
      s = h0(t, u, l);
    }
  }
  i || (i = new ht());
  var p = i.get(t);
  if (p)
    return p;
  i.set(t, s), k0(t) ? t.forEach(function(g) {
    s.add(zo(g, e, n, g, t, i));
  }) : b0(t) && t.forEach(function(g, y) {
    s.set(y, zo(g, e, n, y, t, i));
  });
  var h = c ? a ? Df : pl : a ? va : Qi, m = d ? void 0 : h(t);
  return A1(m || t, function(g, y) {
    m && (y = g, g = t[y]), xf(s, y, zo(g, e, n, y, t, i));
  }), s;
}
var J0 = "__lodash_hash_undefined__";
function G0(t) {
  return this.__data__.set(t, J0), this;
}
function Z0(t) {
  return this.__data__.has(t);
}
function zr(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new Dt(); ++e < n; )
    this.add(t[e]);
}
zr.prototype.add = zr.prototype.push = G0;
zr.prototype.has = Z0;
function X0(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function zf(t, e) {
  return t.has(e);
}
var Y0 = 1, Q0 = 2;
function Ff(t, e, n, r, o, i) {
  var s = n & Y0, l = t.length, a = e.length;
  if (l != a && !(s && a > l))
    return !1;
  var c = i.get(t), d = i.get(e);
  if (c && d)
    return c == e && d == t;
  var u = -1, f = !0, p = n & Q0 ? new zr() : void 0;
  for (i.set(t, e), i.set(e, t); ++u < l; ) {
    var h = t[u], m = e[u];
    if (r)
      var g = s ? r(m, h, u, e, t, i) : r(h, m, u, t, e, i);
    if (g !== void 0) {
      if (g)
        continue;
      f = !1;
      break;
    }
    if (p) {
      if (!X0(e, function(y, b) {
        if (!zf(p, b) && (h === y || o(h, y, n, r, i)))
          return p.push(b);
      })) {
        f = !1;
        break;
      }
    } else if (!(h === m || o(h, m, n, r, i))) {
      f = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), f;
}
function ev(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, o) {
    n[++e] = [o, r];
  }), n;
}
function tv(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var nv = 1, rv = 2, ov = "[object Boolean]", iv = "[object Date]", sv = "[object Error]", lv = "[object Map]", av = "[object Number]", cv = "[object RegExp]", dv = "[object Set]", uv = "[object String]", fv = "[object Symbol]", pv = "[object ArrayBuffer]", hv = "[object DataView]", Zc = Ge ? Ge.prototype : void 0, Vs = Zc ? Zc.valueOf : void 0;
function mv(t, e, n, r, o, i, s) {
  switch (n) {
    case hv:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case pv:
      return !(t.byteLength != e.byteLength || !i(new ni(t), new ni(e)));
    case ov:
    case iv:
    case av:
      return ha(+t, +e);
    case sv:
      return t.name == e.name && t.message == e.message;
    case cv:
    case uv:
      return t == e + "";
    case lv:
      var l = ev;
    case dv:
      var a = r & nv;
      if (l || (l = tv), t.size != e.size && !a)
        return !1;
      var c = s.get(t);
      if (c)
        return c == e;
      r |= rv, s.set(t, e);
      var d = Ff(l(t), l(e), r, o, i, s);
      return s.delete(t), d;
    case fv:
      if (Vs)
        return Vs.call(t) == Vs.call(e);
  }
  return !1;
}
var gv = 1, yv = Object.prototype, bv = yv.hasOwnProperty;
function vv(t, e, n, r, o, i) {
  var s = n & gv, l = pl(t), a = l.length, c = pl(e), d = c.length;
  if (a != d && !s)
    return !1;
  for (var u = a; u--; ) {
    var f = l[u];
    if (!(s ? f in e : bv.call(e, f)))
      return !1;
  }
  var p = i.get(t), h = i.get(e);
  if (p && h)
    return p == e && h == t;
  var m = !0;
  i.set(t, e), i.set(e, t);
  for (var g = s; ++u < a; ) {
    f = l[u];
    var y = t[f], b = e[f];
    if (r)
      var v = s ? r(b, y, f, e, t, i) : r(y, b, f, t, e, i);
    if (!(v === void 0 ? y === b || o(y, b, n, r, i) : v)) {
      m = !1;
      break;
    }
    g || (g = f == "constructor");
  }
  if (m && !g) {
    var x = t.constructor, k = e.constructor;
    x != k && "constructor" in t && "constructor" in e && !(typeof x == "function" && x instanceof x && typeof k == "function" && k instanceof k) && (m = !1);
  }
  return i.delete(t), i.delete(e), m;
}
var wv = 1, Xc = "[object Arguments]", Yc = "[object Array]", ko = "[object Object]", kv = Object.prototype, Qc = kv.hasOwnProperty;
function Sv(t, e, n, r, o, i) {
  var s = rt(t), l = rt(e), a = s ? Yc : Xe(t), c = l ? Yc : Xe(e);
  a = a == Xc ? ko : a, c = c == Xc ? ko : c;
  var d = a == ko, u = c == ko, f = a == c;
  if (f && ti(t)) {
    if (!ti(e))
      return !1;
    s = !0, d = !1;
  }
  if (f && !d)
    return i || (i = new ht()), s || Ef(t) ? Ff(t, e, n, r, o, i) : mv(t, e, a, n, r, o, i);
  if (!(n & wv)) {
    var p = d && Qc.call(t, "__wrapped__"), h = u && Qc.call(e, "__wrapped__");
    if (p || h) {
      var m = p ? t.value() : t, g = h ? e.value() : e;
      return i || (i = new ht()), o(m, g, n, r, i);
    }
  }
  return f ? (i || (i = new ht()), vv(t, e, n, r, o, i)) : !1;
}
function rs(t, e, n, r, o) {
  return t === e ? !0 : t == null || e == null || !gt(t) && !gt(e) ? t !== t && e !== e : Sv(t, e, n, r, rs, o);
}
var xv = 1, Cv = 2;
function Tv(t, e, n, r) {
  var o = n.length, i = o;
  if (t == null)
    return !i;
  for (t = Object(t); o--; ) {
    var s = n[o];
    if (s[2] ? s[1] !== t[s[0]] : !(s[0] in t))
      return !1;
  }
  for (; ++o < i; ) {
    s = n[o];
    var l = s[0], a = t[l], c = s[1];
    if (s[2]) {
      if (a === void 0 && !(l in t))
        return !1;
    } else {
      var d = new ht(), u;
      if (!(u === void 0 ? rs(c, a, xv | Cv, r, d) : u))
        return !1;
    }
  }
  return !0;
}
function jf(t) {
  return t === t && !yt(t);
}
function Av(t) {
  for (var e = Qi(t), n = e.length; n--; ) {
    var r = e[n], o = t[r];
    e[n] = [r, o, jf(o)];
  }
  return e;
}
function Wf(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Mv(t) {
  var e = Av(t);
  return e.length == 1 && e[0][2] ? Wf(e[0][0], e[0][1]) : function(n) {
    return n === t || Tv(n, t, e);
  };
}
function Ev(t, e) {
  return t != null && e in Object(t);
}
function Ov(t, e, n) {
  e = ns(e, t);
  for (var r = -1, o = e.length, i = !1; ++r < o; ) {
    var s = co(e[r]);
    if (!(i = t != null && n(t, s)))
      break;
    t = t[s];
  }
  return i || ++r != o ? i : (o = t == null ? 0 : t.length, !!o && ma(o) && kf(s, o) && (rt(t) || ba(t)));
}
function Lv(t, e) {
  return t != null && Ov(t, e, Ev);
}
var Vv = 1, Hv = 2;
function Rv(t, e) {
  return wa(t) && jf(e) ? Wf(co(t), e) : function(n) {
    var r = ab(n, t);
    return r === void 0 && r === e ? Lv(n, t) : rs(e, r, Vv | Hv);
  };
}
function Nv(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function _v(t) {
  return function(e) {
    return Sa(e, t);
  };
}
function Iv(t) {
  return wa(t) ? Nv(co(t)) : _v(t);
}
function Dv(t) {
  return typeof t == "function" ? t : t == null ? pa : typeof t == "object" ? rt(t) ? Rv(t[0], t[1]) : Mv(t) : Iv(t);
}
var Hs = function() {
  return lt.Date.now();
}, Pv = "Expected a function", Bv = Math.max, $v = Math.min;
function zv(t, e, n) {
  var r, o, i, s, l, a, c = 0, d = !1, u = !1, f = !0;
  if (typeof t != "function")
    throw new TypeError(Pv);
  e = Ec(e) || 0, yt(n) && (d = !!n.leading, u = "maxWait" in n, i = u ? Bv(Ec(n.maxWait) || 0, e) : i, f = "trailing" in n ? !!n.trailing : f);
  function p(w) {
    var L = r, E = o;
    return r = o = void 0, c = w, s = t.apply(E, L), s;
  }
  function h(w) {
    return c = w, l = setTimeout(y, e), d ? p(w) : s;
  }
  function m(w) {
    var L = w - a, E = w - c, A = e - L;
    return u ? $v(A, i - E) : A;
  }
  function g(w) {
    var L = w - a, E = w - c;
    return a === void 0 || L >= e || L < 0 || u && E >= i;
  }
  function y() {
    var w = Hs();
    if (g(w))
      return b(w);
    l = setTimeout(y, m(w));
  }
  function b(w) {
    return l = void 0, f && r ? p(w) : (r = o = void 0, s);
  }
  function v() {
    l !== void 0 && clearTimeout(l), c = 0, r = a = o = l = void 0;
  }
  function x() {
    return l === void 0 ? s : b(Hs());
  }
  function k() {
    var w = Hs(), L = g(w);
    if (r = arguments, o = this, a = w, L) {
      if (l === void 0)
        return h(a);
      if (u)
        return clearTimeout(l), l = setTimeout(y, e), p(a);
    }
    return l === void 0 && (l = setTimeout(y, e)), s;
  }
  return k.cancel = v, k.flush = x, k;
}
function Rs(t) {
  return gt(t) && ga(t);
}
var Fv = 200;
function jv(t, e, n, r) {
  var o = -1, i = V1, s = !0, l = t.length, a = [], c = e.length;
  if (!l)
    return a;
  n && (e = fa(e, Yi(n))), e.length >= Fv && (i = zf, s = !1, e = new zr(e));
  e:
    for (; ++o < l; ) {
      var d = t[o], u = n == null ? d : n(d);
      if (d = d !== 0 ? d : 0, s && u === u) {
        for (var f = c; f--; )
          if (e[f] === u)
            continue e;
        a.push(d);
      } else i(e, u, r) || a.push(d);
    }
  return a;
}
function Uf(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
var Wv = I1(function(t, e) {
  var n = Uf(e);
  return Rs(n) && (n = void 0), Rs(t) ? jv(t, Vf(e, 1, Rs, !0), Dv(n)) : [];
});
function Uv(t, e) {
  return e.length < 2 ? t : Sa(t, bb(e, 0, -1));
}
function Kv(t, e) {
  return rs(t, e);
}
function qv(t, e) {
  return e = ns(e, t), t = Uv(t, e), t == null || delete t[co(Uf(e))];
}
function Jv(t) {
  return yb(t) ? void 0 : t;
}
var Gv = 1, Zv = 2, Xv = 4, Yv = ub(function(t, e) {
  var n = {};
  if (t == null)
    return n;
  var r = !1;
  e = fa(e, function(i) {
    return i = ns(i, t), r || (r = i.length > 1), i;
  }), ao(t, Df(t), n), r && (n = zo(n, Gv | Zv | Xv, Jv));
  for (var o = e.length; o--; )
    qv(n, e[o]);
  return n;
}), Qv = "Expected a function";
function Cr(t, e, n) {
  var r = !0, o = !0;
  if (typeof t != "function")
    throw new TypeError(Qv);
  return yt(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), zv(t, e, {
    leading: r,
    maxWait: e,
    trailing: o
  });
}
function ew(t, e, n) {
  return t < e ? e : t > n ? n : t;
}
const yl = (t) => typeof t == "number", Tr = (t) => typeof t == "string", er = (t) => typeof t == "boolean", tw = (t) => typeof t == "function", Ar = (t, e = "px") => {
  if (!t) return t;
  const n = yl(t) ? String(t) : t, r = Number.parseFloat(n), o = n.match(/[a-zA-Z%]+$/), i = o ? o[0] : e;
  return Number.isNaN(r) ? t : r + i;
};
function nw(t, e) {
  const { extensions: n = [] } = t.extensionManager ?? {};
  return !!n.find((o) => o.name === e);
}
const ed = (t, e) => {
  const { schema: n } = t, r = n.marks[e], o = n.nodes[e];
  return r ? t.isActive(r.name) : o ? t.isActive(o.name) : !1;
};
function Kf(t, e) {
  const { state: n } = Zi(), r = z(() => er(C(t)) ? Xo : Tr(n.defaultMarkdownTheme) && n.defaultMarkdownTheme ? n.defaultMarkdownTheme : Xo), o = z(() => ({
    [`markdown-theme-${C(r)}`]: !!Tr(C(r))
  }));
  function i(l) {
    !er(C(t)) && C(t) !== l && (e == null || e(l));
  }
  return Ht(r, (l) => i(l)), Ht(t, (l) => {
    l && Tr(l) && n.defaultMarkdownTheme !== l && (n.defaultMarkdownTheme = l);
  }), (() => {
    n.defaultMarkdownTheme && i(n.defaultMarkdownTheme);
  })(), {
    markdownThemeStyle: o
  };
}
function qf(t) {
  return Sg() ? (xg(t), !0) : !1;
}
const Kn = /* @__PURE__ */ new WeakMap(), rw = /* @__NO_SIDE_EFFECTS__ */ (...t) => {
  var e;
  const n = t[0], r = (e = so()) == null ? void 0 : e.proxy;
  if (r == null && !Cg())
    throw new Error("injectLocal must be called in setup");
  return r && Kn.has(r) && n in Kn.get(r) ? Kn.get(r)[n] : df(...t);
};
function ow(t, e) {
  var n;
  const r = (n = so()) == null ? void 0 : n.proxy;
  if (r == null)
    throw new Error("provideLocal must be called in setup");
  Kn.has(r) || Kn.set(r, /* @__PURE__ */ Object.create(null));
  const o = Kn.get(r);
  return o[t] = e, Zo(t, e);
}
// @__NO_SIDE_EFFECTS__
function iw(t, e) {
  const n = Symbol(t.name || "InjectionState"), r = void 0;
  return [(...s) => {
    const l = t(...s);
    return ow(n, l), l;
  }, () => /* @__PURE__ */ rw(n, r)];
}
const Jf = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sw = Object.prototype.toString, lw = (t) => sw.call(t) === "[object Object]";
function Ns(t) {
  return Array.isArray(t) ? t : [t];
}
function aw(t) {
  return so();
}
function cw(t, e = !0, n) {
  aw() ? af(t, n) : e ? t() : cf(t);
}
function dw(t, e, n) {
  return Ht(
    t,
    e,
    {
      ...n,
      immediate: !0
    }
  );
}
const uw = Jf ? window : void 0, fw = Jf ? window.document : void 0;
function bl(t) {
  var e;
  const n = $o(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
function td(...t) {
  const e = [], n = () => {
    e.forEach((l) => l()), e.length = 0;
  }, r = (l, a, c, d) => (l.addEventListener(a, c, d), () => l.removeEventListener(a, c, d)), o = z(() => {
    const l = Ns($o(t[0])).filter((a) => a != null);
    return l.every((a) => typeof a != "string") ? l : void 0;
  }), i = dw(
    () => {
      var l, a;
      return [
        (a = (l = o.value) == null ? void 0 : l.map((c) => bl(c))) != null ? a : [uw].filter((c) => c != null),
        Ns($o(o.value ? t[1] : t[0])),
        Ns(C(o.value ? t[2] : t[1])),
        // @ts-expect-error - TypeScript gets the correct types, but somehow still complains
        $o(o.value ? t[3] : t[2])
      ];
    },
    ([l, a, c, d]) => {
      if (n(), !(l != null && l.length) || !(a != null && a.length) || !(c != null && c.length))
        return;
      const u = lw(d) ? { ...d } : d;
      e.push(
        ...l.flatMap(
          (f) => a.flatMap(
            (p) => c.map((h) => r(f, p, h, u))
          )
        )
      );
    },
    { flush: "post" }
  ), s = () => {
    i(), n();
  };
  return qf(n), s;
}
// @__NO_SIDE_EFFECTS__
function pw() {
  const t = uf(!1), e = so();
  return e && af(() => {
    t.value = !0;
  }, e), t;
}
// @__NO_SIDE_EFFECTS__
function hw(t) {
  const e = /* @__PURE__ */ pw();
  return z(() => (e.value, !!t()));
}
const nd = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function mw(t, e = {}) {
  const {
    document: n = fw,
    autoExit: r = !1
  } = e, o = z(() => {
    var b;
    return (b = bl(t)) != null ? b : n == null ? void 0 : n.documentElement;
  }), i = uf(!1), s = z(() => [
    "requestFullscreen",
    "webkitRequestFullscreen",
    "webkitEnterFullscreen",
    "webkitEnterFullScreen",
    "webkitRequestFullScreen",
    "mozRequestFullScreen",
    "msRequestFullscreen"
  ].find((b) => n && b in n || o.value && b in o.value)), l = z(() => [
    "exitFullscreen",
    "webkitExitFullscreen",
    "webkitExitFullScreen",
    "webkitCancelFullScreen",
    "mozCancelFullScreen",
    "msExitFullscreen"
  ].find((b) => n && b in n || o.value && b in o.value)), a = z(() => [
    "fullScreen",
    "webkitIsFullScreen",
    "webkitDisplayingFullscreen",
    "mozFullScreen",
    "msFullscreenElement"
  ].find((b) => n && b in n || o.value && b in o.value)), c = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((b) => n && b in n), d = /* @__PURE__ */ hw(() => o.value && n && s.value !== void 0 && l.value !== void 0 && a.value !== void 0), u = () => c ? (n == null ? void 0 : n[c]) === o.value : !1, f = () => {
    if (a.value) {
      if (n && n[a.value] != null)
        return n[a.value];
      {
        const b = o.value;
        if ((b == null ? void 0 : b[a.value]) != null)
          return !!b[a.value];
      }
    }
    return !1;
  };
  async function p() {
    if (!(!d.value || !i.value)) {
      if (l.value)
        if ((n == null ? void 0 : n[l.value]) != null)
          await n[l.value]();
        else {
          const b = o.value;
          (b == null ? void 0 : b[l.value]) != null && await b[l.value]();
        }
      i.value = !1;
    }
  }
  async function h() {
    if (!d.value || i.value)
      return;
    f() && await p();
    const b = o.value;
    s.value && (b == null ? void 0 : b[s.value]) != null && (await b[s.value](), i.value = !0);
  }
  async function m() {
    await (i.value ? p() : h());
  }
  const g = () => {
    const b = f();
    (!b || b && u()) && (i.value = b);
  }, y = { capture: !1, passive: !0 };
  return td(n, nd, g, y), td(() => bl(o), nd, g, y), cw(g, !1), r && qf(p), {
    isSupported: d,
    isFullscreen: i,
    enter: h,
    exit: p,
    toggle: m
  };
}
const [gw, Ma] = /* @__PURE__ */ iw(() => {
  const { state: t } = Zi(), e = Yn({
    extensions: t.extensions ?? [],
    defaultLang: cl,
    defaultMarkdownTheme: Xo,
    isFullscreen: !1,
    color: void 0,
    highlight: void 0
  }), n = z(() => e.isFullscreen);
  function r() {
    e.isFullscreen = !e.isFullscreen;
  }
  return Vn(() => {
    e.extensions = t.extensions, e.defaultLang = t.defaultLang, e.defaultMarkdownTheme = t.defaultMarkdownTheme;
  }), {
    state: e,
    isFullscreen: n,
    toggleFullscreen: r
  };
}), rd = "[vuetify-pro-tiptap]";
class vl {
  static warn(e) {
    console.warn(`${rd}: ${e}`);
  }
  static error(e) {
    console.error(`${rd}: ${e}`);
  }
}
function yw(t) {
  return t = t || /* @__PURE__ */ new Map(), {
    /**
     * A Map of event names to registered handler functions.
     */
    all: t,
    /**
     * Register an event handler for the given type.
     * @param {string|symbol} type Type of event to listen for, or `'*'` for all events
     * @param {Function} handler Function to call in response to given event
     * @memberOf mitt
     */
    on(e, n) {
      const r = t.get(e);
      r ? r.push(n) : t.set(e, [n]);
    },
    /**
     * Remove an event handler for the given type.
     * If `handler` is omitted, all handlers of the given type are removed.
     * @param {string|symbol} type Type of event to unregister `handler` from (`'*'` to remove a wildcard handler)
     * @param {Function} [handler] Handler function to remove
     * @memberOf mitt
     */
    off(e, n) {
      const r = t.get(e);
      r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : t.set(e, []));
    },
    /**
     * Invoke all handlers for the given type.
     * If present, `'*'` handlers are invoked after type-matched handlers.
     *
     * Note: Manually firing '*' handlers is not supported.
     *
     * @param {string|symbol} type The event type to invoke
     * @param {Any} [evt] Any value (object is recommended and powerful), passed to each handler
     * @memberOf mitt
     */
    emit(e, n) {
      let r = t.get(e);
      r && r.slice().map((o) => {
        o(n);
      }), r = t.get("*"), r && r.slice().map((o) => {
        o(e, n);
      });
    }
  };
}
const bw = {
  "editor.remove": "Entfernen",
  "editor.words": "WÖRTER",
  "editor.characters": "ZEICHEN",
  "editor.default": "Standard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Mittel",
  "editor.size.large.tooltip": "Groß",
  "editor.bold.tooltip": "Fett",
  "editor.italic.tooltip": "Kursiv",
  "editor.underline.tooltip": "Unterstrichen",
  "editor.strike.tooltip": "Durchgestrichen",
  "editor.color.tooltip": "Farbe",
  "editor.highlight.tooltip": "Hervorheben",
  "editor.heading.tooltip": "Überschriften",
  "editor.heading.h1.tooltip": "Überschrift 1",
  "editor.heading.h2.tooltip": "Überschrift 2",
  "editor.heading.h3.tooltip": "Überschrift 3",
  "editor.heading.h4.tooltip": "Überschrift 4",
  "editor.heading.h5.tooltip": "Überschrift 5",
  "editor.heading.h6.tooltip": "Überschrift 6",
  "editor.paragraph.tooltip": "Absatz",
  "editor.textalign.tooltip": "Ausrichten",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Zentriert",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Blocksatz",
  "editor.fontFamily.tooltip": "Schriftart",
  "editor.fontSize.tooltip": "Schriftgröße",
  "editor.superscript.tooltip": "Hochgestellt",
  "editor.subscript.tooltip": "Tiefgestellt",
  "editor.bulletlist.tooltip": "Aufzählungsliste",
  "editor.orderedlist.tooltip": "Nummerierte Liste",
  "editor.tasklist.tooltip": "Aufgabenliste",
  "editor.indent.tooltip": "Einzug",
  "editor.outdent.tooltip": "Ausrücken",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link entfernen",
  "editor.link.open": "Link öffnen",
  "editor.link.dialog.title": "Link einfügen",
  "editor.link.dialog.link": "Link",
  "editor.link.dialog.openInNewTab": "In neuem Tab öffnen",
  "editor.link.dialog.button.apply": "Anwenden",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Bild",
  "editor.image.float.left.tooltip": "Links ausrichten",
  "editor.image.float.none.tooltip": "Keine Ausrichtung",
  "editor.image.float.right.tooltip": "Rechts ausrichten",
  "editor.image.dialog.title": "Bild einfügen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Hochladen",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Original-Seitenverhältnis beibehalten",
  "editor.image.dialog.form.file": "Datei",
  "editor.image.dialog.button.apply": "Anwenden",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video einfügen",
  "editor.video.dialog.link": "Link",
  "editor.video.dialog.button.apply": "Anwenden",
  "editor.table.tooltip": "Tabelle",
  "editor.table.menu.insert_table": "Tabelle einfügen",
  "editor.table.menu.insert_table.with_header_row": "Mit Kopfzeile",
  "editor.table.menu.add_column_before": "Spalte davor einfügen",
  "editor.table.menu.add_column_after": "Spalte danach einfügen",
  "editor.table.menu.delete_column": "Spalte löschen",
  "editor.table.menu.add_row_before": "Zeile davor einfügen",
  "editor.table.menu.add_row_after": "Zeile danach einfügen",
  "editor.table.menu.delete_row": "Zeile löschen",
  "editor.table.menu.merge_or_split_cells": "Zellen zusammenführen oder teilen",
  "editor.table.menu.delete_table": "Tabelle löschen",
  "editor.blockquote.tooltip": "Zitat",
  "editor.horizontalrule.tooltip": "Horizontale Linie",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Codeblock",
  "editor.clear.tooltip": "Formatierung löschen",
  "editor.undo.tooltip": "Rückgängig",
  "editor.redo.tooltip": "Wiederholen",
  "editor.fullscreen.tooltip.fullscreen": "Vollbild",
  "editor.fullscreen.tooltip.exit": "Vollbild beenden"
}, vw = {
  "editor.remove": "Remove",
  "editor.words": "WORDS",
  "editor.characters": "CHARACTERS",
  "editor.default": "default",
  "editor.size.small.tooltip": "Small",
  "editor.size.medium.tooltip": "Medium",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Bold",
  "editor.italic.tooltip": "Italic",
  "editor.underline.tooltip": "Underline",
  "editor.strike.tooltip": "Strike",
  "editor.color.tooltip": "Color",
  "editor.highlight.tooltip": "Highlight",
  "editor.heading.tooltip": "Headings",
  "editor.heading.h1.tooltip": "Heading 1",
  "editor.heading.h2.tooltip": "Heading 2",
  "editor.heading.h3.tooltip": "Heading 3",
  "editor.heading.h4.tooltip": "Heading 4",
  "editor.heading.h5.tooltip": "Heading 5",
  "editor.heading.h6.tooltip": "Heading 6",
  "editor.paragraph.tooltip": "Paragraph",
  "editor.textalign.tooltip": "Align",
  "editor.textalign.left.tooltip": "Left",
  "editor.textalign.center.tooltip": "Center",
  "editor.textalign.right.tooltip": "Right",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font family",
  "editor.fontSize.tooltip": "Font size",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Bullet List",
  "editor.orderedlist.tooltip": "Ordered List",
  "editor.tasklist.tooltip": "Task List",
  "editor.indent.tooltip": "Indent",
  "editor.outdent.tooltip": "Outdent",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Unlink",
  "editor.link.open": "Open link",
  "editor.link.dialog.title": "Insert link",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.openInNewTab": "Open in new tab",
  "editor.link.dialog.button.apply": "apply",
  "editor.markdownTheme.tooltip": "Theme",
  "editor.image.tooltip": "Image",
  "editor.image.float.left.tooltip": "Float left",
  "editor.image.float.none.tooltip": "Float none",
  "editor.image.float.right.tooltip": "Float right",
  "editor.image.dialog.title": "Insert image",
  "editor.image.dialog.tab.url": "url",
  "editor.image.dialog.tab.upload": "upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Lock original aspect ratio",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.button.apply": "apply",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Insert video",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "apply",
  "editor.table.tooltip": "Table",
  "editor.table.menu.insert_table": "Insert Table",
  "editor.table.menu.insert_table.with_header_row": "With header row",
  "editor.table.menu.add_column_before": "Add Column Before",
  "editor.table.menu.add_column_after": "Add Column After",
  "editor.table.menu.delete_column": "Delete Column",
  "editor.table.menu.add_row_before": "Add Row Before",
  "editor.table.menu.add_row_after": "Add Row After",
  "editor.table.menu.delete_row": "Delete Row",
  "editor.table.menu.merge_or_split_cells": "Merge Or Split Cells",
  "editor.table.menu.delete_table": "Delete Table",
  "editor.blockquote.tooltip": "Blockquote",
  "editor.horizontalrule.tooltip": "Horizontal Rule",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code Block",
  "editor.clear.tooltip": "Clear Format",
  "editor.undo.tooltip": "Undo",
  "editor.redo.tooltip": "Redo",
  "editor.fullscreen.tooltip.fullscreen": "Fullscreen",
  "editor.fullscreen.tooltip.exit": "Fullscreen Exit"
}, ww = {
  "editor.remove": "Rimuovi",
  "editor.words": "Parole",
  "editor.characters": "Caratteri",
  "editor.default": "Predefinito",
  "editor.size.small.tooltip": "Piccolo",
  "editor.size.medium.tooltip": "Medio",
  "editor.size.large.tooltip": "Grande",
  "editor.bold.tooltip": "Grassetto",
  "editor.italic.tooltip": "Corsivo",
  "editor.underline.tooltip": "Sottolineato",
  "editor.strike.tooltip": "Barrato",
  "editor.color.tooltip": "Colore",
  "editor.highlight.tooltip": "Evidenzia",
  "editor.heading.tooltip": "Intestazioni",
  "editor.heading.h1.tooltip": "Intestzione 1",
  "editor.heading.h2.tooltip": "Intestzione 2",
  "editor.heading.h3.tooltip": "Intestzione 3",
  "editor.heading.h4.tooltip": "Intestazione 4",
  "editor.heading.h5.tooltip": "Intestazione 5",
  "editor.heading.h6.tooltip": "Intestazione 6",
  "editor.paragraph.tooltip": "Paragrafo",
  "editor.textalign.tooltip": "Allineamento",
  "editor.textalign.left.tooltip": "Sinistra",
  "editor.textalign.center.tooltip": "Centro",
  "editor.textalign.right.tooltip": "Destra",
  "editor.textalign.justify.tooltip": "Giustificato",
  "editor.fontFamily.tooltip": "Tipo carattere",
  "editor.fontSize.tooltip": "Dimensione carattere",
  "editor.superscript.tooltip": "Apice",
  "editor.subscript.tooltip": "Pedice",
  "editor.bulletlist.tooltip": "Elenco puntato",
  "editor.orderedlist.tooltip": "Elenco numerato",
  "editor.tasklist.tooltip": "Elenco attività",
  "editor.indent.tooltip": "Aumenta rientro",
  "editor.outdent.tooltip": "Riduci rientro",
  "editor.link.tooltip": "Aggiungi collegamento",
  "editor.link.unlink.tooltip": "Rimuovi collegamento",
  "editor.link.open": "Apri collegamento",
  "editor.link.dialog.title": "Inserisci collegamento",
  "editor.link.dialog.link": "Collegamento",
  "editor.link.dialog.openInNewTab": "Apri in una nuova finestra",
  "editor.link.dialog.button.apply": "Applica",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Immagine",
  "editor.image.float.left.tooltip": "Allinea a sinistra",
  "editor.image.float.none.tooltip": "Nessun allineamento",
  "editor.image.float.right.tooltip": "Allinea a destra",
  "editor.image.dialog.title": "Inserisci immagine",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Carica",
  "editor.image.dialog.form.link": "Collegamento",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Blocca le proporzioni originali",
  "editor.image.dialog.form.file": "File",
  "editor.image.dialog.button.apply": "Applica",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Inserisci video",
  "editor.video.dialog.link": "Collegamento",
  "editor.video.dialog.button.apply": "Applica",
  "editor.table.tooltip": "Tabella",
  "editor.table.menu.insert_table": "Inserisci tabella",
  "editor.table.menu.insert_table.with_header_row": "Con riga intestazione",
  "editor.table.menu.add_column_before": "Aggiungi colonna prima",
  "editor.table.menu.add_column_after": "Aggiungi colonna dopo",
  "editor.table.menu.delete_column": "Elimina colonna",
  "editor.table.menu.add_row_before": "Aggiungi riga prima",
  "editor.table.menu.add_row_after": "Aggiungi riga dopo",
  "editor.table.menu.delete_row": "Elimina riga",
  "editor.table.menu.merge_or_split_cells": "Unisci o dividi celle",
  "editor.table.menu.delete_table": "Elimina tabella",
  "editor.blockquote.tooltip": "Citazione",
  "editor.horizontalrule.tooltip": "Linea orizzontale",
  "editor.code.tooltip": "Codice",
  "editor.codeblock.tooltip": "Blocco di codice",
  "editor.clear.tooltip": "Rimuovi formattazione",
  "editor.undo.tooltip": "Annulla",
  "editor.redo.tooltip": "Ripristina",
  "editor.fullscreen.tooltip.fullscreen": "Schermo intero",
  "editor.fullscreen.tooltip.exit": "Esci da schermo intero"
}, kw = {
  "editor.remove": "Verwijderen",
  "editor.words": "WOORDEN",
  "editor.characters": "KARAKTERS",
  "editor.default": "standaard",
  "editor.size.small.tooltip": "Klein",
  "editor.size.medium.tooltip": "Middelmatig",
  "editor.size.large.tooltip": "Cover",
  "editor.bold.tooltip": "Dikgedrukt",
  "editor.italic.tooltip": "Cursief",
  "editor.underline.tooltip": "Onderstreept",
  "editor.strike.tooltip": "Doorgetrokken",
  "editor.color.tooltip": "Kleur",
  "editor.highlight.tooltip": "Markeren",
  "editor.heading.tooltip": "Koppen",
  "editor.heading.h1.tooltip": "Kop 1",
  "editor.heading.h2.tooltip": "Kop 2",
  "editor.heading.h3.tooltip": "Kop 3",
  "editor.heading.h4.tooltip": "Kop 4",
  "editor.heading.h5.tooltip": "Kop 5",
  "editor.heading.h6.tooltip": "Kop 6",
  "editor.paragraph.tooltip": "Paragraaf",
  "editor.textalign.tooltip": "Uitlijnen",
  "editor.textalign.left.tooltip": "Links",
  "editor.textalign.center.tooltip": "Midden",
  "editor.textalign.right.tooltip": "Rechts",
  "editor.textalign.justify.tooltip": "Justify",
  "editor.fontFamily.tooltip": "Font familie",
  "editor.fontSize.tooltip": "Font grootte",
  "editor.superscript.tooltip": "Superscript",
  "editor.subscript.tooltip": "Subscript",
  "editor.bulletlist.tooltip": "Ongenummerde lijst",
  "editor.orderedlist.tooltip": "Genummerde lijst",
  "editor.tasklist.tooltip": "Takenlijst",
  "editor.indent.tooltip": "Inspringing vergroten",
  "editor.outdent.tooltip": "Inspringing verkleinen",
  "editor.link.tooltip": "Link",
  "editor.link.unlink.tooltip": "Link verwijderen",
  "editor.link.open": "Link openen",
  "editor.link.dialog.title": "Link invoegen",
  "editor.link.dialog.link": "link",
  "editor.link.dialog.openInNewTab": "Openen in nieuw tabblad",
  "editor.link.dialog.button.apply": "Toepassen",
  "editor.markdownTheme.tooltip": "Thema",
  "editor.image.tooltip": "Afbeelding",
  "editor.image.float.left.tooltip": "Zweef links",
  "editor.image.float.none.tooltip": "Niet zweven",
  "editor.image.float.right.tooltip": "Zweef rechts",
  "editor.image.dialog.title": "Afbeelding invoegen",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Upload",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Alt",
  "editor.image.dialog.form.aspectRatio": "Originele aspect ratio vastzetten",
  "editor.image.dialog.form.file": "Bestand",
  "editor.image.dialog.button.apply": "Toepassen",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video invoegen",
  "editor.video.dialog.link": "link",
  "editor.video.dialog.button.apply": "Toepassen",
  "editor.table.tooltip": "Tabel",
  "editor.table.menu.insert_table": "Tabel invoegen",
  "editor.table.menu.insert_table.with_header_row": "Met kop rij",
  "editor.table.menu.add_column_before": "Kolom ervoor invoegen",
  "editor.table.menu.add_column_after": "Kolom erna invoegen",
  "editor.table.menu.delete_column": "Kolom verwijderen",
  "editor.table.menu.add_row_before": "Rij ervoor invoegen",
  "editor.table.menu.add_row_after": "Rij erna invoegen",
  "editor.table.menu.delete_row": "Rij verwijderen",
  "editor.table.menu.merge_or_split_cells": "Cellen samenvoegen/splitsen",
  "editor.table.menu.delete_table": "Tabel verwijderen",
  "editor.blockquote.tooltip": "Citaatblok",
  "editor.horizontalrule.tooltip": "Horizontale lijn",
  "editor.code.tooltip": "Code",
  "editor.codeblock.tooltip": "Code blok",
  "editor.clear.tooltip": "Formattering verwijderen",
  "editor.undo.tooltip": "Stap terug",
  "editor.redo.tooltip": "Stap verder",
  "editor.fullscreen.tooltip.fullscreen": "Volledig scherm",
  "editor.fullscreen.tooltip.exit": "Volledig scherm verlaten"
}, Sw = {
  "editor.remove": "Remover",
  "editor.words": "Palavras",
  "editor.characters": "Caracteres",
  "editor.default": "Padrão",
  "editor.size.small.tooltip": "Pequeno",
  "editor.size.medium.tooltip": "Médio",
  "editor.size.large.tooltip": "Grande",
  "editor.bold.tooltip": "Negrito",
  "editor.italic.tooltip": "Itálico",
  "editor.underline.tooltip": "Sublinhado",
  "editor.strike.tooltip": "Tachado",
  "editor.color.tooltip": "Cor",
  "editor.highlight.tooltip": "Destacar",
  "editor.heading.tooltip": "Cabeçalhos",
  "editor.heading.h1.tooltip": "Cabeçalho 1",
  "editor.heading.h2.tooltip": "Cabeçalho 2",
  "editor.heading.h3.tooltip": "Cabeçalho 3",
  "editor.heading.h4.tooltip": "Cabeçalho 4",
  "editor.heading.h5.tooltip": "Cabeçalho 5",
  "editor.heading.h6.tooltip": "Cabeçalho 6",
  "editor.paragraph.tooltip": "Parágrafo",
  "editor.textalign.tooltip": "Alinhamento",
  "editor.textalign.left.tooltip": "Esquerda",
  "editor.textalign.center.tooltip": "Centro",
  "editor.textalign.right.tooltip": "Direita",
  "editor.textalign.justify.tooltip": "Justificado",
  "editor.fontFamily.tooltip": "Fonte",
  "editor.fontSize.tooltip": "Tamanho da fonte",
  "editor.superscript.tooltip": "Sobrescrito",
  "editor.subscript.tooltip": "Subscrito",
  "editor.bulletlist.tooltip": "Lista com marcadores",
  "editor.orderedlist.tooltip": "Lista numerada",
  "editor.tasklist.tooltip": "Lista de tarefas",
  "editor.indent.tooltip": "Aumentar recuo",
  "editor.outdent.tooltip": "Diminuir recuo",
  "editor.link.tooltip": "Adicionar link",
  "editor.link.unlink.tooltip": "Remover link",
  "editor.link.open": "Abrir link",
  "editor.link.dialog.title": "Inserir link",
  "editor.link.dialog.link": "Link",
  "editor.link.dialog.openInNewTab": "Abrir em nova aba",
  "editor.link.dialog.button.apply": "Aplicar",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Imagem",
  "editor.image.float.left.tooltip": "Alinhar à esquerda",
  "editor.image.float.none.tooltip": "Sem alinhamento",
  "editor.image.float.right.tooltip": "Alinhar à direita",
  "editor.image.dialog.title": "Inserir imagem",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Carregar",
  "editor.image.dialog.form.link": "Link",
  "editor.image.dialog.form.alt": "Texto alternativo",
  "editor.image.dialog.form.aspectRatio": "Bloquear proporção original",
  "editor.image.dialog.form.file": "Arquivo",
  "editor.image.dialog.button.apply": "Aplicar",
  "editor.video.tooltip": "Vídeo",
  "editor.video.dialog.title": "Inserir vídeo",
  "editor.video.dialog.link": "Link",
  "editor.video.dialog.button.apply": "Aplicar",
  "editor.table.tooltip": "Tabela",
  "editor.table.menu.insert_table": "Inserir tabela",
  "editor.table.menu.insert_table.with_header_row": "Com linha de cabeçalho",
  "editor.table.menu.add_column_before": "Adicionar coluna antes",
  "editor.table.menu.add_column_after": "Adicionar coluna depois",
  "editor.table.menu.delete_column": "Excluir coluna",
  "editor.table.menu.add_row_before": "Adicionar linha antes",
  "editor.table.menu.add_row_after": "Adicionar linha depois",
  "editor.table.menu.delete_row": "Excluir linha",
  "editor.table.menu.merge_or_split_cells": "Mesclar ou dividir células",
  "editor.table.menu.delete_table": "Excluir tabela",
  "editor.blockquote.tooltip": "Citação",
  "editor.horizontalrule.tooltip": "Linha horizontal",
  "editor.code.tooltip": "Código",
  "editor.codeblock.tooltip": "Bloco de código",
  "editor.clear.tooltip": "Remover formatação",
  "editor.undo.tooltip": "Desfazer",
  "editor.redo.tooltip": "Refazer",
  "editor.fullscreen.tooltip.fullscreen": "Tela cheia",
  "editor.fullscreen.tooltip.exit": "Sair da tela cheia"
}, xw = {
  "editor.remove": "Kaldır",
  "editor.words": "Kelime",
  "editor.characters": "Karakter",
  "editor.default": "varsayılan",
  "editor.size.small.tooltip": "Küçük",
  "editor.size.medium.tooltip": "Orta",
  "editor.size.large.tooltip": "Kapak",
  "editor.bold.tooltip": "Kalın",
  "editor.italic.tooltip": "İtalik",
  "editor.underline.tooltip": "Altı Çizili",
  "editor.strike.tooltip": "Üstü Çizili",
  "editor.color.tooltip": "Renk",
  "editor.highlight.tooltip": "Vurgula",
  "editor.heading.tooltip": "Başlıklar",
  "editor.heading.h1.tooltip": "Başlık 1",
  "editor.heading.h2.tooltip": "Başlık 2",
  "editor.heading.h3.tooltip": "Başlık 3",
  "editor.heading.h4.tooltip": "Başlık 4",
  "editor.heading.h5.tooltip": "Başlık 5",
  "editor.heading.h6.tooltip": "Başlık 6",
  "editor.paragraph.tooltip": "Paragraf",
  "editor.textalign.tooltip": "Hizala",
  "editor.textalign.left.tooltip": "Sola",
  "editor.textalign.center.tooltip": "Ortala",
  "editor.textalign.right.tooltip": "Sağa",
  "editor.textalign.justify.tooltip": "İki Yana Yasla",
  "editor.fontFamily.tooltip": "Yazı Tipi",
  "editor.fontSize.tooltip": "Yazı Boyutu",
  "editor.superscript.tooltip": "Üst Simge",
  "editor.subscript.tooltip": "Alt Simge",
  "editor.bulletlist.tooltip": "Noktalı Liste",
  "editor.orderedlist.tooltip": "Numaralı Liste",
  "editor.tasklist.tooltip": "Görev Listesi",
  "editor.indent.tooltip": "Girinti",
  "editor.outdent.tooltip": "Çıkıntı",
  "editor.link.tooltip": "Bağlantı",
  "editor.link.unlink.tooltip": "Bağlantıyı Kaldır",
  "editor.link.open": "Bağlantıyı Aç",
  "editor.link.dialog.title": "Bağlantı Ekle",
  "editor.link.dialog.link": "bağlantı",
  "editor.link.dialog.openInNewTab": "Yeni sekmede aç",
  "editor.link.dialog.button.apply": "Uygula",
  "editor.markdownTheme.tooltip": "Tema",
  "editor.image.tooltip": "Resim",
  "editor.image.float.left.tooltip": "Sola Yasla",
  "editor.image.float.none.tooltip": "Hizalamayı Kaldır",
  "editor.image.float.right.tooltip": "Sağa Yasla",
  "editor.image.dialog.title": "Resim Ekle",
  "editor.image.dialog.tab.url": "URL",
  "editor.image.dialog.tab.upload": "Yükle",
  "editor.image.dialog.form.link": "Bağlantı",
  "editor.image.dialog.form.alt": "Alternatif Metin",
  "editor.image.dialog.form.aspectRatio": "Orijinal En/Boy Oranını Koru",
  "editor.image.dialog.form.file": "Dosya",
  "editor.image.dialog.button.apply": "Uygula",
  "editor.video.tooltip": "Video",
  "editor.video.dialog.title": "Video Ekle",
  "editor.video.dialog.link": "bağlantı",
  "editor.video.dialog.button.apply": "Uygula",
  "editor.table.tooltip": "Tablo",
  "editor.table.menu.insert_table": "Tablo Ekle",
  "editor.table.menu.insert_table.with_header_row": "Başlık Satırıyla",
  "editor.table.menu.add_column_before": "Önce Sütun Ekle",
  "editor.table.menu.add_column_after": "Sonra Sütun Ekle",
  "editor.table.menu.delete_column": "Sütunu Sil",
  "editor.table.menu.add_row_before": "Önce Satır Ekle",
  "editor.table.menu.add_row_after": "Sonra Satır Ekle",
  "editor.table.menu.delete_row": "Satırı Sil",
  "editor.table.menu.merge_or_split_cells": "Hücreleri Birleştir veya Ayır",
  "editor.table.menu.delete_table": "Tabloyu Sil",
  "editor.blockquote.tooltip": "Alıntı",
  "editor.horizontalrule.tooltip": "Yatay Çizgi",
  "editor.code.tooltip": "Kod",
  "editor.codeblock.tooltip": "Kod Bloğu",
  "editor.clear.tooltip": "Biçimlendirmeyi Temizle",
  "editor.undo.tooltip": "Geri Al",
  "editor.redo.tooltip": "İleri Al",
  "editor.fullscreen.tooltip.fullscreen": "Tam Ekran",
  "editor.fullscreen.tooltip.exit": "Tam Ekrandan Çık"
}, Cw = {
  "editor.remove": "删除",
  "editor.words": "单词",
  "editor.characters": "字符",
  "editor.default": "默认",
  "editor.size.small.tooltip": "小尺寸",
  "editor.size.medium.tooltip": "中等尺寸",
  "editor.size.large.tooltip": "铺满",
  "editor.bold.tooltip": "粗体",
  "editor.italic.tooltip": "斜体",
  "editor.underline.tooltip": "下划线",
  "editor.strike.tooltip": "中划线",
  "editor.color.tooltip": "文本颜色",
  "editor.highlight.tooltip": "文本高亮",
  "editor.heading.tooltip": "标题",
  "editor.heading.h1.tooltip": "标题 1",
  "editor.heading.h2.tooltip": "标题 2",
  "editor.heading.h3.tooltip": "标题 3",
  "editor.heading.h4.tooltip": "标题 4",
  "editor.heading.h5.tooltip": "标题 5",
  "editor.heading.h6.tooltip": "标题 6",
  "editor.paragraph.tooltip": "正文",
  "editor.textalign.tooltip": "对齐方式",
  "editor.textalign.left.tooltip": "左对齐",
  "editor.textalign.center.tooltip": "居中对齐",
  "editor.textalign.right.tooltip": "右对齐",
  "editor.textalign.justify.tooltip": "两端对齐",
  "editor.fontFamily.tooltip": "字体",
  "editor.fontSize.tooltip": "字体大小",
  "editor.superscript.tooltip": "上标",
  "editor.subscript.tooltip": "下标",
  "editor.bulletlist.tooltip": "无序列表",
  "editor.orderedlist.tooltip": "有序列表",
  "editor.tasklist.tooltip": "任务列表",
  "editor.indent.tooltip": "增加缩进",
  "editor.outdent.tooltip": "减少缩进",
  "editor.link.tooltip": "网络链接",
  "editor.link.unlink.tooltip": "取消链接",
  "editor.link.open": "打开链接",
  "editor.link.dialog.title": "插入链接",
  "editor.link.dialog.link": "链接",
  "editor.link.dialog.openInNewTab": "在新标签页中打开",
  "editor.link.dialog.button.apply": "应用",
  "editor.markdownTheme.tooltip": "主题",
  "editor.image.tooltip": "图片",
  "editor.image.float.left.tooltip": "左浮动",
  "editor.image.float.none.tooltip": "无浮动",
  "editor.image.float.right.tooltip": "右浮动",
  "editor.image.dialog.title": "插入图片",
  "editor.image.dialog.tab.url": "网络图片",
  "editor.image.dialog.tab.upload": "本地图片",
  "editor.image.dialog.form.link": "链接",
  "editor.image.dialog.form.alt": "说明",
  "editor.image.dialog.form.aspectRatio": "锁定原有长宽比",
  "editor.image.dialog.form.file": "文件",
  "editor.image.dialog.button.apply": "应用",
  "editor.video.tooltip": "视频",
  "editor.video.dialog.title": "插入视频",
  "editor.video.dialog.link": "网络链接",
  "editor.video.dialog.button.apply": "应用",
  "editor.table.tooltip": "表格",
  "editor.table.menu.insert_table": "插入表格",
  "editor.table.menu.insert_table.with_header_row": "带标题行",
  "editor.table.menu.add_column_before": "向左插入一列",
  "editor.table.menu.add_column_after": "向右插入一列",
  "editor.table.menu.delete_column": "删除列",
  "editor.table.menu.add_row_before": "向上插入一行",
  "editor.table.menu.add_row_after": "向下插入一行",
  "editor.table.menu.delete_row": "删除行",
  "editor.table.menu.merge_or_split_cells": "合并或拆分单元格",
  "editor.table.menu.delete_table": "删除表格",
  "editor.blockquote.tooltip": "引用",
  "editor.horizontalrule.tooltip": "分隔线",
  "editor.code.tooltip": "代码",
  "editor.codeblock.tooltip": "代码块",
  "editor.clear.tooltip": "清除格式",
  "editor.undo.tooltip": "撤销",
  "editor.redo.tooltip": "重做",
  "editor.fullscreen.tooltip.fullscreen": "全屏",
  "editor.fullscreen.tooltip.exit": "退出全屏"
}, Tw = {
  nl: kw,
  tr: xw,
  zhHans: Cw,
  en: vw,
  de: bw,
  it: ww,
  pt: Sw
}, Aw = {
  lang: cl,
  fallbackLang: cl,
  message: Tw
};
class Mw {
  constructor() {
    /**
     * Mitt event emitter for handling language change events.
     */
    Es(this, "emitter", yw());
    /**
     * Private property to store the current locale settings.
     */
    Es(this, "_locale", Aw);
  }
  /**
   * Get the current language code.
   * @returns The current language code.
   */
  get lang() {
    return this._locale.lang;
  }
  /**
   * Set the current language code.
   * If the provided language is not supported, it sets the language to the fallback language.
   * @param lang - The new language code to set.
   */
  set lang(e) {
    this.isLangSupported(e) ? this._locale.lang = e : (vl.warn(`Can't find the current language "${e}", Using fallback language "${this._locale.fallbackLang}" instead.`), this._locale.lang = this._locale.fallbackLang), this.emitter.emit("lang", this._locale.lang);
  }
  /**
   * Get the fallback language code.
   * @returns The fallback language code.
   */
  get fallbackLang() {
    return this._locale.fallbackLang;
  }
  /**
   * Set the fallback language code.
   * If the provided language is not supported, it logs a warning and keeps the current fallback language.
   * @param lang - The new fallback language code to set.
   */
  set fallbackLang(e) {
    if (!this.isLangSupported(e)) {
      vl.warn(`Can't find the fallback language "${e}", Using language "${this._locale.fallbackLang}" by default`);
      return;
    }
    this._locale.fallbackLang = e;
  }
  /**
   * Get the language message records.
   * @returns The language message records.
   */
  get message() {
    return this._locale.message;
  }
  /**
   * Set the language message records.
   * @param message - The new language message records to set.
   */
  set message(e) {
    this._locale.message = e;
  }
  /**
   * Load the message records for a specific language.
   * @param lang - The language code to load messages for.
   * @returns The message records for the specified language.
   */
  loadLangMessage(e) {
    return this.message[e] || {};
  }
  /**
   * Check if a given language is supported.
   * @param lang - The language code to check.
   * @returns True if the language is supported, false otherwise.
   */
  isLangSupported(e) {
    return Object.keys(this.message).includes(e);
  }
  /**
   * Public method to set the current language.
   * @param lang - The new language code to set.
   */
  setLang(e) {
    this.lang = e;
  }
  /**
   * Public method to set the fallback language.
   * @param lang - The new fallback language code to set.
   */
  setFallbackLang(e) {
    this.fallbackLang = e;
  }
  /**
   * Public method to register a callback for language change events.
   * @param hook - The callback function to be called when the language changes.
   * @returns An object with an unsubscribe method to stop listening to the event.
   */
  registerWatchLang(e) {
    return this.emitter.on("lang", e), {
      unsubscribe: () => this.emitter.off("lang", e)
    };
  }
  /**
   * Public method to set the message records for a specific language.
   * @param lang - The language code to set messages for.
   * @param message - The message records to set for the specified language.
   */
  setMessage(e, n) {
    this.message[e] = n;
  }
  /**
   * Build an internationalization handler function.
   * @param lang - Optional language code. If not provided, the current language will be used.
   * @returns A function that takes a message path and returns the translated message.
   */
  buildI18nHandler(e) {
    const n = e || this.lang, r = this.loadLangMessage(n), o = this.loadLangMessage(this.fallbackLang);
    return (i) => r[i] || o[i] || i;
  }
}
const Mr = new Mw(), Pt = () => {
  const t = G(Mr.lang), e = z(() => Mr.buildI18nHandler(C(t)));
  return Vn((n) => {
    const r = Mr.registerWatchLang((o) => {
      t.value = o;
    });
    n(() => r.unsubscribe());
  }), {
    lang: t,
    t: e
  };
};
function xe(t) {
  this.content = t;
}
xe.prototype = {
  constructor: xe,
  find: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === t) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(t) {
    var e = this.find(t);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(t, e, n) {
    var r = n && n != t ? this.remove(n) : this, o = r.find(t), i = r.content.slice();
    return o == -1 ? i.push(n || t, e) : (i[o + 1] = e, n && (i[o] = n)), new xe(i);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(t) {
    var e = this.find(t);
    if (e == -1) return this;
    var n = this.content.slice();
    return n.splice(e, 2), new xe(n);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(t, e) {
    return new xe([t, e].concat(this.remove(t).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(t, e) {
    var n = this.remove(t).content.slice();
    return n.push(t, e), new xe(n);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(t, e, n) {
    var r = this.remove(e), o = r.content.slice(), i = r.find(t);
    return o.splice(i == -1 ? o.length : i, 0, e, n), new xe(o);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(t) {
    for (var e = 0; e < this.content.length; e += 2)
      t(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(t) {
    return t = xe.from(t), t.size ? new xe(t.content.concat(this.subtract(t).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(t) {
    return t = xe.from(t), t.size ? new xe(this.subtract(t).content.concat(t.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(t) {
    var e = this;
    t = xe.from(t);
    for (var n = 0; n < t.content.length; n += 2)
      e = e.remove(t.content[n]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var t = {};
    return this.forEach(function(e, n) {
      t[e] = n;
    }), t;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
xe.from = function(t) {
  if (t instanceof xe) return t;
  var e = [];
  if (t) for (var n in t) e.push(n, t[n]);
  return new xe(e);
};
function Gf(t, e, n) {
  for (let r = 0; ; r++) {
    if (r == t.childCount || r == e.childCount)
      return t.childCount == e.childCount ? null : n;
    let o = t.child(r), i = e.child(r);
    if (o == i) {
      n += o.nodeSize;
      continue;
    }
    if (!o.sameMarkup(i))
      return n;
    if (o.isText && o.text != i.text) {
      for (let s = 0; o.text[s] == i.text[s]; s++)
        n++;
      return n;
    }
    if (o.content.size || i.content.size) {
      let s = Gf(o.content, i.content, n + 1);
      if (s != null)
        return s;
    }
    n += o.nodeSize;
  }
}
function Zf(t, e, n, r) {
  for (let o = t.childCount, i = e.childCount; ; ) {
    if (o == 0 || i == 0)
      return o == i ? null : { a: n, b: r };
    let s = t.child(--o), l = e.child(--i), a = s.nodeSize;
    if (s == l) {
      n -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: n, b: r };
    if (s.isText && s.text != l.text) {
      let c = 0, d = Math.min(s.text.length, l.text.length);
      for (; c < d && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, n--, r--;
      return { a: n, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = Zf(s.content, l.content, n - 1, r - 1);
      if (c)
        return c;
    }
    n -= a, r -= a;
  }
}
class S {
  /**
  @internal
  */
  constructor(e, n) {
    if (this.content = e, this.size = n || 0, n == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, n, r, o = 0, i) {
    for (let s = 0, l = 0; l < n; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, o + l, i || null, s) !== !1 && a.content.size) {
        let d = l + 1;
        a.nodesBetween(Math.max(0, e - d), Math.min(a.content.size, n - d), r, o + d);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, n, r, o) {
    let i = "", s = !0;
    return this.nodesBetween(e, n, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, n - a) : l.isLeaf ? o ? typeof o == "function" ? o(l) : o : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : i += r), i += c;
    }, 0), i;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let n = this.lastChild, r = e.firstChild, o = this.content.slice(), i = 0;
    for (n.isText && n.sameMarkup(r) && (o[o.length - 1] = n.withText(n.text + r.text), i = 1); i < e.content.length; i++)
      o.push(e.content[i]);
    return new S(o, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, n = this.size) {
    if (e == 0 && n == this.size)
      return this;
    let r = [], o = 0;
    if (n > e)
      for (let i = 0, s = 0; s < n; i++) {
        let l = this.content[i], a = s + l.nodeSize;
        a > e && ((s < e || a > n) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, n - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, n - s - 1))), r.push(l), o += l.nodeSize), s = a;
      }
    return new S(r, o);
  }
  /**
  @internal
  */
  cutByIndex(e, n) {
    return e == n ? S.empty : e == 0 && n == this.content.length ? this : new S(this.content.slice(e, n));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, n) {
    let r = this.content[e];
    if (r == n)
      return this;
    let o = this.content.slice(), i = this.size + n.nodeSize - r.nodeSize;
    return o[e] = n, new S(o, i);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new S([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new S(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let n = 0; n < this.content.length; n++)
      if (!this.content[n].eq(e.content[n]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let n = this.content[e];
    if (!n)
      throw new RangeError("Index " + e + " out of range for " + this);
    return n;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let n = 0, r = 0; n < this.content.length; n++) {
      let o = this.content[n];
      e(o, r, n), r += o.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, n = 0) {
    return Gf(this, e, n);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, n = this.size, r = e.size) {
    return Zf(this, e, n, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e, n = -1) {
    if (e == 0)
      return So(0, e);
    if (e == this.size)
      return So(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, o = 0; ; r++) {
      let i = this.child(r), s = o + i.nodeSize;
      if (s >= e)
        return s == e || n > 0 ? So(r + 1, s) : So(r, o);
      o = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return S.empty;
    if (!Array.isArray(n))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new S(n.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return S.empty;
    let n, r = 0;
    for (let o = 0; o < e.length; o++) {
      let i = e[o];
      r += i.nodeSize, o && i.isText && e[o - 1].sameMarkup(i) ? (n || (n = e.slice(0, o)), n[n.length - 1] = i.withText(n[n.length - 1].text + i.text)) : n && n.push(i);
    }
    return new S(n || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return S.empty;
    if (e instanceof S)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new S([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
S.empty = new S([], 0);
const _s = { index: 0, offset: 0 };
function So(t, e) {
  return _s.index = t, _s.offset = e, _s;
}
function ri(t, e) {
  if (t === e)
    return !0;
  if (!(t && typeof t == "object") || !(e && typeof e == "object"))
    return !1;
  let n = Array.isArray(t);
  if (Array.isArray(e) != n)
    return !1;
  if (n) {
    if (t.length != e.length)
      return !1;
    for (let r = 0; r < t.length; r++)
      if (!ri(t[r], e[r]))
        return !1;
  } else {
    for (let r in t)
      if (!(r in e) || !ri(t[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in t))
        return !1;
  }
  return !0;
}
let Z = class wl {
  /**
  @internal
  */
  constructor(e, n) {
    this.type = e, this.attrs = n;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let n, r = !1;
    for (let o = 0; o < e.length; o++) {
      let i = e[o];
      if (this.eq(i))
        return e;
      if (this.type.excludes(i.type))
        n || (n = e.slice(0, o));
      else {
        if (i.type.excludes(this.type))
          return e;
        !r && i.type.rank > this.type.rank && (n || (n = e.slice(0, o)), n.push(this), r = !0), n && n.push(i);
      }
    }
    return n || (n = e.slice()), r || n.push(this), n;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return e.slice(0, n).concat(e.slice(n + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (this.eq(e[n]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && ri(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[n.type];
    if (!r)
      throw new RangeError(`There is no mark type ${n.type} in this schema`);
    let o = r.create(n.attrs);
    return r.checkAttrs(o.attrs), o;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, n) {
    if (e == n)
      return !0;
    if (e.length != n.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(n[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return wl.none;
    if (e instanceof wl)
      return [e];
    let n = e.slice();
    return n.sort((r, o) => r.type.rank - o.type.rank), n;
  }
};
Z.none = [];
class oi extends Error {
}
class O {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, n, r) {
    this.content = e, this.openStart = n, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, n) {
    let r = Yf(this.content, e + this.openStart, n);
    return r && new O(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, n) {
    return new O(Xf(this.content, e + this.openStart, n + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      return O.empty;
    let r = n.openStart || 0, o = n.openEnd || 0;
    if (typeof r != "number" || typeof o != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new O(S.fromJSON(e, n.content), r, o);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, n = !0) {
    let r = 0, o = 0;
    for (let i = e.firstChild; i && !i.isLeaf && (n || !i.type.spec.isolating); i = i.firstChild)
      r++;
    for (let i = e.lastChild; i && !i.isLeaf && (n || !i.type.spec.isolating); i = i.lastChild)
      o++;
    return new O(e, r, o);
  }
}
O.empty = new O(S.empty, 0, 0);
function Xf(t, e, n) {
  let { index: r, offset: o } = t.findIndex(e), i = t.maybeChild(r), { index: s, offset: l } = t.findIndex(n);
  if (o == e || i.isText) {
    if (l != n && !t.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return t.cut(0, e).append(t.cut(n));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return t.replaceChild(r, i.copy(Xf(i.content, e - o - 1, n - o - 1)));
}
function Yf(t, e, n, r) {
  let { index: o, offset: i } = t.findIndex(e), s = t.maybeChild(o);
  if (i == e || s.isText)
    return t.cut(0, e).append(n).append(t.cut(e));
  let l = Yf(s.content, e - i - 1, n);
  return l && t.replaceChild(o, s.copy(l));
}
function Ew(t, e, n) {
  if (n.openStart > t.depth)
    throw new oi("Inserted content deeper than insertion position");
  if (t.depth - n.openStart != e.depth - n.openEnd)
    throw new oi("Inconsistent open depths");
  return Qf(t, e, n, 0);
}
function Qf(t, e, n, r) {
  let o = t.index(r), i = t.node(r);
  if (o == e.index(r) && r < t.depth - n.openStart) {
    let s = Qf(t, e, n, r + 1);
    return i.copy(i.content.replaceChild(o, s));
  } else if (n.content.size)
    if (!n.openStart && !n.openEnd && t.depth == r && e.depth == r) {
      let s = t.parent, l = s.content;
      return wn(s, l.cut(0, t.parentOffset).append(n.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = Ow(n, t);
      return wn(i, tp(t, s, l, e, r));
    }
  else return wn(i, ii(t, e, r));
}
function ep(t, e) {
  if (!e.type.compatibleContent(t.type))
    throw new oi("Cannot join " + e.type.name + " onto " + t.type.name);
}
function kl(t, e, n) {
  let r = t.node(n);
  return ep(r, e.node(n)), r;
}
function vn(t, e) {
  let n = e.length - 1;
  n >= 0 && t.isText && t.sameMarkup(e[n]) ? e[n] = t.withText(e[n].text + t.text) : e.push(t);
}
function Er(t, e, n, r) {
  let o = (e || t).node(n), i = 0, s = e ? e.index(n) : o.childCount;
  t && (i = t.index(n), t.depth > n ? i++ : t.textOffset && (vn(t.nodeAfter, r), i++));
  for (let l = i; l < s; l++)
    vn(o.child(l), r);
  e && e.depth == n && e.textOffset && vn(e.nodeBefore, r);
}
function wn(t, e) {
  return t.type.checkContent(e), t.copy(e);
}
function tp(t, e, n, r, o) {
  let i = t.depth > o && kl(t, e, o + 1), s = r.depth > o && kl(n, r, o + 1), l = [];
  return Er(null, t, o, l), i && s && e.index(o) == n.index(o) ? (ep(i, s), vn(wn(i, tp(t, e, n, r, o + 1)), l)) : (i && vn(wn(i, ii(t, e, o + 1)), l), Er(e, n, o, l), s && vn(wn(s, ii(n, r, o + 1)), l)), Er(r, null, o, l), new S(l);
}
function ii(t, e, n) {
  let r = [];
  if (Er(null, t, n, r), t.depth > n) {
    let o = kl(t, e, n + 1);
    vn(wn(o, ii(t, e, n + 1)), r);
  }
  return Er(e, null, n, r), new S(r);
}
function Ow(t, e) {
  let n = e.depth - t.openStart, o = e.node(n).copy(t.content);
  for (let i = n - 1; i >= 0; i--)
    o = e.node(i).copy(S.from(o));
  return {
    start: o.resolveNoCache(t.openStart + n),
    end: o.resolveNoCache(o.content.size - t.openEnd - n)
  };
}
class Fr {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.path = n, this.parentOffset = r, this.depth = n.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, n = this.index(this.depth);
    if (n == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], o = e.child(n);
    return r ? e.child(n).cut(r) : o;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), n = this.pos - this.path[this.path.length - 1];
    return n ? this.parent.child(e).cut(0, n) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, n) {
    n = this.resolveDepth(n);
    let r = this.path[n * 3], o = n == 0 ? 0 : this.path[n * 3 - 1] + 1;
    for (let i = 0; i < e; i++)
      o += r.child(i).nodeSize;
    return o;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, n = this.index();
    if (e.content.size == 0)
      return Z.none;
    if (this.textOffset)
      return e.child(n).marks;
    let r = e.maybeChild(n - 1), o = e.maybeChild(n);
    if (!r) {
      let l = r;
      r = o, o = l;
    }
    let i = r.marks;
    for (var s = 0; s < i.length; s++)
      i[s].type.spec.inclusive === !1 && (!o || !i[s].isInSet(o.marks)) && (i = i[s--].removeFromSet(i));
    return i;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let n = this.parent.maybeChild(this.index());
    if (!n || !n.isInline)
      return null;
    let r = n.marks, o = e.parent.maybeChild(e.index());
    for (var i = 0; i < r.length; i++)
      r[i].type.spec.inclusive === !1 && (!o || !r[i].isInSet(o.marks)) && (r = r[i--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let n = this.depth; n > 0; n--)
      if (this.start(n) <= e && this.end(n) >= e)
        return n;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, n) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!n || n(this.node(r))))
        return new si(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let n = 1; n <= this.depth; n++)
      e += (e ? "/" : "") + this.node(n).type.name + "_" + this.index(n - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, n) {
    if (!(n >= 0 && n <= e.content.size))
      throw new RangeError("Position " + n + " out of range");
    let r = [], o = 0, i = n;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(i), c = i - a;
      if (r.push(s, l, o + a), !c || (s = s.child(l), s.isText))
        break;
      i = c - 1, o += a + 1;
    }
    return new Fr(n, r, i);
  }
  /**
  @internal
  */
  static resolveCached(e, n) {
    let r = od.get(e);
    if (r)
      for (let i = 0; i < r.elts.length; i++) {
        let s = r.elts[i];
        if (s.pos == n)
          return s;
      }
    else
      od.set(e, r = new Lw());
    let o = r.elts[r.i] = Fr.resolve(e, n);
    return r.i = (r.i + 1) % Vw, o;
  }
}
class Lw {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Vw = 12, od = /* @__PURE__ */ new WeakMap();
class si {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Hw = /* @__PURE__ */ Object.create(null);
let Lt = class Sl {
  /**
  @internal
  */
  constructor(e, n, r, o = Z.none) {
    this.type = e, this.attrs = n, this.marks = o, this.content = r || S.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, n, r, o = 0) {
    this.content.nodesBetween(e, n, r, o, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec^leafText) will be used.
  */
  textBetween(e, n, r, o) {
    return this.content.textBetween(e, n, r, o);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, n, r) {
    return this.type == e && ri(this.attrs, n || e.defaultAttrs || Hw) && Z.sameSet(this.marks, r || Z.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Sl(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Sl(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, n = this.content.size) {
    return e == 0 && n == this.content.size ? this : this.copy(this.content.cut(e, n));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, n = this.content.size, r = !1) {
    if (e == n)
      return O.empty;
    let o = this.resolve(e), i = this.resolve(n), s = r ? 0 : o.sharedDepth(n), l = o.start(s), c = o.node(s).content.cut(o.pos - l, i.pos - l);
    return new O(c, o.depth - s, i.depth - s);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, n, r) {
    return Ew(this.resolve(e), this.resolve(n), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let n = this; ; ) {
      let { index: r, offset: o } = n.content.findIndex(e);
      if (n = n.maybeChild(r), !n)
        return null;
      if (o == e || n.isText)
        return n;
      e -= o + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: n, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(n), index: n, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: n, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(n), index: n, offset: r };
    let o = this.content.child(n - 1);
    return { node: o, index: n - 1, offset: r - o.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Fr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Fr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, n, r) {
    let o = !1;
    return n > e && this.nodesBetween(e, n, (i) => (r.isInSet(i.marks) && (o = !0), !o)), o;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), np(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let n = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!n)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return n;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, n, r = S.empty, o = 0, i = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, o, i), l = s && s.matchFragment(this.content, n);
    if (!l || !l.validEnd)
      return !1;
    for (let a = o; a < i; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, n, r, o) {
    if (o && !this.type.allowsMarks(o))
      return !1;
    let i = this.contentMatchAt(e).matchType(r), s = i && i.matchFragment(this.content, n);
    return s ? s.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = Z.none;
    for (let n = 0; n < this.marks.length; n++) {
      let r = this.marks[n];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!Z.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((n) => n.type.name)}`);
    this.content.forEach((n) => n.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let n in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((n) => n.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, n) {
    if (!n)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (n.marks) {
      if (!Array.isArray(n.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = n.marks.map(e.markFromJSON);
    }
    if (n.type == "text") {
      if (typeof n.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(n.text, r);
    }
    let o = S.fromJSON(e, n.content), i = e.nodeType(n.type).create(n.attrs, o, r);
    return i.type.checkAttrs(i.attrs), i;
  }
};
Lt.prototype.text = void 0;
class li extends Lt {
  /**
  @internal
  */
  constructor(e, n, r, o) {
    if (super(e, n, null, o), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : np(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, n) {
    return this.text.slice(e, n);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new li(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new li(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, n = this.text.length) {
    return e == 0 && n == this.text.length ? this : this.withText(this.text.slice(e, n));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function np(t, e) {
  for (let n = t.length - 1; n >= 0; n--)
    e = t[n].type.name + "(" + e + ")";
  return e;
}
class Tn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, n) {
    let r = new Rw(e, n);
    if (r.next == null)
      return Tn.empty;
    let o = rp(r);
    r.next && r.err("Unexpected trailing text");
    let i = $w(Bw(o));
    return zw(i, r), i;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let n = 0; n < this.next.length; n++)
      if (this.next[n].type == e)
        return this.next[n].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, n = 0, r = e.childCount) {
    let o = this;
    for (let i = n; o && i < r; i++)
      o = o.matchType(e.child(i).type);
    return o;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: n } = this.next[e];
      if (!(n.isText || n.hasRequiredAttrs()))
        return n;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let n = 0; n < this.next.length; n++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[n].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, n = !1, r = 0) {
    let o = [this];
    function i(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!n || a.validEnd))
        return S.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: d, next: u } = s.next[c];
        if (!(d.isText || d.hasRequiredAttrs()) && o.indexOf(u) == -1) {
          o.push(u);
          let f = i(u, l.concat(d));
          if (f)
            return f;
        }
      }
      return null;
    }
    return i(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let n = this.computeWrapping(e);
    return this.wrapCache.push(e, n), n;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let n = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let o = r.shift(), i = o.match;
      if (i.matchType(e)) {
        let s = [];
        for (let l = o; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < i.next.length; s++) {
        let { type: l, next: a } = i.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in n) && (!o.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: o }), n[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function n(r) {
      e.push(r);
      for (let o = 0; o < r.next.length; o++)
        e.indexOf(r.next[o].next) == -1 && n(r.next[o].next);
    }
    return n(this), e.map((r, o) => {
      let i = o + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        i += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return i;
    }).join(`
`);
  }
}
Tn.empty = new Tn(!0);
class Rw {
  constructor(e, n) {
    this.string = e, this.nodeTypes = n, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function rp(t) {
  let e = [];
  do
    e.push(Nw(t));
  while (t.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Nw(t) {
  let e = [];
  do
    e.push(_w(t));
  while (t.next && t.next != ")" && t.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function _w(t) {
  let e = Pw(t);
  for (; ; )
    if (t.eat("+"))
      e = { type: "plus", expr: e };
    else if (t.eat("*"))
      e = { type: "star", expr: e };
    else if (t.eat("?"))
      e = { type: "opt", expr: e };
    else if (t.eat("{"))
      e = Iw(t, e);
    else
      break;
  return e;
}
function id(t) {
  /\D/.test(t.next) && t.err("Expected number, got '" + t.next + "'");
  let e = Number(t.next);
  return t.pos++, e;
}
function Iw(t, e) {
  let n = id(t), r = n;
  return t.eat(",") && (t.next != "}" ? r = id(t) : r = -1), t.eat("}") || t.err("Unclosed braced range"), { type: "range", min: n, max: r, expr: e };
}
function Dw(t, e) {
  let n = t.nodeTypes, r = n[e];
  if (r)
    return [r];
  let o = [];
  for (let i in n) {
    let s = n[i];
    s.isInGroup(e) && o.push(s);
  }
  return o.length == 0 && t.err("No node type or group '" + e + "' found"), o;
}
function Pw(t) {
  if (t.eat("(")) {
    let e = rp(t);
    return t.eat(")") || t.err("Missing closing paren"), e;
  } else if (/\W/.test(t.next))
    t.err("Unexpected token '" + t.next + "'");
  else {
    let e = Dw(t, t.next).map((n) => (t.inline == null ? t.inline = n.isInline : t.inline != n.isInline && t.err("Mixing inline and block content"), { type: "name", value: n }));
    return t.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Bw(t) {
  let e = [[]];
  return o(i(t, 0), n()), e;
  function n() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function o(s, l) {
    s.forEach((a) => a.to = l);
  }
  function i(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(i(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = i(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        o(c, l = n());
      }
    else if (s.type == "star") {
      let a = n();
      return r(l, a), o(i(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = n();
      return o(i(s.expr, l), a), o(i(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(i(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let d = n();
          o(i(s.expr, a), d), a = d;
        }
        if (s.max == -1)
          o(i(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let d = n();
            r(a, d), o(i(s.expr, a), d), a = d;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function op(t, e) {
  return e - t;
}
function sd(t, e) {
  let n = [];
  return r(e), n.sort(op);
  function r(o) {
    let i = t[o];
    if (i.length == 1 && !i[0].term)
      return r(i[0].to);
    n.push(o);
    for (let s = 0; s < i.length; s++) {
      let { term: l, to: a } = i[s];
      !l && n.indexOf(a) == -1 && r(a);
    }
  }
}
function $w(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return n(sd(t, 0));
  function n(r) {
    let o = [];
    r.forEach((s) => {
      t[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let d = 0; d < o.length; d++)
          o[d][0] == l && (c = o[d][1]);
        sd(t, a).forEach((d) => {
          c || o.push([l, c = []]), c.indexOf(d) == -1 && c.push(d);
        });
      });
    });
    let i = e[r.join(",")] = new Tn(r.indexOf(t.length - 1) > -1);
    for (let s = 0; s < o.length; s++) {
      let l = o[s][1].sort(op);
      i.next.push({ type: o[s][0], next: e[l.join(",")] || n(l) });
    }
    return i;
  }
}
function zw(t, e) {
  for (let n = 0, r = [t]; n < r.length; n++) {
    let o = r[n], i = !o.validEnd, s = [];
    for (let l = 0; l < o.next.length; l++) {
      let { type: a, next: c } = o.next[l];
      s.push(a.name), i && !(a.isText || a.hasRequiredAttrs()) && (i = !1), r.indexOf(c) == -1 && r.push(c);
    }
    i && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function ip(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t) {
    let r = t[n];
    if (!r.hasDefault)
      return null;
    e[n] = r.default;
  }
  return e;
}
function sp(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  for (let r in t) {
    let o = e && e[r];
    if (o === void 0) {
      let i = t[r];
      if (i.hasDefault)
        o = i.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    n[r] = o;
  }
  return n;
}
function lp(t, e, n, r) {
  for (let o in e)
    if (!(o in t))
      throw new RangeError(`Unsupported attribute ${o} for ${n} of type ${o}`);
  for (let o in t) {
    let i = t[o];
    i.validate && i.validate(e[o]);
  }
}
function ap(t, e) {
  let n = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      n[r] = new jw(t, r, e[r]);
  return n;
}
let ld = class cp {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.name = e, this.schema = n, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = ap(e, r.attrs), this.defaultAttrs = ip(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Tn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : sp(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, n, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Lt(this, this.computeAttrs(e), S.from(n), Z.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, n, r) {
    return n = S.from(n), this.checkContent(n), new Lt(this, this.computeAttrs(e), n, Z.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, n, r) {
    if (e = this.computeAttrs(e), n = S.from(n), n.size) {
      let s = this.contentMatch.fillBefore(n);
      if (!s)
        return null;
      n = s.append(n);
    }
    let o = this.contentMatch.matchFragment(n), i = o && o.fillBefore(S.empty, !0);
    return i ? new Lt(this, e, n.append(i), Z.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let n = this.contentMatch.matchFragment(e);
    if (!n || !n.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    lp(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let n = 0; n < e.length; n++)
      if (!this.allowsMarkType(e[n].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let n;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? n && n.push(e[r]) : n || (n = e.slice(0, r));
    return n ? n.length ? n : Z.none : e;
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((i, s) => r[i] = new cp(i, n, s));
    let o = n.spec.topNode || "doc";
    if (!r[o])
      throw new RangeError("Schema is missing its top node type ('" + o + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let i in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function Fw(t, e, n) {
  let r = n.split("|");
  return (o) => {
    let i = o === null ? "null" : typeof o;
    if (r.indexOf(i) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${t}, got ${i}`);
  };
}
class jw {
  constructor(e, n, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Fw(e, n, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class is {
  /**
  @internal
  */
  constructor(e, n, r, o) {
    this.name = e, this.rank = n, this.schema = r, this.spec = o, this.attrs = ap(e, o.attrs), this.excluded = null;
    let i = ip(this.attrs);
    this.instance = i ? new Z(this, i) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new Z(this, sp(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, n) {
    let r = /* @__PURE__ */ Object.create(null), o = 0;
    return e.forEach((i, s) => r[i] = new is(i, o++, n, s)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var n = 0; n < e.length; n++)
      e[n].type == this && (e = e.slice(0, n).concat(e.slice(n + 1)), n--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let n = 0; n < e.length; n++)
      if (e[n].type == this)
        return e[n];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    lp(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class dp {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let n = this.spec = {};
    for (let o in e)
      n[o] = e[o];
    n.nodes = xe.from(e.nodes), n.marks = xe.from(e.marks || {}), this.nodes = ld.compile(this.spec.nodes, this), this.marks = is.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in this.nodes) {
      if (o in this.marks)
        throw new RangeError(o + " can not be both a node and a mark");
      let i = this.nodes[o], s = i.spec.content || "", l = i.spec.marks;
      if (i.contentMatch = r[s] || (r[s] = Tn.parse(s, this.nodes)), i.inlineContent = i.contentMatch.inlineContent, i.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!i.isInline || !i.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = i;
      }
      i.markSet = l == "_" ? null : l ? ad(this, l.split(" ")) : l == "" || !i.inlineContent ? [] : null;
    }
    for (let o in this.marks) {
      let i = this.marks[o], s = i.spec.excludes;
      i.excluded = s == null ? [i] : s == "" ? [] : ad(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, n = null, r, o) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof ld) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(n, r, o);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, n) {
    let r = this.nodes.text;
    return new li(r, r.defaultAttrs, e, Z.setFrom(n));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, n) {
    return typeof e == "string" && (e = this.marks[e]), e.create(n);
  }
  /**
  Deserialize a node from its JSON representation. This method is
  bound.
  */
  nodeFromJSON(e) {
    return Lt.fromJSON(this, e);
  }
  /**
  Deserialize a mark from its JSON representation. This method is
  bound.
  */
  markFromJSON(e) {
    return Z.fromJSON(this, e);
  }
  /**
  @internal
  */
  nodeType(e) {
    let n = this.nodes[e];
    if (!n)
      throw new RangeError("Unknown node type: " + e);
    return n;
  }
}
function ad(t, e) {
  let n = [];
  for (let r = 0; r < e.length; r++) {
    let o = e[r], i = t.marks[o], s = i;
    if (i)
      n.push(i);
    else
      for (let l in t.marks) {
        let a = t.marks[l];
        (o == "_" || a.spec.group && a.spec.group.split(" ").indexOf(o) > -1) && n.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return n;
}
function Ww(t) {
  return t.tag != null;
}
function Uw(t) {
  return t.style != null;
}
class nn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, n) {
    this.schema = e, this.rules = n, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    n.forEach((o) => {
      if (Ww(o))
        this.tags.push(o);
      else if (Uw(o)) {
        let i = /[^=]*/.exec(o.style)[0];
        r.indexOf(i) < 0 && r.push(i), this.styles.push(o);
      }
    }), this.normalizeLists = !this.tags.some((o) => {
      if (!/^(ul|ol)\b/.test(o.tag) || !o.node)
        return !1;
      let i = e.nodes[o.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, n = {}) {
    let r = new dd(this, n, !1);
    return r.addAll(e, Z.none, n.from, n.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, n = {}) {
    let r = new dd(this, n, !0);
    return r.addAll(e, Z.none, n.from, n.to), O.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, n, r) {
    for (let o = r ? this.tags.indexOf(r) + 1 : 0; o < this.tags.length; o++) {
      let i = this.tags[o];
      if (Jw(e, i.tag) && (i.namespace === void 0 || e.namespaceURI == i.namespace) && (!i.context || n.matchesContext(i.context))) {
        if (i.getAttrs) {
          let s = i.getAttrs(e);
          if (s === !1)
            continue;
          i.attrs = s || void 0;
        }
        return i;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, n, r, o) {
    for (let i = o ? this.styles.indexOf(o) + 1 : 0; i < this.styles.length; i++) {
      let s = this.styles[i], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != n))) {
        if (s.getAttrs) {
          let a = s.getAttrs(n);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let n = [];
    function r(o) {
      let i = o.priority == null ? 50 : o.priority, s = 0;
      for (; s < n.length; s++) {
        let l = n[s];
        if ((l.priority == null ? 50 : l.priority) < i)
          break;
      }
      n.splice(s, 0, o);
    }
    for (let o in e.marks) {
      let i = e.marks[o].spec.parseDOM;
      i && i.forEach((s) => {
        r(s = ud(s)), s.mark || s.ignore || s.clearMark || (s.mark = o);
      });
    }
    for (let o in e.nodes) {
      let i = e.nodes[o].spec.parseDOM;
      i && i.forEach((s) => {
        r(s = ud(s)), s.node || s.ignore || s.mark || (s.node = o);
      });
    }
    return n;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.ParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new nn(e, nn.schemaRules(e)));
  }
}
const up = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Kw = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, fp = { ol: !0, ul: !0 }, jr = 1, xl = 2, Or = 4;
function cd(t, e, n) {
  return e != null ? (e ? jr : 0) | (e === "full" ? xl : 0) : t && t.whitespace == "pre" ? jr | xl : n & ~Or;
}
class xo {
  constructor(e, n, r, o, i, s) {
    this.type = e, this.attrs = n, this.marks = r, this.solid = o, this.options = s, this.content = [], this.activeMarks = Z.none, this.match = i || (s & Or ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let n = this.type.contentMatch.fillBefore(S.from(e));
      if (n)
        this.match = this.type.contentMatch.matchFragment(n);
      else {
        let r = this.type.contentMatch, o;
        return (o = r.findWrapping(e.type)) ? (this.match = r, o) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & jr)) {
      let r = this.content[this.content.length - 1], o;
      if (r && r.isText && (o = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let i = r;
        r.text.length == o[0].length ? this.content.pop() : this.content[this.content.length - 1] = i.withText(i.text.slice(0, i.text.length - o[0].length));
      }
    }
    let n = S.from(this.content);
    return !e && this.match && (n = n.append(this.match.fillBefore(S.empty, !0))), this.type ? this.type.create(this.attrs, n, this.marks) : n;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !up.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class dd {
  constructor(e, n, r) {
    this.parser = e, this.options = n, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let o = n.topNode, i, s = cd(null, n.preserveWhitespace, 0) | (r ? Or : 0);
    o ? i = new xo(o.type, o.attrs, Z.none, !0, n.topMatch || o.type.contentMatch, s) : r ? i = new xo(null, null, Z.none, !0, null, s) : i = new xo(e.schema.topNodeType, null, Z.none, !0, null, s), this.nodes = [i], this.find = n.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, n) {
    e.nodeType == 3 ? this.addTextNode(e, n) : e.nodeType == 1 && this.addElement(e, n);
  }
  addTextNode(e, n) {
    let r = e.nodeValue, o = this.top, i = o.options & xl ? "full" : this.localPreserveWS || (o.options & jr) > 0;
    if (i === "full" || o.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (i)
        i !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let s = o.content[o.content.length - 1], l = e.previousSibling;
        (!s || l && l.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), n), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, n, r) {
    let o = this.localPreserveWS, i = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), l;
    fp.hasOwnProperty(s) && this.parser.normalizeLists && qw(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : Kw.hasOwnProperty(s))
      this.findInside(e), this.ignoreFallback(e, n);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, d = this.needsBlock;
      if (up.hasOwnProperty(s))
        i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), c = !0, i.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, n);
        break e;
      }
      let u = a && a.skip ? n : this.readStyles(e, n);
      u && this.addAll(e, u), c && this.sync(i), this.needsBlock = d;
    } else {
      let c = this.readStyles(e, n);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = o;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, n) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), n);
  }
  // Called for ignored nodes
  ignoreFallback(e, n) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), n);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, n) {
    let r = e.style;
    if (r && r.length)
      for (let o = 0; o < this.parser.matchedStyles.length; o++) {
        let i = this.parser.matchedStyles[o], s = r.getPropertyValue(i);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(i, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? n = n.filter((c) => !a.clearMark(c)) : n = n.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return n;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, n, r, o) {
    let i, s;
    if (n.node)
      if (s = this.parser.schema.nodes[n.node], s.isLeaf)
        this.insertNode(s.create(n.attrs), r) || this.leafFallback(e, r);
      else {
        let a = this.enter(s, n.attrs || null, r, n.preserveWhitespace);
        a && (i = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[n.mark];
      r = r.concat(a.create(n.attrs));
    }
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (o)
      this.addElement(e, r, o);
    else if (n.getContent)
      this.findInside(e), n.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r));
    else {
      let a = e;
      typeof n.contentElement == "string" ? a = e.querySelector(n.contentElement) : typeof n.contentElement == "function" ? a = n.contentElement(e) : n.contentElement && (a = n.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    i && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, n, r, o) {
    let i = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, l = o == null ? null : e.childNodes[o]; s != l; s = s.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(s, n);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, n) {
    let r, o;
    for (let i = this.open; i >= 0; i--) {
      let s = this.nodes[i], l = s.findWrapping(e);
      if (l && (!r || r.length > l.length) && (r = l, o = s, !l.length) || s.solid)
        break;
    }
    if (!r)
      return null;
    this.sync(o);
    for (let i = 0; i < r.length; i++)
      n = this.enterInner(r[i], null, n, !1);
    return n;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, n) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (n = this.enterInner(o, null, n));
    }
    let r = this.findPlace(e, n);
    if (r) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let i = Z.none;
      for (let s of r.concat(e.marks))
        (o.type ? o.type.allowsMarkType(s.type) : fd(s.type, e.type)) && (i = s.addToSet(i));
      return o.content.push(e.mark(i)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, n, r, o) {
    let i = this.findPlace(e.create(n), r);
    return i && (i = this.enterInner(e, n, r, !0, o)), i;
  }
  // Open a node of the given type
  enterInner(e, n, r, o = !1, i) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let l = cd(e, i, s.options);
    s.options & Or && s.content.length == 0 && (l |= Or);
    let a = Z.none;
    return r = r.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : fd(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new xo(e, n, a, o, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let n = this.nodes.length - 1;
    if (n > this.open) {
      for (; n > this.open; n--)
        this.nodes[n - 1].content.push(this.nodes[n].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let n = this.open; n >= 0; n--) {
      if (this.nodes[n] == e)
        return this.open = n, !0;
      this.localPreserveWS && (this.nodes[n].options |= jr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let n = this.open; n >= 0; n--) {
      let r = this.nodes[n].content;
      for (let o = r.length - 1; o >= 0; o--)
        e += r[o].nodeSize;
      n && e++;
    }
    return e;
  }
  findAtPoint(e, n) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == n && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].pos == null && e.nodeType == 1 && e.contains(this.find[n].node) && (this.find[n].pos = this.currentPos);
  }
  findAround(e, n, r) {
    if (e != n && this.find)
      for (let o = 0; o < this.find.length; o++)
        this.find[o].pos == null && e.nodeType == 1 && e.contains(this.find[o].node) && n.compareDocumentPosition(this.find[o].node) & (r ? 2 : 4) && (this.find[o].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let n = 0; n < this.find.length; n++)
        this.find[n].node == e && (this.find[n].pos = this.currentPos - (e.nodeValue.length - this.find[n].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let n = e.split("/"), r = this.options.context, o = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), i = -(r ? r.depth + 1 : 0) + (o ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = n[l];
        if (c == "") {
          if (l == n.length - 1 || l == 0)
            continue;
          for (; a >= i; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let d = a > 0 || a == 0 && o ? this.nodes[a].type : r && a >= i ? r.node(a - i).type : null;
          if (!d || d.name != c && !d.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(n.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let n = e.depth; n >= 0; n--) {
        let r = e.node(n).contentMatchAt(e.indexAfter(n)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let n in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[n];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function qw(t) {
  for (let e = t.firstChild, n = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && fp.hasOwnProperty(r) && n ? (n.appendChild(e), e = n) : r == "li" ? n = e : r && (n = null);
  }
}
function Jw(t, e) {
  return (t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector).call(t, e);
}
function ud(t) {
  let e = {};
  for (let n in t)
    e[n] = t[n];
  return e;
}
function fd(t, e) {
  let n = e.schema.nodes;
  for (let r in n) {
    let o = n[r];
    if (!o.allowsMarkType(t))
      continue;
    let i = [], s = (l) => {
      i.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: d } = l.edge(a);
        if (c == e || i.indexOf(d) < 0 && s(d))
          return !0;
      }
    };
    if (s(o.contentMatch))
      return !0;
  }
}
class un {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, n) {
    this.nodes = e, this.marks = n;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, n = {}, r) {
    r || (r = Is(n).createDocumentFragment());
    let o = r, i = [];
    return e.forEach((s) => {
      if (i.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < i.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(i[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < i.length; )
          o = i.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], d = this.serializeMark(c, s.isInline, n);
          d && (i.push([c, o]), o.appendChild(d.dom), o = d.contentDOM || d.dom);
        }
      }
      o.appendChild(this.serializeNodeInner(s, n));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, n) {
    let { dom: r, contentDOM: o } = Fo(Is(n), this.nodes[e.type.name](e), null, e.attrs);
    if (o) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, n, o);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, n = {}) {
    let r = this.serializeNodeInner(e, n);
    for (let o = e.marks.length - 1; o >= 0; o--) {
      let i = this.serializeMark(e.marks[o], e.isInline, n);
      i && ((i.contentDOM || i.dom).appendChild(r), r = i.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, n, r = {}) {
    let o = this.marks[e.type.name];
    return o && Fo(Is(r), o(e, n), null, e.attrs);
  }
  static renderSpec(e, n, r = null, o) {
    return Fo(e, n, r, o);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new un(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let n = pd(e.nodes);
    return n.text || (n.text = (r) => r.text), n;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return pd(e.marks);
  }
}
function pd(t) {
  let e = {};
  for (let n in t) {
    let r = t[n].spec.toDOM;
    r && (e[n] = r);
  }
  return e;
}
function Is(t) {
  return t.document || window.document;
}
const hd = /* @__PURE__ */ new WeakMap();
function Gw(t) {
  let e = hd.get(t);
  return e === void 0 && hd.set(t, e = Zw(t)), e;
}
function Zw(t) {
  let e = null;
  function n(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let o = 0; o < r.length; o++)
            n(r[o]);
      else
        for (let o in r)
          n(r[o]);
  }
  return n(t), e;
}
function Fo(t, e, n, r) {
  if (typeof e == "string")
    return { dom: t.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let o = e[0], i;
  if (typeof o != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (i = Gw(r)) && i.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = o.indexOf(" ");
  s > 0 && (n = o.slice(0, s), o = o.slice(s + 1));
  let l, a = n ? t.createElementNS(n, o) : t.createElement(o), c = e[1], d = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    d = 2;
    for (let u in c)
      if (c[u] != null) {
        let f = u.indexOf(" ");
        f > 0 ? a.setAttributeNS(u.slice(0, f), u.slice(f + 1), c[u]) : a.setAttribute(u, c[u]);
      }
  }
  for (let u = d; u < e.length; u++) {
    let f = e[u];
    if (f === 0) {
      if (u < e.length - 1 || u > d)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: p, contentDOM: h } = Fo(t, f, n, r);
      if (a.appendChild(p), h) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = h;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const pp = 65535, hp = Math.pow(2, 16);
function Xw(t, e) {
  return t + e * hp;
}
function md(t) {
  return t & pp;
}
function Yw(t) {
  return (t - (t & pp)) / hp;
}
const mp = 1, gp = 2, jo = 4, yp = 8;
class Cl {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.pos = e, this.delInfo = n, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & yp) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (mp | jo)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (gp | jo)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & jo) > 0;
  }
}
class Be {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, n = !1) {
    if (this.ranges = e, this.inverted = n, !e.length && Be.empty)
      return Be.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let n = 0, r = md(e);
    if (!this.inverted)
      for (let o = 0; o < r; o++)
        n += this.ranges[o * 3 + 2] - this.ranges[o * 3 + 1];
    return this.ranges[r * 3] + n + Yw(e);
  }
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  map(e, n = 1) {
    return this._map(e, n, !0);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let o = 0, i = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? o : 0);
      if (a > e)
        break;
      let c = this.ranges[l + i], d = this.ranges[l + s], u = a + c;
      if (e <= u) {
        let f = c ? e == a ? -1 : e == u ? 1 : n : n, p = a + o + (f < 0 ? 0 : d);
        if (r)
          return p;
        let h = e == (n < 0 ? a : u) ? null : Xw(l / 3, e - a), m = e == a ? gp : e == u ? mp : jo;
        return (n < 0 ? e != a : e != u) && (m |= yp), new Cl(p, m, h);
      }
      o += d - c;
    }
    return r ? e + o : new Cl(e + o, 0, null);
  }
  /**
  @internal
  */
  touches(e, n) {
    let r = 0, o = md(n), i = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + i], d = a + c;
      if (e <= d && l == o * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let n = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let o = 0, i = 0; o < this.ranges.length; o += 3) {
      let s = this.ranges[o], l = s - (this.inverted ? i : 0), a = s + (this.inverted ? 0 : i), c = this.ranges[o + n], d = this.ranges[o + r];
      e(l, l + c, a, a + d), i += d - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Be(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Be.empty : new Be(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Be.empty = new Be([]);
class qn {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e = [], n, r = 0, o = e.length) {
    this.maps = e, this.mirror = n, this.from = r, this.to = o;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, n = this.maps.length) {
    return new qn(this.maps, this.mirror, e, n);
  }
  /**
  @internal
  */
  copy() {
    return new qn(this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, n) {
    this.to = this.maps.push(e), n != null && this.setMirror(this.maps.length - 1, n);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let n = 0, r = this.maps.length; n < e.maps.length; n++) {
      let o = e.getMirror(n);
      this.appendMap(e.maps[n], o != null && o < n ? r + o : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let n = 0; n < this.mirror.length; n++)
        if (this.mirror[n] == e)
          return this.mirror[n + (n % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, n) {
    this.mirror || (this.mirror = []), this.mirror.push(e, n);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let n = e.maps.length - 1, r = this.maps.length + e.maps.length; n >= 0; n--) {
      let o = e.getMirror(n);
      this.appendMap(e.maps[n].invert(), o != null && o > n ? r - o - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new qn();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, n = 1) {
    if (this.mirror)
      return this._map(e, n, !0);
    for (let r = this.from; r < this.to; r++)
      e = this.maps[r].map(e, n);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, n = 1) {
    return this._map(e, n, !1);
  }
  /**
  @internal
  */
  _map(e, n, r) {
    let o = 0;
    for (let i = this.from; i < this.to; i++) {
      let s = this.maps[i], l = s.mapResult(e, n);
      if (l.recover != null) {
        let a = this.getMirror(i);
        if (a != null && a > i && a < this.to) {
          i = a, e = this.maps[a].recover(l.recover);
          continue;
        }
      }
      o |= l.delInfo, e = l.pos;
    }
    return r ? e : new Cl(e, o, null);
  }
}
const Ds = /* @__PURE__ */ Object.create(null);
class Le {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Be.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, n) {
    if (!n || !n.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Ds[n.stepType];
    if (!r)
      throw new RangeError(`No step type ${n.stepType} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, n) {
    if (e in Ds)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Ds[e] = n, n.prototype.jsonID = e, n;
  }
}
class fe {
  /**
  @internal
  */
  constructor(e, n) {
    this.doc = e, this.failed = n;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new fe(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new fe(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, n, r, o) {
    try {
      return fe.ok(e.replace(n, r, o));
    } catch (i) {
      if (i instanceof oi)
        return fe.fail(i.message);
      throw i;
    }
  }
}
function Ea(t, e, n) {
  let r = [];
  for (let o = 0; o < t.childCount; o++) {
    let i = t.child(o);
    i.content.size && (i = i.copy(Ea(i.content, e, i))), i.isInline && (i = e(i, n, o)), r.push(i);
  }
  return S.fromArray(r);
}
class Yt extends Le {
  /**
  Create a mark step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = e.resolve(this.from), o = r.node(r.sharedDepth(this.to)), i = new O(Ea(n.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), o), n.openStart, n.openEnd);
    return fe.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new tt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new Yt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Yt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Yt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new Yt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Le.jsonID("addMark", Yt);
class tt extends Le {
  /**
  Create a mark-removing step.
  */
  constructor(e, n, r) {
    super(), this.from = e, this.to = n, this.mark = r;
  }
  apply(e) {
    let n = e.slice(this.from, this.to), r = new O(Ea(n.content, (o) => o.mark(this.mark.removeFromSet(o.marks)), e), n.openStart, n.openEnd);
    return fe.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new Yt(this.from, this.to, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deleted && r.deleted || n.pos >= r.pos ? null : new tt(n.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof tt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new tt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new tt(n.from, n.to, e.markFromJSON(n.mark));
  }
}
Le.jsonID("removeMark", tt);
class Qt extends Le {
  /**
  Create a node mark step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return fe.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.addToSet(n.marks));
    return fe.fromReplace(e, this.pos, this.pos + 1, new O(S.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    if (n) {
      let r = this.mark.addToSet(n.marks);
      if (r.length == n.marks.length) {
        for (let o = 0; o < n.marks.length; o++)
          if (!n.marks[o].isInSet(r))
            return new Qt(this.pos, n.marks[o]);
        return new Qt(this.pos, this.mark);
      }
    }
    return new tr(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Qt(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Qt(n.pos, e.markFromJSON(n.mark));
  }
}
Le.jsonID("addNodeMark", Qt);
class tr extends Le {
  /**
  Create a mark-removing step.
  */
  constructor(e, n) {
    super(), this.pos = e, this.mark = n;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return fe.fail("No node at mark step's position");
    let r = n.type.create(n.attrs, null, this.mark.removeFromSet(n.marks));
    return fe.fromReplace(e, this.pos, this.pos + 1, new O(S.from(r), 0, n.isLeaf ? 0 : 1));
  }
  invert(e) {
    let n = e.nodeAt(this.pos);
    return !n || !this.mark.isInSet(n.marks) ? this : new Qt(this.pos, this.mark);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new tr(n.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new tr(n.pos, e.markFromJSON(n.mark));
  }
}
Le.jsonID("removeNodeMark", tr);
class ve extends Le {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, n, r, o = !1) {
    super(), this.from = e, this.to = n, this.slice = r, this.structure = o;
  }
  apply(e) {
    return this.structure && Tl(e, this.from, this.to) ? fe.fail("Structure replace would overwrite content") : fe.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Be([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ve(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return n.deletedAcross && r.deletedAcross ? null : new ve(n.pos, Math.max(n.pos, r.pos), this.slice);
  }
  merge(e) {
    if (!(e instanceof ve) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let n = this.slice.size + e.slice.size == 0 ? O.empty : new O(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ve(this.from, this.to + (e.to - e.from), n, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let n = this.slice.size + e.slice.size == 0 ? O.empty : new O(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ve(e.from, this.to, n, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ve(n.from, n.to, O.fromJSON(e, n.slice), !!n.structure);
  }
}
Le.jsonID("replace", ve);
class ke extends Le {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, n, r, o, i, s, l = !1) {
    super(), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = o, this.slice = i, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Tl(e, this.from, this.gapFrom) || Tl(e, this.gapTo, this.to)))
      return fe.fail("Structure gap-replace would overwrite content");
    let n = e.slice(this.gapFrom, this.gapTo);
    if (n.openStart || n.openEnd)
      return fe.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, n.content);
    return r ? fe.fromReplace(e, this.from, this.to, r) : fe.fail("Content does not fit in gap");
  }
  getMap() {
    return new Be([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let n = this.gapTo - this.gapFrom;
    return new ke(this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let n = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), o = this.from == this.gapFrom ? n.pos : e.map(this.gapFrom, -1), i = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return n.deletedAcross && r.deletedAcross || o < n.pos || i > r.pos ? null : new ke(n.pos, r.pos, o, i, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.from != "number" || typeof n.to != "number" || typeof n.gapFrom != "number" || typeof n.gapTo != "number" || typeof n.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new ke(n.from, n.to, n.gapFrom, n.gapTo, O.fromJSON(e, n.slice), n.insert, !!n.structure);
  }
}
Le.jsonID("replaceAround", ke);
function Tl(t, e, n) {
  let r = t.resolve(e), o = n - e, i = r.depth;
  for (; o > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; )
    i--, o--;
  if (o > 0) {
    let s = r.node(i).maybeChild(r.indexAfter(i));
    for (; o > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, o--;
    }
  }
  return !1;
}
function Qw(t, e, n, r) {
  let o = [], i = [], s, l;
  t.doc.nodesBetween(e, n, (a, c, d) => {
    if (!a.isInline)
      return;
    let u = a.marks;
    if (!r.isInSet(u) && d.type.allowsMarkType(r.type)) {
      let f = Math.max(c, e), p = Math.min(c + a.nodeSize, n), h = r.addToSet(u);
      for (let m = 0; m < u.length; m++)
        u[m].isInSet(h) || (s && s.to == f && s.mark.eq(u[m]) ? s.to = p : o.push(s = new tt(f, p, u[m])));
      l && l.to == f ? l.to = p : i.push(l = new Yt(f, p, r));
    }
  }), o.forEach((a) => t.step(a)), i.forEach((a) => t.step(a));
}
function ek(t, e, n, r) {
  let o = [], i = 0;
  t.doc.nodesBetween(e, n, (s, l) => {
    if (!s.isInline)
      return;
    i++;
    let a = null;
    if (r instanceof is) {
      let c = s.marks, d;
      for (; d = r.isInSet(c); )
        (a || (a = [])).push(d), c = d.removeFromSet(c);
    } else r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, n);
      for (let d = 0; d < a.length; d++) {
        let u = a[d], f;
        for (let p = 0; p < o.length; p++) {
          let h = o[p];
          h.step == i - 1 && u.eq(o[p].style) && (f = h);
        }
        f ? (f.to = c, f.step = i) : o.push({ style: u, from: Math.max(l, e), to: c, step: i });
      }
    }
  }), o.forEach((s) => t.step(new tt(s.from, s.to, s.style)));
}
function Oa(t, e, n, r = n.contentMatch, o = !0) {
  let i = t.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < i.childCount; a++) {
    let c = i.child(a), d = l + c.nodeSize, u = r.matchType(c.type);
    if (!u)
      s.push(new ve(l, d, O.empty));
    else {
      r = u;
      for (let f = 0; f < c.marks.length; f++)
        n.allowsMarkType(c.marks[f].type) || t.step(new tt(l, d, c.marks[f]));
      if (o && c.isText && n.whitespace != "pre") {
        let f, p = /\r?\n|\r/g, h;
        for (; f = p.exec(c.text); )
          h || (h = new O(S.from(n.schema.text(" ", n.allowedMarks(c.marks))), 0, 0)), s.push(new ve(l + f.index, l + f.index + f[0].length, h));
      }
    }
    l = d;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(S.empty, !0);
    t.replace(l, l, new O(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    t.step(s[a]);
}
function tk(t, e, n) {
  return (e == 0 || t.canReplace(e, t.childCount)) && (n == t.childCount || t.canReplace(0, n));
}
function ur(t) {
  let n = t.parent.content.cutByIndex(t.startIndex, t.endIndex);
  for (let r = t.depth; ; --r) {
    let o = t.$from.node(r), i = t.$from.index(r), s = t.$to.indexAfter(r);
    if (r < t.depth && o.canReplace(i, s, n))
      return r;
    if (r == 0 || o.type.spec.isolating || !tk(o, i, s))
      break;
  }
  return null;
}
function nk(t, e, n) {
  let { $from: r, $to: o, depth: i } = e, s = r.before(i + 1), l = o.after(i + 1), a = s, c = l, d = S.empty, u = 0;
  for (let h = i, m = !1; h > n; h--)
    m || r.index(h) > 0 ? (m = !0, d = S.from(r.node(h).copy(d)), u++) : a--;
  let f = S.empty, p = 0;
  for (let h = i, m = !1; h > n; h--)
    m || o.after(h + 1) < o.end(h) ? (m = !0, f = S.from(o.node(h).copy(f)), p++) : c++;
  t.step(new ke(a, c, s, l, new O(d.append(f), u, p), d.size - u, !0));
}
function La(t, e, n = null, r = t) {
  let o = rk(t, e), i = o && ok(r, e);
  return i ? o.map(gd).concat({ type: e, attrs: n }).concat(i.map(gd)) : null;
}
function gd(t) {
  return { type: t, attrs: null };
}
function rk(t, e) {
  let { parent: n, startIndex: r, endIndex: o } = t, i = n.contentMatchAt(r).findWrapping(e);
  if (!i)
    return null;
  let s = i.length ? i[0] : e;
  return n.canReplaceWith(r, o, s) ? i : null;
}
function ok(t, e) {
  let { parent: n, startIndex: r, endIndex: o } = t, i = n.child(r), s = e.contentMatch.findWrapping(i.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < o; c++)
    a = a.matchType(n.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function ik(t, e, n) {
  let r = S.empty;
  for (let s = n.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = n[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = S.from(n[s].type.create(n[s].attrs, r));
  }
  let o = e.start, i = e.end;
  t.step(new ke(o, i, o, i, new O(r, 0, 0), n.length, !0));
}
function sk(t, e, n, r, o) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let i = t.steps.length;
  t.doc.nodesBetween(e, n, (s, l) => {
    let a = typeof o == "function" ? o(s) : o;
    if (s.isTextblock && !s.hasMarkup(r, a) && lk(t.doc, t.mapping.slice(i).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let p = r.whitespace == "pre", h = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        p && !h ? c = !1 : !p && h && (c = !0);
      }
      c === !1 && vp(t, s, l, i), Oa(t, t.mapping.slice(i).map(l, 1), r, void 0, c === null);
      let d = t.mapping.slice(i), u = d.map(l, 1), f = d.map(l + s.nodeSize, 1);
      return t.step(new ke(u, f, u + 1, f - 1, new O(S.from(r.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && bp(t, s, l, i), !1;
    }
  });
}
function bp(t, e, n, r) {
  e.forEach((o, i) => {
    if (o.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(o.text); ) {
        let a = t.mapping.slice(r).map(n + 1 + i + s.index);
        t.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function vp(t, e, n, r) {
  e.forEach((o, i) => {
    if (o.type == o.type.schema.linebreakReplacement) {
      let s = t.mapping.slice(r).map(n + 1 + i);
      t.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function lk(t, e, n) {
  let r = t.resolve(e), o = r.index();
  return r.parent.canReplaceWith(o, o + 1, n);
}
function ak(t, e, n, r, o) {
  let i = t.doc.nodeAt(e);
  if (!i)
    throw new RangeError("No node at given position");
  n || (n = i.type);
  let s = n.create(r, null, o || i.marks);
  if (i.isLeaf)
    return t.replaceWith(e, e + i.nodeSize, s);
  if (!n.validContent(i.content))
    throw new RangeError("Invalid content for node type " + n.name);
  t.step(new ke(e, e + i.nodeSize, e + 1, e + i.nodeSize - 1, new O(S.from(s), 0, 0), 1, !0));
}
function Jn(t, e, n = 1, r) {
  let o = t.resolve(e), i = o.depth - n, s = r && r[r.length - 1] || o.parent;
  if (i < 0 || o.parent.type.spec.isolating || !o.parent.canReplace(o.index(), o.parent.childCount) || !s.type.validContent(o.parent.content.cutByIndex(o.index(), o.parent.childCount)))
    return !1;
  for (let c = o.depth - 1, d = n - 2; c > i; c--, d--) {
    let u = o.node(c), f = o.index(c);
    if (u.type.spec.isolating)
      return !1;
    let p = u.content.cutByIndex(f, u.childCount), h = r && r[d + 1];
    h && (p = p.replaceChild(0, h.type.create(h.attrs)));
    let m = r && r[d] || u;
    if (!u.canReplace(f + 1, u.childCount) || !m.type.validContent(p))
      return !1;
  }
  let l = o.indexAfter(i), a = r && r[0];
  return o.node(i).canReplaceWith(l, l, a ? a.type : o.node(i + 1).type);
}
function ck(t, e, n = 1, r) {
  let o = t.doc.resolve(e), i = S.empty, s = S.empty;
  for (let l = o.depth, a = o.depth - n, c = n - 1; l > a; l--, c--) {
    i = S.from(o.node(l).copy(i));
    let d = r && r[c];
    s = S.from(d ? d.type.create(d.attrs, s) : o.node(l).copy(s));
  }
  t.step(new ve(e, e, new O(i.append(s), n, n), !0));
}
function fn(t, e) {
  let n = t.resolve(e), r = n.index();
  return wp(n.nodeBefore, n.nodeAfter) && n.parent.canReplace(r, r + 1);
}
function dk(t, e) {
  e.content.size || t.type.compatibleContent(e.type);
  let n = t.contentMatchAt(t.childCount), { linebreakReplacement: r } = t.type.schema;
  for (let o = 0; o < e.childCount; o++) {
    let i = e.child(o), s = i.type == r ? t.type.schema.nodes.text : i.type;
    if (n = n.matchType(s), !n || !t.type.allowsMarks(i.marks))
      return !1;
  }
  return n.validEnd;
}
function wp(t, e) {
  return !!(t && e && !t.isLeaf && dk(t, e));
}
function ss(t, e, n = -1) {
  let r = t.resolve(e);
  for (let o = r.depth; ; o--) {
    let i, s, l = r.index(o);
    if (o == r.depth ? (i = r.nodeBefore, s = r.nodeAfter) : n > 0 ? (i = r.node(o + 1), l++, s = r.node(o).maybeChild(l)) : (i = r.node(o).maybeChild(l - 1), s = r.node(o + 1)), i && !i.isTextblock && wp(i, s) && r.node(o).canReplace(l, l + 1))
      return e;
    if (o == 0)
      break;
    e = n < 0 ? r.before(o) : r.after(o);
  }
}
function uk(t, e, n) {
  let r = null, { linebreakReplacement: o } = t.doc.type.schema, i = t.doc.resolve(e - n), s = i.node().type;
  if (o && s.inlineContent) {
    let d = s.whitespace == "pre", u = !!s.contentMatch.matchType(o);
    d && !u ? r = !1 : !d && u && (r = !0);
  }
  let l = t.steps.length;
  if (r === !1) {
    let d = t.doc.resolve(e + n);
    vp(t, d.node(), d.before(), l);
  }
  s.inlineContent && Oa(t, e + n - 1, s, i.node().contentMatchAt(i.index()), r == null);
  let a = t.mapping.slice(l), c = a.map(e - n);
  if (t.step(new ve(c, a.map(e + n, -1), O.empty, !0)), r === !0) {
    let d = t.doc.resolve(c);
    bp(t, d.node(), d.before(), t.steps.length);
  }
  return t;
}
function fk(t, e, n) {
  let r = t.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), n))
    return e;
  if (r.parentOffset == 0)
    for (let o = r.depth - 1; o >= 0; o--) {
      let i = r.index(o);
      if (r.node(o).canReplaceWith(i, i, n))
        return r.before(o + 1);
      if (i > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let o = r.depth - 1; o >= 0; o--) {
      let i = r.indexAfter(o);
      if (r.node(o).canReplaceWith(i, i, n))
        return r.after(o + 1);
      if (i < r.node(o).childCount)
        return null;
    }
  return null;
}
function kp(t, e, n) {
  let r = t.resolve(e);
  if (!n.content.size)
    return e;
  let o = n.content;
  for (let i = 0; i < n.openStart; i++)
    o = o.firstChild.content;
  for (let i = 1; i <= (n.openStart == 0 && n.size ? 2 : 1); i++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), d = !1;
      if (i == 1)
        d = c.canReplace(a, a, o);
      else {
        let u = c.contentMatchAt(a).findWrapping(o.firstChild.type);
        d = u && c.canReplaceWith(a, a, u[0]);
      }
      if (d)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function ls(t, e, n = e, r = O.empty) {
  if (e == n && !r.size)
    return null;
  let o = t.resolve(e), i = t.resolve(n);
  return Sp(o, i, r) ? new ve(e, n, r) : new pk(o, i, r).fit();
}
function Sp(t, e, n) {
  return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace(t.index(), e.index(), n.content);
}
class pk {
  constructor(e, n, r) {
    this.$from = e, this.$to = n, this.unplaced = r, this.frontier = [], this.placed = S.empty;
    for (let o = 0; o <= e.depth; o++) {
      let i = e.node(o);
      this.frontier.push({
        type: i.type,
        match: i.contentMatchAt(e.indexAfter(o))
      });
    }
    for (let o = e.depth; o > 0; o--)
      this.placed = S.from(e.node(o).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), n = this.placed.size - this.depth - this.$from.depth, r = this.$from, o = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!o)
      return null;
    let i = this.placed, s = r.depth, l = o.depth;
    for (; s && l && i.childCount == 1; )
      i = i.firstChild.content, s--, l--;
    let a = new O(i, s, l);
    return e > -1 ? new ke(r.pos, e, this.$to.pos, this.$to.end(), a, n) : a.size || r.pos != this.$to.pos ? new ve(r.pos, o.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let n = this.unplaced.content, r = 0, o = this.unplaced.openEnd; r < e; r++) {
      let i = n.firstChild;
      if (n.childCount > 1 && (o = 0), i.type.spec.isolating && o <= r) {
        e = r;
        break;
      }
      n = i.content;
    }
    for (let n = 1; n <= 2; n++)
      for (let r = n == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let o, i = null;
        r ? (i = Ps(this.unplaced.content, r - 1).firstChild, o = i.content) : o = this.unplaced.content;
        let s = o.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], d, u = null;
          if (n == 1 && (s ? c.matchType(s.type) || (u = c.fillBefore(S.from(s), !1)) : i && a.compatibleContent(i.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, inject: u };
          if (n == 2 && s && (d = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, wrap: d };
          if (i && c.matchType(i.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, o = Ps(e, n);
    return !o.childCount || o.firstChild.isLeaf ? !1 : (this.unplaced = new O(e, n + 1, Math.max(r, o.size + n >= e.size - r ? n + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: n, openEnd: r } = this.unplaced, o = Ps(e, n);
    if (o.childCount <= 1 && n > 0) {
      let i = e.size - n <= n + o.size;
      this.unplaced = new O(vr(e, n - 1, 1), n - 1, i ? n - 1 : r);
    } else
      this.unplaced = new O(vr(e, n, 1), n, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: n, parent: r, inject: o, wrap: i }) {
    for (; this.depth > n; )
      this.closeFrontierNode();
    if (i)
      for (let m = 0; m < i.length; m++)
        this.openFrontierNode(i[m]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, d = [], { match: u, type: f } = this.frontier[n];
    if (o) {
      for (let m = 0; m < o.childCount; m++)
        d.push(o.child(m));
      u = u.matchFragment(o);
    }
    let p = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = u.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (u = g, d.push(xp(m.mark(f.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? p : -1)));
    }
    let h = c == l.childCount;
    h || (p = -1), this.placed = wr(this.placed, n, S.from(d)), this.frontier[n].match = u, h && p < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < p; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = h ? e == 0 ? O.empty : new O(vr(s.content, e - 1, 1), e - 1, p < 0 ? s.openEnd : e - 1) : new O(vr(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], n;
    if (!e.type.isTextblock || !Bs(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (n = this.findCloseLevel(this.$to)) && n.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, o = this.$to.after(r);
    for (; r > 1 && o == this.$to.end(--r); )
      ++o;
    return o;
  }
  findCloseLevel(e) {
    e: for (let n = Math.min(this.depth, e.depth); n >= 0; n--) {
      let { match: r, type: o } = this.frontier[n], i = n < e.depth && e.end(n + 1) == e.pos + (e.depth - (n + 1)), s = Bs(e, n, o, r, i);
      if (s) {
        for (let l = n - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], d = Bs(e, l, c, a, !0);
          if (!d || d.childCount)
            continue e;
        }
        return { depth: n, fit: s, move: i ? e.doc.resolve(e.after(n + 1)) : e };
      }
    }
  }
  close(e) {
    let n = this.findCloseLevel(e);
    if (!n)
      return null;
    for (; this.depth > n.depth; )
      this.closeFrontierNode();
    n.fit.childCount && (this.placed = wr(this.placed, n.depth, n.fit)), e = n.move;
    for (let r = n.depth + 1; r <= e.depth; r++) {
      let o = e.node(r), i = o.type.contentMatch.fillBefore(o.content, !0, e.index(r));
      this.openFrontierNode(o.type, o.attrs, i);
    }
    return e;
  }
  openFrontierNode(e, n = null, r) {
    let o = this.frontier[this.depth];
    o.match = o.match.matchType(e), this.placed = wr(this.placed, this.depth, S.from(e.create(n, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let n = this.frontier.pop().match.fillBefore(S.empty, !0);
    n.childCount && (this.placed = wr(this.placed, this.frontier.length, n));
  }
}
function vr(t, e, n) {
  return e == 0 ? t.cutByIndex(n, t.childCount) : t.replaceChild(0, t.firstChild.copy(vr(t.firstChild.content, e - 1, n)));
}
function wr(t, e, n) {
  return e == 0 ? t.append(n) : t.replaceChild(t.childCount - 1, t.lastChild.copy(wr(t.lastChild.content, e - 1, n)));
}
function Ps(t, e) {
  for (let n = 0; n < e; n++)
    t = t.firstChild.content;
  return t;
}
function xp(t, e, n) {
  if (e <= 0)
    return t;
  let r = t.content;
  return e > 1 && (r = r.replaceChild(0, xp(r.firstChild, e - 1, r.childCount == 1 ? n - 1 : 0))), e > 0 && (r = t.type.contentMatch.fillBefore(r).append(r), n <= 0 && (r = r.append(t.type.contentMatch.matchFragment(r).fillBefore(S.empty, !0)))), t.copy(r);
}
function Bs(t, e, n, r, o) {
  let i = t.node(e), s = o ? t.indexAfter(e) : t.index(e);
  if (s == i.childCount && !n.compatibleContent(i.type))
    return null;
  let l = r.fillBefore(i.content, !0, s);
  return l && !hk(n, i.content, s) ? l : null;
}
function hk(t, e, n) {
  for (let r = n; r < e.childCount; r++)
    if (!t.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function mk(t) {
  return t.spec.defining || t.spec.definingForContent;
}
function gk(t, e, n, r) {
  if (!r.size)
    return t.deleteRange(e, n);
  let o = t.doc.resolve(e), i = t.doc.resolve(n);
  if (Sp(o, i, r))
    return t.step(new ve(e, n, r));
  let s = Tp(o, t.doc.resolve(n));
  s[s.length - 1] == 0 && s.pop();
  let l = -(o.depth + 1);
  s.unshift(l);
  for (let f = o.depth, p = o.pos - 1; f > 0; f--, p--) {
    let h = o.node(f).type.spec;
    if (h.defining || h.definingAsContext || h.isolating)
      break;
    s.indexOf(f) > -1 ? l = f : o.before(f) == p && s.splice(1, 0, -f);
  }
  let a = s.indexOf(l), c = [], d = r.openStart;
  for (let f = r.content, p = 0; ; p++) {
    let h = f.firstChild;
    if (c.push(h), p == r.openStart)
      break;
    f = h.content;
  }
  for (let f = d - 1; f >= 0; f--) {
    let p = c[f], h = mk(p.type);
    if (h && !p.sameMarkup(o.node(Math.abs(l) - 1)))
      d = f;
    else if (h || !p.type.isTextblock)
      break;
  }
  for (let f = r.openStart; f >= 0; f--) {
    let p = (f + d + 1) % (r.openStart + 1), h = c[p];
    if (h)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + a) % s.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let b = o.node(g - 1), v = o.index(g - 1);
        if (b.canReplaceWith(v, v, h.type, h.marks))
          return t.replace(o.before(g), y ? i.after(g) : n, new O(Cp(r.content, 0, r.openStart, p), p, r.openEnd));
      }
  }
  let u = t.steps.length;
  for (let f = s.length - 1; f >= 0 && (t.replace(e, n, r), !(t.steps.length > u)); f--) {
    let p = s[f];
    p < 0 || (e = o.before(p), n = i.after(p));
  }
}
function Cp(t, e, n, r, o) {
  if (e < n) {
    let i = t.firstChild;
    t = t.replaceChild(0, i.copy(Cp(i.content, e + 1, n, r, i)));
  }
  if (e > r) {
    let i = o.contentMatchAt(0), s = i.fillBefore(t).append(t);
    t = s.append(i.matchFragment(s).fillBefore(S.empty, !0));
  }
  return t;
}
function yk(t, e, n, r) {
  if (!r.isInline && e == n && t.doc.resolve(e).parent.content.size) {
    let o = fk(t.doc, e, r.type);
    o != null && (e = n = o);
  }
  t.replaceRange(e, n, new O(S.from(r), 0, 0));
}
function bk(t, e, n) {
  let r = t.doc.resolve(e), o = t.doc.resolve(n), i = Tp(r, o);
  for (let s = 0; s < i.length; s++) {
    let l = i[s], a = s == i.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return t.delete(r.start(l), o.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), o.indexAfter(l - 1))))
      return t.delete(r.before(l), o.after(l));
  }
  for (let s = 1; s <= r.depth && s <= o.depth; s++)
    if (e - r.start(s) == r.depth - s && n > r.end(s) && o.end(s) - n != o.depth - s && r.start(s - 1) == o.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), o.index(s - 1)))
      return t.delete(r.before(s), n);
  t.delete(e, n);
}
function Tp(t, e) {
  let n = [], r = Math.min(t.depth, e.depth);
  for (let o = r; o >= 0; o--) {
    let i = t.start(o);
    if (i < t.pos - (t.depth - o) || e.end(o) > e.pos + (e.depth - o) || t.node(o).type.spec.isolating || e.node(o).type.spec.isolating)
      break;
    (i == e.start(o) || o == t.depth && o == e.depth && t.parent.inlineContent && e.parent.inlineContent && o && e.start(o - 1) == i - 1) && n.push(o);
  }
  return n;
}
class Gn extends Le {
  /**
  Construct an attribute step.
  */
  constructor(e, n, r) {
    super(), this.pos = e, this.attr = n, this.value = r;
  }
  apply(e) {
    let n = e.nodeAt(this.pos);
    if (!n)
      return fe.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in n.attrs)
      r[i] = n.attrs[i];
    r[this.attr] = this.value;
    let o = n.type.create(r, null, n.marks);
    return fe.fromReplace(e, this.pos, this.pos + 1, new O(S.from(o), 0, n.isLeaf ? 0 : 1));
  }
  getMap() {
    return Be.empty;
  }
  invert(e) {
    return new Gn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let n = e.mapResult(this.pos, 1);
    return n.deletedAfter ? null : new Gn(n.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.pos != "number" || typeof n.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Gn(n.pos, n.attr, n.value);
  }
}
Le.jsonID("attr", Gn);
class Wr extends Le {
  /**
  Construct an attribute step.
  */
  constructor(e, n) {
    super(), this.attr = e, this.value = n;
  }
  apply(e) {
    let n = /* @__PURE__ */ Object.create(null);
    for (let o in e.attrs)
      n[o] = e.attrs[o];
    n[this.attr] = this.value;
    let r = e.type.create(n, e.content, e.marks);
    return fe.ok(r);
  }
  getMap() {
    return Be.empty;
  }
  invert(e) {
    return new Wr(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, n) {
    if (typeof n.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Wr(n.attr, n.value);
  }
}
Le.jsonID("docAttr", Wr);
let nr = class extends Error {
};
nr = function t(e) {
  let n = Error.call(this, e);
  return n.__proto__ = t.prototype, n;
};
nr.prototype = Object.create(Error.prototype);
nr.prototype.constructor = nr;
nr.prototype.name = "TransformError";
class Va {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new qn();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let n = this.maybeStep(e);
    if (n.failed)
      throw new nr(n.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let n = e.apply(this.doc);
    return n.failed || this.addStep(e, n.doc), n;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = n;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, n = e, r = O.empty) {
    let o = ls(this.doc, e, n, r);
    return o && this.step(o), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, n, r) {
    return this.replace(e, n, new O(S.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, n) {
    return this.replace(e, n, O.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, n) {
    return this.replaceWith(e, e, n);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, n, r) {
    return gk(this, e, n, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, n, r) {
    return yk(this, e, n, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, n) {
    return bk(this, e, n), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, n) {
    return nk(this, e, n), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, n = 1) {
    return uk(this, e, n), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, n) {
    return ik(this, e, n), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, n = e, r, o = null) {
    return sk(this, e, n, r, o), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, n, r = null, o) {
    return ak(this, e, n, r, o), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, n, r) {
    return this.step(new Gn(e, n, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, n) {
    return this.step(new Wr(e, n)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, n) {
    return this.step(new Qt(e, n)), this;
  }
  /**
  Remove a mark (or a mark of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, n) {
    if (!(n instanceof Z)) {
      let r = this.doc.nodeAt(e);
      if (!r)
        throw new RangeError("No node at position " + e);
      if (n = n.isInSet(r.marks), !n)
        return this;
    }
    return this.step(new tr(e, n)), this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split.
  */
  split(e, n = 1, r) {
    return ck(this, e, n, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, n, r) {
    return Qw(this, e, n, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, n, r) {
    return ek(this, e, n, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, n, r) {
    return Oa(this, e, n, r), this;
  }
}
const $s = /* @__PURE__ */ Object.create(null);
class B {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, n, r) {
    this.$anchor = e, this.$head = n, this.ranges = r || [new Ap(e.min(n), e.max(n))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let n = 0; n < e.length; n++)
      if (e[n].$from.pos != e[n].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, n = O.empty) {
    let r = n.content.lastChild, o = null;
    for (let l = 0; l < n.openEnd; l++)
      o = r, r = r.lastChild;
    let i = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], d = e.mapping.slice(i);
      e.replaceRange(d.map(a.pos), d.map(c.pos), l ? O.empty : n), l == 0 && vd(e, i, (r ? r.isInline : o && o.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, n) {
    let r = e.steps.length, o = this.ranges;
    for (let i = 0; i < o.length; i++) {
      let { $from: s, $to: l } = o[i], a = e.mapping.slice(r), c = a.map(s.pos), d = a.map(l.pos);
      i ? e.deleteRange(c, d) : (e.replaceRangeWith(c, d, n), vd(e, r, n.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, n, r = !1) {
    let o = e.parent.inlineContent ? new P(e) : Bn(e.node(0), e.parent, e.pos, e.index(), n, r);
    if (o)
      return o;
    for (let i = e.depth - 1; i >= 0; i--) {
      let s = n < 0 ? Bn(e.node(0), e.node(i), e.before(i + 1), e.index(i), n, r) : Bn(e.node(0), e.node(i), e.after(i + 1), e.index(i) + 1, n, r);
      if (s)
        return s;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, n = 1) {
    return this.findFrom(e, n) || this.findFrom(e, -n) || new qe(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return Bn(e, e, 0, 0, 1) || new qe(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return Bn(e, e, e.content.size, e.childCount, -1) || new qe(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, n) {
    if (!n || !n.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = $s[n.type];
    if (!r)
      throw new RangeError(`No selection type ${n.type} defined`);
    return r.fromJSON(e, n);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, n) {
    if (e in $s)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return $s[e] = n, n.prototype.jsonID = e, n;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return P.between(this.$anchor, this.$head).getBookmark();
  }
}
B.prototype.visible = !0;
class Ap {
  /**
  Create a range.
  */
  constructor(e, n) {
    this.$from = e, this.$to = n;
  }
}
let yd = !1;
function bd(t) {
  !yd && !t.parent.inlineContent && (yd = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + t.parent.type.name + ")"));
}
class P extends B {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, n = e) {
    bd(e), bd(n), super(e, n);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    if (!r.parent.inlineContent)
      return B.near(r);
    let o = e.resolve(n.map(this.anchor));
    return new P(o.parent.inlineContent ? o : r, r);
  }
  replace(e, n = O.empty) {
    if (super.replace(e, n), n == O.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof P && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new as(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number" || typeof n.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new P(e.resolve(n.anchor), e.resolve(n.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, n, r = n) {
    let o = e.resolve(n);
    return new this(o, r == n ? o : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, n, r) {
    let o = e.pos - n.pos;
    if ((!r || o) && (r = o >= 0 ? 1 : -1), !n.parent.inlineContent) {
      let i = B.findFrom(n, r, !0) || B.findFrom(n, -r, !0);
      if (i)
        n = i.$head;
      else
        return B.near(n, r);
    }
    return e.parent.inlineContent || (o == 0 ? e = n : (e = (B.findFrom(e, -r, !0) || B.findFrom(e, r, !0)).$anchor, e.pos < n.pos != o < 0 && (e = n))), new P(e, n);
  }
}
B.jsonID("text", P);
class as {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new as(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return P.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class I extends B {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let n = e.nodeAfter, r = e.node(0).resolve(e.pos + n.nodeSize);
    super(e, r), this.node = n;
  }
  map(e, n) {
    let { deleted: r, pos: o } = n.mapResult(this.anchor), i = e.resolve(o);
    return r ? B.near(i) : new I(i);
  }
  content() {
    return new O(S.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof I && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ha(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new I(e.resolve(n.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, n) {
    return new I(e.resolve(n));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
I.prototype.visible = !1;
B.jsonID("node", I);
class Ha {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: n, pos: r } = e.mapResult(this.anchor);
    return n ? new as(r, r) : new Ha(r);
  }
  resolve(e) {
    let n = e.resolve(this.anchor), r = n.nodeAfter;
    return r && I.isSelectable(r) ? new I(n) : B.near(n);
  }
}
class qe extends B {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, n = O.empty) {
    if (n == O.empty) {
      e.delete(0, e.doc.content.size);
      let r = B.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, n);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new qe(e);
  }
  map(e) {
    return new qe(e);
  }
  eq(e) {
    return e instanceof qe;
  }
  getBookmark() {
    return vk;
  }
}
B.jsonID("all", qe);
const vk = {
  map() {
    return this;
  },
  resolve(t) {
    return new qe(t);
  }
};
function Bn(t, e, n, r, o, i = !1) {
  if (e.inlineContent)
    return P.create(t, n);
  for (let s = r - (o > 0 ? 0 : 1); o > 0 ? s < e.childCount : s >= 0; s += o) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!i && I.isSelectable(l))
        return I.create(t, n - (o < 0 ? l.nodeSize : 0));
    } else {
      let a = Bn(t, l, n + o, o < 0 ? l.childCount : 0, o, i);
      if (a)
        return a;
    }
    n += l.nodeSize * o;
  }
  return null;
}
function vd(t, e, n) {
  let r = t.steps.length - 1;
  if (r < e)
    return;
  let o = t.steps[r];
  if (!(o instanceof ve || o instanceof ke))
    return;
  let i = t.mapping.maps[r], s;
  i.forEach((l, a, c, d) => {
    s == null && (s = d);
  }), t.setSelection(B.near(t.doc.resolve(s), n));
}
const wd = 1, Co = 2, kd = 4;
class wk extends Va {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | wd) & ~Co, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & wd) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Co, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return Z.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Co) > 0;
  }
  /**
  @internal
  */
  addStep(e, n) {
    super.addStep(e, n), this.updated = this.updated & ~Co, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, n = !0) {
    let r = this.selection;
    return n && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || Z.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, n, r) {
    let o = this.doc.type.schema;
    if (n == null)
      return e ? this.replaceSelectionWith(o.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = n), r = r ?? n, !e)
        return this.deleteRange(n, r);
      let i = this.storedMarks;
      if (!i) {
        let s = this.doc.resolve(n);
        i = r == n ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(n, r, o.text(e, i)), this.selection.empty || this.setSelection(B.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, n) {
    return this.meta[typeof e == "string" ? e : e.key] = n, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= kd, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & kd) > 0;
  }
}
function Sd(t, e) {
  return !e || !t ? t : t.bind(e);
}
class kr {
  constructor(e, n, r) {
    this.name = e, this.init = Sd(n.init, r), this.apply = Sd(n.apply, r);
  }
}
const kk = [
  new kr("doc", {
    init(t) {
      return t.doc || t.schema.topNodeType.createAndFill();
    },
    apply(t) {
      return t.doc;
    }
  }),
  new kr("selection", {
    init(t, e) {
      return t.selection || B.atStart(e.doc);
    },
    apply(t) {
      return t.selection;
    }
  }),
  new kr("storedMarks", {
    init(t) {
      return t.storedMarks || null;
    },
    apply(t, e, n, r) {
      return r.selection.$cursor ? t.storedMarks : null;
    }
  }),
  new kr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(t, e) {
      return t.scrolledIntoView ? e + 1 : e;
    }
  })
];
class zs {
  constructor(e, n) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = kk.slice(), n && n.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new kr(r.key, r.spec.state, r));
    });
  }
}
class jn {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, n = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != n) {
        let o = this.config.plugins[r];
        if (o.spec.filterTransaction && !o.spec.filterTransaction.call(o, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let n = [e], r = this.applyInner(e), o = null;
    for (; ; ) {
      let i = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = o ? o[s].n : 0, c = o ? o[s].state : this, d = a < n.length && l.spec.appendTransaction.call(l, a ? n.slice(a) : n, c, r);
          if (d && r.filterTransaction(d, s)) {
            if (d.setMeta("appendedTransaction", e), !o) {
              o = [];
              for (let u = 0; u < this.config.plugins.length; u++)
                o.push(u < s ? { state: r, n: n.length } : { state: this, n: 0 });
            }
            n.push(d), r = r.applyInner(d), i = !0;
          }
          o && (o[s] = { state: r, n: n.length });
        }
      }
      if (!i)
        return { state: r, transactions: n };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let n = new jn(this.config), r = this.config.fields;
    for (let o = 0; o < r.length; o++) {
      let i = r[o];
      n[i.name] = i.apply(e, this[i.name], this, n);
    }
    return n;
  }
  /**
  Start a [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new wk(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let n = new zs(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new jn(n);
    for (let o = 0; o < n.fields.length; o++)
      r[n.fields[o].name] = n.fields[o].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let n = new zs(this.schema, e.plugins), r = n.fields, o = new jn(n);
    for (let i = 0; i < r.length; i++) {
      let s = r[i].name;
      o[s] = this.hasOwnProperty(s) ? this[s] : r[i].init(e, o);
    }
    return o;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let n = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (n.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let o = e[r], i = o.spec.state;
        i && i.toJSON && (n[r] = i.toJSON.call(o, this[o.key]));
      }
    return n;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, n, r) {
    if (!n)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let o = new zs(e.schema, e.plugins), i = new jn(o);
    return o.fields.forEach((s) => {
      if (s.name == "doc")
        i.doc = Lt.fromJSON(e.schema, n.doc);
      else if (s.name == "selection")
        i.selection = B.fromJSON(i.doc, n.selection);
      else if (s.name == "storedMarks")
        n.storedMarks && (i.storedMarks = n.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(n, l)) {
              i[s.name] = c.fromJSON.call(a, e, n[l], i);
              return;
            }
          }
        i[s.name] = s.init(e, i);
      }
    }), i;
  }
}
function Mp(t, e, n) {
  for (let r in t) {
    let o = t[r];
    o instanceof Function ? o = o.bind(e) : r == "handleDOMEvents" && (o = Mp(o, e, {})), n[r] = o;
  }
  return n;
}
class ee {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Mp(e.props, this, this.props), this.key = e.key ? e.key.key : Ep("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Fs = /* @__PURE__ */ Object.create(null);
function Ep(t) {
  return t in Fs ? t + "$" + ++Fs[t] : (Fs[t] = 0, t + "$");
}
class ue {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Ep(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Ce = function(t) {
  for (var e = 0; ; e++)
    if (t = t.previousSibling, !t)
      return e;
}, Ur = function(t) {
  let e = t.assignedSlot || t.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Al = null;
const Et = function(t, e, n) {
  let r = Al || (Al = document.createRange());
  return r.setEnd(t, n ?? t.nodeValue.length), r.setStart(t, e || 0), r;
}, Sk = function() {
  Al = null;
}, An = function(t, e, n, r) {
  return n && (xd(t, e, n, r, -1) || xd(t, e, n, r, 1));
}, xk = /^(img|br|input|textarea|hr)$/i;
function xd(t, e, n, r, o) {
  for (; ; ) {
    if (t == n && e == r)
      return !0;
    if (e == (o < 0 ? 0 : Ke(t))) {
      let i = t.parentNode;
      if (!i || i.nodeType != 1 || uo(t) || xk.test(t.nodeName) || t.contentEditable == "false")
        return !1;
      e = Ce(t) + (o < 0 ? 0 : 1), t = i;
    } else if (t.nodeType == 1) {
      if (t = t.childNodes[e + (o < 0 ? -1 : 0)], t.contentEditable == "false")
        return !1;
      e = o < 0 ? Ke(t) : 0;
    } else
      return !1;
  }
}
function Ke(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Ck(t, e) {
  for (; ; ) {
    if (t.nodeType == 3 && e)
      return t;
    if (t.nodeType == 1 && e > 0) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e - 1], e = Ke(t);
    } else if (t.parentNode && !uo(t))
      e = Ce(t), t = t.parentNode;
    else
      return null;
  }
}
function Tk(t, e) {
  for (; ; ) {
    if (t.nodeType == 3 && e < t.nodeValue.length)
      return t;
    if (t.nodeType == 1 && e < t.childNodes.length) {
      if (t.contentEditable == "false")
        return null;
      t = t.childNodes[e], e = 0;
    } else if (t.parentNode && !uo(t))
      e = Ce(t) + 1, t = t.parentNode;
    else
      return null;
  }
}
function Ak(t, e, n) {
  for (let r = e == 0, o = e == Ke(t); r || o; ) {
    if (t == n)
      return !0;
    let i = Ce(t);
    if (t = t.parentNode, !t)
      return !1;
    r = r && i == 0, o = o && i == Ke(t);
  }
}
function uo(t) {
  let e;
  for (let n = t; n && !(e = n.pmViewDesc); n = n.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == t || e.contentDOM == t);
}
const cs = function(t) {
  return t.focusNode && An(t.focusNode, t.focusOffset, t.anchorNode, t.anchorOffset);
};
function mn(t, e) {
  let n = document.createEvent("Event");
  return n.initEvent("keydown", !0, !0), n.keyCode = t, n.key = n.code = e, n;
}
function Mk(t) {
  let e = t.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function Ek(t, e, n) {
  if (t.caretPositionFromPoint)
    try {
      let r = t.caretPositionFromPoint(e, n);
      if (r)
        return { node: r.offsetNode, offset: Math.min(Ke(r.offsetNode), r.offset) };
    } catch {
    }
  if (t.caretRangeFromPoint) {
    let r = t.caretRangeFromPoint(e, n);
    if (r)
      return { node: r.startContainer, offset: Math.min(Ke(r.startContainer), r.startOffset) };
  }
}
const bt = typeof navigator < "u" ? navigator : null, Cd = typeof document < "u" ? document : null, pn = bt && bt.userAgent || "", Ml = /Edge\/(\d+)/.exec(pn), Op = /MSIE \d/.exec(pn), El = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(pn), De = !!(Op || El || Ml), rn = Op ? document.documentMode : El ? +El[1] : Ml ? +Ml[1] : 0, ot = !De && /gecko\/(\d+)/i.test(pn);
ot && +(/Firefox\/(\d+)/.exec(pn) || [0, 0])[1];
const Ol = !De && /Chrome\/(\d+)/.exec(pn), Ee = !!Ol, Lp = Ol ? +Ol[1] : 0, Re = !De && !!bt && /Apple Computer/.test(bt.vendor), rr = Re && (/Mobile\/\w+/.test(pn) || !!bt && bt.maxTouchPoints > 2), Ue = rr || (bt ? /Mac/.test(bt.platform) : !1), Ok = bt ? /Win/.test(bt.platform) : !1, Ye = /Android \d/.test(pn), fo = !!Cd && "webkitFontSmoothing" in Cd.documentElement.style, Lk = fo ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Vk(t) {
  let e = t.defaultView && t.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: t.documentElement.clientWidth,
    top: 0,
    bottom: t.documentElement.clientHeight
  };
}
function xt(t, e) {
  return typeof t == "number" ? t : t[e];
}
function Hk(t) {
  let e = t.getBoundingClientRect(), n = e.width / t.offsetWidth || 1, r = e.height / t.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + t.clientWidth * n,
    top: e.top,
    bottom: e.top + t.clientHeight * r
  };
}
function Td(t, e, n) {
  let r = t.someProp("scrollThreshold") || 0, o = t.someProp("scrollMargin") || 5, i = t.dom.ownerDocument;
  for (let s = n || t.dom; s; s = Ur(s)) {
    if (s.nodeType != 1)
      continue;
    let l = s, a = l == i.body, c = a ? Vk(i) : Hk(l), d = 0, u = 0;
    if (e.top < c.top + xt(r, "top") ? u = -(c.top - e.top + xt(o, "top")) : e.bottom > c.bottom - xt(r, "bottom") && (u = e.bottom - e.top > c.bottom - c.top ? e.top + xt(o, "top") - c.top : e.bottom - c.bottom + xt(o, "bottom")), e.left < c.left + xt(r, "left") ? d = -(c.left - e.left + xt(o, "left")) : e.right > c.right - xt(r, "right") && (d = e.right - c.right + xt(o, "right")), d || u)
      if (a)
        i.defaultView.scrollBy(d, u);
      else {
        let f = l.scrollLeft, p = l.scrollTop;
        u && (l.scrollTop += u), d && (l.scrollLeft += d);
        let h = l.scrollLeft - f, m = l.scrollTop - p;
        e = { left: e.left - h, top: e.top - m, right: e.right - h, bottom: e.bottom - m };
      }
    if (a || /^(fixed|sticky)$/.test(getComputedStyle(s).position))
      break;
  }
}
function Rk(t) {
  let e = t.dom.getBoundingClientRect(), n = Math.max(0, e.top), r, o;
  for (let i = (e.left + e.right) / 2, s = n + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = t.root.elementFromPoint(i, s);
    if (!l || l == t.dom || !t.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= n - 20) {
      r = l, o = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: o, stack: Vp(t.dom) };
}
function Vp(t) {
  let e = [], n = t.ownerDocument;
  for (let r = t; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), t != n); r = Ur(r))
    ;
  return e;
}
function Nk({ refDOM: t, refTop: e, stack: n }) {
  let r = t ? t.getBoundingClientRect().top : 0;
  Hp(n, r == 0 ? 0 : r - e);
}
function Hp(t, e) {
  for (let n = 0; n < t.length; n++) {
    let { dom: r, top: o, left: i } = t[n];
    r.scrollTop != o + e && (r.scrollTop = o + e), r.scrollLeft != i && (r.scrollLeft = i);
  }
}
let Dn = null;
function _k(t) {
  if (t.setActive)
    return t.setActive();
  if (Dn)
    return t.focus(Dn);
  let e = Vp(t);
  t.focus(Dn == null ? {
    get preventScroll() {
      return Dn = { preventScroll: !0 }, !0;
    }
  } : void 0), Dn || (Dn = !1, Hp(e, 0));
}
function Rp(t, e) {
  let n, r = 2e8, o, i = 0, s = e.top, l = e.top, a, c;
  for (let d = t.firstChild, u = 0; d; d = d.nextSibling, u++) {
    let f;
    if (d.nodeType == 1)
      f = d.getClientRects();
    else if (d.nodeType == 3)
      f = Et(d).getClientRects();
    else
      continue;
    for (let p = 0; p < f.length; p++) {
      let h = f[p];
      if (h.top <= s && h.bottom >= l) {
        s = Math.max(h.bottom, s), l = Math.min(h.top, l);
        let m = h.left > e.left ? h.left - e.left : h.right < e.left ? e.left - h.right : 0;
        if (m < r) {
          n = d, r = m, o = m && n.nodeType == 3 ? {
            left: h.right < e.left ? h.right : h.left,
            top: e.top
          } : e, d.nodeType == 1 && m && (i = u + (e.left >= (h.left + h.right) / 2 ? 1 : 0));
          continue;
        }
      } else h.top > e.top && !a && h.left <= e.left && h.right >= e.left && (a = d, c = { left: Math.max(h.left, Math.min(h.right, e.left)), top: h.top });
      !n && (e.left >= h.right && e.top >= h.top || e.left >= h.left && e.top >= h.bottom) && (i = u + 1);
    }
  }
  return !n && a && (n = a, o = c, r = 0), n && n.nodeType == 3 ? Ik(n, o) : !n || r && n.nodeType == 1 ? { node: t, offset: i } : Rp(n, o);
}
function Ik(t, e) {
  let n = t.nodeValue.length, r = document.createRange();
  for (let o = 0; o < n; o++) {
    r.setEnd(t, o + 1), r.setStart(t, o);
    let i = Wt(r, 1);
    if (i.top != i.bottom && Ra(e, i))
      return { node: t, offset: o + (e.left >= (i.left + i.right) / 2 ? 1 : 0) };
  }
  return { node: t, offset: 0 };
}
function Ra(t, e) {
  return t.left >= e.left - 1 && t.left <= e.right + 1 && t.top >= e.top - 1 && t.top <= e.bottom + 1;
}
function Dk(t, e) {
  let n = t.parentNode;
  return n && /^li$/i.test(n.nodeName) && e.left < t.getBoundingClientRect().left ? n : t;
}
function Pk(t, e, n) {
  let { node: r, offset: o } = Rp(e, n), i = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    i = s.left != s.right && n.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return t.docView.posFromDOM(r, o, i);
}
function Bk(t, e, n, r) {
  let o = -1;
  for (let i = e, s = !1; i != t.dom; ) {
    let l = t.docView.nearestDesc(i, !0);
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM)) {
      let a = l.dom.getBoundingClientRect();
      if (l.node.isBlock && l.parent && (!s && a.left > r.left || a.top > r.top ? o = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (o = l.posAfter), s = !0), !l.contentDOM && o < 0 && !l.node.isText)
        return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    }
    i = l.dom.parentNode;
  }
  return o > -1 ? o : t.docView.posFromDOM(e, n, -1);
}
function Np(t, e, n) {
  let r = t.childNodes.length;
  if (r && n.top < n.bottom)
    for (let o = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - n.top) / (n.bottom - n.top)) - 2)), i = o; ; ) {
      let s = t.childNodes[i];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (Ra(e, c))
            return Np(s, e, c);
        }
      }
      if ((i = (i + 1) % r) == o)
        break;
    }
  return t;
}
function $k(t, e) {
  let n = t.dom.ownerDocument, r, o = 0, i = Ek(n, e.left, e.top);
  i && ({ node: r, offset: o } = i);
  let s = (t.root.elementFromPoint ? t.root : n).elementFromPoint(e.left, e.top), l;
  if (!s || !t.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = t.dom.getBoundingClientRect();
    if (!Ra(e, c) || (s = Np(t.dom, e, c), !s))
      return null;
  }
  if (Re)
    for (let c = s; r && c; c = Ur(c))
      c.draggable && (r = void 0);
  if (s = Dk(s, e), r) {
    if (ot && r.nodeType == 1 && (o = Math.min(o, r.childNodes.length), o < r.childNodes.length)) {
      let d = r.childNodes[o], u;
      d.nodeName == "IMG" && (u = d.getBoundingClientRect()).right <= e.left && u.bottom > e.top && o++;
    }
    let c;
    fo && o && r.nodeType == 1 && (c = r.childNodes[o - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && o--, r == t.dom && o == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = t.state.doc.content.size : (o == 0 || r.nodeType != 1 || r.childNodes[o - 1].nodeName != "BR") && (l = Bk(t, r, o, e));
  }
  l == null && (l = Pk(t, s, e));
  let a = t.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Ad(t) {
  return t.top < t.bottom || t.left < t.right;
}
function Wt(t, e) {
  let n = t.getClientRects();
  if (n.length) {
    let r = n[e < 0 ? 0 : n.length - 1];
    if (Ad(r))
      return r;
  }
  return Array.prototype.find.call(n, Ad) || t.getBoundingClientRect();
}
const zk = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function _p(t, e, n) {
  let { node: r, offset: o, atom: i } = t.docView.domFromPos(e, n < 0 ? -1 : 1), s = fo || ot;
  if (r.nodeType == 3)
    if (s && (zk.test(r.nodeValue) || (n < 0 ? !o : o == r.nodeValue.length))) {
      let a = Wt(Et(r, o, o), n);
      if (ot && o && /\s/.test(r.nodeValue[o - 1]) && o < r.nodeValue.length) {
        let c = Wt(Et(r, o - 1, o - 1), -1);
        if (c.top == a.top) {
          let d = Wt(Et(r, o, o + 1), -1);
          if (d.top != a.top)
            return mr(d, d.left < c.left);
        }
      }
      return a;
    } else {
      let a = o, c = o, d = n < 0 ? 1 : -1;
      return n < 0 && !o ? (c++, d = -1) : n >= 0 && o == r.nodeValue.length ? (a--, d = 1) : n < 0 ? a-- : c++, mr(Wt(Et(r, a, c), d), d < 0);
    }
  if (!t.state.doc.resolve(e - (i || 0)).parent.inlineContent) {
    if (i == null && o && (n < 0 || o == Ke(r))) {
      let a = r.childNodes[o - 1];
      if (a.nodeType == 1)
        return js(a.getBoundingClientRect(), !1);
    }
    if (i == null && o < Ke(r)) {
      let a = r.childNodes[o];
      if (a.nodeType == 1)
        return js(a.getBoundingClientRect(), !0);
    }
    return js(r.getBoundingClientRect(), n >= 0);
  }
  if (i == null && o && (n < 0 || o == Ke(r))) {
    let a = r.childNodes[o - 1], c = a.nodeType == 3 ? Et(a, Ke(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return mr(Wt(c, 1), !1);
  }
  if (i == null && o < Ke(r)) {
    let a = r.childNodes[o];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? Et(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return mr(Wt(c, -1), !0);
  }
  return mr(Wt(r.nodeType == 3 ? Et(r) : r, -n), n >= 0);
}
function mr(t, e) {
  if (t.width == 0)
    return t;
  let n = e ? t.left : t.right;
  return { top: t.top, bottom: t.bottom, left: n, right: n };
}
function js(t, e) {
  if (t.height == 0)
    return t;
  let n = e ? t.top : t.bottom;
  return { top: n, bottom: n, left: t.left, right: t.right };
}
function Ip(t, e, n) {
  let r = t.state, o = t.root.activeElement;
  r != e && t.updateState(e), o != t.dom && t.focus();
  try {
    return n();
  } finally {
    r != e && t.updateState(r), o != t.dom && o && o.focus();
  }
}
function Fk(t, e, n) {
  let r = e.selection, o = n == "up" ? r.$from : r.$to;
  return Ip(t, e, () => {
    let { node: i } = t.docView.domFromPos(o.pos, n == "up" ? -1 : 1);
    for (; ; ) {
      let l = t.docView.nearestDesc(i, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        i = l.contentDOM || l.dom;
        break;
      }
      i = l.dom.parentNode;
    }
    let s = _p(t, o.pos, 1);
    for (let l = i.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = Et(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let d = a[c];
        if (d.bottom > d.top + 1 && (n == "up" ? s.top - d.top > (d.bottom - s.top) * 2 : d.bottom - s.bottom > (s.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const jk = /[\u0590-\u08ac]/;
function Wk(t, e, n) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let o = r.parentOffset, i = !o, s = o == r.parent.content.size, l = t.domSelection();
  return l ? !jk.test(r.parent.textContent) || !l.modify ? n == "left" || n == "backward" ? i : s : Ip(t, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: d, anchorOffset: u } = t.domSelectionRange(), f = l.caretBidiLevel;
    l.modify("move", n, "character");
    let p = r.depth ? t.docView.domAfterPos(r.before()) : t.dom, { focusNode: h, focusOffset: m } = t.domSelectionRange(), g = h && !p.contains(h.nodeType == 1 ? h : h.parentNode) || a == h && c == m;
    try {
      l.collapse(d, u), a && (a != d || c != u) && l.extend && l.extend(a, c);
    } catch {
    }
    return f != null && (l.caretBidiLevel = f), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let Md = null, Ed = null, Od = !1;
function Uk(t, e, n) {
  return Md == e && Ed == n ? Od : (Md = e, Ed = n, Od = n == "up" || n == "down" ? Fk(t, e, n) : Wk(t, e, n));
}
const Je = 0, Ld = 1, gn = 2, vt = 3;
class po {
  constructor(e, n, r, o) {
    this.parent = e, this.children = n, this.dom = r, this.contentDOM = o, this.dirty = Je, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, n, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let n = 0; n < this.children.length; n++)
      e += this.children[n].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let n = 0, r = this.posAtStart; ; n++) {
      let o = this.children[n];
      if (o == e)
        return r;
      r += o.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, n, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let i, s;
        if (e == this.contentDOM)
          i = e.childNodes[n - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          i = e.previousSibling;
        }
        for (; i && !((s = i.pmViewDesc) && s.parent == this); )
          i = i.previousSibling;
        return i ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let i, s;
        if (e == this.contentDOM)
          i = e.childNodes[n];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          i = e.nextSibling;
        }
        for (; i && !((s = i.pmViewDesc) && s.parent == this); )
          i = i.nextSibling;
        return i ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let o;
    if (e == this.dom && this.contentDOM)
      o = n > Ce(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      o = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (n == 0)
        for (let i = e; ; i = i.parentNode) {
          if (i == this.dom) {
            o = !1;
            break;
          }
          if (i.previousSibling)
            break;
        }
      if (o == null && n == e.childNodes.length)
        for (let i = e; ; i = i.parentNode) {
          if (i == this.dom) {
            o = !0;
            break;
          }
          if (i.nextSibling)
            break;
        }
    }
    return o ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, n = !1) {
    for (let r = !0, o = e; o; o = o.parentNode) {
      let i = this.getDesc(o), s;
      if (i && (!n || i.node))
        if (r && (s = i.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return i;
    }
  }
  getDesc(e) {
    let n = e.pmViewDesc;
    for (let r = n; r; r = r.parent)
      if (r == this)
        return n;
  }
  posFromDOM(e, n, r) {
    for (let o = e; o; o = o.parentNode) {
      let i = this.getDesc(o);
      if (i)
        return i.localPosFromDOM(e, n, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let n = 0, r = 0; n < this.children.length; n++) {
      let o = this.children[n], i = r + o.size;
      if (r == e && i != r) {
        for (; !o.border && o.children.length; )
          o = o.children[0];
        return o;
      }
      if (e < i)
        return o.descAt(e - r - o.border);
      r = i;
    }
  }
  domFromPos(e, n) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, o = 0;
    for (let i = 0; r < this.children.length; r++) {
      let s = this.children[r], l = i + s.size;
      if (l > e || s instanceof Pp) {
        o = e - i;
        break;
      }
      i = l;
    }
    if (o)
      return this.children[r].domFromPos(o - this.children[r].border, n);
    for (let i; r && !(i = this.children[r - 1]).size && i instanceof Dp && i.side >= 0; r--)
      ;
    if (n <= 0) {
      let i, s = !0;
      for (; i = r ? this.children[r - 1] : null, !(!i || i.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return i && n && s && !i.border && !i.domAtom ? i.domFromPos(i.size, n) : { node: this.contentDOM, offset: i ? Ce(i.dom) + 1 : 0 };
    } else {
      let i, s = !0;
      for (; i = r < this.children.length ? this.children[r] : null, !(!i || i.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return i && s && !i.border && !i.domAtom ? i.domFromPos(0, n) : { node: this.contentDOM, offset: i ? Ce(i.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, n, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: n, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let o = -1, i = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (o == -1 && e <= c) {
        let d = s + a.border;
        if (e >= d && n <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, n, d);
        e = s;
        for (let u = l; u > 0; u--) {
          let f = this.children[u - 1];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(1)) {
            o = Ce(f.dom) + 1;
            break;
          }
          e -= f.size;
        }
        o == -1 && (o = 0);
      }
      if (o > -1 && (c > n || l == this.children.length - 1)) {
        n = c;
        for (let d = l + 1; d < this.children.length; d++) {
          let u = this.children[d];
          if (u.size && u.dom.parentNode == this.contentDOM && !u.emptyChildAt(-1)) {
            i = Ce(u.dom);
            break;
          }
          n += u.size;
        }
        i == -1 && (i = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: n, fromOffset: o, toOffset: i };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let n = this.children[e < 0 ? 0 : this.children.length - 1];
    return n.size == 0 || n.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: n, offset: r } = this.domFromPos(e, 0);
    if (n.nodeType != 1 || r == n.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return n.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, n, r, o = !1) {
    let i = Math.min(e, n), s = Math.max(e, n);
    for (let p = 0, h = 0; p < this.children.length; p++) {
      let m = this.children[p], g = h + m.size;
      if (i > h && s < g)
        return m.setSelection(e - h - m.border, n - h - m.border, r, o);
      h = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = n == e ? l : this.domFromPos(n, n ? -1 : 1), c = r.root.getSelection(), d = r.domSelectionRange(), u = !1;
    if ((ot || Re) && e == n) {
      let { node: p, offset: h } = l;
      if (p.nodeType == 3) {
        if (u = !!(h && p.nodeValue[h - 1] == `
`), u && h == p.nodeValue.length)
          for (let m = p, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: Ce(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = p.childNodes[h - 1];
        u = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (ot && d.focusNode && d.focusNode != a.node && d.focusNode.nodeType == 1) {
      let p = d.focusNode.childNodes[d.focusOffset];
      p && p.contentEditable == "false" && (o = !0);
    }
    if (!(o || u && Re) && An(l.node, l.offset, d.anchorNode, d.anchorOffset) && An(a.node, a.offset, d.focusNode, d.focusOffset))
      return;
    let f = !1;
    if ((c.extend || e == n) && !u) {
      c.collapse(l.node, l.offset);
      try {
        e != n && c.extend(a.node, a.offset), f = !0;
      } catch {
      }
    }
    if (!f) {
      if (e > n) {
        let h = l;
        l = a, a = h;
      }
      let p = document.createRange();
      p.setEnd(a.node, a.offset), p.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(p);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, n) {
    for (let r = 0, o = 0; o < this.children.length; o++) {
      let i = this.children[o], s = r + i.size;
      if (r == s ? e <= s && n >= r : e < s && n > r) {
        let l = r + i.border, a = s - i.border;
        if (e >= l && n <= a) {
          this.dirty = e == r || n == s ? gn : Ld, e == l && n == a && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = vt : i.markDirty(e - l, n - l);
          return;
        } else
          i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? gn : vt;
      }
      r = s;
    }
    this.dirty = gn;
  }
  markParentsDirty() {
    let e = 1;
    for (let n = this.parent; n; n = n.parent, e++) {
      let r = e == 1 ? gn : Ld;
      n.dirty < r && (n.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class Dp extends po {
  constructor(e, n, r, o) {
    let i, s = n.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!i)
        return o;
      if (i.parent)
        return i.parent.posBeforeChild(i);
    })), !n.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = n, this.widget = n, i = this;
  }
  matchesWidget(e) {
    return this.dirty == Je && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let n = this.widget.spec.stopEvent;
    return n ? n(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Kk extends po {
  constructor(e, n, r, o) {
    super(e, [], n, null), this.textDOM = r, this.text = o;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, n) {
    return e != this.textDOM ? this.posAtStart + (n ? this.size : 0) : this.posAtStart + n;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Mn extends po {
  constructor(e, n, r, o, i) {
    super(e, [], r, o), this.mark = n, this.spec = i;
  }
  static create(e, n, r, o) {
    let i = o.nodeViews[n.type.name], s = i && i(n, o, r);
    return (!s || !s.dom) && (s = un.renderSpec(document, n.type.spec.toDOM(n, r), null, n.attrs)), new Mn(e, n, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & vt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != vt && this.mark.eq(e);
  }
  markDirty(e, n) {
    if (super.markDirty(e, n), this.dirty != Je) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = Je;
    }
  }
  slice(e, n, r) {
    let o = Mn.create(this.parent, this.mark, !0, r), i = this.children, s = this.size;
    n < s && (i = Vl(i, n, s, r)), e > 0 && (i = Vl(i, 0, e, r));
    for (let l = 0; l < i.length; l++)
      i[l].parent = o;
    return o.children = i, o;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class on extends po {
  constructor(e, n, r, o, i, s, l, a, c) {
    super(e, [], i, s), this.node = n, this.outerDeco = r, this.innerDeco = o, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, n, r, o, i, s) {
    let l = i.nodeViews[n.type.name], a, c = l && l(n, i, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, o), d = c && c.dom, u = c && c.contentDOM;
    if (n.isText) {
      if (!d)
        d = document.createTextNode(n.text);
      else if (d.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else d || ({ dom: d, contentDOM: u } = un.renderSpec(document, n.type.spec.toDOM(n), null, n.attrs));
    !u && !n.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), n.type.spec.draggable && (d.draggable = !0));
    let f = d;
    return d = zp(d, r, n), c ? a = new qk(e, n, r, o, d, u || null, f, c, i, s + 1) : n.isText ? new ds(e, n, r, o, d, f, i) : new on(e, n, r, o, d, u || null, f, i, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let n = this.children.length - 1; n >= 0; n--) {
        let r = this.children[n];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => S.empty);
    }
    return e;
  }
  matchesNode(e, n, r) {
    return this.dirty == Je && e.eq(this.node) && ai(n, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, n) {
    let r = this.node.inlineContent, o = n, i = e.composing ? this.localCompositionInfo(e, n) : null, s = i && i.pos > -1 ? i : null, l = i && i.pos < 0, a = new Gk(this, s && s.node, e);
    Yk(this.node, this.innerDeco, (c, d, u) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !u && a.syncToMarks(d == this.node.childCount ? Z.none : this.node.child(d).marks, r, e), a.placeWidget(c, e, o);
    }, (c, d, u, f) => {
      a.syncToMarks(c.marks, r, e);
      let p;
      a.findNodeMatch(c, d, u, f) || l && e.state.selection.from > o && e.state.selection.to < o + c.nodeSize && (p = a.findIndexWithChild(i.node)) > -1 && a.updateNodeAt(c, d, u, p, e) || a.updateNextNode(c, d, u, e, f, o) || a.addNode(c, d, u, e, o), o += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == gn) && (s && this.protectLocalComposition(e, s), Bp(this.contentDOM, this.children, e), rr && Qk(this.dom));
  }
  localCompositionInfo(e, n) {
    let { from: r, to: o } = e.state.selection;
    if (!(e.state.selection instanceof P) || r < n || o > n + this.node.content.size)
      return null;
    let i = e.input.compositionNode;
    if (!i || !this.dom.contains(i.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = i.nodeValue, l = eS(this.node.content, s, r - n, o - n);
      return l < 0 ? null : { node: i, pos: l, text: s };
    } else
      return { node: i, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: n, pos: r, text: o }) {
    if (this.getDesc(n))
      return;
    let i = n;
    for (; i.parentNode != this.contentDOM; i = i.parentNode) {
      for (; i.previousSibling; )
        i.parentNode.removeChild(i.previousSibling);
      for (; i.nextSibling; )
        i.parentNode.removeChild(i.nextSibling);
      i.pmViewDesc && (i.pmViewDesc = void 0);
    }
    let s = new Kk(this, i, n, o);
    e.input.compositionNodes.push(s), this.children = Vl(this.children, r, r + o.length, e, s);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, n, r, o) {
    return this.dirty == vt || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, n, r, o), !0);
  }
  updateInner(e, n, r, o) {
    this.updateOuterDeco(n), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(o, this.posAtStart), this.dirty = Je;
  }
  updateOuterDeco(e) {
    if (ai(e, this.outerDeco))
      return;
    let n = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = $p(this.dom, this.nodeDOM, Ll(this.outerDeco, this.node, n), Ll(e, this.node, n)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function Vd(t, e, n, r, o) {
  zp(r, e, t);
  let i = new on(void 0, t, e, n, r, r, r, o, 0);
  return i.contentDOM && i.updateChildren(o, 0), i;
}
class ds extends on {
  constructor(e, n, r, o, i, s, l) {
    super(e, n, r, o, i, null, s, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, n, r, o) {
    return this.dirty == vt || this.dirty != Je && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(n), (this.dirty != Je || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, o.trackWrites == this.nodeDOM && (o.trackWrites = null)), this.node = e, this.dirty = Je, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let n = this.nodeDOM; n; n = n.parentNode)
      if (n == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, n, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(n, this.node.text.length) : super.localPosFromDOM(e, n, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, n, r) {
    let o = this.node.cut(e, n), i = document.createTextNode(o.text);
    return new ds(this.parent, o, this.outerDeco, this.innerDeco, i, i, r);
  }
  markDirty(e, n) {
    super.markDirty(e, n), this.dom != this.nodeDOM && (e == 0 || n == this.nodeDOM.nodeValue.length) && (this.dirty = vt);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Pp extends po {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == Je && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class qk extends on {
  constructor(e, n, r, o, i, s, l, a, c, d) {
    super(e, n, r, o, i, s, l, c, d), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, n, r, o) {
    if (this.dirty == vt)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let i = this.spec.update(e, n, r);
      return i && this.updateInner(e, n, r, o), i;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, n, r, o);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, n, r, o) {
    this.spec.setSelection ? this.spec.setSelection(e, n, r.root) : super.setSelection(e, n, r, o);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Bp(t, e, n) {
  let r = t.firstChild, o = !1;
  for (let i = 0; i < e.length; i++) {
    let s = e[i], l = s.dom;
    if (l.parentNode == t) {
      for (; l != r; )
        r = Hd(r), o = !0;
      r = r.nextSibling;
    } else
      o = !0, t.insertBefore(l, r);
    if (s instanceof Mn) {
      let a = r ? r.previousSibling : t.lastChild;
      Bp(s.contentDOM, s.children, n), r = a ? a.nextSibling : t.firstChild;
    }
  }
  for (; r; )
    r = Hd(r), o = !0;
  o && n.trackWrites == t && (n.trackWrites = null);
}
const Lr = function(t) {
  t && (this.nodeName = t);
};
Lr.prototype = /* @__PURE__ */ Object.create(null);
const yn = [new Lr()];
function Ll(t, e, n) {
  if (t.length == 0)
    return yn;
  let r = n ? yn[0] : new Lr(), o = [r];
  for (let i = 0; i < t.length; i++) {
    let s = t[i].type.attrs;
    if (s) {
      s.nodeName && o.push(r = new Lr(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (n && o.length == 1 && o.push(r = new Lr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return o;
}
function $p(t, e, n, r) {
  if (n == yn && r == yn)
    return e;
  let o = e;
  for (let i = 0; i < r.length; i++) {
    let s = r[i], l = n[i];
    if (i) {
      let a;
      l && l.nodeName == s.nodeName && o != t && (a = o.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(o), l = yn[0]), o = a;
    }
    Jk(o, l || yn[0], s);
  }
  return o;
}
function Jk(t, e, n) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in n) && t.removeAttribute(r);
  for (let r in n)
    r != "class" && r != "style" && r != "nodeName" && n[r] != e[r] && t.setAttribute(r, n[r]);
  if (e.class != n.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], o = n.class ? n.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < r.length; i++)
      o.indexOf(r[i]) == -1 && t.classList.remove(r[i]);
    for (let i = 0; i < o.length; i++)
      r.indexOf(o[i]) == -1 && t.classList.add(o[i]);
    t.classList.length == 0 && t.removeAttribute("class");
  }
  if (e.style != n.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, o;
      for (; o = r.exec(e.style); )
        t.style.removeProperty(o[1]);
    }
    n.style && (t.style.cssText += n.style);
  }
}
function zp(t, e, n) {
  return $p(t, t, yn, Ll(e, n, t.nodeType != 1));
}
function ai(t, e) {
  if (t.length != e.length)
    return !1;
  for (let n = 0; n < t.length; n++)
    if (!t[n].type.eq(e[n].type))
      return !1;
  return !0;
}
function Hd(t) {
  let e = t.nextSibling;
  return t.parentNode.removeChild(t), e;
}
class Gk {
  constructor(e, n, r) {
    this.lock = n, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Zk(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, n) {
    if (e != n) {
      for (let r = e; r < n; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, n - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, n, r) {
    let o = 0, i = this.stack.length >> 1, s = Math.min(i, e.length);
    for (; o < s && (o == i - 1 ? this.top : this.stack[o + 1 << 1]).matchesMark(e[o]) && e[o].type.spec.spanning !== !1; )
      o++;
    for (; o < i; )
      this.destroyRest(), this.top.dirty = Je, this.index = this.stack.pop(), this.top = this.stack.pop(), i--;
    for (; i < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[i]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = Mn.create(this.top, e[i], n, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, i++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, n, r, o) {
    let i = -1, s;
    if (o >= this.preMatch.index && (s = this.preMatch.matches[o - this.preMatch.index]).parent == this.top && s.matchesNode(e, n, r))
      i = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, n, r) && !this.preMatch.matched.has(c)) {
          i = l;
          break;
        }
      }
    return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
  }
  updateNodeAt(e, n, r, o, i) {
    let s = this.top.children[o];
    return s.dirty == vt && s.dom == s.contentDOM && (s.dirty = gn), s.update(e, n, r, i) ? (this.destroyBetween(this.index, o), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let n = e.parentNode;
      if (!n)
        return -1;
      if (n == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let o = this.index; o < this.top.children.length; o++)
            if (this.top.children[o] == r)
              return o;
        }
        return -1;
      }
      e = n;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, n, r, o, i, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof on) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != i)
          return !1;
        let d = a.dom, u, f = this.isLocked(d) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != vt && ai(n, a.outerDeco));
        if (!f && a.update(e, n, r, o))
          return this.destroyBetween(this.index, l), a.dom != d && (this.changed = !0), this.index++, !0;
        if (!f && (u = this.recreateWrapper(a, e, n, r, o, s)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = u, u.contentDOM && (u.dirty = gn, u.updateChildren(o, s + 1), u.dirty = Je), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, n, r, o, i, s) {
    if (e.dirty || n.isAtom || !e.children.length || !e.node.content.eq(n.content) || !ai(r, e.outerDeco) || !o.eq(e.innerDeco))
      return null;
    let l = on.create(this.top, n, r, o, i, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, n, r, o, i) {
    let s = on.create(this.top, e, n, r, o, i);
    s.contentDOM && s.updateChildren(o, i + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, n, r) {
    let o = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (o && o.matchesWidget(e) && (e == o.widget || !o.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let i = new Dp(this.top, e, n, r);
      this.top.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], n = this.top;
    for (; e instanceof Mn; )
      n = e, e = n.children[n.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof ds) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Re || Ee) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", n), this.addHackNode("BR", this.top));
  }
  addHackNode(e, n) {
    if (n == this.top && this.index < n.children.length && n.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let o = new Pp(this.top, [], r, null);
      n != this.top ? n.children.push(o) : n.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Zk(t, e) {
  let n = e, r = n.children.length, o = t.childCount, i = /* @__PURE__ */ new Map(), s = [];
  e: for (; o > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = n.children[r - 1];
        if (c instanceof Mn)
          n = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (n == e)
          break e;
        r = n.parent.children.indexOf(n), n = n.parent;
      }
    let a = l.node;
    if (a) {
      if (a != t.child(o - 1))
        break;
      --o, i.set(l, o), s.push(l);
    }
  }
  return { index: o, matched: i, matches: s.reverse() };
}
function Xk(t, e) {
  return t.type.side - e.type.side;
}
function Yk(t, e, n, r) {
  let o = e.locals(t), i = 0;
  if (o.length == 0) {
    for (let c = 0; c < t.childCount; c++) {
      let d = t.child(c);
      r(d, o, e.forChild(i, d), c), i += d.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let d, u;
    for (; s < o.length && o[s].to == i; ) {
      let g = o[s++];
      g.widget && (d ? (u || (u = [d])).push(g) : d = g);
    }
    if (d)
      if (u) {
        u.sort(Xk);
        for (let g = 0; g < u.length; g++)
          n(u[g], c, !!a);
      } else
        n(d, c, !!a);
    let f, p;
    if (a)
      p = -1, f = a, a = null;
    else if (c < t.childCount)
      p = c, f = t.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= i && l.splice(g--, 1);
    for (; s < o.length && o[s].from <= i && o[s].to > i; )
      l.push(o[s++]);
    let h = i + f.nodeSize;
    if (f.isText) {
      let g = h;
      s < o.length && o[s].from < g && (g = o[s].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < h && (a = f.cut(g - i), f = f.cut(0, g - i), h = g, p = -1);
    } else
      for (; s < o.length && o[s].to < h; )
        s++;
    let m = f.isInline && !f.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(f, m, e.forChild(i, f), p), i = h;
  }
}
function Qk(t) {
  if (t.nodeName == "UL" || t.nodeName == "OL") {
    let e = t.style.cssText;
    t.style.cssText = e + "; list-style: square !important", window.getComputedStyle(t).listStyle, t.style.cssText = e;
  }
}
function eS(t, e, n, r) {
  for (let o = 0, i = 0; o < t.childCount && i <= r; ) {
    let s = t.child(o++), l = i;
    if (i += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; o < t.childCount; ) {
      let c = t.child(o++);
      if (i += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (i >= n) {
      if (i >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= n)
        return l + c;
      if (n == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Vl(t, e, n, r, o) {
  let i = [];
  for (let s = 0, l = 0; s < t.length; s++) {
    let a = t[s], c = l, d = l += a.size;
    c >= n || d <= e ? i.push(a) : (c < e && i.push(a.slice(0, e - c, r)), o && (i.push(o), o = void 0), d > n && i.push(a.slice(n - c, a.size, r)));
  }
  return i;
}
function Na(t, e = null) {
  let n = t.domSelectionRange(), r = t.state.doc;
  if (!n.focusNode)
    return null;
  let o = t.docView.nearestDesc(n.focusNode), i = o && o.size == 0, s = t.docView.posFromDOM(n.focusNode, n.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (cs(n)) {
    for (a = s; o && !o.node; )
      o = o.parent;
    let u = o.node;
    if (o && u.isAtom && I.isSelectable(u) && o.parent && !(u.isInline && Ak(n.focusNode, n.focusOffset, o.dom))) {
      let f = o.posBefore;
      c = new I(s == f ? l : r.resolve(f));
    }
  } else {
    if (n instanceof t.dom.ownerDocument.defaultView.Selection && n.rangeCount > 1) {
      let u = s, f = s;
      for (let p = 0; p < n.rangeCount; p++) {
        let h = n.getRangeAt(p);
        u = Math.min(u, t.docView.posFromDOM(h.startContainer, h.startOffset, 1)), f = Math.max(f, t.docView.posFromDOM(h.endContainer, h.endOffset, -1));
      }
      if (u < 0)
        return null;
      [a, s] = f == t.state.selection.anchor ? [f, u] : [u, f], l = r.resolve(s);
    } else
      a = t.docView.posFromDOM(n.anchorNode, n.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let d = r.resolve(a);
  if (!c) {
    let u = e == "pointer" || t.state.selection.head < l.pos && !i ? 1 : -1;
    c = _a(t, d, l, u);
  }
  return c;
}
function Fp(t) {
  return t.editable ? t.hasFocus() : Wp(t) && document.activeElement && document.activeElement.contains(t.dom);
}
function Vt(t, e = !1) {
  let n = t.state.selection;
  if (jp(t, n), !!Fp(t)) {
    if (!e && t.input.mouseDown && t.input.mouseDown.allowDefault && Ee) {
      let r = t.domSelectionRange(), o = t.domObserver.currentSelection;
      if (r.anchorNode && o.anchorNode && An(r.anchorNode, r.anchorOffset, o.anchorNode, o.anchorOffset)) {
        t.input.mouseDown.delayedSelectionSync = !0, t.domObserver.setCurSelection();
        return;
      }
    }
    if (t.domObserver.disconnectSelection(), t.cursorWrapper)
      nS(t);
    else {
      let { anchor: r, head: o } = n, i, s;
      Rd && !(n instanceof P) && (n.$from.parent.inlineContent || (i = Nd(t, n.from)), !n.empty && !n.$from.parent.inlineContent && (s = Nd(t, n.to))), t.docView.setSelection(r, o, t, e), Rd && (i && _d(i), s && _d(s)), n.visible ? t.dom.classList.remove("ProseMirror-hideselection") : (t.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && tS(t));
    }
    t.domObserver.setCurSelection(), t.domObserver.connectSelection();
  }
}
const Rd = Re || Ee && Lp < 63;
function Nd(t, e) {
  let { node: n, offset: r } = t.docView.domFromPos(e, 0), o = r < n.childNodes.length ? n.childNodes[r] : null, i = r ? n.childNodes[r - 1] : null;
  if (Re && o && o.contentEditable == "false")
    return Ws(o);
  if ((!o || o.contentEditable == "false") && (!i || i.contentEditable == "false")) {
    if (o)
      return Ws(o);
    if (i)
      return Ws(i);
  }
}
function Ws(t) {
  return t.contentEditable = "true", Re && t.draggable && (t.draggable = !1, t.wasDraggable = !0), t;
}
function _d(t) {
  t.contentEditable = "false", t.wasDraggable && (t.draggable = !0, t.wasDraggable = null);
}
function tS(t) {
  let e = t.dom.ownerDocument;
  e.removeEventListener("selectionchange", t.input.hideSelectionGuard);
  let n = t.domSelectionRange(), r = n.anchorNode, o = n.anchorOffset;
  e.addEventListener("selectionchange", t.input.hideSelectionGuard = () => {
    (n.anchorNode != r || n.anchorOffset != o) && (e.removeEventListener("selectionchange", t.input.hideSelectionGuard), setTimeout(() => {
      (!Fp(t) || t.state.selection.visible) && t.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function nS(t) {
  let e = t.domSelection(), n = document.createRange();
  if (!e)
    return;
  let r = t.cursorWrapper.dom, o = r.nodeName == "IMG";
  o ? n.setStart(r.parentNode, Ce(r) + 1) : n.setStart(r, 0), n.collapse(!0), e.removeAllRanges(), e.addRange(n), !o && !t.state.selection.visible && De && rn <= 11 && (r.disabled = !0, r.disabled = !1);
}
function jp(t, e) {
  if (e instanceof I) {
    let n = t.docView.descAt(e.from);
    n != t.lastSelectedViewDesc && (Id(t), n && n.selectNode(), t.lastSelectedViewDesc = n);
  } else
    Id(t);
}
function Id(t) {
  t.lastSelectedViewDesc && (t.lastSelectedViewDesc.parent && t.lastSelectedViewDesc.deselectNode(), t.lastSelectedViewDesc = void 0);
}
function _a(t, e, n, r) {
  return t.someProp("createSelectionBetween", (o) => o(t, e, n)) || P.between(e, n, r);
}
function Dd(t) {
  return t.editable && !t.hasFocus() ? !1 : Wp(t);
}
function Wp(t) {
  let e = t.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return t.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (t.editable || t.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function rS(t) {
  let e = t.docView.domFromPos(t.state.selection.anchor, 0), n = t.domSelectionRange();
  return An(e.node, e.offset, n.anchorNode, n.anchorOffset);
}
function Hl(t, e) {
  let { $anchor: n, $head: r } = t.selection, o = e > 0 ? n.max(r) : n.min(r), i = o.parent.inlineContent ? o.depth ? t.doc.resolve(e > 0 ? o.after() : o.before()) : null : o;
  return i && B.findFrom(i, e);
}
function Ut(t, e) {
  return t.dispatch(t.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Pd(t, e, n) {
  let r = t.state.selection;
  if (r instanceof P)
    if (n.indexOf("s") > -1) {
      let { $head: o } = r, i = o.textOffset ? null : e < 0 ? o.nodeBefore : o.nodeAfter;
      if (!i || i.isText || !i.isLeaf)
        return !1;
      let s = t.state.doc.resolve(o.pos + i.nodeSize * (e < 0 ? -1 : 1));
      return Ut(t, new P(r.$anchor, s));
    } else if (r.empty) {
      if (t.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let o = Hl(t.state, e);
        return o && o instanceof I ? Ut(t, o) : !1;
      } else if (!(Ue && n.indexOf("m") > -1)) {
        let o = r.$head, i = o.textOffset ? null : e < 0 ? o.nodeBefore : o.nodeAfter, s;
        if (!i || i.isText)
          return !1;
        let l = e < 0 ? o.pos - i.nodeSize : o.pos;
        return i.isAtom || (s = t.docView.descAt(l)) && !s.contentDOM ? I.isSelectable(i) ? Ut(t, new I(e < 0 ? t.state.doc.resolve(o.pos - i.nodeSize) : o)) : fo ? Ut(t, new P(t.state.doc.resolve(e < 0 ? l : l + i.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof I && r.node.isInline)
      return Ut(t, new P(e > 0 ? r.$to : r.$from));
    {
      let o = Hl(t.state, e);
      return o ? Ut(t, o) : !1;
    }
  }
}
function ci(t) {
  return t.nodeType == 3 ? t.nodeValue.length : t.childNodes.length;
}
function Vr(t, e) {
  let n = t.pmViewDesc;
  return n && n.size == 0 && (e < 0 || t.nextSibling || t.nodeName != "BR");
}
function Pn(t, e) {
  return e < 0 ? oS(t) : iS(t);
}
function oS(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let o, i, s = !1;
  for (ot && n.nodeType == 1 && r < ci(n) && Vr(n.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (n.nodeType != 1)
        break;
      {
        let l = n.childNodes[r - 1];
        if (Vr(l, -1))
          o = n, i = --r;
        else if (l.nodeType == 3)
          n = l, r = n.nodeValue.length;
        else
          break;
      }
    } else {
      if (Up(n))
        break;
      {
        let l = n.previousSibling;
        for (; l && Vr(l, -1); )
          o = n.parentNode, i = Ce(l), l = l.previousSibling;
        if (l)
          n = l, r = ci(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = 0;
        }
      }
    }
  s ? Rl(t, n, r) : o && Rl(t, o, i);
}
function iS(t) {
  let e = t.domSelectionRange(), n = e.focusNode, r = e.focusOffset;
  if (!n)
    return;
  let o = ci(n), i, s;
  for (; ; )
    if (r < o) {
      if (n.nodeType != 1)
        break;
      let l = n.childNodes[r];
      if (Vr(l, 1))
        i = n, s = ++r;
      else
        break;
    } else {
      if (Up(n))
        break;
      {
        let l = n.nextSibling;
        for (; l && Vr(l, 1); )
          i = l.parentNode, s = Ce(l) + 1, l = l.nextSibling;
        if (l)
          n = l, r = 0, o = ci(n);
        else {
          if (n = n.parentNode, n == t.dom)
            break;
          r = o = 0;
        }
      }
    }
  i && Rl(t, i, s);
}
function Up(t) {
  let e = t.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function sS(t, e) {
  for (; t && e == t.childNodes.length && !uo(t); )
    e = Ce(t) + 1, t = t.parentNode;
  for (; t && e < t.childNodes.length; ) {
    let n = t.childNodes[e];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = 0;
  }
}
function lS(t, e) {
  for (; t && !e && !uo(t); )
    e = Ce(t), t = t.parentNode;
  for (; t && e; ) {
    let n = t.childNodes[e - 1];
    if (n.nodeType == 3)
      return n;
    if (n.nodeType == 1 && n.contentEditable == "false")
      break;
    t = n, e = t.childNodes.length;
  }
}
function Rl(t, e, n) {
  if (e.nodeType != 3) {
    let i, s;
    (s = sS(e, n)) ? (e = s, n = 0) : (i = lS(e, n)) && (e = i, n = i.nodeValue.length);
  }
  let r = t.domSelection();
  if (!r)
    return;
  if (cs(r)) {
    let i = document.createRange();
    i.setEnd(e, n), i.setStart(e, n), r.removeAllRanges(), r.addRange(i);
  } else r.extend && r.extend(e, n);
  t.domObserver.setCurSelection();
  let { state: o } = t;
  setTimeout(() => {
    t.state == o && Vt(t);
  }, 50);
}
function Bd(t, e) {
  let n = t.state.doc.resolve(e);
  if (!(Ee || Ok) && n.parent.inlineContent) {
    let o = t.coordsAtPos(e);
    if (e > n.start()) {
      let i = t.coordsAtPos(e - 1), s = (i.top + i.bottom) / 2;
      if (s > o.top && s < o.bottom && Math.abs(i.left - o.left) > 1)
        return i.left < o.left ? "ltr" : "rtl";
    }
    if (e < n.end()) {
      let i = t.coordsAtPos(e + 1), s = (i.top + i.bottom) / 2;
      if (s > o.top && s < o.bottom && Math.abs(i.left - o.left) > 1)
        return i.left > o.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(t.dom).direction == "rtl" ? "rtl" : "ltr";
}
function $d(t, e, n) {
  let r = t.state.selection;
  if (r instanceof P && !r.empty || n.indexOf("s") > -1 || Ue && n.indexOf("m") > -1)
    return !1;
  let { $from: o, $to: i } = r;
  if (!o.parent.inlineContent || t.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = Hl(t.state, e);
    if (s && s instanceof I)
      return Ut(t, s);
  }
  if (!o.parent.inlineContent) {
    let s = e < 0 ? o : i, l = r instanceof qe ? B.near(s, e) : B.findFrom(s, e);
    return l ? Ut(t, l) : !1;
  }
  return !1;
}
function zd(t, e) {
  if (!(t.state.selection instanceof P))
    return !0;
  let { $head: n, $anchor: r, empty: o } = t.state.selection;
  if (!n.sameParent(r))
    return !0;
  if (!o)
    return !1;
  if (t.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let i = !n.textOffset && (e < 0 ? n.nodeBefore : n.nodeAfter);
  if (i && !i.isText) {
    let s = t.state.tr;
    return e < 0 ? s.delete(n.pos - i.nodeSize, n.pos) : s.delete(n.pos, n.pos + i.nodeSize), t.dispatch(s), !0;
  }
  return !1;
}
function Fd(t, e, n) {
  t.domObserver.stop(), e.contentEditable = n, t.domObserver.start();
}
function aS(t) {
  if (!Re || t.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: n } = t.domSelectionRange();
  if (e && e.nodeType == 1 && n == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Fd(t, r, "true"), setTimeout(() => Fd(t, r, "false"), 20);
  }
  return !1;
}
function cS(t) {
  let e = "";
  return t.ctrlKey && (e += "c"), t.metaKey && (e += "m"), t.altKey && (e += "a"), t.shiftKey && (e += "s"), e;
}
function dS(t, e) {
  let n = e.keyCode, r = cS(e);
  if (n == 8 || Ue && n == 72 && r == "c")
    return zd(t, -1) || Pn(t, -1);
  if (n == 46 && !e.shiftKey || Ue && n == 68 && r == "c")
    return zd(t, 1) || Pn(t, 1);
  if (n == 13 || n == 27)
    return !0;
  if (n == 37 || Ue && n == 66 && r == "c") {
    let o = n == 37 ? Bd(t, t.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Pd(t, o, r) || Pn(t, o);
  } else if (n == 39 || Ue && n == 70 && r == "c") {
    let o = n == 39 ? Bd(t, t.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Pd(t, o, r) || Pn(t, o);
  } else {
    if (n == 38 || Ue && n == 80 && r == "c")
      return $d(t, -1, r) || Pn(t, -1);
    if (n == 40 || Ue && n == 78 && r == "c")
      return aS(t) || $d(t, 1, r) || Pn(t, 1);
    if (r == (Ue ? "m" : "c") && (n == 66 || n == 73 || n == 89 || n == 90))
      return !0;
  }
  return !1;
}
function Kp(t, e) {
  t.someProp("transformCopied", (p) => {
    e = p(e, t);
  });
  let n = [], { content: r, openStart: o, openEnd: i } = e;
  for (; o > 1 && i > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    o--, i--;
    let p = r.firstChild;
    n.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), r = p.content;
  }
  let s = t.someProp("clipboardSerializer") || un.fromSchema(t.state.schema), l = Yp(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, d, u = 0;
  for (; c && c.nodeType == 1 && (d = Xp[c.nodeName.toLowerCase()]); ) {
    for (let p = d.length - 1; p >= 0; p--) {
      let h = l.createElement(d[p]);
      for (; a.firstChild; )
        h.appendChild(a.firstChild);
      a.appendChild(h), u++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${o} ${i}${u ? ` -${u}` : ""} ${JSON.stringify(n)}`);
  let f = t.someProp("clipboardTextSerializer", (p) => p(e, t)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: f, slice: e };
}
function qp(t, e, n, r, o) {
  let i = o.parent.type.spec.code, s, l;
  if (!n && !e)
    return null;
  let a = e && (r || i || !n);
  if (a) {
    if (t.someProp("transformPastedText", (f) => {
      e = f(e, i || r, t);
    }), i)
      return e ? new O(S.from(t.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : O.empty;
    let u = t.someProp("clipboardTextParser", (f) => f(e, o, r, t));
    if (u)
      l = u;
    else {
      let f = o.marks(), { schema: p } = t.state, h = un.fromSchema(p);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(h.serializeNode(p.text(m, f)));
      });
    }
  } else
    t.someProp("transformPastedHTML", (u) => {
      n = u(n, t);
    }), s = hS(n), fo && mS(s);
  let c = s && s.querySelector("[data-pm-slice]"), d = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let u = +d[3]; u > 0; u--) {
      let f = s.firstChild;
      for (; f && f.nodeType != 1; )
        f = f.nextSibling;
      if (!f)
        break;
      s = f;
    }
  if (l || (l = (t.someProp("clipboardParser") || t.someProp("domParser") || nn.fromSchema(t.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || d),
    context: o,
    ruleFromNode(f) {
      return f.nodeName == "BR" && !f.nextSibling && f.parentNode && !uS.test(f.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = gS(jd(l, +d[1], +d[2]), d[4]);
  else if (l = O.maxOpen(fS(l.content, o), !0), l.openStart || l.openEnd) {
    let u = 0, f = 0;
    for (let p = l.content.firstChild; u < l.openStart && !p.type.spec.isolating; u++, p = p.firstChild)
      ;
    for (let p = l.content.lastChild; f < l.openEnd && !p.type.spec.isolating; f++, p = p.lastChild)
      ;
    l = jd(l, u, f);
  }
  return t.someProp("transformPasted", (u) => {
    l = u(l, t);
  }), l;
}
const uS = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function fS(t, e) {
  if (t.childCount < 2)
    return t;
  for (let n = e.depth; n >= 0; n--) {
    let o = e.node(n).contentMatchAt(e.index(n)), i, s = [];
    if (t.forEach((l) => {
      if (!s)
        return;
      let a = o.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && i.length && Gp(a, i, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = Zp(s[s.length - 1], i.length));
        let d = Jp(l, a);
        s.push(d), o = o.matchType(d.type), i = a;
      }
    }), s)
      return S.from(s);
  }
  return t;
}
function Jp(t, e, n = 0) {
  for (let r = e.length - 1; r >= n; r--)
    t = e[r].create(null, S.from(t));
  return t;
}
function Gp(t, e, n, r, o) {
  if (o < t.length && o < e.length && t[o] == e[o]) {
    let i = Gp(t, e, n, r.lastChild, o + 1);
    if (i)
      return r.copy(r.content.replaceChild(r.childCount - 1, i));
    if (r.contentMatchAt(r.childCount).matchType(o == t.length - 1 ? n.type : t[o + 1]))
      return r.copy(r.content.append(S.from(Jp(n, t, o + 1))));
  }
}
function Zp(t, e) {
  if (e == 0)
    return t;
  let n = t.content.replaceChild(t.childCount - 1, Zp(t.lastChild, e - 1)), r = t.contentMatchAt(t.childCount).fillBefore(S.empty, !0);
  return t.copy(n.append(r));
}
function Nl(t, e, n, r, o, i) {
  let s = e < 0 ? t.firstChild : t.lastChild, l = s.content;
  return t.childCount > 1 && (i = 0), o < r - 1 && (l = Nl(l, e, n, r, o + 1, i)), o >= n && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, i <= o).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(S.empty, !0))), t.replaceChild(e < 0 ? 0 : t.childCount - 1, s.copy(l));
}
function jd(t, e, n) {
  return e < t.openStart && (t = new O(Nl(t.content, -1, e, t.openStart, 0, t.openEnd), e, t.openEnd)), n < t.openEnd && (t = new O(Nl(t.content, 1, n, t.openEnd, 0, 0), t.openStart, n)), t;
}
const Xp = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let Wd = null;
function Yp() {
  return Wd || (Wd = document.implementation.createHTMLDocument("title"));
}
let Us = null;
function pS(t) {
  let e = window.trustedTypes;
  return e ? (Us || (Us = e.createPolicy("ProseMirrorClipboard", { createHTML: (n) => n })), Us.createHTML(t)) : t;
}
function hS(t) {
  let e = /^(\s*<meta [^>]*>)*/.exec(t);
  e && (t = t.slice(e[0].length));
  let n = Yp().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(t), o;
  if ((o = r && Xp[r[1].toLowerCase()]) && (t = o.map((i) => "<" + i + ">").join("") + t + o.map((i) => "</" + i + ">").reverse().join("")), n.innerHTML = pS(t), o)
    for (let i = 0; i < o.length; i++)
      n = n.querySelector(o[i]) || n;
  return n;
}
function mS(t) {
  let e = t.querySelectorAll(Ee ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(t.ownerDocument.createTextNode(" "), r);
  }
}
function gS(t, e) {
  if (!t.size)
    return t;
  let n = t.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return t;
  }
  let { content: o, openStart: i, openEnd: s } = t;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = n.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    o = S.from(a.create(r[l + 1], o)), i++, s++;
  }
  return new O(o, i, s);
}
const Ne = {}, _e = {}, yS = { touchstart: !0, touchmove: !0 };
class bS {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "" }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastAndroidDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function vS(t) {
  for (let e in Ne) {
    let n = Ne[e];
    t.dom.addEventListener(e, t.input.eventHandlers[e] = (r) => {
      kS(t, r) && !Ia(t, r) && (t.editable || !(r.type in _e)) && n(t, r);
    }, yS[e] ? { passive: !0 } : void 0);
  }
  Re && t.dom.addEventListener("input", () => null), _l(t);
}
function en(t, e) {
  t.input.lastSelectionOrigin = e, t.input.lastSelectionTime = Date.now();
}
function wS(t) {
  t.domObserver.stop();
  for (let e in t.input.eventHandlers)
    t.dom.removeEventListener(e, t.input.eventHandlers[e]);
  clearTimeout(t.input.composingTimeout), clearTimeout(t.input.lastIOSEnterFallbackTimeout);
}
function _l(t) {
  t.someProp("handleDOMEvents", (e) => {
    for (let n in e)
      t.input.eventHandlers[n] || t.dom.addEventListener(n, t.input.eventHandlers[n] = (r) => Ia(t, r));
  });
}
function Ia(t, e) {
  return t.someProp("handleDOMEvents", (n) => {
    let r = n[e.type];
    return r ? r(t, e) || e.defaultPrevented : !1;
  });
}
function kS(t, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let n = e.target; n != t.dom; n = n.parentNode)
    if (!n || n.nodeType == 11 || n.pmViewDesc && n.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function SS(t, e) {
  !Ia(t, e) && Ne[e.type] && (t.editable || !(e.type in _e)) && Ne[e.type](t, e);
}
_e.keydown = (t, e) => {
  let n = e;
  if (t.input.shiftKey = n.keyCode == 16 || n.shiftKey, !eh(t, n) && (t.input.lastKeyCode = n.keyCode, t.input.lastKeyCodeTime = Date.now(), !(Ye && Ee && n.keyCode == 13)))
    if (n.keyCode != 229 && t.domObserver.forceFlush(), rr && n.keyCode == 13 && !n.ctrlKey && !n.altKey && !n.metaKey) {
      let r = Date.now();
      t.input.lastIOSEnter = r, t.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        t.input.lastIOSEnter == r && (t.someProp("handleKeyDown", (o) => o(t, mn(13, "Enter"))), t.input.lastIOSEnter = 0);
      }, 200);
    } else t.someProp("handleKeyDown", (r) => r(t, n)) || dS(t, n) ? n.preventDefault() : en(t, "key");
};
_e.keyup = (t, e) => {
  e.keyCode == 16 && (t.input.shiftKey = !1);
};
_e.keypress = (t, e) => {
  let n = e;
  if (eh(t, n) || !n.charCode || n.ctrlKey && !n.altKey || Ue && n.metaKey)
    return;
  if (t.someProp("handleKeyPress", (o) => o(t, n))) {
    n.preventDefault();
    return;
  }
  let r = t.state.selection;
  if (!(r instanceof P) || !r.$from.sameParent(r.$to)) {
    let o = String.fromCharCode(n.charCode);
    !/[\r\n]/.test(o) && !t.someProp("handleTextInput", (i) => i(t, r.$from.pos, r.$to.pos, o)) && t.dispatch(t.state.tr.insertText(o).scrollIntoView()), n.preventDefault();
  }
};
function us(t) {
  return { left: t.clientX, top: t.clientY };
}
function xS(t, e) {
  let n = e.x - t.clientX, r = e.y - t.clientY;
  return n * n + r * r < 100;
}
function Da(t, e, n, r, o) {
  if (r == -1)
    return !1;
  let i = t.state.doc.resolve(r);
  for (let s = i.depth + 1; s > 0; s--)
    if (t.someProp(e, (l) => s > i.depth ? l(t, n, i.nodeAfter, i.before(s), o, !0) : l(t, n, i.node(s), i.before(s), o, !1)))
      return !0;
  return !1;
}
function Zn(t, e, n) {
  if (t.focused || t.focus(), t.state.selection.eq(e))
    return;
  let r = t.state.tr.setSelection(e);
  r.setMeta("pointer", !0), t.dispatch(r);
}
function CS(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.doc.resolve(e), r = n.nodeAfter;
  return r && r.isAtom && I.isSelectable(r) ? (Zn(t, new I(n)), !0) : !1;
}
function TS(t, e) {
  if (e == -1)
    return !1;
  let n = t.state.selection, r, o;
  n instanceof I && (r = n.node);
  let i = t.state.doc.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let l = s > i.depth ? i.nodeAfter : i.node(s);
    if (I.isSelectable(l)) {
      r && n.$from.depth > 0 && s >= n.$from.depth && i.before(n.$from.depth + 1) == n.$from.pos ? o = i.before(n.$from.depth) : o = i.before(s);
      break;
    }
  }
  return o != null ? (Zn(t, I.create(t.state.doc, o)), !0) : !1;
}
function AS(t, e, n, r, o) {
  return Da(t, "handleClickOn", e, n, r) || t.someProp("handleClick", (i) => i(t, e, r)) || (o ? TS(t, n) : CS(t, n));
}
function MS(t, e, n, r) {
  return Da(t, "handleDoubleClickOn", e, n, r) || t.someProp("handleDoubleClick", (o) => o(t, e, r));
}
function ES(t, e, n, r) {
  return Da(t, "handleTripleClickOn", e, n, r) || t.someProp("handleTripleClick", (o) => o(t, e, r)) || OS(t, n, r);
}
function OS(t, e, n) {
  if (n.button != 0)
    return !1;
  let r = t.state.doc;
  if (e == -1)
    return r.inlineContent ? (Zn(t, P.create(r, 0, r.content.size)), !0) : !1;
  let o = r.resolve(e);
  for (let i = o.depth + 1; i > 0; i--) {
    let s = i > o.depth ? o.nodeAfter : o.node(i), l = o.before(i);
    if (s.inlineContent)
      Zn(t, P.create(r, l + 1, l + 1 + s.content.size));
    else if (I.isSelectable(s))
      Zn(t, I.create(r, l));
    else
      continue;
    return !0;
  }
}
function Pa(t) {
  return di(t);
}
const Qp = Ue ? "metaKey" : "ctrlKey";
Ne.mousedown = (t, e) => {
  let n = e;
  t.input.shiftKey = n.shiftKey;
  let r = Pa(t), o = Date.now(), i = "singleClick";
  o - t.input.lastClick.time < 500 && xS(n, t.input.lastClick) && !n[Qp] && (t.input.lastClick.type == "singleClick" ? i = "doubleClick" : t.input.lastClick.type == "doubleClick" && (i = "tripleClick")), t.input.lastClick = { time: o, x: n.clientX, y: n.clientY, type: i };
  let s = t.posAtCoords(us(n));
  s && (i == "singleClick" ? (t.input.mouseDown && t.input.mouseDown.done(), t.input.mouseDown = new LS(t, s, n, !!r)) : (i == "doubleClick" ? MS : ES)(t, s.pos, s.inside, n) ? n.preventDefault() : en(t, "pointer"));
};
class LS {
  constructor(e, n, r, o) {
    this.view = e, this.pos = n, this.event = r, this.flushed = o, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Qp], this.allowDefault = r.shiftKey;
    let i, s;
    if (n.inside > -1)
      i = e.state.doc.nodeAt(n.inside), s = n.inside;
    else {
      let d = e.state.doc.resolve(n.pos);
      i = d.parent, s = d.depth ? d.before() : 0;
    }
    const l = o ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== !1 || c instanceof I && c.from <= s && c.to > s) && (this.mightDrag = {
      node: i,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && ot && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), en(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Vt(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let n = this.pos;
    this.view.state.doc != this.startDoc && (n = this.view.posAtCoords(us(e))), this.updateAllowDefault(e), this.allowDefault || !n ? en(this.view, "pointer") : AS(this.view, n.pos, n.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Re && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Ee && !this.view.state.selection.visible && Math.min(Math.abs(n.pos - this.view.state.selection.from), Math.abs(n.pos - this.view.state.selection.to)) <= 2) ? (Zn(this.view, B.near(this.view.state.doc.resolve(n.pos))), e.preventDefault()) : en(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), en(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Ne.touchstart = (t) => {
  t.input.lastTouch = Date.now(), Pa(t), en(t, "pointer");
};
Ne.touchmove = (t) => {
  t.input.lastTouch = Date.now(), en(t, "pointer");
};
Ne.contextmenu = (t) => Pa(t);
function eh(t, e) {
  return t.composing ? !0 : Re && Math.abs(e.timeStamp - t.input.compositionEndedAt) < 500 ? (t.input.compositionEndedAt = -2e8, !0) : !1;
}
const VS = Ye ? 5e3 : -1;
_e.compositionstart = _e.compositionupdate = (t) => {
  if (!t.composing) {
    t.domObserver.flush();
    let { state: e } = t, n = e.selection.$to;
    if (e.selection instanceof P && (e.storedMarks || !n.textOffset && n.parentOffset && n.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      t.markCursor = t.state.storedMarks || n.marks(), di(t, !0), t.markCursor = null;
    else if (di(t, !e.selection.empty), ot && e.selection.empty && n.parentOffset && !n.textOffset && n.nodeBefore.marks.length) {
      let r = t.domSelectionRange();
      for (let o = r.focusNode, i = r.focusOffset; o && o.nodeType == 1 && i != 0; ) {
        let s = i < 0 ? o.lastChild : o.childNodes[i - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let l = t.domSelection();
          l && l.collapse(s, s.nodeValue.length);
          break;
        } else
          o = s, i = -1;
      }
    }
    t.input.composing = !0;
  }
  th(t, VS);
};
_e.compositionend = (t, e) => {
  t.composing && (t.input.composing = !1, t.input.compositionEndedAt = e.timeStamp, t.input.compositionPendingChanges = t.domObserver.pendingRecords().length ? t.input.compositionID : 0, t.input.compositionNode = null, t.input.compositionPendingChanges && Promise.resolve().then(() => t.domObserver.flush()), t.input.compositionID++, th(t, 20));
};
function th(t, e) {
  clearTimeout(t.input.composingTimeout), e > -1 && (t.input.composingTimeout = setTimeout(() => di(t), e));
}
function nh(t) {
  for (t.composing && (t.input.composing = !1, t.input.compositionEndedAt = RS()); t.input.compositionNodes.length > 0; )
    t.input.compositionNodes.pop().markParentsDirty();
}
function HS(t) {
  let e = t.domSelectionRange();
  if (!e.focusNode)
    return null;
  let n = Ck(e.focusNode, e.focusOffset), r = Tk(e.focusNode, e.focusOffset);
  if (n && r && n != r) {
    let o = r.pmViewDesc, i = t.domObserver.lastChangedTextNode;
    if (n == i || r == i)
      return i;
    if (!o || !o.isText(r.nodeValue))
      return r;
    if (t.input.compositionNode == r) {
      let s = n.pmViewDesc;
      if (!(!s || !s.isText(n.nodeValue)))
        return r;
    }
  }
  return n || r;
}
function RS() {
  let t = document.createEvent("Event");
  return t.initEvent("event", !0, !0), t.timeStamp;
}
function di(t, e = !1) {
  if (!(Ye && t.domObserver.flushingSoon >= 0)) {
    if (t.domObserver.forceFlush(), nh(t), e || t.docView && t.docView.dirty) {
      let n = Na(t);
      return n && !n.eq(t.state.selection) ? t.dispatch(t.state.tr.setSelection(n)) : (t.markCursor || e) && !t.state.selection.empty ? t.dispatch(t.state.tr.deleteSelection()) : t.updateState(t.state), !0;
    }
    return !1;
  }
}
function NS(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.dom.parentNode.appendChild(document.createElement("div"));
  n.appendChild(e), n.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), o = document.createRange();
  o.selectNodeContents(e), t.dom.blur(), r.removeAllRanges(), r.addRange(o), setTimeout(() => {
    n.parentNode && n.parentNode.removeChild(n), t.focus();
  }, 50);
}
const Kr = De && rn < 15 || rr && Lk < 604;
Ne.copy = _e.cut = (t, e) => {
  let n = e, r = t.state.selection, o = n.type == "cut";
  if (r.empty)
    return;
  let i = Kr ? null : n.clipboardData, s = r.content(), { dom: l, text: a } = Kp(t, s);
  i ? (n.preventDefault(), i.clearData(), i.setData("text/html", l.innerHTML), i.setData("text/plain", a)) : NS(t, l), o && t.dispatch(t.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function _S(t) {
  return t.openStart == 0 && t.openEnd == 0 && t.content.childCount == 1 ? t.content.firstChild : null;
}
function IS(t, e) {
  if (!t.dom.parentNode)
    return;
  let n = t.input.shiftKey || t.state.selection.$from.parent.type.spec.code, r = t.dom.parentNode.appendChild(document.createElement(n ? "textarea" : "div"));
  n || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let o = t.input.shiftKey && t.input.lastKeyCode != 45;
  setTimeout(() => {
    t.focus(), r.parentNode && r.parentNode.removeChild(r), n ? qr(t, r.value, null, o, e) : qr(t, r.textContent, r.innerHTML, o, e);
  }, 50);
}
function qr(t, e, n, r, o) {
  let i = qp(t, e, n, r, t.state.selection.$from);
  if (t.someProp("handlePaste", (a) => a(t, o, i || O.empty)))
    return !0;
  if (!i)
    return !1;
  let s = _S(i), l = s ? t.state.tr.replaceSelectionWith(s, r) : t.state.tr.replaceSelection(i);
  return t.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function rh(t) {
  let e = t.getData("text/plain") || t.getData("Text");
  if (e)
    return e;
  let n = t.getData("text/uri-list");
  return n ? n.replace(/\r?\n/g, " ") : "";
}
_e.paste = (t, e) => {
  let n = e;
  if (t.composing && !Ye)
    return;
  let r = Kr ? null : n.clipboardData, o = t.input.shiftKey && t.input.lastKeyCode != 45;
  r && qr(t, rh(r), r.getData("text/html"), o, n) ? n.preventDefault() : IS(t, n);
};
class oh {
  constructor(e, n, r) {
    this.slice = e, this.move = n, this.node = r;
  }
}
const ih = Ue ? "altKey" : "ctrlKey";
Ne.dragstart = (t, e) => {
  let n = e, r = t.input.mouseDown;
  if (r && r.done(), !n.dataTransfer)
    return;
  let o = t.state.selection, i = o.empty ? null : t.posAtCoords(us(n)), s;
  if (!(i && i.pos >= o.from && i.pos <= (o instanceof I ? o.to - 1 : o.to))) {
    if (r && r.mightDrag)
      s = I.create(t.state.doc, r.mightDrag.pos);
    else if (n.target && n.target.nodeType == 1) {
      let u = t.docView.nearestDesc(n.target, !0);
      u && u.node.type.spec.draggable && u != t.docView && (s = I.create(t.state.doc, u.posBefore));
    }
  }
  let l = (s || t.state.selection).content(), { dom: a, text: c, slice: d } = Kp(t, l);
  (!n.dataTransfer.files.length || !Ee || Lp > 120) && n.dataTransfer.clearData(), n.dataTransfer.setData(Kr ? "Text" : "text/html", a.innerHTML), n.dataTransfer.effectAllowed = "copyMove", Kr || n.dataTransfer.setData("text/plain", c), t.dragging = new oh(d, !n[ih], s);
};
Ne.dragend = (t) => {
  let e = t.dragging;
  window.setTimeout(() => {
    t.dragging == e && (t.dragging = null);
  }, 50);
};
_e.dragover = _e.dragenter = (t, e) => e.preventDefault();
_e.drop = (t, e) => {
  let n = e, r = t.dragging;
  if (t.dragging = null, !n.dataTransfer)
    return;
  let o = t.posAtCoords(us(n));
  if (!o)
    return;
  let i = t.state.doc.resolve(o.pos), s = r && r.slice;
  s ? t.someProp("transformPasted", (h) => {
    s = h(s, t);
  }) : s = qp(t, rh(n.dataTransfer), Kr ? null : n.dataTransfer.getData("text/html"), !1, i);
  let l = !!(r && !n[ih]);
  if (t.someProp("handleDrop", (h) => h(t, n, s || O.empty, l))) {
    n.preventDefault();
    return;
  }
  if (!s)
    return;
  n.preventDefault();
  let a = s ? kp(t.state.doc, i.pos, s) : i.pos;
  a == null && (a = i.pos);
  let c = t.state.tr;
  if (l) {
    let { node: h } = r;
    h ? h.replace(c) : c.deleteSelection();
  }
  let d = c.mapping.map(a), u = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, f = c.doc;
  if (u ? c.replaceRangeWith(d, d, s.content.firstChild) : c.replaceRange(d, d, s), c.doc.eq(f))
    return;
  let p = c.doc.resolve(d);
  if (u && I.isSelectable(s.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new I(p));
  else {
    let h = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, y, b) => h = b), c.setSelection(_a(t, p, c.doc.resolve(h)));
  }
  t.focus(), t.dispatch(c.setMeta("uiEvent", "drop"));
};
Ne.focus = (t) => {
  t.input.lastFocus = Date.now(), t.focused || (t.domObserver.stop(), t.dom.classList.add("ProseMirror-focused"), t.domObserver.start(), t.focused = !0, setTimeout(() => {
    t.docView && t.hasFocus() && !t.domObserver.currentSelection.eq(t.domSelectionRange()) && Vt(t);
  }, 20));
};
Ne.blur = (t, e) => {
  let n = e;
  t.focused && (t.domObserver.stop(), t.dom.classList.remove("ProseMirror-focused"), t.domObserver.start(), n.relatedTarget && t.dom.contains(n.relatedTarget) && t.domObserver.currentSelection.clear(), t.focused = !1);
};
Ne.beforeinput = (t, e) => {
  if (Ee && Ye && e.inputType == "deleteContentBackward") {
    t.domObserver.flushSoon();
    let { domChangeCount: r } = t.input;
    setTimeout(() => {
      if (t.input.domChangeCount != r || (t.dom.blur(), t.focus(), t.someProp("handleKeyDown", (i) => i(t, mn(8, "Backspace")))))
        return;
      let { $cursor: o } = t.state.selection;
      o && o.pos > 0 && t.dispatch(t.state.tr.delete(o.pos - 1, o.pos).scrollIntoView());
    }, 50);
  }
};
for (let t in _e)
  Ne[t] = _e[t];
function Jr(t, e) {
  if (t == e)
    return !0;
  for (let n in t)
    if (t[n] !== e[n])
      return !1;
  for (let n in e)
    if (!(n in t))
      return !1;
  return !0;
}
class ui {
  constructor(e, n) {
    this.toDOM = e, this.spec = n || kn, this.side = this.spec.side || 0;
  }
  map(e, n, r, o) {
    let { pos: i, deleted: s } = e.mapResult(n.from + o, this.side < 0 ? -1 : 1);
    return s ? null : new we(i - r, i - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof ui && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Jr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class sn {
  constructor(e, n) {
    this.attrs = e, this.spec = n || kn;
  }
  map(e, n, r, o) {
    let i = e.map(n.from + o, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(n.to + o, this.spec.inclusiveEnd ? 1 : -1) - r;
    return i >= s ? null : new we(i, s, this);
  }
  valid(e, n) {
    return n.from < n.to;
  }
  eq(e) {
    return this == e || e instanceof sn && Jr(this.attrs, e.attrs) && Jr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof sn;
  }
  destroy() {
  }
}
class Ba {
  constructor(e, n) {
    this.attrs = e, this.spec = n || kn;
  }
  map(e, n, r, o) {
    let i = e.mapResult(n.from + o, 1);
    if (i.deleted)
      return null;
    let s = e.mapResult(n.to + o, -1);
    return s.deleted || s.pos <= i.pos ? null : new we(i.pos - r, s.pos - r, this);
  }
  valid(e, n) {
    let { index: r, offset: o } = e.content.findIndex(n.from), i;
    return o == n.from && !(i = e.child(r)).isText && o + i.nodeSize == n.to;
  }
  eq(e) {
    return this == e || e instanceof Ba && Jr(this.attrs, e.attrs) && Jr(this.spec, e.spec);
  }
  destroy() {
  }
}
class we {
  /**
  @internal
  */
  constructor(e, n, r) {
    this.from = e, this.to = n, this.type = r;
  }
  /**
  @internal
  */
  copy(e, n) {
    return new we(e, n, this.type);
  }
  /**
  @internal
  */
  eq(e, n = 0) {
    return this.type.eq(e.type) && this.from + n == e.from && this.to + n == e.to;
  }
  /**
  @internal
  */
  map(e, n, r) {
    return this.type.map(e, this, n, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, n, r) {
    return new we(e, e, new ui(n, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, n, r, o) {
    return new we(e, n, new sn(r, o));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, n, r, o) {
    return new we(e, n, new Ba(r, o));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof sn;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof ui;
  }
}
const $n = [], kn = {};
class Q {
  /**
  @internal
  */
  constructor(e, n) {
    this.local = e.length ? e : $n, this.children = n.length ? n : $n;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, n) {
    return n.length ? fi(n, e, 0, kn) : Me;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, n, r) {
    let o = [];
    return this.findInner(e ?? 0, n ?? 1e9, o, 0, r), o;
  }
  findInner(e, n, r, o, i) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= n && l.to >= e && (!i || i(l.spec)) && r.push(l.copy(l.from + o, l.to + o));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < n && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, n - l, r, o + l, i);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, n, r) {
    return this == Me || e.maps.length == 0 ? this : this.mapInner(e, n, 0, 0, r || kn);
  }
  /**
  @internal
  */
  mapInner(e, n, r, o, i) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, o);
      a && a.type.valid(n, a) ? (s || (s = [])).push(a) : i.onRemove && i.onRemove(this.local[l].spec);
    }
    return this.children.length ? DS(this.children, s || [], e, n, r, o, i) : s ? new Q(s.sort(Sn), $n) : Me;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, n) {
    return n.length ? this == Me ? Q.create(e, n) : this.addInner(e, n, 0) : this;
  }
  addInner(e, n, r) {
    let o, i = 0;
    e.forEach((l, a) => {
      let c = a + r, d;
      if (d = lh(n, l, c)) {
        for (o || (o = this.children.slice()); i < o.length && o[i] < a; )
          i += 3;
        o[i] == a ? o[i + 2] = o[i + 2].addInner(l, d, c + 1) : o.splice(i, 0, a, a + l.nodeSize, fi(d, l, c + 1, kn)), i += 3;
      }
    });
    let s = sh(i ? ah(n) : n, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new Q(s.length ? this.local.concat(s).sort(Sn) : this.local, o || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Me ? this : this.removeInner(e, 0);
  }
  removeInner(e, n) {
    let r = this.children, o = this.local;
    for (let i = 0; i < r.length; i += 3) {
      let s, l = r[i] + n, a = r[i + 1] + n;
      for (let d = 0, u; d < e.length; d++)
        (u = e[d]) && u.from > l && u.to < a && (e[d] = null, (s || (s = [])).push(u));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[i + 2].removeInner(s, l + 1);
      c != Me ? r[i + 2] = c : (r.splice(i, 3), i -= 3);
    }
    if (o.length) {
      for (let i = 0, s; i < e.length; i++)
        if (s = e[i])
          for (let l = 0; l < o.length; l++)
            o[l].eq(s, n) && (o == this.local && (o = this.local.slice()), o.splice(l--, 1));
    }
    return r == this.children && o == this.local ? this : o.length || r.length ? new Q(o, r) : Me;
  }
  forChild(e, n) {
    if (this == Me)
      return this;
    if (n.isLeaf)
      return Q.empty;
    let r, o;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let i = e + 1, s = i + n.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > i && a.type instanceof sn) {
        let c = Math.max(i, a.from) - i, d = Math.min(s, a.to) - i;
        c < d && (o || (o = [])).push(a.copy(c, d));
      }
    }
    if (o) {
      let l = new Q(o.sort(Sn), $n);
      return r ? new Gt([l, r]) : l;
    }
    return r || Me;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Q) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let n = 0; n < this.local.length; n++)
      if (!this.local[n].eq(e.local[n]))
        return !1;
    for (let n = 0; n < this.children.length; n += 3)
      if (this.children[n] != e.children[n] || this.children[n + 1] != e.children[n + 1] || !this.children[n + 2].eq(e.children[n + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return $a(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Me)
      return $n;
    if (e.inlineContent || !this.local.some(sn.is))
      return this.local;
    let n = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof sn || n.push(this.local[r]);
    return n;
  }
  forEachSet(e) {
    e(this);
  }
}
Q.empty = new Q([], []);
Q.removeOverlap = $a;
const Me = Q.empty;
class Gt {
  constructor(e) {
    this.members = e;
  }
  map(e, n) {
    const r = this.members.map((o) => o.map(e, n, kn));
    return Gt.from(r);
  }
  forChild(e, n) {
    if (n.isLeaf)
      return Q.empty;
    let r = [];
    for (let o = 0; o < this.members.length; o++) {
      let i = this.members[o].forChild(e, n);
      i != Me && (i instanceof Gt ? r = r.concat(i.members) : r.push(i));
    }
    return Gt.from(r);
  }
  eq(e) {
    if (!(e instanceof Gt) || e.members.length != this.members.length)
      return !1;
    for (let n = 0; n < this.members.length; n++)
      if (!this.members[n].eq(e.members[n]))
        return !1;
    return !0;
  }
  locals(e) {
    let n, r = !0;
    for (let o = 0; o < this.members.length; o++) {
      let i = this.members[o].localsInner(e);
      if (i.length)
        if (!n)
          n = i;
        else {
          r && (n = n.slice(), r = !1);
          for (let s = 0; s < i.length; s++)
            n.push(i[s]);
        }
    }
    return n ? $a(r ? n : n.sort(Sn)) : $n;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Me;
      case 1:
        return e[0];
      default:
        return new Gt(e.every((n) => n instanceof Q) ? e : e.reduce((n, r) => n.concat(r instanceof Q ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let n = 0; n < this.members.length; n++)
      this.members[n].forEachSet(e);
  }
}
function DS(t, e, n, r, o, i, s) {
  let l = t.slice();
  for (let c = 0, d = i; c < n.maps.length; c++) {
    let u = 0;
    n.maps[c].forEach((f, p, h, m) => {
      let g = m - h - (p - f);
      for (let y = 0; y < l.length; y += 3) {
        let b = l[y + 1];
        if (b < 0 || f > b + d - u)
          continue;
        let v = l[y] + d - u;
        p >= v ? l[y + 1] = f <= v ? -2 : -1 : f >= d && g && (l[y] += g, l[y + 1] += g);
      }
      u += g;
    }), d = n.maps[c].map(d, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let d = n.map(t[c] + i), u = d - o;
      if (u < 0 || u >= r.content.size) {
        a = !0;
        continue;
      }
      let f = n.map(t[c + 1] + i, -1), p = f - o, { index: h, offset: m } = r.content.findIndex(u), g = r.maybeChild(h);
      if (g && m == u && m + g.nodeSize == p) {
        let y = l[c + 2].mapInner(n, g, d + 1, t[c] + i + 1, s);
        y != Me ? (l[c] = u, l[c + 1] = p, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = PS(l, t, e, n, o, i, s), d = fi(c, r, 0, s);
    e = d.local;
    for (let u = 0; u < l.length; u += 3)
      l[u + 1] < 0 && (l.splice(u, 3), u -= 3);
    for (let u = 0, f = 0; u < d.children.length; u += 3) {
      let p = d.children[u];
      for (; f < l.length && l[f] < p; )
        f += 3;
      l.splice(f, 0, d.children[u], d.children[u + 1], d.children[u + 2]);
    }
  }
  return new Q(e.sort(Sn), l);
}
function sh(t, e) {
  if (!e || !t.length)
    return t;
  let n = [];
  for (let r = 0; r < t.length; r++) {
    let o = t[r];
    n.push(new we(o.from + e, o.to + e, o.type));
  }
  return n;
}
function PS(t, e, n, r, o, i, s) {
  function l(a, c) {
    for (let d = 0; d < a.local.length; d++) {
      let u = a.local[d].map(r, o, c);
      u ? n.push(u) : s.onRemove && s.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + c + 1);
  }
  for (let a = 0; a < t.length; a += 3)
    t[a + 1] == -1 && l(t[a + 2], e[a] + i + 1);
  return n;
}
function lh(t, e, n) {
  if (e.isLeaf)
    return null;
  let r = n + e.nodeSize, o = null;
  for (let i = 0, s; i < t.length; i++)
    (s = t[i]) && s.from > n && s.to < r && ((o || (o = [])).push(s), t[i] = null);
  return o;
}
function ah(t) {
  let e = [];
  for (let n = 0; n < t.length; n++)
    t[n] != null && e.push(t[n]);
  return e;
}
function fi(t, e, n, r) {
  let o = [], i = !1;
  e.forEach((l, a) => {
    let c = lh(t, l, a + n);
    if (c) {
      i = !0;
      let d = fi(c, l, n + a + 1, r);
      d != Me && o.push(a, a + l.nodeSize, d);
    }
  });
  let s = sh(i ? ah(t) : t, -n).sort(Sn);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || o.length ? new Q(s, o) : Me;
}
function Sn(t, e) {
  return t.from - e.from || t.to - e.to;
}
function $a(t) {
  let e = t;
  for (let n = 0; n < e.length - 1; n++) {
    let r = e[n];
    if (r.from != r.to)
      for (let o = n + 1; o < e.length; o++) {
        let i = e[o];
        if (i.from == r.from) {
          i.to != r.to && (e == t && (e = t.slice()), e[o] = i.copy(i.from, r.to), Ud(e, o + 1, i.copy(r.to, i.to)));
          continue;
        } else {
          i.from < r.to && (e == t && (e = t.slice()), e[n] = r.copy(r.from, i.from), Ud(e, o, r.copy(i.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Ud(t, e, n) {
  for (; e < t.length && Sn(n, t[e]) > 0; )
    e++;
  t.splice(e, 0, n);
}
function Ks(t) {
  let e = [];
  return t.someProp("decorations", (n) => {
    let r = n(t.state);
    r && r != Me && e.push(r);
  }), t.cursorWrapper && e.push(Q.create(t.state.doc, [t.cursorWrapper.deco])), Gt.from(e);
}
const BS = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, $S = De && rn <= 11;
class zS {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class FS {
  constructor(e, n) {
    this.view = e, this.handleDOMChange = n, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new zS(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let o = 0; o < r.length; o++)
        this.queue.push(r[o]);
      De && rn <= 11 && r.some((o) => o.type == "childList" && o.removedNodes.length || o.type == "characterData" && o.oldValue.length > o.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), $S && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, BS)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let n = 0; n < e.length; n++)
          this.queue.push(e[n]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Dd(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Vt(this.view);
      if (De && rn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && An(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let n = /* @__PURE__ */ new Set(), r;
    for (let i = e.focusNode; i; i = Ur(i))
      n.add(i);
    for (let i = e.anchorNode; i; i = Ur(i))
      if (n.has(i)) {
        r = i;
        break;
      }
    let o = r && this.view.docView.nearestDesc(r);
    if (o && o.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let n = this.pendingRecords();
    n.length && (this.queue = []);
    let r = e.domSelectionRange(), o = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Dd(e) && !this.ignoreSelectionChange(r), i = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let d = 0; d < n.length; d++) {
        let u = this.registerMutation(n[d], a);
        u && (i = i < 0 ? u.from : Math.min(u.from, i), s = s < 0 ? u.to : Math.max(u.to, s), u.typeOver && (l = !0));
      }
    if (ot && a.length) {
      let d = a.filter((u) => u.nodeName == "BR");
      if (d.length == 2) {
        let [u, f] = d;
        u.parentNode && u.parentNode.parentNode == f.parentNode ? f.remove() : u.remove();
      } else {
        let { focusNode: u } = this.currentSelection;
        for (let f of d) {
          let p = f.parentNode;
          p && p.nodeName == "LI" && (!u || US(e, u) != p) && f.remove();
        }
      }
    }
    let c = null;
    i < 0 && o && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && cs(r) && (c = Na(e)) && c.eq(B.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Vt(e), this.currentSelection.set(r), e.scrollToSelection()) : (i > -1 || o) && (i > -1 && (e.docView.markDirty(i, s), jS(e)), this.handleDOMChange(i, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Vt(e), this.currentSelection.set(r));
  }
  registerMutation(e, n) {
    if (n.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++) {
        let u = e.addedNodes[d];
        n.push(u), u.nodeType == 3 && (this.lastChangedTextNode = u);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let o = e.previousSibling, i = e.nextSibling;
      if (De && rn <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: u, nextSibling: f } = e.addedNodes[d];
          (!u || Array.prototype.indexOf.call(e.addedNodes, u) < 0) && (o = u), (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f);
        }
      let s = o && o.parentNode == e.target ? Ce(o) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = i && i.parentNode == e.target ? Ce(i) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Kd = /* @__PURE__ */ new WeakMap(), qd = !1;
function jS(t) {
  if (!Kd.has(t) && (Kd.set(t, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(t.dom).whiteSpace) !== -1)) {
    if (t.requiresGeckoHackNode = ot, qd)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), qd = !0;
  }
}
function Jd(t, e) {
  let n = e.startContainer, r = e.startOffset, o = e.endContainer, i = e.endOffset, s = t.domAtPos(t.state.selection.anchor);
  return An(s.node, s.offset, o, i) && ([n, r, o, i] = [o, i, n, r]), { anchorNode: n, anchorOffset: r, focusNode: o, focusOffset: i };
}
function WS(t, e) {
  if (e.getComposedRanges) {
    let o = e.getComposedRanges(t.root)[0];
    if (o)
      return Jd(t, o);
  }
  let n;
  function r(o) {
    o.preventDefault(), o.stopImmediatePropagation(), n = o.getTargetRanges()[0];
  }
  return t.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), t.dom.removeEventListener("beforeinput", r, !0), n ? Jd(t, n) : null;
}
function US(t, e) {
  for (let n = e.parentNode; n && n != t.dom; n = n.parentNode) {
    let r = t.docView.nearestDesc(n, !0);
    if (r && r.node.isBlock)
      return n;
  }
  return null;
}
function KS(t, e, n) {
  let { node: r, fromOffset: o, toOffset: i, from: s, to: l } = t.docView.parseRange(e, n), a = t.domSelectionRange(), c, d = a.anchorNode;
  if (d && t.dom.contains(d.nodeType == 1 ? d : d.parentNode) && (c = [{ node: d, offset: a.anchorOffset }], cs(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), Ee && t.input.lastKeyCode === 8)
    for (let g = i; g > o; g--) {
      let y = r.childNodes[g - 1], b = y.pmViewDesc;
      if (y.nodeName == "BR" && !b) {
        i = g;
        break;
      }
      if (!b || b.size)
        break;
    }
  let u = t.state.doc, f = t.someProp("domParser") || nn.fromSchema(t.state.schema), p = u.resolve(s), h = null, m = f.parse(r, {
    topNode: p.parent,
    topMatch: p.parent.contentMatchAt(p.index()),
    topOpen: !0,
    from: o,
    to: i,
    preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: qS,
    context: p
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = g), h = { anchor: g + s, head: y + s };
  }
  return { doc: m, sel: h, from: s, to: l };
}
function qS(t) {
  let e = t.pmViewDesc;
  if (e)
    return e.parseRule();
  if (t.nodeName == "BR" && t.parentNode) {
    if (Re && /^(ul|ol)$/i.test(t.parentNode.nodeName)) {
      let n = document.createElement("div");
      return n.appendChild(document.createElement("li")), { skip: n };
    } else if (t.parentNode.lastChild == t || Re && /^(tr|table)$/i.test(t.parentNode.nodeName))
      return { ignore: !0 };
  } else if (t.nodeName == "IMG" && t.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const JS = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function GS(t, e, n, r, o) {
  let i = t.input.compositionPendingChanges || (t.composing ? t.input.compositionID : 0);
  if (t.input.compositionPendingChanges = 0, e < 0) {
    let A = t.input.lastSelectionTime > Date.now() - 50 ? t.input.lastSelectionOrigin : null, R = Na(t, A);
    if (R && !t.state.selection.eq(R)) {
      if (Ee && Ye && t.input.lastKeyCode === 13 && Date.now() - 100 < t.input.lastKeyCodeTime && t.someProp("handleKeyDown", (U) => U(t, mn(13, "Enter"))))
        return;
      let N = t.state.tr.setSelection(R);
      A == "pointer" ? N.setMeta("pointer", !0) : A == "key" && N.scrollIntoView(), i && N.setMeta("composition", i), t.dispatch(N);
    }
    return;
  }
  let s = t.state.doc.resolve(e), l = s.sharedDepth(n);
  e = s.before(l + 1), n = t.state.doc.resolve(n).after(l + 1);
  let a = t.state.selection, c = KS(t, e, n), d = t.state.doc, u = d.slice(c.from, c.to), f, p;
  t.input.lastKeyCode === 8 && Date.now() - 100 < t.input.lastKeyCodeTime ? (f = t.state.selection.to, p = "end") : (f = t.state.selection.from, p = "start"), t.input.lastKeyCode = null;
  let h = YS(u.content, c.doc.content, c.from, f, p);
  if (h && t.input.domChangeCount++, (rr && t.input.lastIOSEnter > Date.now() - 225 || Ye) && o.some((A) => A.nodeType == 1 && !JS.test(A.nodeName)) && (!h || h.endA >= h.endB) && t.someProp("handleKeyDown", (A) => A(t, mn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && a instanceof P && !a.empty && a.$head.sameParent(a.$anchor) && !t.composing && !(c.sel && c.sel.anchor != c.sel.head))
      h = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let A = Gd(t, t.state.doc, c.sel);
        if (A && !A.eq(t.state.selection)) {
          let R = t.state.tr.setSelection(A);
          i && R.setMeta("composition", i), t.dispatch(R);
        }
      }
      return;
    }
  t.state.selection.from < t.state.selection.to && h.start == h.endB && t.state.selection instanceof P && (h.start > t.state.selection.from && h.start <= t.state.selection.from + 2 && t.state.selection.from >= c.from ? h.start = t.state.selection.from : h.endA < t.state.selection.to && h.endA >= t.state.selection.to - 2 && t.state.selection.to <= c.to && (h.endB += t.state.selection.to - h.endA, h.endA = t.state.selection.to)), De && rn <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > c.from && c.doc.textBetween(h.start - c.from - 1, h.start - c.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let m = c.doc.resolveNoCache(h.start - c.from), g = c.doc.resolveNoCache(h.endB - c.from), y = d.resolve(h.start), b = m.sameParent(g) && m.parent.inlineContent && y.end() >= h.endA, v;
  if ((rr && t.input.lastIOSEnter > Date.now() - 225 && (!b || o.some((A) => A.nodeName == "DIV" || A.nodeName == "P")) || !b && m.pos < c.doc.content.size && !m.sameParent(g) && (v = B.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && v.head == g.pos) && t.someProp("handleKeyDown", (A) => A(t, mn(13, "Enter")))) {
    t.input.lastIOSEnter = 0;
    return;
  }
  if (t.state.selection.anchor > h.start && XS(d, h.start, h.endA, m, g) && t.someProp("handleKeyDown", (A) => A(t, mn(8, "Backspace")))) {
    Ye && Ee && t.domObserver.suppressSelectionUpdates();
    return;
  }
  Ee && Ye && h.endB == h.start && (t.input.lastAndroidDelete = Date.now()), Ye && !b && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == h.endA && (h.endB -= 2, g = c.doc.resolveNoCache(h.endB - c.from), setTimeout(() => {
    t.someProp("handleKeyDown", function(A) {
      return A(t, mn(13, "Enter"));
    });
  }, 20));
  let x = h.start, k = h.endA, w, L, E;
  if (b) {
    if (m.pos == g.pos)
      De && rn <= 11 && m.parentOffset == 0 && (t.domObserver.suppressSelectionUpdates(), setTimeout(() => Vt(t), 20)), w = t.state.tr.delete(x, k), L = d.resolve(h.start).marksAcross(d.resolve(h.endA));
    else if (
      // Adding or removing a mark
      h.endA == h.endB && (E = ZS(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, h.endA - y.start())))
    )
      w = t.state.tr, E.type == "add" ? w.addMark(x, k, E.mark) : w.removeMark(x, k, E.mark);
    else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let A = m.parent.textBetween(m.parentOffset, g.parentOffset);
      if (t.someProp("handleTextInput", (R) => R(t, x, k, A)))
        return;
      w = t.state.tr.insertText(A, x, k);
    }
  }
  if (w || (w = t.state.tr.replace(x, k, c.doc.slice(h.start - c.from, h.endB - c.from))), c.sel) {
    let A = Gd(t, w.doc, c.sel);
    A && !(Ee && Ye && t.composing && A.empty && (h.start != h.endB || t.input.lastAndroidDelete < Date.now() - 100) && (A.head == x || A.head == w.mapping.map(k) - 1) || De && A.empty && A.head == x) && w.setSelection(A);
  }
  L && w.ensureMarks(L), i && w.setMeta("composition", i), t.dispatch(w.scrollIntoView());
}
function Gd(t, e, n) {
  return Math.max(n.anchor, n.head) > e.content.size ? null : _a(t, e.resolve(n.anchor), e.resolve(n.head));
}
function ZS(t, e) {
  let n = t.firstChild.marks, r = e.firstChild.marks, o = n, i = r, s, l, a;
  for (let d = 0; d < r.length; d++)
    o = r[d].removeFromSet(o);
  for (let d = 0; d < n.length; d++)
    i = n[d].removeFromSet(i);
  if (o.length == 1 && i.length == 0)
    l = o[0], s = "add", a = (d) => d.mark(l.addToSet(d.marks));
  else if (o.length == 0 && i.length == 1)
    l = i[0], s = "remove", a = (d) => d.mark(l.removeFromSet(d.marks));
  else
    return null;
  let c = [];
  for (let d = 0; d < e.childCount; d++)
    c.push(a(e.child(d)));
  if (S.from(c).eq(t))
    return { mark: l, type: s };
}
function XS(t, e, n, r, o) {
  if (
    // The content must have shrunk
    n - e <= o.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    qs(r, !0, !1) < o.pos
  )
    return !1;
  let i = t.resolve(e);
  if (!r.parent.isTextblock) {
    let l = i.nodeAfter;
    return l != null && n == e + l.nodeSize;
  }
  if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock)
    return !1;
  let s = t.resolve(qs(i, !0, !0));
  return !s.parent.isTextblock || s.pos > n || qs(s, !0, !1) < n ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function qs(t, e, n) {
  let r = t.depth, o = e ? t.end() : t.pos;
  for (; r > 0 && (e || t.indexAfter(r) == t.node(r).childCount); )
    r--, o++, e = !1;
  if (n) {
    let i = t.node(r).maybeChild(t.indexAfter(r));
    for (; i && !i.isLeaf; )
      i = i.firstChild, o++;
  }
  return o;
}
function YS(t, e, n, r, o) {
  let i = t.findDiffStart(e, n);
  if (i == null)
    return null;
  let { a: s, b: l } = t.findDiffEnd(e, n + t.size, n + e.size);
  if (o == "end") {
    let a = Math.max(0, i - Math.min(s, l));
    r -= s + a - i;
  }
  if (s < i && t.size < e.size) {
    let a = r <= i && r >= s ? i - r : 0;
    i -= a, i && i < e.size && Zd(e.textBetween(i - 1, i + 1)) && (i += a ? 1 : -1), l = i + (l - s), s = i;
  } else if (l < i) {
    let a = r <= i && r >= l ? i - r : 0;
    i -= a, i && i < t.size && Zd(t.textBetween(i - 1, i + 1)) && (i += a ? 1 : -1), s = i + (s - l), l = i;
  }
  return { start: i, endA: s, endB: l };
}
function Zd(t) {
  if (t.length != 2)
    return !1;
  let e = t.charCodeAt(0), n = t.charCodeAt(1);
  return e >= 56320 && e <= 57343 && n >= 55296 && n <= 56319;
}
class QS {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, n) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new bS(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = n, this.state = n.state, this.directPlugins = n.plugins || [], this.directPlugins.forEach(tu), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Qd(this), Yd(this), this.nodeViews = eu(this), this.docView = Vd(this.state.doc, Xd(this), Ks(this), this.dom, this), this.domObserver = new FS(this, (r, o, i, s) => GS(this, r, o, i, s)), this.domObserver.start(), vS(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let n in e)
        this._props[n] = e[n];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && _l(this);
    let n = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(tu), this.directPlugins = e.plugins), this.updateStateInner(e.state, n);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let n = {};
    for (let r in this._props)
      n[r] = this._props[r];
    n.state = this.state;
    for (let r in e)
      n[r] = e[r];
    this.update(n);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, n) {
    var r;
    let o = this.state, i = !1, s = !1;
    e.storedMarks && this.composing && (nh(this), s = !0), this.state = e;
    let l = o.plugins != e.plugins || this._props.plugins != n.plugins;
    if (l || this._props.plugins != n.plugins || this._props.nodeViews != n.nodeViews) {
      let p = eu(this);
      tx(p, this.nodeViews) && (this.nodeViews = p, i = !0);
    }
    (l || n.handleDOMEvents != this._props.handleDOMEvents) && _l(this), this.editable = Qd(this), Yd(this);
    let a = Ks(this), c = Xd(this), d = o.plugins != e.plugins && !o.doc.eq(e.doc) ? "reset" : e.scrollToSelection > o.scrollToSelection ? "to selection" : "preserve", u = i || !this.docView.matchesNode(e.doc, c, a);
    (u || !e.selection.eq(o.selection)) && (s = !0);
    let f = d == "preserve" && s && this.dom.style.overflowAnchor == null && Rk(this);
    if (s) {
      this.domObserver.stop();
      let p = u && (De || Ee) && !this.composing && !o.selection.empty && !e.selection.empty && ex(o.selection, e.selection);
      if (u) {
        let h = Ee ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = HS(this)), (i || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = Vd(e.doc, c, a, this.dom, this)), h && !this.trackWrites && (p = !0);
      }
      p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && rS(this)) ? Vt(this, p) : (jp(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(o), !((r = this.dragging) === null || r === void 0) && r.node && !o.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, o), d == "reset" ? this.dom.scrollTop = 0 : d == "to selection" ? this.scrollToSelection() : f && Nk(f);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!this.someProp("handleScrollToSelection", (n) => n(this))) if (this.state.selection instanceof I) {
      let n = this.docView.domAfterPos(this.state.selection.from);
      n.nodeType == 1 && Td(this, n.getBoundingClientRect(), e);
    } else
      Td(this, this.coordsAtPos(this.state.selection.head, 1), e);
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let n = 0; n < this.directPlugins.length; n++) {
        let r = this.directPlugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let n = 0; n < this.state.plugins.length; n++) {
        let r = this.state.plugins[n];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let n = 0; n < this.pluginViews.length; n++) {
        let r = this.pluginViews[n];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, n) {
    let r = e.node, o = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      o = r.from;
    else {
      let i = r.from + (this.state.doc.content.size - n.doc.content.size);
      (i > 0 && this.state.doc.nodeAt(i)) == r.node && (o = i);
    }
    this.dragging = new oh(e.slice, e.move, o < 0 ? void 0 : I.create(this.state.doc, o));
  }
  someProp(e, n) {
    let r = this._props && this._props[e], o;
    if (r != null && (o = n ? n(r) : r))
      return o;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (o = n ? n(l) : l))
        return o;
    }
    let i = this.state.plugins;
    if (i)
      for (let s = 0; s < i.length; s++) {
        let l = i[s].props[e];
        if (l != null && (o = n ? n(l) : l))
          return o;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (De) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && _k(this.dom), Vt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let n = this.dom.parentNode; n; n = n.parentNode)
        if (n.nodeType == 9 || n.nodeType == 11 && n.host)
          return n.getSelection || (Object.getPrototypeOf(n).getSelection = () => n.ownerDocument.getSelection()), this._root = n;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return $k(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, n = 1) {
    return _p(this, e, n);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, n = 0) {
    return this.docView.domFromPos(e, n);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let n = this.docView.descAt(e);
    return n ? n.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, n, r = -1) {
    let o = this.docView.posFromDOM(e, n, r);
    if (o == null)
      throw new RangeError("DOM position not inside the editor");
    return o;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, n) {
    return Uk(this, n || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, n) {
    return qr(this, "", e, !1, n || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, n) {
    return qr(this, e, null, !0, n || new ClipboardEvent("paste"));
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (wS(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], Ks(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, Sk());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return SS(this, e);
  }
  /**
  Dispatch a transaction. Will call
  [`dispatchTransaction`](https://prosemirror.net/docs/ref/#view.DirectEditorProps.dispatchTransaction)
  when given, and otherwise defaults to applying the transaction to
  the current state and calling
  [`updateState`](https://prosemirror.net/docs/ref/#view.EditorView.updateState) with the result.
  This method is bound to the view instance, so that it can be
  easily passed around.
  */
  dispatch(e) {
    let n = this._props.dispatchTransaction;
    n ? n.call(this, e) : this.updateState(this.state.apply(e));
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Re && this.root.nodeType === 11 && Mk(this.dom.ownerDocument) == this.dom && WS(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
function Xd(t) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(t.editable), t.someProp("attributes", (n) => {
    if (typeof n == "function" && (n = n(t.state)), n)
      for (let r in n)
        r == "class" ? e.class += " " + n[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + n[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(n[r]));
  }), e.translate || (e.translate = "no"), [we.node(0, t.state.doc.content.size, e)];
}
function Yd(t) {
  if (t.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), t.cursorWrapper = { dom: e, deco: we.widget(t.state.selection.from, e, { raw: !0, marks: t.markCursor }) };
  } else
    t.cursorWrapper = null;
}
function Qd(t) {
  return !t.someProp("editable", (e) => e(t.state) === !1);
}
function ex(t, e) {
  let n = Math.min(t.$anchor.sharedDepth(t.head), e.$anchor.sharedDepth(e.head));
  return t.$anchor.start(n) != e.$anchor.start(n);
}
function eu(t) {
  let e = /* @__PURE__ */ Object.create(null);
  function n(r) {
    for (let o in r)
      Object.prototype.hasOwnProperty.call(e, o) || (e[o] = r[o]);
  }
  return t.someProp("nodeViews", n), t.someProp("markViews", n), e;
}
function tx(t, e) {
  let n = 0, r = 0;
  for (let o in t) {
    if (t[o] != e[o])
      return !0;
    n++;
  }
  for (let o in e)
    r++;
  return n != r;
}
function tu(t) {
  if (t.spec.state || t.spec.filterTransaction || t.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var ln = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, pi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, nx = typeof navigator < "u" && /Mac/.test(navigator.platform), rx = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Te = 0; Te < 10; Te++) ln[48 + Te] = ln[96 + Te] = String(Te);
for (var Te = 1; Te <= 24; Te++) ln[Te + 111] = "F" + Te;
for (var Te = 65; Te <= 90; Te++)
  ln[Te] = String.fromCharCode(Te + 32), pi[Te] = String.fromCharCode(Te);
for (var Js in ln) pi.hasOwnProperty(Js) || (pi[Js] = ln[Js]);
function ox(t) {
  var e = nx && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || rx && t.shiftKey && t.key && t.key.length == 1 || t.key == "Unidentified", n = !e && t.key || (t.shiftKey ? pi : ln)[t.keyCode] || t.key || "Unidentified";
  return n == "Esc" && (n = "Escape"), n == "Del" && (n = "Delete"), n == "Left" && (n = "ArrowLeft"), n == "Up" && (n = "ArrowUp"), n == "Right" && (n = "ArrowRight"), n == "Down" && (n = "ArrowDown"), n;
}
const ix = typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : !1;
function sx(t) {
  let e = t.split(/-(?!$)/), n = e[e.length - 1];
  n == "Space" && (n = " ");
  let r, o, i, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      o = !0;
    else if (/^s(hift)?$/i.test(a))
      i = !0;
    else if (/^mod$/i.test(a))
      ix ? s = !0 : o = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (n = "Alt-" + n), o && (n = "Ctrl-" + n), s && (n = "Meta-" + n), i && (n = "Shift-" + n), n;
}
function lx(t) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let n in t)
    e[sx(n)] = t[n];
  return e;
}
function Gs(t, e, n = !0) {
  return e.altKey && (t = "Alt-" + t), e.ctrlKey && (t = "Ctrl-" + t), e.metaKey && (t = "Meta-" + t), n && e.shiftKey && (t = "Shift-" + t), t;
}
function ax(t) {
  return new ee({ props: { handleKeyDown: za(t) } });
}
function za(t) {
  let e = lx(t);
  return function(n, r) {
    let o = ox(r), i, s = e[Gs(o, r)];
    if (s && s(n.state, n.dispatch, n))
      return !0;
    if (o.length == 1 && o != " ") {
      if (r.shiftKey) {
        let l = e[Gs(o, r, !1)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
      if ((r.shiftKey || r.altKey || r.metaKey || o.charCodeAt(0) > 127) && (i = ln[r.keyCode]) && i != o) {
        let l = e[Gs(i, r)];
        if (l && l(n.state, n.dispatch, n))
          return !0;
      }
    }
    return !1;
  };
}
const ch = (t, e) => t.selection.empty ? !1 : (e && e(t.tr.deleteSelection().scrollIntoView()), !0);
function dh(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("backward", t) : n.parentOffset > 0) ? null : n;
}
const cx = (t, e, n) => {
  let r = dh(t, n);
  if (!r)
    return !1;
  let o = Fa(r);
  if (!o) {
    let s = r.blockRange(), l = s && ur(s);
    return l == null ? !1 : (e && e(t.tr.lift(s, l).scrollIntoView()), !0);
  }
  let i = o.nodeBefore;
  if (hh(t, o, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (or(i, "end") || I.isSelectable(i)))
    for (let s = r.depth; ; s--) {
      let l = ls(t.doc, r.before(s), r.after(s), O.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = t.tr.step(l);
          a.setSelection(or(i, "end") ? B.findFrom(a.doc.resolve(a.mapping.map(o.pos, -1)), -1) : I.create(a.doc, o.pos - i.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return i.isAtom && o.depth == r.depth - 1 ? (e && e(t.tr.delete(o.pos - i.nodeSize, o.pos).scrollIntoView()), !0) : !1;
}, dx = (t, e, n) => {
  let r = dh(t, n);
  if (!r)
    return !1;
  let o = Fa(r);
  return o ? uh(t, o, e) : !1;
}, ux = (t, e, n) => {
  let r = fh(t, n);
  if (!r)
    return !1;
  let o = ja(r);
  return o ? uh(t, o, e) : !1;
};
function uh(t, e, n) {
  let r = e.nodeBefore, o = r, i = e.pos - 1;
  for (; !o.isTextblock; i--) {
    if (o.type.spec.isolating)
      return !1;
    let d = o.lastChild;
    if (!d)
      return !1;
    o = d;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let d = l.firstChild;
    if (!d)
      return !1;
    l = d;
  }
  let c = ls(t.doc, i, a, O.empty);
  if (!c || c.from != i || c instanceof ve && c.slice.size >= a - i)
    return !1;
  if (n) {
    let d = t.tr.step(c);
    d.setSelection(P.create(d.doc, i)), n(d.scrollIntoView());
  }
  return !0;
}
function or(t, e, n = !1) {
  for (let r = t; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (n && r.childCount != 1)
      return !1;
  }
  return !1;
}
const fx = (t, e, n) => {
  let { $head: r, empty: o } = t.selection, i = r;
  if (!o)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("backward", t) : r.parentOffset > 0)
      return !1;
    i = Fa(r);
  }
  let s = i && i.nodeBefore;
  return !s || !I.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(I.create(t.doc, i.pos - s.nodeSize)).scrollIntoView()), !0);
};
function Fa(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      if (t.index(e) > 0)
        return t.doc.resolve(t.before(e + 1));
      if (t.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function fh(t, e) {
  let { $cursor: n } = t.selection;
  return !n || (e ? !e.endOfTextblock("forward", t) : n.parentOffset < n.parent.content.size) ? null : n;
}
const px = (t, e, n) => {
  let r = fh(t, n);
  if (!r)
    return !1;
  let o = ja(r);
  if (!o)
    return !1;
  let i = o.nodeAfter;
  if (hh(t, o, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (or(i, "start") || I.isSelectable(i))) {
    let s = ls(t.doc, r.before(), r.after(), O.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = t.tr.step(s);
        l.setSelection(or(i, "start") ? B.findFrom(l.doc.resolve(l.mapping.map(o.pos)), 1) : I.create(l.doc, l.mapping.map(o.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return i.isAtom && o.depth == r.depth - 1 ? (e && e(t.tr.delete(o.pos, o.pos + i.nodeSize).scrollIntoView()), !0) : !1;
}, hx = (t, e, n) => {
  let { $head: r, empty: o } = t.selection, i = r;
  if (!o)
    return !1;
  if (r.parent.isTextblock) {
    if (n ? !n.endOfTextblock("forward", t) : r.parentOffset < r.parent.content.size)
      return !1;
    i = ja(r);
  }
  let s = i && i.nodeAfter;
  return !s || !I.isSelectable(s) ? !1 : (e && e(t.tr.setSelection(I.create(t.doc, i.pos)).scrollIntoView()), !0);
};
function ja(t) {
  if (!t.parent.type.spec.isolating)
    for (let e = t.depth - 1; e >= 0; e--) {
      let n = t.node(e);
      if (t.index(e) + 1 < n.childCount)
        return t.doc.resolve(t.after(e + 1));
      if (n.type.spec.isolating)
        break;
    }
  return null;
}
const mx = (t, e) => {
  let n = t.selection, r = n instanceof I, o;
  if (r) {
    if (n.node.isTextblock || !fn(t.doc, n.from))
      return !1;
    o = n.from;
  } else if (o = ss(t.doc, n.from, -1), o == null)
    return !1;
  if (e) {
    let i = t.tr.join(o);
    r && i.setSelection(I.create(i.doc, o - t.doc.resolve(o).nodeBefore.nodeSize)), e(i.scrollIntoView());
  }
  return !0;
}, gx = (t, e) => {
  let n = t.selection, r;
  if (n instanceof I) {
    if (n.node.isTextblock || !fn(t.doc, n.to))
      return !1;
    r = n.to;
  } else if (r = ss(t.doc, n.to, 1), r == null)
    return !1;
  return e && e(t.tr.join(r).scrollIntoView()), !0;
}, yx = (t, e) => {
  let { $from: n, $to: r } = t.selection, o = n.blockRange(r), i = o && ur(o);
  return i == null ? !1 : (e && e(t.tr.lift(o, i).scrollIntoView()), !0);
}, bx = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  return !n.parent.type.spec.code || !n.sameParent(r) ? !1 : (e && e(t.tr.insertText(`
`).scrollIntoView()), !0);
};
function ph(t) {
  for (let e = 0; e < t.edgeCount; e++) {
    let { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
const vx = (t, e) => {
  let { $head: n, $anchor: r } = t.selection;
  if (!n.parent.type.spec.code || !n.sameParent(r))
    return !1;
  let o = n.node(-1), i = n.indexAfter(-1), s = ph(o.contentMatchAt(i));
  if (!s || !o.canReplaceWith(i, i, s))
    return !1;
  if (e) {
    let l = n.after(), a = t.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection(B.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, wx = (t, e) => {
  let n = t.selection, { $from: r, $to: o } = n;
  if (n instanceof qe || r.parent.inlineContent || o.parent.inlineContent)
    return !1;
  let i = ph(o.parent.contentMatchAt(o.indexAfter()));
  if (!i || !i.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && o.index() < o.parent.childCount ? r : o).pos, l = t.tr.insert(s, i.createAndFill());
    l.setSelection(P.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, kx = (t, e) => {
  let { $cursor: n } = t.selection;
  if (!n || n.parent.content.size)
    return !1;
  if (n.depth > 1 && n.after() != n.end(-1)) {
    let i = n.before();
    if (Jn(t.doc, i))
      return e && e(t.tr.split(i).scrollIntoView()), !0;
  }
  let r = n.blockRange(), o = r && ur(r);
  return o == null ? !1 : (e && e(t.tr.lift(r, o).scrollIntoView()), !0);
}, Sx = (t, e) => {
  let { $from: n, to: r } = t.selection, o, i = n.sharedDepth(r);
  return i == 0 ? !1 : (o = n.before(i), e && e(t.tr.setSelection(I.create(t.doc, o))), !0);
};
function xx(t, e, n) {
  let r = e.nodeBefore, o = e.nodeAfter, i = e.index();
  return !r || !o || !r.type.compatibleContent(o.type) ? !1 : !r.content.size && e.parent.canReplace(i - 1, i) ? (n && n(t.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(i, i + 1) || !(o.isTextblock || fn(t.doc, e.pos)) ? !1 : (n && n(t.tr.join(e.pos).scrollIntoView()), !0);
}
function hh(t, e, n, r) {
  let o = e.nodeBefore, i = e.nodeAfter, s, l, a = o.type.spec.isolating || i.type.spec.isolating;
  if (!a && xx(t, e, n))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = o.contentMatchAt(o.childCount)).findWrapping(i.type)) && l.matchType(s[0] || i.type).validEnd) {
    if (n) {
      let p = e.pos + i.nodeSize, h = S.empty;
      for (let y = s.length - 1; y >= 0; y--)
        h = S.from(s[y].create(null, h));
      h = S.from(o.copy(h));
      let m = t.tr.step(new ke(e.pos - 1, p, e.pos, p, new O(h, 1, 0), s.length, !0)), g = m.doc.resolve(p + 2 * s.length);
      g.nodeAfter && g.nodeAfter.type == o.type && fn(m.doc, g.pos) && m.join(g.pos), n(m.scrollIntoView());
    }
    return !0;
  }
  let d = i.type.spec.isolating || r > 0 && a ? null : B.findFrom(e, 1), u = d && d.$from.blockRange(d.$to), f = u && ur(u);
  if (f != null && f >= e.depth)
    return n && n(t.tr.lift(u, f).scrollIntoView()), !0;
  if (c && or(i, "start", !0) && or(o, "end")) {
    let p = o, h = [];
    for (; h.push(p), !p.isTextblock; )
      p = p.lastChild;
    let m = i, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (p.canReplace(p.childCount, p.childCount, m.content)) {
      if (n) {
        let y = S.empty;
        for (let v = h.length - 1; v >= 0; v--)
          y = S.from(h[v].copy(y));
        let b = t.tr.step(new ke(e.pos - h.length, e.pos + i.nodeSize, e.pos + g, e.pos + i.nodeSize - g, new O(y, h.length, 0), 0, !0));
        n(b.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function mh(t) {
  return function(e, n) {
    let r = e.selection, o = t < 0 ? r.$from : r.$to, i = o.depth;
    for (; o.node(i).isInline; ) {
      if (!i)
        return !1;
      i--;
    }
    return o.node(i).isTextblock ? (n && n(e.tr.setSelection(P.create(e.doc, t < 0 ? o.start(i) : o.end(i)))), !0) : !1;
  };
}
const Cx = mh(-1), Tx = mh(1);
function Ax(t, e = null) {
  return function(n, r) {
    let { $from: o, $to: i } = n.selection, s = o.blockRange(i), l = s && La(s, t, e);
    return l ? (r && r(n.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function nu(t, e = null) {
  return function(n, r) {
    let o = !1;
    for (let i = 0; i < n.selection.ranges.length && !o; i++) {
      let { $from: { pos: s }, $to: { pos: l } } = n.selection.ranges[i];
      n.doc.nodesBetween(s, l, (a, c) => {
        if (o)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(t, e)))
          if (a.type == t)
            o = !0;
          else {
            let d = n.doc.resolve(c), u = d.index();
            o = d.parent.canReplaceWith(u, u + 1, t);
          }
      });
    }
    if (!o)
      return !1;
    if (r) {
      let i = n.tr;
      for (let s = 0; s < n.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = n.selection.ranges[s];
        i.setBlockType(l, a, t, e);
      }
      r(i.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Mx(t, e = null) {
  return function(n, r) {
    let { $from: o, $to: i } = n.selection, s = o.blockRange(i);
    if (!s)
      return !1;
    let l = r ? n.tr : null;
    return Ex(l, s, t, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Ex(t, e, n, r = null) {
  let o = !1, i = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(n) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = s.resolve(e.start - 2);
    i = new si(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new si(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), o = !0;
  }
  let l = La(i, n, r, e);
  return l ? (t && Ox(t, e, l, o, n), !0) : !1;
}
function Ox(t, e, n, r, o) {
  let i = S.empty;
  for (let d = n.length - 1; d >= 0; d--)
    i = S.from(n[d].type.create(n[d].attrs, i));
  t.step(new ke(e.start - (r ? 2 : 0), e.end, e.start, e.end, new O(i, 0, 0), n.length, !0));
  let s = 0;
  for (let d = 0; d < n.length; d++)
    n[d].type == o && (s = d + 1);
  let l = n.length - s, a = e.start + n.length - (r ? 2 : 0), c = e.parent;
  for (let d = e.startIndex, u = e.endIndex, f = !0; d < u; d++, f = !1)
    !f && Jn(t.doc, a, l) && (t.split(a, l), a += 2 * l), a += c.child(d).nodeSize;
  return t;
}
function Lx(t) {
  return function(e, n) {
    let { $from: r, $to: o } = e.selection, i = r.blockRange(o, (s) => s.childCount > 0 && s.firstChild.type == t);
    return i ? n ? r.node(i.depth - 1).type == t ? Vx(e, n, t, i) : Hx(e, n, i) : !0 : !1;
  };
}
function Vx(t, e, n, r) {
  let o = t.tr, i = r.end, s = r.$to.end(r.depth);
  i < s && (o.step(new ke(i - 1, s, i, s, new O(S.from(n.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new si(o.doc.resolve(r.$from.pos), o.doc.resolve(s), r.depth));
  const l = ur(r);
  if (l == null)
    return !1;
  o.lift(r, l);
  let a = o.doc.resolve(o.mapping.map(i, -1) - 1);
  return fn(o.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && o.join(a.pos), e(o.scrollIntoView()), !0;
}
function Hx(t, e, n) {
  let r = t.tr, o = n.parent;
  for (let p = n.end, h = n.endIndex - 1, m = n.startIndex; h > m; h--)
    p -= o.child(h).nodeSize, r.delete(p - 1, p + 1);
  let i = r.doc.resolve(n.start), s = i.nodeAfter;
  if (r.mapping.map(n.end) != n.start + i.nodeAfter.nodeSize)
    return !1;
  let l = n.startIndex == 0, a = n.endIndex == o.childCount, c = i.node(-1), d = i.index(-1);
  if (!c.canReplace(d + (l ? 0 : 1), d + 1, s.content.append(a ? S.empty : S.from(o))))
    return !1;
  let u = i.pos, f = u + s.nodeSize;
  return r.step(new ke(u - (l ? 1 : 0), f + (a ? 1 : 0), u + 1, f - 1, new O((l ? S.empty : S.from(o.copy(S.empty))).append(a ? S.empty : S.from(o.copy(S.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function Rx(t) {
  return function(e, n) {
    let { $from: r, $to: o } = e.selection, i = r.blockRange(o, (c) => c.childCount > 0 && c.firstChild.type == t);
    if (!i)
      return !1;
    let s = i.startIndex;
    if (s == 0)
      return !1;
    let l = i.parent, a = l.child(s - 1);
    if (a.type != t)
      return !1;
    if (n) {
      let c = a.lastChild && a.lastChild.type == l.type, d = S.from(c ? t.create() : null), u = new O(S.from(t.create(null, S.from(l.type.create(null, d)))), c ? 3 : 1, 0), f = i.start, p = i.end;
      n(e.tr.step(new ke(f - (c ? 3 : 1), p, f, p, u, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
var Nx = Object.defineProperty, gh = (t, e) => {
  for (var n in e)
    Nx(t, n, { get: e[n], enumerable: !0 });
};
function fs(t) {
  const { state: e, transaction: n } = t;
  let { selection: r } = n, { doc: o } = n, { storedMarks: i } = n;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return i;
    },
    get selection() {
      return r;
    },
    get doc() {
      return o;
    },
    get tr() {
      return r = n.selection, o = n.doc, i = n.storedMarks, n;
    }
  };
}
var ps = class {
  constructor(t) {
    this.editor = t.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = t.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: t, editor: e, state: n } = this, { view: r } = e, { tr: o } = n, i = this.buildProps(o);
    return Object.fromEntries(
      Object.entries(t).map(([s, l]) => [s, (...c) => {
        const d = l(...c)(i);
        return !o.getMeta("preventDispatch") && !this.hasCustomState && r.dispatch(o), d;
      }])
    );
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(t, e = !0) {
    const { rawCommands: n, editor: r, state: o } = this, { view: i } = r, s = [], l = !!t, a = t || o.tr, c = () => (!l && e && !a.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(a), s.every((u) => u === !0)), d = {
      ...Object.fromEntries(
        Object.entries(n).map(([u, f]) => [u, (...h) => {
          const m = this.buildProps(a, e), g = f(...h)(m);
          return s.push(g), d;
        }])
      ),
      run: c
    };
    return d;
  }
  createCan(t) {
    const { rawCommands: e, state: n } = this, r = !1, o = t || n.tr, i = this.buildProps(o, r);
    return {
      ...Object.fromEntries(
        Object.entries(e).map(([l, a]) => [l, (...c) => a(...c)({ ...i, dispatch: void 0 })])
      ),
      chain: () => this.createChain(o, r)
    };
  }
  buildProps(t, e = !0) {
    const { rawCommands: n, editor: r, state: o } = this, { view: i } = r, s = {
      tr: t,
      editor: r,
      view: i,
      state: fs({
        state: o,
        transaction: t
      }),
      dispatch: e ? () => {
      } : void 0,
      chain: () => this.createChain(t, e),
      can: () => this.createCan(t),
      get commands() {
        return Object.fromEntries(
          Object.entries(n).map(([l, a]) => [l, (...c) => a(...c)(s)])
        );
      }
    };
    return s;
  }
}, _x = class {
  constructor() {
    this.callbacks = {};
  }
  on(t, e) {
    return this.callbacks[t] || (this.callbacks[t] = []), this.callbacks[t].push(e), this;
  }
  emit(t, ...e) {
    const n = this.callbacks[t];
    return n && n.forEach((r) => r.apply(this, e)), this;
  }
  off(t, e) {
    const n = this.callbacks[t];
    return n && (e ? this.callbacks[t] = n.filter((r) => r !== e) : delete this.callbacks[t]), this;
  }
  once(t, e) {
    const n = (...r) => {
      this.off(t, n), e.apply(this, r);
    };
    return this.on(t, n);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
};
function yh(t, e) {
  const n = new Va(t);
  return e.forEach((r) => {
    r.steps.forEach((o) => {
      n.step(o);
    });
  }), n;
}
var bh = (t) => {
  const e = t.childNodes;
  for (let n = e.length - 1; n >= 0; n -= 1) {
    const r = e[n];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? t.removeChild(r) : r.nodeType === 1 && bh(r);
  }
  return t;
};
function To(t) {
  if (typeof window > "u")
    throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
  const e = `<body>${t}</body>`, n = new window.DOMParser().parseFromString(e, "text/html").body;
  return bh(n);
}
function Gr(t, e, n) {
  if (t instanceof Lt || t instanceof S)
    return t;
  n = {
    slice: !0,
    parseOptions: {},
    ...n
  };
  const r = typeof t == "object" && t !== null, o = typeof t == "string";
  if (r)
    try {
      if (Array.isArray(t) && t.length > 0)
        return S.fromArray(t.map((l) => e.nodeFromJSON(l)));
      const s = e.nodeFromJSON(t);
      return n.errorOnInvalidContent && s.check(), s;
    } catch (i) {
      if (n.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: i });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", t, "Error:", i), Gr("", e, n);
    }
  if (o) {
    if (n.errorOnInvalidContent) {
      let s = !1, l = "";
      const a = new dp({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (n.slice ? nn.fromSchema(a).parseSlice(To(t), n.parseOptions) : nn.fromSchema(a).parse(To(t), n.parseOptions), n.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", {
          cause: new Error(`Invalid element found: ${l}`)
        });
    }
    const i = nn.fromSchema(e);
    return n.slice ? i.parseSlice(To(t), n.parseOptions).content : i.parse(To(t), n.parseOptions);
  }
  return Gr("", e, n);
}
function Il(t, e, n = {}, r = {}) {
  return Gr(t, e, {
    slice: !1,
    parseOptions: n,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
function Ix(t) {
  for (let e = 0; e < t.edgeCount; e += 1) {
    const { type: n } = t.edge(e);
    if (n.isTextblock && !n.hasRequiredAttrs())
      return n;
  }
  return null;
}
function Dx(t, e, n) {
  const r = [];
  return t.nodesBetween(e.from, e.to, (o, i) => {
    n(o) && r.push({
      node: o,
      pos: i
    });
  }), r;
}
function vh(t, e) {
  for (let n = t.depth; n > 0; n -= 1) {
    const r = t.node(n);
    if (e(r))
      return {
        pos: n > 0 ? t.before(n) : 0,
        start: t.start(n),
        depth: n,
        node: r
      };
  }
}
function hs(t) {
  return (e) => vh(e.$from, t);
}
function D(t, e, n) {
  return t.config[e] === void 0 && t.parent ? D(t.parent, e, n) : typeof t.config[e] == "function" ? t.config[e].bind({
    ...n,
    parent: t.parent ? D(t.parent, e, n) : null
  }) : t.config[e];
}
function Wa(t) {
  return t.map((e) => {
    const n = {
      name: e.name,
      options: e.options,
      storage: e.storage
    }, r = D(e, "addExtensions", n);
    return r ? [e, ...Wa(r())] : e;
  }).flat(10);
}
function Ua(t, e) {
  const n = un.fromSchema(e).serializeFragment(t), o = document.implementation.createHTMLDocument().createElement("div");
  return o.appendChild(n), o.innerHTML;
}
function wh(t) {
  return typeof t == "function";
}
function q(t, e = void 0, ...n) {
  return wh(t) ? e ? t.bind(e)(...n) : t(...n) : t;
}
function Px(t = {}) {
  return Object.keys(t).length === 0 && t.constructor === Object;
}
function Zr(t) {
  const e = t.filter((o) => o.type === "extension"), n = t.filter((o) => o.type === "node"), r = t.filter((o) => o.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: n,
    markExtensions: r
  };
}
function kh(t) {
  const e = [], { nodeExtensions: n, markExtensions: r } = Zr(t), o = [...n, ...r], i = {
    default: null,
    validate: void 0,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return t.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: o
    }, a = D(
      s,
      "addGlobalAttributes",
      l
    );
    if (!a)
      return;
    a().forEach((d) => {
      d.types.forEach((u) => {
        Object.entries(d.attributes).forEach(([f, p]) => {
          e.push({
            type: u,
            name: f,
            attribute: {
              ...i,
              ...p
            }
          });
        });
      });
    });
  }), o.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, a = D(
      s,
      "addAttributes",
      l
    );
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([d, u]) => {
      const f = {
        ...i,
        ...u
      };
      typeof (f == null ? void 0 : f.default) == "function" && (f.default = f.default()), f != null && f.isRequired && (f == null ? void 0 : f.default) === void 0 && delete f.default, e.push({
        type: s.name,
        name: d,
        attribute: f
      });
    });
  }), e;
}
function J(...t) {
  return t.filter((e) => !!e).reduce((e, n) => {
    const r = { ...e };
    return Object.entries(n).forEach(([o, i]) => {
      if (!r[o]) {
        r[o] = i;
        return;
      }
      if (o === "class") {
        const l = i ? String(i).split(" ") : [], a = r[o] ? r[o].split(" ") : [], c = l.filter((d) => !a.includes(d));
        r[o] = [...a, ...c].join(" ");
      } else if (o === "style") {
        const l = i ? i.split(";").map((d) => d.trim()).filter(Boolean) : [], a = r[o] ? r[o].split(";").map((d) => d.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((d) => {
          const [u, f] = d.split(":").map((p) => p.trim());
          c.set(u, f);
        }), l.forEach((d) => {
          const [u, f] = d.split(":").map((p) => p.trim());
          c.set(u, f);
        }), r[o] = Array.from(c.entries()).map(([d, u]) => `${d}: ${u}`).join("; ");
      } else
        r[o] = i;
    }), r;
  }, {});
}
function hi(t, e) {
  return e.filter((n) => n.type === t.type.name).filter((n) => n.attribute.rendered).map((n) => n.attribute.renderHTML ? n.attribute.renderHTML(t.attrs) || {} : {
    [n.name]: t.attrs[n.name]
  }).reduce((n, r) => J(n, r), {});
}
function Bx(t) {
  return typeof t != "string" ? t : t.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(t) : t === "true" ? !0 : t === "false" ? !1 : t;
}
function ru(t, e) {
  return "style" in t ? t : {
    ...t,
    getAttrs: (n) => {
      const r = t.getAttrs ? t.getAttrs(n) : t.attrs;
      if (r === !1)
        return !1;
      const o = e.reduce((i, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(n) : Bx(n.getAttribute(s.name));
        return l == null ? i : {
          ...i,
          [s.name]: l
        };
      }, {});
      return { ...r, ...o };
    }
  };
}
function ou(t) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(t).filter(([e, n]) => e === "attrs" && Px(n) ? !1 : n != null)
  );
}
function Sh(t, e) {
  var n;
  const r = kh(t), { nodeExtensions: o, markExtensions: i } = Zr(t), s = (n = o.find((c) => D(c, "topNode"))) == null ? void 0 : n.name, l = Object.fromEntries(
    o.map((c) => {
      const d = r.filter((y) => y.type === c.name), u = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, f = t.reduce((y, b) => {
        const v = D(b, "extendNodeSchema", u);
        return {
          ...y,
          ...v ? v(c) : {}
        };
      }, {}), p = ou({
        ...f,
        content: q(D(c, "content", u)),
        marks: q(D(c, "marks", u)),
        group: q(D(c, "group", u)),
        inline: q(D(c, "inline", u)),
        atom: q(D(c, "atom", u)),
        selectable: q(D(c, "selectable", u)),
        draggable: q(D(c, "draggable", u)),
        code: q(D(c, "code", u)),
        whitespace: q(D(c, "whitespace", u)),
        linebreakReplacement: q(
          D(c, "linebreakReplacement", u)
        ),
        defining: q(D(c, "defining", u)),
        isolating: q(D(c, "isolating", u)),
        attrs: Object.fromEntries(
          d.map((y) => {
            var b, v;
            return [
              y.name,
              { default: (b = y == null ? void 0 : y.attribute) == null ? void 0 : b.default, validate: (v = y == null ? void 0 : y.attribute) == null ? void 0 : v.validate }
            ];
          })
        )
      }), h = q(D(c, "parseHTML", u));
      h && (p.parseDOM = h.map(
        (y) => ru(y, d)
      ));
      const m = D(c, "renderHTML", u);
      m && (p.toDOM = (y) => m({
        node: y,
        HTMLAttributes: hi(y, d)
      }));
      const g = D(c, "renderText", u);
      return g && (p.toText = g), [c.name, p];
    })
  ), a = Object.fromEntries(
    i.map((c) => {
      const d = r.filter((g) => g.type === c.name), u = {
        name: c.name,
        options: c.options,
        storage: c.storage,
        editor: e
      }, f = t.reduce((g, y) => {
        const b = D(y, "extendMarkSchema", u);
        return {
          ...g,
          ...b ? b(c) : {}
        };
      }, {}), p = ou({
        ...f,
        inclusive: q(D(c, "inclusive", u)),
        excludes: q(D(c, "excludes", u)),
        group: q(D(c, "group", u)),
        spanning: q(D(c, "spanning", u)),
        code: q(D(c, "code", u)),
        attrs: Object.fromEntries(
          d.map((g) => {
            var y, b;
            return [
              g.name,
              { default: (y = g == null ? void 0 : g.attribute) == null ? void 0 : y.default, validate: (b = g == null ? void 0 : g.attribute) == null ? void 0 : b.validate }
            ];
          })
        )
      }), h = q(D(c, "parseHTML", u));
      h && (p.parseDOM = h.map(
        (g) => ru(g, d)
      ));
      const m = D(c, "renderHTML", u);
      return m && (p.toDOM = (g) => m({
        mark: g,
        HTMLAttributes: hi(g, d)
      })), [c.name, p];
    })
  );
  return new dp({
    topNode: s,
    nodes: l,
    marks: a
  });
}
function $x(t) {
  const e = t.filter((n, r) => t.indexOf(n) !== r);
  return Array.from(new Set(e));
}
function Ka(t) {
  return t.sort((n, r) => {
    const o = D(n, "priority") || 100, i = D(r, "priority") || 100;
    return o > i ? -1 : o < i ? 1 : 0;
  });
}
function qa(t) {
  const e = Ka(Wa(t)), n = $x(e.map((r) => r.name));
  return n.length && console.warn(
    `[tiptap warn]: Duplicate extension names found: [${n.map((r) => `'${r}'`).join(", ")}]. This can lead to issues.`
  ), e;
}
function zx(t, e) {
  const n = qa(t);
  return Sh(n, e);
}
function xh(t, e, n) {
  const { from: r, to: o } = e, { blockSeparator: i = `

`, textSerializers: s = {} } = n || {};
  let l = "";
  return t.nodesBetween(r, o, (a, c, d, u) => {
    var f;
    a.isBlock && c > r && (l += i);
    const p = s == null ? void 0 : s[a.type.name];
    if (p)
      return d && (l += p({
        node: a,
        pos: c,
        parent: d,
        index: u,
        range: e
      })), !1;
    a.isText && (l += (f = a == null ? void 0 : a.text) == null ? void 0 : f.slice(Math.max(r, c) - c, o - c));
  }), l;
}
function Fx(t, e) {
  const n = {
    from: 0,
    to: t.content.size
  };
  return xh(t, n, e);
}
function Ch(t) {
  return Object.fromEntries(
    Object.entries(t.nodes).filter(([, e]) => e.spec.toText).map(([e, n]) => [e, n.spec.toText])
  );
}
function Bt(t, e) {
  if (typeof t == "string") {
    if (!e.marks[t])
      throw Error(`There is no mark type named '${t}'. Maybe you forgot to add the extension?`);
    return e.marks[t];
  }
  return t;
}
function Th(t, e) {
  const n = Bt(e, t.schema), { from: r, to: o, empty: i } = t.selection, s = [];
  i ? (t.storedMarks && s.push(...t.storedMarks), s.push(...t.selection.$head.marks())) : t.doc.nodesBetween(r, o, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === n.name);
  return l ? { ...l.attrs } : {};
}
function pe(t, e) {
  if (typeof t == "string") {
    if (!e.nodes[t])
      throw Error(`There is no node type named '${t}'. Maybe you forgot to add the extension?`);
    return e.nodes[t];
  }
  return t;
}
function jx(t, e) {
  const n = pe(e, t.schema), { from: r, to: o } = t.selection, i = [];
  t.doc.nodesBetween(r, o, (l) => {
    i.push(l);
  });
  const s = i.reverse().find((l) => l.type.name === n.name);
  return s ? { ...s.attrs } : {};
}
function ms(t, e) {
  return e.nodes[t] ? "node" : e.marks[t] ? "mark" : null;
}
function Ah(t, e) {
  const n = ms(
    typeof e == "string" ? e : e.name,
    t.schema
  );
  return n === "node" ? jx(t, e) : n === "mark" ? Th(t, e) : {};
}
function Wx(t, e = JSON.stringify) {
  const n = {};
  return t.filter((r) => {
    const o = e(r);
    return Object.prototype.hasOwnProperty.call(n, o) ? !1 : n[o] = !0;
  });
}
function Ux(t) {
  const e = Wx(t);
  return e.length === 1 ? e : e.filter((n, r) => !e.filter((i, s) => s !== r).some((i) => n.oldRange.from >= i.oldRange.from && n.oldRange.to <= i.oldRange.to && n.newRange.from >= i.newRange.from && n.newRange.to <= i.newRange.to));
}
function Mh(t) {
  const { mapping: e, steps: n } = t, r = [];
  return e.maps.forEach((o, i) => {
    const s = [];
    if (o.ranges.length)
      o.forEach((l, a) => {
        s.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = n[i];
      if (l === void 0 || a === void 0)
        return;
      s.push({ from: l, to: a });
    }
    s.forEach(({ from: l, to: a }) => {
      const c = e.slice(i).map(l, -1), d = e.slice(i).map(a), u = e.invert().map(c, -1), f = e.invert().map(d);
      r.push({
        oldRange: {
          from: u,
          to: f
        },
        newRange: {
          from: c,
          to: d
        }
      });
    });
  }), Ux(r);
}
function Ja(t) {
  return Object.prototype.toString.call(t) === "[object RegExp]";
}
function mi(t, e, n = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((o) => n.strict ? e[o] === t[o] : Ja(e[o]) ? e[o].test(t[o]) : e[o] === t[o]) : !0;
}
function Eh(t, e, n = {}) {
  return t.find((r) => r.type === e && mi(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(n).map((o) => [o, r.attrs[o]])),
    n
  ));
}
function iu(t, e, n = {}) {
  return !!Eh(t, e, n);
}
function gs(t, e, n) {
  var r;
  if (!t || !e)
    return;
  let o = t.parent.childAfter(t.parentOffset);
  if ((!o.node || !o.node.marks.some((d) => d.type === e)) && (o = t.parent.childBefore(t.parentOffset)), !o.node || !o.node.marks.some((d) => d.type === e) || (n = n || ((r = o.node.marks[0]) == null ? void 0 : r.attrs), !Eh([...o.node.marks], e, n)))
    return;
  let s = o.index, l = t.start() + o.offset, a = s + 1, c = l + o.node.nodeSize;
  for (; s > 0 && iu([...t.parent.child(s - 1).marks], e, n); )
    s -= 1, l -= t.parent.child(s).nodeSize;
  for (; a < t.parent.childCount && iu([...t.parent.child(a).marks], e, n); )
    c += t.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function Ga(t, e, n) {
  const r = [];
  return t === e ? n.resolve(t).marks().forEach((o) => {
    const i = n.resolve(t), s = gs(i, o.type);
    s && r.push({
      mark: o,
      ...s
    });
  }) : n.nodesBetween(t, e, (o, i) => {
    !o || (o == null ? void 0 : o.nodeSize) === void 0 || r.push(
      ...o.marks.map((s) => ({
        from: i,
        to: i + o.nodeSize,
        mark: s
      }))
    );
  }), r;
}
var Kx = (t, e, n, r = 20) => {
  const o = t.doc.resolve(n);
  let i = r, s = null;
  for (; i > 0 && s === null; ) {
    const l = o.node(i);
    (l == null ? void 0 : l.type.name) === e ? s = l : i -= 1;
  }
  return [s, i];
};
function Zs(t, e) {
  return e.nodes[t] || e.marks[t] || null;
}
function Wo(t, e, n) {
  return Object.fromEntries(
    Object.entries(n).filter(([r]) => {
      const o = t.find((i) => i.type === e && i.name === r);
      return o ? o.attribute.keepOnSplit : !1;
    })
  );
}
var qx = (t, e = 500) => {
  let n = "";
  const r = t.parentOffset;
  return t.parent.nodesBetween(Math.max(0, r - e), r, (o, i, s, l) => {
    var a, c;
    const d = ((c = (a = o.type.spec).toText) == null ? void 0 : c.call(a, {
      node: o,
      pos: i,
      parent: s,
      index: l
    })) || o.textContent || "%leaf%";
    n += o.isAtom && !o.isText ? d : d.slice(0, Math.max(0, r - i));
  }), n;
};
function Dl(t, e, n = {}) {
  const { empty: r, ranges: o } = t.selection, i = e ? Bt(e, t.schema) : null;
  if (r)
    return !!(t.storedMarks || t.selection.$from.marks()).filter((u) => i ? i.name === u.type.name : !0).find((u) => mi(u.attrs, n, { strict: !1 }));
  let s = 0;
  const l = [];
  if (o.forEach(({ $from: u, $to: f }) => {
    const p = u.pos, h = f.pos;
    t.doc.nodesBetween(p, h, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(p, g), b = Math.min(h, g + m.nodeSize), v = b - y;
      s += v, l.push(
        ...m.marks.map((x) => ({
          mark: x,
          from: y,
          to: b
        }))
      );
    });
  }), s === 0)
    return !1;
  const a = l.filter((u) => i ? i.name === u.mark.type.name : !0).filter((u) => mi(u.mark.attrs, n, { strict: !1 })).reduce((u, f) => u + f.to - f.from, 0), c = l.filter((u) => i ? u.mark.type !== i && u.mark.type.excludes(i) : !0).reduce((u, f) => u + f.to - f.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function an(t, e, n = {}) {
  const { from: r, to: o, empty: i } = t.selection, s = e ? pe(e, t.schema) : null, l = [];
  t.doc.nodesBetween(r, o, (u, f) => {
    if (u.isText)
      return;
    const p = Math.max(r, f), h = Math.min(o, f + u.nodeSize);
    l.push({
      node: u,
      from: p,
      to: h
    });
  });
  const a = o - r, c = l.filter((u) => s ? s.name === u.node.type.name : !0).filter((u) => mi(u.node.attrs, n, { strict: !1 }));
  return i ? !!c.length : c.reduce((u, f) => u + f.to - f.from, 0) >= a;
}
function Jx(t, e, n = {}) {
  if (!e)
    return an(t, null, n) || Dl(t, null, n);
  const r = ms(e, t.schema);
  return r === "node" ? an(t, e, n) : r === "mark" ? Dl(t, e, n) : !1;
}
var Gx = (t, e) => {
  const { $from: n, $to: r, $anchor: o } = t.selection;
  if (e) {
    const i = hs((l) => l.type.name === e)(t.selection);
    if (!i)
      return !1;
    const s = t.doc.resolve(i.pos + 1);
    return o.pos + 1 === s.end();
  }
  return !(r.parentOffset < r.parent.nodeSize - 2 || n.pos !== r.pos);
}, Zx = (t) => {
  const { $from: e, $to: n } = t.selection;
  return !(e.parentOffset > 0 || e.pos !== n.pos);
};
function su(t, e) {
  return Array.isArray(e) ? e.some((n) => (typeof n == "string" ? n : n.name) === t.name) : e;
}
function lu(t, e) {
  const { nodeExtensions: n } = Zr(e), r = n.find((s) => s.name === t);
  if (!r)
    return !1;
  const o = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, i = q(D(r, "group", o));
  return typeof i != "string" ? !1 : i.split(" ").includes("list");
}
function ys(t, {
  checkChildren: e = !0,
  ignoreWhitespace: n = !1
} = {}) {
  var r;
  if (n) {
    if (t.type.name === "hardBreak")
      return !0;
    if (t.isText)
      return /^\s*$/m.test((r = t.text) != null ? r : "");
  }
  if (t.isText)
    return !t.text;
  if (t.isAtom || t.isLeaf)
    return !1;
  if (t.content.childCount === 0)
    return !0;
  if (e) {
    let o = !0;
    return t.content.forEach((i) => {
      o !== !1 && (ys(i, { ignoreWhitespace: n, checkChildren: e }) || (o = !1));
    }), o;
  }
  return !1;
}
function Oh(t) {
  return t instanceof I;
}
function Za(t) {
  return t instanceof P;
}
function Ot(t = 0, e = 0, n = 0) {
  return Math.min(Math.max(t, e), n);
}
function Xx(t, e, n) {
  const o = t.state.doc.content.size, i = Ot(e, 0, o), s = Ot(n, 0, o), l = t.coordsAtPos(i), a = t.coordsAtPos(s, -1), c = Math.min(l.top, a.top), d = Math.max(l.bottom, a.bottom), u = Math.min(l.left, a.left), f = Math.max(l.right, a.right), p = f - u, h = d - c, y = {
    top: c,
    bottom: d,
    left: u,
    right: f,
    width: p,
    height: h,
    x: u,
    y: c
  };
  return {
    ...y,
    toJSON: () => y
  };
}
function Lh(t, e = null) {
  if (!e)
    return null;
  const n = B.atStart(t), r = B.atEnd(t);
  if (e === "start" || e === !0)
    return n;
  if (e === "end")
    return r;
  const o = n.from, i = r.to;
  return e === "all" ? P.create(t, Ot(0, o, i), Ot(t.content.size, o, i)) : P.create(t, Ot(e, o, i), Ot(e, o, i));
}
function Yx(t, e, n) {
  const r = t.steps.length - 1;
  if (r < e)
    return;
  const o = t.steps[r];
  if (!(o instanceof ve || o instanceof ke))
    return;
  const i = t.mapping.maps[r];
  let s = 0;
  i.forEach((l, a, c, d) => {
    s === 0 && (s = d);
  }), t.setSelection(B.near(t.doc.resolve(s), n));
}
var bs = class {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}, Qx = (t, e) => {
  if (Ja(e))
    return e.exec(t);
  const n = e(t);
  if (!n)
    return null;
  const r = [n.text];
  return r.index = n.index, r.input = t, r.data = n.data, n.replaceWith && (n.text.includes(n.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(n.replaceWith)), r;
};
function Ao(t) {
  var e;
  const { editor: n, from: r, to: o, text: i, rules: s, plugin: l } = t, { view: a } = n;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || (e = c.nodeBefore || c.nodeAfter) != null && e.marks.find((f) => f.type.spec.code)
  )
    return !1;
  let d = !1;
  const u = qx(c) + i;
  return s.forEach((f) => {
    if (d)
      return;
    const p = Qx(u, f.find);
    if (!p)
      return;
    const h = a.state.tr, m = fs({
      state: a.state,
      transaction: h
    }), g = {
      from: r - (p[0].length - i.length),
      to: o
    }, { commands: y, chain: b, can: v } = new ps({
      editor: n,
      state: m
    });
    f.handler({
      state: m,
      range: g,
      match: p,
      commands: y,
      chain: b,
      can: v
    }) === null || !h.steps.length || (h.setMeta(l, {
      transform: h,
      from: r,
      to: o,
      text: i
    }), a.dispatch(h), d = !0);
  }), d;
}
function eC(t) {
  const { editor: e, rules: n } = t, r = new ee({
    state: {
      init() {
        return null;
      },
      apply(o, i, s) {
        const l = o.getMeta(r);
        if (l)
          return l;
        const a = o.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: d } = a;
          typeof d == "string" ? d = d : d = Ua(S.from(d), s.schema);
          const { from: u } = a, f = u + d.length;
          Ao({
            editor: e,
            from: u,
            to: f,
            text: d,
            rules: n,
            plugin: r
          });
        }), o.selectionSet || o.docChanged ? null : i;
      }
    },
    props: {
      handleTextInput(o, i, s, l) {
        return Ao({
          editor: e,
          from: i,
          to: s,
          text: l,
          rules: n,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (o) => (setTimeout(() => {
          const { $cursor: i } = o.state.selection;
          i && Ao({
            editor: e,
            from: i.pos,
            to: i.pos,
            text: "",
            rules: n,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(o, i) {
        if (i.key !== "Enter")
          return !1;
        const { $cursor: s } = o.state.selection;
        return s ? Ao({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: n,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function tC(t) {
  return Object.prototype.toString.call(t).slice(8, -1);
}
function Mo(t) {
  return tC(t) !== "Object" ? !1 : t.constructor === Object && Object.getPrototypeOf(t) === Object.prototype;
}
function Vh(t, e) {
  const n = { ...t };
  return Mo(t) && Mo(e) && Object.keys(e).forEach((r) => {
    Mo(e[r]) && Mo(t[r]) ? n[r] = Vh(t[r], e[r]) : n[r] = e[r];
  }), n;
}
var Xa = class {
  constructor(t = {}) {
    this.type = "extendable", this.parent = null, this.child = null, this.name = "", this.config = {
      name: this.name
    }, this.config = {
      ...this.config,
      ...t
    }, this.name = this.config.name;
  }
  get options() {
    return {
      ...q(
        D(this, "addOptions", {
          name: this.name
        })
      ) || {}
    };
  }
  get storage() {
    return {
      ...q(
        D(this, "addStorage", {
          name: this.name,
          options: this.options
        })
      ) || {}
    };
  }
  configure(t = {}) {
    const e = this.extend({
      ...this.config,
      addOptions: () => Vh(this.options, t)
    });
    return e.name = this.name, e.parent = this.parent, e;
  }
  extend(t = {}) {
    const e = new this.constructor({ ...this.config, ...t });
    return e.parent = this, this.child = e, e.name = "name" in t ? t.name : e.parent.name, e;
  }
}, at = class Hh extends Xa {
  constructor() {
    super(...arguments), this.type = "mark";
  }
  /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Hh(n);
  }
  static handleExit({ editor: e, mark: n }) {
    const { tr: r } = e.state, o = e.state.selection.$from;
    if (o.pos === o.end()) {
      const s = o.marks();
      if (!!!s.find((c) => (c == null ? void 0 : c.type.name) === n.name))
        return !1;
      const a = s.find((c) => (c == null ? void 0 : c.type.name) === n.name);
      return a && r.removeStoredMark(a), r.insertText(" ", o.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
};
function nC(t) {
  return typeof t == "number";
}
var rC = class {
  constructor(t) {
    this.find = t.find, this.handler = t.handler;
  }
}, oC = (t, e, n) => {
  if (Ja(e))
    return [...t.matchAll(e)];
  const r = e(t, n);
  return r ? r.map((o) => {
    const i = [o.text];
    return i.index = o.index, i.input = t, i.data = o.data, o.replaceWith && (o.text.includes(o.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(o.replaceWith)), i;
  }) : [];
};
function iC(t) {
  const { editor: e, state: n, from: r, to: o, rule: i, pasteEvent: s, dropEvent: l } = t, { commands: a, chain: c, can: d } = new ps({
    editor: e,
    state: n
  }), u = [];
  return n.doc.nodesBetween(r, o, (p, h) => {
    var m, g, y, b, v;
    if ((g = (m = p.type) == null ? void 0 : m.spec) != null && g.code || !(p.isText || p.isTextblock || p.isInline))
      return;
    const x = (v = (b = (y = p.content) == null ? void 0 : y.size) != null ? b : p.nodeSize) != null ? v : 0, k = Math.max(r, h), w = Math.min(o, h + x);
    if (k >= w)
      return;
    const L = p.isText ? p.text || "" : p.textBetween(k - h, w - h, void 0, "￼");
    oC(L, i.find, s).forEach((A) => {
      if (A.index === void 0)
        return;
      const R = k + A.index + 1, N = R + A[0].length, U = {
        from: n.tr.mapping.map(R),
        to: n.tr.mapping.map(N)
      }, K = i.handler({
        state: n,
        range: U,
        match: A,
        commands: a,
        chain: c,
        can: d,
        pasteEvent: s,
        dropEvent: l
      });
      u.push(K);
    });
  }), u.every((p) => p !== null);
}
var Eo = null, sC = (t) => {
  var e;
  const n = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = n.clipboardData) == null || e.setData("text/html", t), n;
};
function lC(t) {
  const { editor: e, rules: n } = t;
  let r = null, o = !1, i = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({
    state: d,
    from: u,
    to: f,
    rule: p,
    pasteEvt: h
  }) => {
    const m = d.tr, g = fs({
      state: d,
      transaction: m
    });
    if (!(!iC({
      editor: e,
      state: g,
      from: Math.max(u - 1, 0),
      to: f.b - 1,
      rule: p,
      pasteEvent: h,
      dropEvent: l
    }) || !m.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return n.map((d) => new ee({
    // we register a global drag handler to track the current drag source element
    view(u) {
      const f = (h) => {
        var m;
        r = (m = u.dom.parentElement) != null && m.contains(h.target) ? u.dom.parentElement : null, r && (Eo = e);
      }, p = () => {
        Eo && (Eo = null);
      };
      return window.addEventListener("dragstart", f), window.addEventListener("dragend", p), {
        destroy() {
          window.removeEventListener("dragstart", f), window.removeEventListener("dragend", p);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (u, f) => {
          if (i = r === u.dom.parentElement, l = f, !i) {
            const p = Eo;
            p != null && p.isEditable && setTimeout(() => {
              const h = p.state.selection;
              h && p.commands.deleteRange({ from: h.from, to: h.to });
            }, 10);
          }
          return !1;
        },
        paste: (u, f) => {
          var p;
          const h = (p = f.clipboardData) == null ? void 0 : p.getData("text/html");
          return s = f, o = !!(h != null && h.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (u, f, p) => {
      const h = u[0], m = h.getMeta("uiEvent") === "paste" && !o, g = h.getMeta("uiEvent") === "drop" && !i, y = h.getMeta("applyPasteRules"), b = !!y;
      if (!m && !g && !b)
        return;
      if (b) {
        let { text: k } = y;
        typeof k == "string" ? k = k : k = Ua(S.from(k), p.schema);
        const { from: w } = y, L = w + k.length, E = sC(k);
        return a({
          rule: d,
          state: p,
          from: w,
          to: { b: L },
          pasteEvt: E
        });
      }
      const v = f.doc.content.findDiffStart(p.doc.content), x = f.doc.content.findDiffEnd(p.doc.content);
      if (!(!nC(v) || !x || v === x.b))
        return a({
          rule: d,
          state: p,
          from: v,
          to: x,
          pasteEvt: s
        });
    }
  }));
}
var vs = class {
  constructor(t, e) {
    this.splittableMarks = [], this.editor = e, this.extensions = qa(t), this.schema = Sh(this.extensions, e), this.setupExtensions();
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((t, e) => {
      const n = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: Zs(e.name, this.schema)
      }, r = D(e, "addCommands", n);
      return r ? {
        ...t,
        ...r()
      } : t;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: t } = this;
    return Ka([...this.extensions].reverse()).map((r) => {
      const o = {
        name: r.name,
        options: r.options,
        storage: this.editor.extensionStorage[r.name],
        editor: t,
        type: Zs(r.name, this.schema)
      }, i = [], s = D(
        r,
        "addKeyboardShortcuts",
        o
      );
      let l = {};
      if (r.type === "mark" && D(r, "exitable", o) && (l.ArrowRight = () => at.handleExit({ editor: t, mark: r })), s) {
        const f = Object.fromEntries(
          Object.entries(s()).map(([p, h]) => [p, () => h({ editor: t })])
        );
        l = { ...l, ...f };
      }
      const a = ax(l);
      i.push(a);
      const c = D(r, "addInputRules", o);
      if (su(r, t.options.enableInputRules) && c) {
        const f = c();
        if (f && f.length) {
          const p = eC({
            editor: t,
            rules: f
          }), h = Array.isArray(p) ? p : [p];
          i.push(...h);
        }
      }
      const d = D(r, "addPasteRules", o);
      if (su(r, t.options.enablePasteRules) && d) {
        const f = d();
        if (f && f.length) {
          const p = lC({ editor: t, rules: f });
          i.push(...p);
        }
      }
      const u = D(
        r,
        "addProseMirrorPlugins",
        o
      );
      if (u) {
        const f = u();
        i.push(...f);
      }
      return i;
    }).flat();
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return kh(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: t } = this, { nodeExtensions: e } = Zr(this.extensions);
    return Object.fromEntries(
      e.filter((n) => !!D(n, "addNodeView")).map((n) => {
        const r = this.attributes.filter((l) => l.type === n.name), o = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t,
          type: pe(n.name, this.schema)
        }, i = D(n, "addNodeView", o);
        if (!i)
          return [];
        const s = (l, a, c, d, u) => {
          const f = hi(l, r);
          return i()({
            // pass-through
            node: l,
            view: a,
            getPos: c,
            decorations: d,
            innerDecorations: u,
            // tiptap-specific
            editor: t,
            extension: n,
            HTMLAttributes: f
          });
        };
        return [n.name, s];
      })
    );
  }
  get markViews() {
    const { editor: t } = this, { markExtensions: e } = Zr(this.extensions);
    return Object.fromEntries(
      e.filter((n) => !!D(n, "addMarkView")).map((n) => {
        const r = this.attributes.filter((l) => l.type === n.name), o = {
          name: n.name,
          options: n.options,
          storage: this.editor.extensionStorage[n.name],
          editor: t,
          type: Bt(n.name, this.schema)
        }, i = D(n, "addMarkView", o);
        if (!i)
          return [];
        const s = (l, a, c) => {
          const d = hi(l, r);
          return i()({
            // pass-through
            mark: l,
            view: a,
            inline: c,
            // tiptap-specific
            editor: t,
            extension: n,
            HTMLAttributes: d,
            updateAttributes: (u) => {
              kT(l, t, u);
            }
          });
        };
        return [n.name, s];
      })
    );
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    const t = this.extensions;
    this.editor.extensionStorage = Object.fromEntries(
      t.map((e) => [e.name, e.storage])
    ), t.forEach((e) => {
      var n;
      const r = {
        name: e.name,
        options: e.options,
        storage: this.editor.extensionStorage[e.name],
        editor: this.editor,
        type: Zs(e.name, this.schema)
      };
      e.type === "mark" && ((n = q(D(e, "keepOnSplit", r))) == null || n) && this.splittableMarks.push(e.name);
      const o = D(e, "onBeforeCreate", r), i = D(e, "onCreate", r), s = D(e, "onUpdate", r), l = D(
        e,
        "onSelectionUpdate",
        r
      ), a = D(e, "onTransaction", r), c = D(e, "onFocus", r), d = D(e, "onBlur", r), u = D(e, "onDestroy", r);
      o && this.editor.on("beforeCreate", o), i && this.editor.on("create", i), s && this.editor.on("update", s), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), d && this.editor.on("blur", d), u && this.editor.on("destroy", u);
    });
  }
};
vs.resolve = qa;
vs.sort = Ka;
vs.flatten = Wa;
var aC = {};
gh(aC, {
  ClipboardTextSerializer: () => Nh,
  Commands: () => Ph,
  Delete: () => Bh,
  Drop: () => $h,
  Editable: () => zh,
  FocusEvents: () => jh,
  Keymap: () => Wh,
  Paste: () => Uh,
  Tabindex: () => Kh,
  focusEventsPluginKey: () => Fh
});
var W = class Rh extends Xa {
  constructor() {
    super(...arguments), this.type = "extension";
  }
  /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Rh(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, Nh = W.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new ee({
        key: new ue("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: t } = this, { state: e, schema: n } = t, { doc: r, selection: o } = e, { ranges: i } = o, s = Math.min(...i.map((d) => d.$from.pos)), l = Math.max(...i.map((d) => d.$to.pos)), a = Ch(n);
            return xh(r, { from: s, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), _h = {};
gh(_h, {
  blur: () => cC,
  clearContent: () => dC,
  clearNodes: () => uC,
  command: () => fC,
  createParagraphNear: () => pC,
  cut: () => hC,
  deleteCurrentNode: () => mC,
  deleteNode: () => gC,
  deleteRange: () => yC,
  deleteSelection: () => bC,
  enter: () => vC,
  exitCode: () => wC,
  extendMarkRange: () => kC,
  first: () => SC,
  focus: () => xC,
  forEach: () => CC,
  insertContent: () => TC,
  insertContentAt: () => MC,
  joinBackward: () => LC,
  joinDown: () => OC,
  joinForward: () => VC,
  joinItemBackward: () => HC,
  joinItemForward: () => RC,
  joinTextblockBackward: () => NC,
  joinTextblockForward: () => _C,
  joinUp: () => EC,
  keyboardShortcut: () => DC,
  lift: () => PC,
  liftEmptyBlock: () => BC,
  liftListItem: () => $C,
  newlineInCode: () => zC,
  resetAttributes: () => FC,
  scrollIntoView: () => jC,
  selectAll: () => WC,
  selectNodeBackward: () => UC,
  selectNodeForward: () => KC,
  selectParentNode: () => qC,
  selectTextblockEnd: () => JC,
  selectTextblockStart: () => GC,
  setContent: () => ZC,
  setMark: () => YC,
  setMeta: () => QC,
  setNode: () => eT,
  setNodeSelection: () => tT,
  setTextSelection: () => nT,
  sinkListItem: () => rT,
  splitBlock: () => oT,
  splitListItem: () => iT,
  toggleList: () => sT,
  toggleMark: () => lT,
  toggleNode: () => aT,
  toggleWrap: () => cT,
  undoInputRule: () => dT,
  unsetAllMarks: () => uT,
  unsetMark: () => fT,
  updateAttributes: () => pT,
  wrapIn: () => hT,
  wrapInList: () => mT
});
var cC = () => ({ editor: t, view: e }) => (requestAnimationFrame(() => {
  var n;
  t.isDestroyed || (e.dom.blur(), (n = window == null ? void 0 : window.getSelection()) == null || n.removeAllRanges());
}), !0), dC = (t = !0) => ({ commands: e }) => e.setContent("", { emitUpdate: t }), uC = () => ({ state: t, tr: e, dispatch: n }) => {
  const { selection: r } = e, { ranges: o } = r;
  return n && o.forEach(({ $from: i, $to: s }) => {
    t.doc.nodesBetween(i.pos, s.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: d } = e, u = c.resolve(d.map(a)), f = c.resolve(d.map(a + l.nodeSize)), p = u.blockRange(f);
      if (!p)
        return;
      const h = ur(p);
      if (l.type.isTextblock) {
        const { defaultType: m } = u.parent.contentMatchAt(u.index());
        e.setNodeMarkup(p.start, m);
      }
      (h || h === 0) && e.lift(p, h);
    });
  }), !0;
}, fC = (t) => (e) => t(e), pC = () => ({ state: t, dispatch: e }) => wx(t, e), hC = (t, e) => ({ editor: n, tr: r }) => {
  const { state: o } = n, i = o.doc.slice(t.from, t.to);
  r.deleteRange(t.from, t.to);
  const s = r.mapping.map(e);
  return r.insert(s, i.content), r.setSelection(new P(r.doc.resolve(Math.max(s - 1, 0)))), !0;
}, mC = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, r = n.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const o = t.selection.$anchor;
  for (let i = o.depth; i > 0; i -= 1)
    if (o.node(i).type === r.type) {
      if (e) {
        const l = o.before(i), a = o.after(i);
        t.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, gC = (t) => ({ tr: e, state: n, dispatch: r }) => {
  const o = pe(t, n.schema), i = e.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === o) {
      if (r) {
        const a = i.before(s), c = i.after(s);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, yC = (t) => ({ tr: e, dispatch: n }) => {
  const { from: r, to: o } = t;
  return n && e.delete(r, o), !0;
}, bC = () => ({ state: t, dispatch: e }) => ch(t, e), vC = () => ({ commands: t }) => t.keyboardShortcut("Enter"), wC = () => ({ state: t, dispatch: e }) => vx(t, e), kC = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  const i = Bt(t, r.schema), { doc: s, selection: l } = n, { $from: a, from: c, to: d } = l;
  if (o) {
    const u = gs(a, i, e);
    if (u && u.from <= c && u.to >= d) {
      const f = P.create(s, u.from, u.to);
      n.setSelection(f);
    }
  }
  return !0;
}, SC = (t) => (e) => {
  const n = typeof t == "function" ? t(e) : t;
  for (let r = 0; r < n.length; r += 1)
    if (n[r](e))
      return !0;
  return !1;
};
function Ih() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function ws() {
  return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || // iPad on iOS 13 detection
  navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
var xC = (t = null, e = {}) => ({ editor: n, view: r, tr: o, dispatch: i }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    (ws() || Ih()) && r.dom.focus(), requestAnimationFrame(() => {
      n.isDestroyed || (r.focus(), e != null && e.scrollIntoView && n.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && t === null || t === !1)
    return !0;
  if (i && t === null && !Za(n.state.selection))
    return s(), !0;
  const l = Lh(o.doc, t) || n.state.selection, a = n.state.selection.eq(l);
  return i && (a || o.setSelection(l), a && o.storedMarks && o.setStoredMarks(o.storedMarks), s()), !0;
}, CC = (t, e) => (n) => t.every((r, o) => e(r, { ...n, index: o })), TC = (t, e) => ({ tr: n, commands: r }) => r.insertContentAt({ from: n.selection.from, to: n.selection.to }, t, e), AC = (t) => !("type" in t), MC = (t, e, n) => ({ tr: r, dispatch: o, editor: i }) => {
  var s;
  if (o) {
    n = {
      parseOptions: i.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...n
    };
    let l;
    const { selection: a } = i.state, c = (y) => {
      i.emit("contentError", {
        editor: i,
        error: y,
        disableCollaboration: () => {
          "collaboration" in i.storage && typeof i.storage.collaboration == "object" && i.storage.collaboration && (i.storage.collaboration.isDisabled = !0);
        }
      });
    }, d = {
      preserveWhitespace: "full",
      ...n.parseOptions
    };
    if (!n.errorOnInvalidContent && !i.options.enableContentCheck && i.options.emitContentError)
      try {
        Gr(e, i.schema, {
          parseOptions: d,
          errorOnInvalidContent: !0
        });
      } catch (y) {
        c(y);
      }
    try {
      l = Gr(e, i.schema, {
        parseOptions: d,
        errorOnInvalidContent: (s = n.errorOnInvalidContent) != null ? s : i.options.enableContentCheck
      });
    } catch (y) {
      return c(y), !1;
    }
    let { from: u, to: f } = typeof t == "number" ? { from: t, to: t } : { from: t.from, to: t.to }, p = !0, h = !0;
    if ((AC(l) ? l : [l]).forEach((y) => {
      y.check(), p = p ? y.isText && y.marks.length === 0 : !1, h = h ? y.isBlock : !1;
    }), u === f && h) {
      const { parent: y } = r.doc.resolve(u);
      y.isTextblock && !y.type.spec.code && !y.childCount && (u -= 1, f += 1);
    }
    let g;
    if (p) {
      if (Array.isArray(e))
        g = e.map((y) => y.text || "").join("");
      else if (e instanceof S) {
        let y = "";
        e.forEach((b) => {
          b.text && (y += b.text);
        }), g = y;
      } else typeof e == "object" && e && e.text ? g = e.text : g = e;
      r.insertText(g, u, f);
    } else {
      g = l;
      const y = a.$from.parentOffset === 0, b = a.$from.node().isText || a.$from.node().isTextblock, v = a.$from.node().content.size > 0;
      y && b && v && (u = Math.max(0, u - 1)), r.replaceWith(u, f, g);
    }
    n.updateSelection && Yx(r, r.steps.length - 1, -1), n.applyInputRules && r.setMeta("applyInputRules", { from: u, text: g }), n.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: g });
  }
  return !0;
}, EC = () => ({ state: t, dispatch: e }) => mx(t, e), OC = () => ({ state: t, dispatch: e }) => gx(t, e), LC = () => ({ state: t, dispatch: e }) => cx(t, e), VC = () => ({ state: t, dispatch: e }) => px(t, e), HC = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = ss(t.doc, t.selection.$from.pos, -1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, RC = () => ({ state: t, dispatch: e, tr: n }) => {
  try {
    const r = ss(t.doc, t.selection.$from.pos, 1);
    return r == null ? !1 : (n.join(r, 2), e && e(n), !0);
  } catch {
    return !1;
  }
}, NC = () => ({ state: t, dispatch: e }) => dx(t, e), _C = () => ({ state: t, dispatch: e }) => ux(t, e);
function Dh() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function IC(t) {
  const e = t.split(/-(?!$)/);
  let n = e[e.length - 1];
  n === "Space" && (n = " ");
  let r, o, i, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      o = !0;
    else if (/^s(hift)?$/i.test(a))
      i = !0;
    else if (/^mod$/i.test(a))
      ws() || Dh() ? s = !0 : o = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (n = `Alt-${n}`), o && (n = `Ctrl-${n}`), s && (n = `Meta-${n}`), i && (n = `Shift-${n}`), n;
}
var DC = (t) => ({ editor: e, view: n, tr: r, dispatch: o }) => {
  const i = IC(t).split(/-(?!$)/), s = i.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: i.includes("Alt"),
    ctrlKey: i.includes("Ctrl"),
    metaKey: i.includes("Meta"),
    shiftKey: i.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    n.someProp("handleKeyDown", (c) => c(n, l));
  });
  return a == null || a.steps.forEach((c) => {
    const d = c.map(r.mapping);
    d && o && r.maybeStep(d);
  }), !0;
}, PC = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = pe(t, n.schema);
  return an(n, o, e) ? yx(n, r) : !1;
}, BC = () => ({ state: t, dispatch: e }) => kx(t, e), $C = (t) => ({ state: e, dispatch: n }) => {
  const r = pe(t, e.schema);
  return Lx(r)(e, n);
}, zC = () => ({ state: t, dispatch: e }) => bx(t, e);
function au(t, e) {
  const n = typeof e == "string" ? [e] : e;
  return Object.keys(t).reduce((r, o) => (n.includes(o) || (r[o] = t[o]), r), {});
}
var FC = (t, e) => ({ tr: n, state: r, dispatch: o }) => {
  let i = null, s = null;
  const l = ms(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  return l ? (l === "node" && (i = pe(t, r.schema)), l === "mark" && (s = Bt(t, r.schema)), o && n.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, d) => {
      i && i === c.type && n.setNodeMarkup(d, void 0, au(c.attrs, e)), s && c.marks.length && c.marks.forEach((u) => {
        s === u.type && n.addMark(d, d + c.nodeSize, s.create(au(u.attrs, e)));
      });
    });
  }), !0) : !1;
}, jC = () => ({ tr: t, dispatch: e }) => (e && t.scrollIntoView(), !0), WC = () => ({ tr: t, dispatch: e }) => {
  if (e) {
    const n = new qe(t.doc);
    t.setSelection(n);
  }
  return !0;
}, UC = () => ({ state: t, dispatch: e }) => fx(t, e), KC = () => ({ state: t, dispatch: e }) => hx(t, e), qC = () => ({ state: t, dispatch: e }) => Sx(t, e), JC = () => ({ state: t, dispatch: e }) => Tx(t, e), GC = () => ({ state: t, dispatch: e }) => Cx(t, e), ZC = (t, { errorOnInvalidContent: e, emitUpdate: n = !0, parseOptions: r = {} } = {}) => ({ editor: o, tr: i, dispatch: s, commands: l }) => {
  const { doc: a } = i;
  if (r.preserveWhitespace !== "full") {
    const c = Il(t, o.schema, r, {
      errorOnInvalidContent: e ?? o.options.enableContentCheck
    });
    return s && i.replaceWith(0, a.content.size, c).setMeta("preventUpdate", !n), !0;
  }
  return s && i.setMeta("preventUpdate", !n), l.insertContentAt({ from: 0, to: a.content.size }, t, {
    parseOptions: r,
    errorOnInvalidContent: e ?? o.options.enableContentCheck
  });
};
function XC(t, e, n) {
  var r;
  const { selection: o } = e;
  let i = null;
  if (Za(o) && (i = o.$cursor), i) {
    const l = (r = t.storedMarks) != null ? r : i.marks();
    return !!n.isInSet(l) || !l.some((a) => a.type.excludes(n));
  }
  const { ranges: s } = o;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? t.doc.inlineContent && t.doc.type.allowsMarkType(n) : !1;
    return t.doc.nodesBetween(l.pos, a.pos, (d, u, f) => {
      if (c)
        return !1;
      if (d.isInline) {
        const p = !f || f.type.allowsMarkType(n), h = !!n.isInSet(d.marks) || !d.marks.some((m) => m.type.excludes(n));
        c = p && h;
      }
      return !c;
    }), c;
  });
}
var YC = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  const { selection: i } = n, { empty: s, ranges: l } = i, a = Bt(t, r.schema);
  if (o)
    if (s) {
      const c = Th(r, a);
      n.addStoredMark(
        a.create({
          ...c,
          ...e
        })
      );
    } else
      l.forEach((c) => {
        const d = c.$from.pos, u = c.$to.pos;
        r.doc.nodesBetween(d, u, (f, p) => {
          const h = Math.max(p, d), m = Math.min(p + f.nodeSize, u);
          f.marks.find((y) => y.type === a) ? f.marks.forEach((y) => {
            a === y.type && n.addMark(
              h,
              m,
              a.create({
                ...y.attrs,
                ...e
              })
            );
          }) : n.addMark(h, m, a.create(e));
        });
      });
  return XC(r, n, a);
}, QC = (t, e) => ({ tr: n }) => (n.setMeta(t, e), !0), eT = (t, e = {}) => ({ state: n, dispatch: r, chain: o }) => {
  const i = pe(t, n.schema);
  let s;
  return n.selection.$anchor.sameParent(n.selection.$head) && (s = n.selection.$anchor.parent.attrs), i.isTextblock ? o().command(({ commands: l }) => nu(i, { ...s, ...e })(n) ? !0 : l.clearNodes()).command(({ state: l }) => nu(i, { ...s, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, tT = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, o = Ot(t, 0, r.content.size), i = I.create(r, o);
    e.setSelection(i);
  }
  return !0;
}, nT = (t) => ({ tr: e, dispatch: n }) => {
  if (n) {
    const { doc: r } = e, { from: o, to: i } = typeof t == "number" ? { from: t, to: t } : t, s = P.atStart(r).from, l = P.atEnd(r).to, a = Ot(o, s, l), c = Ot(i, s, l), d = P.create(r, a, c);
    e.setSelection(d);
  }
  return !0;
}, rT = (t) => ({ state: e, dispatch: n }) => {
  const r = pe(t, e.schema);
  return Rx(r)(e, n);
};
function cu(t, e) {
  const n = t.storedMarks || t.selection.$to.parentOffset && t.selection.$from.marks();
  if (n) {
    const r = n.filter((o) => e == null ? void 0 : e.includes(o.type.name));
    t.tr.ensureMarks(r);
  }
}
var oT = ({ keepMarks: t = !0 } = {}) => ({ tr: e, state: n, dispatch: r, editor: o }) => {
  const { selection: i, doc: s } = e, { $from: l, $to: a } = i, c = o.extensionManager.attributes, d = Wo(c, l.node().type.name, l.node().attrs);
  if (i instanceof I && i.node.isBlock)
    return !l.parentOffset || !Jn(s, l.pos) ? !1 : (r && (t && cu(n, o.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const u = a.parentOffset === a.parent.content.size, f = l.depth === 0 ? void 0 : Ix(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let p = u && f ? [
    {
      type: f,
      attrs: d
    }
  ] : void 0, h = Jn(e.doc, e.mapping.map(l.pos), 1, p);
  if (!p && !h && Jn(e.doc, e.mapping.map(l.pos), 1, f ? [{ type: f }] : void 0) && (h = !0, p = f ? [
    {
      type: f,
      attrs: d
    }
  ] : void 0), r) {
    if (h && (i instanceof P && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, p), f && !u && !l.parentOffset && l.parent.type !== f)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, f) && e.setNodeMarkup(e.mapping.map(l.before()), f);
    }
    t && cu(n, o.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return h;
}, iT = (t, e = {}) => ({ tr: n, state: r, dispatch: o, editor: i }) => {
  var s;
  const l = pe(t, r.schema), { $from: a, $to: c } = r.selection, d = r.selection.node;
  if (d && d.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const u = a.node(-1);
  if (u.type !== l)
    return !1;
  const f = i.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (o) {
      let y = S.empty;
      const b = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let E = a.depth - b; E >= a.depth - 3; E -= 1)
        y = S.from(a.node(E).copy(y));
      const v = (
        // eslint-disable-next-line no-nested-ternary
        a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3
      ), x = {
        ...Wo(f, a.node().type.name, a.node().attrs),
        ...e
      }, k = ((s = l.contentMatch.defaultType) == null ? void 0 : s.createAndFill(x)) || void 0;
      y = y.append(S.from(l.createAndFill(null, k) || void 0));
      const w = a.before(a.depth - (b - 1));
      n.replace(w, a.after(-v), new O(y, 4 - b, 0));
      let L = -1;
      n.doc.nodesBetween(w, n.doc.content.size, (E, A) => {
        if (L > -1)
          return !1;
        E.isTextblock && E.content.size === 0 && (L = A + 1);
      }), L > -1 && n.setSelection(P.near(n.doc.resolve(L))), n.scrollIntoView();
    }
    return !0;
  }
  const p = c.pos === a.end() ? u.contentMatchAt(0).defaultType : null, h = {
    ...Wo(f, u.type.name, u.attrs),
    ...e
  }, m = {
    ...Wo(f, a.node().type.name, a.node().attrs),
    ...e
  };
  n.delete(a.pos, c.pos);
  const g = p ? [
    { type: l, attrs: h },
    { type: p, attrs: m }
  ] : [{ type: l, attrs: h }];
  if (!Jn(n.doc, a.pos, 2))
    return !1;
  if (o) {
    const { selection: y, storedMarks: b } = r, { splittableMarks: v } = i.extensionManager, x = b || y.$to.parentOffset && y.$from.marks();
    if (n.split(a.pos, 2, g).scrollIntoView(), !x || !o)
      return !0;
    const k = x.filter((w) => v.includes(w.type.name));
    n.ensureMarks(k);
  }
  return !0;
}, Xs = (t, e) => {
  const n = hs((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(Math.max(0, n.pos - 1)).before(n.depth);
  if (r === void 0)
    return !0;
  const o = t.doc.nodeAt(r);
  return n.node.type === (o == null ? void 0 : o.type) && fn(t.doc, n.pos) && t.join(n.pos), !0;
}, Ys = (t, e) => {
  const n = hs((s) => s.type === e)(t.selection);
  if (!n)
    return !0;
  const r = t.doc.resolve(n.start).after(n.depth);
  if (r === void 0)
    return !0;
  const o = t.doc.nodeAt(r);
  return n.node.type === (o == null ? void 0 : o.type) && fn(t.doc, r) && t.join(r), !0;
}, sT = (t, e, n, r = {}) => ({ editor: o, tr: i, state: s, dispatch: l, chain: a, commands: c, can: d }) => {
  const { extensions: u, splittableMarks: f } = o.extensionManager, p = pe(t, s.schema), h = pe(e, s.schema), { selection: m, storedMarks: g } = s, { $from: y, $to: b } = m, v = y.blockRange(b), x = g || m.$to.parentOffset && m.$from.marks();
  if (!v)
    return !1;
  const k = hs((w) => lu(w.type.name, u))(m);
  if (v.depth >= 1 && k && v.depth - k.depth <= 1) {
    if (k.node.type === p)
      return c.liftListItem(h);
    if (lu(k.node.type.name, u) && p.validContent(k.node.content) && l)
      return a().command(() => (i.setNodeMarkup(k.pos, p), !0)).command(() => Xs(i, p)).command(() => Ys(i, p)).run();
  }
  return !n || !x || !l ? a().command(() => d().wrapInList(p, r) ? !0 : c.clearNodes()).wrapInList(p, r).command(() => Xs(i, p)).command(() => Ys(i, p)).run() : a().command(() => {
    const w = d().wrapInList(p, r), L = x.filter((E) => f.includes(E.type.name));
    return i.ensureMarks(L), w ? !0 : c.clearNodes();
  }).wrapInList(p, r).command(() => Xs(i, p)).command(() => Ys(i, p)).run();
}, lT = (t, e = {}, n = {}) => ({ state: r, commands: o }) => {
  const { extendEmptyMarkRange: i = !1 } = n, s = Bt(t, r.schema);
  return Dl(r, s, e) ? o.unsetMark(s, { extendEmptyMarkRange: i }) : o.setMark(s, e);
}, aT = (t, e, n = {}) => ({ state: r, commands: o }) => {
  const i = pe(t, r.schema), s = pe(e, r.schema), l = an(r, i, n);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? o.setNode(s, a) : o.setNode(i, { ...a, ...n });
}, cT = (t, e = {}) => ({ state: n, commands: r }) => {
  const o = pe(t, n.schema);
  return an(n, o, e) ? r.lift(o) : r.wrapIn(o, e);
}, dT = () => ({ state: t, dispatch: e }) => {
  const n = t.plugins;
  for (let r = 0; r < n.length; r += 1) {
    const o = n[r];
    let i;
    if (o.spec.isInputRules && (i = o.getState(t))) {
      if (e) {
        const s = t.tr, l = i.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          s.step(l.steps[a].invert(l.docs[a]));
        if (i.text) {
          const a = s.doc.resolve(i.from).marks();
          s.replaceWith(i.from, i.to, t.schema.text(i.text, a));
        } else
          s.delete(i.from, i.to);
      }
      return !0;
    }
  }
  return !1;
}, uT = () => ({ tr: t, dispatch: e }) => {
  const { selection: n } = t, { empty: r, ranges: o } = n;
  return r || e && o.forEach((i) => {
    t.removeMark(i.$from.pos, i.$to.pos);
  }), !0;
}, fT = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  var i;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: l } = n, a = Bt(t, r.schema), { $from: c, empty: d, ranges: u } = l;
  if (!o)
    return !0;
  if (d && s) {
    let { from: f, to: p } = l;
    const h = (i = c.marks().find((g) => g.type === a)) == null ? void 0 : i.attrs, m = gs(c, a, h);
    m && (f = m.from, p = m.to), n.removeMark(f, p, a);
  } else
    u.forEach((f) => {
      n.removeMark(f.$from.pos, f.$to.pos, a);
    });
  return n.removeStoredMark(a), !0;
}, pT = (t, e = {}) => ({ tr: n, state: r, dispatch: o }) => {
  let i = null, s = null;
  const l = ms(
    typeof t == "string" ? t : t.name,
    r.schema
  );
  return l ? (l === "node" && (i = pe(t, r.schema)), l === "mark" && (s = Bt(t, r.schema)), o && n.selection.ranges.forEach((a) => {
    const c = a.$from.pos, d = a.$to.pos;
    let u, f, p, h;
    n.selection.empty ? r.doc.nodesBetween(c, d, (m, g) => {
      i && i === m.type && (p = Math.max(g, c), h = Math.min(g + m.nodeSize, d), u = g, f = m);
    }) : r.doc.nodesBetween(c, d, (m, g) => {
      g < c && i && i === m.type && (p = Math.max(g, c), h = Math.min(g + m.nodeSize, d), u = g, f = m), g >= c && g <= d && (i && i === m.type && n.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), s && m.marks.length && m.marks.forEach((y) => {
        if (s === y.type) {
          const b = Math.max(g, c), v = Math.min(g + m.nodeSize, d);
          n.addMark(
            b,
            v,
            s.create({
              ...y.attrs,
              ...e
            })
          );
        }
      }));
    }), f && (u !== void 0 && n.setNodeMarkup(u, void 0, {
      ...f.attrs,
      ...e
    }), s && f.marks.length && f.marks.forEach((m) => {
      s === m.type && n.addMark(
        p,
        h,
        s.create({
          ...m.attrs,
          ...e
        })
      );
    }));
  }), !0) : !1;
}, hT = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = pe(t, n.schema);
  return Ax(o, e)(n, r);
}, mT = (t, e = {}) => ({ state: n, dispatch: r }) => {
  const o = pe(t, n.schema);
  return Mx(o, e)(n, r);
}, Ph = W.create({
  name: "commands",
  addCommands() {
    return {
      ..._h
    };
  }
}), Bh = W.create({
  name: "delete",
  onUpdate({ transaction: t, appendedTransactions: e }) {
    var n, r, o;
    const i = () => {
      var s, l, a, c;
      if ((c = (a = (l = (s = this.editor.options.coreExtensionOptions) == null ? void 0 : s.delete) == null ? void 0 : l.filterTransaction) == null ? void 0 : a.call(l, t)) != null ? c : t.getMeta("y-sync$"))
        return;
      const d = yh(t.before, [t, ...e]);
      Mh(d).forEach((p) => {
        d.mapping.mapResult(p.oldRange.from).deletedAfter && d.mapping.mapResult(p.oldRange.to).deletedBefore && d.before.nodesBetween(p.oldRange.from, p.oldRange.to, (h, m) => {
          const g = m + h.nodeSize - 2, y = p.oldRange.from <= m && g <= p.oldRange.to;
          this.editor.emit("delete", {
            type: "node",
            node: h,
            from: m,
            to: g,
            newFrom: d.mapping.map(m),
            newTo: d.mapping.map(g),
            deletedRange: p.oldRange,
            newRange: p.newRange,
            partial: !y,
            editor: this.editor,
            transaction: t,
            combinedTransform: d
          });
        });
      });
      const f = d.mapping;
      d.steps.forEach((p, h) => {
        var m, g;
        if (p instanceof tt) {
          const y = f.slice(h).map(p.from, -1), b = f.slice(h).map(p.to), v = f.invert().map(y, -1), x = f.invert().map(b), k = (m = d.doc.nodeAt(y - 1)) == null ? void 0 : m.marks.some((L) => L.eq(p.mark)), w = (g = d.doc.nodeAt(b)) == null ? void 0 : g.marks.some((L) => L.eq(p.mark));
          this.editor.emit("delete", {
            type: "mark",
            mark: p.mark,
            from: p.from,
            to: p.to,
            deletedRange: {
              from: v,
              to: x
            },
            newRange: {
              from: y,
              to: b
            },
            partial: !!(w || k),
            editor: this.editor,
            transaction: t,
            combinedTransform: d
          });
        }
      });
    };
    (o = (r = (n = this.editor.options.coreExtensionOptions) == null ? void 0 : n.delete) == null ? void 0 : r.async) == null || o ? setTimeout(i, 0) : i();
  }
}), $h = W.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new ee({
        key: new ue("tiptapDrop"),
        props: {
          handleDrop: (t, e, n, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: n,
              moved: r
            });
          }
        }
      })
    ];
  }
}), zh = W.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ee({
        key: new ue("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Fh = new ue("focusEvents"), jh = W.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: t } = this;
    return [
      new ee({
        key: Fh,
        props: {
          handleDOMEvents: {
            focus: (e, n) => {
              t.isFocused = !0;
              const r = t.state.tr.setMeta("focus", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, n) => {
              t.isFocused = !1;
              const r = t.state.tr.setMeta("blur", { event: n }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Wh = W.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const t = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      // maybe convert first text block node to default node
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: d, $anchor: u } = a, { pos: f, parent: p } = u, h = u.parent.isTextblock && f > 0 ? l.doc.resolve(f - 1) : u, m = h.parent.type.spec.isolating, g = u.pos - u.parentOffset, y = m && h.parent.childCount === 1 ? g === u.pos : B.atStart(c).from === f;
        return !d || !p.type.isTextblock || p.textContent.length || !y || y && u.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: t,
      "Mod-Backspace": t,
      "Shift-Backspace": t,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, o = {
      ...r
    }, i = {
      ...r,
      "Ctrl-h": t,
      "Alt-Backspace": t,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return ws() || Dh() ? i : o;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new ee({
        key: new ue("clearDocument"),
        appendTransaction: (t, e, n) => {
          if (t.some((m) => m.getMeta("composition")))
            return;
          const r = t.some((m) => m.docChanged) && !e.doc.eq(n.doc), o = t.some((m) => m.getMeta("preventClearDocument"));
          if (!r || o)
            return;
          const { empty: i, from: s, to: l } = e.selection, a = B.atStart(e.doc).from, c = B.atEnd(e.doc).to;
          if (i || !(s === a && l === c) || !ys(n.doc))
            return;
          const f = n.tr, p = fs({
            state: n,
            transaction: f
          }), { commands: h } = new ps({
            editor: this.editor,
            state: p
          });
          if (h.clearNodes(), !!f.steps.length)
            return f;
        }
      })
    ];
  }
}), Uh = W.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new ee({
        key: new ue("tiptapPaste"),
        props: {
          handlePaste: (t, e, n) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: n
            });
          }
        }
      })
    ];
  }
}), Kh = W.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new ee({
        key: new ue("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
}), gT = class zn {
  constructor(e, n, r = !1, o = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = n, this.currentNode = o;
  }
  get name() {
    return this.node.type.name;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) != null ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let n = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      n = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: n, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), n = this.resolvedPos.doc.resolve(e);
    return new zn(n, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new zn(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new zn(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((n, r) => {
      const o = n.isBlock && !n.isTextblock, i = n.isAtom && !n.isText, s = this.pos + r + (i ? 0 : 1);
      if (s < 0 || s > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(s);
      if (!o && l.depth <= this.depth)
        return;
      const a = new zn(l, this.editor, o, o ? n : null);
      o && (a.actualDepth = this.depth + 1), e.push(new zn(l, this.editor, o, o ? n : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, n = {}) {
    let r = null, o = this.parent;
    for (; o && !r; ) {
      if (o.node.type.name === e)
        if (Object.keys(n).length > 0) {
          const i = o.node.attrs, s = Object.keys(n);
          for (let l = 0; l < s.length; l += 1) {
            const a = s[l];
            if (i[a] !== n[a])
              break;
          }
        } else
          r = o;
      o = o.parent;
    }
    return r;
  }
  querySelector(e, n = {}) {
    return this.querySelectorAll(e, n, !0)[0] || null;
  }
  querySelectorAll(e, n = {}, r = !1) {
    let o = [];
    if (!this.children || this.children.length === 0)
      return o;
    const i = Object.keys(n);
    return this.children.forEach((s) => {
      r && o.length > 0 || (s.node.type.name === e && i.every((a) => n[a] === s.node.attrs[a]) && o.push(s), !(r && o.length > 0) && (o = o.concat(s.querySelectorAll(e, n, r))));
    }), o;
  }
  setAttribute(e) {
    const { tr: n } = this.editor.state;
    n.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(n);
  }
}, yT = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
function bT(t, e, n) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const o = document.createElement("style");
  return e && o.setAttribute("nonce", e), o.setAttribute("data-tiptap-style", ""), o.innerHTML = t, document.getElementsByTagName("head")[0].appendChild(o), o;
}
var vT = class extends _x {
  constructor(e = {}) {
    super(), this.css = null, this.editorView = null, this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.instanceId = Math.random().toString(36).slice(2, 9), this.options = {
      element: typeof document < "u" ? document.createElement("div") : null,
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: o }) => {
        throw o;
      },
      onPaste: () => null,
      onDrop: () => null,
      onDelete: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: o, slice: i, moved: s }) => this.options.onDrop(o, i, s)), this.on("paste", ({ event: o, slice: i }) => this.options.onPaste(o, i)), this.on("delete", this.options.onDelete);
    const n = this.createDoc(), r = Lh(n, this.options.autofocus);
    this.editorState = jn.create({
      doc: n,
      schema: this.schema,
      selection: r || void 0
    }), this.options.element && this.mount(this.options.element);
  }
  /**
   * Attach the editor to the DOM, creating a new editor view.
   */
  mount(e) {
    if (typeof document > "u")
      throw new Error(
        "[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment."
      );
    this.createView(e), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */
  unmount() {
    if (this.editorView) {
      const e = this.editorView.dom;
      e != null && e.editor && delete e.editor, this.editorView.destroy();
    }
    if (this.editorView = null, this.isInitialized = !1, this.css)
      try {
        typeof this.css.remove == "function" ? this.css.remove() : this.css.parentNode && this.css.parentNode.removeChild(this.css);
      } catch (e) {
        console.warn("Failed to remove CSS element:", e);
      }
    this.css = null;
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && typeof document < "u" && (this.css = bT(yT, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.editorView || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, n = !0) {
    this.setOptions({ editable: e }), n && this.emit("update", { editor: this, transaction: this.state.tr, appendedTransactions: [] });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get view() {
    return this.editorView ? this.editorView : new Proxy(
      {
        state: this.editorState,
        updateState: (e) => {
          this.editorState = e;
        },
        dispatch: (e) => {
          this.editorState = this.state.apply(e);
        },
        // Stub some commonly accessed properties to prevent errors
        composing: !1,
        dragging: null,
        editable: !0,
        isDestroyed: !1
      },
      {
        get: (e, n) => {
          if (n === "state")
            return this.editorState;
          if (n in e)
            return Reflect.get(e, n);
          throw new Error(
            `[tiptap error]: The editor view is not available. Cannot access view['${n}']. The editor may not be mounted yet.`
          );
        }
      }
    );
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.editorView && (this.editorState = this.view.state), this.editorState;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, n) {
    const r = wh(n) ? n(e, [...this.state.plugins]) : [...this.state.plugins, e], o = this.state.reconfigure({ plugins: r });
    return this.view.updateState(o), o;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const n = this.state.plugins;
    let r = n;
    if ([].concat(e).forEach((i) => {
      const s = typeof i == "string" ? `${i}$` : i.key;
      r = r.filter((l) => !l.key.startsWith(s));
    }), n.length === r.length)
      return;
    const o = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(o), o;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, n;
    const o = [...this.options.enableCoreExtensions ? [
      zh,
      Nh.configure({
        blockSeparator: (n = (e = this.options.coreExtensionOptions) == null ? void 0 : e.clipboardTextSerializer) == null ? void 0 : n.blockSeparator
      }),
      Ph,
      jh,
      Wh,
      Kh,
      $h,
      Uh,
      Bh
    ].filter((i) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[i.name] !== !1 : !0) : [], ...this.options.extensions].filter((i) => ["extension", "node", "mark"].includes(i == null ? void 0 : i.type));
    this.extensionManager = new vs(o, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new ps({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates the initial document.
   */
  createDoc() {
    let e;
    try {
      e = Il(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: this.options.enableContentCheck
      });
    } catch (n) {
      if (!(n instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(n.message))
        throw n;
      this.emit("contentError", {
        editor: this,
        error: n,
        disableCollaboration: () => {
          "collaboration" in this.storage && typeof this.storage.collaboration == "object" && this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((r) => r.name !== "collaboration"), this.createExtensionManager();
        }
      }), e = Il(this.options.content, this.schema, this.options.parseOptions, {
        errorOnInvalidContent: !1
      });
    }
    return e;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView(e) {
    var n;
    this.editorView = new QS(e, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(n = this.options.editorProps) == null ? void 0 : n.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: this.editorState
    });
    const r = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(r), this.createNodeViews(), this.prependClass(), this.injectCSS();
    const o = this.view.dom;
    o.editor = this;
  }
  /**
   * Creates all node and mark views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      markViews: this.extensionManager.markViews,
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const n = this.capturedTransaction;
    return this.capturedTransaction = null, n;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((d) => {
        var u;
        return (u = this.capturedTransaction) == null ? void 0 : u.step(d);
      });
      return;
    }
    const { state: n, transactions: r } = this.state.applyTransaction(e), o = !this.state.selection.eq(n.selection), i = r.includes(e), s = this.state;
    if (this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: n
    }), !i)
      return;
    this.view.updateState(n), this.emit("transaction", {
      editor: this,
      transaction: e,
      appendedTransactions: r.slice(1)
    }), o && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const l = r.findLast((d) => d.getMeta("focus") || d.getMeta("blur")), a = l == null ? void 0 : l.getMeta("focus"), c = l == null ? void 0 : l.getMeta("blur");
    a && this.emit("focus", {
      editor: this,
      event: a.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: l
    }), c && this.emit("blur", {
      editor: this,
      event: c.event,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      transaction: l
    }), !(e.getMeta("preventUpdate") || !r.some((d) => d.docChanged) || s.doc.eq(n.doc)) && this.emit("update", {
      editor: this,
      transaction: e,
      appendedTransactions: r.slice(1)
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return Ah(this.state, e);
  }
  isActive(e, n) {
    const r = typeof e == "string" ? e : null, o = typeof e == "string" ? n : e;
    return Jx(this.state, r, o);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Ua(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: n = `

`, textSerializers: r = {} } = e || {};
    return Fx(this.state.doc, {
      blockSeparator: n,
      textSerializers: {
        ...Ch(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return ys(this.state.doc);
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    this.emit("destroy"), this.unmount(), this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e, n;
    return (n = (e = this.editorView) == null ? void 0 : e.isDestroyed) != null ? n : !0;
  }
  $node(e, n) {
    var r;
    return ((r = this.$doc) == null ? void 0 : r.querySelector(e, n)) || null;
  }
  $nodes(e, n) {
    var r;
    return ((r = this.$doc) == null ? void 0 : r.querySelectorAll(e, n)) || null;
  }
  $pos(e) {
    const n = this.state.doc.resolve(e);
    return new gT(n, this);
  }
  get $doc() {
    return this.$pos(0);
  }
};
function En(t) {
  return new bs({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const o = q(t.getAttributes, void 0, r);
      if (o === !1 || o === null)
        return null;
      const { tr: i } = e, s = r[r.length - 1], l = r[0];
      if (s) {
        const a = l.search(/\S/), c = n.from + l.indexOf(s), d = c + s.length;
        if (Ga(n.from, n.to, e.doc).filter((p) => p.mark.type.excluded.find((m) => m === t.type && m !== p.mark.type)).filter((p) => p.to > c).length)
          return null;
        d < n.to && i.delete(d, n.to), c > n.from && i.delete(n.from + a, c);
        const f = n.from + a + s.length;
        i.addMark(n.from + a, f, t.type.create(o || {})), i.removeStoredMark(t.type);
      }
    }
  });
}
function qh(t) {
  return new bs({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const o = q(t.getAttributes, void 0, r) || {}, { tr: i } = e, s = n.from;
      let l = n.to;
      const a = t.type.create(o);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let d = s + c;
        d > l ? d = l : l = d + r[1].length;
        const u = r[0][r[0].length - 1];
        i.insertText(u, s + r[0].length - 1), i.replaceWith(d, l, a);
      } else if (r[0]) {
        const c = t.type.isInline ? s : s - 1;
        i.insert(c, t.type.create(o)).delete(i.mapping.map(s), i.mapping.map(l));
      }
      i.scrollIntoView();
    }
  });
}
function Pl(t) {
  return new bs({
    find: t.find,
    handler: ({ state: e, range: n, match: r }) => {
      const o = e.doc.resolve(n.from), i = q(t.getAttributes, void 0, r) || {};
      if (!o.node(-1).canReplaceWith(o.index(-1), o.indexAfter(-1), t.type))
        return null;
      e.tr.delete(n.from, n.to).setBlockType(n.from, n.from, t.type, i);
    }
  });
}
function ir(t) {
  return new bs({
    find: t.find,
    handler: ({ state: e, range: n, match: r, chain: o }) => {
      const i = q(t.getAttributes, void 0, r) || {}, s = e.tr.delete(n.from, n.to), a = s.doc.resolve(n.from).blockRange(), c = a && La(a, t.type, i);
      if (!c)
        return null;
      if (s.wrap(a, c), t.keepMarks && t.editor) {
        const { selection: u, storedMarks: f } = e, { splittableMarks: p } = t.editor.extensionManager, h = f || u.$to.parentOffset && u.$from.marks();
        if (h) {
          const m = h.filter((g) => p.includes(g.type.name));
          s.ensureMarks(m);
        }
      }
      if (t.keepAttributes) {
        const u = t.type.name === "bulletList" || t.type.name === "orderedList" ? "listItem" : "taskList";
        o().updateAttributes(u, i).run();
      }
      const d = s.doc.resolve(n.from - 1).nodeBefore;
      d && d.type === t.type && fn(s.doc, n.from - 1) && (!t.joinPredicate || t.joinPredicate(r, d)) && s.join(n.from - 1);
    }
  });
}
function wT(t, e) {
  const { selection: n } = t, { $from: r } = n;
  if (n instanceof I) {
    const i = r.index();
    return r.parent.canReplaceWith(i, i + 1, e);
  }
  let o = r.depth;
  for (; o >= 0; ) {
    const i = r.index(o);
    if (r.node(o).contentMatchAt(i).matchType(e))
      return !0;
    o -= 1;
  }
  return !1;
}
function kT(t, e, n = {}) {
  const { state: r } = e, { doc: o, tr: i } = r, s = t;
  o.descendants((l, a) => {
    const c = i.mapping.map(a), d = i.mapping.map(a) + l.nodeSize;
    let u = null;
    if (l.marks.forEach((p) => {
      if (p !== s)
        return !1;
      u = p;
    }), !u)
      return;
    let f = !1;
    if (Object.keys(n).forEach((p) => {
      n[p] !== u.attrs[p] && (f = !0);
    }), f) {
      const p = t.type.create({
        ...t.attrs,
        ...n
      });
      i.removeMark(c, d, t.type), i.addMark(c, d, p);
    }
  }), i.docChanged && e.view.dispatch(i);
}
var he = class Jh extends Xa {
  constructor() {
    super(...arguments), this.type = "node";
  }
  /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */
  static create(e = {}) {
    const n = typeof e == "function" ? e() : e;
    return new Jh(n);
  }
  configure(e) {
    return super.configure(e);
  }
  extend(e) {
    const n = typeof e == "function" ? e() : e;
    return super.extend(n);
  }
}, ST = class {
  constructor(t, e, n) {
    this.isDragging = !1, this.component = t, this.editor = e.editor, this.options = {
      stopEvent: null,
      ignoreMutation: null,
      ...n
    }, this.extension = e.extension, this.node = e.node, this.decorations = e.decorations, this.innerDecorations = e.innerDecorations, this.view = e.view, this.HTMLAttributes = e.HTMLAttributes, this.getPos = e.getPos, this.mount();
  }
  mount() {
  }
  get dom() {
    return this.editor.view.dom;
  }
  get contentDOM() {
    return null;
  }
  onDragStart(t) {
    var e, n, r, o, i, s, l;
    const { view: a } = this.editor, c = t.target, d = c.nodeType === 3 ? (e = c.parentElement) == null ? void 0 : e.closest("[data-drag-handle]") : c.closest("[data-drag-handle]");
    if (!this.dom || (n = this.contentDOM) != null && n.contains(c) || !d)
      return;
    let u = 0, f = 0;
    if (this.dom !== d) {
      const b = this.dom.getBoundingClientRect(), v = d.getBoundingClientRect(), x = (o = t.offsetX) != null ? o : (r = t.nativeEvent) == null ? void 0 : r.offsetX, k = (s = t.offsetY) != null ? s : (i = t.nativeEvent) == null ? void 0 : i.offsetY;
      u = v.x - b.x + x, f = v.y - b.y + k;
    }
    const p = this.dom.cloneNode(!0);
    try {
      const b = this.dom.getBoundingClientRect();
      p.style.width = `${Math.round(b.width)}px`, p.style.height = `${Math.round(b.height)}px`, p.style.boxSizing = "border-box", p.style.pointerEvents = "none";
    } catch {
    }
    let h = null;
    try {
      h = document.createElement("div"), h.style.position = "absolute", h.style.top = "-9999px", h.style.left = "-9999px", h.style.pointerEvents = "none", h.appendChild(p), document.body.appendChild(h), (l = t.dataTransfer) == null || l.setDragImage(p, u, f);
    } finally {
      h && setTimeout(() => {
        try {
          h == null || h.remove();
        } catch {
        }
      }, 0);
    }
    const m = this.getPos();
    if (typeof m != "number")
      return;
    const g = I.create(a.state.doc, m), y = a.state.tr.setSelection(g);
    a.dispatch(y);
  }
  stopEvent(t) {
    var e;
    if (!this.dom)
      return !1;
    if (typeof this.options.stopEvent == "function")
      return this.options.stopEvent({ event: t });
    const n = t.target;
    if (!(this.dom.contains(n) && !((e = this.contentDOM) != null && e.contains(n))))
      return !1;
    const o = t.type.startsWith("drag"), i = t.type === "drop";
    if ((["INPUT", "BUTTON", "SELECT", "TEXTAREA"].includes(n.tagName) || n.isContentEditable) && !i && !o)
      return !0;
    const { isEditable: l } = this.editor, { isDragging: a } = this, c = !!this.node.type.spec.draggable, d = I.isSelectable(this.node), u = t.type === "copy", f = t.type === "paste", p = t.type === "cut", h = t.type === "mousedown";
    if (!c && d && o && t.target === this.dom && t.preventDefault(), c && o && !a && t.target === this.dom)
      return t.preventDefault(), !1;
    if (c && l && !a && h) {
      const m = n.closest("[data-drag-handle]");
      m && (this.dom === m || this.dom.contains(m)) && (this.isDragging = !0, document.addEventListener(
        "dragend",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ), document.addEventListener(
        "drop",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ), document.addEventListener(
        "mouseup",
        () => {
          this.isDragging = !1;
        },
        { once: !0 }
      ));
    }
    return !(a || i || u || f || p || h && d);
  }
  /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */
  ignoreMutation(t) {
    return !this.dom || !this.contentDOM ? !0 : typeof this.options.ignoreMutation == "function" ? this.options.ignoreMutation({ mutation: t }) : this.node.isLeaf || this.node.isAtom ? !0 : t.type === "selection" || this.dom.contains(t.target) && t.type === "childList" && (ws() || Ih()) && this.editor.isFocused && [...Array.from(t.addedNodes), ...Array.from(t.removedNodes)].every((n) => n.isContentEditable) ? !1 : this.contentDOM === t.target && t.type === "attributes" ? !0 : !this.contentDOM.contains(t.target);
  }
  /**
   * Update the attributes of the prosemirror node.
   */
  updateAttributes(t) {
    this.editor.commands.command(({ tr: e }) => {
      const n = this.getPos();
      return typeof n != "number" ? !1 : (e.setNodeMarkup(n, void 0, {
        ...this.node.attrs,
        ...t
      }), !0);
    });
  }
  /**
   * Delete the node.
   */
  deleteNode() {
    const t = this.getPos();
    if (typeof t != "number")
      return;
    const e = t + this.node.nodeSize;
    this.editor.commands.deleteRange({ from: t, to: e });
  }
};
function cn(t) {
  return new rC({
    find: t.find,
    handler: ({ state: e, range: n, match: r, pasteEvent: o }) => {
      const i = q(t.getAttributes, void 0, r, o);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, l = r[r.length - 1], a = r[0];
      let c = n.to;
      if (l) {
        const d = a.search(/\S/), u = n.from + a.indexOf(l), f = u + l.length;
        if (Ga(n.from, n.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === t.type && g !== h.mark.type)).filter((h) => h.to > u).length)
          return null;
        f < n.to && s.delete(f, n.to), u > n.from && s.delete(n.from + d, u), c = n.from + d + l.length, s.addMark(n.from + d, c, t.type.create(i || {})), s.removeStoredMark(t.type);
      }
    }
  });
}
function du(t) {
  return Ag((e, n) => ({
    get() {
      return e(), t;
    },
    set(r) {
      t = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          n();
        });
      });
    }
  }));
}
var xT = class extends vT {
  constructor(t = {}) {
    return super(t), this.contentComponent = null, this.appContext = null, this.reactiveState = du(this.view.state), this.reactiveExtensionStorage = du(this.extensionStorage), this.on("beforeTransaction", ({ nextState: e }) => {
      this.reactiveState.value = e, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), ff(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  /**
   * Register a ProseMirror plugin.
   */
  registerPlugin(t, e) {
    const n = super.registerPlugin(t, e);
    return this.reactiveState && (this.reactiveState.value = n), n;
  }
  /**
   * Unregister a ProseMirror plugin.
   */
  unregisterPlugin(t) {
    const e = super.unregisterPlugin(t);
    return this.reactiveState && e && (this.reactiveState.value = e), e;
  }
}, CT = $({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(t) {
    const e = G(), n = so();
    return Vn(() => {
      const r = t.editor;
      r && r.options.element && e.value && cf(() => {
        var o;
        if (!e.value || !((o = r.options.element) != null && o.firstChild))
          return;
        const i = C(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = n.ctx._, n && (r.appContext = {
          ...n.appContext,
          // Vue internally uses prototype chain to forward/shadow injects across the entire component chain
          // so don't use object spread operator or 'Object.assign' and just set `provides` as is on editor's appContext
          // @ts-expect-error forward instance's 'provides' into appContext
          provides: n.provides
        }), r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), Tg(() => {
      const r = t.editor;
      r && (r.contentComponent = null, r.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return lo("div", {
      ref: (t) => {
        this.rootEl = t;
      }
    });
  }
});
$({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return lo(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
var TT = $({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var t, e;
    return lo(
      this.as,
      {
        // @ts-ignore
        class: this.decorationClasses,
        style: {
          whiteSpace: "normal"
        },
        "data-node-view-wrapper": "",
        // @ts-ignore (https://github.com/vuejs/vue-next/issues/3031)
        onDragstart: this.onDragStart
      },
      (e = (t = this.$slots).default) == null ? void 0 : e.call(t)
    );
  }
}), AT = class {
  constructor(t, { props: e = {}, editor: n }) {
    this.editor = n, this.component = ff(t), this.el = document.createElement("div"), this.props = Yn(e), this.renderedComponent = this.renderComponent();
  }
  get element() {
    return this.renderedComponent.el;
  }
  get ref() {
    var t, e, n, r;
    return (e = (t = this.renderedComponent.vNode) == null ? void 0 : t.component) != null && e.exposed ? this.renderedComponent.vNode.component.exposed : (r = (n = this.renderedComponent.vNode) == null ? void 0 : n.component) == null ? void 0 : r.proxy;
  }
  renderComponent() {
    let t = lo(this.component, this.props);
    return this.editor.appContext && (t.appContext = this.editor.appContext), typeof document < "u" && this.el && bc(t, this.el), { vNode: t, destroy: () => {
      this.el && bc(null, this.el), this.el = null, t = null;
    }, el: this.el ? this.el.firstElementChild : null };
  }
  updateProps(t = {}) {
    Object.entries(t).forEach(([e, n]) => {
      this.props[e] = n;
    }), this.renderComponent();
  }
  destroy() {
    this.renderedComponent.destroy();
  }
};
$({
  name: "MarkViewContent",
  props: {
    as: {
      type: String,
      default: "span"
    }
  },
  render() {
    return lo(this.as, {
      style: {
        whiteSpace: "inherit"
      },
      "data-mark-view-content": ""
    });
  }
});
var MT = {
  editor: {
    type: Object,
    required: !0
  },
  node: {
    type: Object,
    required: !0
  },
  decorations: {
    type: Object,
    required: !0
  },
  selected: {
    type: Boolean,
    required: !0
  },
  extension: {
    type: Object,
    required: !0
  },
  getPos: {
    type: Function,
    required: !0
  },
  updateAttributes: {
    type: Function,
    required: !0
  },
  deleteNode: {
    type: Function,
    required: !0
  },
  view: {
    type: Object,
    required: !0
  },
  innerDecorations: {
    type: Object,
    required: !0
  },
  HTMLAttributes: {
    type: Object,
    required: !0
  }
}, ET = class extends ST {
  mount() {
    const t = {
      editor: this.editor,
      node: this.node,
      decorations: this.decorations,
      innerDecorations: this.innerDecorations,
      view: this.view,
      selected: !1,
      extension: this.extension,
      HTMLAttributes: this.HTMLAttributes,
      getPos: () => this.getPos(),
      updateAttributes: (r = {}) => this.updateAttributes(r),
      deleteNode: () => this.deleteNode()
    }, e = this.onDragStart.bind(this);
    this.decorationClasses = G(this.getDecorationClasses());
    const n = $({
      extends: { ...this.component },
      props: Object.keys(t),
      template: this.component.template,
      setup: (r) => {
        var o, i;
        return Zo("onDragStart", e), Zo("decorationClasses", this.decorationClasses), (i = (o = this.component).setup) == null ? void 0 : i.call(o, r, {
          expose: () => {
          }
        });
      },
      // add support for scoped styles
      // @ts-ignore
      // eslint-disable-next-line
      __scopeId: this.component.__scopeId,
      // add support for CSS Modules
      // @ts-ignore
      // eslint-disable-next-line
      __cssModules: this.component.__cssModules,
      // add support for vue devtools
      // @ts-ignore
      // eslint-disable-next-line
      __name: this.component.__name,
      // @ts-ignore
      // eslint-disable-next-line
      __file: this.component.__file
    });
    this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this), this.editor.on("selectionUpdate", this.handleSelectionUpdate), this.renderer = new AT(n, {
      editor: this.editor,
      props: t
    });
  }
  /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */
  get dom() {
    if (!this.renderer.element || !this.renderer.element.hasAttribute("data-node-view-wrapper"))
      throw Error("Please use the NodeViewWrapper component for your node view.");
    return this.renderer.element;
  }
  /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */
  get contentDOM() {
    return this.node.isLeaf ? null : this.dom.querySelector("[data-node-view-content]");
  }
  /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */
  handleSelectionUpdate() {
    const { from: t, to: e } = this.editor.state.selection, n = this.getPos();
    if (typeof n == "number")
      if (t <= n && e >= n + this.node.nodeSize) {
        if (this.renderer.props.selected)
          return;
        this.selectNode();
      } else {
        if (!this.renderer.props.selected)
          return;
        this.deselectNode();
      }
  }
  /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */
  update(t, e, n) {
    const r = (o) => {
      this.decorationClasses.value = this.getDecorationClasses(), this.renderer.updateProps(o);
    };
    if (typeof this.options.update == "function") {
      const o = this.node, i = this.decorations, s = this.innerDecorations;
      return this.node = t, this.decorations = e, this.innerDecorations = n, this.options.update({
        oldNode: o,
        oldDecorations: i,
        newNode: t,
        newDecorations: e,
        oldInnerDecorations: s,
        innerDecorations: n,
        updateProps: () => r({ node: t, decorations: e, innerDecorations: n })
      });
    }
    return t.type !== this.node.type ? !1 : (t === this.node && this.decorations === e && this.innerDecorations === n || (this.node = t, this.decorations = e, this.innerDecorations = n, r({ node: t, decorations: e, innerDecorations: n })), !0);
  }
  /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */
  selectNode() {
    this.renderer.updateProps({
      selected: !0
    }), this.renderer.element && this.renderer.element.classList.add("ProseMirror-selectednode");
  }
  /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */
  deselectNode() {
    this.renderer.updateProps({
      selected: !1
    }), this.renderer.element && this.renderer.element.classList.remove("ProseMirror-selectednode");
  }
  getDecorationClasses() {
    return this.decorations.map((t) => t.type.attrs.class).flat().join(" ");
  }
  destroy() {
    this.renderer.destroy(), this.editor.off("selectionUpdate", this.handleSelectionUpdate);
  }
};
function OT(t, e) {
  return (n) => {
    if (!n.editor.contentComponent)
      return {};
    const r = typeof t == "function" && "__vccOpts" in t ? t.__vccOpts : t;
    return new ET(r, n, e);
  };
}
const Gh = ["top", "right", "bottom", "left"], uu = ["start", "end"], fu = /* @__PURE__ */ Gh.reduce((t, e) => t.concat(e, e + "-" + uu[0], e + "-" + uu[1]), []), wt = Math.min, Ve = Math.max, gi = Math.round, mt = (t) => ({
  x: t,
  y: t
}), LT = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, VT = {
  start: "end",
  end: "start"
};
function Bl(t, e, n) {
  return Ve(t, wt(e, n));
}
function $t(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Ze(t) {
  return t.split("-")[0];
}
function nt(t) {
  return t.split("-")[1];
}
function Zh(t) {
  return t === "x" ? "y" : "x";
}
function Ya(t) {
  return t === "y" ? "height" : "width";
}
const HT = /* @__PURE__ */ new Set(["top", "bottom"]);
function pt(t) {
  return HT.has(Ze(t)) ? "y" : "x";
}
function Qa(t) {
  return Zh(pt(t));
}
function Xh(t, e, n) {
  n === void 0 && (n = !1);
  const r = nt(t), o = Qa(t), i = Ya(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[i] > e.floating[i] && (s = bi(s)), [s, bi(s)];
}
function RT(t) {
  const e = bi(t);
  return [yi(t), e, yi(e)];
}
function yi(t) {
  return t.replace(/start|end/g, (e) => VT[e]);
}
const pu = ["left", "right"], hu = ["right", "left"], NT = ["top", "bottom"], _T = ["bottom", "top"];
function IT(t, e, n) {
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? hu : pu : e ? pu : hu;
    case "left":
    case "right":
      return e ? NT : _T;
    default:
      return [];
  }
}
function DT(t, e, n, r) {
  const o = nt(t);
  let i = IT(Ze(t), n === "start", r);
  return o && (i = i.map((s) => s + "-" + o), e && (i = i.concat(i.map(yi)))), i;
}
function bi(t) {
  return t.replace(/left|right|bottom|top/g, (e) => LT[e]);
}
function PT(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function ec(t) {
  return typeof t != "number" ? PT(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function sr(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function mu(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const i = pt(e), s = Qa(e), l = Ya(s), a = Ze(e), c = i === "y", d = r.x + r.width / 2 - o.width / 2, u = r.y + r.height / 2 - o.height / 2, f = r[l] / 2 - o[l] / 2;
  let p;
  switch (a) {
    case "top":
      p = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      p = {
        x: r.x + r.width,
        y: u
      };
      break;
    case "left":
      p = {
        x: r.x - o.width,
        y: u
      };
      break;
    default:
      p = {
        x: r.x,
        y: r.y
      };
  }
  switch (nt(e)) {
    case "start":
      p[s] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      p[s] += f * (n && c ? -1 : 1);
      break;
  }
  return p;
}
const BT = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: s
  } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let c = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: d,
    y: u
  } = mu(c, r, a), f = r, p = {}, h = 0;
  for (let m = 0; m < l.length; m++) {
    const {
      name: g,
      fn: y
    } = l[m], {
      x: b,
      y: v,
      data: x,
      reset: k
    } = await y({
      x: d,
      y: u,
      initialPlacement: r,
      placement: f,
      strategy: o,
      middlewareData: p,
      rects: c,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    d = b ?? d, u = v ?? u, p = {
      ...p,
      [g]: {
        ...p[g],
        ...x
      }
    }, k && h <= 50 && (h++, typeof k == "object" && (k.placement && (f = k.placement), k.rects && (c = k.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : k.rects), {
      x: d,
      y: u
    } = mu(c, f, a)), m = -1);
  }
  return {
    x: d,
    y: u,
    placement: f,
    strategy: o,
    middlewareData: p
  };
};
async function lr(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: s,
    elements: l,
    strategy: a
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: f = !1,
    padding: p = 0
  } = $t(e, t), h = ec(p), g = l[f ? u === "floating" ? "reference" : "floating" : u], y = sr(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(g))) == null || n ? g : g.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: a
  })), b = u === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), x = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, k = sr(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: l,
    rect: b,
    offsetParent: v,
    strategy: a
  }) : b);
  return {
    top: (y.top - k.top + h.top) / x.y,
    bottom: (k.bottom - y.bottom + h.bottom) / x.y,
    left: (y.left - k.left + h.left) / x.x,
    right: (k.right - y.right + h.right) / x.x
  };
}
const $T = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: s,
      elements: l,
      middlewareData: a
    } = e, {
      element: c,
      padding: d = 0
    } = $t(t, e) || {};
    if (c == null)
      return {};
    const u = ec(d), f = {
      x: n,
      y: r
    }, p = Qa(o), h = Ya(p), m = await s.getDimensions(c), g = p === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", v = g ? "clientHeight" : "clientWidth", x = i.reference[h] + i.reference[p] - f[p] - i.floating[h], k = f[p] - i.reference[p], w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
    let L = w ? w[v] : 0;
    (!L || !await (s.isElement == null ? void 0 : s.isElement(w))) && (L = l.floating[v] || i.floating[h]);
    const E = x / 2 - k / 2, A = L / 2 - m[h] / 2 - 1, R = wt(u[y], A), N = wt(u[b], A), U = R, K = L - m[h] - N, oe = L / 2 - m[h] / 2 + E, be = Bl(U, oe, K), me = !a.arrow && nt(o) != null && oe !== be && i.reference[h] / 2 - (oe < U ? R : N) - m[h] / 2 < 0, ge = me ? oe < U ? oe - U : oe - K : 0;
    return {
      [p]: f[p] + ge,
      data: {
        [p]: be,
        centerOffset: oe - be - ge,
        ...me && {
          alignmentOffset: ge
        }
      },
      reset: me
    };
  }
});
function zT(t, e, n) {
  return (t ? [...n.filter((o) => nt(o) === t), ...n.filter((o) => nt(o) !== t)] : n.filter((o) => Ze(o) === o)).filter((o) => t ? nt(o) === t || (e ? yi(o) !== o : !1) : !0);
}
const FT = function(t) {
  return t === void 0 && (t = {}), {
    name: "autoPlacement",
    options: t,
    async fn(e) {
      var n, r, o;
      const {
        rects: i,
        middlewareData: s,
        placement: l,
        platform: a,
        elements: c
      } = e, {
        crossAxis: d = !1,
        alignment: u,
        allowedPlacements: f = fu,
        autoAlignment: p = !0,
        ...h
      } = $t(t, e), m = u !== void 0 || f === fu ? zT(u || null, p, f) : f, g = await lr(e, h), y = ((n = s.autoPlacement) == null ? void 0 : n.index) || 0, b = m[y];
      if (b == null)
        return {};
      const v = Xh(b, i, await (a.isRTL == null ? void 0 : a.isRTL(c.floating)));
      if (l !== b)
        return {
          reset: {
            placement: m[0]
          }
        };
      const x = [g[Ze(b)], g[v[0]], g[v[1]]], k = [...((r = s.autoPlacement) == null ? void 0 : r.overflows) || [], {
        placement: b,
        overflows: x
      }], w = m[y + 1];
      if (w)
        return {
          data: {
            index: y + 1,
            overflows: k
          },
          reset: {
            placement: w
          }
        };
      const L = k.map((R) => {
        const N = nt(R.placement);
        return [R.placement, N && d ? (
          // Check along the mainAxis and main crossAxis side.
          R.overflows.slice(0, 2).reduce((U, K) => U + K, 0)
        ) : (
          // Check only the mainAxis.
          R.overflows[0]
        ), R.overflows];
      }).sort((R, N) => R[1] - N[1]), A = ((o = L.filter((R) => R[2].slice(
        0,
        // Aligned placements should not check their opposite crossAxis
        // side.
        nt(R[0]) ? 2 : 3
      ).every((N) => N <= 0))[0]) == null ? void 0 : o[0]) || L[0][0];
      return A !== l ? {
        data: {
          index: y + 1,
          overflows: k
        },
        reset: {
          placement: A
        }
      } : {};
    }
  };
}, jT = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
        rects: s,
        initialPlacement: l,
        platform: a,
        elements: c
      } = e, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: f,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...g
      } = $t(t, e);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const y = Ze(o), b = pt(l), v = Ze(l) === l, x = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), k = f || (v || !m ? [bi(l)] : RT(l)), w = h !== "none";
      !f && w && k.push(...DT(l, m, h, x));
      const L = [l, ...k], E = await lr(e, g), A = [];
      let R = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (d && A.push(E[y]), u) {
        const oe = Xh(o, s, x);
        A.push(E[oe[0]], E[oe[1]]);
      }
      if (R = [...R, {
        placement: o,
        overflows: A
      }], !A.every((oe) => oe <= 0)) {
        var N, U;
        const oe = (((N = i.flip) == null ? void 0 : N.index) || 0) + 1, be = L[oe];
        if (be && (!(u === "alignment" ? b !== pt(be) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        R.every((Pe) => pt(Pe.placement) === b ? Pe.overflows[0] > 0 : !0)))
          return {
            data: {
              index: oe,
              overflows: R
            },
            reset: {
              placement: be
            }
          };
        let me = (U = R.filter((ge) => ge.overflows[0] <= 0).sort((ge, Pe) => ge.overflows[1] - Pe.overflows[1])[0]) == null ? void 0 : U.placement;
        if (!me)
          switch (p) {
            case "bestFit": {
              var K;
              const ge = (K = R.filter((Pe) => {
                if (w) {
                  const Ft = pt(Pe.placement);
                  return Ft === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  Ft === "y";
                }
                return !0;
              }).map((Pe) => [Pe.placement, Pe.overflows.filter((Ft) => Ft > 0).reduce((Ft, cg) => Ft + cg, 0)]).sort((Pe, Ft) => Pe[1] - Ft[1])[0]) == null ? void 0 : K[0];
              ge && (me = ge);
              break;
            }
            case "initialPlacement":
              me = l;
              break;
          }
        if (o !== me)
          return {
            reset: {
              placement: me
            }
          };
      }
      return {};
    }
  };
};
function gu(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width
  };
}
function yu(t) {
  return Gh.some((e) => t[e] >= 0);
}
const WT = function(t) {
  return t === void 0 && (t = {}), {
    name: "hide",
    options: t,
    async fn(e) {
      const {
        rects: n
      } = e, {
        strategy: r = "referenceHidden",
        ...o
      } = $t(t, e);
      switch (r) {
        case "referenceHidden": {
          const i = await lr(e, {
            ...o,
            elementContext: "reference"
          }), s = gu(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: yu(s)
            }
          };
        }
        case "escaped": {
          const i = await lr(e, {
            ...o,
            altBoundary: !0
          }), s = gu(i, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: yu(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
function Yh(t) {
  const e = wt(...t.map((i) => i.left)), n = wt(...t.map((i) => i.top)), r = Ve(...t.map((i) => i.right)), o = Ve(...t.map((i) => i.bottom));
  return {
    x: e,
    y: n,
    width: r - e,
    height: o - n
  };
}
function UT(t) {
  const e = t.slice().sort((o, i) => o.y - i.y), n = [];
  let r = null;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    !r || i.y - r.y > r.height / 2 ? n.push([i]) : n[n.length - 1].push(i), r = i;
  }
  return n.map((o) => sr(Yh(o)));
}
const KT = function(t) {
  return t === void 0 && (t = {}), {
    name: "inline",
    options: t,
    async fn(e) {
      const {
        placement: n,
        elements: r,
        rects: o,
        platform: i,
        strategy: s
      } = e, {
        padding: l = 2,
        x: a,
        y: c
      } = $t(t, e), d = Array.from(await (i.getClientRects == null ? void 0 : i.getClientRects(r.reference)) || []), u = UT(d), f = sr(Yh(d)), p = ec(l);
      function h() {
        if (u.length === 2 && u[0].left > u[1].right && a != null && c != null)
          return u.find((g) => a > g.left - p.left && a < g.right + p.right && c > g.top - p.top && c < g.bottom + p.bottom) || f;
        if (u.length >= 2) {
          if (pt(n) === "y") {
            const R = u[0], N = u[u.length - 1], U = Ze(n) === "top", K = R.top, oe = N.bottom, be = U ? R.left : N.left, me = U ? R.right : N.right, ge = me - be, Pe = oe - K;
            return {
              top: K,
              bottom: oe,
              left: be,
              right: me,
              width: ge,
              height: Pe,
              x: be,
              y: K
            };
          }
          const g = Ze(n) === "left", y = Ve(...u.map((R) => R.right)), b = wt(...u.map((R) => R.left)), v = u.filter((R) => g ? R.left === b : R.right === y), x = v[0].top, k = v[v.length - 1].bottom, w = b, L = y, E = L - w, A = k - x;
          return {
            top: x,
            bottom: k,
            left: w,
            right: L,
            width: E,
            height: A,
            x: w,
            y: x
          };
        }
        return f;
      }
      const m = await i.getElementRects({
        reference: {
          getBoundingClientRect: h
        },
        floating: r.floating,
        strategy: s
      });
      return o.reference.x !== m.reference.x || o.reference.y !== m.reference.y || o.reference.width !== m.reference.width || o.reference.height !== m.reference.height ? {
        reset: {
          rects: m
        }
      } : {};
    }
  };
}, qT = /* @__PURE__ */ new Set(["left", "top"]);
async function JT(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = Ze(n), l = nt(n), a = pt(n) === "y", c = qT.has(s) ? -1 : 1, d = i && a ? -1 : 1, u = $t(e, t);
  let {
    mainAxis: f,
    crossAxis: p,
    alignmentAxis: h
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: u.mainAxis || 0,
    crossAxis: u.crossAxis || 0,
    alignmentAxis: u.alignmentAxis
  };
  return l && typeof h == "number" && (p = l === "end" ? h * -1 : h), a ? {
    x: p * d,
    y: f * c
  } : {
    x: f * c,
    y: p * d
  };
}
const GT = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: s,
        middlewareData: l
      } = e, a = await JT(e, t);
      return s === ((n = l.offset) == null ? void 0 : n.placement) && (r = l.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: s
        }
      };
    }
  };
}, ZT = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
        mainAxis: i = !0,
        crossAxis: s = !1,
        limiter: l = {
          fn: (g) => {
            let {
              x: y,
              y: b
            } = g;
            return {
              x: y,
              y: b
            };
          }
        },
        ...a
      } = $t(t, e), c = {
        x: n,
        y: r
      }, d = await lr(e, a), u = pt(Ze(o)), f = Zh(u);
      let p = c[f], h = c[u];
      if (i) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", b = p + d[g], v = p - d[y];
        p = Bl(b, p, v);
      }
      if (s) {
        const g = u === "y" ? "top" : "left", y = u === "y" ? "bottom" : "right", b = h + d[g], v = h - d[y];
        h = Bl(b, h, v);
      }
      const m = l.fn({
        ...e,
        [f]: p,
        [u]: h
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [f]: i,
            [u]: s
          }
        }
      };
    }
  };
}, XT = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        rects: i,
        platform: s,
        elements: l
      } = e, {
        apply: a = () => {
        },
        ...c
      } = $t(t, e), d = await lr(e, c), u = Ze(o), f = nt(o), p = pt(o) === "y", {
        width: h,
        height: m
      } = i.floating;
      let g, y;
      u === "top" || u === "bottom" ? (g = u, y = f === (await (s.isRTL == null ? void 0 : s.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (y = u, g = f === "end" ? "top" : "bottom");
      const b = m - d.top - d.bottom, v = h - d.left - d.right, x = wt(m - d[g], b), k = wt(h - d[y], v), w = !e.middlewareData.shift;
      let L = x, E = k;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (E = v), (r = e.middlewareData.shift) != null && r.enabled.y && (L = b), w && !f) {
        const R = Ve(d.left, 0), N = Ve(d.right, 0), U = Ve(d.top, 0), K = Ve(d.bottom, 0);
        p ? E = h - 2 * (R !== 0 || N !== 0 ? R + N : Ve(d.left, d.right)) : L = m - 2 * (U !== 0 || K !== 0 ? U + K : Ve(d.top, d.bottom));
      }
      await a({
        ...e,
        availableWidth: E,
        availableHeight: L
      });
      const A = await s.getDimensions(l.floating);
      return h !== A.width || m !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ks() {
  return typeof window < "u";
}
function fr(t) {
  return Qh(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function ze(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function zt(t) {
  var e;
  return (e = (Qh(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function Qh(t) {
  return ks() ? t instanceof Node || t instanceof ze(t).Node : !1;
}
function it(t) {
  return ks() ? t instanceof Element || t instanceof ze(t).Element : !1;
}
function kt(t) {
  return ks() ? t instanceof HTMLElement || t instanceof ze(t).HTMLElement : !1;
}
function bu(t) {
  return !ks() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof ze(t).ShadowRoot;
}
const YT = /* @__PURE__ */ new Set(["inline", "contents"]);
function ho(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = st(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !YT.has(o);
}
const QT = /* @__PURE__ */ new Set(["table", "td", "th"]);
function eA(t) {
  return QT.has(fr(t));
}
const tA = [":popover-open", ":modal"];
function Ss(t) {
  return tA.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const nA = ["transform", "translate", "scale", "rotate", "perspective"], rA = ["transform", "translate", "scale", "rotate", "perspective", "filter"], oA = ["paint", "layout", "strict", "content"];
function tc(t) {
  const e = nc(), n = it(t) ? st(t) : t;
  return nA.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || rA.some((r) => (n.willChange || "").includes(r)) || oA.some((r) => (n.contain || "").includes(r));
}
function iA(t) {
  let e = dn(t);
  for (; kt(e) && !ar(e); ) {
    if (tc(e))
      return e;
    if (Ss(e))
      return null;
    e = dn(e);
  }
  return null;
}
function nc() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const sA = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ar(t) {
  return sA.has(fr(t));
}
function st(t) {
  return ze(t).getComputedStyle(t);
}
function xs(t) {
  return it(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function dn(t) {
  if (fr(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    bu(t) && t.host || // Fallback.
    zt(t)
  );
  return bu(e) ? e.host : e;
}
function em(t) {
  const e = dn(t);
  return ar(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : kt(e) && ho(e) ? e : em(e);
}
function $l(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = em(t), i = o === ((r = t.ownerDocument) == null ? void 0 : r.body), s = ze(o);
  if (i) {
    const l = zl(s);
    return e.concat(s, s.visualViewport || [], ho(o) ? o : [], l && n ? $l(l) : []);
  }
  return e.concat(o, $l(o, [], n));
}
function zl(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function tm(t) {
  const e = st(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = kt(t), i = o ? t.offsetWidth : n, s = o ? t.offsetHeight : r, l = gi(n) !== i || gi(r) !== s;
  return l && (n = i, r = s), {
    width: n,
    height: r,
    $: l
  };
}
function nm(t) {
  return it(t) ? t : t.contextElement;
}
function Xn(t) {
  const e = nm(t);
  if (!kt(e))
    return mt(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = tm(e);
  let s = (i ? gi(n.width) : n.width) / r, l = (i ? gi(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), {
    x: s,
    y: l
  };
}
const lA = /* @__PURE__ */ mt(0);
function rm(t) {
  const e = ze(t);
  return !nc() || !e.visualViewport ? lA : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function aA(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== ze(t) ? !1 : e;
}
function Xr(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), i = nm(t);
  let s = mt(1);
  e && (r ? it(r) && (s = Xn(r)) : s = Xn(t));
  const l = aA(i, n, r) ? rm(i) : mt(0);
  let a = (o.left + l.x) / s.x, c = (o.top + l.y) / s.y, d = o.width / s.x, u = o.height / s.y;
  if (i) {
    const f = ze(i), p = r && it(r) ? ze(r) : r;
    let h = f, m = zl(h);
    for (; m && r && p !== h; ) {
      const g = Xn(m), y = m.getBoundingClientRect(), b = st(m), v = y.left + (m.clientLeft + parseFloat(b.paddingLeft)) * g.x, x = y.top + (m.clientTop + parseFloat(b.paddingTop)) * g.y;
      a *= g.x, c *= g.y, d *= g.x, u *= g.y, a += v, c += x, h = ze(m), m = zl(h);
    }
  }
  return sr({
    width: d,
    height: u,
    x: a,
    y: c
  });
}
function Cs(t, e) {
  const n = xs(t).scrollLeft;
  return e ? e.left + n : Xr(zt(t)).left + n;
}
function om(t, e) {
  const n = t.getBoundingClientRect(), r = n.left + e.scrollLeft - Cs(t, n), o = n.top + e.scrollTop;
  return {
    x: r,
    y: o
  };
}
function cA(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const i = o === "fixed", s = zt(r), l = e ? Ss(e.floating) : !1;
  if (r === s || l && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = mt(1);
  const d = mt(0), u = kt(r);
  if ((u || !u && !i) && ((fr(r) !== "body" || ho(s)) && (a = xs(r)), kt(r))) {
    const p = Xr(r);
    c = Xn(r), d.x = p.x + r.clientLeft, d.y = p.y + r.clientTop;
  }
  const f = s && !u && !i ? om(s, a) : mt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + d.x + f.x,
    y: n.y * c.y - a.scrollTop * c.y + d.y + f.y
  };
}
function dA(t) {
  return Array.from(t.getClientRects());
}
function uA(t) {
  const e = zt(t), n = xs(t), r = t.ownerDocument.body, o = Ve(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), i = Ve(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Cs(t);
  const l = -n.scrollTop;
  return st(r).direction === "rtl" && (s += Ve(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
const vu = 25;
function fA(t, e) {
  const n = ze(t), r = zt(t), o = n.visualViewport;
  let i = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (o) {
    i = o.width, s = o.height;
    const d = nc();
    (!d || d && e === "fixed") && (l = o.offsetLeft, a = o.offsetTop);
  }
  const c = Cs(r);
  if (c <= 0) {
    const d = r.ownerDocument, u = d.body, f = getComputedStyle(u), p = d.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, h = Math.abs(r.clientWidth - u.clientWidth - p);
    h <= vu && (i -= h);
  } else c <= vu && (i += c);
  return {
    width: i,
    height: s,
    x: l,
    y: a
  };
}
const pA = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function hA(t, e) {
  const n = Xr(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, i = kt(t) ? Xn(t) : mt(1), s = t.clientWidth * i.x, l = t.clientHeight * i.y, a = o * i.x, c = r * i.y;
  return {
    width: s,
    height: l,
    x: a,
    y: c
  };
}
function wu(t, e, n) {
  let r;
  if (e === "viewport")
    r = fA(t, n);
  else if (e === "document")
    r = uA(zt(t));
  else if (it(e))
    r = hA(e, n);
  else {
    const o = rm(t);
    r = {
      x: e.x - o.x,
      y: e.y - o.y,
      width: e.width,
      height: e.height
    };
  }
  return sr(r);
}
function im(t, e) {
  const n = dn(t);
  return n === e || !it(n) || ar(n) ? !1 : st(n).position === "fixed" || im(n, e);
}
function mA(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = $l(t, [], !1).filter((l) => it(l) && fr(l) !== "body"), o = null;
  const i = st(t).position === "fixed";
  let s = i ? dn(t) : t;
  for (; it(s) && !ar(s); ) {
    const l = st(s), a = tc(s);
    !a && l.position === "fixed" && (o = null), (i ? !a && !o : !a && l.position === "static" && !!o && pA.has(o.position) || ho(s) && !a && im(t, s)) ? r = r.filter((d) => d !== s) : o = l, s = dn(s);
  }
  return e.set(t, r), r;
}
function gA(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const s = [...n === "clippingAncestors" ? Ss(e) ? [] : mA(e, this._c) : [].concat(n), r], l = s[0], a = s.reduce((c, d) => {
    const u = wu(e, d, o);
    return c.top = Ve(u.top, c.top), c.right = wt(u.right, c.right), c.bottom = wt(u.bottom, c.bottom), c.left = Ve(u.left, c.left), c;
  }, wu(e, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function yA(t) {
  const {
    width: e,
    height: n
  } = tm(t);
  return {
    width: e,
    height: n
  };
}
function bA(t, e, n) {
  const r = kt(e), o = zt(e), i = n === "fixed", s = Xr(t, !0, i, e);
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = mt(0);
  function c() {
    a.x = Cs(o);
  }
  if (r || !r && !i)
    if ((fr(e) !== "body" || ho(o)) && (l = xs(e)), r) {
      const p = Xr(e, !0, i, e);
      a.x = p.x + e.clientLeft, a.y = p.y + e.clientTop;
    } else o && c();
  i && !r && o && c();
  const d = o && !r && !i ? om(o, l) : mt(0), u = s.left + l.scrollLeft - a.x - d.x, f = s.top + l.scrollTop - a.y - d.y;
  return {
    x: u,
    y: f,
    width: s.width,
    height: s.height
  };
}
function Qs(t) {
  return st(t).position === "static";
}
function ku(t, e) {
  if (!kt(t) || st(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return zt(t) === n && (n = n.ownerDocument.body), n;
}
function sm(t, e) {
  const n = ze(t);
  if (Ss(t))
    return n;
  if (!kt(t)) {
    let o = dn(t);
    for (; o && !ar(o); ) {
      if (it(o) && !Qs(o))
        return o;
      o = dn(o);
    }
    return n;
  }
  let r = ku(t, e);
  for (; r && eA(r) && Qs(r); )
    r = ku(r, e);
  return r && ar(r) && Qs(r) && !tc(r) ? n : r || iA(t) || n;
}
const vA = async function(t) {
  const e = this.getOffsetParent || sm, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: bA(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function wA(t) {
  return st(t).direction === "rtl";
}
const kA = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cA,
  getDocumentElement: zt,
  getClippingRect: gA,
  getOffsetParent: sm,
  getElementRects: vA,
  getClientRects: dA,
  getDimensions: yA,
  getScale: Xn,
  isElement: it,
  isRTL: wA
}, SA = GT, xA = FT, CA = ZT, TA = jT, AA = XT, MA = WT, EA = $T, OA = KT, LA = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: kA,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return BT(t, e, {
    ...o,
    platform: i
  });
};
var Fl, jl;
if (typeof WeakMap < "u") {
  let t = /* @__PURE__ */ new WeakMap();
  Fl = (e) => t.get(e), jl = (e, n) => (t.set(e, n), n);
} else {
  const t = [];
  let n = 0;
  Fl = (r) => {
    for (let o = 0; o < t.length; o += 2)
      if (t[o] == r) return t[o + 1];
  }, jl = (r, o) => (n == 10 && (n = 0), t[n++] = r, t[n++] = o);
}
var de = class {
  constructor(t, e, n, r) {
    this.width = t, this.height = e, this.map = n, this.problems = r;
  }
  // Find the dimensions of the cell at the given position.
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      const n = this.map[e];
      if (n != t) continue;
      const r = e % this.width, o = e / this.width | 0;
      let i = r + 1, s = o + 1;
      for (let l = 1; i < this.width && this.map[e + l] == n; l++)
        i++;
      for (let l = 1; s < this.height && this.map[e + this.width * l] == n; l++)
        s++;
      return { left: r, top: o, right: i, bottom: s };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the left side of the cell at the given position.
  colCount(t) {
    for (let e = 0; e < this.map.length; e++)
      if (this.map[e] == t)
        return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  // Find the next cell in the given direction, starting from the cell
  // at `pos`, if any.
  nextCell(t, e, n) {
    const { left: r, right: o, top: i, bottom: s } = this.findCell(t);
    return e == "horiz" ? (n < 0 ? r == 0 : o == this.width) ? null : this.map[i * this.width + (n < 0 ? r - 1 : o)] : (n < 0 ? i == 0 : s == this.height) ? null : this.map[r + this.width * (n < 0 ? i - 1 : s)];
  }
  // Get the rectangle spanning the two given cells.
  rectBetween(t, e) {
    const {
      left: n,
      right: r,
      top: o,
      bottom: i
    } = this.findCell(t), {
      left: s,
      right: l,
      top: a,
      bottom: c
    } = this.findCell(e);
    return {
      left: Math.min(n, s),
      top: Math.min(o, a),
      right: Math.max(r, l),
      bottom: Math.max(i, c)
    };
  }
  // Return the position of all cells that have the top left corner in
  // the given rectangle.
  cellsInRect(t) {
    const e = [], n = {};
    for (let r = t.top; r < t.bottom; r++)
      for (let o = t.left; o < t.right; o++) {
        const i = r * this.width + o, s = this.map[i];
        n[s] || (n[s] = !0, !(o == t.left && o && this.map[i - 1] == s || r == t.top && r && this.map[i - this.width] == s) && e.push(s));
      }
    return e;
  }
  // Return the position at which the cell at the given row and column
  // starts, or would start, if a cell started there.
  positionAt(t, e, n) {
    for (let r = 0, o = 0; ; r++) {
      const i = o + n.child(r).nodeSize;
      if (r == t) {
        let s = e + t * this.width;
        const l = (t + 1) * this.width;
        for (; s < l && this.map[s] < o; ) s++;
        return s == l ? i - 1 : this.map[s];
      }
      o = i;
    }
  }
  // Find the table map for the given table node.
  static get(t) {
    return Fl(t) || jl(t, VA(t));
  }
};
function VA(t) {
  if (t.type.spec.tableRole != "table")
    throw new RangeError("Not a table node: " + t.type.name);
  const e = HA(t), n = t.childCount, r = [];
  let o = 0, i = null;
  const s = [];
  for (let c = 0, d = e * n; c < d; c++) r[c] = 0;
  for (let c = 0, d = 0; c < n; c++) {
    const u = t.child(c);
    d++;
    for (let h = 0; ; h++) {
      for (; o < r.length && r[o] != 0; ) o++;
      if (h == u.childCount) break;
      const m = u.child(h), { colspan: g, rowspan: y, colwidth: b } = m.attrs;
      for (let v = 0; v < y; v++) {
        if (v + c >= n) {
          (i || (i = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: y - v
          });
          break;
        }
        const x = o + v * e;
        for (let k = 0; k < g; k++) {
          r[x + k] == 0 ? r[x + k] = d : (i || (i = [])).push({
            type: "collision",
            row: c,
            pos: d,
            n: g - k
          });
          const w = b && b[k];
          if (w) {
            const L = (x + k) % e * 2, E = s[L];
            E == null || E != w && s[L + 1] == 1 ? (s[L] = w, s[L + 1] = 1) : E == w && s[L + 1]++;
          }
        }
      }
      o += g, d += m.nodeSize;
    }
    const f = (c + 1) * e;
    let p = 0;
    for (; o < f; ) r[o++] == 0 && p++;
    p && (i || (i = [])).push({ type: "missing", row: c, n: p }), d++;
  }
  (e === 0 || n === 0) && (i || (i = [])).push({ type: "zero_sized" });
  const l = new de(e, n, r, i);
  let a = !1;
  for (let c = 0; !a && c < s.length; c += 2)
    s[c] != null && s[c + 1] < n && (a = !0);
  return a && RA(l, s, t), l;
}
function HA(t) {
  let e = -1, n = !1;
  for (let r = 0; r < t.childCount; r++) {
    const o = t.child(r);
    let i = 0;
    if (n)
      for (let s = 0; s < r; s++) {
        const l = t.child(s);
        for (let a = 0; a < l.childCount; a++) {
          const c = l.child(a);
          s + c.attrs.rowspan > r && (i += c.attrs.colspan);
        }
      }
    for (let s = 0; s < o.childCount; s++) {
      const l = o.child(s);
      i += l.attrs.colspan, l.attrs.rowspan > 1 && (n = !0);
    }
    e == -1 ? e = i : e != i && (e = Math.max(e, i));
  }
  return e;
}
function RA(t, e, n) {
  t.problems || (t.problems = []);
  const r = {};
  for (let o = 0; o < t.map.length; o++) {
    const i = t.map[o];
    if (r[i]) continue;
    r[i] = !0;
    const s = n.nodeAt(i);
    if (!s)
      throw new RangeError(`No cell with offset ${i} found`);
    let l = null;
    const a = s.attrs;
    for (let c = 0; c < a.colspan; c++) {
      const d = (o + c) % t.width, u = e[d * 2];
      u != null && (!a.colwidth || a.colwidth[c] != u) && ((l || (l = NA(a)))[c] = u);
    }
    l && t.problems.unshift({
      type: "colwidth mismatch",
      pos: i,
      colwidth: l
    });
  }
}
function NA(t) {
  if (t.colwidth) return t.colwidth.slice();
  const e = [];
  for (let n = 0; n < t.colspan; n++) e.push(0);
  return e;
}
function Oe(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (const n in t.nodes) {
      const r = t.nodes[n], o = r.spec.tableRole;
      o && (e[o] = r);
    }
  }
  return e;
}
var Zt = new ue("selectingCells");
function pr(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row")
      return t.node(0).resolve(t.before(e + 1));
  return null;
}
function _A(t) {
  for (let e = t.depth; e > 0; e--) {
    const n = t.node(e).type.spec.tableRole;
    if (n === "cell" || n === "header_cell") return t.node(e);
  }
  return null;
}
function ct(t) {
  const e = t.selection.$head;
  for (let n = e.depth; n > 0; n--)
    if (e.node(n).type.spec.tableRole == "row") return !0;
  return !1;
}
function Ts(t) {
  const e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell")
    return e.$anchor;
  const n = pr(e.$head) || IA(e.$head);
  if (n)
    return n;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function IA(t) {
  for (let e = t.nodeAfter, n = t.pos; e; e = e.firstChild, n++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return t.doc.resolve(n);
  }
  for (let e = t.nodeBefore, n = t.pos; e; e = e.lastChild, n--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell")
      return t.doc.resolve(n - e.nodeSize);
  }
}
function Wl(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function DA(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function rc(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function lm(t, e, n) {
  const r = t.node(-1), o = de.get(r), i = t.start(-1), s = o.nextCell(t.pos - i, e, n);
  return s == null ? null : t.node(0).resolve(i + s);
}
function On(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan - n };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, n), r.colwidth.some((o) => o > 0) || (r.colwidth = null)), r;
}
function am(t, e, n = 1) {
  const r = { ...t, colspan: t.colspan + n };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let o = 0; o < n; o++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function PA(t, e, n) {
  const r = Oe(e.type.schema).header_cell;
  for (let o = 0; o < t.height; o++)
    if (e.nodeAt(t.map[n + o * t.width]).type != r)
      return !1;
  return !0;
}
var X = class At extends B {
  // A table selection is identified by its anchor and head cells. The
  // positions given to this constructor should point _before_ two
  // cells in the same table. They may be the same, to select a single
  // cell.
  constructor(e, n = e) {
    const r = e.node(-1), o = de.get(r), i = e.start(-1), s = o.rectBetween(
      e.pos - i,
      n.pos - i
    ), l = e.node(0), a = o.cellsInRect(s).filter((d) => d != n.pos - i);
    a.unshift(n.pos - i);
    const c = a.map((d) => {
      const u = r.nodeAt(d);
      if (!u)
        throw RangeError(`No cell with offset ${d} found`);
      const f = i + d + 1;
      return new Ap(
        l.resolve(f),
        l.resolve(f + u.content.size)
      );
    });
    super(c[0].$from, c[0].$to, c), this.$anchorCell = e, this.$headCell = n;
  }
  map(e, n) {
    const r = e.resolve(n.map(this.$anchorCell.pos)), o = e.resolve(n.map(this.$headCell.pos));
    if (Wl(r) && Wl(o) && rc(r, o)) {
      const i = this.$anchorCell.node(-1) != r.node(-1);
      return i && this.isRowSelection() ? At.rowSelection(r, o) : i && this.isColSelection() ? At.colSelection(r, o) : new At(r, o);
    }
    return P.between(r, o);
  }
  // Returns a rectangular slice of table rows containing the selected
  // cells.
  content() {
    const e = this.$anchorCell.node(-1), n = de.get(e), r = this.$anchorCell.start(-1), o = n.rectBetween(
      this.$anchorCell.pos - r,
      this.$headCell.pos - r
    ), i = {}, s = [];
    for (let a = o.top; a < o.bottom; a++) {
      const c = [];
      for (let d = a * n.width + o.left, u = o.left; u < o.right; u++, d++) {
        const f = n.map[d];
        if (i[f]) continue;
        i[f] = !0;
        const p = n.findCell(f);
        let h = e.nodeAt(f);
        if (!h)
          throw RangeError(`No cell with offset ${f} found`);
        const m = o.left - p.left, g = p.right - o.right;
        if (m > 0 || g > 0) {
          let y = h.attrs;
          if (m > 0 && (y = On(y, 0, m)), g > 0 && (y = On(
            y,
            y.colspan - g,
            g
          )), p.left < o.left) {
            if (h = h.type.createAndFill(y), !h)
              throw RangeError(
                `Could not create cell with attrs ${JSON.stringify(y)}`
              );
          } else
            h = h.type.create(y, h.content);
        }
        if (p.top < o.top || p.bottom > o.bottom) {
          const y = {
            ...h.attrs,
            rowspan: Math.min(p.bottom, o.bottom) - Math.max(p.top, o.top)
          };
          p.top < o.top ? h = h.type.createAndFill(y) : h = h.type.create(y, h.content);
        }
        c.push(h);
      }
      s.push(e.child(a).copy(S.from(c)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : s;
    return new O(S.from(l), 1, 1);
  }
  replace(e, n = O.empty) {
    const r = e.steps.length, o = this.ranges;
    for (let s = 0; s < o.length; s++) {
      const { $from: l, $to: a } = o[s], c = e.mapping.slice(r);
      e.replace(
        c.map(l.pos),
        c.map(a.pos),
        s ? O.empty : n
      );
    }
    const i = B.findFrom(
      e.doc.resolve(e.mapping.slice(r).map(this.to)),
      -1
    );
    i && e.setSelection(i);
  }
  replaceWith(e, n) {
    this.replace(e, new O(S.from(n), 0, 0));
  }
  forEachCell(e) {
    const n = this.$anchorCell.node(-1), r = de.get(n), o = this.$anchorCell.start(-1), i = r.cellsInRect(
      r.rectBetween(
        this.$anchorCell.pos - o,
        this.$headCell.pos - o
      )
    );
    for (let s = 0; s < i.length; s++)
      e(n.nodeAt(i[s]), o + i[s]);
  }
  // True if this selection goes all the way from the top to the
  // bottom of the table.
  isColSelection() {
    const e = this.$anchorCell.index(-1), n = this.$headCell.index(-1);
    if (Math.min(e, n) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, o = n + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, o) == this.$headCell.node(-1).childCount;
  }
  // Returns the smallest column selection that covers the given anchor
  // and head cell.
  static colSelection(e, n = e) {
    const r = e.node(-1), o = de.get(r), i = e.start(-1), s = o.findCell(e.pos - i), l = o.findCell(n.pos - i), a = e.node(0);
    return s.top <= l.top ? (s.top > 0 && (e = a.resolve(i + o.map[s.left])), l.bottom < o.height && (n = a.resolve(
      i + o.map[o.width * (o.height - 1) + l.right - 1]
    ))) : (l.top > 0 && (n = a.resolve(i + o.map[l.left])), s.bottom < o.height && (e = a.resolve(
      i + o.map[o.width * (o.height - 1) + s.right - 1]
    ))), new At(e, n);
  }
  // True if this selection goes all the way from the left to the
  // right of the table.
  isRowSelection() {
    const e = this.$anchorCell.node(-1), n = de.get(e), r = this.$anchorCell.start(-1), o = n.colCount(this.$anchorCell.pos - r), i = n.colCount(this.$headCell.pos - r);
    if (Math.min(o, i) > 0) return !1;
    const s = o + this.$anchorCell.nodeAfter.attrs.colspan, l = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, l) == n.width;
  }
  eq(e) {
    return e instanceof At && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  // Returns the smallest row selection that covers the given anchor
  // and head cell.
  static rowSelection(e, n = e) {
    const r = e.node(-1), o = de.get(r), i = e.start(-1), s = o.findCell(e.pos - i), l = o.findCell(n.pos - i), a = e.node(0);
    return s.left <= l.left ? (s.left > 0 && (e = a.resolve(
      i + o.map[s.top * o.width]
    )), l.right < o.width && (n = a.resolve(
      i + o.map[o.width * (l.top + 1) - 1]
    ))) : (l.left > 0 && (n = a.resolve(i + o.map[l.top * o.width])), s.right < o.width && (e = a.resolve(
      i + o.map[o.width * (s.top + 1) - 1]
    ))), new At(e, n);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, n) {
    return new At(e.resolve(n.anchor), e.resolve(n.head));
  }
  static create(e, n, r = n) {
    return new At(e.resolve(n), e.resolve(r));
  }
  getBookmark() {
    return new BA(this.$anchorCell.pos, this.$headCell.pos);
  }
};
X.prototype.visible = !1;
B.jsonID("cell", X);
var BA = class cm {
  constructor(e, n) {
    this.anchor = e, this.head = n;
  }
  map(e) {
    return new cm(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const n = e.resolve(this.anchor), r = e.resolve(this.head);
    return n.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && n.index() < n.parent.childCount && r.index() < r.parent.childCount && rc(n, r) ? new X(n, r) : B.near(r, 1);
  }
};
function $A(t) {
  if (!(t.selection instanceof X)) return null;
  const e = [];
  return t.selection.forEachCell((n, r) => {
    e.push(
      we.node(r, r + n.nodeSize, { class: "selectedCell" })
    );
  }), Q.create(t.doc, e);
}
function zA({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let n = t.pos, r = e.pos, o = t.depth;
  for (; o >= 0 && !(t.after(o + 1) < t.end(o)); o--, n++)
    ;
  for (let i = e.depth; i >= 0 && !(e.before(i + 1) > e.start(i)); i--, r--)
    ;
  return n == r && /row|table/.test(t.node(o).type.spec.tableRole);
}
function FA({ $from: t, $to: e }) {
  let n, r;
  for (let o = t.depth; o > 0; o--) {
    const i = t.node(o);
    if (i.type.spec.tableRole === "cell" || i.type.spec.tableRole === "header_cell") {
      n = i;
      break;
    }
  }
  for (let o = e.depth; o > 0; o--) {
    const i = e.node(o);
    if (i.type.spec.tableRole === "cell" || i.type.spec.tableRole === "header_cell") {
      r = i;
      break;
    }
  }
  return n !== r && e.parentOffset === 0;
}
function jA(t, e, n) {
  const r = (e || t).selection, o = (e || t).doc;
  let i, s;
  if (r instanceof I && (s = r.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell")
      i = X.create(o, r.from);
    else if (s == "row") {
      const l = o.resolve(r.from + 1);
      i = X.rowSelection(l, l);
    } else if (!n) {
      const l = de.get(r.node), a = r.from + 1, c = a + l.map[l.width * l.height - 1];
      i = X.create(o, a + 1, c);
    }
  } else r instanceof P && zA(r) ? i = P.create(o, r.from) : r instanceof P && FA(r) && (i = P.create(o, r.$from.start(), r.$from.end()));
  return i && (e || (e = t.tr)).setSelection(i), e;
}
var WA = new ue("fix-tables");
function dm(t, e, n, r) {
  const o = t.childCount, i = e.childCount;
  e: for (let s = 0, l = 0; s < i; s++) {
    const a = e.child(s);
    for (let c = l, d = Math.min(o, s + 3); c < d; c++)
      if (t.child(c) == a) {
        l = c + 1, n += a.nodeSize;
        continue e;
      }
    r(a, n), l < o && t.child(l).sameMarkup(a) ? dm(t.child(l), a, n + 1, r) : a.nodesBetween(0, a.content.size, r, n + 1), n += a.nodeSize;
  }
}
function um(t, e) {
  let n;
  const r = (o, i) => {
    o.type.spec.tableRole == "table" && (n = UA(t, o, i, n));
  };
  return e ? e.doc != t.doc && dm(e.doc, t.doc, 0, r) : t.doc.descendants(r), n;
}
function UA(t, e, n, r) {
  const o = de.get(e);
  if (!o.problems) return r;
  r || (r = t.tr);
  const i = [];
  for (let a = 0; a < o.height; a++) i.push(0);
  for (let a = 0; a < o.problems.length; a++) {
    const c = o.problems[a];
    if (c.type == "collision") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      const u = d.attrs;
      for (let f = 0; f < u.rowspan; f++) i[c.row + f] += c.n;
      r.setNodeMarkup(
        r.mapping.map(n + 1 + c.pos),
        null,
        On(u, u.colspan - c.n, c.n)
      );
    } else if (c.type == "missing")
      i[c.row] += c.n;
    else if (c.type == "overlong_rowspan") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - c.n
      });
    } else if (c.type == "colwidth mismatch") {
      const d = e.nodeAt(c.pos);
      if (!d) continue;
      r.setNodeMarkup(r.mapping.map(n + 1 + c.pos), null, {
        ...d.attrs,
        colwidth: c.colwidth
      });
    } else if (c.type == "zero_sized") {
      const d = r.mapping.map(n);
      r.delete(d, d + e.nodeSize);
    }
  }
  let s, l;
  for (let a = 0; a < i.length; a++)
    i[a] && (s == null && (s = a), l = a);
  for (let a = 0, c = n + 1; a < o.height; a++) {
    const d = e.child(a), u = c + d.nodeSize, f = i[a];
    if (f > 0) {
      let p = "cell";
      d.firstChild && (p = d.firstChild.type.spec.tableRole);
      const h = [];
      for (let g = 0; g < f; g++) {
        const y = Oe(t.schema)[p].createAndFill();
        y && h.push(y);
      }
      const m = (a == 0 || s == a - 1) && l == a ? c + 1 : u - 1;
      r.insert(r.mapping.map(m), h);
    }
    c = u;
  }
  return r.setMeta(WA, { fixTables: !0 });
}
function St(t) {
  const e = t.selection, n = Ts(t), r = n.node(-1), o = n.start(-1), i = de.get(r);
  return { ...e instanceof X ? i.rectBetween(
    e.$anchorCell.pos - o,
    e.$headCell.pos - o
  ) : i.findCell(n.pos - o), tableStart: o, map: i, table: r };
}
function fm(t, { map: e, tableStart: n, table: r }, o) {
  let i = o > 0 ? -1 : 0;
  PA(e, r, o + i) && (i = o == 0 || o == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    const l = s * e.width + o;
    if (o > 0 && o < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], c = r.nodeAt(a);
      t.setNodeMarkup(
        t.mapping.map(n + a),
        null,
        am(c.attrs, o - e.colCount(a))
      ), s += c.attrs.rowspan - 1;
    } else {
      const a = i == null ? Oe(r.type.schema).cell : r.nodeAt(e.map[l + i]).type, c = e.positionAt(s, o, r);
      t.insert(t.mapping.map(n + c), a.createAndFill());
    }
  }
  return t;
}
function KA(t, e) {
  if (!ct(t)) return !1;
  if (e) {
    const n = St(t);
    e(fm(t.tr, n, n.left));
  }
  return !0;
}
function qA(t, e) {
  if (!ct(t)) return !1;
  if (e) {
    const n = St(t);
    e(fm(t.tr, n, n.right));
  }
  return !0;
}
function JA(t, { map: e, table: n, tableStart: r }, o) {
  const i = t.mapping.maps.length;
  for (let s = 0; s < e.height; ) {
    const l = s * e.width + o, a = e.map[l], c = n.nodeAt(a), d = c.attrs;
    if (o > 0 && e.map[l - 1] == a || o < e.width - 1 && e.map[l + 1] == a)
      t.setNodeMarkup(
        t.mapping.slice(i).map(r + a),
        null,
        On(d, o - e.colCount(a))
      );
    else {
      const u = t.mapping.slice(i).map(r + a);
      t.delete(u, u + c.nodeSize);
    }
    s += d.rowspan;
  }
}
function GA(t, e) {
  if (!ct(t)) return !1;
  if (e) {
    const n = St(t), r = t.tr;
    if (n.left == 0 && n.right == n.map.width) return !1;
    for (let o = n.right - 1; JA(r, n, o), o != n.left; o--) {
      const i = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!i)
        throw RangeError("No table found");
      n.table = i, n.map = de.get(i);
    }
    e(r);
  }
  return !0;
}
function ZA(t, e, n) {
  var r;
  const o = Oe(e.type.schema).header_cell;
  for (let i = 0; i < t.width; i++)
    if (((r = e.nodeAt(t.map[i + n * t.width])) == null ? void 0 : r.type) != o)
      return !1;
  return !0;
}
function pm(t, { map: e, tableStart: n, table: r }, o) {
  var i;
  let s = n;
  for (let c = 0; c < o; c++) s += r.child(c).nodeSize;
  const l = [];
  let a = o > 0 ? -1 : 0;
  ZA(e, r, o + a) && (a = o == 0 || o == e.height ? null : 0);
  for (let c = 0, d = e.width * o; c < e.width; c++, d++)
    if (o > 0 && o < e.height && e.map[d] == e.map[d - e.width]) {
      const u = e.map[d], f = r.nodeAt(u).attrs;
      t.setNodeMarkup(n + u, null, {
        ...f,
        rowspan: f.rowspan + 1
      }), c += f.colspan - 1;
    } else {
      const u = a == null ? Oe(r.type.schema).cell : (i = r.nodeAt(e.map[d + a * e.width])) == null ? void 0 : i.type, f = u == null ? void 0 : u.createAndFill();
      f && l.push(f);
    }
  return t.insert(s, Oe(r.type.schema).row.create(null, l)), t;
}
function XA(t, e) {
  if (!ct(t)) return !1;
  if (e) {
    const n = St(t);
    e(pm(t.tr, n, n.top));
  }
  return !0;
}
function YA(t, e) {
  if (!ct(t)) return !1;
  if (e) {
    const n = St(t);
    e(pm(t.tr, n, n.bottom));
  }
  return !0;
}
function QA(t, { map: e, table: n, tableStart: r }, o) {
  let i = 0;
  for (let c = 0; c < o; c++) i += n.child(c).nodeSize;
  const s = i + n.child(o).nodeSize, l = t.mapping.maps.length;
  t.delete(i + r, s + r);
  const a = /* @__PURE__ */ new Set();
  for (let c = 0, d = o * e.width; c < e.width; c++, d++) {
    const u = e.map[d];
    if (!a.has(u)) {
      if (a.add(u), o > 0 && u == e.map[d - e.width]) {
        const f = n.nodeAt(u).attrs;
        t.setNodeMarkup(t.mapping.slice(l).map(u + r), null, {
          ...f,
          rowspan: f.rowspan - 1
        }), c += f.colspan - 1;
      } else if (o < e.height && u == e.map[d + e.width]) {
        const f = n.nodeAt(u), p = f.attrs, h = f.type.create(
          { ...p, rowspan: f.attrs.rowspan - 1 },
          f.content
        ), m = e.positionAt(o + 1, c, n);
        t.insert(t.mapping.slice(l).map(r + m), h), c += p.colspan - 1;
      }
    }
  }
}
function eM(t, e) {
  if (!ct(t)) return !1;
  if (e) {
    const n = St(t), r = t.tr;
    if (n.top == 0 && n.bottom == n.map.height) return !1;
    for (let o = n.bottom - 1; QA(r, n, o), o != n.top; o--) {
      const i = n.tableStart ? r.doc.nodeAt(n.tableStart - 1) : r.doc;
      if (!i)
        throw RangeError("No table found");
      n.table = i, n.map = de.get(n.table);
    }
    e(r);
  }
  return !0;
}
function Su(t) {
  const e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function tM({ width: t, height: e, map: n }, r) {
  let o = r.top * t + r.left, i = o, s = (r.bottom - 1) * t + r.left, l = o + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && n[i] == n[i - 1] || r.right < t && n[l] == n[l + 1])
      return !0;
    i += t, l += t;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && n[o] == n[o - t] || r.bottom < e && n[s] == n[s + t])
      return !0;
    o++, s++;
  }
  return !1;
}
function xu(t, e) {
  const n = t.selection;
  if (!(n instanceof X) || n.$anchorCell.pos == n.$headCell.pos)
    return !1;
  const r = St(t), { map: o } = r;
  if (tM(o, r)) return !1;
  if (e) {
    const i = t.tr, s = {};
    let l = S.empty, a, c;
    for (let d = r.top; d < r.bottom; d++)
      for (let u = r.left; u < r.right; u++) {
        const f = o.map[d * o.width + u], p = r.table.nodeAt(f);
        if (!(s[f] || !p))
          if (s[f] = !0, a == null)
            a = f, c = p;
          else {
            Su(p) || (l = l.append(p.content));
            const h = i.mapping.map(f + r.tableStart);
            i.delete(h, h + p.nodeSize);
          }
      }
    if (a == null || c == null)
      return !0;
    if (i.setNodeMarkup(a + r.tableStart, null, {
      ...am(
        c.attrs,
        c.attrs.colspan,
        r.right - r.left - c.attrs.colspan
      ),
      rowspan: r.bottom - r.top
    }), l.size) {
      const d = a + 1 + c.content.size, u = Su(c) ? a + 1 : d;
      i.replaceWith(u + r.tableStart, d + r.tableStart, l);
    }
    i.setSelection(
      new X(i.doc.resolve(a + r.tableStart))
    ), e(i);
  }
  return !0;
}
function Cu(t, e) {
  const n = Oe(t.schema);
  return nM(({ node: r }) => n[r.type.spec.tableRole])(t, e);
}
function nM(t) {
  return (e, n) => {
    var r;
    const o = e.selection;
    let i, s;
    if (o instanceof X) {
      if (o.$anchorCell.pos != o.$headCell.pos) return !1;
      i = o.$anchorCell.nodeAfter, s = o.$anchorCell.pos;
    } else {
      if (i = _A(o.$from), !i) return !1;
      s = (r = pr(o.$from)) == null ? void 0 : r.pos;
    }
    if (i == null || s == null || i.attrs.colspan == 1 && i.attrs.rowspan == 1)
      return !1;
    if (n) {
      let l = i.attrs;
      const a = [], c = l.colwidth;
      l.rowspan > 1 && (l = { ...l, rowspan: 1 }), l.colspan > 1 && (l = { ...l, colspan: 1 });
      const d = St(e), u = e.tr;
      for (let p = 0; p < d.right - d.left; p++)
        a.push(
          c ? {
            ...l,
            colwidth: c && c[p] ? [c[p]] : null
          } : l
        );
      let f;
      for (let p = d.top; p < d.bottom; p++) {
        let h = d.map.positionAt(p, d.left, d.table);
        p == d.top && (h += i.nodeSize);
        for (let m = d.left, g = 0; m < d.right; m++, g++)
          m == d.left && p == d.top || u.insert(
            f = u.mapping.map(h + d.tableStart, 1),
            t({ node: i, row: p, col: m }).createAndFill(a[g])
          );
      }
      u.setNodeMarkup(
        s,
        t({ node: i, row: d.top, col: d.left }),
        a[0]
      ), o instanceof X && u.setSelection(
        new X(
          u.doc.resolve(o.$anchorCell.pos),
          f ? u.doc.resolve(f) : void 0
        )
      ), n(u);
    }
    return !0;
  };
}
function rM(t, e) {
  return function(n, r) {
    if (!ct(n)) return !1;
    const o = Ts(n);
    if (o.nodeAfter.attrs[t] === e) return !1;
    if (r) {
      const i = n.tr;
      n.selection instanceof X ? n.selection.forEachCell((s, l) => {
        s.attrs[t] !== e && i.setNodeMarkup(l, null, {
          ...s.attrs,
          [t]: e
        });
      }) : i.setNodeMarkup(o.pos, null, {
        ...o.nodeAfter.attrs,
        [t]: e
      }), r(i);
    }
    return !0;
  };
}
function oM(t) {
  return function(e, n) {
    if (!ct(e)) return !1;
    if (n) {
      const r = Oe(e.schema), o = St(e), i = e.tr, s = o.map.cellsInRect(
        t == "column" ? {
          left: o.left,
          top: 0,
          right: o.right,
          bottom: o.map.height
        } : t == "row" ? {
          left: 0,
          top: o.top,
          right: o.map.width,
          bottom: o.bottom
        } : o
      ), l = s.map((a) => o.table.nodeAt(a));
      for (let a = 0; a < s.length; a++)
        l[a].type == r.header_cell && i.setNodeMarkup(
          o.tableStart + s[a],
          r.cell,
          l[a].attrs
        );
      if (i.steps.length == 0)
        for (let a = 0; a < s.length; a++)
          i.setNodeMarkup(
            o.tableStart + s[a],
            r.header_cell,
            l[a].attrs
          );
      n(i);
    }
    return !0;
  };
}
function Tu(t, e, n) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1
  });
  for (let o = 0; o < r.length; o++) {
    const i = e.table.nodeAt(r[o]);
    if (i && i.type !== n.header_cell)
      return !1;
  }
  return !0;
}
function Yr(t, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? oM(t) : function(n, r) {
    if (!ct(n)) return !1;
    if (r) {
      const o = Oe(n.schema), i = St(n), s = n.tr, l = Tu("row", i, o), a = Tu(
        "column",
        i,
        o
      ), d = (t === "column" ? l : t === "row" ? a : !1) ? 1 : 0, u = t == "column" ? {
        left: 0,
        top: d,
        right: 1,
        bottom: i.map.height
      } : t == "row" ? {
        left: d,
        top: 0,
        right: i.map.width,
        bottom: 1
      } : i, f = t == "column" ? a ? o.cell : o.header_cell : t == "row" ? l ? o.cell : o.header_cell : o.cell;
      i.map.cellsInRect(u).forEach((p) => {
        const h = p + i.tableStart, m = s.doc.nodeAt(h);
        m && s.setNodeMarkup(h, f, m.attrs);
      }), r(s);
    }
    return !0;
  };
}
Yr("row", {
  useDeprecatedLogic: !0
});
Yr("column", {
  useDeprecatedLogic: !0
});
var iM = Yr("cell", {
  useDeprecatedLogic: !0
});
function sM(t, e) {
  if (e < 0) {
    const n = t.nodeBefore;
    if (n) return t.pos - n.nodeSize;
    for (let r = t.index(-1) - 1, o = t.before(); r >= 0; r--) {
      const i = t.node(-1).child(r), s = i.lastChild;
      if (s)
        return o - 1 - s.nodeSize;
      o -= i.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1)
      return t.pos + t.nodeAfter.nodeSize;
    const n = t.node(-1);
    for (let r = t.indexAfter(-1), o = t.after(); r < n.childCount; r++) {
      const i = n.child(r);
      if (i.childCount) return o + 1;
      o += i.nodeSize;
    }
  }
  return null;
}
function Au(t) {
  return function(e, n) {
    if (!ct(e)) return !1;
    const r = sM(Ts(e), t);
    if (r == null) return !1;
    if (n) {
      const o = e.doc.resolve(r);
      n(
        e.tr.setSelection(P.between(o, DA(o))).scrollIntoView()
      );
    }
    return !0;
  };
}
function lM(t, e) {
  const n = t.selection.$anchor;
  for (let r = n.depth; r > 0; r--)
    if (n.node(r).type.spec.tableRole == "table")
      return e && e(
        t.tr.delete(n.before(r), n.after(r)).scrollIntoView()
      ), !0;
  return !1;
}
function Oo(t, e) {
  const n = t.selection;
  if (!(n instanceof X)) return !1;
  if (e) {
    const r = t.tr, o = Oe(t.schema).cell.createAndFill().content;
    n.forEachCell((i, s) => {
      i.content.eq(o) || r.replace(
        r.mapping.map(s + 1),
        r.mapping.map(s + i.nodeSize - 1),
        new O(o, 0, 0)
      );
    }), r.docChanged && e(r);
  }
  return !0;
}
function aM(t) {
  if (!t.size) return null;
  let { content: e, openStart: n, openEnd: r } = t;
  for (; e.childCount == 1 && (n > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    n--, r--, e = e.child(0).content;
  const o = e.child(0), i = o.type.spec.tableRole, s = o.type.schema, l = [];
  if (i == "row")
    for (let a = 0; a < e.childCount; a++) {
      let c = e.child(a).content;
      const d = a ? 0 : Math.max(0, n - 1), u = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
      (d || u) && (c = Ul(
        Oe(s).row,
        new O(c, d, u)
      ).content), l.push(c);
    }
  else if (i == "cell" || i == "header_cell")
    l.push(
      n || r ? Ul(
        Oe(s).row,
        new O(e, n, r)
      ).content : e
    );
  else
    return null;
  return cM(s, l);
}
function cM(t, e) {
  const n = [];
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    for (let s = i.childCount - 1; s >= 0; s--) {
      const { rowspan: l, colspan: a } = i.child(s).attrs;
      for (let c = o; c < o + l; c++)
        n[c] = (n[c] || 0) + a;
    }
  }
  let r = 0;
  for (let o = 0; o < n.length; o++) r = Math.max(r, n[o]);
  for (let o = 0; o < n.length; o++)
    if (o >= e.length && e.push(S.empty), n[o] < r) {
      const i = Oe(t).cell.createAndFill(), s = [];
      for (let l = n[o]; l < r; l++)
        s.push(i);
      e[o] = e[o].append(S.from(s));
    }
  return { height: e.length, width: r, rows: e };
}
function Ul(t, e) {
  const n = t.createAndFill();
  return new Va(n).replace(0, n.content.size, e).doc;
}
function dM({ width: t, height: e, rows: n }, r, o) {
  if (t != r) {
    const i = [], s = [];
    for (let l = 0; l < n.length; l++) {
      const a = n[l], c = [];
      for (let d = i[l] || 0, u = 0; d < r; u++) {
        let f = a.child(u % a.childCount);
        d + f.attrs.colspan > r && (f = f.type.createChecked(
          On(
            f.attrs,
            f.attrs.colspan,
            d + f.attrs.colspan - r
          ),
          f.content
        )), c.push(f), d += f.attrs.colspan;
        for (let p = 1; p < f.attrs.rowspan; p++)
          i[l + p] = (i[l + p] || 0) + f.attrs.colspan;
      }
      s.push(S.from(c));
    }
    n = s, t = r;
  }
  if (e != o) {
    const i = [];
    for (let s = 0, l = 0; s < o; s++, l++) {
      const a = [], c = n[l % e];
      for (let d = 0; d < c.childCount; d++) {
        let u = c.child(d);
        s + u.attrs.rowspan > o && (u = u.type.create(
          {
            ...u.attrs,
            rowspan: Math.max(1, o - u.attrs.rowspan)
          },
          u.content
        )), a.push(u);
      }
      i.push(S.from(a));
    }
    n = i, e = o;
  }
  return { width: t, height: e, rows: n };
}
function uM(t, e, n, r, o, i, s) {
  const l = t.doc.type.schema, a = Oe(l);
  let c, d;
  if (o > e.width)
    for (let u = 0, f = 0; u < e.height; u++) {
      const p = n.child(u);
      f += p.nodeSize;
      const h = [];
      let m;
      p.lastChild == null || p.lastChild.type == a.cell ? m = c || (c = a.cell.createAndFill()) : m = d || (d = a.header_cell.createAndFill());
      for (let g = e.width; g < o; g++) h.push(m);
      t.insert(t.mapping.slice(s).map(f - 1 + r), h);
    }
  if (i > e.height) {
    const u = [];
    for (let h = 0, m = (e.height - 1) * e.width; h < Math.max(e.width, o); h++) {
      const g = h >= e.width ? !1 : n.nodeAt(e.map[m + h]).type == a.header_cell;
      u.push(
        g ? d || (d = a.header_cell.createAndFill()) : c || (c = a.cell.createAndFill())
      );
    }
    const f = a.row.create(null, S.from(u)), p = [];
    for (let h = e.height; h < i; h++) p.push(f);
    t.insert(t.mapping.slice(s).map(r + n.nodeSize - 2), p);
  }
  return !!(c || d);
}
function Mu(t, e, n, r, o, i, s, l) {
  if (s == 0 || s == e.height) return !1;
  let a = !1;
  for (let c = o; c < i; c++) {
    const d = s * e.width + c, u = e.map[d];
    if (e.map[d - e.width] == u) {
      a = !0;
      const f = n.nodeAt(u), { top: p, left: h } = e.findCell(u);
      t.setNodeMarkup(t.mapping.slice(l).map(u + r), null, {
        ...f.attrs,
        rowspan: s - p
      }), t.insert(
        t.mapping.slice(l).map(e.positionAt(s, h, n)),
        f.type.createAndFill({
          ...f.attrs,
          rowspan: p + f.attrs.rowspan - s
        })
      ), c += f.attrs.colspan - 1;
    }
  }
  return a;
}
function Eu(t, e, n, r, o, i, s, l) {
  if (s == 0 || s == e.width) return !1;
  let a = !1;
  for (let c = o; c < i; c++) {
    const d = c * e.width + s, u = e.map[d];
    if (e.map[d - 1] == u) {
      a = !0;
      const f = n.nodeAt(u), p = e.colCount(u), h = t.mapping.slice(l).map(u + r);
      t.setNodeMarkup(
        h,
        null,
        On(
          f.attrs,
          s - p,
          f.attrs.colspan - (s - p)
        )
      ), t.insert(
        h + f.nodeSize,
        f.type.createAndFill(
          On(f.attrs, 0, s - p)
        )
      ), c += f.attrs.rowspan - 1;
    }
  }
  return a;
}
function Ou(t, e, n, r, o) {
  let i = n ? t.doc.nodeAt(n - 1) : t.doc;
  if (!i)
    throw new Error("No table found");
  let s = de.get(i);
  const { top: l, left: a } = r, c = a + o.width, d = l + o.height, u = t.tr;
  let f = 0;
  function p() {
    if (i = n ? u.doc.nodeAt(n - 1) : u.doc, !i)
      throw new Error("No table found");
    s = de.get(i), f = u.mapping.maps.length;
  }
  uM(u, s, i, n, c, d, f) && p(), Mu(u, s, i, n, a, c, l, f) && p(), Mu(u, s, i, n, a, c, d, f) && p(), Eu(u, s, i, n, l, d, a, f) && p(), Eu(u, s, i, n, l, d, c, f) && p();
  for (let h = l; h < d; h++) {
    const m = s.positionAt(h, a, i), g = s.positionAt(h, c, i);
    u.replace(
      u.mapping.slice(f).map(m + n),
      u.mapping.slice(f).map(g + n),
      new O(o.rows[h - l], 0, 0)
    );
  }
  p(), u.setSelection(
    new X(
      u.doc.resolve(n + s.positionAt(l, a, i)),
      u.doc.resolve(n + s.positionAt(d - 1, c - 1, i))
    )
  ), e(u);
}
var fM = za({
  ArrowLeft: Lo("horiz", -1),
  ArrowRight: Lo("horiz", 1),
  ArrowUp: Lo("vert", -1),
  ArrowDown: Lo("vert", 1),
  "Shift-ArrowLeft": Vo("horiz", -1),
  "Shift-ArrowRight": Vo("horiz", 1),
  "Shift-ArrowUp": Vo("vert", -1),
  "Shift-ArrowDown": Vo("vert", 1),
  Backspace: Oo,
  "Mod-Backspace": Oo,
  Delete: Oo,
  "Mod-Delete": Oo
});
function Uo(t, e, n) {
  return n.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(n).scrollIntoView()), !0);
}
function Lo(t, e) {
  return (n, r, o) => {
    if (!o) return !1;
    const i = n.selection;
    if (i instanceof X)
      return Uo(
        n,
        r,
        B.near(i.$headCell, e)
      );
    if (t != "horiz" && !i.empty) return !1;
    const s = hm(o, t, e);
    if (s == null) return !1;
    if (t == "horiz")
      return Uo(
        n,
        r,
        B.near(n.doc.resolve(i.head + e), e)
      );
    {
      const l = n.doc.resolve(s), a = lm(l, t, e);
      let c;
      return a ? c = B.near(a, 1) : e < 0 ? c = B.near(n.doc.resolve(l.before(-1)), -1) : c = B.near(n.doc.resolve(l.after(-1)), 1), Uo(n, r, c);
    }
  };
}
function Vo(t, e) {
  return (n, r, o) => {
    if (!o) return !1;
    const i = n.selection;
    let s;
    if (i instanceof X)
      s = i;
    else {
      const a = hm(o, t, e);
      if (a == null) return !1;
      s = new X(n.doc.resolve(a));
    }
    const l = lm(s.$headCell, t, e);
    return l ? Uo(
      n,
      r,
      new X(s.$anchorCell, l)
    ) : !1;
  };
}
function pM(t, e) {
  const n = t.state.doc, r = pr(n.resolve(e));
  return r ? (t.dispatch(t.state.tr.setSelection(new X(r))), !0) : !1;
}
function hM(t, e, n) {
  if (!ct(t.state)) return !1;
  let r = aM(n);
  const o = t.state.selection;
  if (o instanceof X) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [
        S.from(
          Ul(Oe(t.state.schema).cell, n)
        )
      ]
    });
    const i = o.$anchorCell.node(-1), s = o.$anchorCell.start(-1), l = de.get(i).rectBetween(
      o.$anchorCell.pos - s,
      o.$headCell.pos - s
    );
    return r = dM(r, l.right - l.left, l.bottom - l.top), Ou(t.state, t.dispatch, s, l, r), !0;
  } else if (r) {
    const i = Ts(t.state), s = i.start(-1);
    return Ou(
      t.state,
      t.dispatch,
      s,
      de.get(i.node(-1)).findCell(i.pos - s),
      r
    ), !0;
  } else
    return !1;
}
function mM(t, e) {
  var n;
  if (e.ctrlKey || e.metaKey) return;
  const r = Lu(t, e.target);
  let o;
  if (e.shiftKey && t.state.selection instanceof X)
    i(t.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (o = pr(t.state.selection.$anchor)) != null && ((n = el(t, e)) == null ? void 0 : n.pos) != o.pos)
    i(o, e), e.preventDefault();
  else if (!r)
    return;
  function i(a, c) {
    let d = el(t, c);
    const u = Zt.getState(t.state) == null;
    if (!d || !rc(a, d))
      if (u) d = a;
      else return;
    const f = new X(a, d);
    if (u || !t.state.selection.eq(f)) {
      const p = t.state.tr.setSelection(f);
      u && p.setMeta(Zt, a.pos), t.dispatch(p);
    }
  }
  function s() {
    t.root.removeEventListener("mouseup", s), t.root.removeEventListener("dragstart", s), t.root.removeEventListener("mousemove", l), Zt.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(Zt, -1));
  }
  function l(a) {
    const c = a, d = Zt.getState(t.state);
    let u;
    if (d != null)
      u = t.state.doc.resolve(d);
    else if (Lu(t, c.target) != r && (u = el(t, e), !u))
      return s();
    u && i(u, c);
  }
  t.root.addEventListener("mouseup", s), t.root.addEventListener("dragstart", s), t.root.addEventListener("mousemove", l);
}
function hm(t, e, n) {
  if (!(t.state.selection instanceof P)) return null;
  const { $head: r } = t.state.selection;
  for (let o = r.depth - 1; o >= 0; o--) {
    const i = r.node(o);
    if ((n < 0 ? r.index(o) : r.indexAfter(o)) != (n < 0 ? 0 : i.childCount)) return null;
    if (i.type.spec.tableRole == "cell" || i.type.spec.tableRole == "header_cell") {
      const l = r.before(o), a = e == "vert" ? n > 0 ? "down" : "up" : n > 0 ? "right" : "left";
      return t.endOfTextblock(a) ? l : null;
    }
  }
  return null;
}
function Lu(t, e) {
  for (; e && e != t.dom; e = e.parentNode)
    if (e.nodeName == "TD" || e.nodeName == "TH")
      return e;
  return null;
}
function el(t, e) {
  const n = t.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  return n && n ? pr(t.state.doc.resolve(n.pos)) : null;
}
var gM = class {
  constructor(e, n) {
    this.node = e, this.defaultCellMinWidth = n, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty(
      "--default-cell-min-width",
      `${n}px`
    ), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Kl(e, this.colgroup, this.table, n), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Kl(
      e,
      this.colgroup,
      this.table,
      this.defaultCellMinWidth
    ), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Kl(t, e, n, r, o, i) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const d = t.firstChild;
  if (d) {
    for (let u = 0, f = 0; u < d.childCount; u++) {
      const { colspan: p, colwidth: h } = d.child(u).attrs;
      for (let m = 0; m < p; m++, f++) {
        const g = o == f ? i : h && h[m], y = g ? g + "px" : "";
        if (l += g || r, g || (a = !1), c)
          c.style.width != y && (c.style.width = y), c = c.nextSibling;
        else {
          const b = document.createElement("col");
          b.style.width = y, e.appendChild(b);
        }
      }
    }
    for (; c; ) {
      const u = c.nextSibling;
      (s = c.parentNode) == null || s.removeChild(c), c = u;
    }
    a ? (n.style.width = l + "px", n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = l + "px");
  }
}
var $e = new ue(
  "tableColumnResizing"
);
function yM({
  handleWidth: t = 5,
  cellMinWidth: e = 25,
  defaultCellMinWidth: n = 100,
  View: r = gM,
  lastColumnResizable: o = !0
} = {}) {
  const i = new ee({
    key: $e,
    state: {
      init(s, l) {
        var a, c;
        const d = (c = (a = i.spec) == null ? void 0 : a.props) == null ? void 0 : c.nodeViews, u = Oe(l.schema).table.name;
        return r && d && (d[u] = (f, p) => new r(f, n, p)), new bM(-1, !1);
      },
      apply(s, l) {
        return l.apply(s);
      }
    },
    props: {
      attributes: (s) => {
        const l = $e.getState(s);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (s, l) => {
          vM(s, l, t, o);
        },
        mouseleave: (s) => {
          wM(s);
        },
        mousedown: (s, l) => {
          kM(s, l, e, n);
        }
      },
      decorations: (s) => {
        const l = $e.getState(s);
        if (l && l.activeHandle > -1)
          return AM(s, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return i;
}
var bM = class Ko {
  constructor(e, n) {
    this.activeHandle = e, this.dragging = n;
  }
  apply(e) {
    const n = this, r = e.getMeta($e);
    if (r && r.setHandle != null)
      return new Ko(r.setHandle, !1);
    if (r && r.setDragging !== void 0)
      return new Ko(n.activeHandle, r.setDragging);
    if (n.activeHandle > -1 && e.docChanged) {
      let o = e.mapping.map(n.activeHandle, -1);
      return Wl(e.doc.resolve(o)) || (o = -1), new Ko(o, n.dragging);
    }
    return n;
  }
};
function vM(t, e, n, r) {
  if (!t.editable) return;
  const o = $e.getState(t.state);
  if (o && !o.dragging) {
    const i = xM(e.target);
    let s = -1;
    if (i) {
      const { left: l, right: a } = i.getBoundingClientRect();
      e.clientX - l <= n ? s = Vu(t, e, "left", n) : a - e.clientX <= n && (s = Vu(t, e, "right", n));
    }
    if (s != o.activeHandle) {
      if (!r && s !== -1) {
        const l = t.state.doc.resolve(s), a = l.node(-1), c = de.get(a), d = l.start(-1);
        if (c.colCount(l.pos - d) + l.nodeAfter.attrs.colspan - 1 == c.width - 1)
          return;
      }
      mm(t, s);
    }
  }
}
function wM(t) {
  if (!t.editable) return;
  const e = $e.getState(t.state);
  e && e.activeHandle > -1 && !e.dragging && mm(t, -1);
}
function kM(t, e, n, r) {
  var o;
  if (!t.editable) return !1;
  const i = (o = t.dom.ownerDocument.defaultView) != null ? o : window, s = $e.getState(t.state);
  if (!s || s.activeHandle == -1 || s.dragging)
    return !1;
  const l = t.state.doc.nodeAt(s.activeHandle), a = SM(t, s.activeHandle, l.attrs);
  t.dispatch(
    t.state.tr.setMeta($e, {
      setDragging: { startX: e.clientX, startWidth: a }
    })
  );
  function c(u) {
    i.removeEventListener("mouseup", c), i.removeEventListener("mousemove", d);
    const f = $e.getState(t.state);
    f != null && f.dragging && (CM(
      t,
      f.activeHandle,
      Hu(f.dragging, u, n)
    ), t.dispatch(
      t.state.tr.setMeta($e, { setDragging: null })
    ));
  }
  function d(u) {
    if (!u.which) return c(u);
    const f = $e.getState(t.state);
    if (f && f.dragging) {
      const p = Hu(f.dragging, u, n);
      Ru(
        t,
        f.activeHandle,
        p,
        r
      );
    }
  }
  return Ru(
    t,
    s.activeHandle,
    a,
    r
  ), i.addEventListener("mouseup", c), i.addEventListener("mousemove", d), e.preventDefault(), !0;
}
function SM(t, e, { colspan: n, colwidth: r }) {
  const o = r && r[r.length - 1];
  if (o) return o;
  const i = t.domAtPos(e);
  let l = i.node.childNodes[i.offset].offsetWidth, a = n;
  if (r)
    for (let c = 0; c < n; c++)
      r[c] && (l -= r[c], a--);
  return l / a;
}
function xM(t) {
  for (; t && t.nodeName != "TD" && t.nodeName != "TH"; )
    t = t.classList && t.classList.contains("ProseMirror") ? null : t.parentNode;
  return t;
}
function Vu(t, e, n, r) {
  const o = n == "right" ? -r : r, i = t.posAtCoords({
    left: e.clientX + o,
    top: e.clientY
  });
  if (!i) return -1;
  const { pos: s } = i, l = pr(t.state.doc.resolve(s));
  if (!l) return -1;
  if (n == "right") return l.pos;
  const a = de.get(l.node(-1)), c = l.start(-1), d = a.map.indexOf(l.pos - c);
  return d % a.width == 0 ? -1 : c + a.map[d - 1];
}
function Hu(t, e, n) {
  const r = e.clientX - t.startX;
  return Math.max(n, t.startWidth + r);
}
function mm(t, e) {
  t.dispatch(
    t.state.tr.setMeta($e, { setHandle: e })
  );
}
function CM(t, e, n) {
  const r = t.state.doc.resolve(e), o = r.node(-1), i = de.get(o), s = r.start(-1), l = i.colCount(r.pos - s) + r.nodeAfter.attrs.colspan - 1, a = t.state.tr;
  for (let c = 0; c < i.height; c++) {
    const d = c * i.width + l;
    if (c && i.map[d] == i.map[d - i.width]) continue;
    const u = i.map[d], f = o.nodeAt(u).attrs, p = f.colspan == 1 ? 0 : l - i.colCount(u);
    if (f.colwidth && f.colwidth[p] == n) continue;
    const h = f.colwidth ? f.colwidth.slice() : TM(f.colspan);
    h[p] = n, a.setNodeMarkup(s + u, null, { ...f, colwidth: h });
  }
  a.docChanged && t.dispatch(a);
}
function Ru(t, e, n, r) {
  const o = t.state.doc.resolve(e), i = o.node(-1), s = o.start(-1), l = de.get(i).colCount(o.pos - s) + o.nodeAfter.attrs.colspan - 1;
  let a = t.domAtPos(o.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; )
    a = a.parentNode;
  a && Kl(
    i,
    a.firstChild,
    a,
    r,
    l,
    n
  );
}
function TM(t) {
  return Array(t).fill(0);
}
function AM(t, e) {
  var n;
  const r = [], o = t.doc.resolve(e), i = o.node(-1);
  if (!i)
    return Q.empty;
  const s = de.get(i), l = o.start(-1), a = s.colCount(o.pos - l) + o.nodeAfter.attrs.colspan - 1;
  for (let c = 0; c < s.height; c++) {
    const d = a + c * s.width;
    if ((a == s.width - 1 || s.map[d] != s.map[d + 1]) && (c == 0 || s.map[d] != s.map[d - s.width])) {
      const u = s.map[d], f = l + u + i.nodeAt(u).nodeSize - 1, p = document.createElement("div");
      p.className = "column-resize-handle", (n = $e.getState(t)) != null && n.dragging && r.push(
        we.node(
          l + u,
          l + u + i.nodeAt(u).nodeSize,
          {
            class: "column-resize-dragging"
          }
        )
      ), r.push(we.widget(f, p));
    }
  }
  return Q.create(t.doc, r);
}
function MM({
  allowTableNodeSelection: t = !1
} = {}) {
  return new ee({
    key: Zt,
    // This piece of state is used to remember when a mouse-drag
    // cell-selection is happening, so that it can continue even as
    // transactions (which might move its anchor cell) come in.
    state: {
      init() {
        return null;
      },
      apply(e, n) {
        const r = e.getMeta(Zt);
        if (r != null) return r == -1 ? null : r;
        if (n == null || !e.docChanged) return n;
        const { deleted: o, pos: i } = e.mapping.mapResult(n);
        return o ? null : i;
      }
    },
    props: {
      decorations: $A,
      handleDOMEvents: {
        mousedown: mM
      },
      createSelectionBetween(e) {
        return Zt.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: pM,
      handleKeyDown: fM,
      handlePaste: hM
    },
    appendTransaction(e, n, r) {
      return jA(
        r,
        um(r, n),
        t
      );
    }
  });
}
function EM(t, e) {
  const n = Math.min(t.top, e.top), r = Math.max(t.bottom, e.bottom), o = Math.min(t.left, e.left), s = Math.max(t.right, e.right) - o, l = r - n, a = o, c = n;
  return new DOMRect(a, c, s, l);
}
var OM = class {
  constructor({
    editor: t,
    element: e,
    view: n,
    updateDelay: r = 250,
    resizeDelay: o = 60,
    shouldShow: i,
    appendTo: s,
    options: l
  }) {
    this.preventHide = !1, this.isVisible = !1, this.floatingUIOptions = {
      strategy: "absolute",
      placement: "top",
      offset: 8,
      flip: {},
      shift: {},
      arrow: !1,
      size: !1,
      autoPlacement: !1,
      hide: !1,
      inline: !1,
      onShow: void 0,
      onHide: void 0,
      onUpdate: void 0,
      onDestroy: void 0
    }, this.shouldShow = ({ view: a, state: c, from: d, to: u }) => {
      const { doc: f, selection: p } = c, { empty: h } = p, m = !f.textBetween(d, u).length && Za(c.selection), g = this.element.contains(document.activeElement);
      return !(!(a.hasFocus() || g) || h || m || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.resizeHandler = () => {
      this.resizeDebounceTimer && clearTimeout(this.resizeDebounceTimer), this.resizeDebounceTimer = window.setTimeout(() => {
        this.updatePosition();
      }, this.resizeDelay);
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: a }) => {
      var c;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      a != null && a.relatedTarget && ((c = this.element.parentNode) != null && c.contains(a.relatedTarget)) || (a == null ? void 0 : a.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.handleDebouncedUpdate = (a, c) => {
      const d = !(c != null && c.selection.eq(a.state.selection)), u = !(c != null && c.doc.eq(a.state.doc));
      !d && !u || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(a, d, u, c);
      }, this.updateDelay));
    }, this.updateHandler = (a, c, d, u) => {
      const { composing: f } = a;
      if (f || !c && !d)
        return;
      if (!this.getShouldShow(u)) {
        this.hide();
        return;
      }
      this.updatePosition(), this.show();
    }, this.editor = t, this.element = e, this.view = n, this.updateDelay = r, this.resizeDelay = o, this.appendTo = s, this.floatingUIOptions = {
      ...this.floatingUIOptions,
      ...l
    }, this.element.tabIndex = 0, i && (this.shouldShow = i), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), window.addEventListener("resize", this.resizeHandler), this.update(n, n.state), this.getShouldShow() && this.show();
  }
  get middlewares() {
    const t = [];
    return this.floatingUIOptions.flip && t.push(TA(typeof this.floatingUIOptions.flip != "boolean" ? this.floatingUIOptions.flip : void 0)), this.floatingUIOptions.shift && t.push(
      CA(typeof this.floatingUIOptions.shift != "boolean" ? this.floatingUIOptions.shift : void 0)
    ), this.floatingUIOptions.offset && t.push(
      SA(typeof this.floatingUIOptions.offset != "boolean" ? this.floatingUIOptions.offset : void 0)
    ), this.floatingUIOptions.arrow && t.push(EA(this.floatingUIOptions.arrow)), this.floatingUIOptions.size && t.push(AA(typeof this.floatingUIOptions.size != "boolean" ? this.floatingUIOptions.size : void 0)), this.floatingUIOptions.autoPlacement && t.push(
      xA(
        typeof this.floatingUIOptions.autoPlacement != "boolean" ? this.floatingUIOptions.autoPlacement : void 0
      )
    ), this.floatingUIOptions.hide && t.push(MA(typeof this.floatingUIOptions.hide != "boolean" ? this.floatingUIOptions.hide : void 0)), this.floatingUIOptions.inline && t.push(
      OA(typeof this.floatingUIOptions.inline != "boolean" ? this.floatingUIOptions.inline : void 0)
    ), t;
  }
  updatePosition() {
    const { selection: t } = this.editor.state, e = Xx(this.view, t.from, t.to);
    let n = {
      getBoundingClientRect: () => e,
      getClientRects: () => [e]
    };
    if (t instanceof I) {
      let r = this.view.nodeDOM(t.from);
      const o = r.dataset.nodeViewWrapper ? r : r.querySelector("[data-node-view-wrapper]");
      o && (r = o), r && (n = {
        getBoundingClientRect: () => r.getBoundingClientRect(),
        getClientRects: () => [r.getBoundingClientRect()]
      });
    }
    if (t instanceof X) {
      const { $anchorCell: r, $headCell: o } = t, i = r ? r.pos : o.pos, s = o ? o.pos : r.pos, l = this.view.nodeDOM(i), a = this.view.nodeDOM(s);
      if (!l || !a)
        return;
      const c = l === a ? l.getBoundingClientRect() : EM(
        l.getBoundingClientRect(),
        a.getBoundingClientRect()
      );
      n = {
        getBoundingClientRect: () => c,
        getClientRects: () => [c]
      };
    }
    LA(n, this.element, {
      placement: this.floatingUIOptions.placement,
      strategy: this.floatingUIOptions.strategy,
      middleware: this.middlewares
    }).then(({ x: r, y: o, strategy: i }) => {
      this.element.style.width = "max-content", this.element.style.position = i, this.element.style.left = `${r}px`, this.element.style.top = `${o}px`, this.isVisible && this.floatingUIOptions.onUpdate && this.floatingUIOptions.onUpdate();
    });
  }
  update(t, e) {
    const { state: n } = t, r = n.selection.from !== n.selection.to;
    if (this.updateDelay > 0 && r) {
      this.handleDebouncedUpdate(t, e);
      return;
    }
    const o = !(e != null && e.selection.eq(t.state.selection)), i = !(e != null && e.doc.eq(t.state.doc));
    this.updateHandler(t, o, i, e);
  }
  getShouldShow(t) {
    var e;
    const { state: n } = this.view, { selection: r } = n, { ranges: o } = r, i = Math.min(...o.map((a) => a.$from.pos)), s = Math.max(...o.map((a) => a.$to.pos));
    return (e = this.shouldShow) == null ? void 0 : e.call(this, {
      editor: this.editor,
      element: this.element,
      view: this.view,
      state: n,
      oldState: t,
      from: i,
      to: s
    });
  }
  show() {
    var t, e;
    this.isVisible || (this.element.style.visibility = "visible", this.element.style.opacity = "1", (e = (t = this.appendTo) != null ? t : this.view.dom.parentElement) == null || e.appendChild(this.element), this.floatingUIOptions.onShow && this.floatingUIOptions.onShow(), this.isVisible = !0);
  }
  hide() {
    this.isVisible && (this.element.style.visibility = "hidden", this.element.style.opacity = "0", this.element.remove(), this.floatingUIOptions.onHide && this.floatingUIOptions.onHide(), this.isVisible = !1);
  }
  destroy() {
    this.hide(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), window.removeEventListener("resize", this.resizeHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler), this.floatingUIOptions.onDestroy && this.floatingUIOptions.onDestroy();
  }
}, LM = (t) => new ee({
  key: typeof t.pluginKey == "string" ? new ue(t.pluginKey) : t.pluginKey,
  view: (e) => new OM({ view: e, ...t })
}), VM = W.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      appendTo: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      LM({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        updateDelay: this.options.updateDelay,
        options: this.options.options,
        appendTo: this.options.appendTo,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
}), HM = VM;
const RM = /* @__PURE__ */ $({
  __name: "BubbleMenu",
  props: {
    editor: {}
  },
  setup(t) {
    const e = t, { t: n } = Pt(), r = G(!1), o = Yn({
      maxWidth: "auto",
      zIndex: 20,
      appendTo: "parent"
    }), i = z(() => {
      var p, h;
      const l = e.editor.state.selection;
      if (l.to === l.from || l.empty) return;
      const a = ed(e.editor, "link"), c = ed(e.editor, "table"), d = ((p = l.node) == null ? void 0 : p.type.name) === "image", u = ((h = l.node) == null ? void 0 : h.type.name) === "video", f = l instanceof P;
      if (c) return "table";
      if (a) return "link";
      if (d) return "image";
      if (u) return "video";
      if (f) return "text";
    });
    function s(l) {
      var f, p;
      if (!l)
        return r.value = !1, [];
      const { extensions: a = [] } = e.editor.extensionManager, c = a.find((h) => h.name === "base-kit");
      if (!c)
        return r.value = !1, [];
      const { button: d } = ((f = c.options) == null ? void 0 : f.bubble) ?? {};
      if (!d)
        return r.value = !1, [];
      const u = d({
        editor: e.editor,
        extension: c,
        t: C(n)
      });
      return l ? (r.value = !0, ((p = C(u)) == null ? void 0 : p[l]) ?? []) : (r.value = !1, []);
    }
    return (l, a) => {
      const c = to, d = cr, u = no, f = dr;
      return pf((M(), _(C(HM), {
        editor: l.editor,
        "tippy-options": o
      }, {
        default: V(() => [
          H(f, { class: "vuetify-pro-tiptap-editor__menu-bubble" }, {
            default: V(() => [
              H(u, { class: "d-flex pa-0" }, {
                default: V(() => [
                  H(d, {
                    density: "compact",
                    flat: "",
                    height: "auto",
                    class: "py-1 ps-1"
                  }, {
                    default: V(() => [
                      (M(!0), re(ye, null, He(s(i.value), (p, h) => (M(), re(ye, { key: h }, [
                        p.type === "divider" ? (M(), _(c, {
                          key: 0,
                          vertical: "",
                          class: "mx-1 me-2"
                        })) : (M(), _(Pr(p.component), Wn({
                          key: 1,
                          ref_for: !0
                        }, p.componentProps, { editor: l.editor }), da({ _: 2 }, [
                          He(p.componentSlots, (m, g, y) => ({
                            name: `${g}`,
                            fn: V((b) => [
                              (M(), _(Pr(m), Wn({ ref_for: !0 }, b == null ? void 0 : b.props), null, 16))
                            ])
                          }))
                        ]), 1040, ["editor"]))
                      ], 64))), 128))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["editor", "tippy-options"])), [
        [hf, r.value]
      ]);
    };
  }
}), NM = /* @__PURE__ */ $({
  __name: "TiptapToolbar",
  props: {
    editor: {}
  },
  setup(t) {
    const e = t, { t: n } = Pt();
    function r() {
      return [...e.editor.extensionManager.extensions].sort((s, l) => {
        const a = s.options.sort ?? -1, c = l.options.sort ?? -1;
        return a - c;
      }).reduce((s, l) => {
        const { button: a, divider: c = !1, spacer: d = !1 } = l.options;
        if (!a || !tw(a)) return s;
        const u = a({
          editor: e.editor,
          extension: l,
          t: C(n)
        });
        if (Array.isArray(u)) {
          const f = u.map((p, h) => ({
            button: p,
            divider: h === u.length - 1 ? c : !1,
            spacer: h === 0 ? d : !1
          }));
          return [...s, ...f];
        }
        return [...s, { button: u, divider: c, spacer: d }];
      }, []);
    }
    return (o, i) => {
      const s = ro, l = to, a = cr;
      return M(), _(a, Wn(o.$attrs, {
        density: "compact",
        flat: "",
        height: "auto",
        class: "py-1 ps-1"
      }), {
        default: V(() => [
          (M(!0), re(ye, null, He(r(), (c, d) => (M(), re(ye, { key: d }, [
            c.spacer ? (M(), _(s, { key: 0 })) : Qe("", !0),
            (M(), _(Pr(c.button.component), Wn({ ref_for: !0 }, c.button.componentProps, { editor: o.editor }), da({ _: 2 }, [
              He(c.button.componentSlots, (u, f, p) => ({
                name: `${f}`,
                fn: V((h) => [
                  (M(), _(Pr(u), Wn({ ref_for: !0 }, h == null ? void 0 : h.props), null, 16))
                ])
              }))
            ]), 1040, ["editor"])),
            c.divider ? (M(), _(l, {
              key: 1,
              vertical: "",
              class: "mx-1 me-2"
            })) : Qe("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 16);
    };
  }
}), _M = { class: "text-overline me-4" }, IM = { class: "text-overline" }, jV = /* @__PURE__ */ $({
  __name: "VuetifyTiptap",
  props: {
    modelValue: { default: "" },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    output: { default: "html" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !0 },
    flat: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 },
    label: { default: void 0 },
    hideToolbar: { type: Boolean, default: !1 },
    disableToolbar: { type: Boolean, default: !1 },
    hideBubble: { type: Boolean, default: !1 },
    removeDefaultWrapper: { type: Boolean, default: !1 },
    maxWidth: { default: void 0 },
    minHeight: { default: void 0 },
    maxHeight: { default: void 0 },
    extensions: { default: () => [] },
    editorClass: { default: void 0 },
    errorMessages: { default: () => [] }
  },
  emits: ["enter", "change", "update:modelValue", "update:markdownTheme"],
  setup(t, { expose: e, emit: n }) {
    const r = t, o = n, i = Mg(), s = ua(), { state: l, isFullscreen: a } = gw(), { markdownThemeStyle: c } = Kf(
      z(() => r.markdownTheme),
      (v) => {
        o("update:markdownTheme", v);
      }
    ), d = z(() => {
      const v = Wv(r.extensions, l.extensions, "name");
      return [...l.extensions.map((k, w) => {
        const L = r.extensions.find((E) => E.name === k.name);
        return L ? k.configure(L.options) : k;
      }), ...v].map((k, w) => k.configure({ sort: w }));
    }), u = new xT({
      content: r.modelValue,
      editorProps: {
        handleKeyDown: Cr(function(v, x) {
          return x.key === "Enter" && i.enter && !x.shiftKey ? (o("enter"), !0) : !1;
        }, dl)
      },
      onUpdate: Cr(({ editor: v }) => {
        const x = g(v, r.output);
        o("update:modelValue", x), o("change", { editor: v, output: x });
      }, dl),
      extensions: C(d),
      autofocus: !1,
      editable: !r.disabled,
      injectCSS: !0
    }), { t: f } = Pt(), p = z(() => er(r.dark) ? r.dark : er(s.current.value.dark) ? s.current.value.dark : !1), h = z(() => [{
      __dark: C(p),
      ...C(c)
    }, r.editorClass]), m = z(() => {
      const v = Ar(r.maxWidth), x = {
        maxWidth: v,
        width: v ? "100%" : void 0,
        margin: v ? "0 auto" : void 0,
        backgroundColor: C(p) ? "#1E1E1E" : "#FFFFFF"
      };
      if (C(a)) return { height: "100%", overflowY: "auto", ...x };
      const k = Ar(r.minHeight), w = Ar(r.maxHeight);
      return {
        minHeight: k,
        maxHeight: w,
        overflowY: "auto",
        ...x
      };
    });
    function g(v, x) {
      return r.removeDefaultWrapper ? x === "html" ? v.isEmpty ? "" : v.getHTML() : x === "json" ? v.isEmpty ? {} : v.getJSON() : x === "text" ? v.isEmpty ? "" : v.getText() : "" : x === "html" ? v.getHTML() : x === "json" ? v.getJSON() : x === "text" ? v.getText() : "";
    }
    const y = Cr((v) => {
      if (!u) return;
      const x = g(u, r.output);
      if (Kv(x, v)) return;
      const { from: k, to: w } = u.state.selection;
      u.commands.setContent(v, void 0), u.commands.setTextSelection({ from: k, to: w });
    }, Lg), b = (v) => u == null ? void 0 : u.setEditable(!v);
    return Ht(() => r.modelValue, y), Ht(() => r.disabled, b), Eg(() => u == null ? void 0 : u.destroy()), Zo("disableToolbar", Og(() => r.disableToolbar)), e({ editor: u }), (v, x) => {
      const k = fg, w = to, L = ro, E = cr, A = dr, R = pg, N = rf;
      return C(u) ? (M(), re("div", {
        key: 0,
        class: tn(["vuetify-pro-tiptap", { dense: v.dense }])
      }, [
        H(N, {
          theme: p.value ? "dark" : "light"
        }, {
          default: V(() => [
            v.hideBubble ? Qe("", !0) : (M(), _(RM, {
              key: 0,
              editor: C(u)
            }, null, 8, ["editor"])),
            H(R, {
              class: "pt-0",
              "hide-details": "auto",
              "error-messages": v.errorMessages
            }, {
              default: V(() => [
                H(A, Wn({
                  flat: v.flat,
                  outlined: v.outlined,
                  color: p.value ? "grey-darken-4" : "grey-lighten-4"
                }, v.$attrs, {
                  style: {
                    borderColor: v.errorMessages ? "#ff5252" : void 0,
                    width: "100%"
                  },
                  class: ["vuetify-pro-tiptap-editor", { "vuetify-pro-tiptap-editor--fullscreen": C(a) }]
                }), {
                  default: V(() => [
                    v.label && !C(a) ? (M(), re(ye, { key: 0 }, [
                      H(k, {
                        class: tn(p.value ? "bg-grey-darken-3" : "bg-grey-lighten-3")
                      }, {
                        default: V(() => [
                          Rt(Ae(v.label), 1)
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      H(w)
                    ], 64)) : Qe("", !0),
                    v.hideToolbar ? Qe("", !0) : (M(), _(NM, {
                      key: 1,
                      class: "vuetify-pro-tiptap-editor__toolbar",
                      editor: C(u)
                    }, null, 8, ["editor"])),
                    Nt(v.$slots, "editor", vc(wc({ editor: C(u), props: { class: "vuetify-pro-tiptap-editor__content", "data-testid": "value" } })), () => [
                      H(C(CT), {
                        class: tn(["vuetify-pro-tiptap-editor__content", h.value]),
                        style: Un(m.value),
                        editor: C(u),
                        "data-testid": "value"
                      }, null, 8, ["class", "style", "editor"])
                    ]),
                    Nt(v.$slots, "bottom", vc(wc({ editor: C(u) })), () => [
                      H(E, {
                        class: "px-4",
                        density: "compact",
                        flat: ""
                      }, {
                        default: V(() => [
                          H(L),
                          C(nw)(C(u), "characterCount") ? (M(), re(ye, { key: 0 }, [
                            _t("span", _M, Ae(C(u).storage.characterCount.words()) + " " + Ae(C(f)("editor.words")), 1),
                            _t("span", IM, Ae(C(u).storage.characterCount.characters()) + " " + Ae(C(f)("editor.characters")), 1)
                          ], 64)) : Qe("", !0)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }, 16, ["flat", "outlined", "color", "style", "class"])
              ]),
              _: 3
            }, 8, ["error-messages"])
          ]),
          _: 3
        }, 8, ["theme"])
      ], 2)) : Qe("", !0);
    };
  }
}), DM = {
  a: ["href", "title", "target"],
  span: ["style"],
  blockquote: ["class", "style"],
  p: ["class", "style"],
  hr: [],
  pre: [],
  code: [],
  strong: [],
  img: ["src", "alt", "title", "width", "height", "style", "data-display"],
  label: ["contenteditable"],
  input: ["type", "value", "checked"],
  div: ["class", "style"],
  iframe: ["src", "allowfullscreen", "frameborder", "width", "height"],
  em: [],
  s: [],
  mark: [],
  h1: ["class", "style"],
  h2: ["class", "style"],
  h3: ["class", "style"],
  h4: ["class", "style"],
  h5: ["class", "style"],
  h6: ["class", "style"],
  ul: ["class", "data-type"],
  li: ["class", "data-checked", "itemtypename"],
  ol: [],
  u: [],
  table: ["class", "style"],
  colgroup: [],
  col: ["style"],
  tbody: ["class", "style"],
  tr: ["class", "style"],
  th: ["class", "style", "colspan", "rowspan"],
  td: ["class", "style", "colspan", "rowspan"],
  br: []
};
function PM(t, e, n) {
  if (typeof window > "u")
    throw new Error(
      "getHTMLFromFragment can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead."
    );
  const r = un.fromSchema(e).serializeFragment(t.content, {
    document: window.document
  });
  return new XMLSerializer().serializeToString(r);
}
function BM(t, e) {
  if (typeof window > "u")
    throw new Error(
      "generateHTML can only be used in a browser environment\nIf you want to use this in a Node environment, use the `@tiptap/html/server` import instead."
    );
  const n = zx(e), r = Lt.fromJSON(n, t);
  return PM(r, n);
}
function $M(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ql = { exports: {} }, ie = {}, Jl = { exports: {} }, _n = {};
function gm() {
  var t = {};
  return t["align-content"] = !1, t["align-items"] = !1, t["align-self"] = !1, t["alignment-adjust"] = !1, t["alignment-baseline"] = !1, t.all = !1, t["anchor-point"] = !1, t.animation = !1, t["animation-delay"] = !1, t["animation-direction"] = !1, t["animation-duration"] = !1, t["animation-fill-mode"] = !1, t["animation-iteration-count"] = !1, t["animation-name"] = !1, t["animation-play-state"] = !1, t["animation-timing-function"] = !1, t.azimuth = !1, t["backface-visibility"] = !1, t.background = !0, t["background-attachment"] = !0, t["background-clip"] = !0, t["background-color"] = !0, t["background-image"] = !0, t["background-origin"] = !0, t["background-position"] = !0, t["background-repeat"] = !0, t["background-size"] = !0, t["baseline-shift"] = !1, t.binding = !1, t.bleed = !1, t["bookmark-label"] = !1, t["bookmark-level"] = !1, t["bookmark-state"] = !1, t.border = !0, t["border-bottom"] = !0, t["border-bottom-color"] = !0, t["border-bottom-left-radius"] = !0, t["border-bottom-right-radius"] = !0, t["border-bottom-style"] = !0, t["border-bottom-width"] = !0, t["border-collapse"] = !0, t["border-color"] = !0, t["border-image"] = !0, t["border-image-outset"] = !0, t["border-image-repeat"] = !0, t["border-image-slice"] = !0, t["border-image-source"] = !0, t["border-image-width"] = !0, t["border-left"] = !0, t["border-left-color"] = !0, t["border-left-style"] = !0, t["border-left-width"] = !0, t["border-radius"] = !0, t["border-right"] = !0, t["border-right-color"] = !0, t["border-right-style"] = !0, t["border-right-width"] = !0, t["border-spacing"] = !0, t["border-style"] = !0, t["border-top"] = !0, t["border-top-color"] = !0, t["border-top-left-radius"] = !0, t["border-top-right-radius"] = !0, t["border-top-style"] = !0, t["border-top-width"] = !0, t["border-width"] = !0, t.bottom = !1, t["box-decoration-break"] = !0, t["box-shadow"] = !0, t["box-sizing"] = !0, t["box-snap"] = !0, t["box-suppress"] = !0, t["break-after"] = !0, t["break-before"] = !0, t["break-inside"] = !0, t["caption-side"] = !1, t.chains = !1, t.clear = !0, t.clip = !1, t["clip-path"] = !1, t["clip-rule"] = !1, t.color = !0, t["color-interpolation-filters"] = !0, t["column-count"] = !1, t["column-fill"] = !1, t["column-gap"] = !1, t["column-rule"] = !1, t["column-rule-color"] = !1, t["column-rule-style"] = !1, t["column-rule-width"] = !1, t["column-span"] = !1, t["column-width"] = !1, t.columns = !1, t.contain = !1, t.content = !1, t["counter-increment"] = !1, t["counter-reset"] = !1, t["counter-set"] = !1, t.crop = !1, t.cue = !1, t["cue-after"] = !1, t["cue-before"] = !1, t.cursor = !1, t.direction = !1, t.display = !0, t["display-inside"] = !0, t["display-list"] = !0, t["display-outside"] = !0, t["dominant-baseline"] = !1, t.elevation = !1, t["empty-cells"] = !1, t.filter = !1, t.flex = !1, t["flex-basis"] = !1, t["flex-direction"] = !1, t["flex-flow"] = !1, t["flex-grow"] = !1, t["flex-shrink"] = !1, t["flex-wrap"] = !1, t.float = !1, t["float-offset"] = !1, t["flood-color"] = !1, t["flood-opacity"] = !1, t["flow-from"] = !1, t["flow-into"] = !1, t.font = !0, t["font-family"] = !0, t["font-feature-settings"] = !0, t["font-kerning"] = !0, t["font-language-override"] = !0, t["font-size"] = !0, t["font-size-adjust"] = !0, t["font-stretch"] = !0, t["font-style"] = !0, t["font-synthesis"] = !0, t["font-variant"] = !0, t["font-variant-alternates"] = !0, t["font-variant-caps"] = !0, t["font-variant-east-asian"] = !0, t["font-variant-ligatures"] = !0, t["font-variant-numeric"] = !0, t["font-variant-position"] = !0, t["font-weight"] = !0, t.grid = !1, t["grid-area"] = !1, t["grid-auto-columns"] = !1, t["grid-auto-flow"] = !1, t["grid-auto-rows"] = !1, t["grid-column"] = !1, t["grid-column-end"] = !1, t["grid-column-start"] = !1, t["grid-row"] = !1, t["grid-row-end"] = !1, t["grid-row-start"] = !1, t["grid-template"] = !1, t["grid-template-areas"] = !1, t["grid-template-columns"] = !1, t["grid-template-rows"] = !1, t["hanging-punctuation"] = !1, t.height = !0, t.hyphens = !1, t.icon = !1, t["image-orientation"] = !1, t["image-resolution"] = !1, t["ime-mode"] = !1, t["initial-letters"] = !1, t["inline-box-align"] = !1, t["justify-content"] = !1, t["justify-items"] = !1, t["justify-self"] = !1, t.left = !1, t["letter-spacing"] = !0, t["lighting-color"] = !0, t["line-box-contain"] = !1, t["line-break"] = !1, t["line-grid"] = !1, t["line-height"] = !1, t["line-snap"] = !1, t["line-stacking"] = !1, t["line-stacking-ruby"] = !1, t["line-stacking-shift"] = !1, t["line-stacking-strategy"] = !1, t["list-style"] = !0, t["list-style-image"] = !0, t["list-style-position"] = !0, t["list-style-type"] = !0, t.margin = !0, t["margin-bottom"] = !0, t["margin-left"] = !0, t["margin-right"] = !0, t["margin-top"] = !0, t["marker-offset"] = !1, t["marker-side"] = !1, t.marks = !1, t.mask = !1, t["mask-box"] = !1, t["mask-box-outset"] = !1, t["mask-box-repeat"] = !1, t["mask-box-slice"] = !1, t["mask-box-source"] = !1, t["mask-box-width"] = !1, t["mask-clip"] = !1, t["mask-image"] = !1, t["mask-origin"] = !1, t["mask-position"] = !1, t["mask-repeat"] = !1, t["mask-size"] = !1, t["mask-source-type"] = !1, t["mask-type"] = !1, t["max-height"] = !0, t["max-lines"] = !1, t["max-width"] = !0, t["min-height"] = !0, t["min-width"] = !0, t["move-to"] = !1, t["nav-down"] = !1, t["nav-index"] = !1, t["nav-left"] = !1, t["nav-right"] = !1, t["nav-up"] = !1, t["object-fit"] = !1, t["object-position"] = !1, t.opacity = !1, t.order = !1, t.orphans = !1, t.outline = !1, t["outline-color"] = !1, t["outline-offset"] = !1, t["outline-style"] = !1, t["outline-width"] = !1, t.overflow = !1, t["overflow-wrap"] = !1, t["overflow-x"] = !1, t["overflow-y"] = !1, t.padding = !0, t["padding-bottom"] = !0, t["padding-left"] = !0, t["padding-right"] = !0, t["padding-top"] = !0, t.page = !1, t["page-break-after"] = !1, t["page-break-before"] = !1, t["page-break-inside"] = !1, t["page-policy"] = !1, t.pause = !1, t["pause-after"] = !1, t["pause-before"] = !1, t.perspective = !1, t["perspective-origin"] = !1, t.pitch = !1, t["pitch-range"] = !1, t["play-during"] = !1, t.position = !1, t["presentation-level"] = !1, t.quotes = !1, t["region-fragment"] = !1, t.resize = !1, t.rest = !1, t["rest-after"] = !1, t["rest-before"] = !1, t.richness = !1, t.right = !1, t.rotation = !1, t["rotation-point"] = !1, t["ruby-align"] = !1, t["ruby-merge"] = !1, t["ruby-position"] = !1, t["shape-image-threshold"] = !1, t["shape-outside"] = !1, t["shape-margin"] = !1, t.size = !1, t.speak = !1, t["speak-as"] = !1, t["speak-header"] = !1, t["speak-numeral"] = !1, t["speak-punctuation"] = !1, t["speech-rate"] = !1, t.stress = !1, t["string-set"] = !1, t["tab-size"] = !1, t["table-layout"] = !1, t["text-align"] = !0, t["text-align-last"] = !0, t["text-combine-upright"] = !0, t["text-decoration"] = !0, t["text-decoration-color"] = !0, t["text-decoration-line"] = !0, t["text-decoration-skip"] = !0, t["text-decoration-style"] = !0, t["text-emphasis"] = !0, t["text-emphasis-color"] = !0, t["text-emphasis-position"] = !0, t["text-emphasis-style"] = !0, t["text-height"] = !0, t["text-indent"] = !0, t["text-justify"] = !0, t["text-orientation"] = !0, t["text-overflow"] = !0, t["text-shadow"] = !0, t["text-space-collapse"] = !0, t["text-transform"] = !0, t["text-underline-position"] = !0, t["text-wrap"] = !0, t.top = !1, t.transform = !1, t["transform-origin"] = !1, t["transform-style"] = !1, t.transition = !1, t["transition-delay"] = !1, t["transition-duration"] = !1, t["transition-property"] = !1, t["transition-timing-function"] = !1, t["unicode-bidi"] = !1, t["vertical-align"] = !1, t.visibility = !1, t["voice-balance"] = !1, t["voice-duration"] = !1, t["voice-family"] = !1, t["voice-pitch"] = !1, t["voice-range"] = !1, t["voice-rate"] = !1, t["voice-stress"] = !1, t["voice-volume"] = !1, t.volume = !1, t["white-space"] = !1, t.widows = !1, t.width = !0, t["will-change"] = !1, t["word-break"] = !0, t["word-spacing"] = !0, t["word-wrap"] = !0, t["wrap-flow"] = !1, t["wrap-through"] = !1, t["writing-mode"] = !1, t["z-index"] = !1, t;
}
function zM(t, e, n) {
}
function FM(t, e, n) {
}
var jM = /javascript\s*\:/img;
function WM(t, e) {
  return jM.test(e) ? "" : e;
}
_n.whiteList = gm();
_n.getDefaultWhiteList = gm;
_n.onAttr = zM;
_n.onIgnoreAttr = FM;
_n.safeAttrValue = WM;
var UM = {
  indexOf: function(t, e) {
    var n, r;
    if (Array.prototype.indexOf)
      return t.indexOf(e);
    for (n = 0, r = t.length; n < r; n++)
      if (t[n] === e)
        return n;
    return -1;
  },
  forEach: function(t, e, n) {
    var r, o;
    if (Array.prototype.forEach)
      return t.forEach(e, n);
    for (r = 0, o = t.length; r < o; r++)
      e.call(n, t[r], r, t);
  },
  trim: function(t) {
    return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimRight: function(t) {
    return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, "");
  }
}, gr = UM;
function KM(t, e) {
  t = gr.trimRight(t), t[t.length - 1] !== ";" && (t += ";");
  var n = t.length, r = !1, o = 0, i = 0, s = "";
  function l() {
    if (!r) {
      var d = gr.trim(t.slice(o, i)), u = d.indexOf(":");
      if (u !== -1) {
        var f = gr.trim(d.slice(0, u)), p = gr.trim(d.slice(u + 1));
        if (f) {
          var h = e(o, s.length, f, p, d);
          h && (s += h + "; ");
        }
      }
    }
    o = i + 1;
  }
  for (; i < n; i++) {
    var a = t[i];
    if (a === "/" && t[i + 1] === "*") {
      var c = t.indexOf("*/", i + 2);
      if (c === -1) break;
      i = c + 1, o = i + 1, r = !1;
    } else a === "(" ? r = !0 : a === ")" ? r = !1 : a === ";" ? r || l() : a === `
` && l();
  }
  return gr.trim(s);
}
var qM = KM, Ho = _n, JM = qM;
function Nu(t) {
  return t == null;
}
function GM(t) {
  var e = {};
  for (var n in t)
    e[n] = t[n];
  return e;
}
function ym(t) {
  t = GM(t || {}), t.whiteList = t.whiteList || Ho.whiteList, t.onAttr = t.onAttr || Ho.onAttr, t.onIgnoreAttr = t.onIgnoreAttr || Ho.onIgnoreAttr, t.safeAttrValue = t.safeAttrValue || Ho.safeAttrValue, this.options = t;
}
ym.prototype.process = function(t) {
  if (t = t || "", t = t.toString(), !t) return "";
  var e = this, n = e.options, r = n.whiteList, o = n.onAttr, i = n.onIgnoreAttr, s = n.safeAttrValue, l = JM(t, function(a, c, d, u, f) {
    var p = r[d], h = !1;
    if (p === !0 ? h = p : typeof p == "function" ? h = p(u) : p instanceof RegExp && (h = p.test(u)), h !== !0 && (h = !1), u = s(d, u), !!u) {
      var m = {
        position: c,
        sourcePosition: a,
        source: f,
        isWhite: h
      };
      if (h) {
        var g = o(d, u, m);
        return Nu(g) ? d + ":" + u : g;
      } else {
        var g = i(d, u, m);
        if (!Nu(g))
          return g;
      }
    }
  });
  return l;
};
var ZM = ym;
(function(t, e) {
  var n = _n, r = ZM;
  function o(s, l) {
    var a = new r(l);
    return a.process(s);
  }
  e = t.exports = o, e.FilterCSS = r;
  for (var i in n) e[i] = n[i];
  typeof window < "u" && (window.filterCSS = t.exports);
})(Jl, Jl.exports);
var oc = Jl.exports, ic = {
  indexOf: function(t, e) {
    var n, r;
    if (Array.prototype.indexOf)
      return t.indexOf(e);
    for (n = 0, r = t.length; n < r; n++)
      if (t[n] === e)
        return n;
    return -1;
  },
  forEach: function(t, e, n) {
    var r, o;
    if (Array.prototype.forEach)
      return t.forEach(e, n);
    for (r = 0, o = t.length; r < o; r++)
      e.call(n, t[r], r, t);
  },
  trim: function(t) {
    return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(t) {
    var e = /\s|\n|\t/, n = e.exec(t);
    return n ? n.index : -1;
  }
}, XM = oc.FilterCSS, YM = oc.getDefaultWhiteList, vi = ic;
function bm() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src"
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height", "loading"],
    ins: ["datetime"],
    kbd: [],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width"
    ]
  };
}
var vm = new XM();
function QM(t, e, n) {
}
function e2(t, e, n) {
}
function t2(t, e, n) {
}
function n2(t, e, n) {
}
function wm(t) {
  return t.replace(o2, "&lt;").replace(i2, "&gt;");
}
function r2(t, e, n, r) {
  if (n = Am(n), e === "href" || e === "src") {
    if (n = vi.trim(n), n === "#") return "#";
    if (!(n.substr(0, 7) === "http://" || n.substr(0, 8) === "https://" || n.substr(0, 7) === "mailto:" || n.substr(0, 4) === "tel:" || n.substr(0, 11) === "data:image/" || n.substr(0, 6) === "ftp://" || n.substr(0, 2) === "./" || n.substr(0, 3) === "../" || n[0] === "#" || n[0] === "/"))
      return "";
  } else if (e === "background") {
    if (Ro.lastIndex = 0, Ro.test(n))
      return "";
  } else if (e === "style") {
    if (_u.lastIndex = 0, _u.test(n) || (Iu.lastIndex = 0, Iu.test(n) && (Ro.lastIndex = 0, Ro.test(n))))
      return "";
    r !== !1 && (r = r || vm, n = r.process(n));
  }
  return n = Mm(n), n;
}
var o2 = /</g, i2 = />/g, s2 = /"/g, l2 = /&quot;/g, a2 = /&#([a-zA-Z0-9]*);?/gim, c2 = /&colon;?/gim, d2 = /&newline;?/gim, Ro = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi, _u = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi, Iu = /u\s*r\s*l\s*\(.*/gi;
function km(t) {
  return t.replace(s2, "&quot;");
}
function Sm(t) {
  return t.replace(l2, '"');
}
function xm(t) {
  return t.replace(a2, function(n, r) {
    return r[0] === "x" || r[0] === "X" ? String.fromCharCode(parseInt(r.substr(1), 16)) : String.fromCharCode(parseInt(r, 10));
  });
}
function Cm(t) {
  return t.replace(c2, ":").replace(d2, " ");
}
function Tm(t) {
  for (var e = "", n = 0, r = t.length; n < r; n++)
    e += t.charCodeAt(n) < 32 ? " " : t.charAt(n);
  return vi.trim(e);
}
function Am(t) {
  return t = Sm(t), t = xm(t), t = Cm(t), t = Tm(t), t;
}
function Mm(t) {
  return t = km(t), t = wm(t), t;
}
function u2() {
  return "";
}
function f2(t, e) {
  typeof e != "function" && (e = function() {
  });
  var n = !Array.isArray(t);
  function r(s) {
    return n ? !0 : vi.indexOf(t, s) !== -1;
  }
  var o = [], i = !1;
  return {
    onIgnoreTag: function(s, l, a) {
      if (r(s))
        if (a.isClosing) {
          var c = "[/removed]", d = a.position + c.length;
          return o.push([
            i !== !1 ? i : a.position,
            d
          ]), i = !1, c;
        } else
          return i || (i = a.position), "[removed]";
      else
        return e(s, l, a);
    },
    remove: function(s) {
      var l = "", a = 0;
      return vi.forEach(o, function(c) {
        l += s.slice(a, c[0]), a = c[1];
      }), l += s.slice(a), l;
    }
  };
}
function p2(t) {
  for (var e = "", n = 0; n < t.length; ) {
    var r = t.indexOf("<!--", n);
    if (r === -1) {
      e += t.slice(n);
      break;
    }
    e += t.slice(n, r);
    var o = t.indexOf("-->", r);
    if (o === -1)
      break;
    n = o + 3;
  }
  return e;
}
function h2(t) {
  var e = t.split("");
  return e = e.filter(function(n) {
    var r = n.charCodeAt(0);
    return r === 127 ? !1 : r <= 31 ? r === 10 || r === 13 : !0;
  }), e.join("");
}
ie.whiteList = bm();
ie.getDefaultWhiteList = bm;
ie.onTag = QM;
ie.onIgnoreTag = e2;
ie.onTagAttr = t2;
ie.onIgnoreTagAttr = n2;
ie.safeAttrValue = r2;
ie.escapeHtml = wm;
ie.escapeQuote = km;
ie.unescapeQuote = Sm;
ie.escapeHtmlEntities = xm;
ie.escapeDangerHtml5Entities = Cm;
ie.clearNonPrintableCharacter = Tm;
ie.friendlyAttrValue = Am;
ie.escapeAttrValue = Mm;
ie.onIgnoreTagStripAll = u2;
ie.StripTagBody = f2;
ie.stripCommentTag = p2;
ie.stripBlankChar = h2;
ie.attributeWrapSign = '"';
ie.cssFilter = vm;
ie.getDefaultCSSWhiteList = YM;
var As = {}, Kt = ic;
function m2(t) {
  var e = Kt.spaceIndex(t), n;
  return e === -1 ? n = t.slice(1, -1) : n = t.slice(1, e + 1), n = Kt.trim(n).toLowerCase(), n.slice(0, 1) === "/" && (n = n.slice(1)), n.slice(-1) === "/" && (n = n.slice(0, -1)), n;
}
function g2(t) {
  return t.slice(0, 2) === "</";
}
function y2(t, e, n) {
  var r = "", o = 0, i = !1, s = !1, l = 0, a = t.length, c = "", d = "";
  e: for (l = 0; l < a; l++) {
    var u = t.charAt(l);
    if (i === !1) {
      if (u === "<") {
        i = l;
        continue;
      }
    } else if (s === !1) {
      if (u === "<") {
        r += n(t.slice(o, l)), i = l, o = l;
        continue;
      }
      if (u === ">" || l === a - 1) {
        r += n(t.slice(o, i)), d = t.slice(i, l + 1), c = m2(d), r += e(
          i,
          r.length,
          c,
          d,
          g2(d)
        ), o = l + 1, i = !1;
        continue;
      }
      if (u === '"' || u === "'")
        for (var f = 1, p = t.charAt(l - f); p.trim() === "" || p === "="; ) {
          if (p === "=") {
            s = u;
            continue e;
          }
          p = t.charAt(l - ++f);
        }
    } else if (u === s) {
      s = !1;
      continue;
    }
  }
  return o < a && (r += n(t.substr(o))), r;
}
var b2 = /[^a-zA-Z0-9\\_:.-]/gim;
function v2(t, e) {
  var n = 0, r = 0, o = [], i = !1, s = t.length;
  function l(f, p) {
    if (f = Kt.trim(f), f = f.replace(b2, "").toLowerCase(), !(f.length < 1)) {
      var h = e(f, p || "");
      h && o.push(h);
    }
  }
  for (var a = 0; a < s; a++) {
    var c = t.charAt(a), d, u;
    if (i === !1 && c === "=") {
      i = t.slice(n, a), n = a + 1, r = t.charAt(n) === '"' || t.charAt(n) === "'" ? n : k2(t, a + 1);
      continue;
    }
    if (i !== !1 && a === r) {
      if (u = t.indexOf(c, a + 1), u === -1)
        break;
      d = Kt.trim(t.slice(r + 1, u)), l(i, d), i = !1, a = u, n = a + 1;
      continue;
    }
    if (/\s|\n|\t/.test(c))
      if (t = t.replace(/\s|\n|\t/g, " "), i === !1)
        if (u = w2(t, a), u === -1) {
          d = Kt.trim(t.slice(n, a)), l(d), i = !1, n = a + 1;
          continue;
        } else {
          a = u - 1;
          continue;
        }
      else if (u = S2(t, a - 1), u === -1) {
        d = Kt.trim(t.slice(n, a)), d = Du(d), l(i, d), i = !1, n = a + 1;
        continue;
      } else
        continue;
  }
  return n < t.length && (i === !1 ? l(t.slice(n)) : l(i, Du(Kt.trim(t.slice(n))))), Kt.trim(o.join(" "));
}
function w2(t, e) {
  for (; e < t.length; e++) {
    var n = t[e];
    if (n !== " ")
      return n === "=" ? e : -1;
  }
}
function k2(t, e) {
  for (; e < t.length; e++) {
    var n = t[e];
    if (n !== " ")
      return n === "'" || n === '"' ? e : -1;
  }
}
function S2(t, e) {
  for (; e > 0; e--) {
    var n = t[e];
    if (n !== " ")
      return n === "=" ? e : -1;
  }
}
function x2(t) {
  return t[0] === '"' && t[t.length - 1] === '"' || t[0] === "'" && t[t.length - 1] === "'";
}
function Du(t) {
  return x2(t) ? t.substr(1, t.length - 2) : t;
}
As.parseTag = y2;
As.parseAttr = v2;
var C2 = oc.FilterCSS, We = ie, Em = As, T2 = Em.parseTag, A2 = Em.parseAttr, qo = ic;
function No(t) {
  return t == null;
}
function M2(t) {
  var e = qo.spaceIndex(t);
  if (e === -1)
    return {
      html: "",
      closing: t[t.length - 2] === "/"
    };
  t = qo.trim(t.slice(e + 1, -1));
  var n = t[t.length - 1] === "/";
  return n && (t = qo.trim(t.slice(0, -1))), {
    html: t,
    closing: n
  };
}
function E2(t) {
  var e = {};
  for (var n in t)
    e[n] = t[n];
  return e;
}
function O2(t) {
  var e = {};
  for (var n in t)
    Array.isArray(t[n]) ? e[n.toLowerCase()] = t[n].map(function(r) {
      return r.toLowerCase();
    }) : e[n.toLowerCase()] = t[n];
  return e;
}
function Om(t) {
  t = E2(t || {}), t.stripIgnoreTag && (t.onIgnoreTag && console.error(
    'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
  ), t.onIgnoreTag = We.onIgnoreTagStripAll), t.whiteList || t.allowList ? t.whiteList = O2(t.whiteList || t.allowList) : t.whiteList = We.whiteList, this.attributeWrapSign = t.singleQuotedAttributeValue === !0 ? "'" : We.attributeWrapSign, t.onTag = t.onTag || We.onTag, t.onTagAttr = t.onTagAttr || We.onTagAttr, t.onIgnoreTag = t.onIgnoreTag || We.onIgnoreTag, t.onIgnoreTagAttr = t.onIgnoreTagAttr || We.onIgnoreTagAttr, t.safeAttrValue = t.safeAttrValue || We.safeAttrValue, t.escapeHtml = t.escapeHtml || We.escapeHtml, this.options = t, t.css === !1 ? this.cssFilter = !1 : (t.css = t.css || {}, this.cssFilter = new C2(t.css));
}
Om.prototype.process = function(t) {
  if (t = t || "", t = t.toString(), !t) return "";
  var e = this, n = e.options, r = n.whiteList, o = n.onTag, i = n.onIgnoreTag, s = n.onTagAttr, l = n.onIgnoreTagAttr, a = n.safeAttrValue, c = n.escapeHtml, d = e.attributeWrapSign, u = e.cssFilter;
  n.stripBlankChar && (t = We.stripBlankChar(t)), n.allowCommentTag || (t = We.stripCommentTag(t));
  var f = !1;
  n.stripIgnoreTagBody && (f = We.StripTagBody(
    n.stripIgnoreTagBody,
    i
  ), i = f.onIgnoreTag);
  var p = T2(
    t,
    function(h, m, g, y, b) {
      var v = {
        sourcePosition: h,
        position: m,
        isClosing: b,
        isWhite: Object.prototype.hasOwnProperty.call(r, g)
      }, x = o(g, y, v);
      if (!No(x)) return x;
      if (v.isWhite) {
        if (v.isClosing)
          return "</" + g + ">";
        var k = M2(y), w = r[g], L = A2(k.html, function(E, A) {
          var R = qo.indexOf(w, E) !== -1, N = s(g, E, A, R);
          return No(N) ? R ? (A = a(g, E, A, u), A ? E + "=" + d + A + d : E) : (N = l(g, E, A, R), No(N) ? void 0 : N) : N;
        });
        return y = "<" + g, L && (y += " " + L), k.closing && (y += " /"), y += ">", y;
      } else
        return x = i(g, y, v), No(x) ? c(y) : x;
    },
    c
  );
  return f && (p = f.remove(p)), p;
};
var L2 = Om;
(function(t, e) {
  var n = ie, r = As, o = L2;
  function i(l, a) {
    var c = new o(a);
    return c.process(l);
  }
  e = t.exports = i, e.filterXSS = i, e.FilterXSS = o, function() {
    for (var l in n)
      e[l] = n[l];
    for (var a in r)
      e[a] = r[a];
  }(), typeof window < "u" && (window.filterXSS = t.exports);
  function s() {
    return typeof self < "u" && typeof DedicatedWorkerGlobalScope < "u" && self instanceof DedicatedWorkerGlobalScope;
  }
  s() && (self.filterXSS = t.exports);
})(ql, ql.exports);
var V2 = ql.exports;
const H2 = /* @__PURE__ */ $M(V2), R2 = ["innerHTML"], WV = /* @__PURE__ */ $({
  __name: "VuetifyViewer",
  props: {
    value: { default: "" },
    dark: { type: Boolean, default: void 0 },
    dense: { type: Boolean, default: !1 },
    markdownTheme: { type: [String, Boolean], default: void 0 },
    xss: { type: [Boolean, Array], default: !0 },
    xssOptions: { default: () => DM },
    extensions: { default: () => [] }
  },
  setup(t) {
    const e = t, { state: n } = Zi(), r = ua(), { markdownThemeStyle: o } = Kf(z(() => e.markdownTheme)), i = z(() => [...n.extensions, ...e.extensions]), s = z(() => er(e.dark) ? e.dark : er(r.current.value.dark) ? r.current.value.dark : !1), l = z(() => ({
      __dark: C(s),
      dense: e.dense,
      view: !0,
      ...C(o)
    })), a = z(() => Tr(e.value) ? e.value : BM(e.value, C(i))), c = z(() => {
      if (e.xss === !1)
        return C(a);
      const d = C(a).replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/").replace("https://vimeo.com/", "https://player.vimeo.com/video/"), u = e.xssOptions;
      return H2(d, { whiteList: u, css: !1 });
    });
    return (d, u) => (M(), re("div", {
      class: tn(["vuetify-pro-tiptap-editor__content", l.value]),
      style: { width: "100%" }
    }, [
      Nt(d.$slots, "before"),
      _t("div", {
        class: "content",
        innerHTML: c.value
      }, null, 8, R2),
      Nt(d.$slots, "after")
    ], 2));
  }
});
function N2(t = {}) {
  return new ee({
    view(e) {
      return new _2(e, t);
    }
  });
}
class _2 {
  constructor(e, n) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = n.width) !== null && r !== void 0 ? r : 1, this.color = n.color === !1 ? void 0 : n.color || "black", this.class = n.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((o) => {
      let i = (s) => {
        this[o](s);
      };
      return e.dom.addEventListener(o, i), { name: o, handler: i };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: n }) => this.editorView.dom.removeEventListener(e, n));
  }
  update(e, n) {
    this.cursorPos != null && n.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), n = !e.parent.inlineContent, r;
    if (n) {
      let l = e.nodeBefore, a = e.nodeAfter;
      if (l || a) {
        let c = this.editorView.nodeDOM(this.cursorPos - (l ? l.nodeSize : 0));
        if (c) {
          let d = c.getBoundingClientRect(), u = l ? d.bottom : d.top;
          l && a && (u = (u + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2), r = { left: d.left, right: d.right, top: u - this.width / 2, bottom: u + this.width / 2 };
        }
      }
    }
    if (!r) {
      let l = this.editorView.coordsAtPos(this.cursorPos);
      r = { left: l.left - this.width / 2, right: l.left + this.width / 2, top: l.top, bottom: l.bottom };
    }
    let o = this.editorView.dom.offsetParent;
    this.element || (this.element = o.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", n), this.element.classList.toggle("prosemirror-dropcursor-inline", !n);
    let i, s;
    if (!o || o == document.body && getComputedStyle(o).position == "static")
      i = -pageXOffset, s = -pageYOffset;
    else {
      let l = o.getBoundingClientRect();
      i = l.left - o.scrollLeft, s = l.top - o.scrollTop;
    }
    this.element.style.left = r.left - i + "px", this.element.style.top = r.top - s + "px", this.element.style.width = r.right - r.left + "px", this.element.style.height = r.bottom - r.top + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let n = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = n && n.inside >= 0 && this.editorView.state.doc.nodeAt(n.inside), o = r && r.type.spec.disableDropCursor, i = typeof o == "function" ? o(this.editorView, n, e) : o;
    if (n && !i) {
      let s = n.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = kp(this.editorView.state.doc, s, this.editorView.dragging.slice);
        l != null && (s = l);
      }
      this.setCursor(s), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    (e.target == this.editorView.dom || !this.editorView.dom.contains(e.relatedTarget)) && this.setCursor(null);
  }
}
class ce extends B {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, n) {
    let r = e.resolve(n.map(this.head));
    return ce.valid(r) ? new ce(r) : B.near(r);
  }
  content() {
    return O.empty;
  }
  eq(e) {
    return e instanceof ce && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, n) {
    if (typeof n.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new ce(e.resolve(n.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new sc(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let n = e.parent;
    if (n.isTextblock || !I2(e) || !D2(e))
      return !1;
    let r = n.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let o = n.contentMatchAt(e.index()).defaultType;
    return o && o.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, n, r = !1) {
    e: for (; ; ) {
      if (!r && ce.valid(e))
        return e;
      let o = e.pos, i = null;
      for (let s = e.depth; ; s--) {
        let l = e.node(s);
        if (n > 0 ? e.indexAfter(s) < l.childCount : e.index(s) > 0) {
          i = l.child(n > 0 ? e.indexAfter(s) : e.index(s) - 1);
          break;
        } else if (s == 0)
          return null;
        o += n;
        let a = e.doc.resolve(o);
        if (ce.valid(a))
          return a;
      }
      for (; ; ) {
        let s = n > 0 ? i.firstChild : i.lastChild;
        if (!s) {
          if (i.isAtom && !i.isText && !I.isSelectable(i)) {
            e = e.doc.resolve(o + i.nodeSize * n), r = !1;
            continue e;
          }
          break;
        }
        i = s, o += n;
        let l = e.doc.resolve(o);
        if (ce.valid(l))
          return l;
      }
      return null;
    }
  }
}
ce.prototype.visible = !1;
ce.findFrom = ce.findGapCursorFrom;
B.jsonID("gapcursor", ce);
class sc {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new sc(e.map(this.pos));
  }
  resolve(e) {
    let n = e.resolve(this.pos);
    return ce.valid(n) ? new ce(n) : B.near(n);
  }
}
function I2(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.index(e), r = t.node(e);
    if (n == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = r.child(n - 1); ; o = o.lastChild) {
      if (o.childCount == 0 && !o.inlineContent || o.isAtom || o.type.spec.isolating)
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function D2(t) {
  for (let e = t.depth; e >= 0; e--) {
    let n = t.indexAfter(e), r = t.node(e);
    if (n == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let o = r.child(n); ; o = o.firstChild) {
      if (o.childCount == 0 && !o.inlineContent || o.isAtom || o.type.spec.isolating)
        return !0;
      if (o.inlineContent)
        return !1;
    }
  }
  return !0;
}
function P2() {
  return new ee({
    props: {
      decorations: F2,
      createSelectionBetween(t, e, n) {
        return e.pos == n.pos && ce.valid(n) ? new ce(n) : null;
      },
      handleClick: $2,
      handleKeyDown: B2,
      handleDOMEvents: { beforeinput: z2 }
    }
  });
}
const B2 = za({
  ArrowLeft: _o("horiz", -1),
  ArrowRight: _o("horiz", 1),
  ArrowUp: _o("vert", -1),
  ArrowDown: _o("vert", 1)
});
function _o(t, e) {
  const n = t == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, o, i) {
    let s = r.selection, l = e > 0 ? s.$to : s.$from, a = s.empty;
    if (s instanceof P) {
      if (!i.endOfTextblock(n) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = ce.findGapCursorFrom(l, e, a);
    return c ? (o && o(r.tr.setSelection(new ce(c))), !0) : !1;
  };
}
function $2(t, e, n) {
  if (!t || !t.editable)
    return !1;
  let r = t.state.doc.resolve(e);
  if (!ce.valid(r))
    return !1;
  let o = t.posAtCoords({ left: n.clientX, top: n.clientY });
  return o && o.inside > -1 && I.isSelectable(t.state.doc.nodeAt(o.inside)) ? !1 : (t.dispatch(t.state.tr.setSelection(new ce(r))), !0);
}
function z2(t, e) {
  if (e.inputType != "insertCompositionText" || !(t.state.selection instanceof ce))
    return !1;
  let { $from: n } = t.state.selection, r = n.parent.contentMatchAt(n.index()).findWrapping(t.state.schema.nodes.text);
  if (!r)
    return !1;
  let o = S.empty;
  for (let s = r.length - 1; s >= 0; s--)
    o = S.from(r[s].createAndFill(null, o));
  let i = t.state.tr.replace(n.pos, n.pos, new O(o, 0, 0));
  return i.setSelection(P.near(i.doc.resolve(n.pos + 1))), t.dispatch(i), !1;
}
function F2(t) {
  if (!(t.selection instanceof ce))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", Q.create(t.doc, [we.widget(t.selection.head, e, { key: "gapcursor" })]);
}
var wi = 200, Se = function() {
};
Se.prototype.append = function(e) {
  return e.length ? (e = Se.from(e), !this.length && e || e.length < wi && this.leafAppend(e) || this.length < wi && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Se.prototype.prepend = function(e) {
  return e.length ? Se.from(e).append(this) : this;
};
Se.prototype.appendInner = function(e) {
  return new j2(this, e);
};
Se.prototype.slice = function(e, n) {
  return e === void 0 && (e = 0), n === void 0 && (n = this.length), e >= n ? Se.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, n));
};
Se.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Se.prototype.forEach = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length), n <= r ? this.forEachInner(e, n, r, 0) : this.forEachInvertedInner(e, n, r, 0);
};
Se.prototype.map = function(e, n, r) {
  n === void 0 && (n = 0), r === void 0 && (r = this.length);
  var o = [];
  return this.forEach(function(i, s) {
    return o.push(e(i, s));
  }, n, r), o;
};
Se.from = function(e) {
  return e instanceof Se ? e : e && e.length ? new Lm(e) : Se.empty;
};
var Lm = /* @__PURE__ */ function(t) {
  function e(r) {
    t.call(this), this.values = r;
  }
  t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
  var n = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(o, i) {
    return o == 0 && i == this.length ? this : new e(this.values.slice(o, i));
  }, e.prototype.getInner = function(o) {
    return this.values[o];
  }, e.prototype.forEachInner = function(o, i, s, l) {
    for (var a = i; a < s; a++)
      if (o(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(o, i, s, l) {
    for (var a = i - 1; a >= s; a--)
      if (o(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(o) {
    if (this.length + o.length <= wi)
      return new e(this.values.concat(o.flatten()));
  }, e.prototype.leafPrepend = function(o) {
    if (this.length + o.length <= wi)
      return new e(o.flatten().concat(this.values));
  }, n.length.get = function() {
    return this.values.length;
  }, n.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, n), e;
}(Se);
Se.empty = new Lm([]);
var j2 = /* @__PURE__ */ function(t) {
  function e(n, r) {
    t.call(this), this.left = n, this.right = r, this.length = n.length + r.length, this.depth = Math.max(n.depth, r.depth) + 1;
  }
  return t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, o, i, s) {
    var l = this.left.length;
    if (o < l && this.left.forEachInner(r, o, Math.min(i, l), s) === !1 || i > l && this.right.forEachInner(r, Math.max(o - l, 0), Math.min(this.length, i) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, o, i, s) {
    var l = this.left.length;
    if (o > l && this.right.forEachInvertedInner(r, o - l, Math.max(i, l) - l, s + l) === !1 || i < l && this.left.forEachInvertedInner(r, Math.min(o, l), i, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, o) {
    if (r == 0 && o == this.length)
      return this;
    var i = this.left.length;
    return o <= i ? this.left.slice(r, o) : r >= i ? this.right.slice(r - i, o - i) : this.left.slice(r, i).append(this.right.slice(0, o - i));
  }, e.prototype.leafAppend = function(r) {
    var o = this.right.leafAppend(r);
    if (o)
      return new e(this.left, o);
  }, e.prototype.leafPrepend = function(r) {
    var o = this.left.leafPrepend(r);
    if (o)
      return new e(o, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(Se);
const W2 = 500;
class et {
  constructor(e, n) {
    this.items = e, this.eventCount = n;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, n) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let o, i;
    n && (o = this.remapping(r, this.items.length), i = o.maps.length);
    let s = e.tr, l, a, c = [], d = [];
    return this.items.forEach((u, f) => {
      if (!u.step) {
        o || (o = this.remapping(r, f + 1), i = o.maps.length), i--, d.push(u);
        return;
      }
      if (o) {
        d.push(new dt(u.map));
        let p = u.step.map(o.slice(i)), h;
        p && s.maybeStep(p).doc && (h = s.mapping.maps[s.mapping.maps.length - 1], c.push(new dt(h, void 0, void 0, c.length + d.length))), i--, h && o.appendMap(h, i);
      } else
        s.maybeStep(u.step);
      if (u.selection)
        return l = o ? u.selection.map(o.slice(i)) : u.selection, a = new et(this.items.slice(0, r).append(d.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, n, r, o) {
    let i = [], s = this.eventCount, l = this.items, a = !o && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let u = e.steps[d].invert(e.docs[d]), f = new dt(e.mapping.maps[d], u, n), p;
      (p = a && a.merge(f)) && (f = p, d ? i.pop() : l = l.slice(0, l.length - 1)), i.push(f), n && (s++, n = void 0), o || (a = f);
    }
    let c = s - r.depth;
    return c > K2 && (l = U2(l, c), s -= c), new et(l.append(i), s);
  }
  remapping(e, n) {
    let r = new qn();
    return this.items.forEach((o, i) => {
      let s = o.mirrorOffset != null && i - o.mirrorOffset >= e ? r.maps.length - o.mirrorOffset : void 0;
      r.appendMap(o.map, s);
    }, e, n), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new et(this.items.append(e.map((n) => new dt(n))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, n) {
    if (!this.eventCount)
      return this;
    let r = [], o = Math.max(0, this.items.length - n), i = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((f) => {
      f.selection && l--;
    }, o);
    let a = n;
    this.items.forEach((f) => {
      let p = i.getMirror(--a);
      if (p == null)
        return;
      s = Math.min(s, p);
      let h = i.maps[p];
      if (f.step) {
        let m = e.steps[p].invert(e.docs[p]), g = f.selection && f.selection.map(i.slice(a + 1, p));
        g && l++, r.push(new dt(h, m, g));
      } else
        r.push(new dt(h));
    }, o);
    let c = [];
    for (let f = n; f < s; f++)
      c.push(new dt(i.maps[f]));
    let d = this.items.slice(0, o).append(c).append(r), u = new et(d, l);
    return u.emptyItemCount() > W2 && (u = u.compress(this.items.length - r.length)), u;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((n) => {
      n.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let n = this.remapping(0, e), r = n.maps.length, o = [], i = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        o.push(s), s.selection && i++;
      else if (s.step) {
        let a = s.step.map(n.slice(r)), c = a && a.getMap();
        if (r--, c && n.appendMap(c, r), a) {
          let d = s.selection && s.selection.map(n.slice(r));
          d && i++;
          let u = new dt(c.invert(), a, d), f, p = o.length - 1;
          (f = o.length && o[p].merge(u)) ? o[p] = f : o.push(u);
        }
      } else s.map && r--;
    }, this.items.length, 0), new et(Se.from(o.reverse()), i);
  }
}
et.empty = new et(Se.empty, 0);
function U2(t, e) {
  let n;
  return t.forEach((r, o) => {
    if (r.selection && e-- == 0)
      return n = o, !1;
  }), t.slice(n);
}
class dt {
  constructor(e, n, r, o) {
    this.map = e, this.step = n, this.selection = r, this.mirrorOffset = o;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let n = e.step.merge(this.step);
      if (n)
        return new dt(n.getMap().invert(), n, this.selection);
    }
  }
}
class qt {
  constructor(e, n, r, o, i) {
    this.done = e, this.undone = n, this.prevRanges = r, this.prevTime = o, this.prevComposition = i;
  }
}
const K2 = 20;
function q2(t, e, n, r) {
  let o = n.getMeta(xn), i;
  if (o)
    return o.historyState;
  n.getMeta(Z2) && (t = new qt(t.done, t.undone, null, 0, -1));
  let s = n.getMeta("appendedTransaction");
  if (n.steps.length == 0)
    return t;
  if (s && s.getMeta(xn))
    return s.getMeta(xn).redo ? new qt(t.done.addTransform(n, void 0, r, Jo(e)), t.undone, Pu(n.mapping.maps), t.prevTime, t.prevComposition) : new qt(t.done, t.undone.addTransform(n, void 0, r, Jo(e)), null, t.prevTime, t.prevComposition);
  if (n.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = n.getMeta("composition"), a = t.prevTime == 0 || !s && t.prevComposition != l && (t.prevTime < (n.time || 0) - r.newGroupDelay || !J2(n, t.prevRanges)), c = s ? tl(t.prevRanges, n.mapping) : Pu(n.mapping.maps);
    return new qt(t.done.addTransform(n, a ? e.selection.getBookmark() : void 0, r, Jo(e)), et.empty, c, n.time, l ?? t.prevComposition);
  } else return (i = n.getMeta("rebased")) ? new qt(t.done.rebased(n, i), t.undone.rebased(n, i), tl(t.prevRanges, n.mapping), t.prevTime, t.prevComposition) : new qt(t.done.addMaps(n.mapping.maps), t.undone.addMaps(n.mapping.maps), tl(t.prevRanges, n.mapping), t.prevTime, t.prevComposition);
}
function J2(t, e) {
  if (!e)
    return !1;
  if (!t.docChanged)
    return !0;
  let n = !1;
  return t.mapping.maps[0].forEach((r, o) => {
    for (let i = 0; i < e.length; i += 2)
      r <= e[i + 1] && o >= e[i] && (n = !0);
  }), n;
}
function Pu(t) {
  let e = [];
  for (let n = t.length - 1; n >= 0 && e.length == 0; n--)
    t[n].forEach((r, o, i, s) => e.push(i, s));
  return e;
}
function tl(t, e) {
  if (!t)
    return null;
  let n = [];
  for (let r = 0; r < t.length; r += 2) {
    let o = e.map(t[r], 1), i = e.map(t[r + 1], -1);
    o <= i && n.push(o, i);
  }
  return n;
}
function G2(t, e, n) {
  let r = Jo(e), o = xn.get(e).spec.config, i = (n ? t.undone : t.done).popEvent(e, r);
  if (!i)
    return null;
  let s = i.selection.resolve(i.transform.doc), l = (n ? t.done : t.undone).addTransform(i.transform, e.selection.getBookmark(), o, r), a = new qt(n ? l : i.remaining, n ? i.remaining : l, null, 0, -1);
  return i.transform.setSelection(s).setMeta(xn, { redo: n, historyState: a });
}
let nl = !1, Bu = null;
function Jo(t) {
  let e = t.plugins;
  if (Bu != e) {
    nl = !1, Bu = e;
    for (let n = 0; n < e.length; n++)
      if (e[n].spec.historyPreserveItems) {
        nl = !0;
        break;
      }
  }
  return nl;
}
const xn = new ue("history"), Z2 = new ue("closeHistory");
function X2(t = {}) {
  return t = {
    depth: t.depth || 100,
    newGroupDelay: t.newGroupDelay || 500
  }, new ee({
    key: xn,
    state: {
      init() {
        return new qt(et.empty, et.empty, null, 0, -1);
      },
      apply(e, n, r) {
        return q2(n, r, e, t);
      }
    },
    config: t,
    props: {
      handleDOMEvents: {
        beforeinput(e, n) {
          let r = n.inputType, o = r == "historyUndo" ? Hm : r == "historyRedo" ? Rm : null;
          return o ? (n.preventDefault(), o(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function Vm(t, e) {
  return (n, r) => {
    let o = xn.getState(n);
    if (!o || (t ? o.undone : o.done).eventCount == 0)
      return !1;
    if (r) {
      let i = G2(o, n, t);
      i && r(e ? i.scrollIntoView() : i);
    }
    return !0;
  };
}
const Hm = Vm(!1, !0), Rm = Vm(!0, !0);
var Y2 = W.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (t) => t.length,
      wordCounter: (t) => t.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (t) => {
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc;
      if (((t == null ? void 0 : t.mode) || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (t) => {
      const e = (t == null ? void 0 : t.node) || this.editor.state.doc, n = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(n);
    };
  },
  addProseMirrorPlugins() {
    let t = !1;
    return [
      new ee({
        key: new ue("characterCount"),
        appendTransaction: (e, n, r) => {
          if (t)
            return;
          const o = this.options.limit;
          if (o == null || o === 0) {
            t = !0;
            return;
          }
          const i = this.storage.characters({ node: r.doc });
          if (i > o) {
            const s = i - o, l = 0, a = s;
            console.warn(
              `[CharacterCount] Initial content exceeded limit of ${o} characters. Content was automatically trimmed.`
            );
            const c = r.tr.deleteRange(l, a);
            return t = !0, c;
          }
          t = !0;
        },
        filterTransaction: (e, n) => {
          const r = this.options.limit;
          if (!e.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const o = this.storage.characters({ node: n.doc }), i = this.storage.characters({ node: e.doc });
          if (i <= r || o > r && i > r && i <= o)
            return !0;
          if (o > r && i > r && i > o || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = i - r, c = l - a, d = l;
          return e.deleteRange(c, d), !(this.storage.characters({ node: e.doc }) > r);
        }
      })
    ];
  }
}), Q2 = W.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [N2(this.options)];
  }
}), eE = W.create({
  name: "focus",
  addOptions() {
    return {
      className: "has-focus",
      mode: "all"
    };
  },
  addProseMirrorPlugins() {
    return [
      new ee({
        key: new ue("focus"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const { isEditable: n, isFocused: r } = this.editor, { anchor: o } = e, i = [];
            if (!n || !r)
              return Q.create(t, []);
            let s = 0;
            this.options.mode === "deepest" && t.descendants((a, c) => {
              if (a.isText)
                return;
              if (!(o >= c && o <= c + a.nodeSize - 1))
                return !1;
              s += 1;
            });
            let l = 0;
            return t.descendants((a, c) => {
              if (a.isText || !(o >= c && o <= c + a.nodeSize - 1))
                return !1;
              if (l += 1, this.options.mode === "deepest" && s - l > 0 || this.options.mode === "shallowest" && l > 1)
                return this.options.mode === "deepest";
              i.push(
                we.node(c, c + a.nodeSize, {
                  class: this.options.className
                })
              );
            }), Q.create(t, i);
          }
        }
      })
    ];
  }
}), tE = W.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [P2()];
  },
  extendNodeSchema(t) {
    var e;
    const n = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      allowGapCursor: (e = q(D(t, "allowGapCursor", n))) != null ? e : null
    };
  }
}), nE = W.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new ee({
        key: new ue("placeholder"),
        props: {
          decorations: ({ doc: t, selection: e }) => {
            const n = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, o = [];
            if (!n)
              return null;
            const i = this.editor.isEmpty;
            return t.descendants((s, l) => {
              const a = r >= l && r <= l + s.nodeSize, c = !s.isLeaf && ys(s);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const d = [this.options.emptyNodeClass];
                i && d.push(this.options.emptyEditorClass);
                const u = we.node(l, l + s.nodeSize, {
                  class: d.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                o.push(u);
              }
              return this.options.includeChildren;
            }), Q.create(t, o);
          }
        }
      })
    ];
  }
});
W.create({
  name: "selection",
  addOptions() {
    return {
      className: "selection"
    };
  },
  addProseMirrorPlugins() {
    const { editor: t, options: e } = this;
    return [
      new ee({
        key: new ue("selection"),
        props: {
          decorations(n) {
            return n.selection.empty || t.isFocused || !t.isEditable || Oh(n.selection) || t.view.dragging ? null : Q.create(n.doc, [
              we.inline(n.selection.from, n.selection.to, {
                class: e.className
              })
            ]);
          }
        }
      })
    ];
  }
});
function $u({ types: t, node: e }) {
  return e && Array.isArray(t) && t.includes(e.type) || (e == null ? void 0 : e.type) === t;
}
W.create({
  name: "trailingNode",
  addOptions() {
    return {
      node: "paragraph",
      notAfter: []
    };
  },
  addProseMirrorPlugins() {
    const t = new ue(this.name), e = Object.entries(this.editor.schema.nodes).map(([, n]) => n).filter((n) => (this.options.notAfter || []).concat(this.options.node).includes(n.name));
    return [
      new ee({
        key: t,
        appendTransaction: (n, r, o) => {
          const { doc: i, tr: s, schema: l } = o, a = t.getState(o), c = i.content.size, d = l.nodes[this.options.node];
          if (a)
            return s.insert(c, d.create());
        },
        state: {
          init: (n, r) => {
            const o = r.tr.doc.lastChild;
            return !$u({ node: o, types: e });
          },
          apply: (n, r) => {
            if (!n.docChanged)
              return r;
            const o = n.doc.lastChild;
            return !$u({ node: o, types: e });
          }
        }
      })
    ];
  }
});
var rE = W.create({
  name: "undoRedo",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: t, dispatch: e }) => Hm(t, e),
      redo: () => ({ state: t, dispatch: e }) => Rm(t, e)
    };
  },
  addProseMirrorPlugins() {
    return [X2(this.options)];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), oE = he.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), iE = eE, sE = he.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [{ tag: "br" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["br", J(this.options.HTMLAttributes, t)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: t, chain: e, state: n, editor: r }) => t.first([
        () => t.exitCode(),
        () => t.command(() => {
          const { selection: o, storedMarks: i } = n;
          if (o.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: s } = this.options, { splittableMarks: l } = r.extensionManager, a = i || o.$to.parentOffset && o.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: d }) => {
            if (d && a && s) {
              const u = a.filter((f) => l.includes(f.type.name));
              c.ensureMarks(u);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), lE = Object.defineProperty, aE = (t, e) => {
  for (var n in e)
    lE(t, n, { get: e[n], enumerable: !0 });
}, cE = "listItem", zu = "textStyle", Fu = /^\s*([-+*])\s$/, Nm = he.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [{ tag: "ul" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(cE, this.editor.getAttributes(zu)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let t = ir({
      find: Fu,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = ir({
      find: Fu,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(zu),
      editor: this.editor
    })), [t];
  }
}), _m = he.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["li", J(this.options.HTMLAttributes, t), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), dE = {};
aE(dE, {
  findListItemPos: () => mo,
  getNextListDepth: () => lc,
  handleBackspace: () => Gl,
  handleDelete: () => Zl,
  hasListBefore: () => Im,
  hasListItemAfter: () => uE,
  hasListItemBefore: () => Dm,
  listItemHasSubList: () => Pm,
  nextListIsDeeper: () => Bm,
  nextListIsHigher: () => $m
});
var mo = (t, e) => {
  const { $from: n } = e.selection, r = pe(t, e.schema);
  let o = null, i = n.depth, s = n.pos, l = null;
  for (; i > 0 && l === null; )
    o = n.node(i), o.type === r ? l = i : (i -= 1, s -= 1);
  return l === null ? null : { $pos: e.doc.resolve(s), depth: l };
}, lc = (t, e) => {
  const n = mo(t, e);
  if (!n)
    return !1;
  const [, r] = Kx(e, t, n.$pos.pos + 4);
  return r;
}, Im = (t, e, n) => {
  const { $anchor: r } = t.selection, o = Math.max(0, r.pos - 2), i = t.doc.resolve(o).node();
  return !(!i || !n.includes(i.type.name));
}, Dm = (t, e) => {
  var n;
  const { $anchor: r } = e.selection, o = e.doc.resolve(r.pos - 2);
  return !(o.index() === 0 || ((n = o.nodeBefore) == null ? void 0 : n.type.name) !== t);
}, Pm = (t, e, n) => {
  if (!n)
    return !1;
  const r = pe(t, e.schema);
  let o = !1;
  return n.descendants((i) => {
    i.type === r && (o = !0);
  }), o;
}, Gl = (t, e, n) => {
  if (t.commands.undoInputRule())
    return !0;
  if (t.state.selection.from !== t.state.selection.to)
    return !1;
  if (!an(t.state, e) && Im(t.state, e, n)) {
    const { $anchor: l } = t.state.selection, a = t.state.doc.resolve(l.before() - 1), c = [];
    a.node().descendants((f, p) => {
      f.type.name === e && c.push({ node: f, pos: p });
    });
    const d = c.at(-1);
    if (!d)
      return !1;
    const u = t.state.doc.resolve(a.start() + d.pos + 1);
    return t.chain().cut({ from: l.start() - 1, to: l.end() + 1 }, u.end()).joinForward().run();
  }
  if (!an(t.state, e) || !Zx(t.state))
    return !1;
  const r = mo(e, t.state);
  if (!r)
    return !1;
  const i = t.state.doc.resolve(r.$pos.pos - 2).node(r.depth), s = Pm(e, t.state, i);
  return Dm(e, t.state) && !s ? t.commands.joinItemBackward() : t.chain().liftListItem(e).run();
}, Bm = (t, e) => {
  const n = lc(t, e), r = mo(t, e);
  return !r || !n ? !1 : n > r.depth;
}, $m = (t, e) => {
  const n = lc(t, e), r = mo(t, e);
  return !r || !n ? !1 : n < r.depth;
}, Zl = (t, e) => {
  if (!an(t.state, e) || !Gx(t.state, e))
    return !1;
  const { selection: n } = t.state, { $from: r, $to: o } = n;
  return !n.empty && r.sameParent(o) ? !1 : Bm(e, t.state) ? t.chain().focus(t.state.selection.from + 4).lift(e).joinBackward().run() : $m(e, t.state) ? t.chain().joinForward().joinBackward().run() : t.commands.joinItemForward();
}, uE = (t, e) => {
  var n;
  const { $anchor: r } = e.selection, o = e.doc.resolve(r.pos - r.parentOffset - 2);
  return !(o.index() === o.parent.childCount - 1 || ((n = o.nodeAfter) == null ? void 0 : n.type.name) !== t);
}, fE = W.create({
  name: "listKeymap",
  addOptions() {
    return {
      listTypes: [
        {
          itemName: "listItem",
          wrapperNames: ["bulletList", "orderedList"]
        },
        {
          itemName: "taskItem",
          wrapperNames: ["taskList"]
        }
      ]
    };
  },
  addKeyboardShortcuts() {
    return {
      Delete: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          t.state.schema.nodes[n] !== void 0 && Zl(t, n) && (e = !0);
        }), e;
      },
      "Mod-Delete": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n }) => {
          t.state.schema.nodes[n] !== void 0 && Zl(t, n) && (e = !0);
        }), e;
      },
      Backspace: ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
          t.state.schema.nodes[n] !== void 0 && Gl(t, n, r) && (e = !0);
        }), e;
      },
      "Mod-Backspace": ({ editor: t }) => {
        let e = !1;
        return this.options.listTypes.forEach(({ itemName: n, wrapperNames: r }) => {
          t.state.schema.nodes[n] !== void 0 && Gl(t, n, r) && (e = !0);
        }), e;
      }
    };
  }
}), pE = "listItem", ju = "textStyle", Wu = /^(\d+)\.\s$/, zm = he.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (t) => t.hasAttribute("start") ? parseInt(t.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (t) => t.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { start: e, ...n } = t;
    return e === 1 ? ["ol", J(this.options.HTMLAttributes, n), 0] : ["ol", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: t, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(pE, this.editor.getAttributes(ju)).run() : t.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let t = ir({
      find: Wu,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (t = ir({
      find: Wu,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(ju) }),
      joinPredicate: (e, n) => n.childCount + n.attrs.start === +e[1],
      editor: this.editor
    })), [t];
  }
}), hE = /^\s*(\[([( |x])?\])\s$/, Fm = he.create({
  name: "taskItem",
  addOptions() {
    return {
      nested: !1,
      HTMLAttributes: {},
      taskListTypeName: "taskList",
      a11y: void 0
    };
  },
  content() {
    return this.options.nested ? "paragraph block*" : "paragraph+";
  },
  defining: !0,
  addAttributes() {
    return {
      checked: {
        default: !1,
        keepOnSplit: !1,
        parseHTML: (t) => {
          const e = t.getAttribute("data-checked");
          return e === "" || e === "true";
        },
        renderHTML: (t) => ({
          "data-checked": t.checked
        })
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: `li[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "li",
      J(this.options.HTMLAttributes, e, {
        "data-type": this.name
      }),
      [
        "label",
        [
          "input",
          {
            type: "checkbox",
            checked: t.attrs.checked ? "checked" : null
          }
        ],
        ["span"]
      ],
      ["div", 0]
    ];
  },
  addKeyboardShortcuts() {
    const t = {
      Enter: () => this.editor.commands.splitListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
    return this.options.nested ? {
      ...t,
      Tab: () => this.editor.commands.sinkListItem(this.name)
    } : t;
  },
  addNodeView() {
    return ({ node: t, HTMLAttributes: e, getPos: n, editor: r }) => {
      const o = document.createElement("li"), i = document.createElement("label"), s = document.createElement("span"), l = document.createElement("input"), a = document.createElement("div"), c = (d) => {
        var u, f;
        l.ariaLabel = ((f = (u = this.options.a11y) == null ? void 0 : u.checkboxLabel) == null ? void 0 : f.call(u, d, l.checked)) || `Task item checkbox for ${d.textContent || "empty task item"}`;
      };
      return c(t), i.contentEditable = "false", l.type = "checkbox", l.addEventListener("mousedown", (d) => d.preventDefault()), l.addEventListener("change", (d) => {
        if (!r.isEditable && !this.options.onReadOnlyChecked) {
          l.checked = !l.checked;
          return;
        }
        const { checked: u } = d.target;
        r.isEditable && typeof n == "function" && r.chain().focus(void 0, { scrollIntoView: !1 }).command(({ tr: f }) => {
          const p = n();
          if (typeof p != "number")
            return !1;
          const h = f.doc.nodeAt(p);
          return f.setNodeMarkup(p, void 0, {
            ...h == null ? void 0 : h.attrs,
            checked: u
          }), !0;
        }).run(), !r.isEditable && this.options.onReadOnlyChecked && (this.options.onReadOnlyChecked(t, u) || (l.checked = !l.checked));
      }), Object.entries(this.options.HTMLAttributes).forEach(([d, u]) => {
        o.setAttribute(d, u);
      }), o.dataset.checked = t.attrs.checked, l.checked = t.attrs.checked, i.append(l, s), o.append(i, a), Object.entries(e).forEach(([d, u]) => {
        o.setAttribute(d, u);
      }), {
        dom: o,
        contentDOM: a,
        update: (d) => d.type !== this.type ? !1 : (o.dataset.checked = d.attrs.checked, l.checked = d.attrs.checked, c(d), !0)
      };
    };
  },
  addInputRules() {
    return [
      ir({
        find: hE,
        type: this.type,
        getAttributes: (t) => ({
          checked: t[t.length - 1] === "x"
        })
      })
    ];
  }
}), jm = he.create({
  name: "taskList",
  addOptions() {
    return {
      itemTypeName: "taskItem",
      HTMLAttributes: {}
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      {
        tag: `ul[data-type="${this.name}"]`,
        priority: 51
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["ul", J(this.options.HTMLAttributes, t, { "data-type": this.name }), 0];
  },
  addCommands() {
    return {
      toggleTaskList: () => ({ commands: t }) => t.toggleList(this.name, this.options.itemTypeName)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-9": () => this.editor.commands.toggleTaskList()
    };
  }
});
W.create({
  name: "listKit",
  addExtensions() {
    const t = [];
    return this.options.bulletList !== !1 && t.push(Nm.configure(this.options.bulletList)), this.options.listItem !== !1 && t.push(_m.configure(this.options.listItem)), this.options.listKeymap !== !1 && t.push(fE.configure(this.options.listKeymap)), this.options.orderedList !== !1 && t.push(zm.configure(this.options.orderedList)), this.options.taskItem !== !1 && t.push(Fm.configure(this.options.taskItem)), this.options.taskList !== !1 && t.push(jm.configure(this.options.taskList)), t;
  }
});
var mE = he.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [{ tag: "p" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["p", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: t }) => t.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), gE = he.create({
  name: "text",
  group: "inline"
}), yE = (t) => {
  if (!t.children.length)
    return;
  const e = t.querySelectorAll("span");
  e && e.forEach((n) => {
    var r, o;
    const i = n.getAttribute("style"), s = (o = (r = n.parentElement) == null ? void 0 : r.closest("span")) == null ? void 0 : o.getAttribute("style");
    n.setAttribute("style", `${s};${i}`);
  });
}, Wm = at.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !0
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        consuming: !1,
        getAttrs: (t) => t.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && yE(t), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["span", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      toggleTextStyle: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      removeEmptyTextStyle: () => ({ tr: t }) => {
        const { selection: e } = t;
        return t.doc.nodesBetween(e.from, e.to, (n, r) => {
          if (n.isTextblock)
            return !0;
          n.marks.filter((o) => o.type === this.type).some((o) => Object.values(o.attrs).some((i) => !!i)) || t.removeMark(r, r + n.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), bE = W.create({
  name: "backgroundColor",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          backgroundColor: {
            default: null,
            parseHTML: (t) => {
              var e;
              return (e = t.style.backgroundColor) == null ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.backgroundColor ? {
              style: `background-color: ${t.backgroundColor}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setBackgroundColor: (t) => ({ chain: e }) => e().setMark("textStyle", { backgroundColor: t }).run(),
      unsetBackgroundColor: () => ({ chain: t }) => t().setMark("textStyle", { backgroundColor: null }).removeEmptyTextStyle().run()
    };
  }
}), Um = W.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (t) => {
              var e;
              return (e = t.style.color) == null ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (t) => t.color ? {
              style: `color: ${t.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (t) => ({ chain: e }) => e().setMark("textStyle", { color: t }).run(),
      unsetColor: () => ({ chain: t }) => t().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), Km = W.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (t) => t.style.fontFamily,
            renderHTML: (t) => t.fontFamily ? {
              style: `font-family: ${t.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (t) => ({ chain: e }) => e().setMark("textStyle", { fontFamily: t }).run(),
      unsetFontFamily: () => ({ chain: t }) => t().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
}), vE = W.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (t) => t.style.fontSize,
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${t.fontSize}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), wE = W.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (t) => t.style.lineHeight,
            renderHTML: (t) => t.lineHeight ? {
              style: `line-height: ${t.lineHeight}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (t) => ({ chain: e }) => e().setMark("textStyle", { lineHeight: t }).run(),
      unsetLineHeight: () => ({ chain: t }) => t().setMark("textStyle", { lineHeight: null }).removeEmptyTextStyle().run()
    };
  }
});
W.create({
  name: "textStyleKit",
  addExtensions() {
    const t = [];
    return this.options.backgroundColor !== !1 && t.push(bE.configure(this.options.backgroundColor)), this.options.color !== !1 && t.push(Um.configure(this.options.color)), this.options.fontFamily !== !1 && t.push(Km.configure(this.options.fontFamily)), this.options.fontSize !== !1 && t.push(vE.configure(this.options.fontSize)), this.options.lineHeight !== !1 && t.push(wE.configure(this.options.lineHeight)), this.options.textStyle !== !1 && t.push(Wm.configure(this.options.textStyle)), t;
  }
});
var kE = "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z", SE = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z", xE = "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z", CE = "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z", TE = "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M11 8H9V10C9 11.1 8.1 12 7 12C8.1 12 9 12.9 9 14V16H11V18H9C7.9 18 7 17.1 7 16V15C7 13.9 6.1 13 5 13V11C6.1 11 7 10.1 7 9V8C7 6.9 7.9 6 9 6H11V8M19 13C17.9 13 17 13.9 17 15V16C17 17.1 16.1 18 15 18H13V16H15V14C15 12.9 15.9 12 17 12C15.9 12 15 11.1 15 10V8H13V6H15C16.1 6 17 6.9 17 8V9C17 10.1 17.9 11 19 11V13Z", AE = "M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z", ME = "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z", EE = "M13.09 20H6L12 14L13.88 15.88C14.5 14.9 15.36 14.1 16.4 13.6L18 12V13.09C18.33 13.04 18.66 13 19 13C19.34 13 19.67 13.04 20 13.09V8L14 2H6C4.89 2 4 2.89 4 4V20C4 21.1 4.89 22 6 22H13.81C13.46 21.39 13.21 20.72 13.09 20M13 3.5L18.5 9H13V3.5M8 9C9.11 9 10 9.9 10 11S9.11 13 8 13 6 12.11 6 11 6.9 9 8 9M20 15V18H23V20H20V23H18V20H15V18H18V15H20Z", Uu = "M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z", OE = "M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z", LE = "M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z", VE = "M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z", HE = "M13.5,15.5H10V12.5H13.5A1.5,1.5 0 0,1 15,14A1.5,1.5 0 0,1 13.5,15.5M10,6.5H13A1.5,1.5 0 0,1 14.5,8A1.5,1.5 0 0,1 13,9.5H10M15.6,10.79C16.57,10.11 17.25,9 17.25,8C17.25,5.74 15.5,4 13.25,4H7V18H14.04C16.14,18 17.75,16.3 17.75,14.21C17.75,12.69 16.89,11.39 15.6,10.79Z", RE = "M6,5V5.18L8.82,8H11.22L10.5,9.68L12.6,11.78L14.21,8H20V5H6M3.27,5L2,6.27L8.97,13.24L6.5,19H9.5L11.07,15.34L16.73,21L18,19.73L3.55,5.27L3.27,5Z", NE = "M4,17L6.75,14.25L6.72,14.23C6.14,13.64 6.14,12.69 6.72,12.11L11.46,7.37L15.7,11.61L10.96,16.35C10.39,16.93 9.46,16.93 8.87,16.37L8.24,17H4M15.91,2.91C16.5,2.33 17.45,2.33 18.03,2.91L20.16,5.03C20.74,5.62 20.74,6.57 20.16,7.16L16.86,10.45L12.62,6.21L15.91,2.91Z", _E = "M3,7H9V13H3V7M3,3H21V5H3V3M21,7V9H11V7H21M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", IE = "M3,7H9V13H3V7M3,3H21V5H3V3M21,11V13H11V11H21M3,15H17V17H3V15M3,19H21V21H3V19Z", DE = "M15,7H21V13H15V7M3,3H21V5H3V3M13,7V9H3V7H13M9,11V13H3V11H9M3,15H17V17H3V15M3,19H21V21H3V19Z", PE = "M17,8H20V20H21V21H17V20H18V17H14L12.5,20H14V21H10V20H11L17,8M18,9L14.5,16H18V9M5,3H10C11.11,3 12,3.89 12,5V16H9V11H6V16H3V5C3,3.89 3.89,3 5,3M6,5V9H9V5H6Z", BE = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M14,18V16H16V6.31L13.5,7.75V5.44L16,4H18V16H20V18H14Z", $E = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M21,18H15A2,2 0 0,1 13,16C13,15.47 13.2,15 13.54,14.64L18.41,9.41C18.78,9.05 19,8.55 19,8A2,2 0 0,0 17,6A2,2 0 0,0 15,8H13A4,4 0 0,1 17,4A4,4 0 0,1 21,8C21,9.1 20.55,10.1 19.83,10.83L15,16H21V18Z", zE = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V15H15V16H19V12H15V10H19V6H15V7H13V6A2,2 0 0,1 15,4Z", FE = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M18,18V13H13V11L18,4H20V11H21V13H20V18H18M18,11V7.42L15.45,11H18Z", jE = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17A4,4 0 0,1 21,14A4,4 0 0,1 17,18H15A2,2 0 0,1 13,16V15H15V16H17A2,2 0 0,0 19,14A2,2 0 0,0 17,12H15A2,2 0 0,1 13,10V6A2,2 0 0,1 15,4Z", WE = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H19A2,2 0 0,1 21,6V7H19V6H15V10H19A2,2 0 0,1 21,12V16A2,2 0 0,1 19,18H15A2,2 0 0,1 13,16V6A2,2 0 0,1 15,4M15,12V16H19V12H15Z", UE = "M3,4H5V10H9V4H11V18H9V12H5V18H3V4M13,8H15.31L15.63,5H17.63L17.31,8H19.31L19.63,5H21.63L21.31,8H23V10H21.1L20.9,12H23V14H20.69L20.37,17H18.37L18.69,14H16.69L16.37,17H14.37L14.69,14H13V12H14.9L15.1,10H13V8M17.1,10L16.9,12H18.9L19.1,10H17.1Z", KE = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M3,21H21V19H3M3,12L7,16V8M11,17H21V15H11V17Z", qE = "M11,13H21V11H11M11,9H21V7H11M3,3V5H21V3M11,17H21V15H11M3,8V16L7,12M3,21H21V19H3V21Z", JE = "M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z", GE = "M7,5H21V7H7V5M7,13V11H21V13H7M4,4.5A1.5,1.5 0 0,1 5.5,6A1.5,1.5 0 0,1 4,7.5A1.5,1.5 0 0,1 2.5,6A1.5,1.5 0 0,1 4,4.5M4,10.5A1.5,1.5 0 0,1 5.5,12A1.5,1.5 0 0,1 4,13.5A1.5,1.5 0 0,1 2.5,12A1.5,1.5 0 0,1 4,10.5M7,19V17H21V19H7M4,16.5A1.5,1.5 0 0,1 5.5,18A1.5,1.5 0 0,1 4,19.5A1.5,1.5 0 0,1 2.5,18A1.5,1.5 0 0,1 4,16.5Z", ZE = "M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z", XE = "M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z", YE = "M13,4A4,4 0 0,1 17,8A4,4 0 0,1 13,12H11V18H9V4H13M13,10A2,2 0 0,0 15,8A2,2 0 0,0 13,6H11V10H13Z", QE = "M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z", eO = "M2 4V7H7V19H10V7H15V4H2M21 9H12V12H15V19H18V12H21V9Z", tO = "M3,14H21V12H3M5,4V7H10V10H14V7H19V4M10,19H14V16H10V19Z", nO = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,21.03H16.97V20.03L17.86,19.23C18.62,18.58 19.18,18.04 19.56,17.6C19.93,17.16 20.12,16.75 20.13,16.36C20.14,16.08 20.05,15.85 19.86,15.66C19.68,15.5 19.39,15.38 19,15.38C18.69,15.38 18.42,15.44 18.16,15.56L17.5,15.94L17.05,14.77C17.32,14.56 17.64,14.38 18.03,14.24C18.42,14.1 18.85,14 19.32,14C20.1,14.04 20.7,14.25 21.1,14.66C21.5,15.07 21.72,15.59 21.72,16.23C21.71,16.79 21.53,17.31 21.18,17.78C20.84,18.25 20.42,18.7 19.91,19.14L19.27,19.66V19.68H21.85V21.03Z", rO = "M16,7.41L11.41,12L16,16.59L14.59,18L10,13.41L5.41,18L4,16.59L8.59,12L4,7.41L5.41,6L10,10.59L14.59,6L16,7.41M21.85,9H16.97V8L17.86,7.18C18.62,6.54 19.18,6 19.56,5.55C19.93,5.11 20.12,4.7 20.13,4.32C20.14,4.04 20.05,3.8 19.86,3.62C19.68,3.43 19.39,3.34 19,3.33C18.69,3.34 18.42,3.4 18.16,3.5L17.5,3.89L17.05,2.72C17.32,2.5 17.64,2.33 18.03,2.19C18.42,2.05 18.85,2 19.32,2C20.1,2 20.7,2.2 21.1,2.61C21.5,3 21.72,3.54 21.72,4.18C21.71,4.74 21.53,5.26 21.18,5.73C20.84,6.21 20.42,6.66 19.91,7.09L19.27,7.61V7.63H21.85V9Z", oO = "M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z", iO = "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z", sO = "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z", lO = "M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z", aO = "M2,5.27L3.28,4L20,20.72L18.73,22L13.9,17.17L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L12.5,15.76L10.88,14.15C10.87,14.39 10.77,14.64 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C8.12,13.77 7.63,12.37 7.72,11L2,5.27M12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.79,8.97L9.38,7.55L12.71,4.22M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.2,10.54 16.61,12.5 16.06,14.23L14.28,12.46C14.23,11.78 13.94,11.11 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z", Ku = "M10.6 13.4A1 1 0 0 1 9.2 14.8A4.8 4.8 0 0 1 9.2 7.8L12.7 4.2A5.1 5.1 0 0 1 19.8 4.2A5.1 5.1 0 0 1 19.8 11.3L18.3 12.8A6.4 6.4 0 0 0 17.9 10.4L18.4 9.9A3.2 3.2 0 0 0 18.4 5.6A3.2 3.2 0 0 0 14.1 5.6L10.6 9.2A2.9 2.9 0 0 0 10.6 13.4M23 18V20H20V23H18V20H15V18H18V15H20V18M16.2 13.7A4.8 4.8 0 0 0 14.8 9.2A1 1 0 0 0 13.4 10.6A2.9 2.9 0 0 1 13.4 14.8L9.9 18.4A3.2 3.2 0 0 1 5.6 18.4A3.2 3.2 0 0 1 5.6 14.1L6.1 13.7A7.3 7.3 0 0 1 5.7 11.2L4.2 12.7A5.1 5.1 0 0 0 4.2 19.8A5.1 5.1 0 0 0 11.3 19.8L13.1 18A6 6 0 0 1 16.2 13.7Z", cO = "M19,13H5V11H19V13Z", dO = "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z", uO = "M17.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,9A1.5,1.5 0 0,1 19,10.5A1.5,1.5 0 0,1 17.5,12M14.5,8A1.5,1.5 0 0,1 13,6.5A1.5,1.5 0 0,1 14.5,5A1.5,1.5 0 0,1 16,6.5A1.5,1.5 0 0,1 14.5,8M9.5,8A1.5,1.5 0 0,1 8,6.5A1.5,1.5 0 0,1 9.5,5A1.5,1.5 0 0,1 11,6.5A1.5,1.5 0 0,1 9.5,8M6.5,12A1.5,1.5 0 0,1 5,10.5A1.5,1.5 0 0,1 6.5,9A1.5,1.5 0 0,1 8,10.5A1.5,1.5 0 0,1 6.5,12M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A1.5,1.5 0 0,0 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5A1.5,1.5 0 0,1 14.23,16H16A5,5 0 0,0 21,11C21,6.58 16.97,3 12,3Z", fO = "M18.4,10.6C16.55,9 14.15,8 11.5,8C6.85,8 2.92,11.03 1.54,15.22L3.9,16C4.95,12.81 7.95,10.5 11.5,10.5C13.45,10.5 15.23,11.22 16.62,12.38L13,16H22V7L18.4,10.6Z", pO = "M9 7V17H15V15H11V7H9Z", hO = "M9 7C7.9 7 7 7.9 7 9V17H9V9H11V16H13V9H15V17H17V9C17 7.9 16.11 7 15 7H9Z", mO = "M11 7C9.9 7 9 7.9 9 9V11C9 12.11 9.9 13 11 13H13V15H9V17H13C14.11 17 15 16.11 15 15V13C15 11.9 14.11 11 13 11H11V9H15V7H11Z", gO = "M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z", yO = "M11,2A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H2V2H11M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M15,11H18V8H20V11H23V13H20V16H18V13H15V11Z", bO = "M13,2A2,2 0 0,0 11,4V20A2,2 0 0,0 13,22H22V2H13M20,10V14H13V10H20M20,16V20H13V16H20M20,4V8H13V4H20M9,11H6V8H4V11H1V13H4V16H6V13H9V11Z", vO = "M4,2H11A2,2 0 0,1 13,4V20A2,2 0 0,1 11,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2M4,10V14H11V10H4M4,16V20H11V16H4M4,4V8H11V4H4M17.59,12L15,9.41L16.41,8L19,10.59L21.59,8L23,9.41L20.41,12L23,14.59L21.59,16L19,13.41L16.41,16L15,14.59L17.59,12Z", wO = "M5,10H3V4H11V6H5V10M19,18H13V20H21V14H19V18M5,18V14H3V20H11V18H5M21,4H13V6H19V10H21V4M8,13V15L11,12L8,9V11H3V13H8M16,11V9L13,12L16,15V13H21V11H16Z", kO = "M18,14H20V17H23V19H20V22H18V19H15V17H18V14M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", SO = "M15.46,15.88L16.88,14.46L19,16.59L21.12,14.46L22.54,15.88L20.41,18L22.54,20.12L21.12,21.54L19,19.41L16.88,21.54L15.46,20.12L17.59,18L15.46,15.88M4,3H18A2,2 0 0,1 20,5V12.08C18.45,11.82 16.92,12.18 15.68,13H12V17H13.08C12.97,17.68 12.97,18.35 13.08,19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,7V11H10V7H4M12,7V11H18V7H12M4,13V17H10V13H4Z", xO = "M22,10A2,2 0 0,1 20,12H4A2,2 0 0,1 2,10V3H4V5H8V3H10V5H14V3H16V5H20V3H22V10M4,10H8V7H4V10M10,10H14V7H10V10M20,10V7H16V10H20M11,14H13V17H16V19H13V22H11V19H8V17H11V14Z", CO = "M22,14A2,2 0 0,0 20,12H4A2,2 0 0,0 2,14V21H4V19H8V21H10V19H14V21H16V19H20V21H22V14M4,14H8V17H4V14M10,14H14V17H10V14M20,14V17H16V14H20M11,10H13V7H16V5H13V2H11V5H8V7H11V10Z", TO = "M9.41,13L12,15.59L14.59,13L16,14.41L13.41,17L16,19.59L14.59,21L12,18.41L9.41,21L8,19.59L10.59,17L8,14.41L9.41,13M22,9A2,2 0 0,1 20,11H4A2,2 0 0,1 2,9V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V9M4,9H8V6H4V9M10,9H14V6H10V9M16,9H20V6H16V9Z", AO = "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z", MO = "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z", EO = "M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5M14,13H11V16H9V13H6V11H9V8H11V11H14V13Z", OO = "M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z";
const LO = {
  bold: HE,
  italic: JE,
  underline: oO,
  strike: tO,
  color: OO,
  highlight: NE,
  heading: UE,
  textAlign: Uu,
  fontFamily: PE,
  fontSize: eO,
  subscript: nO,
  superscript: rO,
  bulletList: GE,
  orderedList: XE,
  taskList: ZE,
  indent: qE,
  outdent: KE,
  link: Ku,
  fileImagePlus: EE,
  image: lO,
  video: EO,
  table: gO,
  blockquote: QE,
  horizontalRule: cO,
  code: AE,
  codeBlock: TE,
  clear: RE,
  undo: MO,
  redo: fO,
  markdownTheme: uO,
  fullscreen: iO,
  // heading
  h1: BE,
  h2: $E,
  h3: zE,
  h4: FE,
  h5: jE,
  h6: WE,
  p: YE,
  // textAlign
  left: LE,
  center: Uu,
  right: VE,
  justify: OE,
  // no tollbar icon
  circle: xE,
  close: CE,
  fullscreenExit: sO,
  linkVariant: Ku,
  linkVariantOff: aO,
  openInNew: dO,
  formatFloatLeft: _E,
  formatFloatNone: IE,
  formatFloatRight: DE,
  sizeS: mO,
  sizeM: hO,
  sizeL: pO,
  aspectRatio: kE,
  delete: ME,
  text: AO,
  // table
  tablePlus: kO,
  tableRemove: SO,
  tableColumnPlusAfter: yO,
  tableColumnPlusBefore: bO,
  tableColumnRemove: vO,
  tableRowPlusAfter: xO,
  tableRowPlusBefore: CO,
  tableRowRemove: TO,
  tableMergeCells: wO,
  check: SE
};
function ae(t) {
  if (t)
    return `svg:${LO[t]}`;
}
const qm = {
  editor: {
    type: Object,
    required: !0
  },
  icon: {
    type: String,
    default: void 0
  },
  tooltip: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String,
    default: void 0
  },
  action: {
    type: Function,
    default: void 0
  },
  isActive: {
    type: Function,
    default: void 0
  }
}, se = {
  editor: {
    type: Object,
    required: !0
  },
  t: {
    type: Function,
    required: !0
  }
}, j = /* @__PURE__ */ $({
  __name: "index",
  props: qm,
  setup(t) {
    const e = t, n = df("disableToolbar", G(!1));
    return (r, o) => {
      var a;
      const i = Ln, s = hg, l = oo;
      return M(), _(l, {
        class: tn(["rounded me-1 ms-0", {
          "v-btn--active": (a = r.isActive) == null ? void 0 : a.call(r)
        }]),
        density: "comfortable",
        size: "small",
        disabled: C(n) || r.disabled,
        color: r.color,
        icon: "",
        onClick: r.action
      }, {
        default: V(() => [
          H(i, {
            icon: C(ae)(e.icon)
          }, null, 8, ["icon"]),
          H(s, {
            eager: !1,
            activator: "parent",
            location: "top",
            text: e.tooltip
          }, null, 8, ["text"]),
          Nt(r.$slots, "default")
        ]),
        _: 3
      }, 8, ["disabled", "color", "class", "onClick"]);
    };
  }
}), VO = /* @__PURE__ */ $({
  __name: "BlockquoteActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleBlockquote().run(),
      "is-active": () => e.editor.isActive("blockquote") || !1,
      disabled: !e.editor.can().toggleBlockquote(),
      tooltip: e.t("editor.blockquote.tooltip"),
      icon: "blockquote"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), HO = /* @__PURE__ */ $({
  __name: "BoldActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleBold().run(),
      "is-active": () => e.editor.isActive("bold") || !1,
      disabled: !e.editor.can().toggleBold(),
      tooltip: e.t("editor.bold.tooltip"),
      icon: "bold"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), RO = /* @__PURE__ */ $({
  __name: "BulletListActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleBulletList().run(),
      "is-active": () => e.editor.isActive("bulletList") || !1,
      disabled: !e.editor.can().toggleBulletList(),
      tooltip: e.t("editor.bulletlist.tooltip"),
      icon: "bulletList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), NO = /* @__PURE__ */ $({
  __name: "ClearActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().clearNodes().unsetAllMarks().run(),
      disabled: !e.editor.can().chain().focus().clearNodes().unsetAllMarks().run(),
      tooltip: e.t("editor.clear.tooltip"),
      icon: "clear"
    }, null, 8, ["editor", "action", "disabled", "tooltip"]));
  }
}), _O = /* @__PURE__ */ $({
  __name: "CodeActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleCode().run(),
      "is-active": () => e.editor.isActive("code") || !1,
      disabled: !e.editor.can().toggleCode(),
      tooltip: e.t("editor.code.tooltip"),
      icon: "code"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), IO = /* @__PURE__ */ $({
  __name: "CodeBlockActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleCodeBlock().run(),
      "is-active": () => e.editor.isActive("codeBlock") || !1,
      disabled: !e.editor.can().toggleCodeBlock(),
      tooltip: e.t("editor.codeblock.tooltip"),
      icon: "codeBlock"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), Jm = /* @__PURE__ */ $({
  __name: "ColorPicker",
  props: {
    modelValue: { default: "" },
    nudgeLeft: { default: 0 },
    nudgeTop: { default: 0 },
    more: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(t, { emit: e }) {
    const n = t, r = e, o = G(""), i = G(!1);
    Ht(i, (l) => {
      o.value = n.modelValue;
    });
    function s(l) {
      r("update:modelValue", l), r("change", l), o.value = l, i.value = !1;
    }
    return (l, a) => {
      const c = Ln, d = oo, u = io, f = mg, p = sa, h = Gi;
      return M(), _(h, {
        modelValue: i.value,
        "onUpdate:modelValue": a[2] || (a[2] = (m) => i.value = m),
        "nudge-left": l.nudgeLeft || 255,
        "nudge-top": l.nudgeTop || 42,
        "close-on-content-click": !1,
        transition: "scale-transition",
        origin: l.nudgeLeft ? "top left" : "top right",
        activator: "parent"
      }, {
        default: V(() => [
          H(p, null, {
            default: V(() => [
              H(f, {
                class: "d-flex flex-wrap justify-between ma-1",
                fluid: "",
                "max-width": 230
              }, {
                default: V(() => [
                  (M(!0), re(ye, null, He(C(Vg), (m) => (M(), _(d, {
                    key: m,
                    flat: "",
                    icon: "",
                    density: "compact",
                    onClick: (g) => s(m)
                  }, {
                    default: V(() => [
                      H(c, {
                        icon: C(ae)("circle"),
                        color: m
                      }, null, 8, ["icon", "color"])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 128)),
                  H(u, {
                    modelValue: o.value,
                    "onUpdate:modelValue": a[0] || (a[0] = (m) => o.value = m),
                    class: "mt-2 mx-1",
                    "append-inner-icon": C(ae)("check"),
                    density: "compact",
                    label: "HEX",
                    variant: "outlined",
                    flat: "",
                    "hide-details": "",
                    "single-line": "",
                    clearable: "",
                    "onClick:appendInner": a[1] || (a[1] = (m) => s(o.value))
                  }, da({ _: 2 }, [
                    o.value ? {
                      name: "prepend-inner",
                      fn: V(() => [
                        H(c, {
                          class: "opacity-100",
                          icon: C(ae)("circle"),
                          color: o.value
                        }, null, 8, ["icon", "color"])
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["modelValue", "append-inner-icon"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "nudge-left", "nudge-top", "origin"]);
    };
  }
}), DO = /* @__PURE__ */ $({
  __name: "ColorActionButton",
  props: se,
  setup(t) {
    const e = t, { state: n } = Ma();
    function r(i) {
      typeof i == "string" && e.editor.chain().focus().setColor(i).run();
    }
    function o() {
      const { color: i } = e.editor.getAttributes("textStyle");
      return i && e.editor.isActive({ color: i }) || !1;
    }
    return Vn(() => {
      const { color: i } = e.editor.getAttributes("textStyle");
      n.color = i;
    }), (i, s) => (M(), _(j, {
      editor: i.editor,
      icon: "color",
      tooltip: i.t("editor.color.tooltip"),
      disabled: !i.editor.can().setColor(""),
      color: C(n).color,
      "is-active": o
    }, {
      default: V(() => [
        H(Jm, {
          modelValue: C(n).color,
          "onUpdate:modelValue": s[0] || (s[0] = (l) => C(n).color = l),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: r
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["editor", "tooltip", "disabled", "color"]));
  }
}), PO = /* @__PURE__ */ $({
  __name: "FullscreenActionButton",
  props: {
    ...se,
    useWindow: {
      type: Boolean,
      default: !1
    }
  },
  setup(t) {
    const e = t, { t: n } = Pt(), { state: r, toggleFullscreen: o } = Ma(), { isFullscreen: i, enter: s, exit: l } = mw();
    Ht(i, (u) => {
      !u && r.isFullscreen && e.useWindow && d();
    });
    const a = z(() => {
      const u = r.isFullscreen ? "editor.fullscreen.tooltip.exit" : "editor.fullscreen.tooltip.fullscreen";
      if (u)
        return C(n)(u);
    }), c = z(() => r.isFullscreen ? "fullscreenExit" : "fullscreen");
    function d(u = !1) {
      o(), r.isFullscreen ? (document.documentElement.classList.add("overflow-y-hidden"), u && s()) : (document.documentElement.classList.remove("overflow-y-hidden"), u && l());
    }
    return (u, f) => (M(), _(j, {
      editor: u.editor,
      icon: c.value,
      tooltip: a.value,
      action: () => d(t.useWindow)
    }, null, 8, ["editor", "icon", "tooltip", "action"]));
  }
}), BO = /* @__PURE__ */ $({
  __name: "HighlightActionButton",
  props: se,
  setup(t) {
    const e = t, { state: n } = Ma();
    function r(o) {
      typeof o == "string" && e.editor.chain().focus().setHighlight({ color: o }).run();
    }
    return Vn(() => {
      const { color: o } = e.editor.getAttributes("highlight");
      n.highlight = o;
    }), (o, i) => (M(), _(j, {
      editor: o.editor,
      icon: "highlight",
      tooltip: o.t("editor.highlight.tooltip"),
      disabled: !o.editor.can().setHighlight(),
      color: C(n).highlight,
      "is-active": () => o.editor.isActive("highlight") || !1
    }, {
      default: V(() => [
        H(Jm, {
          modelValue: C(n).highlight,
          "onUpdate:modelValue": i[0] || (i[0] = (s) => C(n).highlight = s),
          activator: "parent",
          "nudge-top": -4,
          "nudge-left": 8,
          onChange: r
        }, null, 8, ["modelValue"])
      ]),
      _: 1
    }, 8, ["editor", "tooltip", "disabled", "color", "is-active"]));
  }
}), $O = /* @__PURE__ */ $({
  __name: "HistoryActionButton",
  props: se,
  setup(t) {
    const e = t, n = ["undo", "redo"];
    function r(o) {
      o === "redo" && e.editor.chain().focus().redo().run(), o === "undo" && e.editor.chain().focus().undo().run();
    }
    return (o, i) => (M(), re(ye, null, He(n, (s) => H(j, {
      key: s,
      editor: o.editor,
      action: () => r(s),
      "is-active": () => !1,
      disabled: !o.editor.can()[s](),
      tooltip: o.t(`editor.${s}.tooltip`),
      icon: s
    }, null, 8, ["editor", "action", "disabled", "tooltip", "icon"])), 64));
  }
}), zO = /* @__PURE__ */ $({
  __name: "HorizontalRuleActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().setHorizontalRule().run(),
      "is-active": () => e.editor.isActive("horizontalRule") || !1,
      disabled: !e.editor.can().setHorizontalRule(),
      tooltip: e.t("editor.horizontalrule.tooltip"),
      icon: "horizontalRule"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), ac = /* @__PURE__ */ $({
  __name: "OriginalThemeProvider",
  setup(t) {
    const { global: { name: e } } = ua();
    return (n, r) => {
      const o = rf;
      return M(), _(o, { theme: C(e) }, {
        default: V(() => [
          Nt(n.$slots, "default")
        ]),
        _: 3
      }, 8, ["theme"]);
    };
  }
}), FO = /* @__PURE__ */ $({
  __name: "ImageActionButton",
  props: {
    ...se,
    upload: {
      type: Function,
      default: void 0
    },
    imageTabs: {
      type: Array,
      default: () => []
    },
    hiddenTabs: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const e = t, n = G({});
    function r() {
      var s, l;
      const o = (s = e.editor) == null ? void 0 : s.view.state.selection, i = ((l = o == null ? void 0 : o.node) == null ? void 0 : l.attrs) ?? {};
      i != null && i.src && (n.value.src = i.src), i != null && i.alt && (n.value.alt = i.alt), i != null && i.title && (n.value.title = i.title), i != null && i.width && (n.value.width = i.width), i != null && i.height && (n.value.height = i.height), i != null && i.display && (n.value.display = i.display), n.value.lockAspectRatio = i.lockAspectRatio ?? !0;
    }
    return (o, i) => (M(), _(j, {
      editor: o.editor,
      action: r,
      "is-active": () => o.editor.isActive("image") || !1,
      disabled: !o.editor.can().setImage({}),
      tooltip: o.t("editor.image.tooltip"),
      icon: "image"
    }, {
      default: V(() => [
        H(ac, null, {
          default: V(() => [
            Nt(o.$slots, "dialog", {
              props: { editor: o.editor, value: n.value, imageTabs: t.imageTabs, hiddenTabs: t.hiddenTabs, upload: t.upload }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
}), jO = /* @__PURE__ */ $({
  __name: "IndentActionButton",
  props: se,
  setup(t) {
    const e = t, n = ["outdent", "indent"], r = {
      indent: "sinkListItem",
      outdent: "liftListItem"
    };
    function o(i) {
      i === "indent" && e.editor.chain().focus().sinkListItem("listItem").run(), i === "outdent" && e.editor.chain().focus().liftListItem("listItem").run();
    }
    return (i, s) => (M(), re(ye, null, He(n, (l) => H(j, {
      key: l,
      editor: i.editor,
      action: () => o(l),
      "is-active": () => !1,
      disabled: !i.editor.can()[r[l]]("listItem"),
      tooltip: i.t(`editor.${l}.tooltip`),
      icon: l
    }, null, 8, ["editor", "action", "disabled", "tooltip", "icon"])), 64));
  }
}), WO = /* @__PURE__ */ $({
  __name: "ItalicActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleItalic().run(),
      "is-active": () => e.editor.isActive("italic") || !1,
      disabled: !e.editor.can().toggleItalic(),
      tooltip: e.t("editor.italic.tooltip"),
      icon: "italic"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), UO = /* @__PURE__ */ $({
  __name: "LinkActionButton",
  props: se,
  setup(t) {
    const e = t, n = G({
      href: void 0,
      target: void 0
    });
    function r() {
      const { href: o, target: i } = e.editor.getAttributes("link");
      n.value = {
        href: o,
        target: i
      };
    }
    return (o, i) => (M(), _(j, {
      editor: o.editor,
      icon: "link",
      tooltip: o.t("editor.link.tooltip"),
      disabled: !o.editor.can().setLink({ href: "" }),
      "is-active": () => o.editor.isActive("link") || !1,
      action: r
    }, {
      default: V(() => [
        H(ac, null, {
          default: V(() => [
            Nt(o.$slots, "dialog", {
              props: { editor: o.editor, value: n.value.href, ...n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "tooltip", "disabled", "is-active"]));
  }
}), KO = /* @__PURE__ */ $({
  __name: "OrderedListActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleOrderedList().run(),
      "is-active": () => e.editor.isActive("orderedList") || !1,
      disabled: !e.editor.can().toggleOrderedList(),
      tooltip: e.t("editor.orderedlist.tooltip"),
      icon: "orderedList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), qO = /* @__PURE__ */ $({
  __name: "StrikeActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleStrike().run(),
      "is-active": () => e.editor.isActive("strike") || !1,
      disabled: !e.editor.can().toggleStrike(),
      tooltip: e.t("editor.strike.tooltip"),
      icon: "strike"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), JO = /* @__PURE__ */ $({
  __name: "SubscriptActionButton",
  props: {
    ...se,
    extension: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    const e = t, n = z(() => {
      const i = [], s = e.extension.options.subscript, l = e.extension.options.superscript;
      return s !== !1 && i.push("subscript"), l !== !1 && i.push("superscript"), i;
    }), r = {
      subscript: "toggleSubscript",
      superscript: "toggleSuperscript"
    };
    function o(i) {
      i === "subscript" && e.editor.chain().focus().toggleSubscript().run(), i === "superscript" && e.editor.chain().focus().toggleSuperscript().run();
    }
    return (i, s) => (M(!0), re(ye, null, He(n.value, (l) => (M(), _(j, {
      key: l,
      editor: i.editor,
      action: () => o(l),
      "is-active": () => i.editor.isActive(l) || !1,
      disabled: !i.editor.can()[r[l]](),
      tooltip: i.t(`editor.${l}.tooltip`),
      icon: l
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip", "icon"]))), 128));
  }
}), GO = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i, ZO = /CrOS/, XO = /android|ipad|playbook|silk/i;
function qu(t = {}) {
  let e = t.ua || typeof navigator < "u" && navigator.userAgent;
  return e && typeof e == "object" && e.headers && typeof e.headers["user-agent"] == "string" && (e = e.headers["user-agent"]), typeof e != "string" ? !1 : !!(GO.test(e) && !ZO.test(e) || t.tablet && XO.test(e) || t.tablet && t.featureDetect && navigator && navigator.maxTouchPoints > 1 && e.includes("Macintosh") && e.includes("Safari"));
}
const YO = ["onMouseover", "onMousedown"], QO = /* @__PURE__ */ $({
  __name: "CreateTablePopover",
  emits: ["create-table"],
  setup(t, { emit: e }) {
    const n = e, { t: r } = Pt(), o = G(!1), i = G(!0), s = Yn({
      rows: qu() ? vo : bo,
      cols: qu() ? vo : bo
    }), l = Yn({
      rows: wo,
      cols: wo
    });
    function a(f, p) {
      const h = {
        boxSizing: "border-box",
        width: "16px",
        height: "16px",
        padding: "4px",
        border: "1px solid #dcdfe6",
        borderRadius: "2px"
      };
      return p <= l.cols && f <= l.rows && (h.backgroundColor = "#ecf5ff", h.borderColor = "var(--vp-theme-primary)"), h;
    }
    function c(f, p) {
      f === s.rows && (s.rows = Math.min(f + 1, vo)), p === s.cols && (s.cols = Math.min(p + 1, vo)), l.rows = f, l.cols = p;
    }
    function d(f, p) {
      n("create-table", { rows: f, cols: p, withHeaderRow: C(i) }), u();
    }
    function u() {
      o.value = !1, i.value = !0, s.rows = bo, s.cols = bo, l.rows = wo, l.cols = wo;
    }
    return (f, p) => {
      const h = la, m = no, g = gg, y = dr, b = Gi;
      return M(), _(b, {
        modelValue: o.value,
        "onUpdate:modelValue": p[1] || (p[1] = (v) => o.value = v),
        location: "end bottom",
        "open-on-click": "",
        "open-on-hover": "",
        "close-on-content-click": !1,
        activator: "parent"
      }, {
        default: V(() => [
          H(y, { density: "compact" }, {
            default: V(() => [
              H(m, { class: "pa-2 pb-0" }, {
                default: V(() => [
                  H(h, {
                    modelValue: i.value,
                    "onUpdate:modelValue": p[0] || (p[0] = (v) => i.value = v),
                    density: "compact",
                    "hide-details": "",
                    label: C(r)("editor.table.menu.insert_table.with_header_row")
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              H(m, { class: "d-flex flex-column flex-wrap justify-space-between pa-2" }, {
                default: V(() => [
                  (M(!0), re(ye, null, He(s.rows, (v) => (M(), re("div", {
                    key: "r" + v,
                    class: "d-flex"
                  }, [
                    (M(!0), re(ye, null, He(s.cols, (x) => (M(), re("div", {
                      key: "c" + x,
                      class: "pa-1",
                      onMouseover: (k) => c(v, x),
                      onMousedown: (k) => d(v, x)
                    }, [
                      _t("div", {
                        style: Un(a(v, x))
                      }, null, 4)
                    ], 40, YO))), 128))
                  ]))), 128))
                ]),
                _: 1
              }),
              H(g, { class: "pt-0 pb-2" }, {
                default: V(() => [
                  Rt(Ae(l.rows) + " x " + Ae(l.cols), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), eL = /* @__PURE__ */ $({
  __name: "TableMenu",
  props: {
    editor: {},
    activator: { default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Pt(), r = G(!1), o = z(() => [
      {
        type: "item",
        key: "insert-table",
        title: C(n)("editor.table.menu.insert_table"),
        icon: ae("tablePlus"),
        disabled: !e.editor.can().insertTable() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "add-column-before",
        title: C(n)("editor.table.menu.add_column_before"),
        icon: ae("tableColumnPlusBefore"),
        disabled: !e.editor.can().addColumnBefore() || !1
      },
      {
        type: "item",
        key: "add-column-after",
        title: C(n)("editor.table.menu.add_column_after"),
        icon: ae("tableColumnPlusAfter"),
        disabled: !e.editor.can().addColumnAfter() || !1
      },
      {
        type: "item",
        key: "delete-column",
        title: C(n)("editor.table.menu.delete_column"),
        icon: ae("tableColumnRemove"),
        disabled: !e.editor.can().deleteColumn() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "add-row-before",
        title: C(n)("editor.table.menu.add_row_before"),
        icon: ae("tableRowPlusBefore"),
        disabled: !e.editor.can().addRowBefore() || !1
      },
      {
        type: "item",
        key: "add-row-after",
        title: C(n)("editor.table.menu.add_row_after"),
        icon: ae("tableRowPlusAfter"),
        disabled: !e.editor.can().addRowAfter() || !1
      },
      {
        type: "item",
        key: "delete-row",
        title: C(n)("editor.table.menu.delete_row"),
        icon: ae("tableRowRemove"),
        disabled: !e.editor.can().deleteRow() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "merge-or-split-cells",
        title: C(n)("editor.table.menu.merge_or_split_cells"),
        icon: ae("tableMergeCells"),
        disabled: !e.editor.can().mergeOrSplit() || !1
      },
      {
        type: "divider"
      },
      {
        type: "item",
        key: "delete-table",
        title: C(n)("editor.table.menu.delete_table"),
        icon: ae("tableRemove"),
        disabled: !e.editor.can().deleteTable() || !1
      }
    ]);
    function i(l, a) {
      var u;
      if (!l) return;
      const { editor: c } = e, d = {
        "insert-table": () => c.chain().focus().insertTable({ ...a }).run(),
        "add-column-before": () => c.chain().focus().addColumnBefore().run(),
        "add-column-after": () => c.chain().focus().addColumnAfter().run(),
        "delete-column": () => c.chain().focus().deleteColumn().run(),
        "add-row-before": () => c.chain().focus().addRowBefore().run(),
        "add-row-after": () => c.chain().focus().addRowAfter().run(),
        "delete-row": () => c.chain().focus().deleteRow().run(),
        "merge-or-split-cells": () => c.chain().focus().mergeOrSplit().run(),
        "delete-table": () => c.chain().focus().deleteTable().run()
      };
      (u = d[l]) == null || u.call(d);
    }
    function s(l) {
      i("insert-table", l), r.value = !1;
    }
    return (l, a) => {
      const c = Ln, d = of, u = sf, f = to, p = sa, h = Gi;
      return M(), _(h, {
        modelValue: r.value,
        "onUpdate:modelValue": a[0] || (a[0] = (m) => r.value = m),
        activator: "parent"
      }, {
        default: V(() => [
          H(p, { density: "compact" }, {
            default: V(() => [
              (M(!0), re(ye, null, He(o.value, (m, g) => (M(), re(ye, null, [
                m.key === "insert-table" ? (M(), _(u, {
                  key: g,
                  disabled: m.disabled
                }, {
                  prepend: V(() => [
                    H(c, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: V(() => [
                    H(d, null, {
                      default: V(() => [
                        Rt(Ae(m.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    m.key === "insert-table" ? (M(), _(QO, {
                      key: g,
                      onCreateTable: s
                    })) : Qe("", !0)
                  ]),
                  _: 2
                }, 1032, ["disabled"])) : m.type === "item" ? (M(), _(u, {
                  key: "item-" + g,
                  disabled: m.disabled,
                  onClick: (y) => i(m.key)
                }, {
                  prepend: V(() => [
                    H(c, {
                      icon: m.icon
                    }, null, 8, ["icon"])
                  ]),
                  default: V(() => [
                    H(d, null, {
                      default: V(() => [
                        Rt(Ae(m.title), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["disabled", "onClick"])) : (M(), _(f, {
                  key: "divider-" + g
                }))
              ], 64))), 256))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), tL = /* @__PURE__ */ $({
  __name: "TableActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      "is-active": () => e.editor.isActive("table") || !1,
      disabled: !e.editor.can().insertTable(),
      tooltip: e.t("editor.table.tooltip"),
      icon: "table"
    }, {
      default: V(() => [
        H(eL, {
          editor: e.editor,
          activator: "parent"
        }, null, 8, ["editor"])
      ]),
      _: 1
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
}), nL = /* @__PURE__ */ $({
  __name: "TaskListActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleTaskList().run(),
      "is-active": () => e.editor.isActive("taskList") || !1,
      disabled: !e.editor.can().toggleTaskList(),
      tooltip: e.t("editor.tasklist.tooltip"),
      icon: "taskList"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), rL = /* @__PURE__ */ $({
  __name: "UnderlineActionButton",
  props: se,
  setup(t) {
    return (e, n) => (M(), _(j, {
      editor: e.editor,
      action: () => e.editor.chain().focus().toggleUnderline().run(),
      "is-active": () => e.editor.isActive("underline") || !1,
      disabled: !e.editor.can().toggleUnderline(),
      tooltip: e.t("editor.underline.tooltip"),
      icon: "underline"
    }, null, 8, ["editor", "action", "is-active", "disabled", "tooltip"]));
  }
}), oL = /* @__PURE__ */ $({
  __name: "VideoActionButton",
  props: se,
  setup(t) {
    const e = t, n = G(void 0);
    function r() {
      const { src: o } = e.editor.getAttributes("video");
      n.value = o;
    }
    return (o, i) => (M(), _(j, {
      editor: o.editor,
      action: r,
      "is-active": () => o.editor.isActive("video") || !1,
      disabled: !o.editor.can().setVideo({}),
      tooltip: o.t("editor.video.tooltip"),
      icon: "video"
    }, {
      default: V(() => [
        H(ac, null, {
          default: V(() => [
            Nt(o.$slots, "dialog", {
              props: { editor: o.editor, value: n.value }
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["editor", "is-active", "disabled", "tooltip"]));
  }
}), iL = (t) => {
  const e = ["float-left", "float-none", "float-right"], n = [
    "formatFloatLeft",
    "formatFloatNone",
    "formatFloatRight"
  ], r = ["left", "inline", "right"];
  return e.map((o, i) => ({
    type: o,
    component: j,
    componentProps: {
      tooltip: `editor.image.${o.replace("-", ".")}.tooltip`,
      icon: n[i],
      action: () => t.chain().focus().updateImage({ display: r[i] }).run(),
      isActive: () => t.isActive("image", { display: r[i] })
    }
  }));
}, sL = (t) => {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((r, o) => ({
    type: `image-${r}`,
    component: j,
    componentProps: {
      tooltip: `editor.${r.replace("-", ".")}.tooltip`,
      icon: n[o],
      action: () => t.chain().focus().updateImage({ width: Yo[r], height: null }).run(),
      isActive: () => t.isActive("image", { width: Yo[r] })
    }
  }));
}, lL = (t) => {
  const e = ["size-small", "size-medium", "size-large"], n = ["sizeS", "sizeM", "sizeL"];
  return e.map((r, o) => ({
    type: `video-${r}`,
    component: j,
    componentProps: {
      tooltip: `editor.${r.replace("-", ".")}.tooltip`,
      icon: n[o],
      action: () => t.chain().focus().updateVideo({ width: Qo[r] }).run(),
      isActive: () => t.isActive("video", { width: Qo[r] })
    }
  }));
}, aL = (t) => [
  {
    type: "table-add-column-before",
    component: j,
    componentProps: {
      tooltip: "editor.table.menu.add_column_before",
      icon: "tableColumnPlusBefore",
      action: () => t.chain().focus().addColumnBefore().run(),
      disabled: !t.can().addColumnBefore()
    }
  },
  {
    type: "table-add-column-after",
    component: j,
    componentProps: {
      tooltip: "editor.table.menu.add_column_after",
      icon: "tableColumnPlusAfter",
      action: () => t.chain().focus().addColumnAfter().run(),
      disabled: !t.can().addColumnAfter()
    }
  },
  {
    type: "table-delete-column",
    component: j,
    componentProps: {
      tooltip: "editor.table.menu.delete_column",
      icon: "tableColumnRemove",
      action: () => t.chain().focus().deleteColumn().run(),
      disabled: !t.can().deleteColumn()
    }
  },
  {
    type: "table-add-row-before",
    component: j,
    componentProps: {
      tooltip: "editor.table.menu.add_row_before",
      icon: "tableRowPlusBefore",
      action: () => t.chain().focus().addRowBefore().run(),
      disabled: !t.can().addRowBefore()
    }
  },
  {
    type: "table-add-row-after",
    component: j,
    componentProps: {
      tooltip: "editor.table.menu.add_row_after",
      icon: "tableRowPlusAfter",
      action: () => t.chain().focus().addRowAfter().run(),
      disabled: !t.can().addRowAfter()
    }
  },
  {
    type: "table-delete-row",
    component: j,
    componentProps: {
      tooltip: "editor.table.menu.delete_row",
      icon: "tableRowRemove",
      action: () => t.chain().focus().deleteRow().run(),
      disabled: !t.can().deleteRow()
    }
  },
  {
    type: "table-merge-or-split-cells",
    component: j,
    componentProps: {
      tooltip: "editor.table.menu.merge_or_split_cells",
      icon: "tableMergeCells",
      action: () => t.chain().focus().mergeOrSplit().run(),
      disabled: !t.can().mergeOrSplit()
    }
  },
  {
    type: "table-delete-table",
    component: j,
    componentProps: {
      tooltip: "editor.table.menu.delete_table",
      icon: "tableRemove",
      action: () => t.chain().focus().deleteTable().run(),
      disabled: !t.can().deleteTable()
    }
  }
], cL = (t) => [
  ...iL(t),
  ...sL(t),
  ...lL(t),
  ...aL(t),
  {
    type: "image-aspect-ratio",
    component: j,
    componentProps: {
      tooltip: "editor.image.dialog.form.aspectRatio",
      icon: "aspectRatio",
      action: () => {
        const e = t.isActive("image", { lockAspectRatio: !0 });
        t.chain().focus().updateImage({
          lockAspectRatio: !e,
          height: e ? void 0 : null
        }).run();
      },
      isActive: () => t.isActive("image", { lockAspectRatio: !0 })
    }
  },
  {
    type: "unlink",
    component: j,
    componentProps: {
      tooltip: "editor.link.unlink.tooltip",
      icon: "linkVariantOff",
      action: () => {
        const { href: e } = t.getAttributes("link");
        t.chain().extendMarkRange("link", { href: e }).unsetLink().focus().run();
      }
    }
  },
  {
    type: "link-open",
    component: j,
    componentProps: {
      tooltip: "editor.link.open",
      icon: "openInNew",
      action: () => {
        const { href: e } = t.getAttributes("link");
        Tr(e) && e && window.open(e, "_blank");
      }
    }
  },
  {
    type: "remove",
    component: j,
    componentProps: {
      tooltip: "editor.remove",
      icon: "delete",
      action: () => {
        const { state: e, dispatch: n } = t.view;
        ch(e, n);
      }
    }
  }
], dL = (t, e, { editor: n, extension: r, t: o }) => {
  const { extensions: i = [] } = n.extensionManager, s = {};
  for (const l of Object.keys(t)) {
    const a = t[l];
    if (!a) continue;
    const c = [];
    for (const f of a) {
      if (f === "divider") {
        const m = c[c.length - 1];
        if ((m == null ? void 0 : m.type) === "divider") continue;
        c.push({
          type: "divider",
          component: void 0,
          componentProps: {}
        });
        continue;
      }
      const p = e.find((m) => m.type === f);
      if (p) {
        c.push({
          ...p,
          componentProps: {
            ...p.componentProps,
            tooltip: p.componentProps.tooltip ? o(p.componentProps.tooltip) : void 0
          },
          componentSlots: p.componentSlots
        });
        continue;
      }
      const h = i.find((m) => m.name === f);
      if (h) {
        const { button: m } = h.options, g = m({ editor: n, extension: h, t: o });
        c.push({
          type: f,
          component: g.component,
          componentProps: g.componentProps,
          componentSlots: g.componentSlots
        });
        continue;
      }
    }
    const d = c[c.length - 1], u = c[0];
    (d == null ? void 0 : d.type) === "divider" && c.pop(), (u == null ? void 0 : u.type) === "divider" && c.shift(), s[l] = c;
  }
  return s;
}, UV = /* @__PURE__ */ W.create({
  name: "base-kit",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      bubble: {
        list: Ng,
        defaultBubbleList: cL,
        button: ({ editor: e, extension: n, t: r }) => {
          var l;
          const { list: o = {}, defaultBubbleList: i } = ((l = n.options) == null ? void 0 : l.bubble) ?? {}, s = (i == null ? void 0 : i(e)) ?? [];
          return dL(o, s, { editor: e, extension: n, t: r });
        }
      }
    };
  },
  addExtensions() {
    const t = [];
    return this.options.placeholder !== !1 && t.push(
      nE.configure({
        placeholder: "",
        ...this.options.placeholder
      })
    ), this.options.focus !== !1 && t.push(
      iE.configure({
        className: "focus",
        ...this.options.focus
      })
    ), this.options.document !== !1 && t.push(oE.configure()), this.options.text !== !1 && t.push(gE.configure()), this.options.gapcursor !== !1 && t.push(tE.configure()), this.options.dropcursor !== !1 && t.push(Q2.configure(this.options.dropcursor)), this.options.characterCount !== !1 && t.push(Y2.configure(this.options.characterCount)), this.options.paragraph !== !1 && t.push(mE.configure(this.options.paragraph)), this.options.hardBreak !== !1 && t.push(sE.configure(this.options.hardBreak)), this.options.listItem !== !1 && t.push(_m.configure(this.options.listItem)), this.options.textStyle !== !1 && t.push(Wm.configure(this.options.textStyle)), t;
  }
});
var ki = (t, e) => {
  if (t === "slot")
    return 0;
  if (t instanceof Function)
    return t(e);
  const { children: n, ...r } = e ?? {};
  if (t === "svg")
    throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
  return [t, r, n];
}, uL = /^\s*>\s$/, fL = he.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [{ tag: "blockquote" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ ki("blockquote", { ...J(this.options.HTMLAttributes, t), children: /* @__PURE__ */ ki("slot", {}) });
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: t }) => t.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: t }) => t.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: t }) => t.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      ir({
        find: uL,
        type: this.type
      })
    ];
  }
});
const KV = /* @__PURE__ */ fL.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "blockquote"
      },
      button: ({ editor: e, t: n }) => ({
        component: VO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
});
var pL = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, hL = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, mL = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, gL = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, yL = at.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (t) => t.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (t) => /^(bold(er)?|[5-9]\d{2,})$/.test(t) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return /* @__PURE__ */ ki("strong", { ...J(this.options.HTMLAttributes, t), children: /* @__PURE__ */ ki("slot", {}) });
  },
  addCommands() {
    return {
      setBold: () => ({ commands: t }) => t.setMark(this.name),
      toggleBold: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetBold: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      En({
        find: pL,
        type: this.type
      }),
      En({
        find: mL,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: hL,
        type: this.type
      }),
      cn({
        find: gL,
        type: this.type
      })
    ];
  }
});
const qV = /* @__PURE__ */ yL.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {},
      button: ({ editor: e, t: n }) => ({
        component: HO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
}), JV = /* @__PURE__ */ Nm.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      itemTypeName: "listItem",
      keepMarks: !1,
      HTMLAttributes: {},
      keepAttributes: !1,
      button: ({ editor: e, t: n }) => ({
        component: RO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
}), GV = /* @__PURE__ */ he.create({
  name: "clear",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      button: ({ editor: e, t: n }) => ({
        component: NO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
});
var bL = /(^|[^`])`([^`]+)`(?!`)/, vL = /(^|[^`])`([^`]+)`(?!`)/g, wL = at.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [{ tag: "code" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["code", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: t }) => t.setMark(this.name),
      toggleCode: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetCode: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      En({
        find: bL,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: vL,
        type: this.type
      })
    ];
  }
});
const ZV = /* @__PURE__ */ wL.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {},
      button: ({ editor: e, t: n }) => ({
        component: _O,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
});
var kL = /^```([a-z]+)?[\s\n]$/, SL = /^~~~([a-z]+)?[\s\n]$/, xL = he.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (t) => {
          var e;
          const { languageClassPrefix: n } = this.options, i = [...((e = t.firstElementChild) == null ? void 0 : e.classList) || []].filter((s) => s.startsWith(n)).map((s) => s.replace(n, ""))[0];
          return i || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [
      "pre",
      J(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: t.attrs.language ? this.options.languageClassPrefix + t.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (t) => ({ commands: e }) => e.setNode(this.name, t),
      toggleCodeBlock: (t) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", t)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: t, $anchor: e } = this.editor.state.selection, n = e.pos === 1;
        return !t || e.parent.type.name !== this.name ? !1 : n || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: t }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = t, { selection: n } = e, { $from: r, empty: o } = n;
        if (!o || r.parent.type !== this.type)
          return !1;
        const i = r.parentOffset === r.parent.nodeSize - 2, s = r.parent.textContent.endsWith(`

`);
        return !i || !s ? !1 : t.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: t }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = t, { selection: n, doc: r } = e, { $from: o, empty: i } = n;
        if (!i || o.parent.type !== this.type || !(o.parentOffset === o.parent.nodeSize - 2))
          return !1;
        const l = o.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? t.commands.command(({ tr: c }) => (c.setSelection(B.near(r.resolve(l))), !0)) : t.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Pl({
        find: kL,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      }),
      Pl({
        find: SL,
        type: this.type,
        getAttributes: (t) => ({
          language: t[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new ee({
        key: new ue("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (t, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const n = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), o = r ? JSON.parse(r) : void 0, i = o == null ? void 0 : o.mode;
            if (!n || !i)
              return !1;
            const { tr: s, schema: l } = t.state, a = l.text(n.replace(/\r\n?/g, `
`));
            return s.replaceSelectionWith(this.type.create({ language: i }, a)), s.selection.$from.parent.type !== this.type && s.setSelection(P.near(s.doc.resolve(Math.max(0, s.selection.from - 2)))), s.setMeta("paste", !0), t.dispatch(s), !0;
          }
        }
      })
    ];
  }
});
const XV = /* @__PURE__ */ xL.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      defaultLanguage: null,
      exitOnArrowDown: !0,
      HTMLAttributes: {},
      button: ({ editor: e, t: n }) => ({
        component: IO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
}), YV = /* @__PURE__ */ Um.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["textStyle"],
      button: ({ editor: e, t: n }) => ({
        component: DO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
}), CL = {
  ...Yv(qm, ["action", "isActive"]),
  maxHeight: {
    type: [String, Number],
    default: void 0
  },
  items: {
    type: Array,
    default: () => []
  }
}, go = () => ({
  ...se,
  extension: {
    type: Object,
    required: !0
  }
}), yo = /* @__PURE__ */ $({
  __name: "index",
  props: CL,
  setup(t) {
    const e = t, n = G(!1), r = z(() => {
      const o = e.items.find((s) => s.isActive());
      return o && !o.default ? {
        ...o,
        icon: o.icon ? o.icon : e.icon
      } : {
        title: e.tooltip,
        icon: e.icon,
        isActive: () => !1
      };
    });
    return (o, i) => {
      const s = Ln, l = of, a = sf, c = to, d = sa, u = Gi;
      return M(), _(C(j), {
        editor: o.editor,
        icon: r.value.icon,
        tooltip: r.value.title,
        disabled: o.disabled,
        color: o.color,
        "is-active": r.value.isActive
      }, {
        default: V(() => [
          H(u, {
            modelValue: n.value,
            "onUpdate:modelValue": i[0] || (i[0] = (f) => n.value = f),
            activator: "parent"
          }, {
            default: V(() => [
              H(d, {
                density: "compact",
                "max-height": o.maxHeight
              }, {
                default: V(() => [
                  (M(!0), re(ye, null, He(o.items, (f, p) => (M(), re(ye, { key: p }, [
                    H(a, {
                      active: f.isActive(),
                      disabled: f.disabled,
                      onClick: f.action
                    }, {
                      prepend: V(() => [
                        f.icon ? (M(), _(s, {
                          key: 0,
                          icon: C(ae)(f.icon)
                        }, null, 8, ["icon"])) : Qe("", !0)
                      ]),
                      default: V(() => [
                        H(l, {
                          style: Un(f.style)
                        }, {
                          default: V(() => [
                            Rt(Ae(f.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["style"])
                      ]),
                      _: 2
                    }, 1032, ["active", "disabled", "onClick"]),
                    f.divider ? (M(), _(c, { key: 0 })) : Qe("", !0)
                  ], 64))), 128))
                ]),
                _: 1
              }, 8, ["max-height"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["editor", "icon", "tooltip", "disabled", "color", "is-active"]);
    };
  }
}), TL = /* @__PURE__ */ $({
  __name: "FontFamilyActionMenuButton",
  props: go(),
  setup(t) {
    const e = t, n = z(() => {
      var o;
      return (((o = e.extension.options) == null ? void 0 : o.fontFamilies) || []).map((i) => ({
        title: e.t(i.title),
        isActive: () => {
          const { fontFamily: s } = e.editor.getAttributes("textStyle");
          return i.value === ul && s === void 0 ? !0 : e.editor.isActive({ fontFamily: i.value }) || !1;
        },
        action: () => {
          if (i.value === ul) {
            e.editor.chain().focus().unsetFontFamily().run();
            return;
          }
          e.editor.chain().focus().setFontFamily(i.value).run();
        },
        style: { fontFamily: i.value },
        divider: i.divider ?? !1,
        default: i.default ?? !1
      }));
    });
    return (r, o) => (M(), _(yo, {
      editor: r.editor,
      items: n.value,
      "max-height": 280,
      disabled: !e.editor.can().setFontFamily(""),
      tooltip: r.t("editor.fontFamily.tooltip"),
      icon: "fontFamily"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), AL = /* @__PURE__ */ $({
  __name: "FontSizeActionMenuButton",
  props: go(),
  setup(t) {
    const e = t, n = z(() => {
      var o;
      const r = ((o = e.extension.options) == null ? void 0 : o.fontSizes) || [];
      return [In, ...r].map((i) => ({
        title: i === In ? e.t("editor.default") : String(i),
        isActive: () => {
          const { fontSize: s } = e.editor.getAttributes("textStyle");
          return i === In && s === void 0 ? !0 : e.editor.isActive({ fontSize: String(i) }) || !1;
        },
        action: () => {
          if (i === In) {
            e.editor.chain().focus().unsetFontSize().run();
            return;
          }
          e.editor.chain().focus().setFontSize(String(i)).run();
        },
        divider: i === In,
        default: i === In
      }));
    });
    return (r, o) => (M(), _(yo, {
      editor: r.editor,
      items: n.value,
      "max-height": 280,
      disabled: !e.editor.can().setFontSize(""),
      tooltip: r.t("editor.fontSize.tooltip"),
      icon: "fontSize"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), ML = /* @__PURE__ */ $({
  __name: "HeadingActionMenuButton",
  props: go(),
  setup(t) {
    const e = t, n = z(() => {
      var l;
      const { extensions: r = [] } = e.editor.extensionManager ?? [], o = ((l = e.extension.options) == null ? void 0 : l.levels) || [], i = r.find((a) => a.name === "base-kit"), s = o.map((a) => ({
        action: () => e.editor.chain().focus().toggleHeading({ level: a }).run(),
        isActive: () => e.editor.isActive("heading", { level: a }) || !1,
        disabled: !e.editor.can().toggleHeading({ level: a }),
        icon: `h${a}`,
        title: e.t(`editor.heading.h${a}.tooltip`)
      }));
      return i && i.options.paragraph !== !1 && s.unshift({
        action: () => e.editor.chain().focus().setParagraph().run(),
        isActive: () => e.editor.isActive("paragraph") || !1,
        disabled: !e.editor.can().setParagraph(),
        icon: "p",
        title: e.t("editor.paragraph.tooltip"),
        divider: !0
      }), s;
    });
    return (r, o) => (M(), _(yo, {
      editor: r.editor,
      items: n.value,
      "max-height": 280,
      disabled: n.value.filter((i) => i.disabled).length === n.value.length,
      tooltip: r.t("editor.heading.tooltip"),
      icon: "heading"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), EL = /* @__PURE__ */ $({
  __name: "MarkdownThemeActionMenuButton",
  props: go(),
  setup(t) {
    const e = t, { state: n } = Zi(), r = z(() => [...mf, ...e.extension.options.markdownThemes].map((i) => ({
      title: e.t(i.title),
      isActive: () => n.defaultMarkdownTheme === i.value,
      action: () => {
        n.defaultMarkdownTheme = i.value;
      },
      divider: i.divider ?? !1,
      default: i.default ?? !1
    })));
    return (o, i) => (M(), _(yo, {
      editor: o.editor,
      items: r.value,
      "max-height": 280,
      disabled: !1,
      tooltip: o.t("editor.markdownTheme.tooltip"),
      icon: "markdownTheme"
    }, null, 8, ["editor", "items", "tooltip"]));
  }
}), OL = /* @__PURE__ */ $({
  __name: "TextAlignActionMenuButton",
  props: go(),
  setup(t) {
    const e = t, n = z(() => {
      var o;
      return (((o = e.extension.options) == null ? void 0 : o.alignments) || []).map((i) => ({
        title: e.t(`editor.textalign.${i}.tooltip`),
        icon: i,
        isActive: () => e.editor.isActive({ textAlign: i }) || !1,
        action: () => e.editor.chain().focus().setTextAlign(i).run(),
        disabled: !e.editor.can().setTextAlign(i)
      }));
    });
    return (r, o) => (M(), _(yo, {
      editor: r.editor,
      items: n.value,
      "max-height": 280,
      disabled: n.value.filter((i) => i.disabled).length === n.value.length,
      tooltip: r.t("editor.textalign.tooltip"),
      icon: "center"
    }, null, 8, ["editor", "items", "disabled", "tooltip"]));
  }
}), QV = /* @__PURE__ */ Km.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["textStyle"],
      divider: !0,
      spacer: !1,
      fontFamilies: Hg,
      button: ({ editor: e, extension: n, t: r }) => ({
        component: TL,
        componentProps: {
          editor: e,
          extension: n,
          t: r
        }
      })
    };
  }
}), eH = /* @__PURE__ */ W.create({
  name: "fontSize",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["textStyle"],
      fontSizes: [...Rg],
      button: ({ editor: e, extension: n, t: r }) => ({
        component: AL,
        componentProps: {
          editor: e,
          extension: n,
          t: r
        }
      })
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (t) => {
              const n = (t.style.fontSize || "").match(/^(\d+(\.\d+)?)(px|em|rem|%)?$/);
              return n ? n[0] : "";
            },
            renderHTML: (t) => t.fontSize ? {
              style: `font-size: ${Ar(t.fontSize)}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (t) => ({ chain: e }) => e().setMark("textStyle", { fontSize: t }).run(),
      unsetFontSize: () => ({ chain: t }) => t().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run()
    };
  }
}), tH = /* @__PURE__ */ W.create({
  name: "fullscreen",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      useWindow: !1,
      button: ({ editor: e, extension: n, t: r }) => ({
        component: PO,
        componentProps: {
          editor: e,
          t: r,
          useWindow: n.options.useWindow ?? !1
        }
      })
    };
  }
});
var LL = he.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((t) => ({
      tag: `h${t}`,
      attrs: { level: t }
    }));
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(t.attrs.level) ? t.attrs.level : this.options.levels[0]}`, J(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.setNode(this.name, t) : !1,
      toggleHeading: (t) => ({ commands: e }) => this.options.levels.includes(t.level) ? e.toggleNode(this.name, "paragraph", t) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce(
      (t, e) => ({
        ...t,
        [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
      }),
      {}
    );
  },
  addInputRules() {
    return this.options.levels.map((t) => Pl({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${t}})\\s$`),
      type: this.type,
      getAttributes: {
        level: t
      }
    }));
  }
});
const nH = /* @__PURE__ */ LL.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {},
      button: ({ editor: e, extension: n, t: r }) => ({
        component: ML,
        componentProps: {
          editor: e,
          extension: n,
          t: r
        }
      })
    };
  }
});
var VL = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, HL = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, RL = at.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (t) => t.getAttribute("data-color") || t.style.backgroundColor,
        renderHTML: (t) => t.color ? {
          "data-color": t.color,
          style: `background-color: ${t.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["mark", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setHighlight: (t) => ({ commands: e }) => e.setMark(this.name, t),
      toggleHighlight: (t) => ({ commands: e }) => e.toggleMark(this.name, t),
      unsetHighlight: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      En({
        find: VL,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: HL,
        type: this.type
      })
    ];
  }
});
const rH = /* @__PURE__ */ RL.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      multicolor: !0,
      HTMLAttributes: {},
      button: ({ editor: e, t: n }) => ({
        component: BO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
}), oH = /* @__PURE__ */ rE.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      depth: 10,
      newGroupDelay: 1,
      button: ({ editor: e, t: n }) => ({
        component: $O,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
});
var NL = he.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["hr", J(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: t, state: e }) => {
        if (!wT(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: n } = e, { $to: r } = n, o = t();
        return Oh(n) ? o.insertContentAt(r.pos, {
          type: this.name
        }) : o.insertContent({ type: this.name }), o.command(({ tr: i, dispatch: s }) => {
          var l;
          if (s) {
            const { $to: a } = i.selection, c = a.end();
            if (a.nodeAfter)
              a.nodeAfter.isTextblock ? i.setSelection(P.create(i.doc, a.pos + 1)) : a.nodeAfter.isBlock ? i.setSelection(I.create(i.doc, a.pos)) : i.setSelection(P.create(i.doc, a.pos));
            else {
              const d = (l = a.parent.type.contentMatch.defaultType) == null ? void 0 : l.create();
              d && (i.insert(c, d), i.setSelection(P.create(i.doc, c + 1)));
            }
            i.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      qh({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
});
const iH = /* @__PURE__ */ NL.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {},
      button: ({ editor: e, t: n }) => ({
        component: zO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
});
var _L = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, IL = he.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      },
      width: {
        default: null
      },
      height: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["img", J(this.options.HTMLAttributes, t)];
  },
  addCommands() {
    return {
      setImage: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      })
    };
  },
  addInputRules() {
    return [
      qh({
        find: _L,
        type: this.type,
        getAttributes: (t) => {
          const [, , e, n, r] = t;
          return { src: n, alt: e, title: r };
        }
      })
    ];
  }
});
const DL = /* @__PURE__ */ $({
  __name: "ImageUpload",
  props: {
    modelValue: { default: () => ({}) },
    upload: { type: Function, default: void 0 },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, o = G(!1), i = z({
      get: () => n.modelValue,
      set: (l) => r("update:modelValue", l)
    }), s = async (l) => {
      var c;
      const a = l instanceof File ? l : l[0];
      if (!a)
        throw new Error("No files to upload");
      try {
        o.value = !0;
        const d = await ((c = n.upload) == null ? void 0 : c.call(n, a));
        if (!d)
          throw new Error("No link received after upload");
        i.value = {
          ...C(i),
          src: d
        };
      } catch (d) {
        vl.error(`Failed to execute upload file: ${d}`);
      } finally {
        o.value = !1;
      }
    };
    return (l, a) => {
      const c = yg, d = io, u = la, f = lf;
      return M(), _(f, { disabled: o.value }, {
        default: V(() => [
          H(c, {
            modelValue: i.value.file,
            "onUpdate:modelValue": [
              a[0] || (a[0] = (p) => i.value.file = p),
              s
            ],
            label: l.t("editor.image.dialog.form.file"),
            accept: "image/*",
            loading: o.value,
            "prepend-icon": C(ae)("fileImagePlus"),
            "onClick:clear": a[1] || (a[1] = (p) => i.value.src = void 0)
          }, null, 8, ["modelValue", "label", "loading", "prepend-icon"]),
          H(d, {
            modelValue: i.value.src,
            "onUpdate:modelValue": a[2] || (a[2] = (p) => i.value.src = p),
            label: l.t("editor.image.dialog.form.link"),
            disabled: "",
            autofocus: "",
            "prepend-icon": C(ae)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(d, {
            modelValue: i.value.alt,
            "onUpdate:modelValue": a[3] || (a[3] = (p) => i.value.alt = p),
            label: l.t("editor.image.dialog.form.alt"),
            "prepend-icon": C(ae)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(u, {
            modelValue: i.value.lockAspectRatio,
            "onUpdate:modelValue": a[4] || (a[4] = (p) => i.value.lockAspectRatio = p),
            label: l.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      }, 8, ["disabled"]);
    };
  }
}), PL = /* @__PURE__ */ $({
  __name: "ImageUrl",
  props: {
    modelValue: { default: () => ({}) },
    t: {}
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = t, r = e, o = z({
      get: () => n.modelValue,
      set: (i) => r("update:modelValue", i)
    });
    return (i, s) => {
      const l = io, a = la, c = lf;
      return M(), _(c, null, {
        default: V(() => [
          H(l, {
            modelValue: o.value.src,
            "onUpdate:modelValue": s[0] || (s[0] = (d) => o.value.src = d),
            label: i.t("editor.image.dialog.form.link"),
            autofocus: "",
            "prepend-icon": C(ae)("linkVariant")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(l, {
            modelValue: o.value.alt,
            "onUpdate:modelValue": s[1] || (s[1] = (d) => o.value.alt = d),
            label: i.t("editor.image.dialog.form.alt"),
            "prepend-icon": C(ae)("text")
          }, null, 8, ["modelValue", "label", "prepend-icon"]),
          H(a, {
            modelValue: o.value.lockAspectRatio,
            "onUpdate:modelValue": s[2] || (s[2] = (d) => o.value.lockAspectRatio = d),
            label: i.t("editor.image.dialog.form.aspectRatio")
          }, null, 8, ["modelValue", "label"])
        ]),
        _: 1
      });
    };
  }
}), BL = { class: "headline" }, $L = /* @__PURE__ */ $({
  __name: "ImageDialog",
  props: {
    value: { default: () => ({}) },
    editor: {},
    upload: { type: Function, default: void 0 },
    imageTabs: { default: () => [] },
    hiddenTabs: { default: () => [] },
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Pt(), r = G(!1), o = G(!1), i = G({}), s = z(() => [...[
      {
        name: C(n)("editor.image.dialog.tab.url"),
        type: "url",
        component: PL
      },
      {
        name: C(n)("editor.image.dialog.tab.upload"),
        type: "upload",
        component: DL
      }
    ].filter((f) => f.type ? !e.hiddenTabs.includes(f.type) : f), ...e.imageTabs]), l = z(() => {
      const { src: d } = C(i);
      return !(typeof d == "string" && d !== "");
    });
    async function a() {
      const { src: d, lockAspectRatio: u, height: f } = C(i);
      d && (e.editor.chain().focus().setImage({
        ...C(i),
        src: d,
        height: u ? void 0 : f
      }).run(), c());
    }
    function c() {
      r.value = !1, i.value = {}, setTimeout(() => {
        var d;
        return (d = e.destroy) == null ? void 0 : d.call(e);
      }, 300);
    }
    return Ht(
      () => e.value,
      (d) => {
        i.value = {
          ...C(i),
          ...d
        };
      },
      { immediate: !0, deep: !0 }
    ), (d, u) => {
      const f = ro, p = Ln, h = oo, m = cr, g = bg, y = vg, b = wg, v = kg, x = no, k = aa, w = dr, L = ca;
      return M(), _(L, {
        modelValue: r.value,
        "onUpdate:modelValue": u[3] || (u[3] = (E) => r.value = E),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": c
      }, {
        default: V(() => [
          H(w, null, {
            default: V(() => [
              H(m, {
                class: "px-6",
                density: "compact"
              }, {
                default: V(() => [
                  _t("span", BL, Ae(C(n)("editor.image.dialog.title")), 1),
                  H(f),
                  H(h, {
                    class: "mx-0",
                    icon: "",
                    onClick: c
                  }, {
                    default: V(() => [
                      H(p, {
                        icon: C(ae)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(y, {
                modelValue: o.value,
                "onUpdate:modelValue": u[0] || (u[0] = (E) => o.value = E)
              }, {
                default: V(() => [
                  (M(!0), re(ye, null, He(s.value, (E, A) => (M(), _(g, {
                    key: A,
                    value: A
                  }, {
                    default: V(() => [
                      Rt(Ae(E.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]))), 128))
                ]),
                _: 1
              }, 8, ["modelValue"]),
              H(x, null, {
                default: V(() => [
                  H(v, {
                    modelValue: o.value,
                    "onUpdate:modelValue": u[2] || (u[2] = (E) => o.value = E)
                  }, {
                    default: V(() => [
                      (M(!0), re(ye, null, He(s.value, (E, A) => (M(), _(b, {
                        key: A,
                        value: A
                      }, {
                        default: V(() => [
                          (M(), _(Pr(E.component), {
                            modelValue: i.value,
                            "onUpdate:modelValue": u[1] || (u[1] = (R) => i.value = R),
                            upload: d.upload,
                            t: C(n)
                          }, null, 8, ["modelValue", "upload", "t"]))
                        ]),
                        _: 2
                      }, 1032, ["value"]))), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue"])
                ]),
                _: 1
              }),
              H(k, null, {
                default: V(() => [
                  H(h, {
                    disabled: l.value,
                    onClick: a
                  }, {
                    default: V(() => [
                      Rt(Ae(C(n)("editor.image.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), zL = ["src", "alt"], FL = {
  key: 0,
  class: "image-resizer"
}, jL = ["onMousedown"], WL = /* @__PURE__ */ $({
  __name: "ImageView",
  props: {
    ...MT,
    selected: {
      type: Boolean,
      required: !0
    }
  },
  setup(t) {
    const e = t, n = {
      TOP_LEFT: "tl",
      TOP_RIGHT: "tr",
      BOTTOM_LEFT: "bl",
      BOTTOM_RIGHT: "br"
    }, r = G({
      width: Sc,
      height: Sc
    }), o = G({
      width: 0,
      height: 0
    }), i = G([
      n.TOP_LEFT,
      n.TOP_RIGHT,
      n.BOTTOM_LEFT,
      n.BOTTOM_RIGHT
    ]), s = G(!1), l = G({
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      dir: ""
    }), a = z(() => {
      const { src: w, alt: L, width: E, height: A } = e.node.attrs, R = yl(E) ? `${E}px` : E, N = yl(A) ? `${A}px` : A;
      return {
        src: w || void 0,
        alt: L || void 0,
        style: {
          width: R || void 0,
          height: N || void 0
        }
      };
    }), c = z(() => e.node.attrs.display || void 0), d = z(() => e.node.attrs.lockAspectRatio ?? !0), u = z(() => typeof C(c) == "string" ? ["image-view", `image-view--${C(c)}`] : ["image-view"]), f = z(() => {
      const {
        style: { width: w }
      } = C(a);
      return { width: w === "100%" ? w : void 0 };
    });
    function p(w) {
      o.value = {
        width: w.target.width,
        height: w.target.height
      };
    }
    function h() {
      const { editor: w, getPos: L } = e, E = L();
      E !== void 0 && w.commands.setNodeSelection(E);
    }
    const m = Cr(function() {
      const { editor: w } = e, { width: L } = getComputedStyle(w.view.dom);
      r.value.width = Number.parseInt(L, 10);
    }, xc);
    function g(w, L) {
      w.preventDefault(), w.stopPropagation(), l.value.x = w.clientX, l.value.y = w.clientY;
      const E = C(o).width, A = C(o).height, R = E / A;
      let N = Number(e.node.attrs.width), U = Number(e.node.attrs.height);
      const K = C(r).width;
      N && !U ? (N = N > K ? K : N, U = Math.round(N / R)) : U && !N ? (N = Math.round(U * R), N = N > K ? K : N) : !N && !U ? (N = E > K ? K : E, U = Math.round(N / R)) : N = N > K ? K : N, l.value.w = N, l.value.h = U, l.value.dir = L, s.value = !0, v();
    }
    const y = Cr(function(w) {
      if (w.preventDefault(), w.stopPropagation(), !C(s)) return;
      const { x: L, y: E, w: A, h: R, dir: N } = C(l), U = (w.clientX - L) * (/l/.test(N) ? -1 : 1), K = (w.clientY - E) * (/t/.test(N) ? -1 : 1), oe = ew(A + U, kc, C(r).width), be = C(d) ? null : Math.max(R + K, kc);
      e.updateAttributes({
        width: oe,
        height: be
      });
    }, xc);
    function b(w) {
      w.preventDefault(), w.stopPropagation(), C(s) && (s.value = !1, l.value = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }, x(), h());
    }
    function v() {
      document == null || document.addEventListener("mousemove", y, !0), document == null || document.addEventListener("mouseup", b, !0);
    }
    function x() {
      document == null || document.removeEventListener("mousemove", y, !0), document == null || document.removeEventListener("mouseup", b, !0);
    }
    const k = new ResizeObserver(() => m());
    return Vn((w) => {
      C(k).observe(e.editor.view.dom), w(() => {
        C(k).disconnect();
      });
    }), (w, L) => (M(), _(C(TT), {
      as: "span",
      class: tn(u.value),
      style: Un(f.value)
    }, {
      default: V(() => [
        _t("div", {
          draggable: "true",
          "data-drag-handle": "",
          class: tn([{
            "image-view__body--focused": t.selected,
            "image-view__body--resizing": s.value
          }, "image-view__body"]),
          style: Un(f.value)
        }, [
          _t("img", {
            src: a.value.src,
            alt: a.value.alt,
            style: Un(a.value.style),
            class: "image-view__body__image",
            onLoad: p,
            onClick: h
          }, null, 44, zL),
          w.editor.view.editable ? pf((M(), re("div", FL, [
            (M(!0), re(ye, null, He(i.value, (E) => (M(), re("span", {
              key: E,
              class: tn([`image-resizer__handler--${E}`, "image-resizer__handler"]),
              onMousedown: (A) => g(A, E)
            }, null, 42, jL))), 128))
          ], 512)), [
            [hf, t.selected || s.value]
          ]) : Qe("", !0)
        ], 6)
      ]),
      _: 1
    }, 8, ["class", "style"]));
  }
}), sH = /* @__PURE__ */ IL.extend({
  addAttributes() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      src: {
        default: null
      },
      alt: {
        default: null
      },
      lockAspectRatio: {
        default: !0
      },
      width: {
        default: this.options.width
      },
      height: {
        default: null
      },
      display: {
        default: this.options.display,
        renderHTML: ({ display: e }) => e ? {
          "data-display": e
        } : {},
        parseHTML: (e) => e.getAttribute("data-display") || "inline"
      }
    };
  },
  addNodeView() {
    return OT(WL);
  },
  addCommands() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      updateImage: (e) => ({ commands: n }) => n.updateAttributes(this.name, e)
    };
  },
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      upload: void 0,
      width: Yo["size-large"],
      display: "inline",
      imageTabs: [],
      hiddenTabs: [],
      inline: !0,
      allowBase64: !0,
      HTMLAttributes: {},
      dialogComponent: () => $L,
      button: ({ editor: e, extension: n, t: r }) => {
        const { upload: o, imageTabs: i, hiddenTabs: s, dialogComponent: l } = n.options;
        return {
          component: FO,
          componentProps: {
            editor: e,
            t: r,
            upload: o,
            imageTabs: i,
            hiddenTabs: s
          },
          componentSlots: {
            dialog: l()
          }
        };
      }
    };
  }
}), lH = /* @__PURE__ */ W.create({
  name: "indent",
  addOptions() {
    return {
      button: ({ editor: t, t: e }) => ({
        component: jO,
        componentProps: {
          editor: t,
          t: e
        }
      })
    };
  }
});
var UL = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, KL = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, qL = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, JL = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, GL = at.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (t) => t.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (t) => t.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["em", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: t }) => t.setMark(this.name),
      toggleItalic: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetItalic: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      En({
        find: UL,
        type: this.type
      }),
      En({
        find: qL,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: KL,
        type: this.type
      }),
      cn({
        find: JL,
        type: this.type
      })
    ];
  }
});
const aH = /* @__PURE__ */ GL.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {},
      button: ({ editor: e, t: n }) => ({
        component: WO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
}), ZL = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", XL = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Xl = "numeric", Yl = "ascii", Ql = "alpha", Hr = "asciinumeric", Sr = "alphanumeric", ea = "domain", Gm = "emoji", YL = "scheme", QL = "slashscheme", rl = "whitespace";
function eV(t, e) {
  return t in e || (e[t] = []), e[t];
}
function bn(t, e, n) {
  e[Xl] && (e[Hr] = !0, e[Sr] = !0), e[Yl] && (e[Hr] = !0, e[Ql] = !0), e[Hr] && (e[Sr] = !0), e[Ql] && (e[Sr] = !0), e[Sr] && (e[ea] = !0), e[Gm] && (e[ea] = !0);
  for (const r in e) {
    const o = eV(r, n);
    o.indexOf(t) < 0 && o.push(t);
  }
}
function tV(t, e) {
  const n = {};
  for (const r in e)
    e[r].indexOf(t) >= 0 && (n[r] = !0);
  return n;
}
function Ie(t = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = t;
}
Ie.groups = {};
Ie.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(t) {
    const e = this, n = e.j[t];
    if (n)
      return n;
    for (let r = 0; r < e.jr.length; r++) {
      const o = e.jr[r][0], i = e.jr[r][1];
      if (i && o.test(t))
        return i;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(t, e = !1) {
    return e ? t in this.j : !!this.go(t);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(t, e, n, r) {
    for (let o = 0; o < t.length; o++)
      this.tt(t[o], e, n, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(t, e, n, r) {
    r = r || Ie.groups;
    let o;
    return e && e.j ? o = e : (o = new Ie(e), n && r && bn(e, n, r)), this.jr.push([t, o]), o;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(t, e, n, r) {
    let o = this;
    const i = t.length;
    if (!i)
      return o;
    for (let s = 0; s < i - 1; s++)
      o = o.tt(t[s]);
    return o.tt(t[i - 1], e, n, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(t, e, n, r) {
    r = r || Ie.groups;
    const o = this;
    if (e && e.j)
      return o.j[t] = e, e;
    const i = e;
    let s, l = o.go(t);
    if (l ? (s = new Ie(), Object.assign(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new Ie(), i) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = Object.assign(tV(s.t, r), n);
          bn(i, a, r);
        } else n && bn(i, n, r);
      s.t = i;
    }
    return o.j[t] = s, s;
  }
};
const F = (t, e, n, r, o) => t.ta(e, n, r, o), le = (t, e, n, r, o) => t.tr(e, n, r, o), Ju = (t, e, n, r, o) => t.ts(e, n, r, o), T = (t, e, n, r, o) => t.tt(e, n, r, o), Mt = "WORD", ta = "UWORD", Zm = "ASCIINUMERICAL", Xm = "ALPHANUMERICAL", Qr = "LOCALHOST", na = "TLD", ra = "UTLD", Go = "SCHEME", Fn = "SLASH_SCHEME", cc = "NUM", oa = "WS", dc = "NL", Rr = "OPENBRACE", Nr = "CLOSEBRACE", Si = "OPENBRACKET", xi = "CLOSEBRACKET", Ci = "OPENPAREN", Ti = "CLOSEPAREN", Ai = "OPENANGLEBRACKET", Mi = "CLOSEANGLEBRACKET", Ei = "FULLWIDTHLEFTPAREN", Oi = "FULLWIDTHRIGHTPAREN", Li = "LEFTCORNERBRACKET", Vi = "RIGHTCORNERBRACKET", Hi = "LEFTWHITECORNERBRACKET", Ri = "RIGHTWHITECORNERBRACKET", Ni = "FULLWIDTHLESSTHAN", _i = "FULLWIDTHGREATERTHAN", Ii = "AMPERSAND", Di = "APOSTROPHE", Pi = "ASTERISK", Jt = "AT", Bi = "BACKSLASH", $i = "BACKTICK", zi = "CARET", Xt = "COLON", uc = "COMMA", Fi = "DOLLAR", ut = "DOT", ji = "EQUALS", fc = "EXCLAMATION", je = "HYPHEN", _r = "PERCENT", Wi = "PIPE", Ui = "PLUS", Ki = "POUND", Ir = "QUERY", pc = "QUOTE", Ym = "FULLWIDTHMIDDLEDOT", hc = "SEMI", ft = "SLASH", Dr = "TILDE", qi = "UNDERSCORE", Qm = "EMOJI", Ji = "SYM";
var eg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Xm,
  AMPERSAND: Ii,
  APOSTROPHE: Di,
  ASCIINUMERICAL: Zm,
  ASTERISK: Pi,
  AT: Jt,
  BACKSLASH: Bi,
  BACKTICK: $i,
  CARET: zi,
  CLOSEANGLEBRACKET: Mi,
  CLOSEBRACE: Nr,
  CLOSEBRACKET: xi,
  CLOSEPAREN: Ti,
  COLON: Xt,
  COMMA: uc,
  DOLLAR: Fi,
  DOT: ut,
  EMOJI: Qm,
  EQUALS: ji,
  EXCLAMATION: fc,
  FULLWIDTHGREATERTHAN: _i,
  FULLWIDTHLEFTPAREN: Ei,
  FULLWIDTHLESSTHAN: Ni,
  FULLWIDTHMIDDLEDOT: Ym,
  FULLWIDTHRIGHTPAREN: Oi,
  HYPHEN: je,
  LEFTCORNERBRACKET: Li,
  LEFTWHITECORNERBRACKET: Hi,
  LOCALHOST: Qr,
  NL: dc,
  NUM: cc,
  OPENANGLEBRACKET: Ai,
  OPENBRACE: Rr,
  OPENBRACKET: Si,
  OPENPAREN: Ci,
  PERCENT: _r,
  PIPE: Wi,
  PLUS: Ui,
  POUND: Ki,
  QUERY: Ir,
  QUOTE: pc,
  RIGHTCORNERBRACKET: Vi,
  RIGHTWHITECORNERBRACKET: Ri,
  SCHEME: Go,
  SEMI: hc,
  SLASH: ft,
  SLASH_SCHEME: Fn,
  SYM: Ji,
  TILDE: Dr,
  TLD: na,
  UNDERSCORE: qi,
  UTLD: ra,
  UWORD: ta,
  WORD: Mt,
  WS: oa
});
const Ct = /[a-z]/, yr = new RegExp("\\p{L}", "u"), ol = new RegExp("\\p{Emoji}", "u"), Tt = /\d/, il = /\s/, Gu = "\r", sl = `
`, nV = "️", rV = "‍", ll = "￼";
let Io = null, Do = null;
function oV(t = []) {
  const e = {};
  Ie.groups = e;
  const n = new Ie();
  Io == null && (Io = Zu(ZL)), Do == null && (Do = Zu(XL)), T(n, "'", Di), T(n, "{", Rr), T(n, "}", Nr), T(n, "[", Si), T(n, "]", xi), T(n, "(", Ci), T(n, ")", Ti), T(n, "<", Ai), T(n, ">", Mi), T(n, "（", Ei), T(n, "）", Oi), T(n, "「", Li), T(n, "」", Vi), T(n, "『", Hi), T(n, "』", Ri), T(n, "＜", Ni), T(n, "＞", _i), T(n, "&", Ii), T(n, "*", Pi), T(n, "@", Jt), T(n, "`", $i), T(n, "^", zi), T(n, ":", Xt), T(n, ",", uc), T(n, "$", Fi), T(n, ".", ut), T(n, "=", ji), T(n, "!", fc), T(n, "-", je), T(n, "%", _r), T(n, "|", Wi), T(n, "+", Ui), T(n, "#", Ki), T(n, "?", Ir), T(n, '"', pc), T(n, "/", ft), T(n, ";", hc), T(n, "~", Dr), T(n, "_", qi), T(n, "\\", Bi), T(n, "・", Ym);
  const r = le(n, Tt, cc, {
    [Xl]: !0
  });
  le(r, Tt, r);
  const o = le(r, Ct, Zm, {
    [Hr]: !0
  }), i = le(r, yr, Xm, {
    [Sr]: !0
  }), s = le(n, Ct, Mt, {
    [Yl]: !0
  });
  le(s, Tt, o), le(s, Ct, s), le(o, Tt, o), le(o, Ct, o);
  const l = le(n, yr, ta, {
    [Ql]: !0
  });
  le(l, Ct), le(l, Tt, i), le(l, yr, l), le(i, Tt, i), le(i, Ct), le(i, yr, i);
  const a = T(n, sl, dc, {
    [rl]: !0
  }), c = T(n, Gu, oa, {
    [rl]: !0
  }), d = le(n, il, oa, {
    [rl]: !0
  });
  T(n, ll, d), T(c, sl, a), T(c, ll, d), le(c, il, d), T(d, Gu), T(d, sl), le(d, il, d), T(d, ll, d);
  const u = le(n, ol, Qm, {
    [Gm]: !0
  });
  T(u, "#"), le(u, ol, u), T(u, nV, u);
  const f = T(u, rV);
  T(f, "#"), le(f, ol, u);
  const p = [[Ct, s], [Tt, o]], h = [[Ct, null], [yr, l], [Tt, i]];
  for (let m = 0; m < Io.length; m++)
    jt(n, Io[m], na, Mt, p);
  for (let m = 0; m < Do.length; m++)
    jt(n, Do[m], ra, ta, h);
  bn(na, {
    tld: !0,
    ascii: !0
  }, e), bn(ra, {
    utld: !0,
    alpha: !0
  }, e), jt(n, "file", Go, Mt, p), jt(n, "mailto", Go, Mt, p), jt(n, "http", Fn, Mt, p), jt(n, "https", Fn, Mt, p), jt(n, "ftp", Fn, Mt, p), jt(n, "ftps", Fn, Mt, p), bn(Go, {
    scheme: !0,
    ascii: !0
  }, e), bn(Fn, {
    slashscheme: !0,
    ascii: !0
  }, e), t = t.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < t.length; m++) {
    const g = t[m][0], b = t[m][1] ? {
      [YL]: !0
    } : {
      [QL]: !0
    };
    g.indexOf("-") >= 0 ? b[ea] = !0 : Ct.test(g) ? Tt.test(g) ? b[Hr] = !0 : b[Yl] = !0 : b[Xl] = !0, Ju(n, g, g, b);
  }
  return Ju(n, "localhost", Qr, {
    ascii: !0
  }), n.jd = new Ie(Ji), {
    start: n,
    tokens: Object.assign({
      groups: e
    }, eg)
  };
}
function tg(t, e) {
  const n = iV(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = n.length, o = [];
  let i = 0, s = 0;
  for (; s < r; ) {
    let l = t, a = null, c = 0, d = null, u = -1, f = -1;
    for (; s < r && (a = l.go(n[s])); )
      l = a, l.accepts() ? (u = 0, f = 0, d = l) : u >= 0 && (u += n[s].length, f++), c += n[s].length, i += n[s].length, s++;
    i -= u, s -= f, c -= u, o.push({
      t: d.t,
      // token type/name
      v: e.slice(i - c, i),
      // string value
      s: i - c,
      // start index
      e: i
      // end index (excluding)
    });
  }
  return o;
}
function iV(t) {
  const e = [], n = t.length;
  let r = 0;
  for (; r < n; ) {
    let o = t.charCodeAt(r), i, s = o < 55296 || o > 56319 || r + 1 === n || (i = t.charCodeAt(r + 1)) < 56320 || i > 57343 ? t[r] : t.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function jt(t, e, n, r, o) {
  let i;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    t.j[a] ? i = t.j[a] : (i = new Ie(r), i.jr = o.slice(), t.j[a] = i), t = i;
  }
  return i = new Ie(n), i.jr = o.slice(), t.j[e[s - 1]] = i, i;
}
function Zu(t) {
  const e = [], n = [];
  let r = 0, o = "0123456789";
  for (; r < t.length; ) {
    let i = 0;
    for (; o.indexOf(t[r + i]) >= 0; )
      i++;
    if (i > 0) {
      e.push(n.join(""));
      for (let s = parseInt(t.substring(r, r + i), 10); s > 0; s--)
        n.pop();
      r += i;
    } else
      n.push(t[r]), r++;
  }
  return e;
}
const eo = {
  defaultProtocol: "http",
  events: null,
  format: Xu,
  formatHref: Xu,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function mc(t, e = null) {
  let n = Object.assign({}, eo);
  t && (n = Object.assign(n, t instanceof mc ? t.o : t));
  const r = n.ignoreTags, o = [];
  for (let i = 0; i < r.length; i++)
    o.push(r[i].toUpperCase());
  this.o = n, e && (this.defaultRender = e), this.ignoreTags = o;
}
mc.prototype = {
  o: eo,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(t) {
    return t;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(t) {
    return this.get("validate", t.toString(), t);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(t, e, n) {
    const r = e != null;
    let o = this.o[t];
    return o && (typeof o == "object" ? (o = n.t in o ? o[n.t] : eo[t], typeof o == "function" && r && (o = o(e, n))) : typeof o == "function" && r && (o = o(e, n.t, n)), o);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(t, e, n) {
    let r = this.o[t];
    return typeof r == "function" && e != null && (r = r(e, n.t, n)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(t) {
    const e = t.render(this);
    return (this.get("render", null, t) || this.defaultRender)(e, t.t, t);
  }
};
function Xu(t) {
  return t;
}
function ng(t, e) {
  this.t = "token", this.v = t, this.tk = e;
}
ng.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(t) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(t) {
    const e = this.toString(), n = t.get("truncate", e, this), r = t.get("format", e, this);
    return n && r.length > n ? r.substring(0, n) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(t) {
    return t.get("formatHref", this.toHref(t.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(t = eo.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(t) {
    return {
      type: this.t,
      value: this.toFormattedString(t),
      isLink: this.isLink,
      href: this.toFormattedHref(t),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(t) {
    return t.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(t) {
    const e = this, n = this.toHref(t.get("defaultProtocol")), r = t.get("formatHref", n, this), o = t.get("tagName", n, e), i = this.toFormattedString(t), s = {}, l = t.get("className", n, e), a = t.get("target", n, e), c = t.get("rel", n, e), d = t.getObj("attributes", n, e), u = t.getObj("events", n, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), d && Object.assign(s, d), {
      tagName: o,
      attributes: s,
      content: i,
      eventListeners: u
    };
  }
};
function Ms(t, e) {
  class n extends ng {
    constructor(o, i) {
      super(o, i), this.t = t;
    }
  }
  for (const r in e)
    n.prototype[r] = e[r];
  return n.t = t, n;
}
const Yu = Ms("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Qu = Ms("text"), sV = Ms("nl"), Po = Ms("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(t = eo.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${t}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const t = this.tk;
    return t.length >= 2 && t[0].t !== Qr && t[1].t === Xt;
  }
}), Fe = (t) => new Ie(t);
function lV({
  groups: t
}) {
  const e = t.domain.concat([Ii, Pi, Jt, Bi, $i, zi, Fi, ji, je, cc, _r, Wi, Ui, Ki, ft, Ji, Dr, qi]), n = [Di, Xt, uc, ut, fc, _r, Ir, pc, hc, Ai, Mi, Rr, Nr, xi, Si, Ci, Ti, Ei, Oi, Li, Vi, Hi, Ri, Ni, _i], r = [Ii, Di, Pi, Bi, $i, zi, Fi, ji, je, Rr, Nr, _r, Wi, Ui, Ki, Ir, ft, Ji, Dr, qi], o = Fe(), i = T(o, Dr);
  F(i, r, i), F(i, t.domain, i);
  const s = Fe(), l = Fe(), a = Fe();
  F(o, t.domain, s), F(o, t.scheme, l), F(o, t.slashscheme, a), F(s, r, i), F(s, t.domain, s);
  const c = T(s, Jt);
  T(i, Jt, c), T(l, Jt, c), T(a, Jt, c);
  const d = T(i, ut);
  F(d, r, i), F(d, t.domain, i);
  const u = Fe();
  F(c, t.domain, u), F(u, t.domain, u);
  const f = T(u, ut);
  F(f, t.domain, u);
  const p = Fe(Yu);
  F(f, t.tld, p), F(f, t.utld, p), T(c, Qr, p);
  const h = T(u, je);
  T(h, je, h), F(h, t.domain, u), F(p, t.domain, u), T(p, ut, f), T(p, je, h);
  const m = T(p, Xt);
  F(m, t.numeric, Yu);
  const g = T(s, je), y = T(s, ut);
  T(g, je, g), F(g, t.domain, s), F(y, r, i), F(y, t.domain, s);
  const b = Fe(Po);
  F(y, t.tld, b), F(y, t.utld, b), F(b, t.domain, s), F(b, r, i), T(b, ut, y), T(b, je, g), T(b, Jt, c);
  const v = T(b, Xt), x = Fe(Po);
  F(v, t.numeric, x);
  const k = Fe(Po), w = Fe();
  F(k, e, k), F(k, n, w), F(w, e, k), F(w, n, w), T(b, ft, k), T(x, ft, k);
  const L = T(l, Xt), E = T(a, Xt), A = T(E, ft), R = T(A, ft);
  F(l, t.domain, s), T(l, ut, y), T(l, je, g), F(a, t.domain, s), T(a, ut, y), T(a, je, g), F(L, t.domain, k), T(L, ft, k), T(L, Ir, k), F(R, t.domain, k), F(R, e, k), T(R, ft, k);
  const N = [
    [Rr, Nr],
    // {}
    [Si, xi],
    // []
    [Ci, Ti],
    // ()
    [Ai, Mi],
    // <>
    [Ei, Oi],
    // （）
    [Li, Vi],
    // 「」
    [Hi, Ri],
    // 『』
    [Ni, _i]
    // ＜＞
  ];
  for (let U = 0; U < N.length; U++) {
    const [K, oe] = N[U], be = T(k, K);
    T(w, K, be), T(be, oe, k);
    const me = Fe(Po);
    F(be, e, me);
    const ge = Fe();
    F(be, n), F(me, e, me), F(me, n, ge), F(ge, e, me), F(ge, n, ge), T(me, oe, k), T(ge, oe, k);
  }
  return T(o, Qr, b), T(o, dc, sV), {
    start: o,
    tokens: eg
  };
}
function aV(t, e, n) {
  let r = n.length, o = 0, i = [], s = [];
  for (; o < r; ) {
    let l = t, a = null, c = null, d = 0, u = null, f = -1;
    for (; o < r && !(a = l.go(n[o].t)); )
      s.push(n[o++]);
    for (; o < r && (c = a || l.go(n[o].t)); )
      a = null, l = c, l.accepts() ? (f = 0, u = l) : f >= 0 && f++, o++, d++;
    if (f < 0)
      o -= d, o < r && (s.push(n[o]), o++);
    else {
      s.length > 0 && (i.push(al(Qu, e, s)), s = []), o -= f, d -= f;
      const p = u.t, h = n.slice(o - d, o);
      i.push(al(p, e, h));
    }
  }
  return s.length > 0 && i.push(al(Qu, e, s)), i;
}
function al(t, e, n) {
  const r = n[0].s, o = n[n.length - 1].e, i = e.slice(r, o);
  return new t(i, n);
}
const cV = typeof console < "u" && console && console.warn || (() => {
}), dV = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ne = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function uV() {
  return Ie.groups = {}, ne.scanner = null, ne.parser = null, ne.tokenQueue = [], ne.pluginQueue = [], ne.customSchemes = [], ne.initialized = !1, ne;
}
function ef(t, e = !1) {
  if (ne.initialized && cV(`linkifyjs: already initialized - will not register custom scheme "${t}" ${dV}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(t))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ne.customSchemes.push([t, e]);
}
function fV() {
  ne.scanner = oV(ne.customSchemes);
  for (let t = 0; t < ne.tokenQueue.length; t++)
    ne.tokenQueue[t][1]({
      scanner: ne.scanner
    });
  ne.parser = lV(ne.scanner.tokens);
  for (let t = 0; t < ne.pluginQueue.length; t++)
    ne.pluginQueue[t][1]({
      scanner: ne.scanner,
      parser: ne.parser
    });
  return ne.initialized = !0, ne;
}
function gc(t) {
  return ne.initialized || fV(), aV(ne.parser.start, t, tg(ne.scanner.start, t));
}
gc.scan = tg;
function rg(t, e = null, n = null) {
  if (e && typeof e == "object") {
    if (n)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    n = e, e = null;
  }
  const r = new mc(n), o = gc(t), i = [];
  for (let s = 0; s < o.length; s++) {
    const l = o[s];
    l.isLink && (!e || l.t === e) && r.check(l) && i.push(l.toFormattedObject(r));
  }
  return i;
}
var yc = "[\0-   ᠎ -\u2029 　]", pV = new RegExp(yc), hV = new RegExp(`${yc}$`), mV = new RegExp(yc, "g");
function gV(t) {
  return t.length === 1 ? t[0].isLink : t.length === 3 && t[1].isLink ? ["()", "[]"].includes(t[0].value + t[2].value) : !1;
}
function yV(t) {
  return new ee({
    key: new ue("autolink"),
    appendTransaction: (e, n, r) => {
      const o = e.some((c) => c.docChanged) && !n.doc.eq(r.doc), i = e.some((c) => c.getMeta("preventAutolink"));
      if (!o || i)
        return;
      const { tr: s } = r, l = yh(n.doc, [...e]);
      if (Mh(l).forEach(({ newRange: c }) => {
        const d = Dx(r.doc, c, (p) => p.isTextblock);
        let u, f;
        if (d.length > 1)
          u = d[0], f = r.doc.textBetween(
            u.pos,
            u.pos + u.node.nodeSize,
            void 0,
            " "
          );
        else if (d.length) {
          const p = r.doc.textBetween(c.from, c.to, " ", " ");
          if (!hV.test(p))
            return;
          u = d[0], f = r.doc.textBetween(u.pos, c.to, void 0, " ");
        }
        if (u && f) {
          const p = f.split(pV).filter(Boolean);
          if (p.length <= 0)
            return !1;
          const h = p[p.length - 1], m = u.pos + f.lastIndexOf(h);
          if (!h)
            return !1;
          const g = gc(h).map((y) => y.toObject(t.defaultProtocol));
          if (!gV(g))
            return !1;
          g.filter((y) => y.isLink).map((y) => ({
            ...y,
            from: m + y.start + 1,
            to: m + y.end + 1
          })).filter((y) => r.schema.marks.code ? !r.doc.rangeHasMark(y.from, y.to, r.schema.marks.code) : !0).filter((y) => t.validate(y.value)).filter((y) => t.shouldAutoLink(y.value)).forEach((y) => {
            Ga(y.from, y.to, r.doc).some((b) => b.mark.type === t.type) || s.addMark(
              y.from,
              y.to,
              t.type.create({
                href: y.href
              })
            );
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function bV(t) {
  return new ee({
    key: new ue("handleClickLink"),
    props: {
      handleClick: (e, n, r) => {
        var o, i;
        if (r.button !== 0 || !e.editable)
          return !1;
        let s = null;
        if (r.target instanceof HTMLAnchorElement)
          s = r.target;
        else {
          let d = r.target;
          const u = [];
          for (; d.nodeName !== "DIV"; )
            u.push(d), d = d.parentNode;
          s = u.find((f) => f.nodeName === "A");
        }
        if (!s)
          return !1;
        const l = Ah(e.state, t.type.name), a = (o = s == null ? void 0 : s.href) != null ? o : l.href, c = (i = s == null ? void 0 : s.target) != null ? i : l.target;
        return t.enableClickSelection && t.editor.commands.extendMarkRange(t.type.name), s && a ? (window.open(a, c), !0) : !1;
      }
    }
  });
}
function vV(t) {
  return new ee({
    key: new ue("handlePasteLink"),
    props: {
      handlePaste: (e, n, r) => {
        const { state: o } = e, { selection: i } = o, { empty: s } = i;
        if (s)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = rg(l, { defaultProtocol: t.defaultProtocol }).find(
          (c) => c.isLink && c.value === l
        );
        return !l || !a ? !1 : t.editor.commands.setMark(t.type, {
          href: a.href
        });
      }
    }
  });
}
function hn(t, e) {
  const n = ["http", "https", "ftp", "ftps", "mailto", "tel", "callto", "sms", "cid", "xmpp"];
  return e && e.forEach((r) => {
    const o = typeof r == "string" ? r : r.scheme;
    o && n.push(o);
  }), !t || t.replace(mV, "").match(
    new RegExp(
      // eslint-disable-next-line no-useless-escape
      `^(?:(?:${n.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
      "i"
    )
  );
}
var wV = at.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((t) => {
      if (typeof t == "string") {
        ef(t);
        return;
      }
      ef(t.scheme, t.optionalSlashes);
    });
  },
  onDestroy() {
    uV();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      enableClickSelection: !1,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (t, e) => !!hn(t, e.protocols),
      validate: (t) => !!t,
      shouldAutoLink: (t) => !!t
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(t) {
          return t.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (t) => {
          const e = t.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (n) => !!hn(n, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return this.options.isAllowedUri(t.href, {
      defaultValidate: (e) => !!hn(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", J(this.options.HTMLAttributes, t), 0] : ["a", J(this.options.HTMLAttributes, { ...t, href: "" }), 0];
  },
  addCommands() {
    return {
      setLink: (t) => ({ chain: e }) => {
        const { href: n } = t;
        return this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!hn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, t).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (t) => ({ chain: e }) => {
        const { href: n } = t || {};
        return n && !this.options.isAllowedUri(n, {
          defaultValidate: (r) => !!hn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? !1 : e().toggleMark(this.name, t, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run();
      },
      unsetLink: () => ({ chain: t }) => t().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      cn({
        find: (t) => {
          const e = [];
          if (t) {
            const { protocols: n, defaultProtocol: r } = this.options, o = rg(t).filter(
              (i) => i.isLink && this.options.isAllowedUri(i.value, {
                defaultValidate: (s) => !!hn(s, n),
                protocols: n,
                defaultProtocol: r
              })
            );
            o.length && o.forEach(
              (i) => e.push({
                text: i.value,
                data: {
                  href: i.href
                },
                index: i.start
              })
            );
          }
          return e;
        },
        type: this.type,
        getAttributes: (t) => {
          var e;
          return {
            href: (e = t.data) == null ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const t = [], { protocols: e, defaultProtocol: n } = this.options;
    return this.options.autolink && t.push(
      yV({
        type: this.type,
        defaultProtocol: this.options.defaultProtocol,
        validate: (r) => this.options.isAllowedUri(r, {
          defaultValidate: (o) => !!hn(o, e),
          protocols: e,
          defaultProtocol: n
        }),
        shouldAutoLink: this.options.shouldAutoLink
      })
    ), this.options.openOnClick === !0 && t.push(
      bV({
        type: this.type,
        editor: this.editor,
        enableClickSelection: this.options.enableClickSelection
      })
    ), this.options.linkOnPaste && t.push(
      vV({
        editor: this.editor,
        defaultProtocol: this.options.defaultProtocol,
        type: this.type
      })
    ), t;
  }
});
const kV = { class: "headline" }, SV = /* @__PURE__ */ $({
  __name: "LinkDialog",
  props: {
    value: { default: void 0 },
    target: { default: "_blank" },
    editor: {},
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Pt(), r = () => ({
      href: "",
      target: "_blank"
    }), o = G(r()), i = G(!1), s = z(() => {
      const { href: c, target: d } = o.value;
      return c ? e.value === c && e.target === d : !0;
    });
    function l() {
      const { href: c, target: d } = o.value;
      c && e.editor.chain().focus().extendMarkRange("link").setLink({ href: c, target: d }).run(), a();
    }
    function a() {
      i.value = !1, o.value = r(), setTimeout(() => {
        var c;
        return (c = e.destroy) == null ? void 0 : c.call(e);
      }, 300);
    }
    return Ht(i, (c) => {
      c && (o.value = {
        href: e.value,
        target: e.target
      });
    }), (c, d) => {
      const u = ro, f = Ln, p = oo, h = cr, m = io, g = no, y = aa, b = dr, v = ca;
      return M(), _(v, {
        modelValue: i.value,
        "onUpdate:modelValue": d[1] || (d[1] = (x) => i.value = x),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": a
      }, {
        default: V(() => [
          H(b, null, {
            default: V(() => [
              H(h, {
                class: "px-6",
                density: "compact"
              }, {
                default: V(() => [
                  _t("span", kV, Ae(C(n)("editor.link.dialog.title")), 1),
                  H(u),
                  H(p, {
                    class: "mx-0",
                    icon: "",
                    onClick: a
                  }, {
                    default: V(() => [
                      H(f, {
                        icon: C(ae)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(g, null, {
                default: V(() => [
                  H(m, {
                    modelValue: o.value.href,
                    "onUpdate:modelValue": d[0] || (d[0] = (x) => o.value.href = x),
                    label: C(n)("editor.link.dialog.link"),
                    autofocus: ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              H(y, null, {
                default: V(() => [
                  H(p, {
                    disabled: s.value,
                    onClick: l
                  }, {
                    default: V(() => [
                      Rt(Ae(C(n)("editor.link.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), cH = /* @__PURE__ */ wV.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      openOnClick: !1,
      protocols: [],
      autolink: !0,
      defaultProtocol: "http",
      enableClickSelection: !1,
      linkOnPaste: !0,
      HTMLAttributes: {},
      validate: (e) => !0,
      isAllowedUri: (e, n) => n.defaultValidate(e) && !e.startsWith("./"),
      shouldAutoLink: (e) => e.startsWith("https://"),
      dialogComponent: () => SV,
      button: ({ editor: e, extension: n, t: r }) => {
        const { dialogComponent: o } = n.options;
        return {
          component: UO,
          componentProps: {
            editor: e,
            t: r
          },
          componentSlots: {
            dialog: o()
          }
        };
      }
    };
  },
  addProseMirrorPlugins() {
    var t;
    return [
      ...((t = this.parent) == null ? void 0 : t.call(this)) || [],
      new ee({
        props: {
          handleClick(e, n) {
            const { schema: r, doc: o, tr: i } = e.state, s = gs(o.resolve(n), r.marks.link);
            if (!s) return !1;
            const l = o.resolve(s.from), a = o.resolve(s.to), c = i.setSelection(new P(l, a));
            return e.dispatch(c), !0;
          }
        }
      })
    ];
  }
}), dH = /* @__PURE__ */ W.create({
  name: "markdownTheme",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      markdownThemes: mf,
      button: ({ editor: e, extension: n, t: r }) => ({
        component: EL,
        componentProps: {
          editor: e,
          extension: n,
          t: r
        }
      })
    };
  }
}), uH = /* @__PURE__ */ zm.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1,
      button: ({ editor: e, t: n }) => ({
        component: KO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
});
var xV = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, CV = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, TV = at.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["s", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: t }) => t.setMark(this.name),
      toggleStrike: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetStrike: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      En({
        find: xV,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      cn({
        find: CV,
        type: this.type
      })
    ];
  }
});
const fH = /* @__PURE__ */ TV.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {},
      button: ({ editor: e, t: n }) => ({
        component: qO,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
});
var AV = at.create({
  name: "subscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sub"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "sub" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sub", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSubscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSubscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSubscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-,": () => this.editor.commands.toggleSubscript()
    };
  }
}), MV = at.create({
  name: "superscript",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "sup"
      },
      {
        style: "vertical-align",
        getAttrs(t) {
          return t !== "super" ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["sup", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setSuperscript: () => ({ commands: t }) => t.setMark(this.name),
      toggleSuperscript: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetSuperscript: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-.": () => this.editor.commands.toggleSuperscript()
    };
  }
});
const pH = /* @__PURE__ */ W.create({
  name: "subAndSuperScript",
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      subscript: {
        HTMLAttributes: {}
      },
      superscript: {
        HTMLAttributes: {}
      },
      button: ({ editor: e, extension: n, t: r }) => ({
        component: JO,
        componentProps: {
          editor: e,
          extension: n,
          t: r
        }
      })
    };
  },
  addExtensions() {
    const t = [];
    return this.options.subscript !== !1 && t.push(AV.configure(this.options.subscript)), this.options.superscript !== !1 && t.push(MV.configure(this.options.superscript)), t;
  }
});
var og = he.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["td", J(this.options.HTMLAttributes, t), 0];
  }
}), ig = he.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (t) => {
          const e = t.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["th", J(this.options.HTMLAttributes, t), 0];
  }
}), sg = he.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["tr", J(this.options.HTMLAttributes, t), 0];
  }
});
function ia(t, e) {
  return e ? ["width", `${Math.max(e, t)}px`] : ["min-width", `${t}px`];
}
function tf(t, e, n, r, o, i) {
  var s;
  let l = 0, a = !0, c = e.firstChild;
  const d = t.firstChild;
  if (d !== null)
    for (let u = 0, f = 0; u < d.childCount; u += 1) {
      const { colspan: p, colwidth: h } = d.child(u).attrs;
      for (let m = 0; m < p; m += 1, f += 1) {
        const g = o === f ? i : h && h[m], y = g ? `${g}px` : "";
        if (l += g || r, g || (a = !1), c) {
          if (c.style.width !== y) {
            const [b, v] = ia(r, g);
            c.style.setProperty(b, v);
          }
          c = c.nextSibling;
        } else {
          const b = document.createElement("col"), [v, x] = ia(r, g);
          b.style.setProperty(v, x), e.appendChild(b);
        }
      }
    }
  for (; c; ) {
    const u = c.nextSibling;
    (s = c.parentNode) == null || s.removeChild(c), c = u;
  }
  a ? (n.style.width = `${l}px`, n.style.minWidth = "") : (n.style.width = "", n.style.minWidth = `${l}px`);
}
var lg = class {
  constructor(t, e) {
    this.node = t, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.colgroup = this.table.appendChild(document.createElement("colgroup")), tf(t, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(t) {
    return t.type !== this.node.type ? !1 : (this.node = t, tf(t, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(t) {
    return t.type === "attributes" && (t.target === this.table || this.colgroup.contains(t.target));
  }
};
function EV(t, e, n, r) {
  let o = 0, i = !0;
  const s = [], l = t.firstChild;
  if (!l)
    return {};
  for (let u = 0, f = 0; u < l.childCount; u += 1) {
    const { colspan: p, colwidth: h } = l.child(u).attrs;
    for (let m = 0; m < p; m += 1, f += 1) {
      const g = n === f ? r : h && h[m];
      o += g || e, g || (i = !1);
      const [y, b] = ia(e, g);
      s.push(["col", { style: `${y}: ${b}` }]);
    }
  }
  const a = i ? `${o}px` : "", c = i ? "" : `${o}px`;
  return { colgroup: ["colgroup", {}, ...s], tableWidth: a, tableMinWidth: c };
}
function nf(t, e) {
  return t.createAndFill();
}
function OV(t) {
  if (t.cached.tableNodeTypes)
    return t.cached.tableNodeTypes;
  const e = {};
  return Object.keys(t.nodes).forEach((n) => {
    const r = t.nodes[n];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), t.cached.tableNodeTypes = e, e;
}
function LV(t, e, n, r, o) {
  const i = OV(t), s = [], l = [];
  for (let c = 0; c < n; c += 1) {
    const d = nf(i.cell);
    if (d && l.push(d), r) {
      const u = nf(i.header_cell);
      u && s.push(u);
    }
  }
  const a = [];
  for (let c = 0; c < e; c += 1)
    a.push(i.row.createChecked(null, r && c === 0 ? s : l));
  return i.table.createChecked(null, a);
}
function VV(t) {
  return t instanceof X;
}
var Bo = ({ editor: t }) => {
  const { selection: e } = t.state;
  if (!VV(e))
    return !1;
  let n = 0;
  const r = vh(e.ranges[0].$from, (i) => i.type.name === "table");
  return r == null || r.node.descendants((i) => {
    if (i.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(i.type.name) && (n += 1);
  }), n === e.ranges.length ? (t.commands.deleteTable(), !0) : !1;
}, ag = he.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: lg,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: t, HTMLAttributes: e }) {
    const { colgroup: n, tableWidth: r, tableMinWidth: o } = EV(t, this.options.cellMinWidth);
    return [
      "table",
      J(this.options.HTMLAttributes, e, {
        style: r ? `width: ${r}` : `min-width: ${o}`
      }),
      n,
      ["tbody", 0]
    ];
  },
  addCommands() {
    return {
      insertTable: ({ rows: t = 3, cols: e = 3, withHeaderRow: n = !0 } = {}) => ({ tr: r, dispatch: o, editor: i }) => {
        const s = LV(i.schema, t, e, n);
        if (o) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(s).scrollIntoView().setSelection(P.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: t, dispatch: e }) => KA(t, e),
      addColumnAfter: () => ({ state: t, dispatch: e }) => qA(t, e),
      deleteColumn: () => ({ state: t, dispatch: e }) => GA(t, e),
      addRowBefore: () => ({ state: t, dispatch: e }) => XA(t, e),
      addRowAfter: () => ({ state: t, dispatch: e }) => YA(t, e),
      deleteRow: () => ({ state: t, dispatch: e }) => eM(t, e),
      deleteTable: () => ({ state: t, dispatch: e }) => lM(t, e),
      mergeCells: () => ({ state: t, dispatch: e }) => xu(t, e),
      splitCell: () => ({ state: t, dispatch: e }) => Cu(t, e),
      toggleHeaderColumn: () => ({ state: t, dispatch: e }) => Yr("column")(t, e),
      toggleHeaderRow: () => ({ state: t, dispatch: e }) => Yr("row")(t, e),
      toggleHeaderCell: () => ({ state: t, dispatch: e }) => iM(t, e),
      mergeOrSplit: () => ({ state: t, dispatch: e }) => xu(t, e) ? !0 : Cu(t, e),
      setCellAttribute: (t, e) => ({ state: n, dispatch: r }) => rM(t, e)(n, r),
      goToNextCell: () => ({ state: t, dispatch: e }) => Au(1)(t, e),
      goToPreviousCell: () => ({ state: t, dispatch: e }) => Au(-1)(t, e),
      fixTables: () => ({ state: t, dispatch: e }) => (e && um(t), !0),
      setCellSelection: (t) => ({ tr: e, dispatch: n }) => {
        if (n) {
          const r = X.create(e.doc, t.anchorCell, t.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: Bo,
      "Mod-Backspace": Bo,
      Delete: Bo,
      "Mod-Delete": Bo
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        yM({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      MM({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(t) {
    const e = {
      name: t.name,
      options: t.options,
      storage: t.storage
    };
    return {
      tableRole: q(D(t, "tableRole", e))
    };
  }
});
W.create({
  name: "tableKit",
  addExtensions() {
    const t = [];
    return this.options.table !== !1 && t.push(ag.configure(this.options.table)), this.options.tableCell !== !1 && t.push(og.configure(this.options.tableCell)), this.options.tableHeader !== !1 && t.push(ig.configure(this.options.tableHeader)), this.options.tableRow !== !1 && t.push(sg.configure(this.options.tableRow)), t;
  }
});
const hH = /* @__PURE__ */ ag.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      resizable: !0,
      HTMLAttributes: {
        class: "table-wrapper"
      },
      tableRow: {},
      tableHeader: {},
      tableCell: {},
      handleWidth: 5,
      cellMinWidth: 25,
      View: lg,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1,
      button: ({ editor: e, t: n }) => ({
        component: tL,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  },
  addExtensions() {
    return [
      sg.configure(this.options.tableRow),
      ig.configure(this.options.tableHeader),
      og.configure(this.options.tableCell)
    ];
  }
}), mH = /* @__PURE__ */ jm.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {
        class: "task-list"
      },
      taskItem: {
        HTMLAttributes: {
          class: "task-list-item"
        }
      },
      itemTypeName: "taskItem",
      button: ({ editor: e, t: n }) => ({
        component: nL,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  },
  addExtensions() {
    return [Fm.configure(this.options.taskItem)];
  }
});
var HV = W.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (t) => {
              const e = t.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (t) => t.textAlign ? { style: `text-align: ${t.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (t) => ({ commands: e }) => this.options.alignments.includes(t) ? this.options.types.map((n) => e.updateAttributes(n, { textAlign: t })).every((n) => n) : !1,
      unsetTextAlign: () => ({ commands: t }) => this.options.types.map((e) => t.resetAttributes(e, "textAlign")).every((e) => e),
      toggleTextAlign: (t) => ({ editor: e, commands: n }) => this.options.alignments.includes(t) ? e.isActive({ textAlign: t }) ? n.unsetTextAlign() : n.setTextAlign(t) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
});
const gH = /* @__PURE__ */ HV.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      types: ["heading", "paragraph"],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null,
      button: ({ editor: e, extension: n, t: r }) => ({
        component: OL,
        componentProps: {
          editor: e,
          extension: n,
          t: r
        }
      })
    };
  }
});
var RV = at.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (t) => t.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    return ["u", J(this.options.HTMLAttributes, t), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: t }) => t.setMark(this.name),
      toggleUnderline: () => ({ commands: t }) => t.toggleMark(this.name),
      unsetUnderline: () => ({ commands: t }) => t.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
});
const yH = /* @__PURE__ */ RV.extend({
  addOptions() {
    var t;
    return {
      ...(t = this.parent) == null ? void 0 : t.call(this),
      HTMLAttributes: {},
      button: ({ editor: e, t: n }) => ({
        component: rL,
        componentProps: {
          editor: e,
          t: n
        }
      })
    };
  }
}), NV = { class: "headline" }, _V = /* @__PURE__ */ $({
  __name: "VideoDialog",
  props: {
    value: { default: void 0 },
    editor: {},
    destroy: { type: Function, default: void 0 }
  },
  setup(t) {
    const e = t, { t: n } = Pt(), r = G(""), o = G(!1), i = z(() => e.value === r.value || !C(r));
    function s() {
      C(r) && e.editor.chain().focus().setVideo({ src: r.value }).run(), l();
    }
    function l() {
      o.value = !1, r.value = "", setTimeout(() => {
        var a;
        return (a = e.destroy) == null ? void 0 : a.call(e);
      }, 300);
    }
    return Vn(() => {
      e.value && (r.value = e.value);
    }), (a, c) => {
      const d = ro, u = Ln, f = oo, p = cr, h = io, m = no, g = aa, y = dr, b = ca;
      return M(), _(b, {
        modelValue: o.value,
        "onUpdate:modelValue": c[1] || (c[1] = (v) => o.value = v),
        "max-width": "400",
        activator: "parent",
        "onClick:outside": l
      }, {
        default: V(() => [
          H(y, null, {
            default: V(() => [
              H(p, {
                class: "px-6",
                density: "compact"
              }, {
                default: V(() => [
                  _t("span", NV, Ae(C(n)("editor.video.dialog.title")), 1),
                  H(d),
                  H(f, {
                    class: "mx-0",
                    icon: "",
                    onClick: l
                  }, {
                    default: V(() => [
                      H(u, {
                        icon: C(ae)("close")
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              H(m, null, {
                default: V(() => [
                  H(h, {
                    modelValue: r.value,
                    "onUpdate:modelValue": c[0] || (c[0] = (v) => r.value = v),
                    label: C(n)("editor.video.dialog.link"),
                    "hide-details": "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "label"])
                ]),
                _: 1
              }),
              H(g, null, {
                default: V(() => [
                  H(f, {
                    disabled: i.value,
                    onClick: s
                  }, {
                    default: V(() => [
                      Rt(Ae(C(n)("editor.video.dialog.button.apply")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
function IV(t) {
  return t = t.replace("https://youtu.be/", "https://www.youtube.com/watch?v=").replace("watch?v=", "embed/"), t = t.replace("https://vimeo.com/", "https://player.vimeo.com/video/"), /^https?:\/\/www.bilibili.com\/video\/.*/i.test(t) && (t = t.replace(/\?.*$/i, "").replace("https://www.bilibili.com/video/", "https://player.bilibili.com/player.html?bvid=")), t.includes("drive.google.com") && (t = t.replace("/view", "/preview")), t;
}
const bH = /* @__PURE__ */ he.create({
  name: "video",
  group: "block",
  atom: !0,
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null,
        renderHTML: ({ src: t }) => ({
          src: t ? IV(t) : null
        })
      },
      width: {
        default: this.options.width,
        renderHTML: ({ width: t }) => ({
          width: Ar(t)
        })
      },
      frameborder: {
        default: this.options.frameborder ? 1 : 0,
        parseHTML: () => this.options.frameborder ? 1 : 0
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "div[data-video] iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: t }) {
    const { width: e = "100%" } = t ?? {}, n = {
      ...t,
      width: "100%",
      height: "100%"
    }, r = `position: relative;overflow: hidden;display: flex;flex: 1;max-width: ${e};`, o = `flex: 1;padding-bottom: ${9 / 16 * 100}%;`, l = ["div", { style: r }, ["div", { style: o }], ["iframe", n]];
    return ["div", {
      ...this.options.HTMLAttributes,
      "data-video": ""
    }, l];
  },
  addCommands() {
    return {
      setVideo: (t) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: t
      }),
      updateVideo: (t) => ({ commands: e }) => e.updateAttributes(this.name, t)
    };
  },
  addOptions() {
    return {
      allowFullscreen: !0,
      frameborder: !1,
      width: Qo["size-medium"],
      HTMLAttributes: {
        class: "iframe-wrapper",
        style: "display: flex;justify-content: center;"
      },
      dialogComponent: () => _V,
      button: ({ editor: t, extension: e, t: n }) => {
        const { dialogComponent: r } = e.options;
        return {
          component: oL,
          componentProps: {
            editor: t,
            t: n
          },
          componentSlots: {
            dialog: r()
          }
        };
      }
    };
  }
}), vH = (t) => (n) => {
  const { lang: r, fallbackLang: o, markdownTheme: i, components: s = {}, extensions: l } = t || {};
  o && Mr.setFallbackLang(o), r && Mr.setLang(r), Object.keys(s).forEach((a) => n.component(a, s[a])), _g({
    defaultLang: r,
    defaultFallbackLang: o,
    defaultMarkdownTheme: i,
    extensions: l
  });
};
export {
  j as ActionButton,
  UV as BaseKit,
  KV as Blockquote,
  qV as Bold,
  JV as BulletList,
  GV as Clear,
  ZV as Code,
  XV as CodeBlock,
  YV as Color,
  Tw as DEFAULT_LOCALE_MESSAGE,
  QV as FontFamily,
  eH as FontSize,
  tH as Fullscreen,
  nH as Heading,
  rH as Highlight,
  oH as History,
  iH as HorizontalRule,
  sH as Image,
  lH as Indent,
  aH as Italic,
  cH as Link,
  dH as MarkdownTheme,
  uH as OrderedList,
  fH as Strike,
  pH as SubAndSuperScript,
  hH as Table,
  mH as TaskList,
  gH as TextAlign,
  yH as Underline,
  bH as Video,
  jV as VuetifyTiptap,
  WV as VuetifyViewer,
  vH as createVuetifyProTipTap,
  cL as defaultBubbleList,
  Mr as locale,
  Zi as useContext,
  Pt as useLocale
};
