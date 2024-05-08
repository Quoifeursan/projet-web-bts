document.getElementById('mainLink').addEventListener('click', function(event) {
    // Vérifier si des données sont disponibles localement
    var firstName = localStorage.getItem('firstName');
    var lastName = localStorage.getItem('lastName');

    if (!firstName || !lastName) {
      // Annuler la navigation si aucune donnée n'est disponible
      event.preventDefault();
      // Afficher la popup
      document.getElementById('popupConn').style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
   
    }
  });