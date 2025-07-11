
let startBtn = document.getElementById('startBtn');
   let name=document.getElementById("name");
    let gameOn = document.getElementById('gameOn');
     let correct = document.getElementById('correct');
   let gameLost = document.getElementById('gameLost');
    let colors = ['#f5f','#3a5','tomato','#a3f','hotpink','#f22'];
    let side = [8,22,36,50,64,78];
    let nums = [3,2,1,5,4,6,8,7,9];
    let box = document.querySelector('.container');
    let score = document.getElementById('score');
    let sc=0;
    let rnum;
    let backID;
    let dropTextID;
    let isGameOver= false;
    let backnum= document.getElementById('num');
    let muterBtn = document.getElementById('muter');
    let isMuted = false;
    
 function startGame(){
 box.removeChild(startBtn);
 box.removeChild(name);
 gameLost.play();
 gameLost.muted=true;
    gameOn.play();
    backID = setInterval(()=>{
    backNum();
    },4500)
    dropTextID = setInterval(()=>{
    let div=document.createElement('div');
    let rc = colors[Math.floor(Math.random()* colors.length)];
    let rx = side[Math.floor(Math.random()*side.length)]
    let rn = nums[Math.floor(Math.random()*nums.length)];
    let t=-15;
        box.appendChild(div);
        div.style.background=rc;
        div.style.left=`${rx}%`;
        div.innerHTML =rn;
        div.style.top=`${t}%`;
        
        let downID =setInterval(()=>{
        t+=3;
            div.style.top=`${t}%`;
            
            if(t > 90){
                clearInterval(downID);
                isGameOver=true;
            // box.removeChild(div);
               gameOver();
              overSound();
            }
        },200);
div.setAttribute('onclick',`choose(this,${downID},${rx},${rn})`);    
    },1000);
    backNum();
    }
    
    function choose(box,mov,si,num){
        let cont = box.parentElement;
      clearInterval(mov);
      box.style.left=si+'vw';
      box.classList.add('spin');
     if(!isGameOver){
      if(num === Number(backnum.innerHTML)){
          gameOver();
      }else{
     sc+= num;
     correct.currentTime=0;
     correct.play();
     }
     }
     score.innerHTML=sc;
     setTimeout(()=>{
    //box.style.transition="3s linear";
       if(si > 40) {
            box.style.left="110%";
        }else{
            box.style.left="-35%";
        }
     },70);
    if(!isGameOver){
    setTimeout(()=>{
        cont.removeChild(box);
    },600);
    }
    }
    
    function gameOver(){
    gameOn.currentTime =0;
    gameOn.pause();
    overSound();
    isGameOver=true;
    clearInterval(backID);
    clearInterval(dropTextID);
    let boxes = Array.from(box.children);
    
   for(let i=0;i< boxes.length;i++){
          boxes[i].innerHTML=0;
         boxes[i].click();
      //boxes[i].style.display="none";
   }
   
  backnum.style.opacity="0";
    let txt="GAMEOVER";
    setTimeout(()=>{
        let div= document.createElement('div');
        box.appendChild(div);
        div.innerHTML=txt.charAt(0);
      setTimeout(()=>{
             div.style.top="17%";
        },400)
        div.style.top="-17%";
        div.style.left="25%";
        div.style.background="hotpink"
        },200)
     setTimeout(()=>{
        let div= document.createElement('div');
        box.appendChild(div);
        div.innerHTML=txt.charAt(1);
        setTimeout(()=>{
             div.style.top="17%";
        },400)
        div.style.top="-17%";
        div.style.left="38%";
        div.style.background="hotpink"
        },400);
        setTimeout(()=>{
        let div= document.createElement('div');
        box.appendChild(div);
        div.innerHTML=txt.charAt(2);
       setTimeout(()=>{
             div.style.top="17%";
        },400)
        div.style.top="-17%";
        div.style.left="51%";
        div.style.background="hotpink"
        },600);
        setTimeout(()=>{
        let div= document.createElement('div');
        box.appendChild(div);
        div.innerHTML=txt.charAt(3);
        setTimeout(()=>{
             div.style.top="17%";
        },400)
        div.style.top="-17%";
        div.style.left="64%";
        div.style.background="hotpink"
        },800)
        setTimeout(()=>{
        let div= document.createElement('div');
        box.appendChild(div);
        div.innerHTML=txt.charAt(4);
        setTimeout(()=>{
             div.style.left="25%";
        },400)
        div.style.top="35%";
        div.style.left="110vw";
        div.style.background="green";
        },1000)
        setTimeout(()=>{
        let div= document.createElement('div');
        box.appendChild(div);
        div.innerHTML=txt.charAt(5);
        setTimeout(()=>{
             div.style.left="38%";
        },400)
        div.style.top="35%";
        div.style.left="110vw";
        div.style.background="green";
        },1200)
        setTimeout(()=>{
        let div= document.createElement('div');
        box.appendChild(div);
        div.innerHTML=txt.charAt(6);
        setTimeout(()=>{
             div.style.left="51%";
        },400)
        div.style.top="35%";
        div.style.left="110vw";
        div.style.background="green";
        },1400)
        setTimeout(()=>{
        let div= document.createElement('div');
        box.appendChild(div);
        div.innerHTML=txt.charAt(7);
        setTimeout(()=>{
             div.style.left="64%";
        },400)
        div.style.top="35%";
        div.style.left="110vw";
        div.style.background="green";
        },1600);
         setTimeout(()=>{
        let btn= document.createElement('button');
        box.appendChild(btn);
        btn.innerHTML='Play again';
        setTimeout(()=>{
             btn.style.top="75%";
        },400);
        btn.style.width = '40%';
        btn.style.top="117%";
        btn.style.left="30%";        
        btn.style.zIndex="3";
        btn.setAttribute('onclick','replay()');
        },1800);
        setTimeout(()=>{
        boxes = Array.from(box.children);
        for(let i=0;i< (boxes.length-9);i++){
            box.removeChild(boxes[i])
        }
        },3200);
    }
    function backNum(){
          newNum = nums[Math.floor(Math.random()*nums.length)];
    if( newNum === Number(backnum.innerHTML)){
        backnum.innerHTML = '0';
    }else{
        rnum = newNum
     backnum.innerHTML=rnum;

    }
    }
    function replay(){
        window.location="index.html";
    }
    function overSound(){
        if(!isMuted){
         gameLost.muted=false;
               gameLost.currentTime =0;
               setInterval(()=>{
                   gameLost.pause()
               },4200);
    }
}
   muterBtn.onclick =()=>{
    muterBtn.classList.toggle('muted');
    if(!isMuted){
        gameOn.muted = true;
        gameLost.muted = true;
        correct.muted =true;
        isMuted = true;
    }else{
        gameOn.muted = false;
        correct.muted  = false;
        isMuted = false;
    }
   }
