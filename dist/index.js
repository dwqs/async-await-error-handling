(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.awaitTo = factory());
}(this, (function () { 'use strict';

function awaitTo(promise) {
    return promise.then(function (data) {
        return [null, data];
    }).catch(function (err) {
        return [err, null];
    });
}

return awaitTo;

})));
