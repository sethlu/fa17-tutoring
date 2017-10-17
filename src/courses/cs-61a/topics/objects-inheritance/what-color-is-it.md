
{.#} What color is it? *(sp15-mt2-4)*
{.#++}

Implement the `look` method of the `Dress` class. The `look` method returns a `Dress` instance's current color when the number of times that the instance's `look` method has ever been invoked evenly divides the total number times that the `look` method of any `Dress` instance has ever been invoked. Otherwise, the instance's `color` changes to the most recently returned color from any call to `look`, and `None` is returned.

```py
class Dress:
  """
  What color is the dress?

  >>> blue = Dress('blue')
  >>> blue.look()
  'blue'
  >>> gold = Dress('gold')
  >>> gold.look()
  'gold'
  >>> blue.look() # 2 does not evenly divide 3; changes to gold
  >>> Dress('black').look()
  'black'
  >>> gold.look() # 2 does not evenly divide 5; changes to black
  >>> gold.look() # 3 evenly divides 6
  'black'
  >>> Dress('white').look()
  'white'
  >>> gold.look() # 4 evenly divides 8
  'black'
  >>> blue.look() # 3 evenly divides 9
  'gold'
  """

  seen = 0
  color = None

  def __init__(self, color):
    self.color = color
    self.seen = 0

  def look(self):
    __________ = __________
    __________ = __________
    if __________:
      __________ = __________
      return __________
    else:
      __________ = __________
```

{.#--}
