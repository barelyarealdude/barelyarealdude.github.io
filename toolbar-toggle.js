function toggleToolbar() {
	var x = document.getElementById("toolbar");
	console.log(x);
	if (x.style.display === "none") {
		x.style.display = "inline";
	} else {
		x.style.display = "none";
	}
}

