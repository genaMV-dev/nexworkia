<script setup lang="ts">
import image from '../assets/images/laptopAboutImage.webp'

import {
  PhUsersThree,
  HiRocketLaunch,
  FaRegHandshake,
  BsLightningCharge,
  CaSkillLevel,
  BsShieldCheck,
  FeLayers,
} from '@kalimahapps/vue-icons'
</script>

<template>
  <main class="aboutPage">
    <section class="heroSection">
      <div class="heroCopy">
        <span class="eyebrow">About nex<span>WORK</span>ia</span>
        <h1>Connecting Talent<br />with Opportunity</h1>
        <p>
          nexWORKia is a modern job platform that brings together talented
          professionals and forward-thinking companies across various
          industries in Europe.
        </p>
      </div>
      <div class="heroImage">
        <img :src="image" alt="nexWORKia displayed on a laptop" />
      </div>
    </section>

    <section class="purposeGrid" aria-label="Our purpose">
      <article class="purposeCard">
        <PhUsersThree class="purposeIcon" />
        <div>
          <h2>Our Mission</h2>
          <p>
            To make the job search and hiring process simple, transparent, and
            effective for everyone.
          </p>
        </div>
      </article>
      <article class="purposeCard">
        <HiRocketLaunch class="purposeIcon" />
        <div>
          <h2>Our Vision</h2>
          <p>
            To become a leading career platform in Europe, where people find not
            just jobs, but real opportunities for growth.
          </p>
        </div>
      </article>
      <article class="purposeCard">
        <FaRegHandshake class="purposeIcon" />
        <div>
          <h2>Our Values</h2>
          <p>
            Trust, transparency, equal opportunities, and a people-first
            approach in everything we do.
          </p>
        </div>
      </article>
    </section>

    <section class="benefitsSection">
      <h2 class="benefitsTitle">
        Why Choose nex<span>WORK</span>ia?
      </h2>
      <div class="benefitsGrid">
        <article class="benefitCard">
          <span class="benefitIcon lightning"><BsLightningCharge /></span>
          <h3>A Wide Range of Opportunities</h3>
          <p>Jobs for different skills, experience levels, and career goals.</p>
        </article>
        <article class="benefitCard">
          <span class="benefitIcon trust"><BsShieldCheck /></span>
          <h3>Trusted by Professionals</h3>
          <p>A growing community of talented candidates and reliable employers.</p>
        </article>
        <article class="benefitCard">
          <span class="benefitIcon simple"><FeLayers /></span>
          <h3>Simple and Convenient</h3>
          <p>A clean and intuitive experience on any device.</p>
        </article>
        <article class="benefitCard">
          <span class="benefitIcon growth"><CaSkillLevel /></span>
          <h3>Career Growth</h3>
          <p>Find opportunities that match your ambitions and help you grow.</p>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.aboutPage {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 28px 16px;
  color: var(--third-color);
}

.heroSection {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
}

.heroCopy {
  position: relative;
  z-index: 1;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  padding: 4px 12px;
  border-radius: 20px;
  background-color: #f9e3ea;
  color: var(--main-color);
  font-size: 14px;
  font-weight: 800;
}

.eyebrow span,
.benefitsTitle span {
  color: #a7e900;
}

.heroCopy h1 {
  margin-bottom: 12px;
  font-size: 36px;
  font-weight: 900;
  line-height: 1.02;
}

.heroCopy p {
  max-width: 520px;
  font-family: var(--second-family);
  font-size: 16px;
  line-height: 1.45;
}

.heroImage {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  overflow: hidden;
}

.heroImage img {
  width: 100%;
  max-height: 220px;
  object-fit: contain;
}

.purposeGrid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 10px;
}

.purposeCard {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  min-width: 0;
  padding: 16px;
  border-radius: 18px;
  background-color: var(--second-color);
}

.purposeIcon {
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  margin-top: 2px;
  color: var(--main-color);
}

.purposeCard h2 {
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 900;
}

.purposeCard p,
.benefitCard p {
  font-family: var(--second-family);
  font-size: 14px;
  line-height: 1.4;
}

.benefitsSection {
  padding-top: 28px;
}

.benefitsTitle {
  margin-bottom: 20px;
  text-align: center;
  font-size: 26px;
  font-weight: 900;
}

.benefitsGrid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 10px;
}

.benefitCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 6px;
  text-align: center;
}

.benefitCard + .benefitCard {
  border-left: 1px solid var(--second-color);
}

.benefitCard:nth-child(3) {
  border-left: 1px solid var(--second-color);
}

.benefitCard:nth-child(odd) {
  border-left: 0;
}

.benefitIcon {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  margin-bottom: 8px;
  border-radius: 14px;
}

.benefitIcon svg {
  width: 26px;
  height: 26px;
}

.lightning {
  background-color: #fbe0e8;
  color: var(--main-color);
}

.trust {
  background-color: #e7f2dc;
  color: #16772b;
}

.simple {
  background-color: #f0e2f5;
  color: #5b1590;
}

.growth {
  background-color: var(--second-color);
  color: #9c4b14;
}

.benefitCard h3 {
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: 900;
}

@media screen and (min-width: 768px) {
  .aboutPage {
    padding: 32px 28px 40px;
  }

  .heroSection {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 16px;
    min-height: 230px;
  }

  .heroCopy h1 {
    font-size: 38px;
  }

  .heroCopy p {
    font-size: 15px;
  }

  .heroImage img {
    max-height: 220px;
  }

  .purposeGrid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .purposeCard {
    padding: 18px;
  }

  .benefitsGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 26px 0;
  }
}

@media screen and (min-width: 1440px) {
  .aboutPage {
    padding: 28px 24px 40px;
  }

  .heroSection {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 28px;
    min-height: 250px;
    margin-bottom: 20px;
  }

  .heroCopy h1 {
    font-size: clamp(36px, 4vw, 48px);
  }

  .heroCopy p {
    font-size: 17px;
  }

  .heroImage img {
    max-height: 250px;
  }

  .purposeGrid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
  }

  .purposeCard {
    gap: 18px;
    padding: 20px;
  }

  .purposeIcon {
    flex-basis: 38px;
    width: 38px;
    height: 38px;
  }

  .purposeCard h2 {
    font-size: 20px;
  }

  .benefitsSection {
    padding-top: 20px;
  }

  .benefitsTitle {
    margin-bottom: 26px;
    font-size: 32px;
  }

  .benefitsGrid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;
  }

  .benefitCard {
    padding: 0 18px;
  }

  .benefitCard + .benefitCard {
    border-left: 1px solid var(--second-color);
  }

  .benefitIcon {
    width: 52px;
    height: 52px;
    margin-bottom: 10px;
    border-radius: 16px;
  }

  .benefitIcon svg {
    width: 30px;
    height: 30px;
  }

  .benefitCard h3 {
    font-size: 16px;
  }

  .benefitCard p {
    font-size: 14px;
  }

}
</style>
