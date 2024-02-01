var you;
var ysc=0;
var osc=0;
var opp;
var choices=["r","p","s"];
window.onload=function()
{
    for(let a=0;a<3;a++)
    {
        let choice=document.createElement("img");
        choice.id=choices[a];
        choice.src=choices[a]+ ".png";
        choice.addEventListener("click",selectChoice);
        document.getElementById("choices").append(choice); 

    }
}
function selectChoice()
{
    you=this.id;
    document.getElementById("your_choice").src=you + ".png";
    opp=choices[Math.floor(Math.random() * 3)];
    document.getElementById("opp_choice").src=opp + ".png";
    if(you==opp)
    {
        ysc+=1;
        osc+=1

    }
    else
    {
        if(you=="r" && opp=="s")
        {
            ysc++;
        }
        else if(you=="r" && opp=="p")
        {
            osc++;
        }
        else if(you=="p" && opp=="r")
        {
            ysc++;
        }
        else if(you=="p" && opp=="s")
        {
            osc++;
        }
        else if(you=="s" && opp=="p")
        {
            ysc++;
        }
        else if(you=="s" && opp=="r")
        {
            osc++;
        }
    }
    document.getElementById("your_score").innerHTML=ysc;
    document.getElementById("opponent's_score").innerHTML=osc;
}