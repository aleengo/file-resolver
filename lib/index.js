'use strict';

module.exports = fileResolver;

/**
 * 
 * @param {*} name Name of the file to resolve
 * @param {*} dirname name of the directory to search for the file
 */
function fileResolver(name, dirname) {

    if(typeof dirname !== 'string') {
        throw new TypeError(`Expected dirname to be type of string, but got ${typeof dirname}`);
    }
}