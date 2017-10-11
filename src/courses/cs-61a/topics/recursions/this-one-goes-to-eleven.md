
{.#} This One Goes to Eleven *(fa14-mt2-3)*

1. Fill in the blanks of the implementation of `sixty_ones` below, a function that takes a `Link` instance representing a sequence of integers and returns the number of times that 6 and 1 appear consecutively.

    ```py
    def sixty_ones(s):
      """
      Return the number of times that 1 directly follows 6 in linked list s.

      >>> once = Link(4, Link(6, Link(1, Link(6, Link(0, Link(1))))))
      >>> twice = Link(1, Link(6, Link(1, once)))
      >>> thrice = Link(6, twice)
      >>> apply_to_all(sixty_ones, [Link.empty, once, twice, thrice])
      [0, 1, 2, 3]
      """

      if __________:
        return 0
      elif __________:
        return 1 + __________
      else:
        return __________
    ```

1. Fill in the blanks of the implementation of `no_eleven` below, a function that returns a list of all distinct length-n lists of ones and sixes in which 1 and 1 do not appear consecutively.

    ```py
    def no_eleven(n):
      """
      Return a list of lists of 1’s and 6’s that do not contain 1 after 1.

      >>> no_eleven (2)
      [[6, 6], [6, 1], [1, 6]]
      >>> no_eleven (3)
      [[6, 6, 6], [6, 6, 1], [6, 1, 6], [1, 6, 6], [1, 6, 1]]
      >>> no_eleven (4)[:4] # first half
      [[6, 6, 6, 6], [6, 6, 6, 1], [6, 6, 1, 6], [6, 1, 6, 6]]
      >>> no_eleven (4)[4:] # second half
      [[6, 1, 6, 1], [1, 6, 6, 6], [1, 6, 6, 1], [1, 6, 1, 6]]
      """

      if n == 0:
        return __________
      elif n == 1:
        return
      else:
        a, b = no_eleven(__________), no_eleven(__________)
        return [__________ for s in a] + [__________ for s in b]
    ```
