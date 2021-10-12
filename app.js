const input = document.querySelector('input')
const button = document.querySelector('button')
const parent = document.querySelector('div.grid')
    // console.log(parent)
const getData = async(item) => {
    console.log(item)
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
        // console.log()
        // console.log(data.hits)
    const recipies = data.hits
    recipies.forEach(item => {
        const { recipe } = item
        console.log(item)
        console.log(item.recipies)
        const { label, image, source, calories } = recipe

        const template = `<img class = "card__image"
        src = "${image}" / >
        <div class = "card__data" >
        <div class = "card__info" >
        <h2>${label}</h2> 
            <p>From ${source}</p> 
       </div> 
    <h3 class = "card__price" >${calories.toFixed(2)}</h3> 
    <button class = "card__add" > + < /button> </div >`
        const newCard = document.createElement('article')
        newCard.setAttribute('class', 'card')
            //!Set Attribute is use to add style and etc
        newCard.setAttribute('style', 'color:cyan')
        newCard.setAttribute('style', 'margin-bottom:50px')
        newCard.innerHTML = template
        parent.appendChild(newCard)
    })

}
button.addEventListener('click', (e) => {
    getData(input.value)
})