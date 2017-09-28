
{.#} Environmental Policy *(sp16-mt1-2)*

Draw the the environment diagram that results from executing the code below until the entire program is finished or an error occurs.

```py
y = 3
def out(h, m):
  y = 5 * m
  def inner():
    return y
  if m == 0:
    return h
  else:
    return out(inner, m - 1)
v = out(None, 1)()
```
