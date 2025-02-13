<script lang="ts">
import { MDBContainer } from 'mdb-vue-ui-kit'
import TheHeader from '@/components/layout/TheHeader.vue'
import TheLayout from '@/components/layout/TheLayout.vue'
import { defineComponent, ref, onMounted } from 'vue'
import { useTopicStore } from '@/store/topicStore'

export default defineComponent({
  name: 'App',
  components: {
    TheHeader,
    TheLayout,
    MDBContainer,
  },

  setup() {
    const isActive = ref(false)
    const topicStore = useTopicStore()
    isActive.value = topicStore.getDisplayActive
    topicStore.setDisplayActive()
    // load the store items at creation
    onMounted(async () => {
      try {
        await topicStore.loadSkills()
        await topicStore.loadCompetencies()
        await topicStore.loadResponsibilities()
        await topicStore.loadEmployments()
        await topicStore.loadCourses()
      } catch (error) {
        console.error(error)
      }
    })

    return {
      MDBContainer,
      isActive,
    }
  },
})
</script>

<template>
  <div class="full-width-container">
    <MDBContainer fluid>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <the-header></the-header>
      <the-layout></the-layout>
    </MDBContainer>
  </div>
</template>

<style lang="scss">
#app {
  font-family:
    Roboto,
    Avenir,
    Helvetica,
    Arial,
    sans-serif,
    Qwitcher Grypen;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.layout-column-left {
  padding: 0.1rem;
  width: 30%;
}
.layout-column-right {
  padding: 0.1rem;
  flex-grow: 1;
  overflow: auto;
}
// .show-on-desktop {
//   display: none !important;
// }
@media only screen and (min-width: 375px) and (max-width: 1023px) {
  .layout-media {
    display: flex;
    flex-direction: column;
    /* column-fill: auto; */
    width: 100% !important;
  }
  .full-width-container-heading {
    max-width: 1024px !important;
    overflow: auto;
  }

  .card-media {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.26);
    /* column-fill: auto; */
  }
  .layout-column-left {
    padding: 0.1rem;
    width: 100%;
  }
  .layout-column-right {
    padding: 0.1rem;
    width: 100%;
  }
  .show-on-desktop {
    display: none !important;
  }
  .media-font-size {
    font-size: x-small !important;
  }
  .my-col-small {
    flex: 0 0 25%; /* Equivalent to col-3 (3/12 columns = 25%) */
    max-width: 25%;
  }
  .my-col-wide {
    flex: 0 0 75%; /* Equivalent to col-3 (3/12 columns = 25%) */
    max-width: 75%;
  }
  .my-col-nocolumn {
    flex: 0 0 100%;
    max-width: 100%;
  }
}

@media only screen and (min-width: 1024px) {
  .layout-media {
    display: flex;
    flex-direction: column;
    /* column-fill: auto; */
  }
  .layout-column-left {
    padding: 0.1rem;
    width: 25%;
  }
  .layout-column-right {
    padding: 0.1rem;
    max-width: 70%;
    flex-grow: 1;
  }
  .card-media {
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* align-items: self-start; */
    /* border-radius: 5px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.26); */
    /* column-fill: auto; */
    margin: 0.2rem !important;
    padding: 0.2rem !important;
  }
  .full-width-container-heading {
    max-width: 2048px !important;
    height: auto;
    margin-bottom: 1.2rem !important;
  }
  .full-width-container {
    max-width: 2048px !important;
    width: 100%;
  }
  .wide-column {
    width: 50%;
  }
  .my-col-small {
    flex: 0 0 25%; /* Equivalent to col-3 (3/12 columns = 25%) */
    max-width: 25%;
  }
  .my-col-wide {
    flex: 0 0 75%; /* Equivalent to col-3 (3/12 columns = 25%) */
    max-width: 75%;
  }
  // .show-on-desktop {
  //   display: none !important;
  // }
  .low-index {
    z-index: 1;
  }
}
</style>
