import { _ as __nuxt_component_0 } from './nuxt-link-BE05uIrA.mjs';
import { _ as _export_sfc, f as __nuxt_component_1 } from './server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-page" }, _attrs))} data-v-eb993f9f><div class="admin-page__content" data-v-eb993f9f><nav class="admin-page__nav" data-v-eb993f9f><ul class="admin-page__nav-list" data-v-eb993f9f><li class="admin-page__nav-item" data-v-eb993f9f>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/submissions",
    class: ["admin-page__nav-link", { "active": _ctx.$route.path === "/admin/submissions" }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Заявки`);
      } else {
        return [
          createTextVNode("Заявки")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="admin-page__nav-item" data-v-eb993f9f>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/categories",
    class: ["admin-page__nav-link", { "active": _ctx.$route.path === "/admin/categories" }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Категории`);
      } else {
        return [
          createTextVNode("Категории")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="admin-page__nav-item" data-v-eb993f9f>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/admin/recommend",
    class: ["admin-page__nav-link", { "active": _ctx.$route.path === "/admin/recommend" }]
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Рекомендации`);
      } else {
        return [
          createTextVNode("Рекомендации")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const admin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-eb993f9f"]]);

export { admin as default };
//# sourceMappingURL=admin-DnXFSoD7.mjs.map
