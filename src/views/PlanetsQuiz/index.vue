<template>
  <div class="page-container">
    <AppHeader />

    <div class="question-text">
      <QuestionText person="Luke Skywalker" />
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

export default {
  name: 'PlanetsQuiz',
  components: {
    AppHeader,
    QuestionText,
    QuestionOptions,
    AppVersion
  },
  data: () => ({
    options: [
      {
        label: 'Tatooine',
        value: 'Tatooine'
      },
      {
        label: 'Rio de Janeiro',
        value: 'Rio de Janeiro'
      },
      {
        label: 'Jacoo',
        value: 'Jacoo'
      },
      {
        label: 'São Paulo',
        value: 'São Paulo'
      }
    ],
    selected: ''
  })
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
