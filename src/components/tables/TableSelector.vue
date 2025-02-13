<template>
  <div>
    <MDBTabs v-model="activeTabId4">
      <!-- Tabs navs -->
      <MDBTabNav
        pills
        style="background-color: whitesmoke"
        tabsClasses="mb-3 text-center icon-media"
        justify
      >
        <MDBTabItem
          :wrap="false"
          tabId="ex4-1"
          href="ex4-1"
          tag="button"
          class="selector_style fw-bold border shadow-6-strong rounded-6"
        >
          <!-- <i class="fas fa-chart-pie fa-fw me-2"></i> -->
          <img
            :src="careerSummary"
            alt="..."
            class="img-thumbnail scale-icon-s mb-3 show-on-desktop"
          />
          <!-- <i class="far fa-address-card"></i> -->
          <section>Career</section>
          <section>Summay</section>
        </MDBTabItem>

        <MDBTabItem
          :wrap="false"
          tabId="ex4-2"
          href="ex4-2"
          class="fw-bold border shadow-6-strong rounded-6"
        >
          <img
            :src="skills"
            alt="..."
            class="img-thumbnail scale-icon-xs icon-margin-bottom show-on-desktop"
          />
          <section>Skills &</section>
          <section>Knowledge</section>
        </MDBTabItem>

        <MDBTabItem
          :wrap="false"
          tabId="ex4-3"
          href="ex4-3"
          class="fw-bold border shadow-6-strong rounded-6"
        >
          <img :src="technical" alt="..." class="img-thumbnail scale-icon-s mb-1 show-on-desktop" />
          <section>Technical</section>
          <section>Knowledge</section>
        </MDBTabItem>

        <MDBTabItem
          :wrap="false"
          tabId="ex4-4"
          href="ex4-4"
          class="fw-bold border shadow-6-strong rounded-6"
        >
          <img
            :src="competencies"
            alt="..."
            class="img-thumbnail scale-icon-s mb-1 show-on-desktop"
          />
          <section>Core</section>
          <section>Competencies</section>
        </MDBTabItem>

        <MDBTabItem
          :wrap="false"
          tabId="ex4-5"
          href="ex4-5"
          class="fw-bold border shadow-6-strong rounded-6"
        >
          <img
            :src="responsibilities"
            alt="..."
            class="img-thumbnail scale-icon-s mb-2 show-on-desktop"
          />
          <section>Key</section>
          <section>Responsibilities</section>
        </MDBTabItem>
      </MDBTabNav>
      <!-- Tabs content -->
      <MDBTabContent>
        <MDBTabPane tabId="ex4-1">
          <div class="d-flex">
            <div class="justify-content-end card-content-career-summary align-items-end">
              <career-summary></career-summary>
            </div>
          </div>
        </MDBTabPane>

        <MDBTabPane tabId="ex4-2">
          <div class="d-flex">
            <skills-knowledge></skills-knowledge>
          </div>
        </MDBTabPane>

        <MDBTabPane tabId="ex4-3">
          <div class="d-flex">
            <div class="flex-grow-1"></div>
            <div
              class="p-2 pt-3 pb-3 fw-40 w-70 justify-content-end card-content-technical align-items-end"
            >
              <technical-knowledge></technical-knowledge>
            </div>
          </div>
        </MDBTabPane>

        <MDBTabPane tabId="ex4-4">
          <div class="d-flex">
            <div class="p-2 flex-grow-1"></div>
            <div class="p-2 fw-40 justify-content-end align-items-end">
              <core-competencies></core-competencies>
            </div>
          </div>
        </MDBTabPane>

        <MDBTabPane tabId="ex4-5">
          <div class="d-flex">
            <div class="p-2 flex-grow-1"></div>
            <div class="p-3 fw-40 justify-content-end align-items-end">
              <key-responsibilities></key-responsibilities>
            </div>
          </div>
        </MDBTabPane>
      </MDBTabContent>
      <!-- Tabs content -->
    </MDBTabs>
  </div>
</template>

<script lang="ts">
import { MDBTabs, MDBTabNav, MDBTabContent, MDBTabItem, MDBTabPane } from 'mdb-vue-ui-kit'
import { ref } from 'vue'

import CoreCompetencies from './CoreCompetencies.vue'
import SkillsKnowledge from './SkillsKnowledge.vue'
import TechnicalKnowledge from './TechnicalKnowledge.vue'
import CareerSummary from './CareerSummary.vue'
import KeyResponsibilities from './KeyResponsibilities.vue'
import { defineComponent } from 'vue'
// import images
import careerSummary from '@/assets/icons/career_summary_512.png'
import skills from '@/assets/icons/skills_512.png'
import technical from '@/assets/icons/technical.png'
import competencies from '@/assets/icons/competency.png'
import responsibilities from '@/assets/icons/responsibility_512.png'
export default defineComponent({
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,

    CoreCompetencies,
    SkillsKnowledge,
    TechnicalKnowledge,
    CareerSummary,
    KeyResponsibilities,
  },
  setup() {
    const activeTabId4 = ref('ex4-1')
    return {
      activeTabId4,
      careerSummary,
      skills,
      technical,
      competencies,
      responsibilities,
    }
  },
})
</script>

<style lang="scss" scoped>
.scale-icon {
  width: 40%;
}
.scale-icon-m {
  width: 30%;
}
.scale-icon-l {
  width: 20%;
}
.scale-icon-s {
  width: 50%;
}
.scale-icon-xs {
  width: 75%;
}
.icon-margin-bottom {
  margin-bottom: 6%;
}
.no-background {
  background-color: aliceblue;
}
.card-content-technical {
  background-color: $silver-pink;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 35rem;
}
.card-content-career-summary {
  background-color: $silver-pink;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 0.5rem auto;
  max-width: 45rem;
}
.tabnav-media {
  display: flex;
  flex-direction: column;

  background-color: $silver-pink;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 0.5rem auto;
  max-width: 5rem;
  padding: 0.5rem;
}
.change-link-color {
  color: $charcoal !important;
  :active {
    color: $desert-sand !important;
  }
}
icon-media {
  display: flex;
  flex-direction: column;
  width: 23rem !important;
  max-width: 23rem !important;
  flex-wrap: wrap;
  column-fill: auto;
}
@media only screen and (min-width: 375px) and (max-width: 1023px) {
  .icon-media {
    display: flex;
    flex-direction: column;
    width: 23rem !important;
    max-width: 23rem !important;
    /* flex-wrap: wrap; */
    column-fill: auto;
  }
  .media-font-size {
    font-size: xx-small !important;
  }
  .card-content-career-summary {
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem !important;
    margin: 0.5rem auto;
    margin-left: 1rem auto;
    max-width: 50rem;
  }
  .nav-pills {
    margin-left: 0rem;
  }
  .tabnav-media {
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 0.5rem auto;
    max-width: 50rem;
  }
}
</style>
