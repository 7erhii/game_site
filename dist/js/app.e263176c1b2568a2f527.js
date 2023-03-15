/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["image"] = pug_interp = function(file){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${file}`), true, true)+" alt=\"\"") + "\u003E";
};
pug_mixins["card"] = pug_interp = function(image, image2, image3, subtitle){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"card__item\"\u003E\u003Cdiv class=\"card__background\"\u003E\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${image}`), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__content\"\u003E\u003Cdiv class=\"card__title\"\u003E\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${image2}`), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__img\"\u003E\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${image3}`), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__subtitle\"\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = subtitle) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card__btn\"\u003EPLAY NOW\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C!--+card('backgroundCad1.png', 'cardTitle1.png', 'cardimage1.png', 'Casino Game')--\u003E";
pug_mixins["players"] = pug_interp = function(userImage, userName, gameStatus, gameAmount, gameValutaName, gameValutaImg, betMultiple){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv class=\"play\"\u003E\u003Cdiv class=\"playResault\"\u003E\u003Cdiv class=\"useerImage\"\u003E\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${userImage}`), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"userName\"\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = userName) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"gameStatus\"\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = gameStatus) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"gameAmount\"\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = gameAmount) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"gamevaluta\"\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = gameValutaName) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${gameValutaImg}`), true, true)+" alt=\"\"") + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"betMultiple\"\u003E\u003Cp\u003E" + (pug.escape(null == (pug_interp = betMultiple) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"playTime\"\u003E14 minutes ago.\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"page\"\u003E\u003Cdiv class=\"page__content\"\u003E\u003Cheader class=\"header\"\u003E \u003Cdiv class=\"header__content\"\u003E \u003Cdiv class=\"header__logo\"\u003E";
pug_mixins["image"]('logo.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__value\"\u003E\u003Cdiv class=\"header__value-data\"\u003E \u003Cdiv class=\"header__value-content\"\u003E\u003Cdiv class=\"header__value-img\"\u003E ";
pug_mixins["image"]('solanaHeader.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__value-data\"\u003E \u003Cp\u003E1 SOL = $23.08\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__value-content\"\u003E\u003Cdiv class=\"header__value-img\"\u003E ";
pug_mixins["image"]('ligtning.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__value-data\"\u003E \u003Cp\u003E1TPS = $240\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__value-form\"\u003E\u003Cform class=\"header__input-form\"\u003E\u003Cdiv class=\"custom-input\"\u003E\u003Cinput type=\"text\" placeholder=\"Search Partners\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Cdiv class=\"wrapper\"\u003E \u003Cdiv class=\"cards__grid\"\u003E";
pug_mixins["card"]('backgroundCad1.png', 'cardTitle1.png', 'cardimage1.png', 'Casino Game');
pug_mixins["card"]('backgroundcard2.png', 'cardTitle2.png', 'cardimage2.png', 'Casino Game');
pug_mixins["card"]('backgroundcard3.png', 'cardTitle3.png', 'cardimage3.png', 'Casino Game');
pug_mixins["card"]('backgroundcard4.png', 'cardTitle4.png', 'cardimage4.png', 'Casino Game');
pug_mixins["card"]('backgroundcard5.png', 'cardTitle5.png', 'cardimage5.png', 'Casino Game');
pug_mixins["card"]('backgroundcard6.png', 'cardTitle6.png', 'cardimage6.png', 'Casino Game');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Cdiv class=\"players\"\u003E \u003Cdiv class=\"plaers__content\"\u003E \u003Cdiv class=\"players__title\"\u003ERECENT PLAYS\u003C\u002Fdiv\u003E\u003Cdiv class=\"recentPlays\"\u003E ";
pug_mixins["players"]('userLogo1.png', '(GMyHd)', 'WON', '320', 'SUITE', 'userValue.png', 'on a 2X Bet');
pug_mixins["players"]('userLogo2.png', '(EDehT)', 'WON', '0.0665', 'SOL', 'userValue2.png', 'on a 1.33X Bet');
pug_mixins["players"]('userLogo1.png', '(GMyHd)', 'WON', '640', 'SUITE', 'userValue.png', 'on a 2X Bet');
pug_mixins["players"]('userLogo1.png', '(GMyHd)', 'LOST', '160', 'SUITE', 'userValue.png', 'on a 2X Bet');
pug_mixins["players"]('userLogo7.png', '(2KbzC)', 'LOST', '0.25', 'SOL', 'userValue.png', 'on a 2X Bet');
pug_mixins["players"]('userLogo5.png', '(J9QF2)', 'LOST', '200', 'SILVER', 'userValue3.png', 'on a 2X Bet');
pug_mixins["players"]('userLogo6.png', '(6hzte)', 'WON', '33.25', 'POGR', 'userValue3.png', 'on a 1.33X Bet');
pug_mixins["players"]('userLogo7.png', '(2KbzC)', 'WON', '0.1', 'SUITE', 'userValue2.png', 'on a 2X Bet');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/line.pug */ "./src/views/parts/line.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Cdiv class=\"wrapper\"\u003E \u003Cdiv class=\"company\"\u003E \u003Cdiv class=\"company__logo\"\u003E";
pug_mixins["image"].call({
attributes: {"class": "company__logo-image"}
}, 'companyLogo1.png');
pug_mixins["image"].call({
attributes: {"class": "company__logo-image"}
}, 'companyLogo2.png');
pug_mixins["image"].call({
attributes: {"class": "company__logo-image"}
}, 'companyLogo3.png');
pug_mixins["image"].call({
attributes: {"class": "company__logo-image"}
}, 'companyLogo4.png');
pug_mixins["image"].call({
attributes: {"class": "company__logo-image"}
}, 'companyLogo5.png');
pug_mixins["image"].call({
attributes: {"class": "company__logo-image"}
}, 'companyLogo6.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cfooter\u003E\u003Cdiv class=\"wrapper\"\u003E \u003Cdiv class=\"footer__content\"\u003E\u003Cdiv class=\"footer__block\"\u003E \u003Cdiv class=\"footer__logo\"\u003E ";
pug_mixins["image"]('logo.svg');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__descr games\"\u003E \u003Cp\u003EGames\u003C\u002Fp\u003E\u003Ca href=\"#\"\u003ECasino\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003ESportsbook\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EMultiFlip\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003ECups\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003ENFT Auction Game\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__descr websites\"\u003E \u003Cp\u003EWebsites\u003C\u002Fp\u003E\u003Ca href=\"#\"\u003EDegendevil.com\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EMultiflip.io\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EDegenflipcup.io\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__descr community\"\u003E \u003Cp\u003ECommunity\u003C\u002Fp\u003E\u003Ca href=\"#\"\u003ETwitter\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EDiscord\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003EInstagram\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__descr support\"\u003E \u003Cp\u003ESupport\u003C\u002Fp\u003E\u003Ca href=\"#\"\u003EContact Us\u003C\u002Fa\u003E\u003Ca href=\"#\"\u003ETerms of Use\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Ffooter\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/line.pug":
/*!**********************************!*\
  !*** ./src/views/parts/line.pug ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"line\"\u003E \u003Cdiv class=\"dashed__line\"\u003E \u003C\u002Fdiv\u003E\u003Cdiv class=\"runing__line\"\u003E \u003Cp class=\"runing__line-text\"\u003ESOL NFT \u003Cspan\u003EWEEKLY \u003C\u002Fspan\u003E JACKPOT \u002F \u003Cspan\u003EWEEKLY \u003C\u002Fspan\u003E SOL NFT \u003Cspan\u003EWEEKLY \u003C\u002Fspan\u003E JACKPOT \u002F \u003Cspan\u003EWEEKLY \u003C\u002Fspan\u003E SOL NFT \u003Cspan\u003EWEEKLY \u003C\u002Fspan\u003E JACKPOT \u002F \u003Cspan\u003EWEEKLY \u003C\u002Fspan\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"dashed__line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ (() => {

console.log(1);


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Icon1.png": "./src/assets/images/Icon1.png",
	"./backgroundCad1.png": "./src/assets/images/backgroundCad1.png",
	"./backgroundcard2.png": "./src/assets/images/backgroundcard2.png",
	"./backgroundcard3.png": "./src/assets/images/backgroundcard3.png",
	"./backgroundcard4.png": "./src/assets/images/backgroundcard4.png",
	"./backgroundcard5.png": "./src/assets/images/backgroundcard5.png",
	"./backgroundcard6.png": "./src/assets/images/backgroundcard6.png",
	"./cardTitle1.png": "./src/assets/images/cardTitle1.png",
	"./cardTitle2.png": "./src/assets/images/cardTitle2.png",
	"./cardTitle3.png": "./src/assets/images/cardTitle3.png",
	"./cardTitle4.png": "./src/assets/images/cardTitle4.png",
	"./cardTitle5.png": "./src/assets/images/cardTitle5.png",
	"./cardTitle6.png": "./src/assets/images/cardTitle6.png",
	"./cardimage1.png": "./src/assets/images/cardimage1.png",
	"./cardimage2.png": "./src/assets/images/cardimage2.png",
	"./cardimage3.png": "./src/assets/images/cardimage3.png",
	"./cardimage4.png": "./src/assets/images/cardimage4.png",
	"./cardimage5.png": "./src/assets/images/cardimage5.png",
	"./cardimage6.png": "./src/assets/images/cardimage6.png",
	"./companyLogo1.png": "./src/assets/images/companyLogo1.png",
	"./companyLogo2.png": "./src/assets/images/companyLogo2.png",
	"./companyLogo3.png": "./src/assets/images/companyLogo3.png",
	"./companyLogo4.png": "./src/assets/images/companyLogo4.png",
	"./companyLogo5.png": "./src/assets/images/companyLogo5.png",
	"./companyLogo6.png": "./src/assets/images/companyLogo6.png",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./ligtning.png": "./src/assets/images/ligtning.png",
	"./logo.svg": "./src/assets/images/logo.svg",
	"./magnifier-svgrepo-com.svg": "./src/assets/images/magnifier-svgrepo-com.svg",
	"./rating.png": "./src/assets/images/rating.png",
	"./socialLogo1.png": "./src/assets/images/socialLogo1.png",
	"./socialLogo2.png": "./src/assets/images/socialLogo2.png",
	"./socialLogo3.png": "./src/assets/images/socialLogo3.png",
	"./solanaHeader.png": "./src/assets/images/solanaHeader.png",
	"./userLogo1.png": "./src/assets/images/userLogo1.png",
	"./userLogo2.png": "./src/assets/images/userLogo2.png",
	"./userLogo3.png": "./src/assets/images/userLogo3.png",
	"./userLogo4.png": "./src/assets/images/userLogo4.png",
	"./userLogo5.png": "./src/assets/images/userLogo5.png",
	"./userLogo6.png": "./src/assets/images/userLogo6.png",
	"./userLogo7.png": "./src/assets/images/userLogo7.png",
	"./userValue.png": "./src/assets/images/userValue.png",
	"./userValue2.png": "./src/assets/images/userValue2.png",
	"./userValue3.png": "./src/assets/images/userValue3.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/Icon1.png":
/*!*************************************!*\
  !*** ./src/assets/images/Icon1.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/da8b3b7c80718a36fb34.png";

/***/ }),

/***/ "./src/assets/images/backgroundCad1.png":
/*!**********************************************!*\
  !*** ./src/assets/images/backgroundCad1.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/04a119f5c069f53a53c1.png";

/***/ }),

/***/ "./src/assets/images/backgroundcard2.png":
/*!***********************************************!*\
  !*** ./src/assets/images/backgroundcard2.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f7aad6b221f7960dcaba.png";

/***/ }),

