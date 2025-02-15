<template>
  <div class="page-content me-2 card-media-home">
    <base-card class="card-content">
      <h2>Education, Vocational Qualifications & Training</h2>
    </base-card>
    <video-carousel class="d-flex show-on-desktop-only"></video-carousel>
    <base-card :fromHome="true" class="w-100 table-layout-outer">
      <base-card :fromHome="true" class="table-layout">
        <the-table>
          <course-table-selector></course-table-selector>
        </the-table>
      </base-card>
    </base-card>
  </div>
</template>

<script lang="ts">
import BaseCard from '../components/ui/BaseCard.vue'
import VideoCarousel from '@/components/layout/VideoCarousel.vue'
import TheTable from '../components/layout/TheTable.vue'
import CourseTableSelector from '@/components/tables/CourseTableSelector.vue'
import { defineComponent } from 'vue'
import { useTopicStore } from '@/store/topicStore'

export default defineComponent({
  components: {
    BaseCard,
    VideoCarousel,
    TheTable,
    CourseTableSelector,
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
.page-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}

.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
.table-layout {
  background-color: warning;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
.table-layout-outer {
  // background-color: warning;
  // // background-color: ;
  background-color: $dark-sky-blue;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding-top: 0.5rem;
  margin: 1rem auto;
  max-width: 100rem;
}
@media only screen and (max-width: 1200px) {
  .show-on-desktop-only {
    display: none !important;
  }
}
@media only screen and (max-width: 1140px) {
  .card-media-home {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    column-fill: auto;
    justify-content: center;
    max-width: 1140px;
  }
  .show-on-desktop-only {
    display: none !important;
  }
  .table-layout {
    background-color: warning;
    // background-color: $bd-blue;
    // background-color: $dark-sky-blue;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 2rem;
    margin: 1rem auto;
    max-width: 100rem;
  }
  .table-layout-outer {
    background-color: $dark-sky-blue;
    // background-color: warning;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding-top: 0.5rem;
    margin: 1rem auto;
    max-width: 100rem;
  }
}
</style>
