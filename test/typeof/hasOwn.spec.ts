import {equal} from "assert";
import { hasOwn } from "../../src/index";
import { compareType } from "./basecompare";
describe("hasOwn", ()=>{
    it("hasOwn-1", ()=>{
        equal(hasOwn({}, "toString"), false);
    });
    it("hasOwn-2", ()=>{
        equal(hasOwn({aa: 1}, "aa"), true);
    });
    it("hasOwn-3", ()=>{
        equal(hasOwn({toString: 1}, "toString"), true);
    });
}); 