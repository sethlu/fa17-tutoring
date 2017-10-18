
{.#} Pointers *(sp16-mt2-1)*

For each of the following code fragments, draw the final state of the program in boxes and arrows.

- Code:

    ```py
    L = Link(1, Link(2))
    P = L
    Q = Link(L, Link(P))
    P.rest.rest = Q
    ```

- Code:

    ```py
    L = Link.empty
    for i in range(3):
      L = Link(i, L)
    ```

- Code:

    ```py
    P = Link(0, Link(1, Link(2)))
    def crack1(L):
      if L is Link.empty:
        return (Link.empty, Link.empty)
      L1, L2 = crack1(L.rest)
      return (Link(L.first, L2), L1)
    Q, R = crack1(P)
    ```

- Code:

    ```py
    P = Link(0, Link(1, Link(2)))
    def crack2(L):
      if L is Link.empty:
        return (Link.empty, Link.empty)
      L1, L2 = crack2(L.rest)
      L.rest = L2
      return (L, L1)
    Q, R = crack2(P)
    ```
