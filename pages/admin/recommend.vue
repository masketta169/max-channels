<template>
  <div class="admin-recommend-page">
    <h1>Рекомендации</h1>
    <div class="recommended-cards">
      <div class="recommended-cards__chats">
        <h2>Чаты</h2>
        <RecommendedCard v-for="chat in chatsRecommended" :key="chat.id" :resource="chat" @changeRecommended="fetchResources" />
      </div>
      <div class="recommended-cards__channels">
        <h2>Каналы</h2>
        <RecommendedCard v-for="channel in channelsRecommended" :key="channel.id" :resource="channel" @changeRecommended="fetchResources" />
      </div>
      <div class="recommended-cards__bots">
        <h2>Боты</h2>
        <RecommendedCard v-for="bot in botsRecommended" :key="bot.id" :resource="bot" @changeRecommended="fetchResources" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { resourceService } from '@/services/api/resources';
import RecommendedCard from '@/components/RecommendedCard.vue';
import { useHead } from '#app';
import { computed, ref, onMounted } from 'vue';

definePageMeta({
  middleware: 'admin',
  layout: 'admin',
});

useHead({
  title: 'Рекомендации',
});

const resources = ref([]);

const chatsRecommended = computed(() => {
  return resources.value.filter(resource => resource.type === 'CHAT')
});
const channelsRecommended = computed(() => {
  return resources.value.filter(resource => resource.type === 'CHANNEL')
});
const botsRecommended = computed(() => {
  return resources.value.filter(resource => resource.type === 'BOT')
});

const fetchResources = async () => {
  resources.value = await resourceService.getAll().then(res => res.data);
}

onMounted(async () => {
  await fetchResources();
});


</script>

<style scoped>

.admin-recommend-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #081028;
  color: #fff;
}

.recommended-cards {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
  overflow-y: auto;
}

</style>