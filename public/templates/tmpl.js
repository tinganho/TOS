define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html lang="'+(it.locale)+'"><head><title>'+(it.title)+'</title><link href="/styles/styles.css" rel="stylesheet" type="text/css"></head><body>'+(it.content)+'</body></html>';return out;
};
return tmpl;});
