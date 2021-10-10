import React from 'react'
import Request from './Request';

const Requests = ({requests, onDeleteTask}) => {
    

    return (
        <div>
            {
                requests.map((request, key) => (<Request request={request} key={key} onDeleteTask={onDeleteTask}/>))
            }
        </div>
    )
}

export default Requests
