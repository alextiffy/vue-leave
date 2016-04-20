import {
    SUB_LEAVE_SET_START_TIME, SUB_LEAVE_SET_END_TIME
} from '../mutation-types'

//菜单激活的栏目
const state = {
    startDatetime: null,
    endDatetime: null
}

// mutations
const mutations = {
    [SUB_LEAVE_SET_START_TIME] (state, value) {
        state.startDatetime = value;
    },
    [SUB_LEAVE_SET_END_TIME] (state, value) {
        state.endDatetime = value;
    }
}

export default {
    state,
    mutations
}
