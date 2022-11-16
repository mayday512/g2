import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import { Chart } from '@antv/g2';
import App from './App.vue'
import router from './router'
import './assets/main.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//import { DatePicker } from 'ant-design-vue';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(createPinia())
app.use(router)
//app.use(DatePicker);
app.mount('#app')
