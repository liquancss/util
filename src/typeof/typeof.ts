const _toString = Object.prototype.toString;
/**
 * @description Checks whether the given value(`@param value`) is of `function` type.
 * @param value - The input value.
 * @returns exact type in string, like `'array'`
 * @example
 * getType(function(){});    // Returns: function
 * getType(123);             // Returns: number
 * getType([]);              // Returns: array
*/
export function getType(value: any):string{
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
export function isFunction(value: any):boolean{
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
export function isString(value: any): boolean{
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
export function isNumber(value: any): boolean {  
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
export function isBoolean(value: any): boolean {  
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
export function isNull(value: any): boolean {  
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
export function isUndefined(value: any): boolean {  
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
export function isUndef(value: any): boolean {  
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
export function isArray(value: any): boolean {  
    return Array.isArray ? Array.isArray(value) : getType(value) === "array";  
}  

/**  
 * Checks whether the given value is an `Object`.  
 *  
 * @param value - The value to be checked.  
 * @returns `true` if the value is an object, `false` otherwise.  
 *  
 * @example  
 * isObject({});            // Returns: true  
 * isObject([]);            // Returns: false  
 * isObject(null);          // Returns: false  
 */  
export function isObject(value: any): boolean{
    return getType(value) === "object";
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
export function isDate(value: any): boolean {  
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
export function isRegExp(value: any): boolean {  
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
export function isSet(value: any): boolean {  
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
export function isWeakSet(value: any): boolean {  
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
export function isMap(value: any): boolean {  
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
export function isWeakMap(value: any): boolean {  
    return getType(value) === "weakmap";  
}
/**  
 * Checks if the given value is a `NativePromise` object.  
 *  
 * @param value The value to check.  
 * @returns Returns true if the given value is a `NativePromise` object; otherwise, false.  
 *  
 * @example  
 * isNativePromise(new Promise(()=>{}));   // Returns: true  
 * isNativePromise(function(){});          // Returns: false  
 * isNativePromise({});                    // Returns: false  
 */  
export function isNativePromise(value: any):boolean{
    return getType(value) === "promise"
}
/**  
 * if `@param key` is own property of `@param value`, then return true.
 *  
 * @param value The object
 * @param key  The object property
 * @returns Returns true if the given key is own property of `@param value`; otherwise, false.  
 *  
 * @example  
 * hasOwn({aa: 1}, "aa");              // Returns: true  
 * hasOwn({}, "toString");             // Returns: false  
 * hasOwn({}, "aa");                   // Returns: false  
 */ 
export function hasOwn(value: object, key: string){
    return !isUndef(value) && Object.hasOwnProperty.call(value, key);
}
/**  
 * Checks if the given value is a `Thenable` object or PromiseLike in other word.
 *  
 * @param value The value to check.  
 * @returns Returns true if the given value is a `Thenable` object; otherwise, false.  
 *  
 * @example  
 * isThenable({then(){}});              // Returns: true  
 * isThenable(new Promise(()=>{}));     // Returns: false  
 * isThenable({});                      // Returns: false  
 */  
export function isThenable(value: any){
    return hasOwn(value, "then") && isFunction(value.then);
}
/**  
 * Checks if the given value is a `Promise` object or PromiseLike object.
 *  
 * @param value The value to check.  
 * @returns Returns true if the given value is a `Thenable` object; otherwise, false.  
 *  
 * @example  
 * isPromise({then(){}});              // Returns: true  
 * isPromise(new Promise(()=>{}));     // Returns: true  
 * isPromise({});                      // Returns: false  
 */
export function isPromise(value: any):boolean{
    return isNativePromise(value) || isThenable(value);
}

/**  
 * Checks if the given value is a `ArrayLike` object.
 * @description ArrayLike object is a object which has a `length` property.
 * @param value The value to check.  
 * @returns Returns true if the given value is a `Thenable` object; otherwise, false.  
 *  
 * @example  
 * isArrayLike({length: 0});              // Returns: true  
 * isArrayLike([]);                       // Returns: false  
 * isArrayLike({});                       // Returns: false  
 */
export function isArrayLike(value: any):boolean{
    return isObject(value) && hasOwn(value, "length");
}