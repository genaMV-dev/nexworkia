<script setup lang="ts"></script>

<template>
  <div class="container">
    <nav>
      <ul class="linkList">
        <li class="linkItem"><RouterLink to="/jobs">Find Job</RouterLink></li>
        <li class="linkItem">
          <RouterLink to="/for-employers">For Employers</RouterLink>
        </li>
        <li class="linkItem"><RouterLink to="/profile">Profile</RouterLink></li>
        <li class="linkItem">
          <RouterLink to="/post-job">Post a job</RouterLink>
        </li>
        <li class="linkItem">
          <RouterLink to="/find-employees"
            >Find Candidates</RouterLink
          >
        </li>
        <li class="linkItem">
          <RouterLink to="/companies">Companies</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.container {
  padding: 16px;
  position: absolute;
  top: 64px;
  left: 0;
  background-color: var(--main-color);
  color: var(--second-color);
  border-radius: 0 48px 48px 0;
  font-size: 24px;
}

nav a.router-link-active {
  color: var(--accent);
}
</style>
