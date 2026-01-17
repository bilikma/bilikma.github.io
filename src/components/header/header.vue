<template>
  <header class="head">
    <div class="container">
      <h1 class="logo">Lenka & Matěj</h1>
      <nav class="nav-links">
        <router-link to="/home" class="nav-link" active-class="active">Úvod</router-link>
        <router-link to="/about" class="nav-link" active-class="active">Informace</router-link>
        <router-link to="/contact" class="nav-link" active-class="active">Potvrzení účasti</router-link>
      </nav>
    </div>
  </header>
  <body class="this">
    <router-view/>
  </body>
</template>

<script setup>
  
</script>

<style scoped>
.head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  color: #000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 1000;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  font-size: 1.8rem;
  font-weight: bold;
}

.nav-links a {
  margin-left: 20px;
  color: rgba(0,0,0,0.5);
  text-decoration: none;
  font-size: small;
}

.nav-links a.active {
  color: #000;
  font-weight: bold;
}

.nav-links a:hover {
  color: #000;
}

.this{
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  color: #000;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  z-index: 1000;
}

</style>
