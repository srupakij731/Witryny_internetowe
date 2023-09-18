var polska = 0;
var reszta = 0;
function strzel() {
	var x = Math.floor(Math.random() * 1000);
	if(x%2){
		polska++;
		document.getElementById('polska').innerHTML = polska;
	}
	else{
		reszta++;
		document.getElementById('reszta').innerHTML = reszta;
	}
}