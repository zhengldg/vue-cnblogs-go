<template>
    <div>
        <ul class="nav nav-tabs">
            <router-link tag='li' :class='{"active": index == 0}' @click.native="index=0" :to="{ path: '/blogs', query: { type: 'all' }}"><a>所有博客</a></router-link>
            <router-link tag='li' :class='{"active": index == 1}' @click.native="index=1" :to="{ path: '/blogs', query: { type: 'hot' }}"><a>热门博客</a></router-link>
            <router-link tag='li' :class='{"active": index == 2}' @click.native="index=2" :to="{ path: '/blogs', query: { type: 'top' }}"><a>推荐排行</a></router-link>
            <router-link tag='li' :class='{"active": index == 3}' @click.native="index=3" :to="{ name: 'news', params: { type: 'hot' }}"><a>新闻</a></router-link>
        </ul>
        <div>
            <router-view></router-view>
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
  created (){
        this.$router.push({path:'/blogs', query:{type: 'all'}});
  },
}
</script>

