<template>
    <div class="status-application" :class="status" :style="{ backgroundColor: status }">
        {{ status }}
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

enum Status {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    REJECTED = 'REJECTED',
}

const props = defineProps<{
    status: Status;
}>();


</script>

<style lang="scss" scoped>
.status-application {
    border-radius: 12px;
    padding: 10px;
    
    &.PENDING {
        background-color: rgba(#FDB52A, 0.2);
        border: 1px solid #FDB52A;
        color: #FDB52A;
    }

    &.APPROVED {
        background-color: rgba(#14CA74, 0.2);
        border: 1px solid #14CA74;
        color: #14CA74;
    }

    &.REJECTED {
        background-color: rgba(#FF5A65, 0.2);
        border: 1px solid #FF5A65;
        color: #FF5A65;
    }
}

</style>