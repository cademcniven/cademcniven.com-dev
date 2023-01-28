---
layout: _layout.njk
tags: 
    - project
description: A script for Anki that provides information about a kanji by hovering over it.
title: Kanji Hover
---

***Updated 7/10/2022***

A kanji script for Anki

[Download](https://github.com/cademcniven/Kanji-Hover/releases/tag/kanjiHoverV3.1)

[Changelog](https://github.com/cademcniven/Kanji-Hover/blob/main/Changelog.md)

![demo](/images/kanjihover/demo.gif)

## Features

* Hover any kanji for information about its grade level, meanings, and readings.
* Customize which portion of the card to apply the script to.

## How To Use

[Download \_kanjiHover.js](https://github.com/cademcniven/Kanji-Hover/releases/tag/kanjiHoverV3.1) and add it to your collection.media folder.
Add the following line to your note:

```html
<script src="_kanjiHover.js"></script>
```

**Note:** By default, Kanji Hover will not automatically scan your entire card. Instead, it is only active inside `<div id="kanjiHover">`. If you would like it to encompass the entire card, wrap the entire card in that div like so:

![card template](/images/kanjihover/template.png)

## Changing The Appearance

The css for the popup can be changed in two ways:

1. Edit the script itself, at the bottom there is a big block of css that you can edit.
2. Using Anki's Styling area. The area you point at is `.kanjiTooltip`, the popup is `.kanjiTooltipText`, and the red text is `.hoverText`.

## Compatibility & Issues

This script may have issues with other addons or scripts that modify the html of your cards. In those cases there's not a whole lot I can do to prevent it. Other than that, if you find anything, either make an issue or message me on Discord.

## Sources

This project uses the API provided by [kanjiapi.dev](https://kanjiapi.dev).
