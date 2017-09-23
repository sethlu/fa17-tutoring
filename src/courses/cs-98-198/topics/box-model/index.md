
{.#} Box Model
{.#++}

{.#} Extended Notes
{.#++}

The sizing of boxes can be a little subtle: Imagine you have a box of width `100px` and height `100px`; how can you vary its padding while keeping a same dimensions?

{.#} Box Sizing

Going back to the box model, we can view content, padding, border and margin as being 4 different boxes. Then `width` and `height` become confusing for the browser to understand which box you're trying to set the `width` and `height` for. Mhm... Are you trying to target the width for the box around the content (not counting in the padding), or the width for the box around the border?

As a CSS property, `box-sizing` allows you to specify what `width` and `height` include. And you can set it with two nontrivial values, `content-box` and `border-box`. I don't think `padding-box` is widely supported just yet, but only in Firefox.

How can this be helpful though? Imagine you want a `<div>` to cover the whole width of the page, setting `width: 100%` gets the job done. However, trying to move the enclosed contents away from the edge of the `<div>` becomes a pain since you need to program some `width` and some `padding` that together add up to `100%` in width.

This gets more tedious when you want a fixed padding... For the sake of demonstration, you may put `padding: 20px` to create some space around the contents inside this `<div>` and `width: calc(100% - 40px)` (`40px` here because of the padding from two sides); and as you see this can get incredibly mathy, and personally it's not a very maintainable practice.

There It turns out there are developers out there who love using `box-sizing: border-box`--check out [Inheriting Box-Sizing Probably Slightly Better Best-Practice](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/) on CSS Tricks. However, it doesn't mean to avoid using `box-sizing: content-box`; we used it by default lots before the introduction of `box-sizing` in CSS 3.

{.#} Pseudo-Elements

Pseudo-Classes are like classes automatically added by the browser under some situations like when mouse hovering. Similarly, *pseudo-elements* are very special elements and can be found in 3 different cases:

- **Typographic**

    `::first-line`, `::first-letter`

- **Highlight**

    `::selection`

    Rock your text selection highlight colors!

- **Tree-Abiding**

    - **Generated content**

        `::before`, `::after`

        Add decorative text before and after your contents.

    - **List Markers**

        `::marker`

    - **Placeholder input**

        `::placeholder`

        Customize the styles for the input box placeholder.

{.#} References

- MDN: [box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- CSS-Tricks: [box-sizing](https://css-tricks.com/almanac/properties/b/box-sizing/)
- W3C: [CSS Pseudo-Elements Module Level 4](https://www.w3.org/TR/css-pseudo-4/)

{.#--}

{.#--}
