import { Toast } from 'mint-ui';

var toast = {};

toast.success = function(message) {
	Toast({
		message: message,
		iconClass: 'icon icon-success'
	});
}

toast.error = function(message) {
		Toast({
		message: message,
	});
}

export {
	toast
}