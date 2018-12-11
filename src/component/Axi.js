const endpoint = 'http://localhost:8800';
const headers = () => {
    const h = new Headers();

    h.append('Content-Type', 'application/json');

    const session = {
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NlbmV1LmtlamFyLmlkL3VuL3Npc3dhL2xvZ2luIiwiaWF0IjoxNTQ0NDk4NTUzLCJuYmYiOjE1NDQ0OTg1NTMsImp0aSI6IlQyQ05Ycll2TWFrb3ZZTE4iLCJzdWIiOiI4ODg4ODgiLCJwcnYiOiIyYjBkZTQ3M2YwOGE4NTU3MjBlNGI0YjMxMDhmMTFmNWI2NjVjMGUwIn0.0onHpBiY9er71vm9ktXtcxFQcj9_sV1zoCKEEML2Csg',
    };

    if (session.token) {
        h.append('Authorization', session.token);
    }

    return h;
};

const request = (method, path, body) => {

    const url = `${endpoint}${path}`;
    const options = { method, headers: headers() };

    if (body) {
        options.body = JSON.stringify(body);
    }
}

const api = {
    get(path) {
        return request('GET', path);
    }
}
export default api;