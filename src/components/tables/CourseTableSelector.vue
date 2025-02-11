<template>
  <div>
    <MDBTabs v-model="activeTabId4">
      <!-- Tabs navs -->
      <MDBTabNav
        pills
        style="background-color: whitesmoke"
        tabsClasses="mb-3 ml-auto text-center opacity-100 bg-gradient rounded-6 tabnav-media"
      >
        <MDBTabItem
          :wrap="false"
          tabId="ex4-1"
          href="ex4-1"
          class="selector_style fw-bold border shadow-6-strong rounded-6"
        >
          <img :src="training" alt="..." class="img-thumbnail scale-icon-s mb-3 show-on-desktop" />
          <section>Qualifications</section>
          <section>School & tertiary</section>
        </MDBTabItem>

        <MDBTabItem
          :wrap="false"
          tabId="ex4-2"
          href="ex4-2"
          class="fw-bold border shadow-6-strong rounded-6"
        >
          <img :src="skills" alt="..." class="img-thumbnail scale-icon-xs mb-3 show-on-desktop" />
          <section>Computer</section>
          <section>Literacy</section>
        </MDBTabItem>

        <MDBTabItem
          :wrap="false"
          tabId="ex4-3"
          href="ex4-3"
          class="fw-bold border shadow-6-strong rounded-6"
        >
          <img
            :src="classroom"
            alt="..."
            class="img-thumbnail scale-icon-xs mb-3 show-on-desktop"
          />
          <section>Formal</section>
          <section>Training</section>
        </MDBTabItem>

        <MDBTabItem
          :wrap="false"
          tabId="ex4-4"
          href="ex4-4"
          class="fw-bold border shadow-6-strong rounded-6"
        >
          <img :src="courses" alt="..." class="img-thumbnail scale-icon-s mb-2 show-on-desktop" />
          <section>Web based</section>
          <section>Courses</section>
        </MDBTabItem>
      </MDBTabNav>
      <MDBTabContent>
        <MDBTabPane tabId="ex4-1">
          <div class="d-flex">
            <div class="p-3 fw-40 justify-content-end card-content-qualifications align-items-end">
              <qualifications-summary></qualifications-summary>
            </div>
          </div>
        </MDBTabPane>

        <MDBTabPane tabId="ex4-2">
          <computer-literacy></computer-literacy>
        </MDBTabPane>

        <MDBTabPane tabId="ex4-3">
          <div class="d-flex">
            <div class="p-3 fw-40 w-100 justify-content-end card-content-technical align-items-end">
              <all-training :online="false"></all-training>
            </div>
          </div>
        </MDBTabPane>

        <MDBTabPane tabId="ex4-4">
          <div class="d-flex">
            <div class="p-3 fw-40 w-100 justify-content-end card-content-technical align-items-end">
              <all-training :online="true"></all-training>
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

import AllTraining from './AllTraining.vue'
import { ref, defineComponent } from 'vue'
import QualificationsSummary from './QualificationsSummary.vue'
import ComputerLiteracy from './ComputerLiteracy.vue'
// import images
import training from '@/assets/icons/training_small.png'
import skills from '@/assets/icons/Computer_skills_512.png'
import classroom from '@/assets/icons/classroom_512.png'
import courses from '@/assets/icons/e_learning2_512.png'
export default defineComponent({
  components: {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    AllTraining,
    QualificationsSummary,
    ComputerLiteracy,
  },
  emits: ['online'],

  setup(props, { emit }) {
    const activeTabId4 = ref('ex4-1')
    emit('online', false)
    return {
      activeTabId4,
      training,
      skills,
      classroom,
      courses,
    }
  },
})
</script>

<style lang="scss" scoped>
// @import '@/assets/config/_variables.scss';

.scale-icon {
  width: 18%;
}
.scale-icon-m {
  width: 30%;
}
.scale-icon-l {
  width: 20%;
}
.scale-icon-s {
  width: 60%;
}
.scale-icon-xs {
  width: 80%;
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
  max-width: 100rem;
}
.card-content-qualifications {
  background-color: $silver-pink;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
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
    max-width: 50rem;
  }
  .card-content-technical {
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem !important;

    max-width: 100rem;
  }
}
</style>
<style lang="scss">
// @import '@/assets/config/_variables.scss';
.change-link-color {
  color: $charcoal !important;
  :active {
    color: $desert-sand !important;
  }
}
@media only screen and (min-width: 375px) and (max-width: 1024px) {
  .tabnav-media {
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    // padding: 0.5rem !important;
    margin: 0.5rem auto;
    max-width: 50rem;
  }
}
</style>
