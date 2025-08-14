<template>
  <section class="news">
    <div class="container">
      <h2 class="news__title">Latest News</h2>
      
      <div class="news__grid">
        <article v-for="item in news" :key="item.id" class="news__item">
          <h3 class="news__item-title">{{ item.title }}</h3>
          <p class="news__item-excerpt">{{ item.excerpt }}</p>
          <time class="news__item-date">{{ item.date }}</time>
          <NuxtLink :to="item.link" class="news__item-link">Read more</NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: news } = await useAsyncData('news', () => {
  return queryContent('/data/news').findOne()
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.news {
  padding: 2rem 0;
  background: $dark-blue-light;
  
  &__title {
    color: $white;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  &__item {
    background: $dark-blue;
    border-radius: $border-radius;
    padding: 1.5rem;
    transition: $transition;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: $box-shadow;
    }
  }
  
  &__item-title {
    color: $white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }
  
  &__item-excerpt {
    color: $gray;
    margin-bottom: 1rem;
  }
  
  &__item-date {
    display: block;
    color: $light-blue;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
  
  &__item-link {
    color: $blue;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>