<script setup lang="ts">
import { ref } from 'vue'
import {
  AnOutlinedArrowRight,
  BsBriefcase,
  CaSkillLevel,
  BsListCheck,
  CoEducation,
  McCoin2Line,
  TaOutlineBuildingSkyscraper,
  FlDocumentOnePage,
  ClUsers,
  AkLaptopDevice,
  BxBuildings,
  BsHouseAdd,
  LaTelegramPlane,
} from '@kalimahapps/vue-icons'

const skills = ref<string[]>([])
const requirements = ref<string[]>([])
const skillDraft = ref('')
const requirementDraft = ref('')
const isAddingSkill = ref(false)
const isAddingRequirement = ref(false)
const description = ref('')
const workType = ref('Hybrid')

function addSkill() {
  const skill = skillDraft.value.trim()
  if (!skill || skills.value.some((item) => item.toLowerCase() === skill.toLowerCase())) {
    return
  }

  skills.value.push(skill)
  skillDraft.value = ''
  isAddingSkill.value = false
}

function addRequirement() {
  const requirement = requirementDraft.value.trim()
  if (
    !requirement ||
    requirements.value.some(
      (item) => item.toLowerCase() === requirement.toLowerCase(),
    )
  ) {
    return
  }

  requirements.value.push(requirement)
  requirementDraft.value = ''
  isAddingRequirement.value = false
}

function removeSkill(index: number) {
  skills.value.splice(index, 1)
}

function removeRequirement(index: number) {
  requirements.value.splice(index, 1)
}
</script>

