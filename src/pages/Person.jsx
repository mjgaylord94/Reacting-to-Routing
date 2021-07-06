import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PersonCard from '../components/PersonCard';

const Person = () => {
    const { personid } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${personid}`)
            .then(res => res.json())
            .then(person => setPerson(person))
    }, []);

    if (person === null) {
        return (
            <>
                <Navbar></Navbar>
            </>
        )
    } else if (person != null) {
        return (
            <>
                <Navbar></Navbar>
                <div id="generated-Person" className="row d-flex justify-content-center">
                    <PersonCard person={person}></PersonCard>
                </div>
            </>
        )
    }

}

export default Person;