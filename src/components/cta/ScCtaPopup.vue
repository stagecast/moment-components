<template>
  <span class="cta-popup-container">
    <SCPopupOverlay class="cta-overlay" ref="ctaOverlay" :canDismiss="options.canDismiss">
      <ScCta :cta="cta" :popupRef="$refs"></ScCta>
    </SCPopupOverlay>
  </span>
</template>

<script>
import SCPopupOverlay from '../scPopupOverlay/scPopupOverlay'
import '../../styles/main.scss'
import { getSessionStorageItem, setSessionStorageItem } from '../../utils'

export default {
  name: 'ScCtaPopup',
  components: { SCPopupOverlay },
  props: {
    options: {
      type: Object,
      required: false,
      default () { 
        return {
          canDismiss: true,
          manualTrigger: true
        } 
      }
    },
    cta: {
      type: Object,
      required: true,
      default () { return {} }
    }
  },
  data: function () {
    return {
      ctaTimeout: undefined,
      ctaData: undefined,
      // flag to prevent the CTA.onlyOnce from appearing everytime (it is used only when the 
      // createdTimestamp is not set).
      shown: false
    }
  },
  computed: {
    /**
     * `createdTimestamp` is the activation activeChangeTime.
     * Some activations might have the same activeChangeTime but his is extremely unlikely and
     * the collision is mitigated by the fact the key is stored in the sessionStorage.
     */
    ctaSessionKey: function () {
      return this.cta.createdTimestamp ? `sc:activation:cta:${this.cta.createdTimestamp}` : null
    }
  },
  mounted: function () {},
  methods: {

    /**
     * Show popup after a few checks
     */
    show (options = { delay: 0 }) {
      
      if (this.canOpenPopup()) {
        
        if (this.ctaSessionKey) {
          // if a session key is provided, set it in the session storage
          setSessionStorageItem(this.ctaSessionKey, true)
        }
  
        this.checkSubmittedData()
          .then(data => { this.ctaData = data })
          .catch(() => { //eslint-disable-line
            this.delayedOpen(options.delay || 0)
          }) 
      }
      
    },
    hide () {
      window.clearTimeout(this.ctaTimeout)
      this.$refs.ctaOverlay.hide()
    },
    alreadyShown () {
      const ctaShowStatus = getSessionStorageItem(this.ctaSessionKey) === 'true'
      return (ctaShowStatus || this.shown)
    },
    /**
     * Prevent showing if the user has already submitted their data
     * or the CTA has already been shown and the CTA is set to be shown once.
     */
    canOpenPopup () {
      if (this.cta.type !== 'website' && this.ctaData) { return false }
      if (this.cta.showOnce && this.alreadyShown()) { return false }
      return true
    },
    delayedOpen (delay) {
      window.clearTimeout(this.ctaTimeout)
      this.ctaTimeout = window.setTimeout(() => {
        this.$refs.ctaOverlay.show()
        this.shown = true
      }, delay)
    },
    /**
     * If the Promise is rejected, no data is defined and the 
     * popup can be opened.
     */
    checkSubmittedData () {
      if (!this.$SDK || this.cta.type === 'website') {
        return Promise.reject(null)
      }
      
      return this.$SDK.activation.cta.getData()
    },
  }
}
</script>

<style scoped lang="scss">
  @import '../../styles/variables';
  
  .popup-content {
    min-height: 280px!important;
  }
  .cta-popup-container {
    display: inline-block;
    margin: -51px -25px -25px -25px;

    .cta-button {
      border: none;
      background: var(--sac-bg-color-2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      padding: 5px 7px;
      font-family: $base-font-stack;
      font-size: 23px;
      font-weight: $font-weight-bold;
      line-height: 26px;
      color: var(--sac-text-color-2);
      outline: none;
      height: 36px;
      width: 36px;

      &:active {
        color: #fff !important;
        transform: scale(0.9);
        transition: all .3s ease-out;
      }

      svg, span, img {
        vertical-align: middle;
        height: 21px;
        width: 21px;
      }

      span {
        display: inline-block;
        margin-left: 30px;
        margin-right: 50px;
      }
    }
  }

</style>
