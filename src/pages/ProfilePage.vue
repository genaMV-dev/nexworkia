<script setup lang="ts">
import { user } from '../data/user.ts'
import {
  ByEdit,
  AkLocation,
  AkLaptopDevice,
  McCoin2Line,
  BsHouseAdd,
  BxBuildings,
  CaEmail,
  AkCalendar,
  CaSkillLevel,
  AkGlobe,
  BsBriefcase,
  CoEducation,
  IcEmptyPage,
  FaRegFilePdf,
} from '@kalimahapps/vue-icons'

const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date))
</script>

<template>
  <div class="container">
    <h1 class="title">Profile</h1>
    <div class="info">
      <div class="infoWrapper">
        <div>
          <h2 class="username">{{ user.firstName }} {{ user.lastName }}</h2>
          <h2 class="position">{{ user.position }}</h2>
        </div>
        <RouterLink class="editLink" to="/profile/edit"
          ><ByEdit /> Edit Profile</RouterLink
        >
      </div>
      <div class="requirements">
        <div class="requirementsWrapper">
          <AkLocation /> {{ user.location }}
        </div>

        <div class="requirementsWrapper">
          <AkLaptopDevice v-if="user.workFormat === 'remote'" />
          <BxBuildings v-else-if="user.workFormat === 'on-site'" />
          <BsHouseAdd v-else />
          {{ user.workFormat }}
        </div>

        <div class="requirementsWrapper">
          <McCoin2Line />
          <span class="accent">€{{ user.expectedSalary }}</span> / per month
        </div>
      </div>
      <div class="emailJoined">
        <div class="emailWrapper">
          <CaEmail />
          <p>{{ user.email }}</p>
        </div>

        <div class="joinedWrapper">
          <AkCalendar />
          {{ formatDate(user.createdAt) }}
        </div>
      </div>
    </div>

    <div class="skills">
      <div class="titleSkill">
        <CaSkillLevel />
        <h2>Skills</h2>
      </div>
      <ul class="skillList">
        <li class="skillItem" :key="skill" v-for="skill in user.skills">
          <p>{{ skill }}</p>
        </li>
      </ul>
    </div>

    <div class="languages">
      <div class="titleLanguage">
        <AkGlobe />
        <h2>Languages</h2>
      </div>
      <ul class="languageList">
        <li
          class="languageItem"
          :key="language"
          v-for="language in user.languages"
        >
          <p>{{ language }}</p>
        </li>
      </ul>
    </div>

    <div class="experience">
      <div class="titleExperience">
        <BsBriefcase />
        <h2>Experience</h2>
      </div>
      <p>{{ user.experience }} years</p>
    </div>

    <div class="education">
      <div class="titleEducation">
        <CoEducation />
        <h2>Education</h2>
      </div>
      <p>{{ user.education }}</p>
    </div>

    <div class="resume">
      <div class="titleResume">
        <IcEmptyPage />
        <h2>Resume</h2>
      </div>
      <div class="pdfIconWrapper">
        <FaRegFilePdf />
      </div>
      <p>{{ user.resume }}</p>
    </div>
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

.container > div {
  padding: 8px;
  background-color: var(--second-color);
  border-radius: 16px;
}

.info {
  margin-bottom: 16px;
}

.username {
  font-size: 28px;
  font-weight: 600;
}

.position {
  color: var(--main-color);
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.editLink {
  padding: 8px;
  align-items: center;
  background-color: var(--main-color);
  color: white;
  font-size: 16px;
  font-weight: 600;
  max-height: 45px;
  display: flex;
  gap: 8px;
  border-radius: 48px;
}

.infoWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.requirements {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: clamp(4px, 1.5vw, 12px);
  font-size: 14px;
  margin-bottom: 16px;
}

.requirementsWrapper {
  display: flex;
  gap: 4px;
  align-items: center;
  flex: 0 0 auto;
  padding: 0 !important;
  white-space: nowrap;
}

.requirementsWrapper :deep(svg) {
  flex-shrink: 0;
}

.emailJoined :deep(svg) {
  flex-shrink: 0;
}

.accent {
  font-weight: 600;
  color: var(--salary);
}

.emailWrapper {
  display: flex;
  gap: 4px;
  align-items: center;
}

.joinedWrapper {
  display: flex;
  gap: 4px;
  align-items: center;
}

.emailJoined {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.titleSkill {
  display: flex;
  gap: 6px;
  font-size: 20px;
  font-weight: 900;
  align-items: center;
  margin-bottom: 8px;
}

.titleSkill svg {
  color: var(--main-color);
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

.skills {
  margin-bottom: 16px;
}

.titleLanguage {
  display: flex;
  gap: 6px;
  font-size: 20px;
  font-weight: 900;
  align-items: center;
  margin-bottom: 8px;
}

.titleLanguage svg {
  color: var(--main-color);
}

.languageList {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
}

.languageItem {
  padding: 4px;
  border: 1px solid var(--third-color);
  border-radius: 16px;
  white-space: nowrap;
  font-size: 16px;
  font-weight: 400;
}

.languages {
  margin-bottom: 16px;
}

.titleExperience {
  display: flex;
  gap: 6px;
  font-size: 20px;
  font-weight: 900;
  align-items: center;
}

.experience svg {
  color: var(--main-color);
}

.experience {
  display: block;
  margin-bottom: 16px;
}

.experience > p {
  margin-left: 26px;
}

.titleEducation {
  display: flex;
  gap: 6px;
  font-size: 20px;
  font-weight: 900;
  align-items: center;
}

.education svg {
  color: var(--main-color);
}

.education {
  display: block;
  margin-bottom: 16px;
}

.education > p {
  margin-left: 26px;
}

.resume {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr);
  column-gap: 16px;
  row-gap: 8px;
  align-items: center;
}

.titleResume {
  grid-column: 1 / -1;
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
}

.titleResume svg {
  color: var(--main-color);
}

.pdfIconWrapper {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background-color: white;
  color: var(--main-color);
  font-size: 20px;
}

.resume > p {
  min-width: 0;
  font-size: 16px;
  font-weight: 600;
}

@media screen and (min-width: 768px) {
  .container {
    padding: 12px 48px;
  }

  .skillItem {
    padding: 8px;
    font-size: 20px;
  }

  .languageItem {
    padding: 8px;
    font-size: 20px;
  }

  .requirements {
    justify-content: start;
    gap: 24px;
    font-size: 20px;
  }

  .container > div {
    padding: 8px 24px;
  }

  .title {
    font-size: 48px;
    margin-bottom: 24px;
  }

  .info,
  .skills,
  .languages,
  .education,
  .experience {
    margin-bottom: 24px;
  }

  .username {
    font-size: 36px;
  }

  .position {
    font-size: 32px;
  }

  .emailJoined {
    font-size: 20px;
  }

  .titleSkill,
  .titleLanguage,
  .titleEducation,
  .titleExperience,
  .titleResume {
    font-size: 28px;
  }

  .education p,
  .experience p,
  .resume p {
    font-size: 20px;
  }

  .editLink {
    padding: 16px;
    font-size: 20px;
    gap: 16px;
    min-width: 180px;
  }
}

@media screen and (min-width: 1440px) {
  .container {
    padding: 12px 200px;
  }
}
</style>
