import { _ as __nuxt_component_0$2 } from './nuxt-link-BE05uIrA.mjs';
import { ref, computed, mergeProps, unref, defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { r as resourceService } from './resources-B3j368K5.mjs';
import { s as submissionService } from './submissions-Booo0X__.mjs';
import { u as useHead } from './composables-DOlutY6z.mjs';
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
import './index-h3rIohgo.mjs';
import 'axios';
import './cookie-CI0eADt1.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$6 = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const searchQuery = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "search" }, _attrs))} data-v-e7260aaa><input type="text" class="search__input" placeholder="Поиск чатов, каналов, ботов..."${ssrRenderAttr("value", unref(searchQuery))} data-v-e7260aaa><button class="search__btn" data-v-e7260aaa><svg class="search__icon" viewBox="0 0 24 24" data-v-e7260aaa><path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" data-v-e7260aaa></path></svg></button></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SearchInput = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-e7260aaa"]]);
const _sfc_main$5 = {
  __name: "AuthButtons",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "auth-buttons" }, _attrs))} data-v-e518b32f><button class="auth-buttons__btn auth-buttons__btn--login" data-v-e518b32f> Войти </button><button class="auth-buttons__btn auth-buttons__btn--register" data-v-e518b32f> Регистрация </button></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AuthButtons.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AuthButtons = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e518b32f"]]);
