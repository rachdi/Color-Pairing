function iLove(panda,trandance){
	if (trandance==='amour')

		alert("J'aime les panda"+ panda);
	else if (trandance==='haine'){
		alert('je hais les panda'+ panda+',c\'est pour sa que je n\'ouvre jamais la console dev');
	} else {
		alert('what ?!')
	}		
}


function showResult(result){
	alert(result);
}
$("button").click(function () {
	var pandaType=$(this).data('type');
	var trandance=$(this).data('trandance')
	
	iLove(pandaType,trandance);

})
