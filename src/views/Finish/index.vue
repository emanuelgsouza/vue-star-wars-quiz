<template>
  <div class="pb-6">
    <FinishPageHeader />

    <FinishPageAnswers />

    <AppVersion />
  </div>
</template>

<script>
import AppVersion from '../../components/Version'
import FinishPageHeader from './components/Header'
import FinishPageAnswers from './components/Answers'

export default {
  name: 'FinishPage',
  components: { FinishPageAnswers, FinishPageHeader, AppVersion }
}
</script>

<style>
</style>
