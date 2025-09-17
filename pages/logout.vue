<template>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { setCookie } from '@/utils/cookies'

const router = useRouter();

const logout = async () => {
    setCookie('accessToken', '');
    setCookie('refreshToken', '');
    router.push('/');
}

onMounted(() => {
    logout();
});
</script>