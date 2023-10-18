document.addEventListener("DOMContentLoaded", function () {
	var button = document.querySelector(".dropbtn");
	var dropdown = document.querySelector(".dropdown-content");
	button.addEventListener("click", function () {
		dropdown.classList.toggle("show");
	});
});

window.addEventListener("click", function (event) {
	var dropdown = document.querySelector(".dropdown-content");
	if (event.target !== dropdown && event.target !== button) {
		dropdown.classList.remove("show");
	}
});
