<template>
  <div class="cta-type-feedback">
    <div class="input-group">
      <textarea rows="4" class="form-control" :disabled="isInputDisabled" :class="{ disabled: isInputDisabled }" v-model="form.value.feedback" placeholder="Type in..."></textarea>
    </div>
    <button class="main-button" :class="getBtnClass" :disabled="!canSubmit" @click="submitFeedback()">
      <span v-if="submitStatus !== 'SUCCESS'">{{ custom.buttonLabel || 'Submit' }}</span>
      <span v-else>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.4047 13.1175C24.1291 12.842 23.7582 12.6865 23.3695 12.6865C22.9809 12.6865 22.61 12.8384 22.3344 13.1175L16.2119 19.2083L14.2511 17.2334C13.6858 16.6681 12.7567 16.661 12.1844 17.2228C11.6085 17.7845 11.6014 18.7137 12.1667 19.2931L15.1626 22.3102C15.4382 22.5857 15.8091 22.7412 16.2013 22.7412C16.5899 22.7412 16.9573 22.5893 17.2329 22.3137L24.3976 15.1914C24.9629 14.6261 24.9699 13.6969 24.4082 13.1246L24.4047 13.1175Z" fill="white"/>
          <path d="M34.608 10.8248C33.7142 8.71568 32.4353 6.82204 30.8102 5.19337C29.1815 3.56823 27.2879 2.28932 25.1787 1.3955C22.9954 0.469876 20.6778 0 18.2896 0C8.5246 0.0035329 0.579102 7.94904 0.579102 17.714C0.579102 27.4789 8.5246 35.4244 18.2896 35.4244C28.0545 35.4244 36 27.4789 36 17.714C36 15.3257 35.5337 13.0082 34.608 10.8248ZM18.2896 32.4957C10.1391 32.4957 3.50788 25.8644 3.50788 17.714C3.50788 9.56357 10.1391 2.93231 18.2896 2.93231C26.44 2.93231 33.0712 9.56357 33.0712 17.714C33.0712 25.8644 26.44 32.4957 18.2896 32.4957Z" fill="white"/>
        </svg>
      </span>
    </button>
    <div class="error-message" v-if="submitStatus && submitStatus.startsWith('ERROR')" >{{ getErrorMessage }}</div>
  </div>
</template>

<script>
import '../../../styles/main.scss'

class FormHanlder {

  constructor (validators) {
    this.status = 'INVALID'
    this.dirty = false
    this.value = {
      feedback: ''
    }
    this.valid = {
      feedback: false
    }
    this.validators = validators
  }

  /**
   * Reset form state
   */
  reset () {
    this.dirty = false
    this.status = 'INVALID'
    this.value = {
      feedback: ''
    }
    this.valid = {
      feedback: false
    }
  }
  /**
   * Validate the form input based on the value.
   */
  validateInput (type, value) {
    this.dirty = true
    this.valid[type] = this.validators[type](value)
    this.status = Object.values(this.valid).filter(v => v === false).length ? 'INVALID' : 'VALID'
  }

  /**
   * Mark selected property as valid.
   */
  skipProperty (name) {
    this.valid[name] = true
  }
      
}

export default {
  name: 'ScCtaFeedback',
  components: { },
  props: {
    popupRef: Object,
    custom: {
      type: Object,
      required: true,
      default () { return {} }
    }
  },
  data: function () {
    return {
      submitStatus: undefined,
      submitting: false,
      submitErrorMessage: undefined,
      form: new FormHanlder({
        feedback: (val) => { return !!val && val.length > 3 }
      })
    }
  },
  computed: {
    getErrorMessage () {
      return this.submitErrorMessage
    },
    getBtnClass () {
      return {
        'btn-success': this.submitStatus === 'SUCCESS'
      }
    },
    canSubmit () {
      return !this.submitting 
        && (!this.submitStatus || this.submitStatus.startsWith('ERROR')) 
        && this.form.status === 'VALID'
    },
    isInputDisabled () {
      return this.submitting || this.submitStatus === 'SUCCESS'
    }
  },
  mounted: function () {
    this.resetState()
  },
  methods: {
    /**
     * Resets the form and the submit data.
     */
    resetState () {
      this.form.reset()
      this.submitStatus = undefined
      this.submitting = false
    },
    submitFeedback () {
      if (!this.$SDK) { 
        this.submitStatus = 'SUCCESS'
        return 
      }
      this.form.dirty = false
      const userData = {
        feedback: this.form.value.feedback
      }
      this.$SDK.activation.cta.setData(userData)
        .then(() => {
          this.submitStatus = 'SUCCESS'
          this.delayedPopupClose()
        })
        .catch((error) => { //eslint-disable-line
          this.submitStatus = 'ERROR_GENERIC'
          this.submitErrorMessage = this.t('scComponents.cta.errorGeneric')
          this.submitting = false
        })
    },
    delayedPopupClose (timeout = 3000) {
      window.setTimeout(() => {
        if (this.popupRef) {
          this.popupRef.hide()
        }
      }, timeout)
    }
  },
  watch: {
    'form.value.feedback': function(newValue) {
      this.form.validateInput('feedback', newValue)
    }
  }
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

  .main-button {
    transition: all 0.25s ease-in;

    &.btn-success:disabled {
      opacity: 1!important;
    }

    &.btn-success svg {
      vertical-align: middle;
    }
  }
  .btn-success, .bg-green {
    background-color: $color-green !important;
  }

  .error-message {
    color: $color-red !important;
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
    color: $color-green;
  }

</style>
