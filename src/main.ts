import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Navbar from './components/Navbar.vue'

export default Navbar;


createApp(App).use(router).mount('#app')
