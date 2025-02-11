<template>
  <div class="page-content me-2 card-media-home">
    <base-card :fromHome="true" class="card-media">
      <h2>About me</h2>
    </base-card>
    <base-card :fromHome="true">
      <MDBCard text="center" class="card-content-inner">
        <MDBCardBody>
          <MDBCardText>
            <img :src="logo" alt="" style="width: 200px; height: 200px" class="img-fluid" />
            <MDBTable class="align-middle mb-0 bg-white" responsive="md" sm>
              <thead class="bg-light table-header">
                <tr>
                  <th>eMail</th>
                  <th>Cell</th>
                  <th>Linkedin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="d-flex align-items-center justify-content-center wrap-media">
                      <img
                        :src="photo"
                        alt=""
                        style="width: 45px; height: 45px"
                        class="rounded-circle"
                      />
                      <div class="ms-3">
                        <p class="mb-0">pienaahj@gmail.com</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="mt-2">+27 813539441</p>
                  </td>
                  <td>
                    <p class="mt-1">
                      <MDBBtn
                        color="link"
                        size="sm"
                        rounded
                        class="fw-bold"
                        :ripple="{ color: 'dark' }"
                      >
                        Linkedin Link
                      </MDBBtn>
                      <a
                        class="stretched-link"
                        href="https://www.linkedin.com/in/hendrik-pienaar-93bb703b"
                      ></a>
                    </p>
                  </td>
                </tr>
              </tbody>
            </MDBTable>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </base-card>
  </div>
</template>

<script lang="ts">
import { MDBCard, MDBCardText, MDBCardBody, MDBTable, MDBBtn } from 'mdb-vue-ui-kit'
import { defineComponent } from 'vue'
import BaseCard from '../components/ui/BaseCard.vue'
// import images
import logo from '@/assets/icons/HJP-Logo.png'
import photo from '@/assets/images/hendrik-grey-background.webp'
export default defineComponent({
  components: {
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBTable,
    MDBBtn,
    BaseCard,
  },
  setup() {
    return {
      logo,
      photo,
    }
  },
})
</script>

<style lang="scss" scoped>
// @import '@/assets/config/_variables.scss';
.custom-class {
  display: none;
}
.page-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 90rem;
}
.card-content {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.1rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
.card-content-technical {
  background-color: $silver-pink;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
.table-layout {
  background-color: $bd-blue;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0.5rem auto;
  max-width: 100rem;
}
.card-content-inner {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: unset;
  margin: 0.5rem;
  max-width: 100rem;
}
@media only screen and (min-width: 375px) and (max-width: 1023px) {
  .card-media-home {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    column-fill: auto;
    max-width: fit-content;
  }
  .table-content tr {
    background-color: whitesmoke;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 100rem;
  }
  .table-header {
    background-color: $bd-blue;
    align-items: stretch;
    vertical-align: top;
  }
  .table-header tr {
    background-color: $bd-blue;
    align-items: stretch;
    vertical-align: top;
  }
  .table thead th {
    background-color: $bd-blue;
    align-items: stretch;
    vertical-align: top;
  }
  .table-data {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 100rem;
  }
  .card-content-technical {
    background-color: $silver-pink;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 8px !important;
    margin: auto !important;
    width: 100% !important;
    max-width: 100rem;
  }
  .wrap-media {
    flex-wrap: wrap !important;
  }
  .card-content-inner {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: unset;
    margin: 0.5rem;
    max-width: 100rem;
  }
}
</style>
