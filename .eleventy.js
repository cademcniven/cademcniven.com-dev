const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const posthtml = require("posthtml");
const markdownIt = require('markdown-it');
const img2picture = require("eleventy-plugin-img2picture");
const slugify = require("slugify");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require('eleventy-plugin-nesting-toc');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/japanese_glosser");
    eleventyConfig.addPassthroughCopy({ "src/gloss.html": "/gloss.html" });
    eleventyConfig.addPassthroughCopy({ "../textReader/textReader.html": "/textReader.html" });
    eleventyConfig.addPassthroughCopy({ "../subtitleCharacterCounter/subtitleCharacterCounter.html": "/subtitleCharacterCounter.html" });
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/**/*.css");
    eleventyConfig.addPassthroughCopy("src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("src/**/*.png");
    eleventyConfig.addPassthroughCopy("src/**/*.gif");
    eleventyConfig.addPassthroughCopy("src/**/*.svg");
    eleventyConfig.addPassthroughCopy("src/**/*.webmanifest");
    eleventyConfig.addWatchTarget("src/japanese_glosser");
    eleventyConfig.addWatchTarget("src/scripts");
    eleventyConfig.addWatchTarget("src/**/*.css");
    eleventyConfig.addWatchTarget("src/**/*.jpg");
    eleventyConfig.addWatchTarget("src/**/*.png");
    eleventyConfig.addWatchTarget("src/**/*.gif");
    eleventyConfig.addWatchTarget("src/**/*.webmanifest");

    const linkAfterHeader = markdownItAnchor.permalink.linkAfterHeader({
        class: "anchor",
        symbol: "<span hidden>#</span>",
        style: "aria-labelledby",
    });

    const markdownItAnchorOptions = {
        level: [2, 3, 4, 5],
        slugify: (str) =>
            slugify(str, {
                lower: true,
                strict: true,
                remove: /["]/g,
            }),
        tabIndex: false,
        permalink(slug, opts, state, idx) {
            state.tokens.splice(
                idx,
                0,
                Object.assign(new state.Token("div_open", "div", 1), {
                    // Add class "header-wrapper [h1 or h2 or h3]"
                    attrs: [["class", `heading-wrapper ${state.tokens[idx].tag}`]],
                    block: true,
                })
            );

            state.tokens.splice(
                idx + 4,
                0,
                Object.assign(new state.Token("div_close", "div", -1), {
                    block: true,
                })
            );

            linkAfterHeader(slug, opts, state, idx + 1);
        },
    };


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


    eleventyConfig.addFilter("slug", (str) => {
        if (!str) {
            return;
        }

        return slugify(str, {
            lower: true,
            strict: true,
            remove: /["]/g,
        });
    });

    /* Markdown Overrides */
    let markdownLibrary = markdownIt({
        html: true,
    }).use(markdownItAnchor, markdownItAnchorOptions);

    eleventyConfig.setLibrary('md', markdownLibrary);

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
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3', 'h4', 'h5']
    });

    eleventyConfig.addPlugin(img2picture, {
        eleventyInputDir: "src",
        imagesOutputDir: "../public/images",
        urlPath: "/images/",
        formats: ["avif", "webp", "png", "jpeg"]
    });

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