<template>
    <div>
	<div class="row">
		<div class="col-lg-3 col-sm-6">

            <div class="card hovercard">
                <div class="cardheader">

                </div>
                <div class="avatar">
                    <img alt="" :src="entry.avatar"  v-on:error='getAvatarError'>
                </div>
                <div class="info">
                    <div class="title">
                        <a target="_blank" :href="entry.id">{{entry.title}}</a>
                    </div>
                    <div class="desc">共发布 {{entry.postcount }} 篇文章</div>
                    <div class="desc">上一次更新于 {{entry.updated | toTime}} </div>
                </div>
            </div>
        </div>
	</div>
    </div>
</template>


<script type="text/javascript">
	import api from '../api'
	var jyj = require('../../static/images/jyj.jpg')

	export default {
		data() {
				return {
					entry: {
					}
				}
			},
			created() {
				this.get();
			},
			methods: {
				get(){
					var t = this.$route.params.t;
					if(t){
						var url = api.search(t);
						this.$http.get(url)
						.then((x)=>{
							var entry = x.data.entry;
							if(entry){
								this.entry= entry;
							}
						})
						.catch((x)=>{
							toast.error('抱歉，加载内容出错了');
						})

					}
				},
				getAvatarError (event){
					event.target.src = jyj;
				}
			},
			watch: {
            $route(data, oldData) {
                this.get();
            },
        }
	}
</script>

<style type="text/css">



</style>