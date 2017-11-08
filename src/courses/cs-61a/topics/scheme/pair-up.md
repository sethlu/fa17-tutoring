
{.#} Pair Up *(sp17-final)*

Fill in the Scheme pairs function so that (pairs L), where L is a list, produces a list of lists, where each of these lists contains a pair of elements from L. The function must be tail-recursive. You need not define (or use) the reverse function.

```
scm> (pairs ’(1 2 3 4))
((1 2) (3 4))
scm> (pairs ’(1 2 3 4 5)) ; Odd element at end put in singleton list.
((1 2) (3 4) (5))
scm> (pairs ’())
()
```

```scheme
(define (reverse P)
  """Returns the reverse of list P. This function is tail-recursive""" ;;; Implementation not shown
)

(define (pairs L)
  (define (accum-pairs lst result)
    (cond
      (__________ result)
      (__________ (cons __________))
      (else (accum-pairs __________
                         __________
                         __________)
      )
    )
  )
  (__________)
)
```
