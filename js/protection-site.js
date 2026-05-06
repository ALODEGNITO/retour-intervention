// ================= PROTECTION DU SITE =================

// Désactiver le clic droit (menu contextuel)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Bloquer le copier
document.addEventListener('copy', function(e) {
    e.preventDefault();
});

// Bloquer le coller
document.addEventListener('paste', function(e) {
    e.preventDefault();
});

// Bloquer le couper
document.addEventListener('cut', function(e) {
    e.preventDefault();
});

// Bloquer les raccourcis clavier pour les outils de développement
document.addEventListener('keydown', function(e) {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});
