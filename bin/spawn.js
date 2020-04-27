const {spawn} = require('child_process');
const path = require('path');

let spawnOptions = {
    stdio: 'inherit',
};
if ('win32' === process.platform) {
    spawnOptions.shell = process.env.ComSpec;
}

/**
 *
 * @param {string}command
 * @param {boolean}wine
 * @returns {Promise<any>}
 */
module.exports = function (command, wine) {
    command = path.resolve(__dirname, command);
    let argv = process.argv.filter((v, i) => i > 1);
    if (wine && 'win32' !== process.platform) {
        argv.unshift(command);
        command = 'wine';
    }
    spawn(command, argv, spawnOptions);
};
