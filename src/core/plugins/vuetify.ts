import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import theme from './theme'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: theme,
      dark: theme
    }
  },
  icons: {
    iconfont: 'mdi'
  },
  options: {
    customProperties: true
  }
})
