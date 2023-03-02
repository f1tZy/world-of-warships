export const getLevel = (level: number) => {
  return [
    { value: 10, char: 'X' },
    { value: 9, char: 'IX' },
    { value: 5, char: 'V' },
    { value: 4, char: 'IV' },
    { value: 1, char: 'I' },
  ].reduce((result, currentValue) => {
    while (level >= currentValue.value) {
      result += currentValue.char;
      level -= currentValue.value;
    }

    return result;
  }, '');
};
