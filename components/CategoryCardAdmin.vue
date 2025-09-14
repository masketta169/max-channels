<template>
    <div class="category-card-admin">
        <div class="category-card-admin__header">
            <span>Имя: {{ category.name }}</span>
            <span>Slug: {{ category.slug }}</span>
        </div>
        <span>Количество сущностей: {{ category.resources.length }}</span>
        <button class="category-card-admin__delete-button" @click="deleteCategory">
            <svg width="20px" height="20px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Stock_cut" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    <polygon fill="none" points="25,11 7,11 9,31    23,31  " stroke="#ffffff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                    <line fill="none" stroke="#ffffff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="4" x2="28" y1="11" y2="11"/>
                    <line fill="none" stroke="#ffffff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="13" x2="13" y1="31" y2="14"/>
                    <line fill="none" stroke="#ffffff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" x1="19" x2="19" y1="31" y2="14"/>
                    <polyline fill="none" points="13,11 13,7 19,7    19,11  " stroke="#ffffff" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                </g>
            </svg>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { categoryService } from '@/services/api/categories';
import type { CategoryResponse } from '@/types/api/category';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
    category: CategoryResponse;
}>();

const deleteCategory = async () => {
     categoryService.delete(props.category.id).then(() => {
        router.push('/admin/categories');
    });
};

</script>

<style lang="scss" scoped>
.category-card-admin {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 10px;
    width: 300px;

    &__header {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__delete-button {
        background: none;
        border: none;
        cursor: pointer;
    }
}
</style>