import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FilmCard from '../components/FilmCard';

const Film = () => {
    const { filmid } = useParams();
    const [film, setFilm] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(res => res.json())
            .then(film => setFilm(film))
    }, []);

    if (film === null) {
        return (
            <>
                <Navbar></Navbar>
            </>
        )
    } else if (film != null) {
        return (
            <>
                <Navbar></Navbar>
                <div id="generated-film" className="row d-flex justify-content-center">
                    <FilmCard film={film}></FilmCard>
                </div>
            </>
        )
    }

}

export default Film;