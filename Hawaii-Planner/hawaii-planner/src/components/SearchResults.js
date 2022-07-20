import React from 'react';
import { Link } from "react-router-dom"
import Description from './Description';

const SearchResults = ({features}) => {
    // console.log(features)
    if(!features){
        return <h2>Nothing Found</h2>
    }
    return (
        <div>
        
            <ul>
            {features.map(feature =>(
                
                <Description feature={feature}/>
                        
            
            ))}
            </ul>
        </div>
    );
};

export default SearchResults;