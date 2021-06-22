window.addEventListener( 'load', function()
{
	document.getElementById("Formular01").onsubmit = Valider;
});

function Valider()
{
	var AntalFejl = 0;
	var FejlBesked1 = "";
	var FejlBesked2 = "";
	var FejlBesked3 = "";
	
	if( document.getElementById( 'InputNavn' ).value == "" )
	{	
		AntalFejl += 1;
		FejlBesked1 = "Skriv dit navn!";
        document.getElementById("InputNavn").style.backgroundColor ='red';
	}
	else
	{
		var regexpbogstaver = /^[a-zA-Z ]+$/;
		if( !regexpbogstaver.test( document.getElementById('InputNavn').value ) )
		{
			AntalFejl += 1;
			FejlBesked1 = "Navn må kun indeholde bogstaver og mellemrum!";
            document.getElementById("InputNavn").style.backgroundColor ='red';
		}
        else{
            document.getElementById("InputNavn").style.backgroundColor = 'rgb(227, 247, 252)';
        }
	}
	
	if( document.getElementById( 'InputMail' ).value == "" )
	{
		AntalFejl += 1;
		FejlBesked3 = "Skriv din mail!";
        document.getElementById("InputMail").style.backgroundColor ='red';
	}
	else
	{
		var regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if( !regexpmail.test( document.getElementById('InputMail').value ) )
		{
			AntalFejl += 1;
			FejlBesked3 = "Mail er ikke gyldig!";
            document.getElementById("InputMail").style.backgroundColor ='red';
		}
        else{
            document.getElementById("InputMail").style.backgroundColor ='rgb(227, 247, 252)';
        }
	}
	
	if( AntalFejl == 0 )
	{
		return true;
	}
	else
	{
		document.getElementById( 'FejlBesked1' ).innerHTML = FejlBesked1;
		document.getElementById( 'FejlBesked2' ).innerHTML = FejlBesked2;
		document.getElementById( 'FejlBesked3' ).innerHTML = FejlBesked3;
		return false;
	}
}