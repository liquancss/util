import {equal} from "assert";
import { isArray, isBoolean, isDate, isMap, isNull, isNumber, isRegExp, isSet, isString, isUndefined, isWeakMap } from "@minsk/util/src";
type CompareTypeValue = Array<any>;
interface CompareType{
    String: CompareTypeValue,
    Number: CompareTypeValue,
    Boolean: CompareTypeValue,
    Null: CompareTypeValue,
    Undefined: CompareTypeValue,
    Array: CompareTypeValue,
    Date: CompareTypeValue,
    RegExp: CompareTypeValue,
    Set: CompareTypeValue,
    WeakSet: CompareTypeValue,
    Map: CompareTypeValue,
    WeakMap: CompareTypeValue
}
const cachedComparedType: CompareType = {
    String: ["", '', ``, "1123"],
    Number: [0, +0, -0, NaN, 123, -123, 2131414313531143201, -2131414313531143201, 0x123, 0b1],
    Boolean: [false, true, !1],
    Null: [null],
    Undefined: [undefined, void 0],
    Array: [[1], []],
    Date: [new Date()],
    RegExp: [/1/],
    Set: [new Set()],
    WeakSet: [new WeakSet()],
    Map: [new Map()],
    WeakMap: [new WeakMap()],
};
export function compareAll(){
    const types = (Object.keys(cachedComparedType) as Array<keyof CompareType>);
    types.forEach((type)=>{
        compareType(type);
    });
}
function getResolvedMethod(target: keyof CompareType){
    switch(target){
        case "String":
            return isString;
        case "Boolean":
            return isBoolean;
        case "Number":
            return isNumber;
        case 'Null':
            return isNull;
        case 'Undefined':
            return isUndefined;
        case 'Array':
            return isArray;
        case 'Date':
            return isDate;
        case 'RegExp':
            return isRegExp;
        case 'Set':
            return isSet;
        case 'Map':
            return isMap;
        case 'WeakMap':
            return isWeakMap;
        default:
            throw new Error(`unknown target [${target}]`);
    }
}
export function compareType(target: keyof CompareType){
    const currentCompareType = cachedComparedType[target];
    const resolvedMethod = getResolvedMethod(target);
    describe(target, ()=>{
        // true condition
        describe(`${target.toUpperCase()}-should be true`, ()=>{
            currentCompareType.forEach((value)=>{
                it(`${String(value)}`, ()=>{
                    equal(resolvedMethod(value), true);
                });
            });
        });
        // false condition
        Object.entries(cachedComparedType).forEach(([type, toBeCompared])=>{
            if (type !== target) {
                toBeCompared.forEach((item)=>{
                    it(`${item}`, ()=>{
                        equal(resolvedMethod(item), false);
                    });
                });
            }
        })
    });
}