<template>
  <header class="finish-page-header">
    <h1> Your score is </h1>

    <div class="score-stars">
      <i
        v-for="(star, index) in stars"
        :class="star"
        :key="index"
      />
    </div>

    <Steps
      class="text-5xl text-black"
      :steps="maxStep"
      :actualStep="hasSuccessSize"
    />

    <Result :hits="hasSuccessSize" />
  </header>
</template>

<script>
import Steps from '../../../components/Steps'
import Result from '../../../components/Score/Result'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: { Steps, Result },
  computed: {
    ...mapState(['maxStep']),
    ...mapGetters(['hasSuccessSize']),
    stars () {
      if (this.hasSuccessSize === 0) {
        return [
          'far fa-star',
          'far fa-star',
          'far fa-star'
        ]
      }

      if (this.hasSuccessSize <= 5) {
        return [
          'fas fa-star',
          'far fa-star',
          'far fa-star'
        ]
      }

      if (this.hasSuccessSize <= 7) {
        return [
          'fas fa-star',
          'fas fa-star',
          'far fa-star'
        ]
      }

      return [
        'fas fa-star',
        'fas fa-star',
        'fas fa-star'
      ]
    }
  }
}
</script>

<style>
.finish-page-header {
  @apply py-32 bg-white text-center flex flex-col justify-center items-center;
}

.finish-page-header h1 {
  @apply text-6xl text-negative mb-6;
}

.score-stars {
  @apply text-5xl text-black;
}

.score-stars .far:nth-child(2),
.score-stars .fas:nth-child(2) {
  @apply text-6xl;
}

.score-stars .far:nth-child(1),
.score-stars .far:nth-child(3),
.score-stars .fas:nth-child(1),
.score-stars .fas:nth-child(3) {
  transform: rotate(30deg)
}

@media screen and (max-width: 769px) {
  .finish-page-header h1 {
    @apply text-4xl;
  }
}
</style>
