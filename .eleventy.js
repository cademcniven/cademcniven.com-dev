const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const posthtml = require("posthtml");
const markdownIt = require('markdown-it');

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

    const markdownItOptions = {
        html: true,
        linkify: true,
        typographer: true
    };

    const md = markdownIt(markdownItOptions)
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-attrs'))
        .use(require("furigana-markdown-it")())
        .use(function (md) {
            // Recognize Mediawiki links ([[text]])
            md.linkify.add("[[", {
                validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
                normalize: match => {
                    const parts = match.raw.slice(2, -2).split("|");
                    parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
                    match.text = (parts[1] || parts[0]).trim();
                    match.url = `/notes/${parts[0].trim()}/`;
                }
            })
        })

    eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })

    eleventyConfig.setLibrary('md', md);

    eleventyConfig.addCollection("notes", function (collection) {
        return collection.getFilteredByGlob(["src/notes/**/*.md", "index.md"]);
    });

    //Get human readable dates for index.html
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
    });

    eleventyConfig.addFilter("cssmin", function (code) {
        return new CleanCSS({}).minify(code).styles;
    });

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

    eleventyConfig.addTransform("lazyLoad", function (content, outputPath) {
        if (outputPath && outputPath.endsWith(".html")) {
            return posthtml()
                .use(require("posthtml-lazyload")({ loading: 'lazy' }))
                .process(content, { sync: true }).html
        }

        return content;
    })

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