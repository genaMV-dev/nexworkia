<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { users } from '../data/user.ts'
import FilterCandidatesMenu, {
  type CandidateFilters,
} from '../components/FilterCandidatesMenu.vue'
import {
  AkLocation,
  AkLaptopDevice,
  BsHouseAdd,
  BxBuildings,
  AkEyeOpen,
  McFilter2Fill,
  AnOutlinedSearch,
  BsBriefcase,
} from '@kalimahapps/vue-icons'

const industryOptions = [
  { value: 'all', label: 'All Industries' },
  { value: 'it', label: 'IT & Software Development' },
  { value: 'healthcare', label: 'Healthcare & Medicine' },
  { value: 'legal', label: 'Legal Services' },
  { value: 'education', label: 'Education & Teaching' },
  { value: 'transportation', label: 'Transportation & Logistics' },
  { value: 'finance', label: 'Finance & Banking' },
  { value: 'marketing', label: 'Marketing & Advertising' },
  { value: 'engineering', label: 'Engineering & Manufacturing' },
  { value: 'sales', label: 'Sales & Retail' },
  { value: 'hospitality', label: 'Hospitality & Tourism' },
  { value: 'construction', label: 'Construction & Real Estate' },
]

const filters = reactive<CandidateFilters>({
  position: '',
  industry: 'all',
  experience: '',
  salary: '',
  workTypes: [] as string[],
  location: '',
})

const appliedFilters = ref<CandidateFilters>({
  ...filters,
  workTypes: [...filters.workTypes],
})

const searchQuery = ref('')
const filtersAreOpen = ref(false)



function clearFilters() {
  filters.position = ''
  filters.industry = 'all'
  filters.experience = ''
  filters.salary = ''
  filters.workTypes = []
  filters.location = ''
  applyFilters()
}

function applyFilters(nextFilters: CandidateFilters = filters) {
  appliedFilters.value = {
    ...nextFilters,
    workTypes: [...nextFilters.workTypes],
  }
}

const filteredEmployees = computed(() => {
  const activeFilters = appliedFilters.value
  const search = searchQuery.value.trim().toLowerCase()
  const position = activeFilters.position.trim().toLowerCase()
  const location = activeFilters.location.trim().toLowerCase()
  const minimumExperience =
    activeFilters.experience === '' ? null : Number(activeFilters.experience)
  const maximumSalary =
    activeFilters.salary === '' ? null : Number(activeFilters.salary)

  return users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
    const matchesSearch =
      !search ||
      [
        user.firstName,
        user.lastName,
        fullName,
        user.position,
        ...user.skills,
      ].some((value) => value.toLowerCase().includes(search))
    const matchesPosition =
      !position || user.position.toLowerCase().includes(position)
    const matchesIndustry =
      activeFilters.industry === 'all' ||
      user.industry === activeFilters.industry
    const matchesExperience =
      minimumExperience === null || user.experience >= minimumExperience
    const matchesSalary =
      maximumSalary === null || user.expectedSalary <= maximumSalary
    const matchesWorkType =
      activeFilters.workTypes.length === 0 ||
      activeFilters.workTypes.includes(user.workFormat)
    const matchesLocation =
      !location || user.location.toLowerCase().includes(location)

    return (
      matchesSearch &&
      matchesPosition &&
      matchesIndustry &&
      matchesExperience &&
      matchesSalary &&
      matchesWorkType &&
      matchesLocation
    )
  })
})
</script>

