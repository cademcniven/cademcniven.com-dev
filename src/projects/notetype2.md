---
layout: _layout.njk
tags: 
    - project
description: A custom Anki note type for studying Japanese. Specifically optimized for sentence mining with Yomichan (and Animebook).
title: Eminent Note Type V2
---

# {{title}}

{{description}}

***Updated 7/10/2021***

[Download](https://mega.nz/file/rRUlFAya#k6hv6vyro4tHnzgg1pitSuiLOIaxeaPIsfk0npoUDjE)

![front side of the card](/images/notetype2/card_front.png)

![back side of the card](/images/notetype2/card_back.png)

## Features

* [Kanji Hover](/projects/kanjihover) on the front and back
* Audio on back with audio icons overlayed on the image.
* Shows dictionary form of the target word at the top, and automatically highlights the conjugated version of the word in the sentence.
* Shows reading of the target word as furigana.
* Colors the dictionary form of the word based on its pitch pattern (using 0 javascript).
* Tested on both desktop and mobile

## How To Use

Once you've used the download link at the top of this page, it should have imported a deck (with 1 card) into Anki. You can immediately delete this deck if you want, but sharing decks is currently the only way to share note types. Now you should have a note type called EminentV2.

Now all you have to do is add new cards, or convert existing cards to this note type.

This note type was specifically created to be used with the workflow described in [Sentence Mining With Yomichan & Animebook](/posts/20210703).

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
	--blue: #42CAFD;
	--orange: #fca311;
	--green: #75C1A3;
	--purple: #D4CBE5;
}

/****** pitch accent colors ******/

.heiban {
	color: var(--blue);
}

.atamadaka {
	color: var(--red);
}

.nakadaka {
	color: var(--orange);
}

.odaka {
	color: var(--green);
}

.kifuku {
	color: var(--purple);
}
```

If you want to change the colors, you can just change the hex code inside of `:root`.

The color I chose for each pitch pattern is the same as [Migaku Japanese](https://www.migaku.io/tools-guides/migaku-japanese/manual/#pitch-accent-coloring), so if you're already used to their system you won't need to re-learn another. If you want to use different colors for the various pitch patterns, just change which variable is used. For example, change `var(--green)` to `var(--blue)`, etc.

If you don't want pitch coloring at all, you can just remove that CSS and the word will be white.

By default, pitch coloring is only shown on the back of the card. If you want coloring on the front as well, you need to remove the `class="white"` from a div on the front side of the card.

```html
	<!---------------- If you want pitch coloring on the front, remove the "white" class below ---------------->
	<div id="word" class="white">
```

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

* 7/10/2021
  * Added pitch accent coloring.
  * sentenceAudio replay button is now correctly repositioned when the card has no wordAudio.
