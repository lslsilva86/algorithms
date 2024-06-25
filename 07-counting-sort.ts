function countingSort(arr: number[]): number[] {
  let max = Math.max(...arr);
  let count = new Array(max + 1).fill(0);
  let output = new Array(arr.length).fill(0);

  arr.forEach((num) => count[num]++);

  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return output;
}

const array7 = [1, 4, 1, 2, 7, 5, 2];
console.log(countingSort(array7)); // [1, 1, 2, 2, 4, 5, 7]
