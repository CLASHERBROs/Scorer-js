var btn1 = document.querySelector("#player1")
var btn2 = document.querySelector("#player2")
var btn3 = document.querySelector("#reset")
var p1score = document.querySelector("#p1")
var p2score = document.querySelector("#p2")
var scoreLbl = document.querySelector("#range")
var total=5;
var score = document.querySelector("#inputnumber")
var p1 = 0
var p2 = 0
score.addEventListener("change",function(){
scoreLbl.textContent = score.value;

total = Number(scoreLbl.textContent)
})
 p1 = Number(p1score.textContent)
 p2 = Number(p2score.textContent)



btn1.addEventListener("click",function(){

if(p1<total)
   { p1 = p1 + 1
    if(p1==total)
    {
        p1score.style.color = "green";
    }
  p1score.textContent = p1 } 

 
})
btn2.addEventListener("click",function(){
if(p2<total)
   { p2 = p2 + 1
    if(p2==total)
    {
    p2score.style.color = "green"
    }
  
  p2score.textContent = p2  }
    
})
btn3.addEventListener("click",function(){
total = 5;
scoreLbl.textContent = "5";
p1score.textContent = "0";
p2score.textContent = "0";
p2score.style.color = "#000000";
p1score.style.color = "#000000";
p1 = 0;
p2 = 0;
score.value = 5;


})