<template>
    <div id="app-container">
        <header-bar></header-bar>
        <section class="ui-container">
            <div v-if="getIsLoading" class="ui-loading-block show">
                <div class="ui-loading-cnt">
                    <i class="ui-loading-bright"></i>
                    <p>正在加载中...</p>
                </div>
            </div>
            <router-view v-if="!getIsLoading"></router-view>
        </section>
        <footer class="ui-footer ui-footer-btn">
            <ul class="ui-tiled ui-border-t">
                <menus v-for="item in menusData" :group="item" :group-name="item.group"></menus>
            </ul>
        </footer>
    </div>
</template>

<script>
    import store from '../vuex/store'
    import HeaderBar from '../components/HeaderBar';
    import Menus from '../components/Menus';
    import { userLogin } from '../vuex/users/actions'
    import { getIsGuest, getUser } from '../vuex/users/getters'
    import { getIsLoading } from '../vuex/router/getters'
    export default{
        data(){
            return{
                menusData: [
                    {
                        group: '请假',
                        items: [
                            { title: '请假处理', link: '/leave-manage'},
                            { title: '请假申请', link: '/sub-leave' }
                        ]
                    },
                    {
                        group: '签到',
                        items: [
                            { title: '签到', link: '/leave'}
                        ]
                    },
                    {
                        group: '我的',
                        items: [
                            { title: '我的假期', link: '/my-leave' },
                            { title: '请假记录', link: '/leave-log' }
                        ]
                    }
                ]
            }
        },
        store,
        components:{
            HeaderBar,
            Menus
        },
        vuex: {
            getters: {
                getIsGuest,
                getUser,
                getIsLoading
            },
            actions: {
                userLogin
            }
        },
        created () {
            this.userLogin(1, 'd1aa29f03978784be70a84138647d1e1')
        }
    }
</script>