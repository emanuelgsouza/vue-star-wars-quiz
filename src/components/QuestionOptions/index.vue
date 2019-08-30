<template>
  <div class="question-options">
    <Item
      v-for="option in options"
      :key="option.value"
      v-bind="{ option, selected: value }"
      @selected="onSelected"
    />
  </div>
</template>

<script>
import Item from './item'

export default {
  name: 'QuestionOptions',
  components: { Item },
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
  methods: {
    onSelected ({ value }) {
      this.$emit('input', value)
    }
  }
}
</script>
