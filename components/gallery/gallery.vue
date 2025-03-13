<!-- gallery -->
<script setup lang="ts">
import type  galleryProps  from './gallery.types';

const props = defineProps<galleryProps>();
</script>

<template>
  <div class="gallery">
    {{ props.data }}
  </div>
</template>

<style scoped lang="scss" src="./gallery.scss"></style>