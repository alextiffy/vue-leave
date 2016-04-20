<template>
    <div class="full_width">
        <div class="remain_days"><p style="margin-top: 60px">2016</p></div>
        <div class="leave_days">
            <p>年假总天数：<span>10</span></p>
            <p style="background-color: #e4e2e2">剩余天数：<span>6</span></p>
            <p style="background-color: #e9e9e9;color: #9b9287;line-height: 30px;padding-bottom: 10px;font-size: 16px;padding-top: 10px">年假使用记录：
                <br><span>2016-1-2 至 2016-1-3</span>
                <br><span>2016-3-7</span>
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        },
        vuex: {
            getters: {

            },
            actions: {

            }
        },
        components:{
        }
    }
</script>