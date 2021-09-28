<template>
  <div class="prize-claim-box">
    <!-- header -->
    <div class="header-info" :class="{ 'with-image': getHeaderImg }" v-if="getHeaderImg">
      <img :src="getHeaderImg" alt="winner header">
    </div>
    <!-- body -->
    <div>
      <div dir="auto" v-if="prize && prize.fulfillment">
        <div class="prize-headline" v-if="getHeadline">
          {{ getHeadline }}
        </div>
        <div class="prize-text" v-if="getDescription">
          {{ getDescription }}
        </div>

        <div class="input-group" v-if="ofType('collect-data') && getNameInput">
          <input type="text" class="form-control" :disabled="isInputDisabled" :class="{ disabled: isInputDisabled }" v-model="form.value.name" :placeholder="getNameInput">
        </div>
        <div class="input-group" v-if="ofType('collect-data') && getEmailInput">
          <input type="email" class="form-control" :disabled="isInputDisabled" :class="{ disabled: isInputDisabled}" v-model="form.value.email" :placeholder="getEmailInput">
        </div>

      </div>
      <div style="padding-top: 12px;">
        <div v-if="getTermsUrl">
          <label class="mc-checkbox">
            <span style="word-break: break-all;">{{ prize.fulfillment.config.termsLabel || t('scComponents.help.accept') }}
              <span>
                <a :href="getTermsUrl" :download="t('scComponents.help.tos')">{{ prize.fulfillment.config.termsLinkTitle || t('scComponents.help.tos') }}</a>
              </span>
            </span>
            <input type="checkbox" value="true" v-model="form.value.checkbox">
            <span class="mc-checkmark"></span>
          </label>
        </div>
        <button class="main-button" :disabled="!canSubmit" @click="claimPrize()">
          <svg class="icon icon-left" width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.579 5.34488V1.67887H16.1582V0H4.7284V1.67887H0.307617V5.34488C0.307617 8.02789 2.45056 10.215 5.11409 10.2974C5.80498 12.0867 7.36795 13.4507 9.27909 13.8504V15.6323C7.76671 16.0791 6.61175 17.3703 6.35977 18.9547H4.80962V21.3748H16.0772V18.9544H14.5271C14.2751 17.3703 13.1201 16.0791 11.6078 15.6321V13.8501C13.5189 13.4504 15.0821 12.0865 15.7728 10.2972C18.4363 10.2152 20.579 8.02789 20.579 5.34488ZM11.6035 4.99267L13.5719 5.57288L12.3205 7.19927L12.3466 8.14831L12.377 9.25077L10.4433 8.56321L8.50984 9.25077L8.54024 8.14831L8.56636 7.19927L7.31498 5.57288L9.28337 4.99267L10.0764 3.83559L10.4433 3.30003L10.8105 3.83582L11.6035 4.99267ZM2.4641 5.34488V3.83559H4.72864V8.09511C3.43974 7.84312 2.4641 6.70646 2.4641 5.34488ZM18.4225 5.34488C18.4225 6.70646 17.4466 7.84288 16.1582 8.09511V3.83559H18.4225V5.34488Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="0.307617" y1="10.6874" x2="20.579" y2="10.6874" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EEC868"/>
                <stop offset="1" stop-color="#E49358"/>
              </linearGradient>
            </defs>
          </svg>
          {{ prize.fulfillment.config.claimLabel || t('scComponents.prize.claim') }}
          <svg class="icon icon-right" v-if="ofType('website-visits')" width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.2678 19.1097H1.96743V5.78748H10.6378L12.2757 4.14951H1.13752C0.678891 4.14951 0.307617 4.52078 0.307617 4.97941V19.9396C0.307617 20.3982 0.678891 20.7695 1.13752 20.7695H16.0758C16.5345 20.7695 16.9057 20.3982 16.9057 19.9396V8.80135L15.2678 10.4393V19.1097Z" fill="var(--btn-text-color-1)"/>
            <path d="M20.2473 0H14.2851C13.8265 0 13.4552 0.371274 13.4552 0.829906C13.4552 1.28854 13.8265 1.65981 14.2851 1.65981H18.2599L9.85165 10.0681C9.52406 10.3957 9.52406 10.898 9.85165 11.2256C10.0045 11.3785 10.2229 11.4658 10.4413 11.4658C10.6597 11.4658 10.8563 11.3785 11.031 11.2256L19.4393 2.79547V6.77029C19.4393 7.22892 19.8105 7.60019 20.2692 7.60019C20.7278 7.60019 21.0991 7.22892 21.0991 6.77029V0.829906C21.0772 0.371274 20.706 0 20.2473 0Z" fill="var(--btn-text-color-1)"/>
          </svg>
        </button>
        <div class="submit-message" :class="{'text-red': submitStatus !== 'SUCCESS'}" v-if="submitStatus || previewMode" >{{ getSubmitMessage }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../styles/main.scss'

export default {
  name: 'ScPrizeClaim',
  components: { },
  props: {
    prize: {
      type: Object,
      required: false,
      default () { 
        return {
          fulfillment: {
            type: '', // collect-data | website-visits
            headline: '',
            description: '',
            picture: null,
            config: {
              claimLabel: '',
              nameInput: '',
              emailInput: '',
              termsUrl: '',
              termsLabel: '',
              termsLinkTitle: '',
              submitMessage: ''
            }
          }
        } 
      }
    },
    profile: {
      type: Object
    },
    previewMode: Boolean
  },
  data: function () {
    return {
      emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, //eslint-disable-line
      submitStatus: undefined,
      submitting: false,
      activeInstanceId: undefined,
      lastActiveInstanceId: undefined,
      form: {
        status: 'INVALID',
        value: {
          name: '',
          email: '',
          checkbox: false
        },
        valid: {
          name: false,
          email: false,
          checkbox: false
        },
        skipProperty (name) {
          this.valid[name] = true
        },
        validators: {
          name: (val) => { return !!val  },
          email: (val) => {
            if (!val) return false
            return this.emailRegex.test(val)
          },
          checkbox: (val) => {
            if (!this.getTermsUrl) return true
            return val
          }
        }
      }
    }
  },
  computed: {
    getHeadline () {
      return this.prize.fulfillment.headline
    },
    getDescription () {
      return this.prize.fulfillment.description
    },
    getHeaderImg () {
      return this.prize.fulfillment.picture ? this.prize.fulfillment.picture : false
    },
    getTermsUrl () {
      return this.prize.fulfillment.config.termsUrl
    },
    getNameInput () {
      return this.prize.fulfillment.config.nameInput
    },
    getEmailInput () {
      return this.prize.fulfillment.config.emailInput
    },
    getSubmitMessage () {
      return this.submitStatus === 'SUCCESS' 
        ? this.prize.fulfillment.config.submitMessage 
        : this.submitErrorMessage
    },
    canSubmit () {
      if (this.prize.fulfillment.type === 'website-visits')  {
        return true
      }
      return !this.submitting && !this.submitStatus && this.form.status === 'VALID'
    },
    isInputDisabled () {
      return this.submitting
    }
  },
  mounted: function () {
    this.checkProfile(this.profile)
    this.checkPrize(this.prize)
  },
  methods: {
    /**
     * Open the terms by changing the location.
     */
    openPrizeTerms () {
      const windowReference = window.open('', '_blank')
      windowReference.location = this.prize.fulfillment.config.termsUrl
    },

    /**
     * Resets the form and the submit data.
     */
    resetState () {
      this.submitStatus = undefined
      this.submitting = false
      this.form.status = 'INVALID'
      this.form.value = {
        name: '',
        email: '',
        checkbox: false
      }
      this.form.valid = {
        name: false,
        email: false,
        checkbox: false
      }
    },

    /**
     * Check if the prize fulfillment data is set. Disabled te checkbox if no termsUrl 
     * is defined.
     */
    checkPrize (prize) {
      if (prize && !prize.fulfillment) {
        prize.fulfillment = { config: {} }
      }
      // autocheck if terms are not specified
      this.skipProperties(prize)
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

    /**
     * Check profile prize instance
     */
    checkProfile (profile) {
      if (profile && profile.prizes) {
        const prizeListLen = profile.prizes.length
        if (!prizeListLen) { return }
        const instanceId  = profile.prizes[prizeListLen - 1]
        this.activeInstanceId = instanceId
        // reset state if there is a new prize to be claimed
        if (this.activeInstanceId !== this.lastActiveInstanceId) {
          this.resetState()
        }
      }
    },

    /**
     * Check the fulfillment type
     */
    ofType (type) {
      return this.prize.fulfillment.type === type
    },

    /**
     * Validate the form input based on the value.
     */
    validateInput (type, value) {
      this.form.valid[type] = this.form.validators[type](value)
      this.form.status = Object.values(this.form.valid).filter(v => v === false).length ? 'INVALID' : 'VALID'
    },

    /**
     * Claim prize entry point.
     */
    claimPrize () {
      // if the SDK is not defined or the submission in in progress, exit
      if (this.$SDK && this.profile && !this.submitting && !this.submitStatus) {
        switch (this.prize.fulfillment.type) {
          case 'website-visits':
            this.visitWebsite(this.activeInstanceId)
            break
          case 'collect-data':
            this.submitting = true
            this.submitData(this.activeInstanceId)
            break
          default:
            break
        }
      }
    },

    /**
     * Fulfillment-type: website visits. Redirect to claimUrl. The user will fulfill the claim
     * in the webpage where it is redirect to.
     */
    visitWebsite (instanceId) {
      const claimUrl = this.$SDK.prize.getClaimUrl(instanceId)
      // open the window now and change the location later to make it work on mobile and Safari
      window.open(claimUrl, '_blank', 'noopener')
    },

    /**
     * Fulfillment-type: collect data. The user fulfills the claim in this page.
     */
    submitData (instanceId) {
      const userData = {
        name: this.form.value.name,
        email: this.form.value.email,
        username: this.profile.name,
        points: this.profile.bestScore,
        position: this.profile.position,
        series: this.profile.seriesNumber
      }
      this.$SDK.prize.claimPrize(instanceId)
        .then(() => this.$SDK.prize.fulfillClaim(instanceId, userData))
        .then(() => {
          this.submitStatus = 'SUCCESS'
          this.lastActiveInstanceId = instanceId
        })
        .catch((error) => {
          if (error.statusCode === 403 || error.status === 403) {
            this.lastActiveInstanceId = instanceId
            this.submitStatus = 'ERROR_ALREADY_CLAIMED'
            this.submitErrorMessage = this.$t('scComponents.prize.claimError')
          } else {
            this.submitStatus = 'ERROR_GENERIC'
            this.submitErrorMessage = this.$t('scComponents.prize.claimErrorGeneric')
            this.submitting = false
          }
        })
    }
  },
  watch: {
    prize: function (newValue) {
      this.checkPrize(newValue)
    },
    profile: function (newValue) {
      this.checkProfile(newValue)
      this.checkPrize(this.prize)
    },
    'form.value.name': function(newValue) {
      this.validateInput('name', newValue)
    },
    'form.value.email': function(newValue) {
      this.validateInput('email', newValue)
    },
    'form.value.checkbox': function(newValue) {
      this.validateInput('checkbox', newValue)
    }
  }
}
</script>

<style scoped lang="scss">

  @import '../../styles/variables';
  
  ::selection {
    color: var(--text-color-1-inverted);
    background: var(--bg-color-2-inverted);
  }

  .bg-dark {
    background: var(--bg-color-2-inverted) !important;
  }
  .bg-green {
    background: $color-green !important;
  }
  .text-red {
    color: $color-red !important;
  }

  a, .link {
    text-decoration: underline;
    color: var(--text-color-1);
    &:active, &:hover, &:visited {
      color: var(--text-color-2)
    }
  }
  
  .hidden {
    opacity: 0;
  }

  .input-group:last-of-type {
    margin-bottom: 30px;
  }

  .prize-claim-box {
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
    background: var(--bg-color-2);
    color: var(--text-color-1);

    .prize-image {
      margin: 20px 0;
    }

    .prize-image img {
      display: block;
      width: 100%;
      height: auto;
    }

    .prize-headline, .headline {
      font-weight: $font-weight-bold;
      font-size: 20px;
      line-height: 25px;
      margin: 20px 0;
    }
    .prize-text {
      white-space: pre-line;
      margin-bottom: 30px;
    }

    .header-info {
      text-align: center;
      padding: 20px 55px;
      background: var(--bg-color-2);
      font-weight: $font-weight-bold;
      font-size: 22px;
      line-height: 28px;
      color: var(--text-color-1);
      margin: -25px -25px 5px -25px;

      &.with-image {
        padding: 0;
        line-height: 0;

        img {
          width: 100%;
        }
      }
    }
    
    .submit-message {
      font-size: 14px;
      margin-top: 8px;
      text-align: center;
      color: $color-green;
    }

  }


  .rtl, [dir="rtl"] {
    .input-group {
      .form-control {
        border-right: none;
        border-left: 2px solid var(--bg-color-4);
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      .input-group-prepend {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }

    ul {
      list-style-image: var(--list-style-image-rtl);
      margin: 16px 0;
    }
  }

</style>