<template>
  <main class="findEmployeesPage">
    <RouterLink class="backLink" to="/post-job">
      <span aria-hidden="true">‹</span>
      Post a Job
    </RouterLink>

    <div class="pageLayout">
      <aside class="desktopFilters">
        <h2 class="filterTitle"><McFilter2Fill />Filters</h2>
        <form class="desktopFilterForm" @submit.prevent="applyFilters()">
          <label class="filterField">
            <span>Position</span>
            <input
              v-model="filters.position"
              type="text"
              placeholder="e.g. Frontend Developer"
            />
          </label>

          <label class="filterField">
            <span>Industry</span>
            <select v-model="filters.industry">
              <option
                v-for="industry in industryOptions"
                :key="industry.value"
                :value="industry.value"
              >
                {{ industry.label }}
              </option>
            </select>
          </label>

          <label class="filterField">
            <span>Experience (years)</span>
            <input
              v-model="filters.experience"
              type="number"
              min="0"
              placeholder="e.g. 3"
            />
          </label>

          <label class="filterField">
            <span>Expected Salary (€)</span>
            <input
              v-model="filters.salary"
              type="number"
              min="0"
              placeholder="e.g. 3500"
            />
          </label>

          <fieldset class="workTypeField">
            <legend>Work Type</legend>
            <label
              v-for="workType in ['Remote', 'Hybrid', 'On-site']"
              :key="workType"
            >
              <input
                v-model="filters.workTypes"
                type="checkbox"
                :value="workType.toLowerCase()"
              />
              <span>{{ workType }}</span>
            </label>
          </fieldset>

          <label class="filterField">
            <span>Location</span>
            <input
              v-model="filters.location"
              type="text"
              placeholder="e.g. Kyiv, Ukraine"
            />
          </label>

          <button class="applyFiltersButton" type="submit">
            Apply Filters
          </button>
          <button
            class="clearFiltersButton"
            type="button"
            @click="clearFilters"
          >
            Clear All
          </button>
        </form>
      </aside>

      <section class="candidateContent">
        <header class="pageHeading">
          <h1>Find Candidates</h1>
          <p>
            Search and filter talent to find the right employee for your team.
          </p>
        </header>

        <div class="toolbar">
          <label class="searchField">
            <AnOutlinedSearch />
            <input
              v-model="searchQuery"
              type="search"
              placeholder="Search by position, skills or keywords..."
            />
          </label>
        </div>

        <div class="mobileFilterArea">
          <button
            class="mobileFilterButton"
            type="button"
            :aria-expanded="filtersAreOpen"
            @click="filtersAreOpen = !filtersAreOpen"
          >
            <McFilter2Fill />
            Filters
          </button>
          <FilterCandidatesMenu v-if="filtersAreOpen" />
        </div>

        <ul class="candidateList">
          <li
            v-for="candidate in filteredEmployees"
            :key="candidate.id"
            class="candidateCard"
          >
            <div class="candidateSummary">
              <h2>{{ candidate.firstName }} {{ candidate.lastName }}</h2>
              <p class="candidatePosition">{{ candidate.position }}</p>

              <div class="candidateMeta">
                <span><AkLocation />{{ candidate.location }}</span>
                <span>
                  <AkLaptopDevice v-if="candidate.workFormat === 'remote'" />
                  <BxBuildings v-else-if="candidate.workFormat === 'on-site'" />
                  <BsHouseAdd v-else />
                  {{
                    candidate.workFormat === 'on-site'
                      ? 'On-site'
                      : candidate.workFormat
                  }}
                </span>
                <span><BsBriefcase />{{ candidate.experience }} years</span>
              </div>

              <ul class="skillList">
                <li
                  v-for="skill in candidate.skills.slice(0, 3)"
                  :key="skill"
                  class="skillItem"
                >
                  {{ skill }}
                </li>
                <li v-if="candidate.skills.length > 3" class="moreSkills">
                  ...
                </li>
              </ul>
            </div>

            <div class="candidateSalary">
              <span>Expected Salary</span>
              <strong
                >€{{ candidate.expectedSalary.toLocaleString('en-US') }} /
                month</strong
              >
            </div>

            <RouterLink class="profileButton" to="/find-employees/:id">
              <AkEyeOpen />
              View Profile
            </RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>

<style scoped>
.findEmployeesPage {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 12px 8px 32px;
  color: var(--third-color);
}

.backLink {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: #4d4d4d;
  font-size: 14px;
  font-weight: 700;
}

.backLink span {
  font-size: 26px;
  line-height: 0.7;
}

.pageLayout {
  display: block;
}

.desktopFilters {
  display: none;
}

.pageHeading {
  margin: 0 auto 16px;
  text-align: center;
}

