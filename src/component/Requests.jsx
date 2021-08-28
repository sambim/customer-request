import React from 'react'
import Request from './Request';

const Requests = () => {
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

    return (
        <div>
            {
                requests.map((request, key) => (<Request request={request} key={key}/>))
            }
        </div>
    )
}

export default Requests
