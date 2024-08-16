const display = document.getElementById("display");
const buttons = document.getElementsByClassName("btn");
const operatorBtn = document.getElementsByClassName("operatorBtn");
const allBtns = Array.from(buttons).concat(Array.from(operatorBtn));

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function appendToDisplay(input){
    display.value += input;
}

function calculate(){
    try{
        let result = eval(display.value);
        if(result == Infinity){
            throw error();
        }
        display.value = result;
    }
    catch(error){
        
        display.value = "Error!";
        toggleButtons(true);
        delay(1000).then(() => {
            display.value = "";
            toggleButtons(false);
        });
    }
}

function clearDisplay(){
    display.value = "";
}

function toggleButtons(disabled) {
    for (let button of allBtns) {
        button.disabled = disabled;
    }
}