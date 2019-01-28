{.let page-title CS 184}

{.let body}

# Point in triangle test $R^2$

<figure>
    <div id="bary-line" class="canvas-container slim-border">
        <canvas>Your browser doesn't support HTML5 canvas tag.</canvas>
        <div class="circle-control">A</div>
        <div class="circle-control">B</div>
        <div class="canvas-stats"></div>
    </div>
    <figcaption>Line test demo</figcaption>
</figure>

<figure>
    <div id="bary-tri" class="canvas-container slim-border">
        <canvas>Your browser doesn't support HTML5 canvas tag.</canvas>
        <div class="circle-control">A</div>
        <div class="circle-control">B</div>
        <div class="circle-control">C</div>
        <div class="canvas-stats"></div>
    </div>
    <figcaption>Triangle test demo</figcaption>
</figure>

<figure>
    <div id="bary-antialiasing" class="canvas-container slim-border">
        <canvas>Your browser doesn't support HTML5 canvas tag.</canvas>
        <div class="circle-control">A</div>
        <div class="circle-control">B</div>
        <div class="circle-control">C</div>
        <div class="canvas-stats"></div>
    </div>
    <figcaption>Antialiasing demo (pixel sampling rate = 4)</figcaption>
</figure>

<link rel="stylesheet" type="text/css" href="{.link!* bary.css}">
<script type="text/javascript" src="{.link!* bary-line.js}"></script>
<script type="text/javascript" src="{.link!* bary-tri.js}"></script>
<script type="text/javascript" src="{.link!* bary-antialiasing.js}"></script>

{./let}

{.include ../../../../template-sp19/v1.md}
