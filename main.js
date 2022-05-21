/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../img/background-black.svg */ \"./src/img/background-black.svg\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../img/background-white.svg */ \"./src/img/background-white.svg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\n// Module\nexports.push([module.i, \"/*  MAIN STYLING    */\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml, body {\\n  background-color: #000000;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-attachment: fixed;\\n  background-size: cover;\\n  -webkit-background-size: cover;\\n  -moz-background-size: cover;\\n  -o-background-size: cover;\\n  color: #f0f0f0;\\n  font-family: \\\"Raleway\\\", Arial, sans-serif;\\n  font-size: 18px;\\n  text-rendering: optimizeLegibility;\\n  overflow-x: hidden;\\n}\\n\\nh1 {\\n  font-size: 3em;\\n  padding-top: 1.5rem;\\n  margin: 1rem 1rem 0.6rem 1rem;\\n  text-transform: uppercase;\\n  line-height: 1.2;\\n}\\n\\nh2 {\\n  font-family: \\\"Raleway\\\", sans-serif;\\n  font-size: 1.4em;\\n  font-weight: 100;\\n  text-transform: uppercase;\\n  margin: 1rem 1rem 2rem 1rem;\\n}\\n\\nh3 {\\n  font-family: \\\"Oswald\\\", sans-serif;\\n  font-size: 2.2em;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  text-transform: uppercase;\\n  text-align: center;\\n  margin: 2em 0.5em 1em 0.5em;\\n}\\n\\nh1,\\nh3 {\\n  color: #f0f0f0;\\n  font-family: \\\"Oswald\\\", sans-serif;\\n}\\n\\nh5 {\\n  font-size: 1.1em;\\n  font-weight: 100;\\n  text-align: center;\\n  line-height: 1.3;\\n  margin: 2em 1.5em;\\n}\\n\\np {\\n  line-height: 1.3;\\n  margin: 2.5em 1.5em;\\n}\\n\\nsection,\\nheader,\\nfooter {\\n  padding: 1em;\\n}\\n\\nsection {\\n  min-height: 95vh;\\n  margin-bottom: 1em;\\n}\\n\\n/*  NAVIGATION MENU    */\\n.nav-oblique {\\n  font-size: 0.7em;\\n}\\n.nav-oblique ul {\\n  display: -webkit-box;\\n  display: flex;\\n  -webkit-box-pack: end;\\n  justify-content: flex-end;\\n}\\n.nav-oblique ul li {\\n  list-style-type: none;\\n  font-weight: 800;\\n}\\n.nav-oblique ul li .oblique-line {\\n  padding: 0 0.5em;\\n}\\n.nav-oblique ul li a {\\n  position: relative;\\n  padding-bottom: 0.2em;\\n  color: #f0f0f0;\\n  text-decoration: none;\\n  overflow: hidden;\\n}\\n.nav-oblique ul li a:before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  background-color: #f0f0f0;\\n  width: 0%;\\n  height: 1px;\\n  left: 0;\\n  bottom: 0;\\n  -webkit-transition: width 0.3s ease;\\n  transition: width 0.3s ease;\\n}\\n@media (hover: hover) {\\n  .nav-oblique ul li a:hover:before {\\n    width: 100%;\\n  }\\n}\\n\\n.navbar-default {\\n  width: 100%;\\n  position: fixed;\\n  z-index: 2;\\n  top: 0;\\n  right: 200%;\\n  overflow-x: hidden;\\n  background-color: #fff;\\n  -webkit-transition: 0.2s;\\n  transition: 0.2s;\\n}\\n.navbar-default ul {\\n  height: 4em;\\n  display: -webkit-box;\\n  display: flex;\\n  -webkit-box-orient: horizontal;\\n  -webkit-box-direction: normal;\\n  flex-flow: row nowrap;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n  margin-left: 2em;\\n}\\n.navbar-default ul li {\\n  display: -webkit-box;\\n  display: flex;\\n  -webkit-box-flex: 1;\\n  flex: 1;\\n  list-style-type: none;\\n}\\n.navbar-default ul li .oblique-line {\\n  display: none;\\n}\\n.navbar-default ul li a {\\n  width: 100%;\\n  height: 100%;\\n  display: -webkit-box;\\n  display: flex;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n  -webkit-box-align: center;\\n  align-items: center;\\n  color: #000;\\n  text-decoration: none;\\n  font-size: 0.8em;\\n  -webkit-transition: 0.2s;\\n  transition: 0.2s;\\n}\\n\\n.nav-show {\\n  -webkit-transform: translateX(200%);\\n  transform: translateX(200%);\\n}\\n\\n.hamburger {\\n  position: fixed;\\n  top: 0;\\n  left: -50px;\\n  z-index: 3;\\n  width: 40px;\\n  height: 70px;\\n  background-color: transparent;\\n  border: none;\\n  -webkit-transform: scale(0.65);\\n  transform: scale(0.65);\\n  -webkit-transition: all 0.5s ease-in-out;\\n  transition: all 0.5s ease-in-out;\\n  mix-blend-mode: difference;\\n}\\n.hamburger .bar {\\n  border-bottom: 4px solid;\\n  margin: 6px;\\n  color: #f0f0f0;\\n  -webkit-transition: all 0.4s;\\n  transition: all 0.4s;\\n}\\n\\n.hamburger:focus {\\n  -webkit-transform: scale(0.9);\\n  transform: scale(0.9);\\n  outline: none;\\n}\\n\\n.menu-is-active .bar {\\n  -webkit-transform-origin: left;\\n  transform-origin: left;\\n  -webkit-transition: -webkit-transform 0.2s;\\n  transition: -webkit-transform 0.2s;\\n  transition: transform 0.2s;\\n  transition: transform 0.2s, -webkit-transform 0.2s;\\n}\\n.menu-is-active .top {\\n  -webkit-transform: rotate(45deg);\\n  transform: rotate(45deg);\\n}\\n.menu-is-active .middle {\\n  opacity: 0;\\n}\\n.menu-is-active .bottom {\\n  -webkit-transform: rotate(-45deg);\\n  transform: rotate(-45deg);\\n}\\n\\n.menu-is-active:focus {\\n  -webkit-transform: scale(0.65);\\n  transform: scale(0.65);\\n  outline: none;\\n}\\n\\n/*  BUTTONS  */\\n.button {\\n  display: block;\\n  margin: 1em auto;\\n  font-family: Oswald;\\n  text-transform: uppercase;\\n  text-decoration: none;\\n  text-align: center;\\n  cursor: pointer;\\n}\\n\\n.button-white {\\n  width: 9rem;\\n  height: auto;\\n  padding: 0.7em;\\n  font-size: 0.8em;\\n  background: #f0f0f0;\\n  border: 1px solid #f0f0f0;\\n  color: #414141;\\n  -webkit-transition: box-shadow 0.5s, border 0.5s, color 0.5s, text-shadow 0.5s;\\n  transition: box-shadow 0.5s, border 0.5s, color 0.5s, text-shadow 0.5s;\\n}\\n@media (hover: hover) {\\n  .button-white:hover {\\n    color: #f0f0f0;\\n    box-shadow: inset 0 0 0 3em #000;\\n    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;\\n  }\\n}\\n\\n.button-black {\\n  height: 40px;\\n  width: 150px;\\n  padding: 0.4em;\\n  border: 1px solid #f0f0f0;\\n  background: #181818;\\n  color: #f0f0f0;\\n  font-size: 0.9em;\\n  -webkit-transition: box-shadow 0.5s, border 0.5s, color 0.5s, text-shadow 0.5s;\\n  transition: box-shadow 0.5s, border 0.5s, color 0.5s, text-shadow 0.5s;\\n}\\n@media (hover: hover) {\\n  .button-black:hover {\\n    box-shadow: inset 0 0 0 3em #f0f0f0;\\n    border-color: #f0f0f0;\\n    color: #000;\\n  }\\n}\\n\\n/*  SECTION - HERO HEADER  */\\n.hero-header {\\n  height: 85vh;\\n}\\n.hero-header .svg-arrow-down {\\n  position: relative;\\n  -webkit-animation: scroll-arrow 0.8s ease-out 0.5s infinite alternate;\\n  animation: scroll-arrow 0.8s ease-out 0.5s infinite alternate;\\n}\\n@-webkit-keyframes scroll-arrow {\\n  from {\\n    top: 0px;\\n  }\\n  to {\\n    top: 20px;\\n  }\\n}\\n@keyframes scroll-arrow {\\n  from {\\n    top: 0px;\\n  }\\n  to {\\n    top: 20px;\\n  }\\n}\\n\\n/*  SECTION - ABOUT ME  */\\n#about-me {\\n  padding-top: 3.5em;\\n  background-color: #e6e6e6;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-attachment: fixed;\\n  background-size: cover;\\n  color: #181818;\\n}\\n#about-me h3 {\\n  text-align: left;\\n  color: #181818;\\n  position: relative;\\n  left: -1350px;\\n}\\n#about-me h3.move-right {\\n  -webkit-animation: move 1s forwards;\\n  animation: move 1s forwards;\\n}\\n@-webkit-keyframes move {\\n  from {\\n    left: -950px;\\n  }\\n  to {\\n    left: 0;\\n  }\\n}\\n@keyframes move {\\n  from {\\n    left: -950px;\\n  }\\n  to {\\n    left: 0;\\n  }\\n}\\n#about-me p {\\n  opacity: 0;\\n  -webkit-transition: opacity 0.5s;\\n  transition: opacity 0.5s;\\n}\\n#about-me p.fadein {\\n  opacity: 1;\\n}\\n\\n/*  SECTION - SKILLS  */\\n.skills-wrapper {\\n  display: grid;\\n  grid-gap: 3em 1.5em;\\n}\\n.skills-wrapper .skill-wrap {\\n  display: grid;\\n  justify-items: center;\\n  -webkit-box-align: center;\\n  align-items: center;\\n  grid-gap: 0.3em;\\n  opacity: 0;\\n}\\n.skills-wrapper .skill-wrap.animate-icon {\\n  -webkit-animation: animate-opacity 1s ease-in-out forwards;\\n  animation: animate-opacity 1s ease-in-out forwards;\\n}\\n@-webkit-keyframes animate-opacity {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n@keyframes animate-opacity {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n.skills-wrapper .skill-icon {\\n  width: 8vh;\\n  height: 8vh;\\n}\\n\\n/*  SECTION - PROJECTS  */\\n#projects {\\n  padding: 0;\\n  display: grid;\\n  grid-gap: 1em;\\n}\\n#projects h3,\\n#projects h5 {\\n  grid-column: 1/-1;\\n  margin-bottom: 0;\\n}\\n#projects h5 {\\n  margin: 1em 2em;\\n}\\n#projects .project .project-figure {\\n  position: relative;\\n}\\n#projects .project .project-figure .project-image-wrapper {\\n  position: relative;\\n  height: 90vh;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n#projects .project .project-figure .project-image-wrapper .project-links {\\n  display: -webkit-box;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  justify-content: space-between;\\n  z-index: 1;\\n  position: absolute;\\n  top: 50%;\\n  left: 10%;\\n  width: 13rem;\\n}\\n#projects .project .project-figure .project-image-wrapper .project-links .project-link {\\n  width: 5.5rem;\\n  height: auto;\\n  padding: 0.7em;\\n  margin: 0;\\n  font-size: 0.9em;\\n}\\n#projects .project .project-figure .project-image-wrapper .project-links .link-code {\\n  background: none;\\n}\\n#projects .project .project-figure .project-image-wrapper img {\\n  height: 100%;\\n  width: 100%;\\n  -o-object-fit: cover;\\n  object-fit: cover;\\n  opacity: 1;\\n  -webkit-filter: grayscale(100%) blur(3px) brightness(80%);\\n  filter: grayscale(100%) blur(3px) brightness(80%);\\n  -webkit-transform: scale(1.1);\\n  transform: scale(1.1);\\n}\\n#projects .project .project-figure .project-image-wrapper img.color {\\n  -webkit-animation: img-color 2s ease-in-out;\\n  animation: img-color 2s ease-in-out;\\n}\\n@-webkit-keyframes img-color {\\n  0% {\\n    -webkit-filter: grayscale(100%) blur(3px) brightness(80%);\\n    filter: grayscale(100%) blur(3px) brightness(80%);\\n  }\\n  50% {\\n    -webkit-filter: grayscale(0) blur(0) brightness(90%);\\n    filter: grayscale(0) blur(0) brightness(90%);\\n  }\\n  100% {\\n    -webkit-filter: grayscale(100%) blur(3px) brightness(80%);\\n    filter: grayscale(100%) blur(3px) brightness(80%);\\n  }\\n}\\n@keyframes img-color {\\n  0% {\\n    -webkit-filter: grayscale(100%) blur(3px) brightness(80%);\\n    filter: grayscale(100%) blur(3px) brightness(80%);\\n  }\\n  50% {\\n    -webkit-filter: grayscale(0) blur(0) brightness(90%);\\n    filter: grayscale(0) blur(0) brightness(90%);\\n  }\\n  100% {\\n    -webkit-filter: grayscale(100%) blur(3px) brightness(80%);\\n    filter: grayscale(100%) blur(3px) brightness(80%);\\n  }\\n}\\n#projects .project .project-figure .project-image-wrapper #hexbox-img {\\n  -o-object-position: 0 85%;\\n  object-position: 0 85%;\\n}\\n#projects .project .project-figure .project-figcaption {\\n  position: absolute;\\n  top: 20%;\\n  left: 10%;\\n  display: block;\\n  height: 80%;\\n  width: auto;\\n  margin: 0.5em 1.6em 0 0;\\n  font-size: 0.9em;\\n}\\n#projects .project .project-figure .project-figcaption .project-name {\\n  font-family: Oswald;\\n  font-size: 3.3em;\\n  font-weight: 700;\\n  line-height: 1.2;\\n  text-transform: uppercase;\\n  color: #f0f0f0;\\n  margin-bottom: 0.2em;\\n}\\n#projects .project .project-figure .project-figcaption span {\\n  color: #c0c0c0;\\n  font-size: 0.9em;\\n}\\n#projects .project .project-figure .project-figcaption ul {\\n  position: absolute;\\n  bottom: 5%;\\n}\\n#projects .project .project-figure .project-figcaption ul li {\\n  display: inline;\\n  list-style-type: none;\\n  text-transform: uppercase;\\n  font-size: 0.65em;\\n  color: #b6b6b6;\\n}\\n#projects .project .project-figure .project-figcaption ul li:not(:last-child):after {\\n  content: \\\"/\\\";\\n  padding: 0 0.1em 0 0.5em;\\n}\\n\\n/*  SECTION - CONTACT  */\\n#contact {\\n  background-color: #e6e6e6;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-attachment: fixed;\\n  background-size: cover;\\n  color: #181818;\\n  min-height: 75vh;\\n}\\n#contact h3 {\\n  color: #181818;\\n}\\n#contact h3.pulse {\\n  -webkit-animation: pulse 1.5s;\\n  animation: pulse 1.5s;\\n}\\n@-webkit-keyframes pulse {\\n  0% {\\n    -webkit-transform: scale(1) translate3d(0, 0, 0) perspective(1px);\\n    transform: scale(1) translate3d(0, 0, 0) perspective(1px);\\n  }\\n  50% {\\n    -webkit-transform: scale(1.15) translate3d(0, 0, 0) perspective(1px);\\n    transform: scale(1.15) translate3d(0, 0, 0) perspective(1px);\\n  }\\n  100% {\\n    -webkit-transform: scale(1) translate3d(0, 0, 0) perspective(1px);\\n    transform: scale(1) translate3d(0, 0, 0) perspective(1px);\\n  }\\n}\\n@keyframes pulse {\\n  0% {\\n    -webkit-transform: scale(1) translate3d(0, 0, 0) perspective(1px);\\n    transform: scale(1) translate3d(0, 0, 0) perspective(1px);\\n  }\\n  50% {\\n    -webkit-transform: scale(1.15) translate3d(0, 0, 0) perspective(1px);\\n    transform: scale(1.15) translate3d(0, 0, 0) perspective(1px);\\n  }\\n  100% {\\n    -webkit-transform: scale(1) translate3d(0, 0, 0) perspective(1px);\\n    transform: scale(1) translate3d(0, 0, 0) perspective(1px);\\n  }\\n}\\n#contact p {\\n  text-align: left;\\n  margin: 0.5em 2em;\\n}\\n#contact .social-icons {\\n  display: -webkit-box;\\n  display: flex;\\n  -webkit-box-pack: center;\\n  justify-content: center;\\n}\\n#contact .social-icons a {\\n  margin: 1.5em 0.5em;\\n  text-decoration: none;\\n}\\n#contact .social-icons a svg #Github:hover path#Rounded, #contact .social-icons a svg #Github:focus path#Rounded {\\n  fill: #6e5494;\\n}\\n#contact .social-icons a svg #Linkedin:hover path#Rounded, #contact .social-icons a svg #Linkedin:focus path#Rounded {\\n  fill: #2867b2;\\n}\\n\\n/*  FOOTER  */\\nfooter {\\n  padding-bottom: 2em;\\n}\\nfooter p {\\n  margin: 0.7em;\\n  text-align: center;\\n  font-size: 0.7em;\\n}\\n\\n@media not all and (min-resolution: 0.001dpcm) {\\n  @supports (-webkit-appearance: none) and (stroke-color: transparent) {\\n    body {\\n      background-image: initial;\\n      background-attachment: initial;\\n    }\\n\\n    #about-me,\\n#contact {\\n      background-attachment: scroll;\\n    }\\n  }\\n}\\n@media (min-width: 750px) {\\n  .nav-oblique {\\n    font-size: 1.2em;\\n  }\\n\\n  .navbar-default ul li a {\\n    font-size: 1.2em;\\n  }\\n}\\n@media (max-width: 450px) {\\n  h2 {\\n    margin: 1rem 0 2rem 1rem;\\n  }\\n\\n  .hamburger {\\n    width: 3.2em;\\n    height: 4em;\\n    top: 10px;\\n    left: -55px;\\n  }\\n  .hamburger .bar {\\n    margin: 5px;\\n  }\\n}\\n@media (max-width: 999px) {\\n  section {\\n    padding: 1em 1.5em;\\n  }\\n\\n  .hero-header {\\n    padding: 0 1.5em;\\n  }\\n\\n  .hamburger {\\n    left: -55px;\\n  }\\n\\n  .skills-wrapper {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr;\\n  }\\n}\\n@media (min-width: 1000px) {\\n  h3 {\\n    font-size: 3em;\\n  }\\n\\n  h5 {\\n    font-size: 1.7em;\\n  }\\n\\n  .navbar-default ul li a {\\n    font-size: 1.4em;\\n  }\\n\\n  .navbar-link {\\n    font-size: 1em;\\n  }\\n\\n  .nav-oblique {\\n    font-size: 1.5em;\\n  }\\n\\n  .hero-header h1 {\\n    font-size: 5em;\\n    margin: 5rem 6rem 2rem 6rem;\\n  }\\n  .hero-header h2 {\\n    font-size: 2.5em;\\n    margin: 1rem 6rem 5rem 6rem;\\n  }\\n  .hero-header .svg-arrow-down {\\n    margin-left: 5rem;\\n  }\\n\\n  #about-me {\\n    padding: 3em 12em;\\n    text-align: left;\\n  }\\n  #about-me h3 {\\n    font-size: 3em;\\n    margin: 2em 1em 1em 1em;\\n  }\\n  #about-me p {\\n    font-size: 1.7em;\\n  }\\n\\n  .skills-wrapper {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr 1fr 1fr;\\n    grid-gap: 6em 1.5em;\\n    margin: 4em 0;\\n  }\\n  .skills-wrapper .skill-icon {\\n    width: 10vh;\\n    height: 10vh;\\n  }\\n\\n  #contact {\\n    margin-top: 6em;\\n  }\\n  #contact p {\\n    text-align: center;\\n  }\\n  #contact form {\\n    width: 60%;\\n    margin: 0 auto;\\n  }\\n  #contact form fieldset label {\\n    font-size: 0.9em;\\n  }\\n  #contact form fieldset input[type=email],\\n#contact form fieldset textarea {\\n    font-size: 1.3em;\\n  }\\n}\\n@media (min-width: 1400px) {\\n  #projects {\\n    grid-template-columns: 1fr 1fr;\\n  }\\n  #projects .project-links {\\n    width: 20rem;\\n    top: 35%;\\n  }\\n}\\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\\n  .skills-wrapper {\\n    display: flex;\\n    flex-flow: row wrap;\\n    justify-content: space-between;\\n    align-items: center;\\n    align-self: center;\\n    justify-content: center;\\n    padding: 0.5em 5em;\\n  }\\n  .skills-wrapper .skill-wrap {\\n    margin: 3em 3em;\\n  }\\n  .skills-wrapper .skill-wrap span {\\n    display: block;\\n    text-align: center;\\n    margin-top: 5px;\\n  }\\n\\n  .project-image-wrapper {\\n    background-color: #000 !important;\\n  }\\n  .project-image-wrapper img {\\n    opacity: 0.4 !important;\\n    height: auto !important;\\n  }\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/sass/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/android-chrome-192x192.png":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/android-chrome-192x192.png ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/android-chrome-192x192.png\");\n\n//# sourceURL=webpack:///./src/img/favicon/android-chrome-192x192.png?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/android-chrome-512x512.png":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/android-chrome-512x512.png ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/android-chrome-512x512.png\");\n\n//# sourceURL=webpack:///./src/img/favicon/android-chrome-512x512.png?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/apple-touch-icon.png":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/apple-touch-icon.png ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/apple-touch-icon.png\");\n\n//# sourceURL=webpack:///./src/img/favicon/apple-touch-icon.png?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/browserconfig.xml":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/browserconfig.xml ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/browserconfig.xml\");\n\n//# sourceURL=webpack:///./src/img/favicon/browserconfig.xml?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon-16x16.png":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon-16x16.png ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/favicon-16x16.png\");\n\n//# sourceURL=webpack:///./src/img/favicon/favicon-16x16.png?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon-32x32.png":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon-32x32.png ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/favicon-32x32.png\");\n\n//# sourceURL=webpack:///./src/img/favicon/favicon-32x32.png?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon.ico":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon.ico ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/favicon.ico\");\n\n//# sourceURL=webpack:///./src/img/favicon/favicon.ico?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/mstile-150x150.png":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/mstile-150x150.png ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/mstile-150x150.png\");\n\n//# sourceURL=webpack:///./src/img/favicon/mstile-150x150.png?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/safari-pinned-tab.svg":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/safari-pinned-tab.svg ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/safari-pinned-tab.svg\");\n\n//# sourceURL=webpack:///./src/img/favicon/safari-pinned-tab.svg?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/site.webmanifest":
/*!************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/site.webmanifest ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"favicons/site.webmanifest\");\n\n//# sourceURL=webpack:///./src/img/favicon/site.webmanifest?./node_modules/file-loader/dist/cjs.js?name=favicons/%5Bname%5D.%5Bext%5D");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/img/background-black.svg":
/*!**************************************!*\
  !*** ./src/img/background-black.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/background-black.dbc9b9afb2bda4fe2b5bc27a8e695918.svg\");\n\n//# sourceURL=webpack:///./src/img/background-black.svg?");

/***/ }),

