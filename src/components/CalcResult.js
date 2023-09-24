let CalcResult = (localContent) => {
    const specialChars = ['+', '-', '*', '/'];
    let result = 0;
    let next_operation = '';
    let specialCharsMap = []

    for (let counter = 0; counter < String(localContent).length; counter++) {
        let char = [...localContent][counter]
        if (['*', '/'].includes(char)){
            specialCharsMap.push([char, counter])
            /* zamiast tego zrób liste znak + index i zacznij liczenie od srodkowego */
        }
    }
    /* dla kazdego entry z powyzszej listy znajdz lewa strone i prawa strone i policz wynik */

    [...localContent].forEach(char => {
        if (specialChars.includes(char)){
            next_operation = char
        }
        else if (next_operation === ''){
            if (result === 0){
                result = parseInt(char)

            } else {
                result = parseInt(String(result) + char)
            }
        } else {
            let nb = parseInt(char)
            switch (next_operation) {
                case '+': 
                    result += nb
                    break
                case '-': 
                    result -= nb
                    break
                case '*': 
                    result *= nb
                    break
                case '/': 
                    result /= nb
                    break
                default:
                    alert("Nie rozpoznany operator " + char)
            }
            next_operation = ''
        }
    });

return(result);   
}

export default CalcResult;