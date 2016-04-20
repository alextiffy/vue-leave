import {
    FETCHING_DATA_START, FETCHING_DATA_STOP
} from '../mutation-types'

//菜单激活的栏目
const state = {
    isLoading: false
}

// mutations
const mutations = {
    [FETCHING_DATA_START] (state) {
        console.log('fetching data  start dispatched');
        state.isLoading = true;
    },
    [FETCHING_DATA_STOP] (state, stop) {
        console.log('fetching data  stop dispatched');
        state.isLoading = false;
    }
}

export default {
    state,
    mutations
}
