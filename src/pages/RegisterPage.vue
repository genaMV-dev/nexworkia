<script setup lang="ts"></script>

<template>
  <main class="registerPage">
    <section class="registerCard">
      <h1>Create an account</h1>
      <p class="subtitle">Join Nexworkia and find your next opportunity.</p>

      <form class="registerForm" @submit.prevent>
        <div class="nameFields">
          <label class="field">
            <span>First name</span>
            <input
              type="text"
              name="firstName"
              autocomplete="given-name"
              placeholder="Enter your first name"
              required
            />
          </label>

          <label class="field">
            <span>Last name</span>
            <input
              type="text"
              name="lastName"
              autocomplete="family-name"
              placeholder="Enter your last name"
              required
            />
          </label>
        </div>

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
            autocomplete="new-password"
            placeholder="Create a password"
            required
          />
        </label>

        <button class="registerButton" type="submit">Create account</button>
      </form>

      <p class="signInPrompt">
        Already have an account?
        <RouterLink to="/login">Sign in</RouterLink>
      </p>
    </section>
  </main>
</template>

<style scoped>
.registerPage {
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  color: var(--third-color);
}

.registerCard {
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

.registerForm,
.nameFields {
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
  border: 1px solid #24244259;
  border-radius: 12px;
  background-color: white;
  color: var(--third-color);
  font-family: var(--second-family);
  font-size: 16px;
}

.field input:focus {
  border-color: var(--main-color);
  outline: 2px solid rgb(134 0 83 / 20%);
}

.registerButton {
  min-height: 48px;
  margin-top: 4px;
  border: 2px solid var(--main-color);
  border-radius: 48px;
  background-color: var(--main-color);
  color: var(--second-color);
  font-size: 18px;
  font-weight: 700;
}

.signInPrompt {
  margin-top: 20px;
  font-family: var(--second-family);
  text-align: center;
}

.signInPrompt a {
  color: var(--main-color);
  font-weight: 700;
}

@media screen and (min-width: 768px) {
  .registerPage {
    padding: 48px 24px;
  }

  .registerCard {
    padding: 36px 40px;
  }

  h1 {
    font-size: 40px;
  }

  .subtitle {
    font-size: 18px;
  }

  .nameFields {
    flex-direction: row;
  }

  .nameFields .field {
    flex: 1;
    min-width: 0;
  }

  .registerButton {
    min-height: 56px;
    font-size: 20px;
    transition:
      background-color 0.3s ease,
      color 0.3s ease;
  }
}

@media screen and (min-width: 1440px) {
  .registerPage {
    padding-top: 64px;
  }

  .registerButton:hover {
    background-color: white;
    color: var(--main-color);
  }
}
</style>
