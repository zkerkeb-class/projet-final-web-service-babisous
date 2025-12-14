(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/projet-final-web-service-babisous/web/components/LoadingSpinner.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Composant LoadingSpinner
 * Indicateur de chargement
 */ __turbopack_context__.s([
    "default",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function LoadingSpinner({ size = "medium" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `spinner spinner-${size}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "spinner-circle"
        }, void 0, false, {
            fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/LoadingSpinner.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/LoadingSpinner.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/components/ProtectedRoute.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProtectedRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/LoadingSpinner.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ProtectedRoute({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProtectedRoute.useEffect": ()=>{
            if (!loading && !user) {
                router.push("/auth/login");
            }
        }
    }["ProtectedRoute.useEffect"], [
        user,
        loading,
        router
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loading-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "large"
                }, void 0, false, {
                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ProtectedRoute.js",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Chargement..."
                }, void 0, false, {
                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ProtectedRoute.js",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ProtectedRoute.js",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ProtectedRoute, "ECuTCuyBzuCScSXDCsKsZ4/7zwU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/components/Button.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Composant Button
 * Bouton réutilisable
 */ __turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Button({ children, type = "button", onClick, disabled = false, variant = "primary", fullWidth = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        onClick: onClick,
        disabled: disabled,
        className: `btn btn-${variant} ${fullWidth ? "btn-full" : ""}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/Button.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/components/FormInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Composant FormInput
 * Input réutilisable pour les formulaires
 */ __turbopack_context__.s([
    "default",
    ()=>FormInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function FormInput({ label, type = "text", name, value, onChange, placeholder, required = false, error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "form-group",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "required",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/FormInput.js",
                        lineNumber: 21,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/FormInput.js",
                lineNumber: 19,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                id: name,
                name: name,
                value: value,
                onChange: onChange,
                placeholder: placeholder,
                required: required,
                className: error ? "error" : ""
            }, void 0, false, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/FormInput.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "error-message",
                children: error
            }, void 0, false, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/FormInput.js",
                lineNumber: 34,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/FormInput.js",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = FormInput;
var _c;
__turbopack_context__.k.register(_c, "FormInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/components/Alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Composant Alert
 * Affiche des messages d'alerte (erreur, succès, info)
 */ __turbopack_context__.s([
    "default",
    ()=>Alert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Alert({ type = "error", message, onClose }) {
    if (!message) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `alert alert-${type}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: message
            }, void 0, false, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/Alert.js",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "alert-close",
                onClick: onClose,
                children: "×"
            }, void 0, false, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/Alert.js",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/Alert.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Alert;
var _c;
__turbopack_context__.k.register(_c, "Alert");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/lib/services/artworkService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service Artwork
 * Gère toutes les opérations liées aux artworks
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/lib/api/client.js [app-client] (ecmascript)");
;
class ArtworkService {
    /**
   * Upload un fichier GLB vers le serveur
   */ async uploadFile(file) {
        const formData = new FormData();
        formData.append("file", file);
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAuthToken();
        const response = await fetch(`${("TURBOPACK compile-time value", "http://localhost:3000/api")}/upload`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.error || "Erreur lors de l'upload");
        }
        return data.data;
    }
    /**
   * Crée une nouvelle œuvre d'art
   */ async create(title, description, url) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/artworks", {
            title,
            description,
            url
        }, true);
        return response.data;
    }
    /**
   * Récupère toutes les œuvres
   */ async getAll(page = 1, limit = 10) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/artworks?page=${page}&limit=${limit}`, false);
        return response.data;
    }
    /**
   * Récupère les œuvres de l'utilisateur connecté
   */ async getMyArtworks() {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/artworks", true);
        return response.data;
    }
    /**
   * Récupère une œuvre par son ID
   */ async getById(id) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/artworks/${id}`, false);
        return response.data;
    }
    /**
   * Met à jour une œuvre
   */ async update(id, data) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/artworks/${id}`, data, true);
        return response.data;
    }
    /**
   * Supprime une œuvre
   */ async delete(id) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/artworks/${id}`, true);
        return response.data;
    }
}
const artworkService = new ArtworkService();
const __TURBOPACK__default__export__ = artworkService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArtworkForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$FormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/FormInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/LoadingSpinner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$artworkService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/lib/services/artworkService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ArtworkForm({ onSuccess }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        description: ""
    });
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [alertMessage, setAlertMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [alertType, setAlertType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("error");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: null
                }));
        }
    };
    const handleFileChange = (e)=>{
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            // Vérifier l'extension
            if (!selectedFile.name.toLowerCase().endsWith(".glb")) {
                setErrors((prev)=>({
                        ...prev,
                        file: "Seuls les fichiers .glb sont acceptés"
                    }));
                setFile(null);
                return;
            }
            // Vérifier la taille (50 MB max)
            if (selectedFile.size > 50 * 1024 * 1024) {
                setErrors((prev)=>({
                        ...prev,
                        file: "Le fichier ne doit pas dépasser 50 MB"
                    }));
                setFile(null);
                return;
            }
            setFile(selectedFile);
            setErrors((prev)=>({
                    ...prev,
                    file: null
                }));
        }
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.title.trim()) {
            newErrors.title = "Le titre est requis";
        }
        if (!file) {
            newErrors.file = "Vous devez sélectionner un fichier .glb";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setAlertMessage(null);
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        setUploadProgress(0);
        try {
            // 1. Upload du fichier
            setUploadProgress(30);
            const uploadResult = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$artworkService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].uploadFile(file);
            // 2. Création de l'artwork
            setUploadProgress(70);
            const artwork = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$artworkService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create(formData.title, formData.description, uploadResult.url);
            setUploadProgress(100);
            // Reset du formulaire
            setFormData({
                title: "",
                description: ""
            });
            setFile(null);
            document.getElementById("file-input").value = "";
            setAlertType("success");
            setAlertMessage("Artwork créé avec succès !");
            // Callback de succès
            if (onSuccess) {
                onSuccess(artwork);
            }
        } catch (error) {
            setAlertType("error");
            setAlertMessage(error.message || "Erreur lors de la création");
        } finally{
            setLoading(false);
            setUploadProgress(0);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "artwork-form-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Ajouter une œuvre"
            }, void 0, false, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            alertMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: alertType,
                message: alertMessage,
                onClose: ()=>setAlertMessage(null)
            }, void 0, false, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                lineNumber: 137,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$FormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Titre",
                        type: "text",
                        name: "title",
                        value: formData.title,
                        onChange: handleChange,
                        placeholder: "Le titre de votre œuvre",
                        required: true,
                        error: errors.title
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$FormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Description",
                        type: "text",
                        name: "description",
                        value: formData.description,
                        onChange: handleChange,
                        placeholder: "Description (optionnelle)",
                        error: errors.description
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "form-group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "file-input",
                                children: [
                                    "Fichier 3D (.glb) ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "required",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                                        lineNumber: 168,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                id: "file-input",
                                accept: ".glb",
                                onChange: handleFileChange,
                                className: errors.file ? "error" : ""
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "file-info",
                                children: [
                                    "Fichier sélectionné : ",
                                    file.name,
                                    " (",
                                    (file.size / 1024 / 1024).toFixed(2),
                                    " MB)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                                lineNumber: 178,
                                columnNumber: 13
                            }, this),
                            errors.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "error-message",
                                children: errors.file
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                                lineNumber: 183,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    uploadProgress > 0 && uploadProgress < 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "progress-bar",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "progress-fill",
                            style: {
                                width: `${uploadProgress}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        type: "submit",
                        fullWidth: true,
                        disabled: loading,
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    size: "small"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                                    lineNumber: 198,
                                    columnNumber: 15
                                }, this),
                                " Upload en cours..."
                            ]
                        }, void 0, true) : "Créer l'artwork"
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_s(ArtworkForm, "Vq3sda/uePvRlKkzkVvUXLdGAFs=");
_c = ArtworkForm;
var _c;
__turbopack_context__.k.register(_c, "ArtworkForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/lib/services/anchorService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service Anchor
 * Gère toutes les opérations liées aux anchors
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/lib/api/client.js [app-client] (ecmascript)");
;
class AnchorService {
    /**
   * Crée ou met à jour l'anchor d'une œuvre
   */ async createOrUpdate(artworkId, latitude, longitude, altitude = null, heading = null) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/anchors/${artworkId}`, {
            latitude,
            longitude,
            altitude,
            heading
        }, true);
        return response.data;
    }
    /**
   * Récupère l'anchor d'une œuvre
   */ async getByArtworkId(artworkId) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/anchors/${artworkId}`, false);
        return response.data;
    }
    /**
   * Supprime l'anchor d'une œuvre
   */ async delete(artworkId) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/anchors/${artworkId}`, true);
        return response.data;
    }
    /**
   * Récupère tous les anchors
   */ async getAll() {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/anchors", false);
        return response.data;
    }
}
const anchorService = new AnchorService();
const __TURBOPACK__default__export__ = anchorService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnchorForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$FormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/FormInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/LoadingSpinner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$anchorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/lib/services/anchorService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function AnchorForm({ artwork, onSuccess, onCancel }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        latitude: artwork.anchor?.latitude || "",
        longitude: artwork.anchor?.longitude || "",
        altitude: artwork.anchor?.altitude || "",
        heading: artwork.anchor?.heading || ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [alertMessage, setAlertMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [alertType, setAlertType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("error");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        if (errors[name]) {
            setErrors((prev)=>({
                    ...prev,
                    [name]: null
                }));
        }
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.latitude.trim()) {
            newErrors.latitude = "La latitude est requise";
        } else {
            const lat = parseFloat(formData.latitude);
            if (isNaN(lat) || lat < -90 || lat > 90) {
                newErrors.latitude = "La latitude doit être entre -90 et 90";
            }
        }
        if (!formData.longitude.trim()) {
            newErrors.longitude = "La longitude est requise";
        } else {
            const lon = parseFloat(formData.longitude);
            if (isNaN(lon) || lon < -180 || lon > 180) {
                newErrors.longitude = "La longitude doit être entre -180 et 180";
            }
        }
        if (formData.altitude && formData.altitude.trim()) {
            const alt = parseFloat(formData.altitude);
            if (isNaN(alt)) {
                newErrors.altitude = "L'altitude doit être un nombre valide";
            }
        }
        if (formData.heading && formData.heading.trim()) {
            const head = parseFloat(formData.heading);
            if (isNaN(head) || head < 0 || head > 360) {
                newErrors.heading = "L'orientation doit être entre 0 et 360 degrés";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setAlertMessage(null);
        if (!validateForm()) {
            return;
        }
        setLoading(true);
        try {
            const latitude = parseFloat(formData.latitude);
            const longitude = parseFloat(formData.longitude);
            const altitude = formData.altitude.trim() ? parseFloat(formData.altitude) : null;
            const heading = formData.heading.trim() ? parseFloat(formData.heading) : null;
            const anchor = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$anchorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createOrUpdate(artwork.id, latitude, longitude, altitude, heading);
            setAlertType("success");
            setAlertMessage(artwork.anchor ? "Anchor mis à jour avec succès !" : "Anchor créé avec succès !");
            if (onSuccess) {
                onSuccess(anchor);
            }
        } catch (error) {
            setAlertType("error");
            setAlertMessage(error.message || "Erreur lors de la création de l'anchor");
        } finally{
            setLoading(false);
        }
    };
    const handleDelete = async ()=>{
        if (!artwork.anchor) return;
        if (!confirm("Êtes-vous sûr de vouloir supprimer l'anchor ?")) {
            return;
        }
        setLoading(true);
        setAlertMessage(null);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$anchorService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(artwork.id);
            setAlertType("success");
            setAlertMessage("Anchor supprimé avec succès !");
            if (onSuccess) {
                onSuccess(null);
            }
        } catch (error) {
            setAlertType("error");
            setAlertMessage(error.message || "Erreur lors de la suppression de l'anchor");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "anchor-form-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "anchor-form-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: artwork.anchor ? "Modifier l'anchor" : "Définir la localisation"
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "close-btn",
                        onClick: onCancel,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            alertMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                type: alertType,
                message: alertMessage,
                onClose: ()=>setAlertMessage(null)
            }, void 0, false, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$FormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Latitude",
                        type: "number",
                        name: "latitude",
                        value: formData.latitude,
                        onChange: handleChange,
                        placeholder: "Ex: 48.8566",
                        step: "any",
                        required: true,
                        error: errors.latitude
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$FormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Longitude",
                        type: "number",
                        name: "longitude",
                        value: formData.longitude,
                        onChange: handleChange,
                        placeholder: "Ex: 2.3522",
                        step: "any",
                        required: true,
                        error: errors.longitude
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$FormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Altitude (optionnel)",
                        type: "number",
                        name: "altitude",
                        value: formData.altitude,
                        onChange: handleChange,
                        placeholder: "Ex: 35.5",
                        step: "any",
                        error: errors.altitude
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$FormInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Orientation (optionnel, 0-360°)",
                        type: "number",
                        name: "heading",
                        value: formData.heading,
                        onChange: handleChange,
                        placeholder: "Ex: 90",
                        step: "any",
                        min: "0",
                        max: "360",
                        error: errors.heading
                    }, void 0, false, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "anchor-form-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "submit",
                                disabled: loading,
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this),
                                        " Enregistrement..."
                                    ]
                                }, void 0, true) : artwork.anchor ? "Mettre à jour" : "Créer l'anchor"
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            artwork.anchor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "button",
                                variant: "secondary",
                                onClick: handleDelete,
                                disabled: loading,
                                children: "Supprimer l'anchor"
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                type: "button",
                                variant: "secondary",
                                onClick: onCancel,
                                disabled: loading,
                                children: "Annuler"
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                                lineNumber: 245,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(AnchorForm, "+lXXkZ6NhgnknKRGcWACot1+Wok=");
_c = AnchorForm;
var _c;
__turbopack_context__.k.register(_c, "AnchorForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArtworkList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/LoadingSpinner.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/Alert.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$AnchorForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/AnchorForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$artworkService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/lib/services/artworkService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ArtworkList({ refreshTrigger }) {
    _s();
    const [artworks, setArtworks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showAnchorForm, setShowAnchorForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArtworkList.useEffect": ()=>{
            loadArtworks();
        }
    }["ArtworkList.useEffect"], [
        refreshTrigger
    ]);
    const loadArtworks = async ()=>{
        try {
            setLoading(true);
            setError(null);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$artworkService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAll();
            setArtworks(data.artworks || []);
        } catch (err) {
            setError(err.message || "Erreur lors du chargement");
        } finally{
            setLoading(false);
        }
    };
    const handleDelete = async (id)=>{
        if (!confirm("Êtes-vous sûr de vouloir supprimer cette œuvre ?")) {
            return;
        }
        try {
            setDeletingId(id);
            await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$artworkService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(id);
            setArtworks((prev)=>prev.filter((artwork)=>artwork.id !== id));
        } catch (err) {
            alert(err.message || "Erreur lors de la suppression");
        } finally{
            setDeletingId(null);
        }
    };
    const toggleAnchorForm = (artworkId)=>{
        setShowAnchorForm((prev)=>prev === artworkId ? null : artworkId);
    };
    const handleAnchorSuccess = (artworkId, anchor)=>{
        setArtworks((prev)=>prev.map((artwork)=>artwork.id === artworkId ? {
                    ...artwork,
                    anchor
                } : artwork));
        setShowAnchorForm(null);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loading-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: "medium"
                }, void 0, false, {
                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Chargement des artworks..."
                }, void 0, false, {
                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            type: "error",
            message: error
        }, void 0, false, {
            fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
            lineNumber: 73,
            columnNumber: 12
        }, this);
    }
    if (artworks.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "empty-state",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Aucune œuvre pour le moment."
                }, void 0, false, {
                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Créez votre première œuvre en utilisant le formulaire ci-dessus !"
                }, void 0, false, {
                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "artwork-list",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: [
                    "Mes œuvres (",
                    artworks.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "artwork-grid",
                children: artworks.map((artwork)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "artwork-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artwork-header",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: artwork.title
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    artwork.user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "artwork-author",
                                        children: [
                                            "Par ",
                                            artwork.user.name || artwork.user.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            artwork.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "artwork-description",
                                children: artwork.description
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artwork-meta",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "artwork-date",
                                    children: [
                                        "Créé le ",
                                        new Date(artwork.createdAt).toLocaleDateString("fr-FR")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            artwork.anchor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artwork-anchor-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Localisation:"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "Lat: ",
                                            artwork.anchor.latitude,
                                            ", Lon: ",
                                            artwork.anchor.longitude,
                                            artwork.anchor.altitude && `, Alt: ${artwork.anchor.altitude}m`,
                                            artwork.anchor.heading && `, Orientation: ${artwork.anchor.heading}°`
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "artwork-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: artwork.url,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-primary",
                                        children: "Voir le modèle 3D"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "secondary",
                                        onClick: ()=>toggleAnchorForm(artwork.id),
                                        children: artwork.anchor ? "Modifier anchor" : "Définir anchor"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        variant: "secondary",
                                        onClick: ()=>handleDelete(artwork.id),
                                        disabled: deletingId === artwork.id,
                                        children: deletingId === artwork.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$LoadingSpinner$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            size: "small"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this) : "Supprimer"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            showAnchorForm === artwork.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$AnchorForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                artwork: artwork,
                                onSuccess: (anchor)=>handleAnchorSuccess(artwork.id, anchor),
                                onCancel: ()=>setShowAnchorForm(null)
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                                lineNumber: 150,
                                columnNumber: 15
                            }, this)
                        ]
                    }, artwork.id, true, {
                        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(ArtworkList, "zBXxvCLGZ4kpe7F8r/5vg20DJew=");
_c = ArtworkList;
var _c;
__turbopack_context__.k.register(_c, "ArtworkList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/context/AuthContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$ProtectedRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/ProtectedRoute.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$ArtworkForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkForm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$ArtworkList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/components/ArtworkList.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function DashboardPage() {
    _s();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [refreshTrigger, setRefreshTrigger] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const handleLogout = ()=>{
        logout();
        router.push("/auth/login");
    };
    const handleArtworkCreated = ()=>{
        // Rafraîchir la liste des artworks
        setRefreshTrigger((prev)=>prev + 1);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$ProtectedRoute$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dashboard-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "dashboard-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onClick: handleLogout,
                            variant: "secondary",
                            children: "Déconnexion"
                        }, void 0, false, {
                            fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "dashboard-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "welcome-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: [
                                        "Bienvenue, ",
                                        user?.name || user?.email,
                                        " !"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Gérez vos œuvres d'art 3D."
                                }, void 0, false, {
                                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "artwork-section",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$ArtworkForm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onSuccess: handleArtworkCreated
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "artwork-section",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$components$2f$ArtworkList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                refreshTrigger: refreshTrigger
                            }, void 0, false, {
                                fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/app/dashboard/page.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "F8QznlXq1cBVzADXNb/UzMzOaCs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=Developer_projet-final-web-service-babisous_web_094d05b3._.js.map