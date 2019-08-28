<template>
  <div class="page-container">
    <div class="header">
      <div class="header__logo">
        <Logo />
      </div>

      <div class="header__steps">
        <Steps />
      </div>

      <div class="header__timer">
        <Timer />
      </div>
    </div>

    <div class="question-text">
      <QuestionText person="Luke Skywalker" />
    </div>
  </div>
</template>

<script>
import Timer from '../components/Timer'
import Steps from '../components/Steps'
import Logo from '../components/Logo'
import QuestionText from '../components/QuestionText'

export default {
  name: 'PlanetsQuiz',
  components: {
    Logo,
    Timer,
    Steps,
    QuestionText
  }
}
</script>

<style scoped>
.header {
  @apply flex justify-between px-4;
}

.header__logo {
  max-width: 100px;
}

.header__steps, .header__timer {
  @apply flex items-center text-secondary text-xl;
}
</style>
