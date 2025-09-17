<template>
  <div class="page">
    <AppHeader />
    
    <main class="main">
        <RecommendedSection title="Список рекомендованных чатов, каналов и ботов" :chats="chatsRecommended" :channels="channelsRecommended" :bots="botsRecommended" />
        <RecommendedSection title="Список недавно добавленных чатов, каналов и ботов" :chats="chatsRecent" :channels="channelsRecent" :bots="botsRecent" />
        <!-- <RecentSection /> -->
        <!-- <NewsFeed /> -->
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import recommendedData from '@/assets/data/recommended.json'
import { resourceService } from '@/services/api/resources';
import { submissionService } from '@/services/api/submissions';
// import type { CategoryResponse } from '@/services/api/submissions';
// import type { Resource } from '@/services/api/resources';
import { onMounted } from 'vue'


const categories = ref([]);
const resources = ref([]);

const chatsRecommended = computed(() => {
  return resources.value.filter(resource => resource.type === 'CHAT' && resource.isRecommended).slice(0, 5);
});
const channelsRecommended = computed(() => {
  return resources.value.filter(resource => resource.type === 'CHANNEL' && resource.isRecommended).slice(0, 5);
});
const botsRecommended = computed(() => {
  return resources.value.filter(resource => resource.type === 'BOT' && resource.isRecommended).slice(0, 5);
});

const chatsRecent = computed(() => {
  return resources.value.reverse().filter(resource => resource.type === 'CHAT' && !resource.isRecommended).slice(0, 5);
});
const channelsRecent = computed(() => {
  return resources.value.reverse().filter(resource => resource.type === 'CHANNEL' && !resource.isRecommended).slice(0, 5);
});
const botsRecent = computed(() => {
  return resources.value.reverse().filter(resource => resource.type === 'BOT' && !resource.isRecommended).slice(0, 5);
});

useHead({
  title: 'Список рекомендованных чатов, каналов и ботов',
  meta: [
    { name: 'description', content: 'Подборка лучших чатов, каналов и ботов Telegram от сообщества MAX. Присоединяйтесь к популярным сообществам и находите новое.' },
    { name: 'keywords', content: 'telegram, чаты, каналы, боты, MAX community, рекомендованные' },

    // Open Graph
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'Рекомендованные чаты, каналы и боты | MAX Community' },
    { property: 'og:description', content: 'Подборка лучших чатов, каналов и ботов Telegram от сообщества MAX.' },
    { property: 'og:url', content: 'https://max-community.ru/' },
    { property: 'og:site_name', content: 'MAX Community' },
  ],
  link: [
    { rel: 'canonical', href: 'https://max-community.ru/' }
  ],
})

definePageMeta({
  layout: 'default'
})

const fetchResources = async () => {
  const resourcesResponse = await resourceService.getAll();
  const categoriesResponse = await submissionService.getCategories();

  resources.value = resourcesResponse.data;
  categories.value = categoriesResponse.data;
}

fetchResources();

onMounted(() => {
  if (window.yaContextCb) {
    window.yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        blockId: 'R-A-17285874-1',
        type: 'floorAd',
        platform: 'desktop'
      })
    })
  }
})
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  padding: 0px 40px;
  margin-top: 100px;
}
</style>