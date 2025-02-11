<template>
  <MDBCard shadow="5" class="rounded-8 mx-1 my-4">
    <MDBCardBody bg="warning" class="card-content text-start fs-5">
      <MDBCardTitle>Management of technology in various parts of telecommunication</MDBCardTitle>
      <MDBCardText class="media-font-size">
        Broad experience in the planning of urban and especially rural telecommunications networks.
        This includes copper and optic fiber infrastructure and reticulation planning, to wireless
        backbone and distribution network design. Electronic switches - this varies from maintenance
        of German EWSD switches to new extensions of German and E10 (French) electronic switches.
        Experience in procuring right-of-way agreements from property owners and liaison with local
        authorities and contractors. Facilitation of Environmental Impact Studies. Management of a
        variety of contractors, including planners and project managers for site preparation and
        build.
      </MDBCardText>
      <MDBCardTitle>
        <img :src="pageDivider" class="img-fluid" alt="..." />
        <p></p>
      </MDBCardTitle>
      <MDBCardTitle>Geographical Information Systems(GIS)</MDBCardTitle>
      <MDBCardText class="media-font-size">
        Extensive knowledge and experience in GIS systems and the hardware and software associated,
        ranging from personal computer based Windows systems to Unix(IRIX) platforms. Integration of
        GIS technology with Web based systems and development of desktop applications. Trained and
        functional in the ESRI suite of products, Arcview, ArcINFO 8, ArcIMS 3 and ERDAS and bridged
        to ARCGIS. A member of the pilot implementation team for Telkom SA's NETPLAN (Network
        Planning Tool and Integrated Network Inventory based on GE SmallWorld GIS).
      </MDBCardText>
      <MDBCardTitle>
        <img :src="pageDivider" class="img-fluid" alt="..." />
        <p></p>
      </MDBCardTitle>
      <MDBCardTitle>Distributed system and microservices</MDBCardTitle>
      <MDBCardText class="media-font-size">
        ECreated and deployed projects using Docker, reverse-proxy (Traefik), various databases
        (Redis, MySQL, POSTGRES, MongoDB), Golang servers both web and gRPC as well as single page
        applications with Vue3 Typescript frontends. Integrated metrics with Prometheus and exposed
        it with Grafana. Implemented authentication with JWT and OAUTH2.
      </MDBCardText>
      <MDBCardTitle>
        <img :src="pageDivider" class="img-fluid" alt="..." />
        <p></p>
      </MDBCardTitle>
      <MDBCardTitle>PABX integration</MDBCardTitle>
      <MDBCardText class="media-font-size">
        Compiled integration documentation for Yeastar PBX and implemented APIs in Golang (REST and
        websocket) for testing and integration guidelines.
      </MDBCardText>
    </MDBCardBody>
  </MDBCard>
</template>

<script lang="ts">
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'
// import images
import pageDivider from '@/assets/symbols/page-divider-design-png-6.png'
export default defineComponent({
  components: {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
  },
  setup() {
    return {
      pageDivider,
    }
  },
})
</script>

<style lang="scss" scoped>
// @import '@/assets/config/_variables.scss';

.card-content {
  background-color: white-smoke;
  border-radius: 12px;
  margin: 0.5rem auto;
  max-width: 40rem;
}
</style>
