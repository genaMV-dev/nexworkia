<script setup lang="ts">
import { jobs } from '../data/jobs.ts'
import { AkLocation, BsBriefcase } from '@kalimahapps/vue-icons'
</script>

<template>
  <div class="container">
    <h1 class="title">JOBS</h1>
    <ul class="jobsList">
      <li class="jobItem" :key="job.id" v-for="job in jobs">
        <h2 class="jobTitle">{{ job.position }}</h2>

        <p class="info">
          <AkLocation /> {{ job.jobType }} · <BsBriefcase /> {{ job.industry }}
        </p>

        <p class="salary">
          <span class="accent">€{{ job.salary }} </span> / month
        </p>

        <ul class="skillList">
          <li
            class="skillItem"
            v-for="skill in job.skills.slice(0, 3)"
            :key="skill"
          >
            <p>{{ skill }}</p>
          </li>

          <li class="skillMore" v-if="job.skills.length > 3">
            <p>...</p>
          </li>
        </ul>

        <RouterLink class="moreLink" :to="'/jobs/' + job.id">MORE</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  padding: 12px;
  color: var(--third-color);
}

.title {
  text-align: center;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 16px;
}

.info {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 4px;
}

.jobsList {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.jobItem {
  background-color: var(--second-color);
  font-family: var(--second-family);
  padding: 8px;
  padding-bottom: 20px;
  border-radius: 16px;
}

.skillList {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 20px;
}

.skillItem {
  padding: 4px;
  border: 1px solid var(--third-color);
  border-radius: 16px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
}

.skillMore {
  padding: 0 4px;
  font-size: 16px;
  font-weight: 400;
}

.jobTitle {
  font-family: var(--font-family);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;
}

.salary {
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
}

.accent {
  color: #168300;
  font-weight: 600;
  font-size: 18px;
}

.moreLink {
  padding: 8px 28px;
  background-color: var(--main-color);
  border: 2px solid var(--main-color);
  border-radius: 16px;
  color: var(--second-color);
  font-size: 18px;
  font-weight: 600;
}

@media screen and (min-width: 768px) {
  .container {
    padding: 12px 52px;
  }

  .title {
    font-size: 64px;
  }

  .jobItem {
    padding: 16px;
    padding-bottom: 28px;
  }

  .jobTitle {
    font-size: 32px;
  }

  .info {
    font-size: 20px;
  }

  .salary {
    font-size: 20px;
  }

  .accent {
    font-size: 24px;
  }

  .skillList {
    margin-bottom: 36px;
  }

  .skillItem {
    padding: 8px;
    font-size: 20px;
  }

  .skillMore {
    padding: 3px 8px;
    font-size: 20px;
  }

  .moreLink {
    padding: 8px 80px;
    font-size: 36px;
  }
}

@media screen and (min-width: 1440px){
  .container {
    padding: 12px 200px;
  }

  .moreLink{
    transition: 0.3s padding ease, 0.3s font-size ease;
    font-size: 40px;
  }

  .moreLink:hover{
    padding: 10px 100px;
    font-size: 48px;
  }
}
</style>
