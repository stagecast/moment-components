/**
 * Preview entry point. This file doesn't get ported on the final library
 */
import Vue from 'vue'

import Preview from './Preview.vue'
import StagecastComponents from './lib'
import en from './locale/lang/en'
StagecastComponents.locale(en)

Vue.use(StagecastComponents)
Vue.config.productionTip = false

new Vue({
  render: h => h(Preview)
}).$mount('#app')
