"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../../config/testing-utils");
var trim_label_helper_1 = require("./trim-label.helper");
describe('trimLabel', function () {
    it('converts a number to a string when passed', function () {
        var num = 15;
        expect(trim_label_helper_1.trimLabel(num)).toEqual('15');
    });
    // hmm..not sure this is desired, but it's the currently implemented behavior
    it('returns empty string when untrimmable datatype is passed', function () {
        expect(trim_label_helper_1.trimLabel(function () { return false; })).toEqual('');
    });
    it('returns empty string when pssing null or undefined', function () {
        expect(trim_label_helper_1.trimLabel(undefined)).toEqual('');
        expect(trim_label_helper_1.trimLabel(null)).toEqual('');
    });
    it('returns the same string in case it is <= max length', function () {
        var text = 'Hi, try ngx-charts';
        expect(trim_label_helper_1.trimLabel(text, 18)).toEqual(text);
    });
    it('should trim down to 16 chars by default', function () {
        var text = 'Hi, you should check out ngx-charts, DO IT!';
        var trimmedText = trim_label_helper_1.trimLabel(text);
        expect(trimmedText).toEqual('Hi, you should c...');
    });
    it('should trim the passed text to the given max length', function () {
        var text = 'Hi, ngx-charts is cool!';
        var trimmedText = trim_label_helper_1.trimLabel(text, 8);
        expect(trimmedText).toEqual("Hi, ngx-...");
    });
});
//# sourceMappingURL=trim-label.helper.spec.js.map