function bucketSort(arr: number[]): number[] {
  let n = arr.length;
  if (n <= 0) return arr;

  let buckets: number[][] = new Array();
  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  for (let i = 0; i < n; i++) {
    let idx = Math.floor(n * arr[i]);
    buckets[idx].push(arr[i]);
  }

  for (let i = 0; i < n; i++) {
    buckets[i].sort((a, b) => a - b);
  }

  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }

  return arr;
}
