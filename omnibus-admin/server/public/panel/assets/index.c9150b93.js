var h1 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports)
var tD = h1((rD, da) => {
  ;(function () {
    const t = document.createElement('link').relList
    if (t && t.supports && t.supports('modulepreload')) return
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
    new MutationObserver((i) => {
      for (const s of i)
        if (s.type === 'childList')
          for (const o of s.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
    }).observe(document, { childList: !0, subtree: !0 })
    function n(i) {
      const s = {}
      return (
        i.integrity && (s.integrity = i.integrity),
        i.referrerpolicy && (s.referrerPolicy = i.referrerpolicy),
        i.crossorigin === 'use-credentials'
          ? (s.credentials = 'include')
          : i.crossorigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
        s
      )
    }
    function r(i) {
      if (i.ep) return
      i.ep = !0
      const s = n(i)
      fetch(i.href, s)
    }
  })()
  function Fm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
  }
  var X = { exports: {} },
    se = {}
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var io = Symbol.for('react.element'),
    p1 = Symbol.for('react.portal'),
    m1 = Symbol.for('react.fragment'),
    v1 = Symbol.for('react.strict_mode'),
    g1 = Symbol.for('react.profiler'),
    y1 = Symbol.for('react.provider'),
    _1 = Symbol.for('react.context'),
    w1 = Symbol.for('react.forward_ref'),
    S1 = Symbol.for('react.suspense'),
    k1 = Symbol.for('react.memo'),
    E1 = Symbol.for('react.lazy'),
    mh = Symbol.iterator
  function I1(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (mh && e[mh]) || e['@@iterator']), typeof e == 'function' ? e : null)
  }
  var $m = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    zm = Object.assign,
    jm = {}
  function Ki(e, t, n) {
    ;(this.props = e), (this.context = t), (this.refs = jm), (this.updater = n || $m)
  }
  Ki.prototype.isReactComponent = {}
  Ki.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
      throw Error(
        'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
      )
    this.updater.enqueueSetState(this, e, t, 'setState')
  }
  Ki.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
  }
  function Wm() {}
  Wm.prototype = Ki.prototype
  function yd(e, t, n) {
    ;(this.props = e), (this.context = t), (this.refs = jm), (this.updater = n || $m)
  }
  var _d = (yd.prototype = new Wm())
  _d.constructor = yd
  zm(_d, Ki.prototype)
  _d.isPureReactComponent = !0
  var vh = Array.isArray,
    Bm = Object.prototype.hasOwnProperty,
    wd = { current: null },
    Ym = { key: !0, ref: !0, __self: !0, __source: !0 }
  function Hm(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null
    if (t != null)
      for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (s = '' + t.key), t))
        Bm.call(t, r) && !Ym.hasOwnProperty(r) && (i[r] = t[r])
    var a = arguments.length - 2
    if (a === 1) i.children = n
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2]
      i.children = l
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r])
    return { $$typeof: io, type: e, key: s, ref: o, props: i, _owner: wd.current }
  }
  function T1(e, t) {
    return { $$typeof: io, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
  }
  function Sd(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === io
  }
  function C1(e) {
    var t = { '=': '=0', ':': '=2' }
    return (
      '$' +
      e.replace(/[=:]/g, function (n) {
        return t[n]
      })
    )
  }
  var gh = /\/+/g
  function su(e, t) {
    return typeof e == 'object' && e !== null && e.key != null ? C1('' + e.key) : t.toString(36)
  }
  function Bo(e, t, n, r, i) {
    var s = typeof e
    ;(s === 'undefined' || s === 'boolean') && (e = null)
    var o = !1
    if (e === null) o = !0
    else
      switch (s) {
        case 'string':
        case 'number':
          o = !0
          break
        case 'object':
          switch (e.$$typeof) {
            case io:
            case p1:
              o = !0
          }
      }
    if (o)
      return (
        (o = e),
        (i = i(o)),
        (e = r === '' ? '.' + su(o, 0) : r),
        vh(i)
          ? ((n = ''),
            e != null && (n = e.replace(gh, '$&/') + '/'),
            Bo(i, t, n, '', function (u) {
              return u
            }))
          : i != null &&
            (Sd(i) &&
              (i = T1(
                i,
                n +
                  (!i.key || (o && o.key === i.key) ? '' : ('' + i.key).replace(gh, '$&/') + '/') +
                  e
              )),
            t.push(i)),
        1
      )
    if (((o = 0), (r = r === '' ? '.' : r + ':'), vh(e)))
      for (var a = 0; a < e.length; a++) {
        s = e[a]
        var l = r + su(s, a)
        o += Bo(s, t, n, l, i)
      }
    else if (((l = I1(e)), typeof l == 'function'))
      for (e = l.call(e), a = 0; !(s = e.next()).done; )
        (s = s.value), (l = r + su(s, a++)), (o += Bo(s, t, n, l, i))
    else if (s === 'object')
      throw (
        ((t = String(e)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
            '). If you meant to render a collection of children, use an array instead.'
        ))
      )
    return o
  }
  function So(e, t, n) {
    if (e == null) return e
    var r = [],
      i = 0
    return (
      Bo(e, r, '', '', function (s) {
        return t.call(n, s, i++)
      }),
      r
    )
  }
  function x1(e) {
    if (e._status === -1) {
      var t = e._result
      ;(t = t()),
        t.then(
          function (n) {
            ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
          },
          function (n) {
            ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t))
    }
    if (e._status === 1) return e._result.default
    throw e._result
  }
  var yt = { current: null },
    Yo = { transition: null },
    O1 = { ReactCurrentDispatcher: yt, ReactCurrentBatchConfig: Yo, ReactCurrentOwner: wd }
  se.Children = {
    map: So,
    forEach: function (e, t, n) {
      So(
        e,
        function () {
          t.apply(this, arguments)
        },
        n
      )
    },
    count: function (e) {
      var t = 0
      return (
        So(e, function () {
          t++
        }),
        t
      )
    },
    toArray: function (e) {
      return (
        So(e, function (t) {
          return t
        }) || []
      )
    },
    only: function (e) {
      if (!Sd(e))
        throw Error('React.Children.only expected to receive a single React element child.')
      return e
    },
  }
  se.Component = Ki
  se.Fragment = m1
  se.Profiler = g1
  se.PureComponent = yd
  se.StrictMode = v1
  se.Suspense = S1
  se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O1
  se.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.'
      )
    var r = zm({}, e.props),
      i = e.key,
      s = e.ref,
      o = e._owner
    if (t != null) {
      if (
        (t.ref !== void 0 && ((s = t.ref), (o = wd.current)),
        t.key !== void 0 && (i = '' + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps
      for (l in t)
        Bm.call(t, l) &&
          !Ym.hasOwnProperty(l) &&
          (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2
    if (l === 1) r.children = n
    else if (1 < l) {
      a = Array(l)
      for (var u = 0; u < l; u++) a[u] = arguments[u + 2]
      r.children = a
    }
    return { $$typeof: io, type: e.type, key: i, ref: s, props: r, _owner: o }
  }
  se.createContext = function (e) {
    return (
      (e = {
        $$typeof: _1,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: y1, _context: e }),
      (e.Consumer = e)
    )
  }
  se.createElement = Hm
  se.createFactory = function (e) {
    var t = Hm.bind(null, e)
    return (t.type = e), t
  }
  se.createRef = function () {
    return { current: null }
  }
  se.forwardRef = function (e) {
    return { $$typeof: w1, render: e }
  }
  se.isValidElement = Sd
  se.lazy = function (e) {
    return { $$typeof: E1, _payload: { _status: -1, _result: e }, _init: x1 }
  }
  se.memo = function (e, t) {
    return { $$typeof: k1, type: e, compare: t === void 0 ? null : t }
  }
  se.startTransition = function (e) {
    var t = Yo.transition
    Yo.transition = {}
    try {
      e()
    } finally {
      Yo.transition = t
    }
  }
  se.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.')
  }
  se.useCallback = function (e, t) {
    return yt.current.useCallback(e, t)
  }
  se.useContext = function (e) {
    return yt.current.useContext(e)
  }
  se.useDebugValue = function () {}
  se.useDeferredValue = function (e) {
    return yt.current.useDeferredValue(e)
  }
  se.useEffect = function (e, t) {
    return yt.current.useEffect(e, t)
  }
  se.useId = function () {
    return yt.current.useId()
  }
  se.useImperativeHandle = function (e, t, n) {
    return yt.current.useImperativeHandle(e, t, n)
  }
  se.useInsertionEffect = function (e, t) {
    return yt.current.useInsertionEffect(e, t)
  }
  se.useLayoutEffect = function (e, t) {
    return yt.current.useLayoutEffect(e, t)
  }
  se.useMemo = function (e, t) {
    return yt.current.useMemo(e, t)
  }
  se.useReducer = function (e, t, n) {
    return yt.current.useReducer(e, t, n)
  }
  se.useRef = function (e) {
    return yt.current.useRef(e)
  }
  se.useState = function (e) {
    return yt.current.useState(e)
  }
  se.useSyncExternalStore = function (e, t, n) {
    return yt.current.useSyncExternalStore(e, t, n)
  }
  se.useTransition = function () {
    return yt.current.useTransition()
  }
  se.version = '18.2.0'
  ;(function (e) {
    e.exports = se
  })(X)
  const qi = Fm(X.exports)
  var sc = {},
    Vm = { exports: {} },
    At = {},
    Gm = { exports: {} },
    Km = {}
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ ;(function (e) {
    function t(P, H) {
      var G = P.length
      P.push(H)
      e: for (; 0 < G; ) {
        var de = (G - 1) >>> 1,
          M = P[de]
        if (0 < i(M, H)) (P[de] = H), (P[G] = M), (G = de)
        else break e
      }
    }
    function n(P) {
      return P.length === 0 ? null : P[0]
    }
    function r(P) {
      if (P.length === 0) return null
      var H = P[0],
        G = P.pop()
      if (G !== H) {
        P[0] = G
        e: for (var de = 0, M = P.length, U = M >>> 1; de < U; ) {
          var F = 2 * (de + 1) - 1,
            K = P[F],
            y = F + 1,
            te = P[y]
          if (0 > i(K, G))
            y < M && 0 > i(te, K)
              ? ((P[de] = te), (P[y] = G), (de = y))
              : ((P[de] = K), (P[F] = G), (de = F))
          else if (y < M && 0 > i(te, G)) (P[de] = te), (P[y] = G), (de = y)
          else break e
        }
      }
      return H
    }
    function i(P, H) {
      var G = P.sortIndex - H.sortIndex
      return G !== 0 ? G : P.id - H.id
    }
    if (typeof performance == 'object' && typeof performance.now == 'function') {
      var s = performance
      e.unstable_now = function () {
        return s.now()
      }
    } else {
      var o = Date,
        a = o.now()
      e.unstable_now = function () {
        return o.now() - a
      }
    }
    var l = [],
      u = [],
      d = 1,
      p = null,
      f = 3,
      S = !1,
      k = !1,
      E = !1,
      N = typeof setTimeout == 'function' ? setTimeout : null,
      m = typeof clearTimeout == 'function' ? clearTimeout : null,
      h = typeof setImmediate < 'u' ? setImmediate : null
    typeof navigator < 'u' &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling)
    function v(P) {
      for (var H = n(u); H !== null; ) {
        if (H.callback === null) r(u)
        else if (H.startTime <= P) r(u), (H.sortIndex = H.expirationTime), t(l, H)
        else break
        H = n(u)
      }
    }
    function w(P) {
      if (((E = !1), v(P), !k))
        if (n(l) !== null) (k = !0), Qe(_)
        else {
          var H = n(u)
          H !== null && We(w, H.startTime - P)
        }
    }
    function _(P, H) {
      ;(k = !1), E && ((E = !1), m(x), (x = -1)), (S = !0)
      var G = f
      try {
        for (v(H), p = n(l); p !== null && (!(p.expirationTime > H) || (P && !re())); ) {
          var de = p.callback
          if (typeof de == 'function') {
            ;(p.callback = null), (f = p.priorityLevel)
            var M = de(p.expirationTime <= H)
            ;(H = e.unstable_now()),
              typeof M == 'function' ? (p.callback = M) : p === n(l) && r(l),
              v(H)
          } else r(l)
          p = n(l)
        }
        if (p !== null) var U = !0
        else {
          var F = n(u)
          F !== null && We(w, F.startTime - H), (U = !1)
        }
        return U
      } finally {
        ;(p = null), (f = G), (S = !1)
      }
    }
    var L = !1,
      I = null,
      x = -1,
      W = 5,
      j = -1
    function re() {
      return !(e.unstable_now() - j < W)
    }
    function Z() {
      if (I !== null) {
        var P = e.unstable_now()
        j = P
        var H = !0
        try {
          H = I(!0, P)
        } finally {
          H ? oe() : ((L = !1), (I = null))
        }
      } else L = !1
    }
    var oe
    if (typeof h == 'function')
      oe = function () {
        h(Z)
      }
    else if (typeof MessageChannel < 'u') {
      var Se = new MessageChannel(),
        $e = Se.port2
      ;(Se.port1.onmessage = Z),
        (oe = function () {
          $e.postMessage(null)
        })
    } else
      oe = function () {
        N(Z, 0)
      }
    function Qe(P) {
      ;(I = P), L || ((L = !0), oe())
    }
    function We(P, H) {
      x = N(function () {
        P(e.unstable_now())
      }, H)
    }
    ;(e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (P) {
        P.callback = null
      }),
      (e.unstable_continueExecution = function () {
        k || S || ((k = !0), Qe(_))
      }),
      (e.unstable_forceFrameRate = function (P) {
        0 > P || 125 < P
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (W = 0 < P ? Math.floor(1e3 / P) : 5)
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return f
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l)
      }),
      (e.unstable_next = function (P) {
        switch (f) {
          case 1:
          case 2:
          case 3:
            var H = 3
            break
          default:
            H = f
        }
        var G = f
        f = H
        try {
          return P()
        } finally {
          f = G
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (P, H) {
        switch (P) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break
          default:
            P = 3
        }
        var G = f
        f = P
        try {
          return H()
        } finally {
          f = G
        }
      }),
      (e.unstable_scheduleCallback = function (P, H, G) {
        var de = e.unstable_now()
        switch (
          (typeof G == 'object' && G !== null
            ? ((G = G.delay), (G = typeof G == 'number' && 0 < G ? de + G : de))
            : (G = de),
          P)
        ) {
          case 1:
            var M = -1
            break
          case 2:
            M = 250
            break
          case 5:
            M = 1073741823
            break
          case 4:
            M = 1e4
            break
          default:
            M = 5e3
        }
        return (
          (M = G + M),
          (P = {
            id: d++,
            callback: H,
            priorityLevel: P,
            startTime: G,
            expirationTime: M,
            sortIndex: -1,
          }),
          G > de
            ? ((P.sortIndex = G),
              t(u, P),
              n(l) === null && P === n(u) && (E ? (m(x), (x = -1)) : (E = !0), We(w, G - de)))
            : ((P.sortIndex = M), t(l, P), k || S || ((k = !0), Qe(_))),
          P
        )
      }),
      (e.unstable_shouldYield = re),
      (e.unstable_wrapCallback = function (P) {
        var H = f
        return function () {
          var G = f
          f = H
          try {
            return P.apply(this, arguments)
          } finally {
            f = G
          }
        }
      })
  })(Km)
  ;(function (e) {
    e.exports = Km
  })(Gm)
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var qm = X.exports,
    Mt = Gm.exports
  function O(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
      n < arguments.length;
      n++
    )
      t += '&args[]=' + encodeURIComponent(arguments[n])
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
  }
  var Qm = new Set(),
    Ns = {}
  function qr(e, t) {
    Li(e, t), Li(e + 'Capture', t)
  }
  function Li(e, t) {
    for (Ns[e] = t, e = 0; e < t.length; e++) Qm.add(t[e])
  }
  var An = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    oc = Object.prototype.hasOwnProperty,
    R1 =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    yh = {},
    _h = {}
  function P1(e) {
    return oc.call(_h, e)
      ? !0
      : oc.call(yh, e)
      ? !1
      : R1.test(e)
      ? (_h[e] = !0)
      : ((yh[e] = !0), !1)
  }
  function D1(e, t, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0
      case 'boolean':
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
      default:
        return !1
    }
  }
  function N1(e, t, n, r) {
    if (t === null || typeof t > 'u' || D1(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t
        case 4:
          return t === !1
        case 5:
          return isNaN(t)
        case 6:
          return isNaN(t) || 1 > t
      }
    return !1
  }
  function _t(e, t, n, r, i, s, o) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = o)
  }
  var st = {}
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      st[e] = new _t(e, 0, !1, e, null, !1, !1)
    })
  ;[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (e) {
    var t = e[0]
    st[t] = new _t(t, 1, !1, e[1], null, !1, !1)
  })
  ;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    st[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1)
  })
  ;['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
    st[e] = new _t(e, 2, !1, e, null, !1, !1)
  })
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
      st[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })
  ;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    st[e] = new _t(e, 3, !0, e, null, !1, !1)
  })
  ;['capture', 'download'].forEach(function (e) {
    st[e] = new _t(e, 4, !1, e, null, !1, !1)
  })
  ;['cols', 'rows', 'size', 'span'].forEach(function (e) {
    st[e] = new _t(e, 6, !1, e, null, !1, !1)
  })
  ;['rowSpan', 'start'].forEach(function (e) {
    st[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1)
  })
  var kd = /[\-:]([a-z])/g
  function Ed(e) {
    return e[1].toUpperCase()
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(kd, Ed)
      st[t] = new _t(t, 1, !1, e, null, !1, !1)
    })
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(kd, Ed)
      st[t] = new _t(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    })
  ;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(kd, Ed)
    st[t] = new _t(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
  })
  ;['tabIndex', 'crossOrigin'].forEach(function (e) {
    st[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1)
  })
  st.xlinkHref = new _t('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1)
  ;['src', 'href', 'action', 'formAction'].forEach(function (e) {
    st[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0)
  })
  function Id(e, t, n, r) {
    var i = st.hasOwnProperty(t) ? st[t] : null
    ;(i !== null
      ? i.type !== 0
      : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
      (N1(t, n, i, r) && (n = null),
      r || i === null
        ? P1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
  }
  var zn = qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ko = Symbol.for('react.element'),
    ai = Symbol.for('react.portal'),
    li = Symbol.for('react.fragment'),
    Td = Symbol.for('react.strict_mode'),
    ac = Symbol.for('react.profiler'),
    Jm = Symbol.for('react.provider'),
    Xm = Symbol.for('react.context'),
    Cd = Symbol.for('react.forward_ref'),
    lc = Symbol.for('react.suspense'),
    uc = Symbol.for('react.suspense_list'),
    xd = Symbol.for('react.memo'),
    Gn = Symbol.for('react.lazy'),
    Zm = Symbol.for('react.offscreen'),
    wh = Symbol.iterator
  function rs(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (wh && e[wh]) || e['@@iterator']), typeof e == 'function' ? e : null)
  }
  var Le = Object.assign,
    ou
  function hs(e) {
    if (ou === void 0)
      try {
        throw Error()
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/)
        ou = (t && t[1]) || ''
      }
    return (
      `
` +
      ou +
      e
    )
  }
  var au = !1
  function lu(e, t) {
    if (!e || au) return ''
    au = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      if (t)
        if (
          ((t = function () {
            throw Error()
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error()
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, [])
          } catch (u) {
            var r = u
          }
          Reflect.construct(e, [], t)
        } else {
          try {
            t.call()
          } catch (u) {
            r = u
          }
          e.call(t.prototype)
        }
      else {
        try {
          throw Error()
        } catch (u) {
          r = u
        }
        e()
      }
    } catch (u) {
      if (u && r && typeof u.stack == 'string') {
        for (
          var i = u.stack.split(`
`),
            s = r.stack.split(`
`),
            o = i.length - 1,
            a = s.length - 1;
          1 <= o && 0 <= a && i[o] !== s[a];

        )
          a--
        for (; 1 <= o && 0 <= a; o--, a--)
          if (i[o] !== s[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || i[o] !== s[a])) {
                  var l =
                    `
` + i[o].replace(' at new ', ' at ')
                  return (
                    e.displayName &&
                      l.includes('<anonymous>') &&
                      (l = l.replace('<anonymous>', e.displayName)),
                    l
                  )
                }
              while (1 <= o && 0 <= a)
            break
          }
      }
    } finally {
      ;(au = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : '') ? hs(e) : ''
  }
  function M1(e) {
    switch (e.tag) {
      case 5:
        return hs(e.type)
      case 16:
        return hs('Lazy')
      case 13:
        return hs('Suspense')
      case 19:
        return hs('SuspenseList')
      case 0:
      case 2:
      case 15:
        return (e = lu(e.type, !1)), e
      case 11:
        return (e = lu(e.type.render, !1)), e
      case 1:
        return (e = lu(e.type, !0)), e
      default:
        return ''
    }
  }
  function cc(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
      case li:
        return 'Fragment'
      case ai:
        return 'Portal'
      case ac:
        return 'Profiler'
      case Td:
        return 'StrictMode'
      case lc:
        return 'Suspense'
      case uc:
        return 'SuspenseList'
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Xm:
          return (e.displayName || 'Context') + '.Consumer'
        case Jm:
          return (e._context.displayName || 'Context') + '.Provider'
        case Cd:
          var t = e.render
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          )
        case xd:
          return (t = e.displayName || null), t !== null ? t : cc(e.type) || 'Memo'
        case Gn:
          ;(t = e._payload), (e = e._init)
          try {
            return cc(e(t))
          } catch {}
      }
    return null
  }
  function A1(e) {
    var t = e.type
    switch (e.tag) {
      case 24:
        return 'Cache'
      case 9:
        return (t.displayName || 'Context') + '.Consumer'
      case 10:
        return (t._context.displayName || 'Context') + '.Provider'
      case 18:
        return 'DehydratedFragment'
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        )
      case 7:
        return 'Fragment'
      case 5:
        return t
      case 4:
        return 'Portal'
      case 3:
        return 'Root'
      case 6:
        return 'Text'
      case 16:
        return cc(t)
      case 8:
        return t === Td ? 'StrictMode' : 'Mode'
      case 22:
        return 'Offscreen'
      case 12:
        return 'Profiler'
      case 21:
        return 'Scope'
      case 13:
        return 'Suspense'
      case 19:
        return 'SuspenseList'
      case 25:
        return 'TracingMarker'
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null
        if (typeof t == 'string') return t
    }
    return null
  }
  function gr(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e
      case 'object':
        return e
      default:
        return ''
    }
  }
  function ev(e) {
    var t = e.type
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio')
  }
  function L1(e) {
    var t = ev(e) ? 'checked' : 'value',
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = '' + e[t]
    if (
      !e.hasOwnProperty(t) &&
      typeof n < 'u' &&
      typeof n.get == 'function' &&
      typeof n.set == 'function'
    ) {
      var i = n.get,
        s = n.set
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this)
          },
          set: function (o) {
            ;(r = '' + o), s.call(this, o)
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r
          },
          setValue: function (o) {
            r = '' + o
          },
          stopTracking: function () {
            ;(e._valueTracker = null), delete e[t]
          },
        }
      )
    }
  }
  function Eo(e) {
    e._valueTracker || (e._valueTracker = L1(e))
  }
  function tv(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
      r = ''
    return (
      e && (r = ev(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    )
  }
  function fa(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null
    try {
      return e.activeElement || e.body
    } catch {
      return e.body
    }
  }
  function dc(e, t) {
    var n = t.checked
    return Le({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n != null ? n : e._wrapperState.initialChecked,
    })
  }
  function Sh(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked
    ;(n = gr(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
      })
  }
  function nv(e, t) {
    ;(t = t.checked), t != null && Id(e, 'checked', t, !1)
  }
  function fc(e, t) {
    nv(e, t)
    var n = gr(t.value),
      r = t.type
    if (n != null)
      r === 'number'
        ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
        : e.value !== '' + n && (e.value = '' + n)
    else if (r === 'submit' || r === 'reset') {
      e.removeAttribute('value')
      return
    }
    t.hasOwnProperty('value')
      ? hc(e, t.type, n)
      : t.hasOwnProperty('defaultValue') && hc(e, t.type, gr(t.defaultValue)),
      t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
  }
  function kh(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var r = t.type
      if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return
      ;(t = '' + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t)
    }
    ;(n = e.name),
      n !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== '' && (e.name = n)
  }
  function hc(e, t, n) {
    ;(t !== 'number' || fa(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
  }
  var ps = Array.isArray
  function ki(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {}
      for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0)
    } else {
      for (n = '' + gr(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
          return
        }
        t !== null || e[i].disabled || (t = e[i])
      }
      t !== null && (t.selected = !0)
    }
  }
  function pc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(O(91))
    return Le({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    })
  }
  function Eh(e, t) {
    var n = t.value
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(O(92))
        if (ps(n)) {
          if (1 < n.length) throw Error(O(93))
          n = n[0]
        }
        t = n
      }
      t == null && (t = ''), (n = t)
    }
    e._wrapperState = { initialValue: gr(n) }
  }
  function rv(e, t) {
    var n = gr(t.value),
      r = gr(t.defaultValue)
    n != null &&
      ((n = '' + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = '' + r)
  }
  function Ih(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
  }
  function iv(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg'
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML'
      default:
        return 'http://www.w3.org/1999/xhtml'
    }
  }
  function mc(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? iv(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
  }
  var Io,
    sv = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i)
            })
          }
        : e
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t
      else {
        for (
          Io = Io || document.createElement('div'),
            Io.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = Io.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild)
        for (; t.firstChild; ) e.appendChild(t.firstChild)
      }
    })
  function Ms(e, t) {
    if (t) {
      var n = e.firstChild
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t
        return
      }
    }
    e.textContent = t
  }
  var _s = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    b1 = ['Webkit', 'ms', 'Moz', 'O']
  Object.keys(_s).forEach(function (e) {
    b1.forEach(function (t) {
      ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_s[t] = _s[e])
    })
  })
  function ov(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : n || typeof t != 'number' || t === 0 || (_s.hasOwnProperty(e) && _s[e])
      ? ('' + t).trim()
      : t + 'px'
  }
  function av(e, t) {
    e = e.style
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf('--') === 0,
          i = ov(n, t[n], r)
        n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
      }
  }
  var U1 = Le(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  )
  function vc(e, t) {
    if (t) {
      if (U1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e))
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(O(60))
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(O(61))
      }
      if (t.style != null && typeof t.style != 'object') throw Error(O(62))
    }
  }
  function gc(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var yc = null
  function Od(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    )
  }
  var _c = null,
    Ei = null,
    Ii = null
  function Th(e) {
    if ((e = ao(e))) {
      if (typeof _c != 'function') throw Error(O(280))
      var t = e.stateNode
      t && ((t = rl(t)), _c(e.stateNode, e.type, t))
    }
  }
  function lv(e) {
    Ei ? (Ii ? Ii.push(e) : (Ii = [e])) : (Ei = e)
  }
  function uv() {
    if (Ei) {
      var e = Ei,
        t = Ii
      if (((Ii = Ei = null), Th(e), t)) for (e = 0; e < t.length; e++) Th(t[e])
    }
  }
  function cv(e, t) {
    return e(t)
  }
  function dv() {}
  var uu = !1
  function fv(e, t, n) {
    if (uu) return e(t, n)
    uu = !0
    try {
      return cv(e, t, n)
    } finally {
      ;(uu = !1), (Ei !== null || Ii !== null) && (dv(), uv())
    }
  }
  function As(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = rl(n)
    if (r === null) return null
    n = r[t]
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(r = !r.disabled) ||
          ((e = e.type),
          (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !r)
        break e
      default:
        e = !1
    }
    if (e) return null
    if (n && typeof n != 'function') throw Error(O(231, t, typeof n))
    return n
  }
  var wc = !1
  if (An)
    try {
      var is = {}
      Object.defineProperty(is, 'passive', {
        get: function () {
          wc = !0
        },
      }),
        window.addEventListener('test', is, is),
        window.removeEventListener('test', is, is)
    } catch {
      wc = !1
    }
  function F1(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3)
    try {
      t.apply(n, u)
    } catch (d) {
      this.onError(d)
    }
  }
  var ws = !1,
    ha = null,
    pa = !1,
    Sc = null,
    $1 = {
      onError: function (e) {
        ;(ws = !0), (ha = e)
      },
    }
  function z1(e, t, n, r, i, s, o, a, l) {
    ;(ws = !1), (ha = null), F1.apply($1, arguments)
  }
  function j1(e, t, n, r, i, s, o, a, l) {
    if ((z1.apply(this, arguments), ws)) {
      if (ws) {
        var u = ha
        ;(ws = !1), (ha = null)
      } else throw Error(O(198))
      pa || ((pa = !0), (Sc = u))
    }
  }
  function Qr(e) {
    var t = e,
      n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
      e = t
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return)
      while (e)
    }
    return t.tag === 3 ? n : null
  }
  function hv(e) {
    if (e.tag === 13) {
      var t = e.memoizedState
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated
    }
    return null
  }
  function Ch(e) {
    if (Qr(e) !== e) throw Error(O(188))
  }
  function W1(e) {
    var t = e.alternate
    if (!t) {
      if (((t = Qr(e)), t === null)) throw Error(O(188))
      return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
      var i = n.return
      if (i === null) break
      var s = i.alternate
      if (s === null) {
        if (((r = i.return), r !== null)) {
          n = r
          continue
        }
        break
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return Ch(i), e
          if (s === r) return Ch(i), t
          s = s.sibling
        }
        throw Error(O(188))
      }
      if (n.return !== r.return) (n = i), (r = s)
      else {
        for (var o = !1, a = i.child; a; ) {
          if (a === n) {
            ;(o = !0), (n = i), (r = s)
            break
          }
          if (a === r) {
            ;(o = !0), (r = i), (n = s)
            break
          }
          a = a.sibling
        }
        if (!o) {
          for (a = s.child; a; ) {
            if (a === n) {
              ;(o = !0), (n = s), (r = i)
              break
            }
            if (a === r) {
              ;(o = !0), (r = s), (n = i)
              break
            }
            a = a.sibling
          }
          if (!o) throw Error(O(189))
        }
      }
      if (n.alternate !== r) throw Error(O(190))
    }
    if (n.tag !== 3) throw Error(O(188))
    return n.stateNode.current === n ? e : t
  }
  function pv(e) {
    return (e = W1(e)), e !== null ? mv(e) : null
  }
  function mv(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
      var t = mv(e)
      if (t !== null) return t
      e = e.sibling
    }
    return null
  }
  var vv = Mt.unstable_scheduleCallback,
    xh = Mt.unstable_cancelCallback,
    B1 = Mt.unstable_shouldYield,
    Y1 = Mt.unstable_requestPaint,
    je = Mt.unstable_now,
    H1 = Mt.unstable_getCurrentPriorityLevel,
    Rd = Mt.unstable_ImmediatePriority,
    gv = Mt.unstable_UserBlockingPriority,
    ma = Mt.unstable_NormalPriority,
    V1 = Mt.unstable_LowPriority,
    yv = Mt.unstable_IdlePriority,
    Za = null,
    mn = null
  function G1(e) {
    if (mn && typeof mn.onCommitFiberRoot == 'function')
      try {
        mn.onCommitFiberRoot(Za, e, void 0, (e.current.flags & 128) === 128)
      } catch {}
  }
  var nn = Math.clz32 ? Math.clz32 : Q1,
    K1 = Math.log,
    q1 = Math.LN2
  function Q1(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((K1(e) / q1) | 0)) | 0
  }
  var To = 64,
    Co = 4194304
  function ms(e) {
    switch (e & -e) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 1073741824
      default:
        return e
    }
  }
  function va(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var r = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes,
      o = n & 268435455
    if (o !== 0) {
      var a = o & ~i
      a !== 0 ? (r = ms(a)) : ((s &= o), s !== 0 && (r = ms(s)))
    } else (o = n & ~i), o !== 0 ? (r = ms(o)) : s !== 0 && (r = ms(s))
    if (r === 0) return 0
    if (
      t !== 0 &&
      t !== r &&
      (t & i) === 0 &&
      ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
    )
      return t
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - nn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
    return r
  }
  function J1(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function X1(e, t) {
    for (
      var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes;
      0 < s;

    ) {
      var o = 31 - nn(s),
        a = 1 << o,
        l = i[o]
      l === -1
        ? ((a & n) === 0 || (a & r) !== 0) && (i[o] = J1(a, t))
        : l <= t && (e.expiredLanes |= a),
        (s &= ~a)
    }
  }
  function kc(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  }
  function _v() {
    var e = To
    return (To <<= 1), (To & 4194240) === 0 && (To = 64), e
  }
  function cu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
  }
  function so(e, t, n) {
    ;(e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - nn(t)),
      (e[t] = n)
  }
  function Z1(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements)
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - nn(n),
        s = 1 << i
      ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s)
    }
  }
  function Pd(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
      var r = 31 - nn(n),
        i = 1 << r
      ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
    }
  }
  var ye = 0
  function wv(e) {
    return (e &= -e), 1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
  }
  var Sv,
    Dd,
    kv,
    Ev,
    Iv,
    Ec = !1,
    xo = [],
    or = null,
    ar = null,
    lr = null,
    Ls = new Map(),
    bs = new Map(),
    Qn = [],
    e_ =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' '
      )
  function Oh(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        or = null
        break
      case 'dragenter':
      case 'dragleave':
        ar = null
        break
      case 'mouseover':
      case 'mouseout':
        lr = null
        break
      case 'pointerover':
      case 'pointerout':
        Ls.delete(t.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        bs.delete(t.pointerId)
    }
  }
  function ss(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = ao(t)), t !== null && Dd(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e)
  }
  function t_(e, t, n, r, i) {
    switch (t) {
      case 'focusin':
        return (or = ss(or, e, t, n, r, i)), !0
      case 'dragenter':
        return (ar = ss(ar, e, t, n, r, i)), !0
      case 'mouseover':
        return (lr = ss(lr, e, t, n, r, i)), !0
      case 'pointerover':
        var s = i.pointerId
        return Ls.set(s, ss(Ls.get(s) || null, e, t, n, r, i)), !0
      case 'gotpointercapture':
        return (s = i.pointerId), bs.set(s, ss(bs.get(s) || null, e, t, n, r, i)), !0
    }
    return !1
  }
  function Tv(e) {
    var t = Dr(e.target)
    if (t !== null) {
      var n = Qr(t)
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = hv(n)), t !== null)) {
            ;(e.blockedOn = t),
              Iv(e.priority, function () {
                kv(n)
              })
            return
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
          return
        }
      }
    }
    e.blockedOn = null
  }
  function Ho(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ic(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
      if (n === null) {
        n = e.nativeEvent
        var r = new n.constructor(n.type, n)
        ;(yc = r), n.target.dispatchEvent(r), (yc = null)
      } else return (t = ao(n)), t !== null && Dd(t), (e.blockedOn = n), !1
      t.shift()
    }
    return !0
  }
  function Rh(e, t, n) {
    Ho(e) && n.delete(t)
  }
  function n_() {
    ;(Ec = !1),
      or !== null && Ho(or) && (or = null),
      ar !== null && Ho(ar) && (ar = null),
      lr !== null && Ho(lr) && (lr = null),
      Ls.forEach(Rh),
      bs.forEach(Rh)
  }
  function os(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ec || ((Ec = !0), Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority, n_)))
  }
  function Us(e) {
    function t(i) {
      return os(i, e)
    }
    if (0 < xo.length) {
      os(xo[0], e)
      for (var n = 1; n < xo.length; n++) {
        var r = xo[n]
        r.blockedOn === e && (r.blockedOn = null)
      }
    }
    for (
      or !== null && os(or, e),
        ar !== null && os(ar, e),
        lr !== null && os(lr, e),
        Ls.forEach(t),
        bs.forEach(t),
        n = 0;
      n < Qn.length;
      n++
    )
      (r = Qn[n]), r.blockedOn === e && (r.blockedOn = null)
    for (; 0 < Qn.length && ((n = Qn[0]), n.blockedOn === null); )
      Tv(n), n.blockedOn === null && Qn.shift()
  }
  var Ti = zn.ReactCurrentBatchConfig,
    ga = !0
  function r_(e, t, n, r) {
    var i = ye,
      s = Ti.transition
    Ti.transition = null
    try {
      ;(ye = 1), Nd(e, t, n, r)
    } finally {
      ;(ye = i), (Ti.transition = s)
    }
  }
  function i_(e, t, n, r) {
    var i = ye,
      s = Ti.transition
    Ti.transition = null
    try {
      ;(ye = 4), Nd(e, t, n, r)
    } finally {
      ;(ye = i), (Ti.transition = s)
    }
  }
  function Nd(e, t, n, r) {
    if (ga) {
      var i = Ic(e, t, n, r)
      if (i === null) wu(e, t, r, ya, n), Oh(e, r)
      else if (t_(i, e, t, n, r)) r.stopPropagation()
      else if ((Oh(e, r), t & 4 && -1 < e_.indexOf(e))) {
        for (; i !== null; ) {
          var s = ao(i)
          if (
            (s !== null && Sv(s), (s = Ic(e, t, n, r)), s === null && wu(e, t, r, ya, n), s === i)
          )
            break
          i = s
        }
        i !== null && r.stopPropagation()
      } else wu(e, t, r, null, n)
    }
  }
  var ya = null
  function Ic(e, t, n, r) {
    if (((ya = null), (e = Od(r)), (e = Dr(e)), e !== null))
      if (((t = Qr(e)), t === null)) e = null
      else if (((n = t.tag), n === 13)) {
        if (((e = hv(t)), e !== null)) return e
        e = null
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null
        e = null
      } else t !== e && (e = null)
    return (ya = e), null
  }
  function Cv(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4
      case 'message':
        switch (H1()) {
          case Rd:
            return 1
          case gv:
            return 4
          case ma:
          case V1:
            return 16
          case yv:
            return 536870912
          default:
            return 16
        }
      default:
        return 16
    }
  }
  var nr = null,
    Md = null,
    Vo = null
  function xv() {
    if (Vo) return Vo
    var e,
      t = Md,
      n = t.length,
      r,
      i = 'value' in nr ? nr.value : nr.textContent,
      s = i.length
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return (Vo = i.slice(e, 1 < r ? 1 - r : void 0))
  }
  function Go(e) {
    var t = e.keyCode
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    )
  }
  function Oo() {
    return !0
  }
  function Ph() {
    return !1
  }
  function Lt(e) {
    function t(n, r, i, s, o) {
      ;(this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = o),
        (this.currentTarget = null)
      for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]))
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Oo
          : Ph),
        (this.isPropagationStopped = Ph),
        this
      )
    }
    return (
      Le(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var n = this.nativeEvent
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Oo))
        },
        stopPropagation: function () {
          var n = this.nativeEvent
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Oo))
        },
        persist: function () {},
        isPersistent: Oo,
      }),
      t
    )
  }
  var Qi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ad = Lt(Qi),
    oo = Le({}, Qi, { view: 0, detail: 0 }),
    s_ = Lt(oo),
    du,
    fu,
    as,
    el = Le({}, oo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ld,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== as &&
              (as && e.type === 'mousemove'
                ? ((du = e.screenX - as.screenX), (fu = e.screenY - as.screenY))
                : (fu = du = 0),
              (as = e)),
            du)
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : fu
      },
    }),
    Dh = Lt(el),
    o_ = Le({}, el, { dataTransfer: 0 }),
    a_ = Lt(o_),
    l_ = Le({}, oo, { relatedTarget: 0 }),
    hu = Lt(l_),
    u_ = Le({}, Qi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    c_ = Lt(u_),
    d_ = Le({}, Qi, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData
      },
    }),
    f_ = Lt(d_),
    h_ = Le({}, Qi, { data: 0 }),
    Nh = Lt(h_),
    p_ = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    m_ = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    v_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function g_(e) {
    var t = this.nativeEvent
    return t.getModifierState ? t.getModifierState(e) : (e = v_[e]) ? !!t[e] : !1
  }
  function Ld() {
    return g_
  }
  var y_ = Le({}, oo, {
      key: function (e) {
        if (e.key) {
          var t = p_[e.key] || e.key
          if (t !== 'Unidentified') return t
        }
        return e.type === 'keypress'
          ? ((e = Go(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
          ? m_[e.keyCode] || 'Unidentified'
          : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ld,
      charCode: function (e) {
        return e.type === 'keypress' ? Go(e) : 0
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Go(e)
          : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
      },
    }),
    __ = Lt(y_),
    w_ = Le({}, el, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Mh = Lt(w_),
    S_ = Le({}, oo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ld,
    }),
    k_ = Lt(S_),
    E_ = Le({}, Qi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    I_ = Lt(E_),
    T_ = Le({}, el, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
          ? -e.wheelDelta
          : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    C_ = Lt(T_),
    x_ = [9, 13, 27, 32],
    bd = An && 'CompositionEvent' in window,
    Ss = null
  An && 'documentMode' in document && (Ss = document.documentMode)
  var O_ = An && 'TextEvent' in window && !Ss,
    Ov = An && (!bd || (Ss && 8 < Ss && 11 >= Ss)),
    Ah = String.fromCharCode(32),
    Lh = !1
  function Rv(e, t) {
    switch (e) {
      case 'keyup':
        return x_.indexOf(t.keyCode) !== -1
      case 'keydown':
        return t.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function Pv(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
  }
  var ui = !1
  function R_(e, t) {
    switch (e) {
      case 'compositionend':
        return Pv(t)
      case 'keypress':
        return t.which !== 32 ? null : ((Lh = !0), Ah)
      case 'textInput':
        return (e = t.data), e === Ah && Lh ? null : e
      default:
        return null
    }
  }
  function P_(e, t) {
    if (ui)
      return e === 'compositionend' || (!bd && Rv(e, t))
        ? ((e = xv()), (Vo = Md = nr = null), (ui = !1), e)
        : null
    switch (e) {
      case 'paste':
        return null
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char
          if (t.which) return String.fromCharCode(t.which)
        }
        return null
      case 'compositionend':
        return Ov && t.locale !== 'ko' ? null : t.data
      default:
        return null
    }
  }
  var D_ = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  }
  function bh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!D_[e.type] : t === 'textarea'
  }
  function Dv(e, t, n, r) {
    lv(r),
      (t = _a(t, 'onChange')),
      0 < t.length &&
        ((n = new Ad('onChange', 'change', null, n, r)), e.push({ event: n, listeners: t }))
  }
  var ks = null,
    Fs = null
  function N_(e) {
    Wv(e, 0)
  }
  function tl(e) {
    var t = fi(e)
    if (tv(t)) return e
  }
  function M_(e, t) {
    if (e === 'change') return t
  }
  var Nv = !1
  if (An) {
    var pu
    if (An) {
      var mu = 'oninput' in document
      if (!mu) {
        var Uh = document.createElement('div')
        Uh.setAttribute('oninput', 'return;'), (mu = typeof Uh.oninput == 'function')
      }
      pu = mu
    } else pu = !1
    Nv = pu && (!document.documentMode || 9 < document.documentMode)
  }
  function Fh() {
    ks && (ks.detachEvent('onpropertychange', Mv), (Fs = ks = null))
  }
  function Mv(e) {
    if (e.propertyName === 'value' && tl(Fs)) {
      var t = []
      Dv(t, Fs, e, Od(e)), fv(N_, t)
    }
  }
  function A_(e, t, n) {
    e === 'focusin'
      ? (Fh(), (ks = t), (Fs = n), ks.attachEvent('onpropertychange', Mv))
      : e === 'focusout' && Fh()
  }
  function L_(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return tl(Fs)
  }
  function b_(e, t) {
    if (e === 'click') return tl(t)
  }
  function U_(e, t) {
    if (e === 'input' || e === 'change') return tl(t)
  }
  function F_(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
  }
  var sn = typeof Object.is == 'function' ? Object.is : F_
  function $s(e, t) {
    if (sn(e, t)) return !0
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1
    var n = Object.keys(e),
      r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
      var i = n[r]
      if (!oc.call(t, i) || !sn(e[i], t[i])) return !1
    }
    return !0
  }
  function $h(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
  }
  function zh(e, t) {
    var n = $h(e)
    e = 0
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
        e = r
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling
            break e
          }
          n = n.parentNode
        }
        n = void 0
      }
      n = $h(n)
    }
  }
  function Av(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Av(e, t.parentNode)
        : 'contains' in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1
  }
  function Lv() {
    for (var e = window, t = fa(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string'
      } catch {
        n = !1
      }
      if (n) e = t.contentWindow
      else break
      t = fa(e.document)
    }
    return t
  }
  function Ud(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    )
  }
  function $_(e) {
    var t = Lv(),
      n = e.focusedElem,
      r = e.selectionRange
    if (t !== n && n && n.ownerDocument && Av(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ud(n)) {
        if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
          (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
        ) {
          e = e.getSelection()
          var i = n.textContent.length,
            s = Math.min(r.start, i)
          ;(r = r.end === void 0 ? s : Math.min(r.end, i)),
            !e.extend && s > r && ((i = r), (r = s), (s = i)),
            (i = zh(n, s))
          var o = zh(n, r)
          i &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)))
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
      for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
    }
  }
  var z_ = An && 'documentMode' in document && 11 >= document.documentMode,
    ci = null,
    Tc = null,
    Es = null,
    Cc = !1
  function jh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    Cc ||
      ci == null ||
      ci !== fa(r) ||
      ((r = ci),
      'selectionStart' in r && Ud(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Es && $s(Es, r)) ||
        ((Es = r),
        (r = _a(Tc, 'onSelect')),
        0 < r.length &&
          ((t = new Ad('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = ci))))
  }
  function Ro(e, t) {
    var n = {}
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    )
  }
  var di = {
      animationend: Ro('Animation', 'AnimationEnd'),
      animationiteration: Ro('Animation', 'AnimationIteration'),
      animationstart: Ro('Animation', 'AnimationStart'),
      transitionend: Ro('Transition', 'TransitionEnd'),
    },
    vu = {},
    bv = {}
  An &&
    ((bv = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete di.animationend.animation,
      delete di.animationiteration.animation,
      delete di.animationstart.animation),
    'TransitionEvent' in window || delete di.transitionend.transition)
  function nl(e) {
    if (vu[e]) return vu[e]
    if (!di[e]) return e
    var t = di[e],
      n
    for (n in t) if (t.hasOwnProperty(n) && n in bv) return (vu[e] = t[n])
    return e
  }
  var Uv = nl('animationend'),
    Fv = nl('animationiteration'),
    $v = nl('animationstart'),
    zv = nl('transitionend'),
    jv = new Map(),
    Wh =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      )
  function wr(e, t) {
    jv.set(e, t), qr(t, [e])
  }
  for (var gu = 0; gu < Wh.length; gu++) {
    var yu = Wh[gu],
      j_ = yu.toLowerCase(),
      W_ = yu[0].toUpperCase() + yu.slice(1)
    wr(j_, 'on' + W_)
  }
  wr(Uv, 'onAnimationEnd')
  wr(Fv, 'onAnimationIteration')
  wr($v, 'onAnimationStart')
  wr('dblclick', 'onDoubleClick')
  wr('focusin', 'onFocus')
  wr('focusout', 'onBlur')
  wr(zv, 'onTransitionEnd')
  Li('onMouseEnter', ['mouseout', 'mouseover'])
  Li('onMouseLeave', ['mouseout', 'mouseover'])
  Li('onPointerEnter', ['pointerout', 'pointerover'])
  Li('onPointerLeave', ['pointerout', 'pointerover'])
  qr('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '))
  qr(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' '
    )
  )
  qr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
  qr('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '))
  qr('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '))
  qr(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
  )
  var vs =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    B_ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(vs))
  function Bh(e, t, n) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = n), j1(r, t, void 0, e), (e.currentTarget = null)
  }
  function Wv(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event
      r = r.listeners
      e: {
        var s = void 0
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              l = a.instance,
              u = a.currentTarget
            if (((a = a.listener), l !== s && i.isPropagationStopped())) break e
            Bh(i, a, u), (s = l)
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (l = a.instance),
              (u = a.currentTarget),
              (a = a.listener),
              l !== s && i.isPropagationStopped())
            )
              break e
            Bh(i, a, u), (s = l)
          }
      }
    }
    if (pa) throw ((e = Sc), (pa = !1), (Sc = null), e)
  }
  function Ce(e, t) {
    var n = t[Dc]
    n === void 0 && (n = t[Dc] = new Set())
    var r = e + '__bubble'
    n.has(r) || (Bv(t, e, 2, !1), n.add(r))
  }
  function _u(e, t, n) {
    var r = 0
    t && (r |= 4), Bv(n, e, r, t)
  }
  var Po = '_reactListening' + Math.random().toString(36).slice(2)
  function zs(e) {
    if (!e[Po]) {
      ;(e[Po] = !0),
        Qm.forEach(function (n) {
          n !== 'selectionchange' && (B_.has(n) || _u(n, !1, e), _u(n, !0, e))
        })
      var t = e.nodeType === 9 ? e : e.ownerDocument
      t === null || t[Po] || ((t[Po] = !0), _u('selectionchange', !1, t))
    }
  }
  function Bv(e, t, n, r) {
    switch (Cv(t)) {
      case 1:
        var i = r_
        break
      case 4:
        i = i_
        break
      default:
        i = Nd
    }
    ;(n = i.bind(null, t, n, e)),
      (i = void 0),
      !wc || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1)
  }
  function wu(e, t, n, r, i) {
    var s = r
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return
        var o = r.tag
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo
          if (a === i || (a.nodeType === 8 && a.parentNode === i)) break
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var l = o.tag
              if (
                (l === 3 || l === 4) &&
                ((l = o.stateNode.containerInfo),
                l === i || (l.nodeType === 8 && l.parentNode === i))
              )
                return
              o = o.return
            }
          for (; a !== null; ) {
            if (((o = Dr(a)), o === null)) return
            if (((l = o.tag), l === 5 || l === 6)) {
              r = s = o
              continue e
            }
            a = a.parentNode
          }
        }
        r = r.return
      }
    fv(function () {
      var u = s,
        d = Od(n),
        p = []
      e: {
        var f = jv.get(e)
        if (f !== void 0) {
          var S = Ad,
            k = e
          switch (e) {
            case 'keypress':
              if (Go(n) === 0) break e
            case 'keydown':
            case 'keyup':
              S = __
              break
            case 'focusin':
              ;(k = 'focus'), (S = hu)
              break
            case 'focusout':
              ;(k = 'blur'), (S = hu)
              break
            case 'beforeblur':
            case 'afterblur':
              S = hu
              break
            case 'click':
              if (n.button === 2) break e
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              S = Dh
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              S = a_
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              S = k_
              break
            case Uv:
            case Fv:
            case $v:
              S = c_
              break
            case zv:
              S = I_
              break
            case 'scroll':
              S = s_
              break
            case 'wheel':
              S = C_
              break
            case 'copy':
            case 'cut':
            case 'paste':
              S = f_
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              S = Mh
          }
          var E = (t & 4) !== 0,
            N = !E && e === 'scroll',
            m = E ? (f !== null ? f + 'Capture' : null) : f
          E = []
          for (var h = u, v; h !== null; ) {
            v = h
            var w = v.stateNode
            if (
              (v.tag === 5 &&
                w !== null &&
                ((v = w), m !== null && ((w = As(h, m)), w != null && E.push(js(h, w, v)))),
              N)
            )
              break
            h = h.return
          }
          0 < E.length && ((f = new S(f, k, null, n, d)), p.push({ event: f, listeners: E }))
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((f = e === 'mouseover' || e === 'pointerover'),
            (S = e === 'mouseout' || e === 'pointerout'),
            f && n !== yc && (k = n.relatedTarget || n.fromElement) && (Dr(k) || k[Ln]))
          )
            break e
          if (
            (S || f) &&
            ((f =
              d.window === d
                ? d
                : (f = d.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
            S
              ? ((k = n.relatedTarget || n.toElement),
                (S = u),
                (k = k ? Dr(k) : null),
                k !== null && ((N = Qr(k)), k !== N || (k.tag !== 5 && k.tag !== 6)) && (k = null))
              : ((S = null), (k = u)),
            S !== k)
          ) {
            if (
              ((E = Dh),
              (w = 'onMouseLeave'),
              (m = 'onMouseEnter'),
              (h = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((E = Mh), (w = 'onPointerLeave'), (m = 'onPointerEnter'), (h = 'pointer')),
              (N = S == null ? f : fi(S)),
              (v = k == null ? f : fi(k)),
              (f = new E(w, h + 'leave', S, n, d)),
              (f.target = N),
              (f.relatedTarget = v),
              (w = null),
              Dr(d) === u &&
                ((E = new E(m, h + 'enter', k, n, d)),
                (E.target = v),
                (E.relatedTarget = N),
                (w = E)),
              (N = w),
              S && k)
            )
              t: {
                for (E = S, m = k, h = 0, v = E; v; v = ni(v)) h++
                for (v = 0, w = m; w; w = ni(w)) v++
                for (; 0 < h - v; ) (E = ni(E)), h--
                for (; 0 < v - h; ) (m = ni(m)), v--
                for (; h--; ) {
                  if (E === m || (m !== null && E === m.alternate)) break t
                  ;(E = ni(E)), (m = ni(m))
                }
                E = null
              }
            else E = null
            S !== null && Yh(p, f, S, E, !1), k !== null && N !== null && Yh(p, N, k, E, !0)
          }
        }
        e: {
          if (
            ((f = u ? fi(u) : window),
            (S = f.nodeName && f.nodeName.toLowerCase()),
            S === 'select' || (S === 'input' && f.type === 'file'))
          )
            var _ = M_
          else if (bh(f))
            if (Nv) _ = U_
            else {
              _ = L_
              var L = A_
            }
          else
            (S = f.nodeName) &&
              S.toLowerCase() === 'input' &&
              (f.type === 'checkbox' || f.type === 'radio') &&
              (_ = b_)
          if (_ && (_ = _(e, u))) {
            Dv(p, _, n, d)
            break e
          }
          L && L(e, f, u),
            e === 'focusout' &&
              (L = f._wrapperState) &&
              L.controlled &&
              f.type === 'number' &&
              hc(f, 'number', f.value)
        }
        switch (((L = u ? fi(u) : window), e)) {
          case 'focusin':
            ;(bh(L) || L.contentEditable === 'true') && ((ci = L), (Tc = u), (Es = null))
            break
          case 'focusout':
            Es = Tc = ci = null
            break
          case 'mousedown':
            Cc = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(Cc = !1), jh(p, n, d)
            break
          case 'selectionchange':
            if (z_) break
          case 'keydown':
          case 'keyup':
            jh(p, n, d)
        }
        var I
        if (bd)
          e: {
            switch (e) {
              case 'compositionstart':
                var x = 'onCompositionStart'
                break e
              case 'compositionend':
                x = 'onCompositionEnd'
                break e
              case 'compositionupdate':
                x = 'onCompositionUpdate'
                break e
            }
            x = void 0
          }
        else
          ui
            ? Rv(e, n) && (x = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === 229 && (x = 'onCompositionStart')
        x &&
          (Ov &&
            n.locale !== 'ko' &&
            (ui || x !== 'onCompositionStart'
              ? x === 'onCompositionEnd' && ui && (I = xv())
              : ((nr = d), (Md = 'value' in nr ? nr.value : nr.textContent), (ui = !0))),
          (L = _a(u, x)),
          0 < L.length &&
            ((x = new Nh(x, e, null, n, d)),
            p.push({ event: x, listeners: L }),
            I ? (x.data = I) : ((I = Pv(n)), I !== null && (x.data = I)))),
          (I = O_ ? R_(e, n) : P_(e, n)) &&
            ((u = _a(u, 'onBeforeInput')),
            0 < u.length &&
              ((d = new Nh('onBeforeInput', 'beforeinput', null, n, d)),
              p.push({ event: d, listeners: u }),
              (d.data = I)))
      }
      Wv(p, t)
    })
  }
  function js(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
  }
  function _a(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
      var i = e,
        s = i.stateNode
      i.tag === 5 &&
        s !== null &&
        ((i = s),
        (s = As(e, n)),
        s != null && r.unshift(js(e, s, i)),
        (s = As(e, t)),
        s != null && r.push(js(e, s, i))),
        (e = e.return)
    }
    return r
  }
  function ni(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
  }
  function Yh(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        l = a.alternate,
        u = a.stateNode
      if (l !== null && l === r) break
      a.tag === 5 &&
        u !== null &&
        ((a = u),
        i
          ? ((l = As(n, s)), l != null && o.unshift(js(n, l, a)))
          : i || ((l = As(n, s)), l != null && o.push(js(n, l, a)))),
        (n = n.return)
    }
    o.length !== 0 && e.push({ event: t, listeners: o })
  }
  var Y_ = /\r\n?/g,
    H_ = /\u0000|\uFFFD/g
  function Hh(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Y_,
        `
`
      )
      .replace(H_, '')
  }
  function Do(e, t, n) {
    if (((t = Hh(t)), Hh(e) !== t && n)) throw Error(O(425))
  }
  function wa() {}
  var xc = null,
    Oc = null
  function Rc(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    )
  }
  var Pc = typeof setTimeout == 'function' ? setTimeout : void 0,
    V_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Vh = typeof Promise == 'function' ? Promise : void 0,
    G_ =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Vh < 'u'
        ? function (e) {
            return Vh.resolve(null).then(e).catch(K_)
          }
        : Pc
  function K_(e) {
    setTimeout(function () {
      throw e
    })
  }
  function Su(e, t) {
    var n = t,
      r = 0
    do {
      var i = n.nextSibling
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === '/$')) {
          if (r === 0) {
            e.removeChild(i), Us(t)
            return
          }
          r--
        } else (n !== '$' && n !== '$?' && n !== '$!') || r++
      n = i
    } while (n)
    Us(t)
  }
  function ur(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType
      if (t === 1 || t === 3) break
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
        if (t === '/$') return null
      }
    }
    return e
  }
  function Gh(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data
        if (n === '$' || n === '$!' || n === '$?') {
          if (t === 0) return e
          t--
        } else n === '/$' && t++
      }
      e = e.previousSibling
    }
    return null
  }
  var Ji = Math.random().toString(36).slice(2),
    fn = '__reactFiber$' + Ji,
    Ws = '__reactProps$' + Ji,
    Ln = '__reactContainer$' + Ji,
    Dc = '__reactEvents$' + Ji,
    q_ = '__reactListeners$' + Ji,
    Q_ = '__reactHandles$' + Ji
  function Dr(e) {
    var t = e[fn]
    if (t) return t
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ln] || n[fn])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = Gh(e); e !== null; ) {
            if ((n = e[fn])) return n
            e = Gh(e)
          }
        return t
      }
      ;(e = n), (n = e.parentNode)
    }
    return null
  }
  function ao(e) {
    return (
      (e = e[fn] || e[Ln]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
    )
  }
  function fi(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(O(33))
  }
  function rl(e) {
    return e[Ws] || null
  }
  var Nc = [],
    hi = -1
  function Sr(e) {
    return { current: e }
  }
  function xe(e) {
    0 > hi || ((e.current = Nc[hi]), (Nc[hi] = null), hi--)
  }
  function Te(e, t) {
    hi++, (Nc[hi] = e.current), (e.current = t)
  }
  var yr = {},
    dt = Sr(yr),
    Et = Sr(!1),
    zr = yr
  function bi(e, t) {
    var n = e.type.contextTypes
    if (!n) return yr
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext
    var i = {},
      s
    for (s in n) i[s] = t[s]
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    )
  }
  function It(e) {
    return (e = e.childContextTypes), e != null
  }
  function Sa() {
    xe(Et), xe(dt)
  }
  function Kh(e, t, n) {
    if (dt.current !== yr) throw Error(O(168))
    Te(dt, t), Te(Et, n)
  }
  function Yv(e, t, n) {
    var r = e.stateNode
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n
    r = r.getChildContext()
    for (var i in r) if (!(i in t)) throw Error(O(108, A1(e) || 'Unknown', i))
    return Le({}, n, r)
  }
  function ka(e) {
    return (
      (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yr),
      (zr = dt.current),
      Te(dt, e),
      Te(Et, Et.current),
      !0
    )
  }
  function qh(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error(O(169))
    n
      ? ((e = Yv(e, t, zr)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        xe(Et),
        xe(dt),
        Te(dt, e))
      : xe(Et),
      Te(Et, n)
  }
  var Tn = null,
    il = !1,
    ku = !1
  function Hv(e) {
    Tn === null ? (Tn = [e]) : Tn.push(e)
  }
  function J_(e) {
    ;(il = !0), Hv(e)
  }
  function kr() {
    if (!ku && Tn !== null) {
      ku = !0
      var e = 0,
        t = ye
      try {
        var n = Tn
        for (ye = 1; e < n.length; e++) {
          var r = n[e]
          do r = r(!0)
          while (r !== null)
        }
        ;(Tn = null), (il = !1)
      } catch (i) {
        throw (Tn !== null && (Tn = Tn.slice(e + 1)), vv(Rd, kr), i)
      } finally {
        ;(ye = t), (ku = !1)
      }
    }
    return null
  }
  var pi = [],
    mi = 0,
    Ea = null,
    Ia = 0,
    Ft = [],
    $t = 0,
    jr = null,
    Cn = 1,
    xn = ''
  function Or(e, t) {
    ;(pi[mi++] = Ia), (pi[mi++] = Ea), (Ea = e), (Ia = t)
  }
  function Vv(e, t, n) {
    ;(Ft[$t++] = Cn), (Ft[$t++] = xn), (Ft[$t++] = jr), (jr = e)
    var r = Cn
    e = xn
    var i = 32 - nn(r) - 1
    ;(r &= ~(1 << i)), (n += 1)
    var s = 32 - nn(t) + i
    if (30 < s) {
      var o = i - (i % 5)
      ;(s = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (i -= o),
        (Cn = (1 << (32 - nn(t) + i)) | (n << i) | r),
        (xn = s + e)
    } else (Cn = (1 << s) | (n << i) | r), (xn = e)
  }
  function Fd(e) {
    e.return !== null && (Or(e, 1), Vv(e, 1, 0))
  }
  function $d(e) {
    for (; e === Ea; ) (Ea = pi[--mi]), (pi[mi] = null), (Ia = pi[--mi]), (pi[mi] = null)
    for (; e === jr; )
      (jr = Ft[--$t]),
        (Ft[$t] = null),
        (xn = Ft[--$t]),
        (Ft[$t] = null),
        (Cn = Ft[--$t]),
        (Ft[$t] = null)
  }
  var Nt = null,
    Dt = null,
    De = !1,
    en = null
  function Gv(e, t) {
    var n = jt(5, null, null, 0)
    ;(n.elementType = 'DELETED'),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
  }
  function Qh(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type
        return (
          (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
          t !== null ? ((e.stateNode = t), (Nt = e), (Dt = ur(t.firstChild)), !0) : !1
        )
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (Nt = e), (Dt = null), !0) : !1
        )
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = jr !== null ? { id: Cn, overflow: xn } : null),
              (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
              (n = jt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (Nt = e),
              (Dt = null),
              !0)
            : !1
        )
      default:
        return !1
    }
  }
  function Mc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
  }
  function Ac(e) {
    if (De) {
      var t = Dt
      if (t) {
        var n = t
        if (!Qh(e, t)) {
          if (Mc(e)) throw Error(O(418))
          t = ur(n.nextSibling)
          var r = Nt
          t && Qh(e, t) ? Gv(r, n) : ((e.flags = (e.flags & -4097) | 2), (De = !1), (Nt = e))
        }
      } else {
        if (Mc(e)) throw Error(O(418))
        ;(e.flags = (e.flags & -4097) | 2), (De = !1), (Nt = e)
      }
    }
  }
  function Jh(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
    Nt = e
  }
  function No(e) {
    if (e !== Nt) return !1
    if (!De) return Jh(e), (De = !0), !1
    var t
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type), (t = t !== 'head' && t !== 'body' && !Rc(e.type, e.memoizedProps))),
      t && (t = Dt))
    ) {
      if (Mc(e)) throw (Kv(), Error(O(418)))
      for (; t; ) Gv(e, t), (t = ur(t.nextSibling))
    }
    if ((Jh(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(O(317))
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data
            if (n === '/$') {
              if (t === 0) {
                Dt = ur(e.nextSibling)
                break e
              }
              t--
            } else (n !== '$' && n !== '$!' && n !== '$?') || t++
          }
          e = e.nextSibling
        }
        Dt = null
      }
    } else Dt = Nt ? ur(e.stateNode.nextSibling) : null
    return !0
  }
  function Kv() {
    for (var e = Dt; e; ) e = ur(e.nextSibling)
  }
  function Ui() {
    ;(Dt = Nt = null), (De = !1)
  }
  function zd(e) {
    en === null ? (en = [e]) : en.push(e)
  }
  var X_ = zn.ReactCurrentBatchConfig
  function Xt(e, t) {
    if (e && e.defaultProps) {
      ;(t = Le({}, t)), (e = e.defaultProps)
      for (var n in e) t[n] === void 0 && (t[n] = e[n])
      return t
    }
    return t
  }
  var Ta = Sr(null),
    Ca = null,
    vi = null,
    jd = null
  function Wd() {
    jd = vi = Ca = null
  }
  function Bd(e) {
    var t = Ta.current
    xe(Ta), (e._currentValue = t)
  }
  function Lc(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break
      e = e.return
    }
  }
  function Ci(e, t) {
    ;(Ca = e),
      (jd = vi = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (kt = !0), (e.firstContext = null))
  }
  function Bt(e) {
    var t = e._currentValue
    if (jd !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), vi === null)) {
        if (Ca === null) throw Error(O(308))
        ;(vi = e), (Ca.dependencies = { lanes: 0, firstContext: e })
      } else vi = vi.next = e
    return t
  }
  var Nr = null
  function Yd(e) {
    Nr === null ? (Nr = [e]) : Nr.push(e)
  }
  function qv(e, t, n, r) {
    var i = t.interleaved
    return (
      i === null ? ((n.next = n), Yd(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      bn(e, r)
    )
  }
  function bn(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return)
    return n.tag === 3 ? n.stateNode : null
  }
  var Kn = !1
  function Hd(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    }
  }
  function Qv(e, t) {
    ;(e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        })
  }
  function Nn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
  }
  function cr(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), (ce & 2) !== 0)) {
      var i = r.pending
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), bn(e, n)
      )
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Yd(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      bn(e, n)
    )
  }
  function Ko(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
      var r = t.lanes
      ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Pd(e, n)
    }
  }
  function Xh(e, t) {
    var n = e.updateQueue,
      r = e.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        s = null
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          }
          s === null ? (i = s = o) : (s = s.next = o), (n = n.next)
        } while (n !== null)
        s === null ? (i = s = t) : (s = s.next = t)
      } else i = s = t
      ;(n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n)
      return
    }
    ;(e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t)
  }
  function xa(e, t, n, r) {
    var i = e.updateQueue
    Kn = !1
    var s = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      a = i.shared.pending
    if (a !== null) {
      i.shared.pending = null
      var l = a,
        u = l.next
      ;(l.next = null), o === null ? (s = u) : (o.next = u), (o = l)
      var d = e.alternate
      d !== null &&
        ((d = d.updateQueue),
        (a = d.lastBaseUpdate),
        a !== o && (a === null ? (d.firstBaseUpdate = u) : (a.next = u), (d.lastBaseUpdate = l)))
    }
    if (s !== null) {
      var p = i.baseState
      ;(o = 0), (d = u = l = null), (a = s)
      do {
        var f = a.lane,
          S = a.eventTime
        if ((r & f) === f) {
          d !== null &&
            (d = d.next =
              {
                eventTime: S,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              })
          e: {
            var k = e,
              E = a
            switch (((f = t), (S = n), E.tag)) {
              case 1:
                if (((k = E.payload), typeof k == 'function')) {
                  p = k.call(S, p, f)
                  break e
                }
                p = k
                break e
              case 3:
                k.flags = (k.flags & -65537) | 128
              case 0:
                if (
                  ((k = E.payload), (f = typeof k == 'function' ? k.call(S, p, f) : k), f == null)
                )
                  break e
                p = Le({}, p, f)
                break e
              case 2:
                Kn = !0
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64), (f = i.effects), f === null ? (i.effects = [a]) : f.push(a))
        } else
          (S = {
            eventTime: S,
            lane: f,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            d === null ? ((u = d = S), (l = p)) : (d = d.next = S),
            (o |= f)
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break
          ;(f = a), (a = f.next), (f.next = null), (i.lastBaseUpdate = f), (i.shared.pending = null)
        }
      } while (1)
      if (
        (d === null && (l = p),
        (i.baseState = l),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = d),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t
        do (o |= i.lane), (i = i.next)
        while (i !== t)
      } else s === null && (i.shared.lanes = 0)
      ;(Br |= o), (e.lanes = o), (e.memoizedState = p)
    }
  }
  function Zh(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != 'function')) throw Error(O(191, i))
          i.call(r)
        }
      }
  }
  var Jv = new qm.Component().refs
  function bc(e, t, n, r) {
    ;(t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Le({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n)
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Qr(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals
      var r = gt(),
        i = fr(e),
        s = Nn(r, i)
      ;(s.payload = t),
        n != null && (s.callback = n),
        (t = cr(e, s, i)),
        t !== null && (rn(t, e, i, r), Ko(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals
      var r = gt(),
        i = fr(e),
        s = Nn(r, i)
      ;(s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = cr(e, s, i)),
        t !== null && (rn(t, e, i, r), Ko(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals
      var n = gt(),
        r = fr(e),
        i = Nn(n, r)
      ;(i.tag = 2),
        t != null && (i.callback = t),
        (t = cr(e, i, r)),
        t !== null && (rn(t, e, r, n), Ko(t, e, r))
    },
  }
  function ep(e, t, n, r, i, s, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, s, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !$s(n, r) || !$s(i, s)
        : !0
    )
  }
  function Xv(e, t, n) {
    var r = !1,
      i = yr,
      s = t.contextType
    return (
      typeof s == 'object' && s !== null
        ? (s = Bt(s))
        : ((i = It(t) ? zr : dt.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? bi(e, i) : yr)),
      (t = new t(n, s)),
      (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = sl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    )
  }
  function tp(e, t, n, r) {
    ;(e = t.state),
      typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && sl.enqueueReplaceState(t, t.state, null)
  }
  function Uc(e, t, n, r) {
    var i = e.stateNode
    ;(i.props = n), (i.state = e.memoizedState), (i.refs = Jv), Hd(e)
    var s = t.contextType
    typeof s == 'object' && s !== null
      ? (i.context = Bt(s))
      : ((s = It(t) ? zr : dt.current), (i.context = bi(e, s))),
      (i.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == 'function' && (bc(e, t, s, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function' ||
        (typeof i.UNSAFE_componentWillMount != 'function' &&
          typeof i.componentWillMount != 'function') ||
        ((t = i.state),
        typeof i.componentWillMount == 'function' && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount(),
        t !== i.state && sl.enqueueReplaceState(i, i.state, null),
        xa(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
  }
  function ls(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(O(309))
          var r = n.stateNode
        }
        if (!r) throw Error(O(147, e))
        var i = r,
          s = '' + e
        return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === s
          ? t.ref
          : ((t = function (o) {
              var a = i.refs
              a === Jv && (a = i.refs = {}), o === null ? delete a[s] : (a[s] = o)
            }),
            (t._stringRef = s),
            t)
      }
      if (typeof e != 'string') throw Error(O(284))
      if (!n._owner) throw Error(O(290, e))
    }
    return e
  }
  function Mo(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        O(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      ))
    )
  }
  function np(e) {
    var t = e._init
    return t(e._payload)
  }
  function Zv(e) {
    function t(m, h) {
      if (e) {
        var v = m.deletions
        v === null ? ((m.deletions = [h]), (m.flags |= 16)) : v.push(h)
      }
    }
    function n(m, h) {
      if (!e) return null
      for (; h !== null; ) t(m, h), (h = h.sibling)
      return null
    }
    function r(m, h) {
      for (m = new Map(); h !== null; )
        h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling)
      return m
    }
    function i(m, h) {
      return (m = hr(m, h)), (m.index = 0), (m.sibling = null), m
    }
    function s(m, h, v) {
      return (
        (m.index = v),
        e
          ? ((v = m.alternate),
            v !== null ? ((v = v.index), v < h ? ((m.flags |= 2), h) : v) : ((m.flags |= 2), h))
          : ((m.flags |= 1048576), h)
      )
    }
    function o(m) {
      return e && m.alternate === null && (m.flags |= 2), m
    }
    function a(m, h, v, w) {
      return h === null || h.tag !== 6
        ? ((h = Ru(v, m.mode, w)), (h.return = m), h)
        : ((h = i(h, v)), (h.return = m), h)
    }
    function l(m, h, v, w) {
      var _ = v.type
      return _ === li
        ? d(m, h, v.props.children, w, v.key)
        : h !== null &&
          (h.elementType === _ ||
            (typeof _ == 'object' && _ !== null && _.$$typeof === Gn && np(_) === h.type))
        ? ((w = i(h, v.props)), (w.ref = ls(m, h, v)), (w.return = m), w)
        : ((w = ea(v.type, v.key, v.props, null, m.mode, w)),
          (w.ref = ls(m, h, v)),
          (w.return = m),
          w)
    }
    function u(m, h, v, w) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== v.containerInfo ||
        h.stateNode.implementation !== v.implementation
        ? ((h = Pu(v, m.mode, w)), (h.return = m), h)
        : ((h = i(h, v.children || [])), (h.return = m), h)
    }
    function d(m, h, v, w, _) {
      return h === null || h.tag !== 7
        ? ((h = Ur(v, m.mode, w, _)), (h.return = m), h)
        : ((h = i(h, v)), (h.return = m), h)
    }
    function p(m, h, v) {
      if ((typeof h == 'string' && h !== '') || typeof h == 'number')
        return (h = Ru('' + h, m.mode, v)), (h.return = m), h
      if (typeof h == 'object' && h !== null) {
        switch (h.$$typeof) {
          case ko:
            return (
              (v = ea(h.type, h.key, h.props, null, m.mode, v)),
              (v.ref = ls(m, null, h)),
              (v.return = m),
              v
            )
          case ai:
            return (h = Pu(h, m.mode, v)), (h.return = m), h
          case Gn:
            var w = h._init
            return p(m, w(h._payload), v)
        }
        if (ps(h) || rs(h)) return (h = Ur(h, m.mode, v, null)), (h.return = m), h
        Mo(m, h)
      }
      return null
    }
    function f(m, h, v, w) {
      var _ = h !== null ? h.key : null
      if ((typeof v == 'string' && v !== '') || typeof v == 'number')
        return _ !== null ? null : a(m, h, '' + v, w)
      if (typeof v == 'object' && v !== null) {
        switch (v.$$typeof) {
          case ko:
            return v.key === _ ? l(m, h, v, w) : null
          case ai:
            return v.key === _ ? u(m, h, v, w) : null
          case Gn:
            return (_ = v._init), f(m, h, _(v._payload), w)
        }
        if (ps(v) || rs(v)) return _ !== null ? null : d(m, h, v, w, null)
        Mo(m, v)
      }
      return null
    }
    function S(m, h, v, w, _) {
      if ((typeof w == 'string' && w !== '') || typeof w == 'number')
        return (m = m.get(v) || null), a(h, m, '' + w, _)
      if (typeof w == 'object' && w !== null) {
        switch (w.$$typeof) {
          case ko:
            return (m = m.get(w.key === null ? v : w.key) || null), l(h, m, w, _)
          case ai:
            return (m = m.get(w.key === null ? v : w.key) || null), u(h, m, w, _)
          case Gn:
            var L = w._init
            return S(m, h, v, L(w._payload), _)
        }
        if (ps(w) || rs(w)) return (m = m.get(v) || null), d(h, m, w, _, null)
        Mo(h, w)
      }
      return null
    }
    function k(m, h, v, w) {
      for (var _ = null, L = null, I = h, x = (h = 0), W = null; I !== null && x < v.length; x++) {
        I.index > x ? ((W = I), (I = null)) : (W = I.sibling)
        var j = f(m, I, v[x], w)
        if (j === null) {
          I === null && (I = W)
          break
        }
        e && I && j.alternate === null && t(m, I),
          (h = s(j, h, x)),
          L === null ? (_ = j) : (L.sibling = j),
          (L = j),
          (I = W)
      }
      if (x === v.length) return n(m, I), De && Or(m, x), _
      if (I === null) {
        for (; x < v.length; x++)
          (I = p(m, v[x], w)),
            I !== null && ((h = s(I, h, x)), L === null ? (_ = I) : (L.sibling = I), (L = I))
        return De && Or(m, x), _
      }
      for (I = r(m, I); x < v.length; x++)
        (W = S(I, m, x, v[x], w)),
          W !== null &&
            (e && W.alternate !== null && I.delete(W.key === null ? x : W.key),
            (h = s(W, h, x)),
            L === null ? (_ = W) : (L.sibling = W),
            (L = W))
      return (
        e &&
          I.forEach(function (re) {
            return t(m, re)
          }),
        De && Or(m, x),
        _
      )
    }
    function E(m, h, v, w) {
      var _ = rs(v)
      if (typeof _ != 'function') throw Error(O(150))
      if (((v = _.call(v)), v == null)) throw Error(O(151))
      for (
        var L = (_ = null), I = h, x = (h = 0), W = null, j = v.next();
        I !== null && !j.done;
        x++, j = v.next()
      ) {
        I.index > x ? ((W = I), (I = null)) : (W = I.sibling)
        var re = f(m, I, j.value, w)
        if (re === null) {
          I === null && (I = W)
          break
        }
        e && I && re.alternate === null && t(m, I),
          (h = s(re, h, x)),
          L === null ? (_ = re) : (L.sibling = re),
          (L = re),
          (I = W)
      }
      if (j.done) return n(m, I), De && Or(m, x), _
      if (I === null) {
        for (; !j.done; x++, j = v.next())
          (j = p(m, j.value, w)),
            j !== null && ((h = s(j, h, x)), L === null ? (_ = j) : (L.sibling = j), (L = j))
        return De && Or(m, x), _
      }
      for (I = r(m, I); !j.done; x++, j = v.next())
        (j = S(I, m, x, j.value, w)),
          j !== null &&
            (e && j.alternate !== null && I.delete(j.key === null ? x : j.key),
            (h = s(j, h, x)),
            L === null ? (_ = j) : (L.sibling = j),
            (L = j))
      return (
        e &&
          I.forEach(function (Z) {
            return t(m, Z)
          }),
        De && Or(m, x),
        _
      )
    }
    function N(m, h, v, w) {
      if (
        (typeof v == 'object' &&
          v !== null &&
          v.type === li &&
          v.key === null &&
          (v = v.props.children),
        typeof v == 'object' && v !== null)
      ) {
        switch (v.$$typeof) {
          case ko:
            e: {
              for (var _ = v.key, L = h; L !== null; ) {
                if (L.key === _) {
                  if (((_ = v.type), _ === li)) {
                    if (L.tag === 7) {
                      n(m, L.sibling), (h = i(L, v.props.children)), (h.return = m), (m = h)
                      break e
                    }
                  } else if (
                    L.elementType === _ ||
                    (typeof _ == 'object' && _ !== null && _.$$typeof === Gn && np(_) === L.type)
                  ) {
                    n(m, L.sibling),
                      (h = i(L, v.props)),
                      (h.ref = ls(m, L, v)),
                      (h.return = m),
                      (m = h)
                    break e
                  }
                  n(m, L)
                  break
                } else t(m, L)
                L = L.sibling
              }
              v.type === li
                ? ((h = Ur(v.props.children, m.mode, w, v.key)), (h.return = m), (m = h))
                : ((w = ea(v.type, v.key, v.props, null, m.mode, w)),
                  (w.ref = ls(m, h, v)),
                  (w.return = m),
                  (m = w))
            }
            return o(m)
          case ai:
            e: {
              for (L = v.key; h !== null; ) {
                if (h.key === L)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === v.containerInfo &&
                    h.stateNode.implementation === v.implementation
                  ) {
                    n(m, h.sibling), (h = i(h, v.children || [])), (h.return = m), (m = h)
                    break e
                  } else {
                    n(m, h)
                    break
                  }
                else t(m, h)
                h = h.sibling
              }
              ;(h = Pu(v, m.mode, w)), (h.return = m), (m = h)
            }
            return o(m)
          case Gn:
            return (L = v._init), N(m, h, L(v._payload), w)
        }
        if (ps(v)) return k(m, h, v, w)
        if (rs(v)) return E(m, h, v, w)
        Mo(m, v)
      }
      return (typeof v == 'string' && v !== '') || typeof v == 'number'
        ? ((v = '' + v),
          h !== null && h.tag === 6
            ? (n(m, h.sibling), (h = i(h, v)), (h.return = m), (m = h))
            : (n(m, h), (h = Ru(v, m.mode, w)), (h.return = m), (m = h)),
          o(m))
        : n(m, h)
    }
    return N
  }
  var Fi = Zv(!0),
    eg = Zv(!1),
    lo = {},
    vn = Sr(lo),
    Bs = Sr(lo),
    Ys = Sr(lo)
  function Mr(e) {
    if (e === lo) throw Error(O(174))
    return e
  }
  function Vd(e, t) {
    switch ((Te(Ys, t), Te(Bs, e), Te(vn, lo), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : mc(null, '')
        break
      default:
        ;(e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = mc(t, e))
    }
    xe(vn), Te(vn, t)
  }
  function $i() {
    xe(vn), xe(Bs), xe(Ys)
  }
  function tg(e) {
    Mr(Ys.current)
    var t = Mr(vn.current),
      n = mc(t, e.type)
    t !== n && (Te(Bs, e), Te(vn, n))
  }
  function Gd(e) {
    Bs.current === e && (xe(vn), xe(Bs))
  }
  var Me = Sr(0)
  function Oa(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState
        if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
          return t
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t
      } else if (t.child !== null) {
        ;(t.child.return = t), (t = t.child)
        continue
      }
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
  }
  var Eu = []
  function Kd() {
    for (var e = 0; e < Eu.length; e++) Eu[e]._workInProgressVersionPrimary = null
    Eu.length = 0
  }
  var qo = zn.ReactCurrentDispatcher,
    Iu = zn.ReactCurrentBatchConfig,
    Wr = 0,
    Ae = null,
    Ge = null,
    Ze = null,
    Ra = !1,
    Is = !1,
    Hs = 0,
    Z_ = 0
  function at() {
    throw Error(O(321))
  }
  function qd(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++) if (!sn(e[n], t[n])) return !1
    return !0
  }
  function Qd(e, t, n, r, i, s) {
    if (
      ((Wr = s),
      (Ae = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (qo.current = e === null || e.memoizedState === null ? rw : iw),
      (e = n(r, i)),
      Is)
    ) {
      s = 0
      do {
        if (((Is = !1), (Hs = 0), 25 <= s)) throw Error(O(301))
        ;(s += 1), (Ze = Ge = null), (t.updateQueue = null), (qo.current = sw), (e = n(r, i))
      } while (Is)
    }
    if (
      ((qo.current = Pa),
      (t = Ge !== null && Ge.next !== null),
      (Wr = 0),
      (Ze = Ge = Ae = null),
      (Ra = !1),
      t)
    )
      throw Error(O(300))
    return e
  }
  function Jd() {
    var e = Hs !== 0
    return (Hs = 0), e
  }
  function dn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return Ze === null ? (Ae.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze
  }
  function Yt() {
    if (Ge === null) {
      var e = Ae.alternate
      e = e !== null ? e.memoizedState : null
    } else e = Ge.next
    var t = Ze === null ? Ae.memoizedState : Ze.next
    if (t !== null) (Ze = t), (Ge = e)
    else {
      if (e === null) throw Error(O(310))
      ;(Ge = e),
        (e = {
          memoizedState: Ge.memoizedState,
          baseState: Ge.baseState,
          baseQueue: Ge.baseQueue,
          queue: Ge.queue,
          next: null,
        }),
        Ze === null ? (Ae.memoizedState = Ze = e) : (Ze = Ze.next = e)
    }
    return Ze
  }
  function Vs(e, t) {
    return typeof t == 'function' ? t(e) : t
  }
  function Tu(e) {
    var t = Yt(),
      n = t.queue
    if (n === null) throw Error(O(311))
    n.lastRenderedReducer = e
    var r = Ge,
      i = r.baseQueue,
      s = n.pending
    if (s !== null) {
      if (i !== null) {
        var o = i.next
        ;(i.next = s.next), (s.next = o)
      }
      ;(r.baseQueue = i = s), (n.pending = null)
    }
    if (i !== null) {
      ;(s = i.next), (r = r.baseState)
      var a = (o = null),
        l = null,
        u = s
      do {
        var d = u.lane
        if ((Wr & d) === d)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action))
        else {
          var p = {
            lane: d,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          }
          l === null ? ((a = l = p), (o = r)) : (l = l.next = p), (Ae.lanes |= d), (Br |= d)
        }
        u = u.next
      } while (u !== null && u !== s)
      l === null ? (o = r) : (l.next = a),
        sn(r, t.memoizedState) || (kt = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = l),
        (n.lastRenderedState = r)
    }
    if (((e = n.interleaved), e !== null)) {
      i = e
      do (s = i.lane), (Ae.lanes |= s), (Br |= s), (i = i.next)
      while (i !== e)
    } else i === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
  }
  function Cu(e) {
    var t = Yt(),
      n = t.queue
    if (n === null) throw Error(O(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
      i = n.pending,
      s = t.memoizedState
    if (i !== null) {
      n.pending = null
      var o = (i = i.next)
      do (s = e(s, o.action)), (o = o.next)
      while (o !== i)
      sn(s, t.memoizedState) || (kt = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s)
    }
    return [s, r]
  }
  function ng() {}
  function rg(e, t) {
    var n = Ae,
      r = Yt(),
      i = t(),
      s = !sn(r.memoizedState, i)
    if (
      (s && ((r.memoizedState = i), (kt = !0)),
      (r = r.queue),
      Xd(og.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Ze !== null && Ze.memoizedState.tag & 1))
    ) {
      if (((n.flags |= 2048), Gs(9, sg.bind(null, n, r, i, t), void 0, null), et === null))
        throw Error(O(349))
      ;(Wr & 30) !== 0 || ig(n, t, i)
    }
    return i
  }
  function ig(e, t, n) {
    ;(e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }), (Ae.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
  }
  function sg(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), ag(t) && lg(e)
  }
  function og(e, t, n) {
    return n(function () {
      ag(t) && lg(e)
    })
  }
  function ag(e) {
    var t = e.getSnapshot
    e = e.value
    try {
      var n = t()
      return !sn(e, n)
    } catch {
      return !0
    }
  }
  function lg(e) {
    var t = bn(e, 1)
    t !== null && rn(t, e, 1, -1)
  }
  function rp(e) {
    var t = dn()
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vs,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = nw.bind(null, Ae, e)),
      [t.memoizedState, e]
    )
  }
  function Gs(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ae.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ae.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    )
  }
  function ug() {
    return Yt().memoizedState
  }
  function Qo(e, t, n, r) {
    var i = dn()
    ;(Ae.flags |= e), (i.memoizedState = Gs(1 | t, n, void 0, r === void 0 ? null : r))
  }
  function ol(e, t, n, r) {
    var i = Yt()
    r = r === void 0 ? null : r
    var s = void 0
    if (Ge !== null) {
      var o = Ge.memoizedState
      if (((s = o.destroy), r !== null && qd(r, o.deps))) {
        i.memoizedState = Gs(t, n, s, r)
        return
      }
    }
    ;(Ae.flags |= e), (i.memoizedState = Gs(1 | t, n, s, r))
  }
  function ip(e, t) {
    return Qo(8390656, 8, e, t)
  }
  function Xd(e, t) {
    return ol(2048, 8, e, t)
  }
  function cg(e, t) {
    return ol(4, 2, e, t)
  }
  function dg(e, t) {
    return ol(4, 4, e, t)
  }
  function fg(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null)
        }
      )
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null
        }
      )
  }
  function hg(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), ol(4, 4, fg.bind(null, t, e), n)
  }
  function Zd() {}
  function pg(e, t) {
    var n = Yt()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && qd(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
  }
  function mg(e, t) {
    var n = Yt()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && qd(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e)
  }
  function vg(e, t, n) {
    return (Wr & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (kt = !0)), (e.memoizedState = n))
      : (sn(n, t) || ((n = _v()), (Ae.lanes |= n), (Br |= n), (e.baseState = !0)), t)
  }
  function ew(e, t) {
    var n = ye
    ;(ye = n !== 0 && 4 > n ? n : 4), e(!0)
    var r = Iu.transition
    Iu.transition = {}
    try {
      e(!1), t()
    } finally {
      ;(ye = n), (Iu.transition = r)
    }
  }
  function gg() {
    return Yt().memoizedState
  }
  function tw(e, t, n) {
    var r = fr(e)
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), yg(e)))
      _g(t, n)
    else if (((n = qv(e, t, n, r)), n !== null)) {
      var i = gt()
      rn(n, e, r, i), wg(n, t, r)
    }
  }
  function nw(e, t, n) {
    var r = fr(e),
      i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
    if (yg(e)) _g(t, i)
    else {
      var s = e.alternate
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var o = t.lastRenderedState,
            a = s(o, n)
          if (((i.hasEagerState = !0), (i.eagerState = a), sn(a, o))) {
            var l = t.interleaved
            l === null ? ((i.next = i), Yd(t)) : ((i.next = l.next), (l.next = i)),
              (t.interleaved = i)
            return
          }
        } catch {
        } finally {
        }
      ;(n = qv(e, t, i, r)), n !== null && ((i = gt()), rn(n, e, r, i), wg(n, t, r))
    }
  }
  function yg(e) {
    var t = e.alternate
    return e === Ae || (t !== null && t === Ae)
  }
  function _g(e, t) {
    Is = Ra = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
  }
  function wg(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes
      ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Pd(e, n)
    }
  }
  var Pa = {
      readContext: Bt,
      useCallback: at,
      useContext: at,
      useEffect: at,
      useImperativeHandle: at,
      useInsertionEffect: at,
      useLayoutEffect: at,
      useMemo: at,
      useReducer: at,
      useRef: at,
      useState: at,
      useDebugValue: at,
      useDeferredValue: at,
      useTransition: at,
      useMutableSource: at,
      useSyncExternalStore: at,
      useId: at,
      unstable_isNewReconciler: !1,
    },
    rw = {
      readContext: Bt,
      useCallback: function (e, t) {
        return (dn().memoizedState = [e, t === void 0 ? null : t]), e
      },
      useContext: Bt,
      useEffect: ip,
      useImperativeHandle: function (e, t, n) {
        return (n = n != null ? n.concat([e]) : null), Qo(4194308, 4, fg.bind(null, t, e), n)
      },
      useLayoutEffect: function (e, t) {
        return Qo(4194308, 4, e, t)
      },
      useInsertionEffect: function (e, t) {
        return Qo(4, 2, e, t)
      },
      useMemo: function (e, t) {
        var n = dn()
        return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      },
      useReducer: function (e, t, n) {
        var r = dn()
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = tw.bind(null, Ae, e)),
          [r.memoizedState, e]
        )
      },
      useRef: function (e) {
        var t = dn()
        return (e = { current: e }), (t.memoizedState = e)
      },
      useState: rp,
      useDebugValue: Zd,
      useDeferredValue: function (e) {
        return (dn().memoizedState = e)
      },
      useTransition: function () {
        var e = rp(!1),
          t = e[0]
        return (e = ew.bind(null, e[1])), (dn().memoizedState = e), [t, e]
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ae,
          i = dn()
        if (De) {
          if (n === void 0) throw Error(O(407))
          n = n()
        } else {
          if (((n = t()), et === null)) throw Error(O(349))
          ;(Wr & 30) !== 0 || ig(r, t, n)
        }
        i.memoizedState = n
        var s = { value: n, getSnapshot: t }
        return (
          (i.queue = s),
          ip(og.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          Gs(9, sg.bind(null, r, s, n, t), void 0, null),
          n
        )
      },
      useId: function () {
        var e = dn(),
          t = et.identifierPrefix
        if (De) {
          var n = xn,
            r = Cn
          ;(n = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + n),
            (t = ':' + t + 'R' + n),
            (n = Hs++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += ':')
        } else (n = Z_++), (t = ':' + t + 'r' + n.toString(32) + ':')
        return (e.memoizedState = t)
      },
      unstable_isNewReconciler: !1,
    },
    iw = {
      readContext: Bt,
      useCallback: pg,
      useContext: Bt,
      useEffect: Xd,
      useImperativeHandle: hg,
      useInsertionEffect: cg,
      useLayoutEffect: dg,
      useMemo: mg,
      useReducer: Tu,
      useRef: ug,
      useState: function () {
        return Tu(Vs)
      },
      useDebugValue: Zd,
      useDeferredValue: function (e) {
        var t = Yt()
        return vg(t, Ge.memoizedState, e)
      },
      useTransition: function () {
        var e = Tu(Vs)[0],
          t = Yt().memoizedState
        return [e, t]
      },
      useMutableSource: ng,
      useSyncExternalStore: rg,
      useId: gg,
      unstable_isNewReconciler: !1,
    },
    sw = {
      readContext: Bt,
      useCallback: pg,
      useContext: Bt,
      useEffect: Xd,
      useImperativeHandle: hg,
      useInsertionEffect: cg,
      useLayoutEffect: dg,
      useMemo: mg,
      useReducer: Cu,
      useRef: ug,
      useState: function () {
        return Cu(Vs)
      },
      useDebugValue: Zd,
      useDeferredValue: function (e) {
        var t = Yt()
        return Ge === null ? (t.memoizedState = e) : vg(t, Ge.memoizedState, e)
      },
      useTransition: function () {
        var e = Cu(Vs)[0],
          t = Yt().memoizedState
        return [e, t]
      },
      useMutableSource: ng,
      useSyncExternalStore: rg,
      useId: gg,
      unstable_isNewReconciler: !1,
    }
  function zi(e, t) {
    try {
      var n = '',
        r = t
      do (n += M1(r)), (r = r.return)
      while (r)
      var i = n
    } catch (s) {
      i =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
    }
    return { value: e, source: t, stack: i, digest: null }
  }
  function xu(e, t, n) {
    return { value: e, source: null, stack: n != null ? n : null, digest: t != null ? t : null }
  }
  function Fc(e, t) {
    try {
      console.error(t.value)
    } catch (n) {
      setTimeout(function () {
        throw n
      })
    }
  }
  var ow = typeof WeakMap == 'function' ? WeakMap : Map
  function Sg(e, t, n) {
    ;(n = Nn(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var r = t.value
    return (
      (n.callback = function () {
        Na || ((Na = !0), (Kc = r)), Fc(e, t)
      }),
      n
    )
  }
  function kg(e, t, n) {
    ;(n = Nn(-1, n)), (n.tag = 3)
    var r = e.type.getDerivedStateFromError
    if (typeof r == 'function') {
      var i = t.value
      ;(n.payload = function () {
        return r(i)
      }),
        (n.callback = function () {
          Fc(e, t)
        })
    }
    var s = e.stateNode
    return (
      s !== null &&
        typeof s.componentDidCatch == 'function' &&
        (n.callback = function () {
          Fc(e, t), typeof r != 'function' && (dr === null ? (dr = new Set([this])) : dr.add(this))
          var o = t.stack
          this.componentDidCatch(t.value, { componentStack: o !== null ? o : '' })
        }),
      n
    )
  }
  function sp(e, t, n) {
    var r = e.pingCache
    if (r === null) {
      r = e.pingCache = new ow()
      var i = new Set()
      r.set(t, i)
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
    i.has(n) || (i.add(n), (e = ww.bind(null, e, t, n)), t.then(e, e))
  }
  function op(e) {
    do {
      var t
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e
      e = e.return
    } while (e !== null)
    return null
  }
  function ap(e, t, n, r, i) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null ? (n.tag = 17) : ((t = Nn(-1, 1)), (t.tag = 2), cr(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = i), e)
  }
  var aw = zn.ReactCurrentOwner,
    kt = !1
  function vt(e, t, n, r) {
    t.child = e === null ? eg(t, null, n, r) : Fi(t, e.child, n, r)
  }
  function lp(e, t, n, r, i) {
    n = n.render
    var s = t.ref
    return (
      Ci(t, i),
      (r = Qd(e, t, n, r, s, i)),
      (n = Jd()),
      e !== null && !kt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Un(e, t, i))
        : (De && n && Fd(t), (t.flags |= 1), vt(e, t, r, i), t.child)
    )
  }
  function up(e, t, n, r, i) {
    if (e === null) {
      var s = n.type
      return typeof s == 'function' &&
        !lf(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), Eg(e, t, s, r, i))
        : ((e = ea(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e))
    }
    if (((s = e.child), (e.lanes & i) === 0)) {
      var o = s.memoizedProps
      if (((n = n.compare), (n = n !== null ? n : $s), n(o, r) && e.ref === t.ref))
        return Un(e, t, i)
    }
    return (t.flags |= 1), (e = hr(s, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
  }
  function Eg(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps
      if ($s(s, r) && e.ref === t.ref)
        if (((kt = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
          (e.flags & 131072) !== 0 && (kt = !0)
        else return (t.lanes = e.lanes), Un(e, t, i)
    }
    return $c(e, t, n, r, i)
  }
  function Ig(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      s = e !== null ? e.memoizedState : null
    if (r.mode === 'hidden')
      if ((t.mode & 1) === 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          Te(yi, Rt),
          (Rt |= n)
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
            (t.updateQueue = null),
            Te(yi, Rt),
            (Rt |= e),
            null
          )
        ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
          (r = s !== null ? s.baseLanes : n),
          Te(yi, Rt),
          (Rt |= r)
      }
    else
      s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Te(yi, Rt),
        (Rt |= r)
    return vt(e, t, i, n), t.child
  }
  function Tg(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152))
  }
  function $c(e, t, n, r, i) {
    var s = It(n) ? zr : dt.current
    return (
      (s = bi(t, s)),
      Ci(t, i),
      (n = Qd(e, t, n, r, s, i)),
      (r = Jd()),
      e !== null && !kt
        ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Un(e, t, i))
        : (De && r && Fd(t), (t.flags |= 1), vt(e, t, n, i), t.child)
    )
  }
  function cp(e, t, n, r, i) {
    if (It(n)) {
      var s = !0
      ka(t)
    } else s = !1
    if ((Ci(t, i), t.stateNode === null)) Jo(e, t), Xv(t, n, r), Uc(t, n, r, i), (r = !0)
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps
      o.props = a
      var l = o.context,
        u = n.contextType
      typeof u == 'object' && u !== null
        ? (u = Bt(u))
        : ((u = It(n) ? zr : dt.current), (u = bi(t, u)))
      var d = n.getDerivedStateFromProps,
        p = typeof d == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'
      p ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((a !== r || l !== u) && tp(t, o, r, u)),
        (Kn = !1)
      var f = t.memoizedState
      ;(o.state = f),
        xa(t, r, o, i),
        (l = t.memoizedState),
        a !== r || f !== l || Et.current || Kn
          ? (typeof d == 'function' && (bc(t, n, d, r), (l = t.memoizedState)),
            (a = Kn || ep(t, n, a, r, f, l, u))
              ? (p ||
                  (typeof o.UNSAFE_componentWillMount != 'function' &&
                    typeof o.componentWillMount != 'function') ||
                  (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == 'function' &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
              : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (o.props = r),
            (o.state = l),
            (o.context = u),
            (r = a))
          : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1))
    } else {
      ;(o = t.stateNode),
        Qv(e, t),
        (a = t.memoizedProps),
        (u = t.type === t.elementType ? a : Xt(t.type, a)),
        (o.props = u),
        (p = t.pendingProps),
        (f = o.context),
        (l = n.contextType),
        typeof l == 'object' && l !== null
          ? (l = Bt(l))
          : ((l = It(n) ? zr : dt.current), (l = bi(t, l)))
      var S = n.getDerivedStateFromProps
      ;(d = typeof S == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((a !== p || f !== l) && tp(t, o, r, l)),
        (Kn = !1),
        (f = t.memoizedState),
        (o.state = f),
        xa(t, r, o, i)
      var k = t.memoizedState
      a !== p || f !== k || Et.current || Kn
        ? (typeof S == 'function' && (bc(t, n, S, r), (k = t.memoizedState)),
          (u = Kn || ep(t, n, u, r, f, k, l) || !1)
            ? (d ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                  typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(r, k, l),
                typeof o.UNSAFE_componentWillUpdate == 'function' &&
                  o.UNSAFE_componentWillUpdate(r, k, l)),
              typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (a === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (a === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = k)),
          (o.props = r),
          (o.state = k),
          (o.context = l),
          (r = u))
        : (typeof o.componentDidUpdate != 'function' ||
            (a === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (a === e.memoizedProps && f === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1))
    }
    return zc(e, t, n, r, s, i)
  }
  function zc(e, t, n, r, i, s) {
    Tg(e, t)
    var o = (t.flags & 128) !== 0
    if (!r && !o) return i && qh(t, n, !1), Un(e, t, s)
    ;(r = t.stateNode), (aw.current = t)
    var a = o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Fi(t, e.child, null, s)), (t.child = Fi(t, null, a, s)))
        : vt(e, t, a, s),
      (t.memoizedState = r.state),
      i && qh(t, n, !0),
      t.child
    )
  }
  function Cg(e) {
    var t = e.stateNode
    t.pendingContext
      ? Kh(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Kh(e, t.context, !1),
      Vd(e, t.containerInfo)
  }
  function dp(e, t, n, r, i) {
    return Ui(), zd(i), (t.flags |= 256), vt(e, t, n, r), t.child
  }
  var jc = { dehydrated: null, treeContext: null, retryLane: 0 }
  function Wc(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
  }
  function xg(e, t, n) {
    var r = t.pendingProps,
      i = Me.current,
      s = !1,
      o = (t.flags & 128) !== 0,
      a
    if (
      ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a ? ((s = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
      Te(Me, i & 1),
      e === null)
    )
      return (
        Ac(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((o = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (o = { mode: 'hidden', children: o }),
                (r & 1) === 0 && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = o))
                  : (s = ul(o, r, 0, null)),
                (e = Ur(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = Wc(n)),
                (t.memoizedState = jc),
                e)
              : ef(t, o))
      )
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return lw(e, t, o, r, a, i, n)
    if (s) {
      ;(s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling)
      var l = { mode: 'hidden', children: r.children }
      return (
        (o & 1) === 0 && t.child !== i
          ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
          : ((r = hr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (s = hr(a, s)) : ((s = Ur(s, o, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? Wc(n)
            : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
        (s.memoizedState = o),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = jc),
        r
      )
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = hr(s, { mode: 'visible', children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    )
  }
  function ef(e, t) {
    return (
      (t = ul({ mode: 'visible', children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
    )
  }
  function Ao(e, t, n, r) {
    return (
      r !== null && zd(r),
      Fi(t, e.child, null, n),
      (e = ef(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    )
  }
  function lw(e, t, n, r, i, s, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = xu(Error(O(422)))), Ao(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = ul({ mode: 'visible', children: r.children }, i, 0, null)),
          (s = Ur(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          (t.mode & 1) !== 0 && Fi(t, e.child, null, o),
          (t.child.memoizedState = Wc(o)),
          (t.memoizedState = jc),
          s)
    if ((t.mode & 1) === 0) return Ao(e, t, o, null)
    if (i.data === '$!') {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst
      return (r = a), (s = Error(O(419))), (r = xu(s, r, void 0)), Ao(e, t, o, r)
    }
    if (((a = (o & e.childLanes) !== 0), kt || a)) {
      if (((r = et), r !== null)) {
        switch (o & -o) {
          case 4:
            i = 2
            break
          case 16:
            i = 8
            break
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32
            break
          case 536870912:
            i = 268435456
            break
          default:
            i = 0
        }
        ;(i = (i & (r.suspendedLanes | o)) !== 0 ? 0 : i),
          i !== 0 && i !== s.retryLane && ((s.retryLane = i), bn(e, i), rn(r, e, i, -1))
      }
      return af(), (r = xu(Error(O(421)))), Ao(e, t, o, r)
    }
    return i.data === '$?'
      ? ((t.flags |= 128), (t.child = e.child), (t = Sw.bind(null, e)), (i._reactRetry = t), null)
      : ((e = s.treeContext),
        (Dt = ur(i.nextSibling)),
        (Nt = t),
        (De = !0),
        (en = null),
        e !== null &&
          ((Ft[$t++] = Cn),
          (Ft[$t++] = xn),
          (Ft[$t++] = jr),
          (Cn = e.id),
          (xn = e.overflow),
          (jr = t)),
        (t = ef(t, r.children)),
        (t.flags |= 4096),
        t)
  }
  function fp(e, t, n) {
    e.lanes |= t
    var r = e.alternate
    r !== null && (r.lanes |= t), Lc(e.return, t, n)
  }
  function Ou(e, t, n, r, i) {
    var s = e.memoizedState
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = i))
  }
  function Og(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      s = r.tail
    if ((vt(e, t, r.children, n), (r = Me.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128)
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && fp(e, n, t)
          else if (e.tag === 19) fp(e, n, t)
          else if (e.child !== null) {
            ;(e.child.return = e), (e = e.child)
            continue
          }
          if (e === t) break e
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e
            e = e.return
          }
          ;(e.sibling.return = e.return), (e = e.sibling)
        }
      r &= 1
    }
    if ((Te(Me, r), (t.mode & 1) === 0)) t.memoizedState = null
    else
      switch (i) {
        case 'forwards':
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate), e !== null && Oa(e) === null && (i = n), (n = n.sibling)
          ;(n = i),
            n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)),
            Ou(t, !1, i, n, s)
          break
        case 'backwards':
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && Oa(e) === null)) {
              t.child = i
              break
            }
            ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
          }
          Ou(t, !0, n, null, s)
          break
        case 'together':
          Ou(t, !1, null, null, void 0)
          break
        default:
          t.memoizedState = null
      }
    return t.child
  }
  function Jo(e, t) {
    ;(t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
  }
  function Un(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies), (Br |= t.lanes), (n & t.childLanes) === 0)
    )
      return null
    if (e !== null && t.child !== e.child) throw Error(O(153))
    if (t.child !== null) {
      for (e = t.child, n = hr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        (e = e.sibling), (n = n.sibling = hr(e, e.pendingProps)), (n.return = t)
      n.sibling = null
    }
    return t.child
  }
  function uw(e, t, n) {
    switch (t.tag) {
      case 3:
        Cg(t), Ui()
        break
      case 5:
        tg(t)
        break
      case 1:
        It(t.type) && ka(t)
        break
      case 4:
        Vd(t, t.stateNode.containerInfo)
        break
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value
        Te(Ta, r._currentValue), (r._currentValue = i)
        break
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Te(Me, Me.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? xg(e, t, n)
            : (Te(Me, Me.current & 1), (e = Un(e, t, n)), e !== null ? e.sibling : null)
        Te(Me, Me.current & 1)
        break
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return Og(e, t, n)
          t.flags |= 128
        }
        if (
          ((i = t.memoizedState),
          i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          Te(Me, Me.current),
          r)
        )
          break
        return null
      case 22:
      case 23:
        return (t.lanes = 0), Ig(e, t, n)
    }
    return Un(e, t, n)
  }
  var Rg, Bc, Pg, Dg
  Rg = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
      else if (n.tag !== 4 && n.child !== null) {
        ;(n.child.return = n), (n = n.child)
        continue
      }
      if (n === t) break
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return
        n = n.return
      }
      ;(n.sibling.return = n.return), (n = n.sibling)
    }
  }
  Bc = function () {}
  Pg = function (e, t, n, r) {
    var i = e.memoizedProps
    if (i !== r) {
      ;(e = t.stateNode), Mr(vn.current)
      var s = null
      switch (n) {
        case 'input':
          ;(i = dc(e, i)), (r = dc(e, r)), (s = [])
          break
        case 'select':
          ;(i = Le({}, i, { value: void 0 })), (r = Le({}, r, { value: void 0 })), (s = [])
          break
        case 'textarea':
          ;(i = pc(e, i)), (r = pc(e, r)), (s = [])
          break
        default:
          typeof i.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = wa)
      }
      vc(n, r)
      var o
      n = null
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === 'style') {
            var a = i[u]
            for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
          } else
            u !== 'dangerouslySetInnerHTML' &&
              u !== 'children' &&
              u !== 'suppressContentEditableWarning' &&
              u !== 'suppressHydrationWarning' &&
              u !== 'autoFocus' &&
              (Ns.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null))
      for (u in r) {
        var l = r[u]
        if (
          ((a = i != null ? i[u] : void 0),
          r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        )
          if (u === 'style')
            if (a) {
              for (o in a)
                !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ''))
              for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]))
            } else n || (s || (s = []), s.push(u, n)), (n = l)
          else
            u === 'dangerouslySetInnerHTML'
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (s = s || []).push(u, l))
              : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') || (s = s || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (Ns.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && Ce('scroll', e), s || a === l || (s = []))
                  : (s = s || []).push(u, l))
      }
      n && (s = s || []).push('style', n)
      var u = s
      ;(t.updateQueue = u) && (t.flags |= 4)
    }
  }
  Dg = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
  }
  function us(e, t) {
    if (!De)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail
          for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
          n === null ? (e.tail = null) : (n.sibling = null)
          break
        case 'collapsed':
          n = e.tail
          for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null)
      }
  }
  function lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling)
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling)
    return (e.subtreeFlags |= r), (e.childLanes = n), t
  }
  function cw(e, t, n) {
    var r = t.pendingProps
    switch (($d(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return lt(t), null
      case 1:
        return It(t.type) && Sa(), lt(t), null
      case 3:
        return (
          (r = t.stateNode),
          $i(),
          xe(Et),
          xe(dt),
          Kd(),
          r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (No(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), en !== null && (Jc(en), (en = null)))),
          Bc(e, t),
          lt(t),
          null
        )
      case 5:
        Gd(t)
        var i = Mr(Ys.current)
        if (((n = t.type), e !== null && t.stateNode != null))
          Pg(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(O(166))
            return lt(t), null
          }
          if (((e = Mr(vn.current)), No(t))) {
            ;(r = t.stateNode), (n = t.type)
            var s = t.memoizedProps
            switch (((r[fn] = t), (r[Ws] = s), (e = (t.mode & 1) !== 0), n)) {
              case 'dialog':
                Ce('cancel', r), Ce('close', r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Ce('load', r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < vs.length; i++) Ce(vs[i], r)
                break
              case 'source':
                Ce('error', r)
                break
              case 'img':
              case 'image':
              case 'link':
                Ce('error', r), Ce('load', r)
                break
              case 'details':
                Ce('toggle', r)
                break
              case 'input':
                Sh(r, s), Ce('invalid', r)
                break
              case 'select':
                ;(r._wrapperState = { wasMultiple: !!s.multiple }), Ce('invalid', r)
                break
              case 'textarea':
                Eh(r, s), Ce('invalid', r)
            }
            vc(n, s), (i = null)
            for (var o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o]
                o === 'children'
                  ? typeof a == 'string'
                    ? r.textContent !== a &&
                      (s.suppressHydrationWarning !== !0 && Do(r.textContent, a, e),
                      (i = ['children', a]))
                    : typeof a == 'number' &&
                      r.textContent !== '' + a &&
                      (s.suppressHydrationWarning !== !0 && Do(r.textContent, a, e),
                      (i = ['children', '' + a]))
                  : Ns.hasOwnProperty(o) && a != null && o === 'onScroll' && Ce('scroll', r)
              }
            switch (n) {
              case 'input':
                Eo(r), kh(r, s, !0)
                break
              case 'textarea':
                Eo(r), Ih(r)
                break
              case 'select':
              case 'option':
                break
              default:
                typeof s.onClick == 'function' && (r.onclick = wa)
            }
            ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
          } else {
            ;(o = i.nodeType === 9 ? i : i.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = iv(n)),
              e === 'http://www.w3.org/1999/xhtml'
                ? n === 'script'
                  ? ((e = o.createElement('div')),
                    (e.innerHTML = '<script></script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == 'string'
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === 'select' &&
                      ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[fn] = t),
              (e[Ws] = r),
              Rg(e, t, !1, !1),
              (t.stateNode = e)
            e: {
              switch (((o = gc(n, r)), n)) {
                case 'dialog':
                  Ce('cancel', e), Ce('close', e), (i = r)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  Ce('load', e), (i = r)
                  break
                case 'video':
                case 'audio':
                  for (i = 0; i < vs.length; i++) Ce(vs[i], e)
                  i = r
                  break
                case 'source':
                  Ce('error', e), (i = r)
                  break
                case 'img':
                case 'image':
                case 'link':
                  Ce('error', e), Ce('load', e), (i = r)
                  break
                case 'details':
                  Ce('toggle', e), (i = r)
                  break
                case 'input':
                  Sh(e, r), (i = dc(e, r)), Ce('invalid', e)
                  break
                case 'option':
                  i = r
                  break
                case 'select':
                  ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = Le({}, r, { value: void 0 })),
                    Ce('invalid', e)
                  break
                case 'textarea':
                  Eh(e, r), (i = pc(e, r)), Ce('invalid', e)
                  break
                default:
                  i = r
              }
              vc(n, i), (a = i)
              for (s in a)
                if (a.hasOwnProperty(s)) {
                  var l = a[s]
                  s === 'style'
                    ? av(e, l)
                    : s === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && sv(e, l))
                    : s === 'children'
                    ? typeof l == 'string'
                      ? (n !== 'textarea' || l !== '') && Ms(e, l)
                      : typeof l == 'number' && Ms(e, '' + l)
                    : s !== 'suppressContentEditableWarning' &&
                      s !== 'suppressHydrationWarning' &&
                      s !== 'autoFocus' &&
                      (Ns.hasOwnProperty(s)
                        ? l != null && s === 'onScroll' && Ce('scroll', e)
                        : l != null && Id(e, s, l, o))
                }
              switch (n) {
                case 'input':
                  Eo(e), kh(e, r, !1)
                  break
                case 'textarea':
                  Eo(e), Ih(e)
                  break
                case 'option':
                  r.value != null && e.setAttribute('value', '' + gr(r.value))
                  break
                case 'select':
                  ;(e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? ki(e, !!r.multiple, s, !1)
                      : r.defaultValue != null && ki(e, !!r.multiple, r.defaultValue, !0)
                  break
                default:
                  typeof i.onClick == 'function' && (e.onclick = wa)
              }
              switch (n) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  r = !!r.autoFocus
                  break e
                case 'img':
                  r = !0
                  break e
                default:
                  r = !1
              }
            }
            r && (t.flags |= 4)
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
        }
        return lt(t), null
      case 6:
        if (e && t.stateNode != null) Dg(e, t, e.memoizedProps, r)
        else {
          if (typeof r != 'string' && t.stateNode === null) throw Error(O(166))
          if (((n = Mr(Ys.current)), Mr(vn.current), No(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[fn] = t),
              (s = r.nodeValue !== n) && ((e = Nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Do(r.nodeValue, n, (e.mode & 1) !== 0)
                  break
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Do(r.nodeValue, n, (e.mode & 1) !== 0)
              }
            s && (t.flags |= 4)
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[fn] = t),
              (t.stateNode = r)
        }
        return lt(t), null
      case 13:
        if (
          (xe(Me),
          (r = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (De && Dt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Kv(), Ui(), (t.flags |= 98560), (s = !1)
          else if (((s = No(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(O(318))
              if (((s = t.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
                throw Error(O(317))
              s[fn] = t
            } else Ui(), (t.flags & 128) === 0 && (t.memoizedState = null), (t.flags |= 4)
            lt(t), (s = !1)
          } else en !== null && (Jc(en), (en = null)), (s = !0)
          if (!s) return t.flags & 65536 ? t : null
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Me.current & 1) !== 0 ? Ke === 0 && (Ke = 3) : af())),
            t.updateQueue !== null && (t.flags |= 4),
            lt(t),
            null)
      case 4:
        return $i(), Bc(e, t), e === null && zs(t.stateNode.containerInfo), lt(t), null
      case 10:
        return Bd(t.type._context), lt(t), null
      case 17:
        return It(t.type) && Sa(), lt(t), null
      case 19:
        if ((xe(Me), (s = t.memoizedState), s === null)) return lt(t), null
        if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
          if (r) us(s, !1)
          else {
            if (Ke !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((o = Oa(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      us(s, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (o = s.alternate),
                      o === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = o.childLanes),
                          (s.lanes = o.lanes),
                          (s.child = o.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = o.memoizedProps),
                          (s.memoizedState = o.memoizedState),
                          (s.updateQueue = o.updateQueue),
                          (s.type = o.type),
                          (e = o.dependencies),
                          (s.dependencies =
                            e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                      (n = n.sibling)
                  return Te(Me, (Me.current & 1) | 2), t.child
                }
                e = e.sibling
              }
            s.tail !== null &&
              je() > ji &&
              ((t.flags |= 128), (r = !0), us(s, !1), (t.lanes = 4194304))
          }
        else {
          if (!r)
            if (((e = Oa(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                us(s, !0),
                s.tail === null && s.tailMode === 'hidden' && !o.alternate && !De)
              )
                return lt(t), null
            } else
              2 * je() - s.renderingStartTime > ji &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), us(s, !1), (t.lanes = 4194304))
          s.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = s.last), n !== null ? (n.sibling = o) : (t.child = o), (s.last = o))
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = je()),
            (t.sibling = null),
            (n = Me.current),
            Te(Me, r ? (n & 1) | 2 : n & 1),
            t)
          : (lt(t), null)
      case 22:
      case 23:
        return (
          of(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (Rt & 1073741824) !== 0 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : lt(t),
          null
        )
      case 24:
        return null
      case 25:
        return null
    }
    throw Error(O(156, t.tag))
  }
  function dw(e, t) {
    switch (($d(t), t.tag)) {
      case 1:
        return (
          It(t.type) && Sa(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 3:
        return (
          $i(),
          xe(Et),
          xe(dt),
          Kd(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0 ? ((t.flags = (e & -65537) | 128), t) : null
        )
      case 5:
        return Gd(t), null
      case 13:
        if ((xe(Me), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null) throw Error(O(340))
          Ui()
        }
        return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      case 19:
        return xe(Me), null
      case 4:
        return $i(), null
      case 10:
        return Bd(t.type._context), null
      case 22:
      case 23:
        return of(), null
      case 24:
        return null
      default:
        return null
    }
  }
  var Lo = !1,
    ut = !1,
    fw = typeof WeakSet == 'function' ? WeakSet : Set,
    z = null
  function gi(e, t) {
    var n = e.ref
    if (n !== null)
      if (typeof n == 'function')
        try {
          n(null)
        } catch (r) {
          Fe(e, t, r)
        }
      else n.current = null
  }
  function Yc(e, t, n) {
    try {
      n()
    } catch (r) {
      Fe(e, t, r)
    }
  }
  var hp = !1
  function hw(e, t) {
    if (((xc = ga), (e = Lv()), Ud(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd }
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window
          var r = n.getSelection && n.getSelection()
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode
            var i = r.anchorOffset,
              s = r.focusNode
            r = r.focusOffset
            try {
              n.nodeType, s.nodeType
            } catch {
              n = null
              break e
            }
            var o = 0,
              a = -1,
              l = -1,
              u = 0,
              d = 0,
              p = e,
              f = null
            t: for (;;) {
              for (
                var S;
                p !== n || (i !== 0 && p.nodeType !== 3) || (a = o + i),
                  p !== s || (r !== 0 && p.nodeType !== 3) || (l = o + r),
                  p.nodeType === 3 && (o += p.nodeValue.length),
                  (S = p.firstChild) !== null;

              )
                (f = p), (p = S)
              for (;;) {
                if (p === e) break t
                if (
                  (f === n && ++u === i && (a = o),
                  f === s && ++d === r && (l = o),
                  (S = p.nextSibling) !== null)
                )
                  break
                ;(p = f), (f = p.parentNode)
              }
              p = S
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l }
          } else n = null
        }
      n = n || { start: 0, end: 0 }
    } else n = null
    for (Oc = { focusedElem: e, selectionRange: n }, ga = !1, z = t; z !== null; )
      if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (z = e)
      else
        for (; z !== null; ) {
          t = z
          try {
            var k = t.alternate
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break
                case 1:
                  if (k !== null) {
                    var E = k.memoizedProps,
                      N = k.memoizedState,
                      m = t.stateNode,
                      h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? E : Xt(t.type, E), N)
                    m.__reactInternalSnapshotBeforeUpdate = h
                  }
                  break
                case 3:
                  var v = t.stateNode.containerInfo
                  v.nodeType === 1
                    ? (v.textContent = '')
                    : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement)
                  break
                case 5:
                case 6:
                case 4:
                case 17:
                  break
                default:
                  throw Error(O(163))
              }
          } catch (w) {
            Fe(t, t.return, w)
          }
          if (((e = t.sibling), e !== null)) {
            ;(e.return = t.return), (z = e)
            break
          }
          z = t.return
        }
    return (k = hp), (hp = !1), k
  }
  function Ts(e, t, n) {
    var r = t.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next)
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy
          ;(i.destroy = void 0), s !== void 0 && Yc(t, n, s)
        }
        i = i.next
      } while (i !== r)
    }
  }
  function al(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
      var n = (t = t.next)
      do {
        if ((n.tag & e) === e) {
          var r = n.create
          n.destroy = r()
        }
        n = n.next
      } while (n !== t)
    }
  }
  function Hc(e) {
    var t = e.ref
    if (t !== null) {
      var n = e.stateNode
      switch (e.tag) {
        case 5:
          e = n
          break
        default:
          e = n
      }
      typeof t == 'function' ? t(e) : (t.current = e)
    }
  }
  function Ng(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), Ng(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null && (delete t[fn], delete t[Ws], delete t[Dc], delete t[q_], delete t[Q_])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null)
  }
  function Mg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
  }
  function pp(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mg(e.return)) return null
        e = e.return
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e
        ;(e.child.return = e), (e = e.child)
      }
      if (!(e.flags & 2)) return e.stateNode
    }
  }
  function Vc(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = wa))
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Vc(e, t, n), e = e.sibling; e !== null; ) Vc(e, t, n), (e = e.sibling)
  }
  function Gc(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Gc(e, t, n), e = e.sibling; e !== null; ) Gc(e, t, n), (e = e.sibling)
  }
  var rt = null,
    Zt = !1
  function Hn(e, t, n) {
    for (n = n.child; n !== null; ) Ag(e, t, n), (n = n.sibling)
  }
  function Ag(e, t, n) {
    if (mn && typeof mn.onCommitFiberUnmount == 'function')
      try {
        mn.onCommitFiberUnmount(Za, n)
      } catch {}
    switch (n.tag) {
      case 5:
        ut || gi(n, t)
      case 6:
        var r = rt,
          i = Zt
        ;(rt = null),
          Hn(e, t, n),
          (rt = r),
          (Zt = i),
          rt !== null &&
            (Zt
              ? ((e = rt),
                (n = n.stateNode),
                e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
              : rt.removeChild(n.stateNode))
        break
      case 18:
        rt !== null &&
          (Zt
            ? ((e = rt),
              (n = n.stateNode),
              e.nodeType === 8 ? Su(e.parentNode, n) : e.nodeType === 1 && Su(e, n),
              Us(e))
            : Su(rt, n.stateNode))
        break
      case 4:
        ;(r = rt),
          (i = Zt),
          (rt = n.stateNode.containerInfo),
          (Zt = !0),
          Hn(e, t, n),
          (rt = r),
          (Zt = i)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ut && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
          i = r = r.next
          do {
            var s = i,
              o = s.destroy
            ;(s = s.tag),
              o !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Yc(n, t, o),
              (i = i.next)
          } while (i !== r)
        }
        Hn(e, t, n)
        break
      case 1:
        if (!ut && (gi(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
          try {
            ;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
          } catch (a) {
            Fe(n, t, a)
          }
        Hn(e, t, n)
        break
      case 21:
        Hn(e, t, n)
        break
      case 22:
        n.mode & 1
          ? ((ut = (r = ut) || n.memoizedState !== null), Hn(e, t, n), (ut = r))
          : Hn(e, t, n)
        break
      default:
        Hn(e, t, n)
    }
  }
  function mp(e) {
    var t = e.updateQueue
    if (t !== null) {
      e.updateQueue = null
      var n = e.stateNode
      n === null && (n = e.stateNode = new fw()),
        t.forEach(function (r) {
          var i = kw.bind(null, e, r)
          n.has(r) || (n.add(r), r.then(i, i))
        })
    }
  }
  function Qt(e, t) {
    var n = t.deletions
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r]
        try {
          var s = e,
            o = t,
            a = o
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                ;(rt = a.stateNode), (Zt = !1)
                break e
              case 3:
                ;(rt = a.stateNode.containerInfo), (Zt = !0)
                break e
              case 4:
                ;(rt = a.stateNode.containerInfo), (Zt = !0)
                break e
            }
            a = a.return
          }
          if (rt === null) throw Error(O(160))
          Ag(s, o, i), (rt = null), (Zt = !1)
          var l = i.alternate
          l !== null && (l.return = null), (i.return = null)
        } catch (u) {
          Fe(i, t, u)
        }
      }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Lg(t, e), (t = t.sibling)
  }
  function Lg(e, t) {
    var n = e.alternate,
      r = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Qt(t, e), cn(e), r & 4)) {
          try {
            Ts(3, e, e.return), al(3, e)
          } catch (E) {
            Fe(e, e.return, E)
          }
          try {
            Ts(5, e, e.return)
          } catch (E) {
            Fe(e, e.return, E)
          }
        }
        break
      case 1:
        Qt(t, e), cn(e), r & 512 && n !== null && gi(n, n.return)
        break
      case 5:
        if ((Qt(t, e), cn(e), r & 512 && n !== null && gi(n, n.return), e.flags & 32)) {
          var i = e.stateNode
          try {
            Ms(i, '')
          } catch (E) {
            Fe(e, e.return, E)
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var s = e.memoizedProps,
            o = n !== null ? n.memoizedProps : s,
            a = e.type,
            l = e.updateQueue
          if (((e.updateQueue = null), l !== null))
            try {
              a === 'input' && s.type === 'radio' && s.name != null && nv(i, s), gc(a, o)
              var u = gc(a, s)
              for (o = 0; o < l.length; o += 2) {
                var d = l[o],
                  p = l[o + 1]
                d === 'style'
                  ? av(i, p)
                  : d === 'dangerouslySetInnerHTML'
                  ? sv(i, p)
                  : d === 'children'
                  ? Ms(i, p)
                  : Id(i, d, p, u)
              }
              switch (a) {
                case 'input':
                  fc(i, s)
                  break
                case 'textarea':
                  rv(i, s)
                  break
                case 'select':
                  var f = i._wrapperState.wasMultiple
                  i._wrapperState.wasMultiple = !!s.multiple
                  var S = s.value
                  S != null
                    ? ki(i, !!s.multiple, S, !1)
                    : f !== !!s.multiple &&
                      (s.defaultValue != null
                        ? ki(i, !!s.multiple, s.defaultValue, !0)
                        : ki(i, !!s.multiple, s.multiple ? [] : '', !1))
              }
              i[Ws] = s
            } catch (E) {
              Fe(e, e.return, E)
            }
        }
        break
      case 6:
        if ((Qt(t, e), cn(e), r & 4)) {
          if (e.stateNode === null) throw Error(O(162))
          ;(i = e.stateNode), (s = e.memoizedProps)
          try {
            i.nodeValue = s
          } catch (E) {
            Fe(e, e.return, E)
          }
        }
        break
      case 3:
        if ((Qt(t, e), cn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
          try {
            Us(t.containerInfo)
          } catch (E) {
            Fe(e, e.return, E)
          }
        break
      case 4:
        Qt(t, e), cn(e)
        break
      case 13:
        Qt(t, e),
          cn(e),
          (i = e.child),
          i.flags & 8192 &&
            ((s = i.memoizedState !== null),
            (i.stateNode.isHidden = s),
            !s || (i.alternate !== null && i.alternate.memoizedState !== null) || (rf = je())),
          r & 4 && mp(e)
        break
      case 22:
        if (
          ((d = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ut = (u = ut) || d), Qt(t, e), (ut = u)) : Qt(t, e),
          cn(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !d && (e.mode & 1) !== 0)
          )
            for (z = e, d = e.child; d !== null; ) {
              for (p = z = d; z !== null; ) {
                switch (((f = z), (S = f.child), f.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ts(4, f, f.return)
                    break
                  case 1:
                    gi(f, f.return)
                    var k = f.stateNode
                    if (typeof k.componentWillUnmount == 'function') {
                      ;(r = f), (n = f.return)
                      try {
                        ;(t = r),
                          (k.props = t.memoizedProps),
                          (k.state = t.memoizedState),
                          k.componentWillUnmount()
                      } catch (E) {
                        Fe(r, n, E)
                      }
                    }
                    break
                  case 5:
                    gi(f, f.return)
                    break
                  case 22:
                    if (f.memoizedState !== null) {
                      gp(p)
                      continue
                    }
                }
                S !== null ? ((S.return = f), (z = S)) : gp(p)
              }
              d = d.sibling
            }
          e: for (d = null, p = e; ; ) {
            if (p.tag === 5) {
              if (d === null) {
                d = p
                try {
                  ;(i = p.stateNode),
                    u
                      ? ((s = i.style),
                        typeof s.setProperty == 'function'
                          ? s.setProperty('display', 'none', 'important')
                          : (s.display = 'none'))
                      : ((a = p.stateNode),
                        (l = p.memoizedProps.style),
                        (o = l != null && l.hasOwnProperty('display') ? l.display : null),
                        (a.style.display = ov('display', o)))
                } catch (E) {
                  Fe(e, e.return, E)
                }
              }
            } else if (p.tag === 6) {
              if (d === null)
                try {
                  p.stateNode.nodeValue = u ? '' : p.memoizedProps
                } catch (E) {
                  Fe(e, e.return, E)
                }
            } else if (
              ((p.tag !== 22 && p.tag !== 23) || p.memoizedState === null || p === e) &&
              p.child !== null
            ) {
              ;(p.child.return = p), (p = p.child)
              continue
            }
            if (p === e) break e
            for (; p.sibling === null; ) {
              if (p.return === null || p.return === e) break e
              d === p && (d = null), (p = p.return)
            }
            d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling)
          }
        }
        break
      case 19:
        Qt(t, e), cn(e), r & 4 && mp(e)
        break
      case 21:
        break
      default:
        Qt(t, e), cn(e)
    }
  }
  function cn(e) {
    var t = e.flags
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Mg(n)) {
              var r = n
              break e
            }
            n = n.return
          }
          throw Error(O(160))
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode
            r.flags & 32 && (Ms(i, ''), (r.flags &= -33))
            var s = pp(e)
            Gc(e, s, i)
            break
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = pp(e)
            Vc(e, a, o)
            break
          default:
            throw Error(O(161))
        }
      } catch (l) {
        Fe(e, e.return, l)
      }
      e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
  }
  function pw(e, t, n) {
    ;(z = e), bg(e)
  }
  function bg(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var i = z,
        s = i.child
      if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || Lo
        if (!o) {
          var a = i.alternate,
            l = (a !== null && a.memoizedState !== null) || ut
          a = Lo
          var u = ut
          if (((Lo = o), (ut = l) && !u))
            for (z = i; z !== null; )
              (o = z),
                (l = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? yp(i)
                  : l !== null
                  ? ((l.return = o), (z = l))
                  : yp(i)
          for (; s !== null; ) (z = s), bg(s), (s = s.sibling)
          ;(z = i), (Lo = a), (ut = u)
        }
        vp(e)
      } else (i.subtreeFlags & 8772) !== 0 && s !== null ? ((s.return = i), (z = s)) : vp(e)
    }
  }
  function vp(e) {
    for (; z !== null; ) {
      var t = z
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ut || al(5, t)
                break
              case 1:
                var r = t.stateNode
                if (t.flags & 4 && !ut)
                  if (n === null) r.componentDidMount()
                  else {
                    var i = t.elementType === t.type ? n.memoizedProps : Xt(t.type, n.memoizedProps)
                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                  }
                var s = t.updateQueue
                s !== null && Zh(t, s, r)
                break
              case 3:
                var o = t.updateQueue
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode
                        break
                      case 1:
                        n = t.child.stateNode
                    }
                  Zh(t, o, n)
                }
                break
              case 5:
                var a = t.stateNode
                if (n === null && t.flags & 4) {
                  n = a
                  var l = t.memoizedProps
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      l.autoFocus && n.focus()
                      break
                    case 'img':
                      l.src && (n.src = l.src)
                  }
                }
                break
              case 6:
                break
              case 4:
                break
              case 12:
                break
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate
                  if (u !== null) {
                    var d = u.memoizedState
                    if (d !== null) {
                      var p = d.dehydrated
                      p !== null && Us(p)
                    }
                  }
                }
                break
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break
              default:
                throw Error(O(163))
            }
          ut || (t.flags & 512 && Hc(t))
        } catch (f) {
          Fe(t, t.return, f)
        }
      }
      if (t === e) {
        z = null
        break
      }
      if (((n = t.sibling), n !== null)) {
        ;(n.return = t.return), (z = n)
        break
      }
      z = t.return
    }
  }
  function gp(e) {
    for (; z !== null; ) {
      var t = z
      if (t === e) {
        z = null
        break
      }
      var n = t.sibling
      if (n !== null) {
        ;(n.return = t.return), (z = n)
        break
      }
      z = t.return
    }
  }
  function yp(e) {
    for (; z !== null; ) {
      var t = z
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return
            try {
              al(4, t)
            } catch (l) {
              Fe(t, n, l)
            }
            break
          case 1:
            var r = t.stateNode
            if (typeof r.componentDidMount == 'function') {
              var i = t.return
              try {
                r.componentDidMount()
              } catch (l) {
                Fe(t, i, l)
              }
            }
            var s = t.return
            try {
              Hc(t)
            } catch (l) {
              Fe(t, s, l)
            }
            break
          case 5:
            var o = t.return
            try {
              Hc(t)
            } catch (l) {
              Fe(t, o, l)
            }
        }
      } catch (l) {
        Fe(t, t.return, l)
      }
      if (t === e) {
        z = null
        break
      }
      var a = t.sibling
      if (a !== null) {
        ;(a.return = t.return), (z = a)
        break
      }
      z = t.return
    }
  }
  var mw = Math.ceil,
    Da = zn.ReactCurrentDispatcher,
    tf = zn.ReactCurrentOwner,
    Wt = zn.ReactCurrentBatchConfig,
    ce = 0,
    et = null,
    Be = null,
    it = 0,
    Rt = 0,
    yi = Sr(0),
    Ke = 0,
    Ks = null,
    Br = 0,
    ll = 0,
    nf = 0,
    Cs = null,
    St = null,
    rf = 0,
    ji = 1 / 0,
    En = null,
    Na = !1,
    Kc = null,
    dr = null,
    bo = !1,
    rr = null,
    Ma = 0,
    xs = 0,
    qc = null,
    Xo = -1,
    Zo = 0
  function gt() {
    return (ce & 6) !== 0 ? je() : Xo !== -1 ? Xo : (Xo = je())
  }
  function fr(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ce & 2) !== 0 && it !== 0
      ? it & -it
      : X_.transition !== null
      ? (Zo === 0 && (Zo = _v()), Zo)
      : ((e = ye), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cv(e.type))), e)
  }
  function rn(e, t, n, r) {
    if (50 < xs) throw ((xs = 0), (qc = null), Error(O(185)))
    so(e, n, r),
      ((ce & 2) === 0 || e !== et) &&
        (e === et && ((ce & 2) === 0 && (ll |= n), Ke === 4 && Jn(e, it)),
        Tt(e, r),
        n === 1 && ce === 0 && (t.mode & 1) === 0 && ((ji = je() + 500), il && kr()))
  }
  function Tt(e, t) {
    var n = e.callbackNode
    X1(e, t)
    var r = va(e, e === et ? it : 0)
    if (r === 0) n !== null && xh(n), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && xh(n), t === 1))
        e.tag === 0 ? J_(_p.bind(null, e)) : Hv(_p.bind(null, e)),
          G_(function () {
            ;(ce & 6) === 0 && kr()
          }),
          (n = null)
      else {
        switch (wv(r)) {
          case 1:
            n = Rd
            break
          case 4:
            n = gv
            break
          case 16:
            n = ma
            break
          case 536870912:
            n = yv
            break
          default:
            n = ma
        }
        n = Yg(n, Ug.bind(null, e))
      }
      ;(e.callbackPriority = t), (e.callbackNode = n)
    }
  }
  function Ug(e, t) {
    if (((Xo = -1), (Zo = 0), (ce & 6) !== 0)) throw Error(O(327))
    var n = e.callbackNode
    if (xi() && e.callbackNode !== n) return null
    var r = va(e, e === et ? it : 0)
    if (r === 0) return null
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Aa(e, r)
    else {
      t = r
      var i = ce
      ce |= 2
      var s = $g()
      ;(et !== e || it !== t) && ((En = null), (ji = je() + 500), br(e, t))
      do
        try {
          yw()
          break
        } catch (a) {
          Fg(e, a)
        }
      while (1)
      Wd(), (Da.current = s), (ce = i), Be !== null ? (t = 0) : ((et = null), (it = 0), (t = Ke))
    }
    if (t !== 0) {
      if ((t === 2 && ((i = kc(e)), i !== 0 && ((r = i), (t = Qc(e, i)))), t === 1))
        throw ((n = Ks), br(e, 0), Jn(e, r), Tt(e, je()), n)
      if (t === 6) Jn(e, r)
      else {
        if (
          ((i = e.current.alternate),
          (r & 30) === 0 &&
            !vw(i) &&
            ((t = Aa(e, r)),
            t === 2 && ((s = kc(e)), s !== 0 && ((r = s), (t = Qc(e, s)))),
            t === 1))
        )
          throw ((n = Ks), br(e, 0), Jn(e, r), Tt(e, je()), n)
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(O(345))
          case 2:
            Rr(e, St, En)
            break
          case 3:
            if ((Jn(e, r), (r & 130023424) === r && ((t = rf + 500 - je()), 10 < t))) {
              if (va(e, 0) !== 0) break
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                gt(), (e.pingedLanes |= e.suspendedLanes & i)
                break
              }
              e.timeoutHandle = Pc(Rr.bind(null, e, St, En), t)
              break
            }
            Rr(e, St, En)
            break
          case 4:
            if ((Jn(e, r), (r & 4194240) === r)) break
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var o = 31 - nn(r)
              ;(s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s)
            }
            if (
              ((r = i),
              (r = je() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * mw(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Pc(Rr.bind(null, e, St, En), r)
              break
            }
            Rr(e, St, En)
            break
          case 5:
            Rr(e, St, En)
            break
          default:
            throw Error(O(329))
        }
      }
    }
    return Tt(e, je()), e.callbackNode === n ? Ug.bind(null, e) : null
  }
  function Qc(e, t) {
    var n = Cs
    return (
      e.current.memoizedState.isDehydrated && (br(e, t).flags |= 256),
      (e = Aa(e, t)),
      e !== 2 && ((t = St), (St = n), t !== null && Jc(t)),
      e
    )
  }
  function Jc(e) {
    St === null ? (St = e) : St.push.apply(St, e)
  }
  function vw(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              s = i.getSnapshot
            i = i.value
            try {
              if (!sn(s(), i)) return !1
            } catch {
              return !1
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
      else {
        if (t === e) break
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
    }
    return !0
  }
  function Jn(e, t) {
    for (
      t &= ~nf, t &= ~ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - nn(t),
        r = 1 << n
      ;(e[n] = -1), (t &= ~r)
    }
  }
  function _p(e) {
    if ((ce & 6) !== 0) throw Error(O(327))
    xi()
    var t = va(e, 0)
    if ((t & 1) === 0) return Tt(e, je()), null
    var n = Aa(e, t)
    if (e.tag !== 0 && n === 2) {
      var r = kc(e)
      r !== 0 && ((t = r), (n = Qc(e, r)))
    }
    if (n === 1) throw ((n = Ks), br(e, 0), Jn(e, t), Tt(e, je()), n)
    if (n === 6) throw Error(O(345))
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Rr(e, St, En),
      Tt(e, je()),
      null
    )
  }
  function sf(e, t) {
    var n = ce
    ce |= 1
    try {
      return e(t)
    } finally {
      ;(ce = n), ce === 0 && ((ji = je() + 500), il && kr())
    }
  }
  function Yr(e) {
    rr !== null && rr.tag === 0 && (ce & 6) === 0 && xi()
    var t = ce
    ce |= 1
    var n = Wt.transition,
      r = ye
    try {
      if (((Wt.transition = null), (ye = 1), e)) return e()
    } finally {
      ;(ye = r), (Wt.transition = n), (ce = t), (ce & 6) === 0 && kr()
    }
  }
  function of() {
    ;(Rt = yi.current), xe(yi)
  }
  function br(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), V_(n)), Be !== null))
      for (n = Be.return; n !== null; ) {
        var r = n
        switch (($d(r), r.tag)) {
          case 1:
            ;(r = r.type.childContextTypes), r != null && Sa()
            break
          case 3:
            $i(), xe(Et), xe(dt), Kd()
            break
          case 5:
            Gd(r)
            break
          case 4:
            $i()
            break
          case 13:
            xe(Me)
            break
          case 19:
            xe(Me)
            break
          case 10:
            Bd(r.type._context)
            break
          case 22:
          case 23:
            of()
        }
        n = n.return
      }
    if (
      ((et = e),
      (Be = e = hr(e.current, null)),
      (it = Rt = t),
      (Ke = 0),
      (Ks = null),
      (nf = ll = Br = 0),
      (St = Cs = null),
      Nr !== null)
    ) {
      for (t = 0; t < Nr.length; t++)
        if (((n = Nr[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null
          var i = r.next,
            s = n.pending
          if (s !== null) {
            var o = s.next
            ;(s.next = i), (r.next = o)
          }
          n.pending = r
        }
      Nr = null
    }
    return e
  }
  function Fg(e, t) {
    do {
      var n = Be
      try {
        if ((Wd(), (qo.current = Pa), Ra)) {
          for (var r = Ae.memoizedState; r !== null; ) {
            var i = r.queue
            i !== null && (i.pending = null), (r = r.next)
          }
          Ra = !1
        }
        if (
          ((Wr = 0),
          (Ze = Ge = Ae = null),
          (Is = !1),
          (Hs = 0),
          (tf.current = null),
          n === null || n.return === null)
        ) {
          ;(Ke = 1), (Ks = t), (Be = null)
          break
        }
        e: {
          var s = e,
            o = n.return,
            a = n,
            l = t
          if (
            ((t = it),
            (a.flags |= 32768),
            l !== null && typeof l == 'object' && typeof l.then == 'function')
          ) {
            var u = l,
              d = a,
              p = d.tag
            if ((d.mode & 1) === 0 && (p === 0 || p === 11 || p === 15)) {
              var f = d.alternate
              f
                ? ((d.updateQueue = f.updateQueue),
                  (d.memoizedState = f.memoizedState),
                  (d.lanes = f.lanes))
                : ((d.updateQueue = null), (d.memoizedState = null))
            }
            var S = op(o)
            if (S !== null) {
              ;(S.flags &= -257), ap(S, o, a, s, t), S.mode & 1 && sp(s, u, t), (t = S), (l = u)
              var k = t.updateQueue
              if (k === null) {
                var E = new Set()
                E.add(l), (t.updateQueue = E)
              } else k.add(l)
              break e
            } else {
              if ((t & 1) === 0) {
                sp(s, u, t), af()
                break e
              }
              l = Error(O(426))
            }
          } else if (De && a.mode & 1) {
            var N = op(o)
            if (N !== null) {
              ;(N.flags & 65536) === 0 && (N.flags |= 256), ap(N, o, a, s, t), zd(zi(l, a))
              break e
            }
          }
          ;(s = l = zi(l, a)), Ke !== 4 && (Ke = 2), Cs === null ? (Cs = [s]) : Cs.push(s), (s = o)
          do {
            switch (s.tag) {
              case 3:
                ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
                var m = Sg(s, l, t)
                Xh(s, m)
                break e
              case 1:
                a = l
                var h = s.type,
                  v = s.stateNode
                if (
                  (s.flags & 128) === 0 &&
                  (typeof h.getDerivedStateFromError == 'function' ||
                    (v !== null &&
                      typeof v.componentDidCatch == 'function' &&
                      (dr === null || !dr.has(v))))
                ) {
                  ;(s.flags |= 65536), (t &= -t), (s.lanes |= t)
                  var w = kg(s, a, t)
                  Xh(s, w)
                  break e
                }
            }
            s = s.return
          } while (s !== null)
        }
        jg(n)
      } catch (_) {
        ;(t = _), Be === n && n !== null && (Be = n = n.return)
        continue
      }
      break
    } while (1)
  }
  function $g() {
    var e = Da.current
    return (Da.current = Pa), e === null ? Pa : e
  }
  function af() {
    ;(Ke === 0 || Ke === 3 || Ke === 2) && (Ke = 4),
      et === null || ((Br & 268435455) === 0 && (ll & 268435455) === 0) || Jn(et, it)
  }
  function Aa(e, t) {
    var n = ce
    ce |= 2
    var r = $g()
    ;(et !== e || it !== t) && ((En = null), br(e, t))
    do
      try {
        gw()
        break
      } catch (i) {
        Fg(e, i)
      }
    while (1)
    if ((Wd(), (ce = n), (Da.current = r), Be !== null)) throw Error(O(261))
    return (et = null), (it = 0), Ke
  }
  function gw() {
    for (; Be !== null; ) zg(Be)
  }
  function yw() {
    for (; Be !== null && !B1(); ) zg(Be)
  }
  function zg(e) {
    var t = Bg(e.alternate, e, Rt)
    ;(e.memoizedProps = e.pendingProps), t === null ? jg(e) : (Be = t), (tf.current = null)
  }
  function jg(e) {
    var t = e
    do {
      var n = t.alternate
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = cw(n, t, Rt)), n !== null)) {
          Be = n
          return
        }
      } else {
        if (((n = dw(n, t)), n !== null)) {
          ;(n.flags &= 32767), (Be = n)
          return
        }
        if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
        else {
          ;(Ke = 6), (Be = null)
          return
        }
      }
      if (((t = t.sibling), t !== null)) {
        Be = t
        return
      }
      Be = t = e
    } while (t !== null)
    Ke === 0 && (Ke = 5)
  }
  function Rr(e, t, n) {
    var r = ye,
      i = Wt.transition
    try {
      ;(Wt.transition = null), (ye = 1), _w(e, t, n, r)
    } finally {
      ;(Wt.transition = i), (ye = r)
    }
    return null
  }
  function _w(e, t, n, r) {
    do xi()
    while (rr !== null)
    if ((ce & 6) !== 0) throw Error(O(327))
    n = e.finishedWork
    var i = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(O(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var s = n.lanes | n.childLanes
    if (
      (Z1(e, s),
      e === et && ((Be = et = null), (it = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        bo ||
        ((bo = !0),
        Yg(ma, function () {
          return xi(), null
        })),
      (s = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || s)
    ) {
      ;(s = Wt.transition), (Wt.transition = null)
      var o = ye
      ye = 1
      var a = ce
      ;(ce |= 4),
        (tf.current = null),
        hw(e, n),
        Lg(n, e),
        $_(Oc),
        (ga = !!xc),
        (Oc = xc = null),
        (e.current = n),
        pw(n),
        Y1(),
        (ce = a),
        (ye = o),
        (Wt.transition = s)
    } else e.current = n
    if (
      (bo && ((bo = !1), (rr = e), (Ma = i)),
      (s = e.pendingLanes),
      s === 0 && (dr = null),
      G1(n.stateNode),
      Tt(e, je()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
    if (Na) throw ((Na = !1), (e = Kc), (Kc = null), e)
    return (
      (Ma & 1) !== 0 && e.tag !== 0 && xi(),
      (s = e.pendingLanes),
      (s & 1) !== 0 ? (e === qc ? xs++ : ((xs = 0), (qc = e))) : (xs = 0),
      kr(),
      null
    )
  }
  function xi() {
    if (rr !== null) {
      var e = wv(Ma),
        t = Wt.transition,
        n = ye
      try {
        if (((Wt.transition = null), (ye = 16 > e ? 16 : e), rr === null)) var r = !1
        else {
          if (((e = rr), (rr = null), (Ma = 0), (ce & 6) !== 0)) throw Error(O(331))
          var i = ce
          for (ce |= 4, z = e.current; z !== null; ) {
            var s = z,
              o = s.child
            if ((z.flags & 16) !== 0) {
              var a = s.deletions
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l]
                  for (z = u; z !== null; ) {
                    var d = z
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ts(8, d, s)
                    }
                    var p = d.child
                    if (p !== null) (p.return = d), (z = p)
                    else
                      for (; z !== null; ) {
                        d = z
                        var f = d.sibling,
                          S = d.return
                        if ((Ng(d), d === u)) {
                          z = null
                          break
                        }
                        if (f !== null) {
                          ;(f.return = S), (z = f)
                          break
                        }
                        z = S
                      }
                  }
                }
                var k = s.alternate
                if (k !== null) {
                  var E = k.child
                  if (E !== null) {
                    k.child = null
                    do {
                      var N = E.sibling
                      ;(E.sibling = null), (E = N)
                    } while (E !== null)
                  }
                }
                z = s
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && o !== null) (o.return = s), (z = o)
            else
              e: for (; z !== null; ) {
                if (((s = z), (s.flags & 2048) !== 0))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ts(9, s, s.return)
                  }
                var m = s.sibling
                if (m !== null) {
                  ;(m.return = s.return), (z = m)
                  break e
                }
                z = s.return
              }
          }
          var h = e.current
          for (z = h; z !== null; ) {
            o = z
            var v = o.child
            if ((o.subtreeFlags & 2064) !== 0 && v !== null) (v.return = o), (z = v)
            else
              e: for (o = h; z !== null; ) {
                if (((a = z), (a.flags & 2048) !== 0))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        al(9, a)
                    }
                  } catch (_) {
                    Fe(a, a.return, _)
                  }
                if (a === o) {
                  z = null
                  break e
                }
                var w = a.sibling
                if (w !== null) {
                  ;(w.return = a.return), (z = w)
                  break e
                }
                z = a.return
              }
          }
          if (((ce = i), kr(), mn && typeof mn.onPostCommitFiberRoot == 'function'))
            try {
              mn.onPostCommitFiberRoot(Za, e)
            } catch {}
          r = !0
        }
        return r
      } finally {
        ;(ye = n), (Wt.transition = t)
      }
    }
    return !1
  }
  function wp(e, t, n) {
    ;(t = zi(n, t)),
      (t = Sg(e, t, 1)),
      (e = cr(e, t, 1)),
      (t = gt()),
      e !== null && (so(e, 1, t), Tt(e, t))
  }
  function Fe(e, t, n) {
    if (e.tag === 3) wp(e, e, n)
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          wp(t, e, n)
          break
        } else if (t.tag === 1) {
          var r = t.stateNode
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' && (dr === null || !dr.has(r)))
          ) {
            ;(e = zi(n, e)),
              (e = kg(t, e, 1)),
              (t = cr(t, e, 1)),
              (e = gt()),
              t !== null && (so(t, 1, e), Tt(t, e))
            break
          }
        }
        t = t.return
      }
  }
  function ww(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t),
      (t = gt()),
      (e.pingedLanes |= e.suspendedLanes & n),
      et === e &&
        (it & n) === n &&
        (Ke === 4 || (Ke === 3 && (it & 130023424) === it && 500 > je() - rf)
          ? br(e, 0)
          : (nf |= n)),
      Tt(e, t)
  }
  function Wg(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Co), (Co <<= 1), (Co & 130023424) === 0 && (Co = 4194304)))
    var n = gt()
    ;(e = bn(e, t)), e !== null && (so(e, t, n), Tt(e, n))
  }
  function Sw(e) {
    var t = e.memoizedState,
      n = 0
    t !== null && (n = t.retryLane), Wg(e, n)
  }
  function kw(e, t) {
    var n = 0
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState
        i !== null && (n = i.retryLane)
        break
      case 19:
        r = e.stateNode
        break
      default:
        throw Error(O(314))
    }
    r !== null && r.delete(t), Wg(e, n)
  }
  var Bg
  Bg = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Et.current) kt = !0
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return (kt = !1), uw(e, t, n)
        kt = (e.flags & 131072) !== 0
      }
    else (kt = !1), De && (t.flags & 1048576) !== 0 && Vv(t, Ia, t.index)
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type
        Jo(e, t), (e = t.pendingProps)
        var i = bi(t, dt.current)
        Ci(t, n), (i = Qd(null, t, r, e, i, n))
        var s = Jd()
        return (
          (t.flags |= 1),
          typeof i == 'object' &&
          i !== null &&
          typeof i.render == 'function' &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              It(r) ? ((s = !0), ka(t)) : (s = !1),
              (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
              Hd(t),
              (i.updater = sl),
              (t.stateNode = i),
              (i._reactInternals = t),
              Uc(t, r, e, n),
              (t = zc(null, t, r, !0, s, n)))
            : ((t.tag = 0), De && s && Fd(t), vt(null, t, i, n), (t = t.child)),
          t
        )
      case 16:
        r = t.elementType
        e: {
          switch (
            (Jo(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = Iw(r)),
            (e = Xt(r, e)),
            i)
          ) {
            case 0:
              t = $c(null, t, r, e, n)
              break e
            case 1:
              t = cp(null, t, r, e, n)
              break e
            case 11:
              t = lp(null, t, r, e, n)
              break e
            case 14:
              t = up(null, t, r, Xt(r.type, e), n)
              break e
          }
          throw Error(O(306, r, ''))
        }
        return t
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Xt(r, i)),
          $c(e, t, r, i, n)
        )
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Xt(r, i)),
          cp(e, t, r, i, n)
        )
      case 3:
        e: {
          if ((Cg(t), e === null)) throw Error(O(387))
          ;(r = t.pendingProps), (s = t.memoizedState), (i = s.element), Qv(e, t), xa(t, r, null, n)
          var o = t.memoizedState
          if (((r = o.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              ;(i = zi(Error(O(423)), t)), (t = dp(e, t, r, n, i))
              break e
            } else if (r !== i) {
              ;(i = zi(Error(O(424)), t)), (t = dp(e, t, r, n, i))
              break e
            } else
              for (
                Dt = ur(t.stateNode.containerInfo.firstChild),
                  Nt = t,
                  De = !0,
                  en = null,
                  n = eg(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
          else {
            if ((Ui(), r === i)) {
              t = Un(e, t, n)
              break e
            }
            vt(e, t, r, n)
          }
          t = t.child
        }
        return t
      case 5:
        return (
          tg(t),
          e === null && Ac(t),
          (r = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (o = i.children),
          Rc(r, i) ? (o = null) : s !== null && Rc(r, s) && (t.flags |= 32),
          Tg(e, t),
          vt(e, t, o, n),
          t.child
        )
      case 6:
        return e === null && Ac(t), null
      case 13:
        return xg(e, t, n)
      case 4:
        return (
          Vd(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Fi(t, null, r, n)) : vt(e, t, r, n),
          t.child
        )
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Xt(r, i)),
          lp(e, t, r, i, n)
        )
      case 7:
        return vt(e, t, t.pendingProps, n), t.child
      case 8:
        return vt(e, t, t.pendingProps.children, n), t.child
      case 12:
        return vt(e, t, t.pendingProps.children, n), t.child
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (s = t.memoizedProps),
            (o = i.value),
            Te(Ta, r._currentValue),
            (r._currentValue = o),
            s !== null)
          )
            if (sn(s.value, o)) {
              if (s.children === i.children && !Et.current) {
                t = Un(e, t, n)
                break e
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var a = s.dependencies
                if (a !== null) {
                  o = s.child
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (s.tag === 1) {
                        ;(l = Nn(-1, n & -n)), (l.tag = 2)
                        var u = s.updateQueue
                        if (u !== null) {
                          u = u.shared
                          var d = u.pending
                          d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
                            (u.pending = l)
                        }
                      }
                      ;(s.lanes |= n),
                        (l = s.alternate),
                        l !== null && (l.lanes |= n),
                        Lc(s.return, n, t),
                        (a.lanes |= n)
                      break
                    }
                    l = l.next
                  }
                } else if (s.tag === 10) o = s.type === t.type ? null : s.child
                else if (s.tag === 18) {
                  if (((o = s.return), o === null)) throw Error(O(341))
                  ;(o.lanes |= n),
                    (a = o.alternate),
                    a !== null && (a.lanes |= n),
                    Lc(o, n, t),
                    (o = s.sibling)
                } else o = s.child
                if (o !== null) o.return = s
                else
                  for (o = s; o !== null; ) {
                    if (o === t) {
                      o = null
                      break
                    }
                    if (((s = o.sibling), s !== null)) {
                      ;(s.return = o.return), (o = s)
                      break
                    }
                    o = o.return
                  }
                s = o
              }
          vt(e, t, i.children, n), (t = t.child)
        }
        return t
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          Ci(t, n),
          (i = Bt(i)),
          (r = r(i)),
          (t.flags |= 1),
          vt(e, t, r, n),
          t.child
        )
      case 14:
        return (r = t.type), (i = Xt(r, t.pendingProps)), (i = Xt(r.type, i)), up(e, t, r, i, n)
      case 15:
        return Eg(e, t, t.type, t.pendingProps, n)
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : Xt(r, i)),
          Jo(e, t),
          (t.tag = 1),
          It(r) ? ((e = !0), ka(t)) : (e = !1),
          Ci(t, n),
          Xv(t, r, i),
          Uc(t, r, i, n),
          zc(null, t, r, !0, e, n)
        )
      case 19:
        return Og(e, t, n)
      case 22:
        return Ig(e, t, n)
    }
    throw Error(O(156, t.tag))
  }
  function Yg(e, t) {
    return vv(e, t)
  }
  function Ew(e, t, n, r) {
    ;(this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null)
  }
  function jt(e, t, n, r) {
    return new Ew(e, t, n, r)
  }
  function lf(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
  }
  function Iw(e) {
    if (typeof e == 'function') return lf(e) ? 1 : 0
    if (e != null) {
      if (((e = e.$$typeof), e === Cd)) return 11
      if (e === xd) return 14
    }
    return 2
  }
  function hr(e, t) {
    var n = e.alternate
    return (
      n === null
        ? ((n = jt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    )
  }
  function ea(e, t, n, r, i, s) {
    var o = 2
    if (((r = e), typeof e == 'function')) lf(e) && (o = 1)
    else if (typeof e == 'string') o = 5
    else
      e: switch (e) {
        case li:
          return Ur(n.children, i, s, t)
        case Td:
          ;(o = 8), (i |= 8)
          break
        case ac:
          return (e = jt(12, n, t, i | 2)), (e.elementType = ac), (e.lanes = s), e
        case lc:
          return (e = jt(13, n, t, i)), (e.elementType = lc), (e.lanes = s), e
        case uc:
          return (e = jt(19, n, t, i)), (e.elementType = uc), (e.lanes = s), e
        case Zm:
          return ul(n, i, s, t)
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Jm:
                o = 10
                break e
              case Xm:
                o = 9
                break e
              case Cd:
                o = 11
                break e
              case xd:
                o = 14
                break e
              case Gn:
                ;(o = 16), (r = null)
                break e
            }
          throw Error(O(130, e == null ? e : typeof e, ''))
      }
    return (t = jt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  }
  function Ur(e, t, n, r) {
    return (e = jt(7, e, r, t)), (e.lanes = n), e
  }
  function ul(e, t, n, r) {
    return (
      (e = jt(22, e, r, t)),
      (e.elementType = Zm),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    )
  }
  function Ru(e, t, n) {
    return (e = jt(6, e, null, t)), (e.lanes = n), e
  }
  function Pu(e, t, n) {
    return (
      (t = jt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    )
  }
  function Tw(e, t, n, r, i) {
    ;(this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = cu(0)),
      (this.expirationTimes = cu(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = cu(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null)
  }
  function uf(e, t, n, r, i, s, o, a, l) {
    return (
      (e = new Tw(e, t, n, a, l)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = jt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Hd(s),
      e
    )
  }
  function Cw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
      $$typeof: ai,
      key: r == null ? null : '' + r,
      children: e,
      containerInfo: t,
      implementation: n,
    }
  }
  function Hg(e) {
    if (!e) return yr
    e = e._reactInternals
    e: {
      if (Qr(e) !== e || e.tag !== 1) throw Error(O(170))
      var t = e
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context
            break e
          case 1:
            if (It(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext
              break e
            }
        }
        t = t.return
      } while (t !== null)
      throw Error(O(171))
    }
    if (e.tag === 1) {
      var n = e.type
      if (It(n)) return Yv(e, n, t)
    }
    return t
  }
  function Vg(e, t, n, r, i, s, o, a, l) {
    return (
      (e = uf(n, r, !0, e, i, s, o, a, l)),
      (e.context = Hg(null)),
      (n = e.current),
      (r = gt()),
      (i = fr(n)),
      (s = Nn(r, i)),
      (s.callback = t != null ? t : null),
      cr(n, s, i),
      (e.current.lanes = i),
      so(e, i, r),
      Tt(e, r),
      e
    )
  }
  function cl(e, t, n, r) {
    var i = t.current,
      s = gt(),
      o = fr(i)
    return (
      (n = Hg(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Nn(s, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = cr(i, t, o)),
      e !== null && (rn(e, i, o, s), Ko(e, i, o)),
      o
    )
  }
  function La(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode
      default:
        return e.child.stateNode
    }
  }
  function Sp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane
      e.retryLane = n !== 0 && n < t ? n : t
    }
  }
  function cf(e, t) {
    Sp(e, t), (e = e.alternate) && Sp(e, t)
  }
  function xw() {
    return null
  }
  var Gg =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e)
        }
  function df(e) {
    this._internalRoot = e
  }
  dl.prototype.render = df.prototype.render = function (e) {
    var t = this._internalRoot
    if (t === null) throw Error(O(409))
    cl(e, t, null, null)
  }
  dl.prototype.unmount = df.prototype.unmount = function () {
    var e = this._internalRoot
    if (e !== null) {
      this._internalRoot = null
      var t = e.containerInfo
      Yr(function () {
        cl(null, e, null, null)
      }),
        (t[Ln] = null)
    }
  }
  function dl(e) {
    this._internalRoot = e
  }
  dl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ev()
      e = { blockedOn: null, target: e, priority: t }
      for (var n = 0; n < Qn.length && t !== 0 && t < Qn[n].priority; n++);
      Qn.splice(n, 0, e), n === 0 && Tv(e)
    }
  }
  function ff(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
  }
  function fl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    )
  }
  function kp() {}
  function Ow(e, t, n, r, i) {
    if (i) {
      if (typeof r == 'function') {
        var s = r
        r = function () {
          var u = La(o)
          s.call(u)
        }
      }
      var o = Vg(t, r, e, 0, null, !1, !1, '', kp)
      return (
        (e._reactRootContainer = o),
        (e[Ln] = o.current),
        zs(e.nodeType === 8 ? e.parentNode : e),
        Yr(),
        o
      )
    }
    for (; (i = e.lastChild); ) e.removeChild(i)
    if (typeof r == 'function') {
      var a = r
      r = function () {
        var u = La(l)
        a.call(u)
      }
    }
    var l = uf(e, 0, !1, null, null, !1, !1, '', kp)
    return (
      (e._reactRootContainer = l),
      (e[Ln] = l.current),
      zs(e.nodeType === 8 ? e.parentNode : e),
      Yr(function () {
        cl(t, l, n, r)
      }),
      l
    )
  }
  function hl(e, t, n, r, i) {
    var s = n._reactRootContainer
    if (s) {
      var o = s
      if (typeof i == 'function') {
        var a = i
        i = function () {
          var l = La(o)
          a.call(l)
        }
      }
      cl(t, o, e, i)
    } else o = Ow(n, t, e, i, r)
    return La(o)
  }
  Sv = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode
        if (t.current.memoizedState.isDehydrated) {
          var n = ms(t.pendingLanes)
          n !== 0 && (Pd(t, n | 1), Tt(t, je()), (ce & 6) === 0 && ((ji = je() + 500), kr()))
        }
        break
      case 13:
        Yr(function () {
          var r = bn(e, 1)
          if (r !== null) {
            var i = gt()
            rn(r, e, 1, i)
          }
        }),
          cf(e, 1)
    }
  }
  Dd = function (e) {
    if (e.tag === 13) {
      var t = bn(e, 134217728)
      if (t !== null) {
        var n = gt()
        rn(t, e, 134217728, n)
      }
      cf(e, 134217728)
    }
  }
  kv = function (e) {
    if (e.tag === 13) {
      var t = fr(e),
        n = bn(e, t)
      if (n !== null) {
        var r = gt()
        rn(n, e, t, r)
      }
      cf(e, t)
    }
  }
  Ev = function () {
    return ye
  }
  Iv = function (e, t) {
    var n = ye
    try {
      return (ye = e), t()
    } finally {
      ye = n
    }
  }
  _c = function (e, t, n) {
    switch (t) {
      case 'input':
        if ((fc(e, n), (t = n.name), n.type === 'radio' && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode
          for (
            n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t]
            if (r !== e && r.form === e.form) {
              var i = rl(r)
              if (!i) throw Error(O(90))
              tv(r), fc(r, i)
            }
          }
        }
        break
      case 'textarea':
        rv(e, n)
        break
      case 'select':
        ;(t = n.value), t != null && ki(e, !!n.multiple, t, !1)
    }
  }
  cv = sf
  dv = Yr
  var Rw = { usingClientEntryPoint: !1, Events: [ao, fi, rl, lv, uv, sf] },
    cs = {
      findFiberByHostInstance: Dr,
      bundleType: 0,
      version: '18.2.0',
      rendererPackageName: 'react-dom',
    },
    Pw = {
      bundleType: cs.bundleType,
      version: cs.version,
      rendererPackageName: cs.rendererPackageName,
      rendererConfig: cs.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: zn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = pv(e)), e === null ? null : e.stateNode
      },
      findFiberByHostInstance: cs.findFiberByHostInstance || xw,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!Uo.isDisabled && Uo.supportsFiber)
      try {
        ;(Za = Uo.inject(Pw)), (mn = Uo)
      } catch {}
  }
  At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rw
  At.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    if (!ff(t)) throw Error(O(200))
    return Cw(e, t, null, n)
  }
  At.createRoot = function (e, t) {
    if (!ff(e)) throw Error(O(299))
    var n = !1,
      r = '',
      i = Gg
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = uf(e, 1, !1, null, null, n, !1, r, i)),
      (e[Ln] = t.current),
      zs(e.nodeType === 8 ? e.parentNode : e),
      new df(t)
    )
  }
  At.findDOMNode = function (e) {
    if (e == null) return null
    if (e.nodeType === 1) return e
    var t = e._reactInternals
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(O(188))
        : ((e = Object.keys(e).join(',')), Error(O(268, e)))
    return (e = pv(t)), (e = e === null ? null : e.stateNode), e
  }
  At.flushSync = function (e) {
    return Yr(e)
  }
  At.hydrate = function (e, t, n) {
    if (!fl(t)) throw Error(O(200))
    return hl(null, e, t, !0, n)
  }
  At.hydrateRoot = function (e, t, n) {
    if (!ff(e)) throw Error(O(405))
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      s = '',
      o = Gg
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
      (t = Vg(t, null, e, 1, n != null ? n : null, i, !1, s, o)),
      (e[Ln] = t.current),
      zs(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (i = n._getVersion),
          (i = i(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, i])
            : t.mutableSourceEagerHydrationData.push(n, i)
    return new dl(t)
  }
  At.render = function (e, t, n) {
    if (!fl(t)) throw Error(O(200))
    return hl(null, e, t, !1, n)
  }
  At.unmountComponentAtNode = function (e) {
    if (!fl(e)) throw Error(O(40))
    return e._reactRootContainer
      ? (Yr(function () {
          hl(null, null, e, !1, function () {
            ;(e._reactRootContainer = null), (e[Ln] = null)
          })
        }),
        !0)
      : !1
  }
  At.unstable_batchedUpdates = sf
  At.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!fl(n)) throw Error(O(200))
    if (e == null || e._reactInternals === void 0) throw Error(O(38))
    return hl(e, t, n, !1, r)
  }
  At.version = '18.2.0-next-9e3b772b8-20220608'
  ;(function (e) {
    function t() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
        } catch (n) {
          console.error(n)
        }
    }
    t(), (e.exports = At)
  })(Vm)
  var Ep = Vm.exports
  ;(sc.createRoot = Ep.createRoot), (sc.hydrateRoot = Ep.hydrateRoot)
  var Kg = { exports: {} }
  ;(function (e) {
    ;(function () {
      function t(c, g, C) {
        return c.call.apply(c.bind, arguments)
      }
      function n(c, g, C) {
        if (!c) throw Error()
        if (2 < arguments.length) {
          var T = Array.prototype.slice.call(arguments, 2)
          return function () {
            var A = Array.prototype.slice.call(arguments)
            return Array.prototype.unshift.apply(A, T), c.apply(g, A)
          }
        }
        return function () {
          return c.apply(g, arguments)
        }
      }
      function r(c, g, C) {
        return (
          (r =
            Function.prototype.bind &&
            Function.prototype.bind.toString().indexOf('native code') != -1
              ? t
              : n),
          r.apply(null, arguments)
        )
      }
      var i =
        Date.now ||
        function () {
          return +new Date()
        }
      function s(c, g) {
        ;(this.a = c), (this.o = g || c), (this.c = this.o.document)
      }
      var o = !!window.FontFace
      function a(c, g, C, T) {
        if (((g = c.c.createElement(g)), C))
          for (var A in C)
            C.hasOwnProperty(A) &&
              (A == 'style' ? (g.style.cssText = C[A]) : g.setAttribute(A, C[A]))
        return T && g.appendChild(c.c.createTextNode(T)), g
      }
      function l(c, g, C) {
        ;(c = c.c.getElementsByTagName(g)[0]),
          c || (c = document.documentElement),
          c.insertBefore(C, c.lastChild)
      }
      function u(c) {
        c.parentNode && c.parentNode.removeChild(c)
      }
      function d(c, g, C) {
        ;(g = g || []), (C = C || [])
        for (var T = c.className.split(/\s+/), A = 0; A < g.length; A += 1) {
          for (var B = !1, V = 0; V < T.length; V += 1)
            if (g[A] === T[V]) {
              B = !0
              break
            }
          B || T.push(g[A])
        }
        for (g = [], A = 0; A < T.length; A += 1) {
          for (B = !1, V = 0; V < C.length; V += 1)
            if (T[A] === C[V]) {
              B = !0
              break
            }
          B || g.push(T[A])
        }
        c.className = g
          .join(' ')
          .replace(/\s+/g, ' ')
          .replace(/^\s+|\s+$/, '')
      }
      function p(c, g) {
        for (var C = c.className.split(/\s+/), T = 0, A = C.length; T < A; T++)
          if (C[T] == g) return !0
        return !1
      }
      function f(c) {
        return c.o.location.hostname || c.a.location.hostname
      }
      function S(c, g, C) {
        function T() {
          ve && A && B && (ve(V), (ve = null))
        }
        g = a(c, 'link', { rel: 'stylesheet', href: g, media: 'all' })
        var A = !1,
          B = !0,
          V = null,
          ve = C || null
        o
          ? ((g.onload = function () {
              ;(A = !0), T()
            }),
            (g.onerror = function () {
              ;(A = !0), (V = Error('Stylesheet failed to load')), T()
            }))
          : setTimeout(function () {
              ;(A = !0), T()
            }, 0),
          l(c, 'head', g)
      }
      function k(c, g, C, T) {
        var A = c.c.getElementsByTagName('head')[0]
        if (A) {
          var B = a(c, 'script', { src: g }),
            V = !1
          return (
            (B.onload = B.onreadystatechange =
              function () {
                V ||
                  (this.readyState &&
                    this.readyState != 'loaded' &&
                    this.readyState != 'complete') ||
                  ((V = !0),
                  C && C(null),
                  (B.onload = B.onreadystatechange = null),
                  B.parentNode.tagName == 'HEAD' && A.removeChild(B))
              }),
            A.appendChild(B),
            setTimeout(function () {
              V || ((V = !0), C && C(Error('Script load timeout')))
            }, T || 5e3),
            B
          )
        }
        return null
      }
      function E() {
        ;(this.a = 0), (this.c = null)
      }
      function N(c) {
        return (
          c.a++,
          function () {
            c.a--, h(c)
          }
        )
      }
      function m(c, g) {
        ;(c.c = g), h(c)
      }
      function h(c) {
        c.a == 0 && c.c && (c.c(), (c.c = null))
      }
      function v(c) {
        this.a = c || '-'
      }
      v.prototype.c = function (c) {
        for (var g = [], C = 0; C < arguments.length; C++)
          g.push(arguments[C].replace(/[\W_]+/g, '').toLowerCase())
        return g.join(this.a)
      }
      function w(c, g) {
        ;(this.c = c), (this.f = 4), (this.a = 'n')
        var C = (g || 'n4').match(/^([nio])([1-9])$/i)
        C && ((this.a = C[1]), (this.f = parseInt(C[2], 10)))
      }
      function _(c) {
        return x(c) + ' ' + (c.f + '00') + ' 300px ' + L(c.c)
      }
      function L(c) {
        var g = []
        c = c.split(/,\s*/)
        for (var C = 0; C < c.length; C++) {
          var T = c[C].replace(/['"]/g, '')
          T.indexOf(' ') != -1 || /^\d/.test(T) ? g.push("'" + T + "'") : g.push(T)
        }
        return g.join(',')
      }
      function I(c) {
        return c.a + c.f
      }
      function x(c) {
        var g = 'normal'
        return c.a === 'o' ? (g = 'oblique') : c.a === 'i' && (g = 'italic'), g
      }
      function W(c) {
        var g = 4,
          C = 'n',
          T = null
        return (
          c &&
            ((T = c.match(/(normal|oblique|italic)/i)) &&
              T[1] &&
              (C = T[1].substr(0, 1).toLowerCase()),
            (T = c.match(/([1-9]00|normal|bold)/i)) &&
              T[1] &&
              (/bold/i.test(T[1])
                ? (g = 7)
                : /[1-9]00/.test(T[1]) && (g = parseInt(T[1].substr(0, 1), 10)))),
          C + g
        )
      }
      function j(c, g) {
        ;(this.c = c),
          (this.f = c.o.document.documentElement),
          (this.h = g),
          (this.a = new v('-')),
          (this.j = g.events !== !1),
          (this.g = g.classes !== !1)
      }
      function re(c) {
        c.g && d(c.f, [c.a.c('wf', 'loading')]), oe(c, 'loading')
      }
      function Z(c) {
        if (c.g) {
          var g = p(c.f, c.a.c('wf', 'active')),
            C = [],
            T = [c.a.c('wf', 'loading')]
          g || C.push(c.a.c('wf', 'inactive')), d(c.f, C, T)
        }
        oe(c, 'inactive')
      }
      function oe(c, g, C) {
        c.j && c.h[g] && (C ? c.h[g](C.c, I(C)) : c.h[g]())
      }
      function Se() {
        this.c = {}
      }
      function $e(c, g, C) {
        var T = [],
          A
        for (A in g)
          if (g.hasOwnProperty(A)) {
            var B = c.c[A]
            B && T.push(B(g[A], C))
          }
        return T
      }
      function Qe(c, g) {
        ;(this.c = c), (this.f = g), (this.a = a(this.c, 'span', { 'aria-hidden': 'true' }, this.f))
      }
      function We(c) {
        l(c.c, 'body', c.a)
      }
      function P(c) {
        return (
          'display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:' +
          L(c.c) +
          ';' +
          ('font-style:' + x(c) + ';font-weight:' + (c.f + '00') + ';')
        )
      }
      function H(c, g, C, T, A, B) {
        ;(this.g = c),
          (this.j = g),
          (this.a = T),
          (this.c = C),
          (this.f = A || 3e3),
          (this.h = B || void 0)
      }
      H.prototype.start = function () {
        var c = this.c.o.document,
          g = this,
          C = i(),
          T = new Promise(function (V, ve) {
            function ge() {
              i() - C >= g.f
                ? ve()
                : c.fonts.load(_(g.a), g.h).then(
                    function (be) {
                      1 <= be.length ? V() : setTimeout(ge, 25)
                    },
                    function () {
                      ve()
                    }
                  )
            }
            ge()
          }),
          A = null,
          B = new Promise(function (V, ve) {
            A = setTimeout(ve, g.f)
          })
        Promise.race([B, T]).then(
          function () {
            A && (clearTimeout(A), (A = null)), g.g(g.a)
          },
          function () {
            g.j(g.a)
          }
        )
      }
      function G(c, g, C, T, A, B, V) {
        ;(this.v = c),
          (this.B = g),
          (this.c = C),
          (this.a = T),
          (this.s = V || 'BESbswy'),
          (this.f = {}),
          (this.w = A || 3e3),
          (this.u = B || null),
          (this.m = this.j = this.h = this.g = null),
          (this.g = new Qe(this.c, this.s)),
          (this.h = new Qe(this.c, this.s)),
          (this.j = new Qe(this.c, this.s)),
          (this.m = new Qe(this.c, this.s)),
          (c = new w(this.a.c + ',serif', I(this.a))),
          (c = P(c)),
          (this.g.a.style.cssText = c),
          (c = new w(this.a.c + ',sans-serif', I(this.a))),
          (c = P(c)),
          (this.h.a.style.cssText = c),
          (c = new w('serif', I(this.a))),
          (c = P(c)),
          (this.j.a.style.cssText = c),
          (c = new w('sans-serif', I(this.a))),
          (c = P(c)),
          (this.m.a.style.cssText = c),
          We(this.g),
          We(this.h),
          We(this.j),
          We(this.m)
      }
      var de = { D: 'serif', C: 'sans-serif' },
        M = null
      function U() {
        if (M === null) {
          var c = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent)
          M =
            !!c &&
            (536 > parseInt(c[1], 10) || (parseInt(c[1], 10) === 536 && 11 >= parseInt(c[2], 10)))
        }
        return M
      }
      G.prototype.start = function () {
        ;(this.f.serif = this.j.a.offsetWidth),
          (this.f['sans-serif'] = this.m.a.offsetWidth),
          (this.A = i()),
          K(this)
      }
      function F(c, g, C) {
        for (var T in de)
          if (de.hasOwnProperty(T) && g === c.f[de[T]] && C === c.f[de[T]]) return !0
        return !1
      }
      function K(c) {
        var g = c.g.a.offsetWidth,
          C = c.h.a.offsetWidth,
          T
        ;(T = g === c.f.serif && C === c.f['sans-serif']) || (T = U() && F(c, g, C)),
          T
            ? i() - c.A >= c.w
              ? U() && F(c, g, C) && (c.u === null || c.u.hasOwnProperty(c.a.c))
                ? te(c, c.v)
                : te(c, c.B)
              : y(c)
            : te(c, c.v)
      }
      function y(c) {
        setTimeout(
          r(function () {
            K(this)
          }, c),
          50
        )
      }
      function te(c, g) {
        setTimeout(
          r(function () {
            u(this.g.a), u(this.h.a), u(this.j.a), u(this.m.a), g(this.a)
          }, c),
          0
        )
      }
      function D(c, g, C) {
        ;(this.c = c), (this.a = g), (this.f = 0), (this.m = this.j = !1), (this.s = C)
      }
      var Ee = null
      ;(D.prototype.g = function (c) {
        var g = this.a
        g.g &&
          d(
            g.f,
            [g.a.c('wf', c.c, I(c).toString(), 'active')],
            [
              g.a.c('wf', c.c, I(c).toString(), 'loading'),
              g.a.c('wf', c.c, I(c).toString(), 'inactive'),
            ]
          ),
          oe(g, 'fontactive', c),
          (this.m = !0),
          ue(this)
      }),
        (D.prototype.h = function (c) {
          var g = this.a
          if (g.g) {
            var C = p(g.f, g.a.c('wf', c.c, I(c).toString(), 'active')),
              T = [],
              A = [g.a.c('wf', c.c, I(c).toString(), 'loading')]
            C || T.push(g.a.c('wf', c.c, I(c).toString(), 'inactive')), d(g.f, T, A)
          }
          oe(g, 'fontinactive', c), ue(this)
        })
      function ue(c) {
        --c.f == 0 &&
          c.j &&
          (c.m
            ? ((c = c.a),
              c.g &&
                d(c.f, [c.a.c('wf', 'active')], [c.a.c('wf', 'loading'), c.a.c('wf', 'inactive')]),
              oe(c, 'active'))
            : Z(c.a))
      }
      function fe(c) {
        ;(this.j = c), (this.a = new Se()), (this.h = 0), (this.f = this.g = !0)
      }
      fe.prototype.load = function (c) {
        ;(this.c = new s(this.j, c.context || this.j)),
          (this.g = c.events !== !1),
          (this.f = c.classes !== !1),
          Ye(this, new j(this.c, c), c)
      }
      function J(c, g, C, T, A) {
        var B = --c.h == 0
        ;(c.f || c.g) &&
          setTimeout(function () {
            var V = A || null,
              ve = T || null || {}
            if (C.length === 0 && B) Z(g.a)
            else {
              ;(g.f += C.length), B && (g.j = B)
              var ge,
                be = []
              for (ge = 0; ge < C.length; ge++) {
                var Ue = C[ge],
                  mt = ve[Ue.c],
                  qt = g.a,
                  ti = Ue
                if (
                  (qt.g && d(qt.f, [qt.a.c('wf', ti.c, I(ti).toString(), 'loading')]),
                  oe(qt, 'fontloading', ti),
                  (qt = null),
                  Ee === null)
                )
                  if (window.FontFace) {
                    var ti = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
                      f1 =
                        /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) &&
                        /Apple/.exec(window.navigator.vendor)
                    Ee = ti ? 42 < parseInt(ti[1], 10) : !f1
                  } else Ee = !1
                Ee
                  ? (qt = new H(r(g.g, g), r(g.h, g), g.c, Ue, g.s, mt))
                  : (qt = new G(r(g.g, g), r(g.h, g), g.c, Ue, g.s, V, mt)),
                  be.push(qt)
              }
              for (ge = 0; ge < be.length; ge++) be[ge].start()
            }
          }, 0)
      }
      function Ye(c, g, C) {
        var A = [],
          T = C.timeout
        re(g)
        var A = $e(c.a, C, c.c),
          B = new D(c.c, g, T)
        for (c.h = A.length, g = 0, C = A.length; g < C; g++)
          A[g].load(function (V, ve, ge) {
            J(c, B, V, ve, ge)
          })
      }
      function nt(c, g) {
        ;(this.c = c), (this.a = g)
      }
      nt.prototype.load = function (c) {
        function g() {
          if (B['__mti_fntLst' + T]) {
            var V = B['__mti_fntLst' + T](),
              ve = [],
              ge
            if (V)
              for (var be = 0; be < V.length; be++) {
                var Ue = V[be].fontfamily
                V[be].fontStyle != null && V[be].fontWeight != null
                  ? ((ge = V[be].fontStyle + V[be].fontWeight), ve.push(new w(Ue, ge)))
                  : ve.push(new w(Ue))
              }
            c(ve)
          } else
            setTimeout(function () {
              g()
            }, 50)
        }
        var C = this,
          T = C.a.projectId,
          A = C.a.version
        if (T) {
          var B = C.c.o
          k(
            this.c,
            (C.a.api || 'https://fast.fonts.net/jsapi') + '/' + T + '.js' + (A ? '?v=' + A : ''),
            function (V) {
              V
                ? c([])
                : ((B['__MonotypeConfiguration__' + T] = function () {
                    return C.a
                  }),
                  g())
            }
          ).id = '__MonotypeAPIScript__' + T
        } else c([])
      }
      function ae(c, g) {
        ;(this.c = c), (this.a = g)
      }
      ae.prototype.load = function (c) {
        var g,
          C,
          T = this.a.urls || [],
          A = this.a.families || [],
          B = this.a.testStrings || {},
          V = new E()
        for (g = 0, C = T.length; g < C; g++) S(this.c, T[g], N(V))
        var ve = []
        for (g = 0, C = A.length; g < C; g++)
          if (((T = A[g].split(':')), T[1]))
            for (var ge = T[1].split(','), be = 0; be < ge.length; be += 1)
              ve.push(new w(T[0], ge[be]))
          else ve.push(new w(T[0]))
        m(V, function () {
          c(ve, B)
        })
      }
      function Je(c, g) {
        c ? (this.c = c) : (this.c = he), (this.a = []), (this.f = []), (this.g = g || '')
      }
      var he = 'https://fonts.googleapis.com/css'
      function He(c, g) {
        for (var C = g.length, T = 0; T < C; T++) {
          var A = g[T].split(':')
          A.length == 3 && c.f.push(A.pop())
          var B = ''
          A.length == 2 && A[1] != '' && (B = ':'), c.a.push(A.join(B))
        }
      }
      function Ir(c) {
        if (c.a.length == 0) throw Error('No fonts to load!')
        if (c.c.indexOf('kit=') != -1) return c.c
        for (var g = c.a.length, C = [], T = 0; T < g; T++) C.push(c.a[T].replace(/ /g, '+'))
        return (
          (g = c.c + '?family=' + C.join('%7C')),
          0 < c.f.length && (g += '&subset=' + c.f.join(',')),
          0 < c.g.length && (g += '&text=' + encodeURIComponent(c.g)),
          g
        )
      }
      function Ve(c) {
        ;(this.f = c), (this.a = []), (this.c = {})
      }
      var Tr = {
          latin: 'BESbswy',
          'latin-ext': '\xE7\xF6\xFC\u011F\u015F',
          cyrillic: '\u0439\u044F\u0416',
          greek: '\u03B1\u03B2\u03A3',
          khmer: '\u1780\u1781\u1782',
          Hanuman: '\u1780\u1781\u1782',
        },
        Cr = {
          thin: '1',
          extralight: '2',
          'extra-light': '2',
          ultralight: '2',
          'ultra-light': '2',
          light: '3',
          regular: '4',
          book: '4',
          medium: '5',
          'semi-bold': '6',
          semibold: '6',
          'demi-bold': '6',
          demibold: '6',
          bold: '7',
          'extra-bold': '8',
          extrabold: '8',
          'ultra-bold': '8',
          ultrabold: '8',
          black: '9',
          heavy: '9',
          l: '3',
          r: '4',
          b: '7',
        },
        xt = { i: 'i', italic: 'i', n: 'n', normal: 'n' },
        q =
          /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/
      function Ne(c) {
        for (var g = c.f.length, C = 0; C < g; C++) {
          var T = c.f[C].split(':'),
            A = T[0].replace(/\+/g, ' '),
            B = ['n4']
          if (2 <= T.length) {
            var V,
              ve = T[1]
            if (((V = []), ve))
              for (var ve = ve.split(','), ge = ve.length, be = 0; be < ge; be++) {
                var Ue
                if (((Ue = ve[be]), Ue.match(/^[\w-]+$/))) {
                  var mt = q.exec(Ue.toLowerCase())
                  if (mt == null) Ue = ''
                  else {
                    if (
                      ((Ue = mt[2]),
                      (Ue = Ue == null || Ue == '' ? 'n' : xt[Ue]),
                      (mt = mt[1]),
                      mt == null || mt == '')
                    )
                      mt = '4'
                    else
                      var qt = Cr[mt],
                        mt = qt || (isNaN(mt) ? '4' : mt.substr(0, 1))
                    Ue = [Ue, mt].join('')
                  }
                } else Ue = ''
                Ue && V.push(Ue)
              }
            0 < V.length && (B = V),
              T.length == 3 &&
                ((T = T[2]),
                (V = []),
                (T = T ? T.split(',') : V),
                0 < T.length && (T = Tr[T[0]]) && (c.c[A] = T))
          }
          for (c.c[A] || ((T = Tr[A]) && (c.c[A] = T)), T = 0; T < B.length; T += 1)
            c.a.push(new w(A, B[T]))
        }
      }
      function ei(c, g) {
        ;(this.c = c), (this.a = g)
      }
      var ns = { Arimo: !0, Cousine: !0, Tinos: !0 }
      ei.prototype.load = function (c) {
        var g = new E(),
          C = this.c,
          T = new Je(this.a.api, this.a.text),
          A = this.a.families
        He(T, A)
        var B = new Ve(A)
        Ne(B),
          S(C, Ir(T), N(g)),
          m(g, function () {
            c(B.a, B.c, ns)
          })
      }
      function Kt(c, g) {
        ;(this.c = c), (this.a = g)
      }
      Kt.prototype.load = function (c) {
        var g = this.a.id,
          C = this.c.o
        g
          ? k(
              this.c,
              (this.a.api || 'https://use.typekit.net') + '/' + g + '.js',
              function (T) {
                if (T) c([])
                else if (C.Typekit && C.Typekit.config && C.Typekit.config.fn) {
                  T = C.Typekit.config.fn
                  for (var A = [], B = 0; B < T.length; B += 2)
                    for (var V = T[B], ve = T[B + 1], ge = 0; ge < ve.length; ge++)
                      A.push(new w(V, ve[ge]))
                  try {
                    C.Typekit.load({ events: !1, classes: !1, async: !0 })
                  } catch {}
                  c(A)
                }
              },
              2e3
            )
          : c([])
      }
      function hh(c, g) {
        ;(this.c = c), (this.f = g), (this.a = [])
      }
      hh.prototype.load = function (c) {
        var g = this.f.id,
          C = this.c.o,
          T = this
        g
          ? (C.__webfontfontdeckmodule__ || (C.__webfontfontdeckmodule__ = {}),
            (C.__webfontfontdeckmodule__[g] = function (A, B) {
              for (var V = 0, ve = B.fonts.length; V < ve; ++V) {
                var ge = B.fonts[V]
                T.a.push(new w(ge.name, W('font-weight:' + ge.weight + ';font-style:' + ge.style)))
              }
              c(T.a)
            }),
            k(
              this.c,
              (this.f.api || 'https://f.fontdeck.com/s/css/js/') + f(this.c) + '/' + g + '.js',
              function (A) {
                A && c([])
              }
            ))
          : c([])
      }
      var Yn = new fe(window)
      ;(Yn.a.c.custom = function (c, g) {
        return new ae(g, c)
      }),
        (Yn.a.c.fontdeck = function (c, g) {
          return new hh(g, c)
        }),
        (Yn.a.c.monotype = function (c, g) {
          return new nt(g, c)
        }),
        (Yn.a.c.typekit = function (c, g) {
          return new Kt(g, c)
        }),
        (Yn.a.c.google = function (c, g) {
          return new ei(g, c)
        })
      var ph = { load: r(Yn.load, Yn) }
      e.exports
        ? (e.exports = ph)
        : ((window.WebFont = ph), window.WebFontConfig && Yn.load(window.WebFontConfig))
    })()
  })(Kg)
  const Dw = Kg.exports
  var hf = { exports: {} },
    _e = {}
  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var pf = Symbol.for('react.element'),
    mf = Symbol.for('react.portal'),
    pl = Symbol.for('react.fragment'),
    ml = Symbol.for('react.strict_mode'),
    vl = Symbol.for('react.profiler'),
    gl = Symbol.for('react.provider'),
    yl = Symbol.for('react.context'),
    Nw = Symbol.for('react.server_context'),
    _l = Symbol.for('react.forward_ref'),
    wl = Symbol.for('react.suspense'),
    Sl = Symbol.for('react.suspense_list'),
    kl = Symbol.for('react.memo'),
    El = Symbol.for('react.lazy'),
    Mw = Symbol.for('react.offscreen'),
    qg
  qg = Symbol.for('react.module.reference')
  function Ht(e) {
    if (typeof e == 'object' && e !== null) {
      var t = e.$$typeof
      switch (t) {
        case pf:
          switch (((e = e.type), e)) {
            case pl:
            case vl:
            case ml:
            case wl:
            case Sl:
              return e
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Nw:
                case yl:
                case _l:
                case El:
                case kl:
                case gl:
                  return e
                default:
                  return t
              }
          }
        case mf:
          return t
      }
    }
  }
  _e.ContextConsumer = yl
  _e.ContextProvider = gl
  _e.Element = pf
  _e.ForwardRef = _l
  _e.Fragment = pl
  _e.Lazy = El
  _e.Memo = kl
  _e.Portal = mf
  _e.Profiler = vl
  _e.StrictMode = ml
  _e.Suspense = wl
  _e.SuspenseList = Sl
  _e.isAsyncMode = function () {
    return !1
  }
  _e.isConcurrentMode = function () {
    return !1
  }
  _e.isContextConsumer = function (e) {
    return Ht(e) === yl
  }
  _e.isContextProvider = function (e) {
    return Ht(e) === gl
  }
  _e.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === pf
  }
  _e.isForwardRef = function (e) {
    return Ht(e) === _l
  }
  _e.isFragment = function (e) {
    return Ht(e) === pl
  }
  _e.isLazy = function (e) {
    return Ht(e) === El
  }
  _e.isMemo = function (e) {
    return Ht(e) === kl
  }
  _e.isPortal = function (e) {
    return Ht(e) === mf
  }
  _e.isProfiler = function (e) {
    return Ht(e) === vl
  }
  _e.isStrictMode = function (e) {
    return Ht(e) === ml
  }
  _e.isSuspense = function (e) {
    return Ht(e) === wl
  }
  _e.isSuspenseList = function (e) {
    return Ht(e) === Sl
  }
  _e.isValidElementType = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'function' ||
      e === pl ||
      e === vl ||
      e === ml ||
      e === wl ||
      e === Sl ||
      e === Mw ||
      (typeof e == 'object' &&
        e !== null &&
        (e.$$typeof === El ||
          e.$$typeof === kl ||
          e.$$typeof === gl ||
          e.$$typeof === yl ||
          e.$$typeof === _l ||
          e.$$typeof === qg ||
          e.getModuleId !== void 0))
    )
  }
  _e.typeOf = Ht
  ;(function (e) {
    e.exports = _e
  })(hf)
  function Aw(e) {
    function t(M, U, F, K, y) {
      for (
        var te = 0,
          D = 0,
          Ee = 0,
          ue = 0,
          fe,
          J,
          Ye = 0,
          nt = 0,
          ae,
          Je = (ae = fe = 0),
          he = 0,
          He = 0,
          Ir = 0,
          Ve = 0,
          Tr = F.length,
          Cr = Tr - 1,
          xt,
          q = '',
          Ne = '',
          ei = '',
          ns = '',
          Kt;
        he < Tr;

      ) {
        if (
          ((J = F.charCodeAt(he)),
          he === Cr &&
            D + ue + Ee + te !== 0 &&
            (D !== 0 && (J = D === 47 ? 10 : 47), (ue = Ee = te = 0), Tr++, Cr++),
          D + ue + Ee + te === 0)
        ) {
          if (he === Cr && (0 < He && (q = q.replace(f, '')), 0 < q.trim().length)) {
            switch (J) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break
              default:
                q += F.charAt(he)
            }
            J = 59
          }
          switch (J) {
            case 123:
              for (q = q.trim(), fe = q.charCodeAt(0), ae = 1, Ve = ++he; he < Tr; ) {
                switch ((J = F.charCodeAt(he))) {
                  case 123:
                    ae++
                    break
                  case 125:
                    ae--
                    break
                  case 47:
                    switch ((J = F.charCodeAt(he + 1))) {
                      case 42:
                      case 47:
                        e: {
                          for (Je = he + 1; Je < Cr; ++Je)
                            switch (F.charCodeAt(Je)) {
                              case 47:
                                if (J === 42 && F.charCodeAt(Je - 1) === 42 && he + 2 !== Je) {
                                  he = Je + 1
                                  break e
                                }
                                break
                              case 10:
                                if (J === 47) {
                                  he = Je + 1
                                  break e
                                }
                            }
                          he = Je
                        }
                    }
                    break
                  case 91:
                    J++
                  case 40:
                    J++
                  case 34:
                  case 39:
                    for (; he++ < Cr && F.charCodeAt(he) !== J; );
                }
                if (ae === 0) break
                he++
              }
              switch (
                ((ae = F.substring(Ve, he)),
                fe === 0 && (fe = (q = q.replace(p, '').trim()).charCodeAt(0)),
                fe)
              ) {
                case 64:
                  switch ((0 < He && (q = q.replace(f, '')), (J = q.charCodeAt(1)), J)) {
                    case 100:
                    case 109:
                    case 115:
                    case 45:
                      He = U
                      break
                    default:
                      He = Qe
                  }
                  if (
                    ((ae = t(U, He, ae, J, y + 1)),
                    (Ve = ae.length),
                    0 < P &&
                      ((He = n(Qe, q, Ir)),
                      (Kt = a(3, ae, He, U, oe, Z, Ve, J, y, K)),
                      (q = He.join('')),
                      Kt !== void 0 &&
                        (Ve = (ae = Kt.trim()).length) === 0 &&
                        ((J = 0), (ae = ''))),
                    0 < Ve)
                  )
                    switch (J) {
                      case 115:
                        q = q.replace(L, o)
                      case 100:
                      case 109:
                      case 45:
                        ae = q + '{' + ae + '}'
                        break
                      case 107:
                        ;(q = q.replace(h, '$1 $2')),
                          (ae = q + '{' + ae + '}'),
                          (ae =
                            $e === 1 || ($e === 2 && s('@' + ae, 3))
                              ? '@-webkit-' + ae + '@' + ae
                              : '@' + ae)
                        break
                      default:
                        ;(ae = q + ae), K === 112 && (ae = ((Ne += ae), ''))
                    }
                  else ae = ''
                  break
                default:
                  ae = t(U, n(U, q, Ir), ae, K, y + 1)
              }
              ;(ei += ae), (ae = Ir = He = Je = fe = 0), (q = ''), (J = F.charCodeAt(++he))
              break
            case 125:
            case 59:
              if (((q = (0 < He ? q.replace(f, '') : q).trim()), 1 < (Ve = q.length)))
                switch (
                  (Je === 0 &&
                    ((fe = q.charCodeAt(0)), fe === 45 || (96 < fe && 123 > fe)) &&
                    (Ve = (q = q.replace(' ', ':')).length),
                  0 < P &&
                    (Kt = a(1, q, U, M, oe, Z, Ne.length, K, y, K)) !== void 0 &&
                    (Ve = (q = Kt.trim()).length) === 0 &&
                    (q = '\0\0'),
                  (fe = q.charCodeAt(0)),
                  (J = q.charCodeAt(1)),
                  fe)
                ) {
                  case 0:
                    break
                  case 64:
                    if (J === 105 || J === 99) {
                      ns += q + F.charAt(he)
                      break
                    }
                  default:
                    q.charCodeAt(Ve - 1) !== 58 && (Ne += i(q, fe, J, q.charCodeAt(2)))
                }
              ;(Ir = He = Je = fe = 0), (q = ''), (J = F.charCodeAt(++he))
          }
        }
        switch (J) {
          case 13:
          case 10:
            D === 47
              ? (D = 0)
              : 1 + fe === 0 && K !== 107 && 0 < q.length && ((He = 1), (q += '\0')),
              0 < P * G && a(0, q, U, M, oe, Z, Ne.length, K, y, K),
              (Z = 1),
              oe++
            break
          case 59:
          case 125:
            if (D + ue + Ee + te === 0) {
              Z++
              break
            }
          default:
            switch ((Z++, (xt = F.charAt(he)), J)) {
              case 9:
              case 32:
                if (ue + te + D === 0)
                  switch (Ye) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      xt = ''
                      break
                    default:
                      J !== 32 && (xt = ' ')
                  }
                break
              case 0:
                xt = '\\0'
                break
              case 12:
                xt = '\\f'
                break
              case 11:
                xt = '\\v'
                break
              case 38:
                ue + D + te === 0 && ((He = Ir = 1), (xt = '\f' + xt))
                break
              case 108:
                if (ue + D + te + Se === 0 && 0 < Je)
                  switch (he - Je) {
                    case 2:
                      Ye === 112 && F.charCodeAt(he - 3) === 58 && (Se = Ye)
                    case 8:
                      nt === 111 && (Se = nt)
                  }
                break
              case 58:
                ue + D + te === 0 && (Je = he)
                break
              case 44:
                D + Ee + ue + te === 0 && ((He = 1), (xt += '\r'))
                break
              case 34:
              case 39:
                D === 0 && (ue = ue === J ? 0 : ue === 0 ? J : ue)
                break
              case 91:
                ue + D + Ee === 0 && te++
                break
              case 93:
                ue + D + Ee === 0 && te--
                break
              case 41:
                ue + D + te === 0 && Ee--
                break
              case 40:
                if (ue + D + te === 0) {
                  if (fe === 0)
                    switch (2 * Ye + 3 * nt) {
                      case 533:
                        break
                      default:
                        fe = 1
                    }
                  Ee++
                }
                break
              case 64:
                D + Ee + ue + te + Je + ae === 0 && (ae = 1)
                break
              case 42:
              case 47:
                if (!(0 < ue + te + Ee))
                  switch (D) {
                    case 0:
                      switch (2 * J + 3 * F.charCodeAt(he + 1)) {
                        case 235:
                          D = 47
                          break
                        case 220:
                          ;(Ve = he), (D = 42)
                      }
                      break
                    case 42:
                      J === 47 &&
                        Ye === 42 &&
                        Ve + 2 !== he &&
                        (F.charCodeAt(Ve + 2) === 33 && (Ne += F.substring(Ve, he + 1)),
                        (xt = ''),
                        (D = 0))
                  }
            }
            D === 0 && (q += xt)
        }
        ;(nt = Ye), (Ye = J), he++
      }
      if (((Ve = Ne.length), 0 < Ve)) {
        if (
          ((He = U),
          0 < P &&
            ((Kt = a(2, Ne, He, M, oe, Z, Ve, K, y, K)), Kt !== void 0 && (Ne = Kt).length === 0))
        )
          return ns + Ne + ei
        if (((Ne = He.join(',') + '{' + Ne + '}'), $e * Se !== 0)) {
          switch (($e !== 2 || s(Ne, 2) || (Se = 0), Se)) {
            case 111:
              Ne = Ne.replace(w, ':-moz-$1') + Ne
              break
            case 112:
              Ne =
                Ne.replace(v, '::-webkit-input-$1') +
                Ne.replace(v, '::-moz-$1') +
                Ne.replace(v, ':-ms-input-$1') +
                Ne
          }
          Se = 0
        }
      }
      return ns + Ne + ei
    }
    function n(M, U, F) {
      var K = U.trim().split(N)
      U = K
      var y = K.length,
        te = M.length
      switch (te) {
        case 0:
        case 1:
          var D = 0
          for (M = te === 0 ? '' : M[0] + ' '; D < y; ++D) U[D] = r(M, U[D], F).trim()
          break
        default:
          var Ee = (D = 0)
          for (U = []; D < y; ++D)
            for (var ue = 0; ue < te; ++ue) U[Ee++] = r(M[ue] + ' ', K[D], F).trim()
      }
      return U
    }
    function r(M, U, F) {
      var K = U.charCodeAt(0)
      switch ((33 > K && (K = (U = U.trim()).charCodeAt(0)), K)) {
        case 38:
          return U.replace(m, '$1' + M.trim())
        case 58:
          return M.trim() + U.replace(m, '$1' + M.trim())
        default:
          if (0 < 1 * F && 0 < U.indexOf('\f'))
            return U.replace(m, (M.charCodeAt(0) === 58 ? '' : '$1') + M.trim())
      }
      return M + U
    }
    function i(M, U, F, K) {
      var y = M + ';',
        te = 2 * U + 3 * F + 4 * K
      if (te === 944) {
        M = y.indexOf(':', 9) + 1
        var D = y.substring(M, y.length - 1).trim()
        return (
          (D = y.substring(0, M).trim() + D + ';'),
          $e === 1 || ($e === 2 && s(D, 1)) ? '-webkit-' + D + D : D
        )
      }
      if ($e === 0 || ($e === 2 && !s(y, 1))) return y
      switch (te) {
        case 1015:
          return y.charCodeAt(10) === 97 ? '-webkit-' + y + y : y
        case 951:
          return y.charCodeAt(3) === 116 ? '-webkit-' + y + y : y
        case 963:
          return y.charCodeAt(5) === 110 ? '-webkit-' + y + y : y
        case 1009:
          if (y.charCodeAt(4) !== 100) break
        case 969:
        case 942:
          return '-webkit-' + y + y
        case 978:
          return '-webkit-' + y + '-moz-' + y + y
        case 1019:
        case 983:
          return '-webkit-' + y + '-moz-' + y + '-ms-' + y + y
        case 883:
          if (y.charCodeAt(8) === 45) return '-webkit-' + y + y
          if (0 < y.indexOf('image-set(', 11)) return y.replace(re, '$1-webkit-$2') + y
          break
        case 932:
          if (y.charCodeAt(4) === 45)
            switch (y.charCodeAt(5)) {
              case 103:
                return (
                  '-webkit-box-' +
                  y.replace('-grow', '') +
                  '-webkit-' +
                  y +
                  '-ms-' +
                  y.replace('grow', 'positive') +
                  y
                )
              case 115:
                return '-webkit-' + y + '-ms-' + y.replace('shrink', 'negative') + y
              case 98:
                return '-webkit-' + y + '-ms-' + y.replace('basis', 'preferred-size') + y
            }
          return '-webkit-' + y + '-ms-' + y + y
        case 964:
          return '-webkit-' + y + '-ms-flex-' + y + y
        case 1023:
          if (y.charCodeAt(8) !== 99) break
          return (
            (D = y
              .substring(y.indexOf(':', 15))
              .replace('flex-', '')
              .replace('space-between', 'justify')),
            '-webkit-box-pack' + D + '-webkit-' + y + '-ms-flex-pack' + D + y
          )
        case 1005:
          return k.test(y) ? y.replace(S, ':-webkit-') + y.replace(S, ':-moz-') + y : y
        case 1e3:
          switch (
            ((D = y.substring(13).trim()),
            (U = D.indexOf('-') + 1),
            D.charCodeAt(0) + D.charCodeAt(U))
          ) {
            case 226:
              D = y.replace(_, 'tb')
              break
            case 232:
              D = y.replace(_, 'tb-rl')
              break
            case 220:
              D = y.replace(_, 'lr')
              break
            default:
              return y
          }
          return '-webkit-' + y + '-ms-' + D + y
        case 1017:
          if (y.indexOf('sticky', 9) === -1) break
        case 975:
          switch (
            ((U = (y = M).length - 10),
            (D = (y.charCodeAt(U) === 33 ? y.substring(0, U) : y)
              .substring(M.indexOf(':', 7) + 1)
              .trim()),
            (te = D.charCodeAt(0) + (D.charCodeAt(7) | 0)))
          ) {
            case 203:
              if (111 > D.charCodeAt(8)) break
            case 115:
              y = y.replace(D, '-webkit-' + D) + ';' + y
              break
            case 207:
            case 102:
              y =
                y.replace(D, '-webkit-' + (102 < te ? 'inline-' : '') + 'box') +
                ';' +
                y.replace(D, '-webkit-' + D) +
                ';' +
                y.replace(D, '-ms-' + D + 'box') +
                ';' +
                y
          }
          return y + ';'
        case 938:
          if (y.charCodeAt(5) === 45)
            switch (y.charCodeAt(6)) {
              case 105:
                return (
                  (D = y.replace('-items', '')),
                  '-webkit-' + y + '-webkit-box-' + D + '-ms-flex-' + D + y
                )
              case 115:
                return '-webkit-' + y + '-ms-flex-item-' + y.replace(x, '') + y
              default:
                return (
                  '-webkit-' +
                  y +
                  '-ms-flex-line-pack' +
                  y.replace('align-content', '').replace(x, '') +
                  y
                )
            }
          break
        case 973:
        case 989:
          if (y.charCodeAt(3) !== 45 || y.charCodeAt(4) === 122) break
        case 931:
        case 953:
          if (j.test(M) === !0)
            return (D = M.substring(M.indexOf(':') + 1)).charCodeAt(0) === 115
              ? i(M.replace('stretch', 'fill-available'), U, F, K).replace(
                  ':fill-available',
                  ':stretch'
                )
              : y.replace(D, '-webkit-' + D) + y.replace(D, '-moz-' + D.replace('fill-', '')) + y
          break
        case 962:
          if (
            ((y = '-webkit-' + y + (y.charCodeAt(5) === 102 ? '-ms-' + y : '') + y),
            F + K === 211 && y.charCodeAt(13) === 105 && 0 < y.indexOf('transform', 10))
          )
            return y.substring(0, y.indexOf(';', 27) + 1).replace(E, '$1-webkit-$2') + y
      }
      return y
    }
    function s(M, U) {
      var F = M.indexOf(U === 1 ? ':' : '{'),
        K = M.substring(0, U !== 3 ? F : 10)
      return (F = M.substring(F + 1, M.length - 1)), H(U !== 2 ? K : K.replace(W, '$1'), F, U)
    }
    function o(M, U) {
      var F = i(U, U.charCodeAt(0), U.charCodeAt(1), U.charCodeAt(2))
      return F !== U + ';' ? F.replace(I, ' or ($1)').substring(4) : '(' + U + ')'
    }
    function a(M, U, F, K, y, te, D, Ee, ue, fe) {
      for (var J = 0, Ye = U, nt; J < P; ++J)
        switch ((nt = We[J].call(d, M, Ye, F, K, y, te, D, Ee, ue, fe))) {
          case void 0:
          case !1:
          case !0:
          case null:
            break
          default:
            Ye = nt
        }
      if (Ye !== U) return Ye
    }
    function l(M) {
      switch (M) {
        case void 0:
        case null:
          P = We.length = 0
          break
        default:
          if (typeof M == 'function') We[P++] = M
          else if (typeof M == 'object') for (var U = 0, F = M.length; U < F; ++U) l(M[U])
          else G = !!M | 0
      }
      return l
    }
    function u(M) {
      return (
        (M = M.prefix),
        M !== void 0 &&
          ((H = null), M ? (typeof M != 'function' ? ($e = 1) : (($e = 2), (H = M))) : ($e = 0)),
        u
      )
    }
    function d(M, U) {
      var F = M
      if ((33 > F.charCodeAt(0) && (F = F.trim()), (de = F), (F = [de]), 0 < P)) {
        var K = a(-1, U, F, F, oe, Z, 0, 0, 0, 0)
        K !== void 0 && typeof K == 'string' && (U = K)
      }
      var y = t(Qe, F, U, 0, 0)
      return (
        0 < P && ((K = a(-2, y, F, F, oe, Z, y.length, 0, 0, 0)), K !== void 0 && (y = K)),
        (de = ''),
        (Se = 0),
        (Z = oe = 1),
        y
      )
    }
    var p = /^\0+/g,
      f = /[\0\r\f]/g,
      S = /: */g,
      k = /zoo|gra/,
      E = /([,: ])(transform)/g,
      N = /,\r+?/g,
      m = /([\t\r\n ])*\f?&/g,
      h = /@(k\w+)\s*(\S*)\s*/,
      v = /::(place)/g,
      w = /:(read-only)/g,
      _ = /[svh]\w+-[tblr]{2}/,
      L = /\(\s*(.*)\s*\)/g,
      I = /([\s\S]*?);/g,
      x = /-self|flex-/g,
      W = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      j = /stretch|:\s*\w+\-(?:conte|avail)/,
      re = /([^-])(image-set\()/,
      Z = 1,
      oe = 1,
      Se = 0,
      $e = 1,
      Qe = [],
      We = [],
      P = 0,
      H = null,
      G = 0,
      de = ''
    return (d.use = l), (d.set = u), e !== void 0 && u(e), d
  }
  var Lw = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  }
  function bw(e) {
    var t = Object.create(null)
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n]
    }
  }
  var Uw =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    Ip = bw(function (e) {
      return (
        Uw.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )
    }),
    Qg = { exports: {} },
    we = {}
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var tt = typeof Symbol == 'function' && Symbol.for,
    vf = tt ? Symbol.for('react.element') : 60103,
    gf = tt ? Symbol.for('react.portal') : 60106,
    Il = tt ? Symbol.for('react.fragment') : 60107,
    Tl = tt ? Symbol.for('react.strict_mode') : 60108,
    Cl = tt ? Symbol.for('react.profiler') : 60114,
    xl = tt ? Symbol.for('react.provider') : 60109,
    Ol = tt ? Symbol.for('react.context') : 60110,
    yf = tt ? Symbol.for('react.async_mode') : 60111,
    Rl = tt ? Symbol.for('react.concurrent_mode') : 60111,
    Pl = tt ? Symbol.for('react.forward_ref') : 60112,
    Dl = tt ? Symbol.for('react.suspense') : 60113,
    Fw = tt ? Symbol.for('react.suspense_list') : 60120,
    Nl = tt ? Symbol.for('react.memo') : 60115,
    Ml = tt ? Symbol.for('react.lazy') : 60116,
    $w = tt ? Symbol.for('react.block') : 60121,
    zw = tt ? Symbol.for('react.fundamental') : 60117,
    jw = tt ? Symbol.for('react.responder') : 60118,
    Ww = tt ? Symbol.for('react.scope') : 60119
  function bt(e) {
    if (typeof e == 'object' && e !== null) {
      var t = e.$$typeof
      switch (t) {
        case vf:
          switch (((e = e.type), e)) {
            case yf:
            case Rl:
            case Il:
            case Cl:
            case Tl:
            case Dl:
              return e
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Ol:
                case Pl:
                case Ml:
                case Nl:
                case xl:
                  return e
                default:
                  return t
              }
          }
        case gf:
          return t
      }
    }
  }
  function Jg(e) {
    return bt(e) === Rl
  }
  we.AsyncMode = yf
  we.ConcurrentMode = Rl
  we.ContextConsumer = Ol
  we.ContextProvider = xl
  we.Element = vf
  we.ForwardRef = Pl
  we.Fragment = Il
  we.Lazy = Ml
  we.Memo = Nl
  we.Portal = gf
  we.Profiler = Cl
  we.StrictMode = Tl
  we.Suspense = Dl
  we.isAsyncMode = function (e) {
    return Jg(e) || bt(e) === yf
  }
  we.isConcurrentMode = Jg
  we.isContextConsumer = function (e) {
    return bt(e) === Ol
  }
  we.isContextProvider = function (e) {
    return bt(e) === xl
  }
  we.isElement = function (e) {
    return typeof e == 'object' && e !== null && e.$$typeof === vf
  }
  we.isForwardRef = function (e) {
    return bt(e) === Pl
  }
  we.isFragment = function (e) {
    return bt(e) === Il
  }
  we.isLazy = function (e) {
    return bt(e) === Ml
  }
  we.isMemo = function (e) {
    return bt(e) === Nl
  }
  we.isPortal = function (e) {
    return bt(e) === gf
  }
  we.isProfiler = function (e) {
    return bt(e) === Cl
  }
  we.isStrictMode = function (e) {
    return bt(e) === Tl
  }
  we.isSuspense = function (e) {
    return bt(e) === Dl
  }
  we.isValidElementType = function (e) {
    return (
      typeof e == 'string' ||
      typeof e == 'function' ||
      e === Il ||
      e === Rl ||
      e === Cl ||
      e === Tl ||
      e === Dl ||
      e === Fw ||
      (typeof e == 'object' &&
        e !== null &&
        (e.$$typeof === Ml ||
          e.$$typeof === Nl ||
          e.$$typeof === xl ||
          e.$$typeof === Ol ||
          e.$$typeof === Pl ||
          e.$$typeof === zw ||
          e.$$typeof === jw ||
          e.$$typeof === Ww ||
          e.$$typeof === $w))
    )
  }
  we.typeOf = bt
  ;(function (e) {
    e.exports = we
  })(Qg)
  var _f = Qg.exports,
    Bw = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    Yw = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
    Hw = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
    Xg = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
    wf = {}
  wf[_f.ForwardRef] = Hw
  wf[_f.Memo] = Xg
  function Tp(e) {
    return _f.isMemo(e) ? Xg : wf[e.$$typeof] || Bw
  }
  var Vw = Object.defineProperty,
    Gw = Object.getOwnPropertyNames,
    Cp = Object.getOwnPropertySymbols,
    Kw = Object.getOwnPropertyDescriptor,
    qw = Object.getPrototypeOf,
    xp = Object.prototype
  function Zg(e, t, n) {
    if (typeof t != 'string') {
      if (xp) {
        var r = qw(t)
        r && r !== xp && Zg(e, r, n)
      }
      var i = Gw(t)
      Cp && (i = i.concat(Cp(t)))
      for (var s = Tp(e), o = Tp(t), a = 0; a < i.length; ++a) {
        var l = i[a]
        if (!Yw[l] && !(n && n[l]) && !(o && o[l]) && !(s && s[l])) {
          var u = Kw(t, l)
          try {
            Vw(e, l, u)
          } catch {}
        }
      }
    }
    return e
  }
  var Qw = Zg
  function pn() {
    return (pn =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }).apply(this, arguments)
  }
  var Op = function (e, t) {
      for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1])
      return n
    },
    Xc = function (e) {
      return (
        e !== null &&
        typeof e == 'object' &&
        (e.toString ? e.toString() : Object.prototype.toString.call(e)) === '[object Object]' &&
        !hf.exports.typeOf(e)
      )
    },
    ba = Object.freeze([]),
    pr = Object.freeze({})
  function qs(e) {
    return typeof e == 'function'
  }
  function Rp(e) {
    return e.displayName || e.name || 'Component'
  }
  function Sf(e) {
    return e && typeof e.styledComponentId == 'string'
  }
  var Wi =
      (typeof process < 'u' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR)) ||
      'data-styled',
    kf = typeof window < 'u' && 'HTMLElement' in window,
    Jw = Boolean(
      typeof SC_DISABLE_SPEEDY == 'boolean'
        ? SC_DISABLE_SPEEDY
        : typeof process < 'u' &&
          process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
          process.env.REACT_APP_SC_DISABLE_SPEEDY !== ''
        ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
          process.env.REACT_APP_SC_DISABLE_SPEEDY
        : typeof process < 'u' &&
          process.env.SC_DISABLE_SPEEDY !== void 0 &&
          process.env.SC_DISABLE_SPEEDY !== ''
        ? process.env.SC_DISABLE_SPEEDY !== 'false' && process.env.SC_DISABLE_SPEEDY
        : !1
    ),
    Xw = {}
  function uo(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    throw new Error(
      'An error occurred. See https://git.io/JUIaE#' +
        e +
        ' for more information.' +
        (n.length > 0 ? ' Args: ' + n.join(', ') : '')
    )
  }
  var Zw = (function () {
      function e(n) {
        ;(this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = n)
      }
      var t = e.prototype
      return (
        (t.indexOfGroup = function (n) {
          for (var r = 0, i = 0; i < n; i++) r += this.groupSizes[i]
          return r
        }),
        (t.insertRules = function (n, r) {
          if (n >= this.groupSizes.length) {
            for (var i = this.groupSizes, s = i.length, o = s; n >= o; )
              (o <<= 1) < 0 && uo(16, '' + n)
            ;(this.groupSizes = new Uint32Array(o)), this.groupSizes.set(i), (this.length = o)
            for (var a = s; a < o; a++) this.groupSizes[a] = 0
          }
          for (var l = this.indexOfGroup(n + 1), u = 0, d = r.length; u < d; u++)
            this.tag.insertRule(l, r[u]) && (this.groupSizes[n]++, l++)
        }),
        (t.clearGroup = function (n) {
          if (n < this.length) {
            var r = this.groupSizes[n],
              i = this.indexOfGroup(n),
              s = i + r
            this.groupSizes[n] = 0
            for (var o = i; o < s; o++) this.tag.deleteRule(i)
          }
        }),
        (t.getGroup = function (n) {
          var r = ''
          if (n >= this.length || this.groupSizes[n] === 0) return r
          for (var i = this.groupSizes[n], s = this.indexOfGroup(n), o = s + i, a = s; a < o; a++)
            r +=
              this.tag.getRule(a) +
              `/*!sc*/
`
          return r
        }),
        e
      )
    })(),
    ta = new Map(),
    Ua = new Map(),
    Os = 1,
    Fo = function (e) {
      if (ta.has(e)) return ta.get(e)
      for (; Ua.has(Os); ) Os++
      var t = Os++
      return ta.set(e, t), Ua.set(t, e), t
    },
    eS = function (e) {
      return Ua.get(e)
    },
    tS = function (e, t) {
      t >= Os && (Os = t + 1), ta.set(e, t), Ua.set(t, e)
    },
    nS = 'style[' + Wi + '][data-styled-version="5.3.5"]',
    rS = new RegExp('^' + Wi + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
    iS = function (e, t, n) {
      for (var r, i = n.split(','), s = 0, o = i.length; s < o; s++)
        (r = i[s]) && e.registerName(t, r)
    },
    sS = function (e, t) {
      for (
        var n = (t.textContent || '').split(`/*!sc*/
`),
          r = [],
          i = 0,
          s = n.length;
        i < s;
        i++
      ) {
        var o = n[i].trim()
        if (o) {
          var a = o.match(rS)
          if (a) {
            var l = 0 | parseInt(a[1], 10),
              u = a[2]
            l !== 0 && (tS(u, l), iS(e, u, a[3]), e.getTag().insertRules(l, r)), (r.length = 0)
          } else r.push(o)
        }
      }
    },
    oS = function () {
      return typeof window < 'u' && window.__webpack_nonce__ !== void 0
        ? window.__webpack_nonce__
        : null
    },
    ey = function (e) {
      var t = document.head,
        n = e || t,
        r = document.createElement('style'),
        i = (function (a) {
          for (var l = a.childNodes, u = l.length; u >= 0; u--) {
            var d = l[u]
            if (d && d.nodeType === 1 && d.hasAttribute(Wi)) return d
          }
        })(n),
        s = i !== void 0 ? i.nextSibling : null
      r.setAttribute(Wi, 'active'), r.setAttribute('data-styled-version', '5.3.5')
      var o = oS()
      return o && r.setAttribute('nonce', o), n.insertBefore(r, s), r
    },
    aS = (function () {
      function e(n) {
        var r = (this.element = ey(n))
        r.appendChild(document.createTextNode('')),
          (this.sheet = (function (i) {
            if (i.sheet) return i.sheet
            for (var s = document.styleSheets, o = 0, a = s.length; o < a; o++) {
              var l = s[o]
              if (l.ownerNode === i) return l
            }
            uo(17)
          })(r)),
          (this.length = 0)
      }
      var t = e.prototype
      return (
        (t.insertRule = function (n, r) {
          try {
            return this.sheet.insertRule(r, n), this.length++, !0
          } catch {
            return !1
          }
        }),
        (t.deleteRule = function (n) {
          this.sheet.deleteRule(n), this.length--
        }),
        (t.getRule = function (n) {
          var r = this.sheet.cssRules[n]
          return r !== void 0 && typeof r.cssText == 'string' ? r.cssText : ''
        }),
        e
      )
    })(),
    lS = (function () {
      function e(n) {
        var r = (this.element = ey(n))
        ;(this.nodes = r.childNodes), (this.length = 0)
      }
      var t = e.prototype
      return (
        (t.insertRule = function (n, r) {
          if (n <= this.length && n >= 0) {
            var i = document.createTextNode(r),
              s = this.nodes[n]
            return this.element.insertBefore(i, s || null), this.length++, !0
          }
          return !1
        }),
        (t.deleteRule = function (n) {
          this.element.removeChild(this.nodes[n]), this.length--
        }),
        (t.getRule = function (n) {
          return n < this.length ? this.nodes[n].textContent : ''
        }),
        e
      )
    })(),
    uS = (function () {
      function e(n) {
        ;(this.rules = []), (this.length = 0)
      }
      var t = e.prototype
      return (
        (t.insertRule = function (n, r) {
          return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        }),
        (t.deleteRule = function (n) {
          this.rules.splice(n, 1), this.length--
        }),
        (t.getRule = function (n) {
          return n < this.length ? this.rules[n] : ''
        }),
        e
      )
    })(),
    Pp = kf,
    cS = { isServer: !kf, useCSSOMInjection: !Jw },
    Fa = (function () {
      function e(n, r, i) {
        n === void 0 && (n = pr),
          r === void 0 && (r = {}),
          (this.options = pn({}, cS, {}, n)),
          (this.gs = r),
          (this.names = new Map(i)),
          (this.server = !!n.isServer),
          !this.server &&
            kf &&
            Pp &&
            ((Pp = !1),
            (function (s) {
              for (var o = document.querySelectorAll(nS), a = 0, l = o.length; a < l; a++) {
                var u = o[a]
                u &&
                  u.getAttribute(Wi) !== 'active' &&
                  (sS(s, u), u.parentNode && u.parentNode.removeChild(u))
              }
            })(this))
      }
      e.registerId = function (n) {
        return Fo(n)
      }
      var t = e.prototype
      return (
        (t.reconstructWithOptions = function (n, r) {
          return (
            r === void 0 && (r = !0),
            new e(pn({}, this.options, {}, n), this.gs, (r && this.names) || void 0)
          )
        }),
        (t.allocateGSInstance = function (n) {
          return (this.gs[n] = (this.gs[n] || 0) + 1)
        }),
        (t.getTag = function () {
          return (
            this.tag ||
            (this.tag =
              ((i = (r = this.options).isServer),
              (s = r.useCSSOMInjection),
              (o = r.target),
              (n = i ? new uS(o) : s ? new aS(o) : new lS(o)),
              new Zw(n)))
          )
          var n, r, i, s, o
        }),
        (t.hasNameForId = function (n, r) {
          return this.names.has(n) && this.names.get(n).has(r)
        }),
        (t.registerName = function (n, r) {
          if ((Fo(n), this.names.has(n))) this.names.get(n).add(r)
          else {
            var i = new Set()
            i.add(r), this.names.set(n, i)
          }
        }),
        (t.insertRules = function (n, r, i) {
          this.registerName(n, r), this.getTag().insertRules(Fo(n), i)
        }),
        (t.clearNames = function (n) {
          this.names.has(n) && this.names.get(n).clear()
        }),
        (t.clearRules = function (n) {
          this.getTag().clearGroup(Fo(n)), this.clearNames(n)
        }),
        (t.clearTag = function () {
          this.tag = void 0
        }),
        (t.toString = function () {
          return (function (n) {
            for (var r = n.getTag(), i = r.length, s = '', o = 0; o < i; o++) {
              var a = eS(o)
              if (a !== void 0) {
                var l = n.names.get(a),
                  u = r.getGroup(o)
                if (l && u && l.size) {
                  var d = Wi + '.g' + o + '[id="' + a + '"]',
                    p = ''
                  l !== void 0 &&
                    l.forEach(function (f) {
                      f.length > 0 && (p += f + ',')
                    }),
                    (s +=
                      '' +
                      u +
                      d +
                      '{content:"' +
                      p +
                      `"}/*!sc*/
`)
                }
              }
            }
            return s
          })(this)
        }),
        e
      )
    })(),
    dS = /(a)(d)/gi,
    Dp = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97))
    }
  function Zc(e) {
    var t,
      n = ''
    for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Dp(t % 52) + n
    return (Dp(t % 52) + n).replace(dS, '$1-$2')
  }
  var _i = function (e, t) {
      for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n)
      return e
    },
    ty = function (e) {
      return _i(5381, e)
    }
  function ny(e) {
    for (var t = 0; t < e.length; t += 1) {
      var n = e[t]
      if (qs(n) && !Sf(n)) return !1
    }
    return !0
  }
  var fS = ty('5.3.5'),
    hS = (function () {
      function e(t, n, r) {
        ;(this.rules = t),
          (this.staticRulesId = ''),
          (this.isStatic = (r === void 0 || r.isStatic) && ny(t)),
          (this.componentId = n),
          (this.baseHash = _i(fS, n)),
          (this.baseStyle = r),
          Fa.registerId(n)
      }
      return (
        (e.prototype.generateAndInjectStyles = function (t, n, r) {
          var i = this.componentId,
            s = []
          if (
            (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
            this.isStatic && !r.hash)
          )
            if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId))
              s.push(this.staticRulesId)
            else {
              var o = Hr(this.rules, t, n, r).join(''),
                a = Zc(_i(this.baseHash, o) >>> 0)
              if (!n.hasNameForId(i, a)) {
                var l = r(o, '.' + a, void 0, i)
                n.insertRules(i, a, l)
              }
              s.push(a), (this.staticRulesId = a)
            }
          else {
            for (
              var u = this.rules.length, d = _i(this.baseHash, r.hash), p = '', f = 0;
              f < u;
              f++
            ) {
              var S = this.rules[f]
              if (typeof S == 'string') p += S
              else if (S) {
                var k = Hr(S, t, n, r),
                  E = Array.isArray(k) ? k.join('') : k
                ;(d = _i(d, E + f)), (p += E)
              }
            }
            if (p) {
              var N = Zc(d >>> 0)
              if (!n.hasNameForId(i, N)) {
                var m = r(p, '.' + N, void 0, i)
                n.insertRules(i, N, m)
              }
              s.push(N)
            }
          }
          return s.join(' ')
        }),
        e
      )
    })(),
    pS = /^\s*\/\/.*$/gm,
    mS = [':', '[', '.', '#']
  function vS(e) {
    var t,
      n,
      r,
      i,
      s = e === void 0 ? pr : e,
      o = s.options,
      a = o === void 0 ? pr : o,
      l = s.plugins,
      u = l === void 0 ? ba : l,
      d = new Aw(a),
      p = [],
      f = (function (E) {
        function N(m) {
          if (m)
            try {
              E(m + '}')
            } catch {}
        }
        return function (m, h, v, w, _, L, I, x, W, j) {
          switch (m) {
            case 1:
              if (W === 0 && h.charCodeAt(0) === 64) return E(h + ';'), ''
              break
            case 2:
              if (x === 0) return h + '/*|*/'
              break
            case 3:
              switch (x) {
                case 102:
                case 112:
                  return E(v[0] + h), ''
                default:
                  return h + (j === 0 ? '/*|*/' : '')
              }
            case -2:
              h.split('/*|*/}').forEach(N)
          }
        }
      })(function (E) {
        p.push(E)
      }),
      S = function (E, N, m) {
        return (N === 0 && mS.indexOf(m[n.length]) !== -1) || m.match(i) ? E : '.' + t
      }
    function k(E, N, m, h) {
      h === void 0 && (h = '&')
      var v = E.replace(pS, ''),
        w = N && m ? m + ' ' + N + ' { ' + v + ' }' : v
      return (
        (t = h),
        (n = N),
        (r = new RegExp('\\' + n + '\\b', 'g')),
        (i = new RegExp('(\\' + n + '\\b){2,}')),
        d(m || !N ? '' : N, w)
      )
    }
    return (
      d.use(
        [].concat(u, [
          function (E, N, m) {
            E === 2 && m.length && m[0].lastIndexOf(n) > 0 && (m[0] = m[0].replace(r, S))
          },
          f,
          function (E) {
            if (E === -2) {
              var N = p
              return (p = []), N
            }
          },
        ])
      ),
      (k.hash = u.length
        ? u
            .reduce(function (E, N) {
              return N.name || uo(15), _i(E, N.name)
            }, 5381)
            .toString()
        : ''),
      k
    )
  }
  var ry = qi.createContext()
  ry.Consumer
  var iy = qi.createContext(),
    gS = (iy.Consumer, new Fa()),
    ed = vS()
  function sy() {
    return X.exports.useContext(ry) || gS
  }
  function oy() {
    return X.exports.useContext(iy) || ed
  }
  var yS = (function () {
      function e(t, n) {
        var r = this
        ;(this.inject = function (i, s) {
          s === void 0 && (s = ed)
          var o = r.name + s.hash
          i.hasNameForId(r.id, o) || i.insertRules(r.id, o, s(r.rules, o, '@keyframes'))
        }),
          (this.toString = function () {
            return uo(12, String(r.name))
          }),
          (this.name = t),
          (this.id = 'sc-keyframes-' + t),
          (this.rules = n)
      }
      return (
        (e.prototype.getName = function (t) {
          return t === void 0 && (t = ed), this.name + t.hash
        }),
        e
      )
    })(),
    _S = /([A-Z])/,
    wS = /([A-Z])/g,
    SS = /^ms-/,
    kS = function (e) {
      return '-' + e.toLowerCase()
    }
  function Np(e) {
    return _S.test(e) ? e.replace(wS, kS).replace(SS, '-ms-') : e
  }
  var Mp = function (e) {
    return e == null || e === !1 || e === ''
  }
  function Hr(e, t, n, r) {
    if (Array.isArray(e)) {
      for (var i, s = [], o = 0, a = e.length; o < a; o += 1)
        (i = Hr(e[o], t, n, r)) !== '' && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i))
      return s
    }
    if (Mp(e)) return ''
    if (Sf(e)) return '.' + e.styledComponentId
    if (qs(e)) {
      if (typeof (u = e) != 'function' || (u.prototype && u.prototype.isReactComponent) || !t)
        return e
      var l = e(t)
      return Hr(l, t, n, r)
    }
    var u
    return e instanceof yS
      ? n
        ? (e.inject(n, r), e.getName(r))
        : e
      : Xc(e)
      ? (function d(p, f) {
          var S,
            k,
            E = []
          for (var N in p)
            p.hasOwnProperty(N) &&
              !Mp(p[N]) &&
              ((Array.isArray(p[N]) && p[N].isCss) || qs(p[N])
                ? E.push(Np(N) + ':', p[N], ';')
                : Xc(p[N])
                ? E.push.apply(E, d(p[N], N))
                : E.push(
                    Np(N) +
                      ': ' +
                      ((S = N),
                      (k = p[N]) == null || typeof k == 'boolean' || k === ''
                        ? ''
                        : typeof k != 'number' || k === 0 || S in Lw
                        ? String(k).trim()
                        : k + 'px') +
                      ';'
                  ))
          return f ? [f + ' {'].concat(E, ['}']) : E
        })(e)
      : e.toString()
  }
  var Ap = function (e) {
    return Array.isArray(e) && (e.isCss = !0), e
  }
  function ay(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    return qs(e) || Xc(e)
      ? Ap(Hr(Op(ba, [e].concat(n))))
      : n.length === 0 && e.length === 1 && typeof e[0] == 'string'
      ? e
      : Ap(Hr(Op(e, n)))
  }
  var ly = function (e, t, n) {
      return n === void 0 && (n = pr), (e.theme !== n.theme && e.theme) || t || n.theme
    },
    ES = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    IS = /(^-|-$)/g
  function Du(e) {
    return e.replace(ES, '-').replace(IS, '')
  }
  var uy = function (e) {
    return Zc(ty(e) >>> 0)
  }
  function $o(e) {
    return typeof e == 'string' && !0
  }
  var td = function (e) {
      return typeof e == 'function' || (typeof e == 'object' && e !== null && !Array.isArray(e))
    },
    TS = function (e) {
      return e !== '__proto__' && e !== 'constructor' && e !== 'prototype'
    }
  function CS(e, t, n) {
    var r = e[n]
    td(t) && td(r) ? cy(r, t) : (e[n] = t)
  }
  function cy(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    for (var i = 0, s = n; i < s.length; i++) {
      var o = s[i]
      if (td(o)) for (var a in o) TS(a) && CS(e, o[a], a)
    }
    return e
  }
  var Ef = qi.createContext()
  Ef.Consumer
  var Nu = {}
  function dy(e, t, n) {
    var r = Sf(e),
      i = !$o(e),
      s = t.attrs,
      o = s === void 0 ? ba : s,
      a = t.componentId,
      l =
        a === void 0
          ? (function (h, v) {
              var w = typeof h != 'string' ? 'sc' : Du(h)
              Nu[w] = (Nu[w] || 0) + 1
              var _ = w + '-' + uy('5.3.5' + w + Nu[w])
              return v ? v + '-' + _ : _
            })(t.displayName, t.parentComponentId)
          : a,
      u = t.displayName,
      d =
        u === void 0
          ? (function (h) {
              return $o(h) ? 'styled.' + h : 'Styled(' + Rp(h) + ')'
            })(e)
          : u,
      p =
        t.displayName && t.componentId
          ? Du(t.displayName) + '-' + t.componentId
          : t.componentId || l,
      f = r && e.attrs ? Array.prototype.concat(e.attrs, o).filter(Boolean) : o,
      S = t.shouldForwardProp
    r &&
      e.shouldForwardProp &&
      (S = t.shouldForwardProp
        ? function (h, v, w) {
            return e.shouldForwardProp(h, v, w) && t.shouldForwardProp(h, v, w)
          }
        : e.shouldForwardProp)
    var k,
      E = new hS(n, p, r ? e.componentStyle : void 0),
      N = E.isStatic && o.length === 0,
      m = function (h, v) {
        return (function (w, _, L, I) {
          var x = w.attrs,
            W = w.componentStyle,
            j = w.defaultProps,
            re = w.foldedComponentIds,
            Z = w.shouldForwardProp,
            oe = w.styledComponentId,
            Se = w.target,
            $e = (function (K, y, te) {
              K === void 0 && (K = pr)
              var D = pn({}, y, { theme: K }),
                Ee = {}
              return (
                te.forEach(function (ue) {
                  var fe,
                    J,
                    Ye,
                    nt = ue
                  for (fe in (qs(nt) && (nt = nt(D)), nt))
                    D[fe] = Ee[fe] =
                      fe === 'className'
                        ? ((J = Ee[fe]), (Ye = nt[fe]), J && Ye ? J + ' ' + Ye : J || Ye)
                        : nt[fe]
                }),
                [D, Ee]
              )
            })(ly(_, X.exports.useContext(Ef), j) || pr, _, x),
            Qe = $e[0],
            We = $e[1],
            P = (function (K, y, te, D) {
              var Ee = sy(),
                ue = oy(),
                fe = y
                  ? K.generateAndInjectStyles(pr, Ee, ue)
                  : K.generateAndInjectStyles(te, Ee, ue)
              return fe
            })(W, I, Qe),
            H = L,
            G = We.$as || _.$as || We.as || _.as || Se,
            de = $o(G),
            M = We !== _ ? pn({}, _, {}, We) : _,
            U = {}
          for (var F in M)
            F[0] !== '$' &&
              F !== 'as' &&
              (F === 'forwardedAs'
                ? (U.as = M[F])
                : (Z ? Z(F, Ip, G) : !de || Ip(F)) && (U[F] = M[F]))
          return (
            _.style && We.style !== _.style && (U.style = pn({}, _.style, {}, We.style)),
            (U.className = Array.prototype
              .concat(re, oe, P !== oe ? P : null, _.className, We.className)
              .filter(Boolean)
              .join(' ')),
            (U.ref = H),
            X.exports.createElement(G, U)
          )
        })(k, h, v, N)
      }
    return (
      (m.displayName = d),
      ((k = qi.forwardRef(m)).attrs = f),
      (k.componentStyle = E),
      (k.displayName = d),
      (k.shouldForwardProp = S),
      (k.foldedComponentIds = r
        ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
        : ba),
      (k.styledComponentId = p),
      (k.target = r ? e.target : e),
      (k.withComponent = function (h) {
        var v = t.componentId,
          w = (function (L, I) {
            if (L == null) return {}
            var x,
              W,
              j = {},
              re = Object.keys(L)
            for (W = 0; W < re.length; W++) (x = re[W]), I.indexOf(x) >= 0 || (j[x] = L[x])
            return j
          })(t, ['componentId']),
          _ = v && v + '-' + ($o(h) ? h : Du(Rp(h)))
        return dy(h, pn({}, w, { attrs: f, componentId: _ }), n)
      }),
      Object.defineProperty(k, 'defaultProps', {
        get: function () {
          return this._foldedDefaultProps
        },
        set: function (h) {
          this._foldedDefaultProps = r ? cy({}, e.defaultProps, h) : h
        },
      }),
      (k.toString = function () {
        return '.' + k.styledComponentId
      }),
      i &&
        Qw(k, e, {
          attrs: !0,
          componentStyle: !0,
          displayName: !0,
          foldedComponentIds: !0,
          shouldForwardProp: !0,
          styledComponentId: !0,
          target: !0,
          withComponent: !0,
        }),
      k
    )
  }
  var nd = function (e) {
    return (function t(n, r, i) {
      if ((i === void 0 && (i = pr), !hf.exports.isValidElementType(r))) return uo(1, String(r))
      var s = function () {
        return n(r, i, ay.apply(void 0, arguments))
      }
      return (
        (s.withConfig = function (o) {
          return t(n, r, pn({}, i, {}, o))
        }),
        (s.attrs = function (o) {
          return t(n, r, pn({}, i, { attrs: Array.prototype.concat(i.attrs, o).filter(Boolean) }))
        }),
        s
      )
    })(dy, e)
  }
  ;[
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'textPath',
    'tspan',
  ].forEach(function (e) {
    nd[e] = nd(e)
  })
  var xS = (function () {
    function e(n, r) {
      ;(this.rules = n),
        (this.componentId = r),
        (this.isStatic = ny(n)),
        Fa.registerId(this.componentId + 1)
    }
    var t = e.prototype
    return (
      (t.createStyles = function (n, r, i, s) {
        var o = s(Hr(this.rules, r, i, s).join(''), ''),
          a = this.componentId + n
        i.insertRules(a, a, o)
      }),
      (t.removeStyles = function (n, r) {
        r.clearRules(this.componentId + n)
      }),
      (t.renderStyles = function (n, r, i, s) {
        n > 2 && Fa.registerId(this.componentId + n),
          this.removeStyles(n, i),
          this.createStyles(n, r, i, s)
      }),
      e
    )
  })()
  function OS(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
      n[r - 1] = arguments[r]
    var i = ay.apply(void 0, [e].concat(n)),
      s = 'sc-global-' + uy(JSON.stringify(i)),
      o = new xS(i, s)
    function a(u) {
      var d = sy(),
        p = oy(),
        f = X.exports.useContext(Ef),
        S = X.exports.useRef(d.allocateGSInstance(s)).current
      return (
        d.server && l(S, u, d, f, p),
        X.exports.useLayoutEffect(
          function () {
            if (!d.server)
              return (
                l(S, u, d, f, p),
                function () {
                  return o.removeStyles(S, d)
                }
              )
          },
          [S, u, d, f, p]
        ),
        null
      )
    }
    function l(u, d, p, f, S) {
      if (o.isStatic) o.renderStyles(u, Xw, p, S)
      else {
        var k = pn({}, d, { theme: ly(d, f, a.defaultProps) })
        o.renderStyles(u, k, p, S)
      }
    }
    return qi.memo(a)
  }
  const jn = nd,
    RS = OS`
  *, *::before, *::after {
    box-sizing: border-box;
    font-family: inherit;
    color: inherit;
  }

  body {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }

  ul {
    list-style: none;
  }
`
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const fy = function (e) {
      const t = []
      let n = 0
      for (let r = 0; r < e.length; r++) {
        let i = e.charCodeAt(r)
        i < 128
          ? (t[n++] = i)
          : i < 2048
          ? ((t[n++] = (i >> 6) | 192), (t[n++] = (i & 63) | 128))
          : (i & 64512) === 55296 && r + 1 < e.length && (e.charCodeAt(r + 1) & 64512) === 56320
          ? ((i = 65536 + ((i & 1023) << 10) + (e.charCodeAt(++r) & 1023)),
            (t[n++] = (i >> 18) | 240),
            (t[n++] = ((i >> 12) & 63) | 128),
            (t[n++] = ((i >> 6) & 63) | 128),
            (t[n++] = (i & 63) | 128))
          : ((t[n++] = (i >> 12) | 224),
            (t[n++] = ((i >> 6) & 63) | 128),
            (t[n++] = (i & 63) | 128))
      }
      return t
    },
    PS = function (e) {
      const t = []
      let n = 0,
        r = 0
      for (; n < e.length; ) {
        const i = e[n++]
        if (i < 128) t[r++] = String.fromCharCode(i)
        else if (i > 191 && i < 224) {
          const s = e[n++]
          t[r++] = String.fromCharCode(((i & 31) << 6) | (s & 63))
        } else if (i > 239 && i < 365) {
          const s = e[n++],
            o = e[n++],
            a = e[n++],
            l = (((i & 7) << 18) | ((s & 63) << 12) | ((o & 63) << 6) | (a & 63)) - 65536
          ;(t[r++] = String.fromCharCode(55296 + (l >> 10))),
            (t[r++] = String.fromCharCode(56320 + (l & 1023)))
        } else {
          const s = e[n++],
            o = e[n++]
          t[r++] = String.fromCharCode(((i & 15) << 12) | ((s & 63) << 6) | (o & 63))
        }
      }
      return t.join('')
    },
    hy = {
      byteToCharMap_: null,
      charToByteMap_: null,
      byteToCharMapWebSafe_: null,
      charToByteMapWebSafe_: null,
      ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/='
      },
      get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.'
      },
      HAS_NATIVE_SUPPORT: typeof atob == 'function',
      encodeByteArray(e, t) {
        if (!Array.isArray(e)) throw Error('encodeByteArray takes an array as a parameter')
        this.init_()
        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
          r = []
        for (let i = 0; i < e.length; i += 3) {
          const s = e[i],
            o = i + 1 < e.length,
            a = o ? e[i + 1] : 0,
            l = i + 2 < e.length,
            u = l ? e[i + 2] : 0,
            d = s >> 2,
            p = ((s & 3) << 4) | (a >> 4)
          let f = ((a & 15) << 2) | (u >> 6),
            S = u & 63
          l || ((S = 64), o || (f = 64)), r.push(n[d], n[p], n[f], n[S])
        }
        return r.join('')
      },
      encodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(fy(e), t)
      },
      decodeString(e, t) {
        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : PS(this.decodeStringToByteArray(e, t))
      },
      decodeStringToByteArray(e, t) {
        this.init_()
        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
          r = []
        for (let i = 0; i < e.length; ) {
          const s = n[e.charAt(i++)],
            a = i < e.length ? n[e.charAt(i)] : 0
          ++i
          const u = i < e.length ? n[e.charAt(i)] : 64
          ++i
          const p = i < e.length ? n[e.charAt(i)] : 64
          if ((++i, s == null || a == null || u == null || p == null)) throw Error()
          const f = (s << 2) | (a >> 4)
          if ((r.push(f), u !== 64)) {
            const S = ((a << 4) & 240) | (u >> 2)
            if ((r.push(S), p !== 64)) {
              const k = ((u << 6) & 192) | p
              r.push(k)
            }
          }
        }
        return r
      },
      init_() {
        if (!this.byteToCharMap_) {
          ;(this.byteToCharMap_ = {}),
            (this.charToByteMap_ = {}),
            (this.byteToCharMapWebSafe_ = {}),
            (this.charToByteMapWebSafe_ = {})
          for (let e = 0; e < this.ENCODED_VALS.length; e++)
            (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
              (this.charToByteMap_[this.byteToCharMap_[e]] = e),
              (this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e)),
              (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e),
              e >= this.ENCODED_VALS_BASE.length &&
                ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e),
                (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e))
        }
      },
    },
    DS = function (e) {
      const t = fy(e)
      return hy.encodeByteArray(t, !0)
    },
    py = function (e) {
      return DS(e).replace(/\./g, '')
    },
    NS = function (e) {
      try {
        return hy.decodeString(e, !0)
      } catch (t) {
        console.error('base64Decode failed: ', t)
      }
      return null
    }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class MS {
    constructor() {
      ;(this.reject = () => {}),
        (this.resolve = () => {}),
        (this.promise = new Promise((t, n) => {
          ;(this.resolve = t), (this.reject = n)
        }))
    }
    wrapCallback(t) {
      return (n, r) => {
        n ? this.reject(n) : this.resolve(r),
          typeof t == 'function' && (this.promise.catch(() => {}), t.length === 1 ? t(n) : t(n, r))
      }
    }
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ft() {
    return typeof navigator < 'u' && typeof navigator.userAgent == 'string'
      ? navigator.userAgent
      : ''
  }
  function AS() {
    return (
      typeof window < 'u' &&
      !!(window.cordova || window.phonegap || window.PhoneGap) &&
      /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())
    )
  }
  function LS() {
    const e =
      typeof chrome == 'object'
        ? chrome.runtime
        : typeof browser == 'object'
        ? browser.runtime
        : void 0
    return typeof e == 'object' && e.id !== void 0
  }
  function bS() {
    return typeof navigator == 'object' && navigator.product === 'ReactNative'
  }
  function US() {
    const e = ft()
    return e.indexOf('MSIE ') >= 0 || e.indexOf('Trident/') >= 0
  }
  function FS() {
    return typeof indexedDB == 'object'
  }
  function $S() {
    return new Promise((e, t) => {
      try {
        let n = !0
        const r = 'validate-browser-context-for-indexeddb-analytics-module',
          i = self.indexedDB.open(r)
        ;(i.onsuccess = () => {
          i.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
        }),
          (i.onupgradeneeded = () => {
            n = !1
          }),
          (i.onerror = () => {
            var s
            t(((s = i.error) === null || s === void 0 ? void 0 : s.message) || '')
          })
      } catch (n) {
        t(n)
      }
    })
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const zS = 'FirebaseError'
  class Er extends Error {
    constructor(t, n, r) {
      super(n),
        (this.code = t),
        (this.customData = r),
        (this.name = zS),
        Object.setPrototypeOf(this, Er.prototype),
        Error.captureStackTrace && Error.captureStackTrace(this, co.prototype.create)
    }
  }
  class co {
    constructor(t, n, r) {
      ;(this.service = t), (this.serviceName = n), (this.errors = r)
    }
    create(t, ...n) {
      const r = n[0] || {},
        i = `${this.service}/${t}`,
        s = this.errors[t],
        o = s ? jS(s, r) : 'Error',
        a = `${this.serviceName}: ${o} (${i}).`
      return new Er(i, a, r)
    }
  }
  function jS(e, t) {
    return e.replace(WS, (n, r) => {
      const i = t[r]
      return i != null ? String(i) : `<${r}?>`
    })
  }
  const WS = /\{\$([^}]+)}/g
  function BS(e) {
    for (const t in e) if (Object.prototype.hasOwnProperty.call(e, t)) return !1
    return !0
  }
  function $a(e, t) {
    if (e === t) return !0
    const n = Object.keys(e),
      r = Object.keys(t)
    for (const i of n) {
      if (!r.includes(i)) return !1
      const s = e[i],
        o = t[i]
      if (Lp(s) && Lp(o)) {
        if (!$a(s, o)) return !1
      } else if (s !== o) return !1
    }
    for (const i of r) if (!n.includes(i)) return !1
    return !0
  }
  function Lp(e) {
    return e !== null && typeof e == 'object'
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function fo(e) {
    const t = []
    for (const [n, r] of Object.entries(e))
      Array.isArray(r)
        ? r.forEach((i) => {
            t.push(encodeURIComponent(n) + '=' + encodeURIComponent(i))
          })
        : t.push(encodeURIComponent(n) + '=' + encodeURIComponent(r))
    return t.length ? '&' + t.join('&') : ''
  }
  function gs(e) {
    const t = {}
    return (
      e
        .replace(/^\?/, '')
        .split('&')
        .forEach((r) => {
          if (r) {
            const [i, s] = r.split('=')
            t[decodeURIComponent(i)] = decodeURIComponent(s)
          }
        }),
      t
    )
  }
  function ys(e) {
    const t = e.indexOf('?')
    if (!t) return ''
    const n = e.indexOf('#', t)
    return e.substring(t, n > 0 ? n : void 0)
  }
  function YS(e, t) {
    const n = new HS(e, t)
    return n.subscribe.bind(n)
  }
  class HS {
    constructor(t, n) {
      ;(this.observers = []),
        (this.unsubscribes = []),
        (this.observerCount = 0),
        (this.task = Promise.resolve()),
        (this.finalized = !1),
        (this.onNoObservers = n),
        this.task
          .then(() => {
            t(this)
          })
          .catch((r) => {
            this.error(r)
          })
    }
    next(t) {
      this.forEachObserver((n) => {
        n.next(t)
      })
    }
    error(t) {
      this.forEachObserver((n) => {
        n.error(t)
      }),
        this.close(t)
    }
    complete() {
      this.forEachObserver((t) => {
        t.complete()
      }),
        this.close()
    }
    subscribe(t, n, r) {
      let i
      if (t === void 0 && n === void 0 && r === void 0) throw new Error('Missing Observer.')
      VS(t, ['next', 'error', 'complete']) ? (i = t) : (i = { next: t, error: n, complete: r }),
        i.next === void 0 && (i.next = Mu),
        i.error === void 0 && (i.error = Mu),
        i.complete === void 0 && (i.complete = Mu)
      const s = this.unsubscribeOne.bind(this, this.observers.length)
      return (
        this.finalized &&
          this.task.then(() => {
            try {
              this.finalError ? i.error(this.finalError) : i.complete()
            } catch {}
          }),
        this.observers.push(i),
        s
      )
    }
    unsubscribeOne(t) {
      this.observers === void 0 ||
        this.observers[t] === void 0 ||
        (delete this.observers[t],
        (this.observerCount -= 1),
        this.observerCount === 0 && this.onNoObservers !== void 0 && this.onNoObservers(this))
    }
    forEachObserver(t) {
      if (!this.finalized) for (let n = 0; n < this.observers.length; n++) this.sendOne(n, t)
    }
    sendOne(t, n) {
      this.task.then(() => {
        if (this.observers !== void 0 && this.observers[t] !== void 0)
          try {
            n(this.observers[t])
          } catch (r) {
            typeof console < 'u' && console.error && console.error(r)
          }
      })
    }
    close(t) {
      this.finalized ||
        ((this.finalized = !0),
        t !== void 0 && (this.finalError = t),
        this.task.then(() => {
          ;(this.observers = void 0), (this.onNoObservers = void 0)
        }))
    }
  }
  function VS(e, t) {
    if (typeof e != 'object' || e === null) return !1
    for (const n of t) if (n in e && typeof e[n] == 'function') return !0
    return !1
  }
  function Mu() {}
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Jr(e) {
    return e && e._delegate ? e._delegate : e
  }
  class Bi {
    constructor(t, n, r) {
      ;(this.name = t),
        (this.instanceFactory = n),
        (this.type = r),
        (this.multipleInstances = !1),
        (this.serviceProps = {}),
        (this.instantiationMode = 'LAZY'),
        (this.onInstanceCreated = null)
    }
    setInstantiationMode(t) {
      return (this.instantiationMode = t), this
    }
    setMultipleInstances(t) {
      return (this.multipleInstances = t), this
    }
    setServiceProps(t) {
      return (this.serviceProps = t), this
    }
    setInstanceCreatedCallback(t) {
      return (this.onInstanceCreated = t), this
    }
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Pr = '[DEFAULT]'
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class GS {
    constructor(t, n) {
      ;(this.name = t),
        (this.container = n),
        (this.component = null),
        (this.instances = new Map()),
        (this.instancesDeferred = new Map()),
        (this.instancesOptions = new Map()),
        (this.onInitCallbacks = new Map())
    }
    get(t) {
      const n = this.normalizeInstanceIdentifier(t)
      if (!this.instancesDeferred.has(n)) {
        const r = new MS()
        if (
          (this.instancesDeferred.set(n, r), this.isInitialized(n) || this.shouldAutoInitialize())
        )
          try {
            const i = this.getOrInitializeService({ instanceIdentifier: n })
            i && r.resolve(i)
          } catch {}
      }
      return this.instancesDeferred.get(n).promise
    }
    getImmediate(t) {
      var n
      const r = this.normalizeInstanceIdentifier(t == null ? void 0 : t.identifier),
        i = (n = t == null ? void 0 : t.optional) !== null && n !== void 0 ? n : !1
      if (this.isInitialized(r) || this.shouldAutoInitialize())
        try {
          return this.getOrInitializeService({ instanceIdentifier: r })
        } catch (s) {
          if (i) return null
          throw s
        }
      else {
        if (i) return null
        throw Error(`Service ${this.name} is not available`)
      }
    }
    getComponent() {
      return this.component
    }
    setComponent(t) {
      if (t.name !== this.name)
        throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`)
      if (this.component) throw Error(`Component for ${this.name} has already been provided`)
      if (((this.component = t), !!this.shouldAutoInitialize())) {
        if (qS(t))
          try {
            this.getOrInitializeService({ instanceIdentifier: Pr })
          } catch {}
        for (const [n, r] of this.instancesDeferred.entries()) {
          const i = this.normalizeInstanceIdentifier(n)
          try {
            const s = this.getOrInitializeService({ instanceIdentifier: i })
            r.resolve(s)
          } catch {}
        }
      }
    }
    clearInstance(t = Pr) {
      this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t)
    }
    async delete() {
      const t = Array.from(this.instances.values())
      await Promise.all([
        ...t.filter((n) => 'INTERNAL' in n).map((n) => n.INTERNAL.delete()),
        ...t.filter((n) => '_delete' in n).map((n) => n._delete()),
      ])
    }
    isComponentSet() {
      return this.component != null
    }
    isInitialized(t = Pr) {
      return this.instances.has(t)
    }
    getOptions(t = Pr) {
      return this.instancesOptions.get(t) || {}
    }
    initialize(t = {}) {
      const { options: n = {} } = t,
        r = this.normalizeInstanceIdentifier(t.instanceIdentifier)
      if (this.isInitialized(r)) throw Error(`${this.name}(${r}) has already been initialized`)
      if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`)
      const i = this.getOrInitializeService({ instanceIdentifier: r, options: n })
      for (const [s, o] of this.instancesDeferred.entries()) {
        const a = this.normalizeInstanceIdentifier(s)
        r === a && o.resolve(i)
      }
      return i
    }
    onInit(t, n) {
      var r
      const i = this.normalizeInstanceIdentifier(n),
        s = (r = this.onInitCallbacks.get(i)) !== null && r !== void 0 ? r : new Set()
      s.add(t), this.onInitCallbacks.set(i, s)
      const o = this.instances.get(i)
      return (
        o && t(o, i),
        () => {
          s.delete(t)
        }
      )
    }
    invokeOnInitCallbacks(t, n) {
      const r = this.onInitCallbacks.get(n)
      if (!!r)
        for (const i of r)
          try {
            i(t, n)
          } catch {}
    }
    getOrInitializeService({ instanceIdentifier: t, options: n = {} }) {
      let r = this.instances.get(t)
      if (
        !r &&
        this.component &&
        ((r = this.component.instanceFactory(this.container, {
          instanceIdentifier: KS(t),
          options: n,
        })),
        this.instances.set(t, r),
        this.instancesOptions.set(t, n),
        this.invokeOnInitCallbacks(r, t),
        this.component.onInstanceCreated)
      )
        try {
          this.component.onInstanceCreated(this.container, t, r)
        } catch {}
      return r || null
    }
    normalizeInstanceIdentifier(t = Pr) {
      return this.component ? (this.component.multipleInstances ? t : Pr) : t
    }
    shouldAutoInitialize() {
      return !!this.component && this.component.instantiationMode !== 'EXPLICIT'
    }
  }
  function KS(e) {
    return e === Pr ? void 0 : e
  }
  function qS(e) {
    return e.instantiationMode === 'EAGER'
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class QS {
    constructor(t) {
      ;(this.name = t), (this.providers = new Map())
    }
    addComponent(t) {
      const n = this.getProvider(t.name)
      if (n.isComponentSet())
        throw new Error(`Component ${t.name} has already been registered with ${this.name}`)
      n.setComponent(t)
    }
    addOrOverwriteComponent(t) {
      this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
        this.addComponent(t)
    }
    getProvider(t) {
      if (this.providers.has(t)) return this.providers.get(t)
      const n = new GS(t, this)
      return this.providers.set(t, n), n
    }
    getProviders() {
      return Array.from(this.providers.values())
    }
  }
  /**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var Ie
  ;(function (e) {
    ;(e[(e.DEBUG = 0)] = 'DEBUG'),
      (e[(e.VERBOSE = 1)] = 'VERBOSE'),
      (e[(e.INFO = 2)] = 'INFO'),
      (e[(e.WARN = 3)] = 'WARN'),
      (e[(e.ERROR = 4)] = 'ERROR'),
      (e[(e.SILENT = 5)] = 'SILENT')
  })(Ie || (Ie = {}))
  const JS = {
      debug: Ie.DEBUG,
      verbose: Ie.VERBOSE,
      info: Ie.INFO,
      warn: Ie.WARN,
      error: Ie.ERROR,
      silent: Ie.SILENT,
    },
    XS = Ie.INFO,
    ZS = {
      [Ie.DEBUG]: 'log',
      [Ie.VERBOSE]: 'log',
      [Ie.INFO]: 'info',
      [Ie.WARN]: 'warn',
      [Ie.ERROR]: 'error',
    },
    ek = (e, t, ...n) => {
      if (t < e.logLevel) return
      const r = new Date().toISOString(),
        i = ZS[t]
      if (i) console[i](`[${r}]  ${e.name}:`, ...n)
      else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)
    }
  class my {
    constructor(t) {
      ;(this.name = t),
        (this._logLevel = XS),
        (this._logHandler = ek),
        (this._userLogHandler = null)
    }
    get logLevel() {
      return this._logLevel
    }
    set logLevel(t) {
      if (!(t in Ie)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``)
      this._logLevel = t
    }
    setLogLevel(t) {
      this._logLevel = typeof t == 'string' ? JS[t] : t
    }
    get logHandler() {
      return this._logHandler
    }
    set logHandler(t) {
      if (typeof t != 'function')
        throw new TypeError('Value assigned to `logHandler` must be a function')
      this._logHandler = t
    }
    get userLogHandler() {
      return this._userLogHandler
    }
    set userLogHandler(t) {
      this._userLogHandler = t
    }
    debug(...t) {
      this._userLogHandler && this._userLogHandler(this, Ie.DEBUG, ...t),
        this._logHandler(this, Ie.DEBUG, ...t)
    }
    log(...t) {
      this._userLogHandler && this._userLogHandler(this, Ie.VERBOSE, ...t),
        this._logHandler(this, Ie.VERBOSE, ...t)
    }
    info(...t) {
      this._userLogHandler && this._userLogHandler(this, Ie.INFO, ...t),
        this._logHandler(this, Ie.INFO, ...t)
    }
    warn(...t) {
      this._userLogHandler && this._userLogHandler(this, Ie.WARN, ...t),
        this._logHandler(this, Ie.WARN, ...t)
    }
    error(...t) {
      this._userLogHandler && this._userLogHandler(this, Ie.ERROR, ...t),
        this._logHandler(this, Ie.ERROR, ...t)
    }
  }
  const tk = (e, t) => t.some((n) => e instanceof n)
  let bp, Up
  function nk() {
    return bp || (bp = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  }
  function rk() {
    return (
      Up ||
      (Up = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey,
      ])
    )
  }
  const vy = new WeakMap(),
    rd = new WeakMap(),
    gy = new WeakMap(),
    Au = new WeakMap(),
    If = new WeakMap()
  function ik(e) {
    const t = new Promise((n, r) => {
      const i = () => {
          e.removeEventListener('success', s), e.removeEventListener('error', o)
        },
        s = () => {
          n(mr(e.result)), i()
        },
        o = () => {
          r(e.error), i()
        }
      e.addEventListener('success', s), e.addEventListener('error', o)
    })
    return (
      t
        .then((n) => {
          n instanceof IDBCursor && vy.set(n, e)
        })
        .catch(() => {}),
      If.set(t, e),
      t
    )
  }
  function sk(e) {
    if (rd.has(e)) return
    const t = new Promise((n, r) => {
      const i = () => {
          e.removeEventListener('complete', s),
            e.removeEventListener('error', o),
            e.removeEventListener('abort', o)
        },
        s = () => {
          n(), i()
        },
        o = () => {
          r(e.error || new DOMException('AbortError', 'AbortError')), i()
        }
      e.addEventListener('complete', s),
        e.addEventListener('error', o),
        e.addEventListener('abort', o)
    })
    rd.set(e, t)
  }
  let id = {
    get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if (t === 'done') return rd.get(e)
        if (t === 'objectStoreNames') return e.objectStoreNames || gy.get(e)
        if (t === 'store')
          return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
      }
      return mr(e[t])
    },
    set(e, t, n) {
      return (e[t] = n), !0
    },
    has(e, t) {
      return e instanceof IDBTransaction && (t === 'done' || t === 'store') ? !0 : t in e
    },
  }
  function ok(e) {
    id = e(id)
  }
  function ak(e) {
    return e === IDBDatabase.prototype.transaction &&
      !('objectStoreNames' in IDBTransaction.prototype)
      ? function (t, ...n) {
          const r = e.call(Lu(this), t, ...n)
          return gy.set(r, t.sort ? t.sort() : [t]), mr(r)
        }
      : rk().includes(e)
      ? function (...t) {
          return e.apply(Lu(this), t), mr(vy.get(this))
        }
      : function (...t) {
          return mr(e.apply(Lu(this), t))
        }
  }
  function lk(e) {
    return typeof e == 'function'
      ? ak(e)
      : (e instanceof IDBTransaction && sk(e), tk(e, nk()) ? new Proxy(e, id) : e)
  }
  function mr(e) {
    if (e instanceof IDBRequest) return ik(e)
    if (Au.has(e)) return Au.get(e)
    const t = lk(e)
    return t !== e && (Au.set(e, t), If.set(t, e)), t
  }
  const Lu = (e) => If.get(e)
  function uk(e, t, { blocked: n, upgrade: r, blocking: i, terminated: s } = {}) {
    const o = indexedDB.open(e, t),
      a = mr(o)
    return (
      r &&
        o.addEventListener('upgradeneeded', (l) => {
          r(mr(o.result), l.oldVersion, l.newVersion, mr(o.transaction))
        }),
      n && o.addEventListener('blocked', () => n()),
      a
        .then((l) => {
          s && l.addEventListener('close', () => s()),
            i && l.addEventListener('versionchange', () => i())
        })
        .catch(() => {}),
      a
    )
  }
  const ck = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
    dk = ['put', 'add', 'delete', 'clear'],
    bu = new Map()
  function Fp(e, t) {
    if (!(e instanceof IDBDatabase && !(t in e) && typeof t == 'string')) return
    if (bu.get(t)) return bu.get(t)
    const n = t.replace(/FromIndex$/, ''),
      r = t !== n,
      i = dk.includes(n)
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !(i || ck.includes(n))) return
    const s = async function (o, ...a) {
      const l = this.transaction(o, i ? 'readwrite' : 'readonly')
      let u = l.store
      return r && (u = u.index(a.shift())), (await Promise.all([u[n](...a), i && l.done]))[0]
    }
    return bu.set(t, s), s
  }
  ok((e) => ({
    ...e,
    get: (t, n, r) => Fp(t, n) || e.get(t, n, r),
    has: (t, n) => !!Fp(t, n) || e.has(t, n),
  }))
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class fk {
    constructor(t) {
      this.container = t
    }
    getPlatformInfoString() {
      return this.container
        .getProviders()
        .map((n) => {
          if (hk(n)) {
            const r = n.getImmediate()
            return `${r.library}/${r.version}`
          } else return null
        })
        .filter((n) => n)
        .join(' ')
    }
  }
  function hk(e) {
    const t = e.getComponent()
    return (t == null ? void 0 : t.type) === 'VERSION'
  }
  const sd = '@firebase/app',
    $p = '0.7.31'
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Vr = new my('@firebase/app'),
    pk = '@firebase/app-compat',
    mk = '@firebase/analytics-compat',
    vk = '@firebase/analytics',
    gk = '@firebase/app-check-compat',
    yk = '@firebase/app-check',
    _k = '@firebase/auth',
    wk = '@firebase/auth-compat',
    Sk = '@firebase/database',
    kk = '@firebase/database-compat',
    Ek = '@firebase/functions',
    Ik = '@firebase/functions-compat',
    Tk = '@firebase/installations',
    Ck = '@firebase/installations-compat',
    xk = '@firebase/messaging',
    Ok = '@firebase/messaging-compat',
    Rk = '@firebase/performance',
    Pk = '@firebase/performance-compat',
    Dk = '@firebase/remote-config',
    Nk = '@firebase/remote-config-compat',
    Mk = '@firebase/storage',
    Ak = '@firebase/storage-compat',
    Lk = '@firebase/firestore',
    bk = '@firebase/firestore-compat',
    Uk = 'firebase',
    Fk = '9.9.3'
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const yy = '[DEFAULT]',
    $k = {
      [sd]: 'fire-core',
      [pk]: 'fire-core-compat',
      [vk]: 'fire-analytics',
      [mk]: 'fire-analytics-compat',
      [yk]: 'fire-app-check',
      [gk]: 'fire-app-check-compat',
      [_k]: 'fire-auth',
      [wk]: 'fire-auth-compat',
      [Sk]: 'fire-rtdb',
      [kk]: 'fire-rtdb-compat',
      [Ek]: 'fire-fn',
      [Ik]: 'fire-fn-compat',
      [Tk]: 'fire-iid',
      [Ck]: 'fire-iid-compat',
      [xk]: 'fire-fcm',
      [Ok]: 'fire-fcm-compat',
      [Rk]: 'fire-perf',
      [Pk]: 'fire-perf-compat',
      [Dk]: 'fire-rc',
      [Nk]: 'fire-rc-compat',
      [Mk]: 'fire-gcs',
      [Ak]: 'fire-gcs-compat',
      [Lk]: 'fire-fst',
      [bk]: 'fire-fst-compat',
      'fire-js': 'fire-js',
      [Uk]: 'fire-js-all',
    }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const za = new Map(),
    od = new Map()
  function zk(e, t) {
    try {
      e.container.addComponent(t)
    } catch (n) {
      Vr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
    }
  }
  function Qs(e) {
    const t = e.name
    if (od.has(t)) return Vr.debug(`There were multiple attempts to register component ${t}.`), !1
    od.set(t, e)
    for (const n of za.values()) zk(n, e)
    return !0
  }
  function _y(e, t) {
    const n = e.container.getProvider('heartbeat').getImmediate({ optional: !0 })
    return n && n.triggerHeartbeat(), e.container.getProvider(t)
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const jk = {
      ['no-app']:
        "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
      ['bad-app-name']: "Illegal App name: '{$appName}",
      ['duplicate-app']:
        "Firebase App named '{$appName}' already exists with different options or config",
      ['app-deleted']: "Firebase App named '{$appName}' already deleted",
      ['invalid-app-argument']:
        'firebase.{$appName}() takes either no argument or a Firebase App instance.',
      ['invalid-log-argument']: 'First argument to `onLog` must be null or a function.',
      ['idb-open']: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
      ['idb-get']:
        'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
      ['idb-set']:
        'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
      ['idb-delete']:
        'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    },
    Gr = new co('app', 'Firebase', jk)
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Wk {
    constructor(t, n, r) {
      ;(this._isDeleted = !1),
        (this._options = Object.assign({}, t)),
        (this._config = Object.assign({}, n)),
        (this._name = n.name),
        (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
        (this._container = r),
        this.container.addComponent(new Bi('app', () => this, 'PUBLIC'))
    }
    get automaticDataCollectionEnabled() {
      return this.checkDestroyed(), this._automaticDataCollectionEnabled
    }
    set automaticDataCollectionEnabled(t) {
      this.checkDestroyed(), (this._automaticDataCollectionEnabled = t)
    }
    get name() {
      return this.checkDestroyed(), this._name
    }
    get options() {
      return this.checkDestroyed(), this._options
    }
    get config() {
      return this.checkDestroyed(), this._config
    }
    get container() {
      return this._container
    }
    get isDeleted() {
      return this._isDeleted
    }
    set isDeleted(t) {
      this._isDeleted = t
    }
    checkDestroyed() {
      if (this.isDeleted) throw Gr.create('app-deleted', { appName: this._name })
    }
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Al = Fk
  function Bk(e, t = {}) {
    typeof t != 'object' && (t = { name: t })
    const n = Object.assign({ name: yy, automaticDataCollectionEnabled: !1 }, t),
      r = n.name
    if (typeof r != 'string' || !r) throw Gr.create('bad-app-name', { appName: String(r) })
    const i = za.get(r)
    if (i) {
      if ($a(e, i.options) && $a(n, i.config)) return i
      throw Gr.create('duplicate-app', { appName: r })
    }
    const s = new QS(r)
    for (const a of od.values()) s.addComponent(a)
    const o = new Wk(e, n, s)
    return za.set(r, o), o
  }
  function Yk(e = yy) {
    const t = za.get(e)
    if (!t) throw Gr.create('no-app', { appName: e })
    return t
  }
  function Oi(e, t, n) {
    var r
    let i = (r = $k[e]) !== null && r !== void 0 ? r : e
    n && (i += `-${n}`)
    const s = i.match(/\s|\//),
      o = t.match(/\s|\//)
    if (s || o) {
      const a = [`Unable to register library "${i}" with version "${t}":`]
      s && a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),
        s && o && a.push('and'),
        o && a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),
        Vr.warn(a.join(' '))
      return
    }
    Qs(new Bi(`${i}-version`, () => ({ library: i, version: t }), 'VERSION'))
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Hk = 'firebase-heartbeat-database',
    Vk = 1,
    Js = 'firebase-heartbeat-store'
  let Uu = null
  function wy() {
    return (
      Uu ||
        (Uu = uk(Hk, Vk, {
          upgrade: (e, t) => {
            switch (t) {
              case 0:
                e.createObjectStore(Js)
            }
          },
        }).catch((e) => {
          throw Gr.create('idb-open', { originalErrorMessage: e.message })
        })),
      Uu
    )
  }
  async function Gk(e) {
    var t
    try {
      return (await wy()).transaction(Js).objectStore(Js).get(Sy(e))
    } catch (n) {
      if (n instanceof Er) Vr.warn(n.message)
      else {
        const r = Gr.create('idb-get', {
          originalErrorMessage: (t = n) === null || t === void 0 ? void 0 : t.message,
        })
        Vr.warn(r.message)
      }
    }
  }
  async function zp(e, t) {
    var n
    try {
      const i = (await wy()).transaction(Js, 'readwrite')
      return await i.objectStore(Js).put(t, Sy(e)), i.done
    } catch (r) {
      if (r instanceof Er) Vr.warn(r.message)
      else {
        const i = Gr.create('idb-set', {
          originalErrorMessage: (n = r) === null || n === void 0 ? void 0 : n.message,
        })
        Vr.warn(i.message)
      }
    }
  }
  function Sy(e) {
    return `${e.name}!${e.options.appId}`
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Kk = 1024,
    qk = 30 * 24 * 60 * 60 * 1e3
  class Qk {
    constructor(t) {
      ;(this.container = t), (this._heartbeatsCache = null)
      const n = this.container.getProvider('app').getImmediate()
      ;(this._storage = new Xk(n)),
        (this._heartbeatsCachePromise = this._storage
          .read()
          .then((r) => ((this._heartbeatsCache = r), r)))
    }
    async triggerHeartbeat() {
      const n = this.container
          .getProvider('platform-logger')
          .getImmediate()
          .getPlatformInfoString(),
        r = jp()
      if (
        (this._heartbeatsCache === null &&
          (this._heartbeatsCache = await this._heartbeatsCachePromise),
        !(
          this._heartbeatsCache.lastSentHeartbeatDate === r ||
          this._heartbeatsCache.heartbeats.some((i) => i.date === r)
        ))
      )
        return (
          this._heartbeatsCache.heartbeats.push({ date: r, agent: n }),
          (this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((i) => {
            const s = new Date(i.date).valueOf()
            return Date.now() - s <= qk
          })),
          this._storage.overwrite(this._heartbeatsCache)
        )
    }
    async getHeartbeatsHeader() {
      if (
        (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
        this._heartbeatsCache === null || this._heartbeatsCache.heartbeats.length === 0)
      )
        return ''
      const t = jp(),
        { heartbeatsToSend: n, unsentEntries: r } = Jk(this._heartbeatsCache.heartbeats),
        i = py(JSON.stringify({ version: 2, heartbeats: n }))
      return (
        (this._heartbeatsCache.lastSentHeartbeatDate = t),
        r.length > 0
          ? ((this._heartbeatsCache.heartbeats = r),
            await this._storage.overwrite(this._heartbeatsCache))
          : ((this._heartbeatsCache.heartbeats = []),
            this._storage.overwrite(this._heartbeatsCache)),
        i
      )
    }
  }
  function jp() {
    return new Date().toISOString().substring(0, 10)
  }
  function Jk(e, t = Kk) {
    const n = []
    let r = e.slice()
    for (const i of e) {
      const s = n.find((o) => o.agent === i.agent)
      if (s) {
        if ((s.dates.push(i.date), Wp(n) > t)) {
          s.dates.pop()
          break
        }
      } else if ((n.push({ agent: i.agent, dates: [i.date] }), Wp(n) > t)) {
        n.pop()
        break
      }
      r = r.slice(1)
    }
    return { heartbeatsToSend: n, unsentEntries: r }
  }
  class Xk {
    constructor(t) {
      ;(this.app = t), (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck())
    }
    async runIndexedDBEnvironmentCheck() {
      return FS()
        ? $S()
            .then(() => !0)
            .catch(() => !1)
        : !1
    }
    async read() {
      return (await this._canUseIndexedDBPromise)
        ? (await Gk(this.app)) || { heartbeats: [] }
        : { heartbeats: [] }
    }
    async overwrite(t) {
      var n
      if (await this._canUseIndexedDBPromise) {
        const i = await this.read()
        return zp(this.app, {
          lastSentHeartbeatDate:
            (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
          heartbeats: t.heartbeats,
        })
      } else return
    }
    async add(t) {
      var n
      if (await this._canUseIndexedDBPromise) {
        const i = await this.read()
        return zp(this.app, {
          lastSentHeartbeatDate:
            (n = t.lastSentHeartbeatDate) !== null && n !== void 0 ? n : i.lastSentHeartbeatDate,
          heartbeats: [...i.heartbeats, ...t.heartbeats],
        })
      } else return
    }
  }
  function Wp(e) {
    return py(JSON.stringify({ version: 2, heartbeats: e })).length
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Zk(e) {
    Qs(new Bi('platform-logger', (t) => new fk(t), 'PRIVATE')),
      Qs(new Bi('heartbeat', (t) => new Qk(t), 'PRIVATE')),
      Oi(sd, $p, e),
      Oi(sd, $p, 'esm2017'),
      Oi('fire-js', '')
  }
  Zk('')
  var eE = 'firebase',
    tE = '9.9.3'
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ Oi(eE, tE, 'app')
  function Tf(e, t) {
    var n = {}
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
    if (e != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]])
    return n
  }
  function ky() {
    return {
      ['dependent-sdk-initialized-before-auth']:
        'Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.',
    }
  }
  const nE = ky,
    Ey = new co('auth', 'Firebase', ky())
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Bp = new my('@firebase/auth')
  function na(e, ...t) {
    Bp.logLevel <= Ie.ERROR && Bp.error(`Auth (${Al}): ${e}`, ...t)
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function on(e, ...t) {
    throw Cf(e, ...t)
  }
  function gn(e, ...t) {
    return Cf(e, ...t)
  }
  function rE(e, t, n) {
    const r = Object.assign(Object.assign({}, nE()), { [t]: n })
    return new co('auth', 'Firebase', r).create(t, { appName: e.name })
  }
  function Cf(e, ...t) {
    if (typeof e != 'string') {
      const n = t[0],
        r = [...t.slice(1)]
      return r[0] && (r[0].appName = e.name), e._errorFactory.create(n, ...r)
    }
    return Ey.create(e, ...t)
  }
  function Q(e, t, ...n) {
    if (!e) throw Cf(t, ...n)
  }
  function On(e) {
    const t = 'INTERNAL ASSERTION FAILED: ' + e
    throw (na(t), new Error(t))
  }
  function Fn(e, t) {
    e || On(t)
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Yp = new Map()
  function Rn(e) {
    Fn(e instanceof Function, 'Expected a class definition')
    let t = Yp.get(e)
    return t
      ? (Fn(t instanceof e, 'Instance stored in cache mismatched with class'), t)
      : ((t = new e()), Yp.set(e, t), t)
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function iE(e, t) {
    const n = _y(e, 'auth')
    if (n.isInitialized()) {
      const i = n.getImmediate(),
        s = n.getOptions()
      if ($a(s, t != null ? t : {})) return i
      on(i, 'already-initialized')
    }
    return n.initialize({ options: t })
  }
  function sE(e, t) {
    const n = (t == null ? void 0 : t.persistence) || [],
      r = (Array.isArray(n) ? n : [n]).map(Rn)
    t != null && t.errorMap && e._updateErrorMap(t.errorMap),
      e._initializeWithPersistence(r, t == null ? void 0 : t.popupRedirectResolver)
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ad() {
    var e
    return (
      (typeof self < 'u' && ((e = self.location) === null || e === void 0 ? void 0 : e.href)) || ''
    )
  }
  function oE() {
    return Hp() === 'http:' || Hp() === 'https:'
  }
  function Hp() {
    var e
    return (
      (typeof self < 'u' && ((e = self.location) === null || e === void 0 ? void 0 : e.protocol)) ||
      null
    )
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function aE() {
    return typeof navigator < 'u' &&
      navigator &&
      'onLine' in navigator &&
      typeof navigator.onLine == 'boolean' &&
      (oE() || LS() || 'connection' in navigator)
      ? navigator.onLine
      : !0
  }
  function lE() {
    if (typeof navigator > 'u') return null
    const e = navigator
    return (e.languages && e.languages[0]) || e.language || null
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class ho {
    constructor(t, n) {
      ;(this.shortDelay = t),
        (this.longDelay = n),
        Fn(n > t, 'Short delay should be less than long delay!'),
        (this.isMobile = AS() || bS())
    }
    get() {
      return aE()
        ? this.isMobile
          ? this.longDelay
          : this.shortDelay
        : Math.min(5e3, this.shortDelay)
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function xf(e, t) {
    Fn(e.emulator, 'Emulator should always be set here')
    const { url: n } = e.emulator
    return t ? `${n}${t.startsWith('/') ? t.slice(1) : t}` : n
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Iy {
    static initialize(t, n, r) {
      ;(this.fetchImpl = t), n && (this.headersImpl = n), r && (this.responseImpl = r)
    }
    static fetch() {
      if (this.fetchImpl) return this.fetchImpl
      if (typeof self < 'u' && 'fetch' in self) return self.fetch
      On(
        'Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
      )
    }
    static headers() {
      if (this.headersImpl) return this.headersImpl
      if (typeof self < 'u' && 'Headers' in self) return self.Headers
      On(
        'Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
      )
    }
    static response() {
      if (this.responseImpl) return this.responseImpl
      if (typeof self < 'u' && 'Response' in self) return self.Response
      On(
        'Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill'
      )
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const uE = {
    CREDENTIAL_MISMATCH: 'custom-token-mismatch',
    MISSING_CUSTOM_TOKEN: 'internal-error',
    INVALID_IDENTIFIER: 'invalid-email',
    MISSING_CONTINUE_URI: 'internal-error',
    INVALID_PASSWORD: 'wrong-password',
    MISSING_PASSWORD: 'internal-error',
    EMAIL_EXISTS: 'email-already-in-use',
    PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
    INVALID_IDP_RESPONSE: 'invalid-credential',
    INVALID_PENDING_TOKEN: 'invalid-credential',
    FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
    MISSING_REQ_TYPE: 'internal-error',
    EMAIL_NOT_FOUND: 'user-not-found',
    RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
    EXPIRED_OOB_CODE: 'expired-action-code',
    INVALID_OOB_CODE: 'invalid-action-code',
    MISSING_OOB_CODE: 'internal-error',
    CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
    INVALID_ID_TOKEN: 'invalid-user-token',
    TOKEN_EXPIRED: 'user-token-expired',
    USER_NOT_FOUND: 'user-token-expired',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
    INVALID_CODE: 'invalid-verification-code',
    INVALID_SESSION_INFO: 'invalid-verification-id',
    INVALID_TEMPORARY_PROOF: 'invalid-credential',
    MISSING_SESSION_INFO: 'missing-verification-id',
    SESSION_EXPIRED: 'code-expired',
    MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
    UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
    INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
    ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
    INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
    MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
    MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
    MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
    SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
    SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
    BLOCKING_FUNCTION_ERROR_RESPONSE: 'internal-error',
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const cE = new ho(3e4, 6e4)
  function Ll(e, t) {
    return e.tenantId && !t.tenantId
      ? Object.assign(Object.assign({}, t), { tenantId: e.tenantId })
      : t
  }
  async function po(e, t, n, r, i = {}) {
    return Ty(e, i, async () => {
      let s = {},
        o = {}
      r && (t === 'GET' ? (o = r) : (s = { body: JSON.stringify(r) }))
      const a = fo(Object.assign({ key: e.config.apiKey }, o)).slice(1),
        l = await e._getAdditionalHeaders()
      return (
        (l['Content-Type'] = 'application/json'),
        e.languageCode && (l['X-Firebase-Locale'] = e.languageCode),
        Iy.fetch()(
          Cy(e, e.config.apiHost, n, a),
          Object.assign({ method: t, headers: l, referrerPolicy: 'no-referrer' }, s)
        )
      )
    })
  }
  async function Ty(e, t, n) {
    e._canInitEmulator = !1
    const r = Object.assign(Object.assign({}, uE), t)
    try {
      const i = new dE(e),
        s = await Promise.race([n(), i.promise])
      i.clearNetworkTimeout()
      const o = await s.json()
      if ('needConfirmation' in o) throw zo(e, 'account-exists-with-different-credential', o)
      if (s.ok && !('errorMessage' in o)) return o
      {
        const a = s.ok ? o.errorMessage : o.error.message,
          [l, u] = a.split(' : ')
        if (l === 'FEDERATED_USER_ID_ALREADY_LINKED') throw zo(e, 'credential-already-in-use', o)
        if (l === 'EMAIL_EXISTS') throw zo(e, 'email-already-in-use', o)
        if (l === 'USER_DISABLED') throw zo(e, 'user-disabled', o)
        const d = r[l] || l.toLowerCase().replace(/[_\s]+/g, '-')
        if (u) throw rE(e, d, u)
        on(e, d)
      }
    } catch (i) {
      if (i instanceof Er) throw i
      on(e, 'network-request-failed')
    }
  }
  async function bl(e, t, n, r, i = {}) {
    const s = await po(e, t, n, r, i)
    return (
      'mfaPendingCredential' in s && on(e, 'multi-factor-auth-required', { _serverResponse: s }), s
    )
  }
  function Cy(e, t, n, r) {
    const i = `${t}${n}?${r}`
    return e.config.emulator ? xf(e.config, i) : `${e.config.apiScheme}://${i}`
  }
  class dE {
    constructor(t) {
      ;(this.auth = t),
        (this.timer = null),
        (this.promise = new Promise((n, r) => {
          this.timer = setTimeout(() => r(gn(this.auth, 'network-request-failed')), cE.get())
        }))
    }
    clearNetworkTimeout() {
      clearTimeout(this.timer)
    }
  }
  function zo(e, t, n) {
    const r = { appName: e.name }
    n.email && (r.email = n.email), n.phoneNumber && (r.phoneNumber = n.phoneNumber)
    const i = gn(e, t, r)
    return (i.customData._tokenResponse = n), i
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function fE(e, t) {
    return po(e, 'POST', '/v1/accounts:delete', t)
  }
  async function hE(e, t) {
    return po(e, 'POST', '/v1/accounts:lookup', t)
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Rs(e) {
    if (!!e)
      try {
        const t = new Date(Number(e))
        if (!isNaN(t.getTime())) return t.toUTCString()
      } catch {}
  }
  async function pE(e, t = !1) {
    const n = Jr(e),
      r = await n.getIdToken(t),
      i = Of(r)
    Q(i && i.exp && i.auth_time && i.iat, n.auth, 'internal-error')
    const s = typeof i.firebase == 'object' ? i.firebase : void 0,
      o = s == null ? void 0 : s.sign_in_provider
    return {
      claims: i,
      token: r,
      authTime: Rs(Fu(i.auth_time)),
      issuedAtTime: Rs(Fu(i.iat)),
      expirationTime: Rs(Fu(i.exp)),
      signInProvider: o || null,
      signInSecondFactor: (s == null ? void 0 : s.sign_in_second_factor) || null,
    }
  }
  function Fu(e) {
    return Number(e) * 1e3
  }
  function Of(e) {
    var t
    const [n, r, i] = e.split('.')
    if (n === void 0 || r === void 0 || i === void 0)
      return na('JWT malformed, contained fewer than 3 sections'), null
    try {
      const s = NS(r)
      return s ? JSON.parse(s) : (na('Failed to decode base64 JWT payload'), null)
    } catch (s) {
      return (
        na(
          'Caught error parsing JWT payload as JSON',
          (t = s) === null || t === void 0 ? void 0 : t.toString()
        ),
        null
      )
    }
  }
  function mE(e) {
    const t = Of(e)
    return (
      Q(t, 'internal-error'),
      Q(typeof t.exp < 'u', 'internal-error'),
      Q(typeof t.iat < 'u', 'internal-error'),
      Number(t.exp) - Number(t.iat)
    )
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function Xs(e, t, n = !1) {
    if (n) return t
    try {
      return await t
    } catch (r) {
      throw (r instanceof Er && vE(r) && e.auth.currentUser === e && (await e.auth.signOut()), r)
    }
  }
  function vE({ code: e }) {
    return e === 'auth/user-disabled' || e === 'auth/user-token-expired'
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class gE {
    constructor(t) {
      ;(this.user = t), (this.isRunning = !1), (this.timerId = null), (this.errorBackoff = 3e4)
    }
    _start() {
      this.isRunning || ((this.isRunning = !0), this.schedule())
    }
    _stop() {
      !this.isRunning ||
        ((this.isRunning = !1), this.timerId !== null && clearTimeout(this.timerId))
    }
    getInterval(t) {
      var n
      if (t) {
        const r = this.errorBackoff
        return (this.errorBackoff = Math.min(this.errorBackoff * 2, 96e4)), r
      } else {
        this.errorBackoff = 3e4
        const i =
          ((n = this.user.stsTokenManager.expirationTime) !== null && n !== void 0 ? n : 0) -
          Date.now() -
          3e5
        return Math.max(0, i)
      }
    }
    schedule(t = !1) {
      if (!this.isRunning) return
      const n = this.getInterval(t)
      this.timerId = setTimeout(async () => {
        await this.iteration()
      }, n)
    }
    async iteration() {
      var t
      try {
        await this.user.getIdToken(!0)
      } catch (n) {
        ;((t = n) === null || t === void 0 ? void 0 : t.code) === 'auth/network-request-failed' &&
          this.schedule(!0)
        return
      }
      this.schedule()
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class xy {
    constructor(t, n) {
      ;(this.createdAt = t), (this.lastLoginAt = n), this._initializeTime()
    }
    _initializeTime() {
      ;(this.lastSignInTime = Rs(this.lastLoginAt)), (this.creationTime = Rs(this.createdAt))
    }
    _copy(t) {
      ;(this.createdAt = t.createdAt), (this.lastLoginAt = t.lastLoginAt), this._initializeTime()
    }
    toJSON() {
      return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt }
    }
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function ja(e) {
    var t
    const n = e.auth,
      r = await e.getIdToken(),
      i = await Xs(e, hE(n, { idToken: r }))
    Q(i == null ? void 0 : i.users.length, n, 'internal-error')
    const s = i.users[0]
    e._notifyReloadListener(s)
    const o =
        !((t = s.providerUserInfo) === null || t === void 0) && t.length
          ? wE(s.providerUserInfo)
          : [],
      a = _E(e.providerData, o),
      l = e.isAnonymous,
      u = !(e.email && s.passwordHash) && !(a != null && a.length),
      d = l ? u : !1,
      p = {
        uid: s.localId,
        displayName: s.displayName || null,
        photoURL: s.photoUrl || null,
        email: s.email || null,
        emailVerified: s.emailVerified || !1,
        phoneNumber: s.phoneNumber || null,
        tenantId: s.tenantId || null,
        providerData: a,
        metadata: new xy(s.createdAt, s.lastLoginAt),
        isAnonymous: d,
      }
    Object.assign(e, p)
  }
  async function yE(e) {
    const t = Jr(e)
    await ja(t), await t.auth._persistUserIfCurrent(t), t.auth._notifyListenersIfCurrent(t)
  }
  function _E(e, t) {
    return [...e.filter((r) => !t.some((i) => i.providerId === r.providerId)), ...t]
  }
  function wE(e) {
    return e.map((t) => {
      var { providerId: n } = t,
        r = Tf(t, ['providerId'])
      return {
        providerId: n,
        uid: r.rawId || '',
        displayName: r.displayName || null,
        email: r.email || null,
        phoneNumber: r.phoneNumber || null,
        photoURL: r.photoUrl || null,
      }
    })
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function SE(e, t) {
    const n = await Ty(e, {}, async () => {
      const r = fo({ grant_type: 'refresh_token', refresh_token: t }).slice(1),
        { tokenApiHost: i, apiKey: s } = e.config,
        o = Cy(e, i, '/v1/token', `key=${s}`),
        a = await e._getAdditionalHeaders()
      return (
        (a['Content-Type'] = 'application/x-www-form-urlencoded'),
        Iy.fetch()(o, { method: 'POST', headers: a, body: r })
      )
    })
    return { accessToken: n.access_token, expiresIn: n.expires_in, refreshToken: n.refresh_token }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Zs {
    constructor() {
      ;(this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null)
    }
    get isExpired() {
      return !this.expirationTime || Date.now() > this.expirationTime - 3e4
    }
    updateFromServerResponse(t) {
      Q(t.idToken, 'internal-error'),
        Q(typeof t.idToken < 'u', 'internal-error'),
        Q(typeof t.refreshToken < 'u', 'internal-error')
      const n = 'expiresIn' in t && typeof t.expiresIn < 'u' ? Number(t.expiresIn) : mE(t.idToken)
      this.updateTokensAndExpiration(t.idToken, t.refreshToken, n)
    }
    async getToken(t, n = !1) {
      return (
        Q(!this.accessToken || this.refreshToken, t, 'user-token-expired'),
        !n && this.accessToken && !this.isExpired
          ? this.accessToken
          : this.refreshToken
          ? (await this.refresh(t, this.refreshToken), this.accessToken)
          : null
      )
    }
    clearRefreshToken() {
      this.refreshToken = null
    }
    async refresh(t, n) {
      const { accessToken: r, refreshToken: i, expiresIn: s } = await SE(t, n)
      this.updateTokensAndExpiration(r, i, Number(s))
    }
    updateTokensAndExpiration(t, n, r) {
      ;(this.refreshToken = n || null),
        (this.accessToken = t || null),
        (this.expirationTime = Date.now() + r * 1e3)
    }
    static fromJSON(t, n) {
      const { refreshToken: r, accessToken: i, expirationTime: s } = n,
        o = new Zs()
      return (
        r && (Q(typeof r == 'string', 'internal-error', { appName: t }), (o.refreshToken = r)),
        i && (Q(typeof i == 'string', 'internal-error', { appName: t }), (o.accessToken = i)),
        s && (Q(typeof s == 'number', 'internal-error', { appName: t }), (o.expirationTime = s)),
        o
      )
    }
    toJSON() {
      return {
        refreshToken: this.refreshToken,
        accessToken: this.accessToken,
        expirationTime: this.expirationTime,
      }
    }
    _assign(t) {
      ;(this.accessToken = t.accessToken),
        (this.refreshToken = t.refreshToken),
        (this.expirationTime = t.expirationTime)
    }
    _clone() {
      return Object.assign(new Zs(), this.toJSON())
    }
    _performRefresh() {
      return On('not implemented')
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Vn(e, t) {
    Q(typeof e == 'string' || typeof e > 'u', 'internal-error', { appName: t })
  }
  class Fr {
    constructor(t) {
      var { uid: n, auth: r, stsTokenManager: i } = t,
        s = Tf(t, ['uid', 'auth', 'stsTokenManager'])
      ;(this.providerId = 'firebase'),
        (this.proactiveRefresh = new gE(this)),
        (this.reloadUserInfo = null),
        (this.reloadListener = null),
        (this.uid = n),
        (this.auth = r),
        (this.stsTokenManager = i),
        (this.accessToken = i.accessToken),
        (this.displayName = s.displayName || null),
        (this.email = s.email || null),
        (this.emailVerified = s.emailVerified || !1),
        (this.phoneNumber = s.phoneNumber || null),
        (this.photoURL = s.photoURL || null),
        (this.isAnonymous = s.isAnonymous || !1),
        (this.tenantId = s.tenantId || null),
        (this.providerData = s.providerData ? [...s.providerData] : []),
        (this.metadata = new xy(s.createdAt || void 0, s.lastLoginAt || void 0))
    }
    async getIdToken(t) {
      const n = await Xs(this, this.stsTokenManager.getToken(this.auth, t))
      return (
        Q(n, this.auth, 'internal-error'),
        this.accessToken !== n &&
          ((this.accessToken = n),
          await this.auth._persistUserIfCurrent(this),
          this.auth._notifyListenersIfCurrent(this)),
        n
      )
    }
    getIdTokenResult(t) {
      return pE(this, t)
    }
    reload() {
      return yE(this)
    }
    _assign(t) {
      this !== t &&
        (Q(this.uid === t.uid, this.auth, 'internal-error'),
        (this.displayName = t.displayName),
        (this.photoURL = t.photoURL),
        (this.email = t.email),
        (this.emailVerified = t.emailVerified),
        (this.phoneNumber = t.phoneNumber),
        (this.isAnonymous = t.isAnonymous),
        (this.tenantId = t.tenantId),
        (this.providerData = t.providerData.map((n) => Object.assign({}, n))),
        this.metadata._copy(t.metadata),
        this.stsTokenManager._assign(t.stsTokenManager))
    }
    _clone(t) {
      return new Fr(
        Object.assign(Object.assign({}, this), {
          auth: t,
          stsTokenManager: this.stsTokenManager._clone(),
        })
      )
    }
    _onReload(t) {
      Q(!this.reloadListener, this.auth, 'internal-error'),
        (this.reloadListener = t),
        this.reloadUserInfo &&
          (this._notifyReloadListener(this.reloadUserInfo), (this.reloadUserInfo = null))
    }
    _notifyReloadListener(t) {
      this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t)
    }
    _startProactiveRefresh() {
      this.proactiveRefresh._start()
    }
    _stopProactiveRefresh() {
      this.proactiveRefresh._stop()
    }
    async _updateTokensIfNecessary(t, n = !1) {
      let r = !1
      t.idToken &&
        t.idToken !== this.stsTokenManager.accessToken &&
        (this.stsTokenManager.updateFromServerResponse(t), (r = !0)),
        n && (await ja(this)),
        await this.auth._persistUserIfCurrent(this),
        r && this.auth._notifyListenersIfCurrent(this)
    }
    async delete() {
      const t = await this.getIdToken()
      return (
        await Xs(this, fE(this.auth, { idToken: t })),
        this.stsTokenManager.clearRefreshToken(),
        this.auth.signOut()
      )
    }
    toJSON() {
      return Object.assign(
        Object.assign(
          {
            uid: this.uid,
            email: this.email || void 0,
            emailVerified: this.emailVerified,
            displayName: this.displayName || void 0,
            isAnonymous: this.isAnonymous,
            photoURL: this.photoURL || void 0,
            phoneNumber: this.phoneNumber || void 0,
            tenantId: this.tenantId || void 0,
            providerData: this.providerData.map((t) => Object.assign({}, t)),
            stsTokenManager: this.stsTokenManager.toJSON(),
            _redirectEventId: this._redirectEventId,
          },
          this.metadata.toJSON()
        ),
        { apiKey: this.auth.config.apiKey, appName: this.auth.name }
      )
    }
    get refreshToken() {
      return this.stsTokenManager.refreshToken || ''
    }
    static _fromJSON(t, n) {
      var r, i, s, o, a, l, u, d
      const p = (r = n.displayName) !== null && r !== void 0 ? r : void 0,
        f = (i = n.email) !== null && i !== void 0 ? i : void 0,
        S = (s = n.phoneNumber) !== null && s !== void 0 ? s : void 0,
        k = (o = n.photoURL) !== null && o !== void 0 ? o : void 0,
        E = (a = n.tenantId) !== null && a !== void 0 ? a : void 0,
        N = (l = n._redirectEventId) !== null && l !== void 0 ? l : void 0,
        m = (u = n.createdAt) !== null && u !== void 0 ? u : void 0,
        h = (d = n.lastLoginAt) !== null && d !== void 0 ? d : void 0,
        { uid: v, emailVerified: w, isAnonymous: _, providerData: L, stsTokenManager: I } = n
      Q(v && I, t, 'internal-error')
      const x = Zs.fromJSON(this.name, I)
      Q(typeof v == 'string', t, 'internal-error'),
        Vn(p, t.name),
        Vn(f, t.name),
        Q(typeof w == 'boolean', t, 'internal-error'),
        Q(typeof _ == 'boolean', t, 'internal-error'),
        Vn(S, t.name),
        Vn(k, t.name),
        Vn(E, t.name),
        Vn(N, t.name),
        Vn(m, t.name),
        Vn(h, t.name)
      const W = new Fr({
        uid: v,
        auth: t,
        email: f,
        emailVerified: w,
        displayName: p,
        isAnonymous: _,
        photoURL: k,
        phoneNumber: S,
        tenantId: E,
        stsTokenManager: x,
        createdAt: m,
        lastLoginAt: h,
      })
      return (
        L && Array.isArray(L) && (W.providerData = L.map((j) => Object.assign({}, j))),
        N && (W._redirectEventId = N),
        W
      )
    }
    static async _fromIdTokenResponse(t, n, r = !1) {
      const i = new Zs()
      i.updateFromServerResponse(n)
      const s = new Fr({ uid: n.localId, auth: t, stsTokenManager: i, isAnonymous: r })
      return await ja(s), s
    }
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Oy {
    constructor() {
      ;(this.type = 'NONE'), (this.storage = {})
    }
    async _isAvailable() {
      return !0
    }
    async _set(t, n) {
      this.storage[t] = n
    }
    async _get(t) {
      const n = this.storage[t]
      return n === void 0 ? null : n
    }
    async _remove(t) {
      delete this.storage[t]
    }
    _addListener(t, n) {}
    _removeListener(t, n) {}
  }
  Oy.type = 'NONE'
  const Vp = Oy
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function ra(e, t, n) {
    return `firebase:${e}:${t}:${n}`
  }
  class Ri {
    constructor(t, n, r) {
      ;(this.persistence = t), (this.auth = n), (this.userKey = r)
      const { config: i, name: s } = this.auth
      ;(this.fullUserKey = ra(this.userKey, i.apiKey, s)),
        (this.fullPersistenceKey = ra('persistence', i.apiKey, s)),
        (this.boundEventHandler = n._onStorageEvent.bind(n)),
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler)
    }
    setCurrentUser(t) {
      return this.persistence._set(this.fullUserKey, t.toJSON())
    }
    async getCurrentUser() {
      const t = await this.persistence._get(this.fullUserKey)
      return t ? Fr._fromJSON(this.auth, t) : null
    }
    removeCurrentUser() {
      return this.persistence._remove(this.fullUserKey)
    }
    savePersistenceForRedirect() {
      return this.persistence._set(this.fullPersistenceKey, this.persistence.type)
    }
    async setPersistence(t) {
      if (this.persistence === t) return
      const n = await this.getCurrentUser()
      if ((await this.removeCurrentUser(), (this.persistence = t), n)) return this.setCurrentUser(n)
    }
    delete() {
      this.persistence._removeListener(this.fullUserKey, this.boundEventHandler)
    }
    static async create(t, n, r = 'authUser') {
      if (!n.length) return new Ri(Rn(Vp), t, r)
      const i = (
        await Promise.all(
          n.map(async (u) => {
            if (await u._isAvailable()) return u
          })
        )
      ).filter((u) => u)
      let s = i[0] || Rn(Vp)
      const o = ra(r, t.config.apiKey, t.name)
      let a = null
      for (const u of n)
        try {
          const d = await u._get(o)
          if (d) {
            const p = Fr._fromJSON(t, d)
            u !== s && (a = p), (s = u)
            break
          }
        } catch {}
      const l = i.filter((u) => u._shouldAllowMigration)
      return !s._shouldAllowMigration || !l.length
        ? new Ri(s, t, r)
        : ((s = l[0]),
          a && (await s._set(o, a.toJSON())),
          await Promise.all(
            n.map(async (u) => {
              if (u !== s)
                try {
                  await u._remove(o)
                } catch {}
            })
          ),
          new Ri(s, t, r))
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Gp(e) {
    const t = e.toLowerCase()
    if (t.includes('opera/') || t.includes('opr/') || t.includes('opios/')) return 'Opera'
    if (Dy(t)) return 'IEMobile'
    if (t.includes('msie') || t.includes('trident/')) return 'IE'
    if (t.includes('edge/')) return 'Edge'
    if (Ry(t)) return 'Firefox'
    if (t.includes('silk/')) return 'Silk'
    if (My(t)) return 'Blackberry'
    if (Ay(t)) return 'Webos'
    if (Rf(t)) return 'Safari'
    if ((t.includes('chrome/') || Py(t)) && !t.includes('edge/')) return 'Chrome'
    if (Ny(t)) return 'Android'
    {
      const n = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
        r = e.match(n)
      if ((r == null ? void 0 : r.length) === 2) return r[1]
    }
    return 'Other'
  }
  function Ry(e = ft()) {
    return /firefox\//i.test(e)
  }
  function Rf(e = ft()) {
    const t = e.toLowerCase()
    return (
      t.includes('safari/') &&
      !t.includes('chrome/') &&
      !t.includes('crios/') &&
      !t.includes('android')
    )
  }
  function Py(e = ft()) {
    return /crios\//i.test(e)
  }
  function Dy(e = ft()) {
    return /iemobile/i.test(e)
  }
  function Ny(e = ft()) {
    return /android/i.test(e)
  }
  function My(e = ft()) {
    return /blackberry/i.test(e)
  }
  function Ay(e = ft()) {
    return /webos/i.test(e)
  }
  function Ul(e = ft()) {
    return /iphone|ipad|ipod/i.test(e) || (/macintosh/i.test(e) && /mobile/i.test(e))
  }
  function kE(e = ft()) {
    var t
    return Ul(e) && !!(!((t = window.navigator) === null || t === void 0) && t.standalone)
  }
  function EE() {
    return US() && document.documentMode === 10
  }
  function Ly(e = ft()) {
    return Ul(e) || Ny(e) || Ay(e) || My(e) || /windows phone/i.test(e) || Dy(e)
  }
  function IE() {
    try {
      return !!(window && window !== window.top)
    } catch {
      return !1
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function by(e, t = []) {
    let n
    switch (e) {
      case 'Browser':
        n = Gp(ft())
        break
      case 'Worker':
        n = `${Gp(ft())}-${e}`
        break
      default:
        n = e
    }
    const r = t.length ? t.join(',') : 'FirebaseCore-web'
    return `${n}/JsCore/${Al}/${r}`
  }
  /**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class TE {
    constructor(t) {
      ;(this.auth = t), (this.queue = [])
    }
    pushCallback(t, n) {
      const r = (s) =>
        new Promise((o, a) => {
          try {
            const l = t(s)
            o(l)
          } catch (l) {
            a(l)
          }
        })
      ;(r.onAbort = n), this.queue.push(r)
      const i = this.queue.length - 1
      return () => {
        this.queue[i] = () => Promise.resolve()
      }
    }
    async runMiddleware(t) {
      var n
      if (this.auth.currentUser === t) return
      const r = []
      try {
        for (const i of this.queue) await i(t), i.onAbort && r.push(i.onAbort)
      } catch (i) {
        r.reverse()
        for (const s of r)
          try {
            s()
          } catch {}
        throw this.auth._errorFactory.create('login-blocked', {
          originalMessage: (n = i) === null || n === void 0 ? void 0 : n.message,
        })
      }
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class CE {
    constructor(t, n, r) {
      ;(this.app = t),
        (this.heartbeatServiceProvider = n),
        (this.config = r),
        (this.currentUser = null),
        (this.emulatorConfig = null),
        (this.operations = Promise.resolve()),
        (this.authStateSubscription = new Kp(this)),
        (this.idTokenSubscription = new Kp(this)),
        (this.beforeStateQueue = new TE(this)),
        (this.redirectUser = null),
        (this.isProactiveRefreshEnabled = !1),
        (this._canInitEmulator = !0),
        (this._isInitialized = !1),
        (this._deleted = !1),
        (this._initializationPromise = null),
        (this._popupRedirectResolver = null),
        (this._errorFactory = Ey),
        (this.lastNotifiedUid = void 0),
        (this.languageCode = null),
        (this.tenantId = null),
        (this.settings = { appVerificationDisabledForTesting: !1 }),
        (this.frameworks = []),
        (this.name = t.name),
        (this.clientVersion = r.sdkClientVersion)
    }
    _initializeWithPersistence(t, n) {
      return (
        n && (this._popupRedirectResolver = Rn(n)),
        (this._initializationPromise = this.queue(async () => {
          var r, i
          if (
            !this._deleted &&
            ((this.persistenceManager = await Ri.create(this, t)), !this._deleted)
          ) {
            if (
              !((r = this._popupRedirectResolver) === null || r === void 0) &&
              r._shouldInitProactively
            )
              try {
                await this._popupRedirectResolver._initialize(this)
              } catch {}
            await this.initializeCurrentUser(n),
              (this.lastNotifiedUid =
                ((i = this.currentUser) === null || i === void 0 ? void 0 : i.uid) || null),
              !this._deleted && (this._isInitialized = !0)
          }
        })),
        this._initializationPromise
      )
    }
    async _onStorageEvent() {
      if (this._deleted) return
      const t = await this.assertedPersistence.getCurrentUser()
      if (!(!this.currentUser && !t)) {
        if (this.currentUser && t && this.currentUser.uid === t.uid) {
          this._currentUser._assign(t), await this.currentUser.getIdToken()
          return
        }
        await this._updateCurrentUser(t, !0)
      }
    }
    async initializeCurrentUser(t) {
      var n
      const r = await this.assertedPersistence.getCurrentUser()
      let i = r,
        s = !1
      if (t && this.config.authDomain) {
        await this.getOrInitRedirectPersistenceManager()
        const o = (n = this.redirectUser) === null || n === void 0 ? void 0 : n._redirectEventId,
          a = i == null ? void 0 : i._redirectEventId,
          l = await this.tryRedirectSignIn(t)
        ;(!o || o === a) && (l == null ? void 0 : l.user) && ((i = l.user), (s = !0))
      }
      if (!i) return this.directlySetCurrentUser(null)
      if (!i._redirectEventId) {
        if (s)
          try {
            await this.beforeStateQueue.runMiddleware(i)
          } catch (o) {
            ;(i = r),
              this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(o))
          }
        return i ? this.reloadAndSetCurrentUserOrClear(i) : this.directlySetCurrentUser(null)
      }
      return (
        Q(this._popupRedirectResolver, this, 'argument-error'),
        await this.getOrInitRedirectPersistenceManager(),
        this.redirectUser && this.redirectUser._redirectEventId === i._redirectEventId
          ? this.directlySetCurrentUser(i)
          : this.reloadAndSetCurrentUserOrClear(i)
      )
    }
    async tryRedirectSignIn(t) {
      let n = null
      try {
        n = await this._popupRedirectResolver._completeRedirectFn(this, t, !0)
      } catch {
        await this._setRedirectUser(null)
      }
      return n
    }
    async reloadAndSetCurrentUserOrClear(t) {
      var n
      try {
        await ja(t)
      } catch (r) {
        if (((n = r) === null || n === void 0 ? void 0 : n.code) !== 'auth/network-request-failed')
          return this.directlySetCurrentUser(null)
      }
      return this.directlySetCurrentUser(t)
    }
    useDeviceLanguage() {
      this.languageCode = lE()
    }
    async _delete() {
      this._deleted = !0
    }
    async updateCurrentUser(t) {
      const n = t ? Jr(t) : null
      return (
        n && Q(n.auth.config.apiKey === this.config.apiKey, this, 'invalid-user-token'),
        this._updateCurrentUser(n && n._clone(this))
      )
    }
    async _updateCurrentUser(t, n = !1) {
      if (!this._deleted)
        return (
          t && Q(this.tenantId === t.tenantId, this, 'tenant-id-mismatch'),
          n || (await this.beforeStateQueue.runMiddleware(t)),
          this.queue(async () => {
            await this.directlySetCurrentUser(t), this.notifyAuthListeners()
          })
        )
    }
    async signOut() {
      return (
        await this.beforeStateQueue.runMiddleware(null),
        (this.redirectPersistenceManager || this._popupRedirectResolver) &&
          (await this._setRedirectUser(null)),
        this._updateCurrentUser(null, !0)
      )
    }
    setPersistence(t) {
      return this.queue(async () => {
        await this.assertedPersistence.setPersistence(Rn(t))
      })
    }
    _getPersistence() {
      return this.assertedPersistence.persistence.type
    }
    _updateErrorMap(t) {
      this._errorFactory = new co('auth', 'Firebase', t())
    }
    onAuthStateChanged(t, n, r) {
      return this.registerStateListener(this.authStateSubscription, t, n, r)
    }
    beforeAuthStateChanged(t, n) {
      return this.beforeStateQueue.pushCallback(t, n)
    }
    onIdTokenChanged(t, n, r) {
      return this.registerStateListener(this.idTokenSubscription, t, n, r)
    }
    toJSON() {
      var t
      return {
        apiKey: this.config.apiKey,
        authDomain: this.config.authDomain,
        appName: this.name,
        currentUser: (t = this._currentUser) === null || t === void 0 ? void 0 : t.toJSON(),
      }
    }
    async _setRedirectUser(t, n) {
      const r = await this.getOrInitRedirectPersistenceManager(n)
      return t === null ? r.removeCurrentUser() : r.setCurrentUser(t)
    }
    async getOrInitRedirectPersistenceManager(t) {
      if (!this.redirectPersistenceManager) {
        const n = (t && Rn(t)) || this._popupRedirectResolver
        Q(n, this, 'argument-error'),
          (this.redirectPersistenceManager = await Ri.create(
            this,
            [Rn(n._redirectPersistence)],
            'redirectUser'
          )),
          (this.redirectUser = await this.redirectPersistenceManager.getCurrentUser())
      }
      return this.redirectPersistenceManager
    }
    async _redirectUserForId(t) {
      var n, r
      return (
        this._isInitialized && (await this.queue(async () => {})),
        ((n = this._currentUser) === null || n === void 0 ? void 0 : n._redirectEventId) === t
          ? this._currentUser
          : ((r = this.redirectUser) === null || r === void 0 ? void 0 : r._redirectEventId) === t
          ? this.redirectUser
          : null
      )
    }
    async _persistUserIfCurrent(t) {
      if (t === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(t))
    }
    _notifyListenersIfCurrent(t) {
      t === this.currentUser && this.notifyAuthListeners()
    }
    _key() {
      return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`
    }
    _startProactiveRefresh() {
      ;(this.isProactiveRefreshEnabled = !0),
        this.currentUser && this._currentUser._startProactiveRefresh()
    }
    _stopProactiveRefresh() {
      ;(this.isProactiveRefreshEnabled = !1),
        this.currentUser && this._currentUser._stopProactiveRefresh()
    }
    get _currentUser() {
      return this.currentUser
    }
    notifyAuthListeners() {
      var t, n
      if (!this._isInitialized) return
      this.idTokenSubscription.next(this.currentUser)
      const r =
        (n = (t = this.currentUser) === null || t === void 0 ? void 0 : t.uid) !== null &&
        n !== void 0
          ? n
          : null
      this.lastNotifiedUid !== r &&
        ((this.lastNotifiedUid = r), this.authStateSubscription.next(this.currentUser))
    }
    registerStateListener(t, n, r, i) {
      if (this._deleted) return () => {}
      const s = typeof n == 'function' ? n : n.next.bind(n),
        o = this._isInitialized ? Promise.resolve() : this._initializationPromise
      return (
        Q(o, this, 'internal-error'),
        o.then(() => s(this.currentUser)),
        typeof n == 'function' ? t.addObserver(n, r, i) : t.addObserver(n)
      )
    }
    async directlySetCurrentUser(t) {
      this.currentUser &&
        this.currentUser !== t &&
        (this._currentUser._stopProactiveRefresh(),
        t && this.isProactiveRefreshEnabled && t._startProactiveRefresh()),
        (this.currentUser = t),
        t
          ? await this.assertedPersistence.setCurrentUser(t)
          : await this.assertedPersistence.removeCurrentUser()
    }
    queue(t) {
      return (this.operations = this.operations.then(t, t)), this.operations
    }
    get assertedPersistence() {
      return Q(this.persistenceManager, this, 'internal-error'), this.persistenceManager
    }
    _logFramework(t) {
      !t ||
        this.frameworks.includes(t) ||
        (this.frameworks.push(t),
        this.frameworks.sort(),
        (this.clientVersion = by(this.config.clientPlatform, this._getFrameworks())))
    }
    _getFrameworks() {
      return this.frameworks
    }
    async _getAdditionalHeaders() {
      var t
      const n = { ['X-Client-Version']: this.clientVersion }
      this.app.options.appId && (n['X-Firebase-gmpid'] = this.app.options.appId)
      const r = await ((t = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) ===
        null || t === void 0
        ? void 0
        : t.getHeartbeatsHeader())
      return r && (n['X-Firebase-Client'] = r), n
    }
  }
  function Pf(e) {
    return Jr(e)
  }
  class Kp {
    constructor(t) {
      ;(this.auth = t), (this.observer = null), (this.addObserver = YS((n) => (this.observer = n)))
    }
    get next() {
      return Q(this.observer, this.auth, 'internal-error'), this.observer.next.bind(this.observer)
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Df {
    constructor(t, n) {
      ;(this.providerId = t), (this.signInMethod = n)
    }
    toJSON() {
      return On('not implemented')
    }
    _getIdTokenResponse(t) {
      return On('not implemented')
    }
    _linkToIdToken(t, n) {
      return On('not implemented')
    }
    _getReauthenticationResolver(t) {
      return On('not implemented')
    }
  }
  async function xE(e, t) {
    return po(e, 'POST', '/v1/accounts:update', t)
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function OE(e, t) {
    return bl(e, 'POST', '/v1/accounts:signInWithPassword', Ll(e, t))
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function RE(e, t) {
    return bl(e, 'POST', '/v1/accounts:signInWithEmailLink', Ll(e, t))
  }
  async function PE(e, t) {
    return bl(e, 'POST', '/v1/accounts:signInWithEmailLink', Ll(e, t))
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class eo extends Df {
    constructor(t, n, r, i = null) {
      super('password', r), (this._email = t), (this._password = n), (this._tenantId = i)
    }
    static _fromEmailAndPassword(t, n) {
      return new eo(t, n, 'password')
    }
    static _fromEmailAndCode(t, n, r = null) {
      return new eo(t, n, 'emailLink', r)
    }
    toJSON() {
      return {
        email: this._email,
        password: this._password,
        signInMethod: this.signInMethod,
        tenantId: this._tenantId,
      }
    }
    static fromJSON(t) {
      const n = typeof t == 'string' ? JSON.parse(t) : t
      if ((n == null ? void 0 : n.email) && (n == null ? void 0 : n.password)) {
        if (n.signInMethod === 'password') return this._fromEmailAndPassword(n.email, n.password)
        if (n.signInMethod === 'emailLink')
          return this._fromEmailAndCode(n.email, n.password, n.tenantId)
      }
      return null
    }
    async _getIdTokenResponse(t) {
      switch (this.signInMethod) {
        case 'password':
          return OE(t, { returnSecureToken: !0, email: this._email, password: this._password })
        case 'emailLink':
          return RE(t, { email: this._email, oobCode: this._password })
        default:
          on(t, 'internal-error')
      }
    }
    async _linkToIdToken(t, n) {
      switch (this.signInMethod) {
        case 'password':
          return xE(t, {
            idToken: n,
            returnSecureToken: !0,
            email: this._email,
            password: this._password,
          })
        case 'emailLink':
          return PE(t, { idToken: n, email: this._email, oobCode: this._password })
        default:
          on(t, 'internal-error')
      }
    }
    _getReauthenticationResolver(t) {
      return this._getIdTokenResponse(t)
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function Pi(e, t) {
    return bl(e, 'POST', '/v1/accounts:signInWithIdp', Ll(e, t))
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const DE = 'http://localhost'
  class Kr extends Df {
    constructor() {
      super(...arguments), (this.pendingToken = null)
    }
    static _fromParams(t) {
      const n = new Kr(t.providerId, t.signInMethod)
      return (
        t.idToken || t.accessToken
          ? (t.idToken && (n.idToken = t.idToken),
            t.accessToken && (n.accessToken = t.accessToken),
            t.nonce && !t.pendingToken && (n.nonce = t.nonce),
            t.pendingToken && (n.pendingToken = t.pendingToken))
          : t.oauthToken && t.oauthTokenSecret
          ? ((n.accessToken = t.oauthToken), (n.secret = t.oauthTokenSecret))
          : on('argument-error'),
        n
      )
    }
    toJSON() {
      return {
        idToken: this.idToken,
        accessToken: this.accessToken,
        secret: this.secret,
        nonce: this.nonce,
        pendingToken: this.pendingToken,
        providerId: this.providerId,
        signInMethod: this.signInMethod,
      }
    }
    static fromJSON(t) {
      const n = typeof t == 'string' ? JSON.parse(t) : t,
        { providerId: r, signInMethod: i } = n,
        s = Tf(n, ['providerId', 'signInMethod'])
      if (!r || !i) return null
      const o = new Kr(r, i)
      return (
        (o.idToken = s.idToken || void 0),
        (o.accessToken = s.accessToken || void 0),
        (o.secret = s.secret),
        (o.nonce = s.nonce),
        (o.pendingToken = s.pendingToken || null),
        o
      )
    }
    _getIdTokenResponse(t) {
      const n = this.buildRequest()
      return Pi(t, n)
    }
    _linkToIdToken(t, n) {
      const r = this.buildRequest()
      return (r.idToken = n), Pi(t, r)
    }
    _getReauthenticationResolver(t) {
      const n = this.buildRequest()
      return (n.autoCreate = !1), Pi(t, n)
    }
    buildRequest() {
      const t = { requestUri: DE, returnSecureToken: !0 }
      if (this.pendingToken) t.pendingToken = this.pendingToken
      else {
        const n = {}
        this.idToken && (n.id_token = this.idToken),
          this.accessToken && (n.access_token = this.accessToken),
          this.secret && (n.oauth_token_secret = this.secret),
          (n.providerId = this.providerId),
          this.nonce && !this.pendingToken && (n.nonce = this.nonce),
          (t.postBody = fo(n))
      }
      return t
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function NE(e) {
    switch (e) {
      case 'recoverEmail':
        return 'RECOVER_EMAIL'
      case 'resetPassword':
        return 'PASSWORD_RESET'
      case 'signIn':
        return 'EMAIL_SIGNIN'
      case 'verifyEmail':
        return 'VERIFY_EMAIL'
      case 'verifyAndChangeEmail':
        return 'VERIFY_AND_CHANGE_EMAIL'
      case 'revertSecondFactorAddition':
        return 'REVERT_SECOND_FACTOR_ADDITION'
      default:
        return null
    }
  }
  function ME(e) {
    const t = gs(ys(e)).link,
      n = t ? gs(ys(t)).deep_link_id : null,
      r = gs(ys(e)).deep_link_id
    return (r ? gs(ys(r)).link : null) || r || n || t || e
  }
  class Nf {
    constructor(t) {
      var n, r, i, s, o, a
      const l = gs(ys(t)),
        u = (n = l.apiKey) !== null && n !== void 0 ? n : null,
        d = (r = l.oobCode) !== null && r !== void 0 ? r : null,
        p = NE((i = l.mode) !== null && i !== void 0 ? i : null)
      Q(u && d && p, 'argument-error'),
        (this.apiKey = u),
        (this.operation = p),
        (this.code = d),
        (this.continueUrl = (s = l.continueUrl) !== null && s !== void 0 ? s : null),
        (this.languageCode = (o = l.languageCode) !== null && o !== void 0 ? o : null),
        (this.tenantId = (a = l.tenantId) !== null && a !== void 0 ? a : null)
    }
    static parseLink(t) {
      const n = ME(t)
      try {
        return new Nf(n)
      } catch {
        return null
      }
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Xi {
    constructor() {
      this.providerId = Xi.PROVIDER_ID
    }
    static credential(t, n) {
      return eo._fromEmailAndPassword(t, n)
    }
    static credentialWithLink(t, n) {
      const r = Nf.parseLink(n)
      return Q(r, 'argument-error'), eo._fromEmailAndCode(t, r.code, r.tenantId)
    }
  }
  Xi.PROVIDER_ID = 'password'
  Xi.EMAIL_PASSWORD_SIGN_IN_METHOD = 'password'
  Xi.EMAIL_LINK_SIGN_IN_METHOD = 'emailLink'
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Uy {
    constructor(t) {
      ;(this.providerId = t), (this.defaultLanguageCode = null), (this.customParameters = {})
    }
    setDefaultLanguage(t) {
      this.defaultLanguageCode = t
    }
    setCustomParameters(t) {
      return (this.customParameters = t), this
    }
    getCustomParameters() {
      return this.customParameters
    }
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class mo extends Uy {
    constructor() {
      super(...arguments), (this.scopes = [])
    }
    addScope(t) {
      return this.scopes.includes(t) || this.scopes.push(t), this
    }
    getScopes() {
      return [...this.scopes]
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Xn extends mo {
    constructor() {
      super('facebook.com')
    }
    static credential(t) {
      return Kr._fromParams({
        providerId: Xn.PROVIDER_ID,
        signInMethod: Xn.FACEBOOK_SIGN_IN_METHOD,
        accessToken: t,
      })
    }
    static credentialFromResult(t) {
      return Xn.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
      return Xn.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
      if (!t || !('oauthAccessToken' in t) || !t.oauthAccessToken) return null
      try {
        return Xn.credential(t.oauthAccessToken)
      } catch {
        return null
      }
    }
  }
  Xn.FACEBOOK_SIGN_IN_METHOD = 'facebook.com'
  Xn.PROVIDER_ID = 'facebook.com'
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Zn extends mo {
    constructor() {
      super('google.com'), this.addScope('profile')
    }
    static credential(t, n) {
      return Kr._fromParams({
        providerId: Zn.PROVIDER_ID,
        signInMethod: Zn.GOOGLE_SIGN_IN_METHOD,
        idToken: t,
        accessToken: n,
      })
    }
    static credentialFromResult(t) {
      return Zn.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
      return Zn.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
      if (!t) return null
      const { oauthIdToken: n, oauthAccessToken: r } = t
      if (!n && !r) return null
      try {
        return Zn.credential(n, r)
      } catch {
        return null
      }
    }
  }
  Zn.GOOGLE_SIGN_IN_METHOD = 'google.com'
  Zn.PROVIDER_ID = 'google.com'
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class er extends mo {
    constructor() {
      super('github.com')
    }
    static credential(t) {
      return Kr._fromParams({
        providerId: er.PROVIDER_ID,
        signInMethod: er.GITHUB_SIGN_IN_METHOD,
        accessToken: t,
      })
    }
    static credentialFromResult(t) {
      return er.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
      return er.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
      if (!t || !('oauthAccessToken' in t) || !t.oauthAccessToken) return null
      try {
        return er.credential(t.oauthAccessToken)
      } catch {
        return null
      }
    }
  }
  er.GITHUB_SIGN_IN_METHOD = 'github.com'
  er.PROVIDER_ID = 'github.com'
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class tr extends mo {
    constructor() {
      super('twitter.com')
    }
    static credential(t, n) {
      return Kr._fromParams({
        providerId: tr.PROVIDER_ID,
        signInMethod: tr.TWITTER_SIGN_IN_METHOD,
        oauthToken: t,
        oauthTokenSecret: n,
      })
    }
    static credentialFromResult(t) {
      return tr.credentialFromTaggedObject(t)
    }
    static credentialFromError(t) {
      return tr.credentialFromTaggedObject(t.customData || {})
    }
    static credentialFromTaggedObject({ _tokenResponse: t }) {
      if (!t) return null
      const { oauthAccessToken: n, oauthTokenSecret: r } = t
      if (!n || !r) return null
      try {
        return tr.credential(n, r)
      } catch {
        return null
      }
    }
  }
  tr.TWITTER_SIGN_IN_METHOD = 'twitter.com'
  tr.PROVIDER_ID = 'twitter.com'
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Yi {
    constructor(t) {
      ;(this.user = t.user),
        (this.providerId = t.providerId),
        (this._tokenResponse = t._tokenResponse),
        (this.operationType = t.operationType)
    }
    static async _fromIdTokenResponse(t, n, r, i = !1) {
      const s = await Fr._fromIdTokenResponse(t, r, i),
        o = qp(r)
      return new Yi({ user: s, providerId: o, _tokenResponse: r, operationType: n })
    }
    static async _forOperation(t, n, r) {
      await t._updateTokensIfNecessary(r, !0)
      const i = qp(r)
      return new Yi({ user: t, providerId: i, _tokenResponse: r, operationType: n })
    }
  }
  function qp(e) {
    return e.providerId ? e.providerId : 'phoneNumber' in e ? 'phone' : null
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Wa extends Er {
    constructor(t, n, r, i) {
      var s
      super(n.code, n.message),
        (this.operationType = r),
        (this.user = i),
        Object.setPrototypeOf(this, Wa.prototype),
        (this.customData = {
          appName: t.name,
          tenantId: (s = t.tenantId) !== null && s !== void 0 ? s : void 0,
          _serverResponse: n.customData._serverResponse,
          operationType: r,
        })
    }
    static _fromErrorAndOperation(t, n, r, i) {
      return new Wa(t, n, r, i)
    }
  }
  function Fy(e, t, n, r) {
    return (
      t === 'reauthenticate' ? n._getReauthenticationResolver(e) : n._getIdTokenResponse(e)
    ).catch((s) => {
      throw s.code === 'auth/multi-factor-auth-required' ? Wa._fromErrorAndOperation(e, s, t, r) : s
    })
  }
  async function AE(e, t, n = !1) {
    const r = await Xs(e, t._linkToIdToken(e.auth, await e.getIdToken()), n)
    return Yi._forOperation(e, 'link', r)
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function LE(e, t, n = !1) {
    var r
    const { auth: i } = e,
      s = 'reauthenticate'
    try {
      const o = await Xs(e, Fy(i, s, t, e), n)
      Q(o.idToken, i, 'internal-error')
      const a = Of(o.idToken)
      Q(a, i, 'internal-error')
      const { sub: l } = a
      return Q(e.uid === l, i, 'user-mismatch'), Yi._forOperation(e, s, o)
    } catch (o) {
      throw (
        (((r = o) === null || r === void 0 ? void 0 : r.code) === 'auth/user-not-found' &&
          on(i, 'user-mismatch'),
        o)
      )
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function $y(e, t, n = !1) {
    const r = 'signIn',
      i = await Fy(e, r, t),
      s = await Yi._fromIdTokenResponse(e, r, i)
    return n || (await e._updateCurrentUser(s.user)), s
  }
  async function bE(e, t) {
    return $y(Pf(e), t)
  }
  function UE(e, t, n) {
    return bE(Jr(e), Xi.credential(t, n))
  }
  function FE(e, t, n, r) {
    return Jr(e).onAuthStateChanged(t, n, r)
  }
  function $E(e) {
    return Jr(e).signOut()
  }
  const Ba = '__sak'
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class zy {
    constructor(t, n) {
      ;(this.storageRetriever = t), (this.type = n)
    }
    _isAvailable() {
      try {
        return this.storage
          ? (this.storage.setItem(Ba, '1'), this.storage.removeItem(Ba), Promise.resolve(!0))
          : Promise.resolve(!1)
      } catch {
        return Promise.resolve(!1)
      }
    }
    _set(t, n) {
      return this.storage.setItem(t, JSON.stringify(n)), Promise.resolve()
    }
    _get(t) {
      const n = this.storage.getItem(t)
      return Promise.resolve(n ? JSON.parse(n) : null)
    }
    _remove(t) {
      return this.storage.removeItem(t), Promise.resolve()
    }
    get storage() {
      return this.storageRetriever()
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function zE() {
    const e = ft()
    return Rf(e) || Ul(e)
  }
  const jE = 1e3,
    WE = 10
  class jy extends zy {
    constructor() {
      super(() => window.localStorage, 'LOCAL'),
        (this.boundEventHandler = (t, n) => this.onStorageEvent(t, n)),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.safariLocalStorageNotSynced = zE() && IE()),
        (this.fallbackToPolling = Ly()),
        (this._shouldAllowMigration = !0)
    }
    forAllChangedKeys(t) {
      for (const n of Object.keys(this.listeners)) {
        const r = this.storage.getItem(n),
          i = this.localCache[n]
        r !== i && t(n, i, r)
      }
    }
    onStorageEvent(t, n = !1) {
      if (!t.key) {
        this.forAllChangedKeys((o, a, l) => {
          this.notifyListeners(o, l)
        })
        return
      }
      const r = t.key
      if ((n ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)) {
        const o = this.storage.getItem(r)
        if (t.newValue !== o)
          t.newValue !== null ? this.storage.setItem(r, t.newValue) : this.storage.removeItem(r)
        else if (this.localCache[r] === t.newValue && !n) return
      }
      const i = () => {
          const o = this.storage.getItem(r)
          ;(!n && this.localCache[r] === o) || this.notifyListeners(r, o)
        },
        s = this.storage.getItem(r)
      EE() && s !== t.newValue && t.newValue !== t.oldValue ? setTimeout(i, WE) : i()
    }
    notifyListeners(t, n) {
      this.localCache[t] = n
      const r = this.listeners[t]
      if (r) for (const i of Array.from(r)) i(n && JSON.parse(n))
    }
    startPolling() {
      this.stopPolling(),
        (this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((t, n, r) => {
            this.onStorageEvent(
              new StorageEvent('storage', { key: t, oldValue: n, newValue: r }),
              !0
            )
          })
        }, jE))
    }
    stopPolling() {
      this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null))
    }
    attachListener() {
      window.addEventListener('storage', this.boundEventHandler)
    }
    detachListener() {
      window.removeEventListener('storage', this.boundEventHandler)
    }
    _addListener(t, n) {
      Object.keys(this.listeners).length === 0 &&
        (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
        this.listeners[t] ||
          ((this.listeners[t] = new Set()), (this.localCache[t] = this.storage.getItem(t))),
        this.listeners[t].add(n)
    }
    _removeListener(t, n) {
      this.listeners[t] &&
        (this.listeners[t].delete(n), this.listeners[t].size === 0 && delete this.listeners[t]),
        Object.keys(this.listeners).length === 0 && (this.detachListener(), this.stopPolling())
    }
    async _set(t, n) {
      await super._set(t, n), (this.localCache[t] = JSON.stringify(n))
    }
    async _get(t) {
      const n = await super._get(t)
      return (this.localCache[t] = JSON.stringify(n)), n
    }
    async _remove(t) {
      await super._remove(t), delete this.localCache[t]
    }
  }
  jy.type = 'LOCAL'
  const BE = jy
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Wy extends zy {
    constructor() {
      super(() => window.localStorage, 'SESSION')
    }
    _addListener(t, n) {}
    _removeListener(t, n) {}
  }
  Wy.type = 'SESSION'
  const By = Wy
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function YE(e) {
    return Promise.all(
      e.map(async (t) => {
        try {
          const n = await t
          return { fulfilled: !0, value: n }
        } catch (n) {
          return { fulfilled: !1, reason: n }
        }
      })
    )
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Fl {
    constructor(t) {
      ;(this.eventTarget = t),
        (this.handlersMap = {}),
        (this.boundEventHandler = this.handleEvent.bind(this))
    }
    static _getInstance(t) {
      const n = this.receivers.find((i) => i.isListeningto(t))
      if (n) return n
      const r = new Fl(t)
      return this.receivers.push(r), r
    }
    isListeningto(t) {
      return this.eventTarget === t
    }
    async handleEvent(t) {
      const n = t,
        { eventId: r, eventType: i, data: s } = n.data,
        o = this.handlersMap[i]
      if (!(o != null && o.size)) return
      n.ports[0].postMessage({ status: 'ack', eventId: r, eventType: i })
      const a = Array.from(o).map(async (u) => u(n.origin, s)),
        l = await YE(a)
      n.ports[0].postMessage({ status: 'done', eventId: r, eventType: i, response: l })
    }
    _subscribe(t, n) {
      Object.keys(this.handlersMap).length === 0 &&
        this.eventTarget.addEventListener('message', this.boundEventHandler),
        this.handlersMap[t] || (this.handlersMap[t] = new Set()),
        this.handlersMap[t].add(n)
    }
    _unsubscribe(t, n) {
      this.handlersMap[t] && n && this.handlersMap[t].delete(n),
        (!n || this.handlersMap[t].size === 0) && delete this.handlersMap[t],
        Object.keys(this.handlersMap).length === 0 &&
          this.eventTarget.removeEventListener('message', this.boundEventHandler)
    }
  }
  Fl.receivers = []
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Mf(e = '', t = 10) {
    let n = ''
    for (let r = 0; r < t; r++) n += Math.floor(Math.random() * 10)
    return e + n
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class HE {
    constructor(t) {
      ;(this.target = t), (this.handlers = new Set())
    }
    removeMessageHandler(t) {
      t.messageChannel &&
        (t.messageChannel.port1.removeEventListener('message', t.onMessage),
        t.messageChannel.port1.close()),
        this.handlers.delete(t)
    }
    async _send(t, n, r = 50) {
      const i = typeof MessageChannel < 'u' ? new MessageChannel() : null
      if (!i) throw new Error('connection_unavailable')
      let s, o
      return new Promise((a, l) => {
        const u = Mf('', 20)
        i.port1.start()
        const d = setTimeout(() => {
          l(new Error('unsupported_event'))
        }, r)
        ;(o = {
          messageChannel: i,
          onMessage(p) {
            const f = p
            if (f.data.eventId === u)
              switch (f.data.status) {
                case 'ack':
                  clearTimeout(d),
                    (s = setTimeout(() => {
                      l(new Error('timeout'))
                    }, 3e3))
                  break
                case 'done':
                  clearTimeout(s), a(f.data.response)
                  break
                default:
                  clearTimeout(d), clearTimeout(s), l(new Error('invalid_response'))
                  break
              }
          },
        }),
          this.handlers.add(o),
          i.port1.addEventListener('message', o.onMessage),
          this.target.postMessage({ eventType: t, eventId: u, data: n }, [i.port2])
      }).finally(() => {
        o && this.removeMessageHandler(o)
      })
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function yn() {
    return window
  }
  function VE(e) {
    yn().location.href = e
  }
  /**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function Yy() {
    return typeof yn().WorkerGlobalScope < 'u' && typeof yn().importScripts == 'function'
  }
  async function GE() {
    if (!(navigator != null && navigator.serviceWorker)) return null
    try {
      return (await navigator.serviceWorker.ready).active
    } catch {
      return null
    }
  }
  function KE() {
    var e
    return (
      ((e = navigator == null ? void 0 : navigator.serviceWorker) === null || e === void 0
        ? void 0
        : e.controller) || null
    )
  }
  function qE() {
    return Yy() ? self : null
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const Hy = 'firebaseLocalStorageDb',
    QE = 1,
    Ya = 'firebaseLocalStorage',
    Vy = 'fbase_key'
  class vo {
    constructor(t) {
      this.request = t
    }
    toPromise() {
      return new Promise((t, n) => {
        this.request.addEventListener('success', () => {
          t(this.request.result)
        }),
          this.request.addEventListener('error', () => {
            n(this.request.error)
          })
      })
    }
  }
  function $l(e, t) {
    return e.transaction([Ya], t ? 'readwrite' : 'readonly').objectStore(Ya)
  }
  function JE() {
    const e = indexedDB.deleteDatabase(Hy)
    return new vo(e).toPromise()
  }
  function ld() {
    const e = indexedDB.open(Hy, QE)
    return new Promise((t, n) => {
      e.addEventListener('error', () => {
        n(e.error)
      }),
        e.addEventListener('upgradeneeded', () => {
          const r = e.result
          try {
            r.createObjectStore(Ya, { keyPath: Vy })
          } catch (i) {
            n(i)
          }
        }),
        e.addEventListener('success', async () => {
          const r = e.result
          r.objectStoreNames.contains(Ya) ? t(r) : (r.close(), await JE(), t(await ld()))
        })
    })
  }
  async function Qp(e, t, n) {
    const r = $l(e, !0).put({ [Vy]: t, value: n })
    return new vo(r).toPromise()
  }
  async function XE(e, t) {
    const n = $l(e, !1).get(t),
      r = await new vo(n).toPromise()
    return r === void 0 ? null : r.value
  }
  function Jp(e, t) {
    const n = $l(e, !0).delete(t)
    return new vo(n).toPromise()
  }
  const ZE = 800,
    eI = 3
  class Gy {
    constructor() {
      ;(this.type = 'LOCAL'),
        (this._shouldAllowMigration = !0),
        (this.listeners = {}),
        (this.localCache = {}),
        (this.pollTimer = null),
        (this.pendingWrites = 0),
        (this.receiver = null),
        (this.sender = null),
        (this.serviceWorkerReceiverAvailable = !1),
        (this.activeServiceWorker = null),
        (this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(
          () => {},
          () => {}
        ))
    }
    async _openDb() {
      return this.db ? this.db : ((this.db = await ld()), this.db)
    }
    async _withRetries(t) {
      let n = 0
      for (;;)
        try {
          const r = await this._openDb()
          return await t(r)
        } catch (r) {
          if (n++ > eI) throw r
          this.db && (this.db.close(), (this.db = void 0))
        }
    }
    async initializeServiceWorkerMessaging() {
      return Yy() ? this.initializeReceiver() : this.initializeSender()
    }
    async initializeReceiver() {
      ;(this.receiver = Fl._getInstance(qE())),
        this.receiver._subscribe('keyChanged', async (t, n) => ({
          keyProcessed: (await this._poll()).includes(n.key),
        })),
        this.receiver._subscribe('ping', async (t, n) => ['keyChanged'])
    }
    async initializeSender() {
      var t, n
      if (((this.activeServiceWorker = await GE()), !this.activeServiceWorker)) return
      this.sender = new HE(this.activeServiceWorker)
      const r = await this.sender._send('ping', {}, 800)
      !r ||
        (((t = r[0]) === null || t === void 0 ? void 0 : t.fulfilled) &&
          ((n = r[0]) === null || n === void 0 ? void 0 : n.value.includes('keyChanged')) &&
          (this.serviceWorkerReceiverAvailable = !0))
    }
    async notifyServiceWorker(t) {
      if (!(!this.sender || !this.activeServiceWorker || KE() !== this.activeServiceWorker))
        try {
          await this.sender._send(
            'keyChanged',
            { key: t },
            this.serviceWorkerReceiverAvailable ? 800 : 50
          )
        } catch {}
    }
    async _isAvailable() {
      try {
        if (!indexedDB) return !1
        const t = await ld()
        return await Qp(t, Ba, '1'), await Jp(t, Ba), !0
      } catch {}
      return !1
    }
    async _withPendingWrite(t) {
      this.pendingWrites++
      try {
        await t()
      } finally {
        this.pendingWrites--
      }
    }
    async _set(t, n) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((r) => Qp(r, t, n)),
          (this.localCache[t] = n),
          this.notifyServiceWorker(t)
        )
      )
    }
    async _get(t) {
      const n = await this._withRetries((r) => XE(r, t))
      return (this.localCache[t] = n), n
    }
    async _remove(t) {
      return this._withPendingWrite(
        async () => (
          await this._withRetries((n) => Jp(n, t)),
          delete this.localCache[t],
          this.notifyServiceWorker(t)
        )
      )
    }
    async _poll() {
      const t = await this._withRetries((i) => {
        const s = $l(i, !1).getAll()
        return new vo(s).toPromise()
      })
      if (!t) return []
      if (this.pendingWrites !== 0) return []
      const n = [],
        r = new Set()
      for (const { fbase_key: i, value: s } of t)
        r.add(i),
          JSON.stringify(this.localCache[i]) !== JSON.stringify(s) &&
            (this.notifyListeners(i, s), n.push(i))
      for (const i of Object.keys(this.localCache))
        this.localCache[i] && !r.has(i) && (this.notifyListeners(i, null), n.push(i))
      return n
    }
    notifyListeners(t, n) {
      this.localCache[t] = n
      const r = this.listeners[t]
      if (r) for (const i of Array.from(r)) i(n)
    }
    startPolling() {
      this.stopPolling(), (this.pollTimer = setInterval(async () => this._poll(), ZE))
    }
    stopPolling() {
      this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null))
    }
    _addListener(t, n) {
      Object.keys(this.listeners).length === 0 && this.startPolling(),
        this.listeners[t] || ((this.listeners[t] = new Set()), this._get(t)),
        this.listeners[t].add(n)
    }
    _removeListener(t, n) {
      this.listeners[t] &&
        (this.listeners[t].delete(n), this.listeners[t].size === 0 && delete this.listeners[t]),
        Object.keys(this.listeners).length === 0 && this.stopPolling()
    }
  }
  Gy.type = 'LOCAL'
  const tI = Gy
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function nI() {
    var e, t
    return (t =
      (e = document.getElementsByTagName('head')) === null || e === void 0 ? void 0 : e[0]) !==
      null && t !== void 0
      ? t
      : document
  }
  function rI(e) {
    return new Promise((t, n) => {
      const r = document.createElement('script')
      r.setAttribute('src', e),
        (r.onload = t),
        (r.onerror = (i) => {
          const s = gn('internal-error')
          ;(s.customData = i), n(s)
        }),
        (r.type = 'text/javascript'),
        (r.charset = 'UTF-8'),
        nI().appendChild(r)
    })
  }
  function iI(e) {
    return `__${e}${Math.floor(Math.random() * 1e6)}`
  }
  new ho(3e4, 6e4)
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function sI(e, t) {
    return t ? Rn(t) : (Q(e._popupRedirectResolver, e, 'argument-error'), e._popupRedirectResolver)
  }
  /**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Af extends Df {
    constructor(t) {
      super('custom', 'custom'), (this.params = t)
    }
    _getIdTokenResponse(t) {
      return Pi(t, this._buildIdpRequest())
    }
    _linkToIdToken(t, n) {
      return Pi(t, this._buildIdpRequest(n))
    }
    _getReauthenticationResolver(t) {
      return Pi(t, this._buildIdpRequest())
    }
    _buildIdpRequest(t) {
      const n = {
        requestUri: this.params.requestUri,
        sessionId: this.params.sessionId,
        postBody: this.params.postBody,
        tenantId: this.params.tenantId,
        pendingToken: this.params.pendingToken,
        returnSecureToken: !0,
        returnIdpCredential: !0,
      }
      return t && (n.idToken = t), n
    }
  }
  function oI(e) {
    return $y(e.auth, new Af(e), e.bypassAuthState)
  }
  function aI(e) {
    const { auth: t, user: n } = e
    return Q(n, t, 'internal-error'), LE(n, new Af(e), e.bypassAuthState)
  }
  async function lI(e) {
    const { auth: t, user: n } = e
    return Q(n, t, 'internal-error'), AE(n, new Af(e), e.bypassAuthState)
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class Ky {
    constructor(t, n, r, i, s = !1) {
      ;(this.auth = t),
        (this.resolver = r),
        (this.user = i),
        (this.bypassAuthState = s),
        (this.pendingPromise = null),
        (this.eventManager = null),
        (this.filter = Array.isArray(n) ? n : [n])
    }
    execute() {
      return new Promise(async (t, n) => {
        this.pendingPromise = { resolve: t, reject: n }
        try {
          ;(this.eventManager = await this.resolver._initialize(this.auth)),
            await this.onExecution(),
            this.eventManager.registerConsumer(this)
        } catch (r) {
          this.reject(r)
        }
      })
    }
    async onAuthEvent(t) {
      const { urlResponse: n, sessionId: r, postBody: i, tenantId: s, error: o, type: a } = t
      if (o) {
        this.reject(o)
        return
      }
      const l = {
        auth: this.auth,
        requestUri: n,
        sessionId: r,
        tenantId: s || void 0,
        postBody: i || void 0,
        user: this.user,
        bypassAuthState: this.bypassAuthState,
      }
      try {
        this.resolve(await this.getIdpTask(a)(l))
      } catch (u) {
        this.reject(u)
      }
    }
    onError(t) {
      this.reject(t)
    }
    getIdpTask(t) {
      switch (t) {
        case 'signInViaPopup':
        case 'signInViaRedirect':
          return oI
        case 'linkViaPopup':
        case 'linkViaRedirect':
          return lI
        case 'reauthViaPopup':
        case 'reauthViaRedirect':
          return aI
        default:
          on(this.auth, 'internal-error')
      }
    }
    resolve(t) {
      Fn(this.pendingPromise, 'Pending promise was never set'),
        this.pendingPromise.resolve(t),
        this.unregisterAndCleanUp()
    }
    reject(t) {
      Fn(this.pendingPromise, 'Pending promise was never set'),
        this.pendingPromise.reject(t),
        this.unregisterAndCleanUp()
    }
    unregisterAndCleanUp() {
      this.eventManager && this.eventManager.unregisterConsumer(this),
        (this.pendingPromise = null),
        this.cleanUp()
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const uI = new ho(2e3, 1e4)
  class wi extends Ky {
    constructor(t, n, r, i, s) {
      super(t, n, i, s),
        (this.provider = r),
        (this.authWindow = null),
        (this.pollId = null),
        wi.currentPopupAction && wi.currentPopupAction.cancel(),
        (wi.currentPopupAction = this)
    }
    async executeNotNull() {
      const t = await this.execute()
      return Q(t, this.auth, 'internal-error'), t
    }
    async onExecution() {
      Fn(this.filter.length === 1, 'Popup operations only handle one event')
      const t = Mf()
      ;(this.authWindow = await this.resolver._openPopup(
        this.auth,
        this.provider,
        this.filter[0],
        t
      )),
        (this.authWindow.associatedEvent = t),
        this.resolver._originValidation(this.auth).catch((n) => {
          this.reject(n)
        }),
        this.resolver._isIframeWebStorageSupported(this.auth, (n) => {
          n || this.reject(gn(this.auth, 'web-storage-unsupported'))
        }),
        this.pollUserCancellation()
    }
    get eventId() {
      var t
      return ((t = this.authWindow) === null || t === void 0 ? void 0 : t.associatedEvent) || null
    }
    cancel() {
      this.reject(gn(this.auth, 'cancelled-popup-request'))
    }
    cleanUp() {
      this.authWindow && this.authWindow.close(),
        this.pollId && window.clearTimeout(this.pollId),
        (this.authWindow = null),
        (this.pollId = null),
        (wi.currentPopupAction = null)
    }
    pollUserCancellation() {
      const t = () => {
        var n, r
        if (
          !(
            (r = (n = this.authWindow) === null || n === void 0 ? void 0 : n.window) === null ||
            r === void 0
          ) &&
          r.closed
        ) {
          this.pollId = window.setTimeout(() => {
            ;(this.pollId = null), this.reject(gn(this.auth, 'popup-closed-by-user'))
          }, 2e3)
          return
        }
        this.pollId = window.setTimeout(t, uI.get())
      }
      t()
    }
  }
  wi.currentPopupAction = null
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const cI = 'pendingRedirect',
    ia = new Map()
  class dI extends Ky {
    constructor(t, n, r = !1) {
      super(
        t,
        ['signInViaRedirect', 'linkViaRedirect', 'reauthViaRedirect', 'unknown'],
        n,
        void 0,
        r
      ),
        (this.eventId = null)
    }
    async execute() {
      let t = ia.get(this.auth._key())
      if (!t) {
        try {
          const r = (await fI(this.resolver, this.auth)) ? await super.execute() : null
          t = () => Promise.resolve(r)
        } catch (n) {
          t = () => Promise.reject(n)
        }
        ia.set(this.auth._key(), t)
      }
      return this.bypassAuthState || ia.set(this.auth._key(), () => Promise.resolve(null)), t()
    }
    async onAuthEvent(t) {
      if (t.type === 'signInViaRedirect') return super.onAuthEvent(t)
      if (t.type === 'unknown') {
        this.resolve(null)
        return
      }
      if (t.eventId) {
        const n = await this.auth._redirectUserForId(t.eventId)
        if (n) return (this.user = n), super.onAuthEvent(t)
        this.resolve(null)
      }
    }
    async onExecution() {}
    cleanUp() {}
  }
  async function fI(e, t) {
    const n = mI(t),
      r = pI(e)
    if (!(await r._isAvailable())) return !1
    const i = (await r._get(n)) === 'true'
    return await r._remove(n), i
  }
  function hI(e, t) {
    ia.set(e._key(), t)
  }
  function pI(e) {
    return Rn(e._redirectPersistence)
  }
  function mI(e) {
    return ra(cI, e.config.apiKey, e.name)
  }
  async function vI(e, t, n = !1) {
    const r = Pf(e),
      i = sI(r, t),
      o = await new dI(r, i, n).execute()
    return (
      o &&
        !n &&
        (delete o.user._redirectEventId,
        await r._persistUserIfCurrent(o.user),
        await r._setRedirectUser(null, t)),
      o
    )
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const gI = 10 * 60 * 1e3
  class yI {
    constructor(t) {
      ;(this.auth = t),
        (this.cachedEventUids = new Set()),
        (this.consumers = new Set()),
        (this.queuedRedirectEvent = null),
        (this.hasHandledPotentialRedirect = !1),
        (this.lastProcessedEventTime = Date.now())
    }
    registerConsumer(t) {
      this.consumers.add(t),
        this.queuedRedirectEvent &&
          this.isEventForConsumer(this.queuedRedirectEvent, t) &&
          (this.sendToConsumer(this.queuedRedirectEvent, t),
          this.saveEventToCache(this.queuedRedirectEvent),
          (this.queuedRedirectEvent = null))
    }
    unregisterConsumer(t) {
      this.consumers.delete(t)
    }
    onEvent(t) {
      if (this.hasEventBeenHandled(t)) return !1
      let n = !1
      return (
        this.consumers.forEach((r) => {
          this.isEventForConsumer(t, r) &&
            ((n = !0), this.sendToConsumer(t, r), this.saveEventToCache(t))
        }),
        this.hasHandledPotentialRedirect ||
          !_I(t) ||
          ((this.hasHandledPotentialRedirect = !0),
          n || ((this.queuedRedirectEvent = t), (n = !0))),
        n
      )
    }
    sendToConsumer(t, n) {
      var r
      if (t.error && !qy(t)) {
        const i =
          ((r = t.error.code) === null || r === void 0 ? void 0 : r.split('auth/')[1]) ||
          'internal-error'
        n.onError(gn(this.auth, i))
      } else n.onAuthEvent(t)
    }
    isEventForConsumer(t, n) {
      const r = n.eventId === null || (!!t.eventId && t.eventId === n.eventId)
      return n.filter.includes(t.type) && r
    }
    hasEventBeenHandled(t) {
      return (
        Date.now() - this.lastProcessedEventTime >= gI && this.cachedEventUids.clear(),
        this.cachedEventUids.has(Xp(t))
      )
    }
    saveEventToCache(t) {
      this.cachedEventUids.add(Xp(t)), (this.lastProcessedEventTime = Date.now())
    }
  }
  function Xp(e) {
    return [e.type, e.eventId, e.sessionId, e.tenantId].filter((t) => t).join('-')
  }
  function qy({ type: e, error: t }) {
    return e === 'unknown' && (t == null ? void 0 : t.code) === 'auth/no-auth-event'
  }
  function _I(e) {
    switch (e.type) {
      case 'signInViaRedirect':
      case 'linkViaRedirect':
      case 'reauthViaRedirect':
        return !0
      case 'unknown':
        return qy(e)
      default:
        return !1
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ async function wI(e, t = {}) {
    return po(e, 'GET', '/v1/projects', t)
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const SI = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
    kI = /^https?/
  async function EI(e) {
    if (e.config.emulator) return
    const { authorizedDomains: t } = await wI(e)
    for (const n of t)
      try {
        if (II(n)) return
      } catch {}
    on(e, 'unauthorized-domain')
  }
  function II(e) {
    const t = ad(),
      { protocol: n, hostname: r } = new URL(t)
    if (e.startsWith('chrome-extension://')) {
      const o = new URL(e)
      return o.hostname === '' && r === ''
        ? n === 'chrome-extension:' &&
            e.replace('chrome-extension://', '') === t.replace('chrome-extension://', '')
        : n === 'chrome-extension:' && o.hostname === r
    }
    if (!kI.test(n)) return !1
    if (SI.test(e)) return r === e
    const i = e.replace(/\./g, '\\.')
    return new RegExp('^(.+\\.' + i + '|' + i + ')$', 'i').test(r)
  }
  /**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const TI = new ho(3e4, 6e4)
  function Zp() {
    const e = yn().___jsl
    if (e != null && e.H) {
      for (const t of Object.keys(e.H))
        if (
          ((e.H[t].r = e.H[t].r || []),
          (e.H[t].L = e.H[t].L || []),
          (e.H[t].r = [...e.H[t].L]),
          e.CP)
        )
          for (let n = 0; n < e.CP.length; n++) e.CP[n] = null
    }
  }
  function CI(e) {
    return new Promise((t, n) => {
      var r, i, s
      function o() {
        Zp(),
          gapi.load('gapi.iframes', {
            callback: () => {
              t(gapi.iframes.getContext())
            },
            ontimeout: () => {
              Zp(), n(gn(e, 'network-request-failed'))
            },
            timeout: TI.get(),
          })
      }
      if (
        !(
          (i = (r = yn().gapi) === null || r === void 0 ? void 0 : r.iframes) === null ||
          i === void 0
        ) &&
        i.Iframe
      )
        t(gapi.iframes.getContext())
      else if (!((s = yn().gapi) === null || s === void 0) && s.load) o()
      else {
        const a = iI('iframefcb')
        return (
          (yn()[a] = () => {
            gapi.load ? o() : n(gn(e, 'network-request-failed'))
          }),
          rI(`https://apis.google.com/js/api.js?onload=${a}`).catch((l) => n(l))
        )
      }
    }).catch((t) => {
      throw ((sa = null), t)
    })
  }
  let sa = null
  function xI(e) {
    return (sa = sa || CI(e)), sa
  }
  /**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const OI = new ho(5e3, 15e3),
    RI = '__/auth/iframe',
    PI = 'emulator/auth/iframe',
    DI = {
      style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' },
      'aria-hidden': 'true',
      tabindex: '-1',
    },
    NI = new Map([
      ['identitytoolkit.googleapis.com', 'p'],
      ['staging-identitytoolkit.sandbox.googleapis.com', 's'],
      ['test-identitytoolkit.sandbox.googleapis.com', 't'],
    ])
  function MI(e) {
    const t = e.config
    Q(t.authDomain, e, 'auth-domain-config-required')
    const n = t.emulator ? xf(t, PI) : `https://${e.config.authDomain}/${RI}`,
      r = { apiKey: t.apiKey, appName: e.name, v: Al },
      i = NI.get(e.config.apiHost)
    i && (r.eid = i)
    const s = e._getFrameworks()
    return s.length && (r.fw = s.join(',')), `${n}?${fo(r).slice(1)}`
  }
  async function AI(e) {
    const t = await xI(e),
      n = yn().gapi
    return (
      Q(n, e, 'internal-error'),
      t.open(
        {
          where: document.body,
          url: MI(e),
          messageHandlersFilter: n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
          attributes: DI,
          dontclear: !0,
        },
        (r) =>
          new Promise(async (i, s) => {
            await r.restyle({ setHideOnLeave: !1 })
            const o = gn(e, 'network-request-failed'),
              a = yn().setTimeout(() => {
                s(o)
              }, OI.get())
            function l() {
              yn().clearTimeout(a), i(r)
            }
            r.ping(l).then(l, () => {
              s(o)
            })
          })
      )
    )
  }
  /**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const LI = { location: 'yes', resizable: 'yes', statusbar: 'yes', toolbar: 'no' },
    bI = 500,
    UI = 600,
    FI = '_blank',
    $I = 'http://localhost'
  class em {
    constructor(t) {
      ;(this.window = t), (this.associatedEvent = null)
    }
    close() {
      if (this.window)
        try {
          this.window.close()
        } catch {}
    }
  }
  function zI(e, t, n, r = bI, i = UI) {
    const s = Math.max((window.screen.availHeight - i) / 2, 0).toString(),
      o = Math.max((window.screen.availWidth - r) / 2, 0).toString()
    let a = ''
    const l = Object.assign(Object.assign({}, LI), {
        width: r.toString(),
        height: i.toString(),
        top: s,
        left: o,
      }),
      u = ft().toLowerCase()
    n && (a = Py(u) ? FI : n), Ry(u) && ((t = t || $I), (l.scrollbars = 'yes'))
    const d = Object.entries(l).reduce((f, [S, k]) => `${f}${S}=${k},`, '')
    if (kE(u) && a !== '_self') return jI(t || '', a), new em(null)
    const p = window.open(t || '', a, d)
    Q(p, e, 'popup-blocked')
    try {
      p.focus()
    } catch {}
    return new em(p)
  }
  function jI(e, t) {
    const n = document.createElement('a')
    ;(n.href = e), (n.target = t)
    const r = document.createEvent('MouseEvent')
    r.initMouseEvent('click', !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null),
      n.dispatchEvent(r)
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const WI = '__/auth/handler',
    BI = 'emulator/auth/handler'
  function tm(e, t, n, r, i, s) {
    Q(e.config.authDomain, e, 'auth-domain-config-required'),
      Q(e.config.apiKey, e, 'invalid-api-key')
    const o = {
      apiKey: e.config.apiKey,
      appName: e.name,
      authType: n,
      redirectUrl: r,
      v: Al,
      eventId: i,
    }
    if (t instanceof Uy) {
      t.setDefaultLanguage(e.languageCode),
        (o.providerId = t.providerId || ''),
        BS(t.getCustomParameters()) ||
          (o.customParameters = JSON.stringify(t.getCustomParameters()))
      for (const [l, u] of Object.entries(s || {})) o[l] = u
    }
    if (t instanceof mo) {
      const l = t.getScopes().filter((u) => u !== '')
      l.length > 0 && (o.scopes = l.join(','))
    }
    e.tenantId && (o.tid = e.tenantId)
    const a = o
    for (const l of Object.keys(a)) a[l] === void 0 && delete a[l]
    return `${YI(e)}?${fo(a).slice(1)}`
  }
  function YI({ config: e }) {
    return e.emulator ? xf(e, BI) : `https://${e.authDomain}/${WI}`
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const $u = 'webStorageSupport'
  class HI {
    constructor() {
      ;(this.eventManagers = {}),
        (this.iframes = {}),
        (this.originValidationPromises = {}),
        (this._redirectPersistence = By),
        (this._completeRedirectFn = vI),
        (this._overrideRedirectResult = hI)
    }
    async _openPopup(t, n, r, i) {
      var s
      Fn(
        (s = this.eventManagers[t._key()]) === null || s === void 0 ? void 0 : s.manager,
        '_initialize() not called before _openPopup()'
      )
      const o = tm(t, n, r, ad(), i)
      return zI(t, o, Mf())
    }
    async _openRedirect(t, n, r, i) {
      return await this._originValidation(t), VE(tm(t, n, r, ad(), i)), new Promise(() => {})
    }
    _initialize(t) {
      const n = t._key()
      if (this.eventManagers[n]) {
        const { manager: i, promise: s } = this.eventManagers[n]
        return i ? Promise.resolve(i) : (Fn(s, 'If manager is not set, promise should be'), s)
      }
      const r = this.initAndGetManager(t)
      return (
        (this.eventManagers[n] = { promise: r }),
        r.catch(() => {
          delete this.eventManagers[n]
        }),
        r
      )
    }
    async initAndGetManager(t) {
      const n = await AI(t),
        r = new yI(t)
      return (
        n.register(
          'authEvent',
          (i) => (
            Q(i == null ? void 0 : i.authEvent, t, 'invalid-auth-event'),
            { status: r.onEvent(i.authEvent) ? 'ACK' : 'ERROR' }
          ),
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        ),
        (this.eventManagers[t._key()] = { manager: r }),
        (this.iframes[t._key()] = n),
        r
      )
    }
    _isIframeWebStorageSupported(t, n) {
      this.iframes[t._key()].send(
        $u,
        { type: $u },
        (i) => {
          var s
          const o = (s = i == null ? void 0 : i[0]) === null || s === void 0 ? void 0 : s[$u]
          o !== void 0 && n(!!o), on(t, 'internal-error')
        },
        gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
      )
    }
    _originValidation(t) {
      const n = t._key()
      return (
        this.originValidationPromises[n] || (this.originValidationPromises[n] = EI(t)),
        this.originValidationPromises[n]
      )
    }
    get _shouldInitProactively() {
      return Ly() || Rf() || Ul()
    }
  }
  const VI = HI
  var nm = '@firebase/auth',
    rm = '0.20.5'
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ class GI {
    constructor(t) {
      ;(this.auth = t), (this.internalListeners = new Map())
    }
    getUid() {
      var t
      return (
        this.assertAuthConfigured(),
        ((t = this.auth.currentUser) === null || t === void 0 ? void 0 : t.uid) || null
      )
    }
    async getToken(t) {
      return (
        this.assertAuthConfigured(),
        await this.auth._initializationPromise,
        this.auth.currentUser ? { accessToken: await this.auth.currentUser.getIdToken(t) } : null
      )
    }
    addAuthTokenListener(t) {
      if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return
      const n = this.auth.onIdTokenChanged((r) => {
        var i
        t(((i = r) === null || i === void 0 ? void 0 : i.stsTokenManager.accessToken) || null)
      })
      this.internalListeners.set(t, n), this.updateProactiveRefresh()
    }
    removeAuthTokenListener(t) {
      this.assertAuthConfigured()
      const n = this.internalListeners.get(t)
      !n || (this.internalListeners.delete(t), n(), this.updateProactiveRefresh())
    }
    assertAuthConfigured() {
      Q(this.auth._initializationPromise, 'dependent-sdk-initialized-before-auth')
    }
    updateProactiveRefresh() {
      this.internalListeners.size > 0
        ? this.auth._startProactiveRefresh()
        : this.auth._stopProactiveRefresh()
    }
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function KI(e) {
    switch (e) {
      case 'Node':
        return 'node'
      case 'ReactNative':
        return 'rn'
      case 'Worker':
        return 'webworker'
      case 'Cordova':
        return 'cordova'
      default:
        return
    }
  }
  function qI(e) {
    Qs(
      new Bi(
        'auth',
        (t, { options: n }) => {
          const r = t.getProvider('app').getImmediate(),
            i = t.getProvider('heartbeat'),
            { apiKey: s, authDomain: o } = r.options
          return ((a, l) => {
            Q(s && !s.includes(':'), 'invalid-api-key', { appName: a.name }),
              Q(!(o != null && o.includes(':')), 'argument-error', { appName: a.name })
            const u = {
                apiKey: s,
                authDomain: o,
                clientPlatform: e,
                apiHost: 'identitytoolkit.googleapis.com',
                tokenApiHost: 'securetoken.googleapis.com',
                apiScheme: 'https',
                sdkClientVersion: by(e),
              },
              d = new CE(a, l, u)
            return sE(d, n), d
          })(r, i)
        },
        'PUBLIC'
      )
        .setInstantiationMode('EXPLICIT')
        .setInstanceCreatedCallback((t, n, r) => {
          t.getProvider('auth-internal').initialize()
        })
    ),
      Qs(
        new Bi(
          'auth-internal',
          (t) => {
            const n = Pf(t.getProvider('auth').getImmediate())
            return ((r) => new GI(r))(n)
          },
          'PRIVATE'
        ).setInstantiationMode('EXPLICIT')
      ),
      Oi(nm, rm, KI(e)),
      Oi(nm, rm, 'esm2017')
  }
  /**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ function QI(e = Yk()) {
    const t = _y(e, 'auth')
    return t.isInitialized()
      ? t.getImmediate()
      : iE(e, { popupRedirectResolver: VI, persistence: [tI, BE, By] })
  }
  qI('Browser')
  const JI = {
      apiKey: 'AIzaSyDMlrEAhmIOhX38iDJ61_BrFpRxURHjwMM',
      authDomain: 'mechan-omnibus.firebaseapp.com',
      databaseURL: 'https://mechan-omnibus-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'mechan-omnibus',
      storageBucket: 'mechan-omnibus.appspot.com',
      messagingSenderId: '1056393577053',
      appId: '1:1056393577053:web:3273c38d935c65f26083b4',
      measurementId: 'G-NFTS6B066K',
    },
    XI = Bk(JI),
    Lf = QI(XI)
  var zl = { exports: {} },
    jl = {}
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ZI = X.exports,
    eT = Symbol.for('react.element'),
    tT = Symbol.for('react.fragment'),
    nT = Object.prototype.hasOwnProperty,
    rT = ZI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    iT = { key: !0, ref: !0, __self: !0, __source: !0 }
  function Qy(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null
    n !== void 0 && (s = '' + n),
      t.key !== void 0 && (s = '' + t.key),
      t.ref !== void 0 && (o = t.ref)
    for (r in t) nT.call(t, r) && !iT.hasOwnProperty(r) && (i[r] = t[r])
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
    return { $$typeof: eT, type: e, key: s, ref: o, props: i, _owner: rT.current }
  }
  jl.Fragment = tT
  jl.jsx = Qy
  jl.jsxs = Qy
  ;(function (e) {
    e.exports = jl
  })(zl)
  const im = zl.exports.Fragment,
    ie = zl.exports.jsx,
    Hi = zl.exports.jsxs,
    Jy = X.exports.createContext({}),
    sT = ({ children: e }) => {
      const [t, n] = X.exports.useState(null),
        [r, i] = X.exports.useState(!0)
      FE(Lf, (o) => {
        o ? (n(o), i(!1)) : (n(null), i(!1))
      })
      const s = t
      return ie(Jy.Provider, { value: s, children: r ? null : e })
    },
    oT = ({ children: e, unauth: t }) => {
      const n = X.exports.useContext(Jy)
      return n != null && n.uid ? e : t
    },
    aT = jn.div`
  width: 100vw;
  height: 100vh;
  background-color: #eee;
`,
    lT = jn.div`
  width: 100%;
  height: 100px;

  padding: 25px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 40px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;

  button {
    width: 125px;
    height: 50px;

    background-color: #00a7e1;

    border: none;
    border-radius: 10px;

    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;

    cursor: pointer;

    &:hover {
      border: 4px solid #111;
    }
  }
`,
    uT = (e) => ie(lT, { children: e.children }),
    cT = jn.div`
  width: 100%;
  height: 80%;

  margin-top: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
`,
    dT = jn.ul`
  width: 75%;
  height: fit-content;
  min-height: 250px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Nunito', sans-serif;
`,
    fT = jn.li`
  width: 100%;
  height: 100px;
  position: relative;

  padding: 10px;
  margin-bottom: 20px;
  border: 5px solid #222;
  border-radius: 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 22px;
  font-weight: bold;

  span {
    margin-left: 20px;
  }

  button {
    width: 100px;
    height: 50px;

    background-color: #df2935;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.5);

    border: none;
    border-radius: 10px;

    font-size: 20px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #eee;

    position: absolute;
    right: 10px;

    cursor: pointer;

    &:hover {
      border: 4px solid #111;
    }
  }
` //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var Xy
  function b() {
    return Xy.apply(null, arguments)
  }
  function hT(e) {
    Xy = e
  }
  function an(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === '[object Array]'
  }
  function $r(e) {
    return e != null && Object.prototype.toString.call(e) === '[object Object]'
  }
  function pe(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }
  function bf(e) {
    if (Object.getOwnPropertyNames) return Object.getOwnPropertyNames(e).length === 0
    var t
    for (t in e) if (pe(e, t)) return !1
    return !0
  }
  function wt(e) {
    return e === void 0
  }
  function $n(e) {
    return typeof e == 'number' || Object.prototype.toString.call(e) === '[object Number]'
  }
  function go(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === '[object Date]'
  }
  function Zy(e, t) {
    var n = [],
      r,
      i = e.length
    for (r = 0; r < i; ++r) n.push(t(e[r], r))
    return n
  }
  function ir(e, t) {
    for (var n in t) pe(t, n) && (e[n] = t[n])
    return (
      pe(t, 'toString') && (e.toString = t.toString), pe(t, 'valueOf') && (e.valueOf = t.valueOf), e
    )
  }
  function wn(e, t, n, r) {
    return E0(e, t, n, r, !0).utc()
  }
  function pT() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1,
    }
  }
  function ee(e) {
    return e._pf == null && (e._pf = pT()), e._pf
  }
  var ud
  Array.prototype.some
    ? (ud = Array.prototype.some)
    : (ud = function (e) {
        var t = Object(this),
          n = t.length >>> 0,
          r
        for (r = 0; r < n; r++) if (r in t && e.call(this, t[r], r, t)) return !0
        return !1
      })
  function Uf(e) {
    if (e._isValid == null) {
      var t = ee(e),
        n = ud.call(t.parsedDateParts, function (i) {
          return i != null
        }),
        r =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidEra &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n))
      if (
        (e._strict &&
          (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0),
        Object.isFrozen == null || !Object.isFrozen(e))
      )
        e._isValid = r
      else return r
    }
    return e._isValid
  }
  function Wl(e) {
    var t = wn(NaN)
    return e != null ? ir(ee(t), e) : (ee(t).userInvalidated = !0), t
  }
  var sm = (b.momentProperties = []),
    zu = !1
  function Ff(e, t) {
    var n,
      r,
      i,
      s = sm.length
    if (
      (wt(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      wt(t._i) || (e._i = t._i),
      wt(t._f) || (e._f = t._f),
      wt(t._l) || (e._l = t._l),
      wt(t._strict) || (e._strict = t._strict),
      wt(t._tzm) || (e._tzm = t._tzm),
      wt(t._isUTC) || (e._isUTC = t._isUTC),
      wt(t._offset) || (e._offset = t._offset),
      wt(t._pf) || (e._pf = ee(t)),
      wt(t._locale) || (e._locale = t._locale),
      s > 0)
    )
      for (n = 0; n < s; n++) (r = sm[n]), (i = t[r]), wt(i) || (e[r] = i)
    return e
  }
  function yo(e) {
    Ff(this, e),
      (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      zu === !1 && ((zu = !0), b.updateOffset(this), (zu = !1))
  }
  function ln(e) {
    return e instanceof yo || (e != null && e._isAMomentObject != null)
  }
  function e0(e) {
    b.suppressDeprecationWarnings === !1 &&
      typeof console < 'u' &&
      console.warn &&
      console.warn('Deprecation warning: ' + e)
  }
  function Vt(e, t) {
    var n = !0
    return ir(function () {
      if ((b.deprecationHandler != null && b.deprecationHandler(null, e), n)) {
        var r = [],
          i,
          s,
          o,
          a = arguments.length
        for (s = 0; s < a; s++) {
          if (((i = ''), typeof arguments[s] == 'object')) {
            i +=
              `
[` +
              s +
              '] '
            for (o in arguments[0]) pe(arguments[0], o) && (i += o + ': ' + arguments[0][o] + ', ')
            i = i.slice(0, -2)
          } else i = arguments[s]
          r.push(i)
        }
        e0(
          e +
            `
Arguments: ` +
            Array.prototype.slice.call(r).join('') +
            `
` +
            new Error().stack
        ),
          (n = !1)
      }
      return t.apply(this, arguments)
    }, t)
  }
  var om = {}
  function t0(e, t) {
    b.deprecationHandler != null && b.deprecationHandler(e, t), om[e] || (e0(t), (om[e] = !0))
  }
  b.suppressDeprecationWarnings = !1
  b.deprecationHandler = null
  function Sn(e) {
    return (
      (typeof Function < 'u' && e instanceof Function) ||
      Object.prototype.toString.call(e) === '[object Function]'
    )
  }
  function mT(e) {
    var t, n
    for (n in e) pe(e, n) && ((t = e[n]), Sn(t) ? (this[n] = t) : (this['_' + n] = t))
    ;(this._config = e),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source
      ))
  }
  function cd(e, t) {
    var n = ir({}, e),
      r
    for (r in t)
      pe(t, r) &&
        ($r(e[r]) && $r(t[r])
          ? ((n[r] = {}), ir(n[r], e[r]), ir(n[r], t[r]))
          : t[r] != null
          ? (n[r] = t[r])
          : delete n[r])
    for (r in e) pe(e, r) && !pe(t, r) && $r(e[r]) && (n[r] = ir({}, n[r]))
    return n
  }
  function $f(e) {
    e != null && this.set(e)
  }
  var dd
  Object.keys
    ? (dd = Object.keys)
    : (dd = function (e) {
        var t,
          n = []
        for (t in e) pe(e, t) && n.push(t)
        return n
      })
  var vT = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L',
  }
  function gT(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse
    return Sn(r) ? r.call(t, n) : r
  }
  function _n(e, t, n) {
    var r = '' + Math.abs(e),
      i = t - r.length,
      s = e >= 0
    return (s ? (n ? '+' : '') : '-') + Math.pow(10, Math.max(0, i)).toString().substr(1) + r
  }
  var zf =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    jo = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    ju = {},
    Di = {}
  function Y(e, t, n, r) {
    var i = r
    typeof r == 'string' &&
      (i = function () {
        return this[r]()
      }),
      e && (Di[e] = i),
      t &&
        (Di[t[0]] = function () {
          return _n(i.apply(this, arguments), t[1], t[2])
        }),
      n &&
        (Di[n] = function () {
          return this.localeData().ordinal(i.apply(this, arguments), e)
        })
  }
  function yT(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '') : e.replace(/\\/g, '')
  }
  function _T(e) {
    var t = e.match(zf),
      n,
      r
    for (n = 0, r = t.length; n < r; n++) Di[t[n]] ? (t[n] = Di[t[n]]) : (t[n] = yT(t[n]))
    return function (i) {
      var s = '',
        o
      for (o = 0; o < r; o++) s += Sn(t[o]) ? t[o].call(i, e) : t[o]
      return s
    }
  }
  function oa(e, t) {
    return e.isValid()
      ? ((t = n0(t, e.localeData())), (ju[t] = ju[t] || _T(t)), ju[t](e))
      : e.localeData().invalidDate()
  }
  function n0(e, t) {
    var n = 5
    function r(i) {
      return t.longDateFormat(i) || i
    }
    for (jo.lastIndex = 0; n >= 0 && jo.test(e); )
      (e = e.replace(jo, r)), (jo.lastIndex = 0), (n -= 1)
    return e
  }
  var wT = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
  }
  function ST(e) {
    var t = this._longDateFormat[e],
      n = this._longDateFormat[e.toUpperCase()]
    return t || !n
      ? t
      : ((this._longDateFormat[e] = n
          .match(zf)
          .map(function (r) {
            return r === 'MMMM' || r === 'MM' || r === 'DD' || r === 'dddd' ? r.slice(1) : r
          })
          .join('')),
        this._longDateFormat[e])
  }
  var kT = 'Invalid date'
  function ET() {
    return this._invalidDate
  }
  var IT = '%d',
    TT = /\d{1,2}/
  function CT(e) {
    return this._ordinal.replace('%d', e)
  }
  var xT = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
  }
  function OT(e, t, n, r) {
    var i = this._relativeTime[n]
    return Sn(i) ? i(e, t, n, r) : i.replace(/%d/i, e)
  }
  function RT(e, t) {
    var n = this._relativeTime[e > 0 ? 'future' : 'past']
    return Sn(n) ? n(t) : n.replace(/%s/i, t)
  }
  var Ps = {}
  function ht(e, t) {
    var n = e.toLowerCase()
    Ps[n] = Ps[n + 's'] = Ps[t] = e
  }
  function Gt(e) {
    return typeof e == 'string' ? Ps[e] || Ps[e.toLowerCase()] : void 0
  }
  function jf(e) {
    var t = {},
      n,
      r
    for (r in e) pe(e, r) && ((n = Gt(r)), n && (t[n] = e[r]))
    return t
  }
  var r0 = {}
  function pt(e, t) {
    r0[e] = t
  }
  function PT(e) {
    var t = [],
      n
    for (n in e) pe(e, n) && t.push({ unit: n, priority: r0[n] })
    return (
      t.sort(function (r, i) {
        return r.priority - i.priority
      }),
      t
    )
  }
  function Bl(e) {
    return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0
  }
  function zt(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
  }
  function ne(e) {
    var t = +e,
      n = 0
    return t !== 0 && isFinite(t) && (n = zt(t)), n
  }
  function Zi(e, t) {
    return function (n) {
      return n != null ? (i0(this, e, n), b.updateOffset(this, t), this) : Ha(this, e)
    }
  }
  function Ha(e, t) {
    return e.isValid() ? e._d['get' + (e._isUTC ? 'UTC' : '') + t]() : NaN
  }
  function i0(e, t, n) {
    e.isValid() &&
      !isNaN(n) &&
      (t === 'FullYear' && Bl(e.year()) && e.month() === 1 && e.date() === 29
        ? ((n = ne(n)), e._d['set' + (e._isUTC ? 'UTC' : '') + t](n, e.month(), ql(n, e.month())))
        : e._d['set' + (e._isUTC ? 'UTC' : '') + t](n))
  }
  function DT(e) {
    return (e = Gt(e)), Sn(this[e]) ? this[e]() : this
  }
  function NT(e, t) {
    if (typeof e == 'object') {
      e = jf(e)
      var n = PT(e),
        r,
        i = n.length
      for (r = 0; r < i; r++) this[n[r].unit](e[n[r].unit])
    } else if (((e = Gt(e)), Sn(this[e]))) return this[e](t)
    return this
  }
  var s0 = /\d/,
    Ut = /\d\d/,
    o0 = /\d{3}/,
    Wf = /\d{4}/,
    Yl = /[+-]?\d{6}/,
    Re = /\d\d?/,
    a0 = /\d\d\d\d?/,
    l0 = /\d\d\d\d\d\d?/,
    Hl = /\d{1,3}/,
    Bf = /\d{1,4}/,
    Vl = /[+-]?\d{1,6}/,
    es = /\d+/,
    Gl = /[+-]?\d+/,
    MT = /Z|[+-]\d\d:?\d\d/gi,
    Kl = /Z|[+-]\d\d(?::?\d\d)?/gi,
    AT = /[+-]?\d+(\.\d{1,3})?/,
    _o =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    Va
  Va = {}
  function $(e, t, n) {
    Va[e] = Sn(t)
      ? t
      : function (r, i) {
          return r && n ? n : t
        }
  }
  function LT(e, t) {
    return pe(Va, e) ? Va[e](t._strict, t._locale) : new RegExp(bT(e))
  }
  function bT(e) {
    return Pt(
      e.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, n, r, i, s) {
        return n || r || i || s
      })
    )
  }
  function Pt(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  var fd = {}
  function ke(e, t) {
    var n,
      r = t,
      i
    for (
      typeof e == 'string' && (e = [e]),
        $n(t) &&
          (r = function (s, o) {
            o[t] = ne(s)
          }),
        i = e.length,
        n = 0;
      n < i;
      n++
    )
      fd[e[n]] = r
  }
  function wo(e, t) {
    ke(e, function (n, r, i, s) {
      ;(i._w = i._w || {}), t(n, i._w, i, s)
    })
  }
  function UT(e, t, n) {
    t != null && pe(fd, e) && fd[e](t, n._a, n, e)
  }
  var ct = 0,
    Pn = 1,
    hn = 2,
    qe = 3,
    tn = 4,
    Dn = 5,
    Ar = 6,
    FT = 7,
    $T = 8
  function zT(e, t) {
    return ((e % t) + t) % t
  }
  var ze
  Array.prototype.indexOf
    ? (ze = Array.prototype.indexOf)
    : (ze = function (e) {
        var t
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t
        return -1
      })
  function ql(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN
    var n = zT(t, 12)
    return (e += (t - n) / 12), n === 1 ? (Bl(e) ? 29 : 28) : 31 - ((n % 7) % 2)
  }
  Y('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1
  })
  Y('MMM', 0, 0, function (e) {
    return this.localeData().monthsShort(this, e)
  })
  Y('MMMM', 0, 0, function (e) {
    return this.localeData().months(this, e)
  })
  ht('month', 'M')
  pt('month', 8)
  $('M', Re)
  $('MM', Re, Ut)
  $('MMM', function (e, t) {
    return t.monthsShortRegex(e)
  })
  $('MMMM', function (e, t) {
    return t.monthsRegex(e)
  })
  ke(['M', 'MM'], function (e, t) {
    t[Pn] = ne(e) - 1
  })
  ke(['MMM', 'MMMM'], function (e, t, n, r) {
    var i = n._locale.monthsParse(e, r, n._strict)
    i != null ? (t[Pn] = i) : (ee(n).invalidMonth = e)
  })
  var jT =
      'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
      ),
    u0 = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    c0 = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    WT = _o,
    BT = _o
  function YT(e, t) {
    return e
      ? an(this._months)
        ? this._months[e.month()]
        : this._months[(this._months.isFormat || c0).test(t) ? 'format' : 'standalone'][e.month()]
      : an(this._months)
      ? this._months
      : this._months.standalone
  }
  function HT(e, t) {
    return e
      ? an(this._monthsShort)
        ? this._monthsShort[e.month()]
        : this._monthsShort[c0.test(t) ? 'format' : 'standalone'][e.month()]
      : an(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone
  }
  function VT(e, t, n) {
    var r,
      i,
      s,
      o = e.toLocaleLowerCase()
    if (!this._monthsParse)
      for (
        this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0;
        r < 12;
        ++r
      )
        (s = wn([2e3, r])),
          (this._shortMonthsParse[r] = this.monthsShort(s, '').toLocaleLowerCase()),
          (this._longMonthsParse[r] = this.months(s, '').toLocaleLowerCase())
    return n
      ? t === 'MMM'
        ? ((i = ze.call(this._shortMonthsParse, o)), i !== -1 ? i : null)
        : ((i = ze.call(this._longMonthsParse, o)), i !== -1 ? i : null)
      : t === 'MMM'
      ? ((i = ze.call(this._shortMonthsParse, o)),
        i !== -1 ? i : ((i = ze.call(this._longMonthsParse, o)), i !== -1 ? i : null))
      : ((i = ze.call(this._longMonthsParse, o)),
        i !== -1 ? i : ((i = ze.call(this._shortMonthsParse, o)), i !== -1 ? i : null))
  }
  function GT(e, t, n) {
    var r, i, s
    if (this._monthsParseExact) return VT.call(this, e, t, n)
    for (
      this._monthsParse ||
        ((this._monthsParse = []), (this._longMonthsParse = []), (this._shortMonthsParse = [])),
        r = 0;
      r < 12;
      r++
    ) {
      if (
        ((i = wn([2e3, r])),
        n &&
          !this._longMonthsParse[r] &&
          ((this._longMonthsParse[r] = new RegExp(
            '^' + this.months(i, '').replace('.', '') + '$',
            'i'
          )),
          (this._shortMonthsParse[r] = new RegExp(
            '^' + this.monthsShort(i, '').replace('.', '') + '$',
            'i'
          ))),
        !n &&
          !this._monthsParse[r] &&
          ((s = '^' + this.months(i, '') + '|^' + this.monthsShort(i, '')),
          (this._monthsParse[r] = new RegExp(s.replace('.', ''), 'i'))),
        n && t === 'MMMM' && this._longMonthsParse[r].test(e))
      )
        return r
      if (n && t === 'MMM' && this._shortMonthsParse[r].test(e)) return r
      if (!n && this._monthsParse[r].test(e)) return r
    }
  }
  function d0(e, t) {
    var n
    if (!e.isValid()) return e
    if (typeof t == 'string') {
      if (/^\d+$/.test(t)) t = ne(t)
      else if (((t = e.localeData().monthsParse(t)), !$n(t))) return e
    }
    return (
      (n = Math.min(e.date(), ql(e.year(), t))),
      e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, n),
      e
    )
  }
  function f0(e) {
    return e != null ? (d0(this, e), b.updateOffset(this, !0), this) : Ha(this, 'Month')
  }
  function KT() {
    return ql(this.year(), this.month())
  }
  function qT(e) {
    return this._monthsParseExact
      ? (pe(this, '_monthsRegex') || h0.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (pe(this, '_monthsShortRegex') || (this._monthsShortRegex = WT),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
  }
  function QT(e) {
    return this._monthsParseExact
      ? (pe(this, '_monthsRegex') || h0.call(this), e ? this._monthsStrictRegex : this._monthsRegex)
      : (pe(this, '_monthsRegex') || (this._monthsRegex = BT),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
  }
  function h0() {
    function e(o, a) {
      return a.length - o.length
    }
    var t = [],
      n = [],
      r = [],
      i,
      s
    for (i = 0; i < 12; i++)
      (s = wn([2e3, i])),
        t.push(this.monthsShort(s, '')),
        n.push(this.months(s, '')),
        r.push(this.months(s, '')),
        r.push(this.monthsShort(s, ''))
    for (t.sort(e), n.sort(e), r.sort(e), i = 0; i < 12; i++) (t[i] = Pt(t[i])), (n[i] = Pt(n[i]))
    for (i = 0; i < 24; i++) r[i] = Pt(r[i])
    ;(this._monthsRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
      (this._monthsShortStrictRegex = new RegExp('^(' + t.join('|') + ')', 'i'))
  }
  Y('Y', 0, 0, function () {
    var e = this.year()
    return e <= 9999 ? _n(e, 4) : '+' + e
  })
  Y(0, ['YY', 2], 0, function () {
    return this.year() % 100
  })
  Y(0, ['YYYY', 4], 0, 'year')
  Y(0, ['YYYYY', 5], 0, 'year')
  Y(0, ['YYYYYY', 6, !0], 0, 'year')
  ht('year', 'y')
  pt('year', 1)
  $('Y', Gl)
  $('YY', Re, Ut)
  $('YYYY', Bf, Wf)
  $('YYYYY', Vl, Yl)
  $('YYYYYY', Vl, Yl)
  ke(['YYYYY', 'YYYYYY'], ct)
  ke('YYYY', function (e, t) {
    t[ct] = e.length === 2 ? b.parseTwoDigitYear(e) : ne(e)
  })
  ke('YY', function (e, t) {
    t[ct] = b.parseTwoDigitYear(e)
  })
  ke('Y', function (e, t) {
    t[ct] = parseInt(e, 10)
  })
  function Ds(e) {
    return Bl(e) ? 366 : 365
  }
  b.parseTwoDigitYear = function (e) {
    return ne(e) + (ne(e) > 68 ? 1900 : 2e3)
  }
  var p0 = Zi('FullYear', !0)
  function JT() {
    return Bl(this.year())
  }
  function XT(e, t, n, r, i, s, o) {
    var a
    return (
      e < 100 && e >= 0
        ? ((a = new Date(e + 400, t, n, r, i, s, o)), isFinite(a.getFullYear()) && a.setFullYear(e))
        : (a = new Date(e, t, n, r, i, s, o)),
      a
    )
  }
  function to(e) {
    var t, n
    return (
      e < 100 && e >= 0
        ? ((n = Array.prototype.slice.call(arguments)),
          (n[0] = e + 400),
          (t = new Date(Date.UTC.apply(null, n))),
          isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
        : (t = new Date(Date.UTC.apply(null, arguments))),
      t
    )
  }
  function Ga(e, t, n) {
    var r = 7 + t - n,
      i = (7 + to(e, 0, r).getUTCDay() - t) % 7
    return -i + r - 1
  }
  function m0(e, t, n, r, i) {
    var s = (7 + n - r) % 7,
      o = Ga(e, r, i),
      a = 1 + 7 * (t - 1) + s + o,
      l,
      u
    return (
      a <= 0
        ? ((l = e - 1), (u = Ds(l) + a))
        : a > Ds(e)
        ? ((l = e + 1), (u = a - Ds(e)))
        : ((l = e), (u = a)),
      { year: l, dayOfYear: u }
    )
  }
  function no(e, t, n) {
    var r = Ga(e.year(), t, n),
      i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1,
      s,
      o
    return (
      i < 1
        ? ((o = e.year() - 1), (s = i + Mn(o, t, n)))
        : i > Mn(e.year(), t, n)
        ? ((s = i - Mn(e.year(), t, n)), (o = e.year() + 1))
        : ((o = e.year()), (s = i)),
      { week: s, year: o }
    )
  }
  function Mn(e, t, n) {
    var r = Ga(e, t, n),
      i = Ga(e + 1, t, n)
    return (Ds(e) - r + i) / 7
  }
  Y('w', ['ww', 2], 'wo', 'week')
  Y('W', ['WW', 2], 'Wo', 'isoWeek')
  ht('week', 'w')
  ht('isoWeek', 'W')
  pt('week', 5)
  pt('isoWeek', 5)
  $('w', Re)
  $('ww', Re, Ut)
  $('W', Re)
  $('WW', Re, Ut)
  wo(['w', 'ww', 'W', 'WW'], function (e, t, n, r) {
    t[r.substr(0, 1)] = ne(e)
  })
  function ZT(e) {
    return no(e, this._week.dow, this._week.doy).week
  }
  var eC = { dow: 0, doy: 6 }
  function tC() {
    return this._week.dow
  }
  function nC() {
    return this._week.doy
  }
  function rC(e) {
    var t = this.localeData().week(this)
    return e == null ? t : this.add((e - t) * 7, 'd')
  }
  function iC(e) {
    var t = no(this, 1, 4).week
    return e == null ? t : this.add((e - t) * 7, 'd')
  }
  Y('d', 0, 'do', 'day')
  Y('dd', 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e)
  })
  Y('ddd', 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e)
  })
  Y('dddd', 0, 0, function (e) {
    return this.localeData().weekdays(this, e)
  })
  Y('e', 0, 0, 'weekday')
  Y('E', 0, 0, 'isoWeekday')
  ht('day', 'd')
  ht('weekday', 'e')
  ht('isoWeekday', 'E')
  pt('day', 11)
  pt('weekday', 11)
  pt('isoWeekday', 11)
  $('d', Re)
  $('e', Re)
  $('E', Re)
  $('dd', function (e, t) {
    return t.weekdaysMinRegex(e)
  })
  $('ddd', function (e, t) {
    return t.weekdaysShortRegex(e)
  })
  $('dddd', function (e, t) {
    return t.weekdaysRegex(e)
  })
  wo(['dd', 'ddd', 'dddd'], function (e, t, n, r) {
    var i = n._locale.weekdaysParse(e, r, n._strict)
    i != null ? (t.d = i) : (ee(n).invalidWeekday = e)
  })
  wo(['d', 'e', 'E'], function (e, t, n, r) {
    t[r] = ne(e)
  })
  function sC(e, t) {
    return typeof e != 'string'
      ? e
      : isNaN(e)
      ? ((e = t.weekdaysParse(e)), typeof e == 'number' ? e : null)
      : parseInt(e, 10)
  }
  function oC(e, t) {
    return typeof e == 'string' ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
  }
  function Yf(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t))
  }
  var aC = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    v0 = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    lC = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    uC = _o,
    cC = _o,
    dC = _o
  function fC(e, t) {
    var n = an(this._weekdays)
      ? this._weekdays
      : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? 'format' : 'standalone']
    return e === !0 ? Yf(n, this._week.dow) : e ? n[e.day()] : n
  }
  function hC(e) {
    return e === !0
      ? Yf(this._weekdaysShort, this._week.dow)
      : e
      ? this._weekdaysShort[e.day()]
      : this._weekdaysShort
  }
  function pC(e) {
    return e === !0
      ? Yf(this._weekdaysMin, this._week.dow)
      : e
      ? this._weekdaysMin[e.day()]
      : this._weekdaysMin
  }
  function mC(e, t, n) {
    var r,
      i,
      s,
      o = e.toLocaleLowerCase()
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0;
        r < 7;
        ++r
      )
        (s = wn([2e3, 1]).day(r)),
          (this._minWeekdaysParse[r] = this.weekdaysMin(s, '').toLocaleLowerCase()),
          (this._shortWeekdaysParse[r] = this.weekdaysShort(s, '').toLocaleLowerCase()),
          (this._weekdaysParse[r] = this.weekdays(s, '').toLocaleLowerCase())
    return n
      ? t === 'dddd'
        ? ((i = ze.call(this._weekdaysParse, o)), i !== -1 ? i : null)
        : t === 'ddd'
        ? ((i = ze.call(this._shortWeekdaysParse, o)), i !== -1 ? i : null)
        : ((i = ze.call(this._minWeekdaysParse, o)), i !== -1 ? i : null)
      : t === 'dddd'
      ? ((i = ze.call(this._weekdaysParse, o)),
        i !== -1 || ((i = ze.call(this._shortWeekdaysParse, o)), i !== -1)
          ? i
          : ((i = ze.call(this._minWeekdaysParse, o)), i !== -1 ? i : null))
      : t === 'ddd'
      ? ((i = ze.call(this._shortWeekdaysParse, o)),
        i !== -1 || ((i = ze.call(this._weekdaysParse, o)), i !== -1)
          ? i
          : ((i = ze.call(this._minWeekdaysParse, o)), i !== -1 ? i : null))
      : ((i = ze.call(this._minWeekdaysParse, o)),
        i !== -1 || ((i = ze.call(this._weekdaysParse, o)), i !== -1)
          ? i
          : ((i = ze.call(this._shortWeekdaysParse, o)), i !== -1 ? i : null))
  }
  function vC(e, t, n) {
    var r, i, s
    if (this._weekdaysParseExact) return mC.call(this, e, t, n)
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        r = 0;
      r < 7;
      r++
    ) {
      if (
        ((i = wn([2e3, 1]).day(r)),
        n &&
          !this._fullWeekdaysParse[r] &&
          ((this._fullWeekdaysParse[r] = new RegExp(
            '^' + this.weekdays(i, '').replace('.', '\\.?') + '$',
            'i'
          )),
          (this._shortWeekdaysParse[r] = new RegExp(
            '^' + this.weekdaysShort(i, '').replace('.', '\\.?') + '$',
            'i'
          )),
          (this._minWeekdaysParse[r] = new RegExp(
            '^' + this.weekdaysMin(i, '').replace('.', '\\.?') + '$',
            'i'
          ))),
        this._weekdaysParse[r] ||
          ((s =
            '^' +
            this.weekdays(i, '') +
            '|^' +
            this.weekdaysShort(i, '') +
            '|^' +
            this.weekdaysMin(i, '')),
          (this._weekdaysParse[r] = new RegExp(s.replace('.', ''), 'i'))),
        n && t === 'dddd' && this._fullWeekdaysParse[r].test(e))
      )
        return r
      if (n && t === 'ddd' && this._shortWeekdaysParse[r].test(e)) return r
      if (n && t === 'dd' && this._minWeekdaysParse[r].test(e)) return r
      if (!n && this._weekdaysParse[r].test(e)) return r
    }
  }
  function gC(e) {
    if (!this.isValid()) return e != null ? this : NaN
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay()
    return e != null ? ((e = sC(e, this.localeData())), this.add(e - t, 'd')) : t
  }
  function yC(e) {
    if (!this.isValid()) return e != null ? this : NaN
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7
    return e == null ? t : this.add(e - t, 'd')
  }
  function _C(e) {
    if (!this.isValid()) return e != null ? this : NaN
    if (e != null) {
      var t = oC(e, this.localeData())
      return this.day(this.day() % 7 ? t : t - 7)
    } else return this.day() || 7
  }
  function wC(e) {
    return this._weekdaysParseExact
      ? (pe(this, '_weekdaysRegex') || Hf.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (pe(this, '_weekdaysRegex') || (this._weekdaysRegex = uC),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
  }
  function SC(e) {
    return this._weekdaysParseExact
      ? (pe(this, '_weekdaysRegex') || Hf.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (pe(this, '_weekdaysShortRegex') || (this._weekdaysShortRegex = cC),
        this._weekdaysShortStrictRegex && e
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex)
  }
  function kC(e) {
    return this._weekdaysParseExact
      ? (pe(this, '_weekdaysRegex') || Hf.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (pe(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = dC),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
  }
  function Hf() {
    function e(d, p) {
      return p.length - d.length
    }
    var t = [],
      n = [],
      r = [],
      i = [],
      s,
      o,
      a,
      l,
      u
    for (s = 0; s < 7; s++)
      (o = wn([2e3, 1]).day(s)),
        (a = Pt(this.weekdaysMin(o, ''))),
        (l = Pt(this.weekdaysShort(o, ''))),
        (u = Pt(this.weekdays(o, ''))),
        t.push(a),
        n.push(l),
        r.push(u),
        i.push(a),
        i.push(l),
        i.push(u)
    t.sort(e),
      n.sort(e),
      r.sort(e),
      i.sort(e),
      (this._weekdaysRegex = new RegExp('^(' + i.join('|') + ')', 'i')),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
      (this._weekdaysShortStrictRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
      (this._weekdaysMinStrictRegex = new RegExp('^(' + t.join('|') + ')', 'i'))
  }
  function Vf() {
    return this.hours() % 12 || 12
  }
  function EC() {
    return this.hours() || 24
  }
  Y('H', ['HH', 2], 0, 'hour')
  Y('h', ['hh', 2], 0, Vf)
  Y('k', ['kk', 2], 0, EC)
  Y('hmm', 0, 0, function () {
    return '' + Vf.apply(this) + _n(this.minutes(), 2)
  })
  Y('hmmss', 0, 0, function () {
    return '' + Vf.apply(this) + _n(this.minutes(), 2) + _n(this.seconds(), 2)
  })
  Y('Hmm', 0, 0, function () {
    return '' + this.hours() + _n(this.minutes(), 2)
  })
  Y('Hmmss', 0, 0, function () {
    return '' + this.hours() + _n(this.minutes(), 2) + _n(this.seconds(), 2)
  })
  function g0(e, t) {
    Y(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
  }
  g0('a', !0)
  g0('A', !1)
  ht('hour', 'h')
  pt('hour', 13)
  function y0(e, t) {
    return t._meridiemParse
  }
  $('a', y0)
  $('A', y0)
  $('H', Re)
  $('h', Re)
  $('k', Re)
  $('HH', Re, Ut)
  $('hh', Re, Ut)
  $('kk', Re, Ut)
  $('hmm', a0)
  $('hmmss', l0)
  $('Hmm', a0)
  $('Hmmss', l0)
  ke(['H', 'HH'], qe)
  ke(['k', 'kk'], function (e, t, n) {
    var r = ne(e)
    t[qe] = r === 24 ? 0 : r
  })
  ke(['a', 'A'], function (e, t, n) {
    ;(n._isPm = n._locale.isPM(e)), (n._meridiem = e)
  })
  ke(['h', 'hh'], function (e, t, n) {
    ;(t[qe] = ne(e)), (ee(n).bigHour = !0)
  })
  ke('hmm', function (e, t, n) {
    var r = e.length - 2
    ;(t[qe] = ne(e.substr(0, r))), (t[tn] = ne(e.substr(r))), (ee(n).bigHour = !0)
  })
  ke('hmmss', function (e, t, n) {
    var r = e.length - 4,
      i = e.length - 2
    ;(t[qe] = ne(e.substr(0, r))),
      (t[tn] = ne(e.substr(r, 2))),
      (t[Dn] = ne(e.substr(i))),
      (ee(n).bigHour = !0)
  })
  ke('Hmm', function (e, t, n) {
    var r = e.length - 2
    ;(t[qe] = ne(e.substr(0, r))), (t[tn] = ne(e.substr(r)))
  })
  ke('Hmmss', function (e, t, n) {
    var r = e.length - 4,
      i = e.length - 2
    ;(t[qe] = ne(e.substr(0, r))), (t[tn] = ne(e.substr(r, 2))), (t[Dn] = ne(e.substr(i)))
  })
  function IC(e) {
    return (e + '').toLowerCase().charAt(0) === 'p'
  }
  var TC = /[ap]\.?m?\.?/i,
    CC = Zi('Hours', !0)
  function xC(e, t, n) {
    return e > 11 ? (n ? 'pm' : 'PM') : n ? 'am' : 'AM'
  }
  var _0 = {
      calendar: vT,
      longDateFormat: wT,
      invalidDate: kT,
      ordinal: IT,
      dayOfMonthOrdinalParse: TT,
      relativeTime: xT,
      months: jT,
      monthsShort: u0,
      week: eC,
      weekdays: aC,
      weekdaysMin: lC,
      weekdaysShort: v0,
      meridiemParse: TC,
    },
    Pe = {},
    ds = {},
    ro
  function OC(e, t) {
    var n,
      r = Math.min(e.length, t.length)
    for (n = 0; n < r; n += 1) if (e[n] !== t[n]) return n
    return r
  }
  function am(e) {
    return e && e.toLowerCase().replace('_', '-')
  }
  function RC(e) {
    for (var t = 0, n, r, i, s; t < e.length; ) {
      for (
        s = am(e[t]).split('-'), n = s.length, r = am(e[t + 1]), r = r ? r.split('-') : null;
        n > 0;

      ) {
        if (((i = Ql(s.slice(0, n).join('-'))), i)) return i
        if (r && r.length >= n && OC(s, r) >= n - 1) break
        n--
      }
      t++
    }
    return ro
  }
  function PC(e) {
    return e.match('^[^/\\\\]*$') != null
  }
  function Ql(e) {
    var t = null,
      n
    if (Pe[e] === void 0 && typeof da < 'u' && da && da.exports && PC(e))
      try {
        ;(t = ro._abbr), (n = require), n('./locale/' + e), vr(t)
      } catch {
        Pe[e] = null
      }
    return Pe[e]
  }
  function vr(e, t) {
    var n
    return (
      e &&
        (wt(t) ? (n = Wn(e)) : (n = Gf(e, t)),
        n
          ? (ro = n)
          : typeof console < 'u' &&
            console.warn &&
            console.warn('Locale ' + e + ' not found. Did you forget to load it?')),
      ro._abbr
    )
  }
  function Gf(e, t) {
    if (t !== null) {
      var n,
        r = _0
      if (((t.abbr = e), Pe[e] != null))
        t0(
          'defineLocaleOverride',
          'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
        ),
          (r = Pe[e]._config)
      else if (t.parentLocale != null)
        if (Pe[t.parentLocale] != null) r = Pe[t.parentLocale]._config
        else if (((n = Ql(t.parentLocale)), n != null)) r = n._config
        else
          return (
            ds[t.parentLocale] || (ds[t.parentLocale] = []),
            ds[t.parentLocale].push({ name: e, config: t }),
            null
          )
      return (
        (Pe[e] = new $f(cd(r, t))),
        ds[e] &&
          ds[e].forEach(function (i) {
            Gf(i.name, i.config)
          }),
        vr(e),
        Pe[e]
      )
    } else return delete Pe[e], null
  }
  function DC(e, t) {
    if (t != null) {
      var n,
        r,
        i = _0
      Pe[e] != null && Pe[e].parentLocale != null
        ? Pe[e].set(cd(Pe[e]._config, t))
        : ((r = Ql(e)),
          r != null && (i = r._config),
          (t = cd(i, t)),
          r == null && (t.abbr = e),
          (n = new $f(t)),
          (n.parentLocale = Pe[e]),
          (Pe[e] = n)),
        vr(e)
    } else
      Pe[e] != null &&
        (Pe[e].parentLocale != null
          ? ((Pe[e] = Pe[e].parentLocale), e === vr() && vr(e))
          : Pe[e] != null && delete Pe[e])
    return Pe[e]
  }
  function Wn(e) {
    var t
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)) return ro
    if (!an(e)) {
      if (((t = Ql(e)), t)) return t
      e = [e]
    }
    return RC(e)
  }
  function NC() {
    return dd(Pe)
  }
  function Kf(e) {
    var t,
      n = e._a
    return (
      n &&
        ee(e).overflow === -2 &&
        ((t =
          n[Pn] < 0 || n[Pn] > 11
            ? Pn
            : n[hn] < 1 || n[hn] > ql(n[ct], n[Pn])
            ? hn
            : n[qe] < 0 ||
              n[qe] > 24 ||
              (n[qe] === 24 && (n[tn] !== 0 || n[Dn] !== 0 || n[Ar] !== 0))
            ? qe
            : n[tn] < 0 || n[tn] > 59
            ? tn
            : n[Dn] < 0 || n[Dn] > 59
            ? Dn
            : n[Ar] < 0 || n[Ar] > 999
            ? Ar
            : -1),
        ee(e)._overflowDayOfYear && (t < ct || t > hn) && (t = hn),
        ee(e)._overflowWeeks && t === -1 && (t = FT),
        ee(e)._overflowWeekday && t === -1 && (t = $T),
        (ee(e).overflow = t)),
      e
    )
  }
  var MC =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    AC =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    LC = /Z|[+-]\d\d(?::?\d\d)?/,
    Wo = [
      ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
      ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
      ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
      ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
      ['YYYY-DDD', /\d{4}-\d{3}/],
      ['YYYY-MM', /\d{4}-\d\d/, !1],
      ['YYYYYYMMDD', /[+-]\d{10}/],
      ['YYYYMMDD', /\d{8}/],
      ['GGGG[W]WWE', /\d{4}W\d{3}/],
      ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
      ['YYYYDDD', /\d{7}/],
      ['YYYYMM', /\d{6}/, !1],
      ['YYYY', /\d{4}/, !1],
    ],
    Wu = [
      ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
      ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
      ['HH:mm:ss', /\d\d:\d\d:\d\d/],
      ['HH:mm', /\d\d:\d\d/],
      ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
      ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
      ['HHmmss', /\d\d\d\d\d\d/],
      ['HHmm', /\d\d\d\d/],
      ['HH', /\d\d/],
    ],
    bC = /^\/?Date\((-?\d+)/i,
    UC =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    FC = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60,
    }
  function w0(e) {
    var t,
      n,
      r = e._i,
      i = MC.exec(r) || AC.exec(r),
      s,
      o,
      a,
      l,
      u = Wo.length,
      d = Wu.length
    if (i) {
      for (ee(e).iso = !0, t = 0, n = u; t < n; t++)
        if (Wo[t][1].exec(i[1])) {
          ;(o = Wo[t][0]), (s = Wo[t][2] !== !1)
          break
        }
      if (o == null) {
        e._isValid = !1
        return
      }
      if (i[3]) {
        for (t = 0, n = d; t < n; t++)
          if (Wu[t][1].exec(i[3])) {
            a = (i[2] || ' ') + Wu[t][0]
            break
          }
        if (a == null) {
          e._isValid = !1
          return
        }
      }
      if (!s && a != null) {
        e._isValid = !1
        return
      }
      if (i[4])
        if (LC.exec(i[4])) l = 'Z'
        else {
          e._isValid = !1
          return
        }
      ;(e._f = o + (a || '') + (l || '')), Qf(e)
    } else e._isValid = !1
  }
  function $C(e, t, n, r, i, s) {
    var o = [zC(e), u0.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(i, 10)]
    return s && o.push(parseInt(s, 10)), o
  }
  function zC(e) {
    var t = parseInt(e, 10)
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
  }
  function jC(e) {
    return e
      .replace(/\([^()]*\)|[\n\t]/g, ' ')
      .replace(/(\s\s+)/g, ' ')
      .replace(/^\s\s*/, '')
      .replace(/\s\s*$/, '')
  }
  function WC(e, t, n) {
    if (e) {
      var r = v0.indexOf(e),
        i = new Date(t[0], t[1], t[2]).getDay()
      if (r !== i) return (ee(n).weekdayMismatch = !0), (n._isValid = !1), !1
    }
    return !0
  }
  function BC(e, t, n) {
    if (e) return FC[e]
    if (t) return 0
    var r = parseInt(n, 10),
      i = r % 100,
      s = (r - i) / 100
    return s * 60 + i
  }
  function S0(e) {
    var t = UC.exec(jC(e._i)),
      n
    if (t) {
      if (((n = $C(t[4], t[3], t[2], t[5], t[6], t[7])), !WC(t[1], n, e))) return
      ;(e._a = n),
        (e._tzm = BC(t[8], t[9], t[10])),
        (e._d = to.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (ee(e).rfc2822 = !0)
    } else e._isValid = !1
  }
  function YC(e) {
    var t = bC.exec(e._i)
    if (t !== null) {
      e._d = new Date(+t[1])
      return
    }
    if ((w0(e), e._isValid === !1)) delete e._isValid
    else return
    if ((S0(e), e._isValid === !1)) delete e._isValid
    else return
    e._strict ? (e._isValid = !1) : b.createFromInputFallback(e)
  }
  b.createFromInputFallback = Vt(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (e) {
      e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''))
    }
  )
  function oi(e, t, n) {
    return e != null ? e : t != null ? t : n
  }
  function HC(e) {
    var t = new Date(b.now())
    return e._useUTC
      ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
      : [t.getFullYear(), t.getMonth(), t.getDate()]
  }
  function qf(e) {
    var t,
      n,
      r = [],
      i,
      s,
      o
    if (!e._d) {
      for (
        i = HC(e),
          e._w && e._a[hn] == null && e._a[Pn] == null && VC(e),
          e._dayOfYear != null &&
            ((o = oi(e._a[ct], i[ct])),
            (e._dayOfYear > Ds(o) || e._dayOfYear === 0) && (ee(e)._overflowDayOfYear = !0),
            (n = to(o, 0, e._dayOfYear)),
            (e._a[Pn] = n.getUTCMonth()),
            (e._a[hn] = n.getUTCDate())),
          t = 0;
        t < 3 && e._a[t] == null;
        ++t
      )
        e._a[t] = r[t] = i[t]
      for (; t < 7; t++) e._a[t] = r[t] = e._a[t] == null ? (t === 2 ? 1 : 0) : e._a[t]
      e._a[qe] === 24 &&
        e._a[tn] === 0 &&
        e._a[Dn] === 0 &&
        e._a[Ar] === 0 &&
        ((e._nextDay = !0), (e._a[qe] = 0)),
        (e._d = (e._useUTC ? to : XT).apply(null, r)),
        (s = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
        e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[qe] = 24),
        e._w && typeof e._w.d < 'u' && e._w.d !== s && (ee(e).weekdayMismatch = !0)
    }
  }
  function VC(e) {
    var t, n, r, i, s, o, a, l, u
    ;(t = e._w),
      t.GG != null || t.W != null || t.E != null
        ? ((s = 1),
          (o = 4),
          (n = oi(t.GG, e._a[ct], no(Oe(), 1, 4).year)),
          (r = oi(t.W, 1)),
          (i = oi(t.E, 1)),
          (i < 1 || i > 7) && (l = !0))
        : ((s = e._locale._week.dow),
          (o = e._locale._week.doy),
          (u = no(Oe(), s, o)),
          (n = oi(t.gg, e._a[ct], u.year)),
          (r = oi(t.w, u.week)),
          t.d != null
            ? ((i = t.d), (i < 0 || i > 6) && (l = !0))
            : t.e != null
            ? ((i = t.e + s), (t.e < 0 || t.e > 6) && (l = !0))
            : (i = s)),
      r < 1 || r > Mn(n, s, o)
        ? (ee(e)._overflowWeeks = !0)
        : l != null
        ? (ee(e)._overflowWeekday = !0)
        : ((a = m0(n, r, i, s, o)), (e._a[ct] = a.year), (e._dayOfYear = a.dayOfYear))
  }
  b.ISO_8601 = function () {}
  b.RFC_2822 = function () {}
  function Qf(e) {
    if (e._f === b.ISO_8601) {
      w0(e)
      return
    }
    if (e._f === b.RFC_2822) {
      S0(e)
      return
    }
    ;(e._a = []), (ee(e).empty = !0)
    var t = '' + e._i,
      n,
      r,
      i,
      s,
      o,
      a = t.length,
      l = 0,
      u,
      d
    for (i = n0(e._f, e._locale).match(zf) || [], d = i.length, n = 0; n < d; n++)
      (s = i[n]),
        (r = (t.match(LT(s, e)) || [])[0]),
        r &&
          ((o = t.substr(0, t.indexOf(r))),
          o.length > 0 && ee(e).unusedInput.push(o),
          (t = t.slice(t.indexOf(r) + r.length)),
          (l += r.length)),
        Di[s]
          ? (r ? (ee(e).empty = !1) : ee(e).unusedTokens.push(s), UT(s, r, e))
          : e._strict && !r && ee(e).unusedTokens.push(s)
    ;(ee(e).charsLeftOver = a - l),
      t.length > 0 && ee(e).unusedInput.push(t),
      e._a[qe] <= 12 && ee(e).bigHour === !0 && e._a[qe] > 0 && (ee(e).bigHour = void 0),
      (ee(e).parsedDateParts = e._a.slice(0)),
      (ee(e).meridiem = e._meridiem),
      (e._a[qe] = GC(e._locale, e._a[qe], e._meridiem)),
      (u = ee(e).era),
      u !== null && (e._a[ct] = e._locale.erasConvertYear(u, e._a[ct])),
      qf(e),
      Kf(e)
  }
  function GC(e, t, n) {
    var r
    return n == null
      ? t
      : e.meridiemHour != null
      ? e.meridiemHour(t, n)
      : (e.isPM != null && ((r = e.isPM(n)), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)),
        t)
  }
  function KC(e) {
    var t,
      n,
      r,
      i,
      s,
      o,
      a = !1,
      l = e._f.length
    if (l === 0) {
      ;(ee(e).invalidFormat = !0), (e._d = new Date(NaN))
      return
    }
    for (i = 0; i < l; i++)
      (s = 0),
        (o = !1),
        (t = Ff({}, e)),
        e._useUTC != null && (t._useUTC = e._useUTC),
        (t._f = e._f[i]),
        Qf(t),
        Uf(t) && (o = !0),
        (s += ee(t).charsLeftOver),
        (s += ee(t).unusedTokens.length * 10),
        (ee(t).score = s),
        a
          ? s < r && ((r = s), (n = t))
          : (r == null || s < r || o) && ((r = s), (n = t), o && (a = !0))
    ir(e, n || t)
  }
  function qC(e) {
    if (!e._d) {
      var t = jf(e._i),
        n = t.day === void 0 ? t.date : t.day
      ;(e._a = Zy([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (r) {
        return r && parseInt(r, 10)
      })),
        qf(e)
    }
  }
  function QC(e) {
    var t = new yo(Kf(k0(e)))
    return t._nextDay && (t.add(1, 'd'), (t._nextDay = void 0)), t
  }
  function k0(e) {
    var t = e._i,
      n = e._f
    return (
      (e._locale = e._locale || Wn(e._l)),
      t === null || (n === void 0 && t === '')
        ? Wl({ nullInput: !0 })
        : (typeof t == 'string' && (e._i = t = e._locale.preparse(t)),
          ln(t)
            ? new yo(Kf(t))
            : (go(t) ? (e._d = t) : an(n) ? KC(e) : n ? Qf(e) : JC(e), Uf(e) || (e._d = null), e))
    )
  }
  function JC(e) {
    var t = e._i
    wt(t)
      ? (e._d = new Date(b.now()))
      : go(t)
      ? (e._d = new Date(t.valueOf()))
      : typeof t == 'string'
      ? YC(e)
      : an(t)
      ? ((e._a = Zy(t.slice(0), function (n) {
          return parseInt(n, 10)
        })),
        qf(e))
      : $r(t)
      ? qC(e)
      : $n(t)
      ? (e._d = new Date(t))
      : b.createFromInputFallback(e)
  }
  function E0(e, t, n, r, i) {
    var s = {}
    return (
      (t === !0 || t === !1) && ((r = t), (t = void 0)),
      (n === !0 || n === !1) && ((r = n), (n = void 0)),
      (($r(e) && bf(e)) || (an(e) && e.length === 0)) && (e = void 0),
      (s._isAMomentObject = !0),
      (s._useUTC = s._isUTC = i),
      (s._l = n),
      (s._i = e),
      (s._f = t),
      (s._strict = r),
      QC(s)
    )
  }
  function Oe(e, t, n, r) {
    return E0(e, t, n, r, !1)
  }
  var XC = Vt(
      'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        var e = Oe.apply(null, arguments)
        return this.isValid() && e.isValid() ? (e < this ? this : e) : Wl()
      }
    ),
    ZC = Vt(
      'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
      function () {
        var e = Oe.apply(null, arguments)
        return this.isValid() && e.isValid() ? (e > this ? this : e) : Wl()
      }
    )
  function I0(e, t) {
    var n, r
    if ((t.length === 1 && an(t[0]) && (t = t[0]), !t.length)) return Oe()
    for (n = t[0], r = 1; r < t.length; ++r) (!t[r].isValid() || t[r][e](n)) && (n = t[r])
    return n
  }
  function ex() {
    var e = [].slice.call(arguments, 0)
    return I0('isBefore', e)
  }
  function tx() {
    var e = [].slice.call(arguments, 0)
    return I0('isAfter', e)
  }
  var nx = function () {
      return Date.now ? Date.now() : +new Date()
    },
    fs = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond']
  function rx(e) {
    var t,
      n = !1,
      r,
      i = fs.length
    for (t in e)
      if (pe(e, t) && !(ze.call(fs, t) !== -1 && (e[t] == null || !isNaN(e[t])))) return !1
    for (r = 0; r < i; ++r)
      if (e[fs[r]]) {
        if (n) return !1
        parseFloat(e[fs[r]]) !== ne(e[fs[r]]) && (n = !0)
      }
    return !0
  }
  function ix() {
    return this._isValid
  }
  function sx() {
    return un(NaN)
  }
  function Jl(e) {
    var t = jf(e),
      n = t.year || 0,
      r = t.quarter || 0,
      i = t.month || 0,
      s = t.week || t.isoWeek || 0,
      o = t.day || 0,
      a = t.hour || 0,
      l = t.minute || 0,
      u = t.second || 0,
      d = t.millisecond || 0
    ;(this._isValid = rx(t)),
      (this._milliseconds = +d + u * 1e3 + l * 6e4 + a * 1e3 * 60 * 60),
      (this._days = +o + s * 7),
      (this._months = +i + r * 3 + n * 12),
      (this._data = {}),
      (this._locale = Wn()),
      this._bubble()
  }
  function aa(e) {
    return e instanceof Jl
  }
  function hd(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
  }
  function ox(e, t, n) {
    var r = Math.min(e.length, t.length),
      i = Math.abs(e.length - t.length),
      s = 0,
      o
    for (o = 0; o < r; o++) ((n && e[o] !== t[o]) || (!n && ne(e[o]) !== ne(t[o]))) && s++
    return s + i
  }
  function T0(e, t) {
    Y(e, 0, 0, function () {
      var n = this.utcOffset(),
        r = '+'
      return n < 0 && ((n = -n), (r = '-')), r + _n(~~(n / 60), 2) + t + _n(~~n % 60, 2)
    })
  }
  T0('Z', ':')
  T0('ZZ', '')
  $('Z', Kl)
  $('ZZ', Kl)
  ke(['Z', 'ZZ'], function (e, t, n) {
    ;(n._useUTC = !0), (n._tzm = Jf(Kl, e))
  })
  var ax = /([\+\-]|\d\d)/gi
  function Jf(e, t) {
    var n = (t || '').match(e),
      r,
      i,
      s
    return n === null
      ? null
      : ((r = n[n.length - 1] || []),
        (i = (r + '').match(ax) || ['-', 0, 0]),
        (s = +(i[1] * 60) + ne(i[2])),
        s === 0 ? 0 : i[0] === '+' ? s : -s)
  }
  function Xf(e, t) {
    var n, r
    return t._isUTC
      ? ((n = t.clone()),
        (r = (ln(e) || go(e) ? e.valueOf() : Oe(e).valueOf()) - n.valueOf()),
        n._d.setTime(n._d.valueOf() + r),
        b.updateOffset(n, !1),
        n)
      : Oe(e).local()
  }
  function pd(e) {
    return -Math.round(e._d.getTimezoneOffset())
  }
  b.updateOffset = function () {}
  function lx(e, t, n) {
    var r = this._offset || 0,
      i
    if (!this.isValid()) return e != null ? this : NaN
    if (e != null) {
      if (typeof e == 'string') {
        if (((e = Jf(Kl, e)), e === null)) return this
      } else Math.abs(e) < 16 && !n && (e = e * 60)
      return (
        !this._isUTC && t && (i = pd(this)),
        (this._offset = e),
        (this._isUTC = !0),
        i != null && this.add(i, 'm'),
        r !== e &&
          (!t || this._changeInProgress
            ? O0(this, un(e - r, 'm'), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              b.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      )
    } else return this._isUTC ? r : pd(this)
  }
  function ux(e, t) {
    return e != null
      ? (typeof e != 'string' && (e = -e), this.utcOffset(e, t), this)
      : -this.utcOffset()
  }
  function cx(e) {
    return this.utcOffset(0, e)
  }
  function dx(e) {
    return (
      this._isUTC && (this.utcOffset(0, e), (this._isUTC = !1), e && this.subtract(pd(this), 'm')),
      this
    )
  }
  function fx() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0)
    else if (typeof this._i == 'string') {
      var e = Jf(MT, this._i)
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
  }
  function hx(e) {
    return this.isValid()
      ? ((e = e ? Oe(e).utcOffset() : 0), (this.utcOffset() - e) % 60 === 0)
      : !1
  }
  function px() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    )
  }
  function mx() {
    if (!wt(this._isDSTShifted)) return this._isDSTShifted
    var e = {},
      t
    return (
      Ff(e, this),
      (e = k0(e)),
      e._a
        ? ((t = e._isUTC ? wn(e._a) : Oe(e._a)),
          (this._isDSTShifted = this.isValid() && ox(e._a, t.toArray()) > 0))
        : (this._isDSTShifted = !1),
      this._isDSTShifted
    )
  }
  function vx() {
    return this.isValid() ? !this._isUTC : !1
  }
  function gx() {
    return this.isValid() ? this._isUTC : !1
  }
  function C0() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1
  }
  var yx = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    _x =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
  function un(e, t) {
    var n = e,
      r = null,
      i,
      s,
      o
    return (
      aa(e)
        ? (n = { ms: e._milliseconds, d: e._days, M: e._months })
        : $n(e) || !isNaN(+e)
        ? ((n = {}), t ? (n[t] = +e) : (n.milliseconds = +e))
        : (r = yx.exec(e))
        ? ((i = r[1] === '-' ? -1 : 1),
          (n = {
            y: 0,
            d: ne(r[hn]) * i,
            h: ne(r[qe]) * i,
            m: ne(r[tn]) * i,
            s: ne(r[Dn]) * i,
            ms: ne(hd(r[Ar] * 1e3)) * i,
          }))
        : (r = _x.exec(e))
        ? ((i = r[1] === '-' ? -1 : 1),
          (n = {
            y: xr(r[2], i),
            M: xr(r[3], i),
            w: xr(r[4], i),
            d: xr(r[5], i),
            h: xr(r[6], i),
            m: xr(r[7], i),
            s: xr(r[8], i),
          }))
        : n == null
        ? (n = {})
        : typeof n == 'object' &&
          ('from' in n || 'to' in n) &&
          ((o = wx(Oe(n.from), Oe(n.to))), (n = {}), (n.ms = o.milliseconds), (n.M = o.months)),
      (s = new Jl(n)),
      aa(e) && pe(e, '_locale') && (s._locale = e._locale),
      aa(e) && pe(e, '_isValid') && (s._isValid = e._isValid),
      s
    )
  }
  un.fn = Jl.prototype
  un.invalid = sx
  function xr(e, t) {
    var n = e && parseFloat(e.replace(',', '.'))
    return (isNaN(n) ? 0 : n) * t
  }
  function lm(e, t) {
    var n = {}
    return (
      (n.months = t.month() - e.month() + (t.year() - e.year()) * 12),
      e.clone().add(n.months, 'M').isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, 'M')),
      n
    )
  }
  function wx(e, t) {
    var n
    return e.isValid() && t.isValid()
      ? ((t = Xf(t, e)),
        e.isBefore(t)
          ? (n = lm(e, t))
          : ((n = lm(t, e)), (n.milliseconds = -n.milliseconds), (n.months = -n.months)),
        n)
      : { milliseconds: 0, months: 0 }
  }
  function x0(e, t) {
    return function (n, r) {
      var i, s
      return (
        r !== null &&
          !isNaN(+r) &&
          (t0(
            t,
            'moment().' +
              t +
              '(period, number) is deprecated. Please use moment().' +
              t +
              '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
          ),
          (s = n),
          (n = r),
          (r = s)),
        (i = un(n, r)),
        O0(this, i, e),
        this
      )
    }
  }
  function O0(e, t, n, r) {
    var i = t._milliseconds,
      s = hd(t._days),
      o = hd(t._months)
    !e.isValid() ||
      ((r = r == null ? !0 : r),
      o && d0(e, Ha(e, 'Month') + o * n),
      s && i0(e, 'Date', Ha(e, 'Date') + s * n),
      i && e._d.setTime(e._d.valueOf() + i * n),
      r && b.updateOffset(e, s || o))
  }
  var Sx = x0(1, 'add'),
    kx = x0(-1, 'subtract')
  function R0(e) {
    return typeof e == 'string' || e instanceof String
  }
  function Ex(e) {
    return ln(e) || go(e) || R0(e) || $n(e) || Tx(e) || Ix(e) || e === null || e === void 0
  }
  function Ix(e) {
    var t = $r(e) && !bf(e),
      n = !1,
      r = [
        'years',
        'year',
        'y',
        'months',
        'month',
        'M',
        'days',
        'day',
        'd',
        'dates',
        'date',
        'D',
        'hours',
        'hour',
        'h',
        'minutes',
        'minute',
        'm',
        'seconds',
        'second',
        's',
        'milliseconds',
        'millisecond',
        'ms',
      ],
      i,
      s,
      o = r.length
    for (i = 0; i < o; i += 1) (s = r[i]), (n = n || pe(e, s))
    return t && n
  }
  function Tx(e) {
    var t = an(e),
      n = !1
    return (
      t &&
        (n =
          e.filter(function (r) {
            return !$n(r) && R0(e)
          }).length === 0),
      t && n
    )
  }
  function Cx(e) {
    var t = $r(e) && !bf(e),
      n = !1,
      r = ['sameDay', 'nextDay', 'lastDay', 'nextWeek', 'lastWeek', 'sameElse'],
      i,
      s
    for (i = 0; i < r.length; i += 1) (s = r[i]), (n = n || pe(e, s))
    return t && n
  }
  function xx(e, t) {
    var n = e.diff(t, 'days', !0)
    return n < -6
      ? 'sameElse'
      : n < -1
      ? 'lastWeek'
      : n < 0
      ? 'lastDay'
      : n < 1
      ? 'sameDay'
      : n < 2
      ? 'nextDay'
      : n < 7
      ? 'nextWeek'
      : 'sameElse'
  }
  function Ox(e, t) {
    arguments.length === 1 &&
      (arguments[0]
        ? Ex(arguments[0])
          ? ((e = arguments[0]), (t = void 0))
          : Cx(arguments[0]) && ((t = arguments[0]), (e = void 0))
        : ((e = void 0), (t = void 0)))
    var n = e || Oe(),
      r = Xf(n, this).startOf('day'),
      i = b.calendarFormat(this, r) || 'sameElse',
      s = t && (Sn(t[i]) ? t[i].call(this, n) : t[i])
    return this.format(s || this.localeData().calendar(i, this, Oe(n)))
  }
  function Rx() {
    return new yo(this)
  }
  function Px(e, t) {
    var n = ln(e) ? e : Oe(e)
    return this.isValid() && n.isValid()
      ? ((t = Gt(t) || 'millisecond'),
        t === 'millisecond'
          ? this.valueOf() > n.valueOf()
          : n.valueOf() < this.clone().startOf(t).valueOf())
      : !1
  }
  function Dx(e, t) {
    var n = ln(e) ? e : Oe(e)
    return this.isValid() && n.isValid()
      ? ((t = Gt(t) || 'millisecond'),
        t === 'millisecond'
          ? this.valueOf() < n.valueOf()
          : this.clone().endOf(t).valueOf() < n.valueOf())
      : !1
  }
  function Nx(e, t, n, r) {
    var i = ln(e) ? e : Oe(e),
      s = ln(t) ? t : Oe(t)
    return this.isValid() && i.isValid() && s.isValid()
      ? ((r = r || '()'),
        (r[0] === '(' ? this.isAfter(i, n) : !this.isBefore(i, n)) &&
          (r[1] === ')' ? this.isBefore(s, n) : !this.isAfter(s, n)))
      : !1
  }
  function Mx(e, t) {
    var n = ln(e) ? e : Oe(e),
      r
    return this.isValid() && n.isValid()
      ? ((t = Gt(t) || 'millisecond'),
        t === 'millisecond'
          ? this.valueOf() === n.valueOf()
          : ((r = n.valueOf()),
            this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf()))
      : !1
  }
  function Ax(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
  }
  function Lx(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
  }
  function bx(e, t, n) {
    var r, i, s
    if (!this.isValid()) return NaN
    if (((r = Xf(e, this)), !r.isValid())) return NaN
    switch (((i = (r.utcOffset() - this.utcOffset()) * 6e4), (t = Gt(t)), t)) {
      case 'year':
        s = la(this, r) / 12
        break
      case 'month':
        s = la(this, r)
        break
      case 'quarter':
        s = la(this, r) / 3
        break
      case 'second':
        s = (this - r) / 1e3
        break
      case 'minute':
        s = (this - r) / 6e4
        break
      case 'hour':
        s = (this - r) / 36e5
        break
      case 'day':
        s = (this - r - i) / 864e5
        break
      case 'week':
        s = (this - r - i) / 6048e5
        break
      default:
        s = this - r
    }
    return n ? s : zt(s)
  }
  function la(e, t) {
    if (e.date() < t.date()) return -la(t, e)
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()),
      r = e.clone().add(n, 'months'),
      i,
      s
    return (
      t - r < 0
        ? ((i = e.clone().add(n - 1, 'months')), (s = (t - r) / (r - i)))
        : ((i = e.clone().add(n + 1, 'months')), (s = (t - r) / (i - r))),
      -(n + s) || 0
    )
  }
  b.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'
  b.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]'
  function Ux() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
  }
  function Fx(e) {
    if (!this.isValid()) return null
    var t = e !== !0,
      n = t ? this.clone().utc() : this
    return n.year() < 0 || n.year() > 9999
      ? oa(n, t ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ')
      : Sn(Date.prototype.toISOString)
      ? t
        ? this.toDate().toISOString()
        : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
            .toISOString()
            .replace('Z', oa(n, 'Z'))
      : oa(n, t ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ')
  }
  function $x() {
    if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)'
    var e = 'moment',
      t = '',
      n,
      r,
      i,
      s
    return (
      this.isLocal() ||
        ((e = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone'), (t = 'Z')),
      (n = '[' + e + '("]'),
      (r = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
      (i = '-MM-DD[T]HH:mm:ss.SSS'),
      (s = t + '[")]'),
      this.format(n + r + i + s)
    )
  }
  function zx(e) {
    e || (e = this.isUtc() ? b.defaultFormatUtc : b.defaultFormat)
    var t = oa(this, e)
    return this.localeData().postformat(t)
  }
  function jx(e, t) {
    return this.isValid() && ((ln(e) && e.isValid()) || Oe(e).isValid())
      ? un({ to: this, from: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate()
  }
  function Wx(e) {
    return this.from(Oe(), e)
  }
  function Bx(e, t) {
    return this.isValid() && ((ln(e) && e.isValid()) || Oe(e).isValid())
      ? un({ from: this, to: e }).locale(this.locale()).humanize(!t)
      : this.localeData().invalidDate()
  }
  function Yx(e) {
    return this.to(Oe(), e)
  }
  function P0(e) {
    var t
    return e === void 0 ? this._locale._abbr : ((t = Wn(e)), t != null && (this._locale = t), this)
  }
  var D0 = Vt(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (e) {
      return e === void 0 ? this.localeData() : this.locale(e)
    }
  )
  function N0() {
    return this._locale
  }
  var Ka = 1e3,
    Ni = 60 * Ka,
    qa = 60 * Ni,
    M0 = (365 * 400 + 97) * 24 * qa
  function Mi(e, t) {
    return ((e % t) + t) % t
  }
  function A0(e, t, n) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, n) - M0 : new Date(e, t, n).valueOf()
  }
  function L0(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - M0 : Date.UTC(e, t, n)
  }
  function Hx(e) {
    var t, n
    if (((e = Gt(e)), e === void 0 || e === 'millisecond' || !this.isValid())) return this
    switch (((n = this._isUTC ? L0 : A0), e)) {
      case 'year':
        t = n(this.year(), 0, 1)
        break
      case 'quarter':
        t = n(this.year(), this.month() - (this.month() % 3), 1)
        break
      case 'month':
        t = n(this.year(), this.month(), 1)
        break
      case 'week':
        t = n(this.year(), this.month(), this.date() - this.weekday())
        break
      case 'isoWeek':
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1))
        break
      case 'day':
      case 'date':
        t = n(this.year(), this.month(), this.date())
        break
      case 'hour':
        ;(t = this._d.valueOf()), (t -= Mi(t + (this._isUTC ? 0 : this.utcOffset() * Ni), qa))
        break
      case 'minute':
        ;(t = this._d.valueOf()), (t -= Mi(t, Ni))
        break
      case 'second':
        ;(t = this._d.valueOf()), (t -= Mi(t, Ka))
        break
    }
    return this._d.setTime(t), b.updateOffset(this, !0), this
  }
  function Vx(e) {
    var t, n
    if (((e = Gt(e)), e === void 0 || e === 'millisecond' || !this.isValid())) return this
    switch (((n = this._isUTC ? L0 : A0), e)) {
      case 'year':
        t = n(this.year() + 1, 0, 1) - 1
        break
      case 'quarter':
        t = n(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1
        break
      case 'month':
        t = n(this.year(), this.month() + 1, 1) - 1
        break
      case 'week':
        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1
        break
      case 'isoWeek':
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1
        break
      case 'day':
      case 'date':
        t = n(this.year(), this.month(), this.date() + 1) - 1
        break
      case 'hour':
        ;(t = this._d.valueOf()),
          (t += qa - Mi(t + (this._isUTC ? 0 : this.utcOffset() * Ni), qa) - 1)
        break
      case 'minute':
        ;(t = this._d.valueOf()), (t += Ni - Mi(t, Ni) - 1)
        break
      case 'second':
        ;(t = this._d.valueOf()), (t += Ka - Mi(t, Ka) - 1)
        break
    }
    return this._d.setTime(t), b.updateOffset(this, !0), this
  }
  function Gx() {
    return this._d.valueOf() - (this._offset || 0) * 6e4
  }
  function Kx() {
    return Math.floor(this.valueOf() / 1e3)
  }
  function qx() {
    return new Date(this.valueOf())
  }
  function Qx() {
    var e = this
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
  }
  function Jx() {
    var e = this
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds(),
    }
  }
  function Xx() {
    return this.isValid() ? this.toISOString() : null
  }
  function Zx() {
    return Uf(this)
  }
  function eO() {
    return ir({}, ee(this))
  }
  function tO() {
    return ee(this).overflow
  }
  function nO() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    }
  }
  Y('N', 0, 0, 'eraAbbr')
  Y('NN', 0, 0, 'eraAbbr')
  Y('NNN', 0, 0, 'eraAbbr')
  Y('NNNN', 0, 0, 'eraName')
  Y('NNNNN', 0, 0, 'eraNarrow')
  Y('y', ['y', 1], 'yo', 'eraYear')
  Y('y', ['yy', 2], 0, 'eraYear')
  Y('y', ['yyy', 3], 0, 'eraYear')
  Y('y', ['yyyy', 4], 0, 'eraYear')
  $('N', Zf)
  $('NN', Zf)
  $('NNN', Zf)
  $('NNNN', hO)
  $('NNNNN', pO)
  ke(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (e, t, n, r) {
    var i = n._locale.erasParse(e, r, n._strict)
    i ? (ee(n).era = i) : (ee(n).invalidEra = e)
  })
  $('y', es)
  $('yy', es)
  $('yyy', es)
  $('yyyy', es)
  $('yo', mO)
  ke(['y', 'yy', 'yyy', 'yyyy'], ct)
  ke(['yo'], function (e, t, n, r) {
    var i
    n._locale._eraYearOrdinalRegex && (i = e.match(n._locale._eraYearOrdinalRegex)),
      n._locale.eraYearOrdinalParse
        ? (t[ct] = n._locale.eraYearOrdinalParse(e, i))
        : (t[ct] = parseInt(e, 10))
  })
  function rO(e, t) {
    var n,
      r,
      i,
      s = this._eras || Wn('en')._eras
    for (n = 0, r = s.length; n < r; ++n) {
      switch (typeof s[n].since) {
        case 'string':
          ;(i = b(s[n].since).startOf('day')), (s[n].since = i.valueOf())
          break
      }
      switch (typeof s[n].until) {
        case 'undefined':
          s[n].until = 1 / 0
          break
        case 'string':
          ;(i = b(s[n].until).startOf('day').valueOf()), (s[n].until = i.valueOf())
          break
      }
    }
    return s
  }
  function iO(e, t, n) {
    var r,
      i,
      s = this.eras(),
      o,
      a,
      l
    for (e = e.toUpperCase(), r = 0, i = s.length; r < i; ++r)
      if (
        ((o = s[r].name.toUpperCase()),
        (a = s[r].abbr.toUpperCase()),
        (l = s[r].narrow.toUpperCase()),
        n)
      )
        switch (t) {
          case 'N':
          case 'NN':
          case 'NNN':
            if (a === e) return s[r]
            break
          case 'NNNN':
            if (o === e) return s[r]
            break
          case 'NNNNN':
            if (l === e) return s[r]
            break
        }
      else if ([o, a, l].indexOf(e) >= 0) return s[r]
  }
  function sO(e, t) {
    var n = e.since <= e.until ? 1 : -1
    return t === void 0 ? b(e.since).year() : b(e.since).year() + (t - e.offset) * n
  }
  function oO() {
    var e,
      t,
      n,
      r = this.localeData().eras()
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf('day').valueOf()),
        (r[e].since <= n && n <= r[e].until) || (r[e].until <= n && n <= r[e].since))
      )
        return r[e].name
    return ''
  }
  function aO() {
    var e,
      t,
      n,
      r = this.localeData().eras()
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf('day').valueOf()),
        (r[e].since <= n && n <= r[e].until) || (r[e].until <= n && n <= r[e].since))
      )
        return r[e].narrow
    return ''
  }
  function lO() {
    var e,
      t,
      n,
      r = this.localeData().eras()
    for (e = 0, t = r.length; e < t; ++e)
      if (
        ((n = this.clone().startOf('day').valueOf()),
        (r[e].since <= n && n <= r[e].until) || (r[e].until <= n && n <= r[e].since))
      )
        return r[e].abbr
    return ''
  }
  function uO() {
    var e,
      t,
      n,
      r,
      i = this.localeData().eras()
    for (e = 0, t = i.length; e < t; ++e)
      if (
        ((n = i[e].since <= i[e].until ? 1 : -1),
        (r = this.clone().startOf('day').valueOf()),
        (i[e].since <= r && r <= i[e].until) || (i[e].until <= r && r <= i[e].since))
      )
        return (this.year() - b(i[e].since).year()) * n + i[e].offset
    return this.year()
  }
  function cO(e) {
    return pe(this, '_erasNameRegex') || eh.call(this), e ? this._erasNameRegex : this._erasRegex
  }
  function dO(e) {
    return pe(this, '_erasAbbrRegex') || eh.call(this), e ? this._erasAbbrRegex : this._erasRegex
  }
  function fO(e) {
    return (
      pe(this, '_erasNarrowRegex') || eh.call(this), e ? this._erasNarrowRegex : this._erasRegex
    )
  }
  function Zf(e, t) {
    return t.erasAbbrRegex(e)
  }
  function hO(e, t) {
    return t.erasNameRegex(e)
  }
  function pO(e, t) {
    return t.erasNarrowRegex(e)
  }
  function mO(e, t) {
    return t._eraYearOrdinalRegex || es
  }
  function eh() {
    var e = [],
      t = [],
      n = [],
      r = [],
      i,
      s,
      o = this.eras()
    for (i = 0, s = o.length; i < s; ++i)
      t.push(Pt(o[i].name)),
        e.push(Pt(o[i].abbr)),
        n.push(Pt(o[i].narrow)),
        r.push(Pt(o[i].name)),
        r.push(Pt(o[i].abbr)),
        r.push(Pt(o[i].narrow))
    ;(this._erasRegex = new RegExp('^(' + r.join('|') + ')', 'i')),
      (this._erasNameRegex = new RegExp('^(' + t.join('|') + ')', 'i')),
      (this._erasAbbrRegex = new RegExp('^(' + e.join('|') + ')', 'i')),
      (this._erasNarrowRegex = new RegExp('^(' + n.join('|') + ')', 'i'))
  }
  Y(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100
  })
  Y(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100
  })
  function Xl(e, t) {
    Y(0, [e, e.length], 0, t)
  }
  Xl('gggg', 'weekYear')
  Xl('ggggg', 'weekYear')
  Xl('GGGG', 'isoWeekYear')
  Xl('GGGGG', 'isoWeekYear')
  ht('weekYear', 'gg')
  ht('isoWeekYear', 'GG')
  pt('weekYear', 1)
  pt('isoWeekYear', 1)
  $('G', Gl)
  $('g', Gl)
  $('GG', Re, Ut)
  $('gg', Re, Ut)
  $('GGGG', Bf, Wf)
  $('gggg', Bf, Wf)
  $('GGGGG', Vl, Yl)
  $('ggggg', Vl, Yl)
  wo(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, t, n, r) {
    t[r.substr(0, 2)] = ne(e)
  })
  wo(['gg', 'GG'], function (e, t, n, r) {
    t[r] = b.parseTwoDigitYear(e)
  })
  function vO(e) {
    return b0.call(
      this,
      e,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    )
  }
  function gO(e) {
    return b0.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
  }
  function yO() {
    return Mn(this.year(), 1, 4)
  }
  function _O() {
    return Mn(this.isoWeekYear(), 1, 4)
  }
  function wO() {
    var e = this.localeData()._week
    return Mn(this.year(), e.dow, e.doy)
  }
  function SO() {
    var e = this.localeData()._week
    return Mn(this.weekYear(), e.dow, e.doy)
  }
  function b0(e, t, n, r, i) {
    var s
    return e == null
      ? no(this, r, i).year
      : ((s = Mn(e, r, i)), t > s && (t = s), kO.call(this, e, t, n, r, i))
  }
  function kO(e, t, n, r, i) {
    var s = m0(e, t, n, r, i),
      o = to(s.year, 0, s.dayOfYear)
    return (
      this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
    )
  }
  Y('Q', 0, 'Qo', 'quarter')
  ht('quarter', 'Q')
  pt('quarter', 7)
  $('Q', s0)
  ke('Q', function (e, t) {
    t[Pn] = (ne(e) - 1) * 3
  })
  function EO(e) {
    return e == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((e - 1) * 3 + (this.month() % 3))
  }
  Y('D', ['DD', 2], 'Do', 'date')
  ht('date', 'D')
  pt('date', 9)
  $('D', Re)
  $('DD', Re, Ut)
  $('Do', function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
  })
  ke(['D', 'DD'], hn)
  ke('Do', function (e, t) {
    t[hn] = ne(e.match(Re)[0])
  })
  var U0 = Zi('Date', !0)
  Y('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear')
  ht('dayOfYear', 'DDD')
  pt('dayOfYear', 4)
  $('DDD', Hl)
  $('DDDD', o0)
  ke(['DDD', 'DDDD'], function (e, t, n) {
    n._dayOfYear = ne(e)
  })
  function IO(e) {
    var t = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1
    return e == null ? t : this.add(e - t, 'd')
  }
  Y('m', ['mm', 2], 0, 'minute')
  ht('minute', 'm')
  pt('minute', 14)
  $('m', Re)
  $('mm', Re, Ut)
  ke(['m', 'mm'], tn)
  var TO = Zi('Minutes', !1)
  Y('s', ['ss', 2], 0, 'second')
  ht('second', 's')
  pt('second', 15)
  $('s', Re)
  $('ss', Re, Ut)
  ke(['s', 'ss'], Dn)
  var CO = Zi('Seconds', !1)
  Y('S', 0, 0, function () {
    return ~~(this.millisecond() / 100)
  })
  Y(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10)
  })
  Y(0, ['SSS', 3], 0, 'millisecond')
  Y(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10
  })
  Y(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100
  })
  Y(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1e3
  })
  Y(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 1e4
  })
  Y(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 1e5
  })
  Y(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1e6
  })
  ht('millisecond', 'ms')
  pt('millisecond', 16)
  $('S', Hl, s0)
  $('SS', Hl, Ut)
  $('SSS', Hl, o0)
  var sr, F0
  for (sr = 'SSSS'; sr.length <= 9; sr += 'S') $(sr, es)
  function xO(e, t) {
    t[Ar] = ne(('0.' + e) * 1e3)
  }
  for (sr = 'S'; sr.length <= 9; sr += 'S') ke(sr, xO)
  F0 = Zi('Milliseconds', !1)
  Y('z', 0, 0, 'zoneAbbr')
  Y('zz', 0, 0, 'zoneName')
  function OO() {
    return this._isUTC ? 'UTC' : ''
  }
  function RO() {
    return this._isUTC ? 'Coordinated Universal Time' : ''
  }
  var R = yo.prototype
  R.add = Sx
  R.calendar = Ox
  R.clone = Rx
  R.diff = bx
  R.endOf = Vx
  R.format = zx
  R.from = jx
  R.fromNow = Wx
  R.to = Bx
  R.toNow = Yx
  R.get = DT
  R.invalidAt = tO
  R.isAfter = Px
  R.isBefore = Dx
  R.isBetween = Nx
  R.isSame = Mx
  R.isSameOrAfter = Ax
  R.isSameOrBefore = Lx
  R.isValid = Zx
  R.lang = D0
  R.locale = P0
  R.localeData = N0
  R.max = ZC
  R.min = XC
  R.parsingFlags = eO
  R.set = NT
  R.startOf = Hx
  R.subtract = kx
  R.toArray = Qx
  R.toObject = Jx
  R.toDate = qx
  R.toISOString = Fx
  R.inspect = $x
  typeof Symbol < 'u' &&
    Symbol.for != null &&
    (R[Symbol.for('nodejs.util.inspect.custom')] = function () {
      return 'Moment<' + this.format() + '>'
    })
  R.toJSON = Xx
  R.toString = Ux
  R.unix = Kx
  R.valueOf = Gx
  R.creationData = nO
  R.eraName = oO
  R.eraNarrow = aO
  R.eraAbbr = lO
  R.eraYear = uO
  R.year = p0
  R.isLeapYear = JT
  R.weekYear = vO
  R.isoWeekYear = gO
  R.quarter = R.quarters = EO
  R.month = f0
  R.daysInMonth = KT
  R.week = R.weeks = rC
  R.isoWeek = R.isoWeeks = iC
  R.weeksInYear = wO
  R.weeksInWeekYear = SO
  R.isoWeeksInYear = yO
  R.isoWeeksInISOWeekYear = _O
  R.date = U0
  R.day = R.days = gC
  R.weekday = yC
  R.isoWeekday = _C
  R.dayOfYear = IO
  R.hour = R.hours = CC
  R.minute = R.minutes = TO
  R.second = R.seconds = CO
  R.millisecond = R.milliseconds = F0
  R.utcOffset = lx
  R.utc = cx
  R.local = dx
  R.parseZone = fx
  R.hasAlignedHourOffset = hx
  R.isDST = px
  R.isLocal = vx
  R.isUtcOffset = gx
  R.isUtc = C0
  R.isUTC = C0
  R.zoneAbbr = OO
  R.zoneName = RO
  R.dates = Vt('dates accessor is deprecated. Use date instead.', U0)
  R.months = Vt('months accessor is deprecated. Use month instead', f0)
  R.years = Vt('years accessor is deprecated. Use year instead', p0)
  R.zone = Vt(
    'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
    ux
  )
  R.isDSTShifted = Vt(
    'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
    mx
  )
  function PO(e) {
    return Oe(e * 1e3)
  }
  function DO() {
    return Oe.apply(null, arguments).parseZone()
  }
  function $0(e) {
    return e
  }
  var me = $f.prototype
  me.calendar = gT
  me.longDateFormat = ST
  me.invalidDate = ET
  me.ordinal = CT
  me.preparse = $0
  me.postformat = $0
  me.relativeTime = OT
  me.pastFuture = RT
  me.set = mT
  me.eras = rO
  me.erasParse = iO
  me.erasConvertYear = sO
  me.erasAbbrRegex = dO
  me.erasNameRegex = cO
  me.erasNarrowRegex = fO
  me.months = YT
  me.monthsShort = HT
  me.monthsParse = GT
  me.monthsRegex = QT
  me.monthsShortRegex = qT
  me.week = ZT
  me.firstDayOfYear = nC
  me.firstDayOfWeek = tC
  me.weekdays = fC
  me.weekdaysMin = pC
  me.weekdaysShort = hC
  me.weekdaysParse = vC
  me.weekdaysRegex = wC
  me.weekdaysShortRegex = SC
  me.weekdaysMinRegex = kC
  me.isPM = IC
  me.meridiem = xC
  function Qa(e, t, n, r) {
    var i = Wn(),
      s = wn().set(r, t)
    return i[n](s, e)
  }
  function z0(e, t, n) {
    if (($n(e) && ((t = e), (e = void 0)), (e = e || ''), t != null)) return Qa(e, t, n, 'month')
    var r,
      i = []
    for (r = 0; r < 12; r++) i[r] = Qa(e, r, n, 'month')
    return i
  }
  function th(e, t, n, r) {
    typeof e == 'boolean'
      ? ($n(t) && ((n = t), (t = void 0)), (t = t || ''))
      : ((t = e), (n = t), (e = !1), $n(t) && ((n = t), (t = void 0)), (t = t || ''))
    var i = Wn(),
      s = e ? i._week.dow : 0,
      o,
      a = []
    if (n != null) return Qa(t, (n + s) % 7, r, 'day')
    for (o = 0; o < 7; o++) a[o] = Qa(t, (o + s) % 7, r, 'day')
    return a
  }
  function NO(e, t) {
    return z0(e, t, 'months')
  }
  function MO(e, t) {
    return z0(e, t, 'monthsShort')
  }
  function AO(e, t, n) {
    return th(e, t, n, 'weekdays')
  }
  function LO(e, t, n) {
    return th(e, t, n, 'weekdaysShort')
  }
  function bO(e, t, n) {
    return th(e, t, n, 'weekdaysMin')
  }
  vr('en', {
    eras: [
      {
        since: '0001-01-01',
        until: 1 / 0,
        offset: 1,
        name: 'Anno Domini',
        narrow: 'AD',
        abbr: 'AD',
      },
      {
        since: '0000-12-31',
        until: -1 / 0,
        offset: 1,
        name: 'Before Christ',
        narrow: 'BC',
        abbr: 'BC',
      },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var t = e % 10,
        n =
          ne((e % 100) / 10) === 1 ? 'th' : t === 1 ? 'st' : t === 2 ? 'nd' : t === 3 ? 'rd' : 'th'
      return e + n
    },
  })
  b.lang = Vt('moment.lang is deprecated. Use moment.locale instead.', vr)
  b.langData = Vt('moment.langData is deprecated. Use moment.localeData instead.', Wn)
  var kn = Math.abs
  function UO() {
    var e = this._data
    return (
      (this._milliseconds = kn(this._milliseconds)),
      (this._days = kn(this._days)),
      (this._months = kn(this._months)),
      (e.milliseconds = kn(e.milliseconds)),
      (e.seconds = kn(e.seconds)),
      (e.minutes = kn(e.minutes)),
      (e.hours = kn(e.hours)),
      (e.months = kn(e.months)),
      (e.years = kn(e.years)),
      this
    )
  }
  function j0(e, t, n, r) {
    var i = un(t, n)
    return (
      (e._milliseconds += r * i._milliseconds),
      (e._days += r * i._days),
      (e._months += r * i._months),
      e._bubble()
    )
  }
  function FO(e, t) {
    return j0(this, e, t, 1)
  }
  function $O(e, t) {
    return j0(this, e, t, -1)
  }
  function um(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
  }
  function zO() {
    var e = this._milliseconds,
      t = this._days,
      n = this._months,
      r = this._data,
      i,
      s,
      o,
      a,
      l
    return (
      (e >= 0 && t >= 0 && n >= 0) ||
        (e <= 0 && t <= 0 && n <= 0) ||
        ((e += um(md(n) + t) * 864e5), (t = 0), (n = 0)),
      (r.milliseconds = e % 1e3),
      (i = zt(e / 1e3)),
      (r.seconds = i % 60),
      (s = zt(i / 60)),
      (r.minutes = s % 60),
      (o = zt(s / 60)),
      (r.hours = o % 24),
      (t += zt(o / 24)),
      (l = zt(W0(t))),
      (n += l),
      (t -= um(md(l))),
      (a = zt(n / 12)),
      (n %= 12),
      (r.days = t),
      (r.months = n),
      (r.years = a),
      this
    )
  }
  function W0(e) {
    return (e * 4800) / 146097
  }
  function md(e) {
    return (e * 146097) / 4800
  }
  function jO(e) {
    if (!this.isValid()) return NaN
    var t,
      n,
      r = this._milliseconds
    if (((e = Gt(e)), e === 'month' || e === 'quarter' || e === 'year'))
      switch (((t = this._days + r / 864e5), (n = this._months + W0(t)), e)) {
        case 'month':
          return n
        case 'quarter':
          return n / 3
        case 'year':
          return n / 12
      }
    else
      switch (((t = this._days + Math.round(md(this._months))), e)) {
        case 'week':
          return t / 7 + r / 6048e5
        case 'day':
          return t + r / 864e5
        case 'hour':
          return t * 24 + r / 36e5
        case 'minute':
          return t * 1440 + r / 6e4
        case 'second':
          return t * 86400 + r / 1e3
        case 'millisecond':
          return Math.floor(t * 864e5) + r
        default:
          throw new Error('Unknown unit ' + e)
      }
  }
  function WO() {
    return this.isValid()
      ? this._milliseconds +
          this._days * 864e5 +
          (this._months % 12) * 2592e6 +
          ne(this._months / 12) * 31536e6
      : NaN
  }
  function Bn(e) {
    return function () {
      return this.as(e)
    }
  }
  var BO = Bn('ms'),
    YO = Bn('s'),
    HO = Bn('m'),
    VO = Bn('h'),
    GO = Bn('d'),
    KO = Bn('w'),
    qO = Bn('M'),
    QO = Bn('Q'),
    JO = Bn('y')
  function XO() {
    return un(this)
  }
  function ZO(e) {
    return (e = Gt(e)), this.isValid() ? this[e + 's']() : NaN
  }
  function Xr(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN
    }
  }
  var eR = Xr('milliseconds'),
    tR = Xr('seconds'),
    nR = Xr('minutes'),
    rR = Xr('hours'),
    iR = Xr('days'),
    sR = Xr('months'),
    oR = Xr('years')
  function aR() {
    return zt(this.days() / 7)
  }
  var In = Math.round,
    Si = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 }
  function lR(e, t, n, r, i) {
    return i.relativeTime(t || 1, !!n, e, r)
  }
  function uR(e, t, n, r) {
    var i = un(e).abs(),
      s = In(i.as('s')),
      o = In(i.as('m')),
      a = In(i.as('h')),
      l = In(i.as('d')),
      u = In(i.as('M')),
      d = In(i.as('w')),
      p = In(i.as('y')),
      f =
        (s <= n.ss && ['s', s]) ||
        (s < n.s && ['ss', s]) ||
        (o <= 1 && ['m']) ||
        (o < n.m && ['mm', o]) ||
        (a <= 1 && ['h']) ||
        (a < n.h && ['hh', a]) ||
        (l <= 1 && ['d']) ||
        (l < n.d && ['dd', l])
    return (
      n.w != null && (f = f || (d <= 1 && ['w']) || (d < n.w && ['ww', d])),
      (f = f || (u <= 1 && ['M']) || (u < n.M && ['MM', u]) || (p <= 1 && ['y']) || ['yy', p]),
      (f[2] = t),
      (f[3] = +e > 0),
      (f[4] = r),
      lR.apply(null, f)
    )
  }
  function cR(e) {
    return e === void 0 ? In : typeof e == 'function' ? ((In = e), !0) : !1
  }
  function dR(e, t) {
    return Si[e] === void 0
      ? !1
      : t === void 0
      ? Si[e]
      : ((Si[e] = t), e === 's' && (Si.ss = t - 1), !0)
  }
  function fR(e, t) {
    if (!this.isValid()) return this.localeData().invalidDate()
    var n = !1,
      r = Si,
      i,
      s
    return (
      typeof e == 'object' && ((t = e), (e = !1)),
      typeof e == 'boolean' && (n = e),
      typeof t == 'object' &&
        ((r = Object.assign({}, Si, t)), t.s != null && t.ss == null && (r.ss = t.s - 1)),
      (i = this.localeData()),
      (s = uR(this, !n, r, i)),
      n && (s = i.pastFuture(+this, s)),
      i.postformat(s)
    )
  }
  var Bu = Math.abs
  function ri(e) {
    return (e > 0) - (e < 0) || +e
  }
  function Zl() {
    if (!this.isValid()) return this.localeData().invalidDate()
    var e = Bu(this._milliseconds) / 1e3,
      t = Bu(this._days),
      n = Bu(this._months),
      r,
      i,
      s,
      o,
      a = this.asSeconds(),
      l,
      u,
      d,
      p
    return a
      ? ((r = zt(e / 60)),
        (i = zt(r / 60)),
        (e %= 60),
        (r %= 60),
        (s = zt(n / 12)),
        (n %= 12),
        (o = e ? e.toFixed(3).replace(/\.?0+$/, '') : ''),
        (l = a < 0 ? '-' : ''),
        (u = ri(this._months) !== ri(a) ? '-' : ''),
        (d = ri(this._days) !== ri(a) ? '-' : ''),
        (p = ri(this._milliseconds) !== ri(a) ? '-' : ''),
        l +
          'P' +
          (s ? u + s + 'Y' : '') +
          (n ? u + n + 'M' : '') +
          (t ? d + t + 'D' : '') +
          (i || r || e ? 'T' : '') +
          (i ? p + i + 'H' : '') +
          (r ? p + r + 'M' : '') +
          (e ? p + o + 'S' : ''))
      : 'P0D'
  }
  var le = Jl.prototype
  le.isValid = ix
  le.abs = UO
  le.add = FO
  le.subtract = $O
  le.as = jO
  le.asMilliseconds = BO
  le.asSeconds = YO
  le.asMinutes = HO
  le.asHours = VO
  le.asDays = GO
  le.asWeeks = KO
  le.asMonths = qO
  le.asQuarters = QO
  le.asYears = JO
  le.valueOf = WO
  le._bubble = zO
  le.clone = XO
  le.get = ZO
  le.milliseconds = eR
  le.seconds = tR
  le.minutes = nR
  le.hours = rR
  le.days = iR
  le.weeks = aR
  le.months = sR
  le.years = oR
  le.humanize = fR
  le.toISOString = Zl
  le.toString = Zl
  le.toJSON = Zl
  le.locale = P0
  le.localeData = N0
  le.toIsoString = Vt(
    'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
    Zl
  )
  le.lang = D0
  Y('X', 0, 0, 'unix')
  Y('x', 0, 0, 'valueOf')
  $('x', Gl)
  $('X', AT)
  ke('X', function (e, t, n) {
    n._d = new Date(parseFloat(e) * 1e3)
  })
  ke('x', function (e, t, n) {
    n._d = new Date(ne(e))
  }) //! moment.js
  b.version = '2.29.4'
  hT(Oe)
  b.fn = R
  b.min = ex
  b.max = tx
  b.now = nx
  b.utc = wn
  b.unix = PO
  b.months = NO
  b.isDate = go
  b.locale = vr
  b.invalid = Wl
  b.duration = un
  b.isMoment = ln
  b.weekdays = AO
  b.parseZone = DO
  b.localeData = Wn
  b.isDuration = aa
  b.monthsShort = MO
  b.weekdaysMin = bO
  b.defineLocale = Gf
  b.updateLocale = DC
  b.locales = NC
  b.weekdaysShort = LO
  b.normalizeUnits = Gt
  b.relativeTimeRounding = cR
  b.relativeTimeThreshold = dR
  b.calendarFormat = xx
  b.prototype = R
  b.HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
    DATE: 'YYYY-MM-DD',
    TIME: 'HH:mm',
    TIME_SECONDS: 'HH:mm:ss',
    TIME_MS: 'HH:mm:ss.SSS',
    WEEK: 'GGGG-[W]WW',
    MONTH: 'YYYY-MM',
  }
  var B0 = { exports: {} },
    nh = { exports: {} },
    Y0 = function (t, n) {
      return function () {
        for (var i = new Array(arguments.length), s = 0; s < i.length; s++) i[s] = arguments[s]
        return t.apply(n, i)
      }
    },
    hR = Y0,
    rh = Object.prototype.toString,
    ih = (function (e) {
      return function (t) {
        var n = rh.call(t)
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
      }
    })(Object.create(null))
  function Zr(e) {
    return (
      (e = e.toLowerCase()),
      function (n) {
        return ih(n) === e
      }
    )
  }
  function sh(e) {
    return Array.isArray(e)
  }
  function Ja(e) {
    return typeof e > 'u'
  }
  function pR(e) {
    return (
      e !== null &&
      !Ja(e) &&
      e.constructor !== null &&
      !Ja(e.constructor) &&
      typeof e.constructor.isBuffer == 'function' &&
      e.constructor.isBuffer(e)
    )
  }
  var H0 = Zr('ArrayBuffer')
  function mR(e) {
    var t
    return (
      typeof ArrayBuffer < 'u' && ArrayBuffer.isView
        ? (t = ArrayBuffer.isView(e))
        : (t = e && e.buffer && H0(e.buffer)),
      t
    )
  }
  function vR(e) {
    return typeof e == 'string'
  }
  function gR(e) {
    return typeof e == 'number'
  }
  function V0(e) {
    return e !== null && typeof e == 'object'
  }
  function ua(e) {
    if (ih(e) !== 'object') return !1
    var t = Object.getPrototypeOf(e)
    return t === null || t === Object.prototype
  }
  var yR = Zr('Date'),
    _R = Zr('File'),
    wR = Zr('Blob'),
    SR = Zr('FileList')
  function oh(e) {
    return rh.call(e) === '[object Function]'
  }
  function kR(e) {
    return V0(e) && oh(e.pipe)
  }
  function ER(e) {
    var t = '[object FormData]'
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        rh.call(e) === t ||
        (oh(e.toString) && e.toString() === t))
    )
  }
  var IR = Zr('URLSearchParams')
  function TR(e) {
    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
  }
  function CR() {
    return typeof navigator < 'u' &&
      (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u'
  }
  function ah(e, t) {
    if (!(e === null || typeof e > 'u'))
      if ((typeof e != 'object' && (e = [e]), sh(e)))
        for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e)
      else for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.call(null, e[i], i, e)
  }
  function vd() {
    var e = {}
    function t(i, s) {
      ua(e[s]) && ua(i)
        ? (e[s] = vd(e[s], i))
        : ua(i)
        ? (e[s] = vd({}, i))
        : sh(i)
        ? (e[s] = i.slice())
        : (e[s] = i)
    }
    for (var n = 0, r = arguments.length; n < r; n++) ah(arguments[n], t)
    return e
  }
  function xR(e, t, n) {
    return (
      ah(t, function (i, s) {
        n && typeof i == 'function' ? (e[s] = hR(i, n)) : (e[s] = i)
      }),
      e
    )
  }
  function OR(e) {
    return e.charCodeAt(0) === 65279 && (e = e.slice(1)), e
  }
  function RR(e, t, n, r) {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      n && Object.assign(e.prototype, n)
  }
  function PR(e, t, n) {
    var r,
      i,
      s,
      o = {}
    t = t || {}
    do {
      for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
        (s = r[i]), o[s] || ((t[s] = e[s]), (o[s] = !0))
      e = Object.getPrototypeOf(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  }
  function DR(e, t, n) {
    ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
    var r = e.indexOf(t, n)
    return r !== -1 && r === n
  }
  function NR(e) {
    if (!e) return null
    var t = e.length
    if (Ja(t)) return null
    for (var n = new Array(t); t-- > 0; ) n[t] = e[t]
    return n
  }
  var MR = (function (e) {
      return function (t) {
        return e && t instanceof e
      }
    })(typeof Uint8Array < 'u' && Object.getPrototypeOf(Uint8Array)),
    ot = {
      isArray: sh,
      isArrayBuffer: H0,
      isBuffer: pR,
      isFormData: ER,
      isArrayBufferView: mR,
      isString: vR,
      isNumber: gR,
      isObject: V0,
      isPlainObject: ua,
      isUndefined: Ja,
      isDate: yR,
      isFile: _R,
      isBlob: wR,
      isFunction: oh,
      isStream: kR,
      isURLSearchParams: IR,
      isStandardBrowserEnv: CR,
      forEach: ah,
      merge: vd,
      extend: xR,
      trim: TR,
      stripBOM: OR,
      inherits: RR,
      toFlatObject: PR,
      kindOf: ih,
      kindOfTest: Zr,
      endsWith: DR,
      toArray: NR,
      isTypedArray: MR,
      isFileList: SR,
    },
    ii = ot
  function cm(e) {
    return encodeURIComponent(e)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']')
  }
  var G0 = function (t, n, r) {
      if (!n) return t
      var i
      if (r) i = r(n)
      else if (ii.isURLSearchParams(n)) i = n.toString()
      else {
        var s = []
        ii.forEach(n, function (l, u) {
          l === null ||
            typeof l > 'u' ||
            (ii.isArray(l) ? (u = u + '[]') : (l = [l]),
            ii.forEach(l, function (p) {
              ii.isDate(p) ? (p = p.toISOString()) : ii.isObject(p) && (p = JSON.stringify(p)),
                s.push(cm(u) + '=' + cm(p))
            }))
        }),
          (i = s.join('&'))
      }
      if (i) {
        var o = t.indexOf('#')
        o !== -1 && (t = t.slice(0, o)), (t += (t.indexOf('?') === -1 ? '?' : '&') + i)
      }
      return t
    },
    AR = ot
  function eu() {
    this.handlers = []
  }
  eu.prototype.use = function (t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    )
  }
  eu.prototype.eject = function (t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  eu.prototype.forEach = function (t) {
    AR.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
  var LR = eu,
    bR = ot,
    UR = function (t, n) {
      bR.forEach(t, function (i, s) {
        s !== n && s.toUpperCase() === n.toUpperCase() && ((t[n] = i), delete t[s])
      })
    },
    K0 = ot
  function Vi(e, t, n, r, i) {
    Error.call(this),
      (this.message = e),
      (this.name = 'AxiosError'),
      t && (this.code = t),
      n && (this.config = n),
      r && (this.request = r),
      i && (this.response = i)
  }
  K0.inherits(Vi, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status: this.response && this.response.status ? this.response.status : null,
      }
    },
  })
  var q0 = Vi.prototype,
    Q0 = {}
  ;[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
  ].forEach(function (e) {
    Q0[e] = { value: e }
  })
  Object.defineProperties(Vi, Q0)
  Object.defineProperty(q0, 'isAxiosError', { value: !0 })
  Vi.from = function (e, t, n, r, i, s) {
    var o = Object.create(q0)
    return (
      K0.toFlatObject(e, o, function (l) {
        return l !== Error.prototype
      }),
      Vi.call(o, e.message, t, n, r, i),
      (o.name = e.name),
      s && Object.assign(o, s),
      o
    )
  }
  var ts = Vi,
    J0 = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
    Jt = ot
  function FR(e, t) {
    t = t || new FormData()
    var n = []
    function r(s) {
      return s === null
        ? ''
        : Jt.isDate(s)
        ? s.toISOString()
        : Jt.isArrayBuffer(s) || Jt.isTypedArray(s)
        ? typeof Blob == 'function'
          ? new Blob([s])
          : Buffer.from(s)
        : s
    }
    function i(s, o) {
      if (Jt.isPlainObject(s) || Jt.isArray(s)) {
        if (n.indexOf(s) !== -1) throw Error('Circular reference detected in ' + o)
        n.push(s),
          Jt.forEach(s, function (l, u) {
            if (!Jt.isUndefined(l)) {
              var d = o ? o + '.' + u : u,
                p
              if (l && !o && typeof l == 'object') {
                if (Jt.endsWith(u, '{}')) l = JSON.stringify(l)
                else if (Jt.endsWith(u, '[]') && (p = Jt.toArray(l))) {
                  p.forEach(function (f) {
                    !Jt.isUndefined(f) && t.append(d, r(f))
                  })
                  return
                }
              }
              i(l, d)
            }
          }),
          n.pop()
      } else t.append(o, r(s))
    }
    return i(e), t
  }
  var X0 = FR,
    Yu,
    dm
  function $R() {
    if (dm) return Yu
    dm = 1
    var e = ts
    return (
      (Yu = function (n, r, i) {
        var s = i.config.validateStatus
        !i.status || !s || s(i.status)
          ? n(i)
          : r(
              new e(
                'Request failed with status code ' + i.status,
                [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
                i.config,
                i.request,
                i
              )
            )
      }),
      Yu
    )
  }
  var Hu, fm
  function zR() {
    if (fm) return Hu
    fm = 1
    var e = ot
    return (
      (Hu = e.isStandardBrowserEnv()
        ? (function () {
            return {
              write: function (r, i, s, o, a, l) {
                var u = []
                u.push(r + '=' + encodeURIComponent(i)),
                  e.isNumber(s) && u.push('expires=' + new Date(s).toGMTString()),
                  e.isString(o) && u.push('path=' + o),
                  e.isString(a) && u.push('domain=' + a),
                  l === !0 && u.push('secure'),
                  (document.cookie = u.join('; '))
              },
              read: function (r) {
                var i = document.cookie.match(new RegExp('(^|;\\s*)(' + r + ')=([^;]*)'))
                return i ? decodeURIComponent(i[3]) : null
              },
              remove: function (r) {
                this.write(r, '', Date.now() - 864e5)
              },
            }
          })()
        : (function () {
            return {
              write: function () {},
              read: function () {
                return null
              },
              remove: function () {},
            }
          })()),
      Hu
    )
  }
  var jR = function (t) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
    },
    WR = function (t, n) {
      return n ? t.replace(/\/+$/, '') + '/' + n.replace(/^\/+/, '') : t
    },
    BR = jR,
    YR = WR,
    Z0 = function (t, n) {
      return t && !BR(n) ? YR(t, n) : n
    },
    Vu,
    hm
  function HR() {
    if (hm) return Vu
    hm = 1
    var e = ot,
      t = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
      ]
    return (
      (Vu = function (r) {
        var i = {},
          s,
          o,
          a
        return (
          r &&
            e.forEach(
              r.split(`
`),
              function (u) {
                if (
                  ((a = u.indexOf(':')),
                  (s = e.trim(u.substr(0, a)).toLowerCase()),
                  (o = e.trim(u.substr(a + 1))),
                  s)
                ) {
                  if (i[s] && t.indexOf(s) >= 0) return
                  s === 'set-cookie'
                    ? (i[s] = (i[s] ? i[s] : []).concat([o]))
                    : (i[s] = i[s] ? i[s] + ', ' + o : o)
                }
              }
            ),
          i
        )
      }),
      Vu
    )
  }
  var Gu, pm
  function VR() {
    if (pm) return Gu
    pm = 1
    var e = ot
    return (
      (Gu = e.isStandardBrowserEnv()
        ? (function () {
            var n = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement('a'),
              i
            function s(o) {
              var a = o
              return (
                n && (r.setAttribute('href', a), (a = r.href)),
                r.setAttribute('href', a),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, '') : '',
                  hash: r.hash ? r.hash.replace(/^#/, '') : '',
                  hostname: r.hostname,
                  port: r.port,
                  pathname: r.pathname.charAt(0) === '/' ? r.pathname : '/' + r.pathname,
                }
              )
            }
            return (
              (i = s(window.location.href)),
              function (a) {
                var l = e.isString(a) ? s(a) : a
                return l.protocol === i.protocol && l.host === i.host
              }
            )
          })()
        : (function () {
            return function () {
              return !0
            }
          })()),
      Gu
    )
  }
  var Ku, mm
  function tu() {
    if (mm) return Ku
    mm = 1
    var e = ts,
      t = ot
    function n(r) {
      e.call(this, r == null ? 'canceled' : r, e.ERR_CANCELED), (this.name = 'CanceledError')
    }
    return t.inherits(n, e, { __CANCEL__: !0 }), (Ku = n), Ku
  }
  var qu, vm
  function GR() {
    return (
      vm ||
        ((vm = 1),
        (qu = function (t) {
          var n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t)
          return (n && n[1]) || ''
        })),
      qu
    )
  }
  var Qu, gm
  function ym() {
    if (gm) return Qu
    gm = 1
    var e = ot,
      t = $R(),
      n = zR(),
      r = G0,
      i = Z0,
      s = HR(),
      o = VR(),
      a = J0,
      l = ts,
      u = tu(),
      d = GR()
    return (
      (Qu = function (f) {
        return new Promise(function (k, E) {
          var N = f.data,
            m = f.headers,
            h = f.responseType,
            v
          function w() {
            f.cancelToken && f.cancelToken.unsubscribe(v),
              f.signal && f.signal.removeEventListener('abort', v)
          }
          e.isFormData(N) && e.isStandardBrowserEnv() && delete m['Content-Type']
          var _ = new XMLHttpRequest()
          if (f.auth) {
            var L = f.auth.username || '',
              I = f.auth.password ? unescape(encodeURIComponent(f.auth.password)) : ''
            m.Authorization = 'Basic ' + btoa(L + ':' + I)
          }
          var x = i(f.baseURL, f.url)
          _.open(f.method.toUpperCase(), r(x, f.params, f.paramsSerializer), !0),
            (_.timeout = f.timeout)
          function W() {
            if (!!_) {
              var Z = 'getAllResponseHeaders' in _ ? s(_.getAllResponseHeaders()) : null,
                oe = !h || h === 'text' || h === 'json' ? _.responseText : _.response,
                Se = {
                  data: oe,
                  status: _.status,
                  statusText: _.statusText,
                  headers: Z,
                  config: f,
                  request: _,
                }
              t(
                function (Qe) {
                  k(Qe), w()
                },
                function (Qe) {
                  E(Qe), w()
                },
                Se
              ),
                (_ = null)
            }
          }
          if (
            ('onloadend' in _
              ? (_.onloadend = W)
              : (_.onreadystatechange = function () {
                  !_ ||
                    _.readyState !== 4 ||
                    (_.status === 0 && !(_.responseURL && _.responseURL.indexOf('file:') === 0)) ||
                    setTimeout(W)
                }),
            (_.onabort = function () {
              !_ || (E(new l('Request aborted', l.ECONNABORTED, f, _)), (_ = null))
            }),
            (_.onerror = function () {
              E(new l('Network Error', l.ERR_NETWORK, f, _, _)), (_ = null)
            }),
            (_.ontimeout = function () {
              var oe = f.timeout ? 'timeout of ' + f.timeout + 'ms exceeded' : 'timeout exceeded',
                Se = f.transitional || a
              f.timeoutErrorMessage && (oe = f.timeoutErrorMessage),
                E(new l(oe, Se.clarifyTimeoutError ? l.ETIMEDOUT : l.ECONNABORTED, f, _)),
                (_ = null)
            }),
            e.isStandardBrowserEnv())
          ) {
            var j =
              (f.withCredentials || o(x)) && f.xsrfCookieName ? n.read(f.xsrfCookieName) : void 0
            j && (m[f.xsrfHeaderName] = j)
          }
          'setRequestHeader' in _ &&
            e.forEach(m, function (oe, Se) {
              typeof N > 'u' && Se.toLowerCase() === 'content-type'
                ? delete m[Se]
                : _.setRequestHeader(Se, oe)
            }),
            e.isUndefined(f.withCredentials) || (_.withCredentials = !!f.withCredentials),
            h && h !== 'json' && (_.responseType = f.responseType),
            typeof f.onDownloadProgress == 'function' &&
              _.addEventListener('progress', f.onDownloadProgress),
            typeof f.onUploadProgress == 'function' &&
              _.upload &&
              _.upload.addEventListener('progress', f.onUploadProgress),
            (f.cancelToken || f.signal) &&
              ((v = function (Z) {
                !_ || (E(!Z || (Z && Z.type) ? new u() : Z), _.abort(), (_ = null))
              }),
              f.cancelToken && f.cancelToken.subscribe(v),
              f.signal && (f.signal.aborted ? v() : f.signal.addEventListener('abort', v))),
            N || (N = null)
          var re = d(x)
          if (re && ['http', 'https', 'file'].indexOf(re) === -1) {
            E(new l('Unsupported protocol ' + re + ':', l.ERR_BAD_REQUEST, f))
            return
          }
          _.send(N)
        })
      }),
      Qu
    )
  }
  var Ju, _m
  function KR() {
    return _m || ((_m = 1), (Ju = null)), Ju
  }
  var Xe = ot,
    wm = UR,
    Sm = ts,
    qR = J0,
    QR = X0,
    JR = { 'Content-Type': 'application/x-www-form-urlencoded' }
  function km(e, t) {
    !Xe.isUndefined(e) && Xe.isUndefined(e['Content-Type']) && (e['Content-Type'] = t)
  }
  function XR() {
    var e
    return (
      (typeof XMLHttpRequest < 'u' ||
        (typeof process < 'u' && Object.prototype.toString.call(process) === '[object process]')) &&
        (e = ym()),
      e
    )
  }
  function ZR(e, t, n) {
    if (Xe.isString(e))
      try {
        return (t || JSON.parse)(e), Xe.trim(e)
      } catch (r) {
        if (r.name !== 'SyntaxError') throw r
      }
    return (n || JSON.stringify)(e)
  }
  var nu = {
    transitional: qR,
    adapter: XR(),
    transformRequest: [
      function (t, n) {
        if (
          (wm(n, 'Accept'),
          wm(n, 'Content-Type'),
          Xe.isFormData(t) ||
            Xe.isArrayBuffer(t) ||
            Xe.isBuffer(t) ||
            Xe.isStream(t) ||
            Xe.isFile(t) ||
            Xe.isBlob(t))
        )
          return t
        if (Xe.isArrayBufferView(t)) return t.buffer
        if (Xe.isURLSearchParams(t))
          return km(n, 'application/x-www-form-urlencoded;charset=utf-8'), t.toString()
        var r = Xe.isObject(t),
          i = n && n['Content-Type'],
          s
        if ((s = Xe.isFileList(t)) || (r && i === 'multipart/form-data')) {
          var o = this.env && this.env.FormData
          return QR(s ? { 'files[]': t } : t, o && new o())
        } else if (r || i === 'application/json') return km(n, 'application/json'), ZR(t)
        return t
      },
    ],
    transformResponse: [
      function (t) {
        var n = this.transitional || nu.transitional,
          r = n && n.silentJSONParsing,
          i = n && n.forcedJSONParsing,
          s = !r && this.responseType === 'json'
        if (s || (i && Xe.isString(t) && t.length))
          try {
            return JSON.parse(t)
          } catch (o) {
            if (s)
              throw o.name === 'SyntaxError'
                ? Sm.from(o, Sm.ERR_BAD_RESPONSE, this, null, this.response)
                : o
          }
        return t
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: KR() },
    validateStatus: function (t) {
      return t >= 200 && t < 300
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } },
  }
  Xe.forEach(['delete', 'get', 'head'], function (t) {
    nu.headers[t] = {}
  })
  Xe.forEach(['post', 'put', 'patch'], function (t) {
    nu.headers[t] = Xe.merge(JR)
  })
  var lh = nu,
    eP = ot,
    tP = lh,
    nP = function (t, n, r) {
      var i = this || tP
      return (
        eP.forEach(r, function (o) {
          t = o.call(i, t, n)
        }),
        t
      )
    },
    Xu,
    Em
  function e1() {
    return (
      Em ||
        ((Em = 1),
        (Xu = function (t) {
          return !!(t && t.__CANCEL__)
        })),
      Xu
    )
  }
  var Im = ot,
    Zu = nP,
    rP = e1(),
    iP = lh,
    sP = tu()
  function ec(e) {
    if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
      throw new sP()
  }
  var oP = function (t) {
      ec(t),
        (t.headers = t.headers || {}),
        (t.data = Zu.call(t, t.data, t.headers, t.transformRequest)),
        (t.headers = Im.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers)),
        Im.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function (i) {
          delete t.headers[i]
        })
      var n = t.adapter || iP.adapter
      return n(t).then(
        function (i) {
          return ec(t), (i.data = Zu.call(t, i.data, i.headers, t.transformResponse)), i
        },
        function (i) {
          return (
            rP(i) ||
              (ec(t),
              i &&
                i.response &&
                (i.response.data = Zu.call(
                  t,
                  i.response.data,
                  i.response.headers,
                  t.transformResponse
                ))),
            Promise.reject(i)
          )
        }
      )
    },
    Ot = ot,
    t1 = function (t, n) {
      n = n || {}
      var r = {}
      function i(d, p) {
        return Ot.isPlainObject(d) && Ot.isPlainObject(p)
          ? Ot.merge(d, p)
          : Ot.isPlainObject(p)
          ? Ot.merge({}, p)
          : Ot.isArray(p)
          ? p.slice()
          : p
      }
      function s(d) {
        if (Ot.isUndefined(n[d])) {
          if (!Ot.isUndefined(t[d])) return i(void 0, t[d])
        } else return i(t[d], n[d])
      }
      function o(d) {
        if (!Ot.isUndefined(n[d])) return i(void 0, n[d])
      }
      function a(d) {
        if (Ot.isUndefined(n[d])) {
          if (!Ot.isUndefined(t[d])) return i(void 0, t[d])
        } else return i(void 0, n[d])
      }
      function l(d) {
        if (d in n) return i(t[d], n[d])
        if (d in t) return i(void 0, t[d])
      }
      var u = {
        url: o,
        method: o,
        data: o,
        baseURL: a,
        transformRequest: a,
        transformResponse: a,
        paramsSerializer: a,
        timeout: a,
        timeoutMessage: a,
        withCredentials: a,
        adapter: a,
        responseType: a,
        xsrfCookieName: a,
        xsrfHeaderName: a,
        onUploadProgress: a,
        onDownloadProgress: a,
        decompress: a,
        maxContentLength: a,
        maxBodyLength: a,
        beforeRedirect: a,
        transport: a,
        httpAgent: a,
        httpsAgent: a,
        cancelToken: a,
        socketPath: a,
        responseEncoding: a,
        validateStatus: l,
      }
      return (
        Ot.forEach(Object.keys(t).concat(Object.keys(n)), function (p) {
          var f = u[p] || s,
            S = f(p)
          ;(Ot.isUndefined(S) && f !== l) || (r[p] = S)
        }),
        r
      )
    },
    tc,
    Tm
  function n1() {
    return Tm || ((Tm = 1), (tc = { version: '0.27.2' })), tc
  }
  var aP = n1().version,
    qn = ts,
    uh = {}
  ;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (e, t) {
    uh[e] = function (r) {
      return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  })
  var Cm = {}
  uh.transitional = function (t, n, r) {
    function i(s, o) {
      return '[Axios v' + aP + "] Transitional option '" + s + "'" + o + (r ? '. ' + r : '')
    }
    return function (s, o, a) {
      if (t === !1)
        throw new qn(i(o, ' has been removed' + (n ? ' in ' + n : '')), qn.ERR_DEPRECATED)
      return (
        n &&
          !Cm[o] &&
          ((Cm[o] = !0),
          console.warn(
            i(o, ' has been deprecated since v' + n + ' and will be removed in the near future')
          )),
        t ? t(s, o, a) : !0
      )
    }
  }
  function lP(e, t, n) {
    if (typeof e != 'object') throw new qn('options must be an object', qn.ERR_BAD_OPTION_VALUE)
    for (var r = Object.keys(e), i = r.length; i-- > 0; ) {
      var s = r[i],
        o = t[s]
      if (o) {
        var a = e[s],
          l = a === void 0 || o(a, s, e)
        if (l !== !0) throw new qn('option ' + s + ' must be ' + l, qn.ERR_BAD_OPTION_VALUE)
        continue
      }
      if (n !== !0) throw new qn('Unknown option ' + s, qn.ERR_BAD_OPTION)
    }
  }
  var uP = { assertOptions: lP, validators: uh },
    r1 = ot,
    cP = G0,
    xm = LR,
    Om = oP,
    ru = t1,
    dP = Z0,
    i1 = uP,
    si = i1.validators
  function Gi(e) {
    ;(this.defaults = e), (this.interceptors = { request: new xm(), response: new xm() })
  }
  Gi.prototype.request = function (t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = ru(this.defaults, n)),
      n.method
        ? (n.method = n.method.toLowerCase())
        : this.defaults.method
        ? (n.method = this.defaults.method.toLowerCase())
        : (n.method = 'get')
    var r = n.transitional
    r !== void 0 &&
      i1.assertOptions(
        r,
        {
          silentJSONParsing: si.transitional(si.boolean),
          forcedJSONParsing: si.transitional(si.boolean),
          clarifyTimeoutError: si.transitional(si.boolean),
        },
        !1
      )
    var i = [],
      s = !0
    this.interceptors.request.forEach(function (S) {
      ;(typeof S.runWhen == 'function' && S.runWhen(n) === !1) ||
        ((s = s && S.synchronous), i.unshift(S.fulfilled, S.rejected))
    })
    var o = []
    this.interceptors.response.forEach(function (S) {
      o.push(S.fulfilled, S.rejected)
    })
    var a
    if (!s) {
      var l = [Om, void 0]
      for (Array.prototype.unshift.apply(l, i), l = l.concat(o), a = Promise.resolve(n); l.length; )
        a = a.then(l.shift(), l.shift())
      return a
    }
    for (var u = n; i.length; ) {
      var d = i.shift(),
        p = i.shift()
      try {
        u = d(u)
      } catch (f) {
        p(f)
        break
      }
    }
    try {
      a = Om(u)
    } catch (f) {
      return Promise.reject(f)
    }
    for (; o.length; ) a = a.then(o.shift(), o.shift())
    return a
  }
  Gi.prototype.getUri = function (t) {
    t = ru(this.defaults, t)
    var n = dP(t.baseURL, t.url)
    return cP(n, t.params, t.paramsSerializer)
  }
  r1.forEach(['delete', 'get', 'head', 'options'], function (t) {
    Gi.prototype[t] = function (n, r) {
      return this.request(ru(r || {}, { method: t, url: n, data: (r || {}).data }))
    }
  })
  r1.forEach(['post', 'put', 'patch'], function (t) {
    function n(r) {
      return function (s, o, a) {
        return this.request(
          ru(a || {}, {
            method: t,
            headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
            url: s,
            data: o,
          })
        )
      }
    }
    ;(Gi.prototype[t] = n()), (Gi.prototype[t + 'Form'] = n(!0))
  })
  var fP = Gi,
    nc,
    Rm
  function hP() {
    if (Rm) return nc
    Rm = 1
    var e = tu()
    function t(n) {
      if (typeof n != 'function') throw new TypeError('executor must be a function.')
      var r
      this.promise = new Promise(function (o) {
        r = o
      })
      var i = this
      this.promise.then(function (s) {
        if (!!i._listeners) {
          var o,
            a = i._listeners.length
          for (o = 0; o < a; o++) i._listeners[o](s)
          i._listeners = null
        }
      }),
        (this.promise.then = function (s) {
          var o,
            a = new Promise(function (l) {
              i.subscribe(l), (o = l)
            }).then(s)
          return (
            (a.cancel = function () {
              i.unsubscribe(o)
            }),
            a
          )
        }),
        n(function (o) {
          i.reason || ((i.reason = new e(o)), r(i.reason))
        })
    }
    return (
      (t.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
      }),
      (t.prototype.subscribe = function (r) {
        if (this.reason) {
          r(this.reason)
          return
        }
        this._listeners ? this._listeners.push(r) : (this._listeners = [r])
      }),
      (t.prototype.unsubscribe = function (r) {
        if (!!this._listeners) {
          var i = this._listeners.indexOf(r)
          i !== -1 && this._listeners.splice(i, 1)
        }
      }),
      (t.source = function () {
        var r,
          i = new t(function (o) {
            r = o
          })
        return { token: i, cancel: r }
      }),
      (nc = t),
      nc
    )
  }
  var rc, Pm
  function pP() {
    return (
      Pm ||
        ((Pm = 1),
        (rc = function (t) {
          return function (r) {
            return t.apply(null, r)
          }
        })),
      rc
    )
  }
  var ic, Dm
  function mP() {
    if (Dm) return ic
    Dm = 1
    var e = ot
    return (
      (ic = function (n) {
        return e.isObject(n) && n.isAxiosError === !0
      }),
      ic
    )
  }
  var Nm = ot,
    vP = Y0,
    ca = fP,
    gP = t1,
    yP = lh
  function s1(e) {
    var t = new ca(e),
      n = vP(ca.prototype.request, t)
    return (
      Nm.extend(n, ca.prototype, t),
      Nm.extend(n, t),
      (n.create = function (i) {
        return s1(gP(e, i))
      }),
      n
    )
  }
  var Ct = s1(yP)
  Ct.Axios = ca
  Ct.CanceledError = tu()
  Ct.CancelToken = hP()
  Ct.isCancel = e1()
  Ct.VERSION = n1().version
  Ct.toFormData = X0
  Ct.AxiosError = ts
  Ct.Cancel = Ct.CanceledError
  Ct.all = function (t) {
    return Promise.all(t)
  }
  Ct.spread = pP()
  Ct.isAxiosError = mP()
  nh.exports = Ct
  nh.exports.default = Ct
  ;(function (e) {
    e.exports = nh.exports
  })(B0)
  const o1 = Fm(B0.exports),
    ch = X.exports.createContext({}),
    _P = ({ children: e }) => {
      const [t, n] = X.exports.useState([]),
        [r, i] = X.exports.useState(''),
        [s, o] = X.exports.useState(!0),
        a = async () => {
          try {
            const u = await o1.get('http://localhost:4000/getall')
            u.data.users.sort((d, p) => p.date - d.date), n(u.data.users), o(!1)
          } catch (u) {
            console.log(u), i('Internal server error'), o(!1)
          }
        }
      X.exports.useEffect(() => {
        a()
      }, [])
      const l = { users: t, reloadUsers: a, error: r, loading: s }
      return ie(ch.Provider, { value: l, children: e })
    },
    wP = ({ item: e }) => {
      const { reloadUsers: t } = X.exports.useContext(ch),
        n = async (r) => {
          await o1.post('http://localhost:4000/deleteone', { delId: r }), t()
        }
      return Hi(fT, {
        children: [
          ie('h2', { children: e.name }),
          ie('span', { children: e.email }),
          ie('span', { children: e.class }),
          ie('span', { children: e.profile }),
          ie('span', { children: b(e.date).fromNow() }),
          ie('button', { onClick: () => n(e.id), children: 'USU\u0143' }),
        ],
      })
    },
    SP = () => {
      const { users: e, error: t, loading: n } = X.exports.useContext(ch)
      return ie(cT, {
        children: ie(dT, {
          children: n
            ? ie('h1', { children: 'Loading..' })
            : ie(im, {
                children:
                  t == ''
                    ? ie(im, {
                        children:
                          e.length > 0
                            ? e.map((r) => ie(wP, { item: r }, r.id))
                            : ie('h1', { children: 'List is empty' }),
                      })
                    : ie('h1', { children: 'Internal server error' }),
              }),
        }),
      })
    },
    kP = jn.div`
  width: 100%;
  height: 100%;
`,
    EP = () =>
      Hi(kP, {
        children: [
          Hi(uT, {
            children: [
              ie('span', { children: 'OMNIBUS ADMIN' }),
              ie('button', {
                onClick: () => {
                  try {
                    $E(Lf)
                  } catch (t) {
                    console.log(t)
                  }
                },
                children: 'SIGN OUT',
              }),
            ],
          }),
          ie(_P, { children: ie(SP, {}) }),
        ],
      })
  function Xa() {
    return (
      (Xa = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }),
      Xa.apply(this, arguments)
    )
  }
  var Lr
  ;(function (e) {
    ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
  })(Lr || (Lr = {}))
  var Mm = function (e) {
      return e
    },
    Am = 'beforeunload',
    IP = 'popstate'
  function TP(e) {
    e === void 0 && (e = {})
    var t = e,
      n = t.window,
      r = n === void 0 ? document.defaultView : n,
      i = r.history
    function s() {
      var I = r.location,
        x = I.pathname,
        W = I.search,
        j = I.hash,
        re = i.state || {}
      return [
        re.idx,
        Mm({ pathname: x, search: W, hash: j, state: re.usr || null, key: re.key || 'default' }),
      ]
    }
    var o = null
    function a() {
      if (o) S.call(o), (o = null)
      else {
        var I = Lr.Pop,
          x = s(),
          W = x[0],
          j = x[1]
        if (S.length) {
          if (W != null) {
            var re = d - W
            re &&
              ((o = {
                action: I,
                location: j,
                retry: function () {
                  _(re * -1)
                },
              }),
              _(re))
          }
        } else h(I)
      }
    }
    r.addEventListener(IP, a)
    var l = Lr.Pop,
      u = s(),
      d = u[0],
      p = u[1],
      f = bm(),
      S = bm()
    d == null && ((d = 0), i.replaceState(Xa({}, i.state, { idx: d }), ''))
    function k(I) {
      return typeof I == 'string' ? I : xP(I)
    }
    function E(I, x) {
      return (
        x === void 0 && (x = null),
        Mm(
          Xa({ pathname: p.pathname, hash: '', search: '' }, typeof I == 'string' ? iu(I) : I, {
            state: x,
            key: CP(),
          })
        )
      )
    }
    function N(I, x) {
      return [{ usr: I.state, key: I.key, idx: x }, k(I)]
    }
    function m(I, x, W) {
      return !S.length || (S.call({ action: I, location: x, retry: W }), !1)
    }
    function h(I) {
      l = I
      var x = s()
      ;(d = x[0]), (p = x[1]), f.call({ action: l, location: p })
    }
    function v(I, x) {
      var W = Lr.Push,
        j = E(I, x)
      function re() {
        v(I, x)
      }
      if (m(W, j, re)) {
        var Z = N(j, d + 1),
          oe = Z[0],
          Se = Z[1]
        try {
          i.pushState(oe, '', Se)
        } catch {
          r.location.assign(Se)
        }
        h(W)
      }
    }
    function w(I, x) {
      var W = Lr.Replace,
        j = E(I, x)
      function re() {
        w(I, x)
      }
      if (m(W, j, re)) {
        var Z = N(j, d),
          oe = Z[0],
          Se = Z[1]
        i.replaceState(oe, '', Se), h(W)
      }
    }
    function _(I) {
      i.go(I)
    }
    var L = {
      get action() {
        return l
      },
      get location() {
        return p
      },
      createHref: k,
      push: v,
      replace: w,
      go: _,
      back: function () {
        _(-1)
      },
      forward: function () {
        _(1)
      },
      listen: function (x) {
        return f.push(x)
      },
      block: function (x) {
        var W = S.push(x)
        return (
          S.length === 1 && r.addEventListener(Am, Lm),
          function () {
            W(), S.length || r.removeEventListener(Am, Lm)
          }
        )
      },
    }
    return L
  }
  function Lm(e) {
    e.preventDefault(), (e.returnValue = '')
  }
  function bm() {
    var e = []
    return {
      get length() {
        return e.length
      },
      push: function (n) {
        return (
          e.push(n),
          function () {
            e = e.filter(function (r) {
              return r !== n
            })
          }
        )
      },
      call: function (n) {
        e.forEach(function (r) {
          return r && r(n)
        })
      },
    }
  }
  function CP() {
    return Math.random().toString(36).substr(2, 8)
  }
  function xP(e) {
    var t = e.pathname,
      n = t === void 0 ? '/' : t,
      r = e.search,
      i = r === void 0 ? '' : r,
      s = e.hash,
      o = s === void 0 ? '' : s
    return (
      i && i !== '?' && (n += i.charAt(0) === '?' ? i : '?' + i),
      o && o !== '#' && (n += o.charAt(0) === '#' ? o : '#' + o),
      n
    )
  }
  function iu(e) {
    var t = {}
    if (e) {
      var n = e.indexOf('#')
      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
      var r = e.indexOf('?')
      r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e)
    }
    return t
  }
  /**
   * React Router v6.3.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ const OP = X.exports.createContext(null),
    dh = X.exports.createContext(null),
    a1 = X.exports.createContext({ outlet: null, matches: [] })
  function _r(e, t) {
    if (!e) throw new Error(t)
  }
  function RP(e, t, n) {
    n === void 0 && (n = '/')
    let r = typeof t == 'string' ? iu(t) : t,
      i = u1(r.pathname || '/', n)
    if (i == null) return null
    let s = l1(e)
    PP(s)
    let o = null
    for (let a = 0; o == null && a < s.length; ++a) o = $P(s[a], i)
    return o
  }
  function l1(e, t, n, r) {
    return (
      t === void 0 && (t = []),
      n === void 0 && (n = []),
      r === void 0 && (r = ''),
      e.forEach((i, s) => {
        let o = {
          relativePath: i.path || '',
          caseSensitive: i.caseSensitive === !0,
          childrenIndex: s,
          route: i,
        }
        o.relativePath.startsWith('/') &&
          (o.relativePath.startsWith(r) || _r(!1),
          (o.relativePath = o.relativePath.slice(r.length)))
        let a = Ai([r, o.relativePath]),
          l = n.concat(o)
        i.children && i.children.length > 0 && (i.index === !0 && _r(!1), l1(i.children, t, l, a)),
          !(i.path == null && !i.index) && t.push({ path: a, score: UP(a, i.index), routesMeta: l })
      }),
      t
    )
  }
  function PP(e) {
    e.sort((t, n) =>
      t.score !== n.score
        ? n.score - t.score
        : FP(
            t.routesMeta.map((r) => r.childrenIndex),
            n.routesMeta.map((r) => r.childrenIndex)
          )
    )
  }
  const DP = /^:\w+$/,
    NP = 3,
    MP = 2,
    AP = 1,
    LP = 10,
    bP = -2,
    Um = (e) => e === '*'
  function UP(e, t) {
    let n = e.split('/'),
      r = n.length
    return (
      n.some(Um) && (r += bP),
      t && (r += MP),
      n.filter((i) => !Um(i)).reduce((i, s) => i + (DP.test(s) ? NP : s === '' ? AP : LP), r)
    )
  }
  function FP(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
      ? e[e.length - 1] - t[t.length - 1]
      : 0
  }
  function $P(e, t) {
    let { routesMeta: n } = e,
      r = {},
      i = '/',
      s = []
    for (let o = 0; o < n.length; ++o) {
      let a = n[o],
        l = o === n.length - 1,
        u = i === '/' ? t : t.slice(i.length) || '/',
        d = zP({ path: a.relativePath, caseSensitive: a.caseSensitive, end: l }, u)
      if (!d) return null
      Object.assign(r, d.params)
      let p = a.route
      s.push({
        params: r,
        pathname: Ai([i, d.pathname]),
        pathnameBase: c1(Ai([i, d.pathnameBase])),
        route: p,
      }),
        d.pathnameBase !== '/' && (i = Ai([i, d.pathnameBase]))
    }
    return s
  }
  function zP(e, t) {
    typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
    let [n, r] = jP(e.path, e.caseSensitive, e.end),
      i = t.match(n)
    if (!i) return null
    let s = i[0],
      o = s.replace(/(.)\/+$/, '$1'),
      a = i.slice(1)
    return {
      params: r.reduce((u, d, p) => {
        if (d === '*') {
          let f = a[p] || ''
          o = s.slice(0, s.length - f.length).replace(/(.)\/+$/, '$1')
        }
        return (u[d] = WP(a[p] || '')), u
      }, {}),
      pathname: s,
      pathnameBase: o,
      pattern: e,
    }
  }
  function jP(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0)
    let r = [],
      i =
        '^' +
        e
          .replace(/\/*\*?$/, '')
          .replace(/^\/*/, '/')
          .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
          .replace(/:(\w+)/g, (o, a) => (r.push(a), '([^\\/]+)'))
    return (
      e.endsWith('*')
        ? (r.push('*'), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
        : (i += n ? '\\/*$' : '(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)'),
      [new RegExp(i, t ? void 0 : 'i'), r]
    )
  }
  function WP(e, t) {
    try {
      return decodeURIComponent(e)
    } catch {
      return e
    }
  }
  function u1(e, t) {
    if (t === '/') return e
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
    let n = e.charAt(t.length)
    return n && n !== '/' ? null : e.slice(t.length) || '/'
  }
  const Ai = (e) => e.join('/').replace(/\/\/+/g, '/'),
    c1 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/')
  function fh() {
    return X.exports.useContext(dh) != null
  }
  function BP() {
    return fh() || _r(!1), X.exports.useContext(dh).location
  }
  function YP(e, t) {
    fh() || _r(!1)
    let { matches: n } = X.exports.useContext(a1),
      r = n[n.length - 1],
      i = r ? r.params : {}
    r && r.pathname
    let s = r ? r.pathnameBase : '/'
    r && r.route
    let o = BP(),
      a
    if (t) {
      var l
      let f = typeof t == 'string' ? iu(t) : t
      s === '/' || ((l = f.pathname) == null ? void 0 : l.startsWith(s)) || _r(!1), (a = f)
    } else a = o
    let u = a.pathname || '/',
      d = s === '/' ? u : u.slice(s.length) || '/',
      p = RP(e, { pathname: d })
    return HP(
      p &&
        p.map((f) =>
          Object.assign({}, f, {
            params: Object.assign({}, i, f.params),
            pathname: Ai([s, f.pathname]),
            pathnameBase: f.pathnameBase === '/' ? s : Ai([s, f.pathnameBase]),
          })
        ),
      n
    )
  }
  function HP(e, t) {
    return (
      t === void 0 && (t = []),
      e == null
        ? null
        : e.reduceRight(
            (n, r, i) =>
              X.exports.createElement(a1.Provider, {
                children: r.route.element !== void 0 ? r.route.element : n,
                value: { outlet: n, matches: t.concat(e.slice(0, i + 1)) },
              }),
            null
          )
    )
  }
  function d1(e) {
    _r(!1)
  }
  function VP(e) {
    let {
      basename: t = '/',
      children: n = null,
      location: r,
      navigationType: i = Lr.Pop,
      navigator: s,
      static: o = !1,
    } = e
    fh() && _r(!1)
    let a = c1(t),
      l = X.exports.useMemo(() => ({ basename: a, navigator: s, static: o }), [a, s, o])
    typeof r == 'string' && (r = iu(r))
    let {
        pathname: u = '/',
        search: d = '',
        hash: p = '',
        state: f = null,
        key: S = 'default',
      } = r,
      k = X.exports.useMemo(() => {
        let E = u1(u, a)
        return E == null ? null : { pathname: E, search: d, hash: p, state: f, key: S }
      }, [a, u, d, p, f, S])
    return k == null
      ? null
      : X.exports.createElement(
          OP.Provider,
          { value: l },
          X.exports.createElement(dh.Provider, {
            children: n,
            value: { location: k, navigationType: i },
          })
        )
  }
  function GP(e) {
    let { children: t, location: n } = e
    return YP(gd(t), n)
  }
  function gd(e) {
    let t = []
    return (
      X.exports.Children.forEach(e, (n) => {
        if (!X.exports.isValidElement(n)) return
        if (n.type === X.exports.Fragment) {
          t.push.apply(t, gd(n.props.children))
          return
        }
        n.type !== d1 && _r(!1)
        let r = {
          caseSensitive: n.props.caseSensitive,
          element: n.props.element,
          index: n.props.index,
          path: n.props.path,
        }
        n.props.children && (r.children = gd(n.props.children)), t.push(r)
      }),
      t
    )
  }
  /**
   * React Router DOM v6.3.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ function KP(e) {
    let { basename: t, children: n, window: r } = e,
      i = X.exports.useRef()
    i.current == null && (i.current = TP({ window: r }))
    let s = i.current,
      [o, a] = X.exports.useState({ action: s.action, location: s.location })
    return (
      X.exports.useLayoutEffect(() => s.listen(a), [s]),
      X.exports.createElement(VP, {
        basename: t,
        children: n,
        location: o.location,
        navigationType: o.action,
        navigator: s,
      })
    )
  }
  const qP = () => ie(GP, { children: ie(d1, { path: '/', element: ie(EP, {}) }) }),
    QP = jn.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,
    JP = jn.span`
  font-size: 50px;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  color: #888;
`,
    XP = jn.form`
  width: 500px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 300px;
    height: 50px;

    border: none;
    border-radius: 10px;
    margin-bottom: 25px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.4);

    background-color: #fff;

    font-size: 22px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #888;
    text-align: center;

    &::placeholder {
      color: #888;
    }

    &:focus {
      outline: none;
    }
  }

  button {
    width: 275px;
    height: 60px;

    background-color: #00a7e1;

    border: none;
    border-radius: 10px;

    font-size: 24px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    color: #eee;
    letter-spacing: 2px;
    text-align: center;

    cursor: pointer;

    &:hover {
      background-color: #33a9e3;
      border: 4px solid #222;
    }
  }
`,
    ZP = () => {
      const [e, t] = X.exports.useState(''),
        n = X.exports.useRef(null),
        r = X.exports.useRef(null)
      return Hi(QP, {
        children: [
          ie(JP, { children: 'Sign In' }),
          Hi(XP, {
            onSubmit: (s) => {
              var l, u
              s.preventDefault()
              const o = (l = n.current) == null ? void 0 : l.value,
                a = (u = r.current) == null ? void 0 : u.value
              if (o == null || a == null) {
                t('Invalid credentials')
                return
              }
              try {
                UE(Lf, o, a)
              } catch (d) {
                console.log(d), t('Invalid credentials or Internal server error')
                return
              }
            },
            children: [
              ie('input', { type: 'text', placeholder: 'e-mail', ref: n }),
              ie('input', { type: 'password', placeholder: 'password', ref: r }),
              ie('button', { type: 'submit', children: 'SIGN IN' }),
            ],
          }),
        ],
      })
    },
    eD = () =>
      ie(KP, {
        children: ie(aT, {
          children: ie(sT, { children: ie(oT, { unauth: ie(ZP, {}), children: ie(qP, {}) }) }),
        }),
      })
  Dw.load({ google: { families: ['Nunito'] } })
  sc.createRoot(document.getElementById('root')).render(
    Hi(qi.StrictMode, { children: [ie(RS, {}), ie(eD, {})] })
  )
})
export default tD()
