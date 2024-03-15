const {getAllBuilds} = require("./config");
const rollup = require("rollup");
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
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
function buildByConfig(config){
    const {file} = config.output;
    rollup.rollup(config)
        .then(bundle=>bundle.generate(config.output))
        .then(generated => {  
            for (const chunk of generated.output) {  
              writeOutputFile(file, chunk.code || chunk.source)  
                .then(() => {  
                  console.log(`File ${file} written`);  
                })  
                .catch(err => {  
                  console.error(`Error writing file ${file}:`, err);  
                });  
            }  
          })  
          .catch(err => {  
            // 处理任何在构建过程中出现的错误  
            console.error('Build failed:', err);  
          });  
}