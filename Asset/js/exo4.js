
/*Début
    Ecrire "Entrez un nombre : "
    Lire nombre

    Pour i de 2 à nombre FAIRE
        estPremier <- VRAI
        POUR j DE 2 à i-1 FAIRE
            SI i MODULO = 0 ALORS
                estPremier <- FAUX
                SORTIR
            FIN SI
        FIN POUR
        Si estPremier ALORS
            ECRIRE i
        FIN SI
    FIN POUR
Fin
*/

function afficherNombresPremiers(){
    let nombre = parseInt(prompt("Entrez un nombre :"));

    for(let i = 2; i <= nombre; i++) {
        let estPremier = true;
        for (let j = 2; j < i; j++) {
            if(i % j === 0) {
                estPremier = false;
                break;
            }
        }
        if(estPremier) {
            console.log(i + " est un nombre premier.");
        }
    }
}
afficherNombresPremiers();