import React from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

function Player({accessToken, trackUri, callbackFunction}) {
    if(!accessToken){
        return null
    }
    return (
        <SpotifyPlayer autoPlay={true} token = {accessToken} showSaveIcon uris={trackUri ? [trackUri] : []} callback={callbackFunction}/>
    )
}

export default Player