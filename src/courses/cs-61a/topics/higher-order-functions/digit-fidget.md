
{.#} Digit Fidget *(fa15-mt1-3)*

**IMPORTANT DEFINITION** Each digit in a non-negative integer `n` has a digit position. Digit positions begin at `0` and count from the right-most digit of `n`. For example, in `568789`, the digit `9` is at position `0` and digit `7` is at position `2`. The digit `8` appears at both positions `1` and `3`.

1. Implement the find_digit function, which takes a non-negative integer `n` and a digit `d` greater than `0` and less than `10`. It returns the largest (left-most) position in `n` at which digit `d` appears. If `d` does not appear in `n`, then `find_digit` returns `False`. You may not use recursive calls.

    ```py
    def find_digit(n, d):
      """
      Return the largest digit position in n for which d is the digit.

      >>> find_digit(567, 7)
      0
      >>> find_digit(567, 5)
      2
      >>> find_digit(567, 9)
      False
      >>> find_digit(568789, 8) # 8 appears at positions 1 and 3
      3
      """

      i, k = 0, __________
      while n:
        n, last = n // 10, n % 10
        if last == __________:
          __________
        i = i + 1
      return __________
    ```

1.  Find all values of `y` between 1 and 9 (inclusive) for which the final expression below evaluates to `True`. Assume that `find_digit` is implemented correctly.

    ```py
    def compose1(f, g):
      def h(x):
        return f(g(x))
      return h

    f = lambda x: find_digit(234567, x)
    compose1(f, f)(y) == y
    ```
