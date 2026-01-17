<template>
  <div class="hero">
    <img src="/LM3.jpeg" alt="foto"/>
  </div>
</template>

<script>

</script>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;          /* nebo calc(100vh - header) */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;    /* ← DŮLEŽITÉ */
}

.hero img {
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center center;
  display: block;
}
</style>
