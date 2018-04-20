Polymer({
  is: 'alurat-om',
  properties: {
  	value: {
  		type: String,
  		notify: true
  	},
	},
	listeners: {
		'change': 'updateList'
	},
	updateList: function(e) {
		console.log(this.value);
	}
	
});