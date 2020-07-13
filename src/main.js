import Vue from 'vue'
import App from './App.vue'
import StagecastComponents from './lib'
import itLang from './locale/lang/it'
import enLang from './locale/lang/en'
import svLang from './locale/lang/sv'
import deLang from './locale/lang/de'

Vue.config.productionTip = false

StagecastComponents.locale(itLang)
StagecastComponents.locale(enLang)
StagecastComponents.locale(svLang)
StagecastComponents.locale(deLang)

Vue.use(StagecastComponents)

new Vue({
  render: h => h(App)
}).$mount('#app')
