
{.#} Asymptotics *(sp17-mt2-4)*
{.#++}

1. Code:

    ```java
    public static void f1(int N) { // desired runtime Θ(N)
      for (int i = 0; i < N; __________) { System.output.println("hi"); }
    }
    ```

    ```java
    public static void f2(int N) { // desired runtime Θ(logN)
      for (int i = 0; i < N; __________) { System.output.println("hi"); }
    }
    ```

    ```java
    public static void f3(int N) { // desired runtime Θ(1)
      for (int i = 0; i < N; __________) { System.output.println("hi"); }
    }
    ```

1. Give the runtime of the following function *Θ(·)* or *O(·)* notations as requested. Your answer should be as simple as possible with no unnecessary leading constants or lower order terms.

    ```java
    public static void f4(int N) {
      if (N == 0) { return; }
      f4(N / 2);
      f4(N / 2);
      f4(N / 2);
      f4(N / 2);
      g(N); // runs in Θ(N^2) time
    }
    ```

    ```java
    public static void f5(int N, int M) {
      if (N < 10) { return; }
      for (int i = 0; i <= N % 10; i++) {
        f5(N / 10, M / 10);
        System.out.println(M);
      }
    }
    ```

{.#--}
