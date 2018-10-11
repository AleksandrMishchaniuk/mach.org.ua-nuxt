<template>
  <v-layout>
    <v-flex>
      <h1>{{ $t('pages.download.h1') }}</h1>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>ГОСТ 25347-82.pdf</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn
              icon
              large
              color="green darken-3"
              :href="links.gost"
              target="_blank"
              download="GOST-25347-82.pdf"
            >
              <v-icon>file_download</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
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
  },
  head () {
    return {
      title: this.$t('pages.download.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('pages.download.head.meta.description') }
      ],
      link: [
        { rel: 'canonical', href: process.env.baseUrl + '/download/' }
      ]
    }
  }
}
</script>

<style>
</style>
