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

/***/ "./src/lib/log.ts":
/*!************************!*\
  !*** ./src/lib/log.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => (/* binding */ log)
/* harmony export */ });
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_0__);

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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

/**
 * RegExp patterns for identifying certain
 * metadata from a string value.
 *
 * @var {AudioTagMeta}
 */
const patterns = {
    trackNumber: '\\d{1,2}',
    artist: '[A-Za-z0-9,& ]*',
    title: '[A-Za-z0-9,()"\' ]*',
    key: '\\d{1,2}[AB]',
    bpm: '\\d{2,3}',
    separator: '\\s{0,}-\\s{0,}',
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
    const match = (0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(filepath).match(trackTagMatch)?.groups || {};
    const entries = Object.entries(match).map(([key, value]) => value ? (tagMatchMappers[key] || tagMatchMappers.DEFAULT)(key, value) : [key, value]);
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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @CONSTANTS */ "./src/CONSTANTS/index.ts");



/**
 * Add {current} directory's audio files to a list.
 *
 * @return  {string[]}
 */
const reduceDirectoriesToFiles = (files, current) => {
    const contents = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync)(current)
        .reduce((data, filepath) => {
        if (filepath.match(_CONSTANTS__WEBPACK_IMPORTED_MODULE_2__.REGEX_AUDIO_FILE_EXTENSION)) {
            data.push((0,path__WEBPACK_IMPORTED_MODULE_1__.resolve)(current, filepath));
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
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lib/log */ "./src/lib/log.ts");
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




const directories = (0,_lib_listSubDirectories__WEBPACK_IMPORTED_MODULE_2__.listSubDirectories)(cwd);
const audiofiles = (0,_lib_listAudioFiles__WEBPACK_IMPORTED_MODULE_1__.listAudioFiles)(directories);
const result = {
    noMatch: [],
    tracks: {},
    dupes: [],
};
audiofiles.forEach((file) => {
    const match = (0,_lib_matchMetaDataFromFileName__WEBPACK_IMPORTED_MODULE_3__.matchMetaDataFromFileName)(file);
    if (Object.keys(match).length === 0) {
        result.noMatch.push(file);
        return;
    }
    const key = `${match.artist}::${match.title}`;
    result.tracks[key] = result.tracks[key] || [match];
    result.tracks[key].push(file);
});
(0,_lib_log__WEBPACK_IMPORTED_MODULE_0__.log)(Object.values(result.tracks).filter((arr) => arr.length > 2));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy8uL3NyYy9DT05TVEFOVFMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL2lzRGlyZWN0b3J5LnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9saXN0QXVkaW9GaWxlcy50cyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy8uL3NyYy9saWIvbGlzdFN1YkRpcmVjdG9yaWVzLnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9sb2cudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL21hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL3JlZHVjZURpcmVjdG9yaWVzVG9GaWxlcy50cyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDSTtBQUc1Qjs7OztHQUlHO0FBQ0ksTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUM7QUFFNUM7Ozs7R0FJRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsbURBQVksQ0FBQywyQ0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFbkU7Ozs7R0FJRztBQUNJLE1BQU0sMEJBQTBCLEdBQUcsNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEI1RDtBQUVaOzs7Ozs7R0FNRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBZ0IsRUFBVyxFQUFFLENBQUMsQ0FDeEQsOENBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSw2Q0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUMxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWnFDO0FBQ3ZDOzs7Ozs7RUFNRTtBQUNLLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBYyxFQUFZLEVBQUUsQ0FBQyxJQUFJO0tBQzdELE1BQU0sQ0FBQyxtRkFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7QUFFbUI7QUFFL0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXFCO0FBRS9DOzs7Ozs7O0dBT0c7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBZSxHQUFHLEVBQVksRUFBRTtJQUNqRSxJQUFJLENBQUMsOENBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTSxRQUFRLEdBQUcsK0NBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDckIsV0FBcUIsRUFDckIsR0FBVyxFQUNELEVBQUU7UUFDWixN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QyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFFSCw2Q0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgaG9tZWRpciB9IGZyb20gJ29zJ1xuXG5cbi8qKlxuICogQSBuYW1lc3BhY2UgdG8gdXNlIGluIG91dHB1dC9kYXRhIGZpbGVzLlxuICpcbiAqIEB2YXIge1t0eXBlXX1cbiAqL1xuZXhwb3J0IGNvbnN0IE5BTUVTUEFDRSA9IFwiQXVkaW9GaWxlSGVscGVyc1wiO1xuXG4vKipcbiAqIEEgZGlyZWN0b3J5IGluIHRoZSB1c2VyJ3MgaG9tZSBmb2xkZXIgdG8gbG9nIHRvLlxuICpcbiAqIEB2YXIge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEhPTUVfTE9HX0RJUkVDVE9SWSA9IHBhdGgucmVzb2x2ZShob21lZGlyKCksICcubG9ncycpO1xuXG4vKipcbiAqIEEgUmVnRXhwIHRoYXQgY2hlY2tzIGZvciBjb21tb24gYXVkaW8gZmlsZSBleHRlbnNpb25zLlxuICpcbiAqIEB2YXIge1JlZ0V4cH1cbiAqL1xuZXhwb3J0IGNvbnN0IFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OID0gL1xcLihtcDN8YWlmZj98d2F2fGZsYWN8bTRhKSQvO1xuIiwiaW1wb3J0IHtcbiAgZXhpc3RzU3luYyxcbiAgbHN0YXRTeW5jLFxufSBmcm9tICdmcyc7XG5cbi8qKlxuICogVGhlIHtmaWxlcGF0aH0gcmVmZXJzIHRvIGEgZGlyZWN0b3J5LlxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgZmlsZXBhdGhcbiAqXG4gKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzRGlyZWN0b3J5ID0gKGZpbGVwYXRoOiBzdHJpbmcpOiBib29sZWFuID0+IChcbiAgZXhpc3RzU3luYyhmaWxlcGF0aCkgJiYgbHN0YXRTeW5jKGZpbGVwYXRoKS5pc0RpcmVjdG9yeSgpXG4pO1xuIiwiaW1wb3J0IHtcbiAgcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzXG59IGZyb20gJ0BsaWIvcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzJztcbi8qKlxuKiBMaXN0IGFsbCBhdWRpbyBmaWxlcyBmb3VuZCBpbiBhIGNvbGxlY3Rpb24gb2YgZGlyZWN0b3JpZXMuXG4qXG4qIEBwYXJhbSAgIHtzdHJpbmdbXX0gIGRpcnNcbipcbiogQHJldHVybiAge3N0cmluZ1tdfVxuKi9cbmV4cG9ydCBjb25zdCBsaXN0QXVkaW9GaWxlcyA9IChkaXJzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IGRpcnNcbiAgLnJlZHVjZShyZWR1Y2VEaXJlY3Rvcmllc1RvRmlsZXMsIFtdKTtcbiIsImltcG9ydCB7XG4gIGV4aXN0c1N5bmMsXG4gIHJlYWRkaXJTeW5jLFxufSBmcm9tICdmcyc7XG5cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKTtcblxuaW1wb3J0IHsgaXNEaXJlY3RvcnkgfSBmcm9tICdAbGliL2lzRGlyZWN0b3J5JztcblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIGV2ZXJ5IHN1Yi1kaXJlY3RvcnkgY29udGFpbmVkXG4gKiB3aXRoaW4gYSB7cm9vdH0gZGlyZWN0b3J5LlxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICByb290XG4gKlxuICogQHJldHVybiAge3N0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgbGlzdFN1YkRpcmVjdG9yaWVzID0gKHJvb3Q6IHN0cmluZyA9IGN3ZCk6IHN0cmluZ1tdID0+IHtcbiAgaWYgKCFleGlzdHNTeW5jKHJvb3QpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgY29udGVudHMgPSByZWFkZGlyU3luYyhyb290KTtcbiAgcmV0dXJuIGNvbnRlbnRzLnJlZHVjZSgoXG4gICAgZGlyZWN0b3JpZXM6IHN0cmluZ1tdLFxuICAgIGRpcjogc3RyaW5nXG4gICk6IHN0cmluZ1tdID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gcmVzb2x2ZShyb290LCBkaXIpO1xuXG4gICAgaWYgKCFpc0RpcmVjdG9yeShjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGRpcmVjdG9yaWVzO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICAuLi5kaXJlY3RvcmllcyxcbiAgICAgIGN1cnJlbnQsXG4gICAgICAuLi5saXN0U3ViRGlyZWN0b3JpZXMoY3VycmVudClcbiAgICBdO1xuICB9LCBbXSk7XG59O1xuIiwiaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKipcbiAqIExvZyBhbiB7aXRlbX0gdG8gY29uc29sZS5cbiAqIEBwYXJhbSAge2FueX0gaXRlbVxuICogQHJldHVybiB7c3Rkb3V0fVxuICovXG5leHBvcnQgY29uc3QgbG9nID0gKGl0ZW06IHVua25vd24pOiB2b2lkID0+IGNvbnNvbGUubG9nKGluc3BlY3QoaXRlbSwge1xuICBjb2xvcnM6IHRydWUsXG4gIGRlcHRoOiBJbmZpbml0eSxcbn0pKTtcbiIsImltcG9ydCB7IGJhc2VuYW1lIH0gZnJvbSAncGF0aCc7XG4vKipcbiAqIEF1ZGlvIGZpbGUgbWV0YWRhdGEsIHdoaWNoIG1heSBiZSBwcmVzZW50IGluIGl0cyBuYW1lLlxuICovXG5leHBvcnQgdHlwZSBBdWRpb1RhZ01ldGEgPSB7XG4gIHRyYWNrTnVtYmVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICBhcnRpc3Q/OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBrZXk/OiBzdHJpbmc7XG4gIGJwbT86IHN0cmluZztcbiAgc2VwYXJhdG9yPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBtYXBzIGFuIG9iamVjdCBlbnRyeSdzIHZhbHVlLlxuICovXG5leHBvcnQgdHlwZSBFbnRyeU1hcHBlckZ1bmN0aW9uID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiAoc3RyaW5nfG51bWJlcilbXTtcblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2YgZW50cnkgbWFwcGVycywgaW5jbHVkaW5nXG4gKiBhIGRlZmF1bHQgbWFwcGVyLlxuICovXG5leHBvcnQgdHlwZSBFbnRyeU1hcHBlckNvbGxlY3Rpb24gPSB7XG4gIERFRkFVTFQ6IEVudHJ5TWFwcGVyRnVuY3Rpb247XG4gIFtrZXk6IHN0cmluZ106IEVudHJ5TWFwcGVyRnVuY3Rpb247XG59XG5cbi8qKlxuICogUmVnRXhwIHBhdHRlcm5zIGZvciBpZGVudGlmeWluZyBjZXJ0YWluXG4gKiBtZXRhZGF0YSBmcm9tIGEgc3RyaW5nIHZhbHVlLlxuICpcbiAqIEB2YXIge0F1ZGlvVGFnTWV0YX1cbiAqL1xuY29uc3QgcGF0dGVybnM6IFJlcXVpcmVkPEF1ZGlvVGFnTWV0YT4gPSB7XG4gIHRyYWNrTnVtYmVyOiAnXFxcXGR7MSwyfScsXG4gIGFydGlzdDogJ1tBLVphLXowLTksJiBdKicsXG4gIHRpdGxlOiAnW0EtWmEtejAtOSwoKVwiXFwnIF0qJyxcbiAga2V5OidcXFxcZHsxLDJ9W0FCXScsXG4gIGJwbTonXFxcXGR7MiwzfScsXG4gIHNlcGFyYXRvcjogJ1xcXFxzezAsfS1cXFxcc3swLH0nLFxufTtcblxuLyoqXG4gKiBOYW1lZCwgb3B0aW9uYWwgZ3JvdXBzIGZvciBlYWNoIFJlZ0V4cCBwYXR0ZXJuLlxuICovXG5jb25zdCBwYXR0ZXJuUmVnRXhwR3JvdXBzOiBzdHJpbmdbXSA9IE9iamVjdC5lbnRyaWVzKHBhdHRlcm5zKVxuICAucmVkdWNlKChwYXJ0czogc3RyaW5nW10sIFtrZXksIHBhdHRlcm5dKSA9PiAoW1xuICAgIC4uLnBhcnRzLFxuICAgIGtleSAhPT0gJ3NlcGFyYXRvcicgPyBgKD88JHtrZXl9PiR7cGF0dGVybn0pP2AgOiBgKCR7cGF0dGVybn0pP2BcbiAgXSksIFtdKTtcblxuLyoqXG4gKiBQYXR0ZXJuIGZvciBtYXRjaGluZyBzdHJpbmcgc2VwYXJhdG9ycy5cbiAqL1xuY29uc3Qgc2VwYXJhdG9yID0gU3RyaW5nKHBhdHRlcm5SZWdFeHBHcm91cHMucG9wKCkpO1xuXG4vKipcbiAqIFJlZ2V4IHNob3VsZCBtYXRjaCB0eXBlcyBvZiBtZXRhZGF0YSBpbiBvcmRlcjpcbiAqIHt0cmFja051bWJlcn0gLSB7YXJ0aXN0fSAtIHt0aXRsZX0gLSB7a2V5fSAtIHticG19XG4gKi9cbmNvbnN0IHRyYWNrVGFnTWF0Y2ggPSBuZXcgUmVnRXhwKGBeJHtwYXR0ZXJuUmVnRXhwR3JvdXBzLmpvaW4oc2VwYXJhdG9yKS50cmltKCkuc2xpY2UoMCwgLTEpfWApO1xuXG5jb25zdCB0YWdNYXRjaE1hcHBlcnM6IEVudHJ5TWFwcGVyQ29sbGVjdGlvbiA9IHtcbiAgREVGQVVMVDogKGtleSwgdmFsdWUpID0+IFtrZXksICh2YWx1ZSB8fCAnJykudHJpbSgpXSxcbiAgYXJ0aXN0OiAoa2V5LCB2YWx1ZSkgPT4gW1xuICAgIGtleSxcbiAgICB2YWx1ZS5zcGxpdCgnLCcpLm1hcChhcnRpc3QgPT4gYXJ0aXN0LnRyaW0oKSlcbiAgICAgIC5zb3J0KCkuam9pbignLCAnKVxuICBdLFxuICB0cmFja051bWJlcjogKGtleSwgdmFsdWUpID0+IFtrZXksIE51bWJlci5wYXJzZUludCh2YWx1ZSB8fCAnMCcsIDEwKV0sXG59O1xuXG4vKipcbiAqIENoZWNrcyBhIGZpbGUgbmFtZSBmb3IgYW55IG1ldGFkYXRhIG1hdGNoaW5nIHRoaXMgcGF0dGVybjpcbiAqXG4gKiAgICBcInt0cmFja051bWJlcn0gLSB7YXJ0aXN0fSAtIHt0aXRsZX0gLSB7a2V5fSAtIHticG19XCJcbiAqXG4gKiBBbnkgbWF0Y2hlcyBhcmUgcGFyc2VkIHRvIGEgbmV3IEF1ZGlvVGFnTWV0YSBvYmplY3QuXG4gKlxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgIGZpbGVwYXRoXG4gKlxuICogQHJldHVybiAge0F1ZGlvVGFnTWV0YX1cbiAqL1xuZXhwb3J0IGNvbnN0IG1hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUgPSAoZmlsZXBhdGg6IHN0cmluZyk6IEF1ZGlvVGFnTWV0YSA9PiB7XG4gIGNvbnN0IG1hdGNoID0gYmFzZW5hbWUoZmlsZXBhdGgpLm1hdGNoKHRyYWNrVGFnTWF0Y2gpPy5ncm91cHMgfHwge31cbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG1hdGNoKS5tYXAoXG4gICAgKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUgPyAodGFnTWF0Y2hNYXBwZXJzW2tleV0gfHwgdGFnTWF0Y2hNYXBwZXJzLkRFRkFVTFQpKGtleSwgdmFsdWUpIDogW2tleSwgdmFsdWVdXG4gICk7XG5cbiAgcmV0dXJuIE9iamVjdC5mcm9tRW50cmllcyhlbnRyaWVzKTtcbn1cbiIsImltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBpc0F1ZGlvRmlsZSB9ZnJvbSAnQGxpYi9pbmRleCc7XG5cbmltcG9ydCB7IFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OIH0gZnJvbSAnQENPTlNUQU5UUyc7XG5cbi8qKlxuICogQWRkIHtjdXJyZW50fSBkaXJlY3RvcnkncyBhdWRpbyBmaWxlcyB0byBhIGxpc3QuXG4gKlxuICogQHJldHVybiAge3N0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzID0gKFxuICBmaWxlczpzdHJpbmdbXSxcbiAgY3VycmVudDogc3RyaW5nXG4pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRzOiBzdHJpbmdbXSA9IHJlYWRkaXJTeW5jKGN1cnJlbnQpXG4gICAgLnJlZHVjZSgoZGF0YTpzdHJpbmdbXSwgZmlsZXBhdGg6c3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICAgICAgaWYgKGZpbGVwYXRoLm1hdGNoKFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OKSkge1xuICAgICAgICBkYXRhLnB1c2gocmVzb2x2ZShjdXJyZW50LCBmaWxlcGF0aCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIChbXG4gICAgLi4uZmlsZXMsXG4gICAgLi4uY29udGVudHMsXG4gIF0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogRmluZCBEdXBsaWNhdGUgVHJhY2tzXG4gKlxuICogVGhpcyBzY3JpcHQgd2lsbCBjaGVjayBlYWNoIHN1Yi1kaXJlY3RvcnkgaW4gdGhlXG4gKiBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5IHRvIHNlZSBpZiB0aGVyZSBhcmUgYXVkaW9cbiAqIGZpbGVzIHdpdGggc2ltaWxhciBuYW1lcy5cbiAqXG4gKiBJdCBleHRyYWN0cyBhbnkga2V5LCBicG0gYW5kIGZpbGUgZXh0ZW5zaW9ucyBmcm9tXG4gKiBmaWxlIG5hbWVzLlxuICpcbiAqIEFueSBwb3NzaWJsZSBkdXBsaWNhdGVzIGFyZSBsb2dnZWQgdG8gc3Rkb3V0LlxuICpcbiAqL1xuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKTtcblxuaW1wb3J0IHsgbG9nIH0gZnJvbSAnQGxpYi9sb2cnO1xuaW1wb3J0IHsgbGlzdEF1ZGlvRmlsZXMgfSBmcm9tICdAbGliL2xpc3RBdWRpb0ZpbGVzJztcbmltcG9ydCB7IGxpc3RTdWJEaXJlY3RvcmllcyB9IGZyb20gJ0BsaWIvbGlzdFN1YkRpcmVjdG9yaWVzJztcbmltcG9ydCB7IEF1ZGlvVGFnTWV0YSwgbWF0Y2hNZXRhRGF0YUZyb21GaWxlTmFtZSB9IGZyb20gJ0BsaWIvbWF0Y2hNZXRhRGF0YUZyb21GaWxlTmFtZSc7XG5cbmNvbnN0IGRpcmVjdG9yaWVzID0gbGlzdFN1YkRpcmVjdG9yaWVzKGN3ZCk7XG5jb25zdCBhdWRpb2ZpbGVzID0gbGlzdEF1ZGlvRmlsZXMoZGlyZWN0b3JpZXMpO1xuXG5cbnR5cGUgRHVwZUZpbGVSZXN1bHQgPSBbQXVkaW9UYWdNZXRhLCAuLi5zdHJpbmdbXV07XG5cbnR5cGUgQXVkaW9UYWdNZXRhRW50cnkgPSB7XG4gIFtrZXk6IHN0cmluZ106IER1cGVGaWxlUmVzdWx0O1xufTtcblxudHlwZSBEdXBlQ29sbGVjdGlvbiA9IHtcbiAgbm9NYXRjaDogc3RyaW5nW10sXG4gIHRyYWNrczogQXVkaW9UYWdNZXRhRW50cnksXG4gIGR1cGVzOiBEdXBlRmlsZVJlc3VsdFtdXG59XG5cbmNvbnN0IHJlc3VsdDogRHVwZUNvbGxlY3Rpb24gPSB7XG4gIG5vTWF0Y2g6IFtdLFxuICB0cmFja3M6IHt9LFxuICBkdXBlczogW10sXG59XG5cbmF1ZGlvZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICBjb25zdCBtYXRjaCA9IG1hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUoZmlsZSk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKG1hdGNoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXN1bHQubm9NYXRjaC5wdXNoKGZpbGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGtleSA9IGAke21hdGNoLmFydGlzdH06OiR7bWF0Y2gudGl0bGV9YDtcbiAgcmVzdWx0LnRyYWNrc1trZXldID0gcmVzdWx0LnRyYWNrc1trZXldIHx8IFttYXRjaF07XG4gIHJlc3VsdC50cmFja3Nba2V5XS5wdXNoKGZpbGUpO1xufSk7XG5cbmxvZyhPYmplY3QudmFsdWVzKHJlc3VsdC50cmFja3MpLmZpbHRlcigoYXJyKSA9PiBhcnIubGVuZ3RoID4gMikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==