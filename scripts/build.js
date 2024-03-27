const {getAllBuilds} = require("./config");
const rollup = require("rollup");
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const chalk = require("chalk");

const builds = getAllBuilds();
build(builds);

async function build(builds){
    for (const build of builds){
      await buildByConfig(build);
    }
    
}
async function writeOutputFile(filePath, code) {  
    if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true })
    }
    await fsPromise.writeFile(filePath, code);  
}  
function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}
function buildByConfig(config){
    const {file} = config.output;
    rollup.rollup(config)
        .then(bundle=>bundle.generate(config.output))
        .then(generated => {  
            for (const chunk of generated.output) {  
              const code = chunk.code || chunk.source;
              writeOutputFile(file, code)  
                .then(() => {  
                  console.log(chalk.cyanBright(path.relative(process.cwd(), file)+`(${getSize(code)})`));  
                })  
                .catch(err => {  
                  console.error(`Error writing file ${file}:`, err);  
                });  
            }  
          })  
          .catch(err => {  
            console.error('Build failed:', err);  
          });  
}