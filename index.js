'use strict'
if (typeof process !== 'object') {
    var require = new Proxy(function(){}, {
        get: function () { return require; },
        set: function () { return require; },
        apply: function () { return require },
        construct: function () { return require},
        has: function () { return !!1}
    });
}
