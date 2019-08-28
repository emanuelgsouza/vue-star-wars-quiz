<script>
import AppVersion from './components/Version'

export default {
  name: 'App',
  components: { AppVersion }
}
</script>

<template>
  <div id="app" class="min-h-screen">
    <router-view/>
    <AppVersion />
  </div>
</template>
