<template>
  <!-- <header> -->
  <MDBNavbar
    class="mb-1 opacity-85 nav-media nav-layout full-width-container-heading"
    expand="xl"
    position="sticky"
    light
    center
    container
  >
    <MDBNavbarBrand href="#">
      <img :src="logo" height="100" alt="" loading="lazy" class="zoom" />
    </MDBNavbarBrand>
    <!-- <MDBNavbarToggler @click="collapse1 = !collapse1" target="#navbarSupportedContent">
      <font-awesome-icon :icon="['fas', 'bars']" ref="togglerIcon" />
    </MDBNavbarToggler> -->
    <div class="custom-toggler !important">
      <button @click="collapse1 = !collapse1">
        <font-awesome-icon v-if="!collapse1" :icon="['fas', 'bars']" />
      </button>
    </div>

    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <MDBNavbarNav class="mb-1 mb-lg-0">
        <MDBNavbarItem active to="/" linkClass="change-link-color-active">
          <MDBTooltip v-model="tooltip1" tag="a">
            <template #reference>
              <a active to="/">Home</a>
            </template>
            <template #tip> Career, Skills, Technical Knowledge and Core Competencies </template>
          </MDBTooltip>
        </MDBNavbarItem>
        <!-- <font-awesome-icon :icon="['fas', 'bars']" /> -->
        <MDBNavbarItem linkClass="change-link-color" to="/CoursePage"> Education </MDBNavbarItem>

        <MDBNavbarItem linkClass="change-link-color" to="/EmploymentPage">
          Employment History
        </MDBNavbarItem>

        <MDBNavbarItem>
          <!-- Navbar dropdown -->
          <MDBDropdown class="nav-item" v-model="dropdown1" dropup>
            <MDBDropdownToggle
              tag="a"
              class="nav-link change-link-color"
              @click="dropdown3"
              color="aliceblue"
            >
              More...
            </MDBDropdownToggle>
            <MDBDropdownMenu aria-labelledby="dropdownMenuButton" dark>
              <MDBDropdownItem to="/personalPage">Some personal guidance</MDBDropdownItem>

              <MDBDropdownItem href="/files/HJ_Pienaar_cv_2025_02 .pdf" download
                >Download curriculum vitae</MDBDropdownItem
              >
              <!-- <MDBIcon icon="download"></MDBIcon> -->
              <MDBDropdownItem to="/aboutMe">Contact Information</MDBDropdownItem>
              <MDBDropdownItem to="/siteInfo">Site Information</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarItem>
      </MDBNavbarNav>

      <span class="navbar-text custom-font fs-1 text fw-bolder lh-1" text-wrap>
        When the winds of change blow, some people build walls and others build windmills.
        <p class="fs-3 m-0">- old Chinese proverb</p>
      </span>
    </MDBCollapse>
  </MDBNavbar>
  <!-- </header> -->
</template>

<script lang="ts">
import {
  MDBTooltip,
  MDBNavbar,
  // MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  // MDBIcon,
  // MDBContainer,
} from 'mdb-vue-ui-kit'

import { ref, defineComponent } from 'vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import type { ComponentPublicInstance } from 'vue'
// import images

import logo from '@/assets/icons/HJP-Logo_c2.png'
import { useTopicStore } from '@/store/topicStore'
export default defineComponent({
  name: 'filename-table',
  components: {
    MDBTooltip,
    MDBNavbar,
    // MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    // FontAwesomeIcon,
    // MDBIcon,
    // MDBContainer,
  },
  setup() {
    // get the store
    const topicStore = useTopicStore()
    const collapse1 = ref(false)
    const dropdown1 = ref(false)
    const tooltip1 = ref(false)
    const isActive = ref(true)
    // const togglerIcon = ref<ComponentPublicInstance | null>(null)
    const dropdown3 = () => {
      console.log('dropdown3')
      // put the basecard display off
      dropdown1.value = !dropdown1.value
      // toggle the basecard display off
      topicStore.setDisplayInActive()
      isActive.value = topicStore.getDisplayActive
    }

    return {
      collapse1,
      dropdown1,
      dropdown3,
      tooltip1,
      logo,
      isActive,
    }
  },
})
</script>

