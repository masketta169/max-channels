<template>
    <div class="admin-submissions-page">
        <h1 class="admin-submissions-page__title">Заявки</h1>
        <div class="applications-list">
            <ApplicationCard v-for="submission in submissions.reverse()" :key="submission.id" :application="submission" @approveSubmission="fetchSubmissions" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { adminService } from '@/services/api/admin';
import { onMounted } from 'vue';
import type { SubmissionResponse } from '@/types/api/submissions';
import ApplicationCard from '@/components/ApplicationCard.vue';

definePageMeta({
  layout: 'admin',
  middleware: 'admin'
});

const submissions = ref<SubmissionResponse[]>([]);

const fetchSubmissions = async () => {
  submissions.value = await adminService.getSubmissions().then(res => res.data);
  // console.log(submissions.value);
}

onMounted(() => {
  fetchSubmissions();
});
</script>

<style lang="scss" scoped>
.admin-submissions-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #081028;
  color: #fff;
}

.applications-list {
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
  overflow-y: auto;
}
</style>