(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/NewServerPromt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewVersionPrompt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// components/NewVersionPrompt.tsx
"use client";
;
function NewVersionPrompt() {
    _s();
    const [updateAvailable, setUpdateAvailable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Detect new service worker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NewVersionPrompt.useEffect": ()=>{
            if ("serviceWorker" in navigator) {
                navigator.serviceWorker.ready.then({
                    "NewVersionPrompt.useEffect": (registration)=>{
                        if (!registration) return;
                        registration.addEventListener("updatefound", {
                            "NewVersionPrompt.useEffect": ()=>{
                                const newWorker = registration.installing;
                                if (!newWorker) return;
                                newWorker.addEventListener("statechange", {
                                    "NewVersionPrompt.useEffect": ()=>{
                                        if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                                            setUpdateAvailable(true);
                                        }
                                    }
                                }["NewVersionPrompt.useEffect"]);
                            }
                        }["NewVersionPrompt.useEffect"]);
                    }
                }["NewVersionPrompt.useEffect"]);
            }
        }
    }["NewVersionPrompt.useEffect"], []);
    // Hard refresh and unregister SWs
    const refreshPage = ()=>{
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations)=>{
                Promise.all(registrations.map((reg)=>reg.unregister())).then(()=>{
                    window.location.reload(true); // Hard reload
                });
            });
        } else {
            window.location.reload(true);
        }
    };
    if (!updateAvailable) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 cursor-pointer animate-pulse hover:bg-blue-700 transition-colors duration-300 ",
        onClick: refreshPage,
        role: "alert",
        children: "⚡ New version available! Click to refresh."
    }, void 0, false, {
        fileName: "[project]/app/components/NewServerPromt.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(NewVersionPrompt, "VnLi6SmtH+12tiWEWwUp9koLu+Q=");
_c = NewVersionPrompt;
var _c;
__turbopack_context__.k.register(_c, "NewVersionPrompt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_NewServerPromt_tsx_0nd7ryz._.js.map