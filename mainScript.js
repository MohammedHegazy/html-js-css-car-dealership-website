menuButton = document.getElementsByName("menuButton");

for (var i = 0; i < menuButton.length; i++)
{   //loop through all buttons
    //set onmouseout and mouseover for each button
    menuButton[i].setAttribute("onmouseout","mouseOutButton(this);");
    menuButton[i].setAttribute("onmouseover","mouseOverButton(this);");
}

function mouseOutButton(button) 
{
    button.style.backgroundColor = 'rgba('+red+','+green+','+blue+',0.5)';
}
//55DDE0
function mouseOutButton(button) 
{
    button.style.backgroundColor = "#3c6e71";
}