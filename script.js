let bottoni = document.querySelector("div");
let vuoto=document.querySelector("#vuoto")
let uma=document.querySelector("#uma")
let comp=document.querySelector("#comp")
let umano=0
let computerscore=0


function playround(event){
    
function getcomputerchoice(){
    return Math.floor(Math.random()* 3);}
    let computer=getcomputerchoice()


   
    
    

    let fusco= event.target;
    
    if (fusco.id=="rock"){
        if (computer==0){
        vuoto.textContent="draw!"
        uma.textContent=umano
        comp.textContent=computerscore

    }
        
    else if(computer==1){
        computerscore++
        vuoto.textContent="you lost!"
        uma.textContent=umano
        comp.textContent=computerscore  
    }
    else {
        umano++
        vuoto.textContent="you won!"
        uma.textContent=umano
        comp.textContent=computerscore
    }}


    if (fusco.id=="paper"){
        if (computer==0){
        umano++
        vuoto.textContent="you won!"
        uma.textContent=umano
        comp.textContent=computerscore
    }
        
    else if(computer==1){
        vuoto.textContent="draw!"
        uma.textContent=umano
        comp.textContent=computerscore
    }
    else {
         computerscore++
         vuoto.textContent="you lost!"
         uma.textContent=umano
         comp.textContent=computerscore
    }}  
    
   
    if (fusco.id=="scissor"){
        if (computer==0){
        computerscore++
        vuoto.textContent="you lost!"
        uma.textContent=umano
        comp.textContent=computerscore
    }
        
    else if(computer==1){
        umano++
        vuoto.textContent="you won"
        uma.textContent=umano
        comp.textContent=computerscore
    }
        
    else {
        vuoto.textContent="draw!"
        uma.textContent=umano
        comp.textContent=computerscore}
        
    
    }if(umano>=5){ 
        umano=0
        computerscore=0
        uma.textContent=umano
        comp.textContent=computerscore
        alert("you won the match!")}

    else if(
        computerscore>=5){ 
        umano=0
        computerscore=0
        uma.textContent=umano
        comp.textContent=computerscore
        alert("computer won the match!")
    }}
    
     
    bottoni.addEventListener("click",playround)
    




    

   




