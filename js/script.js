

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params){
        for(let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if(animItemHeight > window.innerHeight ) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }


            if((window.scrollY > animItemOffset - animItemPoint) && window.scrollY  < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if(!animItem.classList.contains('_anim-stop')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    

    function offset(el) {
        const rect = el.getBoundingClientRect();
        let scrollLeft = window.scrollY || document.documentElement.scrollLeft;
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    },  350);
}



// ===================

var submit = document.getElementById('btn-submit');
submit.addEventListener('click', function (event) {
	event.preventDefault();
	var name = document.getElementById('name-p').value;
    var phone = document.getElementById('phone').value; 
    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var valid = re.test(phone);

	if (name === '' || !valid) {
		swal({
		  type: 'error',
		  title: 'Ошибка',
		  text: 'Пожалуйста введите свои данные',
		})
	} else {
		swal(
			'Отправлено!',
			'скоро с вами свяжутся',
			'success'
		)
	}
}); 

