
{.#} I Scheme for Ice Cream

The built-in append procedure is equivalent in behavior to the following definition.

```scheme
(define (append s t) (if (null? s) t (cons (car s) (append (cdr s) t))))
```

1. Is the recursive call to append in the definition above is a tail call?

1. Implement atoms, which takes a Scheme expression. It returns a list of the non-nil atoms contained in the expression in the order that they appear. A non-nil atom is a number, symbol, or boolean value.

    ```
    scm> (atoms 1)
    (1)
    scm> (atoms '(+ 2 3))
    (+ 2 3)
    scm> (atoms '(+ (* 2 3) 4))
    (+ * 2 3 4)
    scm> (atoms '(* (+ 1 (* 2 3) (+ 4 5)))
    (* + 1 * 2 3 + 4 5)
    ```

    ```scheme
    (define (atoms exp)
      (cond
        ((null? exp) __________)
        ((atom? exp) __________)
        (else (append __________ __________))
      )
    )
    ```

1. If Scheme had only numbers and two-argument procedures, parentheses would be unnecessary. To demonstrate, implement `tally`, which takes the list of atoms in a Scheme expression. It returns a list whose first element is the value of the original expression. Assume that the original expression consists only of numbers and call expressions with arithmetic operators (such as `+` and `*`) and exactly two operands.

    Hint: `tally` is similar to the built-in `eval` procedure: `(eval '(+ (* 2 3) 4))` evaluates to 10.

    ```
    scm> (car (tally ’(1)))                 ; atoms in 1
    1
    scm> (car (tally ’(+ 2 3)))             ; atoms in (+ 2 3)
    5
    scm> (car (tally ’(+ * 2 3 4)))         ; atoms in (+ (* 2 3) 4)
    10
    scm> (car (tally ’(* + 1 * 2 3 + 4 5))) ; atoms in (* (+ 1 (* 2 3)) (+ 4 5))
    63
    ```

    ```scheme
    (define (tally s)
      (if (number? (car s))
        __________
        (let ((first __________))
          (let ((second __________))
            (cons (__________ (__________ (car s) (car first) (car second)))
                  __________
            )
          )
        )
      )
    )
    ```
