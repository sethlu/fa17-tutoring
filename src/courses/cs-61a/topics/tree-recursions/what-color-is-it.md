
{.#} What color is it? *(sp15-mt2-4)*
{.#++}

Implement `decrypt`, which takes a string `s` and a dictionary `d` that contains words as values and their secret codes as keys. It returns a list of all possible ways in which `s` can be decoded by splitting it into secret codes and separating the corresponding words by spaces.

```py
def decrypt(s, d):
  """
  List all possible decoded strings of s.

  >>> codes = {
  ... 'alan': 'spooky',
  ... 'al': 'drink',
  ... 'antu': 'your',
  ... 'turing': 'ghosts',
  ... 'tur': 'scary',
  ... 'ing': 'skeletons',
  ... 'ring': 'ovaltine'
  ... }
  >>> decrypt('alanturing', codes)
  ['drink your ovaltine', 'spooky ghosts', 'spooky scary skeletons']
  """

  if s == '':
    return []
  ms = []
  if __________:
    ms.append(__________)
  for k in __________:
    first , suffix = s[:k], s[k:]
    if __________:
      for rest in __________:
        ms.append(__________)
  return ms
```

{.#--}
