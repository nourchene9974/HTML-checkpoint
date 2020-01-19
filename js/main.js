
function makeBold() {

    var getText=document.getElementById("text");

    if ( getText.style.fontWeight === 'bold')
    {
        getText.style.fontWeight = 'normal'
    }

    else {
        getText.style.fontWeight = 'bold'
    }

}

function makeItalic() {

 var getText=document.getElementById("text");

 if( getText.style.fontStyle === 'italic')
 {
    getText.style.fontStyle = 'normal'
 }

 else {
    getText.style.fontStyle = 'italic'
 }

}

function makeUnderline() {

    var getText=document.getElementById("text");

    if(getText.style.textDecoration === 'underline')
    {
        getText.style.textDecoration = 'none'
    }

    else {
        getText.style.textDecoration = 'underline'
    }

}

function changeSize() {

    var getText=document.getElementById("text");
    var e = document.getElementById("mySelect")
    getText.style.fontSize = e.options[e.selectedIndex].text;
}



function changepolice() {

    var getText=document.getElementById("text");
    var e = document.getElementById("mySelect1")

    getText.style.fontFamily = e.options[e.selectedIndex].text;
}


$(document).ready(function(){
    
});



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