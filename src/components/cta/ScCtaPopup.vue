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
    return {}
  },
  mounted: function () {},
  methods: {
    show () {
      if (this.cta.showOnce && window.sessionStorage.getItem('sc:activation:cta' + this.cta.createdTimestamp) === 'true') { return }
      window.sessionStorage.setItem('sc:activation:cta' + this.cta.createdTimestamp, true)
      this.$refs.ctaOverlay.show()
    },
    hide () {
      this.$refs.ctaOverlay.hide()
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
