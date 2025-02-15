<template>
  <div class="page-content me-1 card-media-home">
    <base-card :fromHome="true" class="card-content">
      <h2>Employment History</h2>
    </base-card>
    <div class="bg-image hover-overlay show-on-desktop-only">
      <img :src="photo" class="img-fluid" />
      <a href="#!">
        <div class="mask overlay" style="background-color: rgba(57, 192, 237, 0.2)"></div>
      </a>
    </div>
    <base-card class="table-layout">
      <employment-table-selector></employment-table-selector>
    </base-card>
  </div>
</template>

<script lang="ts">
import BaseCard from '../components/ui/BaseCard.vue'
import EmploymentTableSelector from '../components/tables/EmploymentTableSelector.vue'
import { defineComponent } from 'vue'
import { useTopicStore } from '@/store/topicStore'
// import images
import photo from '@/assets/images/telkom-scaled.webp'
export default defineComponent({
  components: {
    BaseCard,
    EmploymentTableSelector,
  },
  setup() {
    const topicStore = useTopicStore()
    topicStore.setDisplayActive()
    return {
      photo,
    }
  },
})
</script>

<style lang="scss" scoped>
// @import '@/assets/config/_variables.scss';
.page-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 0.5rem auto;
  max-width: 85rem;
}
.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
.table-layout {
  background-color: $bd-blue;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
.card-media-home {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  column-fill: auto;
  justify-content: center;
}
@media only screen and (max-width: 1200px) {
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
    background-color: $bd-blue;
    // background-color: $dark-sky-blue;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 1rem auto;
    max-width: 100rem;
  }
  .page-content {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 90rem;
  }
  .card-content {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 100rem;
  }
  .table-layout-outer {
    // background-color: warning;
    display: flex;
    flex-direction: column;
    width: 100% !important;
    column-fill: auto;
    justify-content: center;

    // background-color: $dark-sky-blue;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 0.5rem;
    margin: 0.5rem auto;
    max-width: 100rem;
  }
}
</style>
