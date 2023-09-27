import CalcResult from '../components/CalcResult';

const test = () => {
  const tests = [
    { expression: '2+2*2', result: 6 },
    { expression: '2/2', result: 1 },
    { expression: '528*8', result: 4224 },
    { expression: '2+2', result: 4 },
  ];
  [...tests].forEach((testcase) => {
    const expression = testcase.expression;
    const expectedResult = testcase.result;
    const result = CalcResult(expression);
    const testResult = result === expectedResult;

    if (!testResult) {
      console.log(expression + ' ' + expectedResult + '  ' + result);
    }
  });
};
export default test;
