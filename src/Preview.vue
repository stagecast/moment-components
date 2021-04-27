<template>
  <div id="app" style="margin-top:8px">
    <ScHelpComponent v-if="component === 'onboarding'" :prize="componentOptions.prize" :howto="componentOptions.howto" :options="{}" :share="componentOptions.share"></ScHelpComponent>
    <ScWinnerComponent v-if="component === 'winner'" :prize="componentOptions.prize"></ScWinnerComponent>
    <ScCta v-if="component === 'cta'" :cta="componentOptions.cta"></ScCta>
  </div>
</template>

<script>
import ScHelpComponent from './previews/HelpComponent';
import ScWinnerComponent from './previews/WinnerComponent';

// real components
import ScCta from './components/scCta/scCta';

export default {
  name: 'App',
  components: { ScHelpComponent, ScWinnerComponent, ScCta },
  data: function () {
    return {
      component: 'onboarding',
      componentOptions: {}
    }
  },
  mounted: function () {
    window.addEventListener('message', this.handleConfigMessage.bind(this), false)
		document.addEventListener('message', this.handleConfigMessage.bind(this), false)
  },
  methods: {
    /* Check if the popup has already been opened once */
    handleConfigMessage (message) {
      if (message && message.data && message.data.messageSource === 'STAGECAST_PREVIEW') {
        const config = message.data.config || {}
        this.component = config.component
        this.componentOptions = config.componentOptions
      }

      this.$nextTick(() => {
        var body = document.body,
            html = document.documentElement;
        window.parent.postMessage({
          messageSource: 'STAGECAST_PREVIEW',
          config: {
            height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight )
          }
        }, '*')
      })
    },
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
    background: transparent;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
  }
</style>
