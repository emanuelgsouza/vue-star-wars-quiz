<template>
  <p class="text-center text-2xl">What planet was {{ person }} born on?</p>
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
