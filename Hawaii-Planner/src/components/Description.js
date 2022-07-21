import React, { useEffect, useState } from 'react';

const Description = ({feature}) => {
    const [data, setData]= useState('')
    const [info, setInfo]= useState(false)
    const searchOptions ={
        key: process.env.REACT_APP_CTPLANNER_KEY,
    }
    useEffect(()=> {
        console.log(feature.properties.xid)
        fetch(`https://api.opentripmap.com/0.1/en/places/xid/${feature.properties.xid}?apikey=${searchOptions.key}`)
        .then(res => res.json())
        .then(res => setData(res))
        console.log(data)

    }, [feature])
    if(!data){
        return null
    }


    return (
        
        <>

            <div className='button'>
            <button onClick={()=> setInfo(!info)}>{data.name}</button>
            </div>
            {info ? (
            <div id="showDiv">
            <img src={data.preview.source} alt={data.name}/>
            <p>{data.wikipedia_extracts.text}</p>
            </div>
            )
            :null}
            </>
    );
};

export default Description;