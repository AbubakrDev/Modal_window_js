let big = document.querySelector('.big')
let content = document.querySelector('.content')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let project = document.querySelector('.project')

btn2.addEventListener('click' , display)

function display (){
    project.style.display = 'none'
    big.style.display = 'block'
}

btn.addEventListener('click' , display2)

function display2(){
    project.style.display = 'block'
    big.style.display = 'none'
}