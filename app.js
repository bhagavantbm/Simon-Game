let gameseq=[];
let userseq=[];
let highScore=0;



let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector("h2")





document.addEventListener("keypress",function(){
  if(started==false){
    console.log("Game is started")
    started=true;
    levelup();
  }
})
function gameflash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}


function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`



    //random btn choose
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx]
    let randbtn=document.querySelector(`.${randcolor}`)
    // console.log(randidx)
    // console.log(randcolor)
    // console.log(randbtn)
    gameseq.push(randcolor)
    console.log(gameseq)
    gameflash(randbtn);
}

function checkans(idx){
    // console.log("curr level :",level);
    // let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(() => {
                levelup();

            }, 1000);

           highscore();


        }


    }else{
        h2.innerHTML=`Game Over!  your score was <b> ${level} </b> <br> press any key to start`
        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
        highscore();



    }

}


function btnpress(){
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id")
    userseq.push(usercolor);
    checkans(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn")
for(btn of allbtns){
    btn.addEventListener("click",btnpress)
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
function highscore() {
    let h3 = document.querySelector("h3");
    // Update the displayed high score only if the current level is higher
    if (level > highScore) {
        highScore = level;  // Update the high score variable
        h3.innerText = `Highest score: ${highScore}`;  // Update the displayed high score
    }
}