/***/ "./src/img/background-white.svg":
/*!**************************************!*\
  !*** ./src/img/background-white.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"img/background-white.ac6c644c6073f791db81648bb04b800d.svg\");\n\n//# sourceURL=webpack:///./src/img/background-white.svg?");

/***/ }),

/***/ "./src/img/favicon sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./ \\.(svg|png|ico|xml|json|webmanifest)$":
/*!***************************************************************************************************************************************!*\
  !*** ./src/img/favicon sync !./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext] \.(svg|png|ico|xml|json|webmanifest)$ ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./android-chrome-192x192.png\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/android-chrome-192x192.png\",\n\t\"./android-chrome-512x512.png\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/android-chrome-512x512.png\",\n\t\"./apple-touch-icon.png\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/apple-touch-icon.png\",\n\t\"./browserconfig.xml\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/browserconfig.xml\",\n\t\"./favicon-16x16.png\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon-16x16.png\",\n\t\"./favicon-32x32.png\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon-32x32.png\",\n\t\"./favicon.ico\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/favicon.ico\",\n\t\"./mstile-150x150.png\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/mstile-150x150.png\",\n\t\"./safari-pinned-tab.svg\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/safari-pinned-tab.svg\",\n\t\"./site.webmanifest\": \"./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./src/img/favicon/site.webmanifest\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/img/favicon sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./ \\\\.(svg|png|ico|xml|json|webmanifest)$\";\n\n//# sourceURL=webpack:///./node_modules/file-loader/dist/cjs.js?./src/img/favicon_sync_");

/***/ }),

