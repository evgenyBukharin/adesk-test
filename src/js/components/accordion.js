const accordions = document.querySelectorAll(".faq__accordion");
let currentOpenedAccordion = null;

accordions.forEach((el) => {
	el.addEventListener("click", (e) => {
		const self = e.currentTarget;

		if (currentOpenedAccordion !== self) {
			accordions.forEach((el) => {
				el.classList.remove("faq__accordion-opened");
				el.querySelector(".faq__content").style.maxHeight = null;
			});
		}

		const controlBtn = self.querySelector(".faq__btn");
		const content = self.querySelector(".faq__content");

		self.classList.toggle("faq__accordion-opened");

		if (self.classList.contains("faq__accordion-opened")) {
			controlBtn.setAttribute("aria-expanded", true);
			content.setAttribute("aria-hidden", false);
			content.style.maxHeight = `${content.scrollHeight}px`;
		} else {
			controlBtn.setAttribute("aria-expanded", false);
			content.setAttribute("aria-hidden", true);
			content.style.maxHeight = null;
		}
		currentOpenedAccordion = self;
	});
});

currentOpenedAccordion = accordions[0];
accordions[0].click();
