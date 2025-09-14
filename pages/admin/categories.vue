<template>
    <div class="categories-page">
        <h1>Categories</h1>
        <div class="categories-page__create-category">
            <input type="text" class="categories-page__create-category-input" v-model="newCategoryName" placeholder="Название категории" />
            <input type="text" class="categories-page__create-category-input" v-model="newCategorySlug" placeholder="Slug категории" />
            <button class="categories-page__add-button" @click="addCategory">
                Add Category
            </button>
        </div>
        <div class="categories-page__categories">
            <CategoryCardAdmin v-for="category in categories" :key="category.id" :category="category" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { categoryService } from '@/services/api/categories';
import CategoryCardAdmin from '@/components/CategoryCardAdmin.vue';
import type { CategoryResponse } from '@/types/api/category';

const categories = ref<CategoryResponse[]>([]);

definePageMeta({
    layout: 'admin',
    middleware: 'admin'
});

useHead({
    title: 'Категории',
});

const newCategoryName = ref('');
const newCategorySlug = ref('');

const addCategory = async () => {
    categoryService.create(newCategoryName.value, newCategorySlug.value).then(async () => {
        categories.value = await categoryService.getAll().then(res => res.data);
    });
};

onMounted(async () => {
    categories.value = await categoryService.getAll().then(res => res.data);
});
</script>

<style lang="scss" scoped>
.categories-page {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #081028;
    height: 100%;
    width: 100%;
    color: #fff;

    &__categories {
        display: flex;
        flex-direction: row;
        gap: 20px;
        flex-wrap: wrap;
        width: 100%;
    }
}
</style>