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
  return resources.value.filter(resource => resource.type === 'CHAT' && !resource.isRecommended).slice(0, 5);
});
const channelsRecent = computed(() => {
  return resources.value.filter(resource => resource.type === 'CHANNEL' && !resource.isRecommended).slice(0, 5);
});
const botsRecent = computed(() => {
  return resources.value.filter(resource => resource.type === 'BOT' && !resource.isRecommended).slice(0, 5);
});

useHead({
  title: 'Список рекомендованных чатов, каналов и ботов',
  meta: [
    { name: 'description', content: 'Подборка лучших чатов, каналов и ботов MAX. Присоединяйтесь к популярным сообществам и находите новое.' },
    { name: 'keywords', content: 'мессенджер MAX, мессенджер макс, каталог ботов max, каталог чатов max, каталог мини-приложений max, новости max, боты для мессенджера, чаты в max, mini apps макс, статьи про MAX' },

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
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Рекомендованные чаты, каналы и боты MAX Messenger",
        "description": "Подборка лучших сообществ и ботов в мессенджере MAX",
        "url": "https://max-community.ru/",
        "numberOfItems": 50,
        "itemListOrder": "Descending",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Топ чаты MAX Messenger"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Лучшие каналы MAX Messenger"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Полезные боты MAX Messenger"
          }
        ]
      })
    }
  ]
})


useSeoMeta({
  title: 'Лучшие чаты, каналы и боты MAX Messenger | Рекомендации 2024',
  description: 'Топ рекомендованных чатов, каналов и ботов в мессенджере MAX. Присоединяйтесь к популярным сообществам, найдите интересные беседы и полезных ботов.',
  keywords: 'MAX Messenger, мессенджер MAX, Макс Мессенджер, приложение MAX, MAX app, скачать MAX, MAX для Android, MAX для iOS, MAX на ПК, MAX для Windows, MAX для Mac, регистрация в MAX, аккаунт MAX, войти в MAX, MAX войти, MAX логин, каналы MAX, каналы в MAX, топ каналы MAX, популярные каналы MAX, каталог каналов MAX, поиск каналов MAX, создать канал в MAX, продвижение каналов MAX, подписчики в MAX, статистика каналов MAX, монетизация каналов MAX, боты MAX, боты в MAX, каталог ботов MAX, создать бота MAX, разработка ботов MAX, API ботов MAX, полезные боты MAX, бизнес боты MAX, чаты MAX, чаты в MAX, групповые чаты MAX, секретные чаты MAX, видеочаты MAX, голосовые чаты MAX, сообщества MAX, группы в MAX, создание групп MAX, управление группами MAX, мини-приложения MAX, mini apps MAX, разработка mini apps MAX, каталог мини-приложений MAX, игры в MAX, стикеры MAX, скачать стикеры MAX, создание стикеров MAX, стикерпаки MAX, безопасность MAX, шифрование MAX, конфиденциальность в MAX, защита данных MAX, приватность MAX, функции MAX, новости MAX, обновления MAX, история MAX, основатели MAX, команда MAX, инвестиции MAX, статистика MAX, пользователи MAX, аудитория MAX, демография MAX, страны MAX, реклама в MAX, продвижение в MAX, маркетинг в MAX, таргетированная реклама MAX, бизнес в MAX, коммерция в MAX, магазины в MAX, платежи в MAX, перевод денег MAX, криптовалюты в MAX, интеграции MAX, API MAX, разработка под MAX, документация MAX, партнерская программа MAX, сообщество разработчиков MAX, вакансии MAX, карьера в MAX, обучение MAX, руководство MAX, советы по MAX, хитрости MAX, лайфхаки MAX, аналоги MAX, сравнение мессенджеров, MAX vs Telegram, MAX vs WhatsApp, MAX vs Viber, преимущества MAX, недостатки MAX, отзывы о MAX, рейтинг MAX, будущее MAX, перспективы MAX, тенденции MAX, нововведения MAX, MAX для бизнеса, MAX для образования, MAX для развлечений, MAX для новостей, MAX для спорта, MAX для игр, MAX для музыки, MAX для видео, MAX для блогеров, MAX для журналистов, MAX для сообществ, MAX для благотворительности, MAX Web, веб-версия MAX, десктопная версия MAX, мобильное приложение MAX, техническая поддержка MAX, помощь по MAX, вопросы по MAX, форум MAX, блог MAX, события MAX, вебинары MAX, конкурсы MAX, розыгрыши MAX, официальный MAX, скачать MAX бесплатно, установка MAX, настройки MAX, персонализация MAX, темы MAX, оформление MAX, уведомления MAX, звуки MAX, контакты MAX, импорт контактов в MAX, резервное копирование MAX, синхронизация MAX, облачное хранилище MAX, лимиты MAX, ограничения MAX, тарифы MAX, премиум функции MAX, MAX Pro, MAX Premium, бесплатный мессенджер, русский мессенджер, отечественный мессенджер, российский мессенджер, кроссплатформенный мессенджер, быстрый мессенджер, безопасный мессенджер, приватный мессенджер, современный мессенджер, инновационный мессенджер',
  ogTitle: 'Лучшие чаты, каналы и боты MAX Messenger | Рекомендации 2024',
  ogDescription: 'Топ рекомендованных чатов, каналов и ботов в мессенджере MAX. Присоединяйтесь к популярным сообществам.',
  ogUrl: 'https://max-community.ru/',
  ogSiteName: 'MAX Community',
  ogImage: 'https://max-community.ru/og-image.jpg',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Лучшие чаты, каналы и боты MAX Messenger',
  twitterDescription: 'Топ рекомендованных чатов, каналов и ботов в мессенджере MAX.'
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