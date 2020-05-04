<template>
  <div class="finish-page">
    <hr class="max-w-sm my-6 mx-auto block" />

    <h2 class="text-white text-center text-3xl text-warning"> Answers </h2>

    <div class="finish-page-steps-list">
      <StepCard
        v-for="(step, index) in steps"
        :key="index"
        :step="step"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import StepCard from './components/StepCard'

export default {
  name: 'FinishPage',
  components: { StepCard },
  computed: {
    ...mapState(['steps'])
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
