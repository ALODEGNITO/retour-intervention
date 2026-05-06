// liste-intervention.js

document.addEventListener('DOMContentLoaded', function() {
    // Redirection vers retour-interv.html au clic sur une ligne ou bouton œil
    document.querySelectorAll('.interv-table tbody tr').forEach(function(row) {
        row.addEventListener('click', function(e) {
            // Évite la double navigation si clic sur bouton œil
            if (e.target.classList.contains('btn-view')) {
                window.location.href = row.getAttribute('data-link');
                return;
            }
            window.location.href = row.getAttribute('data-link');
        });
    });
    // Optionnel : gestion du menu responsive
    document.querySelector('.menu-btn')?.addEventListener('click', function() {
        document.querySelector('.sidebar').style.display = 'block';
    });

    // Gestion du bouton Déconnexion
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const confirmLogout = window.confirm('Vous voulez vraiment vous déconnecter ?');
            if (confirmLogout) {
                window.location.href = '/login.html';
            }
            // Sinon, ne rien faire (rester sur la page)
        });
    }
});
