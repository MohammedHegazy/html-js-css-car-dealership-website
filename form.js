function chkname(){
    var nam = document.getElementById("name");
    var ch=nam.value.search(/^[A-Z][a-z]+ [A-Z]*[a-z]+$/);
	if (ch != 0)
    {
        alert("the name you entered ("+nam.value+")is not correct please enter your name again\n hint(muaz almidani)or(Mohammed Hegazy)");
		nam.focus;
		nam.select();
	    return false;
    }
    else 
    return true;
}

function calculate(){
    var x = 0;
    x = x + (parseFloat(document.getElementById("unpop").value)*50);
    x = x + (parseFloat(document.getElementById("caramel").value)*40);
    x = x + (parseFloat(document.getElementById("caramelnut").value)*200);
    x = x + (parseFloat(document.getElementById("toffeynut").value)*99.99);
    y = document.getElementsByName("payment");
    for(i=0 ; i < y.length ; i++)
    {
        if(y[i].checked)
        {
            x = x * y[i].value;
        }
    }
    document.getElementById("resulte").value = x +"$";
}