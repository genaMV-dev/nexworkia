<script setup lang="ts"></script>

<template>
  <main class="loginPage">
    <section class="loginCard">
      <h1>Welcome back</h1>
      <p class="subtitle">Sign in to continue to Nexworkia.</p>

      <form class="loginForm" @submit.prevent>
        <label class="field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            autocomplete="email"
            placeholder="name@example.com"
            required
          />
        </label>

        <label class="field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Enter your password"
            required
          />
        </label>

        <button class="loginButton" type="submit">Sign in</button>
      </form>

      <p class="signUpPrompt">
        Don’t have an account?
        <RouterLink to="/register">Sign up</RouterLink>
      </p>
    </section>
  </main>
</template>

<style scoped>
.loginPage {
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  color: var(--third-color);
}

.loginCard {
  width: 100%;
  max-width: 520px;
  padding: 24px 20px;
  border-radius: 24px;
  background-color: var(--second-color);
}

h1 {
  font-size: 32px;
  font-weight: 900;
  text-align: center;
}

.subtitle {
  margin: 8px 0 24px;
  font-family: var(--second-family);
  font-size: 16px;
  text-align: center;
}

.loginForm {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  font-weight: 600;
}

.field input {
  width: 100%;
  min-height: 48px;
  padding: 10px 14px;
  border: 1px solid rgb(36 36 66 / 35%);
  border-radius: 12px;
  background-color: white;
  color: var(--third-color);
  font-family: var(--second-family);
  font-size: 16px;
}

.field input:focus {
  border-color: var(--main-color);
  outline: 2px solid #86005333;
}

.loginButton {
  min-height: 48px;
  margin-top: 4px;
  border: 2px solid var(--main-color);
  border-radius: 48px;
  background-color: var(--main-color);
  color: var(--second-color);
  font-size: 18px;
  font-weight: 700;
}

.signUpPrompt {
  margin-top: 20px;
  font-family: var(--second-family);
  text-align: center;
}

.signUpPrompt a {
  color: var(--main-color);
  font-weight: 700;
}

@media screen and (min-width: 768px) {
  .loginPage {
    padding: 48px 24px;
  }

  .loginCard {
    padding: 36px 40px;
  }

  h1 {
    font-size: 40px;
  }

  .subtitle {
    font-size: 18px;
  }

  .loginButton {
    min-height: 56px;
    font-size: 20px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
}

@media screen and (min-width: 1440px) {
  .loginPage {
    padding-top: 64px;
  }

  .loginButton:hover {
    background-color: white;
    color: var(--main-color);
  }
}
</style>
