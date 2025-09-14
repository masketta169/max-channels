<script setup lang="ts">
import { useHead } from '#app';

useHead({
  title: 'Админ панель',
});

definePageMeta({
  middleware: ['admin'],
  layout: 'admin',
})
</script>