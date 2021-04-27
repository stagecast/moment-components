<template>
  <span class="cta-box">
    <button class="cta-button" @click="show" v-show="options.manualTrigger">
      <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="0.307617" y1="10.6874" x2="20.579" y2="10.6874" gradientUnits="userSpaceOnUse">
            <stop stop-color="#EEC868"/>
            <stop offset="1" stop-color="#E49358"/>
          </linearGradient>
        </defs>
      </svg>
    </button>
    <SCPopupOverlay class="cta-overlay" ref="ctaOverlay" :canDismiss="options.canDismiss">
      <ScCta :cta="cta"></ScCta>
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

  .cta-box {
    display: inline-block;

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
