import {
    USER_LOGIN,
    USER_LOGOUT,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from '../mutation-types'

//菜单激活的栏目
const state = {
    user: null,
    isGuest: true
    // id: null,
    // loginAt: null,
    // accessToken: null,
    // refreshToke: null
}

// mutations
const mutations = {
    [USER_LOGIN] (state, datas) {
        // state.id = datas.id
        // state.user = datas.user,
        // state.isGuest = false
        // state.loginAt = datas.loginAt
        // state.accessToken = datas.accessToken
        // state.refreshToke = datas.refreshToke
    },
    [USER_LOGOUT] (state) {
        state.user = null;
        state.isGuest = true;
    },
    [USER_LOGIN_SUCCESS] (state, user) {
        console.log('USER_LOGIN_SUCCESS dispatched');
        state.user = user;
        state.isGuest = false;
    },
    [USER_LOGIN_FAIL] (state) {
        console.log('USER_LOGIN_FAIL dispatched');
    }
}

export default {
    state,
    mutations
}
