//const STYLES_REGEXP = /\/\* *STYLE: *.*\*\//gms;
//const STYLES_REGEXP = /<style (lang=".*?")?>(.*?)<\/style>/gms;
const STYLES_REGEXP = /<style>.*?<\/style>/gms;

const getStylesLoader = require.resolve('./getStyles');


module.exports = function (source) {
  if (STYLES_REGEXP.test(source)) {
    source = source.replace(STYLES_REGEXP, '');
    return `import ${JSON.stringify(
      this.utils.contextify(this.context || this.rootContext, `${this.resource}.scss!=!${getStylesLoader}!${this.remainingRequest}`)
    )};${source}`;
  }

  return source;
};

