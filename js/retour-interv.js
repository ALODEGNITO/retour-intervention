// retour-interv.js

document.addEventListener('DOMContentLoaded', function() {
    // Définir la date de l'intervention à la date du jour
    const dateInput = document.querySelector('input[type="date"][name="date_interv"]');
    if (dateInput) {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const todayStr = year + '-' + month + '-' + day;
        
        dateInput.value = todayStr;
        // Autoriser toutes les dates antérieures (y compris hier), bloquer les dates futures
        dateInput.min = '2000-01-01';  // Date très ancienne pour débloquer toutes les dates passées
        dateInput.max = todayStr;
    }

    // Récupération automatique de la position GPS
    const gpsBtn = document.getElementById('get-gps');
    const gpsX = document.getElementById('gps_x');
    const gpsY = document.getElementById('gps_y');

    if (gpsBtn) {
        gpsBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    gpsX.value = position.coords.latitude;
                    gpsY.value = position.coords.longitude;
                }, function(error) {
                    alert('Impossible de récupérer la position GPS : ' + error.message);
                });
            } else {
                alert('La géolocalisation n\'est pas supportée par ce navigateur.');
            }
        });
    }

    // Affichage du nom de la photo sélectionnée
    const photoInput = document.querySelector('input[type="file"][name="photo"]');
    if (photoInput) {
        photoInput.addEventListener('change', function() {
            if (photoInput.files && photoInput.files.length > 0) {
                alert('Photo sélectionnée : ' + photoInput.files[0].name);
            }
        });
    }

    // Soumission du formulaire (exemple de gestion)
    document.getElementById('retour-interv-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulaire soumis !');
        // Ici, ajouter la logique d\'envoi ou de traitement des données
    });
});
