{.let page-title CS 184}

{.let body}

# Radiometry

## Geometry

### Plane angle $a$

{.raw}

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns="http://www.w3.org/2000/svg" xmlns:xl="http://www.w3.org/1999/xlink" version="1.1" viewBox="-390.5 -195.5 781 391" width="781" height="391">
  <defs>
    <font-face font-family="Menlo" font-size="16" panose-1="2 11 6 9 3 8 4 2 2 4" units-per-em="1000" underline-position="-63.47656" underline-thickness="43.94531" slope="0" x-height="546.875" cap-height="729.0039" ascent="928.2227" descent="-235.83984" font-weight="400">
      <font-face-src>
        <font-face-name name="Menlo-Regular"/>
      </font-face-src>
    </font-face>
    <marker orient="auto" overflow="visible" markerUnits="strokeWidth" id="FilledArrow_Marker_a" stroke-linejoin="miter" stroke-miterlimit="10" viewBox="-1 -4 10 8" markerWidth="10" markerHeight="8" color="black">
      <g>
        <path d="M 8 0 L 0 -3 L 0 3 Z" fill="currentColor" stroke="currentColor" stroke-width="1"/>
      </g>
    </marker>
  </defs>
  <metadata> Produced by OmniGraffle 7.9.4 
    <dc:date>2019-02-26 23:17:14 +0000</dc:date>
  </metadata>
  <g id="Canvas_1" fill-opacity="1" stroke-dasharray="none" stroke-opacity="1" stroke="none" fill="none">
    <title>Canvas 1</title>
    <g id="Canvas_1: Layer 1">
      <title>Layer 1</title>
      <g id="Graphic_3">
        <rect x="-390" y="-195" width="780" height="390" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Graphic_6">
        <circle cx="0" cy="0" r="128.000204531443" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_10">
        <line x1="0" y1="0" x2="128" y2="0" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_11">
        <line x1="0" y1="0" x2="74.54252" y2="-103.18475" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Graphic_12">
        <text transform="translate(122.2 -75.4)" fill="black">
          <tspan font-family="Menlo" font-size="16" font-weight="400" fill="black" x=".18359375" y="15">s</tspan>
        </text>
      </g>
      <g id="Graphic_13">
        <text transform="translate(60.2 5.2)" fill="black">
          <tspan font-family="Menlo" font-size="16" font-weight="400" fill="black" x=".18359375" y="15">r</tspan>
        </text>
      </g>
      <g id="Graphic_14">
        <text transform="translate(41.4 -32.4)" fill="black">
          <tspan font-family="Menlo" font-size="16" font-weight="400" fill="black" x=".18359375" y="15">a</tspan>
        </text>
      </g>
      <g id="Line_15">
        <path d="M 40.6 0 C 40.6 0 41.47278 -8.241099 36.4 -17.14094 C 34.630473 -20.245454 32.42774 -22.920888 30.309352 -25.08883" marker-end="url(#FilledArrow_Marker_a)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
    </g>
  </g>
</svg>

{./raw}

$$a = s / r$$

Arc length ($s$) over radius ($r$).

### Solid angle

