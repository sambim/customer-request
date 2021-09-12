import React from 'react'

const RequestForm = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Request</label>
                <input type="text" placeholder="Add new Request"/>
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" placeholder="Add new Date"/>
            </div>
            <div className="form-control form-control-check">
                <label>Processed?</label>
                <input type="checkbox"/>
            </div>

            <input type="submit" value="Save Request" className="btn btn-block"/>
        </form>
    )
}

export default RequestForm
