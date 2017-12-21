function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}

var btn1 = new Button('Hello!');

btn1.create();

var btn2 = new Button('Hejka!');

btn2.create();

var btn3 = new Button('Heloł!');

btn3.create();