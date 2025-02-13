<template>
  <div class="page-content me-2 card-media-home">
    <base-card :fromHome="true" class="card-content">
      <h2>Career, Skills, Technical Knowledge, Core Competencies & Key Responsibilities</h2>
    </base-card>
    <the-carousel class="show-on-desktop-only"></the-carousel>
    <base-card :fromHome="true" class="w-100 table-layout-outer">
      <base-card :fromHome="true" class="table-layout">
        <the-table>
          <table-selector></table-selector>
        </the-table>
      </base-card>
    </base-card>
  </div>
</template>

<script lang="ts">
import BaseCard from '../components/ui/BaseCard.vue'
import TheCarousel from '../components/layout/TheCarousel.vue'
import TheTable from '../components/layout/TheTable.vue'
import TableSelector from '@/components/tables/TableSelector.vue'
import { defineComponent } from 'vue'
import { useTopicStore } from '@/store/topicStore'
// import { MDBContainer } from 'mdb-vue-ui-kit';
export default defineComponent({
  components: {
    BaseCard,
    TheCarousel,
    TheTable,
    TableSelector,
    // MDBContainer,
  },
  setup() {
    const topicStore = useTopicStore()
    topicStore.setDisplayActive()

    return {}
  },
})
</script>

<style lang="scss" scoped>
// @import '@/assets/config/_variables.scss';
.table-layout {
  background-color: warning;
  // background-color: $dark-sky-blue;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-top: 0.5rem;
  margin: 1rem auto;
  max-width: 100rem;
}
.table-layout-outer {
  // background-color: ;
  background-color: $dark-sky-blue;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-top: 0.5rem;
  margin: 1rem auto;
  max-width: 100rem;
}
.page-content {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  // border-radius: 12px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-top: 0.5rem;
  margin: 0.5rem auto;
  max-width: 90rem;
}
.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-top: 0.5rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
.custom-class {
  display: none;
}
@media only screen and (min-width: 375px) and (max-width: 1023px) {
  .card-media-home {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    column-fill: auto;
    justify-content: center;
  }
  .show-on-desktop-only {
    display: none !important;
  }
  .table-layout {
    background-color: warning;
    // background-color: $dark-sky-blue;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 4rem;
    margin: 2rem auto;
    max-width: 100rem;
  }
  .table-layout-outer {
    // background-color: warning;
    background-color: $dark-sky-blue;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 4rem;
    margin: 2rem auto;
    max-width: 100rem;
  }
}
</style>
