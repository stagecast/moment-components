<template>
  <div class="cta-type-feedback">
    <div class="input-group">
      <textarea rows="4" class="form-control" placeholder="Type in..."></textarea>
    </div>
    <button class="main-button" @click="handleClick()">
      {{ custom.buttonLabel || 'Submit' }}
    </button>
  </div>
</template>

<script>
import '../../../styles/main.scss'

export default {
  name: 'ScCtaFeedback',
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
  },
  watch: {}
}
</script>

<style scoped lang="scss">
  @import '../../../styles/variables';

  .input-group {
    margin: 0 0 32px 0;

    .form-control {
      height: fit-content;
      font-size: 16px;
      padding: 8px;
      line-height: 21px;
    }
  }
</style>
