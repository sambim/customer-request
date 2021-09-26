import React, {useState} from 'react'
import Header from "./component/Header"
import Posts from './component/Posts'
import RequestForm from './component/RequestForm'
import Requests from './component/Requests'

const App = () => {

  const requests = [
    {
      id: 1,
      text: "We are unable to make order online",
      date: "Sun 5th Feb., 2021",
      processed: true
    },
    {
      id: 2,
      text: "We are booked an appointment",
      date: "Mon 7th Feb., 2021",
      processed: false
    },
    {
      id: 3,
      text: "Are you open on this Sunday",
      date: "Tue 4th Jun., 2021",
      processed: false
    },
    {
      id: 4,
      text: "How can we order meat online",
      date: "Sun 5th Mar., 2021",
      processed: true
    },
    {
      id: 5,
      text: "Do you do delivery to NSW?",
      date: "Wed 5th Jul., 2021",
      processed: false
    }
];
  
  const [showForm, setShowForm] = useState(false);
  const [req, setReq] = useState(requests);

  const onClickButton = () => setShowForm(!showForm)

  const addRequest = (data) => {
    const newData = {...data, id: req.length + 1}
    setReq([...req, newData])
  }


  return (
    <div className="container">
      <Header title="Customer Request" showForm={showForm} onClickButton={onClickButton}/>
      {showForm && (<RequestForm addRequest={addRequest}/>)}
      <Requests requests={req}/>
      {/* <Posts /> */}
    </div>
  )
}

export default App;
