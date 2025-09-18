import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Max Community',
      meta: [
        { name: 'description', content: 'Max Community' },
        { name: 'keywords', content: 'telegram, чаты, каналы, боты, MAX community, рекомендованные' },
        { name: 'author', content: 'Max Community' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'google', content: 'notranslate' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },  
      ],
      // script: [
      //   {
      //     innerHTML: `(function(m,e,t,r,i,k,a){
      //       m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      //       m[i].l=1*new Date();
      //       for (var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return}}
      //       k=e.createElement(t),a=e.getElementsByTagName(t)[0];
      //       k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
      //     })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104187556','ym');
      //     ym(104187556,'init',{
      //       ssr:true,
      //       webvisor:true,
      //       clickmap:true,
      //       ecommerce:"dataLayer",
      //       accurateTrackBounce:true,
      //       trackLinks:true
      //     });`
      //   },
      //   {
      //     innerHTML: `window.yaContextCb=window.yaContextCb||[]`
      //   },
      //   {
      //     src: 'https://yandex.ru/ads/system/context.js',
      //     async: true
      //   }
      // ],
      // noscript: [
      //   {
      //     innerHTML: `<div><img src="https://mc.yandex.ru/watch/104187556" style="position:absolute; left:-9999px;" alt="" /></div>`
      //   }
      // ]
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  css: ['@/assets/scss/main.scss'],
  modules: ['@nuxt/content'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variables.scss" as *;\n@use "@/assets/scss/_fonts.scss" as *;',
        }
      },
    }
  }
})