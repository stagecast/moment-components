<template>
  <div :class="'cta-type-' + type">
    <div class="input-group" v-if="custom.userNameInput">
      <input type="text" class="form-control" :disabled="isInputDisabled" :class="{ disabled: isInputDisabled }" v-model="form.value.name" :placeholder="custom.userNameInput">
    </div>
    <div class="input-group" v-if="custom.userEmailInput">
      <input type="email" class="form-control" :disabled="isInputDisabled" :class="{ disabled: isInputDisabled }" v-model="form.value.email" :placeholder="custom.userEmailInput">
    </div>
    <button class="main-button" :disabled="!canSubmit" @click="submitData()">
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

class FormHanlder {

  constructor (validators) {
    this.status = 'INVALID'
    this.dirty = false
    this.value = {
      name: '',
      email: ''
    }
    this.valid = {
      name: false,
      email: false
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
      name: '',
      email: ''
    }
    this.valid = {
      name: false,
      email: false
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
  skipProperty (propName) {
    this.valid[propName] = true
  }
      
}

export default {
  name: 'ScCtaCustom',
  components: { },
  props: {
    type: String,
    custom: {
      type: Object,
      required: true,
      default () { return {} }
    }
  },
  data: function () {
    return {
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //eslint-disable-line
      submitStatus: undefined,
      submitting: false,
      submitErrorMessage: undefined,
      form: this.form = new FormHanlder({
        name: (val) => { return !!val },
        email: (val) => {
          if (!val) return false
          return this.emailRegex.test(val)
        },
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
    skipProperties (prize) {
      if (prize && !prize.fulfillment.config.termsUrl) {
        this.form.skipProperty('checkbox')
        this.form.value.checkbox = true
      }
      if (prize && !prize.fulfillment.config.nameInput) {
        this.form.skipProperty('name')
      }
      if (prize && !prize.fulfillment.config.emailInput) {
        this.form.skipProperty('email')
      }
    },
    submitData () {
      console.log(this.form);
      if (!this.$SDK) { return }
      this.form.dirty = false
      const userData = {
        name: this.form.value.name,
        email: this.form.value.email
      }
      this.$SDK.activation.cta.setData(userData)
        .then(() => {
          this.submitStatus = 'SUCCESS'
        })
        .catch((error) => {
          if (error.statusCode === 403 || error.status === 403) {
            this.submitStatus = 'ERROR_ALREADY_SUBMITTED'
            this.submitErrorMessage = 'You have already submitted your data.' // this.$t('scComponents.prize.claimError')
          } else {
            this.submitStatus = 'ERROR_GENERIC'
            this.submitErrorMessage = 'An error occurred while submitting. Please try again.' //this.$t('scComponents.prize.claimErrorGeneric')
            this.submitting = false
          }
        })
    }
  },
  watch: {
    'form.value.name': function(newValue) {
      this.form.validateInput('name', newValue)
    },
    'form.value.email': function(newValue) {
      this.form.validateInput('email', newValue)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../../styles/variables';
</style>
