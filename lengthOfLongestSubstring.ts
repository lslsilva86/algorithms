function lengthOfLongestSubstring(s: string): number {
  let map: number[] = new Array(128).fill(0);
  let counter: number = 0,
    begin: number = 0,
    end: number = 0,
    d: number = 0;

  while (end < s.length) {
    if (map[s.charCodeAt(end++)]++ > 0) counter++;
    while (counter > 0) if (map[s.charCodeAt(begin++)]-- > 1) counter--;
    d = Math.max(d, end - begin); // while valid, update d
  }
  return d;
}
