// $.fn.textWidth = function(){
//   var html_org = $(this).html();
//   var html_calc = '<span>' + html_org + '</span>';
//   $(this).html(html_calc);
//   var width = $(this).find('span:first').width();
//   $(this).html(html_org);
//   return width;
// };

$(document).ready(function() {
	$.getJSON('continuous', function(data) {
		$.each(data.rowBank, function(i, item) {
			var tile = $('<div/>', {
				"class": "tile"
			}).append($('<img/>', {
				"class": "background_image",
				"src": item.imageURL
			}), $('<p/>', {
				"class": "phrase"
			}).text(item.word));
			
			$('.tiles').append(tile);
		});
	});
});