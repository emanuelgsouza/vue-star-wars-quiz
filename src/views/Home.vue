<template>
  <div class="page-container min-h-screen flex justify-center items-center">
    <div class="px-4">
      <div class="max-w-sm mx-auto">
        <Logo />
      </div>
      <h1 class="text-3xl md:text-6xl text-secondary"> Planets Quiz </h1>

      <p class="max-w-lg mx-auto text-lg py-6">
        Do you know what the planet each character in the Start Wars universe belongs?
      </p>

      <router-link
        v-if="showButton"
        to="/quiz"
        class="button"
      >
        Start the Quiz!
      </router-link>

      <Alerts
        v-if="hasErrors"
        type="error"
        message="An error ocurred when get Star Wars data"
      />

      <Loading
        v-if="loadingData"
        message="Loading Star Wars data..."
      />

      <AppVersion />
    </div>
  </div>
</template>

<script>
import AppVersion from '../components/Version'
import Logo from '../components/Logo'
import Alerts from '../components/Alert'
import Loading from '../components/Loading'
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  components: { Logo, AppVersion, Alerts, Loading },
  computed: {
    ...mapGetters(['loadingData', 'hasErrors']),
    showButton () {
      return !this.loadingData && !this.hasErrors
    }
  }
}
</script>

<style scoped>
.page-container {
  @apply
    mx-auto
    text-center;
}
</style>
