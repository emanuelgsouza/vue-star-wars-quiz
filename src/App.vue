<script>
import UpdateNotification from './components/UpdateNotification'

export default {
  name: 'App',
  components: { UpdateNotification },
  data: () => ({
    activeNotification: false
  }),
  methods: {
    onCloseNotification () {
      this.activeNotification = false
    }
  },
  mounted () {
    document.addEventListener('sw:update', () => {
      this.activeNotification = true
    })
  }
}
</script>

<template>
  <div id="app">
    <UpdateNotification
      class="notification"
      :class="{ 'is-active': activeNotification }"
      @close="onCloseNotification"
    />

    <router-view />
  </div>
</template>

<style>
.notification {
  position: absolute;
  top: -200px;
  transition: top 1s ease;
  width: 100%;
}

.notification.is-active {
  top: 0;
}
</style>
