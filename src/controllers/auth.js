import decode from 'jwt-decode';
export default class AuthService {
    constructor(domain) {
        this.domain = domain || `https://aht-itravels.herokuapp.com`;
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.FeedImage = 'https://aht-itravels.herokuapp.com/uploads/'
        this.profileImage = 'https://aht-itravels.herokuapp.com/uploads/profile/'
        this.apiUser = 'https://aht-itravels.herokuapp.com/user/'
        this.apiHome = 'https://aht-itravels.herokuapp.com/'
        this.serverSocket = 'https://itravels-socket.herokuapp.com/'

    }
    login(email, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Credentials', 'true');
        if (this.loggedIn()) {
            headers['Authorization'] = `Bearer ${this.getToken()}`;
        }
        return fetch(`${this.domain}/login`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 200)
                    this.setToken(res.token);
                    return Promise.resolve(res);
            })
    }

    getToken() {
        return localStorage.getItem('id_token');
    }
    setToken(idToken) {
        return localStorage.setItem('id_token', idToken);
    }
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
    logOut() {
        localStorage.removeItem('id_token');
    }
    getProfile() {
        if (this.getToken() !== undefined) {

            return decode(this.getToken());
        }
        return null;
    }
    _checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            let err = new Error(response);
            err.response = response;
            throw err
        }
    }

}