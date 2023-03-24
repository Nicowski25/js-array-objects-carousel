//creo l'array delle immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/* //funzione per stampare in dom
function printToDOM(id, text) {
    document.querySelector(id).innerHTML += text
}

//creo l'array delle immagini
const images = album.map(pic => pic.image);
console.log(images);

//immagini che vogliamo inserire nella dom
let i = 0
while (i < images.length) {
    const carouselImage = `
    <img src="./assets/${images[i]}" class="w-100" alt="">
    `
    printToDOM('#carousel', carouselImage)
    if (i == 0) {
        document.querySelector('img').classList.add('active')
    }
    i++
} */

let active_slide = 0
const slides_dom_element = document.getElementById('slides')
const thumbs_dom_element = document.querySelector('thumbs')
const prev_dom_element = document.querySelector('button.prev')
const next_dom_element = document.querySelector('button.next')
const slider_dom_element = document.querySelector('slider')

images.forEach((slide, index) => {
    const slide_markup= `
    <div class="slide" ${index === active_slide ? 'active' : ''}>
        <img src="./assets/${slide.image}">
        <div class="text">
            <h3>${slide.title}</h3>
            <p>${slide.text}</p>
        </div>
    </div>
    `
    slides_dom_element.insertAdjacentElement('beforeend', slide_markup)

    const thumb_markup = `<img src="./assets/${slide.image}" class="${index === active_slide ? 'active' : ''}>`
    thumbs_dom_element.insertAdjacentElement('beforeend', thumb_markup)
}
)

next_dom_element.addEventListener('click', next)

function next() {
    //incremento il counter per la prossima slide attiva
    //controlliamo se siamo all'ultimo elemento della array e nel caso settiamo active slide = 0
    if (active_slide === images.length -1) {
        active_slide = 0
    } else {
        active_slide ++
    }
    //selezioniamo slide corrente
    const current_slide = document.querySelector('.slide.active')
    //rimuoviamo classe active
    current_slide.classList.remove('active')
    //selezioniamo prossima immagine dalla lista
    const next_slide = document.querySelectorAll('.slide')[active_slide]
    next_slide.classList.add('active')
    //seleziono il thumbnail
    const current_thumb = document.querySelector('.thumb > img.active')
    current_thumb.classList.remove('active')
    //selezioniamo il prossimo thumb
    const next_thumb = document.querySelectorAll('.thumb > img')[active_slide]
    //aggiungiamo la classe active
    next_thumb.classList.add('active')
}


prev_dom_element.addEventListener('click', prev)

function prev() {
    //decrementiamo il counter per la prossima slide attiva
    //controlliamo se siamo all'primo elemento della array e nel caso settiamo active slide = -1
    if (active_slide === 0) {
        active_slide = images.length - 1
    } else {
        active_slide --
    }
    //selezioniamo slide corrente
    const current_slide = document.querySelector('.slide.active')
    //rimuoviamo classe active
    current_slide.classList.remove('active')
    //selezioniamo prossima immagine dalla lista
    const next_slide = document.querySelectorAll('.slide')[active_slide]
    next_slide.classList.add('active')
    //seleziono il thumbnail
    const current_thumb = document.querySelector('.thumb > img.active')
    current_thumb.classList.remove('active')
    //selezioniamo il prossimo thumb
    const next_thumb = document.querySelectorAll('.thumb > img')[active_slide]
    //aggiungiamo la classe active
    next_thumb.classList.add('active')
}

//bonus 2 autoplay
let autoplay 
autoplay = setInterval(() => {}, 3000)


//bonus 3
slider_dom_element.addEventListener('mouseenter', function() {
    clearInterval(autoplay)
})
//quando il mouse esce dallo slider
slider_dom_element.addEventListener('mouseleave', function() {
    autoplay = setInterval(next, 3000)
})


