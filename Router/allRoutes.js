import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/signin.html"),
    new Route("/signup", "Inscription", "/pages/signup.html"),
    new Route("/account", "Compte", "/pages/account.html"),
    new Route("/editPassword", "Modifier le mot de passe", "/pages/editPassword.html"),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "ECF";