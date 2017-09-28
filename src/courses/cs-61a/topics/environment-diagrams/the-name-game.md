
{.#} The Name Game *(su16-mt1-2)*

Draw the the environment diagram that results from executing the code below until the entire program is finished or an error occurs.

```py
def person(name, age):
  def brain(ask):
    if ask == 'name':
      return name
    elif ask == 'age':
      return age
  return brain
def name(guy):
    return guy('name')
def age(gal):
    return gal('age')
my_name, my_age = 'Marv', 21
marv = person(my_name, my_age)
dan = person('Dan', age(marv) + 7)
```
