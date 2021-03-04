/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CONSTANTS/index.ts":
/*!********************************!*\
  !*** ./src/CONSTANTS/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAMESPACE": () => (/* binding */ NAMESPACE),
/* harmony export */   "HOME_LOG_DIRECTORY": () => (/* binding */ HOME_LOG_DIRECTORY),
/* harmony export */   "REGEX_AUDIO_FILE_EXTENSION": () => (/* binding */ REGEX_AUDIO_FILE_EXTENSION)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! os */ "os");
/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A namespace to use in output/data files.
 *
 * @var {[type]}
 */
const NAMESPACE = "AudioFileHelpers";
/**
 * A directory in the user's home folder to log to.
 *
 * @var {string}
 */
const HOME_LOG_DIRECTORY = path__WEBPACK_IMPORTED_MODULE_0___default().resolve((0,os__WEBPACK_IMPORTED_MODULE_1__.homedir)(), '.logs');
/**
 * A RegExp that checks for common audio file extensions.
 *
 * @var {RegExp}
 */
const REGEX_AUDIO_FILE_EXTENSION = /\.(mp3|aiff?|wav|flac|m4a)$/;


/***/ }),

/***/ "./src/lib/isDirectory.ts":
/*!********************************!*\
  !*** ./src/lib/isDirectory.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDirectory": () => (/* binding */ isDirectory)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The {filepath} refers to a directory.
 *
 * @param   {string}   filepath
 *
 * @return  {boolean}
 */
const isDirectory = (filepath) => ((0,fs__WEBPACK_IMPORTED_MODULE_0__.existsSync)(filepath) && (0,fs__WEBPACK_IMPORTED_MODULE_0__.lstatSync)(filepath).isDirectory());


/***/ }),

/***/ "./src/lib/listAudioFiles.ts":
/*!***********************************!*\
  !*** ./src/lib/listAudioFiles.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listAudioFiles": () => (/* binding */ listAudioFiles)
/* harmony export */ });
/* harmony import */ var _lib_reduceDirectoriesToFiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/reduceDirectoriesToFiles */ "./src/lib/reduceDirectoriesToFiles.ts");

/**
* List all audio files found in a collection of directories.
*
* @param   {string[]}  dirs
*
* @return  {string[]}
*/
const listAudioFiles = (dirs) => dirs
    .reduce(_lib_reduceDirectoriesToFiles__WEBPACK_IMPORTED_MODULE_0__.reduceDirectoriesToFiles, []);


/***/ }),

/***/ "./src/lib/listSubDirectories.ts":
/*!***************************************!*\
  !*** ./src/lib/listSubDirectories.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listSubDirectories": () => (/* binding */ listSubDirectories)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_isDirectory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/isDirectory */ "./src/lib/isDirectory.ts");


const cwd = process.cwd();

/**
 * Get a list of every sub-directory contained
 * within a {root} directory.
 *
 * @param   {string}  root
 *
 * @return  {string[]}
 */
const listSubDirectories = (root = cwd) => {
    if (!(0,fs__WEBPACK_IMPORTED_MODULE_0__.existsSync)(root)) {
        return [];
    }
    const contents = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync)(root);
    return contents.reduce((directories, dir) => {
        const current = (0,path__WEBPACK_IMPORTED_MODULE_1__.resolve)(root, dir);
        if (!(0,_lib_isDirectory__WEBPACK_IMPORTED_MODULE_2__.isDirectory)(current)) {
            return directories;
        }
        return [
            ...directories,
            current,
            ...listSubDirectories(current)
        ];
    }, []);
};


/***/ }),

/***/ "./src/lib/matchMetaDataFromFileName.ts":
/*!**********************************************!*\
  !*** ./src/lib/matchMetaDataFromFileName.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchMetaDataFromFileName": () => (/* binding */ matchMetaDataFromFileName)
/* harmony export */ });
/**
 * RegExp patterns for identifying certain
 * metadata from a string value.
 *
 * @var {AudioTagMeta}
 */
