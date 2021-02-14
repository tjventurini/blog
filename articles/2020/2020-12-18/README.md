---
title: VSCode Template Manager
description: How to use VSCode Template Manager.
date: 2020-12-18
permalink: articles/vs-code-template-manager
image: /covers/vs-code-template-manager.png
tags: 
    - vscode
---

This year I switched from PhpStorm to VSCode. One of the things I had to figure out was how to use _real_ templates, rather than the built snippets. Turns out this is my favorite template management so far. But enough of the chit-chat, let's take a closer look.

<!-- more -->

Since vscode only ships with snippets, I had to look for a solution. The extension I stayed with is the awesome [File Tamplates Manager](https://marketplace.visualstudio.com/items?itemName=3axap4eHko.file-templates-manager).

The extensions uses the [doT.js](http://olado.github.io/doT/index.html) library to generate the file from your template. The basic syntax as shown in the documentation is as shown below.

```
{{ }} - evaluation
{{= }} - interpolation
{{! }} - interpolation with encoding
{{# }} - compile-time evaluation/includes and partials
{{## #}} - compile-time defines
{{? }} - conditionals
{{~ }} - array iteration
```

Not so helpful right? But after you figured it out, you will be able to create awesome templates.

## Simple Example

Here is a simple example, where I added a prompt for the namespace while creating a php class.

```
{{#def.prompt('NAMESPACE', 'Enter a Namespace for this Class.')}}
<?php

namespace {{=$.NAMESPACE}};

class {{=$.NAME}}
{
}
```

Let me break it down for you.

With the first line I add the prompt for the namespace.

```
{{#def.prompt('NAMESPACE', 'Enter a Namespace for this Class.')}}
```

In your template body you then can use the following to reference the value given by the user.

```
{{=$.NAMESPACE}}
```

The file name, that you have to enter in the first prompt when using this template, is stored in the following.

```
{{=$.NAME}}
```

As you can see, the way you reference as shown below.

```
{{=$.VARIABLE_NAME}}
```

## Advanced Example

This is the template I use in order to create new articles for my vuepress blog.

```
{{#def.prompt('TITLE', 'Enter the title of this article.')}}
{{#def.prompt('TAGS', 'Enter the tags of this article.')}}
{{ var SLUG = $.TITLE.toString().toLowerCase().replace(/\s+/g, '-').replace('ö', 'oe').replace('ä','ae').replace('ü','ue').replace(/&/g, '-and-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, ''); }}
{{ var TAGS = $.TAGS.split(',').map(tag => tag.trim()); }}
{{ var PUBLISH_DATE = $.DATE.split(' ')[0]; }}
---
title: {{=$.TITLE}}
description: {{=$.TITLE}}
date: {{=PUBLISH_DATE}}
permalink: articles/{{=SLUG}}
image: /covers/{{=SLUG}}.png
tags: 
{{~TAGS :tag:index}}
    - {{=tag}}
{{~}}
---

Some introduction ...

<!-- more -->

The actual content ...
```

As you can see, there is much more going on now 😎

First we prompt for the Title of the article.

```
{{#def.prompt('TITLE', 'Enter the title of this article.')}}
```

I then use it for the title and the description of the page.

```
title: {{=$.TITLE}}
description: {{=$.TITLE}}
```

Then I ask for the tags I want to have on this article.

```
{{#def.prompt('TAGS', 'Enter the tags of this article.')}}
```

I then split the tags by comma and overwrite the tags variable.

```
{{ var TAGS = $.TAGS.split(',').map(tag => tag.trim()); }}
```

Baam, yes this is just javascript that you see here. And yes this enables you to basically do what ever you need for your templates 🤩

Next we use the `TAGS` to generate a list.

```
tags: 
{{~TAGS :tag:index}}
    - {{=tag}}
{{~}}
```

I'm also using javascript to slugify the title and to get the default publish date.

```
{{ var SLUG = $.TITLE.toString().toLowerCase().replace(/\s+/g, '-').replace('ö', 'oe').replace('ä','ae').replace('ü','ue').replace(/&/g, '-and-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, ''); }}
{{ var PUBLISH_DATE = $.DATE.split(' ')[0]; }}
```

One thing you need to know though is that you need to reference the values in a different way if you created them like I did.

```
date: {{=PUBLISH_DATE}}
permalink: articles/{{=SLUG}}
image: /covers/{{=SLUG}}.png
```

## More Examples

If you need more, then you might find some more good examples in my [vscode-template-manager-templates](https://github.com/tjventurini/vscode-template-manager-templates) repository I use to share my templates between systems and version them using git.

Other than that you might find some more useful info in the [doT.js documentation](http://olado.github.io/doT/index.html).

## Done!

Now you have an awesome way of creating reuseable templates in vscode. Hope you enjoyed and see you next time 😁