/***/ "./src/img/favicon/favicons.js":
/*!*************************************!*\
  !*** ./src/img/favicon/favicons.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var faviconsContext = __webpack_require__(\"./src/img/favicon sync recursive ./!./!./node_modules/file-loader/dist/cjs.js?name=favicons/[name].[ext]!./ \\\\.(svg|png|ico|xml|json|webmanifest)$\");\n\nfaviconsContext.keys().forEach(faviconsContext);\n\n//# sourceURL=webpack:///./src/img/favicon/favicons.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_favicon_favicons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/favicon/favicons.js */ \"./src/img/favicon/favicons.js\");\n/* harmony import */ var _img_favicon_favicons_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_favicons_js__WEBPACK_IMPORTED_MODULE_1__);\n\n // navbar animation\n\nvar hamburger = document.querySelector('.hamburger');\nvar nav = document.querySelector('nav');\nhamburger.addEventListener('click', function () {\n  hamburger.classList.toggle('menu-is-active');\n  hamburger.classList.contains('menu-is-active') ? nav.classList.add('nav-show') : nav.classList.remove('nav-show');\n}); //animations on scroll\n\ndocument.addEventListener('scroll', function () {\n  var scrollValue = window.pageYOffset;\n  var h1 = document.querySelector('.hero-header').offsetTop;\n  var sectionAbout = document.querySelector('#about-me').offsetTop;\n  var heading = document.querySelector('#about-me h3');\n  var text = document.querySelector('#about-me p');\n  var sectionSkills = document.querySelector('#skills').offsetTop - 200;\n  var skillIconElements = document.querySelectorAll('.skill-wrap');\n  var projectsOffset = document.querySelectorAll('#projects .project');\n  var projectImages = document.querySelectorAll('#projects .project-image-wrapper img');\n  var sectionContact = document.querySelector('#contact').offsetTop - 100;\n  var contactHeading = document.querySelector('#contact h3'); //change navbar\n\n  if (scrollValue <= h1) {\n    nav.classList.add('nav-oblique');\n    nav.classList.remove('navbar-default');\n    hamburger.style.transform = 'translateX(-60px)';\n    nav.classList.remove('nav-show');\n    hamburger.classList.remove('menu-is-active');\n  } else {\n    nav.classList.remove('nav-oblique');\n    nav.classList.add('navbar-default');\n    hamburger.style.transform = 'translateX(60px)';\n  } // text animation\n  // slide heading\n\n\n  if (scrollValue >= sectionAbout - 250) {\n    heading.classList.add('move-right');\n  } // slide paragraph\n\n\n  if (scrollValue >= sectionAbout - 100) {\n    text.classList.add('fadein');\n  } // fade in icons\n\n\n  if (scrollValue >= sectionSkills) {\n    for (var i = 0; i < skillIconElements.length; i++) {\n      skillIconElements[i].classList.add('animate-icon');\n    }\n  }\n\n  ; //coloring projects\n\n  for (var _i = 0; _i < projectsOffset.length; _i++) {\n    if (scrollValue >= projectsOffset[_i].offsetTop - 250) {\n      projectImages[_i].classList.add('color');\n    }\n  } //pulse contact\n\n\n  if (scrollValue >= sectionContact) {\n    contactHeading.classList.add('pulse');\n  }\n});\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ })

/******/ });