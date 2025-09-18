<template>
  <section class="recommended">
    <div class="container">
      <h2 class="recommended__title">{{ props.title }}</h2>
      
      <div class="recommended__grid">
            <ItemCard 
              v-for="item in props.list" 
              :key="item.id"
              :item="item"
            />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  list: any[]
}

const props = defineProps<Props>()
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
  }
  
  &__items {
    display: grid;
    gap: 1rem;
  }
}
</style>