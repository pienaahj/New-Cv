<template>
  <li>
    {{ itemEntry }}
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['itemEntry'],
  setup(props) {
    return {
      props,
    }
  },
})
</script>

<style scoped>
li {
  background-color: whitesmoke;
  list-style: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1rem auto;
}
</style>
