
var serials = [
	{
		id: 1,
		title: 'True Detective',
		desc: 'serial o detektywach',
		image: 'https://target.scene7.com/is/image/Target/15375207?wid=520&hei=520&fmt=pjpeg'
	},
	{
		id: 2,
		title: 'Vikings',
		desc: 'serial o Vikingach',
		image: 'https://images-na.ssl-images-amazon.com/images/I/81n30Llg63L._SX342_.jpg'
	},
	{
		id: 3,
		title: 'Breaking Bad',
		desc: 'serial opowiada o nauczycielu chemii, który postanawia dorobić się na produkcji narkotyków',
		image: 'http://images.amcnetworks.com/amc.com/wp-content/uploads/2010/12/breaking-bad-S5-400x600-compressedV1.jpg'
	},
	{
		id: 4,
		title: 'Dexter',
		desc: 'Dexter prowadzi podwójne życie. Za dnia jest cenionym specjalistą ds. krwi w departamencie policji, a nocą zabija złoczyńców, którzy wymykają się organom sprawiedliwości.',
		image: 'http://1.fwcdn.pl/po/16/18/331618/7331585.6.jpg'
	},
	{
		id: 5,
		title: 'Gra o tron',
		desc: 'Adaptacja sagi George R.R. Martina. W królestwie Westeros walka o władzę, spiski oraz zbrodnie są na porządku dziennym.',
		image: 'https://upload.wikimedia.org/wikipedia/en/8/80/Game_of_Thrones_Season_4.jpg'
	}


];



var Serial = React.createClass({
	propTypes: {
		serial: React.PropTypes.object.isRequired,
	},
	render() {
		return React.createElement('li', {},
			React.createElement(SerialTitle, {title: this.props.serial.title}),
			React.createElement(SerialDescription, {desc: this.props.serial.desc}),
			React.createElement(SerialImage, {image: this.props.serial.image})
		);
	}	
});

var SerialTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render() {
		return React.createElement('h2', {}, this.props.title)
	}
});

var SerialDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render() {
		return React.createElement('p', {}, this.props.desc)
	}
});

var SerialImage = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},
	render() {
		return React.createElement('img', {src: this.props.image})
	}
});

var SerialList = React.createClass({
	propTypes: {
		serials: React.PropTypes.array.isRequired,
	},
	render() {
		var serialElements = this.props.serials.map(function(serial) {
			return React.createElement(Serial, {serial, key: serial.id})
		});
		return React.createElement('div', {},
			React.createElement('h1', {}, 'Moje ulubione seriale !'),
			React.createElement('ul', {}, serialElements)
		);
	}
});

var element = React.createElement(SerialList, {serials});

ReactDOM.render(element, document.getElementById('app'));