<template>
  <main class="postJobPage">
    <RouterLink class="backLink" to="/find-employees">
      <AnOutlinedArrowRight class="backIcon" />
      Find Candidates
    </RouterLink>

    <section class="postJobCard">
      <div class="pageHeading">
        <BsBriefcase />
        <div>
          <h1>Post a Job</h1>
          <p>
            Find the right talent for your team. Fill in the details below and
            attract qualified candidates.
          </p>
        </div>
      </div>

      <form class="jobForm" @submit.prevent>
        <label class="formField">
          <span class="fieldTitle"><BsBriefcase />Position title *</span>
          <input
            class="textControl"
            type="text"
            name="position"
            placeholder="e.g. Frontend Developer"
            required
          />
        </label>

        <section class="chipSection">
          <h2 class="fieldTitle"><CaSkillLevel />Skills *</h2>
          <p class="fieldHint">Add the skills required for this position.</p>
          <ul class="chipList">
            <li v-for="(skill, index) in skills" :key="`${skill}-${index}`" class="chip">
              <span>{{ skill }}</span>
              <button
                type="button"
                :aria-label="`Remove ${skill}`"
                @click="removeSkill(index)"
              >
                ×
              </button>
            </li>
            <li>
              <button
                class="addButton"
                type="button"
                @click="isAddingSkill = !isAddingSkill"
              >
                <span class="plus">+</span>
                {{ isAddingSkill ? 'Cancel' : 'Add skill' }}
              </button>
            </li>
          </ul>
          <div v-if="isAddingSkill" class="chipEntry">
            <input
              v-model="skillDraft"
              class="textControl"
              type="text"
              placeholder="Enter a skill"
              @keydown.enter.prevent="addSkill"
            />
            <button class="addButton" type="button" @click="addSkill">
              Add
            </button>
          </div>
        </section>

        <section class="chipSection">
          <h2 class="fieldTitle"><BsListCheck />Requirements *</h2>
          <p class="fieldHint">Add the key requirements for this position.</p>
          <ul class="chipList">
            <li
              v-for="(requirement, index) in requirements"
              :key="`${requirement}-${index}`"
              class="chip"
            >
              <span>{{ requirement }}</span>
              <button
                type="button"
                :aria-label="`Remove ${requirement}`"
                @click="removeRequirement(index)"
              >
                ×
              </button>
            </li>
            <li>
              <button
                class="addButton"
                type="button"
                @click="isAddingRequirement = !isAddingRequirement"
              >
                <span class="plus">+</span>
                {{ isAddingRequirement ? 'Cancel' : 'Add requirement' }}
              </button>
            </li>
          </ul>
          <div v-if="isAddingRequirement" class="chipEntry">
            <input
              v-model="requirementDraft"
              class="textControl"
              type="text"
              placeholder="Enter a requirement"
              @keydown.enter.prevent="addRequirement"
            />
            <button
              class="addButton"
              type="button"
              @click="addRequirement"
            >
              Add
            </button>
          </div>
        </section>

        <label class="formField">
          <span class="fieldTitle"><BsBriefcase />Experience *</span>
          <select class="textControl" name="experience" required>
            <option value="" disabled selected>Select experience level</option>
            <option value="Entry level">Entry level</option>
            <option value="1-2 years">1–2 years</option>
            <option value="3-5 years">3–5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </label>

        <fieldset class="educationField">
          <legend class="fieldTitle"><CoEducation />Education</legend>
          <label class="checkboxLabel">
            <input type="checkbox" name="specializedEducation" />
            <span>Bachelor's degree in a relevant field is required</span>
          </label>
        </fieldset>

        <label class="formField">
          <span class="fieldTitle"><McCoin2Line />Salary (€) *</span>
          <input
            class="textControl"
            type="number"
            name="salary"
            min="0"
            placeholder="e.g. 3000"
            required
          />
        </label>

        <label class="formField">
          <span class="fieldTitle"><TaOutlineBuildingSkyscraper />Industry *</span>
          <input
            class="textControl"
            type="text"
            name="industry"
            placeholder="e.g. IT, Education, Healthcare"
            required
          />
        </label>

        <label class="formField">
          <span class="fieldTitle"><FlDocumentOnePage />Job description *</span>
          <textarea
            v-model="description"
            class="textControl descriptionInput"
            name="description"
            maxlength="2000"
            placeholder="Tell us more about the position, responsibilities and what makes your company great..."
            required
          ></textarea>
          <span class="characterCount">{{ description.length }}/2000</span>
        </label>

        <fieldset class="workTypeField">
          <legend class="fieldTitle"><ClUsers />Work type *</legend>
          <div class="workTypeOptions">
            <label
              class="workTypeOption"
              :class="{ selected: workType === 'Remote' }"
            >
              <AkLaptopDevice />
              <span class="workTypeText">
                <strong>Remote</strong>
                <small>Work from anywhere</small>
              </span>
              <input
                v-model="workType"
                type="radio"
                name="workType"
                value="Remote"
                required
              />
            </label>
            <label
              class="workTypeOption"
              :class="{ selected: workType === 'Hybrid' }"
            >
              <BsHouseAdd />
              <span class="workTypeText">
                <strong>Hybrid</strong>
                <small>Office + remote</small>
              </span>
              <input
                v-model="workType"
                type="radio"
                name="workType"
                value="Hybrid"
                required
              />
            </label>
            <label
              class="workTypeOption"
              :class="{ selected: workType === 'On-site' }"
            >
              <BxBuildings />
              <span class="workTypeText">
                <strong>On-site</strong>
                <small>Work from the office</small>
              </span>
              <input
                v-model="workType"
                type="radio"
                name="workType"
                value="On-site"
                required
              />
            </label>
          </div>
        </fieldset>

        <button class="submitButton" type="submit">
          <LaTelegramPlane />
          Post Job
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.postJobPage {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 16px 16px 40px;
  color: var(--third-color);
}

.backLink {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  color: #4d4d4d;
}

.backIcon {
  transform: rotate(180deg);
}

.postJobCard {
  padding: 24px 16px;
  border-radius: 16px;
  background-color: var(--second-color);
}

.pageHeading {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
}

.pageHeading > svg {
  flex: 0 0 36px;
  width: 36px;
  height: 36px;
  color: var(--main-color);
}

h1 {
  margin-bottom: 4px;
  font-size: 32px;
  font-weight: 900;
  line-height: 1.1;
}

.pageHeading p,
.fieldHint {
  color: #536273;
  font-family: var(--second-family);
  font-size: 14px;
  line-height: 1.5;
}

