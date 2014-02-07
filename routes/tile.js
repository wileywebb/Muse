var data = require('../data.json');

exports.view = function(req, res){
  var seedWord = req.body.input_muse;
  if(seedWord.length < 1) seedWord = "Mystery";
  res.render('tile', { seedWord: seedWord, wordBank: data.wordBank });
};