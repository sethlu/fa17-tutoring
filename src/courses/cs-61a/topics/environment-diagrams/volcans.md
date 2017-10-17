
{.#} Vulcans *(sp15-mt2-2)*

1. Draw the environment diagram that results from executing the code after the entire program is finished. No errors occur during the execution of this example.

    ```py
    def scramble(egg):
      return [egg, over(egg)]

    def over(easy):
      easy[1] = [[easy], 2]
      return list(easy[1])
    egg = scramble([12, 24])
    ```
