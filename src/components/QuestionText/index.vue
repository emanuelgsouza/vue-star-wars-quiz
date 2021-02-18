<template>
  <h2 class="text-center text-2xl">
    What planet was <span class="text-secondary underline">{{ person }}</span> born on?
  </h2>
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
