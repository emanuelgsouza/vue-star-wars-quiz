<template>
  <div class="steps">
    <p class="text-center"><span class="left">{{ actualStep }}</span>/<span class="right">{{ steps }}</span></p>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  props: {
    steps: {
      type: Number,
      default: 0
    },
    actualStep: {
      type: Number,
      default: 0
    }
  }
}
</script>
