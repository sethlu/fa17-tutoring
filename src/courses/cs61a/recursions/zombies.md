
{.#} Zombies! *(fa15-mt1-4)*

**IMPORTANT** In this question, assume that all of `f`, `g`, and `h` are functions that take one non-negative integer argument and return a non-negative integer. You do not need to consider negative or fractional numbers.

1. Implement the higher-order function `decompose1`, which takes two functions `f` and `h` as arguments. It returns a function `g` that relates `f` to `h` in the following way: For any non-negative integer `x`, `h(x)` equals `f(g(x))`. Assume that `decompose1` will be called only on arguments for which such a function `g` exists. Furthermore, assume that there is no recursion depth limit in Python.

    ```py
    def decompose1(f, h):
      """
      Return g such that h(x) equals f(g(x)) for any non-negative integer x.

      >>> add_one = lambda x: x + 1
      >>> square_then_add_one = lambda x: x * x + 1
      >>> g = decompose1(add_one, square_then_add_one)
      >>> g(5)
      25
      >>> g(10)
      100
      """

      def g(x):
        def r(y):
          if __________:
            return __________
          else:
            return __________
        return r(0)
      __________
    ```

1. Write a number in the blank so that the final expression below evaluates to `2015`. Assume `decompose1` is implemented correctly.

    ```py
    def make_adder(a):
      def add_to_a(b):
        return a + b
      return add_to_a

    def compose1(f, g):
      def h(x):
        return f(g(x))
      return h

    e, square = make_adder(1), lambda x: x*x
    decompose1(e, compose1(square, e))(3) + __________
    ```
