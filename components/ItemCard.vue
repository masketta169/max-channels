<template>
  <article class="card">
    <div class="card__content">
      <img :src="item.avatar" alt="Card Image" class="card__image">
      <div class="card__meta">
        <h4 class="card__title">{{ item.title }}</h4>
        <p class="card__description">{{ item.description }}</p>
        
        <NuxtLink :to="item.link" class="card__link" target="_blank">
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
    display: inline-block;
    background: #5472d3;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    transition: $transition;
    
    &:hover {
      background: darken($blue-light, 10%);
    }
  }

  &__image {
    width: 100%;
    max-height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
}
</style>