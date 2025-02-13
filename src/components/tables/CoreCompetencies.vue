<template>
  <!-- if still loading the data spin -->
  <p v-if="isLoading">
    <base-spinner></base-spinner>
  </p>
  <ul class="card-content" v-else-if="!isLoading && hasCompetencies">
    <table-item
      v-for="competency in allCompetencies.value"
      :key="competency.id"
      :itemEntry="competency.coreComp"
      class="media-font-size"
    >
    </table-item>
  </ul>
</template>

<script lang="ts">
import TableItem from './TableItem.vue'
import BaseSpinner from '../ui/BaseSpinner.vue'
import { defineComponent, ref, onMounted, computed } from 'vue'
import { useTopicStore } from '@/store/topicStore'
export default defineComponent({
  components: {
    TableItem,
    BaseSpinner,
  },
  setup() {
    const isLoading = ref(false)
    const topicStore = useTopicStore()
    const allCompetencies = computed(() => topicStore.getCompetencies)
    const hasCompetencies = computed(() => topicStore.hasCompetencies)
    // const loadAllCompetencies = async () => {
    //   try {
    //     isLoading.value = true;
    //     await topicStore.loadCompetencies();
    //     isLoading.value = false;
    //   } catch (error) {
    //   console.error(error);
    //   throw error;
    //   }
    // };

    onMounted(async () => {
      try {
        isLoading.value = true
        await topicStore.loadCompetencies()
      } catch (error) {
        console.error(error)
      }
      isLoading.value = false
    })
    return {
      isLoading,
      allCompetencies,
      hasCompetencies,
    }
  },
})
</script>

<style lang="scss" scoped>
// @import '@/assets/config/_variables.scss';
.card-content {
  background-color: $silver-pink;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  margin: 0.5rem auto;
  max-width: 24rem;
}
</style>
