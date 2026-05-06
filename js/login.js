// Affichage/masquage du mot de passe
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
if (togglePassword && passwordInput) {
	togglePassword.addEventListener('click', function () {
		const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
		passwordInput.setAttribute('type', type);
		// Optionnel : changer l'icône si besoin
		this.classList.toggle('active');
	});
}

// Gestion du formulaire (exemple, à adapter pour la vraie connexion)
const loginForm = document.querySelector('.login-form');
if (loginForm) {
	loginForm.addEventListener('submit', function (e) {
		e.preventDefault();
		// Récupérer les valeurs
		const matricule = document.getElementById('matricule').value.trim();
		const telephone = document.getElementById('telephone').value.trim();
		const password = passwordInput.value.trim();
		// Exemple de validation simple
		if (!matricule || !telephone.match(/^\d{10}$/) || !password) {
			alert('Veuillez remplir correctement tous les champs.');
			return;
		}
		// Redirection vers la page des interventions
		window.location.href = '/liste-interventions.html';
	});
}
