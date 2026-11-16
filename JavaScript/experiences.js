//Code Reference for Slideshow: https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;
showSlides(slideIndex);

//Next/previous controls
function plusSlides(n){
	showSlides(slideIndex += n);
}
//Thumbnail image controls
function currentSlide(n){
	showSlides(slideIndex = n);
}
function showSlides(n){
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length){
		slideIndex = 1;
	}
	if (n < 1){
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}
//Experience filters
//code reference: https://www.w3schools.com/howto/howto_js_filter_elements.asp

let currentCategory = "all";
filterSelection("all");

function filterSelection(c){
	currentCategory = c;
	let x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++){
		RemoveClass(x[i], "show");
		if(x[i].className.indexOf(c) > -1 && matchesPrice(x[i])) AddClass(x[i], "show");
	}
}

//code reference: https://www.w3schools.com/tags/att_data-.asp
function matchesPrice(card){
		let price = Number(card.dataset.price);
		let range = document.getElementById("priceFilter").value;
		if (range == "under100") return price < 100;
		if (range == "100to400") return price >= 100 && price <= 400;
		if (range == "over400") return price > 400;
		return true;
}
//code reference: https://www.w3schools.com/howto/howto_js_filter_elements.asp
function AddClass(element, name){
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++){
		if (arr1.indexOf(arr2[i]) == -1){
			element.className += " " + arr2[i];
		}
	}
}
function RemoveClass(element, name){
	let i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++){
		while (arr1.indexOf(arr2[i]) > -1){
			arr1.splice(arr1.indexOf(arr2[i]), 1);
			}
	}
	element.className = arr1.join(" ");
}
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++){
	btns[i].addEventListener("click", function(){
		let current = btnContainer.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}
document.getElementById("priceFilter").addEventListener("change", function(){
	filterSelection(currentCategory);
});

			

