const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

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

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });

    eleventyConfig.addPlugin(syntaxHighlight);

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