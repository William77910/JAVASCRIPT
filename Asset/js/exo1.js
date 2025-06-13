/*
Exercice 1 : écrire un algorithme qui demande à l'utilisateur de sairir un nombre et qui affiche son carré.
*/

//Pseudo-code
/*
ALGORITHME CalculCarré
VARIABLES
nombre : réel
carré : réel

Début
    Ecrire " Entrez un nombre : "
    LIRE nombre
    carré <- nombre * nombre
    Ecrire "Le carré de", nombre, "est :", carré
FIN
*/

function calculCarre() {
    let nombre = parseFloat(prompt("Entrez un nombre:"));  // parseFloat trensforme le string en nombre
    let carre = nombre * nombre;
    console.log(`Le carré de ${nombre} est : ${carre}`);  //
}