const sql = require('better-sqlite3')
const { Sumana } = require('next/font/google')
const db = sql('movies.db')


const dummyMovies = [
   {
    title : 'Stranger Things',
    slug : 'stranger-things',
    image : '/images/stranger-things.jpg',
    summary : 'Set in the 1980s, the series centers on the residents of the fictional small town of Hawkins, Indiana, after a young girl with psychokinetic abilities, named Eleven, opens a gateway between Earth and a hostile alternate dimension known as the Upside Down at a nearby human experimentation facility.',
    genre : 'Horror',
    director : 'the Duffer Brothers',
    actors : 'Mille Bobby Brown,Finn Wolfhard,Noah Schnapp,Caleb McLaughlin,Sadie Sink',
    rating : 8.6,
    creator : 'maryam'
   },
   {
    title : 'Emily in Paris',
    slug : 'emily-in-paris',
    image : '/images/emily-in-parisjpg.jpg',
    summary : 'Emily, an ambitious twenty-something marketing executive from Chicago, unexpectedly lands her dream job in Paris when her company acquires a French luxury marketing company - and she is tasked with revamping their social media strategy.',
    genre : 'Romance',
    director : 'Andrew Fleming',
    actors : 'Lily Collins,Lucas Bravo,Ashley Park,Lucien Laviscount,Camille Razat',
    rating : 6.8,
    creator : 'maryam'
   },
   {
    title : 'Man Vs Baby',
    slug : 'man-vs-baby',
    image : '/images/man-vs-baby.jpg',
    summary : "On his last day as a school caretaker, Trevor Bingley gets stuck with a baby from the school's Nativity play, and he must find the baby's parents before leaving for London to secure a housesitting job.",
    genre : 'Comedy',
    director : 'David Kerr',
    actors : 'Rowan Atkinson,Susannah Fielding,Alanah Bloor,Angus imrie,Robert Bathurst',
    rating : 6.5,
    creator : 'maryam'
   },
   {
    title : 'Hewliusz',
    slug : 'hewliusz',
    image : '/images/heweliusz.jpg',
    summary : 'On January 13, 1993, the passengers and crew of the ferry Heweliusz depart from the port of Świnoujście in Poland towards Ystad in Sweden. The journey soon spirals into a desperate fight for survival as a violent storm confronts them with the brutal power of the sea.',
    genre : 'historical drama',
    director : 'Jan Holoubek',
    actors : 'Konrad Eleryk,Justyna Wasilewska,Magdalena Rozczka,Borys Szyc',
    rating : 7.8,
    creator : "maryam"
   },
   {
    title : 'Inside Furioza',
    slug : 'inside-furioza',
    image : '/images/inside-furioza.jpg',
    summary : 'In the wake of murder, new Furioza leader Golden claims the reins of his violent and formidable hooligan gang and takes on a new focus across borders.',
    genre : 'revenge mystery',
    director : 'Cyprian T. Olencki',
    actors : 'Mateusz Damiecki,Konrad Eleryk,Mateusz Banasiuk,Szymon Bobrowski',
    rating : 6.2,
    creator : 'maryam'
   },
   {
    title: 'The Witcher',
    slug : 'the-witcher',
    image: '/images/the-witcher.jpg',
    summary : 'The story focuses on Geralt of Rivia and Ciri, who are linked by destiny. Ciri, princess of a recently conquered country and a pawn of international politics, becomes a witcher-in-training. Geralt is drawn into a whirlwind of events in his attempts to protect her.',
    genre : 'Drama',
    director : 'Tomasz Bagiński (one of many)',
    actors : 'Henry Cavill,Anya Chalotra,Freya Allan,Eamon Farren,Joey Batey',
    rating : 7.9,
    creator: 'maryam'
   },
   {
    title : '1670',
    slug : '1670',
    image : '/images/1670.jpg',
    summary : "Netflix's 1670 is one of the sharpest period comedies of recent years. Shot in a mockumentary style, it follows Jan Paweł Adamczewski (Bartlomiej Topa), a vain provincial nobleman, and his family, in the Polish-Lithuanian Commonwealth of the late 17th century.",
    genre : 'Comedy',
    director : 'Maciej Buchwald',
    actors: 'Martyna Byczkowska,Michal Sikorski,Kiryl Pietruczuk,Michal BaliCki',
    rating: 7.9,
    creator : 'maryam'
   }
]

db.prepare(`
    CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    genre TEXT NOT NULL,
    director TEXT NOT NULL,
    actors TEXT NOT NULL,
    rating REAL NOT NULL,
    creator TEXT NOT NULL
    )
    `).run()

async function initData(){
    const stmt = db.prepare(`
        INSERT INTO movies VALUES(
        null,
        @title,
        @slug,
        @image,
        @summary,
        @genre,
        @director,
        @actors,
        @rating,
        @creator
        )
        `)
    for (const movie of dummyMovies){
        stmt.run(movie)
    }
}
initData();