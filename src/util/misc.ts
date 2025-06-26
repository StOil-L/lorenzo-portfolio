export function manualReverse(array: Array<unknown>): Array<unknown> {
  const reversed: Array<unknown> = [];
  for(let index: number = array.length-1; index >= 0; --index) {
    reversed.push(array[index]);
  }
  return reversed;
}