<template>
  <div class="popup">
    <transition name="fade">
      <div class="popup-overlay" v-show="visible">
        <div class="popup-box">
          <div class="popup-header">
            <button class="close-button" @click="hide" v-if="canDismiss">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
            </button>
          </div>
          <div class="popup-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'sc-popup-overlay',
  data: function () {
    return {
      visible: false
    }
  },
  props: {
    canDismiss: {
      type: Boolean,
      required: false,
      default: true
    }

  },
  methods: {
    /* Show the popup */
    show () {
      this.visible = true
      document.body.style.overflow = 'hidden'
    },
    /* Hide the popup */
    hide () {
      this.visible = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/variables";

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 100;
  }
  .popup-box {
    position: relative;
    width: 96%;
    margin: 10px auto;
    background: var(--bg-color-2);
    color: var(--text-color-1);
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    padding: 16px 20px;
  }

  .popup-header {
    text-align: right;
    margin: 0 -8px;
    height: 30px;
  }

  .popup-content {
    padding: 5px;
  }

  .close-button {
    width: 30px;
    height: 30px;
    border: none;
    padding: 0;
    border-radius: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: var(--text-color-2);
    color: var(--text-color-1-inverted);
    outline: none;
    opacity: 0.5;

    &:active, &:focus {
      transform: scale(0.85);
      transition: all .3s ease-out;
    }
  }

  .close-button svg {
    width: 14px;
    height: 14px;
  }
</style>
