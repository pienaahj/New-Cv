<template>
  <header>
    <div class="card-layout card-media">
      <slot></slot>
    </div>
  </header>
</template>

<style scoped>
.card-layout {
  display: flex;
  flex-direction: column;
  /* background-color: #99b4cb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
  padding-top: 0.5rem;
  margin: 0.2rem auto;
  margin-left: auto;
}
.no-background {
  background-color: aliceblue;
}
@media only screen and (min-width: 375px) and (max-width: 1023px) {
  .table-layout-media {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
}
</style>
