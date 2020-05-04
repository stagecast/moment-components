import * as scComponents from './components'
import locale from './locale';

const install = (Vue, options = {}) => {
  locale.use(options.locale);
  locale.i18n(options.i18n);

  // Use Components
  Object.values(scComponents).forEach((scComponent) => {
    Vue.use(scComponent)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { locale: locale.use, i18n: locale.i18n, install }
export { default as scHelpPopup } from './components/scHelpPopup'
export { default as scPrizePopup } from './components/scPrizePopup'
export { default as scPopupOverlay } from './components/scPopupOverlay'

// for more see: https://www.xiegerts.com/post/creating-vue-component-library-plugin/ 
