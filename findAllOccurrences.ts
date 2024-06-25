function findAllOccurrences(text: string, pattern: string): number[] {
  const result: number[] = [];
  let index = text.indexOf(pattern);

  while (index !== -1) {
    result.push(index);
    index = text.indexOf(pattern, index + 1);
  }

  return result;
}

// Example usage
const text = 'abracadabra';
const pattern = 'abra';
const occurrences = findAllOccurrences(text, pattern);
console.log(occurrences); // Output: [0, 7]
