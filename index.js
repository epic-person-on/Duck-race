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
// index.js
// Generate a unique random number for the user.
const uniqueRandomNumber = uuidv4();

// Store the Gmail address and random number in Firebase Storage as a JSON file.
const storageRef = firebase.storage().ref();
const user = firebase.auth().currentUser;

if (user) {
    const userData = {
        email: user.email,
        random_number: uniqueRandomNumber,
    };

    const jsonBlob = new Blob([JSON.stringify(userData)], { type: 'application/json' });

    const userRef = storageRef.child(`users/${user.uid}.json`);
    userRef.put(jsonBlob).then(() => {
        console.log('Data uploaded successfully.');
    });
}

// Display the unique random number on the page.
const randomNumberElement = document.getElementById('randomNumber');
randomNumberElement.textContent = uniqueRandomNumber;
