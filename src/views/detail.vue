<template>
	<div  class="detail-container">
		<div class="page-title">{{this.$route.params.title}}
		</div>
		<p class='sub-title'>作者：{{this.$route.params.name}}  </p> <!-- {{this.$route.params.date || toDate}} -->
		<div v-html="text" class='article'>
		</div>
	</div>
</template>

<script type="text/javascript">
import api from '../api'
	export default {
		data() {
				return {
					text: ''
				}
			},
			created() {
				var id = this.$route.params.id;
				this.$http.get(api.getBlogBody(id))
					.then((x) => {
						this.text = x.data;
					})
					.catch((x) => {
						console.log(x);
					})
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
</style>
