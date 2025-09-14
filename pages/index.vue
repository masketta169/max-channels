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
    { name: 'description', content: 'Discover recommended chats, channels and bots in the MAX community. Join thousands of users in popular communities.' },
    { name: 'keywords', content: 'MAX, chats, channels, bots, community, telegram' }
  ]
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