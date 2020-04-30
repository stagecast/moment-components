// import * as components from './components'
import SCHelpPopup from './components/SCHelpPopup.vue';
import SCPrizePopup from './components/SCPrizePopup.vue';
import './styles/main.scss'

// we will provide the components as Vue.js plugin
const ComponentLibrary = {
  install(Vue, options = {}) { //eslint-disable-line
    // loop through all the exposed components
    // for (const name in components.default) {
    //   const cmp = components.default[name]
    //   // register the component to the provided Vue instance 
    //   Vue.component(cmp.name, cmp.default)
    // }

    Vue.component(SCHelpPopup.name, SCHelpPopup)
    Vue.component(SCPrizePopup.name, SCPrizePopup)
  }
}

// auto-register in case the project is not using a builidng system (eg. vue loaded from CDN)
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}

// allows to import the components in other projects
export default { ComponentLibrary, SCHelpPopup, SCPrizePopup }

// for more see: https://www.xiegerts.com/post/creating-vue-component-library-plugin/ 