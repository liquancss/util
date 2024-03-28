import {equal} from "assert";
import { isArrayLike } from "../../src/index";
import { compareType } from "./basecompare";
describe("isArrayLike", ()=>{
    it("isArrayLike-1", ()=>{
        equal(isArrayLike({}), false);
    });
    it("isArrayLike-2", ()=>{
        equal(isArrayLike({aa: 1}), false);
    });
    it("isArrayLike-3", ()=>{
        equal(isArrayLike([]), false);
    });
    it("isArrayLike-4", ()=>{
        equal(isArrayLike({length: 0}), true);
    });
}); 