window.addEventListener("load",init)

//DOM Element

let wordinput= document.querySelector("#word-input")
let currentword = document.querySelector("#current-word")
let scoredispley = document.querySelector("#score")
let timedisplay= document.querySelector("#time")
let masssege = document.querySelector("#message")

let score = 0;
let time = 0;
let currentLevel= 5;
time = currentLevel;



//Arry

let words = ['hat', 
'river', 
'lucky', 
'statue', 
'stubborn', 
'cocktail', 
'runaway', 
'joke', 
'developer', 
'establishment', 
'hero', 
'javascript', 
'nutrition', 
'revolver', 
'echo', 
'siblings', 
'investigate', 
'horrendous', 
'symptom', 
'laughter', 
'magic', 
'master', 
'space', 
'defintion' 
]

//initilize game

function init(){
showwords(words)
wordinput.addEventListener("input",startmatch)
setInterval(countdown,1000)
setInterval(checkstetus,50)
}

function showwords(words){
    const randomIndex = Math.floor(Math.random()*words.length)

    currentword.innerHTML=words[randomIndex]
}

function matchwords(){
    if(wordinput.value == currentword.innerHTML){
        masssege.innerHTML= "correct !!!"
        return true;
    }
    else{
        masssege.innerHTML=''
        return false;
    }
}


function startmatch(){
    if(matchwords()){
        showwords(words)
        wordinput .value = ''
        score++;
        time = currentLevel;
    }
    scoredispley.innerHTML = score
}

function countdown(){
    if(time>0){
        time--;
    }
    timedisplay.innerHTML=time;
    scoredispley.innerHTML=score;
}
function checkstetus(){
    if(time==0){
        masssege.innerHTML= "Game over"
    }
}