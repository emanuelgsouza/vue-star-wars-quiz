<template>
  <div class="page-container">
    <div class="px-4">
      <Logo />
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

.button {
  @apply
    inline-block
    text-lg
    text-secondary
    border
    border-secondary
    font-bold
    py-4
    px-8
    rounded;
  transition: all ease 0.4s 0s;
}

.button:hover {
  @apply
    bg-secondary
    text-primary
    tracking-widest;
}
</style>
