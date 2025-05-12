let boxes=document.querySelectorAll(".square");
let reset=document.querySelector(".reset");
let winnerMsg=document.querySelector(".winnerMsg");
let msgContainer=document.querySelector(".msgContainer");
let newGameButton=document.querySelector(".new-game-button");
let turnO=true;
const winning_patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count=0;
boxes.forEach((box)=>{
    box.onclick=()=>{
        console.log("box was clicked");
        if(turnO===true){            //or if(turnO)
            box.innerText="O";
            box.style.color="brown";
            turnO=false;
            count++;
        }
        else{
            box.innerText="X";
            box.style.color="yellow";
            turnO=true;
            count++;
        }
        box.disabled=true;         //only once we can click
        checkWinner();
    };
})
const disable_button=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}
const enable_button=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    });
}
const winner_announce=(winner)=>{
    winnerMsg.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable_button();                       // when we get a winner we can play that same game
}
const draw_announce=()=>{
    winnerMsg.innerText=`It's a draw`;
    msgContainer.classList.remove("hide");
    disable_button();     
}
const checkWinner=()=>{
    winning_patterns.forEach((pattern)=>{
        let pos0val=boxes[pattern[0]].innerText;
        let pos1val=boxes[pattern[1]].innerText;
        let pos2val=boxes[pattern[2]].innerText;
        if(pos0val!="" && pos1val!="" && pos2val!=""){
            if(pos0val===pos1val && pos1val===pos2val){
                console.log("winner is "+pos0val);
                winner_announce(pos0val);
            }
            else if(count===9){
                console.log("It's a draw");
                draw_announce();
            }
        }
    });
}
const newGame=()=>{
    turnO=true;
    count=0;
    enable_button();
    msgContainer.classList.add("hide");
}
newGameButton.addEventListener("click",newGame);
reset.addEventListener("click",newGame);