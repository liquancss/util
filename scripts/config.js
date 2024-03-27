// refer to https://github.com/vuejs/vue/blob/main/scripts/config.js
const ts = require("@rollup/plugin-typescript");
const terser = require("rollup-plugin-terser");
const {resolve} = require("path");
const buildEntryPath = resolve(__dirname, "../src/index.ts");

const builds = {
    // commonjs
    "commonjs-dev":{
        entry: buildEntryPath,
        dest: resolve(__dirname, "../dist/util.common.dev.js"),
        format: "cjs",
        env: "development"
    },
    "commonjs-prod":{
        entry: buildEntryPath,
        dest: resolve(__dirname, "../dist/util.common.prod.js"),
        format: "cjs",
        env: "production"
    },
    // es6 import export
    "esm-dev": {
        entry: buildEntryPath,
        dest: resolve(__dirname, "../dist/util.esm.js"),
        format: "es",
        env: "development"
    },
    "esm-prod": {
        entry: buildEntryPath,
        dest: resolve(__dirname, "../dist/util.esm.min.js"),
        format: "es",
        env: "production"
    },
    //
    "browser-dev": {
        entry: buildEntryPath,
        dest: resolve(__dirname, "../dist/util.min.js"),
        format: "umd",
        env: "production",
        name: "util"
    },
    "browser-prod": {
        entry: buildEntryPath,
        dest: resolve(__dirname, "../dist/util.js"),
        format: "umd",
        env: "development",
        name: "util"
    }
};

function genConfig(buildName){
    const option = builds[buildName];
    const prod = option.env === "production"
    return {
        input: option.entry,
        output: {
            file: option.dest,
            format: option.format,
            name: option.name
        },
        plugins: [
            ts({
                tsconfig: resolve(__dirname, "../", "tsconfig.json")
            }),
            prod && terser.terser()
        ]
    };
}
module.exports.getAllBuilds = ()=>Object.keys(builds).map(genConfig);