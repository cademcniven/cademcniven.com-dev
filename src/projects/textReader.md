---
layout: _layout.njk
tags: 
    - project
description: A web page for viewing Japanese text files in the browser for use with Yomichan. Supports multiple files, shows character count, and caches the page content/position, so you can pick up where you left off.
title: TextReader
---

# {{title}}

A web page for viewing Japanese text files in the browser for use with Yomichan.

[Use it here](/textReader.html)

![demo](/images/textReader/demo.png)

## Features

* Supports showing multiple text files on the page at once
* Shows character count (excluding punctuation)
* Can toggle light/dark mode
* Caches page content and scrollbar position so you can pick up where you left off
* Everything is written on one page, so you can easily save the page for offline use

## How To Use

Go to the [TextReader page](/textReader.html) and drag one or more .txt files onto the page.

## Use Case

This is meant to be used for Japanese text files to be read with Yomichan. Of course, you can view .txt files in the browser normally, but I think this looks nicer.

For longer text files, it would probably be better to convert them to epubs and read them in [ttu reader](https://ttu-ebook.web.app), but for shorter texts that's kind of a hassel, so this could be a good alternative.

The main use case in mind for this project was DLSite ASMR projects that come with scripts. In particular, many of them come with several tracks, and a separate script for each track, so this site would allow you to load all of them at once instead of having to open a new script for each track.

## Offline Use

To use TextReader offline, you can simply right click the page and click "Save Page As".

One thing to note is that the page uses the font [Noto Serif Japanese](https://fonts.google.com/noto/specimen/Noto+Serif+JP). If your computer doesn't have the font installed, the page will attempt to download it from the internet. However, if you plan to use the page offline, you may want to follow that link and download/install the font to your computer. The page will work fine without it, it will just look different.
