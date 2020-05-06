<template>
  <div class="popup">
    <div class="popup-overlay" v-show="visible"></div>
      <transition name="fade">
        <div class="popup-container" v-show="visible">
          <div class="popup-box">
            <div class="popup-header">
              <button class="close-button" @click="hide" v-if="canDismiss">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.41406" width="14" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="#C4C4C4"/>
                  <rect x="11.3137" y="1.41431" width="14" height="2" rx="1" transform="rotate(135 11.3137 1.41431)" fill="#C4C4C4"/>
                </svg>
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
  name: 'ScPopupOverlay',
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
      this.$emit('show', true)
      document.body.style.overflow = 'hidden'
    },
    /* Hide the popup */
    hide () {
      this.visible = false
      this.$emit('hide', true)
      document.body.style.overflow = 'auto'
    }
  }
}
</script>

<style scoped lang="scss">

  .popup-overlay, .popup-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 100;
    background: rgba(23,23,23,.20);
  }
  .popup-box {
    position: relative;
    width: 96%;
    max-width: 400px;
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
    min-height: 380px;
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
