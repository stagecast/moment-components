<template>
  <span class="help-box">
    <button class="help-button" @click="show" :class="{hidden: !showButton}">?</button>
    <SCPopupOverlay ref="popupOverlay" :canDismiss="onboarded" v-on:hide="toggleButton($event)">
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
          <div class="input-group" @click="copyToClipboard($event)">
            <div class="input-group-prepend" :class="buttonClasses">
              <span>
                <svg v-if="!copiedToClipboard" width="24" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.142 19.9639C12.6358 19.9639 11.1586 19.3846 10 18.255L7.71183 15.9668C7.2484 15.5034 7.2484 14.7792 7.71183 14.3158C8.17527 13.8524 8.89939 13.8524 9.36282 14.3158L11.651 16.604C13.0413 17.9943 15.2716 17.9943 16.633 16.604C18.0233 15.2137 18.0233 12.9834 16.633 11.6221L14.3447 9.33388C13.8813 8.87044 13.8813 8.14632 14.3447 7.68289C14.8082 7.21945 15.5323 7.21945 15.9957 7.68289L18.2839 9.9711C20.5722 12.2593 20.5722 15.9668 18.2839 18.226C17.1254 19.3846 15.6482 19.9639 14.142 19.9639Z" fill="var(--btn-text-color-1)"/>
                  <path d="M4.81538 12.5779C4.52573 12.5779 4.23609 12.4621 4.00437 12.2303L1.71616 9.9711C-0.572053 7.68288 -0.572053 3.9754 1.71616 1.71616C4.00437 -0.572053 7.71185 -0.572053 9.9711 1.71616L12.2593 4.00437C12.7227 4.4678 12.7227 5.19192 12.2593 5.65536C11.7959 6.11879 11.0718 6.11879 10.6083 5.65536L8.32011 3.36715C7.65392 2.70096 6.75601 2.32442 5.82914 2.32442C4.87331 2.32442 4.00437 2.70096 3.33818 3.36715C1.94788 4.75745 1.94788 6.98773 3.33818 8.34907L5.62639 10.6373C6.08983 11.1007 6.08983 11.8248 5.62639 12.2883C5.42364 12.4621 5.10503 12.5779 4.81538 12.5779Z" fill="var(--btn-text-color-1)"/>
                  <path d="M11.8535 12.9834C11.5639 12.9834 11.2742 12.8676 11.0425 12.6358L7.30607 8.92837C6.84264 8.46493 6.84264 7.74081 7.30607 7.27738C7.76951 6.81394 8.49362 6.81394 8.95706 7.27738L12.6935 11.0138C13.1569 11.4773 13.1569 12.2014 12.6935 12.6648C12.4618 12.8676 12.1721 12.9834 11.8535 12.9834Z" fill="var(--btn-text-color-1)"/>
                </svg>
                <svg v-else width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.25948 10.9476L9.16157 17L18.5233 1.79999" stroke="white" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
            <input type="text" id="copy-to-clipboard" class="form-control" :value="share" disabled/>
          </div>
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
import '../../styles/main.scss'

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
      sessionKey: 'sc:help-onboarded',
      copiedToClipboard: false
    }
  },
  computed: {
    buttonClasses () {
      return {
        'bg-dark': !this.copiedToClipboard,
        'bg-green': this.copiedToClipboard,
      }
    },
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
    async show () {
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
    },
    copyToClipboard () {
      const copyText = document.getElementById('copy-to-clipboard')
      copyText.removeAttribute("disabled")
      copyText.select()
      /* For mobile devices */
      copyText.setSelectionRange(0, 99999)
      document.execCommand('copy')
      this.copiedToClipboard = true
      copyText.disabled = true
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../../styles/variables';
  

  ::selection {
    color: var(--text-color-1-inverted);
    background: var(--bg-color-2-inverted);
  }

  .bg-dark {
    background: var(--bg-color-2-inverted) !important;
  }

  .bg-green {
    background: $color-green !important;
  }
  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    margin: 20px 0;

    &:focus-within {
      .input-group-prepend {
        border-color: var(--input-color-2);
      }
    }

    .input-group-prepend {
      display: flex;
      border-right: none;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
      height: 50px;
      background: var(--bg-color-2-inverted);

      span {
        display: flex;
        align-items: center;
        padding: .375rem .75rem;
        margin-bottom: 0;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
      }
    }
    .form-control {
      position: relative;
      flex: 1 1 auto;
      width: 1%;
      border-radius: 7px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border: 2px solid var(--bg-color-4);
      border-left: none;
      height: 50px;
      font-family: Source Sans Pro;
      font-style: normal;
      font-weight: $font-weight-bold;
      font-size: 18px;
      line-height: 30px;

      background: var(--input-color-1);
      color: var(--input-text-color-1);
      padding-left: 18px;
      padding-right: 18px;
      outline: none;
      transition: all .3s ease-in;

      &::-webkit-input-placeholder,
      &:-moz-placeholder,
      &:-moz-placeholder,
      &:-ms-input-placeholder {
        color: rgba(23, 23, 23, 0.2);
      }

      &:focus {
        border-color: var(--input-color-2);
      }
    }
  }

  .hidden {
    opacity: 0;
  }

  .tab-pills {
    width: calc(100% + 50px);
    display: flex;
    margin: 0 -25px 28px -25px;
    justify-content: space-evenly;

    .tab-title {
      text-align: center;
      opacity: 0.5;
      flex-grow: 1;
      height: 50px;
      line-height: 50px;
      vertical-align: center;
      border-bottom: 2px solid var(--bg-color-4);
      font-weight: $font-weight-bold;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

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
