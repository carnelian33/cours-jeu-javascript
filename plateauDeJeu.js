// création du tableau plateau de jeu 10X10 et numérotation des lignes et cellules
var c = 1; // variable pour numéroter les cellules


// fonction pour positionner les éléements du jeu ( perso et armes etc..) avec gestion des cases deja occupées
function PositionArme(elt) {
    
    var positionOk = false; // variable d'etat des cases occupées
    while (positionOk === false) {
        var tirage = [Math.round(Math.random() * (100 - 1) + 1)];
        var cible = document.getElementById("case" + tirage);
        var etat = cible.getAttribute('class');
        if (etat === null) {
            cible.style.backgroundImage = "url(" + elt + ")";
            cible.className = 'arme';
            positionOk = true;
        }
    }
}

function PositionJoueur(elt, numero) {
    
    var positionOk = false; // variable d'etat des cases occupées
    while (positionOk === false) {
        var tirage = [Math.round(Math.random() * (100 - 1) + 1)];
        var cible = document.getElementById("case" + tirage);
        var etat = cible.getAttribute('class');
        if (etat === null) {
            cible.style.backgroundImage = "url(" + elt + ")";
            cible.className = 'joueur' + numero;
            positionOk = true;
        }
    }
}



// boucle englobant la création des 10 lignes et 100 cellules
for (var l=1;l<11;l++){

// création d'une ligne du plateau de jeu
    var ligne = document.getElementById("plateau").insertRow(l-1);
    ligne.id="ligne"+l;
    ligne.class="lignes";

// boucle création 10 cellule du plateau de jeu

    for (var i=0;i<10;i++){
    
        var cellule = ligne.insertCell(i);
        cellule.class="cases";
        cellule.id="case"+c;
        c++;
    }
}

// Positionnement aléatoire des case inaccessibles, armes et joueurs
for (i=0;i<6;i++){
    
var tirage = [Math.round(Math.random()*(100 - 1) + 1)];
console.log(tirage);
    var caseGrise = document.getElementById("case"+ tirage);
    caseGrise.style.backgroundColor="darkgrey";
    caseGrise.className = 'indispo';
    
}

// positionnement joueurs et armes via fonction


PositionArme("images/epee.gif");
PositionArme("images/masse.gif");
PositionArme("images/eclair.gif");
PositionArme("images/bouclier.gif");
PositionJoueur("images/player1.gif", 1);
PositionJoueur("images/player2.gif", 2);
