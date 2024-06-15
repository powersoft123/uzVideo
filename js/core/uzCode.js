var uz_node_parse = (function (e) {
  "use strict";
  var r = function (e, t) {
    return (
      (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, r) {
            e.__proto__ = r;
          }) ||
        function (e, r) {
          for (var t in r)
            Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
        }),
      r(e, t)
    );
  };
  function t(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Class extends value " + String(t) + " is not a constructor or null"
      );
    function n() {
      this.constructor = e;
    }
    r(e, t),
      (e.prototype =
        null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
  }
  var n = function () {
    return (
      (n =
        Object.assign ||
        function (e) {
          for (var r, t = 1, n = arguments.length; t < n; t++)
            for (var a in (r = arguments[t]))
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          return e;
        }),
      n.apply(this, arguments)
    );
  };
  function a(e, r, t) {
    if (t || 2 === arguments.length)
      for (var n, a = 0, o = r.length; a < o; a++)
        (!n && a in r) ||
          (n || (n = Array.prototype.slice.call(r, 0, a)), (n[a] = r[a]));
    return e.concat(n || Array.prototype.slice.call(r));
  }
  "function" == typeof SuppressedError && SuppressedError;
  var o =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function i(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var s = { exports: {} };
  !(function (e, r) {
    !(function (t) {
      var n = r,
        a = e && e.exports == n && e,
        i = "object" == typeof o && o;
      (i.global !== i && i.window !== i) || (t = i);
      var s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        u = /[\x01-\x7F]/g,
        c = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
        l =
          /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g,
        p = {
          "\xad": "shy",
          "\u200c": "zwnj",
          "\u200d": "zwj",
          "\u200e": "lrm",
          "\u2063": "ic",
          "\u2062": "it",
          "\u2061": "af",
          "\u200f": "rlm",
          "\u200b": "ZeroWidthSpace",
          "\u2060": "NoBreak",
          "\u0311": "DownBreve",
          "\u20db": "tdot",
          "\u20dc": "DotDot",
          "\t": "Tab",
          "\n": "NewLine",
          "\u2008": "puncsp",
          "\u205f": "MediumSpace",
          "\u2009": "thinsp",
          "\u200a": "hairsp",
          "\u2004": "emsp13",
          "\u2002": "ensp",
          "\u2005": "emsp14",
          "\u2003": "emsp",
          "\u2007": "numsp",
          "\xa0": "nbsp",
          "\u205f\u200a": "ThickSpace",
          "\u203e": "oline",
          _: "lowbar",
          "\u2010": "dash",
          "\u2013": "ndash",
          "\u2014": "mdash",
          "\u2015": "horbar",
          ",": "comma",
          ";": "semi",
          "\u204f": "bsemi",
          ":": "colon",
          "\u2a74": "Colone",
          "!": "excl",
          "\xa1": "iexcl",
          "?": "quest",
          "\xbf": "iquest",
          ".": "period",
          "\u2025": "nldr",
          "\u2026": "mldr",
          "\xb7": "middot",
          "'": "apos",
          "\u2018": "lsquo",
          "\u2019": "rsquo",
          "\u201a": "sbquo",
          "\u2039": "lsaquo",
          "\u203a": "rsaquo",
          '"': "quot",
          "\u201c": "ldquo",
          "\u201d": "rdquo",
          "\u201e": "bdquo",
          "\xab": "laquo",
          "\xbb": "raquo",
          "(": "lpar",
          ")": "rpar",
          "[": "lsqb",
          "]": "rsqb",
          "{": "lcub",
          "}": "rcub",
          "\u2308": "lceil",
          "\u2309": "rceil",
          "\u230a": "lfloor",
          "\u230b": "rfloor",
          "\u2985": "lopar",
          "\u2986": "ropar",
          "\u298b": "lbrke",
          "\u298c": "rbrke",
          "\u298d": "lbrkslu",
          "\u298e": "rbrksld",
          "\u298f": "lbrksld",
          "\u2990": "rbrkslu",
          "\u2991": "langd",
          "\u2992": "rangd",
          "\u2993": "lparlt",
          "\u2994": "rpargt",
          "\u2995": "gtlPar",
          "\u2996": "ltrPar",
          "\u27e6": "lobrk",
          "\u27e7": "robrk",
          "\u27e8": "lang",
          "\u27e9": "rang",
          "\u27ea": "Lang",
          "\u27eb": "Rang",
          "\u27ec": "loang",
          "\u27ed": "roang",
          "\u2772": "lbbrk",
          "\u2773": "rbbrk",
          "\u2016": "Vert",
          "\xa7": "sect",
          "\xb6": "para",
          "@": "commat",
          "*": "ast",
          "/": "sol",
          undefined: null,
          "&": "amp",
          "#": "num",
          "%": "percnt",
          "\u2030": "permil",
          "\u2031": "pertenk",
          "\u2020": "dagger",
          "\u2021": "Dagger",
          "\u2022": "bull",
          "\u2043": "hybull",
          "\u2032": "prime",
          "\u2033": "Prime",
          "\u2034": "tprime",
          "\u2057": "qprime",
          "\u2035": "bprime",
          "\u2041": "caret",
          "`": "grave",
          "\xb4": "acute",
          "\u02dc": "tilde",
          "^": "Hat",
          "\xaf": "macr",
          "\u02d8": "breve",
          "\u02d9": "dot",
          "\xa8": "die",
          "\u02da": "ring",
          "\u02dd": "dblac",
          "\xb8": "cedil",
          "\u02db": "ogon",
          "\u02c6": "circ",
          "\u02c7": "caron",
          "\xb0": "deg",
          "\xa9": "copy",
          "\xae": "reg",
          "\u2117": "copysr",
          "\u2118": "wp",
          "\u211e": "rx",
          "\u2127": "mho",
          "\u2129": "iiota",
          "\u2190": "larr",
          "\u219a": "nlarr",
          "\u2192": "rarr",
          "\u219b": "nrarr",
          "\u2191": "uarr",
          "\u2193": "darr",
          "\u2194": "harr",
          "\u21ae": "nharr",
          "\u2195": "varr",
          "\u2196": "nwarr",
          "\u2197": "nearr",
          "\u2198": "searr",
          "\u2199": "swarr",
          "\u219d": "rarrw",
          "\u219d\u0338": "nrarrw",
          "\u219e": "Larr",
          "\u219f": "Uarr",
          "\u21a0": "Rarr",
          "\u21a1": "Darr",
          "\u21a2": "larrtl",
          "\u21a3": "rarrtl",
          "\u21a4": "mapstoleft",
          "\u21a5": "mapstoup",
          "\u21a6": "map",
          "\u21a7": "mapstodown",
          "\u21a9": "larrhk",
          "\u21aa": "rarrhk",
          "\u21ab": "larrlp",
          "\u21ac": "rarrlp",
          "\u21ad": "harrw",
          "\u21b0": "lsh",
          "\u21b1": "rsh",
          "\u21b2": "ldsh",
          "\u21b3": "rdsh",
          "\u21b5": "crarr",
          "\u21b6": "cularr",
          "\u21b7": "curarr",
          "\u21ba": "olarr",
          "\u21bb": "orarr",
          "\u21bc": "lharu",
          "\u21bd": "lhard",
          "\u21be": "uharr",
          "\u21bf": "uharl",
          "\u21c0": "rharu",
          "\u21c1": "rhard",
          "\u21c2": "dharr",
          "\u21c3": "dharl",
          "\u21c4": "rlarr",
          "\u21c5": "udarr",
          "\u21c6": "lrarr",
          "\u21c7": "llarr",
          "\u21c8": "uuarr",
          "\u21c9": "rrarr",
          "\u21ca": "ddarr",
          "\u21cb": "lrhar",
          "\u21cc": "rlhar",
          "\u21d0": "lArr",
          "\u21cd": "nlArr",
          "\u21d1": "uArr",
          "\u21d2": "rArr",
          "\u21cf": "nrArr",
          "\u21d3": "dArr",
          "\u21d4": "iff",
          "\u21ce": "nhArr",
          "\u21d5": "vArr",
          "\u21d6": "nwArr",
          "\u21d7": "neArr",
          "\u21d8": "seArr",
          "\u21d9": "swArr",
          "\u21da": "lAarr",
          "\u21db": "rAarr",
          "\u21dd": "zigrarr",
          "\u21e4": "larrb",
          "\u21e5": "rarrb",
          "\u21f5": "duarr",
          "\u21fd": "loarr",
          "\u21fe": "roarr",
          "\u21ff": "hoarr",
          "\u2200": "forall",
          "\u2201": "comp",
          "\u2202": "part",
          "\u2202\u0338": "npart",
          "\u2203": "exist",
          "\u2204": "nexist",
          "\u2205": "empty",
          "\u2207": "Del",
          "\u2208": "in",
          "\u2209": "notin",
          "\u220b": "ni",
          "\u220c": "notni",
          "\u03f6": "bepsi",
          "\u220f": "prod",
          "\u2210": "coprod",
          "\u2211": "sum",
          "+": "plus",
          "\xb1": "pm",
          "\xf7": "div",
          "\xd7": "times",
          "<": "lt",
          "\u226e": "nlt",
          "<\u20d2": "nvlt",
          "=": "equals",
          "\u2260": "ne",
          "=\u20e5": "bne",
          "\u2a75": "Equal",
          ">": "gt",
          "\u226f": "ngt",
          ">\u20d2": "nvgt",
          "\xac": "not",
          "|": "vert",
          "\xa6": "brvbar",
          "\u2212": "minus",
          "\u2213": "mp",
          "\u2214": "plusdo",
          "\u2044": "frasl",
          "\u2216": "setmn",
          "\u2217": "lowast",
          "\u2218": "compfn",
          "\u221a": "Sqrt",
          "\u221d": "prop",
          "\u221e": "infin",
          "\u221f": "angrt",
          "\u2220": "ang",
          "\u2220\u20d2": "nang",
          "\u2221": "angmsd",
          "\u2222": "angsph",
          "\u2223": "mid",
          "\u2224": "nmid",
          "\u2225": "par",
          "\u2226": "npar",
          "\u2227": "and",
          "\u2228": "or",
          "\u2229": "cap",
          "\u2229\ufe00": "caps",
          "\u222a": "cup",
          "\u222a\ufe00": "cups",
          "\u222b": "int",
          "\u222c": "Int",
          "\u222d": "tint",
          "\u2a0c": "qint",
          "\u222e": "oint",
          "\u222f": "Conint",
          "\u2230": "Cconint",
          "\u2231": "cwint",
          "\u2232": "cwconint",
          "\u2233": "awconint",
          "\u2234": "there4",
          "\u2235": "becaus",
          "\u2236": "ratio",
          "\u2237": "Colon",
          "\u2238": "minusd",
          "\u223a": "mDDot",
          "\u223b": "homtht",
          "\u223c": "sim",
          "\u2241": "nsim",
          "\u223c\u20d2": "nvsim",
          "\u223d": "bsim",
          "\u223d\u0331": "race",
          "\u223e": "ac",
          "\u223e\u0333": "acE",
          "\u223f": "acd",
          "\u2240": "wr",
          "\u2242": "esim",
          "\u2242\u0338": "nesim",
          "\u2243": "sime",
          "\u2244": "nsime",
          "\u2245": "cong",
          "\u2247": "ncong",
          "\u2246": "simne",
          "\u2248": "ap",
          "\u2249": "nap",
          "\u224a": "ape",
          "\u224b": "apid",
          "\u224b\u0338": "napid",
          "\u224c": "bcong",
          "\u224d": "CupCap",
          "\u226d": "NotCupCap",
          "\u224d\u20d2": "nvap",
          "\u224e": "bump",
          "\u224e\u0338": "nbump",
          "\u224f": "bumpe",
          "\u224f\u0338": "nbumpe",
          "\u2250": "doteq",
          "\u2250\u0338": "nedot",
          "\u2251": "eDot",
          "\u2252": "efDot",
          "\u2253": "erDot",
          "\u2254": "colone",
          "\u2255": "ecolon",
          "\u2256": "ecir",
          "\u2257": "cire",
          "\u2259": "wedgeq",
          "\u225a": "veeeq",
          "\u225c": "trie",
          "\u225f": "equest",
          "\u2261": "equiv",
          "\u2262": "nequiv",
          "\u2261\u20e5": "bnequiv",
          "\u2264": "le",
          "\u2270": "nle",
          "\u2264\u20d2": "nvle",
          "\u2265": "ge",
          "\u2271": "nge",
          "\u2265\u20d2": "nvge",
          "\u2266": "lE",
          "\u2266\u0338": "nlE",
          "\u2267": "gE",
          "\u2267\u0338": "ngE",
          "\u2268\ufe00": "lvnE",
          "\u2268": "lnE",
          "\u2269": "gnE",
          "\u2269\ufe00": "gvnE",
          "\u226a": "ll",
          "\u226a\u0338": "nLtv",
          "\u226a\u20d2": "nLt",
          "\u226b": "gg",
          "\u226b\u0338": "nGtv",
          "\u226b\u20d2": "nGt",
          "\u226c": "twixt",
          "\u2272": "lsim",
          "\u2274": "nlsim",
          "\u2273": "gsim",
          "\u2275": "ngsim",
          "\u2276": "lg",
          "\u2278": "ntlg",
          "\u2277": "gl",
          "\u2279": "ntgl",
          "\u227a": "pr",
          "\u2280": "npr",
          "\u227b": "sc",
          "\u2281": "nsc",
          "\u227c": "prcue",
          "\u22e0": "nprcue",
          "\u227d": "sccue",
          "\u22e1": "nsccue",
          "\u227e": "prsim",
          "\u227f": "scsim",
          "\u227f\u0338": "NotSucceedsTilde",
          "\u2282": "sub",
          "\u2284": "nsub",
          "\u2282\u20d2": "vnsub",
          "\u2283": "sup",
          "\u2285": "nsup",
          "\u2283\u20d2": "vnsup",
          "\u2286": "sube",
          "\u2288": "nsube",
          "\u2287": "supe",
          "\u2289": "nsupe",
          "\u228a\ufe00": "vsubne",
          "\u228a": "subne",
          "\u228b\ufe00": "vsupne",
          "\u228b": "supne",
          "\u228d": "cupdot",
          "\u228e": "uplus",
          "\u228f": "sqsub",
          "\u228f\u0338": "NotSquareSubset",
          "\u2290": "sqsup",
          "\u2290\u0338": "NotSquareSuperset",
          "\u2291": "sqsube",
          "\u22e2": "nsqsube",
          "\u2292": "sqsupe",
          "\u22e3": "nsqsupe",
          "\u2293": "sqcap",
          "\u2293\ufe00": "sqcaps",
          "\u2294": "sqcup",
          "\u2294\ufe00": "sqcups",
          "\u2295": "oplus",
          "\u2296": "ominus",
          "\u2297": "otimes",
          "\u2298": "osol",
          "\u2299": "odot",
          "\u229a": "ocir",
          "\u229b": "oast",
          "\u229d": "odash",
          "\u229e": "plusb",
          "\u229f": "minusb",
          "\u22a0": "timesb",
          "\u22a1": "sdotb",
          "\u22a2": "vdash",
          "\u22ac": "nvdash",
          "\u22a3": "dashv",
          "\u22a4": "top",
          "\u22a5": "bot",
          "\u22a7": "models",
          "\u22a8": "vDash",
          "\u22ad": "nvDash",
          "\u22a9": "Vdash",
          "\u22ae": "nVdash",
          "\u22aa": "Vvdash",
          "\u22ab": "VDash",
          "\u22af": "nVDash",
          "\u22b0": "prurel",
          "\u22b2": "vltri",
          "\u22ea": "nltri",
          "\u22b3": "vrtri",
          "\u22eb": "nrtri",
          "\u22b4": "ltrie",
          "\u22ec": "nltrie",
          "\u22b4\u20d2": "nvltrie",
          "\u22b5": "rtrie",
          "\u22ed": "nrtrie",
          "\u22b5\u20d2": "nvrtrie",
          "\u22b6": "origof",
          "\u22b7": "imof",
          "\u22b8": "mumap",
          "\u22b9": "hercon",
          "\u22ba": "intcal",
          "\u22bb": "veebar",
          "\u22bd": "barvee",
          "\u22be": "angrtvb",
          "\u22bf": "lrtri",
          "\u22c0": "Wedge",
          "\u22c1": "Vee",
          "\u22c2": "xcap",
          "\u22c3": "xcup",
          "\u22c4": "diam",
          "\u22c5": "sdot",
          "\u22c6": "Star",
          "\u22c7": "divonx",
          "\u22c8": "bowtie",
          "\u22c9": "ltimes",
          "\u22ca": "rtimes",
          "\u22cb": "lthree",
          "\u22cc": "rthree",
          "\u22cd": "bsime",
          "\u22ce": "cuvee",
          "\u22cf": "cuwed",
          "\u22d0": "Sub",
          "\u22d1": "Sup",
          "\u22d2": "Cap",
          "\u22d3": "Cup",
          "\u22d4": "fork",
          "\u22d5": "epar",
          "\u22d6": "ltdot",
          "\u22d7": "gtdot",
          "\u22d8": "Ll",
          "\u22d8\u0338": "nLl",
          "\u22d9": "Gg",
          "\u22d9\u0338": "nGg",
          "\u22da\ufe00": "lesg",
          "\u22da": "leg",
          "\u22db": "gel",
          "\u22db\ufe00": "gesl",
          "\u22de": "cuepr",
          "\u22df": "cuesc",
          "\u22e6": "lnsim",
          "\u22e7": "gnsim",
          "\u22e8": "prnsim",
          "\u22e9": "scnsim",
          "\u22ee": "vellip",
          "\u22ef": "ctdot",
          "\u22f0": "utdot",
          "\u22f1": "dtdot",
          "\u22f2": "disin",
          "\u22f3": "isinsv",
          "\u22f4": "isins",
          "\u22f5": "isindot",
          "\u22f5\u0338": "notindot",
          "\u22f6": "notinvc",
          "\u22f7": "notinvb",
          "\u22f9": "isinE",
          "\u22f9\u0338": "notinE",
          "\u22fa": "nisd",
          "\u22fb": "xnis",
          "\u22fc": "nis",
          "\u22fd": "notnivc",
          "\u22fe": "notnivb",
          "\u2305": "barwed",
          "\u2306": "Barwed",
          "\u230c": "drcrop",
          "\u230d": "dlcrop",
          "\u230e": "urcrop",
          "\u230f": "ulcrop",
          "\u2310": "bnot",
          "\u2312": "profline",
          "\u2313": "profsurf",
          "\u2315": "telrec",
          "\u2316": "target",
          "\u231c": "ulcorn",
          "\u231d": "urcorn",
          "\u231e": "dlcorn",
          "\u231f": "drcorn",
          "\u2322": "frown",
          "\u2323": "smile",
          "\u232d": "cylcty",
          "\u232e": "profalar",
          "\u2336": "topbot",
          "\u233d": "ovbar",
          "\u233f": "solbar",
          "\u237c": "angzarr",
          "\u23b0": "lmoust",
          "\u23b1": "rmoust",
          "\u23b4": "tbrk",
          "\u23b5": "bbrk",
          "\u23b6": "bbrktbrk",
          "\u23dc": "OverParenthesis",
          "\u23dd": "UnderParenthesis",
          "\u23de": "OverBrace",
          "\u23df": "UnderBrace",
          "\u23e2": "trpezium",
          "\u23e7": "elinters",
          "\u2423": "blank",
          "\u2500": "boxh",
          "\u2502": "boxv",
          "\u250c": "boxdr",
          "\u2510": "boxdl",
          "\u2514": "boxur",
          "\u2518": "boxul",
          "\u251c": "boxvr",
          "\u2524": "boxvl",
          "\u252c": "boxhd",
          "\u2534": "boxhu",
          "\u253c": "boxvh",
          "\u2550": "boxH",
          "\u2551": "boxV",
          "\u2552": "boxdR",
          "\u2553": "boxDr",
          "\u2554": "boxDR",
          "\u2555": "boxdL",
          "\u2556": "boxDl",
          "\u2557": "boxDL",
          "\u2558": "boxuR",
          "\u2559": "boxUr",
          "\u255a": "boxUR",
          "\u255b": "boxuL",
          "\u255c": "boxUl",
          "\u255d": "boxUL",
          "\u255e": "boxvR",
          "\u255f": "boxVr",
          "\u2560": "boxVR",
          "\u2561": "boxvL",
          "\u2562": "boxVl",
          "\u2563": "boxVL",
          "\u2564": "boxHd",
          "\u2565": "boxhD",
          "\u2566": "boxHD",
          "\u2567": "boxHu",
          "\u2568": "boxhU",
          "\u2569": "boxHU",
          "\u256a": "boxvH",
          "\u256b": "boxVh",
          "\u256c": "boxVH",
          "\u2580": "uhblk",
          "\u2584": "lhblk",
          "\u2588": "block",
          "\u2591": "blk14",
          "\u2592": "blk12",
          "\u2593": "blk34",
          "\u25a1": "squ",
          "\u25aa": "squf",
          "\u25ab": "EmptyVerySmallSquare",
          "\u25ad": "rect",
          "\u25ae": "marker",
          "\u25b1": "fltns",
          "\u25b3": "xutri",
          "\u25b4": "utrif",
          "\u25b5": "utri",
          "\u25b8": "rtrif",
          "\u25b9": "rtri",
          "\u25bd": "xdtri",
          "\u25be": "dtrif",
          "\u25bf": "dtri",
          "\u25c2": "ltrif",
          "\u25c3": "ltri",
          "\u25ca": "loz",
          "\u25cb": "cir",
          "\u25ec": "tridot",
          "\u25ef": "xcirc",
          "\u25f8": "ultri",
          "\u25f9": "urtri",
          "\u25fa": "lltri",
          "\u25fb": "EmptySmallSquare",
          "\u25fc": "FilledSmallSquare",
          "\u2605": "starf",
          "\u2606": "star",
          "\u260e": "phone",
          "\u2640": "female",
          "\u2642": "male",
          "\u2660": "spades",
          "\u2663": "clubs",
          "\u2665": "hearts",
          "\u2666": "diams",
          "\u266a": "sung",
          "\u2713": "check",
          "\u2717": "cross",
          "\u2720": "malt",
          "\u2736": "sext",
          "\u2758": "VerticalSeparator",
          "\u27c8": "bsolhsub",
          "\u27c9": "suphsol",
          "\u27f5": "xlarr",
          "\u27f6": "xrarr",
          "\u27f7": "xharr",
          "\u27f8": "xlArr",
          "\u27f9": "xrArr",
          "\u27fa": "xhArr",
          "\u27fc": "xmap",
          "\u27ff": "dzigrarr",
          "\u2902": "nvlArr",
          "\u2903": "nvrArr",
          "\u2904": "nvHarr",
          "\u2905": "Map",
          "\u290c": "lbarr",
          "\u290d": "rbarr",
          "\u290e": "lBarr",
          "\u290f": "rBarr",
          "\u2910": "RBarr",
          "\u2911": "DDotrahd",
          "\u2912": "UpArrowBar",
          "\u2913": "DownArrowBar",
          "\u2916": "Rarrtl",
          "\u2919": "latail",
          "\u291a": "ratail",
          "\u291b": "lAtail",
          "\u291c": "rAtail",
          "\u291d": "larrfs",
          "\u291e": "rarrfs",
          "\u291f": "larrbfs",
          "\u2920": "rarrbfs",
          "\u2923": "nwarhk",
          "\u2924": "nearhk",
          "\u2925": "searhk",
          "\u2926": "swarhk",
          "\u2927": "nwnear",
          "\u2928": "toea",
          "\u2929": "tosa",
          "\u292a": "swnwar",
          "\u2933": "rarrc",
          "\u2933\u0338": "nrarrc",
          "\u2935": "cudarrr",
          "\u2936": "ldca",
          "\u2937": "rdca",
          "\u2938": "cudarrl",
          "\u2939": "larrpl",
          "\u293c": "curarrm",
          "\u293d": "cularrp",
          "\u2945": "rarrpl",
          "\u2948": "harrcir",
          "\u2949": "Uarrocir",
          "\u294a": "lurdshar",
          "\u294b": "ldrushar",
          "\u294e": "LeftRightVector",
          "\u294f": "RightUpDownVector",
          "\u2950": "DownLeftRightVector",
          "\u2951": "LeftUpDownVector",
          "\u2952": "LeftVectorBar",
          "\u2953": "RightVectorBar",
          "\u2954": "RightUpVectorBar",
          "\u2955": "RightDownVectorBar",
          "\u2956": "DownLeftVectorBar",
          "\u2957": "DownRightVectorBar",
          "\u2958": "LeftUpVectorBar",
          "\u2959": "LeftDownVectorBar",
          "\u295a": "LeftTeeVector",
          "\u295b": "RightTeeVector",
          "\u295c": "RightUpTeeVector",
          "\u295d": "RightDownTeeVector",
          "\u295e": "DownLeftTeeVector",
          "\u295f": "DownRightTeeVector",
          "\u2960": "LeftUpTeeVector",
          "\u2961": "LeftDownTeeVector",
          "\u2962": "lHar",
          "\u2963": "uHar",
          "\u2964": "rHar",
          "\u2965": "dHar",
          "\u2966": "luruhar",
          "\u2967": "ldrdhar",
          "\u2968": "ruluhar",
          "\u2969": "rdldhar",
          "\u296a": "lharul",
          "\u296b": "llhard",
          "\u296c": "rharul",
          "\u296d": "lrhard",
          "\u296e": "udhar",
          "\u296f": "duhar",
          "\u2970": "RoundImplies",
          "\u2971": "erarr",
          "\u2972": "simrarr",
          "\u2973": "larrsim",
          "\u2974": "rarrsim",
          "\u2975": "rarrap",
          "\u2976": "ltlarr",
          "\u2978": "gtrarr",
          "\u2979": "subrarr",
          "\u297b": "suplarr",
          "\u297c": "lfisht",
          "\u297d": "rfisht",
          "\u297e": "ufisht",
          "\u297f": "dfisht",
          "\u299a": "vzigzag",
          "\u299c": "vangrt",
          "\u299d": "angrtvbd",
          "\u29a4": "ange",
          "\u29a5": "range",
          "\u29a6": "dwangle",
          "\u29a7": "uwangle",
          "\u29a8": "angmsdaa",
          "\u29a9": "angmsdab",
          "\u29aa": "angmsdac",
          "\u29ab": "angmsdad",
          "\u29ac": "angmsdae",
          "\u29ad": "angmsdaf",
          "\u29ae": "angmsdag",
          "\u29af": "angmsdah",
          "\u29b0": "bemptyv",
          "\u29b1": "demptyv",
          "\u29b2": "cemptyv",
          "\u29b3": "raemptyv",
          "\u29b4": "laemptyv",
          "\u29b5": "ohbar",
          "\u29b6": "omid",
          "\u29b7": "opar",
          "\u29b9": "operp",
          "\u29bb": "olcross",
          "\u29bc": "odsold",
          "\u29be": "olcir",
          "\u29bf": "ofcir",
          "\u29c0": "olt",
          "\u29c1": "ogt",
          "\u29c2": "cirscir",
          "\u29c3": "cirE",
          "\u29c4": "solb",
          "\u29c5": "bsolb",
          "\u29c9": "boxbox",
          "\u29cd": "trisb",
          "\u29ce": "rtriltri",
          "\u29cf": "LeftTriangleBar",
          "\u29cf\u0338": "NotLeftTriangleBar",
          "\u29d0": "RightTriangleBar",
          "\u29d0\u0338": "NotRightTriangleBar",
          "\u29dc": "iinfin",
          "\u29dd": "infintie",
          "\u29de": "nvinfin",
          "\u29e3": "eparsl",
          "\u29e4": "smeparsl",
          "\u29e5": "eqvparsl",
          "\u29eb": "lozf",
          "\u29f4": "RuleDelayed",
          "\u29f6": "dsol",
          "\u2a00": "xodot",
          "\u2a01": "xoplus",
          "\u2a02": "xotime",
          "\u2a04": "xuplus",
          "\u2a06": "xsqcup",
          "\u2a0d": "fpartint",
          "\u2a10": "cirfnint",
          "\u2a11": "awint",
          "\u2a12": "rppolint",
          "\u2a13": "scpolint",
          "\u2a14": "npolint",
          "\u2a15": "pointint",
          "\u2a16": "quatint",
          "\u2a17": "intlarhk",
          "\u2a22": "pluscir",
          "\u2a23": "plusacir",
          "\u2a24": "simplus",
          "\u2a25": "plusdu",
          "\u2a26": "plussim",
          "\u2a27": "plustwo",
          "\u2a29": "mcomma",
          "\u2a2a": "minusdu",
          "\u2a2d": "loplus",
          "\u2a2e": "roplus",
          "\u2a2f": "Cross",
          "\u2a30": "timesd",
          "\u2a31": "timesbar",
          "\u2a33": "smashp",
          "\u2a34": "lotimes",
          "\u2a35": "rotimes",
          "\u2a36": "otimesas",
          "\u2a37": "Otimes",
          "\u2a38": "odiv",
          "\u2a39": "triplus",
          "\u2a3a": "triminus",
          "\u2a3b": "tritime",
          "\u2a3c": "iprod",
          "\u2a3f": "amalg",
          "\u2a40": "capdot",
          "\u2a42": "ncup",
          "\u2a43": "ncap",
          "\u2a44": "capand",
          "\u2a45": "cupor",
          "\u2a46": "cupcap",
          "\u2a47": "capcup",
          "\u2a48": "cupbrcap",
          "\u2a49": "capbrcup",
          "\u2a4a": "cupcup",
          "\u2a4b": "capcap",
          "\u2a4c": "ccups",
          "\u2a4d": "ccaps",
          "\u2a50": "ccupssm",
          "\u2a53": "And",
          "\u2a54": "Or",
          "\u2a55": "andand",
          "\u2a56": "oror",
          "\u2a57": "orslope",
          "\u2a58": "andslope",
          "\u2a5a": "andv",
          "\u2a5b": "orv",
          "\u2a5c": "andd",
          "\u2a5d": "ord",
          "\u2a5f": "wedbar",
          "\u2a66": "sdote",
          "\u2a6a": "simdot",
          "\u2a6d": "congdot",
          "\u2a6d\u0338": "ncongdot",
          "\u2a6e": "easter",
          "\u2a6f": "apacir",
          "\u2a70": "apE",
          "\u2a70\u0338": "napE",
          "\u2a71": "eplus",
          "\u2a72": "pluse",
          "\u2a73": "Esim",
          "\u2a77": "eDDot",
          "\u2a78": "equivDD",
          "\u2a79": "ltcir",
          "\u2a7a": "gtcir",
          "\u2a7b": "ltquest",
          "\u2a7c": "gtquest",
          "\u2a7d": "les",
          "\u2a7d\u0338": "nles",
          "\u2a7e": "ges",
          "\u2a7e\u0338": "nges",
          "\u2a7f": "lesdot",
          "\u2a80": "gesdot",
          "\u2a81": "lesdoto",
          "\u2a82": "gesdoto",
          "\u2a83": "lesdotor",
          "\u2a84": "gesdotol",
          "\u2a85": "lap",
          "\u2a86": "gap",
          "\u2a87": "lne",
          "\u2a88": "gne",
          "\u2a89": "lnap",
          "\u2a8a": "gnap",
          "\u2a8b": "lEg",
          "\u2a8c": "gEl",
          "\u2a8d": "lsime",
          "\u2a8e": "gsime",
          "\u2a8f": "lsimg",
          "\u2a90": "gsiml",
          "\u2a91": "lgE",
          "\u2a92": "glE",
          "\u2a93": "lesges",
          "\u2a94": "gesles",
          "\u2a95": "els",
          "\u2a96": "egs",
          "\u2a97": "elsdot",
          "\u2a98": "egsdot",
          "\u2a99": "el",
          "\u2a9a": "eg",
          "\u2a9d": "siml",
          "\u2a9e": "simg",
          "\u2a9f": "simlE",
          "\u2aa0": "simgE",
          "\u2aa1": "LessLess",
          "\u2aa1\u0338": "NotNestedLessLess",
          "\u2aa2": "GreaterGreater",
          "\u2aa2\u0338": "NotNestedGreaterGreater",
          "\u2aa4": "glj",
          "\u2aa5": "gla",
          "\u2aa6": "ltcc",
          "\u2aa7": "gtcc",
          "\u2aa8": "lescc",
          "\u2aa9": "gescc",
          "\u2aaa": "smt",
          "\u2aab": "lat",
          "\u2aac": "smte",
          "\u2aac\ufe00": "smtes",
          "\u2aad": "late",
          "\u2aad\ufe00": "lates",
          "\u2aae": "bumpE",
          "\u2aaf": "pre",
          "\u2aaf\u0338": "npre",
          "\u2ab0": "sce",
          "\u2ab0\u0338": "nsce",
          "\u2ab3": "prE",
          "\u2ab4": "scE",
          "\u2ab5": "prnE",
          "\u2ab6": "scnE",
          "\u2ab7": "prap",
          "\u2ab8": "scap",
          "\u2ab9": "prnap",
          "\u2aba": "scnap",
          "\u2abb": "Pr",
          "\u2abc": "Sc",
          "\u2abd": "subdot",
          "\u2abe": "supdot",
          "\u2abf": "subplus",
          "\u2ac0": "supplus",
          "\u2ac1": "submult",
          "\u2ac2": "supmult",
          "\u2ac3": "subedot",
          "\u2ac4": "supedot",
          "\u2ac5": "subE",
          "\u2ac5\u0338": "nsubE",
          "\u2ac6": "supE",
          "\u2ac6\u0338": "nsupE",
          "\u2ac7": "subsim",
          "\u2ac8": "supsim",
          "\u2acb\ufe00": "vsubnE",
          "\u2acb": "subnE",
          "\u2acc\ufe00": "vsupnE",
          "\u2acc": "supnE",
          "\u2acf": "csub",
          "\u2ad0": "csup",
          "\u2ad1": "csube",
          "\u2ad2": "csupe",
          "\u2ad3": "subsup",
          "\u2ad4": "supsub",
          "\u2ad5": "subsub",
          "\u2ad6": "supsup",
          "\u2ad7": "suphsub",
          "\u2ad8": "supdsub",
          "\u2ad9": "forkv",
          "\u2ada": "topfork",
          "\u2adb": "mlcp",
          "\u2ae4": "Dashv",
          "\u2ae6": "Vdashl",
          "\u2ae7": "Barv",
          "\u2ae8": "vBar",
          "\u2ae9": "vBarv",
          "\u2aeb": "Vbar",
          "\u2aec": "Not",
          "\u2aed": "bNot",
          "\u2aee": "rnmid",
          "\u2aef": "cirmid",
          "\u2af0": "midcir",
          "\u2af1": "topcir",
          "\u2af2": "nhpar",
          "\u2af3": "parsim",
          "\u2afd": "parsl",
          "\u2afd\u20e5": "nparsl",
          "\u266d": "flat",
          "\u266e": "natur",
          "\u266f": "sharp",
          "\xa4": "curren",
          "\xa2": "cent",
          $: "dollar",
          "\xa3": "pound",
          "\xa5": "yen",
          "\u20ac": "euro",
          "\xb9": "sup1",
          "\xbd": "half",
          "\u2153": "frac13",
          "\xbc": "frac14",
          "\u2155": "frac15",
          "\u2159": "frac16",
          "\u215b": "frac18",
          "\xb2": "sup2",
          "\u2154": "frac23",
          "\u2156": "frac25",
          "\xb3": "sup3",
          "\xbe": "frac34",
          "\u2157": "frac35",
          "\u215c": "frac38",
          "\u2158": "frac45",
          "\u215a": "frac56",
          "\u215d": "frac58",
          "\u215e": "frac78",
          "\ud835\udcb6": "ascr",
          "\ud835\udd52": "aopf",
          "\ud835\udd1e": "afr",
          "\ud835\udd38": "Aopf",
          "\ud835\udd04": "Afr",
          "\ud835\udc9c": "Ascr",
          "\xaa": "ordf",
          "\xe1": "aacute",
          "\xc1": "Aacute",
          "\xe0": "agrave",
          "\xc0": "Agrave",
          "\u0103": "abreve",
          "\u0102": "Abreve",
          "\xe2": "acirc",
          "\xc2": "Acirc",
          "\xe5": "aring",
          "\xc5": "angst",
          "\xe4": "auml",
          "\xc4": "Auml",
          "\xe3": "atilde",
          "\xc3": "Atilde",
          "\u0105": "aogon",
          "\u0104": "Aogon",
          "\u0101": "amacr",
          "\u0100": "Amacr",
          "\xe6": "aelig",
          "\xc6": "AElig",
          "\ud835\udcb7": "bscr",
          "\ud835\udd53": "bopf",
          "\ud835\udd1f": "bfr",
          "\ud835\udd39": "Bopf",
          "\u212c": "Bscr",
          "\ud835\udd05": "Bfr",
          "\ud835\udd20": "cfr",
          "\ud835\udcb8": "cscr",
          "\ud835\udd54": "copf",
          "\u212d": "Cfr",
          "\ud835\udc9e": "Cscr",
          "\u2102": "Copf",
          "\u0107": "cacute",
          "\u0106": "Cacute",
          "\u0109": "ccirc",
          "\u0108": "Ccirc",
          "\u010d": "ccaron",
          "\u010c": "Ccaron",
          "\u010b": "cdot",
          "\u010a": "Cdot",
          "\xe7": "ccedil",
          "\xc7": "Ccedil",
          "\u2105": "incare",
          "\ud835\udd21": "dfr",
          "\u2146": "dd",
          "\ud835\udd55": "dopf",
          "\ud835\udcb9": "dscr",
          "\ud835\udc9f": "Dscr",
          "\ud835\udd07": "Dfr",
          "\u2145": "DD",
          "\ud835\udd3b": "Dopf",
          "\u010f": "dcaron",
          "\u010e": "Dcaron",
          "\u0111": "dstrok",
          "\u0110": "Dstrok",
          "\xf0": "eth",
          "\xd0": "ETH",
          "\u2147": "ee",
          "\u212f": "escr",
          "\ud835\udd22": "efr",
          "\ud835\udd56": "eopf",
          "\u2130": "Escr",
          "\ud835\udd08": "Efr",
          "\ud835\udd3c": "Eopf",
          "\xe9": "eacute",
          "\xc9": "Eacute",
          "\xe8": "egrave",
          "\xc8": "Egrave",
          "\xea": "ecirc",
          "\xca": "Ecirc",
          "\u011b": "ecaron",
          "\u011a": "Ecaron",
          "\xeb": "euml",
          "\xcb": "Euml",
          "\u0117": "edot",
          "\u0116": "Edot",
          "\u0119": "eogon",
          "\u0118": "Eogon",
          "\u0113": "emacr",
          "\u0112": "Emacr",
          "\ud835\udd23": "ffr",
          "\ud835\udd57": "fopf",
          "\ud835\udcbb": "fscr",
          "\ud835\udd09": "Ffr",
          "\ud835\udd3d": "Fopf",
          "\u2131": "Fscr",
          "\ufb00": "fflig",
          "\ufb03": "ffilig",
          "\ufb04": "ffllig",
          "\ufb01": "filig",
          fj: "fjlig",
          "\ufb02": "fllig",
          "\u0192": "fnof",
          "\u210a": "gscr",
          "\ud835\udd58": "gopf",
          "\ud835\udd24": "gfr",
          "\ud835\udca2": "Gscr",
          "\ud835\udd3e": "Gopf",
          "\ud835\udd0a": "Gfr",
          "\u01f5": "gacute",
          "\u011f": "gbreve",
          "\u011e": "Gbreve",
          "\u011d": "gcirc",
          "\u011c": "Gcirc",
          "\u0121": "gdot",
          "\u0120": "Gdot",
          "\u0122": "Gcedil",
          "\ud835\udd25": "hfr",
          "\u210e": "planckh",
          "\ud835\udcbd": "hscr",
          "\ud835\udd59": "hopf",
          "\u210b": "Hscr",
          "\u210c": "Hfr",
          "\u210d": "Hopf",
          "\u0125": "hcirc",
          "\u0124": "Hcirc",
          "\u210f": "hbar",
          "\u0127": "hstrok",
          "\u0126": "Hstrok",
          "\ud835\udd5a": "iopf",
          "\ud835\udd26": "ifr",
          "\ud835\udcbe": "iscr",
          "\u2148": "ii",
          "\ud835\udd40": "Iopf",
          "\u2110": "Iscr",
          "\u2111": "Im",
          "\xed": "iacute",
          "\xcd": "Iacute",
          "\xec": "igrave",
          "\xcc": "Igrave",
          "\xee": "icirc",
          "\xce": "Icirc",
          "\xef": "iuml",
          "\xcf": "Iuml",
          "\u0129": "itilde",
          "\u0128": "Itilde",
          "\u0130": "Idot",
          "\u012f": "iogon",
          "\u012e": "Iogon",
          "\u012b": "imacr",
          "\u012a": "Imacr",
          "\u0133": "ijlig",
          "\u0132": "IJlig",
          "\u0131": "imath",
          "\ud835\udcbf": "jscr",
          "\ud835\udd5b": "jopf",
          "\ud835\udd27": "jfr",
          "\ud835\udca5": "Jscr",
          "\ud835\udd0d": "Jfr",
          "\ud835\udd41": "Jopf",
          "\u0135": "jcirc",
          "\u0134": "Jcirc",
          "\u0237": "jmath",
          "\ud835\udd5c": "kopf",
          "\ud835\udcc0": "kscr",
          "\ud835\udd28": "kfr",
          "\ud835\udca6": "Kscr",
          "\ud835\udd42": "Kopf",
          "\ud835\udd0e": "Kfr",
          "\u0137": "kcedil",
          "\u0136": "Kcedil",
          "\ud835\udd29": "lfr",
          "\ud835\udcc1": "lscr",
          "\u2113": "ell",
          "\ud835\udd5d": "lopf",
          "\u2112": "Lscr",
          "\ud835\udd0f": "Lfr",
          "\ud835\udd43": "Lopf",
          "\u013a": "lacute",
          "\u0139": "Lacute",
          "\u013e": "lcaron",
          "\u013d": "Lcaron",
          "\u013c": "lcedil",
          "\u013b": "Lcedil",
          "\u0142": "lstrok",
          "\u0141": "Lstrok",
          "\u0140": "lmidot",
          "\u013f": "Lmidot",
          "\ud835\udd2a": "mfr",
          "\ud835\udd5e": "mopf",
          "\ud835\udcc2": "mscr",
          "\ud835\udd10": "Mfr",
          "\ud835\udd44": "Mopf",
          "\u2133": "Mscr",
          "\ud835\udd2b": "nfr",
          "\ud835\udd5f": "nopf",
          "\ud835\udcc3": "nscr",
          "\u2115": "Nopf",
          "\ud835\udca9": "Nscr",
          "\ud835\udd11": "Nfr",
          "\u0144": "nacute",
          "\u0143": "Nacute",
          "\u0148": "ncaron",
          "\u0147": "Ncaron",
          "\xf1": "ntilde",
          "\xd1": "Ntilde",
          "\u0146": "ncedil",
          "\u0145": "Ncedil",
          "\u2116": "numero",
          "\u014b": "eng",
          "\u014a": "ENG",
          "\ud835\udd60": "oopf",
          "\ud835\udd2c": "ofr",
          "\u2134": "oscr",
          "\ud835\udcaa": "Oscr",
          "\ud835\udd12": "Ofr",
          "\ud835\udd46": "Oopf",
          "\xba": "ordm",
          "\xf3": "oacute",
          "\xd3": "Oacute",
          "\xf2": "ograve",
          "\xd2": "Ograve",
          "\xf4": "ocirc",
          "\xd4": "Ocirc",
          "\xf6": "ouml",
          "\xd6": "Ouml",
          "\u0151": "odblac",
          "\u0150": "Odblac",
          "\xf5": "otilde",
          "\xd5": "Otilde",
          "\xf8": "oslash",
          "\xd8": "Oslash",
          "\u014d": "omacr",
          "\u014c": "Omacr",
          "\u0153": "oelig",
          "\u0152": "OElig",
          "\ud835\udd2d": "pfr",
          "\ud835\udcc5": "pscr",
          "\ud835\udd61": "popf",
          "\u2119": "Popf",
          "\ud835\udd13": "Pfr",
          "\ud835\udcab": "Pscr",
          "\ud835\udd62": "qopf",
          "\ud835\udd2e": "qfr",
          "\ud835\udcc6": "qscr",
          "\ud835\udcac": "Qscr",
          "\ud835\udd14": "Qfr",
          "\u211a": "Qopf",
          "\u0138": "kgreen",
          "\ud835\udd2f": "rfr",
          "\ud835\udd63": "ropf",
          "\ud835\udcc7": "rscr",
          "\u211b": "Rscr",
          "\u211c": "Re",
          "\u211d": "Ropf",
          "\u0155": "racute",
          "\u0154": "Racute",
          "\u0159": "rcaron",
          "\u0158": "Rcaron",
          "\u0157": "rcedil",
          "\u0156": "Rcedil",
          "\ud835\udd64": "sopf",
          "\ud835\udcc8": "sscr",
          "\ud835\udd30": "sfr",
          "\ud835\udd4a": "Sopf",
          "\ud835\udd16": "Sfr",
          "\ud835\udcae": "Sscr",
          "\u24c8": "oS",
          "\u015b": "sacute",
          "\u015a": "Sacute",
          "\u015d": "scirc",
          "\u015c": "Scirc",
          "\u0161": "scaron",
          "\u0160": "Scaron",
          "\u015f": "scedil",
          "\u015e": "Scedil",
          "\xdf": "szlig",
          "\ud835\udd31": "tfr",
          "\ud835\udcc9": "tscr",
          "\ud835\udd65": "topf",
          "\ud835\udcaf": "Tscr",
          "\ud835\udd17": "Tfr",
          "\ud835\udd4b": "Topf",
          "\u0165": "tcaron",
          "\u0164": "Tcaron",
          "\u0163": "tcedil",
          "\u0162": "Tcedil",
          "\u2122": "trade",
          "\u0167": "tstrok",
          "\u0166": "Tstrok",
          "\ud835\udcca": "uscr",
          "\ud835\udd66": "uopf",
          "\ud835\udd32": "ufr",
          "\ud835\udd4c": "Uopf",
          "\ud835\udd18": "Ufr",
          "\ud835\udcb0": "Uscr",
          "\xfa": "uacute",
          "\xda": "Uacute",
          "\xf9": "ugrave",
          "\xd9": "Ugrave",
          "\u016d": "ubreve",
          "\u016c": "Ubreve",
          "\xfb": "ucirc",
          "\xdb": "Ucirc",
          "\u016f": "uring",
          "\u016e": "Uring",
          "\xfc": "uuml",
          "\xdc": "Uuml",
          "\u0171": "udblac",
          "\u0170": "Udblac",
          "\u0169": "utilde",
          "\u0168": "Utilde",
          "\u0173": "uogon",
          "\u0172": "Uogon",
          "\u016b": "umacr",
          "\u016a": "Umacr",
          "\ud835\udd33": "vfr",
          "\ud835\udd67": "vopf",
          "\ud835\udccb": "vscr",
          "\ud835\udd19": "Vfr",
          "\ud835\udd4d": "Vopf",
          "\ud835\udcb1": "Vscr",
          "\ud835\udd68": "wopf",
          "\ud835\udccc": "wscr",
          "\ud835\udd34": "wfr",
          "\ud835\udcb2": "Wscr",
          "\ud835\udd4e": "Wopf",
          "\ud835\udd1a": "Wfr",
          "\u0175": "wcirc",
          "\u0174": "Wcirc",
          "\ud835\udd35": "xfr",
          "\ud835\udccd": "xscr",
          "\ud835\udd69": "xopf",
          "\ud835\udd4f": "Xopf",
          "\ud835\udd1b": "Xfr",
          "\ud835\udcb3": "Xscr",
          "\ud835\udd36": "yfr",
          "\ud835\udcce": "yscr",
          "\ud835\udd6a": "yopf",
          "\ud835\udcb4": "Yscr",
          "\ud835\udd1c": "Yfr",
          "\ud835\udd50": "Yopf",
          "\xfd": "yacute",
          "\xdd": "Yacute",
          "\u0177": "ycirc",
          "\u0176": "Ycirc",
          "\xff": "yuml",
          "\u0178": "Yuml",
          "\ud835\udccf": "zscr",
          "\ud835\udd37": "zfr",
          "\ud835\udd6b": "zopf",
          "\u2128": "Zfr",
          "\u2124": "Zopf",
          "\ud835\udcb5": "Zscr",
          "\u017a": "zacute",
          "\u0179": "Zacute",
          "\u017e": "zcaron",
          "\u017d": "Zcaron",
          "\u017c": "zdot",
          "\u017b": "Zdot",
          "\u01b5": "imped",
          "\xfe": "thorn",
          "\xde": "THORN",
          "\u0149": "napos",
          "\u03b1": "alpha",
          "\u0391": "Alpha",
          "\u03b2": "beta",
          "\u0392": "Beta",
          "\u03b3": "gamma",
          "\u0393": "Gamma",
          "\u03b4": "delta",
          "\u0394": "Delta",
          "\u03b5": "epsi",
          "\u03f5": "epsiv",
          "\u0395": "Epsilon",
          "\u03dd": "gammad",
          "\u03dc": "Gammad",
          "\u03b6": "zeta",
          "\u0396": "Zeta",
          "\u03b7": "eta",
          "\u0397": "Eta",
          "\u03b8": "theta",
          "\u03d1": "thetav",
          "\u0398": "Theta",
          "\u03b9": "iota",
          "\u0399": "Iota",
          "\u03ba": "kappa",
          "\u03f0": "kappav",
          "\u039a": "Kappa",
          "\u03bb": "lambda",
          "\u039b": "Lambda",
          "\u03bc": "mu",
          "\xb5": "micro",
          "\u039c": "Mu",
          "\u03bd": "nu",
          "\u039d": "Nu",
          "\u03be": "xi",
          "\u039e": "Xi",
          "\u03bf": "omicron",
          "\u039f": "Omicron",
          "\u03c0": "pi",
          "\u03d6": "piv",
          "\u03a0": "Pi",
          "\u03c1": "rho",
          "\u03f1": "rhov",
          "\u03a1": "Rho",
          "\u03c3": "sigma",
          "\u03a3": "Sigma",
          "\u03c2": "sigmaf",
          "\u03c4": "tau",
          "\u03a4": "Tau",
          "\u03c5": "upsi",
          "\u03a5": "Upsilon",
          "\u03d2": "Upsi",
          "\u03c6": "phi",
          "\u03d5": "phiv",
          "\u03a6": "Phi",
          "\u03c7": "chi",
          "\u03a7": "Chi",
          "\u03c8": "psi",
          "\u03a8": "Psi",
          "\u03c9": "omega",
          "\u03a9": "ohm",
          "\u0430": "acy",
          "\u0410": "Acy",
          "\u0431": "bcy",
          "\u0411": "Bcy",
          "\u0432": "vcy",
          "\u0412": "Vcy",
          "\u0433": "gcy",
          "\u0413": "Gcy",
          "\u0453": "gjcy",
          "\u0403": "GJcy",
          "\u0434": "dcy",
          "\u0414": "Dcy",
          "\u0452": "djcy",
          "\u0402": "DJcy",
          "\u0435": "iecy",
          "\u0415": "IEcy",
          "\u0451": "iocy",
          "\u0401": "IOcy",
          "\u0454": "jukcy",
          "\u0404": "Jukcy",
          "\u0436": "zhcy",
          "\u0416": "ZHcy",
          "\u0437": "zcy",
          "\u0417": "Zcy",
          "\u0455": "dscy",
          "\u0405": "DScy",
          "\u0438": "icy",
          "\u0418": "Icy",
          "\u0456": "iukcy",
          "\u0406": "Iukcy",
          "\u0457": "yicy",
          "\u0407": "YIcy",
          "\u0439": "jcy",
          "\u0419": "Jcy",
          "\u0458": "jsercy",
          "\u0408": "Jsercy",
          "\u043a": "kcy",
          "\u041a": "Kcy",
          "\u045c": "kjcy",
          "\u040c": "KJcy",
          "\u043b": "lcy",
          "\u041b": "Lcy",
          "\u0459": "ljcy",
          "\u0409": "LJcy",
          "\u043c": "mcy",
          "\u041c": "Mcy",
          "\u043d": "ncy",
          "\u041d": "Ncy",
          "\u045a": "njcy",
          "\u040a": "NJcy",
          "\u043e": "ocy",
          "\u041e": "Ocy",
          "\u043f": "pcy",
          "\u041f": "Pcy",
          "\u0440": "rcy",
          "\u0420": "Rcy",
          "\u0441": "scy",
          "\u0421": "Scy",
          "\u0442": "tcy",
          "\u0422": "Tcy",
          "\u045b": "tshcy",
          "\u040b": "TSHcy",
          "\u0443": "ucy",
          "\u0423": "Ucy",
          "\u045e": "ubrcy",
          "\u040e": "Ubrcy",
          "\u0444": "fcy",
          "\u0424": "Fcy",
          "\u0445": "khcy",
          "\u0425": "KHcy",
          "\u0446": "tscy",
          "\u0426": "TScy",
          "\u0447": "chcy",
          "\u0427": "CHcy",
          "\u045f": "dzcy",
          "\u040f": "DZcy",
          "\u0448": "shcy",
          "\u0428": "SHcy",
          "\u0449": "shchcy",
          "\u0429": "SHCHcy",
          "\u044a": "hardcy",
          "\u042a": "HARDcy",
          "\u044b": "ycy",
          "\u042b": "Ycy",
          "\u044c": "softcy",
          "\u042c": "SOFTcy",
          "\u044d": "ecy",
          "\u042d": "Ecy",
          "\u044e": "yucy",
          "\u042e": "YUcy",
          "\u044f": "yacy",
          "\u042f": "YAcy",
          "\u2135": "aleph",
          "\u2136": "beth",
          "\u2137": "gimel",
          "\u2138": "daleth",
        },
        d = /["&'<>`]/g,
        f = {
          '"': "&quot;",
          "&": "&amp;",
          "'": "&#x27;",
          "<": "&lt;",
          ">": "&gt;",
          "`": "&#x60;",
        },
        g = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/,
        h =
          /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,
        m =
          /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g,
        b = {
          aacute: "\xe1",
          Aacute: "\xc1",
          abreve: "\u0103",
          Abreve: "\u0102",
          ac: "\u223e",
          acd: "\u223f",
          acE: "\u223e\u0333",
          acirc: "\xe2",
          Acirc: "\xc2",
          acute: "\xb4",
          acy: "\u0430",
          Acy: "\u0410",
          aelig: "\xe6",
          AElig: "\xc6",
          af: "\u2061",
          afr: "\ud835\udd1e",
          Afr: "\ud835\udd04",
          agrave: "\xe0",
          Agrave: "\xc0",
          alefsym: "\u2135",
          aleph: "\u2135",
          alpha: "\u03b1",
          Alpha: "\u0391",
          amacr: "\u0101",
          Amacr: "\u0100",
          amalg: "\u2a3f",
          amp: "&",
          AMP: "&",
          and: "\u2227",
          And: "\u2a53",
          andand: "\u2a55",
          andd: "\u2a5c",
          andslope: "\u2a58",
          andv: "\u2a5a",
          ang: "\u2220",
          ange: "\u29a4",
          angle: "\u2220",
          angmsd: "\u2221",
          angmsdaa: "\u29a8",
          angmsdab: "\u29a9",
          angmsdac: "\u29aa",
          angmsdad: "\u29ab",
          angmsdae: "\u29ac",
          angmsdaf: "\u29ad",
          angmsdag: "\u29ae",
          angmsdah: "\u29af",
          angrt: "\u221f",
          angrtvb: "\u22be",
          angrtvbd: "\u299d",
          angsph: "\u2222",
          angst: "\xc5",
          angzarr: "\u237c",
          aogon: "\u0105",
          Aogon: "\u0104",
          aopf: "\ud835\udd52",
          Aopf: "\ud835\udd38",
          ap: "\u2248",
          apacir: "\u2a6f",
          ape: "\u224a",
          apE: "\u2a70",
          apid: "\u224b",
          apos: "'",
          ApplyFunction: "\u2061",
          approx: "\u2248",
          approxeq: "\u224a",
          aring: "\xe5",
          Aring: "\xc5",
          ascr: "\ud835\udcb6",
          Ascr: "\ud835\udc9c",
          Assign: "\u2254",
          ast: "*",
          asymp: "\u2248",
          asympeq: "\u224d",
          atilde: "\xe3",
          Atilde: "\xc3",
          auml: "\xe4",
          Auml: "\xc4",
          awconint: "\u2233",
          awint: "\u2a11",
          backcong: "\u224c",
          backepsilon: "\u03f6",
          backprime: "\u2035",
          backsim: "\u223d",
          backsimeq: "\u22cd",
          Backslash: "\u2216",
          Barv: "\u2ae7",
          barvee: "\u22bd",
          barwed: "\u2305",
          Barwed: "\u2306",
          barwedge: "\u2305",
          bbrk: "\u23b5",
          bbrktbrk: "\u23b6",
          bcong: "\u224c",
          bcy: "\u0431",
          Bcy: "\u0411",
          bdquo: "\u201e",
          becaus: "\u2235",
          because: "\u2235",
          Because: "\u2235",
          bemptyv: "\u29b0",
          bepsi: "\u03f6",
          bernou: "\u212c",
          Bernoullis: "\u212c",
          beta: "\u03b2",
          Beta: "\u0392",
          beth: "\u2136",
          between: "\u226c",
          bfr: "\ud835\udd1f",
          Bfr: "\ud835\udd05",
          bigcap: "\u22c2",
          bigcirc: "\u25ef",
          bigcup: "\u22c3",
          bigodot: "\u2a00",
          bigoplus: "\u2a01",
          bigotimes: "\u2a02",
          bigsqcup: "\u2a06",
          bigstar: "\u2605",
          bigtriangledown: "\u25bd",
          bigtriangleup: "\u25b3",
          biguplus: "\u2a04",
          bigvee: "\u22c1",
          bigwedge: "\u22c0",
          bkarow: "\u290d",
          blacklozenge: "\u29eb",
          blacksquare: "\u25aa",
          blacktriangle: "\u25b4",
          blacktriangledown: "\u25be",
          blacktriangleleft: "\u25c2",
          blacktriangleright: "\u25b8",
          blank: "\u2423",
          blk12: "\u2592",
          blk14: "\u2591",
          blk34: "\u2593",
          block: "\u2588",
          bne: "=\u20e5",
          bnequiv: "\u2261\u20e5",
          bnot: "\u2310",
          bNot: "\u2aed",
          bopf: "\ud835\udd53",
          Bopf: "\ud835\udd39",
          bot: "\u22a5",
          bottom: "\u22a5",
          bowtie: "\u22c8",
          boxbox: "\u29c9",
          boxdl: "\u2510",
          boxdL: "\u2555",
          boxDl: "\u2556",
          boxDL: "\u2557",
          boxdr: "\u250c",
          boxdR: "\u2552",
          boxDr: "\u2553",
          boxDR: "\u2554",
          boxh: "\u2500",
          boxH: "\u2550",
          boxhd: "\u252c",
          boxhD: "\u2565",
          boxHd: "\u2564",
          boxHD: "\u2566",
          boxhu: "\u2534",
          boxhU: "\u2568",
          boxHu: "\u2567",
          boxHU: "\u2569",
          boxminus: "\u229f",
          boxplus: "\u229e",
          boxtimes: "\u22a0",
          boxul: "\u2518",
          boxuL: "\u255b",
          boxUl: "\u255c",
          boxUL: "\u255d",
          boxur: "\u2514",
          boxuR: "\u2558",
          boxUr: "\u2559",
          boxUR: "\u255a",
          boxv: "\u2502",
          boxV: "\u2551",
          boxvh: "\u253c",
          boxvH: "\u256a",
          boxVh: "\u256b",
          boxVH: "\u256c",
          boxvl: "\u2524",
          boxvL: "\u2561",
          boxVl: "\u2562",
          boxVL: "\u2563",
          boxvr: "\u251c",
          boxvR: "\u255e",
          boxVr: "\u255f",
          boxVR: "\u2560",
          bprime: "\u2035",
          breve: "\u02d8",
          Breve: "\u02d8",
          brvbar: "\xa6",
          bscr: "\ud835\udcb7",
          Bscr: "\u212c",
          bsemi: "\u204f",
          bsim: "\u223d",
          bsime: "\u22cd",
          bsol: "\\",
          bsolb: "\u29c5",
          bsolhsub: "\u27c8",
          bull: "\u2022",
          bullet: "\u2022",
          bump: "\u224e",
          bumpe: "\u224f",
          bumpE: "\u2aae",
          bumpeq: "\u224f",
          Bumpeq: "\u224e",
          cacute: "\u0107",
          Cacute: "\u0106",
          cap: "\u2229",
          Cap: "\u22d2",
          capand: "\u2a44",
          capbrcup: "\u2a49",
          capcap: "\u2a4b",
          capcup: "\u2a47",
          capdot: "\u2a40",
          CapitalDifferentialD: "\u2145",
          caps: "\u2229\ufe00",
          caret: "\u2041",
          caron: "\u02c7",
          Cayleys: "\u212d",
          ccaps: "\u2a4d",
          ccaron: "\u010d",
          Ccaron: "\u010c",
          ccedil: "\xe7",
          Ccedil: "\xc7",
          ccirc: "\u0109",
          Ccirc: "\u0108",
          Cconint: "\u2230",
          ccups: "\u2a4c",
          ccupssm: "\u2a50",
          cdot: "\u010b",
          Cdot: "\u010a",
          cedil: "\xb8",
          Cedilla: "\xb8",
          cemptyv: "\u29b2",
          cent: "\xa2",
          centerdot: "\xb7",
          CenterDot: "\xb7",
          cfr: "\ud835\udd20",
          Cfr: "\u212d",
          chcy: "\u0447",
          CHcy: "\u0427",
          check: "\u2713",
          checkmark: "\u2713",
          chi: "\u03c7",
          Chi: "\u03a7",
          cir: "\u25cb",
          circ: "\u02c6",
          circeq: "\u2257",
          circlearrowleft: "\u21ba",
          circlearrowright: "\u21bb",
          circledast: "\u229b",
          circledcirc: "\u229a",
          circleddash: "\u229d",
          CircleDot: "\u2299",
          circledR: "\xae",
          circledS: "\u24c8",
          CircleMinus: "\u2296",
          CirclePlus: "\u2295",
          CircleTimes: "\u2297",
          cire: "\u2257",
          cirE: "\u29c3",
          cirfnint: "\u2a10",
          cirmid: "\u2aef",
          cirscir: "\u29c2",
          ClockwiseContourIntegral: "\u2232",
          CloseCurlyDoubleQuote: "\u201d",
          CloseCurlyQuote: "\u2019",
          clubs: "\u2663",
          clubsuit: "\u2663",
          colon: ":",
          Colon: "\u2237",
          colone: "\u2254",
          Colone: "\u2a74",
          coloneq: "\u2254",
          comma: ",",
          commat: "@",
          comp: "\u2201",
          compfn: "\u2218",
          complement: "\u2201",
          complexes: "\u2102",
          cong: "\u2245",
          congdot: "\u2a6d",
          Congruent: "\u2261",
          conint: "\u222e",
          Conint: "\u222f",
          ContourIntegral: "\u222e",
          copf: "\ud835\udd54",
          Copf: "\u2102",
          coprod: "\u2210",
          Coproduct: "\u2210",
          copy: "\xa9",
          COPY: "\xa9",
          copysr: "\u2117",
          CounterClockwiseContourIntegral: "\u2233",
          crarr: "\u21b5",
          cross: "\u2717",
          Cross: "\u2a2f",
          cscr: "\ud835\udcb8",
          Cscr: "\ud835\udc9e",
          csub: "\u2acf",
          csube: "\u2ad1",
          csup: "\u2ad0",
          csupe: "\u2ad2",
          ctdot: "\u22ef",
          cudarrl: "\u2938",
          cudarrr: "\u2935",
          cuepr: "\u22de",
          cuesc: "\u22df",
          cularr: "\u21b6",
          cularrp: "\u293d",
          cup: "\u222a",
          Cup: "\u22d3",
          cupbrcap: "\u2a48",
          cupcap: "\u2a46",
          CupCap: "\u224d",
          cupcup: "\u2a4a",
          cupdot: "\u228d",
          cupor: "\u2a45",
          cups: "\u222a\ufe00",
          curarr: "\u21b7",
          curarrm: "\u293c",
          curlyeqprec: "\u22de",
          curlyeqsucc: "\u22df",
          curlyvee: "\u22ce",
          curlywedge: "\u22cf",
          curren: "\xa4",
          curvearrowleft: "\u21b6",
          curvearrowright: "\u21b7",
          cuvee: "\u22ce",
          cuwed: "\u22cf",
          cwconint: "\u2232",
          cwint: "\u2231",
          cylcty: "\u232d",
          dagger: "\u2020",
          Dagger: "\u2021",
          daleth: "\u2138",
          darr: "\u2193",
          dArr: "\u21d3",
          Darr: "\u21a1",
          dash: "\u2010",
          dashv: "\u22a3",
          Dashv: "\u2ae4",
          dbkarow: "\u290f",
          dblac: "\u02dd",
          dcaron: "\u010f",
          Dcaron: "\u010e",
          dcy: "\u0434",
          Dcy: "\u0414",
          dd: "\u2146",
          DD: "\u2145",
          ddagger: "\u2021",
          ddarr: "\u21ca",
          DDotrahd: "\u2911",
          ddotseq: "\u2a77",
          deg: "\xb0",
          Del: "\u2207",
          delta: "\u03b4",
          Delta: "\u0394",
          demptyv: "\u29b1",
          dfisht: "\u297f",
          dfr: "\ud835\udd21",
          Dfr: "\ud835\udd07",
          dHar: "\u2965",
          dharl: "\u21c3",
          dharr: "\u21c2",
          DiacriticalAcute: "\xb4",
          DiacriticalDot: "\u02d9",
          DiacriticalDoubleAcute: "\u02dd",
          DiacriticalGrave: "`",
          DiacriticalTilde: "\u02dc",
          diam: "\u22c4",
          diamond: "\u22c4",
          Diamond: "\u22c4",
          diamondsuit: "\u2666",
          diams: "\u2666",
          die: "\xa8",
          DifferentialD: "\u2146",
          digamma: "\u03dd",
          disin: "\u22f2",
          div: "\xf7",
          divide: "\xf7",
          divideontimes: "\u22c7",
          divonx: "\u22c7",
          djcy: "\u0452",
          DJcy: "\u0402",
          dlcorn: "\u231e",
          dlcrop: "\u230d",
          dollar: "$",
          dopf: "\ud835\udd55",
          Dopf: "\ud835\udd3b",
          dot: "\u02d9",
          Dot: "\xa8",
          DotDot: "\u20dc",
          doteq: "\u2250",
          doteqdot: "\u2251",
          DotEqual: "\u2250",
          dotminus: "\u2238",
          dotplus: "\u2214",
          dotsquare: "\u22a1",
          doublebarwedge: "\u2306",
          DoubleContourIntegral: "\u222f",
          DoubleDot: "\xa8",
          DoubleDownArrow: "\u21d3",
          DoubleLeftArrow: "\u21d0",
          DoubleLeftRightArrow: "\u21d4",
          DoubleLeftTee: "\u2ae4",
          DoubleLongLeftArrow: "\u27f8",
          DoubleLongLeftRightArrow: "\u27fa",
          DoubleLongRightArrow: "\u27f9",
          DoubleRightArrow: "\u21d2",
          DoubleRightTee: "\u22a8",
          DoubleUpArrow: "\u21d1",
          DoubleUpDownArrow: "\u21d5",
          DoubleVerticalBar: "\u2225",
          downarrow: "\u2193",
          Downarrow: "\u21d3",
          DownArrow: "\u2193",
          DownArrowBar: "\u2913",
          DownArrowUpArrow: "\u21f5",
          DownBreve: "\u0311",
          downdownarrows: "\u21ca",
          downharpoonleft: "\u21c3",
          downharpoonright: "\u21c2",
          DownLeftRightVector: "\u2950",
          DownLeftTeeVector: "\u295e",
          DownLeftVector: "\u21bd",
          DownLeftVectorBar: "\u2956",
          DownRightTeeVector: "\u295f",
          DownRightVector: "\u21c1",
          DownRightVectorBar: "\u2957",
          DownTee: "\u22a4",
          DownTeeArrow: "\u21a7",
          drbkarow: "\u2910",
          drcorn: "\u231f",
          drcrop: "\u230c",
          dscr: "\ud835\udcb9",
          Dscr: "\ud835\udc9f",
          dscy: "\u0455",
          DScy: "\u0405",
          dsol: "\u29f6",
          dstrok: "\u0111",
          Dstrok: "\u0110",
          dtdot: "\u22f1",
          dtri: "\u25bf",
          dtrif: "\u25be",
          duarr: "\u21f5",
          duhar: "\u296f",
          dwangle: "\u29a6",
          dzcy: "\u045f",
          DZcy: "\u040f",
          dzigrarr: "\u27ff",
          eacute: "\xe9",
          Eacute: "\xc9",
          easter: "\u2a6e",
          ecaron: "\u011b",
          Ecaron: "\u011a",
          ecir: "\u2256",
          ecirc: "\xea",
          Ecirc: "\xca",
          ecolon: "\u2255",
          ecy: "\u044d",
          Ecy: "\u042d",
          eDDot: "\u2a77",
          edot: "\u0117",
          eDot: "\u2251",
          Edot: "\u0116",
          ee: "\u2147",
          efDot: "\u2252",
          efr: "\ud835\udd22",
          Efr: "\ud835\udd08",
          eg: "\u2a9a",
          egrave: "\xe8",
          Egrave: "\xc8",
          egs: "\u2a96",
          egsdot: "\u2a98",
          el: "\u2a99",
          Element: "\u2208",
          elinters: "\u23e7",
          ell: "\u2113",
          els: "\u2a95",
          elsdot: "\u2a97",
          emacr: "\u0113",
          Emacr: "\u0112",
          empty: "\u2205",
          emptyset: "\u2205",
          EmptySmallSquare: "\u25fb",
          emptyv: "\u2205",
          EmptyVerySmallSquare: "\u25ab",
          emsp: "\u2003",
          emsp13: "\u2004",
          emsp14: "\u2005",
          eng: "\u014b",
          ENG: "\u014a",
          ensp: "\u2002",
          eogon: "\u0119",
          Eogon: "\u0118",
          eopf: "\ud835\udd56",
          Eopf: "\ud835\udd3c",
          epar: "\u22d5",
          eparsl: "\u29e3",
          eplus: "\u2a71",
          epsi: "\u03b5",
          epsilon: "\u03b5",
          Epsilon: "\u0395",
          epsiv: "\u03f5",
          eqcirc: "\u2256",
          eqcolon: "\u2255",
          eqsim: "\u2242",
          eqslantgtr: "\u2a96",
          eqslantless: "\u2a95",
          Equal: "\u2a75",
          equals: "=",
          EqualTilde: "\u2242",
          equest: "\u225f",
          Equilibrium: "\u21cc",
          equiv: "\u2261",
          equivDD: "\u2a78",
          eqvparsl: "\u29e5",
          erarr: "\u2971",
          erDot: "\u2253",
          escr: "\u212f",
          Escr: "\u2130",
          esdot: "\u2250",
          esim: "\u2242",
          Esim: "\u2a73",
          eta: "\u03b7",
          Eta: "\u0397",
          eth: "\xf0",
          ETH: "\xd0",
          euml: "\xeb",
          Euml: "\xcb",
          euro: "\u20ac",
          excl: "!",
          exist: "\u2203",
          Exists: "\u2203",
          expectation: "\u2130",
          exponentiale: "\u2147",
          ExponentialE: "\u2147",
          fallingdotseq: "\u2252",
          fcy: "\u0444",
          Fcy: "\u0424",
          female: "\u2640",
          ffilig: "\ufb03",
          fflig: "\ufb00",
          ffllig: "\ufb04",
          ffr: "\ud835\udd23",
          Ffr: "\ud835\udd09",
          filig: "\ufb01",
          FilledSmallSquare: "\u25fc",
          FilledVerySmallSquare: "\u25aa",
          fjlig: "fj",
          flat: "\u266d",
          fllig: "\ufb02",
          fltns: "\u25b1",
          fnof: "\u0192",
          fopf: "\ud835\udd57",
          Fopf: "\ud835\udd3d",
          forall: "\u2200",
          ForAll: "\u2200",
          fork: "\u22d4",
          forkv: "\u2ad9",
          Fouriertrf: "\u2131",
          fpartint: "\u2a0d",
          frac12: "\xbd",
          frac13: "\u2153",
          frac14: "\xbc",
          frac15: "\u2155",
          frac16: "\u2159",
          frac18: "\u215b",
          frac23: "\u2154",
          frac25: "\u2156",
          frac34: "\xbe",
          frac35: "\u2157",
          frac38: "\u215c",
          frac45: "\u2158",
          frac56: "\u215a",
          frac58: "\u215d",
          frac78: "\u215e",
          frasl: "\u2044",
          frown: "\u2322",
          fscr: "\ud835\udcbb",
          Fscr: "\u2131",
          gacute: "\u01f5",
          gamma: "\u03b3",
          Gamma: "\u0393",
          gammad: "\u03dd",
          Gammad: "\u03dc",
          gap: "\u2a86",
          gbreve: "\u011f",
          Gbreve: "\u011e",
          Gcedil: "\u0122",
          gcirc: "\u011d",
          Gcirc: "\u011c",
          gcy: "\u0433",
          Gcy: "\u0413",
          gdot: "\u0121",
          Gdot: "\u0120",
          ge: "\u2265",
          gE: "\u2267",
          gel: "\u22db",
          gEl: "\u2a8c",
          geq: "\u2265",
          geqq: "\u2267",
          geqslant: "\u2a7e",
          ges: "\u2a7e",
          gescc: "\u2aa9",
          gesdot: "\u2a80",
          gesdoto: "\u2a82",
          gesdotol: "\u2a84",
          gesl: "\u22db\ufe00",
          gesles: "\u2a94",
          gfr: "\ud835\udd24",
          Gfr: "\ud835\udd0a",
          gg: "\u226b",
          Gg: "\u22d9",
          ggg: "\u22d9",
          gimel: "\u2137",
          gjcy: "\u0453",
          GJcy: "\u0403",
          gl: "\u2277",
          gla: "\u2aa5",
          glE: "\u2a92",
          glj: "\u2aa4",
          gnap: "\u2a8a",
          gnapprox: "\u2a8a",
          gne: "\u2a88",
          gnE: "\u2269",
          gneq: "\u2a88",
          gneqq: "\u2269",
          gnsim: "\u22e7",
          gopf: "\ud835\udd58",
          Gopf: "\ud835\udd3e",
          grave: "`",
          GreaterEqual: "\u2265",
          GreaterEqualLess: "\u22db",
          GreaterFullEqual: "\u2267",
          GreaterGreater: "\u2aa2",
          GreaterLess: "\u2277",
          GreaterSlantEqual: "\u2a7e",
          GreaterTilde: "\u2273",
          gscr: "\u210a",
          Gscr: "\ud835\udca2",
          gsim: "\u2273",
          gsime: "\u2a8e",
          gsiml: "\u2a90",
          gt: ">",
          Gt: "\u226b",
          GT: ">",
          gtcc: "\u2aa7",
          gtcir: "\u2a7a",
          gtdot: "\u22d7",
          gtlPar: "\u2995",
          gtquest: "\u2a7c",
          gtrapprox: "\u2a86",
          gtrarr: "\u2978",
          gtrdot: "\u22d7",
          gtreqless: "\u22db",
          gtreqqless: "\u2a8c",
          gtrless: "\u2277",
          gtrsim: "\u2273",
          gvertneqq: "\u2269\ufe00",
          gvnE: "\u2269\ufe00",
          Hacek: "\u02c7",
          hairsp: "\u200a",
          half: "\xbd",
          hamilt: "\u210b",
          hardcy: "\u044a",
          HARDcy: "\u042a",
          harr: "\u2194",
          hArr: "\u21d4",
          harrcir: "\u2948",
          harrw: "\u21ad",
          Hat: "^",
          hbar: "\u210f",
          hcirc: "\u0125",
          Hcirc: "\u0124",
          hearts: "\u2665",
          heartsuit: "\u2665",
          hellip: "\u2026",
          hercon: "\u22b9",
          hfr: "\ud835\udd25",
          Hfr: "\u210c",
          HilbertSpace: "\u210b",
          hksearow: "\u2925",
          hkswarow: "\u2926",
          hoarr: "\u21ff",
          homtht: "\u223b",
          hookleftarrow: "\u21a9",
          hookrightarrow: "\u21aa",
          hopf: "\ud835\udd59",
          Hopf: "\u210d",
          horbar: "\u2015",
          HorizontalLine: "\u2500",
          hscr: "\ud835\udcbd",
          Hscr: "\u210b",
          hslash: "\u210f",
          hstrok: "\u0127",
          Hstrok: "\u0126",
          HumpDownHump: "\u224e",
          HumpEqual: "\u224f",
          hybull: "\u2043",
          hyphen: "\u2010",
          iacute: "\xed",
          Iacute: "\xcd",
          ic: "\u2063",
          icirc: "\xee",
          Icirc: "\xce",
          icy: "\u0438",
          Icy: "\u0418",
          Idot: "\u0130",
          iecy: "\u0435",
          IEcy: "\u0415",
          iexcl: "\xa1",
          iff: "\u21d4",
          ifr: "\ud835\udd26",
          Ifr: "\u2111",
          igrave: "\xec",
          Igrave: "\xcc",
          ii: "\u2148",
          iiiint: "\u2a0c",
          iiint: "\u222d",
          iinfin: "\u29dc",
          iiota: "\u2129",
          ijlig: "\u0133",
          IJlig: "\u0132",
          Im: "\u2111",
          imacr: "\u012b",
          Imacr: "\u012a",
          image: "\u2111",
          ImaginaryI: "\u2148",
          imagline: "\u2110",
          imagpart: "\u2111",
          imath: "\u0131",
          imof: "\u22b7",
          imped: "\u01b5",
          Implies: "\u21d2",
          in: "\u2208",
          incare: "\u2105",
          infin: "\u221e",
          infintie: "\u29dd",
          inodot: "\u0131",
          int: "\u222b",
          Int: "\u222c",
          intcal: "\u22ba",
          integers: "\u2124",
          Integral: "\u222b",
          intercal: "\u22ba",
          Intersection: "\u22c2",
          intlarhk: "\u2a17",
          intprod: "\u2a3c",
          InvisibleComma: "\u2063",
          InvisibleTimes: "\u2062",
          iocy: "\u0451",
          IOcy: "\u0401",
          iogon: "\u012f",
          Iogon: "\u012e",
          iopf: "\ud835\udd5a",
          Iopf: "\ud835\udd40",
          iota: "\u03b9",
          Iota: "\u0399",
          iprod: "\u2a3c",
          iquest: "\xbf",
          iscr: "\ud835\udcbe",
          Iscr: "\u2110",
          isin: "\u2208",
          isindot: "\u22f5",
          isinE: "\u22f9",
          isins: "\u22f4",
          isinsv: "\u22f3",
          isinv: "\u2208",
          it: "\u2062",
          itilde: "\u0129",
          Itilde: "\u0128",
          iukcy: "\u0456",
          Iukcy: "\u0406",
          iuml: "\xef",
          Iuml: "\xcf",
          jcirc: "\u0135",
          Jcirc: "\u0134",
          jcy: "\u0439",
          Jcy: "\u0419",
          jfr: "\ud835\udd27",
          Jfr: "\ud835\udd0d",
          jmath: "\u0237",
          jopf: "\ud835\udd5b",
          Jopf: "\ud835\udd41",
          jscr: "\ud835\udcbf",
          Jscr: "\ud835\udca5",
          jsercy: "\u0458",
          Jsercy: "\u0408",
          jukcy: "\u0454",
          Jukcy: "\u0404",
          kappa: "\u03ba",
          Kappa: "\u039a",
          kappav: "\u03f0",
          kcedil: "\u0137",
          Kcedil: "\u0136",
          kcy: "\u043a",
          Kcy: "\u041a",
          kfr: "\ud835\udd28",
          Kfr: "\ud835\udd0e",
          kgreen: "\u0138",
          khcy: "\u0445",
          KHcy: "\u0425",
          kjcy: "\u045c",
          KJcy: "\u040c",
          kopf: "\ud835\udd5c",
          Kopf: "\ud835\udd42",
          kscr: "\ud835\udcc0",
          Kscr: "\ud835\udca6",
          lAarr: "\u21da",
          lacute: "\u013a",
          Lacute: "\u0139",
          laemptyv: "\u29b4",
          lagran: "\u2112",
          lambda: "\u03bb",
          Lambda: "\u039b",
          lang: "\u27e8",
          Lang: "\u27ea",
          langd: "\u2991",
          langle: "\u27e8",
          lap: "\u2a85",
          Laplacetrf: "\u2112",
          laquo: "\xab",
          larr: "\u2190",
          lArr: "\u21d0",
          Larr: "\u219e",
          larrb: "\u21e4",
          larrbfs: "\u291f",
          larrfs: "\u291d",
          larrhk: "\u21a9",
          larrlp: "\u21ab",
          larrpl: "\u2939",
          larrsim: "\u2973",
          larrtl: "\u21a2",
          lat: "\u2aab",
          latail: "\u2919",
          lAtail: "\u291b",
          late: "\u2aad",
          lates: "\u2aad\ufe00",
          lbarr: "\u290c",
          lBarr: "\u290e",
          lbbrk: "\u2772",
          lbrace: "{",
          lbrack: "[",
          lbrke: "\u298b",
          lbrksld: "\u298f",
          lbrkslu: "\u298d",
          lcaron: "\u013e",
          Lcaron: "\u013d",
          lcedil: "\u013c",
          Lcedil: "\u013b",
          lceil: "\u2308",
          lcub: "{",
          lcy: "\u043b",
          Lcy: "\u041b",
          ldca: "\u2936",
          ldquo: "\u201c",
          ldquor: "\u201e",
          ldrdhar: "\u2967",
          ldrushar: "\u294b",
          ldsh: "\u21b2",
          le: "\u2264",
          lE: "\u2266",
          LeftAngleBracket: "\u27e8",
          leftarrow: "\u2190",
          Leftarrow: "\u21d0",
          LeftArrow: "\u2190",
          LeftArrowBar: "\u21e4",
          LeftArrowRightArrow: "\u21c6",
          leftarrowtail: "\u21a2",
          LeftCeiling: "\u2308",
          LeftDoubleBracket: "\u27e6",
          LeftDownTeeVector: "\u2961",
          LeftDownVector: "\u21c3",
          LeftDownVectorBar: "\u2959",
          LeftFloor: "\u230a",
          leftharpoondown: "\u21bd",
          leftharpoonup: "\u21bc",
          leftleftarrows: "\u21c7",
          leftrightarrow: "\u2194",
          Leftrightarrow: "\u21d4",
          LeftRightArrow: "\u2194",
          leftrightarrows: "\u21c6",
          leftrightharpoons: "\u21cb",
          leftrightsquigarrow: "\u21ad",
          LeftRightVector: "\u294e",
          LeftTee: "\u22a3",
          LeftTeeArrow: "\u21a4",
          LeftTeeVector: "\u295a",
          leftthreetimes: "\u22cb",
          LeftTriangle: "\u22b2",
          LeftTriangleBar: "\u29cf",
          LeftTriangleEqual: "\u22b4",
          LeftUpDownVector: "\u2951",
          LeftUpTeeVector: "\u2960",
          LeftUpVector: "\u21bf",
          LeftUpVectorBar: "\u2958",
          LeftVector: "\u21bc",
          LeftVectorBar: "\u2952",
          leg: "\u22da",
          lEg: "\u2a8b",
          leq: "\u2264",
          leqq: "\u2266",
          leqslant: "\u2a7d",
          les: "\u2a7d",
          lescc: "\u2aa8",
          lesdot: "\u2a7f",
          lesdoto: "\u2a81",
          lesdotor: "\u2a83",
          lesg: "\u22da\ufe00",
          lesges: "\u2a93",
          lessapprox: "\u2a85",
          lessdot: "\u22d6",
          lesseqgtr: "\u22da",
          lesseqqgtr: "\u2a8b",
          LessEqualGreater: "\u22da",
          LessFullEqual: "\u2266",
          LessGreater: "\u2276",
          lessgtr: "\u2276",
          LessLess: "\u2aa1",
          lesssim: "\u2272",
          LessSlantEqual: "\u2a7d",
          LessTilde: "\u2272",
          lfisht: "\u297c",
          lfloor: "\u230a",
          lfr: "\ud835\udd29",
          Lfr: "\ud835\udd0f",
          lg: "\u2276",
          lgE: "\u2a91",
          lHar: "\u2962",
          lhard: "\u21bd",
          lharu: "\u21bc",
          lharul: "\u296a",
          lhblk: "\u2584",
          ljcy: "\u0459",
          LJcy: "\u0409",
          ll: "\u226a",
          Ll: "\u22d8",
          llarr: "\u21c7",
          llcorner: "\u231e",
          Lleftarrow: "\u21da",
          llhard: "\u296b",
          lltri: "\u25fa",
          lmidot: "\u0140",
          Lmidot: "\u013f",
          lmoust: "\u23b0",
          lmoustache: "\u23b0",
          lnap: "\u2a89",
          lnapprox: "\u2a89",
          lne: "\u2a87",
          lnE: "\u2268",
          lneq: "\u2a87",
          lneqq: "\u2268",
          lnsim: "\u22e6",
          loang: "\u27ec",
          loarr: "\u21fd",
          lobrk: "\u27e6",
          longleftarrow: "\u27f5",
          Longleftarrow: "\u27f8",
          LongLeftArrow: "\u27f5",
          longleftrightarrow: "\u27f7",
          Longleftrightarrow: "\u27fa",
          LongLeftRightArrow: "\u27f7",
          longmapsto: "\u27fc",
          longrightarrow: "\u27f6",
          Longrightarrow: "\u27f9",
          LongRightArrow: "\u27f6",
          looparrowleft: "\u21ab",
          looparrowright: "\u21ac",
          lopar: "\u2985",
          lopf: "\ud835\udd5d",
          Lopf: "\ud835\udd43",
          loplus: "\u2a2d",
          lotimes: "\u2a34",
          lowast: "\u2217",
          lowbar: "_",
          LowerLeftArrow: "\u2199",
          LowerRightArrow: "\u2198",
          loz: "\u25ca",
          lozenge: "\u25ca",
          lozf: "\u29eb",
          lpar: "(",
          lparlt: "\u2993",
          lrarr: "\u21c6",
          lrcorner: "\u231f",
          lrhar: "\u21cb",
          lrhard: "\u296d",
          lrm: "\u200e",
          lrtri: "\u22bf",
          lsaquo: "\u2039",
          lscr: "\ud835\udcc1",
          Lscr: "\u2112",
          lsh: "\u21b0",
          Lsh: "\u21b0",
          lsim: "\u2272",
          lsime: "\u2a8d",
          lsimg: "\u2a8f",
          lsqb: "[",
          lsquo: "\u2018",
          lsquor: "\u201a",
          lstrok: "\u0142",
          Lstrok: "\u0141",
          lt: "<",
          Lt: "\u226a",
          LT: "<",
          ltcc: "\u2aa6",
          ltcir: "\u2a79",
          ltdot: "\u22d6",
          lthree: "\u22cb",
          ltimes: "\u22c9",
          ltlarr: "\u2976",
          ltquest: "\u2a7b",
          ltri: "\u25c3",
          ltrie: "\u22b4",
          ltrif: "\u25c2",
          ltrPar: "\u2996",
          lurdshar: "\u294a",
          luruhar: "\u2966",
          lvertneqq: "\u2268\ufe00",
          lvnE: "\u2268\ufe00",
          macr: "\xaf",
          male: "\u2642",
          malt: "\u2720",
          maltese: "\u2720",
          map: "\u21a6",
          Map: "\u2905",
          mapsto: "\u21a6",
          mapstodown: "\u21a7",
          mapstoleft: "\u21a4",
          mapstoup: "\u21a5",
          marker: "\u25ae",
          mcomma: "\u2a29",
          mcy: "\u043c",
          Mcy: "\u041c",
          mdash: "\u2014",
          mDDot: "\u223a",
          measuredangle: "\u2221",
          MediumSpace: "\u205f",
          Mellintrf: "\u2133",
          mfr: "\ud835\udd2a",
          Mfr: "\ud835\udd10",
          mho: "\u2127",
          micro: "\xb5",
          mid: "\u2223",
          midast: "*",
          midcir: "\u2af0",
          middot: "\xb7",
          minus: "\u2212",
          minusb: "\u229f",
          minusd: "\u2238",
          minusdu: "\u2a2a",
          MinusPlus: "\u2213",
          mlcp: "\u2adb",
          mldr: "\u2026",
          mnplus: "\u2213",
          models: "\u22a7",
          mopf: "\ud835\udd5e",
          Mopf: "\ud835\udd44",
          mp: "\u2213",
          mscr: "\ud835\udcc2",
          Mscr: "\u2133",
          mstpos: "\u223e",
          mu: "\u03bc",
          Mu: "\u039c",
          multimap: "\u22b8",
          mumap: "\u22b8",
          nabla: "\u2207",
          nacute: "\u0144",
          Nacute: "\u0143",
          nang: "\u2220\u20d2",
          nap: "\u2249",
          napE: "\u2a70\u0338",
          napid: "\u224b\u0338",
          napos: "\u0149",
          napprox: "\u2249",
          natur: "\u266e",
          natural: "\u266e",
          naturals: "\u2115",
          nbsp: "\xa0",
          nbump: "\u224e\u0338",
          nbumpe: "\u224f\u0338",
          ncap: "\u2a43",
          ncaron: "\u0148",
          Ncaron: "\u0147",
          ncedil: "\u0146",
          Ncedil: "\u0145",
          ncong: "\u2247",
          ncongdot: "\u2a6d\u0338",
          ncup: "\u2a42",
          ncy: "\u043d",
          Ncy: "\u041d",
          ndash: "\u2013",
          ne: "\u2260",
          nearhk: "\u2924",
          nearr: "\u2197",
          neArr: "\u21d7",
          nearrow: "\u2197",
          nedot: "\u2250\u0338",
          NegativeMediumSpace: "\u200b",
          NegativeThickSpace: "\u200b",
          NegativeThinSpace: "\u200b",
          NegativeVeryThinSpace: "\u200b",
          nequiv: "\u2262",
          nesear: "\u2928",
          nesim: "\u2242\u0338",
          NestedGreaterGreater: "\u226b",
          NestedLessLess: "\u226a",
          NewLine: "\n",
          nexist: "\u2204",
          nexists: "\u2204",
          nfr: "\ud835\udd2b",
          Nfr: "\ud835\udd11",
          nge: "\u2271",
          ngE: "\u2267\u0338",
          ngeq: "\u2271",
          ngeqq: "\u2267\u0338",
          ngeqslant: "\u2a7e\u0338",
          nges: "\u2a7e\u0338",
          nGg: "\u22d9\u0338",
          ngsim: "\u2275",
          ngt: "\u226f",
          nGt: "\u226b\u20d2",
          ngtr: "\u226f",
          nGtv: "\u226b\u0338",
          nharr: "\u21ae",
          nhArr: "\u21ce",
          nhpar: "\u2af2",
          ni: "\u220b",
          nis: "\u22fc",
          nisd: "\u22fa",
          niv: "\u220b",
          njcy: "\u045a",
          NJcy: "\u040a",
          nlarr: "\u219a",
          nlArr: "\u21cd",
          nldr: "\u2025",
          nle: "\u2270",
          nlE: "\u2266\u0338",
          nleftarrow: "\u219a",
          nLeftarrow: "\u21cd",
          nleftrightarrow: "\u21ae",
          nLeftrightarrow: "\u21ce",
          nleq: "\u2270",
          nleqq: "\u2266\u0338",
          nleqslant: "\u2a7d\u0338",
          nles: "\u2a7d\u0338",
          nless: "\u226e",
          nLl: "\u22d8\u0338",
          nlsim: "\u2274",
          nlt: "\u226e",
          nLt: "\u226a\u20d2",
          nltri: "\u22ea",
          nltrie: "\u22ec",
          nLtv: "\u226a\u0338",
          nmid: "\u2224",
          NoBreak: "\u2060",
          NonBreakingSpace: "\xa0",
          nopf: "\ud835\udd5f",
          Nopf: "\u2115",
          not: "\xac",
          Not: "\u2aec",
          NotCongruent: "\u2262",
          NotCupCap: "\u226d",
          NotDoubleVerticalBar: "\u2226",
          NotElement: "\u2209",
          NotEqual: "\u2260",
          NotEqualTilde: "\u2242\u0338",
          NotExists: "\u2204",
          NotGreater: "\u226f",
          NotGreaterEqual: "\u2271",
          NotGreaterFullEqual: "\u2267\u0338",
          NotGreaterGreater: "\u226b\u0338",
          NotGreaterLess: "\u2279",
          NotGreaterSlantEqual: "\u2a7e\u0338",
          NotGreaterTilde: "\u2275",
          NotHumpDownHump: "\u224e\u0338",
          NotHumpEqual: "\u224f\u0338",
          notin: "\u2209",
          notindot: "\u22f5\u0338",
          notinE: "\u22f9\u0338",
          notinva: "\u2209",
          notinvb: "\u22f7",
          notinvc: "\u22f6",
          NotLeftTriangle: "\u22ea",
          NotLeftTriangleBar: "\u29cf\u0338",
          NotLeftTriangleEqual: "\u22ec",
          NotLess: "\u226e",
          NotLessEqual: "\u2270",
          NotLessGreater: "\u2278",
          NotLessLess: "\u226a\u0338",
          NotLessSlantEqual: "\u2a7d\u0338",
          NotLessTilde: "\u2274",
          NotNestedGreaterGreater: "\u2aa2\u0338",
          NotNestedLessLess: "\u2aa1\u0338",
          notni: "\u220c",
          notniva: "\u220c",
          notnivb: "\u22fe",
          notnivc: "\u22fd",
          NotPrecedes: "\u2280",
          NotPrecedesEqual: "\u2aaf\u0338",
          NotPrecedesSlantEqual: "\u22e0",
          NotReverseElement: "\u220c",
          NotRightTriangle: "\u22eb",
          NotRightTriangleBar: "\u29d0\u0338",
          NotRightTriangleEqual: "\u22ed",
          NotSquareSubset: "\u228f\u0338",
          NotSquareSubsetEqual: "\u22e2",
          NotSquareSuperset: "\u2290\u0338",
          NotSquareSupersetEqual: "\u22e3",
          NotSubset: "\u2282\u20d2",
          NotSubsetEqual: "\u2288",
          NotSucceeds: "\u2281",
          NotSucceedsEqual: "\u2ab0\u0338",
          NotSucceedsSlantEqual: "\u22e1",
          NotSucceedsTilde: "\u227f\u0338",
          NotSuperset: "\u2283\u20d2",
          NotSupersetEqual: "\u2289",
          NotTilde: "\u2241",
          NotTildeEqual: "\u2244",
          NotTildeFullEqual: "\u2247",
          NotTildeTilde: "\u2249",
          NotVerticalBar: "\u2224",
          npar: "\u2226",
          nparallel: "\u2226",
          nparsl: "\u2afd\u20e5",
          npart: "\u2202\u0338",
          npolint: "\u2a14",
          npr: "\u2280",
          nprcue: "\u22e0",
          npre: "\u2aaf\u0338",
          nprec: "\u2280",
          npreceq: "\u2aaf\u0338",
          nrarr: "\u219b",
          nrArr: "\u21cf",
          nrarrc: "\u2933\u0338",
          nrarrw: "\u219d\u0338",
          nrightarrow: "\u219b",
          nRightarrow: "\u21cf",
          nrtri: "\u22eb",
          nrtrie: "\u22ed",
          nsc: "\u2281",
          nsccue: "\u22e1",
          nsce: "\u2ab0\u0338",
          nscr: "\ud835\udcc3",
          Nscr: "\ud835\udca9",
          nshortmid: "\u2224",
          nshortparallel: "\u2226",
          nsim: "\u2241",
          nsime: "\u2244",
          nsimeq: "\u2244",
          nsmid: "\u2224",
          nspar: "\u2226",
          nsqsube: "\u22e2",
          nsqsupe: "\u22e3",
          nsub: "\u2284",
          nsube: "\u2288",
          nsubE: "\u2ac5\u0338",
          nsubset: "\u2282\u20d2",
          nsubseteq: "\u2288",
          nsubseteqq: "\u2ac5\u0338",
          nsucc: "\u2281",
          nsucceq: "\u2ab0\u0338",
          nsup: "\u2285",
          nsupe: "\u2289",
          nsupE: "\u2ac6\u0338",
          nsupset: "\u2283\u20d2",
          nsupseteq: "\u2289",
          nsupseteqq: "\u2ac6\u0338",
          ntgl: "\u2279",
          ntilde: "\xf1",
          Ntilde: "\xd1",
          ntlg: "\u2278",
          ntriangleleft: "\u22ea",
          ntrianglelefteq: "\u22ec",
          ntriangleright: "\u22eb",
          ntrianglerighteq: "\u22ed",
          nu: "\u03bd",
          Nu: "\u039d",
          num: "#",
          numero: "\u2116",
          numsp: "\u2007",
          nvap: "\u224d\u20d2",
          nvdash: "\u22ac",
          nvDash: "\u22ad",
          nVdash: "\u22ae",
          nVDash: "\u22af",
          nvge: "\u2265\u20d2",
          nvgt: ">\u20d2",
          nvHarr: "\u2904",
          nvinfin: "\u29de",
          nvlArr: "\u2902",
          nvle: "\u2264\u20d2",
          nvlt: "<\u20d2",
          nvltrie: "\u22b4\u20d2",
          nvrArr: "\u2903",
          nvrtrie: "\u22b5\u20d2",
          nvsim: "\u223c\u20d2",
          nwarhk: "\u2923",
          nwarr: "\u2196",
          nwArr: "\u21d6",
          nwarrow: "\u2196",
          nwnear: "\u2927",
          oacute: "\xf3",
          Oacute: "\xd3",
          oast: "\u229b",
          ocir: "\u229a",
          ocirc: "\xf4",
          Ocirc: "\xd4",
          ocy: "\u043e",
          Ocy: "\u041e",
          odash: "\u229d",
          odblac: "\u0151",
          Odblac: "\u0150",
          odiv: "\u2a38",
          odot: "\u2299",
          odsold: "\u29bc",
          oelig: "\u0153",
          OElig: "\u0152",
          ofcir: "\u29bf",
          ofr: "\ud835\udd2c",
          Ofr: "\ud835\udd12",
          ogon: "\u02db",
          ograve: "\xf2",
          Ograve: "\xd2",
          ogt: "\u29c1",
          ohbar: "\u29b5",
          ohm: "\u03a9",
          oint: "\u222e",
          olarr: "\u21ba",
          olcir: "\u29be",
          olcross: "\u29bb",
          oline: "\u203e",
          olt: "\u29c0",
          omacr: "\u014d",
          Omacr: "\u014c",
          omega: "\u03c9",
          Omega: "\u03a9",
          omicron: "\u03bf",
          Omicron: "\u039f",
          omid: "\u29b6",
          ominus: "\u2296",
          oopf: "\ud835\udd60",
          Oopf: "\ud835\udd46",
          opar: "\u29b7",
          OpenCurlyDoubleQuote: "\u201c",
          OpenCurlyQuote: "\u2018",
          operp: "\u29b9",
          oplus: "\u2295",
          or: "\u2228",
          Or: "\u2a54",
          orarr: "\u21bb",
          ord: "\u2a5d",
          order: "\u2134",
          orderof: "\u2134",
          ordf: "\xaa",
          ordm: "\xba",
          origof: "\u22b6",
          oror: "\u2a56",
          orslope: "\u2a57",
          orv: "\u2a5b",
          oS: "\u24c8",
          oscr: "\u2134",
          Oscr: "\ud835\udcaa",
          oslash: "\xf8",
          Oslash: "\xd8",
          osol: "\u2298",
          otilde: "\xf5",
          Otilde: "\xd5",
          otimes: "\u2297",
          Otimes: "\u2a37",
          otimesas: "\u2a36",
          ouml: "\xf6",
          Ouml: "\xd6",
          ovbar: "\u233d",
          OverBar: "\u203e",
          OverBrace: "\u23de",
          OverBracket: "\u23b4",
          OverParenthesis: "\u23dc",
          par: "\u2225",
          para: "\xb6",
          parallel: "\u2225",
          parsim: "\u2af3",
          parsl: "\u2afd",
          part: "\u2202",
          PartialD: "\u2202",
          pcy: "\u043f",
          Pcy: "\u041f",
          percnt: "%",
          period: ".",
          permil: "\u2030",
          perp: "\u22a5",
          pertenk: "\u2031",
          pfr: "\ud835\udd2d",
          Pfr: "\ud835\udd13",
          phi: "\u03c6",
          Phi: "\u03a6",
          phiv: "\u03d5",
          phmmat: "\u2133",
          phone: "\u260e",
          pi: "\u03c0",
          Pi: "\u03a0",
          pitchfork: "\u22d4",
          piv: "\u03d6",
          planck: "\u210f",
          planckh: "\u210e",
          plankv: "\u210f",
          plus: "+",
          plusacir: "\u2a23",
          plusb: "\u229e",
          pluscir: "\u2a22",
          plusdo: "\u2214",
          plusdu: "\u2a25",
          pluse: "\u2a72",
          PlusMinus: "\xb1",
          plusmn: "\xb1",
          plussim: "\u2a26",
          plustwo: "\u2a27",
          pm: "\xb1",
          Poincareplane: "\u210c",
          pointint: "\u2a15",
          popf: "\ud835\udd61",
          Popf: "\u2119",
          pound: "\xa3",
          pr: "\u227a",
          Pr: "\u2abb",
          prap: "\u2ab7",
          prcue: "\u227c",
          pre: "\u2aaf",
          prE: "\u2ab3",
          prec: "\u227a",
          precapprox: "\u2ab7",
          preccurlyeq: "\u227c",
          Precedes: "\u227a",
          PrecedesEqual: "\u2aaf",
          PrecedesSlantEqual: "\u227c",
          PrecedesTilde: "\u227e",
          preceq: "\u2aaf",
          precnapprox: "\u2ab9",
          precneqq: "\u2ab5",
          precnsim: "\u22e8",
          precsim: "\u227e",
          prime: "\u2032",
          Prime: "\u2033",
          primes: "\u2119",
          prnap: "\u2ab9",
          prnE: "\u2ab5",
          prnsim: "\u22e8",
          prod: "\u220f",
          Product: "\u220f",
          profalar: "\u232e",
          profline: "\u2312",
          profsurf: "\u2313",
          prop: "\u221d",
          Proportion: "\u2237",
          Proportional: "\u221d",
          propto: "\u221d",
          prsim: "\u227e",
          prurel: "\u22b0",
          pscr: "\ud835\udcc5",
          Pscr: "\ud835\udcab",
          psi: "\u03c8",
          Psi: "\u03a8",
          puncsp: "\u2008",
          qfr: "\ud835\udd2e",
          Qfr: "\ud835\udd14",
          qint: "\u2a0c",
          qopf: "\ud835\udd62",
          Qopf: "\u211a",
          qprime: "\u2057",
          qscr: "\ud835\udcc6",
          Qscr: "\ud835\udcac",
          quaternions: "\u210d",
          quatint: "\u2a16",
          quest: "?",
          questeq: "\u225f",
          quot: '"',
          QUOT: '"',
          rAarr: "\u21db",
          race: "\u223d\u0331",
          racute: "\u0155",
          Racute: "\u0154",
          radic: "\u221a",
          raemptyv: "\u29b3",
          rang: "\u27e9",
          Rang: "\u27eb",
          rangd: "\u2992",
          range: "\u29a5",
          rangle: "\u27e9",
          raquo: "\xbb",
          rarr: "\u2192",
          rArr: "\u21d2",
          Rarr: "\u21a0",
          rarrap: "\u2975",
          rarrb: "\u21e5",
          rarrbfs: "\u2920",
          rarrc: "\u2933",
          rarrfs: "\u291e",
          rarrhk: "\u21aa",
          rarrlp: "\u21ac",
          rarrpl: "\u2945",
          rarrsim: "\u2974",
          rarrtl: "\u21a3",
          Rarrtl: "\u2916",
          rarrw: "\u219d",
          ratail: "\u291a",
          rAtail: "\u291c",
          ratio: "\u2236",
          rationals: "\u211a",
          rbarr: "\u290d",
          rBarr: "\u290f",
          RBarr: "\u2910",
          rbbrk: "\u2773",
          rbrace: "}",
          rbrack: "]",
          rbrke: "\u298c",
          rbrksld: "\u298e",
          rbrkslu: "\u2990",
          rcaron: "\u0159",
          Rcaron: "\u0158",
          rcedil: "\u0157",
          Rcedil: "\u0156",
          rceil: "\u2309",
          rcub: "}",
          rcy: "\u0440",
          Rcy: "\u0420",
          rdca: "\u2937",
          rdldhar: "\u2969",
          rdquo: "\u201d",
          rdquor: "\u201d",
          rdsh: "\u21b3",
          Re: "\u211c",
          real: "\u211c",
          realine: "\u211b",
          realpart: "\u211c",
          reals: "\u211d",
          rect: "\u25ad",
          reg: "\xae",
          REG: "\xae",
          ReverseElement: "\u220b",
          ReverseEquilibrium: "\u21cb",
          ReverseUpEquilibrium: "\u296f",
          rfisht: "\u297d",
          rfloor: "\u230b",
          rfr: "\ud835\udd2f",
          Rfr: "\u211c",
          rHar: "\u2964",
          rhard: "\u21c1",
          rharu: "\u21c0",
          rharul: "\u296c",
          rho: "\u03c1",
          Rho: "\u03a1",
          rhov: "\u03f1",
          RightAngleBracket: "\u27e9",
          rightarrow: "\u2192",
          Rightarrow: "\u21d2",
          RightArrow: "\u2192",
          RightArrowBar: "\u21e5",
          RightArrowLeftArrow: "\u21c4",
          rightarrowtail: "\u21a3",
          RightCeiling: "\u2309",
          RightDoubleBracket: "\u27e7",
          RightDownTeeVector: "\u295d",
          RightDownVector: "\u21c2",
          RightDownVectorBar: "\u2955",
          RightFloor: "\u230b",
          rightharpoondown: "\u21c1",
          rightharpoonup: "\u21c0",
          rightleftarrows: "\u21c4",
          rightleftharpoons: "\u21cc",
          rightrightarrows: "\u21c9",
          rightsquigarrow: "\u219d",
          RightTee: "\u22a2",
          RightTeeArrow: "\u21a6",
          RightTeeVector: "\u295b",
          rightthreetimes: "\u22cc",
          RightTriangle: "\u22b3",
          RightTriangleBar: "\u29d0",
          RightTriangleEqual: "\u22b5",
          RightUpDownVector: "\u294f",
          RightUpTeeVector: "\u295c",
          RightUpVector: "\u21be",
          RightUpVectorBar: "\u2954",
          RightVector: "\u21c0",
          RightVectorBar: "\u2953",
          ring: "\u02da",
          risingdotseq: "\u2253",
          rlarr: "\u21c4",
          rlhar: "\u21cc",
          rlm: "\u200f",
          rmoust: "\u23b1",
          rmoustache: "\u23b1",
          rnmid: "\u2aee",
          roang: "\u27ed",
          roarr: "\u21fe",
          robrk: "\u27e7",
          ropar: "\u2986",
          ropf: "\ud835\udd63",
          Ropf: "\u211d",
          roplus: "\u2a2e",
          rotimes: "\u2a35",
          RoundImplies: "\u2970",
          rpar: ")",
          rpargt: "\u2994",
          rppolint: "\u2a12",
          rrarr: "\u21c9",
          Rrightarrow: "\u21db",
          rsaquo: "\u203a",
          rscr: "\ud835\udcc7",
          Rscr: "\u211b",
          rsh: "\u21b1",
          Rsh: "\u21b1",
          rsqb: "]",
          rsquo: "\u2019",
          rsquor: "\u2019",
          rthree: "\u22cc",
          rtimes: "\u22ca",
          rtri: "\u25b9",
          rtrie: "\u22b5",
          rtrif: "\u25b8",
          rtriltri: "\u29ce",
          RuleDelayed: "\u29f4",
          ruluhar: "\u2968",
          rx: "\u211e",
          sacute: "\u015b",
          Sacute: "\u015a",
          sbquo: "\u201a",
          sc: "\u227b",
          Sc: "\u2abc",
          scap: "\u2ab8",
          scaron: "\u0161",
          Scaron: "\u0160",
          sccue: "\u227d",
          sce: "\u2ab0",
          scE: "\u2ab4",
          scedil: "\u015f",
          Scedil: "\u015e",
          scirc: "\u015d",
          Scirc: "\u015c",
          scnap: "\u2aba",
          scnE: "\u2ab6",
          scnsim: "\u22e9",
          scpolint: "\u2a13",
          scsim: "\u227f",
          scy: "\u0441",
          Scy: "\u0421",
          sdot: "\u22c5",
          sdotb: "\u22a1",
          sdote: "\u2a66",
          searhk: "\u2925",
          searr: "\u2198",
          seArr: "\u21d8",
          searrow: "\u2198",
          sect: "\xa7",
          semi: ";",
          seswar: "\u2929",
          setminus: "\u2216",
          setmn: "\u2216",
          sext: "\u2736",
          sfr: "\ud835\udd30",
          Sfr: "\ud835\udd16",
          sfrown: "\u2322",
          sharp: "\u266f",
          shchcy: "\u0449",
          SHCHcy: "\u0429",
          shcy: "\u0448",
          SHcy: "\u0428",
          ShortDownArrow: "\u2193",
          ShortLeftArrow: "\u2190",
          shortmid: "\u2223",
          shortparallel: "\u2225",
          ShortRightArrow: "\u2192",
          ShortUpArrow: "\u2191",
          shy: "\xad",
          sigma: "\u03c3",
          Sigma: "\u03a3",
          sigmaf: "\u03c2",
          sigmav: "\u03c2",
          sim: "\u223c",
          simdot: "\u2a6a",
          sime: "\u2243",
          simeq: "\u2243",
          simg: "\u2a9e",
          simgE: "\u2aa0",
          siml: "\u2a9d",
          simlE: "\u2a9f",
          simne: "\u2246",
          simplus: "\u2a24",
          simrarr: "\u2972",
          slarr: "\u2190",
          SmallCircle: "\u2218",
          smallsetminus: "\u2216",
          smashp: "\u2a33",
          smeparsl: "\u29e4",
          smid: "\u2223",
          smile: "\u2323",
          smt: "\u2aaa",
          smte: "\u2aac",
          smtes: "\u2aac\ufe00",
          softcy: "\u044c",
          SOFTcy: "\u042c",
          sol: "/",
          solb: "\u29c4",
          solbar: "\u233f",
          sopf: "\ud835\udd64",
          Sopf: "\ud835\udd4a",
          spades: "\u2660",
          spadesuit: "\u2660",
          spar: "\u2225",
          sqcap: "\u2293",
          sqcaps: "\u2293\ufe00",
          sqcup: "\u2294",
          sqcups: "\u2294\ufe00",
          Sqrt: "\u221a",
          sqsub: "\u228f",
          sqsube: "\u2291",
          sqsubset: "\u228f",
          sqsubseteq: "\u2291",
          sqsup: "\u2290",
          sqsupe: "\u2292",
          sqsupset: "\u2290",
          sqsupseteq: "\u2292",
          squ: "\u25a1",
          square: "\u25a1",
          Square: "\u25a1",
          SquareIntersection: "\u2293",
          SquareSubset: "\u228f",
          SquareSubsetEqual: "\u2291",
          SquareSuperset: "\u2290",
          SquareSupersetEqual: "\u2292",
          SquareUnion: "\u2294",
          squarf: "\u25aa",
          squf: "\u25aa",
          srarr: "\u2192",
          sscr: "\ud835\udcc8",
          Sscr: "\ud835\udcae",
          ssetmn: "\u2216",
          ssmile: "\u2323",
          sstarf: "\u22c6",
          star: "\u2606",
          Star: "\u22c6",
          starf: "\u2605",
          straightepsilon: "\u03f5",
          straightphi: "\u03d5",
          strns: "\xaf",
          sub: "\u2282",
          Sub: "\u22d0",
          subdot: "\u2abd",
          sube: "\u2286",
          subE: "\u2ac5",
          subedot: "\u2ac3",
          submult: "\u2ac1",
          subne: "\u228a",
          subnE: "\u2acb",
          subplus: "\u2abf",
          subrarr: "\u2979",
          subset: "\u2282",
          Subset: "\u22d0",
          subseteq: "\u2286",
          subseteqq: "\u2ac5",
          SubsetEqual: "\u2286",
          subsetneq: "\u228a",
          subsetneqq: "\u2acb",
          subsim: "\u2ac7",
          subsub: "\u2ad5",
          subsup: "\u2ad3",
          succ: "\u227b",
          succapprox: "\u2ab8",
          succcurlyeq: "\u227d",
          Succeeds: "\u227b",
          SucceedsEqual: "\u2ab0",
          SucceedsSlantEqual: "\u227d",
          SucceedsTilde: "\u227f",
          succeq: "\u2ab0",
          succnapprox: "\u2aba",
          succneqq: "\u2ab6",
          succnsim: "\u22e9",
          succsim: "\u227f",
          SuchThat: "\u220b",
          sum: "\u2211",
          Sum: "\u2211",
          sung: "\u266a",
          sup: "\u2283",
          Sup: "\u22d1",
          sup1: "\xb9",
          sup2: "\xb2",
          sup3: "\xb3",
          supdot: "\u2abe",
          supdsub: "\u2ad8",
          supe: "\u2287",
          supE: "\u2ac6",
          supedot: "\u2ac4",
          Superset: "\u2283",
          SupersetEqual: "\u2287",
          suphsol: "\u27c9",
          suphsub: "\u2ad7",
          suplarr: "\u297b",
          supmult: "\u2ac2",
          supne: "\u228b",
          supnE: "\u2acc",
          supplus: "\u2ac0",
          supset: "\u2283",
          Supset: "\u22d1",
          supseteq: "\u2287",
          supseteqq: "\u2ac6",
          supsetneq: "\u228b",
          supsetneqq: "\u2acc",
          supsim: "\u2ac8",
          supsub: "\u2ad4",
          supsup: "\u2ad6",
          swarhk: "\u2926",
          swarr: "\u2199",
          swArr: "\u21d9",
          swarrow: "\u2199",
          swnwar: "\u292a",
          szlig: "\xdf",
          Tab: "\t",
          target: "\u2316",
          tau: "\u03c4",
          Tau: "\u03a4",
          tbrk: "\u23b4",
          tcaron: "\u0165",
          Tcaron: "\u0164",
          tcedil: "\u0163",
          Tcedil: "\u0162",
          tcy: "\u0442",
          Tcy: "\u0422",
          tdot: "\u20db",
          telrec: "\u2315",
          tfr: "\ud835\udd31",
          Tfr: "\ud835\udd17",
          there4: "\u2234",
          therefore: "\u2234",
          Therefore: "\u2234",
          theta: "\u03b8",
          Theta: "\u0398",
          thetasym: "\u03d1",
          thetav: "\u03d1",
          thickapprox: "\u2248",
          thicksim: "\u223c",
          ThickSpace: "\u205f\u200a",
          thinsp: "\u2009",
          ThinSpace: "\u2009",
          thkap: "\u2248",
          thksim: "\u223c",
          thorn: "\xfe",
          THORN: "\xde",
          tilde: "\u02dc",
          Tilde: "\u223c",
          TildeEqual: "\u2243",
          TildeFullEqual: "\u2245",
          TildeTilde: "\u2248",
          times: "\xd7",
          timesb: "\u22a0",
          timesbar: "\u2a31",
          timesd: "\u2a30",
          tint: "\u222d",
          toea: "\u2928",
          top: "\u22a4",
          topbot: "\u2336",
          topcir: "\u2af1",
          topf: "\ud835\udd65",
          Topf: "\ud835\udd4b",
          topfork: "\u2ada",
          tosa: "\u2929",
          tprime: "\u2034",
          trade: "\u2122",
          TRADE: "\u2122",
          triangle: "\u25b5",
          triangledown: "\u25bf",
          triangleleft: "\u25c3",
          trianglelefteq: "\u22b4",
          triangleq: "\u225c",
          triangleright: "\u25b9",
          trianglerighteq: "\u22b5",
          tridot: "\u25ec",
          trie: "\u225c",
          triminus: "\u2a3a",
          TripleDot: "\u20db",
          triplus: "\u2a39",
          trisb: "\u29cd",
          tritime: "\u2a3b",
          trpezium: "\u23e2",
          tscr: "\ud835\udcc9",
          Tscr: "\ud835\udcaf",
          tscy: "\u0446",
          TScy: "\u0426",
          tshcy: "\u045b",
          TSHcy: "\u040b",
          tstrok: "\u0167",
          Tstrok: "\u0166",
          twixt: "\u226c",
          twoheadleftarrow: "\u219e",
          twoheadrightarrow: "\u21a0",
          uacute: "\xfa",
          Uacute: "\xda",
          uarr: "\u2191",
          uArr: "\u21d1",
          Uarr: "\u219f",
          Uarrocir: "\u2949",
          ubrcy: "\u045e",
          Ubrcy: "\u040e",
          ubreve: "\u016d",
          Ubreve: "\u016c",
          ucirc: "\xfb",
          Ucirc: "\xdb",
          ucy: "\u0443",
          Ucy: "\u0423",
          udarr: "\u21c5",
          udblac: "\u0171",
          Udblac: "\u0170",
          udhar: "\u296e",
          ufisht: "\u297e",
          ufr: "\ud835\udd32",
          Ufr: "\ud835\udd18",
          ugrave: "\xf9",
          Ugrave: "\xd9",
          uHar: "\u2963",
          uharl: "\u21bf",
          uharr: "\u21be",
          uhblk: "\u2580",
          ulcorn: "\u231c",
          ulcorner: "\u231c",
          ulcrop: "\u230f",
          ultri: "\u25f8",
          umacr: "\u016b",
          Umacr: "\u016a",
          uml: "\xa8",
          UnderBar: "_",
          UnderBrace: "\u23df",
          UnderBracket: "\u23b5",
          UnderParenthesis: "\u23dd",
          Union: "\u22c3",
          UnionPlus: "\u228e",
          uogon: "\u0173",
          Uogon: "\u0172",
          uopf: "\ud835\udd66",
          Uopf: "\ud835\udd4c",
          uparrow: "\u2191",
          Uparrow: "\u21d1",
          UpArrow: "\u2191",
          UpArrowBar: "\u2912",
          UpArrowDownArrow: "\u21c5",
          updownarrow: "\u2195",
          Updownarrow: "\u21d5",
          UpDownArrow: "\u2195",
          UpEquilibrium: "\u296e",
          upharpoonleft: "\u21bf",
          upharpoonright: "\u21be",
          uplus: "\u228e",
          UpperLeftArrow: "\u2196",
          UpperRightArrow: "\u2197",
          upsi: "\u03c5",
          Upsi: "\u03d2",
          upsih: "\u03d2",
          upsilon: "\u03c5",
          Upsilon: "\u03a5",
          UpTee: "\u22a5",
          UpTeeArrow: "\u21a5",
          upuparrows: "\u21c8",
          urcorn: "\u231d",
          urcorner: "\u231d",
          urcrop: "\u230e",
          uring: "\u016f",
          Uring: "\u016e",
          urtri: "\u25f9",
          uscr: "\ud835\udcca",
          Uscr: "\ud835\udcb0",
          utdot: "\u22f0",
          utilde: "\u0169",
          Utilde: "\u0168",
          utri: "\u25b5",
          utrif: "\u25b4",
          uuarr: "\u21c8",
          uuml: "\xfc",
          Uuml: "\xdc",
          uwangle: "\u29a7",
          vangrt: "\u299c",
          varepsilon: "\u03f5",
          varkappa: "\u03f0",
          varnothing: "\u2205",
          varphi: "\u03d5",
          varpi: "\u03d6",
          varpropto: "\u221d",
          varr: "\u2195",
          vArr: "\u21d5",
          varrho: "\u03f1",
          varsigma: "\u03c2",
          varsubsetneq: "\u228a\ufe00",
          varsubsetneqq: "\u2acb\ufe00",
          varsupsetneq: "\u228b\ufe00",
          varsupsetneqq: "\u2acc\ufe00",
          vartheta: "\u03d1",
          vartriangleleft: "\u22b2",
          vartriangleright: "\u22b3",
          vBar: "\u2ae8",
          Vbar: "\u2aeb",
          vBarv: "\u2ae9",
          vcy: "\u0432",
          Vcy: "\u0412",
          vdash: "\u22a2",
          vDash: "\u22a8",
          Vdash: "\u22a9",
          VDash: "\u22ab",
          Vdashl: "\u2ae6",
          vee: "\u2228",
          Vee: "\u22c1",
          veebar: "\u22bb",
          veeeq: "\u225a",
          vellip: "\u22ee",
          verbar: "|",
          Verbar: "\u2016",
          vert: "|",
          Vert: "\u2016",
          VerticalBar: "\u2223",
          VerticalLine: "|",
          VerticalSeparator: "\u2758",
          VerticalTilde: "\u2240",
          VeryThinSpace: "\u200a",
          vfr: "\ud835\udd33",
          Vfr: "\ud835\udd19",
          vltri: "\u22b2",
          vnsub: "\u2282\u20d2",
          vnsup: "\u2283\u20d2",
          vopf: "\ud835\udd67",
          Vopf: "\ud835\udd4d",
          vprop: "\u221d",
          vrtri: "\u22b3",
          vscr: "\ud835\udccb",
          Vscr: "\ud835\udcb1",
          vsubne: "\u228a\ufe00",
          vsubnE: "\u2acb\ufe00",
          vsupne: "\u228b\ufe00",
          vsupnE: "\u2acc\ufe00",
          Vvdash: "\u22aa",
          vzigzag: "\u299a",
          wcirc: "\u0175",
          Wcirc: "\u0174",
          wedbar: "\u2a5f",
          wedge: "\u2227",
          Wedge: "\u22c0",
          wedgeq: "\u2259",
          weierp: "\u2118",
          wfr: "\ud835\udd34",
          Wfr: "\ud835\udd1a",
          wopf: "\ud835\udd68",
          Wopf: "\ud835\udd4e",
          wp: "\u2118",
          wr: "\u2240",
          wreath: "\u2240",
          wscr: "\ud835\udccc",
          Wscr: "\ud835\udcb2",
          xcap: "\u22c2",
          xcirc: "\u25ef",
          xcup: "\u22c3",
          xdtri: "\u25bd",
          xfr: "\ud835\udd35",
          Xfr: "\ud835\udd1b",
          xharr: "\u27f7",
          xhArr: "\u27fa",
          xi: "\u03be",
          Xi: "\u039e",
          xlarr: "\u27f5",
          xlArr: "\u27f8",
          xmap: "\u27fc",
          xnis: "\u22fb",
          xodot: "\u2a00",
          xopf: "\ud835\udd69",
          Xopf: "\ud835\udd4f",
          xoplus: "\u2a01",
          xotime: "\u2a02",
          xrarr: "\u27f6",
          xrArr: "\u27f9",
          xscr: "\ud835\udccd",
          Xscr: "\ud835\udcb3",
          xsqcup: "\u2a06",
          xuplus: "\u2a04",
          xutri: "\u25b3",
          xvee: "\u22c1",
          xwedge: "\u22c0",
          yacute: "\xfd",
          Yacute: "\xdd",
          yacy: "\u044f",
          YAcy: "\u042f",
          ycirc: "\u0177",
          Ycirc: "\u0176",
          ycy: "\u044b",
          Ycy: "\u042b",
          yen: "\xa5",
          yfr: "\ud835\udd36",
          Yfr: "\ud835\udd1c",
          yicy: "\u0457",
          YIcy: "\u0407",
          yopf: "\ud835\udd6a",
          Yopf: "\ud835\udd50",
          yscr: "\ud835\udcce",
          Yscr: "\ud835\udcb4",
          yucy: "\u044e",
          YUcy: "\u042e",
          yuml: "\xff",
          Yuml: "\u0178",
          zacute: "\u017a",
          Zacute: "\u0179",
          zcaron: "\u017e",
          Zcaron: "\u017d",
          zcy: "\u0437",
          Zcy: "\u0417",
          zdot: "\u017c",
          Zdot: "\u017b",
          zeetrf: "\u2128",
          ZeroWidthSpace: "\u200b",
          zeta: "\u03b6",
          Zeta: "\u0396",
          zfr: "\ud835\udd37",
          Zfr: "\u2128",
          zhcy: "\u0436",
          ZHcy: "\u0416",
          zigrarr: "\u21dd",
          zopf: "\ud835\udd6b",
          Zopf: "\u2124",
          zscr: "\ud835\udccf",
          Zscr: "\ud835\udcb5",
          zwj: "\u200d",
          zwnj: "\u200c",
        },
        v = {
          aacute: "\xe1",
          Aacute: "\xc1",
          acirc: "\xe2",
          Acirc: "\xc2",
          acute: "\xb4",
          aelig: "\xe6",
          AElig: "\xc6",
          agrave: "\xe0",
          Agrave: "\xc0",
          amp: "&",
          AMP: "&",
          aring: "\xe5",
          Aring: "\xc5",
          atilde: "\xe3",
          Atilde: "\xc3",
          auml: "\xe4",
          Auml: "\xc4",
          brvbar: "\xa6",
          ccedil: "\xe7",
          Ccedil: "\xc7",
          cedil: "\xb8",
          cent: "\xa2",
          copy: "\xa9",
          COPY: "\xa9",
          curren: "\xa4",
          deg: "\xb0",
          divide: "\xf7",
          eacute: "\xe9",
          Eacute: "\xc9",
          ecirc: "\xea",
          Ecirc: "\xca",
          egrave: "\xe8",
          Egrave: "\xc8",
          eth: "\xf0",
          ETH: "\xd0",
          euml: "\xeb",
          Euml: "\xcb",
          frac12: "\xbd",
          frac14: "\xbc",
          frac34: "\xbe",
          gt: ">",
          GT: ">",
          iacute: "\xed",
          Iacute: "\xcd",
          icirc: "\xee",
          Icirc: "\xce",
          iexcl: "\xa1",
          igrave: "\xec",
          Igrave: "\xcc",
          iquest: "\xbf",
          iuml: "\xef",
          Iuml: "\xcf",
          laquo: "\xab",
          lt: "<",
          LT: "<",
          macr: "\xaf",
          micro: "\xb5",
          middot: "\xb7",
          nbsp: "\xa0",
          not: "\xac",
          ntilde: "\xf1",
          Ntilde: "\xd1",
          oacute: "\xf3",
          Oacute: "\xd3",
          ocirc: "\xf4",
          Ocirc: "\xd4",
          ograve: "\xf2",
          Ograve: "\xd2",
          ordf: "\xaa",
          ordm: "\xba",
          oslash: "\xf8",
          Oslash: "\xd8",
          otilde: "\xf5",
          Otilde: "\xd5",
          ouml: "\xf6",
          Ouml: "\xd6",
          para: "\xb6",
          plusmn: "\xb1",
          pound: "\xa3",
          quot: '"',
          QUOT: '"',
          raquo: "\xbb",
          reg: "\xae",
          REG: "\xae",
          sect: "\xa7",
          shy: "\xad",
          sup1: "\xb9",
          sup2: "\xb2",
          sup3: "\xb3",
          szlig: "\xdf",
          thorn: "\xfe",
          THORN: "\xde",
          times: "\xd7",
          uacute: "\xfa",
          Uacute: "\xda",
          ucirc: "\xfb",
          Ucirc: "\xdb",
          ugrave: "\xf9",
          Ugrave: "\xd9",
          uml: "\xa8",
          uuml: "\xfc",
          Uuml: "\xdc",
          yacute: "\xfd",
          Yacute: "\xdd",
          yen: "\xa5",
          yuml: "\xff",
        },
        y = {
          0: "\ufffd",
          128: "\u20ac",
          130: "\u201a",
          131: "\u0192",
          132: "\u201e",
          133: "\u2026",
          134: "\u2020",
          135: "\u2021",
          136: "\u02c6",
          137: "\u2030",
          138: "\u0160",
          139: "\u2039",
          140: "\u0152",
          142: "\u017d",
          145: "\u2018",
          146: "\u2019",
          147: "\u201c",
          148: "\u201d",
          149: "\u2022",
          150: "\u2013",
          151: "\u2014",
          152: "\u02dc",
          153: "\u2122",
          154: "\u0161",
          155: "\u203a",
          156: "\u0153",
          158: "\u017e",
          159: "\u0178",
        },
        w = [
          1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
          23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133,
          134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
          148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976,
          64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986,
          64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996,
          64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006,
          65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143,
          327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287,
          589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431,
          851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575,
          1114110, 1114111,
        ],
        A = String.fromCharCode,
        q = {}.hasOwnProperty,
        E = function (e, r) {
          return q.call(e, r);
        },
        D = function (e, r) {
          if (!e) return r;
          var t,
            n = {};
          for (t in r) n[t] = E(e, t) ? e[t] : r[t];
          return n;
        },
        x = function (e, r) {
          var t = "";
          return (e >= 55296 && e <= 57343) || e > 1114111
            ? (r &&
                C("character reference outside the permissible Unicode range"),
              "\ufffd")
            : E(y, e)
            ? (r && C("disallowed character reference"), y[e])
            : (r &&
                (function (e, r) {
                  for (var t = -1, n = e.length; ++t < n; )
                    if (e[t] == r) return !0;
                  return !1;
                })(w, e) &&
                C("disallowed character reference"),
              e > 65535 &&
                ((t += A((((e -= 65536) >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += A(e)));
        },
        T = function (e) {
          return "&#x" + e.toString(16).toUpperCase() + ";";
        },
        N = function (e) {
          return "&#" + e + ";";
        },
        C = function (e) {
          throw Error("Parse error: " + e);
        },
        L = function (e, r) {
          (r = D(r, L.options)).strict &&
            h.test(e) &&
            C("forbidden code point");
          var t = r.encodeEverything,
            n = r.useNamedReferences,
            a = r.allowUnsafeSymbols,
            o = r.decimal ? N : T,
            i = function (e) {
              return o(e.charCodeAt(0));
            };
          return (
            t
              ? ((e = e.replace(u, function (e) {
                  return n && E(p, e) ? "&" + p[e] + ";" : i(e);
                })),
                n &&
                  (e = e
                    .replace(/&gt;\u20D2/g, "&nvgt;")
                    .replace(/&lt;\u20D2/g, "&nvlt;")
                    .replace(/&#x66;&#x6A;/g, "&fjlig;")),
                n &&
                  (e = e.replace(l, function (e) {
                    return "&" + p[e] + ";";
                  })))
              : n
              ? (a ||
                  (e = e.replace(d, function (e) {
                    return "&" + p[e] + ";";
                  })),
                (e = (e = e
                  .replace(/&gt;\u20D2/g, "&nvgt;")
                  .replace(/&lt;\u20D2/g, "&nvlt;")).replace(l, function (e) {
                  return "&" + p[e] + ";";
                })))
              : a || (e = e.replace(d, i)),
            e
              .replace(s, function (e) {
                var r = e.charCodeAt(0),
                  t = e.charCodeAt(1);
                return o(1024 * (r - 55296) + t - 56320 + 65536);
              })
              .replace(c, i)
          );
        };
      L.options = {
        allowUnsafeSymbols: !1,
        encodeEverything: !1,
        strict: !1,
        useNamedReferences: !1,
        decimal: !1,
      };
      var k = function (e, r) {
        var t = (r = D(r, k.options)).strict;
        return (
          t && g.test(e) && C("malformed character reference"),
          e.replace(m, function (e, n, a, o, i, s, u, c, l) {
            var p, d, f, g, h, m;
            return n
              ? b[(h = n)]
              : a
              ? ((h = a),
                (m = o) && r.isAttributeValue
                  ? (t &&
                      "=" == m &&
                      C("`&` did not start a character reference"),
                    e)
                  : (t &&
                      C(
                        "named character reference was not terminated by a semicolon"
                      ),
                    v[h] + (m || "")))
              : i
              ? ((f = i),
                (d = s),
                t &&
                  !d &&
                  C("character reference was not terminated by a semicolon"),
                (p = parseInt(f, 10)),
                x(p, t))
              : u
              ? ((g = u),
                (d = c),
                t &&
                  !d &&
                  C("character reference was not terminated by a semicolon"),
                (p = parseInt(g, 16)),
                x(p, t))
              : (t &&
                  C(
                    "named character reference was not terminated by a semicolon"
                  ),
                e);
          })
        );
      };
      k.options = { isAttributeValue: !1, strict: !1 };
      var S = {
        version: "1.2.0",
        encode: L,
        decode: k,
        escape: function (e) {
          return e.replace(d, function (e) {
            return f[e];
          });
        },
        unescape: k,
      };
      if (n && !n.nodeType)
        if (a) a.exports = S;
        else for (var F in S) E(S, F) && (n[F] = S[F]);
      else t.he = S;
    })(o);
  })(s, s.exports);
  var u,
    c = s.exports,
    l = i(c),
    p = (function () {
      function e(e, r) {
        void 0 === e && (e = null),
          (this.parentNode = e),
          (this.childNodes = []),
          Object.defineProperty(this, "range", {
            enumerable: !1,
            writable: !0,
            configurable: !0,
            value: null != r ? r : [-1, -1],
          });
      }
      return (
        (e.prototype.remove = function () {
          var e = this;
          if (this.parentNode) {
            var r = this.parentNode.childNodes;
            (this.parentNode.childNodes = r.filter(function (r) {
              return e !== r;
            })),
              (this.parentNode = null);
          }
          return this;
        }),
        Object.defineProperty(e.prototype, "innerText", {
          get: function () {
            return this.rawText;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "textContent", {
          get: function () {
            return c.decode(this.rawText);
          },
          set: function (e) {
            this.rawText = c.encode(e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        e
      );
    })();
  !(function (e) {
    (e[(e.ELEMENT_NODE = 1)] = "ELEMENT_NODE"),
      (e[(e.TEXT_NODE = 3)] = "TEXT_NODE"),
      (e[(e.COMMENT_NODE = 8)] = "COMMENT_NODE");
  })(u || (u = {}));
  var d,
    f = u,
    g = (function (e) {
      function r(r, t, n, a) {
        void 0 === t && (t = null), void 0 === a && (a = "!--");
        var o = e.call(this, t, n) || this;
        return (
          (o.rawText = r), (o.rawTagName = a), (o.nodeType = f.COMMENT_NODE), o
        );
      }
      return (
        t(r, e),
        (r.prototype.clone = function () {
          return new r(this.rawText, null, void 0, this.rawTagName);
        }),
        Object.defineProperty(r.prototype, "text", {
          get: function () {
            return this.rawText;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.toString = function () {
          return "\x3c!--".concat(this.rawText, "--\x3e");
        }),
        r
      );
    })(p);
  !(function (e) {
    (e.Root = "root"),
      (e.Text = "text"),
      (e.Directive = "directive"),
      (e.Comment = "comment"),
      (e.Script = "script"),
      (e.Style = "style"),
      (e.Tag = "tag"),
      (e.CDATA = "cdata"),
      (e.Doctype = "doctype");
  })(d || (d = {}));
  const h = d.Root,
    m = d.Text,
    b = d.Directive,
    v = d.Comment,
    y = d.Script,
    w = d.Style,
    A = d.Tag,
    q = d.CDATA,
    E = d.Doctype;
  function D(e) {
    return (r = e).type === d.Tag || r.type === d.Script || r.type === d.Style;
    var r;
  }
  function x(e) {
    return e.type === d.CDATA;
  }
  function T(e) {
    return e.type === d.Text;
  }
  function N(e) {
    return e.type === d.Comment;
  }
  function C(e) {
    return Object.prototype.hasOwnProperty.call(e, "children");
  }
  const L = /["&'<>$\x80-\uFFFF]/g,
    k = new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"],
    ]),
    S =
      null != String.prototype.codePointAt
        ? (e, r) => e.codePointAt(r)
        : (e, r) =>
            55296 == (64512 & e.charCodeAt(r))
              ? 1024 * (e.charCodeAt(r) - 55296) +
                e.charCodeAt(r + 1) -
                56320 +
                65536
              : e.charCodeAt(r);
  function F(e) {
    let r,
      t = "",
      n = 0;
    for (; null !== (r = L.exec(e)); ) {
      const a = r.index,
        o = e.charCodeAt(a),
        i = k.get(o);
      void 0 !== i
        ? ((t += e.substring(n, a) + i), (n = a + 1))
        : ((t += `${e.substring(n, a)}&#x${S(e, a).toString(16)};`),
          (n = L.lastIndex += Number(55296 == (64512 & o))));
    }
    return t + e.substr(n);
  }
  function O(e, r) {
    return function (t) {
      let n,
        a = 0,
        o = "";
      for (; (n = e.exec(t)); )
        a !== n.index && (o += t.substring(a, n.index)),
          (o += r.get(n[0].charCodeAt(0))),
          (a = n.index + 1);
      return o + t.substring(a);
    };
  }
  const B = O(
      /["&\u00A0]/g,
      new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [160, "&nbsp;"],
      ])
    ),
    R = O(
      /[&<>\u00A0]/g,
      new Map([
        [38, "&amp;"],
        [60, "&lt;"],
        [62, "&gt;"],
        [160, "&nbsp;"],
      ])
    ),
    V = new Map(
      [
        "altGlyph",
        "altGlyphDef",
        "altGlyphItem",
        "animateColor",
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDistantLight",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "glyphRef",
        "linearGradient",
        "radialGradient",
        "textPath",
      ].map((e) => [e.toLowerCase(), e])
    ),
    U = new Map(
      [
        "definitionURL",
        "attributeName",
        "attributeType",
        "baseFrequency",
        "baseProfile",
        "calcMode",
        "clipPathUnits",
        "diffuseConstant",
        "edgeMode",
        "filterUnits",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "kernelMatrix",
        "kernelUnitLength",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "limitingConeAngle",
        "markerHeight",
        "markerUnits",
        "markerWidth",
        "maskContentUnits",
        "maskUnits",
        "numOctaves",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "refX",
        "refY",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "specularConstant",
        "specularExponent",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stitchTiles",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "textLength",
        "viewBox",
        "viewTarget",
        "xChannelSelector",
        "yChannelSelector",
        "zoomAndPan",
      ].map((e) => [e.toLowerCase(), e])
    ),
    P = new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript",
    ]);
  function I(e) {
    return e.replace(/"/g, "&quot;");
  }
  const H = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);
  function j(e, r = {}) {
    const t = "length" in e ? e : [e];
    let n = "";
    for (let a = 0; a < t.length; a++) n += G(t[a], r);
    return n;
  }
  function G(e, r) {
    switch (e.type) {
      case h:
        return j(e.children, r);
      case E:
      case b:
        return `<${e.data}>`;
      case v:
        return (function (e) {
          return `\x3c!--${e.data}--\x3e`;
        })(e);
      case q:
        return (function (e) {
          return `<![CDATA[${e.children[0].data}]]>`;
        })(e);
      case y:
      case w:
      case A:
        return (function (e, r) {
          var t;
          "foreign" === r.xmlMode &&
            ((e.name =
              null !== (t = V.get(e.name)) && void 0 !== t ? t : e.name),
            e.parent && M.has(e.parent.name) && (r = { ...r, xmlMode: !1 }));
          !r.xmlMode && _.has(e.name) && (r = { ...r, xmlMode: "foreign" });
          let n = `<${e.name}`;
          const a = (function (e, r) {
            var t;
            if (!e) return;
            const n =
              !1 ===
              (null !== (t = r.encodeEntities) && void 0 !== t
                ? t
                : r.decodeEntities)
                ? I
                : r.xmlMode || "utf8" !== r.encodeEntities
                ? F
                : B;
            return Object.keys(e)
              .map((t) => {
                var a, o;
                const i = null !== (a = e[t]) && void 0 !== a ? a : "";
                return (
                  "foreign" === r.xmlMode &&
                    (t = null !== (o = U.get(t)) && void 0 !== o ? o : t),
                  r.emptyAttrs || r.xmlMode || "" !== i ? `${t}="${n(i)}"` : t
                );
              })
              .join(" ");
          })(e.attribs, r);
          a && (n += ` ${a}`);
          0 === e.children.length &&
          (r.xmlMode
            ? !1 !== r.selfClosingTags
            : r.selfClosingTags && H.has(e.name))
            ? (r.xmlMode || (n += " "), (n += "/>"))
            : ((n += ">"),
              e.children.length > 0 && (n += j(e.children, r)),
              (!r.xmlMode && H.has(e.name)) || (n += `</${e.name}>`));
          return n;
        })(e, r);
      case m:
        return (function (e, r) {
          var t;
          let n = e.data || "";
          !1 ===
            (null !== (t = r.encodeEntities) && void 0 !== t
              ? t
              : r.decodeEntities) ||
            (!r.xmlMode && e.parent && P.has(e.parent.name)) ||
            (n = r.xmlMode || "utf8" !== r.encodeEntities ? F(n) : R(n));
          return n;
        })(e, r);
    }
  }
  const M = new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title",
    ]),
    _ = new Set(["svg", "math"]);
  function z(e, r) {
    return j(e, r);
  }
  function J(e) {
    return Array.isArray(e)
      ? e.map(J).join("")
      : C(e) && !N(e)
      ? J(e.children)
      : T(e)
      ? e.data
      : "";
  }
  function Y(e) {
    return C(e) ? e.children : [];
  }
  function W(e) {
    return e.parent || null;
  }
  function Z(e) {
    if (
      (e.prev && (e.prev.next = e.next),
      e.next && (e.next.prev = e.prev),
      e.parent)
    ) {
      const r = e.parent.children,
        t = r.lastIndexOf(e);
      t >= 0 && r.splice(t, 1);
    }
    (e.next = null), (e.prev = null), (e.parent = null);
  }
  function $(e, r, t = !0, n = 1 / 0) {
    return K(e, Array.isArray(r) ? r : [r], t, n);
  }
  function K(e, r, t, n) {
    const a = [],
      o = [r],
      i = [0];
    for (;;) {
      if (i[0] >= o[0].length) {
        if (1 === i.length) return a;
        o.shift(), i.shift();
        continue;
      }
      const r = o[0][i[0]++];
      if (e(r) && (a.push(r), --n <= 0)) return a;
      t &&
        C(r) &&
        r.children.length > 0 &&
        (i.unshift(0), o.unshift(r.children));
    }
  }
  function X(e, r, t = !0) {
    let n = null;
    for (let a = 0; a < r.length && !n; a++) {
      const o = r[a];
      D(o) &&
        (e(o)
          ? (n = o)
          : t && o.children.length > 0 && (n = X(e, o.children, !0)));
    }
    return n;
  }
  const Q = {
    tag_name: (e) =>
      "function" == typeof e
        ? (r) => D(r) && e(r.name)
        : "*" === e
        ? D
        : (r) => D(r) && r.name === e,
    tag_type: (e) =>
      "function" == typeof e ? (r) => e(r.type) : (r) => r.type === e,
    tag_contains: (e) =>
      "function" == typeof e
        ? (r) => T(r) && e(r.data)
        : (r) => T(r) && r.data === e,
  };
  function ee(e, r) {
    return "function" == typeof r
      ? (t) => D(t) && r(t.attribs[e])
      : (t) => D(t) && t.attribs[e] === r;
  }
  function re(e, r) {
    return (t) => e(t) || r(t);
  }
  function te(e) {
    const r = Object.keys(e).map((r) => {
      const t = e[r];
      return Object.prototype.hasOwnProperty.call(Q, r) ? Q[r](t) : ee(r, t);
    });
    return 0 === r.length ? null : r.reduce(re);
  }
  function ne(e, r, t = !0, n = 1 / 0) {
    return $(Q.tag_name(e), r, t, n);
  }
  var ae;
  function oe(e, r) {
    const t = [],
      n = [];
    if (e === r) return 0;
    let a = C(e) ? e : e.parent;
    for (; a; ) t.unshift(a), (a = a.parent);
    for (a = C(r) ? r : r.parent; a; ) n.unshift(a), (a = a.parent);
    const o = Math.min(t.length, n.length);
    let i = 0;
    for (; i < o && t[i] === n[i]; ) i++;
    if (0 === i) return ae.DISCONNECTED;
    const s = t[i - 1],
      u = s.children,
      c = t[i],
      l = n[i];
    return u.indexOf(c) > u.indexOf(l)
      ? s === r
        ? ae.FOLLOWING | ae.CONTAINED_BY
        : ae.FOLLOWING
      : s === e
      ? ae.PRECEDING | ae.CONTAINS
      : ae.PRECEDING;
  }
  !(function (e) {
    (e[(e.DISCONNECTED = 1)] = "DISCONNECTED"),
      (e[(e.PRECEDING = 2)] = "PRECEDING"),
      (e[(e.FOLLOWING = 4)] = "FOLLOWING"),
      (e[(e.CONTAINS = 8)] = "CONTAINS"),
      (e[(e.CONTAINED_BY = 16)] = "CONTAINED_BY");
  })(ae || (ae = {}));
  const ie = ["url", "type", "lang"],
    se = [
      "fileSize",
      "bitrate",
      "framerate",
      "samplingrate",
      "channels",
      "duration",
      "height",
      "width",
    ];
  function ue(e) {
    return ne("media:content", e).map((e) => {
      const { attribs: r } = e,
        t = { medium: r.medium, isDefault: !!r.isDefault };
      for (const n of ie) r[n] && (t[n] = r[n]);
      for (const n of se) r[n] && (t[n] = parseInt(r[n], 10));
      return r.expression && (t.expression = r.expression), t;
    });
  }
  function ce(e, r) {
    return ne(e, r, !0, 1)[0];
  }
  function le(e, r, t = !1) {
    return J(ne(e, r, t, 1)).trim();
  }
  function pe(e, r, t, n, a = !1) {
    const o = le(t, n, a);
    o && (e[r] = o);
  }
  function de(e) {
    return "rss" === e || "feed" === e || "rdf:RDF" === e;
  }
  var fe,
    ge,
    he = Object.freeze({
      __proto__: null,
      get DocumentPosition() {
        return ae;
      },
      append: function (e, r) {
        Z(r);
        const { parent: t } = e,
          n = e.next;
        if (((r.next = n), (r.prev = e), (e.next = r), (r.parent = t), n)) {
          if (((n.prev = r), t)) {
            const e = t.children;
            e.splice(e.lastIndexOf(n), 0, r);
          }
        } else t && t.children.push(r);
      },
      appendChild: function (e, r) {
        if ((Z(r), (r.next = null), (r.parent = e), e.children.push(r) > 1)) {
          const t = e.children[e.children.length - 2];
          (t.next = r), (r.prev = t);
        } else r.prev = null;
      },
      compareDocumentPosition: oe,
      existsOne: function e(r, t) {
        return t.some((t) => D(t) && (r(t) || e(r, t.children)));
      },
      filter: $,
      find: K,
      findAll: function (e, r) {
        const t = [],
          n = [r],
          a = [0];
        for (;;) {
          if (a[0] >= n[0].length) {
            if (1 === n.length) return t;
            n.shift(), a.shift();
            continue;
          }
          const r = n[0][a[0]++];
          D(r) &&
            (e(r) && t.push(r),
            r.children.length > 0 && (a.unshift(0), n.unshift(r.children)));
        }
      },
      findOne: X,
      findOneChild: function (e, r) {
        return r.find(e);
      },
      getAttributeValue: function (e, r) {
        var t;
        return null === (t = e.attribs) || void 0 === t ? void 0 : t[r];
      },
      getChildren: Y,
      getElementById: function (e, r, t = !0) {
        return Array.isArray(r) || (r = [r]), X(ee("id", e), r, t);
      },
      getElements: function (e, r, t, n = 1 / 0) {
        const a = te(e);
        return a ? $(a, r, t, n) : [];
      },
      getElementsByTagName: ne,
      getElementsByTagType: function (e, r, t = !0, n = 1 / 0) {
        return $(Q.tag_type(e), r, t, n);
      },
      getFeed: function (e) {
        const r = ce(de, e);
        return r
          ? "feed" === r.name
            ? (function (e) {
                var r;
                const t = e.children,
                  n = {
                    type: "atom",
                    items: ne("entry", t).map((e) => {
                      var r;
                      const { children: t } = e,
                        n = { media: ue(t) };
                      pe(n, "id", "id", t), pe(n, "title", "title", t);
                      const a =
                        null === (r = ce("link", t)) || void 0 === r
                          ? void 0
                          : r.attribs.href;
                      a && (n.link = a);
                      const o = le("summary", t) || le("content", t);
                      o && (n.description = o);
                      const i = le("updated", t);
                      return i && (n.pubDate = new Date(i)), n;
                    }),
                  };
                pe(n, "id", "id", t), pe(n, "title", "title", t);
                const a =
                  null === (r = ce("link", t)) || void 0 === r
                    ? void 0
                    : r.attribs.href;
                a && (n.link = a);
                pe(n, "description", "subtitle", t);
                const o = le("updated", t);
                o && (n.updated = new Date(o));
                return pe(n, "author", "email", t, !0), n;
              })(r)
            : (function (e) {
                var r, t;
                const n =
                    null !==
                      (t =
                        null === (r = ce("channel", e.children)) || void 0 === r
                          ? void 0
                          : r.children) && void 0 !== t
                      ? t
                      : [],
                  a = {
                    type: e.name.substr(0, 3),
                    id: "",
                    items: ne("item", e.children).map((e) => {
                      const { children: r } = e,
                        t = { media: ue(r) };
                      pe(t, "id", "guid", r),
                        pe(t, "title", "title", r),
                        pe(t, "link", "link", r),
                        pe(t, "description", "description", r);
                      const n = le("pubDate", r) || le("dc:date", r);
                      return n && (t.pubDate = new Date(n)), t;
                    }),
                  };
                pe(a, "title", "title", n),
                  pe(a, "link", "link", n),
                  pe(a, "description", "description", n);
                const o = le("lastBuildDate", n);
                o && (a.updated = new Date(o));
                return pe(a, "author", "managingEditor", n, !0), a;
              })(r)
          : null;
      },
      getInnerHTML: function (e, r) {
        return C(e) ? e.children.map((e) => z(e, r)).join("") : "";
      },
      getName: function (e) {
        return e.name;
      },
      getOuterHTML: z,
      getParent: W,
      getSiblings: function (e) {
        const r = W(e);
        if (null != r) return Y(r);
        const t = [e];
        let { prev: n, next: a } = e;
        for (; null != n; ) t.unshift(n), ({ prev: n } = n);
        for (; null != a; ) t.push(a), ({ next: a } = a);
        return t;
      },
      getText: function e(r) {
        return Array.isArray(r)
          ? r.map(e).join("")
          : D(r)
          ? "br" === r.name
            ? "\n"
            : e(r.children)
          : x(r)
          ? e(r.children)
          : T(r)
          ? r.data
          : "";
      },
      hasAttrib: function (e, r) {
        return (
          null != e.attribs &&
          Object.prototype.hasOwnProperty.call(e.attribs, r) &&
          null != e.attribs[r]
        );
      },
      hasChildren: C,
      innerText: function e(r) {
        return Array.isArray(r)
          ? r.map(e).join("")
          : C(r) && (r.type === d.Tag || x(r))
          ? e(r.children)
          : T(r)
          ? r.data
          : "";
      },
      isCDATA: x,
      isComment: N,
      isDocument: function (e) {
        return e.type === d.Root;
      },
      isTag: D,
      isText: T,
      nextElementSibling: function (e) {
        let { next: r } = e;
        for (; null !== r && !D(r); ) ({ next: r } = r);
        return r;
      },
      prepend: function (e, r) {
        Z(r);
        const { parent: t } = e;
        if (t) {
          const n = t.children;
          n.splice(n.indexOf(e), 0, r);
        }
        e.prev && (e.prev.next = r),
          (r.parent = t),
          (r.prev = e.prev),
          (r.next = e),
          (e.prev = r);
      },
      prependChild: function (e, r) {
        if (
          (Z(r), (r.parent = e), (r.prev = null), 1 !== e.children.unshift(r))
        ) {
          const t = e.children[1];
          (t.prev = r), (r.next = t);
        } else r.next = null;
      },
      prevElementSibling: function (e) {
        let { prev: r } = e;
        for (; null !== r && !D(r); ) ({ prev: r } = r);
        return r;
      },
      removeElement: Z,
      removeSubsets: function (e) {
        let r = e.length;
        for (; --r >= 0; ) {
          const t = e[r];
          if (r > 0 && e.lastIndexOf(t, r - 1) >= 0) e.splice(r, 1);
          else
            for (let n = t.parent; n; n = n.parent)
              if (e.includes(n)) {
                e.splice(r, 1);
                break;
              }
        }
        return e;
      },
      replaceElement: function (e, r) {
        const t = (r.prev = e.prev);
        t && (t.next = r);
        const n = (r.next = e.next);
        n && (n.prev = r);
        const a = (r.parent = e.parent);
        if (a) {
          const t = a.children;
          (t[t.lastIndexOf(e)] = r), (e.parent = null);
        }
      },
      testElement: function (e, r) {
        const t = te(e);
        return !t || t(r);
      },
      textContent: J,
      uniqueSort: function (e) {
        return (
          (e = e.filter((e, r, t) => !t.includes(e, r + 1))).sort((e, r) => {
            const t = oe(e, r);
            return t & ae.PRECEDING ? -1 : t & ae.FOLLOWING ? 1 : 0;
          }),
          e
        );
      },
    }),
    me = i({
      trueFunc: function () {
        return !0;
      },
      falseFunc: function () {
        return !1;
      },
    });
  !(function (e) {
    (e.Attribute = "attribute"),
      (e.Pseudo = "pseudo"),
      (e.PseudoElement = "pseudo-element"),
      (e.Tag = "tag"),
      (e.Universal = "universal"),
      (e.Adjacent = "adjacent"),
      (e.Child = "child"),
      (e.Descendant = "descendant"),
      (e.Parent = "parent"),
      (e.Sibling = "sibling"),
      (e.ColumnCombinator = "column-combinator");
  })(fe || (fe = {})),
    (function (e) {
      (e.Any = "any"),
        (e.Element = "element"),
        (e.End = "end"),
        (e.Equals = "equals"),
        (e.Exists = "exists"),
        (e.Hyphen = "hyphen"),
        (e.Not = "not"),
        (e.Start = "start");
    })(ge || (ge = {}));
  const be = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
    ve = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
    ye = new Map([
      [126, ge.Element],
      [94, ge.Start],
      [36, ge.End],
      [42, ge.Any],
      [33, ge.Not],
      [124, ge.Hyphen],
    ]),
    we = new Set([
      "has",
      "not",
      "matches",
      "is",
      "where",
      "host",
      "host-context",
    ]);
  const Ae = new Set(["contains", "icontains"]);
  function qe(e, r, t) {
    const n = parseInt(r, 16) - 65536;
    return n != n || t
      ? r
      : n < 0
      ? String.fromCharCode(n + 65536)
      : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
  }
  function Ee(e) {
    return e.replace(ve, qe);
  }
  function De(e) {
    return 39 === e || 34 === e;
  }
  function xe(e) {
    return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e;
  }
  function Te(e) {
    const r = [],
      t = Ne(r, `${e}`, 0);
    if (t < e.length) throw new Error(`Unmatched selector: ${e.slice(t)}`);
    return r;
  }
  function Ne(e, r, t) {
    let n = [];
    function a(e) {
      const n = r.slice(t + e).match(be);
      if (!n) throw new Error(`Expected name, found ${r.slice(t)}`);
      const [a] = n;
      return (t += e + a.length), Ee(a);
    }
    function o(e) {
      for (t += e; t < r.length && xe(r.charCodeAt(t)); ) t++;
    }
    function i() {
      const e = (t += 1);
      let n = 1;
      for (; n > 0 && t < r.length; t++)
        40 !== r.charCodeAt(t) || s(t)
          ? 41 !== r.charCodeAt(t) || s(t) || n--
          : n++;
      if (n) throw new Error("Parenthesis not matched");
      return Ee(r.slice(e, t - 1));
    }
    function s(e) {
      let t = 0;
      for (; 92 === r.charCodeAt(--e); ) t++;
      return !(1 & ~t);
    }
    function u() {
      if (
        n.length > 0 &&
        (function (e) {
          switch (e.type) {
            case fe.Adjacent:
            case fe.Child:
            case fe.Descendant:
            case fe.Parent:
            case fe.Sibling:
            case fe.ColumnCombinator:
              return !0;
            default:
              return !1;
          }
        })(n[n.length - 1])
      )
        throw new Error("Did not expect successive traversals.");
    }
    function c(e) {
      n.length > 0 && n[n.length - 1].type === fe.Descendant
        ? (n[n.length - 1].type = e)
        : (u(), n.push({ type: e }));
    }
    function l(e, r) {
      n.push({
        type: fe.Attribute,
        name: e,
        action: r,
        value: a(1),
        namespace: null,
        ignoreCase: "quirks",
      });
    }
    function p() {
      if (
        (n.length && n[n.length - 1].type === fe.Descendant && n.pop(),
        0 === n.length)
      )
        throw new Error("Empty sub-selector");
      e.push(n);
    }
    if ((o(0), r.length === t)) return t;
    e: for (; t < r.length; ) {
      const e = r.charCodeAt(t);
      switch (e) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13:
          (0 !== n.length && n[0].type === fe.Descendant) ||
            (u(), n.push({ type: fe.Descendant })),
            o(1);
          break;
        case 62:
          c(fe.Child), o(1);
          break;
        case 60:
          c(fe.Parent), o(1);
          break;
        case 126:
          c(fe.Sibling), o(1);
          break;
        case 43:
          c(fe.Adjacent), o(1);
          break;
        case 46:
          l("class", ge.Element);
          break;
        case 35:
          l("id", ge.Equals);
          break;
        case 91: {
          let e;
          o(1);
          let i = null;
          124 === r.charCodeAt(t)
            ? (e = a(1))
            : r.startsWith("*|", t)
            ? ((i = "*"), (e = a(2)))
            : ((e = a(0)),
              124 === r.charCodeAt(t) &&
                61 !== r.charCodeAt(t + 1) &&
                ((i = e), (e = a(1)))),
            o(0);
          let u = ge.Exists;
          const c = ye.get(r.charCodeAt(t));
          if (c) {
            if (((u = c), 61 !== r.charCodeAt(t + 1)))
              throw new Error("Expected `=`");
            o(2);
          } else 61 === r.charCodeAt(t) && ((u = ge.Equals), o(1));
          let l = "",
            p = null;
          if ("exists" !== u) {
            if (De(r.charCodeAt(t))) {
              const e = r.charCodeAt(t);
              let n = t + 1;
              for (; n < r.length && (r.charCodeAt(n) !== e || s(n)); ) n += 1;
              if (r.charCodeAt(n) !== e)
                throw new Error("Attribute value didn't end");
              (l = Ee(r.slice(t + 1, n))), (t = n + 1);
            } else {
              const e = t;
              for (
                ;
                t < r.length &&
                ((!xe(r.charCodeAt(t)) && 93 !== r.charCodeAt(t)) || s(t));

              )
                t += 1;
              l = Ee(r.slice(e, t));
            }
            o(0);
            const e = 32 | r.charCodeAt(t);
            115 === e ? ((p = !1), o(1)) : 105 === e && ((p = !0), o(1));
          }
          if (93 !== r.charCodeAt(t))
            throw new Error("Attribute selector didn't terminate");
          t += 1;
          const d = {
            type: fe.Attribute,
            name: e,
            action: u,
            value: l,
            namespace: i,
            ignoreCase: p,
          };
          n.push(d);
          break;
        }
        case 58: {
          if (58 === r.charCodeAt(t + 1)) {
            n.push({
              type: fe.PseudoElement,
              name: a(2).toLowerCase(),
              data: 40 === r.charCodeAt(t) ? i() : null,
            });
            continue;
          }
          const e = a(1).toLowerCase();
          let o = null;
          if (40 === r.charCodeAt(t))
            if (we.has(e)) {
              if (De(r.charCodeAt(t + 1)))
                throw new Error(`Pseudo-selector ${e} cannot be quoted`);
              if (((o = []), (t = Ne(o, r, t + 1)), 41 !== r.charCodeAt(t)))
                throw new Error(`Missing closing parenthesis in :${e} (${r})`);
              t += 1;
            } else {
              if (((o = i()), Ae.has(e))) {
                const e = o.charCodeAt(0);
                e === o.charCodeAt(o.length - 1) &&
                  De(e) &&
                  (o = o.slice(1, -1));
              }
              o = Ee(o);
            }
          n.push({ type: fe.Pseudo, name: e, data: o });
          break;
        }
        case 44:
          p(), (n = []), o(1);
          break;
        default: {
          if (r.startsWith("/*", t)) {
            const e = r.indexOf("*/", t + 2);
            if (e < 0) throw new Error("Comment was not terminated");
            (t = e + 2), 0 === n.length && o(0);
            break;
          }
          let i,
            s = null;
          if (42 === e) (t += 1), (i = "*");
          else if (124 === e) {
            if (((i = ""), 124 === r.charCodeAt(t + 1))) {
              c(fe.ColumnCombinator), o(2);
              break;
            }
          } else {
            if (!be.test(r.slice(t))) break e;
            i = a(0);
          }
          124 === r.charCodeAt(t) &&
            124 !== r.charCodeAt(t + 1) &&
            ((s = i),
            42 === r.charCodeAt(t + 1) ? ((i = "*"), (t += 2)) : (i = a(1))),
            n.push(
              "*" === i
                ? { type: fe.Universal, namespace: s }
                : { type: fe.Tag, name: i, namespace: s }
            );
        }
      }
    }
    return p(), t;
  }
  const Ce = new Map([
    [fe.Universal, 50],
    [fe.Tag, 30],
    [fe.Attribute, 1],
    [fe.Pseudo, 0],
  ]);
  function Le(e) {
    return !Ce.has(e.type);
  }
  const ke = new Map([
    [ge.Exists, 10],
    [ge.Equals, 8],
    [ge.Not, 7],
    [ge.Start, 6],
    [ge.End, 6],
    [ge.Any, 5],
  ]);
  function Se(e) {
    const r = e.map(Fe);
    for (let t = 1; t < e.length; t++) {
      const n = r[t];
      if (!(n < 0))
        for (let a = t - 1; a >= 0 && n < r[a]; a--) {
          const t = e[a + 1];
          (e[a + 1] = e[a]), (e[a] = t), (r[a + 1] = r[a]), (r[a] = n);
        }
    }
  }
  function Fe(e) {
    var r, t;
    let n = null !== (r = Ce.get(e.type)) && void 0 !== r ? r : -1;
    return (
      e.type === fe.Attribute
        ? ((n = null !== (t = ke.get(e.action)) && void 0 !== t ? t : 4),
          e.action === ge.Equals && "id" === e.name && (n = 9),
          e.ignoreCase && (n >>= 1))
        : e.type === fe.Pseudo &&
          (e.data
            ? "has" === e.name || "contains" === e.name
              ? (n = 0)
              : Array.isArray(e.data)
              ? ((n = Math.min(...e.data.map((e) => Math.min(...e.map(Fe))))),
                n < 0 && (n = 0))
              : (n = 2)
            : (n = 3)),
      n
    );
  }
  const Oe = /[-[\]{}()*+?.,\\^$|#\s]/g;
  function Be(e) {
    return e.replace(Oe, "\\$&");
  }
  const Re = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink",
  ]);
  function Ve(e, r) {
    return "boolean" == typeof e.ignoreCase
      ? e.ignoreCase
      : "quirks" === e.ignoreCase
      ? !!r.quirksMode
      : !r.xmlMode && Re.has(e.name);
  }
  const Ue = {
      equals(e, r, t) {
        const { adapter: n } = t,
          { name: a } = r;
        let { value: o } = r;
        return Ve(r, t)
          ? ((o = o.toLowerCase()),
            (r) => {
              const t = n.getAttributeValue(r, a);
              return (
                null != t &&
                t.length === o.length &&
                t.toLowerCase() === o &&
                e(r)
              );
            })
          : (r) => n.getAttributeValue(r, a) === o && e(r);
      },
      hyphen(e, r, t) {
        const { adapter: n } = t,
          { name: a } = r;
        let { value: o } = r;
        const i = o.length;
        return Ve(r, t)
          ? ((o = o.toLowerCase()),
            function (r) {
              const t = n.getAttributeValue(r, a);
              return (
                null != t &&
                (t.length === i || "-" === t.charAt(i)) &&
                t.substr(0, i).toLowerCase() === o &&
                e(r)
              );
            })
          : function (r) {
              const t = n.getAttributeValue(r, a);
              return (
                null != t &&
                (t.length === i || "-" === t.charAt(i)) &&
                t.substr(0, i) === o &&
                e(r)
              );
            };
      },
      element(e, r, t) {
        const { adapter: n } = t,
          { name: a, value: o } = r;
        if (/\s/.test(o)) return me.falseFunc;
        const i = new RegExp(`(?:^|\\s)${Be(o)}(?:$|\\s)`, Ve(r, t) ? "i" : "");
        return function (r) {
          const t = n.getAttributeValue(r, a);
          return null != t && t.length >= o.length && i.test(t) && e(r);
        };
      },
      exists:
        (e, { name: r }, { adapter: t }) =>
        (n) =>
          t.hasAttrib(n, r) && e(n),
      start(e, r, t) {
        const { adapter: n } = t,
          { name: a } = r;
        let { value: o } = r;
        const i = o.length;
        return 0 === i
          ? me.falseFunc
          : Ve(r, t)
          ? ((o = o.toLowerCase()),
            (r) => {
              const t = n.getAttributeValue(r, a);
              return (
                null != t &&
                t.length >= i &&
                t.substr(0, i).toLowerCase() === o &&
                e(r)
              );
            })
          : (r) => {
              var t;
              return (
                !!(null === (t = n.getAttributeValue(r, a)) || void 0 === t
                  ? void 0
                  : t.startsWith(o)) && e(r)
              );
            };
      },
      end(e, r, t) {
        const { adapter: n } = t,
          { name: a } = r;
        let { value: o } = r;
        const i = -o.length;
        return 0 === i
          ? me.falseFunc
          : Ve(r, t)
          ? ((o = o.toLowerCase()),
            (r) => {
              var t;
              return (
                (null === (t = n.getAttributeValue(r, a)) || void 0 === t
                  ? void 0
                  : t.substr(i).toLowerCase()) === o && e(r)
              );
            })
          : (r) => {
              var t;
              return (
                !!(null === (t = n.getAttributeValue(r, a)) || void 0 === t
                  ? void 0
                  : t.endsWith(o)) && e(r)
              );
            };
      },
      any(e, r, t) {
        const { adapter: n } = t,
          { name: a, value: o } = r;
        if ("" === o) return me.falseFunc;
        if (Ve(r, t)) {
          const r = new RegExp(Be(o), "i");
          return function (t) {
            const i = n.getAttributeValue(t, a);
            return null != i && i.length >= o.length && r.test(i) && e(t);
          };
        }
        return (r) => {
          var t;
          return (
            !!(null === (t = n.getAttributeValue(r, a)) || void 0 === t
              ? void 0
              : t.includes(o)) && e(r)
          );
        };
      },
      not(e, r, t) {
        const { adapter: n } = t,
          { name: a } = r;
        let { value: o } = r;
        return "" === o
          ? (r) => !!n.getAttributeValue(r, a) && e(r)
          : Ve(r, t)
          ? ((o = o.toLowerCase()),
            (r) => {
              const t = n.getAttributeValue(r, a);
              return (
                (null == t || t.length !== o.length || t.toLowerCase() !== o) &&
                e(r)
              );
            })
          : (r) => n.getAttributeValue(r, a) !== o && e(r);
      },
    },
    Pe = new Set([9, 10, 12, 13, 32]),
    Ie = "0".charCodeAt(0),
    He = "9".charCodeAt(0);
  function je(e) {
    return (function (e) {
      const r = e[0],
        t = e[1] - 1;
      if (t < 0 && r <= 0) return me.falseFunc;
      if (-1 === r) return (e) => e <= t;
      if (0 === r) return (e) => e === t;
      if (1 === r) return t < 0 ? me.trueFunc : (e) => e >= t;
      const n = Math.abs(r),
        a = ((t % n) + n) % n;
      return r > 1
        ? (e) => e >= t && e % n === a
        : (e) => e <= t && e % n === a;
    })(
      (function (e) {
        if ("even" === (e = e.trim().toLowerCase())) return [2, 0];
        if ("odd" === e) return [2, 1];
        let r = 0,
          t = 0,
          n = o(),
          a = i();
        if (
          (r < e.length &&
            "n" === e.charAt(r) &&
            (r++,
            (t = n * (null != a ? a : 1)),
            s(),
            r < e.length ? ((n = o()), s(), (a = i())) : (n = a = 0)),
          null === a || r < e.length)
        )
          throw new Error(`n-th rule couldn't be parsed ('${e}')`);
        return [t, n * a];
        function o() {
          return "-" === e.charAt(r)
            ? (r++, -1)
            : ("+" === e.charAt(r) && r++, 1);
        }
        function i() {
          const t = r;
          let n = 0;
          for (
            ;
            r < e.length && e.charCodeAt(r) >= Ie && e.charCodeAt(r) <= He;

          )
            (n = 10 * n + (e.charCodeAt(r) - Ie)), r++;
          return r === t ? null : n;
        }
        function s() {
          for (; r < e.length && Pe.has(e.charCodeAt(r)); ) r++;
        }
      })(e)
    );
  }
  function Ge(e, r) {
    return (t) => {
      const n = r.getParent(t);
      return null != n && r.isTag(n) && e(t);
    };
  }
  const Me = {
    contains: (e, r, { adapter: t }) =>
      function (n) {
        return e(n) && t.getText(n).includes(r);
      },
    icontains(e, r, { adapter: t }) {
      const n = r.toLowerCase();
      return function (r) {
        return e(r) && t.getText(r).toLowerCase().includes(n);
      };
    },
    "nth-child"(e, r, { adapter: t, equals: n }) {
      const a = je(r);
      return a === me.falseFunc
        ? me.falseFunc
        : a === me.trueFunc
        ? Ge(e, t)
        : function (r) {
            const o = t.getSiblings(r);
            let i = 0;
            for (let e = 0; e < o.length && !n(r, o[e]); e++)
              t.isTag(o[e]) && i++;
            return a(i) && e(r);
          };
    },
    "nth-last-child"(e, r, { adapter: t, equals: n }) {
      const a = je(r);
      return a === me.falseFunc
        ? me.falseFunc
        : a === me.trueFunc
        ? Ge(e, t)
        : function (r) {
            const o = t.getSiblings(r);
            let i = 0;
            for (let e = o.length - 1; e >= 0 && !n(r, o[e]); e--)
              t.isTag(o[e]) && i++;
            return a(i) && e(r);
          };
    },
    "nth-of-type"(e, r, { adapter: t, equals: n }) {
      const a = je(r);
      return a === me.falseFunc
        ? me.falseFunc
        : a === me.trueFunc
        ? Ge(e, t)
        : function (r) {
            const o = t.getSiblings(r);
            let i = 0;
            for (let e = 0; e < o.length; e++) {
              const a = o[e];
              if (n(r, a)) break;
              t.isTag(a) && t.getName(a) === t.getName(r) && i++;
            }
            return a(i) && e(r);
          };
    },
    "nth-last-of-type"(e, r, { adapter: t, equals: n }) {
      const a = je(r);
      return a === me.falseFunc
        ? me.falseFunc
        : a === me.trueFunc
        ? Ge(e, t)
        : function (r) {
            const o = t.getSiblings(r);
            let i = 0;
            for (let e = o.length - 1; e >= 0; e--) {
              const a = o[e];
              if (n(r, a)) break;
              t.isTag(a) && t.getName(a) === t.getName(r) && i++;
            }
            return a(i) && e(r);
          };
    },
    root:
      (e, r, { adapter: t }) =>
      (r) => {
        const n = t.getParent(r);
        return (null == n || !t.isTag(n)) && e(r);
      },
    scope(e, r, t, n) {
      const { equals: a } = t;
      return n && 0 !== n.length
        ? 1 === n.length
          ? (r) => a(n[0], r) && e(r)
          : (r) => n.includes(r) && e(r)
        : Me.root(e, r, t);
    },
    hover: _e("isHovered"),
    visited: _e("isVisited"),
    active: _e("isActive"),
  };
  function _e(e) {
    return function (r, t, { adapter: n }) {
      const a = n[e];
      return "function" != typeof a
        ? me.falseFunc
        : function (e) {
            return a(e) && r(e);
          };
    };
  }
  const ze = {
    empty: (e, { adapter: r }) =>
      !r.getChildren(e).some((e) => r.isTag(e) || "" !== r.getText(e)),
    "first-child"(e, { adapter: r, equals: t }) {
      if (r.prevElementSibling) return null == r.prevElementSibling(e);
      const n = r.getSiblings(e).find((e) => r.isTag(e));
      return null != n && t(e, n);
    },
    "last-child"(e, { adapter: r, equals: t }) {
      const n = r.getSiblings(e);
      for (let a = n.length - 1; a >= 0; a--) {
        if (t(e, n[a])) return !0;
        if (r.isTag(n[a])) break;
      }
      return !1;
    },
    "first-of-type"(e, { adapter: r, equals: t }) {
      const n = r.getSiblings(e),
        a = r.getName(e);
      for (let o = 0; o < n.length; o++) {
        const i = n[o];
        if (t(e, i)) return !0;
        if (r.isTag(i) && r.getName(i) === a) break;
      }
      return !1;
    },
    "last-of-type"(e, { adapter: r, equals: t }) {
      const n = r.getSiblings(e),
        a = r.getName(e);
      for (let o = n.length - 1; o >= 0; o--) {
        const i = n[o];
        if (t(e, i)) return !0;
        if (r.isTag(i) && r.getName(i) === a) break;
      }
      return !1;
    },
    "only-of-type"(e, { adapter: r, equals: t }) {
      const n = r.getName(e);
      return r
        .getSiblings(e)
        .every((a) => t(e, a) || !r.isTag(a) || r.getName(a) !== n);
    },
    "only-child": (e, { adapter: r, equals: t }) =>
      r.getSiblings(e).every((n) => t(e, n) || !r.isTag(n)),
  };
  function Je(e, r, t, n) {
    if (null === t) {
      if (e.length > n)
        throw new Error(`Pseudo-class :${r} requires an argument`);
    } else if (e.length === n)
      throw new Error(`Pseudo-class :${r} doesn't have any arguments`);
  }
  const Ye = {
      "any-link": ":is(a, area, link)[href]",
      link: ":any-link:not(:visited)",
      disabled:
        ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
      enabled: ":not(:disabled)",
      checked:
        ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
      required: ":is(input, select, textarea)[required]",
      optional: ":is(input, select, textarea):not([required])",
      selected:
        "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
      checkbox: "[type=checkbox]",
      file: "[type=file]",
      password: "[type=password]",
      radio: "[type=radio]",
      reset: "[type=reset]",
      image: "[type=image]",
      submit: "[type=submit]",
      parent: ":not(:empty)",
      header: ":is(h1, h2, h3, h4, h5, h6)",
      button: ":is(button, input[type=button])",
      input: ":is(input, textarea, select, button)",
      text: "input:is(:not([type!='']), [type=text])",
    },
    We = {};
  function Ze(e, r) {
    const t = r.getSiblings(e);
    if (t.length <= 1) return [];
    const n = t.indexOf(e);
    return n < 0 || n === t.length - 1 ? [] : t.slice(n + 1).filter(r.isTag);
  }
  function $e(e) {
    return {
      xmlMode: !!e.xmlMode,
      lowerCaseAttributeNames: !!e.lowerCaseAttributeNames,
      lowerCaseTags: !!e.lowerCaseTags,
      quirksMode: !!e.quirksMode,
      cacheResults: !!e.cacheResults,
      pseudos: e.pseudos,
      adapter: e.adapter,
      equals: e.equals,
    };
  }
  const Ke = (e, r, t, n, a) => {
      const o = a(r, $e(t), n);
      return o === me.trueFunc
        ? e
        : o === me.falseFunc
        ? me.falseFunc
        : (r) => o(r) && e(r);
    },
    Xe = {
      is: Ke,
      matches: Ke,
      where: Ke,
      not(e, r, t, n, a) {
        const o = a(r, $e(t), n);
        return o === me.falseFunc
          ? e
          : o === me.trueFunc
          ? me.falseFunc
          : (r) => !o(r) && e(r);
      },
      has(e, r, t, n, a) {
        const { adapter: o } = t,
          i = $e(t);
        i.relativeSelector = !0;
        const s = r.some((e) => e.some(Le)) ? [We] : void 0,
          u = a(r, i, s);
        if (u === me.falseFunc) return me.falseFunc;
        const c = (function (e, r) {
          return e === me.falseFunc ? me.falseFunc : (t) => r.isTag(t) && e(t);
        })(u, o);
        if (s && u !== me.trueFunc) {
          const { shouldTestNextSiblings: r = !1 } = u;
          return (t) => {
            if (!e(t)) return !1;
            s[0] = t;
            const n = o.getChildren(t),
              a = r ? [...n, ...Ze(t, o)] : n;
            return o.existsOne(c, a);
          };
        }
        return (r) => e(r) && o.existsOne(c, o.getChildren(r));
      },
    };
  function Qe(e, r) {
    const t = r.getParent(e);
    return t && r.isTag(t) ? t : null;
  }
  function er(e, r, t, n, a) {
    const { adapter: o, equals: i } = t;
    switch (r.type) {
      case fe.PseudoElement:
        throw new Error("Pseudo-elements are not supported by css-select");
      case fe.ColumnCombinator:
        throw new Error(
          "Column combinators are not yet supported by css-select"
        );
      case fe.Attribute:
        if (null != r.namespace)
          throw new Error(
            "Namespaced attributes are not yet supported by css-select"
          );
        return (
          (t.xmlMode && !t.lowerCaseAttributeNames) ||
            (r.name = r.name.toLowerCase()),
          Ue[r.action](e, r, t)
        );
      case fe.Pseudo:
        return (function (e, r, t, n, a) {
          var o;
          const { name: i, data: s } = r;
          if (Array.isArray(s)) {
            if (!(i in Xe)) throw new Error(`Unknown pseudo-class :${i}(${s})`);
            return Xe[i](e, s, t, n, a);
          }
          const u = null === (o = t.pseudos) || void 0 === o ? void 0 : o[i],
            c = "string" == typeof u ? u : Ye[i];
          if ("string" == typeof c) {
            if (null != s)
              throw new Error(`Pseudo ${i} doesn't have any arguments`);
            const r = Te(c);
            return Xe.is(e, r, t, n, a);
          }
          if ("function" == typeof u)
            return Je(u, i, s, 1), (r) => u(r, s) && e(r);
          if (i in Me) return Me[i](e, s, t, n);
          if (i in ze) {
            const r = ze[i];
            return Je(r, i, s, 2), (n) => r(n, t, s) && e(n);
          }
          throw new Error(`Unknown pseudo-class :${i}`);
        })(e, r, t, n, a);
      case fe.Tag: {
        if (null != r.namespace)
          throw new Error(
            "Namespaced tag names are not yet supported by css-select"
          );
        let { name: n } = r;
        return (
          (t.xmlMode && !t.lowerCaseTags) || (n = n.toLowerCase()),
          function (r) {
            return o.getName(r) === n && e(r);
          }
        );
      }
      case fe.Descendant: {
        if (!1 === t.cacheResults || "undefined" == typeof WeakSet)
          return function (r) {
            let t = r;
            for (; (t = Qe(t, o)); ) if (e(t)) return !0;
            return !1;
          };
        const r = new WeakSet();
        return function (t) {
          let n = t;
          for (; (n = Qe(n, o)); )
            if (!r.has(n)) {
              if (o.isTag(n) && e(n)) return !0;
              r.add(n);
            }
          return !1;
        };
      }
      case "_flexibleDescendant":
        return function (r) {
          let t = r;
          do {
            if (e(t)) return !0;
          } while ((t = Qe(t, o)));
          return !1;
        };
      case fe.Parent:
        return function (r) {
          return o.getChildren(r).some((r) => o.isTag(r) && e(r));
        };
      case fe.Child:
        return function (r) {
          const t = o.getParent(r);
          return null != t && o.isTag(t) && e(t);
        };
      case fe.Sibling:
        return function (r) {
          const t = o.getSiblings(r);
          for (let n = 0; n < t.length; n++) {
            const a = t[n];
            if (i(r, a)) break;
            if (o.isTag(a) && e(a)) return !0;
          }
          return !1;
        };
      case fe.Adjacent:
        return o.prevElementSibling
          ? function (r) {
              const t = o.prevElementSibling(r);
              return null != t && e(t);
            }
          : function (r) {
              const t = o.getSiblings(r);
              let n;
              for (let e = 0; e < t.length; e++) {
                const a = t[e];
                if (i(r, a)) break;
                o.isTag(a) && (n = a);
              }
              return !!n && e(n);
            };
      case fe.Universal:
        if (null != r.namespace && "*" !== r.namespace)
          throw new Error(
            "Namespaced universal selectors are not yet supported by css-select"
          );
        return e;
    }
  }
  function rr(e) {
    return (
      e.type === fe.Pseudo &&
      ("scope" === e.name ||
        (Array.isArray(e.data) && e.data.some((e) => e.some(rr))))
    );
  }
  const tr = { type: fe.Descendant },
    nr = { type: "_flexibleDescendant" },
    ar = { type: fe.Pseudo, name: "scope", data: null };
  function or(e, r, t) {
    var n;
    e.forEach(Se), (t = null !== (n = r.context) && void 0 !== n ? n : t);
    const a = Array.isArray(t),
      o = t && (Array.isArray(t) ? t : [t]);
    if (!1 !== r.relativeSelector)
      !(function (e, { adapter: r }, t) {
        const n = !!(null == t
          ? void 0
          : t.every((e) => {
              const t = r.isTag(e) && r.getParent(e);
              return e === We || (t && r.isTag(t));
            }));
        for (const a of e) {
          if (a.length > 0 && Le(a[0]) && a[0].type !== fe.Descendant);
          else {
            if (!n || a.some(rr)) continue;
            a.unshift(tr);
          }
          a.unshift(ar);
        }
      })(e, r, o);
    else if (e.some((e) => e.length > 0 && Le(e[0])))
      throw new Error(
        "Relative selectors are not allowed when the `relativeSelector` option is disabled"
      );
    let i = !1;
    const s = e
      .map((e) => {
        if (e.length >= 2) {
          const [r, t] = e;
          r.type !== fe.Pseudo ||
            "scope" !== r.name ||
            (a && t.type === fe.Descendant
              ? (e[1] = nr)
              : (t.type !== fe.Adjacent && t.type !== fe.Sibling) || (i = !0));
        }
        return (function (e, r, t) {
          var n;
          return e.reduce(
            (e, n) => (e === me.falseFunc ? me.falseFunc : er(e, n, r, t, or)),
            null !== (n = r.rootFunc) && void 0 !== n ? n : me.trueFunc
          );
        })(e, r, o);
      })
      .reduce(ir, me.falseFunc);
    return (s.shouldTestNextSiblings = i), s;
  }
  function ir(e, r) {
    return r === me.falseFunc || e === me.trueFunc
      ? e
      : e === me.falseFunc || r === me.trueFunc
      ? r
      : function (t) {
          return e(t) || r(t);
        };
  }
  const sr = (e, r) => e === r,
    ur = { adapter: he, equals: sr };
  function cr(e) {
    return function (r, t, n) {
      const a = (function (e) {
        var r, t, n, a;
        const o = null != e ? e : ur;
        return (
          (null !== (r = o.adapter) && void 0 !== r) || (o.adapter = he),
          (null !== (t = o.equals) && void 0 !== t) ||
            (o.equals =
              null !==
                (a =
                  null === (n = o.adapter) || void 0 === n
                    ? void 0
                    : n.equals) && void 0 !== a
                ? a
                : sr),
          o
        );
      })(n);
      "function" != typeof r &&
        (r = (function (e, r, t) {
          return or("string" == typeof e ? Te(e) : e, r, t);
        })(r, a, t));
      const o = (function (e, r, t = !1) {
        t &&
          (e = (function (e, r) {
            const t = Array.isArray(e) ? e.slice(0) : [e],
              n = t.length;
            for (let a = 0; a < n; a++) {
              const e = Ze(t[a], r);
              t.push(...e);
            }
            return t;
          })(e, r));
        return Array.isArray(e) ? r.removeSubsets(e) : r.getChildren(e);
      })(t, a.adapter, r.shouldTestNextSiblings);
      return e(r, o, a);
    };
  }
  const lr = cr((e, r, t) =>
      e !== me.falseFunc && r && 0 !== r.length ? t.adapter.findAll(e, r) : []
    ),
    pr = cr((e, r, t) =>
      e !== me.falseFunc && r && 0 !== r.length ? t.adapter.findOne(e, r) : null
    );
  function dr(e) {
    return e[e.length - 1];
  }
  function fr(e) {
    return e && e.nodeType === f.ELEMENT_NODE;
  }
  function gr(e, r) {
    return fr(e) ? e.getAttribute(r) : void 0;
  }
  function hr(e) {
    return e && e.childNodes;
  }
  function mr(e) {
    return e ? e.parentNode : null;
  }
  var br = {
      isTag: fr,
      getAttributeValue: gr,
      getName: function (e) {
        return ((e && e.rawTagName) || "").toLowerCase();
      },
      getChildren: hr,
      getParent: mr,
      getText: function (e) {
        return e.text;
      },
      removeSubsets: function (e) {
        for (var r, t, n, a = e.length; --a > -1; ) {
          for (r = t = e[a], e[a] = null, n = !0; t; ) {
            if (e.indexOf(t) > -1) {
              (n = !1), e.splice(a, 1);
              break;
            }
            t = mr(t);
          }
          n && (e[a] = r);
        }
        return e;
      },
      existsOne: function e(r, t) {
        return t.some(function (t) {
          return !!fr(t) && (r(t) || e(r, hr(t)));
        });
      },
      getSiblings: function (e) {
        var r = mr(e);
        return r ? hr(r) : [];
      },
      hasAttrib: function (e, r) {
        return void 0 !== gr(e, r);
      },
      findOne: function e(r, t) {
        for (
          var n = null, a = 0, o = null == t ? void 0 : t.length;
          a < o && !n;
          a++
        ) {
          var i = t[a];
          if (r(i)) n = i;
          else {
            var s = hr(i);
            s && s.length > 0 && (n = e(r, s));
          }
        }
        return n;
      },
      findAll: function e(r, t) {
        for (var n = [], a = 0, o = t.length; a < o; a++)
          if (fr(t[a])) {
            r(t[a]) && n.push(t[a]);
            var i = hr(t[a]);
            i && (n = n.concat(e(r, i)));
          }
        return n;
      },
    },
    vr = (function () {
      function e(e, r) {
        void 0 === e && (e = !1),
          (this.addClosingSlash = e),
          Array.isArray(r)
            ? (this.voidTags = r.reduce(function (e, r) {
                return e.add(r.toLowerCase()).add(r.toUpperCase()).add(r);
              }, new Set()))
            : (this.voidTags = [
                "area",
                "base",
                "br",
                "col",
                "embed",
                "hr",
                "img",
                "input",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr",
              ].reduce(function (e, r) {
                return e.add(r.toLowerCase()).add(r.toUpperCase()).add(r);
              }, new Set()));
      }
      return (
        (e.prototype.formatNode = function (e, r, t) {
          var n = this.addClosingSlash,
            a = n && r && !r.endsWith(" ") ? " " : "",
            o = n ? "".concat(a, "/") : "";
          return this.isVoidElement(e.toLowerCase())
            ? "<".concat(e).concat(r).concat(o, ">")
            : "<".concat(e).concat(r, ">").concat(t, "</").concat(e, ">");
        }),
        (e.prototype.isVoidElement = function (e) {
          return this.voidTags.has(e);
        }),
        e
      );
    })(),
    yr = (function (e) {
      function r(r, t, n) {
        void 0 === t && (t = null);
        var a = e.call(this, t, n) || this;
        return (
          (a.nodeType = f.TEXT_NODE), (a.rawTagName = ""), (a._rawText = r), a
        );
      }
      return (
        t(r, e),
        (r.prototype.clone = function () {
          return new r(this._rawText, null);
        }),
        Object.defineProperty(r.prototype, "rawText", {
          get: function () {
            return this._rawText;
          },
          set: function (e) {
            (this._rawText = e),
              (this._trimmedRawText = void 0),
              (this._trimmedText = void 0);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "trimmedRawText", {
          get: function () {
            return (
              void 0 !== this._trimmedRawText ||
                (this._trimmedRawText = wr(this.rawText)),
              this._trimmedRawText
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "trimmedText", {
          get: function () {
            return (
              void 0 !== this._trimmedText ||
                (this._trimmedText = wr(this.text)),
              this._trimmedText
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "text", {
          get: function () {
            return c.decode(this.rawText);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "isWhitespace", {
          get: function () {
            return /^(\s|&nbsp;)*$/.test(this.rawText);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.toString = function () {
          return this.rawText;
        }),
        r
      );
    })(p);
  function wr(e) {
    for (var r, t, n = 0; n >= 0 && n < e.length; )
      /\S/.test(e[n]) &&
        (void 0 === r ? ((r = n), (n = e.length)) : ((t = n), (n = void 0))),
        void 0 === r ? n++ : n--;
    void 0 === r && (r = 0), void 0 === t && (t = e.length - 1);
    var a = r > 0 && /[^\S\r\n]/.test(e[r - 1]),
      o = t < e.length - 1 && /[^\S\r\n]/.test(e[t + 1]);
    return (a ? " " : "") + e.slice(r, t + 1) + (o ? " " : "");
  }
  function Ar(e) {
    return JSON.parse(JSON.stringify(l.decode(e)));
  }
  var qr = new Set();
  !(function () {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    for (
      var t = function (e) {
          for (var r = 0; r < e.length; r++) {
            var t = e[r];
            qr.add(t), qr.add(t.toUpperCase());
          }
        },
        n = 0,
        a = e;
      n < a.length;
      n++
    ) {
      t(a[n]);
    }
  })(
    ["h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup"],
    ["details", "dialog", "dd", "div", "dt"],
    ["fieldset", "figcaption", "figure", "footer", "form"],
    ["table", "td", "tr"],
    [
      "address",
      "article",
      "aside",
      "blockquote",
      "br",
      "hr",
      "li",
      "main",
      "nav",
      "ol",
      "p",
      "pre",
      "section",
      "ul",
    ]
  );
  var Er = (function () {
      function e(e, r) {
        void 0 === e && (e = []),
          void 0 === r &&
            (r = function () {
              return null;
            }),
          (this._set = new Set(e)),
          (this._afterUpdate = r);
      }
      return (
        (e.prototype._validate = function (e) {
          if (/\s/.test(e))
            throw new Error(
              "DOMException in DOMTokenList.add: The token '".concat(
                e,
                "' contains HTML space characters, which are not valid in tokens."
              )
            );
        }),
        (e.prototype.add = function (e) {
          this._validate(e), this._set.add(e), this._afterUpdate(this);
        }),
        (e.prototype.replace = function (e, r) {
          this._validate(r),
            this._set.delete(e),
            this._set.add(r),
            this._afterUpdate(this);
        }),
        (e.prototype.remove = function (e) {
          this._set.delete(e) && this._afterUpdate(this);
        }),
        (e.prototype.toggle = function (e) {
          this._validate(e),
            this._set.has(e) ? this._set.delete(e) : this._set.add(e),
            this._afterUpdate(this);
        }),
        (e.prototype.contains = function (e) {
          return this._set.has(e);
        }),
        Object.defineProperty(e.prototype, "length", {
          get: function () {
            return this._set.size;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.values = function () {
          return this._set.values();
        }),
        Object.defineProperty(e.prototype, "value", {
          get: function () {
            return Array.from(this._set.values());
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.toString = function () {
          return Array.from(this._set.values()).join(" ");
        }),
        e
      );
    })(),
    Dr = (function (e) {
      function r(r, t, n, a, o, i, s) {
        void 0 === n && (n = ""),
          void 0 === a && (a = null),
          void 0 === i && (i = new vr()),
          void 0 === s && (s = {});
        var u = e.call(this, a, o) || this;
        if (
          ((u.rawAttrs = n),
          (u.voidTag = i),
          (u.nodeType = f.ELEMENT_NODE),
          (u.rawTagName = r),
          (u.rawAttrs = n || ""),
          (u.id = t.id || ""),
          (u.childNodes = []),
          (u._parseOptions = s),
          (u.classList = new Er(t.class ? t.class.split(/\s+/) : [], function (
            e
          ) {
            return u.setAttribute("class", e.toString());
          })),
          t.id && (n || (u.rawAttrs = 'id="'.concat(t.id, '"'))),
          t.class && !n)
        ) {
          var c = 'class="'.concat(u.classList.toString(), '"');
          u.rawAttrs ? (u.rawAttrs += " ".concat(c)) : (u.rawAttrs = c);
        }
        return u;
      }
      return (
        t(r, e),
        (r.prototype.quoteAttribute = function (e) {
          return null == e
            ? "null"
            : JSON.stringify(e.replace(/"/g, "&quot;"))
                .replace(/\\t/g, "\t")
                .replace(/\\n/g, "\n")
                .replace(/\\r/g, "\r")
                .replace(/\\/g, "");
        }),
        (r.prototype.removeChild = function (e) {
          return (
            (this.childNodes = this.childNodes.filter(function (r) {
              return r !== e;
            })),
            this
          );
        }),
        (r.prototype.exchangeChild = function (e, r) {
          var t = this.childNodes;
          return (
            (this.childNodes = t.map(function (t) {
              return t === e ? r : t;
            })),
            this
          );
        }),
        Object.defineProperty(r.prototype, "tagName", {
          get: function () {
            return this.rawTagName
              ? this.rawTagName.toUpperCase()
              : this.rawTagName;
          },
          set: function (e) {
            this.rawTagName = e.toLowerCase();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "localName", {
          get: function () {
            return this.rawTagName.toLowerCase();
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "isVoidElement", {
          get: function () {
            return this.voidTag.isVoidElement(this.localName);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "rawText", {
          get: function () {
            return /^br$/i.test(this.rawTagName)
              ? "\n"
              : this.childNodes.reduce(function (e, r) {
                  return e + r.rawText;
                }, "");
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "textContent", {
          get: function () {
            return Ar(this.rawText);
          },
          set: function (e) {
            var r = [new yr(e, this)];
            this.childNodes = r;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "text", {
          get: function () {
            return Ar(this.rawText);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "structuredText", {
          get: function () {
            var e = [],
              r = [e];
            return (
              (function t(n) {
                if (n.nodeType === f.ELEMENT_NODE)
                  qr.has(n.rawTagName)
                    ? (e.length > 0 && r.push((e = [])),
                      n.childNodes.forEach(t),
                      e.length > 0 && r.push((e = [])))
                    : n.childNodes.forEach(t);
                else if (n.nodeType === f.TEXT_NODE)
                  if (n.isWhitespace) e.prependWhitespace = !0;
                  else {
                    var a = n.trimmedText;
                    e.prependWhitespace &&
                      ((a = " ".concat(a)), (e.prependWhitespace = !1)),
                      e.push(a);
                  }
              })(this),
              r
                .map(function (e) {
                  return e.join("").replace(/\s{2,}/g, " ");
                })
                .join("\n")
                .replace(/\s+$/, "")
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.toString = function () {
          var e = this.rawTagName;
          if (e) {
            var r = this.rawAttrs ? " ".concat(this.rawAttrs) : "";
            return this.voidTag.formatNode(e, r, this.innerHTML);
          }
          return this.innerHTML;
        }),
        Object.defineProperty(r.prototype, "innerHTML", {
          get: function () {
            return this.childNodes
              .map(function (e) {
                return e.toString();
              })
              .join("");
          },
          set: function (e) {
            var r = Sr(e, this._parseOptions),
              t = r.childNodes.length ? r.childNodes : [new yr(e, this)];
            Fr(t, this), Fr(this.childNodes, null), (this.childNodes = t);
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.set_content = function (e, r) {
          if ((void 0 === r && (r = {}), e instanceof p)) e = [e];
          else if ("string" == typeof e) {
            var t = Sr(e, (r = n(n({}, this._parseOptions), r)));
            e = t.childNodes.length
              ? t.childNodes
              : [new yr(t.innerHTML, this)];
          }
          return (
            Fr(this.childNodes, null), Fr(e, this), (this.childNodes = e), this
          );
        }),
        (r.prototype.replaceWith = function () {
          for (var e = this, r = [], t = 0; t < arguments.length; t++)
            r[t] = arguments[t];
          var n = this.parentNode,
            o = r
              .map(function (r) {
                if (r instanceof p) return [r];
                if ("string" == typeof r) {
                  var t = Sr(r, e._parseOptions);
                  return t.childNodes.length ? t.childNodes : [new yr(r, e)];
                }
                return [];
              })
              .flat(),
            i = n.childNodes.findIndex(function (r) {
              return r === e;
            });
          return (
            Fr([this], null),
            (n.childNodes = a(
              a(a([], n.childNodes.slice(0, i), !0), Fr(o, n), !0),
              n.childNodes.slice(i + 1),
              !0
            )),
            this
          );
        }),
        Object.defineProperty(r.prototype, "outerHTML", {
          get: function () {
            return this.toString();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.trimRight = function (e) {
          for (var r = 0; r < this.childNodes.length; r++) {
            var t = this.childNodes[r];
            if (t.nodeType === f.ELEMENT_NODE) t.trimRight(e);
            else {
              var n = t.rawText.search(e);
              n > -1 &&
                ((t.rawText = t.rawText.substr(0, n)),
                (this.childNodes.length = r + 1));
            }
          }
          return this;
        }),
        Object.defineProperty(r.prototype, "structure", {
          get: function () {
            var e = [],
              r = 0;
            function t(t) {
              e.push("  ".repeat(r) + t);
            }
            return (
              (function e(n) {
                var a = n.id ? "#".concat(n.id) : "",
                  o = n.classList.length
                    ? ".".concat(n.classList.value.join("."))
                    : "";
                t("".concat(n.rawTagName).concat(a).concat(o)),
                  r++,
                  n.childNodes.forEach(function (r) {
                    r.nodeType === f.ELEMENT_NODE
                      ? e(r)
                      : r.nodeType === f.TEXT_NODE &&
                        (r.isWhitespace || t("#text"));
                  }),
                  r--;
              })(this),
              e.join("\n")
            );
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.removeWhitespace = function () {
          var e = this,
            r = 0;
          this.childNodes.forEach(function (t) {
            if (t.nodeType === f.TEXT_NODE) {
              if (t.isWhitespace) return;
              t.rawText = t.trimmedRawText;
            } else t.nodeType === f.ELEMENT_NODE && t.removeWhitespace();
            e.childNodes[r++] = t;
          }),
            (this.childNodes.length = r);
          var t = Object.keys(this.rawAttributes)
            .map(function (r) {
              var t = e.rawAttributes[r];
              return "".concat(r, "=").concat(JSON.stringify(t));
            })
            .join(" ");
          return (this.rawAttrs = t), delete this._rawAttrs, this;
        }),
        (r.prototype.querySelectorAll = function (e) {
          return lr(e, this, { xmlMode: !0, adapter: br });
        }),
        (r.prototype.querySelector = function (e) {
          return pr(e, this, { xmlMode: !0, adapter: br });
        }),
        (r.prototype.getElementsByTagName = function (e) {
          for (
            var r = e.toUpperCase(), t = [], n = [], a = this, o = 0;
            void 0 !== o;

          ) {
            var i = void 0;
            do {
              i = a.childNodes[o++];
            } while (o < a.childNodes.length && void 0 === i);
            void 0 !== i
              ? i.nodeType === f.ELEMENT_NODE &&
                (("*" !== e && i.tagName !== r) || t.push(i),
                i.childNodes.length > 0 && (n.push(o), (a = i), (o = 0)))
              : ((a = a.parentNode), (o = n.pop()));
          }
          return t;
        }),
        (r.prototype.getElementById = function (e) {
          for (var r = [], t = this, n = 0; void 0 !== n; ) {
            var a = void 0;
            do {
              a = t.childNodes[n++];
            } while (n < t.childNodes.length && void 0 === a);
            if (void 0 !== a) {
              if (a.nodeType === f.ELEMENT_NODE) {
                if (a.id === e) return a;
                a.childNodes.length > 0 && (r.push(n), (t = a), (n = 0));
              }
            } else (t = t.parentNode), (n = r.pop());
          }
          return null;
        }),
        (r.prototype.closest = function (e) {
          var r = new Map(),
            t = this,
            a = null;
          function o(e, t) {
            for (var n = null, a = 0, i = t.length; a < i && !n; a++) {
              var s = t[a];
              if (e(s)) n = s;
              else {
                var u = r.get(s);
                u && (n = o(e, [u]));
              }
            }
            return n;
          }
          for (; t; ) r.set(t, a), (a = t), (t = t.parentNode);
          for (t = this; t; ) {
            var i = pr(e, t, {
              xmlMode: !0,
              adapter: n(n({}, br), {
                getChildren: function (e) {
                  var t = r.get(e);
                  return t && [t];
                },
                getSiblings: function (e) {
                  return [e];
                },
                findOne: o,
                findAll: function () {
                  return [];
                },
              }),
            });
            if (i) return i;
            t = t.parentNode;
          }
          return null;
        }),
        (r.prototype.appendChild = function (e) {
          return e.remove(), this.childNodes.push(e), (e.parentNode = this), e;
        }),
        Object.defineProperty(r.prototype, "firstChild", {
          get: function () {
            return this.childNodes[0];
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "lastChild", {
          get: function () {
            return dr(this.childNodes);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "attrs", {
          get: function () {
            if (this._attrs) return this._attrs;
            this._attrs = {};
            var e = this.rawAttributes;
            for (var r in e) {
              var t = e[r] || "";
              this._attrs[r.toLowerCase()] = Ar(t);
            }
            return this._attrs;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "attributes", {
          get: function () {
            var e = {},
              r = this.rawAttributes;
            for (var t in r) {
              var n = r[t] || "";
              e[t] = Ar(n);
            }
            return e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "rawAttributes", {
          get: function () {
            if (this._rawAttrs) return this._rawAttrs;
            var e = {};
            if (this.rawAttrs)
              for (
                var r =
                    /([a-zA-Z()[\]#@$.?:][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g,
                  t = void 0;
                (t = r.exec(this.rawAttrs));

              ) {
                var n = t[1],
                  a = t[2] || null;
                !a ||
                  ("'" !== a[0] && '"' !== a[0]) ||
                  (a = a.slice(1, a.length - 1)),
                  (e[n] = e[n] || a);
              }
            return (this._rawAttrs = e), e;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.removeAttribute = function (e) {
          var r = this,
            t = this.rawAttributes;
          return (
            delete t[e],
            this._attrs && delete this._attrs[e],
            (this.rawAttrs = Object.keys(t)
              .map(function (e) {
                var n = r.quoteAttribute(t[e]);
                return "null" === n || '""' === n
                  ? e
                  : "".concat(e, "=").concat(n);
              })
              .join(" ")),
            "id" === e && (this.id = ""),
            this
          );
        }),
        (r.prototype.hasAttribute = function (e) {
          return e.toLowerCase() in this.attrs;
        }),
        (r.prototype.getAttribute = function (e) {
          return this.attrs[e.toLowerCase()];
        }),
        (r.prototype.setAttribute = function (e, r) {
          var t = this;
          if (arguments.length < 2)
            throw new Error("Failed to execute 'setAttribute' on 'Element'");
          var n = e.toLowerCase(),
            a = this.rawAttributes;
          for (var o in a)
            if (o.toLowerCase() === n) {
              e = o;
              break;
            }
          return (
            (a[e] = String(r)),
            this._attrs && (this._attrs[n] = Ar(a[e])),
            (this.rawAttrs = Object.keys(a)
              .map(function (e) {
                var r = t.quoteAttribute(a[e]);
                return "null" === r || '""' === r
                  ? e
                  : "".concat(e, "=").concat(r);
              })
              .join(" ")),
            "id" === e && (this.id = r),
            this
          );
        }),
        (r.prototype.setAttributes = function (e) {
          var r = this;
          return (
            this._attrs && delete this._attrs,
            this._rawAttrs && delete this._rawAttrs,
            (this.rawAttrs = Object.keys(e)
              .map(function (t) {
                var n = e[t];
                return "null" === n || '""' === n
                  ? t
                  : "".concat(t, "=").concat(r.quoteAttribute(String(n)));
              })
              .join(" ")),
            this
          );
        }),
        (r.prototype.insertAdjacentHTML = function (e, r) {
          var t,
            n,
            o,
            i = this;
          if (arguments.length < 2) throw new Error("2 arguments required");
          var s = Sr(r, this._parseOptions);
          if ("afterend" === e) {
            var u = this.parentNode.childNodes.findIndex(function (e) {
              return e === i;
            });
            Fr(s.childNodes, this.parentNode),
              (t = this.parentNode.childNodes).splice.apply(
                t,
                a([u + 1, 0], s.childNodes, !1)
              );
          } else if ("afterbegin" === e)
            Fr(s.childNodes, this),
              (n = this.childNodes).unshift.apply(n, s.childNodes);
          else if ("beforeend" === e)
            s.childNodes.forEach(function (e) {
              i.appendChild(e);
            });
          else {
            if ("beforebegin" !== e)
              throw new Error(
                "The value provided ('".concat(
                  e,
                  "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"
                )
              );
            u = this.parentNode.childNodes.findIndex(function (e) {
              return e === i;
            });
            Fr(s.childNodes, this.parentNode),
              (o = this.parentNode.childNodes).splice.apply(
                o,
                a([u, 0], s.childNodes, !1)
              );
          }
          return this;
        }),
        Object.defineProperty(r.prototype, "nextSibling", {
          get: function () {
            if (this.parentNode) {
              for (var e = this.parentNode.childNodes, r = 0; r < e.length; ) {
                if (this === e[r++]) return e[r] || null;
              }
              return null;
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "nextElementSibling", {
          get: function () {
            if (this.parentNode) {
              for (
                var e = this.parentNode.childNodes, t = 0, n = !1;
                t < e.length;

              ) {
                var a = e[t++];
                if (n) {
                  if (a instanceof r) return a || null;
                } else this === a && (n = !0);
              }
              return null;
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "previousSibling", {
          get: function () {
            if (this.parentNode) {
              for (var e = this.parentNode.childNodes, r = e.length; r > 0; ) {
                if (this === e[--r]) return e[r - 1] || null;
              }
              return null;
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "previousElementSibling", {
          get: function () {
            if (this.parentNode) {
              for (
                var e = this.parentNode.childNodes, t = e.length, n = !1;
                t > 0;

              ) {
                var a = e[--t];
                if (n) {
                  if (a instanceof r) return a || null;
                } else this === a && (n = !0);
              }
              return null;
            }
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(r.prototype, "classNames", {
          get: function () {
            return this.classList.toString();
          },
          enumerable: !1,
          configurable: !0,
        }),
        (r.prototype.clone = function () {
          return Sr(this.toString(), this._parseOptions).firstChild;
        }),
        r
      );
    })(p),
    xr =
      /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g,
    Tr = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi,
    Nr = {
      li: { li: !0, LI: !0 },
      LI: { li: !0, LI: !0 },
      p: { p: !0, div: !0, P: !0, DIV: !0 },
      P: { p: !0, div: !0, P: !0, DIV: !0 },
      b: { div: !0, DIV: !0 },
      B: { div: !0, DIV: !0 },
      td: { td: !0, th: !0, TD: !0, TH: !0 },
      TD: { td: !0, th: !0, TD: !0, TH: !0 },
      th: { td: !0, th: !0, TD: !0, TH: !0 },
      TH: { td: !0, th: !0, TD: !0, TH: !0 },
      h1: { h1: !0, H1: !0 },
      H1: { h1: !0, H1: !0 },
      h2: { h2: !0, H2: !0 },
      H2: { h2: !0, H2: !0 },
      h3: { h3: !0, H3: !0 },
      H3: { h3: !0, H3: !0 },
      h4: { h4: !0, H4: !0 },
      H4: { h4: !0, H4: !0 },
      h5: { h5: !0, H5: !0 },
      H5: { h5: !0, H5: !0 },
      h6: { h6: !0, H6: !0 },
      H6: { h6: !0, H6: !0 },
    },
    Cr = {
      li: { ul: !0, ol: !0, UL: !0, OL: !0 },
      LI: { ul: !0, ol: !0, UL: !0, OL: !0 },
      a: { div: !0, DIV: !0 },
      A: { div: !0, DIV: !0 },
      b: { div: !0, DIV: !0 },
      B: { div: !0, DIV: !0 },
      i: { div: !0, DIV: !0 },
      I: { div: !0, DIV: !0 },
      p: { div: !0, DIV: !0 },
      P: { div: !0, DIV: !0 },
      td: { tr: !0, table: !0, TR: !0, TABLE: !0 },
      TD: { tr: !0, table: !0, TR: !0, TABLE: !0 },
      th: { tr: !0, table: !0, TR: !0, TABLE: !0 },
      TH: { tr: !0, table: !0, TR: !0, TABLE: !0 },
    },
    Lr = "documentfragmentcontainer";
  function kr(e, r) {
    var t, n;
    void 0 === r && (r = {});
    var a = new vr(
        null === (t = null == r ? void 0 : r.voidTag) || void 0 === t
          ? void 0
          : t.closingSlash,
        null === (n = null == r ? void 0 : r.voidTag) || void 0 === n
          ? void 0
          : n.tags
      ),
      o = r.blockTextElements || {
        script: !0,
        noscript: !0,
        style: !0,
        pre: !0,
      },
      i = Object.keys(o),
      s = i.map(function (e) {
        return new RegExp("^".concat(e, "$"), "i");
      }),
      u = i
        .filter(function (e) {
          return Boolean(o[e]);
        })
        .map(function (e) {
          return new RegExp("^".concat(e, "$"), "i");
        });
    function c(e) {
      return u.some(function (r) {
        return r.test(e);
      });
    }
    function l(e) {
      return s.some(function (r) {
        return r.test(e);
      });
    }
    var p,
      d = function (e, r) {
        return [e - q, r - q];
      },
      f = new Dr(null, {}, "", null, [0, e.length], a, r),
      h = f,
      m = [f],
      b = -1,
      v = void 0;
    e = "<".concat(Lr, ">").concat(e, "</").concat(Lr, ">");
    for (
      var y = r.lowerCaseTagName,
        w = r.fixNestedATags,
        A = e.length - (Lr.length + 2),
        q = Lr.length + 2;
      (p = xr.exec(e));

    ) {
      var E = p[0],
        D = p[1],
        x = p[2],
        T = p[3],
        N = p[4],
        C = E.length,
        L = xr.lastIndex - C,
        k = xr.lastIndex;
      if (b > -1 && b + C < k) {
        var S = e.substring(b, L);
        h.appendChild(new yr(S, h, d(b, L)));
      }
      if (((b = xr.lastIndex), x !== Lr))
        if ("!" !== E[1]) {
          if ((y && (x = x.toLowerCase()), !D)) {
            for (var F = {}, O = void 0; (O = Tr.exec(T)); ) {
              var B = O[1],
                R = O[2],
                V = "'" === R[0] || '"' === R[0];
              F[B.toLowerCase()] = V ? R.slice(1, R.length - 1) : R;
            }
            var U = h.rawTagName;
            !N && Nr[U] && Nr[U][x] && (m.pop(), (h = dr(m))),
              !w ||
                ("a" !== x && "A" !== x) ||
                (void 0 !== v && (m.splice(v), (h = dr(m))), (v = m.length));
            var P = xr.lastIndex,
              I = P - C;
            if (
              ((h = h.appendChild(
                new Dr(x, F, T.slice(1), null, d(I, P), a, r)
              )),
              m.push(h),
              l(x))
            ) {
              var H = "</".concat(x, ">"),
                j = y
                  ? e.toLocaleLowerCase().indexOf(H, xr.lastIndex)
                  : e.indexOf(H, xr.lastIndex),
                G = -1 === j ? A : j;
              if (c(x))
                (S = e.substring(P, G)).length > 0 &&
                  /\S/.test(S) &&
                  h.appendChild(new yr(S, h, d(P, G)));
              -1 === j
                ? (b = xr.lastIndex = e.length + 1)
                : ((b = xr.lastIndex = j + H.length), (D = "/"));
            }
          }
          if (D || N || a.isVoidElement(x))
            for (;;) {
              if (
                (null == v || ("a" !== x && "A" !== x) || (v = void 0),
                h.rawTagName === x)
              ) {
                (h.range[1] = d(-1, Math.max(b, k))[1]), m.pop(), (h = dr(m));
                break;
              }
              U = h.tagName;
              if (!Cr[U] || !Cr[U][x]) break;
              m.pop(), (h = dr(m));
            }
        } else if (r.comment) {
          var S = e.substring(L + 4, k - 3);
          h.appendChild(new g(S, h, d(L, k)));
        }
    }
    return m;
  }
  function Sr(e, r) {
    void 0 === r && (r = {});
    for (
      var t = kr(e, r),
        n = t[0],
        a = function () {
          var e = t.pop(),
            n = dr(t);
          e.parentNode &&
            e.parentNode.parentNode &&
            (e.parentNode === n && e.tagName === n.tagName
              ? !0 !== r.parseNoneClosedTags &&
                (n.removeChild(e),
                e.childNodes.forEach(function (e) {
                  n.parentNode.appendChild(e);
                }),
                t.pop())
              : !0 !== r.parseNoneClosedTags &&
                (n.removeChild(e),
                e.childNodes.forEach(function (e) {
                  n.appendChild(e);
                })));
        };
      t.length > 1;

    )
      a();
    return n;
  }
  function Fr(e, r) {
    return e.map(function (e) {
      return (e.parentNode = r), e;
    });
  }
  function Or(e, r) {
    void 0 === r && (r = {});
    var t = kr(e, r);
    return Boolean(1 === t.length);
  }
  function Br(e, r) {
    return void 0 === r && (r = {}), Sr(e, r);
  }
  return (
    (Br.parse = Sr),
    (Br.HTMLElement = Dr),
    (Br.CommentNode = g),
    (Br.valid = Or),
    (Br.Node = p),
    (Br.TextNode = yr),
    (Br.NodeType = f),
    (e.CommentNode = g),
    (e.HTMLElement = Dr),
    (e.Node = p),
    (e.NodeType = f),
    (e.TextNode = yr),
    (e.default = Br),
    (e.parse = Br),
    (e.valid = Or),
    Object.defineProperty(e, "__esModule", { value: !0 }),
    e
  );
})({});

var parse = uz_node_parse.parse;

/**
 * 视频分类
 */
class VideoClass {
  constructor() {
    // 当前分类的链接
    this.type_id = "";
    // 分类名称
    this.type_name = "";
  }
}


/**
 * 视频详情
 */
class VideoDetail {
  constructor() {
    // 当前视频详情链接
    this.vod_id = "";
    // 视频名称
    this.vod_name = "";
    /**
     * 所有剧集
     * 第一集$第一集的视频详情链接#第二集$第二集的视频详情链接
     */
    this.vod_play_url = "";
    // 封面
    this.vod_pic = "";
    // 视频分类
    this.type_name = "";
    // 更新到
    this.vod_remarks = "";
    // 豆瓣
    this.vod_douban_score = "";
    // 语言
    this.vod_lang = "";
    // 年份
    this.vod_year = "";
    // 演员
    this.vod_actor = "";
    // 导演
    this.vod_director = "";
    // 描述
    this.vod_content = "";
    // 地区
    this.vod_area = "";
  }
}

/**
 * 返回分类列表
 */
class RepVideoClassList {
  constructor() {
    /**
     * @type {VideoClass[]}
     */
    this.data = [];
    this.error = "";
  }
}

/**
 * 视频列表
 */
class VideoList {
  constructor() {
    /**
     * @type {VideoDetail[]}
     */
    this.data = [];
    this.total = 0;
  }
}

/**
 * 返回视频列表
 */
class RepVideoList {
  constructor() {
    /**
     * @type {VideoList}
     */
    this.data = null;
    this.error = "";
  }
}

/**
 * 返回视频详情
 */
class RepVideoDetail {
  constructor() {
    /**
     * @type {VideoDetail}
     */
    this.data = null;
    this.error = "";
  }
}

/**
 * 返回播放地址
 */
class RepVideoPlayUrl {
  constructor() {
    this.data = "";
    this.error = "";
  }
}

/**
 * UZArgs 封装一组参数，用于构建请求URL或进行数据查询。
 */
class UZArgs {
  constructor() {
    // 请求的URL
    this.url = "";
    // 当前页码
    this.page = 1;
    //搜索关键词
    this.searchWord = "";
  }
}

class WebApiBase {
  /**
   * 异步获取分类列表的方法。
   * @param {UZArgs} args
   * @returns {Promise<RepVideoClassList>}
   */
  async getClassList(args) {
    return new RepVideoClassList();
  }

  /**
   * 获取分类视频列表
   * @param {UZArgs} args
   * @returns {Promise<RepVideoList>}
   */
  async getVideoList(args) {
    return new RepVideoList();
  }

  /**
   * 获取视频详情
   * @param {UZArgs} args
   * @returns {Promise<RepVideoDetail>}
   */
  async getVideoDetail(args) {
    return new RepVideoDetail();
  }
  /**
   * 获取视频的播放地址
   * @param {UZArgs} args
   * @returns {Promise<RepVideoPlayUrl>}
   */
  async getVideoPlayUrl(args) {
    return new RepVideoPlayUrl();
  }
  /**
   * 搜索视频
   * @param {UZArgs} args
   * @returns {Promise<RepVideoList>}
   */
  async searchVideo(args) {
    return new RepVideoList();
  }
}

/**
 * 返回数据
 */
class ProData {
  constructor() {
    this.error = "";
    this.data;
  }
}

/**
 * 获取视频分类列表
 * @param {UZArgs} args
 * @returns {Promise<ProData>}
 */
async function req(url, options) {
  let pro = await sendMessage(
    "req",
    JSON.stringify({ url: url, options: options })
  );
  return pro;
}



class UZUtils {
  static getHostFromURL(url) {
    const protocolEndIndex = url.indexOf('://');
    if (protocolEndIndex === -1) {
      return null;
    }
  
    const hostStartIndex = protocolEndIndex + 3;
    const hostEndIndex = url.indexOf('/', hostStartIndex);
    const host = hostEndIndex === -1 ? url.slice(hostStartIndex) : url.slice(hostStartIndex, hostEndIndex);
  
    return `${url.slice(0, protocolEndIndex + 3)}${host}`;
  }
}
