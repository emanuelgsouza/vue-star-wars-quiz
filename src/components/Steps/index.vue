<template functional>
  <div class="steps">
    <p class="text-center">
      <span class="left">{{ props.actualStep }}</span>/<span class="right">{{ props.steps }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Steps',
  functional: true,
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
