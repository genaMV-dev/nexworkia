<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>404</h1>
    <p>Page not found</p>
    <RouterLink class="backLink" to="/">Back to the homepage</RouterLink>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  color: var(--third-color);
  text-align: center;
}

h1 {
  color: var(--main-color);
  font-size: 96px;
  font-weight: 900;
  line-height: 1;
}

p {
  margin-top: 12px;
  font-family: var(--second-family);
  font-size: 20px;
}

.backLink {
  display: inline-flex;
  justify-content: center;
  margin-top: 28px;
  padding: 10px 24px;
  border: 2px solid var(--main-color);
  border-radius: 48px;
  background-color: var(--main-color);
  color: var(--second-color);
  font-size: 18px;
  font-weight: 700;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

@media screen and (min-width: 768px) {
  .container {
    min-height: calc(100vh - 76px);
  }

  h1 {
    font-size: 144px;
  }

  p {
    font-size: 28px;
  }

  .backLink {
    padding: 12px 32px;
    font-size: 24px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    min-height: calc(100vh - 84px);
  }

  h1 {
    font-size: 192px;
  }

  .backLink:hover {
    background-color: var(--second-color);
    color: var(--main-color);
  }
}
</style>
