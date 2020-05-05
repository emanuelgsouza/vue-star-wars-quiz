<template>
  <section class="p-6">
    <h2 class="text-white text-center text-4xl text-warning"> Answers </h2>

    <div class="finish-page-steps-list">
      <StepCard
        v-for="(step, index) in steps"
        :key="index"
        :step="step"
      />
    </div>

    <div class="text-center mt-6">
      <p class="text-2xl mb-6">Did you like this quiz?</p>

      <button class="button" @click="onClick">
        Start the Quiz Again?!
      </button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import StepCard from './StepCard'

export default {
  name: 'FinishPageAnswers',
  components: { StepCard },
  computed: {
    ...mapState(['steps'])
  },
  methods: {
    onClick () {
      this.$router.push({ name: 'PlanetsQuizRoute' })
    }
  }
}
</script>

<style>
.finish-page-steps-list {
  @apply grid grid-cols-4 gap-4 p-6;
}

@media screen and (max-width: 769px) {
  .finish-page-steps-list {
    @apply grid grid-cols-1;
  }
}
</style>
