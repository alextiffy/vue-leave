<template>
    <header class="ui-header ui-header-positive ui-border-b">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>{{ $route.title }}</h1>
    </header>
</template>

<script>
    export default{
        data(){
            return{
            }
        },
        components:{

        }
    }
</script>