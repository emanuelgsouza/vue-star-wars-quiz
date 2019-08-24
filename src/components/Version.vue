<script>
import pkg from '../../package.json'

export default {
  name: 'AppVersion',
  data: () => ({
    version: pkg.version
  })
}
</script>

<template>
  <p class="text-sm text-center mt-6 text-secondary">
    Made With
      <span class="icon"> <i class="fab fa-vuejs"></i> </span>
      by <a href="https://emanuelgsouza.dev" target="blanc" title="Visit the Emanuel Gonçalves website"> @emanuelgsouza </a>
  </p>
</template>
