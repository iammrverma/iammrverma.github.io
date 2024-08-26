(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (t, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return i(128);
        },
      ]);
    },
    6691: function (t, e) {
      "use strict";
      var i, r, n, s;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_NAVIGATE: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return h;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_RESTORE: function () {
            return l;
          },
          ACTION_SERVER_ACTION: function () {
            return d;
          },
          ACTION_SERVER_PATCH: function () {
            return u;
          },
          PrefetchCacheEntryStatus: function () {
            return r;
          },
          PrefetchKind: function () {
            return i;
          },
          isThenable: function () {
            return f;
          },
        });
      let o = "refresh",
        a = "navigate",
        l = "restore",
        u = "server-patch",
        h = "prefetch",
        c = "fast-refresh",
        d = "server-action";
      function f(t) {
        return (
          t &&
          ("object" == typeof t || "function" == typeof t) &&
          "function" == typeof t.then
        );
      }
      ((n = i || (i = {})).AUTO = "auto"),
        (n.FULL = "full"),
        (n.TEMPORARY = "temporary"),
        ((s = r || (r = {})).fresh = "fresh"),
        (s.reusable = "reusable"),
        (s.expired = "expired"),
        (s.stale = "stale"),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    4318: function (t, e, i) {
      "use strict";
      function r(t, e, i, r) {
        return !1;
      }
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        i(8364),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default));
    },
    9577: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = i(8754),
        n = i(5893),
        s = r._(i(7294)),
        o = i(1401),
        a = i(2045),
        l = i(7420),
        u = i(7201),
        h = i(1443),
        c = i(9953),
        d = i(5320),
        f = i(2905),
        p = i(4318),
        m = i(953),
        g = i(6691),
        v = new Set();
      function y(t, e, i, r, n, s) {
        if (s || (0, a.isLocalURL)(e)) {
          if (!r.bypassPrefetchedCheck) {
            let n =
              e +
              "%" +
              i +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in t
                ? t.locale
                : void 0);
            if (v.has(n)) return;
            v.add(n);
          }
          (async () => (s ? t.prefetch(e, n) : t.prefetch(e, i, r)))().catch(
            (t) => {}
          );
        }
      }
      function x(t) {
        return "string" == typeof t ? t : (0, l.formatUrl)(t);
      }
      let b = s.default.forwardRef(function (t, e) {
        let i, r;
        let {
          href: l,
          as: v,
          children: b,
          prefetch: w = null,
          passHref: P,
          replace: j,
          shallow: M,
          scroll: T,
          locale: k,
          onClick: C,
          onMouseEnter: A,
          onTouchStart: E,
          legacyBehavior: S = !1,
          ...L
        } = t;
        (i = b),
          S &&
            ("string" == typeof i || "number" == typeof i) &&
            (i = (0, n.jsx)("a", { children: i }));
        let V = s.default.useContext(c.RouterContext),
          R = s.default.useContext(d.AppRouterContext),
          D = null != V ? V : R,
          N = !V,
          F = !1 !== w,
          B = null === w ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: O, as: z } = s.default.useMemo(() => {
            if (!V) {
              let t = x(l);
              return { href: t, as: v ? x(v) : t };
            }
            let [t, e] = (0, o.resolveHref)(V, l, !0);
            return { href: t, as: v ? (0, o.resolveHref)(V, v) : e || t };
          }, [V, l, v]),
          I = s.default.useRef(O),
          W = s.default.useRef(z);
        S && (r = s.default.Children.only(i));
        let U = S ? r && "object" == typeof r && r.ref : e,
          [$, _, H] = (0, f.useIntersection)({ rootMargin: "200px" }),
          Z = s.default.useCallback(
            (t) => {
              (W.current !== z || I.current !== O) &&
                (H(), (W.current = z), (I.current = O)),
                $(t),
                U &&
                  ("function" == typeof U
                    ? U(t)
                    : "object" == typeof U && (U.current = t));
            },
            [z, U, O, H, $]
          );
        s.default.useEffect(() => {
          D && _ && F && y(D, O, z, { locale: k }, { kind: B }, N);
        }, [z, O, _, k, F, null == V ? void 0 : V.locale, D, N, B]);
        let X = {
          ref: Z,
          onClick(t) {
            S || "function" != typeof C || C(t),
              S &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(t),
              D &&
                !t.defaultPrevented &&
                (function (t, e, i, r, n, o, l, u, h) {
                  let { nodeName: c } = t.currentTarget;
                  if (
                    "A" === c.toUpperCase() &&
                    ((function (t) {
                      let e = t.currentTarget.getAttribute("target");
                      return (
                        (e && "_self" !== e) ||
                        t.metaKey ||
                        t.ctrlKey ||
                        t.shiftKey ||
                        t.altKey ||
                        (t.nativeEvent && 2 === t.nativeEvent.which)
                      );
                    })(t) ||
                      (!h && !(0, a.isLocalURL)(i)))
                  )
                    return;
                  t.preventDefault();
                  let d = () => {
                    let t = null == l || l;
                    "beforePopState" in e
                      ? e[n ? "replace" : "push"](i, r, {
                          shallow: o,
                          locale: u,
                          scroll: t,
                        })
                      : e[n ? "replace" : "push"](r || i, { scroll: t });
                  };
                  h ? s.default.startTransition(d) : d();
                })(t, D, O, z, j, M, T, k, N);
          },
          onMouseEnter(t) {
            S || "function" != typeof A || A(t),
              S &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(t),
              D &&
                (F || !N) &&
                y(
                  D,
                  O,
                  z,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  N
                );
          },
          onTouchStart: function (t) {
            S || "function" != typeof E || E(t),
              S &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(t),
              D &&
                (F || !N) &&
                y(
                  D,
                  O,
                  z,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: B },
                  N
                );
          },
        };
        if ((0, u.isAbsoluteUrl)(z)) X.href = z;
        else if (!S || P || ("a" === r.type && !("href" in r.props))) {
          let t = void 0 !== k ? k : null == V ? void 0 : V.locale,
            e =
              (null == V ? void 0 : V.isLocaleDomain) &&
              (0, p.getDomainLocale)(
                z,
                t,
                null == V ? void 0 : V.locales,
                null == V ? void 0 : V.domainLocales
              );
          X.href =
            e ||
            (0, m.addBasePath)(
              (0, h.addLocale)(z, t, null == V ? void 0 : V.defaultLocale)
            );
        }
        return S
          ? s.default.cloneElement(r, X)
          : (0, n.jsx)("a", { ...L, ...X, children: i });
      });
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    2905: function (t, e, i) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = i(7294),
        n = i(3815),
        s = "function" == typeof IntersectionObserver,
        o = new Map(),
        a = [];
      function l(t) {
        let { rootRef: e, rootMargin: i, disabled: l } = t,
          u = l || !s,
          [h, c] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          f = (0, r.useCallback)((t) => {
            d.current = t;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (s) {
              if (u || h) return;
              let t = d.current;
              if (t && t.tagName)
                return (function (t, e, i) {
                  let {
                    id: r,
                    observer: n,
                    elements: s,
                  } = (function (t) {
                    let e;
                    let i = {
                        root: t.root || null,
                        margin: t.rootMargin || "",
                      },
                      r = a.find(
                        (t) => t.root === i.root && t.margin === i.margin
                      );
                    if (r && (e = o.get(r))) return e;
                    let n = new Map();
                    return (
                      (e = {
                        id: i,
                        observer: new IntersectionObserver((t) => {
                          t.forEach((t) => {
                            let e = n.get(t.target),
                              i = t.isIntersecting || t.intersectionRatio > 0;
                            e && i && e(i);
                          });
                        }, t),
                        elements: n,
                      }),
                      a.push(i),
                      o.set(i, e),
                      e
                    );
                  })(i);
                  return (
                    s.set(t, e),
                    n.observe(t),
                    function () {
                      if ((s.delete(t), n.unobserve(t), 0 === s.size)) {
                        n.disconnect(), o.delete(r);
                        let t = a.findIndex(
                          (t) => t.root === r.root && t.margin === r.margin
                        );
                        t > -1 && a.splice(t, 1);
                      }
                    }
                  );
                })(t, (t) => t && c(t), {
                  root: null == e ? void 0 : e.current,
                  rootMargin: i,
                });
            } else if (!h) {
              let t = (0, n.requestIdleCallback)(() => c(!0));
              return () => (0, n.cancelIdleCallback)(t);
            }
          }, [u, i, e, h, d.current]),
          [
            f,
            h,
            (0, r.useCallback)(() => {
              c(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    3520: function (t, e, i) {
      "use strict";
      i.d(e, {
        ET: function () {
          return n;
        },
        NW: function () {
          return a;
        },
        P9: function () {
          return h;
        },
        Zm: function () {
          return s;
        },
        bY: function () {
          return u;
        },
        kL: function () {
          return l;
        },
        nI: function () {
          return o;
        },
      });
      var r = i(5893);
      i(7294);
      let n = (t) => {
          let { className: e, ...i } = t;
          return (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 512 512",
            ...i,
            className: "w-full h-auto ".concat(e),
            children: [
              (0, r.jsx)("path", { fill: "none", d: "M0 0h512v512H0z" }),
              (0, r.jsx)("path", {
                fill: "currentColor",
                d: "M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z",
              }),
            ],
          });
        },
        s = (t) => {
          let { className: e, ...i } = t;
          return (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 256 209",
            ...i,
            className: "w-full h-auto ".concat(e),
            children: [
              (0, r.jsx)("path", { fill: "none", d: "M0 0h256v209H0z" }),
              (0, r.jsx)("path", {
                fill: "#55acee",
                d: "M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",
              }),
            ],
          });
        },
        o = (t) => {
          let { className: e, ...i } = t;
          return (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "1em",
            height: "1em",
            viewBox: "0 0 256 256",
            ...i,
            className: "w-full h-auto ".concat(e),
            children: [
              (0, r.jsx)("path", { fill: "none", d: "M0 0h256v256H0z" }),
              (0, r.jsxs)("g", {
                fill: "none",
                children: [
                  (0, r.jsx)("rect", {
                    width: 256,
                    height: 256,
                    fill: "#fff",
                    rx: 60,
                  }),
                  (0, r.jsx)("rect", {
                    width: 256,
                    height: 256,
                    fill: "#0A66C2",
                    rx: 60,
                  }),
                  (0, r.jsx)("path", {
                    fill: "#fff",
                    d: "M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z",
                  }),
                ],
              }),
            ],
          });
        },
        a = (t) => {
          let { className: e, ...i } = t;
          return (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...i,
            className: "w-full h-auto ".concat(e),
            children: [
              (0, r.jsxs)("g", {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, r.jsxs)("g", {
                    strokeDasharray: "2",
                    children: [
                      (0, r.jsx)("path", {
                        d: "M12 21v1M21 12h1M12 3v-1M3 12h-1",
                        children: (0, r.jsx)("animate", {
                          fill: "freeze",
                          attributeName: "stroke-dashoffset",
                          dur: "0.2s",
                          values: "4;2",
                        }),
                      }),
                      (0, r.jsx)("path", {
                        d: "M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5",
                        children: (0, r.jsx)("animate", {
                          fill: "freeze",
                          attributeName: "stroke-dashoffset",
                          begin: "0.2s",
                          dur: "0.2s",
                          values: "4;2",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("path", {
                    fill: "currentColor",
                    d: "M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z",
                    opacity: "0",
                    children: (0, r.jsx)("set", {
                      attributeName: "opacity",
                      begin: "0.5s",
                      to: "1",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("g", {
                fill: "currentColor",
                fillOpacity: "0",
                children: [
                  (0, r.jsxs)("path", {
                    d: "m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z",
                    children: [
                      (0, r.jsx)("animate", {
                        id: "lineMdSunnyFilledLoopToMoonFilledLoopTransition0",
                        fill: "freeze",
                        attributeName: "fill-opacity",
                        begin:
                          "0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s",
                        dur: "0.4s",
                        values: "0;1",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "fill-opacity",
                        begin:
                          "lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s",
                        dur: "0.4s",
                        values: "1;0",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("path", {
                    d: "M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "fill-opacity",
                        begin:
                          "lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s",
                        dur: "0.4s",
                        values: "0;1",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "fill-opacity",
                        begin:
                          "lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s",
                        dur: "0.4s",
                        values: "1;0",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("path", {
                    d: "M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "fill-opacity",
                        begin:
                          "lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s",
                        dur: "0.4s",
                        values: "0;1",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "fill-opacity",
                        begin:
                          "lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s",
                        dur: "0.4s",
                        values: "1;0",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("path", {
                    d: "m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "fill-opacity",
                        begin:
                          "lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s",
                        dur: "0.4s",
                        values: "0;1",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "fill-opacity",
                        begin:
                          "lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s",
                        dur: "0.4s",
                        values: "1;0",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("mask", {
                id: "lineMdSunnyFilledLoopToMoonFilledLoopTransition1",
                children: [
                  (0, r.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#fff",
                  }),
                  (0, r.jsxs)("circle", {
                    cx: "22",
                    cy: "2",
                    r: "3",
                    fill: "#fff",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "cx",
                        begin: "0.1s",
                        dur: "0.4s",
                        values: "22;18",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "cy",
                        begin: "0.1s",
                        dur: "0.4s",
                        values: "2;6",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "r",
                        begin: "0.1s",
                        dur: "0.4s",
                        values: "3;12",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("circle", {
                    cx: "22",
                    cy: "2",
                    r: "1",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "cx",
                        begin: "0.1s",
                        dur: "0.4s",
                        values: "22;18",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "cy",
                        begin: "0.1s",
                        dur: "0.4s",
                        values: "2;6",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "r",
                        begin: "0.1s",
                        dur: "0.4s",
                        values: "1;10",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("circle", {
                cx: "12",
                cy: "12",
                r: "6",
                fill: "currentColor",
                mask: "url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)",
                children: [
                  (0, r.jsx)("set", {
                    attributeName: "opacity",
                    begin: "0.5s",
                    to: "0",
                  }),
                  (0, r.jsx)("animate", {
                    fill: "freeze",
                    attributeName: "r",
                    begin: "0.1s",
                    dur: "0.4s",
                    values: "6;10",
                  }),
                ],
              }),
            ],
          });
        },
        l = (t) => {
          let { className: e, ...i } = t;
          return (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            ...i,
            className: "w-full h-auto ".concat(e),
            children: [
              (0, r.jsx)("rect", {
                x: "0",
                y: "0",
                width: "24",
                height: "24",
                fill: "rgba(255, 255, 255, 0)",
              }),
              (0, r.jsxs)("g", {
                fill: "none",
                stroke: "currentColor",
                strokeDasharray: "2",
                strokeDashoffset: "2",
                strokeLinecap: "round",
                strokeWidth: "2",
                children: [
                  (0, r.jsxs)("path", {
                    d: "M0 0",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "d",
                        begin: "1.2s",
                        dur: "0.2s",
                        values:
                          "M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "stroke-dashoffset",
                        begin: "1.2s",
                        dur: "0.2s",
                        values: "2;0",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("path", {
                    d: "M0 0",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "d",
                        begin: "1.5s",
                        dur: "0.2s",
                        values:
                          "M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "stroke-dashoffset",
                        begin: "1.5s",
                        dur: "1.2s",
                        values: "2;0",
                      }),
                    ],
                  }),
                  (0, r.jsx)("animateTransform", {
                    attributeName: "transform",
                    dur: "30s",
                    repeatCount: "indefinite",
                    type: "rotate",
                    values: "0 12 12;360 12 12",
                  }),
                ],
              }),
              (0, r.jsxs)("g", {
                fill: "currentColor",
                children: [
                  (0, r.jsx)("path", {
                    d: "M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z",
                    children: (0, r.jsx)("animate", {
                      fill: "freeze",
                      attributeName: "fill-opacity",
                      dur: "0.4s",
                      values: "1;0",
                    }),
                  }),
                  (0, r.jsx)("path", {
                    d: "M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z",
                    children: (0, r.jsx)("animate", {
                      fill: "freeze",
                      attributeName: "fill-opacity",
                      begin: "0.2s",
                      dur: "0.4s",
                      values: "1;0",
                    }),
                  }),
                ],
              }),
              (0, r.jsxs)("g", {
                fill: "currentColor",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, r.jsx)("path", {
                    d: "M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z",
                  }),
                  (0, r.jsx)("set", {
                    attributeName: "opacity",
                    begin: "0.6s",
                    to: "0",
                  }),
                ],
              }),
              (0, r.jsxs)("mask", {
                id: "lineMdMoonFilledToSunnyFilledLoopTransition0",
                children: [
                  (0, r.jsx)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#fff",
                  }),
                  (0, r.jsxs)("circle", {
                    cx: "18",
                    cy: "6",
                    r: "12",
                    fill: "#fff",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "cx",
                        begin: "0.6s",
                        dur: "0.4s",
                        values: "18;22",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "cy",
                        begin: "0.6s",
                        dur: "0.4s",
                        values: "6;2",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "r",
                        begin: "0.6s",
                        dur: "0.4s",
                        values: "12;3",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("circle", {
                    cx: "18",
                    cy: "6",
                    r: "10",
                    children: [
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "cx",
                        begin: "0.6s",
                        dur: "0.4s",
                        values: "18;22",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "cy",
                        begin: "0.6s",
                        dur: "0.4s",
                        values: "6;2",
                      }),
                      (0, r.jsx)("animate", {
                        fill: "freeze",
                        attributeName: "r",
                        begin: "0.6s",
                        dur: "0.4s",
                        values: "10;1",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsxs)("circle", {
                cx: "12",
                cy: "12",
                r: "10",
                fill: "currentColor",
                mask: "url(#lineMdMoonFilledToSunnyFilledLoopTransition0)",
                opacity: "0",
                children: [
                  (0, r.jsx)("set", {
                    attributeName: "opacity",
                    begin: "0.6s",
                    to: "1",
                  }),
                  (0, r.jsx)("animate", {
                    fill: "freeze",
                    attributeName: "r",
                    begin: "0.6s",
                    dur: "0.4s",
                    values: "10;6",
                  }),
                ],
              }),
            ],
          });
        },
        u = (t) => {
          let { className: e, ...i } = t;
          return (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "496",
            height: "496",
            viewBox: "0 0 496 496",
            xmlSpace: "preserve",
            className: "w-full h-auto ".concat(e),
            ...i,
            children: (0, r.jsx)("path", {
              d: "M234.709 430.04c-.856-8.144-1.693-15.837-2.53-23.53l-1.202-.281c-4.328 7.025-8.66 14.048-12.983 21.076-.786 1.276-1.597 2.541-2.302 3.862-1.19 2.23-2.64 3.718-5.52 3.1-2.984-.64-3.269-2.735-3.526-5.216-1.021-9.853-2.186-19.691-3.465-31.02-5.824 9.69-11.023 18.148-16.013 26.728-2.136 3.671-4.532 4.592-8.005 1.873.081-2.568 1.784-4.33 2.944-6.291 5.848-9.894 11.813-19.72 17.695-29.593 1.202-2.018 2.465-3.423 5.18-2.695 2.768.741 4.08 2.124 4.361 5.149.888 9.53 2.102 19.032 3.284 29.375 4.161-4.222 5.983-8.91 8.686-12.98 2.855-4.297 5.458-8.769 8.02-13.25 1.283-2.245 3.03-2.15 5.127-1.717 1.928.397 3.567.971 3.8 3.26 1.398 13.72 2.797 27.441 4.162 41.165.044.444-.267.924-.405 1.363-6.239-.086-6.239-.086-7.308-10.378zM366.087 319.957c.827-.624 1.314-1.126 1.908-1.393 2.112-.95 4.324-3.378 6.46-.25 2.542 3.72-.984 4.348-3.112 5.658-2.441 1.503-4.49 3.447-6.186 5.751-4.283 5.819-3.58 9.84 2.853 14.524.628-6.345 2.9-11.685 8.217-15.276 2.83-1.911 5.936-3.118 9.365-2.975 7.026.294 13.737 5.742 15.377 12.296 1.976 7.893-2.3 15.713-11.264 20.606-1.077 1.008.262 1.81.225 2.705-.157 3.773-2.902 5.272-6.002 3.087-7.214-5.085-14.47-10.134-21.417-15.57-7.697-6.022-8.662-13.345-3.338-21.515 1.826-2.803 3.918-5.39 6.914-7.648m13.654 33.134c1.716.799 3.542.917 5.38.751 4.91-.443 9.299-5.322 9.573-10.58.26-4.977-2.98-9.086-7.886-10.002-4.912-.917-9.627 1.65-11.772 6.409-2.134 4.734-.779 9.134 4.705 13.422zM435.2 203.107c.744 7.814 3.645 14.952 2.28 22.568-1.904 10.635-8.45 16.69-20.02 18.295-8.14 1.13-16.863-3.986-20.811-12.505-3.333-7.19-3.58-15.12-4.98-22.77-.45-2.46 1.164-3.284 3.086-3.626 11.923-2.117 23.859-4.163 35.785-6.263 3.134-.552 4.098 1.356 4.66 4.301m-30.277 7.322c-1.92.828-4.285.303-6.085 1.908.58 5.153 1.038 10.285 3.01 15.075 2.644 6.425 7.935 9.604 14.954 9.266 6.8-.328 11.833-4.384 13.942-10.835 1.991-6.091-.355-11.79-1.27-17.61-.318-2.013-2.08-1.592-3.633-1.316-6.689 1.185-13.392 2.288-20.918 3.512zM81.41 333.52c-3.15-7.165-6.841-13.767-5.076-21.743 2.078-9.384 8.162-14.747 17.127-16.717 8.76-1.926 16.144 1.079 21.495 8.284 4.501 6.06 6.721 13.319 9.797 20.12 1.04 2.302-.357 3.338-2.212 4.16-11.088 4.918-22.188 9.809-33.236 14.815-2.671 1.21-4.015.255-4.977-2.164-.86-2.16-1.834-4.275-2.918-6.755m4.554-4.986 3.023 6.138c5.782-2.52 11.218-4.9 16.662-7.262 12.565-5.453 13.191-7.84 5.006-19.29a18.49 18.49 0 0 0-1.915-2.286c-5.023-5.048-11.78-5.876-18.298-2.275-6.345 3.505-9.216 9.868-7.401 16.786.67 2.555 1.709 5.013 2.923 8.189zM139.566 385.566c-3.229 3.375-6.237 6.473-9.215 9.6-1.523 1.599-2.974 1.865-4.678.187-1.652-1.627-2.473-3.231-.368-5.008 3.168-2.674 6.404-5.268 9.197-8.618-6.522-2.016-10.98-5.164-13.751-10.396-1.663-3.139-2.465-6.495-1.675-10.101 1.82-8.306 9.345-14.659 17.296-14.55 8.348.113 14.72 5.833 16.345 15.064 2.486-1.662 4.614-1.139 6.14 1.267 1.771 2.79-.947 3.849-2.282 5.239-5.523 5.75-11.173 11.378-17.009 17.316m-11.34-27.788c-3.949 6.497-2.924 12.506 2.698 15.828 5.174 3.058 12.167.632 15.12-5.245 2.715-5.403.524-11.466-5.184-14.086-4.784-2.195-8.682-.428-12.635 3.503zM150.251 142.09c-1.963.323-2.99.912-1.595 2.615 1.58 1.928 3.264 3.772 4.856 5.691 3.453 4.162 3.29 4.771-2.3 7.674-6.661-7.669-13.4-15.43-20.143-23.189-1.854-2.134-3.81-4.19-5.54-6.419-1.122-1.445-3.538-2.64-2.021-5.016 1.354-2.12 3.285-3.317 5.669-1.517 1.391-2.536 2.334-4.892 3.816-6.838 4.389-5.765 11.821-8.104 18.215-6.002 7.074 2.325 12.118 9.207 12.14 16.564.022 7.893-4.128 13.204-13.097 16.437m-12.2-23.524c-3.611 5.084-3.708 9.249-.315 13.564 3.274 4.163 7.963 5.637 12.291 3.735 3.913-1.719 6.51-4.486 6.657-9.029.156-4.818-2.094-8.374-6.198-10.51-4.21-2.192-8.331-1.616-12.434 2.24zM381.563 127.557c1.81-1.975 3.43-3.653 4.943-5.42 1.79-2.09 3.392-2.132 5.404-.146 1.952 1.925 1.45 3.343-.193 5.046-5.196 5.387-10.122 11.05-15.518 16.224-11.272 10.813-28.02 5.914-32.07-9.236-1.52-5.685.5-10.686 3.993-14.849 5.34-6.361 11.192-12.29 16.813-18.416 1.666-1.815 3.094-1.248 4.685.195 1.797 1.63 2.241 3.055.365 5.004a820.105 820.105 0 0 0-15.024 16.006c-5.023 5.506-5.539 10.896-1.691 15.599 5.119 6.257 11.25 6.858 17.275 1.338 3.795-3.476 7.2-7.377 11.018-11.345zM308.897 74.803c-1.545 6.714-2.708 13.11-4.428 19.351-3.16 11.468-11.25 16.327-22.196 13.713-11.332-2.707-16.17-10.557-13.773-22.503 1.34-6.68 2.746-13.35 4.269-19.99.48-2.095.428-4.86 4.187-4.079 3.564.74 3.475 2.712 2.8 5.509-1.521 6.3-3.008 12.616-4.202 18.983-1.961 10.45 2.48 16.267 11.943 16.002 5.263-.148 8.594-3.003 10.162-9.25 1.618-6.445 2.828-12.994 4.426-19.446.623-2.513.492-6.244 4.947-5.178 4.208 1.007 2.083 4.097 1.865 6.888zM395.041 170.055c-2.806 6.617-5.466 12.892-8.162 19.153-.1.232-.543.315-1.122.627-3.116-2.542-4.057-5.386-2.263-9.404 2.142-4.799 4.536-9.558 5.703-14.767-7.422-4.165-18.242 2.383-23.85-8.466 7.867-1.406 14.89.331 21.832.931 4.346.376 5.941-1.055 7.305-4.579 2.326-6.01 4.95-11.904 7.603-18.217 3.855 2.837 4.952 5.711 3.137 9.724-2.033 4.492-3.758 9.123-5.887 14.358 5.333.477 9.907 1.155 14.49 1.218 4.323.059 6.888 1.777 7.915 6.416-7.048 1.19-13.854-.716-20.685-.98-3.176-.123-5.147.424-6.016 3.986zM153.284 397.435c-2.755-5.033-2.726-9.792-.718-14.708 1.344-3.292 2.867-4.265 6.34-2.211 5.96 3.524 11.608 7.661 18.115 10.309 2.224-6.991-2.18-12.872-9.989-13.721-1.45-.158-3.055.4-4.318-.711-1.147-1.01-1.208-2.465-.769-3.697.779-2.183 2.849-1.982 4.659-1.958 8.405.11 16.363 6.839 18.028 15.193 1.395 6.998-2.998 15.218-9.837 18.405-7.634 3.558-15.503 1.128-21.511-6.901m4.868-9.982c-1.314 5.054.573 9.234 5.128 11.357 4.204 1.96 7.97 1.006 10.797-2.964-4.98-3.194-9.813-6.577-15.925-8.393zM321.22 393.132c2.876-1.654 5.922-2.343 7.888-4.784-4.754-5.578-12.795-4.962-17.288 1.46-1.57 2.246-2.875 4.482-5.737 2.189-2.74-2.195-.376-4.24.852-5.977 4.583-6.486 14.066-9.418 21.358-6.781 7.111 2.572 11.642 10.119 11.007 18.334-.543 7.026-6.699 13.267-14.39 14.59-6.34 1.09-13.733-2.82-16.694-8.621-1.304-2.554-.64-3.975 1.85-5.086 3.648-1.628 7.22-3.428 11.153-5.324m-5.213 8.703c2.199 3.864 6.384 5.218 10.788 3.488 4.638-1.82 6.51-5.812 5.071-11.7-5.229 2.612-10.348 5.17-15.86 8.212zM181.923 121.352c-9.447 2.255-17.037-1.685-20.43-10.31-3.235-8.218-.433-16.234 7.185-20.56 7.463-4.236 15.766-2.691 21.017 3.91 3.402 4.276 3.207 5.318-1.56 7.81-5.862 3.063-11.74 6.095-17.65 9.16 3.56 5.614 10.776 5.662 15.939.56a13.36 13.36 0 0 0 2.364-3.18c1.074-2.015 2.453-1.8 4.165-.983 2.04.974 1.996 2.456 1.154 4.14-2.47 4.941-6.705 7.69-12.184 9.453m-11.685-24.716c-2.187 1.726-3.465 4.042-3.705 6.745-.157 1.756.5 3.658 2.862 2.554 4.852-2.267 9.789-4.445 14.166-7.696-3.79-4.71-6.853-5.12-13.323-1.603zM97.055 261.275c1.567-2.905 3.307-3.474 5.706-1.349 5.557 4.924 6.615 16.782 2.025 23.61-4.33 6.443-14.638 8.928-22.015 5.308-6.91-3.39-10.584-12.394-8.254-20.035 1.775-5.822 5.906-9.112 11.497-10.76 3.008-.886 4.98-.338 5.427 3.535.792 6.87 2.133 13.675 3.253 20.567 6.884-2.107 8.954-9.795 4.893-16.402-.854-1.39-2.546-2.247-2.532-4.474m-11.63 21.756c1.222.5 2.449 1.1 3.765-.294-.752-5.83-1.074-11.836-2.955-17.705-7.945 4.011-8.389 11.934-.81 17.999zM104.456 218.73c-8.207 3.815-15.646 2.872-21.106-2.422-4.99-4.839-6.368-12.281-3.505-18.925 2.941-6.827 10.315-10.742 17.53-9.513 3.565.608 4.841 2.17 3.698 5.813-2.075 6.615-3.9 13.308-5.855 20.062 6.428.633 11.136-3.898 11.435-10.496.067-1.479.008-3.042-.404-4.445-.636-2.165-.206-3.56 2.002-4.293 2.58-.855 3.212 1.058 3.836 2.776 2.548 7.014-.457 15.656-7.63 21.443m-13.645-8.823c1.407-5.008 3.394-9.875 4.01-15.353-4.672-.567-7.538 1.42-9.401 5.135-1.89 3.767-1.493 7.404 1.154 10.633 1.066 1.3 2.538 3.218 4.237-.415zM410.619 259.145c.138-3.99-1.429-4.481-4.263-2.778-4.464 2.683-6.338 9.433-3.97 15.081.884 2.11 2.01 4.086-.776 5.466-2.903 1.438-3.946-.918-4.758-2.852-2.931-6.979-2.31-13.775 2.329-19.75 3.958-5.098 9.479-7.065 15.93-5.925 6.995 1.236 11.859 4.977 13.735 12.046 2.843 10.713-5.167 21.15-15.863 20.917-3.22-.07-4.612-1.297-4.258-4.497a2463.23 2463.23 0 0 0 1.894-17.708m8.803 13.76c6.285-6.456 5.22-13.662-2.69-16.878-2.356 4.563-1.05 9.699-2.212 14.45-.913 3.732.818 5.01 4.902 2.429zM102.516 163.098c-3.153-8.638-.649-15.459 5.812-20.857 5.579-4.661 11.885-4.771 18.224-1.505 6.224 3.206 9.43 8.614 9.173 15.432-.269 7.162-3.976 12.66-10.623 15.699-6.178 2.823-12.021 1.78-17.34-2.331-2.13-1.647-3.865-3.66-5.246-6.438m14.552 3.466c7.105.132 11.757-3.427 12.426-9.508.538-4.878-4.37-10.73-9.765-11.643-5.667-.959-10.753 2.684-12.094 8.66-1.101 4.91 1.997 9.304 9.433 12.491zM357.586 363.393c-1.708-2.07-3.208-3.848-4.664-5.663-1.262-1.574-1.177-2.94.56-4.214 1.612-1.182 3.075-2.07 4.712-.098 6.348 7.644 12.71 15.277 19.045 22.888-1.776 3.126-3.805 4.576-6.755 3.155-1.33 2.32-2.272 4.49-3.67 6.311-6.287 8.2-15.213 8.602-22.106.977-3.454-3.82-6.648-7.873-9.981-11.802-1.634-1.926-2.848-3.696-.13-5.837 2.538-2 3.854-.394 5.303 1.352 2.972 3.58 5.9 7.202 8.97 10.697 3.8 4.325 7.81 4.923 11.794 1.943 4.389-3.282 5.345-7.985 2.326-12.734-1.507-2.372-3.437-4.476-5.404-6.975zM399.54 309.053c-7.255-.205-10.922-3.78-10.795-10.47.11-5.832 2.27-11.028 5.864-15.592 1.222-1.552 2.497-3.367 4.874-1.395 2.062 1.712 1.639 3.234.101 5.062-1.938 2.305-3.379 4.951-4.137 7.894-.651 2.53-2.006 5.54 1.427 6.919 3.17 1.273 4.257-1.673 5.493-3.784 1.008-1.72 1.828-3.55 2.82-5.28 2.904-5.064 6.904-6.922 11.536-5.422 3.929 1.272 6.862 5.896 6.41 10.816-.446 4.872-2.162 9.38-5.14 13.328-1.181 1.568-2.511 2.838-4.512 1.076-1.607-1.415-2.037-2.892-.485-4.715 2.094-2.458 3.42-5.316 3.687-8.567.165-2.007.326-4.216-1.983-5.164-2.482-1.02-3.64 1.01-4.706 2.648-1.356 2.086-2.487 4.32-3.713 6.49-1.505 2.666-3.375 4.948-6.742 6.156zM100.408 245.498c-9.401 3.391-18.432 6.654-27.557 9.951-2.179-4.542-.775-6.713 3.166-8.054 6.886-2.344 13.695-4.915 21.522-7.747-7.224-3.829-13.461-7.287-19.842-10.457-3.347-1.662-4.948-3.756-3.49-7.536 2.05-.95 3.507.572 5.02 1.33 7.446 3.73 14.834 7.576 22.218 11.427 2.297 1.198 4.939 1.949 4.831 5.544-.114 3.814-2.79 4.51-5.868 5.542zM320.776 123.903c-3.03 2.933-5.455 2.59-7.621-.43.252-2.04 1.939-2.749 3.166-3.773 13.14-10.971 26.339-21.872 39.46-32.867 2.949-2.471 5.569-3.633 8.511.941-14.438 11.986-28.838 23.94-43.516 36.129zM317.695 91.786c1.99-4.435 3.942-8.475 5.677-12.607 1.072-2.55 2.318-3.785 5.252-2.426 2.743 1.27 2.532 2.874 1.477 5.185-4.896 10.723-9.693 21.491-14.494 32.257-1.019 2.285-1.944 4.202-5.122 2.713-3.04-1.425-2.51-3.299-1.434-5.658 2.894-6.344 5.684-12.736 8.644-19.464zM104.07 183.054c-9.182-4.378-18.02-8.602-26.735-12.768 1.134-6.287 1.96-6.77 7.045-4.323 10.951 5.269 21.87 10.607 32.833 15.85 2.348 1.123 4.06 2.187 2.514 5.24-1.512 2.983-3.405 1.807-5.39.868-3.31-1.567-6.615-3.142-10.267-4.867zM205.841 76.585c1.63-.88 2.914-1.685 4.627-1.37 2.093 2.766 2.67 5.104-1.294 7.005-5.157 2.473-5.628 7.016-4.446 11.898.973 4.02 2.29 7.958 3.437 11.937.635 2.205.975 4.236-2.05 5.057-2.757.747-3.834-.397-4.54-2.978-2.184-7.991-4.638-15.909-6.883-23.885-.447-1.588-1.758-3.538.8-4.715 2.126-.977 4.17-1.589 5.325 1.45 1.78-1.59 3.246-2.9 5.024-4.399zM299.833 420.84c-1.166-.919-1.725-2.784-3.257-.786-1.351 1.762-3.275 2.802-5.234 3.735-1.689.805-3.231.907-4.083-1.215-.674-1.681-.953-3.457 1.03-4.285 7.887-3.297 7.173-9.382 5.366-15.895-.889-3.201-1.72-6.418-2.617-9.617-.693-2.472.31-3.655 2.713-4.308 2.491-.677 3.308.569 3.852 2.58 2.297 8.492 4.553 16.996 6.96 25.457 1.233 4.334-1.738 4.17-4.73 4.335zM382.98 315.907c-2.085-2.31-.706-4.008.544-5.502 1.286-1.536 2.737-.36 4.04.26 7.486 3.559 14.95 7.164 22.445 10.703 2.351 1.11 3.991 2.3 2.443 5.293-1.52 2.94-3.394 1.766-5.381.816-7.927-3.788-15.861-7.56-24.092-11.57zM262.215 401.264c-2.09 2.312-4.258 2.664-6.445 1.065-1.596-1.166-2.202-2.908-1.41-4.869.947-2.347 2.808-3.425 5.183-2.714 3.062.916 4.18 3.069 2.672 6.518zM236.4 100.682c-.077-3.412 1.468-4.963 4.476-4.993 2.362-.024 3.67 1.39 4.117 3.53.472 2.257-.627 3.992-2.674 4.725-2.749.984-4.847.028-5.92-3.262zM424.818 332.395c-1.83 2.592-3.847 3.165-6.094 1.34-1.52-1.237-2.204-2.909-1.221-4.848 1.007-1.989 2.66-3.081 4.852-2.406 2.725.84 3.266 2.989 2.463 5.914z",
            }),
          });
        },
        h = (t) => {
          let { className: e, ...i } = t;
          return (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            className: "w-full h-auto ".concat(e),
            ...i,
            children: [
              (0, r.jsx)("path", { fill: "none", d: "M0 0h24v24H0z" }),
              (0, r.jsx)("path", {
                fill: "none",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5",
              }),
            ],
          });
        };
    },
    6137: function (t, e, i) {
      "use strict";
      var r = i(5893);
      i(7294),
        (e.Z = (t) => {
          let { children: e, className: i = "" } = t;
          return (0, r.jsx)("div", {
            className:
              "w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ".concat(
                i
              ),
            children: e,
          });
        });
    },
    128: function (t, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          default: function () {
            return N;
          },
        });
      var r = i(5893),
        n = i(9494),
        s = i.n(n),
        o = i(7294),
        a = i(6137),
        l = i(1664),
        u = i.n(l),
        h = () =>
          (0, r.jsx)("footer", {
            className:
              "w-full border-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base",
            children: (0, r.jsxs)(a.Z, {
              className:
                "py-8 flex items-center justify-between lg:flex-col lg:py-6",
              children: [
                (0, r.jsxs)("span", {
                  children: [new Date().getFullYear(), " \xa9 rights reserved"],
                }),
                (0, r.jsx)("div", {
                  className: "flex items-center lg:py-2",
                  children: (0, r.jsx)(u(), {
                    href: "/",
                    children: "iammrverma",
                  }),
                }),
                (0, r.jsx)(u(), {
                  href: "mailto:rajbez2020@gmail.com",
                  className: "underline",
                  children: "Contact Now",
                }),
              ],
            }),
          }),
        c = i(4509);
      let d = (0, c.E)(u());
      var f = () =>
          (0, r.jsx)("div", {
            className: "flex items-center justify-center mt-2",
            children: (0, r.jsx)(d, {
              href: "/",
              className:
                "w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light",
              whileHover: {
                backgroundColor: ["#1b1b1b", "#f5f5f5"],
                color: ["#f5f5f5", "#1b1b1b"],
                transition: {
                  duration: 1,
                  repeat: 1 / 0,
                  ease: "linear",
                  bounceStiffness: 0,
                  loop: 1 / 0,
                },
              },
              children: "RV",
            }),
          }),
        p = i(1163),
        m = i(3520),
        g = () => {
          let [t, e] = (0, o.useState)("");
          return (
            (0, o.useEffect)(() => {
              let t = window.matchMedia("(prefer-color-scheme:dark)"),
                i = window.localStorage.getItem("theme"),
                r = () => {
                  if (i) {
                    let t = "dark" === i ? "dark" : "light";
                    e(t),
                      "dark" === t
                        ? document.documentElement.classList.add("dark")
                        : document.documentElement.classList.remove("dark");
                  } else {
                    let i = t.matches ? "dark" : "light";
                    e(i),
                      "dark" == i
                        ? document.documentElement.classList.add("dark")
                        : document.documentElement.classList.remove("dark");
                  }
                };
              return (
                r(),
                t.addEventListener("change", r),
                () => t.removeEventListener("change", r)
              );
            }, []),
            (0, o.useEffect)(() => {
              "dark" === t &&
                (window.localStorage.setItem("theme", "dark"),
                document.documentElement.classList.add("dark")),
                "light" === t &&
                  (window.localStorage.setItem("theme", "light"),
                  document.documentElement.classList.remove("dark"));
            }, [t]),
            [t, e]
          );
        };
      let v = (t) => {
          let { href: e, title: i, className: n = "" } = t,
            s = (0, p.useRouter)();
          return (0, r.jsxs)(u(), {
            href: e,
            className: "".concat(n, " relative group"),
            children: [
              i,
              (0, r.jsx)("span", {
                className:
                  "h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ".concat(
                    s.asPath === e ? "w-full" : "w-0"
                  ),
                children: "\xa0",
              }),
            ],
          });
        },
        y = (t) => {
          let { href: e, title: i, className: n = "", toggle: s } = t,
            o = (0, p.useRouter)();
          return (0, r.jsxs)("button", {
            href: e,
            className: "".concat(
              n,
              " relative group text-light dark:text-dark my-2"
            ),
            onClick: () => {
              s(), o.push(e);
            },
            children: [
              i,
              (0, r.jsx)("span", {
                className:
                  "h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ".concat(
                    o.asPath === e ? "w-full" : "w-0"
                  ),
                children: "\xa0",
              }),
            ],
          });
        };
      var x = () => {
        let [t, e] = g(),
          [i, n] = (0, o.useState)(!1),
          s = () => {
            n(!i);
          };
        return (0, r.jsxs)("header", {
          className:
            "w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light z-10 lg:px-16 md:p-12 sm:p-8  sticky top-0 bg-light/95 dark:bg-dark/95 backdrop:blur",
          children: [
            (0, r.jsxs)("button", {
              className: "flex-col justify-center items-center hidden lg:flex",
              onClick: s,
              children: [
                (0, r.jsx)("span", {
                  className:
                    "bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ".concat(
                      i ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    ),
                }),
                (0, r.jsx)("span", {
                  className:
                    "bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ".concat(
                      i ? "opacity-0" : "opacity-100"
                    ),
                }),
                (0, r.jsx)("span", {
                  className:
                    "bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm  ".concat(
                      i ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    ),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: "w-full flex justify-between items-center lg:hidden",
              children: [
                (0, r.jsxs)("nav", {
                  children: [
                    (0, r.jsx)(v, {
                      href: "/",
                      title: "Home",
                      className: "mr-4",
                    }),
                    (0, r.jsx)(v, {
                      href: "/about",
                      title: "About",
                      className: "mx-4",
                    }),
                    (0, r.jsx)(v, {
                      href: "/projects",
                      title: "Projects",
                      className: "mx-4",
                    }),
                  ],
                }),
                (0, r.jsxs)("nav", {
                  className: "flex items-center justify-center flex-wrap",
                  children: [
                    (0, r.jsx)(c.E.a, {
                      href: "https://twitter.com/_iammrverma",
                      target: "_balnk",
                      className: "w-6 mr-3",
                      whileHover: { y: -2 },
                      whileTap: { scale: 0.9 },
                      children: (0, r.jsx)(m.Zm, {}),
                    }),
                    (0, r.jsx)(c.E.a, {
                      href: "https://github.com/iammrverma",
                      target: "_balnk",
                      className: "w-6 mx-3",
                      whileHover: { y: -2 },
                      whileTap: { scale: 0.9 },
                      children: (0, r.jsx)(m.ET, {}),
                    }),
                    (0, r.jsx)(c.E.a, {
                      href: "https://linkedin.com/in/iammrverma",
                      target: "_balnk",
                      className: "w-6 ml-3",
                      whileHover: { y: -2 },
                      whileTap: { scale: 0.9 },
                      children: (0, r.jsx)(m.nI, {}),
                    }),
                    (0, r.jsx)("button", {
                      onClick: () => e("light" === t ? "dark" : "light"),
                      className:
                        "ml-3 flex items-center justify-center rounded-full p-1 ".concat(
                          "light" === t
                            ? "bg-dark text-light"
                            : "bg-light text-dark"
                        ),
                      children:
                        "dark" === t
                          ? (0, r.jsx)(m.NW, { className: "fill-dark" })
                          : (0, r.jsx)(m.kL, { className: "fill-dark" }),
                    }),
                  ],
                }),
              ],
            }),
            i
              ? (0, r.jsxs)(c.E.div, {
                  initial: { scale: 0, opacity: 1, x: "-50%", y: "-50%" },
                  animate: { scale: 1, opacity: 1 },
                  className:
                    "min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32",
                  children: [
                    (0, r.jsxs)("nav", {
                      className: "flex flex-col justify-center items-center",
                      children: [
                        (0, r.jsx)(y, {
                          href: "/",
                          title: "Home",
                          className: "",
                          toggle: s,
                        }),
                        (0, r.jsx)(y, {
                          href: "/about",
                          title: "About",
                          className: "",
                          toggle: s,
                        }),
                        (0, r.jsx)(y, {
                          href: "/projects",
                          title: "Projects",
                          className: "",
                          toggle: s,
                        }),
                      ],
                    }),
                    (0, r.jsxs)("nav", {
                      className:
                        "flex items-center justify-center flex-wrap mt-2",
                      children: [
                        (0, r.jsx)(c.E.a, {
                          href: "https://twitter.com/_iammrverma",
                          target: "_balnk",
                          className: "w-6 mr-3 sm:mx-1",
                          whileHover: { y: -2 },
                          whileTap: { scale: 0.9 },
                          children: (0, r.jsx)(m.Zm, {}),
                        }),
                        (0, r.jsx)(c.E.a, {
                          href: "https://github.com/iammrverma",
                          target: "_balnk",
                          className:
                            "w-6 mx-3 sm:mx-1 bg-light dark:bg-dark rounded-full",
                          whileHover: { y: -2 },
                          whileTap: { scale: 0.9 },
                          children: (0, r.jsx)(m.ET, {}),
                        }),
                        (0, r.jsx)(c.E.a, {
                          href: "https://linkedin.com/in/iammrverma",
                          target: "_balnk",
                          className: "w-6 ml-3 sm:mx-1",
                          whileHover: { y: -2 },
                          whileTap: { scale: 0.9 },
                          children: (0, r.jsx)(m.nI, {}),
                        }),
                        (0, r.jsx)("button", {
                          onClick: () => e("light" === t ? "dark" : "light"),
                          className:
                            "ml-3 flex items-center justify-center rounded-full p-1 ".concat(
                              "light" === t
                                ? "bg-dark text-light"
                                : "bg-light text-dark"
                            ),
                          children:
                            "dark" === t
                              ? (0, r.jsx)(m.NW, { className: "fill-dark" })
                              : (0, r.jsx)(m.kL, { className: "fill-dark" }),
                        }),
                      ],
                    }),
                  ],
                })
              : null,
            (0, r.jsx)("div", {
              className: "absolute left-[50%] top-2 translate-x-[-50%] ",
              children: (0, r.jsx)(f, {}),
            }),
          ],
        });
      };
      i(1784);
      var b = i(8868);
      function w() {
        let t = (0, o.useRef)(!1);
        return (
          (0, b.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
      var P = i(2074),
        j = i(240),
        M = i(6681);
      class T extends o.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function k({ children: t, isPresent: e }) {
        let i = (0, o.useId)(),
          r = (0, o.useRef)(null),
          n = (0, o.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, o.useInsertionEffect)(() => {
            let { width: t, height: s, top: o, left: a } = n.current;
            if (e || !r.current || !t || !s) return;
            r.current.dataset.motionPopId = i;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${s}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [e]),
          o.createElement(
            T,
            { isPresent: e, childRef: r, sizeRef: n },
            o.cloneElement(t, { ref: r })
          )
        );
      }
      let C = ({
        children: t,
        initial: e,
        isPresent: i,
        onExitComplete: r,
        custom: n,
        presenceAffectsLayout: s,
        mode: a,
      }) => {
        let l = (0, M.h)(A),
          u = (0, o.useId)(),
          h = (0, o.useMemo)(
            () => ({
              id: u,
              initial: e,
              isPresent: i,
              custom: n,
              onExitComplete: (t) => {
                for (let e of (l.set(t, !0), l.values())) if (!e) return;
                r && r();
              },
              register: (t) => (l.set(t, !1), () => l.delete(t)),
            }),
            s ? void 0 : [i]
          );
        return (
          (0, o.useMemo)(() => {
            l.forEach((t, e) => l.set(e, !1));
          }, [i]),
          o.useEffect(() => {
            i || l.size || !r || r();
          }, [i]),
          "popLayout" === a && (t = o.createElement(k, { isPresent: i }, t)),
          o.createElement(j.O.Provider, { value: h }, t)
        );
      };
      function A() {
        return new Map();
      }
      var E = i(5364),
        S = i(5487);
      let L = (t) => t.key || "",
        V = ({
          children: t,
          custom: e,
          initial: i = !0,
          onExitComplete: r,
          exitBeforeEnter: n,
          presenceAffectsLayout: s = !0,
          mode: a = "sync",
        }) => {
          var l;
          (0, S.k)(!n, "Replace exitBeforeEnter with mode='wait'");
          let u =
              (0, o.useContext)(E.p).forceRender ||
              (function () {
                let t = w(),
                  [e, i] = (0, o.useState)(0),
                  r = (0, o.useCallback)(() => {
                    t.current && i(e + 1);
                  }, [e]);
                return [(0, o.useCallback)(() => P.Wi.postRender(r), [r]), e];
              })()[0],
            h = w(),
            c = (function (t) {
              let e = [];
              return (
                o.Children.forEach(t, (t) => {
                  (0, o.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            d = c,
            f = (0, o.useRef)(new Map()).current,
            p = (0, o.useRef)(d),
            m = (0, o.useRef)(new Map()).current,
            g = (0, o.useRef)(!0);
          if (
            ((0, b.L)(() => {
              (g.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let i = L(t);
                    e.set(i, t);
                  });
                })(c, m),
                (p.current = d);
            }),
            (l = () => {
              (g.current = !0), m.clear(), f.clear();
            }),
            (0, o.useEffect)(() => () => l(), []),
            g.current)
          )
            return o.createElement(
              o.Fragment,
              null,
              d.map((t) =>
                o.createElement(
                  C,
                  {
                    key: L(t),
                    isPresent: !0,
                    initial: !!i && void 0,
                    presenceAffectsLayout: s,
                    mode: a,
                  },
                  t
                )
              )
            );
          d = [...d];
          let v = p.current.map(L),
            y = c.map(L),
            x = v.length;
          for (let t = 0; t < x; t++) {
            let e = v[t];
            -1 !== y.indexOf(e) || f.has(e) || f.set(e, void 0);
          }
          return (
            "wait" === a && f.size && (d = []),
            f.forEach((t, i) => {
              if (-1 !== y.indexOf(i)) return;
              let n = m.get(i);
              if (!n) return;
              let l = v.indexOf(i),
                g = t;
              g ||
                ((g = o.createElement(
                  C,
                  {
                    key: L(n),
                    isPresent: !1,
                    onExitComplete: () => {
                      m.delete(i), f.delete(i);
                      let t = p.current.findIndex((t) => t.key === i);
                      if ((p.current.splice(t, 1), !f.size)) {
                        if (((p.current = c), !1 === h.current)) return;
                        u(), r && r();
                      }
                    },
                    custom: e,
                    presenceAffectsLayout: s,
                    mode: a,
                  },
                  n
                )),
                f.set(i, g)),
                d.splice(l, 0, g);
            }),
            (d = d.map((t) => {
              let e = t.key;
              return f.has(e)
                ? t
                : o.createElement(
                    C,
                    {
                      key: L(t),
                      isPresent: !0,
                      presenceAffectsLayout: s,
                      mode: a,
                    },
                    t
                  );
            })),
            o.createElement(
              o.Fragment,
              null,
              f.size ? d : d.map((t) => (0, o.cloneElement)(t))
            )
          );
        };
      var R = i(9008),
        D = i.n(R);
      function N(t) {
        let { Component: e, pageProps: i } = t,
          n = (0, p.useRouter)();
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(D(), {
              children: [
                (0, r.jsx)("meta", {
                  name: "viewport",
                  content: "width=device-width, initial-scale=1",
                }),
                (0, r.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
              ],
            }),
            (0, r.jsxs)("main", {
              className: "".concat(
                s().variable,
                " dark:bg-dark font-mont bg-light w-full min-h-screen"
              ),
              children: [
                (0, r.jsx)(x, {}),
                (0, r.jsx)(V, {
                  mode: "wait",
                  children: (0, r.jsx)(e, { ...i }, n.asPath),
                }),
                (0, r.jsx)(h, {}),
              ],
            }),
          ],
        });
      }
    },
    1784: function () {},
    9494: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Montserrat_a0481a', '__Montserrat_Fallback_a0481a'",
          fontStyle: "normal",
        },
        className: "__className_a0481a",
        variable: "__variable_a0481a",
      };
    },
    9008: function (t, e, i) {
      t.exports = i(7828);
    },
    1664: function (t, e, i) {
      t.exports = i(9577);
    },
    1163: function (t, e, i) {
      t.exports = i(9090);
    },
    72: function (t, e, i) {
      "use strict";
      i.d(e, {
        y: function () {
          return F;
        },
      });
      var r = i(1662);
      let n = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function s(t, e, i, s) {
        if (t === e && i === s) return r.Z;
        let o = (e) =>
          (function (t, e, i, r, s) {
            let o, a;
            let l = 0;
            do (o = n((a = e + (i - e) / 2), r, s) - t) > 0 ? (i = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : n(o(t), e, s));
      }
      let o = s(0.42, 0, 1, 1),
        a = s(0, 0, 0.58, 1),
        l = s(0.42, 0, 0.58, 1),
        u = (t) => Array.isArray(t) && "number" != typeof t[0];
      var h = i(5487),
        c = i(7255),
        d = i(415),
        f = i(5129);
      let p = s(0.33, 1.53, 0.69, 0.99),
        m = (0, f.M)(p),
        g = (0, d.o)(m),
        v = {
          linear: r.Z,
          easeIn: o,
          easeInOut: l,
          easeOut: a,
          circIn: c.Z7,
          circInOut: c.X7,
          circOut: c.Bn,
          backIn: m,
          backInOut: g,
          backOut: p,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * m(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        y = (t) => {
          if (Array.isArray(t)) {
            (0, h.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, i, r, n] = t;
            return s(e, i, r, n);
          }
          return "string" == typeof t
            ? ((0, h.k)(void 0 !== v[t], `Invalid easing type '${t}'`), v[t])
            : t;
        };
      var x = i(4606),
        b = i(533);
      function w({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = u(r) ? r.map(y) : y(r),
          s = { done: !1, value: e[0] },
          o = (i && i.length === e.length ? i : (0, b.Y)(e)).map((e) => e * t),
          a = (0, x.s)(o, e, {
            ease: Array.isArray(n)
              ? n
              : e.map(() => n || l).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var P = i(6917),
        j = i(3038);
      function M(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, j.R)(i - t(r), e - r);
      }
      var T = i(4169);
      function k(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let C = ["duration", "bounce"],
        A = ["stiffness", "damping", "mass"];
      function E(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function S({ keyframes: t, restDelta: e, restSpeed: i, ...r }) {
        let n;
        let s = t[0],
          o = t[t.length - 1],
          a = { done: !1, value: s },
          {
            stiffness: l,
            damping: u,
            mass: c,
            velocity: d,
            duration: f,
            isResolvedFromDuration: p,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!E(t, A) && E(t, C)) {
              let i = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: i = 0,
                mass: r = 1,
              }) {
                let n, s;
                (0, h.K)(
                  t <= (0, P.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let o = 1 - e;
                (o = (0, T.u)(0.05, 1, o)),
                  (t = (0, T.u)(0.01, 10, (0, P.X)(t))),
                  o < 1
                    ? ((n = (e) => {
                        let r = e * o,
                          n = r * t;
                        return 0.001 - ((r - i) / k(e, o)) * Math.exp(-n);
                      }),
                      (s = (e) => {
                        let r = e * o * t,
                          s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                          a = k(Math.pow(e, 2), o);
                        return (
                          ((r * i + i - s) *
                            Math.exp(-r) *
                            (-n(e) + 0.001 > 0 ? -1 : 1)) /
                          a
                        );
                      }))
                    : ((n = (e) =>
                        -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                      (s = (e) => t * t * (i - e) * Math.exp(-e * t)));
                let a = (function (t, e, i) {
                  let r = i;
                  for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                  return r;
                })(n, s, 5 / t);
                if (((t = (0, P.w)(t)), isNaN(a)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(a, 2) * r;
                  return {
                    stiffness: e,
                    damping: 2 * o * Math.sqrt(r * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...i,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(r),
          m = d ? -(0, P.X)(d) : 0,
          g = u / (2 * Math.sqrt(l * c)),
          v = o - s,
          y = (0, P.X)(Math.sqrt(l / c)),
          x = 5 > Math.abs(v);
        if ((i || (i = x ? 0.01 : 2), e || (e = x ? 0.005 : 0.5), g < 1)) {
          let t = k(y, g);
          n = (e) =>
            o -
            Math.exp(-g * y * e) *
              (((m + g * y * v) / t) * Math.sin(t * e) + v * Math.cos(t * e));
        } else if (1 === g)
          n = (t) => o - Math.exp(-y * t) * (v + (m + y * v) * t);
        else {
          let t = y * Math.sqrt(g * g - 1);
          n = (e) => {
            let i = Math.exp(-g * y * e),
              r = Math.min(t * e, 300);
            return (
              o -
              (i * ((m + g * y * v) * Math.sinh(r) + t * v * Math.cosh(r))) / t
            );
          };
        }
        return {
          calculatedDuration: (p && f) || null,
          next: (t) => {
            let r = n(t);
            if (p) a.done = t >= f;
            else {
              let s = m;
              0 !== t && (s = g < 1 ? M(n, t, r) : 0);
              let l = Math.abs(s) <= i,
                u = Math.abs(o - r) <= e;
              a.done = l && u;
            }
            return (a.value = a.done ? o : r), a;
          },
        };
      }
      function L({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let c, d;
        let f = t[0],
          p = { done: !1, value: f },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          v = i * e,
          y = f + v,
          x = void 0 === o ? y : o(y);
        x !== y && (v = x - f);
        let b = (t) => -v * Math.exp(-t / r),
          w = (t) => x + b(t),
          P = (t) => {
            let e = b(t),
              i = w(t);
            (p.done = Math.abs(e) <= u), (p.value = p.done ? x : i);
          },
          j = (t) => {
            m(p.value) &&
              ((c = t),
              (d = S({
                keyframes: [p.value, g(p.value)],
                velocity: M(w, t, p.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          j(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== c || ((e = !0), P(t), j(t)),
              void 0 !== c && t > c)
                ? d.next(t - c)
                : (e || P(t), p);
            },
          }
        );
      }
      var V = i(2074);
      let R = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => V.Wi.update(e, !0),
          stop: () => (0, V.Pn)(e),
          now: () =>
            V.frameData.isProcessing
              ? V.frameData.timestamp
              : performance.now(),
        };
      };
      function D(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      let N = { decay: L, inertia: L, tween: w, keyframes: w, spring: S };
      function F({
        autoplay: t = !0,
        delay: e = 0,
        driver: i = R,
        keyframes: r,
        type: n = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: h,
        onUpdate: c,
        ...d
      }) {
        let f,
          p,
          m,
          g,
          v,
          y = 1,
          b = !1,
          j = () => {
            p = new Promise((t) => {
              f = t;
            });
          };
        j();
        let M = N[n] || w;
        M !== w &&
          "number" != typeof r[0] &&
          ((g = (0, x.s)([0, 100], r, { clamp: !1 })), (r = [0, 100]));
        let k = M({ ...d, keyframes: r });
        "mirror" === a &&
          (v = M({
            ...d,
            keyframes: [...r].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let C = "idle",
          A = null,
          E = null,
          S = null;
        null === k.calculatedDuration && s && (k.calculatedDuration = D(k));
        let { calculatedDuration: L } = k,
          V = 1 / 0,
          F = 1 / 0;
        null !== L && (F = (V = L + o) * (s + 1) - o);
        let B = 0,
          O = (t) => {
            if (null === E) return;
            y > 0 && (E = Math.min(E, t)),
              y < 0 && (E = Math.min(t - F / y, E));
            let i =
                (B = null !== A ? A : Math.round(t - E) * y) -
                e * (y >= 0 ? 1 : -1),
              n = y >= 0 ? i < 0 : i > F;
            (B = Math.max(i, 0)), "finished" === C && null === A && (B = F);
            let l = B,
              u = k;
            if (s) {
              let t = B / V,
                e = Math.floor(t),
                i = t % 1;
              !i && t >= 1 && (i = 1), 1 === i && e--;
              let r = !!((e = Math.min(e, s + 1)) % 2);
              r &&
                ("reverse" === a
                  ? ((i = 1 - i), o && (i -= o / V))
                  : "mirror" === a && (u = v));
              let n = (0, T.u)(0, 1, i);
              B > F && (n = "reverse" === a && r ? 1 : 0), (l = n * V);
            }
            let h = n ? { done: !1, value: r[0] } : u.next(l);
            g && (h.value = g(h.value));
            let { done: d } = h;
            n || null === L || (d = y >= 0 ? B >= F : B <= 0);
            let f = null === A && ("finished" === C || ("running" === C && d));
            return c && c(h.value), f && W(), h;
          },
          z = () => {
            m && m.stop(), (m = void 0);
          },
          I = () => {
            (C = "idle"), z(), f(), j(), (E = S = null);
          },
          W = () => {
            (C = "finished"), h && h(), z(), f();
          },
          U = () => {
            if (b) return;
            m || (m = i(O));
            let t = m.now();
            l && l(),
              null !== A ? (E = t - A) : (E && "finished" !== C) || (E = t),
              "finished" === C && j(),
              (S = E),
              (A = null),
              (C = "running"),
              m.start();
          };
        t && U();
        let $ = {
          then: (t, e) => p.then(t, e),
          get time() {
            return (0, P.X)(B);
          },
          set time(newTime) {
            (B = newTime = (0, P.w)(newTime)),
              null === A && m && 0 !== y
                ? (E = m.now() - newTime / y)
                : (A = newTime);
          },
          get duration() {
            let t = null === k.calculatedDuration ? D(k) : k.calculatedDuration;
            return (0, P.X)(t);
          },
          get speed() {
            return y;
          },
          set speed(newSpeed) {
            if (newSpeed === y || !m) return;
            (y = newSpeed), ($.time = (0, P.X)(B));
          },
          get state() {
            return C;
          },
          play: U,
          pause: () => {
            (C = "paused"), (A = B);
          },
          stop: () => {
            (b = !0), "idle" !== C && ((C = "idle"), u && u(), I());
          },
          cancel: () => {
            null !== S && O(S), I();
          },
          complete: () => {
            C = "finished";
          },
          sample: (t) => ((E = 0), O(t)),
        };
        return $;
      }
    },
    5364: function (t, e, i) {
      "use strict";
      i.d(e, {
        p: function () {
          return r;
        },
      });
      let r = (0, i(7294).createContext)({});
    },
    6014: function (t, e, i) {
      "use strict";
      i.d(e, {
        _: function () {
          return r;
        },
      });
      let r = (0, i(7294).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    240: function (t, e, i) {
      "use strict";
      i.d(e, {
        O: function () {
          return r;
        },
      });
      let r = (0, i(7294).createContext)(null);
    },
    7255: function (t, e, i) {
      "use strict";
      i.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var r = i(415),
        n = i(5129);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, n.M)(s),
        a = (0, r.o)(o);
    },
    415: function (t, e, i) {
      "use strict";
      i.d(e, {
        o: function () {
          return r;
        },
      });
      let r = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    5129: function (t, e, i) {
      "use strict";
      i.d(e, {
        M: function () {
          return r;
        },
      });
      let r = (t) => (e) => 1 - t(1 - e);
    },
    2074: function (t, e, i) {
      "use strict";
      i.d(e, {
        Pn: function () {
          return o;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return a;
        },
        S6: function () {
          return l;
        },
      });
      var r = i(1662);
      let n = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: s,
          cancel: o,
          state: a,
          steps: l,
        } = (function (t, e) {
          let i = !1,
            r = !0,
            s = { delta: 0, timestamp: 0, isProcessing: !1 },
            o = n.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = [],
                    i = [],
                    r = 0,
                    n = !1,
                    s = !1,
                    o = new WeakSet(),
                    a = {
                      schedule: (t, s = !1, a = !1) => {
                        let l = a && n,
                          u = l ? e : i;
                        return (
                          s && o.add(t),
                          -1 === u.indexOf(t) &&
                            (u.push(t), l && n && (r = e.length)),
                          t
                        );
                      },
                      cancel: (t) => {
                        let e = i.indexOf(t);
                        -1 !== e && i.splice(e, 1), o.delete(t);
                      },
                      process: (l) => {
                        if (n) {
                          s = !0;
                          return;
                        }
                        if (
                          ((n = !0),
                          ([e, i] = [i, e]),
                          (i.length = 0),
                          (r = e.length))
                        )
                          for (let i = 0; i < r; i++) {
                            let r = e[i];
                            r(l), o.has(r) && (a.schedule(r), t());
                          }
                        (n = !1), s && ((s = !1), a.process(l));
                      },
                    };
                  return a;
                })(() => (i = !0))),
                t
              ),
              {}
            ),
            a = (t) => o[t].process(s),
            l = (o) => {
              (i = !1),
                (s.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(o - s.timestamp, 40), 1)),
                (s.timestamp = o),
                (s.isProcessing = !0),
                n.forEach(a),
                (s.isProcessing = !1),
                i && e && ((r = !1), t(l));
            },
            u = () => {
              (i = !0), (r = !0), s.isProcessing || t(l);
            };
          return {
            schedule: n.reduce((t, e) => {
              let r = o[e];
              return (
                (t[e] = (t, e = !1, n = !1) => (i || u(), r.schedule(t, e, n))),
                t
              );
            }, {}),
            cancel: (t) => n.forEach((e) => o[e].cancel(t)),
            state: s,
            steps: o,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : r.Z,
          !0
        );
    },
    4509: function (t, e, i) {
      "use strict";
      let r, n;
      i.d(e, {
        E: function () {
          return rV;
        },
      });
      var s,
        o,
        a = i(7294),
        l = i(6014);
      let u = (0, a.createContext)({});
      var h = i(240),
        c = i(8868);
      let d = (0, a.createContext)({ strict: !1 });
      function f(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function p(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      function m(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      let g = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        v = ["initial", ...g];
      function y(t) {
        return m(t.animate) || v.some((e) => p(t[e]));
      }
      function x(t) {
        return !!(y(t) || t.variants);
      }
      function b(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let w = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        P = {};
      for (let t in w) P[t] = { isEnabled: (e) => w[t].some((t) => !!e[t]) };
      var j = i(1741),
        M = i(5364);
      let T = (0, a.createContext)({}),
        k = Symbol.for("motionComponentSymbol"),
        C = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function A(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (C.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      let E = {},
        S = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        L = new Set(S);
      function V(t, { layout: e, layoutId: i }) {
        return (
          L.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!E[t] || "opacity" === t))
        );
      }
      var R = i(406);
      let D = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        N = S.length;
      var F = i(7630);
      let B = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var O = i(1649),
        z = i(6190);
      let I = { ...O.Rx, transform: Math.round },
        W = {
          borderWidth: z.px,
          borderTopWidth: z.px,
          borderRightWidth: z.px,
          borderBottomWidth: z.px,
          borderLeftWidth: z.px,
          borderRadius: z.px,
          radius: z.px,
          borderTopLeftRadius: z.px,
          borderTopRightRadius: z.px,
          borderBottomRightRadius: z.px,
          borderBottomLeftRadius: z.px,
          width: z.px,
          maxWidth: z.px,
          height: z.px,
          maxHeight: z.px,
          size: z.px,
          top: z.px,
          right: z.px,
          bottom: z.px,
          left: z.px,
          padding: z.px,
          paddingTop: z.px,
          paddingRight: z.px,
          paddingBottom: z.px,
          paddingLeft: z.px,
          margin: z.px,
          marginTop: z.px,
          marginRight: z.px,
          marginBottom: z.px,
          marginLeft: z.px,
          rotate: z.RW,
          rotateX: z.RW,
          rotateY: z.RW,
          rotateZ: z.RW,
          scale: O.bA,
          scaleX: O.bA,
          scaleY: O.bA,
          scaleZ: O.bA,
          skew: z.RW,
          skewX: z.RW,
          skewY: z.RW,
          distance: z.px,
          translateX: z.px,
          translateY: z.px,
          translateZ: z.px,
          x: z.px,
          y: z.px,
          z: z.px,
          perspective: z.px,
          transformPerspective: z.px,
          opacity: O.Fq,
          originX: z.$C,
          originY: z.$C,
          originZ: z.px,
          zIndex: I,
          fillOpacity: O.Fq,
          strokeOpacity: O.Fq,
          numOctaves: I,
        };
      function U(t, e, i, r) {
        let { style: n, vars: s, transform: o, transformOrigin: a } = t,
          l = !1,
          u = !1,
          h = !0;
        for (let t in e) {
          let i = e[t];
          if ((0, F.f9)(t)) {
            s[t] = i;
            continue;
          }
          let r = W[t],
            c = B(i, r);
          if (L.has(t)) {
            if (((l = !0), (o[t] = c), !h)) continue;
            i !== (r.default || 0) && (h = !1);
          } else t.startsWith("origin") ? ((u = !0), (a[t] = c)) : (n[t] = c);
        }
        if (
          (!e.transform &&
            (l || r
              ? (n.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: i = !0,
                  },
                  r,
                  n
                ) {
                  let s = "";
                  for (let e = 0; e < N; e++) {
                    let i = S[e];
                    if (void 0 !== t[i]) {
                      let e = D[i] || i;
                      s += `${e}(${t[i]}) `;
                    }
                  }
                  return (
                    e && !t.z && (s += "translateZ(0)"),
                    (s = s.trim()),
                    n ? (s = n(t, r ? "" : s)) : i && r && (s = "none"),
                    s
                  );
                })(t.transform, i, h, r))
              : n.transform && (n.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = a;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let $ = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function _(t, e, i) {
        for (let r in e) (0, R.i)(e[r]) || V(r, i) || (t[r] = e[r]);
      }
      let H = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function Z(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          H.has(t)
        );
      }
      let X = (t) => !Z(t);
      try {
        (s = require("@emotion/is-prop-valid").default) &&
          (X = (t) => (t.startsWith("on") ? !Z(t) : s(t)));
      } catch (t) {}
      function Y(t, e, i) {
        return "string" == typeof t ? t : z.px.transform(e + i * t);
      }
      let q = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        K = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function G(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          originX: n,
          originY: s,
          pathLength: o,
          pathSpacing: a = 1,
          pathOffset: l = 0,
          ...u
        },
        h,
        c,
        d
      ) {
        if ((U(t, u, h, d), c)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: f, style: p, dimensions: m } = t;
        f.transform && (m && (p.transform = f.transform), delete f.transform),
          m &&
            (void 0 !== n || void 0 !== s || p.transform) &&
            (p.transformOrigin = (function (t, e, i) {
              let r = Y(e, t.x, t.width),
                n = Y(i, t.y, t.height);
              return `${r} ${n}`;
            })(m, void 0 !== n ? n : 0.5, void 0 !== s ? s : 0.5)),
          void 0 !== e && (f.x = e),
          void 0 !== i && (f.y = i),
          void 0 !== r && (f.scale = r),
          void 0 !== o &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? q : K;
              t[s.offset] = z.px.transform(-r);
              let o = z.px.transform(e),
                a = z.px.transform(i);
              t[s.array] = `${o} ${a}`;
            })(f, o, a, l, !1);
      }
      let J = () => ({ ...$(), attrs: {} }),
        Q = (t) => "string" == typeof t && "svg" === t.toLowerCase(),
        tt = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      function te(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      let ti = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function tr(t, e, i, r) {
        for (let i in (te(t, e, void 0, r), e.attrs))
          t.setAttribute(ti.has(i) ? i : tt(i), e.attrs[i]);
      }
      function tn(t, e) {
        let { style: i } = t,
          r = {};
        for (let n in i)
          ((0, R.i)(i[n]) || (e.style && (0, R.i)(e.style[n])) || V(n, t)) &&
            (r[n] = i[n]);
        return r;
      }
      function ts(t, e) {
        let i = tn(t, e);
        for (let r in t)
          ((0, R.i)(t[r]) || (0, R.i)(e[r])) &&
            (i[
              -1 !== S.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = t[r]);
        return i;
      }
      function to(t, e, i, r = {}, n = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== i ? i : t.custom, r, n)),
          e
        );
      }
      var ta = i(6681);
      let tl = (t) => Array.isArray(t),
        tu = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        th = (t) => (tl(t) ? t[t.length - 1] || 0 : t);
      function tc(t) {
        let e = (0, R.i)(t) ? t.get() : t;
        return tu(e) ? e.toValue() : e;
      }
      let td = (t) => (e, i) => {
          let r = (0, a.useContext)(u),
            n = (0, a.useContext)(h.O),
            s = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: i,
                },
                r,
                n,
                s
              ) {
                let o = {
                  latestValues: (function (t, e, i, r) {
                    let n = {},
                      s = r(t, {});
                    for (let t in s) n[t] = tc(s[t]);
                    let { initial: o, animate: a } = t,
                      l = y(t),
                      u = x(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let h = !!i && !1 === i.initial,
                      c = (h = h || !1 === o) ? a : o;
                    return (
                      c &&
                        "boolean" != typeof c &&
                        !m(c) &&
                        (Array.isArray(c) ? c : [c]).forEach((e) => {
                          let i = to(t, e);
                          if (!i) return;
                          let { transitionEnd: r, transition: s, ...o } = i;
                          for (let t in o) {
                            let e = o[t];
                            if (Array.isArray(e)) {
                              let t = h ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (n[t] = e);
                          }
                          for (let t in r) n[t] = r[t];
                        }),
                      n
                    );
                  })(r, n, s, t),
                  renderState: e(),
                };
                return i && (o.mount = (t) => i(r, t, o)), o;
              })(t, e, r, n);
          return i ? s() : (0, ta.h)(s);
        },
        tf = {
          useVisualState: td({
            scrapeMotionValuesFromProps: ts,
            createRenderState: J,
            onMount: (t, e, { renderState: i, latestValues: r }) => {
              try {
                i.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                i.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              G(
                i,
                r,
                { enableHardwareAcceleration: !1 },
                Q(e.tagName),
                t.transformTemplate
              ),
                tr(e, i);
            },
          }),
        },
        tp = {
          useVisualState: td({
            scrapeMotionValuesFromProps: tn,
            createRenderState: $,
          }),
        };
      function tm(t, e, i, r = { passive: !0 }) {
        return t.addEventListener(e, i, r), () => t.removeEventListener(e, i);
      }
      let tg = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function tv(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let ty = (t) => (e) => tg(e) && t(e, tv(e));
      function tx(t, e, i, r) {
        return tm(t, e, ty(i), r);
      }
      var tb = i(3624);
      function tw(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let tP = tw("dragHorizontal"),
        tj = tw("dragVertical");
      function tM(t) {
        let e = !1;
        if ("y" === t) e = tj();
        else if ("x" === t) e = tP();
        else {
          let t = tP(),
            i = tj();
          t && i
            ? (e = () => {
                t(), i();
              })
            : (t && t(), i && i());
        }
        return e;
      }
      function tT() {
        let t = tM(!0);
        return !t || (t(), !1);
      }
      class tk {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      var tC = i(2074);
      function tA(t, e) {
        let i = "onHover" + (e ? "Start" : "End");
        return tx(
          t.current,
          "pointer" + (e ? "enter" : "leave"),
          (r, n) => {
            if ("touch" === r.type || tT()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[i] && tC.Wi.update(() => s[i](r, n));
          },
          { passive: !t.getProps()[i] }
        );
      }
      class tE extends tk {
        mount() {
          this.unmount = (0, tb.z)(tA(this.node, !0), tA(this.node, !1));
        }
        unmount() {}
      }
      class tS extends tk {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, tb.z)(
            tm(this.node.current, "focus", () => this.onFocus()),
            tm(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      let tL = (t, e) => !!e && (t === e || tL(t, e.parentElement));
      var tV = i(1662);
      function tR(t, e) {
        if (!e) return;
        let i = new PointerEvent("pointer" + t);
        e(i, tv(i));
      }
      class tD extends tk {
        constructor() {
          super(...arguments),
            (this.removeStartListeners = tV.Z),
            (this.removeEndListeners = tV.Z),
            (this.removeAccessibleListeners = tV.Z),
            (this.startPointerPress = (t, e) => {
              if ((this.removeEndListeners(), this.isPressing)) return;
              let i = this.node.getProps(),
                r = tx(
                  window,
                  "pointerup",
                  (t, e) => {
                    if (!this.checkPressEnd()) return;
                    let { onTap: i, onTapCancel: r } = this.node.getProps();
                    tC.Wi.update(() => {
                      tL(this.node.current, t.target)
                        ? i && i(t, e)
                        : r && r(t, e);
                    });
                  },
                  { passive: !(i.onTap || i.onPointerUp) }
                ),
                n = tx(
                  window,
                  "pointercancel",
                  (t, e) => this.cancelPress(t, e),
                  { passive: !(i.onTapCancel || i.onPointerCancel) }
                );
              (this.removeEndListeners = (0, tb.z)(r, n)),
                this.startPress(t, e);
            }),
            (this.startAccessiblePress = () => {
              let t = tm(this.node.current, "keydown", (t) => {
                  "Enter" !== t.key ||
                    this.isPressing ||
                    (this.removeEndListeners(),
                    (this.removeEndListeners = tm(
                      this.node.current,
                      "keyup",
                      (t) => {
                        "Enter" === t.key &&
                          this.checkPressEnd() &&
                          tR("up", (t, e) => {
                            let { onTap: i } = this.node.getProps();
                            i && tC.Wi.update(() => i(t, e));
                          });
                      }
                    )),
                    tR("down", (t, e) => {
                      this.startPress(t, e);
                    }));
                }),
                e = tm(this.node.current, "blur", () => {
                  this.isPressing &&
                    tR("cancel", (t, e) => this.cancelPress(t, e));
                });
              this.removeAccessibleListeners = (0, tb.z)(t, e);
            });
        }
        startPress(t, e) {
          this.isPressing = !0;
          let { onTapStart: i, whileTap: r } = this.node.getProps();
          r &&
            this.node.animationState &&
            this.node.animationState.setActive("whileTap", !0),
            i && tC.Wi.update(() => i(t, e));
        }
        checkPressEnd() {
          return (
            this.removeEndListeners(),
            (this.isPressing = !1),
            this.node.getProps().whileTap &&
              this.node.animationState &&
              this.node.animationState.setActive("whileTap", !1),
            !tT()
          );
        }
        cancelPress(t, e) {
          if (!this.checkPressEnd()) return;
          let { onTapCancel: i } = this.node.getProps();
          i && tC.Wi.update(() => i(t, e));
        }
        mount() {
          let t = this.node.getProps(),
            e = tx(this.node.current, "pointerdown", this.startPointerPress, {
              passive: !(t.onTapStart || t.onPointerStart),
            }),
            i = tm(this.node.current, "focus", this.startAccessiblePress);
          this.removeStartListeners = (0, tb.z)(e, i);
        }
        unmount() {
          this.removeStartListeners(),
            this.removeEndListeners(),
            this.removeAccessibleListeners();
        }
      }
      let tN = new WeakMap(),
        tF = new WeakMap(),
        tB = (t) => {
          let e = tN.get(t.target);
          e && e(t);
        },
        tO = (t) => {
          t.forEach(tB);
        },
        tz = { some: 0, all: 1 };
      class tI extends tk {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : tz[r],
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              tF.has(i) || tF.set(i, {});
              let r = tF.get(i),
                n = JSON.stringify(e);
              return (
                r[n] ||
                  (r[n] = new IntersectionObserver(tO, { root: t, ...e })),
                r[n]
              );
            })(e);
            return (
              tN.set(t, i),
              r.observe(t),
              () => {
                tN.delete(t), r.unobserve(t);
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? i : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      function tW(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function tU(t, e, i) {
        let r = t.getProps();
        return to(
          r,
          e,
          void 0 !== i ? i : r.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, i) => (e[i] = t.getVelocity())), e;
          })(t)
        );
      }
      let t$ = "data-" + tt("framerAppearId");
      var t_ = i(5487),
        tH = i(6917);
      let tZ = { current: !1 },
        tX = (t) => Array.isArray(t) && "number" == typeof t[0],
        tY = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        tq = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: tY([0, 0.65, 0.55, 1]),
          circOut: tY([0.55, 0, 1, 0.45]),
          backIn: tY([0.31, 0.01, 0.66, -0.59]),
          backOut: tY([0.33, 1.53, 0.69, 0.99]),
        };
      var tK = i(72);
      let tG =
          ((o = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === n && (n = o()), n)),
        tJ = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        tQ = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && tq[e]) ||
              tX(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease),
        t1 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        t0 = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        t2 = { type: "keyframes", duration: 0.8 },
        t5 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        t3 = (t, { keyframes: e }) =>
          e.length > 2
            ? t2
            : L.has(t)
            ? t.startsWith("scale")
              ? t0(e[1])
              : t1
            : t5;
      var t4 = i(1550);
      let t6 = (t, e) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (t4.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var t8 = i(6430);
      let t7 = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function t9(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(t8.KP) || [];
        if (!r) return t;
        let n = i.replace(r, ""),
          s = t7.has(e) ? 1 : 0;
        return r !== i && (s *= 100), e + "(" + s + n + ")";
      }
      let et = /([a-z-]*)\(.*?\)/g,
        ee = {
          ...t4.P,
          getAnimatableNone: (t) => {
            let e = t.match(et);
            return e ? e.map(t9).join(" ") : t;
          },
        };
      var ei = i(5385);
      let er = {
          ...W,
          color: ei.$,
          backgroundColor: ei.$,
          outlineColor: ei.$,
          fill: ei.$,
          stroke: ei.$,
          borderColor: ei.$,
          borderTopColor: ei.$,
          borderRightColor: ei.$,
          borderBottomColor: ei.$,
          borderLeftColor: ei.$,
          filter: ee,
          WebkitFilter: ee,
        },
        en = (t) => er[t];
      function es(t, e) {
        let i = en(t);
        return (
          i !== ee && (i = t4.P),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let eo = (t) => /^0[^.\s]+$/.test(t);
      function ea(t, e) {
        return t[e] || t.default || t;
      }
      let el =
        (t, e, i, r = {}) =>
        (n) => {
          let s = ea(r, t) || {},
            o = s.delay || r.delay || 0,
            { elapsed: a = 0 } = r;
          a -= (0, tH.w)(o);
          let l = (function (t, e, i, r) {
              let n, s;
              let o = t6(e, i);
              n = Array.isArray(i) ? [...i] : [null, i];
              let a = void 0 !== r.from ? r.from : t.get(),
                l = [];
              for (let t = 0; t < n.length; t++) {
                var u;
                null === n[t] && (n[t] = 0 === t ? a : n[t - 1]),
                  ("number" == typeof (u = n[t])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || eo(u)
                    : void 0) && l.push(t),
                  "string" == typeof n[t] &&
                    "none" !== n[t] &&
                    "0" !== n[t] &&
                    (s = n[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) n[l[t]] = es(e, s);
              return n;
            })(e, t, i, s),
            u = l[0],
            h = l[l.length - 1],
            c = t6(t, u),
            d = t6(t, h);
          (0, t_.K)(
            c === d,
            `You are trying to animate ${t} from "${u}" to "${h}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${h} via the \`style\` property.`
          );
          let f = {
            keyframes: l,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...s,
            delay: -a,
            onUpdate: (t) => {
              e.set(t), s.onUpdate && s.onUpdate(t);
            },
            onComplete: () => {
              n(), s.onComplete && s.onComplete();
            },
          };
          if (
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(s) && (f = { ...f, ...t3(t, f) }),
            f.duration && (f.duration = (0, tH.w)(f.duration)),
            f.repeatDelay && (f.repeatDelay = (0, tH.w)(f.repeatDelay)),
            !c || !d || tZ.current || !1 === s.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: i,
              onComplete: r,
            }) {
              let n = () => (
                i && i(t[t.length - 1]),
                r && r(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: tV.Z,
                  pause: tV.Z,
                  stop: tV.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: tV.Z,
                  complete: tV.Z,
                }
              );
              return e
                ? (0, tK.y)({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: n,
                  })
                : n();
            })(tZ.current ? { ...f, delay: 0 } : f);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let i = (function (t, e, { onUpdate: i, onComplete: r, ...n }) {
              let s, o;
              if (
                !(
                  tG() &&
                  tJ.has(e) &&
                  !n.repeatDelay &&
                  "mirror" !== n.repeatType &&
                  0 !== n.damping &&
                  "inertia" !== n.type
                )
              )
                return !1;
              let a = !1,
                l = () => {
                  o = new Promise((t) => {
                    s = t;
                  });
                };
              l();
              let { keyframes: u, duration: h = 300, ease: c, times: d } = n;
              if (tQ(e, n)) {
                let t = (0, tK.y)({ ...n, repeat: 0, delay: 0 }),
                  e = { done: !1, value: u[0] },
                  i = [],
                  r = 0;
                for (; !e.done && r < 2e4; )
                  (e = t.sample(r)), i.push(e.value), (r += 10);
                (d = void 0), (u = i), (h = r - 10), (c = "linear");
              }
              let f = (function (
                  t,
                  e,
                  i,
                  {
                    delay: r = 0,
                    duration: n,
                    repeat: s = 0,
                    repeatType: o = "loop",
                    ease: a,
                    times: l,
                  } = {}
                ) {
                  let u = { [e]: i };
                  l && (u.offset = l);
                  let h = (function t(e) {
                    if (e)
                      return tX(e)
                        ? tY(e)
                        : Array.isArray(e)
                        ? e.map(t)
                        : tq[e];
                  })(a);
                  return (
                    Array.isArray(h) && (u.easing = h),
                    t.animate(u, {
                      delay: r,
                      duration: n,
                      easing: Array.isArray(h) ? "linear" : h,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === o ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, u, {
                  ...n,
                  duration: h,
                  ease: c,
                  times: d,
                }),
                p = () => f.cancel(),
                m = () => {
                  tC.Wi.update(p), s(), l();
                };
              return (
                (f.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: i = "loop" }) {
                      let r =
                        e && "loop" !== i && e % 2 == 1 ? 0 : t.length - 1;
                      return t[r];
                    })(u, n)
                  ),
                    r && r(),
                    m();
                }),
                {
                  then: (t, e) => o.then(t, e),
                  get timeline() {
                    return f.timeline;
                  },
                  set timeline(timeline) {
                    (f.timeline = timeline), (f.onfinish = null);
                  },
                  get time() {
                    return (0, tH.X)(f.currentTime || 0);
                  },
                  set time(newTime) {
                    f.currentTime = (0, tH.w)(newTime);
                  },
                  get speed() {
                    return f.playbackRate;
                  },
                  set speed(newSpeed) {
                    f.playbackRate = newSpeed;
                  },
                  get duration() {
                    return (0, tH.X)(h);
                  },
                  play: () => {
                    a || (f.play(), (0, tC.Pn)(p));
                  },
                  pause: () => f.pause(),
                  stop: () => {
                    if (((a = !0), "idle" === f.playState)) return;
                    let { currentTime: e } = f;
                    if (e) {
                      let i = (0, tK.y)({ ...n, autoplay: !1 });
                      t.setWithVelocity(
                        i.sample(e - 10).value,
                        i.sample(e).value,
                        10
                      );
                    }
                    m();
                  },
                  complete: () => f.finish(),
                  cancel: m,
                }
              );
            })(e, t, f);
            if (i) return i;
          }
          return (0, tK.y)(f);
        };
      function eu(t) {
        return !!((0, R.i)(t) && t.add);
      }
      let eh = (t) => /^\-?\d*\.?\d+$/.test(t);
      var ec = i(3234);
      let ed = (t) => (e) => e.test(t),
        ef = [
          O.Rx,
          z.px,
          z.aQ,
          z.RW,
          z.vw,
          z.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        ep = (t) => ef.find(ed(t)),
        em = [...ef, ei.$, t4.P],
        eg = (t) => em.find(ed(t));
      function ev(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        let {
            transition: s = t.getDefaultTransition(),
            transitionEnd: o,
            ...a
          } = t.makeTargetAnimatable(e),
          l = t.getValue("willChange");
        r && (s = r);
        let u = [],
          h = n && t.animationState && t.animationState.getState()[n];
        for (let e in a) {
          let r = t.getValue(e),
            n = a[e];
          if (
            !r ||
            void 0 === n ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), r;
              })(h, e))
          )
            continue;
          let o = { delay: i, elapsed: 0, ...s };
          if (window.HandoffAppearAnimations && !r.hasAnimated) {
            let i = t.getProps()[t$];
            i && (o.elapsed = window.HandoffAppearAnimations(i, e, r, tC.Wi));
          }
          r.start(
            el(e, r, n, t.shouldReduceMotion && L.has(e) ? { type: !1 } : o)
          );
          let c = r.animation;
          eu(l) && (l.add(e), c.then(() => l.remove(e))), u.push(c);
        }
        return (
          o &&
            Promise.all(u).then(() => {
              o &&
                (function (t, e) {
                  let i = tU(t, e),
                    {
                      transitionEnd: r = {},
                      transition: n = {},
                      ...s
                    } = i ? t.makeTargetAnimatable(i, !1) : {};
                  for (let e in (s = { ...s, ...r })) {
                    let i = th(s[e]);
                    t.hasValue(e)
                      ? t.getValue(e).set(i)
                      : t.addValue(e, (0, ec.B)(i));
                  }
                })(t, o);
            }),
          u
        );
      }
      function ey(t, e, i = {}) {
        let r = tU(t, e, i.custom),
          { transition: n = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (n = i.transitionOverride);
        let s = r ? () => Promise.all(ev(t, r, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = n;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(ex)
                        .forEach((t, r) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              ey(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = n;
        if (!a) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function ex(t, e) {
        return t.sortNodePosition(e);
      }
      let eb = [...g].reverse(),
        ew = g.length;
      function eP(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      class ej extends tk {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => ey(t, e, i)));
                          else if ("string" == typeof e) r = ey(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? tU(t, e, i.custom) : e;
                            r = Promise.all(ev(t, n, i));
                          }
                          return r.then(() => t.notify("AnimationComplete", e));
                        })(t, e, i)
                      )
                    ),
                  i = {
                    animate: eP(!0),
                    whileInView: eP(),
                    whileHover: eP(),
                    whileTap: eP(),
                    whileDrag: eP(),
                    whileFocus: eP(),
                    exit: eP(),
                  },
                  r = !0,
                  n = (e, i) => {
                    let r = tU(t, i);
                    if (r) {
                      let { transition: t, transitionEnd: i, ...n } = r;
                      e = { ...e, ...n, ...i };
                    }
                    return e;
                  };
                function s(s, o) {
                  let a = t.getProps(),
                    l = t.getVariantContext(!0) || {},
                    u = [],
                    h = new Set(),
                    c = {},
                    d = 1 / 0;
                  for (let e = 0; e < ew; e++) {
                    var f;
                    let g = eb[e],
                      v = i[g],
                      y = void 0 !== a[g] ? a[g] : l[g],
                      x = p(y),
                      b = g === o ? v.isActive : null;
                    !1 === b && (d = e);
                    let w = y === l[g] && y !== a[g] && x;
                    if (
                      (w && r && t.manuallyAnimateOnMount && (w = !1),
                      (v.protectedKeys = { ...c }),
                      (!v.isActive && null === b) ||
                        (!y && !v.prevProp) ||
                        m(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let P =
                        ((f = v.prevProp),
                        "string" == typeof y
                          ? y !== f
                          : !!Array.isArray(y) && !tW(y, f)),
                      j =
                        P || (g === o && v.isActive && !w && x) || (e > d && x),
                      M = Array.isArray(y) ? y : [y],
                      T = M.reduce(n, {});
                    !1 === b && (T = {});
                    let { prevResolvedValues: k = {} } = v,
                      C = { ...k, ...T },
                      A = (t) => {
                        (j = !0), h.delete(t), (v.needsAnimating[t] = !0);
                      };
                    for (let t in C) {
                      let e = T[t],
                        i = k[t];
                      c.hasOwnProperty(t) ||
                        (e !== i
                          ? tl(e) && tl(i)
                            ? !tW(e, i) || P
                              ? A(t)
                              : (v.protectedKeys[t] = !0)
                            : void 0 !== e
                            ? A(t)
                            : h.add(t)
                          : void 0 !== e && h.has(t)
                          ? A(t)
                          : (v.protectedKeys[t] = !0));
                    }
                    (v.prevProp = y),
                      (v.prevResolvedValues = T),
                      v.isActive && (c = { ...c, ...T }),
                      r && t.blockInitialAnimation && (j = !1),
                      j &&
                        !w &&
                        u.push(
                          ...M.map((t) => ({
                            animation: t,
                            options: { type: g, ...s },
                          }))
                        );
                  }
                  if (h.size) {
                    let e = {};
                    h.forEach((i) => {
                      let r = t.getBaseTarget(i);
                      void 0 !== r && (e[i] = r);
                    }),
                      u.push({ animation: e });
                  }
                  let g = !!u.length;
                  return (
                    r &&
                      !1 === a.initial &&
                      !t.manuallyAnimateOnMount &&
                      (g = !1),
                    (r = !1),
                    g ? e(u) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, r, n) {
                    var o;
                    if (i[e].isActive === r) return Promise.resolve();
                    null === (o = t.variantChildren) ||
                      void 0 === o ||
                      o.forEach((t) => {
                        var i;
                        return null === (i = t.animationState) || void 0 === i
                          ? void 0
                          : i.setActive(e, r);
                      }),
                      (i[e].isActive = r);
                    let a = s(n, e);
                    for (let t in i) i[t].protectedKeys = {};
                    return a;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          this.unmount(), m(t) && (this.unmount = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {}
      }
      let eM = 0;
      class eT extends tk {
        constructor() {
          super(...arguments), (this.id = eM++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let {
              isPresent: t,
              onExitComplete: e,
              custom: i,
            } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === r) return;
          let n = this.node.animationState.setActive("exit", !t, {
            custom: null != i ? i : this.node.getProps().custom,
          });
          e && !t && n.then(() => e(this.id));
        }
        mount() {
          let { register: t } = this.node.presenceContext || {};
          t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let ek = (t, e) => Math.abs(t - e);
      class eC {
        constructor(t, e, { transformPagePoint: i } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = eS(this.lastMoveEventInfo, this.history),
                r = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(ek(t.x, e.x) ** 2 + ek(t.y, e.y) ** 2) >= 3);
              if (!r && !n) return;
              let { point: s } = i,
                { timestamp: o } = tC.frameData;
              this.history.push({ ...s, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              r ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = eA(e, this.transformPagePoint)),
                tC.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: i, onSessionEnd: r } = this.handlers,
                n = eS(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : eA(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && i && i(t, n), r && r(t, n);
            }),
            !tg(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = i);
          let r = eA(tv(t), this.transformPagePoint),
            { point: n } = r,
            { timestamp: s } = tC.frameData;
          this.history = [{ ...n, timestamp: s }];
          let { onSessionStart: o } = e;
          o && o(t, eS(r, this.history)),
            (this.removeListeners = (0, tb.z)(
              tx(window, "pointermove", this.handlePointerMove),
              tx(window, "pointerup", this.handlePointerUp),
              tx(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tC.Pn)(this.updatePoint);
        }
      }
      function eA(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function eE(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function eS({ point: t }, e) {
        return {
          point: t,
          delta: eE(t, eL(e)),
          offset: eE(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = eL(t);
            for (
              ;
              i >= 0 &&
              ((r = t[i]), !(n.timestamp - r.timestamp > (0, tH.w)(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = (0, tH.X)(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function eL(t) {
        return t[t.length - 1];
      }
      var eV = i(3967),
        eR = i(22);
      function eD(t) {
        return t.max - t.min;
      }
      function eN(t, e = 0, i = 0.01) {
        return Math.abs(t - e) <= i;
      }
      function eF(t, e, i, r = 0.5) {
        (t.origin = r),
          (t.originPoint = (0, eR.C)(e.min, e.max, t.origin)),
          (t.scale = eD(i) / eD(e)),
          (eN(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, eR.C)(i.min, i.max, t.origin) - t.originPoint),
          (eN(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function eB(t, e, i, r) {
        eF(t.x, e.x, i.x, r ? r.originX : void 0),
          eF(t.y, e.y, i.y, r ? r.originY : void 0);
      }
      function eO(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + eD(e));
      }
      function ez(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + eD(e));
      }
      function eI(t, e, i) {
        ez(t.x, e.x, i.x), ez(t.y, e.y, i.y);
      }
      var eW = i(4169);
      function eU(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function e$(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]), { min: i, max: r }
        );
      }
      function e_(t, e, i) {
        return { min: eH(t, e), max: eH(t, i) };
      }
      function eH(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let eZ = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        eX = () => ({ x: eZ(), y: eZ() }),
        eY = () => ({ min: 0, max: 0 }),
        eq = () => ({ x: eY(), y: eY() });
      function eK(t) {
        return [t("x"), t("y")];
      }
      function eG({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function eJ(t) {
        return void 0 === t || 1 === t;
      }
      function eQ({ scale: t, scaleX: e, scaleY: i }) {
        return !eJ(t) || !eJ(e) || !eJ(i);
      }
      function e1(t) {
        return eQ(t) || e0(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function e0(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function e2(t, e, i, r, n) {
        return void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e;
      }
      function e5(t, e = 0, i = 1, r, n) {
        (t.min = e2(t.min, e, i, r, n)), (t.max = e2(t.max, e, i, r, n));
      }
      function e3(t, { x: e, y: i }) {
        e5(t.x, e.translate, e.scale, e.originPoint),
          e5(t.y, i.translate, i.scale, i.originPoint);
      }
      function e4(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function e6(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function e8(t, e, [i, r, n]) {
        let s = void 0 !== e[n] ? e[n] : 0.5,
          o = (0, eR.C)(t.min, t.max, s);
        e5(t, e[i], e[r], o, e.scale);
      }
      let e7 = ["x", "scaleX", "originX"],
        e9 = ["y", "scaleY", "originY"];
      function it(t, e) {
        e8(t.x, e, e7), e8(t.y, e, e9);
      }
      function ie(t, e) {
        return eG(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let ii = new WeakMap();
      class ir {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = eq()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          (i && !1 === i.isPresent) ||
            (this.panSession = new eC(
              t,
              {
                onSessionStart: (t) => {
                  this.stopAnimation(),
                    e && this.snapToCursor(tv(t, "page").point);
                },
                onStart: (t, e) => {
                  let {
                    drag: i,
                    dragPropagation: r,
                    onDragStart: n,
                  } = this.getProps();
                  if (
                    i &&
                    !r &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = tM(i)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    eK((t) => {
                      let e = this.getAxisMotionValue(t).get() || 0;
                      if (z.aQ.test(e)) {
                        let { projection: i } = this.visualElement;
                        if (i && i.layout) {
                          let r = i.layout.layoutBox[t];
                          if (r) {
                            let t = eD(r);
                            e = (parseFloat(e) / 100) * t;
                          }
                        }
                      }
                      this.originPoint[t] = e;
                    }),
                    n && tC.Wi.update(() => n(t, e), !1, !0);
                  let { animationState: s } = this.visualElement;
                  s && s.setActive("whileDrag", !0);
                },
                onMove: (t, e) => {
                  let {
                    dragPropagation: i,
                    dragDirectionLock: r,
                    onDirectionLock: n,
                    onDrag: s,
                  } = this.getProps();
                  if (!i && !this.openGlobalLock) return;
                  let { offset: o } = e;
                  if (r && null === this.currentDirection) {
                    (this.currentDirection = (function (t, e = 10) {
                      let i = null;
                      return (
                        Math.abs(t.y) > e
                          ? (i = "y")
                          : Math.abs(t.x) > e && (i = "x"),
                        i
                      );
                    })(o)),
                      null !== this.currentDirection &&
                        n &&
                        n(this.currentDirection);
                    return;
                  }
                  this.updateAxis("x", e.point, o),
                    this.updateAxis("y", e.point, o),
                    this.visualElement.render(),
                    s && s(t, e);
                },
                onSessionEnd: (t, e) => this.stop(t, e),
              },
              { transformPagePoint: this.visualElement.getTransformPagePoint() }
            ));
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && tC.Wi.update(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !is(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? (0, eR.C)(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? (0, eR.C)(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: i } = this.visualElement.projection || {},
            r = this.constraints;
          t && f(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: r, right: n }
              ) {
                return { x: eU(t.x, i, n), y: eU(t.y, e, r) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: e_(t, "left", "right"), y: e_(t, "top", "bottom") }
              );
            })(e)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eK((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !f(e)) return !1;
          let r = e.current;
          (0, t_.k)(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = ie(t, i),
                { scroll: n } = e;
              return n && (e6(r.x, n.offset.x), e6(r.y, n.offset.y)), r;
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: e$((t = n.layout.layoutBox).x, s.x), y: e$(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = eG(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            eK((o) => {
              if (!is(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return i.start(el(t, i, 0, e));
        }
        stopAnimation() {
          eK((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          eK((e) => {
            let { drag: i } = this.getProps();
            if (!is(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - (0, eR.C)(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!f(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          eK((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = eD(t),
                  n = eD(e);
                return (
                  n > r
                    ? (i = (0, eV.Y)(e.min, e.max - r, t.min))
                    : r > n && (i = (0, eV.Y)(t.min, t.max - n, e.min)),
                  (0, eW.u)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            eK((e) => {
              if (!is(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set((0, eR.C)(n, s, r[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          ii.set(this.visualElement, this);
          let t = tx(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              f(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            e();
          let n = tm(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (eK((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), r(), s && s();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function is(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class io extends tk {
        constructor(t) {
          super(t),
            (this.removeGroupControls = tV.Z),
            (this.removeListeners = tV.Z),
            (this.controls = new ir(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || tV.Z);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let ia = (t) => (e, i) => {
        t && tC.Wi.update(() => t(e, i));
      };
      class il extends tk {
        constructor() {
          super(...arguments), (this.removePointerDownListener = tV.Z);
        }
        onPointerDown(t) {
          this.session = new eC(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: ia(t),
            onStart: ia(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, r && tC.Wi.update(() => r(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = tx(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      let iu = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function ih(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ic = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!z.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = ih(t, e.target.x),
            r = ih(t, e.target.y);
          return `${i}% ${r}%`;
        },
      };
      class id extends a.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          Object.assign(E, im),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (iu.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            s = i.projection;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    tC.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function ip(t) {
        let [e, i] = (function () {
            let t = (0, a.useContext)(h.O);
            if (null === t) return [!0, null];
            let { isPresent: e, onExitComplete: i, register: r } = t,
              n = (0, a.useId)();
            return (
              (0, a.useEffect)(() => r(n), []),
              !e && i ? [!1, () => i && i(n)] : [!0]
            );
          })(),
          r = (0, a.useContext)(M.p);
        return a.createElement(id, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, a.useContext)(T),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let im = {
        borderRadius: {
          ...ic,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ic,
        borderTopRightRadius: ic,
        borderBottomLeftRadius: ic,
        borderBottomRightRadius: ic,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let r = t4.P.parse(t);
            if (r.length > 5) return t;
            let n = t4.P.createTransformer(t),
              s = "number" != typeof r[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (r[0 + s] /= o), (r[1 + s] /= a);
            let l = (0, eR.C)(o, a, 0.5);
            return (
              "number" == typeof r[2 + s] && (r[2 + s] /= l),
              "number" == typeof r[3 + s] && (r[3 + s] /= l),
              n(r)
            );
          },
        },
      };
      var ig = i(1560),
        iv = i(7255);
      let iy = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ix = iy.length,
        ib = (t) => ("string" == typeof t ? parseFloat(t) : t),
        iw = (t) => "number" == typeof t || z.px.test(t);
      function iP(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let ij = iT(0, 0.5, iv.Bn),
        iM = iT(0.5, 0.95, tV.Z);
      function iT(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i((0, eV.Y)(t, e, r)));
      }
      function ik(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function iC(t, e) {
        ik(t.x, e.x), ik(t.y, e.y);
      }
      function iA(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function iE(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (
            (z.aQ.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, eR.C)(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = (0, eR.C)(s.min, s.max, r);
          t === s && (a -= e),
            (t.min = iA(t.min, e, i, a, n)),
            (t.max = iA(t.max, e, i, a, n));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let iS = ["x", "scaleX", "originX"],
        iL = ["y", "scaleY", "originY"];
      function iV(t, e, i, r) {
        iE(t.x, e, iS, i ? i.x : void 0, r ? r.x : void 0),
          iE(t.y, e, iL, i ? i.y : void 0, r ? r.y : void 0);
      }
      function iR(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function iD(t) {
        return iR(t.x) && iR(t.y);
      }
      function iN(t, e) {
        return (
          t.x.min === e.x.min &&
          t.x.max === e.x.max &&
          t.y.min === e.y.min &&
          t.y.max === e.y.max
        );
      }
      function iF(t) {
        return eD(t.x) / eD(t.y);
      }
      var iB = i(10);
      class iO {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, iB.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, iB.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function iz(t, e, i) {
        let r = "",
          n = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((n || s) && (r = `translate3d(${n}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
          i)
        ) {
          let { rotate: t, rotateX: e, rotateY: n } = i;
          t && (r += `rotate(${t}deg) `),
            e && (r += `rotateX(${e}deg) `),
            n && (r += `rotateY(${n}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (r += `scale(${o}, ${a})`), r || "none";
      }
      let iI = (t, e) => t.depth - e.depth;
      class iW {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, iB.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, iB.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(iI),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let iU = ["", "X", "Y", "Z"],
        i$ = 0,
        i_ = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function iH({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = null == e ? void 0 : e()) {
            (this.id = i$++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (i_.totalNodes =
                  i_.resolvedTargetDeltas =
                  i_.recalculatedProjection =
                    0),
                  this.nodes.forEach(iY),
                  this.nodes.forEach(i0),
                  this.nodes.forEach(i2),
                  this.nodes.forEach(iq),
                  window.MotionDebug && window.MotionDebug.record(i_);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new iW());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new ig.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, i = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e);
            let { layoutId: r, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              i && (n || r) && (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = performance.now(),
                      r = ({ timestamp: e }) => {
                        let n = e - i;
                        n >= 250 && ((0, tC.Pn)(r), t(n - 250));
                      };
                    return tC.Wi.read(r, !0), () => (0, tC.Pn)(r);
                  })(r, 0)),
                  iu.hasAnimatedSinceResize &&
                    ((iu.hasAnimatedSinceResize = !1), this.nodes.forEach(i1));
              });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                s &&
                (r || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let n =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        i7,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !iN(this.targetLayout, r) || i,
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = { ...ea(n, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || i1(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = r;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tC.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(i5),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            (this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(iG);
              return;
            }
            this.isUpdating || this.nodes.forEach(iJ),
              (this.isUpdating = !1),
              this.nodes.forEach(iQ),
              this.nodes.forEach(iZ),
              this.nodes.forEach(iX),
              this.clearAllSnapshots();
            let t = performance.now();
            (tC.frameData.delta = (0, eW.u)(
              0,
              1e3 / 60,
              t - tC.frameData.timestamp
            )),
              (tC.frameData.timestamp = t),
              (tC.frameData.isProcessing = !0),
              tC.S6.update.process(tC.frameData),
              tC.S6.preRender.process(tC.frameData),
              tC.S6.render.process(tC.frameData),
              (tC.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(iK), this.sharedNodes.forEach(i3);
          }
          scheduleUpdateProjection() {
            tC.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            tC.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = eq()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: i(this.instance),
                });
          }
          resetTransform() {
            if (!s) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !iD(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              n = r !== this.prevTransformTemplateValue;
            t &&
              (e || e1(this.latestValues) || n) &&
              (s(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              (e = n),
              r || (r = i9() ? Math.round : (t) => Math.round(2 * t) / 2),
              rt(e.x),
              rt(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return eq();
            let e = t.measureViewportBox(),
              { scroll: i } = this.root;
            return i && (e6(e.x, i.offset.x), e6(e.y, i.offset.y)), e;
          }
          removeElementScroll(t) {
            let e = eq();
            iC(e, t);
            for (let i = 0; i < this.path.length; i++) {
              let r = this.path[i],
                { scroll: n, options: s } = r;
              if (r !== this.root && n && s.layoutScroll) {
                if (n.isRoot) {
                  iC(e, t);
                  let { scroll: i } = this.root;
                  i && (e6(e.x, -i.offset.x), e6(e.y, -i.offset.y));
                }
                e6(e.x, n.offset.x), e6(e.y, n.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = eq();
            iC(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              !e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                it(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                e1(r.latestValues) && it(i, r.latestValues);
            }
            return e1(this.latestValues) && it(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = eq();
            iC(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !e1(i.latestValues)) continue;
              eQ(i.latestValues) && i.updateSnapshot();
              let r = eq();
              iC(r, i.measurePageBox()),
                iV(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r
                );
            }
            return e1(this.latestValues) && iV(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tC.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, i, r, n;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s;
            if (
              !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              )
            )
              return;
            let { layout: a, layoutId: l } = this.options;
            if (this.layout && (a || l)) {
              if (
                ((this.resolvedRelativeTargetAt = tC.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = eq()),
                    (this.relativeTargetOrigin = eq()),
                    eI(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    iC(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = eq()), (this.targetWithTransforms = eq())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (i = this.target),
                      (r = this.relativeTarget),
                      (n = this.relativeParent.target),
                      eO(i.x, r.x, n.x),
                      eO(i.y, r.y, n.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : iC(this.target, this.layout.layoutBox),
                      e3(this.target, this.targetDelta))
                    : iC(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = eq()),
                      (this.relativeTargetOrigin = eq()),
                      eI(this.relativeTargetOrigin, this.target, t.target),
                      iC(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                i_.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              eQ(this.parent.latestValues) ||
              e0(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              i = !!this.resumingFrom || this !== e,
              r = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (r = !1),
              i &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === tC.frameData.timestamp &&
                (r = !1),
              r)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            iC(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            !(function (t, e, i, r = !1) {
              let n, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = i[a]).projectionDelta;
                  let o = n.instance;
                  (!o || !o.style || "contents" !== o.style.display) &&
                    (r &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      it(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), e3(t, s)),
                    r && e1(n.latestValues) && it(t, n.latestValues));
                }
                (e.x = e4(e.x)), (e.y = e4(e.y));
              }
            })(this.layoutCorrected, this.treeScale, this.path, i),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (e.target = e.layout.layoutBox);
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = eX()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = eX()),
              (this.projectionDeltaWithTransform = eX()));
            let u = this.projectionTransform;
            eB(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = iz(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              i_.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = eX();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = eq(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(i8)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                var r, u;
                let d = e / 1e3;
                i4(o.x, t.x, d),
                  i4(o.y, t.y, d),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (eI(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (r = this.relativeTarget),
                    (u = this.relativeTargetOrigin),
                    i6(r.x, u.x, a.x, d),
                    i6(r.y, u.y, a.y, d),
                    i &&
                      iN(this.relativeTarget, i) &&
                      (this.isProjectionDirty = !1),
                    i || (i = eq()),
                    iC(i, this.relativeTarget)),
                  l &&
                    ((this.animationValues = s),
                    (function (t, e, i, r, n, s) {
                      n
                        ? ((t.opacity = (0, eR.C)(
                            0,
                            void 0 !== i.opacity ? i.opacity : 1,
                            ij(r)
                          )),
                          (t.opacityExit = (0, eR.C)(
                            void 0 !== e.opacity ? e.opacity : 1,
                            0,
                            iM(r)
                          )))
                        : s &&
                          (t.opacity = (0, eR.C)(
                            void 0 !== e.opacity ? e.opacity : 1,
                            void 0 !== i.opacity ? i.opacity : 1,
                            r
                          ));
                      for (let n = 0; n < ix; n++) {
                        let s = `border${iy[n]}Radius`,
                          o = iP(e, s),
                          a = iP(i, s);
                        (void 0 !== o || void 0 !== a) &&
                          (o || (o = 0),
                          a || (a = 0),
                          0 === o || 0 === a || iw(o) === iw(a)
                            ? ((t[s] = Math.max((0, eR.C)(ib(o), ib(a), r), 0)),
                              (z.aQ.test(a) || z.aQ.test(o)) && (t[s] += "%"))
                            : (t[s] = a));
                      }
                      (e.rotate || i.rotate) &&
                        (t.rotate = (0, eR.C)(e.rotate || 0, i.rotate || 0, r));
                    })(s, n, this.latestValues, d, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = d);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tC.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tC.Wi.update(() => {
                (iu.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = (0, R.i)(0) ? 0 : (0, ec.B)(0);
                    return r.start(el("", r, 1e3, i)), r.animation;
                  })(0, 0, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                re(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox
                )
              ) {
                i = this.target || eq();
                let e = eD(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let r = eD(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + r);
              }
              iC(e, i),
                it(e, n),
                eB(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new iO()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0),
              !e)
            )
              return;
            let r = {};
            for (let e = 0; e < iU.length; e++) {
              let n = "rotate" + iU[e];
              i[n] && ((r[n] = i[n]), t.setStaticValue(n, 0));
            }
            for (let e in (t.render(), r)) t.setStaticValue(e, r[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, i;
            let r = {};
            if (!this.instance || this.isSVG) return r;
            if (!this.isVisible) return { visibility: "hidden" };
            r.visibility = "";
            let n = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (r.opacity = ""),
                (r.pointerEvents = tc(t.pointerEvents) || ""),
                (r.transform = n ? n(this.latestValues, "") : "none"),
                r
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = tc(t.pointerEvents) || "")),
                this.hasProjected &&
                  !e1(this.latestValues) &&
                  ((e.transform = n ? n({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (r.transform = iz(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              n && (r.transform = n(o, r.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((r.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (r.opacity =
                  s === this
                    ? null !==
                        (i =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== i
                      ? i
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (r.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            E)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: i } = E[t],
                n = "none" === r.transform ? o[t] : e(o[t], s);
              if (i) {
                let t = i.length;
                for (let e = 0; e < t; e++) r[i[e]] = n;
              } else r[t] = n;
            }
            return (
              this.options.layoutId &&
                (r.pointerEvents =
                  s === this ? tc(t.pointerEvents) || "" : "none"),
              r
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(iG),
              this.root.sharedNodes.clear();
          }
        };
      }
      function iZ(t) {
        t.updateLayout();
      }
      function iX(t) {
        var e;
        let i =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = i.source !== t.layout.source;
          "size" === n
            ? eK((t) => {
                let r = s ? i.measuredBox[t] : i.layoutBox[t],
                  n = eD(r);
                (r.min = e[t].min), (r.max = r.min + n);
              })
            : re(n, i.layoutBox, e) &&
              eK((r) => {
                let n = s ? i.measuredBox[r] : i.layoutBox[r],
                  o = eD(e[r]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o));
              });
          let o = eX();
          eB(o, e, i.layoutBox);
          let a = eX();
          s
            ? eB(a, t.applyTransform(r, !0), i.measuredBox)
            : eB(a, e, i.layoutBox);
          let l = !iD(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = eq();
                eI(o, i.layoutBox, n.layoutBox);
                let a = eq();
                eI(a, e, s.layoutBox),
                  iN(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: i,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function iY(t) {
        i_.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function iq(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function iK(t) {
        t.clearSnapshot();
      }
      function iG(t) {
        t.clearMeasurements();
      }
      function iJ(t) {
        t.isLayoutDirty = !1;
      }
      function iQ(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function i1(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function i0(t) {
        t.resolveTargetDelta();
      }
      function i2(t) {
        t.calcProjection();
      }
      function i5(t) {
        t.resetRotation();
      }
      function i3(t) {
        t.removeLeadSnapshot();
      }
      function i4(t, e, i) {
        (t.translate = (0, eR.C)(e.translate, 0, i)),
          (t.scale = (0, eR.C)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function i6(t, e, i, r) {
        (t.min = (0, eR.C)(e.min, i.min, r)),
          (t.max = (0, eR.C)(e.max, i.max, r));
      }
      function i8(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let i7 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        i9 = () => navigator.userAgent.toLowerCase().includes("applewebkit/");
      function rt(t) {
        (t.min = r(t.min)), (t.max = r(t.max));
      }
      function re(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !eN(iF(e), iF(i), 0.2))
        );
      }
      let ri = iH({
          attachResizeListener: (t, e) => tm(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rr = { current: void 0 },
        rn = iH({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rr.current) {
              let t = new ri({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rr.current = t);
            }
            return rr.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        }),
        rs = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function ro(t, e, i = 1) {
        (0, t_.k)(
          i <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [r, n] = (function (t) {
          let e = rs.exec(t);
          if (!e) return [,];
          let [, i, r] = e;
          return [i, r];
        })(t);
        if (!r) return;
        let s = window.getComputedStyle(e).getPropertyValue(r);
        return s ? s.trim() : (0, F.tm)(n) ? ro(n, e, i + 1) : n;
      }
      let ra = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        rl = (t) => ra.has(t),
        ru = (t) => Object.keys(t).some(rl),
        rh = (t) => t === O.Rx || t === z.px,
        rc = (t, e) => parseFloat(t.split(", ")[e]),
        rd =
          (t, e) =>
          (i, { transform: r }) => {
            if ("none" === r || !r) return 0;
            let n = r.match(/^matrix3d\((.+)\)$/);
            if (n) return rc(n[1], e);
            {
              let e = r.match(/^matrix\((.+)\)$/);
              return e ? rc(e[1], t) : 0;
            }
          },
        rf = new Set(["x", "y", "z"]),
        rp = S.filter((t) => !rf.has(t)),
        rm = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: rd(4, 13),
          y: rd(5, 14),
        };
      (rm.translateX = rm.x), (rm.translateY = rm.y);
      let rg = (t, e, i) => {
          let r = e.measureViewportBox(),
            n = getComputedStyle(e.current),
            { display: s } = n,
            o = {};
          "none" === s && e.setStaticValue("display", t.display || "block"),
            i.forEach((t) => {
              o[t] = rm[t](r, n);
            }),
            e.render();
          let a = e.measureViewportBox();
          return (
            i.forEach((i) => {
              let r = e.getValue(i);
              r && r.jump(o[i]), (t[i] = rm[i](a, n));
            }),
            t
          );
        },
        rv = (t, e, i = {}, r = {}) => {
          (e = { ...e }), (r = { ...r });
          let n = Object.keys(e).filter(rl),
            s = [],
            o = !1,
            a = [];
          if (
            (n.forEach((n) => {
              let l;
              let u = t.getValue(n);
              if (!t.hasValue(n)) return;
              let h = i[n],
                c = ep(h),
                d = e[n];
              if (tl(d)) {
                let t = d.length,
                  e = null === d[0] ? 1 : 0;
                c = ep((h = d[e]));
                for (let i = e; i < t && null !== d[i]; i++)
                  l
                    ? (0, t_.k)(
                        ep(d[i]) === l,
                        "All keyframes must be of the same type"
                      )
                    : ((l = ep(d[i])),
                      (0, t_.k)(
                        l === c || (rh(c) && rh(l)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else l = ep(d);
              if (c !== l) {
                if (rh(c) && rh(l)) {
                  let t = u.get();
                  "string" == typeof t && u.set(parseFloat(t)),
                    "string" == typeof d
                      ? (e[n] = parseFloat(d))
                      : Array.isArray(d) &&
                        l === z.px &&
                        (e[n] = d.map(parseFloat));
                } else
                  (null == c ? void 0 : c.transform) &&
                  (null == l ? void 0 : l.transform) &&
                  (0 === h || 0 === d)
                    ? 0 === h
                      ? u.set(l.transform(h))
                      : (e[n] = c.transform(d))
                    : (o ||
                        ((s = (function (t) {
                          let e = [];
                          return (
                            rp.forEach((i) => {
                              let r = t.getValue(i);
                              void 0 !== r &&
                                (e.push([i, r.get()]),
                                r.set(i.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (o = !0)),
                      a.push(n),
                      (r[n] = void 0 !== r[n] ? r[n] : e[n]),
                      u.jump(d));
              }
            }),
            !a.length)
          )
            return { target: e, transitionEnd: r };
          {
            let i = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              n = rg(e, t, a);
            return (
              s.length &&
                s.forEach(([e, i]) => {
                  t.getValue(e).set(i);
                }),
              t.render(),
              j.j && null !== i && window.scrollTo({ top: i }),
              { target: n, transitionEnd: r }
            );
          }
        },
        ry = (t, e, i, r) => {
          var n, s;
          let o = (function (t, { ...e }, i) {
            let r = t.current;
            if (!(r instanceof Element)) return { target: e, transitionEnd: i };
            for (let n in (i && (i = { ...i }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!(0, F.tm)(e)) return;
              let i = ro(e, r);
              i && t.set(i);
            }),
            e)) {
              let t = e[n];
              if (!(0, F.tm)(t)) continue;
              let s = ro(t, r);
              s && ((e[n] = s), i || (i = {}), void 0 === i[n] && (i[n] = t));
            }
            return { target: e, transitionEnd: i };
          })(t, e, r);
          return (
            (e = o.target),
            (r = o.transitionEnd),
            (n = e),
            (s = r),
            ru(n) ? rv(t, n, i, s) : { target: n, transitionEnd: s }
          );
        },
        rx = { current: null },
        rb = { current: !1 },
        rw = new WeakMap(),
        rP = Object.keys(P),
        rj = rP.length,
        rM = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        rT = v.length;
      class rk {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            visualState: n,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => tC.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = n;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = s),
            (this.isControllingVariants = y(e)),
            (this.isVariantNode = x(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] &&
              (0, R.i)(e) &&
              (e.set(o[t], !1), eu(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            rw.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            rb.current ||
              (function () {
                if (((rb.current = !0), j.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (rx.current = t.matches);
                    t.addListener(e), e();
                  } else rx.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || rx.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (rw.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, tC.Pn)(this.notifyUpdate),
          (0, tC.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i = L.has(t),
            r = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && tC.Wi.update(this.notifyUpdate, !1, !0),
                i && this.projection && (this.projection.isTransformDirty = !0);
            }),
            n = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            r(), n();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, i, r, n) {
          let s, o;
          for (let t = 0; t < rj; t++) {
            let i = rP[t],
              {
                isEnabled: r,
                Feature: n,
                ProjectionNode: a,
                MeasureLayout: l,
              } = P[i];
            a && (s = a),
              r(e) &&
                (!this.features[i] && n && (this.features[i] = new n(this)),
                l && (o = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: i,
              drag: r,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: i,
              alwaysMeasureLayout: !!r || (o && f(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof i ? i : "both",
              initialPromotionConfig: n,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : eq();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < rM.length; e++) {
            let i = rM[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          (this.prevMotionValues = (function (t, e, i) {
            let { willChange: r } = e;
            for (let n in e) {
              let s = e[n],
                o = i[n];
              if ((0, R.i)(s)) t.addValue(n, s), eu(r) && r.add(n);
              else if ((0, R.i)(o))
                t.addValue(n, (0, ec.B)(s, { owner: t })), eu(r) && r.remove(n);
              else if (o !== s) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, ec.B)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < rT; t++) {
            let i = v[t],
              r = this.props[i];
            (p(r) || !1 === r) && (e[i] = r);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, ec.B)(e, { owner: this })), this.addValue(t, i)),
            i
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: i } = this.props,
            r =
              "string" == typeof i || "object" == typeof i
                ? null === (e = to(this.props, i)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (i && void 0 !== r) return r;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, R.i)(n)
            ? void 0 !== this.initialValues[t] && void 0 === r
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new ig.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class rC extends rk {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...i },
          { transformValues: r },
          n
        ) {
          let s = (function (t, e, i) {
            let r = {};
            for (let n in t) {
              let t = (function (t, e) {
                if (e) return (e[t] || e.default || e).from;
              })(n, e);
              if (void 0 !== t) r[n] = t;
              else {
                let t = i.getValue(n);
                t && (r[n] = t.get());
              }
            }
            return r;
          })(i, t || {}, this);
          if ((r && (e && (e = r(e)), i && (i = r(i)), s && (s = r(s))), n)) {
            !(function (t, e, i) {
              var r, n;
              let s = Object.keys(e).filter((e) => !t.hasValue(e)),
                o = s.length;
              if (o)
                for (let a = 0; a < o; a++) {
                  let o = s[a],
                    l = e[o],
                    u = null;
                  Array.isArray(l) && (u = l[0]),
                    null === u &&
                      (u =
                        null !==
                          (n =
                            null !== (r = i[o]) && void 0 !== r
                              ? r
                              : t.readValue(o)) && void 0 !== n
                          ? n
                          : e[o]),
                    null != u &&
                      ("string" == typeof u && (eh(u) || eo(u))
                        ? (u = parseFloat(u))
                        : !eg(u) && t4.P.test(l) && (u = es(o, l)),
                      t.addValue(o, (0, ec.B)(u, { owner: t })),
                      void 0 === i[o] && (i[o] = u),
                      null !== u && t.setBaseTarget(o, u));
                }
            })(this, i, s);
            let t = ry(this, i, s, e);
            (e = t.transitionEnd), (i = t.target);
          }
          return { transition: t, transitionEnd: e, ...i };
        }
      }
      class rA extends rC {
        readValueFromInstance(t, e) {
          if (L.has(e)) {
            let t = en(e);
            return (t && t.default) || 0;
          }
          {
            let i = window.getComputedStyle(t),
              r = ((0, F.f9)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return ie(t, e);
        }
        build(t, e, i, r) {
          U(t, e, i, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return tn(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, R.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, i, r) {
          te(t, e, i, r);
        }
      }
      class rE extends rC {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (L.has(e)) {
            let t = en(e);
            return (t && t.default) || 0;
          }
          return (e = ti.has(e) ? e : tt(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return eq();
        }
        scrapeMotionValuesFromProps(t, e) {
          return ts(t, e);
        }
        build(t, e, i, r) {
          G(t, e, i, this.isSVGTag, r.transformTemplate);
        }
        renderInstance(t, e, i, r) {
          tr(t, e, i, r);
        }
        mount(t) {
          (this.isSVGTag = Q(t.tagName)), super.mount(t);
        }
      }
      let rS = (t, e) =>
          A(t)
            ? new rE(e, { enableHardwareAcceleration: !1 })
            : new rA(e, { enableHardwareAcceleration: !0 }),
        rL = {
          animation: { Feature: ej },
          exit: { Feature: eT },
          inView: { Feature: tI },
          tap: { Feature: tD },
          focus: { Feature: tS },
          hover: { Feature: tE },
          pan: { Feature: il },
          drag: { Feature: io, ProjectionNode: rn, MeasureLayout: ip },
          layout: { ProjectionNode: rn, MeasureLayout: ip },
        },
        rV = (function (t) {
          function e(e, i = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: i,
              useVisualState: r,
              Component: n,
            }) {
              t &&
                (function (t) {
                  for (let e in t) P[e] = { ...P[e], ...t[e] };
                })(t);
              let s = (0, a.forwardRef)(function (s, o) {
                var m;
                let g;
                let v = {
                    ...(0, a.useContext)(l._),
                    ...s,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, a.useContext)(M.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(s),
                  },
                  { isStatic: x } = v,
                  w = (function (t) {
                    let { initial: e, animate: i } = (function (t, e) {
                      if (y(t)) {
                        let { initial: e, animate: i } = t;
                        return {
                          initial: !1 === e || p(e) ? e : void 0,
                          animate: p(i) ? i : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, a.useContext)(u));
                    return (0, a.useMemo)(
                      () => ({ initial: e, animate: i }),
                      [b(e), b(i)]
                    );
                  })(s),
                  P = r(s, x);
                if (!x && j.j) {
                  w.visualElement = (function (t, e, i, r) {
                    let { visualElement: n } = (0, a.useContext)(u),
                      s = (0, a.useContext)(d),
                      o = (0, a.useContext)(h.O),
                      f = (0, a.useContext)(l._).reducedMotion,
                      p = (0, a.useRef)();
                    (r = r || s.renderer),
                      !p.current &&
                        r &&
                        (p.current = r(t, {
                          visualState: e,
                          parent: n,
                          props: i,
                          presenceContext: o,
                          blockInitialAnimation: !!o && !1 === o.initial,
                          reducedMotionConfig: f,
                        }));
                    let m = p.current;
                    return (
                      (0, a.useInsertionEffect)(() => {
                        m && m.update(i, o);
                      }),
                      (0, c.L)(() => {
                        m && m.render();
                      }),
                      (0, a.useEffect)(() => {
                        m && m.updateFeatures();
                      }),
                      (window.HandoffAppearAnimations ? c.L : a.useEffect)(
                        () => {
                          m &&
                            m.animationState &&
                            m.animationState.animateChanges();
                        }
                      ),
                      m
                    );
                  })(n, P, v, e);
                  let i = (0, a.useContext)(T),
                    r = (0, a.useContext)(d).strict;
                  w.visualElement &&
                    (g = w.visualElement.loadFeatures(v, r, t, i));
                }
                return a.createElement(
                  u.Provider,
                  { value: w },
                  g && w.visualElement
                    ? a.createElement(g, {
                        visualElement: w.visualElement,
                        ...v,
                      })
                    : null,
                  i(
                    n,
                    s,
                    ((m = w.visualElement),
                    (0, a.useCallback)(
                      (t) => {
                        t && P.mount && P.mount(t),
                          m && (t ? m.mount(t) : m.unmount()),
                          o &&
                            ("function" == typeof o
                              ? o(t)
                              : f(o) && (o.current = t));
                      },
                      [m]
                    )),
                    P,
                    x,
                    w.visualElement
                  )
                );
              });
              return (s[k] = n), s;
            })(t(e, i));
          }
          if ("undefined" == typeof Proxy) return e;
          let i = new Map();
          return new Proxy(e, {
            get: (t, r) => (i.has(r) || i.set(r, e(r)), i.get(r)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, i, r) {
            return {
              ...(A(t) ? tf : tp),
              preloadedFeatures: i,
              useRender: (function (t = !1) {
                return (e, i, r, { latestValues: n }, s) => {
                  let o = (
                      A(e)
                        ? function (t, e, i, r) {
                            let n = (0, a.useMemo)(() => {
                              let i = J();
                              return (
                                G(
                                  i,
                                  e,
                                  { enableHardwareAcceleration: !1 },
                                  Q(r),
                                  t.transformTemplate
                                ),
                                { ...i.attrs, style: { ...i.style } }
                              );
                            }, [e]);
                            if (t.style) {
                              let e = {};
                              _(e, t.style, t),
                                (n.style = { ...e, ...n.style });
                            }
                            return n;
                          }
                        : function (t, e, i) {
                            let r = {},
                              n = (function (t, e, i) {
                                let r = t.style || {},
                                  n = {};
                                return (
                                  _(n, r, t),
                                  Object.assign(
                                    n,
                                    (function ({ transformTemplate: t }, e, i) {
                                      return (0, a.useMemo)(() => {
                                        let r = $();
                                        return (
                                          U(
                                            r,
                                            e,
                                            { enableHardwareAcceleration: !i },
                                            t
                                          ),
                                          Object.assign({}, r.vars, r.style)
                                        );
                                      }, [e]);
                                    })(t, e, i)
                                  ),
                                  t.transformValues ? t.transformValues(n) : n
                                );
                              })(t, e, i);
                            return (
                              t.drag &&
                                !1 !== t.dragListener &&
                                ((r.draggable = !1),
                                (n.userSelect =
                                  n.WebkitUserSelect =
                                  n.WebkitTouchCallout =
                                    "none"),
                                (n.touchAction =
                                  !0 === t.drag
                                    ? "none"
                                    : `pan-${"x" === t.drag ? "y" : "x"}`)),
                              void 0 === t.tabIndex &&
                                (t.onTap || t.onTapStart || t.whileTap) &&
                                (r.tabIndex = 0),
                              (r.style = n),
                              r
                            );
                          }
                    )(i, n, s, e),
                    l = {
                      ...(function (t, e, i) {
                        let r = {};
                        for (let n in t)
                          ("values" !== n || "object" != typeof t.values) &&
                            (X(n) ||
                              (!0 === i && Z(n)) ||
                              (!e && !Z(n)) ||
                              (t.draggable && n.startsWith("onDrag"))) &&
                            (r[n] = t[n]);
                        return r;
                      })(i, "string" == typeof e, t),
                      ...o,
                      ref: r,
                    },
                    { children: u } = i,
                    h = (0, a.useMemo)(() => ((0, R.i)(u) ? u.get() : u), [u]);
                  return (0, a.createElement)(e, { ...l, children: h });
                };
              })(e),
              createVisualElement: r,
              Component: t,
            };
          })(t, e, rL, rS)
        );
    },
    7630: function (t, e, i) {
      "use strict";
      i.d(e, {
        Xp: function () {
          return o;
        },
        f9: function () {
          return n;
        },
        tm: function () {
          return s;
        },
      });
      let r = (t) => (e) => "string" == typeof e && e.startsWith(t),
        n = r("--"),
        s = r("var(--"),
        o =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    10: function (t, e, i) {
      "use strict";
      function r(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function n(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, {
        cl: function () {
          return n;
        },
        y4: function () {
          return r;
        },
      });
    },
    4169: function (t, e, i) {
      "use strict";
      i.d(e, {
        u: function () {
          return r;
        },
      });
      let r = (t, e, i) => Math.min(Math.max(i, t), e);
    },
    5487: function (t, e, i) {
      "use strict";
      i.d(e, {
        K: function () {
          return n;
        },
        k: function () {
          return s;
        },
      });
      var r = i(1662);
      let n = r.Z,
        s = r.Z;
    },
    4606: function (t, e, i) {
      "use strict";
      i.d(e, {
        s: function () {
          return k;
        },
      });
      var r = i(5487),
        n = i(5385),
        s = i(4169),
        o = i(22);
      function a(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      var l = i(6382),
        u = i(819),
        h = i(3184);
      let c = (t, e, i) => {
          let r = t * t;
          return Math.sqrt(Math.max(0, i * (e * e - r) + r));
        },
        d = [l.$, u.m, h.J],
        f = (t) => d.find((e) => e.test(t));
      function p(t) {
        let e = f(t);
        (0, r.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let i = e.parse(t);
        return (
          e === h.J &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              (t /= 360), (i /= 100);
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  l = 2 * i - r;
                (n = a(l, r, t + 1 / 3)),
                  (s = a(l, r, t)),
                  (o = a(l, r, t - 1 / 3));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let m = (t, e) => {
        let i = p(t),
          r = p(e),
          n = { ...i };
        return (t) => (
          (n.red = c(i.red, r.red, t)),
          (n.green = c(i.green, r.green, t)),
          (n.blue = c(i.blue, r.blue, t)),
          (n.alpha = (0, o.C)(i.alpha, r.alpha, t)),
          u.m.transform(n)
        );
      };
      var g = i(3624),
        v = i(1550);
      let y = (t, e) => (i) => `${i > 0 ? e : t}`;
      function x(t, e) {
        return "number" == typeof t
          ? (i) => (0, o.C)(t, e, i)
          : n.$.test(t)
          ? m(t, e)
          : t.startsWith("var(")
          ? y(t, e)
          : P(t, e);
      }
      let b = (t, e) => {
          let i = [...t],
            r = i.length,
            n = t.map((t, i) => x(t, e[i]));
          return (t) => {
            for (let e = 0; e < r; e++) i[e] = n[e](t);
            return i;
          };
        },
        w = (t, e) => {
          let i = { ...t, ...e },
            r = {};
          for (let n in i)
            void 0 !== t[n] && void 0 !== e[n] && (r[n] = x(t[n], e[n]));
          return (t) => {
            for (let e in r) i[e] = r[e](t);
            return i;
          };
        },
        P = (t, e) => {
          let i = v.P.createTransformer(e),
            n = (0, v.V)(t),
            s = (0, v.V)(e);
          return n.numVars === s.numVars &&
            n.numColors === s.numColors &&
            n.numNumbers >= s.numNumbers
            ? (0, g.z)(b(n.values, s.values), i)
            : ((0, r.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              y(t, e));
        };
      var j = i(3967),
        M = i(1662);
      let T = (t, e) => (i) => (0, o.C)(t, e, i);
      function k(t, e, { clamp: i = !0, ease: o, mixer: a } = {}) {
        let l = t.length;
        if (
          ((0, r.k)(
            l === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return () => e[0];
        t[0] > t[l - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let u = (function (t, e, i) {
            let r = [],
              s =
                i ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return n.$.test(t) ? m : P;
                  else if (Array.isArray(t)) return b;
                  else if ("object" == typeof t) return w;
                  return T;
                })(t[0]),
              o = t.length - 1;
            for (let i = 0; i < o; i++) {
              let n = s(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || M.Z : e;
                n = (0, g.z)(t, n);
              }
              r.push(n);
            }
            return r;
          })(e, o, a),
          h = u.length,
          c = (e) => {
            let i = 0;
            if (h > 1) for (; i < t.length - 2 && !(e < t[i + 1]); i++);
            let r = (0, j.Y)(t[i], t[i + 1], e);
            return u[i](r);
          };
        return i ? (e) => c((0, s.u)(t[0], t[l - 1], e)) : c;
      }
    },
    1741: function (t, e, i) {
      "use strict";
      i.d(e, {
        j: function () {
          return r;
        },
      });
      let r = "undefined" != typeof document;
    },
    22: function (t, e, i) {
      "use strict";
      i.d(e, {
        C: function () {
          return r;
        },
      });
      let r = (t, e, i) => -i * t + i * e + t;
    },
    1662: function (t, e, i) {
      "use strict";
      i.d(e, {
        Z: function () {
          return r;
        },
      });
      let r = (t) => t;
    },
    533: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return s;
        },
      });
      var r = i(22),
        n = i(3967);
      function s(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let o = (0, n.Y)(0, e, s);
              t.push((0, r.C)(i, 1, o));
            }
          })(e, t.length - 1),
          e
        );
      }
    },
    3624: function (t, e, i) {
      "use strict";
      i.d(e, {
        z: function () {
          return n;
        },
      });
      let r = (t, e) => (i) => e(t(i)),
        n = (...t) => t.reduce(r);
    },
    3967: function (t, e, i) {
      "use strict";
      i.d(e, {
        Y: function () {
          return r;
        },
      });
      let r = (t, e, i) => {
        let r = e - t;
        return 0 === r ? 1 : (i - t) / r;
      };
    },
    1560: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return n;
        },
      });
      var r = i(10);
      class n {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, r.y4)(this.subscriptions, t),
            () => (0, r.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    6917: function (t, e, i) {
      "use strict";
      i.d(e, {
        X: function () {
          return n;
        },
        w: function () {
          return r;
        },
      });
      let r = (t) => 1e3 * t,
        n = (t) => t / 1e3;
    },
    6681: function (t, e, i) {
      "use strict";
      i.d(e, {
        h: function () {
          return n;
        },
      });
      var r = i(7294);
      function n(t) {
        let e = (0, r.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    8868: function (t, e, i) {
      "use strict";
      i.d(e, {
        L: function () {
          return n;
        },
      });
      var r = i(7294);
      let n = i(1741).j ? r.useLayoutEffect : r.useEffect;
    },
    3038: function (t, e, i) {
      "use strict";
      function r(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, {
        R: function () {
          return r;
        },
      });
    },
    3234: function (t, e, i) {
      "use strict";
      i.d(e, {
        B: function () {
          return l;
        },
      });
      var r = i(1560),
        n = i(3038),
        s = i(2074);
      let o = (t) => !isNaN(parseFloat(t));
      class a {
        constructor(t, e = {}) {
          (this.version = "10.13.0"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: i, timestamp: r } = s.frameData;
              this.lastUpdated !== r &&
                ((this.timeDelta = i),
                (this.lastUpdated = r),
                s.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              s.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = o(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new r.L());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  s.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          this.set(e), (this.prev = t), (this.timeDelta = i);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, n.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function l(t, e) {
        return new a(t, e);
      }
    },
    6382: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return n;
        },
      });
      var r = i(819);
      let n = {
        test: (0, i(8834).i)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            r = "",
            n = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (r = t.substring(5, 7)),
                (n = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (r = t.substring(3, 4)),
                (n = t.substring(4, 5)),
                (e += e),
                (i += i),
                (r += r),
                (n += n)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(r, 16),
              alpha: n ? parseInt(n, 16) / 255 : 1,
            }
          );
        },
        transform: r.m.transform,
      };
    },
    3184: function (t, e, i) {
      "use strict";
      i.d(e, {
        J: function () {
          return a;
        },
      });
      var r = i(1649),
        n = i(6190),
        s = i(6430),
        o = i(8834);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          n.aQ.transform((0, s.Nw)(e)) +
          ", " +
          n.aQ.transform((0, s.Nw)(i)) +
          ", " +
          (0, s.Nw)(r.Fq.transform(o)) +
          ")",
      };
    },
    5385: function (t, e, i) {
      "use strict";
      i.d(e, {
        $: function () {
          return a;
        },
      });
      var r = i(6430),
        n = i(6382),
        s = i(3184),
        o = i(819);
      let a = {
        test: (t) => o.m.test(t) || n.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : n.$.parse(t),
        transform: (t) =>
          (0, r.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    819: function (t, e, i) {
      "use strict";
      i.d(e, {
        m: function () {
          return u;
        },
      });
      var r = i(4169),
        n = i(1649),
        s = i(6430),
        o = i(8834);
      let a = (t) => (0, r.u)(0, 255, t),
        l = { ...n.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.Nw)(n.Fq.transform(r)) +
            ")",
        };
    },
    8834: function (t, e, i) {
      "use strict";
      i.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return n;
        },
      });
      var r = i(6430);
      let n = (t, e) => (i) =>
          !!(
            ((0, r.HD)(i) && r.mj.test(i) && i.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(i, e))
          ),
        s = (t, e, i) => (n) => {
          if (!(0, r.HD)(n)) return n;
          let [s, o, a, l] = n.match(r.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [i]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    1550: function (t, e, i) {
      "use strict";
      i.d(e, {
        P: function () {
          return g;
        },
        V: function () {
          return d;
        },
      });
      var r = i(7630),
        n = i(1662),
        s = i(5385),
        o = i(1649),
        a = i(6430);
      let l = { regex: r.Xp, countKey: "Vars", token: "${v}", parse: n.Z },
        u = {
          regex: a.dA,
          countKey: "Colors",
          token: "${c}",
          parse: s.$.parse,
        },
        h = {
          regex: a.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: o.Rx.parse,
        };
      function c(t, { regex: e, countKey: i, token: r, parse: n }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + i] = s.length),
          (t.tokenised = t.tokenised.replace(e, r)),
          t.values.push(...s.map(n)));
      }
      function d(t) {
        let e = t.toString(),
          i = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return i.value.includes("var(--") && c(i, l), c(i, u), c(i, h), i;
      }
      function f(t) {
        return d(t).values;
      }
      function p(t) {
        let { values: e, numColors: i, numVars: r, tokenised: n } = d(t),
          o = e.length;
        return (t) => {
          let e = n;
          for (let n = 0; n < o; n++)
            e =
              n < r
                ? e.replace(l.token, t[n])
                : n < r + i
                ? e.replace(u.token, s.$.transform(t[n]))
                : e.replace(h.token, (0, a.Nw)(t[n]));
          return e;
        };
      }
      let m = (t) => ("number" == typeof t ? 0 : t),
        g = {
          test: function (t) {
            var e, i;
            return (
              isNaN(t) &&
              (0, a.HD)(t) &&
              ((null === (e = t.match(a.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (i = t.match(a.dA)) || void 0 === i
                  ? void 0
                  : i.length) || 0) >
                0
            );
          },
          parse: f,
          createTransformer: p,
          getAnimatableNone: function (t) {
            let e = f(t);
            return p(t)(e.map(m));
          },
        };
    },
    1649: function (t, e, i) {
      "use strict";
      i.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return n;
        },
        bA: function () {
          return o;
        },
      });
      var r = i(4169);
      let n = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...n, transform: (t) => (0, r.u)(0, 1, t) },
        o = { ...n, default: 1 };
    },
    6190: function (t, e, i) {
      "use strict";
      i.d(e, {
        $C: function () {
          return h;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var r = i(6430);
      let n = (t) => ({
          test: (e) =>
            (0, r.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = n("deg"),
        o = n("%"),
        a = n("px"),
        l = n("vh"),
        u = n("vw"),
        h = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    6430: function (t, e, i) {
      "use strict";
      i.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return n;
        },
        Nw: function () {
          return r;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let r = (t) => Math.round(1e5 * t) / 1e5,
        n = /(-)?([\d]*\.?[\d])+/g,
        s =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function a(t) {
        return "string" == typeof t;
      }
    },
    406: function (t, e, i) {
      "use strict";
      i.d(e, {
        i: function () {
          return r;
        },
      });
      let r = (t) => !!(t && t.getVelocity);
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(1118), e(9090);
    }),
      (_N_E = t.O());
  },
]);
