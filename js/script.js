
var TVshows = [
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



var TVshow = React.createClass({
	propTypes: {
		show: React.PropTypes.object.isRequired,
	},
	render() {
		return React.createElement('li', {},
			React.createElement(TVshowTitle, {title: this.props.show.title}),
			React.createElement(TVshowDescription, {desc: this.props.show.desc}),
			React.createElement(TVshowImage, {image: this.props.show.image})
		);
	}	
});

var TVshowTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired,
	},
	render() {
		return React.createElement('h2', {}, this.props.title)
	}
});

var TVshowDescription = React.createClass({
	propTypes: {
		desc: React.PropTypes.string.isRequired,
	},
	render() {
		return React.createElement('p', {}, this.props.desc)
	}
});

var TVshowImage = React.createClass({
	propTypes: {
		image: React.PropTypes.object.isRequired,
	},
	render() {
		return React.createElement('img', {src: this.props.image})
	}
});

var TVshowList = React.createClass({
	propTypes: {
		TVshows: React.PropTypes.array.isRequired,
	},
	render() {
		var tvShowElements = this.props.TVshows.map(function(show) {
			return React.createElement(TVshow, {show, key: show.id})
		});
		return React.createElement('div', {},
			React.createElement('h1', {}, 'Moje ulubione seriale !'),
			React.createElement('ul', {}, tvShowElements)
		);
	}
});

var element = React.createElement(TVshowList, {TVshows});

ReactDOM.render(element, document.getElementById('app'));