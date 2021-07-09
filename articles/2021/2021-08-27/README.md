---
title: Share VSCode Extensions via Recommendations
description: How to share vscode extensions via recommendations.
date: 2021-08-27
permalink: articles/share-vscode-extensions-via-recommendations
image: /covers/share-vscode-extensions-via-recommendations.png
tags: 
    - vscode
---

This time we are going to learn how to share vscode extensions via recommendations. Simple and useful 🤩

<!-- more -->

Sometimes you have an extension that should be installed in the vscode setup of your fellow developers working on the same project.

## The Good the Bad and the Ugly ...

The good news is we can add some recommendations to your vscode workspace. The next developer working on the project then is shown the option to install it.

The bad news is, that the recommendations are all optional, and that you have to commit the `.vscode` folder in the root of your project.

So like always there are pros and cons and you have to figure out how you want to deal with them.

## Adding Recommendations

The simplest way is to go to the extension page in the extensions view of vscode, select the gear icon ⚙ and select _Add to Workspace Recommendations_.

This will save the selected extension to `.vscode/extensions.json`. 

```json
{
    "recommendations": [
        "mikestead.dotenv"
    ]
}
```

Now whenever someone will open the project in vscode that doesn't have the recommended extensions installed, this developer will see a notification showing your recommendation.

And that's it. Awesome right? 😁