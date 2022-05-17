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

const container = document.querySelector(".container")
      PwShowHide = document.querySelectorAll(".showHidePw")
      PwFields = document.querySelectorAll(".password")

      // JS code to show/hide password and change icon 
      PwShowHide.forEach(eyeIcon => {
      	eyeIcon.addEventListener("click" , => {
      		PwFields.forEach(PwFields => {
      			if(PwFields.type ==="password") {
      				PwFields.type = "text";
      			}else{
      				PwFields.type = "password"
      			}
      		})
      	})
      })
