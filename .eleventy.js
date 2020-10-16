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

    eleventyConfig.addFilter("transformListWithImages", function (item) {
      var returnValue = '<ul class="imagelist">';
      item.forEach(element => {
        returnValue = returnValue + `<li><img src="${element.image}" alt="${element.header}"><p class="header">${element.header}</p><p class="subheader">${element.subheader}</p>${element.text}</li>`
      });
      returnValue = returnValue + '</ul>'
      return returnValue;
    });

    eleventyConfig.addFilter("transformGridWithImages", function (item) {
      var returnValue = '<ul class="imagegrid">';
      item.forEach(element => {
        returnValue = returnValue + `<li><a href="https://education.illinois.edu/faculty/${element.url}"><img src="${element.image}" alt="${element.header}"></a><p><a href="https://education.illinois.edu/faculty/${element.url}">${element.header},</a> ${element.subheader}</p></li>`
      });
      returnValue = returnValue + '</ul>'
      return returnValue;
    });

});
