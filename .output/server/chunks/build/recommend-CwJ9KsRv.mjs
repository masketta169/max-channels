import { ref, computed, mergeProps, defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { r as resourceService } from './resources-7uNnzLjq.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './composables-DOlutY6z.mjs';
import './index-BnTN1Eq5.mjs';
import 'axios';
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
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RecommendedCard",
  __ssrInlineRender: true,
  props: {
    resource: {}
  },
  emits: ["changeRecommended"],
  setup(__props, { emit: __emit }) {
    ref({
      PENDING: "Ожидание",
      APPROVED: "Одобрено",
      REJECTED: "Отклонено"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "application-card" }, _attrs))} data-v-8299b877><div class="application-card__header" data-v-8299b877><div class="application-card__header-left" data-v-8299b877><span class="${ssrRenderClass([_ctx.resource.type, "application-card__type"])}" data-v-8299b877>${ssrInterpolate(_ctx.resource.type)}</span><span class="${ssrRenderClass([_ctx.resource.isRecommended ? "approved" : "pending", "application-card__status"])}" data-v-8299b877>${ssrInterpolate(_ctx.resource.isRecommended ? "Рекомендован" : "Не рекомендован")}</span></div></div><div class="application-card__avatar-container" data-v-8299b877><img${ssrRenderAttr("src", `https://max-community.ru${_ctx.resource.avatarUrl}`)} alt="Application Avatar" class="application-card__avatar" data-v-8299b877><h3 class="application-card__title" data-v-8299b877>${ssrInterpolate(_ctx.resource.title)}</h3></div><p class="application-card__description" data-v-8299b877>${ssrInterpolate(_ctx.resource.description)}</p><div class="application-card__footer" data-v-8299b877><button class="application-card__button approve" data-v-8299b877>Сделать рекомендованным</button><button class="application-card__button reject" data-v-8299b877>Убрать из рекомендованных</button></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RecommendedCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const RecommendedCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-8299b877"]]), { __name: "RecommendedCard" });
const _sfc_main = {
  __name: "recommend",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Рекомендации"
    });
    const resources = ref([]);
    const chatsRecommended = computed(() => {
      return resources.value.filter((resource) => resource.type === "CHAT");
    });
    const channelsRecommended = computed(() => {
      return resources.value.filter((resource) => resource.type === "CHANNEL");
    });
    const botsRecommended = computed(() => {
      return resources.value.filter((resource) => resource.type === "BOT");
    });
    const fetchResources = async () => {
      resources.value = await resourceService.getAll().then((res) => res.data);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-recommend-page" }, _attrs))} data-v-03c5c2b4><h1 data-v-03c5c2b4>Рекомендации</h1><div class="recommended-cards" data-v-03c5c2b4><div class="recommended-cards__chats" data-v-03c5c2b4><h2 data-v-03c5c2b4>Чаты</h2><!--[-->`);
      ssrRenderList(chatsRecommended.value, (chat) => {
        _push(ssrRenderComponent(RecommendedCard, {
          key: chat.id,
          resource: chat,
          onChangeRecommended: fetchResources
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="recommended-cards__channels" data-v-03c5c2b4><h2 data-v-03c5c2b4>Каналы</h2><!--[-->`);
      ssrRenderList(channelsRecommended.value, (channel) => {
        _push(ssrRenderComponent(RecommendedCard, {
          key: channel.id,
          resource: channel,
          onChangeRecommended: fetchResources
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="recommended-cards__bots" data-v-03c5c2b4><h2 data-v-03c5c2b4>Боты</h2><!--[-->`);
      ssrRenderList(botsRecommended.value, (bot) => {
        _push(ssrRenderComponent(RecommendedCard, {
          key: bot.id,
          resource: bot,
          onChangeRecommended: fetchResources
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/recommend.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const recommend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-03c5c2b4"]]);

export { recommend as default };
//# sourceMappingURL=recommend-CwJ9KsRv.mjs.map
