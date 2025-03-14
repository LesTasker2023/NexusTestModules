<!-- <FTName> -->
<script setup lang="ts">
import type  <FTName>Props  from './<FTName>.types';

const props = defineProps<<FTName>Props>();

// Computed property
const processedData = computed(() =>props.data.toUpperCase());

// Method
const handleClick = () => {
  console.log('Clicked:', processedData);
};

// Mounted Hook (Equivalent to `mounted()` in Options API)
onMounted(() => {
  console.log('Component mounted!');
  processedData = props.data; // Example of initializing state from props
});

</script>

<template>
  <div class="<FTName | kebabcase>" @click="handleClick">
    {{ processedData }}
  </div>
</template>

<style scoped lang="scss" src="./<FTName>.scss"></style>