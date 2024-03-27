'use strict';

var _toString = Object.prototype.toString;
function getType(value) {
    return _toString.call(value).slice(8, -1).toLowerCase();
}
/**
 * @description Checks whether the given value(`@param value`) is of `function` type.
 * @param value - The value to be checked.
 * @returns `true` if the value is of `function` type, `false` otherwise.
 * @example
 * isFunction(function(){}); // Returns: true
 * isFunction(123);          // Returns: false
 * isFunction([]);           // Returns: false
*/
function isFunction(value) {
    return typeof value === "function";
}
/**
 * @description Checks whether the given value is of `string` type.
 * @param value - The value to be checked.
 * @returns `true` if the value is of string type, `false` otherwise.
 * @example
 * isString("Hello"); // Returns: true
 * isString(123);     // Returns: false
 * isString(null);    // Returns: false
 */
function isString(value) {
    return typeof value === "string";
}
/**
 * Checks whether the given value is of `number` type.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is a number, `false` otherwise.
 *
 * @example
 * isNumber(42);           // Returns: true
 * isNumber("42");         // Returns: false
 * isNumber(null);         // Returns: false
 */
function isNumber(value) {
    return typeof value === "number";
}
/**
 * Checks whether the given value is of `boolean` type.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is a boolean, `false` otherwise.
 *
 * @example
 * isBoolean(true);        // Returns: true
 * isBoolean(false);       // Returns: true
 * isBoolean(0);           // Returns: false
 */
function isBoolean(value) {
    return typeof value === "boolean";
}
/**
 * Checks whether the given value is `null`.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is null, `false` otherwise.
 *
 * @example
 * isNull(null);           // Returns: true
 * isNull(undefined);      // Returns: false
 * isNull(0);              // Returns: false
 */
function isNull(value) {
    return value === null;
}
/**
 * Checks whether the given value is `undefined`.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is undefined, `false` otherwise.
 *
 * @example
 * isUndefined(undefined); // Returns: true
 * isUndefined(null);      // Returns: false
 * isUndefined(0);         // Returns: false
 */
function isUndefined(value) {
    return value === undefined;
}
/**
 * Checks whether the given value is `null` or `undefined`.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is null or undefined, `false` otherwise.
 *
 * @example
 * isUndef(null);          // Returns: true
 * isUndef(undefined);     // Returns: true
 * isUndef(0);             // Returns: false
 */
function isUndef(value) {
    return value === null || value === undefined;
}
/**
 * Checks whether the given value is an `Array`.
 *
 * @param value - The value to be checked.
 * @returns `true` if the value is an array, `false` otherwise.
 *
 * @example
 * isArray([]);            // Returns: true
 * isArray({});            // Returns: false
 * isArray(null);          // Returns: false
 */
function isArray(value) {
    return Array.isArray ? Array.isArray(value) : Object.prototype.toString.call(value) === "[object Array]";
}
/**
 * Checks if the given value is a Date object.
 *
 * @param value The value to check.
 * @returns Returns true if the given value is a Date object; otherwise, false.
 *
 * @example
 * isDate(new Date());              // Returns: true
 * isDate({});                      // Returns: false
 * isDate(new RegExp());            // Returns: false
 */
function isDate(value) {
    return getType(value) === "date";
}
/**
 * Checks if the given value is a RegExp object.
 *
 * @param value The value to check.
 * @returns Returns true if the given value is a RegExp object; otherwise, false.
 *
 * @example
 * isRegExp(/abc/);                 // Returns: true
 * isRegExp(new Date());           // Returns: false
 * isRegExp({});                    // Returns: false
 */
function isRegExp(value) {
    return getType(value) === "regexp";
}
/**
 * Checks if the given value is a Set object.
 *
 * @param value The value to check.
 * @returns Returns true if the given value is a Set object; otherwise, false.
 *
 * @example
 * isSet(new Set([1, 2, 3]));       // Returns: true
 * isSet([]);                        // Returns: false
 * isSet({});                        // Returns: false
 */
function isSet(value) {
    return getType(value) === "set";
}
/**
 * Checks if the given value is a WeakSet object.
 *
 * @param value The value to check.
 * @returns Returns true if the given value is a WeakSet object; otherwise, false.
 *
 * @example
 * isWeakSet(new WeakSet([1, 2, 3]));    // Returns: true
 * isWeakSet([]);                        // Returns: false
 * isWeakSet({});                        // Returns: false
 */
function isWeakSet(value) {
    return getType(value) === "weakset";
}
/**
 * Checks if the given value is a Map object.
 *
 * @param value The value to check.
 * @returns Returns true if the given value is a Map object; otherwise, false.
 *
 * @example
 * isMap(new Map([['key', 'value']])); // Returns: true
 * isMap({});                           // Returns: false
 * isMap(new Set());                    // Returns: false
 */
function isMap(value) {
    return getType(value) === "map";
}
/**
 * Checks if the given value is a WeakMap object.
 *
 * @param value The value to check.
 * @returns Returns true if the given value is a WeakMap object; otherwise, false.
 *
 * @example
 * isWeakMap(new WeakMap());           // Returns: true
 * isWeakMap({});                      // Returns: false
 * isWeakMap(new Map());               // Returns: false
 */
function isWeakMap(value) {
    return getType(value) === "weakmap";
}

exports.getType = getType;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isDate = isDate;
exports.isFunction = isFunction;
exports.isMap = isMap;
exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isRegExp = isRegExp;
exports.isSet = isSet;
exports.isString = isString;
exports.isUndef = isUndef;
exports.isUndefined = isUndefined;
exports.isWeakMap = isWeakMap;
exports.isWeakSet = isWeakSet;
