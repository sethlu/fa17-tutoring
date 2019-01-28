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

## Barycentric coordinates

{.raw}

<figure>
    <div class="canvas-container slim-border">
        <canvas>Your browser doesn't support HTML5 canvas tag.</canvas>
        <div class="circle-control">A</div>
        <div class="circle-control">B</div>
        <div class="circle-control">C</div>
        <div class="canvas-stats"></div>
    </div>
    <figcaption>Barycentric coordinates demo</figcaption>
</figure>
<link rel="stylesheet" type="text/css" href="{.link!* bary.css}">
<script type="text/javascript" src="{.link!* bary.js}"></script>

{./raw}

{./let}

{.include ../../../../template-sp19/v1.md}
