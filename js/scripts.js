

	/*  Листаем сервисы -----*/
		let names = document.querySelectorAll(".main-service__names li");
		let name = "";

		let service1 =  document.querySelector(".main-service__item:nth-child(1)");
		let service2 =  document.querySelector(".main-service__item:nth-child(2)");
		let service3 =  document.querySelector(".main-service__item:nth-child(3)");	

		for (let k = 1; k <= names.length; k++) {

			name = ("name" + k);

			name = document.querySelector(".main-service__names  li:nth-child(" + k + ")");

			name.addEventListener("click", function (evt) {
	    		evt.preventDefault();
	    		
	    		if ((this) == this.parentElement.children[0]) {
	    			service1.style.cssText = "display:flex";
	    			service2.style.cssText = "display:none";
	    			service3.style.cssText = "display:none";
	    		} 

	    		if ((this) == this.parentElement.children[1]) {
	    			service2.style.cssText = "display:flex;";
	    			service1.style.cssText = "display:none";
	    			service3.style.cssText = "display:none";

	    			this.parentElement.children[0].children[0].children[0].classList.remove("service-active");
	    		}

	    		if ((this) == this.parentElement.children[2]) {
	    			service3.style.cssText = "display:flex;";
	    			service1.style.cssText = "display:none";
	    			service2.style.cssText = "display:none";

	    			this.parentElement.children[0].children[0].children[0].classList.remove("service-active");
	    		}    		
	    	});
		};
	/* ----- Листаем сервисы */

	/* Щелкаем слайдер ---- */
		let controls = document.querySelectorAll(".main-slider__controls i");
		let control = "";

		let slide1 =  document.querySelector(".main-slider__item:nth-child(1)");
	    let slide2 =  document.querySelector(".main-slider__item:nth-child(2)");
	    let slide3 =  document.querySelector(".main-slider__item:nth-child(3)");

		for (let j = 1; j <= controls.length; j++) {

			control = ("control" + j);

			control = document.querySelector(".main-slider__controls i:nth-child(" + j + ")");

			control.addEventListener("click", function (evt) {
	    		evt.preventDefault();

	    		if ((this) == this.parentElement.children[0]) {
	    			this.classList.add("active");
	    			this.parentElement.children[1].classList.remove("active");
	    			this.parentElement.children[2].classList.remove("active");

	    			slide1.style.cssText = "display:flex; justify-content:flex-start; position:relative";
	    			slide2.style.cssText = "display:none";
	    			slide3.style.cssText = "display:none";

	    			slide1.classList.add("slide1");

	    		} 

	    		if ((this) == this.parentElement.children[1]) {
	    			this.classList.add("active");
	    			this.parentElement.children[0].classList.remove("active");
	    			this.parentElement.children[2].classList.remove("active");

	    			slide2.style.cssText = "display:flex; justify-content:flex-start; position:relative";
	    			slide1.style.cssText = "display:none";
	    			slide3.style.cssText = "display:none";

	    			slide2.classList.add("slide2");
	    		}

	    		if ((this) == this.parentElement.children[2]) {
	    			this.classList.add("active");
	    			this.parentElement.children[0].classList.remove("active");
	    			this.parentElement.children[1].classList.remove("active");

	    			slide3.style.cssText = "display:flex; justify-content:flex-start; position:relative";
	    			slide2.style.cssText = "display:none";
	    			slide1.style.cssText = "display:none";

	    			slide3.classList.add("slide3");
	    		}
			});
		}
	/* ----- Щелкаем слайдер */

	/*  Бренды, смена картинки -----*/

		function hoverBrands(brand) {
			brand.addEventListener("mouseover", function (evt) {
		    		evt.preventDefault();
		    		this.children[1].classList.remove("visually-hidden");
		    		this.children[0].classList.add("visually-hidden");

		    		this.addEventListener("mouseout", function (evt) {
		    			evt.preventDefault();
		    			this.children[0].classList.remove("visually-hidden");
		    			this.children[1].classList.add("visually-hidden")
		    		});
		    });			
		}

		let brands = document.querySelectorAll(".main-brands__item");

		for (let b = 1; b <= brands.length; b++) {

			let brand = "";
			brand = ("brend" + b);
			brand = document.querySelector(".main-brands__item:nth-child(" + b + ") a");			

			hoverBrands(brand);
		}

	/*  ----- Бренды, смена картинки */

	/*--- "Напишите нам", карта ---*/
	let linkMail = document.querySelector(".sendmail-button");

	let popup = document.querySelector(".modal-write");
	let close = popup.querySelector(".write-close");

	let form = popup.querySelector(".write-form");
	let userName = popup.querySelector("[name=name]");
	let userEmail = popup.querySelector("[name=email]");

	let isStorageSupport = true;
	let storage = "";

	let linkMap = document.querySelector(".main-about__contacts-map");

	let mapPopup = document.querySelector(".modal-map");
	let mapClose = document.querySelector(".map-close");

	try {
		storage = localStorage.getItem("email");
	} catch (err) {
		isStorageSupport = false;
	}

	linkMail.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");

		if (storage) {
			userEmail.value = storage;
			userName.focus();
		} else {
			userEmail.focus();
		}
	});

	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});

	form.addEventListener("submit", function (evt) {
		if (!userName.value || !userEmail.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("email", userEmail.value);
			}
		}
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
		}
	});

	linkMap.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.add("modal-show");
	});

	mapClose.addEventListener("click", function (evt) {
		evt.preventDefault();
		mapPopup.classList.remove("modal-show");
	});

	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (mapPopup.classList.contains("modal-show")) {
				mapPopup.classList.remove("modal-show");
			}
		}
	});