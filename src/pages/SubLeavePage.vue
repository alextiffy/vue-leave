<template>
    <form action="#" v-bind:style="{paddingBottom: placeHeight}" @submit.prevent="handerSubmit" >
        <div class="ui-form-item ui-border-b">
            <label>请假类型</label>
            <div class="ui-select-group">
                <div class="ui-select">
                    <select>
                        <option>调休</option>
                        <option selected="">年假</option>
                        <option>无薪事假</option>
                    </select>
                </div>
            </div>
        </div>
        <datetime-select :name="'subStartTime'" :label="'起始日期'" :value="'2016-06-22 08:00'"></datetime-select>
        <datetime-select :name="'subEndTime'" :label="'结束日期'" :value="'2016-06-23 17:00'"></datetime-select>
        <div class="ui-form-item ui-border-b">
            <label>
                抄送
            </label>
            <input type="text" placeholder="抄送邮件">
            <a href="#" class="ui-icon-close">
            </a>
        </div>
        <div class="ui-form-item ui-border-b">
            <label>
                备注
            </label>
            <input type="text" placeholder="备注信息">
            <a href="#" class="ui-icon-close">
            </a>
        </div>
        <div class="ui-btn-wrap">
            <button class="ui-btn-lg ui-btn-primary">
                确定
            </button>
        </div>
    </form>
</template>

<script>
    import DatetimeSelect from '../components/DateTimeSelector'
    import { getSubStartDatetime, getSubEndDatetime } from '../vuex/subLeave/getters'
    export default{
        data(){
            return {
                formHeight: 0,
                innerHeight: 0
            }
        },
        components:{
            DatetimeSelect
        },
        computed: {
            // 一个计算属性的 getter
            placeHeight: function () {
                return this.innerHeight - this.formHeight + 'px';
            }
        },
        methods: {
            handerSubmit: function () {
//                console.log('start time: '+ this.getSubStartDatetime)
//                console.log('end time: '+ this.getSubEndDatetime)
            }
        },
        vuex: {
            getters: {
                getSubStartDatetime,
                getSubEndDatetime
            },
            actions: {

            }
        },
        ready: function(){
            this.formHeight = this.$el.offsetHeight;
            this.innerHeight = window.innerHeight
                    || document.documentElement.clientHeight
                    || document.body.clientHeight;
        }
    }
</script>