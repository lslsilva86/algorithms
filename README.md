# Substring Problem Patterns

Substring problems involve finding specific patterns or substrings within a given string. These problems are common in computer science and can range from simple searches to complex pattern matching. Common operations include finding all occurrences of a substring, checking for the presence of a substring, or finding the longest substring that meets certain criteria.

## 1. findAllOccurrences

TypeScript function that finds all occurrences of a given substring within a string

### Steps

1.  **Function Definition:**

    - The function `findAllOccurrences` takes two arguments:
    - `text`: The string to search within.
    - `pattern`: The substring to find.

2.  **Result Array:**

    - An empty array `result` is initialized to store the starting indices of the found substrings.

3.  **Initial Search:**

    - The `indexOf` method is used to find the first occurrence of `pattern` in `text`. If `pattern` is found, its starting index is stored in `index`.

4.  **While Loop:**

    - The loop continues as long as `pattern` is found in `text`. Inside the loop:
    - The current `index` is pushed to the `result` array.
    - The `indexOf` method is called again to find the next occurrence of `pattern`, starting from the position right after the current found index.

5.  **Return Result:**

    - The function returns the array `result` containing all the starting indices of `pattern` in `text`.

## 2. minWindow

The minWindow function finds the minimum window substring in s that contains all the characters in t. This is a classic substring problem pattern known as the “minimum window substring” problem.

### Steps

1.  **Frequency Map Initialization:**

    - `map` is an array of size 128 (assuming ASCII characters) initialized to zero.
    - For each character in `t`, increment its corresponding position in the map.

2.  **Sliding Window Initialization:**

    - `counter` keeps track of the number of characters still needed to form a valid window.
    - `begin` and `end` are pointers representing the current window in `s`.
    - `d` keeps track of the minimum window size found.
    - `head` stores the starting index of the minimum window.

3.  **Expanding the Window:**

    - Move the `end` pointer to expand the window. For each character in `s`, decrement its count in the map.
    - If the character is part of `t` (i.e., its count is positive before decrementing), decrement `counter`.

4.  **Contracting the Window:**

    - Once a valid window is found (when `counter` is zero), try to contract the window from the left (using the `begin` pointer) to find the smallest possible valid window.
    - Update `d` and `head` if a smaller window is found.
    - Increment the count of the character at `begin` in the map. If it becomes positive, increment `counter` to indicate the window is no longer valid.

5.  **Return Result:**

    - If no valid window is found, return an empty string.
    - Otherwise, return the substring starting at `head` with length `d`.

## 3. lengthOfLongestSubstring

The function lengthOfLongestSubstring finds the length of the longest substring in a given string s without repeating characters. It uses a sliding window technique with two pointers to efficiently find the solution.

### Steps

1. **Frequency Map Initialization:**

   - `map` is an array of size 128 (to cover all ASCII characters), initialized to zero. This array keeps track of the count of each character in the current window.

2. **Sliding Window Initialization:**

   - `counter` keeps track of the number of characters that have appeared more than once in the current window.
   - `begin` and `end` are pointers representing the current window in `s`.
   - `maxLength` (`d` in the original code) keeps track of the maximum length of the valid window found.

3. **Expand the Window:**

   - Move the `end` pointer to expand the window to the right. For each character in `s`, increment its count in the `map`.
   - If the character count is greater than zero before incrementing, increment the `counter` (indicating a repeating character).

4. **Shrink the Window:**

   - While the `counter` is greater than zero (meaning the window has repeating characters), move the `begin` pointer to shrink the window from the left.
   - For each character removed from the window, decrement its count in the `map`. If the count becomes greater than one, decrement the `counter`.

5. **Update Maximum Length:**

   - After adjusting the window, update the `maxLength` with the maximum length of the current valid window (`end - begin`).

6. **Return Result:**
   - The function returns the `maxLength`, which is the length of the longest substring without repeating characters.

## 4. lengthOfLongestSubstring

