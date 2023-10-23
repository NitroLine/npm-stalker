const pkgJsonPath = require.main.paths[0].split('node_modules')[0] + 'package.json';

const json = require(pkgJsonPath);

if (!json.hasOwnProperty('tracer-server')){
    throw Error('No tracer server specified in pacage.json')
}

console.log("Sending package to tracker server")
console.log(`To ${json['tracer-server']}`)