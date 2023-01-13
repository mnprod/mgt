// Menu navigation changement d'apparence au clique //
function changeLinkAppearance() {
  var links = document.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
      // Retirer la classe "active" de tous les liens
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove('activ');
      }
      // Ajouter la classe "active" au lien cliqué
      this.classList.add('activ');
    });
  }
}

changeLinkAppearance();

// Suppression de certaines DIV au changement de breakpoints //

