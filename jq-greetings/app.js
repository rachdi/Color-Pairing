


/*Récuperez les valeurs des champs du formulaire et en faire
 un joli objet qui sera affiché dans la console.*/
$("button").click(function () {
	var profile={
		prenom:$("#first_name").val(),
		nom:$("#last_name").val(),
		ville:$("#city").val()
};	
	

$("#username").text(profile.prenom+" "+profile.nom+" "+profile.ville);

	
});


/*Concaténez les champs firs_name et last_name et dites bonjour
 à notre cher visiteur dans le titre en replacant le contenu 
 du span #username*/
	


