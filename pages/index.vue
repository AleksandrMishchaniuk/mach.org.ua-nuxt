<template>
  <v-layout>
    <v-flex>
      <h1>{{ $t('pages.index.h1') }}</h1>
      <tolerance-calculator></tolerance-calculator>
    </v-flex>
  </v-layout>
</template>

<script>
  import ToleranceCalculator from '../components/ToleranceCalculator'

  export default {
    name: 'PageIndex',
    components: {ToleranceCalculator}
  }
</script>
