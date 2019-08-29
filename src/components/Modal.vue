<template>
  <div
    class="modal"
    :class="{ 'is-active': active }"
  >
    <div class="modal__content">
      <button class="modal__close" @click="close">
        <i class="fas fa-times"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data: () => ({
    active: false
  }),
  methods: {
    open () {
      this.active = true
      this.$emit('open')
    },
    close () {
      this.active = false
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/* inspired in https://www.w3schools.com/howto/howto_css_modals.asp */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
}

.modal.is-active {
  display: block;
}

.modal__content {
  position: relative;
  width: 100%;
  max-width: 400px;
  animation-name: animationModal;
  animation-duration: 0.5s;
  @apply p-8 border mx-auto mt-40 border-secondary rounded-sm;
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  @apply flex text-xl;
}

@keyframes animationModal {
  from {
    transform: translateY(-600px);
  }

  to {
    transform: translateY(0px);
  }
}
</style>
