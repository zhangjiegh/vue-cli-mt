<template>
    <div>
        <mt-header :title="selected" class="header" :fixed="true">
            <mt-button icon="back" slot="left" @click="goback">返回</mt-button>
        </mt-header>

        <div style="padding-top: 50px;padding-bottom: 50px">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <mt-tabbar v-model="selected" :fixed="true">
            <mt-tab-item id="首页" >
                <img slot="icon" src="http://placehold.it/100x100">
                首页
            </mt-tab-item>

            <mt-tab-item id="购物车">
                <img slot="icon" src="http://placehold.it/100x100">购物车
            </mt-tab-item>
        </mt-tabbar>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                show: false,
                selected: '首页'
            }
        },
        watch: {
            selected: function (val, oldVal) {
                if (val == '首页') {
                    this.$router.push({path: '/'})
                } else {
                    this.$router.push({path: '/about'})
                }
            }
        },
        methods: {
            goback() {
                // this.$router.go(-1);
                javascript: history.back(-1)
            }
        },
    }

</script>


<style scoped>
    .header {
        height: 50px;
    }
</style>
