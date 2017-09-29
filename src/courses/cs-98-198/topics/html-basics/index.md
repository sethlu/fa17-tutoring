
{.#} HTML Basics
{.#++}

{.#} Extended Notes
{.#++}

HTML is not crazily complicated compared to other <q>languages</q>; if you're interested to embrace a complete view of HTML 5, feel free to check out [HTML 5.2](https://www.w3.org/TR/html52/) (Candidate Recommendation).

{.#} Hypertext Markup Language

If you are working with large datasets around digital humanities, you may have heard of XML (Extensible Markup Language) to provide a structural backbone for storing data, among the many effective ways. Or you may have heard of Markdown languages as tools to format plain text. (This document is converted from some Markdown text.) Or you may have heard of DOCX for word processing documents, in which some people type and format your essays, with namely Microsoft Word. Quite frankly are they all somewhat related to HTML.

{.#} Web Engines

HTML, beyond plain text, is not some black magic that puts texts and images on the page. The hardware processors don't read the code and understand it right away. Therefore some web browsers like Chrome utilizes rendering engines to figure out where things are supposed to be under certain rules, decided by a bunch of people from the industry.

Don't be surprised when your web page looks different across different platforms (browsers specifically) because they each have differences in their implementations--the graphic composition can then vary slightly.

{.#} Elements

There are 5 different kinds of elements in HTML:

- **Void elements**

    `<area>`, `<base>`, `<br>`, `<col>`, `<embed>`, `<hr>`, `<img>`, `<input>`, `<keygen>`, `<link>`, `<menuitem>`, `<meta>`, `<param>`, `<source>`, `<track>`, `<wbr>`

    Self-closing with optional terminal solidus (`/`). They don't have any content inside, much like the leaves in a tree.

- **Raw text elements**

    `<script>`, `<style>`

    Can have text, without character references.

- **Escapable raw text elements**

    `<textarea>`, `<title>`

    Can have text & character references without ambiguous ampersands.

- **Foreign elements**:

    Elements from the MathML namespace and the SVG namespace.

    Self-closing with terminal solidus (`/`).

- **Normal elements**

    All other allowed elements.

{.#} Tags

A tag is composed with special characters: `<`, `>` and `/`, and it's used to delimit the start and end of elements in the markup. Usually an element requires a start tag and a paired end tag; however, **void elements** don't need an end tag.

```html
<div>contents</div>
```

{.#} Attributes

Attributes for an element are expressed inside the element's start tag and they come in pairs of a name and and a value. **Attribute names** may be written with any mix of lower- and uppercaseletters that are an ASCII case-insensitive match for the attribute's name. **Attribute values** are consist of text and character references without ambiguous ampersands.

Attributes can be specified in four different ways:

- **Empty attribute**

    ```html
    <input disabled>
    ```

    The value is implicitly the empty string.

- **Unquoted attribute value**

    ```html
    <input value=yes>
    ```

- **Single-quoted attribute value**

    ```html
    <input type='checkbox'>
    ```

- **Double-quoted attribute value**

    ```html
    <input name="email">
    ```

{.#} References

- W3C: [HTML 5 § 8.1.2. Elements](https://www.w3.org/TR/html5/syntax.html#elements-0)

{.#--}

{.#--}
