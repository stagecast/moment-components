<template>
  <span class="cta-popup-container">
    <SCPopupOverlay class="cta-overlay" ref="ctaOverlay" :canDismiss="options.canDismiss">
      <ScCta :cta="cta" :popupRef="$refs.ctaOverlay"></ScCta>
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
    show (options = { delay: 0 }) {
      // prevent showing if the cta has already been shown and the CTA is set to be shown once.
      if (this.cta.showOnce && this.alreadyShown()) { 
        return 
      }
      if (this.ctaSessionKey) {
        setSessionStorageItem(this.ctaSessionKey, true)
      }
      
      if (!options.delay) { 
        options.delay = 0 
      }

      window.clearTimeout(this.ctaTimeout)
      this.ctaTimeout = window.setTimeout(() => {
        this.$refs.ctaOverlay.show()
        this.shown = true
      }, options.delay)
    },
    hide () {
      window.clearTimeout(this.ctaTimeout)
      this.$refs.ctaOverlay.hide()
    },
    alreadyShown () {
      const ctaShowStatus = getSessionStorageItem(this.ctaSessionKey) === 'true'
      return (ctaShowStatus || this.shown)
    }
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
      background: var(--bg-color-2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      padding: 5px 7px;
      font-family: $base-font-stack;
      font-size: 23px;
      font-weight: $font-weight-bold;
      line-height: 26px;
      color: var(--text-color-2);
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
