<template>
  <div class="card-content" :class="{ cardMedia: fromHome }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BaseCard',
  props: {
    fromHome: Boolean,
  },
  setup(props) {
    return {
      props,
    }
  },
})
</script>

<style scoped>
.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem;
  max-width: 90rem;
  background-color: aliceblue;
}

@media only screen and (max-width: 1140px) {
  .cardMedia {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    column-fill: auto;
    margin: 0.1rem !important;
    padding: 0.1rem !important;
  }
}
</style>