<style lang="scss" scoped>
// @use '@/scss/config/_variables.scss';

.nav-layout {
  background-color: $bd-blue;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 0.2rem auto;
  // max-width: 100rem;
  width: 100%;
  position: relative;
  font-size: 1.2rem;
}
.quote {
  color: $desert-sand !important;
}
.nav-media {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  /* flex-wrap: wrap; */
  // column-fill: auto;
}
</style>

<style lang="scss">
// @use '@/scss/config/_variables.scss';
.change-link-color {
  color: $charcoal !important;
  :active {
    color: $desert-sand !important;
  }
}
.dropdown-menu {
  display: none;
  max-height: 200px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  // inset: -31px auto auto 0px !important;
  transform: translate3d(93px, 0px, 0px);
}
.navbar.expanded .dropdown-menu {
  display: block; /* Navbar expands naturally */
  max-height: 300px; /* Adjust based on content */
}
.ul.dropdown-menu-start.show {
  display: flex;
  flex-direction: column;
  width: 100% !important;
  position: fixed;
  top: 50px; /* Adjust based on navbar height */
  left: 50%;
  transform: translateX(-50%);
  /* flex-wrap: wrap; */
  // column-fill: auto;
}
.change-link-color-active {
  color: black !important;
  :active {
    color: $desert-sand !important;
  }
}
.change-link-color.router-link-active {
  color: $desert-sand !important;
}
.change-link-color.nav-link.active {
  color: $desert-sand !important;
}
.zoom {
  transition: transform 0.2s;
}
.zoom:hover {
  transform: scale(1.7);
}
.navbar {
  overflow: visible; /* Ensure dropdown and icon aren't clipped */
}
.custom-toggler {
  display: none; /* Hide the toggler by default */
}
@media only screen and (max-width: 1200px) {
  .custom-toggler {
    display: flex;
    border: none !important; /* Remove any unwanted border */
    // background: none !important; /* Ensure no background */
    padding: 0; /* Adjust spacing */
    margin: 0; /* Adjust spacing */
    width: auto; /* Prevent forced scaling */
    background-color: $bd-blue !important; /* Set background color */
    overflow: visible; /* Allow for overflow */
    box-sizing: content-box;
  }
}
@media only screen and (min-width: 375px) and (max-width: 1140px) {
  .ul.dropdown-menu-start.show {
    display: flex;
    flex-direction: column;
    width: 100% !important;
    position: relative;
    top: 50px !important; /* Adjust based on navbar height */
    left: 50% !important;
    transform: translateX(-50%) !important;
    /* flex-wrap: wrap; */
    // column-fill: auto;
  }
  .dropdown-menu {
    display: none;
    max-height: 200px;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    // inset: -31px auto auto 0px !important;
    transform: translate3d(93px, 0px, 0px);
  }
  .navbar.expanded .dropdown-menu {
    display: block; /* Navbar expands naturally */
    max-height: 300px; /* Adjust based on content */
  }
  .mdb-navbar-toggler {
    background: none !important;
    border: none !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    font-size: 24px; /* Adjust as needed */
    color: black !important; /* Ensure it's visible */
  }

  // .custom-toggler {
  //   border: none !important; /* Remove any unwanted border */
  //   // background: none !important; /* Ensure no background */
  //   padding: 0; /* Adjust spacing */
  //   margin: 0; /* Adjust spacing */
  //   width: auto; /* Prevent forced scaling */
  //   background-color: $bd-blue !important; /* Set background color */
  //   overflow: visible; /* Allow for overflow */
  //   box-sizing: content-box;
  // }
  .button {
    order: none !important; /* Remove any unwanted border */
    background-color: $bd-blue !important;
    padding: 0 !important; /* Adjust spacing */
    margin: 0 !important; /* Adjust spacing */
  }
  ::v-deep(.custom-toggler) {
    background: none !important; /* Remove background */
    border: none !important; /* Remove border */
    padding: 0 !important; /* Reset padding */
    width: auto !important; /* Prevent forced sizing */
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  ::v-deep(.custom-toggler .svg-inline--fa) {
    background: none !important;
    border: none !important;
    width: 24px; /* Adjust icon size */
    height: 24px;
  }
}
</style>
