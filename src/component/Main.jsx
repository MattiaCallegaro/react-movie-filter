import React from 'react'
import initialFilms from './data/Films'
import { useState, useEffect } from 'react'

function Main() {
    // stato con i dati dei film presi dall'array è read-only 
    const [films] = useState(initialFilms)
    //lo stato per i generi di select
    const [selectedGenre, setSelectedGenre] = useState("")
    //lo stato per i generi nella tabella
    const [filteredFilms, setFilteredFilms] = useState(initialFilms)
    //lo stato per cercare i film
    const [search, setSearch] = useState("")


    //filtro i film in base al termine di ricerca usando useEffect con filter applicato al select
    useEffect(() => {
        if (!selectedGenre) {
            setFilteredFilms(films)
        }
        else {
            const filtered = films.filter(film =>
                film.genre.toLowerCase() === selectedGenre.toLowerCase()
            )
            setFilteredFilms(filtered)
        }
        //dipendenza
    }, [selectedGenre, films])

    //filtro i film in base al termine di ricerca usando useEffect con filter applicato all'input
    useEffect(() => {
        const filtered = films.filter(film =>
            film.title.toLowerCase().includes(search.toLowerCase())
        )
        setFilteredFilms(filtered)
    }, [search, films])

    return (

        <div className="container">
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Cerca un film..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select className="form-select"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
            >
                <option value="">Seleziona il genere del film</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
            </select>
            <table className="table my-4">
                <thead >
                    <tr>
                        <th scope="col">Film</th>
                        <th scope="col">Genere</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider" >
                    {filteredFilms.map((film, index) => (
                        <tr key={index}>
                            <td>{film.title}</td>
                            <td>{film.genre}</td>
                        </tr>


                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Main