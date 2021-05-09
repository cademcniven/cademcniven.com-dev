const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/japanese_glosser");
    eleventyConfig.addPassthroughCopy({ "src/gloss.html": "/gloss.html" });
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/**/*.gif");
    eleventyConfig.addWatchTarget("src/japanese_glosser");
    eleventyConfig.addWatchTarget("src/scripts");
    eleventyConfig.addWatchTarget("src/**/*.css");
    eleventyConfig.addWatchTarget("src/**/*.jpg");
    eleventyConfig.addWatchTarget("src/**/*.png");
    eleventyConfig.addWatchTarget("src/**/*.gif");

    //Get human readable dates for index.html
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });

    //Minify css
    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

    //Minify html
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if (outputPath && outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(lazyImagesPlugin);

    return {
        dir: {
            input: "src",
            output: "../public"
        }
    }
};

exports.render = function (data) {
    return `<ul>
    ${data.collections.post.map(post =>
        `<li><a href="${post.url}">${post.data.title}</a></li>`
    ).join("\n")};
  </ul > `;
};