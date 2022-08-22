
(function(){

const openCloseButton = document.querySelector('#buttonOpenCloseMenu');
const menuMobileItems = document.querySelector('#menu_mobile_items');
const buttonNext = document.querySelector('#next');
const buttonBefore = document.querySelector('#before');
const sliders = document.querySelectorAll('.comments_body');
let value;



//MENU RESPONSIVE, BOTON
openCloseButton.addEventListener('click', e =>{
    menuMobileItems.classList.toggle('menu_mobile_closed');
});

//BUTTOMS COMMENTS
buttonNext.addEventListener('click', () =>{
    changePosition(1);
})
buttonBefore.addEventListener('click', () =>{
    changePosition(-1);
})

//COMENTS SLIDERS
const changePosition = (add) =>{
    const currentComment = document.querySelector('.comments_body--show').dataset.id;
    value = Number(currentComment);
    value += add;

    sliders[Number(currentComment)-1].classList.remove('comments_body--show');
    if(value === sliders.length+1 || value == 0){
        value = value === 0 ? sliders.length : 1;
    }
    
    sliders[value-1].classList.add('comments_body--show');
}


//SCROLLNAV
window.addEventListener('scroll', function(){
    var menuScroll = document.querySelector("header");
    menuScroll.classList.toggle("down", window.scrollY > 0);
});

//SCROLLNAV RESPONSIVE
window.addEventListener('scroll', function(){
    var menuMobile = document.querySelector(".menu_mobile");
    menuMobile.classList.toggle("down_mobile", window.scrollY > 0);
});
})();

//VALIDAR FORMULARIO 
const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    const  response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if(response.ok){
        alert('Gracias por contactarme, en unos momentos contesto')
    }
}
