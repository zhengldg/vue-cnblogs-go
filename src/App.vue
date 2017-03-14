<template>
    <div id="app">
        <div class="container">
            <div class="row top-cont vertical-align text-center">
                <div class="col-xs-4" ><span @click='goHome'>Cnblogs vue</span></div>
                <div class="col-xs-8">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="请输入博主名称" v-model='t'>
                        <span class="input-group-btn">
                    <button class="btn btn-default" type="button" @click='go'>Go</button>
                  </span>
                    </div>
                </div>
            </div>
            <router-view ></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
        index : 0,
        t: ''
    }
  },
  methods: {
    goHome(){
        this.$router.push({path:'/blogs'});
    },
    go (){
        if(this.t){
            this.$router.push({name:'search', params:{t: this.t}});
        }
    }
  }
}
</script>

<style lang="less" >
@top-cont-padding-tb:9px;
@btm-height: 10px;

.divier{
    height:3px;
    clearfix:both;
    width:100%;
}

.btm-divier {
    height:10px;
}
.line-border{
     border-bottom: 1px solid #ddd;
}

.vertical-align {
    display: flex;
    align-items: center;
}

.top-cont{
    background: #EA6f5A;
    padding: @top-cont-padding-tb 0;
}
.top-cont > div span{
   color: white;
   font-weight: 600;
   vertical-align: middle;
}

.nav {
    font-size: 16px;
}
.vcenter {
    display: inline-block;
    vertical-align: middle;
    float: none;
}

.sub-text{
    color:#888;
    font-size: 12px;
}

.media-list .sub-text img{
    width: 16px;
    height: 16px;
}

.media-list .media h4{
    font-size: 16px !important;
}

.media-list .sub-text span{
    margin-left: 10px;
}

.my-cell-mask::after{
    background-color: #000;
    content: " ";
    opacity: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
}
.my-cell-mask:active:after{
     opacity: 0.1;
}

div.cn-list a.media{
    position: relative;
    display: block;
    text-decoration:none;
    margin-top: 0;
    color: #000;
    padding: 10px 2px;

    .line-border();
} 

.page-title {
    font-size: 20px;
    margin: 20px auto 10px;
    text-align: center;
    display: block;
    line-height: 1;
    font-weight:  bold;
}
.sub-title{
    text-align: center;
    color: #888;
}

.page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle;
}
.page-loadmore-desc {
    color: #666;
    padding-bottom: 5px;
}
.page-loadmore-desc:last-of-type {
    border-bottom: solid 1px #eee;
}
.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #eee;
}
.page-loadmore-listitem:first-child {
    border-top: solid 1px #eee;
}
.page-loadmore-wrapper {
    overflow: scroll;
}
.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}
.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
}
</style>
