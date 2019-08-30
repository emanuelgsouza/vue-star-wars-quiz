<template>
  <div class="loading">
    <span class="block mx-auto text-4xl">
      <i class="fas fa-spinner fa-spin" />
    </span>

    <p class="mt-4"> {{ message }} </p>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.loading {
  @apply bg-white text-primary py-4 rounded-sm;
}
</style>
