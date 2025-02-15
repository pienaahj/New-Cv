<template>
  <!-- <div class="d-flex flex-row justify-content-center align-items-center"> -->
  <MDBContainer fluid>
    <MDBRow>
      <MDBCol xl="3" cols="12" class="d-flex align-items-start justify-items-center">
        <!-- lefthand column -->
        <div class="m-0 p-0">
          <base-card :class="{ 'active-display-class': noDisplay }">
            <base-greeting></base-greeting>
          </base-card>
        </div>
      </MDBCol>
      <MDBCol xl="9" cols="12">
        <!-- righthand column -->
        <div class="layout-media">
          <router-view></router-view>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <!-- </div> -->
</template>

<script lang="ts">
import { MDBCol, MDBRow, MDBContainer } from 'mdb-vue-ui-kit'
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
    MDBContainer,
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
.no-background {
  background-color: aliceblue;
}
</style>
