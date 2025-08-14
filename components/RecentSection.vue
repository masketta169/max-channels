<template>
  <section class="recent">
    <div class="container">
      <h2 class="recent__title">Недавно добавленные</h2>
      
      <div class="recent__grid">
        <div class="recent__category">
          <h3 class="recent__subtitle">Чаты</h3>
          <div class="recent__items">
            <ItemCard 
              v-for="item in recent.chats" 
              :key="item.id"
              :item="item"
              class="recent__card"
            />
          </div>
        </div>
        
        <div class="recent__category">
          <h3 class="recent__subtitle">Каналы</h3>
          <div class="recent__items">
            <ItemCard 
              v-for="item in recent.channels" 
              :key="item.id"
              :item="item"
              class="recent__card"
            />
          </div>
        </div>
        
        <div class="recent__category">
          <h3 class="recent__subtitle">Боты</h3>
          <div class="recent__items">
            <ItemCard 
              v-for="item in recent.bots" 
              :key="item.id"
              :item="item"
              class="recent__card"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: recent } = await useAsyncData('recent', () => {
  return queryContent('/data/recent').findOne()
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/variables' as *;

.recent {
  padding: 3rem 0;
  background: $blue-darker;
  
  &__title {
    color: $white;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 3px;
      background: $blue-light;
      margin: 1rem auto 0;
    }
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  &__category {
    background: rgba($blue-darker, 0.5);
    border-radius: $border-radius;
    padding: 1.5rem;
    transition: $transition;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: $shadow-lg;
    }
  }
  
  &__subtitle {
    color: $white;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid $blue-light;
  }
  
  &__items {
    display: grid;
    gap: 1.5rem;
  }
  
  &__card {
    background: $blue-darker;
    
    &:hover {
      background: lighten($blue-darker, 5%);
    }
  }
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>