<template>
    <div class="page-loadmore">
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
            <mt-loadmore :bottom-method="loadBottom" :auto-fill="false" :bottomAllLoaded='allLoaded' @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
                <div class="media-list cn-list">
                    <template v-for="item in list">
                        <router-link class="media" :to="{name:'newDetail',  params: { id: item.id }}">
                            <span class="my-cell-mask"></span>
                            <div class="media-body media-middle">
                                <h4 class="media-heading">{{item.title}}</h4>
                            </div>
                            <div class='sub-text'><img class="media-object" :src="item.topicIcon" alt="无" v-on:error='getErrorImg'> {{item.sourceName}} <span>{{item.comments}}评论</span> <span>{{item.diggs}}赞</span> <span>{{item.published | shortTime}}</span></div>
                        </router-link>
                    </template>
                </div>
                <div slot="bottom" class="mint-loadmore-bottom">
                    <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
                    <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
                </div>
            </mt-loadmore>
        </div>
    </div>
</template>

<script type="text/javascript">
import api from '../api'
import * as filters from '../filters'
var txImg =require('../../static/images/tx.jpg');
export default {
        data() {
                return {
                    list: [],
                    allLoaded: false,
                    bottomStatus: '',
                    wrapperHeight: 0,
                    pageIndex: 1,
                    pageSize: 15,
                    lastId: ''
                }
            },
            methods: {
                getErrorImg(event){
                    event.target.src = txImg;
                },
                handleBottomChange(status) {
                    this.bottomStatus = status;
                },
                loadBottom() {
                    setTimeout(() => {
                        this.get();
                        this.$refs.loadmore.onBottomLoaded && this.$refs.loadmore.onBottomLoaded();
                    }, 1500);
                },
                get(){
                    var type = this.$route.params.type;
                    var url = '';
                    if(type == 'top'){
                        url =  api.getRecentNews(this.pageIndex, this.pageSize);
                    } else if(type == 'hot'){
                        url =  api.getRecentNews(this.pageIndex, this.pageSize);
                    }
                    else {
                        url = api.getRecentNews(this.pageIndex, this.pageSize);
                    } 
                    this.$http.get(url)
                    .then((x)=>{
                        if (x.data.entry) {
                            var len = x.data.entry.length;
                            if (len > 0) {
                                for (var i = 0; i < len; i++) {
                                    this.list.push(x.data.entry[i]);
                                }
                                if (x.data.entry[0].id == this.lastId) {
                                    this.allLoaded = true;
                                } else {
                                    this.lastId = x.data.entry[0].id;
                                    this.pageIndex += 1;
                                }
                            } else {
                                this.allLoaded = true;
                            }
                        }
                    })
                    .catch((x)=>{
                        toast.error('抱歉，加载出错了');
                    })
                }
            },
            created() {
                this.get();
            },
            mounted() {
                this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
            },
            watch: {
              $route (data, oldData) {
                this.pageIndex = 1;
                this.allLoaded = false;
                this.list = [];
                this.get();
              },
              // ...
            }
}
</script>

