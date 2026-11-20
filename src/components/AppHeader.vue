<script setup lang="ts">
import { ChMenuHamburger, AkChevronDownSmall } from '@kalimahapps/vue-icons'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BurgerMenu from '../components/BurgerMenu.vue'
import ForEmployersMenu from '../components/ForEmployersMenu.vue'
import { user } from '../data/user.ts'

const burgerMenuIsOpen = ref<boolean>(false)
const burgerButtonRef = ref<HTMLButtonElement | null>(null)
const burgerMenuRef = ref<InstanceType<typeof BurgerMenu> | null>(null)
const forEmployersMenuIsOpen = ref<boolean>(false)
const forEmployersButtonRef = ref<HTMLButtonElement | null>(null)
const forEmployersMenuRef = ref<InstanceType<typeof ForEmployersMenu> | null>(null)
const route = useRoute()

function openToggler() {
  burgerMenuIsOpen.value = !burgerMenuIsOpen.value
}

function toggleForEmployersMenu() {
  forEmployersMenuIsOpen.value = !forEmployersMenuIsOpen.value
}

function closeOnOutsideClick(event: PointerEvent) {
  const target = event.target
  if (!(target instanceof Node)) return

  const burgerMenuElement = burgerMenuRef.value?.$el
  if (
    (burgerMenuElement instanceof HTMLElement &&
      burgerMenuElement.contains(target)) ||
    burgerButtonRef.value?.contains(target)
  ) {
    // Click is inside the burger menu; the employer submenu is unrelated.
  } else {
    burgerMenuIsOpen.value = false
  }

  const forEmployersMenuElement = forEmployersMenuRef.value?.$el
  if (
    (forEmployersMenuElement instanceof HTMLElement &&
      forEmployersMenuElement.contains(target)) ||
    forEmployersButtonRef.value?.contains(target)
  ) {
    return
  }

  forEmployersMenuIsOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    burgerMenuIsOpen.value = false
    forEmployersMenuIsOpen.value = false
  }
)

onMounted(() => {
  document.addEventListener('pointerdown', closeOnOutsideClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', closeOnOutsideClick)
})
</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/">nex<span class="accent">WORK</span>ia</RouterLink>
    </div>

    <nav>
      <button ref="burgerButtonRef" @click="openToggler" class="burgerBtn">
        <ChMenuHamburger />
      </button>

      <ul class="linkList">
        <li class="linkItem"><RouterLink to="/jobs">Find Job</RouterLink></li>
        <li v-if="user.role === 'employer'" class="linkItem forEmployersItem">
          <button
            ref="forEmployersButtonRef"
            class="forEmployersBtn"
            type="button"
            :aria-expanded="forEmployersMenuIsOpen"
            @click="toggleForEmployersMenu"
          >
            For Employers
            <span
              class="forEmployersChevron"
              :class="{ 'is-open': forEmployersMenuIsOpen }"
            >
              <AkChevronDownSmall />
            </span>
          </button>
          <Transition name="employers">
            <ForEmployersMenu
              v-if="forEmployersMenuIsOpen"
              ref="forEmployersMenuRef"
            />
          </Transition>
        </li>
        <li class="linkItem"><RouterLink to="/profile">Profile</RouterLink></li>
        <li class="linkItem">
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>

    <div class="authBtns">
      <RouterLink class="loginLink" to="/login">Sign In</RouterLink>
      <RouterLink class="registerLink" to="/register">Sign Up</RouterLink>
    </div>
  </header>

  <Transition name="burger">
    <BurgerMenu ref="burgerMenuRef" v-if="burgerMenuIsOpen" />
  </Transition>
</template>

<style scoped>
.burger-enter-active,
.burger-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.burger-enter-from,
.burger-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.employers-enter-active,
.employers-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.employers-enter-from,
.employers-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

header {
  padding: 16px;
  background-color: var(--main-color);
  color: var(--second-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.linkList {
  display: none;
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
    font-family: var(--second-family);
  }

  nav a.router-link-active {
    color: var(--accent);
    position: relative;
  }

  nav a.router-link-active::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -34px;
    left: 0;
    height: 5px;
    background-color: currentColor;
  }

  .linkItem a, .linkItem button {
    transition: 0.3s color ease;
  }

  .linkItem a:hover, .linkItem button:hover {
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
    font-family: var(--font-family);
  }

  .loginLink {
    padding: 12px 32px;
    border: 2px solid var(--second-color);
    border-radius: 48px;
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
    border-radius: 48px;
    transition:
      0.3s border ease,
      0.3s background-color ease;
  }

  .registerLink:hover {
    border: 2px solid var(--accent);
    background-color: var(--accent);
  }

  .forEmployersBtn {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .forEmployersChevron {
    display: inline-flex;
    transition: transform 0.3s ease;
  }

  .forEmployersChevron.is-open {
    transform: rotate(180deg);
  }

  .forEmployersItem{
    position: relative;
  }
}
</style>
