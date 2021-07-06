import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const People = () => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(allPeople => setPeople(allPeople))
    }, [])



    return (
        <>
            <Navbar></Navbar>
            <div id="generated-people" className="row d-flex justify-content-center">
                <ul className="col-6 text-center">
                    {people.map(person => (
                        <li key={`person-item-${person.name}`} className="list-group-item d-flex justify-content-between align-items-center">
                            {person.name}
                            <Link to={`/people/${person.id}`} className="btn btn-secondary">More Details</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default People;