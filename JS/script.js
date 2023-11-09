let white = document.querySelector('#White')
let grey = document.querySelector('#Grey')
let img = document.querySelector('.pc')

white.onclick = () => {
    white.classList.add('active')
    grey.classList.remove('active')
    img.style.backgroundImage = 'url("img/mbp14-silver-select-202110 1.png")'
}
grey.onclick = () => {
    grey.classList.add('active')
    white.classList.remove('active')
    img.style.backgroundImage = 'url("img/mbp14-spacegray-select-202110 1.png")'
}





let five = document.querySelector('#five')
let two = document.querySelector('#two')
let six = document.querySelector('#six')
let one = document.querySelector('#one')
let price = document.querySelector('.price')
five.onclick = () => {
    price.innerHTML = "$1,999"
}
two.onclick = () => {
    price.innerHTML = "$2,199"
}
six.onclick = () => {
    price.innerHTML = "$2,599"
}
one.onclick = () => {
    price.innerHTML = "$3,199"
}


