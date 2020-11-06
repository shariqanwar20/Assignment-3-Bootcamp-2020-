import React from 'react'


export default function Gate({isOpen})
{
    return (
        <div>
            <h3>University is {isOpen ? 'Open' : 'Closed'}</h3>
        </div>
    )
}