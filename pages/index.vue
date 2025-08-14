<template>
  <div class="page">
    <AppHeader />
    
    <main class="main">
        <RecommendedSection title="Список рекомендованных чатов, каналов и ботов" :chats="recommendedData.chats" :channels="recommendedData.channels" :bots="recommendedData.bots" />
        <!-- <RecentSection /> -->
        <!-- <NewsFeed /> -->
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import recommendedData from '@/assets/data/recommended.json'


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