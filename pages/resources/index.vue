<template>
  <div class="page">
    <AppHeader />

    <main class="main">
        <div class="profile__tabs">
            <button class="profile__tab" :class="{'active': selectResources === 'CHANNEL'}" @click="selectResources = 'CHANNEL'">Каналы</button>
            <button class="profile__tab" :class="{'active': selectResources === 'CHAT'}" @click="selectResources = 'CHAT'">Чаты</button>
            <button class="profile__tab" :class="{'active': selectResources === 'BOT'}" @click="selectResources = 'BOT'">Боты</button>
        </div>


        <TogetherSection v-if="selectResources === 'CHANNEL'" :title="`Список всех ` + titleBlock" :list="chatsRecent" />
        <TogetherSection v-if="selectResources === 'CHAT'" :title="`Список всех ` + titleBlock" :list="channelsRecent" />
        <TogetherSection v-if="selectResources === 'BOT'" :title="`Список всех ` + titleBlock" :list="botsRecent" />
        <!-- <RecommendedSection title="Список недавно добавленных чатов, каналов и ботов" :chats="chatsRecent" :channels="channelsRecent" :bots="botsRecent" /> -->
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
import { onMounted, computed } from 'vue'


const categories = ref([]);
const resources = ref([]);

const NAME = {
    CHAT: 'чатов',
    CHANNEL: 'каналов',
    BOT: 'ботов'
}

const selectResources = ref('CHAT')

const titleBlock = computed(() => NAME[selectResources.value])

const chatsRecent = computed(() => {
  return resources.value.filter(resource => resource.type === 'CHAT');
});
const channelsRecent = computed(() => {
  return resources.value.filter(resource => resource.type === 'CHANNEL');
});
const botsRecent = computed(() => {
  return resources.value.filter(resource => resource.type === 'BOT');
});

const list = ref({
    CHAT: chatsRecent,
    CHANNEL: channelsRecent,
    BOT: botsRecent
})


useHead({
  title: 'Список всех чатов, каналов и ботов',
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

// onMounted(() => {
//   if (window.yaContextCb) {
//     window.yaContextCb.push(() => {
//       Ya.Context.AdvManager.render({
//         blockId: 'R-A-17285874-1',
//         type: 'floorAd',
//         platform: 'desktop'
//       })
//     })
//   }
// })
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
  margin-top: 120px;
}


.profile{
    &__tabs {
        display: flex;
        gap: 10px;
    }

    &__tab {
        border: 1px solid #081028;
        color: #081028;
        border-radius: 10px;
        background-color: transparent;
        padding: 10px 20px;
        cursor: pointer;

        &:hover {
        background-color: #007bff;
        color: white;
        border: 1px solid #007bff;
        }

        &.active {
        border: 1px solid #007bff;
        color: #007bff;

        &:hover {
            background-color: #007bff;
            color: white;
            border: 1px solid #007bff;
        }
        }
    }
}
</style>