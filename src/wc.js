import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import * as scComponents from './components'

const HelpPopupElement = wrap(Vue, scComponents.scHelpPopup);
const PrizePopupElement = wrap(Vue, scComponents.scPrizePopup);

window.customElements.define('sc-help-popup', HelpPopupElement);
window.customElements.define('sc-prize-popup', PrizePopupElement);

// https://vuejsdevelopers.com/2018/05/21/vue-js-web-component/