<template>
  <div class="page-container">
    <AppHeader />

    <div class="question-text">
      <QuestionText v-bind="{ person }" />
    </div>

    <div class="question-options-container">
      <QuestionOptions
        :options="options"
        :value="selected"
        @input="onInput"
      />
    </div>

    <div class="question-check">
      <button
        class="button"
        :disabled="!hasSelected"
        @click="moveToNext"
      >
        Check!
      </button>
    </div>

    <AppVersion />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { isEmpty, size } from 'lodash'
import AppVersion from '../../components/Version'
import QuestionText from '../../components/QuestionText'
import QuestionOptions from '../../components/QuestionOptions'
import AppHeader from './header'

export default {
  name: 'PlanetsQuiz',
  components: {
    AppHeader,
    QuestionText,
    QuestionOptions,
    AppVersion
  },
  computed: {
    ...mapState(['currentQuestion', 'steps', 'maxStep']),
    options () {
      return this.currentQuestion.planets || []
    },
    correctValue () {
      return this.currentQuestion.homeworld
    },
    person () {
      return this.currentQuestion.person
    },
    selected () {
      return this.currentQuestion.selected
    },
    hasSelected () {
      return !isEmpty(this.selected)
    },
    isLastQuestion () {
      return size(this.steps) === this.maxStep
    }
  },
  methods: {
    ...mapMutations({
      'setCurrentQuestion': 'SET_CURRENT_QUESTION'
    }),
    ...mapActions(['initializeQuiz', 'createQuestion', 'moveToNextQuestion']),
    onInput (selected) {
      this.setCurrentQuestion({
        ...this.currentQuestion,
        selected
      })
    },
    moveToNext () {
      if (this.isLastQuestion) {
        // show score
        return
      }

      this.moveToNextQuestion()
    }
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
