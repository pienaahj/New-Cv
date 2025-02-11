<template>
  <!-- if still loading the data spin -->
  <p v-if="isLoading">
    <base-spinner></base-spinner>
  </p>
  <div v-else-if="!isLoading && hasCourses">
    <MDBTable variant="light" striped sm class="media-font-size" borderless>
      <thead class="table-header sticky-top">
        <tr>
          <th scope="col">Title</th>

          <th scope="col" id="test" v-if="!online">
            <label for="courseCategory">Category</label>
            <select
              v-on:change="filterCourseCategories"
              name="courseCategory"
              id="courseCategory"
              class="d-flex flex-wrap"
            >
              <option value="all">All</option>
              <option value="Management/Leadership">Management/Leadership</option>
              <option value="Computer literacy">Computer Literacy</option>
              <option value="Project Management">Project Management</option>
              <option value="Management & people skills">Management & People Skills</option>
              <option value="Financial Management">Financial Management</option>
              <option value="Saftey Management">Saftey Management</option>
              <option value="Technical Training">Technical Training</option>
              <option value="GIS">GIS</option>
              <option value="Programming/Developer">Programming Developer</option>
            </select>
          </th>

          <th scope="col" id="test2" v-else>
            <label for="onlineCourseCategory">Category</label>
            <select
              v-on:change="filterCourseCategories"
              name="onlineCourseCategory"
              id="courseCategory"
              class="d-flex flex-wrap"
            >
              <option value="all">All</option>
              <option value="Golang/Development">Golang Development</option>
              <option value="Python/Development">Python Development</option>
              <option value="SQL/Development">SQL Development</option>
              <option value="ElasticSearch/Development">ElasticSearch Development</option>
              <option value="Security/Development">Security Development</option>
              <option value="LinuxAdministrator">Linux Administrator</option>
              <option value="ProjectManagement">Project Management</option>
              <option value="FrontEndFramework">FrontEnd Framework</option>
              <option value="WebDevelopment">Web Development</option>
              <option value="AI/Development">AI Development</option>
            </select>
          </th>

          <th id="institution" v-if="!online" scope="col">Institution/Period</th>

          <th scope="col" id="test3" v-if="online">
            <label for="onlineCourseCompleted">Completed</label>
            <select
              v-on:change="filterCoursesCompleted"
              name="onlineCourseCompleted"
              id="courseCompleted"
              class="d-flex"
            >
              <option value="all">All</option>
              <option value="yes">yes</option>
              <option value="in progress">in progress</option>
            </select>
          </th>

          <th class="show-on-desktop" scope="col">Description</th>
        </tr>
      </thead>
      <tbody class="vertical-align:top">
        <tr
          v-for="course in courses"
          :key="course.id"
          :courseTitle="course.courseTitle"
          :courseCategory="course.courseCategory"
          :datePeriod="course.datePeriod"
          :description="course.description"
          :institution="course.institution"
        >
          <td>
            <div>
              <p>{{ course.courseTitle }}</p>
            </div>
          </td>
          <td>
            <p>{{ course.courseCategory }}</p>
          </td>
          <td v-if="!online">
            <p>{{ course.institution }}</p>
            <p>{{ course.datePeriod }}</p>
          </td>
          <td v-if="online">
            <p>{{ course.completed }}</p>
          </td>
          <td colspan="2" class="show-on-desktop">
            <div>
              {{ course.description }}
            </div>
          </td>
        </tr>
      </tbody>
    </MDBTable>
  </div>
</template>

