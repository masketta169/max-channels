// middleware/admin.global.ts
import { jwtDecode } from "jwt-decode";
import { getCookie } from '@/utils/cookies'

export default defineNuxtRouteMiddleware((to) => {
  const token2 = getCookie("accessToken");

  const event = useRequestEvent();
  const cookies = event?.req?.headers?.cookie || "";

  const token = cookies
    .split(";")
    .map(c => c.trim())
    .find(c => c.startsWith("accessToken="))
    ?.split("=")[1];

  console.log('token', token);
  console.log('token2', token2);

  if (!token) {
    console.log("[ADMIN MIDDLEWARE] Нет токена, редирект на /");
    return navigateTo("/");
  }

  try {
    const decoded = jwtDecode<{ role?: string }>(token);
    // console.log(decoded);
    // console.log(decoded.role);
    // console.log(token)
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
