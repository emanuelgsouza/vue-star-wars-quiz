<template>
  <div class="score">
    <span class="score__figure">
      <i class="fas fa-jedi" />
    </span>

    <p class="score__text">
      Your score is
    </p>

    <Steps
      class="text-2xl"
      :steps="maxStep"
      :actual-step="hasSuccessSize"
    />

    <Result :hits="hasSuccessSize" />

    <button
      class="button"
      data-testid="start-button"
      @click="onClick"
    >
      Start the Again?!
    </button>
  </div>
</template>

<script>
import Steps from '../Steps'
import Result from './Result'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'ScorePage',
  components: { Steps, Result },
  computed: {
    ...mapState(['maxStep']),
    ...mapGetters(['hasSuccessSize'])
  },
  methods: {
    onClick () {
      this.$emit('start')
    }
  }
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
