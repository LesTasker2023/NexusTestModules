<!-- test2 -->
  <script setup lang="ts">
  import type  test2Props  from './test2.types';
  
  const props = defineProps<test2Props>();
  
  // Computed property
  const processedData = computed(() =>props.data.toUpperCase());
  
  // Method
  const handleClick = () => {
    console.log('Clicked:', processedData);
  };
  
  // Mounted Hook (Equivalent to `mounted()` in Options API)
  onMounted(() => {
    console.log('Component mounted!');
  });
  
  </script>
  
  <template>
    <div class="test2" @click="handleClick">
      {{ processedData }}
    </div>
  </template>
  
  <style scoped lang="scss" src="./test2.scss"></style>