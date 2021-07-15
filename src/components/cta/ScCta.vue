<template>
  <div class="cta-box">
    <div v-if="getHeader" class="box-header" :class="{ 'with-image': getHeader }">
      <img :src="getHeader" alt="">
    </div>
    <div class="box-body">
      <div class="cta-headline" v-if="cta.headline">
        {{ cta.headline }}
      </div>
      <div class="cta-text" v-if="cta.description">
        {{ cta.description }}
      </div>
    </div>
    <div class="box-footer">
      <ScCtaWebsite :custom="cta.custom" :popupRef="popupRef" v-if="ofType(['website'])"></ScCtaWebsite>
      <ScCtaSocial :custom="cta.custom" v-if="ofType(['social'])"></ScCtaSocial>
      <ScCtaFeedback :custom="cta.custom" v-if="ofType(['feedback'])"></ScCtaFeedback>
      <ScCtaCustom :custom="cta.custom" v-if="ofType(['leadgen', 'newsletter', 'promotion'])"></ScCtaCustom>
    </div>
  </div>
</template>

<script>
import '../../styles/main.scss'
import ScCtaCustom from './footer/ScCtaCustom'
import ScCtaFeedback from './footer/ScCtaFeedback'
import ScCtaSocial from './footer/ScCtaSocial'
import ScCtaWebsite from './footer/ScCtaWebsite'

export default {
  name: 'ScCta',
  components: { ScCtaWebsite, ScCtaSocial, ScCtaFeedback, ScCtaCustom },
  props: {
    cta: {
      type: Object,
      required: true,
      default () { return {} }
    },
    popupRef: Object
  },
  data: function () {
    return {}
  },
  computed: {
    getHeader () {
      return this.cta.header && !!this.cta.header.length 
        ? this.cta.header.toString()
        : null 
    }
  },
  mounted: function () {},
  methods: {
    handleClick () {
      this.trackClick()
      window.open(this.cta.buttonLink, '_blank')
      window.setTimeout(() => {
        this.hide()
      }, 100)
    },
    trackClick () {},
    ofType(list) {
      return list.includes(this.cta.type)
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../../styles/variables';
  .cta-box {
    border-radius: 10px;
    background: var(--bg-color-2);
    color: var(--text-color-1);

    .box-header {
      text-align: center;
      padding: 24px 48px;
      background: var(--bg-color-2);
      font-weight: $font-weight-bold;
      font-size: 22px;
      line-height: 28px;
      color: var(--text-color-1);
      min-height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;

      &.with-image {
        padding: 0;
        line-height: 0;

        img {
          width: 100%;
        }
      }
    }

    .box-body {
      padding: 24px;
    }
    .box-footer {
      padding: 12px 24px 24px 24px;
    }

    .cta-headline {
      font-weight: $font-weight-bold;
      font-size: 20px;
      line-height: 25px;
      margin: 0 0 16px 0;
    }
    
    .cta-text {
      white-space: pre-line;
    }
  }
</style>
