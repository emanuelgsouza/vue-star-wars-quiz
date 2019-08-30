<template>
  <div class="page-container">
    <AppHeader />

    <div class="question-text">
      <QuestionText v-bind="{ person }" />
    </div>

    <div class="question-options-container">
      <QuestionOptions
        :options="options"
        v-model="selected"
      />
    </div>

    <div class="question-check">
      <button class="button">
        Check!
      </button>
    </div>

    <AppVersion />
  </div>
</template>

<script>
import AppVersion from '../../components/Version'
import QuestionText from '../../components/QuestionText'
import QuestionOptions from '../../components/QuestionOptions'
import AppHeader from './header'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PlanetsQuiz',
  components: {
    AppHeader,
    QuestionText,
    QuestionOptions,
    AppVersion
  },
  data: () => ({
    selected: ''
  }),
  computed: {
    ...mapState(['currentQuestion']),
    options () {
      return this.currentQuestion.planets || []
    },
    correctValue () {
      return this.currentQuestion.homeworld
    },
    person () {
      return this.currentQuestion.person
    }
  },
  methods: {
    ...mapActions(['initializeQuiz'])
  },
  mounted () {
    this.initializeQuiz()
  }
}
</script>

<style scoped>
.question-text {
  @apply mb-6;
}

.question-options-container {
  max-width: 600px;
  @apply mx-auto mt-4 px-4;
}

.question-check {
  @apply text-center mt-8;
}
</style>
