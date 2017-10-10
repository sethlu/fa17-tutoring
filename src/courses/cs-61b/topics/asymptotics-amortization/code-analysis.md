
{.#} Code Analysis

For each of the pieces of code below, give the runtime in *Θ(·)* notation as a function of the given parameters. Your answer should be simple, with no unnecessary leading constants or unnecessary summations.

```java
public static void f1(int n) {
  for (int i = 0; i < 2 * n; i += 1) {
    System.out.println("hello");
  }
}
```

```java
public static void f2(int n) {
  if (n == 0) { return; }
  f2(n / 2);
  f1(n);
  f2(n / 2);
}
```

```java
public static void f3(int n) {
  if (n == 0) { return; }
  f3(n / 3);
  f1(n);
  f3(n / 3);
  f1(n);
  f3(n / 3);
}
```

```java
public static void f4(int n) {
  if (n == 0) { return; }
  f4(n - 1);
  f1(17);
  f4(n - 1);
}
```

```java
public static void f5(int n, int m) {
  if (m <= 0) {
    return;
  } else {
    for (int i = 0; i < n; i += 1) {
      f5(n, m - 1);
    }
  }
}
```
