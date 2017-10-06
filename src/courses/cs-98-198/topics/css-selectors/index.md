
{.#} CSS Selectors
{.#++}

{.#} Extended Notes
{.#++}

{.#} Multiple Selectors

With `,` we can apply styles to multiple selectors at the same time. Just as a quick example, which you may see in different reset CSS files; the code below selects both `<html>` and `<body>` and describes the margins to be `0` each.

```css
html,
body {
  margin: 0;
}
```

Also you can join more selectors (more than just 2).

{.#} Combinators

Combinators are great tools to create complex CSS styles, otherwise most things will have a fairly static style through the lifetime of the page, which can be not cool... Oh well. Actually, the multiple selectors mentioned above can be categorized as a type of combinators; there are a few more that come handy.

- `A B`: Any element matching `B` that is a *descendant* of an element matching `A` (that is: a child, or a child of a child, etc.)

    Note there isn't really anything but a space between `A` and `B`, and this makes a difference from `A, B`.

    ```html
    <style type="text/css">
      p {
        font-family: sans-serif;
      }

      article p {
        font-family: serif;
      }
    </style>

    <article>
      <p>...</p>
      <p>...</p>
      <section>
        <p>...</p>
        <p>...</p>
      </section>
      <section>
        <p>...</p>
        <p>...</p>
      </section>
    </article>

    <p>...</p><!-- This will look different from the <p> above -->
    ```

- `A > B`: Any element matching `B` that is a *direct* child of an element matching `A`.

    ```html
    <style type="text/css">
      article > section {
        border: solid 1px gray;
      }
    </style>

    <article>
      <p>...</p>
      <section><!-- This will have a gray border -->
        <p>...</p>
        <p>...</p>
        <section><!-- This won't have a gray border -->
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </section>
      </section>
      <section><!-- This will have a gray border -->
        <p>...</p>
      </section>
    </article>
    ```

- `A + B`: Any element matching `B` that is the next sibling of an element matching `A`.

    ```html
    <style type="text/css">
      p {
        font-weight: normal;
      }

      h1 + p {
        font-weight: bold;
      }
    </style>

    <h1>...</h1>
    <p>...</p><!-- The text will be bolded -->
    <p>...</p><!-- Here it will not -->
    <p>...</p><!-- Nor here -->
    ```

- `A ~ B`: Any element matching `B` that is one of the next siblings of an element matching `A`.

    ```html
    <style type="text/css">
    p ~ span {
      font-style: italic;
    }
    </style>

    <span>...</span><!-- The font is not italicized -->
    <span>...</span><!-- Not here -->
    <p>...</p><!-- However, after <p> -->
    <span>...</span><!-- The font is now italicized -->
    <span>...</span><!-- And the same applies to every one after the paragraph -->
    <p>...</p><!-- Just another <p> -->
    <span>...</span><!-- The effect still continues (if not strengthened) -->
    ```

{.#} References

- MDN: [Combinators and multiple selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Combinators_and_multiple_selectors)

{.#--}

{.#--}
