import axios from "axios";

const API_KEY = 'AIzaSyAQN5W3LqcxJy71h5uYPmVlYygizlLnnio'

export async function createUser( email, password ){
    console.log(email,password)
    try {
        const response = await axios.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        );
        console.log('Firebase response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Firebase error:', error.response?.data || error.message);
        throw error; 
    }
}

// export default createUser;