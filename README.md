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

Vue.use(MomentComponents)
```
- Individual components
```
import Vue from 'vue'
import { scHelpPopup, scPrizePopup, scPrizeOverlay } from '@stagecast/moment-components'

Vue.use(scHelpPopup)
Vue.use(scPrizePopup)
Vue.use(scPrizeOverlay)
... 
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
