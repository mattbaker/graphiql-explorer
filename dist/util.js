"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flatMap = flatMap;
exports.uniq = uniq;
function flatMap(list, fn) {
  return list.reduce(function (result, element) {
    return result.concat(fn(element) || []);
  }, []);
}

function uniq(list, keyFn) {
  var listMap = list.reduce(function (result, element) {
    result[keyFn(element)] = element;
    return result;
  }, {});
  return Object.values(listMap);
}