function wypisanie() {
	var x = Math.floor(Math.random() * 1000);
	if(x%2) document.getElementById('kontener').innerHTML += "<div style='width:100%; color:white; background:red; padding:2px; text-align:center;'>Polska!</div>";
	else document.getElementById('kontener').innerHTML += "<div style='width:100%; color:red; background:white; padding:2px; text-align:center;'>Biało-czerwoni!</div>";
}