The `lengthOfLongestSubstring` function finds the length of the longest substring without repeating characters in a given string `s`. This is a common problem often referred to as the "Longest Substring Without Repeating Characters".

### Steps

1. **Initialize the Variables:**
   - Set up the map, counter, begin, end, and d variables.
2. **Expand the Window:**
   - Iterate through the string using the end pointer. - Increment the count of the current character in the map. - If the count of the current character is greater than 1, increment the counter because the character is repeated.
3. **Shrink the Window:**
   - When counter is greater than 0 (indicating there is a repeated character in the current window), increment the begin pointer to shrink the window until the repeated character is removed. Decrement the counter accordingly.
4. **Update the Length:**
   - After ensuring the current window is valid (no repeated characters), update d with the maximum length found so far.
5. **Return the Result:**
   - Return the value of d, which holds the length of the longest substring without repeating characters.

https://algo.monster/flowchart

1. Sorting Algorithms

   - Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Counting Sort, Radix Sort, Bucket Sort
   - Keywords: “sort”, “order”, “arrange”, “largest”, “smallest”, “sorted array”

2. Searching Algorithms

   - Linear Search, Binary Search
   - Keywords: “find”, “search”, “locate”, “position”, “index”, “presence”

3. Dynamic Programming

   - Keywords: “optimal”, “maximum”, “minimum”, “longest”, “shortest”, “subsequence”, “subarray”, “memoization”, “overlapping subproblems”, “substructure”

4. Greedy Algorithms

   - Keywords: “minimum”, “maximum”, “shortest”, “longest”, “optimal”, “least”, “most”, “profit”, “cost”, “benefit”

5. Graph Algorithms

   - BFS (Breadth-First Search), DFS (Depth-First Search), Dijkstra’s Algorithm, Bellman-Ford Algorithm, Floyd-Warshall Algorithm, Prim’s Algorithm, Kruskal’s Algorithm, A Algorithm\*
   - Keywords: “path”, “route”, “shortest path”, “cycle”, “connected”, “graph”, “network”, “tree”, “spanning tree”, “vertex”, “edge”

6. Tree Algorithms

   - Traversal (In-order, Pre-order, Post-order), Binary Search Tree Operations, AVL Tree, Segment Tree, Fenwick Tree
   - Keywords: “tree”, “binary tree”, “BST”, “traverse”, “ancestor”, “descendant”, “leaf”, “node”

7. Backtracking

   - Keywords: “all possible”, “combination”, “permutation”, “path”, “solution”, “choices”, “generate”, “construct”

8. Divide and Conquer

   - Keywords: “divide”, “conquer”, “merge”, “recursive”, “subproblem”, “combine”

9. Bit Manipulation

   - Keywords: “bit”, “binary”, “AND”, “OR”, “XOR”, “shift”, “mask”, “bitwise”

10. String Algorithms

    - KMP (Knuth-Morris-Pratt), Rabin-Karp, Z Algorithm, Suffix Arrays
    - Keywords: “substring”, “subsequence”, “pattern”, “match”, “search”, “prefix”

11. Mathematical Algorithms

    - Euclidean Algorithm (GCD), Sieve of Eratosthenes, Modular Arithmetic, Combinatorics
    - Keywords: “gcd”, “lcm”, “prime”, “factorial”, “modulo”, “permutation”, “combination”, “divisible”

12. Data Structures

    - Stack, Queue, Priority Queue, Linked List, Hash Table, Trie, Heap, Disjoint Set (Union-Find)
    - Keywords: “stack”, “queue”, “linked list”, “hash”, “map”, “set”, “priority”, “heap”, “union”, “find”

13. Miscellaneous

    - Two-pointer technique, Sliding Window, Prefix Sum, Kadane’s Algorithm (for maximum subarray)
    - Keywords: “sum”, “subarray”, “subsequence”, “window”, “prefix”, “maximum sum”, “minimum sum”, “fixed size”