const patterns = {
    trackNumber: '\\d{1,2}',
    artist: '[A-Za-z0-9, ]*',
    title: '[A-Za-z0-9,()"\' ]*',
    key: '\\d{1,2}[AB]',
    bpm: '\\d{2,3}',
    separator: '\\s?-\\s?',
};
/**
 * Named, optional groups for each RegExp pattern.
 */
const patternRegExpGroups = Object.entries(patterns)
    .reduce((parts, [key, pattern]) => ([
    ...parts,
    key !== 'separator' ? `(?<${key}>${pattern})?` : `(${pattern})?`
]), []);
/**
 * Pattern for matching string separators.
 */
const separator = String(patternRegExpGroups.pop());
/**
 * Regex should match types of metadata in order:
 * {trackNumber} - {artist} - {title} - {key} - {bpm}
 */
const trackTagMatch = new RegExp(`^${patternRegExpGroups.join(separator).trim().slice(0, -1)}`);
const tagMatchMappers = {
    DEFAULT: (key, value) => [key, (value || '').trim()],
    artist: (key, value) => [
        key,
        value.split(',').map(artist => artist.trim())
            .sort().join(', ')
    ],
    trackNumber: (key, value) => [key, Number.parseInt(value || '0', 10)],
};
/**
 * Checks a file name for any metadata matching this pattern:
 *
 *    "{trackNumber} - {artist} - {title} - {key} - {bpm}"
 *
 * Any matches are parsed to a new AudioTagMeta object.
 *
 * @param   {string}        filepath
 *
 * @return  {AudioTagMeta}
 */
const matchMetaDataFromFileName = (filepath) => {
    const match = filepath.match(trackTagMatch)?.groups || {};
    const entries = Object.entries(match).map(([key, value]) => (tagMatchMappers[key] || tagMatchMappers.DEFAULT)(key, value));
    return Object.fromEntries(entries);
};


/***/ }),

/***/ "./src/lib/reduceDirectoriesToFiles.ts":
/*!*********************************************!*\
  !*** ./src/lib/reduceDirectoriesToFiles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reduceDirectoriesToFiles": () => (/* binding */ reduceDirectoriesToFiles)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @CONSTANTS */ "./src/CONSTANTS/index.ts");


/**
 * Add {current} directory's audio files to a list.
 *
 * @return  {string[]}
 */
const reduceDirectoriesToFiles = (files, current) => {
    const contents = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync)(current)
        .reduce((data, filepath) => {
        if (filepath.match(_CONSTANTS__WEBPACK_IMPORTED_MODULE_1__.REGEX_AUDIO_FILE_EXTENSION)) {
            data.push(filepath);
        }
        return data;
    }, []);
    return ([
        ...files,
        ...contents,
    ]);
};


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_listAudioFiles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lib/listAudioFiles */ "./src/lib/listAudioFiles.ts");
/* harmony import */ var _lib_listSubDirectories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/listSubDirectories */ "./src/lib/listSubDirectories.ts");
/* harmony import */ var _lib_matchMetaDataFromFileName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lib/matchMetaDataFromFileName */ "./src/lib/matchMetaDataFromFileName.ts");
/**
 * Find Duplicate Tracks
 *
 * This script will check each sub-directory in the
 * current working directory to see if there are audio
 * files with similar names.
 *
 * It extracts any key, bpm and file extensions from
 * file names.
 *
 * Any possible duplicates are logged to stdout.
 *
 */

const cwd = process.cwd();
/* eslint-disable no-console */
/**
 * Log an {item} to console.
 * @param  {any} item
 * @return {stdout}
 */
const log = (item) => console.log((0,util__WEBPACK_IMPORTED_MODULE_0__.inspect)(item, {
    colors: true,
    depth: Infinity,
}));
/* eslint-enable no-console */



