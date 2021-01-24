window.onload = function () 
            {
                var url = document.location.href,
                    params = url.split('?')[1].split('&'),
                    data = {}, tmp;
                for (var i = 0, l = params.length; i < l; i++) {
                    tmp = params[i].split('=');
                    data[tmp[0]] = tmp[1];
                }
                document.getElementById('bgimg').src = "./IMGS/newC/"+data.name+"-hr.jpg";
            }

function chkname(){
    var nam = document.getElementById("name");
    var ch=nam.value.search(/^[A-Z][a-z]+ [A-Z]*[a-z]+$/);
	if (ch != 0)
    {
        alert("the name you entered ("+nam.value+")is not correct please enter your name again\n hint(Muaz almidani)or(Mohammed Hegazy)");
		nam.focus;
		nam.select();
	    return false;
    }
    else 
    return true;
}

function calculate()
{
    var x = 0;
    var rims = parseFloat(document.getElementById("rims").value);
    var fabric = parseFloat(document.getElementById("fabric").value);
    var angel =parseFloat(document.getElementById("angel").value);
    var paint = parseFloat(document.getElementById("paint").value);

    if (rims > 0)
    {x = x + (rims*50);}

    if (fabric > 0)
    {x = x + (fabric*40);}

    if (angel > 0)
    {x = x + (angel*200);}

    if (paint > 0)
    {x = x + (paint*99.99);}

    y = document.getElementsByName("payment");
    for(i=0 ; i < y.length ; i++)
    {
        if(y[i].checked)
        {
            x = x * y[i].value;
            break;
        }
    }
    document.getElementById("resulte").value = x +"$";
}