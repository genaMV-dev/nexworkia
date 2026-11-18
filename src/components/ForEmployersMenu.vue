<script setup lang="ts">
import { AkCirclePlus, ClUsers } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="container">
    <nav>
      <ul class="linkList">
        <li class="linkItem">
          <RouterLink to="/post-job"><AkCirclePlus />Post a job</RouterLink>
        </li>
        <li class="linkItem">
          <RouterLink to="/find-empoyees"><ClUsers />Find Candidates</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.container {
  padding: 16px;
  padding-bottom: 24px;
  position: absolute;
  top: 48px;
  left: -44px;
  background-color: var(--main-color);
  color: var(--second-color);
  border-radius: 0 0 48px 48px;
  font-size: 24px;
  min-width: 260px;
}

nav a.router-link-active {
  color: var(--accent);
}

.linkList{
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.linkItem a {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>
