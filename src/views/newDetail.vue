<template>
	<div id='detail-container'>
		<div class="page-title">{{ title}}
		</div>
		<p class='sub-title'> 来源：{{ sourceName }}  </p> <!-- {{this.$route.params.date || toDate}} -->
		<div v-html="content">
		</div>
	</div>
</template>

<script type="text/javascript">
	import api from '../api'
	export default {
		data() {
				return {
					content: '',
					title: '',
					sourceName:'',
					submitDate:''
				}
			},
			created() {
				var id = this.$route.params.id;
				var url = api.getNewBody(id);
				this.$http.get(url)
					.then((x) => {
						var data = x.data;
						this.sourceName = data.SourceName;
						this.title = data.Title;
						this.submitDate = data.SubmitDate;
						this.content = data.Content;
					})
					.catch((x) => {
						console.log(x);
					})
			}
	}
</script>

<style type="text/css">
</style>