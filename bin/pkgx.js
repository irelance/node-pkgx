#!/usr/bin/env node
const spawn = require('./spawn');
switch (process.platform) {
    case 'win32':
        spawn('pkgx-win-x86.exe', false);
        break;
    case 'linux':
        spawn('pkgx-linux-x64', false);
        break;
    case 'darwin':
        spawn('pkgx-macos-x64', false);
        break;
}
