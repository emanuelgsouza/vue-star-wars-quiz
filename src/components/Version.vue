<script>
import pkg from '../../package.json'

export default {
  name: 'AppVersion',
  version: pkg.version
}
</script>

<template>
  <div class="version">
    <p>
      Made With
      <span> <i class="fab fa-vuejs" /> </span>
      by <a
        href="https://emanuelgsouza.dev"
        target="blanc"
        title="Visit the Emanuel Gonçalves website"
      > @emanuelgsouza </a>
    </p>
    <p>
      <a href="https://github.com/emanuelgsouza/vue-star-wars-quiz">
        <i class="fab fa-github" /> {{ $options.version }}
      </a>
    </p>
  </div>
</template>

<style>
.version {
  @apply mt-6 text-base text-center text-secondary;
}
</style>
