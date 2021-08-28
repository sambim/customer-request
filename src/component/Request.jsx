import React from 'react'

const Request = ({request}) => {
    return (
        <div className={`request ${request.processed ? "processed" : "unprocessed"}`}>
            <h3>{request.text}</h3>
            <p>{request.date}</p>
        </div>
    )
}

export default Request
