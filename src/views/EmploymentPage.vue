<template>
  <div class="page-content me-2">
    <base-card :fromHome="true" class="card-content">
      <h2>Employment History</h2>
    </base-card>
    <div class="bg-image hover-overlay">
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
.table-layout {
  background-color: $bd-blue;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
</style>
