<template>
  <div class="score">
    <span class="score__figure">
      <i class="fas fa-jedi"></i>
    </span>

    <p class="score__text"> Your score is </p>

    <Steps
      class="text-2xl"
      :steps="10"
      :actualStep="5"
    />

    <Result :hits="5" />

    <router-link to="/quiz" class="button">
      Start the Again?!
    </router-link>
  </div>
</template>

<script>
import Steps from '../Steps'
import Result from './Result'

export default {
  name: 'ScorePage',
  components: { Steps, Result }
}
</script>

<style scoped>
.score__figure {
  @apply text-5xl;
}

.score__text {
  @apply text-3xl text-secondary;
}
</style>
