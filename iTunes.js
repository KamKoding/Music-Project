//itunes

async function iTunes() {
    const getTunes = await fetch(`https://itunes.apple.com/search?term=michaeljackson&entity=song`)
    const getTunesJson = await getTunes.json()
    getTunesJson.results.map((song) => {
        console.log(song.trackName)
    })
    // return getTunesJson
}


console.log(iTunes())

