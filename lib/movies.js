import sql from 'better-sqlite3'

const db = sql('movies.db')

export async function getMovies(){
    return db.prepare('SELECT * FROM movies').all()
}