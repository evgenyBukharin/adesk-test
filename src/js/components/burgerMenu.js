const menu = document.querySelector(".menu");
const burger = document.querySelector(".header__burger");
const body = document.querySelector(".page__body");

burger.addEventListener("click", () => {
	if (!burger.classList.contains("burger--active")) {
		menu.style.transform = "translateX(0)";
		menu.style.opacity = "1";
		burger.classList.add("burger--active");
		body.style.overflow = "hidden";
	} else {
		menu.style.transform = "translateX(100%)";
		burger.classList.remove("burger--active");
		body.style.overflow = "visible";
	}
});
