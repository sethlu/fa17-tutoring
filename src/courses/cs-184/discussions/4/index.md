{.let page-title CS 184}

{.let body}

# Discussion 4

## Bullets

- Geometry representations (in discussion 4)
    - Explicit
        - Point cloud
        - Polygon mesh
        - Subdivisions
        - NURBS
    - Implicit
        - Level sets
        - Algebraic surface
        - Distance functions
        - etc.
- Topology vs Geometry
    - 2D Manifold
        - Surface that when cut with a sphere always yields a disk
    - Half-edge data structure
        - Operations
            - Edge flip
            - Edge split
            - Edge collapse
- Geometry processing
    - Subdivision surface
        - Loop subdivision
            - Procedure: https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/thesis-10.pdf
                - Quadrosplit triangles
                - Assign new vertex positions (different weighting for old & new vertices)
            - Continuity
        - Catmull-Clark
            - Extraordinary vertex: valency != 4
            - Procedure: [doi:10.1016/0010-4485(78)90110-0](https://doi.org/10.1016%2F0010-4485%2878%2990110-0)
                - Summary
                    - Add vertex in each face
                    - Add midpoint on each edge
                    - Connect all vertices
                - For quad mesh?
                - For general mesh?
            - Continuity
    - Mesh simplification
        - Quadratic error
    - Mesh regularization
- Ray tracing
    - Ray equation
    - Plane equation
        - Distance from origin to plane?
    - Ray-plane intersection
    - Ray-triangle intersectioon
        - Möller Trumbone Algorithm
    - Ray-sphere intersection
    - Ray intersection with implicit surfaces

---

## Half-edge data structure

🖍 Board work on half-edge data structure

See below for a minimal representation of the half-edge data structure. You may assume the winding are counter-clockwise for the half-edges.

```c++
struct Halfedge {
    HalfedgeIter &next();
    HalfedgeIter &twin();
    VertexIter &vertex(); // At its base
    EdgeIter &edge();
    FaceIter &face();
};

struct Vertex {
    HalfedgeIter &halfedge(); // Any half-edge going out from this vertex
    Vector3D position;
};

struct Edge {
    HalfedgeIter &halfedge(); // Half-edge on either side
};

struct Face {
    HalfedgeIter &halfedge(); // Half-edge along any edge
};
```

## Ray tracing

🖍 Board work on ray intersection math

{./let}

{.include ../../../../template-sp19/v1.md}
