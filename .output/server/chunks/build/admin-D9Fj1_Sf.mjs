import { jwtDecode } from 'jwt-decode';
import { d as defineNuxtRouteMiddleware, e as useRequestEvent, n as navigateTo } from './server.mjs';
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
  let token;
  {
    const event = useRequestEvent();
    const cookies = event?.req?.headers?.cookie || "";
    token = cookies.split(";").map((c) => c.trim()).find((c) => c.startsWith("accessToken="))?.split("=")[1] ?? void 0;
  }
  console.log("token", token);
  if (!token) return navigateTo("/");
  try {
    const decoded = jwtDecode(token);
    if (decoded.role !== "ADMIN") return navigateTo("/");
  } catch (e) {
    return navigateTo("/");
  }
});

export { admin as default };
//# sourceMappingURL=admin-D9Fj1_Sf.mjs.map
