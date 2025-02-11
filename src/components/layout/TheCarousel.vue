<template>
  <MDBCarousel
    v-model="carousel5"
    :items="items5"
    :interval="9000"
    fade
    innerClass="rounded-5 shadow-4-strong carousel-media"
    itemsClass="d-block m-8 p-16 w-100 items-media"
    tag="div"
  />
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { MDBCarousel } from 'mdb-vue-ui-kit'
// import pictures
import picture1 from '@/assets/images/IMG_1360.webp'
import picture2 from '@/assets/images/IMG_0029.webp'
import picture3 from '@/assets/images/IMG_9516.webp'
import picture4 from '@/assets/images/strand-golf-course.webp'
import picture5 from '@/assets/images/helderview-landscape.webp'
export default defineComponent({
  components: {
    MDBCarousel,
  },

  setup() {
    const items5 = [
      {
        src: picture1,
        alt: '...',
        label: 'Technical management',
        caption: 'Telecommunications .',
      },
      {
        src: picture2,
        alt: '...',
        label: 'GIS management',
        caption: 'ESRI suite of products',
      },
      {
        src: picture3,
        alt: '...',
        label: 'Planning',
        caption: 'Telecommuncations infrastructure - wired and wireless.',
      },
      {
        src: picture4,
        alt: '...',
        label: 'General management',
        caption: 'Staff, financial and safety management.',
      },
      {
        src: picture5,
        alt: '...',
        label: 'Development',
        caption: 'Golang enthusiast.',
      },
    ]
    const carousel5 = ref(0)
    return {
      items5,
      carousel5,
      picture1,
      picture2,
      picture3,
      picture4,
      picture5,
    }
  },
})
</script>

<style lang="scss">
.carousel {
  height: auto; /*50vh*/
  width: 92vh; /* width: 100%; */
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  margin: auto;
}
.carousel-caption-still {
  color: whitesmoke !important;
}

@media only screen and (min-width: 375px) and (max-width: 1023px) {
  .carousel-media {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    column-fill: auto;
  }
  .items-media {
    width: 100% !important;
  }
  .carousel {
    height: auto; /*50vh*/
    width: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    margin: auto; /* //need to fix */
  }
}
</style>
