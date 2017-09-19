
{.#} You Complete Me *(sp15-mt1-3)*

1. Implement the combine function, which takes a non-negative integer n, a two-argument function f, and a number result. It applies f to the first digit of n and the result of combining the rest of the digits of n by repeatedly applying f (see the doctests). If n has no digits (because it is zero), combine returns result.

    ```py
    from operator import add, mul

    def combine(n, f, result):
      """
      Combine the digits in non-negative integer n using f.

      >>> combine(3, mul, 2) # mul(3, 2)
      6
      >>> combine(43, mul, 2) # mul(4, mul(3, 2))
      24
      >>> combine(6502, add, 3) # add(6, add(5, add(0, add(2, 3)))
      16
      >>> combine(239, pow, 0) # pow(2, pow(3, pow(9, 0)))
      8
      """

      if n == 0:
        return result
      else:
        return combine(__________, __________, __________)
    ```

1. Implement the memory function, which takes a number x and a single-argument function f. It returns a function with a peculiar behavior that you must discover from the doctests. You may only use names and call expressions in your solution. You may not write numbers or use features of Python not yet covered in the course.

    ```py
    square = lambda x: x * x
    double = lambda x: 2 * x

    def memory(x, f):
      """
      Return a higher-order function that prints its memories.

      >>> f = memory(3, lambda x: x)
      >>> f = f(square)
      3
      >>> f = f(double)
      9
      >>> f = f(print)
      6
      >>> f = f(square)
      3
      None
      """

      def g(h):
        print(__________)
        return __________
      return g
    ```
