
{.#} Asymptotics *(sp15-mt2-2)*

Suppose we run experiments to understand the runtime performance of the `add` method of the `PotatoSack` class. The runtime as a function of N (the number of inserts) is shown below. Using the technique from the asymptotics lab, *approximate* the empirical run time in *tilde notation* as a function of N. As a reminder, in that lab, we assumed that the runtime is *~aN<sup>b</sup>* , and found *a* and *b*.Do not leave your answer in terms of logarithms. Your *a* and *b* must be within 25% of our answers. Use only the data points that you expect to give the best approximation of the asymptotic behavior of the algorithm.

| N          | Time (s)   |
|:---------- |:---------- |
| 1          | 0.00       |
| 2          | 0.01       |
| 3          | 0.01       |
| 6          | 0.03       |
| 13         | 0.16       |
| 25         | 0.63       |
| 50         | 2.50       |
| 100        | 9.97       |

Suppose we measure the performance of a collection *X*, and find that inserting *N* items takes *Θ(N<sup>2</sup>)* time. For each of the following, circle the collection type if it is possible for that collection to take *Θ(N<sup>2</sup>)* time to insert *N* items on a worst-case input, and cross out the collection type if it is impossible. Assume that each is correctly implemented.

- LinkedList
- 2-3 Tree Set
- HeapMinPQ
- LLRBST Set
- External Chaining Hash Map
- ArrayList

If we have two correct algorithms for solving the same problem that use the exact same amount of memory, but have worst-case runtimes that are *Θ(N)* and *Θ(N<sup>2</sup>)*, is it always better to use the algorithm that is *Θ(N)*? If so, why? If not, why not?
