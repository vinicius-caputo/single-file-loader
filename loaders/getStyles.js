//const STYLES_REGEXP = /\/\* *STYLE: *.*\*\//gms;
const STYLES_REGEXP = /<style>.*?<\/style>/gms;
const REPLACE_REGEX = /<style>|<\/style>/gm
module.exports = function (source) {

  const matches = source.match(STYLES_REGEXP);
  const match = matches[0].replace(REPLACE_REGEX, '');
  return match;
};