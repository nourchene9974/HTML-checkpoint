
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
