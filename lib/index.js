'use strict';

const path = require('path');
const realpathSync = require('fs').realpathSync;

module.exports = fileResolver;

/**
 * 
 * @param {*} name Name of the file to resolve
 * @param {*} dirname name of the directory to search for the file
 */

function fileResolver(name, dirname) {

    if(dirname && typeof dirname !== 'string') {
        throw new TypeError(`Expected \`dirname\` to be type of \`string\`, but got ${typeof dirname}`);
    }

    let _dirname = undefined;
    let _filename = undefined;
    try {
        _dirname = realpathSync(dirname);
    } catch (e) {
        throw e;
    }
    console.log('_dirname', _dirname);

    try {
        _filename = realpathSync(path.join(_dirname, name));
    } catch (e) {
        throw e;
    }

    console.log('filename', _filename);


}