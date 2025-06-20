/*
Exrexixe 5 : Ecrire un alogorithme qui demande à l'utilisateur de saisir un nombre et qui affiche la 
table de multiplication de ce nombre.

PSEUDO Code
ALGO tableMultiplication

VARIABLES
    nombre, i : ENTIER

Début
        ECRIRE "Entrez un nombre : "
    LIRE nombre

    POUR i DE 1 à 10 FAIRE
        ECRIRE nombre, "x", i, "=", nombre * i
    FIN POUR
Fin
*/

function tableMultiplication() {
    let nombre = parseInt(prompt("Entrez un nombre : "));

    for (let i = 1; i <= 10; i++) {
    let multi = i * nombre;
    console.log(` ${nombre} x ${i} = ${multi}`);
    }
}
tableMultiplication();

//ALternative
/*fucntion tableMultiplication() {
    let number = (prompt("Entrez un nombre : "));
    let tableau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i of tableau) {
        let result = number * i;
        console.log(result);
    }
}
tableMultiplication(); */

