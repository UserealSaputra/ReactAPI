import React, { Component } from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        let req = `http://dev.kejar.id/un/fe/sudahlatihanto/1/888888`;
        // axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQzNDU4MTQ5LCJuYmYiOjE1NDM0NTgxNDksImp0aSI6InFsVlJqVDdVUmoxRWhkcjYiLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.qgdJdz2gSWXzd_AG73uuuX3l4o_2cNQ75C7guAc14KY';

        axios.get(req, { headers: { "Authorization": `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGV2LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQzNDY5MjcxLCJuYmYiOjE1NDM0NjkyNzEsImp0aSI6IjhrTGJOTjFHRTJqajE2c3kiLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.n9FM010N_dpFFFts_jYeGdVuYlDIfTysKj49Kpv50lI` } })
            .then(res => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })
        // fetch('https://seneu.kejar.id/un/fe/sudahlatihanto/1/888888', {
        //     method: 'GET',
        //     headers: '{ "Authorization" : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQzNDY1NjMyLCJuYmYiOjE1NDM0NjU2MzIsImp0aSI6ImxuSmhCMmRNbUdqRUhSTmciLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.9ApW_65tehwBvj5AdF-yb-xZwUp86LHabVzhDO0g5G8` }'
        // })
        //     // .then(response => response.json())
        //     .then(response => {
        //         if (response !== null) {

        //             if (response.status === 200) {
        //                 console.log(response);
        //             } else {
        //                 console.log("error");
        //             }
        //         }
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        )
    }
}
