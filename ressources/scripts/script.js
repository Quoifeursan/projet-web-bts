document.getElementById("submit-connexion").addEventListener("click", function(e){
    e.preventDefault();


    const nom = document.querySelector("input[name='nom']").value;
    const prenom = document.querySelector("input[name='prenom']").value;
    const email = document.querySelector("input[name='email']").value;
    console.log('email')

    const utilisateur = {
        prenom,
        nom,
        email,
        profils: 'utilisateur',
    };


        const option = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(utilisateur)
        };
        fetch('https://inpoll-jaune.azurewebsites.net/')
        .then((response) => {
            if (response.status === 201) {
                response.json().then(data => {
                    console.log('Utilisateur enregistré avec succés');
                    localStorage.setItem('utilisateur', JSON.stringify(data));
                })
            } else {
                console.error("erreur lors de l'enregistrement de l'utilisateur");
            }
        })
})
