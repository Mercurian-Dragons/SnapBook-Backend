import React from 'react';

const SearchResults = ({features}) => {
    console.log(features)
    if(!features){
        return <h2>Nothing Found</h2>
    }
    return (
        <div>
        
            <ul>
            {features.map(feature =>(
                
                        <li key={feature.id}>
                            {feature.properties.name}
                        </li>
            
            ))}
            </ul>
        </div>
    );
};

export default SearchResults;