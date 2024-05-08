document.getElementById('submit-connexion').addEventListener('click', function() {
  // Vérifier si le fichier local existe déjà
  var accountExists = localStorage.getItem('accountExists');

  if (accountExists) {
    // Alertez l'utilisateur s'il y a déjà un compte sur cet appareil
    popupReset();






  } else {
    // Récupérer les valeurs du formulaire
    var firstName = document.getElementById('prénom').value;
    var lastName = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Afficher une alerte de récapitulation
  

    // Stocker localement les informations
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('email', email);

    // Indiquer qu'un compte a été créé sur cet appareil
    localStorage.setItem('accountExists', 'true');

    // Rediriger vers une autre page ou effectuer d'autres actions après l'inscription
    window.location.href = 'ressources/pages/main.html';
  }
});