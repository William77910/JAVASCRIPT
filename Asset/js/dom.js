// DOM = Document Object Model

//Méthodes de sélection
//const container = document.getElementById("container"); // Sélectionne l'élément avec l'ID "container"
//const premierParagraphe = document.querySelector(".paragraphe"); // Sélectionne le premier élément correspondant au sélecteur CSS
//const paragraphes = document.querySelectorAll("p"); // Sélectionne tous les éléments correspondant au sélecteur CSS

//Exemple d'utilisation
//console.log(container.innerHTML); // Affiche tout le contenu HTML
//paragraphes.forEach((p) => console.log(p.textContent)); // Affiche le texte de chaque paragraphe
//console.log(premierParagraphe.textContent); // Affiche "Premier paragraphe"

//Modification de contenu
//element.textContent                   // Modifier ou lire le texte d'un élément
//element.innerHTML                     // Modifier ou lire le contenu HTML
//element.value                         // Modifier ou lire la valeur d'un contenu

//Exercice 1

//1. Changer le texte du paragraphe
//let texte = document.getElementById('texte');
//texte.textContent = 'Nouveau texte modifié';
/**
//2. Modifier la valeur de l'input
const input = document.getElementById('monInput');
input.value = 'Nouvelle valeur';
*/
/**
//3. Ajouter un nouveau paragraphe avec du HTML
const texte2 = document.getElementById('editerMoi');
texte2.innerHTML += '<p class="nouveau">Paragraphe ajouté dynamiquement</p>'; // version non sécuriser à cause du "inner" qui créer une faille
//Version sécurisée
const nouveauParagraphe = document.createElement('p');
nouveauParagraphe.textContent = 'Paragraphe ajouté dynamiquement';
nouveauParagraphe.className = 'ajoutClasse';
nouveauParagraphe.style.color = 'red';
editerMoi.appendChild(nouveauParagraphe);
*/
//Manipulation des classes
// element.classlist.add('classe');  Ajouter une classe
// element.classlist.remove('classe');  Supprimer une classe
// element.classlist.toggle('classe');  Basculer une classe
// element.classlist.contains('classe');  Vérifier si une classe existe

//Exercice classes
// 1 Ajouter un événement click qui bascule entre carré et rond
// 2 Vérifier la présence d'une classe avant de la modifier

/** const box = document.getElementById('box'); // je récupère mon élément box
	Vérifier la présence d'une classe avant de la modifier
	box.addEventListener('click', function () {  // Ajoute un événement click à l'élément box
    // Ajouter un événement click qui bascule entre carré et rond
    if (box.classList.contains('carre')) {
        box.classList.remove('carre');
        box.classList.add('rond');
    } else {
        box.classList.remove('rond');
        box.classList.add('carre');
    }

	// Alternative plus concise avec toggle
	// box.classList.toggle('rond');
	// box.classList.toggle('carre');
}); */
/*
	box.addEventListener('click', function(){
	box.style.transition = 'all 0.3s ease';
	box.classList.toggle('rond');
})
*/
//-------------------------------------------------------------------------------------------
//Création et suppression d'éléments
// document.createElement('div);   Créer un nouvel élément
// parent.appendChild(element);  Ajoutne un élément enfant
// parent.removeChild(element);  Supprime un élément enfant
// element.remove();  Supprime un élément

//Exercice
// 1 Créer une fonction qui ajoute un nouvel élément à la liste
// 2 Ajouter un bouton de suppression à chauqe élément
// 3 Implémenter la suppresssion d'éléments

/*const boutonAjout = document.getElementById('ajout');
const liste = document.getElementById('items');
let compteur = 1;

// 1 Fontion pour ajouter un nouvel élément
function ajouterElement(){
	//Créer les éléménts
	const li = document.createElement('li');
	const texte = document.createElement('span');
	const boutonSupprimer = document.createElement('button');

	//Configurer le contenu
	texte.textContent = `Element ${compteur}`;
	boutonSupprimer.textContent= 'Supprimer';

	//Ajouter du style
	li.style.display = 'flex';
	li.style.justifyContent ='space-between';
	li.style.margin = '5px 0';
	boutonSupprimer.style.marginLeft = '10px';

	// 2 Ajouter bouton de suppression
	boutonSupprimer.onclick = function(){
		//implémenter la suppression
		li.remove();  // Alternative : liste.removeChild(li);
		compteur--;   // Décrémenter le compteur
	};

	//Assembler et ajouter à la liste
	li.appendChild(texte);
	li.appendChild(boutonSupprimer);
	liste.appendChild(li);

	compteur++;  // Incrémenter le compteur pour le prochain élément
}
//Attacher l'événement au bouton
boutonAjout.addEventListener('click', ajouterElement);
*/
//-----------------------------------------------------------------------------------
//Gestion des événements
//click
//submit
//keyup / keydown
//mouseover / mouseout
//change

//Exercice
//1 Empêcher le comportement par défaut du formulaire
//2 Afficher le texte saisi en temps réel
//3 Valider le contenu avant soumission

//Pseudo code
//Sélectionner les éléments necessaires
//formulaire = sélectionner élément avec ID "monFormulaire"
//champNom = sélectionner élément avec ID "monInput"
//divResultat = sélectionner élément avec ID "resultat"

//1 Empêcher le comportement par défaut du formulaire
//Ajouter un écouteur d'évenement "submit" sur le formulaire
//Empêcher le comportement par défault

//3 valider le contenu avant soumission
	/* si champNom est vide alors
		Afficher message d'erreur dans la div resultat
		mettre divResultat en rouge
		terminer la fonction
	sinon 
		Afficher message de succés dans la divResultat
		mettre la divResultat en vert
		réinitialise le formulaire
	fin si
	*/

//2 Afficher le texte saisi en temps réel
	/* Ajouter un ecouteur d'evenement sur "input" champNom

		si la valeur saisie est vide alors
			Afficher message d'attente sans la divResultat
			Mettre la divResultat en gris
		sinon
			Afficher texte saisi dans div
			Mettre divResultat en bleu
		fin si
	*/

const form = document.getementById('monFormulaire');
const monInput = document.getElementById('nomInput');
const resultat = document.getElementById('resultat');

//1 Empêcher le comportement par defaut du formulaire
form.addEventListener('submit', function(e){
	e.preventDefault();

	//3 valider le contenu avant soumission
	if(monInput.Value.trim() === ''){
		resultat.textContent = 'Erreur : Le champ ne peut pas être vide';
		resultat.style.color = 'red';
		return;
	}
	resultat.textContent = 'Formulaire soumis avec le nom : ${nomInput.value}';
	resultat.style.color = 'green';
	form.reset();
})

//2 Afficher le texte saisi en temps réel
nomInput.addEventListener('input', function(){
	if(this.value.trim() === '') {
		resultat.textContent = 'En attente de saisi....';
		resultat.style.color = 'gray';
	}else{
		resultat.textContent = 'Vous tapez : ${this.value}';
		resultat.style.color = 'blue';
	}
})