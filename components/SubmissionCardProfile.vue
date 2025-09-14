<template>
    <div class="application-card">
        <div class="application-card__header">
            <div class="application-card__header-left">
                    <span class="application-card__type" :class="submission.type">
                    {{ type }}
                </span>

                <StatusApplication :status="submission.status" />
            </div>
        </div>
        <div class="application-card__avatar-container">
            <img :src="`http://localhost:3001${submission.avatarUrl}`" alt="Application Avatar" class="application-card__avatar" />
            <h3 class="application-card__title">
                {{ submission.title }}
            </h3>
        </div>
        <p class="application-card__description">{{ submission.description }}</p>
    </div>
</template>

<script lang="ts" setup>
import type { SubmissionResponse } from '@/types/api/submissions';
import StatusApplication from '@/components/StatusApplication.vue';
import { ref } from 'vue';
import { submissionService } from '@/services/api/submissions';
import { useRouter } from 'vue-router';

const router = useRouter();

enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

enum Type {
    CHANNEL = 'КАНАЛ',
    BOT = 'БОТ',
    CHAT = 'ЧАТ',
}

const statuses = ref({
    PENDING: 'Ожидание',
    APPROVED: 'Одобрено',
    REJECTED: 'Отклонено',
});

const type = computed(() => {
    return Type[props.submission.type as keyof typeof Type];
});

const props = defineProps<{ 
    submission: SubmissionResponse;
}>();
</script>

<style lang="scss" scoped>

.application-card {
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #0B1739;
    border-radius: 12px;
    border: 1px solid #343B4F;
    width: 300px;

    &__header-left {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
    }

    &__type {
        font-size: 16px;
        padding: 10px 0px;

        &.CHANNEL {
            color: #CB3CFF;
        }

        &.BOT {
            color: #00C2FF;
        }

        &.CHAT {
            color: #0038FF;
        }
    }

    &__title {
        font-size: 24px;
        padding: 10px 0px;
        color: #fff;
    }

    &__description {
        font-size: 16px;
        padding: 10px 0px;
        color: #fff;
    }

    &__footer {
        display: flex;
        flex-direction: row;
        align-items: center;

        &.LOAN {
            color: #FF5A65;
        }
        justify-content: space-between;
        gap: 20px;
        margin-top: 20px;
    }

    &__button {
        width: 100%;
        height: 40px;
        border-radius: 12px;
        font-size: 16px;
    }



    &__button.approve {
        background-color: rgba(#14CA74, 0.2);
        color: #14CA74;
        border: 1px solid #14CA74;
    }

    &__button.reject {
        background-color: rgba(#FF5A65, 0.2);
        color: #FF5A65;
        border: 1px solid #FF5A65;
    }

    &__avatar-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }

    &__avatar {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        object-fit: cover;
    }
    
}

</style>