import React from 'react'
import spotifylogo from '../images/spotify-logo.png'
import dingalalogo from '../images/dingaladong-logo.png'
import Login from './Login'
const code = new URLSearchParams(window.location.search).get('code')

function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center w-full text-white p-3 font-spotify flex-grow-0">
      <div className='flex flex-row items-center'>
        {/* Spotify logo */}
        <img src={spotifylogo} alt='Spotify' className="w-10 h-10 mr-3"></img>

        {/* Cross shape */}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

        {/* Dingaladong logo */}
        <img src={dingalalogo} alt='Dingaladong' className='w-12 h-12 mr-3'></img>
        Spotify T20s
      </div>

      <div className="flex flex-row">
        {code ? "Welcome, User" : "Welcome, random lmao"}
        <Login />
      </div>
    </div>
  )
}

export default Header