/* Ce code ne veut pas fonctionner (erreur à trouver)
// 1 . Sélectionner les éléments nécessaire
const inputTache = document.getElementById('nouvelleTask');
const ajouterBtn = document.getElementById('ajouterBtn');
const listeTache = document.getElementById('listeTaches');

// 2 . Ajouter un écouteur d'évenement au bouton
ajouterBtn.addEventListener('click', ajouterTache);

  // Permettre l'ajout en appuyant sur entrer
  inputTache.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
      ajouterTache();
    }
  });

  // 3. Fonction pour ajouter une nouvelle tâche
  function ajouterTache() {
    const texte = inputTache.value.trim();

    if (texte != "") {
      // Créer un nouvel élément de la liste
      const li = document.createElement("li");
      li.textContent = texte;

      // Ajouter un événement pour marquer comme terminé
      li.addEventListener('click', function(){
        this.classList.toggle("Terminé");
      });

      // 4. Créer un bouton de suppression
      const btnSupprimer = document.createElement("button");
      btnSupprimer.textContent = "Supprimer";
      btnSupprimer.addEventListener("click", function(event) {
        li.remove();
      });

      // Ajouter le bouton à l'élément de liste
      li.appenChild(btnSupprimer);

      // Ajouter l'élément de liste à la liste des tâches
      listeTache.appenChild(li);

      // Réinitialiser le champ de saisie
      inputTache.value = "";
      inputTache.focus();
    }
  }
*/

  // 1. Sélectionner les éléments nécessaires
const inputTache = document.getElementById('nouvelleTask');
const ajouterBtn = document.getElementById('ajouterBtn');
const listeTache = document.getElementById('listeTaches');

// 2. Ajouter un écouteur d'événement au bouton
ajouterBtn.addEventListener('click', ajouterTache);

// Permettre l'ajout en appuyant sur Entrée
inputTache.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        ajouterTache();
    }
});

// 3. Fonction pour ajouter une nouvelle tâche
function ajouterTache() {
    const texte = inputTache.value.trim();

    if (texte != "") {
        //Créer un nouvel élément de la liste
        const li = document.createElement("li");
        li.textContent = texte;

        // Ajouter un événement pour marquer comme terminé
        li.addEventListener("click", function(){
            this.classList.toggle("Terminé");
        });

        // 4. Créer un bouton de suppression
        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer";
        btnSupprimer.addEventListener("click", function(event) {
            li.remove();
        });

        // Ajouter le bouton à l'élément de liste
        li.appendChild(btnSupprimer);

        // Ajouter l'élément de liste à la liste des tâches
        listeTache.appendChild(li);

        // Réinitialiser le champ de saisie
        inputTache.value = "";
        inputTache.focus();
    }
}
