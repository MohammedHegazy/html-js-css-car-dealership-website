menuButton = document.getElementsByName("menuButton");

for (var i = 0; i < menuButton.length; i++)
{   //loop through all buttons
    //set onmouseout and mouseover for each button
    menuButton[i].setAttribute("onmouseout","mouseOutButton(this);");
    menuButton[i].setAttribute("onmouseover","mouseOverButton(this);");
}

function mouseOverButton(button) 
{
    button.style.backgroundColor = '#e94f37';
    button.style.color  = "#503D3F";
}

function mouseOutButton(button) 
{
    button.style.backgroundColor = "#503D3F";
    button.style.color  = '#e94f37';
}

/* if scrolled to bottom show bottom*/
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) 
    {
        document.getElementById("contactus").style.visibility = 'visible';
    }
    else if($(window).scrollTop() + $(window).height() < $(document).height() - 100) 
    {
        document.getElementById("contactus").style.visibility = 'hidden';
    }
    
    if($(window).scrollTop() < 120)
    {
        document.getElementById("mainMenu").style.visibility = 'visible';
    }
    else
    {
        document.getElementById("mainMenu").style.visibility = 'hidden';    
    }
  });