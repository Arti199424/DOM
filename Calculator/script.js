//Query Selector All
const numberButtons=document.querySelectorAll("[data-number]");
const operationButtons=document.querySelectorAll("[data-operation]");
//Query Selector
const equalsButton=document.querySelector("[data-equals]");
const deleteButton=document.querySelector("[data-delete]");
const allClearButton=document.querySelector("[data-all-clear]");
const previousOperandAndTextElement=document.querySelector("[data-previous-operand]");
const currentOperandAndTextElement=document.querySelector("[data-current-operand]");

let currentOperand="",
    previousOperand="",
    operation;

    function clear(){
        currentOperand="";
        previousOperand="";
        operation=undefined;
    }
    function deleteChar(){
        currentOperand = currentOperand.toString().slice(0,-1);
    }
    function appendNumber(number){
        if(number==="." && currentOperand.includes(".")) return;
    }