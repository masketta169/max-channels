import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "StatusApplication",
  __ssrInlineRender: true,
  props: {
    status: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["status-application", _ctx.status],
        style: { backgroundColor: _ctx.status }
      }, _attrs))} data-v-c88f29b8>${ssrInterpolate(_ctx.status)}</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatusApplication.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const StatusApplication = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main, [["__scopeId", "data-v-c88f29b8"]]), { __name: "StatusApplication" });

export { StatusApplication as S };
//# sourceMappingURL=StatusApplication-BQkfdk5T.mjs.map
