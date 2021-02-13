<template>
  <Modal
    ref="modal"
    v-on="$listeners"
  >
    <Score @start="onStart" />
  </Modal>
</template>

<script>
import Score from '../index'
import Modal from '../../Modal'

export default {
  name: 'ScoreModal',
  components: { Score, Modal },
  methods: {
    open () {
      this.$refs.modal.open()
    },
    close () {
      this.$refs.modal.close()
    },
    onStart () {
      this.$emit('start')

      this.$nextTick(() => {
        this.close()
      })
    }
  }
}
</script>
