import Vue from 'vue'
import Vuex from 'vuex'
import menus from './menus/store'
import users from './users/store'
import router from './router/store'
import subLeave from './subLeave/store'

import createLogger from 'vuex/logger'
Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        menus,
        users,
        router,
        subLeave
    },
    strict: debug,
    middlewares: debug ? [createLogger()] : []
})
