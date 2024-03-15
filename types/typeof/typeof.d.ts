export declare function getType(value: any): string;
/**
 * @description Checks whether the given value(`@param value`) is of `function` type.
 * @param value - The value to be checked.
 * @returns `true` if the value is of `function` type, `false` otherwise.
 * @example
 * isFunction(function(){}); // Returns: true
 * isFunction(123);          // Returns: false
 * isFunction([]);           // Returns: false
*/
export declare function isFunction(value: any): boolean;
/**
 * @description Checks whether the given value is of `string` type.
 * @param value - The value to be checked.
 * @returns `true` if the value is of string type, `false` otherwise.
 * @example
 * isString("Hello"); // Returns: true
 * isString(123);     // Returns: false
 * isString(null);    // Returns: false
 */
export declare function isString(value: any): boolean;
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
export declare function isNumber(value: any): boolean;
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
export declare function isBoolean(value: any): boolean;
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
export declare function isNull(value: any): boolean;
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
export declare function isUndefined(value: any): boolean;
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
export declare function isUndef(value: any): boolean;
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
export declare function isArray(value: any): boolean;
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
export declare function isDate(value: any): boolean;
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
export declare function isRegExp(value: any): boolean;
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
export declare function isSet(value: any): boolean;
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
export declare function isWeakSet(value: any): boolean;
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
export declare function isMap(value: any): boolean;
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
export declare function isWeakMap(value: any): boolean;
