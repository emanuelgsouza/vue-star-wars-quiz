<template>
  <label
    :for="value"
    class="question-options__item"
    :class="{
      'is-selected': isSelected
    }"
  >
    <input
      type="radio"
      name="planets-options"
      :id="value"
      :value="value"
      @input="onInput"
    >

    <span class="icon">
      <i
        v-if="isSelected"
        class="fas fa-check-circle"
      />
      <i
        v-else
        class="far fa-circle"
      />
    </span>

    <span class="text"> {{ label }} </span>
  </label>
</template>

<script>
export default {
  name: 'QuestionOptionsItem',
  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    selected: {
      type: String,
      default: ''
    }
  },
  computed: {
    value () {
      return this.option.value || ''
    },
    label () {
      return this.option.label || ''
    },
    isSelected () {
      return this.value === this.selected
    }
  },
  methods: {
    onInput () {
      this.$emit('selected', this.option)
    }
  }
}
</script>

<style scoped>
.question-options__item {
  @apply flex px-6 py-3 mt-3 rounded-sm /* bg-white */ /* text-primary */ text-lg items-center cursor-pointer border border-white text-white border-2;
}

.question-options__item:first-of-type {
  @apply mt-0;
}

.question-options__item input {
  @apply hidden;
}

.question-options__item .icon {
  @apply mr-2 text-2xl;
}

.question-options__item.is-selected {
  @apply text-secondary border-secondary;
}
</style>
