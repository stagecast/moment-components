<template>
  <span class="help-button-container">
    <button class="help-button" @click="show" :class="{ hidden: !showButton }">?</button>
    <SCPopupOverlay ref="popupOverlay" :canDismiss="onboarded" v-on:hide="toggleButton($event)">
      <ScOnboarding
        :prize="prize" 
        :howto="howto" 
        :options="options" 
        :share="share" 
        :onboarded="onboarded"
        @termsAccepted="completeOnboarding()">
      </ScOnboarding>
    </SCPopupOverlay>
  </span>
</template>

<script>
import SCPopupOverlay from '../scPopupOverlay/scPopupOverlay'
import ScOnboarding from './ScOnboarding'
import '../../styles/main.scss'

export default {
  name: 'ScOnboardingPopup',
  components: { SCPopupOverlay, ScOnboarding },
  props: {
    options: {
      data: Object,
      required: false,
      default () { 
        return {
          title: 'Moment Help',
          headerImg: null,
          tabs: {}
        } 
      }
    },
    howto: Array,
    share: String,
    prize: Object    
  },
  data: function () {
    return {
      showButton: true,
      onboarded: false,
      sessionKey: 'sc:help-onboarded',
    }
  },
  computed: {},
  mounted: function () {
    window.setTimeout(function () {
      if (!this.isOnboarded()) {
        this.show()
      }
    }.bind(this), 300)
  },
  methods: {
    /* Check if the popup has already been opened once */
    isOnboarded () {
      return window.sessionStorage.getItem(this.sessionKey) === 'true'
    },
    completeOnboarding () {
      window.sessionStorage.setItem(this.sessionKey, true)
      this.hide()
    },
    /* Open the popup overlay */
    async show () {
      this.showButton = false
      this.onboarded = this.isOnboarded()
      this.$refs.popupOverlay.show()
    },
    hide () {
      this.$refs.popupOverlay.hide()
    },
    toggleButton () {
      this.showButton = true
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../../styles/variables';
  
  .hidden {
    opacity: 0;
  }

  .help-button-container {
    display: inline-block;
  }

  .help-button {
    border: none;
    background: var(--bg-color-2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 5px 13px;
    font-family: $base-font-stack;
    font-size: 23px;
    font-weight: 700;
    line-height: 26px;
    color: var(--text-color-2);
    outline: none;
    // height: 36px;
    width: 36px;
    &:active {
      color: #fff !important;
      transform: scale(0.9);
      transition: all .3s ease-out;
    }
    svg, span {
      vertical-align: middle;
    }
    span {
      display: inline-block;
      margin-left: 30px;
      margin-right: 50px;
    }
  }

</style>
