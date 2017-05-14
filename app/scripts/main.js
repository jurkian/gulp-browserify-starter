import $ from 'jquery';
import Tools from './tools';

let init = function() {
	console.log('Working!');
	console.log(Tools.test());
	console.log(Tools.x);
};

$(window).on('load', init);
