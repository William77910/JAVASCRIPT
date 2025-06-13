// Ecrire un algorithme qui demande à l'utilisateur de saisir un nombre et qui affiche tous les nombres 
// pairs compris entre 1 et ce nombre.

// Pseudo-code
/*
ALGORITHME AfficherNombresPairs
VARIABLES

nombre, i : entier

Début
    Ecrire "Entrez un nombre"
    LIRE nombre
    Pour i allant de 1 à nombre Faire
        Si i modulo 2 = 0 Alors                 (modulo = %)
            Ecrire i
        Fin Si
    Fin Pour
FIN
*/

function afficherNombresPaires() {
    let nombre = parseInt(prompt("Entrez un nombre :")); // parseInt pour les nombres entiers parseFloat pour les nbr à virgule
    for(let i = 0; i <= nombre; i++){               // tant que i est inférieur à nombre, incrémenter i,
                                                    // la boucle s'arrête quand i = nombre(si nombre est paire sinon juste avant)
        if (i % 2 === 0) {                          // si le reste est 0 c'est que le nombre est pair
            console.log(i)
        }
    }
}
afficherNombresPaires();