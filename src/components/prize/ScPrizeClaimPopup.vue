<template>
  <span class="cta-box">
    <SCPopupOverlay class="prize-overlay" ref="prizeOverlay" :canDismiss="options.canDismiss">
      <ScPrizeClaim :prize="prize" :profile="profile" :popupRef="$refs.prizeOverlay"></ScPrizeClaim>
    </SCPopupOverlay>
  </span>
</template>

<script>
import SCPopupOverlay from '../scPopupOverlay/scPopupOverlay'
import ScPrizeClaim from './ScPrizeClaim'
import '../../styles/main.scss'

export default {
  name: 'ScPrizeClaimPopup',
  components: { SCPopupOverlay, ScPrizeClaim },
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
    prize: {
      type: Object,
      required: true,
      default () { return {} }
    },
    profile: {
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
      this.$refs.prizeOverlay.show()
    },
    hide () {
      this.$refs.prizeOverlay.hide()
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../styles/variables';
  
  .popup-content {
    min-height: 280px!important;
  }
  .cta-box {
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
