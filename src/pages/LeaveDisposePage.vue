<template>
    <div class="ui-container02 ui-center02">
        <div class="main">
            <div class="main_txt">
                <p class="main_tit">姓名：<span>张三丰</span></p>
                <p class="main_tit">类型：<span>年假</span></p>
                <p class="main_tit">开始时间：<span>2016-1-12</span></p>
                <p class="main_tit">状态：<span>申请中</span></p>
                <p class="main_tit">抄送：<span>张三、李四</span></p>
                <p class="main_tit">备注：<span>请假申请3天，请批准</span></p>
            </div>
        </div>
        <div class="ui-btn-group">
            <button class="ui-btn-lg ui-btn-danger">
                拒绝
            </button>
            <button class="ui-btn-lg ui-btn-primary">
                同意
            </button>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:''
            }
        },
        components:{
        },
        route:{
            activate: function (transition) {
                this.title = '请假批复';
                transition.next();
            }
        }
    }
</script>