/***/ "./src/assets/images/backgroundcard3.png":
/*!***********************************************!*\
  !*** ./src/assets/images/backgroundcard3.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/94ccf25f77cf5355d960.png";

/***/ }),

/***/ "./src/assets/images/backgroundcard4.png":
/*!***********************************************!*\
  !*** ./src/assets/images/backgroundcard4.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/39ac1fde1d873f18d1e8.png";

/***/ }),

/***/ "./src/assets/images/backgroundcard5.png":
/*!***********************************************!*\
  !*** ./src/assets/images/backgroundcard5.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0f2d3b7bd4b972266416.png";

/***/ }),

/***/ "./src/assets/images/backgroundcard6.png":
/*!***********************************************!*\
  !*** ./src/assets/images/backgroundcard6.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4ac04d0e9f8e0153084c.png";

/***/ }),

/***/ "./src/assets/images/cardTitle1.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardTitle1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d28ebe421970bd5bd68f.png";

/***/ }),

/***/ "./src/assets/images/cardTitle2.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardTitle2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d28ebe421970bd5bd68f.png";

/***/ }),

/***/ "./src/assets/images/cardTitle3.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardTitle3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8ce92b2ed4bf28cb8611.png";

/***/ }),

/***/ "./src/assets/images/cardTitle4.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardTitle4.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e579d7828a2cbf35c6d4.png";

