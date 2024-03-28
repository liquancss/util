import {equal} from "assert";
import { isUndef } from "../../src/index";
import { compareType } from "./basecompare";
describe("isUndef", ()=>{
    it("isUndef-1", ()=>{
        equal(isUndef(null), true);
    });
    it("isUndef-2", ()=>{
        equal(isUndef(undefined), true);
    });
}); 