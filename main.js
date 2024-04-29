const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const again = document.querySelector('button')
const score = document.querySelector('header span')
const res = document.querySelector('h2 span')

const jo = document.querySelector('.jo')
const ken = document.querySelector('.ken')
const po = document.querySelector('.po')

const containerYou = document.querySelector('.containerYou')
const containerHouse = document.querySelector('.containerHouse')

let youPicked = ''
let housePicked = ''
let divCloneYou = ''
let divCloneHouse = ''
let contador = 0

screen2.style.display = "none";

document.querySelectorAll(".screen1 .item").forEach(function(card){
    card.addEventListener('click', function(){     

        youPicked = card
        
        sorted() 
        inner()
        resolt()
        screen1.style.display = "none";
        screen2.style.display = ""     
        
    })
})

function inner(){
    divCloneYou = youPicked.cloneNode(true)
    divCloneHouse = housePicked.cloneNode(true)
    containerYou.append(divCloneYou)
    containerHouse.append(divCloneHouse) 
}

again.addEventListener('click', () =>{
    divCloneYou.remove()
    divCloneHouse.remove()
    screen1.style.display = "";
    screen2.style.display = "none"
    //screen1.classList.toggle("hide")
    //screen2.classList.toggle("hide")
    screen1.append(jo, ken, po)
})

function sorted(){
    const myArray = [jo, ken, po];
    const indiceAleatorio = Math.floor(Math.random() * myArray.length);
    const elementoSorteado = myArray[indiceAleatorio];
    housePicked = elementoSorteado
}

function resolt(){

    switch(true){
        case (youPicked === housePicked):
            res.innerHTML = "DRAW"
            break
        case (youPicked === jo && housePicked === po):
            show()
            break
        case (youPicked === ken && housePicked === jo):
            show()
            break
        case (youPicked === po && housePicked === ken):
            show()
            break
        default:
            res.innerHTML = "LOST"
    }
}

function show(){
    res.innerHTML = "WIN"
    contador++
    score.innerHTML = contador
}