import Vue from 'vue'
import App from './App.vue'
import StagecastComponents from './lib'
import ar from './locale/lang/ar'
import da from './locale/lang/da'
import de from './locale/lang/de'
import en from './locale/lang/en'
import es from './locale/lang/es'
import it from './locale/lang/it'
import ru from './locale/lang/ru'
import sv from './locale/lang/sv'
import tr from './locale/lang/tr'
import vi from './locale/lang/vi'

Vue.config.productionTip = false

StagecastComponents.locale(ar)
StagecastComponents.locale(da)
StagecastComponents.locale(de)
StagecastComponents.locale(en)
StagecastComponents.locale(es)
StagecastComponents.locale(it)
StagecastComponents.locale(ru)
StagecastComponents.locale(sv)
StagecastComponents.locale(tr)
StagecastComponents.locale(vi)

Vue.use(StagecastComponents)

new Vue({
  render: h => h(App)
}).$mount('#app')
