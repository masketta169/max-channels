import { defineComponent, ref, unref, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain } from 'vue/server-renderer';
import { s as submissionService } from './submissions-BXZSUo63.mjs';
import { S as StatusApplication } from './StatusApplication-BQkfdk5T.mjs';
import { useRouter } from 'vue-router';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FormCreateSubmission",
  __ssrInlineRender: true,
  emits: ["cancelSubmit", "createSubmission"],
  setup(__props, { emit: __emit }) {
    const form = ref({
      title: "",
      description: "",
      type: "CHANNEL",
      url: "",
      avatarUrl: null,
      slug: "",
      categoryIds: []
    });
    const categories = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "form-create-submission-container" }, _attrs))} data-v-3a6eca5e><div class="form-create-submission" data-v-3a6eca5e><h1 class="form-create-submission__title" data-v-3a6eca5e>Создание заявки</h1><form class="form-create-submission__form" data-v-3a6eca5e><label data-v-3a6eca5e><span data-v-3a6eca5e>Название</span><div class="form-create-submission__form-input" data-v-3a6eca5e><input type="text"${ssrRenderAttr("value", unref(form).title)} placeholder="Напишите название ресурса" data-v-3a6eca5e></div></label><label data-v-3a6eca5e><span data-v-3a6eca5e>Описание</span><div class="form-create-submission__form-input" data-v-3a6eca5e><input type="text"${ssrRenderAttr("value", unref(form).description)} placeholder="Напишите описание ресурса" data-v-3a6eca5e></div></label><label data-v-3a6eca5e><span data-v-3a6eca5e>Тип ресурса</span><div class="form-create-submission__form-radios" data-v-3a6eca5e><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "CHANNEL")) ? " checked" : ""} type="radio" value="CHANNEL" data-v-3a6eca5e>Канал <input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "CHAT")) ? " checked" : ""} type="radio" value="CHAT" data-v-3a6eca5e>Чат <input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(form).type, "BOT")) ? " checked" : ""} type="radio" value="BOT" data-v-3a6eca5e>Бот </div></label><label data-v-3a6eca5e><span data-v-3a6eca5e>Ссылка на ресурс</span><div class="form-create-submission__form-input" data-v-3a6eca5e><input type="text"${ssrRenderAttr("value", unref(form).url)} placeholder="Вставьте ссылку на ресурс(https://max.ru/ваш_ресурс)" data-v-3a6eca5e></div></label><label data-v-3a6eca5e><span data-v-3a6eca5e>Аватар ресурса</span><div class="form-create-submission__form-input" data-v-3a6eca5e><input type="file" accept="image/*" placeholder="Прикрепите аватар ресурса" data-v-3a6eca5e></div></label><label data-v-3a6eca5e><span data-v-3a6eca5e>Уникальное имя канала</span><div class="form-create-submission__form-input" data-v-3a6eca5e><input type="text"${ssrRenderAttr("value", unref(form).slug)} placeholder="Вставьте уникальное имя канала(например: my-channel)" data-v-3a6eca5e></div></label><label data-v-3a6eca5e><span data-v-3a6eca5e>Категория</span><div class="form-create-submission__form-input" data-v-3a6eca5e><div class="form-create-submission__form-select" data-v-3a6eca5e><!--[-->`);
      ssrRenderList(unref(categories).data, (category) => {
        _push(`<div class="form-create-submission__form-select-item" data-v-3a6eca5e><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).categoryIds) ? ssrLooseContain(unref(form).categoryIds, category.id) : unref(form).categoryIds) ? " checked" : ""}${ssrRenderAttr("value", category.id)} data-v-3a6eca5e><span data-v-3a6eca5e>${ssrInterpolate(category.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></label><div class="form-create-submission__form-buttons" data-v-3a6eca5e><button class="form-create-submission__form-button-cancel" data-v-3a6eca5e>Отмена</button><button type="submit" data-v-3a6eca5e>Создать</button></div></form></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormCreateSubmission.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FormCreateSubmission = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-3a6eca5e"]]), { __name: "FormCreateSubmission" });
var Type = /* @__PURE__ */ ((Type2) => {
  Type2["CHANNEL"] = "КАНАЛ";
  Type2["BOT"] = "БОТ";
  Type2["CHAT"] = "ЧАТ";
  return Type2;
})(Type || {});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SubmissionCardProfile",
  __ssrInlineRender: true,
  props: {
    submission: {}
  },
  setup(__props) {
    useRouter();
    ref({
      PENDING: "Ожидание",
      APPROVED: "Одобрено",
      REJECTED: "Отклонено"
    });
    const type = computed(() => {
      return Type[props.submission.type];
    });
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "application-card" }, _attrs))} data-v-92238f1f><div class="application-card__header" data-v-92238f1f><div class="application-card__header-left" data-v-92238f1f><span class="${ssrRenderClass([_ctx.submission.type, "application-card__type"])}" data-v-92238f1f>${ssrInterpolate(unref(type))}</span>`);
      _push(ssrRenderComponent(StatusApplication, {
        status: _ctx.submission.status
      }, null, _parent));
      _push(`</div></div><div class="application-card__avatar-container" data-v-92238f1f><img${ssrRenderAttr("src", `https://max-community.ru${_ctx.submission.avatarUrl}`)} alt="Application Avatar" class="application-card__avatar" data-v-92238f1f><h3 class="application-card__title" data-v-92238f1f>${ssrInterpolate(_ctx.submission.title)}</h3></div><p class="application-card__description" data-v-92238f1f>${ssrInterpolate(_ctx.submission.description)}</p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SubmissionCardProfile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SubmissionCardProfile = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["__scopeId", "data-v-92238f1f"]]), { __name: "SubmissionCardProfile" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "submissions",
  __ssrInlineRender: true,
  setup(__props) {
    const submissions2 = ref({
      PENDING: [],
      APPROVED: [],
      REJECTED: []
    });
    const status = ref("PENDING");
    const isCreateSubmission = ref(false);
    const handleCancelSubmit = () => {
      isCreateSubmission.value = false;
    };
    const getSubmissions = async () => {
      submissions2.value.PENDING = await submissionService.getPendingSubmissions().then((res) => res.data);
      submissions2.value.APPROVED = await submissionService.getApprovedSubmissions().then((res) => res.data);
      submissions2.value.REJECTED = await submissionService.getRejectedSubmissions().then((res) => res.data);
      submissions2.value.PENDING = submissions2.value.PENDING.reverse();
      submissions2.value.APPROVED = submissions2.value.APPROVED.reverse();
      submissions2.value.REJECTED = submissions2.value.REJECTED.reverse();
      handleCancelSubmit();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="profile__submissions-container" data-v-39a056f1><div class="profile__submissions-header" data-v-39a056f1><h1 data-v-39a056f1>Мои заявки</h1><div class="profile__tabs" data-v-39a056f1><button class="${ssrRenderClass([{ "active": unref(status) === "PENDING" }, "profile__tab"])}" data-v-39a056f1>В работе</button><button class="${ssrRenderClass([{ "active": unref(status) === "APPROVED" }, "profile__tab"])}" data-v-39a056f1>Принятые</button><button class="${ssrRenderClass([{ "active": unref(status) === "REJECTED" }, "profile__tab"])}" data-v-39a056f1>Отклоненные</button><button class="profile__button" data-v-39a056f1>Создать заявку</button></div></div><div class="profile__submissions" data-v-39a056f1><!--[-->`);
      ssrRenderList(unref(submissions2)[unref(status)], (submission) => {
        _push(ssrRenderComponent(SubmissionCardProfile, {
          submission,
          key: submission.id
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (unref(isCreateSubmission)) {
        _push(ssrRenderComponent(FormCreateSubmission, {
          onCancelSubmit: handleCancelSubmit,
          onCreateSubmission: getSubmissions
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/submissions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const submissions = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-39a056f1"]]);

export { submissions as default };
//# sourceMappingURL=submissions-CkEZ0qKy.mjs.map
