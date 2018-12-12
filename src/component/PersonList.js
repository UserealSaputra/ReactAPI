import React, { Component } from 'react';
import axios from 'axios';
// import Header from './Header';
// import Axi from './Axi';

export default class PersonList extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        const req = 'https://seneu.kejar.id/un/fe/siswa/data/view';
        // var xtep = new XMLHttpRequest();
        // xtep.open('GET', req, true);
        // xtep.send();
        var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQ0NTg0NDE0LCJuYmYiOjE1NDQ1ODQ0MTQsImp0aSI6InJoUDVHZ1VKT0FXZGtJR0UiLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.nmmCfLW1rKYgsqjctDf-FFFoVSXVYvn-Awyu4Ozqmlg";
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.timeout = 30000;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8800';
        axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
        // axios.defaults.headers.common['X-Platform'] = Platform.OS;
        // axios.defaults.headers.post['Content-Type'] = 'application/json';

        axios.get(req)
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
