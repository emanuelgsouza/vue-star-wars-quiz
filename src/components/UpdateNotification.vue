<template>
  <div class="bg-secondary text-center p-6 h-30">
    <p class="text-primary mb-2">A new updated version is now available!</p>

    <button
      class="button is-primary is-small"
      @click="onClick"> Refresh page
    </button>

    <button
      class="button is-primary is-small ml-2"
      @click="onClose"> Close
    </button>
  </div>
</template>

<script>
export default {
  name: 'UpdateNotification',
  methods: {
    onClick () {
      document.location.reload(true)
    },
    onClose () {
      this.$emit('close')
    }
  }
}
</script>
