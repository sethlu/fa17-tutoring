
{.#} Multikarp *(fa16-mt1-5)*

**Terminology.** An *order 1 numeric function* is a function that takes a number and returns a number. An order 2 numeric function is a function that takes a number and returns an order 1 numeric function. Likewise, an order n numeric function is a function that takes a number and returns an order n − 1 numeric function.

The *argument sequence* of a nested call expression is the sequence of all arguments in all subexpressions, in the order they appear. For example, the expression `f(3)(4)(5)(6)(7)` has the argument sequence 3, 4, 5, 6, 7.

1. Implement `multiadder`, which takes a positive integer `n` and returns an order n numeric function that sums an argument sequence of length n.

    ```py
    def multiadder(n):
      """
      Return a function that takes N arguments, one at a time, and adds them.

      >>> f = multiadder(3)
      >>> f(5)(6)(7)
      18
      >>> multiadder(1)(5)
      5
      >>> multiadder(2)(5)(6)
      11
      >>> multiadder(4)(5)(6)(7)(8) # 5 + 6 + 7 + 8
      26
      """
      
      assert n > 0
      if __________:
        return __________
      else:
        return __________
    ```

1. Complete the expression below by writing one integer in each blank so that the whole expression evaluates to 2016. Assume multiadder is implemented correctly.

    ```py
    def compose1(f, g):
      def h(x):
        return f(g(x))
      return h

    compose1(multiadder(__________)(1000), multiadder(__________)(10)(__________))(1)(2)(3)
    ```
