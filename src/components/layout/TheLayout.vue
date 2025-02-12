<template>
  <div class="d-flex flex-row justify-content-center align-items-center">
    <!-- <MDBContainer> -->
    <MDBRow>
      <MDBCol className="my-col-small my-col-nocolumn">
        <!-- lefthand column -->
        <div class="m-0 p-0 low-index">
          <base-card :class="{ 'active-display-class': noDisplay }">
            <base-greeting></base-greeting>
          </base-card>
        </div>
      </MDBCol>
      <MDBCol className="my-col-wide my-col-nocolumn wide-column">
        <!-- righthand column -->
        <div class="layout-media">
          <router-view></router-view>
        </div>
      </MDBCol>
    </MDBRow>
    <!-- </MDBContainer> -->
  </div>
</template>

<script lang="ts">
import { MDBCol, MDBRow } from 'mdb-vue-ui-kit'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseGreeting from '@/components/BaseGreeting.vue'
import { defineComponent } from 'vue'
import { useTopicStore } from '@/store/topicStore'

export default defineComponent({
  components: {
    BaseCard,
    BaseGreeting,
    MDBCol,
    MDBRow,
    // MDBContainer,
  },
  setup() {
    const topicStore = useTopicStore()

    const isActive = topicStore.getDisplayActive
    const noDisplay = isActive ? false : true
    return {
      noDisplay,
    }
  },
})
</script>
<style lang="scss" scoped>
.active-display-class {
  display: none !important;
}
</style>
