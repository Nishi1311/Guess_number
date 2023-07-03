let score=20;
let highScore=0
document.querySelector('para-div--main').textContent=score;
document.querySelector('para-div---main').textContent=highScore;


let randomnumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.btn').addEventListener('click', function () {
    let guess=Number(document.querySelector('.input-div').value)
    if(!guess){
        document.querySelector('.para').textContent='No number found';
    }
    else if(guess>randomnumber){
        if(score>0){
            document.querySelector('.para').textContent='too high';
            score=score-1;
            document.querySelector('.para-div--main').textContent=score;
        }
        else{
            document.querySelector('.para').textContent='excedded max limit';
        }
        
    }
    else if(guess<randomnumber){
        if(score>0){
            document.querySelector('.para').textContent='too low';
        score=score-1;
        document.querySelector('.para-div--main').textContent=score;
        }
        else{
            document.querySelector('.para').textContent='excedded max limit';
        }
       
    }
    else if(guess===randomnumber){
        if(score>0){
        document.querySelector('.para').textContent='congo! you finally guessed the number ';
        document.querySelector('.div1').textContent=guess;
        document.querySelector('body').style.backgroundColor='green';
        if(score>highScore){
            highScore=score;
            document.querySelector('para-div---main').textContent=highScore;
        }
        
    }
        else{
            document.querySelector('.para').textContent='excedded max limit';
        }
    }

       
      
       
       

    
    
})
document.querySelector('.btn1').addEventListener('click', function () {
    randomnumber=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('para-div--main').textContent=score;
 
    document.querySelector('.input-div').value='';
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('.div1').textContent='?';
    document.querySelector('.para').textContent='Start guessing...';

})