.jobForm {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.formField {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.fieldTitle {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--third-color);
  font-size: 16px;
  font-weight: 800;
}

.fieldTitle svg {
  flex: 0 0 20px;
  width: 20px;
  height: 20px;
}

.textControl {
  width: 100%;
  min-height: 44px;
  padding: 10px 12px;
  border: 1px solid #cbd0d5;
  border-radius: 10px;
  background-color: rgb(255 255 255 / 75%);
  color: var(--third-color);
  font-family: var(--second-family);
  font-size: 14px;
}

.textControl:focus {
  border-color: var(--main-color);
  outline: 2px solid rgb(134 0 83 / 15%);
}

.chipSection {
  min-width: 0;
}

.fieldHint {
  margin: 4px 0 10px;
}

.chipList {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 34px;
  padding: 5px 10px 5px 12px;
  border: 1px solid #cbd0d5;
  border-radius: 20px;
  background-color: rgb(255 255 255 / 65%);
  font-family: var(--second-family);
  font-size: 13px;
}

.chip button {
  color: #526174;
  font-size: 20px;
  line-height: 1;
}

.addButton {
  display: inline-flex;
  min-height: 36px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 6px 14px;
  border: 1px solid var(--main-color);
  border-radius: 20px;
  color: var(--main-color);
  font-size: 14px;
  font-weight: 700;
}

.plus {
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
}

.chipEntry {
  display: flex;
  gap: 8px;
  margin-top: 10px;
}

.chipEntry .textControl {
  min-width: 0;
}

.educationField,
.workTypeField {
  min-width: 0;
  border: 0;
}

.educationField legend,
.workTypeField legend {
  margin-bottom: 10px;
}

.checkboxLabel {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--second-family);
  font-size: 14px;
}

.checkboxLabel input,
.workTypeOption input {
  accent-color: var(--main-color);
}

.descriptionInput {
  min-height: 110px;
  resize: vertical;
}

.characterCount {
  align-self: flex-end;
  margin-top: -6px;
  color: #64748b;
  font-family: var(--second-family);
  font-size: 12px;
}

.workTypeOptions {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
}

.workTypeOption {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr) 16px;
  align-items: center;
  gap: 10px;
  min-height: 68px;
  padding: 10px 12px;
  border: 1px solid #cbd0d5;
  border-radius: 12px;
  background-color: rgb(255 255 255 / 65%);
  cursor: pointer;
}

.workTypeOption > svg {
  width: 26px;
  height: 26px;
}

.workTypeText {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-family: var(--second-family);
  font-size: 13px;
}

.workTypeText small {
  color: #64748b;
  font-size: 12px;
}

.workTypeOption input {
  width: 16px;
  height: 16px;
  margin: 0;
}

.workTypeOption.selected {
  border-color: var(--main-color);
  background-color: #fff3f7;
  color: var(--main-color);
}

.submitButton {
  display: flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0;
  border-radius: 28px;
  background-color: var(--main-color);
  color: white;
  font-weight: 800;
}

.submitButton svg {
  width: 18px;
  height: 18px;
}

@media screen and (min-width: 768px) {
  .postJobPage {
    padding: 24px 32px 48px;
  }

  .postJobCard {
    padding: 32px;
  }

  .pageHeading {
    gap: 20px;
    margin-bottom: 32px;
  }

  .pageHeading > svg {
    flex-basis: 44px;
    width: 44px;
    height: 44px;
  }

  h1 {
    font-size: 40px;
  }

  .pageHeading p,
  .fieldHint {
    font-size: 16px;
  }

  .jobForm {
    gap: 24px;
  }

  .fieldTitle {
    font-size: 18px;
  }

  .textControl {
    min-height: 48px;
    padding: 12px 14px;
    font-size: 16px;
  }

  .chip {
    min-height: 38px;
    padding: 6px 12px 6px 14px;
    font-size: 14px;
  }

  .addButton {
    min-height: 40px;
    padding: 7px 16px;
    font-size: 15px;
  }

  .workTypeOptions {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .workTypeOption {
    gap: 8px;
    min-height: 76px;
    padding: 10px;
  }

  .descriptionInput {
    min-height: 140px;
  }

  .submitButton {
    min-height: 54px;
    font-size: 16px;
  }
}

@media screen and (min-width: 1440px) {
  .postJobPage {
    padding: 24px 32px 64px;
  }

  .postJobCard {
    padding: 40px 48px;
  }

  .pageHeading {
    margin-bottom: 36px;
  }

  .jobForm {
    gap: 26px;
  }

  .workTypeOption {
    min-height: 84px;
    padding: 12px 16px;
  }

  .submitButton {
    cursor: pointer;
    border: 2px solid var(--main-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .submitButton:hover {
    background-color: white;
    color: var(--main-color);
  }
}
</style>
