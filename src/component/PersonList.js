import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
// import Axi from './Axi';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        const req = 'https://seneu.kejar.id/un/fe/siswa/data/view';
        var xtep = new XMLHttpRequest();
        // xtep.open('GET', req, true);
        // xtep.send();
        var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQ0NDk4NTUzLCJuYmYiOjE1NDQ0OTg1NTMsImp0aSI6IlQyQ05Ycll2TWFrb3ZZTE4iLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.0onHpBiY9er71vm9ktXtcxFQcj9_sV1zoCKEEML2Csg";
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.timeout = 30000;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        // axios.defaults.headers.common['X-Platform'] = Platform.OS;
        // axios.defaults.headers.post['Content-Type'] = 'application/json';

        axios(req, {
            method: 'GET',
            mode: 'no-cors',
            headers:
            {
                'Authorization': `Bearer ${token}`,
                'Accept': `application/json`
            },
            withCredentials: false,
            crossdomain: true,
            credentials: 'same-origin',
            crossdomain: true,

        })
            .then(res => {
                var nom = JSON.stringify(res);
                console.log(nom);
            })
            .catch((error) => {
                console.log("An error has occoured " + error);
            });

    }

    render() {
        return (
            <ul>
                {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}
            </ul>
        )
    }
}
