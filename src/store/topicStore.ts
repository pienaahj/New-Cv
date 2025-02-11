import { defineStore } from 'pinia'

import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import type {
  // Competency,
  Competencies,
  Courses,
  // Course,
  // Employment,
  Employments,
  // Literacy,
  Literacies,
  // Responsibility,
  Responsibilities,
  // Skill,
  Skills,
} from '@/model/types'

export const useTopicStore = defineStore(
  'topicStore',

  () => {
    // *********************** state ***********************
    const competencies: Ref<Competencies> = ref([])
    const courses: Ref<Courses> = ref([])
    const employments: Ref<Employments> = ref([])
    const literacies: Ref<Literacies> = ref([])
    const responsibilities: Ref<Responsibilities> = ref([])
    const skills: Ref<Skills> = ref([])
    const displayActive: Ref<boolean> = ref(true)
    // *********************** variables ***********************
    // const competencies: Competencies[
    //         {
    //             id:  'unique_id1',
    //             coreComp:  'competency test',
    //         },
    //         {
    //             id:  'unique_id2',
    //             coreComp:  'competency  test2',
    //         },
    // ];
    const literaciesValues: Literacies = [
      {
        id: 'id1',
        CompSkill: 'Basic Computer skills  (Desktop, Intra/Internet, Office etc.)',
      },
      {
        id: 'id2',
        CompSkill:
          'Advanced Computer skills (MS Windows, Linux (Rasbian, Ubuntu, Kali, MX, Mint), MacOS, networking)',
      },
      {
        id: 'id3',
        CompSkill:
          'GIS related skills (ARC View, Arc Info, Arc GIS, ERDAS, GE Smallworld, PathFinder (GPS))',
      },
      {
        id: 'id4',
        CompSkill: 'Database design (relational, geo spatial)',
      },
      {
        id: 'id5',
        CompSkill: 'Programming skills (Golang, Python, JavaScript, VueJS, NodeJS, SQL, HTML, CSS)',
      },
    ]
    // *********************** getters ***********************
    const getCompetencies = computed(() => {
      return competencies
    })
    const hasCompetencies = computed(() => {
      return competencies.value && competencies.value.length > 0
    })
    const getCourses = computed(() => {
      return courses
    })
    const hasCourses = computed(() => {
      return courses.value && courses.value.length > 0
    })
    const getFormal = computed(() => {
      return courses.value.filter((course) => course.institution !== 'UDEMY Online')
    })
    const getOnline = computed(() => {
      return courses.value.filter((course) => course.institution === 'UDEMY Online')
    })
    const getEmployments = computed(() => {
      return employments
    })
    const hasEmployments = computed(() => {
      return employments.value && employments.value.length > 0
    })
    const getLiteracies = computed(() => {
      return literaciesValues
    })
    const hasLiteracies = computed(() => {
      return literacies.value
    })
    const getResponsibilities = computed(() => {
      return responsibilities
    })
    const hasResponsibilities = computed(() => {
      return responsibilities.value && responsibilities.value.length > 0
    })
    const getSkills = computed(() => {
      return skills
    })
    const hasSkills = computed(() => {
      return skills.value && skills.value.length > 0
    })

    const getDisplayActive = computed(() => {
      return displayActive.value
    })

    // *********************** actions ***********************
    const toggleDisplayActive = () => {
      displayActive.value = !displayActive.value
    }
    const setDisplayActive = () => {
      displayActive.value = true
      return displayActive.value
    }
    const setDisplayInActive = () => {
      displayActive.value = false
      return displayActive.value
    }
    const loadCompetencies = async () => {
      try {
        const response = await fetch(
          'https://my-cv-7674b-default-rtdb.firebaseio.com/coreComp.json',
        )

        if (!response.ok) {
          //error
          throw new Error('Failed to fetch competencies')
        }
        const responseData = await response.json()
        competencies.value = Object.keys(responseData).map((key) => ({
          id: key,
          coreComp: responseData[key].coreComp,
        }))
      } catch (error) {
        console.error('error')
        throw error
      }
    }

    const loadCourses = async () => {
      try {
        const response = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/courses.json')
        if (!response.ok) {
          //error
          throw new Error('Failed to fetch courses')
        }

        const responseData = await response.json()
        courses.value = Object.keys(responseData).map((key) => ({
          id: key,
          completed: responseData[key].completed,
          courseCategory: responseData[key].courseCategory,
          courseTitle: responseData[key].courseTitle,
          datePeriod: responseData[key].datePeriod,
          description: responseData[key].description,
          institution: responseData[key].institution,
        }))
      } catch (error) {
        console.error('error')
        throw error
      }
    }

    const loadEmployments = async () => {
      try {
        const response = await fetch(
          'https://my-cv-7674b-default-rtdb.firebaseio.com/employmentsHistory.json',
        )
        if (!response.ok) {
          //error
          throw new Error('Failed to fetch employments')
        }
        const responseData = await response.json()
        employments.value = Object.keys(responseData).map((key) => ({
          id: key,
          durationPeriod: responseData[key].durationPeriod,
          jobTitle: responseData[key].jobTitle,
          place: responseData[key].place,
          jobDescription1: responseData[key].jobDescription1 || '',
          jobDescription2: responseData[key].jobDescription2 || '',
          jobDescription3: responseData[key].jobDescription3 || '',
          jobResponsibilities1: Array.isArray(responseData[key].jobResponsibilities1)
            ? responseData[key].jobResponsibilities1
            : [],
          jobResponsibilities2: Array.isArray(responseData[key].jobResponsibilities2)
            ? responseData[key].jobResponsibilities2
            : [],
          jobResponsibilities3: Array.isArray(responseData[key].jobResponsibilities3)
            ? responseData[key].jobResponsibilities3
            : [],
        }))
      } catch (error) {
        console.error('error')
        throw error
      }
    }
    // const loadLiteracies = async () => {
    //   try {
    //     const response = await fetch(
    //       'https://my-cv-7674b-default-rtdb.firebaseio.com/literacies.json',
    //     )
    //     if (!response.ok) {
    //       //error
    //       throw new Error('Failed to fetch literacies')
    //     }
    //     const responseData = await response.json()
    //     literacies.value = Object.keys(responseData).map((key) => ({
    //       id: key,
    //       CompSkill: responseData[key].CompSkill,
    //     }))
    //   } catch (error) {
    //     console.error('error')
    //     throw error
    //   }
    // }

    const loadResponsibilities = async () => {
      try {
        const response = await fetch(
          'https://my-cv-7674b-default-rtdb.firebaseio.com/responsibilities.json',
        )
        if (!response.ok) {
          //error
          throw new Error('Failed to fetch responsibilities')
        }
        const responseData = await response.json()
        responsibilities.value = Object.keys(responseData).map((key) => ({
          id: key,
          responsibility: responseData[key].responsibility,
        }))
      } catch (error) {
        console.error('error')
        throw error
      }
    }
    const loadSkills = async () => {
      try {
        const response = await fetch('https://my-cv-7674b-default-rtdb.firebaseio.com/skill.json')
        if (!response.ok) {
          //error
          throw new Error('Failed to fetch skills')
        }
        const responseData = await response.json()
        skills.value = Object.keys(responseData).map((key) => ({
          id: key,
          skill: responseData[key].skill,
        }))
      } catch (error) {
        console.error('error')
        throw error
      }
    }
    // *********************** return ***********************

    return {
      competencies,
      loadCompetencies,
      getCompetencies,
      hasCompetencies,
      courses,
      loadCourses,
      getCourses,
      hasCourses,
      getFormal,
      getOnline,
      employments,
      loadEmployments,
      getEmployments,
      hasEmployments,
      literaciesValues,
      // loadLiteracies,
      getLiteracies,
      hasLiteracies,
      skills,
      loadSkills,
      getSkills,
      hasSkills,
      getResponsibilities,
      hasResponsibilities,
      loadResponsibilities,
      displayActive,
      getDisplayActive,
      toggleDisplayActive,
      setDisplayActive,
      setDisplayInActive,
    }
  },
)
