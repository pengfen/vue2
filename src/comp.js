import Vue from 'vue'
var myHeaderChild = {
	template: '<p> I am my header child </p>'
}

var myHeader = {
	template: '<p><my-header-child></p>',
	components: {
		'my-header-child': myHeaderChild
	}
}

new Vue({
	el: '#app',
	data: {
		word: 'welcome'
	},
	components: {
		'my-header': myHeader
	}
})