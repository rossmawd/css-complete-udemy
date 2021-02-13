export function sumDigits(number: number): number {
  return [...(Math.abs(number) + '')].map(Number).reduce((sum, cur) => sum + cur, 0);
}

[1, 2, 3, 4, 5, 6].reduce((sum, cur, i, arr) => { return arr[i] % 2 !== 0 ? sum + cur : sum }, 0)
