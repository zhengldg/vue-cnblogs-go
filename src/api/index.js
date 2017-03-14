const _baseUrl = 'http://zldg.ngrok.cc/api/';

export default{
	getHomeSiteBlogs(pageSize, pageIndex) {
		return _baseUrl + 'blogs/paged/' + pageSize + '/' + pageIndex;
	},
	getBlogBody(id){
		return _baseUrl + 'blogs/blog/post/' + id;
	},
	getTopDiggsBlogs(pageSize, pageIndex){
		return _baseUrl + 'blogs/topdiggs/paged/' + pageSize + '/' + pageIndex;
	},
	getTopDiggsViews(pageSize, pageIndex){
		return _baseUrl + 'blogs/topviews/paged/' + pageSize + '/' + pageIndex;
	},
	getRecentNews(pageSize, pageIndex){
		return _baseUrl + 'news/recent/paged/' + pageSize + '/' + pageIndex;
	},
	getNewBody(id){
		return _baseUrl + 'news/item/' + id;
	},
	getComments(type,id, pageSize, pageIndex){
		return _baseUrl + type + '/comments/paged/' + id + '/' + pageIndex + '/' + pageSize;
	},
	search(t){
		return _baseUrl + 'author/search/' + t;
	}
}