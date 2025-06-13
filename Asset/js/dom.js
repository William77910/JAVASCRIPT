// DOM = Document Object Model

//Méthodes de sélection
const container = document.getElementById('container');   // Sélectionne l'élément avec l'ID "container"
const premierParagraphe = document.querySelector('.paragraphe');  // Sélectionne le premier élément correspondant au sélecteur CSS
const paragraphes = document.querySelectorAll('p')          // Sélectionne tous les éléments correspondant au sélecteur CSS

//Exemple d'utilisation
console.log(container.innerHTML);                                      // Affiche tout le contenu HTML
paragraphes.forEach(p => console.log(p.textContent));                  // Affiche le texte de chaque paragraphe
console.log(premierParagraphe.textContent);                            // Affiche "Premier paragraphe"

//Modification de contenu
//element.textContent                   // Modifier ou lire le texte d'un élément
//element.innerHTML                     // Modifier ou lire le contenu HTML
//element.value                         // Modifier ou lire la valeur d'un contenu

//Exercice 1

//1. Changer le texte du paragraphe
//let texte = document.getElementById('texte');
//texte.textContent = 'Nouveau texte modifié';

//2. Modifier la valeur de l'input
const input = document.getElementById('monInput');
input.value = 'Nouvelle valeur';

//3. Ajouter un nouveau paragraphe avec du HTML
const texte2 = document.getElementById('editerMoi');
texte2.innerHTML += '<p class="nouveau">Paragraphe ajouté dynamiquement</p>'; // version non sécuriser à cause du "inner" qui créer une faille
//Version sécurisée
const nouveauParagraphe = document.createElement('p');
nouveauParagraphe.textContent = 'Paragraphe ajouté dynamiquement';
nouveauParagraphe.className = 'ajoutClasse';
nouveauParagraphe.style.color = 'red';
editerMoi.appendChild(nouveauParagraphe);


console.log();  