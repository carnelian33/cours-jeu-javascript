


function Position(joueur){
    
    var qui = document.getElementsByClassName("joueur" + joueur);
    var ou = this.id;
    console.log(ou);
}


var boutonStart = document.getElementById("start");
boutonStart.addEventListener("click", function(){
 
    console.log("C'est parti");
Position(1);
Position(2); 
});


