# TailwindVue
## Vue3 Tailwind UI components and utilities

Early access

```bash
#To install the TailwindVue
yarn add TailwindVue
```

```javascript
import { createApp } from 'vue'
import App from './App.vue'
//Adding tailwindcss
import './assets/main.css'

//TailwindVue
import register from 'tailwindvue'

const app = createApp(App)
register(app);

app.mount('#app')
```


Note :
`This liberary is only for Vue3, you cannot use it with Vue2.`
