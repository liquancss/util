import {equal} from "assert";
import { isUndef, isPromise, isThenable } from "../../src/index";
describe("isUndef", ()=>{
    it("isPromise-1", ()=>{
        equal(isPromise(new Promise(()=>{})), true);
    });
    it("isPromise-2", ()=>{
        equal(isPromise(Promise.resolve()), true);
    });
    it("isPromise-3", ()=>{
        equal(isPromise({then: function(){}}), true);
    });
    it("isPromise-4", ()=>{
        equal(isPromise(Object.create({then: function(){}})), false);
    });
    it("isPromise-5", ()=>{
        equal(isPromise({}), false);
    });
    it("isPromise-6", ()=>{
        equal(isPromise([]), false);
    });
    it("isPromise-7", ()=>{
        equal(isThenable({}), false);
    });
    it("isPromise-8", ()=>{
        equal(isThenable({then(){}}), true);
    });
}); 