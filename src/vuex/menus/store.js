import {
    TOUCH_MENU
} from '../mutation-types'

//菜单激活的栏目
const state = {
    activeMenuGroup: null
}

// mutations
const mutations = {
    [TOUCH_MENU] (state, activeGroup) {
        state.activeMenuGroup = activeGroup
    }
}

export default {
    state,
    mutations
}
