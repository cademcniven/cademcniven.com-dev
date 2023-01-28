---
layout: _layout.njk
tags: 
    - project
description: A custom Anki note type for studying Japanese. Specifically optimized for sentence mining with Yomichan (and Animebook).
title: Eminent Note Type V2.3
---

{{description}}

{% raw %}

***Updated 6/18/2022***

**If you're migrating from a version earlier than v2.3, please see the bottom of the page for migration instructions**

[Download](https://mega.nz/file/7NNxkDiD#pC4F5GQkb4XgASrt62Lst6u9SKSJGzNex4WMecKaQB0)

![front side of the card](/images/notetype2/card_front.png)

![back side of the card](/images/notetype2/card_back.png)

## Features

* [Kanji Hover](/projects/kanjihover) on the front and back
* Audio on back with audio icons overlayed on the image.
* Shows dictionary form of the target word at the top, and automatically highlights the conjugated version of the word in the sentence.
* Shows reading of the target word as furigana, with pitch drops marked. __*__
* Colored box indicates pitch pattern of the word (using 0 javascript). __*__
* Whitespace and parenthesis automatically removed from the sentence field. __*__
* Alternative bold coloring for proper noun cards
* Tested on both desktop and mobile

__*__ Points marked with an asterisk require my [yomichan settings](https://mega.nz/file/qBUkVaCD#9hJyeOCLHacjagScnV0syNA7npjJPhAW3x4xaRd-diM), more is explained further down the page.

Note that my yomichan settings use the [offline audio server](https://learnjapanese.moe/yomichan/#offline-audio-server) as described by TMW, so if you aren't using that, you'll want to edit your audio sources to add back online sources.

## How To Use

Once you've used the download link at the top of this page, it should have imported a deck (with 1 card) into Anki. You can immediately delete this deck if you want, but sharing decks is currently the only way to share note types. Now you should have a note type called EminentV2.3.

Now all you have to do is add new cards, or convert existing cards to this note type.

This note type was specifically created to be used with the workflow described in [Sentence Mining With Yomichan & Animebook](/posts/20210703), but I've also used it with the [rentry mining setup](https://rentry.co/lazyXel).

## Explanation of Fields

Pretty much all fields are optional, so just use the ones that you have the data for.

***wordDictionaryForm***

This is the dictionary form of the word. It will appear separate from the sentence at the top of the card. If this field is empty, the top of the card will show ***word*** instead.

*In yomichan put `{expression}` here*

***word***

This is the target word you're trying to learn. Assuming you're learning an i+1 sentence, there should be exactly 1 unknown word, and that word should go in this field. The word in this field will be highlighted within the sentence.

It's totally fine to leave this field blank, but the highlighting functionality won't work if you do.

In particular, this should be the word **as it appears in the sentence**, not the dictionary form of the word.

*In yomichan put `{cloze-body}` here*

***reading***

This is for the kana form of the target word. This field will be displayed as furigana.

*In yomichan put `{pitch-accents}` here*

If you don't want pitch drops marked, put `{reading}` instead.

***definition***

The definition of ***word***.

*In yomichan put `{glossary-brief}` here*

***sentence***

The sentence that ***word*** appears in.

*In yomichan put `{cloze-prefix}<span class="highlight">{cloze-body}</span>{cloze-suffix}` here*

***wordAudio***

Audio that corresponds to ***wordDictionaryForm***.

*In yomichan put `{audio}` here*

***sentenceAudio***

Audio that corresponds to ***sentence***.

*In yomichan this will be blank, and it will have to be added from another source.*

***picture***

A picture.

*In yomichan this will be blank, and it will have to be added from another source. Depending on your mining setup, you may put `{clipboard-image}` here.*

***pitchAccent***

The pitch accent graph of ***wordDictionaryForm***.

*In yomichan put `{pitch-accent-graphs}` here*

***frequency***

Rarity of ***wordDictionaryForm*** according to some frequency list(s).

*In yomichan put `{frequencies}` here*

## Proper Noun Cards

For those who would like to learn to read proper nouns through mining rather than the [proper nouns deck](https://ankiweb.net/shared/info/3885156604), I've overridden the **bold** styling on the card to change the color of text. This means, whenever you mine a proper noun, you can simply make the **wordDictionaryForm** bold, and the color of the word on the card will change to yellow. This will indicate that you only need to test yourself on the reading, not the meaning.

![front side of the card with proper noun highlighting](/images/notetype2/proper_noun.png)

Of course, even if you aren't mining proper nouns, this feature may also be useful for cards that have many definitions, and you want to focus on only one or two.

![back side of the card with definition highlighting](/images/notetype2/highlighted_definition.png)

## Pitch Accent Features

**This will only work using my Yomichan export settings**

### Pitch Accent Colors

If you choose to have it enabled, this note type supports color coding your target word based on the system popularized by MIA/Migaku. Rather than coloring the entire word, this note will put a square next to the word that is the color of the pitch pattern.

The pitch accent styling is highly customizable, and even toggleable if you would prefer not to have it at all. Thus, I thought it warranted a bit of explanation so you can edit it to fit your preferences.

Using my template settings, Yomichan will export the dictionary form of the word wrapped in a span with one of the following classes:

* .heiban
* .atamadaka
* .nakadaka
* .odaka
* .kifuku

For example, it might look like this:

```html
<span class="heiban">平日</span>
```

By default, I have the following CSS on the note type:

```css
/****** colors ******/
:root {
	--red: #fd5c5c;
	--blue: #89daff;
	--orange: #fca311;
	--green: #4e937a;
	--purple: #afa2ff;
}

/****** pitch accent colors ******/

.heiban::before {
	content: "";
	display: inline-block;
	height: 0.7ch;
	width: 0.7ch;
	margin-right: 10px;
	margin-bottom: 0.3ch;
	background-color: var(--blue);
}

.atamadaka::before {
	content: "";
	display: inline-block;
	height: 0.7ch;
	width: 0.7ch;
	margin-right: 10px;
	margin-bottom: 0.3ch;
	background-color: var(--red);
}

.nakadaka::before {
	content: "";
	display: inline-block;
	height: 0.7ch;
	width: 0.7ch;
	margin-right: 10px;
	margin-bottom: 0.3ch;
	background-color: var(--orange);
}

.odaka::before {
	content: "";
	display: inline-block;
	height: 0.7ch;
	width: 0.7ch;
	margin-right: 10px;
	margin-bottom: 0.3ch;
	background-color: var(--green);
}

.kifuku::before {
	content: "";
	display: inline-block;
	height: 0.7ch;
	width: 0.7ch;
	margin-right: 10px;
	margin-bottom: 0.3ch;
	background-color: var(--purple);
}
```

If you want to change the colors, you can just change the hex code inside of `:root`.

The color I chose for each pitch pattern is the same as Migaku Japanese, so if you're already used to their system you won't need to re-learn another. If you want to use different colors for the various pitch patterns, just change which variable is used. For example, change `var(--green)` to `var(--blue)`, etc.

If you don't want pitch coloring at all, you can just remove that CSS and the word will be white.

Since the word is simply tagged with a class based on pitch, you're not limited to just colors for styling, you can use [any css](https://www.w3schools.com/css/) on it. Feel free to get creative.

I used to link to the Migaku documentation that explained their pitch accent coloring system, but since they removed that page, I'll throw the chart here in case anyone's confused:

* heiban: blue
* atamadaka: red
* nakadaka: orange
* odaka: green
* kifuku: purple

If you look at the `{pitchAccent}` field of the card, you may see more than one pitch graph. If you want to change the furigana pitch pattern to match one of the others on the list, you can do so by following these steps:

1. Go to the card you want to edit in the card browser
2. Click on the `{wordDictionaryForm}` field
3. Click on this button to edit the field in HTML mode
![edit html button](/images/notetype2/edit_html_button.png)
4. Edit the class name to be the name of the pitch pattern you want it to be

![anki field in html mode](/images/notetype2/field_pitch_pattern.png)

### Pitch-marked Furigana

It's possible for words to have multiple correct pitch patterns, and there's no way for my note type to automatically know which pattern is used in the sentence you mined. Therefore, by default, the card will show the first pitch pattern on the list of correct patterns.

If your dictionary has no pitch entry for the word, it will just show the plain furigana.

If you look at the `{pitchAccent}` field of the card, you may see more than one pitch graph. If you want to change the furigana pitch pattern to match one of the others on the list, you can do so by following these steps:

1. Go to the card you want to edit in the card browser
2. Click on the `{reading}` field
3. Click on this button to edit the field in HTML mode
![edit html button](/images/notetype2/edit_html_button.png)
4. The field will be an `<ol>` containing several `<li>`. By default, the card will show only the first `<li>`, so you'll want to delete any `<li>` that are above the pattern you want

![anki field in html mode](/images/notetype2/html_mode.png)

![highlight showing which part of the code to remove](/images/notetype2/li_to_remove.png)

If you didn't understand anything I just said, it's probably best to not mess with it. Or maybe it's time to turn your life around and [learn html](https://www.freecodecamp.org/)? You do you.

## Stylistic Decisions

### Removing Picture From Front

If you used my note type prior to version 2.3, you'll notice that newer versions only have a picture on the back instead of on both sides. This decision was made because after a year of repping cards with the image on the front, I found my recall of certain words in immersion was lacking because of how much context I was giving myself in Anki.

Of course, I knew from the beginning this would be a problem, and I don't really regret my decision, it is just personally time for me to move on from it.

The pros and cons are pretty straightforward:

* No-images on the front means you'll learn the word better and recognize it easier in immersion.
* Images on front -- for me -- are more enjoyable to rep.

At the time I made the original version of this note type, the enjoyability of Anki was more important than the benefit I'd get repping without images. I also believe that Anki won't teach you every detail and nuance of a word, it's more for getting you to basic competency with it. Actual mastery of vocabulary comes from immersion. Since I need to see a word hundreds of times in immersion to master it anyways, having the picture on front shouldn't matter *that* much, considering the increase in enjoyment it brings.

However, as I got better, cards without images became less of a struggle for me, and images became more of a distraction for me. Because of this, I removed it from the front.

Now, I know I don't really need to justify myself to make changes to my own note type -- this explanation exists so you can make an informed decision on how you want to rep your cards. If you're fine without images, use this note type as-is. If you, after reading all that, would prefer to have images on the front, then change this (on the front of your card template):

```html
	<div id="sentence">
		{{sentence}}
	</div>
```

to this:

```html
	{{picture}}
	<div id="sentence">
		{{sentence}}
	</div>
```

### Font

The note type currently uses [BIZ UD Mincho](https://www.morisawa.co.jp/products/fonts/bizplus/). Thank you `An#7416` for convincing me.

If you want to use this font in other places, you can buy it from their site (linked above) or use the [open source version](https://github.com/googlefonts/morisawa-biz-ud-mincho) for free.

If you're interested in it, for some reason Morisawa uploaded [an entire playlist](https://www.youtube.com/playlist?list=PLw84Z2tmnVAOiuZ06tSpt3yuJyyylaBch) of videos to youtube introducting the font.

## Yomichan Handlebars

The features of this note type make use of custom yomichan handlebars. In case you don't want to completely import my yomichan settings, you can just copy [my handlebars](https://gist.github.com/cademcniven/dde2597e759ab2c9ab17a4deac673f33).

In case you're interested (or only want part of the functionality), I'll explain the things I changed.

In `{{#*inline "expression"}}` I added

```handlebars
{{~#if modeTermKana~}}
	{{~#if definition.reading~}}
		<span class="{{~#each (pitchCategories .)~}}
		{{~#if @first}}{{.}}{{~/if}}
		{{~/each~}}">{{definition.reading}}</span>
	{{~else~}}
		<span class="{{~#each (pitchCategories .)~}}
		{{~#if @first}}{{.}}{{~/if}}
		{{~/each~}}">{{definition.expression}}</span>
	{{~/if~}}
{{~else~}}
	<span class="{{~#each (pitchCategories .)~}}
		{{~#if @first}}{{.}}{{~/if}}
		{{~/each~}}">{{definition.expression}}</span>
{{~/if~}}
```

This is the part that wraps the expression in the class for the pitch pattern. In order to get the actual name of the pitch pattern I added:

```handlebars
{{#*inline "pitch-accent-categories"}}
    {{~#each (pitchCategories .)~}}
        {{~#if @first}}{{.}}{{~/if}}
    {{~/each~}}
{{/inline}}
```

This code comes from [yomichan's template doc](https://github.com/FooSoft/yomichan/blob/master/docs/templates.md).

If you use `{pitch-accents}` for furigana, and there's no pitch data found in your dictionary, it will say something like "No Pitch Data Found" by default. In order to show plain furigana instead, I changed the `{{~else~}}` clause of `{{#*inline "pitch-accent-list"}}` to be:

```handlebars
{{~else~}}
	{{~definition.reading~}}
{{~/if~}}
```

Finally, I wanted the `{sentence}` field on my card to not contain any whitespace, and I also wanted to strip out parenthesis, as well as any text within them. This is because anime subtitles will often put names inside of parenthesis, or furigana (that doesn't render properly).

To accomplish this I edited `{{#*inline "cloze-prefix"}}` and `{{#*inline "cloze-suffix"}}` to look like this:

```handlebars
{{#*inline "cloze-prefix"}}
    {{~#if definition.cloze}}
        {{#regexReplace "(（.*）| \(.*\)|　*|\s+)*" ""}}     {{definition.cloze.prefix}}{{/regexReplace}}
    {{/if~}}
{{/inline}}
```

```handlebars
{{#*inline "cloze-suffix"}}
    {{~#if definition.cloze}}
        {{#regexReplace "(（.*）| \(.*\)|　*|\s+)*" ""}}     {{definition.cloze.suffix}}{{/regexReplace}}
    {{/if~}}
{{/inline}}
```

## Migrating From Versions Prior to V2.3

If you have a prior version of my note type, **do not** change your cards to the new version. Instead, import the new version and make your future cards use this note type.

The reason is that older versions used a script on the card to highlight the word in the sentence. However, the new version has yomichan send over the sentence with the word pre-highlighted. This means that if you changed your old cards to the new note type, the highlight functionality would be broken for all of those cards.

If you're fine with that, feel free to change your old cards to the new version. It's also possible to manually re-add that highlight script and edit the yomichan field to be the same as before. I don't really recommend this, but you do you.

If you're using my old yomichan settings, you'll also want to [import my new settings](https://mega.nz/file/qBUkVaCD#9hJyeOCLHacjagScnV0syNA7npjJPhAW3x4xaRd-diM) or just read the other parts of this page to piece together the pieces you need (see the field explanations and handlebars settings).

My yomichan settings use the [offline audio server](https://learnjapanese.moe/yomichan/#offline-audio-server) as described by TMW, so if you aren't using that, you'll want to edit your audio sources to add back online sources.

If you're using my note type in conjunction with [animebook](/posts/20210703), you'll want to import my new [animebook settings](https://mega.nz/file/mB9mBbrL#AUzdAT7uRrYYCrcEbMfyXTTpMvOqAlvVARA1wMKfXxs).

The only change to the animebook settings is that it will only add a sentence to the card if the sentence field is blank. Feel free to just change that setting instead of re-importing if you want.

## Changelog

* 6/18/2022
  * Rewrote [Kanji Hover](/projects/kanjihover) and re-enabled it in the note type

* 6/17/2022
  * Changed dictionary centering css to be on card instead of in handlebars
  * Changed pitch graph coloring css to be on card instead of in handlebars
  * Rearranged the order of fields so that `wordDictionaryForm` appears before `word`. This change allows for proper detection of duplicates.
  * Changed image to be on the back only
  * Added pitch info to furigana
  * Added regex patterns to remove whitespace and text within parenthasis from the sentence.
  * Changed the font to [BIZ UD Mincho](https://www.morisawa.co.jp/products/fonts/bizplus/)

* 12/4/2021
  * Updated pitch accent colors.
  * Removed pitch accent colors from the wordDictionaryForm, and instead made a colored square next to the word.
  * Added style overrides to bold text, to accomodate proper noun mining and definition highlighting.

* 7/10/2021
  * Added pitch accent coloring.
  * sentenceAudio replay button is now correctly repositioned when the card has no wordAudio.

{% endraw %}