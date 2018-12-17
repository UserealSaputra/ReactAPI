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
        const req = "https://seneu.kejar.id/un/fe/sudahlatihanto/1/888888";
        // var xtep = new XMLHttpRequest();
        // xtep.open('GET', req, true);
        // xtep.send();
        var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQ0Njg1MDkzLCJuYmYiOjE1NDQ2ODUwOTMsImp0aSI6IkJHcnZKNFpHa0dCVlNFZTkiLCJzdWIiOiIeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQ0Njg3MDU1LCJuYmYiOjE1NDQ2ODcwNTUsImp0aSI6IlVLY3hhMXRTajJXQ2tOUnciLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.FEU5dpJIolTmSPx01JIlgntzClYtFMhrfHd7t833Y6Y4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.yxEs6IvGAiKvPr0GQzZ2KpZZf_mxwzk133sKIu6Xjc4";
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
        const url = `https://seneu.kejar.id/un/fe/sudahlatihanto/1/888888`;
        let myhead = new Headers();
        // myhead.append('Authorization', 'Bearer {{$tok}}');
        // myhead.append('Accept', 'application/json');
        // myhead.append('Content-Type', 'application/json');
        // myhead.append('Access-Control-Request-Method', '*');
        // myhead.append('Access-Control-Request-Headers', 'origin, x-requested-with');
        // myhead.append('Origin', url);
        console.log(myhead);
        // let exap = new XMLHttpRequest();
        // exap.setRequestHeader('Authorization', 'Bearer {{$tok}}');
        // exap.open('GET', url, true);
        // exap.send();
        // var resul = exap.getAllResponseHeaders();
        // console.log(resul);
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
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQ1MDEwMjEzLCJuYmYiOjE1NDUwMTAyMTMsImp0aSI6ImdTTVlkV2MzNjM3TU9JajciLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.DyZOR9SNhu8Efgd39_gKJYkahDOz-d-MacfPcb1keek",
                "Accept": "application/json",
                "Content-Type": "application/json"
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
