const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))


// Eye Icon

const visibilityBtn = document.getElementById("visibilityBtn")
visibilityBtn.addEventListener("click", toggleVisibility)

function toggleVisibility() {
	const passwordInput = document.getElementById("password-eye")
	if (passwordInput.type === "password") {
		passwordInput.type = "text"
	} else {
		passwordInput.type = "password"
	}
}

function toggleVisibility() {
	const passwordInput = document.getElementById("password-eye")
	const icon = document.getElementById("icon")
	if (passwordInput.type === "password") {
		passwordInput.type = "text"
		icon.innerText = "visibility"
	} else {
		passwordInput.type = "password"
		icon.innerText = "visibility-off"
	}
}