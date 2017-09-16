
### Your Father's Parentheses *(sp16-mt1-1)*

Suppose we have a sequence of quantities that we want to multiply together, but can only multiply two at a time. We can express the various ways of doing so by counting the number of different ways to parenthesize the sequence. For example, here are the possibilities for products of 1, 2, 3 and 4 elements:

- 1 element of 1 possibility
  `a`
- 2 elements of 1 possibility
  `ab`
- 3 elements of 2 possibilities
  `(ab)c`
  `a(bc)`
- 4 elements of 5 possibilities
  `a(b(cd))`
  `a((bc)d)`
  `(ab)(cd)`
  `(a(bc))d`
  `((ab)c)d`

Assume, as in the table above, that we don’t want to reorder elements.
Define a function `count_groupings` that takes a positive integer `n` and returns the number of ways of parenthesizing the product of `n` numbers. (You might not need to use all lines.)

```py
def count_groupings(n):
  """
  For N >= 1, the number of distinct parenthesizations of a product of N items.

  >>> count_groupings(1)
  1
  >>> count_groupings(2)
  1
  >>> count_groupings(3)
  2
  >>> count_groupings(4)
  5
  >>> count_groupings(5)
  14
  """
  if n == 1:
    return __________
  __________
  i = __________
  while __________:
    __________
    i += 1
  return __________
```
