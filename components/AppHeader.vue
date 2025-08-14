<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <NuxtLink to="/" class="header__logo-link">MAX Community</NuxtLink>
      </div>
      
      <div class="header__search">
        <SearchInput />
      </div>
      
      <div class="header__auth">
        <AuthButtons />
      </div>
    </div>
  </header>
</template>

<script setup>
import SearchInput from './Search.vue'
import AuthButtons from './AuthButtons.vue'
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.header {
  background-color: #F5F8FF;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  width: 98%;
  left: 1%;
  top: 20px;
  box-sizing: border-box;
  
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  &__logo, &__auth {
    width: 350px;
  }

  &__auth {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
  &__logo-link {
    color: #09090B;
    font-size: 36px;
    font-weight: 600;
    text-decoration: none;
    white-space: nowrap;
    
    &:hover {
      opacity: 0.9;
    }
  }

  &__search {
    width: 100%;
    max-width: 900px;
  }
}
</style>