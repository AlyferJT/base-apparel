const form = document.querySelector(".content__info__form");
const emailInput = document.querySelector(".content__info__form__email");

function validateEmail(email) {
	// EMAIL VALIDATION WITH REGEX
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailPattern.test(email);
}

form.addEventListener("submit", (e) => {
	const emailValue = emailInput.value;

	if (validateEmail(emailValue)) {
		window.alert("Well done! :D");
	} else {
		form.classList.add("email-error");
	}

	e.preventDefault();
});
