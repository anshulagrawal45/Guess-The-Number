let btn = document.getElementById("btn");
let suggest = document.getElementById("suggest");
let result = document.getElementById("result");
let input = document.getElementById("input");
let score = document.getElementById("score");
let num;
let i = 0;
let correctnum = Math.floor(100 * Math.random());
function buttonclicked(){
    num = input.value;
    i++;
    numcheck(num, correctnum, i);
}

function numcheck(num,correctnum,i){
    console.log(num, correctnum, i);
    if(num==correctnum){
        result.style.display="block";
        result.style.backgroundColor = "rgb(77, 233, 77)";
        result.innerText = "Your Guess is Correct";
        score.style.display = "block";
        suggest.style.display = "none";
        score.innerText = `Score: ${105-5*i}`;
    }
    else{
        result.style.display="block";
        result.style.backgroundColor="red";
        result.innerText = "Your Guess is InCorrect";
    }
    if(num>correctnum){
        suggest.innerText = `Correct Number is Less than ${num}`;
    }
    if (num < correctnum) {
        suggest.innerText = `Correct Number is More than ${num}`;
    }
}
