// Initialize Firebase with your project's configuration
const firebaseConfig = {
  apiKey: "AIzaSyArg0NFirv13y0uJaosaqfsMt8Su_inmsQ",
  authDomain: "duck-a701a.firebaseapp.com",
  projectId: "duck-a701a",
  storageBucket: "duck-a701a.appspot.com",
  messagingSenderId: "365384333064",
  appId: "1:365384333064:web:2329438a5333f4b2f41ebd",
};

firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function() {
    // Generate a unique random number and display it to the user
    const uniqueRandomNumber = generateUniqueRandomNumber();
    document.getElementById('randomNumber').textContent = uniqueRandomNumber;

    // Store the random number in Firebase Storage
    storeRandomNumberInFirebase(uniqueRandomNumber);

    // Add a click event listener to the button for redirection
    document.getElementById('redirectButton').addEventListener('click', function() {
        // Redirect the user to index.html
        window.location.href = 'index.html';
    });

    // Function to generate a unique random number
    function generateUniqueRandomNumber() {
        // You can use any logic to generate a unique random number here
        // For a basic example, we use the current timestamp as a unique identifier
        return Date.now().toString();
    }

    // Function to store the random number in Firebase Storage
    function storeRandomNumberInFirebase(randomNumber) {
        const storageRef = firebase.storage().ref();
        const randomNumRef = storageRef.child('randomNumbers/' + randomNumber);

        // Create a reference to the random number and upload it (as an empty file) to Firebase Storage
        randomNumRef.put(new Blob([], { type: 'text/plain' })).then(function(snapshot) {
            console.log('Random number stored in Firebase Storage.');
        }).catch(function(error) {
            console.error('Error storing random number:', error);
        });
    }
});
