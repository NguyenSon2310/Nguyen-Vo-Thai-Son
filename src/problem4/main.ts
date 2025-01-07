// Iterative approach
// Complexity: O(n) time, The loop runs n times, performing a constant-time addition operation in each iteration.
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Mathematical formula
// Complexity: O(1) time, The sum is computed in a constant number of operations, regardless of the size of n
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

// Functional approach using Array.reduce
// Complexity: O(n) time,The Array.from function creates an array of length n, which takes O(n) time. The reduce method iterates through the array to sum its elements, also taking O(n) time. Overall, it is O(n)
function sum_to_n_c(n: number): number {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, num) => acc + num,
    0
  );
}
