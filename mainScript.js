menuButton = document.getElementsByName("menuButton");

for (var i = 0; i < menuButton.length; i++)
{//loop through all buttons

    //get a random color
    var red = parseInt(Math.random() * 255 +1);
    var green = parseInt(Math.random() * 255 +1);
    var blue = parseInt(Math.random() * 255 +1);
    
    //set onmouseout and mouseover for each button
    menuButton[i].setAttribute("onmouseout","mouseOutButton(this)");
    menuButton[i].setAttribute("onmouseover","mouseOverButton(this, "+red+","+green+","+blue+");");
    menuButton[i].style.backgroundColor = "#2D1E2F";
}

function mouseOverButton(button, red,green,blue)
{
    button.style.backgroundColor = 'rgba('+red+','+green+','+blue+',0.5)';
}
//55DDE0
function mouseOutButton(button) 
{
    button.style.backgroundColor = "#2D1E2F";
}