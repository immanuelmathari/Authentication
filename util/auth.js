import axios from "axios";

const API_KEY = 'AIzaSyAQN5W3LqcxJy71h5uYPmVlYygizlLnnio'

async function createUser({ email, password }){
    await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY, {
        email: email,
        password: password,
        returnSecureToken: true
    });
}

// export default createUser;