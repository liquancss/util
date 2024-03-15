'use strict';

var _typeof = require('@minsk/util/src/typeof');



Object.keys(_typeof).forEach(function (k) {
	if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return _typeof[k]; }
	});
});
