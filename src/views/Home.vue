<template>
  <div class="page-container">
    <div class="px-4">
      <div class="max-w-sm mx-auto">
        <Logo />
      </div>
      <h1 class="text-3xl md:text-6xl text-secondary"> Planets Quiz </h1>

      <p class="max-w-lg mx-auto text-lg py-6">
        Do you know what the planet each character in the Start Wars universe belongs?
      </p>

      <router-link to="/quiz" class="button">
        Start the Quiz!
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from '../components/Logo'

export default {
  name: 'HomePage',
  components: { Logo }
}
</script>

<style scoped>
.page-container {
  @apply
    mx-auto
    text-center;
}
</style>
