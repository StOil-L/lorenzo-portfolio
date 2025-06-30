export function manualReverse(array: Array<unknown>): Array<unknown> {
  const reversed: Array<unknown> = [];
  for(let index: number = array.length-1; index >= 0; --index) {
    reversed.push(array[index]);
  }
  return reversed;
}

const localDateOptions: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "long",
  year: "numeric"
};

export function displayDate(date: Date | string): string {
  return typeof date === 'string'? date : (date as Date).toLocaleDateString(undefined, localDateOptions);
}