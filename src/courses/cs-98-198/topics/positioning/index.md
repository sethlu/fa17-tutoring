
{.#} Positioning
{.#++}

{.#} Extended Notes
{.#++}

{.#} Stacking Context

Stacking with `z-index` doesn't always work in absolute offsets in relation to each other. It may be useful to uncover how the rendering engine figures out all that before diving into.

Drawing the concepts over a really broad stroke, a stacking context can be seen an independent rendering of things stacking on top of each other. Eventually the many layers in this stacking context will be squashed into a single flat drawing that may be used in drawing a parent stacking context.

The order of rendering (or painting) for the elements in your rendering context is generally first the **non-positioned** (`position: static`) elements, where an element comes later in the code appears to be over the elements before it in the code, followed by the other **positioned** elements, some of which `absolute` or `fixed`, similarly where an element comes later in the code appears to be over the elements before it in the code. Those **positioned** elements can be drawn earlier or later depending on their z-indices.

A semi-transparent element (`opacity` less than `1`) can make its own stacking context; same for **positioned** elements with a non-zero `z-index`.

See the W3C working draft for detailed info (link attached in references).

{.#} References

- W3C: [CSS Positioned Layout Module Level 3 § 12. Detailed stacking context](https://www.w3.org/TR/css-position-3/#det-stacking-context)

{.#--}

{.#--}
