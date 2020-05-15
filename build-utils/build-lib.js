const { execSync } = require('child_process');
require('./update-index-file');
execSync('vue-cli-service build --target lib --name indicium-components ./src/index.js');
