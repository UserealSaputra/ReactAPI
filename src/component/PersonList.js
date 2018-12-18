import React, { Component } from 'react';
import axios from 'axios';
// import cors from 'cors';
// import Header from './Header';
// import Axi from './Axi';

export default class PersonList extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        // const ex_link = "https://cors-anywhere.herokuapp.com/";
        const req = "https://seneu.kejar.id/un/fe/sudahlatihanto/1/888888";
        // var xtep = new XMLHttpRequest();
        // xtep.open('GET', req, true);
        // xtep.send();
        var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQ1MTAzMzYxLCJuYmYiOjE1NDUxMDMzNjEsImp0aSI6IkozZm91clhkWnRTWnFVbnkiLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.ZcWj9WCNa0gD_dVBEE69Zc11tvkdSchuBwvqLRhZAts";
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        axios.defaults.timeout = 30000;
        axios.defaults.headers.common['Content-Type'] = 'application/json';
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'false';
        // axios.defaults.headers.common['X-Platform'] = Platform.OS;
        // axios.defaults.headers.post['Content-Type'] = 'application/json';

        axios.get(req)
            .then(res => {
                var nom = res;
                console.log(nom.data);
            })
            .catch((error) => {
                console.log("An error has occoured " + error);
            });
        const url = `https://seneu.kejar.id/un/fe/sudahlatihanto/1/888888`;
        let myhead = new Headers();
        myhead.append('Authorization', 'Bearer {{$tok}}');
        myhead.append('Accept', 'application/json');
        myhead.append('Content-Type', 'application/json');
        myhead.append('Access-Control-Request-Method', '*');
        myhead.append('Access-Control-Request-Headers', 'origin, x-requested-with');
        myhead.append('Origin', url);
        console.log(myhead);
        var num = new Request(url, {
            mode: 'no-cors',
            method: 'GET',
            credentials: 'include',
            // cache: 'no-cache',
            // redirect: 'follow',
            headers: myhead,
            // {
            // 'Authorization': 'Bearer {{$tok}}',
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // 'Access-Control-Request-Headers' : true,
            // 'Access-Control-Request-Method' : true,
            // }
        });
        console.log(num);
        fetch(url, {
            mode: 'no-cors',
            method: 'GET',
            credentials: 'include',
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQ1MTA1Njc1LCJuYmYiOjE1NDUxMDU2NzUsImp0aSI6IktKNWJNUzFJYTUwbG9zY1MiLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.o4NXKVBtE_Crt--XhRy-1lSyVOg7aoo1EUPHC1rxvO4",
                Accept: "application/json",
                // Content-Type: "application/json",
                Origin: "https://seneu.kejar.id/un/fe/sudahlatihanto/1/888888"
            }
            // myhead
        })
            .then(function (response) {
                console.log("Response Status : " + response.status);
                console.log("Response Status Text : " + response.statusText); //=> String
                console.log("Response Headers : " + response.headers);//=> Headers
                console.log("Response URL : " + response.url);
            })
            .then(function (data) {
                console.log(data);
            })
            .catch(function (err) {
                console.log(err);
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
