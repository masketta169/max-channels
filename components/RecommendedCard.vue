<template>
    <div class="application-card">
        <div class="application-card__header">
            <div class="application-card__header-left">
                <span class="application-card__type" :class="resource.type">
                    {{ resource.type }}
                </span>

                <span class="application-card__status" :class="resource.isRecommended ? 'approved' : 'pending'">
                    {{ resource.isRecommended ? 'Рекомендован' : 'Не рекомендован' }}
                </span>
                <!-- <StatusApplication :status="application.status" /> -->
            </div>
        </div>
        <div class="application-card__avatar-container">
            <img :src="`https://max-community.ru${resource.avatarUrl}`" alt="Application Avatar" class="application-card__avatar" />
            <h3 class="application-card__title">
                {{ resource.title }}
            </h3>
        </div>
        <p class="application-card__description">{{ resource.description }}</p>
        <div class="application-card__footer">
            <button class="application-card__button approve" @click="approveApplication">Сделать рекомендованным</button>
            <button class="application-card__button reject" @click="rejectApplication">Убрать из рекомендованных</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { SubmissionResponse } from '@/types/api/submissions';
import StatusApplication from '@/components/StatusApplication.vue';
import { ref } from 'vue';
import { submissionService } from '@/services/api/submissions';
import { resourceService } from '@/services/api/resources';

const emit = defineEmits(['changeRecommended']);

enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

const statuses = ref({
    PENDING: 'Ожидание',
    APPROVED: 'Одобрено',
    REJECTED: 'Отклонено',
});

const props = defineProps<{ 
    resource: SubmissionResponse;
}>();

const approveApplication = async () => {
    await resourceService.changeRecommended(props.resource.id, true);
    emit('changeRecommended');
}


const rejectApplication = () => {
    resourceService.changeRecommended(props.resource.id, false);
    emit('changeRecommended');
}
</script>

<style lang="scss" scoped>
.application-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
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
    }

    &__description {
        font-size: 16px;
        padding: 10px 0px;
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
        font-size: 12px;
        cursor: pointer;
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
    }
}



</style>