{.raw}

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns="http://www.w3.org/2000/svg" xmlns:xl="http://www.w3.org/1999/xlink" version="1.1" viewBox="-390.5 -195.5 781 391" width="781" height="391">
  <defs>
    <marker orient="auto" overflow="visible" markerUnits="strokeWidth" id="FilledArrow_Marker" stroke-linejoin="miter" stroke-miterlimit="10" viewBox="-1 -4 10 8" markerWidth="10" markerHeight="8" color="#b1001c">
      <g>
        <path d="M 8 0 L 0 -3 L 0 3 Z" fill="currentColor" stroke="currentColor" stroke-width="1"/>
      </g>
    </marker>
    <font-face font-family="Menlo" font-size="10" panose-1="2 11 6 9 3 8 4 2 2 4" units-per-em="1000" underline-position="-63.47656" underline-thickness="43.94531" slope="0" x-height="546.875" cap-height="729.0039" ascent="928.2227" descent="-235.83984" font-weight="400">
      <font-face-src>
        <font-face-name name="Menlo-Regular"/>
      </font-face-src>
    </font-face>
  </defs>
  <metadata> Produced by OmniGraffle 7.9.4 
    <dc:date>2019-02-27 00:14:36 +0000</dc:date>
  </metadata>
  <g id="Canvas_1" fill-opacity="1" stroke-dasharray="none" stroke-opacity="1" stroke="none" fill="none">
    <title>Canvas 1</title>
    <g id="Shared_1: Master layer">
      <title>Master layer</title>
      <g id="Graphic_2">
        <rect x="-390" y="-195" width="780" height="390" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
    </g>
    <g id="Canvas_1: Layer 3">
      <title>Layer 3</title>
      <g id="Graphic_129">
        <title>Circle</title>
        <path d="M 89.41067 -90.50957 C 139.398 -40.522496 139.398 40.522496 89.41067 90.50957 C 39.423595 140.4969 -41.621397 140.4969 -91.60847 90.50957 C -141.5958 40.522496 -141.5958 -40.522496 -91.60847 -90.50957 C -41.621397 -140.4969 39.423595 -140.4969 89.41067 -90.50957" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1.0,4.0" stroke-width="1"/>
      </g>
      <g id="Graphic_128">
        <path d="M 89.41067 -19.091862 C 139.398 -8.547714 139.398 8.547714 89.41067 19.091862 C 39.423595 29.636064 -41.621397 29.636064 -91.60847 19.091862 C -141.5958 8.547714 -141.5958 -8.547714 -91.60847 -19.091862 C -41.621397 -29.636064 39.423595 -29.636064 89.41067 -19.091862" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1.0,4.0" stroke-width="1"/>
      </g>
      <g id="Line_123">
        <line x1="-1.0989011" y1="0" x2="149.0011" y2="0" marker-end="url(#FilledArrow_Marker)" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_122">
        <line x1="-1.0989011" y1="0" x2="-139.54758" y2="57.86045" marker-end="url(#FilledArrow_Marker)" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_121">
        <line x1="-1.0989011" y1="0" x2="-1.0989011" y2="-151.02537" marker-end="url(#FilledArrow_Marker)" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_120">
        <line x1="-1.0989011" y1="0" x2="60.1117" y2="-40.05444" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_119">
        <line x1="-1.0989011" y1="0" x2="54.82087" y2="-62.082384" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_118">
        <line x1="0" y1="0" x2="34.479567" y2="-60.88911" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_117">
        <line x1="0" y1="0" x2="37.8011" y2="-38.715933" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_114">
        <line x1="-1.0989011" y1="0" x2="37.8011" y2="25.682464" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Graphic_112">
        <path d="M 34.7011 -60.6 L 55.5011 -62 L 59.9011 -40.2 L 37.5011 -38.6 Z" fill="white"/>
        <path d="M 34.7011 -60.6 L 55.5011 -62 L 59.9011 -40.2 L 37.5011 -38.6 Z" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
      <g id="Graphic_111">
        <rect x="42.8011" y="-56.3782" width="9" height="13" fill="white"/>
        <text transform="translate(43.8011 -55.3782)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".4897461" y="9">A</tspan>
        </text>
      </g>
      <g id="Graphic_110">
        <rect x=".4010989" y="6.763033" width="9" height="13" fill="white"/>
        <text transform="translate(1.4010989 7.763033)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".4897461" y="9">r</tspan>
        </text>
      </g>
    </g>
  </g>
</svg>

{./raw}

$$\omega = \frac{A}{r^2}$$

Area subtended $dA$ over squared radius ($r^2$).

### $(\theta, \phi)$-parameterization

{.raw}

