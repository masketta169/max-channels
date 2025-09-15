import { jwtDecode } from 'jwt-decode';
import { e as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useCookie } from './cookie-CI0eADt1.mjs';
import 'vue';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'better-sqlite3';
import 'vue-router';
import 'vue/server-renderer';

const admin = defineNuxtRouteMiddleware((to) => {
  const token = useCookie("accessToken");
  if (!token.value) {
    console.log("[ADMIN MIDDLEWARE] Нет токена, редирект на /");
    return navigateTo("/");
  }
  try {
    const decoded = jwtDecode(token.value);
    console.log("[ADMIN MIDDLEWARE] Декодированный токен:", decoded);
    if (decoded.role !== "ADMIN") {
      console.log("[ADMIN MIDDLEWARE] Роль не ADMIN, редирект на /");
      return navigateTo("/");
    }
  } catch (e) {
    console.error("[ADMIN MIDDLEWARE] Ошибка парсинга токена:", e);
    return navigateTo("/");
  }
});

export { admin as default };
//# sourceMappingURL=admin-B_7SiB7i.mjs.map
