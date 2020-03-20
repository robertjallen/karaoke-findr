import axios from 'axios'


//fetch User Location
//location action
export function fetchUserLocation() {
  return axios.get('https://ipinfo.io?token=ea7f69e10eff85')
}

// // fetch venues by lat & lng 
export function fetchVenuesByLatLng(location){
    console.log({
        secret: process.env.SECRET,
        id: process.env.ID,
      })

    const ID = process.env.ID;
    const SECRET = process.env.SECRET;
    const karaoke = "4bf58dd8d48988d120941735";
    const karaokeBox = "5744ccdfe4b0c0459246b4bb"; 
    return axios.get(`https://api.foursquare.com/v2/venues/search?client_id=${ID}&client_secret=${SECRET}&v=20180323&limit=2&near=${location}&categoryId=${karaoke}&&radius=10000`)
}