---
title: Creating perspective elements on Tailwind CSS
description: With Tailwind CSS, you can use perspectives, to get this result, I demonstrate this process.
createdAt: "2021-05-06"
banner: "/default.png"
tags:
  - Tailwind CSS
---

With Tailwind CSS, you can use perspectives like the one applied in the demo, to easily create 3D depth in websites, without having to change writing in any way. Perspective elements in Tailwind CSS are separate in their style sheet, allowing you to easily change them to taste.

Perspective elements enable elements inside of a container to scale smaller than the container. This makes it possible to create more complex layouts with varying content sizes of each element.

## Installation

First of all you should add dependencies to your project created by Kamona-WD.

```bash
# Using npm
npm install -D @kamona/tailwindcss-perspective
```

```bash
# Using Yarn
yarn add -D @kamona/tailwindcss-perspective
```

Then add the plugin to your tailwind.config.js file in your project:

```javascript
// tailwind.config.js
module.exports = {
  mode: "jit",
  theme: {
    // ...
  },
  plugins: [
    require("@kamona/tailwindcss-perspective"),
    // ...
  ],
};
```

## Usage example

```html
<div class="container mx-auto">
  <div class="perspective-6">
    <div
      class="rotate-x-30 rotate-y-35 -rotate-z-20 h-64 w-40 rounded-lg border-4 border-black bg-white p-4"
    >
      <svg
        class="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
        ></path>
      </svg>
      <h2 class="absolute bottom-0 mb-4 font-bold">
        Creating perspective elements on Tailwind CSS.
      </h2>
    </div>
  </div>
</div>
```

If you want to see [Demo](https://play.tailwindcss.com/OwG6g334OA?file=config)

## Conclusion

Designers use perspective to manipulate viewers' understanding of two-dimensional objects—A painter would use this to cast shadows on walls. However, designers are coming up with all sorts of new perspective techniques digital designers are using to manipulate 2D layouts using CSS.

So thanks to Tailwind CSS Perspective, you can create multiple 3D elements in your projects by including them in different contexts.

For more informations about this project, follow the link bellow.

[Go to official Repo](https://github.com/Kamona-WD/tailwindcss-perspective/blob/main/README.md)
