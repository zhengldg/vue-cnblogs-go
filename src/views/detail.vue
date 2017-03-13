<template>
	<div class="detail-container">
		<a id='top'></a>
		<div class="page-title">{{this.$route.params.title}}
		</div>
		<p class='sub-title'>作者：{{this.$route.params.name}}  </p> <!-- {{this.$route.params.date || toDate}} -->
		<div v-html="text" class='article'>
		</div>
		<div class="clearfix"></div>
		<div class="divider"></div>
		<div><comment cate='blogs' :id='id'></comment></div>

	</div>
</template>

<script type="text/javascript">
import api from '../api'
import Comment from '../components/Comment'

	export default {
		data() {
				return {
					text: '',
					id: ''
				}
			},
			created() {
				this.id = this.$route.params.id;
				this.$http.get(api.getBlogBody(this.id))
					.then((x) => {
						this.text = x.data;
					})
					.catch((x) => {
						toast.error('抱歉，加载博客内容出错了');
					})
			},
			components:{
				Comment
			}
	}
</script>
<style type="text/css">
.detail-container {
    padding: 0 2px;
    word-wrap: break-word;
}

@media screen and (max-width:320px) {
   .article img, .article table {
        width: 280px !important;
    }

}

@media screen and (max-width: 480px) {
    .article img, .article table{
        width: 350px !important;
    }
}

@media screen and (min-width: 481px) {
   .article img, .article table{
       width: 420px !important;
    }
}

.article pre{
	white-space: pre-wrap;       
	white-space: -moz-pre-wrap;  
	white-space: -pre-wrap;      
	white-space: -o-pre-wrap;    
	word-wrap: break-word;       
}
</style>
