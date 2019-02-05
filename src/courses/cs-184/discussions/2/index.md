{.let page-title CS 184}

{.let body}

# Discussion 2

## Bullets

- Transforms
    - Basic transforms
        - Scaling
        - Reflection
        - Shear
        - Rotation in 2D
        - Affine transformation
            - Homogenous coordinates
            - Coordinate system transform
    - Combining transforms: Order of transformation
    - Rotation in 3D
    - Spaces
        - World space
        - Camera space
            - View matrix
        - Projection space
            - Projection matrix
- Texture mapping
    - Linear interpolation across a triangle
        - Barycentric coordinates
        - Perspective projection & interpolation
    - Texture sampling
        - Sampling rate
        - Texture antialiasing
    - Texture filtering
        - Magnification
            - Bilinear filtering
        - Minification
            - Trilinear filtering
- Rasterization pipeline
    - Vertex processing
    - Triangle processing
    - Rasterization
    - Fragment processing
        - Simple shading: Blinn-Phong Reflection Model
    - Framebuffer operations

---

👉 [Dorian's discussion 2 slides](https://docs.google.com/presentation/d/1xWQIFD03IYZvK3MhHIm8jKacLmzZNrun_IVqiMNdQdc/)

## Sampling

**Reducing a continuous-time signal to a discrete-time signal.** Think of it as recording sounds in a digital sound studio.

🤔 Some intuition: The continuous-time signal may be some sound picked up by the microphone, some image, some sine wave!?

🍿 If time permits: Demo differently sampled audio tracks (in Adobe Audition)

### Nyquist theorem

**Nyquist frequency: Half the sampling frequency**
We get no aliasing from frequencies less than the Nyquist frequency.

As an example, for an image of stripes (black & white), if we're sampling at every `16px`, stripes at cycle every `32px` or more will result in no aliasing.

Also, if there are stripes that cycle at every `8px` (`4px` black, then `4px` white), we'd want to sample at every `4px` to avoid aliasing.

👉 [Dorian's aliasing video reference](https://docs.google.com/presentation/d/1xWQIFD03IYZvK3MhHIm8jKacLmzZNrun_IVqiMNdQdc/edit#slide=id.g4e32ab7712_0_86)

## Texture mapping

### Barycentric coordinates

{.raw}
\begin{align}
    (\alpha, \beta, \gamma), \alpha + \beta + \gamma = 1 \\
    P = \alpha A + \beta B + \gamma C \\
\end{align}
{./raw}

**We're only concering $R^2$ for this section**

{.link ../../demos/point-testing/index.md | Point in triangle test demo}

🤔 Do we really need to describe a point with all $\alpha$, $\beta$ and $\gamma$? What if we drop $\alpha$?

{.raw}
\begin{align}
    P & = \alpha A + \beta B + \gamma C \\
    P & = (1 - \beta - \gamma) A + \beta B + \gamma C \\
    P & = A - \beta A - \gamma A + \beta B + \gamma C \\
    P - A & = \beta (B - A) + \gamma (C - A)
\end{align}
{./raw}

Now we can see it with $A$ as the origin, with $(B - A)$ and $(C - A)$ as two independent vectors.

This can lead us to another point-in-triangle test (that **doesn't worry about winding**). For any $P$, how can we tell its Barycentric coordinates? It's a change in frame of reference.

{.raw}
\begin{align}
    P - A & = \beta (B - A) + \gamma (C - A) \\
    \begin{bmatrix}B - A & C - A\end{bmatrix} \begin{bmatrix}\beta \\ \gamma\end{bmatrix} & = P - A \\
    \begin{bmatrix}\beta \\ \gamma\end{bmatrix} & = \begin{bmatrix}B - A & C - A\end{bmatrix}^{-1} (P - A)
\end{align}
{./raw}

This may look rather troublesome, but it lends to an approach for finding ray-triangle intersection in $R^3$ (more later).

🍿 If time permits: Demo [Suzanne model](https://github.com/sethlu/renderbox/tree/85b8cd565f23d016106dd34921bda0e6bfee55dd/examples/objloader/src) (in Blender)

### Mipmaps

🤔 Why would you want mipmaps?

<iframe width="100%" height="390" src="https://www.youtube.com/embed/D1TmyioQzhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{./let}

{.include ../../../../template-sp19/v1.md}
