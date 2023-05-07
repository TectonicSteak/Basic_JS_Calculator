const display = document.getElementById("display");
const equals = document.getElementById("equals");

let expression = "";

const getValue = () => {
    expression += display.value;
}


for(let i=0; i<10; i++){
    const button = document.getElementById(`${i}`);
    button.addEventListener("click",() => {
        display.value += i;
    });
}

const doubleZeroButton = document.getElementById("00");
    doubleZeroButton.addEventListener("click",() => {
        display.value += "00";
});

const deciButton = document.getElementById(".");
    deciButton.addEventListener("click",() => {
        display.value += '.';
});


document.getElementById("+").addEventListener("click", () => {
    getValue();
    expression += "+";
    display.value = "";
});
  
document.getElementById("-").addEventListener("click", () => {
    if(display.value == ""){
        display.value += "-";
    }else{
        getValue();
        expression += "-";
        display.value = "";
    }
});
  
document.getElementById("*").addEventListener("click", () => {
    getValue();
    expression += "*";
    display.value = "";
});
  
document.getElementById("/").addEventListener("click", () => {
    getValue();
    expression += "/";
    display.value = "";
});

document.getElementById("AC").addEventListener("click", () => {
    display.value = "";
    expression = "";
});
  
document.getElementById("DE").addEventListener("click", () => {
    display.value = display.value.toString().slice(0,-1);
    expression = expression.slice(0,-1);
});

equals.addEventListener("click", () => {
    getValue();
    display.value = parseFloat(eval(expression));
    expression = "";
});
  
