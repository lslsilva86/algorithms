function minWindow(s: string, t: string): string {
  const map: number[] = new Array(128).fill(0);
  for (const c of t) {
    map[c.charCodeAt(0)]++;
  }

  let counter = t.length,
    begin = 0,
    end = 0,
    d = Number.MAX_SAFE_INTEGER,
    head = 0;

  while (end < s.length) {
    if (map[s.charCodeAt(end++)]-- > 0) counter--; // Character in t

    while (counter === 0) {
      // Valid window
      if (end - begin < d) d = end - (head = begin);
      if (map[s.charCodeAt(begin++)]++ === 0) counter++; // Make it invalid
    }
  }

  return d === Number.MAX_SAFE_INTEGER ? '' : s.substring(head, head + d);
}

// Example usage
const minWindowString = 'ADOBECODEBANC';
const minWindowText = 'ABC';
const minWindowResult = minWindow(minWindowString, minWindowText);
console.log(minWindowResult); // Output: "BANC"
