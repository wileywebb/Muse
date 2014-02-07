var data = require('../data.json');

exports.view = function(req, res){
  var seedWord = req.body.input_muse;
  res.render('tile', { seedWord: seedWord, wordBank: data.wordBank });
};