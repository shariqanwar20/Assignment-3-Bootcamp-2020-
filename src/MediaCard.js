import React from 'react'


export default function MediaCard({title, body, imgUrl})
{
    return(
        <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <img src={imgUrl} alt='Harvard Logo'/>
        </div>
    )
}