.pageHeading h1 {
  font-size: 30px;
  font-weight: 900;
  line-height: 1.1;
}

.pageHeading p {
  max-width: 440px;
  margin: 6px auto 0;
  font-family: var(--second-family);
  font-size: 14px;
}

.toolbar {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
}

.searchField,
.sortField {
  display: flex;
  min-width: 0;
  min-height: 40px;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  border: 1px solid #cbd0d5;
  border-radius: 9px;
  background-color: #fff;
}

.searchField svg {
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
}

.searchField input,
.sortField select {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--third-color);
  font-family: var(--second-family);
  font-size: 12px;
}

.mobileFilterArea {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
}

.mobileFilterButton {
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid #cbd0d5;
  border-radius: 9px;
  background-color: #fffaf6;
  color: var(--third-color);
  font-size: 15px;
  font-weight: 800;
}

.mobileFilterButton svg {
  width: 18px;
  height: 18px;
}

.candidateList {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.candidateCard {
  display: flex;
  min-width: 0;
  flex-direction: column;
  gap: 8px;
  padding: 10px;
  border-radius: 14px;
  background-color: var(--second-color);
}

.candidateSummary {
  min-width: 0;
}

.candidateSummary h2 {
  font-size: 16px;
  font-weight: 900;
  line-height: 1.2;
}

.candidatePosition {
  margin-top: 1px;
  color: var(--main-color);
  font-size: 12px;
  font-weight: 800;
}

.candidateMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-top: 6px;
  font-family: var(--second-family);
  font-size: 11px;
}

.candidateMeta span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}

.candidateMeta svg {
  flex: 0 0 14px;
  width: 14px;
  height: 14px;
}

.skillList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin-top: 6px;
}

.skillItem,
.moreSkills {
  display: inline-flex;
  min-height: 21px;
  align-items: center;
  padding: 2px 6px;
  border: 1px solid rgb(36 36 66 / 25%);
  border-radius: 16px;
  background-color: rgb(255 255 255 / 55%);
  font-family: var(--second-family);
  font-size: 10px;
  white-space: nowrap;
}

.moreSkills {
  padding: 2px 7px;
  font-size: 13px;
  font-weight: 700;
}

.candidateSalary {
  font-size: 12px;
}

.candidateSalary span {
  display: block;
  margin-bottom: 1px;
  color: #536273;
  font-family: var(--second-family);
  font-size: 10px;
}

.candidateSalary strong {
  color: var(--salary);
  font-size: 15px;
  font-weight: 900;
}

.profileButton {
  display: flex;
  min-height: 30px;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border: 1px solid var(--main-color);
  border-radius: 18px;
  color: var(--main-color);
  font-size: 12px;
  font-weight: 800;
}

.profileButton svg {
  width: 15px;
  height: 15px;
}

.visuallyHidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
  .findEmployeesPage {
    padding: 20px 24px 40px;
  }

  .backLink {
    margin-bottom: 18px;
    font-size: 16px;
  }

  .pageHeading {
    margin-bottom: 20px;
  }

  .pageHeading h1 {
    font-size: 40px;
  }

  .pageHeading p {
    font-size: 16px;
  }

  .toolbar {
    flex-direction: row;
    margin-bottom: 12px;
  }

  .searchField {
    flex: 1;
    min-height: 46px;
    padding: 0 14px;
  }

  .searchField input,
  .sortField select {
    font-size: 14px;
  }

  .sortField {
    flex: 0 0 220px;
    min-height: 46px;
  }

  .mobileFilterArea {
    align-items: stretch;
    margin-bottom: 16px;
  }

  .mobileFilterButton {
    min-height: 44px;
  }

  .candidateList {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
  }

  .candidateCard {
    gap: 12px;
    padding: 16px;
    border-radius: 16px;
  }

  .candidateSummary h2 {
    font-size: 20px;
  }

  .candidatePosition {
    font-size: 15px;
  }

  .candidateMeta {
    gap: 8px 12px;
    font-size: 13px;
  }

  .candidateMeta svg {
    flex-basis: 17px;
    width: 17px;
    height: 17px;
  }

  .skillList {
    gap: 6px;
    margin-top: 10px;
  }

  .skillItem,
  .moreSkills {
    min-height: 27px;
    padding: 4px 9px;
    font-size: 12px;
  }

  .candidateSalary {
    font-size: 17px;
  }

  .candidateSalary span {
    font-size: 13px;
  }

  .candidateSalary strong {
    font-size: 19px;
  }

  .profileButton {
    min-height: 38px;
    font-size: 14px;
  }
}

