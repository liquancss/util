import {equal} from "assert";
import { isUndef } from "@minsk/util/src";
describe("isUndef", ()=>{
    it("isUndef-1", ()=>{
        equal(isUndef(null), true);
    });
    it("isUndef-2", ()=>{
        equal(isUndef(undefined), true);
    });
});