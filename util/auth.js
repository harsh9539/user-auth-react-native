import axios from "axios";


const API_KEY = 'AIzaSyBHMrpSnwdlDKeAHmC04MU7cU6ViSYjde0';


const BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;



export async function createUser(email,password){
    const response = await axios.post(BASE_URL,{
        email:email,
        password:password,
        returnSecureToken:true
    })
    // console.log(response.data);
}
export async function login(email,password){
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,{
        email:email,
        password:password,
        returnSecureToken:true
    })
    console.log(response.data);
}