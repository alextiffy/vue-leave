<template>
    <ul class="ui-list ui-list-text ui-list-active ui-border-tb">
        <li class="ui-border-t" v-link="'/leave-detail'">
            <div class="ui-list-info">
                <h5>2016-1-2 至 2016-1-3</h5>
                <p class="ui-nowrap">审批日期:2016-02-03</p>
            </div>
            <div class="ui-list-info">
                <h4>批准</h4>
            </div>
            <div class="ui-list-action">年假</div>
        </li>

    </ul>
</template>

<script>
    export default{
        data(){
            return{
                msg:''
            }
        },
        components:{
        }
    }
</script>