// liste-intervention.js

document.addEventListener('DOMContentLoaded', function() {
    // ==================== Gestion du menu responsive ====================
    const menuBtn = document.querySelector('.menu-btn');
    const sidebar = document.querySelector('.sidebar');
    let sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    // Créer l'overlay s'il n'existe pas
    if (!sidebarOverlay) {
        sidebarOverlay = document.createElement('div');
        sidebarOverlay.className = 'sidebar-overlay';
        document.body.appendChild(sidebarOverlay);
    }
    
    // Fonction pour fermer le sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
    }
    
    // Fonction pour ouvrir le sidebar
    function openSidebar() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
    }
    
    // Toggle le menu au clic sur le bouton
    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (sidebar.classList.contains('active')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });
    }
    
    // Ferme le sidebar quand on clique sur l'overlay
    sidebarOverlay.addEventListener('click', closeSidebar);
    
    // Ferme le sidebar quand on clique sur un lien de navigation
    document.querySelectorAll('.sidebar nav a, .sidebar nav li').forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 600) {
                closeSidebar();
            }
        });
    });
    
    // Ferme le sidebar si on redimensionne l'écran (passer de mobile à desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) {
            closeSidebar();
        }
    });
    
    // ==================== Redirection vers retour-interv.html ====================
    document.querySelectorAll('.interv-table tbody tr').forEach(function(row) {
        row.addEventListener('click', function(e) {
            // Ne pas rediriger si on clique sur un bouton
            if (e.target.closest('button')) {
                return;
            }
            window.location.href = row.getAttribute('data-link');
        });
    });
    
    // ==================== Gestion du bouton Déconnexion ====================
    const logoutBtn = document.querySelector('.logout');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const confirmLogout = window.confirm('Vous voulez vraiment vous déconnecter ?');
            if (confirmLogout) {
                window.location.href = '../html/login.html';
            }
            // Sinon, ne rien faire (rester sur la page)
        });
    }
    
    // ==================== Gestion des clics sur les boutons d'action ====================
    document.querySelectorAll('.btn-view').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            // Rediriger vers la page de détail
            const row = this.closest('tr');
            if (row) {
                window.location.href = row.getAttribute('data-link');
            }
        });
    });
});
