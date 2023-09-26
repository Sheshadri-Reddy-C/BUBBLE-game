// this is to make bubbles and number inside it


function makeBubble(){
    var clutter="";
    
    for(var i=1;i<=150;i++){
        var rn=Math.floor(Math.random()*10);
             clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
    }
    makeBubble();
    
    ///this is used side timer coundown
    
    var timer=60;
    function runTimer(){
        var timerint=setInterval(function(){
            if(timer>0){
            timer--;
             document.querySelector("#timerval").textContent=timer;
            }
            else{
                clearInterval(timerint);
                document.querySelector("#pbtm").innerHTML=`<div><h1>GAME OVER<br>
                </h1></div>`;
            }
    
            
        },1000);
    }
    runTimer();
    
    //  to get a new hit value
    var hitrn=0;
    function getNewHit(){
         hitrn=Math.floor(Math.random()*10);
        document.querySelector("#hitval").textContent=hitrn;
    }
    getNewHit();
    
    // to increase a value of score
    var score=0;
    function increaseScore(){
        score += 10;
        document.querySelector("#scoreval").textContent=score;
    }
    //to get detailes of bubble
    document.querySelector("#pbtm").addEventListener("click",function(detailes){
        var clickedNum=Number(detailes.target.textContent);
        if(clickedNum === hitrn)
    
        {   
            increaseScore();
            makeBubble();
            getNewHit();
        }
        else{
        //document.querySelector("#pbtm").innerHTML=`<h1><i>GAME OVER</i></h1>`;
            }
        }
    );
    