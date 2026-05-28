//itunes
const input = document.querySelector('#search')
const searchBtn = document.querySelector('#searchBtn')

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
}

//console.log(iTunes())

