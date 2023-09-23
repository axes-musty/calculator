import CalcResult from "../components/CalcResult";

const test = () => {
    const tests = [
        {expression: '2+2*2',result: 6},
        {expression: '2/2',result: 1},
        {expression: '528*8',result: 4224},
        {expression: '2+2',result: 4},
    ];
    [...tests].forEach(testcase => {
        let expression = testcase['expression']
        let expected_result = testcase['result']
        let result = CalcResult(expression)
        let test_result = result===expected_result

        if (!test_result) {console.log(expression+ ' ' + expected_result + '  ' + result)}

});
}
export default test;