<script>
import AppVersion from './components/Version'

export default {
  name: 'App',
  components: { AppVersion }
}
</script>

<template>
  <div id="app" class="min-h-screen flex justify-center items-center">
    <div class="w-full h-full">
      <router-view/>
      <AppVersion />
    </div>
  </div>
</template>
