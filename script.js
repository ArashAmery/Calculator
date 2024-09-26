const display = document.getElementById("display");
noTyping = false;

function appendToDisplay(input){
    if( noTyping == false){
        display.value += input;
    }
}
function clearDisplay(){
    display.value = ""; 
    noTyping = false; 

}
function caculate(){
    if(noTyping ==false){
            try {
        display.value = eval(display.value)
    } catch  {
        noTyping = true;
        display.value = "Error"
    }
    }

}