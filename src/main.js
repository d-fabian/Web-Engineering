import Vue from 'vue'
import App from './App.vue'
import router from './router'
import titleMixin from "./mixins/titleMixin";

/* import the fontawesome core */
import {library} from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import {fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faA, faBars, faW} from '@fortawesome/free-solid-svg-icons'
/* import font awesome icon component */
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
/* add icons to the library */
library.add(faW, faA, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faBars)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.mixin(titleMixin)

new Vue({
    router,
    render: h => h(App),
    created() {
        if (sessionStorage.redirect) {
            const redirect = sessionStorage.redirect
            delete sessionStorage.redirect
            this.$router.push(redirect)
        }
    }
}).$mount('#app')
