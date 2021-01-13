  // Togloomiin buh gazart ashiglagdah global huvisagchdiig end zarlana.
  // Togloomiig duussan esehiig shalgah tuluviin huvisagch
  var isNewGame;

  var player = 0;
  var score = 0;
  var endgame = 0;

  // Shoonii zurgiig uzuuleh elementiig DOM oos haij olood end hadgalna.
  var diceDom = document.querySelector(".dice");

  // Togloomiig ehluulne
  initGame();

  // Togloomiig shineer ehlehed beltgene.
  function initGame(){
    // Togloom ehellee gedeg tuluvt oruulna.
    isNewGame = true;

    // togloj bui toglogchiin ner
    player = 0;

    // Toglogchiin shoo hayj tsugluulj baigaa onoog hadgalah huvisagch 
    score = 0;

    // endgame функц
    endgame = 0;

    diceDom.style.display = "none";
}

/* Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1 - 6 gesen utgiig ene 
huvisagchid sanamsarguigeer uusgej ugnuu
*/
var diceNumber = Math.floor(Math.random() * 6) + 1;

// <div class="player-score" id="score-0">43</div>
window.document.querySelector("#score-0").textContent = diceNumber;

// Programm ehlehed beltgey
document.getElementById("score-0").textContent = "0";

// Shoog shideh event listener  
if(score >= 50){
    // Togloomiig duussan tuluvt oruulna
    isNewGame = false;

    // Ylagch gesen textiig nerniih n orond gargana
    document.getElementById("name-" + player).textContent = "WINNER!!!";
    document.querySelector(".player-" + player + "-panel").classList.add("winner");
    //document.querySelector(".player-" + player + "-panel").classList.remove("active");
}

document.querySelector(".btn-roll").addEventListener("click", 
function(){
        if(isNewGame === true) {
            //  1 - 6 hurtel sanamsargui neg too gargaj avna.
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shoonii zurgiig web deer gargaj irne.
    diceDom.style.display = "block";

    // Buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
    diceDom.src = "dice-" + diceNumber + ".png";
              

    // Buusan too n 1 ees ylgaatai bol toglogchiin score iig nemegduulne.
    if(diceNumber !== 1){
        // 1 ees ylgaatai too buulaa. Buusan toog toglogchid nemne.
        score = score + diceNumber;
        document.getElementById("score-" + player).textContent = score;

    }   else {
        // 1 buusan tul niit score iig tootsoj uguud togloomiig duusganaa.

        //  Ene toglogchiin tsugluulsan buh onoog 0 bolgono.
          
         if (diceNumber === 1) {
           alert("1 ийн дугаартай шоо буучихлаа таны энэ хүртэл цуглуулсан нийт оноо " + score + " байлаа.");
        } else {
            alert("Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү");
        }
        score = 0;
        document.getElementById("score-" + player).textContent = 0;

        //document.getElementById("score-0").classList.remove("score-0");

        // Shoog tur alga bolgono.
        }
    }  
    }
);


// New Game buyu shine togloom ehluuleh tovchnii event listener
document.querySelector(".btn-new").addEventListener("click", initGame);

