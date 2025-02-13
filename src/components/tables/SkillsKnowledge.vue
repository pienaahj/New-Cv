<template>
  <!-- if still loading the data spin -->
  <p v-if="isLoading">
    <base-spinner></base-spinner>
  </p>
  <ul class="card-content" v-else-if="!isLoading && hasSkills">
    <table-item
      v-for="skillItem in skills.value"
      :key="skillItem.id"
      :itemEntry="skillItem.skill"
      class="media-font-size"
    >
    </table-item>
  </ul>
</template>

<script lang="ts">
import TableItem from './TableItem.vue'
import BaseSpinner from '../ui/BaseSpinner.vue'
import { defineComponent, onMounted, ref, computed } from 'vue'
import { useTopicStore } from '@/store/topicStore'
// import type { Skills } from '@/model/types';

export default defineComponent({
  components: {
    TableItem,
    BaseSpinner,
  },
  setup() {
    const isLoading = ref(false)
    const topicStore = useTopicStore()
    const hasSkills = computed(() => topicStore.hasSkills)
    const skills = computed(() => topicStore.getSkills)

    // Load the skill at creation
    onMounted(async () => {
      try {
        isLoading.value = true
        await topicStore.loadSkills()
      } catch (error) {
        console.error(error)
      }
      isLoading.value = false
    })

    return {
      isLoading,
      topicStore,
      hasSkills,
      skills,
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
  padding-top: 0rem;
  padding-bottom: 0rem;
  margin: 0.5rem auto;
  max-width: 32rem;
}
</style>
