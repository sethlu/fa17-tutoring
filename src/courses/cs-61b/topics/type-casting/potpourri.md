
{.#} Potpourri *(sp17-mt1-3)*

1. Suppose `Cat` and `Dog` are subclasses of `Animal`. All three classes have default (zero-argument) constructors. For each answer below, mark whether it causes a compilation error, runtime error, or runs successfully. Consider each line independently of all other lines.

    ```java
    Cat c = new Animal();
    ```

    <details>
      <summary>Solution</summary>
      Compilation error
    </details>

    ```java
    Animal a = new Cat();
    ```

    <details>
      <summary>Solution</summary>
      Runs fine
    </details>

    ```java
    Dog d = new Cat();
    ```

    <details>
      <summary>Solution</summary>
      Compilation error
    </details>

    ```java
    Animal a = (Cat) new Cat();
    ```

    <details>
      <summary>Solution</summary>
      Runs fine
    </details>

    ```java
    Dog d = (Dog) new Animal();
    ```

    <details>
      <summary>Solution</summary>
      Runtime error
    </details>
