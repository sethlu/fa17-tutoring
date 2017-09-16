
### Environmental Policy *(sp16-mt1-2)*

Fill in the environment diagram that results from executing the code below until the entire program is finished, an error occurs, or all frames are filled. *You may not need to use all of the spaces or frames.*
A complete answer will:

- Add all missing names and parent annotations to all local frames.
- Add all missing values created or referenced during execution.
- Show the return value for each local frame.

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
