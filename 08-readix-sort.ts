function radixSort(arr: number[]): number[] {
  let max = Math.max(...arr);
  let exp = 1;
  while (Math.floor(max / exp) > 0) {
    countingSortForRadix(arr, exp);
    exp *= 10;
  }
  return arr;
}

function countingSortForRadix(arr: number[], exp: number): void {
  let output = new Array(arr.length).fill(0);
  let count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

const array = [170, 45, 75, 90, 802, 24, 2, 66];
console.log(radixSort(array)); // [2, 24, 45, 66, 75, 90, 170, 802]
