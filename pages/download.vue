<template>
  <v-layout>
    <v-flex text-xs-center>
      <a :href="links.gost" download="GOST-25347-82.pdf" target="_blank">ГОСТ 25347-82.pdf</a>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'PageDownload',
  data () {
    return {
      links: {
        gost: process.env.developerUrl + '/downloads/GOST-25347-82.pdf'
      }
    }
  }
}
</script>

<style>
</style>
