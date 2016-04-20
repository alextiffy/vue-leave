import HomePage from './pages/HomePage'
import SubLeavePage from './pages/SubLeavePage'
import MyLeavePage from './pages/MyLeavePage'
import LeaveLogPage from './pages/LeaveLogPage'
import LeaveDetailPage from './pages/LeaveDetailPage'
import LeaveDisposePage from './pages/LeaveDisposePage'
import LeaveManagePage from './pages/LeaveManagePage'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
var router = new VueRouter({
    history: false
})

router.map({
    '/': {
        component: HomePage,
        title: '请假'
    },
    '/sub-leave': {
        component: SubLeavePage,
        title: '请假申请'
    },
    '/my-leave': {
        component: MyLeavePage,
        title: '我的假期'
    },
    '/leave-log': {
        component: LeaveLogPage,
        title: '请假记录'
    },
    '/leave-manage': {
        component: LeaveManagePage,
        title: '请假管理'
    },
    '/leave-dispose': {
        component: LeaveDisposePage,
        title: '请假批复'
    },
    '/leave-detail': {
        component: LeaveDetailPage,
        title: '请假详情'
    }
})
export default router
