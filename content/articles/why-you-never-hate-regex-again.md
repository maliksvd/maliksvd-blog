---
title: Why you never hate Regex again
description: Regular expressions are very powerful tools for creating string patterns,
  but this one is sometimes difficult to understand. Here is why you won't hate it
  anymore.
createdAt: 2022-03-08T05:00:00.000+00:00
banner: "/images/regex.png"
tags:
- Tools
- Regex

---
Created by [Geon George](https://github.com/geongeorge/i-hate-regex "Author of repository") and available on [GitHub](https://github.com/geongeorge/i-hate-regex "Repository of Geon George"), "I hate Regex" is a tool that allows you to quickly get a cheat sheet of multiple frequently used regular expressions.

Among them, here is a non-exhaustive list.

## **Username**

    ^[a-z0-9_-]{3,15}$

## **Date**

    (?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})

## **URLs**

    /(?:http|https|ftp|mailto|file|data|irc):\/\/[A-Za-z0-9\-]{0,63}(\.[A-Za-z0-9\-]{0,63})+(:\d{1,4})?\/*(\/*[A-Za-z0-9\-._]+\/*)*(\?.*)?(#.*)?/

## **24-hour time (HH:MM)**

    /(?:2[0-3]|[01]\d|\d):(?:[0-5]\d)/

## **Password**

    ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$

There are many uses of Regex and in many different programming languages, you will have to deal with this type of expression at some point. However, the most important thing to remember is that there are infinite ways of doing this so there are multiple ways to get the best solution. 

Moreover, if you are in need of inspiration, there is a whole library on [regex101.com](https://regex101.com/library "Regex Library")