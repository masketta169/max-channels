<template>
  <div>
    <h1>Страница еще в разработке</h1>
    <!-- <h1>Профиль</h1>
    <transition name="fade">
      <FormCreateSubmission v-if="isCreateSubmission" @cancelSubmit="handleCancelSubmit" />
    </transition>
    <button class="profile__button" @click="handleCreateSubmission">Создать заявку</button> -->
  </div>
</template>

<script lang="ts" setup>
import { submissionService } from '@/services/api/submissions';
import FormCreateSubmission from '@/components/FormCreateSubmission.vue';

definePageMeta({
  layout: 'profile',
});

const isCreateSubmission = ref(false);

const createSubmission = async () => {
  const response = await submissionService.createSubmission({
    title: 'Test',
    type: 'CHANNEL',
    description: 'Test',
  });
  console.log(response);
}

const handleCreateSubmission = () => {
  isCreateSubmission.value = true;
}

const handleCancelSubmit = () => {
  isCreateSubmission.value = false;
}
// createSubmission();
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.profile__button {
    background-color: #007bff;
    color: white;
    border-radius: $border-radius;
    border: none;
    width: 40%;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    width: 140px;
}
</style>