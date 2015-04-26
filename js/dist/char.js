(function(exports, undefined){

	'use strict';


/* js/src/predicate */
/* js/src/predicate/islower.js */

var islower = function ( c ) {

	return c !== upper( c ) ;

} ;

exports.islower = islower ;

/* js/src/predicate/isupper.js */

var isupper = function ( c ) {

	return c !== lower( c ) ;

} ;

exports.isupper = isupper ;

/* js/src/transform */
/* js/src/transform/lower.js */

var lower = Function.call.bind( String.prototype.toLowerCase ) ;

exports.lower = lower ;

/* js/src/transform/upper.js */

var upper = Function.call.bind( String.prototype.toUpperCase ) ;

exports.upper = upper ;

/* js/src/translate */
/* js/src/translate/chr.js */

var chr = String.fromCharCode ;

exports.chr = chr ;

/* js/src/translate/ord.js */

var ord = Function.call.bind( String.prototype.charCodeAt ) ;

exports.ord = ord ;

})(typeof exports === 'undefined' ? this['char'] = {} : exports);
