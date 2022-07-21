import {useEffect,useState} from 'react';
import {  useSearchParams } from 'react-router-dom'
import SearchResults from './SearchResults';

const Search = ({searchParams}) => {
    const[features, setFeatures] = useState()
    const [searchFeature, setSearchCity] = useState('honolulu')
    const searchOptions ={
        key: process.env.REACT_APP_CTPLANNER_KEY,
        geoApi: 'https://api.opentripmap.com/0.1/en/places/'
    }

    useEffect(() => {
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
        setSearchCity('')

    }


    return (
        <div className='searchBar'>
            <form onSubmit={handleSubmit} className='searchForm'>
                <label htmlFor='searchCity'>Search City </label>
                <input className='searchInput' type="text" id="searchCity" name="searchCity" placeholder='City' required onChange={handleChange} value={searchFeature}/>
                <button className='searchButton' type="submit">Search</button>
        </form>
        {features&&<SearchResults features={features}/>}
        </div>
    );
};

export default Search;