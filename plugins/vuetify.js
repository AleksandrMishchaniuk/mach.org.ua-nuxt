import Vue from 'vue'
import Vuetify from 'vuetify'

import messages from '../locales'

Vue.use(Vuetify, {
  lang: {
    locales: messages,
    current: 'ru'
  }
})
