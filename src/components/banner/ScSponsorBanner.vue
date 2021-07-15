<template>
  <div class="sponsor-banner" v-if="hasSponsor" v-bind:style="background">
    <p v-if="sponsor.credit" v-bind:style="textColor">{{ sponsor.credit }}</p>
    <div class="logo-container">
      <div class="logo-positioner" v-for="(logo, index) in sponsor.logos" v-bind:key="index">
        <img :src="logo" :alt="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScSponsorBanner',
  data: function () {
    return {}
  },
  computed: {
    textColor () {
      return this.sponsor && this.sponsor.textColor
        ? { color: this.sponsor.textColor }
        : { color: '#FFFFFF' }
    },
    hasSponsor () {
      return (this.sponsor && this.sponsor.logos && this.sponsor.logos.length)
    },
    background () {
      return this.sponsor && this.sponsor.color 
        ? { backgroundColor: this.sponsor.color } 
        : null
    }
  },
  props: {
    sponsor: {
      type: Object,
      required: true,
      default () {
        return {
          credit: '',
          logos: [],
          color: [],
          textColor: '#FFFFFF'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../styles/variables';

  .sponsor-banner {
    display: block;
    bottom: 0;
    // width: calc(100% + 32px);
    // margin: auto -16px 0 -16px;
    margin: auto 0 0 0;
    width: 100%;
    background-color: rgba(23, 23, 23, 0.5);
  }

  .sponsor-banner p {
    display: block;
    font-size: 14px;
    color: white;
    text-align: center;
    padding: 12px 0 8px 0;
    margin: 0;
  }
  .sponsor-banner .logo-container {
    padding-bottom: 10px;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    /*iOS 10.3 fallback*/
    -webkit-box-justify: space-evenly;
    -moz-box-justify: space-evenly;
    -ms-flex-justify: space-evenly;
    -webkit-justify-content: space-evenly;
    justify-content: space-around;
    /* space-evenly not supported by safari 10.3 */
    flex-wrap: wrap;
    margin: 0 8px;

    .logo-positioner {
      flex-basis: 19%;
      flex-grow: 1;
      max-width: 100%;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      justify-content: center;
      display: flex;
    }

    img {
      align-self: center;
      max-width: 100%;
      max-height: 78px;
      min-width: 10px;
      margin: 4px;
    }
  }

  @media screen and (max-width: 320px) {
    .sponsor-banner {
      // width: calc(100% + 16px);
      // margin: auto -8px 0 -8px;

      .logo-container {
        margin: 0;

        img {
          max-height: 70px;
        }
      }
    }
  }
</style>