/***/ }),

/***/ "./src/assets/images/cardTitle5.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardTitle5.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/986775ca8a554313f870.png";

/***/ }),

/***/ "./src/assets/images/cardTitle6.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardTitle6.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1bbafde83e05f7feb0b3.png";

/***/ }),

/***/ "./src/assets/images/cardimage1.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardimage1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ec643c3c2b77e6174aac.png";

/***/ }),

/***/ "./src/assets/images/cardimage2.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardimage2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/24734c57070747e3af94.png";

/***/ }),

/***/ "./src/assets/images/cardimage3.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardimage3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/78b53521f84b3c897079.png";

/***/ }),

/***/ "./src/assets/images/cardimage4.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardimage4.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f3755d39b638b9a448c0.png";

/***/ }),

/***/ "./src/assets/images/cardimage5.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardimage5.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ed4d9ce68fe8dea6393b.png";

/***/ }),

/***/ "./src/assets/images/cardimage6.png":
/*!******************************************!*\
  !*** ./src/assets/images/cardimage6.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/29fc5ced8e2abd682c28.png";

/***/ }),

/***/ "./src/assets/images/companyLogo1.png":
/*!********************************************!*\
  !*** ./src/assets/images/companyLogo1.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dca338c5731c1c0ece1d.png";

/***/ }),

