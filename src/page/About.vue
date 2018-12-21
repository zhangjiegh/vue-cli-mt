<template>
  <div class="about">
      <mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul>
              <li class="li" v-for="item in list">{{ item }}</li>
          </ul>
      </mt-loadmore>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[],
                allLoaded:false
            }
        },
        created (){
            for(let i=0;i<20;i++){
                this.list.push(i)
            }
        },
        methods:{
            loadBottom(){
                setTimeout(() => {
                    let lastValue = this.list[this.list.length - 1];
                    if (lastValue < 80) {
                        for (let i = 1; i < 20; i++) {
                            this.list.push(lastValue + i);
                        }
                    } else {
                        this.allLoaded = true;
                    }
                    this.$refs.loadmore.onBottomLoaded();
                }, 1500);
            }
        }

    }
</script>
<style scoped>
    .about{
        overflow: scroll;
        width: 100%;
        height: 100%;
    }
    .li{
        height: 60px;
        margin: 2px 0;
        background: #cdcdcd;
    }
</style>
