# Vue.js Moment Components

## Install 

Inside your moment project run:
```
npm install github:stagecast/moment-components#semver:<latest-version> --save
```
To use: 
- All components
```
import Vue from 'vue'
import MomentComponents from '@stagecast/moment-components'
// import the library styles
import '@stagecast/moment-components/lib/moment-components.css'

Vue.use(MomentComponents)
```
- Individual components
```
import Vue from 'vue'
import { scHelpPopup, scPrizePopup, scPrizeOverlay } from '@stagecast/moment-components'
// import the library styles
import '@stagecast/moment-components/lib/moment-components.css'

Vue.use(scHelpPopup)
Vue.use(scPrizePopup)
Vue.use(scPrizeOverlay)
... 
```

## Internationalization 

The library allows you to support multiple languages and switch the translation at runtime by relying on a internationalization library like vue-i18n. 

Currently supported Languages: 
- English (en) (default)
- Italian (it)
- German (de)
- Swedish (sv)
- Danish (da)
- Arabic (ar)
- Spanish (es)
- Russian (ru)
- Turkish (tr)
- Vietnamese (vi)

### Specify Library Language
```
// in main.js file 

// select the translation you need among the supported ones
import lang from '@stagecast/moment-components/lib/locale/it'

// method 1
StagecastComponents.locale(lang)
Vue.use(StagecastComponents)

// method 2
Vue.use(StagecastComponents, { locale: lang })

```

### Integration with vue-i18n

```
// i18n/index.js file
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: { ...require('@stagecast/moment-components/lib/locale/en').default },
  it: { ...require('@stagecast/moment-components/lib/locale/it').default },
  de: { ...require('@stagecast/moment-components/lib/locale/de').default }
}

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})

export default i18n
```

```
// main.js file
...
Vue.use(StagecastComponents, {
  i18n: (key, value = {}) => i18n.t(key, value)
})
```
## Develop

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
