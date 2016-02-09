var MAX_COLUMNS = 12;
var val;
var out = {};
var result = '';

for (var i = 1; i <= MAX_COLUMNS; i++) {
	for (var j = 1; j <= MAX_COLUMNS; j++) {
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

console.log(result);
