---
layout: _layout.njk
tags: 
    - project
description: A custom Anki note type for studying Japanese. Specifically optimized for sentence mining with Yomichan (and Animebook).
title: Eminent Note Type V2
---

# {{title}}

{{description}}

[Download](https://mega.nz/file/OA0RUaiR#lDuLJnZ64BCLkljAM2CNMbaYnXqT7hhaJmXCielc15E)

![front side of the card](/images/notetype2/card_front.png)

![back side of the card](/images/notetype2/card_back.png)

## Features

* [Kanji Hover](/projects/kanjihover) on the front and back
* Audio on back with audio icons overlayed on the image.
* Shows dictionary form of the target word at the top, and automatically highlights the conjugated version of the word in the sentence.
* Shows reading of the target word as furigana.
* Tested on both desktop and mobile

## How To Use

Once you've used the download link at the top of this page, it should have imported a deck (with 1 card) into Anki. You can immediately delete this deck if you want, but sharing decks is currently the only way to share note types. Now you should have a note type called EminentV2.

Now all you have to do is add new cards, or convert existing cards to this note type.

This note type was specifically created to be used with the workflow described in [Sentence Mining With Yomichan & Animebook](/posts/20210703).

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