<template>
  <v-layout>
    <v-flex>
      <h1>{{ $t('pages.download.h1') }}</h1>
      <v-card>
        <v-card-title>
          <h2 class="text-lg-center text-md-center">{{ $t('pages.download.title') }}</h2>
        </v-card-title>
        <v-card-actions>

          <v-btn
            v-for="(download, index) in downloads"
            color="green darken-3"
            :href="download.href"
            target="_blank"
            download
          >
            {{ download.format }}
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'PageDownload',
  data () {
    return {
      downloads: [
        {
          title: 'ГОСТ 25347-82.pdf',
          href: process.env.developerUrl + '/downloads/GOST-25347-82.pdf',
          format: 'PDF'
        }, {
          title: 'Предельные отклонения по ГОСТ 25347-82 в формате json',
          href: process.env.developerUrl + '/downloads/GOST-25347-82.json',
          format: 'JSON'
        }, {
          title: 'Предельные отклонения по ГОСТ 25347-82 в формате xml',
          href: process.env.developerUrl + '/downloads/GOST-25347-82.xml',
          format: 'XML'
        }
      ]
    }
  },
  head () {
    return {
      title: this.$t('pages.download.head.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('pages.download.head.meta.description') }
      ],
      link: [
        { rel: 'canonical', href: process.env.baseUrl + '/download' }
      ]
    }
  }
}
</script>

<style>
</style>
