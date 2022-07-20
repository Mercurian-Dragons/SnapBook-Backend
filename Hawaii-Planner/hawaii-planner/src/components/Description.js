import React, { useEffect, useState } from 'react';

const Description = ({feature}) => {
    const [data, setData]= useState('')
    useEffect(()=> {
        fetch(`https://api.opentripmap.com/0.1/en/places/xid/${feature.properties.xid}?apikey=5ae2e3f221c38a28845f05b6de1ff5ec50db48a4b53886e12e88117a`)
        .then(res => res.json())
        .then(res => setData(res))
        console.log(data)

    }, [])

    return (
       <>
       <div>
       <p>{data.name}</p>
       </div>
       <div id="showDiv">
       <img src={data.image} alt={data.name} height={200} width={200}/>
       {/* <p>{data.wikipedia_extracts.text}</p> */}
       </div>
       </>
          
    );
};

export default Description;