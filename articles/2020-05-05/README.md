---
title: HTML Tags for SEO
description: The most important HTML tags for SEO that you have to know.
permalink: articles/html-tags-for-seo
date: 2020-05-05
image: /covers/html-tags-for-seo.png
tags:
    - html 
    - seo 
---

The most important HTML tags for SEO that you have to know.

<!-- more -->

## Page Title

As you can guess, the page title is one of the most important elements on a HTML page. All your pages should include this tag. This tag is what Google shows as title of a result per default.

```html
<title>Page Title</title>
```

## Page Description

Also very important: the page description. All your pages should feature a description of their content. This is what Google as the result description per default.

```html
<meta 
    name="description" 
    content="A description of this page.">
```

## Language

You have to tell Google what language you are writing in. It is good in guessing but you always communicate it explicitly just to be on the save side.

```html
<html lang="en">
```

You can also get more specific, by specifying what language style you are writing in.

```html
<html lang="en-US">
```

## Headings

Headings are the headlines used in your article. There are 6 levels of heading going from 1 to 6, where 1 is the most important (highest) level.

Your page should only contain one `<h1>` tag and this should be the first heading on your page. All others go below.

You can picture the headings of your page like a list and your first level heading as the title of the list.

```
Title

- h2
    - h3
        - h4
- h2
    - h3
    - h3
...
```

## Article Tag

Normally the scope of a page is the whole page but you can split up the content of your page into multiple content scopes using the `article` tag. That way you can point out to Google what the most important parts of your page are. You can do so for a whole blog post or you could use it on each element of a blog post listing.

```html
<article>
    <h1>An article on your page</h1>
    <p>With some description to make it look better.</p>
</article>

<article>
    <h1>Another article on your page</h1>
    <p>Also with some description.</p>
</article>
```

## Header Tag

The `header` tag is a nice addition to the headings because normally head header would be considered separately but with this tag you can group other elements to form a custom header.

```html
<article>
    <header>
        <h1>Headline</h1>
        <h2>Subline</h2>
        <p>Some more lines describing the article</p>
    </header>

    <p>The rest of the content ...</p>
</article>
```

## Title and Alt Attributes on Image Tags

Google is really good in handling text and I wouldn't say, that it can't handle images, but they are definitely another topic. So in order to make things easy for Google you should apply the `title` and `alt` attributes on the images show on your page. The `alt` attribute is shown to the user when the image is not loading and therefore a good indicator for Google what it is representing. The `title` attribute is more of a descriptive attribute where you can give some more information about the image.

```html
<article>
    <header>
        <h1>Random Cats</h1>
        <p>A list of random cat images.</p>
        <img 
            src="/covers/random-cats.png" 
            alt="Header Image"
            title="Random Cats">
    </header>

    <ul>
        <li>
            <img src="cat1.png" alt="cat 1" title="A cat in a green shirt.">
        </li>
        <li>
            <img src="cat2.png" alt="cat 2" title="A cat waring sunglasses.">
        </li>
    ...
```

## Aside

Much like pointing out the important contents of your page to Google, you can tell it what you consider not so important.

```html
<article>
    <h1>Post Title</h1>

    <p>Post content to make it look nice.</p>

    <aside>
        Maybe some information about the author?
    </aside>
</article>
```

## Nav

To point out navigation elements to Google you can use the `nav` tag. But don't wrap every link that you consider important into that! Only group real navigation links with it.

```html
<article>
    <h1>Documentation</h1>

    <nav>
        <ul>
            <li>
                <a href="#intro">Introduction</a>
            </li>
            <li>
                <a href="#usage">Usage</a>
            </li>
            ...
        </ul>
    </nav>
</article>
```

## Googlooo!

While writing this article I had the following video in the back of my mind. So to finish off, I thought I share it with you.

<iframe width="560" height="315" src="https://www.youtube.com/embed/abox40ghs7A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>