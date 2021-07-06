import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Films = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(allFilms => setFilms(allFilms))
    }, [])


    return (
        <>
            <Navbar></Navbar>
            <div id="generated-films" className="row d-flex justify-content-center">
                <ul className="col-6">
                    {films.map(film => (
                        <li key={`film-item-${film.title}`} className="list-group-item d-flex justify-content-between align-items-center">
                            {film.title}
                            <Link to={`/films/${film.id}`} className="btn btn-secondary">More Details</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Films;