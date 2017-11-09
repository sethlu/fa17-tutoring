
{.#} Lazy Sunday *(fa14-final-4)*

1. Implement the Scheme procedure directions, which takes a number `n` and a symbol `sym` that is bound to a nested list of numbers. It returns a Scheme expression that evaluates to `n` by repeatedly applying `car` and `cdr` to the nested list. Assume that `n` appears exactly once in the nested list bound to `sym`.

    Hint: The implementation searches for the number `n` in the nested list `s` that is bound to `sym`. The returned expression is built during the search. See the tests at the bottom of the page for usage examples.

    ```scheme
    (define (directions n sym)

      (define (search s exp)
        ; Search an expression s for n and return an expression based on exp
        (cond
          ((number? s) __________)
          ((null? s) nil)
          (else (search-list s exp))
        )
      )

      (define (search-list s exp)
        ; Search a nested list s for n and return an expression based on exp
        (let
          (
            (first __________)
            (rest __________)
          )
          (if (null? first) rest first)
        )
      )

      (search (eval sym) sym)

    )

    (define a '(1 (2 3) ((4))))
    (directions 1 'a)
    ; expect (car a)
    (directions 2 'a)
    ; expect (car (car (cdr a)))
    (define b '((3 4) 5))
    (directions 4 'b)
    ; expect (car (cdr (car b)))
    ```

1. What expression will `(directions 4 'a)` evaluate to?
