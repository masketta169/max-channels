<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      placeholder="Поиск чатов, каналов, ботов..."
      v-model="searchQuery"
      @keyup.enter="performSearch"
    />
    <button class="search__btn" @click="performSearch">
      <svg class="search__icon" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    </button>
  </div>
</template>

<script setup>
const searchQuery = ref('')

const performSearch = () => {
  // Здесь будет логика поиска
  console.log('Searching for:', searchQuery.value)
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.search {
  display: flex;
  align-items: center;
  background: white;
  border-radius: $border-radius;
  width: 100%;
  height: 40px;
  border: 1px solid transparent;
  transition: $transition;

  &:focus-within {
    border: 1px solid $blue-darker;
    box-shadow: 0 2px 10px rgba($blue-darker, 0.5);
    transition: $transition;
  }

  &__input {
    flex: 1;
    background: transparent;
    border: none;
    color: #09090B;
    padding: 0.5rem 1rem;
    outline: none;
    font-size: 16px;

    &::placeholder {
      color: rgba(#09090B, 0.5);
    }
  }

  &__btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: #09090B;
  }
}
</style>