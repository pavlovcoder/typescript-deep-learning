"use strict";
var Name = (function () {
    function Name() {
    }
    Object.defineProperty(Name.prototype, "message", {
        get: function () {
            return "Another name and surname!";
        },
        enumerable: true,
        configurable: true
    });
    return Name;
}());
exports.Name = Name;