/***/ "./src/assets/images/companyLogo2.png":
/*!********************************************!*\
  !*** ./src/assets/images/companyLogo2.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/43d3d1a768833a8e18be.png";

/***/ }),

/***/ "./src/assets/images/companyLogo3.png":
/*!********************************************!*\
  !*** ./src/assets/images/companyLogo3.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/170af475c11367c82ddc.png";

/***/ }),

/***/ "./src/assets/images/companyLogo4.png":
/*!********************************************!*\
  !*** ./src/assets/images/companyLogo4.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ec600d145ac05a29b8a4.png";

/***/ }),

/***/ "./src/assets/images/companyLogo5.png":
/*!********************************************!*\
  !*** ./src/assets/images/companyLogo5.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4b387ca185c109739a8c.png";

/***/ }),

/***/ "./src/assets/images/companyLogo6.png":
/*!********************************************!*\
  !*** ./src/assets/images/companyLogo6.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6d01026fa97cbccaf439.png";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "./src/assets/images/ligtning.png":
/*!****************************************!*\
  !*** ./src/assets/images/ligtning.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a4e9b76224d419438695.png";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/596dd43857cff29726c2.svg";

/***/ }),

/***/ "./src/assets/images/magnifier-svgrepo-com.svg":
/*!*****************************************************!*\
  !*** ./src/assets/images/magnifier-svgrepo-com.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1de15b9ef68289de85f0.svg";

/***/ }),

/***/ "./src/assets/images/rating.png":
/*!**************************************!*\
  !*** ./src/assets/images/rating.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/43f68b098a2e4d754657.png";

/***/ }),

/***/ "./src/assets/images/socialLogo1.png":
/*!*******************************************!*\
  !*** ./src/assets/images/socialLogo1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/122fb0243b29a73cada2.png";

/***/ }),

/***/ "./src/assets/images/socialLogo2.png":
/*!*******************************************!*\
  !*** ./src/assets/images/socialLogo2.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/074e12349a4f0d342163.png";

/***/ }),

/***/ "./src/assets/images/socialLogo3.png":
/*!*******************************************!*\
  !*** ./src/assets/images/socialLogo3.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5cd4a994211f80f7973d.png";

/***/ }),

/***/ "./src/assets/images/solanaHeader.png":
/*!********************************************!*\
  !*** ./src/assets/images/solanaHeader.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b59cab858e4aea6e6e2d.png";

/***/ }),

/***/ "./src/assets/images/userLogo1.png":
/*!*****************************************!*\
  !*** ./src/assets/images/userLogo1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d79245111cfbe0a96b73.png";

/***/ }),

/***/ "./src/assets/images/userLogo2.png":
/*!*****************************************!*\
  !*** ./src/assets/images/userLogo2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/68944354275d90233f58.png";

/***/ }),

/***/ "./src/assets/images/userLogo3.png":
/*!*****************************************!*\
  !*** ./src/assets/images/userLogo3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d79245111cfbe0a96b73.png";

/***/ }),

/***/ "./src/assets/images/userLogo4.png":
/*!*****************************************!*\
  !*** ./src/assets/images/userLogo4.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f39e893ca274f086bc75.png";

/***/ }),

/***/ "./src/assets/images/userLogo5.png":
/*!*****************************************!*\
  !*** ./src/assets/images/userLogo5.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d2f732b5b70ab134f4a8.png";

/***/ }),

/***/ "./src/assets/images/userLogo6.png":
/*!*****************************************!*\
  !*** ./src/assets/images/userLogo6.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/755fb68cf4e8a231c6bf.png";

/***/ }),

/***/ "./src/assets/images/userLogo7.png":
/*!*****************************************!*\
  !*** ./src/assets/images/userLogo7.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f39e893ca274f086bc75.png";

/***/ }),

/***/ "./src/assets/images/userValue.png":
/*!*****************************************!*\
  !*** ./src/assets/images/userValue.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/16a35fbb64787f48e2b2.png";

/***/ }),

/***/ "./src/assets/images/userValue2.png":
/*!******************************************!*\
  !*** ./src/assets/images/userValue2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/68b8f5723f66fbb4b6ed.png";

/***/ }),

