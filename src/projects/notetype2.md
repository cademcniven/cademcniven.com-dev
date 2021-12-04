---
layout: _layout.njk
tags: 
    - project
description: A custom Anki note type for studying Japanese. Specifically optimized for sentence mining with Yomichan (and Animebook).
title: Eminent Note Type V2
---

# {{title}}

{{description}}

***Updated 12/4/2021***

[Download](https://mega.nz/file/TN10nDIA#Qq0SmyrhhlA-AJUW3PefICyfhdAh8yE4rNLY0YaHZz8)

![front side of the card](/images/notetype2/card_front.png)

![back side of the card](/images/notetype2/card_back.png)

## Features

* [Kanji Hover](/projects/kanjihover) on the front and back
* Audio on back with audio icons overlayed on the image.
* Shows dictionary form of the target word at the top, and automatically highlights the conjugated version of the word in the sentence.
* Shows reading of the target word as furigana.
* Colored box indicates pitch pattern of the word (using 0 javascript).
* Alternative bold coloring for proper noun cards
* Tested on both desktop and mobile

## How To Use

Once you've used the download link at the top of this page, it should have imported a deck (with 1 card) into Anki. You can immediately delete this deck if you want, but sharing decks is currently the only way to share note types. Now you should have a note type called EminentV2.

Now all you have to do is add new cards, or convert existing cards to this note type.

This note type was specifically created to be used with the workflow described in [Sentence Mining With Yomichan & Animebook](/posts/20210703).

## Proper Noun Cards

For those who would like to learn to read proper nouns through mining rather than the [proper nouns deck](https://ankiweb.net/shared/info/3885156604), I've overridden the **bold** styling on the card to change the color of text. This means, whenever you mine a proper noun, you can simply make the **wordDictionaryForm** bold, and the color of the word on the card will change to yellow. This will indicate that you only need to test yourself on the reading, not the meaning.

![front side of the card with proper noun highlighting](/images/notetype2/proper_noun.png)

Of course, even if you aren't mining proper nouns, this feature may also be useful for cards that have many definitions, and you want to focus on only one or two.

![back side of the card with definition highlighting](/images/notetype2/highlighted_definition.png)

## Pitch Accent Colors

**This will only work using my Yomichan export settings from [Sentence Mining With Yomichan & Animebook](/posts/20210703)**

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

The color I chose for each pitch pattern is the same as [Migaku Japanese](https://www.migaku.io/tools-guides/migaku-japanese/manual/#pitch-accent-coloring), so if you're already used to their system you won't need to re-learn another. If you want to use different colors for the various pitch patterns, just change which variable is used. For example, change `var(--green)` to `var(--blue)`, etc.

If you don't want pitch coloring at all, you can just remove that CSS and the word will be white.

Since the word is simply tagged with a class based on pitch, you're not limited to just colors for styling, you can use [any css](https://www.w3schools.com/css/) on it. Feel free to get creative.

## Explanation of Fields

Pretty much all fields are optional, so just use the ones that you have the data for.

***word***

This is the target word you're trying to learn. Assuming you're learning an i+1 sentence, there should be exactly 1 unknown word, and that word should go in this field. The word in this field will be highlighted within the sentence.

It's totally fine to leave this field blank, but the highlighting functionality won't work if you do.

In particular, this should be the word **as it appears in the sentence**, not the dictionary form of the word.

***wordDictionaryForm***

This is the dictionary form of the word. It will appear separate from the sentence at the top of the card. If this field is empty, the top of the card will show ***word*** instead.

***reading***

This is for the kana form of the target word. This field will be displayed as furigana.

***definition***

The definition of ***word***.

***sentence***

The sentence that ***word*** appears in.

***wordAudio***

Audio that corresponds to ***wordDictionaryForm***.

***sentenceAudio***

Audio that corresponds to ***sentence***.

***picture***

A picture.

***pitchAccent***

The pitch accent graph of ***wordDictionaryForm***.

***frequency***

Rarity of ***wordDictionaryForm*** according to some frequency list(s).

## Changelog

* 12/4/2021
  * Updated pitch accent colors.
  * Removed pitch accent colors from the wordDictionaryForm, and instead made a colored square next to the word.
  * Added style overrides to bold text, to accomodate proper noun mining and definition highlighting.

* 7/10/2021
  * Added pitch accent coloring.
  * sentenceAudio replay button is now correctly repositioned when the card has no wordAudio.
