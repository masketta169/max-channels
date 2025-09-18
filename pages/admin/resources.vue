<template>
    <div class="admin-submissions-page">
        <h1 class="admin-submissions-page__title">Ресурсы</h1>
        <div class="applications-list">
            <RecourceCard v-for="resource in resources" :key="resource.id" :application="resource" @delete="fetchResources" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { resourceService } from '@/services/api/resources';
import { onMounted } from 'vue';
import type { Resource } from '@/types/api/resources';
import RecourceCard from '@/components/RecourceCard.vue';

definePageMeta({
  layout: 'admin',
  middleware: 'admin'
});

const resources = ref<Resource[]>([]);

const fetchResources = async () => {
  resources.value = await resourceService.getAll().then(data => data.data)
}

onMounted(() => {
  fetchResources();
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