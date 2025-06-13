// Exercice 2 : écrire un algorithme qui demande à l'utilisateur de saisir deux nombres et qui affiche leur somme.

// Pseudo-code
/*
ALGORITHME CalculSomme
VARIABLES

nombre1, nombre2 : Réel
somme : Réel

Début
    Ecrire "Entrez le premier nombre"
    LIRE nombre1
    Ecrire "Entrez le deuxième nombre"
    LIRE nombre2
    somme <- nombre1 + nombre2
    Ecrire "La somme de", nombre1, "et", nombre2, "est :", somme
FIN
*/

function calculSomme() {
    let nombre1 = parseFloat(prompt("Entrez le premier nombre :"));         // parseFoat pour les nombre à virgule
    let nombre2 = parseFloat(prompt("Entrez le deuxième nombre :"));
    let somme = nombre1 + nombre2;
    console.log(`La somme de ${nombre1} et ${npmbre2} est : ${somme}`);
}
// Appel de la fonction pour exécuter l'algorithme
calculSomme();