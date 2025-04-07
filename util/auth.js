import axios from "axios";

const API_KEY = 'AIzaSyAQN5W3LqcxJy71h5uYPmVlYygizlLnnio'

// export async function createUser( email, password ){
//     console.log(email,password)
//     try {
//         const response = await axios.post(
//             'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
//             {
//                 email: email,
//                 password: password,
//                 returnSecureToken: true
//             }
//         );
//         console.log('Firebase response:', response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Firebase error:', error.response?.data || error.message);
//         throw error; 
//     }
// }

export async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    console.log(response.data);
    const token = response.data.idToken;

    return token;
}

// export async function createUser(email, password) {
//     console.log('signup with auth')
//     await authenticate('signUp', email, password);
// }

// export async function login(email, password) {
//     console.log('login with auth')
//     await authenticate('signInWithPassword', email, password);
// }


export function createUser(email, password) {
    console.log('signup with auth')

    return authenticate('signUp', email, password);
}

export function login(email, password) {
    console.log('login with auth')
    return authenticate('signInWithPassword', email, password);
}