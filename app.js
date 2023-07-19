let hamburger = document.querySelector('.hamburger-button')
let times = document.querySelector('.times')
let mobileNav = document.querySelector('.mobile-nav')

hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open')
})

times.addEventListener('click',function() {
    mobileNav.classList.remove('open')
})

