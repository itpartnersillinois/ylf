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

  eleventyConfig.addFilter("addVideo", function (video) {
    return `<span style='text-transform: uppercase;'>${video}<\span>`; 
  });

  eleventyConfig.addFilter("authorList", function (author) {
    var returnValue = '<ul class="authorlist">';
    author.forEach(element => {
      returnValue = returnValue + `<li><img src="${element.image}" alt="${element.header}"></a><p class="header"><a href="${element.link}">${element.name}</a></p><p class="subheader">${element.subheader}</p>${element.text}</li>`;
    });
    returnValue = returnValue + '</ul>';
    return returnValue;
  });
});
