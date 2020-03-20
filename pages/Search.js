import React, {useEffect, useState} from 'react'
import {fetchUserLocation} from '../utils/actions'
import {fetchVenuesByLatLng} from '../utils/actions'


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
            <VenueList
            {...props}
            location={state.location}
            venues={state.venues}
            /> */}
        </div>
    )
}