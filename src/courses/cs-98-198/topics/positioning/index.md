
{.#} Positioning
{.#++}

{.#} Extended Notes
{.#++}

{.#} Positioning Schemes

There are 3 positioning schemes for layout in CSS:

1. Normal flow

    The box belongs to the formatting context. Positioning can be `relative`, `sticky` etc.

1. Floats

    The box is first laid out according to the normal flow, then taken out of the flow and positioned, typically to the left or the right. Content may flow aside of the float.

1. Absolute positioning

    The box is removed from the normal flow entirely and assigned a position with respect to a containing block, which, for a `position: absolute` element, can be a nearest `position: relative` ancestor.

We say a box is *out-of-flow* when it's floated, absolutely positioned or is the root element. Everything else is called *in-flow*.

{.#++} Positioning with `position`

- `static`

    The box is laid out according to a normal flow. The `top`, `right`, `bottom` and `left` properties do not apply.

- `relative`

    The box's position is calculated according to a normal flow. Then the box is offset relative to its normal position and *does not* affect the position of any following boxes.

- `absolute`

    The box is taken out of the normal flow. The `top`, `right`, `bottom` and `left` properties specify offsets with respect to the box’s containing block--a nearest ancestor with a `position` other `static`.

- `fixed`

    The box's position is calculated according to the `absolute` model, but with a fixed containing block that's the viewport.

The references attached below have more details about them (and additionally `sticky`).

{.#} Stacking Context

Stacking with `z-index` doesn't always work in absolute offsets in relation to each other. It may be useful to uncover how the rendering engine figures out all that before diving into.

Drawing the concepts over a really broad stroke, a stacking context can be seen an independent rendering of things stacking on top of each other. Eventually the many layers in this stacking context will be squashed into a single flat drawing that may be used in drawing a parent stacking context.

The order of rendering (or painting) for the elements in your rendering context is generally first the *non-positioned* (`position: static`) elements, where an element comes later in the code appears to be over the elements before it in the code, followed by the other *positioned* elements, some of which `absolute` or `fixed`, similarly where an element comes later in the code appears to be over the elements before it in the code. Those *positioned* elements can be drawn earlier or later depending on their z-indices.

A semi-transparent element (`opacity` less than `1`) can make its own stacking context; same for *positioned* elements with a non-zero `z-index`.

See the W3C working draft for detailed info (link attached in references).

{.#} References

- W3C: [CSS Positioned Layout Module Level 3 § 6. Positioning schemes](https://www.w3.org/TR/css-position-3/#pos-sch)
- W3C: [CSS Positioned Layout Module Level 3 § 6.5. Choosing a positioning scheme: `position` property](https://www.w3.org/TR/css-position-3/#position-property)
- W3C: [CSS Positioned Layout Module Level 3 § 12. Detailed stacking context](https://www.w3.org/TR/css-position-3/#det-stacking-context)

{.#--}

{.#--}
