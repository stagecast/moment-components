<template>
  <button type="button" v-if="hasSignUp" class="profile-button" @click="openProfilePopup()">
    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.6365 19.4858V17.7113C18.6365 16.77 18.2616 15.8672 17.5943 15.2016C16.927 14.536 16.022 14.1621 15.0783 14.1621H7.96189C7.01819 14.1621 6.11315 14.536 5.44586 15.2016C4.77857 15.8672 4.40369 16.77 4.40369 17.7113V19.4858" stroke="var(--text-color-1)" stroke-opacity="0.9" stroke-width="1.77457" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.52 10.6139C13.4851 10.6139 15.0782 9.02491 15.0782 7.06477C15.0782 5.10463 13.4851 3.51562 11.52 3.51562C9.55485 3.51562 7.96179 5.10463 7.96179 7.06477C7.96179 9.02491 9.55485 10.6139 11.52 10.6139Z" stroke="var(--text-color-1)" stroke-opacity="0.9" stroke-width="1.77457" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'ScProfileButton',
  data: function () {
    return {}
  },
  computed: {
    hasSignUp () {
      return this.$SDK && this.$SDK.signUpDefined()
    }
  },
  props: {},
  methods: {
    openProfilePopup () {
      if (this.hasSignUp) {
        this.$SDK.wrapper.postMessage({ type: 'lib:open' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../styles/variables';

  .profile-button {
    box-sizing: border-box;
    border: none;
    background: var(--bg-color-2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 4px;
    font-family: $base-font-stack;
    font-weight: 700;
    line-height: 24px;
    color: var(--text-color-2);
    outline: none;
    height: 36px;
    width: 36px;
    &:active {
      color: #fff !important;
      transform: scale(0.9);
      transition: all .3s ease-out;
    }
    svg {
      height: 24px;
      width: 24px;
      vertical-align: middle;
    }
  }
</style>
