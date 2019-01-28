{.let page-title CS 184}

{.let body}

# Discussion 1

## Bullets

- Rasterization
    - Point in triangle test (three-line test)
    - Edge cases
- Artifacts
    - Jaggies
- Antialiased rasterization
    - Spatial domain
    - Frequency domain
    - Filtering & Convolution
        - Interactive demo
    - Nyquist Frequency
        Half of the sampling frequency
    - Super sampling

---

## A little bit about me

- Took 184 this time last year
- Did some interesting artworks in the competition with project partners

{.raw}

<figure>
    <img class="slim-border" src="{.link* art-1.png}">
    <figcaption>Campanile in an Andy Warhol style</figcaption>
</figure>

<figure>
    <img class="slim-border" src="{.link* art-2.png}" style="background-color: #de2768">
    <figcaption>Pumpkins in a Yayoi Kusama style</figcaption>
</figure>

<figure>
    <img class="slim-border" src="{.link* art-3.png}">
    <figcaption>Castle (wishing to be in a Disney style)<br>Partnered with Diyu Luo &amp; Jiejun Luo</figcaption>
</figure>

{./raw}

---

## Graphics pipeline

- Per-vertex ops (may include texturing)
- Rasterization (focus for today)
- Per-fragment ops (may include texturing)
- Framebuffer ops

**Real world example**

<figure>
    <img class="slim-border" src="https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Art/gfx-pipeline_2x.png">
    <figcaption><a href="https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Render-Ctx/Render-Ctx.html">Metal Graphics Rendering Pipeline</a></figcaption>
</figure>

## Pixel data

- Often times each channel stored on disk as `unsigned char`, 8 bits
    Range from 0 (`0x00`) to 255 (`0xff`) (inclusive)

- Often computed in `float`, 32 bits
    Using range from 0 to 1 (inclusive)
    Or in `half`, 16 bits, if not needing much precision

## Pixel order

Stored in a continuous array, the pixels are in row-major order (first, second, third row...)

<details><summary>What'll be the index for a pixel at `(x, y) = (4, 5)` for an image of size `width * height`?</summary>

```
5 * width + 4
```

</details>

## Point in triangle test $R^2$

{.link ../../demos/point-testing/index.md | Point in triangle test demo}

## Filtering

{.link ../../demos/image-fourier | Image fourier analysis demo}

## Convolution example

GitHub repo to follow along: https://github.com/cal-cs184/disc01

CS 184 C++ Primer: https://cs184.eecs.berkeley.edu/sp19/article/11/c-basics

Useful ways to iterate over a `std::vector<unsigned char>` named `vec`:

```
for (unsigned long i = 0; i < vec.size(); i++) {
    // Get with `vec[i]`
    // Set with `vec[i] = ...`
}
```

```
for (unsigned char c : vec) {
    // Get with `c`
}
```

```
for (unsigned char &c : vec) {
    // Get with `c`
    // Set with `c = ...`
}
```

Useful functions from `lodepng`:

```
/*
Converts PNG file from disk to raw pixel data in memory.
Same as the other decode functions, but instead takes a filename as input.
*/
unsigned decode(std::vector<unsigned char>& out, unsigned& w, unsigned& h,
                const std::string& filename,
                LodePNGColorType colortype = LCT_RGBA, unsigned bitdepth = 8);
```

```
/*
Converts 32-bit RGBA raw pixel data into a PNG file on disk.
Same as the other encode functions, but instead takes a filename as output.
NOTE: This overwrites existing files without warning!
*/
unsigned encode(const std::string& filename,
                const std::vector<unsigned char>& in, unsigned w, unsigned h,
                LodePNGColorType colortype = LCT_RGBA, unsigned bitdepth = 8);
```

{./let}

{.include ../../../../template-sp19/v1.md}
