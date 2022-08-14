const nav_link1 = document.getElementById('nav-link1')
const nav_link2 = document.getElementById('nav-link2')
const nav_link3 = document.getElementById('nav-link3')
const nav_link4 = document.getElementById('nav-link4')
const nav_link5 = document.getElementById('nav-link5')
const nav = document.getElementById('nav')
const button_get_data = document.getElementById('button_get_data')
const select_form = document.getElementById('select_form')
const button_waifu_img = document.getElementById('button_waifu_img')
const anime_img = document.getElementById('anime_img')
const quotes_list = document.getElementById('quotes_list')
const formulario = document.getElementById('formulario')
const anime_img_2 = document.getElementById('anime_img_2')



const op = document.getElementById('op')

nav_link5.addEventListener('mouseenter',()=>{
    nav_link5.classList.replace('wheat','yellow')
})

nav_link5.addEventListener('mouseleave',()=>{
    nav_link5.classList.replace('yellow','wheat')
})

op.addEventListener('mouseenter',()=>{
    op.classList.replace('normal','opacity')
})

op.addEventListener('mouseleave',()=>{
    op.classList.replace('opacity','normal')
})




button_waifu_img.addEventListener('click',()=>{
    console.log('haz dado click')
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '964fcd4a1amsh80a1cf15eac88b8p1727b3jsn905709607eb7',
            'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
        }
    };
    
    fetch('https://any-anime.p.rapidapi.com/anime', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            console.log(response.stuff[0].image)
            anime_img.src = response.stuff[0].image
        })
        .catch(err => console.error(err));

})

let dataString = undefined

document.querySelector('form')
    .addEventListener('submit', e =>{
        e.preventDefault()
        const data1 = Object.fromEntries(
            new FormData(e.target)    
        )
        console.log(data1.search)
        
        dataString = data1.search
        console.log(dataString)

        const options = {
            method: 'GET',
            headers: {
                    'X-RapidAPI-Key': '964fcd4a1amsh80a1cf15eac88b8p1727b3jsn905709607eb7',
                    'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
                }
            };
            
        fetch(`https://anime-db.p.rapidapi.com/anime?page=1&size=1&search=${dataString}`, options)
            .then(response => response.json())
            .then(response =>{
                console.log(response)
                const fragment = document.createDocumentFragment()
                    const listItem = document.createElement('li')
                    listItem.textContent = `${response.data[0].title} Sinoposis : ${response.data[0].synopsis}`
                    fragment.appendChild(listItem)
                    quotes_list.appendChild(fragment)
                    anime_img_2.src = response.data[0].image

                    if(quotes_list.children[1]){
                        quotes_list.removeChild(quotes_list.children[0])
                        quotes_list.appendChild(fragment)
                    }
                    
            })
            .catch(err => console.error(err));
    })










/* nav.children[0].addEventListener('mouseenter', ()=>{
    nav.children[0].classList.replace('wheat','green')
})

nav.children[0].addEventListener('mouseleave', ()=>{
    nav.children[0].classList.replace('green','wheat')
}) */

nav_link1.addEventListener('mouseenter', ()=>{
    nav_link1.classList.replace('wheat','green')
})

nav_link1.addEventListener('mouseleave', ()=>{
    nav_link1.classList.replace('green','wheat')
    
})

nav_link2.addEventListener('mouseenter', ()=>{
    nav_link2.classList.replace('wheat','green')
})

nav_link2.addEventListener('mouseleave', ()=>{
    nav_link2.classList.replace('green','wheat')
    
})

nav_link3.addEventListener('mouseenter', ()=>{
    nav_link3.classList.replace('wheat','green')
})

nav_link3.addEventListener('mouseleave', ()=>{
    nav_link3.classList.replace('green','wheat')
    
})

nav_link4.addEventListener('mouseenter',()=>{
    nav_link4.classList.replace('wheat', 'green')
})

nav_link4.addEventListener('mouseleave',()=>{
    nav_link4.classList.replace('green', 'wheat')
})

const user_category = document.getElementById('user_category')

user_category.addEventListener('mouseenter',()=>{
    user_category.textContent = 'Sicario Profesional'
    user_category.classList.replace('white','red')
})

user_category.addEventListener('mouseleave',()=>{
    user_category.textContent = 'Desarrollador Web'
    user_category.classList.replace('red','white')
})

const peor = document.getElementById('peor')

peor.addEventListener('mouseenter',()=>{
    peor.textContent= 'peor'
    peor.classList.replace('white', 'red')
})

peor.addEventListener('mouseleave',()=>{
    peor.textContent= 'mejor'
    peor.classList.replace('red', 'white')
})

const contacto1 = document.getElementById('contacto1')
const contacto2 = document.getElementById('contacto2')
const contacto3 = document.getElementById('contacto3')
const contacto4 = document.getElementById('contacto4')

contacto1.addEventListener('mouseenter', () =>{
    contacto1.classList.replace('wheat','green')
})

contacto1.addEventListener('mouseleave', () =>{
    contacto1.classList.replace('green','wheat')
})

contacto2.addEventListener('mouseenter', () =>{
    contacto2.classList.replace('wheat','green')
})

contacto2.addEventListener('mouseleave', () =>{
    contacto2.classList.replace('green','wheat')
})

contacto3.addEventListener('mouseenter', () =>{
    contacto3.classList.replace('wheat','green')
})

contacto3.addEventListener('mouseleave', () =>{
    contacto3.classList.replace('green','wheat')
})

contacto4.addEventListener('mouseenter', () =>{
    contacto4.classList.replace('wheat','green')
})

contacto4.addEventListener('mouseleave', () =>{
    contacto4.classList.replace('green','wheat')
})

const user_img = document.getElementById('user_img')

user_img.addEventListener('mouseenter',() =>{
    user_img.src = 'https://ae01.alicdn.com/kf/Hac78ab7d6dcf4abe9846595c247efbffa/Guts-Rage-Berserk-camisetas-de-Manga-corta-para-hombre-camisas-cl-sicas-de-espadach-n-sacrificio.jpg'
    user_category.textContent = 'Sicario Profesional'
    user_category.classList.replace('white','red')
})

user_img.addEventListener('mouseleave',() =>{
    user_img.src = 'assets/img/guts_175.jpg'
    user_category.textContent = 'Desarrollador Web'
    user_category.classList.replace('red','white')
})
