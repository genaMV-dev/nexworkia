<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import image from '../assets/images/home-image.webp'

const desktopQuery = window.matchMedia('(min-width: 1440px)')
let previousBodyOverflow = ''
let previousHtmlOverflow = ''

function updateScrollLock() {
  document.body.style.overflow = desktopQuery.matches
    ? 'hidden'
    : previousBodyOverflow
  document.documentElement.style.overflow = desktopQuery.matches
    ? 'hidden'
    : previousHtmlOverflow
}

onMounted(() => {
  previousBodyOverflow = document.body.style.overflow
  previousHtmlOverflow = document.documentElement.style.overflow
  updateScrollLock()
  desktopQuery.addEventListener('change', updateScrollLock)
})

onBeforeUnmount(() => {
  desktopQuery.removeEventListener('change', updateScrollLock)
  document.body.style.overflow = previousBodyOverflow
  document.documentElement.style.overflow = previousHtmlOverflow
})
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
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

img {
  margin: 0 auto;
  height: 300px;
  width: 360px;
  object-fit: cover;
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

  img {
    width: 600px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    flex-direction: row-reverse;
    padding: 8px 124px;
  }

  img {
    width: 1200px;
    height: 842px;
  }

  h1 {
    margin-top: 220px;
    font-size: 80px;
  }

  .textContent {
    text-align: left;
  }

  .getHiredBtn {
    padding: 8px 80px;
    font-size: 52px;
    border: 2px solid var(--main-color);
    transition:
      0.3s color ease,
      0.3s background-color ease;
  }

  .getHiredBtn:hover {
    background-color: var(--second-color);
    color: var(--main-color);
  }
}
</style>
