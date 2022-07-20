import {useEffect,useState} from 'react';
import {  useSearchParams } from 'react-router-dom'
import SearchResults from './SearchResults';

const Search = ({searchParams}) => {
    const[features, setFeatures] = useState()
    const [searchFeature, setSearchCity] = useState('honolulu')
    const searchOptions ={
        key: process.env.REACT_APP_CTPLANNER_KEY,
        // api: 'https://api.opentripmap.com/0.1/en/places/radius?radius=100000&lon=-157.834549&lat=21.276218&kinds=tourist_facilities%2Cinteresting_places&rate=2&apikey='
        geoApi: 'https://api.opentripmap.com/0.1/en/places/'
    }
    // https://api.opentripmap.com/0.1/en/places/geoname?name=waikiki&apikey=5ae2e3f221c38a28845f05b6d319b5c427c6d4a4e31557ddd057abee

    useEffect(() => {
        getPlaces(searchFeature)
    }, [])

    function getPlaces(searchFeature){
        // const url =`${searchOptions.geoApi}/geoname?apikey=${searchOptions.key}&name=waikiki`
        fetch(`${searchOptions.geoApi}/geoname?apikey=${searchOptions.key}&name=${searchFeature}`)
        .then(responsed => responsed.json())
        .then(responsed => {
            console.log(searchFeature)
            fetch(`${searchOptions.geoApi}radius?radius=100000&lon=${responsed.lon}&lat=${responsed.lat}&kinds=tourist_facilities%2Cinteresting_places&rate=3&limit=5&apikey=${searchOptions.key}`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setFeatures(response.features)
            })
            .catch(console.err)
        })
    }


    function handleChange(event){
        setSearchCity(event.target.value)
    }


    function handleSubmit(event){
        event.preventDefault()
        getPlaces(searchFeature)
        console.log(searchFeature)

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='searchCity'>Search City </label>
                <input type="text" id="searchCity" name="searchCity" placeholder='Search' required onChange={handleChange} value={searchFeature}/>
                <button type="submit">Search</button>
        </form>
        {features&&<SearchResults features={features}/>}
        </div>
    );
};

export default Search;