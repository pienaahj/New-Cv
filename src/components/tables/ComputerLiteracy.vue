<template>
  <!-- if compSkill loading the data spin -->
  <p v-if="isLoading">
    <base-spinner></base-spinner>
  </p>
  <ul class="card-content" v-else-if="!isLoading && hasLiteracy">
    <table-item
      v-for="compSkillItem in compSkills"
      :key="compSkillItem.id"
      :itemEntry="compSkillItem.CompSkill"
      class="media-font-size"
    >
    </table-item>
  </ul>
</template>

<script lang="ts">
import TableItem from './TableItem.vue'
import { defineComponent, ref, computed } from 'vue'
import { useTopicStore } from '@/store/topicStore'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'
export default defineComponent({
  components: {
    TableItem,
    BaseSpinner,
  },

  setup() {
    const error = ref(null)
    const isLoading = ref(false)
    // get the literacy from state store
    const topicStore = useTopicStore()
    const compSkills = computed(() => topicStore.getLiteracies)
    const hasLiteracy = computed(() => topicStore.hasLiteracies)
    console.log('compSkills', compSkills.value)
    console.log('hasLiteracy', hasLiteracy.value)

    return {
      compSkills,
      hasLiteracy,
      isLoading,
      error,
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
  padding-top: 0;
  padding-bottom: 0;
  margin: 0.5rem auto;
  max-width: 32rem;
}
</style>