const _sfc_main$4 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-e7d037de><div class="header__container container" data-v-e7d037de><div class="header__logo" data-v-e7d037de>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "header__logo-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`MAX Community`);
          } else {
            return [
              createTextVNode("MAX Community")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="header__search" data-v-e7d037de>`);
      _push(ssrRenderComponent(SearchInput, null, null, _parent));
      _push(`</div><div class="header__auth" data-v-e7d037de>`);
      _push(ssrRenderComponent(AuthButtons, null, null, _parent));
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e7d037de"]]);
const _sfc_main$3 = {
  __name: "ItemCard",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))} data-v-88b868e3><div class="card__content" data-v-88b868e3><img${ssrRenderAttr("src", `http://localhost:3001${__props.item.avatarUrl}`)} alt="Card Image" class="card__image" data-v-88b868e3><div class="card__meta" data-v-88b868e3><h4 class="card__title" data-v-88b868e3>${ssrInterpolate(__props.item.title)}</h4><p class="card__description" data-v-88b868e3>${ssrInterpolate(__props.item.description)}</p> ${ssrInterpolate(console.log(__props.item.url))} `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.item.url,
        class: "card__link",
        target: "_blank",
        rel: "noopener noreferrer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Присоединиться `);
          } else {
            return [
              createTextVNode(" Присоединиться ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></article>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ItemCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-88b868e3"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "RecommendedSection",
  __ssrInlineRender: true,
  props: {
    title: {},
    chats: {},
    channels: {},
    bots: {}
  },
  setup(__props) {
    const props = __props;
    const recommended = computed(() => ({
      chats: props.chats || [],
      channels: props.channels || [],
      bots: props.bots || []
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ItemCard = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "recommended" }, _attrs))} data-v-4f5a7efa><div class="container" data-v-4f5a7efa><h2 class="recommended__title" data-v-4f5a7efa>${ssrInterpolate(props.title)}</h2><div class="recommended__grid" data-v-4f5a7efa><div class="recommended__category" data-v-4f5a7efa><h3 class="recommended__subtitle" data-v-4f5a7efa>Чаты</h3><div class="recommended__items" data-v-4f5a7efa><!--[-->`);
      ssrRenderList(unref(recommended).chats, (item) => {
        _push(ssrRenderComponent(_component_ItemCard, {
          key: item.id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="recommended__category" data-v-4f5a7efa><h3 class="recommended__subtitle" data-v-4f5a7efa>Каналы</h3><div class="recommended__items" data-v-4f5a7efa><!--[-->`);
      ssrRenderList(unref(recommended).channels, (item) => {
        _push(ssrRenderComponent(_component_ItemCard, {
          key: item.id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="recommended__category" data-v-4f5a7efa><h3 class="recommended__subtitle" data-v-4f5a7efa>Боты</h3><div class="recommended__items" data-v-4f5a7efa><!--[-->`);
      ssrRenderList(unref(recommended).bots, (item) => {
        _push(ssrRenderComponent(_component_ItemCard, {
          key: item.id,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecommendedSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-4f5a7efa"]]), { __name: "RecommendedSection" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-b89d6eba><div class="container" data-v-b89d6eba><div class="footer__content" data-v-b89d6eba><div class="footer__section" data-v-b89d6eba><h3 class="footer__title" data-v-b89d6eba>MAX Community</h3><p class="footer__description" data-v-b89d6eba> Лучший ресурс для поиска чатов, каналов и ботов для платформы MAX. </p></div><div class="footer__section" data-v-b89d6eba><h3 class="footer__title" data-v-b89d6eba>Quick Links</h3><ul class="footer__links" data-v-b89d6eba><li data-v-b89d6eba>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "footer__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Главная`);
      } else {
        return [
          createTextVNode("Главная")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b89d6eba>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/about",
    class: "footer__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`О проекте`);
      } else {
        return [
          createTextVNode("О проекте")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-b89d6eba>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/contact",
    class: "footer__link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Контакты`);
      } else {
        return [
          createTextVNode("Контакты")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer__section" data-v-b89d6eba><h3 class="footer__title" data-v-b89d6eba>Контакты</h3><ul class="footer__contacts" data-v-b89d6eba><li data-v-b89d6eba>Email: learnscriptmail@gmail.com</li><li data-v-b89d6eba>Telegram: @learnscrip</li></ul></div></div><div class="footer__copyright" data-v-b89d6eba> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} MAX Community. Все права защищены. </div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b89d6eba"]]), { __name: "Footer" });
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = ref([]);
    const resources = ref([]);
    const chatsRecommended = computed(() => {
      return resources.value.filter((resource) => resource.type === "CHAT" && resource.isRecommended).slice(0, 5);
    });
    const channelsRecommended = computed(() => {
      return resources.value.filter((resource) => resource.type === "CHANNEL" && resource.isRecommended).slice(0, 5);
    });
    const botsRecommended = computed(() => {
      return resources.value.filter((resource) => resource.type === "BOT" && resource.isRecommended).slice(0, 5);
    });
    const chatsRecent = computed(() => {
      return resources.value.reverse().filter((resource) => resource.type === "CHAT" && !resource.isRecommended).slice(0, 5);
    });
    const channelsRecent = computed(() => {
      return resources.value.reverse().filter((resource) => resource.type === "CHANNEL" && !resource.isRecommended).slice(0, 5);
    });
    const botsRecent = computed(() => {
      return resources.value.reverse().filter((resource) => resource.type === "BOT" && !resource.isRecommended).slice(0, 5);
    });
    useHead({
      title: "Список рекомендованных чатов, каналов и ботов",
      meta: [
        { name: "description", content: "Discover recommended chats, channels and bots in the MAX community. Join thousands of users in popular communities." },
        { name: "keywords", content: "MAX, chats, channels, bots, community, telegram" }
      ]
    });
    const fetchResources = async () => {
      const resourcesResponse = await resourceService.getAll();
      const categoriesResponse = await submissionService.getCategories();
      resources.value = resourcesResponse.data;
      categories.value = categoriesResponse.data;
    };
    fetchResources();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppHeader = __nuxt_component_0$1;
      const _component_RecommendedSection = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page" }, _attrs))} data-v-9f3a4936>`);
      _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
      _push(`<main class="main" data-v-9f3a4936>`);
      _push(ssrRenderComponent(_component_RecommendedSection, {
        title: "Список рекомендованных чатов, каналов и ботов",
        chats: unref(chatsRecommended),
        channels: unref(channelsRecommended),
        bots: unref(botsRecommended)
      }, null, _parent));
      _push(ssrRenderComponent(_component_RecommendedSection, {
        title: "Список недавно добавленных чатов, каналов и ботов",
        chats: unref(chatsRecent),
        channels: unref(channelsRecent),
        bots: unref(botsRecent)
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9f3a4936"]]);

export { index as default };
//# sourceMappingURL=index-Df_8ZAeW.mjs.map
