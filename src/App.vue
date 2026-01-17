<template>
  <Header />
  <div>
  
  </div>
</template>

<script setup>
import Header from '@/components/header/header.vue'
</script>

<style scoped>
  /* hlavní obsah, aby zabíral celou šířku */
.main-content {
  width: 100vw;
  background-color: brown;
}
/* Globální reset pro všechny stránky */
:global(html), :global(body) {
  margin: 0;
  padding: 0;
  width: 100%;
}

</style>
