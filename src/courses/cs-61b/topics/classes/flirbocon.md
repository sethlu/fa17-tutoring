
{.#} Flirbocon *(sp17-mt1-4)*

Consider the declarations below. Assume that Falcon extends Bird.

```java
Bird bird = new Falcon();
Falcon falcon = (Falcon) bird;
```

Consider the following possible features for the `Bird` and `Falcon` classes. Assume that all methods are **instance methods** (not static!).

> The notation `Bird::gulgate(Bird)` specifies a method called `gulgate` with parameter of type `Bird` from the `Bird` class.

F1. The `Bird::gulgate(Bird)` method exists.
F2. The `Bird::gulgate(Falcon)` method exists.
F3. The `Falcon::gulgate(Bird)` method exists.
F4. The `Falcon::gulgate(Falcon)` method exists.

1. Suppose we make a call to `bird.gulgate(bird)`;

    - Which features are sufficient **alone** for this call to compile?

        <details>
          <summary>Solution</summary>
          F1
        </details>

    - Select a **maximum** set of features such that this call executes the `Bird::gulgate(Bird)` method.

        <details>
          <summary>Solution</summary>
          F1 & not F3 & F2, F4
        </details>

    - Select a **minimum** set of features such that this call executes the `Falcon::gulgate(Bird)` method.

        <details>
          <summary>Solution</summary>
          F1 & F3
        </details>

1. Suppose we make a call to `falcon.gulgate(falcon)`;

    - Which features are sufficient **alone** for this call to compile?

        <details>
          <summary>Solution</summary>
          F1 & F2 & F3 & F4
        </details>

    - Select a **maximum** set of features such that this call executes the `Bird::gulgate(Bird)` method.

        <details>
          <summary>Solution</summary>
          F1
        </details>

    - Select a **maximum** set of features such that this call executes the `Bird::gulgate(Falcon)` method.

        <details>
          <summary>Solution</summary>
          F1 & F2 & F3
        </details>

    - Select a **maximum** set of features such that this call executes the `Falcon::gulgate(Bird)` method.

        <details>
          <summary>Solution</summary>
          F1 & F3
        </details>

    - Select a **maximum** set of features such that this call executes the `Falcon::gulgate(Falcon)` method.

        <details>
          <summary>Solution</summary>
          F1 & F2 & F3 & F4
        </details>
