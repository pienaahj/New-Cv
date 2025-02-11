<template>
  <MDBCard>
    <a v-mdb-ripple="{ color: 'dark' }">
      <MDBCardImg :src="photo" top alt="..." class="img-thumbnail rounded-pill w-50" />
    </a>
    <MDBCardBody>
      <MDBCardTitle>
        <h1 class="text-center">Hendrik Pienaar</h1>
      </MDBCardTitle>
      <MDBCardTitle class="text-center">
        <h4>
          Technical manager
          <small class="text-muted"> & developer</small>
        </h4>
      </MDBCardTitle>
      <MDBCardTitle>
        <img :src="downSymbol" class="img-fluid" alt="..." />
        <p></p>
        <h5 class="text-center fst-italic">Professional Profile</h5>
      </MDBCardTitle>
      <MDBCardText collapseId="collapseOne" class="text-wrap text-start">
        <p>
          Electronic Engineer with specialisation in Telecommunications Planning and Geographic
          Information Systems. With over two and a half decades of technical management and
          coordination experience, I have honed my skills in planning and integrating access network
          technologies and Geographic Information Systems. My expertise encompasses contractor and
          staff management, enabling me to effectively drive company goals and implement strategic
          objectives.
        </p>
        <p>
          My unwavering dedication to innovation has led me to transition from my previous role to
          software development, particularly in distributed systems and microservices. My ability to
          think creatively, coupled with my positive attitude and respect for others, has
          consistently driven me to excel in this field.
        </p>
        <p>
          My personal motivation stems from my belief that every challenge presents an opportunity
          for solution-finding and my deep passion for solving complex problems. I thrive on
          challenges and enjoy empowering others to achieve their goals. My insatiable curiosity
          drives me to continuously seek new knowledge and opportunities for growth.
        </p>
        <p></p>
        <p>I like a challenge.</p>
        <p>I like to enable others to achieve.</p>
        <p>I am ever curious.</p>
      </MDBCardText>
      <MDBCardTitle>
        <img :src="kindSymbol" class="img-fluid" alt="..." />
      </MDBCardTitle>
    </MDBCardBody>
  </MDBCard>
</template>

<script lang="ts">
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImg,
  mdbRipple,
} from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'
// import images
import photo from '../assets/images/hendrik-grey-background.webp'
import downSymbol from '../assets/symbols/kindpng_3790542.png'
import kindSymbol from '../assets/symbols/kindpng_3790542.png'
export default defineComponent({
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImg,
  },
  directives: {
    mdbRipple,
  },
  setup(props) {
    return {
      props,
      photo,
      downSymbol,
      kindSymbol,
    }
  },
})
</script>

<style scoped>
.header {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 15rem;
}
</style>