<script lang="ts">
import { MDBTable } from 'mdb-vue-ui-kit'
import { defineComponent, ref, onMounted } from 'vue'
import { useTopicStore } from '@/store/topicStore'
import type { Course } from '@/model/types'
import BaseSpinner from '@/components/ui/BaseSpinner.vue'
export default defineComponent({
  components: {
    MDBTable,
    BaseSpinner,
  },
  props: {
    online: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const topicStore = useTopicStore()
    const isLoading = ref(false)
    const el: string = '#test'
    const courses = ref<Course[]>([]) // for display
    const firstFilteredCourses = ref<Course[]>([]) // to remember the original courses loaded
    const completedCourses = ref<Course[]>([]) // to remember the completed course filtered list
    const categoryCourses = ref<Course[]>([]) // to remember the category filtered courses
    const completedSelector = ref('all')
    const categorySelector = ref(false)
    const categorySelected = ref('all')
    const hasCourses = ref(false)

    const filteredCourses = () => {
      const allCourses = topicStore.getFormal
      const onlineCourses = topicStore.getOnline
      return props.online ? onlineCourses : allCourses
    }

    const allCourses = () => {
      isLoading.value = true
      courses.value = filteredCourses()
      firstFilteredCourses.value = courses.value
      isLoading.value = false
      completedCourses.value = firstFilteredCourses.value
      categoryCourses.value = firstFilteredCourses.value
    }

    const filterCoursesCompleted = (event?: Event) => {
      let newCourses: Course[] = []
      // ? categoryCourses.value // if a category was selected
      // : firstFilteredCourses.value // if no course category selector, remember those courses - all courses
      let completedSelection = event
        ? (event.target as HTMLSelectElement).value
        : completedSelector.value
      // check if there was a selection made

      if (categoryCourses.value) {
        // if a category was selected
        newCourses = categoryCourses.value // if a category was selected
      } else {
        newCourses = firstFilteredCourses.value // if no course category selector, remember those courses - all courses
      }
      // test if the completed selector is present
      console.log('completed selection: ', completedSelector.value)
      if (event == undefined) {
        // if this was a change completed called from the category selector
        completedSelection = completedSelector.value // set the completed selection to what was stored
        console.log('completed selection: ', completedSelection)
      }
      if (completedSelection === 'all' && completedSelector.value === 'all') {
        // in all completed courses cases
        // in all completed course cases
        courses.value = newCourses // display all the courses in the category filter
      } else if (completedSelection === 'all' && completedSelector.value != 'all') {
        // if all was selected and was a selector before
        courses.value = newCourses // display all the courses in the category filter
      } else if (completedSelector.value != 'all') {
        // if there was a previous completed selector, filter on it
        courses.value = completedCourses.value.filter(
          (e) => e.completed === completedSelector.value,
        )
      } else {
        courses.value = newCourses.filter((e) => e.completed === completedSelection)
      }
      completedSelector.value = completedSelection // store the current selector
      completedCourses.value = courses.value // remember the completed courses set
    }

    const filterCourseCategories = (event: Event) => {
      const target = event.target as HTMLSelectElement
      const category = target.value
      let courseList: Course[] = []
      // test if the completed selector is present
      if (completedSelector.value === 'all') {
        if (categorySelected.value != category) {
          // if different category selected - reset all
          courseList = firstFilteredCourses.value // reset to all courses
          completedSelector.value = 'all' // reset to all courses
          if ((document.querySelector('#courseCompleted') as HTMLSelectElement) !== null) {
            // reset completed selector to all
          }
          filterCoursesCompleted()
        } else {
          courseList = completedCourses.value
        }
      } else {
        courseList = firstFilteredCourses.value
      }
      if (category === 'all') {
        // if seleting all courses in category reset the completed selector
        courses.value = courseList
        categorySelector.value = false
        completedSelector.value = 'all'
        // filterCoursesCompleted()
      } else {
        courses.value = courseList.filter((course) => course.courseCategory === category)
        completedSelector.value = category
        completedCourses.value = courses.value
      }
    }

    // on mounted load the courses
    onMounted(async () => {
      try {
        isLoading.value = true
        await topicStore.loadCourses() // load the courses in the store
        firstFilteredCourses.value = topicStore.getFormal // remember the original courses
        // console.log('courses loaded: ', JSON.stringify(topicStore.getFormal))
        hasCourses.value = topicStore.hasCourses
        allCourses()
      } catch (error) {
        console.error(error)
      }
      isLoading.value = false
    })

    return {
      props,
      hasCourses,
      isLoading,
      el,
      courses,
      firstFilteredCourses,
      completedCourses,
      categoryCourses,
      completedSelector,
      categorySelector,
      categorySelected,
      allCourses,
      filterCoursesCompleted,
      filterCourseCategories,
    }
  },
})
</script>

<style lang="scss" scoped>
// @import '@/assets/config/_variables.scss';
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
</style>
