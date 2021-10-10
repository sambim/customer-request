import React from 'react'
import {FaTrash} from "react-icons/fa";

const Request = ({request, onDeleteTask}) => {
    return (
        <div className={`request ${request.processed ? "processed" : "unprocessed"}`}>
            <h3>{request.text} <FaTrash style={TrashStyle.deleteIcon} onClick={() => onDeleteTask(request.id)}/> </h3>            
            <p>{request.date}</p>
        </div>
    )
}

const TrashStyle = {
    deleteIcon: {
        color: "darkred",
        cursor: "pointer"
    }
}

export default Request















































