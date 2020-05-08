<template>
  <div class="step-card">
    <p class="step-card-header">
      <span>
        {{ person }}
      </span>

      <span
        class="step-card-tag"
        :class="hasSuccessLabelTag"
      >
        {{ hasSuccessLabel }}
      </span>
    </p>

    <div class="step-card-content">
      <p class="mb-2"> Homeworld: {{ step.homeworld || '' }} </p>

      <p> Selected: {{ step.selected || '' }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepCard',
  props: {
    step: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    person () {
      return this.step.person || ''
    },
    hasSuccess () {
      return this.step.has_success || false
    },
    hasSuccessLabelTag () {
      return this.hasSuccess ? 'is-success' : 'is-danger'
    },
    hasSuccessLabel () {
      return this.hasSuccess ? 'Hit!' : 'Wrong!'
    }
  }
}
</script>

<style>
.step-card {
  @apply bg-white text-black border;
}

.step-card-header {
  @apply p-4 flex items-center justify-between border-black border-b-2;
}

.step-card-header span {
  @apply block;
}

.step-card-tag {
  @apply text-xs py-1 px-2;
}

.step-card-tag.is-success {
  @apply text-green-600 border border-green-600;
}

.step-card-tag.is-danger {
  @apply text-negative border border-negative;
}

.step-card-content {
  @apply p-4;
}
</style>
