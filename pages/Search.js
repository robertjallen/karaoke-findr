import React, {useEffect, useState} from 'react'
import {fetchUserLocation} from '../utils/actions'
import {fetchVenuesByLatLng} from '../utils/actions'
import VenueList from "../components/VenueList"

export default function Search(props) {

    const [isLoading, setIsLoading] = useState(false)
    const [userLocation, setUserLocation] = useState('')
    const [venues, setVenues] = useState([])


    useEffect(() => {
        // kick off our asyncronous action creator
        fetchUserLocation()
        .then(function (res) {
            console.log("location response",res.data.loc);
            // dispatch LOCATION_SUCCESS 
            setUserLocation(res.data.loc)
        })
        .catch(function (error) {
            // handle error
            console.log(error.response);
        })
    }, []);
    

    useEffect(()=>{
        // //fetch venues by initial user location
        fetchVenuesByLatLng(userLocation)
        .then(function(res){
            console.log(res)
            setVenues(res.data.response.venues);
        })
        //   .catch(function() {
        //     // Code for handling errors
        //   });
    },[userLocation])


    // useEffect(()=>{
    //     dispatch(fetchVenues(state.location, state.categoryID))
    // },[state.location])
    
    // useEffect(()=>{
    //     dispatch(fetchVenues(state.location, state.categoryID))
    // },[state.categoryID])


    return (
        <div>
            search
            {/* <Form
            userLocation={state.userLocation} 
            categoryID={state.categoryID}
            />
             */}

            <VenueList
                venues={venues}
            />
            <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
        </div>
    )
}