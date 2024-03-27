const semver = require("semver");
const { prompt } = require("enquirer")
const chalk = require("chalk");
const execa = require("execa")
const {resolve} = require("path");
const fs = require("fs");

const currentVersion = require("../package.json").version;

const versionIncrements = [
    "patch",
    "minor",
    "major"
];

function run(command, args, options){
    return execa(command, args, {"stdio": "inherit", ...options})
}
function inc(which){
    return semver.inc(currentVersion, which);
}
function step(msg){
    return console.log(chalk.cyan(msg));
}
function updatePackage(targetVersion){
    const packageJsonPath = resolve(__dirname, "../package.json");
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
    pkg.version = targetVersion;
    fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));
}
async function main(){
    // patch (1.0.1)
    const { release } = await prompt({
        type: "select",
        name: "release",
        message: "Select release type",
        choices: versionIncrements.map(i => `${i} (${inc(i)})`)
    });
    const targetVersion = release.match(/\((.*)\)/)[1];

    const {yes} = await prompt({
        type: "confirm",
        name: "yes",
        message: `Release v${targetVersion}, Confirm?`
    })
    if (!yes)return;

    step("running test")
    await run("npm", ["run", "test"]);

    step("running types");

    await run("npm", ["run", "types"]);

    step("running build dist");

    await run("npm", ["run", "build"]);

    step("updating package.json");

    updatePackage(targetVersion);


    
    // commit to git

    // publish to npm

}
async function commit(){
    const {stdout} = await run("git", ["diff"], { stdio: 'pipe' });
    if (stdout){
        await run("git", ["add", "-A"]);
        await run("git", ["commit", "-m", `release(1.0.0)`])
    }else{
        console.log(chalk.red("no changes"))
    }
}
async function publishPackage(targetVersion){
    /*
     PUT https://registry.npmjs.org/@minsk%2futil - Cannot publish over previously published version "1.0.0".
    */
    await run("npm", ["publish", "--access", "public"], {"stdio": "pipe"});
    console.log(chalk.green(`Successfully release v${targetVersion}`))
}
async function test(){
   await commit();
   await publishPackage(targetVersion)
    
}
test()
// main();