<template>

</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
    useCookie('accessToken').value = null;
    useCookie('refreshToken').value = null;
    router.push('/');
}

onMounted(() => {
    logout();
});
</script>