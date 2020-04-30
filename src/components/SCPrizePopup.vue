<template>
  <div class="prize-box won">
    <button class="prize-button" @click="show" v-if="!manualTrigger">
      <img class="icon" src="../assets/prize.icon.svg" alt="prize">
    </button>
      <sc-popup-overlay class="prize-overlay" ref="prizeOverlay" :canDismiss="true">
        <div class="header-info won" :class="{ 'with-image': getHeaderImage }">
          <img v-if="getHeaderImage" :src="getHeaderImage" alt="">
          <span v-else>Congratulations! You have won a prize.</span>
        </div>
        <div class="bottom-padder">
          <div class="moment-infos">
            <div class="prize-image" v-if="prize.prizeImage">
              <img :src="prize.prizeImage" alt="">
            </div>
            <div class="prize-headline" v-if="prize.prizeDescriptionHeadline">
              {{ prize.prizeDescriptionHeadline }}
            </div>
            <div class="prize-text" v-if="prize.prizeDescriptionText">
              {{ prize.prizeDescriptionText }}
            </div>
          </div>
        </div>
        <div class="claim-prize-overlay">
          <a class="claim-prize-button" :href="prize.claimButtonLink" target="_blank">
            <img class="icon icon-left" src="../assets/prize.icon.svg" alt="">
            Claim Prize
            <svg class="icon icon-right" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z" fill="var(--btn-text-color-1)"/>
              <path d="M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z" fill="var(--btn-text-color-1)"/>
            </svg>
          </a>
        </div>
      </sc-popup-overlay>
  </div>
</template>

<script>
import SCPopupOverlay from './SCPopupOverlay'

export default {
  name: 'sc-prize-popup',
  components: { SCPopupOverlay },
  props: {
    prize: {
      type: Object,
      required: true,
      default: function () {
        return {}
      }
    },
    manualTrigger: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data: function () {
    return {}
  },
  computed: {
    getHeaderImage () {
      if (this.momentClass) {
        let r = this.momentClass.custom.prizeWonTitleImage
        return r ? r : false
      } 
      return false
    }
  },
  mounted: function () {},
  methods: {
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

<style lang="scss" scoped>
  @import "~normalize.css/normalize.css";
  @import '../styles/themes';
  @import "../styles/general";

  .prize-box {
    padding-top: 10px;

    .prize-button {
      border: none;
      background: var(--bg-color-2);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      padding: 5px 13px;
      font-family: $base-font-stack;
      font-size: 20px;
      font-weight: $font-weight-bold;
      line-height: 26px;
      color: var(--text-color-2);
      outline: none;

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

    .claim-prize-button {
      text-decoration: none;
      text-align: center;
      background: var(--btn-color-1);
      color: var(--btn-text-color-1);
      border: none;
      border-radius: 7px;
      height: 60px;
      line-height: 60px;
      width: 100%;
      font-size: 18px;
      font-weight: $font-weight-bold;
      outline: none;
      display: block;
      position: relative;
      padding: 0 50px;

      &:active, &:focus {
        color: var(--btn-text-color-1) !important;
        transform: scale(0.97);
        transition: all .3s ease-out;
      }
    }

    .claim-prize-button .icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .claim-prize-button .icon-left {
      left: 25px;
    }

    .claim-prize-button .icon-right {
      right: 25px;
    }

    .prize-overlay .popup-overlay {
      z-index: 100;
    }

    .popup-overlay {
      padding-bottom: 40px;
    }
  }
</style>
