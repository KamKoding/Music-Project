//itunes
const input = document.querySelector('#search')
const searchBtn = document.querySelector('#searchBtn')
const container = document.querySelector('#search__results')

searchBtn.addEventListener('click', () => {
    iTunes()
})


async function iTunes() {
    const searchTerm = input.value;
    // const getTunes = await fetch(`https://itunes.apple.com/search?term=michaeljackson&entity=song`)
    const getTunes = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&media=music&limit=10`)
    const getTunesJson = await getTunes.json()
    getTunesJson.results.map((song) => {
        console.log(song.trackName)
    })
    // return getTunesJson
    const htmlPayload = getTunesJson.results.map((song) => 
        `<div id="search__results--item">
          <img
            class="search__results--artwork"
            src="${song.artworkUrl100}"
            alt="Album Artwork"
          />
          <div class="search__results--info">
            <h3 class="search__results--title">${song.trackName}</h3>
            <p class="search__results--artist">${song.artistName}</p>
          </div>
        </div>`).join('')
        console.log(container)
    container.innerHTML = htmlPayload
}

//console.log(iTunes())

// function renderTunes() {
//     const htmlPayload = getTunesJson.results.map((song) => 
//         `<div id="search__results--item">
//           <img
//             class="search__result--artwork"
//             src="${song.artworkUrl100}"
//             alt="Album Artwork"
//           />
//           <div class="search__results--info">
//             <h3 class="search__results--title">${song.trackName}</h3>
//             <p class="search__results--artist">${song.artistName}</p>
//           </div>
//         </div>`).join('')
//     container.innerHTML = htmlPayload
// }

// renderTunes()