@media screen and (min-width: 1440px) {
  .findEmployeesPage {
    padding: 24px 20px 40px;
  }

  .pageLayout {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    align-items: start;
    gap: 28px;
  }

  .desktopFilters {
    display: block;
    padding: 20px;
    border-radius: 16px;
    background-color: #fff6ed;
  }

  .filterTitle {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 22px;
    font-size: 22px;
    font-weight: 900;
  }

  .filterTitle svg {
    width: 22px;
    height: 22px;
  }

  .desktopFilterForm {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .filterField {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    font-weight: 800;
  }

  .filterField input,
  .filterField select {
    width: 100%;
    min-width: 0;
    height: 42px;
    padding: 0 12px;
    border: 1px solid #cbd0d5;
    border-radius: 9px;
    background-color: #fff;
    color: var(--third-color);
    font-family: var(--second-family);
    font-size: 13px;
  }

  .workTypeField {
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: 0;
    font-size: 14px;
  }

  .workTypeField legend {
    margin-bottom: 2px;
    font-weight: 800;
  }

  .workTypeField label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: var(--second-family);
    font-size: 14px;
  }

  .workTypeField input {
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: var(--main-color);
  }

  .applyFiltersButton {
    min-height: 44px;
    margin-top: 4px;
    border-radius: 10px;
    background-color: var(--main-color);
    color: white;
    font-size: 14px;
    font-weight: 800;
  }

  .clearFiltersButton {
    align-self: center;
    color: var(--third-color);
    font-size: 14px;
    text-decoration: underline;
  }

  .candidateContent {
    min-width: 0;
  }

  .pageHeading {
    margin: -4px 0 24px;
  }

  .pageHeading h1 {
    font-size: 48px;
  }

  .pageHeading p {
    max-width: none;
    margin-top: 8px;
    font-size: 18px;
  }

  .toolbar {
    flex-direction: row;
    gap: 12px;
    margin-bottom: 20px;
  }

  .searchField {
    flex: 1;
    min-height: 46px;
    padding: 0 14px;
    border-radius: 10px;
  }

  .searchField svg {
    flex-basis: 20px;
    width: 20px;
    height: 20px;
  }

  .searchField input,
  .sortField select {
    font-size: 14px;
  }

  .sortField {
    flex: 0 0 200px;
    min-height: 46px;
    padding: 0 12px;
    border-radius: 10px;
  }

  .mobileFilterArea {
    display: none;
  }

  .candidateList {
    gap: 12px;
  }

  .candidateCard {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 190px 150px;
    align-items: center;
    gap: 16px;
    min-height: 134px;
    padding: 16px 20px;
    border-radius: 16px;
  }

  .candidateSummary h2 {
    font-size: 22px;
  }

  .candidatePosition {
    font-size: 15px;
  }

  .candidateMeta {
    gap: 8px 24px;
    margin-top: 8px;
    font-size: 14px;
  }

  .candidateMeta svg {
    flex-basis: 19px;
    width: 19px;
    height: 19px;
  }

  .skillList {
    gap: 8px;
    margin-top: 10px;
  }

  .skillItem,
  .moreSkills {
    min-height: 29px;
    padding: 4px 12px;
    font-size: 13px;
  }

  .candidateSalary {
    min-height: 56px;
    padding-left: 22px;
    border-left: 1px solid rgb(36 36 66 / 20%);
  }

  .candidateSalary span {
    margin-bottom: 4px;
    font-size: 14px;
  }

  .candidateSalary strong {
    font-size: 20px;
  }

  .profileButton {
    min-height: 42px;
    font-size: 14px;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  .profileButton:hover {
    background-color: var(--main-color);
    color: white;
  }
}
</style>
