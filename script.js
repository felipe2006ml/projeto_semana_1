var data = document.querySelector('.date')
data.innerHTML = new Date().toLocaleString()

var imagem = document.querySelector('#img-div img')

function changeImg() {
    var imagemId = imagem.id
    if(imagemId == 1) {
        imagem.setAttribute('src', 'img/Singedpng2.png')
        imagem.setAttribute('id', 2)
    }
    else if(imagemId == 2) {
        imagem.setAttribute('src', 'img/Singedpng1.png')
        imagem.setAttribute('id', 1)
    }
}

function changeText () {
    var texto = document.querySelector('#title h1')
    var textoClass = texto.className
    if(textoClass == 1) {
        texto.innerHTML = 'Que tal um drink?'
        texto.setAttribute('class', 2)
    }
    else if(textoClass == 2) {
        texto.innerHTML = 'Singed'
        texto.setAttribute('class', 1)
    }

}
