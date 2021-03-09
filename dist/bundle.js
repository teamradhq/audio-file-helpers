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
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lib/log */ "./src/lib/log.ts");
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @CONSTANTS */ "./src/CONSTANTS/index.ts");
/* harmony import */ var _lib_listAudioFiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/listAudioFiles */ "./src/lib/listAudioFiles.ts");
/* harmony import */ var _lib_listSubDirectories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lib/listSubDirectories */ "./src/lib/listSubDirectories.ts");
/* harmony import */ var _lib_matchMetaDataFromFileName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lib/matchMetaDataFromFileName */ "./src/lib/matchMetaDataFromFileName.ts");
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







const directories = (0,_lib_listSubDirectories__WEBPACK_IMPORTED_MODULE_5__.listSubDirectories)(cwd);
const audiofiles = (0,_lib_listAudioFiles__WEBPACK_IMPORTED_MODULE_4__.listAudioFiles)(directories);
const result = {
    noMatch: [],
    tracks: {},
    dupes: [],
};
audiofiles.forEach((file) => {
    const match = (0,_lib_matchMetaDataFromFileName__WEBPACK_IMPORTED_MODULE_6__.matchMetaDataFromFileName)(file);
    if (Object.keys(match).length === 0) {
        result.noMatch.push(file);
        return;
    }
    const key = `${match.artist}::${match.title}`;
    result.tracks[key] = result.tracks[key] || [match];
    result.tracks[key].push(file);
});
fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(path__WEBPACK_IMPORTED_MODULE_1___default().resolve(_CONSTANTS__WEBPACK_IMPORTED_MODULE_3__.HOME_LOG_DIRECTORY, 'sample.json'), JSON.stringify(result, null, 2), 'utf-8');
(0,_lib_log__WEBPACK_IMPORTED_MODULE_2__.log)(Object.values(result.tracks).filter((arr) => arr[0].artist && arr[0].title && arr.length > 2));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy8uL3NyYy9DT05TVEFOVFMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL2lzRGlyZWN0b3J5LnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9saXN0QXVkaW9GaWxlcy50cyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy8uL3NyYy9saWIvbGlzdFN1YkRpcmVjdG9yaWVzLnRzIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzLy4vc3JjL2xpYi9sb2cudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL21hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUudHMiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvbGliL3JlZHVjZURpcmVjdG9yaWVzVG9GaWxlcy50cyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL2V4dGVybmFsIFwidXRpbFwiIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaGVjay1wcm9kdWN0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoZWNrLXByb2R1Y3RzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hlY2stcHJvZHVjdHMvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0I7QUFDSTtBQUc1Qjs7OztHQUlHO0FBQ0ksTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUM7QUFFNUM7Ozs7R0FJRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsbURBQVksQ0FBQywyQ0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFbkU7Ozs7R0FJRztBQUNJLE1BQU0sMEJBQTBCLEdBQUcsNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEI1RDtBQUVaOzs7Ozs7R0FNRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBZ0IsRUFBVyxFQUFFLENBQUMsQ0FDeEQsOENBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSw2Q0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUMxRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWnFDO0FBQ3ZDOzs7Ozs7RUFNRTtBQUNLLE1BQU0sY0FBYyxHQUFHLENBQUMsSUFBYyxFQUFZLEVBQUUsQ0FBQyxJQUFJO0tBQzdELE1BQU0sQ0FBQyxtRkFBd0IsRUFBRSxFQUFFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSNUI7QUFFbUI7QUFFL0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBRXFCO0FBRS9DOzs7Ozs7O0dBT0c7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQUMsT0FBZSxHQUFHLEVBQVksRUFBRTtJQUNqRSxJQUFJLENBQUMsOENBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNyQixPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTSxRQUFRLEdBQUcsK0NBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FDckIsV0FBcUIsRUFDckIsR0FBVyxFQUNELEVBQUU7UUFDWixN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QUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUdILHVEQUFnQixDQUFDLG1EQUFZLENBQUMsMERBQWtCLEVBQUUsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQzdHLDZDQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgaG9tZWRpciB9IGZyb20gJ29zJ1xuXG5cbi8qKlxuICogQSBuYW1lc3BhY2UgdG8gdXNlIGluIG91dHB1dC9kYXRhIGZpbGVzLlxuICpcbiAqIEB2YXIge1t0eXBlXX1cbiAqL1xuZXhwb3J0IGNvbnN0IE5BTUVTUEFDRSA9IFwiQXVkaW9GaWxlSGVscGVyc1wiO1xuXG4vKipcbiAqIEEgZGlyZWN0b3J5IGluIHRoZSB1c2VyJ3MgaG9tZSBmb2xkZXIgdG8gbG9nIHRvLlxuICpcbiAqIEB2YXIge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEhPTUVfTE9HX0RJUkVDVE9SWSA9IHBhdGgucmVzb2x2ZShob21lZGlyKCksICcubG9ncycpO1xuXG4vKipcbiAqIEEgUmVnRXhwIHRoYXQgY2hlY2tzIGZvciBjb21tb24gYXVkaW8gZmlsZSBleHRlbnNpb25zLlxuICpcbiAqIEB2YXIge1JlZ0V4cH1cbiAqL1xuZXhwb3J0IGNvbnN0IFJFR0VYX0FVRElPX0ZJTEVfRVhURU5TSU9OID0gL1xcLihtcDN8YWlmZj98d2F2fGZsYWN8bTRhKSQvO1xuIiwiaW1wb3J0IHtcbiAgZXhpc3RzU3luYyxcbiAgbHN0YXRTeW5jLFxufSBmcm9tICdmcyc7XG5cbi8qKlxuICogVGhlIHtmaWxlcGF0aH0gcmVmZXJzIHRvIGEgZGlyZWN0b3J5LlxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgZmlsZXBhdGhcbiAqXG4gKiBAcmV0dXJuICB7Ym9vbGVhbn1cbiAqL1xuZXhwb3J0IGNvbnN0IGlzRGlyZWN0b3J5ID0gKGZpbGVwYXRoOiBzdHJpbmcpOiBib29sZWFuID0+IChcbiAgZXhpc3RzU3luYyhmaWxlcGF0aCkgJiYgbHN0YXRTeW5jKGZpbGVwYXRoKS5pc0RpcmVjdG9yeSgpXG4pO1xuIiwiaW1wb3J0IHtcbiAgcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzXG59IGZyb20gJ0BsaWIvcmVkdWNlRGlyZWN0b3JpZXNUb0ZpbGVzJztcbi8qKlxuKiBMaXN0IGFsbCBhdWRpbyBmaWxlcyBmb3VuZCBpbiBhIGNvbGxlY3Rpb24gb2YgZGlyZWN0b3JpZXMuXG4qXG4qIEBwYXJhbSAgIHtzdHJpbmdbXX0gIGRpcnNcbipcbiogQHJldHVybiAge3N0cmluZ1tdfVxuKi9cbmV4cG9ydCBjb25zdCBsaXN0QXVkaW9GaWxlcyA9IChkaXJzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IGRpcnNcbiAgLnJlZHVjZShyZWR1Y2VEaXJlY3Rvcmllc1RvRmlsZXMsIFtdKTtcbiIsImltcG9ydCB7XG4gIGV4aXN0c1N5bmMsXG4gIHJlYWRkaXJTeW5jLFxufSBmcm9tICdmcyc7XG5cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcblxuY29uc3QgY3dkID0gcHJvY2Vzcy5jd2QoKTtcblxuaW1wb3J0IHsgaXNEaXJlY3RvcnkgfSBmcm9tICdAbGliL2lzRGlyZWN0b3J5JztcblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIGV2ZXJ5IHN1Yi1kaXJlY3RvcnkgY29udGFpbmVkXG4gKiB3aXRoaW4gYSB7cm9vdH0gZGlyZWN0b3J5LlxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICByb290XG4gKlxuICogQHJldHVybiAge3N0cmluZ1tdfVxuICovXG5leHBvcnQgY29uc3QgbGlzdFN1YkRpcmVjdG9yaWVzID0gKHJvb3Q6IHN0cmluZyA9IGN3ZCk6IHN0cmluZ1tdID0+IHtcbiAgaWYgKCFleGlzdHNTeW5jKHJvb3QpKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgY29uc3QgY29udGVudHMgPSByZWFkZGlyU3luYyhyb290KTtcbiAgcmV0dXJuIGNvbnRlbnRzLnJlZHVjZSgoXG4gICAgZGlyZWN0b3JpZXM6IHN0cmluZ1tdLFxuICAgIGRpcjogc3RyaW5nXG4gICk6IHN0cmluZ1tdID0+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gcmVzb2x2ZShyb290LCBkaXIpO1xuXG4gICAgaWYgKCFpc0RpcmVjdG9yeShjdXJyZW50KSkge1xuICAgICAgcmV0dXJuIGRpcmVjdG9yaWVzO1xuICAgIH1cblxuICAgIHJldHVybiBbXG4gICAgICAuLi5kaXJlY3RvcmllcyxcbiAgICAgIGN1cnJlbnQsXG4gICAgICAuLi5saXN0U3ViRGlyZWN0b3JpZXMoY3VycmVudClcbiAgICBdO1xuICB9LCBbXSk7XG59O1xuIiwiaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKipcbiAqIExvZyBhbiB7aXRlbX0gdG8gY29uc29sZS5cbiAqIEBwYXJhbSAge2FueX0gaXRlbVxuICogQHJldHVybiB7c3Rkb3V0fVxuICovXG5leHBvcnQgY29uc3QgbG9nID0gKGl0ZW06IHVua25vd24pOiB2b2lkID0+IGNvbnNvbGUubG9nKGluc3BlY3QoaXRlbSwge1xuICBjb2xvcnM6IHRydWUsXG4gIGRlcHRoOiBJbmZpbml0eSxcbn0pKTtcbiIsImltcG9ydCB7IGJhc2VuYW1lLCBwYXJzZSB9IGZyb20gJ3BhdGgnO1xuLyoqXG4gKiBBdWRpbyBmaWxlIG1ldGFkYXRhLCB3aGljaCBtYXkgYmUgcHJlc2VudCBpbiBpdHMgbmFtZS5cbiAqL1xuZXhwb3J0IHR5cGUgQXVkaW9UYWdNZXRhID0ge1xuICB0cmFja051bWJlcj86IHN0cmluZyB8IG51bWJlcjtcbiAgYXJ0aXN0Pzogc3RyaW5nO1xuICB0aXRsZT86IHN0cmluZztcbiAga2V5Pzogc3RyaW5nO1xuICBicG0/OiBzdHJpbmc7XG4gIHNlcGFyYXRvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgbWFwcyBhbiBvYmplY3QgZW50cnkncyB2YWx1ZS5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cnlNYXBwZXJGdW5jdGlvbiA9IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gKHN0cmluZ3xudW1iZXIpW107XG5cbi8qKlxuICogQSBjb2xsZWN0aW9uIG9mIGVudHJ5IG1hcHBlcnMsIGluY2x1ZGluZ1xuICogYSBkZWZhdWx0IG1hcHBlci5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cnlNYXBwZXJDb2xsZWN0aW9uID0ge1xuICBERUZBVUxUOiBFbnRyeU1hcHBlckZ1bmN0aW9uO1xuICBba2V5OiBzdHJpbmddOiBFbnRyeU1hcHBlckZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIFJlZ0V4cCBwYXR0ZXJucyBmb3IgaWRlbnRpZnlpbmcgY2VydGFpblxuICogbWV0YWRhdGEgZnJvbSBhIHN0cmluZyB2YWx1ZS5cbiAqXG4gKiBAdmFyIHtBdWRpb1RhZ01ldGF9XG4gKi9cbmNvbnN0IHBhdHRlcm5zOiBSZXF1aXJlZDxBdWRpb1RhZ01ldGE+ID0ge1xuICB0cmFja051bWJlcjogJ1xcXFxkezEsMn0nLFxuICBhcnRpc3Q6ICdbQS1aYS16MC05LCYgXSonLFxuICB0aXRsZTogJ1tBLVphLXowLTksKClcIlxcJyBdKicsXG4gIGtleTonXFxcXGR7MSwyfVtBQl0nLFxuICBicG06J1xcXFxkezIsM30nLFxuICBzZXBhcmF0b3I6ICdcXFxcc3swLH0tXFxcXHN7MCx9Jyxcbn07XG5cbi8qKlxuICogTmFtZWQsIG9wdGlvbmFsIGdyb3VwcyBmb3IgZWFjaCBSZWdFeHAgcGF0dGVybi5cbiAqL1xuY29uc3QgcGF0dGVyblJlZ0V4cEdyb3Vwczogc3RyaW5nW10gPSBPYmplY3QuZW50cmllcyhwYXR0ZXJucylcbiAgLnJlZHVjZSgocGFydHM6IHN0cmluZ1tdLCBba2V5LCBwYXR0ZXJuXSkgPT4gKFtcbiAgICAuLi5wYXJ0cyxcbiAgICBrZXkgIT09ICdzZXBhcmF0b3InID8gYCg/PCR7a2V5fT4ke3BhdHRlcm59KT9gIDogYCgke3BhdHRlcm59KT9gXG4gIF0pLCBbXSk7XG5cbi8qKlxuICogUGF0dGVybiBmb3IgbWF0Y2hpbmcgc3RyaW5nIHNlcGFyYXRvcnMuXG4gKi9cbmNvbnN0IHNlcGFyYXRvciA9IFN0cmluZyhwYXR0ZXJuUmVnRXhwR3JvdXBzLnBvcCgpKTtcblxuLyoqXG4gKiBSZWdleCBzaG91bGQgbWF0Y2ggdHlwZXMgb2YgbWV0YWRhdGEgaW4gb3JkZXI6XG4gKiB7dHJhY2tOdW1iZXJ9IC0ge2FydGlzdH0gLSB7dGl0bGV9IC0ge2tleX0gLSB7YnBtfVxuICovXG5jb25zdCB0cmFja1RhZ01hdGNoID0gbmV3IFJlZ0V4cChgXiR7cGF0dGVyblJlZ0V4cEdyb3Vwcy5qb2luKHNlcGFyYXRvcikudHJpbSgpLnNsaWNlKDAsIC0xKX1gKTtcblxuY29uc3QgdGFnTWF0Y2hNYXBwZXJzOiBFbnRyeU1hcHBlckNvbGxlY3Rpb24gPSB7XG4gIERFRkFVTFQ6IChrZXksIHZhbHVlKSA9PiBba2V5LCAodmFsdWUgfHwgJycpLnRyaW0oKV0sXG4gIGFydGlzdDogKGtleSwgdmFsdWUpID0+IFtcbiAgICBrZXksXG4gICAgdmFsdWUuc3BsaXQoJywnKS5tYXAoYXJ0aXN0ID0+IGFydGlzdC50cmltKCkpXG4gICAgICAuc29ydCgpLmpvaW4oJywgJylcbiAgXSxcbiAgdHJhY2tOdW1iZXI6IChrZXksIHZhbHVlKSA9PiBba2V5LCBOdW1iZXIucGFyc2VJbnQodmFsdWUgfHwgJzAnLCAxMCldLFxufTtcblxuLyoqXG4gKiBDaGVja3MgYSBmaWxlIG5hbWUgZm9yIGFueSBtZXRhZGF0YSBtYXRjaGluZyB0aGlzIHBhdHRlcm46XG4gKlxuICogICAgXCJ7dHJhY2tOdW1iZXJ9IC0ge2FydGlzdH0gLSB7dGl0bGV9IC0ge2tleX0gLSB7YnBtfVwiXG4gKlxuICogQW55IG1hdGNoZXMgYXJlIHBhcnNlZCB0byBhIG5ldyBBdWRpb1RhZ01ldGEgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICAgICBmaWxlcGF0aFxuICpcbiAqIEByZXR1cm4gIHtBdWRpb1RhZ01ldGF9XG4gKi9cbmV4cG9ydCBjb25zdCBtYXRjaE1ldGFEYXRhRnJvbUZpbGVOYW1lID0gKGZpbGVwYXRoOiBzdHJpbmcpOiBBdWRpb1RhZ01ldGEgPT4ge1xuICBjb25zdCBiYXNlID0gYmFzZW5hbWUoZmlsZXBhdGgpO1xuICBjb25zdCBtYXRjaCA9IGJhc2UubWF0Y2godHJhY2tUYWdNYXRjaCk/Lmdyb3VwcyB8fCB7fVxuICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMobWF0Y2gpLm1hcChcbiAgICAoW2tleSwgdmFsdWVdKSA9PiB2YWx1ZSA/ICh0YWdNYXRjaE1hcHBlcnNba2V5XSB8fCB0YWdNYXRjaE1hcHBlcnMuREVGQVVMVCkoa2V5LCB2YWx1ZSkgOiBba2V5LCB2YWx1ZV1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIC4uLk9iamVjdC5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICBiYXNlOiBwYXJzZShiYXNlKS5uYW1lLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IGlzQXVkaW9GaWxlIH1mcm9tICdAbGliL2luZGV4JztcblxuaW1wb3J0IHsgUkVHRVhfQVVESU9fRklMRV9FWFRFTlNJT04gfSBmcm9tICdAQ09OU1RBTlRTJztcblxuLyoqXG4gKiBBZGQge2N1cnJlbnR9IGRpcmVjdG9yeSdzIGF1ZGlvIGZpbGVzIHRvIGEgbGlzdC5cbiAqXG4gKiBAcmV0dXJuICB7c3RyaW5nW119XG4gKi9cbmV4cG9ydCBjb25zdCByZWR1Y2VEaXJlY3Rvcmllc1RvRmlsZXMgPSAoXG4gIGZpbGVzOnN0cmluZ1tdLFxuICBjdXJyZW50OiBzdHJpbmdcbik6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgY29udGVudHM6IHN0cmluZ1tdID0gcmVhZGRpclN5bmMoY3VycmVudClcbiAgICAucmVkdWNlKChkYXRhOnN0cmluZ1tdLCBmaWxlcGF0aDpzdHJpbmcpOiBzdHJpbmdbXSA9PiB7XG4gICAgICBpZiAoZmlsZXBhdGgubWF0Y2goUkVHRVhfQVVESU9fRklMRV9FWFRFTlNJT04pKSB7XG4gICAgICAgIGRhdGEucHVzaChyZXNvbHZlKGN1cnJlbnQsIGZpbGVwYXRoKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sIFtdKTtcblxuICByZXR1cm4gKFtcbiAgICAuLi5maWxlcyxcbiAgICAuLi5jb250ZW50cyxcbiAgXSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXG4gKiBGaW5kIER1cGxpY2F0ZSBUcmFja3NcbiAqXG4gKiBUaGlzIHNjcmlwdCB3aWxsIGNoZWNrIGVhY2ggc3ViLWRpcmVjdG9yeSBpbiB0aGVcbiAqIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkgdG8gc2VlIGlmIHRoZXJlIGFyZSBhdWRpb1xuICogZmlsZXMgd2l0aCBzaW1pbGFyIG5hbWVzLlxuICpcbiAqIEl0IGV4dHJhY3RzIGFueSBrZXksIGJwbSBhbmQgZmlsZSBleHRlbnNpb25zIGZyb21cbiAqIGZpbGUgbmFtZXMuXG4gKlxuICogQW55IHBvc3NpYmxlIGR1cGxpY2F0ZXMgYXJlIGxvZ2dlZCB0byBzdGRvdXQuXG4gKlxuICovXG5jb25zdCBjd2QgPSBwcm9jZXNzLmN3ZCgpO1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmltcG9ydCB7IGxvZyB9IGZyb20gJ0BsaWIvbG9nJztcbmltcG9ydCB7IEhPTUVfTE9HX0RJUkVDVE9SWSB9IGZyb20gJ0BDT05TVEFOVFMnO1xuaW1wb3J0IHsgbGlzdEF1ZGlvRmlsZXMgfSBmcm9tICdAbGliL2xpc3RBdWRpb0ZpbGVzJztcbmltcG9ydCB7IGxpc3RTdWJEaXJlY3RvcmllcyB9IGZyb20gJ0BsaWIvbGlzdFN1YkRpcmVjdG9yaWVzJztcbmltcG9ydCB7IEF1ZGlvVGFnTWV0YSwgbWF0Y2hNZXRhRGF0YUZyb21GaWxlTmFtZSB9IGZyb20gJ0BsaWIvbWF0Y2hNZXRhRGF0YUZyb21GaWxlTmFtZSc7XG5cbmNvbnN0IGRpcmVjdG9yaWVzID0gbGlzdFN1YkRpcmVjdG9yaWVzKGN3ZCk7XG5jb25zdCBhdWRpb2ZpbGVzID0gbGlzdEF1ZGlvRmlsZXMoZGlyZWN0b3JpZXMpO1xuXG5cbnR5cGUgRHVwZUZpbGVSZXN1bHQgPSBbQXVkaW9UYWdNZXRhLCAuLi5zdHJpbmdbXV07XG5cbnR5cGUgQXVkaW9UYWdNZXRhRW50cnkgPSB7XG4gIFtrZXk6IHN0cmluZ106IER1cGVGaWxlUmVzdWx0O1xufTtcblxudHlwZSBEdXBlQ29sbGVjdGlvbiA9IHtcbiAgbm9NYXRjaDogc3RyaW5nW10sXG4gIHRyYWNrczogQXVkaW9UYWdNZXRhRW50cnksXG4gIGR1cGVzOiBEdXBlRmlsZVJlc3VsdFtdXG59XG5cbmNvbnN0IHJlc3VsdDogRHVwZUNvbGxlY3Rpb24gPSB7XG4gIG5vTWF0Y2g6IFtdLFxuICB0cmFja3M6IHt9LFxuICBkdXBlczogW10sXG59XG5cbmF1ZGlvZmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICBjb25zdCBtYXRjaCA9IG1hdGNoTWV0YURhdGFGcm9tRmlsZU5hbWUoZmlsZSk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKG1hdGNoKS5sZW5ndGggPT09IDApIHtcbiAgICByZXN1bHQubm9NYXRjaC5wdXNoKGZpbGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGtleSA9IGAke21hdGNoLmFydGlzdH06OiR7bWF0Y2gudGl0bGV9YDtcbiAgcmVzdWx0LnRyYWNrc1trZXldID0gcmVzdWx0LnRyYWNrc1trZXldIHx8IFttYXRjaF07XG4gIHJlc3VsdC50cmFja3Nba2V5XS5wdXNoKGZpbGUpO1xufSk7XG5cblxuZnMud3JpdGVGaWxlU3luYyhwYXRoLnJlc29sdmUoSE9NRV9MT0dfRElSRUNUT1JZLCAnc2FtcGxlLmpzb24nKSwgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSwgICd1dGYtOCcpO1xubG9nKE9iamVjdC52YWx1ZXMocmVzdWx0LnRyYWNrcykuZmlsdGVyKChhcnIpID0+IGFyclswXS5hcnRpc3QgJiYgYXJyWzBdLnRpdGxlICYmIGFyci5sZW5ndGggPiAyKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9