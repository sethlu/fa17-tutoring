
{.#} Tree Time *(fa14-mt2-4)*

1. A `GrootTree` `g` is a binary tree that has an attribute `parent`. Its parent is the `GrootTree` in which `g` is a branch. If a `GrootTree` instance is not a branch of any other `GrootTree` instance, then its parent is `BinaryTree.empty`.

    `BinaryTree.empty` should not have a `parent` attribute. Assume that every `GrootTree` instance is a branch of at most one other `GrootTree` instance and not a branch of any other kind of tree.

    Fill in the blanks below so that the `parent` attribute is set correctly. You may not need to use all of the lines. Indentation is allowed. You *should not* include any `assert` statements. Using your solution, the doctests for `fib_groot` should pass.

    ```py
    class GrootTree(BinaryTree):
      """A binary tree with a parent."""

      def __init__(self, entry, left=BinaryTree.empty, right=BinaryTree.empty):
        BinaryTree.__init__(self, entry, left, right)
        __________
        __________
        __________
        __________
        __________
        __________

    def fib_groot(n):
      """
      Return a Fibonacci GrootTree.

      >>> t = fib_groot(3)
      >>> t.entry
      2
      >>> t.parent.is_empty
      True
      >>> t.left.parent.entry
      2
      >>> t.right.left.parent.right.parent.entry
      1
      """

      if n == 0 or n == 1:
        return GrootTree(n)
      else:
        left, right = fib_groot(n - 2), fib_groot(n - 1)
        return GrootTree(left.entry + right.entry, left, right)
    ```

1. Fill in the blanks of the implementation of `paths`, a function that takes two arguments: a `GrootTree` instance `g` and a list `s`. It returns the number of paths through `g` whose entries are the elements of `s`. A path through a `GrootTree` can extend either to a branch or its `parent`.

    You may assume that the `GrootTree` class is implemented correctly and that the list `s` is non-empty.

    There are two paths for `[2, 1, 2, 1, 0]`, one path for `[2, 1, 0, 1, 0]` in the tree below:

    <pre>&nbsp;&nbsp;&nbsp;&nbsp;2
+-------+
1       1
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+---+
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0   1</pre></div>

    ```py
    def paths(g, s):
      """
      The number of paths through g with entries s.

      >>> t = fib_groot(3)
      >>> paths(t, [1])
      0
      >>> paths(t, [2])
      1
      >>> paths(t, [2, 1, 2, 1, 0])
      2
      >>> paths(t, [2, 1, 0, 1, 0])
      1
      >>> paths(t, [2, 1, 2, 1, 2, 1])
      8
      """

      if g is BinaryTree.empty __________:
        return 0
      elif __________:
        return 1
      else:
        xs = [__________]
        return sum([__________ for x in xs])
    ```
