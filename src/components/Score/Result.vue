<template>
  <div class="result">
    <p> {{ message }} </p>
  </div>
</template>

<script>
export default {
  name: 'ResultScore',
  props: {
    hits: {
      type: Number,
      default: 0
    }
  },
  computed: {
    message () {
      if (this.hits === 0) {
        return `You don't know nothing 😋`
      }

      if (this.hits <= 5) {
        return 'Not this time 😩'
      }

      if (this.hits <= 7) {
        return 'Almost there 😀'
      }

      return 'Glorious 😍'
    }
  }
}
</script>

<style>
.result {
  @apply my-4 text-black bg-white text-2xl px-4 py-2 rounded-sm;
}
</style>
