


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	popupForms('15px');
	visibleListPhone();
	// visibleBtn();
	if(windowWidth < mediaPoint2) {
		popupForms('0');
		burgers();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}


function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);



$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



function popupForms(pr) {

	let popupForms = document.querySelector('.popup')
	let popupFormsTrigger = document.querySelectorAll('.trigger_form')
	let popupFormsClose = document.querySelectorAll('.remove_popup')
	let popupFormsSubmit = popupForms.querySelector('button[type="submit"]')

	popupFormsTrigger.forEach(item => {
		item.addEventListener('click', () => {
				popupForms.classList.add('visible');
				win.style.overflow = "hidden";
				win.style.paddingRight = pr; 
			})
	});


	Array.from(popupFormsClose).map((item) => {
		item.addEventListener('click', () => {
			popupForms.classList.remove('visible')
			win.style.overflow = "";
			win.style.paddingRight = ""; 
		})
	})

	popupFormsSubmit.addEventListener('click', () => {
		popupForms.classList.remove('visible')
		win.style.overflow = "";
		win.style.paddingRight = ""; 
		succes('.succes')
	})
}

function burgerMobile() {
	const triggerBurger = document.querySelector('.header_burger')
	const burgerPopup = document.querySelector('.burger')
	const burgerFail = document.querySelectorAll('.remove')
	
	triggerBurger.addEventListener('click', () => {
		burgerPopup.classList.add('active')
		triggerBurger.classList.add('active')
		win.style.overflow = "hidden";
	})

	Array.from(burgerFail).map((item) => {
		item.addEventListener('click', () => {
			burgerPopup.classList.remove('active')
			triggerBurger.classList.remove('active')
			win.style.overflow = "";
		})
	})

}







$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})




const gallerySlider =  new Swiper('.gallery_slider', {
	centeredSlides: true,
	centeredSlidesBounds: true,
	loop: true,
	grabCursor: true,
	navigation: {
    nextEl: '.nav_next',
    prevEl: '.nav_prev',
  },
	breakpoints: {
		1200: {
			slidesPerView: 1.8,
			spaceBetween: 30,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		}
	}
})

function visibleListPhone() {

	// let phoneParent = document.querySelector('.header_phone_w')
	let triggerBtn = document.querySelector('.header_phoneToggle')

	triggerBtn.addEventListener('click', (e) => {
		if(triggerBtn) {
			e.target.parentNode.classList.toggle('visible')
		}
	})

}

window.onscroll = function showHeader() {
	var header = document.querySelector('.header');
	if(window.pageYOffset > 100){
			header.classList.add('fixed');
	} else{
			header.classList.remove('fixed');
	}
}

function changeTable() {
	const select = document.querySelector('#rate_select')
	let currentItem = document.querySelectorAll('.table_body_item')

	select.addEventListener('change', function(e) {
		let currentOption = select.options[select.selectedIndex].dataset.type
		if(e.target.options) {
			currentItem.forEach(item => {
				if(currentOption != item.dataset.id){
					item.classList.remove('visible')
				} else {
					item.classList.add('visible')
				}
			});
		}
	})
}

changeTable();





function calcParams() {
	let checkInput = document.querySelectorAll('input[type="checkbox"]'); 
	let counts = document.querySelector('.count_rate')
	let price = document.querySelector('.count_price')

	let checked = []; 
	let prices = 0;
	for (let i = 0; i < checkInput.length; i++) {
			if (checkInput[i].checked) {
				checked.push(checkInput[i]);
				let checkedPrice = checkInput[i].parentElement.dataset.price
				console.log(+checkedPrice)
				prices += +checkedPrice
			}
		}
		
	price.innerHTML = +prices
	counts.innerHTML = checked.length
}
function burgers() {
	const mobileNav = document.querySelector('.header_nav')
	const burger = mobileNav.querySelector('ul')
	let bodyFix = document.body
	console.log(mobileNav)
	mobileNav.addEventListener('click', (e) => {
		// if(e.target.classList.contains('header_burger')) {
			burger.classList.toggle('visible')
			e.target.closest('.header').classList.toggle('dark')
			console.log('Good', e.target.closest('.header'))
		// }
	})
}





// function visibleBtn() {
// 	const count = document.querySelectorAll('.reviews_item_txt')
	
// 	Array.from(count).map((item) => {
// 		const btnShow = document.querySelector('.reviews_btn_more')
// 		const current = item.innerHTML.length
// 		if(current <= 90) {
// 			item.nextElementSibling.style="display: none"
// 		}

// 		item.nextElementSibling.addEventListener('click', function() {
// 			item.classList.toggle('active')
// 			this.style="display: none"
// 		})
// 	})
// }



















































