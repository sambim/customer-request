import React, {useState} from 'react'
import Header from "./component/Header"
import Posts from './component/Posts'
import RequestForm from './component/RequestForm'
import Requests from './component/Requests'

const App = () => {
  
  const [showForm, setShowForm] = useState(false);

  const onClickButton = () => setShowForm(!showForm)


  return (
    <div className="container">
      <Header title="Customer Request" showForm={showForm} onClickButton={onClickButton}/>
      {showForm && (<RequestForm />)}
      <Requests />
      {/* <Posts /> */}
    </div>
  )
}

export default App;
