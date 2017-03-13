<template>
    <div class='detail-container'>
        <div class="page-title">{{ title}}
        </div>
        <p class='sub-title'> 来源：{{ sourceName }} </p>
        <!-- {{this.$route.params.date || toDate}} -->
        <div v-html="content" class="article">
        </div>
        <div>
            <comment cate='news' :id='id'></comment>
        </div>
    </div>
</template>


<script type="text/javascript">
	import api from '../api'
	import {toast} from '../api/util'
	import Comment from '../components/Comment'
	export default {
		data() {
				return {
					content: '',
					title: '',
					sourceName:'',
					submitDate:'',
					id:''
				}
			},
			created() {
				this.id = this.$route.params.id;
				var url = api.getNewBody(this.id);
				this.$http.get(url)
					.then((x) => {
						var data = x.data;
						this.sourceName = data.SourceName;
						this.title = data.Title;
						this.submitDate = data.SubmitDate;
						this.content = data.Content;
					})
					.catch((x) => {
						toast.error('抱歉，加载新闻内容出错了');
					})
			},
			components:{
				Comment
			}
	}
</script>

<style type="text/css">
</style>