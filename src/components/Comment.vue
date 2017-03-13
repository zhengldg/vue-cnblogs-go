<template>
    <div class='con-comment'>
    	<div class="divier"></div>
    	<div class="divier"></div>
        <h4><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>评论列表</h4>
        <div class="clearfix px1line"></div>
        <div v-for='item in commentsList' v-show='!noData'>
            <div class="col-xs-12">
                <div class="row comment-item">
					<a :href="item.author.url">{{item.author.name}}</a>
                   <p v-html='item.content'> </p>
                </div>
            </div>
        </div>
        <h5  v-show='noData'>暂无评论</h5>
        <button  type='button' class="btn btn-info btn-loadmore" @click='get' :disabled='allLoaded'>加载更多数据</button >
        <div class="divier"></div>
        <div class="divier"></div>
        <div class="divier"></div>
        <!-- <a class="back-to-top pull-right" @click='goAnchor()'>返回顶部</a> -->
    </div>
</template>

<script type="text/javascript">
import api from '../api'
import {toast} from '../api/util'

export default {
	props: {
		cate: {
			type: String
		},
		id: {
			type: String
		}
	},
	data() {
		return {
			commentsList: [],
			noData: false,
			pageSize: 10,
			pageIndex: 1,
			allLoaded: false
		}
	},
	created() {
		this.get();
	},
	methods: {
		get: function() {
				var type = this.cate;
				var url = api.getComments(type, this.id, this.pageSize, this.pageIndex);
				this.$http.get(url)
					.then((x) => {
						if (x && x.data && x.data.entry) {
							var len = x.data.entry.length;
							for (var i = 0; i < len; i++) {
								this.commentsList.push(x.data.entry[i]);
							}
							if (len <= 0 || len < this.pageSize) {
								this.allLoaded = true;
							}else{
								this.pageIndex += 1;
							}
						}
						if (this.commentsList == 0) {
							this.noData = true;
							this.allLoaded = true;
						}
					})
			.catch((a, b) => {
				console.log(a);
				toast.error('抱歉，加载评论出错了');
			})
	},
	goAnchor() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
}
}
</script>
<style lang="less">
.btn-loadmore{
	width: 100%;
	margin: 3px auto;
}

.line-border{
     border-bottom: 1px solid #ddd;
}

.back-to-top{
	margin: 10px 0;
}

.con-comment > h4 >span{
	margin-right: 3px;
}

.comment-item{
	 padding-top: 10px;
	 .line-border();
}
.px1line{
	 height: 1px;
	 .line-border();
}
</style>
