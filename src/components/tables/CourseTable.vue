<template>
  <!-- if still loading the data spin -->
  <p v-if="isLoading">
    <base-spinner></base-spinner>
  </p>
  <ul class="card-content" v-else-if="!isLoading && hasCourses">
    <table-item v-for="courseItem in allCourses" :key="courseItem.id" :itemEntry="courseItem">
    </table-item>
  </ul>
</template>

<script lang="ts">
import TableItem from './TableItem.vue'
import { defineComponent, ref, onMounted } from 'vue'
import { useTopicStore } from '@/store/topicStore'
export default defineComponent({
  components: {
    TableItem,
  },
  setup() {
    const isLoading = ref(false)
    const topicStore = useTopicStore()
    const allCourses = topicStore.getCourses
    const hasCourses = topicStore.hasCourses
    // Load the courses at creation
    onMounted(() => {
      topicStore.loadCourses()
    })

    return {
      isLoading,
      allCourses,
      hasCourses,
    }
  },
})
</script>

<style lang="scss" scoped>
// @import '@/assets/config/_variables.scss';
.card-content {
  background-color: $silver-pink;
  border-radius: 12px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 32rem;
}
</style>
