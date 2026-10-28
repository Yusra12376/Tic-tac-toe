let box = document.querySelectorAll(".box"); //8 box access function+for of loop /for each method
let pot= document.querySelector(".top");
let congratulation=document.querySelector("#win");
let newgamebtn= document.querySelector("#newgamebtn");
let rstbtn=document.querySelector(".rstbtn");
let reset=document.querySelector(".reset");
// let w= document.querySelector(".draw");
// let m= document.querySelector("#msg");

let playerturn=true; //X false O turn
let count=0;
//winning patterns multiple array of we apply all the winning pattern in single 2D array
let winpattern=[
   [0,1,2], //0  winpattern[0]=>[0][1][2] 
   [0,3,6], //1  winpattern[1]=>[0][1][2] 
   [0,4,8], //2  winpattern[2]=>[0][1][2]
   [1,4,7], //3  winpattern[3]=>[0][1][2]
   [2,5,8], //4  winpattern[4]=>[0][1][2]
   [2,4,6], //5  winpattern[5]=>[0][1][2]
   [3,4,5], //6  winpattern[6]=>[0][1][2]
   [6,7,8], //7; winpattern[7]=>[0][1][2]
]
box.forEach((btn)=>{
  btn.addEventListener("click",()=>{  // event listener aorrw function dfirect and we can also write arrow function seprately and only write the name of arrow function in the event listener
    // console.log("button is clicked");
    //   btn.innerText="O";
if(playerturn==true){ //(btn X,O click) (Winner funtion call) (Game draw function call)
    btn.innerText="X";
    btn.style.color="black";
    playerturn=false;
}
else{
    btn.innerText="O";
    btn.style.color="#677E61";
    playerturn=true;
} 
count++;  // count=count+1 count==9
 if ( count==9 && count!=winner()){
     gamedraw();
 }
 btn.disabled=true;
winner(); //winner logic => winner fucntion call ,disable();
});
});// here it is an also an arrow function but in there we dont pass any 
//argumenty in function calling and parametre in function defintion because here we are only applying an outputwork
const  winner =()=>{   // first we apply this then we apply fro each method
    for(let pattern of winpattern){
     let bp1=box [pattern[0]].innerText;  //0 0X , O  [0,1,2],winpattern[0]=>[0][1][2]
      let bp2=box [pattern[1]].innerText; //1 3X , O [0,3,6],winpattern[1]=>[0][1][2]
      let bp3=box [pattern[2]].innerText; //2 6X , O 
      if (bp1 !="" && bp2 !="" && bp3 !=""){ // if we placed here empty so our code will think empty is a winner 
       if (  bp1 === bp2 && bp2 === bp3){
            // console.log("winner",bp1) ; //XXX
       winpage(bp1);//argument    X,O         //OOO
        }                                
    } 
}
}
 const  winpage=(Win)=>{ //X,O parameter,
congratulation.innerText=`Congratulation,Winner is ${Win}`;
pot.classList.remove("hi");//new game btn
//   box.disabled=true;
 disable();

}
let disable=()=>{
    for(let btn of box){
        btn.disabled=true;
    }
}       
//from here we are make logics behind of new game button and reset button
let rt=()=>{
    for (let btn of box ){
          btn.innerText="";
        btn.disabled=false;
        playerturn=true;  
        pot.classList.add("hi"); //cogratulation and newgame class hide 
        
    }
}
let newge=()=>{
   for (let btn of box){
      btn.innerText="";
      btn.disabled=false;
      playerturn=true;
      pot.classList.add("hi"); 
        //  w.classList.add("hii");
      
    }
} //so here rt and newge  arrow function are call in Event listener
reset.addEventListener("click",rt);
newgamebtn.addEventListener("click",newge);

 const gamedraw=()=>{
      pot.classList.remove("hi");  // New Game btn
      congratulation.innerText="Game is Draw";//congratulation winnner is X or O  

 }  
 //console.log (pot.classList);