/***/ "./src/assets/images/userValue3.png":
/*!******************************************!*\
  !*** ./src/assets/images/userValue3.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bb3a14ef838e822ae585.png";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.ts");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ3lCO0FBQ0Q7QUFDSDtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9zY3NzL2FwcC5zY3NzPzhiNmYiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9wYXJ0cy9saW5lLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvc3lrcmVwZXRzL0Rlc2t0b3AvV2ViL3Byb2plY3QvRmlnbWEvZW1wdHktd2VicGFjay1wcm9qZWN0L25vZGVfbW9kdWxlcy9wdWctcnVudGltZXxmcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0V2lkdGggPSAxNDQwLFxuICBkZWZhdWx0Rm9udCA9IDE2LFxuICBtb2JpbGVGb250ID0gMTYsXG4gIG1pbldpZHRoID0gNzY4LFxuICBtaW5IZWlnaHQgPSA2MDAsXG4gIGRlZmF1bHRIZWlnaHQgPSA5MDA7XG5cbmZ1bmN0aW9uIGZTaXplKGRldmljZSwgdlcsIHZIKSB7XG4gIGlmICh2VyA8PSAzNzQpIHtcbiAgICByZXR1cm4gMTM7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlXG4gICAgPyBtb2JpbGVGb250XG4gICAgOiBkZWZhdWx0Rm9udCAqXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgIE1hdGgubWF4KG1pbldpZHRoLCB2VykgLyBkZWZhdWx0V2lkdGgsXG4gICAgICAgICAgTWF0aC5tYXgobWluSGVpZ2h0LCB2SCkgLyBkZWZhdWx0SGVpZ2h0XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmaWVyRGV2aWNlKCkge1xuICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIGlzTW9iaWxlID0gd2luZG93V2lkdGggPD0gNzY3O1xuXG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250U2l6ZSA9XG4gICAgICBmU2l6ZShpc01vYmlsZSwgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCkgKyBcInB4XCI7XG4gIH1cblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxubW9kaWZpZXJEZXZpY2UoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19taXhpbnNbXCJpbWFnZVwiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihmaWxlKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFthdHRyaWJ1dGVzLmNsYXNzXSwgW2ZhbHNlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzLyR7ZmlsZX1gKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXCI7XG59O1xucHVnX21peGluc1tcImNhcmRcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oaW1hZ2UsIGltYWdlMiwgaW1hZ2UzLCBzdWJ0aXRsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19iYWNrZ3JvdW5kXFxcIlxcdTAwM0VcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYXR0cmlidXRlcy5jbGFzc10sIFtmYWxzZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX19jb250ZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjYXJkX190aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtpbWFnZTJ9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX2ltZ1xcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtpbWFnZTN9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRfX3N1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSBzdWJ0aXRsZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2FyZF9fYnRuXFxcIlxcdTAwM0VQTEFZIE5PV1xcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xufTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhLS0rY2FyZCgnYmFja2dyb3VuZENhZDEucG5nJywgJ2NhcmRUaXRsZTEucG5nJywgJ2NhcmRpbWFnZTEucG5nJywgJ0Nhc2lubyBHYW1lJyktLVxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJwbGF5ZXJzXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKHVzZXJJbWFnZSwgdXNlck5hbWUsIGdhbWVTdGF0dXMsIGdhbWVBbW91bnQsIGdhbWVWYWx1dGFOYW1lLCBnYW1lVmFsdXRhSW1nLCBiZXRNdWx0aXBsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJwbGF5XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwbGF5UmVzYXVsdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwidXNlZXJJbWFnZVxcXCJcXHUwMDNFXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHt1c2VySW1hZ2V9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInVzZXJOYW1lXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VcIiArIChwdWcuZXNjYXBlKG51bGwgPT0gKHB1Z19pbnRlcnAgPSB1c2VyTmFtZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZ2FtZVN0YXR1c1xcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gZ2FtZVN0YXR1cykgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZ2FtZUFtb3VudFxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gZ2FtZUFtb3VudCkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZ2FtZXZhbHV0YVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gZ2FtZVZhbHV0YU5hbWUpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFthdHRyaWJ1dGVzLmNsYXNzXSwgW2ZhbHNlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzLyR7Z2FtZVZhbHV0YUltZ31gKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiYmV0TXVsdGlwbGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IGJldE11bHRpcGxlKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwbGF5VGltZVxcXCJcXHUwMDNFMTQgbWludXRlcyBhZ28uXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRUVtcHR5IFByb2plY3RcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXHUwMDNDYm9keVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlX19jb250ZW50XFxcIlxcdTAwM0VcXHUwMDNDaGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRlbnRcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2xvZ29cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdsb2dvLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX192YWx1ZVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX192YWx1ZS1kYXRhXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX192YWx1ZS1jb250ZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX3ZhbHVlLWltZ1xcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdzb2xhbmFIZWFkZXIucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX3ZhbHVlLWRhdGFcXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0UxIFNPTCA9ICQyMy4wOFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX3ZhbHVlLWNvbnRlbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fdmFsdWUtaW1nXFxcIlxcdTAwM0UgXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2xpZ3RuaW5nLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX192YWx1ZS1kYXRhXFxcIlxcdTAwM0UgXFx1MDAzQ3BcXHUwMDNFMVRQUyA9ICQyNDBcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX192YWx1ZS1mb3JtXFxcIlxcdTAwM0VcXHUwMDNDZm9ybSBjbGFzcz1cXFwiaGVhZGVyX19pbnB1dC1mb3JtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjdXN0b20taW5wdXRcXFwiXFx1MDAzRVxcdTAwM0NpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIFBhcnRuZXJzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmZvcm1cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkZXJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNhcmRzX19ncmlkXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCdiYWNrZ3JvdW5kQ2FkMS5wbmcnLCAnY2FyZFRpdGxlMS5wbmcnLCAnY2FyZGltYWdlMS5wbmcnLCAnQ2FzaW5vIEdhbWUnKTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCdiYWNrZ3JvdW5kY2FyZDIucG5nJywgJ2NhcmRUaXRsZTIucG5nJywgJ2NhcmRpbWFnZTIucG5nJywgJ0Nhc2lubyBHYW1lJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgnYmFja2dyb3VuZGNhcmQzLnBuZycsICdjYXJkVGl0bGUzLnBuZycsICdjYXJkaW1hZ2UzLnBuZycsICdDYXNpbm8gR2FtZScpO1xucHVnX21peGluc1tcImNhcmRcIl0oJ2JhY2tncm91bmRjYXJkNC5wbmcnLCAnY2FyZFRpdGxlNC5wbmcnLCAnY2FyZGltYWdlNC5wbmcnLCAnQ2FzaW5vIEdhbWUnKTtcbnB1Z19taXhpbnNbXCJjYXJkXCJdKCdiYWNrZ3JvdW5kY2FyZDUucG5nJywgJ2NhcmRUaXRsZTUucG5nJywgJ2NhcmRpbWFnZTUucG5nJywgJ0Nhc2lubyBHYW1lJyk7XG5wdWdfbWl4aW5zW1wiY2FyZFwiXSgnYmFja2dyb3VuZGNhcmQ2LnBuZycsICdjYXJkVGl0bGU2LnBuZycsICdjYXJkaW1hZ2U2LnBuZycsICdDYXNpbm8gR2FtZScpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGxheWVyc1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcInBsYWVyc19fY29udGVudFxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcInBsYXllcnNfX3RpdGxlXFxcIlxcdTAwM0VSRUNFTlQgUExBWVNcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJyZWNlbnRQbGF5c1xcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcInBsYXllcnNcIl0oJ3VzZXJMb2dvMS5wbmcnLCAnKEdNeUhkKScsICdXT04nLCAnMzIwJywgJ1NVSVRFJywgJ3VzZXJWYWx1ZS5wbmcnLCAnb24gYSAyWCBCZXQnKTtcbnB1Z19taXhpbnNbXCJwbGF5ZXJzXCJdKCd1c2VyTG9nbzIucG5nJywgJyhFRGVoVCknLCAnV09OJywgJzAuMDY2NScsICdTT0wnLCAndXNlclZhbHVlMi5wbmcnLCAnb24gYSAxLjMzWCBCZXQnKTtcbnB1Z19taXhpbnNbXCJwbGF5ZXJzXCJdKCd1c2VyTG9nbzEucG5nJywgJyhHTXlIZCknLCAnV09OJywgJzY0MCcsICdTVUlURScsICd1c2VyVmFsdWUucG5nJywgJ29uIGEgMlggQmV0Jyk7XG5wdWdfbWl4aW5zW1wicGxheWVyc1wiXSgndXNlckxvZ28xLnBuZycsICcoR015SGQpJywgJ0xPU1QnLCAnMTYwJywgJ1NVSVRFJywgJ3VzZXJWYWx1ZS5wbmcnLCAnb24gYSAyWCBCZXQnKTtcbnB1Z19taXhpbnNbXCJwbGF5ZXJzXCJdKCd1c2VyTG9nbzcucG5nJywgJygyS2J6QyknLCAnTE9TVCcsICcwLjI1JywgJ1NPTCcsICd1c2VyVmFsdWUucG5nJywgJ29uIGEgMlggQmV0Jyk7XG5wdWdfbWl4aW5zW1wicGxheWVyc1wiXSgndXNlckxvZ281LnBuZycsICcoSjlRRjIpJywgJ0xPU1QnLCAnMjAwJywgJ1NJTFZFUicsICd1c2VyVmFsdWUzLnBuZycsICdvbiBhIDJYIEJldCcpO1xucHVnX21peGluc1tcInBsYXllcnNcIl0oJ3VzZXJMb2dvNi5wbmcnLCAnKDZoenRlKScsICdXT04nLCAnMzMuMjUnLCAnUE9HUicsICd1c2VyVmFsdWUzLnBuZycsICdvbiBhIDEuMzNYIEJldCcpO1xucHVnX21peGluc1tcInBsYXllcnNcIl0oJ3VzZXJMb2dvNy5wbmcnLCAnKDJLYnpDKScsICdXT04nLCAnMC4xJywgJ1NVSVRFJywgJ3VzZXJWYWx1ZTIucG5nJywgJ29uIGEgMlggQmV0Jyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvbGluZS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImNvbXBhbnlcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJjb21wYW55X19sb2dvXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwiY29tcGFueV9fbG9nby1pbWFnZVwifVxufSwgJ2NvbXBhbnlMb2dvMS5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwiY29tcGFueV9fbG9nby1pbWFnZVwifVxufSwgJ2NvbXBhbnlMb2dvMi5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwiY29tcGFueV9fbG9nby1pbWFnZVwifVxufSwgJ2NvbXBhbnlMb2dvMy5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwiY29tcGFueV9fbG9nby1pbWFnZVwifVxufSwgJ2NvbXBhbnlMb2dvNC5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwiY29tcGFueV9fbG9nby1pbWFnZVwifVxufSwgJ2NvbXBhbnlMb2dvNS5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXS5jYWxsKHtcbmF0dHJpYnV0ZXM6IHtcImNsYXNzXCI6IFwiY29tcGFueV9fbG9nby1pbWFnZVwifVxufSwgJ2NvbXBhbnlMb2dvNi5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0Nmb290ZXJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwid3JhcHBlclxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19ibG9ja1xcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fbG9nb1xcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdsb2dvLnN2ZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19kZXNjciBnYW1lc1xcXCJcXHUwMDNFIFxcdTAwM0NwXFx1MDAzRUdhbWVzXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRUNhc2lub1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VTcG9ydHNib29rXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRU11bHRpRmxpcFxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VDdXBzXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRU5GVCBBdWN0aW9uIEdhbWVcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19kZXNjciB3ZWJzaXRlc1xcXCJcXHUwMDNFIFxcdTAwM0NwXFx1MDAzRVdlYnNpdGVzXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRURlZ2VuZGV2aWwuY29tXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRU11bHRpZmxpcC5pb1xcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VEZWdlbmZsaXBjdXAuaW9cXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19kZXNjciBjb21tdW5pdHlcXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VDb21tdW5pdHlcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFVHdpdHRlclxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBocmVmPVxcXCIjXFxcIlxcdTAwM0VEaXNjb3JkXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRUluc3RhZ3JhbVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXJfX2Rlc2NyIHN1cHBvcnRcXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VTdXBwb3J0XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NhIGhyZWY9XFxcIiNcXFwiXFx1MDAzRUNvbnRhY3QgVXNcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2EgaHJlZj1cXFwiI1xcXCJcXHUwMDNFVGVybXMgb2YgVXNlXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZm9vdGVyXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJsaW5lXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZGFzaGVkX19saW5lXFxcIlxcdTAwM0UgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicnVuaW5nX19saW5lXFxcIlxcdTAwM0UgXFx1MDAzQ3AgY2xhc3M9XFxcInJ1bmluZ19fbGluZS10ZXh0XFxcIlxcdTAwM0VTT0wgTkZUIFxcdTAwM0NzcGFuXFx1MDAzRVdFRUtMWSBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFIEpBQ0tQT1QgXFx1MDAyRiBcXHUwMDNDc3BhblxcdTAwM0VXRUVLTFkgXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRSBTT0wgTkZUIFxcdTAwM0NzcGFuXFx1MDAzRVdFRUtMWSBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFIEpBQ0tQT1QgXFx1MDAyRiBcXHUwMDNDc3BhblxcdTAwM0VXRUVLTFkgXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRSBTT0wgTkZUIFxcdTAwM0NzcGFuXFx1MDAzRVdFRUtMWSBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFIEpBQ0tQT1QgXFx1MDAyRiBcXHUwMDNDc3BhblxcdTAwM0VXRUVLTFkgXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJkYXNoZWRfX2xpbmVcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwiY29uc29sZS5sb2coMSk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vSWNvbjEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uMS5wbmdcIixcblx0XCIuL2JhY2tncm91bmRDYWQxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZENhZDEucG5nXCIsXG5cdFwiLi9iYWNrZ3JvdW5kY2FyZDIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kY2FyZDIucG5nXCIsXG5cdFwiLi9iYWNrZ3JvdW5kY2FyZDMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kY2FyZDMucG5nXCIsXG5cdFwiLi9iYWNrZ3JvdW5kY2FyZDQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kY2FyZDQucG5nXCIsXG5cdFwiLi9iYWNrZ3JvdW5kY2FyZDUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kY2FyZDUucG5nXCIsXG5cdFwiLi9iYWNrZ3JvdW5kY2FyZDYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kY2FyZDYucG5nXCIsXG5cdFwiLi9jYXJkVGl0bGUxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FyZFRpdGxlMS5wbmdcIixcblx0XCIuL2NhcmRUaXRsZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXJkVGl0bGUyLnBuZ1wiLFxuXHRcIi4vY2FyZFRpdGxlMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NhcmRUaXRsZTMucG5nXCIsXG5cdFwiLi9jYXJkVGl0bGU0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FyZFRpdGxlNC5wbmdcIixcblx0XCIuL2NhcmRUaXRsZTUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXJkVGl0bGU1LnBuZ1wiLFxuXHRcIi4vY2FyZFRpdGxlNi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NhcmRUaXRsZTYucG5nXCIsXG5cdFwiLi9jYXJkaW1hZ2UxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FyZGltYWdlMS5wbmdcIixcblx0XCIuL2NhcmRpbWFnZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXJkaW1hZ2UyLnBuZ1wiLFxuXHRcIi4vY2FyZGltYWdlMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NhcmRpbWFnZTMucG5nXCIsXG5cdFwiLi9jYXJkaW1hZ2U0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2FyZGltYWdlNC5wbmdcIixcblx0XCIuL2NhcmRpbWFnZTUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jYXJkaW1hZ2U1LnBuZ1wiLFxuXHRcIi4vY2FyZGltYWdlNi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NhcmRpbWFnZTYucG5nXCIsXG5cdFwiLi9jb21wYW55TG9nbzEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb21wYW55TG9nbzEucG5nXCIsXG5cdFwiLi9jb21wYW55TG9nbzIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb21wYW55TG9nbzIucG5nXCIsXG5cdFwiLi9jb21wYW55TG9nbzMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb21wYW55TG9nbzMucG5nXCIsXG5cdFwiLi9jb21wYW55TG9nbzQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb21wYW55TG9nbzQucG5nXCIsXG5cdFwiLi9jb21wYW55TG9nbzUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb21wYW55TG9nbzUucG5nXCIsXG5cdFwiLi9jb21wYW55TG9nbzYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb21wYW55TG9nbzYucG5nXCIsXG5cdFwiLi9mYXZpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdcIixcblx0XCIuL2xpZ3RuaW5nLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbGlndG5pbmcucG5nXCIsXG5cdFwiLi9sb2dvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIixcblx0XCIuL21hZ25pZmllci1zdmdyZXBvLWNvbS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL21hZ25pZmllci1zdmdyZXBvLWNvbS5zdmdcIixcblx0XCIuL3JhdGluZy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3JhdGluZy5wbmdcIixcblx0XCIuL3NvY2lhbExvZ28xLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc29jaWFsTG9nbzEucG5nXCIsXG5cdFwiLi9zb2NpYWxMb2dvMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NvY2lhbExvZ28yLnBuZ1wiLFxuXHRcIi4vc29jaWFsTG9nbzMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zb2NpYWxMb2dvMy5wbmdcIixcblx0XCIuL3NvbGFuYUhlYWRlci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NvbGFuYUhlYWRlci5wbmdcIixcblx0XCIuL3VzZXJMb2dvMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJMb2dvMS5wbmdcIixcblx0XCIuL3VzZXJMb2dvMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJMb2dvMi5wbmdcIixcblx0XCIuL3VzZXJMb2dvMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJMb2dvMy5wbmdcIixcblx0XCIuL3VzZXJMb2dvNC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJMb2dvNC5wbmdcIixcblx0XCIuL3VzZXJMb2dvNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJMb2dvNS5wbmdcIixcblx0XCIuL3VzZXJMb2dvNi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJMb2dvNi5wbmdcIixcblx0XCIuL3VzZXJMb2dvNy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJMb2dvNy5wbmdcIixcblx0XCIuL3VzZXJWYWx1ZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJWYWx1ZS5wbmdcIixcblx0XCIuL3VzZXJWYWx1ZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy91c2VyVmFsdWUyLnBuZ1wiLFxuXHRcIi4vdXNlclZhbHVlMy5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3VzZXJWYWx1ZTMucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRXaWR0aCIsImRlZmF1bHRGb250IiwibW9iaWxlRm9udCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImZTaXplIiwiZGV2aWNlIiwidlciLCJ2SCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImZvbnRTaXplIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25sb2FkIiwib25yZXNpemUiXSwic291cmNlUm9vdCI6IiJ9