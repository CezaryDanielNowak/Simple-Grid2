var MAX_COLUMNS = 12;

function generateGrid(maxColumns) {
	var val;
	var out = {};
	var result = '';
	maxColumns || (maxColumns = MAX_COLUMNS);

	for (var i = 1; i <= maxColumns; i++) {
		for (var j = 1; j <= maxColumns; j++) {
			if (j > i) {
				continue;
			}

			val = ("" + (100*j/i)).substr(0,5);

			out[val] || (out[val] = []);
			out[val].push('col-' + j + '-' + i);
		}
	}

	for(var x in out) {
		result += '.' + out[x].join(', .');
		result += ' {\n\twidth: ' + x + '%;\n}\n';
	}

	return result;
}


module.exports = generateGrid
