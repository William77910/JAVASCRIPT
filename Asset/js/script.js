// Ceci est commentaire

/* Les variables sont des conteneurs pour stocker des données. 
    En Javascript, il existe trois façons de déclarer des variables, chacune ayant sont utilité spécifique.

let age = 26;                              // une variable "Let" peut-être mobifiable

const PI = 3.14;                           // "const" est une constante qui ne changera jamais et est toujours en majuscule

/*  var nom = "Jean";                       ne plus utiliser "var" car déprécié 

    Type de données principaux

    String(chaine de carractères)

let texte = "Bonjour";
let texte2 = 'Monde';                     // il vaut mieux utiliser les "" pour les chaines de caractères
let phrase = `vous avez ${age} ans`;
let template = `${texte} ${texte2}`;      // template litteral
let template2 = texte +" "+ texte2;
console.log(template);                    // Ne jamais laisser un "console.log" avec des données sensibles dans le code 
console.log(template2);                     à cause des hackers, il faut les effacer.
console.log(phrase);

    Number
let entier = 45;
let decimal = 3.14;

    Boolean = Vrai ou Faux pour la réponse
let estVrai = true;
let estFaux = false;

    Array (tableau)
let fruits = ["pomme, ananas, orange"];

    Object
let person = {
    nom: "Lohez",
    age: 25,
    ville: "Lille"
}

    Null et Undefined
let valeurNull = null;
let valeurUndifined;

    Opérateurs arithmétiques
let a = 5;
let b = 2;

let addition = a + b;
let soustraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulo = a % b;
let puissance = a ** b;
console.log(multiplication);

    Opérateurs de comparaison
let x = 5;    // number
let y = "5";  // string (chaine de carractères)

x == y;  // "==" = compare la valeure donc = true ( comparaison avec conversion de type (compare la valeur mais pas le type))
x === y; // "===" = compare la valeure et le type donc = false ( comparaison stricte valeur et type de données)
x != y;  // "!=" = est ce que la valeur est innégale? = false (non car 5 = 5) => innégalité avec conversion de type
x !== y; // "!==" = est ce que les valeurs et les types ne sont pas égaux? = true (oui car 5=5 mais number différent de string) 
                => innégalité stricte valeur et type de données
x > 3;  // true
x <= 5; // true

    Structure de contrôle
if...else
if (age >= 18) {
    console.log("Majeur");
} else {
    console.log("Mineur");
}


    switch
switch (fruits) {
    case "pomme" :
        console.log("C'est une pomme");
        break;
    case "ananas" :
        console.log("C'est un ananas");
        break;
    case "orange" :
        console.log("C'est une orange");
        break;
    default:
        console.log("Fruits inconnu");
}

    Boucles

    for  = pour
for (let i = 0, i < 5; i++) {  // pour i inférieur à 5 incrémenter i de 1
    console.log(i);
}

    while = tant que
let i = 0;
while (i < 5) {                // tant que i est inférieur à 5
    console.log(i);            
    i++;                       // incrémenter i de 1 (l'incrémentation se fait après avoir vérifier i 
}

    for...of (pour les tableaux)
for (let fruit of fruits) {   // pour chaque fruit du tableau fruits
    console.log(fruit);       // écrire le fruit
}

    for...in (pour les objets)
for (let propriete in personne) {                           // parcourir les "propriétés" de l'objet "personne"
    console.log(`${propriete}: ${personne[propriete]}`);
}

    Fonctions
    Fonction classique
function direBonjour(nom) {
    return `Bonjour ${nom}!`;
}

    Fonction fléchée
const addition = (a, b) => a + b;

    Fonction avec valeur par défaut
function saluer(nom = "visiteur") {
    console.log(`Bonjour ${nom}`);
}

    Méthodes courantes
    Méthodes pour les chaines de caractère

let texte = "Hello World";
texte.lenght;            // 11 (nombre de caractère)
texte.toUpperCase();     // HELLO WORLD
texte.toLowerCase();     // Hello World
texte.includes("World"); //true
texte.split("");         // ["Hello", "World"]

    Méthode pour les tableaux
let array = [ 1 , 2 , 3 , 4 , 5]
array.push(6)           // Ajoute à la fin du tableau
array.pop();            // Retire le dernier élément
array.unshift(0);       // Ajoute au débur du tableau
array.includes(3);      // true (demande si le chiffre 3 est dans le tableau)
array.join(", ");       // "1, 2, 3, 4, 5"  (trensforme mes nombres en en chaine de caractère)

push() : Ajoute un ou plusieurs éléments à la fin
pop() : Supprime et renvoie le dernier élément
unshift() : Ajoute un ou plusieurs éléments au début
shift() : Supprime et renvoie le premier élément
inclides() : Vérifie si une élément est présent
join(): Convertit le tableau en chaine avec un séparateur

    Console et débogage
console.log("Message normal");
console.error("Message d'erreur");
console.warn("Avertissement");

    Débogage
debugger; // Point d'arrêt pour le débogage
 consol.log() : Affiche un message dans la console (utile pour le développement)
 console.error() : Affiche un message d'erreur eu rouge
 console.warm() : Affiche un avertissement (en jaune)
 debugger : Créer un point d'arrêt pour le débogage dans les outils de développement

 Méthodes principales pour sélectionner des éléments :

    getElementById() - Sélectionne un élément par son attribut ID
    const element = document.getElementById("monId");

    getElementsByClassName() - Sélectionne des éléments par leur classe
    const elements = document.getElementsByClassName("maClasse");

    getElementsByTagName() - Sélectionne des éléments par leur balise
    const paragraphes = document.getElementsByTagName("p");

    querySelector() - Sélectionne le premier élément correspondant à un sélecteur CSS
    const element = document.querySelector(".maClasse");

    querySelectorAll() - Sélectionne tous les éléments correspondant à un sélecteur CSS
    const elements = document.querySelectorAll("div.conteneur p");

    Modification du contenu
    textContent - Modifie le contenu textuel d'un élément
    element.textContent = " Nouveau texte";

    innerHTML - Modifie le contenu HTML d'un élément
    element.innerHTML = "<strong>Texte en gras</strong>";

    value - Modifie la valeur d'un champ de formulaire
    document.getElementById("monInput").value = "

    Création et insertion d'éléments
    Créer des éléments :
        createElement() - Crée un nouvel élément HTML
        const nouveauParagraphe = document.createElement("p");

        createTextNode() - Crée un nœud de texte
        const texte = document.createTextNode("Mon texte");

    Insérer des éléments :

        appendChild() - Ajoute un élément comme dernier enfant
        parent.appendChild(enfant);

        insertBefore() - Insère un élément avant un élément de référence
        parent.insertBefore(nouvelElement, elementReference);

        append() - Peut ajouter plusieurs nœuds et chaînes de texte
        parent.append(enfant1, "Du texte", enfant2);

        prepend() - Insère au début de l'élément parent
        parent.prepend(enfant);

        insertAdjacentElement() - Insère à une position spécifique
        element.insertAdjacentElement('beforebegin', nouvelElement);
          --  Positions possibles: 'beforebegin', 'afterbegin', 'beforeend'

        Manipulation des attributs
        setAttribute() - Définit un attribut
        element.setAttribute("class", "nouvelle-classe");

        getAttribute() - Récupère la valeur d'un attribut
        const valeur = element.getAttribute("href");

        removeAttribute() - Supprime un attribut
        element.removeAttribute("disabled");

        Accès direct à certains attributs
        element.id = "nouveauId";
        element.className = "nouvelle-classe";
        element.href = "https://example.com";


Gestion des classes
        classList.add() - Ajoute une classe
        element.classList.add("nouvelle-classe");

        classList.remove() - Supprime une classe
        element.classList.remove("ancienne-classe");

        classList.toggle() - Ajoute ou supprime une classe
        element.classList.toggle("active");

        classList.contains() - Vérifie si une classe existe
        if (element.classList.contains("important")) {

          --  Faire quelque chose

        }

        Suppression d'éléments
        remove() - Supprime un élément
        element.remove();

        removeChild() - Supprime un élément enfant
        parent.removeChild(enfant);
*/