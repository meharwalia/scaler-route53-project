(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/hosted-zones/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HostedZonesTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const btn = "h-9 px-5 border text-sm font-medium rounded-full disabled:opacity-40 disabled:cursor-not-allowed";
const btnSecondary = `${btn} border-neutral-400 bg-white text-neutral-800 hover:bg-neutral-100`;
const btnPrimary = `${btn} border-[#FF9900] bg-[#FF9900] text-black hover:bg-[#EC7211]`;
const btnRefresh = "h-9 w-9 flex items-center justify-center rounded-full border border-blue-200 bg-blue-100 text-blue-700 text-lg hover:bg-blue-200";
function HostedZonesTable(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "cf5987f6deab109e5a8919943261614a7be771ee4eba0ec5355a4474fb460638") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cf5987f6deab109e5a8919943261614a7be771ee4eba0ec5355a4474fb460638";
    }
    const { zones } = t0;
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let filtered;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    if ($[1] !== search || $[2] !== selectedId || $[3] !== zones) {
        let t7;
        if ($[11] !== search) {
            t7 = ({
                "HostedZonesTable[zones.filter()]": (zone)=>zone.domain_name.toLowerCase().includes(search.toLowerCase())
            })["HostedZonesTable[zones.filter()]"];
            $[11] = search;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        filtered = zones.filter(t7);
        const nothingSelected = selectedId === null;
        t4 = "flex flex-col gap-4";
        let t8;
        if ($[13] !== zones.length) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold",
                children: [
                    "Hosted zones ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-neutral-500 font-normal",
                        children: [
                            "(",
                            zones.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/hosted-zones/page.tsx",
                        lineNumber: 47,
                        columnNumber: 64
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 47,
                columnNumber: 12
            }, this);
            $[13] = zones.length;
            $[14] = t8;
        } else {
            t8 = $[14];
        }
        let t9;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: `${btnRefresh} w-9 px-0`,
                "aria-label": "Refresh",
                children: "↻"
            }, void 0, false, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 55,
                columnNumber: 12
            }, this);
            $[15] = t9;
        } else {
            t9 = $[15];
        }
        let t10;
        let t11;
        let t12;
        if ($[16] !== nothingSelected) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: btnSecondary,
                disabled: nothingSelected,
                children: "View details"
            }, void 0, false, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, this);
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: btnSecondary,
                disabled: nothingSelected,
                children: "Edit"
            }, void 0, false, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this);
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: btnSecondary,
                disabled: nothingSelected,
                children: "Delete"
            }, void 0, false, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this);
            $[16] = nothingSelected;
            $[17] = t10;
            $[18] = t11;
            $[19] = t12;
        } else {
            t10 = $[17];
            t11 = $[18];
            t12 = $[19];
        }
        let t13;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: btnPrimary,
                children: "Create hosted zone"
            }, void 0, false, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this);
            $[20] = t13;
        } else {
            t13 = $[20];
        }
        let t14;
        if ($[21] !== t10 || $[22] !== t11 || $[23] !== t12) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t9,
                    t10,
                    t11,
                    t12,
                    t13
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this);
            $[21] = t10;
            $[22] = t11;
            $[23] = t12;
            $[24] = t14;
        } else {
            t14 = $[24];
        }
        if ($[25] !== t14 || $[26] !== t8) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t8,
                    t14
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 94,
                columnNumber: 12
            }, this);
            $[25] = t14;
            $[26] = t8;
            $[27] = t5;
        } else {
            t5 = $[27];
        }
        let t15;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = ({
                "HostedZonesTable[<input>.onChange]": (e)=>setSearch(e.target.value)
            })["HostedZonesTable[<input>.onChange]"];
            $[28] = t15;
        } else {
            t15 = $[28];
        }
        if ($[29] !== search) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "search",
                placeholder: "Filter hosted zones by domain name",
                value: search,
                onChange: t15,
                className: "w-full max-w-sm h-9 px-3 border border-neutral-300 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            }, void 0, false, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 111,
                columnNumber: 12
            }, this);
            $[29] = search;
            $[30] = t6;
        } else {
            t6 = $[30];
        }
        t2 = "w-full text-sm border border-neutral-300";
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: "bg-neutral-100 text-left",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "w-10 px-4 py-2"
                        }, void 0, false, {
                            fileName: "[project]/src/app/hosted-zones/page.tsx",
                            lineNumber: 119,
                            columnNumber: 60
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-2 font-medium",
                            children: "Hosted zone name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/hosted-zones/page.tsx",
                            lineNumber: 119,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-2 font-medium",
                            children: "Type"
                        }, void 0, false, {
                            fileName: "[project]/src/app/hosted-zones/page.tsx",
                            lineNumber: 119,
                            columnNumber: 152
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-2 font-medium",
                            children: "Description"
                        }, void 0, false, {
                            fileName: "[project]/src/app/hosted-zones/page.tsx",
                            lineNumber: 119,
                            columnNumber: 199
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: "px-4 py-2 font-medium",
                            children: "Hosted zone ID"
                        }, void 0, false, {
                            fileName: "[project]/src/app/hosted-zones/page.tsx",
                            lineNumber: 119,
                            columnNumber: 253
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/hosted-zones/page.tsx",
                    lineNumber: 119,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 119,
                columnNumber: 12
            }, this);
            $[31] = t3;
        } else {
            t3 = $[31];
        }
        let t16;
        if ($[32] !== selectedId) {
            t16 = ({
                "HostedZonesTable[filtered.map()]": (zone_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        onClick: {
                            "HostedZonesTable[filtered.map() > <tr>.onClick]": ()=>setSelectedId(zone_0.id)
                        }["HostedZonesTable[filtered.map() > <tr>.onClick]"],
                        className: `border-t border-neutral-200 cursor-pointer ${selectedId === zone_0.id ? "bg-blue-50" : "hover:bg-neutral-50"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "radio",
                                    name: "selectedZone",
                                    checked: selectedId === zone_0.id,
                                    onChange: {
                                        "HostedZonesTable[filtered.map() > <input>.onChange]": ()=>setSelectedId(zone_0.id)
                                    }["HostedZonesTable[filtered.map() > <input>.onChange]"],
                                    "aria-label": `Select ${zone_0.domain_name}`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hosted-zones/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 213
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/hosted-zones/page.tsx",
                                lineNumber: 129,
                                columnNumber: 187
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/hosted-zones/${zone_0.id}`,
                                    className: "text-blue-600 hover:underline",
                                    onClick: _HostedZonesTableFilteredMapLinkOnClick,
                                    children: zone_0.domain_name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hosted-zones/page.tsx",
                                    lineNumber: 131,
                                    columnNumber: 148
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/hosted-zones/page.tsx",
                                lineNumber: 131,
                                columnNumber: 122
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2 capitalize",
                                children: zone_0.type
                            }, void 0, false, {
                                fileName: "[project]/src/app/hosted-zones/page.tsx",
                                lineNumber: 131,
                                columnNumber: 314
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2",
                                children: zone_0.description ?? "-"
                            }, void 0, false, {
                                fileName: "[project]/src/app/hosted-zones/page.tsx",
                                lineNumber: 131,
                                columnNumber: 369
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-4 py-2",
                                children: zone_0.id
                            }, void 0, false, {
                                fileName: "[project]/src/app/hosted-zones/page.tsx",
                                lineNumber: 131,
                                columnNumber: 427
                            }, this)
                        ]
                    }, zone_0.id, true, {
                        fileName: "[project]/src/app/hosted-zones/page.tsx",
                        lineNumber: 127,
                        columnNumber: 55
                    }, this)
            })["HostedZonesTable[filtered.map()]"];
            $[32] = selectedId;
            $[33] = t16;
        } else {
            t16 = $[33];
        }
        t1 = filtered.map(t16);
        $[1] = search;
        $[2] = selectedId;
        $[3] = zones;
        $[4] = filtered;
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
        $[8] = t4;
        $[9] = t5;
        $[10] = t6;
    } else {
        filtered = $[4];
        t1 = $[5];
        t2 = $[6];
        t3 = $[7];
        t4 = $[8];
        t5 = $[9];
        t6 = $[10];
    }
    let t7;
    if ($[34] !== filtered.length || $[35] !== search || $[36] !== zones.length) {
        t7 = filtered.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 5,
                className: "px-4 py-6 text-center text-neutral-500",
                children: zones.length === 0 ? "No hosted zones yet" : `No hosted zones match "${search}"`
            }, void 0, false, {
                fileName: "[project]/src/app/hosted-zones/page.tsx",
                lineNumber: 160,
                columnNumber: 39
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/hosted-zones/page.tsx",
            lineNumber: 160,
            columnNumber: 35
        }, this);
        $[34] = filtered.length;
        $[35] = search;
        $[36] = zones.length;
        $[37] = t7;
    } else {
        t7 = $[37];
    }
    let t8;
    if ($[38] !== t1 || $[39] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: [
                t1,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/hosted-zones/page.tsx",
            lineNumber: 170,
            columnNumber: 10
        }, this);
        $[38] = t1;
        $[39] = t7;
        $[40] = t8;
    } else {
        t8 = $[40];
    }
    let t9;
    if ($[41] !== t2 || $[42] !== t3 || $[43] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            className: t2,
            children: [
                t3,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/hosted-zones/page.tsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        $[41] = t2;
        $[42] = t3;
        $[43] = t8;
        $[44] = t9;
    } else {
        t9 = $[44];
    }
    let t10;
    if ($[45] !== t4 || $[46] !== t5 || $[47] !== t6 || $[48] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t6,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/hosted-zones/page.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[45] = t4;
        $[46] = t5;
        $[47] = t6;
        $[48] = t9;
        $[49] = t10;
    } else {
        t10 = $[49];
    }
    return t10;
}
_s(HostedZonesTable, "DV1+hhBwp09N2qQN0vGc9TTqz8E=");
_c = HostedZonesTable;
function _HostedZonesTableFilteredMapLinkOnClick(e_0) {
    return e_0.stopPropagation();
}
var _c;
__turbopack_context__.k.register(_c, "HostedZonesTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_hosted-zones_page_tsx_1ph87btmcn0w8._.js.map