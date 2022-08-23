import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=4bb6d5551c43447faf7d3a2e012a0159&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-read-playback-state%20user-modify-playback-state"
const code = new URLSearchParams(window.location.search).get('code')

function Login() {
    return (
        <div>
            <a className='mr-4 ml-4 text-gray-300 hover:text-white duration-300' href={AUTH_URL}>{code ? "Logout" : "Login"}</a>
        </div>
    )
}

export default Login