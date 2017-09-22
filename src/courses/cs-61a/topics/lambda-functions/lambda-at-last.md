
{.#} Lambda at Last *(fa14-mt1-4)*

1. Fill in the blank below with an expression so that the second line evaluates to 2014. **You may only use the names `two_thousand`, `two`, `k`, `four`, and `teen` and parentheses in your expression (no numbers, operators, etc.)**

    ```py
    two_thousand = lambda two: lambda k: __________
    two_thousand(7)(lambda four: lambda teen: 2000 + four + teen)
    ```

1. The `if_fn` returns a two-argument function that can be used to select among alternatives, similar to an if statement. **Fill in the return expression of factorial so that it is defined correctly for non-negative arguments. You may only use the names `if_fn`, `condition`, `a`, `b`, `n`, `factorial`, `base`, and `recursive` and parentheses in your expression (no numbers, operators, etc.).**

    ```py
    def if_fn(condition):
      if condition:
        return lambda a, b: a
      else:
        return lambda a, b: b

    def factorial(n):
      """
      Compute N! for non-negative N. N! = 1 * 2 * 3 * ... * N.

      >>> factorial(3)
      6
      >>> factorial(5)
      120
      >>> factorial(0)
      1
      """

      def base():
        return 1

      def recursive():
        return n * factorial(n-1)

      return __________
    ```
