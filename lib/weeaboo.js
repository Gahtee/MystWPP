const { fetchJson, fetchText } = require('../tools/fetcher')
const config = require('../config.json')

const anime = (title) => new Promise((resolve, reject) => {
    console.log(`Get anime info from Kusonime for ${title}...`)
    fetchJson(`https://arugaz.herokuapp.com/api/kuso?q=${title}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const manga = (title) => new Promise((resolve, reject) => {
    console.log(`Get manga info from Komiku for ${title}...`)
    fetchJson(`https://arugaz.herokuapp.com/api/komiku?q=${title}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const waifu = (nsfw) => new Promise((resolve, reject) => {
    if (nsfw === true) {
        console.log('Get NSFW waifu image...')
        fetchJson('https://waifu.pics/api/nsfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    } else {
        console.log('Get SFW waifu image...')
        fetchJson('https://waifu.pics/api/sfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    }
})

const wait = (imageBase64) => new Promise((resolve, reject) => {
    console.log('Searching for anime source...')
    fetchJson('https://trace.moe/api/search', {
        method: 'POST',
        body: JSON.stringify({ image: imageBase64 }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const anitoki = () => new Promise((resolve, reject) => {
    console.log('Get Anitoki latest update...')
    fetchJson(`https://melodicxt.herokuapp.com/api/anitoki?apiKey=${config.melodic}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const neonime = () => new Promise((resolve, reject) => {
    console.log('Get Neonime latest update...')
    fetchJson('https://enznoire.herokuapp.com/neolatest')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const anoboy = () => new Promise((resolve, reject) => {
    console.log('Get Anoboy on-going...')
    fetchJson(`https://api.vhtear.com/ongoinganoboy&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const snime = () => new Promise((resolve, reject) => {
    console.log('Get anime sticker...')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const loli = () => new Promise((resolve, reject) => {
    console.log('Get random video loli...')
    fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


module.exports = {
    anime,
    manga,
    waifu,
    wait,
    anitoki,
    neonime,
    anoboy,
    snime,
    loli
}
