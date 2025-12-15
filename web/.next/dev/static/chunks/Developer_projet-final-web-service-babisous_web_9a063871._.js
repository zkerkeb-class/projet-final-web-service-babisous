(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/projet-final-web-service-babisous/web/lib/api/client.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * API Client
 * Gère toutes les requêtes HTTP vers le backend
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = ("TURBOPACK compile-time value", "http://localhost:3000/api") || "http://localhost:3000/api";
class ApiClient {
    constructor(baseURL){
        this.baseURL = baseURL;
    }
    /**
   * Récupère le token d'authentification du localStorage
   */ getAuthToken() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return localStorage.getItem("auth_token");
    }
    /**
   * Sauvegarde le token d'authentification dans le localStorage
   */ setAuthToken(token) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        localStorage.setItem("auth_token", token);
    }
    /**
   * Supprime le token d'authentification du localStorage
   */ clearAuthToken() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        localStorage.removeItem("auth_token");
    }
    /**
   * Construit les headers pour les requêtes
   */ getHeaders(authenticated = false) {
        const headers = {
            "Content-Type": "application/json"
        };
        if (authenticated) {
            const token = this.getAuthToken();
            if (token) {
                headers.Authorization = `Bearer ${token}`;
            }
        }
        return headers;
    }
    /**
   * Gère les erreurs des réponses HTTP
   */ async handleResponse(response) {
        const data = await response.json();
        if (!response.ok) {
            const error = new Error(data.error || "Une erreur est survenue");
            error.status = response.status;
            error.data = data;
            throw error;
        }
        return data;
    }
    /**
   * Requête GET
   */ async get(endpoint, authenticated = false) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: "GET",
            headers: this.getHeaders(authenticated)
        });
        return this.handleResponse(response);
    }
    /**
   * Requête POST
   */ async post(endpoint, body, authenticated = false) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: "POST",
            headers: this.getHeaders(authenticated),
            body: JSON.stringify(body)
        });
        return this.handleResponse(response);
    }
    /**
   * Requête PUT
   */ async put(endpoint, body, authenticated = false) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: "PUT",
            headers: this.getHeaders(authenticated),
            body: JSON.stringify(body)
        });
        return this.handleResponse(response);
    }
    /**
   * Requête DELETE
   */ async delete(endpoint, authenticated = false) {
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            method: "DELETE",
            headers: this.getHeaders(authenticated)
        });
        return this.handleResponse(response);
    }
}
// Export d'une instance unique (Singleton)
const apiClient = new ApiClient(API_URL);
const __TURBOPACK__default__export__ = apiClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/lib/services/authService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Service d'Authentification
 * Gère toutes les opérations d'authentification
 */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/lib/api/client.js [app-client] (ecmascript)");
;
class AuthService {
    /**
   * Inscription d'un nouvel utilisateur
   */ async register(email, password, name) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/register", {
            email,
            password,
            name
        });
        if (response.success && response.data.token) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAuthToken(response.data.token);
        }
        return response.data;
    }
    /**
   * Connexion d'un utilisateur
   */ async login(email, password) {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/login", {
            email,
            password
        });
        if (response.success && response.data.token) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].setAuthToken(response.data.token);
        }
        return response.data;
    }
    /**
   * Déconnexion d'un utilisateur
   */ logout() {
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].clearAuthToken();
    }
    /**
   * Récupère l'utilisateur connecté
   */ async getCurrentUser() {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/auth/me", true);
            return response.data;
        } catch (error) {
            // Si le token est invalide, on déconnecte l'utilisateur
            if (error.status === 401) {
                this.logout();
            }
            throw error;
        }
    }
    /**
   * Vérifie si l'utilisateur est authentifié
   */ isAuthenticated() {
        return !!__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAuthToken();
    }
    /**
   * Récupère le token d'authentification
   */ getToken() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$api$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getAuthToken();
    }
}
// Export d'une instance unique (Singleton)
const authService = new AuthService();
const __TURBOPACK__default__export__ = authService;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/projet-final-web-service-babisous/web/context/AuthContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$authService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/projet-final-web-service-babisous/web/lib/services/authService.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            loadUser();
        }
    }["AuthProvider.useEffect"], []);
    const loadUser = async ()=>{
        try {
            setLoading(true);
            setError(null);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$authService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAuthenticated()) {
                const userData = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$authService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getCurrentUser();
                setUser(userData);
            }
        } catch (err) {
            console.error("Erreur lors du chargement de l'utilisateur:", err);
            setError(err.message);
            setUser(null);
        } finally{
            setLoading(false);
        }
    };
    const login = async (email, password)=>{
        try {
            setLoading(true);
            setError(null);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$authService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].login(email, password);
            setUser(data.user);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const register = async (email, password, name)=>{
        try {
            setLoading(true);
            setError(null);
            const data = await __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$authService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].register(email, password, name);
            setUser(data.user);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally{
            setLoading(false);
        }
    };
    const logout = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$lib$2f$services$2f$authService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].logout();
        setUser(null);
        setError(null);
    };
    const value = {
        user,
        loading,
        error,
        login,
        register,
        logout,
        isAuthenticated: !!user
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Developer/projet-final-web-service-babisous/web/context/AuthContext.js",
        lineNumber: 85,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "PA9FxEY9xSNRrsSqaLtbYei52Hs=");
_c = AuthProvider;
function useAuth() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$projet$2d$final$2d$web$2d$service$2d$babisous$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (!context) {
        throw new Error("useAuth doit être utilisé dans un AuthProvider");
    }
    return context;
}
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Developer_projet-final-web-service-babisous_web_9a063871._.js.map