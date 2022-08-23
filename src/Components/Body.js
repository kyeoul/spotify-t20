import React, {useState, useEffect} from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import useAuth from './useAuth'
import Player from './Player'
import CustomRadio from './CustomRadio'
import testImage from '../images/2021-03-26_22.42.21.png'
import '../Animations.css'

function Body({code}) {

    const spotifyApi = new SpotifyWebApi({
        clientId: "4bb6d5551c43447faf7d3a2e012a0159"
    })

    const accessToken = useAuth(code)

    spotifyApi.setAccessToken(accessToken)

    const [playUri, setPlayUri] = useState()
    const [image, setImage] = useState(testImage);
    
    useEffect(() => {
      if(!accessToken) return
      
    }, [accessToken])

    let list_play = [
        {id: 1, name: "Vishal", playlist: "spotify:playlist:7G34lvFHGxe2FZI2j2JbEH"},
        {id: 2, name: "Ryan", playlist: "spotify:playlist:3erTymzBfnOask6cryTYsW"},
        {id: 3, name: "Pavan", playlist: "spotify:playlist:4dHSSFBaXofyqd0oyQF4Kc"},
        {id: 4, name: "Vivek", playlist: "spotify:playlist:1UvFlMHFOi6tiCQchnGQoz"},
        {id: 5, name: "j", playlist: "spotify:playlist:1Iro4VIYviUj6ZdmHvbIyR"},
    ]

    function clicked(v) {
        setPlayUri(v)
        spotifyApi.getPlaylist(v.substring(17))
        .then(function(data) {
            setImage(data.body.images[0].url)
        }, function(err) {
            console.error(err);
        });
    }

    spotifyApi.getAudioAnalysisForTrack("6letGsy9pQEAiVt0VLJIWg")
        .then(function(data) {
            console.log(data.body)
        }, function(err) {
            console.error(err);
        });

    let controlVinyl = (state) => {
        let element = document.getElementById("Vinyl");
        element.style.animationPlayState = state.isPlaying ? 'running' : 'paused';

        console.log(state.track)
        console.log(state.progressMs)
    }

    return (
        <div className="flex flex-col w-full flex-grow bg-gray-800">
            <div className="flex flex-col md:flex-row h-48 flex-grow">
                <div className="flex-1">

                    <svg width="100%" height="100%" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Frame 1">
                            <rect width="120" height="100"/>
                            <g id='thing'>
                                <g id="Vinyl">
                                    <path id="Exclude" fill-rule="evenodd" clip-rule="evenodd" d="M78 33H43V68H78V33ZM60 54C62.2091 54 64 52.2091 64 50C64 47.7909 62.2091 46 60 46C57.7909 46 56 47.7909 56 50C56 52.2091 57.7909 54 60 54Z" fill="url(#pattern0)"/>
                                    <path id="disc" d="M95 50C95 69.33 79.33 85 60 85C40.67 85 25 69.33 25 50C25 30.67 40.67 15 60 15C79.33 15 95 30.67 95 50ZM45.4025 50C45.4025 58.0619 51.9381 64.5975 60 64.5975C68.0619 64.5975 74.5975 58.0619 74.5975 50C74.5975 41.9381 68.0619 35.4025 60 35.4025C51.9381 35.4025 45.4025 41.9381 45.4025 50Z" fill="#373131"/>
                                    <path id="Ellipse 8" d="M89.95 50C89.95 57.8535 86.8653 65.3927 81.3603 70.9938C75.8554 76.5949 68.3706 79.8096 60.5184 79.9455C52.6661 80.0814 45.0746 77.1277 39.379 71.7205C33.6835 66.3133 30.3397 58.8853 30.0679 51.0365C29.7961 43.1878 32.6181 35.5463 37.9259 29.7581C43.2337 23.9698 50.6027 20.498 58.4456 20.0904C66.2884 19.6828 73.9776 22.372 79.8569 27.5789C85.7361 32.7857 89.335 40.0935 89.8783 47.9281" stroke="#585858" stroke-width="0.1"/>
                                    <path id="Ellipse 9" d="M35.05 50C35.05 43.7067 37.4283 37.6459 41.7082 33.032C45.9881 28.4182 51.8535 25.5921 58.1291 25.1202C64.4047 24.6483 70.6268 26.5654 75.5486 30.4873C80.4704 34.4092 83.7283 40.0462 84.6694 46.2688C85.6106 52.4913 84.1655 58.8396 80.6236 64.0416C77.0818 69.2437 71.705 72.9151 65.5706 74.3202C59.4361 75.7253 52.9973 74.7603 47.5444 71.6185C42.0914 68.4767 38.0271 63.3903 36.166 57.3786" stroke="#585858" stroke-width="0.1"/>
                                    <path id="Ellipse 10" d="M40.05 50C40.05 47.3801 40.566 44.7859 41.5686 42.3655C42.5712 39.945 44.0407 37.7457 45.8932 35.8932C47.7457 34.0407 49.945 32.5712 52.3655 31.5686C54.7859 30.566 57.3801 30.05 60 30.05C62.6199 30.05 65.2141 30.566 67.6345 31.5686C70.055 32.5712 72.2543 34.0407 74.1068 35.8932C75.9593 37.7457 77.4288 39.945 78.4314 42.3655C79.434 44.7859 79.95 47.3801 79.95 50C79.95 52.6199 79.434 55.2141 78.4314 57.6345C77.4288 60.055 75.9593 62.2543 74.1068 64.1068C72.2542 65.9593 70.055 67.4288 67.6345 68.4314C65.2141 69.434 62.6199 69.95 60 69.95C57.3801 69.95 54.7859 69.434 52.3655 68.4314C49.945 67.4288 47.7457 65.9593 45.8932 64.1068C44.0407 62.2542 42.5712 60.055 41.5686 57.6345C40.566 55.2141 40.05 52.6199 40.05 50L40.05 50Z" stroke="#585858" stroke-width="0.1"/>
                                    <path id="Ellipse 2" d="M60 20.05C63.9331 20.05 67.8277 20.8247 71.4614 22.3298C75.0951 23.8349 78.3967 26.041 81.1778 28.8222C83.959 31.6033 86.1651 34.9049 87.6702 38.5386C89.1753 42.1723 89.95 46.0669 89.95 50" stroke="#D0D0D0" stroke-width="0.1"/>
                                    <path id="Ellipse 7" d="M60 79.95C52.0568 79.95 44.4389 76.7946 38.8221 71.1778C33.2054 65.5611 30.05 57.9432 30.05 50" stroke="#D0D0D0" stroke-width="0.1"/>
                                    <path id="Ellipse 3" d="M60 25.05C63.2765 25.05 66.5209 25.6954 69.548 26.9492C72.575 28.2031 75.3255 30.0409 77.6423 32.3577C79.9591 34.6745 81.7969 37.425 83.0508 40.452C84.3046 43.4791 84.95 46.7235 84.95 50" stroke="#D0D0D0" stroke-width="0.1"/>
                                    <path id="Ellipse 6" d="M60 74.95C53.3828 74.95 47.0367 72.3213 42.3577 67.6423C37.6787 62.9633 35.05 56.6171 35.05 50" stroke="#D0D0D0" stroke-width="0.1"/>
                                    <path id="Ellipse 4" d="M60 30.05C62.6199 30.05 65.2141 30.566 67.6345 31.5686C70.055 32.5712 72.2543 34.0407 74.1068 35.8932C75.9593 37.7457 77.4288 39.945 78.4314 42.3655C79.434 44.7859 79.95 47.3801 79.95 50" stroke="#D0D0D0" stroke-width="0.1"/>
                                    <path id="Ellipse 5" d="M60 69.95C57.3801 69.95 54.7859 69.434 52.3655 68.4314C49.945 67.4288 47.7457 65.9593 45.8932 64.1068C44.0407 62.2543 42.5712 60.055 41.5686 57.6345C40.566 55.2141 40.05 52.6199 40.05 50" stroke="#D0D0D0" stroke-width="0.1"/>
                                </g>
                            </g>

                            <g id="Handle">
                                <rect id="Rectangle 1" x="101.684" y="23.8522" width="2" height="45" transform="rotate(23 101.684 23.8522)" fill="#D9D9D9"/>
                                <rect id="Rectangle 2" x="84.1259" y="62.5533" width="4" height="8" transform="rotate(23 84.1259 62.5533)" fill="#232020"/>
                                <rect id="Rectangle 3" x="81" y="69.8441" width="4" height="6" transform="rotate(-55.3557 81 69.8441)" fill="#232020"/>
                                <rect id="Rectangle 4" x="104.345" y="15" width="4" height="11.765" transform="rotate(23 104.345 15)" fill="#232020"/>
                                <circle id="Ellipse 1" cx="105" cy="18.5533" r="1" fill="#D9D9D9"/>
                            </g>

                        </g>
                        
                        <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_0_1" transform="translate(-0.388889) scale(0.000925926)"/>
                            </pattern>
                            <image id="image0_0_1" data-name="2021-03-26_22.42.png" width="1920" height="1080" href={image}/>
                        </defs>
                    </svg>
                    
                </div>

                <div className="flex-1 h-full flex flex-col justify-center">
                    {list_play.map((v, i) => {
                        return (
                            <div key={i} onClick={() => clicked(v.playlist)} className="flex flex-row justify-end">
                                <CustomRadio name={v.name}/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex-grow-0">
                <Player accessToken={accessToken} trackUri={playUri} callbackFunction={controlVinyl}></Player>
            </div>
        </div>
    )
}

export default Body