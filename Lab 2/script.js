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

    if(isNaN(op1) || isNaN(op2)){
        alert("Please enter valid numbers for operands");

    } else if(op1 == "" || op2 == ""){
        alert("Please enter a Value for the operands");
        
    } else {
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
                if(op2 == 0){
                    alert("Division by zero is not allowed");
                    return;
                }
                result = op1 / op2;
                break;
            default:
                alert("Invalid operator");
                return;
        }
        document.forms["simpleCalculator"]["result"].value = result;
    }
}

function dis(val, formName) {
    document.forms[formName]["result"].value += val;    
}

function clr(formName) {
    document.forms[formName]["result"].value = "";    
}

function solve(formName) {
    let x = document.forms[formName]["result"].value;
    let y = math.evaluate(x);
    document.forms[formName]["result"].value = y ;
}

function delChar(formName) {
    const form = document.forms[formName];
    const resultBox = form.result;
    resultBox.value = resultBox.value.slice(0, -1);
}