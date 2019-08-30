<template>
  <div class="timer">
    <span class="icon">
      <i class="far fa-clock"></i>
    </span>
    <span class="text">
      {{ timer }}
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Visibility from 'visibilityjs'

export default {
  name: 'Timer',
  data: () => ({
    $interval: null
  }),
  computed: {
    ...mapState(['timer'])
  },
  methods: {
    ...mapMutations({
      'setTimer': 'SET_TIMER'
    }),
    startTimer () {
      this.$interval = Visibility.every(1000, () => {
        this.setTimer(this.timer + 1)
      })
    },
    stopTimer () {
      Visibility.stop(this.$interval)
    }
  },
  beforeDestroy () {
    this.stopTimer()
  },
  mounted () {
    this.startTimer()
  }
}
</script>
