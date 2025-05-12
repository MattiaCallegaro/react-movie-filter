import React from 'react'
import initialFilms from './data/Films'

function Main() {
    return (

        <div className="container">
            <select className="form-select" aria-label="Default select example">
                <option value="" selected disabled>Seleziona il genere del film</option>
                <option value="1">Fantascienza</option>
                <option value="2">Thriller</option>
                <option value="3">Romantico</option>
                <option value="4">Azione</option>
                <option value="5">Fantascienza</option>
                <option value="6">Thriller</option>
            </select>
            <table class="table">
                <thead >
                    <tr>
                        <th scope="col">Film</th>
                        <th scope="col">Genere</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider" >
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