import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import theme from './theme'

Vue.use(Vuetify, { theme: theme })

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  options: {
    customProperties: true
  },
  themes: {
    light: theme
  }
})
