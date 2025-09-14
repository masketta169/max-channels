<template>
  <div class="profile__submissions-container">
    <div class="profile__submissions-header">
      <h1>Мои заявки</h1>

      <!-- Табы для Pending, Approved, Rejected -->
      <div class="profile__tabs">
        <button class="profile__tab" :class="{'active': status === 'PENDING'}" @click="status = 'PENDING'">В работе</button>
        <button class="profile__tab" :class="{'active': status === 'APPROVED'}" @click="status = 'APPROVED'">Принятые</button>
        <button class="profile__tab" :class="{'active': status === 'REJECTED'}" @click="status = 'REJECTED'">Отклоненные</button>
        <button class="profile__button" @click="handleCreateSubmission">Создать заявку</button>
      </div>
    </div>

    <div class="profile__submissions">
        <SubmissionCardProfile :submission="submission" v-for="submission in submissions[status]" :key="submission.id" />
    </div>
    
  </div>

  <transition name="fade">
    <FormCreateSubmission v-if="isCreateSubmission" @cancelSubmit="handleCancelSubmit" @createSubmission="getSubmissions" />
  </transition>
</template>

<script lang="ts" setup>
import { submissionService } from '@/services/api/submissions';
import SubmissionCardProfile from '@/components/SubmissionCardProfile.vue';
import FormCreateSubmission from '@/components/FormCreateSubmission.vue';


definePageMeta({
  layout: 'profile',
});

const submissions = ref({
    PENDING: [],
    APPROVED: [],
    REJECTED: [],
});

const status = ref('PENDING');

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


const getSubmissions = async () => {
  submissions.value.PENDING = await submissionService.getPendingSubmissions().then(res => res.data);
  submissions.value.APPROVED = await submissionService.getApprovedSubmissions().then(res => res.data);
  submissions.value.REJECTED = await submissionService.getRejectedSubmissions().then(res => res.data);

  submissions.value.PENDING = submissions.value.PENDING.reverse();
  submissions.value.APPROVED = submissions.value.APPROVED.reverse();
  submissions.value.REJECTED = submissions.value.REJECTED.reverse();

  handleCancelSubmit();
}

onMounted(async () => {
  submissions.value.PENDING = await submissionService.getPendingSubmissions().then(res => res.data);
  submissions.value.APPROVED = await submissionService.getApprovedSubmissions().then(res => res.data);
  submissions.value.REJECTED = await submissionService.getRejectedSubmissions().then(res => res.data);

  submissions.value.PENDING = submissions.value.PENDING.reverse();
  submissions.value.APPROVED = submissions.value.APPROVED.reverse();
  submissions.value.REJECTED = submissions.value.REJECTED.reverse();
});
</script>

<style lang="scss" scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.profile {

  &__submissions-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap: 20px;
    position: sticky;
    top: 0;
    left: 0;
    width: 340px;
    padding: 20px;
    z-index: 3;
    background-color: #fff;
    width: 100%;
  }

  &__submissions-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow-y: auto;
    max-height: 100%;
  }

  &__submissions {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    padding: 0px 20px 20px 20px;
  }

  &__tabs {
    display: flex;
    gap: 10px;
  }

  &__tab {
    border: 1px solid #081028;
    color: #081028;
    border-radius: 10px;
    background-color: transparent;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: #007bff;
      color: white;
      border: 1px solid #007bff;
    }

    &.active {
      border: 1px solid #007bff;
      color: #007bff;

      &:hover {
        background-color: #007bff;
        color: white;
        border: 1px solid #007bff;
      }
    }
  }
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