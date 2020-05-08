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
        {{ buttonText }}
      </button>
    </div>

    <ScoreModal
      ref="modal"
      @start="onStart"
    />

    <AppVersion />
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { isEmpty, size } from 'lodash-es'
import AppVersion from '../../components/Version'
import QuestionText from '../../components/QuestionText'
import QuestionOptions from '../../components/QuestionOptions'
import AppHeader from './header'
import ScoreModal from '../../components/Score/adapters/modal'

export default {
  name: 'PlanetsQuiz',
  components: {
    AppHeader,
    QuestionText,
    QuestionOptions,
    AppVersion,
    ScoreModal
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
      return size(this.steps) + 1 === this.maxStep
    },
    buttonText () {
      return this.isLastQuestion ? 'Finish' : 'Check!'
    }
  },
  methods: {
    ...mapMutations({
      setCurrentQuestion: 'SET_CURRENT_QUESTION'
    }),
    ...mapActions([
      'stopQuiz',
      'initializeQuiz',
      'createQuestion',
      'moveToNextQuestion'
    ]),
    onInput (selected) {
      this.setCurrentQuestion({
        ...this.currentQuestion,
        selected
      })
    },
    moveToNext () {
      if (this.isLastQuestion) {
        return this.stopQuiz()
          .then(() => {
            // this.$refs.modal.open()
            this.$router.push({ name: 'FinishRoute' })
          })
      }

      this.moveToNextQuestion()
    },
    onStart () {
      this.initializeQuiz()
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
