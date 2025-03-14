<!-- test -->
  <script setup lang="ts">
  import type  testProps  from './test.types';
  
  const props = defineProps<testProps>();
  
  // Computed property
  const processedData = computed(() =>props.data.toUpperCase());
  
  // Method
  const handleClick = () => {
    console.log('Clicked:', processedData.value);
  };
  
  // Mounted Hook (Equivalent to `mounted()` in Options API)
  onMounted(() => {
    console.log('Component mounted!');
  });
  
  </script>
  
  <template>
    <div class="test" @click="handleClick">
      {{ processedData }}
    </div>
  </template>
  
  <style scoped lang="scss" src="./test.scss"></style>