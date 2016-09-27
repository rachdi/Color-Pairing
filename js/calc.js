function add (a,b){

	var result = a+b;
	return result;

}
function substract(a,b){
	var result =a-b;
	return result;
}
function mult(a,b){
	var result =a*b;
	return result;
}
function divide(a,b){
	var result =a /b ;
	return result;
}


function calc(){
	var operation=process.argv[2];
	var x=process.argv[3];
	var y=process.argv[4];

	var a=parseInt(x,10);
	var b=parseInt(y,10);
	if (operation ==='add') {
		console.log(add(a,b));
	}
		else if (operation === 'mult') {
		console.log(mult(a,b));
	}
	else if (operation === 'divide'){
		console.log(divide(a,b))
	}

	else {
		console.log(substract(a,b));
	}
	
}

	calc();