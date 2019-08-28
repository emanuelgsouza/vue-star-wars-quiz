<template>
  <p class="text-center text-2xl">What planet was <span class="text-secondary underline">{{ person }}</span> born on?</p>
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
