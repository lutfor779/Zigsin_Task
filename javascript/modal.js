const modal = document.getElementById("modal");

const span = document.getElementById("close");

const render = document.getElementById("render");

const images = document.querySelectorAll("img");

const setImage = (e) => {
	const src = e.target.getAttribute("src");
	const img = document.createElement("img");

	img.setAttribute("src", src);

	render.appendChild(img);

	modal.style.display = "block";
};

for (const item of images) {
	const src = item.getAttribute("src");

	item.addEventListener("click", setImage);
}

span.onclick = function () {
	modal.style.display = "none";
	render.removeChild(render.firstElementChild);
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		render.removeChild(render.firstElementChild);
	}
};
