<template>
  <div id="app">
    <div style="margin:10px">
      <div style="display: inline-block; margin-right:10px;">
        <sc-help-popup ref="popup" :prize="prize" :howto="howto" :options="{ title }" :share="share"></sc-help-popup>
      </div>
      <div style="display: inline-block;">
        <sc-prize-popup ref="prize" :options="prizeOptions" :manualTrigger="true" :prize="prize"></sc-prize-popup>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: { },
  data: function () {
    return {
      prize: {
        picture: 'https://staging.stagecast.se/api/content/F827F4D2-A805-4C31-8284-3079B0E51666',
        title: 'Headling',
        description: 'This is my description text. With some other text that follows.\n\nBla bla bla. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        claimButtonLink: 'https://amazon.it',
        rulesDocUrl: 'https://d2cb7i0wbc0znj.cloudfront.net/api/content/6ADC2578-8BAA-4201-AF6E-620D43387F8B',
        learnMoreTitle: '!!! Learn More Here !!!',
        learnMoreUrl: 'https://www.stagecast.io/guides-tutorials'
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
  }
}
</script>

<style lang="scss">
  @import 'styles/main.scss';

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
    background: rgb(61,23,239);
    background: linear-gradient(130deg, rgba(61,23,239,1), rgba(109,83,255,1));
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }
</style>
