//create objects
//code Reference: https://www.w3schools.com/js/js_project_form_validation.asp
const nameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const dropdownInput = document.getElementById("dropdown");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const dropdownError = document.getElementById("dropdownError");
const messageError = document.getElementById("messageError");
const form = document.getElementById("contactForm");
const result = document.getElementById("result");

//display error
function showError(errorId, message){ 
	errorId.innerHTML = message;
}

//clear the error
function clearError(errorId){
	errorId.innerHTML = "";
}

//validate name
function validateName(){
	let value = nameInput.value.trim();
	if (value.length < 2){
		showError(nameError, "Please enter your full name.");
		return false;
	}
	clearError(nameError);
	return true;
}

//validate email
function validateEmail(){
	let value = emailInput.value.trim();
	if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))){
		showError(emailError, "Enter a valid email address.");
		return false;
	}
	clearError(emailError);
	return true;
}

//validate phone
function validatePhone(){
	let value = phoneInput.value.trim();
	if(!(/^\+?[0-9 ]{7,15}$/.test(value))){
		showError(phoneError, "Enter a valid phone number.");
		return false;
	}
	clearError(phoneError);
	return true;
}

//validate enquiry type
function validateDropdown(){
	if(dropdownInput.value === ""){
		showError(dropdownError, "Please choose an enquiry type.");
		return false;
	}
	clearError(dropdownError);
	return true;
}

//validate message
function validateMessage(){
	let value = messageInput.value.trim();
	if(value.length < 20){
		showError(messageError, "Your message must be at least 20 characters.");
		return false;
	}
	clearError(messageError);
	return true;
}

//validate form
function validateForm(){
	let okName = validateName();
	let okEmail = validateEmail();
	let okPhone = validatePhone();
	let okDropdown = validateDropdown();
	let okMessage = validateMessage();
	return okName && okEmail && okPhone && okDropdown && okMessage;
}

//prevent reloading
form.addEventListener("submit", function(event){
	event.preventDefault();

	//clear result
	result.innerHTML = "";
	
	//validate form
	if (validateForm()){
		result.innerHTML = "Thank you! Your query has been submitted.";
		result.className = "ok";
		form.reset();
	} 
	else{
		result.innerHTML = "Please fix the errors above.";
		result.className = "error";
	}
});

// Clear when user starts typing
form.addEventListener("input", function(){
	result.innerHTML = "";
});

