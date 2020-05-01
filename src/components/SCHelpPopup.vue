<template>
  <span class="help-box">
    <button class="help-button" @click="show" :class="{hidden: !showButton}">?</button>
    <SCPopupOverlay class="help-overlay" ref="popupOverlay" :canDismiss="onboarded" v-on:hide="toggleButton($event)">
      <!-- header -->
      <div class="header-info" :class="{ 'with-image': getHeaderImage }">
        <img v-if="getHeaderImage" :src="getHeaderImage" alt="">
        <span v-else>{{ title }}</span>
      </div>
      <!-- navigation tabs -->
      <div class="tab-pills">
        <div v-if="prize" class="tab-title" :class="{selected: isActiveTab(0)}" @click="showTab(0)">
          <img src="../assets/prize.icon.svg" alt="">
          Prizes
        </div>
        <div v-if="howto" class="tab-title" :class="{selected: isActiveTab(1)}" @click="showTab(1)">How to</div>
      </div>
      <!-- body -->
      <div :class="{ 'bottom-padder': !onboarded }">
        <!-- tab: prize -->
        <div class="tab-content" v-if="prize" v-show="isActiveTab(0)">
          <div class="prize-image" v-if="prize.picture">
            <img :src="prize.picture" alt="">
          </div>
          <div class="prize-headline" v-if="prize.title">
            {{ prize.title }}
          </div>
          <div class="prize-text" v-if="prize.description">
            {{ prize.description }}
          </div>
        </div>
        <!-- tab: howto -->
        <div class="tab-content" v-if="howto" v-show="isActiveTab(1)">
          <ul>
            <li v-for="(item, index) in howto" :key="index">{{ item }}</li>
          </ul>
        </div>
      </div>
      <!-- bottom overlayer -->
      <div class="start-bottom-overlay" v-if="!onboarded">
        <button class="main-button" @click="completeOnboarding">Let's Start</button>
      </div>
    </SCPopupOverlay>
  </span>
</template>

<script>
import SCPopupOverlay from './SCPopupOverlay'

export default {
  name: 'SCHelpPopup',
  components: { SCPopupOverlay },
  props: {
    momentClass: {
      data: Object,
      required: true,
      default () { return {} }
    },
    howto: {
      data: Array,
      required: false,
    },
    prize: {
      data: Object,
      required: false,
    },
    // TODO: define how title and header image are passed to the modal
    title: {
      type: String,
      required: true,
      default: ''
    }
  },
  data: function () {
    return {
      showButton: true,
      activeTab: 0,
      onboarded: false,
      sessionKey: 'sc:help-onboarded'
    }
  },
  computed: {
    getHeaderImage () {
      // TODO: define how title and header image are passed to the modal
      if (this.momentClass && this.momentClass.custom) {
        let r = this.momentClass.custom.popupHeaderImage
        return r ? r : false
      } 
      return false
    }
  },
  mounted: function () {
    window.setTimeout(function () {
      if (!this.isOnboarded()) {
        this.show()
      }
    }.bind(this), 300)

    if (this.prize) {
      this.activeTab = 0
    }
    if (!this.prize && this.howto) {
      this.activeTab = 1
    }
  },
  methods: {
    /* Check if the popup has already been opened once */
    isOnboarded () {
      return window.sessionStorage.getItem(this.sessionKey) === 'true'
    },
    /* Save the state and close the popup */
    completeOnboarding () {
      window.sessionStorage.setItem(this.sessionKey, true)
      this.hide()
    },
    /* Open the popup overlay */
    show () {
      this.showButton = false
      this.onboarded = this.isOnboarded()
      this.$refs.popupOverlay.show()
    },
    /* Close the popup overlay */
    hide () {
      this.$refs.popupOverlay.hide()
    },
    /* Switch tab */
    showTab (number) {
      this.activeTab = number
    },
    toggleButton () {
      this.showButton = true
    },
    isActiveTab (index) {
      return this.activeTab === index
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../styles/variables';
  
  .hidden {
    opacity: 0;
  }

  .tab-pills {
    width: calc(100% + 50px);
    display: flex;
    margin: 0 -25px 28px -25px;

    .tab-title {
      text-align: center;
      opacity: 0.5;
      flex-grow: 1;
      height: 50px;
      line-height: 50px;
      vertical-align: center;
      border-bottom: 2px solid var(--bg-color-4);
      font-weight: $font-weight-bold;

      img, svg {
        vertical-align: text-bottom;
        margin-right: 8px;
      }

      &.selected {
        opacity: 1;
        border-bottom: 2px solid var(--bg-color-2-inverted);
      }
    }
  }

  .tab-content {
    text-align: left;
    padding-bottom: 40px;

    ul {
      list-style-image: var(--list-style-image);
      margin: 16px 0;

      li {
        line-height: 20px;
        margin-bottom: 28px;
      }
    }
  }

  .help-box {
    display: inline-block;

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

    .bottom-padder {
      padding-bottom: 71px;
    }

    .prize-image {
      margin: 20px 0;
    }

    .prize-image img {
      display: block;
      width: 100%;
      height: auto;
    }

    .prize-headline {
      font-weight: $font-weight-bold;
      font-size: 20px;
      line-height: 25px;
      margin: 20px 0;
    }

    .header-info {
      text-align: center;
      padding: 20px 55px;
      background: var(--bg-color-2);
      font-weight: $font-weight-bold;
      font-size: 22px;
      line-height: 28px;
      color: var(--text-color-1);
      margin: -55px -25px 5px -25px;

      &.with-image {
        padding: 0;
        line-height: 0;

        img {
          width: 100%;
        }
      }
    }

    .start-bottom-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: var(--bg-color-1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
      padding: 30px 25px 21px 25px;
    }

  }
</style>
