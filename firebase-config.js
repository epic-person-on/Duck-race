// firebase-config.js
// Initialize Firebase with your configuration settings
const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);

// Authenticate the user (Google Sign-In) if they are not already signed in.
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        // User is not signed in, redirect to the login page.
        window.location.href = 'login.html'; // Create a login page to handle authentication.
    }
});
