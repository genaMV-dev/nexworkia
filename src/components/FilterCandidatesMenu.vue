<script setup lang="ts">
import { reactive } from 'vue'
import { McFilter2Fill } from '@kalimahapps/vue-icons'

export interface CandidateFilters {
  position: string
  industry: string
  experience: string
  salary: string
  workTypes: string[]
  location: string
}

const emit = defineEmits<{
  apply: [filters: CandidateFilters]
}>()

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

const filters = reactive({
  position: '',
  industry: 'all',
  experience: '',
  salary: '',
  workTypes: [] as string[],
  location: '',
})

function clearFilters() {
  filters.position = ''
  filters.industry = 'all'
  filters.experience = ''
  filters.salary = ''
  filters.workTypes = []
  filters.location = ''
  emit('apply', { ...filters, workTypes: [...filters.workTypes] })
}

function applyFilters() {
  emit('apply', { ...filters, workTypes: [...filters.workTypes] })
}
</script>

<template>
  <aside class="filterMenu">
    <h2 class="menuTitle"><McFilter2Fill />Filters</h2>

    <form class="filterForm" @submit.prevent="applyFilters">
      <label class="field">
        <span>Position</span>
        <input
          v-model="filters.position"
          type="text"
          placeholder="e.g. Frontend Developer"
        />
      </label>

      <label class="field">
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

      <label class="field">
        <span>Experience (years)</span>
        <input
          v-model="filters.experience"
          type="number"
          min="0"
          placeholder="e.g. 3"
        />
      </label>

      <label class="field">
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

      <label class="field">
        <span>Location</span>
        <input
          v-model="filters.location"
          type="text"
          placeholder="e.g. Kyiv, Ukraine"
        />
      </label>

      <button class="applyButton" type="submit">Apply Filters</button>
      <button class="clearButton" type="button" @click="clearFilters">
        Clear All
      </button>
    </form>
  </aside>
</template>

<style scoped>
.filterMenu {
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background-color: #fffaf6;
  color: var(--third-color);
  font-family: var(--second-family);
}

.menuTitle {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-family: var(--font-family);
  font-size: 20px;
  font-weight: 800;
}

.menuTitle svg {
  width: 20px;
  height: 20px;
}

.filterForm {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 13px;
  font-weight: 700;
}

.field input,
.field select {
  width: 100%;
  min-width: 0;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #cbd0d5;
  border-radius: 9px;
  background-color: #fff;
  color: var(--third-color);
  font-family: var(--second-family);
  font-size: 12px;
}

.field input:focus,
.field select:focus {
  border-color: var(--main-color);
  outline: 2px solid rgb(134 0 83 / 15%);
}

.workTypeField {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 0;
  font-size: 13px;
}

.workTypeField legend {
  margin-bottom: 3px;
  font-weight: 700;
}

.workTypeField label {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 18px;
  font-size: 12px;
}

.workTypeField input {
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: var(--main-color);
}

.applyButton {
  min-height: 38px;
  margin-top: 3px;
  border-radius: 10px;
  background-color: var(--main-color);
  color: white;
  font-size: 13px;
  font-weight: 800;
}

.clearButton {
  align-self: center;
  color: #536273;
  font-size: 12px;
  text-decoration: underline;
}

@media screen and (min-width: 768px) {
  .filterMenu {
    max-width: 360px;
    padding: 20px;
    border-radius: 16px;
  }

  .menuTitle {
    gap: 12px;
    margin-bottom: 18px;
    font-size: 24px;
  }

  .menuTitle svg {
    width: 24px;
    height: 24px;
  }

  .filterForm {
    gap: 16px;
  }

  .field {
    gap: 7px;
    font-size: 15px;
  }

  .field input,
  .field select {
    height: 42px;
    padding: 0 12px;
    font-size: 14px;
  }

  .workTypeField {
    gap: 7px;
    font-size: 15px;
  }

  .workTypeField label {
    min-height: 22px;
    font-size: 14px;
  }

  .workTypeField input {
    width: 18px;
    height: 18px;
  }

  .applyButton {
    min-height: 44px;
    font-size: 15px;
  }

  .clearButton {
    font-size: 14px;
  }
}
</style>
