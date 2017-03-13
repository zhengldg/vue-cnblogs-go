<template>
    <div>
    <div class="row">
    	<div class="col-xs-3">
    				<div class="thumbnail">
			      <img :src="entry.avatar">
			      <div class="caption">
			        <h3>{{entry.title}}</h3>
			    </div>
            </div>
    	</div>
    	<div class="col-xs-9">
    	        <form class="form-horizontal">
            <div class="form-group">
                <label for="inputEmail3" class="col-xs-3 control-label">链接</label>
                <div class="col-xs-9 vcenter">
                    <a :href="entry.id" >{{entry.id}}</a>
                </div>
            </div>
            <div class="form-group">
                <label for="inputEmail3" class="col-xs-3 control-label">时间</label>
                <div class="col-xs-9">
                    {{entry.updated | toTime}}
                </div>
            </div>
             <div class="form-group">
                <label for="inputEmail3" class="col-xs-3 control-label">博客数</label>
                <div class="col-xs-9">
                    {{entry.postcount }}
                </div>
            </div>
        </form>
    	</div>
    </div>
    </div>
</template>


<script type="text/javascript">
	import api from '../api'

	export default {
		data() {
				return {
					entry: {

					}
				}
			},
			created() {
				var t = this.$route.params.t;
				if(t){
					var url = api.search(t);
					this.$http.get(url)
					.then((x)=>{
						console.log(x);
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
			methods: {
			}
	}
</script>