<template>
  <div class="timer">
    <span class="icon">
      <i class="far fa-clock" />
    </span>
    <span class="text">
      {{ computedTimer }}
    </span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Visibility from 'visibilityjs'
import { formatTimer } from '@/support/utils'

export default {
  name: 'Timer',
  data: () => ({
    $interval: null
  }),
  computed: {
    ...mapState(['timer', 'isRunning']),
    computedTimer () {
      return formatTimer(this.timer)
    }
  },
  watch: {
    isRunning: {
      immediate: true,
      handler (val) {
        if (!val) {
          return this.stopTimer()
        }

        return this.startTimer()
      }
    }
  },
  methods: {
    ...mapMutations({
      setTimer: 'SET_TIMER'
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
  beforeUnmount () {
    this.stopTimer()
  }
}
</script>
