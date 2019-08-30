<template>
  <div class="alert" :class="alertClass">
    <span class="block mx-auto text-4xl">
      <i :class="iconName" />
    </span>

    <p class="mt-4"> {{ message }} </p>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    type: {
      type: String,
      default: 'warning'
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    alertClass () {
      return this.isWarning ? 'bg-warning text-white' : 'bg-negative text-white'
    },
    isWarning () {
      return this.type === 'warning'
    },
    iconName () {
      return this.isWarning ? 'fas fa-exclamation-circle' : 'fas fa-times'
    }
  }
}
</script>

<style>
.alert {
  @apply py-4 rounded-sm;
}
</style>
