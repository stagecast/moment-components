import * as scComponents from './components'
import locale from './locale';
import localeMixin from './mixin/locale'

const install = (Vue, options = {}) => {
  locale.use(options.locale);
  locale.i18n(options.i18n);

  // Use Components
  Object.values(scComponents).forEach((scComponent) => {
    Vue.use(scComponent)
  })

  Vue.mixin({...localeMixin})
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default { locale: locale.use, i18n: locale.i18n, install }
export { default as scPrizePopup } from './components/scPrizePopup'
export { default as scPopupOverlay } from './components/scPopupOverlay'
// new components
export { default as ScOnboardingPopup } from './components/onboarding'
export { default as ScSponsorBanner } from './components/banner'
export { default as ScCtaPopup } from './components/cta'
export { default as ScPrizeClaimPopup } from './components/prize'
export { default as ScFooter } from './components/footer'

// for more see: https://www.xiegerts.com/post/creating-vue-component-library-plugin/ 
