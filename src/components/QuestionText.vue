<template>
  <p class="text-center">What planet was {{ person }} born on?</p>
</template>

<script>
export default {
  name: 'QuestionText',
  props: {
    person: {
      type: String,
      default: ''
    }
  }
}
</script>
