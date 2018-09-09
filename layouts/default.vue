<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in pages"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="currentPage ? currentPage.title : ''"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container grid-list-lg>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        pages: [
          { icon: 'home', title: this.$t('layout.menu.item.main'), to: '/' },
          { icon: 'file_download', title: this.$t('layout.menu.item.download'), to: '/download' }
        ],
        title: 'Vuetify.js'
      }
    },
    computed: {
      currentPage () {
        let pages = this.pages.filter(page => {
          return page.to === this.$route.path
        })
        return pages[0]
      }
    }
  }
</script>
