<template>
    <li v-if="hasChilds" class="ui-border-r sub-menu" @click.self="setActiveGroup(groupName)">
        {{ groupName }}
        <ul v-show="isActive" v-bind:style="{top: top}" class="menus">
            <li v-for="item in group.items">
                <a class="ui-footer-btn" v-link='item.link' @click="setActiveGroup(groupName)">{{ item.title }}</a>
            </li>
        </ul>
    </li>
    <li v-else class="ui-border-r sub-menu" v-link='group.items[0].link' @click="setActiveGroup(groupName)">{{ group.items[0].title }}</li>
</template>
<style>
    .sub-menu {
        position: relative;
        height: 100%;
        z-index: 1000;
    }
    .sub-menu > .menus {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        display: block;
    }

    .sub-menu > .menus > li {
        height: 100%;
    }

    .sub-menu > .menus > li > a {
        display: block;
        width: 100%;
        height: 100%;
        line-height: 56px;
    }
</style>
<script>
    import { setActiveGroup } from '../vuex/menus/actions'
    import { getActiveGroup } from '../vuex/menus/getters'
    import Menu from './Menu.vue'
    export default{
        props: {
            group: Object,
            groupName: String
        },
        data(){
            return{

            }
        },
        components:{
            Menu
        },
        computed: {
            hasChilds: function () {
                return this.group.items.length > 1;
            },
            isActive: function () {
                return this.getActiveGroup === this.groupName;
            },
            // 一个计算属性的 getter
            top: function () {
                // `this` 指向 vm 实例
                return (- this.group.items.length * 56) + 'px';
            }
        },
        vuex: {
            getters: {
                getActiveGroup
            },
            actions: {
                setActiveGroup
            }
        }
    }
</script>
