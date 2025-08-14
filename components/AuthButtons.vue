<template>
  <div class="auth-buttons">
    <button class="auth-buttons__btn auth-buttons__btn--login" @click="navigateTo('/auth/login')">
      Войти
    </button>
    <button class="auth-buttons__btn auth-buttons__btn--register">
      Регистрация
    </button>
  </div>
</template>

<script setup>
// Логика авторизации может быть добавлена здесь
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.auth-buttons {
  display: flex;
  gap: 1rem;

  &__btn {
    padding: 0px 50px;
    height: 40px;
    border-radius: $border-radius;
    font-weight: 600;
    cursor: pointer;
    transition: $transition;
    border: 1px solid transparent;
    font-size: 14px;

    &--login {
      background: white;
      color: $blue-darker;
      

      &:hover {
        background: darken($blue-light, 10%);
        color: $white;
      }
    }

    &--register {
      background: $blue-light;
      color: $white;
      //border: 1px solid $white;

      &:hover {
        background: white;
        color: $blue-darker;
      }
    }
  }
}
</style>