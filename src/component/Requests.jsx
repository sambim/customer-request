import React from 'react'
import Request from './Request';

const Requests = ({requests}) => {
    

    return (
        <div>
            {
                requests.map((request, key) => (<Request request={request} key={key}/>))
            }
        </div>
    )
}

export default Requests
