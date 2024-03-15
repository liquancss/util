import { isString } from "../../src";
import {equal} from "assert"
import { compareType } from "./basecompare";
describe("isString", () => {
    compareType("String");
    compareType("Boolean");
    compareType("Null");
    compareType("Array");
    compareType("Date");
    compareType("Map");
    compareType("Number");
    compareType("RegExp");
});