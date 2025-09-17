import { jwtDecode } from 'jwt-decode'

export default defineNuxtRouteMiddleware((to) => {
  let token: string | undefined;

  if (process.server) {
    const event = useRequestEvent();
    const cookies = event?.req?.headers?.cookie || '';
    token = cookies
      .split(';')
      .map(c => c.trim())
      .find(c => c.startsWith('accessToken='))
      ?.split('=')[1] ?? undefined;
  } else {
    token = useCookie('accessToken').value ?? undefined;
  }

  console.log('token', token);

  if (!token) return navigateTo('/');

  try {
    const decoded = jwtDecode<{ role?: string }>(token);
    if (decoded.role !== 'ADMIN') return navigateTo('/');
  } catch (e) {
    return navigateTo('/');
  }
});
