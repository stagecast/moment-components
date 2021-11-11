<template>
  <div class="cta-type-feedback">
    <div class="input-group">
      <textarea rows="4" class="form-control" :disabled="isInputDisabled" :class="{ disabled: isInputDisabled }" v-model="form.value.feedback" placeholder="Type in..."></textarea>
    </div>
    <button class="main-button" :disabled="!canSubmit" @click="submitFeedback()">
      {{ custom.buttonLabel || 'Submit' }}
    </button>
    <div class="submit-message" :class="{'text-red': submitStatus !== 'SUCCESS'}" v-if="submitStatus" >{{ getSubmitMessage }}</div>
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
    getSubmitMessage () {
      return this.submitStatus === 'SUCCESS' 
        ? 'You successfully submitted your feedback.'
        : this.submitErrorMessage
    },
    canSubmit () {
      return !this.submitting && !this.submitStatus && this.form.status === 'VALID'
    },
    isInputDisabled () {
      return this.submitting
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
      if (!this.$SDK) { return }
      this.form.dirty = false
      const userData = {
        feedback: this.form.value.feedback
      }
      this.$SDK.activation.cta.setData(userData)
        .then(() => {
          this.submitStatus = 'SUCCESS'
          this.delayedPopupClose()
        })
        .catch((error) => {
          if (error.statusCode === 403 || error.status === 403) {
            this.submitStatus = 'ERROR_ALREADY_SUBMITTED'
            this.submitErrorMessage = 'You have already submitted your feedback.' // this.$t('scComponents.prize.claimError')
          } else {
            this.submitStatus = 'ERROR_GENERIC'
            this.submitErrorMessage = 'An error occurred while submitting. Please try again.' //this.$t('scComponents.prize.claimErrorGeneric')
            this.submitting = false
          }
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

  .text-red {
    color: $color-red !important;
  }

  .submit-message {
    font-size: 14px;
    margin-top: 8px;
    text-align: center;
    color: $color-green;
  }
</style>