const directories = (0,_lib_listSubDirectories__WEBPACK_IMPORTED_MODULE_2__.listSubDirectories)(cwd);
const audiofiles = (0,_lib_listAudioFiles__WEBPACK_IMPORTED_MODULE_1__.listAudioFiles)(directories);
audiofiles.slice(-100).forEach((file) => {
    log(file);
    log((0,_lib_matchMetaDataFromFileName__WEBPACK_IMPORTED_MODULE_3__.matchMetaDataFromFileName)(file));
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy8uL3NyYy9DT05TVEFOVFMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL2lzRGlyZWN0b3J5LnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9saXN0QXVkaW9GaWxlcy50cyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy8uL3NyYy9saWIvbGlzdFN1YkRpcmVjdG9yaWVzLnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9tYXRjaE1ldGFEYXRhRnJvbUZpbGVOYW1lLnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9yZWR1Y2VEaXJlY3Rvcmllc1RvRmlsZXMudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL2V4dGVybmFsIFwib3NcIiIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy9leHRlcm5hbCBcInV0aWxcIiIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2luZGV4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LDZDQUFPLENBQUMsSUFBSSxFQUFFO0lBQzdELE1BQU0sRUFBRSxJQUFJO0lBQ1osS0FBSyxFQUFFLFFBQVE7Q0FDaEIsQ0FBQyxDQUFDLENBQUM7QUFDSiw4QkFBOEI7QUFHdUI7QUFDUTtBQUNjO0FBRzNFLE1BQU0sV0FBVyxHQUFHLDJFQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLE1BQU0sVUFBVSxHQUFHLG1FQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFL0MsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO0lBQ3RDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNWLEdBQUcsQ0FBQyx5RkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgaG9tZWRpciB9IGZyb20gJ29zJ1xuXG5cbi8qKlxuICogQSBuYW1lc3BhY2UgdG8gdXNlIGluIG91dHB1dC9kYXRhIGZpbGVzLlxuICpcbiAqIEB2YXIge1t0eXBlXX1cbiAqL1xuZXhwb3J0IGNvbnN0IE5BTUVTUEFDRSA9IFwiQXVkaW9GaWxlSGVscGVyc1wiO1xuXG4vKipcbiAqIEEgZGlyZWN0b3J5IGluIHRoZSB1c2VyJ3MgaG9tZSBmb2xkZXIgdG8gbG9nIHRvLlxuICpcbiAqIEB2YXIge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEhPTUVfTE9HX0RJUkVDVE9SWSA9IHBhdGgucmVzb2x2ZShob21lZGlyKCksICcubG9ncycpO1xuXG4vKipcbiAqIEEgUmVnRXhwIHRoYXQgY2hlY2tzIGZvciBjb21tb24gYXVkaW8gZmlsZSBleHRlbnNpb25zLlxuICpcbiAqIEB2YXIge1JlZ0V4cH1cbiAqL1xuZXhwb3J0IGNvbnN0IFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OID0gL1xcLihtcDN8YWlmZj98d2F2fGZsYWN8bTRhKSQvO1xuIiwiaW1wb3J0IHtcbiAgZXhpc3RzU3luYyxcbiAgbHN0YXRTeW5jLFxufSBmcm9tICdmcyc7XG5cbi8qKlxuICogVGhlIHtmaWxlcGF0aH0gcmVmZXJzIHRvIGEgZGlyZWN0b3J5LlxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgZmlsZXBhdGhcbiAqXG4gKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzRGlyZWN0b3J5ID0gKGZpbGVwYXRoOiBzdHJpbmcpOiBib29sZWFuID0+IChcbiAgZXhpc3RzU3luYyhmaWxlcGF0aCkgJiYgbHN0YXRTeW5jKGZpbGVwYXRoKS5pc0RpcmVjdG9yeSgpXG4pO1xuIiwiaW1wb3J0IHtcbiAgcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzXG59IGZyb20gJ0BsaWIvcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzJztcbi8qKlxuKiBMaXN0IGFsbCBhdWRpbyBmaWxlcyBmb3VuZCBpbiBhIGNvbGxlY3Rpb24gb2YgZGlyZWN0b3JpZXMuXG4qXG4qIEBwYXJhbSAgIHtzdHJpbmdbXX0gIGRpcnNcbipcbiogQHJldHVybiAge3N0cmluZ1tdfVxuKi9cbmV4cG9ydCBjb25zdCBsaXN0QXVkaW9GaWxlcyA9IChkaXJzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IGRpcnNcbiAgLnJlZHVjZShyZWR1Y2VEaXJlY3Rvcmllc1RvRmlsZXMsIFtdKTtcbiIsImltcG9ydCB7XG4gIGV4aXN0c1N5bmMsXG4gIHJlYWRkaXJTeW5jLFxufSBmcm9tICdmcyc7XG5cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKTtcblxuaW1wb3J0IHsgaXNEaXJlY3RvcnkgfSBmcm9tICdAbGliL2lzRGlyZWN0b3J5JztcblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIGV2ZXJ5IHN1Yi1kaXJlY3RvcnkgY29udGFpbmVkXG4gKiB3aXRoaW4gYSB7cm9vdH0gZGlyZWN0b3J5LlxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICByb290XG4gKlxuICogQHJldHVybiAge3N0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgbGlzdFN1YkRpcmVjdG9yaWVzID0gKHJvb3Q6IHN0cmluZyA9IGN3ZCk6IHN0cmluZ1tdID0+IHtcbiAgaWYgKCFleGlzdHNTeW5jKHJvb3QpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgY29udGVudHMgPSByZWFkZGlyU3luYyhyb290KTtcbiAgcmV0dXJuIGNvbnRlbnRzLnJlZHVjZSgoXG4gICAgZGlyZWN0b3JpZXM6IHN0cmluZ1tdLFxuICAgIGRpcjogc3RyaW5nXG4gICk6IHN0cmluZ1tdID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gcmVzb2x2ZShyb290LCBkaXIpO1xuXG4gICAgaWYgKCFpc0RpcmVjdG9yeShjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGRpcmVjdG9yaWVzO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICAuLi5kaXJlY3RvcmllcyxcbiAgICAgIGN1cnJlbnQsXG4gICAgICAuLi5saXN0U3ViRGlyZWN0b3JpZXMoY3VycmVudClcbiAgICBdO1xuICB9LCBbXSk7XG59O1xuIiwiLyoqXG4gKiBBdWRpbyBmaWxlIG1ldGFkYXRhLCB3aGljaCBtYXkgYmUgcHJlc2VudCBpbiBpdHMgbmFtZS5cbiAqL1xudHlwZSBBdWRpb1RhZ01ldGEgPSB7XG4gIHRyYWNrTnVtYmVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICBhcnRpc3Q/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBrZXk/OiBzdHJpbmc7XG4gIGJwbT86IHN0cmluZztcbiAgc2VwYXJhdG9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBtYXBzIGFuIG9iamVjdCBlbnRyeSdzIHZhbHVlLlxuICovXG50eXBlIEVudHJ5TWFwcGVyRnVuY3Rpb24gPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IChzdHJpbmd8bnVtYmVyKVtdO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBlbnRyeSBtYXBwZXJzLCBpbmNsdWRpbmdcbiAqIGEgZGVmYXVsdCBtYXBwZXIuXG4gKi9cbnR5cGUgRW50cnlNYXBwZXJDb2xsZWN0aW9uID0ge1xuICBERUZBVUxUOiBFbnRyeU1hcHBlckZ1bmN0aW9uO1xuICBba2V5OiBzdHJpbmddOiBFbnRyeU1hcHBlckZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIFJlZ0V4cCBwYXR0ZXJucyBmb3IgaWRlbnRpZnlpbmcgY2VydGFpblxuICogbWV0YWRhdGEgZnJvbSBhIHN0cmluZyB2YWx1ZS5cbiAqXG4gKiBAdmFyIHtBdWRpb1RhZ01ldGF9XG4gKi9cbmNvbnN0IHBhdHRlcm5zOiBSZXF1aXJlZDxBdWRpb1RhZ01ldGE+ID0ge1xuICB0cmFja051bWJlcjogJ1xcXFxkezEsMn0nLFxuICBhcnRpc3Q6ICdbQS1aYS16MC05LCBdKicsXG4gIHRpdGxlOiAnW0EtWmEtejAtOSwoKVwiXFwnIF0qJyxcbiAga2V5OidcXFxcZHsxLDJ9W0FCXScsXG4gIGJwbTonXFxcXGR7MiwzfScsXG4gIHNlcGFyYXRvcjogJ1xcXFxzPy1cXFxccz8nLFxufTtcblxuLyoqXG4gKiBOYW1lZCwgb3B0aW9uYWwgZ3JvdXBzIGZvciBlYWNoIFJlZ0V4cCBwYXR0ZXJuLlxuICovXG5jb25zdCBwYXR0ZXJuUmVnRXhwR3JvdXBzOiBzdHJpbmdbXSA9IE9iamVjdC5lbnRyaWVzKHBhdHRlcm5zKVxuICAucmVkdWNlKChwYXJ0czogc3RyaW5nW10sIFtrZXksIHBhdHRlcm5dKSA9PiAoW1xuICAgIC4uLnBhcnRzLFxuICAgIGtleSAhPT0gJ3NlcGFyYXRvcicgPyBgKD88JHtrZXl9PiR7cGF0dGVybn0pP2AgOiBgKCR7cGF0dGVybn0pP2BcbiAgXSksIFtdKTtcblxuLyoqXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyBzdHJpbmcgc2VwYXJhdG9ycy5cbiAqL1xuY29uc3Qgc2VwYXJhdG9yID0gU3RyaW5nKHBhdHRlcm5SZWdFeHBHcm91cHMucG9wKCkpO1xuXG4vKipcbiAqIFJlZ2V4IHNob3VsZCBtYXRjaCB0eXBlcyBvZiBtZXRhZGF0YSBpbiBvcmRlcjpcbiAqIHt0cmFja051bWJlcn0gLSB7YXJ0aXN0fSAtIHt0aXRsZX0gLSB7a2V5fSAtIHticG19XG4gKi9cbmNvbnN0IHRyYWNrVGFnTWF0Y2ggPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJuUmVnRXhwR3JvdXBzLmpvaW4oc2VwYXJhdG9yKS50cmltKCkuc2xpY2UoMCwgLTEpfWApO1xuXG5jb25zdCB0YWdNYXRjaE1hcHBlcnM6IEVudHJ5TWFwcGVyQ29sbGVjdGlvbiA9IHtcbiAgREVGQVVMVDogKGtleSwgdmFsdWUpID0+IFtrZXksICh2YWx1ZSB8fCAnJykudHJpbSgpXSxcbiAgYXJ0aXN0OiAoa2V5LCB2YWx1ZSkgPT4gW1xuICAgIGtleSxcbiAgICB2YWx1ZS5zcGxpdCgnLCcpLm1hcChhcnRpc3QgPT4gYXJ0aXN0LnRyaW0oKSlcbiAgICAgIC5zb3J0KCkuam9pbignLCAnKVxuICBdLFxuICB0cmFja051bWJlcjogKGtleSwgdmFsdWUpID0+IFtrZXksIE51bWJlci5wYXJzZUludCh2YWx1ZSB8fCAnMCcsIDEwKV0sXG59O1xuXG4vKipcbiAqIENoZWNrcyBhIGZpbGUgbmFtZSBmb3IgYW55IG1ldGFkYXRhIG1hdGNoaW5nIHRoaXMgcGF0dGVybjpcbiAqXG4gKiAgICBcInt0cmFja051bWJlcn0gLSB7YXJ0aXN0fSAtIHt0aXRsZX0gLSB7a2V5fSAtIHticG19XCJcbiAqXG4gKiBBbnkgbWF0Y2hlcyBhcmUgcGFyc2VkIHRvIGEgbmV3IEF1ZGlvVGFnTWV0YSBvYmplY3QuXG4gKlxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgIGZpbGVwYXRoXG4gKlxuICogQHJldHVybiAge0F1ZGlvVGFnTWV0YX1cbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUgPSAoZmlsZXBhdGg6IHN0cmluZyk6IEF1ZGlvVGFnTWV0YSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gZmlsZXBhdGgubWF0Y2godHJhY2tUYWdNYXRjaCk/Lmdyb3VwcyB8fCB7fVxuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobWF0Y2gpLm1hcChcbiAgICAoW2tleSwgdmFsdWVdKSA9PiAodGFnTWF0Y2hNYXBwZXJzW2tleV0gfHwgdGFnTWF0Y2hNYXBwZXJzLkRFRkFVTFQpKGtleSwgdmFsdWUpXG4gICk7XG5cbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhlbnRyaWVzKTtcbn1cbiIsImltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuXG5pbXBvcnQgeyBpc0F1ZGlvRmlsZSB9ZnJvbSAnQGxpYi9pbmRleCc7XG5cbmltcG9ydCB7IFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OIH0gZnJvbSAnQENPTlNUQU5UUyc7XG5cbi8qKlxuICogQWRkIHtjdXJyZW50fSBkaXJlY3RvcnkncyBhdWRpbyBmaWxlcyB0byBhIGxpc3QuXG4gKlxuICogQHJldHVybiAge3N0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzID0gKFxuICBmaWxlczpzdHJpbmdbXSxcbiAgY3VycmVudDogc3RyaW5nXG4pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRzOiBzdHJpbmdbXSA9IHJlYWRkaXJTeW5jKGN1cnJlbnQpXG4gICAgLnJlZHVjZSgoZGF0YTpzdHJpbmdbXSwgZmlsZXBhdGg6c3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICAgICAgaWYgKGZpbGVwYXRoLm1hdGNoKFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OKSkge1xuICAgICAgICBkYXRhLnB1c2goZmlsZXBhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIChbXG4gICAgLi4uZmlsZXMsXG4gICAgLi4uY29udGVudHMsXG4gIF0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogRmluZCBEdXBsaWNhdGUgVHJhY2tzXG4gKlxuICogVGhpcyBzY3JpcHQgd2lsbCBjaGVjayBlYWNoIHN1Yi1kaXJlY3RvcnkgaW4gdGhlXG4gKiBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5IHRvIHNlZSBpZiB0aGVyZSBhcmUgYXVkaW9cbiAqIGZpbGVzIHdpdGggc2ltaWxhciBuYW1lcy5cbiAqXG4gKiBJdCBleHRyYWN0cyBhbnkga2V5LCBicG0gYW5kIGZpbGUgZXh0ZW5zaW9ucyBmcm9tXG4gKiBmaWxlIG5hbWVzLlxuICpcbiAqIEFueSBwb3NzaWJsZSBkdXBsaWNhdGVzIGFyZSBsb2dnZWQgdG8gc3Rkb3V0LlxuICpcbiAqL1xuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnO1xuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyoqXG4gKiBMb2cgYW4ge2l0ZW19IHRvIGNvbnNvbGUuXG4gKiBAcGFyYW0gIHthbnl9IGl0ZW1cbiAqIEByZXR1cm4ge3N0ZG91dH1cbiAqL1xuY29uc3QgbG9nID0gKGl0ZW06IHVua25vd24pOiB2b2lkID0+IGNvbnNvbGUubG9nKGluc3BlY3QoaXRlbSwge1xuICBjb2xvcnM6IHRydWUsXG4gIGRlcHRoOiBJbmZpbml0eSxcbn0pKTtcbi8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbmltcG9ydCB7IGxpc3RBdWRpb0ZpbGVzIH0gZnJvbSAnQGxpYi9saXN0QXVkaW9GaWxlcyc7XG5pbXBvcnQgeyBsaXN0U3ViRGlyZWN0b3JpZXMgfSBmcm9tICdAbGliL2xpc3RTdWJEaXJlY3Rvcmllcyc7XG5pbXBvcnQgeyBtYXRjaE1ldGFEYXRhRnJvbUZpbGVOYW1lIH0gZnJvbSAnQGxpYi9tYXRjaE1ldGFEYXRhRnJvbUZpbGVOYW1lJztcblxuXG5jb25zdCBkaXJlY3RvcmllcyA9IGxpc3RTdWJEaXJlY3Rvcmllcyhjd2QpO1xuY29uc3QgYXVkaW9maWxlcyA9IGxpc3RBdWRpb0ZpbGVzKGRpcmVjdG9yaWVzKTtcblxuYXVkaW9maWxlcy5zbGljZSgtMTAwKS5mb3JFYWNoKChmaWxlKSA9PiB7XG4gIGxvZyhmaWxlKTtcbiAgbG9nKG1hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUoZmlsZSkpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9