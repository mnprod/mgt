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

var scrolling = false;

window.addEventListener('scroll', function() {
  scrolling = true;
  var top = window.scrollY;
  var myElement = document.querySelector('.maBalise');
  myElement.style.opacity = 1 - (top / 100);
});

setInterval(function() {
  if (scrolling) {
    scrolling = false;
  } else {
    var myElement = document.querySelector('.maBalise');
    myElement.style.opacity = 1;
  }
}, 250);


const div = document.createElement('div');
if (windowWidth > 800) {
  document.getElementById('footColId').className = 'imgFooter';
} else {
  document.getElementById('footColId').className = 'imgFooterlittle';
}

window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 800) {
    document.getElementById('footColId').className = 'imgFooter';
  } else {
    document.getElementById('footColId').className = 'imgFooterlittle';
  }
});