<script setup lang="ts">
import { ChMenuHamburger } from '@kalimahapps/vue-icons'
</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/">nex<span class="accent">WORK</span>ia</RouterLink>
    </div>

    <nav>
      <button class="burgerBtn">
        <ChMenuHamburger />
      </button>

      <ul class="linkList">
        <li class="linkItem"><RouterLink to="/jobs">Find Job</RouterLink></li>
        <li class="linkItem"><RouterLink to="/companies">Companies</RouterLink></li>
        <li class="linkItem"><RouterLink to="/for-employers">For Employers</RouterLink></li>
        <li class="linkItem"><RouterLink to="/profile">Profile</RouterLink></li>
      </ul>
    </nav>

    <div class="authBtns">
      <RouterLink class="loginLink" to="/login">Sign In</RouterLink>
      <RouterLink class="registerLink" to="/register">Sign Up</RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 16px;
  background-color: var(--main-color);
  color: var(--second-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.authBtns {
  display: none;
}

.logo {
  font-size: 16px;
  font-weight: 600;
}

.accent {
  font-size: 20px;
  font-weight: 900;
  color: var(--accent);
}

.burgerBtn {
  font-size: 28px;
}

@media screen and (min-width: 768px) {
  header {
    padding: 16px 36px;
  }

  .logo {
    font-size: 20px;
  }

  .accent {
    font-size: 24px;
  }

  .burgerBtn {
    font-size: 36px;
  }
}

@media screen and (min-width: 1440px) {
  header {
    padding: 20px 40px;
    justify-content: space-between;
  }

  .burgerBtn {
    display: none;
  }

  .linkList {
    display: flex;
    gap: 100px;
    font-weight: 500;
    font-size: 20px;
  }

  nav a.router-link-active{
    color: var(--accent);
  }

  .linkItem{
    transition: 0.3s color ease;
  }

  .linkItem:hover{
    color: var(--accent);
  }

  .logo {
    font-size: 24px;
  }

  .accent {
    font-size: 28px;
  }

  .authBtns {
    display: flex;
    gap: 16px;
    font-size: 20px;
    font-weight: 600;
  }

  .loginLink {
    padding: 12px 32px;
    border: 2px solid var(--second-color);
    border-radius: 24px;
    transition:
      0.3s border ease,
      0.3s color ease;
  }

  .loginLink:hover {
    border: 2px solid var(--accent);
    color: var(--accent);
  }

  .registerLink {
    padding: 12px 32px;
    border: 2px solid var(--second-color);
    background-color: var(--second-color);
    color: var(--third-color);
    border-radius: 24px;
    transition:
      0.3s border ease,
      0.3s background-color ease;
  }

  .registerLink:hover {
    border: 2px solid var(--accent);
    background-color: var(--accent);
  }
}
</style>
