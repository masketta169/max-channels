<template>
  <section class="recommended">
    <div class="container">
      <h2 class="recommended__title">{{ props.title }}</h2>
      
      <div class="recommended__grid">
        <div class="recommended__category">
          <h3 class="recommended__subtitle">
            Чаты
            <a @click.prevent="router.push('/resources')">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="#5472d3" d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
              </svg>
            Посмотреть все</a>
          </h3>
          <div class="recommended__items">
            <ItemCard 
              v-for="item in recommended.chats" 
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
        
        <div class="recommended__category">
          <h3 class="recommended__subtitle">
          Каналы
          <a @click.prevent="router.push('/resources')">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="#5472d3" d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
              </svg>
            Посмотреть все</a>
          </h3>
          <div class="recommended__items">
            <ItemCard 
              v-for="item in recommended.channels" 
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
        
        <div class="recommended__category">
          <h3 class="recommended__subtitle">
          Боты
          <a @click.prevent="router.push('/resources')">
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="#5472d3" d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/>
              </svg>
            Посмотреть все</a>
          </h3>
          <div class="recommended__items">
            <ItemCard 
              v-for="item in recommended.bots" 
              :key="item.id"
              :item="item"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

interface Props {
  title: string;
  chats: any[];
  channels: any[];
  bots: any[];
}

const router = useRouter();

const props = defineProps<Props>()

const recommended = computed(() => ({
  chats: props.chats || [],
  channels: props.channels || [],
  bots: props.bots || []
}))
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;


.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.recommended {
  padding: 2rem 0;
  
  &__title {
    color: #09090B;
    font-size: 24px;
    margin-bottom: 2rem;
    text-align: left;
    margin: 0px;
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
  
  &__category {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }
  
  &__subtitle {
    color: #09090B;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #09090B;
    display: flex;
    justify-content: space-between;

    a {
      font-size: 12px;
      color: #5472d3;
      cursor: pointer;
      align-self: center;
      display: flex;
      flex-direction: row-reverse;
      gap: 5px;
    }

  }
  
  &__items {
    display: grid;
    gap: 1rem;
  }
}
</style>