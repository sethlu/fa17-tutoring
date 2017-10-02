
{.#} Display
{.#++}

Web browsers take cares of laying a foundation for a webpage--though a lot of the times we tend to normalize/reset the CSS styles due to inconsistencies among the palettes default to different browsers. Some elements are default to be arranged in certain manners: Very often we see `<div>` occupying a whole block by itself, nothing else sharing a same row. Some other times we find text flowing and wrapping at the end of lines, inline with photos.

So far we have seen `block` and `inline`. While all elements are default to `display: inline` in XML, meaning that the contents run in lines unless breaking at line ends. [HTML 5](https://www.w3.org/TR/html5/rendering.html#rendering) defines some of the many basic properties, and browsers each deploy their default looks, for instance [WebKit/Chrome](https://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css). Though at times some inline elements may have widths and heights (an example being the replaced element `<img>`), generally all inline elements cannot have their dimensions set; their sizes are calculated based on the fonts (family, size etc.)--technically speaking, replaced elements like `<img>` can behave differently from non-replaced elements, and replaced elements may not necessarily follow `width` and `height` settings.

{.#} Outside & Inside Values

There are a lot more than `block`, `inline` and `none` for displaying elements.

To be more precise with the language and to explore the full tailoring of content arrangement, some keywords are designed to describe where the elements sit in a flow layout, and some are designed to describe a context in which the child elements should be arranged.

For example, `block` and `inline` (default) are *display-outside* values setting whether the element should start a new chunk, or continue to run in a same line (can be broken into multiple lines too). Note that these *display-outside* values are more meaningful in a *flow* layout context (see in the next paragraph).

Additionally, `flow` (default), `flex`, `grid` are *display-inside* values that decide the layout context for the contained elements. `flow` layout is generic and the child elements with `block` and `inline` *display-outside* values can alter the flow of the content, but `flow` is not the only layout context available out there.

With these two types of values, we can combine them to make `display: block flow` *(experimental, doesn't yet work)*. However, usually we just say `display: block` and the *display-inside* will be default to `flow`. Alternatively, if we want `display: block flex`, using `display: flex` will have `block` by default nearly at all times.

Now what about `none`? It goes in a *display-box* category and nothing in the element nor the element itself will be considered in the page rendering.

For more `display` values, check out the references.

<!--
{.#} Flex Layout

TODO
- CSS Flexible Box Layout: https://www.w3.org/TR/css-flexbox-1/

-->

{.#} References:

- MaxDesign: [Inline elements and padding](http://maxdesign.com.au/articles/inline/)
- MDN: [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- W3C: [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/#the-display-properties)

{.#--}
