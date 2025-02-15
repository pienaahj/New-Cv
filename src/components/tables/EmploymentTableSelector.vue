<template>
  <!-- if still loading the data spin -->
  <p v-if="isLoading">
    <base-spinner></base-spinner>
  </p>
  <div v-else-if="!isLoading && hasEmployment">
    <MDBAccordion v-model="activeItem">
      <MDBAccordionItem headerTitle="August 2023 till currently" collapseId="collapseOne">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[0].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[0].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{ sanitizedHistory[0].jobDescription1 }}
          </div>
        </div>
      </MDBAccordionItem>

      <MDBAccordionItem headerTitle="August 2012 to September 2014" collapseId="collapseTwo">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[1].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[1].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{ sanitizedHistory[1].jobDescription1 }}
          </div>
        </div>
      </MDBAccordionItem>

      <MDBAccordionItem headerTitle="September 2011 to July 2012" collapseId="collapseThree">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[2].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[2].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text">
            {{ sanitizedHistory[2].jobDescription1 }}
          </div>
          <p class="job-description-header h4">Job functions</p>
          <ul class="history-ul">
            <li
              v-for="(responsibility, index) in sanitizedHistory[2].jobResponsibilities1"
              :key="index"
            >
              {{ responsibility || 'N/A' }}
            </li>
          </ul>
        </div>
      </MDBAccordionItem>
      <MDBAccordionItem headerTitle="July 2005 to August 2011" collapseId="collapseFour">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[3].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[3].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{ sanitizedHistory[3].jobDescription1 }}
          </div>
          <p class="job-description-header h4">Job functions</p>
          <ul class="history-ul">
            <li
              v-for="(responsibility, index) in sanitizedHistory[3].jobResponsibilities1"
              :key="index"
            >
              {{ responsibility || 'N/A' }}
            </li>
          </ul>
          <img :src="pageDivider" class="img-fluid" alt="..." />
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{ sanitizedHistory[3].jobDescription2 }}
          </div>
          <p class="job-description-header h4">Job functions</p>
          <ul class="history-ul">
            <li
              v-for="(responsibility, index) in sanitizedHistory[3].jobResponsibilities2"
              :key="index"
            >
              {{ responsibility || 'N/A' }}
            </li>
          </ul>
          <img :src="pageDivider" class="img-fluid" alt="..." />
          <p class="job-description-header h4">Job decription</p>

          <div class="job-description-text">
            {{ sanitizedHistory[3].jobDescription3 }}
          </div>
          <p class="job-description-header h4">Job functions</p>
          <ul class="history-ul">
            <li
              v-for="(responsibility, index) in sanitizedHistory[3].jobResponsibilities3"
              :key="index"
            >
              {{ responsibility || 'N/A' }}
            </li>
          </ul>
        </div>
      </MDBAccordionItem>
      <MDBAccordionItem headerTitle="July 2000 to June 2005" collapseId="collapseFive">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[4].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[4].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{ sanitizedHistory[4].jobDescription1 }}
          </div>
        </div>
      </MDBAccordionItem>

      <MDBAccordionItem headerTitle="April 1999 to June 2000" collapseId="collapseSix">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[5].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[5].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text">
            {{ sanitizedHistory[5].jobDescription1 }}
          </div>
          <p class="job-description-header h4">Job functions</p>
          <ul class="history-ul">
            <li
              v-for="(responsibility, index) in sanitizedHistory[5].jobResponsibilities1"
              :key="index"
            >
              {{ responsibility || 'N/A' }}
            </li>
          </ul>
        </div>
      </MDBAccordionItem>
      <MDBAccordionItem headerTitle="August 1992 to March 1999" collapseId="collapseSeven">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[6].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[6].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{ sanitizedHistory[6].jobDescription1 }}
          </div>
        </div>
      </MDBAccordionItem>

      <MDBAccordionItem headerTitle="July 1992" collapseId="collapseEight">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[7].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[7].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription - Title change</p>
        </div>
      </MDBAccordionItem>

      <MDBAccordionItem headerTitle="January 1989 to July 1992" collapseId="collapseNine">
        <div class="card-content">
          <p class="lead">
            <strong> {{ sanitizedHistory[8].jobTitle }}</strong>
          </p>
          <p>
            <em>Location: {{ sanitizedHistory[8].place }}</em>
          </p>
          <p class="job-description-header h4">Job decription</p>
          <div class="job-description-text text-start">
            {{ sanitizedHistory[8].jobDescription1 }}
          </div>
        </div>
      </MDBAccordionItem>
    </MDBAccordion>
  </div>
</template>

<script lang="ts">
import { MDBAccordion, MDBAccordionItem } from 'mdb-vue-ui-kit'
import BaseSpinner from '../ui/BaseSpinner.vue'
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useTopicStore } from '@/store/topicStore'
// import images
import pageDivider from '@/assets/symbols/page-divider-design-png-6.png'

export default defineComponent({
  components: {
    MDBAccordion,
    MDBAccordionItem,
    BaseSpinner,
  },
  setup() {
    const topicStore = useTopicStore()
    const activeItem = ref('collapseOne')
    const isLoading = ref(false)
    const error = ref(null)
    const hasEmployment = ref(true)
    const filteredHistory = topicStore.getEmployments
    hasEmployment.value = topicStore.hasEmployments

    const sanitizedHistory = computed(() => {
      return filteredHistory.value.map((item) => ({
        ...item,
        jobResponsibilities1: item.jobResponsibilities1 ?? [],
        jobResponsibilities2: item.jobResponsibilities2 ?? [],
        jobResponsibilities3: item.jobResponsibilities3 ?? [],
      }))
    })

    onMounted(async () => {
      try {
        isLoading.value = true
        await topicStore.loadEmployments()
      } catch (error) {
        console.error(error)
      }
      isLoading.value = false
    })

    return {
      activeItem,
      filteredHistory,
      error,
      isLoading,
      hasEmployment,
      pageDivider,
      sanitizedHistory,
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

.no-background {
  background-color: aliceblue;
}

.card-content {
  background-color: $silver-pink;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 80rem;
}

.history-ul {
  padding-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  margin: 0.5rem auto;
  max-width: 40rem;
  list-style: none;
}

li {
  background-color: whitesmoke;
  list-style: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 0.5rem auto;
}

.job-description-header {
  color: $true-blue;
  padding-top: 1rem;
  margin: 0.5rem auto;
}

.job-description-text {
  background-color: whitesmoke;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 70rem;
}
.accordion-body {
  padding: 0.5rem 0.5rem;
}
@media only screen and (max-width: 1200px) {
  .card-content {
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 80rem;
  }
  .card-content {
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 80rem;
  }

  .history-ul {
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    margin: 0.5rem auto;
    max-width: 40rem;
    list-style: none;
  }

  li {
    background-color: whitesmoke;
    list-style: none;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem;
    margin: 0.5rem auto;
  }

  .job-description-header {
    color: $true-blue;
    padding-top: 1rem;
    margin: 0.5rem auto;
  }

  .job-description-text {
    background-color: whitesmoke;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 70rem;
  }
  .accordion-body {
    padding: 0.5rem 0.5rem;
  }
}
</style>
