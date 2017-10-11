
{.#} Instant Noodles *(su17-mt1-4)*

For each of the functions below, find the order of growth that best describes the execution time as a function of `N`, the size of the input number `n`, or *infinite* if the function never terminates.

1. Code:

    ```py
    def foo(n):
      i = 1
      while i < n:
        i += 10
      n += 5
    ```

1. Code:

    ```py
    def baz(n):
      i = 1
      while i < n:
        j = i
        while j < n:
          while j < n:
            j += 1
          j += 1
        i += 1
    ```

1. Code:

    ```py
    def bar(n):
      i = 1
      while i < n:
        i += i
      i += i
    ```

1. Code:

    ```py
    def garply(n):
      for i in range(n):
        for j in range(n):
          for k in range(i + j):
            return garply(n - 1)
    ```
