import { doc, getDocs, collection, query, onSnapshot} from 'firebase/firestore';
import React, {useState, useEffect} from 'react'
import {  BiUser } from 'react-icons/bi';
import { db} from '../firebase';



function Chat() {
  const [messages, setMessages] = useState([]);


    getDocs(collection(db,  "messages"))

    .then((snapshot) => {
      setMessages(
        snapshot.docs.map(doc => doc.data())
      )
    })
    .catch(error => {
      console.log(error.message)
    })

  return (
    <div>
      {/* <form className='chat-form'>
      <BiUser style={{height: "30px", width: "30px"}}/>
       <input type="text" name="text"/>
      </form> */}
    
        {messages && messages.map(({id, text}) => (

              <div key={id}>

                  <p>{text}</p>
              </div>
        ))}



    </div>
  )
}

export default Chat