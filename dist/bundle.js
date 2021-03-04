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
    const base = (0,path__WEBPACK_IMPORTED_MODULE_0__.basename)(filepath);
    const match = base.match(trackTagMatch)?.groups || {};
    const entries = Object.entries(match).map(([key, value]) => value ? (tagMatchMappers[key] || tagMatchMappers.DEFAULT)(key, value) : [key, value]);
    return {
        ...Object.fromEntries(entries),
        base: (0,path__WEBPACK_IMPORTED_MODULE_0__.parse)(base).name,
    };
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
(0,_lib_log__WEBPACK_IMPORTED_MODULE_0__.log)(Object.values(result.tracks).filter((arr) => arr[0].artist && arr[0].title && arr.length > 2));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy8uL3NyYy9DT05TVEFOVFMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL2lzRGlyZWN0b3J5LnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9saXN0QXVkaW9GaWxlcy50cyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy8uL3NyYy9saWIvbGlzdFN1YkRpcmVjdG9yaWVzLnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9sb2cudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL21hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL3JlZHVjZURpcmVjdG9yaWVzVG9GaWxlcy50cyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDSTtBQUc1Qjs7OztHQUlHO0FBQ0ksTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUM7QUFFNUM7Ozs7R0FJRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsbURBQVksQ0FBQywyQ0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFbkU7Ozs7R0FJRztBQUNJLE1BQU0sMEJBQTBCLEdBQUcsNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEI1RDtBQUVaOzs7Ozs7R0FNRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBZ0IsRUFBVyxFQUFFLENBQUMsQ0FDeEQsOENBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSw2Q0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUMxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWnFDO0FBQ3ZDOzs7Ozs7RUFNRTtBQUNLLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBYyxFQUFZLEVBQUUsQ0FBQyxJQUFJO0tBQzdELE1BQU0sQ0FBQyxtRkFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7QUFFbUI7QUFFL0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXFCO0FBRS9DOzs7Ozs7O0dBT0c7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBZSxHQUFHLEVBQVksRUFBRTtJQUNqRSxJQUFJLENBQUMsOENBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTSxRQUFRLEdBQUcsK0NBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDckIsV0FBcUIsRUFDckIsR0FBVyxFQUNELEVBQUU7UUFDWixN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QUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUFDLENBQUM7QUFFSCw2Q0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGhvbWVkaXIgfSBmcm9tICdvcydcblxuXG4vKipcbiAqIEEgbmFtZXNwYWNlIHRvIHVzZSBpbiBvdXRwdXQvZGF0YSBmaWxlcy5cbiAqXG4gKiBAdmFyIHtbdHlwZV19XG4gKi9cbmV4cG9ydCBjb25zdCBOQU1FU1BBQ0UgPSBcIkF1ZGlvRmlsZUhlbHBlcnNcIjtcblxuLyoqXG4gKiBBIGRpcmVjdG9yeSBpbiB0aGUgdXNlcidzIGhvbWUgZm9sZGVyIHRvIGxvZyB0by5cbiAqXG4gKiBAdmFyIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBIT01FX0xPR19ESVJFQ1RPUlkgPSBwYXRoLnJlc29sdmUoaG9tZWRpcigpLCAnLmxvZ3MnKTtcblxuLyoqXG4gKiBBIFJlZ0V4cCB0aGF0IGNoZWNrcyBmb3IgY29tbW9uIGF1ZGlvIGZpbGUgZXh0ZW5zaW9ucy5cbiAqXG4gKiBAdmFyIHtSZWdFeHB9XG4gKi9cbmV4cG9ydCBjb25zdCBSRUdFWF9BVURJT19GSUxFX0VYVEVOU0lPTiA9IC9cXC4obXAzfGFpZmY/fHdhdnxmbGFjfG00YSkkLztcbiIsImltcG9ydCB7XG4gIGV4aXN0c1N5bmMsXG4gIGxzdGF0U3luYyxcbn0gZnJvbSAnZnMnO1xuXG4vKipcbiAqIFRoZSB7ZmlsZXBhdGh9IHJlZmVycyB0byBhIGRpcmVjdG9yeS5cbiAqXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgIGZpbGVwYXRoXG4gKlxuICogQHJldHVybiAge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBjb25zdCBpc0RpcmVjdG9yeSA9IChmaWxlcGF0aDogc3RyaW5nKTogYm9vbGVhbiA9PiAoXG4gIGV4aXN0c1N5bmMoZmlsZXBhdGgpICYmIGxzdGF0U3luYyhmaWxlcGF0aCkuaXNEaXJlY3RvcnkoKVxuKTtcbiIsImltcG9ydCB7XG4gIHJlZHVjZURpcmVjdG9yaWVzVG9GaWxlc1xufSBmcm9tICdAbGliL3JlZHVjZURpcmVjdG9yaWVzVG9GaWxlcyc7XG4vKipcbiogTGlzdCBhbGwgYXVkaW8gZmlsZXMgZm91bmQgaW4gYSBjb2xsZWN0aW9uIG9mIGRpcmVjdG9yaWVzLlxuKlxuKiBAcGFyYW0gICB7c3RyaW5nW119ICBkaXJzXG4qXG4qIEByZXR1cm4gIHtzdHJpbmdbXX1cbiovXG5leHBvcnQgY29uc3QgbGlzdEF1ZGlvRmlsZXMgPSAoZGlyczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiBkaXJzXG4gIC5yZWR1Y2UocmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzLCBbXSk7XG4iLCJpbXBvcnQge1xuICBleGlzdHNTeW5jLFxuICByZWFkZGlyU3luYyxcbn0gZnJvbSAnZnMnO1xuXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCk7XG5cbmltcG9ydCB7IGlzRGlyZWN0b3J5IH0gZnJvbSAnQGxpYi9pc0RpcmVjdG9yeSc7XG5cbi8qKlxuICogR2V0IGEgbGlzdCBvZiBldmVyeSBzdWItZGlyZWN0b3J5IGNvbnRhaW5lZFxuICogd2l0aGluIGEge3Jvb3R9IGRpcmVjdG9yeS5cbiAqXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgcm9vdFxuICpcbiAqIEByZXR1cm4gIHtzdHJpbmdbXX1cbiAqL1xuZXhwb3J0IGNvbnN0IGxpc3RTdWJEaXJlY3RvcmllcyA9IChyb290OiBzdHJpbmcgPSBjd2QpOiBzdHJpbmdbXSA9PiB7XG4gIGlmICghZXhpc3RzU3luYyhyb290KSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRlbnRzID0gcmVhZGRpclN5bmMocm9vdCk7XG4gIHJldHVybiBjb250ZW50cy5yZWR1Y2UoKFxuICAgIGRpcmVjdG9yaWVzOiBzdHJpbmdbXSxcbiAgICBkaXI6IHN0cmluZ1xuICApOiBzdHJpbmdbXSA9PiB7XG4gICAgY29uc3QgY3VycmVudCA9IHJlc29sdmUocm9vdCwgZGlyKTtcblxuICAgIGlmICghaXNEaXJlY3RvcnkoY3VycmVudCkpIHtcbiAgICAgIHJldHVybiBkaXJlY3RvcmllcztcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgLi4uZGlyZWN0b3JpZXMsXG4gICAgICBjdXJyZW50LFxuICAgICAgLi4ubGlzdFN1YkRpcmVjdG9yaWVzKGN1cnJlbnQpXG4gICAgXTtcbiAgfSwgW10pO1xufTtcbiIsImltcG9ydCB7IGluc3BlY3QgfSBmcm9tICd1dGlsJztcblxuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuLyoqXG4gKiBMb2cgYW4ge2l0ZW19IHRvIGNvbnNvbGUuXG4gKiBAcGFyYW0gIHthbnl9IGl0ZW1cbiAqIEByZXR1cm4ge3N0ZG91dH1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvZyA9IChpdGVtOiB1bmtub3duKTogdm9pZCA9PiBjb25zb2xlLmxvZyhpbnNwZWN0KGl0ZW0sIHtcbiAgY29sb3JzOiB0cnVlLFxuICBkZXB0aDogSW5maW5pdHksXG59KSk7XG4iLCJpbXBvcnQgeyBiYXNlbmFtZSwgcGFyc2UgfSBmcm9tICdwYXRoJztcbi8qKlxuICogQXVkaW8gZmlsZSBtZXRhZGF0YSwgd2hpY2ggbWF5IGJlIHByZXNlbnQgaW4gaXRzIG5hbWUuXG4gKi9cbmV4cG9ydCB0eXBlIEF1ZGlvVGFnTWV0YSA9IHtcbiAgdHJhY2tOdW1iZXI/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFydGlzdD86IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGtleT86IHN0cmluZztcbiAgYnBtPzogc3RyaW5nO1xuICBzZXBhcmF0b3I/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IG1hcHMgYW4gb2JqZWN0IGVudHJ5J3MgdmFsdWUuXG4gKi9cbmV4cG9ydCB0eXBlIEVudHJ5TWFwcGVyRnVuY3Rpb24gPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IChzdHJpbmd8bnVtYmVyKVtdO1xuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBlbnRyeSBtYXBwZXJzLCBpbmNsdWRpbmdcbiAqIGEgZGVmYXVsdCBtYXBwZXIuXG4gKi9cbmV4cG9ydCB0eXBlIEVudHJ5TWFwcGVyQ29sbGVjdGlvbiA9IHtcbiAgREVGQVVMVDogRW50cnlNYXBwZXJGdW5jdGlvbjtcbiAgW2tleTogc3RyaW5nXTogRW50cnlNYXBwZXJGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBSZWdFeHAgcGF0dGVybnMgZm9yIGlkZW50aWZ5aW5nIGNlcnRhaW5cbiAqIG1ldGFkYXRhIGZyb20gYSBzdHJpbmcgdmFsdWUuXG4gKlxuICogQHZhciB7QXVkaW9UYWdNZXRhfVxuICovXG5jb25zdCBwYXR0ZXJuczogUmVxdWlyZWQ8QXVkaW9UYWdNZXRhPiA9IHtcbiAgdHJhY2tOdW1iZXI6ICdcXFxcZHsxLDJ9JyxcbiAgYXJ0aXN0OiAnW0EtWmEtejAtOSwmIF0qJyxcbiAgdGl0bGU6ICdbQS1aYS16MC05LCgpXCJcXCcgXSonLFxuICBrZXk6J1xcXFxkezEsMn1bQUJdJyxcbiAgYnBtOidcXFxcZHsyLDN9JyxcbiAgc2VwYXJhdG9yOiAnXFxcXHN7MCx9LVxcXFxzezAsfScsXG59O1xuXG4vKipcbiAqIE5hbWVkLCBvcHRpb25hbCBncm91cHMgZm9yIGVhY2ggUmVnRXhwIHBhdHRlcm4uXG4gKi9cbmNvbnN0IHBhdHRlcm5SZWdFeHBHcm91cHM6IHN0cmluZ1tdID0gT2JqZWN0LmVudHJpZXMocGF0dGVybnMpXG4gIC5yZWR1Y2UoKHBhcnRzOiBzdHJpbmdbXSwgW2tleSwgcGF0dGVybl0pID0+IChbXG4gICAgLi4ucGFydHMsXG4gICAga2V5ICE9PSAnc2VwYXJhdG9yJyA/IGAoPzwke2tleX0+JHtwYXR0ZXJufSk/YCA6IGAoJHtwYXR0ZXJufSk/YFxuICBdKSwgW10pO1xuXG4vKipcbiAqIFBhdHRlcm4gZm9yIG1hdGNoaW5nIHN0cmluZyBzZXBhcmF0b3JzLlxuICovXG5jb25zdCBzZXBhcmF0b3IgPSBTdHJpbmcocGF0dGVyblJlZ0V4cEdyb3Vwcy5wb3AoKSk7XG5cbi8qKlxuICogUmVnZXggc2hvdWxkIG1hdGNoIHR5cGVzIG9mIG1ldGFkYXRhIGluIG9yZGVyOlxuICoge3RyYWNrTnVtYmVyfSAtIHthcnRpc3R9IC0ge3RpdGxlfSAtIHtrZXl9IC0ge2JwbX1cbiAqL1xuY29uc3QgdHJhY2tUYWdNYXRjaCA9IG5ldyBSZWdFeHAoYF4ke3BhdHRlcm5SZWdFeHBHcm91cHMuam9pbihzZXBhcmF0b3IpLnRyaW0oKS5zbGljZSgwLCAtMSl9YCk7XG5cbmNvbnN0IHRhZ01hdGNoTWFwcGVyczogRW50cnlNYXBwZXJDb2xsZWN0aW9uID0ge1xuICBERUZBVUxUOiAoa2V5LCB2YWx1ZSkgPT4gW2tleSwgKHZhbHVlIHx8ICcnKS50cmltKCldLFxuICBhcnRpc3Q6IChrZXksIHZhbHVlKSA9PiBbXG4gICAga2V5LFxuICAgIHZhbHVlLnNwbGl0KCcsJykubWFwKGFydGlzdCA9PiBhcnRpc3QudHJpbSgpKVxuICAgICAgLnNvcnQoKS5qb2luKCcsICcpXG4gIF0sXG4gIHRyYWNrTnVtYmVyOiAoa2V5LCB2YWx1ZSkgPT4gW2tleSwgTnVtYmVyLnBhcnNlSW50KHZhbHVlIHx8ICcwJywgMTApXSxcbn07XG5cbi8qKlxuICogQ2hlY2tzIGEgZmlsZSBuYW1lIGZvciBhbnkgbWV0YWRhdGEgbWF0Y2hpbmcgdGhpcyBwYXR0ZXJuOlxuICpcbiAqICAgIFwie3RyYWNrTnVtYmVyfSAtIHthcnRpc3R9IC0ge3RpdGxlfSAtIHtrZXl9IC0ge2JwbX1cIlxuICpcbiAqIEFueSBtYXRjaGVzIGFyZSBwYXJzZWQgdG8gYSBuZXcgQXVkaW9UYWdNZXRhIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgICAgZmlsZXBhdGhcbiAqXG4gKiBAcmV0dXJuICB7QXVkaW9UYWdNZXRhfVxuICovXG5leHBvcnQgY29uc3QgbWF0Y2hNZXRhRGF0YUZyb21GaWxlTmFtZSA9IChmaWxlcGF0aDogc3RyaW5nKTogQXVkaW9UYWdNZXRhID0+IHtcbiAgY29uc3QgYmFzZSA9IGJhc2VuYW1lKGZpbGVwYXRoKTtcbiAgY29uc3QgbWF0Y2ggPSBiYXNlLm1hdGNoKHRyYWNrVGFnTWF0Y2gpPy5ncm91cHMgfHwge31cbiAgY29uc3QgZW50cmllcyA9IE9iamVjdC5lbnRyaWVzKG1hdGNoKS5tYXAoXG4gICAgKFtrZXksIHZhbHVlXSkgPT4gdmFsdWUgPyAodGFnTWF0Y2hNYXBwZXJzW2tleV0gfHwgdGFnTWF0Y2hNYXBwZXJzLkRFRkFVTFQpKGtleSwgdmFsdWUpIDogW2tleSwgdmFsdWVdXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5PYmplY3QuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgYmFzZTogcGFyc2UoYmFzZSkubmFtZSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgeyBpc0F1ZGlvRmlsZSB9ZnJvbSAnQGxpYi9pbmRleCc7XG5cbmltcG9ydCB7IFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OIH0gZnJvbSAnQENPTlNUQU5UUyc7XG5cbi8qKlxuICogQWRkIHtjdXJyZW50fSBkaXJlY3RvcnkncyBhdWRpbyBmaWxlcyB0byBhIGxpc3QuXG4gKlxuICogQHJldHVybiAge3N0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzID0gKFxuICBmaWxlczpzdHJpbmdbXSxcbiAgY3VycmVudDogc3RyaW5nXG4pOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRzOiBzdHJpbmdbXSA9IHJlYWRkaXJTeW5jKGN1cnJlbnQpXG4gICAgLnJlZHVjZSgoZGF0YTpzdHJpbmdbXSwgZmlsZXBhdGg6c3RyaW5nKTogc3RyaW5nW10gPT4ge1xuICAgICAgaWYgKGZpbGVwYXRoLm1hdGNoKFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OKSkge1xuICAgICAgICBkYXRhLnB1c2gocmVzb2x2ZShjdXJyZW50LCBmaWxlcGF0aCkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LCBbXSk7XG5cbiAgcmV0dXJuIChbXG4gICAgLi4uZmlsZXMsXG4gICAgLi4uY29udGVudHMsXG4gIF0pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxuICogRmluZCBEdXBsaWNhdGUgVHJhY2tzXG4gKlxuICogVGhpcyBzY3JpcHQgd2lsbCBjaGVjayBlYWNoIHN1Yi1kaXJlY3RvcnkgaW4gdGhlXG4gKiBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5IHRvIHNlZSBpZiB0aGVyZSBhcmUgYXVkaW9cbiAqIGZpbGVzIHdpdGggc2ltaWxhciBuYW1lcy5cbiAqXG4gKiBJdCBleHRyYWN0cyBhbnkga2V5LCBicG0gYW5kIGZpbGUgZXh0ZW5zaW9ucyBmcm9tXG4gKiBmaWxlIG5hbWVzLlxuICpcbiAqIEFueSBwb3NzaWJsZSBkdXBsaWNhdGVzIGFyZSBsb2dnZWQgdG8gc3Rkb3V0LlxuICpcbiAqL1xuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKTtcblxuaW1wb3J0IHsgbG9nIH0gZnJvbSAnQGxpYi9sb2cnO1xuaW1wb3J0IHsgbGlzdEF1ZGlvRmlsZXMgfSBmcm9tICdAbGliL2xpc3RBdWRpb0ZpbGVzJztcbmltcG9ydCB7IGxpc3RTdWJEaXJlY3RvcmllcyB9IGZyb20gJ0BsaWIvbGlzdFN1YkRpcmVjdG9yaWVzJztcbmltcG9ydCB7IEF1ZGlvVGFnTWV0YSwgbWF0Y2hNZXRhRGF0YUZyb21GaWxlTmFtZSB9IGZyb20gJ0BsaWIvbWF0Y2hNZXRhRGF0YUZyb21GaWxlTmFtZSc7XG5cbmNvbnN0IGRpcmVjdG9yaWVzID0gbGlzdFN1YkRpcmVjdG9yaWVzKGN3ZCk7XG5jb25zdCBhdWRpb2ZpbGVzID0gbGlzdEF1ZGlvRmlsZXMoZGlyZWN0b3JpZXMpO1xuXG5cbnR5cGUgRHVwZUZpbGVSZXN1bHQgPSBbQXVkaW9UYWdNZXRhLCAuLi5zdHJpbmdbXV07XG5cbnR5cGUgQXVkaW9UYWdNZXRhRW50cnkgPSB7XG4gIFtrZXk6IHN0cmluZ106IER1cGVGaWxlUmVzdWx0O1xufTtcblxudHlwZSBEdXBlQ29sbGVjdGlvbiA9IHtcbiAgbm9NYXRjaDogc3RyaW5nW10sXG4gIHRyYWNrczogQXVkaW9UYWdNZXRhRW50cnksXG4gIGR1cGVzOiBEdXBlRmlsZVJlc3VsdFtdXG59XG5cbmNvbnN0IHJlc3VsdDogRHVwZUNvbGxlY3Rpb24gPSB7XG4gIG5vTWF0Y2g6IFtdLFxuICB0cmFja3M6IHt9LFxuICBkdXBlczogW10sXG59XG5cbmF1ZGlvZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICBjb25zdCBtYXRjaCA9IG1hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUoZmlsZSk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKG1hdGNoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXN1bHQubm9NYXRjaC5wdXNoKGZpbGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGtleSA9IGAke21hdGNoLmFydGlzdH06OiR7bWF0Y2gudGl0bGV9YDtcbiAgcmVzdWx0LnRyYWNrc1trZXldID0gcmVzdWx0LnRyYWNrc1trZXldIHx8IFttYXRjaF07XG4gIHJlc3VsdC50cmFja3Nba2V5XS5wdXNoKGZpbGUpO1xufSk7XG5cbmxvZyhPYmplY3QudmFsdWVzKHJlc3VsdC50cmFja3MpLmZpbHRlcigoYXJyKSA9PiBhcnJbMF0uYXJ0aXN0ICYmIGFyclswXS50aXRsZSAmJiBhcnIubGVuZ3RoID4gMikpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==