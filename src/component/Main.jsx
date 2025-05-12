import React from 'react'
import initialFilms from './data/Films'

function Main() {
    return (
        <>
            <div className="container">
                <table class="table">

                    <thead >
                        <tr>
                            <th scope="col">Film</th>
                            <th scope="col">Genere</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider" >
                        {initialFilms.map((film, index) => (
                            <tr key={film.index}>
                                <td>{film.title}</td>
                                <td>{film.genre}</td>
                            </tr>


                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Main