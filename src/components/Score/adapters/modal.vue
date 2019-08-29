<template>
  <Modal ref="modal">
    <Score />
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
    }
  }
}
</script>