<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns="http://www.w3.org/2000/svg" xmlns:xl="http://www.w3.org/1999/xlink" version="1.1" viewBox="-390.5 -195.5 781 391" width="781" height="391">
  <defs>
    <marker orient="auto" overflow="visible" markerUnits="strokeWidth" id="FilledArrow_Marker" stroke-linejoin="miter" stroke-miterlimit="10" viewBox="-1 -4 10 8" markerWidth="10" markerHeight="8" color="#b1001c">
      <g>
        <path d="M 8 0 L 0 -3 L 0 3 Z" fill="currentColor" stroke="currentColor" stroke-width="1"/>
      </g>
    </marker>
    <marker orient="auto" overflow="visible" markerUnits="strokeWidth" id="FilledArrow_Marker_2" stroke-linejoin="miter" stroke-miterlimit="10" viewBox="-1 -4 10 8" markerWidth="10" markerHeight="8" color="black">
      <g>
        <path d="M 8 0 L 0 -3 L 0 3 Z" fill="currentColor" stroke="currentColor" stroke-width="1"/>
      </g>
    </marker>
    <font-face font-family="Menlo" font-size="10" panose-1="2 11 6 9 3 8 4 2 2 4" units-per-em="1000" underline-position="-63.47656" underline-thickness="43.94531" slope="0" x-height="546.875" cap-height="729.0039" ascent="928.2227" descent="-235.83984" font-weight="400">
      <font-face-src>
        <font-face-name name="Menlo-Regular"/>
      </font-face-src>
    </font-face>
  </defs>
  <metadata> Produced by OmniGraffle 7.9.4 
    <dc:date>2019-02-27 00:06:59 +0000</dc:date>
  </metadata>
  <g id="Canvas_1" fill-opacity="1" stroke-dasharray="none" stroke-opacity="1" stroke="none" fill="none">
    <title>Canvas 1</title>
    <g id="Shared_1: Master layer">
      <title>Master layer</title>
      <g id="Graphic_2">
        <rect x="-390" y="-195" width="780" height="390" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
    </g>
    <g id="Canvas_1: Layer 2">
      <title>Layer 2</title>
      <g id="Graphic_16">
        <title>Circle</title>
        <path d="M 90.50957 -90.50957 C 140.4969 -40.522496 140.4969 40.522496 90.50957 90.50957 C 40.522496 140.4969 -40.522496 140.4969 -90.50957 90.50957 C -140.4969 40.522496 -140.4969 -40.522496 -90.50957 -90.50957 C -40.522496 -140.4969 40.522496 -140.4969 90.50957 -90.50957" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1.0,4.0" stroke-width="1"/>
      </g>
      <g id="Graphic_17">
        <path d="M 90.50957 -19.091862 C 140.4969 -8.547714 140.4969 8.547714 90.50957 19.091862 C 40.522496 29.636064 -40.522496 29.636064 -90.50957 19.091862 C -140.4969 8.547714 -140.4969 -8.547714 -90.50957 -19.091862 C -40.522496 -29.636064 40.522496 -29.636064 90.50957 -19.091862" stroke="#a5a5a5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1.0,4.0" stroke-width="1"/>
      </g>
      <g id="Graphic_30">
        <path d="M 73.96329 -82.19238 C 114.81231 -77.11557 114.81231 -68.88443 73.96329 -63.80762 C 33.114478 -58.730784 -33.114478 -58.730784 -73.96329 -63.80762 C -114.81231 -68.88443 -114.81231 -77.11557 -73.96329 -82.19238 C -33.114478 -87.26922 33.114478 -87.26922 73.96329 -82.19238" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4.0,4.0" stroke-width="1"/>
      </g>
      <g id="Graphic_34">
        <path d="M 82.0243 -64.08943 C 127.32531 -58.075364 127.32531 -48.32464 82.0243 -42.31057 C 36.723513 -36.296468 -36.723513 -36.296468 -82.0243 -42.31057 C -127.32531 -48.32464 -127.32531 -58.075364 -82.0243 -64.08943 C -36.723513 -70.10353 36.723513 -70.10353 82.0243 -64.08943" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4.0,4.0" stroke-width="1"/>
      </g>
      <g id="Graphic_48">
        <title>Circle</title>
        <path d="M 45.754785 -89.70957 C 70.74845 -39.7225 70.74845 41.322494 45.754785 91.30957 C 20.761248 141.2969 -19.761248 141.2969 -44.754785 91.30957 C -69.74845 41.322494 -69.74845 -39.7225 -44.754785 -89.70957 C -19.761248 -139.6969 20.761248 -139.6969 45.754785 -89.70957" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4.0,4.0" stroke-width="1"/>
      </g>
      <g id="Graphic_47">
        <title>Circle</title>
        <path d="M 28.78424 -90.50957 C 44.40528 -40.522496 44.40528 40.522496 28.78424 90.50957 C 13.16328 140.4969 -12.16328 140.4969 -27.78424 90.50957 C -43.40528 40.522496 -43.40528 -40.522496 -27.78424 -90.50957 C -12.16328 -140.4969 13.16328 -140.4969 28.78424 -90.50957" stroke="#666" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4.0,4.0" stroke-width="1"/>
      </g>
      <g id="Line_24">
        <line x1="0" y1="0" x2="150.1" y2="0" marker-end="url(#FilledArrow_Marker)" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_26">
        <line x1="0" y1="0" x2="-138.44868" y2="57.86045" marker-end="url(#FilledArrow_Marker)" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_28">
        <line x1="0" y1="0" x2="0" y2="-151.02537" marker-end="url(#FilledArrow_Marker)" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_29">
        <line x1="0" y1="0" x2="61.2106" y2="-40.05444" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_42">
        <line x1="0" y1="0" x2="55.91977" y2="-62.082384" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_57">
        <line x1="0" y1="-73" x2="35.57847" y2="-60.88911" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_56">
        <line x1="0" y1="-73" x2="55.91977" y2="-62.082384" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_58">
        <line x1="0" y1="0" x2="63.6453" y2="23.444444" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_71">
        <title>Line</title>
        <path d="M 0 -33.4092 C 3.968126 -31.872955 8.74143 -30.854802 11.905569 -28.8 C 12.073664 -28.69084 12.237223 -28.57875 12.396607 -28.463963" marker-end="url(#FilledArrow_Marker_2)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_74">
        <line x1="0" y1="0" x2="38.9" y2="25.682464" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Line_75">
        <path d="M 102.48341 0 C 95.77002 3.2682355 92.03793 7.0863876 82.34123 9.805687 C 75.03272 11.855253 64.33253 13.28151 54.075995 14.78901" marker-end="url(#FilledArrow_Marker_2)" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/>
      </g>
      <g id="Graphic_64">
        <path d="M 35.8 -60.6 L 56.6 -62 L 61 -40.2 L 38.6 -38.6 Z" fill="white"/>
        <path d="M 35.8 -60.6 L 56.6 -62 L 61 -40.2 L 38.6 -38.6 Z" stroke="#b1001c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </g>
      <g id="Graphic_62">
        <rect x="40.9" y="-56.3782" width="15" height="13" fill="white"/>
        <text transform="translate(41.9 -55.3782)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".4794922" y="9">dA</tspan>
        </text>
      </g>
      <g id="Graphic_69">
        <rect x="1.5" y="6.763033" width="9" height="13" fill="white"/>
        <text transform="translate(2.5 7.763033)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".4897461" y="9">r</tspan>
        </text>
      </g>
      <g id="Graphic_70">
        <rect x="1.2630332" y="-25.20853" width="9" height="13" fill="white"/>
        <text transform="translate(2.2630332 -24.20853)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".4897461" y="9">Θ</tspan>
        </text>
      </g>
      <g id="Graphic_73">
        <rect x="65.8" y="-58.5782" width="27" height="13" fill="white"/>
        <text transform="translate(66.8 -57.5782)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".4589844" y="9">r•dΘ</tspan>
        </text>
      </g>
      <g id="Graphic_76">
        <rect x="85.3" y="9.969668" width="9" height="13" fill="white"/>
        <text transform="translate(86.3 10.969668)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".4897461" y="9">ϕ</tspan>
        </text>
      </g>
      <g id="Graphic_77">
        <rect x="-30" y="-64.2" width="51" height="13" fill="white"/>
        <text transform="translate(-29 -63.2)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".41796875" y="9">r•sin(Θ)</tspan>
        </text>
      </g>
      <g id="Graphic_78">
        <rect x="22.6" y="-82.55632" width="69" height="13" fill="white"/>
        <text transform="translate(23.6 -81.55632)" fill="black">
          <tspan font-family="Menlo" font-size="10" font-weight="400" fill="black" x=".38720703" y="9">r•sin(Θ)•dϕ</tspan>
        </text>
      </g>
    </g>
  </g>
