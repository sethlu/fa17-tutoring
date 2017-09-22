
{.#} Game of Thrones *(su16-mt-7)*

This question uses the following tree data abstraction.

```py
>>> def tree(entry, children=[]):
...   return [entry, children]
...
>>> def entry(tree):
...   return tree[0]
...
>>> def children(tree):
...   return tree[1]
```

1. Define the function `track_lineage` that takes in a tree of strings `family_tree` and a string `name`. Assume that there is a unique node with entry `name`. `track_lineage` returns a list with the entries of the parent and grandparent of that node. If the node with entry name does not have a parent or grandparent, return `None` for that element in the list. See the doctests for details. **Do not violate abstraction barriers. You may only use the lines provided. You may not need to fill all the lines.**

    ```py
    def track_lineage(family_tree, name):
      """
      Return the entries of the parent and grandparent of the node with entry name in family_tree.

      >>> t = tree('Tytos', [ tree('Tywin', [
      ...   tree('Tywin', [
      ...     tree('Cersei'), tree('Jaime'), tree('Tyrion')
      ...   ]),
      ...   tree('Kevan', [
      ...     tree('Lancel'), tree('Martyn'), tree('Willem')
      ...   ])])
      >>> track_lineage(t, 'Tywin')
      ['Tytos', None]
      >>> track_lineage(t, 'Tytos')
      [None, None]
      """

      def tracker(t, p, gp):
        if __________
        __________
        for c in children(t):
        __________
        __________
        __________
        __________
      return tracker(__________, __________, __________)
    ```

1. Assuming that `track_lineage` works correctly, define the function are cousins that takes in a tree of strings `family_tree` and two strings `name1` and `name2` and returns `True` if the node with entry `name1` and the node with entry `name2` are cousins in `family_tree`. Assume that there are unique nodes with entries `name1` and `name2` in `family_tree`. See the doctests for details. Two nodes are cousins if they have the same grandparent but different parents.

    You may only use the lines provided. You may not need to fill all the lines.

    ```py
    def are_cousins(family_tree, name1, name2):
      """Return True if a node with entry name1 is a cousin of a node with entry name2 in family_tree.
      >>> are_cousins(t, ‘Kevan’, ‘Tytos’) # same tree as before False
      >>> are_cousins(t, ‘Cersei’, ‘Lancel’)
      True
      >>> are_cousins(t, ‘Jaime’, ‘Lancel’)
      True
      >>> are_cousins(t, ‘Jaime’, ‘Tyrion’)
      False
      """

      __________
      __________
      __________
      __________
    ```
