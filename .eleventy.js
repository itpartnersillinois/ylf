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
    return `<div style='position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0; margin-bottom: 20px;'><iframe title='YouTube Video Frame' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='${video}' frameborder='0' allowfullscreen></iframe></div>`; 
  });

  eleventyConfig.addFilter("menu", function (items) {
    var returnValue = '<ul>';
    items.forEach(element => {
      returnValue = returnValue + `<li><a href="${element.url}">${element.name}</a></li>`;
    });
    returnValue = returnValue + '</ul>';
    return returnValue;
  });

  eleventyConfig.addFilter("formatSponsors", function (items) {
    var returnValue = '<div class="sponsorsgrid"> ';
    items.forEach(element => {
      returnValue = returnValue + (element.img == '' ? `<div class="sponsortext">${element.name}</div>` : `<div><img src='/img/sponsors/${element.img}' alt='${element.name}'></div>`);
    });
    returnValue = returnValue + '</div>';
    return returnValue;
  });
  
  eleventyConfig.addFilter("circleFormat", function (items) {
    var returnValue = '<div class="circlecol"> ';
    items.forEach(element => {
      returnValue = returnValue + `<div class="circle circ1 blue" onmouseover="circleOver(this)" onmouseout="circleOut(this)"> <div class="circle-normal-text" style="display: block;"> <span class="number">${element.number}</span> <span class="text" style="text-transform:uppercase;font-size:.8em;"> <strong>${element.subject}</strong><br>${element.verb}</span> </div> <div style="display: none;" class="circle-highlighted-text">${element.subject}</div> <div class="flyout1" style="display: none;"> ${element.flyout}</div> </div>`;
    });
    returnValue = returnValue + '</div>';
    return returnValue;
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
