// middleware/admin.global.ts
import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie("accessToken");

  if (!token.value) {
    console.log("[ADMIN MIDDLEWARE] Нет токена, редирект на /");
    return navigateTo("/");
  }

  try {
    const decoded = jwtDecode<{ role?: string }>(token.value);
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
