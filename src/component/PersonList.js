import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        const req = 'https://seneu.kejar.id/un/fe/sudahlatihanto/1/888888';
        var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQzODIxMjQ0LCJuYmYiOjE1NDM4MjEyNDQsImp0aSI6IkFmaFRlYzFVdVBreUZnQ3IiLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.vNoDpzdVmshUYAkfm29T6Y22R3dY7mkwUNCXRpNcncg"
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.get(req, {
            headers:
            {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            },
            // withCredentials: true,
            // credentials: 'same-origin'

        })
            .then(res => {
                var nom = JSON.stringify(res);
                console.log(nom);
            })
            .catch((error) => {
                console.log("An error has occoured " + error);
            });
        let heady = new Headers();
        heady.append('Accept', 'application/json');
        heady.append('Authorization', `Bearer ${token}`);
        let requ = new Request(req, {
            method: 'GET',
            headers: heady,
            mode: 'cors'
        });
        fetch(requ)
            .then((response) => {
                if (response.ok) {
                    console.log(response.json());
                } else {
                    throw new Error("Bad HTPP stuff");
                }
            })
            .then((jsonData) => {
                console.log(jsonData);
            })
            .catch((err) => {
                console.log("Error dectected: " + err.message);
            });
        // fetch('https://seneu.kejar.id/un/fe/sudahlatihanto/1/888888', {
        //     method: 'GET',
        //     headers: { 'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vc2VuZXUua2VqYXIuaWQvdW4vc2lzd2EvbG9naW4iLCJpYXQiOjE1NDM1NDk1MjAsIm5iZiI6MTU0MzU0OTUyMCwianRpIjoicWVldXdXOFFab0JMTzJLdiIsInN1YiI6Ijg4ODg4OCIsInBydiI6IjJiMGRlNDczZjA4YTg1NTcyMGU0YjRiMzEwOGYxMWY1YjY2NWMwZTAifQ.dEPVfXswa8G_67v4cZD8u76flx1CNSpMSzLB5vKDK_k` }
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
