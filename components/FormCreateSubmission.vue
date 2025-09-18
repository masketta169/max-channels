<template>
  <div class="form-create-submission-container">
    <div class="form-create-submission">
        <h1 class="form-create-submission__title">Создание заявки</h1>

        <form @submit.prevent="handleSubmit" class="form-create-submission__form">
        <label>
            <span>Название</span>
            <div class="form-create-submission__form-input">
            <input type="text" v-model="form.title" placeholder="Напишите название ресурса" />
            </div>
        </label>

        <label>
            <span>Описание</span>
            <div class="form-create-submission__form-input">
            <input type="text" v-model="form.description" placeholder="Напишите описание ресурса" />
            </div>
        </label>

        <label>
            <span>Тип ресурса</span>
            <div class="form-create-submission__form-radios">
              <input  v-model="form.type" type="radio" value="CHANNEL">Канал</input>
              <input v-model="form.type" type="radio" value="CHAT">Чат</input>
              <input v-model="form.type" type="radio" value="BOT">Бот</input>
            </div>
        </label>

        <label>
            <span>Ссылка на ресурс</span>
            <div class="form-create-submission__form-input">
            <input type="text" v-model="form.url" placeholder="Вставьте ссылку на ресурс(https://max.ru/ваш_ресурс)" />
            </div>
        </label>

        <label>
            <span>Аватар ресурса</span>
            <div class="form-create-submission__form-input">
            <input type="file" accept="image/*" @change="handleImageChange" placeholder="Прикрепите аватар ресурса" />
            </div>
        </label>

        <label>
            <span>Уникальное имя канала</span>
            <div class="form-create-submission__form-input">
            <input type="text" v-model="form.slug" placeholder="Вставьте уникальное имя канала(например: my-channel)" />
            </div>
        </label>

        <label>
            <span>Категория</span>
            <div class="form-create-submission__form-input--checkbox">
              <div class="form-create-submission__form-select">
                <div class="form-create-submission__form-select-item" v-for="category in categories.data" :key="category.id">
                  <input type="checkbox" v-model="form.categoryIds" :value="category.id" />
                  <span>{{ category.name }}</span>
                </div>
              </div>
            </div>
        </label>

        <div class="form-create-submission__form-buttons">
            <button class="form-create-submission__form-button-cancel" @click="handleCancelSubmit">Отмена</button>
            <button type="submit">Создать</button>
        </div>

        </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { submissionService } from '@/services/api/submissions';
import type { CategoryResponse } from '@/services/api/submissions';
import { onMounted } from 'vue';

const emit = defineEmits(['cancelSubmit', 'createSubmission']);

onMounted(async () => {
  categories.value = await submissionService.getCategories();
});

const form = ref({
  title: '',
  description: '',
  type: 'CHANNEL',
  url: '',
  avatarUrl: null as File | null,
  slug: '',
  categoryIds: [],
});

const categories = ref<CategoryResponse[]>([]);

const handleImageChange = (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  // console.log(file);
  if (file) {
    form.value.avatarUrl = file;
  }
};

const handleSubmit = async () => {
  try {
    const formData = new FormData();
    formData.append('title', form.value.title);
    formData.append('description', form.value.description);
    formData.append('type', form.value.type);
    formData.append('url', form.value.url);
    formData.append('slug', form.value.slug);


    formData.append('categoryIds', JSON.stringify(form.value.categoryIds)); // Отправляется не как массив, а как строка. Исправь это 

    if (form.value.avatarUrl) {
      formData.append('avatar', form.value.avatarUrl);
    }

    console.log(formData);
    await submissionService.createSubmission(formData).then(() => {
      emit('createSubmission');
    }).catch((error) => {
      console.error('Error creating submission:', error);
    });
  } catch (error) {
    console.error('Error creating submission:', error);
  }
};

const handleCancelSubmit = () => {
  emit('cancelSubmit');
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_variables.scss' as *;

.form-create-submission-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 5;
}

.form-create-submission {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #F5F8FF;
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    margin: 0 auto;
    max-height: 90vh;
    overflow: auto;

    &__title {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__form-input {
        border: 1px solid transparent;
        color: #09090B;
        background: white;
        border-radius: $border-radius;
        color: #09090B;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;

        &::placeholder {
            color: rgba(#09090B, 0.5);
        }

        &:focus-within {
            border: 1px solid $blue-darker;
            box-shadow: 0 2px 10px rgba($blue-darker, 0.5);
            transition: $transition;
        }
    }

    &__form-input--checkbox {
        border: 1px solid transparent;
        color: #09090B;
        background: white;
        border-radius: $border-radius;
        color: #09090B;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        &::placeholder {
            color: rgba(#09090B, 0.5);
        }

        &:focus-within {
            border: 1px solid $blue-darker;
            box-shadow: 0 2px 10px rgba($blue-darker, 0.5);
            transition: $transition;
        }
    }

    &__form-select-item {
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;
    }

    &__form-select {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px;
    }

    &__form-input input[type="text"] {
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

    &__form-radios {
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin-top: 10px;
    }

    &__form-buttons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }

    &__form-buttons button {
        background-color: #007bff;
        color: white;
        border-radius: $border-radius;
        border: none;
        width: 40%;
        height: 40px;
        cursor: pointer;
    }

    &__form-button-cancel {
      background-color: white !important;
      color: #007bff !important;
      border: 1px solid #007bff !important;
    }
}

label {
  display: flex;
  flex-direction: column;
  gap: 5px;
}


button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
}

select {
  padding: 10px;
}
</style>