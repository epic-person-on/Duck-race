// firebase-config.js
// Initialize Firebase with your configuration settings
const firebaseConfig = {
    apiKey: 'AIzaSyArg0NFirv13y0uJaosaqfsMt8Su_inmsQ',
    authDomain: 'duck-a701a.firebaseapp.com',
    projectId: 'duck-a701a',
    storageBucket: 'gs://duck-a701a.appspot.com',
    messagingSenderId: '365384333064',
    appId: '1:365384333064:web:2329438a5333f4b2f41ebd',
};

firebase.initializeApp(firebaseConfig);

// Authenticate the user (Google Sign-In) if they are not already signed in.
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        // User is not signed in, redirect to the login page.
        window.location.href = 'login.html'; // Create a login page to handle authentication.
    }
});
