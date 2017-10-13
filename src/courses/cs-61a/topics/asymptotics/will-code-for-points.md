
{.#} Will Code for Points *(sp15-mt2-3)*

1. Implement `objectify`, which takes a tree data abstraction and returns an equivalent `Tree` instance.

    ```py
    class Tree:

      def __init__(self, root, branches=[]):
        self.root = root
        for branch in branches:
          assert isinstance(branch, Tree)
        self.branches = list(branches)

      def is_leaf(self):
        return not self.branches
    ```

    ```py
    def objectify(t):
      """
      Return a Tree instance equivalent to a tree represented as a list.

      >>> m = tree(2)
      >>> m[2]
      >>> objectify(m)
      Tree(2)
      >>> r = tree(3, [tree(4, [tree(5), tree(6)]), tree(7, [tree(8)])])
      >>> r
      [3, [4, [5], [6]], [7, [8]]]
      >>> objectify(r)
      Tree(3, [Tree(4, [Tree(5), Tree(6)]), Tree(7, [Tree(8)])])
      """

      return __________
    ```

1. What's the big-theta expression that describes the number of `Tree` instances constructed by calling obejctify on a tree with n nodes?
