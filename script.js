
  $(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:false,
        slidesToShow:1,
        autoplay: true,
        speed:5000,
        autoplaySpeed:100,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.slider2').slick({
        arrows:true,
        dots:false,
        slidesToShow:1,
        autoplay: false,
        speed:1000,
        autoplaySpeed:1000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

$(document).ready(function($) {
	$('.popup-open').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function() {
		if (e.keyCode === 27) {
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});


const burgerMenu = document.querySelector('.header__burger')
const burgerUl = document.querySelector('.burger__menu')
let burgerLinks = burgerUl.querySelectorAll('a')


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    burgerUl.classList.toggle('active')
})

burgerLinks.forEach(item => {
    item.addEventListener('click', () => {
        burgerMenu.classList.remove('active')
        burgerUl.classList.remove('active')
    })
})


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}