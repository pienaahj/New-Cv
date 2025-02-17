<template>
  <MDBCarousel
  v-if="isDesktop"
    v-model="carousel6"
    :items="items6"
    :indicators="false"
    fade
    :interval="9000"
    innerClass="rounded-6 carousel-media"
    :controls="false"
    itemsClass="d-block m-8 p-17 items-media "
    tag:="div"
    captionsClass="carousel-caption d-none d-md-block carousel-caption-video text-black "
  ></MDBCarousel>

</template>

<script lang="ts">
  import { ref } from "vue";
  import { MDBCarousel } from "mdb-vue-ui-kit";
  import { defineComponent, onMounted, onUnmounted } from "vue";
  // import images
  import video1 from '@/assets/images/mixkit-small-boat-scaled 720p .mp4';
  import video2 from '@/assets/images/Beach - 3998.mp4';
  import video3 from '@/assets/images/Nature boat see- 111309.mp4';
  export default defineComponent({
    components: {
      MDBCarousel
    },
    setup() {
      const items6 = [
        {
          video: video1,
          alt: "...",
          label: '“You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives."',
          caption: "-Clay P. Bedford",
          muted: "muted",
          autoplay: "autoplay",
          loop: "loop",

        },
        {
          video: video2,
          alt: "...",
          label: '"Intelligence plus character-that is the goal of true education."',
          caption: "-Martin Luther King Jr.",
          muted: "muted",
          autoplay: "autoplay",
          loop: "loop",
        },
        {
          video: video3,
          alt: "...",
          label: '"Tell me and I’ll forget; show me and I may remember; involve me and I’ll understand."',
          caption:
            "-Chinese Proverb",
          muted: "muted",
          autoplay: "autoplay",
          loop: "loop",
        }
      ];
      const isDesktop = ref(window.innerWidth > 1200);
      const updateScreenSize = () => {
        isDesktop.value = window.innerWidth > 1200;
      };
      const carousel6 = ref(0);

      onMounted(() => {
        updateScreenSize(); // Set the correct value on page load
        window.addEventListener("resize", updateScreenSize);
      });

      onUnmounted(() => {
        window.removeEventListener("resize", updateScreenSize);
      });

      return {
        items6,
        carousel6,
        video1,
        video2,
        video3,
        isDesktop,
      };
    }
  });

</script>

<style lang="scss" scoped>
  // @import '@/assets/config/_variables.scss';
    /* Carousel styling */
    .carousel {
  height: auto; /*50vh*/
  width: auto; /* width: 100%; */
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  margin: auto;
  }
  #introCarousel,
  .carousel-inner,
  .carousel-item,
  .carousel-item.active {
    height: 50vh; /*100vh */
    display: flex;
    justify-content: center;
  }

  .carousel-item:nth-child(1) {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .carousel-item:nth-child(2) {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .carousel-item:nth-child(3) {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .carousel-item-size video{
    height: 55h;
    object-fit: cover;
    object-position: centre;
    overflow: hidden;
  }
  .carousel-caption-video {
    color: $olive-drab-7 !important;
  }
  // /* Height for devices larger than 576px */
  // @media (min-width: 992px) {
  //   #introCarousel {
  //     margin-top: -58.59px;
  //   }
  // }
  @media only screen and (max-width: 1200px) {
  .carousel-media {
    display: flex;
    flex-direction:column;
    width: 1000% !important;
    column-fill: auto;
  }
  .carousel {
    height: auto;
    width: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    margin:auto;
  }
  .show-on-desktop-only {
    display: none !important;
  }
  }
</style>

<style lang="scss">
  // MDB carousel component styles needs to be global
  // @import '@/assets/config/_variables.scss';
  .carousel-caption-video {
    color: $olive-drab-7 !important;
  }
  @media only screen and (max-width: 1200px) {
  .carousel-media {
    display: flex;
    flex-direction:column;
    width: 1000% !important;
    column-fill: auto;
  }
  .carousel {
    height: auto;
    width: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    margin:auto;
  }
  .show-on-desktop-only {
    display: none !important;
  }
  }
</style>
