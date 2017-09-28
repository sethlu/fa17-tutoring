
{.#} Verbose Factorial

Here's a good way to visualize factorials--but a little challenging to code. Write a functional `verbose_fact(n)` that prints out the steps to reduce the recursive cases to a base case. You may utilize the params `fact_so_far` and `prefix` to help with building up your solution.

```py
def verbose_fact(n, fact_so_far = 1, prefix = ""):
  """
  >>> verbose_fact(1)
    1!
  = 1
  >>> verbose_fact(2)
    2!
  = 2 x 1!
  = 2 x 1
  = 2
  >>> verbose_fact(3)
    3!
  = 3 x 2!
  = 3 x 2 x 1!
  = 3 x 2 x 1
  = 6
  """

  assert n >= 1, "Use n >= 1"
  "*** YOUR CODE HERE ***"
```

<details><summary>Solution</summary><pre><code class="language-py">def verbose_fact(n, fact_so_far = 1, prefix = ""):
  """
  >>> verbose_fact(1)
    1!
  = 1
  >>> verbose_fact(2)
    2!
  = 2 x 1!
  = 2 x 1
  = 2
  >>> verbose_fact(3)
    3!
  = 3 x 2!
  = 3 x 2 x 1!
  = 3 x 2 x 1
  = 6
  """

  assert n >= 1, "Use n >= 1"

  # Check if it's the first time calling the function
  if not prefix:
    # First time
    print("  " + str(n) + "!")
  else:
    # Not the first time
    print("= " + prefix + str(n) + "!")

  # Check if recursion is finished
  if n == 1:
    # Base case, end of recursion
    if prefix: print("= " + prefix + str(n)) # Print the simplified "1!"
    # Print out the solution
    print("= " + str(fact_so_far * n))
  else:
    # Continue by recursion
    verbose_fact(n - 1, fact_so_far * n, prefix + str(n) + " x ")</code></pre></details>
