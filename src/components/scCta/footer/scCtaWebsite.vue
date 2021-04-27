<template>
  <div class="cta-type-website">
     <button class="main-button" @click="handleClick()">
      {{ custom.buttonLabel || 'Go to Website' }}
      <svg class="icon icon-right" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z" fill="var(--btn-text-color-1)"/>
        <path d="M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z" fill="var(--btn-text-color-1)"/>
      </svg>
    </button>
  </div>
</template>

<script>
import '../../../styles/main.scss'

export default {
  name: 'ScCtaWebsite',
  components: { },
  props: {
    custom: {
      type: Object,
      required: true,
      default () { return {} }
    }
  },
  data: function () {
    return {}
  },
  computed: {},
  mounted: function () {},
  methods: {
    handleClick () {}
  }
}
</script>

<style scoped lang="scss">
  @import '../../../styles/variables';
</style>
