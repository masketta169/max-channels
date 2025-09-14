<template>
  <article class="card">
    <div class="card__content">
      <img :src="`http://localhost:3001${item.avatarUrl}`" alt="Card Image" class="card__image">
      <div class="card__meta">
        <h4 class="card__title">{{ item.title }}</h4>
        <p class="card__description">{{ item.description }}</p>
        {{console.log(item.url)}}
        
        <NuxtLink :to="item.url" class="card__link" target="_blank" rel="noopener noreferrer">
          Присоединиться
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: $transition;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: $box-shadow;
  }
  
  &__title {
    color: #09090B;
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 600;
    margin-top: 0;
  }

  &__content {
    display: flex;
    gap: 10px;
  }
  
  &__description {
    color:rgba(9, 9, 11, 0.68);
    margin-bottom: 1rem;
  }
  
  &__meta {
    color: #09090B;
    font-size: 14px;
    margin-bottom: 10px;
  }
  
  &__link {
    background: #5472d3;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: $transition;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      background: darken($blue-light, 10%);
    }
  }

  &__image {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    object-fit: cover;
  }
}
</style>