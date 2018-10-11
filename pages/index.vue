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
    components: {ToleranceCalculator},
    head () {
      return {
        title: this.$t('pages.index.head.title'),
        meta: [
          { hid: 'description', name: 'description', content: this.$t('pages.index.head.meta.description') }
        ],
        link: [
          { rel: 'canonical', href: process.env.baseUrl }
        ]
      }
    }
  }
</script>
