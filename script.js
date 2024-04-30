

let humanscore=0
let computerscore=0

function playgame(){
   humanscore
   computerscore
    while(humanscore<5 && computerscore<5){
    playround()}
    }
    

    function playround(){
function getcomputerchoice(){
        return Math.floor(Math.random()* 3);}
function gethumanchoice(){
let prom=prompt("rock,paper or scissor?").toLowerCase()
if (prom=="rock"||prom=="paper"||prom=="scissor"){
return prom}
else{alert("this is not an Option.") 
return gethumanchoice()}


}


let umano=gethumanchoice()
let computer=getcomputerchoice()
    if (umano=="rock"){
        if (computer==0){  
            alert("draw!")
        }}
    if (umano=="rock"){
         if (computer==1){  
            alert("you lost!")
            computerscore++
        }}

    if (umano=="rock"){
        if (computer==2){  
            alert("you won!")
            humanscore++
        }}

    if (umano=="paper"){
        if (computer==0){  
           alert("you won!")
           humanscore++
        }}

    if (umano=="paper"){
         if (computer==1){  
            alert("draw!")
        }}

    if (umano=="paper"){
        if (computer==2){  
            alert("you lost!")
        computerscore++
        }}

    if (umano=="scissor"){
        if (computer==0){  
            alert("you lost!")
            computerscore++
        }}

    if (umano=="scissor"){
        if (computer==1){  
            alert("you won!")
            humanscore++
        }}
    if (umano=="scissor"){
       if (computer==2){  
            alert("draw!")
            }}
}

    playgame()




