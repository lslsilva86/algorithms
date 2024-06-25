# Sorting and Searching

1. Bubble Sort

   - Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

   - Question: Sort the array [64, 34, 25, 12, 22, 11, 90] using Bubble Sort.

```
   Pass 1: [64, 34, 25, 12, 22, 11, 90] -> [34, 64, 25, 12, 22, 11, 90] -> [34, 25, 64, 12, 22, 11, 90] -> [34, 25, 12, 64, 22, 11, 90] -> [34, 25, 12, 22, 64, 11, 90] -> [34, 25, 12, 22, 11, 64, 90]
   Pass 2: [34, 25, 12, 22, 11, 64, 90] -> [25, 34, 12, 22, 11, 64, 90] -> [25, 12, 34, 22, 11, 64, 90] -> [25, 12, 22, 34, 11, 64, 90] -> [25, 12, 22, 11, 34, 64, 90]
   Pass 3: [25, 12, 22, 11, 34, 64, 90] -> [12, 25, 22, 11, 34, 64, 90] -> [12, 22, 25, 11, 34, 64, 90] -> [12, 22, 11, 25, 34, 64, 90]
   Pass 4: [12, 22, 11, 25, 34, 64, 90] -> [12, 11, 22, 25, 34, 64, 90]
   Pass 5: [12, 11, 22, 25, 34, 64, 90] -> [11, 12, 22, 25, 34, 64, 90]
```

```
   npm install -g ts-node
   ts-node bubbleSort.ts
```

https://www.youtube.com/watch?v=xli_FI7CuzA&list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl&index=3

2. Selection Sort

   - Selection Sort divides the input list into two parts: a sorted sublist of items which is built up from left to right, and a sublist of the remaining unsorted items. It repeatedly selects the smallest (or largest) element from the unsorted sublist and moves it to the sorted sublist.

   - Question: Sort the array [64, 25, 12, 22, 11] using Selection Sort.

Select 11: [11, 25, 12, 22, 64]
Select 12: [11, 12, 25, 22, 64]
Select 22: [11, 12, 22, 25, 64]
Select 25: [11, 12, 22, 25, 64]

https://www.youtube.com/watch?v=g-PGLbMth_g&list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl&index=5

3. Insertion Sort

   - Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.

   - Question: Sort the array [12, 11, 13, 5, 6] using Insertion Sort.

Insert 11: [11, 12, 13, 5, 6]
Insert 13: [11, 12, 13, 5, 6]
Insert 5: [5, 11, 12, 13, 6]
Insert 6: [5, 6, 11, 12, 13]

https://www.youtube.com/watch?v=JU767SDMDvA&list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl&index=4

4. Merge Sort

   - Merge Sort is a divide-and-conquer algorithm that splits the list into two halves, recursively sorts each half, and then merges the two sorted halves to produce the sorted list.

   - Question: Sort the array [38, 27, 43, 3, 9, 82, 10] using Merge Sort.

Split: [38, 27, 43, 3] and [9, 82, 10]
Split: [38, 27] and [43, 3]
Split: [9] and [82, 10]
Merge: [27, 38] and [3, 43]
Merge: [9, 10, 82]
Merge: [3, 27, 38, 43] and [9, 10, 82]
Final Merge: [3, 9, 10, 27, 38, 43, 82]

https://www.youtube.com/watch?v=4VqmGXwpLqc&list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl&index=1

5. Quick Sort

   - Quick Sort is a divide-and-conquer algorithm. It works by selecting a ‘pivot’ element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.

   - Question: Sort the array [10, 7, 8, 9, 1, 5] using Quick Sort.

Pivot 5: [1, 5, 7, 8, 9, 10]
Pivot 7: [1, 5, 7, 8, 9, 10]
Pivot 1: [1, 5, 7, 8, 9, 10]
Pivot 8: [1, 5, 7, 8, 9, 10]

https://www.youtube.com/watch?v=Hoixgm4-P4M&list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl&index=2

6. Heap Sort

   - Heap Sort involves building a heap from the array elements and then repeatedly extracting the maximum element from the heap and reconstructing the heap until it is empty.

   - Question: Sort the array [12, 11, 13, 5, 6, 7] using Heap Sort.

Build Heap: [13, 11, 12, 5, 6, 7]
Swap 13 with 7: [7, 11, 12, 5, 6, 13]
Heapify: [12, 11, 7, 5, 6, 13]
Swap 12 with 6: [6, 11, 7, 5, 12, 13]
Heapify: [11, 6, 7, 5, 12, 13]

https://www.youtube.com/watch?v=2DmK_H7IdTo&list=PL9xmBV_5YoZOZSbGAXAPIq1BeUf4j20pl&index=6

7. Counting Sort

   - Counting Sort counts the occurrences of each value in the array and uses these counts to determine the positions of each value in the sorted array.

   - Question: Sort the array [1, 4, 1, 2, 7, 5, 2] using Counting Sort.

Count array: [0, 2, 2, 0, 1, 1, 0, 1]
Cumulative count array: [0, 2, 4, 4, 5, 6, 6, 7]
Output array: [1, 1, 2, 2, 4, 5, 7]

https://www.youtube.com/watch?v=7zuGmKfUt7s

8. Radix Sort

   - Radix Sort processes the elements by their individual digits, starting with the least significant digit and moving to the most significant digit.

   - Question: Sort the array [170, 45, 75, 90, 802, 24, 2, 66] using Radix Sort.

Sort by units place: [802, 2, 24, 45, 66, 170, 75, 90]
Sort by tens place: [802, 2, 24, 45, 66, 170, 75, 90]
Sort by hundreds place: [2, 24, 45, 66, 75, 90, 170, 802]

https://www.youtube.com/watch?v=nu4gDuFabIM

9. Bucket Sort

   - Bucket Sort distributes the elements into a number of buckets, sorts each bucket individually, and then concatenates the sorted buckets.

   - Question: Sort the array [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434] using Bucket Sort.

Buckets: [[0.1234], [0.3434], [0.565, 0.656, 0.665], [0.897]]
Sort Buckets: [[0.1234], [0.3434], [0.565, 0.656, 0.665], [0.897]]
Concatenate: [0.1234, 0.3434, 0.565, 0.656, 0.665, 0.897]

https://www.youtube.com/watch?v=VuXbEb5ywrU
