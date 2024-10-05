let userSeq=[];
let gameSeq=[];
let color=["red","marun","aqua","blue"];
let h3=document.querySelector("h3");
let started="false";
let level=0;
let highest = document.querySelector("#highest");
let high=0;

document.addEventListener("keypress",function(){
    if(started=="false"){
        console.log("game is started");
        started="true";
        levelUp();
    }
})

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randclr=color[randInd];
    let randBtn=document.querySelector(`.${randclr}`)
    gameSeq.push(randclr);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function btnFlash(btn){
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },500)
}

function userFlash(btn){
    btn.classList.add("green");
    setTimeout(function(){
        btn.classList.remove("green");
    },500)
}

function btnPress(){
    let btn=this;
    let userColor=btn.getAttribute("id");
    
    userSeq.push(userColor);
    userFlash(btn);
    chekAns(userSeq.length-1);
}

let btnAll=document.querySelectorAll(".btn");
for(btn of btnAll){
    btn.addEventListener("click",btnPress);
}

function chekAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        h3.innerHTML=`Game is over! Your score was<b> ${level-1}</b> <br>press any key for strt.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        
        if(high<level){
            high=level;
            highest.innerText=`Highest Score:${level-1}`;
           
        }
        restart();
    }
}

function restart(){
    started="false";
    level=0;
    userSeq=[];
    gameSeq=[];
}