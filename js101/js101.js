console.log("test")
var me={
	prenom:"bassem",
	nom:"rachdi",
	age:25 ,
	occupation:"dev",
	city:"tlse"
	
};
$("#prenom").html(me.prenom);
$("#nom").html(me.nom);
$("#age").html(me.age);
$("#occupation").html(me.occupation);
$("#city").html(me.city);
function replace(key)
 {
 	$("#"+key).html( me[key] );
	// body...
}
replace('nom');
replace('prenom');
replace('age');