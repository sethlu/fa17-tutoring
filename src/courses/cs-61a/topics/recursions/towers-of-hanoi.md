
{.#} Towers of Hanoi *(fa16-hw5-3)*

A classic puzzle called the Towers of Hanoi is a game that consists of three rods, and a number of disks of different sizes which can slide onto any rod. The puzzle starts with n disks in a neat stack in ascending order of size on a `start` rod, the smallest at the top, forming a conical shape.

The objective of the puzzle is to move the entire stack to an `end` rod, obeying the following rules:

- Only one disk may be moved at a time.
- Each move consists of taking the top (smallest) disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod.
- No disk may be placed on top of a smaller disk.

Complete the definition of `move_stack`, which prints out the steps required to move `n` disks from the `start` rod to the `end` rod without violating the rules.

```py
def print_move(origin, destination):
  """
  Print instructions to move a disk.
  """

  print("Move the top disk from rod", origin, "to rod", destination)

def move_stack(n, start, end):
  """
  Print the moves required to move n disks on the start pole to the end pole without violating the rules of Towers of Hanoi.

  n -- number of disks
  start -- a pole position, either 1, 2, or 3
  end -- a pole position, either 1, 2, or 3

  There are exactly three poles, and start and end must be different. Assume
  that the start pole has at least n disks of increasing size, and the end
  pole is either empty or has a top disk larger than the top n start disks.

  >>> move_stack(1, 1, 3)
  Move the top disk from rod 1 to rod 3
  >>> move_stack(2, 1, 3)
  Move the top disk from rod 1 to rod 2
  Move the top disk from rod 1 to rod 3
  Move the top disk from rod 2 to rod 3
  >>> move_stack(3, 1, 3)
  Move the top disk from rod 1 to rod 3
  Move the top disk from rod 1 to rod 2
  Move the top disk from rod 3 to rod 2
  Move the top disk from rod 1 to rod 3
  Move the top disk from rod 2 to rod 1
  Move the top disk from rod 2 to rod 3
  Move the top disk from rod 1 to rod 3
  """

  assert 1 <= start <= 3 and 1 <= end <= 3 and start != end, "Bad start/end"
  "*** YOUR CODE HERE ***"
```

<details><summary>Solution</summary><pre><code class="language-py">def print_move(origin, destination):
  """
  Print instructions to move a disk.
  """

  print("Move the top disk from rod", origin, "to rod", destination)

def move_stack(n, start, end):
  """
  Print the moves required to move n disks on the start pole to the end pole without violating the rules of Towers of Hanoi.

  n -- number of disks
  start -- a pole position, either 1, 2, or 3
  end -- a pole position, either 1, 2, or 3

  There are exactly three poles, and start and end must be different. Assume
  that the start pole has at least n disks of increasing size, and the end
  pole is either empty or has a top disk larger than the top n start disks.

  >>> move_stack(1, 1, 3)
  Move the top disk from rod 1 to rod 3
  >>> move_stack(2, 1, 3)
  Move the top disk from rod 1 to rod 2
  Move the top disk from rod 1 to rod 3
  Move the top disk from rod 2 to rod 3
  >>> move_stack(3, 1, 3)
  Move the top disk from rod 1 to rod 3
  Move the top disk from rod 1 to rod 2
  Move the top disk from rod 3 to rod 2
  Move the top disk from rod 1 to rod 3
  Move the top disk from rod 2 to rod 1
  Move the top disk from rod 2 to rod 3
  Move the top disk from rod 1 to rod 3
  """

  assert 1 <= start <= 3 and 1 <= end <= 3 and start != end, "Bad start/end"
  if n == 1:
    print_move(start, end)
  else:
    other = 6 - start - end
    move_stack(n - 1, start, other)
    print_move(start, end)
    move_stack(n - 1, other, end)</code></pre></details>
