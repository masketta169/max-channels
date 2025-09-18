import { _ as __nuxt_component_0 } from './nuxt-link-BE05uIrA.mjs';
import { ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './phone-eaygTX5U.mjs';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const form = ref({
      email: "",
      password: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-page" }, _attrs))} data-v-379e7592><div class="auth-page__left" data-v-379e7592><h1 class="auth-page__left-title" data-v-379e7592>Регистрация</h1><div class="auth-page__left-line-container" data-v-379e7592><div class="auth-page__left-line" data-v-379e7592></div><span data-v-379e7592>по почте</span><div class="auth-page__left-line" data-v-379e7592></div></div><form class="auth-page__left-form" data-v-379e7592><label for="email" class="auth-page__left-label" data-v-379e7592><svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-379e7592><path d="M0 4C0 1.92893 1.67893 0.25 3.75 0.25H26.25C28.3211 0.25 30 1.92893 30 4V19C30 21.0711 28.3211 22.75 26.25 22.75H3.75C1.67893 22.75 0 21.0711 0 19V4ZM3.75 2.125C2.71447 2.125 1.875 2.96447 1.875 4V4.4067L15 12.2817L28.125 4.4067V4C28.125 2.96447 27.2855 2.125 26.25 2.125H3.75ZM28.125 6.5933L19.2974 11.8899L28.125 17.3223V6.5933ZM28.0617 19.4849L17.4859 12.9767L15 14.4683L12.5141 12.9767L1.93831 19.4849C2.15202 20.2854 2.88216 20.875 3.75 20.875H26.25C27.1178 20.875 27.848 20.2854 28.0617 19.4849ZM1.875 17.3223L10.7026 11.8899L1.875 6.5933V17.3223Z" fill="#2D31A6" fill-opacity="0.2" data-v-379e7592></path></svg><input type="email" placeholder="Email" class="auth-page__left-input"${ssrRenderAttr("value", form.value.email)} data-v-379e7592></label><label for="password" class="auth-page__left-label" data-v-379e7592><svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-379e7592><path d="M2.54417 7.0217C1.75527 14.4622 4.17467 20.012 7.08656 23.7301C8.59187 25.6521 10.2279 27.0846 11.6198 28.0426C12.3153 28.5213 12.9598 28.8885 13.5072 29.1399C14.0129 29.3723 14.554 29.5625 15.0001 29.5625C15.4462 29.5625 15.9873 29.3723 16.493 29.1399C17.0404 28.8885 17.6849 28.5213 18.3804 28.0426C19.254 27.4414 20.2237 26.6532 21.1969 25.6744L19.8711 24.3486C18.9815 25.2437 18.1003 25.9592 17.3173 26.4981C16.6941 26.9271 16.1431 27.2373 15.7102 27.4362C15.4935 27.5358 15.3162 27.6029 15.1816 27.6436C15.0707 27.6771 15.0136 27.685 15.0001 27.6869C14.9865 27.685 14.9295 27.6771 14.8186 27.6436C14.684 27.6029 14.5067 27.5358 14.29 27.4362C13.857 27.2373 13.3061 26.9271 12.6829 26.4981C11.4374 25.6409 9.94347 24.3369 8.56272 22.574C6.11598 19.4498 4.02171 14.8841 4.29191 8.76945L2.54417 7.0217Z" fill="#2D31A6" fill-opacity="0.2" data-v-379e7592></path><path d="M23.2678 19.7904C25.0895 16.4433 26.2576 12.0103 25.4949 6.42333C25.4523 6.11182 25.2259 5.83921 24.9033 5.73649C23.731 5.36313 21.7503 4.75136 19.7944 4.2339C17.7947 3.70482 15.9561 3.3125 15.0001 3.3125C14.044 3.3125 12.2055 3.70482 10.2058 4.2339C9.54719 4.40814 8.8858 4.59307 8.2534 4.77599L6.74325 3.26583C7.66485 2.99032 8.6975 2.69343 9.72619 2.42126C11.6816 1.90392 13.7583 1.4375 15.0001 1.4375C16.2419 1.4375 18.3186 1.90392 20.274 2.42126C22.2733 2.95022 24.2875 3.57255 25.4723 3.94991C26.4611 4.26483 27.209 5.11764 27.3526 6.1697C28.2115 12.4602 26.7922 17.4481 24.6448 21.1674L23.2678 19.7904Z" fill="#2D31A6" fill-opacity="0.2" data-v-379e7592></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.5872 27.4129L1.21216 3.03786L2.53798 1.71204L26.913 26.087L25.5872 27.4129Z" fill="#2D31A6" fill-opacity="0.2" data-v-379e7592></path></svg><input type="password" placeholder="Пароль" class="auth-page__left-input"${ssrRenderAttr("value", form.value.password)} data-v-379e7592></label><button type="submit" class="auth-page__left-button" data-v-379e7592>Войти</button></form><div class="auth-page__left-bottom" data-v-379e7592><span data-v-379e7592>Нет аккаунта?</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/register",
        class: "auth-page__left-bottom-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Создать аккаунт`);
          } else {
            return [
              createTextVNode("Создать аккаунт")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="auth-page__right" data-v-379e7592><img${ssrRenderAttr("src", _imports_0)} alt="auth-page-left" class="auth-page__right-image" data-v-379e7592><img${ssrRenderAttr("src", _imports_1)} alt="auth-page-left" class="auth-page__right-image" data-v-379e7592></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-379e7592"]]);

export { register as default };
//# sourceMappingURL=register-BJukFPWN.mjs.map
