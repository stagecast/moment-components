<template>
  <div id="app">
    <div style="margin:10px">
      <div style="display: inline-block; margin-right:10px;">
        <ScOnboardingPopup ref="popup" :prize="prize" :howto="howto" :options="{ title }" :share="share"></ScOnboardingPopup>
      </div>
      <div style="display: inline-block;">
        <ScPrizeClaimPopup ref="prize" :options="prizeOptions" :manualTrigger="true" :profile="{}" :prize="prize"></ScPrizeClaimPopup>
        <ScCtaPopup ref="cta" :cta="cta" :manualTrigger="true"></ScCtaPopup>
      </div>
    </div>
    <ScSponsorBanner :sponsor="sponsor"></ScSponsorBanner>
    <ScFooter :theme="theme"></ScFooter>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { },
  data: function () {
    return {
      cta: {
        type: 'social',
        headline: 'This is my Cta headline',
        description: 'Participate in the activity and get a chance to win the prize.',
        header: ['https://photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg'],
        custom: {
          facebook: 'https://statecast.io',
          instagram: 'https://statecast.io',
          twich: 'https://statecast.io',
          youtube: 'https://statecast.io',
          spotify: 'https://statecast.io',
          twitter: 'https://statecast.io',
          linkedin: 'https://statecast.io'
        }
      },
      sponsor: {
        credit: 'Test sponsor:',
        color: 'red',
        logos: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Targobank_logo.svg/798px-Targobank_logo.svg.png',
          'https://assets-global.website-files.com/5a61c6bb84cc4f0001c762eb/6081b9910430dbe2a36d212e_Stagecast%20Logo.svg',
          'https://assets-global.website-files.com/5a61c6bb84cc4f0001c762eb/6081b9910430dbe2a36d212e_Stagecast%20Logo.svg',
          'https://assets-global.website-files.com/5a61c6bb84cc4f0001c762eb/6081b9910430dbe2a36d212e_Stagecast%20Logo.svg'
        ]
      },
      prize: {
        headline: 'Win an amazing prize!',
        description: 'Participate in the activity and get a chance to win the prize',
        picture: 'https://console.staging.stagecast.io/media/assets/prize/prize-header.jpg',
        learnMoreUrl: 'https://stagecast.io/pricing',
        learnMoreTitle: 'Go visit Stagecast pricing',
        fulfillment: {
          // type: 'website-visits',
          type: 'collect-data',
          picture: 'https://console.staging.stagecast.io/media/assets/prize/prize-header-winner.jpg',
          headline: 'Congratulations you have won a prize!',
          description: 'You are one of the lucky winners. Make sure to claim your well deserved prize below.',
          config: {
            claimLabel: 'Claim Prize NOOOOW',
            claimUrl: 'https://stagecast.io',
            termsUrl: 'https://stagecast.io',
            termsLinkTitle: 'Terms Link Title',
            termsLabel: 'Terms label',
            nameInput: 'This is my name input',
            emailInput: 'This is my email input',
          }
        }
      },
      prizeOptions: {
        claimError: 'The prize was already claimed.',
        winDescription: 'Win Desc',
        winTitle: 'title test',
        winHeaderImg: 'https://staging.stagecast.se/api/content/F827F4D2-A805-4C31-8284-3079B0E51666'
      },
      momentClass: {
        custom: {
          popupHeaderImage: 'https://staging.stagecast.se/api/content/87AAFB81-ABCC-44AF-ADF3-F22C56AEA2F0'
        }
      },
      title: 'Test the Popup',
      theme: 'light',
      share: 'https://test.com',
      howto: [
        'The Quiz has several rounds. The faster you answer the more points you will earn.',
        'In the end you will get a final score and be ranked in a leaderboard.',
        'You can replay the quiz as often as you want.',
        'Every day the leaderboard will reset so everyone has a new chance to win a prize.'
      ]
    }
  },
  mounted: function () {
    this.$refs.prize.show()
    this.$refs.cta.show()
  }
}
</script>

<style lang="scss">
  @import 'styles/main.scss';
  body {
    background: transparent;
  }

  #app {
    font-size: $base-font-size;
    line-height: $base-line-height;
    font-family: $base-font-stack;
    color: $base-color;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    width: 100vw;
    min-height: 100vh;
    background: transparent;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }
</style>
