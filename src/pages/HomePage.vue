<script setup lang="ts">
import image from '../assets/images/hero-img.png'
</script>

<template>
  <div class="container">
    <div><img :src="image" alt="HERO" /></div>

    <div class="textContent">
      <h1>Make your next <span class="accent">career</span> move count</h1>
      <p>
        The right job can change everything. Explore opportunities from
        companies looking for people just like you.
      </p>
      <RouterLink class="getHiredBtn" to="/jobs">GET HIRED</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

img {
  margin: 0 auto;
}

.textContent {
  text-align: center;
  align-items: center;
}

h1 {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--third-color);
}

.accent {
  text-decoration: underline;
  text-decoration-color: var(--main-color);
  text-decoration-thickness: 6px;
  text-underline-offset: 8px;
  font-style: italic;
  color: var(--main-color);
  font-weight: 800;
}

p {
  font-size: 20px;
  font-weight: 400;
  color: var(--third-color);
  margin-bottom: 32px;
  font-family: var(--second-family);
}

.getHiredBtn {
  padding: 8px 52px;
  background-color: var(--main-color);
  font-size: 32px;
  font-weight: 700;
  border-radius: 24px;
  color: var(--second-color);
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 28px;
    margin-bottom: 52px;
  }

  .getHiredBtn {
    padding: 8px 64px;
    font-size: 40px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    flex-direction: row-reverse;
  }

  img{
    width: 1200px;
  }

  h1{
    margin-top: 140px;
  }
}
</style>
