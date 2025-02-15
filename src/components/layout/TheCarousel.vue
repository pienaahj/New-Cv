<template>
  <div class="carousel-container">
    <MDBCarousel
      v-model="carousel5"
      :items="items5"
      :interval="9000"
      fade
      innerClass="rounded-5 shadow-4-strong carousel-media"
      itemsClass="d-block m-8 p-16 items-media"
      tag="div"
    />
  </div>
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
        caption: 'Golang and Typescript full stack.',
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
  height: 100%; /*50vh*/
  width: 100%; /* width: 100%; */
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  margin: auto;
}
.carousel-media {
  height: 100%; /*50vh*/
  width: 100%; /* width: 100%; */
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  margin: auto;
}
.carousel-container {
  width: 1auto; /* Set your desired width */
  height: auto; /* Set your desired height */
  overflow: hidden; /* Hide overflow content */
}
.carousel-container .carousel-inner,
.carousel-container .carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Crop images to fit */
}
.carousel-caption {
  color: whitesmoke !important;
}
.carousel-caption-still {
  color: whitesmoke !important;
}

@media only screen and (min-width: 375px) and (max-width: 1140px) {
  .carousel-media {
    display: flex;
    flex-direction: column;
    width: 80% !important;
    column-fill: auto;
  }
  .items-media {
    width: 60% !important;
  }
  .carousel {
    height: auto; /*50vh*/
    width: 50% !important;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    margin: auto; /* //need to fix */
  }
}
</style>
