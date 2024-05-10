document.addEventListener("DOMContentLoaded",function() {
    const characterContainer = document.getElementById("characters-container")
    fetch("https://rickandmortyapi.com/api/character")
    .then(response=> response.json())
    .then(data=> 
        data.results.forEach(character => {
            const card= document.createElement("div")
            card.classList.add("card")

            const image= document.createElement("img")
            image.src=character.image
            image.alt=character.name

            const name= document.createElement("h3")
            name.textContent=character.name
            
            const species=document.createElement("p")
            species.textContent=`Species : ${character.species}`

            const status=document.createElement("p")
            status.textContent=`Status : ${character.status}`

            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(species)
            card.appendChild(status)

            characterContainer.appendChild(card)
        })


    )
    .catch(error=>console.error(error))
})