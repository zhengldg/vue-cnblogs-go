const _baseUrl = 'http://169.254.250.253:37201/api/';

export default{
	getHomeSiteBlogs(pageSize, pageIndex) {
		return _baseUrl + 'sitehome/paged/' + pageSize + '/' + pageIndex;
	},
	getBlogBody(id){
		return _baseUrl + 'sitehome/blog/post/' + id;
	},
	getTopDiggsBlogs(pageSize, pageIndex){
		return _baseUrl + 'sitehome/topdiggs/paged/' + pageSize + '/' + pageIndex;
	},
	getTopDiggsViews(pageSize, pageIndex){
		return _baseUrl + 'sitehome/topviews/paged/' + pageSize + '/' + pageIndex;
	},
	getRecentNews(pageSize, pageIndex){
		return _baseUrl + 'news/recent/paged/' + pageSize + '/' + pageIndex;
	},
	getNewBody(id){
		return _baseUrl + 'news/item/' + id;
	},
}