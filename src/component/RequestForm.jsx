import React, {useState} from 'react'

const RequestForm = ({addRequest}) => {

    const [request, setRequest] = useState("");
    const [day, setDay] = useState("");
    const [process, setProcess] = useState(false);

    const onSubmitForm = (e) => {
        e.preventDefault();
        
        if(!request){
            alert("Please add a request");
            return;
        }

        const data = {
            text: request,
            date: day,
            processed: process
        }
        addRequest(data);

        setRequest("");
        setDay("");
        setProcess(false);
    }

    const requestChange = (e) =>  setRequest(e.target.value);
    
    return (
        <form className="add-form" onSubmit={onSubmitForm}>
            <div className="form-control">
                <label>Request</label>
                <input 
                    type="text" 
                    placeholder="Add new Request" 
                    value={request}
                    onChange={requestChange}
                />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input 
                    type="text" 
                    placeholder="Add new Date" 
                    value={day} 
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Processed?</label>
                <input 
                    type="checkbox" 
                    checked={process}
                    value={process}
                    onChange={(e) => setProcess(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save Request" className="btn btn-block"/>
        </form>
    )
}

export default RequestForm
