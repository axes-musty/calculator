const CalcResult = (localContent) => {
  const specialChars = ['+', '-', '*', '/'];
  let result = 0;
  let nextOperation = '';
  const specialCharsMap = [];

  for (let counter = 0; counter < String(localContent).length; counter++) {
    const char = [...localContent][counter];
    if (['*', '/'].includes(char)) {
      specialCharsMap.push([char, counter]);
    }
  }
  [...localContent].forEach((char) => {
    if (specialChars.includes(char)) {
      nextOperation = char;
    } else if (nextOperation === '') {
      if (result === 0) {
        result = parseInt(char);
      } else {
        result = parseInt(String(result) + char);
      }
    } else {
      const nb = parseInt(char);
      switch (nextOperation) {
        case '+':
          result += nb;
          break;
        case '-':
          result -= nb;
          break;
        case '*':
          result *= nb;
          break;
        case '/':
          result /= nb;
          break;
        default:
          alert('Unhandled operator ' + char);
      }
      nextOperation = '';
    }
  });
  return Math.floor(result, 2);
};

export default CalcResult;
