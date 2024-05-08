function popupInscription() {
    document.getElementById('popupInsc').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popupReset').style.display = 'none';
    document.getElementById('popupOkReset').style.display = 'none';
}

function popupConnexion() {
    document.getElementById('popupConn').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}


function popupReset() {
    document.getElementById('popupReset').style.display = 'block';
    document.getElementById('popupInsc').style.display = 'none';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupConn').style.display = 'none';
    document.getElementById('popupInsc').style.display = 'none';
    document.getElementById('popupReset').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function popupOkReset(){
    document.getElementById('popupReset').style.display = 'none';
    document.getElementById('popupOkReset').style.display = 'block';
    
}




function resetAccount() {
    // Supprimer les données stockées localement
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('email');
    localStorage.removeItem('accountExists'); // Assurez-vous de supprimer cette clé si elle est utilisée

    
    document.getElementById('popupReset').style.display = 'none';
    document.getElementById('popupOkReset').style.display = 'block';
    

  
}