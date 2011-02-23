/*
Script: Object.js
	Specs for Object.js

License:
	MIT-style license.
*/

(function(){

describe('Object hasOwnProperty', function(){

	it('should not fail on window', function(){
		expect(function(){
			var fn = function(){};
			Object.each(window, fn);
			Object.keys(window);
			Object.values(window);
			Object.map(window, fn);
			Object.every(window, fn);
			Object.some(window, fn);
			Object.keyOf(window, window);
		}).not.toThrow();
	});

});

})();