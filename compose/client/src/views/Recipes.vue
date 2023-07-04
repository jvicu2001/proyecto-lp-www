<template>
    <RecipeBuilder />
  </template>
  
<script>
import { defineComponent } from 'vue';

import RecipeBuilder from '@/components/RecipeBuilder.vue'

export default defineComponent ({
  name: 'Recipes',
  components: {
    RecipeBuilder
  }
})
</script>