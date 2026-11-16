<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { jobs } from '../data/jobs.ts'
import { AnOutlinedArrowLeft } from '@kalimahapps/vue-icons'
import image from '../assets/images/laptop.webp'
import {
  AkLocation,
  BsBriefcase,
  ReHomeOfficeLine,
  AkClock,
  CaCheckmarkOutline,
  TaOutlineBuildingSkyscraper,
  AnOutlinedArrowRight,
} from '@kalimahapps/vue-icons'

const route = useRoute()

const job = computed(() => {
  return jobs.find((p) => p.id === Number(route.params.id))
})
</script>

<template>
  <div class="container">
    <RouterLink class="backLink" to="/jobs"
      ><AnOutlinedArrowLeft />Back to jobs</RouterLink
    >

    <div class="wrapper">
      <div class="textContent">
        <h1 class="title">{{ job?.position }}</h1>
        <p class="info">
          <span class="infoItem"><AkLocation />{{ job?.jobType }} |</span>
          <span class="infoItem"><BsBriefcase />{{ job?.industry }} |</span>
          <span class="infoItem"><ReHomeOfficeLine />{{ job?.company }}</span>
        </p>
        <p class="salary">
          <span class="accent">€{{ job?.salary }}</span> / month
        </p>
        <ul class="skillList">
          <li class="skillItem" :key="skill" v-for="skill in job?.skills">
            {{ skill }}
          </li>
        </ul>
      </div>
      <div class="imageWrapper"><img :src="image" alt="LAPTOP" /></div>
    </div>

    <div class="descriptionSection">
      <h2 class="aboutPosition">About this position</h2>
      <p>{{ job?.description }}</p>
    </div>

    <div class="requirementsSection">
      <h2 class="requirements">Requirements</h2>
      <ul class="reqirementList">
        <li
          class="reqirementItem"
          :key="reqirement"
          v-for="reqirement in job?.requirements"
        >
          <p>
            <span><CaCheckmarkOutline /></span>
            {{ reqirement }}
          </p>
        </li>
      </ul>
    </div>

    <div class="jobDetailsSection">
      <h2 class="jobDetails">Job details</h2>

      <div>
        <span><AkClock /></span>
        <span>Experience</span>
        <span>{{ job?.experience }} years</span>
      </div>

      <div>
        <span><TaOutlineBuildingSkyscraper /></span>
        <span>Industry</span>
        <span>{{ job?.industry }}</span>
      </div>

      <div>
        <span><AkClock /></span>
        <span>Specialized education</span>
        <span>{{
          job?.specializedEducation ? 'Required' : 'Not required'
        }}</span>
      </div>
    </div>

    <div class="applySection">
      <div class="applySectionWrapper">
        <div class="companyWrapper">
          <span><ReHomeOfficeLine /></span>
          <p>{{ job?.company }}</p>
        </div>
        <button class="applyBtn">
          Apply for this job <AnOutlinedArrowRight />
        </button>
      </div>
      <p>{{ job?.companyDescription }}</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 12px;
  color: var(--third-color);
  font-family: var(--second-family);
}

.applyBtn {
  display: flex;
  gap: 8px;
  align-items: center;
  border: 2px solid var(--main-color);
  background-color: var(--main-color);
  color: var(--second-color);
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 48px;
}

.applyBtn :deep(svg) {
  filter: drop-shadow(0 0 1px currentColor);
}

.requirementsSection {
  margin-bottom: 16px;
}

.companyWrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 4px;
}

.applySectionWrapper {
  display: flex;
  gap: 12px;
}

.applySection span {
  font-size: 32px;
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
}

.jobDetails {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: var(--font-family);
}

.jobDetailsSection {
  margin-bottom: 16px;
}

.jobDetailsSection > div {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  column-gap: 8px;
}

.jobDetailsSection > div > span:first-child {
  grid-column: 1;
  grid-row: 1 / span 2;
  font-size: 24px;
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
}

.jobDetailsSection > div > span:nth-child(2) {
  font-size: 18px;
  font-weight: 100;
}

.jobDetailsSection > div > span:nth-child(3) {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
}

.jobDetailsSection > div > span:not(:first-child) {
  grid-column: 2;
}

.reqirementList {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.requirements {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: var(--font-family);
}

.reqirementItem p {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 16px;
}

.reqirementItem p span {
  font-size: 24px;
  flex: 0 0 24px;
  width: 24px;
  height: 24px;
  color: var(--salary);
}

.backLink {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  color: #4d4d4d;
}

.wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: var(--second-color);
  border-radius: 16px;
  margin-bottom: 16px;
}

.textContent {
  flex: 1;
  min-width: 0;
}

.imageWrapper {
  flex: 0 0 clamp(120px, 28vw, 700px);
}

img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.info {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 16px;
  font-weight: 400;
}

.infoItem {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.title {
  font-size: 24px;
  font-weight: 900;
  font-family: var(--font-family);
}

.salary {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 16px;
}

.accent {
  font-size: 20px;
  font-weight: 600;
  color: var(--salary);
}

.skillList {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
}

.skillItem {
  padding: 4px;
  border: 1px solid var(--third-color);
  border-radius: 16px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
}

.aboutPosition {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: var(--font-family);
}

.descriptionSection p {
  margin-bottom: 16px;
}

@media screen and (min-width: 768px) {
  .skillItem {
    padding: 8px;
    font-size: 20px;
  }

  .container {
    padding: 24px 48px;
  }

  .wrapper {
    gap: 24px;
    padding: 24px;
  }

  .imageWrapper {
    flex-basis: clamp(240px, 32vw, 420px);
  }

  .title {
    font-size: 32px;
  }

  .info {
    font-size: 18px;
  }

  .salary {
    font-size: 20px;
  }

  .aboutPosition,
  .requirements,
  .jobDetails {
    font-size: 28px;
  }

  .reqirementItem p {
    font-size: 18px;
  }

  .applySectionWrapper {
    justify-content: space-between;
  }

  .applyBtn {
    gap: 12px;
    padding: 12px 32px;
    font-size: 24px;
  }

  .descriptionSection p {
    font-size: 24px;
  }

  .reqirementItem p {
    font-size: 24px;
  }

  .reqirementItem p span {
    font-size: 40px;
    flex: 0 0 40px;
    width: 40px;
    height: 40px;
  }

  .aboutPosition,
  .requirements,
  .jobDetails {
    font-size: 32px;
  }

  .descriptionSection p,
  .reqirementItem p {
    font-size: 28px;
  }

  .reqirementItem p span {
    font-size: 44px;
    flex-basis: 44px;
    width: 44px;
    height: 44px;
  }

  .jobDetailsSection > div > span:first-child {
    font-size: 32px;
    flex-basis: 32px;
    width: 32px;
    height: 32px;
  }

  .jobDetailsSection > div > span:nth-child(2),
  .jobDetailsSection > div > span:nth-child(3) {
    font-size: 22px;
  }

  .applySection span {
    font-size: 40px;
    flex-basis: 40px;
    width: 40px;
    height: 40px;
  }

  .companyWrapper p,
  .applySection > p {
    font-size: 22px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    padding: 24px 160px;
  }

  .descriptionSection p,
  .reqirementItem p {
    font-size: 20px;
  }

  .reqirementItem p span {
    font-size: 32px;
    flex-basis: 32px;
    width: 32px;
    height: 32px;
  }

  .applyBtn {
    padding: 16px 48px;
    transition:
      0.3s color ease,
      0.3s background-color ease;
  }

  .applyBtn:hover {
    background-color: var(--second-color);
    color: var(--main-color);
  }
}
</style>
