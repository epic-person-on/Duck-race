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
