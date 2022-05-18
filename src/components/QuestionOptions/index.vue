<template>
  <div class="question-options">
    <QuestionOptionsItem
      v-for="option in options"
      :key="option.value"
      v-bind="{ option, selected: value }"
      @selected="onSelected"
    />
  </div>
</template>

<script>
import QuestionOptionsItem from './QuestionOptionsItem'

export default {
  name: 'QuestionOptions',
  components: { QuestionOptionsItem },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    }
  },
  emits: ['input'],
  methods: {
    onSelected ({ value }) {
      this.$emit('input', value)
    }
  }
}
</script>
