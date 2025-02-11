<template>
  <!-- if still loading the data spin -->
  <p v-if="isLoading">
    <base-spinner></base-spinner>
  </p>
  <ul class="card-content" v-else-if="!isLoading && hasResponsibilities">
    <table-item
      v-for="responsibilitiesItem in responsibilities"
      :key="responsibilitiesItem.id"
      :itemEntry="responsibilitiesItem.responsibility"
      class="media-font-size"
    >
    </table-item>
  </ul>
</template>

<script lang="ts">
import TableItem from './TableItem.vue'
import BaseSpinner from '../ui/BaseSpinner.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { useTopicStore } from '@/store/topicStore'
export default defineComponent({
  components: {
    TableItem,
    BaseSpinner,
  },
  setup() {
    const isLoading = ref(false)
    const topicStore = useTopicStore()
    const hasResponsibilities = topicStore.hasResponsibilities
    const responsibilities = topicStore.getResponsibilities

    onMounted(async () => {
      try {
        isLoading.value = true
        await topicStore.loadResponsibilities()
      } catch (error) {
        console.error(error)
      }
      isLoading.value = false
    })
    return {
      isLoading,
      responsibilities,
      hasResponsibilities,
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
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 32rem;
}
</style>
