import React from 'react'
import initialFilms from './data/Films'
import { useState, useEffect } from 'react'

function Main() {

    const [films] = useState(initialFilms)
    const [selectedGenre, setSelectedGenre] = useState("")
    const [filteredFilms, setFilteredFilms] = useState(initialFilms)


    //filtro i film in base al termine di ricerca

    return (

        <div className="container">
            <select className="form-select" >
                <option value="">Seleziona il genere del film</option>
                <option value="1">Fantascienza</option>
                <option value="2">Thriller</option>
                <option value="3">Romantico</option>
                <option value="4">Azione</option>
                <option value="5">Fantascienza</option>
                <option value="6">Thriller</option>
            </select>
            <table className="table my-4">
                <thead >
                    <tr>
                        <th scope="col">Film</th>
                        <th scope="col">Genere</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider" >
                    {initialFilms.map((film, index) => (
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