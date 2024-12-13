const header = document.querySelector('header')
const section = document.querySelector('section')
const requestURL = 'https://semegenkep.github.io/json/example.json'

const populateHeader = (superHeroes) => {
    header.innerHTML = `
        <h1>${superHeroes.squadName}</h1>
        <p>Hometown: ${superHeroes.homeTown} // Formed: ${superHeroes.formed}</p>
    `
}

const showHeroes = (superHeroes) => {
    section.innerHTML = superHeroes.members.map(hero =>
        `
            <article>
                <h2>${hero.name}</h2>
                <p>Secret Identity: ${hero.secretIdentity}</p>
                <p>Age: ${hero.age}</p>
                <p>Superpowers: </p>
                <ul>
                    ${hero.powers.map(power => `
                       <li>${power}</li>    
                    `).join('')}
                </ul>
            </article>
        `
    ).join('')
}

document.addEventListener('DOMContentLoaded', () => {
    const request = new XMLHttpRequest()
    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()

    request.onload = () => {
        const superHeroes = request.response
        populateHeader(superHeroes)
        showHeroes(superHeroes)
    }
})