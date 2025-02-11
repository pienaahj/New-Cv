<template>
  <div class="layout-media">
    <MDBContainer>
      <MDBRow>
        <MDBCol className="my-col-small my-col-nocolumn">
          <!-- lefthand column -->
          <div class="layout-column-left full-width-container layout-media">
            <base-card :class="{ 'active-display-class': noDisplay }">
              <base-greeting></base-greeting>
            </base-card>
          </div>
        </MDBCol>
        <MDBCol className="my-col-wide my-col-nocolumn full-width-container">
          <!-- righthand column -->
          <div class="layout-column-right layout-media">
            <router-view></router-view>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </div>
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
</style>
