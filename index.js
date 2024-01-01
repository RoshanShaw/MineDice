function refresh()
{
    var rand1=Math.floor(Math.random()*6)+1;
    var rand2=Math.floor(Math.random()*6)+1;
    console.log("random variable 1="+rand1+", random variable 2="+rand2);
    var img_path_1="./images/dice"+rand1+".png";
    var img_path_2="./images/dice"+rand2+".png";
    document.querySelector(".dice1").setAttribute("src",img_path_1);
    document.querySelector(".dice2").setAttribute("src",img_path_2);
    if(rand1>=rand2)
    {
        document.querySelector(".caption").innerHTML="🚩 Player 1 Wins";
    }
    else{
        document.querySelector(".caption").innerHTML="player 2 wins 🚩";
    }

    
}