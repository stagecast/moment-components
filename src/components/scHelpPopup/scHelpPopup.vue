<template>
  <span class="help-box">
    <button class="help-button" @click="show" :class="{hidden: !showButton}">?</button>
    <SCPopupOverlay class="help-overlay" ref="popupOverlay" :canDismiss="onboarded" v-on:hide="toggleButton($event)">
      <!-- header -->
      <div class="header-info" :class="{ 'with-image': getHeaderImage }">
        <img v-if="getHeaderImage" :src="getHeaderImage" alt="">
        <span v-else>{{ options.title }}</span>
      </div>
      <!-- navigation tabs -->
      <div class="tab-pills">
        <div v-if="prize" class="tab-title" :class="{selected: isActiveTab(0)}" @click="showTab(0)">
          <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0.307617" y1="10.6874" x2="20.579" y2="10.6874" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EEC868"/>
                <stop offset="1" stop-color="#E49358"/>
              </linearGradient>
            </defs>
          </svg>
          {{ t('scComponents.help.tabs.prize') }}
        </div>
        <div v-if="howto" class="tab-title" :class="{selected: isActiveTab(1)}" @click="showTab(1)">{{ t('scComponents.help.tabs.howto') }}</div>
        <div v-if="share" class="tab-title" :class="{selected: isActiveTab(2)}" @click="showTab(2)">{{ t('scComponents.help.tabs.share') }}</div>
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
        <!-- tab: share -->
        <div class="tab-content" v-if="share" v-show="isActiveTab(2)">
          <p>{{ t('scComponents.help.share.title') }}</p>
        </div>
      </div>
      <!-- bottom overlayer -->
      <div class="start-bottom-overlay" v-if="!onboarded">
        <button class="main-button" @click="completeOnboarding">{{ t('scComponents.help.start') }}</button>
      </div>
    </SCPopupOverlay>
  </span>
</template>

<script>
import SCPopupOverlay from '../scPopupOverlay/scPopupOverlay'

export default {
  name: 'ScHelpPopup',
  components: { SCPopupOverlay },
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
      activeTab: 0,
      onboarded: false,
      sessionKey: 'sc:help-onboarded'
    }
  },
  computed: {
    getHeaderImage () {
      if (this.options) {
        let r = this.options.headerImg
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

    let tabs = ['prize', 'howto', 'share']
    for (let index in tabs) {
      if (this[tabs[index]]) {
        this.showTab(parseInt(index))
        break
      } 
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

  @import '../../styles/variables';
  
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

    .prize-headline, .headline {
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
