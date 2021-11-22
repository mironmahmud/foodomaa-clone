// common varible 
let body = document.querySelector('body');

// Element show style
const showStyle = {
    opacity: '1',
    visibility: 'visible',
}

// Element hide style
const hideStyle = {
    opacity: '0',
    visibility: 'hidden',
}


// Search layout show
let searchOpen = document.querySelector('.search-open');
let searchClose = document.querySelector('.search-close');
let searchLayout = document.querySelector('.internal-layout.search');

searchOpen.addEventListener('click', function() {
    Object.assign(searchLayout.style, showStyle)
    body.style.overflow = 'hidden'
})

searchClose.addEventListener('click', function() {
    Object.assign(searchLayout.style, hideStyle)
    body.style.overflowY = 'scroll'
})


// Alert layout show
let alertOpen = document.querySelector('.alert-open');
let alertClose = document.querySelector('.alert-close');
let alertLayout = document.querySelector('.internal-layout.alert');

alertOpen.addEventListener('click', function() {
    Object.assign(alertLayout.style, showStyle)
    body.style.overflow = 'hidden'
})

alertClose.addEventListener('click', function() {
    Object.assign(alertLayout.style, hideStyle)
    body.style.overflowY = 'scroll'
})


// favorite layout show
let favorOpen = document.querySelector('.favor-open');
let favorClose = document.querySelector('.favor-close');
let favorLayout = document.querySelector('.internal-layout.favor');

favorOpen.addEventListener('click', function() {
    Object.assign(favorLayout.style, showStyle)
    body.style.overflow = 'hidden'
})

favorClose.addEventListener('click', function() {
    Object.assign(favorLayout.style, hideStyle)
    body.style.overflowY = 'scroll'
})


// customize layout show
let customizeOpen = document.querySelector('.customize-open');
let customizeClose = document.querySelector('.customize-close');
let customizeLayout = document.querySelector('.internal-layout.customize');

customizeOpen.addEventListener('click', function() {
    Object.assign(customizeLayout.style, showStyle)
    body.style.overflow = 'hidden'
})

customizeClose.addEventListener('click', function() {
    Object.assign(customizeLayout.style, hideStyle)
    body.style.overflowY = 'scroll'
})


// Header fixed when scroll
window.addEventListener('scroll', ()=> {
    let mainHeader = document.querySelector('.main-header');
    mainHeader.classList.toggle('sticky', window.scrollY > 0);
})

