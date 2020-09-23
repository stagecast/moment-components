<template>
  <span class="prize-box won">
    <button class="prize-button" @click="show" v-show="options.manualTrigger">
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
    <SCPopupOverlay class="prize-overlay" ref="prizeOverlay" :canDismiss="true">
      <div class="header-info won" :class="{ 'with-image': getHeaderImg }">
        <img v-if="getHeaderImg" :src="getHeaderImg" alt="">
        <span v-else>{{ t('scComponents.prize.congrats') }}</span>
      </div>
      <div class="bottom-padder">
        <div class="moment-infos">
          <div class="prize-image" v-if="prize.picture">
            <img :src="prize.picture" alt="prize picture">
          </div>
          <div class="prize-headline" v-if="getTitle">
            {{ getTitle }}
          </div>
          <div class="prize-text" v-if="getDescription">
            {{ getDescription }}
          </div>
        </div>
      </div>
      <div class="claim-prize-overlay">
        <p class="prize-error" v-if="options.claimError">{{ options.claimError }}</p>
        <button class="main-button" :disabled="options.claimError" @click="claimPrize()">
          <svg class="icon icon-left" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0.307617" y1="10.6874" x2="20.579" y2="10.6874" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EEC868"/>
                <stop offset="1" stop-color="#E49358"/>
              </linearGradient>
            </defs>
          </svg>
          {{ t('scComponents.prize.claim') }}
          <svg class="icon icon-right" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z" fill="var(--btn-text-color-1)"/>
            <path d="M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z" fill="var(--btn-text-color-1)"/>
          </svg>
        </button>
      </div>
    </SCPopupOverlay>
  </span>
</template>

<script>
import SCPopupOverlay from '../scPopupOverlay/scPopupOverlay'
import '../../styles/main.scss'

export default {
  name: 'ScPrizePopup',
  components: { SCPopupOverlay },
  props: {
    prize: {
      type: Object,
      required: true,
      default () { return {} }
    },
    options: {
      type: Object,
      required: true,
      default () { 
        return {
          winHeaderImg: '',
          winTitle: '',
          winDescription: '',
          manualTrigger: false,
          claimError: ''
        } 
      }
    }
  },
  data: function () {
    return {}
  },
  computed: {
    getTitle () {
      return this.options.winTitle ? this.options.winTitle : this.prize.title
    },
    getDescription () {
      return this.options.winDescription ? this.options.winDescription : this.prize.description
    },
    getHeaderImg () {
      return this.options.winHeaderImg ? this.options.winHeaderImg : false
    }
  },
  mounted: function () {},
  methods: {
    claimPrize () {
      this.$emit('claimPrize', true)
    },
    /* Open the prize overlay */
    show () {
      this.$refs.prizeOverlay.show()
    },
    /* Close the prize overlay */
    hide () {
      this.$refs.prizeOverlay.hide()
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../../styles/variables';

  .prize-box {
    display: inline-block;

    .prize-button {
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

    .bottom-padder {
      padding-bottom: 71px;
    }

    .moment-infos {
      text-align: left;
      padding-bottom: 40px;
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
      min-height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;

      &.won {
        background: linear-gradient(90deg, #eec868 0%, #e49358 100%);
        color: #fff;

      }
      &.with-image {
        padding: 0;
        line-height: 0;

        img {
          width: 100%;
        }
      }
    }

    .claim-prize-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: var(--bg-color-1);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
      padding: 30px 25px 21px 25px;
    }

    .prize-error {
      position: absolute;
      color: #34BE7E;
      text-align: center;
      width: 100%;
      margin: 0;
      left: 0;
      right: 0;
      top: 8px;
      font-size: 13px;
    }

    .prize-overlay .popup-overlay {
      z-index: 100;
    }

    .popup-overlay {
      padding-bottom: 40px;
    }
  }
</style>
