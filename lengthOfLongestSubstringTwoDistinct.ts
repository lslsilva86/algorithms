let lengthOfLongestSubstringTwoDistinct = (input: string): number => {
  const map: number[] = new Array(128).fill(0);
  let counter = 0,
    begin = 0,
    end = 0,
    maxLength = 0;

  while (end < input.length) {
    if (map[input.charCodeAt(end++)]++ === 0) counter++;
    while (counter > 2) if (map[input.charCodeAt(begin++)]-- === 1) counter--;
    maxLength = Math.max(maxLength, end - begin);
  }

  return maxLength;
};

// Example usage
const exampleString = 'eceba';
const lengthOfLongestSubstringResult = lengthOfLongestSubstringTwoDistinct(exampleString);
console.log(lengthOfLongestSubstringResult); // Output: 3