</svg>

{./raw}

$$dA = r^2 \sin(\theta) d\theta d\phi$$

$$d\omega = \frac{dA}{r^2}$$

## Radiation

### Radient energy $Q$

Energy of electromagnet radiation.

### Radient flux $\Phi$

$$\Phi = \frac{dQ}{dt}$$

Energy per unit time.

**Unit:** Watt $[W]$

> Radiant energy emitted, reflected, transmitted or received, per unit time. This is sometimes also called "radiant power".[^1]

### Radient intensity $I_\Omega$

$$I_\Omega = \frac{d\Phi}{d\omega}$$

Radient flux per unit solid angle.

**Unit:** Watt per steradian $[W * sr^{-1}]$

> Radiant flux emitted, reflected, transmitted or received, per unit solid angle. This is a directional quantity.[^1]

### Irradience $E$

$$E = \frac{d\Phi}{dA}$$

Radient flux per unit <del>projected</del> area.

> Radiant flux received by a surface per unit area.[^1]

### Radience $L_\Omega$

$$L_\Omega = \frac{d^2 \Phi}{d\omega dA \cos(\theta)}$$

Radient flux per unit solid angle per unit **projected** area.

**Unit:** Watt per steradian per square meter $[W * sr^{-1} * m^{−2}]$

> Radiant flux emitted, reflected, transmitted or received by a surface, per unit solid angle per unit projected area. This is a directional quantity. This is sometimes also confusingly called "intensity".[^1]

#### Relating incoming radience & irradience

{.raw}

\begin{align}
E = \int_{H^2} L_\Omega cos(\theta) d\omega \\
\frac{dE}{d\omega} = L_\Omega cos(\theta) \\
L_\Omega = \frac{dE}{d\omega cos(\theta)} \\
L_\Omega = \frac{d(\frac{d\Phi}{dA})}{d\omega cos(\theta)} \\
L_\Omega = \frac{d^2 \Phi}{d\omega dA cos(\theta)}
\end{align}

{./raw}

## References & Acknowledgements

- [^1]: Radiometry: https://en.wikipedia.org/wiki/Radiometry
- Vladimir Soloviev (Solovjov) Supplemental website of BYU ME340 "Heat Transfer" class
    - Geometry of Radiation: https://www.et.byu.edu/~vps/ME340/TABLES/12.0.pdf
    - Radiation: https://www.et.byu.edu/~vps/ME340/TABLES/12.1.pdf
    - View Factors: https://www.et.byu.edu/~vps/ME340/TABLES/13.1.pdf

{./let}

{.include ../../../template-sp19/v1.md}
