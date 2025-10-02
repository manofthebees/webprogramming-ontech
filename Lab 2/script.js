function validateSearchForm() {
    let x = document.getElementById('searchText').value;
    if (x == "" || x == " " ) {
        alert("Search query must be filled out");
        return false;
    }
    else{

        return true;
    }
}

function calculate(){
    let op1 = Number(document.forms["simpleCalculator"]["operand1"].value);
    let oper = document.forms["simpleCalculator"]["operator"].value;
    let op2 = Number(document.forms["simpleCalculator"]["operand2"].value);
    let result = 0;
    switch(oper){
        case '+':
            result = op1 + op2;
            break;
        case '-':
            result = op1 - op2;
            break;
        case '*':
            result = op1 * op2;
            break;
        case '/':
            result = op1 / op2;
            break;
        default:
            alert("Invalid operator");
            return;
    }
    document.forms["simpleCalculator"]["result"].value = result;
}