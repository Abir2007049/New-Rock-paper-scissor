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

function score(id){
    if(id==="both"){
        console.log("both")
        ysc++;
        osc++;
        document.getElementById("your_score").style.color = "green";
        document.getElementById("opponents_score").style.color = "green";
        
        document.getElementById("opp_choice").style.background = "green";
        document.getElementById("your_choice").style.background = "green";
    
    }   

    else{
        if(id==="your_score"){
            ysc++;
            document.getElementById("your_score").style.color = "green";
            document.getElementById("opponents_score").style.color = "white";
        
            document.getElementById("your_choice").style.background = "green";
            document.getElementById("opp_choice").style.background = "grey";
        }
        else if("opponents_score"){
            osc++;
            document.getElementById("opponents_score").style.color = "green";
            document.getElementById("your_score").style.color = "white";

            document.getElementById("opp_choice").style.background = "green";
            document.getElementById("your_choice").style.background = "grey";
        }
    }
}

function selectChoice()
{
    you=this.id;
    document.getElementById("your_choice").src=you + ".png";
    opp=choices[Math.floor(Math.random() * 3)];
    document.getElementById("opp_choice").src=opp + ".png";

    if (you===opp) {
        score("both");
    } 
    else {
        if ((you === "r" && opp === "s") || (you === "p" && opp === "r") || (you === "s" && opp === "p")) {
            score("your_score");
        } else {
            score("opponents_score");
        }
    }

    document.getElementById("your_score").innerHTML= "You: " + ysc;
    document.getElementById("opponents_score").innerHTML= "Comp: " + osc;
}