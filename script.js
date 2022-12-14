'use strict'
const showMenu = document.querySelector('.menu')
const nav = document.querySelector('nav')
showMenu.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        document.querySelector('.close-menu').classList.toggle('toggle')
        document.querySelector('.show-menu').classList.toggle('toggle')
        nav.classList.toggle('m-none')
    }
})