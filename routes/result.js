var data = require('../data.json');

exports.view = function(req, res) {
	res.render('result', {node: data.wordBank, title: 'Result'});
};