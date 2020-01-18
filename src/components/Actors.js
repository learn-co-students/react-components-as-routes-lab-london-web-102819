import React from 'react';
import { actors } from '../data';

const Actors = () => {
    return (
        <div>
            <h1>Actors Page</h1>
            {actors.map((a, idx) => (
                <div key = {idx}>
                    <h3>{a.name}</h3>
                    <ul>
                        {a.movies.map((m, idx) => <li key = {idx}>{m}</li>)}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Actors;
