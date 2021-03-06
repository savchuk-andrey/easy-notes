import fs from 'fs';
import path from 'path';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    root:      resolveApp('/'),
    source:    resolveApp('src'),
    buildCode: resolveApp('build_code'),
    build:     resolveApp('build'),
    public:    resolveApp('public'),
};
