


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD_1d6OXaGkYhjHzGcjfGd15kOyQ5V_TVE",
    authDomain: "go-my-code-1aef4.firebaseapp.com",
    databaseURL: "https://go-my-code-1aef4.firebaseio.com",
    projectId: "go-my-code-1aef4",
    storageBucket: "go-my-code-1aef4.appspot.com",
    messagingSenderId: "719174901041",
    appId: "1:719174901041:web:f6e7402894e5b677bb6410",
    measurementId: "G-C3BV59Y6QL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



document.getElementById('contactForm').addEventListener('submit', submitForm);



var messageRef = firebase.database().ref('myDatabase');

function submitForm (e)
{
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var track = document.getElementById('track').value;
    var number = document.getElementById('number').value;
    saveMessage(name,email,track,number);
}

function saveMessage(name,email,track,number)
{
    var newMessageRef = messageRef.push();
    newMessageRef.set(
        {
            name: name,
            email: email,
            track: track,
            number: number
        }
    );
}



