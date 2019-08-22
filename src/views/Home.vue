<template>
  <div class="page-container">
    <div>
      <h1 class="text-6xl"> Star Wars Quiz! </h1>
      <p class="text-lg py-6"> Do you know what the planet each character in the Start Wars universe belongs? </p>

      <router-link to="/quiz" class="button">
        Start the Quiz!
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {}
}
</script>

<style scoped>
.page-container {
  @apply min-h-screen flex justify-center items-center mx-auto text-center;
}

.button {
  @apply inline-block bg-secondary text-lg text-primary font-bold py-4 px-8 rounded;
}
</style>
