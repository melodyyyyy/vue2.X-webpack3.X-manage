<template>
    <div class="wrapper">
        <v-header></v-header>
        <v-sidebar></v-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
    import  vHeader from './common/mhead.vue';
    import  vSidebar from './common/sideBar.vue';
    export default {
        components:{
            vHeader,vSidebar
        }
    }
</script>
