module.exports = (function (eleventyConfig) {
    let options = {
        html: true,
        breaks: true,
        linkify: true
      };
    var markdownIt = require("markdown-it")(options);
    var markdownItAttrs = require('markdown-it-attrs');
    
    markdownIt.use(markdownItAttrs, {
        leftDelimiter: '{',
        rightDelimiter: '}',
        allowedAttributes: [] 
      });

    eleventyConfig.setLibrary("md", markdownIt);

    eleventyConfig.addFilter("transformStat", function (stat) {
        first = stat.slice(0, stat.indexOf(' '));
        last = stat.slice(stat.indexOf(' '));

        if (!stat.length)
            return stat;
    
        return `<span>${first}</span>${last}`;
    });
});
