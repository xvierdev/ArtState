questions = {
    question: "whats is your name?",
    aswer:"Wesley Xavier"
}

/* Recursive factorial calculator */
function factorial (x){
    if (x == 1){
        return 1;
    }
    else{
        return x * factorial(x - 1)
    }
}