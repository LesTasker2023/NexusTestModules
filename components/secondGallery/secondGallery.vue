<!-- secondGallery -->
<script setup lang="ts">
import type  secondGalleryProps  from './secondGallery.types';

const props = defineProps<secondGalleryProps>();
</script>

<template>
  <div class="second-gallery">
    {{ props.data }}
  </div>
</template>

<style scoped lang="scss" src="./secondGallery.scss"></style>